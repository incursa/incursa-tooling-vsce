# Incursa Tooling Portfolio Plan

Status: active implementation plan
Coordination repository: `incursa/incursa-tooling-vsce`
Workspace: `C:\shared\src\incursa`

## Objective

Deliver a coherent portfolio of focused VS Code extensions and safe, user-scoped Windows tools without combining their runtime implementations. Canonical SpecTrace artifacts and repository tests are the machine-verifiable contract; this document is the human-readable execution ledger.

## Delivery rules

- Preserve existing Marketplace identities and repository release conventions.
- Keep SpecTrace and CSV Contract Workbench useful in VS Code web hosts.
- Keep desktop helpers optional, trust-gated, bounded, structured, and free of inbound listeners.
- Keep public packages free of customer data, credentials, connection strings, private overlays, and confidential screenshots.
- Reuse `@incursa/ui-kit` and Figma file `aD7j6dGc6GA6S2MFQB39s3`.
- Keep every product independently buildable, versioned, packaged, installed, upgraded, and uninstalled.
- Do not tag, publish, merge, or create Marketplace releases until the applicable release gate passes.

## Live milestone checklist

Evidence links are repository-relative until a public URL or release artifact exists.

| Milestone | State | Evidence and next gate |
|---|---|---|
| 0. Control baseline | In progress | `docs/repository-map.md`; GitHub auth verified 2026-07-24; three requested empty repositories cloned |
| 1. Portfolio foundation | In progress | Control documents committed at `7839fe4`; extension-pack scaffold and canonical SpecTrace artifacts in implementation |
| 2. CSV semantic comparison | Pending | Canonical TypeScript comparison schema/engine, parity fixtures, browser-host tests, desktop streaming/spill path |
| 3. SpecTrace and Workbench | Pending | Portable navigation/validation surfaces, optional trust-gated Workbench JSON contract, parity fixtures |
| 4. Database Knowledge Workbench | Pending | Bundle verification/index/search/inspection, safe candidate edits, sanitized fixtures, verified VSIX |
| 5. Auditable Reports | Pending | Installed-VSIX compiler-path regression, print forwarding, artifact/PDF/HTML validation, atomic output |
| 6. Standalone Windows tools | Pending | Repo Manager, Crystal Report Inspector, and PDF Workbench portable packages or precise external blockers |
| 7. Incursa Tooling pack | Implementation complete; release pending | Commit `4582e7b`; verified metadata-only VSIX and capability checks; GitHub/Marketplace release remains gated |
| 8. Unified installer | Pending | User-scoped selectable Inno Setup build, pinned component manifest, install/modify/repair/upgrade/uninstall evidence |
| 9. Release handoff | Pending | Branches, commits, packages, hashes, release URLs, Marketplace URLs, Figma reference, remaining limitations |

## Milestone evidence log

### 2026-07-24 — control baseline

- GitHub authentication: active account with repository and workflow access; no credential value recorded.
- New repositories cloned at the requested paths:
  - `database-knowledge-vsce`
  - `incursa-tooling-vsce`
  - `incursa-tooling-installer`
- Existing extension identities confirmed:
  - `incursa.spec-trace-vsce` version `1.1.2`
  - `incursa.csv-contract-vsce` version `0.5.0`
  - `incursa.auditable-reports-vsce` version `0.1.2`
- Connected Figma library inspected:
  - file key: `aD7j6dGc6GA6S2MFQB39s3`
  - collections: Primitives, Color, Spacing & Size, Typography
  - component QA: 35 source-aligned components
- Protected unrelated changes were detected in `spec-trace`, `database-tools`, `repomanager`, `pdfxchange-tools-dotnet`, and `ui-kit`. Implementation must not overwrite or absorb them accidentally.
- Canonical execution contract: `specs/requirements/incursa-tooling/SPEC-PORTFOLIO.json`, `specs/work-items/WI-PORTFOLIO-0001.json`, and `specs/verification/VER-PORTFOLIO-0001.json`.

### 2026-07-24 — Incursa Tooling extension pack

- Product version: `0.1.0`.
- Commit: `4582e7b`.
- Gate: `npm run release:check` passed.
- Tests: 3 passed, 0 failed.
- VSIX: `artifacts/incursa-tooling-vsce.vsix`.
- Package size: `81,570` bytes.
- SHA-256: `1164b91da155a618d30e2dd2b96978ec852473a232b338ba32b036cda1038321`.
- VSIX identity: `incursa.incursa-tooling-vsce`; 17 entries; no `main`, `browser`, activation events, or runtime bundle.
- Brand assets: deterministic 128 px icon, banner, monochrome SVG, and visually inspected brand sheet.
- Audit: `npm audit --omit=dev` reported 0 production vulnerabilities.
- Release and Marketplace URLs: pending release authorization and workflow execution.

## Required evidence for each product milestone

Each completed row must record:

1. Test commands and exit results.
2. Package path, filename, byte count, and SHA-256.
3. Product version and commit SHA.
4. Browser-host evidence for portable extensions.
5. Confidentiality/package-content scan result.
6. Release URL and Marketplace status, or the exact missing external prerequisite.

## Remaining known external gates

- Marketplace publication requires the repository Actions secret `VSCE_PAT`; its value must never be printed or passed manually.
- Crystal report loading requires the correctly bitness-matched SAP Crystal runtime.
- PDF operations require a locally installed and licensed PDF-XChange executable/capability.
- Inno Setup release compilation requires Inno Setup 6.
