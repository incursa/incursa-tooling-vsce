# Security and Privacy

## Portfolio defaults

- No telemetry.
- No upload of files, CSV cells, SQL metadata, report content, or workspace information.
- No background listener, Windows service, permanent localhost service, or administrator requirement.
- No credential persistence in extensions, logs, manifests, packages, or repositories.
- Public artifacts contain no customer names, private overlays, observed schemas, database names, API keys, tokens, connection strings, or confidential screenshots.

## Execution boundaries

Portable extension code cannot import Node or OS APIs. Desktop subprocesses require:

1. a trusted workspace,
2. an allowlisted executable and command,
3. structured JSON or JSON Lines input/output,
4. cancellation and a finite timeout,
5. bounded captured output,
6. no inbound port,
7. diagnostics that redact source content and private paths where practical.

Standalone tools default to read-only behavior. Mutations require preview/dry-run and explicit confirmation. SQL must fail closed when it is not provably read-only.

## Data handling

- Preserve leading zeroes and raw identifiers in CSV workflows.
- Do not infer business keys, relationships, meanings, dates, decimals, or verified provenance without evidence.
- Bound previews, row counts, in-memory collections, diagnostics, and error excerpts.
- Publish generated files atomically and clean temporary state on cancellation/failure.
- Preserve user-authored settings, workspaces, bundles, overlays, and data through upgrades and ordinary uninstall.

## Webviews

- Local resources only.
- Restrictive Content Security Policy with nonce/hash-controlled scripts and no remote script execution.
- No `eval`, inline event handlers, or arbitrary command dispatch.
- Validate every message at the extension boundary.

## Release checks

Before commit/package/release:

- inspect Git diffs;
- scan source and package contents for credential/private-material patterns;
- inspect VSIX/installer contents;
- verify package hashes and byte counts;
- verify no browser bundle contains desktop-only imports;
- verify no log fixture contains source values or secrets.

`VSCE_PAT` is accepted only through the GitHub Actions secret/environment configured by the repository workflow. Its value must never be echoed or passed on a command line.
