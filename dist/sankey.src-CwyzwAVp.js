import { K as e, S as t, U as n, W as r, et as i, h as a, it as o, j as s, k as c, lt as l, s as u, w as d, y as f, z as p } from "./AnimationUtilities-HCzBkGkl.js";
import { n as m, t as h } from "./SeriesRegistry-BO6tW97M.js";
import { t as g } from "./SVGElement-DQ_bI6Wv.js";
import { n as _, t as v } from "./TextPath-D9gJwxEx.js";
//#region node_modules/highcharts/es-modules/Series/NodesComposition.js
var { series: { prototype: y, prototype: { pointClass: { prototype: b } } } } = h, x;
(function(t) {
	function n(e, t) {
		let n = e.prototype, i = t.prototype;
		return n.setNodeState = f, n.setState = f, n.update = p, i.destroy = o, i.setData = u, a(t, "afterUpdate", r), t;
	}
	t.compose = n;
	function r() {
		if (!this.hasDataLabels?.() && this.nodes) for (let e of this.nodes) e.destroyElements({ dataLabel: 1 });
	}
	function i(e) {
		let t = this.pointClass, n = (e, t) => s(e, (e) => e.id === t), r = n(this.nodes, e), i;
		if (!r) {
			i = this.options.nodes && n(this.options.nodes, e);
			let a = new t(this, c({
				className: "highcharts-node",
				isNode: !0,
				id: e,
				y: 1
			}, i));
			a.linksTo = [], a.linksFrom = [], a.getSum = function() {
				let e = 0, t = 0;
				return a.linksTo.forEach((t) => {
					e += t.weight || 0;
				}), a.linksFrom.forEach((e) => {
					t += e.weight || 0;
				}), Math.max(e, t);
			}, a.offset = function(e, t) {
				let n = 0;
				for (let r = 0; r < a[t].length; r++) {
					if (a[t][r] === e) return n;
					n += a[t][r].weight;
				}
			}, a.hasShape = function() {
				let e = 0;
				return a.linksTo.forEach((t) => {
					t.outgoing && e++;
				}), !a.linksTo.length || e !== a.linksTo.length;
			}, a.index = this.nodes.push(a) - 1, r = a;
		}
		return r.formatPrefix = "node", r.name = r.name || r.options.id || "", r.mass = r.options.mass ?? (r.options.marker && r.options.marker.radius) ?? (this.options.marker && this.options.marker.radius) ?? 4, r;
	}
	t.createNode = i;
	function o() {
		return this.data = [].concat(this.points || [], this.nodes), y.destroy.apply(this, arguments);
	}
	t.destroy = o;
	function l() {
		let e = this.chart, t = {};
		y.generatePoints.call(this), this.nodes ||= [], this.colorCounter = 0, this.nodes.forEach((e) => {
			e.linksFrom.length = 0, e.linksTo.length = 0, e.level = e.options.level;
		}), this.points.forEach((n) => {
			d(n.from) && (t[n.from] || (t[n.from] = this.createNode(n.from)), t[n.from].linksFrom.push(n), n.fromNode = t[n.from], e.styledMode ? n.colorIndex = n.options.colorIndex ?? t[n.from].colorIndex : n.color = n.options.color || t[n.from].color), d(n.to) && (t[n.to] || (t[n.to] = this.createNode(n.to)), t[n.to].linksTo.push(n), n.toNode = t[n.to]), n.name = n.name || n.id;
		}, this), this.nodeLookup = t;
	}
	t.generatePoints = l;
	function u() {
		this.nodes && (this.nodes.forEach((e) => {
			e.destroy();
		}), this.nodes.length = 0), y.setData.apply(this, arguments);
	}
	function f(e) {
		let t = arguments, n = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
		e !== "select" && n.forEach((e) => {
			e && e.series && (b.setState.apply(e, t), e.isNode || (e.fromNode.graphic && b.setState.apply(e.fromNode, t), e.toNode && e.toNode.graphic && b.setState.apply(e.toNode, t)));
		}), b.setState.apply(this, t);
	}
	t.setNodeState = f;
	function p(t, n, r, i) {
		let a = this.series.options.nodes, o = this.series.options.data, s = o?.length || 0, c = o?.[this.index];
		if (b.update.call(this, t, !this.isNode && n, r, i), this.isNode) {
			let t = (a || []).reduce((e, t, n) => this.id === t.id ? n : e, -1), i = e(a && a[t] || {}, o?.[this.index] || {});
			o && (c ? o[this.index] = c : o.length = s), a ? t >= 0 ? a[t] = i : a.push(i) : this.series.options.nodes = [i], (n ?? !0) && this.series.chart.redraw(r);
		}
	}
	t.updateNode = p;
})(x ||= {});
var S = x, { column: C } = h.seriesTypes, w = class extends C.prototype.pointClass {
	applyOptions(e, t) {
		return m.prototype.applyOptions.call(this, e, t), d(this.options.level) && (this.options.column = this.column = this.options.level), this;
	}
	getClassName() {
		return (this.isNode ? "highcharts-node " : "highcharts-link ") + m.prototype.getClassName.call(this);
	}
	getFromNode() {
		let e = this, t = -1, n;
		for (let r = 0; r < e.linksTo.length; r++) {
			let i = e.linksTo[r];
			i.fromNode.column > t && i.fromNode !== e && (n = i.fromNode, t = n.column);
		}
		return {
			fromNode: n,
			fromColumn: t
		};
	}
	setNodeColumn() {
		let e = this;
		d(e.options.column) || (e.column = e.linksTo.length === 0 ? 0 : e.getFromNode().fromColumn + 1);
	}
	isValid() {
		return this.isNode || typeof this.weight == "number";
	}
}, T = {
	borderWidth: 0,
	colorByPoint: !0,
	curveFactor: .33,
	dataLabels: {
		enabled: !0,
		backgroundColor: "none",
		crop: !1,
		nodeFormat: void 0,
		nodeFormatter: function() {
			return this.point.name;
		},
		format: void 0,
		formatter: function() {},
		inside: !0
	},
	inactiveOtherPoints: !0,
	linkColorMode: "from",
	linkOpacity: .5,
	opacity: 1,
	minLinkWidth: 0,
	nodeAlignment: "center",
	nodeWidth: 20,
	nodePadding: 10,
	nodeDistance: 30,
	showInLegend: !1,
	states: {
		hover: {
			linkOpacity: 1,
			opacity: 1
		},
		inactive: {
			linkOpacity: .1,
			opacity: .1,
			animation: { duration: 50 }
		}
	},
	tooltip: {
		followPointer: !0,
		headerFormat: "<span style=\"font-size: 0.8em\">{series.name}</span><br/>",
		pointFormat: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",
		nodeFormat: "{point.name}: <b>{point.sum}</b><br/>"
	}
};
//#endregion
//#region node_modules/highcharts/es-modules/Series/TreeUtilities.js
function E(e, t) {
	let n = t.index, r = t.mapOptionsToLevel, i = t.parentColor, a = t.parentColorIndex, o = t.series, s = t.colors, c = t.siblings, l = o.points, d = o.chart.options.chart, f, p, m, h, g, _, v;
	return e && (p = l[e.i], m = r[e.level] || {}, f = p && m.colorByPoint, f && (g = p.index % (s ? s.length : d.colorCount), h = s && s[g]), o.chart.styledMode || (_ = (p && p.options.color) ?? (m && m.color) ?? h ?? (i && ((e) => {
		let t = m && m.colorVariation;
		return t && t.key === "brightness" && n && c ? u.parse(e).brighten(t.to * (n / c)).get() : e;
	})(i)) ?? o.color), v = (p && p.options.colorIndex) ?? (m && m.colorIndex) ?? g ?? a ?? t.colorIndex), {
		color: _,
		colorIndex: v
	};
}
function D(t) {
	let i = {}, a, o, s, c, l, u;
	if (r(t)) for (c = n(t.from) ? t.from : 1, u = t.levels, o = {}, a = r(t.defaults) ? t.defaults : {}, p(u) && (o = u.reduce((t, i) => {
		let o, s, l;
		return r(i) && n(i.level) && (l = e({}, i), s = l.levelIsConstant ?? a.levelIsConstant, delete l.levelIsConstant, delete l.level, o = i.level + (s ? 0 : c - 1), r(t[o]) ? e(!0, t[o], l) : t[o] = l), t;
	}, {})), l = n(t.to) ? t.to : 1, s = 0; s <= l; s++) i[s] = e({}, a, r(o[s]) ? o[s] : {});
	return i;
}
function O(e, t) {
	let n = t.before, r = t.idRoot, i = t.mapIdToNode[r], a = t.levelIsConstant !== !1, o = t.points[e.i], s = o && o.options || {}, l = [], u = 0;
	e.levelDynamic = e.level - (a ? 0 : i.level), e.name = (o && o.name) ?? "", e.visible = r === e.id || t.visible === !0, typeof n == "function" && (e = n(e, t)), e.children.forEach((n, r) => {
		let i = c({}, t);
		c(i, {
			index: r,
			siblings: e.children.length,
			visible: e.visible
		}), n = O(n, i), l.push(n), n.visible && (u += n.val);
	});
	let d = s.value ?? u;
	return e.visible = d >= 0 && (u > 0 || e.visible), e.children = l, e.childrenTotal = u, e.isLeaf = e.visible && !u, e.val = d, e;
}
function k(e) {
	let t, n;
	return r(e) && (n = r(e.options) ? e.options : {}, t = e.rootNode ?? n.rootId ?? "", r(e.userOptions) && (e.userOptions.rootId = t), e.rootNode = t), t;
}
function A(e, t) {
	let { chart: n, options: r } = e, { nodeDistance: a = 0, nodeWidth: o = 0 } = r, { plotSizeX: s = 1 } = n;
	if (o === "auto") {
		if (typeof a == "string" && /%$/.test(a)) return s / (t + parseFloat(a) / 100 * (t - 1));
		let e = Number(a);
		return (s + e) / (t || 1) - e;
	}
	return i(o, s);
}
var j = {
	getColor: E,
	getLevelOptions: D,
	getNodeWidth: A,
	setTreeValues: O,
	updateRootId: k
}, { column: M, line: N } = h.seriesTypes, { parse: P } = u, { getLevelOptions: F, getNodeWidth: I } = j;
v(g);
var L = class n extends M {
	static getDLOptions(t) {
		let n = r(t.optionsPoint) ? t.optionsPoint.dataLabels : {}, i = r(t.level) ? t.level.dataLabels : {};
		return e({ style: {} }, i, n, { zIndex: i?.zIndex });
	}
	createNodeColumns() {
		let e = [];
		for (let t of this.nodes) t.setNodeColumn(), e[t.column] || (e[t.column] = _.compose([], this)), e[t.column].push(t);
		for (let t = 0; t < e.length; t++) e[t] === void 0 && (e[t] = _.compose([], this));
		return e;
	}
	order(e, t, n) {
		let r = this;
		if (n ||= /* @__PURE__ */ new Set(), e.level === void 0 || e.level < t) {
			e.level = t, n.add(e);
			for (let i of e.linksFrom) i.toNode && !n.has(i.toNode) && r.order(i.toNode, t + 1, n);
			n.delete(e);
		}
	}
	generatePoints() {
		if (S.generatePoints.apply(this, arguments), this.orderNodes) {
			for (let e of this.nodes) e.linksTo.length === 0 && this.order(e, 0);
			o(this.nodes, (e, t) => e.level - t.level);
		}
	}
	getNodePadding() {
		let e = this.options.nodePadding || 0;
		if (this.nodeColumns) {
			let t = this.nodeColumns.reduce((e, t) => Math.max(e, t.length), 0);
			t * e > this.chart.plotSizeY && (e = this.chart.plotSizeY / t);
		}
		return e;
	}
	hasData() {
		return !!this.dataTable.rowCount;
	}
	pointAttribs(e, t) {
		if (!e) return {};
		let n = this, r = e.isNode ? e.level : e.fromNode.level, i = n.mapOptionsToLevel[r || 0] || {}, a = e.options, o = i.states && i.states[t || ""] || {}, s = [
			"colorByPoint",
			"borderColor",
			"borderWidth",
			"linkOpacity",
			"opacity"
		].reduce((e, t) => (e[t] = o[t] ?? a[t] ?? i[t] ?? n.options[t], e), {}), c = o.color ?? a.color ?? (s.colorByPoint ? e.color : i.color);
		return e.isNode ? {
			fill: c,
			stroke: s.borderColor,
			"stroke-width": s.borderWidth,
			opacity: s.opacity
		} : {
			fill: c,
			"fill-opacity": s.linkOpacity
		};
	}
	drawTracker() {
		M.prototype.drawTracker.call(this, this.points), M.prototype.drawTracker.call(this, this.nodes);
	}
	drawPoints() {
		M.prototype.drawPoints.call(this, this.points), M.prototype.drawPoints.call(this, this.nodes);
	}
	drawDataLabels() {
		M.prototype.drawDataLabels.call(this, this.points), M.prototype.drawDataLabels.call(this, this.nodes);
	}
	translate() {
		this.generatePoints(), this.nodeColumns = this.createNodeColumns();
		let e = this, t = this.chart, n = this.options, r = this.nodeColumns, i = r.length;
		this.nodeWidth = I(this, i), this.nodePadding = this.getNodePadding(), this.translationFactor = r.reduce((t, n) => Math.min(t, n.sankeyColumn.getTranslationFactor(e)), Infinity), this.colDistance = (t.plotSizeX - this.nodeWidth - n.borderWidth) / Math.max(1, r.length - 1), e.mapOptionsToLevel = F({
			from: 1,
			levels: n.levels,
			to: r.length - 1,
			defaults: {
				borderColor: n.borderColor,
				borderRadius: n.borderRadius,
				borderWidth: n.borderWidth,
				color: e.color,
				colorByPoint: n.colorByPoint,
				levelIsConstant: !0,
				linkColor: n.linkColor,
				linkLineWidth: n.linkLineWidth,
				linkOpacity: n.linkOpacity,
				states: n.states
			}
		});
		for (let t of r) for (let n of t) e.translateNode(n, t);
		for (let t of this.nodes) for (let n of t.linksFrom) (n.weight || n.isNull) && n.to && (e.translateLink(n), n.allowShadow = !1);
	}
	getY(e, t, n, r) {
		let i = (t.offset(e, n) || 0) * this.translationFactor;
		return Math.min(t.nodeY + i, t.nodeY + (t.shapeArgs && t.shapeArgs.height || 0) - r);
	}
	translateLink(e, t) {
		let n = e.fromNode, r = e.toNode, i = this.chart, { inverted: a } = i, o = this.translationFactor, s = this.options, c = e.linkColorMode ?? s.linkColorMode, l = (i.inverted ? -this.colDistance : this.colDistance) * s.curveFactor, u = n.nodeX, d = r.nodeX, f = e.outgoing, p = Math.max((e.weight || 0) * o, this.options.minLinkWidth || 0), m = this.getY(e, n, "linksFrom", p), h = t || this.getY(e, r, "linksTo", p), g = this.nodeWidth, _ = d > u + g;
		if (i.inverted && (m = i.plotSizeY - m, h = (i.plotSizeY || 0) - h, g = -g, p = -p, _ = u > d), e.shapeType = "path", e.linkBase = [
			m,
			m + p,
			h,
			h + p
		], _ && typeof h == "number") e.shapeArgs = { d: [
			[
				"M",
				u + g,
				m
			],
			[
				"C",
				u + g + l,
				m,
				d - l,
				h,
				d,
				h
			],
			[
				"L",
				d + (f ? g : 0),
				h + p / 2
			],
			[
				"L",
				d,
				h + p
			],
			[
				"C",
				d - l,
				h + p,
				u + g + l,
				m + p,
				u + g,
				m + p
			],
			["Z"]
		] };
		else if (typeof h == "number") {
			let t = i.plotHeight - m - p, n = d - 20 - p, r = d - 20, a = d, o = u + g, s = o + 20, c = s + p, l = m, f = m + p, _ = f + 20, v = _ + t, y = v + 20, b = y + p, x = h, S = x + p, C = S + 20, w = f - p * .7, T = y + p * .7, E = S - p * .7, D = a - p * .7, O = o + p * .7;
			e.shapeArgs = { d: [
				[
					"M",
					o,
					l
				],
				[
					"C",
					O,
					l,
					c,
					w,
					c,
					_
				],
				[
					"L",
					c,
					v
				],
				[
					"C",
					c,
					T,
					O,
					b,
					o,
					b
				],
				[
					"L",
					a,
					b
				],
				[
					"C",
					D,
					b,
					n,
					T,
					n,
					v
				],
				[
					"L",
					n,
					C
				],
				[
					"C",
					n,
					E,
					D,
					x,
					a,
					x
				],
				[
					"L",
					a,
					S
				],
				[
					"C",
					r,
					S,
					r,
					S,
					r,
					C
				],
				[
					"L",
					r,
					v
				],
				[
					"C",
					r,
					y,
					r,
					y,
					a,
					y
				],
				[
					"L",
					o,
					y
				],
				[
					"C",
					s,
					y,
					s,
					y,
					s,
					v
				],
				[
					"L",
					s,
					_
				],
				[
					"C",
					s,
					f,
					s,
					f,
					o,
					f
				],
				["Z"]
			] };
		}
		if (e.dlBox = {
			x: u + (d - u + g) / 2,
			y: m + (h - m) / 2,
			height: p,
			width: 0
		}, e.tooltipPos = i.inverted ? [i.plotSizeY - e.dlBox.y - p / 2, i.plotSizeX - e.dlBox.x] : [e.dlBox.x, e.dlBox.y + p / 2], e.y = e.plotY = 1, e.x = e.plotX = 1, !e.options.color) {
			if (c === "from") e.color = n.color;
			else if (c === "to") e.color = r.color;
			else if (c === "gradient") {
				let t = P(n.color).get(), i = P(r.color).get();
				e.color = {
					linearGradient: {
						x1: 1,
						x2: 0,
						y1: 0,
						y2: 0
					},
					stops: [[0, a ? t : i], [1, a ? i : t]]
				};
			}
		}
	}
	translateNode(e, a) {
		let o = this.translationFactor, s = this.chart, c = this.options, { borderRadius: l, borderWidth: u = 0 } = c, d = e.getSum(), p = Math.max(Math.round(d * o), this.options.minLinkWidth), m = Math.round(this.nodeWidth), h = a.sankeyColumn.offset(e, o), g = t(h.absoluteTop ?? a.sankeyColumn.top(o) + h.relativeTop, u), _ = t(this.colDistance * e.column + u / 2, u) + i(e.options[s.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, m), v = s.inverted ? s.plotSizeX - _ : _;
		if (e.sum = d, d) {
			e.shapeType = "roundedRect", e.nodeX = v, e.nodeY = g;
			let t = v, a = g, o = e.options.width || c.width || m, u = e.options.height || c.height || p, d = f(i((r(l) ? l.radius : l) || 0, o), 0, p / 2);
			s.inverted && (t = v - m, a = s.plotSizeY - g - p, o = e.options.height || c.height || m, u = e.options.width || c.width || p), e.dlOptions = {
				...n.getDLOptions({
					level: this.mapOptionsToLevel[e.level],
					optionsPoint: e.options
				}),
				zIndex: void 0
			}, delete e.dlOptions.zIndex, e.plotX = 1, e.plotY = 1, e.tooltipPos = s.inverted ? [s.plotSizeY - a - u / 2, s.plotSizeX - t - o / 2] : [t + o / 2, a + u / 2], e.shapeArgs = {
				x: t,
				y: a,
				width: o,
				height: u,
				r: d,
				display: e.hasShape() ? "" : "none"
			};
		} else e.dlOptions = { enabled: !1 };
	}
};
L.defaultOptions = e(M.defaultOptions, T), S.compose(w, L), c(L.prototype, {
	animate: N.prototype.animate,
	createNode: S.createNode,
	forceDL: !0,
	invertible: !0,
	isCartesian: !1,
	orderNodes: !0,
	noSharedTooltip: !0,
	pointArrayMap: [
		"from",
		"to",
		"weight"
	],
	pointClass: w,
	searchPoint: l.noop
}), h.registerSeriesType("sankey", L);
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/sankey.src.js
var R = l;
//#endregion
export { R as default };
