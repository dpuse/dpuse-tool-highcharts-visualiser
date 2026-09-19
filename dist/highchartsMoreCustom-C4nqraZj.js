import { $ as e, J as t, K as n, M as r, N as i, S as a, U as o, W as s, _ as c, b as l, c as u, et as d, g as f, h as p, j as m, k as h, lt as g, p as _, rt as v, st as y, t as b, w as x, y as S, z as C } from "./AnimationUtilities-HCzBkGkl.js";
import { n as w, t as T } from "./SeriesRegistry-BO6tW97M.js";
import { i as E, n as D, r as O, t as k } from "./CenteredUtilities-CBtdKzw5.js";
import { t as A } from "./BorderRadius-DsUUgNnR.js";
//#region node_modules/highcharts/es-modules/Series/AreaRange/AreaRangePoint.js
var { area: { prototype: { pointClass: j, pointClass: { prototype: M } } } } = T.seriesTypes, ee = class extends j {
	setState() {
		let e = this.state, t = this.series, n = t.chart.polar;
		x(this.plotHigh) || (this.plotHigh = t.yAxis.toPixels(this.high, !0)), x(this.plotLow) || (this.plotLow = this.plotY = t.yAxis.toPixels(this.low, !0)), t.lowerStateMarkerGraphic = t.stateMarkerGraphic, t.stateMarkerGraphic = t.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, n && o(this.plotHighX) && (this.plotX = this.plotHighX), M.setState.apply(this, arguments), this.state = e, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], n && o(this.plotLowX) && (this.plotX = this.plotLowX), t.upperStateMarkerGraphic = t.stateMarkerGraphic, t.stateMarkerGraphic = t.lowerStateMarkerGraphic, t.lowerStateMarkerGraphic = void 0;
		let r = t.modifyMarkerSettings();
		M.setState.apply(this, arguments), t.restoreMarkerSettings(r);
	}
	haloPath() {
		let e = this.series.chart.polar, t = [];
		return this.plotY = this.plotLow, e && o(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (t = M.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, e && o(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (t = t.concat(M.haloPath.apply(this, arguments))), t;
	}
	isValid() {
		return o(this.low) && o(this.high);
	}
}, N;
(function(e) {
	let t = {
		close: ["plotClose"],
		high: ["highPlot", "plotHigh"],
		low: ["lowPlot", "plotLow"],
		median: ["medianPlot"],
		open: ["plotOpen"],
		q1: ["q1Plot"],
		q3: ["q3Plot"],
		y: ["plotY"]
	};
	function n(e, n) {
		let r = t[n] ?? [];
		for (let t of r) {
			let n = e[t];
			if (o(n)) return n;
		}
	}
	function r(e, t, r) {
		let i = n(e, "high"), a = n(e, "low");
		return o(i) && o(a) ? t.inside ? r === Math.min(i, a) : r === Math.max(i, a) : !1;
	}
	function i(e) {
		let t = e.prototype;
		return t.alignDataLabel = u, e;
	}
	e.compose = i;
	function s(e) {
		let t = e.alignToKey ? this.getNestedProperty(e.alignToKey) : this.y, n = o(t) ? t : this.y;
		return o(n) ? this.series.chart.numberFormatter(n, -1) : "";
	}
	e.formatter = s;
	function c(e) {
		let { alignToKey: t, format: n } = e;
		t && n && (e.format = n.replace(/\{(?:point\.)?y([:}])/g, "{point." + t + "$1"));
	}
	e.applyAlignToKeyValue = c;
	function l(e, t) {
		return t && e.pointArrayMap.indexOf(t) > -1 ? t : e.pointValKey;
	}
	e.resolveAlignToKey = l;
	function u(e, t, i, s, c) {
		let u = this, d = n(e, l(u, i.alignToKey)), f = e.shapeArgs, p = e.plotY, m = e.dlBox, h = e.below;
		if (o(d)) {
			e.plotY = d, f && !i.inside && (e.dlBox = {
				x: f.x ?? 0,
				y: a(d, u.borderWidth, u.chart.inverted),
				width: f.width ?? 0,
				height: 0
			});
			let t = e.below = r(e, i, d);
			u.chart.inverted ? i.align ??= t ? "right" : "left" : i.verticalAlign ??= t ? "top" : "bottom";
		}
		D.prototype.alignDataLabel.call(u, e, t, i, s, c), e.plotY = p, e.dlBox = m, e.below = h;
	}
	e.alignDataLabel = u;
})(N ||= {});
var P = N, { noop: te } = g, { area: F, area: { prototype: I } } = T.seriesTypes, ne = {
	lineWidth: 1,
	threshold: null,
	tooltip: { pointFormat: "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>" },
	trackByArea: !0,
	dataLabels: {
		align: void 0,
		formatter: P.formatter,
		verticalAlign: void 0,
		xLow: 0,
		xHigh: 0,
		yLow: 0,
		yHigh: 0
	}
};
function re(e) {
	let t = e.options.dataLabels;
	return C(t) ? Array.from({ length: Math.max(t.length, 2) }, (r, i) => {
		let a = t[i], o = i === 0 ? "high" : i === 1 ? "low" : e.pointValKey, s = a?.alignToKey ?? o;
		return n(a ?? { enabled: !1 }, { alignToKey: s });
	}) : t?.alignToKey ? [n(t, t.alignToKey === "high" ? {
		x: t.xHigh,
		y: t.yHigh
	} : t.alignToKey === "low" ? {
		x: t.xLow,
		y: t.yLow
	} : {})] : [n(t, {
		alignToKey: "high",
		x: t?.xHigh,
		y: t?.yHigh
	}), n(t, {
		alignToKey: "low",
		x: t?.xLow,
		y: t?.yLow
	})];
}
var L = class extends F {
	toYData(e) {
		return [e.low, e.high];
	}
	highToXY(e) {
		let t = this.chart, n = this.xAxis.postTranslate(e.rectPlotX || 0, this.yAxis.len - (e.plotHigh || 0));
		e.plotHighX = n.x - t.plotLeft, e.plotHigh = n.y - t.plotTop, e.plotLowX = e.plotX;
	}
	getGraphPath(e) {
		let t = [], n = [], r = I.getGraphPath, i = this.options, a = this.chart.polar, o = a && i.connectEnds !== !1, s = i.connectNulls, c, l, u, d = i.step;
		for (e ||= this.points, c = e.length; c--;) {
			l = e[c];
			let r = a ? {
				plotX: l.rectPlotX,
				plotY: l.yBottom,
				doCurve: !1
			} : {
				plotX: l.plotX,
				plotY: l.plotY,
				doCurve: !1
			};
			!l.isNull && !o && !s && (!e[c + 1] || e[c + 1].isNull) && n.push(r), u = {
				polarPlotY: l.polarPlotY,
				rectPlotX: l.rectPlotX,
				yBottom: l.yBottom,
				plotX: l.plotHighX ?? l.plotX,
				plotY: l.plotHigh,
				isNull: l.isNull
			}, n.push(u), t.push(u), !l.isNull && !o && !s && (!e[c - 1] || e[c - 1].isNull) && n.push(r);
		}
		let f = r.call(this, e);
		d && (d === !0 && (d = "left"), i.step = {
			left: "right",
			center: "center",
			right: "left"
		}[d]);
		let p = r.call(this, t), m = r.call(this, n);
		i.step = d;
		let h = [].concat(f, p);
		return !this.chart.polar && m[0] && m[0][0] === "M" && (m[0] = [
			"L",
			m[0][1],
			m[0][2]
		]), this.graphPath = h, this.areaPath = f.concat(m), h.isArea = !0, h.xMap = f.xMap, this.areaPath.xMap = f.xMap, h;
	}
	drawDataLabels() {
		let e = this, t = e.options.dataLabels;
		if (t) {
			let n = re(e);
			n.forEach(P.applyAlignToKeyValue), e.options.dataLabels = n, I.drawDataLabels && I.drawDataLabels.call(e), e.options.dataLabels = t;
			for (let t of e.points) {
				let n = t.dataLabels ?? [];
				t.dataLabelUpper = n.find((t) => P.resolveAlignToKey(e, t.options?.alignToKey) === "high"), t.dataLabel = n.find((t) => P.resolveAlignToKey(e, t.options?.alignToKey) === "low");
			}
		}
	}
	modifyMarkerSettings() {
		let e = this, t = {
			marker: e.options.marker,
			symbol: e.symbol
		};
		if (e.options.lowMarker) {
			let { options: { marker: t, lowMarker: r } } = e;
			e.options.marker = n(t, r), r.symbol && (e.symbol = r.symbol);
		}
		return t;
	}
	restoreMarkerSettings(e) {
		let t = this;
		t.options.marker = e.marker, t.symbol = e.symbol;
	}
	drawPoints() {
		let e = this, t = e.points.length, n, r, i = e.modifyMarkerSettings();
		for (I.drawPoints.apply(e, arguments), e.restoreMarkerSettings(i), n = 0; n < t;) r = e.points[n], r.graphics = r.graphics || [], r.origProps = {
			plotY: r.plotY,
			plotX: r.plotX,
			isInside: r.isInside,
			negative: r.negative,
			zone: r.zone,
			y: r.y
		}, (r.graphic || r.graphics[0]) && (r.graphics[0] = r.graphic), r.graphic = r.graphics[1], r.plotY = r.plotHigh, x(r.plotHighX) && (r.plotX = r.plotHighX), r.y = r.high ?? r.origProps.y, r.negative = r.y < (e.options.threshold || 0), e.zones.length && (r.zone = r.getZone()), e.chart.polar || (r.isInside = r.isTopInside = r.plotY !== void 0 && r.plotY >= 0 && r.plotY <= e.yAxis.len && r.plotX >= 0 && r.plotX <= e.xAxis.len), n++;
		for (I.drawPoints.apply(e, arguments), n = 0; n < t;) r = e.points[n], r.graphics = r.graphics || [], (r.graphic || r.graphics[1]) && (r.graphics[1] = r.graphic), r.graphic = r.graphics[0], r.origProps && (h(r, r.origProps), delete r.origProps), n++;
	}
	hasMarkerChanged(e, t) {
		let n = e.lowMarker, r = t.lowMarker || {};
		return n && (n.enabled === !1 || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width) || super.hasMarkerChanged(e, t);
	}
};
L.defaultOptions = n(F.defaultOptions, ne), p(L, "afterTranslate", function() {
	this.pointArrayMap.join(",") === "low,high" && this.points.forEach((e) => {
		let t = e.high, n = e.plotY;
		e.isNull ? e.plotY = void 0 : (e.plotLow = n, e.plotHigh = o(t) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(t) : t, !1, !0, void 0, !0) : void 0, this.dataModify && (e.yBottom = e.plotHigh));
	});
}, { order: 0 }), p(L, "afterTranslate", function() {
	this.points.forEach((e) => {
		if (this.chart.polar) this.highToXY(e), e.plotLow = e.plotY, e.tooltipPos = [((e.plotHighX || 0) + (e.plotLowX || 0)) / 2, ((e.plotHigh || 0) + (e.plotLow || 0)) / 2];
		else {
			let t = e.pos(!1, void 0, e.plotLow), n = e.pos(!1, void 0, e.plotHigh);
			t && n && (t[0] = (t[0] + n[0]) / 2, t[1] = (t[1] + n[1]) / 2), e.tooltipPos = t;
		}
	});
}, { order: 3 }), h(L.prototype, {
	deferTranslatePolar: !0,
	pointArrayMap: ["low", "high"],
	pointClass: ee,
	pointValKey: "low",
	setStackedPoints: te
}), P.compose(L), T.registerSeriesType("arearange", L);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js
var { spline: { prototype: ie } } = T.seriesTypes, R = class extends L {};
R.defaultOptions = n(L.defaultOptions), h(R.prototype, { getPointSpline: ie.getPointSpline }), T.registerSeriesType("areasplinerange", R);
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangePoint.js
var { seriesTypes: { column: { prototype: { pointClass: { prototype: z } } }, arearange: { prototype: { pointClass: ae } } } } = T, B = class extends ae {
	isValid() {
		return o(this.low);
	}
};
h(B.prototype, { setState: z.setState });
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangeSeriesDefaults.js
var oe = {
	borderRadius: { where: "all" },
	pointRange: null,
	legendSymbol: "rectangle",
	marker: null,
	states: { hover: { halo: !1 } }
}, { noop: se } = g, { seriesTypes: { arearange: V, column: ce, column: { prototype: H } } } = T, U = class extends V {
	setOptions() {
		return n(!0, arguments[0], { stacking: void 0 }), V.prototype.setOptions.apply(this, arguments);
	}
	translate() {
		return H.translate.apply(this);
	}
	pointAttribs() {
		return H.pointAttribs.apply(this, arguments);
	}
	translate3dPoints() {
		return H.translate3dPoints.apply(this, arguments);
	}
	translate3dShapes() {
		return H.translate3dShapes.apply(this, arguments);
	}
	afterColumnTranslate() {
		let e = this.yAxis, t = this.xAxis, r = t.startAngleRad, i = this.chart, a = this.xAxis.isRadial, s = Math.max(i.chartWidth, i.chartHeight) + 999, c, l, u, d;
		function f(e) {
			return S(e, -s, s);
		}
		this.points.forEach((s) => {
			let p = s.shapeArgs || {}, m = this.options.minPointLength, h = s.plotY, g = e.translate(s.high, 0, 1, 0, 1);
			if (o(g) && o(h)) {
				if (s.plotHigh = f(g), s.plotLow = f(h), d = s.plotHigh, c = (s.rectPlotY ?? s.plotY) - s.plotHigh, Math.abs(c) < m ? (l = m - c, c += l, d -= l / 2) : c < 0 && (c *= -1, d -= c), a && this.polar) u = s.barX + r, s.shapeType = "arc", s.shapeArgs = this.polar.arc(d + c, d, u, u + (s.pointWidth || 0));
				else {
					p.height = c, p.y = d;
					let { x: r = 0, width: a = 0 } = p;
					s.shapeArgs = n(s.shapeArgs, this.crispCol(r, d, a, c)), s.tooltipPos = i.inverted ? [
						e.len + e.pos - i.plotLeft - d - c / 2,
						t.len + t.pos - i.plotTop - r - a / 2,
						c
					] : [
						t.left - i.plotLeft + r + a / 2,
						e.pos - i.plotTop + d + c / 2,
						c
					];
				}
			}
		});
	}
};
U.defaultOptions = n(ce.defaultOptions, V.defaultOptions, oe), p(U, "afterColumnTranslate", function() {
	U.prototype.afterColumnTranslate.apply(this);
}, { order: 5 }), h(U.prototype, {
	directTouch: !0,
	pointClass: B,
	trackerGroups: ["group", "dataLabelsGroup"],
	adjustForMissingColumns: H.adjustForMissingColumns,
	animate: H.animate,
	crispCol: H.crispCol,
	drawGraph: se,
	drawPoints: H.drawPoints,
	getSymbol: se,
	drawTracker: H.drawTracker,
	getColumnMetrics: H.getColumnMetrics
}), T.registerSeriesType("columnrange", U);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Pane/PaneComposition.js
function le(e) {
	let t = this, n;
	return e && t.pane.forEach((r) => {
		W(e.chartX - t.plotLeft, e.chartY - t.plotTop, r.center) && (n = r);
	}), n;
}
function ue(e, t) {
	let n = e.prototype;
	n.getHoverPane || (n.collectionsWithUpdate.push("pane"), n.getHoverPane = le, p(e, "afterIsInsidePlot", de), p(t, "afterGetHoverData", fe), p(t, "beforeGetHoverData", pe));
}
function W(e, t, n, r, i) {
	let a = !0, o = n[0], s = n[1], c = 2 * Math.PI, u = Math.sqrt((e - o) ** 2 + (t - s) ** 2);
	if (x(r) && x(i)) {
		let n = Math.atan2(l(t - s, 8), l(e - o, 8));
		n = (n + c) % c, r = (r + c) % c, i = (i + c) % c, Math.abs(i - r) > 1e-6 && (a = r > i ? n >= r || n <= i : n >= r && n <= i);
	} else a = !0;
	return u <= Math.ceil(n[2] / 2) && a;
}
function de(e) {
	let t = this;
	t.polar && (e.options.inverted && ([e.x, e.y] = [e.y, e.x]), e.isInsidePlot = t.pane.some((t) => W(e.x, e.y, t.center, t.axis && t.axis.normalizedStartAngleRad, t.axis && t.axis.normalizedEndAngleRad)));
}
function fe(e) {
	let t = this.chart;
	e.hoverPoint && e.hoverPoint.plotX && e.hoverPoint.plotY && t.hoverPane && !W(e.hoverPoint.plotX, e.hoverPoint.plotY, t.hoverPane.center) && (e.hoverPoint = void 0);
}
function pe(e) {
	let t = this.chart;
	t.polar ? (t.hoverPane = t.getHoverPane(e), e.filter = function(n) {
		return n.visible && !(!e.shared && n.directTouch) && (n.options.enableMouseTracking ?? !0) && (!t.hoverPane || n.xAxis.pane === t.hoverPane);
	}) : t.hoverPane = void 0;
}
var me = { compose: ue }, { defaultOptions: he } = u, ge = {
	shape: "arc",
	borderRadius: void 0,
	borderWidth: 0,
	borderColor: "var(--highcharts-neutral-color-20)",
	backgroundColor: "var(--highcharts-neutral-color-3)",
	from: -Number.MAX_VALUE,
	to: Number.MAX_VALUE,
	outerRadius: "100%"
}, _e = {
	borderRadius: 3,
	margin: void 0
};
he.pane = _e;
var ve = {
	pane: _e,
	background: ge
}, G = class {
	constructor(e, t) {
		this.coll = "pane", this.init(e, t);
	}
	init(e, t) {
		this.chart = t, this.background = [], t.pane.push(this), this.setOptions(e);
	}
	hasSeriesType(e) {
		return !!(this.chart.options?.chart?.type === e || this.chart.options?.series?.some((t) => t.type === e));
	}
	setOptions(e) {
		this.options = n(ve.pane, this.chart.angular ? {
			background: {},
			innerSize: "85%"
		} : {}, e);
	}
	render() {
		let e = this.options, t = this.chart.renderer;
		this.group ||= t.g("pane-group").attr({ zIndex: e.zIndex || 0 }).add(), this.updateCenter();
		let r = this.options.background;
		if (r) {
			r = v(r);
			let e = Math.max(r.length, this.background.length || 0);
			for (let t = 0; t < e; t++) r[t] && this.axis ? this.renderBackground(n(ve.background, { borderRadius: this.options.borderRadius }, r[t]), t) : this.background[t] && (this.background[t] = this.background[t].destroy(), this.background.splice(t, 1));
		}
	}
	renderBackground(e, t) {
		let n = { class: "highcharts-pane " + (e.className || "") }, r = "animate";
		this.chart.styledMode || h(n, {
			fill: e.backgroundColor,
			stroke: e.borderColor,
			"stroke-width": e.borderWidth
		}), this.background[t] || (this.background[t] = this.chart.renderer.path().add(this.group), r = "attr"), this.background[t][r]({ d: this.axis.getPlotBandPath(e.from, e.to, e) }).attr(n);
	}
	updateCenter() {
		let { axis: e, chart: t, options: n } = this, { plotHeight: r, plotWidth: a } = t, s = n.center?.[1], c = n.margin, l = this.axis?.options.labels, u = n.thickness, f = Array.isArray(c) ? c : [
			c,
			c,
			c,
			c
		], p = [], m = n.size, h, g = 0, _ = 0, y = Math.min(t.series.reduce((e, t) => {
			if (!t.is("gauge") || t.yAxis?.pane !== this) return e;
			let n = v(t.options.dataLabels)[0], r = 0;
			return n && n.enabled !== !1 && (r = (1 - i(n.verticalAlign)) * 30 + (n.y || 0)), Math.max(e, r);
		}, 0), r * .3);
		if (l?.enabled) {
			let e = String(l.style?.fontSize || ""), t = (/px$/.test(e) ? parseFloat(e) : /em$/.test(e) ? parseFloat(e) * 12 : 12) * 1.2;
			_ = Math.max(l.distance ?? 15, 0) + t / 2;
		}
		if (f.forEach((e, t) => {
			p[t] = e ?? Math.max(_ || 0);
		}), e && (m === void 0 || s === void 0)) {
			let { endAngleRad: t, startAngleRad: i } = e, o = Math.PI * 2 / 360, s = i < Math.PI / 2 && t > Math.PI / 2 || v(n.background).some((e) => e?.shape === "circle") ? Math.PI : Math.max(Math.abs(i + Math.PI / 2), Math.abs(t + Math.PI / 2)), c = Math.sin(s - Math.PI / 2), l = .5 + .5 * Math.max(c, Math.sin(o * 0));
			if (h = (r - p[0] - p[2]) / l, m === void 0) {
				m = Math.max(Math.min(h, a - p[1] - p[3]), 1);
				let e = m + p[0] + p[2] + 2 * (y - r);
				e > 0 && (g = e, m = Math.max(1, m - g));
			}
		}
		this.center = (e || {}).center = k.getCenter.call(this), o(m) && m >= 0 && (this.center[2] = m, o(u) ? this.center[3] = this.center[2] - u * 2 : this.center[3] = Math.min(m, d(n.innerSize || 0, m))), x(s) || (n.size ? this.center[1] = r / 2 : o(h) && (this.center[1] = (h + this.center[2] - g) / 4 + p[0]));
	}
	update(e, t) {
		n(!0, this.options, e), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(e) {
			e.pane === this && (e.pane = null, e.update({}, t));
		}, this);
	}
};
G.compose = me.compose;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/RadialAxisDefaults.js
var ye = {
	circular: {
		gridLineWidth: 1,
		labels: {
			align: void 0,
			x: 0,
			y: void 0
		},
		maxPadding: 0,
		minPadding: 0,
		showLastLabel: !1,
		tickLength: 0
	},
	radial: {
		gridLineInterpolation: "circle",
		gridLineWidth: 1,
		labels: {
			align: "right",
			padding: 5,
			x: -3,
			y: -2
		},
		showLastLabel: !1,
		title: {
			x: 4,
			text: null,
			rotation: 90
		}
	},
	radialGauge: {
		gridLineWidth: 0,
		labels: {
			align: "center",
			distance: 15,
			x: 0,
			y: void 0
		},
		minorGridLineWidth: 0,
		minorTickLength: 5,
		minorTickPosition: "inside",
		minorTicksPerMajor: 10,
		minorTickWidth: 1,
		tickLength: void 0,
		tickWidth: 2,
		tickPixelInterval: 100,
		tickPosition: "inside",
		title: {
			rotation: 0,
			text: ""
		},
		zIndex: 2
	}
}, { defaultOptions: K } = u, { composed: be, noop: q } = g, xe;
(function(t) {
	t.radialDefaultOptions = n(ye);
	function i() {
		this.autoConnect = this.isCircular && (this.userMax ?? this.options.max) === void 0 && l(this.endAngleRad - this.startAngleRad) === l(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && o(this.max) && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
	}
	function a(t, n) {
		return e(be, "Axis.Radial") && (p(t, "afterInit", j), p(t, "afterTickSize", M), p(t, "autoLabelAlign", ee), p(t, "destroy", N), p(t, "init", P), p(t, "initialAxisTranslation", te), p(n, "afterGetLabelPosition", F), p(n, "afterGetPosition", I), p(g, "setOptions", ne), y(t.prototype, "getMinorTickInterval", ae), y(n.prototype, "getMarkPath", B)), t;
	}
	t.compose = a;
	function c() {
		return () => {
			if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map((e) => this.ticks[e]?.label).filter((e) => !!e);
		};
	}
	function u() {
		return q;
	}
	function f(e, t, n) {
		let r = this.pane.center, i = e.value, a, o, s, c;
		return this.isCircular ? (x(i) ? e.point && (a = e.point.shapeArgs || {}, a.start && (i = this.chart.inverted ? this.translate(e.point.rectPlotY, !0) : e.point.x)) : (s = e.chartX || 0, c = e.chartY || 0, i = this.translate(Math.atan2(c - n, s - t) - this.startAngleRad, !0)), o = this.getPosition(i), s = o.x, c = o.y) : (x(i) || (s = e.chartX, c = e.chartY), x(s) && x(c) && (n = r[1] + this.chart.plotTop, i = this.translate(Math.min(Math.sqrt((s - t) ** 2 + (c - n) ** 2), r[2] / 2) - r[3] / 2, !0))), [
			i,
			s || 0,
			c || 0
		];
	}
	function m(e, t, n) {
		let r = this.pane.center, i = this.chart, a = this.left || 0, o = this.top || 0, s, c, l = t ?? r[2] / 2 - this.offset;
		return n ??= this.horiz ? 0 : this.center && -this.center[3] / 2, n && n > 0 && (l += n), this.isCircular || t !== void 0 ? (c = this.chart.renderer.symbols.arc(a + r[0], o + r[1], l, l, {
			start: this.startAngleRad,
			end: this.endAngleRad,
			open: !0,
			innerR: 0
		}), c.xBounds = [a + r[0]], c.yBounds = [o + r[1] - l]) : (s = this.postTranslate(this.angleRad, l), c = [[
			"M",
			this.center[0] + i.plotLeft,
			this.center[1] + i.plotTop
		], [
			"L",
			s.x,
			s.y
		]]), c;
	}
	function _() {
		this.constructor.prototype.getOffset.call(this);
		let e = this.options.offset ?? (this.pane.hasSeriesType("gauge") ? "-20%" : void 0);
		x(e) && (this.offset = d(e, this.center[2] / 2) * -1), this.chart.axisOffset[this.side] = 0;
	}
	function b(e, t, n) {
		let r = this.chart, i = (e) => {
			if (typeof e == "string") {
				let t = parseInt(e, 10);
				return m.test(e) && (t = t * u / 100), t;
			}
			return e;
		}, a = this.center, { endAngleRad: s, startAngleRad: c } = this, l = A(n.borderRadius ?? this.pane.options.borderRadius), u = a[2] / 2, d = Math.min(this.offset || 0, 0), f = this.left || 0, p = this.top || 0, m = /%$/, h = this.isCircular, g = this.options.plotBands || [], _ = g.indexOf(n), v, y, b, x, S, C, w = i(n.outerRadius) ?? u, T = i(n.innerRadius), E = i(n.thickness), D = !0, O = !0;
		if (l.radius && l.scope === "stack" && _ > -1 && (g[_ - 1] && g[_ - 1].to === e && (D = !1), g[_ + 1] && g[_ + 1].from === t && (O = !1)), this.options.gridLineInterpolation === "polygon") C = this.getPlotLinePath({ value: e }).concat(this.getPlotLinePath({
			value: t,
			reverse: !0
		}));
		else {
			o(this.min) && (e = Math.max(e, this.min)), o(this.max) && (t = Math.min(t, this.max));
			let i = this.translate(e), u = this.translate(t);
			h || (w = i || 0, T = u || 0), !o(this.min) && !o(this.max) && !n.color && !n.className ? (v = c, y = s) : n.shape === "circle" || !h ? (v = -Math.PI / 2, y = Math.PI * 1.5, S = !0) : (v = c + (i || 0), y = c + (u || 0)), w -= d, o(E) && (E -= d), C = r.renderer.symbols.arc(f + a[0], p + a[1], w, w, {
				start: Math.min(v, y),
				end: Math.max(v, y),
				innerR: T ?? (o(E) ? w - E : this.center[3] / 2),
				open: S,
				borderRadius: l.radius,
				brStart: D,
				brEnd: O
			}), h && (b = (y + v) / 2, x = f + a[0] + a[2] / 2 * Math.cos(b), C.xBounds = b > -Math.PI / 2 && b < Math.PI / 2 ? [x, r.plotWidth] : [0, x], C.yBounds = [p + a[1] + a[2] / 2 * Math.sin(b)], C.yBounds[0] += b > -Math.PI && b < 0 || b > Math.PI ? -10 : 10);
		}
		return C;
	}
	function C(e) {
		let t = this.pane.center, n = this.chart, r = n.inverted, i = e.reverse, a = this.pane.options.background, o = a ? v(a)[0] : {}, s = o.innerRadius || "0%", c = o.outerRadius || "100%", l = t[0] + n.plotLeft, u = t[1] + n.plotTop, f = this.height, p = e.isCrosshair, m = t[3] / 2, h = n.time.parse(e.value) || 0, g, _, y, b, x, C, w, T, E, D = this.getPosition(h, t[2] / 2 + (this.isCircular ? this.offset : 0)), O = D.x, k = D.y;
		if (p && (T = this.getCrosshairPosition(e, l, u), h = T[0] || 0, O = T[1], k = T[2]), this.isCircular) _ = Math.sqrt((O - l) ** 2 + (k - u) ** 2), y = typeof s == "string" ? d(s, 1) : s / _, b = typeof c == "string" ? d(c, 1) : c / _, t && m && (g = m / _, y < g && (y = g), b < g && (b = g)), E = [[
			"M",
			l + y * (O - l),
			u - y * (u - k)
		], [
			"L",
			O - (1 - b) * (O - l),
			k + (1 - b) * (u - k)
		]];
		else {
			let e = S(this.translate(h), 0, f);
			if (this.options.gridLineInterpolation === "circle") E = this.getLinePath(0, e, m);
			else if (E = [], n[r ? "yAxis" : "xAxis"].forEach((e) => {
				e.pane === this.pane && (x = e);
			}), x) {
				w = x.tickPositions, x.autoConnect && (w = w.concat([w[0]])), i && (w = w.slice().reverse()), e && (e += m);
				for (let t = 0; t < w.length; t++) C = x.getPosition(w[t], e), E.push(t ? [
					"L",
					C.x,
					C.y
				] : [
					"M",
					C.x,
					C.y
				]);
			}
		}
		return E;
	}
	function w(e, t) {
		let n = this.translate(e), r = (this.center && this.center[2] || 0) / 2;
		return this.postTranslate(this.isCircular ? n : this.angleRad, (this.isCircular ? t ?? r : typeof n == "number" && n < 0 ? 0 : n ?? r) - this.offset);
	}
	function T() {
		let e = this.center, t = this.chart, n = this.options.title;
		return {
			x: t.plotLeft + e[0] + (n.x || 0),
			y: t.plotTop + e[1] - {
				high: .5,
				middle: .25,
				low: 0
			}[n.align] * e[2] + (n.y || 0)
		};
	}
	function E(e) {
		e.unmodifiedProps ||= [
			"beforeSetTickPositions",
			"createLabelCollector",
			"getCrosshairPosition",
			"getLinePath",
			"getOffset",
			"getPlotBandPath",
			"getPlotLinePath",
			"getPosition",
			"getTitlePosition",
			"isHidden",
			"postTranslate",
			"redraw",
			"render",
			"setAxisSize",
			"setAxisTranslation",
			"setCategories",
			"setOptions",
			"setScale",
			"setTitle"
		].reduce((t, n) => (t[n] = e[n], t), {});
	}
	function D(e) {
		let t = e.unmodifiedProps;
		s(t) && (h(e, t), delete e.unmodifiedProps);
	}
	function O(e) {
		e.beforeSetTickPositions = i, e.createLabelCollector = c, e.getCrosshairPosition = f, e.getLinePath = m, e.getOffset = _, e.getPlotBandPath = b, e.getPlotLinePath = C, e.getPosition = w, e.getTitlePosition = T, e.postTranslate = re, e.setAxisSize = ie, e.setAxisTranslation = R, e.setOptions = z;
	}
	function k(e) {
		e.isHidden = !0, e.createLabelCollector = u, e.getOffset = q, e.redraw = L, e.render = L, e.setCategories = q, e.setTitle = q;
	}
	function j() {
		let e = this.chart, t = this.options, n = e.angular && this.isXAxis, r = this.pane, i = r?.options;
		if (!n && r && (e.angular || e.polar)) {
			let n = Math.PI * 2, r = i.startAngle ?? (e.angular ? -135 : 0), a = (r - 90) * Math.PI / 180, o = ((i.endAngle ?? r + (e.angular ? 270 : 360)) - 90) * Math.PI / 180;
			this.angleRad = (t.angle || 0) * Math.PI / 180, this.startAngleRad = a, this.endAngleRad = o;
			let s = (a % n + n) % n, c = (o % n + n) % n;
			s > Math.PI && (s -= n), c > Math.PI && (c -= n), this.normalizedStartAngleRad = s, this.normalizedEndAngleRad = c;
		}
	}
	function M(e) {
		if (this.chart.angular) {
			let { options: t, pane: n } = this;
			n.hasSeriesType("gauge") && (e.tickSize = [t[`${e.prefix}Length`] ?? 10, t[`${e.prefix}Width`] ?? 1], t[`${e.prefix}Position`] === "inside" && (e.tickSize[0] *= -1));
		}
	}
	function ee(e) {
		this.isRadial && (e.align = void 0, e.preventDefault());
	}
	function N() {
		if (this.chart?.labelCollectors) {
			let e = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
			e >= 0 && this.chart.labelCollectors.splice(e, 1);
		}
	}
	function P(e) {
		let t = this.chart, n = t.angular, r = t.polar, i = this.isXAxis, a = this.coll, o = n && i, s = e.userOptions.pane || 0, c = this.pane = t.pane && t.pane[s], l;
		if (a === "colorAxis") {
			this.isRadial = !1;
			return;
		}
		E(this), n ? (o ? k(this) : O(this), l = !i) : r ? (O(this), l = this.horiz) : D(this), n || r ? (this.isRadial = !0, this.labelCollector ||= this.createLabelCollector(), this.labelCollector && t.labelCollectors.push(this.labelCollector)) : this.isRadial = !1, c && l && (c.axis = this), this.isCircular = l;
	}
	function te() {
		this.isRadial && this.beforeSetTickPositions?.();
	}
	function F(e) {
		let t = this.label;
		if (!t) return;
		let n = this.axis, r = t.getBBox(), i = n.options.labels, a = (n.translate(this.pos) + n.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, o = Math.round(a), s = x(i.y) ? 0 : -r.height * .3, c = i.y, l, u = 20, f = i.align, p = "end", m = o < 0 ? o + 360 : o, h = m, g = 0, _ = 0;
		n.isRadial && (l = n.getPosition(this.pos, n.center[2] / 2 + d(i.distance ?? 15, n.center[2] / 2) + n.offset), i.rotation === "auto" ? t.attr({ rotation: a }) : x(c) || (c = n.chart.renderer.fontMetrics(t).b - r.height / 2), x(f) || (n.isCircular ? (r.width > n.len * n.tickInterval / (n.max - n.min) && (u = 0), f = a > u && a < 180 - u ? "left" : a > 180 + u && a < 360 - u ? "right" : "center") : f = "center", t.attr({ align: f })), f === "auto" && n.tickPositions.length === 2 && n.isCircular && (m > 90 && m < 180 ? m = 180 - m : m > 270 && m <= 360 && (m = 540 - m), h > 180 && h <= 360 && (h = 360 - h), (n.pane.options.startAngle === o || n.pane.options.startAngle === o + 360 || n.pane.options.startAngle === o - 360) && (p = "start"), f = o >= -90 && o <= 90 || o >= -360 && o <= -270 || o >= 270 && o <= 360 ? p === "start" ? "right" : "left" : p === "start" ? "left" : "right", h > 70 && h < 110 && (f = "center"), m < 15 || m >= 180 && m < 195 ? g = r.height * .3 : m >= 15 && m <= 35 ? g = p === "start" ? 0 : r.height * .75 : m >= 195 && m <= 215 ? g = p === "start" ? r.height * .75 : 0 : m > 35 && m <= 90 ? g = p === "start" ? -r.height * .25 : r.height : m > 215 && m <= 270 && (g = p === "start" ? r.height : -r.height * .25), h < 15 ? _ = p === "start" ? -r.height * .15 : r.height * .15 : h > 165 && h <= 180 && (_ = p === "start" ? r.height * .15 : -r.height * .15), t.attr({ align: f }), t.translate(_, g + s)), e.pos.x = l.x + (i.x || 0), e.pos.y = l.y + (c || 0));
	}
	function I(e) {
		this.axis.getPosition && h(e.pos, this.axis.getPosition(this.pos));
	}
	function ne({ options: e }) {
		e.xAxis && n(!0, t.radialDefaultOptions.circular, e.xAxis), e.yAxis && n(!0, t.radialDefaultOptions.radialGauge, e.yAxis);
	}
	function re(e, t) {
		let n = this.chart, r = this.center;
		return e = this.startAngleRad + e, {
			x: n.plotLeft + r[0] + Math.cos(e) * t,
			y: n.plotTop + r[1] + Math.sin(e) * t
		};
	}
	function L() {
		this.isDirty = !1;
	}
	function ie() {
		let e = this.constructor.prototype, t, n;
		e.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(), t = this.center = this.pane.center.slice(), this.isCircular ? (this.sector = this.endAngleRad - this.startAngleRad, this.len = this.width = this.height = t[2] * this.sector / 2) : (n = this.postTranslate(this.angleRad, t[3] / 2), t[0] = n.x - this.chart.plotLeft, t[1] = n.y - this.chart.plotTop, delete this.sector, this.len = this.width = this.height = (t[2] - t[3]) / 2));
	}
	function R() {
		this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0);
	}
	function z(e) {
		let { coll: i } = this, { angular: a, inverted: o, polar: c } = this.chart, l = {};
		a ? this.isXAxis || (l = n(K.yAxis, t.radialDefaultOptions.radialGauge)) : c && (l = this.horiz ? n(K.xAxis, t.radialDefaultOptions.circular) : n(i === "xAxis" ? K.xAxis : K.yAxis, t.radialDefaultOptions.radial)), o && i === "yAxis" && (l.stackLabels = s(K.yAxis, !0) ? K.yAxis.stackLabels : {}, l.reversedStacks = !0);
		let u = this.options = n(l, e);
		u.plotBands ||= [], r(this, "afterSetOptions");
	}
	function ae(e) {
		return !x(this.options.minorTicks) && this.pane.hasSeriesType("gauge") ? "auto" : e.apply(this, Array.prototype.slice.call(arguments, 1));
	}
	function B(e, t, n, r, i, a, o) {
		let s = this.axis, c, l;
		return s.isRadial ? (c = s.getPosition(this.pos, s.center[2] / 2 + r), l = [[
			"M",
			t,
			n
		], [
			"L",
			c.x,
			c.y
		]]) : l = e.call(this, t, n, r, i, a, o), l;
	}
})(xe ||= {});
var Se = xe, { defaultOptions: Ce } = u, { composed: we } = g;
function Te(e, t, n, r, i) {
	let a = _(), o = e.createElement("clipPath").attr({ id: a }).add(e.defs), s = i ? e.arc(t, n, r, i, 0, 2 * Math.PI).add(o) : e.circle(t, n, r).add(o);
	return s.id = a, s.clipPath = o, s;
}
function Ee(e, t) {
	let n, r;
	return t.align === null && (n = e > 20 && e < 160 ? "left" : e > 200 && e < 340 ? "right" : "center", t.align = n), t.verticalAlign === null && (r = e < 45 || e > 315 ? "bottom" : e > 135 && e < 225 ? "top" : "middle", t.verticalAlign = r), t;
}
function De(e, t, n, r) {
	let i = 1.5, a = 2.5, o = +!!r, s, c, l, u, d, f;
	s = t >= 0 && t <= e.length - 1 ? t : t < 0 ? e.length - 1 + t : 0;
	let p = s - 1 < 0 ? e.length - (1 + o) : s - 1, m = s + 1 > e.length - 1 ? o : s + 1, h = e[p], g = e[m], _ = h.plotX, v = h.plotY, y = g.plotX, b = g.plotY, x = e[s].plotX, S = e[s].plotY;
	c = (i * x + _) / a, l = (i * S + v) / a, u = (i * x + y) / a, d = (i * S + b) / a;
	let C = Math.sqrt((c - x) ** 2 + (l - S) ** 2), w = Math.sqrt((u - x) ** 2 + (d - S) ** 2), T = Math.atan2(l - S, c - x), E = Math.atan2(d - S, u - x);
	f = Math.PI / 2 + (T + E) / 2, Math.abs(T - f) > Math.PI / 2 && (f -= Math.PI), c = x + Math.cos(f) * C, l = S + Math.sin(f) * C, u = x + Math.cos(Math.PI + f) * w, d = S + Math.sin(Math.PI + f) * w;
	let D = {
		rightContX: u,
		rightContY: d,
		leftContX: c,
		leftContY: l,
		plotX: x,
		plotY: S
	};
	return n && (D.prevPointCont = De(e, p, !1, r)), D;
}
function Oe() {
	(this.pane || []).forEach((e) => {
		e.render();
	});
}
function ke(e) {
	let t = e.args[0].xAxis, n = e.args[0].yAxis, r = e.args[0].chart;
	t && n && (n.gridLineInterpolation === "polygon" ? (t.startOnTick = !0, t.endOnTick = !0) : t.gridLineInterpolation === "polygon" && r.inverted && (n.startOnTick = !0, n.endOnTick = !0));
}
function Ae() {
	this.pane ||= [], this.options.pane = v(this.options.pane || {}), v(this.userOptions.pane || {}).forEach((e) => {
		new G(e, this);
	}, this);
}
function je(e) {
	let t = e.args.marker, n = this.chart.xAxis[0], r = this.chart.yAxis[0], i = this.chart.inverted, a = i ? r : n, o = i ? n : r;
	if (this.chart.polar) {
		e.preventDefault();
		let n = (t.attr ? t.attr("start") : t.start) - a.startAngleRad, r = t.attr ? t.attr("r") : t.r, i = (t.attr ? t.attr("end") : t.end) - a.startAngleRad, s = t.attr ? t.attr("innerR") : t.innerR;
		e.result.x = n + a.pos, e.result.width = i - n, e.result.y = o.len + o.pos - r, e.result.height = r - s;
	}
}
function Me(e) {
	let t = this.chart;
	if (t.polar && t.hoverPane && t.hoverPane.axis) {
		e.preventDefault();
		let n = t.hoverPane.center, r = t.mouseDownX || 0, i = t.mouseDownY || 0, a = e.args.chartY, o = e.args.chartX, s = Math.PI * 2, c = t.hoverPane.axis.startAngleRad, l = t.hoverPane.axis.endAngleRad, u = t.inverted ? t.xAxis[0] : t.yAxis[0], d = {}, f = "arc";
		if (d.x = n[0] + t.plotLeft, d.y = n[1] + t.plotTop, this.zoomHor) {
			let e = c > 0 ? l - c : Math.abs(c) + Math.abs(l), p = Math.atan2(i - t.plotTop - n[1], r - t.plotLeft - n[0]) - c, m = Math.atan2(a - t.plotTop - n[1], o - t.plotLeft - n[0]) - c;
			if (d.r = n[2] / 2, d.innerR = n[3] / 2, p <= 0 && (p += s), m <= 0 && (m += s), m < p && (m = [p, p = m][0]), e < s) {
				let t = l + (s - e) / 2;
				c + m > t && (m = p, p = c <= 0 ? c : 0);
			}
			let h = d.start = Math.max(p + c, c), g = d.end = Math.min(m + c, l);
			if (u.options.gridLineInterpolation === "polygon") {
				let e = t.hoverPane.axis, r = h - e.startAngleRad + e.pos, i = g - h, a = u.getPlotLinePath({ value: u.max }), o = e.toValue(r), s = e.toValue(r + i);
				if (o < e.getExtremes().min) {
					let { min: t, max: n } = e.getExtremes();
					o = n - (t - o);
				}
				if (s < e.getExtremes().min) {
					let { min: t, max: n } = e.getExtremes();
					s = n - (t - s);
				}
				s < o && (s = [o, o = s][0]), a = J(a, o, s, e), a.push([
					"L",
					n[0] + t.plotLeft,
					t.plotTop + n[1]
				]), d.d = a, f = "path";
			}
		}
		if (this.zoomVert) {
			let e = t.inverted ? t.xAxis[0] : t.yAxis[0], s = Math.sqrt((r - t.plotLeft - n[0]) ** 2 + (i - t.plotTop - n[1]) ** 2), u = Math.sqrt((o - t.plotLeft - n[0]) ** 2 + (a - t.plotTop - n[1]) ** 2);
			if (u < s && (s = [u, u = s][0]), u > n[2] / 2 && (u = n[2] / 2), s < n[3] / 2 && (s = n[3] / 2), this.zoomHor || (d.start = c, d.end = l), d.r = u, d.innerR = s, e.options.gridLineInterpolation === "polygon") {
				let t = e.toValue(e.len + e.pos - s), n = e.toValue(e.len + e.pos - u);
				d.d = e.getPlotLinePath({ value: n }).concat(e.getPlotLinePath({
					value: t,
					reverse: !0
				})), f = "path";
			}
		}
		if (this.zoomHor && this.zoomVert && u.options.gridLineInterpolation === "polygon") {
			let e = t.hoverPane.axis, n = d.start || 0, r = d.end || 0, i = n - e.startAngleRad + e.pos, a = r - n, o = e.toValue(i), s = e.toValue(i + a);
			if (d.d instanceof Array) {
				let e = d.d.slice(0, d.d.length / 2), n = d.d.slice(d.d.length / 2, d.d.length);
				n = [...n].reverse();
				let r = t.hoverPane.axis;
				e = J(e, o, s, r), n = J(n, o, s, r), n && (n[0][0] = "L"), n = [...n].reverse(), d.d = e.concat(n), f = "path";
			}
		}
		e.attrs = d, e.shapeType = f;
	}
}
function Ne() {
	let e = this.chart;
	e.polar && (this.polar = new Ge(this), e.inverted && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0)));
}
function Pe() {
	let { chart: e, options: t, yAxis: n } = this;
	if (t.borderRadius && e.polar && e.inverted) {
		let e = Ce.plotOptions?.[this.type]?.borderRadius, { scope: r, where: i = "end" } = A(t.borderRadius, s(e) ? e : {});
		for (let e of this.points) {
			let { shapeArgs: a } = e;
			if (e.shapeType === "arc" && a) {
				let o = i === "all", s = !0;
				t.stacking && r === "stack" && (o = e.stackY === e.y && i === "all", s = e.stackY === e.stackTotal), n.reversed && ([o, s] = [s, o]), a.brStart = o, a.brEnd = s;
			}
		}
	}
}
function Fe() {
	if (this.chart.polar && this.xAxis) {
		let e = this, { xAxis: t, yAxis: n } = e, r = e.chart;
		e.kdByAngle = r.tooltip && r.tooltip.shared, e.kdByAngle || r.inverted ? e.searchPoint = Ie : e.options.findNearestPointBy = "xy";
		let i = e.points, a = i.length;
		for (; a--;) !e.is("column") && !e.is("columnrange") && e.polar.toXY(i[a]), !r.hasParallelCoordinates && !e.yAxis.reversed && ((i[a].y ?? Number.MIN_VALUE) < n.min || i[a].x < t.min || i[a].x > t.max ? (i[a].isNull = !0, i[a].plotY = NaN) : i[a].isNull = i[a].isValid && !i[a].isValid());
		this.hasClipCircleSetter ||= !!e.eventsToUnbind.push(p(e, "afterRender", function() {
			let e;
			r.polar && this.options.clip !== !1 && (e = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({
				x: e[0],
				y: e[1],
				r: e[2] / 2,
				innerR: e[3] / 2
			}) : this.clipCircle = Te(r.renderer, e[0], e[1], e[2] / 2, e[3] / 2), this.group.clip(this.clipCircle), this.setClip = g.noop);
		}));
	}
}
function Ie(e) {
	let t = this, n = t.chart, r = t.xAxis, i = t.yAxis, a = r.pane && r.pane.center, o = e.chartX - (a && a[0] || 0) - n.plotLeft, s = e.chartY - (a && a[1] || 0) - n.plotTop, c = n.inverted ? {
		clientX: e.chartX - i.pos,
		plotY: e.chartY - r.pos
	} : { clientX: 180 + -180 / Math.PI * Math.atan2(o, s) };
	return t.searchKDTree(c);
}
function J(e, t, n, r) {
	let i = r.tickInterval, a = r.tickPositions, o = m(a, (e) => e >= n), s = m([...a].reverse(), (e) => e <= t);
	return x(o) || (o = a[a.length - 1]), x(s) || (s = a[0], o += i, e[0][0] = "L", e.unshift(e[e.length - 3])), e = e.slice(a.indexOf(s), a.indexOf(o) + 1), e[0][0] = "M", e;
}
function Le(e, t) {
	return m(this.pane || [], (e) => e.options.id === t) || e.call(this, t);
}
function Re(e, t, r, i, a, o) {
	let s = this.chart, c = i.inside ?? !!this.options.stacking, l, u, d;
	s.polar ? (l = t.rectPlotX / Math.PI * 180, s.inverted ? (this.forceDL = s.isInsidePlot(t.plotX, t.plotY), c && t.shapeArgs ? (u = t.shapeArgs, d = this.yAxis.postTranslate(((u.start || 0) + (u.end || 0)) / 2 - this.xAxis.startAngleRad, t.barX + (t.pointWidth || 0) / 2), a = n(a, {
		x: d.x - s.plotLeft,
		y: d.y - s.plotTop
	})) : t.tooltipPos && (a = n(a, {
		x: t.tooltipPos[0],
		y: t.tooltipPos[1]
	})), i.align = i.align ?? "center", i.verticalAlign = i.verticalAlign ?? "middle") : i = Ee(l, i), E.prototype.alignDataLabel.call(this, t, r, i, a, o), this.isRadialBar && t.shapeArgs && t.shapeArgs.start === t.shapeArgs.end ? r.hide() : r.show()) : e.call(this, t, r, i, a, o);
}
function ze() {
	let e = this, { chart: t, options: n, xAxis: r, yAxis: i } = e, a = n.stacking, { center: s, reversed: c } = i, { endAngleRad: l, startAngleRad: u } = r, f = l - u, p = n.threshold, m = 0, h, g, _, v, y, b = 0, C = 0, w, T, E, D, O, k, j, M;
	if (r.isRadial) for (h = e.points, _ = h.length, v = i.translate(i.min), y = i.translate(i.max), p = n.threshold || 0, t.inverted && o(p) && (m = i.translate(p), x(m) && (m < 0 ? m = 0 : m > f && (m = f), e.translatedThreshold = m + u)); _--;) {
		if (g = h[_], k = g.barX, T = g.x, E = g.y, g.shapeType = "arc", t.inverted) {
			g.plotY = i.translate(E), a && i.stacking ? (O = i.stacking.stacks[(E < 0 ? "-" : "") + e.stackKey], e.visible && O && O[T] && (g.isNull || (D = O[T].points[e.getStackIndicator(void 0, T, e.index).key], b = i.translate(D[0]), C = i.translate(D[1]), x(b) && (b = S(b, 0, f))))) : (b = m, C = g.plotY), b > C && (C = [b, b = C][0]), c ? C > v ? C = v : b < y ? b = y : (b > v || C < y) && (b = C = f) : b < v ? b = v : C > y ? C = y : (C < v || b > y) && (b = C = 0), i.min > i.max && (b = C = c ? f : 0), b += u, C += u, s && (g.barX = k += s[3] / 2), j = Math.max(k, 0), M = Math.max(k + (g.pointWidth || 0), 0);
			let t = A(n.borderRadius), r = d(t.radius, M - j);
			g.shapeArgs = {
				x: s[0],
				y: s[1],
				r: M,
				innerR: j,
				start: b,
				end: C,
				borderRadius: r
			}, g.opacity = b === C ? 0 : void 0, g.plotY = (x(e.translatedThreshold) && (b < e.translatedThreshold ? b : C)) - u;
		} else b = k + u, g.shapeArgs = e.polar.arc(g.yBottom, g.plotY, b, b + (g.pointWidth || 0)), g.shapeArgs.borderRadius = 0;
		e.polar.toXY(g), t.inverted ? (w = i.postTranslate(g.rectPlotY, k + (g.pointWidth || 0) / 2), g.tooltipPos = [w.x - t.plotLeft, w.y - t.plotTop]) : g.tooltipPos = [g.plotX, g.plotY], s && (g.ttBelow = g.plotY > s[1]);
	}
}
function Be(e, t) {
	let n = this, r, i;
	if (this.chart.polar) {
		t ||= this.points;
		for (let e = 0; e < t.length; e++) if (!t[e].isNull) {
			r = e;
			break;
		}
		this.options.connectEnds !== !1 && r !== void 0 && (this.connectEnds = !0, t.splice(t.length, 0, t[r]), i = !0), t.forEach((e) => {
			e.polarPlotY === void 0 && n.polar.toXY(e);
		});
	}
	let a = e.apply(this, [].slice.call(arguments, 1));
	return i && t.pop(), a;
}
function Ve(e, t) {
	let n = this.chart, r = {
		xAxis: [],
		yAxis: []
	};
	return n.polar ? n.axes.forEach((e) => {
		if (e.coll === "colorAxis") return;
		let i = e.isXAxis, a = e.center, o = t.chartX - a[0] - n.plotLeft, s = t.chartY - a[1] - n.plotTop;
		r[i ? "xAxis" : "yAxis"].push({
			axis: e,
			value: e.translate(i ? Math.PI - Math.atan2(o, s) : Math.sqrt(o ** 2 + s ** 2), !0)
		});
	}) : r = e.call(this, t), r;
}
function He(e, t) {
	this.chart.polar || e.call(this, t);
}
function Y(e, t) {
	let n = this, r = this.chart, i = this.group, a = this.markerGroup, o = this.xAxis && this.xAxis.center, s = r.plotLeft, c = r.plotTop, l = this.options.animation, u, d, f, p, m, h;
	r.polar ? n.isRadialBar ? t || (n.startAngleRad = n.translatedThreshold ?? n.xAxis.startAngleRad, g.seriesTypes.pie.prototype.animate.call(n, t)) : (l = b(l), n.is("column") ? t || (d = o[3] / 2, n.points.forEach((e) => {
		f = e.graphic, p = e.shapeArgs, m = p && p.r, h = p && p.innerR, f && p && (f.attr({
			r: d,
			innerR: d
		}), f.animate({
			r: m,
			innerR: h
		}, n.options.animation));
	})) : t ? (u = {
		translateX: o[0] + s,
		translateY: o[1] + c,
		scaleX: .001,
		scaleY: .001
	}, i.attr(u), a && a.attr(u)) : (u = {
		translateX: s,
		translateY: c,
		scaleX: 1,
		scaleY: 1
	}, i.animate(u, l), a && a.animate(u, l))) : e.call(this, t);
}
function Ue(e, t, n, r) {
	let i, a;
	if (this.chart.polar) {
		if (!r) i = [
			"M",
			n.plotX,
			n.plotY
		];
		else {
			a = De(t, r, !0, this.connectEnds);
			let e = a.prevPointCont && a.prevPointCont.rightContX, n = a.prevPointCont && a.prevPointCont.rightContY;
			i = [
				"C",
				o(e) ? e : a.plotX,
				o(n) ? n : a.plotY,
				o(a.leftContX) ? a.leftContX : a.plotX,
				o(a.leftContY) ? a.leftContY : a.plotY,
				a.plotX,
				a.plotY
			];
		}
	} else i = e.call(this, t, n, r);
	return i;
}
function We(e, t, n = this.plotX, r = this.plotY) {
	let { series: i } = this, { chart: a } = i || {};
	return a?.polar && o(n) && o(r) ? [n + (t ? a.plotLeft : 0), r + (t ? a.plotTop : 0)] : e.call(this, t, n, r);
}
var Ge = class {
	static compose(t, n, r, i, a, o, s, c, l, u) {
		if (G.compose(n, r), Se.compose(t, a), e(we, "Polar")) {
			let e = n.prototype, t = o.prototype, a = r.prototype, d = i.prototype;
			if (p(n, "afterDrawChartBox", Oe), p(n, "createAxes", Ae), p(n, "init", ke), y(e, "get", Le), y(a, "getCoordinates", Ve), y(a, "pinch", He), p(r, "getSelectionMarkerAttrs", Me), p(r, "getSelectionBox", je), p(i, "afterInit", Ne), p(i, "afterColumnTranslate", Pe, { order: 9 }), p(i, "afterTranslate", Fe, { order: 2 }), p(i, "afterColumnTranslate", ze, { order: 4 }), y(d, "animate", Y), y(t, "pos", We), c) {
				let e = c.prototype;
				y(e, "alignDataLabel", Re), y(e, "animate", Y);
			}
			if (l) {
				let e = l.prototype;
				y(e, "getGraphPath", Be);
			}
			if (u) {
				let e = u.prototype;
				if (y(e, "getPointSpline", Ue), s) {
					let t = s.prototype;
					t.getPointSpline = e.getPointSpline;
				}
			}
		}
	}
	constructor(e) {
		this.series = e;
	}
	arc(e, t, n, r) {
		let i = this.series, a = i.xAxis.center, o = i.yAxis.len, s = a[3] / 2, c = o - t + s, l = o - (e ?? o) + s;
		return i.yAxis.reversed && (c < 0 && (c = s), l < 0 && (l = s)), {
			x: a[0],
			y: a[1],
			r: c,
			innerR: l,
			start: n,
			end: r
		};
	}
	toXY(e) {
		let t = this.series, n = t.chart, r = t.xAxis, i = t.yAxis, a = e.plotX, s = n.inverted, c = e.y, l = e.plotY, u = s ? a : i.len - l, d;
		if (s && t && !t.isRadialBar && (e.plotY = l = o(c) ? i.translate(c) : 0), e.rectPlotX = a, e.rectPlotY = l, i.center && (u += i.center[3] / 2), o(l)) {
			let t = s ? i.postTranslate(l, u) : r.postTranslate(a, u);
			e.plotX = e.polarPlotX = t.x - n.plotLeft, e.plotY = e.polarPlotY = t.y - n.plotTop;
		}
		t.kdByAngle ? (d = (a / Math.PI * 180 + (r.pane.options.startAngle || 0)) % 360, d < 0 && (d += 360), e.clientX = d) : e.clientX = e.plotX;
	}
}, { composed: Ke } = g, qe;
(function(n) {
	function r(t, n) {
		e(Ke, "Axis.Waterfall") && (p(t, "init", o), p(t, "afterBuildStacks", i), p(t, "afterRender", a), p(n, "beforeRedraw", s));
	}
	n.compose = r;
	function i() {
		let e = this.waterfall?.stacks;
		e && (e.changed = !1, delete e.alreadyChanged);
	}
	function a() {
		let e = this;
		e.options.stackLabels?.enabled && e.waterfall?.stacks && e.waterfall.renderStackTotals();
	}
	function o() {
		let e = this;
		e.waterfall ||= new c(e);
	}
	function s() {
		let e = this.axes, t = this.series;
		for (let n of t) if (n.options.stacking) {
			for (let t of e) !t.isXAxis && t.waterfall && (t.waterfall.stacks.changed = !0);
			break;
		}
	}
	class c {
		constructor(e) {
			this.axis = e, this.stacks = { changed: !1 };
		}
		renderStackTotals() {
			let e = this.axis, n = e.waterfall?.stacks, r = e.stacking?.stackTotalGroup, i = new O(e, !1, 0, void 0);
			this.dummyStackItem = i, r && t(n, (e) => {
				t(e, (e, t) => {
					i.total = e.stackTotal, i.x = +t, e.label && (i.label = e.label), O.prototype.render.call(i, r), e.label = i.label, delete i.label;
				});
			}), i.total = null;
		}
	}
	n.Composition = c;
})(qe ||= {});
var Je = qe, Ye = class extends D.prototype.pointClass {
	getClassName() {
		let e = w.prototype.getClassName.call(this);
		return this.isSum ? e += " highcharts-sum" : this.isIntermediateSum && (e += " highcharts-intermediate-sum"), e;
	}
	isValid() {
		return o(this.y) || this.isSum || !!this.isIntermediateSum;
	}
}, Xe = {
	dataLabels: { inside: !0 },
	lineWidth: 1,
	lineColor: "var(--highcharts-neutral-color-80)",
	dashStyle: "Dot",
	borderColor: "var(--highcharts-neutral-color-80)",
	states: { hover: { lineWidthPlus: 0 } }
}, { column: X, line: Ze } = T.seriesTypes;
function Z(e, t) {
	return Object.hasOwnProperty.call(e, t);
}
var Q = class extends X {
	generatePoints() {
		X.prototype.generatePoints.apply(this);
		let e = this.getColumn("y", !0);
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t], r = e[t];
			o(r) && (n.isIntermediateSum || n.isSum) && (n.y = l(r));
		}
	}
	processData(e) {
		let t = this, n = t.options, r = t.getColumn("y"), i = t.getColumn("isSum"), a = t.getColumn("isIntermediateSum"), o = r.length, s = n.threshold || 0, c, u, d, f, p;
		u = c = d = f = 0;
		for (let e = 0; e < o; e++) p = r[e], p === "sum" || i[e] ? r[e] = l(u) : p === "intermediateSum" || a[e] ? (r[e] = l(c), c = 0) : (u += p, c += p), d = Math.min(u, d), f = Math.max(u, f);
		super.processData.call(this, e), n.stacking || (t.dataMin = d + s, t.dataMax = f);
	}
	toYData(e) {
		return e.isSum ? "sum" : e.isIntermediateSum ? "intermediateSum" : e.y;
	}
	pointAttribs(e, t) {
		let n = this.options.upColor;
		n && e && !e.options.color && o(e.y) && (e.color = e.y > 0 ? n : void 0);
		let r = X.prototype.pointAttribs.call(this, e, t);
		return delete r.dashstyle, r;
	}
	getGraphPath() {
		return this.graph?.pathArray || [[
			"M",
			0,
			0
		]];
	}
	getCrispPath() {
		let e = this.points.filter((e) => o(e.y)), t = this.yAxis, n = e.length, r = this.graph?.strokeWidth() || 0, i = this.xAxis.reversed, s = this.yAxis.reversed, c = this.options.stacking, l = [];
		for (let u = 1; u < n; u++) {
			if (!(this.options.connectNulls || o(this.data[e[u].index - 1].y))) continue;
			let n = e[u].box, d = e[u - 1], f = d.y || 0, p = e[u - 1].box;
			if (!n || !p) continue;
			let m = t.waterfall?.stacks[this.stackKey], h = f > 0 ? -p.height : 0;
			if (m && p && n) {
				let e = m[u - 1], o;
				o = a(c ? t.translate(e.connectorThreshold || 0, !1, !0, !1, !0) + (s ? h : 0) : p.y + (d.minPointLengthOffset || 0), r), l.push([
					"M",
					(p.x || 0) + (i ? 0 : p.width || 0),
					o
				], [
					"L",
					(n.x || 0) + (i && n.width || 0),
					o
				]);
			}
			if (p && l.length && (!c && f < 0 && !s || f > 0 && s)) {
				let e = l[l.length - 2];
				e && typeof e[2] == "number" && (e[2] += p.height || 0);
				let t = l[l.length - 1];
				t && typeof t[2] == "number" && (t[2] += p.height || 0);
			}
		}
		return l;
	}
	drawGraph() {
		Ze.prototype.drawGraph.call(this), this.graph?.animate({ d: this.getCrispPath() });
	}
	setStackedPoints(e) {
		let t = this, n = t.options, r = e.waterfall?.stacks, i = n.threshold || 0, a = t.stackKey, o = t.getColumn("x"), c = t.getColumn("y"), l = o.length, u = i, d = u, f, p = 0, m = 0, h = 0, g, _, v, y, b, x, S, C, w = (e, t, n, r) => {
			if (f) {
				if (!g) f.stackState[0] = e, g = f.stackState.length;
				else for (; n < g; n++) f.stackState[n] += r;
				f.stackState.push(f.stackState[g - 1] + t);
			}
		};
		if (e.stacking && r && t.reserveSpace()) {
			C = r.changed, S = r.alreadyChanged, S && S.indexOf(a) < 0 && (C = !0), r[a] || (r[a] = {});
			let e = r[a];
			if (e) for (let t = 0; t < l; t++) x = o[t], (!e[x] || C) && (e[x] = {
				negTotal: 0,
				posTotal: 0,
				stackTotal: 0,
				threshold: 0,
				stateIndex: 0,
				stackState: [],
				label: C && e[x] ? e[x].label : void 0
			}), f = e[x], b = c[t], b >= 0 ? f.posTotal += b : f.negTotal += b, y = n.data?.[t], _ = f.absolutePos = f.posTotal, v = f.absoluteNeg = f.negTotal, f.stackTotal = _ + v, g = f.stackState.length, s(y, !0) && y.isIntermediateSum ? (w(h, m, 0, h), h = m, m = i, u ^= d, d ^= u, u ^= d) : s(y, !0) && y.isSum ? (w(i, p, g, 0), u = i) : (w(u, b, 0, p), y && (p += b, m += b)), f.stateIndex++, f.threshold = u, u += f.stackTotal;
			r.changed = !1, r.alreadyChanged ||= [], r.alreadyChanged.push(a);
		}
	}
	getExtremes() {
		let e = this.options.stacking, n = this.yAxis.waterfall?.stacks, r, i;
		return e && n ? (r = this.stackedYNeg = [], i = this.stackedYPos = [], e === "overlap" ? t(n[this.stackKey], function(e) {
			r.push(c(e.stackState)), i.push(f(e.stackState));
		}) : t(n[this.stackKey], function(e) {
			r.push(e.negTotal + e.threshold), i.push(e.posTotal + e.threshold);
		}), {
			dataMin: c(r),
			dataMax: f(i)
		}) : {
			dataMin: this.dataMin,
			dataMax: this.dataMax
		};
	}
};
Q.defaultOptions = n(X.defaultOptions, Xe), Q.compose = Je.compose, h(Q.prototype, {
	pointValKey: "y",
	showLine: !0,
	pointClass: Ye
}), p(Q, "afterColumnTranslate", function() {
	let e = this, { options: t, points: r, yAxis: i } = e, s = t.minPointLength ?? 5, c = s / 2, l = t.threshold || 0, u = t.stacking, d = i.waterfall?.stacks[e.stackKey], f = e.getColumn("y", !0), p = l, m = l, g, _, v;
	for (let t = 0; t < r.length; t++) {
		let y = r[t], b = f[t], x = y.shapeArgs, S = h({
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, x || {});
		y.box = S;
		let C = [0, b], w = y.y || 0;
		if (u) {
			if (d) {
				let n = d[t];
				u === "overlap" ? (_ = n.stackState[n.stateIndex--], g = w >= 0 ? _ : _ - w, Z(n, "absolutePos") && delete n.absolutePos, Z(n, "absoluteNeg") && delete n.absoluteNeg) : (w >= 0 ? (_ = n.threshold + n.posTotal, n.posTotal -= w, g = _) : (_ = n.threshold + n.negTotal, n.negTotal -= w, g = _ - w), n.posTotal || o(n.absolutePos) && Z(n, "absolutePos") && (n.posTotal = n.absolutePos, delete n.absolutePos), n.negTotal || o(n.absoluteNeg) && Z(n, "absoluteNeg") && (n.negTotal = n.absoluteNeg, delete n.absoluteNeg)), y.isSum || (n.connectorThreshold = n.threshold + n.stackTotal), v = g - Math.abs(w), i.reversed && ([g, v] = [v, g]), y.below = g <= l, S.y = i.translate(g, !1, !0, !1, !0), S.height = i.translate(v, !1, !0, !1, !0) - S.y;
				let r = i.waterfall?.dummyStackItem;
				r && (r.x = t, r.label = d[t].label, r.setOffset(e.pointXOffset || 0, e.barW || 0, e.stackedYNeg[t], e.stackedYPos[t], void 0, this.xAxis));
			}
		} else g = Math.max(m, m + w) + C[0], S.y = i.translate(g, !1, !0, !1, !0), y.isSum ? (S.y = i.translate(C[1], !1, !0, !1, !0), S.height = Math.min(i.translate(C[0], !1, !0, !1, !0), i.len) - S.y, y.below = C[1] <= l) : y.isIntermediateSum ? (w >= 0 ? (g = C[1] + p, v = p) : (g = p, v = C[1] + p), i.reversed && ([g, v] = [v, g]), S.y = i.translate(g, !1, !0, !1, !0), S.height = Math.abs(S.y - Math.min(i.translate(v, !1, !0, !1, !0), i.len)), p += C[1], y.below = g <= l) : (S.height = b > 0 ? i.translate(m, !1, !0, !1, !0) - S.y : i.translate(m + b, !1, !0, !1, !0) - i.translate(m, !1, !0, !1, !0), m += b, y.below = m < l);
		S.height < 0 && (S.y += S.height, S.height *= -1), y.plotY = S.y, y.yBottom = S.y + S.height, S.height <= s && !y.isNull ? (S.height = s, S.y -= c, y.yBottom = S.y + S.height, y.plotY = S.y, y.minPointLengthOffset = w < 0 ? -c : c) : (y.isNull && (S.width = 0), y.minPointLengthOffset = 0);
		let T = y.plotY + (y.negative ? S.height : 0);
		y.below && (y.plotY += S.height), y.tooltipPos && (e.chart.inverted ? y.tooltipPos[0] = i.len - T : y.tooltipPos[1] = T), y.isInside = this.isPointInside(y);
		let E = a(y.yBottom, e.borderWidth);
		S.y = a(S.y, e.borderWidth), S.height = E - S.y, n(!0, y.shapeArgs, S);
	}
}, { order: 2 }), T.registerSeriesType("waterfall", Q);
//#endregion
//#region src/highchartsMoreCustom.ts
var $ = g;
$.RadialAxis = Se, G.compose($.Chart, $.Pointer), Ge.compose($.Axis, $.Chart, $.Pointer, $.Series, $.Tick, $.Point, T.seriesTypes.areasplinerange, T.seriesTypes.column, T.seriesTypes.line, T.seriesTypes.spline), Q.compose($.Axis, $.Chart);
//#endregion
