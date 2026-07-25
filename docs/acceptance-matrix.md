# Acceptance Matrix

Canonical requirements live in `specs/requirements/incursa-tooling/SPEC-PORTFOLIO.json`. Its `x_acceptance_ids` extension fields map stable requirement IDs to the human-readable rows below.

| ID | Requirement | Verification evidence | State |
|---|---|---|---|
| PORT-001 | Portfolio documents and capability matrix match implemented products | Documentation plus the validated manifest on installer draft PR `#1` | Complete |
| PORT-002 | New public repositories are initialized, pushed, and have working CI/release workflows | Pushed draft-PR branches, green CI, and five-workflow policy verification | Complete |
| WEB-STR-001 | SpecTrace important workflows pass in the VS Code web-extension host | 33 web-host tests plus Chrome smoke at `1027fc3` | Complete |
| WEB-CSV-001 | CSV authoring and semantic comparison pass in the VS Code web-extension host | Real web-host release gate plus eight parity fixtures at `06799a7` | Complete |
| WEB-BOUND-001 | Browser bundles contain no Node, native, Python, .NET, subprocess, or direct filesystem dependency | Production bundle/import inspections in SpecTrace, CSV, and Database Knowledge | Complete |
| CSV-SEM-001 | Full-row multiset and keyed comparison are deterministic and row-order independent | Node and PowerShell parity fixtures at `06799a7` | Complete |
| CSV-SEM-002 | Duplicate keys are detected without arbitrary pairing | Duplicate fixtures and redacted diagnostics at `06799a7` | Complete |
| CSV-SEM-003 | Normalization is opt-in and preserves raw identifiers/leading zeroes | Normalization/identifier fixtures at `06799a7` | Complete |
| CSV-DESK-001 | Desktop large-file comparison streams and checks uniqueness exactly with spill-to-disk | 128-partition exact spill implementation and tests at `06799a7` | Complete |
| STR-WB-001 | Workbench integration is optional, trust-gated, structured, cancellable, timed, and bounded | Contract tests at `1027fc3`; ARM64 helper unavailable on host | Complete with host limitation |
| DBK-001 | Database Knowledge Workbench verifies manifest, containment, byte counts, sizes, and SHA-256 | Sanitized/security tests at `f4d3bf1` | Complete |
| DBK-002 | Database Knowledge Workbench streams/indexes/searches and inspects supported knowledge layers | Unit, extension-host, and visual/interaction QA at `f4d3bf1` | Complete |
| DBK-003 | Candidate edits do not mutate verified bundles and no private overlay ships | Mutation tests and 17-entry package inspection at `f4d3bf1` | Complete |
| RPT-001 | Installed Auditable Reports VSIX resolves the bundled compiler on Windows | Real Windows extension-host preview plus path regression at `f064f49` | Complete |
| RPT-002 | Canonical `artifact.json`, paginated HTML, and PDF validation remain aligned | Compiler/Paged.js/PDF checks pass, but the final sibling gate hits portable-renderer overflow/startup failures | Partial; renderer blocker |
| RPT-003 | Ordinary bundle commands forward print settings and replace outputs atomically | Implementation is present; full gate is blocked at the earlier portable-render stage | Partial; renderer blocker |
| TOOL-RM-001 | Repo Manager portable release works without AI and previews/confirms Git changes | 46 tests, deterministic ZIP, packaged doctor, no-AI browser QA, stale-state guard, and draft PR `incursa/repomanager#1` at `4a76d63` | Complete |
| TOOL-CRI-001 | Crystal Report Inspector extracts/browses/compares and reports runtime bitness accurately | 14 tests, safe ZIP, XML smoke, absent-runtime doctor at `dfe87cf` | Complete with SAP/runtime and no-remote limits |
| TOOL-PDF-001 | PDF Workbench detects licensed capabilities, previews safe non-overwriting commands, and packages portably | Wrapper 15 tests pass; entire initial repo is uncommitted with no remote/UI baseline | Blocked by source ownership |
| PACK-001 | Incursa Tooling remains metadata-only and lists the four member extensions | `npm run release:check`; `artifacts/VSIX-CONTENTS.json`; package inspection | Complete |
| BRAND-001 | Every extension has verified icons, brand sheet, real screenshots, accessible UI, and Marketplace metadata | Asset gates plus SpecTrace real traceability-tree screenshot at `1027fc3` | Complete |
| REL-001 | Every extension produces an inspected VSIX with SHA-256 | Five-package table in `docs/portfolio-plan.md` | Complete |
| REL-002 | Release workflows fail clearly without `VSCE_PAT` and publish only through the secret-backed environment | `scripts/Test-PortfolioReleasePolicy.ps1` verifies five protected exact-package workflows | Complete |
| INST-001 | Installer is per-user, non-elevating, selectable, offline, and consumes only pinned verified artifacts | Six-component revision 3 on installer draft PR `#1`, including pinned Repo Manager | Complete for staged portfolio |
| INST-002 | Fresh/minimum/typical/full, modify, repair, upgrade, and uninstall preserve user data | Minimum/typical/full, modify, repair, r2→r3 upgrade, non-ASCII path, locked-file recovery, uninstall, and sentinel preservation pass | Complete for staged portfolio |
| INST-003 | Missing VS Code/SSMS/SAP/PDF-XChange degrades clearly without failing unrelated selections | Missing VS Code fallback passes; unstaged SSMS/SAP/PDF components remain pending | Partial |
| INST-004 | Dirty, missing, unexpected, mutable, or hash-mismatched inputs are rejected | `scripts/Test-Repository.ps1`; dirty, unexpected, byte, and same-size hash tamper tests | Complete |
| INST-005 | Installed component manifest and setup checksum are generated | Revision 3 installed manifest and checksum sidecar recorded in the installer repository test matrix and draft PR | Complete |
| SEC-001 | Public diffs and packages contain no confidential material or credentials | Package inspections and repository confidentiality scans | Complete for packaged artifacts |
| SEC-002 | No telemetry/upload/background listener is present | Source/package inspections across five extensions and installer | Complete for packaged artifacts |

## Completion rule

An item becomes complete only when its evidence is reproducible from a committed revision. A documented external prerequisite may mark the affected optional capability limited, but cannot be used to overstate test coverage.
