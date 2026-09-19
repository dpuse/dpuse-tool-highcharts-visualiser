//#region node_modules/highcharts/es-modules/Core/Globals.js
var e;
(function(e) {
	e.SVG_NS = "http://www.w3.org/2000/svg", e.product = "Highcharts", e.version = "13.1.0", e.win = typeof window < "u" ? window : {}, e.doc = e.win.document, e.svg = !!e.doc?.createElementNS?.(e.SVG_NS, "svg")?.createSVGRect, e.pageLang = e.doc?.documentElement?.closest("[lang]")?.lang, e.userAgent = e.win.navigator?.userAgent || "", e.isChrome = e.win.chrome, e.isFirefox = e.userAgent.indexOf("Firefox") !== -1, e.isMS = /(edge|msie|trident)/i.test(e.userAgent) && !e.win.opera, e.isSafari = !e.isChrome && e.userAgent.indexOf("Safari") !== -1, e.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(e.userAgent), e.isWebKit = e.userAgent.indexOf("AppleWebKit") !== -1, e.deg2rad = Math.PI * 2 / 360, e.marginNames = [
		"plotTop",
		"marginRight",
		"marginBottom",
		"plotLeft"
	], e.noop = function() {}, e.supportsPassiveEvents = function() {
		let t = !1;
		if (!e.isMS) {
			let n = { get passive() {
				return t = !0;
			} };
			e.win.addEventListener && e.win.removeEventListener && (e.win.addEventListener("testPassive", e.noop, n), e.win.removeEventListener("testPassive", e.noop, n));
		}
		return t;
	}(), e.charts = [], e.composed = [], e.dateFormats = {}, e.seriesTypes = {}, e.symbolSizes = {}, e.chartCount = 0;
})(e ||= {});
var t = e, n = {
	alignThresholds: !1,
	panning: {
		enabled: !1,
		type: "x"
	},
	styledMode: !1,
	borderRadius: 0,
	colorCount: 10,
	allowMutatingData: !0,
	ignoreHiddenSeries: !0,
	spacing: [
		10,
		10,
		15,
		10
	],
	resetZoomButton: {
		theme: {},
		position: {}
	},
	reflow: !0,
	selectionMarkerFill: "color-mix(in srgb, var(--highcharts-highlight-color-80) 25%, transparent)",
	type: "line",
	zooming: {
		singleTouch: !1,
		resetButton: {
			theme: { zIndex: 6 },
			position: {
				align: "right",
				x: -10,
				y: 10
			}
		}
	},
	width: null,
	height: null,
	borderColor: "var(--highcharts-highlight-color-80)",
	backgroundColor: "var(--highcharts-background-color)",
	plotBorderColor: "var(--highcharts-neutral-color-20)"
}, r = {
	dark: {
		backgroundColor: "#141414",
		neutralColor: "#ffffff",
		highlightColor: "#2caffe"
	},
	light: {
		backgroundColor: "#ffffff",
		neutralColor: "#000000",
		highlightColor: "#0022ff",
		positiveColor: "#06b535",
		negativeColor: "#f21313"
	}
}, { doc: i, win: a } = t;
function o(e, n, r, i = {}) {
	let a = typeof e == "function" && e.prototype || e;
	Object.hasOwnProperty.call(a, "hcEvents") || (a.hcEvents = {});
	let o = a.hcEvents;
	t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0);
	let s = e.addEventListener;
	s && s.call(e, n, r, t.supportsPassiveEvents ? {
		passive: i.passive === void 0 ? n.indexOf("touch") !== -1 : i.passive,
		capture: !1
	} : !1), o[n] || (o[n] = []);
	let c = {
		fn: r,
		order: typeof i.order == "number" ? i.order : Infinity
	};
	return o[n].push(c), o[n].sort((e, t) => e.order - t.order), function() {
		F(e, n, r);
	};
}
function s(e) {
	let t = e.length, n = e[0];
	for (; t--;) e[t] < n && (n = e[t]);
	return n;
}
function c(e) {
	let t = e.length, n = e[0];
	for (; t--;) e[t] > n && (n = e[t]);
	return n;
}
function l(e, t, n) {
	let r = O(t) && !h(n), i, a = (t, n) => {
		h(t) ? e.setAttribute(n, t) : r ? (i = e.getAttribute(n), !i && n === "class" && (i = e.getAttribute(n + "Name"))) : e.removeAttribute(n);
	};
	return O(t) ? a(n, t) : M(t, a), i;
}
function u(e, t, n) {
	return e > t ? e < n ? e : n : t;
}
function d(e, t) {
	return e > 0x5af3107a4000 ? e : parseFloat(e.toPrecision(t || 14));
}
function f(e, t, n, r, a) {
	let o = i.createElement(e);
	return t && b(o, t), a && m(o, {
		padding: "0",
		border: "none",
		margin: "0"
	}), n && m(o, n), r && r.appendChild(o), o;
}
function p(e, t = 0, n) {
	let r = t % 2 / 2, i = n ? -1 : 1;
	return (Math.round(e * i - r) + r) * i;
}
function m(e, t) {
	b(e.style, t);
}
function h(e) {
	return e != null;
}
function g(e, t, n) {
	M(e, function(r, i) {
		r !== t && r?.destroy && r.destroy(), (r?.destroy || !n) && delete e[i];
	});
}
function _(e) {
	e?.parentElement?.removeChild(e);
}
function v(e, t, n, r) {
	let i = {};
	function a(e, t, i, o) {
		let s = n ? t : e;
		M(e, function(n, c) {
			if (!o && r && r.indexOf(c) > -1 && t[c]) {
				n = I(n), i[c] = [];
				for (let e = 0; e < Math.max(n.length, t[c].length); e++) t[c][e] && (n[e] === void 0 ? i[c][e] = t[c][e] : (i[c][e] = {}, a(n[e], t[c][e], i[c][e], o + 1)));
			} else A(n, !0) && !n.nodeType ? (i[c] = k(n) ? [] : {}, a(n, t[c] || {}, i[c], o + 1), Object.keys(i[c]).length === 0 && (c !== "colorAxis" || o !== 0) && delete i[c]) : (e[c] !== t[c] || c in e && !(c in t)) && c !== "__proto__" && c !== "constructor" && (i[c] = s[c]);
		});
	}
	return a(e, t, i, 0), i;
}
function y(e, t) {
	let n = e.length;
	for (; n--;) if (e[n] === t) {
		e.splice(n, 1);
		break;
	}
}
function b(e, t) {
	let n;
	for (n in e ||= {}, t) n !== "__proto__" && n !== "constructor" && (e[n] = t[n]);
	return e;
}
function ee(e, t) {
	let n = (function() {});
	return n.prototype = new e(), b(n.prototype, t), n;
}
function x(e, n, r, a) {
	if (r ||= {}, i?.createEvent && (e.dispatchEvent || e.fireEvent && e !== t)) {
		let t = i.createEvent("Events");
		t.initEvent(n, !0, !0), r = b(t, r), e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent(n, r);
	} else if (e.hcEvents) {
		r.target || b(r, {
			preventDefault: function() {
				r.defaultPrevented = !0;
			},
			target: e,
			type: n
		});
		let t = [], i = e, a = !1;
		for (; i.hcEvents;) Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents[n] && (t.length && (a = !0), t.unshift.apply(t, i.hcEvents[n])), i = Object.getPrototypeOf(i);
		a && t.sort((e, t) => e.order - t.order), t.forEach((t) => {
			t.fn.call(e, r, e) === !1 && r.preventDefault();
		});
	}
	a && !r.defaultPrevented && a.call(e, r);
}
var te = (e = "") => ({
	center: .5,
	right: 1,
	middle: .5,
	bottom: 1
})[e] || 0;
function ne(e, t) {
	let n = !t, r, i, a, o;
	return e.forEach((e) => {
		if (e.length > 1) for (i = e.length - 1, o = i; o > 0; o--) a = e[o] - e[o - 1], a < 0 && !n ? (t?.(), t = void 0) : a && (r === void 0 || a < r) && (r = a);
	}), r;
}
function S(e) {
	return 10 ** Math.floor(Math.log(e) / Math.LN10);
}
function re(e, t) {
	let n = e.split(".");
	for (; n.length && h(t);) {
		let e = n.shift();
		if (e === void 0 || e === "__proto__") return;
		if (e === "this") {
			let e;
			return A(t) && (e = t["@this"]), e ?? t;
		}
		let r = t[e.replace(/[\\'"]/g, "")];
		if (!h(r) || typeof r == "function" || typeof r.nodeType == "number" || r === a) return;
		t = r;
	}
	return t;
}
function C(e, t, n) {
	let r;
	if (t === "width") {
		let t = Math.min(e.offsetWidth, e.scrollWidth), n = e.getBoundingClientRect?.().width;
		return n < t && n >= t - 1 && (t = Math.floor(n)), Math.max(0, t - (C(e, "padding-left", !0) || 0) - (C(e, "padding-right", !0) || 0));
	}
	if (t === "height") return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (C(e, "padding-top", !0) || 0) - (C(e, "padding-bottom", !0) || 0));
	let i = a.getComputedStyle(e, void 0);
	return i && (r = i.getPropertyValue(t), (n ?? t !== "opacity") && (r = P(r))), r;
}
var w = Array.prototype.find ? function(e, t) {
	return e.find(t);
} : function(e, t) {
	let n, r = e.length;
	for (n = 0; n < r; n++) if (t(e[n], n)) return e[n];
};
function ie(e) {
	h(e) && clearTimeout(e);
}
function T(e) {
	return A(e) && typeof e.nodeType == "number";
}
function E(e) {
	let t = e?.constructor;
	return !!(A(e, !0) && !T(e) && t?.name && t.name !== "Object");
}
function D(e) {
	return typeof e == "number" && !isNaN(e) && e < Infinity && e > -Infinity;
}
function O(e) {
	return typeof e == "string";
}
function k(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Array]" || t === "[object Array Iterator]";
}
function ae(e) {
	return typeof e == "function";
}
function A(e, t) {
	return !!e && typeof e == "object" && (!t || !k(e));
}
function j(e, ...t) {
	let n, r = [e, ...t], i = {}, a = function(e, t) {
		return typeof e != "object" && (e = {}), M(t, function(n, r) {
			r !== "__proto__" && r !== "constructor" && (A(n, !0) && !E(n) && !T(n) ? e[r] = a(e[r] || {}, n) : e[r] = t[r]);
		}), e;
	};
	e === !0 && (i = r[1], r = Array.prototype.slice.call(r, 2));
	let o = r.length;
	for (n = 0; n < o; n++) i = a(i, r[n]);
	return i;
}
function oe(e, t, n, r, i) {
	let a, o = e;
	n ??= S(e);
	let s = e / n;
	for (t || (t = i ? [
		1,
		1.2,
		1.5,
		2,
		2.5,
		3,
		4,
		5,
		6,
		8,
		10
	] : [
		1,
		2,
		2.5,
		5,
		10
	], r === !1 && (n === 1 ? t = t.filter(function(e) {
		return e % 1 == 0;
	}) : n <= .1 && (t = [1 / n]))), a = 0; a < t.length && (o = t[a], !(i && o * n >= e || !i && s <= (t[a] + (t[a + 1] || t[a])) / 2)); a++);
	return o = d(o * n, -Math.round(Math.log(.001) / Math.LN10)), o;
}
function M(e, t, n) {
	for (let r in e) Object.hasOwnProperty.call(e, r) && t.call(n || e[r], e[r], r, e);
}
function se(e) {
	let t = i.documentElement, n = e.parentElement || e.parentNode ? e.getBoundingClientRect() : {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	};
	return {
		top: n.top + (a.pageYOffset || t.scrollTop) - (t.clientTop || 0),
		left: n.left + (a.pageXOffset || t.scrollLeft) - (t.clientLeft || 0),
		width: n.width,
		height: n.height
	};
}
function N(e, t, n) {
	return Array((t || 2) + 1 - String(e).replace("-", "").length).join(n || "0") + e;
}
function ce(...e) {
	let t = e.length;
	for (let n = 0; n < t; n++) {
		let t = e[n];
		if (t != null) return t;
	}
}
function P(e, t) {
	return parseInt(e, t || 10);
}
function le(e, t) {
	return e.indexOf(t) < 0 && !!e.push(t);
}
function ue(e, t, n) {
	return /%$/.test(e) ? t * parseFloat(e) / 100 + (n || 0) : parseFloat(e);
}
function de(e, ...t) {
	let n, r;
	do {
		n = e;
		for (r of t) e = e.replace(r[0], r[1]);
	} while (e !== n);
	return e;
}
function F(e, t, n) {
	function r(t, n) {
		let r = e.removeEventListener;
		r && r.call(e, t, n, !1);
	}
	function i(n) {
		let i, a;
		e.nodeName && (t ? (i = {}, i[t] = !0) : i = n, M(i, function(e, t) {
			if (n[t]) for (a = n[t].length; a--;) r(t, n[t][a].fn);
		}));
	}
	let a = typeof e == "function" && e.prototype || e;
	if (Object.hasOwnProperty.call(a, "hcEvents")) {
		let e = a.hcEvents;
		if (t) {
			let a = e[t] || [];
			n ? (e[t] = a.filter(function(e) {
				return n !== e.fn;
			}), r(t, n)) : (i(e), e[t] = []);
		} else i(e), delete a.hcEvents;
	}
}
function I(e) {
	return k(e) ? e : [e];
}
function fe(e, t) {
	let n = e.length, r, i = 0;
	for (; i < n; i++) e[i].safeI = i;
	for (e.sort(function(e, n) {
		return r = t(e, n), r === 0 ? e.safeI - n.safeI : r;
	}), i = 0; i < n; i++) delete e[i].safeI;
}
function pe(e, t, n) {
	return t > 0 ? setTimeout(e, t, n) : (e.call(0, n), -1);
}
function L(e) {
	return O(e) ? e.substring(0, 1).toUpperCase() + e.substring(1) : String(e);
}
function me(e, t, n) {
	let r = e[t];
	e[t] = function() {
		let e = arguments, t = this;
		return n.apply(this, [function() {
			return r.apply(t, arguments.length ? arguments : e);
		}].concat([].slice.call(arguments)));
	};
}
//#endregion
//#region node_modules/highcharts/es-modules/Core/Utilities.js
var { charts: R, win: z } = t;
function B(e, n, r, i) {
	let a = n ? "Highcharts error" : "Highcharts warning";
	e === 32 && (e = `${a}: Deprecated member`);
	let o = D(e), s = o ? `${a} #${e}: www.highcharts.com/errors/${e}/` : e.toString(), c = function() {
		if (n) throw Error(s);
		z.console && B.messages.indexOf(s) === -1 && console.warn(s);
	};
	if (i !== void 0) {
		let e = "";
		o && (s += "?"), M(i, function(t, n) {
			e += `\n - ${n}: ${t}`, o && (s += encodeURI(n) + "=" + encodeURI(t));
		}), s += e;
	}
	x(t, "displayError", {
		chart: r,
		code: e,
		message: s,
		params: i
	}, c), B.messages.push(s);
}
(function(e) {
	e.messages = [];
})(B ||= {});
function he(e, t) {
	let n = e.options.index, r = t.length, i;
	for (i = e.options.isInternal ? r : 0; i < r + 1; i++) if (!t[i] || D(n) && n < (t[i].options.index ?? t[i]._i) || t[i].options.isInternal) {
		t.splice(i, 0, e);
		break;
	}
	return i;
}
var V = {
	millisecond: 1,
	second: 1e3,
	minute: 6e4,
	hour: 36e5,
	day: 864e5,
	week: 6048e5,
	month: 24192e5,
	year: 314496e5
};
Math.easeInOutSine = function(e) {
	return -.5 * (Math.cos(Math.PI * e) - 1);
};
var H, ge = function() {
	let e = Math.random().toString(36).substring(2, 9) + "-", t = 0;
	return function() {
		return "highcharts-" + (H ? "" : e) + t++;
	};
}();
function _e(e) {
	return H = e ?? H;
}
z.jQuery && (z.jQuery.fn.highcharts = function() {
	let e = [].slice.call(arguments);
	if (this[0]) return e[0] ? (new t[O(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]), this) : R[l(this[0], "data-highcharts-chart")];
});
//#endregion
//#region node_modules/highcharts/es-modules/Shared/TimeBase.js
var { pageLang: ve, win: U } = t, ye = t.isSafari && U.Intl && !U.Intl.DateTimeFormat.prototype.formatRange, be = (e) => e.main === void 0, xe = class {
	constructor(e, t) {
		this.options = { timezone: "UTC" }, this.variableTimezone = !1, this.Date = U.Date, this.lang = t, this.update(e);
	}
	update(e = {}) {
		this.dTLCache = {}, this.options = e = j(!0, this.options, e);
		let { timezoneOffset: t, useUTC: n, locale: r } = e;
		this.Date = e.Date || U.Date || Date;
		let i = e.timezone;
		h(n) && (i = n ? "UTC" : void 0), t && t % 60 == 0 && (i = "Etc/GMT" + (t > 0 ? "+" : "") + t / 60), this.variableTimezone = i !== "UTC" && i?.indexOf("Etc/GMT") !== 0, this.timezone = i, this.lang && r && (this.lang.locale = r), [
			"months",
			"shortMonths",
			"weekdays",
			"shortWeekdays"
		].forEach((e) => {
			let t = /months/i.test(e), n = /short/.test(e), r = { timeZone: "UTC" };
			r[t ? "month" : "weekday"] = n ? "short" : "long", this[e] = (t ? [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			] : [
				3,
				4,
				5,
				6,
				7,
				8,
				9
			]).map((e) => this.dateFormat(r, (t ? 31 : 1) * 24 * 36e5 * e));
		});
	}
	toParts(e) {
		let [t, n, r, i, a, o, s] = this.dateTimeFormat({
			weekday: "narrow",
			day: "numeric",
			month: "numeric",
			year: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		}, e, "es").split(/(?:, | |\/|:)/g);
		return [
			+i,
			r - 1,
			+n,
			+a,
			+o,
			+s,
			Math.floor(Number(e) || 0) % 1e3,
			"DLMXJVS".indexOf(t)
		];
	}
	dateTimeFormat(e, t, n = this.options.locale || this.lang?.locale || ve) {
		let r = JSON.stringify(e) + n;
		O(e) && (e = this.str2dtf(e));
		let i = this.dTLCache[r];
		if (!i) {
			e.timeZone ?? (e.timeZone = this.timezone);
			try {
				i = new Intl.DateTimeFormat(n, e);
			} catch (t) {
				/Invalid time zone/i.test(t.message) ? (B(34), e.timeZone = "UTC", i = new Intl.DateTimeFormat(n, e)) : B(t.message, !1);
			}
		}
		return this.dTLCache[r] = i, i?.format(t) || "";
	}
	str2dtf(e, t = {}) {
		let n = {
			L: { fractionalSecondDigits: 3 },
			S: { second: "2-digit" },
			M: { minute: "numeric" },
			H: { hour: "2-digit" },
			k: { hour: "numeric" },
			E: { weekday: "narrow" },
			a: { weekday: "short" },
			A: { weekday: "long" },
			d: { day: "2-digit" },
			e: { day: "numeric" },
			b: { month: "short" },
			B: { month: "long" },
			m: { month: "2-digit" },
			o: { month: "numeric" },
			y: { year: "2-digit" },
			Y: { year: "numeric" }
		};
		return Object.keys(n).forEach((r) => {
			e.indexOf(r) !== -1 && b(t, n[r]);
		}), t;
	}
	makeTime(e, t, n = 1, r = 0, i, a, o) {
		let s = this.Date.UTC(e, t, n, r, i || 0, a || 0, o || 0);
		if (this.timezone !== "UTC") {
			let e = this.getTimezoneOffset(s), n = (r - e / V.hour + 24) % 24;
			if (s += e, [
				2,
				3,
				8,
				9,
				10,
				11
			].indexOf(t) !== -1 && (n < 5 || n > 20)) {
				let t = this.getTimezoneOffset(s);
				e === t ? e - 36e5 === this.getTimezoneOffset(s - 36e5) && !ye && (s -= 36e5) : s += t - e;
			}
		}
		return s;
	}
	parse(e) {
		if (!O(e)) return e ?? void 0;
		e = e.replace(/\//g, "-").replace(/(GMT|UTC)/, "");
		let t = e.indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(e), n = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(e);
		!t && !n && (e += "Z");
		let r = Date.parse(e);
		if (D(r)) return r + (!t || n ? this.getTimezoneOffset(r) : 0);
	}
	getTimezoneOffset(e) {
		if (this.timezone !== "UTC") {
			let [t, n, r, i, a = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, e, "en").split(/(GMT|:)/).map(Number), o = -(r + a / 60) * 60 * 6e4;
			if (D(o)) return o;
		}
		return 0;
	}
	dateFormat(e, n, r) {
		let i = this.lang;
		if (!h(n) || isNaN(n)) return i?.invalidDate || "";
		if (e ??= "%Y-%m-%d %H:%M:%S", O(e)) {
			let t = /%\[([a-zA-Z]+)\]/g, r;
			for (; r = t.exec(e);) e = e.replace(r[0], this.dateTimeFormat(r[1], n, i?.locale));
		}
		if (O(e) && e.indexOf("%") !== -1) {
			let r = this, [a, o, s, c, l, u, d, f] = this.toParts(n), p = i?.weekdays || this.weekdays, m = i?.shortWeekdays || this.shortWeekdays, h = i?.months || this.months, g = i?.shortMonths || this.shortMonths;
			M(b({
				a: m ? m[f] : p[f].substr(0, 3),
				A: p[f],
				d: N(s),
				e: N(s, 2, " "),
				w: f,
				v: i?.weekFrom ?? "",
				b: g[o],
				B: h[o],
				m: N(o + 1),
				o: o + 1,
				y: a.toString().substr(2, 2),
				Y: a,
				H: N(c),
				k: c,
				I: N(c % 12 || 12),
				l: c % 12 || 12,
				M: N(l),
				p: c < 12 ? "AM" : "PM",
				P: c < 12 ? "am" : "pm",
				S: N(u),
				L: N(d, 3)
			}, t.dateFormats), function(t, i) {
				if (O(e)) for (; e.indexOf("%" + i) !== -1;) e = e.replace("%" + i, typeof t == "function" ? t.call(r, n, r) : t);
			});
		} else if (A(e)) {
			let t = (this.getTimezoneOffset(n) || 0) / 36e5, r = this.timezone || "Etc/GMT" + (t >= 0 ? "+" : "") + t, { prefix: i = "", suffix: a = "" } = e;
			e = i + this.dateTimeFormat(b({ timeZone: r }, e), n) + a;
		}
		return r ? L(e) : e;
	}
	resolveDTLFormat(e) {
		return A(e, !0) ? A(e, !0) && be(e) ? { main: e } : e : (e = I(e), {
			main: e[0],
			from: e[1],
			to: e[2]
		});
	}
	getDateFormat(e, t, n, r) {
		let i = this.dateFormat("%m-%d %H:%M:%S.%L", t), a = "01-01 00:00:00.000", o = {
			millisecond: 15,
			second: 12,
			minute: 9,
			hour: 6,
			day: 3
		}, s = "millisecond", c = s;
		for (s in V) {
			if (e && e === V.week && +this.dateFormat("%w", t) === n && i.substr(6) === a.substr(6)) {
				s = "week";
				break;
			}
			if (e && V[s] > e) {
				s = c;
				break;
			}
			if (o[s] && i.substr(o[s]) !== a.substr(o[s])) break;
			s !== "week" && (c = s);
		}
		return this.resolveDTLFormat(r[s]).main;
	}
}, W = class extends xe {
	getBoundaryTicks(e, t, n, r) {
		let i = {};
		if (t === V.year) return i;
		let a = h(n) && h(r), o = t < V.hour, s = t < V.day, c = t < V.month, l = t >= V.hour ? 9e5 : t >= V.minute ? 6e4 : t >= V.second && 1e3;
		if (e.length < 1e4) {
			let u = !0;
			for (let d = 0; d < e.length; d++) {
				let f = e[d];
				if (a) {
					if (f < n) continue;
					if (f > r) break;
				}
				if (u) {
					if (t === V.month) {
						i[f] = "year", u = !1;
						continue;
					}
					if (t === V.hour) {
						i[f] = "day", u = !1;
						continue;
					}
				}
				if (l && f % l !== 0) {
					u = !1;
					continue;
				}
				let [, p, m, h, g, _, v] = this.toParts(f), y = !h && !g && !_ && !v;
				o && g === 0 && (i[f] = "hour"), s && y && (i[f] = "day"), c && m === 1 && y && (i[f] = "month"), p === 0 && m === 1 && y && (i[f] = "year"), u = !1;
			}
		}
		return i;
	}
	getTimeTicks(e, t, n, r) {
		let i = this, a = [], { count: o = 1, unitRange: s } = e, c = t, l = n, [u, d, f, p, m, g] = i.toParts(t), _ = (t || 0) % 1e3, v;
		if (r ??= 1, h(t)) {
			if (_ = s >= V.second ? 0 : o * Math.floor(_ / o), s >= V.second && (g = s >= V.minute ? 0 : o * Math.floor(g / o)), s >= V.minute && (m = s >= V.hour ? 0 : o * Math.floor(m / o)), s >= V.hour && (p = s >= V.day ? 0 : o * Math.floor(p / o)), s >= V.day && (f = s >= V.month ? 1 : Math.max(1, o * Math.floor(f / o))), s >= V.month && (d = s >= V.year ? 0 : o * Math.floor(d / o)), s >= V.year && (u -= u % o), s === V.week) {
				o && (t = i.makeTime(u, d, f, p, m, g, _));
				let e = this.dateTimeFormat({
					timeZone: this.timezone,
					weekday: "narrow"
				}, t, "es"), n = "DLMXJVS".indexOf(e);
				f += -n + r + (n < r ? -7 : 0);
			}
			t = i.makeTime(u, d, f, p, m, g, _), i.variableTimezone && h(n) && (v = n - t > 4 * V.month || i.getTimezoneOffset(t) !== i.getTimezoneOffset(n));
			let e = t, c = 1;
			for (; e < n;) a.push(e), s === V.year ? e = i.makeTime(u + c * o, 0) : s === V.month ? e = i.makeTime(u, d + c * o) : v && (s === V.day || s === V.week) ? e = i.makeTime(u, d, f + c * o * (s === V.day ? 1 : 7)) : v && s === V.hour && o > 1 ? e = i.makeTime(u, d, f, p + c * o) : e += s * o, c++;
			a.push(e);
		}
		return a.info = b(e, {
			boundaryTicks: this.getBoundaryTicks(a, s, c, l),
			totalRange: s * o
		}), a;
	}
}, { isTouchDevice: Se } = t, G = {
	palette: r,
	colors: Array(10).fill(1).map((e, t) => `var(--highcharts-color-${t})`),
	symbols: [
		"circle",
		"diamond",
		"square",
		"triangle",
		"triangle-down"
	],
	lang: {
		weekFrom: "week from",
		chartTitle: "Chart title",
		locale: void 0,
		loading: "Loading...",
		months: void 0,
		seriesName: "Series {add index 1}",
		shortMonths: void 0,
		weekdays: void 0,
		numericSymbols: [
			"k",
			"M",
			"G",
			"T",
			"P",
			"E"
		],
		pieSliceName: "Slice",
		resetZoom: "Reset zoom",
		yAxisTitle: "Values",
		resetZoomTitle: "Reset zoom level 1:1"
	},
	global: { buttonTheme: {
		fill: "var(--highcharts-neutral-color-3)",
		padding: 8,
		r: 2,
		stroke: "var(--highcharts-neutral-color-20)",
		"stroke-width": 1,
		style: {
			color: "var(--highcharts-neutral-color-80)",
			cursor: "pointer",
			fontSize: "0.8em",
			fontWeight: "normal"
		},
		states: {
			hover: { fill: "var(--highcharts-neutral-color-10)" },
			select: {
				fill: "var(--highcharts-highlight-color-10)",
				style: {
					color: "var(--highcharts-neutral-color-100)",
					fontWeight: "bold"
				}
			},
			disabled: { style: { color: "var(--highcharts-neutral-color-20)" } }
		}
	} },
	time: {
		Date: void 0,
		timezone: "UTC",
		timezoneOffset: 0,
		useUTC: void 0
	},
	chart: n,
	title: {
		style: {
			color: "var(--highcharts-neutral-color-80)",
			fontWeight: "bold"
		},
		text: "Chart title",
		margin: 15,
		minScale: .67
	},
	subtitle: {
		style: {
			color: "var(--highcharts-neutral-color-60)",
			fontSize: "0.8em"
		},
		text: ""
	},
	caption: {
		margin: 15,
		style: {
			color: "var(--highcharts-neutral-color-60)",
			fontSize: "0.8em"
		},
		text: "",
		align: "left",
		verticalAlign: "bottom"
	},
	plotOptions: {},
	legend: {
		enabled: !0,
		align: "center",
		alignColumns: !0,
		className: "highcharts-no-tooltip",
		events: {},
		layout: "horizontal",
		itemMarginBottom: 2,
		itemMarginTop: 2,
		labelFormatter: function() {
			return this.name;
		},
		borderColor: "var(--highcharts-neutral-color-40)",
		borderRadius: 0,
		navigation: {
			style: { fontSize: "0.8em" },
			activeColor: "var(--highcharts-highlight-color-100)",
			inactiveColor: "var(--highcharts-neutral-color-20)"
		},
		itemStyle: {
			color: "var(--highcharts-neutral-color-80)",
			cursor: "pointer",
			fontSize: "0.8em",
			textDecoration: "none",
			textOverflow: "ellipsis"
		},
		itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" },
		itemHiddenStyle: {
			color: "var(--highcharts-neutral-color-60)",
			textDecoration: "line-through"
		},
		shadow: !1,
		itemCheckboxStyle: {
			position: "absolute",
			width: "13px",
			height: "13px"
		},
		squareSymbol: !0,
		symbolPadding: 5,
		verticalAlign: "bottom",
		x: 0,
		y: 0,
		title: { style: {
			color: "var(--highcharts-neutral-color-80)",
			fontSize: "0.8em",
			fontWeight: "bold"
		} }
	},
	loading: {
		labelStyle: {
			fontWeight: "bold",
			position: "relative",
			top: "45%"
		},
		style: {
			position: "absolute",
			backgroundColor: "var(--highcharts-background-color)",
			opacity: .5,
			textAlign: "center"
		}
	},
	tooltip: {
		enabled: !0,
		animation: {
			duration: 300,
			easing: (e) => Math.sqrt(1 - (e - 1) ** 2)
		},
		borderColor: "light-dark(var(--highcharts-neutral-color-5), var(--highcharts-neutral-color-20))",
		borderRadius: 5,
		dateTimeLabelFormats: {
			millisecond: "%[AebHMSL]",
			second: "%[AebHMS]",
			minute: "%[AebHM]",
			hour: "%[AebHM]",
			day: "%[AebY]",
			week: "%v %[AebY]",
			month: "%[BY]",
			year: "%[Y]"
		},
		footerFormat: "",
		header: {
			distance: 5,
			shape: "callout",
			style: { fontSize: "1em" }
		},
		hideDelay: 500,
		showDelay: 0,
		padding: 8,
		position: {
			x: 0,
			y: 3
		},
		shared: !1,
		snap: Se ? 25 : 10,
		headerFormat: "<span style=\"font-size: 0.8em\">{ucfirst point.key}</span><br/>",
		pointFormat: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>",
		backgroundColor: "var(--highcharts-background-color)",
		borderWidth: void 0,
		stickOnContact: !1,
		style: {
			color: "var(--highcharts-neutral-color-80)",
			cursor: "default",
			fontSize: "0.8em"
		},
		useHTML: !1
	},
	credits: {
		enabled: !0,
		href: "https://www.highcharts.com?credits",
		position: {
			align: "right",
			verticalAlign: "bottom",
			x: -10,
			y: -5
		},
		style: {
			cursor: "pointer",
			color: "var(--highcharts-neutral-color-40)",
			fontSize: "0.6em"
		},
		text: "Highcharts.com"
	}
}, K = new W(G.time, G.lang);
function Ce() {
	return G;
}
function we(e) {
	return x(t, "setOptions", { options: e }), j(!0, G, e), e.time && K.update(G.time), e.lang && "locale" in e.lang && K.update({ locale: e.lang.locale }), e.lang?.chartTitle && (G.title = {
		...G.title,
		text: e.lang.chartTitle
	}), G;
}
var Te = {
	defaultOptions: G,
	defaultTime: K,
	getOptions: Ce,
	setOptions: we
}, { win: Ee } = t, q = (e, t, n) => n === 0 ? e : n === 1 ? t : `color-mix(in srgb,${e},${t} ${n * 100}%)`, J = (e) => O(e) && !!e && e !== "none", Y = class e {
	static parse(t) {
		return t ? new e(t) : e.None;
	}
	constructor(n) {
		this.rgba = [
			NaN,
			NaN,
			NaN,
			NaN
		], this.input = n;
		let r = t.Color;
		if (r && r !== e) return new r(n);
		let i, a, o, s;
		if (typeof n == "object" && n.stops !== void 0) this.stops = n.stops.map((t) => new e(t[1]));
		else if (typeof n == "string") for (this.input = n = e.names[n.toLowerCase()] || n, o = e.parsers.length; o-- && !a;) s = e.parsers[o], i = s.regex.exec(n), i && (a = s.parse(i));
		a && (this.rgba = a);
	}
	get(e) {
		let t = this.input, n = this.rgba;
		if (this.output) return this.output;
		if (typeof t == "object" && this.stops !== void 0) {
			let n = j(t);
			return n.stops = [].slice.call(n.stops), this.stops.forEach((t, r) => {
				n.stops[r] = [n.stops[r][0], t.get(e)];
			}), n;
		}
		return n && D(n[0]) ? e === "rgb" || !e && n[3] === 1 ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : e === "a" ? `${n[3]}` : "rgba(" + n.join(",") + ")" : t;
	}
	brighten(t) {
		let n = this.rgba;
		if (this.stops) this.stops.forEach(function(e) {
			e.brighten(t);
		});
		else if (D(t) && t !== 0) {
			if (D(n[0])) for (let e = 0; e < 3; e++) n[e] += P(t * 255), n[e] < 0 && (n[e] = 0), n[e] > 255 && (n[e] = 255);
			else e.useColorMix && J(this.input) && (this.output = q(this.input, t > 0 ? "white" : "black", Math.abs(t)));
		}
		return this;
	}
	setOpacity(t) {
		return D(this.rgba[0]) ? this.rgba[3] = t : e.useColorMix && J(this.input) && (this.output = q(this.input, "#0000", 1 - t)), this;
	}
	tweenTo(t, n) {
		let r = this.rgba, i = t.rgba;
		if (!D(r[0]) || !D(i[0])) return e.useColorMix && J(this.input) && J(t.input) && n < .99 ? q(this.input, t.input, n) : t.input || "none";
		let a = i[3] !== 1 || r[3] !== 1, o = (e, t) => e + (r[t] - e) * (1 - n), s = i.slice(0, 3).map(o).map(Math.round);
		return a && s.push(o(i[3], 3)), (a ? "rgba(" : "rgb(") + s.join(",") + ")";
	}
};
Y.names = {
	white: "#ffffff",
	black: "#000000"
}, Y.parsers = [
	{
		regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
		parse: function(e) {
			return [
				P(e[1]),
				P(e[2]),
				P(e[3]),
				parseFloat(e[4], 10)
			];
		}
	},
	{
		regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
		parse: function(e) {
			return [
				P(e[1]),
				P(e[2]),
				P(e[3]),
				1
			];
		}
	},
	{
		regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
		parse: function(e) {
			return [
				P(e[1] + e[1], 16),
				P(e[2] + e[2], 16),
				P(e[3] + e[3], 16),
				h(e[4]) ? P(e[4] + e[4], 16) / 255 : 1
			];
		}
	},
	{
		regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
		parse: function(e) {
			return [
				P(e[1], 16),
				P(e[2], 16),
				P(e[3], 16),
				h(e[4]) ? P(e[4], 16) / 255 : 1
			];
		}
	}
], Y.useColorMix = Ee.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)"), Y.None = new Y("");
//#endregion
//#region node_modules/highcharts/es-modules/Core/Animation/Fx.js
var { parse: X } = Y, { win: De } = t, Z = class e {
	constructor(e, t, n) {
		this.pos = NaN, this.options = t, this.elem = e, this.prop = n;
	}
	dSetter() {
		let e = this.paths, t = e?.[0], n = e?.[1], r = this.now || 0, i = [];
		if (r === 1 || !t || !n) i = this.toD || [];
		else if (t.length === n.length && r < 1) for (let e = 0; e < n.length; e++) {
			let a = t[e], o = n[e], s = [];
			for (let e = 0; e < o.length; e++) {
				let t = a[e], n = o[e];
				D(t) && D(n) && (o[0] !== "A" || e !== 4 && e !== 5) ? s[e] = t + r * (n - t) : s[e] = n;
			}
			i.push(s);
		}
		else i = n;
		this.elem.attr("d", i, void 0, !0);
	}
	update() {
		let e = this.elem, t = this.prop, n = this.now ?? 1, r = this.options.step;
		this[t + "Setter"] ? this[t + "Setter"]() : e && e.attr ? e.element && e.attr(t, n, void 0, !0) : e && (e.style[t] = n + (this.unit || "")), r?.call(e, n, this);
	}
	run(t, n, r) {
		let { elem: i, options: a } = this, { complete: o, curAnim: s = {} } = a, c = (e) => !c.stopped && this.step(e), l = De.requestAnimationFrame || function(e) {
			setTimeout(e, 13);
		}, u = () => {
			for (let t = 0; t < e.timers.length; t++) e.timers[t]() || e.timers.splice(t--, 1);
			e.timers.length && l(u);
		};
		t === n && !i["forceAnimate:" + this.prop] ? (delete s[this.prop], o && Object.keys(s).length === 0 && o.call(i)) : (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = n, this.unit = r, this.now = this.start, this.pos = 0, c.elem = i, c.prop = this.prop, c() && e.timers.push(c) === 1 && l(u));
	}
	step(e) {
		let t = +/* @__PURE__ */ new Date(), n = this.options, r = this.elem, i = n.complete, a = n.duration, o = n.curAnim, s, c;
		return r?.attr && !r.element ? s = !1 : e || t >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), o[this.prop] = !0, c = !0, M(o, function(e) {
			e !== !0 && (c = !1);
		}), c && i && i.call(r), s = !1) : (this.pos = n.easing((t - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), s = !0), s;
	}
	initPath(e, t, n) {
		let r = e.startX, i = e.endX, a = n.slice(), o = e.isArea, s = o ? 2 : 1, c = t && n.length > t.length && n.hasStackedCliffs, l, u, d, f, p = t?.slice();
		if (!p || c) return [a, a];
		function m(e, t) {
			for (; e.length < u;) {
				let n = e[0], r = t[u - e.length];
				if (r && n[0] === "M" && (e[0] = r[0] === "C" ? [
					"C",
					n[1],
					n[2],
					n[1],
					n[2],
					n[1],
					n[2]
				] : [
					"L",
					n[1],
					n[2]
				]), e.unshift(n), o) {
					let t = e.pop();
					e.push(e[e.length - 1], t);
				}
			}
		}
		function h(e) {
			for (; e.length < u;) {
				let t = e[Math.floor(e.length / s) - 1].slice();
				if (t[0] === "C" && (t[1] = t[5], t[2] = t[6]), !o) e.push(t);
				else {
					let n = e[Math.floor(e.length / s)].slice();
					e.splice(e.length / 2, 0, t, n);
				}
			}
		}
		if (r && i && i.length) {
			for (d = 0; d < r.length; d++) if (r[d] === i[0]) {
				l = d;
				break;
			} else if (r[0] === i[i.length - r.length + d]) {
				l = d, f = !0;
				break;
			} else if (r[r.length - 1] === i[i.length - r.length + d]) {
				l = r.length - d;
				break;
			}
			l === void 0 && (p = []);
		}
		return p.length && D(l) && (u = a.length + l * s, f ? (m(p, a), h(a)) : (m(a, p), h(p))), [p, a];
	}
	fillSetter() {
		e.prototype.strokeSetter.apply(this, arguments);
	}
	strokeSetter() {
		this.elem.attr(this.prop, X(this.start).tweenTo(X(this.end), this.pos), void 0, !0);
	}
};
Z.timers = [];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Animation/AnimationUtilities.js
function Oe(e, t) {
	t.renderer.globalAnimation = e ?? t.options.chart.animation ?? !0;
}
function Q(e) {
	return A(e) ? j({
		duration: 500,
		defer: 0
	}, e) : {
		duration: e ? 500 : 0,
		defer: 0
	};
}
function ke(e, t, n) {
	let r = Q(t), i = n ? [n] : e.series, a = 0, o = 0;
	return i.forEach((e) => {
		let n = Q(e.options.animation);
		a = A(t) && h(t.defer) ? r.defer : Math.max(a, n.duration + n.defer), o = Math.min(r.duration, n.duration);
	}), e.renderer.forExport && (a = 0), {
		defer: Math.max(0, a - o),
		duration: Math.min(a, o)
	};
}
function Ae(e, t = { pos: 1 }, n) {
	A(n) || (n = {
		duration: arguments[2],
		easing: arguments[3],
		complete: arguments[4]
	}), D(n.duration) || (n.duration = 400), n.easing = typeof n.easing == "function" ? n.easing : Math[n.easing] || Math.easeInOutSine, n.curAnim = j(t), M(t, (r, i) => {
		e && $(e, i);
		let a = new Z(e, n, i), o = t.d, s = i === "dashstyle", c = 0, l, u = "";
		i === "d" && k(o) ? (a.paths = a.initPath(e, e.pathArray, o), a.toD = o, l = 1) : e?.attr ? (c = e.attr(i), s && e.attr(i, r)) : e && (c = +(C(e, i) || 0), i !== "opacity" && (u = "px")), l ||= r, typeof l == "string" && l.match("px") && (l = l.replace(/px/g, "")), h(l) && !s && a.run(c, l, u);
	});
}
var $ = (e, t) => Z.timers.forEach((n) => {
	n.elem === e && (!t || t === n.prop) && (n.stopped = !0);
});
//#endregion
export { le as $, ee as A, E as B, m as C, _ as D, v as E, S as F, O as G, ae as H, re as I, M as J, j as K, C as L, x as M, te as N, y as O, ne as P, ce as Q, ie as R, p as S, g as T, D as U, T as V, A as W, P as X, se as Y, N as Z, s as _, $ as a, pe as at, d as b, Te as c, r as ct, he as d, ue as et, V as f, c as g, o as h, Oe as i, fe as it, w as j, b as k, W as l, t as lt, _e as m, Ae as n, de as nt, Z as o, L as ot, ge as p, oe as q, ke as r, I as rt, Y as s, me as st, Q as t, F as tt, B as u, l as v, h as w, f as x, u as y, k as z };
