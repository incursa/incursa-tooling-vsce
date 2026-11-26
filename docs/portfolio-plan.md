# Incursa Tooling portfolio policy

## Objective

Deliver a coherent set of optional tools for specification traceability, validation, auditable reporting, and offline database knowledge without merging their runtimes or release lifecycles.

## Delivery rules

- The extension pack remains metadata-only and must not import member runtime code.
- Every member extension keeps its own identifier, version, package, permissions, support boundary, and removal path.
- Web support, desktop support, subprocess access, workspace-trust requirements, and data-handling behavior are declared per member; the pack does not broaden those claims.
- Portfolio branding and navigation may be shared, but canonical formats and runtime behavior stay owned by the product that implements them.
- Member changes are released and validated by the owning product repository before the pack references them.
- Public documentation must not disclose private repository names, paths, branches, commits, worktrees, credentials, or unpublished delivery state.

## Evidence required for a member change

A member addition or identity change should include:

1. the Marketplace extension identifier and public support link;
2. a documented web/desktop and trust boundary;
3. a privacy and network-behavior statement;
4. a packaged extension inspection from the owning product;
5. extension-pack validation showing the identifier is present exactly once; and
6. release notes in the owning product when user-visible behavior changes.

One-run test counts, commit hashes, local paths, branch state, and publication status belong in the owning pull request or release record, not this policy.

## Portfolio validation

Run the repository gate before review:

```powershell
npm ci
npm run release:check
```

The gate verifies pack metadata, brand assets, member identifiers, VSIX contents, and checksums. It does not prove Marketplace publication or a member extension's runtime behavior.

## Release boundaries

The extension pack may be published only after its member identifiers and documentation describe supported public delivery paths. Marketplace credentials, approval settings, installer signing, and member publication remain external release controls and must be verified in their owning systems.
