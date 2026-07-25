# Acceptance Matrix

Canonical requirements live in `specs/requirements/incursa-tooling/SPEC-PORTFOLIO.json`. Its `x_acceptance_ids` extension fields map stable requirement IDs to the human-readable rows below.

| ID | Requirement | Verification evidence | State |
|---|---|---|---|
| PORT-001 | Portfolio documents and capability matrix match implemented products | Documentation check plus package-manifest comparison | In progress |
| PORT-002 | New public repositories are initialized, pushed, and have working CI/release workflows | GitHub branch/workflow URLs and successful runs | Pending |
| WEB-STR-001 | SpecTrace important workflows pass in the VS Code web-extension host | Web-host test command and log | Pending |
| WEB-CSV-001 | CSV authoring and semantic comparison pass in the VS Code web-extension host | Web-host tests and deterministic fixtures | Pending |
| WEB-BOUND-001 | Browser bundles contain no Node, native, Python, .NET, subprocess, or direct filesystem dependency | Bundle metafile/import inspection | Pending |
| CSV-SEM-001 | Full-row multiset and keyed comparison are deterministic and row-order independent | Unit/parity fixtures | Pending |
| CSV-SEM-002 | Duplicate keys are detected without arbitrary pairing | Unit/parity fixtures | Pending |
| CSV-SEM-003 | Normalization is opt-in and preserves raw identifiers/leading zeroes | Unit/parity fixtures | Pending |
| CSV-DESK-001 | Desktop large-file comparison streams and checks uniqueness exactly with spill-to-disk | Integration/performance fixtures | Pending |
| STR-WB-001 | Workbench integration is optional, trust-gated, structured, cancellable, timed, and bounded | Contract and extension-host tests | Pending |
| DBK-001 | Database Knowledge Workbench verifies manifest, containment, byte counts, sizes, and SHA-256 | Sanitized-bundle tests | Pending |
| DBK-002 | Database Knowledge Workbench streams/indexes/searches and inspects supported knowledge layers | Integration and UI tests | Pending |
| DBK-003 | Candidate edits do not mutate verified bundles and no private overlay ships | Mutation/confidentiality tests | Pending |
| RPT-001 | Installed Auditable Reports VSIX resolves the bundled compiler on Windows | Installed-extension regression test | Pending |
| RPT-002 | Canonical `artifact.json`, paginated HTML, and PDF validation remain aligned | Compiler/fixture/PDF tests | Pending |
| RPT-003 | Ordinary bundle commands forward print settings and replace outputs atomically | Regression tests | Pending |
| TOOL-RM-001 | Repo Manager portable release works without AI and previews/confirms Git changes | Package, doctor, and integration tests | Pending |
| TOOL-CRI-001 | Crystal Report Inspector extracts/browses/compares and reports runtime bitness accurately | Unit tests plus runtime-present/absent evidence | Pending |
| TOOL-PDF-001 | PDF Workbench detects licensed capabilities, previews safe non-overwriting commands, and packages portably | Unit/integration/package evidence | Pending |
| PACK-001 | Incursa Tooling remains metadata-only and lists the four member extensions | `npm run release:check`; `artifacts/VSIX-CONTENTS.json`; commit `4582e7b` | Complete |
| BRAND-001 | Every extension has verified icons, brand sheet, real screenshots, accessible UI, and Marketplace metadata | Asset verification and accessibility checklist | Pending |
| REL-001 | Every extension produces an inspected VSIX with SHA-256 | Release-check output | Pending |
| REL-002 | Release workflows fail clearly without `VSCE_PAT` and publish only through the secret-backed environment | Workflow tests/review | Pending |
| INST-001 | Installer is per-user, non-elevating, selectable, offline, and consumes only pinned verified artifacts | Foundation compile and pinned extension-pack smoke at installer commit `d6e4dd1` | Partial |
| INST-002 | Fresh/minimum/typical/full, modify, repair, upgrade, and uninstall preserve user data | Fresh minimum, reinstall/repair, uninstall, and sentinel preservation passed; full matrix pending | Partial |
| INST-003 | Missing VS Code/SSMS/SAP/PDF-XChange degrades clearly without failing unrelated selections | Missing VS Code Insiders fallback passed; remaining prerequisites pending | Partial |
| INST-004 | Dirty, missing, unexpected, mutable, or hash-mismatched inputs are rejected | `scripts/Test-Repository.ps1`; dirty, unexpected, byte, and same-size hash tamper tests | Complete |
| INST-005 | Installed component manifest and setup checksum are generated | Smoke setup package and installed manifest at installer commit `d6e4dd1` | Complete |
| SEC-001 | Public diffs and packages contain no confidential material or credentials | Confidentiality scan | Pending |
| SEC-002 | No telemetry/upload/background listener is present | Source/package inspection | Pending |

## Completion rule

An item becomes complete only when its evidence is reproducible from a committed revision. A documented external prerequisite may mark the affected optional capability limited, but cannot be used to overstate test coverage.
