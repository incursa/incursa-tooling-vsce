[CmdletBinding()]
param(
    [string]$WorkspaceRoot
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$repositoryRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
if ([string]::IsNullOrWhiteSpace($WorkspaceRoot)) {
    $WorkspaceRoot = [System.IO.Path]::GetFullPath((Join-Path $repositoryRoot '..'))
} else {
    $WorkspaceRoot = [System.IO.Path]::GetFullPath($WorkspaceRoot)
}

$workflows = @(
    @{ Product = 'SpecTrace for VS Code'; Repository = 'spec-trace-vsce'; Path = '.github\workflows\publish.yml' },
    @{ Product = 'CSV Contract Workbench'; Repository = 'csv-contract-vsce'; Path = '.github\workflows\release.yml' },
    @{ Product = 'Auditable Reports for VS Code'; Repository = 'auditable-reports-vsce'; Path = '.github\workflows\release.yml' },
    @{ Product = 'Database Knowledge Workbench'; Repository = 'database-knowledge-vsce'; Path = '.github\workflows\release.yml' },
    @{ Product = 'Incursa Tooling'; Repository = 'incursa-tooling-vsce'; Path = '.github\workflows\release.yml' }
)

function Get-PublishingJobBlock([string[]]$Lines, [int]$PublishLineIndex, [string]$WorkflowPath) {
    $jobStart = -1
    for ($index = $PublishLineIndex; $index -ge 0; $index--) {
        if ($Lines[$index] -match '^  [A-Za-z0-9_-]+:\s*$') {
            $jobStart = $index
            break
        }
    }
    if ($jobStart -lt 0) {
        throw "$WorkflowPath does not place the Marketplace publish command inside a named job."
    }

    $jobEnd = $Lines.Count
    for ($index = $jobStart + 1; $index -lt $Lines.Count; $index++) {
        if ($Lines[$index] -match '^  [A-Za-z0-9_-]+:\s*$') {
            $jobEnd = $index
            break
        }
    }

    return ($Lines[$jobStart..($jobEnd - 1)] -join "`n")
}

$results = foreach ($workflow in $workflows) {
    $workflowPath = Join-Path (Join-Path $WorkspaceRoot $workflow.Repository) $workflow.Path
    if (-not (Test-Path -LiteralPath $workflowPath -PathType Leaf)) {
        throw "Missing release workflow for $($workflow.Product): $workflowPath"
    }

    $lines = @(Get-Content -LiteralPath $workflowPath)
    $publishLines = @(
        for ($index = 0; $index -lt $lines.Count; $index++) {
            if ($lines[$index] -match '\bnpx\s+vsce\s+publish\b') {
                $index
            }
        }
    )
    if ($publishLines.Count -ne 1) {
        throw "$workflowPath must contain exactly one Marketplace publish command; found $($publishLines.Count)."
    }

    $jobBlock = Get-PublishingJobBlock $lines $publishLines[0] $workflowPath
    if ($jobBlock -notmatch '(?m)^\s{4}environment:\s*marketplace\s*$') {
        throw "$workflowPath must publish only from the protected marketplace environment."
    }
    if ($jobBlock -notmatch '\$\{\{\s*secrets\.VSCE_PAT\s*\}\}') {
        throw "$workflowPath must source VSCE_PAT from the marketplace environment secret."
    }
    if ($jobBlock -notmatch '(?i)VSCE_PAT is (required|not configured)') {
        throw "$workflowPath must fail with a clear missing-VSCE_PAT diagnostic."
    }
    if ($jobBlock -notmatch '\bnpx\s+vsce\s+publish\s+--packagePath\b') {
        throw "$workflowPath must publish the already inspected VSIX through --packagePath."
    }
    if ($jobBlock -match '(?i)(env\.VSCE_PAT|VSCE_PAT)\s*!=\s*[''"]{2}') {
        throw "$workflowPath must fail when VSCE_PAT is absent instead of silently skipping publication."
    }

    [pscustomobject]@{
        Product = $workflow.Product
        Workflow = $workflowPath
        Policy = 'passed'
    }
}

$results | Format-Table -AutoSize
Write-Output "Verified $($results.Count) Marketplace release workflows."
