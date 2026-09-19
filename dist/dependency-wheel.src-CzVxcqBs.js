import { K as e, X as t, et as n, k as r, lt as i, st as a, t as o } from "./AnimationUtilities-HCzBkGkl.js";
import { t as s } from "./SeriesRegistry-BO6tW97M.js";
import { t as c } from "./SVGElement-DQ_bI6Wv.js";
import { t as l } from "./BorderRadius-DsUUgNnR.js";
import { n as u, t as d } from "./TextPath-D9gJwxEx.js";
//#region node_modules/highcharts/es-modules/Series/DependencyWheel/DependencyWheelPoint.js
var { sankey: { prototype: { pointClass: f } } } = s.seriesTypes, p = class extends f {
	getSumTo() {
		let e = 0;
		for (let t of this.linksFrom) e += t.weightTo || t.weight || 0;
		for (let t of this.linksTo) e += t.weight || 0;
		return e;
	}
	getDataLabelPath(e) {
		let n = this, r = n.series.chart.renderer, i = n.shapeArgs, o = n.angle < 0 || n.angle > Math.PI, s = i.start || 0, c = i.end || 0;
		return n.dataLabelPath ? (n.dataLabelPath = n.dataLabelPath.destroy(), delete n.dataLabelPath) : a(e, "destroy", function(e) {
			return n.dataLabelPath &&= n.dataLabelPath.destroy(), e.call(this);
		}), n.dataLabelPath = r.arc({
			open: !0,
			longArc: Math.abs(Math.abs(s) - Math.abs(c)) < Math.PI ? 0 : 1
		}).attr({
			x: i.x,
			y: i.y,
			r: (i.r || 0) + t(e.options?.distance || 0),
			start: o ? s : c,
			end: o ? c : s,
			clockwise: +o
		}).add(r.defs), n.dataLabelPath;
	}
	isValid() {
		return !0;
	}
}, m = {
	center: [null, null],
	curveFactor: .6,
	startAngle: 0,
	dataLabels: {
		allowOverlap: !0,
		textPath: {
			enabled: !1,
			attributes: { dy: 5 }
		}
	},
	tooltip: { pointFormat: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>{#if point.weightTo}{point.toNode.name} → {point.fromNode.name}: <b>{point.weightTo}</b><br/>{/if}" }
}, { deg2rad: h } = i, { pie: g, sankey: _ } = s.seriesTypes;
d(c);
var v = class extends _ {
	animate(e) {
		let t = this;
		if (!e) {
			let e = o(t.options.animation).duration / 2 / t.nodes.length, n = 0;
			for (let r of t.nodes) {
				let t = r.graphic;
				t && (t.attr({ opacity: 0 }), setTimeout(() => {
					r.graphic && r.graphic.animate({ opacity: 1 }, { duration: e });
				}, e * n++));
			}
			for (let e of t.points) {
				let n = e.graphic;
				!e.isNode && n && n.attr({ opacity: 0 }).animate({ opacity: 1 }, t.options.animation);
			}
		}
	}
	createNode(e) {
		let t = super.createNode(e);
		return t.getSum = () => {
			let e = 0;
			for (let n of t.linksFrom) e += n.weight || 0;
			for (let n of t.linksTo) e += n.weightTo || n.weight || 0;
			return e;
		}, t.offset = (e) => {
			let n = (e) => e.fromNode === t ? e.toNode : e.fromNode, r = 0, i = t.linksFrom.concat(t.linksTo), a;
			i.sort((e, t) => n(e).index - n(t).index);
			for (let e = 0; e < i.length; e++) if (n(i[e]).index > t.index) {
				i = i.slice(0, e).reverse().concat(i.slice(e).reverse()), a = !0;
				break;
			}
			a || i.reverse();
			for (let n = 0; n < i.length; n++) {
				if (i[n] === e) return r;
				let a = i[n].weight || 0;
				r += i[n].to === t.id && i[n].weightTo || a;
			}
		}, t;
	}
	createNodeColumns() {
		let e = this, t = [u.compose([], e)];
		for (let n of e.nodes) n.column = 0, t[0].push(n);
		return t;
	}
	getNodePadding() {
		return this.options.nodePadding / Math.PI;
	}
	translate() {
		let e = this, t = e.options, r = 2 * Math.PI / (e.chart.plotHeight + e.getNodePadding()), i = e.getCenter(), a = ((t.startAngle || 0) - 90) * h, o = l(t.borderRadius).radius;
		super.translate();
		for (let e of this.nodeColumns[0]) if (e.sum) {
			let s = e.shapeArgs, c = i[0], l = i[1], u = i[2] / 2, d = t.nodeWidth === "auto" ? 20 : t.nodeWidth, f = u - n(d || 0, u), p = a + r * (s.y || 0), m = a + r * ((s.y || 0) + (s.height || 0));
			e.angle = p + (m - p) / 2, e.shapeType = "arc", e.shapeArgs = {
				x: c,
				y: l,
				r: u,
				innerR: f,
				start: p,
				end: m,
				borderRadius: o
			}, e.dlBox = {
				x: c + Math.cos((p + m) / 2) * (u + f) / 2,
				y: l + Math.sin((p + m) / 2) * (u + f) / 2,
				width: 1,
				height: 1
			};
			for (let n of e.linksFrom) if (n.linkBase) {
				let e, i, o = n.linkBase.map((o, s) => {
					let u = r * o, d = Math.cos(a + u) * (f + 1), p = Math.sin(a + u) * (f + 1);
					return e = t.curveFactor || 0, i = Math.abs(n.linkBase[3 - s] * r - u), i > Math.PI && (i = 2 * Math.PI - i), i *= f, i < f && (e *= i / f), {
						x: c + d,
						y: l + p,
						cpX: c + (1 - e) * d,
						cpY: l + (1 - e) * p
					};
				});
				n.shapeArgs = { d: [
					[
						"M",
						o[0].x,
						o[0].y
					],
					[
						"A",
						f,
						f,
						0,
						0,
						1,
						o[1].x,
						o[1].y
					],
					[
						"C",
						o[1].cpX,
						o[1].cpY,
						o[2].cpX,
						o[2].cpY,
						o[2].x,
						o[2].y
					],
					[
						"A",
						f,
						f,
						0,
						0,
						1,
						o[3].x,
						o[3].y
					],
					[
						"C",
						o[3].cpX,
						o[3].cpY,
						o[0].cpX,
						o[0].cpY,
						o[0].x,
						o[0].y
					]
				] };
			}
		}
	}
	translateLink(e) {
		let t = Math.max((e.weightTo || e.weight || 0) * this.translationFactor, this.options.minLinkWidth || 0), n = this.getY(e, e.toNode, "linksTo", t);
		super.translateLink(e, n), e.linkBase[3] = n + t;
	}
	translateNode(e, t) {
		super.translateNode(e, t), e.sumTo = e.getSumTo();
	}
};
v.defaultOptions = e(_.defaultOptions, m), r(v.prototype, {
	orderNodes: !1,
	pointArrayMap: [
		"from",
		"to",
		"weight",
		"weightTo"
	],
	getCenter: g.prototype.getCenter
}), v.prototype.pointClass = p, s.registerSeriesType("dependencywheel", v);
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/dependency-wheel.src.js
var y = i;
//#endregion
export { y as default };
