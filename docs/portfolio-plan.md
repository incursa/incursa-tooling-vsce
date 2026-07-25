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
| 2. CSV semantic comparison | Complete; release pending | Commit `5a430fd`; 37 Node tests, 25 existing checks, 8 parity fixtures, real web-host test; PR `incursa/csv-contract-vsce#2` |
| 3. SpecTrace and Workbench | Complete with host limitation; release pending | Commit `a807429`; 33 web-host tests and optional desktop contract; ARM64 helper could not execute on this host; PR `incursa/spec-trace-vsce#2` |
| 4. Database Knowledge Workbench | Complete; release pending | Commit `5d71bb8`; 14 security/parity tests, dual bundles, extension-host/visual QA; PR `incursa/database-knowledge-vsce#1` |
| 5. Auditable Reports | Extension complete; final-bundle renderer blocked | Commit `bc0602a`; installed-host regression and verified VSIX; sibling portable-renderer failure recorded below |
| 6. Standalone Windows tools | Repo Manager complete; Crystal/PDF blockers recorded | Repo Manager commit `4a76d63`, verified portable ZIP, and draft PR `incursa/repomanager#1`; Crystal commit `dfe87cf` and verified safe-parts ZIP |
| 7. Incursa Tooling pack | Complete; release pending | Packaging commit `1085964`; verified metadata-only 17-entry VSIX; draft PR `incursa/incursa-tooling-vsce#1` |
| 8. Unified installer | Six-component offline portfolio complete; other components blocked | Lifecycle-tested revision 3 with Repo Manager; exact pins/checksum in installer docs and draft PR `incursa/incursa-tooling-installer#1` |
| 9. Release handoff | Ready with limitations | Seven draft PRs, five VSIXes, extension installer, Repo Manager ZIP, Crystal ZIP, Figma reference, and exact remaining external gates recorded |

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
| SpecTrace for VS Code | 1.2.0 | `a807429` | 641,548 | `14284fe30ff262be35cdc132b35abe5a8da1719af397d8e1412bdacd4d51fed0` | `incursa/spec-trace-vsce#2` |
| CSV Contract Workbench | 0.6.0 | `5a430fd` | 574,143 | `429478acfc36ab19c42364faf4138a65007099624b905cecc1ff9e80f156bdad` | `incursa/csv-contract-vsce#2` |
| Auditable Reports for VS Code | 0.1.3 | `bc0602a` | 368,898 | `dbdb41463bf2d1cdc561ee8277ebf4424bf568f74141f6a4bb729bf9c49bc47b` | `incursa/auditable-reports-vsce#1` |
| Database Knowledge Workbench | 0.1.0 | `5d71bb8` | 94,795 | `d1fff2b122aa03af070c5ce6acae99288b9ca70b3cf42ce4cd53ad796e315e31` | `incursa/database-knowledge-vsce#1` |
| Incursa Tooling | 0.1.0 | `1085964` | 81,451 | `96163dbf6806e2f6f43a5ffa47f031aa95c023cbd5d899f5a02d260087083372` | `incursa/incursa-tooling-vsce#1` |

- Every extension release gate built, tested, packaged, inspected, and scanned the public package boundary.
- SpecTrace and CSV executed important workflows in the real VS Code web-extension host; neither browser bundle imports Node/native helpers.
- Database Knowledge visual and interaction QA passed at desktop and narrow widths; its public VSIX contains no private overlays or snapshots.
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
- Installer revision 3: `artifacts/Incursa.Tooling-Setup-0.1.0-r3.exe`; `41,480,100` bytes; SHA-256 `AAC57CAF72B08CB11D81D494CB033781026A8F8B2374E4080614570AF4A4B982`.
- Installer lifecycle: r2→r3 upgrade, full non-ASCII/space-containing path, installed Repo Manager doctor without Codex, locked executable exit 5, repair after unlock, locked output preflight, and uninstall/sentinel preservation all passed.

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
