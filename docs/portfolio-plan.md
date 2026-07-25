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
| 5. Auditable Reports | Extension complete; final-bundle renderer blocked | Commit `f064f49`; installed-host regression, verified VSIX, and exact-package publication; sibling portable-renderer failure recorded below |
| 6. Standalone Windows tools | Repo Manager complete; Crystal/PDF blockers recorded | Repo Manager commit `4a76d63`, verified portable ZIP, and draft PR `incursa/repomanager#1`; Crystal commit `dfe87cf` and verified safe-parts ZIP |
| 7. Incursa Tooling pack | Complete; release pending | Verified metadata-only 17-entry VSIX; portfolio release-policy verifier covers all five extensions; draft PR `incursa/incursa-tooling-vsce#1` |
| 8. Unified installer | Seven-component offline portfolio complete; companion blockers recorded | Lifecycle-tested revision 4 with Repo Manager and generic-only Database Tools; exact pins/checksum in installer docs and draft PR `incursa/incursa-tooling-installer#1` |
| 9. Release handoff | Ready with limitations | Seven draft PRs, five VSIXes, unified installer, Database Tools installer, Repo Manager ZIP, Crystal ZIP, Figma reference, and exact remaining external gates recorded |

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
- Auditable Reports executed its bundled compiler from a real Windows extension host and retained canonical evidence in a chartless, source-hidden decision brief. The sibling final-report gate separately exposed a current Data Analytics portable-renderer regression: intermittent reader startup timeout and a 1440px horizontal-overflow failure. Compiler, Chart.js, Paged.js, paginated HTML, and PDF checks before that stage passed; no validation was disabled.
- A fresh full sibling gate on 2026-07-24 reproduced the external renderer failure as `reader_timeout` while its state remained `fallback`; the sibling repository remained clean.

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
- The source commit is a clean local build point atop pre-existing local work and is deliberately not represented as a remote release. The portfolio did not publish those unrelated pre-existing commits.
- Installer revision 4 pins and stages the verified Database Tools setup alongside the five VSIX packages and Repo Manager. Its capability report explicitly treats missing SSMS 22 as nonfatal; interactive setup alone may launch the nested installer.
- Installer lifecycle: r3→r4 upgrade, seven-component full install, exact nested-installer hash verification, missing-SSMS capability reporting, Repo Manager no-Codex doctor, locked executable recovery, and uninstall/sentinel preservation all passed. Exact setup bytes and checksum remain in the installer repository evidence.

### 2026-07-24 — standalone tool evidence and blockers

- Crystal Report Inspector `1.3.0` commit `dfe87cf` passes 14 tests, hostile-XML rejection, local HTML inspection, bounded comparison, and safe-package smoke.
- Crystal safe-parts ZIP: `rpt-to-xml-modern/artifacts/CrystalReportInspector-1.3.0.zip`; `1,750,088` bytes; SHA-256 `edb34395e356a033b510a2c17845599e7c4b700c05d4854b67c93f3db23ea33b`.
- The safe package intentionally excludes SAP assemblies. XML inspection works; `doctor` accurately reports x86 RPT extraction unavailable because the licensed runtime is absent.
- Crystal cannot be pushed or released because `rpt-to-xml-modern` has no Git remote.
- Repo Manager was implemented in the clean linked worktree `repomanager-portfolio`; the original worktree's 56 tracked vendor-asset deletions remain untouched.
- PDF wrapper tests pass (15 tests), but `pdfxchange-tools-dotnet` is an entirely uncommitted initial worktree with no remote and no standalone UI/package baseline. It was left untouched.

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
