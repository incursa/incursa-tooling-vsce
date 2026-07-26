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
| 0. Control baseline | Complete | `docs/repository-map.md`; GitHub auth verified; requested repositories cloned, initialized, and defaulted to `main` |
| 1. Portfolio foundation | Complete; release pending | Control docs `7839fe4`; canonical SpecTrace artifacts; metadata-only pack PR `incursa/incursa-tooling-vsce#1` |
| 2. CSV semantic comparison | Complete; release pending | Commit `06799a7`; 37 Node tests, 25 existing checks, 8 parity fixtures, real web-host test, and protected exact-package publication; PR `incursa/csv-contract-vsce#2` |
| 3. SpecTrace and Workbench | Complete with host limitation; release pending | Commit `1027fc3`; 33 web-host tests, optional desktop contract, and a real traceability-tree screenshot; ARM64 helper could not execute on this host; PR `incursa/spec-trace-vsce#2` |
| 4. Database Knowledge Workbench | Complete; release pending | Commit `799e1d1`; 17 security/parity tests, unbiased CSP nonces, dual bundles, extension-host/visual QA, and protected exact-package publication; PR `incursa/database-knowledge-vsce#1` |
| 5. Auditable Reports | Complete; release pending | Extension commit `f064f49`; public bundle repo `3f986ff` with renderer fix `ee94996`; installed-host regression, desktop/mobile verification, paginated HTML, and PDF pass |
| 6. Standalone Windows tools | Complete with licensed-host limits; release pending | Repo Manager draft PR `#1`; sanitized public Crystal source `df896b6`; PDF Workbench draft PR `incursa/pdfxchange-tools-dotnet#1` at `e0df004` |
| 7. Incursa Tooling pack | Complete; release pending | Verified metadata-only 17-entry VSIX; portfolio release-policy verifier covers all five extensions; draft PR `incursa/incursa-tooling-vsce#1` |
| 8. Unified installer | Seven-component offline portfolio complete; companion blockers recorded | Lifecycle-tested revision 4 with Repo Manager and generic-only Database Tools; exact pins/checksum in installer docs and draft PR `incursa/incursa-tooling-installer#1` |
| 9. Release handoff | Ready with limitations | Nine draft PRs plus three public companion repositories, five VSIXes, unified installer, Database Tools installer, Repo Manager ZIP, Crystal ZIP, Figma reference, and exact remaining external gates recorded |

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
- Packaging commit: `1085964`.
- Gate: `npm run release:check` passed.
- Tests: 3 passed, 0 failed.
- VSIX: `artifacts/incursa-tooling-vsce.vsix`.
- Package size: `81,451` bytes.
- SHA-256: `96163dbf6806e2f6f43a5ffa47f031aa95c023cbd5d899f5a02d260087083372`.
- VSIX identity: `incursa.incursa-tooling-vsce`; 17 entries; no `main`, `browser`, activation events, or runtime bundle.
- Brand assets: deterministic 128 px icon, banner, monochrome SVG, and visually inspected brand sheet.
- Audit: `npm audit --omit=dev` reported 0 production vulnerabilities.
- Release and Marketplace URLs: pending release authorization and workflow execution.

### 2026-07-24 — verified extension portfolio

| Product | Version | Commit | Package bytes | SHA-256 | Draft PR |
|---|---:|---|---:|---|---|
| SpecTrace for VS Code | 1.2.0 | `1027fc3` | 854,584 | `0ea4af965c99d80210a47656e2d596832428d8452b33e5ea6f234454f78d2086` | `incursa/spec-trace-vsce#2` |
| CSV Contract Workbench | 0.6.0 | `06799a7` | 574,143 | `429478acfc36ab19c42364faf4138a65007099624b905cecc1ff9e80f156bdad` | `incursa/csv-contract-vsce#2` |
| Auditable Reports for VS Code | 0.1.3 | `f064f49` | 368,898 | `dbdb41463bf2d1cdc561ee8277ebf4424bf568f74141f6a4bb729bf9c49bc47b` | `incursa/auditable-reports-vsce#1` |
| Database Knowledge Workbench | 0.1.0 | `799e1d1` | 94,966 | `ed85cc658562c2b2e02983d11e1ed619755e579fcf4185c8f58f41e54932a002` | `incursa/database-knowledge-vsce#1` |
| Incursa Tooling | 0.1.0 | `1085964` | 81,451 | `96163dbf6806e2f6f43a5ffa47f031aa95c023cbd5d899f5a02d260087083372` | `incursa/incursa-tooling-vsce#1` |

- Every extension release gate built, tested, packaged, inspected, and scanned the public package boundary.
- SpecTrace and CSV executed important workflows in the real VS Code web-extension host; neither browser bundle imports Node/native helpers.
- SpecTrace now ships a real 1,600×1,200 VS Code web-host screenshot of the traceability tree and requirements workspace; its Chrome smoke path also verifies deterministic command-palette and tree navigation.
- Database Knowledge visual and interaction QA passed at desktop and narrow widths; its public VSIX contains no private overlays or snapshots. A high-severity CodeQL finding in CSP nonce generation was fixed with unbiased rejection sampling and boundary tests.
- `scripts/Test-PortfolioReleasePolicy.ps1` verifies that all five Marketplace workflows use the protected `marketplace` environment, fail clearly without `VSCE_PAT`, and publish the already inspected VSIX through `--packagePath`.
- Auditable Reports executed its bundled compiler from a real Windows extension host and retained canonical evidence in a chartless, source-hidden decision brief.
- The sibling bundle repository now adapts the shared Data Analytics delivery boundary without forking its runtime. It corrects scrollbar-inclusive top-bar sizing at desktop and mobile widths and uses explicit browser startup budgets. The full gate passes for chart-bearing and chartless reports, source-dialog interaction, Chart.js, Paged.js, paginated HTML, and PDF at local commit `ee94996`.

### 2026-07-24 — Incursa Tooling Setup foundation

- Repository initialized and pushed: `incursa/incursa-tooling-installer`.
- Foundation commit: `15e74f8`.
- Pinned extension-pack smoke commit: `d6e4dd1`.
- Draft pull request: `https://github.com/incursa/incursa-tooling-installer/pull/1`.
- Repository gate: strict component ID, remote, full commit, clean worktree, filename, byte-count, VSIX identity, and SHA-256 verification passed.
- Negative tests: unexpected component, dirty repository, byte-count tamper, and same-size SHA-256 tamper all rejected.
- Inno Setup: version `6.7.3`; per-user compile passed with `PrivilegesRequired=lowest`.
- Smoke setup: `artifacts/Incursa.Tooling-Setup-0.1.0-r1.exe`; `2,182,157` bytes; SHA-256 `9C3F20FC9F55FE4A76F982FC3104C2F8BA518E639C61935ED056381FD5C8B1BB`.
- Fresh minimum install, reinstall/repair, and uninstall passed; user-authored sentinel survived uninstall.
- Missing VS Code Insiders produced the intended offline manual command without failing setup.
- Remaining: full component manifest, typical/full/modify/prior-revision upgrade tests, standalone tool packages, SSMS/SAP/PDF-XChange prerequisite cases, locked files, and path variants.

### 2026-07-24 — Incursa Tooling Setup extension portfolio

- Draft PR: `https://github.com/incursa/incursa-tooling-installer/pull/1`; exact final commit and checksum are maintained with the installer fixture and `docs/windows-installer.md`.
- Manifest: `fixtures/portfolio-extensions.components.json`; five clean repositories and exact VSIX identities validated.
- Setup: `artifacts/Incursa.Tooling-Setup-0.1.0-r2.exe`; the copy-ready checksum sidecar is generated beside it.
- Minimum, modify-to-typical, modify-to-full, same-revision repair, and uninstall passed in an isolated directory with VS Code tasks disabled.
- The installed-components manifest matched the chosen type and a user-authored sentinel survived uninstall.
- Remaining installer matrix: prior-revision upgrade, locked executable/output, non-ASCII path, Database Tools/SSMS, Repo Manager, Crystal, and PDF components.

### 2026-07-24 — Repo Manager and installer revision 3

- Repo Manager implementation commit: `4a76d630f6d659e88b7b8351f6f771058acc5419`.
- Draft PR: `https://github.com/incursa/repomanager/pull/1`; Windows verification passed.
- Portable ZIP: `repomanager-portfolio/artifacts/Incursa.RepoManager-0.1.0-win-x64.zip`; `55,921,169` bytes; SHA-256 `75a95367d300f12fa6928add73bef789f85630c9b89ee72787c471dd3add39d6`.
- Verification: 46 tests, deterministic double-build, packaged doctor, no vulnerable NuGet packages, and real Chrome/Playwright QA at 1440×1000 and 390×844 with no console issues or horizontal overflow.
- No-AI operation was verified with every Codex path removed. Commit/push now requires an exact read-only preview, explicit confirmation, configured dashboard scope, a remote, and an unchanged status/content fingerprint.
- The isolated linked worktree supported the portfolio changes without touching the original 56-file vendor-asset deletion set.
- Installer revision 3: `artifacts/Incursa.Tooling-Setup-0.1.0-r3.exe`; the exact final byte count, SHA-256, component pins, and source commit are maintained in the installer repository test matrix and draft PR so this coordination ledger does not retain a superseded setup checksum.
- Installer lifecycle: r2→r3 upgrade, full non-ASCII/space-containing path, installed Repo Manager doctor without Codex, locked executable exit 5, repair after unlock, locked output preflight, and uninstall/sentinel preservation all passed.

### 2026-07-24 — Database Tools and installer revision 4

- A clean linked Database Tools worktree at commit `8d5fdaffcde106b82cfa8a709adafc9fee17f27b` produced the generic-only `0.13.2` installer from content checkpoint `6f89ca49ae94dc134f27c0fbb586477f7e38230a`.
- Database Tools installer: `database-tools-portfolio/artifacts/Incursa.DatabaseTools-Setup-0.13.2-6f89ca4-r2.exe`; `4,424,480` bytes; SHA-256 `5AF1618534D6A5C36ADE0CF7CE68EE5E5EC47F60A7213E03FD5764FB3BA13E91`.
- Package evidence confirms 154 manifested files, zero bundled knowledge sources, no private content, and no customer overlay. Silent install without SSMS, Unicode/space path handling, and ordinary uninstall with a preserved user workspace sentinel passed.
- The Database Tools source line is now published for review on draft PR `incursa/database-tools#2` at `e242dd5`; the installer remains pinned to the tested source commit `8d5fdaf`.
- The generic content checkpoint is published for review on draft PR `incursa/database-tools-content#1` at `6f89ca4`. No tag, release, live SQL execution, observed bundle, or customer overlay was published.
- Installer revision 4 pins and stages the verified Database Tools setup alongside the five VSIX packages and Repo Manager. Its capability report explicitly treats missing SSMS 22 as nonfatal; interactive setup alone may launch the nested installer.
- Installer lifecycle: r3→r4 upgrade, seven-component full install, exact nested-installer hash verification, missing-SSMS capability reporting, Repo Manager no-Codex doctor, locked executable recovery, and uninstall/sentinel preservation all passed. Exact setup bytes and checksum remain in the installer repository evidence.

### 2026-07-24 — standalone tool evidence and blockers

- Crystal Report Inspector `1.3.0` commit `dfe87cf` passes 14 tests, hostile-XML rejection, local HTML inspection, bounded comparison, and safe-package smoke.
- Crystal safe-parts ZIP: `rpt-to-xml-modern/artifacts/CrystalReportInspector-1.3.0.zip`; `1,750,088` bytes; SHA-256 `edb34395e356a033b510a2c17845599e7c4b700c05d4854b67c93f3db23ea33b`.
- The safe package intentionally excludes SAP assemblies. XML inspection works; `doctor` accurately reports x86 RPT extraction unavailable because the licensed runtime is absent.
- Crystal source is public at `incursa/rpt-to-xml-modern` commit `df896b6`. Its
  public history excludes all 44 compiled vendor `.rpt` samples and generated
  release artifacts while retaining Apache-2.0 licensing and the inherited MIT notice.
- Repo Manager was implemented in the clean linked worktree `repomanager-portfolio`; the original worktree's 56 tracked vendor-asset deletions remain untouched.
- PDF Workbench source is public and Apache-2.0 at
  `incursa/pdfxchange-tools-dotnet` draft PR `#1`, commit `e0df004`. The polished
  WPF app, preview-first CLI, six curated workflows, safe unique-output plans,
  capability detection, and self-contained portable packaging are complete.
  Local verification passes 25 tests and validates 12 artifacts with 138
  requirements. Licensed live PDF processing remains an external host gate.

### 2026-07-25 — renderer repair and Database Tools publication

- Auditable Reports local commit `ee94996` fixes the shared portable-reader boundary without disabling verification. The complete repository gate passes at 1,440×1,000 and 390×844, including 22 Python tests, static chart extraction, source-dialog interaction, chartless cleanup, Paged.js HTML, and PDF.
- `incursa/database-tools#2` is a draft PR at `e242dd5`. Visual Studio/MSBuild Release build and VSIX packaging pass; 345 .NET tests pass. The VSIX SHA-256 is `D5C8C117FCAFD057D87E2C6D22B6B48B8ACD7D313D9579842877C32D2FFB7027`.
- `incursa/database-tools-content#1` is a draft PR at `6f89ca4`. Validation covers 33 generic SQL Server and 81 Vista queries; 51 tests, deterministic generic builds, and generic packaging pass. The generic ZIP SHA-256 is `26126712C62F52ED31094E7EE9BC780D12B377F61908A310F41B346C7717EE08`.
- Targeted scans of both public diffs found no credentials, client/overlay/private paths, observed knowledge bundles, connection strings, user-profile paths, or named-client material.

### 2026-07-25 — public companion repositories

- `incursa/auditable-reports` is public and Apache-2.0 at `3f986ff`. The complete local browser/PDF gate passes, and GitHub CI plus CodeQL are green.
- `incursa/rpt-to-xml-modern` is public and Apache-2.0 at sanitized commit `df896b6`. The public tree contains zero `.rpt` samples and zero generated artifacts, preserves the original MIT attribution, and passes 14 tests plus XML inspection/comparison verification.
- `incursa/pdfxchange-tools-dotnet` is public and Apache-2.0. Draft PR `#1` at `e0df004` contains no PDF-XChange binaries, manuals, saved settings, OCR engines, license keys, or customer PDFs.

### 2026-07-26 — PDF Workbench polish

- Added the standalone WPF application and companion CLI with six curated workflows: OCR, text extraction, split, merge, image export, and report preparation.
- Execution is preview-first, output collisions use unique names, desktop runs require final confirmation, and cancellation terminates the external process tree.
- Capability detection handles an absent PDF-XChange installation without failing unrelated inspection or packaging workflows.
- Repository verification passes with 25 tests, zero build warnings, 12 valid SpecTrace artifacts, and 138 traced requirements.
- Portable ZIP: `PDFWorkbench-0.2.0-win-x64.zip`; 93,714,863 bytes; SHA-256 `78a9f3a3afafd8bdfae5bfce2307b376afc3c87b6400c58e1b305289655ad97d`.
- Draft PR: `https://github.com/incursa/pdfxchange-tools-dotnet/pull/1`; commit `e0df0048f75b3e6e73bc2b5e63388b4fbe217d2e`.

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
