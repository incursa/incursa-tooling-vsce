# Release and Marketplace Runbook

## Release gate

Do not merge, tag, publish, or create a release until the product repository's `release:check` (or equivalent documented gate) passes and package contents have been inspected.

Each extension release gate must:

1. install from the lockfile;
2. type-check and lint;
3. build production bundles;
4. run unit, webview, and extension-host tests;
5. run web-host tests for portable products;
6. verify brand assets;
7. package the VSIX deterministically;
8. inspect the VSIX contents and identity;
9. run the confidentiality scan;
10. generate SHA-256 checksums.

## Version and tag flow

1. Update `CHANGELOG.md` and the package version.
2. Run the local release gate.
3. Commit the coherent release change.
4. Push the intentional feature/release branch.
5. Open and review the pull request when that repository uses pull requests.
6. After authorization and a passing gate, merge according to repository policy.
7. Create the supported version tag.
8. Let the release workflow rebuild or verify the artifact from the tagged commit.
9. Attach the VSIX and `SHA256SUMS.txt` to the GitHub Release.
10. Publish to Marketplace through the protected workflow/environment.

## Marketplace authentication

The expected Actions secret is `VSCE_PAT`. If it is absent, the workflow must fail with a clear missing-secret message after all non-publish verification succeeds. Never print or manually pass the token.

## Recovery

- Failed build/test: fix on a branch and rerun; do not retag an existing version.
- Bad unpublished package: increment the prerelease or patch version.
- Failed Marketplace publish after GitHub Release: preserve the release artifact, correct the environment/secret, and rerun the publish job for the same verified file when the workflow supports it.
- Incorrect published version: follow Marketplace unpublish/deprecate policy only with explicit owner authorization; publish a corrected higher version.

## Required release record

Record in `docs/portfolio-plan.md`:

- repository and branch;
- commit SHA and product version;
- artifact path/name/byte count/SHA-256;
- test commands;
- GitHub workflow and release URLs;
- Marketplace URL/status;
- missing external prerequisites or limitations.

## Unified installer

The installer release additionally records every component repository, version, commit, filename, byte count, and SHA-256. It never resolves a mutable `latest` artifact. The setup executable and SHA-256 sidecar remain available alongside independent component packages.
