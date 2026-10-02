// Highcharts ships its granular per-feature ES module source under `highcharts/es-modules/**`, but only publishes
// type declarations for its pre-bundled masters (e.g. `highcharts.d.ts`), not for the individual source files. This
// wildcard declaration lets `highchartsMoreCustom.ts` import those source files directly without a false TS2307.
declare module 'highcharts/es-modules/*';
