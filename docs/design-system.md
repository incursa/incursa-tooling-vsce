# Design System

## Authority and identifiers

The production authority is the tracked `@incursa/ui-kit` token/component source. The editable design projection is:

- Figma file: [Incursa UI Kit - Design Library](https://www.figma.com/design/aD7j6dGc6GA6S2MFQB39s3)
- Figma file key: `aD7j6dGc6GA6S2MFQB39s3`
- Package: `@incursa/ui-kit`
- Inspected source version: `1.9.0`
- Machine bridge: `ui-kit/src/design-system/figma-library.json`

The connected file was inspected on 2026-07-24. It contains 44 named content/utility pages, four variable collections, 22 text styles, 16 effect styles, and a `QA — Full Library` page with representative instances of all 35 shipped Web Components.

## Token mapping

| Figma collection | Modes | Code source | Mapping rule |
|---|---|---|---|
| Primitives | Value | `ui-kit/src/_inc-theme.scss` | Raw values are hidden from normal pickers and referenced by semantic aliases |
| Color | Light, Dark | theme Sass and runtime CSS variables | Preserve exact `--inc-*` WEB syntax |
| Spacing & Size | Value | `ui-kit/src/_inc-tokens.scss` | Preserve pixel values, scope to gap/radius/size/stroke/opacity |
| Typography | Value | theme/tokens Sass | IBM Plex Sans and IBM Plex Mono families; preserve exact size, weight, and line-height |

Representative mappings:

| Figma variable | CSS |
|---|---|
| `surface/primary` | `var(--inc-surface-primary)` |
| `text/primary` | `var(--inc-text-primary)` |
| `border/default` | `var(--inc-border-default)` |
| `action/primary` | `var(--inc-action-primary)` |
| `spacing/3` | `var(--inc-space-3)` |
| `radius/md` | `var(--inc-radius-md)` |

Component naming follows `Family/Component`, for example `Actions/Button`, and maps to the public tag such as `<inc-button>`.

## Extension application

- Use VS Code theme variables for editor-shell integration.
- Use Incursa semantic tokens inside webviews and Marketplace artwork where VS Code variables do not express product identity.
- Prefer accessible native controls or `@incursa/ui-kit` components; do not introduce another general component system.
- Maintain clear focus rings, keyboard navigation, semantic labels, contrast, and narrow-column behavior.
- Activity-bar icons are monochrome SVGs and must work in light, dark, and high-contrast themes.
- Product logos are distinct siblings: shared geometry/typography and palette discipline, with domain-specific marks.

## Required asset set per extension

- SVG master icon.
- Verified 128 px Marketplace PNG and any additional repository-required PNG sizes.
- Monochrome activity-bar SVG.
- README banner or wordmark where useful.
- Compact brand sheet.
- Real screenshots captured from implemented behavior.
- Deterministic asset build/verification script.

No conceptual mockup may be labeled as finished behavior. Incursa trademarks and brand artwork remain under separate brand terms from the source-code license.

## Synchronization

Changes flow from canonical Sass/component/spec sources into `figma-library.json`, then into Figma. The current `ui-kit` worktree already contains an in-progress Figma bridge and must not be overwritten by portfolio work.
