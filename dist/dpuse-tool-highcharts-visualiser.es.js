import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as A, c as j, ct as M, d as ee, et as N, f as P, g as F, h as I, i as te, it as ne, j as L, k as R, l as re, lt as z, m as ie, n as ae, nt as oe, o as se, ot as ce, p as le, q as ue, r as de, rt as B, s as fe, st as pe, t as me, tt as V, u as H, v as U, w as W, x as he, y as G, z as K } from "./AnimationUtilities-eb22eIjK.js";
import { i as q, n as ge, r as J, t as Y } from "./SeriesRegistry-CDI1sm9L.js";
import { t as _e } from "./SVGElement-z7ENyQ6Y.js";
import { a as ve, i as ye, n as be, o as xe, r as Se, s as Ce, t as we } from "./CenteredUtilities-WO6ukK5m.js";
import { n as Te, t as Ee } from "./BorderRadius-Cois3N8q.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/RendererUtilities.js
var De;
(function(t) {
	function n(t, r, i) {
		let a = t, o = a.reducedLen || r, s = (e, t) => (t.rank || 0) - (e.rank || 0), c = (e, t) => e.target - t.target, l = [], u = t.length, d = [], f = l.push, p, m = !0, h, g, _ = 0, v;
		for (p = u; p--;) _ += t[p].size;
		if (_ > o) {
			if (ne(t, s), v = t[0].rank === t[t.length - 1].rank, v) {
				let n = [[0, u - 1]];
				for (; n.length && _ > o;) {
					let r = n.shift();
					if (!r) break;
					p = Math.floor((r[0] + r[1]) / 2), h = t[p], e(d, p) && (_ -= h.size), r[0] < p && n.push([r[0], p - 1]), p < r[1] && n.push([p + 1, r[1]]);
				}
			} else for (p = u - 1; _ > o && p >= 0;) h = t[p], e(d, p) && (_ -= h.size), p--;
			d.sort((e, t) => t - e).forEach((e) => f.apply(l, t.splice(e, 1)));
		}
		for (ne(t, c), t = t.map((e) => ({
			size: e.size,
			targets: [e.target],
			align: e.align ?? .5
		})); m;) {
			for (p = t.length; p--;) h = t[p], g = (Math.min.apply(0, h.targets) + Math.max.apply(0, h.targets)) / 2, h.pos = G(g - h.size * h.align, 0, r - h.size);
			for (p = t.length, m = !1; p--;) p > 0 && t[p - 1].pos + t[p - 1].size > t[p].pos && (t[p - 1].size += t[p].size, t[p - 1].targets = t[p - 1].targets.concat(t[p].targets), t[p - 1].align = .5, t[p - 1].pos + t[p - 1].size > r && (t[p - 1].pos = r - t[p - 1].size), t.splice(p, 1), m = !0);
		}
		return f.apply(a, l), p = 0, t.some((e) => {
			let t = 0;
			return (e.targets || []).some(() => (a[p].pos = e.pos + t, i !== void 0 && Math.abs(a[p].pos - a[p].target) > i ? (a.slice(0, p + 1).forEach((e) => delete e.pos), a.reducedLen = (a.reducedLen || r) - r * .1, a.reducedLen > r * .1 && n(a, r, i), !0) : (t += a[p].size, p++, !1)));
		}), ne(a, c), a;
	}
	t.distribute = n;
})(De ||= {});
var Oe = De, { charts: ke } = z, Ae = [
	"#2caffe",
	"#544fc5",
	"#00e272",
	"#fe6a35",
	"#6b8abc",
	"#d568fb",
	"#2ee0ca",
	"#fa4b42",
	"#feb56a",
	"#91e8e1"
], je = [
	null,
	"#00e272",
	"#efdf00"
], Me = (e, t) => {
	let n = (e) => {
		let n = "";
		return u(t.light, (r, i) => {
			n += e && r !== t.dark[i] ? `  ${i}: light-dark(${r}, ${t.dark[i]});\n` : `  ${i}: ${r};\n`;
		}), n;
	}, r = n(), i = n(!0);
	return `${e || ":root"} {
${r}
}
@supports (color: light-dark(#fff, #000)) {
  ${e || ":root"} {
${i}
  }
}
.highcharts-container {
  color-scheme: light dark;
}
.highcharts-light .highcharts-container {
  color-scheme: light;
}
.highcharts-dark .highcharts-container {
  color-scheme: dark;
}`;
}, Ne = class {
	constructor(e, t) {
		this.defaultOptions = M, this.options = d(M), this.cssVars = {
			light: {},
			dark: {}
		}, this.renderer = e, this.update(t);
	}
	injectCSS(e) {
		let { cssVars: t, renderer: n } = this, r = Object.keys(a(e, this.defaultOptions)).length > 0, i = Math.max(e.colors?.length || 0, Ae.length), o = "light", c = (e, n) => {
			s(e) && (n = n.replace(/([0-9]+)/g, "-$1").replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), t[o][`--highcharts-${n}`] = e);
		};
		for (let n of ["light", "dark"]) {
			let r = e[n] || {}, a = {}, s = new fe(r?.neutralColor || ""), l = new fe(r?.backgroundColor || ""), d = new fe(r?.highlightColor || "");
			o = n, [
				3,
				5,
				10,
				20,
				40,
				60,
				80,
				100
			].forEach((e) => {
				a[`neutralColor${e}`] = l.tweenTo(s, e / 100), a[`highlightColor${e}`] = l.tweenTo(d, e / 100);
			});
			for (let t = 0; t < i; t++) c(r?.colors?.[t] || e.colors?.[t] || (n === "dark" ? je : [])?.[t] || Ae[t] || "#888a", `color${t}`);
			u(r, c), u(a, c), n === "light" && R(t.dark, t.light);
		}
		let l = n.defs.element, d = r ? `*[data-highcharts-chart="${n.chartIndex}"]` : "", f = l.querySelector("style.highcharts-palette") || n.box.ownerDocument.createElement("style");
		f.parentNode || (f.nonce = "highcharts", f.className = "highcharts-palette", l.appendChild(f)), f.textContent = Me(d, t);
	}
	update(e) {
		let t = this.renderer.box.parentElement, n = ke?.[this.renderer.chartIndex];
		e = d(!0, this.options, e), n && (n.options.palette = e), e.injectCSS !== !1 && this.injectCSS(e), t && (s(e.colorScheme) && [
			"light",
			"dark",
			"inherit"
		].includes(e.colorScheme) ? t.style.colorScheme = e.colorScheme : t.style.removeProperty("color-scheme"));
	}
}, Pe = class e extends _e {
	constructor(t, n, r, i, a, o, s, c, l, u) {
		super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = n, this.x = r, this.y = i, this.anchorX = o, this.anchorY = s, this.baseline = l, this.className = u, this.addClass(u === "button" ? "highcharts-no-tooltip" : "highcharts-label"), u && this.addClass("highcharts-" + u), this.text = t.text(void 0, 0, 0, c).attr({ zIndex: 1 });
		let d;
		typeof a == "string" && (d = /^url\((.*?)\)$/.test(a), (d || this.renderer.symbols[a]) && (this.symbolKey = a)), this.bBox = e.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
	}
	alignSetter(e) {
		let t = m(e);
		this.textAlign = e, t !== this.alignFactor && (this.alignFactor = t, this.bBox && x(this.xSetting) && this.attr({ x: this.xSetting }), this.updateTextPadding());
	}
	anchorXSetter(e, t) {
		this.anchorX = e, this.boxAttr(t, Math.round(e) - this.getCrispAdjust() - this.xSetting);
	}
	anchorYSetter(e, t) {
		this.anchorY = e, this.boxAttr(t, e - this.ySetting);
	}
	boxAttr(e, t) {
		this.box ? this.box.attr(e, t) : this.deferredAttr[e] = t;
	}
	css(t) {
		if (t) {
			let n = {};
			t = d(t), e.textProps.forEach((e) => {
				t[e] !== void 0 && (n[e] = t[e], delete t[e]);
			}), this.text.css(n), "fontSize" in n || "fontWeight" in n || "width" in n ? this.updateTextPadding() : "textOverflow" in n && this.updateBoxSize(), "color" in n && this.updateBackground();
		}
		return _e.prototype.css.call(this, t);
	}
	destroy() {
		V(this.element, "mouseenter"), V(this.element, "mouseleave"), this.text && this.text.destroy(), this.box &&= this.box.destroy(), _e.prototype.destroy.call(this);
	}
	fillSetter(e, t) {
		e && (this.needsBox = !0), this.fill = e, this.boxAttr(t, e);
	}
	getBBox(e, t) {
		(this.textStr && this.bBox.width === 0 && this.bBox.height === 0 || this.rotation) && this.updateBoxSize();
		let { padding: n, height: r = 0, translateX: i = 0, translateY: a = 0, width: o = 0 } = this, s = this.paddingLeft ?? n, c = t ?? (this.rotation || 0), l = {
			width: o,
			height: r,
			x: i + this.bBox.x - s,
			y: a + this.bBox.y - n + this.baselineOffset
		};
		return c && (l = this.getRotatedBox(l, c)), l;
	}
	getCrispAdjust() {
		return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
	}
	heightSetter(e) {
		this.heightSetting = e, this.doUpdate = !0;
	}
	afterSetters() {
		super.afterSetters(), this.doUpdate &&= (this.updateBoxSize(), !1), this.updateBackground();
	}
	onAdd() {
		this.text.add(this), this.attr({
			text: this.textStr ?? "",
			x: this.x || 0,
			y: this.y || 0
		}), this.box && W(this.anchorX) && this.attr({
			anchorX: this.anchorX,
			anchorY: this.anchorY
		});
	}
	paddingSetter(e, t) {
		x(e) ? e !== this[t] && (this[t] = e, this.updateTextPadding()) : this[t] = void 0;
	}
	rSetter(e, t) {
		this.boxAttr(t, e);
	}
	strokeSetter(e, t) {
		this.stroke = e, this.boxAttr(t, e);
	}
	"stroke-widthSetter"(e, t) {
		e && (this.needsBox = !0), this["stroke-width"] = e, this.boxAttr(t, e);
	}
	"text-alignSetter"(e) {
		this.textAlign = this["text-align"] = e, this.updateTextPadding();
	}
	textSetter(e) {
		e !== void 0 && this.text.attr({ text: e }), this.updateTextPadding(), this.reAlign();
	}
	updateBackground() {
		this.fill === "contrast" && this.box?.attr({
			fill: this.renderer.getContrast(this.text.styles.color || "#000"),
			"fill-opacity": .65
		});
	}
	updateBoxSize() {
		let t = this.text, n = {}, r = this.padding, i = this.bBox = (!x(this.widthSetting) || !x(this.heightSetting) || this.textAlign) && W(t.textStr) ? t.getBBox(void 0, 0) : e.emptyBBox, a;
		this.width = this.getPaddedWidth(), this.height = (this.heightSetting || i.height || 0) + 2 * r;
		let o = this.renderer.fontMetrics(t);
		if (this.baselineOffset = r + Math.min((this.text.firstLineMetrics || o).b, i.height || Infinity), this.heightSetting && (this.baselineOffset += (this.heightSetting - o.h) / 2), this.needsBox && !t.textPath) {
			if (!this.box) {
				let e = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
				e.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), e.add(this);
			}
			a = this.getCrispAdjust(), n.x = a, n.y = (this.baseline ? -this.baselineOffset : 0) + a, n.width = Math.round(this.width), n.height = Math.round(this.height), this.box.attr(R(n, this.deferredAttr)), this.deferredAttr = {};
		}
	}
	updateTextPadding() {
		let e = this.text, t = e.styles.textAlign || this.textAlign;
		if (!e.textPath) {
			this.updateBoxSize();
			let n = this.baseline ? 0 : this.baselineOffset, r = (this.paddingLeft ?? this.padding) + m(t) * (this.widthSetting ?? this.bBox.width);
			(r !== e.x || n !== e.y) && (e.attr({
				align: t,
				x: r
			}), n !== void 0 && e.attr("y", n)), e.x = r, e.y = n;
		}
	}
	widthSetter(e) {
		this.widthSetting = x(e) ? e : void 0, this.doUpdate = !0;
	}
	getPaddedWidth() {
		let e = this.padding, t = this.paddingLeft ?? e, n = this.paddingRight ?? e;
		return (this.widthSetting || this.bBox.width || 0) + t + n;
	}
	xSetter(e) {
		this.x = e, this.alignFactor && (e -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(e), this.attr("translateX", this.xSetting);
	}
	ySetter(e) {
		this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(e), this.attr("translateY", this.ySetting);
	}
};
Pe.emptyBBox = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, Pe.textProps = [
	"color",
	"direction",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontWeight",
	"lineClamp",
	"lineHeight",
	"textAlign",
	"textDecoration",
	"textOutline",
	"textOverflow",
	"whiteSpace",
	"width"
];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/Symbols.js
function Fe(e, t, n, r, i) {
	let a = [];
	if (i) {
		let o = i.start || 0, s = i.end || 0, c = i.r ?? n, l = i.r ?? (r || n), u = 1e-4, d = Math.abs(s - o - 2 * Math.PI) < u;
		d && (o = Math.PI / 2, s = Math.PI * 2.5 - u);
		let f = i.innerR, p = i.open ?? d, m = d ? 0 : Math.cos(o), h = d ? 1 : Math.sin(o), g = d ? 0 : Math.cos(s), _ = d ? 1 : Math.sin(s), v = i.longArc ?? (s - o - Math.PI < u ? 0 : 1), y = [
			"A",
			c,
			l,
			0,
			v,
			i.clockwise ?? 1,
			e + (d ? .001 : c * g),
			t + l * _
		];
		y.params = {
			start: o,
			end: s,
			cx: e,
			cy: t
		}, a.push([
			"M",
			e + c * m,
			t + l * h
		], y), W(f) && (y = [
			"A",
			f,
			f,
			0,
			v,
			W(i.clockwise) ? 1 - i.clockwise : 0,
			e + (d ? -.001 : f * m),
			t + f * h
		], y.params = {
			start: s,
			end: o,
			cx: e,
			cy: t
		}, a.push(p ? [
			"M",
			e + f * g,
			t + f * _
		] : [
			"L",
			e + f * g,
			t + f * _
		], y)), p || a.push(["Z"]);
	}
	return a;
}
function Ie(e, t, n, r, i) {
	let a = i?.arrowLength ?? 6, o = Math.min(i?.r || 0, n, r), s = o + 6, c = i?.anchorX, l = i?.anchorY || 0, u = Be(e, t, n, r, { r: o });
	if (!x(c) || c < n && c > 0 && l < r && l > 0) return u;
	if (e + c > n - s) {
		if (l > t + s && l < t + r - s) u.splice(3, 1, [
			"L",
			e + n,
			l - 6
		], [
			"L",
			e + n + a,
			l
		], [
			"L",
			e + n,
			l + 6
		], [
			"L",
			e + n,
			t + r - o
		]);
		else if (c < n) {
			let i = l < t + s, a = i ? t : t + r, d = i ? 2 : 5;
			u.splice(d, 0, [
				"L",
				c,
				l
			], [
				"L",
				e + n - o,
				a
			]);
		} else u.splice(3, 1, [
			"L",
			e + n,
			r / 2
		], [
			"L",
			c,
			l
		], [
			"L",
			e + n,
			r / 2
		], [
			"L",
			e + n,
			t + r - o
		]);
	} else if (e + c < s) {
		if (l > t + s && l < t + r - s) u.splice(7, 1, [
			"L",
			e,
			l + 6
		], [
			"L",
			e - a,
			l
		], [
			"L",
			e,
			l - 6
		], [
			"L",
			e,
			t + o
		]);
		else if (c > 0) {
			let n = l < t + s, i = n ? t : t + r, a = n ? 1 : 6;
			u.splice(a, 0, [
				"L",
				c,
				l
			], [
				"L",
				e + o,
				i
			]);
		} else u.splice(7, 1, [
			"L",
			e,
			r / 2
		], [
			"L",
			c,
			l
		], [
			"L",
			e,
			r / 2
		], [
			"L",
			e,
			t + o
		]);
	} else l > r && c < n - s ? u.splice(5, 1, [
		"L",
		c + 6,
		t + r
	], [
		"L",
		c,
		t + r + a
	], [
		"L",
		c - 6,
		t + r
	], [
		"L",
		e + o,
		t + r
	]) : l < 0 && c > s && u.splice(1, 1, [
		"L",
		c - 6,
		t
	], [
		"L",
		c,
		t - a
	], [
		"L",
		c + 6,
		t
	], [
		"L",
		n - o,
		t
	]);
	return u;
}
function Le(e, t, n, r) {
	return Fe(e + n / 2, t + r / 2, n / 2, r / 2, {
		start: Math.PI * .5,
		end: Math.PI * 2.5,
		open: !1
	});
}
function Re(e, t, n, r) {
	return [
		[
			"M",
			e + n / 2,
			t
		],
		[
			"L",
			e + n,
			t + r / 2
		],
		[
			"L",
			e + n / 2,
			t + r
		],
		[
			"L",
			e,
			t + r / 2
		],
		["Z"]
	];
}
function ze(e, t, n, r, i) {
	return i?.r ? Be(e, t, n, r, i) : [
		[
			"M",
			e,
			t
		],
		[
			"L",
			e + n,
			t
		],
		[
			"L",
			e + n,
			t + r
		],
		[
			"L",
			e,
			t + r
		],
		["Z"]
	];
}
function Be(e, t, n, r, i) {
	let a = i?.r || 0;
	return [
		[
			"M",
			e + a,
			t
		],
		[
			"L",
			e + n - a,
			t
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e + n,
			t + a
		],
		[
			"L",
			e + n,
			t + r - a
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e + n - a,
			t + r
		],
		[
			"L",
			e + a,
			t + r
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e,
			t + r - a
		],
		[
			"L",
			e,
			t + a
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e + a,
			t
		],
		["Z"]
	];
}
function Ve(e, t, n, r) {
	return [
		[
			"M",
			e + n / 2,
			t
		],
		[
			"L",
			e + n,
			t + r
		],
		[
			"L",
			e,
			t + r
		],
		["Z"]
	];
}
function He(e, t, n, r) {
	return [
		[
			"M",
			e,
			t
		],
		[
			"L",
			e + n,
			t
		],
		[
			"L",
			e + n / 2,
			t + r
		],
		["Z"]
	];
}
var Ue = {
	arc: Fe,
	callout: Ie,
	circle: Le,
	diamond: Re,
	rect: ze,
	roundedRect: Be,
	square: ze,
	triangle: Ve,
	"triangle-down": He
}, { doc: We, SVG_NS: Ge, win: Ke } = z, qe = (e, t) => e.substring(0, t) + "…", Je = class {
	constructor(e) {
		let t = e.styles;
		this.renderer = e.renderer, this.svgElement = e, this.width = e.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
	}
	buildSVG() {
		let e = this.svgElement, t = e.element, n = e.renderer, r = (e.textStr ?? "").toString(), i = r.indexOf("<") !== -1, a = t.childNodes, o = !e.added && n.box, c = /<br.*?>/g, l = [
			r,
			this.ellipsis,
			this.noWrap,
			this.textLineHeight,
			this.textOutline,
			e.getStyle("font-size"),
			e.styles.lineClamp,
			this.width
		].join(",");
		if (l !== e.textCache) {
			e.textCache = l, delete e.actualWidth;
			for (let e = a.length; e--;) t.removeChild(a[e]);
			if (!i && !this.ellipsis && !this.width && !e.textPath && (r.indexOf(" ") === -1 || this.noWrap && !c.test(r))) t.appendChild(We.createTextNode(this.unescapeEntities(r)));
			else if (r !== "") {
				o && o.appendChild(t);
				let n = new q(r);
				this.modifyTree(n.nodes), n.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
			}
			s(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline);
		}
	}
	modifyDOM() {
		let e = this.svgElement, t = U(e.element, "x");
		e.firstLineMetrics = void 0;
		let n;
		for (; (n = e.element.firstChild) && /^[\s\u200B]*$/.test(n.textContent || " ");) e.element.removeChild(n);
		[].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (n, r) => {
			n.nextSibling && n.previousSibling && (r === 0 && n.previousSibling.nodeType === 1 && (e.firstLineMetrics = e.renderer.fontMetrics(n.previousSibling)), U(n, {
				dy: this.getLineHeight(n.nextSibling),
				x: t
			}));
		});
		let r = this.width || 0;
		if (!r) return;
		let i = (n, i) => {
			let a = n.textContent || "", o = a.replace(/([^\^])-/g, "$1- ").split(" "), s = !this.noWrap && (o.length > 1 || e.element.childNodes.length > 1), c = this.getLineHeight(i), l = Math.max(0, r - .8 * c), u = 0, d = e.actualWidth;
			if (s) {
				let a = [], s = [];
				for (; i.firstChild && i.firstChild !== n;) s.push(i.firstChild), i.removeChild(i.firstChild);
				for (; o.length;) if (o.length && !this.noWrap && u > 0 && (a.push(n.textContent || ""), n.textContent = o.join(" ").replace(/- /g, "-")), this.truncate(n, void 0, o, u === 0 && d || 0, r, l, (e, t) => o.slice(0, t).join(" ").replace(/- /g, "-")), d = e.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
					o.length && (this.truncate(n, n.textContent || "", void 0, 0, r, l, qe), n.textContent &&= n.textContent?.replace("…", "") + "…");
					break;
				}
				s.forEach((e) => {
					i.insertBefore(e, n);
				}), a.forEach((e) => {
					i.insertBefore(We.createTextNode(e), n);
					let r = We.createElementNS(Ge, "tspan");
					r.textContent = "​", U(r, {
						dy: c,
						x: t
					}), i.insertBefore(r, n);
				});
			} else this.ellipsis && a && this.truncate(n, a, void 0, 0, r, l, qe);
		}, a = ((t) => {
			[].slice.call(t.childNodes).forEach((n) => {
				n.nodeType === Ke.Node.TEXT_NODE ? i(n, t) : (n.className.baseVal.indexOf("highcharts-br") !== -1 && (e.actualWidth = 0), a(n));
			});
		});
		a(e.element);
	}
	getLineHeight(e) {
		let t = e.nodeType === Ke.Node.TEXT_NODE ? e.parentElement : e;
		return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(t || this.svgElement.element).h;
	}
	modifyTree(e) {
		let t = (n, r) => {
			let { attributes: i = {}, children: a, style: o = {}, tagName: s } = n, c = this.renderer.styledMode;
			if (s === "b" || s === "strong" ? c ? i.class = "highcharts-strong" : o.fontWeight = "bold" : (s === "i" || s === "em") && (c ? i.class = "highcharts-emphasized" : o.fontStyle = "italic"), o?.color && (o.fill = o.color), s === "br") {
				i.class = "highcharts-br", n.textContent = "​";
				let t = e[r + 1];
				t?.textContent && (t.textContent = t.textContent.replace(/^ +/gm, ""));
			} else s === "a" && a && a.some((e) => e.tagName === "#text") && (n.children = [{
				children: a,
				tagName: "tspan"
			}]);
			s !== "#text" && s !== "a" && (n.tagName = "tspan"), R(n, {
				attributes: i,
				style: o
			}), a && a.filter((e) => e.tagName !== "#text").forEach(t);
		};
		e.forEach(t), p(this.svgElement, "afterModifyTree", { nodes: e });
	}
	truncate(e, t, n, r, i, a, o) {
		let s = this.svgElement, { rotation: c } = s, l = [], u = n && !r ? 1 : 0, d = (t || n || "").length, f = d, p, m;
		n || (i = a);
		let h = function(t, i) {
			let a = i || t, o = e.parentNode;
			if (o && l[a] === void 0 && o.getSubStringLength) try {
				l[a] = r + o.getSubStringLength(0, n ? a + 1 : a);
			} catch {}
			return l[a];
		};
		if (s.rotation = 0, m = h(e.textContent.length), r + m > i) {
			for (; u <= d;) f = Math.ceil((u + d) / 2), n && (p = o(n, f)), m = h(f, p && p.length - 1), u === d ? u = d + 1 : m > i ? d = f - 1 : u = f;
			d === 0 ? e.textContent = "" : t && d === t.length - 1 || (e.textContent = p || o(t || n, f)), this.ellipsis && m > i && this.truncate(e, e.textContent || "", void 0, 0, i, a, qe);
		}
		n && n.splice(0, f), s.actualWidth = m, s.rotation = c;
	}
	unescapeEntities(e, t) {
		return u(this.renderer.escapes, function(n, r) {
			(!t || t.indexOf(n) === -1) && (e = e.toString().replace(new RegExp(n, "g"), r));
		}), e;
	}
}, { defaultOptions: Ye } = j, { charts: Xe, deg2rad: Ze, doc: Qe, isFirefox: $e, isMS: et, isWebKit: tt, noop: nt, SVG_NS: rt, symbolSizes: it, win: at } = z, ot, st = class {
	constructor(e, t, n, i, a, o, s, c, l) {
		this.x = 0, this.y = 0;
		let u = this, d = u.createElement("svg").attr({
			version: "1.1",
			class: "highcharts-root"
		}), f = d.element;
		e.appendChild(f), U(e, "dir", "ltr"), e.innerHTML.indexOf("xmlns") === -1 && U(f, "xmlns", this.SVG_NS), this.box = f, this.boxWrapper = d, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(Qe.createTextNode("Created with Highcharts 13.1.1")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = a, this.styledMode = s, this.chartIndex = l || 0, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.asyncCounter = 0, this.rootFontSize = d.getStyle("font-size"), u.setSize(t, n, !1), s || (d.css(this.getStyle(i || {})), this.palette = new Ne(this, c || Ye.palette));
		let p, m;
		$e && e.getBoundingClientRect && (p = function() {
			r(e, {
				left: 0,
				top: 0
			}), m = e.getBoundingClientRect(), r(e, {
				left: Math.ceil(m.left) - m.left + "px",
				top: Math.ceil(m.top) - m.top + "px"
			});
		}, p(), u.unSubPixelFix = I(at, "resize", p));
	}
	definition(e) {
		return new q([e]).addToDOM(this.defs.element);
	}
	getReferenceURL() {
		if (($e || tt) && Qe.getElementsByTagName("base").length) {
			if (!W(ot)) {
				let e = le(), t = new q([{
					tagName: "svg",
					attributes: {
						width: 8,
						height: 8
					},
					children: [{
						tagName: "defs",
						children: [{
							tagName: "clipPath",
							attributes: { id: e },
							children: [{
								tagName: "rect",
								attributes: {
									width: 4,
									height: 4
								}
							}]
						}]
					}, {
						tagName: "rect",
						attributes: {
							id: "hitme",
							width: 8,
							height: 8,
							"clip-path": `url(#${e})`,
							fill: "rgba(0,0,0,0.001)"
						}
					}]
				}]).addToDOM(Qe.body);
				r(t, {
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 9e5
				}), ot = Qe.elementFromPoint(6, 6)?.id === "hitme", Qe.body.removeChild(t);
			}
			if (ot) return oe(at.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
		}
		return "";
	}
	getStyle(e) {
		return this.style = R({
			fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif",
			fontSize: "1rem"
		}, e), this.style;
	}
	setStyle(e) {
		this.boxWrapper.css(this.getStyle(e));
	}
	isHidden() {
		return !this.boxWrapper.getBBox().width;
	}
	destroy() {
		let e = this, t = e.defs;
		return e.box = null, e.boxWrapper = e.boxWrapper.destroy(), b(e.gradients || {}), e.gradients = null, e.defs = t.destroy(), e.unSubPixelFix && e.unSubPixelFix(), e.alignedObjects.length = 0, null;
	}
	createElement(e) {
		return new this.Element(this, e);
	}
	getRadialAttr(e, t) {
		return {
			cx: e[0] - e[2] / 2 + (t.cx || 0) * e[2],
			cy: e[1] - e[2] / 2 + (t.cy || 0) * e[2],
			r: (t.r || 0) * e[2]
		};
	}
	shadowDefinition(e) {
		let t = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(e).map((t) => `${t}-${e[t]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), n = d({
			color: "#000000",
			offsetX: 0,
			offsetY: 2,
			opacity: .05,
			width: 6
		}, e);
		return this.defs.element.querySelector(`#${t}`) || this.definition({
			tagName: "filter",
			attributes: {
				id: t,
				filterUnits: n.filterUnits
			},
			children: this.getShadowFilterContent(n)
		}), t;
	}
	getShadowFilterContent(e) {
		return [{
			tagName: "feDropShadow",
			attributes: {
				dx: e.offsetX,
				dy: e.offsetY,
				"flood-color": e.color,
				"flood-opacity": Math.min(e.opacity * 5, 1),
				stdDeviation: e.width / 2
			}
		}];
	}
	buildText(e) {
		new Je(e).buildSVG();
	}
	getContrast(e) {
		if (e === "transparent") return "#000000";
		let t = fe.parse(e).rgba;
		if (x(t[0]) || !fe.useColorMix) {
			let e = t.map((e) => {
				let t = e / 255;
				return t <= .04 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
			}), n = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
			return 1.05 / (n + .05) > (n + .05) / .05 ? "#FFFFFF" : "#000000";
		}
		return "color(from " + e + " srgb clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1))";
	}
	button(e, t, n, r, i = {}, a, o, s, c, l) {
		let u = this.label(e, t, n, c, void 0, void 0, l, void 0, "button"), f = this.styledMode, p = arguments, m = 0;
		i = d(Ye.global.buttonTheme, i), f && (delete i.fill, delete i.stroke, delete i["stroke-width"]);
		let h = i.states || {}, g = i.style || {};
		delete i.states, delete i.style;
		let _ = [q.filterUserAttributes(i)], v = [g];
		return f || [
			"hover",
			"select",
			"disabled"
		].forEach((e, t) => {
			_.push(d(_[0], q.filterUserAttributes(p[t + 5] || h[e] || {}))), v.push(_[t + 1].style), delete _[t + 1].style;
		}), I(u.element, et ? "mouseover" : "mouseenter", function() {
			m !== 3 && u.setState(1);
		}), I(u.element, et ? "mouseout" : "mouseleave", function() {
			m !== 3 && u.setState(m);
		}), u.setState = (e = 0) => {
			if (e !== 1 && (u.state = m = e), u.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
				"normal",
				"hover",
				"pressed",
				"disabled"
			][e]), !f) {
				u.attr(_[e]);
				let t = v[e];
				C(t) && u.css(t);
			}
		}, u.attr(_[0]), f || (u.css(R({ cursor: "default" }, g)), l && u.text.css({ pointerEvents: "none" })), u.on("touchstart", (e) => e.stopPropagation()).on("click", function(e) {
			m !== 3 && r?.call(u, e);
		});
	}
	crispLine(e, t) {
		let [n, r] = e;
		return W(n[1]) && n[1] === r[1] && (n[1] = r[1] = y(n[1], t)), W(n[2]) && n[2] === r[2] && (n[2] = r[2] = y(n[2], t)), e;
	}
	path(e) {
		let t = this.styledMode ? {} : { fill: "none" };
		return K(e) ? t.d = e : C(e) && R(t, e), this.createElement("path").attr(t);
	}
	circle(e, t, n) {
		let r = C(e) ? e : e === void 0 ? {} : {
			x: e,
			y: t,
			r: n
		}, i = this.createElement("circle");
		return i.xSetter = i.ySetter = function(e, t, n) {
			n.setAttribute("c" + t, e);
		}, i.attr(r);
	}
	arc(e, t, n, r, i, a) {
		let o;
		C(e) ? (o = e, t = o.y, n = o.r, r = o.innerR, i = o.start, a = o.end, e = o.x) : o = {
			innerR: r,
			start: i,
			end: a
		};
		let s = this.symbol("arc", e, t, n, n, o);
		return s.r = n, s;
	}
	rect(e, t, n, r, i, a) {
		let o = C(e) ? e : e === void 0 ? {} : {
			x: e,
			y: t,
			r: i,
			width: Math.max(n || 0, 0),
			height: Math.max(r || 0, 0)
		}, s = this.createElement("rect");
		return this.styledMode || (a !== void 0 && (o["stroke-width"] = a, R(o, s.crisp(o))), o.fill = "none"), s.rSetter = function(e, t, n) {
			s.r = e, U(n, {
				rx: e,
				ry: e
			});
		}, s.rGetter = function() {
			return s.r || 0;
		}, s.attr(o);
	}
	roundedRect(e) {
		return this.symbol("roundedRect").attr(e);
	}
	setSize(e, t, n) {
		let r = this;
		r.width = e, r.height = t, r.boxWrapper.animate({
			width: e,
			height: t
		}, {
			step: function() {
				this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
			},
			duration: n ?? !0 ? void 0 : 0
		}), r.alignElements();
	}
	g(e) {
		let t = this.createElement("g");
		return e ? t.attr({ class: "highcharts-" + e }) : t;
	}
	image(e, t, n, r, i, a) {
		let o = { preserveAspectRatio: "none" };
		x(t) && (o.x = t), x(n) && (o.y = n), x(r) && (o.width = r), x(i) && (o.height = i);
		let s = this.createElement("image").attr(o), c = function(t) {
			s.attr({ href: e }), a.call(s, t);
		};
		if (a) {
			s.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
			let t = new at.Image();
			I(t, "load", c), t.src = e, t.complete && c({});
		} else s.attr({ href: e });
		return s;
	}
	symbol(e, t, n, i, a, o) {
		let s = this, c = /^url\((.*?)\)$/, l = c.test(e), u = !l && (this.symbols[e] ? e : "circle"), d = u && this.symbols[u], f, p, m, h;
		if (d) typeof t == "number" && (p = d.call(this.symbols, t || 0, n || 0, i || 0, a || 0, o)), f = this.path(p), s.styledMode || f.attr("fill", "none"), R(f, {
			symbolName: u || void 0,
			x: t,
			y: n,
			width: i,
			height: a
		}), o && R(f, o);
		else if (l) {
			m = e.match(c)[1];
			let i = f = this.image(m);
			i.imgwidth = o?.width ?? it[m]?.width, i.imgheight = o?.height ?? it[m]?.height, h = (e) => e.attr({
				width: e.width,
				height: e.height
			}), ["width", "height"].forEach((e) => {
				i[`${e}Setter`] = function(e, t) {
					this[t] = e;
					let { alignByTranslate: n, element: r, width: i, height: a, imgwidth: s, imgheight: c } = this, l = t === "width" ? s : c, u = 1;
					o && o.backgroundSize === "within" && i && a && s && c ? (u = Math.min(i / s, a / c), U(r, {
						width: Math.round(s * u),
						height: Math.round(c * u)
					})) : r && l && r.setAttribute(t, l), !n && s && c && this.translate(((i || 0) - s * u) / 2, ((a || 0) - c * u) / 2);
				};
			}), W(t) && i.attr({
				x: t,
				y: n
			}), i.isImg = !0, W(i.imgwidth) && W(i.imgheight) ? h(i) : (i.attr({
				width: 0,
				height: 0
			}), he("img", {
				onload: function() {
					let e = Xe[s.chartIndex];
					this.width === 0 && (r(this, {
						position: "absolute",
						top: "-999em"
					}), Qe.body.appendChild(this)), it[m] = {
						width: this.width,
						height: this.height
					}, i.imgwidth = this.width, i.imgheight = this.height, i.element && h(i), this.parentNode && this.parentNode.removeChild(this), s.asyncCounter--, !s.asyncCounter && e && !e.hasLoaded && e.onload();
				},
				src: m
			}), this.asyncCounter++);
		}
		return f;
	}
	clipRect(e, t, n, r) {
		return this.rect(e, t, n, r, 0);
	}
	text(e, t, n, r) {
		let i = this, a = {};
		if (r && (i.allowHTML || !i.forExport)) return i.html(e, t, n);
		a.x = Math.round(t || 0), n && (a.y = Math.round(n)), W(e) && (a.text = e);
		let o = i.createElement("text").attr(a);
		return (!r || i.forExport && !i.allowHTML) && (o.xSetter = function(e, t, n) {
			let r = n.getElementsByTagName("tspan"), i = n.getAttribute(t);
			for (let n = 0, a; n < r.length; n++) a = r[n], a.getAttribute(t) === i && a.setAttribute(t, e);
			n.setAttribute(t, e);
		}), o;
	}
	fontMetrics(e) {
		let t = x(e) ? e : w(_e.prototype.getStyle.call(e, "font-size") || 0), n = t < 24 ? t + 3 : Math.round(t * 1.2);
		return {
			h: n,
			b: Math.round(n * .8),
			f: t
		};
	}
	rotCorr(e, t, n) {
		let r = e;
		return t && n && (r = Math.max(r * Math.cos(t * Ze), 4)), {
			x: -e / 3 * Math.sin(t * Ze),
			y: r
		};
	}
	pathToSegments(e) {
		let t = [], n = [], r = {
			A: 8,
			C: 7,
			H: 2,
			L: 3,
			M: 3,
			Q: 5,
			S: 5,
			T: 3,
			V: 2
		};
		for (let i = 0; i < e.length; i++) s(n[0]) && x(e[i]) && n.length === r[n[0].toUpperCase()] && e.splice(i, 0, n[0].replace("M", "L").replace("m", "l")), typeof e[i] == "string" && (n.length && t.push(n.slice(0)), n.length = 0), n.push(e[i]);
		return t.push(n.slice(0)), t;
	}
	label(e, t, n, r, i, a, o, s, c) {
		return new Pe(this, e, t, n, r, i, a, o, s, c);
	}
	alignElements() {
		this.alignedObjects.forEach((e) => e.align());
	}
};
R(st.prototype, {
	Element: _e,
	SVG_NS: rt,
	escapes: {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"'": "&#39;",
		"\"": "&quot;"
	},
	symbols: Ue,
	draw: nt
}), z.Renderer = st;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Renderer/HTML/HTMLElement.js
var { composed: ct, isFirefox: lt } = z, ut = class t extends _e {
	static compose(n) {
		e(ct, "HTMLElement") && (n.prototype.html = function(e, n, r) {
			return new t(this, "div").attr({
				text: e,
				x: Math.round(n),
				y: Math.round(r),
				xmlns: "http://www.w3.org/1999/xhtml"
			});
		});
	}
	constructor(e, t) {
		super(e, t), this.foreignObject = e.createElement("foreignObject").attr({ zIndex: 2 }), this.element.style.whiteSpace = "nowrap";
	}
	getSpanCorrection(e, t, n) {
		this.xCorr = -e * n, this.yCorr = -t;
	}
	css(e) {
		let { element: t } = this, n = e && "width" in e, i = n && e.width, a;
		return n && (delete e.width, this.textWidth = w(i) || void 0, a = !0), e?.textOverflow === "ellipsis" && (e.overflow = "hidden", (e.lineClamp ?? this.styles.lineClamp) || (e.whiteSpace = "nowrap")), e?.lineClamp ? (e.display = "-webkit-box", e.WebkitLineClamp = e.lineClamp, e.WebkitBoxOrient = "vertical", e.overflow = "hidden") : e?.lineClamp === 0 && (e.display = "inline-block"), x(Number(e?.fontSize)) && (e.fontSize += "px"), R(this.styles, e), r(t, e), a && this.updateTransform(), this;
	}
	htmlGetBBox() {
		let { element: e } = this;
		return {
			x: e.offsetLeft,
			y: e.offsetTop,
			width: e.offsetWidth,
			height: e.offsetHeight
		};
	}
	updateTransform() {
		if (!this.added) {
			this.alignOnAdd = !0;
			return;
		}
		let { element: e, foreignObject: t, oldTextWidth: n, renderer: i, rotation: a, scaleX: o, styles: { display: s = "inline-block", whiteSpace: c }, textAlign: l = "left", textWidth: u, x: d = 0, y: f = 0 } = this, p = () => this.textPxLength ? this.textPxLength : (r(e, {
			width: "",
			whiteSpace: c || "nowrap"
		}), e.offsetWidth), h = [
			a,
			l,
			e.innerHTML,
			u,
			this.textAlign
		].join(","), g;
		if (r(e, {
			display: "inline-block",
			verticalAlign: "top"
		}), u !== n) {
			let t = p(), l = u || 0, d = !i.styledMode && e.style.textOverflow === "" && e.style.webkitLineClamp;
			(l > n || t > l || d) && (/[\-\s\u00AD]/.test(e.textContent || e.innerText) || e.style.textOverflow === "ellipsis") && (r(e, {
				width: (a || o || t > l) && x(u) ? u + "px" : d ? Math.min(t + 1, l) + "px" : "auto",
				display: s,
				whiteSpace: c || "normal"
			}), this.oldTextWidth = u);
		}
		t.attr({
			width: i.width,
			height: i.height
		}), h !== this.cTT && (g = i.fontMetrics(e).b, this.getSpanCorrection(!W(a) && !this.textWidth && this.textPxLength || e.offsetWidth, g, m(l))), super.updateTransform(), x(d) && x(f) ? (t.attr({
			x: d + (this.xCorr || 0),
			y: f + (this.yCorr || 0),
			width: e.offsetWidth + 4,
			height: e.offsetHeight + 1,
			"transform-origin": e.getAttribute("transform-origin") || "0 0"
		}), r(e, {
			display: s,
			textAlign: l
		})) : lt && t.attr({
			width: 0,
			height: 0
		}), this.cTT = h;
	}
	add(e) {
		let { foreignObject: t } = this;
		return t.add(e), super.add(t), this.alignOnAdd && this.updateTransform(), this;
	}
	textSetter(e) {
		e !== this.textStr && (delete this.oldTextWidth, q.setElementHTML(this.element, e ?? ""), this.textStr = e, this.doTransform = !0);
	}
	alignSetter(e) {
		this.alignValue = this.textAlign = e, this.doTransform = !0;
	}
	xSetter(e, t) {
		this[t] = e, this.doTransform = !0;
	}
	visibilitySetter(e, t) {
		this.foreignObject.attr({ [t]: e }), this[t] = e;
	}
}, dt = ut.prototype;
dt.ySetter = dt.xSetter, dt.opacitySetter = dt.visibilitySetter;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/AxisDefaults.js
var ft;
(function(e) {
	e.xAxis = {
		alignTicks: !0,
		allowDecimals: void 0,
		panningEnabled: !0,
		zIndex: 2,
		zoomEnabled: !0,
		dateTimeLabelFormats: {
			millisecond: {
				main: "%[HMSL]",
				range: !1
			},
			second: {
				main: "%[HMS]",
				range: !1
			},
			minute: {
				main: "%[HM]",
				range: !1
			},
			hour: {
				main: "%[HM]",
				boundary: void 0,
				range: !1
			},
			day: {
				main: "%[eb]",
				boundary: "%[eb]"
			},
			week: { main: "%[eb]" },
			month: {
				main: "%[bY]",
				boundary: void 0
			},
			year: {
				main: "%[Y]",
				boundary: void 0
			}
		},
		endOnTick: !1,
		gridLineDashStyle: "Solid",
		gridZIndex: 1,
		labels: {
			autoRotationLimit: 80,
			enabled: !0,
			indentation: 10,
			overflow: "justify",
			reserveSpace: void 0,
			rotation: void 0,
			staggerLines: 0,
			step: 0,
			useHTML: !1,
			zIndex: 7,
			style: {
				color: "var(--highcharts-neutral-color-80)",
				cursor: "default",
				fontSize: "0.8em",
				textOverflow: "ellipsis"
			}
		},
		maxPadding: .01,
		minorGridLineDashStyle: "Solid",
		minorTickLength: 2,
		minorTickPosition: "outside",
		minorTicksPerMajor: 5,
		minPadding: .01,
		offset: void 0,
		reversed: void 0,
		reversedStacks: !1,
		showEmpty: !0,
		showFirstLabel: !0,
		showLastLabel: !0,
		startOfWeek: 1,
		startOnTick: !1,
		tickLength: 10,
		tickmarkPlacement: "between",
		tickPixelInterval: 100,
		tickPosition: "outside",
		title: {
			align: "middle",
			useHTML: !1,
			x: 0,
			y: 0,
			style: {
				color: "var(--highcharts-neutral-color-60)",
				fontSize: "0.8em"
			}
		},
		visible: !0,
		minorGridLineColor: "var(--highcharts-neutral-color-5)",
		minorGridLineWidth: 1,
		minorTickColor: "var(--highcharts-neutral-color-40)",
		lineColor: "var(--highcharts-neutral-color-80)",
		lineWidth: 1,
		gridLineColor: "var(--highcharts-neutral-color-10)",
		gridLineWidth: void 0,
		tickColor: "var(--highcharts-neutral-color-80)"
	}, e.yAxis = {
		reversedStacks: !0,
		endOnTick: !0,
		maxPadding: .05,
		minPadding: .05,
		tickPixelInterval: 72,
		showLastLabel: !0,
		labels: { x: void 0 },
		startOnTick: !0,
		title: {},
		stackLabels: {
			animation: {},
			allowOverlap: !1,
			enabled: !1,
			crop: !0,
			overflow: "justify",
			formatter: function() {
				return this.axis.chart.numberFormatter(this.total || 0, -1);
			},
			style: {
				color: "var(--highcharts-neutral-color-100)",
				fontSize: "0.7em",
				fontWeight: "bold",
				textOutline: "1px contrast"
			}
		},
		gridLineWidth: 1,
		lineWidth: 0
	};
})(ft ||= {});
var pt = ft, { deg2rad: mt } = z, ht = class {
	constructor(e, t, n, r, i) {
		this.isNew = !0, this.isNewLabel = !0, this.axis = e, this.pos = t, this.type = n || "", this.parameters = i || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, p(this, "init"), !n && !r && this.addLabel();
	}
	addLabel() {
		let e = this, t = e.axis, n = t.options, r = t.chart, i = t.categories, a = t.logarithmic, o = t.names, s = e.pos, c = e.options?.labels ?? n.labels, l = t.tickPositions, u = s === l[0], d = s === l[l.length - 1], f = l.info, m = f?.boundaryTicks[s], h = n.dateTimeLabelFormats, g, _, v, y = this.parameters.category || (i ? i[s] ?? o[s] ?? s : s);
		if (a && x(y) && (y = A(a.lin2log(y))), t.dateTime && h) {
			if (f) {
				let e = {
					millisecond: "hour",
					second: "hour",
					minute: "hour",
					hour: "day",
					day: "month",
					week: "month",
					month: "year",
					year: "year"
				}, t = f.unitName, i = e[t], a = !n.grid?.enabled && m && i && h[i]?.boundary || h[t];
				_ = r.time.resolveDTLFormat(a), g = _.main;
			} else x(y) && (g = t.dateTime.getXDateFormat(y, h || {}));
		}
		e.isFirst = u, e.isLast = d, e.boundary = m;
		let b = {
			axis: t,
			chart: r,
			dateTimeLabelFormat: g,
			boundary: m,
			isFirst: u,
			isLast: d,
			pos: s,
			tick: e,
			tickPositionInfo: f,
			value: y
		};
		p(this, "labelFormat", b);
		let S = (e) => c.formatter ? c.formatter.call(e, e) : c.format ? (e.text = t.defaultLabelFormatter.call(e), J.format(c.format, e, r)) : t.defaultLabelFormatter.call(e);
		e.label = e.createLabel(S.call(b, b), c);
		let C = _?.list, w = e.label;
		e.shortenLabel = C && w ? function() {
			for (v = 0; v < C.length; v++) if (R(b, { dateTimeLabelFormat: C[v] }), w.attr({ text: S.call(b, b) }), w.getBBox().width < t.getSlotWidth(e) - 2 * (c.padding || 0)) return;
			w.attr({ text: "" });
		} : void 0;
	}
	createLabel(e, t, n) {
		let r = this.axis, { renderer: i, styledMode: a } = r.chart, o = t.style, s = o.whiteSpace, c = this.label;
		return W(e) && t.enabled ? c ||= i.text(e, n?.x, n?.y, t.useHTML).add(r.labelGroup) : c && (c = c.destroy(), this.isNewLabel = !0), c && (c.labelStyle !== o || e !== c.textStr) && (c.labelStyle = o, e !== c.textStr && (c.attr({ text: e }), delete c.textPxLength), a || c.css(d(o)), c.textPxLength ?? (c.textPxLength = c.getBBox().width), !a && s && c.css({ whiteSpace: s })), c;
	}
	destroy() {
		b(this, this.axis);
	}
	getPosition(e, t, n, r) {
		let i = this.axis, a = i.chart, o = r && a.oldChartHeight || a.chartHeight, s = {
			x: e ? A(i.translate(t + n, void 0, void 0, r) + i.transB) : i.left + i.offset + (i.opposite ? (r && a.oldChartWidth || a.chartWidth) - i.right - i.left : 0),
			y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : A(o - i.translate(t + n, void 0, void 0, r) - i.transB)
		};
		return s.y = G(s.y, -1e9, 1e9), p(this, "afterGetPosition", { pos: s }), s;
	}
	getLabelPosition(e, t, n, r, i, a, o, s) {
		let c = this.axis, { labelAlign: l, side: u, staggerLines: d, transA: f } = c, m = c.linkedParent ? c.linkedParent.reversed : c.reversed, h = c.tickRotCorr || {
			x: 0,
			y: 0
		}, g = !r && !c.reserveSpaceDefault ? -(c.labelOffset || 0) * (c.labelAlign === "center" ? .5 : 1) : 0, _ = i.distance ?? (u === 1 && l === "right" && !i.reserveSpace || u === 3 && l === "left" && !i.reserveSpace ? 0 : 15), v = {}, y, b;
		return y = u === 0 ? n.rotation ? -_ : -n.getBBox().height : u === 2 ? h.y + _ : Math.cos(n.rotation * mt) * (h.y - n.getBBox(!1, 0).height / 2), W(i.y) && (y = u === 0 && c.horiz ? i.y + y : i.y), e = e + (i.x ?? [
			0,
			1,
			0,
			-1
		][u] * _) + g + h.x - (a && r ? a * f * (m ? -1 : 1) : 0), t = t + y - (a && !r ? a * f * (m ? 1 : -1) : 0), d && (b = o / (s || 1) % d, c.opposite && (b = d - b - 1), t += b * (c.labelOffset / d)), v.x = e, v.y = Math.round(t), p(this, "afterGetLabelPosition", {
			pos: v,
			tickmarkOffset: a,
			index: o
		}), v;
	}
	getLabelSize() {
		return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
	}
	getMarkPath(e, t, n, r, i = !1, a) {
		return a.crispLine([[
			"M",
			e,
			t
		], [
			"L",
			e + (i ? 0 : -n),
			t + (i ? n : 0)
		]], r);
	}
	handleOverflow(e) {
		let t = this, { axis: n, label: r } = this, i = n.options.labels, a = e.x, { chartWidth: o, spacing: s } = n.chart, c = n.labelLeft ?? Math.min(n.pos, s[3]), l = n.labelRight ?? Math.max(n.isRadial ? 0 : n.pos + n.len, o - s[1]), u = r?.rotation || 0, d = m(n.labelAlign || r?.attr("align")), f = r?.getBBox().width || 0, p = n.getSlotWidth(t), h = d, g = p, _ = 1, v, y, b;
		!u && i.overflow === "justify" ? (v = a - d * f, y = a + (1 - d) * f, v < c ? g = e.x + g * (1 - d) - c : y > l && (g = l - e.x + g * d, _ = -1), g = Math.min(p, g), g < p && n.labelAlign === "center" && (e.x += _ * (p - g - h * (p - Math.min(f, g)))), (f > g || n.autoRotation && r?.styles?.width) && (b = g)) : u < 0 && a - d * f < c ? b = Math.round(a / Math.cos(u * mt) - c) : u > 0 && a + d * f > l && (b = Math.round((o - a) / Math.cos(u * mt))), b && r && (t.shortenLabel ? t.shortenLabel() : r.css({
			width: Math.floor(b) + "px",
			lineClamp: +!n.isRadial
		}));
	}
	render(e, t, n) {
		let r = this, i = r.axis, a = (t ? i.old?.horiz : void 0) ?? i.horiz, o = r.pos, s = r.tickmarkOffset ?? i.tickmarkOffset, c = r.getPosition(a, o, s, t), l = c.x, u = c.y, d = i.pos, f = d + i.len, m = a ? l : u;
		i.visible || (n = 0);
		let h = n ?? 1;
		!i.chart.polar && (A(m) < d || m > f) && (n = 0), n ??= 1, this.isActive = !0, this.renderGridLine(t, n), this.renderMark(c, n), this.renderLabel(c, t, h, e), r.isNew = !1, p(this, "afterRender");
	}
	renderGridLine(e, t) {
		let n = this, r = n.axis, i = r.options, a = {}, o = n.pos, s = n.type, c = n.tickmarkOffset ?? r.tickmarkOffset, { renderer: l, styledMode: u } = r.chart, d = n.gridLine, f = i.gridLineWidth, p = i.gridLineColor, m = i.gridLineDashStyle;
		n.type === "minor" && (f = i.minorGridLineWidth, p = i.minorGridLineColor, m = i.minorGridLineDashStyle), u || (a["stroke-width"] = f || 0), d || (s || (a.zIndex = 1), n.gridLine = d = l.path().attr(a).addClass("highcharts-" + (s ? s + "-" : "") + "grid-line").add(r.gridGroup));
		let h = r.getPlotLinePath({
			value: o + c,
			lineWidth: d.strokeWidth(),
			force: "pass",
			old: e,
			acrossPanes: !1
		});
		h && (a.d = h, a.opacity = e ? 0 : t, u || (a.stroke = p, a.dashstyle = m), d[e || n.isNew ? "attr" : "animate"](a));
	}
	renderMark(e, t) {
		let n = this, r = n.axis, { chart: i, options: a } = r, o = i.renderer, s = n.type, c = r.tickSize(s ? s + "Tick" : "tick"), l = e.x, u = e.y, d = a[s === "minor" ? "minorTickWidth" : "tickWidth"] ?? (!s && r.isXAxis ? 1 : 0), f = a[s === "minor" ? "minorTickColor" : "tickColor"], p = n.mark, m = p ? "animate" : "attr";
		(c || p) && (r.opposite && c && (c[0] = -c[0]), p || (n.mark = p = o.path().addClass("highcharts-" + (s ? s + "-" : "") + "tick").add(r.axisGroup)), i.styledMode || p[m]({
			stroke: f,
			"stroke-width": d
		}), p[m]({
			d: n.getMarkPath(l, u, c?.[0] || 0, p.strokeWidth(), r.horiz, o),
			opacity: c ? t : 0
		}));
	}
	renderLabel(e, t, n, r) {
		let i = this, a = i.axis, o = a.horiz, s = a.options, c = i.label, l = s.labels, u = l.step, d = i.tickmarkOffset ?? a.tickmarkOffset, f = e.x, p = e.y, m = !0;
		c && x(f) && (c.xy = e = i.getLabelPosition(f, p, c, o, l, d, r, u), i.isFirst && !i.isLast && !s.showFirstLabel || i.isLast && !i.isFirst && !s.showLastLabel ? m = !1 : o && !t && n !== 0 && i.handleOverflow(e), u && r % u && (m = !1), m && x(e.y) ? (e.opacity = n, c[i.isNewLabel ? "attr" : "animate"](e).show(!0), i.isNewLabel = !1) : (c.hide(), i.isNewLabel = !0));
	}
}, { xAxis: gt, yAxis: _t } = pt, { parse: vt } = fe, { defaultOptions: yt } = j, { registerEventOptions: bt } = Ce, { deg2rad: xt } = z, St = (e, t) => ue(t, void 0, void 0, e.options.allowDecimals ?? (t < .5 || e.tickAmount !== void 0), !!e.tickAmount);
R(yt, {
	xAxis: gt,
	yAxis: d(gt, _t)
});
var Ct = class {
	constructor(e, t, n) {
		this.clippable = !0, this.init(e, t, n);
	}
	init(e, t, n = this.coll) {
		let r = n === "xAxis", i = this, a = i.isZAxis || (e.inverted ? !r : r);
		i.chart = e, i.horiz = a, i.isXAxis = r, i.coll = n, p(this, "init", { userOptions: t }), i.opposite = t.opposite ?? i.opposite, i.side = t.side ?? (a ? i.opposite ? 0 : 2 : i.opposite ? 1 : 3), i.setOptions(t);
		let o = i.options, s = o.labels;
		i.type = o.type || "linear", i.uniqueNames = o.uniqueNames ?? !0, p(i, "afterSetType"), i.userOptions = t, i.minPixelPadding = 0, i.reversed = o.reversed, i.visible = o.visible, i.zoomEnabled = o.zoomEnabled, i.hasNames = this.type === "category" || o.categories === !0, i.categories = K(o.categories) && o.categories || (i.hasNames ? [] : void 0), i.names ||= [], i.namesMap ||= {}, i.plotLinesAndBandsGroups ||= {}, i.positiveValuesOnly = !!i.logarithmic, i.ticks ||= {}, i.labelEdge ||= [], i.minorTicks ||= {}, i.alternateBands ||= {}, i.len ??= 0, i.minRange = i.userMinRange = o.minRange || o.maxZoom, i.range = o.range, i.max = void 0, i.min = void 0;
		let c = o.crosshair ?? B(e.options.tooltip?.crosshairs)[+!r];
		i.crosshair = c === !0 ? {} : c, e.axes.indexOf(i) === -1 && (r ? e.axes.splice(e.xAxis.length, 0, i) : e.axes.push(i), ee(this, e[this.coll])), e.orderItems(i.coll), i.series = i.series || [], e.inverted && !i.isZAxis && r && !W(i.reversed) && (i.reversed = !0), i.labelRotation = x(s.rotation) ? s.rotation : void 0, bt(i, o), p(this, "afterInit");
	}
	setOptions(e) {
		let t = this.horiz ? {
			labels: {
				autoRotation: [-45],
				padding: 3
			},
			margin: 15
		} : {
			labels: { padding: 1 },
			title: { rotation: this.side === 1 ? 90 : -90 }
		};
		this.options = d(t, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, yt[this.coll], e), p(this, "afterSetOptions", { userOptions: e });
	}
	defaultLabelFormatter() {
		let e = this.axis, t = this.chart, { numberFormatter: n } = t, r = x(this.value) ? this.value : NaN, i = e.chart.time, a = e.categories, o = this.dateTimeLabelFormat, s = yt.lang, c = s.numericSymbols, l = s.numericSymbolMagnitude || 1e3, u = e.logarithmic ? Math.abs(r) : e.tickInterval, d = c?.length, f, p;
		if (a) p = `${this.value}`;
		else if (o) p = i.dateFormat(o, r, !0);
		else if (d && c && u >= 1e3) for (; d-- && p === void 0;) f = l ** +(d + 1), u >= f && r * 10 % f == 0 && c[d] !== null && r !== 0 && (p = n(r / f, -1, void 0, void 0, t) + c[d]);
		return p ??= n(r, -1, void 0, Math.abs(r) < 1e4 ? "" : void 0, t), p;
	}
	getSeriesExtremes() {
		let e = this, t;
		p(this, "getSeriesExtremes", null, function() {
			e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((n) => {
				if (n.reserveSpace()) {
					let r = n.options, i, a = r.threshold, o, s;
					if (e.hasVisibleSeries = !0, e.positiveValuesOnly && (a || 0) <= 0 && (a = void 0), e.isXAxis) i = n.getColumn("x"), i.length && (i = e.logarithmic ? i.filter((e) => e > 0) : i, t = n.getXExtremes(i), o = t.min, s = t.max, !x(o) && !(o instanceof Date) && (i = i.filter(x), t = n.getXExtremes(i), o = t.min, s = t.max), i.length && (e.dataMin = Math.min(e.dataMin ?? o, o), e.dataMax = Math.max(e.dataMax ?? s, s)));
					else {
						let t = n.applyExtremes();
						x(t.dataMin) && (o = t.dataMin, e.dataMin = Math.min(e.dataMin ?? o, o)), x(t.dataMax) && (s = t.dataMax, e.dataMax = Math.max(e.dataMax ?? s, s)), W(a) && (e.threshold = a), (!r.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
					}
				}
			});
		}), p(this, "afterGetSeriesExtremes");
	}
	translate(e, t, n, r, i, a) {
		let o = this.linkedParent || this, s = r && o.old ? o.old.min : o.min;
		if (!x(s)) return NaN;
		let c = o.minPixelPadding, l = (o.isOrdinal || o.brokenAxis?.hasBreaks || o.logarithmic && i) && !!o.lin2val, u = 1, d = 0, f = r && o.old ? o.old.transA : o.transA, p = 0;
		return f ||= o.transA, n && (u *= -1, d = o.len), o.reversed && (u *= -1, d -= u * (o.sector || o.len)), t ? (e = e * u + d, e -= c, p = e / f + s, l && (p = o.lin2val(p))) : (l && (e = o.val2lin(e)), p = u * (e - s) * f + d + u * c + (x(a) ? f * a : 0), o.isRadial || (p = A(p)), Math.abs(p) < 1e-9 && (p = 0)), p;
	}
	toPixels(e, t) {
		return this.translate(this.chart?.time.parse(e) ?? NaN, !1, !this.horiz, void 0, !0) + (t ? 0 : this.pos);
	}
	toValue(e, t) {
		return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, void 0, !0);
	}
	getPlotLinePath(e) {
		let t = this, { chart: n, left: r, top: i, transB: a } = t, { lineWidth: o, old: s, value: c } = e, l = (s ? t.old?.horiz : void 0) ?? t.horiz, u = s && n.oldChartHeight || n.chartHeight, d = s && n.oldChartWidth || n.chartWidth, f = e.translatedValue, m = e.force, h, g, _, v, y;
		function b(e, t, n) {
			return m !== "pass" && (e < t || e > n) && (m ? e = G(e, t, n) : y = !0), e;
		}
		let S = {
			value: c,
			lineWidth: o,
			old: s,
			force: m,
			acrossPanes: e.acrossPanes,
			translatedValue: f
		};
		return p(this, "getPlotLinePath", S, function(e) {
			f ??= t.translate(c, void 0, void 0, s), f = G(f, -1e9, 1e9), h = _ = f + a, g = v = u - f - a, x(f) ? l ? (g = i, v = u - t.bottom + (t.options.isInternal ? 0 : n.scrollablePixelsY || 0), h = _ = b(h, r, r + t.width)) : (h = r, _ = d - t.right + (n.scrollablePixelsX || 0), g = v = b(g, i, i + t.height)) : (y = !0, m = !1), e.path = y && !m ? void 0 : n.renderer.crispLine([[
				"M",
				h,
				g
			], [
				"L",
				_,
				v
			]], o || 1);
		}), S.path;
	}
	getLinearTickPositions(e, t, n) {
		let r = A(Math.floor(t / e) * e), i = A(Math.ceil(n / e) * e), a = [], o, s, c;
		if (A(r + e) === r && (c = 20), this.single) return [t];
		for (o = r; o <= i && (a.push(o), o = A(o + e, c), o !== s);) s = o;
		return a;
	}
	getMinorTickInterval() {
		let { minorTicks: e, minorTickInterval: t } = this.options;
		if (e === !0) return t ?? "auto";
		if (e !== !1) return t;
	}
	getMinorTickPositions() {
		let e = this, t = e.options, n = e.tickPositions, r = e.minorTickInterval, i = e.pointRangePadding || 0, a = (e.min || 0) - i, o = (e.max || 0) + i, s = e.brokenAxis?.hasBreaks ? e.brokenAxis.unitLength : o - a, c = [], l;
		if (s && s / r < e.len / 3) {
			let i = e.logarithmic;
			if (i) this.paddedTicks.forEach(function(e, t, n) {
				t && c.push.apply(c, i.getLogTickPositions(r, n[t - 1], n[t], !0));
			});
			else if (e.dateTime && this.getMinorTickInterval() === "auto") c = c.concat(e.getTimeTicks(e.dateTime.normalizeTimeTickInterval(r), a, o, t.startOfWeek));
			else for (l = a + (n[0] - a) % r; l <= o && l !== c[0]; l += r) c.push(l);
		}
		return c.length !== 0 && e.trimTicks(c), c;
	}
	adjustForMinRange() {
		let e = this, t = e.options, n = e.logarithmic, r = e.chart.time, { max: i, min: a, minRange: o } = e, s, c, l, u, d;
		e.isXAxis && o === void 0 && !n && (W(t.min) || W(t.max) || W(t.floor) || W(t.ceiling) ? o = null : (l = g(e.series.map((e) => {
			let t = e.getColumn("x");
			return e.xIncrement ? t.slice(0, 2) : t;
		})) || 0, o = Math.min(l * 5, e.dataMax - e.dataMin))), x(i) && x(a) && x(o) && i - a < o && (c = e.dataMax - e.dataMin >= o, s = (o - i + a) / 2, u = [a - s, r.parse(t.min) ?? a - s], c && (u[2] = n ? n.log2lin(e.dataMin) : e.dataMin), a = F(u), d = [a + o, r.parse(t.max) ?? a + o], c && (d[2] = n ? n.log2lin(e.dataMax) : e.dataMax), i = D(d), i - a < o && (u[0] = i - o, u[1] = r.parse(t.min) ?? i - o, a = F(u))), e.minRange = o, e.min = a, e.max = i;
	}
	getClosest() {
		let e, t;
		if (this.categories) t = 1;
		else {
			let n = [];
			this.series.forEach(function(e) {
				let r = e.closestPointRange, i = e.getColumn("x");
				i.length === 1 ? n.push(i[0]) : e.sorted && W(r) && e.reserveSpace() && (t = W(t) ? Math.min(t, r) : r);
			}), n.length && (n.sort((e, t) => e - t), e = g([n]));
		}
		return e && t ? Math.min(e, t) : e || t;
	}
	nameToX(e, t) {
		let n = K(this.options.categories), { name: r, series: i } = e, a = n ? this.categories : this.names, o = this.namesMap, s;
		return i.requireSorting = !1, W(t) || (t = this.uniqueNames && a ? n ? a.indexOf(r) : o[r] ?? -1 : i.autoIncrement()), t === -1 ? !n && a && (s = a.length) : x(t) && (s = t), s === void 0 ? s = x(e.x) ? e.x : i.autoIncrement() : (this.names[s] = e.name, o[e.name] = s), s;
	}
	updateNames() {
		let e = this, { names: t, namesMap: n } = this;
		t.length > 0 && (Object.keys(n).forEach(function(e) {
			delete n[e];
		}), t.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((t) => {
			if (t.xIncrement = null, delete t.xColumn, !t.points || t.isDirtyData) e.max = Math.max(e.max || 0, t.dataTable.rowCount - 1), t.processData(), t.generatePoints();
			else {
				let e = t.getColumn("x");
				t.points?.forEach((t) => {
					t.x = e[t.index];
				});
			}
		}));
	}
	setAxisTranslation() {
		let e = this, t = e.max - e.min, n = e.linkedParent, r = !!e.categories, i = e.isXAxis, a = e.axisPointRange || 0, o, c = 0, l = 0, u, d = e.transA;
		(i || r || a) && (o = e.getClosest(), n ? (c = n.minPointOffset, l = n.pointRangePadding) : e.series.forEach(function(t) {
			let n = r ? 1 : i ? t.options.pointRange ?? o ?? 0 : e.axisPointRange || 0, u = t.options.pointPlacement;
			if (a = Math.max(a, n), !e.single || r) {
				let e = t.is("xrange") ? !i : i;
				c = Math.max(c, e && s(u) ? 0 : n / 2), l = Math.max(l, e && u === "on" ? 0 : n);
			}
		}), u = e.ordinal?.slope && o ? e.ordinal.slope / o : 1, e.minPointOffset = c *= u, e.pointRangePadding = l *= u, e.pointRange = Math.min(a, e.single && r ? 1 : t), i && (e.closestPointRange = o)), e.translationSlope = e.transA = d = e.staticScale || e.len / (t + l || 1), e.transB = e.horiz ? e.left : e.bottom, e.minPixelPadding = d * c, p(this, "afterSetAxisTranslation");
	}
	minFromRange() {
		let { max: e, min: t } = this;
		return x(e) && x(t) && e - t || void 0;
	}
	setTickInterval(e) {
		let t = this, { categories: n, chart: r, dataMax: i, dataMin: a, dateTime: o, isXAxis: s, logarithmic: c, options: l, softThreshold: u } = t, d = r.time, f = x(t.threshold) ? t.threshold : void 0, m = t.minRange || 0, { ceiling: h, floor: g, softMax: _, softMin: v } = l, y = t.linkedParent, b = l.tickPixelInterval, S = l.maxPadding, C = l.minPadding, w = 0, T, E = x(l.tickInterval) && l.tickInterval >= 0 ? l.tickInterval : void 0, D, O, k, j;
		if (!o && !n && !y && this.getTickAmount(), k = t.userMin ?? d.parse(l.min), j = t.userMax ?? d.parse(l.max), y ? (T = y.getExtremes(), t.min = T.min ?? T.dataMin, t.max = T.max ?? T.dataMax, this.type !== y.type && H(11, !0, r)) : (u && W(f) && x(i) && x(a) && (a >= f ? (D = f, C = 0) : i <= f && (O = f, S = 0)), t.min = k ?? D ?? a, t.max = j ?? O ?? i), x(t.max) && x(t.min) && (c && (t.positiveValuesOnly && !e && Math.min(t.min, a ?? t.min) <= 0 && H(10, !0, r), t.min = A(c.log2lin(t.min), 16), t.max = A(c.log2lin(t.max), 16)), t.range && x(a) && (t.userMin = t.min = k = Math.max(a, t.minFromRange() || 0), t.userMax = j = t.max, t.range = void 0)), p(t, "foundExtremes"), t.adjustForMinRange(), x(t.min) && x(t.max)) {
			if (!x(t.userMin) && x(v) && v < t.min && (t.min = k = v), !x(t.userMax) && x(_) && _ > t.max && (t.max = j = _), !n && !t.axisPointRange && !t.stacking?.usePercentage && !y && (w = t.max - t.min, w && (!W(k) && C && (t.min -= w * C), !W(j) && S && (t.max += w * S))), !x(t.userMin) && x(g) && (t.min = Math.max(t.min, g)), !x(t.userMax) && x(h) && (t.max = Math.min(t.max, h)), u && x(a) && x(i)) {
				let e = f || 0;
				!W(k) && t.min < e && a >= e ? t.min = l.minRange ? Math.min(e, t.max - m) : e : !W(j) && t.max > e && i <= e && (t.max = l.minRange ? Math.max(e, t.min + m) : e);
			}
			!r.polar && t.min > t.max && (W(l.min) ? t.max = t.min : W(l.max) && (t.min = t.max)), w = t.max - t.min;
		}
		if (t.tickInterval = t.min === t.max || !x(t.min) || !x(t.max) ? 1 : y && !E && b === y.options.tickPixelInterval ? E = y.tickInterval : E ?? (this.tickAmount ? w / Math.max(this.tickAmount - 1, 1) : n ? 1 : w * b / Math.max(t.len, b)), s && !e) {
			let e = t.min !== t.old?.min || t.max !== t.old?.max;
			t.series.forEach(function(t) {
				t.forceCrop = t.forceCropping?.(), t.processData(e);
			}), p(this, "postProcessData", { hasExtremesChanged: e });
		}
		t.setAxisTranslation(), p(this, "initialAxisTranslation"), t.pointRange && !E && (t.tickInterval = Math.max(t.pointRange, t.tickInterval));
		let M = l.minTickInterval ?? (o && !t.series.some((e) => !e.sorted) ? t.closestPointRange : 0);
		!E && M && t.tickInterval < M && (t.tickInterval = M), !o && !c && !E && (t.tickInterval = St(t, t.tickInterval)), this.tickAmount || (t.tickInterval = t.unsquish()), this.setTickPositions();
	}
	setTickPositions() {
		let e = this, t = this.options, n = t.tickPositions, r = t.tickPositioner, i = this.getMinorTickInterval(), a = !this.isPanning, o = a && t.startOnTick, s = a && t.endOnTick, c = [], l;
		if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? .5 : 0, this.single = this.min === this.max && W(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), n) c = n.slice();
		else if (x(this.min) && x(this.max)) {
			if (!e.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) c = [this.min, this.max], H(19, !1, this.chart);
			else if (e.dateTime) c = e.getTimeTicks(e.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, e.ordinal?.positions, this.closestPointRange, !0);
			else if (e.logarithmic) c = e.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
			else {
				let e = this.tickInterval, t = e;
				for (; t <= e * 2 && (c = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && c.length > this.tickAmount);) this.tickInterval = St(this, t *= 1.1);
			}
			c.length > this.len && (c = [c[0], c[c.length - 1]], c[0] === c[1] && (c.length = 1)), r && (this.tickPositions = c, l = r.apply(e, [
				this.min,
				this.max,
				e
			]), l && (c = l));
		}
		!this.isDirty && c.length !== this.tickPositions?.length && (this.isDirty = !0), this.tickPositions = c, this.minorTickInterval = i === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : i, this.paddedTicks = c.slice(0), this.trimTicks(c, o, s), !this.linkedParent && x(this.min) && x(this.max) && (this.single && c.length < 2 && !this.categories && !this.series.some((e) => e.is("heatmap") && e.options.pointPlacement === "between") && (this.min -= .5, this.max += .5), !n && !l && this.adjustTickAmount()), p(this, "afterSetTickPositions");
	}
	trimTicks(e, t, n) {
		let r = e[0], i = e[e.length - 1], a = !this.isOrdinal && this.minPointOffset || 0;
		if (p(this, "trimTicks"), !this.linkedParent || !this.grid) {
			if (t && x(r)) this.min = r;
			else if (e.length) for (; this.min - a > e[0];) e.shift();
			if (n && x(i)) this.max = i;
			else for (; this.max + a < e[e.length - 1];) e.pop();
			e.length === 0 && W(r) && !this.options.tickPositions && e.push((i + r) / 2);
		}
	}
	alignToOthers() {
		let e = this, t = e.chart, n = [this], r = e.options, i = t.options.chart, a = this.coll === "yAxis" && i.alignThresholds, o = [], s;
		if (e.thresholdAlignment = void 0, (i.alignTicks !== !1 && r.alignTicks || a) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
			let r = (e) => {
				let { horiz: t, options: n } = e;
				return [
					t ? n.left : n.top,
					n.width,
					n.height,
					n.pane
				].join(",");
			}, i = r(this);
			t[this.coll].forEach(function(t) {
				let { series: a } = t;
				a.length && a.some((e) => e.visible) && t !== e && r(t) === i && (s = !0, n.push(t));
			});
		}
		if (s && a) {
			n.forEach((t) => {
				let n = t.getThresholdAlignment(e);
				x(n) && o.push(n);
			});
			let t = o.length > 1 ? o.reduce((e, t) => e += t, 0) / o.length : void 0;
			n.forEach((e) => {
				e.thresholdAlignment = t;
			});
		}
		return s;
	}
	getThresholdAlignment(e) {
		if ((!x(this.dataMin) || this !== e && this.series.some((e) => e.isDirty || e.isDirtyData || e.xAxis?.isDirty)) && this.getSeriesExtremes(), x(this.threshold)) {
			let e = G((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
			return this.options.reversed && (e = 1 - e), e;
		}
	}
	getTickAmount() {
		let e = this, t = this.options, n = t.tickPixelInterval, r = t.tickAmount;
		!W(t.tickInterval) && !r && this.len < n && !this.isRadial && !e.logarithmic && t.startOnTick && t.endOnTick && (r = 2), !r && this.alignToOthers() && (r = Math.ceil(this.len / n) + 1), r < 4 && (this.finalTickAmt = r, r = 5), this.tickAmount = r;
	}
	adjustTickAmount() {
		let e = this, { finalTickAmt: t, max: n, min: r, options: i, tickPositions: a, tickAmount: o, thresholdAlignment: s } = e, c = a?.length, l = e.threshold ?? (e.softThreshold ? 0 : null), u, d, f = e.tickInterval, p, m = () => a.push(A(a[a.length - 1] + f)), h = () => a.unshift(A(a[0] - f));
		if (x(s) && (p = s === 0 ? 0 : s === 1 ? o - 1 : Math.round(G(s * (o - 1), 1, o - 2)), i.reversed && (p = o - 1 - p)), e.hasData() && x(r) && x(n)) {
			let s = () => {
				e.transA *= (c - 1) / (o - 1), e.min = i.startOnTick ? a[0] : Math.min(r, a[0]), e.max = i.endOnTick ? a[a.length - 1] : Math.max(n, a[a.length - 1]);
			};
			if (x(p) && x(e.threshold)) {
				for (; a[p] !== l || a.length !== o || a[0] > r || a[a.length - 1] < n;) {
					for (a.length = 0, a.push(e.threshold); a.length < o;) a[p] === void 0 || a[p] > e.threshold ? h() : m();
					if (f > e.tickInterval * 8) break;
					f *= 2;
				}
				s();
			} else if (c < o) {
				for (; a.length < o;) a.length % 2 || r === l ? m() : h();
				s();
			}
			if (W(t)) {
				for (d = u = a.length; d--;) (t === 3 && d % 2 == 1 || t <= 2 && d > 0 && d < u - 1) && a.splice(d, 1);
				e.finalTickAmt = void 0;
			}
		}
	}
	setScale() {
		let e = this, { chart: t, coll: n, options: r, stacking: i } = e, { linkedTo: a } = r, o = t[n] || [], c = o.indexOf(e), l = s(a) ? L(o, (e) => e.options.id === a) : x(a) ? o[a] : void 0, u = e.linkedParent = l === e ? void 0 : l;
		u && c > -1 && o.indexOf(u) > c && u.setScale();
		let d = !1, f = !1;
		e.series.forEach((e) => {
			d = d || e.isDirtyData || e.isDirty, f = f || e.xAxis?.isDirty || !1;
		}), e.setAxisSize();
		let m = e.len !== e.old?.len;
		m || d || f || e.linkedParent || e.forceRedraw || e.userMin !== e.old?.userMin || e.userMax !== e.old?.userMax || e.alignToOthers() ? (i && n === "yAxis" && i.buildStacks(), e.forceRedraw = !1, e.userMinRange || (e.minRange = void 0), e.getSeriesExtremes(), e.setTickInterval(), i && n === "xAxis" && i.buildStacks(), e.isDirty ||= m || e.min !== e.old?.min || e.max !== e.old?.max) : i && i.cleanStacks(), d && delete e.allExtremes, p(this, "afterSetScale");
	}
	setExtremes(e, t, n = !0, r, i) {
		let a = this.chart;
		this.series.forEach((e) => {
			delete e.kdTree;
		}), e = a.time.parse(e), t = a.time.parse(t), i = R(i, {
			min: e,
			max: t
		}), p(this, "setExtremes", i, (e) => {
			this.userMin = e.min, this.userMax = e.max, this.eventArgs = e, n && a.redraw(r);
		});
	}
	setAxisSize() {
		let e = this.chart, t = this.options, n = t.offsets || [
			0,
			0,
			0,
			0
		], r = this.horiz, i = this.width = Math.round(N(t.width ?? e.plotWidth - n[3] + n[1], e.plotWidth)), a = this.height = Math.round(N(t.height ?? e.plotHeight - n[0] + n[2], e.plotHeight)), o = this.top = Math.round(N(t.top ?? e.plotTop + n[0], e.plotHeight, e.plotTop)), s = this.left = Math.round(N(t.left ?? e.plotLeft + n[3], e.plotWidth, e.plotLeft));
		this.bottom = e.chartHeight - a - o, this.right = e.chartWidth - i - s, this.len = Math.max(r ? i : a, 0), this.pos = r ? s : o;
	}
	getExtremes() {
		let e = this, t = e.logarithmic;
		return {
			min: t ? A(t.lin2log(e.min)) : e.min,
			max: t ? A(t.lin2log(e.max)) : e.max,
			dataMin: e.dataMin,
			dataMax: e.dataMax,
			userMin: e.userMin,
			userMax: e.userMax
		};
	}
	getThreshold(e) {
		let t = this, n = t.logarithmic, r = n ? n.lin2log(t.min) : t.min, i = n ? n.lin2log(t.max) : t.max;
		return e === null || e === -Infinity ? e = r : e === Infinity ? e = i : r > e ? e = r : i < e && (e = i), t.translate(e, 0, 1, 0, 1);
	}
	autoLabelAlign(e) {
		let t = ((e - this.side * 90) % 360 + 360) % 360, n = { align: "center" };
		return p(this, "autoLabelAlign", n, function(e) {
			t > 15 && t < 165 ? e.align = "right" : t > 195 && t < 345 && (e.align = "left");
		}), n.align;
	}
	tickSize(e) {
		let t = this.options, n = t[e === "tick" ? "tickWidth" : "minorTickWidth"] ?? (e === "tick" && this.isXAxis && !this.categories ? 1 : 0), r = t[e === "tick" ? "tickLength" : "minorTickLength"], i;
		n && r && (t[e + "Position"] === "inside" && (r = -r), i = [r, n]);
		let a = {
			tickSize: i,
			prefix: e
		};
		return p(this, "afterTickSize", a), a.tickSize;
	}
	labelMetrics() {
		let e = this.chart.renderer, t = this.ticks, n = t[Object.keys(t)[0]] || {};
		return this.chart.renderer.fontMetrics(n.label || e.box);
	}
	unsquish() {
		let e = this.options.labels, t = e.padding || 0, n = this.horiz, r = this.tickInterval, i = this.len / ((+!!this.categories + this.max - this.min) / r), a = e.rotation, o = A(this.labelMetrics().h * .8), s = Math.max(this.max - this.min, 0), c = function(e) {
			let n = (e + 2 * t) / (i || 1);
			return n = n > 1 ? Math.ceil(n) : 1, n * r > s && e !== Infinity && i !== Infinity && s && (n = Math.ceil(s / r)), A(n * r);
		}, l = r, u, d = Number.MAX_VALUE, f;
		if (n) {
			if (e.staggerLines || (x(a) ? f = [a] : i < e.autoRotationLimit && (f = e.autoRotation)), f) {
				let e, t;
				for (let n of f) (n === a || n && n >= -90 && n <= 90) && (e = c(Math.abs(o / Math.sin(xt * n))), t = e + Math.abs(n / 360), t < d && (d = t, u = n, l = e));
			}
		} else l = c(o * .75);
		return this.autoRotation = f, this.labelRotation = u ?? (x(a) ? a : 0), e.step ? r : l;
	}
	getSlotWidth(e) {
		let t = this.chart, n = this.horiz, r = this.options.labels, i = Math.max(this.tickPositions.length - +!this.categories, 1), a = t.margin[3];
		if (e && x(e.slotWidth)) return e.slotWidth;
		if (n && r.step < 2 && !this.isRadial) return r.rotation ? 0 : (this.staggerLines || 1) * this.len / i;
		if (!n) {
			let e = r.style.width;
			if (e !== void 0) return parseInt(String(e), 10);
			if (!this.opposite && a) return a - t.spacing[3];
		}
		return t.chartWidth * .33;
	}
	renderUnsquish() {
		let e = this.chart, t = e.renderer, n = this.tickPositions, r = this.ticks, i = this.options.labels, a = i.style, o = this.horiz, c = this.getSlotWidth(), l = Math.max(1, Math.round(c - (o ? 2 * (i.padding || 0) : i.distance ?? 15))), u = {}, d = this.labelMetrics(), f = a.lineClamp, p, m = f ?? (Math.floor(this.len / (n.length * d.h)) || 1), h = 0;
		s(i.rotation) || (u.rotation = i.rotation || 0), n.forEach(function(e) {
			h = Math.max(h, r[e].label?.textPxLength || 0);
		}), this.maxLabelLength = h, this.autoRotation ? h > l && h > d.h ? u.rotation = this.labelRotation : this.labelRotation = 0 : c && (p = l), u.rotation && (p = h > e.chartHeight * .5 ? e.chartHeight * .33 : h, f || (m = 1)), this.labelAlign = i.align || this.autoLabelAlign(this.labelRotation || 0), this.labelAlign && (u.align = this.labelAlign), n.forEach(function(e) {
			let t = r[e], n = t?.label, i = a.width, o = {};
			n && (n.attr(u), t.shortenLabel ? t.shortenLabel() : p && !i && a.whiteSpace !== "nowrap" && (p < (n.textPxLength || 0) || n.element.tagName === "DIV") ? n.css(R(o, {
				width: `${p}px`,
				lineClamp: m
			})) : (n.styles.width || n.textWidth || n.styles.lineClamp) && !o.width && !i && n.css({
				width: "auto",
				lineClamp: 0
			}));
		}, this), this.tickRotCorr = t.rotCorr(d.b, this.labelRotation || 0, this.side !== 0);
	}
	hasData() {
		return this.series.some(function(e) {
			return e.hasData();
		}) || this.options.showEmpty && W(this.min) && W(this.max);
	}
	addTitle(e) {
		let t = this, n = t.chart.renderer, r = t.horiz, i = t.opposite, a = t.options.title, o = t.chart.styledMode, s = a.textAlign || (r ? {
			low: "left",
			middle: "center",
			high: "right"
		} : {
			low: i ? "right" : "left",
			middle: "center",
			high: i ? "left" : "right"
		})[a.align], c = {
			text: a.text || "",
			zIndex: 7,
			align: s
		}, l = { rotation: a.rotation || 0 }, u = t.axisTitle;
		if (u ? u.attr(c).animate(l) : (u = n.text("", 0, 0, a.useHTML).attr(R(c, l)).addClass("highcharts-axis-title"), u.add(t.axisGroup), u.isNew = !0), !o) {
			let e = d(a.style);
			!a.style.width && !t.isRadial && (e.width = t.len + "px"), u.css(e);
		}
		u[e ? "show" : "hide"](e), t.axisTitle = u;
	}
	generateTick(e) {
		let t = this, n = t.ticks;
		n[e] ? n[e].addLabel() : n[e] = new ht(t, e);
	}
	createGroups() {
		let { axisParent: e, chart: t, coll: n, options: r } = this, i = t.renderer, a = (t, a) => i.g(t).addClass(`highcharts-${n.toLowerCase()}${a} ` + (this.isRadial ? `highcharts-radial-axis${a} ` : "") + (r.className || "")).add(e);
		(this.axisGroup ||= a("axis", "")).attr({ zIndex: r.zIndex }), (this.gridGroup ||= a("grid", "-grid")).clip(this.clippable ? t.plotClipInner : void 0).attr({ zIndex: r.gridZIndex }), (this.labelGroup ||= a("axis-labels", "-labels")).attr({ zIndex: r.labels.zIndex });
	}
	shuffleTicks() {
		let e = this.ticks, t = this.old?.names, n = (e) => new Set(e).size !== e.length;
		if (this.type === "category" && t && !n(t) && !n(this.names)) {
			t.forEach((n, r) => {
				let i = this.namesMap[n];
				W(i) && r !== i && (e[r] && (e[r].pos = i, this.isDirty = !0), e[i] && this.names.indexOf(t[i]) === -1 && (e[i].pos = NaN));
			});
			let n = Object.values(e);
			Object.keys(e).forEach((t) => {
				delete e[t];
			}), n.forEach((t) => {
				isNaN(t.pos) ? t.destroy() : e[t.pos] = t;
			});
		}
	}
	getOffset() {
		let e = this, { chart: t, horiz: n, options: r, side: i, ticks: a, tickPositions: o, coll: s } = e, c = e.hasData(), l = r.title, d = r.labels, f = x(r.crossing), m = t.axisOffset, h = t.clipOffset, g = [
			-1,
			1,
			1,
			-1
		][i], _ = d.distance ?? 15, v = e.tickRotCorr || {
			x: 0,
			y: 0
		}, y = 0, b, S = 0, C, w = 0, T = 0, E, D, O;
		if (e.showAxis = b = c || r.showEmpty, e.staggerLines = e.horiz && d.staggerLines || void 0, e.createGroups(), c || e.linkedParent ? (e.shuffleTicks(), o.forEach(e.generateTick.bind(e)), e.renderUnsquish(), v = e.tickRotCorr, y = Math.abs(v.x), O = e.reserveSpaceDefault = i === 0 || i === 2 || {
			1: "left",
			3: "right"
		}[i] === e.labelAlign, (d.reserveSpace ?? (!f && null) ?? (e.labelAlign === "center" || null) ?? O) && o.forEach(function(e) {
			T = Math.max(a[e].getLabelSize(), T);
		}), e.staggerLines && (T *= e.staggerLines), !n && x(e.labelRotation) && O && (T -= y), e.labelOffset = T * (e.opposite ? -1 : 1)) : u(a, function(e, t) {
			e.destroy(), delete a[t];
		}), l?.text && l.enabled !== !1 ? (e.addTitle(b), b && !f && l.reserveSpace !== !1 && (e.titleOffset = S = e.axisTitle.getBBox()[n ? "height" : "width"], C = l.offset, w = W(C) ? 0 : l.margin ?? (n ? 5 : 10))) : e.axisTitle = e.axisTitle?.destroy(), e.renderLine(), e.offset = g * (x(r.offset) ? r.offset : m[i] ? m[i] + (r.margin || 0) : 0), D = i === 0 ? -e.labelMetrics().h : i === 2 ? v.y : 0, E = Math.abs(T) + w, T && (E -= D, E += g * (n ? d.y ?? v.y + g * _ : d.x ?? (O ? g * (_ - y) : v.x + g * _)), !n && !O && e.labelAlign === "center" && x(e.labelRotation) && (E += y)), e.axisTitleMargin = C ?? E, e.maxLabelDimensions = e.getMaxLabelDimensions?.(a, o), s !== "colorAxis" && h) {
			let t = this.tickSize("tick");
			m[i] = Math.max(m[i], Math.max((e.axisTitleMargin || 0) + S, E) + g * e.offset, E, o?.length && t ? t[0] + g * e.offset : 0);
			let n = !e.axisLine || r.offset ? 0 : e.axisLine.strokeWidth() / 2;
			h[i] = Math.max(h[i], n);
		}
		p(this, "afterGetOffset");
	}
	getLinePath(e) {
		let t = this.chart, n = this.opposite, r = this.offset, i = this.horiz, a = this.left + (n ? this.width : 0) + r, o = t.chartHeight - this.bottom - (n ? this.height : 0) + r;
		return n && (e *= -1), t.renderer.crispLine([[
			"M",
			i ? this.left : a,
			i ? o : this.top
		], [
			"L",
			i ? t.chartWidth - this.right : a,
			i ? o : t.chartHeight - this.bottom
		]], e);
	}
	renderLine() {
		let { chart: e, offset: t = 0, options: n } = this, r = this.axisLine ? "animate" : "attr";
		this.axisLine ||= e.renderer.path().addClass("highcharts-axis-line").attr({ zIndex: 7 }).clip(this.clippable && t <= 0 ? e.plotClipOuter : void 0).add(this.axisGroup), e.styledMode || this.axisLine[r]({
			stroke: n.lineColor,
			"stroke-width": n.lineWidth
		});
	}
	getTitlePosition(e) {
		let t = this.horiz, n = this.left, r = this.top, i = this.len, a = this.options.title, o = t ? n : r, s = this.opposite, c = this.offset, l = a.x, u = a.y, d = this.chart.renderer.fontMetrics(e), f = e ? Math.max(e.getBBox(!1, 0).height - d.h - 1, 0) : 0, m = {
			low: o + (t ? 0 : i),
			middle: o + i / 2,
			high: o + (t ? i : 0)
		}[a.align], h = (t ? r + this.height : n) + (t ? 1 : -1) * (s ? -1 : 1) * (this.axisTitleMargin || 0) + [
			-f,
			f,
			d.f,
			-f
		][this.side], g = {
			x: t ? m + l : h + (s ? this.width : 0) + c + l,
			y: t ? h + u - (s ? this.height : 0) + c : m + u
		};
		return p(this, "afterGetTitlePosition", { titlePosition: g }), g;
	}
	renderMinorTick(e, t) {
		let n = this, r = n.minorTicks;
		r[e] || (r[e] = new ht(n, e, "minor")), t && r[e].isNew && r[e].render(null, !0), r[e].render(null, !1, 1);
	}
	renderTick(e, t, n) {
		let r = this, i = r.ticks;
		(!r.linkedParent || e >= r.min && e <= r.max || r.grid?.isColumn) && (i[e] || (i[e] = new ht(r, e)), n && i[e].isNew && i[e].render(t, !0, -1), i[e].render(t));
	}
	render() {
		let e = this, t = e.chart, n = e.logarithmic, r = t.renderer, i = e.options, a = e.tickPositions, o = e.axisTitle, s = e.ticks, c = e.minorTicks, l = e.alternateBands, d = i.alternateGridColor, f = i.crossing, m = e.tickmarkOffset, h = e.axisLine, g = e.showAxis, _ = +e.visible, v = me(r.globalAnimation), y, b;
		if (e.labelEdge.length = 0, e.overlap = !1, this.createGroups(), [
			s,
			c,
			l
		].forEach(function(e) {
			u(e, function(e) {
				e.isActive = !1;
			});
		}), x(f)) {
			let n = this.isXAxis ? t.yAxis[0] : t.xAxis[0], r = [
				1,
				-1,
				-1,
				1
			][this.side];
			if (n) {
				let t = n.toPixels(f, !0);
				e.horiz && (t = n.len - t), e.offset = r * t;
			}
		}
		if (e.hasData() || e.linkedParent) {
			let r = e.chart.hasRendered && e.old && x(e.old.min);
			e.minorTickInterval && !e.categories && e.getMinorTickPositions().forEach(function(t) {
				e.renderMinorTick(t, r);
			}), a.length && (a.forEach(function(t, n) {
				e.renderTick(t, n, r);
			}), m && (e.min === 0 || e.single) && (s[-1] ||= new ht(e, -1, null, !0), s[-1].render(-1))), d && a.forEach(function(r, i) {
				b = a[i + 1] === void 0 ? e.max - m : a[i + 1] + m, i % 2 == 0 && r < e.max && b <= e.max + (t.polar ? -m : m) && (l[r] || (l[r] = new z.PlotLineOrBand(e, {}, "plotBands")), y = r + m, l[r].options = {
					from: n ? n.lin2log(y) : y,
					to: n ? n.lin2log(b) : b,
					color: d,
					className: "highcharts-alternate-grid"
				}, l[r].render(), l[r].isActive = !0);
			});
		}
		for (let e of ["plotBands", "plotLines"]) for (let t of this[e]) t.render();
		[
			s,
			c,
			l
		].forEach(function(e) {
			let n = [], r = v.duration;
			u(e, function(e, t) {
				e.isActive || (e.render(t, !1, 0), e.isActive = !1, n.push(t));
			}), k(function() {
				let t = n.length;
				for (; t--;) e[n[t]] && !e[n[t]].isActive && (e[n[t]].destroy(), delete e[n[t]]);
			}, e === l || !t.hasRendered || !r ? 0 : r);
		}), h && (h[h.isPlaced ? "animate" : "attr"]({
			d: this.getLinePath(h.strokeWidth()),
			opacity: _
		}), h.isPlaced = !0, h[g ? "show" : "hide"](g)), o && g && (o[o.isNew ? "attr" : "animate"]({
			opacity: _,
			...e.getTitlePosition(o)
		}), o.isNew = !1), e.stacking?.renderStackTotals(), this.old || this.saveOld(), e.isDirty = !1, p(this, "afterRender");
	}
	redraw() {
		(this.visible || this.axisGroup) && this.render(), this.series.forEach(function(e) {
			e.isDirty = !0;
		});
	}
	saveOld() {
		this.old = x(this.min) ? {
			horiz: this.horiz,
			len: this.len,
			max: this.max,
			min: this.min,
			names: this.names.slice(),
			transA: this.transA,
			userMax: this.userMax,
			userMin: this.userMin
		} : void 0;
	}
	destroy() {
		p(this, "destroy"), V(this), [
			this.ticks,
			this.minorTicks,
			this.alternateBands,
			this.plotBands,
			this.plotLines,
			this.plotLinesAndBandsGroups
		].forEach(b), [
			"axisLine",
			"axisTitle",
			"axisGroup",
			"gridGroup",
			"labelGroup",
			"cross",
			"scrollbar"
		].forEach((e) => {
			this[e] = this[e]?.destroy();
		}), u(this, (e, t) => {
			delete this[t];
		});
	}
	drawCrosshair(e, t) {
		let n = this.crosshair, r = n?.snap ?? !0, i = this.chart, a = this.cross, o, s, c, l;
		if (p(this, "drawCrosshair", {
			e,
			point: t
		}), e ||= this.cross?.e, !n || (W(t) || !r) === !1) this.hideCrosshair();
		else {
			if (clearTimeout(this.crossShowTimer), r ? W(t) && (s = (this.coll === "colorAxis" ? null : t.crosshairPos) ?? (this.isXAxis ? t.plotX : this.len - t.plotY)) : s = e && (this.horiz ? e.chartX - this.pos : this.len - e.chartY + this.pos), W(s) && (l = {
				value: t && (this.isXAxis ? t.x : t.stackY ?? t.y ?? void 0),
				translatedValue: s
			}, i.polar && R(l, {
				isCrosshair: !0,
				chartX: e?.chartX,
				chartY: e?.chartY,
				point: t
			}), o = this.getPlotLinePath(l) || null), !W(o)) {
				this.hideCrosshair();
				return;
			}
			c = this.categories && !this.isRadial, this.crossShowTimer = k(() => {
				let t = this.cross;
				t || (this.cross = t = i.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c ? "category " : "thin ") + (n.className || "")).attr({ zIndex: n.zIndex ?? 2 }).clip(n.clip === !1 ? void 0 : i.plotClipInner).add()), i.styledMode || t.attr({
					stroke: n.color || (c ? vt("var(--highcharts-highlight-color-20)").setOpacity(.25).get() : "var(--highcharts-neutral-color-20)"),
					"stroke-width": n.width ?? 1,
					dashstyle: n.dashStyle || "Solid"
				}).css({ "pointer-events": "none" }), t.show().animate({ d: o }, me(n?.animation)), c && !n.width && t.attr({ "stroke-width": this.transA }), t.e = e;
			}, (!a || a.attr("visibility") === "hidden") && n.showDelay || 0);
		}
		p(this, "afterDrawCrosshair", {
			e,
			point: t
		});
	}
	hideCrosshair() {
		clearTimeout(this.crossShowTimer), this.cross && this.cross.hide(), p(this, "afterHideCrosshair");
	}
	update(e = {}, t = !0) {
		let n = this.chart;
		p(this, "update", { options: e }), e = d(this.userOptions, e), this.isDirty = this.forceRedraw = !0, this.init(n, e), n.isDirtyBox = !0, t && n.redraw();
	}
	remove(e) {
		let t = this.chart, n = this.coll, r = this.series, i = r.length;
		for (; i--;) r[i] && r[i].remove(!1);
		h(t.axes, this), h(t[n] || [], this), t.orderItems(n), this.destroy(), t.isDirtyBox = !0, (e ?? !0) && t.redraw();
	}
	setTitle(e, t) {
		this.update({ title: e }, t);
	}
	setCategories(e, t) {
		this.update({ categories: e }, t);
	}
}, { composed: wt } = z, Tt;
(function(t) {
	function n(t) {
		if (e(wt, "Axis.DateTime")) {
			let e = t.prototype;
			e.getTimeTicks = r, I(t, "afterSetType", i);
		}
		return t;
	}
	t.compose = n;
	function r() {
		return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
	}
	function i() {
		if (this.type !== "datetime") {
			this.dateTime = void 0;
			return;
		}
		this.dateTime ||= new a(this);
	}
	class a {
		constructor(e) {
			this.axis = e;
		}
		normalizeTimeTickInterval(e, t) {
			let n = t || [
				["millisecond", [
					1,
					2,
					5,
					10,
					20,
					25,
					50,
					100,
					200,
					500
				]],
				["second", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["minute", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["hour", [
					1,
					2,
					3,
					4,
					6,
					8,
					12
				]],
				["day", [1, 2]],
				["week", [1, 2]],
				["month", [
					1,
					2,
					3,
					4,
					6
				]],
				["year", null]
			], r = n[n.length - 1], i = P[r[0]], a = r[1], s, c;
			for (s = 0; s < n.length; s++) if (r = n[s], i = P[r[0]], a = r[1], n[s + 1]) {
				let t = (i * a[a.length - 1] + P[n[s + 1][0]]) / 2;
				if (e <= t) {
					c = t / e;
					break;
				}
			}
			i === P.year && e < 5 * i && (a = [
				1,
				2,
				5
			]);
			let l = ue(e / i, a, r[0] === "year" ? Math.max(o(e / i), 1) : 1);
			return {
				unitRange: i,
				count: l,
				unitName: r[0],
				match: c
			};
		}
		getXDateFormat(e, t) {
			let { axis: n } = this, r = n.chart.time;
			return n.closestPointRange ? r.getDateFormat(n.closestPointRange, e, n.options.startOfWeek, t) || r.resolveDTLFormat(t.year).main : r.resolveDTLFormat(t.day).main;
		}
	}
	t.Additions = a;
})(Tt ||= {});
var Et = Tt, { composed: Dt } = z, Ot;
(function(t) {
	function n(t) {
		return e(Dt, "Axis.Logarithmic") && (I(t, "afterSetType", r), I(t, "afterInit", i)), t;
	}
	t.compose = n;
	function r() {
		this.type === "logarithmic" ? this.logarithmic ??= new a(this) : this.logarithmic = void 0;
	}
	function i() {
		let e = this, t = e.logarithmic;
		t && (e.lin2val = function(e) {
			return t.lin2log(e);
		}, e.val2lin = function(e) {
			return t.log2lin(e);
		});
	}
	class a {
		constructor(e) {
			this.axis = e;
		}
		getLogTickPositions(e, t, n, r) {
			let i = this, a = i.axis, o = a.len, s = a.options, c = [];
			if (r || (i.minorAutoInterval = void 0), e >= .5) e = Math.round(e), c = a.getLinearTickPositions(e, t, n);
			else if (e >= .08) {
				let a = Math.floor(t), o, s, l, u, d, f, p;
				for (o = e > .3 ? [
					1,
					2,
					4
				] : e > .15 ? [
					1,
					2,
					4,
					6,
					8
				] : [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9
				], s = a; s < n + 1 && !p; s++) for (u = o.length, l = 0; l < u && !p; l++) d = i.log2lin(i.lin2log(s) * o[l]), d > t && (!r || f <= n) && f !== void 0 && c.push(f), f > n && (p = !0), f = d;
			} else {
				let l = i.lin2log(t), u = i.lin2log(n), d = r ? a.getMinorTickInterval() : s.tickInterval, f = d === "auto" ? null : d, p = s.tickPixelInterval / (r ? 5 : 1), m = r ? o / a.tickPositions.length : o;
				e = f ?? i.minorAutoInterval ?? (u - l) * p / (m || 1), e = ue(e), c = a.getLinearTickPositions(e, l, u).map(i.log2lin), r || (i.minorAutoInterval = e / 5);
			}
			return r || (a.tickInterval = e), c;
		}
		lin2log(e) {
			return 10 ** e;
		}
		log2lin(e) {
			return Math.log(e) / Math.LN10;
		}
	}
	t.Additions = a;
})(Ot ||= {});
var kt = Ot, At;
(function(e) {
	let t, n = (e) => function(n) {
		var r;
		let i = new t(this, n, e);
		return this.visible && i.render(), (r = this.options)[e] || (r[e] = this.userOptions[e] = []), this.options[e].push(n), this[e].push(i), i;
	};
	function r(e, r) {
		let o = r.prototype;
		return o.addPlotBand || (t = e, R(o, {
			addPlotBand: n("plotBands"),
			addPlotLine: n("plotLines"),
			getPlotBandPath: i,
			removePlotBand: a,
			removePlotLine: a
		}), I(r, "afterInit", function() {
			if (!this.plotBands) {
				this.plotLinesAndBandsGroups = {};
				for (let e of ["plotBands", "plotLines"]) {
					this[e] = [];
					for (let n of B(this.options[e] || [])) this[e].push(new t(this, n, e));
				}
			}
		}), I(r, "update", function({ options: e }) {
			for (let t of ["plotBands", "plotLines"]) if (e[t]) {
				let n = this[t];
				B(e[t]).forEach((r = {}, i) => {
					let a;
					r?.id && (a = n.find((e) => e.id === r.id)), a ||= n[i], a ? (a.update(r, !1), e[t][i] = a.options) : a = this[t === "plotBands" ? "addPlotBand" : "addPlotLine"](r), a.isActive = !0;
				});
				let r = n.length;
				for (; r--;) n[r].isActive ? delete n[r].isActive : n[r].remove();
			}
		})), r;
	}
	e.compose = r;
	function i(e, t, n) {
		n ||= this.options;
		let r = this.getPlotLinePath({
			value: t,
			force: !0,
			acrossPanes: n.acrossPanes
		}), i = [], a = this.horiz, o = !x(this.min) || !x(this.max) || e < this.min && t < this.min || e > this.max && t > this.max, s = this.getPlotLinePath({
			value: e,
			force: !0,
			acrossPanes: n.acrossPanes
		}), c, l = 1, u;
		if (s && r) for (o && (u = s.toString() === r.toString(), l = 0), c = 0; c < s.length; c += 2) {
			let e = s[c], t = s[c + 1], n = r[c], o = r[c + 1];
			(e[0] === "M" || e[0] === "L") && (t[0] === "M" || t[0] === "L") && (n[0] === "M" || n[0] === "L") && (o[0] === "M" || o[0] === "L") && (a && n[1] === e[1] ? (n[1] += l, o[1] += l) : !a && n[2] === e[2] && (n[2] += l, o[2] += l), i.push([
				"M",
				e[1],
				e[2]
			], [
				"L",
				t[1],
				t[2]
			], [
				"L",
				o[1],
				o[2]
			], [
				"L",
				n[1],
				n[2]
			], ["Z"])), i.isFlat = u;
		}
		return i;
	}
	function a(e) {
		[...this.plotBands || [], ...this.plotLines || []].find((t) => t.id === e)?.remove();
	}
})(At ||= {});
var jt = At, Mt = class e {
	static compose(t, n) {
		return I(t, "afterInit", function() {
			this.labelCollectors.push(() => {
				let e = [];
				for (let t of this.axes) for (let n of ["plotBands", "plotLines"]) for (let { label: r, options: i } of t[n]) r && !i?.label?.allowOverlap && e.push(r);
				return e;
			});
		}), jt.compose(e, n);
	}
	constructor(e, t, n) {
		this.axis = e, this.options = t, this.id = t.id, this.coll = n;
	}
	render() {
		p(this, "render");
		let { axis: e, options: t } = this, { chart: n, horiz: r, logarithmic: i } = e, { color: a, events: o, zIndex: s = 0 } = t, { renderer: c, styledMode: l, time: f } = e.chart, m = f.parse(t.to), h = f.parse(t.from), g = f.parse(t.value), _ = t.borderWidth, v = t.label, { label: y, svgElem: b } = this, x, S = this.coll === "plotBands", C = S ? "band" : "line", w = `${C}s-${s}`, T = !b, E = { class: `highcharts-plot-${C} ${t.className || ""}` }, D = S ? _ || 0 : t.width ?? 1;
		l || (E["stroke-width"] = D), x = e.plotLinesAndBandsGroups[w], x || (e.plotLinesAndBandsGroups[w] = x = c.g("plot-" + w).clip(n.plotClipOuter).attr({ zIndex: s }).add()), x[T ? "attr" : "animate"]({ opacity: +e.visible }), b || (this.svgElem = b = c.path().attr(E)), b.parentGroup !== x && b.add(x);
		let O;
		return !S && W(g) ? O = e.getPlotLinePath({
			value: i?.log2lin(g) ?? g,
			lineWidth: b.strokeWidth(),
			acrossPanes: t.acrossPanes
		}) : S && W(h) && W(m) && (O = e.getPlotBandPath(i?.log2lin(h) ?? h, i?.log2lin(m) ?? m, t)), O && (E.d = O), l || (S ? (E.fill = a || "var(--highcharts-highlight-color-10)", _ && (E.stroke = t.borderColor)) : (E.stroke = a || "var(--highcharts-neutral-color-40)", t.dashStyle && (E.dashstyle = t.dashStyle))), T && o && u(o, (e, t) => {
			b?.on(t, (e) => {
				o[t].apply(this, [e, this]);
			});
		}), (T || !b.d) && O?.length ? b.attr(E) : b && (O ? (b.show(), b.animate(E)) : b.d && (b.hide(), y && (this.label = y = y.destroy()))), v && (W(v.text) || W(v.formatter)) && O?.length && e.width > 0 && e.height > 0 && !O.isFlat ? (v = d({
			align: r && S ? "center" : void 0,
			x: r ? !S && 4 : 10,
			verticalAlign: !r && S ? "middle" : void 0,
			y: r ? S ? 16 : 10 : S ? 6 : -4,
			rotation: r && !S ? 90 : 0,
			...S ? { inside: !0 } : {}
		}, v), this.renderLabel(v, O, S, s)) : y && y.hide(), this;
	}
	renderLabel(e, t, n, r) {
		let i = this, a = i.axis, o = a.chart, s = o.renderer, c = e.inside, l = i.label;
		l || (i.label = l = s.text("", 0, 0, e.useHTML).attr({ zIndex: r })), l.attr({
			text: this.getLabelText(e),
			align: e.textAlign || e.align,
			class: "highcharts-plot-" + (n ? "band" : "line") + "-label " + (e.className || "")
		})[l.placed ? "animate" : "attr"]({
			opacity: 1,
			rotation: e.rotation
		}), o.styledMode || l.css(d({
			color: o.options.title?.style?.color,
			fontSize: "0.8em",
			textOverflow: n && !c ? "" : "ellipsis"
		}, e.style)), l.added || l.add();
		let u = t.xBounds || [
			t[0][1],
			t[1][1],
			n ? t[2][1] : t[0][1]
		], f = t.yBounds || [
			t[0][2],
			t[1][2],
			n ? t[2][2] : t[0][2]
		], p = D(u), m = D(f), h = F(u) - p;
		l.align(e, !1, {
			x: p,
			y: m,
			width: h,
			height: F(f) - m
		}), l.alignAttr.y -= s.fontMetrics(l).b, !l.alignValue || l.alignValue === "left" || W(c) ? l.css({ width: (e.style?.width || (!n || !c ? l.rotation === 90 ? a.height - (l.alignAttr.y - a.top) : (e.clip ? a.width + a.left : o.chartWidth) - l.alignAttr.x : h)) + "px" }) : l.textWidth && l.css({ width: "auto" }), l.show(!0);
	}
	update(e, t = !0) {
		d(!0, this.options, e), t && this.render();
	}
	getLabelText(e) {
		return W(e.formatter) ? e.formatter.call(this, this) : e.text;
	}
	destroy() {
		b(this, this.axis);
	}
	remove() {
		h(this.axis[this.coll], this), h(this.axis.options[this.coll] || [], this.options), this.destroy();
	}
}, { format: Nt } = J, { composed: Pt, dateFormats: Ft, doc: It, isSafari: Lt } = z, { distribute: Rt } = Oe, zt = (e) => {
	clearTimeout(e.hideTimer), clearTimeout(e.showTimer);
}, Bt = class {
	constructor(e, t, n) {
		this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = e, this.init(e, t), this.pointer = n;
	}
	bodyFormatter(e) {
		return e.map((e) => {
			let t = e.series.tooltipOptions, n = e.formatPrefix || "point";
			return (t[n + "Formatter"] || e.tooltipFormatter).call(e, t[n + "Format"] || "", e);
		});
	}
	cleanSplit(e) {
		this.chart.series.forEach(function(t) {
			let n = t?.tt;
			n && (!n.isActive || e ? t.tt = n.destroy() : n.isActive = !1);
		});
	}
	defaultFormatter(e) {
		let t = this.points || B(this), n;
		return n = [e.headerFooterFormatter(t[0])], n = n.concat(e.bodyFormatter(t)), n.push(e.headerFooterFormatter(t[0], !0)), n;
	}
	destroy() {
		this.tracker = this.tracker?.destroy(), this.label = this.label?.destroy(), this.split && (this.cleanSplit(!0), this.tt = this.tt?.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), i(this.container)), v(this.hideTimer), zt(this);
	}
	getAnchor(e, t) {
		let { chart: n, pointer: r } = this, i = n.inverted, a = n.plotTop, o = n.plotLeft, s;
		if (e = B(e), e[0].series?.yAxis && !e[0].series.yAxis.options.reversedStacks && (e = e.slice().reverse()), this.followPointer && t) t.chartX === void 0 && (t = r.normalize(t)), s = [t.chartX - o, t.chartY - a];
		else if (e[0].tooltipPos) s = e[0].tooltipPos;
		else {
			let n = 0, r = 0;
			e.forEach(function(e) {
				let t = e.pos(!0);
				t && (n += t[0], r += t[1]);
			}), n /= e.length, r /= e.length, this.shared && e.length > 1 && t && (i ? n = t.chartX : r = t.chartY), s = [n - o, r - a];
		}
		let c = {
			point: e[0],
			ret: s
		};
		return p(this, "getAnchor", c), c.ret.map(Math.round);
	}
	getClassName(e, t, n) {
		let r = this.options, i = e.series, a = i.options;
		return [
			r.className,
			"highcharts-label",
			n && "highcharts-tooltip-header",
			t ? "highcharts-tooltip-box" : "highcharts-tooltip",
			!n && "highcharts-color-" + (e.colorIndex ?? i.colorIndex),
			a?.className
		].filter(s).join(" ");
	}
	getLabel({ anchorX: e, anchorY: t } = {
		anchorX: 0,
		anchorY: 0
	}) {
		let n = this, i = this.chart.styledMode, a = this.options, o = this.split && this.allowShared, s = this.container, c = this.chart.renderer;
		if (this.label) {
			let e = !this.label.hasClass("highcharts-label");
			(!o && e || o && !e) && this.destroy();
		}
		if (!this.label) {
			if (this.outside) {
				let e = this.chart, t = e.options.chart.style;
				this.container = s = z.doc.createElement("div"), s.className = "highcharts-container highcharts-tooltip-container " + (e.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || [].join(" ")), s.dataset.highchartsChart = e.index.toString(), r(s, {
					position: "absolute",
					top: "1px",
					pointerEvents: "none",
					zIndex: Math.max(a.style.zIndex || 0, (t?.zIndex || 0) + 3)
				}), this.renderer = c = new st(s, 0, 0, t, void 0, void 0, c.styledMode);
			}
			if (o ? this.label = c.g("tooltip") : (this.label = c.label("", e, t, a.shape || "callout", void 0, void 0, a.useHTML, void 0, "tooltip").attr({
				padding: a.padding,
				r: a.borderRadius
			}), i || this.label.attr({
				fill: a.backgroundColor,
				"stroke-width": a.borderWidth ?? +!a.fixed
			}).css(a.style).css({ pointerEvents: a.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), n.outside) {
				let e = this.label;
				[e.xSetter, e.ySetter].forEach((t, r) => {
					e[r ? "ySetter" : "xSetter"] = (i) => {
						t.call(e, n.distance), e[r ? "y" : "x"] = i, s && (s.style[r ? "top" : "left"] = `${i}px`);
					};
				});
			}
			this.label.attr({ zIndex: 8 }).shadow(a.shadow ?? !a.fixed).add();
		}
		return s && !s.parentElement && z.doc.body.appendChild(s), this.label;
	}
	getPlayingField() {
		let { body: e, documentElement: t } = It, { chart: n, distance: r, outside: i } = this;
		return {
			width: i ? Math.max(e.scrollWidth, t.scrollWidth, e.offsetWidth, t.offsetWidth, t.clientWidth) - 2 * r - 2 : n.chartWidth,
			height: i ? Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, t.clientHeight) : n.chartHeight
		};
	}
	getPosition(e, t, n) {
		let { distance: r, chart: i, outside: a, pointer: o } = this, { inverted: s, plotLeft: c, plotTop: l, polar: u } = i, { plotX: d = 0, plotY: f = 0 } = n, p = {}, m = s && n.h || 0, { height: h, width: g } = this.getPlayingField(), _ = o.getChartPosition(), v = (e) => e * _.scaleX, y = (e) => e * _.scaleY, b = (n) => {
			let o = n === "x";
			return [
				n,
				o ? g : h,
				o ? e : t
			].concat(a ? [
				o ? v(e) : y(t),
				o ? _.left - r + v(d + c) : _.top - r + y(f + l),
				0,
				o ? g : h
			] : [
				o ? e : t,
				o ? d + c : f + l,
				o ? c : l,
				o ? c + i.plotWidth : l + i.plotHeight
			]);
		}, x = b("y"), S = b("x"), C, w = !!n.negative;
		!u && i.hoverSeries?.yAxis?.reversed && (w = !w);
		let T = !this.followPointer && (n.ttBelow ?? (!u && !s === w)), E = function(e, t, n, i, o, s, c) {
			let l = a ? e === "y" ? y(r) : v(r) : r, u = (n - i) / 2, d = i < o - r, f = o + r + i < t, h = o - l - n + u, g = o + l - u;
			if (T && f) p[e] = g;
			else if (!T && d) p[e] = h;
			else if (d) p[e] = Math.min(c - i, h - m < 0 ? h : h - m);
			else if (f) p[e] = Math.max(s, g + m + n > t ? g : g + m);
			else return p[e] = 0, !1;
		}, D = function(e, t, n, i, a) {
			if (a < r || a > t - r) return !1;
			a < n / 2 ? p[e] = 1 : a > t - i / 2 ? p[e] = t - i - 2 : p[e] = a - n / 2;
		}, O = function(e) {
			[x, S] = [S, x], C = e;
		}, k = () => {
			E.apply(0, x) === !1 ? C ? p.x = p.y = 0 : (O(!0), k()) : D.apply(0, S) === !1 && !C && (O(!0), k());
		};
		return (s && !u || this.len > 1) && O(), k(), a && (p.x -= _.left, p.y -= _.top), p;
	}
	getFixedPosition(e, t, n) {
		let r = n.series, { chart: i, options: a, split: o } = this, s = a.position, c = s.relativeTo, l = a.shared || r?.yAxis?.isRadial && (c === "pane" || !c) ? "plotBox" : c, u = l === "chart" ? i.renderer : i[l] || i.getClipBox(r, !0);
		return {
			x: u.x + (u.width - e) * m(s.align) + s.x,
			y: u.y + (u.height - t) * m(s.verticalAlign) + (!o && s.y || 0)
		};
	}
	hide(e) {
		let t = this;
		zt(this), e ??= this.options.hideDelay, this.isHidden || (this.hideTimer = k(function() {
			let n = t.getLabel();
			t.getLabel().animate({ opacity: 0 }, {
				duration: e && 150,
				complete: () => {
					n.hide(), t.container && t.container.remove();
				}
			}), t.isHidden = !0;
		}, e));
	}
	init(e, t) {
		this.chart = e, this.options = t, this.crosshairs = [], this.isHidden = !0, this.split = t.split && !e.inverted && !e.polar, this.shared = t.shared || this.split, this.outside = t.outside ?? !!(e.scrollablePixelsX || e.scrollablePixelsY);
	}
	shouldStickOnContact(e) {
		return !(this.followPointer || !this.options.stickOnContact || e && !this.pointer.inClass(e.target, "highcharts-tooltip"));
	}
	move(e, t, n, r) {
		let { followPointer: i, options: a } = this, o = me(!i && !this.isHidden && !a.fixed && a.animation), s = i || (this.len || 0) > 1, c = {
			x: e,
			y: t
		};
		this.anchorX = n, this.anchorY = r, s ? c.anchorX = c.anchorY = NaN : (c.anchorX = n, c.anchorY = r), o.step = () => this.drawTracker(), this.getLabel().animate(c, o);
	}
	refresh(e, t) {
		let n = this, { chart: r, options: i, pointer: a, shared: o } = this, c = B(e), l = c[0], u = i.format, d = i.formatter || n.defaultFormatter, f = r.styledMode, m = n.allowShared;
		if (!i.enabled || !l.series) return;
		zt(this), n.allowShared = !(!K(e) && e.series && e.series.noSharedTooltip), m &&= !n.allowShared, n.followPointer = !n.split && l.series.tooltipOptions.followPointer;
		let h = n.getAnchor(e, t), g = h[0], _ = h[1];
		o && n.allowShared && (a.applyInactiveState(c), c.forEach((e) => e.setState("hover")), l.points = c), this.len = c.length;
		let v = s(u) ? Nt(u, l, r) : d.call(l, n, l);
		l.points = void 0;
		let y = l.series;
		this.distance = y.tooltipOptions.distance ?? 16, v === !1 ? this.hide() : this.showTimer = k(() => {
			if (n.split && n.allowShared) n.renderSplit(v, c);
			else {
				let e = g, o = _;
				if (t && a.isDirectTouch && (e = t.chartX - r.plotLeft, o = t.chartY - r.plotTop), r.polar || y.options.clip === !1 || c.some((t) => a.isDirectTouch || t.series.shouldShowTooltip(e, o))) {
					let e = n.getLabel(m && n.tt || {});
					(!i.style.width || f) && e.css({ width: (this.outside ? this.getPlayingField() : r.spacingBox).width - 2 * i.padding + "px" }), e.attr({
						class: n.getClassName(l),
						text: K(v) ? v.join("") : v
					}), this.outside && e.attr({ x: G(e.x || 0, 0, this.getPlayingField().width - (e.width || 0) - 1) }), f || e.attr({ stroke: i.borderColor || l.color || y.color || "var(--highcharts-neutral-color-60)" }), n.updatePosition({
						plotX: g,
						plotY: _,
						negative: l.negative,
						ttBelow: l.ttBelow,
						series: y,
						h: h[2] || 0
					});
				} else {
					n.hide();
					return;
				}
			}
			n.isHidden && n.label && n.label.attr({ opacity: 1 }).show(), n.isHidden = !1;
		}, n.isHidden && i.showDelay || 0), p(this, "refresh");
	}
	renderSplit(e, t) {
		let n = this, { chart: r, chart: { chartWidth: i, chartHeight: a, plotHeight: o, plotLeft: c, plotTop: l, scrollablePixelsY: u = 0, scrollablePixelsX: f, styledMode: p }, distance: m, options: h, options: { fixed: g, position: _, positioner: v }, pointer: y } = n, { scrollLeft: b = 0, scrollTop: x = 0 } = r.scrollablePlotArea?.scrollingContainer || {}, S = n.outside && typeof f != "number" ? It.documentElement.getBoundingClientRect() : {
			left: b,
			right: b + i,
			top: x,
			bottom: x + a
		}, C = n.getLabel(), w = this.renderer || r.renderer, T = !!r.xAxis[0]?.opposite, { left: E, top: D } = y.getChartPosition(), O = v || g, k = l + x, A = 0, j = o - u;
		function M(e) {
			let { isHeader: t, plotX: n = 0, plotY: r = 0, series: i } = e, a, s;
			if (t) a = Math.max(c + n, c), s = l + o / 2;
			else {
				let { xAxis: e, yAxis: t } = i;
				a = e.pos + G(n, -m, e.len + m), i.shouldShowTooltip(0, t.pos - l + r, { ignoreX: !0 }) && (s = t.pos + r);
			}
			return a = G(a, S.left - m, S.right + m), {
				anchorX: a,
				anchorY: s
			};
		}
		let ee = function(e, t, r, i, a = [0, 0], o = !0) {
			let s, c;
			if (r.isHeader) c = T ? 0 : j, s = G(a[0] - e / 2, S.left, S.right - e - (n.outside ? E : 0));
			else if (g && r) {
				let i = n.getFixedPosition(e, t, r);
				s = i.x, c = i.y - k;
			} else c = a[1] - k, s = o ? a[0] - e - m : a[0] + m, s = G(s, o ? s : S.left, S.right);
			return {
				x: s,
				y: c
			};
		};
		function N(e, t, r) {
			let i = e, { isHeader: a, series: o } = t, s = o.tooltipOptions || h, c = a ? d(s, s.header) : s;
			if (!i) {
				let e = {
					padding: s.padding,
					r: s.borderRadius
				};
				p || (e.fill = c.backgroundColor, e["stroke-width"] = c.borderWidth ?? +!s.fixed), i = w.label("", 0, 0, c.shape || (g && !a ? "rect" : "callout"), void 0, void 0, s.useHTML).addClass(n.getClassName(t, !0, a)).attr(e).add(C);
			}
			return i.isActive = !0, p || i.css(c.style), i.attr({ text: r }), p || i.attr({ stroke: c.borderColor || t.color || o.color || "var(--highcharts-neutral-color-80)" }), i;
		}
		s(e) && (e = [!1, e]);
		let P = e.slice(0, t.length + 1).reduce(function(e, r, i) {
			if (r !== !1 && r !== "") {
				let a = t[i - 1] || {
					isHeader: !0,
					plotX: t[0].plotX,
					plotY: o,
					series: {}
				}, s = a.isHeader, c = s ? n : a.series, l = c.tt = N(c.tt, a, r.toString()), u = l.getBBox(), d = u.width + l.strokeWidth();
				s && (A = u.height + h.header.distance, j += A, T && (k -= A));
				let { anchorX: f, anchorY: p } = M(a);
				if (typeof p == "number") {
					let t = u.height + 1, r = (v || ee).call(n, d, t, a, n, [f, p]);
					e.push({
						align: O ? 0 : void 0,
						anchorX: f,
						anchorY: p,
						boxWidth: d,
						point: a,
						rank: r.rank ?? +!!s,
						size: t,
						target: r.y,
						tt: l,
						x: r.x
					});
				} else l.isActive = !1;
			}
			return e;
		}, []);
		!O && P.some((e) => {
			let { outside: t } = n, r = (t ? E : 0) + e.anchorX;
			return r < S.left && r + e.boxWidth < S.right || r < E - S.left + e.boxWidth && S.right - r > r;
		}) && (P = P.map((e) => {
			let { x: t, y: n } = ee.call(this, e.boxWidth, e.size, e.point, void 0, [e.anchorX, e.anchorY], !1);
			return R(e, {
				target: n,
				x: t
			});
		})), n.cleanSplit(), Rt(P, j);
		let F = {
			left: E,
			right: E
		};
		P.forEach(function(e) {
			let { x: t, boxWidth: r, isHeader: i } = e;
			i || (n.outside && E + t < F.left && (F.left = E + t), n.outside && F.left + r > F.right && (F.right = E + t));
		}), P.forEach(function(e) {
			let { x: t, anchorX: r, anchorY: i, pos: a, point: { isHeader: o } } = e, s = {
				visibility: a === void 0 ? "hidden" : "inherit",
				x: t,
				y: (a || 0) + k + (g && _.y || 0),
				anchorX: r,
				anchorY: i
			};
			if (n.outside && t < r) {
				let e = E - F.left;
				e > 0 && (s.x = o ? (F.right - F.left) / 2 : t + e, s.anchorX = r + e);
			}
			e.tt.attr(s);
		});
		let { container: I, outside: te, renderer: ne } = n;
		if (te && I && ne) {
			let { width: e, height: t, x: n, y: r } = C.getBBox();
			ne.setSize(e + n, t + r, !1), I.style.left = F.left + "px", I.style.top = D + "px";
		}
		Lt && C.attr({ opacity: C.opacity === 1 ? .999 : 1 });
	}
	drawTracker() {
		let e = this;
		if (!e.shouldStickOnContact()) {
			e.tracker = e.tracker?.destroy();
			return;
		}
		let { chart: t, label: n } = e, r = e.shared ? t.hoverPoints : t.hoverPoint, i = n?.box;
		if (!i || !r) return;
		let { height: a, r: o, width: s, x: c, y: l } = i, { anchorX: u, anchorY: d } = i;
		x(u) || (u = (e.anchorX || 0) - (n.translateX || 0), d = (e.anchorY || 0) - (n.translateY || 0));
		let f = n.renderer.symbols.callout(c, l, s, a, {
			anchorX: u,
			anchorY: d,
			arrowLength: Math.max(u - s, -u, d - a, -d, 0),
			r: o
		});
		e.tracker || (e.tracker = n.renderer.path().addClass("highcharts-tracker").add(n), I(e.tracker.element, "mouseenter", () => zt(e)), t.styledMode || e.tracker.attr({
			fill: "rgba(0,0,0,0)",
			stroke: "rgba(0,0,0,0)",
			"stroke-linejoin": "round",
			"stroke-width": 10
		})), e.tracker.attr({ d: f });
	}
	styledModeFormat(e) {
		return e.replace("style=\"font-size: 0.8em\"", "class=\"highcharts-header\"").replace(/style="color:{(point|series)\.color}"/g, "class=\"highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}\"");
	}
	headerFooterFormatter(e, t) {
		let n = e.series, r = n.tooltipOptions, i = n.xAxis?.dateTime, a = {
			isFooter: t,
			point: e
		}, o = r.xDateFormat || "", s = r[t ? "footerFormat" : "headerFormat"];
		return p(this, "headerFormatter", a, function(t) {
			if (i && !o && x(e.key) && (o = i.getXDateFormat(e.key, r.dateTimeLabelFormats)), i && o) {
				if (C(o)) {
					let e = o;
					Ft[0] = (t) => n.chart.time.dateFormat(e, t), o = "%0";
				}
				(e.tooltipDateKeys || ["key"]).forEach((e) => {
					s = s.replace(RegExp("point\\." + e + "([ \\)}])"), `(point.${e}:${o})$1`);
				});
			}
			n.chart.styledMode && (s = this.styledModeFormat(s)), t.text = Nt(s, e, this.chart);
		}), a.text || "";
	}
	update(e) {
		this.destroy(), this.init(this.chart, d(!0, this.options, e));
	}
	updatePosition(e) {
		let { chart: t, container: n, distance: i, options: a, pointer: o, renderer: s } = this, { height: c = 0, width: l = 0 } = this.getLabel(), { fixed: u, positioner: d } = a, { left: f, top: p, scaleX: m, scaleY: h } = o.getChartPosition(), g = (d || u && this.getFixedPosition || this.getPosition).call(this, l, c, e, this), _ = z.doc, v = (e.plotX || 0) + t.plotLeft, y = (e.plotY || 0) + t.plotTop, b;
		if (s && n) {
			if (g.x += f, g.y += p, d || u) {
				let { scrollLeft: e = 0, scrollTop: n = 0 } = t.scrollablePlotArea?.scrollingContainer || {};
				g.x += e, g.y += n;
			}
			b = (a.borderWidth ?? +!u) + 2 * i + 2, s.setSize(G(l + b, 0, _.documentElement.clientWidth) - 1, c + b, !1), (m !== 1 || h !== 1) && (r(n, { transform: `scale(${m}, ${h})` }), v *= m, y *= h), v += f - g.x, y += p - g.y;
		}
		this.move(Math.round(g.x), Math.round(g.y || 0), v, y);
	}
};
(function(t) {
	function n(n) {
		e(Pt, "Core.Tooltip") && I(n, "afterInit", function() {
			let e = this.chart;
			e.options.tooltip && (e.tooltip = new t(e, e.options.tooltip, this));
		});
	}
	t.compose = n;
})(Bt ||= {});
var Vt = Bt, { charts: Ht, composed: Ut, isTouchDevice: Wt } = z, Gt = (e, t) => !W(t) || e[`${t}Key`], Kt = class e {
	applyInactiveState(e = []) {
		let t = [];
		e.forEach((e) => {
			let n = e.series;
			t.push(n), n.linkedParent && t.push(n.linkedParent), n.linkedSeries && t.push.apply(t, n.linkedSeries), n.navigatorSeries && t.push(n.navigatorSeries), n.boosted && n.markerGroup && t.push.apply(t, this.chart.series.filter((e) => e.markerGroup === n.markerGroup));
		});
		for (let e of this.chart.series) {
			let n = e.options;
			n.states?.inactive?.enabled !== !1 && (t.indexOf(e) === -1 ? e.setState("inactive", !0) : n.inactiveOtherPoints && e.setAllPointsToState("inactive"));
		}
	}
	destroy() {
		let t = this;
		this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], z.chartCount || (e.unbindDocumentMouseUp.forEach((e) => e.unbind()), e.unbindDocumentMouseUp.length = 0, e.unbindDocumentTouchEnd &&= e.unbindDocumentTouchEnd()), u(t, function(e, n) {
			t[n] = void 0;
		});
	}
	getSelectionMarkerAttrs(e, t) {
		let n = {
			args: {
				chartX: e,
				chartY: t
			},
			attrs: {},
			shapeType: "rect"
		};
		return p(this, "getSelectionMarkerAttrs", n, (n) => {
			let { chart: r, zoomHor: i, zoomVert: a } = this, { mouseDownX: o = 0, mouseDownY: s = 0 } = r, c = n.attrs, l;
			c.x = r.plotLeft, c.y = r.plotTop, c.width = i ? 1 : r.plotWidth, c.height = a ? 1 : r.plotHeight, i && (l = e - o, c.width = Math.max(1, Math.abs(l)), c.x = (l > 0 ? 0 : l) + o), a && (l = t - s, c.height = Math.max(1, Math.abs(l)), c.y = (l > 0 ? 0 : l) + s);
		}), n;
	}
	drag(e) {
		let { chart: t } = this, { mouseDownX: n = 0, mouseDownY: r = 0 } = t, { panning: i, panKey: a, selectionMarkerFill: o } = t.options.chart, s = t.plotLeft, c = t.plotTop, l = t.plotWidth, u = t.plotHeight, d = C(i) ? i.enabled : i, f = a && e[`${a}Key`], p = e.chartX, m = e.chartY, h, g = this.selectionMarker;
		if (!(g && g.touch) && (p < s ? p = s : p > s + l && (p = s + l), m < c ? m = c : m > c + u && (m = c + u), this.hasDragged = Math.sqrt((n - p) ** 2 + (r - m) ** 2), this.hasDragged > 10)) {
			h = t.isInsidePlot(n - s, r - c, { visiblePlotOnly: !0 });
			let { shapeType: l, attrs: u } = this.getSelectionMarkerAttrs(p, m);
			this.hasZoom && h && !f && (g || (this.selectionMarker = g = t.renderer[l](), g.attr({
				class: "highcharts-selection-marker",
				zIndex: 7
			}).add(), t.styledMode || g.attr({ fill: o }))), g && g.attr(u), h && !g && d && Gt(e, a) && t.pan(e, i);
		}
	}
	dragStart(e) {
		let t = this.chart;
		t.mouseIsDown = e.type, t.cancelClick = !1, t.mouseDownX = e.chartX, t.mouseDownY = e.chartY;
	}
	getSelectionBox(e) {
		let t = {
			args: { marker: e },
			result: e.getBBox()
		};
		return p(this, "getSelectionBox", t), t.result;
	}
	drop(e) {
		let { chart: t, selectionMarker: n } = this, i;
		for (let e of t.axes) e.isPanning && (e.isPanning = !1, (e.options.startOnTick || e.options.endOnTick || e.series.some((e) => e.boosted)) && (e.forceRedraw = !0, e.setExtremes(e.userMin, e.userMax, !1), i = !0));
		if (e?.type === "touchend" && this.hasDragged && t.transform({ trigger: "drop" }), i && t.redraw(), n && e) {
			if (this.hasDragged) {
				let r = this.getSelectionBox(n);
				t.transform({
					axes: t.axes.filter((e) => e.zoomEnabled && (e.coll === "xAxis" && this.zoomX || e.coll === "yAxis" && this.zoomY)),
					selection: {
						originalEvent: e,
						xAxis: [],
						yAxis: [],
						...r
					},
					from: r
				});
			}
			x(t.index) && (this.selectionMarker = n.destroy());
		}
		t && x(t.index) && (r(t.container, { cursor: t._cursor }), t.cancelClick = this.hasDragged > 10, t.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
	}
	findNearestKDPoint(e, t, n) {
		let r;
		function i(e, n) {
			let r = e.distX - n.distX, i = e.dist - n.dist, a = n.series.group?.zIndex - e.series.group?.zIndex, o;
			return o = r !== 0 && t ? r : i === 0 ? a === 0 ? e.series.index > n.series.index ? -1 : 1 : a : i, o;
		}
		return e.forEach(function(e) {
			let a = !(e.noSharedTooltip && t) && e.options.findNearestPointBy.indexOf("y") < 0, o = e.searchPoint(n, a);
			C(o, !0) && o.series && (!C(r, !0) || i(r, o) > 0) && (r = o);
		}), r;
	}
	getChartCoordinatesFromPoint(e, t) {
		let { xAxis: n, yAxis: r } = e.series, i = e.shapeArgs;
		if (n && r) {
			let a = e.clientX ?? e.plotX ?? 0, o = e.plotY || 0;
			return e.isNode && i && x(i.x) && x(i.y) && (a = i.x, o = i.y), t ? {
				chartX: r.len + r.pos - o,
				chartY: n.len + n.pos - a
			} : {
				chartX: a + n.pos,
				chartY: o + r.pos
			};
		}
		if (i?.x && i.y) return {
			chartX: i.x,
			chartY: i.y
		};
	}
	getChartPosition() {
		if (this.chartPosition) return this.chartPosition;
		let { container: e } = this.chart, t = T(e);
		this.chartPosition = {
			left: t.left,
			top: t.top,
			scaleX: 1,
			scaleY: 1
		};
		let { offsetHeight: n, offsetWidth: r } = e;
		return r > 2 && n > 2 && (this.chartPosition.scaleX = t.width / r, this.chartPosition.scaleY = t.height / n), this.chartPosition;
	}
	getCoordinates(e) {
		let t = {
			xAxis: [],
			yAxis: []
		};
		for (let n of this.chart.axes) t[n.isXAxis ? "xAxis" : "yAxis"].push({
			axis: n,
			value: n.toValue(e[n.horiz ? "chartX" : "chartY"])
		});
		return t;
	}
	getHoverData(e, t, n, r, i, a) {
		let o = [], s = !!(r && e), c = function(e) {
			return e.visible && !(!i && e.directTouch) && (e.options.enableMouseTracking ?? !0);
		}, l = t, u, d = {
			chartX: a ? a.chartX : void 0,
			chartY: a ? a.chartY : void 0,
			shared: i
		};
		p(this, "beforeGetHoverData", d), u = l && !l.stickyTracking ? [l] : n.filter((e) => e.stickyTracking && (d.filter || c)(e));
		let f = s || !a ? e : this.findNearestKDPoint(u, i, a);
		return l = f?.series, f && (i && !l.noSharedTooltip ? (u = n.filter(function(e) {
			return d.filter ? d.filter(e) : c(e) && !e.noSharedTooltip;
		}), u.forEach(function(e) {
			let t = e.options?.nullInteraction, n = L(e.points, function(e) {
				return e.x === f.x && (!e.isNull || !!t);
			});
			C(n) && (e.boosted && e.boost && (n = e.boost.getPoint(n)), o.push(n));
		})) : o.push(f)), d = { hoverPoint: f }, p(this, "afterGetHoverData", d), {
			hoverPoint: d.hoverPoint,
			hoverSeries: l,
			hoverPoints: o
		};
	}
	getPointFromEvent(e) {
		let t = e.target, n;
		for (; t && !n;) n = t.point, t = t.parentNode;
		return n;
	}
	onTrackerMouseOut(e) {
		let t = this.chart, n = e.relatedTarget, r = t.hoverSeries;
		this.isDirectTouch = !1, r && n && !r.stickyTracking && !this.inClass(n, "highcharts-tooltip") && (!this.inClass(n, "highcharts-series-" + r.index) || !this.inClass(n, "highcharts-tracker")) && r.onMouseOut();
	}
	inClass(e, t) {
		let n = e, r;
		for (; n;) {
			if (r = U(n, "class"), r) {
				if (r.indexOf(t) !== -1) return !0;
				if (r.indexOf("highcharts-container") !== -1) return !1;
			}
			n = n.parentElement;
		}
	}
	constructor(e, t) {
		this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = t, this.chart = e, this.runChartClick = !!t.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), p(this, "afterInit");
	}
	normalize(e, t) {
		let n = e.touches, r = n ? n.length ? n.item(0) : (n.changedTouches ?? e.changedTouches)[0] : e;
		t ||= this.getChartPosition();
		let i = r.pageX - t.left, a = r.pageY - t.top;
		return i /= t.scaleX, a /= t.scaleY, R(e, {
			chartX: Math.round(i),
			chartY: Math.round(a)
		});
	}
	onContainerClick(e) {
		let t = this.chart, n = t.hoverPoint, r = this.normalize(e), i = t.plotLeft, a = t.plotTop;
		t.cancelClick || (n && this.inClass(r.target, "highcharts-tracker") ? (p(n.series, "click", R(r, { point: n })), t.hoverPoint && n.firePointEvent("click", r)) : (R(r, this.getCoordinates(r)), t.isInsidePlot(r.chartX - i, r.chartY - a, { visiblePlotOnly: !0 }) && p(t, "click", r)));
	}
	onContainerMouseDown(e) {
		let t = ((e.buttons || e.button) & 1) == 1;
		e = this.normalize(e), z.isFirefox && e.button !== 0 && this.onContainerMouseMove(e), (e.button === void 0 || t) && (this.zoomOption(e), t && e.preventDefault?.(), this.dragStart(e));
	}
	onContainerMouseLeave(t) {
		let { pointer: n } = Ht[e.hoverChartIndex ?? -1] || {};
		t = this.normalize(t), this.onContainerMouseMove(t), n && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (n.reset(), n.chartPosition = void 0);
	}
	onContainerMouseEnter() {
		delete this.chartPosition;
	}
	onContainerMouseMove(e) {
		let t = this.chart, n = t.tooltip, r = this.normalize(e);
		this.setHoverChartIndex(e), (t.mouseIsDown === "mousedown" || this.touchSelect(r)) && this.drag(r), !t.exporting?.openMenu && (this.inClass(r.target, "highcharts-tracker") || t.isInsidePlot(r.chartX - t.plotLeft, r.chartY - t.plotTop, { visiblePlotOnly: !0 })) && !n?.shouldStickOnContact(r) && (this.inClass(r.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(r));
	}
	onDocumentTouchEnd(e) {
		this.onDocumentMouseUp(e);
	}
	onContainerTouchMove(e) {
		this.touchSelect(e) ? this.onContainerMouseMove(e) : this.touch(e);
	}
	onContainerTouchStart(e) {
		this.touchSelect(e) ? this.onContainerMouseDown(e) : (this.zoomOption(e), this.touch(e, !0));
	}
	onDocumentMouseMove(e) {
		let t = this.chart, n = t.tooltip, r = this.chartPosition, i = this.normalize(e, r);
		r && !t.isInsidePlot(i.chartX - t.plotLeft, i.chartY - t.plotTop, { visiblePlotOnly: !0 }) && !n?.shouldStickOnContact(i) && (i.target === t.container.ownerDocument || !this.inClass(i.target, "highcharts-tracker")) && this.reset();
	}
	onDocumentMouseUp(t) {
		t?.touches && this.hasPinchMoved && t?.preventDefault?.(), Ht[e.hoverChartIndex ?? -1]?.pointer?.drop(t);
	}
	pinch(e) {
		let t = this, { chart: n, hasZoom: r, lastTouches: i } = t, a = [].map.call(e.touches || [], (e) => t.normalize(e)), o = a.length, s = o === 1 && (t.inClass(e.target, "highcharts-tracker") && n.runTrackerClick || t.runChartClick), c = o === 1 && (n.tooltip?.options.followTouchMove ?? !0);
		o > 1 ? t.initiated = !0 : c && (t.initiated = !1), r && t.initiated && !s && e.cancelable !== !1 && e.preventDefault(), e.type === "touchstart" ? (t.pinchDown = a, t.res = !0, n.mouseDownX = e.chartX) : c ? this.runPointActions(t.normalize(e)) : i && (p(n, "touchpan", {
			originalEvent: e,
			touches: a
		}, () => {
			let r = (e) => {
				let t = e[0], n = e[1] || t;
				return {
					x: t.chartX,
					y: t.chartY,
					width: n.chartX - t.chartX,
					height: n.chartY - t.chartY
				};
			};
			n.transform({
				axes: n.axes.filter((e) => e.zoomEnabled && (this.zoomHor && e.horiz || this.zoomVert && !e.horiz)),
				to: r(a),
				from: r(i),
				trigger: e.type
			}), t.hasDragged = 1;
		}), t.res && (t.res = !1, this.reset(!1, 0))), t.lastTouches = a;
	}
	reset(e, t) {
		let n = this, r = n.chart, i = r.hoverSeries, a = r.hoverPoint, o = r.hoverPoints, s = r.tooltip, c = s?.shared ? o : a;
		e && c && B(c).forEach(function(t) {
			t.series.isCartesian && t.plotX === void 0 && (e = !1);
		}), e ? s && c && B(c).length && (s.refresh(c), s.shared && o ? o.forEach(function(e) {
			e.setState(e.state, !0), e.series.isCartesian && (e.series.xAxis.crosshair && e.series.xAxis.drawCrosshair(null, e), e.series.yAxis.crosshair && e.series.yAxis.drawCrosshair(null, e));
		}) : a && (a.setState(a.state, !0), r.axes.forEach(function(e) {
			e.crosshair && a.series[e.coll] === e && e.drawCrosshair(null, a);
		}))) : (a && a.onMouseOut(), o && o.forEach(function(e) {
			e.setState();
		}), i && i.onMouseOut(), s && s.hide(t), n.unDocMouseMove &&= n.unDocMouseMove(), r.axes.forEach(function(e) {
			e.hideCrosshair();
		}), r.hoverPoints = r.hoverPoint = void 0);
	}
	runPointActions(t, n, r) {
		let i = this, a = i.chart, o = a.series, s = a.tooltip?.options.enabled ? a.tooltip : void 0, c = s ? s.shared : !1, l = n || a.hoverPoint, u = l?.series || a.hoverSeries, d = (!t || t.type !== "touchmove") && (!!n || u?.directTouch && i.isDirectTouch), f = this.getHoverData(l, u, o, d, c, t);
		l = f.hoverPoint, u = f.hoverSeries;
		let p = f.hoverPoints, m = u?.tooltipOptions.followPointer && !u.tooltipOptions.split, h = c && u && !u.noSharedTooltip;
		if (l && (r || l !== a.hoverPoint || s?.isHidden)) {
			if ((a.hoverPoints || []).forEach(function(e) {
				p.indexOf(e) === -1 && e.setState();
			}), a.hoverSeries !== u && u.onMouseOver(), i.applyInactiveState(p), (p || []).forEach(function(e) {
				e.setState("hover");
			}), a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
			a.hoverPoints = p, a.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
				s && l && s.refresh(h ? p : l, t);
			});
		} else if (m && s && !s.isHidden) {
			let e = s.getAnchor([{}], t);
			a.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) && s.updatePosition({
				plotX: e[0],
				plotY: e[1]
			});
		}
		i.unDocMouseMove || (i.unDocMouseMove = I(a.container.ownerDocument, "mousemove", (t) => Ht[e.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t)), i.eventsToUnbind.push(i.unDocMouseMove)), a.axes.forEach(function(e) {
			let n = e.crosshair?.snap ?? !0, r;
			n && (r = a.hoverPoint, (!r || r.series[e.coll] !== e) && (r = L(p, (t) => t.series?.[e.coll] === e))), r || !n ? e.drawCrosshair(t, r) : e.hideCrosshair();
		});
	}
	setDOMEvents() {
		let t = this.chart.container, n = t.ownerDocument, r = (e) => e.parentElement || e.getRootNode()?.host?.parentElement;
		t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(I(t, "mouseenter", this.onContainerMouseEnter.bind(this)), I(t, "mouseleave", this.onContainerMouseLeave.bind(this))), e.unbindDocumentMouseUp.some((e) => e.doc === n) || e.unbindDocumentMouseUp.push({
			doc: n,
			unbind: I(n, "mouseup", this.onDocumentMouseUp.bind(this))
		});
		let i = r(this.chart.renderTo);
		for (; i && i.tagName !== "BODY";) this.eventsToUnbind.push(I(i, "scroll", () => {
			delete this.chartPosition;
		})), i = r(i);
		this.eventsToUnbind.push(I(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), I(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), e.unbindDocumentTouchEnd ||= I(n, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 }), this.setPointerCapture(), I(this.chart, "redraw", this.setPointerCapture.bind(this));
	}
	setPointerCapture() {
		if (!Wt) return;
		let e = this, t = e.pointerCaptureEventsToUnbind, n = e.chart, r = n.container, i = (n.options.tooltip?.followTouchMove ?? !0) && n.series.some((e) => e.options.findNearestPointBy.indexOf("y") > -1);
		!e.hasPointerCapture && i ? (t.push(I(r, "pointerdown", (e) => {
			e.target?.hasPointerCapture(e.pointerId) && e.target?.releasePointerCapture(e.pointerId);
		}), I(r, "pointermove", (e) => {
			n.pointer?.getPointFromEvent(e)?.onMouseOver(e);
		})), e.hasPointerCapture = !0) : e.hasPointerCapture && !i && (t.forEach((e) => e()), t.length = 0, e.hasPointerCapture = !1);
	}
	setHoverChartIndex(t) {
		let n = this.chart, r = z.charts[e.hoverChartIndex ?? -1];
		if (r && r !== n) {
			let e = { relatedTarget: n.container };
			t && !t?.relatedTarget && Object.assign({}, t, e), r.pointer?.onContainerMouseLeave(t || e);
		}
		r?.mouseIsDown || (e.hoverChartIndex = n.index);
	}
	touch(e, t) {
		let { chart: n, pinchDown: r = [] } = this, i, a;
		this.setHoverChartIndex(), e = this.normalize(e), e.touches.length === 1 ? (a = n.isInsidePlot(e.chartX - n.plotLeft, e.chartY - n.plotTop, { visiblePlotOnly: !0 }), a && !n.exporting?.openMenu ? (t && this.runPointActions(e), e.type === "touchmove" && (this.hasPinchMoved = i = r[0] ? (r[0].chartX - e.chartX) ** 2 + (r[0].chartY - e.chartY) ** 2 >= 16 : !1), (i ?? !0) && this.pinch(e), this.hasPointerCapture && e.type === "touchmove" && !(n.scrollablePixelsX || n.scrollablePixelsY) && e.preventDefault()) : t && this.reset()) : e.touches.length === 2 && this.pinch(e);
	}
	touchSelect(e) {
		return !!(this.chart.zooming.singleTouch && e.touches && e.touches.length === 1);
	}
	zoomOption(e) {
		let t = this.chart, n = t.inverted, r = t.zooming.type || "", i, a;
		/touch/.test(e.type) && (r = t.zooming.pinchType ?? r), this.zoomX = i = /x/.test(r), this.zoomY = a = /y/.test(r), this.zoomHor = i && !n || a && n, this.zoomVert = a && !n || i && n, this.hasZoom = (i || a) && Gt(e, t.zooming.key);
	}
};
Kt.unbindDocumentMouseUp = [], (function(t) {
	function n(n) {
		e(Ut, "Core.Pointer") && I(n, "beforeRender", function() {
			this.pointer = new t(this, this.options);
		});
	}
	t.compose = n;
})(Kt ||= {});
var qt = Kt, { registerEventOptions: Jt } = Ce, { composed: Yt, marginNames: Xt } = z, { distribute: Zt } = Oe, { format: Qt } = J, $t = class {
	constructor(e, t) {
		this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = e, this.setOptions(t), t.enabled && (this.render(), Jt(this, t), I(this.chart, "endResize", function() {
			this.legend.positionCheckboxes();
		})), I(this.chart, "render", () => {
			this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
		});
	}
	setOptions(e) {
		let t = e.padding ?? 8;
		this.options = e, this.chart.styledMode || (this.itemStyle = e.itemStyle, this.itemHiddenStyle = d(this.itemStyle, e.itemHiddenStyle)), this.itemMarginTop = e.itemMarginTop, this.itemMarginBottom = e.itemMarginBottom, this.padding = t, this.initialItemY = t - 5, this.symbolWidth = e.symbolWidth ?? 16, this.pages = [], this.proximate = e.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
	}
	update(e, t) {
		let n = this.chart;
		this.setOptions(d(!0, this.options, e)), "events" in this.options && Jt(this, this.options), this.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, (t ?? !0) && n.redraw(), p(this, "afterUpdate", { redraw: t });
	}
	colorizeItem(e, t) {
		let n = e.color, { area: r, group: i, label: a, line: o, symbol: s } = e.legendItem || {};
		if ((e instanceof ye || e instanceof ge) && (e.color = e.options?.legendSymbolColor || n), i?.[t ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
			let { itemHiddenStyle: n = {} } = this, i = n.color, { fillColor: c, lineColor: l } = e.options, u = (e) => (t || (e.fill &&= i, e.stroke &&= i), e);
			a?.css(d(t ? this.itemStyle : n)), o?.attr(u({ stroke: l || e.color })), s?.attr(u(e.series ? e.series.pointAttribs?.(e) : e.pointAttribs?.() || { fill: e.color })), r?.attr(u({
				fill: c || e.color,
				"fill-opacity": c ? 1 : e.options.fillOpacity ?? .75
			}));
		}
		e.color = n, p(this, "afterColorizeItem", {
			item: e,
			visible: t
		});
	}
	positionItems() {
		this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
	}
	positionItem(e) {
		let t = this, { group: n, x: r = 0, y: i = 0 } = e.legendItem || {}, a = t.options, o = a.symbolPadding, s = !a.rtl, c = e.checkbox;
		if (n?.element) {
			let a = {
				translateX: s ? r : t.legendWidth - r - 2 * o - 4,
				translateY: i
			};
			n[W(n.translateY) ? "animate" : "attr"](a, void 0, () => {
				p(this, "afterPositionItem", { item: e });
			});
		}
		c && (c.x = r, c.y = i);
	}
	destroyItem(e) {
		let t = e.legendItem || {};
		for (let e of [
			"group",
			"label",
			"line",
			"symbol"
		]) t[e] && (t[e] = t[e].destroy());
		e.checkbox = i(e.checkbox), e.legendItem = void 0;
	}
	destroy() {
		let e = this;
		for (let e of this.getAllItems()) this.destroyItem(e);
		for (let t of [
			"clipRect",
			"up",
			"down",
			"pager",
			"nav",
			"box",
			"title",
			"group"
		]) e[t] && (e[t] = e[t].destroy());
		this.display = null;
	}
	positionCheckboxes() {
		let e = this.group?.alignAttr, t = this.clipHeight || this.legendHeight, n = this.titleHeight, i;
		e && (i = e.translateY, this.allItems.forEach(function(a) {
			let o = a.checkbox, s;
			o && (s = i + n + o.y + (this.scrollOffset || 0) + 3, r(o, {
				left: e.translateX + a.checkboxOffset + o.x - 20 + "px",
				top: s + "px",
				display: this.proximate || s > i - 6 && s < i + t - 6 ? "" : "none"
			}));
		}, this));
	}
	renderTitle() {
		let e = this.options, t = this.padding, n = e.title, r, i = 0;
		n.text && (this.title || (this.title = this.chart.renderer.label(n.text, t - 3, t - 4, void 0, void 0, void 0, e.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(n.style), this.title.add(this.group)), n.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = this.title.getBBox(), i = r.height, this.offsetWidth = r.width, this.contentGroup.attr({ translateY: i })), this.titleHeight = i;
	}
	setText(e) {
		let t = this.options;
		e.legendItem.label.attr({ text: t.labelFormat ? Qt(t.labelFormat, e, this.chart) : t.labelFormatter.call(e, e) });
	}
	renderItem(e) {
		let t = this, n = e.legendItem = e.legendItem || {}, r = t.chart, i = r.renderer, a = t.options, o = a.layout === "horizontal", s = t.symbolWidth, c = a.symbolPadding || 0, l = t.itemStyle, u = t.itemHiddenStyle, f = o ? a.itemDistance ?? 20 : 0, p = !a.rtl, m = !e.series, h = !m && e.series.drawLegendSymbol ? e.series : e, g = h.options, _ = !!t.createCheckboxForItem && g && g.showCheckbox, v = a.useHTML, y = e.options.className, b = n.label, x = s + c + f + (_ ? 20 : 0);
		b || (n.group = i.g("legend-item").addClass("highcharts-" + h.type + "-series highcharts-color-" + e.colorIndex + (y ? " " + y : "") + (m ? " highcharts-series-" + e.index : "")).attr({ zIndex: 1 }).add(t.scrollGroup), n.label = b = i.text("", p ? s + c : -c, t.baseline || 0, v), r.styledMode || b.css(d(e.visible ? l : u)), b.attr({
			align: p ? "left" : "right",
			zIndex: 2
		}).add(n.group), t.baseline || (t.fontMetrics = i.fontMetrics(b), t.baseline = t.fontMetrics.f + 3 + t.itemMarginTop, b.attr("y", t.baseline), t.symbolHeight = a.symbolHeight ?? t.fontMetrics.f, a.squareSymbol && (t.symbolWidth = a.symbolWidth ?? Math.max(t.symbolHeight, 16), x = t.symbolWidth + c + f + (_ ? 20 : 0), p && b.attr("x", t.symbolWidth + c))), h.drawLegendSymbol(t, e), t.setItemEvents && t.setItemEvents(e, b, v)), _ && !e.checkbox && t.createCheckboxForItem && t.createCheckboxForItem(e), t.colorizeItem(e, e.visible), (r.styledMode || !l.width) && b.css({ width: Math.min(a.itemWidth || t.widthOption || r.spacingBox.width, a.maxWidth ? N(a.maxWidth, r.chartWidth) : Infinity) - x + "px" }), t.setText(e);
		let S = b.getBBox(), C = t.fontMetrics?.h || 0;
		e.itemWidth = e.checkboxOffset = a.itemWidth || n.labelWidth || S.width + x, t.maxItemWidth = Math.max(t.maxItemWidth, e.itemWidth), t.totalItemWidth += e.itemWidth, t.itemHeight = e.itemHeight = Math.round(n.labelHeight || (S.height > C * 1.5 ? S.height : C));
	}
	layoutItem(e) {
		let t = this.options, n = this.padding, r = t.layout === "horizontal", i = e.itemHeight, a = this.itemMarginBottom, o = this.itemMarginTop, s = r ? t.itemDistance ?? 20 : 0, c = this.maxLegendWidth, l = t.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : e.itemWidth, u = e.legendItem || {};
		r && this.itemX - n + l > c && (this.itemX = n, this.lastLineHeight && (this.itemY += o + this.lastLineHeight + a), this.lastLineHeight = 0), this.lastItemY = o + this.itemY + a, this.lastLineHeight = Math.max(i, this.lastLineHeight), u.x = this.itemX, u.y = this.itemY, r ? this.itemX += l : (this.itemY += o + i + a, this.lastLineHeight = i), this.offsetWidth = this.widthOption || Math.max((r ? this.itemX - n - (e.checkbox ? 0 : s) : l) + n, this.offsetWidth);
	}
	getAllItems() {
		let e = [];
		return this.chart.series.forEach(function(t) {
			let n = t?.options;
			t && (n.showInLegend ?? !W(n.linkedTo)) && (e = e.concat(t.legendItem?.labels || (n.legendType === "point" ? t.data : t)));
		}), p(this, "afterGetAllItems", { allItems: e }), e;
	}
	getAlignment() {
		let e = this.options;
		return this.proximate ? e.align.charAt(0) + "tv" : e.floating ? "" : e.align.charAt(0) + e.verticalAlign.charAt(0) + e.layout.charAt(0);
	}
	adjustMargins(e, t) {
		let n = this.chart, r = this.options, i = this.getAlignment();
		i && [
			/(lth|ct|rth)/,
			/(rtv|rm|rbv)/,
			/(rbh|cb|lbh)/,
			/(lbv|lm|ltv)/
		].forEach((a, o) => {
			a.test(i) && !W(e[o]) && (n[Xt[o]] = Math.max(n[Xt[o]], n.legend[(o + 1) % 2 ? "legendHeight" : "legendWidth"] + [
				1,
				-1,
				-1,
				1
			][o] * r[o % 2 ? "x" : "y"] + (r.margin ?? 12) + t[o] + (n.titleOffset[o] || 0)));
		});
	}
	proximatePositions() {
		let e = this.chart, t = [], n = this.options.align === "left";
		this.allItems.forEach(function(r) {
			let i, a, o = n, s, c;
			r.yAxis && (r.xAxis.options.reversed && (o = !o), r.points && (i = L(o ? r.points : r.points.slice(0).reverse(), function(e) {
				return x(e.plotY);
			})), a = this.itemMarginTop + r.legendItem.label.getBBox().height + this.itemMarginBottom, c = r.yAxis.top - e.plotTop, r.visible ? (s = i ? i.plotY : r.yAxis.height, s += c - .3 * a) : s = c + r.yAxis.height, t.push({
				target: s,
				size: a,
				item: r
			}));
		}, this);
		let r;
		for (let n of Zt(t, e.plotHeight)) r = n.item.legendItem || {}, x(n.pos) && (r.y = e.plotTop - e.spacing[0] + n.pos);
	}
	render() {
		let e = this, t = e.chart, n = t.spacingBox.width, r = t.renderer, i = e.options, a = e.padding, o = e.getAllItems(), s, c, l, u = e.group, d, f = e.box;
		e.itemX = a, e.itemY = e.initialItemY, e.offsetWidth = 0, e.lastItemY = 0, e.widthOption = N(i.width, n - a), d = n - 2 * a - i.x, ["rm", "lm"].indexOf(e.getAlignment().substring(0, 2)) > -1 && (d /= 2), e.maxLegendWidth = e.widthOption || d, u || (e.group = u = r.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), e.contentGroup = r.g().attr({ zIndex: 1 }).add(u), e.scrollGroup = r.g().add(e.contentGroup)), e.renderTitle(), ne(o, (e, t) => (e.options?.legendIndex || 0) - (t.options?.legendIndex || 0)), i.reversed && o.reverse(), e.allItems = o, e.display = s = !!o.length, e.lastLineHeight = 0, e.maxItemWidth = 0, e.totalItemWidth = 0, e.itemHeight = 0, o.forEach(e.renderItem, e), o.forEach(e.layoutItem, e), c = (i.maxWidth ? Math.min(e.widthOption || e.offsetWidth, d, N(i.maxWidth, t.chartWidth) || Infinity) : e.widthOption || e.offsetWidth) + a, l = e.lastItemY + e.lastLineHeight + e.titleHeight, l = e.handleOverflow(l), l += a, f || (e.box = f = r.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(u)), t.styledMode || f.attr({
			stroke: i.borderColor,
			"stroke-width": i.borderWidth || 0,
			fill: i.backgroundColor || "none"
		}).shadow(i.shadow), c > 0 && l > 0 && f[f.placed ? "animate" : "attr"](f.crisp.call({}, {
			x: 0,
			y: 0,
			width: c,
			height: l
		}, f.strokeWidth())), u[s ? "show" : "hide"](), t.styledMode && u.getStyle("display") === "none" && (c = l = 0), e.legendWidth = c, e.legendHeight = l, s && e.align(), this.proximate || this.positionItems(), p(this, "afterRender");
	}
	align(e = this.chart.spacingBox) {
		let t = this.chart, n = this.options, r = e.y;
		/(lth|ct|rth)/.test(this.getAlignment()) && t.titleOffset[0] > 0 ? r += t.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && t.titleOffset[2] > 0 && (r -= t.titleOffset[2]), r !== e.y && (e = d(e, { y: r })), t.hasRendered || (this.group.placed = !1), this.group.align(d(n, {
			width: this.legendWidth,
			height: this.legendHeight,
			verticalAlign: this.proximate ? "top" : n.verticalAlign
		}), !0, e);
	}
	handleOverflow(e) {
		let t = this, n = this.chart, r = n.renderer, i = this.options, a = i.y, o = i.verticalAlign === "top", s = this.padding, c = i.maxHeight, l = i.navigation, u = l.animation ?? !0, d = l.arrowSize || 12, f = this.pages, p = this.allItems, m = function(e) {
			typeof e == "number" ? S.attr({ height: e }) : S && (t.clipRect = S.destroy(), t.contentGroup.clip()), t.contentGroup.div && (t.contentGroup.div.style.clip = e ? "rect(" + s + "px,9999px," + (s + e) + "px,0)" : "auto");
		}, h = function(e) {
			return t[e] = r.circle(0, 0, d * 1.3).translate(d / 2, d / 2).add(x), n.styledMode || t[e].attr("fill", "rgba(0,0,0,0.0001)"), t[e];
		}, g, _, v, y, b = n.spacingBox.height + (o ? -a : a) - s, x = this.nav, S = this.clipRect;
		return i.layout === "horizontal" && i.verticalAlign !== "middle" && !i.floating && (b /= 2), c && (b = Math.min(b, c)), f.length = 0, e && b > 0 && e > b && l.enabled !== !1 ? (this.clipHeight = g = Math.max(b - 20 - this.titleHeight - s, 0), this.currentPage = this.currentPage ?? 1, this.fullHeight = e, p.forEach((e, t) => {
			v = e.legendItem || {};
			let n = v.y || 0, r = Math.round(v.label.getBBox().height), i = f.length;
			(!i || n - f[i - 1] > g && (_ || n) !== f[i - 1]) && (f.push(_ || n), i++), v.pageIx = i - 1, _ && y && (y.pageIx = i - 1), t === p.length - 1 && n + r - f[i - 1] > g && n > f[i - 1] && (f.push(n), v.pageIx = i), n !== _ && (_ = n), y = v;
		}), S || (S = t.clipRect = r.clipRect(0, s - 2, 9999, 0), t.contentGroup.clip(S)), m(g), x || (this.nav = x = r.g().attr({ zIndex: 1 }).add(this.group), this.up = r.symbol("triangle", 0, 0, d, d).add(x), h("upTracker").on("click", function() {
			t.scroll(-1, u);
		}), this.pager = r.text("", 15, 10).addClass("highcharts-legend-navigation"), !n.styledMode && l.style && this.pager.css(l.style), this.pager.add(x), this.down = r.symbol("triangle-down", 0, 0, d, d).add(x), h("downTracker").on("click", function() {
			t.scroll(1, u);
		})), t.scroll(0), e = b) : x && (m(), this.nav = x.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), e;
	}
	scroll(e, t) {
		let n = this.chart, r = this.pages, i = r.length, a = this.clipHeight, o = this.options.navigation, s = this.pager, c = this.padding, l = this.currentPage + e;
		if (l > i && (l = i), l > 0) {
			t !== void 0 && te(t, n), this.nav.attr({
				translateX: c,
				translateY: a + this.padding + 7 + this.titleHeight,
				visibility: "inherit"
			}), [this.up, this.upTracker].forEach(function(e) {
				e.attr({ class: l === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
			}), s.attr({ text: l + "/" + i }), [this.down, this.downTracker].forEach(function(e) {
				e.attr({
					x: 18 + this.pager.getBBox().width,
					class: l === i ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
				});
			}, this), n.styledMode || (this.up.attr({ fill: l === 1 ? o.inactiveColor : o.activeColor }), this.upTracker.css({ cursor: l === 1 ? "default" : "pointer" }), this.down.attr({ fill: l === i ? o.inactiveColor : o.activeColor }), this.downTracker.css({ cursor: l === i ? "default" : "pointer" })), this.scrollOffset = -r[l - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = l, this.positionCheckboxes();
			let e = me(t ?? n.renderer.globalAnimation ?? !0);
			k(() => {
				p(this, "afterScroll", { currentPage: l });
			}, e.duration);
		}
	}
	setItemEvents(e, t, n) {
		let r = this, i = e.legendItem || {}, a = r.chart.renderer.boxWrapper, o = e instanceof ge, s = e instanceof ye, c = "highcharts-legend-" + (o ? "point" : "series") + "-active", l = r.chart.styledMode, u = n ? [t, i.symbol] : [i.group], f = (t) => {
			r.allItems.forEach((n) => {
				e !== n && [n].concat(n.linkedSeries || []).forEach((e) => {
					e.setState(t, !o);
				});
			});
		};
		for (let n of u) n && n.on("mouseover", function() {
			e.visible && f("inactive"), e.setState("hover"), e.visible && a.addClass(c), l || t.css(r.options.itemHoverStyle);
		}).on("mouseout", function() {
			r.chart.styledMode || t.css(d(e.visible ? r.itemStyle : r.itemHiddenStyle)), f(""), a.removeClass(c), e.setState();
		}).on("click", function(t) {
			a.removeClass(c), p(r, "itemClick", {
				browserEvent: t,
				legendItem: e,
				context: r
			}, function() {
				e.setVisible && e.setVisible(), f(e.visible ? "inactive" : "");
			}), o ? e.firePointEvent("legendItemClick", { browserEvent: t }) : s && p(e, "legendItemClick", { browserEvent: t });
		});
	}
	createCheckboxForItem(e) {
		let t = this;
		e.checkbox = he("input", {
			type: "checkbox",
			className: "highcharts-legend-checkbox",
			checked: e.selected,
			defaultChecked: e.selected
		}, t.options.itemCheckboxStyle, t.chart.container), I(e.checkbox, "click", function(t) {
			let n = t.target;
			p(e.series || e, "checkboxClick", {
				checked: n.checked,
				item: e
			}, function() {
				e.select();
			});
		});
	}
};
(function(t) {
	function n(n) {
		e(Yt, "Core.Legend") && I(n, "beforeMargins", function() {
			this.legend = new t(this, this.options.legend);
		});
	}
	t.compose = n;
})($t ||= {});
var en = $t, { defaultOptions: tn } = j, { numberFormat: nn } = J, { registerEventOptions: rn } = Ce, { charts: an, doc: on, marginNames: sn, win: cn } = z, { seriesTypes: ln } = Y, un = class e {
	static chart(t, n, r) {
		let i = new e(t, n, r);
		return i.promise ?? i;
	}
	constructor(e, t, n) {
		if (this.sharedClips = {}, !on) {
			H(36, !1, this);
			return;
		}
		let r = [...arguments];
		(s(e) || e.nodeName) && (this.renderTo = r.shift()), this.init(r[0], r[1]);
	}
	setZoomOptions() {
		let e = this, t = e.options.chart, n = t.zooming;
		e.zooming = {
			...n,
			type: t.zoomType ?? n.type,
			key: t.zoomKey ?? n.key,
			pinchType: t.pinchType ?? n.pinchType,
			singleTouch: t.zoomBySingleTouch ?? n.singleTouch ?? !1,
			resetButton: d(n.resetButton, t.resetZoomButton)
		};
	}
	init(e, t) {
		p(this, "init", { args: arguments }, function() {
			let n = d(tn, e), r = n.chart, i = this.renderTo || r.renderTo;
			this.userOptions = R({}, e), (this.renderTo = s(i) ? on.getElementById(i) : i) || H(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], t === !0 ? this.promise = new Promise((e) => {
				this.callback = e;
			}) : this.callback = t, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.locale = n.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new re(R(n.time || {}, { locale: this.locale }), n.lang), n.time = this.time.options, this.numberFormatter = (r.numberFormatter || nn).bind(this), this.styledMode = r.styledMode, this.hasCartesianSeries = r.showAxes;
			let a = this;
			a.index = an.length, a.dataTable = a.getDataTable(n), an.push(a), z.chartCount++, rn(this, r), a.xAxis = [], a.yAxis = [], a.pointCount = a.colorCounter = a.symbolCounter = 0, this.setZoomOptions(), p(a, "afterInit"), a.firstRender();
		});
	}
	getDataTable(e) {
		return (e.dataTable ? B(e.dataTable) : []).map((e) => e.isDataTable ? e : new xe(e));
	}
	initSeries(e) {
		let t = this, n = t.options.chart, r = e.type || n.type, i = ln[r];
		i || H(17, !0, t, { missingModuleFor: r });
		let a = new i();
		return typeof a.init == "function" && a.init(t, e), a;
	}
	orderItems(e, t = 0) {
		let n = this[e], r = this.options[e] = B(this.options[e]).slice(), i = this.userOptions[e] = this.userOptions[e] ? B(this.userOptions[e]).slice() : [];
		if (this.hasRendered && (r.splice(t), i.splice(t)), n) for (let e = t, a = n.length; e < a; ++e) {
			let t = n[e];
			t && (t.index = e, t instanceof ye && (t.name = t.getName()), t.options.isInternal || (r[e] = t.options, i[e] = t.userOptions));
		}
	}
	getClipBox(e, t) {
		let n = this.inverted, { xAxis: r, yAxis: i } = e || {}, { x: a, y: o, width: s, height: c } = d(this.clipBox);
		return e && (r && r.len !== this.plotSizeX && !r.isRadial && (s = r.len), i && i.len !== this.plotSizeY && !i.isRadial && (c = i.len), n && !e.invertible && ([s, c] = [c, s])), t && (a += (n ? i : r)?.pos ?? this.plotLeft, o += (n ? r : i)?.pos ?? this.plotTop), {
			x: a,
			y: o,
			width: s,
			height: c
		};
	}
	isInsidePlot(e, t, n = {}) {
		let { inverted: r, plotBox: i, plotLeft: a, plotTop: o, scrollablePlotBox: s } = this, { scrollLeft: c = 0, scrollTop: l = 0 } = n.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, u = n.series, d = n.visiblePlotOnly && s || i, f = n.inverted ? t : e, m = n.inverted ? e : t, h = {
			x: f,
			y: m,
			isInsidePlot: !0,
			options: n
		};
		if (!n.ignoreX) {
			let e = u && (r && !this.polar ? u.yAxis : u.xAxis) || {
				pos: a,
				len: Infinity
			}, t = n.paneCoordinates ? e.pos + f : a + f;
			t >= Math.max(c + a, e.pos) && t <= Math.min(c + a + d.width, e.pos + e.len) || (h.isInsidePlot = !1);
		}
		if (!n.ignoreY && h.isInsidePlot) {
			let e = !r && n.axis && !n.axis.isXAxis && n.axis || u && (r ? u.xAxis : u.yAxis) || {
				pos: o,
				len: Infinity
			}, t = n.paneCoordinates ? e.pos + m : o + m;
			t >= Math.max(l + o, e.pos) && t <= Math.min(l + o + d.height, e.pos + e.len) || (h.isInsidePlot = !1);
		}
		return p(this, "afterIsInsidePlot", h), h.isInsidePlot;
	}
	redraw(e) {
		p(this, "beforeRedraw");
		let t = this, n = t.hasCartesianSeries ? t.axes : t.colorAxis || [], r = t.series, i = t.pointer, a = t.legend, o = t.userOptions.legend, s = t.renderer, c = s.isHidden(), l = [], u, d, f, m = t.isDirtyLegend, h;
		for (s.rootFontSize = s.boxWrapper.getStyle("font-size"), t.setResponsive && t.setResponsive(!1), te(t.hasRendered ? e : !1, t), c && t.temporaryDisplay(), t.layOutTitles(!1), f = r.length; f--;) if (h = r[f], (h.options.stacking || h.options.centerInCategory) && (d = !0, h.isDirty)) {
			u = !0;
			break;
		}
		if (u) for (f = r.length; f--;) h = r[f], h.options.stacking && (h.isDirty = !0);
		r.forEach(function(e) {
			e.isDirty && (e.options.legendType === "point" ? (typeof e.updateTotals == "function" && e.updateTotals(), m = !0) : o && (o.labelFormatter || o.labelFormat) && (m = !0)), e.isDirtyData && p(e, "updatedData");
		}), m && a && a.options.enabled && (a.render(), t.isDirtyLegend = !1), d && t.getStacks(), n.forEach(function(e) {
			e.updateNames(), e.setScale();
		}), t.getMargins();
		let g = t.isDirtyBox;
		n.forEach(function(e) {
			e.isDirty && (g = !0);
		}), n.forEach(function(e) {
			let t = e.min + "," + e.max;
			e.extKey !== t && (e.extKey = t, l.push(function() {
				p(e, "afterSetExtremes", R(e.eventArgs, e.getExtremes())), delete e.eventArgs;
			})), (g || d) && e.redraw();
		}), g && t.drawChartBox(), p(t, "predraw"), r.forEach(function(e) {
			(g || e.isDirty) && e.visible && e.redraw(), e.isDirtyData = !1;
		}), i && i.reset(!0), s.draw(), n.forEach((e) => {
			e.saveOld();
		}), p(t, "redraw"), p(t, "render"), c && t.temporaryDisplay(!0), l.forEach(function(e) {
			e.call();
		});
	}
	get(e) {
		let t = this.series;
		function n(t) {
			return t.id === e || t.options && t.options.id === e;
		}
		let r = L(this.axes, n) || L(this.series, n);
		for (let e = 0; !r && e < t.length; e++) r = L(t[e].points || [], n);
		return r;
	}
	createAxes() {
		let e = this.userOptions;
		p(this, "createAxes");
		for (let t of ["xAxis", "yAxis"]) {
			let n = e[t] = B(e[t] || {});
			for (let e of n) new Ct(this, e, t);
		}
		p(this, "afterCreateAxes");
	}
	getSelectedPoints() {
		return this.series.reduce((e, t) => (t.getPointsCollection().forEach((t) => {
			(t.selectedStaging ?? t.selected) && e.push(t);
		}), e), []);
	}
	getSelectedSeries() {
		return this.series.filter((e) => e.selected);
	}
	setTitle(e, t, n) {
		this.applyDescription("title", e), this.applyDescription("subtitle", t), this.applyDescription("caption", void 0), this.layOutTitles(n);
	}
	applyDescription(e, t) {
		let n = this, r = this.options[e] = d(this.options[e], t), i = this[e];
		i && t && (this[e] = i = i.destroy()), r && !i && (i = this.renderer.text(r.text, 0, 0, r.useHTML).attr({
			align: r.align,
			class: [r.className, "highcharts-" + e].filter(s).join(" "),
			zIndex: r.zIndex || 4
		}).css({
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}).add(), i.update = function(t, r) {
			n.applyDescription(e, t), n.layOutTitles(r);
		}, this.styledMode || i.css(R(e === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, r.style)), i.textPxLength = i.getBBox().width, i.css({ whiteSpace: r.style?.whiteSpace }), this[e] = i);
	}
	layOutTitles(e = !0) {
		let t = [
			0,
			0,
			0
		], { options: n, renderer: r, spacingBox: i } = this;
		[
			"title",
			"subtitle",
			"caption"
		].forEach((e) => {
			let n = this[e], a = this.options[e], o = d(i), s = n?.textPxLength || 0;
			if (n && a) {
				p(this, "layOutTitle", {
					alignTo: o,
					key: e,
					textPxLength: s
				});
				let i = r.fontMetrics(n), c = i.b, l = i.h, u = a.verticalAlign || "top", f = u === "top", h = f && a.minScale || 1, g = e === "title" ? f ? -3 : 0 : f ? t[0] + 2 : 0, _ = Math.min(o.width / s, 1), v = Math.max(h, _), y = d({ y: u === "bottom" ? c : g + c }, a), b = (a.width || (_ > h ? this.chartWidth : o.width) / v) + "px";
				y.align ??= e === "title" ? _ < h ? "left" : "center" : this.title?.alignValue, n.alignValue !== y.align && (n.placed = !1);
				let x = Math.round(n.css({ width: b }).getBBox(a.useHTML).height);
				if (y.height = x, n.align(y, !1, o).attr({
					align: y.align,
					scaleX: v,
					scaleY: v,
					"transform-origin": `${o.x + s * v * m(y.align)} ${l}`
				}), !a.floating) {
					let e = x * (x < l * 1.2 ? 1 : v);
					u === "top" ? t[0] = Math.ceil(t[0] + e) : u === "bottom" && (t[2] = Math.ceil(t[2] + e));
				}
			}
		}, this), t[0] && (n.title?.verticalAlign || "top") === "top" && (t[0] += n.title?.margin || 0), t[2] && n.caption?.verticalAlign === "bottom" && (t[2] += n.caption?.margin || 0);
		let a = !this.titleOffset || this.titleOffset.join(",") !== t.join(",");
		this.titleOffset = t, p(this, "afterLayOutTitles"), !this.isDirtyBox && a && (this.isDirtyBox = this.isDirtyLegend = a, this.hasRendered && e && this.isDirtyBox && this.redraw());
	}
	getContainerBox() {
		let e = [].map.call(this.renderTo.children, (e) => {
			if (e !== this.container) {
				let t = e.style.display;
				return e.style.display = "none", [e, t];
			}
		}), t = {
			width: f(this.renderTo, "width", !0) || 0,
			height: f(this.renderTo, "height", !0) || 0
		};
		return e.filter(Boolean).forEach(([e, t]) => {
			e.style.display = t;
		}), t;
	}
	getChartSize() {
		let e = this, t = e.options.chart, n = t.width, r = t.height, i = e.getContainerBox(), a = i.height <= 1 || !e.renderTo.parentElement?.style.height && e.renderTo.style.height === "100%";
		e.chartWidth = Math.max(0, n || i.width || 600), e.chartHeight = Math.max(0, N(r, e.chartWidth) || (a ? 400 : i.height)), e.containerBox = i;
	}
	temporaryDisplay(e) {
		let t = this.renderTo, n;
		if (e) for (; t?.style;) t.hcOrigStyle && (r(t, t.hcOrigStyle), delete t.hcOrigStyle), t.hcOrigDetached && (on.body.removeChild(t), t.hcOrigDetached = !1), t = t.parentNode;
		else for (; t?.style && (!on.body.contains(t) && !t.parentNode && (t.hcOrigDetached = !0, on.body.appendChild(t)), (f(t, "display", !1) === "none" || t.hcOrigDetached) && (t.hcOrigStyle = {
			display: t.style.display,
			height: t.style.height,
			overflow: t.style.overflow
		}, n = {
			display: "block",
			overflow: "hidden"
		}, t !== this.renderTo && (n.height = 0), r(t, n), t.offsetWidth || t.style.setProperty("display", "block", "important")), t = t.parentNode, t !== on.body););
	}
	setClassName(e) {
		this.container.className = "highcharts-container " + (e || "");
	}
	getContainer() {
		let e = this, t = e.options, n = t.chart, i = "data-highcharts-chart", a = le(), o = e.renderTo, s, c = w(U(o, i));
		x(c) && an[c] && an[c].hasRendered && an[c].destroy(), U(o, i, e.index), o.innerHTML = q.emptyHTML, !n.skipClone && !o.offsetWidth && e.temporaryDisplay(), e.getChartSize();
		let l = e.chartHeight, u = e.chartWidth;
		r(o, { overflow: "hidden" }), e.styledMode || (s = R({
			position: "relative",
			overflow: "hidden",
			width: u + "px",
			height: l + "px",
			textAlign: "left",
			lineHeight: "normal",
			zIndex: 0,
			"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
			userSelect: "none",
			"touch-action": "manipulation",
			outline: "none",
			padding: "0px"
		}, n.style || {}));
		let d = he("div", { id: a }, s, o);
		if (e.container = d, e.getChartSize(), u !== e.chartWidth && (u = e.chartWidth, e.styledMode || r(d, { width: n.style?.width ?? u + "px" })), e._cursor = d.style.cursor, e.renderer = new st(d, u, l, void 0, n.forExport, t.exporting?.allowHTML, e.styledMode, t.palette, e.index), e.containerBox = e.getContainerBox(), te(void 0, e), e.setClassName(n.className), !e.styledMode) e.renderer.setStyle(n.style), this.palette = e.renderer.palette;
		else for (let e in t.defs) this.renderer.definition(t.defs[e]);
		p(this, "afterGetContainer");
	}
	getMargins(e) {
		let { spacing: t, margin: n, titleOffset: r } = this;
		this.resetMargins(), r[0] && !W(n[0]) && (this.plotTop = Math.max(this.plotTop, r[0] + t[0])), r[2] && !W(n[2]) && (this.marginBottom = Math.max(this.marginBottom, r[2] + t[2])), this.legend?.display && this.legend.adjustMargins(n, t), p(this, "getMargins"), e || this.getAxisMargins();
	}
	getAxisMargins() {
		let e = this, t = e.axisOffset = [
			0,
			0,
			0,
			0
		], n = e.colorAxis, r = e.margin, i = (e) => {
			e.forEach((e) => {
				e.visible && e.getOffset();
			});
		};
		e.hasCartesianSeries ? i(e.axes) : n?.length && i(n), sn.forEach((n, i) => {
			W(r[i]) || (e[n] += t[i]);
		}), e.setChartSize();
	}
	getOptions() {
		return a(this.userOptions, tn);
	}
	reflow(e) {
		let t = this, n = t.containerBox, r = t.getContainerBox();
		delete t.pointer?.chartPosition, !t.exporting?.isPrinting && !t.isResizing && n && r.width && ((r.width !== n.width || r.height !== n.height) && (v(t.reflowTimeout), t.reflowTimeout = k(function() {
			if (t.container) {
				t.setSize(void 0, void 0, !1);
				let e = t.containerBox;
				e && (e.height = t.chartHeight);
			}
		}, e ? 100 : 0)), t.containerBox = r);
	}
	setReflow() {
		let e = this, t = (t) => {
			e.options?.chart.reflow && e.hasLoaded && e.reflow(t);
		};
		if (typeof ResizeObserver == "function") new ResizeObserver(t).observe(e.renderTo);
		else {
			let e = I(cn, "resize", t);
			I(this, "destroy", e);
		}
	}
	setSize(e, t, n) {
		let i = this, a = i.renderer;
		i.isResizing += 1, te(n, i);
		let o = a.globalAnimation;
		i.oldChartHeight = i.chartHeight, i.oldChartWidth = i.chartWidth, e !== void 0 && (i.options.chart.width = e), t !== void 0 && (i.options.chart.height = t), i.getChartSize();
		let { chartWidth: s, chartHeight: c, scrollablePixelsX: l = 0, scrollablePixelsY: u = 0 } = i;
		(i.isDirtyBox || s !== i.oldChartWidth || c !== i.oldChartHeight) && (i.styledMode || (o ? ae : r)(i.container, {
			width: `${s + l}px`,
			height: `${c + u}px`
		}, o), i.setChartSize(!0), a.setSize(s, c, o), i.axes.forEach(function(e) {
			e.isDirty = !0, e.setScale();
		}), i.isDirtyLegend = !0, i.isDirtyBox = !0, i.layOutTitles(), i.getMargins(), i.redraw(o), i.oldChartHeight = void 0, p(i, "resize"), setTimeout(() => {
			i && p(i, "endResize");
		}, me(o).duration)), --i.isResizing;
	}
	setChartSize(e) {
		let t = this, { chartHeight: n, chartWidth: r, clipOffset: i, inverted: a, spacing: o, renderer: s } = t, c = Math[a ? "floor" : "round"], l, u, d, f;
		if (t.plotLeft = l = Math.round(t.plotLeft), t.plotTop = u = Math.round(t.plotTop), t.plotWidth = d = Math.max(0, Math.round(r - l - (t.marginRight ?? 0))), t.plotHeight = f = Math.max(0, Math.round(n - u - (t.marginBottom ?? 0))), t.plotSizeX = a ? f : d, t.plotSizeY = a ? d : f, t.spacingBox = s.spacingBox = {
			x: o[3],
			y: o[0],
			width: r - o[3] - o[1],
			height: n - o[0] - o[2]
		}, t.plotBox = s.plotBox = {
			x: l,
			y: u,
			width: d,
			height: f
		}, i && (t.clipBox = {
			x: c(i[a ? 2 : 3]),
			y: c(i[+!!a]),
			width: c(t.plotSizeX - i[+!a] - i[a ? 2 : 3]),
			height: c(t.plotSizeY - i[+!!a] - i[a ? 3 : 2])
		}), !e) {
			for (let e of t.axes) e.setAxisSize(), e.setAxisTranslation();
			s.alignElements();
		}
		p(t, "afterSetChartSize", { skipAxes: e });
	}
	resetMargins() {
		p(this, "resetMargins");
		let e = this, t = e.options.chart, n = t.plotBorderWidth || 0, r = Math.round(n) / 2;
		["margin", "spacing"].forEach((n) => {
			let r = t[n], i = C(r) ? r : [
				r,
				r,
				r,
				r
			];
			[
				"Top",
				"Right",
				"Bottom",
				"Left"
			].forEach((r, a) => {
				e[n][a] = t[`${n}${r}`] ?? i[a];
			});
		}), sn.forEach((t, n) => {
			e[t] = e.margin[n] ?? e.spacing[n];
		}), e.axisOffset = [
			0,
			0,
			0,
			0
		], e.clipOffset = [
			r,
			r,
			r,
			r
		], e.plotBorderWidth = n;
	}
	drawChartBox() {
		let e = this, t = e.options.chart, { backgroundColor: n, plotBackgroundColor: r, plotBackgroundImage: i, plotBorderRadius: a = 0, shadow: o } = t, { chartWidth: s, chartHeight: c, clipBox: l, clipOffset: u, clipRect: f, plotBGImage: m, plotBox: h, plotLeft: g, plotTop: _, plotWidth: v, plotHeight: y, renderer: b, styledMode: x } = e, S = e.chartBackground, C = e.plotBackground, w = e.plotBorder, T, E, D, O = "animate";
		S || (e.chartBackground = S = b.rect().addClass("highcharts-background").add(), O = "attr"), x ? T = E = S.strokeWidth() : (T = t.borderWidth || 0, E = T + (o ? 8 : 0), D = { fill: n || "none" }, (T || S["stroke-width"]) && (D.stroke = t.borderColor, D["stroke-width"] = T), S.attr(D).shadow(o)), S[O]({
			x: E / 2,
			y: E / 2,
			width: s - E - T % 2,
			height: c - E - T % 2,
			r: t.borderRadius
		}), O = "animate", C || (O = "attr", e.plotBackground = C = b.rect().addClass("highcharts-plot-background").add()), C[O]({
			...h,
			r: a
		}), x || (C.attr({ fill: r || "none" }).shadow(t.plotShadow), i && (m ? (i !== m.attr("href") && m.attr("href", i), m.animate(h)) : e.plotBGImage = b.image(i, g, _, v, y).add())), f ? f.animate({
			width: l.width,
			height: l.height
		}) : e.clipRect = b.clipRect(l), O = "animate", w || (O = "attr", e.plotBorder = w = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1.5 }).add()), w.attr(x ? void 0 : {
			stroke: t.plotBorderColor,
			"stroke-width": t.plotBorderWidth || 0,
			fill: "none"
		})[O]({ r: a });
		let k = w.strokeWidth(), A = d(w.crisp(h, -k));
		if (u && !x) {
			let e = u[0] - k / 2, t = u[3] - k / 2;
			A.x -= t, A.y -= e, A.width += t + u[1] - k / 2, A.height += e + u[2] - k / 2;
		}
		w[O](A), ["plotClipOuter", "plotClipInner"].forEach((t, n) => {
			let r = e[t], i = n ? -k : k;
			r?.[a ? O : "attr"]({
				x: A.x - i / 2,
				y: A.y - i / 2,
				width: A.width + i,
				height: A.height + i,
				r: a ? a + i / 2 : 0
			}), r?.parentGroup?.attr({ display: a ? "" : "none" });
		}), e.isDirtyBox = !1, p(this, "afterDrawChartBox");
	}
	propFromSeries() {
		let e = this, t = e.options.chart, n = e.options.series, r, i, a;
		[
			"inverted",
			"angular",
			"polar"
		].forEach(function(o) {
			for (i = ln[t.type], a = t[o] || i && i.prototype[o], r = n?.length; !a && r--;) i = ln[n[r].type], i && i.prototype[o] && (a = !0);
			e[o] = a;
		});
	}
	linkSeries(e) {
		let t = this, n = t.series;
		n.forEach(function(e) {
			e.linkedSeries.length = 0;
		}), n.forEach(function(e) {
			let { linkedTo: r } = e.options, i = s(r) && (r === ":previous" ? n[e.index - 1] : t.get(r));
			i && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = e.options.visible ?? i.options.visible ?? e.visible);
		}), p(this, "afterLinkSeries", { isUpdating: e });
	}
	renderSeries() {
		this.series.forEach(function(e) {
			e.translate(), e.render();
		});
	}
	render() {
		let e = this, t = e.axes, n = e.colorAxis, r = e.renderer, { axisLayoutRuns: i = 2, plotBorderRadius: a } = e.options.chart, o = (e) => {
			e.forEach((e) => {
				e.visible && e.render();
			});
		}, s = 0, c = !0, l, u = 0;
		a && (e.plotClipOuter ||= r.clipRect(), e.plotClipInner ||= r.clipRect()), e.setTitle(), p(e, "beforeMargins"), e.getStacks?.(), e.getMargins(!0), e.setChartSize();
		for (let n of t) {
			let { options: t } = n, { labels: r, offset: i } = t;
			if (e.hasCartesianSeries && n.horiz && n.visible && r.enabled && n.series.length && n.coll !== "colorAxis" && !n.isRadial) {
				s = t.tickLength, n.createGroups();
				let e = new ht(n, 0, "", !0), a = e.createLabel("x", r);
				if (e.destroy(), a && (r.reserveSpace ?? !x(t.crossing)) && (s = a.getBBox().height + (r.distance ?? 15) + Math.max(x(i) ? i : 0, 0)), s) {
					a?.destroy();
					break;
				}
			}
		}
		for (e.plotHeight = Math.max(e.plotHeight - s, 0); (c || l || i > 1) && u < i;) {
			let n = e.plotWidth, r = e.plotHeight, i = [1.05, 1.1];
			for (let e of t) {
				let t = +(e.horiz || 0);
				if (u === 0) {
					e.setScale();
					let n = e.tickPositions?.info?.match;
					n && (i[t] = Math.min(n, i[t]));
				} else (t && c || !t && l) && e.setTickInterval(!0);
			}
			u === 0 ? e.getAxisMargins() : e.getMargins(), c = n / e.plotWidth > (u ? 1 : i[1]), l = r / e.plotHeight > (u ? 1 : i[0]), u++;
		}
		e.drawChartBox(), e.hasCartesianSeries ? o(t) : n?.length && o(n), e.seriesGroup ||= r.g("series-group").attr({ zIndex: 3 }).shadow(e.options.chart.seriesGroupShadow).add(), e.renderSeries(), e.addCredits(), e.setResponsive && e.setResponsive(), e.hasRendered = !0;
	}
	addCredits(e) {
		let t = this, n = d(!0, this.options.credits, e);
		if (n.enabled && !this.credits) {
			let e = n.href ? q.filterUserAttributes({ href: n.href }).href : void 0;
			this.credits = this.renderer.text(n.text + (this.mapCredits || ""), 0, 0, n.useHTML).addClass("highcharts-credits").on("click", function(n) {
				p(t, "creditsClick", n, () => {
					e && (cn.location.href = e);
				});
			}).attr({
				align: n.position.align,
				zIndex: 8
			}), n.events?.click && I(t, "creditsClick", n.events.click), t.styledMode || this.credits.css(n.style), this.credits.add().align(n.position), this.credits.update = function(e) {
				t.credits = t.credits.destroy(), t.addCredits(e);
			};
		}
	}
	destroy() {
		let e = this, t = e.axes, n = e.series, r = e.container, a = r?.parentNode, o;
		for (p(e, "destroy"), e.renderer.forExport ? h(an, e) : an[e.index] = void 0, z.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), V(e), o = t.length; o--;) t[o] = t[o].destroy();
		for (this.scroller?.destroy?.(), o = n.length; o--;) n[o] = n[o].destroy();
		[
			"title",
			"subtitle",
			"chartBackground",
			"plotBackground",
			"plotBGImage",
			"plotBorder",
			"seriesGroup",
			"clipRect",
			"credits",
			"pointer",
			"rangeSelector",
			"legend",
			"resetZoomButton",
			"tooltip",
			"renderer"
		].forEach((t) => {
			e[t] = e[t]?.destroy?.();
		}), r && (r.innerHTML = q.emptyHTML, V(r), a && i(r)), u(e, function(t, n) {
			delete e[n];
		});
	}
	firstRender() {
		let e = this, t = e.options;
		e.getContainer(), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.createAxes();
		let n = K(t.series) ? t.series : [];
		t.series = [], n.forEach(function(t) {
			e.initSeries(t);
		}), e.linkSeries(), p(e, "beforeRender"), e.render(), e.pointer?.getChartPosition(), !e.renderer.asyncCounter && !e.hasLoaded && e.onload(), e.temporaryDisplay(!0);
	}
	onload() {
		this.callbacks.concat([this.callback]).forEach(function(e) {
			e && this.index !== void 0 && e.apply(this, [this]);
		}, this), p(this, "load"), p(this, "render"), W(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.warnIfCSSNotLoaded(), this.hasLoaded = !0;
	}
	warnIfA11yModuleNotLoaded() {
		let { options: e, title: t } = this;
		e && !this.accessibility && (this.renderer.boxWrapper.attr({
			role: "img",
			"aria-label": (t?.element.textContent || "").replace(/</g, "&lt;")
		}), e.accessibility && e.accessibility.enabled === !1 || H("Highcharts warning: Consider including the \"accessibility.js\" module to make your chart more usable for people with disabilities. Set the \"accessibility.enabled\" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.", !1, this));
	}
	warnIfCSSNotLoaded() {
		this.styledMode && cn.getComputedStyle(this.container).zIndex !== "0" && H(35, !1, this);
	}
	addSeries(e, t, n) {
		let r = this, i;
		return e && (t ??= !0, p(r, "addSeries", { options: e }, function() {
			i = r.initSeries(e), r.isDirtyLegend = !0, r.linkSeries(), p(r, "afterAddSeries", { series: i }), t && r.redraw(n);
		})), i;
	}
	addAxis(e, t, n, r) {
		return this.createAxis(t ? "xAxis" : "yAxis", {
			axis: e,
			redraw: n,
			animation: r
		});
	}
	addColorAxis(e, t, n) {
		return this.createAxis("colorAxis", {
			axis: e,
			redraw: t,
			animation: n
		});
	}
	createAxis(e, t) {
		let n = new Ct(this, t.axis, e);
		return (t.redraw ?? !0) && this.redraw(t.animation), n;
	}
	showLoading(e) {
		let t = this, n = t.options, i = n.loading, a = i?.style ?? {}, o = function() {
			s && r(s, {
				left: a.left ?? t.plotLeft + "px",
				top: a.top ?? t.plotTop + "px",
				width: a.width ?? t.plotWidth + "px",
				height: a.height ?? t.plotHeight + "px"
			});
		}, s = t.loadingDiv, c = t.loadingSpan;
		s || (t.loadingDiv = s = he("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, t.container)), c || (t.loadingSpan = c = he("span", { className: "highcharts-loading-inner" }, null, s), I(t, "redraw", o)), s.className = "highcharts-loading", q.setElementHTML(c, e ?? n.lang.loading ?? ""), t.styledMode || (r(s, R(a, { zIndex: 10 })), r(c, i?.labelStyle ?? {}), t.loadingShown || (r(s, {
			opacity: 0,
			display: ""
		}), ae(s, { opacity: a.opacity ?? .5 }, { duration: i?.showDuration ?? 0 }))), t.loadingShown = !0, o();
	}
	hideLoading() {
		let e = this.options, t = this.loadingDiv;
		t && (t.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || ae(t, { opacity: 0 }, {
			duration: e.loading?.hideDuration ?? 100,
			complete: function() {
				r(t, { display: "none" });
			}
		})), this.loadingShown = !1;
	}
	update(e, t, n, r) {
		let i = this, o = {
			credits: "addCredits",
			title: "setTitle",
			subtitle: "setSubtitle",
			caption: "setCaption"
		}, c = e.isResponsiveOptions, l = [], f, m, h;
		e = a(e, i.options);
		let g = {
			options: e,
			hasChanged: !!Object.keys(e).length
		};
		if (p(i, "update", g), !g.hasChanged) return;
		c || i.setResponsive(!1, !0), i.userOptions = d(i.userOptions, e);
		let _ = e.chart;
		_ && (d(!0, i.options.chart, _), this.setZoomOptions(), "className" in _ && i.setClassName(_.className), ("inverted" in _ || "polar" in _ || "type" in _) && (i.propFromSeries(), f = !0), "alignTicks" in _ && (f = !0), "events" in _ && rn(this, _), u(_, function(e, t) {
			i.propsRequireUpdateSeries.indexOf("chart." + t) !== -1 && (m = !0), i.propsRequireDirtyBox.indexOf(t) !== -1 && (i.isDirtyBox = !0), i.propsRequireReflow.indexOf(t) !== -1 && (i.isDirtyBox = !0, c || (h = !0));
		}), !i.styledMode && _.style && i.renderer.setStyle(i.options.chart.style || {})), !i.styledMode && e.colors && (this.options.colors = e.colors), u(e, function(t, n) {
			i[n] && typeof i[n].update == "function" ? i[n].update(t, !1) : typeof i[o[n]] == "function" ? i[o[n]](t) : n !== "colors" && i.collectionsWithUpdate.indexOf(n) === -1 && d(!0, i.options[n], e[n]), n !== "chart" && i.propsRequireUpdateSeries.indexOf(n) !== -1 && (m = !0);
		}), this.collectionsWithUpdate.forEach((t) => {
			e[t] && (B(e[t]).forEach((e, r) => {
				if (!e) return;
				let a = W(e.id), o;
				a && (o = i.get(e.id)), !o && i[t] && (o = i[t][e.index ?? r], o && (a && W(o.options.id) || o.options.isInternal) && (o = void 0)), o && o.coll === t && (o.update(e, !1), n && (o.touched = !0)), !o && n && i.collectionsWithInit[t] && (i.collectionsWithInit[t][0].apply(i, [e].concat(i.collectionsWithInit[t][1] || [], [!1])).touched = !0);
			}), n && i[t].forEach((e) => {
				!e.touched && !e.options.isInternal ? l.push(e) : delete e.touched;
			}));
		}), l.forEach((e) => {
			e.chart && e.remove && e.remove(!1);
		}), f && i.axes.forEach(function(e) {
			e.update({}, !1);
		}), m && i.series.forEach((e) => {
			e.chart && e.update({}, !1);
		});
		let v = _?.width, y = _ && (s(_.height) ? N(_.height, v || i.chartWidth) : _.height);
		h || x(v) && v !== i.chartWidth || x(y) && y !== i.chartHeight ? i.setSize(v, y, r) : (t ?? !0) && i.redraw(r), p(i, "afterUpdate", {
			options: e,
			redraw: t,
			animation: r
		});
	}
	setSubtitle(e, t) {
		this.applyDescription("subtitle", e), this.layOutTitles(t);
	}
	setCaption(e, t) {
		this.applyDescription("caption", e), this.layOutTitles(t);
	}
	showResetZoom() {
		let e = this, t = e.options.lang, n = e.zooming.resetButton, r = n.theme, i = n.relativeTo === "chart" || n.relativeTo === "spacingBox" ? void 0 : "plotBox";
		p(this, "beforeShowResetZoom", void 0, () => {
			e.resetZoomButton = e.renderer.button(t.resetZoom, 0, 0, () => e.zoomOut(), r).attr({
				align: n.position.align,
				title: t.resetZoomTitle
			}).addClass("highcharts-reset-zoom").add().align(n.position, !1, i);
		}), p(this, "afterShowResetZoom");
	}
	zoomOut() {
		p(this, "selection", { resetSelection: !0 }, () => this.transform({
			reset: !0,
			trigger: "zoom"
		}));
	}
	pan(e, t) {
		let n = this, i = typeof t == "object" ? t : {
			enabled: t,
			type: "x"
		}, a = i.type, o = a && n[{
			x: "xAxis",
			xy: "axes",
			y: "yAxis"
		}[a]].filter((e) => e.options.panningEnabled && !e.options.isInternal), s = n.options.chart;
		s?.panning && (s.panning = i), p(this, "pan", { originalEvent: e }, () => {
			n.transform({
				axes: o,
				event: e,
				to: {
					x: e.chartX - (n.mouseDownX || 0),
					y: e.chartY - (n.mouseDownY || 0)
				},
				trigger: "pan"
			}), r(n.container, { cursor: "move" });
		});
	}
	transform(e) {
		let { axes: t = this.axes, event: n, from: r = {}, reset: i, selection: a, to: o = {}, trigger: s, allowResetButton: c = !0 } = e, { time: l } = this;
		this.hoverPoints?.forEach((e) => e.setState()), p(this, "transform", e);
		let u = e.hasZoomed || !1, d, f;
		for (let e of t) {
			let { horiz: t, len: p, minPointOffset: m = 0, options: h, reversed: g } = e, _ = t ? "width" : "height", v = t ? "x" : "y", y = o[_] ?? e.len, b = r[_] ?? e.len, S = Math.abs(y) < 10 ? 1 : y / b, C = (r[v] || 0) + b / 2 - e.pos, w = C - ((o[v] ?? e.pos) + y / 2 - e.pos) / S, T = t && !g || !t && g ? 1 : -1, E = w;
			if (!i && (C < 0 || C > e.len)) continue;
			let D = a || e.chart.polar || e.isOrdinal && S <= 1 ? 0 : m * T || 0, O = e.toValue(E, !0), k = e.toValue(E + p / S, !0), A = O + D, j = k - D, M = e.allExtremes;
			if (A > j && ([A, j] = [j, A]), S === 1 && !i && e.coll === "yAxis" && !M) {
				for (let t of e.series) {
					let e = t.getExtremes(t.getProcessedData(!0).modified.getColumn(t.pointValKey || "y") || [], !0);
					M ??= {
						dataMin: Number.MAX_VALUE,
						dataMax: -Number.MAX_VALUE
					}, x(e.dataMin) && x(e.dataMax) && (M.dataMin = Math.min(e.dataMin, M.dataMin), M.dataMax = Math.max(e.dataMax, M.dataMax));
				}
				e.allExtremes = M;
			}
			let { dataMin: ee, dataMax: N, min: P, max: F } = R(e.getExtremes(), M || {}), I = l.parse(h.min), te = l.parse(h.max), ne = ee ?? I, L = N ?? te, re = j - A, z = e.categories ? 0 : Math.min(re, L - ne), ie = ne - z * (W(I) ? 0 : h.minPadding), ae = L + z * (W(te) ? 0 : h.maxPadding), oe = e.allowZoomOutside || S === 1 || s !== "zoom" && S > 1, se = Math.min(I ?? ie, ie, oe ? P : ie), ce = Math.max(te ?? ae, ae, oe ? F : ae);
			(!e.isOrdinal || S !== 1 || i) && (A < se && (A = se, S >= 1 && (j = A + re)), j > ce && (j = ce, S >= 1 && (A = j - re)), (i || e.series.length && (a || (A !== P || j !== F) && A >= se && j <= ce)) && (a ? a[e.coll].push({
				axis: e,
				min: Math.min(O, k),
				max: Math.max(O, k)
			}) : (e.isPanning = s !== "zoom" && s !== "drop", e.isPanning && s !== "mousewheel" && (f = !0), s !== "drop" && e.setExtremes(i ? void 0 : A, i ? void 0 : j, !1, !1, {
				move: w,
				trigger: s,
				scale: S
			}), !i && (A > se || j < ce) && (d = c)), u = !0), !this.hasCartesianSeries && !i && (d = c), n && (this[t ? "mouseDownX" : "mouseDownY"] = n[t ? "chartX" : "chartY"]));
		}
		return u && (a ? p(this, "selection", a, () => {
			delete e.selection, e.trigger = "zoom", this.transform(e);
		}) : (d && !f && !this.resetZoomButton ? this.showResetZoom() : !d && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()), this.redraw(s === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), u;
	}
};
R(un.prototype, {
	callbacks: [],
	collectionsWithInit: {
		xAxis: [un.prototype.addAxis, [!0]],
		yAxis: [un.prototype.addAxis, [!1]],
		series: [un.prototype.addSeries]
	},
	collectionsWithUpdate: [
		"xAxis",
		"yAxis",
		"series"
	],
	propsRequireDirtyBox: [
		"backgroundColor",
		"borderColor",
		"borderWidth",
		"borderRadius",
		"plotBackgroundColor",
		"plotBackgroundImage",
		"plotBorderColor",
		"plotBorderRadius",
		"plotBorderWidth",
		"plotShadow",
		"shadow"
	],
	propsRequireReflow: [
		"margin",
		"marginTop",
		"marginRight",
		"marginBottom",
		"marginLeft",
		"spacing",
		"spacingTop",
		"spacingRight",
		"spacingBottom",
		"spacingLeft"
	],
	propsRequireUpdateSeries: [
		"chart.inverted",
		"chart.polar",
		"chart.ignoreHiddenSeries",
		"chart.type",
		"colors",
		"plotOptions",
		"time",
		"tooltip"
	]
});
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/ScrollablePlotArea.js
var { composed: dn } = z;
function fn() {
	(this.scrollablePixelsX || this.scrollablePixelsY) && !this.scrollablePlotArea && (this.scrollablePlotArea = new mn(this)), this.scrollablePlotArea?.applyFixed();
}
function pn() {
	this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
}
var mn = class t {
	static compose(t, n, r) {
		e(dn, "ScrollablePlotArea") && (I(t, "afterInit", pn), I(n, "afterSetChartSize", (e) => this.afterSetSize(e.target, e)), I(n, "render", fn), I(r, "show", pn));
	}
	static afterSetSize(e, t) {
		let { minWidth: n, minHeight: r } = e.options.chart.scrollablePlotArea || {}, { clipBox: i, plotBox: a, inverted: o, renderer: s } = e, c, l, u;
		if (!s.forExport) {
			if (n ? (e.scrollablePixelsX = c = Math.max(0, n - e.chartWidth), c && (e.scrollablePlotBox = d(e.plotBox), a.width = e.plotWidth += c, i[o ? "height" : "width"] += c, u = !0)) : r && (e.scrollablePixelsY = l = Math.max(0, r - e.chartHeight), W(l) && (e.scrollablePlotBox = d(e.plotBox), a.height = e.plotHeight += l, i[o ? "width" : "height"] += l, u = !1)), W(u)) {
				if (!t.skipAxes) for (let t of e.axes) (t.horiz === u || e.hasParallelCoordinates && t.coll === "yAxis") && (t.setAxisSize(), t.setAxisTranslation());
			} else delete e.scrollablePlotBox;
		}
	}
	constructor(e) {
		let t = e.options.chart, n = t.scrollablePlotArea || {}, i = this.moveFixedElements.bind(this), a = {
			WebkitOverflowScrolling: "touch",
			overflowX: "hidden",
			overflowY: "hidden"
		};
		e.scrollablePixelsX && (a.overflowX = "auto"), e.scrollablePixelsY && (a.overflowY = "auto"), this.chart = e;
		let o = this.parentDiv = he("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, e.renderTo), s = this.scrollingContainer = he("div", { className: "highcharts-scrolling" }, a, o), c = this.innerContainer = he("div", { className: "highcharts-inner-container" }, void 0, s), l = this.fixedDiv = he("div", { className: "highcharts-fixed" }, {
			position: "absolute",
			overflow: "hidden",
			pointerEvents: "none",
			zIndex: (t.style?.zIndex || 0) + 2,
			top: 0
		}, void 0, !0), u = this.fixedRenderer = new st(l, e.chartWidth, e.chartHeight, t.style);
		this.mask = u.path().attr({
			fill: t.backgroundColor || "#fff",
			"fill-opacity": n.opacity ?? .85,
			zIndex: -1
		}).addClass("highcharts-scrollable-mask").add(), s.parentNode.insertBefore(l, s), r(e.renderTo, { overflow: "visible" }), I(e, "afterShowResetZoom", i), I(e, "afterApplyDrilldown", i), I(e, "afterLayOutTitles", i);
		let d;
		I(s, "scroll", () => {
			let { pointer: t, hoverPoint: n } = e;
			t && (delete t.chartPosition, n && (d = n), t.runPointActions(void 0, d, !0));
		}), c.appendChild(e.container);
	}
	applyFixed() {
		let { chart: e, fixedRenderer: t, isDirty: n, scrollingContainer: i } = this, { axisOffset: a, chartWidth: o, chartHeight: s, container: c, plotHeight: l, plotLeft: u, plotTop: d, plotWidth: f, scrollablePixelsX: p = 0, scrollablePixelsY: m = 0 } = e, { scrollPositionX: h = 0, scrollPositionY: g = 0 } = e.options.chart.scrollablePlotArea || {}, _ = o + p, v = s + m;
		t.setSize(o, s), (n ?? !0) && (this.isDirty = !1, this.moveFixedElements()), O(e.container), r(c, {
			width: `${_}px`,
			height: `${v}px`
		}), e.renderer.boxWrapper.attr({
			width: _,
			height: v,
			viewBox: [
				0,
				0,
				_,
				v
			].join(" ")
		}), e.chartBackground?.attr({
			width: _,
			height: v
		}), r(i, {
			width: `${o}px`,
			height: `${s}px`
		}), W(n) || (i.scrollLeft = p * h, i.scrollTop = m * g);
		let y = d - a[0] - 1, b = u - a[3] - 1, x = d + l + a[2] + 1, S = u + f + a[1] + 1, C = u + f - p, w = d + l - m, T = [[
			"M",
			0,
			0
		]];
		p ? T = [
			[
				"M",
				0,
				y
			],
			[
				"L",
				u - 1,
				y
			],
			[
				"L",
				u - 1,
				x
			],
			[
				"L",
				0,
				x
			],
			["Z"],
			[
				"M",
				C,
				y
			],
			[
				"L",
				o,
				y
			],
			[
				"L",
				o,
				x
			],
			[
				"L",
				C,
				x
			],
			["Z"]
		] : m && (T = [
			[
				"M",
				b,
				0
			],
			[
				"L",
				b,
				d - 1
			],
			[
				"L",
				S,
				d - 1
			],
			[
				"L",
				S,
				0
			],
			["Z"],
			[
				"M",
				b,
				w
			],
			[
				"L",
				b,
				s
			],
			[
				"L",
				S,
				s
			],
			[
				"L",
				S,
				w
			],
			["Z"]
		]), e.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: T });
	}
	moveFixedElements() {
		let { container: n, inverted: r, scrollablePixelsX: i, scrollablePixelsY: a } = this.chart, o = this.fixedRenderer, s = t.fixedSelectors.slice(), c;
		if (i && !r ? c = ".highcharts-yaxis" : i && r || a && !r ? c = ".highcharts-xaxis" : a && r && (c = ".highcharts-yaxis"), c && !(this.chart.hasParallelCoordinates && c === ".highcharts-yaxis")) for (let t of [`${c}:not(.highcharts-radial-axis)`, `${c}-labels:not(.highcharts-radial-axis-labels)`]) e(s, t);
		else for (let e of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let t of [`${e}:not(.highcharts-radial-axis)`, `${e}-labels:not(.highcharts-radial-axis-labels)`]) h(s, t);
		for (let e of s) [].forEach.call(n.querySelectorAll(e), (e) => {
			(e.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(e), e.style.pointerEvents = "auto";
		});
	}
};
mn.fixedSelectors = [
	".highcharts-breadcrumbs-group",
	".highcharts-contextbutton",
	".highcharts-caption",
	".highcharts-credits",
	".highcharts-drillup-button",
	".highcharts-legend",
	".highcharts-legend-checkbox",
	".highcharts-navigator-series",
	".highcharts-navigator-xaxis",
	".highcharts-navigator-yaxis",
	".highcharts-navigator",
	".highcharts-range-selector-group",
	".highcharts-reset-zoom",
	".highcharts-scrollbar",
	".highcharts-subtitle",
	".highcharts-title"
];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/Stacking/StackingAxis.js
var { series: { prototype: hn } } = Y;
function gn() {
	let e = this, t = e.inverted;
	e.axes.forEach((e) => {
		e.stacking?.stacks && e.hasVisibleSeries && (e.stacking.oldStacks = e.stacking.stacks);
	}), e.series.forEach((e) => {
		let n = e.xAxis?.options || {};
		e.options.stacking && e.reserveSpace() && (e.stackKey = [
			e.type,
			e.options.stack ?? "",
			t ? n.top : n.left,
			t ? n.height : n.width
		].join(","));
	});
}
function _n() {
	let e = this.stacking;
	if (e) {
		let t = e.stacks;
		u(t, (e, n) => {
			b(e), delete t[n];
		}), e.stackTotalGroup?.destroy();
	}
}
function vn() {
	this.stacking ||= new wn(this);
}
function yn(e, t, n, r) {
	return !W(e) || e.x !== t || r && e.stackKey !== r ? e = {
		x: t,
		index: 0,
		key: r,
		stackKey: r
	} : e.index++, e.key = [
		n,
		t,
		e.index
	].join(","), e;
}
function bn() {
	let e = this, t = e.yAxis, n = e.stackKey || "", r = t.stacking.stacks, i = e.getColumn("x", !0), a = e[e.options.stacking + "Stacker"], o;
	a && [n, "-" + n].forEach((t) => {
		let n = i.length, s, c, l;
		for (; n--;) s = i[n], o = e.getStackIndicator(o, s, e.index, t), c = r[t]?.[s], l = c?.points[o.key || ""], l && a.call(e, l, c, n);
	});
}
function xn(e, t, n) {
	let r = t.total ? 100 / t.total : 0;
	e[0] = A(e[0] * r), e[1] = A(e[1] * r), this.stackedYData[n] = e[1];
}
function Sn(e) {
	(this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? hn.setStackedPoints.call(this, e, "group") : e.stacking.resetStacks());
}
function Cn(e, t) {
	let n = t || this.options.stacking;
	if (!n || !this.reserveSpace() || ({ group: "xAxis" }[n] || "yAxis") !== e.coll) return;
	let r = this, i = r.getColumn("x", !0), a = r.getColumn(r.pointValKey || "y", !0), o = [], s = a.length, c = r.options, l = c.threshold || 0, u = c.startFromThreshold ? l : 0, d = c.stack, f = t ? `${r.type},${n}` : r.stackKey || "", p = "-" + f, m = r.negStacks, h = e.stacking, g = h.stacks, _ = h.oldStacks, v, y, b, S, C, w, T;
	for (h.stacksTouched += 1, T = 0; T < s; T++) {
		let t = i[T] || 0, s = a[T], c = x(s) && s || 0;
		v = r.getStackIndicator(v, t, r.index), w = v.key || "", y = m && c < (u ? 0 : l), C = y ? p : f, g[C] || (g[C] = {}), g[C][t] || (_[C]?.[t] ? (g[C][t] = _[C][t], g[C][t].total = null) : g[C][t] = new Se(e, !!y, t, d)), b = g[C][t], s === null ? (delete b.points[w], delete b.points[r.index]) : (b.points[w] = b.points[r.index] = [b.cumulative ?? u], W(b.cumulative) || (b.base = w), b.touched = h.stacksTouched, v.index > 0 && r.singleStacks === !1 && (b.points[w][0] = b.points[r.index + "," + t + ",0"][0]));
		let E = b.total || 0;
		n === "percent" ? (S = y ? f : p, m && g[S]?.[t] ? (S = g[S][t], E = S.total = Math.max(S.total || 0, E) + Math.abs(c)) : E = A(E + Math.abs(c))) : n === "group" ? x(s) && E++ : E = A(E + c), n === "group" ? b.cumulative = (E || 1) - 1 : b.cumulative = A((b.cumulative ?? u) + c), b.total = E, s !== null && (b.points[w].push(b.cumulative), o[T] = b.cumulative, b.hasValidPoints = !0);
	}
	n === "percent" && (h.usePercentage = !0), n !== "group" && (this.stackedYData = o), h.oldStacks = {};
}
var wn = class {
	constructor(e) {
		this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = e;
	}
	buildStacks() {
		let e = this, t = e.axis, n = t.series, r = t.coll === "xAxis", i = t.options.reversedStacks, a = n.length, o, s;
		for (this.resetStacks(), e.usePercentage = !1, s = a; s--;) o = n[i ? s : a - s - 1], r && o.setGroupedPoints(t), o.setStackedPoints(t);
		if (!r) for (s = 0; s < a; s++) n[s].modifyStacks();
		p(t, "afterBuildStacks");
	}
	cleanStacks() {
		this.oldStacks && (this.stacks = this.oldStacks, u(this.stacks, (e) => {
			u(e, (e) => {
				e.cumulative = e.total;
			});
		}));
	}
	resetStacks() {
		u(this.stacks, (e) => {
			u(e, (t, n) => {
				x(t.touched) && t.touched < this.stacksTouched ? (t.destroy(), delete e[n]) : (t.total = null, t.cumulative = null);
			});
		});
	}
	renderStackTotals() {
		let e = this, t = e.axis, n = t.chart, r = n.renderer, i = e.stacks, { animation: a, enabled: o } = t.options.stackLabels || {}, s = de(n, a || !1), c = e.stackTotalGroup = e.stackTotalGroup || (o ? r.g("stack-labels").attr({
			zIndex: 6,
			opacity: 0
		}).add() : void 0);
		c && (c.translate(n.plotLeft, n.plotTop), u(i, (e) => {
			u(e, (e) => {
				o ? e.render(c) : e.label = e.label?.destroy();
			});
		}), c.animate({ opacity: 1 }, s));
	}
}, Tn;
(function(e) {
	function t(e, t, n) {
		let r = t.prototype, i = n.prototype;
		r.getStacks || (I(e, "init", vn), I(e, "destroy", _n), r.getStacks = gn, i.getStackIndicator = yn, i.modifyStacks = bn, i.percentStacker = xn, i.setGroupedPoints = Sn, i.setStackedPoints = Cn);
	}
	e.compose = t;
})(Tn ||= {});
var En = Tn, Dn = class extends ye {
	drawGraph() {
		let e = this.options, t = (this.gappedPath || this.getGraphPath).call(this), n = this.chart.styledMode;
		[this, ...this.zones].forEach((r, i) => {
			let a, o = r.graph, s = o ? "animate" : "attr", c = r.dashStyle || e.dashStyle;
			if (o ? (o.endX = this.preventGraphAnimation ? null : t.xMap, o.animate({ d: t })) : t.length && (r.graph = o = this.chart.renderer.path(t).addClass("highcharts-graph" + (i ? ` highcharts-zone-graph-${i - 1} ` : " ") + (i && r.className || "")).attr({ zIndex: 1 }).add(this.group)), o && !n && (a = {
				stroke: !i && e.lineColor || r.color || this.color || "var(--highcharts-neutral-color-20)",
				"stroke-width": e.lineWidth || 0,
				fill: this.fillGraph && this.color || "none"
			}, c ? a.dashstyle = c : e.linecap !== "square" && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), o[s](a), e.shadow)) {
				let t = this.chart.inverted, n = { filterUnits: "userSpaceOnUse" }, r = C(e.shadow) ? d(t ? {} : n, e.shadow) : t ? !0 : n;
				o.shadow(r);
			}
			o && (o.startX = t.xMap, o.isArea = t.isArea);
		});
	}
	getGraphPath(e, t, n) {
		let r = this, i = r.options, a = [], o = [], s, c = i.step;
		e ||= r.points;
		let l = e.reversed;
		return l && e.reverse(), c = {
			right: 1,
			center: 2
		}[c] || c && 3, c && l && (c = 4 - c), e = this.getValidPoints(e, !1, i.nullInteraction || !(i.connectNulls && !t && !n)), e.forEach(function(l, u) {
			let d = l.plotX, f = l.plotY, p = e[u - 1], m = l.isNull || typeof f != "number", h;
			(l.leftCliff || p?.rightCliff) && !n && (s = !0), m && !W(t) && u > 0 ? s = !i.connectNulls : m && !t ? s = !0 : (u === 0 || s ? h = [[
				"M",
				l.plotX,
				l.plotY
			]] : r.getPointSpline ? h = [r.getPointSpline(e, l, u)] : c ? (h = c === 1 ? [[
				"L",
				p.plotX,
				f
			]] : c === 2 ? [[
				"L",
				(p.plotX + d) / 2,
				p.plotY
			], [
				"L",
				(p.plotX + d) / 2,
				f
			]] : [[
				"L",
				d,
				p.plotY
			]], h.push([
				"L",
				d,
				f
			])) : h = [[
				"L",
				d,
				f
			]], o.push(l.x), c && (o.push(l.x), c === 2 && o.push(l.x)), a.push.apply(a, h), s = !1);
		}), a.xMap = o, r.graphPath = a, a;
	}
};
Dn.defaultOptions = d(ye.defaultOptions, { legendSymbol: "lineMarker" }), Y.registerSeriesType("line", Dn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Area/AreaSeriesDefaults.js
var On = {
	threshold: 0,
	legendSymbol: "areaMarker"
}, { seriesTypes: { line: kn } } = Y, An = class extends kn {
	drawGraph() {
		this.areaPath = [], super.drawGraph.apply(this);
		let { areaPath: e, options: t } = this;
		[this, ...this.zones].forEach((n, r) => {
			let i = {}, a = n.fillColor || t.fillColor, o = n.area, s = o ? "animate" : "attr";
			o ? (o.endX = this.preventGraphAnimation ? null : e.xMap, o.animate({ d: e })) : (i.zIndex = 0, o = n.area = this.chart.renderer.path(e).addClass("highcharts-area" + (r ? ` highcharts-zone-area-${r - 1} ` : " ") + (r && n.className || "")).add(this.group), o.isArea = !0), this.chart.styledMode || (i.fill = a || n.color || this.color, i["fill-opacity"] = a ? 1 : t.fillOpacity ?? .75, o.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), o[s](i), o.startX = e.xMap, o.shiftUnit = t.step ? 2 : 1;
		});
	}
	getGraphPath(e) {
		let t = kn.prototype.getGraphPath, n = this.options, r = n.stacking, i = this.yAxis, a = [], o = [], s = this.index, c = i.stacking.stacks[this.stackKey], l = n.threshold, u = Math.round(i.getThreshold(n.threshold)), d = n.connectNulls ?? r === "percent", f = function(t, n, d) {
			let f = e[t], m = e[n], h = r && c[f.x].points[s], g = f[d + "Null"] || 0, _ = f[d + "Cliff"] || 0, v, y, b = !0;
			h && (_ || g) ? (v = (g ? h[0] : h[1]) + _, y = h[0] + _, b = !!g) : !r && m && (m.isNull || !W(m.plotY)) && (v = y = l), v !== void 0 && (o.push({
				plotX: p,
				plotY: v === null ? u : i.getThreshold(v),
				isNull: b,
				isCliff: !0
			}), a.push({
				plotX: p,
				plotY: y === null ? u : i.getThreshold(y),
				doCurve: !1
			}));
		}, p, m, h;
		e ||= this.points, r && (e = this.getStackPoints(e));
		for (let t = 0, n = e.length; t < n; ++t) r || (e[t].leftCliff = e[t].rightCliff = e[t].leftNull = e[t].rightNull = void 0), m = e[t].isNull || !W(e[t].plotY), p = e[t].rectPlotX ?? e[t].plotX, h = r ? e[t].yBottom ?? u : u, (!m || d) && (d || f(t, t - 1, "left"), m && !r && d || (o.push(e[t]), a.push({
			x: t,
			plotX: p,
			plotY: h
		})), d || f(t, t + 1, "right"));
		let g = t.call(this, o, !0, !0);
		a.reversed = !0;
		let _ = t.call(this, a, !0, !0), v = _[0];
		v && v[0] === "M" && (_[0] = [
			"L",
			v[1],
			v[2]
		]);
		let y = g.concat(_);
		y.length && y.push(["Z"]);
		let b = t.call(this, o, !1, d);
		return this.chart.series.length > 1 && r && o.some((e) => e.isCliff) && (y.hasStackedCliffs = b.hasStackedCliffs = !0), y.xMap = g.xMap, this.areaPath = y, b;
	}
	getStackPoints(e) {
		let t = this, n = [], r = [], i = this.xAxis, a = this.yAxis, o = a.stacking.stacks[this.stackKey], s = {}, c = a.series, l = c.length, d = a.options.reversedStacks ? 1 : -1, f = c.indexOf(t), p = a.getThreshold(t.options.threshold || 0);
		if (e ||= this.points, this.options.stacking) {
			for (let t = 0; t < e.length; t++) e[t].leftNull = e[t].rightNull = void 0, s[e[t].x] = e[t];
			u(o, function(e, t) {
				e.total !== null && r.push(t);
			}), r.sort(function(e, t) {
				return e - t;
			});
			let m = c.map((e) => e.visible);
			r.forEach(function(e, u) {
				let h = 0, g, _;
				if (s[e] && !s[e].isNull) n.push(s[e]), [-1, 1].forEach(function(n) {
					let i = n === 1 ? "rightNull" : "leftNull", a = n === 1 ? "rightCliff" : "leftCliff", p = o[r[u + n]], h = 0;
					if (p) {
						let n = f;
						for (; n >= 0 && n < l;) {
							let r = c[n].index;
							g = p.points[r], g || (r === t.index ? s[e][i] = !0 : m[n] && (_ = o[e].points[r], _ && (h -= _[1] - _[0]))), n += d;
						}
					}
					s[e][a] = h;
				});
				else {
					let t = f;
					for (; t >= 0 && t < l;) {
						let n = c[t].index;
						if (g = o[e].points[n], g) {
							h = g[1];
							break;
						}
						t += d;
					}
					h ||= 0;
					let r = a.positiveValuesOnly && h <= 0 ? p : a.translate(h, !1, !0, !1, !0);
					n.push({
						isNull: !0,
						plotX: i.translate(e, !1, !1, !1, !0),
						x: e,
						plotY: r,
						yBottom: r
					});
				}
			});
		}
		return n;
	}
};
An.defaultOptions = d(kn.defaultOptions, On), R(An.prototype, { singleStacks: !1 }), Y.registerSeriesType("area", An);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Spline/SplineSeries.js
var { line: jn } = Y.seriesTypes, Mn = class extends jn {
	getPointSpline(e, t, n) {
		let r = 1.5, i = 2.5, a = t.plotX || 0, o = t.plotY || 0, s = e[n - 1], c = e[n + 1], l, u, d, f;
		function p(e) {
			return e && !e.isNull && e.doCurve !== !1 && !t.isCliff;
		}
		if (p(s) && p(c)) {
			let e = s.plotX || 0, n = s.plotY || 0, p = c.plotX || 0, m = c.plotY || 0, h = 0;
			l = (r * a + e) / i, u = (r * o + n) / i, d = (r * a + p) / i, f = (r * o + m) / i, d !== l && (h = (f - u) * (d - a) / (d - l) + o - f), u += h, f += h, u > n && u > o ? (u = Math.max(n, o), f = 2 * o - u) : u < n && u < o && (u = Math.min(n, o), f = 2 * o - u), f > m && f > o ? (f = Math.max(m, o), u = 2 * o - f) : f < m && f < o && (f = Math.min(m, o), u = 2 * o - f), t.rightContX = d, t.rightContY = f, t.controlPoints = {
				low: [l, u],
				high: [d, f]
			};
		}
		let m = [
			"C",
			s.rightContX ?? s.plotX ?? 0,
			s.rightContY ?? s.plotY ?? 0,
			l ?? a ?? 0,
			u ?? o ?? 0,
			a,
			o
		];
		return s.rightContX = s.rightContY = void 0, m;
	}
};
Mn.defaultOptions = d(jn.defaultOptions), Y.registerSeriesType("spline", Mn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSpline/AreaSplineSeries.js
var { area: Nn, area: { prototype: Pn } } = Y.seriesTypes, Fn = class extends Mn {};
Fn.defaultOptions = d(Mn.defaultOptions, Nn.defaultOptions), R(Fn.prototype, {
	getGraphPath: Pn.getGraphPath,
	getStackPoints: Pn.getStackPoints,
	drawGraph: Pn.drawGraph
}), Y.registerSeriesType("areaspline", Fn);
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/DataLabel.js
var { format: In } = J, Ln;
(function(e) {
	function t() {
		return h(this).some((e) => e?.enabled);
	}
	function n(e, t, n, r, i) {
		let a = this, { chart: o } = this, s = this.isCartesian && o.inverted, { condemned: c, origin: l, plotX: u, plotY: f } = e, { crop: p = !0, distance: h, overflow: g = "justify", rotation: _ = 0 } = n, v = m(n.align), y = m(n.verticalAlign), b = _ === 0 && !c && g === "justify", S = e.pos(), C = W(u) && W(f) && o.isInsidePlot(u, Math.round(f), {
			inverted: s,
			paneCoordinates: !0,
			series: a
		}), w = this.visible && e.visible && W(u) && (a.forceDL || c || C || (n.inside ?? !!this.options.stacking) && r && o.isInsidePlot(u, s ? r.x + 1 : r.y + r.height - 1, {
			inverted: s,
			paneCoordinates: !0,
			series: a
		}));
		if (S) {
			let u = t.getBBox(), f = t.getBBox(void 0, 0);
			r = R({
				x: S[0],
				y: Math.round(S[1]),
				width: 0,
				height: 0
			}, r || {}), n.alignTo === "plotEdges" && a.isCartesian && (r[s ? "x" : "y"] = 0, r[s ? "width" : "height"] = this.yAxis?.len || 0), R(n, {
				width: u.width,
				height: u.height
			});
			let m = 0, g = 0;
			x(h) && !n.inside && (m = h * (1 - 2 * v), g = h * (1 - 2 * y)), t.align(d(n, {
				x: (n.x || 0) + m,
				y: (n.y || 0) + g,
				width: f.width,
				height: f.height
			}), !1, r, !1), t.distX = m, t.distY = g, t.alignAttr.x += v * (f.width - u.width), t.alignAttr.y += y * (f.height - u.height);
			let C = t.alignAttr.x + (u.width - f.width) / 2, T = t.alignAttr.y + (u.height - f.height) / 2;
			if (l) {
				let n = e.pos(!1, l.x, l.y);
				if (n) {
					let r = [n[0] - S[0], n[1] - S[1]];
					(a.is("column") || e.plotHigh) && (r[+!s] = 0), t.attr({
						x: C + r[0],
						y: T + r[1],
						opacity: .01
					}), t.placed = !0, i = !1;
				}
			}
			let E = {
				"text-align": t.alignAttr["text-align"] || "center",
				x: C,
				y: T,
				rotationOriginX: (t.width || 0) / 2,
				rotationOriginY: (t.height || 0) / 2
			};
			if ((c || !w) && (E.opacity = 0), t[t.placed ? "animate" : "attr"](E), b && w && r.height >= 0) this.justifyDataLabel(t, n, t.alignAttr, u, r, i);
			else if (p && !c) {
				let { x: e, y: n } = t.alignAttr;
				w = o.isInsidePlot(e, n, {
					paneCoordinates: !0,
					series: a
				}) && o.isInsidePlot(e + u.width - 1, n + u.height - 1, {
					paneCoordinates: !0,
					series: a
				});
			}
			n.shape && !_ && t[i ? "attr" : "animate"]({
				anchorX: S[0],
				anchorY: S[1]
			});
		}
		t[i ? "attr" : "animate"]({ visibility: w ? "inherit" : "hidden" }), t.placed = w;
	}
	function r(e, t) {
		let n = t.filter;
		if (n) {
			let t = n.operator, r = e[n.property], i = n.value;
			return t === ">" && r > i || t === "<" && r < i || t === ">=" && r >= i || t === "<=" && r <= i || t === "==" && r == i || t === "===" && r === i || t === "!=" && r != i || t === "!==" && r !== i;
		}
		return !0;
	}
	function i(e) {
		let r = e.prototype;
		r.initDataLabels || (r.initDataLabels = o, r.initDataLabelsGroup = a, r.alignDataLabel = n, r.drawDataLabels = c, r.justifyDataLabel = l, r.mergeArrays = f, r.hasDataLabels = t);
	}
	e.compose = i;
	function a(e, t) {
		p(this, "initDataLabelsGroup", {
			index: e,
			zIndex: t?.zIndex
		}), this.dataLabelsGroup = this.dataLabelsGroups?.[e];
		let n = this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", t?.zIndex ?? 6, this.dataLabelsParentGroups?.[e]);
		return this.dataLabelsGroups ||= [], this.dataLabelsGroups[e] = n, this.dataLabelsGroup = this.dataLabelsGroups[0], n;
	}
	function o(e, t, n) {
		let r = this, i = !!r.hasRendered, a = this.initDataLabelsGroup(e, n).attr({ opacity: +i });
		return !i && a && (r.visible && a.show(), r.options.animation ? a.animate({ opacity: 1 }, t) : a.attr({ opacity: 1 })), a;
	}
	function c(e) {
		e ||= this.points;
		let t = this, n = t.chart, i = t.options, a = n.renderer, { backgroundColor: o, plotBackgroundColor: c } = n.options.chart, l = a.getContrast(s(c) && c || s(o) && o || "var(--highcharts-background-color)"), d = [], m = h(t), { animation: g, defer: _ } = m[0], v = _ ? de(n, g, t) : {
			defer: 0,
			duration: 0
		};
		p(this, "drawDataLabels"), t.hasDataLabels?.() && e.concat(t.condemnedPoints).forEach((e) => {
			let o = e.dataLabels || [], c = e.color || t.color;
			B(f(m, e.dlOptions || e.options?.dataLabels)).forEach((f, m) => {
				let h = f.enabled && (e.visible || e.dataLabelOnHidden) && (!e.isNull || e.dataLabelOnNull) && r(e, f), { backgroundColor: g, borderColor: _, distance: y, style: b = {} } = f, x = B(f.padding || 0), S, C, T, E = {}, D = o[m], O = !D, k;
				if (h && (S = f[e.formatPrefix + "Format"] ?? f.format, C = W(S) ? In(S, e, n) : (f[e.formatPrefix + "Formatter"] || f.formatter).call(e, f, e), T = f.rotation, n.styledMode || (b.color = (s(f.color) ? f.color : void 0) ?? b.color ?? (s(t.color) ? t.color : void 0) ?? "var(--highcharts-neutral-color-100)", b.color === "contrast" ? (g !== "none" && (k = g), e.contrastColor = a.getContrast(k !== "auto" && k !== "contrast" && s(k) && k || (s(c) ? c : "")), b.color = k && k !== "contrast" || f.inside || w(y || 0) < 0 || i.stacking ? e.contrastColor : l) : delete e.contrastColor, i.cursor && (b.cursor = i.cursor)), E = {
					r: f.borderRadius ?? 3,
					rotation: T,
					padding: x[0],
					paddingLeft: x[3 % x.length],
					paddingRight: x[1 % x.length],
					zIndex: 1
				}, n.styledMode || (E.fill = g === "auto" ? e.color : g, E.stroke = _ === "auto" ? e.color : _, E["stroke-width"] = f.borderWidth), u(E, (e, t) => {
					e === void 0 && delete E[t];
				})), D && (!h || !W(C) || !!(D.div || D.text?.foreignObject) != !!f.useHTML || (!D.rotation || !f.rotation) && D.rotation !== f.rotation) && (D = void 0, O = !0), h && W(C) && C !== "" && (D ? E.text = C : (D = a.label(C, 0, 0, f.shape, void 0, void 0, f.useHTML, void 0, "data-label"), D.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (f.className || "") + (f.useHTML ? " highcharts-tracker" : ""))), D)) {
					D.options = f, D.attr(E), n.styledMode ? b.width && D.css({
						width: b.width,
						textOverflow: b.textOverflow,
						whiteSpace: b.whiteSpace
					}) : D.css(b).shadow(f.shadow), p(D, "beforeAddingDataLabel", {
						labelOptions: f,
						point: e
					});
					let r = d[m] = d[m] || this.initDataLabels(m, v, f);
					D.added || D.add(r), t.alignDataLabel(e, D, f, void 0, O), D.isActive = !0, o[m] && o[m] !== D && o[m].destroy(), o[m] = D;
				}
			});
			let h = o.length;
			for (; h--;) o[h]?.isActive ? o[h].isActive = !1 : (o[h]?.destroy(), o.splice(h, 1));
			e.dataLabel = o[0], e.dataLabels = o;
		}), p(this, "afterDrawDataLabels");
	}
	function l(e, t, n, r, i, a) {
		let o = this.chart, { align: s, verticalAlign: c } = t, { distX: l = 0, distY: u = 0 } = e, d = e.box ? 0 : e.padding || 0, f = o.inverted ? this.yAxis : this.xAxis, p = f ? f.left - o.plotLeft : 0, m = o.inverted ? this.xAxis : this.yAxis, h = m ? m.top - o.plotTop : 0, { x: g = 0, y: _ = 0 } = t, v, y, b;
		return v = (n.x || 0) - l + d + p, v < 0 && (s === "right" && g >= 0 ? (t.align = "left", t.inside = !0, g -= l) : g -= v, y = !0), v = (n.x || 0) + r.width - l - d + p, v > o.plotWidth && (s === "left" && g <= 0 ? (t.align = "right", t.inside = !0, g -= l) : g += o.plotWidth - v, y = !0), v = (n.y || 0) - u + d + h, v < 0 && (c === "bottom" && _ >= 0 ? (t.verticalAlign = "top", t.inside = !0, _ -= u) : _ -= v, b = !0), v = (n.y || 0) + r.height - u - d + h, v > o.plotHeight && (c === "top" && _ <= 0 ? (t.verticalAlign = "bottom", t.inside = !0, _ -= u) : _ += o.plotHeight - v, b = !0), (y || b) && (t.x = y ? g : g + l, t.y = b ? _ : _ + u, e.placed = !a, e.align(t, void 0, i)), y || b;
	}
	function f(e, t) {
		let n = [], r;
		if (K(e) && !K(t)) n = e.map(function(e) {
			return d(e, t);
		});
		else if (K(t) && !K(e)) n = t.map(function(t) {
			return d(e, t);
		});
		else if (!K(e) && !K(t)) n = d(e, t);
		else if (K(e) && K(t)) for (r = Math.max(e.length, t.length); r--;) n[r] = d(e[r], t[r]);
		return n;
	}
	function h(e) {
		let t = e.chart.options.plotOptions;
		return B(f(f(t?.series?.dataLabels, t?.[e.type]?.dataLabels), e.options.dataLabels));
	}
})(Ln ||= {});
var Rn = Ln, { composed: zn } = z, { series: Bn } = Y, Vn;
(function(t) {
	function n(e, t, n, r, i) {
		let { chart: a, options: o } = this, s = a.inverted, c = this.xAxis?.len || a.plotSizeX || 0, l = this.yAxis?.len || a.plotSizeY || 0, u = e.dlBox || e.shapeArgs, f = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? l), p = n.inside ?? !!o.stacking;
		if (u) {
			if (r = d(u), n.overflow !== "allow" || n.crop !== !1 || o.clip !== !1) {
				r.y < 0 && (r.height += r.y, r.y = 0);
				let e = r.y + r.height - l;
				e > 0 && e < r.height - 1 && (r.height -= e);
			}
			s && (r = {
				x: l - r.y - r.height,
				y: c - r.x - r.width,
				width: r.height,
				height: r.width
			}), p || (s ? (r.x += f ? 0 : r.width, r.width = 0) : (r.y += f ? r.height : 0, r.height = 0));
		}
		n.align ??= !s || p ? "center" : f ? "right" : "left", n.verticalAlign ??= s || p ? "middle" : f ? "top" : "bottom", Bn.prototype.alignDataLabel.call(this, e, t, n, r, i), n.inside && e.contrastColor && t.css({ color: e.contrastColor });
	}
	function r(t) {
		Rn.compose(Bn), e(zn, "ColumnDataLabel") && (t.prototype.alignDataLabel = n);
	}
	t.compose = r;
})(Vn ||= {});
var Hn = Vn, Un = class extends be {};
Un.defaultOptions = d(be.defaultOptions, {}), R(Un.prototype, { inverted: !0 }), Y.registerSeriesType("bar", Un);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Scatter/ScatterSeriesDefaults.js
var Wn = {
	lineWidth: 0,
	findNearestPointBy: "xy",
	jitter: {
		x: 0,
		y: 0
	},
	marker: { enabled: !0 },
	tooltip: {
		headerFormat: "<span style=\"color:{point.color}\">●</span> <span style=\"font-size: 0.8em\"> {series.name}</span><br/>",
		pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
	}
}, { column: Gn, line: Kn } = Y.seriesTypes, qn = class extends Kn {
	applyJitter() {
		let e = this, t = this.options.jitter, n = this.points.length;
		function r(e) {
			let t = Math.sin(e) * 1e4;
			return t - Math.floor(t);
		}
		t && this.points.forEach((i, a) => {
			["x", "y"].forEach((o, s) => {
				if (t[o] && !i.isNull) {
					let c = `plot${o.toUpperCase()}`, l = e[`${o}Axis`];
					if (l && !l.logarithmic) {
						let e = t[o] * l.transA * (l.reversed ? -1 : 1), u = (i[c] || 0) - e;
						i[c] = u + ((i[c] || 0) + e - u) * r(a + s * n), o === "x" && (i.clientX = i.plotX);
					}
				}
			});
		});
	}
	drawGraph() {
		this.options.lineWidth ? super.drawGraph() : this.graph &&= this.graph.destroy();
	}
};
qn.defaultOptions = d(Kn.defaultOptions, Wn), R(qn.prototype, {
	allowOutsidePlotInteraction: !0,
	drawTracker: Gn.prototype.drawTracker,
	sorted: !1,
	requireSorting: !1,
	noSharedTooltip: !0,
	trackerGroups: [
		"group",
		"markerGroup",
		"dataLabelsGroup"
	]
}), I(qn, "afterTranslate", function() {
	this.applyJitter();
}), Y.registerSeriesType("scatter", qn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PiePoint.js
var Jn = class extends ge {
	getConnectorPath(e) {
		let t = e.dataLabelPosition, n = e.options || {}, r = n.connectorShape, i = this.connectorShapes[r] || r;
		return t && i.call(this, {
			...t.computed,
			alignment: t.alignment
		}, t.connectorPosition, n) || [];
	}
	getTranslate() {
		return this.sliced && this.slicedTranslation || {
			translateX: 0,
			translateY: 0
		};
	}
	haloPath(e) {
		let t = this.shapeArgs;
		return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(t.x, t.y, t.r + e, t.r + e, {
			innerR: t.r - 1,
			start: t.start,
			end: t.end,
			borderRadius: t.borderRadius
		});
	}
	constructor(e, t, n) {
		super(e, t, n), this.half = 0, this.name ??= e.chart.options.lang.pieSliceName;
		let r = (e) => {
			this.slice(e.type === "select");
		};
		I(this, "select", r), I(this, "unselect", r);
	}
	isValid() {
		return x(this.y) && this.y >= 0;
	}
	setVisible(e, t = !0) {
		e !== this.visible && this.update({ visible: e ?? !this.visible }, t, void 0, !1);
	}
	slice(e, t, n) {
		let r = this.series, i = r.chart;
		te(n, i), t ??= !0, this.sliced = this.options.sliced = e ?? !this.sliced, r.options.data && (r.options.data[r.data.indexOf(this)] = this.options), this.graphic?.animate(this.getTranslate());
	}
};
R(Jn.prototype, { connectorShapes: {
	fixedOffset: function(e, t, n) {
		let r = t.breakAt, i = t.touchingSliceAt, a = n.softConnector ? [
			"C",
			e.x + (e.alignment === "left" ? -5 : 5),
			e.y,
			2 * r.x - i.x,
			2 * r.y - i.y,
			r.x,
			r.y
		] : [
			"L",
			r.x,
			r.y
		];
		return [
			[
				"M",
				e.x,
				e.y
			],
			a,
			[
				"L",
				i.x,
				i.y
			]
		];
	},
	straight: function(e, t) {
		let n = t.touchingSliceAt;
		return [[
			"M",
			e.x,
			e.y
		], [
			"L",
			n.x,
			n.y
		]];
	},
	crookedLine: function(e, t, n) {
		let { angle: r = this.angle || 0, breakAt: i, touchingSliceAt: a } = t, { series: o } = this, [s, c, l] = o.center, u = l / 2, { plotLeft: d, plotWidth: f } = o.chart, p = e.alignment === "left", { x: m, y: h } = e, g = i.x;
		if (n.crookDistance) {
			let e = N(n.crookDistance, 1);
			g = p ? s + u + (f + d - s - u) * (1 - e) : d + (s - u) * e;
		} else g = s + (c - h) * Math.tan(r - Math.PI / 2);
		let _ = [[
			"M",
			m,
			h
		]];
		return (p ? g <= m && g >= i.x : g >= m && g <= i.x) && _.push([
			"L",
			g,
			h
		]), _.push([
			"L",
			i.x,
			i.y
		], [
			"L",
			a.x,
			a.y
		]), _;
	}
} });
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PieSeriesDefaults.js
var Yn = {
	borderRadius: 3,
	center: [null, null],
	clip: !1,
	colorByPoint: !0,
	dataLabels: {
		connectorPadding: 5,
		connectorShape: "crookedLine",
		crookDistance: void 0,
		distance: 30,
		enabled: !0,
		formatter: function() {
			return this.isNull ? void 0 : this.name;
		},
		softConnector: !0,
		x: 0
	},
	fillColor: void 0,
	ignoreHiddenPoint: !0,
	inactiveOtherPoints: !0,
	legendType: "point",
	marker: null,
	size: null,
	showInLegend: !1,
	slicedOffset: 10,
	stickyTracking: !1,
	tooltip: { followPointer: !0 },
	borderColor: "var(--highcharts-background-color)",
	borderWidth: 1,
	lineWidth: void 0,
	states: { hover: { brightness: .1 } }
}, { getStartAndEndRadians: Xn } = we, { noop: Zn } = z, Qn = class extends ye {
	animate(e) {
		let t = this, n = t.points, r = t.startAngleRad;
		e || n.forEach(function(e) {
			let n = e.graphic, i = e.shapeArgs;
			n && i && (n.attr({
				r: e.startR ?? (t.center && t.center[3] / 2),
				start: r,
				end: r
			}), n.animate({
				r: i.r,
				start: i.start,
				end: i.end
			}, t.options.animation));
		});
	}
	drawEmpty() {
		let e = this.startAngleRad, t = this.endAngleRad, n = this.options, r, i;
		this.total === 0 && this.center ? (r = this.center[0], i = this.center[1], this.graph ||= this.chart.renderer.arc(r, i, this.center[1] / 2, 0, e, t).addClass("highcharts-empty-series").add(this.group), this.graph.attr({ d: Ue.arc(r, i, this.center[2] / 2, 0, {
			start: e,
			end: t,
			innerR: this.center[3] / 2
		}) }), this.chart.styledMode || this.graph.attr({
			"stroke-width": n.borderWidth,
			fill: n.fillColor || "none",
			stroke: n.color || "var(--highcharts-neutral-color-20)"
		})) : this.graph &&= this.graph.destroy();
	}
	drawPoints() {
		let e = this.chart.renderer;
		this.points.forEach(function(t) {
			t.graphic && t.hasNewShapeType() && (t.graphic = t.graphic.destroy()), t.graphic || (t.graphic = e[t.shapeType](t.shapeArgs).add(t.series.group), t.delayedRendering = !0);
		});
	}
	generatePoints() {
		super.generatePoints(), this.updateTotals();
	}
	getXPos(e, t, n, r) {
		let i = this.center, a = this.radii ? this.radii[n.index] || 0 : i[2] / 2, o = r.dataLabelPosition?.distance || 0, s = Math.asin(G((e - i[1]) / (a + o), -1, 1));
		return i[0] + (t ? -1 : 1) * (Math.cos(s) * (a + o)) + (o > 0 ? t ? -5 : 5 : 0);
	}
	hasData() {
		return this.points.some((e) => e.visible);
	}
	redrawPoints() {
		let e = this, t = e.chart, n, r, i, a;
		this.drawEmpty(), e.group && !t.styledMode && e.group.shadow(e.options.shadow), e.points.forEach(function(o) {
			let s = {};
			r = o.graphic, !o.isNull && r ? (a = o.shapeArgs, n = o.getTranslate(), t.styledMode || (i = e.pointAttribs(o, o.selected && "select")), o.delayedRendering ? (r.setRadialReference(e.center).attr(a).attr(n), t.styledMode || r.attr(i).attr({ "stroke-linejoin": "round" }), o.delayedRendering = !1) : (r.setRadialReference(e.center), t.styledMode || d(!0, s, i), d(!0, s, a, n), r.animate(s)), r.attr({ visibility: o.visible ? "inherit" : "hidden" }), r.addClass(o.getClassName(), !0)) : r && (o.graphic = r.destroy());
		});
	}
	sortByAngle(e, t) {
		e.sort(function(e, n) {
			return e.angle !== void 0 && (n.angle - e.angle) * t;
		});
	}
	translate(e) {
		p(this, "translate"), this.generatePoints();
		let t = this, n = t.options, r = n.slicedOffset, i = Xn(n.startAngle, n.endAngle), a = t.startAngleRad = i.start, o = (t.endAngleRad = i.end) - a, s = t.points, c = n.ignoreHiddenPoint, l = s.length, u, d, f, m, h, g, _, v = 0;
		for (e || (t.center = e = t.getCenter()), g = 0; g < l; g++) {
			_ = s[g], u = a + v * o, _.isValid() && (!c || _.visible) && (v += _.percentage / 100), d = a + v * o;
			let t = {
				x: e[0],
				y: e[1],
				r: e[2] / 2,
				innerR: e[3] / 2,
				start: u,
				end: d
			};
			_.shapeType = "arc", _.shapeArgs = t, f = (d + u) / 2, f > 1.5 * Math.PI ? f -= 2 * Math.PI : f < -Math.PI / 2 && (f += 2 * Math.PI), _.slicedTranslation = {
				translateX: Math.round(Math.cos(f) * r),
				translateY: Math.round(Math.sin(f) * r)
			}, m = Math.cos(f) * e[2] / 2, h = Math.sin(f) * e[2] / 2, _.tooltipPos = [e[0] + m * .7, e[1] + h * .7], _.half = +(f < -Math.PI / 2 || f > Math.PI / 2), _.angle = f;
		}
		p(t, "afterTranslate");
	}
	updateTotals() {
		let e = this.points, t = e.length, n = this.options.ignoreHiddenPoint, r, i, a = 0;
		for (r = 0; r < t; r++) i = e[r], i.isValid() && (!n || i.visible) && (a += i.y);
		for (this.total = a, r = 0; r < t; r++) i = e[r], i.percentage = a > 0 && (i.visible || !n) ? i.y / a * 100 : 0, i.total = a;
	}
};
Qn.defaultOptions = d(ye.defaultOptions, Yn), R(Qn.prototype, {
	axisTypes: [],
	directTouch: !0,
	drawGraph: void 0,
	drawTracker: be.prototype.drawTracker,
	getCenter: we.getCenter,
	getSymbol: Zn,
	invertible: !1,
	isCartesian: !1,
	noSharedTooltip: !0,
	pointAttribs: be.prototype.pointAttribs,
	pointClass: Jn,
	requireSorting: !1,
	searchPoint: Zn,
	trackerGroups: ["group", "dataLabelsGroup"]
}), Y.registerSeriesType("pie", Qn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PieDataLabel.js
var { composed: $n, noop: er } = z, { distribute: tr } = Oe, { series: nr } = Y, rr;
(function(t) {
	let n = {
		radialDistributionY: function(e, t) {
			return (t.dataLabelPosition?.top || 0) + e.distributeBox.pos;
		},
		radialDistributionX: function(e, t, n, r, i) {
			let a = i.dataLabelPosition;
			return e.getXPos(n < (a?.top || 0) + 2 || n > (a?.bottom || 0) - 2 ? r : n, t.half, t, i);
		},
		justify: function(e, t, n, r) {
			return r[0] + (e.half ? -1 : 1) * (n + (t.dataLabelPosition?.distance || 0));
		},
		alignToPlotEdges: function(e, t, n, r) {
			let i = e.getBBox().width;
			return t ? i + r : n - i - r;
		},
		alignToConnectors: function(e, t, n, r) {
			let i = 0, a;
			return e.forEach(function(e) {
				a = e.dataLabel.getBBox().width, a > i && (i = a);
			}), t ? i + r : n - i - r;
		}
	};
	function r(t) {
		if (Rn.compose(nr), e($n, "PieDataLabel")) {
			let e = t.prototype;
			e.dataLabelPositioners = n, e.alignDataLabel = er, e.drawDataLabels = a, e.getDataLabelPosition = i, e.placeDataLabels = o, e.verifyDataLabelOverflow = s;
		}
	}
	t.compose = r;
	function i(e, t) {
		let n = Math.PI / 2, { start: r = 0, end: i = 0 } = e.shapeArgs || {}, a = e.angle || 0;
		t > 0 && r < n && i > n && a > n / 2 && a < n * 1.5 && (a = a <= n ? Math.max(n / 2, (r + n) / 2) : Math.min(n * 1.5, (n + i) / 2));
		let { center: o, options: s } = this, c = o[2] / 2, l = Math.cos(a), u = Math.sin(a), d = o[0] + l * c, f = o[1] + u * c, p = Math.min((s.slicedOffset || 0) + (s.borderWidth || 0), t / 5);
		return {
			natural: {
				x: d + l * t,
				y: f + u * t
			},
			computed: {},
			alignment: t < 0 ? "center" : e.half ? "right" : "left",
			connectorPosition: {
				angle: a,
				breakAt: {
					x: d + l * p,
					y: f + u * p
				},
				touchingSliceAt: {
					x: d,
					y: f
				}
			},
			distance: t
		};
	}
	function a() {
		let e = this, t = e.points, n = e.chart, r = n.plotWidth, i = n.plotHeight, a = n.plotLeft, o = Math.round(n.chartWidth / 3), s = e.center, c = s[2] / 2, l = s[1], u = [[], []], d = [
			0,
			0,
			0,
			0
		], f = e.dataLabelPositioners, p, m, h, g = 0;
		e.visible && e.hasDataLabels?.() && (t.forEach((e) => {
			(e.dataLabels || []).forEach((e) => {
				e.shortened &&= (e.attr({ width: "auto" }).css({
					width: "auto",
					textOverflow: "clip"
				}), !1);
			});
		}), nr.prototype.drawDataLabels.apply(e), t.forEach((e) => {
			(e.dataLabels || []).forEach((t, n) => {
				let r = s[2] / 2, i = t.options, a = N(i?.distance || 0, r);
				n === 0 && u[e.half].push(e), W(i?.style?.width) || t.getBBox().width > o && (t.css({ width: Math.round(o * .7) + "px" }), t.shortened = !0), t.dataLabelPosition = this.getDataLabelPosition(e, a), g = Math.max(g, a);
			});
		}), u.forEach((t, o) => {
			let u = t.length, p = [], _, v, y = 0, b;
			u && (e.sortByAngle(t, o - .5), g > 0 && (_ = Math.max(0, l - c - g), v = Math.min(l + c + g, n.plotHeight), t.forEach((e) => {
				(e.dataLabels || []).forEach((t) => {
					let r = t.dataLabelPosition;
					r && r.distance > 0 && (r.top = Math.max(0, l - c - r.distance), r.bottom = Math.min(l + c + r.distance, n.plotHeight), y = t.getBBox().height || 21, t.lineHeight = n.renderer.fontMetrics(t.text || t).h + 2 * t.padding, e.distributeBox = {
						target: (t.dataLabelPosition?.natural.y || 0) - r.top + t.lineHeight / 2,
						size: y,
						rank: e.y
					}, p.push(e.distributeBox));
				});
			}), b = v + y - _, tr(p, b, b / 5)), t.forEach((n) => {
				(n.dataLabels || []).forEach((l) => {
					let u = l.options || {}, g = n.distributeBox, _ = l.dataLabelPosition, v = _?.natural.y || 0, y = u.connectorPadding || 0, b = l.lineHeight || 21, x = (b - l.getBBox().height) / 2, S = 0, C = v, w = "inherit";
					if (_) {
						if (p && W(g) && _.distance > 0 && (g.pos === void 0 ? w = "hidden" : (h = g.size, C = f.radialDistributionY(n, l))), u.justify) S = f.justify(n, l, c, s);
						else switch (u.alignTo) {
							case "connectors":
								S = f.alignToConnectors(t, o, r, a);
								break;
							case "plotEdges":
								S = f.alignToPlotEdges(l, o, r, a);
								break;
							default: S = f.radialDistributionX(e, n, C - x, v, l);
						}
						if (_.attribs = {
							visibility: w,
							align: _.alignment
						}, _.posAttribs = {
							x: S + (u.x || 0) + ({
								left: y,
								right: -y
							}[_.alignment] || 0),
							y: C + (u.y || 0) - b / 2
						}, _.computed.x = S, _.computed.y = C - x, u.crop ?? !0) {
							m = l.getBBox().width;
							let e;
							S - m < y && o === 1 ? (e = Math.round(m - S + y), d[3] = Math.max(e, d[3])) : S + m > r - y && o === 0 && (e = Math.round(S + m - r + y), d[1] = Math.max(e, d[1])), C - h / 2 < 0 ? d[0] = Math.max(Math.round(-C + h / 2), d[0]) : C + h / 2 > i && (d[2] = Math.max(Math.round(C + h / 2 - i), d[2])), _.sideOverflow = e;
						}
					}
				});
			}));
		}), (F(d) === 0 || this.verifyDataLabelOverflow(d)) && (this.placeDataLabels(), this.points.forEach((t) => {
			t.dataLabels?.forEach((r, i) => {
				let { connectorColor: a, connectorWidth: o = 1 } = r.options || {}, s = r.dataLabelPosition;
				if (x(o)) {
					let c;
					p = r.connector, s && s.distance > 0 ? (c = !p, p || (r.connector = p = n.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(e.dataLabelsGroups?.[i])), n.styledMode || p.attr({
						"stroke-width": o,
						stroke: a || t.color || "var(--highcharts-neutral-color-60)"
					}), p[c ? "attr" : "animate"]({ d: t.getConnectorPath(r) }), p.attr({ visibility: s.attribs?.visibility })) : p && (r.connector = p.destroy());
				}
			});
		})));
	}
	function o() {
		this.points.forEach((e) => {
			(e.dataLabels || []).forEach((e) => {
				let t = e.dataLabelPosition;
				t ? (t.sideOverflow && (e.css({
					width: Math.max(e.getBBox().width - t.sideOverflow, 0) + "px",
					textOverflow: e.options?.style?.textOverflow || "ellipsis"
				}), e.shortened = !0), e.attr(t.attribs), e[e.moved ? "animate" : "attr"](t.posAttribs), e.moved = !0) : e && e.attr({ y: -9999 });
			}), delete e.distributeBox;
		}, this);
	}
	function s(e) {
		let t = this.center, n = this.options, r = n.center, i = n.minSize || 80, a = i, o = n.size !== null;
		return o || (r[0] === null ? (a = Math.max(t[2] - e[1] - e[3], i), t[0] += (e[3] - e[1]) / 2) : a = Math.max(t[2] - Math.max(e[1], e[3]), i), r[1] === null ? (a = G(a, i, t[2] - e[0] - e[2]), t[1] += (e[0] - e[2]) / 2) : a = G(a, i, t[2] - Math.max(e[0], e[2])), a < t[2] ? (t[2] = a, t[3] = Math.min(n.thickness ? Math.max(0, a - n.thickness * 2) : Math.max(0, N(n.innerSize || 0, a)), a), this.translate(t), this.drawDataLabels && this.drawDataLabels()) : o = !0), o;
	}
})(rr ||= {});
var ir = rr, ar;
(function(e) {
	function t(e) {
		let t = e.reduce((e, t) => (e.x += t.x, e.y += t.y, e), {
			x: 0,
			y: 0
		});
		return {
			x: t.x / e.length,
			y: t.y / e.length
		};
	}
	e.getCenterOfPoints = t;
	function n(e, t) {
		return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
	}
	e.getDistanceBetweenPoints = n;
	function r(e, t) {
		return Math.atan2(t.x - e.x, t.y - e.y);
	}
	e.getAngleBetweenPoints = r;
	function i({ x: e, y: t }, n) {
		let r = n.length, i, a, o = !1;
		for (i = 0, a = r - 1; i < r; a = i++) {
			let [r, s] = n[i], [c, l] = n[a];
			s > t != l > t && e < (c - r) * (t - s) / (l - s) + r && (o = !o);
		}
		return o;
	}
	e.pointInPolygon = i;
})(ar ||= {});
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/OverlappingDataLabels.js
var { pointInPolygon: or } = ar;
function sr(e) {
	let t = this, n = e.length, r = (e, t) => !(t.x >= e.x + e.width || t.x + t.width <= e.x || t.y >= e.y + e.height || t.y + t.height <= e.y), i = (e, t) => {
		for (let n of e) if (or({
			x: n[0],
			y: n[1]
		}, t)) return !0;
		return !1;
	};
	function a(e) {
		if (e && (!e.alignAttr || e.placed)) {
			let t = e.box ? 0 : e.padding || 0, n = e.dataLabelPosition?.posAttribs || e.alignAttr || {
				x: e.attr("x"),
				y: e.attr("y")
			}, { height: r, polygon: i, width: a } = e.getBBox(), o = m(e.alignValue) * a;
			return e.width = a, e.height = r, {
				x: n.x + (e.parentGroup?.translateX || 0) + t - o,
				y: n.y + (e.parentGroup?.translateY || 0) + t,
				width: a - 2 * t,
				height: r - 2 * t,
				polygon: i
			};
		}
	}
	let o, s, c, l, u, d = !1;
	for (let t = 0; t < n; t++) o = e[t], o && (o.oldOpacity = o.opacity, o.newOpacity = 1, o.absoluteBox = a(o));
	e.sort((e, t) => (t?.labelrank || 0) - (e?.labelrank || 0));
	for (let t = 0; t < n; ++t) {
		s = e[t], l = s && s.absoluteBox;
		let a = l?.polygon;
		for (let o = t + 1; o < n; ++o) {
			c = e[o], u = c && c.absoluteBox;
			let t = !1;
			if (l && u && s !== c && s?.newOpacity !== 0 && c?.newOpacity !== 0 && s?.visibility !== "hidden" && c?.visibility !== "hidden") {
				let e = u.polygon;
				if (a && e && a !== e ? i(a, e) && (t = !0) : r(l, u) && (t = !0), t) {
					let e = s?.labelrank < c?.labelrank ? s : c, t = e?.text;
					e && (e.newOpacity = 0), t?.element.querySelector("textPath") && t.hide();
				}
			}
		}
	}
	for (let n of e) n && lr(n, t) && (d = !0);
	d && p(t, "afterHideAllOverlappingLabels");
}
function cr(e) {
	let t = e.prototype;
	t.hideOverlappingLabels || (t.hideOverlappingLabels = sr, I(e, "render", ur));
}
function lr(e, t) {
	let n = !1;
	if (e) {
		let r = e.newOpacity, i = e.hasClass("highcharts-data-label");
		i || O(e, "opacity"), e.oldOpacity !== r && (i ? (e[r ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), n = !0, e[e.isOld || e.placed ? "animate" : "attr"]({ opacity: r }, void 0, () => {
			t.styledMode || e.css({ pointerEvents: r ? "auto" : "none" });
		}), p(t, "afterHideOverlappingLabel")) : e[e.placed ? "animate" : "attr"]({ opacity: r })), e.isOld = !0;
	}
	return n;
}
function ur() {
	let e = this, t = (t, r) => {
		r ? (t.oldOpacity = t.opacity, t.newOpacity = 1, lr(t, e)) : n.push(t);
	}, n = [];
	for (let t of e.labelCollectors || []) n = n.concat(t());
	for (let { options: n, stacking: r } of e.yAxis || []) u(r?.stacks, (e) => {
		u(e, ({ label: e }) => {
			e && t(e, n.stackLabels?.allowOverlap);
		});
	});
	for (let n of e.series || []) if (n.visible && n.hasDataLabels?.()) {
		let e = (e) => {
			for (let r of e) r.visible && (r.dataLabels || []).forEach((e) => {
				let i = e.options || {};
				e.labelrank = i.labelrank ?? r.labelrank ?? r.shapeArgs?.height, t(e, i.allowOverlap ?? (n.is("pie") && Number(i.distance) > 0));
			});
		};
		e(n.nodes || []), e(n.points);
	}
	this.hideOverlappingLabels(n);
}
//#endregion
//#region node_modules/highcharts/es-modules/Core/Responsive.js
var dr;
(function(e) {
	function t(e) {
		let t = e.prototype;
		return t.matchResponsiveRule || R(t, {
			matchResponsiveRule: n,
			setResponsive: r
		}), e;
	}
	e.compose = t;
	function n(e, t) {
		let n = e.condition;
		(n.callback || function() {
			return this.chartWidth <= (n.maxWidth ?? Number.MAX_VALUE) && this.chartHeight <= (n.maxHeight ?? Number.MAX_VALUE) && this.chartWidth >= (n.minWidth ?? 0) && this.chartHeight >= (n.minHeight ?? 0);
		}).call(this, this) && t.push(e._id);
	}
	function r(e, t) {
		let n = this.options.responsive, r = this.currentResponsive, i = [], o;
		!t && n && n.rules && n.rules.forEach((e) => {
			e._id === void 0 && (e._id = le()), this.matchResponsiveRule(e, i);
		}, this);
		let s = d(...i.map((e) => L(n?.rules || [], (t) => t._id === e)).map((e) => e?.chartOptions));
		s.isResponsiveOptions = !0, i = i.toString() || void 0;
		let c = r?.ruleIds;
		i !== c && (r && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(r.undoOptions, e, !0), this.updatingResponsive = !1), i ? (o = a(s, this.options, !0, this.collectionsWithUpdate), o.isResponsiveOptions = !0, this.currentResponsive = {
			ruleIds: i,
			mergedOptions: s,
			undoOptions: o
		}, this.updatingResponsive || this.update(s, e, !0)) : this.currentResponsive = void 0);
	}
})(dr ||= {});
var fr = dr, X = z;
X.AST = q, X.Axis = Ct, X.Chart = un, X.Color = fe, X.DataLabel = Rn, X.DataTable = xe, X.DataTableCore = xe, X.Fx = se, X.HTMLElement = ut, X.Legend = en, X.LegendSymbol = ve, X.PlotLineOrBand = Mt, X.Point = ge, X.Pointer = qt, X.Series = ye, X.SeriesRegistry = Y, X.StackItem = Se, X.SVGElement = _e, X.SVGRenderer = st, X.Templating = J, X.Tick = ht, X.Time = class extends re {
	constructor(e, t) {
		let n = j.getOptions();
		super(e ?? n.time, t ?? n.lang);
	}
}, X.Tooltip = Vt, X.addEvent = I, X.animObject = me, X.animate = ae, X.arrayMax = F, X.arrayMin = D, X.attr = U, X.chart = un.chart, X.clamp = G, X.color = fe.parse, X.correctFloat = A, X.createElement = he, X.css = r, X.crisp = y, X.dateFormat = J.dateFormat, X.defaultOptions = j.defaultOptions, X.defined = W, X.destroyObjectProperties = b, X.diffObjects = a, X.discardElement = i, X.distribute = Oe.distribute, X.erase = h, X.error = H, X.extend = R, X.extendClass = t, X.find = L, X.fireEvent = p, X.format = J.format, X.getAlignFactor = m, X.getClosestDistance = g, X.getDeferredAnimation = de, X.getMagnitude = o, X.getNestedProperty = l, X.getOptions = j.getOptions, X.getStyle = f, X.insertItem = ee, X.isArray = K, X.isClass = n, X.isDOMElement = S, X.isFunction = c, X.isNumber = x, X.isObject = C, X.isString = s, X.internalClearTimeout = v, X.merge = d, X.normalizeTickInterval = ue, X.numberFormat = J.numberFormat, X.objectEach = u, X.offset = T, X.pad = E, X.pick = _, X.pushUnique = e, X.pInt = w, X.relativeLength = N, X.removeEvent = V, X.replaceNested = oe, X.seriesType = Y.seriesType, X.setAnimation = te, X.setOptions = j.setOptions, X.splat = B, X.stableSort = ne, X.stop = O, X.syncTimeout = k, X.time = j.defaultTime, X.ucfirst = ce, X.timers = se.timers, X.timeUnits = P, X.uniqueKey = le, X.useSerialIds = ie, X.wrap = pe, Te(X.Series, X.SVGElement, X.SVGRenderer), Hn.compose(X.Series.types.column), Rn.compose(X.Series), Et.compose(X.Axis), ut.compose(X.SVGRenderer), en.compose(X.Chart), kt.compose(X.Axis), cr(X.Chart), ir.compose(X.Series.types.pie), Mt.compose(X.Chart, X.Axis), qt.compose(X.Chart), fr.compose(X.Chart), mn.compose(X.Axis, X.Chart, X.Series), En.compose(X.Axis, X.Chart, X.Series), Vt.compose(X.Pointer);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Themes/Adaptive.js
var { setOptions: pr } = j, mr = "\n        /* Colors for data series and points */\n        --highcharts-color-0: #2caffe;\n        --highcharts-color-1: #544fc5;\n        --highcharts-color-2: #00e272;\n        --highcharts-color-3: #fe6a35;\n        --highcharts-color-4: #6b8abc;\n        --highcharts-color-5: #d568fb;\n        --highcharts-color-6: #2ee0ca;\n        --highcharts-color-7: #fa4b42;\n        --highcharts-color-8: #feb56a;\n        --highcharts-color-9: #91e8e1;\n\n    /* Chart background, point stroke for markers and columns etc */\n    --highcharts-background-color: #ffffff;\n\n    /*\n    Neutral colors, grayscale by default. The default colors are defined by\n    mixing the background-color with neutral, with a weight corresponding to\n    the number in the name.\n\n    https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n\n    /* Strong text. */\n    --highcharts-neutral-color-100: #000000;\n\n    /* Main text, axis labels and some strokes. */\n    --highcharts-neutral-color-80: #333333;\n\n    /* Axis title, connector fallback. */\n    --highcharts-neutral-color-60: #666666;\n\n    /* Credits text, export menu stroke. */\n    --highcharts-neutral-color-40: #999999;\n\n    /* Disabled texts, button strokes, crosshair etc. */\n    --highcharts-neutral-color-20: #cccccc;\n\n    /* Grid lines etc. */\n    --highcharts-neutral-color-10: #e6e6e6;\n\n    /* Minor grid lines etc. */\n    --highcharts-neutral-color-5: #f2f2f2;\n\n    /* Tooltip background, button fills, map null points. */\n    --highcharts-neutral-color-3: #f7f7f7;\n\n    /*\n    Highlights, shades of blue by default\n    */\n\n    /* Drilldown clickable labels, color axis max color. */\n    --highcharts-highlight-color-100: #0022ff;\n\n    /* Selection marker, menu hover, button hover, chart border, navigator\n    series. */\n    --highcharts-highlight-color-80: #334eff;\n\n    /* Navigator mask fill. */\n    --highcharts-highlight-color-60: #667aff;\n\n    /* Ticks and axis line. */\n    --highcharts-highlight-color-20: #ccd3ff;\n\n    /* Pressed button, color axis min color. */\n    --highcharts-highlight-color-10: #e6e9ff;\n\n    /* Indicators */\n    --highcharts-positive-color: #06b535;\n    --highcharts-negative-color: #f21313;\n\n    /* Transparent colors for annotations */\n    --highcharts-annotation-color-0: rgba(130, 170, 255, 0.4);\n    --highcharts-annotation-color-1: rgba(139, 191, 216, 0.4);\n    --highcharts-annotation-color-2: rgba(150, 216, 192, 0.4);\n    --highcharts-annotation-color-3: rgba(156, 229, 161, 0.4);\n    --highcharts-annotation-color-4: rgba(162, 241, 130, 0.4);\n    --highcharts-annotation-color-5: rgba(169, 255, 101, 0.4);\n", hr = "\n    /* Colors for data series and points */\n    --highcharts-color-1: #00e272;\n    --highcharts-color-2: #efdf00;\n\n    /* UI colors */\n    --highcharts-background-color: #141414;\n\n    /*\n        Neutral color variations\n        https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n    --highcharts-neutral-color-100: #ffffff;\n    --highcharts-neutral-color-80: #d0d0d0;\n    --highcharts-neutral-color-60: #a1a1a1;\n    --highcharts-neutral-color-40: #727272;\n    --highcharts-neutral-color-20: #434343;\n    --highcharts-neutral-color-10: #2c2c2c;\n    --highcharts-neutral-color-5: #202020;\n    --highcharts-neutral-color-3: #1b1b1b;\n\n    /* Highlight color variations */\n    --highcharts-highlight-color-100: #2caffe;\n    --highcharts-highlight-color-80: #2790cf;\n    --highcharts-highlight-color-60: #2271a0;\n    --highcharts-highlight-color-20: #193343;\n    --highcharts-highlight-color-10: #16242b;\n", gr = `
:root,
.highcharts-light {
    ${mr}
}

@media (prefers-color-scheme: dark) {
    :root {
        ${hr}
    }
}

.highcharts-dark {
    ${hr}
}

.highcharts-container {
    color-scheme: light dark;
}

.highcharts-light .highcharts-container {
    color-scheme: light;
}

.highcharts-dark .highcharts-container {
    color-scheme: dark;
}
`, _r;
(function(e) {
	e.options = {
		colors: [
			"var(--highcharts-color-0)",
			"var(--highcharts-color-1)",
			"var(--highcharts-color-2)",
			"var(--highcharts-color-3)",
			"var(--highcharts-color-4)",
			"var(--highcharts-color-5)",
			"var(--highcharts-color-6)",
			"var(--highcharts-color-7)",
			"var(--highcharts-color-8)",
			"var(--highcharts-color-9)"
		],
		global: { buttonTheme: {
			fill: "var(--highcharts-neutral-color-3)",
			stroke: "var(--highcharts-neutral-color-20)",
			style: { color: "var(--highcharts-neutral-color-80)" },
			states: {
				hover: { fill: "var(--highcharts-neutral-color-10)" },
				select: {
					fill: "var(--highcharts-highlight-color-10)",
					style: { color: "var(--highcharts-neutral-color-100)" }
				},
				disabled: { style: { color: "var(--highcharts-neutral-color-20)" } }
			}
		} },
		chart: {
			borderColor: "var(--highcharts-highlight-color-80)",
			backgroundColor: "var(--highcharts-background-color)",
			plotBorderColor: "var(--highcharts-neutral-color-20)"
		},
		title: { style: { color: "var(--highcharts-neutral-color-80)" } },
		subtitle: { style: { color: "var(--highcharts-neutral-color-60)" } },
		caption: { style: { color: "var(--highcharts-neutral-color-60)" } },
		plotOptions: {
			line: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			area: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			spline: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			areaspline: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			column: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			bar: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			scatter: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			pie: { borderColor: "var(--highcharts-background-color)" },
			hlc: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			ohlc: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			candlestick: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)",
				lineColor: "var(--highcharts-neutral-color-100)",
				upColor: "var(--highcharts-background-color)"
			},
			flags: {
				states: {
					hover: {
						lineColor: "var(--highcharts-neutral-color-100)",
						fillColor: "var(--highcharts-highlight-color-20)"
					},
					select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					}
				},
				borderColor: "var(--highcharts-background-color)",
				fillColor: "var(--highcharts-background-color)",
				style: { color: "var(--highcharts-neutral-color-100)" }
			},
			arearange: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			areasplinerange: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			boxplot: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)",
				fillColor: "var(--highcharts-background-color)"
			},
			bubble: { marker: { states: { select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)"
			} } } },
			columnrange: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			columnpyramid: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			errorbar: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)",
				fillColor: "var(--highcharts-background-color)",
				color: "var(--highcharts-neutral-color-100)"
			},
			gauge: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" },
				dial: {
					backgroundColor: "var(--highcharts-neutral-color-100)",
					borderColor: "var(--highcharts-neutral-color-20)"
				},
				pivot: {
					borderColor: "var(--highcharts-neutral-color-100)",
					backgroundColor: "var(--highcharts-background-color)"
				}
			},
			packedbubble: { marker: { states: { select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)"
			} } } },
			polygon: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			waterfall: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-neutral-color-80)",
				lineColor: "var(--highcharts-neutral-color-80)"
			},
			scatter3d: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			map: {
				states: {
					hover: { borderColor: "var(--highcharts-neutral-color-60)" },
					select: { color: "var(--highcharts-neutral-color-20)" }
				},
				nullColor: "var(--highcharts-neutral-color-3)",
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			mapline: {
				states: {
					hover: { borderColor: "var(--highcharts-neutral-color-60)" },
					select: { color: "var(--highcharts-neutral-color-20)" }
				},
				nullColor: "var(--highcharts-neutral-color-3)",
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			mappoint: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: { style: { color: "var(--highcharts-neutral-color-100)" } }
			},
			mapbubble: { marker: { states: { select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)"
			} } } },
			heatmap: {
				marker: { states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} } },
				nullColor: "var(--highcharts-neutral-color-3)"
			},
			xrange: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			gantt: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			sankey: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			dependencywheel: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			funnel: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			pyramid: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			histogram: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			bellcurve: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			item: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				borderColor: "var(--highcharts-background-color)"
			},
			organization: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-neutral-color-60)",
				link: { color: "var(--highcharts-neutral-color-60)" }
			},
			solidgauge: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" },
				dial: {
					backgroundColor: "var(--highcharts-neutral-color-100)",
					borderColor: "var(--highcharts-neutral-color-20)"
				},
				pivot: {
					borderColor: "var(--highcharts-neutral-color-20)",
					backgroundColor: "var(--highcharts-neutral-color-100)"
				}
			},
			timeline: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: {
					backgroundColor: "var(--highcharts-background-color)",
					borderColor: "var(--highcharts-neutral-color-40)",
					color: "var(--highcharts-neutral-color-80)"
				}
			},
			treemap: {
				states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			sunburst: {
				states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			treegraph: {
				states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
				borderColor: "var(--highcharts-neutral-color-10)",
				link: { color: "var(--highcharts-neutral-color-60)" }
			}
		},
		legend: {
			borderColor: "var(--highcharts-neutral-color-40)",
			navigation: {
				activeColor: "var(--highcharts-highlight-color-100)",
				inactiveColor: "var(--highcharts-neutral-color-20)"
			},
			itemStyle: { color: "var(--highcharts-neutral-color-80)" },
			itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" },
			itemHiddenStyle: { color: "var(--highcharts-neutral-color-60)" },
			title: { style: { color: "var(--highcharts-neutral-color-80)" } },
			bubbleLegend: { labels: { style: { color: "var(--highcharts-neutral-color-100)" } } }
		},
		loading: { style: { backgroundColor: "var(--highcharts-background-color)" } },
		tooltip: {
			backgroundColor: "var(--highcharts-background-color)",
			style: { color: "var(--highcharts-neutral-color-80)" }
		},
		credits: { style: { color: "var(--highcharts-neutral-color-40)" } },
		xAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-neutral-color-10)",
			tickColor: "var(--highcharts-neutral-color-80)",
			grid: { borderColor: "var(--highcharts-neutral-color-20)" }
		},
		yAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-neutral-color-10)",
			tickColor: "var(--highcharts-neutral-color-80)",
			stackLabels: { style: { color: "var(--highcharts-neutral-color-100)" } },
			grid: { borderColor: "var(--highcharts-neutral-color-20)" }
		},
		navigator: {
			handles: {
				backgroundColor: "var(--highcharts-neutral-color-5)",
				borderColor: "var(--highcharts-neutral-color-40)"
			},
			outlineColor: "var(--highcharts-neutral-color-40)",
			xAxis: {
				gridLineColor: "var(--highcharts-neutral-color-10)",
				labels: { style: { color: "var(--highcharts-neutral-color-100)" } }
			}
		},
		rangeSelector: {
			inputStyle: { color: "var(--highcharts-highlight-color-80)" },
			labelStyle: { color: "var(--highcharts-neutral-color-60)" }
		},
		scrollbar: {
			barBackgroundColor: "var(--highcharts-neutral-color-20)",
			barBorderColor: "var(--highcharts-neutral-color-20)",
			buttonArrowColor: "var(--highcharts-neutral-color-80)",
			buttonBackgroundColor: "var(--highcharts-neutral-color-10)",
			buttonBorderColor: "var(--highcharts-neutral-color-20)",
			trackBorderColor: "var(--highcharts-neutral-color-20)"
		},
		pane: { background: {
			borderColor: "var(--highcharts-neutral-color-20)",
			backgroundColor: "var(--highcharts-neutral-color-5)"
		} },
		zAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-neutral-color-10)",
			tickColor: "var(--highcharts-neutral-color-80)"
		},
		colorAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-background-color)",
			tickColor: "var(--highcharts-neutral-color-80)",
			marker: { color: "var(--highcharts-neutral-color-40)" },
			minColor: "var(--highcharts-highlight-color-10)",
			maxColor: "var(--highcharts-highlight-color-100)"
		},
		mapNavigation: { buttonOptions: {
			style: { color: "var(--highcharts-neutral-color-60)" },
			theme: {
				fill: "var(--highcharts-background-color)",
				stroke: "var(--highcharts-neutral-color-10)"
			}
		} },
		accessibility: { keyboardNavigation: { focusBorder: { style: { color: "var(--highcharts-highlight-color-80)" } } } },
		drilldown: {
			activeAxisLabelStyle: { color: "var(--highcharts-highlight-color-100)" },
			activeDataLabelStyle: { color: "var(--highcharts-highlight-color-100)" }
		},
		annotations: {
			labelOptions: {
				borderColor: "var(--highcharts-neutral-color-100)",
				backgroundColor: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)"
			},
			controlPointOptions: { style: {
				fill: "var(--highcharts-background-color)",
				stroke: "var(--highcharts-neutral-color-100)"
			} },
			types: {
				elliottWave: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } },
				fibonacci: {
					typeOptions: { lineColor: "var(--highcharts-neutral-color-40)" },
					labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } }
				},
				fibonacciTimeZones: { typeOptions: { line: { stroke: "var(--highcharts-neutral-color-80)" } } },
				verticalLine: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } },
				measure: { typeOptions: { label: { style: { color: "var(--highcharts-neutral-color-60)" } } } }
			},
			shapeOptions: {
				fill: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)",
				stroke: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)"
			}
		},
		navigation: {
			buttonOptions: {
				symbolFill: "var(--highcharts-neutral-color-60)",
				symbolStroke: "var(--highcharts-neutral-color-60)",
				theme: { fill: "var(--highcharts-background-color)" }
			},
			menuStyle: { background: "var(--highcharts-background-color)" },
			menuItemStyle: { color: "var(--highcharts-neutral-color-80)" },
			menuItemHoverStyle: { background: "var(--highcharts-neutral-color-5)" }
		}
	};
	function t() {
		let t = document.createElement("style");
		t.nonce = "highcharts", t.innerText = gr, t.id = "highcharts-adaptive-theme", document.getElementsByTagName("head")[0].appendChild(t), pr(e.options), I(un, "afterGetContainer", function() {
			let e = this.container.getRootNode().host?.shadowRoot;
			if (e && !e.getElementById("highcharts-adaptive-theme")) {
				let n = t.cloneNode(!0);
				e.appendChild(n);
			}
		});
	}
	e.apply = t;
})(_r ||= {});
var vr = _r;
z.theme = vr.options, vr.apply();
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Utils/HTMLUtilities.js
var { doc: yr, win: br } = z, xr = br.EventTarget && new br.EventTarget() || "none";
function Sr(e, t) {
	e.classList ? e.classList.add(t) : e.className.indexOf(t) < 0 && (e.className += " " + t);
}
function Cr(e, t) {
	e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp(t, "g"), "");
}
function wr(e) {
	if (typeof br.MouseEvent == "function") return new br.MouseEvent(e.type, e);
	if (yr?.createEvent) {
		let t = yr.createEvent("MouseEvent");
		if (t.initMouseEvent) return t.initMouseEvent(e.type, e.bubbles, e.cancelable, e.view || br, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), t;
	}
	return kr(e.type);
}
function Tr(e) {
	let t = (e) => {
		let t = [];
		for (let n = 0; n < e.length; ++n) {
			let r = e.item(n);
			r && t.push(r);
		}
		return t;
	};
	if (typeof br.TouchEvent == "function") {
		let n = new br.TouchEvent(e.type, {
			touches: t(e.touches),
			targetTouches: t(e.targetTouches),
			changedTouches: t(e.changedTouches),
			ctrlKey: e.ctrlKey,
			shiftKey: e.shiftKey,
			altKey: e.altKey,
			metaKey: e.metaKey,
			bubbles: e.bubbles,
			cancelable: e.cancelable,
			composed: e.composed,
			detail: e.detail,
			view: e.view
		});
		return e.defaultPrevented && n.preventDefault(), n;
	}
	let n = wr(e);
	return n.touches = e.touches, n.changedTouches = e.changedTouches, n.targetTouches = e.targetTouches, n;
}
function Er(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function Dr(e) {
	let t = e?.getRootNode();
	return t?.host ? t : void 0;
}
function Or(e, t) {
	return (Dr(t) || yr).getElementById(e);
}
function kr(e, t, n) {
	let r = t || {
		x: 0,
		y: 0
	};
	if (typeof br.MouseEvent == "function") return new br.MouseEvent(e, {
		bubbles: !0,
		cancelable: !0,
		composed: !0,
		button: 0,
		buttons: 1,
		relatedTarget: n || xr,
		view: br,
		detail: +(e === "click"),
		screenX: r.x,
		screenY: r.y,
		clientX: r.x,
		clientY: r.y
	});
	if (yr?.createEvent) {
		let t = yr.createEvent("MouseEvent");
		if (t.initMouseEvent) return t.initMouseEvent(e, !0, !0, br, +(e === "click"), r.x, r.y, r.x, r.y, !1, !1, !1, !1, 0, null), t;
	}
	return { type: e };
}
function Ar(e) {
	let t = (e) => {
		let t = parseInt(e.slice(1), 10);
		return "h" + Math.min(6, t + 1);
	}, n = (e) => /^H[1-6]$/i.test(e), r = (e) => {
		let t = e;
		for (; t = t.previousSibling;) {
			let e = t.tagName || "";
			if (n(e)) return e;
		}
		return "";
	}, i = (e) => {
		let a = r(e);
		if (a) return t(a);
		let o = e.parentElement;
		if (!o) return "h6";
		let s = o.tagName;
		return n(s) ? t(s) : i(o);
	};
	return i(e);
}
function jr(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function Mr(e) {
	for (; e.lastChild;) e.removeChild(e.lastChild);
}
function Nr(e) {
	let t = e.childNodes.length;
	for (; t--;) e.appendChild(e.childNodes[t]);
}
function Pr(e, t = !1) {
	return typeof e == "string" ? t ? e.replace(/<\/?[^>]+(>|$)/g, "") : e.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e;
}
function Fr(e) {
	r(e, {
		position: "absolute",
		width: "1px",
		height: "1px",
		overflow: "hidden",
		whiteSpace: "nowrap",
		clip: "rect(1px, 1px, 1px, 1px)",
		marginTop: "-3px",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
		filter: "alpha(opacity=1)",
		opacity: .01
	});
}
var Z = {
	addClass: Sr,
	cloneMouseEvent: wr,
	cloneTouchEvent: Tr,
	escapeStringForHTML: Er,
	getElement: Or,
	getFakeMouseEvent: kr,
	getHeadingTagNameForElement: Ar,
	getShadowRoot: Dr,
	removeChildNodes: Mr,
	removeClass: Cr,
	removeElement: jr,
	reverseChildNodes: Nr,
	simulatedEventTarget: xr,
	stripHTMLTagsFromString: Pr,
	visuallyHideElement: Fr
}, { format: Ir } = J, Lr;
(function(e) {
	function t(e) {
		let t = e.prototype;
		t.langFormat ||= i;
	}
	e.compose = t;
	function n(e, t) {
		let n = e.indexOf("#each("), r = e.indexOf("#plural("), i = e.indexOf("["), o = e.indexOf("]"), s, c;
		if (n > -1) {
			let r = e.slice(n).indexOf(")") + n, i = e.substring(0, n), a = e.substring(r + 1), o = e.substring(n + 6, r).split(","), u = Number(o[1]), d;
			if (c = "", s = l(o[0], t), s) {
				u = isNaN(u) ? s.length : u, d = u < 0 ? s.length + u : Math.min(u, s.length);
				for (let e = 0; e < d; ++e) c += i + s[e] + a;
			}
			return c.length ? c : "";
		}
		if (r > -1) {
			let n = e.slice(r).indexOf(")") + r, i = e.substring(r + 8, n).split(",");
			switch (Number(l(i[0], t))) {
				case 0:
					c = i[4] ?? i[1];
					break;
				case 1:
					c = i[2] ?? i[1];
					break;
				case 2:
					c = i[3] ?? i[1];
					break;
				default: c = i[1];
			}
			return c ? a(c) : "";
		}
		if (i > -1) {
			let n = e.substring(0, i), r = Number(e.substring(i + 1, o)), a;
			return s = l(n, t), !isNaN(r) && s && (r < 0 ? (a = s[s.length + r], a === void 0 && (a = s[0])) : (a = s[r], a === void 0 && (a = s[s.length - 1]))), a === void 0 ? "" : a;
		}
		return "{" + e + "}";
	}
	function r(e, t, r) {
		let i = (e, t) => {
			let n = e.slice(t || 0), r = n.indexOf("{"), i = n.indexOf("}");
			if (r > -1 && i > r) return {
				statement: n.substring(r + 1, i),
				begin: t + r + 1,
				end: t + i
			};
		}, a = [], o, s, c = 0;
		do
			o = i(e, c), s = e.substring(c, o && o.begin - 1), s.length && a.push({
				value: s,
				type: "constant"
			}), o && a.push({
				value: o.statement,
				type: "statement"
			}), c = o ? o.end + 1 : c + 1;
		while (o);
		return a.forEach((e) => {
			e.type === "statement" && (e.value = n(e.value, t));
		}), Ir(a.reduce((e, t) => e + t.value, ""), t, r);
	}
	e.i18nFormat = r;
	function i(e, t) {
		let n = e.split("."), i = this.options.lang, a = 0;
		for (; a < n.length; ++a) i &&= i[n[a]];
		return typeof i == "string" ? r(i, t, this) : "";
	}
	function a(e) {
		return e.trim && e.trim() || e.replace(/^\s+|\s+$/g, "");
	}
})(Lr ||= {});
var Rr = Lr, { doc: zr } = z, { stripHTMLTagsFromString: Br } = Z;
function Vr(e, t) {
	let n = t.type, r = e.hcEvents;
	zr?.createEvent && (e.dispatchEvent || e.fireEvent) ? e.dispatchEvent ? e.dispatchEvent(t) : e.fireEvent(n, t) : r && r[n] ? p(e, n, t) : e.element && Vr(e.element, t);
}
function Hr(e) {
	return Br(e.options.title.text || e.langFormat("accessibility.defaultChartTitle", { chart: e }), e.renderer.forExport);
}
function Ur(e) {
	return e && (e.options.accessibility?.description || e.axisTitle?.textStr || e.options.id || e.categories && e.chart.langFormat("accessibility.axis.defaultAxisNames.categories", {}) || e.dateTime && e.chart.langFormat("accessibility.axis.defaultAxisNames.time", {}) || e.chart.langFormat("accessibility.axis.defaultAxisNames.values", {}));
}
function Wr(e) {
	let t = e.options || {};
	return t.accessibility && t.accessibility.rangeDescription !== void 0 ? t.accessibility.rangeDescription : e.categories ? Gr(e) : e.dateTime && (e.min === 0 || e.dataMin === 0) ? Kr(e) : qr(e);
}
function Gr(e) {
	let t = e.chart;
	return e.dataMax && e.dataMin ? t.langFormat("accessibility.axis.rangeCategories", {
		chart: t,
		axis: e,
		numCategories: e.dataMax - e.dataMin + 1
	}) : "";
}
function Kr(e) {
	let t = e.chart, n = {}, r = e.dataMin || e.min || 0, i = e.dataMax || e.max || 0, a = "Seconds";
	n.Seconds = (i - r) / 1e3, n.Minutes = n.Seconds / 60, n.Hours = n.Minutes / 60, n.Days = n.Hours / 24, [
		"Minutes",
		"Hours",
		"Days"
	].forEach(function(e) {
		n[e] > 2 && (a = e);
	});
	let o = n[a].toFixed(+(a !== "Seconds" && a !== "Minutes"));
	return t.langFormat("accessibility.axis.timeRange" + a, {
		chart: t,
		axis: e,
		range: o.replace(".0", "")
	});
}
function qr(e) {
	let t = e.chart, n = t.options, r = n && n.accessibility && n.accessibility.screenReaderSection.axisRangeDateFormat || "", i = {
		min: e.dataMin || e.min || 0,
		max: e.dataMax || e.max || 0
	}, a = function(n) {
		return e.dateTime ? t.time.dateFormat(r, i[n]) : i[n].toString();
	};
	return t.langFormat("accessibility.axis.rangeFromTo", {
		chart: t,
		axis: e,
		rangeFrom: a("min"),
		rangeTo: a("max")
	});
}
function Jr(e) {
	if (e.points && e.points.length) {
		let t = L(e.points, (e) => !!e.graphic);
		return t && t.graphic && t.graphic.element;
	}
}
function Yr(e) {
	let t = Jr(e);
	return t && t.parentNode || e.graph && e.graph.element || e.group && e.group.element;
}
function Xr(e, t) {
	t.setAttribute("aria-hidden", !1), t !== e.renderTo && t.parentNode && t.parentNode !== zr.body && (Array.prototype.forEach.call(t.parentNode.childNodes, function(e) {
		e.hasAttribute("aria-hidden") || e.setAttribute("aria-hidden", !0);
	}), Xr(e, t.parentNode));
}
function Zr(e) {
	let t = Yr(e);
	t && t.setAttribute("aria-hidden", !0);
}
function Qr(e, t) {
	return t ? (e.series || []).filter(function(e) {
		return e.name === t;
	}) : e.series;
}
function $r(e, t, n) {
	let r = e.length, i;
	for (; r--;) if (i = L(e[r].points || [], function(e) {
		return e.x === t && e.y === n;
	}), i) return i;
}
function ei(e, t) {
	if (!W(e.dataMin) || !W(e.dataMax)) return 0;
	let n = e.toPixels(e.dataMin), r = e.toPixels(e.dataMax), i = e.coll === "xAxis" ? "x" : "y";
	return (e.toPixels(t[i] || 0) - n) / (r - n);
}
function ti(e) {
	let t = e.series.xAxis, n = e.series.yAxis, r = t && t.scrollbar ? t : n, i = r && r.scrollbar;
	if (i && W(i.to) && W(i.from)) {
		let t = i.to - i.from, n = ei(r, e);
		i.updatePosition(n - t / 2, n + t / 2), p(i, "changed", {
			from: i.from,
			to: i.to,
			trigger: "scrollbar",
			DOMEvent: null
		});
	}
}
var Q = {
	fireEventOnWrappedOrUnwrappedElement: Vr,
	getChartTitle: Hr,
	getAxisDescription: Ur,
	getAxisRangeDescription: Wr,
	getPointFromXY: $r,
	getSeriesFirstPointElement: Jr,
	getSeriesFromName: Qr,
	getSeriesA11yElement: Yr,
	unhideChartElementFromAT: Xr,
	hideSeriesFromAT: Zr,
	scrollAxisToPoint: ti
}, { doc: ni } = z, { removeElement: ri } = Z, ii = class {
	constructor() {
		this.elements = [];
	}
	createElement() {
		let e = ni.createElement.apply(ni, arguments);
		return this.elements.push(e), e;
	}
	removeElement(e) {
		ri(e), this.elements.splice(this.elements.indexOf(e), 1);
	}
	destroyCreatedElements() {
		this.elements.forEach(function(e) {
			ri(e);
		}), this.elements = [];
	}
}, ai = class {
	constructor() {
		this.eventRemovers = [];
	}
	addEvent() {
		let e = I.apply(z, arguments);
		return this.eventRemovers.push({
			element: arguments[0],
			remover: e
		}), e;
	}
	removeEvent(e) {
		let t = this.eventRemovers.map((e) => e.remover).indexOf(e);
		this.eventRemovers[t].remover(), this.eventRemovers.splice(t, 1);
	}
	removeAddedEvents() {
		this.eventRemovers.map((e) => e.remover).forEach((e) => e()), this.eventRemovers = [];
	}
}, { fireEventOnWrappedOrUnwrappedElement: oi } = Q, { getFakeMouseEvent: si } = Z, ci = class {
	destroy() {}
	getKeyboardNavigation() {
		return [];
	}
	init() {}
	onChartRender() {}
	onChartUpdate() {}
	initBase(e, t) {
		this.chart = e, this.eventProvider = new ai(), this.domElementProvider = new ii(), this.proxyProvider = t, this.keyCodes = {
			left: 37,
			right: 39,
			up: 38,
			down: 40,
			enter: 13,
			space: 32,
			esc: 27,
			tab: 9,
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36
		};
	}
	addEvent(e, t, n, r) {
		return this.eventProvider.addEvent(e, t, n, r);
	}
	createElement(e, t) {
		return this.domElementProvider.createElement(e, t);
	}
	fakeClickEvent(e) {
		oi(e, si("click"));
	}
	destroyBase() {
		this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
	}
}, li = class {
	constructor(e, t) {
		this.chart = e, this.keyCodeMap = t.keyCodeMap || [], this.validate = t.validate, this.init = t.init, this.terminate = t.terminate, this.response = {
			success: 1,
			prev: 2,
			next: 3,
			noHandler: 4,
			fail: 5
		};
	}
	run(e) {
		let t = e.which || e.keyCode, n = this.response.noHandler, r = L(this.keyCodeMap, function(e) {
			return e[0].indexOf(t) > -1;
		});
		return r ? n = r[1].call(this, t, e) : t === 9 && (n = this.response[e.shiftKey ? "prev" : "next"]), n;
	}
}, { unhideChartElementFromAT: ui, getChartTitle: di } = Q, { doc: fi } = z, { stripHTMLTagsFromString: pi } = Z, mi = class extends ci {
	onChartUpdate() {
		this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
	}
	handleSVGTitleElement() {
		let e = this.chart, t = "highcharts-title-" + e.index, n = pi(e.langFormat("accessibility.svgContainerTitle", { chartTitle: di(e) }));
		if (n.length) {
			let r = this.svgTitleElement = this.svgTitleElement || fi.createElementNS("http://www.w3.org/2000/svg", "title");
			r.textContent = n, r.id = t, e.renderTo.insertBefore(r, e.renderTo.firstChild);
		}
	}
	setSVGContainerLabel() {
		let e = this.chart, t = e.langFormat("accessibility.svgContainerLabel", { chartTitle: di(e) });
		e.renderer.box && t.length && e.renderer.box.setAttribute("aria-label", t);
	}
	setGraphicContainerAttrs() {
		let e = this.chart, t = e.langFormat("accessibility.graphicContainerLabel", { chartTitle: di(e) });
		t.length && e.container.setAttribute("aria-label", t);
	}
	setRenderToAttrs() {
		let e = this.chart, t = e.options.accessibility.landmarkVerbosity !== "disabled", n = e.langFormat("accessibility.chartContainerLabel", {
			title: di(e),
			chart: e
		});
		n && (e.renderTo.setAttribute("role", t ? "region" : "group"), e.renderTo.setAttribute("aria-label", n));
	}
	makeCreditsAccessible() {
		let e = this.chart, t = e.credits;
		t && (t.textStr && t.element.setAttribute("aria-label", e.langFormat("accessibility.credits", { creditsStr: pi(t.textStr, e.renderer.forExport) })), ui(e, t.element));
	}
	getKeyboardNavigation() {
		let e = this.chart;
		return new li(e, {
			keyCodeMap: [],
			validate: function() {
				return !0;
			},
			init: function() {
				let t = e.accessibility;
				t && t.keyboardNavigation.tabindexContainer.focus();
			}
		});
	}
	destroy() {
		this.chart.renderTo.setAttribute("aria-hidden", !0);
	}
}, hi;
(function(e) {
	let t = [
		"x",
		"y",
		"transform",
		"width",
		"height",
		"r",
		"d",
		"stroke-width"
	];
	function n(e, t) {
		let n = e.prototype, a = t.prototype;
		n.renderFocusBorder || (n.renderFocusBorder = r, n.setFocusToElement = i), a.addFocusBorder || (a.addFocusBorder = o, a.removeFocusBorder = l);
	}
	e.compose = n;
	function r() {
		let e = this.focusElement, t = this.options.accessibility.keyboardNavigation.focusBorder;
		e && (e.removeFocusBorder(), t.enabled && e.addFocusBorder(t.margin, {
			stroke: t.style.color,
			strokeWidth: t.style.lineWidth,
			r: t.style.borderRadius
		}));
	}
	function i(e, t) {
		let n = this.options.accessibility.keyboardNavigation.focusBorder, r = t || e.element;
		r && r.focus && (r.hcEvents && r.hcEvents.focusin || I(r, "focusin", function() {}), r.focus(), n.hideBrowserFocusOutline && (r.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e, I(this, "endResize", function() {
			this.renderFocusBorder();
		}), this.renderFocusBorder();
	}
	function a(e) {
		if (e.focusBorderDestroyHook) return;
		let t = e.destroy;
		e.destroy = function() {
			return e.focusBorder && e.focusBorder.destroy && e.focusBorder.destroy(), t.apply(e, arguments);
		}, e.focusBorderDestroyHook = t;
	}
	function o(e, t) {
		this.focusBorder && this.removeFocusBorder();
		let n = this.getBBox(), r = e ?? 3, i = this.parentGroup, o = this.scaleX || i && i.scaleX, c = this.scaleY || i && i.scaleY, l = (o ? !c : c) ? Math.abs(o || c || 1) : (Math.abs(o || 1) + Math.abs(c || 1)) / 2, u = this.renderer.fontMetrics(this).h;
		n.x += this.translateX ? this.translateX : 0, n.y += this.translateY ? this.translateY : 0;
		let d = n.x - r, f = n.y - r, p = n.width + 2 * r, m = n.height + 2 * r;
		function h(e) {
			let t = 0, n = 0;
			return e.attr("text-anchor") === "middle" ? t = n = .5 : e.rotation ? t = .25 : n = .75, {
				x: t,
				y: n
			};
		}
		let g = !!this.text;
		if (this.element.nodeName === "text" || g) {
			let e = !!this.rotation, t = g ? {
				x: +!!e,
				y: 0
			} : h(this), i = +this.attr("x"), a = +this.attr("y");
			if (isNaN(i) || (d = i - n.width * t.x - r), isNaN(a) || (f = a - (this.attr("text-anchor") === "start" ? u : n.height) * t.y - r), g && e) {
				let e = p;
				p = m, m = e, isNaN(i) || (d = i - n.height * t.x - r), isNaN(a) || (f = a - n.width * t.y - r);
			}
		}
		this.focusBorder = this.renderer.rect(d, f, p, m, parseInt((t && t.r || 0).toString(), 10) / l).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(i), this.renderer.styledMode || this.focusBorder.attr({
			stroke: t && t.stroke,
			"stroke-width": (t && t.strokeWidth || 0) / l
		}), s(this, e, t), a(this);
	}
	function s(e, ...n) {
		e.focusBorderUpdateHooks || (e.focusBorderUpdateHooks = {}, t.forEach((t) => {
			let r = t + "Setter", i = e[r] || e._defaultSetter;
			e.focusBorderUpdateHooks[r] = i, e[r] = function() {
				let t = i.apply(e, arguments);
				return e.addFocusBorder.apply(e, n), t;
			};
		}));
	}
	function c(e) {
		e.focusBorderDestroyHook && (e.destroy = e.focusBorderDestroyHook, delete e.focusBorderDestroyHook);
	}
	function l() {
		u(this), c(this), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
	}
	function u(e) {
		e.focusBorderUpdateHooks && (Object.keys(e.focusBorderUpdateHooks).forEach((t) => {
			let n = e.focusBorderUpdateHooks[t];
			n === e._defaultSetter ? delete e[t] : e[t] = n;
		}), delete e.focusBorderUpdateHooks);
	}
})(hi ||= {});
var gi = hi, { doc: _i } = z, { addClass: vi, visuallyHideElement: yi } = Z, bi = class {
	constructor(e, t) {
		this.chart = e, this.domElementProvider = new ii(), this.announceRegion = this.addAnnounceRegion(t);
	}
	destroy() {
		this.domElementProvider.destroyCreatedElements();
	}
	announce(e) {
		q.setElementHTML(this.announceRegion, e), this.clearAnnouncementRegionTimer && v(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
			this.announceRegion.innerHTML = q.emptyHTML, delete this.clearAnnouncementRegionTimer;
		}, 3e3);
	}
	addAnnounceRegion(e) {
		let t = this.chart.announcerContainer || this.createAnnouncerContainer(), n = this.domElementProvider.createElement("div");
		return U(n, {
			"aria-hidden": !1,
			"aria-live": e,
			"aria-atomic": !0
		}), yi(n), this.chart.styledMode && vi(n, "highcharts-visually-hidden"), t.appendChild(n), n;
	}
	createAnnouncerContainer() {
		let e = this.chart, t = _i.createElement("div");
		return U(t, {
			"aria-hidden": !1,
			class: "highcharts-announcer-container"
		}), yi(t), e.renderTo.insertBefore(t, e.renderTo.firstChild), e.announcerContainer = t, t;
	}
}, { escapeStringForHTML: xi, stripHTMLTagsFromString: Si } = Z;
function Ci(e) {
	return (e.annotations || []).reduce((e, t) => (t.options && t.options.visible !== !1 && (e = e.concat(t.labels)), e), []);
}
function wi(e) {
	return e.options && e.options.accessibility && e.options.accessibility.description || e.graphic && e.graphic.text && e.graphic.text.textStr || "";
}
function Ti(e) {
	let t = e.options && e.options.accessibility && e.options.accessibility.description;
	if (t) return t;
	let n = e.chart, r = wi(e), i = e.points, a = (e) => e.graphic && e.graphic.element && e.graphic.element.getAttribute("aria-label") || "", o = i.filter((e) => !!e.graphic).map((e) => {
		let t = e.accessibility && e.accessibility.valueDescription || a(e), n = e && e.series.name || "";
		return (n ? n + ", " : "") + "data point " + t;
	}).filter((e) => !!e), s = o.length, c = "accessibility.screenReaderSection.annotations.description" + (s > 1 ? "MultiplePoints" : s ? "SinglePoint" : "NoPoints"), l = {
		annotationText: r,
		annotation: e,
		numPoints: s,
		annotationPoint: o[0],
		additionalAnnotationPoints: o.slice(1)
	};
	return n.langFormat(c, l);
}
function Ei(e) {
	return Ci(e).map((t) => {
		let n = xi(Si(Ti(t), e.renderer.forExport));
		return n ? `<li>${n}</li>` : "";
	});
}
function Di(e) {
	let t = e.annotations;
	return t && t.length ? `<ul style="list-style-type: none">${Ei(e).join(" ")}</ul>` : "";
}
function Oi(e) {
	let t = Ci(e.series.chart).filter((t) => t.points.indexOf(e) > -1);
	return t.length ? t.map((e) => `${wi(e)}`) : [];
}
var ki = {
	getAnnotationsInfoHTML: Di,
	getAnnotationLabelDescription: Ti,
	getAnnotationListItems: Ei,
	getPointAnnotationTexts: Oi
}, { getAnnotationsInfoHTML: Ai } = ki, { getAxisDescription: ji, getAxisRangeDescription: Mi, getChartTitle: Ni, unhideChartElementFromAT: Pi } = Q, { format: Fi } = J, { doc: Ii } = z, { addClass: Li, getElement: Ri, getHeadingTagNameForElement: zi, getShadowRoot: Bi, stripHTMLTagsFromString: Vi, visuallyHideElement: Hi } = Z;
function Ui(e) {
	return e.langFormat("accessibility.table.tableSummary", { chart: e });
}
function Wi(e, t) {
	return t.mapTitle ? e.langFormat("accessibility.chartTypes.mapTypeDescription", t) : e.langFormat("accessibility.chartTypes.unknownMap", t);
}
function Gi(e, t) {
	return e.langFormat("accessibility.chartTypes.combinationChart", t);
}
function Ki(e, t) {
	return e.langFormat("accessibility.chartTypes.emptyChart", t);
}
function qi(e, t, n) {
	let r = t[0], i = e.langFormat("accessibility.seriesTypeDescriptions." + r, n), a = e.series && e.series.length < 2 ? "Single" : "Multiple";
	return (e.langFormat("accessibility.chartTypes." + r + a, n) || e.langFormat("accessibility.chartTypes.default" + a, n)) + (i ? " " + i : "");
}
function Ji(e, t) {
	let n = t[0], r = e.series && e.series[0] || {}, i = e.mapView && e.mapView.geoMap && e.mapView.geoMap.title, a = {
		numSeries: e.series.length,
		numPoints: r.points && r.points.length,
		chart: e,
		mapTitle: i
	};
	return n ? n === "map" || n === "tiledwebmap" ? Wi(e, a) : e.types.length > 1 ? Gi(e, a) : qi(e, t, a) : Ki(e, a);
}
function Yi(e) {
	return oe(e, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
}
var Xi = class extends ci {
	constructor() {
		super(...arguments), this.screenReaderSections = {};
	}
	init() {
		let e = this.chart, t = this;
		this.initRegionsDefinitions(), this.addEvent(e, "afterGetTableAST", function(e) {
			t.onDataTableCreated(e);
		}), this.addEvent(e, "afterViewData", function(e) {
			e.wasHidden && (t.dataTableDiv = e.element, setTimeout(function() {
				t.focusDataTable();
			}, 300));
		}), this.addEvent(e, "afterHideData", function() {
			t.viewDataTableButton && t.viewDataTableButton.setAttribute("aria-expanded", "false");
		}), e.exporting && this.addEvent(e, "afterPrint", function() {
			t.updateAllScreenReaderSections();
		}), this.announcer = new bi(e, "assertive");
	}
	initRegionsDefinitions() {
		let e = this, t = this.chart.options.accessibility;
		this.screenReaderSections = {
			before: {
				element: null,
				buildContent: function(n) {
					let r = t.screenReaderSection.beforeChartFormatter;
					return r ? r(n, e) : e.defaultBeforeChartFormatter();
				},
				insertIntoDOM: function(e, t) {
					t.renderTo.insertBefore(e, t.renderTo.firstChild);
				},
				afterInserted: function() {
					e.sonifyButtonId !== void 0 && e.initSonifyButton(e.sonifyButtonId), e.dataTableButtonId !== void 0 && e.initDataTableButton(e.dataTableButtonId);
				}
			},
			after: {
				element: null,
				buildContent: function(n) {
					let r = t.screenReaderSection.afterChartFormatter;
					return r ? r(n, e) : e.defaultAfterChartFormatter();
				},
				insertIntoDOM: function(e, t) {
					t.renderTo.insertBefore(e, t.container.nextSibling);
				},
				afterInserted: function() {
					e.chart.accessibility && t.keyboardNavigation.enabled && e.chart.accessibility.keyboardNavigation.updateExitAnchor();
				}
			}
		};
	}
	onChartRender() {
		this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
	}
	updateAllScreenReaderSections() {
		let e = this;
		Object.keys(this.screenReaderSections).forEach(function(t) {
			e.updateScreenReaderSection(t);
		});
	}
	getLinkedDescriptionElement() {
		let e = this.chart.options.accessibility.linkedDescription;
		if (!e) return;
		if (typeof e != "string") return e;
		let t = Fi(e, this.chart), n = Bi(this.chart.renderTo)?.querySelectorAll(t), r = n?.length ? n : Ii.querySelectorAll(t);
		if (r.length === 1) return r[0];
	}
	setLinkedDescriptionAttrs() {
		let e = this.linkedDescriptionElement;
		e && (e.setAttribute("aria-hidden", "true"), Li(e, "highcharts-linked-description"));
	}
	updateScreenReaderSection(e) {
		let t = this.chart, n = this.screenReaderSections[e], r = n.buildContent(t), i = n.element = n.element || this.createElement("div"), a = i.firstChild || this.createElement("div");
		r ? (this.setScreenReaderSectionAttribs(i, e), q.setElementHTML(a, r), i.appendChild(a), n.insertIntoDOM(i, t), Hi(a), t.styledMode && Li(a, "highcharts-visually-hidden"), Pi(t, a), n.afterInserted && n.afterInserted()) : (i.parentNode && i.parentNode.removeChild(i), n.element = null);
	}
	setScreenReaderSectionAttribs(e, t) {
		let n = this.chart, r = n.langFormat("accessibility.screenReaderSection." + t + "RegionLabel", {
			chart: n,
			chartTitle: Ni(n)
		}), i = `highcharts-screen-reader-region-${t}-${n.index}`;
		U(e, {
			id: i,
			"aria-label": r || void 0
		}), e.style.position = "relative", r && e.setAttribute("role", n.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
	}
	defaultBeforeChartFormatter() {
		let e = this.chart, t = e.options.accessibility.screenReaderSection.beforeChartFormat;
		if (!t) return "";
		let n = this.getAxesDescription(), r = e.sonify && e.options.sonification && e.options.sonification.enabled, i = "highcharts-a11y-sonify-data-btn-" + e.index, a = "hc-linkto-highcharts-data-table-" + e.index, o = Ai(e), s = e.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: e }), c = {
			headingTagName: zi(e.renderTo),
			chartTitle: Ni(e),
			typeDescription: this.getTypeDescriptionText(),
			chartSubtitle: this.getSubtitleText(),
			chartLongdesc: this.getLongdescText(),
			xAxisDescription: n.xAxis,
			yAxisDescription: n.yAxis,
			playAsSoundButton: r ? this.getSonifyButtonText(i) : "",
			viewTableButton: e.exporting?.getCSV ? this.getDataTableButtonText(a) : "",
			annotationsTitle: o ? s : "",
			annotationsList: o
		}, l = Rr.i18nFormat(t, c, e);
		return this.dataTableButtonId = a, this.sonifyButtonId = i, Yi(l);
	}
	defaultAfterChartFormatter() {
		let e = this.chart, t = e.options.accessibility.screenReaderSection.afterChartFormat;
		if (!t) return "";
		let n = { endOfChartMarker: this.getEndOfChartMarkerText() };
		return Yi(Rr.i18nFormat(t, n, e));
	}
	getLinkedDescription() {
		let e = this.linkedDescriptionElement;
		return Vi(e && e.innerHTML || "", this.chart.renderer.forExport);
	}
	getLongdescText() {
		let e = this.chart.options, t = e.caption, n = t && t.text, r = this.getLinkedDescription();
		return e.accessibility.description || r || n || "";
	}
	getTypeDescriptionText() {
		let e = this.chart;
		return e.types ? e.options.accessibility.typeDescription || Ji(e, e.types) : "";
	}
	getDataTableButtonText(e) {
		let t = this.chart, n = t.langFormat("accessibility.table.viewAsDataTableButtonText", {
			chart: t,
			chartTitle: Ni(t)
		});
		return "<button id=\"" + e + "\">" + n + "</button>";
	}
	getSonifyButtonText(e) {
		let t = this.chart;
		if (t.options.sonification && t.options.sonification.enabled === !1) return "";
		let n = t.langFormat("accessibility.sonification.playAsSoundButtonText", {
			chart: t,
			chartTitle: Ni(t)
		});
		return "<button id=\"" + e + "\">" + n + "</button>";
	}
	getSubtitleText() {
		let e = this.chart.options.subtitle;
		return Vi(e && e.text || "", this.chart.renderer.forExport);
	}
	getEndOfChartMarkerText() {
		let e = Ri(`highcharts-end-of-chart-marker-${this.chart.index}`, this.chart.renderTo);
		if (e) return e.outerHTML;
		let t = this.chart, n = t.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: t });
		return "<div id=\"" + ("highcharts-end-of-chart-marker-" + t.index) + "\">" + n + "</div>";
	}
	onDataTableCreated(e) {
		let t = this.chart;
		if (t.options.accessibility.enabled) {
			this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
			let n = e.tree.attributes || {};
			n.tabindex = -1, n.summary = Ui(t), e.tree.attributes = n;
		}
	}
	focusDataTable() {
		let e = this.dataTableDiv, t = e && e.getElementsByTagName("table")[0];
		t && t.focus && t.focus();
	}
	initSonifyButton(e) {
		let t = this.chart, n = this.sonifyButton = Ri(e, t.renderTo), r = (e) => {
			n && (n.setAttribute("aria-hidden", "true"), n.setAttribute("aria-label", "")), e.preventDefault(), e.stopPropagation();
			let r = t.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: t });
			this.announcer.announce(r), setTimeout(() => {
				n && (n.removeAttribute("aria-hidden"), n.removeAttribute("aria-label")), t.sonify && t.sonify();
			}, 1e3);
		};
		n && t && (n.setAttribute("tabindex", -1), n.onclick = function(e) {
			(t.options.accessibility && t.options.accessibility.screenReaderSection.onPlayAsSoundClick || r).call(this, e, t, this);
		});
	}
	initDataTableButton(e) {
		let t = this.chart, n = this.viewDataTableButton = Ri(e, t.renderTo), r = e.replace("hc-linkto-", "");
		n && (U(n, {
			tabindex: -1,
			"aria-expanded": !!Ri(r, t.renderTo)
		}), n.onclick = t.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
			t.exporting?.viewData();
		});
	}
	getAxesDescription() {
		let e = this.chart, t = function(t, n) {
			let r = e[t], i = r[0] ? r[0].options.accessibility && r[0].options.accessibility.enabled : void 0;
			return r.length > 1 || (i ?? n);
		}, n = !!e.types && e.types.indexOf("map") < 0 && e.types.indexOf("treemap") < 0 && e.types.indexOf("tilemap") < 0, r = !!e.hasCartesianSeries, i = t("xAxis", !e.angular && r && n), a = t("yAxis", r && n), o = {};
		return i && (o.xAxis = this.getAxisDescriptionText("xAxis")), a && (o.yAxis = this.getAxisDescriptionText("yAxis")), o;
	}
	getAxisDescriptionText(e) {
		let t = this.chart, n = t[e];
		return t.langFormat("accessibility.axis." + e + "Description" + (n.length > 1 ? "Plural" : "Singular"), {
			chart: t,
			names: n.map(function(e) {
				return ji(e);
			}),
			ranges: n.map(function(e) {
				return Mi(e);
			}),
			numAxes: n.length
		});
	}
	destroy() {
		this.announcer && this.announcer.destroy();
	}
}, { getChartTitle: Zi, unhideChartElementFromAT: Qi } = Q, { getFakeMouseEvent: $i } = Z;
function ea(e) {
	return e.exporting?.svgElements?.[0];
}
function ta(e) {
	let t = e.options.exporting, n = ea(e);
	return !!(t && t.enabled !== !1 && t.accessibility && t.accessibility.enabled && n && n.element);
}
var na = class extends ci {
	init() {
		let e = this.chart, t = this;
		this.addEvent(e, "exportMenuShown", function() {
			t.onMenuShown();
		}), this.addEvent(e, "exportMenuHidden", function() {
			t.onMenuHidden();
		}), this.createProxyGroup();
	}
	onMenuHidden() {
		let e = this.chart.exporting?.contextMenuEl;
		e && e.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
	}
	onMenuShown() {
		let e = this.chart, t = e.exporting?.contextMenuEl;
		t && (this.addAccessibleContextMenuAttribs(), Qi(e, t)), this.setExportButtonExpandedState("true");
	}
	setExportButtonExpandedState(e) {
		this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e);
	}
	onChartRender() {
		let e = this.chart, t = e.focusElement, n = e.accessibility;
		this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t && t === e.exporting?.group && (t.focusBorder ? e.setFocusToElement(t, this.exportButtonProxy.innerElement) : n && n.keyboardNavigation.tabindexContainer.focus());
	}
	proxyMenuButton() {
		let e = this.chart, t = this.proxyProvider, n = ea(e);
		ta(e) && n && (this.exportButtonProxy = t.addProxyElement("chartMenu", { click: n }, "button", {
			"aria-label": e.langFormat("accessibility.exporting.menuButtonLabel", {
				chart: e,
				chartTitle: Zi(e)
			}),
			"aria-expanded": !1,
			title: e.options.lang.contextButtonTitle || null
		}));
	}
	createProxyGroup() {
		this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
	}
	addAccessibleContextMenuAttribs() {
		let e = this.chart, t = e.exporting?.divElements;
		if (t && t.length) {
			t.forEach((e) => {
				e && (e.tagName === "LI" && !(e.children && e.children.length) ? e.setAttribute("tabindex", -1) : e.setAttribute("aria-hidden", "true"));
			});
			let n = t[0] && t[0].parentNode;
			n && U(n, {
				"aria-hidden": void 0,
				"aria-label": e.langFormat("accessibility.exporting.chartMenuLabel", { chart: e }),
				role: "list"
			});
		}
	}
	getKeyboardNavigation() {
		let e = this.keyCodes, t = this.chart, n = this;
		return new li(t, {
			keyCodeMap: [
				[[e.left, e.up], function() {
					return n.onKbdPrevious(this);
				}],
				[[e.right, e.down], function() {
					return n.onKbdNext(this);
				}],
				[[e.enter, e.space], function() {
					return n.onKbdClick(this);
				}]
			],
			validate: function() {
				return !!t.exporting && t.options.exporting?.buttons?.contextButton.enabled !== !1 && t.options.exporting.enabled !== !1 && (t.options.exporting.accessibility?.enabled || !1) !== !1;
			},
			init: function() {
				let e = n.exportButtonProxy, r = n.chart.exporting?.group;
				e && r && t.setFocusToElement(r, e.innerElement);
			},
			terminate: function() {
				t.hideExportMenu();
			}
		});
	}
	onKbdPrevious(e) {
		let t = this.chart, n = t.options.accessibility, r = e.response, i = t.highlightedExportItemIx || 0;
		for (; i--;) if (t.highlightExportItem(i)) return r.success;
		return n.keyboardNavigation.wrapAround ? (t.highlightLastExportItem(), r.success) : r.prev;
	}
	onKbdNext(e) {
		let t = this.chart, n = t.options.accessibility, r = e.response;
		for (let e = (t.highlightedExportItemIx || 0) + 1; e < (t.exporting?.divElements?.length || 0); ++e) if (t.highlightExportItem(e)) return r.success;
		return n.keyboardNavigation.wrapAround ? (t.highlightExportItem(0), r.success) : r.next;
	}
	onKbdClick(e) {
		let t = this.chart, n = t.highlightedExportItemIx !== void 0 && t.exporting?.divElements?.[t.highlightedExportItemIx], r = ea(t)?.element;
		return t.exporting?.openMenu ? n && this.fakeClickEvent(n) : (r && this.fakeClickEvent(r), t.highlightExportItem(0)), e.response.success;
	}
};
(function(e) {
	function t(e) {
		let t = e.prototype;
		t.hideExportMenu || (t.hideExportMenu = r, t.highlightExportItem = i, t.highlightLastExportItem = a, t.showExportMenu = n);
	}
	e.compose = t;
	function n() {
		let e = ea(this);
		if (e) {
			let t = e.element;
			t.onclick &&= function() {
				$i("click");
			};
		}
	}
	function r() {
		let e = this, t = e.exporting?.divElements;
		t && e.exporting?.contextMenuEl && e.exporting?.openMenu && (t.forEach((e) => {
			e && e.className === "highcharts-menu-item" && e.onmouseout && e.onmouseout($i("mouseout"));
		}), e.highlightedExportItemIx = 0, e.exporting.contextMenuEl.hideMenu(), e.container.focus());
	}
	function i(e) {
		let t = this.exporting?.divElements?.[e], n = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
		if (t && t.tagName === "LI" && !(t.children && t.children.length)) {
			let r = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
			return t.focus && r && t.focus(), n && n.onmouseout && n.onmouseout($i("mouseout")), t.onmouseover && t.onmouseover($i("mouseover")), this.highlightedExportItemIx = e, !0;
		}
		return !1;
	}
	function a() {
		let e = this;
		if (e.exporting?.divElements) {
			let t = e.exporting?.divElements.length;
			for (; t--;) if (e.highlightExportItem(t)) return !0;
		}
		return !1;
	}
})(na ||= {});
var ra = na, { doc: ia, win: aa } = z, { getElement: oa, simulatedEventTarget: sa } = Z, ca = class {
	constructor(e, t) {
		this.currentModuleIx = NaN, this.modules = [], this.init(e, t);
	}
	init(e, t) {
		let n = this.eventProvider = new ai();
		this.chart = e, this.components = t, this.modules = [], this.currentModuleIx = 0, this.update(), n.addEvent(this.tabindexContainer, "keydown", (e) => this.onKeydown(e)), n.addEvent(this.tabindexContainer, "focus", (e) => this.onFocus(e)), ["mouseup", "touchend"].forEach((e) => n.addEvent(ia, e, (e) => this.onMouseUp(e))), ["mousedown", "touchstart"].forEach((t) => n.addEvent(e.renderTo, t, () => {
			this.isClickingChart = !0;
		}));
	}
	update(e) {
		let t = this.chart.options.accessibility, n = t && t.keyboardNavigation, r = this.components;
		this.updateContainerTabindex(), n && n.enabled && e && e.length ? (this.modules = e.reduce(function(e, t) {
			let n = r[t].getKeyboardNavigation();
			return e.concat(n);
		}, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
	}
	updateExitAnchor() {
		let e = oa(`highcharts-end-of-chart-marker-${this.chart.index}`, this.chart.renderTo);
		this.removeExitAnchor(), e ? (this.makeElementAnExitAnchor(e), this.exitAnchor = e) : this.createExitAnchor();
	}
	move(e) {
		let t = this.modules && this.modules[this.currentModuleIx];
		t && t.terminate && t.terminate(e), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += e;
		let n = this.modules && this.modules[this.currentModuleIx];
		if (n) {
			if (n.validate && !n.validate()) return this.move(e);
			if (n.init) return n.init(e), !0;
		}
		return this.currentModuleIx = 0, this.exiting = !0, e > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), !1;
	}
	onFocus(e) {
		let t = this.chart, n = e.relatedTarget && t.container.contains(e.relatedTarget), r = t.options.accessibility, i = r && r.keyboardNavigation;
		if (i && i.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !n) {
			let e = this.getFirstValidModuleIx();
			e !== null && (this.currentModuleIx = e, this.modules[e].init(1));
		}
		this.keyboardReset = !1, this.exiting = !1;
	}
	onMouseUp(e) {
		if (delete this.isClickingChart, !this.keyboardReset && e.relatedTarget !== sa) {
			let t = this.chart;
			if (!e.target || !t.container.contains(e.target)) {
				let e = this.modules && this.modules[this.currentModuleIx || 0];
				e && e.terminate && e.terminate(), this.currentModuleIx = 0;
			}
			t.focusElement && (t.focusElement.removeFocusBorder(), delete t.focusElement), this.keyboardReset = !0;
		}
	}
	onKeydown(e) {
		let t = e || aa.event, n = this.modules && this.modules.length && this.modules[this.currentModuleIx], r, i = t.target;
		if ((!i || i.nodeName !== "INPUT" || i.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, n)) {
			let e = n.run(t);
			e === n.response.success ? r = !0 : e === n.response.prev ? r = this.move(-1) : e === n.response.next && (r = this.move(1)), r && (t.preventDefault(), t.stopPropagation());
		}
	}
	updateContainerTabindex() {
		let e = this.chart.options.accessibility, t = e && e.keyboardNavigation, n = !(t && t.enabled === !1), r = this.chart, i = r.container, a;
		r.renderTo.hasAttribute("tabindex") ? (i.removeAttribute("tabindex"), a = r.renderTo) : a = i, this.tabindexContainer = a;
		let o = a.getAttribute("tabindex");
		n && !o ? a.setAttribute("tabindex", "0") : n || r.container.removeAttribute("tabindex");
	}
	createExitAnchor() {
		let e = this.chart, t = this.exitAnchor = ia.createElement("div");
		e.renderTo.appendChild(t), this.makeElementAnExitAnchor(t);
	}
	makeElementAnExitAnchor(e) {
		let t = this.tabindexContainer.getAttribute("tabindex") || 0;
		e.setAttribute("class", "highcharts-exit-anchor"), e.setAttribute("tabindex", t), e.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(e);
	}
	removeExitAnchor() {
		if (this.exitAnchor) {
			let e = this.eventProvider.eventRemovers.find((e) => e.element === this.exitAnchor);
			e && W(e.remover) && this.eventProvider.removeEvent(e.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
		}
	}
	addExitAnchorEventsToEl(e) {
		let t = this.chart, n = this;
		this.eventProvider.addEvent(e, "focus", function(e) {
			let r = e || aa.event, i = !(r.relatedTarget && t.container.contains(r.relatedTarget) || n.exiting);
			if (t.focusElement && delete t.focusElement, i) {
				if (n.tabbingInBackwards = !0, n.tabindexContainer.focus(), delete n.tabbingInBackwards, r.preventDefault(), n.modules && n.modules.length) {
					n.currentModuleIx = n.modules.length - 1;
					let e = n.modules[n.currentModuleIx];
					e && e.validate && !e.validate() ? n.move(-1) : e && e.init(-1);
				}
			} else n.exiting = !1;
		});
	}
	getFirstValidModuleIx() {
		let e = this.modules.length;
		for (let t = 0; t < e; ++t) {
			let e = this.modules[t];
			if (!e.validate || e.validate()) return t;
		}
		return null;
	}
	destroy() {
		this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
	}
};
(function(e) {
	function t(e) {
		ra.compose(e);
		let t = e.prototype;
		return t.dismissPopupContent || (t.dismissPopupContent = n, ia && I(ia, "keydown", r)), e;
	}
	e.compose = t;
	function n() {
		let e = this;
		p(this, "dismissPopupContent", {}, function() {
			e.tooltip && e.tooltip.hide(0), e.hideExportMenu();
		});
	}
	function r(e) {
		(e.which || e.keyCode) === 27 && z.charts && z.charts.forEach((e) => {
			e && e.dismissPopupContent && e.dismissPopupContent();
		});
	}
})(ca ||= {});
var la = ca, { doc: ua } = z, { getChartTitle: da } = Q, { stripHTMLTagsFromString: fa, addClass: pa, removeClass: ma } = Z;
function ha(e, t) {
	let n = (e.allItems[t].legendItem || {}).pageIx, r = e.currentPage;
	n !== void 0 && n + 1 !== r && e.scroll(1 + n - r);
}
function ga(e) {
	let t = e.legend && e.legend.allItems, n = e.options.legend.accessibility || {}, r = e.colorAxis && e.colorAxis.some((e) => !e.dataClasses || !e.dataClasses.length);
	return !!(t && t.length && !r && n.enabled !== !1);
}
function _a(e, t) {
	let n = t.legendItem || {};
	t.setState(e ? "hover" : "", !0);
	for (let t of [
		"group",
		"label",
		"symbol"
	]) {
		let r = n[t], i = r && r.element || r;
		i && p(i, e ? "mouseover" : "mouseout");
	}
}
var va = class extends ci {
	constructor() {
		super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
	}
	init() {
		let e = this;
		this.recreateProxies(), this.addEvent(en, "afterScroll", function() {
			this.chart === e.chart && (e.proxyProvider.updateGroupProxyElementPositions("legend"), e.updateLegendItemProxyVisibility(), e.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e.highlightedLegendItemIx));
		}), this.addEvent(en, "afterPositionItem", function(t) {
			this.chart === e.chart && this.chart.renderer && e.updateProxyPositionForItem(t.item);
		}), this.addEvent(en, "afterRender", function() {
			this.chart === e.chart && this.chart.renderer && e.recreateProxies() && k(() => e.proxyProvider.updateGroupProxyElementPositions("legend"), me(this.chart.renderer.globalAnimation ?? !0).duration);
		});
	}
	updateLegendItemProxyVisibility() {
		let e = this.chart, t = e.legend, n = t.allItems || [], r = t.currentPage || 1, i = t.clipHeight || 0, a;
		n.forEach((n) => {
			if (n.a11yProxyElement) {
				let o = t.pages && t.pages.length, s = n.a11yProxyElement.element, c = !1;
				if (a = n.legendItem || {}, o) {
					let e = a.pageIx || 0;
					c = (a.y || 0) + (a.label ? Math.round(a.label.getBBox().height) : 0) - t.pages[e] > i || e !== r - 1;
				}
				c ? e.styledMode ? pa(s, "highcharts-a11y-invisible") : s.style.visibility = "hidden" : (ma(s, "highcharts-a11y-invisible"), s.style.visibility = "");
			}
		});
	}
	onChartRender() {
		ga(this.chart) || this.removeProxies();
	}
	highlightAdjacentLegendPage(e) {
		let t = this.chart, n = t.legend, r = (n.currentPage || 1) + e, i = n.pages || [];
		if (r > 0 && r <= i.length) {
			let e = 0, i;
			for (let a of n.allItems) ((a.legendItem || {}).pageIx || 0) + 1 === r && (i = t.highlightLegendItem(e), i && (this.highlightedLegendItemIx = e)), ++e;
		}
	}
	updateProxyPositionForItem(e) {
		e.a11yProxyElement && e.a11yProxyElement.refreshPosition();
	}
	recreateProxies() {
		let e = ua.activeElement, t = this.proxyGroup, n = e && t && t.contains(e);
		return this.removeProxies(), ga(this.chart) ? (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), n && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0) : !1;
	}
	removeProxies() {
		this.proxyProvider.removeGroup("legend");
	}
	updateLegendTitle() {
		let e = this.chart, t = fa((e.legend && e.legend.options.title && e.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e.renderer.forExport), n = e.langFormat("accessibility.legend.legendLabel" + (t ? "" : "NoTitle"), {
			chart: e,
			legendTitle: t,
			chartTitle: da(e)
		});
		this.proxyProvider.updateGroupAttrs("legend", { "aria-label": n });
	}
	addLegendProxyGroup() {
		let e = this.chart.options.accessibility.landmarkVerbosity === "all" ? "region" : null;
		this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", {
			"aria-label": "_placeholder_",
			role: e
		});
	}
	proxyLegendItems() {
		let e = this, t = (this.chart.legend || {}).allItems || [], n;
		t.forEach((t) => {
			n = t.legendItem || {}, n.label && n.label.element && e.proxyLegendItem(t);
		});
	}
	proxyLegendItem(e) {
		let t = e.legendItem || {}, n = e.legendItem?.label, r = n?.element, i = t.label?.styles?.textOverflow === "ellipsis";
		if (!t.label || !t.group) return;
		let a = this.chart.langFormat("accessibility.legend.legendItem", {
			chart: this.chart,
			itemName: fa(e.name, this.chart.renderer.forExport),
			item: e
		}), o = {
			tabindex: -1,
			"aria-pressed": e.visible,
			"aria-label": a,
			title: ""
		};
		i && (r.textContent || "").indexOf("…") !== -1 && (o.title = n?.textStr);
		let s = t.group.div ? t.label : t.group;
		e.a11yProxyElement = this.proxyProvider.addProxyElement("legend", {
			click: t.label,
			visual: s.element
		}, "button", o);
	}
	getKeyboardNavigation() {
		let e = this.keyCodes, t = this, n = this.chart;
		return new li(n, {
			keyCodeMap: [
				[[
					e.left,
					e.right,
					e.up,
					e.down
				], function(e) {
					return t.onKbdArrowKey(this, e);
				}],
				[[e.enter, e.space], function() {
					return t.onKbdClick(this);
				}],
				[[e.pageDown, e.pageUp], function(n) {
					let r = n === e.pageDown ? 1 : -1;
					return t.highlightAdjacentLegendPage(r), this.response.success;
				}]
			],
			validate: function() {
				return t.shouldHaveLegendNavigation();
			},
			init: function() {
				n.highlightLegendItem(0), t.highlightedLegendItemIx = 0;
			},
			terminate: function() {
				t.highlightedLegendItemIx = -1, n.legend.allItems.forEach((e) => _a(!1, e));
			}
		});
	}
	onKbdArrowKey(e, t) {
		let { keyCodes: { left: n, up: r }, highlightedLegendItemIx: i, chart: a } = this, o = a.legend.allItems.length, s = a.options.accessibility.keyboardNavigation.wrapAround, c = t === n || t === r ? -1 : 1;
		return a.highlightLegendItem(i + c) ? this.highlightedLegendItemIx += c : s && o > 1 && (this.highlightedLegendItemIx = c > 0 ? 0 : o - 1, a.highlightLegendItem(this.highlightedLegendItemIx)), e.response.success;
	}
	onKbdClick(e) {
		let t = this.chart.legend.allItems[this.highlightedLegendItemIx];
		return t && t.a11yProxyElement && t.a11yProxyElement.click(), e.response.success;
	}
	shouldHaveLegendNavigation() {
		if (!ga(this.chart)) return !1;
		let e = this.chart, t = (e.options.legend || {}).accessibility || {};
		return !!(e.legend.display && t.keyboardNavigation && t.keyboardNavigation.enabled);
	}
	destroy() {
		this.removeProxies();
	}
};
(function(e) {
	function t(e) {
		let t = this.legend.allItems, n = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, r = t[e], i = r?.legendItem || {};
		if (r) {
			x(n) && t[n] && _a(!1, t[n]), ha(this.legend, e);
			let a = i.label, o = r.a11yProxyElement && r.a11yProxyElement.innerElement;
			return a && a.element && o && this.setFocusToElement(a, o), _a(!0, r), !0;
		}
		return !1;
	}
	function n(e, n) {
		let i = e.prototype;
		i.highlightLegendItem || (i.highlightLegendItem = t, I(n, "afterColorizeItem", r));
	}
	e.compose = n;
	function r(e) {
		let t = this.chart.options.accessibility, n = e.item;
		t.enabled && n && n.a11yProxyElement && n.a11yProxyElement.innerElement.setAttribute("aria-pressed", e.visible ? "true" : "false");
	}
})(va ||= {});
var ya = va, { isTouchDevice: ba } = z, xa = [], Sa;
function Ca(t, n) {
	if (e(xa, t)) {
		let e = t.prototype;
		Sa = n, e.callbacks.push(ka), I(t, "afterAddSeries", wa), I(t, "afterDrillUp", wa), I(t, "afterSetChartSize", Ta), I(t, "afterUpdate", Ea), I(t, "beforeRender", Da), I(t, "beforeShowResetZoom", Oa), I(t, "update", Aa);
	}
}
function wa() {
	this.navigator && this.navigator.setBaseSeries(void 0, !1);
}
function Ta() {
	let e = this.legend, t = this.navigator, n, r, i;
	if (t) {
		n = e && e.options, r = t.xAxis, i = t.yAxis;
		let { scrollbarHeight: a, scrollButtonSize: o } = t;
		this.inverted ? (t.left = t.opposite ? this.chartWidth - a - t.height : this.spacing[3] + a, t.top = this.plotTop + o) : (t.left = r.left ?? this.plotLeft + o, t.top = t.navigatorOptions.top || this.chartHeight - t.height - a - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (n && n.verticalAlign === "bottom" && n.layout !== "proximate" && n.enabled && !n.floating ? e.legendHeight + (n.margin ?? 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), r && i && (this.inverted ? r.options.left = i.options.left = t.left : r.options.top = i.options.top = t.top, r.setAxisSize(), i.setAxisSize());
	}
}
function Ea(e) {
	!this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new Sa(this), (e.redraw ?? !0) && this.redraw(e.animation));
}
function Da() {
	let e = this.options;
	(e.navigator.enabled || e.scrollbar.enabled) && (this.scroller = this.navigator = new Sa(this));
}
function Oa() {
	let e = this.options, t = e.navigator, n = e.rangeSelector;
	if ((t && t.enabled || n && n.enabled) && (!ba && this.zooming.type === "x" || ba && this.zooming.pinchType === "x")) return !1;
}
function ka(e) {
	let t = e.navigator;
	if (t && e.xAxis[0]) {
		let n = e.xAxis[0].getExtremes();
		t.render(n.min, n.max);
	}
}
function Aa(e) {
	let t = e.options.navigator || {}, n = e.options.scrollbar || {};
	!this.navigator && !this.scroller && (t.enabled || n.enabled) && (d(!0, this.options.navigator, t), d(!0, this.options.scrollbar, n), delete e.options.navigator, delete e.options.scrollbar);
}
var ja = { compose: Ca }, { composed: Ma, isTouchDevice: Na } = z;
function Pa() {
	let e = this;
	e.navigatorAxis ||= new Ia(e);
}
function Fa(e) {
	let t = this, n = t.chart, r = n.options, i = r.navigator, a = t.navigatorAxis, o = n.zooming.pinchType, s = r.rangeSelector, c = n.zooming.type, l;
	if (t.isXAxis && (i?.enabled || s?.enabled)) {
		if (c === "y" && e.trigger === "zoom") l = !1;
		else if ((e.trigger === "zoom" && c === "xy" || Na && o === "xy") && t.options.range) {
			let n = a.previousZoom;
			W(e.min) ? a.previousZoom = [t.min, t.max] : n && (e.min = n[0], e.max = n[1], a.previousZoom = void 0);
		}
	}
	l !== void 0 && e.preventDefault();
}
var Ia = class {
	static compose(t) {
		e(Ma, "Axis.Navigator") && (I(t, "init", Pa), I(t, "setExtremes", Fa));
	}
	constructor(e) {
		this.axis = e;
	}
	destroy() {
		this.axis = void 0;
	}
	toFixedRange(e, t, n, r) {
		let i = this.axis, a = (i.pointRange || 0) / 2, o = n ?? i.translate(e, !0, !i.horiz), s = r ?? i.translate(t, !0, !i.horiz);
		return W(n) || (o = A(o + a)), W(r) || (s = A(s - a)), (!x(o) || !x(s)) && (o = s = void 0), {
			min: o,
			max: s
		};
	}
}, { seriesTypes: La } = Y, Ra = {
	height: 40,
	margin: 22,
	maskInside: !0,
	handles: {
		width: 7,
		borderRadius: 0,
		height: 15,
		symbols: ["navigator-handle", "navigator-handle"],
		enabled: !0,
		lineWidth: 1,
		backgroundColor: "var(--highcharts-neutral-color-5)",
		borderColor: "var(--highcharts-neutral-color-40)"
	},
	maskFill: "color-mix(in srgb, var(--highcharts-highlight-color-60) 30%, transparent)",
	outlineColor: "var(--highcharts-neutral-color-40)",
	outlineWidth: 1,
	series: {
		type: La.areaspline === void 0 ? "line" : "areaspline",
		fillOpacity: .05,
		lineWidth: 1,
		compare: null,
		sonification: { enabled: !1 },
		dataGrouping: {
			approximation: "average",
			enabled: !0,
			groupPixelWidth: 2,
			firstAnchor: "firstPoint",
			anchor: "middle",
			lastAnchor: "lastPoint",
			units: [
				["millisecond", [
					1,
					2,
					5,
					10,
					20,
					25,
					50,
					100,
					200,
					500
				]],
				["second", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["minute", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["hour", [
					1,
					2,
					3,
					4,
					6,
					8,
					12
				]],
				["day", [
					1,
					2,
					3,
					4
				]],
				["week", [
					1,
					2,
					3
				]],
				["month", [
					1,
					3,
					6
				]],
				["year", null]
			]
		},
		dataLabels: {
			enabled: !1,
			zIndex: 2
		},
		id: "highcharts-navigator-series",
		className: "highcharts-navigator-series",
		lineColor: null,
		marker: { enabled: !1 },
		threshold: null
	},
	xAxis: {
		className: "highcharts-navigator-xaxis",
		tickLength: 0,
		lineWidth: 0,
		gridLineColor: "var(--highcharts-neutral-color-10)",
		id: "navigator-x-axis",
		gridLineWidth: 1,
		tickPixelInterval: 200,
		labels: {
			align: "left",
			style: {
				color: "var(--highcharts-neutral-color-100)",
				fontSize: "0.7em",
				opacity: .6,
				textOutline: "2px contrast"
			},
			x: 3,
			y: -4
		},
		crosshair: !1
	},
	yAxis: {
		className: "highcharts-navigator-yaxis",
		gridLineWidth: 0,
		startOnTick: !1,
		endOnTick: !1,
		minPadding: .1,
		id: "navigator-y-axis",
		maxPadding: .1,
		labels: { enabled: !1 },
		crosshair: !1,
		title: { text: void 0 },
		tickLength: 0,
		tickWidth: 0
	}
};
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Navigator/NavigatorSymbols.js
function za(e, t, n, r, i = {}) {
	let a = i.width ? i.width / 2 : n, o = N(Ee(i.borderRadius).radius, Math.min(a * 2, r));
	return r = i.height || r, [
		[
			"M",
			-1.5,
			r / 2 - 3.5
		],
		[
			"L",
			-1.5,
			r / 2 + 4.5
		],
		[
			"M",
			.5,
			r / 2 - 3.5
		],
		[
			"L",
			.5,
			r / 2 + 4.5
		],
		...Ue.rect(-a - 1, .5, a * 2 + 1, r, { r: o })
	];
}
var Ba = { "navigator-handle": za };
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Utilities/StockUtilities.js
function Va(e) {
	let t = this.xAxis[0];
	this.fixedRange = W(t.dataMax) && W(t.dataMin) && e ? Math.min(e, t.dataMax - t.dataMin) : e;
}
var Ha = { setFixedRange: Va }, { defaultOptions: Ua } = j, { composed: Wa } = z, { setFixedRange: Ga } = Ha;
function Ka(t, n, r) {
	Ia.compose(n), e(Wa, "Navigator") && (t.prototype.setFixedRange = Ga, R(st.prototype.symbols, Ba), R(Ua, { navigator: Ra }), I(r, "afterUpdate", qa));
}
function qa() {
	this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
}
var Ja = { compose: Ka }, { composed: Ya } = z, Xa;
(function(t) {
	let n;
	function r(t, r) {
		e(Ya, "Axis.Scrollbar") && (n = r, I(t, "afterGetOffset", a), I(t, "afterInit", o), I(t, "afterRender", s));
	}
	t.compose = r;
	function i(e) {
		let t = e.options?.min ?? e.min, n = e.options?.max ?? e.max;
		return {
			axisMin: t,
			axisMax: n,
			scrollMin: W(e.dataMin) ? Math.min(t, e.min ?? Infinity, e.dataMin, e.threshold ?? Infinity) : t,
			scrollMax: e.treeGrid?.adjustedMax ?? (W(e.dataMax) ? Math.max(n, e.max ?? -Infinity, e.dataMax, e.threshold ?? -Infinity) : n)
		};
	}
	function a() {
		let e = this, t = e.scrollbar, n = t && !t.options.opposite, r = e.horiz ? 2 : n ? 3 : 1;
		t && (e.chart.scrollbarsOffsets = [0, 0], e.chart.axisOffset[r] += t.size + (t.options.margin || 0));
	}
	function o() {
		let e = this;
		e.options?.scrollbar?.enabled ? (e.options.scrollbar.vertical = !e.horiz, e.options.startOnTick = e.options.endOnTick = !1, e.scrollbar = new n(e.chart.renderer, e.options.scrollbar, e.chart), I(e.scrollbar, "changed", function(t) {
			let { axisMin: n, axisMax: r, scrollMin: a, scrollMax: o } = i(e), s = e.toPixels(a), c = e.toPixels(o) - s, l, u;
			if (W(n) && W(r)) {
				if (e.horiz && !e.reversed || !e.horiz && e.reversed ? (l = Math.min(o, e.toValue(s + c * this.to)), u = Math.max(a, e.toValue(s + c * this.from))) : (l = Math.min(o, e.toValue(s + c * (1 - this.from))), u = Math.max(a, e.toValue(s + c * (1 - this.to)))), this.shouldUpdateExtremes(t.DOMType)) {
					let n = t.DOMType === "mousemove" || t.DOMType === "touchmove" ? !1 : void 0;
					e.setExtremes(A(u), A(l), !0, n, t);
				} else this.setRange(this.from, this.to);
			}
		})) : e.scrollbar &&= e.scrollbar.destroy();
	}
	function s() {
		let e = this, { scrollMin: t, scrollMax: n } = i(e), r = e.scrollbar, a = (e.axisTitleMargin || 0) + (e.titleOffset || 0), o = e.chart.scrollbarsOffsets, s = e.options.margin || 0, c, l, u;
		if (r && o) {
			if (e.horiz) e.opposite || (o[1] += a), r.position(e.left, e.top + e.height + 2 + o[1] - (e.opposite ? s : 0), e.width, e.height), e.opposite || (o[1] += s), c = 1;
			else {
				e.opposite && (o[0] += a);
				let t;
				t = r.options.opposite ? e.left + e.width + 2 + o[0] - (e.opposite ? 0 : s) : e.opposite ? 0 : s, r.position(t, e.top, e.width, e.height), e.opposite && (o[0] += s), c = 0;
			}
			if (o[c] += r.size + (r.options.margin || 0), isNaN(t) || isNaN(n) || !W(e.min) || !W(e.max) || W(e.dataMin) && e.dataMin === e.dataMax) r.setRange(0, 1);
			else if (e.min === e.max) {
				let t = e.pointRange / (e.dataMax + 1);
				l = t * e.min, u = t * (e.max + 1), r.setRange(l, u);
			} else l = (e.toPixels(e.min) - e.toPixels(t)) / (e.toPixels(n) - e.toPixels(t)), u = (e.toPixels(e.max) - e.toPixels(t)) / (e.toPixels(n) - e.toPixels(t)), e.horiz && !e.reversed || !e.horiz && e.reversed ? r.setRange(l, u) : r.setRange(1 - u, 1 - l);
		}
	}
})(Xa ||= {});
var Za = Xa, Qa = {
	height: 10,
	barBorderRadius: 5,
	buttonBorderRadius: 0,
	buttonsEnabled: !1,
	liveRedraw: void 0,
	margin: void 0,
	minWidth: 6,
	opposite: !0,
	step: .2,
	zIndex: 3,
	barBackgroundColor: "var(--highcharts-neutral-color-20)",
	barBorderWidth: 0,
	barBorderColor: "var(--highcharts-neutral-color-20)",
	buttonArrowColor: "var(--highcharts-neutral-color-80)",
	buttonBackgroundColor: "var(--highcharts-neutral-color-10)",
	buttonBorderColor: "var(--highcharts-neutral-color-20)",
	buttonBorderWidth: 1,
	rifleColor: "none",
	trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
	trackBorderColor: "var(--highcharts-neutral-color-20)",
	trackBorderRadius: 5,
	trackBorderWidth: 1
}, { defaultOptions: $a } = j, { composed: eo } = z, to = class t {
	static compose(n) {
		Za.compose(n, t), e(eo, "Scrollbar") && R($a, { scrollbar: Qa });
	}
	static swapXY(e, t) {
		return t && e.forEach((e) => {
			let t = e.length, n;
			for (let r = 0; r < t; r += 2) n = e[r + 1], typeof n == "number" && (e[r + 1] = e[r + 2], e[r + 2] = n);
		}), e;
	}
	constructor(e, t, n) {
		this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(e, t, n);
	}
	addEvents() {
		let e = this.options.inverted ? [1, 0] : [0, 1], t = this.scrollbarButtons, n = this.scrollbarGroup.element, r = this.track.element, i = this.mouseDownHandler.bind(this), a = this.mouseMoveHandler.bind(this), o = this.mouseUpHandler.bind(this), s = [
			[
				t[e[0]].element,
				"click",
				this.buttonToMinClick.bind(this)
			],
			[
				t[e[1]].element,
				"click",
				this.buttonToMaxClick.bind(this)
			],
			[
				r,
				"click",
				this.trackClick.bind(this)
			],
			[
				n,
				"mousedown",
				i
			],
			[
				n.ownerDocument,
				"mousemove",
				a
			],
			[
				n.ownerDocument,
				"mouseup",
				o
			],
			[
				n,
				"touchstart",
				i
			],
			[
				n.ownerDocument,
				"touchmove",
				a
			],
			[
				n.ownerDocument,
				"touchend",
				o
			]
		];
		s.forEach(function(e) {
			I.apply(null, e);
		}), this._events = s;
	}
	buttonToMaxClick(e) {
		let t = this, n = (t.to - t.from) * (t.options.step ?? .2);
		t.updatePosition(t.from + n, t.to + n), p(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	buttonToMinClick(e) {
		let t = this, n = A(t.to - t.from) * (t.options.step ?? .2);
		t.updatePosition(A(t.from - n), A(t.to - n)), p(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	cursorToScrollbarPosition(e) {
		let t = this, n = t.options, r = n.minWidth > t.calculatedWidth ? n.minWidth : 0;
		return {
			chartX: (e.chartX - t.x - t.xOffset) / (t.barWidth - r),
			chartY: (e.chartY - t.y - t.yOffset) / (t.barWidth - r)
		};
	}
	destroy() {
		let e = this, t = e.chart.scroller;
		e.removeEvents(), [
			"track",
			"scrollbarRifles",
			"scrollbar",
			"scrollbarGroup",
			"group"
		].forEach(function(t) {
			e[t] && e[t].destroy && (e[t] = e[t].destroy());
		}), t && e === t.scrollbar && (t.scrollbar = null, b(t.scrollbarButtons));
	}
	drawScrollbarButton(e) {
		let n = this, r = n.renderer, i = n.scrollbarButtons, a = n.options, o = n.size, s = r.g().add(n.group);
		if (i.push(s), a.buttonsEnabled) {
			let c = r.rect().addClass("highcharts-scrollbar-button").add(s);
			n.chart.styledMode || c.attr({
				stroke: a.buttonBorderColor,
				"stroke-width": a.buttonBorderWidth,
				fill: a.buttonBackgroundColor
			}), c.attr(c.crisp({
				x: -.5,
				y: -.5,
				width: o,
				height: o,
				r: a.buttonBorderRadius
			}, c.strokeWidth()));
			let l = r.path(t.swapXY([
				[
					"M",
					o / 2 + (e ? -1 : 1),
					o / 2 - 3
				],
				[
					"L",
					o / 2 + (e ? -1 : 1),
					o / 2 + 3
				],
				[
					"L",
					o / 2 + (e ? 2 : -2),
					o / 2
				]
			], a.vertical)).addClass("highcharts-scrollbar-arrow").add(i[e]);
			n.chart.styledMode || l.attr({ fill: a.buttonArrowColor });
		}
	}
	init(e, t, n) {
		let r = this;
		r.scrollbarButtons = [], r.renderer = e, r.userOptions = t, r.options = d(Qa, $a.scrollbar, t), r.options.margin = r.options.margin ?? 10, r.chart = n, r.size = r.options.size ?? r.options.height, t.enabled && (r.render(), r.addEvents());
	}
	mouseDownHandler(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.cursorToScrollbarPosition(n);
		t.chartX = r.chartX, t.chartY = r.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0;
	}
	mouseMoveHandler(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.options.vertical ? "chartY" : "chartX", i = t.initPositions || [], a, o, s;
		t.grabbedCenter && (!e.touches || e.touches[0][r] !== 0) && (o = t.cursorToScrollbarPosition(n)[r], a = t[r], s = o - a, t.hasDragged = !0, t.updatePosition(i[0] + s, i[1] + s), t.hasDragged && p(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMType: e.type,
			DOMEvent: e
		}));
	}
	mouseUpHandler(e) {
		let t = this;
		t.hasDragged && p(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMType: e.type,
			DOMEvent: e
		}), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null;
	}
	position(e, t, n, r) {
		let i = this, { buttonsEnabled: a, margin: o = 0, vertical: s } = i.options, c = i.rendered ? "animate" : "attr", l = r, u = 0;
		i.group.show(), i.x = e, i.y = t + this.trackBorderWidth, i.width = n, i.height = r, i.xOffset = l, i.yOffset = u, s ? (i.width = i.yOffset = n = u = i.size, i.xOffset = l = 0, i.yOffset = u = a ? i.size : 0, i.barWidth = r - (a ? n * 2 : 0), i.x = e += o) : (i.height = r = i.size, i.xOffset = l = a ? i.size : 0, i.barWidth = n - (a ? r * 2 : 0), i.y += o), i.group[c]({
			translateX: e,
			translateY: i.y
		}), i.track[c]({
			width: n,
			height: r
		}), i.scrollbarButtons[1][c]({
			translateX: s ? 0 : n - l,
			translateY: s ? r - u : 0
		});
	}
	removeEvents() {
		this._events.forEach(function(e) {
			V.apply(null, e);
		}), this._events.length = 0;
	}
	render() {
		let e = this, n = e.renderer, r = e.options, i = e.size, a = e.chart.styledMode, o = n.g("scrollbar").attr({ zIndex: r.zIndex }).hide().add();
		e.group = o, e.track = n.rect().addClass("highcharts-scrollbar-track").attr({
			r: r.trackBorderRadius || 0,
			height: i,
			width: i
		}).add(o), a || e.track.attr({
			fill: r.trackBackgroundColor,
			stroke: r.trackBorderColor,
			"stroke-width": r.trackBorderWidth
		});
		let s = e.trackBorderWidth = e.track.strokeWidth();
		e.track.attr({
			x: -y(0, s),
			y: -y(0, s)
		}), e.scrollbarGroup = n.g().add(o), e.scrollbar = n.rect().addClass("highcharts-scrollbar-thumb").attr({
			height: i - s,
			width: i - s,
			r: r.barBorderRadius || 0
		}).add(e.scrollbarGroup), e.scrollbarRifles = n.path(t.swapXY([
			[
				"M",
				-3,
				i / 4
			],
			[
				"L",
				-3,
				2 * i / 3
			],
			[
				"M",
				0,
				i / 4
			],
			[
				"L",
				0,
				2 * i / 3
			],
			[
				"M",
				3,
				i / 4
			],
			[
				"L",
				3,
				2 * i / 3
			]
		], r.vertical)).addClass("highcharts-scrollbar-rifles").add(e.scrollbarGroup), a || (e.scrollbar.attr({
			fill: r.barBackgroundColor,
			stroke: r.barBorderColor,
			"stroke-width": r.barBorderWidth
		}), e.scrollbarRifles.attr({
			stroke: r.rifleColor,
			"stroke-width": 1
		})), e.scrollbarStrokeWidth = e.scrollbar.strokeWidth(), e.scrollbarGroup.translate(-y(0, e.scrollbarStrokeWidth), -y(0, e.scrollbarStrokeWidth)), e.drawScrollbarButton(0), e.drawScrollbarButton(1);
	}
	setRange(e, t) {
		let n = this, r = n.options, i = r.vertical, a = r.minWidth, o = n.barWidth, s = this.rendered && !this.hasDragged && !(this.chart.navigator && this.chart.navigator.hasDragged) ? "animate" : "attr";
		if (!W(o)) return;
		let c = o * Math.min(t, 1), l, u;
		e = Math.max(e, 0), l = Math.ceil(o * e), n.calculatedWidth = u = A(c - l), u < a && (l = (o - a + u) * e, u = a);
		let d = Math.floor(l + n.xOffset + n.yOffset), f = u / 2 - .5;
		n.from = e, n.to = t, i ? (n.scrollbarGroup[s]({ translateY: d }), n.scrollbar[s]({ height: u }), n.scrollbarRifles[s]({ translateY: f }), n.scrollbarTop = d, n.scrollbarLeft = 0) : (n.scrollbarGroup[s]({ translateX: d }), n.scrollbar[s]({ width: u }), n.scrollbarRifles[s]({ translateX: f }), n.scrollbarLeft = d, n.scrollbarTop = 0), u <= 12 ? n.scrollbarRifles.hide() : n.scrollbarRifles.show(), r.showFull === !1 && (e <= 0 && t >= 1 ? n.group.hide() : n.group.show()), n.rendered = !0;
	}
	shouldUpdateExtremes(e) {
		return (this.options.liveRedraw ?? (z.svg && !z.isTouchDevice && !this.chart.boosted)) || e === "mouseup" || e === "touchend" || !W(e);
	}
	trackClick(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.to - t.from, i = t.y + t.scrollbarTop, a = t.x + t.scrollbarLeft;
		t.options.vertical && n.chartY > i || !t.options.vertical && n.chartX > a ? t.updatePosition(t.from + r, t.to + r) : t.updatePosition(t.from - r, t.to - r), p(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	update(e) {
		this.destroy(), this.init(this.chart.renderer, d(!0, this.options, e), this.chart);
	}
	updatePosition(e, t) {
		t > 1 && (e = A(1 - A(t - e)), t = 1), e < 0 && (t = A(t - e), e = 0), this.from = e, this.to = t;
	}
};
to.defaultOptions = Qa;
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Navigator/Navigator.js
var { defaultOptions: no } = j, { isTouchDevice: ro } = z;
function io(e, ...t) {
	let n = [].filter.call(t, x);
	if (n.length) return Math[e].apply(0, n);
}
var ao = class e {
	static compose(t, n, r) {
		ja.compose(t, e), Ja.compose(t, n, r);
	}
	constructor(e) {
		this.isDirty = !1, this.scrollbarHeight = 0, this.init(e);
	}
	drawHandle(e, t, n, r) {
		let i = this, a = i.navigatorOptions.handles.height;
		i.handles[t][r](n ? {
			translateX: Math.round(i.left + i.height / 2),
			translateY: Math.round(i.top + parseInt(e, 10) + .5 - a)
		} : {
			translateX: Math.round(i.left + parseInt(e, 10)),
			translateY: Math.round(i.top + i.height / 2 - a / 2 - 1)
		});
	}
	drawOutline(e, t, n, r) {
		let i = this, a = i.navigatorOptions.maskInside, o = i.outline.strokeWidth(), s = o / 2, c = o % 2 / 2, l = i.scrollButtonSize, u = i.size, d = i.top, f = i.height, p = d - s, m = d + f, h = i.left, g, _;
		n ? (g = d + t + c, t = d + e + c, _ = [
			[
				"M",
				h + f,
				d - l - c
			],
			[
				"L",
				h + f,
				g
			],
			[
				"L",
				h,
				g
			],
			[
				"M",
				h,
				t
			],
			[
				"L",
				h + f,
				t
			],
			[
				"L",
				h + f,
				d + u + l
			]
		], a && _.push([
			"M",
			h + f,
			g - s
		], [
			"L",
			h + f,
			t + s
		])) : (h -= l, e += h + l - c, t += h + l - c, _ = [
			[
				"M",
				h,
				p
			],
			[
				"L",
				e,
				p
			],
			[
				"L",
				e,
				m
			],
			[
				"M",
				t,
				m
			],
			[
				"L",
				t,
				p
			],
			[
				"L",
				h + u + l * 2,
				p
			]
		], a && _.push([
			"M",
			e - s,
			p
		], [
			"L",
			t + s,
			p
		])), i.outline[r]({ d: _ });
	}
	drawMasks(e, t, n, r) {
		let i = this, a = i.left, o = i.top, s = i.height, c, l, u, d;
		n ? (u = [
			a,
			a,
			a
		], d = [
			o,
			o + e,
			o + t
		], l = [
			s,
			s,
			s
		], c = [
			e,
			t - e,
			i.size - t
		]) : (u = [
			a,
			a + e,
			a + t
		], d = [
			o,
			o,
			o
		], l = [
			e,
			t - e,
			i.size - t
		], c = [
			s,
			s,
			s
		]), i.shades.forEach((e, t) => {
			e[r]({
				x: u[t],
				y: d[t],
				width: l[t],
				height: c[t]
			});
		});
	}
	renderElements() {
		let e = this, t = e.navigatorOptions, n = t.maskInside, r = e.chart, i = r.inverted, a = r.renderer, o = { cursor: i ? "ns-resize" : "ew-resize" }, s = e.navigatorGroup ??= a.g("navigator").attr({
			zIndex: 8,
			visibility: "hidden"
		}).add();
		if ([
			!n,
			n,
			!n
		].forEach((n, i) => {
			let c = e.shades[i] ?? (e.shades[i] = a.rect().addClass("highcharts-navigator-mask" + (i === 1 ? "-inside" : "-outside")).add(s));
			r.styledMode || (c.attr({ fill: n ? t.maskFill : "rgba(0,0,0,0)" }), i === 1 && c.css(o));
		}), e.outline ||= a.path().addClass("highcharts-navigator-outline").add(s), r.styledMode || e.outline.attr({
			"stroke-width": t.outlineWidth,
			stroke: t.outlineColor
		}), t.handles?.enabled) {
			let n = !1, i = t.handles, { height: c, width: l } = i;
			[0, 1].forEach((t) => {
				let u = i.symbols[t];
				n ||= e.handles[t]?.symbolName !== u, n && (e.handles[t]?.destroy(), e.handles[t] = a.symbol(u, -l / 2 - 1, 0, l, c, i), e.handles[t].attr({ zIndex: 7 - t }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t]).add(s)), r.inverted && e.handles[t].attr({
					rotation: 90,
					rotationOriginX: Math.floor(-l / 2),
					rotationOriginY: (c + l) / 2
				}), r.styledMode || e.handles[t].attr({
					fill: i.backgroundColor,
					stroke: i.borderColor,
					"stroke-width": i.lineWidth,
					width: i.width,
					height: i.height,
					x: -l / 2 - 1,
					y: 0
				}).css(o);
			}), n && (e.partsEventsToUnbind?.forEach((e) => {
				e();
			}), e.partsEventsToUnbind = [...e.getPartsEvents("mousedown"), ...e.getPartsEvents("touchstart")]);
		}
	}
	update(e, t = !1) {
		let n = this.chart, r = n.options.chart.inverted !== n.scrollbar?.options.vertical;
		if (d(!0, n.options.navigator, e), this.navigatorOptions = n.options.navigator || {}, this.setOpposite(), W(e.enabled) || r) return this.destroy(), this.navigatorEnabled = e.enabled || this.navigatorEnabled, this.init(n);
		if (this.navigatorEnabled && (this.isDirty = !0, e.adaptToUpdatedData === !1 && this.baseSeries.forEach((e) => {
			V(e, "updatedData", this.updatedDataHandler);
		}, this), e.adaptToUpdatedData && this.baseSeries.forEach((e) => {
			e.eventsToUnbind.push(I(e, "updatedData", this.updatedDataHandler));
		}, this), (e.series || e.baseSeries) && this.setBaseSeries(void 0, !1), e.height || e.xAxis || e.yAxis)) {
			this.height = e.height ?? this.height;
			let t = this.getXAxisOffsets();
			this.xAxis.update({
				...e.xAxis,
				offsets: t,
				[n.inverted ? "width" : "height"]: this.height,
				[n.inverted ? "height" : "width"]: void 0
			}, !1), this.yAxis.update({
				...e.yAxis,
				[n.inverted ? "width" : "height"]: this.height
			}, !1);
		}
		t && n.redraw();
	}
	render(e, t, n, r) {
		let i = this, a = i.chart, o = i.xAxis, s = o.pointRange || 0, c = o.navigatorAxis.fake ? a.xAxis[0] : o, l = i.navigatorEnabled, u = i.rendered, d = a.inverted, f = a.xAxis[0].minRange, m = a.xAxis[0].options.maxRange, h = i.scrollButtonSize, g, _, v, y = i.scrollbarHeight, b, S;
		if (this.hasDragged && !W(n)) return;
		if (this.isDirty && this.renderElements(), e = A(e - s / 2), t = A(t + s / 2), !x(e) || !x(t)) {
			if (u) n = 0, r = o.width ?? c.width;
			else return;
		}
		i.left = o.left ?? a.plotLeft + h + (d ? a.plotWidth : 0);
		let C = i.size = b = o.len ?? (d ? a.plotHeight : a.plotWidth) - 2 * h;
		g = d ? y : b + 2 * h, n ??= o.toPixels(e, !0), r ??= o.toPixels(t, !0), (!x(n) || Math.abs(n) === Infinity) && (n = 0, r = g);
		let w = o.toValue(n, !0), T = o.toValue(r, !0), E = Math.abs(A(T - w));
		W(f) && E < f ? this.grabbedLeft ? n = o.toPixels(T - f - s, !0) : this.grabbedRight && (r = o.toPixels(w + f + s, !0)) : W(m) && A(E - s) > m && (this.grabbedLeft ? n = o.toPixels(T - m - s, !0) : this.grabbedRight && (r = o.toPixels(w + m + s, !0))), i.zoomedMax = G(Math.max(n, r), 0, C), i.zoomedMin = G(i.fixedWidth ? i.zoomedMax - i.fixedWidth : Math.min(n, r), 0, C), i.range = i.zoomedMax - i.zoomedMin, C = Math.round(i.zoomedMax);
		let D = Math.round(i.zoomedMin);
		l && (i.navigatorGroup.attr({ visibility: "inherit" }), S = u && !i.hasDragged ? "animate" : "attr", i.drawMasks(D, C, d, S), i.drawOutline(D, C, d, S), i.navigatorOptions.handles?.enabled && (i.drawHandle(D, 0, d, S), i.drawHandle(C, 1, d, S))), i.scrollbar && (d ? (v = i.top - h, _ = i.left - y + (l || !c.opposite ? 0 : (c.titleOffset || 0) + c.axisTitleMargin), y = b + 2 * h) : (v = i.top + (l ? i.height : -y), _ = i.left - h), i.scrollbar.position(_, v, g, y), i.scrollbar.setRange(i.zoomedMin / (b || 1), i.zoomedMax / (b || 1))), i.rendered = !0, this.isDirty = !1, p(this, "afterRender");
	}
	addMouseEvents() {
		let e = this, t = e.chart, n = t.container, r = [], i, a;
		e.mouseMoveHandler = i = function(t) {
			e.onMouseMove(t);
		}, e.mouseUpHandler = a = function(t) {
			e.onMouseUp(t);
		}, r.push(I(t.renderTo, "mousemove", i), I(n.ownerDocument, "mouseup", a), I(t.renderTo, "touchmove", i), I(n.ownerDocument, "touchend", a)), e.eventsToUnbind = r, e.series && e.series[0] && r.push(I(e.series[0].xAxis, "foundExtremes", function() {
			t.navigator?.modifyNavigatorAxisExtremes();
		}));
	}
	getPartsEvents(e) {
		let t = this, n = [];
		return ["shades", "handles"].forEach((r) => {
			t[r].forEach(function(i, a) {
				n.push(I(i.element, e, function(e) {
					t[`${r}Mousedown`](e, a);
				}));
			});
		}), n;
	}
	shadesMousedown(e, t) {
		e = this.chart.pointer?.normalize(e) || e;
		let n = this, r = n.chart, i = n.xAxis, a = n.zoomedMin, o = n.size, s = n.range, c = n.left, l = e.chartX, u, d, f, m;
		r.inverted && (l = e.chartY, c = n.top), t === 1 ? (n.grabbedCenter = l, n.fixedWidth = s, n.dragOffset = l - a) : (m = l - c - s / 2, t === 0 ? m = Math.max(0, m) : t === 2 && m + s >= o && (m = o - s, n.reversedExtremes ? (m -= s, d = n.getUnionExtremes()?.dataMin) : u = n.getUnionExtremes()?.dataMax), m !== a && (n.fixedWidth = s, f = i.navigatorAxis.toFixedRange(m, m + s, d, u), W(f.min) && p(this, "setRange", {
			min: Math.min(f.min, f.max),
			max: Math.max(f.min, f.max),
			redraw: !0,
			eventArguments: { trigger: "navigator" }
		})));
	}
	handlesMousedown(e, t) {
		e = this.chart.pointer?.normalize(e) || e;
		let n = this, r = n.chart, i = r.xAxis[0], a = n.reversedExtremes;
		t === 0 ? (n.grabbedLeft = !0, n.otherHandlePos = n.zoomedMax, n.fixedExtreme = a ? i.min : i.max) : (n.grabbedRight = !0, n.otherHandlePos = n.zoomedMin, n.fixedExtreme = a ? i.max : i.min), r.setFixedRange(void 0);
	}
	onMouseMove(e) {
		let t = this, n = t.chart, r = t.navigatorSize, i = t.range, a = t.dragOffset, o = n.inverted, s = t.left, c;
		(!e.touches || e.touches[0].pageX !== 0) && (e = n.pointer?.normalize(e) || e, c = e.chartX, o && (s = t.top, c = e.chartY), t.grabbedLeft ? (t.hasDragged = !0, t.render(0, 0, c - s, t.otherHandlePos)) : t.grabbedRight ? (t.hasDragged = !0, t.render(0, 0, t.otherHandlePos, c - s)) : t.grabbedCenter && a && (t.hasDragged = !0, c < a ? c = a : c > r + a - i && (c = r + a - i), t.render(0, 0, c - a, c - a + i)), t.hasDragged && (t.scrollbarOptions?.liveRedraw ?? (!ro && !this.chart.boosted)) && (e.DOMType = e.type, setTimeout(function() {
			t.onMouseUp(e);
		}, 0)));
	}
	onMouseUp(e) {
		let t = this, n = t.chart, r = t.xAxis, i = t.scrollbar, a = e.DOMEvent || e, o = n.inverted, s = t.rendered && !t.hasDragged ? "animate" : "attr", c, l, u, d, f, m;
		(t.hasDragged && (!i || !i.hasDragged) || e.trigger === "scrollbar") && (u = t.getUnionExtremes(), t.zoomedMin === t.otherHandlePos ? d = t.fixedExtreme : t.zoomedMax === t.otherHandlePos && (f = t.fixedExtreme), t.zoomedMax === t.size && (f = t.reversedExtremes ? u.dataMin : u.dataMax), t.zoomedMin === 0 && (d = t.reversedExtremes ? u.dataMax : u.dataMin), m = r.navigatorAxis.toFixedRange(t.zoomedMin, t.zoomedMax, d, f), W(m.min) && p(this, "setRange", {
			min: Math.min(m.min, m.max),
			max: Math.max(m.min, m.max),
			redraw: !0,
			animation: !t.hasDragged && null,
			eventArguments: {
				trigger: "navigator",
				triggerOp: "navigator-drag",
				DOMEvent: a
			}
		})), e.DOMType !== "mousemove" && e.DOMType !== "touchmove" && (t.grabbedLeft = t.grabbedRight = t.grabbedCenter = t.fixedWidth = t.fixedExtreme = t.otherHandlePos = t.hasDragged = t.dragOffset = null), t.navigatorEnabled && x(t.zoomedMin) && x(t.zoomedMax) && (l = Math.round(t.zoomedMin), c = Math.round(t.zoomedMax), t.shades && t.drawMasks(l, c, o, s), t.outline && t.drawOutline(l, c, o, s), t.navigatorOptions.handles?.enabled && Object.keys(t.handles).length === t.handles.length && (t.drawHandle(l, 0, o, s), t.drawHandle(c, 1, o, s)));
	}
	removeEvents() {
		this.eventsToUnbind?.forEach((e) => {
			e();
		}), this.eventsToUnbind = void 0, this.removeBaseSeriesEvents();
	}
	removeBaseSeriesEvents() {
		let e = this.baseSeries || [];
		this.navigatorEnabled && e[0] && (this.navigatorOptions.adaptToUpdatedData !== !1 && e.forEach(function(e) {
			V(e, "updatedData", this.updatedDataHandler);
		}, this), e[0].xAxis && V(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
	}
	getXAxisOffsets() {
		return this.chart.inverted ? [
			this.scrollButtonSize,
			0,
			-this.scrollButtonSize,
			0
		] : [
			0,
			-this.scrollButtonSize,
			0,
			this.scrollButtonSize
		];
	}
	init(e) {
		let t = e.options, n = t.navigator || {}, r = n.enabled, i = t.scrollbar || {}, a = i.enabled, o = r && n.height || 0, s = a && i.height || 0, c = i.buttonsEnabled && s || 0;
		this.handles = [], this.shades = [], this.chart = e, this.setBaseSeries(), this.height = o, this.scrollbarHeight = s, this.scrollButtonSize = c, this.scrollbarEnabled = a, this.navigatorEnabled = !!r, this.navigatorOptions = n, this.scrollbarOptions = i, this.setOpposite();
		let l = this, u = l.baseSeries, f = e.xAxis.length, p = e.yAxis.length, m = u && u[0] && u[0].xAxis || e.xAxis[0] || { options: {} };
		if (e.isDirtyBox = !0, l.navigatorEnabled) {
			let t = this.getXAxisOffsets();
			l.xAxis = new Ct(e, d({
				breaks: m.options.breaks,
				ordinal: m.options.ordinal,
				overscroll: m.options.overscroll
			}, n.xAxis, {
				type: "datetime",
				yAxis: n.yAxis?.id,
				index: f,
				isInternal: !0,
				offset: 0,
				keepOrdinalPadding: !0,
				startOnTick: !1,
				endOnTick: !1,
				minPadding: m.options.ordinal ? 0 : m.options.minPadding,
				maxPadding: m.options.ordinal ? 0 : m.options.maxPadding,
				zoomEnabled: !1
			}, e.inverted ? {
				offsets: t,
				width: o
			} : {
				offsets: t,
				height: o
			}), "xAxis"), l.yAxis = new Ct(e, d(n.yAxis, {
				alignTicks: !1,
				offset: 0,
				index: p,
				isInternal: !0,
				reversed: (n.yAxis && n.yAxis.reversed) ?? (e.yAxis[0] && e.yAxis[0].reversed) ?? !1,
				zoomEnabled: !1
			}, e.inverted ? { width: o } : { height: o }), "yAxis"), l.xAxis.clippable = !1, l.yAxis.clippable = !1, u || n.series?.data || n.series?.dataTable ? l.updateNavigatorSeries(!1) : e.series.length === 0 && (l.unbindRedraw = I(e, "beforeRedraw", function() {
				e.series.length > 0 && !l.series && (l.setBaseSeries(), l.unbindRedraw?.());
			})), l.reversedExtremes = e.inverted && !l.xAxis.reversed || !e.inverted && l.xAxis.reversed, l.renderElements(), l.addMouseEvents();
		} else l.xAxis = {
			chart: e,
			navigatorAxis: { fake: !0 },
			translate: function(t, n) {
				let r = e.xAxis[0], i = r.getExtremes(), a = r.len - 2 * c, o = io("min", r.options.min, i.dataMin), s = io("max", r.options.max, i.dataMax) - o;
				return n ? t * s / a + o : a * (t - o) / s;
			},
			toPixels: function(e) {
				return this.translate(e);
			},
			toValue: function(e) {
				return this.translate(e, !0);
			}
		}, l.xAxis.navigatorAxis.axis = l.xAxis, l.xAxis.navigatorAxis.toFixedRange = Ia.prototype.toFixedRange.bind(l.xAxis.navigatorAxis);
		if (e.options.scrollbar?.enabled) {
			let t = d(e.options.scrollbar, { vertical: e.inverted });
			x(t.margin) || (t.margin = e.inverted ? -3 : 3), e.scrollbar = l.scrollbar = new to(e.renderer, t, e), I(l.scrollbar, "changed", function(e) {
				let t = l.size, n = t * this.to, r = t * this.from;
				l.hasDragged = l.scrollbar?.hasDragged, l.render(0, 0, r, n), this.shouldUpdateExtremes(e.DOMType) && setTimeout(function() {
					l.onMouseUp(e);
				});
			});
		}
		l.addBaseSeriesEvents(), l.addChartEvents();
	}
	setOpposite() {
		let e = this.navigatorOptions, t = this.navigatorEnabled, n = this.chart;
		this.opposite = e.opposite ?? !(t || !n.inverted);
	}
	getUnionExtremes(e) {
		let t = this.chart.xAxis[0], n = this.chart.time, r = this.xAxis, i = r.options, a = t.options, o;
		return (!e || t.dataMin !== null) && (o = {
			dataMin: n.parse(i?.min) ?? io("min", n.parse(a.min), t.dataMin, r.dataMin, r.min),
			dataMax: n.parse(i?.max) ?? io("max", n.parse(a.max), t.dataMax, r.dataMax, r.max)
		}), o;
	}
	setBaseSeries(e, t) {
		let n = this.chart, r = this.baseSeries = [];
		e = e || n.options.navigator?.baseSeries || (n.series.length ? L(n.series, (e) => !e.options.isInternal).index : 0), (n.series || []).forEach((t, n) => {
			!t.options.isInternal && (t.options.showInNavigator || (n === e || t.options.id === e) && t.options.showInNavigator !== !1) && r.push(t);
		}), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, t);
	}
	updateNavigatorSeries(e, t) {
		let n = this, r = n.chart, i = n.baseSeries, a = {
			enableMouseTracking: !1,
			index: null,
			linkedTo: null,
			group: "nav",
			padXAxis: !1,
			xAxis: this.navigatorOptions.xAxis?.id,
			yAxis: this.navigatorOptions.yAxis?.id,
			showInLegend: !1,
			stacking: void 0,
			isInternal: !0,
			states: { inactive: { opacity: 1 } }
		}, o = n.series = (n.series || []).filter((e) => {
			let t = e.baseSeries;
			return t && i.indexOf(t) < 0 ? (t && (V(t, "updatedData", n.updatedDataHandler), delete t.navigatorSeries), e.chart && e.destroy(), !1) : !0;
		}), s, c, l = n.navigatorOptions.series, u;
		if (i && i.length && i.forEach((e) => {
			let f = e.navigatorSeries, m = R({
				color: e.color,
				visible: e.visible
			}, K(l) ? no.navigator.series : l);
			if (f && n.navigatorOptions.adaptToUpdatedData === !1) return;
			a.name = "Navigator " + i.length, s = e.options || {}, u = s.navigatorOptions || {}, m.dataLabels = B(m.dataLabels), c = d(s, a, m, u), c.pointRange = m.pointRange ?? u.pointRange ?? no.plotOptions[c.type || "line"]?.pointRange;
			let h = u.data || m.data, g = u.dataTable || m.dataTable;
			n.hasNavigatorData = n.hasNavigatorData || !!h || !!g, c.data = h || s.data?.slice(0), c.dataTable = g || s.dataTable, f && f.options ? f.update(c, t) : (e.navigatorSeries = r.initSeries(c), p(e.navigatorSeries, "afterUpdate"), e.navigatorSeries.baseSeries = e, o.push(e.navigatorSeries));
		}), (l?.data || l?.dataTable) && !(i && i.length) || K(l)) {
			let e = r.options.colors || [];
			n.hasNavigatorData = !1, l = B(l), l.forEach((t, i) => {
				a.name = "Navigator " + (o.length + 1), c = d(no.navigator?.series, { color: r.series[i] && !r.series[i].options.isInternal && r.series[i].color || e[i] || e[0] }, a, t), c.data = t.data, c.dataTable = t.dataTable, (c.data || c.dataTable) && (n.hasNavigatorData = !0, o.push(r.initSeries(c)));
			});
		}
		e && this.addBaseSeriesEvents();
	}
	addBaseSeriesEvents() {
		let e = this, t = e.baseSeries || [];
		t[0] && t[0].xAxis && t[0].eventsToUnbind.push(I(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), t.forEach((n) => {
			n.eventsToUnbind.push(I(n, "show", function() {
				this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
			})), n.eventsToUnbind.push(I(n, "hide", function() {
				this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
			})), this.navigatorOptions.adaptToUpdatedData !== !1 && n.xAxis && n.eventsToUnbind.push(I(n, "updatedData", this.updatedDataHandler)), n.eventsToUnbind.push(I(n, "remove", function() {
				t && h(t, n), this.navigatorSeries && e.series && (h(e.series, this.navigatorSeries), W(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
			}));
		});
	}
	getBaseSeriesMin(e) {
		return this.baseSeries.reduce(function(e, t) {
			return Math.min(e, t.getColumn("x")[0] ?? e);
		}, e);
	}
	modifyNavigatorAxisExtremes() {
		let e = this.xAxis;
		if (e.getExtremes !== void 0) {
			let t = this.getUnionExtremes(!0);
			t && (t.dataMin !== e.min || t.dataMax !== e.max) && (e.min = t.dataMin, e.max = t.dataMax);
		}
	}
	modifyBaseAxisExtremes() {
		let e = this, t = e.chart.navigator, n = e.getExtremes(), r = n.min, i = n.max, a = n.dataMin, o = n.dataMax, s = i - r, c = t?.stickToMin, l = t?.stickToMax, u = e.ordinal?.convertOverscroll(e.options.overscroll) ?? 0, d = t.series && t.series[0], f = !!e.setExtremes, p = e.eventArgs && e.eventArgs.trigger === "rangeSelectorButton", m, h;
		p || (c && (h = a, m = h + s), l && (m = o + u, c || (h = Math.max(a, m - s, t.getBaseSeriesMin(d && d.xData ? d.xData[0] : -Number.MAX_VALUE)))), f && (c || l) && x(h) && (e.min = e.userMin = h, e.max = e.userMax = m)), t.stickToMin = t.stickToMax = null;
	}
	updatedDataHandler() {
		let e = this.chart.navigator, t = this, n = this.navigatorSeries, r = e.reversedExtremes ? Math.round(e.zoomedMin) === 0 : Math.round(e.zoomedMax) >= Math.round(e.size);
		e.stickToMax = (this.chart.options.navigator && this.chart.options.navigator.stickToMax) ?? r, e.stickToMin = e.shouldStickToMin(t, e), n && !e.hasNavigatorData && (n.options.pointStart = t.getColumn("x")[0], n.setData(t.options.data || t.options.dataTable, !1, void 0, !1));
	}
	shouldStickToMin(e, t) {
		let n = t.getBaseSeriesMin(e.getColumn("x")[0]), r = e.xAxis, i = r.max, a = r.min, o = r.options.range, s = !0;
		return s = x(i) && x(a) ? o && i - n > 0 ? i - n < o : a <= n : !1, s;
	}
	addChartEvents() {
		this.eventsToUnbind ||= [], this.eventsToUnbind.push(I(this.chart, "redraw", function() {
			let e = this.navigator, t = e && (e.baseSeries && e.baseSeries[0] && e.baseSeries[0].xAxis || this.xAxis[0]);
			t && e.render(t.min, t.max);
		}), I(this.chart, "getMargins", function() {
			let e = this, t = e.navigator, n = t.opposite ? "plotTop" : "marginBottom";
			e.inverted && (n = t.opposite ? "marginRight" : "plotLeft"), e[n] = (e[n] || 0) + (t.navigatorEnabled || !e.inverted ? t.height + (this.scrollbar?.options.margin || 0) + t.scrollbarHeight : 0) + (t.navigatorOptions.margin || 0);
		}), I(this, "setRange", function(e) {
			this.chart.xAxis[0].setExtremes(e.min, e.max, e.redraw, e.animation, e.eventArguments);
		}));
	}
	destroy() {
		this.removeEvents(), this.xAxis && (h(this.chart.xAxis, this.xAxis), h(this.chart.axes, this.xAxis)), this.yAxis && (h(this.chart.yAxis, this.yAxis), h(this.chart.axes, this.yAxis)), b(this.series || []), [
			"series",
			"xAxis",
			"yAxis",
			"shades",
			"outline",
			"scrollbarTrack",
			"scrollbarRifles",
			"scrollbarGroup",
			"scrollbar",
			"navigatorGroup",
			"rendered"
		].forEach((e) => {
			this[e] && this[e].destroy && this[e].destroy(), this[e] = null;
		}), [this.handles].forEach((e) => {
			b(e);
		}), this.baseSeries.forEach((e) => {
			e.navigatorSeries = void 0;
		}), this.navigatorEnabled = !1;
	}
}, { format: oo } = J, { getFakeMouseEvent: so } = Z, { getAxisRangeDescription: co, fireEventOnWrappedOrUnwrappedElement: lo } = Q, uo = class extends ci {
	init() {
		let e = this.chart, t = this;
		this.announcer = new bi(e, "polite"), this.addEvent(ao, "afterRender", function() {
			this.chart === t.chart && this.chart.renderer && k(() => {
				t.proxyProvider.updateGroupProxyElementPositions("navigator"), t.updateHandleValues();
			}, me(this.chart.renderer.globalAnimation ?? !0).duration);
		});
	}
	onChartUpdate() {
		let e = this.chart, t = e.options, n = t.navigator;
		if (n.enabled && n.accessibility?.enabled) {
			let n = t.accessibility.landmarkVerbosity, r = t.lang.accessibility?.navigator.groupLabel;
			this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", {
				role: n === "all" ? "region" : "group",
				"aria-label": oo(r, { chart: e }, e)
			});
			let i = t.lang.accessibility?.navigator.handleLabel;
			[0, 1].forEach((t) => {
				let n = this.getHandleByIx(t);
				if (n) {
					let r = this.proxyProvider.addProxyElement("navigator", { click: n }, "input", {
						type: "range",
						"aria-label": oo(i, {
							handleIx: t,
							chart: e
						}, e)
					});
					this[t ? "maxHandleProxy" : "minHandleProxy"] = r.innerElement, r.innerElement.style.pointerEvents = "none", r.innerElement.oninput = () => this.updateNavigator();
				}
			}), this.updateHandleValues();
		} else this.proxyProvider.removeGroup("navigator");
	}
	getNavigatorHandleNavigation(e) {
		let t = this, n = this.chart, r = e ? this.maxHandleProxy : this.minHandleProxy, i = this.keyCodes;
		return new li(n, {
			keyCodeMap: [[[
				i.left,
				i.right,
				i.up,
				i.down
			], function(a) {
				if (r) {
					let o = a === i.left || a === i.up ? -1 : 1;
					r.value = "" + G(parseFloat(r.value) + o, 0, 100), t.updateNavigator(() => {
						let i = t.getHandleByIx(e);
						i && n.setFocusToElement(i, r);
					});
				}
				return this.response.success;
			}]],
			init: () => {
				n.setFocusToElement(this.getHandleByIx(e), r);
			},
			validate: () => !!(this.getHandleByIx(e) && r && n.options.navigator.accessibility?.enabled)
		});
	}
	getKeyboardNavigation() {
		return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
	}
	destroy() {
		this.updateNavigatorThrottleTimer && v(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
	}
	updateHandleValues() {
		let e = this.chart.navigator;
		if (e && this.minHandleProxy && this.maxHandleProxy) {
			let t = e.size;
			this.minHandleProxy.value = "" + Math.round(e.zoomedMin / t * 100), this.maxHandleProxy.value = "" + Math.round(e.zoomedMax / t * 100);
		}
	}
	getHandleByIx(e) {
		let t = this.chart.navigator;
		return t && t.handles && t.handles[e];
	}
	updateNavigator(e) {
		let t = (e) => {
			let t = this.chart, { navigator: n, pointer: r } = t, i = this.chart.accessibility?.keyboardNavigation;
			if (n && r && this.minHandleProxy && this.maxHandleProxy) {
				let a = r.getChartPosition(), o = parseFloat(this.minHandleProxy.value) / 100 * n.size, s = parseFloat(this.maxHandleProxy.value) / 100 * n.size;
				[
					[
						0,
						"mousedown",
						n.zoomedMin
					],
					[
						0,
						"mousemove",
						o
					],
					[
						0,
						"mouseup",
						o
					],
					[
						1,
						"mousedown",
						n.zoomedMax
					],
					[
						1,
						"mousemove",
						s
					],
					[
						1,
						"mouseup",
						s
					]
				].forEach(([e, t, r]) => {
					let i = this.getHandleByIx(e)?.element;
					i && lo(i, so(t, {
						x: a.left + n.left + r,
						y: a.top + n.top
					}, i));
				}), i && (i.keyboardReset = !1), e && e();
				let c = t.options.lang.accessibility?.navigator.changeAnnouncement, l = co(t.xAxis[0]);
				this.announcer.announce(oo(c, {
					axisRangeDescription: l,
					chart: t
				}, t));
			}
		};
		this.updateNavigatorThrottleTimer && v(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(t.bind(this, e), 20);
	}
}, { getPointAnnotationTexts: fo } = ki, { getAxisDescription: po, getSeriesFirstPointElement: mo, getSeriesA11yElement: ho, unhideChartElementFromAT: go } = Q, { format: _o, numberFormat: vo } = J, { composed: yo } = z, { reverseChildNodes: bo, stripHTMLTagsFromString: xo } = Z;
function So(t) {
	e(yo, "A11y.SD") && pe(t.prototype, "applyOptions", Co);
}
function Co(e, ...t) {
	let n = e.apply(this, t);
	return n.hasMockGraphic && !n.isNull && (n.graphic = n.graphic?.destroy(), delete n.hasMockGraphic), n;
}
function wo(e) {
	let t = e.index;
	if (!e.series || !e.series.data || !W(t)) return null;
	let n = e.series.options?.nullInteraction;
	return L(e.series.data, function(e) {
		return !!(e && e.index !== void 0 && (n || e.index > t) && e.graphic && e.graphic.element);
	}) || null;
}
function To(e) {
	let t = e.series, n = t && t.chart, r = t && t.is("sunburst"), i = e.isNull, a = n && n.options.accessibility.point.describeNull;
	return i && !r && a;
}
function Eo(e, t) {
	let n = e.series.chart.renderer.rect(t.x, t.y, 1, 1);
	return n.attr({
		class: "highcharts-a11y-mock-point",
		fill: "none",
		opacity: 0,
		"fill-opacity": 0,
		"stroke-opacity": 0
	}), n;
}
function Do(e) {
	let t = e.series, n = wo(e), r = n && n.graphic, i = r ? r.parentGroup : t.graph || t.group, a = Eo(e, n ? {
		x: e.plotX ?? n.plotX ?? 0,
		y: e.plotY ?? n.plotY ?? 0
	} : {
		x: e.plotX ?? 0,
		y: e.plotY ?? 0
	});
	if (i && i.element) return e.graphic = a, e.hasMockGraphic = !0, a.add(i), i.element.insertBefore(a.element, r ? r.element : null), a.element;
}
function Oo(e) {
	let t = e.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
	return !!(t !== !1 && e.points && e.points.length >= +t);
}
function ko(e) {
	let t = e.options.accessibility || {};
	return !Oo(e) && !t.exposeAsGroupOnly;
}
function Ao(e) {
	let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation;
	return !!(e.points && (e.points.length < +t.pointNavigationEnabledThreshold || t.pointNavigationEnabledThreshold === !1));
}
function jo(e) {
	let t = e.chart, n = t.options.chart, r = n.options3d && n.options3d.enabled, i = t.series.length > 1, a = t.options.accessibility.series.describeSingleSeries, o = (e.options.accessibility || {}).exposeAsGroupOnly;
	return !(r && i) && (i || a || o || Oo(e));
}
function Mo(e, t) {
	let n = e.series, r = n.chart, i = r.options.accessibility.point || {}, a = n.options.accessibility && n.options.accessibility.point || {}, o = n.tooltipOptions || {}, s = r.options.lang;
	return x(t) ? vo(t, a.valueDecimals || i.valueDecimals || o.valueDecimals || -1, s.decimalPoint, s.accessibility.thousandsSep || s.thousandsSep) : t;
}
function No(e) {
	let t = (e.options.accessibility || {}).description;
	return t && e.chart.langFormat("accessibility.series.description", {
		description: t,
		series: e
	}) || "";
}
function Po(e, t) {
	let n = e[t];
	return e.chart.langFormat("accessibility.series." + t + "Description", {
		name: po(n),
		series: e
	});
}
function Fo(e) {
	let t = e.series, n = t.chart, r = t.options.accessibility && t.options.accessibility.point || {}, i = n.options.accessibility.point || {}, a = t.xAxis && t.xAxis.dateTime;
	if (a) {
		let t = a.getXDateFormat(e.x || 0, n.options.tooltip.dateTimeLabelFormats), o = r.dateFormatter && r.dateFormatter(e) || i.dateFormatter?.(e) || r.dateFormat || i.dateFormat || t;
		return n.time.dateFormat(o, e.x || 0, void 0);
	}
}
function Io(e) {
	let t = Fo(e), n = (e.series.xAxis || {}).categories && W(e.category) && ("" + e.category).replace("<br/>", " "), r = W(e.id) && ("" + e.id).indexOf("highcharts-") < 0, i = "x, " + e.x;
	return e.name || t || n || (r ? e.id : i);
}
function Lo(e, t, n) {
	let r = t || "", i = n || "", a = function(t) {
		let n = Mo(e, e[t] ?? e.options[t]);
		return n === void 0 ? n : t + ": " + r + n + i;
	};
	return e.series.pointArrayMap.reduce(function(e, t) {
		let n = a(t);
		return n ? e + (e.length ? ", " : "") + n : e;
	}, "");
}
function Ro(e) {
	let t = e.series, n = t.chart.options.accessibility.point || {}, r = t.chart.options.accessibility && t.chart.options.accessibility.point || {}, i = t.tooltipOptions || {}, a = r.valuePrefix || n.valuePrefix || i.valuePrefix || "", o = r.valueSuffix || n.valueSuffix || i.valueSuffix || "", s = Mo(e, e[e.value === void 0 ? "y" : "value"]);
	return e.isNull ? t.chart.langFormat("accessibility.series.nullPointValue", { point: e }) : t.pointArrayMap ? Lo(e, a, o) : a + s + o;
}
function zo(e) {
	let t = e.series.chart, n = fo(e), r = {
		point: e,
		annotations: n
	};
	return n.length ? t.langFormat("accessibility.series.pointAnnotationsDescription", r) : "";
}
function Bo(e) {
	let t = e.series, n = t.chart, r = t.options.accessibility, i = r && r.point && r.point.valueDescriptionFormat || n.options.accessibility.point.valueDescriptionFormat, a = (t.xAxis && t.xAxis.options.accessibility && t.xAxis.options.accessibility.enabled) ?? (!n.angular && t.type !== "flowmap"), o = a ? Io(e) : "";
	return _o(i, {
		point: e,
		index: W(e.index) ? e.index + 1 : "",
		xDescription: o,
		value: Ro(e),
		separator: a ? ", " : ""
	}, n);
}
function Vo(e) {
	let t = e.series, n = t.chart.series.length > 1 || t.options.name, r = Bo(e), i = e.options && e.options.accessibility && e.options.accessibility.description, a = i ? " " + i : "", o = n ? " " + t.name + "." : "", s = zo(e), c = s ? " " + s : "";
	return e.accessibility = e.accessibility || {}, e.accessibility.valueDescription = r, r + a + o + c;
}
function Ho(e, t) {
	let n = e.series, r = n.options.accessibility?.point || {}, i = n.chart.options.accessibility.point || {}, a = xo(s(r.descriptionFormat) && _o(r.descriptionFormat, e, n.chart) || r.descriptionFormatter?.(e) || s(i.descriptionFormat) && _o(i.descriptionFormat, e, n.chart) || i.descriptionFormatter?.(e) || Vo(e), n.chart.renderer.forExport);
	t.setAttribute("role", "img"), t.setAttribute("aria-label", a);
}
function Uo(e) {
	let t = ko(e), n = Ao(e), r = e.chart.options.accessibility.point.describeNull;
	(t || n) && e.points.forEach((n) => {
		let i = n.graphic && n.graphic.element || To(n) && Do(n), a = n.options && n.options.accessibility && n.options.accessibility.enabled === !1;
		if (i) {
			if (n.isNull && !r) {
				i.setAttribute("aria-hidden", !0);
				return;
			}
			i.setAttribute("tabindex", "-1"), e.chart.styledMode || (i.style.outline = "none"), t && !a ? Ho(n, i) : i.setAttribute("aria-hidden", !0);
		}
	});
}
function Wo(e) {
	let t = e.chart, n = t.types || [], r = No(e), i = function(n) {
		return t[n] && t[n].length > 1 && e[n];
	}, a = e.index + 1, o = Po(e, "xAxis"), s = Po(e, "yAxis"), c = {
		seriesNumber: a,
		series: e,
		chart: t
	}, l = n.length > 1 ? "Combination" : "", u = t.langFormat("accessibility.series.summary." + e.type + l, c) || t.langFormat("accessibility.series.summary.default" + l, c), d = (i("yAxis") ? " " + s + "." : "") + (i("xAxis") ? " " + o + "." : "");
	return _o((e.options.accessibility && e.options.accessibility.descriptionFormat) ?? t.options.accessibility.series.descriptionFormat ?? "", {
		seriesDescription: u,
		authorDescription: r ? " " + r : "",
		axisDescription: d,
		series: e,
		chart: t,
		seriesNumber: a
	}, void 0);
}
function Go(e, t) {
	let n = e.options.accessibility || {}, r = e.chart.options.accessibility, i = r.landmarkVerbosity;
	n.exposeAsGroupOnly ? t.setAttribute("role", "img") : i === "all" ? t.setAttribute("role", "region") : t.setAttribute("role", "group"), t.setAttribute("tabindex", "-1"), e.chart.styledMode || (t.style.outline = "none"), t.setAttribute("aria-label", xo(r.series.descriptionFormatter && r.series.descriptionFormatter(e) || Wo(e), e.chart.renderer.forExport));
}
function Ko(e) {
	let t = e.chart, n = mo(e), r = ho(e), i = t.is3d && t.is3d();
	r && (r.lastChild === n && !i && bo(r), Uo(e), go(t, r), jo(e) ? Go(e, r) : r.removeAttribute("aria-label"));
}
var qo = {
	compose: So,
	defaultPointDescriptionFormatter: Vo,
	defaultSeriesDescriptionFormatter: Wo,
	describeSeries: Ko
}, { composed: Jo } = z, { getChartTitle: Yo } = Q, { defaultPointDescriptionFormatter: Xo, defaultSeriesDescriptionFormatter: Zo } = qo;
function Qo(e) {
	return !!e.options.accessibility.announceNewData.enabled;
}
function $o(e) {
	let t = e.series.data.filter((t) => e.x === t.x && e.y === t.y);
	return t.length === 1 ? t[0] : e;
}
function es(e, t) {
	let n = (e || []).concat(t || []).reduce((e, t) => (e[t.name + t.index] = t, e), {});
	return Object.keys(n).map((e) => n[e]);
}
var ts = class {
	constructor(e) {
		this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = e;
	}
	init() {
		let e = this.chart, t = e.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
		this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new ai(), this.announcer = new bi(e, t), this.addEventListeners();
	}
	destroy() {
		this.eventProvider.removeAddedEvents(), this.announcer.destroy();
	}
	addEventListeners() {
		let e = this, t = this.chart, n = this.eventProvider;
		n.addEvent(t, "afterApplyDrilldown", function() {
			e.lastAnnouncementTime = 0;
		}), n.addEvent(t, "afterAddSeries", function(t) {
			e.onSeriesAdded(t.series);
		}), n.addEvent(t, "redraw", function() {
			e.announceDirtyData();
		});
	}
	onSeriesAdded(e) {
		Qo(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[e.name + e.index] = e, this.dirty.newSeries = W(this.dirty.newSeries) ? void 0 : e);
	}
	announceDirtyData() {
		let e = this.chart, t = this;
		if (e.options.accessibility.announceNewData && this.dirty.hasDirty) {
			let e = this.dirty.newPoint;
			e &&= $o(e), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e) => t.dirty.allSeries[e]), this.dirty.newSeries, e), this.dirty = { allSeries: {} };
		}
	}
	queueAnnouncement(e, t, n) {
		let r = this.chart.options.accessibility.announceNewData;
		if (r.enabled) {
			let i = +/* @__PURE__ */ new Date(), a = i - this.lastAnnouncementTime, o = Math.max(0, r.minAnnounceInterval - a), s = es(this.queuedAnnouncement && this.queuedAnnouncement.series, e), c = this.buildAnnouncementMessage(s, t, n);
			c && (this.queuedAnnouncement && v(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
				time: i,
				message: c,
				series: s
			}, this.queuedAnnouncementTimer = setTimeout(() => {
				this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
			}, o));
		}
	}
	buildAnnouncementMessage(e, t, n) {
		let r = this.chart, i = r.options.accessibility.announceNewData;
		if (i.announcementFormatter) {
			let r = i.announcementFormatter(e, t, n, this);
			if (r !== !1) return r.length ? r : null;
		}
		let a = z.charts && z.charts.length > 1 ? "Multiple" : "Single", o = t ? "newSeriesAnnounce" + a : n ? "newPointAnnounce" + a : "newDataAnnounce", s = Yo(r);
		return r.langFormat("accessibility.announceNewData." + o, {
			chartTitle: s,
			seriesDesc: t ? Zo(t) : null,
			pointDesc: n ? Xo(n) : null,
			point: n,
			series: t
		});
	}
};
(function(t) {
	function n(t) {
		e(Jo, "A11y.NDA") && (I(t, "addPoint", r), I(t, "updatedData", i));
	}
	t.compose = n;
	function r(e) {
		let t = this.chart, n = t.accessibility?.components.series.newDataAnnouncer;
		n && n.chart === t && Qo(t) && (n.dirty.newPoint = W(n.dirty.newPoint) ? void 0 : e.point);
	}
	function i() {
		let e = this.chart, t = e.accessibility?.components.series.newDataAnnouncer;
		t && t.chart === e && Qo(e) && (t.dirty.hasDirty = !0, t.dirty.allSeries[this.name + this.index] = this);
	}
})(ts ||= {});
var ns = ts, { doc: rs, win: is } = z, { fireEventOnWrappedOrUnwrappedElement: as } = Q, { cloneMouseEvent: os, cloneTouchEvent: ss, getFakeMouseEvent: cs, removeElement: ls } = Z, us = class {
	constructor(e, t, n = "button", r, i) {
		this.chart = e, this.target = t, this.eventProvider = new ai();
		let a = this.innerElement = rs.createElement(n), o = this.element = r ? rs.createElement(r) : a;
		e.styledMode || this.hideElementVisually(a), r && (r === "li" && !e.styledMode && (o.style.listStyle = "none"), o.appendChild(a), this.element = o), this.updateTarget(t, i);
	}
	click() {
		let e = this.getTargetPosition();
		e.x += e.width / 2, e.y += e.height / 2;
		let t = cs("click", e);
		as(this.target.click, t);
	}
	updateTarget(e, t) {
		this.target = e, this.updateCSSClassName();
		let n = t || {};
		Object.keys(n).forEach((e) => {
			n[e] === null && delete n[e];
		});
		let r = this.getTargetAttr(e.click, "aria-label");
		U(this.innerElement, d(r ? { "aria-label": r } : {}, n)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e.click), this.refreshPosition();
	}
	refreshPosition() {
		let e = this.getTargetPosition();
		r(this.innerElement, {
			width: (e.width || 1) + "px",
			height: (e.height || 1) + "px",
			left: (Math.round(e.x) || 0) + "px",
			top: (Math.round(e.y) || 0) + "px"
		});
	}
	remove() {
		this.eventProvider.removeAddedEvents(), ls(this.element);
	}
	updateCSSClassName() {
		let e = (e) => e.indexOf("highcharts-no-tooltip") > -1, t = e(this.chart.legend?.group?.div?.className || ""), n = e(this.getTargetAttr(this.target.click, "class") || "");
		this.innerElement.className = t || n ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
	}
	addProxyEventsToElement(e, t) {
		[
			"click",
			"touchstart",
			"touchend",
			"touchcancel",
			"touchmove",
			"mouseover",
			"mouseenter",
			"mouseleave",
			"mouseout"
		].forEach((n) => {
			let r = n.indexOf("touch") === 0;
			this.eventProvider.addEvent(e, n, (e) => {
				let n = r ? ss(e) : os(e);
				t && as(t, n), e.stopPropagation(), r || e.preventDefault();
			}, { passive: !1 });
		});
	}
	hideElementVisually(e) {
		r(e, {
			borderWidth: 0,
			backgroundColor: "transparent",
			cursor: "pointer",
			outline: "none",
			opacity: .001,
			filter: "alpha(opacity=1)",
			zIndex: 999,
			overflow: "hidden",
			padding: 0,
			margin: 0,
			display: "block",
			position: "absolute",
			"pointer-events": "none",
			"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)"
		});
	}
	getTargetPosition() {
		let e = this.target.click, t = e.element ? e.element : e, n = this.target.visual || t, r = this.chart.renderTo, i = this.chart.pointer;
		if (r && n?.getBoundingClientRect && i) {
			let e = is.scrollY || rs.documentElement.scrollTop, t = n.getBoundingClientRect(), r = i.getChartPosition();
			return {
				x: (t.left - r.left) / r.scaleX,
				y: (t.top + e - r.top) / r.scaleY,
				width: t.right / r.scaleX - t.left / r.scaleX,
				height: t.bottom / r.scaleY - t.top / r.scaleY
			};
		}
		return {
			x: 0,
			y: 0,
			width: 1,
			height: 1
		};
	}
	getTargetAttr(e, t) {
		return e.element ? e.element.getAttribute(t) : e.getAttribute(t);
	}
}, { doc: ds } = z, { unhideChartElementFromAT: fs } = Q, { removeChildNodes: ps } = Z, ms = class {
	constructor(e) {
		this.chart = e, this.domElementProvider = new ii(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
	}
	addProxyElement(e, t, n = "button", r) {
		let i = this.groups[e];
		if (!i) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e);
		let a = i.type === "ul" || i.type === "ol" ? "li" : void 0, o = new us(this.chart, t, n, a, r);
		return i.proxyContainerElement.appendChild(o.element), i.proxyElements.push(o), o;
	}
	addGroup(e, t = "div", n) {
		let r = this.groups[e];
		if (r) return r.groupElement;
		let i = this.domElementProvider.createElement(t), a;
		return n && n.role && t !== "div" ? (a = this.domElementProvider.createElement("div"), a.appendChild(i)) : a = i, a.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e.replace(/\W/g, "-"), this.groups[e] = {
			proxyContainerElement: i,
			groupElement: a,
			type: t,
			proxyElements: []
		}, U(a, n || {}), t === "ul" && i.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(a), this.updateGroupOrder(this.groupOrder), a;
	}
	updateGroupAttrs(e, t) {
		let n = this.groups[e];
		if (!n) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e);
		U(n.groupElement, t);
	}
	updateGroupOrder(e) {
		if (this.groupOrder = e.slice(), this.isDOMOrderGroupOrder()) return;
		let t = e.indexOf("series"), n = t > -1 ? e.slice(0, t) : e, r = t > -1 ? e.slice(t + 1) : [], i = ds.activeElement;
		["before", "after"].forEach((e) => {
			let t = this[e === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"], i = e === "before" ? n : r;
			ps(t), i.forEach((e) => {
				let n = this.groups[e];
				n && t.appendChild(n.groupElement);
			});
		}), (this.beforeChartProxyPosContainer.contains(i) || this.afterChartProxyPosContainer.contains(i)) && i && i.focus && i.focus();
	}
	clearGroup(e) {
		let t = this.groups[e];
		if (!t) throw Error("ProxyProvider.clearGroup: Invalid group key " + e);
		ps(t.proxyContainerElement);
	}
	removeGroup(e) {
		let t = this.groups[e];
		t && (this.domElementProvider.removeElement(t.groupElement), t.groupElement !== t.proxyContainerElement && this.domElementProvider.removeElement(t.proxyContainerElement), delete this.groups[e]);
	}
	update() {
		this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
	}
	updateProxyElementPositions() {
		Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
	}
	updateGroupProxyElementPositions(e) {
		let t = this.groups[e];
		t && t.proxyElements.forEach((e) => e.refreshPosition());
	}
	destroy() {
		this.domElementProvider.destroyCreatedElements();
	}
	createProxyPosContainer(e) {
		let t = this.domElementProvider.createElement("div");
		return t.setAttribute("aria-hidden", "false"), t.className = "highcharts-a11y-proxy-container" + (e ? "-" + e : ""), r(t, {
			position: "absolute",
			top: "0",
			left: "0",
			whiteSpace: "nowrap"
		}), t;
	}
	getCurrentGroupOrderInDOM() {
		let e = (e) => {
			let t = Object.keys(this.groups), n = t.length;
			for (; n--;) {
				let r = t[n], i = this.groups[r];
				if (i && e === i.groupElement) return r;
			}
		}, t = (t) => {
			let n = [], r = t.children;
			for (let t = 0; t < r.length; ++t) {
				let i = e(r[t]);
				i && n.push(i);
			}
			return n;
		}, n = t(this.beforeChartProxyPosContainer), r = t(this.afterChartProxyPosContainer);
		return n.push("series"), n.concat(r);
	}
	isDOMOrderGroupOrder() {
		let e = this.getCurrentGroupOrderInDOM(), t = this.groupOrder.filter((e) => e === "series" || !!this.groups[e]), n = e.length;
		if (n !== t.length) return !1;
		for (; n--;) if (e[n] !== t[n]) return !1;
		return !0;
	}
	updatePosContainerPositions() {
		let e = this.chart;
		if (e.renderer.forExport) return;
		let t = e.renderer.box;
		e.container.insertBefore(this.afterChartProxyPosContainer, t.nextSibling), e.container.insertBefore(this.beforeChartProxyPosContainer, t), fs(this.chart, this.afterChartProxyPosContainer), fs(this.chart, this.beforeChartProxyPosContainer);
	}
}, { unhideChartElementFromAT: hs, getAxisRangeDescription: gs } = Q;
function _s(e) {
	return !!(e.rangeSelector && e.rangeSelector.inputGroup && e.rangeSelector.inputGroup.element.style.visibility !== "hidden" && e.options.rangeSelector.inputEnabled !== !1 && e.rangeSelector.minInput && e.rangeSelector.maxInput);
}
var vs = class extends ci {
	init() {
		let e = this.chart;
		this.announcer = new bi(e, "polite");
	}
	onChartUpdate() {
		let e = this.chart, t = this, n = e.rangeSelector;
		n && (this.updateSelectorVisibility(), this.setDropdownAttrs(), n.buttons && n.buttons.length && n.buttons.forEach((e) => {
			t.setRangeButtonAttrs(e);
		}), n.maxInput && n.minInput && ["minInput", "maxInput"].forEach(function(r, i) {
			let a = n[r];
			a && (hs(e, a), t.setRangeInputAttrs(a, "accessibility.rangeSelector." + (i ? "max" : "min") + "InputLabel"));
		}));
	}
	updateSelectorVisibility() {
		let e = this.chart, t = e.rangeSelector, n = t && t.dropdown, r = t && t.buttons || [], i = (e) => e.setAttribute("aria-hidden", !0);
		t && t.hasVisibleDropdown && n ? (hs(e, n), r.forEach((e) => i(e.element))) : (n && i(n), r.forEach((t) => hs(e, t.element)));
	}
	setDropdownAttrs() {
		let e = this.chart, t = e.rangeSelector && e.rangeSelector.dropdown;
		if (t) {
			let n = e.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: e.options.lang.rangeSelectorZoom });
			t.setAttribute("aria-label", n), t.setAttribute("tabindex", -1);
		}
	}
	setRangeButtonAttrs(e) {
		U(e.element, {
			tabindex: -1,
			role: "button"
		});
	}
	setRangeInputAttrs(e, t) {
		let n = this.chart;
		U(e, {
			tabindex: -1,
			"aria-label": n.langFormat(t, { chart: n })
		});
	}
	onButtonNavKbdArrowKey(e, t) {
		let n = e.response, r = this.keyCodes, i = this.chart, a = i.options.accessibility.keyboardNavigation.wrapAround, o = t === r.left || t === r.up ? -1 : 1;
		return i.highlightRangeSelectorButton(i.highlightedRangeSelectorItemIx + o) ? n.success : a ? (e.init(o), n.success) : n[o > 0 ? "next" : "prev"];
	}
	onButtonNavKbdClick(e) {
		let t = e.response, n = this.chart;
		return n.oldRangeSelectorItemState !== 3 && this.fakeClickEvent(n.rangeSelector.buttons[n.highlightedRangeSelectorItemIx].element), t.success;
	}
	onAfterBtnClick() {
		let e = this.chart, t = gs(e.xAxis[0]), n = e.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", {
			chart: e,
			axisRangeDescription: t
		});
		n && this.announcer.announce(n);
	}
	onInputKbdMove(e) {
		let t = this.chart, n = t.rangeSelector, r = t.highlightedInputRangeIx = (t.highlightedInputRangeIx || 0) + e;
		if (r > 1 || r < 0) {
			if (t.accessibility) return t.accessibility.keyboardNavigation.exiting = !0, t.accessibility.keyboardNavigation.tabindexContainer.focus(), t.accessibility.keyboardNavigation.move(e);
		} else if (n) {
			let e = n[r ? "maxDateBox" : "minDateBox"], i = n[r ? "maxInput" : "minInput"];
			e && i && t.setFocusToElement(e, i);
		}
		return !0;
	}
	onInputNavInit(e) {
		let t = this, n = this.chart, r = e > 0 ? 0 : 1, i = n.rangeSelector, a = i && i[r ? "maxDateBox" : "minDateBox"], o = i && i.minInput, s = i && i.maxInput, c = r ? s : o;
		if (n.highlightedInputRangeIx = r, a && o && s) {
			n.setFocusToElement(a, c), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
			let e = (e) => {
				(e.which || e.keyCode) === this.keyCodes.tab && t.onInputKbdMove(e.shiftKey ? -1 : 1) && (e.preventDefault(), e.stopPropagation());
			}, r = I(o, "keydown", e), i = I(s, "keydown", e);
			this.removeInputKeydownHandler = () => {
				r(), i();
			};
		}
	}
	onInputNavTerminate() {
		let e = this.chart.rangeSelector || {};
		e.maxInput && e.hideInput("max"), e.minInput && e.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
	}
	initDropdownNav() {
		let e = this.chart, t = e.rangeSelector, n = t && t.dropdown;
		t && n && (e.setFocusToElement(t.buttonGroup, n), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = I(n, "keydown", (t) => {
			let n = (t.which || t.keyCode) === this.keyCodes.tab, r = e.accessibility;
			n && (t.preventDefault(), t.stopPropagation(), r && r.keyboardNavigation.move(t.shiftKey ? -1 : 1));
		}));
	}
	getRangeSelectorButtonNavigation() {
		let e = this.chart, t = this.keyCodes, n = this;
		return new li(e, {
			keyCodeMap: [[[
				t.left,
				t.right,
				t.up,
				t.down
			], function(e) {
				return n.onButtonNavKbdArrowKey(this, e);
			}], [[t.enter, t.space], function() {
				return n.onButtonNavKbdClick(this);
			}]],
			validate: function() {
				return !!(e.rangeSelector && e.rangeSelector.buttons && e.rangeSelector.buttons.length);
			},
			init: function(t) {
				let r = e.rangeSelector;
				if (r && r.hasVisibleDropdown) n.initDropdownNav();
				else if (r) {
					let n = r.buttons.length - 1;
					e.highlightRangeSelectorButton(t > 0 ? 0 : n);
				}
			},
			terminate: function() {
				n.removeDropdownKeydownHandler && (n.removeDropdownKeydownHandler(), delete n.removeDropdownKeydownHandler);
			}
		});
	}
	getRangeSelectorInputNavigation() {
		let e = this.chart, t = this;
		return new li(e, {
			keyCodeMap: [],
			validate: function() {
				return _s(e);
			},
			init: function(e) {
				t.onInputNavInit(e);
			},
			terminate: function() {
				t.onInputNavTerminate();
			}
		});
	}
	getKeyboardNavigation() {
		return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
	}
	destroy() {
		this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
	}
};
(function(e) {
	function t(e) {
		let t = this.rangeSelector && this.rangeSelector.buttons || [], n = this.highlightedRangeSelectorItemIx, r = this.rangeSelector && this.rangeSelector.selected;
		return n !== void 0 && t[n] && n !== r && t[n].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e, t[e] ? (this.setFocusToElement(t[e].box, t[e].element), e !== r && (this.oldRangeSelectorItemState = t[e].state, t[e].setState(1)), !0) : !1;
	}
	function n(e, n) {
		let i = e.prototype;
		i.highlightRangeSelectorButton || (i.highlightRangeSelectorButton = t, I(n, "afterBtnClick", r));
	}
	e.compose = n;
	function r() {
		let e = this.chart.accessibility;
		if (e && e.components.rangeSelector) return e.components.rangeSelector.onAfterBtnClick();
	}
})(vs ||= {});
var ys = vs, { composed: bs } = z, xs;
(function(t) {
	function n(t) {
		e(bs, "A11y.FM") && (I(t, "afterSetOptions", l), I(t, "render", u), I(t, "afterRender", c), I(t, "renderCanvas", g));
	}
	t.compose = n;
	function r(e) {
		d(!0, e, { marker: {
			enabled: !0,
			states: { normal: { opacity: 0 } }
		} });
	}
	function i(e) {
		return e.marker.states && e.marker.states.normal && e.marker.states.normal.opacity;
	}
	function a(e) {
		let t = e.points.length;
		for (; t--;) {
			let n = e.points[t], a = n.options, o = n.hasForcedA11yMarker;
			if (delete n.hasForcedA11yMarker, a.marker) {
				let e = o && i(a) === 0;
				a.marker.enabled && !e ? (p(a), n.hasForcedA11yMarker = !1) : a.marker.enabled === !1 && (r(a), n.hasForcedA11yMarker = !0);
			}
		}
	}
	function o(e) {
		return !!(e._hasPointMarkers && e.points && e.points.length);
	}
	function s(e) {
		let t = e.chart.options.accessibility;
		return e.points.length < t.series.pointDescriptionEnabledThreshold || t.series.pointDescriptionEnabledThreshold === !1;
	}
	function c() {
		let e = this;
		e.chart.styledMode && (e.markerGroup && e.markerGroup[e.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), o(e) && e.points.forEach((e) => {
			e.graphic && (e.graphic[e.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e.graphic[e.hasForcedA11yMarker === !1 ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
		}));
	}
	function l(e) {
		this.resetA11yMarkerOptions = d(e.options.marker || {}, this.userOptions.marker || {});
	}
	function u() {
		let e = this, t = e.options;
		f(e) ? (t.marker?.enabled === !1 && (e.a11yMarkersForced = !0, r(e.options)), o(e) && a(e)) : e.a11yMarkersForced ? (delete e.a11yMarkersForced, e.isDirty = !0, h(e), t.marker?.enabled === !1 && delete e.resetA11yMarkerOptions) : e.chart.styledMode && t.marker?.enabled === !1 && !o(e) && m(e);
	}
	function f(e) {
		let t = e.chart.options.accessibility.enabled, n = (e.options.accessibility && e.options.accessibility.enabled) !== !1;
		return t && n && s(e);
	}
	function p(e) {
		d(!0, e.marker, { states: { normal: { opacity: i(e) || 1 } } });
	}
	function m(e) {
		e.points?.forEach((e) => {
			e.graphic &&= e.graphic.destroy();
		});
	}
	function h(e) {
		let t = e.resetA11yMarkerOptions;
		if (t) {
			let n = t.states && t.states.normal && t.states.normal.opacity;
			e.chart.styledMode && t.enabled === !1 && m(e), e.userOptions && e.userOptions.marker && (e.userOptions.marker.enabled = !0), e.update({ marker: {
				enabled: t.enabled,
				states: { normal: { opacity: n } }
			} });
		}
	}
	function g() {
		this.boosted && this.a11yMarkersForced && (d(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
	}
})(xs ||= {});
var Ss = xs, { seriesTypes: Cs } = Y, { doc: ws } = z, { getPointFromXY: Ts, getSeriesFromName: Es, scrollAxisToPoint: Ds } = Q;
function Os(e) {
	let t = e.index, n = e.series.points, r = n.length;
	if (n[t] !== e) {
		for (; r--;) if (n[r] === e) return r;
	} else return t;
}
function ks(e) {
	let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation, n = e.options.accessibility || {}, r = n.keyboardNavigation;
	return r && r.enabled === !1 || n.enabled === !1 || e.options.enableMouseTracking === !1 || !e.visible || t.pointNavigationEnabledThreshold && +t.pointNavigationEnabledThreshold <= e.points.length;
}
function As(e) {
	let t = e.series, n = t.options.nullInteraction, r = e.options.accessibility, i = t.chart.options.accessibility, a = r?.enabled === !1, o = i.keyboardNavigation.seriesNavigation.skipNullPoints ?? !n;
	return e.isNull && o || e.visible === !1 || e.isInside === !1 || a || ks(t);
}
function js(e) {
	let t = e.points || [], n = t.length;
	for (let e = 0; e < n; ++e) if (!As(t[e])) return t[e];
	return null;
}
function Ms(e) {
	let t = e.series || [], n = t.length;
	for (let e = 0; e < n; ++e) if (!ks(t[e])) {
		let n = js(t[e]);
		if (n) return n;
	}
	return null;
}
function Ns(e) {
	let t = e.series.length, n = !1;
	for (; t-- && (e.highlightedPoint = e.series[t].points[e.series[t].points.length - 1], n = e.series[t].highlightNextValidPoint(), !n););
	return n;
}
function Ps(e) {
	let t = Ms(e);
	t && t.highlight(!1);
}
function Fs(e) {
	delete e.highlightedPoint;
	let t = Ms(e);
	return t ? t.highlight() : !1;
}
var Is = class {
	constructor(e, t) {
		this.keyCodes = t, this.chart = e;
	}
	init() {
		let e = this, t = this.chart, n = this.eventProvider = new ai();
		n.addEvent(ye, "destroy", function() {
			return e.onSeriesDestroy(this);
		}), n.addEvent(t, "afterApplyDrilldown", function() {
			Ps(this);
		}), n.addEvent(t, "drilldown", function(t) {
			let n = t.point, r = n.series;
			e.lastDrilledDownPoint = {
				x: n.x,
				y: n.y,
				seriesName: r ? r.name : ""
			};
		}), n.addEvent(t, "drillupall", function() {
			setTimeout(function() {
				e.onDrillupAll();
			}, 10);
		}), n.addEvent(ge, "afterSetState", function() {
			let e = this, n = e.graphic && e.graphic.element, r = ws.activeElement, i = r && r.getAttribute("class"), a = i && i.indexOf("highcharts-a11y-proxy-element") > -1;
			t.highlightedPoint === e && r !== n && !a && n && n.focus && n.focus();
		});
	}
	onDrillupAll() {
		let e = this.lastDrilledDownPoint, t = this.chart, n = e && Es(t, e.seriesName), r;
		e && n && W(e.x) && W(e.y) && (r = Ts(n, e.x, e.y)), r ||= Ms(t), t.container && t.container.focus(), r && r.highlight && r.highlight(!1);
	}
	getKeyboardNavigationHandler() {
		let e = this, t = this.keyCodes, n = this.chart, r = n.inverted;
		return new li(n, {
			keyCodeMap: [
				[r ? [t.up, t.down] : [t.left, t.right], function(t) {
					return e.onKbdSideways(this, t);
				}],
				[r ? [t.left, t.right] : [t.up, t.down], function(t) {
					return e.onKbdVertical(this, t);
				}],
				[[t.enter, t.space], function(e, t) {
					let r = n.highlightedPoint;
					if (r) {
						let { plotLeft: e, plotTop: n } = this.chart, { plotX: i = 0, plotY: a = 0 } = r;
						t = {
							...t,
							chartX: e + i,
							chartY: n + a,
							point: r,
							target: r.graphic?.element || t.target
						}, p(r.series, "click", t), r.firePointEvent("click", t);
					}
					return this.response.success;
				}],
				[[t.home], function() {
					return Fs(n), this.response.success;
				}],
				[[t.end], function() {
					return Ns(n), this.response.success;
				}],
				[[t.pageDown, t.pageUp], function(e) {
					return n.highlightAdjacentSeries(e === t.pageDown), this.response.success;
				}]
			],
			init: function() {
				return e.onHandlerInit(this);
			},
			validate: function() {
				return !!Ms(n);
			},
			terminate: function() {
				return e.onHandlerTerminate();
			}
		});
	}
	onKbdSideways(e, t) {
		let n = this.keyCodes, r = t === n.right || t === n.down;
		return this.attemptHighlightAdjacentPoint(e, r);
	}
	onHandlerInit(e) {
		let t = this.chart;
		return t.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t.highlightedPoint ? t.highlightedPoint.highlight() : Fs(t), e.response.success;
	}
	onKbdVertical(e, t) {
		let n = this.chart, r = this.keyCodes, i = t === r.down || t === r.right, a = n.options.accessibility.keyboardNavigation.seriesNavigation;
		return a.mode && a.mode === "serialize" ? this.attemptHighlightAdjacentPoint(e, i) : (n[n.highlightedPoint && n.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](i), e.response.success);
	}
	onHandlerTerminate() {
		let e = this.chart, t = e.options.accessibility.keyboardNavigation;
		e.tooltip && e.tooltip.hide(0);
		let n = e.highlightedPoint && e.highlightedPoint.series;
		n && n.onMouseOut && n.onMouseOut(), e.highlightedPoint && e.highlightedPoint.onMouseOut && e.highlightedPoint.onMouseOut(), t.seriesNavigation.rememberPointFocus || delete e.highlightedPoint;
	}
	attemptHighlightAdjacentPoint(e, t) {
		let n = this.chart, r = n.options.accessibility.keyboardNavigation.wrapAround;
		return n.highlightAdjacentPoint(t) || r && (t ? Fs(n) : Ns(n)) ? e.response.success : e.response[t ? "next" : "prev"];
	}
	onSeriesDestroy(e) {
		let t = this.chart;
		t.highlightedPoint && t.highlightedPoint.series === e && (delete t.highlightedPoint, t.focusElement && t.focusElement.removeFocusBorder());
	}
	destroy() {
		this.eventProvider.removeAddedEvents();
	}
};
(function(e) {
	function t(e) {
		let t = this, n = t.series, r = t.highlightedPoint, i = r && Os(r) || 0, a = r && r.series.points || [], o = t.series && t.series[t.series.length - 1], s = o && o.points && o.points[o.points.length - 1], c, l;
		if (!n[0] || !n[0].points) return !1;
		if (!r) l = e ? n[0].points[0] : s;
		else if (c = n[r.series.index + (e ? 1 : -1)], l = a[i + (e ? 1 : -1)], !l && c && (l = c.points[e ? 0 : c.points.length - 1]), !l) return !1;
		return As(l) ? (c = l.series, t.highlightedPoint = ks(c) ? e ? c.points[c.points.length - 1] : c.points[0] : l, t.highlightAdjacentPoint(e)) : l.highlight();
	}
	function n(e) {
		let t = this.highlightedPoint, n = Infinity, r;
		return !W(t.plotX) || !W(t.plotY) ? !1 : (this.series.forEach((i) => {
			ks(i) || i.points.forEach((a) => {
				if (!W(a.plotY) || !W(a.plotX) || a === t) return;
				let o = a.plotY - t.plotY, s = Math.abs(a.plotX - t.plotX), c = Math.abs(o) * Math.abs(o) + s * s * 4;
				i.yAxis && i.yAxis.reversed && (o *= -1), !(o <= 0 && e || o >= 0 && !e || c < 5 || As(a)) && c < n && (n = c, r = a);
			});
		}), r ? r.highlight() : !1);
	}
	function r(e) {
		let t = this, n = t.highlightedPoint, r = t.series && t.series[t.series.length - 1], i = r && r.points && r.points[r.points.length - 1], o, s, c;
		return t.highlightedPoint ? (o = t.series[n.series.index + (e ? -1 : 1)], !o || (s = a(n, o, 4), !s) ? !1 : ks(o) ? (s.highlight(), c = t.highlightAdjacentSeries(e), c || (n.highlight(), !1)) : (s.highlight(), s.series.highlightNextValidPoint())) : (o = e ? t.series && t.series[0] : r, s = e ? o && o.points && o.points[0] : i, s ? s.highlight() : !1);
	}
	function i(e, i, a) {
		let c = e.prototype, l = i.prototype, u = a.prototype;
		c.highlightAdjacentPoint || (c.highlightAdjacentPoint = t, c.highlightAdjacentPointVertical = n, c.highlightAdjacentSeries = r, l.highlight = o, u.keyboardMoveVertical = !0, [
			"column",
			"gantt",
			"pie"
		].forEach((e) => {
			Cs[e] && (Cs[e].prototype.keyboardMoveVertical = !1);
		}), u.highlightNextValidPoint = s);
	}
	e.compose = i;
	function a(e, t, n, r) {
		let i = Infinity, a, o, s, c = t.points.length, l = (e) => !(W(e.plotX) && W(e.plotY));
		if (!l(e)) {
			for (; c--;) a = t.points[c], !l(a) && (s = (e.plotX - a.plotX) * (e.plotX - a.plotX) * (n || 1) + (e.plotY - a.plotY) * (e.plotY - a.plotY) * (r || 1), s < i && (i = s, o = c));
			return W(o) ? t.points[o] : void 0;
		}
	}
	function o(e = !0) {
		let t = this.series.chart, n = t.tooltip?.label?.element;
		(!this.isNull || this.series.options?.nullInteraction) && e ? this.onMouseOver() : t.tooltip && t.tooltip.hide(0), Ds(this), this.graphic && (t.setFocusToElement(this.graphic), !e && t.focusElement && t.focusElement.removeFocusBorder()), t.highlightedPoint = this;
		let r = n?.getBoundingClientRect().top;
		if (n && r && r < 0) {
			let e = window.scrollY + r;
			window.scrollTo({
				behavior: "smooth",
				top: e
			});
		}
		return this;
	}
	function s() {
		let e = this.chart.highlightedPoint, t = (e && e.series) === this ? Os(e) : 0, n = this.points, r = n.length;
		if (n && r) {
			for (let e = t; e < r; ++e) if (!As(n[e])) return n[e].highlight();
			for (let e = t; e >= 0; --e) if (!As(n[e])) return n[e].highlight();
		}
		return !1;
	}
})(Is ||= {});
var Ls = Is, { hideSeriesFromAT: Rs } = Q, { compose: zs, describeSeries: Bs } = qo, Vs = class extends ci {
	static compose(e, t, n) {
		ns.compose(n), Ss.compose(n), zs(t), Ls.compose(e, t, n);
	}
	init() {
		this.newDataAnnouncer = new ns(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new Ls(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
	}
	hideTooltipFromATWhenShown() {
		let e = this;
		this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
			this.chart === e.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0);
		});
	}
	hideSeriesLabelsFromATWhenShown() {
		this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
			this.series.forEach(function(e) {
				e.labelBySeries && e.labelBySeries.attr("aria-hidden", !0);
			});
		});
	}
	onChartRender() {
		this.chart.series.forEach(function(e) {
			(e.options.accessibility && e.options.accessibility.enabled) !== !1 && e.visible && e.getPointsCollection().length !== 0 ? Bs(e) : Rs(e);
		});
	}
	getKeyboardNavigation() {
		return this.keyboardNavigation.getKeyboardNavigationHandler();
	}
	destroy() {
		this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
	}
}, { unhideChartElementFromAT: Hs } = Q, { getFakeMouseEvent: Us } = Z;
function Ws(e) {
	return !!(e.mapView && e.mapNavigation && e.mapNavigation.navButtons.length);
}
var Gs = class extends ci {
	constructor() {
		super(...arguments), this.focusedMapNavButtonIx = -1;
	}
	init() {
		let e = this, t = this.chart;
		this.proxyProvider.addGroup("zoom", "div"), [
			"afterShowResetZoom",
			"afterApplyDrilldown",
			"drillupall"
		].forEach((n) => {
			e.addEvent(t, n, function() {
				e.updateProxyOverlays();
			});
		});
	}
	onChartUpdate() {
		let e = this.chart, t = this;
		e.mapNavigation && e.mapNavigation.navButtons.forEach((n, r) => {
			Hs(e, n.element), t.setMapNavButtonAttrs(n.element, "accessibility.zoom.mapZoom" + (r ? "Out" : "In"));
		});
	}
	setMapNavButtonAttrs(e, t) {
		let n = this.chart, r = n.langFormat(t, { chart: n });
		U(e, {
			tabindex: -1,
			role: "button",
			"aria-label": r
		});
	}
	onChartRender() {
		this.updateProxyOverlays();
	}
	updateProxyOverlays() {
		let e = this.chart;
		if (this.proxyProvider.clearGroup("zoom"), e.resetZoomButton && this.createZoomProxyButton(e.resetZoomButton, "resetZoomProxyButton", e.langFormat("accessibility.zoom.resetZoomButton", { chart: e })), e.drillUpButton && e.breadcrumbs && e.breadcrumbs.list) {
			let t = e.breadcrumbs.list[e.breadcrumbs.list.length - 1];
			this.createZoomProxyButton(e.drillUpButton, "drillUpProxyButton", e.langFormat("accessibility.drillUpButton", {
				chart: e,
				buttonText: e.breadcrumbs.getButtonText(t)
			}));
		}
	}
	createZoomProxyButton(e, t, n) {
		this[t] = this.proxyProvider.addProxyElement("zoom", { click: e }, "button", {
			"aria-label": n,
			tabindex: -1
		});
	}
	getMapZoomNavigation() {
		let e = this.keyCodes, t = this.chart, n = this;
		return new li(t, {
			keyCodeMap: [
				[[
					e.up,
					e.down,
					e.left,
					e.right
				], function(e) {
					return n.onMapKbdArrow(this, e);
				}],
				[[e.tab], function(e, t) {
					return n.onMapKbdTab(this, t);
				}],
				[[e.space, e.enter], function() {
					return n.onMapKbdClick(this);
				}]
			],
			validate: function() {
				return Ws(t);
			},
			init: function(e) {
				return n.onMapNavInit(e);
			}
		});
	}
	onMapKbdArrow(e, t) {
		let n = this.chart, r = this.keyCodes, i = n.container, a = t === r.up || t === r.down, o = t === r.left || t === r.up ? 1 : -1, s = (a ? n.plotHeight : n.plotWidth) / 10 * o, c = Math.random() * 10, l = {
			x: i.offsetLeft + n.plotLeft + n.plotWidth / 2 + c,
			y: i.offsetTop + n.plotTop + n.plotHeight / 2 + c
		}, u = a ? {
			x: l.x,
			y: l.y + s
		} : {
			x: l.x + s,
			y: l.y
		};
		return [
			Us("mousedown", l),
			Us("mousemove", u),
			Us("mouseup", u)
		].forEach((e) => i.dispatchEvent(e)), e.response.success;
	}
	onMapKbdTab(e, t) {
		let n = this.chart, r = e.response, i = t.shiftKey, a = i && !this.focusedMapNavButtonIx || !i && this.focusedMapNavButtonIx;
		if (n.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), a) return n.mapView && n.mapView.zoomBy(), r[i ? "prev" : "next"];
		this.focusedMapNavButtonIx += i ? -1 : 1;
		let o = n.mapNavigation.navButtons[this.focusedMapNavButtonIx];
		return n.setFocusToElement(o.box, o.element), o.setState(2), r.success;
	}
	onMapKbdClick(e) {
		let t = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
		return this.fakeClickEvent(t), e.response.success;
	}
	onMapNavInit(e) {
		let t = this.chart, n = t.mapNavigation.navButtons[0], r = t.mapNavigation.navButtons[1], i = e > 0 ? n : r;
		t.setFocusToElement(i.box, i.element), i.setState(2), this.focusedMapNavButtonIx = e > 0 ? 0 : 1;
	}
	simpleButtonNavigation(e, t, n) {
		let r = this.keyCodes, i = this, a = this.chart;
		return new li(a, {
			keyCodeMap: [[[
				r.tab,
				r.up,
				r.down,
				r.left,
				r.right
			], function(e, t) {
				let n = e === r.tab && t.shiftKey || e === r.left || e === r.up;
				return this.response[n ? "prev" : "next"];
			}], [[r.space, r.enter], function() {
				return n(this, a) ?? this.response.success;
			}]],
			validate: function() {
				return a[e] && a[e].box && i[t].innerElement;
			},
			init: function() {
				a.setFocusToElement(a[e].box, i[t].innerElement);
			}
		});
	}
	getKeyboardNavigation() {
		return [
			this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(e, t) {
				t.zoomOut();
			}),
			this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(e, t) {
				return t.drillUp(), e.response.prev;
			}),
			this.getMapZoomNavigation()
		];
	}
}, { doc: Ks, isMS: qs, win: Js } = z;
function Ys() {
	if (qs && Js.getComputedStyle) {
		let e = Ks.createElement("div");
		e.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", Ks.body.appendChild(e);
		let t = (e.currentStyle || Js.getComputedStyle(e)).backgroundImage;
		return Ks.body.removeChild(e), t === "none";
	}
	return Js.matchMedia && Js.matchMedia("(forced-colors: active)").matches;
}
function Xs(e) {
	let t = e.highContrastState ||= {};
	t.active = !0, t.applying = !0;
	try {
		let t = e.options.accessibility.highContrastTheme;
		e.update(t, !1);
		let n = t.colors?.length > 1;
		e.series.forEach(function(e) {
			let r = t.plotOptions[e.type] || {}, i = n && e.colorIndex !== void 0 ? t.colors[e.colorIndex] : r.color || "window", a = {
				color: r.color || "windowText",
				colors: n ? t.colors : [r.color || "windowText"],
				borderColor: r.borderColor || "window",
				fillColor: i
			};
			e.update(a, !1), e.points && e.points.forEach(function(e) {
				e.options && e.options.color && e.update({
					color: r.color || "windowText",
					borderColor: r.borderColor || "window"
				}, !1);
			});
		}), e.redraw();
	} finally {
		delete t.applying;
	}
}
var Zs = {
	isHighContrastModeActive: Ys,
	setHighContrastTheme: Xs
}, Qs = {
	chart: { backgroundColor: "window" },
	title: { style: { color: "windowText" } },
	subtitle: { style: { color: "windowText" } },
	colorAxis: {
		minColor: "windowText",
		maxColor: "windowText",
		stops: [],
		dataClasses: []
	},
	colors: ["windowText"],
	xAxis: {
		gridLineColor: "windowText",
		labels: { style: { color: "windowText" } },
		lineColor: "windowText",
		minorGridLineColor: "windowText",
		tickColor: "windowText",
		title: { style: { color: "windowText" } }
	},
	yAxis: {
		gridLineColor: "windowText",
		labels: { style: { color: "windowText" } },
		lineColor: "windowText",
		minorGridLineColor: "windowText",
		tickColor: "windowText",
		title: { style: { color: "windowText" } }
	},
	tooltip: {
		backgroundColor: "window",
		borderColor: "windowText",
		style: { color: "windowText" }
	},
	plotOptions: {
		series: {
			lineColor: "windowText",
			fillColor: "window",
			borderColor: "windowText",
			edgeColor: "windowText",
			borderWidth: 1,
			dataLabels: {
				connectorColor: "windowText",
				color: "windowText",
				style: {
					color: "windowText",
					textOutline: "none"
				}
			},
			marker: {
				lineColor: "windowText",
				fillColor: "windowText"
			}
		},
		pie: {
			color: "window",
			colors: ["window"],
			borderColor: "windowText",
			borderWidth: 1
		},
		boxplot: { fillColor: "window" },
		candlestick: {
			lineColor: "windowText",
			fillColor: "window"
		},
		errorbar: { fillColor: "window" }
	},
	legend: {
		backgroundColor: "window",
		itemStyle: { color: "windowText" },
		itemHoverStyle: { color: "windowText" },
		itemHiddenStyle: { color: "#555" },
		title: { style: { color: "windowText" } }
	},
	credits: { style: { color: "windowText" } },
	drilldown: {
		activeAxisLabelStyle: { color: "windowText" },
		activeDataLabelStyle: { color: "windowText" }
	},
	navigation: { buttonOptions: {
		symbolStroke: "windowText",
		theme: { fill: "window" }
	} },
	rangeSelector: {
		buttonTheme: {
			fill: "window",
			stroke: "windowText",
			style: { color: "windowText" },
			states: {
				hover: {
					fill: "window",
					stroke: "windowText",
					style: { color: "windowText" }
				},
				select: {
					fill: "#444",
					stroke: "windowText",
					style: { color: "windowText" }
				}
			}
		},
		inputBoxBorderColor: "windowText",
		inputStyle: {
			backgroundColor: "window",
			color: "windowText"
		},
		labelStyle: { color: "windowText" }
	},
	navigator: {
		handles: {
			backgroundColor: "window",
			borderColor: "windowText"
		},
		outlineColor: "windowText",
		maskFill: "transparent",
		series: {
			color: "windowText",
			lineColor: "windowText"
		},
		xAxis: { gridLineColor: "windowText" }
	},
	scrollbar: {
		barBackgroundColor: "#444",
		barBorderColor: "windowText",
		buttonArrowColor: "windowText",
		buttonBackgroundColor: "window",
		buttonBorderColor: "windowText",
		rifleColor: "windowText",
		trackBackgroundColor: "window",
		trackBorderColor: "windowText"
	}
}, $s = {
	accessibility: {
		enabled: !0,
		screenReaderSection: {
			beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
			afterChartFormat: "{endOfChartMarker}",
			axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
		},
		series: {
			descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}",
			describeSingleSeries: !1,
			pointDescriptionEnabledThreshold: 200
		},
		point: {
			valueDescriptionFormat: "{xDescription}{separator}{value}.",
			describeNull: !0
		},
		landmarkVerbosity: "all",
		linkedDescription: "*[data-highcharts-chart=\"{index}\"] + .highcharts-description",
		highContrastMode: "auto",
		keyboardNavigation: {
			enabled: !0,
			focusBorder: {
				enabled: !0,
				hideBrowserFocusOutline: !0,
				style: {
					color: "var(--highcharts-highlight-color-80)",
					lineWidth: 2,
					borderRadius: 3
				},
				margin: 2
			},
			order: [
				"series",
				"zoom",
				"rangeSelector",
				"navigator",
				"legend",
				"chartMenu"
			],
			wrapAround: !0,
			seriesNavigation: {
				skipNullPoints: void 0,
				pointNavigationEnabledThreshold: !1,
				rememberPointFocus: !1
			}
		},
		announceNewData: {
			enabled: !1,
			minAnnounceInterval: 5e3,
			interruptUser: !1
		}
	},
	legend: { accessibility: {
		enabled: !0,
		keyboardNavigation: { enabled: !0 }
	} },
	exporting: { accessibility: { enabled: !0 } },
	navigator: { accessibility: { enabled: !0 } }
}, ec = { accessibility: {
	defaultChartTitle: "Chart",
	chartContainerLabel: "{title}. Highcharts interactive chart.",
	svgContainerLabel: "Interactive chart",
	drillUpButton: "{buttonText}",
	credits: "Chart credits: {creditsStr}",
	thousandsSep: ",",
	svgContainerTitle: "",
	graphicContainerLabel: "",
	screenReaderSection: {
		beforeRegionLabel: "",
		afterRegionLabel: "",
		annotations: {
			heading: "Chart annotations summary",
			descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}",
			descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}",
			descriptionNoPoints: "{annotationText}"
		},
		endOfChartMarker: "End of interactive chart."
	},
	sonification: {
		playAsSoundButtonText: "Play as sound, {chartTitle}",
		playAsSoundClickAnnouncement: "Play"
	},
	legend: {
		legendLabelNoTitle: "Toggle series visibility, {chartTitle}",
		legendLabel: "Chart legend: {legendTitle}",
		legendItem: "Show {itemName}"
	},
	zoom: {
		mapZoomIn: "Zoom chart",
		mapZoomOut: "Zoom out chart",
		resetZoomButton: "Reset zoom"
	},
	rangeSelector: {
		dropdownLabel: "{rangeTitle}",
		minInputLabel: "Select start date.",
		maxInputLabel: "Select end date.",
		clickButtonAnnouncement: "Viewing {axisRangeDescription}"
	},
	navigator: {
		handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}",
		groupLabel: "Axis zoom",
		changeAnnouncement: "{axisRangeDescription}"
	},
	stockTools: {
		groupLabel: "Stock chart tools",
		arrowLabel: "Toggle submenu"
	},
	table: {
		viewAsDataTableButtonText: "View as data table, {chartTitle}",
		tableSummary: "Table representation of chart."
	},
	announceNewData: {
		newDataAnnounce: "Updated data for chart {chartTitle}",
		newSeriesAnnounceSingle: "New data series: {seriesDesc}",
		newPointAnnounceSingle: "New data point: {pointDesc}",
		newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}",
		newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}"
	},
	seriesTypeDescriptions: {
		boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
		arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
		areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.",
		bubble: "Bubble charts are scatter charts where each data point also has a size value.",
		columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
		errorbar: "Errorbar series are used to display the variability of the data.",
		funnel: "Funnel charts are used to display reduction of data in stages.",
		pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
		waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
	},
	chartTypes: {
		emptyChart: "Empty chart",
		mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.",
		unknownMap: "Map of unspecified region with {numSeries} data series.",
		combinationChart: "Combination chart with {numSeries} data series.",
		defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
		defaultMultiple: "Chart with {numSeries} data series.",
		splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
		splineMultiple: "Line chart with {numSeries} lines.",
		lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
		lineMultiple: "Line chart with {numSeries} lines.",
		columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
		columnMultiple: "Bar chart with {numSeries} data series.",
		barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
		barMultiple: "Bar chart with {numSeries} data series.",
		pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.",
		pieMultiple: "Pie chart with {numSeries} pies.",
		scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.",
		scatterMultiple: "Scatter chart with {numSeries} data series.",
		boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.",
		boxplotMultiple: "Boxplot with {numSeries} data series.",
		bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.",
		bubbleMultiple: "Bubble chart with {numSeries} data series."
	},
	axis: {
		xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
		xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
		yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
		yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
		timeRangeDays: "Data range: {range} days.",
		timeRangeHours: "Data range: {range} hours.",
		timeRangeMinutes: "Data range: {range} minutes.",
		timeRangeSeconds: "Data range: {range} seconds.",
		rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.",
		rangeCategories: "Data range: {numCategories} categories.",
		defaultAxisNames: {
			categories: "categories",
			time: "Time",
			values: "values"
		}
	},
	exporting: {
		chartMenuLabel: "Chart menu",
		menuButtonLabel: "View chart context menu, {chartTitle}"
	},
	series: {
		summary: {
			default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
			pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
			scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
			scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
			boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
			boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
			bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
			bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
			map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
			mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
			mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
			mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}."
		},
		description: "{description}",
		xAxisDescription: "X axis, {name}",
		yAxisDescription: "Y axis, {name}",
		nullPointValue: "No value",
		pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}"
	}
} };
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Options/DeprecatedOptions.js
function tc(e, t, n) {
	let r = e, i, a = 0;
	for (; a < t.length - 1; ++a) i = t[a], r = r[i] = r[i] ?? {};
	r[t[t.length - 1]] = n;
}
function nc(e, t, n, r) {
	function i(e, t) {
		return t.reduce(function(e, t) {
			return e[t];
		}, e);
	}
	let a = i(e.options, t), o = i(e.options, n);
	Object.keys(r).forEach(function(i) {
		let s = a[i];
		s !== void 0 && (tc(o, r[i], s), H(32, !1, e, { [t.join(".") + "." + i]: n.join(".") + "." + r[i].join(".") }));
	});
}
function rc(e) {
	let t = e.options.chart, n = e.options.accessibility || {};
	["description", "typeDescription"].forEach(function(r) {
		t[r] && (n[r] = t[r], H(32, !1, e, { [`chart.${r}`]: `use accessibility.${r}` }));
	});
}
function ic(e) {
	e.axes.forEach(function(t) {
		let n = t.options;
		n && n.description && (n.accessibility = n.accessibility || {}, n.accessibility.description = n.description, H(32, !1, e, { "axis.description": "use axis.accessibility.description" }));
	});
}
function ac(e) {
	let t = {
		description: ["accessibility", "description"],
		exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
		pointDescriptionFormat: [
			"accessibility",
			"point",
			"descriptionFormat"
		],
		pointDescriptionFormatter: [
			"accessibility",
			"point",
			"descriptionFormatter"
		],
		skipKeyboardNavigation: [
			"accessibility",
			"keyboardNavigation",
			"enabled"
		],
		"accessibility.pointDescriptionFormatter": [
			"accessibility",
			"point",
			"descriptionFormatter"
		]
	};
	e.series.forEach(function(n) {
		Object.keys(t).forEach(function(r) {
			let i = n.options[r];
			r === "accessibility.pointDescriptionFormatter" && (i = n.options.accessibility && n.options.accessibility.pointDescriptionFormatter), i !== void 0 && (tc(n.options, t[r], r === "skipKeyboardNavigation" ? !i : i), H(32, !1, e, { [`series.${r}`]: "series." + t[r].join(".") }));
		});
	});
}
function oc(e) {
	nc(e, ["accessibility"], ["accessibility"], {
		pointDateFormat: ["point", "dateFormat"],
		pointDateFormatter: ["point", "dateFormatter"],
		pointDescriptionFormatter: ["point", "descriptionFormatter"],
		pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
		pointNavigationThreshold: [
			"keyboardNavigation",
			"seriesNavigation",
			"pointNavigationEnabledThreshold"
		],
		pointValueDecimals: ["point", "valueDecimals"],
		pointValuePrefix: ["point", "valuePrefix"],
		pointValueSuffix: ["point", "valueSuffix"],
		screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"],
		describeSingleSeries: ["series", "describeSingleSeries"],
		seriesDescriptionFormatter: ["series", "descriptionFormatter"],
		onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"],
		axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
	});
}
function sc(e) {
	nc(e, ["accessibility", "keyboardNavigation"], [
		"accessibility",
		"keyboardNavigation",
		"seriesNavigation"
	], {
		skipNullPoints: ["skipNullPoints"],
		mode: ["mode"]
	});
}
function cc(e) {
	nc(e, ["lang", "accessibility"], ["lang", "accessibility"], {
		legendItem: ["legend", "legendItem"],
		legendLabel: ["legend", "legendLabel"],
		mapZoomIn: ["zoom", "mapZoomIn"],
		mapZoomOut: ["zoom", "mapZoomOut"],
		resetZoomButton: ["zoom", "resetZoomButton"],
		screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"],
		rangeSelectorButton: ["rangeSelector", "buttonText"],
		rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
		rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
		svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
		viewAsDataTable: ["table", "viewAsDataTableButtonText"],
		tableSummary: ["table", "tableSummary"]
	});
}
function lc(e) {
	rc(e), ic(e), e.series && ac(e), oc(e), sc(e), cc(e);
}
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Accessibility.js
var { defaultOptions: uc } = j, { doc: dc } = z, { escapeStringForHTML: fc, removeElement: pc, stripHTMLTagsFromString: mc } = Z, hc = class {
	constructor(e) {
		this.init(e);
	}
	init(e) {
		if (this.chart = e, !dc?.addEventListener) {
			this.zombie = !0, this.components = {}, e.renderTo.setAttribute("aria-hidden", !0);
			return;
		}
		lc(e), this.proxyProvider = new ms(this.chart), this.initComponents(), this.keyboardNavigation = new la(e, this.components);
	}
	initComponents() {
		let e = this.chart, t = this.proxyProvider, n = e.options.accessibility;
		this.components = {
			container: new mi(),
			infoRegions: new Xi(),
			legend: new ya(),
			chartMenu: new ra(),
			rangeSelector: new ys(),
			series: new Vs(),
			zoom: new Gs(),
			navigator: new uo()
		}, n.customComponents && R(this.components, n.customComponents);
		let r = this.components;
		this.getComponentOrder().forEach(function(n) {
			r[n].initBase(e, t), r[n].init();
		});
	}
	getComponentOrder() {
		if (!this.components) return [];
		if (!this.components.series) return Object.keys(this.components);
		let e = Object.keys(this.components).filter((e) => e !== "series");
		return ["series"].concat(e);
	}
	update() {
		let e = this.components, t = this.chart, n = t.options.accessibility;
		p(t, "beforeA11yUpdate"), t.types = this.getChartTypes();
		let r = n.keyboardNavigation.order;
		this.proxyProvider.updateGroupOrder(r), this.getComponentOrder().forEach(function(n) {
			e[n].onChartUpdate(), p(t, "afterA11yComponentUpdate", {
				name: n,
				component: e[n]
			});
		}), this.keyboardNavigation.update(r), !t.highContrastState?.applying && n.highContrastMode !== !1 && (t.highContrastState?.active || Zs.isHighContrastModeActive() || n.highContrastMode === !0) && Zs.setHighContrastTheme(t), p(t, "afterA11yUpdate", { accessibility: this });
	}
	destroy() {
		let e = this.chart || {}, t = this.components;
		Object.keys(t).forEach(function(e) {
			t[e].destroy(), t[e].destroyBase();
		}), this.proxyProvider && this.proxyProvider.destroy(), e.announcerContainer && pc(e.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e.renderTo && e.renderTo.setAttribute("aria-hidden", !0), e.focusElement && e.focusElement.removeFocusBorder();
	}
	getChartTypes() {
		let e = {};
		return this.chart.series.forEach(function(t) {
			e[t.type] = 1;
		}), Object.keys(e);
	}
};
(function(e) {
	e.i18nFormat = Rr.i18nFormat;
	function t() {
		this.accessibility && this.accessibility.destroy();
	}
	function n() {
		this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
		let e = this.accessibility;
		e && !e.zombie && (e.proxyProvider.updateProxyElementPositions(), e.getComponentOrder().forEach(function(t) {
			e.components[t].onChartRender();
		}));
	}
	function r(e) {
		let t = this.accessibility;
		if (!t || t.zombie) return;
		let n = t.components.infoRegions, r = n && (n.getLongdescText() || n.getTypeDescriptionText());
		if (!r) return;
		let i = fc(mc(r, !0));
		if (!i.trim()) return;
		let a = e.chartCopy.renderer.box;
		a.querySelector(":scope > metadata")?.remove(), a.insertAdjacentHTML("afterbegin", "<metadata><rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\"><rdf:Description><dc:description>" + i + "</dc:description></rdf:Description></rdf:RDF></metadata>");
	}
	function i(e) {
		let t = e.options.accessibility;
		t && (t.customComponents && (this.options.accessibility.customComponents = t.customComponents, delete t.customComponents), d(!0, this.options.accessibility, t), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
	}
	function a() {
		let t = this.accessibility, n = this.options.accessibility, r = this.renderer.boxWrapper.element, i = this.title;
		if (n && n.enabled) t && !t.zombie ? t.update() : (this.accessibility = t = new e(this), t && !t.zombie && t.update(), r.getAttribute("role") === "img" && r.removeAttribute("role"));
		else if (t) t.destroy && t.destroy(), delete this.accessibility;
		else {
			this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", !1), this.renderTo.setAttribute("aria-label", (i && i.element.textContent || "").replace(/</g, "&lt;")), r.setAttribute("aria-hidden", !0);
			let e = document.getElementsByClassName("highcharts-description")[0];
			e && (e.setAttribute("aria-hidden", !1), e.classList.remove("highcharts-linked-description"));
		}
	}
	function o(e, o, c, l, u, d) {
		la.compose(e), ns.compose(l), ya.compose(e, o), ra.compose(e), Vs.compose(e, c, l), Rr.compose(e), gi.compose(e, u), d && ys.compose(e, d);
		let f = e.prototype;
		f.updateA11yEnabled || (f.updateA11yEnabled = a, I(e, "destroy", t), I(e, "render", n), I(e, "update", i), I(e, "getSVG", r), ["addSeries", "init"].forEach((t) => {
			I(e, t, function() {
				this.a11yDirty = !0;
			});
		}), ["afterApplyDrilldown", "drillupall"].forEach((t) => {
			I(e, t, function() {
				let e = this.accessibility;
				e && !e.zombie && e.update();
			});
		}), I(c, "update", s), [
			"update",
			"updatedData",
			"remove"
		].forEach((e) => {
			I(l, e, function() {
				this.chart.accessibility && (this.chart.a11yDirty = !0);
			});
		}));
	}
	e.compose = o;
	function s() {
		this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
	}
})(hc ||= {}), d(!0, uc, $s, {
	accessibility: { highContrastTheme: Qs },
	lang: ec
});
var gc = hc, $ = z;
$.i18nFormat = gc.i18nFormat, $.A11yChartUtilities = Q, $.A11yHTMLUtilities = Z, $.AccessibilityComponent = ci, $.KeyboardNavigationHandler = li, $.SeriesAccessibilityDescriber = qo, gc.compose($.Chart, $.Legend, $.Point, $.Series, $.SVGElement, $.RangeSelector);
//#endregion
//#region src/index.ts
var _c = {
	areaLine: "area",
	areaSpline: "areaspline",
	bar: "bar",
	column: "column",
	line: "line",
	spline: "spline"
}, vc = {
	areaLine: "area",
	areaRange: "arearange",
	areaSpline: "areaspline",
	column: "column",
	columnRange: "columnrange",
	line: "line",
	spline: "spline"
}, yc = {
	areaLine: "arearange",
	areaSpline: "areasplinerange",
	bar: "columnrange",
	column: "columnrange"
}, bc = "highcharts", xc = {
	isDependencyWheelAndSankeyModulesLoaded: !1,
	isHighchartsMoreLoaded: !1,
	isPatternFillLoaded: !1,
	isStreamgraphModuleLoaded: !1
}, Sc = class {
	renderCartesianChart(e, t, n, r) {
		let i = _c[e], a = Array.from(t.data.measures, (e) => ({
			type: i,
			name: e.name,
			data: e.values
		})), o = {
			chart: { type: i },
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, s = X.chart(n, o, r);
		return {
			chart: s,
			resize: () => {
				s.reflow();
			},
			vendorId: bc
		};
	}
	async render(e, t, n) {
		await Promise.all([this.loadHighchartsMore(), this.loadPatternFill()]);
		let r = X.chart(t, e, n);
		return {
			chart: r,
			resize: () => {
				r.reflow();
			},
			vendorId: bc
		};
	}
	async renderPeriodFlowBoundaries(e, t, n) {
		await this.loadHighchartsMore();
		let r = {
			chart: { type: "waterfall" },
			plotOptions: { series: { borderColor: "#333" } },
			series: Array.from(e.data.measures, (e) => ({
				type: "waterfall",
				name: e.name,
				data: e.values
			})),
			title: { text: e.title.text },
			xAxis: { categories: e.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: e.title.text } }
		}, i = X.chart(t, r, n);
		return {
			chart: i,
			resize: () => {
				i.reflow();
			},
			vendorId: bc
		};
	}
	async renderPolarChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = vc[e], a = {
			chart: { polar: !0 },
			plotOptions: { series: { borderColor: "#333" } },
			series: Array.from(t.data.measures, (e) => ({
				type: i,
				name: e.name,
				data: e.values
			})),
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, o = X.chart(n, a, r);
		return {
			chart: o,
			resize: () => {
				o.reflow();
			},
			vendorId: bc
		};
	}
	async renderRangeChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = yc[e], a = [], o = [];
		for (let e = 0; e < t.data.dimension.values.length; e++) o.push([t.data.measures[0]?.values[e]?.[0] ?? 0, t.data.measures[1]?.values[e]?.[0] ?? 0]);
		a.push({
			type: i,
			name: "Unknown",
			data: o
		});
		let s = {
			chart: {
				type: i,
				inverted: e === "bar"
			},
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, c = X.chart(n, s, r);
		return {
			chart: c,
			resize: () => {
				c.reflow();
			},
			vendorId: bc
		};
	}
	setColorMode(e) {
		typeof document < "u" && (document.documentElement.classList.toggle("highcharts-dark", e === "dark"), document.documentElement.classList.toggle("highcharts-light", e !== "dark"));
	}
	async loadDependencyWheelAndSankeyModules() {
		xc.isDependencyWheelAndSankeyModulesLoaded ||= (await Promise.all([import("./dependency-wheel.src-m4DwYrP7.js"), import("./sankey.src-B-54oc-3.js")]), !0);
	}
	async loadHighchartsMore() {
		xc.isHighchartsMoreLoaded ||= (await import("./highchartsMoreCustom-C7_1r-Ql.js"), !0);
	}
	async loadPatternFill() {
		xc.isPatternFillLoaded ||= (await import("./pattern-fill.src-kXG__4iS.js"), !0);
	}
	async loadStreamGraphModule() {
		xc.isStreamgraphModuleLoaded ||= (await import("./streamgraph.src-DLpEiTz6.js"), !0);
	}
};
//#endregion
export { Sc as HighchartsTool };
