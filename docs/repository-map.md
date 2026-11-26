# Repository map

The portfolio is intentionally multi-repository. Runtime code remains owned by each product; this extension pack owns only member metadata and portfolio documentation.

| Product | Public source or identifier | Delivery boundary |
|---|---|---|
| SpecTrace for VS Code | [`incursa/spec-trace-vsce`](https://github.com/incursa/spec-trace-vsce) | Browser-safe core with optional, trust-gated desktop integration |
| CSV Contract Workbench | [`incursa/csv-contract-vsce`](https://github.com/incursa/csv-contract-vsce) | Browser and desktop validation surfaces with explicit local-data boundaries |
| Auditable Reports for VS Code | [`incursa/auditable-reports-vsce`](https://github.com/incursa/auditable-reports-vsce) | Desktop report authoring over the canonical Auditable Reports compiler |
| Database Knowledge Workbench | [`incursa.database-knowledge-workbench`](https://marketplace.visualstudio.com/items?itemName=incursa.database-knowledge-workbench) | Windows-first extension with a bounded browser-safe subset |
| Incursa Tooling | [`incursa/incursa-tooling-vsce`](https://github.com/incursa/incursa-tooling-vsce) | Metadata-only extension pack |

## Dependency direction

```text
member extension identifiers ---> incursa-tooling-vsce

product repositories -----------> independently packaged member extensions
```

The extension pack must not import member runtime code, copy product source, or imply that installing the pack changes a member's permissions or support boundary.

## Contribution boundary

Change runtime behavior, canonical formats, security policy, or release implementation in the owning product. Change this repository only for extension-pack metadata, public portfolio documentation, and pack-level validation.
