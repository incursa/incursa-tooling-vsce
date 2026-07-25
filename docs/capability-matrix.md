# Capability Matrix

This matrix is the portfolio source for generated or checked Marketplace capability tables.

| Product | VS Code web | VS Code desktop | Standalone Windows | Offline default | Subprocess boundary | First release scope |
|---|---:|---:|---:|---:|---|---|
| SpecTrace for VS Code | Yes | Yes | No | Yes | Optional Workbench, trust-gated | Canonical artifact browsing, editing, validation, trace/proof/provenance views |
| CSV Contract Workbench | Yes | Yes | CLI support remains independent | Yes | Desktop streaming/helper paths only | Contract authoring plus deterministic semantic comparison |
| Auditable Reports for VS Code | No claim | Yes | Canonical compiler remains separately usable | Yes | Bundled Python compiler, trust-gated | Report Markdown preview, artifact, paginated HTML, and PDF workflows |
| Database Knowledge Workbench | Bounded compact-bundle subset if proven | Yes, Windows-first | Existing Database Tools CLI remains independent | Yes | Narrow structured CLI adapter | Verified bundle browsing, indexing, search, inspection, backlog/candidate edits |
| Incursa Tooling | Yes | Yes | No | Yes | None | Metadata-only extension pack |
| Incursa Repo Manager | No | No | Yes | Yes | Allowlisted local process templates | Repository operations with preview/confirmation and optional AI detection |
| Crystal Report Inspector | No | No | Yes | Yes | SAP runtime load boundary | RPT extraction, browsing, and definition comparison |
| PDF Workbench | No | No | Yes | Yes | Allowlisted PDF-XChange commands | OCR, extraction, split, merge, image export, report preparation |
| Incursa Tooling Setup | No | No | Yes | Yes | Selected installers and VS Code/SSMS CLIs | Verified, selectable, user-scoped aggregation |

## Portable-extension constraints

- Browser bundles use pure TypeScript/browser-safe packages and `vscode.workspace.fs`.
- Browser bundles contain no `node:*`, direct filesystem, subprocess, native module, Python, or .NET dependency.
- Browser operations enforce explicit file/row limits and bounded diagnostics.
- Desktop-only commands are hidden with `!isWeb` where applicable and also fail closed at runtime.
- Web support is accepted only after the VS Code web-extension host exercises important workflows.

## Privacy and mutation posture

| Surface | Default |
|---|---|
| Telemetry | Disabled; no telemetry implementation |
| Network upload | None |
| SQL | No live execution in Database Knowledge Workbench v1; read-only/fail-closed elsewhere |
| Mutations | Preview/dry-run plus explicit confirmation |
| Logs | Metadata and bounded diagnostics only; no source row values, document bodies, secrets, or connection strings |
| Generated output | Atomic replacement; no partial publication |
