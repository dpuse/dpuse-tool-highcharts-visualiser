// References:
// Dark mode: https://www.highcharts.com/docs/chart-design-and-style/themes#dark-mode-in-highcharts-the-adaptive-theme.
// Templating: https://www.highcharts.com/docs/chart-concepts/templating.

// ── External Dependencies & Registrations
// This order is load-bearing, not stylistic: the adaptive theme and accessibility modules assume `Highcharts.Chart`,
// `.Legend`, etc. are already set on the shared instance by the time their own top-level compose() calls run.
import Highcharts from 'highcharts/es-modules/masters/highcharts.src.js';

import 'highcharts/es-modules/masters/themes/adaptive.src.js';
import 'highcharts/es-modules/masters/modules/accessibility.src.js';
import type { Chart, Options, SeriesOptionsType } from 'highcharts/highcharts.src';
export type { Options as HighchartsOptions } from 'highcharts/highcharts.src';

// ── DPUse Framework
import type { PresentationCartesianTypeId, PresentationPolarTypeId, PresentationRangeTypeId, PresentationView, PresentationVisualContentConfig } from '@dpuse/dpuse-shared';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface HighchartsView extends PresentationView {
    chart: Chart;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const CARTESIAN_SERIES_TYPE_MAP: Record<PresentationCartesianTypeId, 'area' | 'areaspline' | 'bar' | 'column' | 'line' | 'spline'> = {
    areaLine: 'area',
    areaSpline: 'areaspline',
    bar: 'bar',
    column: 'column',
    line: 'line',
    spline: 'spline'
};
const POLAR_SERIES_TYPE_MAP: Record<PresentationPolarTypeId, 'area' | 'arearange' | 'areaspline' | 'column' | 'columnrange' | 'line' | 'spline'> = {
    areaLine: 'area',
    areaRange: 'arearange',
    areaSpline: 'areaspline',
    column: 'column',
    columnRange: 'columnrange',
    line: 'line',
    spline: 'spline'
};
const RANGE_SERIES_TYPE_MAP: Record<PresentationRangeTypeId, 'arearange' | 'areasplinerange' | 'columnrange'> = {
    areaLine: 'arearange',
    areaSpline: 'areasplinerange',
    bar: 'columnrange',
    column: 'columnrange'
};
const HIGHCHARTS_ID = 'highcharts';

// ── State ────────────────────────────────────────────────────────────────────────────────────────────────────────────

const state = {
    isDependencyWheelAndSankeyModulesLoaded: false,
    isHighchartsMoreLoaded: false,
    isPatternFillLoaded: false,
    isStreamgraphModuleLoaded: false
};

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class Tool {
    // Actions - Render cartesian chart.
    renderCartesianChart(typeId: PresentationCartesianTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): HighchartsView {
        const type = CARTESIAN_SERIES_TYPE_MAP[typeId];
        const series: SeriesOptionsType[] = Array.from(contentConfig.data.measures, (measure) => ({ type, name: measure.name, data: measure.values }));
        const options: Options = {
            chart: { type },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };
        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render.
    async render(options: Options, renderTo: HTMLElement, callback?: () => void): Promise<unknown> {
        await Promise.all([this.loadHighchartsMore(), this.loadPatternFill()]);

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render period flow & boundaries chart.
    async renderPeriodFlowBoundaries(contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await this.loadHighchartsMore();

        const series: SeriesOptionsType[] = Array.from(contentConfig.data.measures, (measure) => ({ type: 'waterfall', name: measure.name, data: measure.values }));

        // const series: SeriesOptionsType[] = [];
        // const data = [];
        // for (let index = 0; index < content.data.categoryLabels.length; index++) {
        //     data.push([content.data.measures[0].values[index][0], content.data.measures[1].values[index][0]]);
        // }
        // series.push({ type: type.options.highchartsType, name: 'Unknown', data });

        const options: Options = {
            chart: { type: 'waterfall' },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render polar chart.
    async renderPolarChart(typeId: PresentationPolarTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await this.loadHighchartsMore();

        const type = POLAR_SERIES_TYPE_MAP[typeId];
        const series: SeriesOptionsType[] = Array.from(contentConfig.data.measures, (measure) => ({ type, name: measure.name, data: measure.values }));

        const options: Options = {
            chart: { polar: true },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render range chart.
    async renderRangeChart(typeId: PresentationRangeTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await this.loadHighchartsMore();

        const type = RANGE_SERIES_TYPE_MAP[typeId];
        const series: SeriesOptionsType[] = [];
        const data = [];
        for (let index = 0; index < contentConfig.data.dimension.values.length; index++) {
            data.push([contentConfig.data.measures[0]?.values[index]?.[0] ?? 0, contentConfig.data.measures[1]?.values[index]?.[0] ?? 0]);
        }
        series.push({ type, name: 'Unknown', data });

        const options: Options = {
            chart: { type, inverted: typeId === 'bar' ? true : false },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Set color mode.
    // The adaptive theme (see the reference at the top of this file) reacts to the OS-level prefers-color-scheme
    // media query on its own, but has no idea about an in-app light/dark toggle. Its CSS also recognises the
    // 'highcharts-light'/'highcharts-dark' classes on any ancestor, so toggling them on <html> is all that's needed
    // to override the OS setting for already-rendered charts too - Highcharts' theme is CSS-variable based, so no
    // chart re-render is required.
    setColorMode(colorModeId: string): void {
        if (typeof document === 'undefined') return;

        document.documentElement.classList.toggle('highcharts-dark', colorModeId === 'dark');
        document.documentElement.classList.toggle('highcharts-light', colorModeId !== 'dark');
    }

    // Helpers - Load dependency wheel and sankey modules.
    private async loadDependencyWheelAndSankeyModules(): Promise<void> {
        if (state.isDependencyWheelAndSankeyModulesLoaded) return;

        await Promise.all([import('highcharts/es-modules/masters/modules/dependency-wheel.src.js'), import('highcharts/es-modules/masters/modules/sankey.src.js')]);
        state.isDependencyWheelAndSankeyModulesLoaded = true;
    }

    // Helpers - Load Highcharts more.
    private async loadHighchartsMore(): Promise<void> {
        if (state.isHighchartsMoreLoaded) return;

        await import('./highchartsMoreCustom');
        state.isHighchartsMoreLoaded = true;
    }

    // Helpers - Load pattern fill module.
    private async loadPatternFill(): Promise<void> {
        if (state.isPatternFillLoaded) return;

        await import('highcharts/es-modules/masters/modules/pattern-fill.src.js');
        state.isPatternFillLoaded = true;
    }

    // Helpers - Load stream graph module.
    private async loadStreamGraphModule(): Promise<void> {
        if (state.isStreamgraphModuleLoaded) return;

        await import('highcharts/es-modules/masters/modules/streamgraph.src.js');
        state.isStreamgraphModuleLoaded = true;
    }
}
