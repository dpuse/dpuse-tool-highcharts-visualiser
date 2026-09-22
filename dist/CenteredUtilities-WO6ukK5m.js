import { $ as e, E as t, G as n, H as r, J as i, K as a, M as o, N as s, O as c, P as l, R as u, S as d, T as f, U as p, _ as m, at as h, b as g, c as _, d as v, et as y, g as b, h as x, i as S, k as C, lt as w, p as T, s as E, t as D, tt as O, u as k, w as A, y as j, z as M } from "./AnimationUtilities-eb22eIjK.js";
import { n as ee, r as N, t as P } from "./SeriesRegistry-CDI1sm9L.js";
import { t as te } from "./SVGElement-z7ENyQ6Y.js";
//#region node_modules/highcharts/es-modules/Core/Foundation.js
var F;
(function(e) {
	function t(e, t) {
		e.eventOptions = e.eventOptions || {}, i(t.events, function(t, n) {
			e.eventOptions[n] !== t && (e.eventOptions[n] && (O(e, n, e.eventOptions[n]), delete e.eventOptions[n]), r(t) && (e.eventOptions[n] = t, x(e, n, t, { order: 0 })));
		});
	}
	e.registerEventOptions = t;
})(F ||= {});
var I = F;
//#endregion
//#region node_modules/highcharts/es-modules/Data/ColumnUtils.js
function ne(e, t, n) {
	return Array.isArray(e) ? (e.length = t, e) : e[n ? "subarray" : "slice"](0, t);
}
function re(e, t, n, r, i = []) {
	if (Array.isArray(e)) return Array.isArray(i) || (i = Array.from(i)), {
		removed: e.splice(t, n, ...i),
		array: e
	};
	let a = Object.getPrototypeOf(e).constructor, o = e[r ? "subarray" : "slice"](t, t + n), s = new a(e.length - n + i.length);
	return s.set(e.subarray(0, t), 0), s.set(i, t), s.set(e.subarray(t + n), t + i.length), {
		removed: o,
		array: s
	};
}
function L(e, t) {
	switch (typeof e) {
		case "boolean": return +!!e;
		case "number": return isNaN(e) && !t ? null : e;
		default: return e = parseFloat(`${e ?? ""}`), isNaN(e) && !t ? null : e;
	}
}
//#endregion
//#region node_modules/highcharts/es-modules/Data/DataTableCore.js
var { setLength: R, splice: z } = {
	convertToNumber: L,
	setLength: ne,
	splice: re
}, B = class {
	constructor(e = {}) {
		this.isDataTable = !0;
		let t = this.isPollutingKey(e.id) ? void 0 : e.id;
		this.autoId = !t, this.columns = {}, this.id = t || T(), this.rowCount = 0, this.versionTag = T();
		let n = 0;
		i(e.columns || {}, (e, t) => {
			t !== "__proto__" && t !== "constructor" && (this.columns[t] = e.slice(), n = Math.max(n, e.length));
		}), this.applyRowCount(n);
	}
	isPollutingKey(e) {
		return e === "__proto__" || e === "constructor";
	}
	applyRowCount(e) {
		this.rowCount = e, i(this.columns, (t, n) => {
			t.length !== e && (this.columns[n] = R(t, e));
		});
	}
	deleteRows(e, t = 1) {
		if (t > 0 && e < this.rowCount) {
			let n = 0;
			i(this.columns, (r, i) => {
				this.columns[i] = z(r, e, t).array, n = r.length;
			}), this.rowCount = n;
		}
		o(this, "afterDeleteRows", {
			rowIndex: e,
			rowCount: t
		}), this.versionTag = T();
	}
	getColumn(e, t) {
		return this.columns[e];
	}
	getColumns(e, t) {
		return (e || Object.keys(this.columns)).reduce((e, t) => (e[t] = this.columns[t], e), {});
	}
	getRowObject(e, t) {
		let n = {}, r = this.columns;
		t ??= Object.keys(this.columns);
		for (let i of t) n[i] = r[i]?.[e];
		return n;
	}
	setColumn(e, t = [], n = 0, r) {
		this.setColumns({ [e]: t }, n, r);
	}
	setColumns(e, t, n) {
		let r = this.rowCount;
		i(e, (e, t) => {
			t !== "__proto__" && t !== "constructor" && (this.columns[t] = e.slice(), r = e.length);
		}), this.applyRowCount(r), n?.silent || (o(this, "afterSetColumns"), this.versionTag = T());
	}
	setRow(e, t = this.rowCount, n, r) {
		let { columns: a } = this, s = n ? this.rowCount + 1 : t + 1, c = Object.keys(e);
		if (r?.addColumns !== !1) for (let e = 0, t = c.length; e < t; e++) {
			let t = c[e];
			!this.isPollutingKey(t) && !Object.hasOwnProperty.call(a, t) && (a[t] = Array(this.rowCount));
		}
		i(a, (r, i) => {
			r && (n ? r = z(r, t, 0, !0, [e[i]]).array : r[t] = i in e ? e[i] : r[t], a[i] = r);
		}), this.applyRowCount(Math.max(s, this.rowCount)), r?.silent || (o(this, "afterSetRows", { rowIndex: t }), this.versionTag = T());
	}
	getModified() {
		return this.modified || this;
	}
}, V;
(function(e) {
	function t(e, t) {
		n.call(this, e, t, !0);
	}
	e.areaMarker = t;
	function n(e, t, n) {
		let r = this.legendItem = this.legendItem || {}, { chart: i, options: o } = this, { baseline: s = 0, symbolWidth: c, symbolHeight: l } = e, u = this.symbol || "circle", d = l / 2, f = i.renderer, p = r.group, m = s - Math.round((e.fontMetrics?.b || l) * (n ? .4 : .3)), h = {}, g, _ = o.marker, v = 0;
		if (i.styledMode || (h["stroke-width"] = Math.min(o.lineWidth || 0, 24), o.dashStyle ? h.dashstyle = o.dashStyle : o.linecap !== "square" && (h["stroke-linecap"] = "round")), r.line = f.path().addClass("highcharts-graph").attr(h).add(p), n && (r.area = f.path().addClass("highcharts-area").add(p)), h["stroke-linecap"] && (v = Math.min(r.line.strokeWidth(), c) / 2), c) {
			let e = [[
				"M",
				v,
				m
			], [
				"L",
				c - v,
				m
			]];
			r.line.attr({ d: e }), r.area?.attr({ d: [
				...e,
				[
					"L",
					c - v,
					s
				],
				[
					"L",
					v,
					s
				]
			] });
		}
		if (_ && _.enabled !== !1 && c) {
			let e = Math.min(_.radius ?? d, d);
			u.indexOf("url") === 0 && (_ = a(_, {
				width: l,
				height: l
			}), e = 0), r.symbol = g = f.symbol(u, c / 2 - e, m - e, 2 * e, 2 * e, C({ context: "legend" }, _)).addClass("highcharts-point").add(p), g.isMarker = !0;
		}
	}
	e.lineMarker = n;
})(V ||= {});
var H = V, ie = {
	lineWidth: 2,
	allowPointSelect: !1,
	crisp: !0,
	showCheckbox: !1,
	animation: { duration: 1e3 },
	enableMouseTracking: !0,
	events: {},
	marker: {
		enabledThreshold: 2,
		lineColor: "var(--highcharts-background-color)",
		lineWidth: 0,
		radius: 4,
		states: {
			normal: { animation: !0 },
			hover: {
				animation: { duration: 150 },
				enabled: !0,
				radiusPlus: 2,
				lineWidthPlus: 1
			},
			select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)",
				lineWidth: 2
			}
		}
	},
	point: { events: {} },
	dataLabels: {
		animation: {},
		align: "center",
		borderWidth: 0,
		defer: !0,
		distance: 4,
		formatter: function() {
			let { numberFormatter: e } = this.series.chart;
			return typeof this.y == "number" ? e(this.y, -1) : "";
		},
		padding: [1, 3],
		style: {
			fontSize: "0.7em",
			fontWeight: "bold",
			color: "contrast",
			textOutline: "1px contrast"
		},
		verticalAlign: "bottom",
		x: 0,
		y: 0
	},
	cropThreshold: 300,
	opacity: 1,
	pointRange: 0,
	softThreshold: !0,
	states: {
		normal: { animation: !0 },
		hover: {
			animation: { duration: 150 },
			lineWidthPlus: 1,
			marker: {},
			halo: {
				size: 10,
				opacity: .25
			}
		},
		select: { animation: { duration: 0 } },
		inactive: {
			animation: { duration: 150 },
			opacity: .2
		}
	},
	stickyTracking: !0,
	turboThreshold: 1e3,
	findNearestPointBy: "x"
}, { defaultOptions: U } = _, { registerEventOptions: W } = I, { svg: G, win: K } = w, { seriesTypes: q } = P, { format: J } = N, Y = class r {
	constructor() {
		this.zoneAxis = "y";
	}
	init(e, t) {
		o(this, "init", { options: t });
		let n = this, r = e.series;
		this.eventsToUnbind = [], this.condemnedPoints ||= [], n.chart = e, n.options = n.setOptions(t);
		let i = n.options, a = i.visible !== !1;
		this.dataTable ??= M(i.dataTable) ? new B() : i.dataTable?.isDataTable ? i.dataTable : new B(i.dataTable), n.linkedSeries = [], n.bindAxes(), C(n, {
			name: i.name,
			state: "",
			visible: a,
			selected: i.selected === !0
		}), W(this, i), (i.events?.click || i.point?.events?.click || i.allowPointSelect) && (e.runTrackerClick = !0), n.getColor(), n.getSymbol(), n.isCartesian && (e.hasCartesianSeries = !0);
		let s;
		r.length && (s = r[r.length - 1]), n._i = (s?._i ?? -1) + 1, n.opacity = n.options.opacity, e.orderItems("series", v(this, r)), !n.points && !n.data && n.setData(i.data, !1), o(this, "afterInit");
	}
	is(e) {
		return q[e] && this instanceof q[e];
	}
	bindAxes() {
		let e = this, t = e.options, n = e.chart, r;
		o(this, "bindAxes", null, function() {
			(e.axisTypes || []).forEach(function(i) {
				(n[i] || []).forEach(function(n) {
					r = n.options, ((t[i] ?? 0) === n.index || t[i] !== void 0 && t[i] === r.id) && (v(e, n.series), e[i] = n, n.isDirty = !0);
				}), !e[i] && e.optionalAxis !== i && k(18, !0, n);
			});
		}), o(this, "afterBindAxes");
	}
	hasData() {
		return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
	}
	hasMarkerChanged(e, t) {
		let n = e.marker, r = t.marker;
		return n && r && (r.enabled && !n.enabled || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width);
	}
	autoIncrement(e) {
		let t = this.options, { pointIntervalUnit: n, relativeXValue: r } = this.options, i = this.chart.time, a = this.xIncrement ?? i.parse(t.pointStart) ?? 0, o;
		if (this.pointInterval = o = this.pointInterval ?? t.pointInterval ?? 1, r && p(e) && (o *= e), n) {
			let e = i.toParts(a);
			n === "day" ? e[2] += o : n === "month" ? e[1] += o : n === "year" && (e[0] += o), o = i.makeTime.apply(i, e) - a;
		}
		return r && p(e) ? a + o : (this.xIncrement = a + o, a);
	}
	setOptions(e) {
		let t = this.chart, n = t.options.plotOptions, r = t.userOptions || {}, i = a(e), s = t.styledMode, c = {
			plotOptions: n,
			userOptions: i
		}, l;
		o(this, "setOptions", c);
		let u = c.plotOptions[this.type], d = r.plotOptions || {}, f = d.series || {}, p = U.plotOptions[this.type] || {}, m = d[this.type] || {};
		u.dataLabels = this.mergeArrays(p.dataLabels, u.dataLabels), this.userOptions = c.userOptions;
		let h = a(u, n.series, m, i), { negativeColor: g, negativeFillColor: _, zoneAxis: v = "y", zones: y } = h, b = (y || []).map((e) => ({ ...e }));
		return this.tooltipOptions = a(U.tooltip, U.plotOptions.series?.tooltip, p?.tooltip, t.userOptions.tooltip, d.series?.tooltip, m.tooltip, i.tooltip), this.stickyTracking = i.stickyTracking ?? m.stickyTracking ?? f.stickyTracking ?? (this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : h.stickyTracking), u.marker === null && delete h.marker, this.zones ||= b, this.zoneAxis = v, (g || _) && !y && (l = {
			value: h[v + "Threshold"] || h.threshold || 0,
			className: "highcharts-negative"
		}, s || (typeof g != "boolean" && (l.color = g), l.fillColor = _), b.push(l)), b.length && A(b[b.length - 1].value) && b.push(s ? {} : {
			color: this.color,
			fillColor: this.fillColor
		}), o(this, "afterSetOptions", { options: h }), h;
	}
	getName() {
		let { chart: e, options: t } = this, { dataMapping: r, name: i } = t, a = r?.y || r?.value, o = n(a) ? a : a?.column;
		return i ?? (n(o) ? o : J(e.options.lang.seriesName, this, e));
	}
	getCyclic(e, t, n) {
		let r = this.chart, i = `${e}Index`, a = `${e}Counter`, o = n?.length || r.options.chart.colorCount, s, c;
		t || (c = e === "color" ? this.options.colorIndex ?? this[i] : this[i], A(c) ? s = c : (r.series.length || (r[a] = 0), s = r[a] % o, r[a] += 1), n && (t = n[s])), s !== void 0 && (this[i] = s), this[e] = t;
	}
	getColor() {
		let e = this.chart;
		e.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "var(--highcharts-neutral-color-20)" : this.getCyclic("color", this.options.color || U.plotOptions[this.type]?.color, e.options.colors);
	}
	getPointsCollection() {
		return (this.hasGroupedData ? this.points : this.data) || [];
	}
	getSymbol() {
		let e = this.options.marker;
		this.getCyclic("symbol", e?.symbol, this.chart.options.symbols);
	}
	getColumn(e, t, n) {
		let r = t ? this.dataTable.getModified() : this.dataTable, i = r.rowCount, a = this.dataTable !== r, o = r.getColumn(e, !0);
		if (e === "x" && !a) {
			if (this.xColumn) return this.xColumn;
			let e = r.getColumn("name", !0), t = this.options, n = (e) => {
				if (this.xColumnIsNumbers !== void 0) return this.xColumnIsNumbers;
				for (let t of e) if (typeof t != "number") return this.xColumnIsNumbers = !1;
				return this.xColumnIsNumbers = !0;
			};
			if (this.xIncrement = null, !o || this.xAxis?.hasNames || t.relativeXValue || o.length < (t.turboThreshold || Infinity) && !this.boosted && !n(o)) {
				let t = [];
				for (let n = 0; n < i; n++) {
					let r = o?.[n];
					A(r) || (this.xIncrement ??= t[t.length - 1] ?? null), t.push(this.getX(r, e?.[n]));
				}
				return this.xColumn = t;
			}
		}
		return o || Array(n ? i : 0);
	}
	getX(e, t) {
		return this.xAxis?.hasNames && this.dataTable.getColumn("name", !0) && A(t) ? this.xAxis.nameToX({
			name: t,
			series: this
		}, e) : e === void 0 || p(e) && this.options.relativeXValue ? this.autoIncrement(e) : (typeof e == "string" && (e = this.chart.time.parse(e), p(e)), e);
	}
	matchPoints(e, t, n, r) {
		let { dataTable: i, options: a, requireSorting: o } = this, s = a.dataSorting, c = this.data, l = [], u = [], d = i.rowCount === c.length, f, p, m, h = 0, g = !0;
		this.xIncrement = null, delete this.xColumn;
		let _ = i.getColumn("x"), v = i.getColumn("id"), y = s?.matchByName ? i.getColumn("name") : void 0, x = i.getColumn("index");
		for (p = 0; p < i.rowCount; p++) {
			let a = _?.[p], m = v?.[p], g = y?.[p], b = x?.[p], [S, C] = m && t ? [m, t] : g && n ? [g, n] : A(b) && r ? [b, r] : A(a) && e ? [a, e] : [], w = -1;
			if (C) {
				if (w = C.indexOf(S, h), w === -1) {
					let t = _?.[p], n = e?.length ?? i.rowCount;
					for (; n && e && typeof t == "number" && e[n - 1] > t;) n--;
					l.push({
						newIndex: n,
						oldIndex: p
					});
				} else c[w] && (u.push({
					newIndex: w,
					oldIndex: p
				}), c[w].touched = !0, o && (h = w + 1));
				(!d || p !== w || s?.enabled || this.hasDerivedData) && (f = !0);
			} else l.push({
				newIndex: p,
				oldIndex: p
			});
		}
		if (f) {
			for (u.forEach((e) => {
				c[e.newIndex].applyOptions(i.getRowObject(e.oldIndex));
			}), l.sort((e, t) => t.newIndex - e.newIndex), l.forEach((e) => {
				c.splice(e.newIndex, 0, void 0);
			}), p = c.length; p--;) m = c[p], m && !m.touched && (m.destroy(), c.splice(p, 1));
			this.isDirtyData = this.isDirty = !0;
		} else if (d && !s?.enabled) {
			for (p = 0; p < i.rowCount; p++) if (!c[p].destroyed && !c[p].condemned) {
				let e = i.getRowObject(p);
				e && (Object.keys(e).forEach((t) => {
					e[t] === void 0 && delete e[t];
				}), Object.keys(e).length && c[p].update(e, !1, void 0, !1));
			}
		} else g = !1;
		if (c.forEach((e) => {
			e && (e.touched = !1);
		}), !g) return !1;
		let S = this.getColumn("x");
		return this.xIncrement === null && S.length && (this.xIncrement = b(S), this.autoIncrement()), !0;
	}
	getDataColumnKeys() {
		return this.dataColumnKeys || ["x", ...this.pointArrayMap || ["y"]];
	}
	setData(e, t = !0, r, i) {
		let o = this, s = this.dataTable, c = o.options, l = o.points, u = l?.length || 0, d = s.getColumn("x"), f = s.getColumn("id"), p = c.dataSorting?.matchByName && l?.map((e) => e.name) || s.getColumn("name"), m = s.getColumn("index"), h = o.chart, g = o.xAxis, _, v, y;
		if (h.options.chart.allowMutatingData || (c.data && delete o.options.data, o.userOptions.data && delete o.userOptions.data, y = a(!0, e)), e = y || e, o.xIncrement = null, delete o.xColumn, delete o.xColumnIsNumbers, s !== c.dataTable && delete s.columns.x, o.colorCounter = 0, M(e) ? this.setDataFromArray(e) : this.setDataFromTable(e), i !== !1 && u && !o.cropped && !o.hasGroupedData && o.visible && !o.boosted && (_ = this.matchPoints(d, f, p, m)), !_) {
			for (n(this.getColumn("y")[0]) && k(14, !0, h), o.data = [], v = u; v--;) l[v]?.destroy();
			g && (g.minRange = g.userMinRange), o.isDirty = h.isDirtyBox = !0, o.isDirtyData = !!l, r = !1;
		}
		M(e) && (o.options.data = o.userOptions.data = e), c.legendType === "point" && (this.processData(), this.generatePoints()), t && h.redraw(r);
	}
	setDataFromArray(e) {
		let t = e.length, { keys: n, turboThreshold: r } = this.options, { pointValKey: i = "y", pointArrayMap: a = [] } = this, o = a.length, s = this.dataTable, c = this.getDataColumnKeys(), l = r && t > r, u = 0, d = 1;
		if (l) {
			let r = this.getFirstValidPoint(e), f = this.getFirstValidPoint(e, t - 1, -1), m = (e) => !!(M(e) && (n || p(e[0])));
			if (p(r) && p(f)) s.setColumn(i, e);
			else if (m(r) && m(f)) {
				if (o) {
					let t = r.length === o, n = Array(r.length).fill(0).map(() => []);
					for (let t of e) for (let e = 0; e <= o; e++) n[e]?.push(t[e]);
					s.setColumns((t ? a : c).reduce((e, t, r) => (e[t] = n[r], e), {}));
				} else {
					n && (u = n.indexOf("x"), d = n.indexOf("y"), u = u >= 0 ? u : 0, d = d >= 0 ? d : 1), r.length === 1 && (d = 0);
					let t = [], a = [];
					if (u === d) {
						for (let t of e) a.push(t[d]);
						s.setColumn(i, a);
					} else {
						for (let n of e) t.push(n[u]), a.push(n[d]);
						s.setColumns({
							x: t,
							[i]: a
						});
					}
				}
			} else l = !1;
		}
		if (!l) {
			let n = {};
			for (let r = 0; r < t; r++) {
				let i = this.pointClass.prototype.optionsToObject.call({ series: this }, e[r]);
				for (let e of Object.keys(i)) e !== "__proto__" && e !== "constructor" && (Object.hasOwnProperty.call(n, e) || (n[e] = Array(t)), n[e][r] = i[e]);
			}
			t ? s.setColumns(n) : s.deleteRows(0, s.rowCount);
		}
	}
	setDataFromTable(t) {
		let { chart: r, options: i, dataTable: a } = this, o = r.getDataTable(i), s = t ? [t] : o.length ? o : r.dataTable, c = this.getDataColumnKeys(), l = i.dataMapping, u = c.slice();
		l && (Object.keys(l).forEach((t) => {
			e(u, t);
		}), this.dataColumnKeys = u), s.forEach((e, t) => {
			let r = u.reduce((r, i) => {
				let a = l?.[i], o = e.columns || {}, s = e.id, c = n(a) ? t === 0 && o[a] : ((a?.dataTable || 0) === t || s && a?.dataTable === s) && (p(a?.column) ? Object.values(o)[a.column] : o[a?.column || i]);
				return c && (r[i] = c), r;
			}, {});
			(l || e) && a.setColumns(r), e.isDataTable && this.bindDataTableEvents(e, r);
		});
	}
	bindDataTableEvents(e, t) {
		if (this.hasBoundDataTableEvents) return;
		let { chart: n, eventsToUnbind: r } = this, i = () => {
			clearTimeout(n.redrawTimeout), n.redrawTimeout = setTimeout(() => n.renderer && n.redraw(), 0);
		};
		r.push(x(e, "afterSetRows", (e) => {
			let n = e.rowIndex;
			if (p(n)) {
				let e = B.prototype.getRowObject.call({ columns: t }, n), r = this.data[n];
				e && (this.currentDataGrouping ? this.setData() : (r ? r.update(e, !1) : this.addPoint(e, !1), i()));
			}
		})), r.push(x(e, "afterDeleteRows", (e) => {
			let { rowCount: t, rowIndex: n } = e;
			if (p(n)) {
				for (let e = n + t - 1; e >= n; e--) this.removePoint(e, !1);
				i();
			}
		})), r.push(x(e, "afterSetColumns", (e) => {
			this.setData(e.target);
		})), this.hasBoundDataTableEvents = !0;
	}
	getProcessedData(e) {
		let t = this, { dataTable: n, isCartesian: r, options: i, xAxis: a } = t, o = i.cropThreshold, s = e || t.getExtremesFromAll, c = a?.logarithmic, u = n.rowCount, d, f, p = 0, m, h, g, _ = t.getColumn("x"), v = n, y = !1;
		a && (m = a.getExtremes(), h = m.min, g = m.max, y = !(!a.categories || a.names.length), r && t.sorted && !s && (!o || u > o || t.forceCrop) && (_[u - 1] < h || _[0] > g ? v = new B() : t.getColumn(t.pointValKey || "y").length && (_[0] < h || _[u - 1] > g) && (d = this.cropData(n, h, g), v = d.modified, p = d.start, f = !0))), v !== n && (_ = v.getColumn("x", !0) || []);
		let b = l([c ? _.map(c.log2lin) : _], () => t.requireSorting && !y && k(15, !1, t.chart));
		return {
			modified: v,
			cropped: f,
			cropStart: p,
			closestPointRange: b
		};
	}
	processData(e) {
		let t = this, n = t.xAxis, r = t.dataTable;
		if (t.isCartesian && !t.isDirty && !n.isDirty && !t.yAxis.isDirty && !e) return !1;
		let i = t.getProcessedData();
		r.modified = i.modified, t.cropped = i.cropped, t.cropStart = i.cropStart, t.closestPointRange = t.basePointRange = i.closestPointRange, o(t, "afterProcessData");
	}
	cropData(e, t, n) {
		let r = e === this.dataTable ? this.getColumn("x") : e.getColumn("x", !0), i = r.length, a, o, s = 0, c = i;
		for (a = 0; a < i; a++) if (r[a] >= t) {
			s = Math.max(0, a - 1);
			break;
		}
		for (o = a; o < i; o++) if (r[o] > n) {
			c = o + 1;
			break;
		}
		let l = Object.keys(e.columns).reduce((t, n) => (t[n] = (e.getColumn(n, !0) || []).slice(s, c), t), {});
		return l.x = r.slice(s, c), {
			modified: new B({ columns: l }),
			start: s,
			end: c
		};
	}
	generatePoints() {
		let e = this, t = e.options, n = e.hasProcessedDataTable ? void 0 : t.data, r = e.dataTable.getModified(), i = e.getColumn("x", !0), a = e.pointClass, s = r.rowCount, c = e.cropStart || 0, l = e.hasGroupedData, u = t.keys, d = [], f = t.dataGrouping?.groupAll ? c : 0, p = this.getDataColumnKeys(), m, h, g, _, v = e.data, y;
		if (!v && !l) {
			let t = [];
			t.length = n?.length || 0, v = e.data = t;
		}
		for (u && l && (e.options.keys = !1), _ = 0; _ < s; _++) h = c + _, l ? (g = new a(e, r.getRowObject(_, p)), g.dataGroup = e.groupMap?.[f + _], g.dataGroup?.options && (g.options = g.dataGroup.options, C(g, g.dataGroup.options), delete g.dataLabels, g.key = g.name ?? g.category)) : (g = v[h], y = n ? n[h] : r.getRowObject(_), !g && y !== void 0 ? v[h] = g = new a(e, y, i[_]) : g && (g.category = e.xAxis?.categories?.[g.x] ?? g.x, g.key = g.name ?? g.category)), g && (g.index = l ? f + _ : h, d[_] = g);
		if (e.options.keys = u, v && (s !== (m = v.length) || l)) for (_ = 0; _ < m; _++) _ === c && !l && (_ += s), v[_] && (v[_].destroyElements(), v[_].plotX = void 0);
		e.data = v, e.points = d, o(this, "afterGeneratePoints");
	}
	getXExtremes(e) {
		return {
			min: m(e),
			max: b(e)
		};
	}
	getExtremes(e, t) {
		let { options: n, xAxis: r, yAxis: i } = this, a = t || this.getExtremesFromAll || n.getExtremesFromAll, s = a && this.cropped ? this.dataTable : this.dataTable.getModified(), c = s.rowCount, l = e || this.stackedYData, u = l ? [l] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((e) => s.getColumn(e, !0) || []) || [], d = this.getColumn("x", !0), f = [], h = this.requireSorting && !this.is("column") ? 1 : 0, g = n.cumulative && n.cumulativeStart && h && !a, _ = i ? i.positiveValuesOnly : !1, v = a || this.cropped || !r, y, x, S, C = 0, w = 0;
		for (r && (y = r.getExtremes(), C = y.min, w = y.max), S = 0; S < c; S++) if (x = d[S], (v || (d[S + h] || x) >= C && (d[S - h] || x) <= w) && (!g || x >= C)) for (let e of u) {
			let t = e[S];
			p(t) && (t > 0 || !_) && f.push(t);
		}
		let T = {
			activeYData: f,
			dataMin: m(f),
			dataMax: b(f)
		};
		return o(this, "afterGetExtremes", { dataExtremes: T }), T;
	}
	applyExtremes() {
		let e = this.getExtremes();
		return this.dataMin = e.dataMin, this.dataMax = e.dataMax, e;
	}
	getFirstValidPoint(e, t = 0, n = 1) {
		let r = e.length, i = t;
		for (; i >= 0 && i < r;) {
			if (A(e[i])) return e[i];
			i += n;
		}
	}
	translate() {
		this.generatePoints();
		let e = this, { hasRendered: t, options: n, xAxis: r, yAxis: i } = e, { stacking: a, threshold: s } = n, { polar: c } = e.chart, l = e.points.concat(e.condemnedPoints), u = l.length, d = e.pointPlacementToXValue(), f = !!d, m = n.startFromThreshold ? s : 0, h = n?.nullInteraction && i.len, _, v, y, b, x = Number.MAX_VALUE;
		function S(e) {
			return j(e, -1e9, 1e9);
		}
		let C = (e, t) => {
			let n = r.translate(e, !1, !1, t, !0, d);
			return p(n) ? g(S(n)) : void 0;
		}, w = (e, t, n) => {
			if (p(e) && t.plotX !== void 0) {
				let t = i.translate(e, !1, !0, n, !0);
				return p(t) ? S(t) : void 0;
			}
			if (!p(e) && h) return h;
		};
		for (_ = 0; _ < u; _++) {
			let n = l[_], o = n.x, u, h, T = n.y, E = n.low, D = a && i.stacking?.stacks[(e.negStacks && T < (m ? 0 : s) ? "-" : "") + e.stackKey];
			n.plotX = v = C(o), a && e.visible && D && D[o] && (b = e.getStackIndicator(b, o, e.index), !n.isNull && b.key && (u = D[o], h = u.points[b.key]), u && M(h) && (E = h[0], T = h[1], E === m && b.key === D[o].base && (E = p(s) ? s : i.min), i.positiveValuesOnly && A(E) && E <= 0 && (E = void 0), n.total = n.stackTotal = u.total ?? void 0, n.percentage = A(n.y) && u.total ? n.y / u.total * 100 : void 0, n.stackY = T, e.irregularWidths || u.setOffset(e.pointXOffset || 0, e.barW || 0, void 0, void 0, void 0, e.xAxis))), n.yBottom = A(E) ? S(i.translate(E, !1, !0, !1, !0)) : void 0, e.dataModify && (T = e.dataModify.modifyValue(T, _)), n.plotY = w(T, n), n.origin = t && !n.graphic && !c ? {
				x: C(o, !0),
				y: w(T, n, !0)
			} : void 0, n.isInside = this.isPointInside(n), n.clientX = f ? g(r.translate(o, !1, !1, !1, !0, d)) : v, n.negative = (n.y || 0) < (s || 0), !n.isNull && n.visible !== !1 && p(v) && (p(y) && (x = Math.min(x, Math.abs(v - y))), y = v), n.zone = this.zones.length ? n.getZone() : void 0;
		}
		e.closestPointRangePx = x, o(this, "afterTranslate");
	}
	getValidPoints(e, t, n) {
		let r = this.chart;
		return (e || this.points || []).filter(function(e) {
			let { plotX: i, plotY: a } = e;
			return !n && (e.isNull || !p(a)) || t && !r.isInsidePlot(i, a, { inverted: r.inverted }) ? !1 : e.visible !== !1;
		});
	}
	getSharedClipKey() {
		return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
	}
	setClip() {
		let { chart: e, group: t, markerGroup: n, options: r, plotClipGroup: i } = this, a = e.sharedClips, o = e.renderer, s = e.getClipBox(this), c = r.clip ?? !0, l = this.getSharedClipKey(), u = a[l];
		u ? u.animate(s) : a[l] = u = o.clipRect(s), t?.clip(c ? u : void 0), n?.clip(), i?.clip(c && this.yAxis?.clippable ? e.plotClipInner : void 0);
	}
	animate(e) {
		let { chart: t, group: n, markerGroup: r } = this, i = t.inverted, a = D(this.options.animation), o = [
			this.getSharedClipKey(),
			a.duration,
			a.easing,
			a.defer
		].join(","), s = t.sharedClips[o], c = t.sharedClips[o + "m"];
		if (e && n) {
			let e = t.getClipBox(this);
			if (s) s.attr("height", e.height);
			else {
				e.width = 0, i && (e.x = t.plotHeight), s = t.renderer.clipRect(e), t.sharedClips[o] = s;
				let n = {
					x: -99,
					y: -99,
					width: i ? t.plotWidth + 199 : 99,
					height: i ? 99 : t.plotHeight + 199
				};
				c = t.renderer.clipRect(n), t.sharedClips[o + "m"] = c;
			}
			n.clip(s), r?.clip(c);
		} else if (s && !s.hasClass("highcharts-animating")) {
			let e = t.getClipBox(this), n = a.step;
			(r?.element.childNodes.length || t.series.length > 1) && (a.step = function(e, t) {
				n && n.apply(t, arguments), t.prop === "width" && c?.element && c.attr(i ? "height" : "width", e + 99);
			}), s.addClass("highcharts-animating").animate(e, a);
		}
	}
	afterAnimate() {
		this.setClip(), i(this.chart.sharedClips, (e, t, n) => {
			e && !this.chart.container.querySelector(`[clip-path="url(#${e.id})"]`) && (e.destroy(), delete n[t]);
		}), this.finishedAnimating = !0, o(this, "afterAnimate");
	}
	drawPoints(e) {
		e ||= this.points.concat(this.condemnedPoints);
		let t = this, n = t.chart, r = n.styledMode, { colorAxis: i, options: a } = t, o = a.marker || {}, s = a.nullInteraction, c = t[t.specialGroup || "markerGroup"], l = t.xAxis, u = o.enabled ?? (!l || l.isRadial ? !0 : null) ?? (t.closestPointRangePx ?? -Infinity) >= (o.enabledThreshold ?? 2) * o.radius, d, f, p, m, h, g, _;
		if (o.enabled !== !1 || t._hasPointMarkers) for (d = 0; d < e.length; d++) {
			f = e[d], p = f.graphic, m = p ? "animate" : "attr", h = f.marker || {}, g = !!f.marker;
			let a = f.isNull;
			if ((u && !A(h.enabled) || h.enabled) && (!a || s) && f.visible !== !1) {
				let e = h.symbol ?? t.symbol ?? "rect";
				_ = t.markerAttribs(f, f.selected ? "select" : "");
				let a = f.isInside !== !1;
				if (!p && a && ((_.width || 0) > 0 || f.hasImage) && (f.graphic = p = n.renderer.symbol(e, _.x, _.y, _.width, _.height, g ? h : o).add(c), f.origin)) {
					let e = f.getOrigin(f.origin, _);
					r || (e.opacity = 0), p.attr(e), m = "animate";
				}
				if (p) {
					m === "animate" && p?.animate(_);
					let e = t.pointAttribs(f, r || !f.selected ? void 0 : "select");
					r ? i && p.css({ fill: e.fill }) : p[m](e), p.addClass(f.getClassName(), !0);
				}
			} else p && (f.graphic = p.destroy());
		}
	}
	markerAttribs(e, t) {
		let n = this.options, r = n.marker ?? {}, i = e.marker || {}, a = i.symbol || r.symbol, o = {}, s, c, l = i.radius ?? r.radius;
		t && (s = r.states?.[t], c = i.states?.[t], l = c?.radius ?? s?.radius ?? (l && l + (s?.radiusPlus || 0))), e.hasImage = a && a.indexOf("url") === 0, e.hasImage && (l = 0);
		let u = e.pos();
		return p(l) && u && (n.crisp && (u[0] = d(u[0], e.hasImage ? 0 : a === "rect" ? r.lineWidth || 0 : 1)), o.x = u[0] - l, o.y = u[1] - l), l && (o.width = o.height = 2 * l), o;
	}
	pointAttribs(e, t) {
		let n = this.options, r = n.marker ?? {}, i = e?.options, a = i?.marker || {}, o = i?.color, s = e?.color, c = e?.zone?.color, l = this.color, u, d, f = a.lineWidth ?? r.lineWidth, p = e?.isNull && n.nullInteraction ? 0 : 1;
		l = o || c || s || l, u = a.fillColor || r.fillColor || l, d = a.lineColor || r.lineColor || l, t ||= "normal";
		let m = r.states?.[t] || {}, h = a.states?.[t] || {};
		return f = h.lineWidth ?? m.lineWidth ?? (f || 0) + (h.lineWidthPlus ?? m.lineWidthPlus ?? 0), u = h.fillColor || m.fillColor || u, d = h.lineColor || m.lineColor || d, p = h.opacity ?? m.opacity ?? p, {
			stroke: d,
			"stroke-width": f,
			fill: u,
			opacity: e?.condemned || e?.isInside === !1 ? 0 : p
		};
	}
	destroy(e) {
		let t = this, n = t.chart, r = /AppleWebKit\/533/.test(K.navigator.userAgent), a, s;
		o(t, "destroy", { keepEventsForUpdate: e }), this.removeEvents(e);
		for (let e of t.axisTypes || []) s = t[e], s?.series && (c(s.series, t), s.isDirty = s.forceRedraw = !0);
		t.legendItem && t.chart.legend.destroyItem(t);
		for (let e of t.points || []) e?.destroy?.(!0);
		for (let e of t.zones || []) f(e, void 0, !0);
		u(t.animationTimeout), i(t, function(e, t) {
			e instanceof te && !e.survive && (a = r && t === "group" ? "hide" : "destroy", e[a]());
		}), n.hoverSeries === t && (n.hoverSeries = void 0), c(n.series, t), n.orderItems("series"), i(t, function(n, r) {
			(!e || r !== "hcEvents") && delete t[r];
		});
	}
	applyZones() {
		let e = this, { area: t, chart: n, graph: r, zones: i, points: a, xAxis: o, yAxis: s, zoneAxis: c } = e, { inverted: l, renderer: u } = n, d = this[`${c}Axis`], { isXAxis: f, len: m = 0, minPointOffset: h = 0 } = d || {}, g = (r?.strokeWidth() || 0) / 2 + 1, _ = (e, t = 0, n = 0) => {
			l && (n = m - n);
			let { translated: r = 0, lineClip: i, value: a } = e, o = n - r;
			i?.push([
				"L",
				t,
				Math.abs(o) < g ? n - g * (o < 0 || o === 0 && A(a) ? -1 : 1) : r
			]);
		};
		if (i.length && (r || t) && d && p(d.min)) {
			let e = d.getExtremes().max + h, n = (e) => {
				e.forEach((t, n) => {
					(t[0] === "M" || t[0] === "L") && (e[n] = [
						t[0],
						f ? m - t[1] : t[1],
						f ? t[2] : m - t[2]
					]);
				});
			};
			if (i.forEach((t) => {
				t.lineClip = [], t.translated = j(d.toPixels(t.value ?? e, !0) || 0, 0, m);
			}), r && !this.showLine && r.hide(), t && t.hide(), c === "y" && a.length < o.len) for (let e of a) {
				let { plotX: t, plotY: n, zone: r } = e, a = r && i[i.indexOf(r) - 1];
				r && _(r, t, n), a && _(a, t, n);
			}
			let p = [], g = d.toPixels(d.getExtremes().min - h, !0);
			i.forEach((e) => {
				let i = e.lineClip || [], a = Math.round(e.translated || 0);
				o.reversed && i.reverse();
				let { clip: c, simpleClip: d } = e, m = 0, h = 0, _ = o.len, v = s.len;
				f ? (m = a, _ = g) : (h = a, v = g);
				let y = [
					[
						"M",
						m,
						h
					],
					[
						"L",
						_,
						h
					],
					[
						"L",
						_,
						v
					],
					[
						"L",
						m,
						v
					],
					["Z"]
				], b = [
					y[0],
					...i,
					y[1],
					y[2],
					...p,
					y[3],
					y[4]
				];
				p = i.reverse(), g = a, l && (n(b), t && n(y)), c ? (c.animate({ d: b }), d?.animate({ d: y })) : (c = e.clip = u.path(b), t && (d = e.simpleClip = u.path(y))), r && e.graph?.clip(c), t && e.area?.clip(d);
			});
		} else e.visible && (r && r.show(), t && t.show());
	}
	plotGroup(e, t, n, r, i) {
		let a = this[e], o = !a, s = {
			visibility: n,
			zIndex: r || .1
		};
		return A(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (s.opacity = this.opacity), a || (this[e] = a = this.chart.renderer.g().add(i)), a.addClass("highcharts-" + t + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (A(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (a.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), a.attr(s)[o ? "attr" : "animate"](this.getPlotBox(t)), a;
	}
	getPlotBox(e) {
		let t = this.xAxis, n = this.yAxis, r = this.chart, i = r.inverted && !r.polar && t && this.invertible && e === "series";
		r.inverted && (t = n, n = this.xAxis);
		let a = {
			scale: 1,
			translateX: t ? t.left : r.plotLeft,
			translateY: n ? n.top : r.plotTop,
			name: e
		};
		o(this, "getPlotBox", a);
		let { scale: s, translateX: c, translateY: l } = a;
		return {
			translateX: c,
			translateY: l,
			rotation: i ? 90 : 0,
			rotationOriginX: i ? s * (t.len - n.len) / 2 : 0,
			rotationOriginY: i ? s * (t.len + n.len) / 2 : 0,
			scaleX: i ? -s : s,
			scaleY: s
		};
	}
	removeEvents(e) {
		let { eventsToUnbind: t } = this;
		e || O(this), t.length &&= (t.forEach((e) => {
			e();
		}), 0);
	}
	render() {
		let e = this, { chart: t, options: n, hasRendered: r } = e, i = D(n.animation), a = e.visible ? "inherit" : "hidden", s = n.zIndex, c = t.seriesGroup, l = e.finishedAnimating ? 0 : i.duration;
		o(this, "render"), t.plotClipInner && (e.plotClipGroup ||= t.renderer.g().add(c)), e.plotGroup("group", "series", a, s, e.plotClipGroup || c), e.markerGroup = e.plotGroup("markerGroup", "markers", a, s, c), n.clip !== !1 && e.setClip(), l && e.animate?.(!0), e.drawGraph && (e.drawGraph(), e.applyZones()), e.visible && e.drawPoints(), e.drawDataLabels?.(), e.redrawPoints?.(), n.enableMouseTracking && e.drawTracker?.(), l && e.animate?.(), r || (l && i.defer && (l += i.defer), e.animationTimeout = h(() => {
			e.afterAnimate();
		}, l || 0)), e.isDirty = !1, e.hasRendered = !0, o(e, "afterRender");
	}
	redraw() {
		let e = this.isDirty || this.isDirtyData;
		this.translate(), this.render(), e && delete this.kdTree, this.condemnedPoints.length = 0;
	}
	reserveSpace() {
		return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
	}
	searchPoint(e, t) {
		let { xAxis: n, yAxis: r } = this, i = this.chart.inverted;
		return this.searchKDTree({
			clientX: i ? n.len - e.chartY + n.pos : e.chartX - n.pos,
			plotY: i ? r.len - e.chartX + r.pos : e.chartY - r.pos
		}, t, e);
	}
	buildKDTree(e) {
		this.buildingKdTree = !0;
		let t = this, n = t.options, r = (n.findNearestPointBy ?? "").indexOf("y") > -1 ? 2 : 1;
		function i(e, n, r) {
			let a = e?.length, o, s;
			if (a) return o = t.kdAxisArray[n % r], e.sort((e, t) => (e[o] || 0) - (t[o] || 0)), s = Math.floor(a / 2), {
				point: e[s],
				left: i(e.slice(0, s), n + 1, r),
				right: i(e.slice(s + 1), n + 1, r)
			};
		}
		function a() {
			t.kdTree = i(t.getValidPoints(void 0, !t.directTouch, n?.nullInteraction), r, r), t.buildingKdTree = !1;
		}
		delete t.kdTree, h(a, n.kdNow || e?.type === "touchstart" ? 0 : 1);
	}
	searchKDTree(e, t, n, r, i) {
		let a = this, [o, s] = this.kdAxisArray, c = t ? "distX" : "dist", l = (a.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, u = !!a.isBubble, d = r || ((e, t, n) => {
			let r = e[n] || 0, i = t[n] || 0;
			return [r === i && e.index > t.index || r < i ? e : t, !1];
		}), f = i || ((e, t) => e < t);
		function p(e, t) {
			let n = e[o], r = t[o], i = A(n) && A(r) ? n - r : null, a = e[s], c = t[s], l = A(a) && A(c) ? a - c : 0, d = u && t.marker?.radius || 0;
			t.dist = Math.sqrt((i && i * i || 0) + l * l) - d, t.distX = A(i) ? Math.abs(i) - d : Number.MAX_VALUE;
		}
		function m(e, t, n, r) {
			let i = t.point, o = a.kdAxisArray[n % r], s = i, l = !1;
			p(e, i);
			let h = (e[o] || 0) - (i[o] || 0) + (u && i.marker?.radius || 0), g = h < 0 ? "left" : "right", _ = h < 0 ? "right" : "left";
			if (t[g] && ([s, l] = d(i, m(e, t[g], n + 1, r), c)), t[_]) {
				let i = Math.sqrt(h * h), a = s[c];
				f(i, a, l) && (s = d(s, m(e, t[_], n + 1, r), c)[0]);
			}
			return s;
		}
		if (!this.kdTree && !this.buildingKdTree && this.buildKDTree(n), this.kdTree) return m(e, this.kdTree, l, l);
	}
	pointPlacementToXValue() {
		let { options: e, xAxis: t } = this, n = e.pointPlacement;
		return n === "between" && (n = t.reversed ? -.5 : .5), p(n) ? n * (e.pointRange || t.pointRange) : 0;
	}
	isPointInside(e) {
		let { chart: t, xAxis: n, yAxis: r } = this, { plotX: i = -1, plotY: a = -1 } = e;
		return a >= 0 && a <= (r ? r.len : t.plotHeight) && i >= 0 && i <= (n ? n.len : t.plotWidth);
	}
	drawTracker() {
		let e = this, t = e.options, n = t.trackByArea, r = [].concat((n ? e.areaPath : e.graphPath) || []), i = e.chart, a = i.pointer, s = i.renderer, c = i.options.tooltip?.snap || 0, l = () => {
			t.enableMouseTracking && i.hoverSeries !== e && e.onMouseOver();
		}, u = "rgba(192,192,192," + (G ? 1e-4 : .002) + ")", d = e.tracker;
		d ? d.attr({ d: r }) : e.graph && (e.tracker = d = s.path(r).attr({
			visibility: e.visible ? "inherit" : "hidden",
			zIndex: 2
		}).addClass(n ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), i.styledMode || d.attr({
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			stroke: u,
			fill: n ? u : "none",
			"stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * c)
		}), [
			e.tracker,
			e.markerGroup,
			...e.dataLabelsGroups || []
		].forEach((e) => {
			e && (e.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", (e) => {
				a?.onTrackerMouseOut(e);
			}), t.cursor && !i.styledMode && e.css({ cursor: t.cursor }), e.on("touchstart", l));
		})), o(this, "afterDrawTracker");
	}
	addPoint(e, t, n, r, i) {
		let a = this, s = a.options, { chart: c, data: l, dataTable: u, xAxis: d } = a, f = d?.hasNames && d.names, p = s.data, m = a.getColumn("x"), h, g;
		t ??= !0;
		let { applyOptions: _, optionsToObject: v } = a.pointClass.prototype, y = { series: a }, b = v.call(y, e);
		_.call(y, b, void 0, !1);
		let x = y.x;
		if (g = m.length, a.requireSorting && x < m[g - 1]) for (h = !0; g && m[g - 1] > x;) g--;
		u.setRow(b, g, !0), this.xColumn?.splice(g, 0, this.getX(x)), f && y.name && (f[x] = y.name), p?.splice(g, 0, e), (h || a.hasProcessedDataTable) && (a.data.splice(g, 0, null), a.processData()), s.legendType === "point" && a.generatePoints(), n && (l[0] && l[0].remove ? l[0].remove(!1) : ([
			l,
			p,
			this.xColumn
		].filter(A).forEach((e) => {
			e.shift();
		}), u.deleteRows(0))), i !== !1 && o(a, "addPoint", { point: y }), a.isDirty = !0, a.isDirtyData = !0, t && c.redraw(r);
	}
	removePoint(e, t, n) {
		let r = this, { chart: i, data: a, points: o, dataTable: s } = r, c = a[e], l = function() {
			[
				o?.length === a.length ? o : void 0,
				a,
				r.options.data,
				r.xColumn
			].filter(A).forEach((t) => {
				t.splice(e, 1);
			}), s.deleteRows(e), s.modified = s, c?.destroy(), r.isDirty = !0, r.isDirtyData = !0, t && i.redraw();
		};
		S(n, i), t ??= !0, c ? c.firePointEvent("remove", null, l) : l();
	}
	remove(e, t, n, r) {
		let i = this, a = i.chart;
		function s() {
			i.destroy(r), a.isDirtyLegend = a.isDirtyBox = !0, a.linkSeries(r), (e ?? !0) && a.redraw(t);
		}
		n === !1 ? s() : o(i, "remove", null, s);
	}
	update(e, n) {
		e = t(e, this.userOptions), o(this, "update", { options: e });
		let i = this, s = i.chart, c = i.userOptions, l = i.initialType || i.type, u = s.options.plotOptions, d = q[l].prototype, f = [
			"dataLabelsGroup",
			"dataLabelsGroups",
			"dataLabelsParentGroups",
			"group",
			"markerGroup",
			"plotClipGroup",
			"transformGroup"
		], p = [
			"dataGrouping",
			"pointStart",
			"pointInterval",
			"pointIntervalUnit",
			"keys"
		], m = i.finishedAnimating && { animation: !1 }, h = {}, g = e.data || e.dataTable, _, v, y = r.keepProps.slice(), b = e.type || c.type || s.options.chart.type, x = !(this.hasDerivedData || b && b !== this.type || e.keys !== void 0 || e.pointStart !== void 0 || e.pointInterval !== void 0 || e.relativeXValue !== void 0 || e.joinBy || e.mapData || p.some((e) => i.hasOptionChanged(e)));
		b ||= l, x ? (y.push.apply(y, r.keepPropsForPoints), e.visible !== !1 && (y.push("area", "graph"), "zones" in e || y.push("zones")), i.parallelArrays.forEach(function(e) {
			y.push(e + "Data");
		}), g && (e.dataSorting && C(i.options.dataSorting, e.dataSorting), this.setData(g, !1))) : this.dataTable.modified = this.dataTable, e.dataLabels && c.dataLabels && (e.dataLabels = this.mergeArrays(c.dataLabels, e.dataLabels)), e = a(c, {
			index: c.index === void 0 ? i.index : c.index,
			pointStart: u?.series?.pointStart ?? c.pointStart
		}, !x && { data: i.options.data }, e, m), x && e.data && (e.data = i.options.data), y = f.concat(y), y.forEach(function(e) {
			y[e] = i[e], delete i[e];
		});
		let S = !1;
		if (q[b]) {
			if (S = b !== i.type, i.remove(!1, !1, !1, !0), S) {
				if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, q[b].prototype);
				else {
					let e = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
					for (v in d) i[v] = void 0;
					C(i, q[b].prototype), e ? i.hcEvents = e : delete i.hcEvents;
				}
			}
		} else k(17, !0, s, { missingModuleFor: b });
		if (y.forEach(function(e) {
			i[e] = y[e];
		}), i.init(s, e), x && this.points) {
			_ = i.options, _.visible === !1 ? (h.graphic = 1, h.dataLabel = 1) : (this.hasMarkerChanged(_, c) && (h.graphic = 1), i.hasDataLabels?.() || (h.dataLabel = 1));
			for (let e of this.points) e?.series && (e.resolveColor(), Object.keys(h).length && e.destroyElements(h), _.showInLegend === !1 && e.legendItem && s.legend.destroyItem(e));
		}
		i.initialType = l, s.linkSeries(), S && i.linkedSeries.length && (i.isDirtyData = !0), o(this, "afterUpdate"), (n ?? !0) && s.redraw(x ? void 0 : !1);
	}
	setName(e) {
		this.name = this.options.name = this.userOptions.name = e, this.chart.isDirtyLegend = !0;
	}
	hasOptionChanged(e) {
		let t = this.chart, n = this.options[e], r = t.options.plotOptions, i = this.userOptions[e], a = r?.[this.type]?.[e] ?? r?.series?.[e];
		return i && !A(a) ? n !== i : n !== (a ?? n);
	}
	onMouseOver() {
		let e = this, t = e.chart, n = t.hoverSeries;
		t.pointer?.setHoverChartIndex(), n && n !== e && n.onMouseOut(), o(e, "mouseOver"), e.setState("hover"), t.hoverSeries = e;
	}
	onMouseOut() {
		let e = this, t = e.chart, n = t.tooltip, r = t.hoverPoint;
		t.hoverSeries = null, r && r.onMouseOut(), o(e, "mouseOut"), n && !e.stickyTracking && (!n.shared || e.noSharedTooltip) && n.hide(), t.series.forEach(function(e) {
			e.setState("", !0);
		});
	}
	setState(e, t) {
		let n = this, { graph: r, options: i } = n, { inactiveOtherPoints: a, states: o = {} } = i, s = o[e || "normal"]?.animation ?? n.chart.options.chart.animation, { lineWidth: c, opacity: l } = i;
		if (e ||= "", n.state !== e && ([
			n.group,
			n.markerGroup,
			...n.dataLabelsGroups || []
		].forEach(function(t) {
			t && (n.state && t.removeClass("highcharts-series-" + n.state), e && t.addClass("highcharts-series-" + e));
		}), n.state = e, !n.chart.styledMode)) {
			if (o[e]?.enabled === !1) return;
			if (e && (c = o[e]?.lineWidth ?? (p(c) ? c + (o?.[e]?.lineWidthPlus || 0) : void 0), l = o[e]?.opacity ?? l), r && !r.dashstyle && p(c)) for (let e of [r, ...this.zones.map((e) => e.graph)]) e?.animate({ "stroke-width": c }, s);
			a || [
				n.group,
				n.markerGroup,
				...n.dataLabelsGroups || [],
				n.labelBySeries
			].forEach(function(e) {
				e?.animate({ opacity: l }, s);
			});
		}
		t && a && n.points && n.setAllPointsToState(e || void 0);
	}
	setAllPointsToState(e) {
		this.points.forEach((t) => t.setState?.(e));
	}
	setVisible(e, t) {
		let n = this, r = n.chart, i = r.options.chart.ignoreHiddenSeries, a = n.visible;
		n.visible = e = n.options.visible = n.userOptions.visible = e === void 0 ? !a : e;
		let s = e ? "show" : "hide";
		[
			"group",
			"markerGroup",
			"tracker",
			"tt"
		].forEach((e) => {
			n[e]?.[s]();
		}), n.dataLabelsGroups?.forEach((e) => {
			e?.[s]();
		}), (r.hoverSeries === n || r.hoverPoint?.series === n) && n.onMouseOut(), n.legendItem && r.legend.colorizeItem(n, e), n.isDirty = !0, n.options.stacking && r.series.forEach((e) => {
			e.options.stacking && e.visible && (e.isDirty = !0);
		}), n.linkedSeries.forEach((t) => {
			t.setVisible(e, !1);
		}), i && (r.isDirtyBox = !0), o(n, s), t !== !1 && r.redraw();
	}
	show() {
		this.setVisible(!0);
	}
	hide() {
		this.setVisible(!1);
	}
	select(e) {
		let t = this;
		t.selected = e = this.options.selected = e === void 0 ? !t.selected : e, t.checkbox && (t.checkbox.checked = e), o(t, e ? "select" : "unselect");
	}
	shouldShowTooltip(e, t, n = {}) {
		return n.series = this, n.visiblePlotOnly = !0, this.chart.isInsidePlot(e, t, n);
	}
	drawLegendSymbol(e, t) {
		let n = this.chart.renderer, r = this.options.legendSymbol || "rectangle", i = t.legendItem || {}, { options: a, symbolHeight: o, symbolWidth: s } = e, c = a.squareSymbol, l = c ? o : s, u = c ? (s - o) / 2 : 0, d = (e.baseline || 0) - o + 1, f = l, p = o, m = a.symbolRadius ?? o, h = r === "rectangle" ? n.rect(u, d, f, p, m) : n.symbols[r] && n.symbol(r, u, d, f, p, { r: m });
		h ? i.symbol = h.addClass("highcharts-point").attr({ zIndex: 3 }).add(i.group) : H[r]?.call(this, e, t);
	}
};
Y.defaultOptions = ie, Y.types = P.seriesTypes, Y.registerType = P.registerSeriesType, Y.keepProps = [
	"colorIndex",
	"eventOptions",
	"navigatorSeries",
	"symbolIndex",
	"baseSeries"
], Y.keepPropsForPoints = [
	"data",
	"isDirtyData",
	"isDirtyCanvas",
	"points",
	"condemnedPoints",
	"dataTable",
	"hasProcessedDataTable",
	"xIncrement",
	"cropped",
	"_hasPointMarkers",
	"hasDataLabels",
	"nodes",
	"layout",
	"level",
	"mapMap",
	"mapData",
	"minY",
	"maxY",
	"minX",
	"maxX",
	"transformGroups"
], C(Y.prototype, {
	axisTypes: ["xAxis", "yAxis"],
	coll: "series",
	colorCounter: 0,
	directTouch: !1,
	invertible: !0,
	isCartesian: !0,
	kdAxisArray: ["clientX", "plotY"],
	parallelArrays: ["x", "y"],
	pointClass: ee,
	requireSorting: !0,
	sorted: !0
}), P.series = Y;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/Stacking/StackItem.js
var { format: ae } = N, { series: oe } = P, se = class {
	constructor(e, t, n, r) {
		this.axis = e, this.negativeValue = t, this.x = n, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = r, this.leftCliff = 0, this.rightCliff = 0;
	}
	destroy() {
		f(this, this.axis);
	}
	render(e) {
		let t = this.axis, n = t.chart, r = t.options.stackLabels || {}, i = r.format, a = (i ? ae(i, this, n) : r.formatter?.call(this, this)) || "", s = this.label ? "animate" : "attr";
		this.label ||= n.renderer.label(a, 0, void 0, r.shape, void 0, void 0, r.useHTML, !1, "stack-labels");
		let c = this.label, l = {
			r: r.borderRadius || 0,
			padding: r.padding ?? 5
		};
		n.styledMode || (l.fill = r.backgroundColor, l.stroke = r.borderColor, l["stroke-width"] = r.borderWidth, c.css(r.style || {})), c.attr({
			text: a,
			visibility: "hidden"
		})[s](l), c.added || c.add(e), c.labelrank = n.plotSizeY, o(this, "afterRender");
	}
	setOffset(e, t, n, r, i, a) {
		let { axis: c, label: l } = this, u = c.chart, d = c.options.stackLabels || {}, f = u.inverted, m = this.negativeValue !== !!c.reversed, h = this.getStackBox({
			boxBottom: n,
			boxTop: r,
			defaultX: i,
			isNegative: m,
			width: t,
			xAxis: a,
			xOffset: e
		}), { align: g = f ? m ? "left" : "right" : "center", verticalAlign: _ = f ? "middle" : m ? "bottom" : "top", textAlign: v = f ? m ? "right" : "left" : "center", x: y = 0, y: b = 0 } = d, x = {
			align: g,
			verticalAlign: _,
			x: y,
			y: b
		};
		if (l && h) {
			let e = l.getBBox(void 0, 0), t = l.padding, n = (d.overflow ?? "justify") === "justify", r, { x: i, y: a } = this.adjustStackPosition({
				labelBox: e,
				verticalAlign: _,
				textAlign: v
			});
			h.x -= i, h.y -= a, l.align(x, !1, h), r = u.isInsidePlot(l.alignAttr.x + y + i, l.alignAttr.y + b + a), r || (n = !1), n && oe.prototype.justifyDataLabel.call(c, l, x, l.alignAttr, e, h), l.attr({
				rotation: d.rotation,
				rotationOriginX: e.width * s(d.textAlign || "center"),
				rotationOriginY: e.height / 2
			}), ((!n && d.crop) ?? !0) && (r = p(l.x) && p(l.y) && u.isInsidePlot(l.x - t + (l.width || 0), l.y) && u.isInsidePlot(l.x + t, l.y)), l[r ? "show" : "hide"]();
		}
		o(this, "afterSetOffset", {
			xOffset: e,
			width: t
		});
	}
	adjustStackPosition({ labelBox: e, verticalAlign: t, textAlign: n }) {
		return {
			x: e.width / 2 + e.width / 2 * (2 * s(n) - 1),
			y: e.height / 2 * 2 * (1 - s(t))
		};
	}
	getStackBox(e) {
		let t = this.axis, n = t.chart, { boxBottom: r, boxTop: i, defaultX: a, isNegative: o, width: s, xOffset: c } = e, l = t.stacking.usePercentage ? 100 : i ?? this.total ?? 0, u = t.toPixels(l), d = e.xAxis || n.xAxis[0], f = (a ?? d.translate(this.x)) + c, m = t.toPixels(r || p(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0), h = Math.abs(u - m);
		return n.inverted ? {
			x: (o ? u : u - h) - n.plotLeft,
			y: d.height - f - s + d.top - n.plotTop,
			width: h,
			height: s
		} : {
			x: f + d.transB - n.plotLeft,
			y: (o ? u - h : u) - n.plotTop,
			width: s,
			height: h
		};
	}
}, ce = {
	borderRadius: 3,
	centerInCategory: !1,
	groupPadding: .2,
	marker: null,
	pointPadding: .1,
	minPointLength: 0,
	cropThreshold: 50,
	pointRange: null,
	states: {
		hover: {
			halo: !1,
			brightness: .2
		},
		select: {
			color: "var(--highcharts-neutral-color-20)",
			borderColor: "var(--highcharts-neutral-color-100)"
		}
	},
	dataLabels: {
		align: void 0,
		verticalAlign: void 0,
		y: void 0
	},
	startFromThreshold: !0,
	stickyTracking: !1,
	tooltip: { distance: 6 },
	threshold: 0,
	borderColor: "var(--highcharts-background-color)"
}, { parse: le } = E, { noop: X } = w, Z = class extends Y {
	animate(e) {
		let t = this, n = this.yAxis, r = n.pos, i = n.reversed, a = t.options, { clipOffset: o, inverted: s } = this.chart, c = {}, l = s ? "translateX" : "translateY", u, d;
		e && o ? (c.scaleY = .001, d = j(n.toPixels(a.threshold || 0), r, r + n.len), s ? (d += i ? -Math.floor(o[+!!s]) : Math.ceil(o[s ? 3 : 2]), c.translateX = d - n.len) : (d += i ? Math.ceil(o[+!!s]) : -Math.floor(o[s ? 3 : 2]), c.translateY = d), t.clipBox && t.setClip(), t.group.attr(c)) : (u = Number(t.group.attr(l)), t.group.animate({ scaleY: 1 }, C(D(t.options.animation), { step: function(e, n) {
			t.group && (c[l] = u + n.pos * (r - u), t.group.attr(c));
		} })));
	}
	init(e, t) {
		super.init.apply(this, arguments);
		let n = this;
		e = n.chart, e.hasRendered && e.series.forEach(function(e) {
			e.type === n.type && (e.isDirty = !0);
		});
	}
	getColumnMetrics() {
		let e = this, t = e.options, n = e.xAxis, r = e.yAxis, i = n.options.reversedStacks, a = n.reversed && !i || !n.reversed && i, o = {}, s, c = 0;
		t.grouping === !1 ? c = 1 : e.chart.series.forEach(function(t) {
			let n = t.yAxis, i = t.options, a;
			t.type === e.type && t.reserveSpace() && r.len === n.len && r.pos === n.pos && (i.stacking && i.stacking !== "group" ? (s = t.stackKey, o[s] === void 0 && (o[s] = c++), a = o[s]) : i.grouping !== !1 && (a = c++), t.columnIndex = a);
		});
		let l = Math.min(Math.abs(n.transA) * (!n.brokenAxis?.hasBreaks && n.ordinal?.slope || t.pointRange || n.closestPointRange || n.tickInterval || 1), n.len), u = l * t.groupPadding, d = (l - 2 * u) / (c || 1), f = Math.min(t.maxPointWidth || n.len, t.pointWidth ?? d * (1 - 2 * t.pointPadding));
		return e.columnMetrics = {
			width: f,
			offset: (d - f) / 2 + (u + ((e.columnIndex || 0) + +!!a) * d - l / 2) * (a ? -1 : 1),
			paddedWidth: d,
			columnCount: c
		}, e.columnMetrics;
	}
	crispCol(e, t, n, r) {
		let i = this.borderWidth, a = this.chart.inverted, o = d(t + r, i, a);
		if (t = d(t, i, a), r = o - t, this.options.crisp) {
			let t = d(e + n, i);
			e = d(e, i), n = t - e;
		}
		return {
			x: e,
			y: t,
			width: n,
			height: r
		};
	}
	adjustForMissingColumns(e, t, n, r) {
		if (!n.isNull && r.columnCount > 1) {
			let a = this.xAxis.series.filter((e) => e.visible).map((e) => e.index), o = 0, s = 0;
			i(this.xAxis.stacking?.stacks, (e) => {
				let t = typeof n.x == "number" ? e[n.x.toString()]?.points : void 0, r = t?.[this.index], i = {};
				if (t && M(r)) {
					let e = this.index, n = Object.keys(t).filter((e) => !e.match(",") && t[e] && t[e].length > 1).map(parseFloat).filter((e) => a.indexOf(e) !== -1).filter((t) => {
						let n = this.chart.series[t].options, r = n.stacking && n.stack;
						if (A(r)) {
							if (p(i[r])) return e === t && (e = i[r]), !1;
							i[r] = t;
						}
						return !0;
					}).sort((e, t) => t - e);
					o = n.indexOf(e), s = n.length;
				}
			}), o = this.xAxis.reversed ? s - 1 - o : o;
			let c = (s - 1) * r.paddedWidth + t;
			e = (n.plotX || 0) + c / 2 - t - o * r.paddedWidth;
		}
		return e;
	}
	translate() {
		let e = this, t = e.chart, n = e.options, r = e.dense = e.closestPointRange * e.xAxis.transA < 2, i = e.borderWidth = n.borderWidth ?? +!r, a = e.xAxis, s = e.yAxis, c = n.threshold, l = n.minPointLength ?? 5, u = e.getColumnMetrics(), d = u.width, f = e.pointXOffset = u.offset, m = e.dataMin, h = e.dataMax, g = e.translatedThreshold = s.getThreshold(c), _ = e.barW = Math.max(d, 1 + 2 * i);
		n.pointPadding && n.crisp && (_ = Math.ceil(_)), Y.prototype.translate.apply(e), e.points.concat(e.condemnedPoints).forEach(function(r) {
			let i = r.yBottom ?? g, o = 999 + Math.abs(i), v = r.plotX || 0, y = j(r.plotY, -o, s.len + o), b, x = Math.min(y, i), S = Math.max(y, i) - x, C = d, w = v + f, T = _;
			l && Math.abs(S) < l && (S = l, b = !s.reversed && !r.negative || s.reversed && r.negative, p(c) && p(h) && r.y === c && h <= c && (s.min || 0) < c && (m !== h || (s.max || 0) <= c) && (b = !b, r.negative = !r.negative), x = Math.abs(x - g) > l ? i - (b ? l : 0) : g - (b ? l : 0)), A(r.options.pointWidth) && (C = T = Math.ceil(r.options.pointWidth), w -= Math.round((C - d) / 2)), n.centerInCategory && (w = e.adjustForMissingColumns(w, C, r, u)), r.barX = w, r.pointWidth = C, r.tooltipPos = t.inverted ? [
				j(s.len + s.pos - t.plotLeft - y, s.pos - t.plotLeft, s.len + s.pos - t.plotLeft),
				a.len + a.pos - t.plotTop - w - T / 2,
				S
			] : [
				a.left - t.plotLeft + w + T / 2,
				j(y + s.pos - t.plotTop, s.pos - t.plotTop, s.len + s.pos - t.plotTop),
				S
			], r.shapeType = e.pointClass.prototype.shapeType || "roundedRect", r.shapeArgs = e.crispCol(w, x, T, r.isNull ? 0 : S);
		}), o(this, "afterColumnTranslate");
	}
	drawGraph() {
		this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
	}
	pointAttribs(e, t) {
		let n = this.options, r = this.pointAttrToOptions || {}, i = r.stroke || "borderColor", o = r["stroke-width"] || "borderWidth", s, c, l, u = e?.color || this.color, d = e?.[i] || n[i] || u, f = e?.options.dashStyle || n.dashStyle, p = e?.[o] ?? n[o] ?? this[o] ?? 1, m = e?.isNull && n.nullInteraction ? 0 : e?.opacity ?? n.opacity ?? 1;
		e && this.zones.length && (c = e.getZone(), u = e.options.color || c && (c.color || e.nonZonedColor) || this.color, c && (d = c.borderColor || d, f = c.dashStyle || f, p = c.borderWidth || p)), t && e && (s = a(n.states?.[t], e.options.states?.[t] || {}), l = s.brightness, u = s.color || l !== void 0 && le(u).brighten(s.brightness).get() || u, d = s[i] || d, p = s[o] || p, f = s.dashStyle || f, m = s.opacity ?? m);
		let h = {
			fill: u,
			stroke: d,
			"stroke-width": p,
			opacity: e?.condemned ? 0 : m
		};
		return f && (h.dashstyle = f), h;
	}
	drawPoints(e) {
		e ||= this.points.concat(this.condemnedPoints);
		let t = this, n = this.chart, r = t.options, i = r.nullInteraction, { styledMode: o, renderer: s } = n, c = r.animationLimit || 250, l;
		e.forEach(function(e) {
			let u = e.plotY, d = e.graphic, f = !!d, m = d && n.pointCount < c ? "animate" : "attr";
			if (p(u) && (e.y !== null || i)) {
				if (l = e.shapeArgs, d && e.hasNewShapeType() && (d = d.destroy()), !d) {
					let r = l;
					e.origin && n.pointCount < c && (r = a(l, e.getOrigin(e.origin, l)), o || (r.opacity = 0, r["stroke-width"] = 0), f = !0, m = "animate"), e.graphic = d = s[e.shapeType](r).add(e.group || t.group);
				}
				f && d[m](a(l)), o || d[m](t.pointAttribs(e, e.selected ? "select" : "")).shadow(e.allowShadow !== !1 && r.shadow), d.addClass(e.getClassName(), !0).attr({ visibility: e.visible ? "inherit" : "hidden" });
			} else d && (e.graphic = d.destroy());
		});
	}
	drawTracker(e = this.points) {
		let t = this, n = t.chart, r = n.pointer, i = function(e) {
			r?.normalize(e);
			let i = r?.getPointFromEvent(e);
			r && i && t.options.enableMouseTracking && (n.isInsidePlot(e.chartX - n.plotLeft, e.chartY - n.plotTop, { visiblePlotOnly: !0 }) || t.allowOutsidePlotInteraction && r?.inClass(e.target, "highcharts-point") || r?.inClass(e.target, "highcharts-data-label")) && (r.isDirectTouch = !0, i.onMouseOver(e));
		}, a;
		e.forEach(function(e) {
			a = M(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), a.forEach(function(t) {
				(t.div || t.element).point = e;
			});
		}), t._hasTracking ||= (t.trackerGroups?.reduce((e, n) => (n === "dataLabelsGroup" ? e.push(...t.dataLabelsGroups || []) : e.push(t[n]), e), []).forEach((e) => {
			e && (e.addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(e) {
				r?.onTrackerMouseOut(e);
			}).on("touchstart", i), !n.styledMode && t.options.cursor && e.css({ cursor: t.options.cursor }));
		}), !0), o(this, "afterDrawTracker");
	}
	remove() {
		let e = this, t = e.chart;
		t.hasRendered && t.series.forEach(function(t) {
			t.type === e.type && (t.isDirty = !0);
		}), Y.prototype.remove.apply(e, arguments);
	}
};
Z.defaultOptions = a(Y.defaultOptions, ce), C(Z.prototype, {
	directTouch: !0,
	getSymbol: X,
	negStacks: !0,
	trackerGroups: ["group", "dataLabelsGroup"]
}), P.registerSeriesType("column", Z);
//#endregion
//#region node_modules/highcharts/es-modules/Series/CenteredUtilities.js
var { deg2rad: Q } = w, $;
(function(e) {
	function t() {
		let e = this.options, t = this.chart, n = 2 * (e.slicedOffset || 0), r = t.plotWidth - 2 * n, i = t.plotHeight - 2 * n, a = e.center, s = Math.min(r, i), c = e.thickness, l, u = e.size, d = e.innerSize || 0, f, m;
		typeof u == "string" && (u = parseFloat(u)), typeof d == "string" && (d = parseFloat(d));
		let h = [
			a?.[0] ?? "50%",
			a?.[1] ?? "50%",
			(u && u < 0 ? void 0 : e.size) ?? "100%",
			(d && d < 0 ? void 0 : e.innerSize || 0) ?? "0%"
		];
		for (f = 0; f < 4; ++f) m = h[f], l = f < 2 || f === 2 && /%$/.test(m), h[f] = y(m, [
			r,
			i,
			s,
			h[2]
		][f]) + (l ? n : 0);
		return h[3] > h[2] && (h[3] = h[2]), p(c) && c * 2 < h[2] && c > 0 && (h[3] = h[2] - c * 2), o(this, "afterGetCenter", { positions: h }), h;
	}
	e.getCenter = t;
	function n(e, t) {
		let n = p(e) ? e : 0, r = p(t) && t > n && t - n < 360 ? t : n + 360;
		return {
			start: Q * (n + -90),
			end: Q * (r + -90)
		};
	}
	e.getStartAndEndRadians = n;
})($ ||= {});
var ue = $;
//#endregion
export { H as a, Y as i, Z as n, B as o, se as r, I as s, ue as t };
