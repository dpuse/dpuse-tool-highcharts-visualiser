import { K as e, O as t, W as n, c as r, h as i, k as a, lt as o, st as s, t as c, tt as l, w as u } from "./AnimationUtilities-HCzBkGkl.js";
//#region node_modules/highcharts/es-modules/Extensions/PatternFill.js
var { getOptions: d } = r, f = m();
function p(e, t, n) {
	let r = t.prototype.pointClass, o = r.prototype;
	o.calculatePatternDimensions || (i(e, "endResize", _), i(e, "redraw", v), a(o, { calculatePatternDimensions: S }), i(r, "afterInit", y), i(t, "render", x), s(t.prototype, "getColor", w), i(t, "afterRender", T), i(t, "mapZoomComplete", T), a(n.prototype, { addPattern: C }), i(n, "complexColor", b));
}
function m() {
	let e = [], t = d().colors, n = 0;
	for (let r of [
		"M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5",
		"M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5",
		"M 2 0 L 2 5 M 4 0 L 4 5",
		"M 0 2 L 5 2 M 0 4 L 5 4",
		"M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"
	]) e.push({
		path: r,
		color: t[n++],
		width: 5,
		height: 5,
		patternTransform: "scale(1.4 1.4)"
	});
	n = 5;
	for (let r of [
		"M 0 0 L 5 10 L 10 0",
		"M 3 3 L 8 3 L 8 8 L 3 8 Z",
		"M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0",
		"M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
		"M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"
	]) e.push({
		path: r,
		color: t[n++],
		width: 10,
		height: 10
	});
	return e;
}
function h(t, n) {
	let r = e({}, t), i = n.getBBox ? n.getBBox() : {
		x: 0,
		y: 0,
		width: 32,
		height: 32
	};
	return r._x = i.x, r._y = i.y, r;
}
function g(e, t) {
	let n = JSON.stringify(e), r = n.length || 0, i = 0, a = 0, o, s;
	if (t) {
		s = Math.max(Math.floor(r / 500), 1);
		for (let e = 0; e < r; e += s) i += n.charCodeAt(e);
		i &= i;
	}
	for (; a < r; ++a) o = n.charCodeAt(a), i = (i << 5) - i + o, i &= i;
	return i.toString(16).replace("-", "1");
}
function _() {
	if (this.renderer && (this.renderer.defIds || []).filter((e) => e && e.indexOf && e.indexOf("highcharts-pattern-") === 0).length) {
		for (let e of this.series) if (e.visible) for (let t of e.points) {
			let e = t.options && t.options.color;
			e && e.pattern && (e.pattern._width = "defer", e.pattern._height = "defer");
		}
		this.redraw(!1);
	}
}
function v() {
	let e = {}, n = this.renderer, r = (n.defIds || []).filter((e) => e.indexOf && e.indexOf("highcharts-pattern-") === 0);
	if (r.length) {
		[].forEach.call(this.renderTo.querySelectorAll("[color^=\"url(\"], [fill^=\"url(\"], [stroke^=\"url(\"]"), (t) => {
			let r = t.getAttribute("fill") || t.getAttribute("color") || t.getAttribute("stroke");
			if (r) {
				let t = r.replace(n.url, "").replace("url(#", "").replace(")", "");
				e[t] = !0;
			}
		});
		for (let i of r) e[i] || (t(n.defIds, i), n.patternElements[i] && (n.patternElements[i].destroy(), delete n.patternElements[i]));
	}
}
function y() {
	let t = this, n = t.options.color;
	n && (n.pattern || n.patternIndex !== void 0) && (typeof n.pattern?.path == "string" && (n.pattern.path = { d: n.pattern.path }), t.color = t.options.color = e(t.series.options.color, n));
}
function b(t) {
	let n = t.args[0], r = t.args[1], i = t.args[2], a = this.chartIndex || 0, o = n.pattern, s = "var(--highcharts-neutral-color-80)";
	if (n.patternIndex !== void 0 && f && (o = f[n.patternIndex]), !o) return !0;
	if (o.image || typeof o.path == "string" || o.path && o.path.d) {
		let t = i.parentNode && i.parentNode.getAttribute("class");
		t &&= t.indexOf("highcharts-legend") > -1, (o._width === "defer" || o._height === "defer") && S.call({ graphic: { element: i } }, o), (t || !o.id || o.anchorToPoint) && (o = e({}, o), o.anchorToPoint && (o = h(o, i)), o.id = "highcharts-pattern-" + a + "-" + g(o) + g(o, !0) + (o.anchorToPoint ? "-anchored" : "")), this.addPattern(o, !this.forExport && (o.animation ?? this.globalAnimation ?? { duration: 100 })), s = `url(${this.url}#${o.id + (this.forExport ? "-export" : "")})`;
	} else s = o.color || s;
	return i.setAttribute(r, s), n.toString = function() {
		return s;
	}, !1;
}
function x() {
	let e = this.chart.isResizing;
	if (this.isDirtyData || e || !this.chart.hasRendered) for (let t of this.points) {
		let n = t.options && t.options.color;
		n && n.pattern && (e && !(t.shapeArgs && t.shapeArgs.width && t.shapeArgs.height) ? (n.pattern._width = "defer", n.pattern._height = "defer") : t.calculatePatternDimensions(n.pattern));
	}
}
function S(e) {
	if (e.width && e.height && !e.anchorToPoint) return;
	let t = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {}, n = this.shapeArgs;
	if (n && (t.width = n.width || t.width, t.height = n.height || t.height, t.x = n.x || t.x, t.y = n.y || t.y), e.image) {
		if (!t.width || !t.height) {
			e._width = "defer", e._height = "defer";
			let t = this.series.chart.mapView && this.series.chart.mapView.getSVGTransform().scaleY;
			u(t) && t < 0 && (e._inverted = !0);
			return;
		}
		e.aspectRatio && (t.aspectRatio = t.width / t.height, e.aspectRatio > t.aspectRatio ? t.aspectWidth = t.height * e.aspectRatio : t.aspectHeight = t.width / e.aspectRatio), e._width = e.width || Math.ceil(t.aspectWidth || t.width), e._height = e.height || Math.ceil(t.aspectHeight || t.height);
	}
	e.anchorToPoint ? (e._x = 0, e._y = 0, e.width || (e._width = t.width), e.height || (e._height = t.height)) : (e.width || (e._x = e.x || 0, e._x += t.x - Math.round(t.aspectWidth ? Math.abs(t.aspectWidth - t.width) / 2 : 0)), e.height || (e._y = e.y || 0, e._y += t.y - Math.round(t.aspectHeight ? Math.abs(t.aspectHeight - t.height) / 2 : 0)));
}
function C(e, t) {
	let r = t ?? !0, i = c(r), a = e.color || "var(--highcharts-neutral-color-80)", o = e.height || (typeof e._height == "number" ? e._height : 0) || 32, s = e.width || (typeof e._width == "number" ? e._width : 0) || 32, u = e.anchorToPoint ? "userSpaceOnUse" : e.patternContentUnits || "userSpaceOnUse", d = (e) => this.rect(0, 0, s, o).attr({ fill: e }).add(g), f, p = e.id, m;
	if (p || (this.idCounter = this.idCounter || 0, p = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (p += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(p) > -1) return;
	this.defIds.push(p);
	let h = {
		id: p,
		patternUnits: "userSpaceOnUse",
		patternContentUnits: u,
		width: s,
		height: o,
		x: e._x || e.x || 0,
		y: e._y || e.y || 0
	};
	e._inverted && (h.patternTransform = "scale(1, -1)", e.patternTransform && (e.patternTransform += " scale(1, -1)")), e.patternTransform && (h.patternTransform = e.patternTransform);
	let g = this.createElement("pattern").attr(h).add(this.defs);
	return g.id = p, e.path ? (m = n(e.path) ? e.path : { d: e.path }, e.backgroundColor && d(e.backgroundColor), f = { d: m.d }, this.styledMode || (f.stroke = m.stroke || a, f["stroke-width"] = m.strokeWidth ?? 2, f.fill = m.fill || "none"), m.transform && (f.transform = m.transform), this.createElement("path").attr(f).add(g), g.color = a) : e.image && (r ? this.image(e.image, 0, 0, s, o, function() {
		this.animate({ opacity: e.opacity ?? 1 }, i), l(this.element, "load");
	}).attr({ opacity: 0 }).add(g) : this.image(e.image, 0, 0, s, o).add(g)), !(e.image && r) && e.opacity !== void 0 && [].forEach.call(g.element.childNodes, (t) => {
		t.setAttribute("opacity", e.opacity);
	}), this.patternElements = this.patternElements || {}, this.patternElements[p] = g, g;
}
function w(e) {
	let t = this.options.color;
	t && t.pattern && !t.pattern.color ? (delete this.options.color, e.apply(this, [].slice.call(arguments, 1)), t.pattern.color = this.color, this.color = this.options.color = t) : e.apply(this, [].slice.call(arguments, 1));
}
function T() {
	let e = this;
	if (!e.chart?.mapView) return;
	let t = e.chart.renderer, n = t.patternElements;
	t.defIds?.length && n && e.points.filter(function(e) {
		let t = e;
		return t.graphic ? (t.graphic.element.hasAttribute("fill") || t.graphic.element.hasAttribute("color") || t.graphic.element.hasAttribute("stroke")) && !t.options.color?.pattern?.image && !!t.group?.scaleX && !!t.group?.scaleY : !1;
	}).map(function(e) {
		let n = e;
		return {
			id: (n.graphic?.element.getAttribute("fill") || n.graphic?.element.getAttribute("color") || n.graphic?.element.getAttribute("stroke") || "").replace(t.url, "").replace("url(#", "").replace(")", ""),
			x: n.group?.scaleX || 1,
			y: n.group?.scaleY || 1
		};
	}).filter(function(e, t, n) {
		return e.id !== "" && e.id.indexOf("highcharts-pattern-") !== -1 && !n.some(function(n, r) {
			return n.id === e.id && r < t;
		});
	}).forEach(function(e) {
		let t = e.id;
		n[t].scaleX = 1 / e.x, n[t].scaleY = 1 / e.y, n[t].updateTransform("patternTransform");
	});
}
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/pattern-fill.src.js
var E = o;
E.patterns = f, p(E.Chart, E.Series, E.SVGRenderer);
//#endregion
