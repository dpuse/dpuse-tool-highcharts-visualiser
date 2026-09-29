// ── External Dependencies & Registrations
import Highcharts from 'highcharts/es-modules/masters/highcharts.src.js';
import { describe, expect, it } from 'vitest';

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────
// `seriesTypes` and `RadialAxis` are real runtime properties Highcharts modules attach to the shared instance, but
// they aren't part of the public API surface, so they're absent from `highcharts.src.d.ts`.

function getSeriesTypes(): Record<string, unknown> {
    return (Highcharts as unknown as { seriesTypes: Record<string, unknown> }).seriesTypes;
}

function getRadialAxis(): unknown {
    return (Highcharts as unknown as { RadialAxis?: unknown }).RadialAxis;
}

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('highchartsMoreCustom', () => {
    it('shares the same Highcharts singleton used by the rest of the package', async () => {
        const moreModule = await import('@/highchartsMoreCustom');

        expect(moreModule.default).toBe(Highcharts);
    });

    it('registers only the series types DPUse actually renders', async () => {
        await import('@/highchartsMoreCustom');

        const seriesTypes = getSeriesTypes();
        expect(typeof seriesTypes['waterfall']).toBe('function');
        expect(typeof seriesTypes['arearange']).toBe('function');
        expect(typeof seriesTypes['areasplinerange']).toBe('function');
        expect(typeof seriesTypes['columnrange']).toBe('function');
    });

    it('excludes the series types DPUse never renders', async () => {
        await import('@/highchartsMoreCustom');

        const seriesTypes = getSeriesTypes();
        expect(seriesTypes['gauge']).toBeUndefined();
        expect(seriesTypes['bubble']).toBeUndefined();
        expect(seriesTypes['packedbubble']).toBeUndefined();
        expect(seriesTypes['polygon']).toBeUndefined();
        expect(seriesTypes['boxplot']).toBeUndefined();
        expect(seriesTypes['columnpyramid']).toBeUndefined();
        expect(seriesTypes['errorbar']).toBeUndefined();
    });

    it('composes Polar chart support onto the shared instance', async () => {
        await import('@/highchartsMoreCustom');

        expect(getRadialAxis()).toBeDefined();
    });
});
