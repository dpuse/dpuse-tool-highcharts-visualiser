# DPUse Highcharts Visualiser Tool

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.dpuse.app%2Fconfigs%2Fdpuse-tool-highcharts-visualiser&query=%24.data.version&prefix=v&label=DPUse&color=f6821f)](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/releases/latest)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-highcharts-visualiser?color=cb3837&label=npm)](https://www.npmjs.com/package/@dpuse/dpuse-tool-highcharts-visualiser)
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

- **[highcharts](https://github.com/highcharts/highcharts-dist)** 13.1.1 — this month: 2026-09-20

<!-- DEPENDENCY_LICENSES_END -->

<!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                                                                                 | Composition                                   |
| :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| **dist/dpuse-tool-highcharts-visualiser.es.js**                                                                                   | 405.0 kB · gzip 115.2 kB · 64.6% of the build |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `██████████████████░░` 92.3% · 373.8 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Axis.js                                                    | `▒▒░░░░░░░░░░░░░░░░░░` 8.2% · 33.0 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Chart/Chart.js                                                  | `▒░░░░░░░░░░░░░░░░░░░` 7.4% · 29.8 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/Themes/Adaptive.js                                        | `▒░░░░░░░░░░░░░░░░░░░` 5.0% · 20.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Navigator/Navigator.js                                         | `▒░░░░░░░░░░░░░░░░░░░` 4.8% · 19.5 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Pointer.js                                                      | `▒░░░░░░░░░░░░░░░░░░░` 3.8% · 15.5 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Legend/Legend.js                                                | `▒░░░░░░░░░░░░░░░░░░░` 3.8% · 15.4 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Tooltip.js                                                      | `▒░░░░░░░░░░░░░░░░░░░` 3.7% · 15.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/SVGRenderer.js                                     | `▒░░░░░░░░░░░░░░░░░░░` 2.5% · 10.3 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Options/LangDefaults.js                                | `░░░░░░░░░░░░░░░░░░░░` 2.3% · 9.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/InfoRegionsComponent.js                     | `░░░░░░░░░░░░░░░░░░░░` 2.3% · 9.4 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js | `░░░░░░░░░░░░░░░░░░░░` 2.0% · 8.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Scrollbar/Scrollbar.js                                         | `░░░░░░░░░░░░░░░░░░░░` 1.9% · 7.8 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/SeriesComponent/SeriesDescriber.js          | `░░░░░░░░░░░░░░░░░░░░` 1.9% · 7.7 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/DataLabel.js                                             | `░░░░░░░░░░░░░░░░░░░░` 1.9% · 7.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Tick.js                                                    | `░░░░░░░░░░░░░░░░░░░░` 1.8% · 7.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/LegendComponent.js                          | `░░░░░░░░░░░░░░░░░░░░` 1.6% · 6.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Pie/PieDataLabel.js                                           | `░░░░░░░░░░░░░░░░░░░░` 1.5% · 6.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/RangeSelectorComponent.js                   | `░░░░░░░░░░░░░░░░░░░░` 1.5% · 6.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/SVGLabel.js                                        | `░░░░░░░░░░░░░░░░░░░░` 1.4% · 5.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/KeyboardNavigation.js                                  | `░░░░░░░░░░░░░░░░░░░░` 1.3% · 5.4 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/TextBuilder.js                                     | `░░░░░░░░░░░░░░░░░░░░` 1.3% · 5.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Accessibility.js                                       | `░░░░░░░░░░░░░░░░░░░░` 1.3% · 5.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/ScrollablePlotArea.js                                     | `░░░░░░░░░░░░░░░░░░░░` 1.3% · 5.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/MenuComponent.js                            | `░░░░░░░░░░░░░░░░░░░░` 1.2% · 5.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Stacking/StackingAxis.js                                   | `░░░░░░░░░░░░░░░░░░░░` 1.1% · 4.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/ZoomComponent.js                            | `░░░░░░░░░░░░░░░░░░░░` 1.0% · 4.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/ProxyProvider.js                                       | `░░░░░░░░░░░░░░░░░░░░` 1.0% · 4.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Pie/PieSeries.js                                              | `░░░░░░░░░░░░░░░░░░░░` 1.0% · 4.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Utils/ChartUtilities.js                                | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.7 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Area/AreaSeries.js                                            | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/NavigatorComponent.js                       | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/PlotLineOrBand/PlotLineOrBand.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Utils/HTMLUtilities.js                                 | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Options/DeprecatedOptions.js                           | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/SeriesComponent/NewDataAnnouncer.js         | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/FocusBorder.js                                         | `░░░░░░░░░░░░░░░░░░░░` 0.8% · 3.3 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/HTML/HTMLElement.js                                    | `░░░░░░░░░░░░░░░░░░░░` 0.8% · 3.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/SVG/Symbols.js                                         | `░░░░░░░░░░░░░░░░░░░░` 0.8% · 3.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/ProxyElement.js                                        | `░░░░░░░░░░░░░░░░░░░░` 0.7% · 3.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/OverlappingDataLabels.js                                 | `░░░░░░░░░░░░░░░░░░░░` 0.7% · 2.8 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/ScrollbarAxis.js                                           | `░░░░░░░░░░░░░░░░░░░░` 0.7% · 2.7 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/SeriesComponent/ForcedMarkers.js            | `░░░░░░░░░░░░░░░░░░░░` 0.6% · 2.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/HighContrastTheme.js                                   | `░░░░░░░░░░░░░░░░░░░░` 0.6% · 2.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Navigator/ChartNavigatorComposition.js                         | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/highcharts.src.js                                            | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/AxisDefaults.js                                            | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Pie/PiePoint.js                                               | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Line/LineSeries.js                                            | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js                       | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Color/Palette.js                                                | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 2.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/A11yI18n.js                                            | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 1.9 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/ContainerComponent.js                       | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 1.8 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Stock/Navigator/NavigatorDefaults.js                                 | `░░░░░░░░░░░░░░░░░░░░` 0.4% · 1.8 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/RendererUtilities.js                                   | `░░░░░░░░░░░░░░░░░░░░` 0.4% · 1.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Accessibility/Components/AnnotationsA11y.js                          | `░░░░░░░░░░░░░░░░░░░░` 0.4% · 1.6 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 27 smaller files                                                                | `▒░░░░░░░░░░░░░░░░░░░` 4.7% · 19.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts                                                                                            | `░░░░░░░░░░░░░░░░░░░░` 0.9% · 3.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `█░░░░░░░░░░░░░░░░░░░` 6.8% · 27.6 kB         |
| **dist/CenteredUtilities-WO6ukK5m.js**                                                                                            | 57.9 kB · gzip 19.8 kB · 9.2% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `███████████████████░` 93.1% · 53.9 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/Series.js                                                | `▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░` 63.0% · 36.5 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Column/ColumnSeries.js                                        | `▒▒▒░░░░░░░░░░░░░░░░░` 13.2% · 7.7 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/Stacking/StackItem.js                                      | `▒░░░░░░░░░░░░░░░░░░░` 4.9% · 2.9 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Data/DataTableCore.js                                                | `▒░░░░░░░░░░░░░░░░░░░` 3.5% · 2.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/SeriesDefaults.js                                        | `░░░░░░░░░░░░░░░░░░░░` 2.1% · 1.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Legend/LegendSymbol.js                                          | `░░░░░░░░░░░░░░░░░░░░` 2.1% · 1.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 4 smaller files                                                                 | `▒░░░░░░░░░░░░░░░░░░░` 4.3% · 2.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `█░░░░░░░░░░░░░░░░░░░` 6.9% · 4.0 kB          |
| **dist/highchartsMoreCustom-C7_1r-Ql.js**                                                                                         | 54.1 kB · gzip 17.5 kB · 8.6% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `███████████████████░` 93.2% · 50.4 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/PolarComposition.js                                           | `▒▒▒▒▒░░░░░░░░░░░░░░░` 25.4% · 13.7 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/RadialAxis.js                                              | `▒▒▒▒▒░░░░░░░░░░░░░░░` 22.9% · 12.4 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Waterfall/WaterfallSeries.js                                  | `▒▒░░░░░░░░░░░░░░░░░░` 12.3% · 6.6 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/AreaRange/AreaRangeSeries.js                                  | `▒▒░░░░░░░░░░░░░░░░░░` 9.5% · 5.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/Pane/Pane.js                                              | `▒░░░░░░░░░░░░░░░░░░░` 5.7% · 3.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/ColumnRange/ColumnRangeSeries.js                              | `▒░░░░░░░░░░░░░░░░░░░` 3.6% · 2.0 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/RangeDataLabel.js                                             | `▒░░░░░░░░░░░░░░░░░░░` 2.8% · 1.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/Pane/PaneComposition.js                                   | `▒░░░░░░░░░░░░░░░░░░░` 2.7% · 1.4 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/AreaRange/AreaRangePoint.js                                   | `▒░░░░░░░░░░░░░░░░░░░` 2.5% · 1.4 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Axis/WaterfallAxis.js                                           | `░░░░░░░░░░░░░░░░░░░░` 2.0% · 1.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 7 smaller files                                                                 | `▒░░░░░░░░░░░░░░░░░░░` 3.8% · 2.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;src → highchartsMoreCustom.ts                                                                             | `░░░░░░░░░░░░░░░░░░░░` 0.5% · 251 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `█░░░░░░░░░░░░░░░░░░░` 6.4% · 3.4 kB          |
| **dist/AnimationUtilities-eb22eIjK.js**                                                                                           | 33.6 kB · gzip 11.9 kB · 5.4% of the build    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `██████████████████░░` 90.6% · 30.4 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Shared/Utilities.js                                                  | `▒▒▒▒▒░░░░░░░░░░░░░░░` 24.6% · 8.3 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Shared/TimeBase.js                                                   | `▒▒▒░░░░░░░░░░░░░░░░░` 14.9% · 5.0 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Defaults.js                                                     | `▒▒▒░░░░░░░░░░░░░░░░░` 12.8% · 4.3 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Animation/Fx.js                                                 | `▒▒░░░░░░░░░░░░░░░░░░` 9.4% · 3.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Color/Color.js                                                  | `▒▒░░░░░░░░░░░░░░░░░░` 8.2% · 2.7 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Time.js                                                         | `▒░░░░░░░░░░░░░░░░░░░` 6.2% · 2.1 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Utilities.js                                                    | `▒░░░░░░░░░░░░░░░░░░░` 4.4% · 1.5 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Animation/AnimationUtilities.js                                 | `▒░░░░░░░░░░░░░░░░░░░` 3.8% · 1.3 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Globals.js                                                      | `▒░░░░░░░░░░░░░░░░░░░` 3.6% · 1.2 kB          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ 2 smaller files                                                                 | `▒░░░░░░░░░░░░░░░░░░░` 2.6% · 906 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `██░░░░░░░░░░░░░░░░░░` 9.4% · 3.2 kB          |
| **dist/SeriesRegistry-CDI1sm9L.js**                                                                                               | 19.9 kB · gzip 7.8 kB · 3.2% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `███████████████████░` 93.8% · 18.7 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/Point.js                                                 | `▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░` 53.1% · 10.6 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Renderer/HTML/AST.js                                            | `▒▒▒▒░░░░░░░░░░░░░░░░` 19.3% · 3.8 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Templating.js                                                   | `▒▒▒▒░░░░░░░░░░░░░░░░` 18.2% · 3.6 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Core/Series/SeriesRegistry.js                                        | `▒░░░░░░░░░░░░░░░░░░░` 3.2% · 660 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `█░░░░░░░░░░░░░░░░░░░` 6.2% · 1.2 kB          |
| **dist/SVGElement-z7ENyQ6Y.js**                                                                                                   | 16.1 kB · gzip 6.0 kB · 2.6% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Core/Renderer/SVG/SVGElement.js                                                   | `██████████████████░░` 92.0% · 14.8 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `██░░░░░░░░░░░░░░░░░░` 8.0% · 1.3 kB          |
| **dist/sankey.src-B-54oc-3.js**                                                                                                   | 15.9 kB · gzip 5.6 kB · 2.5% of the build     |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `█████████████████░░░` 87.5% · 13.9 kB        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeySeries.js                                        | `▒▒▒▒▒▒▒▒▒░░░░░░░░░░░` 42.7% · 6.8 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/NodesComposition.js                                           | `▒▒▒▒░░░░░░░░░░░░░░░░` 20.0% · 3.2 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/TreeUtilities.js                                              | `▒▒▒░░░░░░░░░░░░░░░░░` 14.9% · 2.4 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeySeriesDefaults.js                                | `▒░░░░░░░░░░░░░░░░░░░` 5.0% · 815 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeyPoint.js                                         | `▒░░░░░░░░░░░░░░░░░░░` 4.8% · 787 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/modules/sankey.src.js                                        | `░░░░░░░░░░░░░░░░░░░░` 0.1% · 11 B            |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `███░░░░░░░░░░░░░░░░░` 12.5% · 2.0 kB         |
| **dist/pattern-fill.src-kXG__4iS.js**                                                                                             | 8.7 kB · gzip 3.1 kB · 1.4% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `███████████████████░` 93.9% · 8.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/PatternFill.js                                            | `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░` 93.2% · 8.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/modules/pattern-fill.src.js                                  | `░░░░░░░░░░░░░░░░░░░░` 0.7% · 64 B            |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `█░░░░░░░░░░░░░░░░░░░` 6.1% · 543 B           |
| **dist/dependency-wheel.src-m4DwYrP7.js**                                                                                         | 5.5 kB · gzip 2.2 kB · 0.9% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `████████████████░░░░` 79.6% · 4.4 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/DependencyWheel/DependencyWheelSeries.js                      | `▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░` 57.7% · 3.2 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/DependencyWheel/DependencyWheelPoint.js                       | `▒▒▒░░░░░░░░░░░░░░░░░` 15.5% · 870 B          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/DependencyWheel/DependencyWheelSeriesDefaults.js              | `▒░░░░░░░░░░░░░░░░░░░` 6.2% · 349 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/masters/modules/dependency-wheel.src.js                              | `░░░░░░░░░░░░░░░░░░░░` 0.2% · 11 B            |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `████░░░░░░░░░░░░░░░░` 20.4% · 1.1 kB         |
| **dist/TextPath-CiV8mQgF.js**                                                                                                     | 4.6 kB · gzip 2.0 kB · 0.7% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `██████████████████░░` 87.9% · 4.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Extensions/TextPath.js                                               | `▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░` 48.8% · 2.3 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Sankey/SankeyColumnComposition.js                             | `▒▒▒▒▒▒▒▒░░░░░░░░░░░░` 39.1% · 1.8 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `██░░░░░░░░░░░░░░░░░░` 12.1% · 574 B          |
| **dist/BorderRadius-Cois3N8q.js**                                                                                                 | 4.6 kB · gzip 1.9 kB · 0.7% of the build      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → es-modules/Extensions/BorderRadius.js                                                        | `██████████████████░░` 90.1% · 4.1 kB         |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `██░░░░░░░░░░░░░░░░░░` 9.9% · 465 B           |
| **dist/streamgraph.src-DLpEiTz6.js**                                                                                              | 735 B · gzip 465 B · 0.1% of the build        |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                                                                                | `█████████████░░░░░░░` 66.7% · 490 B          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Streamgraph/StreamgraphSeries.js                              | `▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░` 54.8% · 403 B          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ es-modules/Series/Streamgraph/StreamgraphSeriesDefaults.js                      | `▒▒░░░░░░░░░░░░░░░░░░` 11.8% · 87 B           |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)                                                                       | `███████░░░░░░░░░░░░░` 33.3% · 245 B          |

Bars show each row's share of its output file. ↳ rows are part of the row above.

(bundler output, whitespace & JSON) = bytes Sonda can't trace to a source file: whitespace (indentation and line breaks), code the bundler generates (region comments, the combined import/export lines, its small runtime helper and wrappers), and imported JSON such as `config.json`, which the bundler doesn't map. The JSON and the generated code are real bytes that ship; the whitespace mostly disappears once compressed.

<!-- BUNDLE_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                              |
| :------------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/dpuse-tool-highcharts-visualiser/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                                       |

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
