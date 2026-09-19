import { K as e, h as t, k as n } from "./AnimationUtilities-HCzBkGkl.js";
import { t as r } from "./SeriesRegistry-BO6tW97M.js";
//#region node_modules/highcharts/es-modules/Series/Streamgraph/StreamgraphSeriesDefaults.js
var i = {
	fillOpacity: 1,
	lineWidth: 0,
	marker: { enabled: !1 },
	stacking: "stream"
}, { areaspline: a } = r.seriesTypes, o = class extends a {
	streamStacker(e, t, n) {
		e[0] -= t.total / 2, e[1] -= t.total / 2, this.stackedYData && (this.stackedYData[n] = Math.max.apply(0, e));
	}
};
o.defaultOptions = e(a.defaultOptions, i), t(o, "afterGetExtremes", (e) => {
	e.dataExtremes.dataMin = -e.dataExtremes.dataMax;
}), n(o.prototype, { negStacks: !1 }), r.registerSeriesType("streamgraph", o);
//#endregion
