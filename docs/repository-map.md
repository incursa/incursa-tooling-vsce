# Repository Map

The portfolio is intentionally multi-repository. Runtime code remains owned by its product repository.

| Product or source | Repository | Delivery boundary | Baseline observed 2026-07-25 |
|---|---|---|---|
| SpecTrace for VS Code | `incursa/spec-trace-vsce` | Web core with optional desktop entry | `main` at `b782955`, clean, version `1.1.2` |
| CSV Contract Workbench | `incursa/csv-contract-vsce` | Web core plus desktop large-file path | `main` at `3a1ca5a`, clean, version `0.5.0` |
| Auditable Reports for VS Code | `incursa/auditable-reports-vsce` | Windows desktop extension | `main` at `42171bc`, clean, version `0.1.2` |
| Auditable Reports bundle compiler | `incursa/auditable-reports` | Canonical artifact, shared portable renderer, Chart.js, Paged.js, and PDF boundary | public Apache-2.0 `main` at `3f986ff`; full local gate and public CI pass |
| Database Knowledge Workbench | `incursa/database-knowledge-vsce` | Windows-first extension plus bounded web subset | `main` initialized; feature commit `799e1d1`; draft PR `#1` |
| Incursa Tooling | `incursa/incursa-tooling-vsce` | Metadata-only extension pack and portfolio control | Empty public repository cloned locally |
| Incursa Tooling Installer | `incursa/incursa-tooling-installer` | User-scoped Inno Setup aggregator | Empty public repository cloned locally |
| Workbench | `incursa/workbench` | Optional structured desktop helper | `main` at `9614701`; unrelated deletion present |
| SpecTrace standard | `incursa/spec-trace` | Canonical artifact model and templates | `main` at `37a1f73`; unrelated changes present |
| Database Tools | `incursa/database-tools` | Host-independent knowledge/query/overlay/workspace/operations engines | clean feature commit `e242dd5`; draft PR `#2` |
| Database Tools content | `incursa/database-tools-content` | Approved generic content | clean feature commit `6f89ca4`; draft PR `#1` |
| Incursa Repo Manager | `incursa/repomanager` | Standalone .NET application | clean linked-worktree feature commit `4a76d63`, draft PR `#1`; original `main` worktree vendor-asset deletions remain protected |
| Crystal Report Inspector | `incursa/rpt-to-xml-modern` | Standalone Windows tool | sanitized public Apache-2.0 `main` at `df896b6`; CI passes; compiled vendor samples excluded |
| PDF Workbench | `incursa/pdfxchange-tools-dotnet` | Standalone Windows wrapper | public Apache-2.0 `main` at `b3bb32e`; build, 15 tests, SpecTrace validation, package CI, and CodeQL pass |
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
