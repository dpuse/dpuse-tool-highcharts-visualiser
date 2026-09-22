import { K as e, W as t, c as n, et as r, h as i, k as a, lt as o } from "./AnimationUtilities-eb22eIjK.js";
//#region node_modules/highcharts/es-modules/Extensions/BorderRadius.js
var { defaultOptions: s } = n, { noop: c } = o, l = {
	radius: 0,
	scope: "stack",
	where: void 0
}, u = c, d = c;
function f(e, t, n) {
	let r = e[t], i = e[t + 1];
	i[0] === "Z" && (i = e[0]);
	let a, o, s;
	if ((r[0] === "M" || r[0] === "L") && i[0] === "A" ? (a = r, o = i, s = !0) : r[0] === "A" && (i[0] === "M" || i[0] === "L") && (a = i, o = r), a && o && o.params) {
		let r = o[1], i = o[5], c = o.params, { start: l, end: u, cx: d, cy: f } = c, p = i ? r - n : r + n, m = p ? Math.asin(n / p) : 0, h = i ? m : -m, g = Math.cos(m) * p;
		s ? (c.start = l + h, a[1] = d + g * Math.cos(l), a[2] = f + g * Math.sin(l), e.splice(t + 1, 0, [
			"A",
			n,
			n,
			0,
			0,
			1,
			d + r * Math.cos(c.start),
			f + r * Math.sin(c.start)
		])) : (c.end = u - h, o[6] = d + r * Math.cos(c.end), o[7] = f + r * Math.sin(c.end), e.splice(t + 1, 0, [
			"A",
			n,
			n,
			0,
			0,
			1,
			d + g * Math.cos(u),
			f + g * Math.sin(u)
		])), o[4] = Math.abs(c.end - c.start) < Math.PI ? 0 : 1;
	}
}
function p(e, t, n, i, a = {}) {
	let o = u(e, t, n, i, a), { brStart: s = !0, brEnd: c = !0, innerR: l = 0, r: d = n, start: p = 0, end: m = 0 } = a;
	if (a.open || !a.borderRadius) return o;
	let h = m - p, _ = Math.sin(h / 2), v = Math.max(Math.min(r(g(a.borderRadius).radius, d - l), (d - l) / 2, d * _ / (1 + _)), 0), y = Math.min(v, h / Math.PI * 2 * l), b = o.length - 1;
	for (; b--;) (s || b !== 0 && b !== 3) && (c || b !== 1 && b !== 2) && f(o, b, b > 1 ? y : v);
	return o;
}
function m() {
	if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
		let { options: e, yAxis: n } = this, i = e.stacking === "percent", o = s.plotOptions?.[this.type]?.borderRadius, c = g(e.borderRadius, t(o) ? o : {}), l = n.options.reversed;
		for (let t of this.points) {
			let { shapeArgs: o } = t;
			if (t.shapeType === "roundedRect" && o) {
				let { width: s = 0, height: u = 0, y: d = 0 } = o, f = d, p = u;
				if (c.scope === "stack" && t.stackTotal) {
					let r = n.translate(i ? 100 : t.stackTotal, !1, !0, !1, !0), a = n.translate(e.threshold || 0, !1, !0, !1, !0), o = this.crispCol(0, Math.min(r, a), 0, Math.abs(r - a));
					f = o.y, p = o.height;
				}
				let m = (t.negative ? -1 : 1) * (l ? -1 : 1) == -1, h = c.where;
				!h && this.is("waterfall") && Math.abs((t.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (h = "all"), h ||= "end";
				let g = Math.min(r(c.radius, s), s / 2, h === "all" ? p / 2 : Infinity) || 0;
				h === "end" && (m && (f -= g), p += g), a(o, {
					brBoxHeight: p,
					brBoxY: f,
					r: g
				});
			}
		}
	}
}
function h(e, t, n) {
	let r = e.types.pie;
	if (!t.symbolCustomAttribs.includes("borderRadius")) {
		let a = n.prototype.symbols;
		i(e, "afterColumnTranslate", m, { order: 9 }), i(r, "afterTranslate", _), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), u = a.arc, d = a.roundedRect, a.arc = p, a.roundedRect = v;
	}
}
function g(n, r) {
	return t(n) || (n = { radius: n || 0 }), e(l, r, n);
}
function _() {
	let e = g(this.options.borderRadius);
	for (let t of this.points) {
		let n = t.shapeArgs;
		n && (n.borderRadius = r(e.radius, (n.r || 0) - (n.innerR || 0)));
	}
}
function v(e, t, n, r, i = {}) {
	let a = d(e, t, n, r, i), { r: o = 0, brBoxHeight: s = r, brBoxY: c = t } = i, l = t - c, u = c + s - (t + r), f = l - o > -.1 ? 0 : o, p = u - o > -.1 ? 0 : o, m = Math.max(f && l, 0), h = Math.max(p && u, 0), g = [e + f, t], _ = [e + n - f, t], v = [e + n, t + f], y = [e + n, t + r - p], b = [e + n - p, t + r], x = [e + p, t + r], S = [e, t + r - p], C = [e, t + f], w = (e, t) => Math.sqrt(e ** 2 - t ** 2);
	if (m) {
		let e = w(f, f - m);
		g[0] -= e, _[0] += e, v[1] = C[1] = t + f - m;
	}
	if (r < f - m) {
		let i = w(f, f - m - r);
		v[0] = y[0] = e + n - f + i, b[0] = Math.min(v[0], b[0]), x[0] = Math.max(y[0], x[0]), S[0] = C[0] = e + f - i, v[1] = C[1] = t + r;
	}
	if (h) {
		let e = w(p, p - h);
		b[0] += e, x[0] -= e, y[1] = S[1] = t + r - p + h;
	}
	if (r < p - h) {
		let i = w(p, p - h - r);
		v[0] = y[0] = e + n - p + i, _[0] = Math.min(v[0], _[0]), g[0] = Math.max(y[0], g[0]), S[0] = C[0] = e + p - i, y[1] = S[1] = t;
	}
	return a.length = 0, a.push(["M", ...g], ["L", ..._], [
		"A",
		f,
		f,
		0,
		0,
		1,
		...v
	], ["L", ...y], [
		"A",
		p,
		p,
		0,
		0,
		1,
		...b
	], ["L", ...x], [
		"A",
		p,
		p,
		0,
		0,
		1,
		...S
	], ["L", ...C], [
		"A",
		f,
		f,
		0,
		0,
		1,
		...g
	], ["Z"]), a;
}
//#endregion
export { h as n, g as t };
