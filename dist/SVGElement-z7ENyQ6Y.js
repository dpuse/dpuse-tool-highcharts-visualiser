import { $ as e, C as t, G as n, H as r, J as i, K as a, M as o, N as s, O as c, S as l, U as u, W as d, X as f, a as p, at as m, h, k as g, lt as _, n as v, nt as y, p as b, s as x, t as S, v as C, w, x as T, z as E } from "./AnimationUtilities-eb22eIjK.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/SVGElement.js
var { deg2rad: D, doc: O, svg: k, SVG_NS: A, win: j, isFirefox: M } = _, N = class N {
	_defaultGetter(e) {
		let t = this[e + "Value"] ?? this[e] ?? (this.element ? this.element.getAttribute(e) : null) ?? this.box?.[e] ?? 0;
		return /^-?[\d\.]+$/.test(t) && (t = parseFloat(t)), t;
	}
	_defaultSetter(e, t, n) {
		n.setAttribute(t, e);
	}
	add(e) {
		let t = this.renderer, n = this.element, r;
		return e && (this.parentGroup = e), this.textStr !== void 0 && this.element.nodeName === "text" && t.buildText(this), this.added = !0, (!e || e.handleZ || this.zIndex) && (r = this.zIndexSetter()), r || (e ? e.element : t.box).appendChild(n), this.onAdd && this.onAdd(), this;
	}
	addClass(e, t) {
		let n = t ? "" : this.attr("class") || "";
		return e = (e || "").split(/ /g).reduce(function(e, t) {
			return n.indexOf(t) === -1 && e.push(t), e;
		}, n ? [n] : []).join(" "), e !== n && this.attr("class", e), this;
	}
	afterSetters() {
		this.doTransform &&= (this.updateTransform(), !1);
	}
	align(t, r, i, a = !0) {
		let o = this.renderer, c = o.alignedObjects, l = !!t;
		t ? (this.alignOptions = t, this.alignByTranslate = r, this.alignTo = i) : (t = this.alignOptions || {}, r = this.alignByTranslate, i = this.alignTo);
		let u = !i || n(i) ? i || "renderer" : void 0;
		u && (l && e(c, this), i = void 0);
		let d = i ?? o[u] ?? o, f = (d.x || 0) + (t.x || 0) + ((d.width || 0) - (t.width || 0)) * s(t.align), p = (d.y || 0) + (t.y || 0) + ((d.height || 0) - (t.height || 0)) * s(t.verticalAlign), m = {};
		return t.align && (m["text-align"] = t.align), m[r ? "translateX" : "x"] = Math.round(f), m[r ? "translateY" : "y"] = Math.round(p), a && (this[this.placed ? "animate" : "attr"](m), this.placed = !0), this.alignAttr = m, this;
	}
	alignSetter(e) {
		let t = {
			left: "start",
			center: "middle",
			right: "end"
		};
		t[e] && (this.alignValue = e, this.element.setAttribute("text-anchor", t[e]));
	}
	animate(e, t, n) {
		let r = S(t ?? this.renderer.globalAnimation ?? !0), a = r.defer;
		return O.hidden && (r.duration = 0), r.duration === 0 ? (this.attr(e, void 0, n || r.complete), i(e, function(e, t) {
			r.step && r.step.call(this, e, {
				prop: t,
				pos: 1,
				elem: this
			});
		}, this)) : (n && (r.complete = n), m(() => {
			this.element && v(this, e, r);
		}, a)), this;
	}
	applyTextOutline(e) {
		let t = this.element;
		e.indexOf("contrast") !== -1 && (e = e.replace(/contrast/g, this.renderer.getContrast(t.style.fill)));
		let n = e.indexOf(" "), r = e.substring(n + 1), i = e.substring(0, n);
		if (i && i !== "none" && _.svg) {
			this.fakeTS = !0, i = i.replace(/(^[\d\.]+)(.*?)$/g, function(e, t, n) {
				return 2 * Number(t) + n;
			}), this.removeTextOutline();
			let e = O.createElementNS(A, "tspan");
			C(e, {
				class: "highcharts-text-outline",
				fill: r,
				stroke: r,
				"stroke-width": i,
				"stroke-linejoin": "round"
			});
			let n = t.querySelector("textPath") || t;
			[].forEach.call(n.childNodes, (t) => {
				let n = t.cloneNode(!0);
				n.removeAttribute && [
					"fill",
					"stroke",
					"stroke-width",
					"stroke"
				].forEach((e) => n.removeAttribute(e)), e.appendChild(n);
			});
			let a = 0;
			[].forEach.call(n.querySelectorAll("text tspan"), (e) => {
				a += Number(e.getAttribute("dy"));
			});
			let o = O.createElementNS(A, "tspan");
			o.textContent = "​", C(o, {
				x: Number(t.getAttribute("x")),
				dy: -a
			}), e.appendChild(o), n.insertBefore(e, n.firstChild);
		}
	}
	attr(e, t, n, r) {
		let { element: a } = this, o = N.symbolCustomAttribs, s, c, l = this, u, d;
		return typeof e == "string" && t !== void 0 && (s = e, e = {}, e[s] = t), typeof e == "string" ? l = (this[e + "Getter"] || this._defaultGetter).call(this, e, a) : (i(e, function(t, n) {
			u = !1, r || p(this, n), this.symbolName && o.indexOf(n) !== -1 && (c ||= (this.symbolAttr(e), !0), u = !0), this.rotation && (n === "x" || n === "y") && (this.doTransform = !0), u || (d = this[n + "Setter"] || this._defaultSetter, d.call(this, t, n, a));
		}, this), this.afterSetters()), n && n.call(this), l;
	}
	clip(e) {
		if (e && !e.clipPath) {
			let t = b() + "-", n = this.renderer.createElement("clipPath").attr({ id: t }).add(this.renderer.defs);
			g(e, {
				clipPath: n,
				id: t,
				count: 0
			}), e.add(n);
		}
		return this.attr("clip-path", e ? `url(${this.renderer.url}#${e.id})` : "none");
	}
	crisp(e, t) {
		t = Math.round(t || e.strokeWidth || 0);
		let n = e.x || this.x || 0, r = e.y || this.y || 0, i = (e.width || this.width || 0) + n, a = (e.height || this.height || 0) + r, o = l(n, t), s = l(r, t), c = l(i, t), u = l(a, t);
		return g(e, {
			x: o,
			y: s,
			width: c - o,
			height: u - s
		}), w(e.strokeWidth) && (e.strokeWidth = t), e;
	}
	complexColor(e, t, n) {
		let r = this.renderer, s, c, l, u, d, f, p, m, h, g = [], _;
		o(this.renderer, "complexColor", { args: arguments }, () => {
			if (e.radialGradient ? c = "radialGradient" : e.linearGradient && (c = "linearGradient"), c) {
				if (l = e[c], d = r.gradients, f = e.stops, m = n.radialReference, E(l) && (e[c] = l = {
					x1: l[0],
					y1: l[1],
					x2: l[2],
					y2: l[3],
					gradientUnits: "userSpaceOnUse"
				}), c === "radialGradient" && m && !w(l.gradientUnits) && (u = l, l = a(l, r.getRadialAttr(m, u), { gradientUnits: "userSpaceOnUse" })), i(l, function(e, t) {
					t !== "id" && g.push(t, e);
				}), i(f, function(e) {
					g.push(e);
				}), g = g.join(","), d[g]) h = d[g].attr("id");
				else {
					l.id = h = b();
					let e = d[g] = r.createElement(c).attr(l).add(r.defs);
					e.radAttr = u, e.stops = [], f.forEach(([t, n]) => {
						n.indexOf("rgba") === 0 ? (s = x.parse(n), n = s.get("rgb"), p = s.get("a")) : p = 1;
						let i = r.createElement("stop").attr({
							offset: t,
							"stop-color": n,
							"stop-opacity": p
						}).add(e);
						e.stops.push(i);
					});
				}
				_ = "url(" + r.url + "#" + h + ")", n.setAttribute(t, _), n.gradient = g, e.toString = function() {
					return _;
				};
			}
		});
	}
	css(e) {
		let n = this.styles, r = {}, o = this.element, s = this.renderer, c, l = !n;
		if (n && i(e, function(e, t) {
			n && n[t] !== e && (r[t] = e, l = !0);
		}), l) {
			n && (e = g(n, r)), e.width === null || e.width === "auto" ? delete this.textWidth : o.nodeName.toLowerCase() === "text" && e.width && (c = this.textWidth = f(e.width)), g(this.styles, e), c && !k && s.forExport && delete e.width;
			let i = M && e.fontSize || null;
			i && (u(i) || /^\d+$/.test(i)) && (e.fontSize += "px");
			let l = a(e);
			o.namespaceURI === this.SVG_NS && ([
				"textOutline",
				"textOverflow",
				"whiteSpace",
				"width"
			].forEach((e) => l && delete l[e]), l.color && (l.fill = l.color, delete l.color)), t(o, l);
		}
		return this.added && (this.element.nodeName === "text" && s.buildText(this), e.textOutline && this.applyTextOutline(e.textOutline)), this;
	}
	dashstyleSetter(e) {
		let t, n = this["stroke-width"];
		if (n === "inherit" && (n = 1), e) {
			e = e.toLowerCase();
			let r = e.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
			for (t = r.length; t--;) r[t] = "" + f(r[t]) * (n ?? NaN);
			e = r.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", e);
		}
	}
	destroy() {
		let e = this, { element: t = {}, renderer: n, stops: r } = e, a = t.ownerSVGElement;
		if (t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null, p(e), e.clipPath && a) {
			let t = e.clipPath;
			[].forEach.call(a.querySelectorAll("[clip-path],[CLIP-PATH]"), function(e) {
				e.getAttribute("clip-path").indexOf(t.element.id) > -1 && e.removeAttribute("clip-path");
			}), e.clipPath = t.destroy();
		}
		if (r) {
			for (let e of r) e.destroy();
			r.length = 0;
		}
		e.safeRemoveChild(t), e.alignOptions && c(n.alignedObjects, e), i(e, (t, n) => {
			(e[n]?.parentGroup === e || ["connector", "foreignObject"].indexOf(n) !== -1) && e[n]?.destroy?.(), delete e[n];
		});
	}
	dSetter(e, t, n) {
		E(e) && (typeof e[0] == "string" && (e = this.renderer.pathToSegments(e)), this.pathArray = e, e = e.reduce((e, t, n) => t?.join ? (n ? e + " " : "") + t.join(" ") : (t || "").toString(), "")), /(NaN| {2}|^$)/.test(e) && (e = "M 0 0"), this[t] !== e && (n.setAttribute(t, e), this[t] = e);
	}
	fillSetter(e, t, n) {
		typeof e == "string" ? n.setAttribute(t, e) : e && this.complexColor(e, t, n);
	}
	hrefSetter(e, t, n) {
		n.setAttributeNS("http://www.w3.org/1999/xlink", t, e);
	}
	getBBox(e, n) {
		let i = this, { element: a, renderer: s, styles: c, textStr: l } = i, { cache: u, cacheKeys: d } = s, f = a.namespaceURI === i.SVG_NS, p = n ?? i.rotation ?? 0, m = s.styledMode ? a && N.prototype.getStyle.call(a, "font-size") : c.fontSize, h = this.getBBoxCacheKey([
			s.rootFontSize,
			this.textWidth,
			this.alignValue,
			c.fontWeight,
			c.lineClamp,
			c.textOverflow,
			m,
			p
		]), _, v, y;
		if (h && !e && (_ = u[h]), !_ || _.polygon) {
			if (f || s.forExport) {
				try {
					y = this.fakeTS && function(e) {
						let n = a.querySelector(".highcharts-text-outline");
						n && t(n, { display: e });
					}, r(y) && y("none"), _ = a.getBBox ? g({}, a.getBBox()) : {
						width: a.offsetWidth,
						height: a.offsetHeight,
						x: 0,
						y: 0
					}, r(y) && y("");
				} catch {}
				(!_ || _.width < 0) && (_ = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				});
			} else _ = i.htmlGetBBox();
			v = _.height, f && (_.height = v = {
				"11px,17": 14,
				"13px,20": 16
			}[`${m || ""},${Math.round(v)}`] || v), p && (_ = this.getRotatedBox(_, p));
			let e = { bBox: _ };
			o(this, "afterGetBBox", e), _ = e.bBox;
		}
		if (h && (l === "" || _.height > 0)) {
			for (; d.length > 250;) delete u[d.shift()];
			u[h] || d.push(h), u[h] = _;
		}
		return _;
	}
	getBBoxCacheKey(e) {
		if (w(this.textStr)) {
			let t = "" + this.textStr;
			return t.indexOf("<") === -1 && (t = t.replace(/\d/g, "0")), [t, ...e].join(",");
		}
	}
	getRotatedBox(e, t) {
		let { x: n, y: r, width: i, height: a } = e, { alignValue: o, translateY: c, rotationOriginX: l = 0, rotationOriginY: u = 0 } = this, d = s(o), f = Number(this.element.getAttribute("y") || 0) - (c ? 0 : r), p = t * D, m = (t - 90) * D, h = Math.cos(p), g = Math.sin(p), _ = i * h, v = i * g, y = Math.cos(m), b = Math.sin(m), [[x, S], [C, w]] = [l, u].map((e) => [e - e * h, e * g]), T = n + d * (i - _) + x + w, E = r + f - d * v - S + C, O = T + f * y, k = O + _, A = k - a * y, j = A - _, M = E + f * b, N = M + v, P = N - a * b, F = P - v, I = Math.min(O, k, A, j), L = Math.min(M, N, P, F);
		return {
			x: I,
			y: L,
			width: Math.max(O, k, A, j) - I,
			height: Math.max(M, N, P, F) - L,
			polygon: [
				[O, M],
				[k, N],
				[A, P],
				[j, F]
			]
		};
	}
	getStyle(e) {
		return j.getComputedStyle(this.element || this, "").getPropertyValue(e);
	}
	hasClass(e) {
		return ("" + this.attr("class")).split(" ").indexOf(e) !== -1;
	}
	hide() {
		return this.attr({ visibility: "hidden" });
	}
	htmlGetBBox() {
		return {
			height: 0,
			width: 0,
			x: 0,
			y: 0
		};
	}
	constructor(e, t) {
		this.onEvents = {}, this.opacity = 1, this.SVG_NS = A, this.element = t === "div" || t === "body" ? T(t) : O.createElementNS(this.SVG_NS, t), this.renderer = e, this.styles = {}, o(this, "afterInit");
	}
	on(e, t) {
		let { onEvents: n } = this;
		return n[e] && n[e](), n[e] = h(this.element, e, t), this;
	}
	opacitySetter(e, t, n) {
		let r = Number(Number(e).toFixed(3));
		this.opacity = r, n.setAttribute(t, r);
	}
	reAlign() {
		this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
	}
	removeClass(e) {
		return this.attr("class", ("" + this.attr("class")).replace(n(e) ? RegExp(`(^| )${e}( |$)`) : e, " ").replace(/ +/g, " ").trim());
	}
	removeTextOutline() {
		let e = this.element.querySelector("tspan.highcharts-text-outline");
		e && this.safeRemoveChild(e);
	}
	safeRemoveChild(e) {
		let t = e.parentNode;
		t && t.removeChild(e);
	}
	setRadialReference(e) {
		let t = this.element.gradient && this.renderer.gradients[this.element.gradient] || void 0;
		return this.element.radialReference = e, t?.radAttr && t.animate(this.renderer.getRadialAttr(e, t.radAttr)), this;
	}
	shadow(e) {
		let { renderer: t } = this, n = a(this.parentGroup?.rotation === 90 ? {
			offsetX: -1,
			offsetY: -1
		} : {}, d(e) ? e : {}), r = t.shadowDefinition(n);
		return this.attr({ filter: e ? `url(${t.url}#${r})` : "none" });
	}
	show(e = !0) {
		return this.attr({ visibility: e ? "inherit" : "visible" });
	}
	"stroke-widthSetter"(e, t, n) {
		this[t] = e, n.setAttribute(t, e);
	}
	strokeWidth() {
		if (!this.renderer.styledMode) return this["stroke-width"] || 0;
		let e = this.getStyle("stroke-width"), t = 0, n;
		return /px$/.test(e) ? t = f(e) : e !== "" && (n = O.createElementNS(A, "rect"), C(n, {
			width: e,
			"stroke-width": 0
		}), this.element.parentNode.appendChild(n), t = n.getBBox().width, n.parentNode.removeChild(n)), t;
	}
	symbolAttr(e) {
		let t = this;
		N.symbolCustomAttribs.forEach(function(n) {
			t[n] = e[n] ?? t[n];
		}), t.attr({ d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t) });
	}
	textSetter(e) {
		e !== this.textStr && (delete this.textPxLength, this.textStr = e, this.added && this.renderer.buildText(this), this.reAlign());
	}
	titleSetter(e) {
		let t = this.element, n = t.getElementsByTagName("title")[0] || O.createElementNS(this.SVG_NS, "title");
		t.insertBefore ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.textContent = y(e ?? "", [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	}
	toFront() {
		let e = this.element;
		return e.parentNode.appendChild(e), this;
	}
	translate(e, t) {
		return this.attr({
			translateX: e,
			translateY: t
		});
	}
	updateTransform(e = "transform") {
		let { element: t, foreignObject: n, matrix: r, rotation: i = 0, rotationOriginX: a, rotationOriginY: o, scaleX: s, scaleY: c, text: l, translateX: u = 0, translateY: d = 0 } = this, f = [`translate(${u},${d})`];
		w(r) && f.push("matrix(" + r.join(",") + ")"), i && f.push("rotate(" + i + " " + (a ?? t.getAttribute("x") ?? this.x ?? 0) + " " + (o ?? t.getAttribute("y") ?? this.y ?? 0) + ")"), (w(s) || w(c)) && f.push(`scale(${s ?? 1} ${c ?? 1})`), f.length && !(l || this).textPath && (n?.element || t).setAttribute(e, f.join(" "));
	}
	visibilitySetter(e, t, n) {
		e === "inherit" ? n.removeAttribute(t) : this[t] !== e && n.setAttribute(t, e), this[t] = e;
	}
	xGetter(e) {
		return this.element.nodeName === "circle" && (e === "x" ? e = "cx" : e === "y" && (e = "cy")), this._defaultGetter(e);
	}
	zIndexSetter(e, t) {
		let { element: n, parentGroup: r, renderer: i } = this, a = r?.element || i.box, o = a === i.box, s, c, l, u = !1, d, f = this.added, p;
		if (w(e) ? (n.setAttribute("data-z-index", e), e = +e, this[t] === e && (f = !1)) : w(this[t]) && n.removeAttribute("data-z-index"), this[t] = e, f) {
			for (e = this.zIndex, e && r && (r.handleZ = !0), s = a.childNodes, p = s.length - 1; p >= 0 && !u; p--) c = s[p], l = c.getAttribute("data-z-index"), d = !w(l), c !== n && (w(e) && e < 0 && d && !o && !p ? (a.insertBefore(n, s[p]), u = !0) : (w(e) && parseFloat(l || "") <= e || d && (!w(e) || e >= 0)) && (a.insertBefore(n, s[p + 1]), u = !0));
			u ||= (a.insertBefore(n, s[o ? 3 : 0]), !0);
		}
		return u;
	}
};
N.symbolCustomAttribs = [
	"anchorX",
	"anchorY",
	"clockwise",
	"end",
	"height",
	"innerR",
	"r",
	"start",
	"width",
	"x",
	"y"
], N.prototype.strokeSetter = N.prototype.fillSetter, N.prototype.yGetter = N.prototype.xGetter, N.prototype.matrixSetter = N.prototype.rotationOriginXSetter = N.prototype.rotationOriginYSetter = N.prototype.rotationSetter = N.prototype.scaleXSetter = N.prototype.scaleYSetter = N.prototype.translateXSetter = N.prototype.translateYSetter = N.prototype.verticalAlignSetter = function(e, t) {
	this[t] = e, this.doTransform = !0;
};
//#endregion
export { N as t };
