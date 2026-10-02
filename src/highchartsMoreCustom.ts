// A trimmed replacement for `highcharts/es-modules/masters/highcharts-more.src.js`. The official master registers
// 13 series types (AreaRange, AreaSplineRange, BoxPlot, Bubble, ColumnRange, ColumnPyramid, ErrorBar, Gauge,
// PackedBubble, Polygon, Waterfall) plus Polar chart support. DPUse only ever renders AreaRange, AreaSplineRange,
// ColumnRange, Waterfall, and Polar charts (see CARTESIAN/POLAR/RANGE_SERIES_TYPE_MAP in index.ts), so this file
// mirrors the official master with the unused series types dropped. Imports must stay in this relative order:
// the compose() calls below depend on side effects (series-type registration) from the imports above them.
//
// The compose() calls are themselves side effects: nothing uses what they return, they add polar support to the shared
// Highcharts object. So package.json's 'sideEffects' lists this file, telling the bundler to keep all of it. With
// 'false' the bundler drops part of the polar support and polar charts break (tested 2026-10-01: this chunk shrank
// from 56 kB to 38 kB). It lists this one file rather than being 'true' because 'true' would also stop the bundler
// removing unused code from every other file in the package, to protect this one; listing it keeps that clean-up
// everywhere else and records which file needs the exception. Both settings produce the same build today.

import 'highcharts/es-modules/Series/AreaRange/AreaRangeSeries.js';
import 'highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js';
import 'highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js';
import Highcharts from 'highcharts/es-modules/Core/Globals.js';
import Pane from 'highcharts/es-modules/Extensions/Pane/Pane.js';
import PolarAdditions from 'highcharts/es-modules/Series/PolarComposition.js';
import RadialAxis from 'highcharts/es-modules/Core/Axis/RadialAxis.js';
import SeriesRegistry from 'highcharts/es-modules/Core/Series/SeriesRegistry.js';
import WaterfallSeries from 'highcharts/es-modules/Series/Waterfall/WaterfallSeries.js';

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, unicorn/no-top-level-side-effects --
   vendor composition shim: highcharts/es-modules/* below the masters has no type declarations (see declarations/highchartsEsModules.d.ts), so everything here is implicitly `any`;
   this mirrors the mutate-the-shared-global pattern used by highcharts-more.src.js itself. */
const G = Highcharts;
G.RadialAxis = RadialAxis;
Pane.compose(G.Chart, G.Pointer);
PolarAdditions.compose(
    G.Axis,
    G.Chart,
    G.Pointer,
    G.Series,
    G.Tick,
    G.Point,
    SeriesRegistry.seriesTypes.areasplinerange,
    SeriesRegistry.seriesTypes.column,
    SeriesRegistry.seriesTypes.line,
    SeriesRegistry.seriesTypes.spline
);
WaterfallSeries.compose(G.Axis, G.Chart);
/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, unicorn/no-top-level-side-effects --
   end of the vendor composition shim */

export default G;
