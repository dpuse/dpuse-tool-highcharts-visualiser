# DPUse Highcharts Visualiser Tool

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.dpuse.app%2Fconfigs%2Fdpuse-tool-highcharts-visualiser&query=%24.data.version&prefix=v&label=DPUse&color=blue)](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/releases/latest)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-highcharts-visualiser?label=npm)](https://www.npmjs.com/package/@dpuse/dpuse-tool-highcharts-visualiser)
[![CI](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/ci.yml)

A TypeScript wrapper for Highcharts that implements the Data Positioning chart-rendering interface. It optimizes browser memory usage by maintaining a single Highcharts instance shared across all presenters, loading optional modules only as needed.

[Report a Vulnerability](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/issues)

## About DPUse

[DPUse](https://www.dpuse.app) (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing.

**Sourcing** uses a library of [Connectors](https://www.dpuse.app/connectors) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources.

**Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This gives the DPUse Engine the structural framework needed to generate deterministic transactions, facts, or observations.

**Publishing** uses a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) let you build Data Apps using your preferred tools.

In addition, DPUse provides [Tools](https://www.dpuse.app) used by the application, and you can use them to construct connectors and presenters.

## Introduction

...

<!-- OPENING_END -->

A TypeScript wrapper for Highcharts that implements the Data Positioning chart-rendering interface. It improves browser memory efficiency by sharing a single Highcharts instance shared across all presenters and loading optional modules on demand.

<!-- USAGE_START -->

## Usage

This [package](https://www.npmjs.com/package/@dpuse/dpuse-tool-highcharts-visualiser) is available on [npm](https://www.npmjs.com/). Install it with:

```bash
npm install @dpuse/dpuse-tool-highcharts-visualiser
```

To work on the source instead, clone this repository.

```bash
git clone https://github.com/dpuse/dpuse-tool-highcharts-visualiser.git
cd dpuse-tool-highcharts-visualiser
npm install
```

_Requires [Node.js](https://nodejs.org/) 24 or later, [npm](https://www.npmjs.com/) 12 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

This repository is managed using the common set of actions provided by [@dpuse/dpuse-development](https://github.com/dpuse/dpuse-development). See the `scripts` block in [package.json](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/blob/main/package.json) for details.

<!-- USAGE_END -->

There’s no need to install this tool manually. Once released, it’s uploaded to the Data Positioning Engine cloud and becomes instantly available to all new instances of the browser app. A notification about the new version is also sent to all existing browser apps.

Basic usage example with no error handling.

```typescript
import { loadTool } from '@dpuse/dpuse-shared';
import type { HighchartsView, Tool as HighchartsTool } from '@dpuse/dpuse-tool-highcharts-visualiser';

// 'toolConfigs' lists the tools registered in DPUse; 'loadTool' imports the registered version from the engine's domain.
const highchartsTool = await loadTool<HighchartsTool>(toolConfigs, 'highcharts-visualiser');

const cartesianChart: HighchartsView = await highchartsTool.renderCartesianChart(/* arguments... */);
const polarChart: HighchartsView = await highchartsTool.renderPolarChart(/* arguments... */);
const rangeChart: HighchartsView = await highchartsTool.renderRangeChart(/* arguments... */);
```

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

License data is updated each time `npm run document` is run, using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists every package whose code, styles or assets are included in this project's build, as recorded by the build itself. Modules loaded at run time are not included; each documents its own. These dependencies have been checked and confirmed to use https://www.highcharts.com/license, all of which allow commercial use. All are used unmodified, so any licence conditions that apply only to modified versions are not triggered. Developers cloning this repository should independently verify development dependencies.

| Dependency                                                  | Version | License(s)                                 | Document                                                    |
| :---------------------------------------------------------- | :-----: | :----------------------------------------- | :---------------------------------------------------------- |
| [highcharts](https://github.com/highcharts/highcharts-dist) | 13.1.1  | Custom: https://www.highcharts.com/license | [LICENSE](licenses/downloads/highcharts@13.1.1-LICENSE.txt) |

### Dependency Tree

The dependency tree below shows how each package in the table above is reached — direct and transitive — along with its installed version, release date, and update status. A package that does not ship itself, such as one whose parts are bundled separately, is left out and what ships beneath it is shown in its place. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are mature and stable (have limited or no dependencies), so they require no active development.

- **[highcharts](https://github.com/highcharts/highcharts-dist)** 13.1.1 — 1 mth ago: 2026-09-20

<!-- DEPENDENCY_LICENSES_END -->

<!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                                                                                                                                                       | Composition                                                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------- |
| **dist/dpuse-tool-highcharts-visualiser.es.js**                                                                                                                                                         | 404.4&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;115.1&nbsp;kB&nbsp;·&nbsp;64.7%&nbsp;of&nbsp;the&nbsp;build |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Core/Axis/Axis.js + 81 more                                                                                                                             | `██████████████████░░`&nbsp;92.4%&nbsp;·&nbsp;373.8&nbsp;kB                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Axis.js                                                                                                                          | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;8.2%&nbsp;·&nbsp;33.0&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Chart/Chart.js                                                                                                                        | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;7.4%&nbsp;·&nbsp;29.8&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/Themes/Adaptive.js                                                                                                              | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;5.0%&nbsp;·&nbsp;20.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Navigator/Navigator.js                                                                                                               | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;4.8%&nbsp;·&nbsp;19.5&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Pointer.js                                                                                                                            | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.8%&nbsp;·&nbsp;15.5&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Legend/Legend.js                                                                                                                      | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.8%&nbsp;·&nbsp;15.4&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Tooltip.js                                                                                                                            | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.7%&nbsp;·&nbsp;15.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/SVGRenderer.js                                                                                                           | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;2.5%&nbsp;·&nbsp;10.3&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Options/LangDefaults.js                                                                                                      | `░░░░░░░░░░░░░░░░░░░░`&nbsp;2.3%&nbsp;·&nbsp;9.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/InfoRegionsComponent.js">…ccessibility/Components/InfoRegionsComponent.js</abbr>                     | `░░░░░░░░░░░░░░░░░░░░`&nbsp;2.3%&nbsp;·&nbsp;9.4&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js">…nts/SeriesComponent/SeriesKeyboardNavigation.js</abbr> | `░░░░░░░░░░░░░░░░░░░░`&nbsp;2.0%&nbsp;·&nbsp;8.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Scrollbar/Scrollbar.js                                                                                                               | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.9%&nbsp;·&nbsp;7.8&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/SeriesComponent/SeriesDescriber.js">…y/Components/SeriesComponent/SeriesDescriber.js</abbr>          | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.9%&nbsp;·&nbsp;7.7&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/DataLabel.js                                                                                                                   | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.9%&nbsp;·&nbsp;7.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Tick.js                                                                                                                          | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.8%&nbsp;·&nbsp;7.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/LegendComponent.js">…les/Accessibility/Components/LegendComponent.js</abbr>                          | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.6%&nbsp;·&nbsp;6.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Pie/PieDataLabel.js                                                                                                                 | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.5%&nbsp;·&nbsp;6.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/RangeSelectorComponent.js">…essibility/Components/RangeSelectorComponent.js</abbr>                   | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.5%&nbsp;·&nbsp;6.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/SVGLabel.js                                                                                                              | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.4%&nbsp;·&nbsp;5.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/KeyboardNavigation.js                                                                                                        | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.3%&nbsp;·&nbsp;5.4&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/TextBuilder.js                                                                                                           | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.3%&nbsp;·&nbsp;5.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Accessibility.js                                                                                                             | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.3%&nbsp;·&nbsp;5.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/ScrollablePlotArea.js                                                                                                           | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.3%&nbsp;·&nbsp;5.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/MenuComponent.js">…dules/Accessibility/Components/MenuComponent.js</abbr>                            | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.2%&nbsp;·&nbsp;5.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Stacking/StackingAxis.js                                                                                                         | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.1%&nbsp;·&nbsp;4.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/ZoomComponent.js">…dules/Accessibility/Components/ZoomComponent.js</abbr>                            | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.0%&nbsp;·&nbsp;4.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/ProxyProvider.js                                                                                                             | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.0%&nbsp;·&nbsp;4.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Pie/PieSeries.js                                                                                                                    | `░░░░░░░░░░░░░░░░░░░░`&nbsp;1.0%&nbsp;·&nbsp;4.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Utils/ChartUtilities.js                                                                                                      | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.7&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Area/AreaSeries.js                                                                                                                  | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/NavigatorComponent.js">…/Accessibility/Components/NavigatorComponent.js</abbr>                       | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Core/Axis/PlotLineOrBand/PlotLineOrBand.js">…ules/Core/Axis/PlotLineOrBand/PlotLineOrBand.js</abbr>                           | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Utils/HTMLUtilities.js                                                                                                       | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Options/DeprecatedOptions.js">…ules/Accessibility/Options/DeprecatedOptions.js</abbr>                           | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/SeriesComponent/NewDataAnnouncer.js">…/Components/SeriesComponent/NewDataAnnouncer.js</abbr>         | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/FocusBorder.js                                                                                                               | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.8%&nbsp;·&nbsp;3.3&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/HTML/HTMLElement.js                                                                                                          | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.8%&nbsp;·&nbsp;3.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/Symbols.js                                                                                                               | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.8%&nbsp;·&nbsp;3.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/ProxyElement.js                                                                                                              | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.7%&nbsp;·&nbsp;3.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/OverlappingDataLabels.js                                                                                                       | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.7%&nbsp;·&nbsp;2.8&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/ScrollbarAxis.js                                                                                                                 | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.7%&nbsp;·&nbsp;2.7&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/SeriesComponent/ForcedMarkers.js">…ity/Components/SeriesComponent/ForcedMarkers.js</abbr>            | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.6%&nbsp;·&nbsp;2.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/HighContrastTheme.js                                                                                                         | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.6%&nbsp;·&nbsp;2.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Stock/Navigator/ChartNavigatorComposition.js">…es/Stock/Navigator/ChartNavigatorComposition.js</abbr>                         | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/highcharts.src.js                                                                                                                  | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/AxisDefaults.js                                                                                                                  | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Pie/PiePoint.js                                                                                                                     | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Line/LineSeries.js                                                                                                                  | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js">…/Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js</abbr>                       | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Color/Palette.js                                                                                                                      | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;2.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/A11yI18n.js                                                                                                                  | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;1.9&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/ContainerComponent.js">…/Accessibility/Components/ContainerComponent.js</abbr>                       | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;1.8&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Navigator/NavigatorDefaults.js                                                                                                       | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.4%&nbsp;·&nbsp;1.8&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/RendererUtilities.js                                                                                                         | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.4%&nbsp;·&nbsp;1.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Accessibility/Components/AnnotationsA11y.js">…les/Accessibility/Components/AnnotationsA11y.js</abbr>                          | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.4%&nbsp;·&nbsp;1.6&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 27 smaller files                                                                                                                                      | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;4.7%&nbsp;·&nbsp;19.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts                                                                                                                                                                  | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.9%&nbsp;·&nbsp;3.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `█░░░░░░░░░░░░░░░░░░░`&nbsp;6.7%&nbsp;·&nbsp;27.1&nbsp;kB                                       |
| **dist/CenteredUtilities-OaGX1-lP.js**                                                                                                                                                                  | 57.8&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;19.7&nbsp;kB&nbsp;·&nbsp;9.2%&nbsp;of&nbsp;the&nbsp;build    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Core/Series/Series.js + 9 more                                                                                                                          | `███████████████████░`&nbsp;93.3%&nbsp;·&nbsp;53.9&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/Series.js                                                                                                                      | `▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░`&nbsp;63.1%&nbsp;·&nbsp;36.5&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Column/ColumnSeries.js                                                                                                              | `▒▒▒░░░░░░░░░░░░░░░░░`&nbsp;13.2%&nbsp;·&nbsp;7.7&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Stacking/StackItem.js                                                                                                            | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;4.9%&nbsp;·&nbsp;2.9&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Data/DataTableCore.js                                                                                                                      | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.5%&nbsp;·&nbsp;2.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/SeriesDefaults.js                                                                                                              | `░░░░░░░░░░░░░░░░░░░░`&nbsp;2.1%&nbsp;·&nbsp;1.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Legend/LegendSymbol.js                                                                                                                | `░░░░░░░░░░░░░░░░░░░░`&nbsp;2.1%&nbsp;·&nbsp;1.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 4 smaller files                                                                                                                                       | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;4.3%&nbsp;·&nbsp;2.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `█░░░░░░░░░░░░░░░░░░░`&nbsp;6.7%&nbsp;·&nbsp;3.9&nbsp;kB                                        |
| **dist/highchartsMoreCustom-Cz5Tf92x.js**                                                                                                                                                               | 54.0&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;17.5&nbsp;kB&nbsp;·&nbsp;8.6%&nbsp;of&nbsp;the&nbsp;build    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Series/PolarComposition.js">…modules/Series/PolarComposition.js</abbr> + 16 more                                                           | `███████████████████░`&nbsp;93.4%&nbsp;·&nbsp;50.4&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/PolarComposition.js                                                                                                                 | `▒▒▒▒▒░░░░░░░░░░░░░░░`&nbsp;25.4%&nbsp;·&nbsp;13.7&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/RadialAxis.js                                                                                                                    | `▒▒▒▒▒░░░░░░░░░░░░░░░`&nbsp;22.9%&nbsp;·&nbsp;12.4&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Waterfall/WaterfallSeries.js                                                                                                        | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;12.3%&nbsp;·&nbsp;6.6&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/AreaRange/AreaRangeSeries.js                                                                                                        | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;9.5%&nbsp;·&nbsp;5.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/Pane/Pane.js                                                                                                                    | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;5.7%&nbsp;·&nbsp;3.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/ColumnRange/ColumnRangeSeries.js">…modules/Series/ColumnRange/ColumnRangeSeries.js</abbr>                              | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.6%&nbsp;·&nbsp;2.0&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/RangeDataLabel.js                                                                                                                   | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;2.8%&nbsp;·&nbsp;1.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/Pane/PaneComposition.js                                                                                                         | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;2.7%&nbsp;·&nbsp;1.4&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/AreaRange/AreaRangePoint.js                                                                                                         | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;2.5%&nbsp;·&nbsp;1.4&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/WaterfallAxis.js                                                                                                                 | `░░░░░░░░░░░░░░░░░░░░`&nbsp;2.0%&nbsp;·&nbsp;1.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 7 smaller files                                                                                                                                       | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.8%&nbsp;·&nbsp;2.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;src → highchartsMoreCustom.ts                                                                                                                                                   | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.5%&nbsp;·&nbsp;251&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `█░░░░░░░░░░░░░░░░░░░`&nbsp;6.1%&nbsp;·&nbsp;3.3&nbsp;kB                                        |
| **dist/AnimationUtilities-Bb8iEl1S.js**                                                                                                                                                                 | 33.5&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;11.9&nbsp;kB&nbsp;·&nbsp;5.4%&nbsp;of&nbsp;the&nbsp;build    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Shared/Utilities.js + 10 more                                                                                                                           | `██████████████████░░`&nbsp;90.9%&nbsp;·&nbsp;30.4&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Shared/Utilities.js                                                                                                                        | `▒▒▒▒▒░░░░░░░░░░░░░░░`&nbsp;24.7%&nbsp;·&nbsp;8.3&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Shared/TimeBase.js                                                                                                                         | `▒▒▒░░░░░░░░░░░░░░░░░`&nbsp;15.0%&nbsp;·&nbsp;5.0&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Defaults.js                                                                                                                           | `▒▒▒░░░░░░░░░░░░░░░░░`&nbsp;12.8%&nbsp;·&nbsp;4.3&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Animation/Fx.js                                                                                                                       | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;9.5%&nbsp;·&nbsp;3.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Color/Color.js                                                                                                                        | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;8.2%&nbsp;·&nbsp;2.7&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Time.js                                                                                                                               | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;6.2%&nbsp;·&nbsp;2.1&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Utilities.js                                                                                                                          | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;4.4%&nbsp;·&nbsp;1.5&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Animation/AnimationUtilities.js                                                                                                       | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.8%&nbsp;·&nbsp;1.3&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Globals.js                                                                                                                            | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.6%&nbsp;·&nbsp;1.2&nbsp;kB                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 2 smaller files                                                                                                                                       | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;2.6%&nbsp;·&nbsp;906&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `██░░░░░░░░░░░░░░░░░░`&nbsp;9.1%&nbsp;·&nbsp;3.1&nbsp;kB                                        |
| **dist/SeriesRegistry-U4N5sJfn.js**                                                                                                                                                                     | 19.9&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;7.8&nbsp;kB&nbsp;·&nbsp;3.2%&nbsp;of&nbsp;the&nbsp;build     |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Core/Series/Point.js + 3 more                                                                                                                           | `███████████████████░`&nbsp;94.0%&nbsp;·&nbsp;18.7&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/Point.js                                                                                                                       | `▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░`&nbsp;53.2%&nbsp;·&nbsp;10.6&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/HTML/AST.js                                                                                                                  | `▒▒▒▒░░░░░░░░░░░░░░░░`&nbsp;19.3%&nbsp;·&nbsp;3.8&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Templating.js                                                                                                                         | `▒▒▒▒░░░░░░░░░░░░░░░░`&nbsp;18.2%&nbsp;·&nbsp;3.6&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/SeriesRegistry.js                                                                                                              | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;3.2%&nbsp;·&nbsp;660&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `█░░░░░░░░░░░░░░░░░░░`&nbsp;6.0%&nbsp;·&nbsp;1.2&nbsp;kB                                        |
| **dist/SVGElement-B60IgFXW.js**                                                                                                                                                                         | 16.1&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;6.0&nbsp;kB&nbsp;·&nbsp;2.6%&nbsp;of&nbsp;the&nbsp;build     |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Core/Renderer/SVG/SVGElement.js">…es/Core/Renderer/SVG/SVGElement.js</abbr>                                                                | `██████████████████░░`&nbsp;92.1%&nbsp;·&nbsp;14.8&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `██░░░░░░░░░░░░░░░░░░`&nbsp;7.9%&nbsp;·&nbsp;1.3&nbsp;kB                                        |
| **dist/sankey.src-D05S1CBM.js**                                                                                                                                                                         | 15.9&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;5.6&nbsp;kB&nbsp;·&nbsp;2.5%&nbsp;of&nbsp;the&nbsp;build     |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Series/Sankey/SankeySeries.js">…ules/Series/Sankey/SankeySeries.js</abbr> + 5 more                                                         | `██████████████████░░`&nbsp;87.8%&nbsp;·&nbsp;13.9&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeySeries.js                                                                                                              | `▒▒▒▒▒▒▒▒▒░░░░░░░░░░░`&nbsp;42.8%&nbsp;·&nbsp;6.8&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/NodesComposition.js                                                                                                                 | `▒▒▒▒░░░░░░░░░░░░░░░░`&nbsp;20.0%&nbsp;·&nbsp;3.2&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/TreeUtilities.js                                                                                                                    | `▒▒▒░░░░░░░░░░░░░░░░░`&nbsp;15.0%&nbsp;·&nbsp;2.4&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeySeriesDefaults.js                                                                                                      | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;5.0%&nbsp;·&nbsp;815&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeyPoint.js                                                                                                               | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;4.8%&nbsp;·&nbsp;787&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/modules/sankey.src.js                                                                                                              | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.1%&nbsp;·&nbsp;11&nbsp;B                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `██░░░░░░░░░░░░░░░░░░`&nbsp;12.2%&nbsp;·&nbsp;1.9&nbsp;kB                                       |
| **dist/pattern-fill.src-oMoGG3t\_.js**                                                                                                                                                                  | 8.6&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;3.1&nbsp;kB&nbsp;·&nbsp;1.4%&nbsp;of&nbsp;the&nbsp;build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Extensions/PatternFill.js">…-modules/Extensions/PatternFill.js</abbr> + 1 more                                                             | `███████████████████░`&nbsp;94.3%&nbsp;·&nbsp;8.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/PatternFill.js                                                                                                                  | `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░`&nbsp;93.6%&nbsp;·&nbsp;8.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/modules/pattern-fill.src.js                                                                                                        | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.7%&nbsp;·&nbsp;64&nbsp;B                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `█░░░░░░░░░░░░░░░░░░░`&nbsp;5.7%&nbsp;·&nbsp;503&nbsp;B                                         |
| **dist/dependency-wheel.src-wlhzcA3H.js**                                                                                                                                                               | 5.4&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;2.2&nbsp;kB&nbsp;·&nbsp;0.9%&nbsp;of&nbsp;the&nbsp;build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Series/DependencyWheel/DependencyWheelSeries.js">…encyWheel/DependencyWheelSeries.js</abbr> + 3 more                                       | `████████████████░░░░`&nbsp;80.2%&nbsp;·&nbsp;4.4&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/DependencyWheel/DependencyWheelSeries.js">…Series/DependencyWheel/DependencyWheelSeries.js</abbr>                      | `▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░`&nbsp;58.2%&nbsp;·&nbsp;3.2&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/DependencyWheel/DependencyWheelPoint.js">…/Series/DependencyWheel/DependencyWheelPoint.js</abbr>                       | `▒▒▒░░░░░░░░░░░░░░░░░`&nbsp;15.6%&nbsp;·&nbsp;870&nbsp;B                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/DependencyWheel/DependencyWheelSeriesDefaults.js">…ependencyWheel/DependencyWheelSeriesDefaults.js</abbr>              | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;6.3%&nbsp;·&nbsp;349&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/masters/modules/dependency-wheel.src.js">…modules/masters/modules/dependency-wheel.src.js</abbr>                              | `░░░░░░░░░░░░░░░░░░░░`&nbsp;0.2%&nbsp;·&nbsp;11&nbsp;B                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `████░░░░░░░░░░░░░░░░`&nbsp;19.8%&nbsp;·&nbsp;1.1&nbsp;kB                                       |
| **dist/TextPath-rTi1VI1J.js**                                                                                                                                                                           | 4.6&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;2.0&nbsp;kB&nbsp;·&nbsp;0.7%&nbsp;of&nbsp;the&nbsp;build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Extensions/TextPath.js + 1 more                                                                                                                         | `██████████████████░░`&nbsp;88.2%&nbsp;·&nbsp;4.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/TextPath.js                                                                                                                     | `▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░`&nbsp;49.0%&nbsp;·&nbsp;2.3&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/Sankey/SankeyColumnComposition.js">…odules/Series/Sankey/SankeyColumnComposition.js</abbr>                             | `▒▒▒▒▒▒▒▒░░░░░░░░░░░░`&nbsp;39.3%&nbsp;·&nbsp;1.8&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `██░░░░░░░░░░░░░░░░░░`&nbsp;11.8%&nbsp;·&nbsp;554&nbsp;B                                        |
| **dist/BorderRadius-DQiR3Ger.js**                                                                                                                                                                       | 4.6&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;1.9&nbsp;kB&nbsp;·&nbsp;0.7%&nbsp;of&nbsp;the&nbsp;build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Extensions/BorderRadius.js">…modules/Extensions/BorderRadius.js</abbr>                                                                     | `██████████████████░░`&nbsp;90.5%&nbsp;·&nbsp;4.1&nbsp;kB                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `██░░░░░░░░░░░░░░░░░░`&nbsp;9.5%&nbsp;·&nbsp;445&nbsp;B                                         |
| **dist/streamgraph.src-D9VWLFgz.js**                                                                                                                                                                    | 715&nbsp;B&nbsp;·&nbsp;gzip&nbsp;456&nbsp;B&nbsp;·&nbsp;0.1%&nbsp;of&nbsp;the&nbsp;build        |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → <abbr title="es-modules/Series/Streamgraph/StreamgraphSeries.js">…s/Streamgraph/StreamgraphSeries.js</abbr> + 1 more                                               | `██████████████░░░░░░`&nbsp;68.5%&nbsp;·&nbsp;490&nbsp;B                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/Streamgraph/StreamgraphSeries.js">…modules/Series/Streamgraph/StreamgraphSeries.js</abbr>                              | `▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░`&nbsp;56.4%&nbsp;·&nbsp;403&nbsp;B                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <abbr title="es-modules/Series/Streamgraph/StreamgraphSeriesDefaults.js">…Series/Streamgraph/StreamgraphSeriesDefaults.js</abbr>                      | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;12.2%&nbsp;·&nbsp;87&nbsp;B                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                                                                                             | `██████░░░░░░░░░░░░░░`&nbsp;31.5%&nbsp;·&nbsp;225&nbsp;B                                        |

Bars show each row's share of its output file. ↳ rows are part of the row above.

- n more = the row also holds n more files from the same package or folder, each no larger than the one named. A package can appear under several output files, each holding different files, never the same file twice.

(bundler output, whitespace & JSON) = bytes Sonda can't trace to a source file: whitespace (indentation and line breaks), code the bundler generates (region comments, the combined import/export lines, its small runtime helper and wrappers), and imported JSON such as `config.json`, which the bundler doesn't map. The JSON and the generated code are real bytes that ship; the whitespace mostly disappears once compressed.

<!-- BUNDLE_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                                                                                                                                               |
| :------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/ci.yml) on every push and pull request to `main`.                                                                                                                  |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                                                                                                                                                        |
| Test coverage        | ✅ On  | ![Coverage](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdpuse%2Fdpuse-tool-highcharts-visualiser%2Fmain%2Fcode-health-reports%2Fvitest%2Fbadge.json) [Vitest's V8 coverage](https://vitest.dev/guide/coverage) measures the share of source lines the unit tests run. The target is 80%. |

### Code Quality

| Check         | Status | What it does                                                                                                                                                                                                                        |
| :------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code analysis | ❌ Off | [SonarCloud](https://sonarcloud.io) checks every push for bugs, code smells and vulnerabilities.                                                                                                                                    |
| Linting       | ✅ On  | [ESLint](https://eslint.org) checks the code for errors and style problems. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/ci.yml) on every push and pull request to `main`. |

### Security Analysis

| Check           | Status | What it does                                                                                                                                                                                                                                                                                                                                                                                               |
| :-------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push protection | ✅ On  | [GitHub push protection](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations) blocks pushes that contain credentials.                                                                                                                                                                                                                              |
| Static analysis | ✅ On  | [![CodeQL](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/security/code-scanning) [CodeQL](https://codeql.github.com) scans GitHub Actions and JavaScript/TypeScript for security vulnerabilities, using the extended security queries, on every push and pull request to `main` and weekly. |
| Secret scanning | ✅ On  | [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning) detects credentials, such as API keys and tokens, committed to the repository.                                                                                                                                                                                                                                          |

### Dependencies

| Check               | Status | What it does                                                                                                                                                                                                                                                                                                                            |
| :------------------ | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vulnerability audit | ✅ On  | [npm audit](https://docs.npmjs.com/cli/commands/npm-audit) fails when a shipped dependency has any known vulnerability, or a development dependency has a high or critical one. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Supply chain risk   | ✅ On  | [Socket](https://socket.dev) flags malicious packages, typosquatting and suspicious behaviour that may not yet have a CVE.                                                                                                                                                                                                              |
| Security alerts     | ✅ On  | [Dependabot](https://docs.github.com/en/code-security/dependabot) alerts when a dependency has a known vulnerability, using the GitHub Advisory Database.                                                                                                                                                                               |
| Security updates    | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests that update vulnerable dependencies. These are handled manually.                                                                                                                                                                                  |
| Version updates     | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests for new dependency versions. These are handled manually.                                                                                                                                                                                          |

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-tool-highcharts-visualiser/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-highcharts-visualiser)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

<!-- QUALITY_SECURITY_END -->

<!-- CONTRIBUTING_LICENSE_START -->

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Jonathan Terrell

<!-- CONTRIBUTING_LICENSE_END -->
