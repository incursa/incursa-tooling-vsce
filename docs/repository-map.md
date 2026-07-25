# Repository Map

The portfolio is intentionally multi-repository. Runtime code remains owned by its product repository.

| Product or source | Repository | Delivery boundary | Baseline observed 2026-07-24 |
|---|---|---|---|
| SpecTrace for VS Code | `incursa/spec-trace-vsce` | Web core with optional desktop entry | `main` at `b782955`, clean, version `1.1.2` |
| CSV Contract Workbench | `incursa/csv-contract-vsce` | Web core plus desktop large-file path | `main` at `3a1ca5a`, clean, version `0.5.0` |
| Auditable Reports for VS Code | `incursa/auditable-reports-vsce` | Windows desktop extension | `main` at `42171bc`, clean, version `0.1.2` |
| Database Knowledge Workbench | `incursa/database-knowledge-vsce` | Windows-first extension plus bounded web subset | `main` initialized; feature commit `5d71bb8`; draft PR `#1` |
| Incursa Tooling | `incursa/incursa-tooling-vsce` | Metadata-only extension pack and portfolio control | Empty public repository cloned locally |
| Incursa Tooling Installer | `incursa/incursa-tooling-installer` | User-scoped Inno Setup aggregator | Empty public repository cloned locally |
| Workbench | `incursa/workbench` | Optional structured desktop helper | `main` at `9614701`; unrelated deletion present |
| SpecTrace standard | `incursa/spec-trace` | Canonical artifact model and templates | `main` at `37a1f73`; unrelated changes present |
| Database Tools | `incursa/database-tools` | Host-independent knowledge/query/overlay/workspace/operations engines | `main` at `8d5fdaf`, ahead of remote; unrelated files present |
| Database Tools content | `incursa/database-tools-content` | Approved generic content | `main` at `6f89ca4`, ahead of remote |
| Incursa Repo Manager | `incursa/repomanager` | Standalone .NET application | `main` at `010904d`; unrelated vendor-asset deletions present |
| Crystal Report Inspector | local `rpt-to-xml-modern` | Standalone Windows tool | feature commit `dfe87cf`; no remote configured |
| PDF Workbench | local `pdfxchange-tools-dotnet` | Standalone Windows wrapper | uncommitted initial repository; no remote configured |
| Incursa UI Kit | `incursa/ui-kit` | Canonical code design tokens and components | `main` at `68e2ad4`; substantial unrelated design-system work present |
| PowerShell CSV behavior | local `powershell-tools` | Parity/reference behavior only | not a Git repository at workspace root |

## Dependency direction

```text
Figma library <-> @incursa/ui-kit bridge
                         |
                         v
       product-local webviews and Marketplace assets

spec-trace standard ---> spec-trace-vsce <--- optional Workbench JSON contract

database-tools libraries/content ---> database-knowledge-vsce

individual verified packages ---> incursa-tooling-installer

member extension identifiers ---> incursa-tooling-vsce
```

The extension pack must not import member runtime code. The installer must consume pinned artifacts and must not copy product source.

## Protected worktree rule

Pre-existing dirty files belong to the user. Work in a clean repository or an intentional feature branch, and avoid the changed paths above. If a required change overlaps a protected path, first prove the overlap, inspect the diff, and preserve the user change.
