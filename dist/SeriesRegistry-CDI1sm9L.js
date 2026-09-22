import { A as e, C as t, G as n, H as r, I as i, J as a, K as o, M as s, O as c, S as l, U as u, W as d, b as f, c as p, h as m, k as h, lt as g, ot as _, p as v, rt as y, t as b, tt as x, u as S, v as C, z as w } from "./AnimationUtilities-eb22eIjK.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/HTML/AST.js
var { SVG_NS: T, win: E } = g, { trustedTypes: D } = E, O = D && r(D.createPolicy) && D.createPolicy("highcharts", { createHTML: (e) => e }), k = O ? O.createHTML("") : "", A = class e {
	static filterUserAttributes(t) {
		return a(t, (r, i) => {
			let a = !0;
			e.allowedAttributes.indexOf(i) === -1 && (a = !1), [
				"background",
				"dynsrc",
				"href",
				"lowsrc",
				"src",
				"xlink:href"
			].indexOf(i) !== -1 && (a = n(r) && e.allowedReferences.some((e) => r.indexOf(e) === 0)), a || (S(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), n(r) && t[i] && (t[i] = r.replace(/</g, "&lt;"));
		}), t;
	}
	static parseStyle(e) {
		return e.split(";").reduce((e, t) => {
			let n = t.split(":").map((e) => e.trim()), r = n.shift();
			return r && n.length && (e[r.replace(/-([a-z])/g, (e) => e[1].toUpperCase())] = n.join(":")), e;
		}, {});
	}
	static setElementHTML(t, n) {
		t.innerHTML = e.emptyHTML, n && new e(n).addToDOM(t);
	}
	constructor(e) {
		this.nodes = typeof e == "string" ? this.parseMarkup(e) : e;
	}
	addToDOM(n) {
		function r(n, i) {
			let o;
			return y(n).forEach(function(n) {
				let s = n.tagName, c = n.textContent ? g.doc.createTextNode(n.textContent) : void 0, l = e.bypassHTMLFiltering, u;
				if (s) {
					if (s === "#text") u = c;
					else if (e.allowedTags.indexOf(s) !== -1 || l) {
						let o = s === "svg" ? T : i.namespaceURI || T, d = g.doc.createElementNS(o, s), f = n.attributes || {};
						a(n, function(e, t) {
							t !== "tagName" && t !== "attributes" && t !== "children" && t !== "style" && t !== "textContent" && (f[t] = e);
						}), C(d, l ? f : e.filterUserAttributes(f)), n.style && t(d, n.style), c && d.appendChild(c), r(n.children || [], d), u = d;
					} else S(33, !1, void 0, { "Invalid tagName in config": s });
				}
				u && i.appendChild(u), o = u;
			}), o;
		}
		return r(this.nodes, n);
	}
	parseMarkup(t) {
		let n = [];
		t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
		let r;
		try {
			r = new DOMParser().parseFromString(O ? O.createHTML(t) : t, "text/html");
		} catch {
			try {
				r = new DOMParser().parseFromString(t, "text/html");
			} catch {}
		}
		r || (r = g.doc.implementation.createHTMLDocument(""), r.body.innerHTML = t);
		let i = (t, n) => {
			let r = t.localName || t.nodeName.toLowerCase(), a = { tagName: r };
			r === "#text" && (a.textContent = t.textContent || "");
			let o = t.attributes;
			if (o) {
				let t = {};
				[].forEach.call(o, (n) => {
					n.name === "data-style" ? a.style = e.parseStyle(n.value) : t[n.name] = n.value;
				}), a.attributes = t;
			}
			if (t.childNodes.length) {
				let e = [];
				[].forEach.call(t.childNodes, (t) => {
					i(t, e);
				}), e.length && (a.children = e);
			}
			n.push(a);
		};
		return [].forEach.call(r.body.childNodes, (e) => i(e, n)), n;
	}
};
A.allowedAttributes = /* @__PURE__ */ "alt.aria-controls.aria-describedby.aria-expanded.aria-haspopup.aria-hidden.aria-label.aria-labelledby.aria-live.aria-pressed.aria-readonly.aria-roledescription.aria-selected.aria-sort.class.clip-path.color.colspan.cx.cy.d.disabled.dx.dy.fill.filterUnits.flood-color.flood-opacity.height.href.id.in.in2.markerHeight.markerWidth.offset.opacity.operator.orient.padding.paddingLeft.paddingRight.patternUnits.r.radius.refX.refY.result.role.rowspan.scope.slope.src.startOffset.stdDeviation.stop-color.stop-opacity.stroke-linecap.stroke-width.stroke.style.summary.tabindex.tableValues.target.text-align.text-anchor.textAnchor.textLength.title.type.valign.width.x.x1.x2.xlink:href.y.y1.y2.zIndex".split("."), A.allowedReferences = [
	"https://",
	"http://",
	"mailto:",
	"/",
	"../",
	"./",
	"#"
], A.allowedTags = /* @__PURE__ */ "#text.a.abbr.b.br.button.caption.circle.clipPath.code.dd.defs.div.dl.dt.em.feComponentTransfer.feComposite.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feMerge.feMergeNode.feMorphology.feOffset.filter.h1.h2.h3.h4.h5.h6.hr.i.img.li.linearGradient.marker.ol.p.path.pattern.pre.rect.small.span.stop.strong.sub.sup.svg.table.tbody.td.text.textPath.th.thead.title.tr.tspan.u.ul".split("."), A.emptyHTML = k, A.bypassHTMLFiltering = !1;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Templating.js
var { defaultOptions: j, defaultTime: M } = p, { pageLang: N } = g, P = {
	add: (e, t) => e + t,
	divide: (e, t) => t === 0 ? "" : f(e / t),
	eq: (e, t) => e == t,
	each: function(e) {
		let t = arguments[arguments.length - 1];
		return w(e) ? e.map((n, r) => R(t.body, h(d(n) ? n : { "@this": n }, {
			"@index": r,
			"@first": r === 0,
			"@last": r === e.length - 1
		}))).join("") : !1;
	},
	ge: (e, t) => e >= t,
	gt: (e, t) => e > t,
	if: (e) => !!e,
	le: (e, t) => e <= t,
	lt: (e, t) => e < t,
	multiply: (e, t) => f(e * t, 15),
	ne: (e, t) => e != t,
	subtract: (e, t) => e - t,
	ucfirst: _,
	unless: (e) => !e
}, F = {}, I = (e) => /^["'].+["']$/.test(e);
function L(e, t, n) {
	return M.dateFormat(e, t, n);
}
function R(e = "", t, r) {
	let a = /\{([^{}]+)\}/g, o = /\(([^()]+)\)/g, s = [], c = /f$/, l = /\.(\d)/, u = r?.options?.lang || j.lang, d = r?.time || M, f = r?.numberFormatter || z.bind(r), p = (e = "") => {
		let n;
		return e === "true" ? !0 : e === "false" ? !1 : (n = Number(e)).toString() === e ? n : I(e) ? e.slice(1, -1) : i(e, t);
	}, m, h, g = 0, _;
	for (; (m = a.exec(e)) !== null;) {
		let n = m, r = o.exec(m[1]);
		r && (m = r, _ = !0), h?.isBlock || (h = {
			ctx: t,
			expression: m[1],
			find: m[0],
			isBlock: m[1].charAt(0) === "#",
			start: m.index,
			startInner: m.index + m[0].length,
			length: m[0].length
		});
		let i = (h.isBlock ? n : m)[1].split(" ")[0].replace("#", "");
		P[i] && (h.isBlock && i === h.fn && g++, h.fn || (h.fn = i));
		let a = m[1] === "else";
		if (h.isBlock && h.fn && (m[1] === `/${h.fn}` || a)) {
			if (g) a || g--;
			else {
				let t = h.startInner, n = e.substr(t, m.index - t);
				h.body === void 0 ? (h.body = n, h.startInner = m.index + m[0].length) : h.elseBody = n, h.find += n + m[0], a || (s.push(h), h = void 0);
			}
		} else h.isBlock || s.push(h);
		if (r && !h?.isBlock) break;
	}
	return s.forEach((i) => {
		let { body: a, elseBody: s, expression: m, fn: h } = i, g, _;
		if (h) {
			let e = [i], n = [], o = m.length, c = 0, l;
			for (_ = 0; _ <= o; _++) {
				let e = m.charAt(_);
				!l && (e === "\"" || e === "'") ? l = e : l === e && (l = ""), !l && (e === " " || _ === o) && (n.push(m.substr(c, _ - c)), c = _ + 1);
			}
			for (_ = P[h].length; _--;) e.unshift(p(n[_ + 1]));
			g = P[h].apply(t, e), i.isBlock && typeof g == "boolean" && (g = R(g ? a : s, t, r));
		} else {
			let e = I(m) ? [m] : m.split(":");
			if (g = p(e.shift() || ""), e.length && typeof g == "number") {
				let t = e.join(":");
				if (c.test(t)) {
					let e = parseInt((t.match(l) || ["", "-1"])[1], 10);
					g !== null && (g = f(g, e, u.decimalPoint, t.indexOf(",") > -1 ? u.thousandsSep : ""));
				} else g = d.dateFormat(t, g);
			}
			o.lastIndex = 0, o.test(i.find) && n(g) && (g = `"${g}"`);
		}
		e = e.replace(i.find, g ?? "");
	}), _ ? R(e, t, r) : e;
}
function z(e, t, n, r) {
	e = +e || 0, t = +t;
	let i, a, [o, s] = e.toString().split("e").map(Number), c = this?.options?.lang || j.lang, l = (e.toString().split(".")[1] || "").split("e")[0].length, d = t, f = {};
	n ??= c.decimalPoint, r ??= c.thousandsSep, t === -1 ? t = Math.min(l, 20) : u(t) ? t && s < 0 && (a = t + s, a >= 0 ? (o = +o.toExponential(a).split("e")[0], t = a) : (o = Math.floor(o), e = t < 20 ? +(o * 10 ** s).toFixed(t) : 0, s = 0)) : t = 2, s && (t ??= 2, e = o), u(t) && t >= 0 && (f.minimumFractionDigits = t, f.maximumFractionDigits = t), r === "" && (f.useGrouping = !1);
	let p = r || n, m = p ? "en" : this?.locale || c.locale || N, h = JSON.stringify(f) + m;
	return i = (F[h] ?? (F[h] = new Intl.NumberFormat(m, f))).format(e), p && (i = i.replace(/([,\.])/g, "_$1").replace(/_\,/g, r ?? ",").replace("_.", n ?? ".")), (!t && +i == 0 || s < 0 && !d) && (i = "0"), s && +i != 0 && (i += "e" + (s < 0 ? "" : "+") + s), i;
}
var B = {
	dateFormat: L,
	format: R,
	helpers: P,
	numberFormat: z
}, { defaultOptions: V } = p, { format: H } = B, U = class e {
	constructor(e, t, n) {
		this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = e, this.applyOptions(t, n), this.id ??= v(), this.resolveColor(), this.dataLabelOnNull ??= e.options.nullInteraction, e.chart.pointCount++, this.category = e.xAxis?.categories?.[this.x] ?? this.x, this.key = this.name ?? this.category, s(this, "afterInit");
	}
	applyOptions(t, n, r) {
		let i = this, a = i.series, s = a.options.pointValKey || a.pointValKey;
		return t = e.prototype.optionsToObject.call(this, t), h(i, t), i.options = i.options ? a.chart.options.chart.allowMutatingData ? h(i.options, t) : o(i.options, t) : t, s && (i.y = e.prototype.getNestedProperty.call(i, s)), u(n) && (i.x = n), r || (i.selected && (i.state = "select"), t.group && delete i.group, t.dataLabels && delete i.dataLabels, i.isNull = i.isValid && !i.isValid(), i.formatPrefix = i.isNull ? "null" : "point"), i;
	}
	getOrigin({ x: e = 0, y: t = 0 }, n = {}) {
		let { graphic: r, series: i } = this;
		if (i.chart.inverted && r?.parentGroup && !r?.parentGroup?.rotation) {
			let n = this.pos(!1, e, t);
			n && (e = n[0], t = n[1]);
		}
		e -= (n.width || 0) / 2, t -= (n.height || 0) / 2;
		let a = { x: e };
		return !i.is("column") && !this.plotHigh && (a.y = t), a;
	}
	destroy(e) {
		if (!this.destroyed && !this.condemned) {
			let t = this, n = t.series, r = n.chart, i = r.hoverPoints, a = t.series.chart.renderer.globalAnimation, { duration: o } = b(a), s = () => {
				(t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (x(t), t.destroyElements());
				for (let e in t) delete t[e];
				this.destroyed = !0;
			};
			t.legendItem && r.legend.destroyItem(t), i && (t.setState(), c(i, t), i.length || (r.hoverPoints = void 0)), t === r.hoverPoint && t.onMouseOut(), o && !e && n.condemnedPoints ? (n.condemnedPoints.push(this), this.graphic?.addClass("highcharts-point-condemned"), setTimeout(s, o)) : s(), r.pointCount--;
		}
		this.condemned = !0;
	}
	destroyElements(e = {
		graphic: 1,
		dataLabel: 1
	}) {
		let t = this, n = [], r, i;
		for (e.graphic && n.push("graphic", "connector"), e.dataLabel && n.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = n.length; i--;) r = n[i], t[r] && (t[r] = t[r].destroy());
		["graphic", "dataLabel"].forEach((n) => {
			let r = `${n}s`;
			e[n] && t[r] && (t[r].forEach((e) => {
				e?.element && e.destroy();
			}), delete t[r]);
		});
	}
	firePointEvent(e, t, n) {
		let r = this, i = this.series.options;
		r.manageEvent(e), e === "click" && i.allowPointSelect && (n = function(e) {
			!r.condemned && r.select && r.select(null, e.ctrlKey || e.metaKey || e.shiftKey);
		}), s(r, e, t, n);
	}
	getClassName() {
		let e = this;
		return "highcharts-point" + (e.selected ? " highcharts-point-select" : "") + (e.negative && e.series.options.negativeColor !== !1 ? " highcharts-negative" : "") + (e.isNull ? " highcharts-null-point" : "") + (e.colorIndex === void 0 ? "" : " highcharts-color-" + e.colorIndex) + (e.options.className ? " " + e.options.className : "") + (e.zone?.className ? " " + e.zone.className.replace("highcharts-negative", "") : "");
	}
	getNestedProperty(e) {
		if (e) return e.indexOf("custom.") === 0 ? i(e, this.options) : this[e];
	}
	getZone() {
		let e = this.series, t = e.zones, n = e.zoneAxis || "y", r, i = 0;
		for (r = t[i]; i < t.length && this[n] >= r.value;) r = t[++i];
		return this.nonZonedColor ||= this.color, this.color = r?.color && !this.options.color ? r.color : this.nonZonedColor, r;
	}
	hasNewShapeType() {
		let e = this;
		return (e.graphic && (e.graphic.symbolName || e.graphic.element.nodeName)) !== this.shapeType;
	}
	isValid() {
		return (u(this.x) || this.x instanceof Date) && u(this.y);
	}
	optionsToObject(t) {
		let n = this.series, r = n.options.keys, i = r || n.pointArrayMap || ["y"], a = i.length, o = {}, s, c = 0, l = 0;
		if (u(t) || t === null) o[i[0]] = t;
		else if (w(t)) for (!r && t.length > a && (s = typeof t[0], s === "string" ? n.xAxis?.dateTime ? o.x = n.chart.time.parse(t[0]) : o[n.tupleKey || "name"] = t[0] : s === "number" && (o.x = t[0]), c++); l < a;) (!r || t[c] !== void 0) && (o[i[l]] = t[c]), c++, l++;
		else typeof t == "object" && (o = t, t.dataLabels && (n.hasDataLabels = () => !0), t.marker && (n._hasPointMarkers = !0));
		return (r || !n.options.data) && Object.keys(o).forEach((t) => {
			t.indexOf(".") > 0 && (e.prototype.setNestedProperty(o, o[t], t), delete o[t]);
		}), o;
	}
	pos(e, t = this.plotX, n = this.plotY) {
		let { series: r } = this, { chart: i, xAxis: a, yAxis: o } = r || {}, s = 0, c = 0;
		if (i && u(t) && u(n)) return e && (s = a ? a.pos : i.plotLeft, c = o ? o.pos : i.plotTop), i.inverted && a && o ? [o.len - n + c, a.len - t + s] : [t + s, n + c];
	}
	resolveColor() {
		let { options: e, series: t } = this, n = t.chart, r = n.options.chart, i = n.styledMode, a, o = r.colorCount, s;
		if (delete this.nonZonedColor, t.options.colorByPoint) {
			if (!i) {
				let e = t.options.colors || n.options.colors;
				a = e?.[t.colorCounter], o = e?.length;
			}
			s = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0);
		} else i || (a = t.color), s = t.colorIndex;
		this.colorIndex = e.colorIndex ?? s, this.color = e.color ?? a;
	}
	setNestedProperty(e, t, n) {
		let r = n.split(".");
		return r.some((e) => e === "__proto__" || e === "constructor") || r.reduce(function(e, n, r, i) {
			return e[n] = i.length - 1 === r ? t : d(e[n], !0) && Object.hasOwnProperty.call(e, n) ? e[n] : {}, e[n];
		}, e), e;
	}
	shouldDraw() {
		return !this.isNull;
	}
	tooltipFormatter(e) {
		let { chart: t, pointArrayMap: n = ["y"], tooltipOptions: r } = this.series, { valueDecimals: i = "", valuePrefix: a = "", valueSuffix: o = "" } = r;
		return t.styledMode && (e = t.tooltip?.styledModeFormat(e) || e), n.forEach((t) => {
			t = "{point." + t, (a || o) && (e = e.replace(RegExp(t + "}", "g"), a + t + "}" + o)), e = e.replace(RegExp(t + "}", "g"), t + ":,." + i + "f}");
		}), H(e, this, t);
	}
	update(e, t = !0, r, i) {
		let a = this, o = a.series, s = a.graphic, c = o.chart, l = o.options, u = l.data;
		function f() {
			a.applyOptions(e), s && a.y === null && !a.hasMockGraphic && (a.graphic = s.destroy()), d(e, !0) && (s?.element && e?.marker && e.marker.symbol !== void 0 && (a.graphic = s.destroy()), e?.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()));
			let i = a.index, f = a.optionsToObject(e);
			o.hasProcessedDataTable || (o.dataTable.setRow(f, i), u && (u[i] = d(u[i], !0) || d(e, !0) ? a.options : e ?? u[i])), o.isDirty = o.isDirtyData = !0, "x" in f && (n(f.x) && (o.xColumnIsNumbers = void 0), a.x = o.getX(f.x), a.isNull = a.isValid && !a.isValid(), o.xColumn && (o.xColumn[i] = a.x)), !o.fixedBox && o.hasCartesianSeries && (c.isDirtyBox = !0), l.legendType === "point" && (c.isDirtyLegend = !0), t && c.redraw(r);
		}
		i === !1 ? f() : a.firePointEvent("update", { options: e }, f);
	}
	remove(e, t) {
		this.series.removePoint(this.series.data.indexOf(this), e, t);
	}
	select(e, t) {
		let n = this, r = n.series, i = r.chart;
		e ??= !n.selected, this.selectedStaging = e, n.firePointEvent(e ? "select" : "unselect", { accumulate: t }, function() {
			n.selected = n.options.selected = e, r.options.data && (r.options.data[r.data.indexOf(n)] = n.options), n.setState(e && "select"), t || i.getSelectedPoints().forEach(function(e) {
				let t = e.series, r = t.options;
				e.selected && e !== n && (e.selected = e.options.selected = !1, r.data && (r.data[t.data.indexOf(e)] = e.options), e.setState(i.hoverPoints && r.inactiveOtherPoints ? "inactive" : ""), e.firePointEvent("unselect"));
			});
		}), delete this.selectedStaging;
	}
	onMouseOver(e) {
		let t = this, { inverted: n, pointer: r } = t.series.chart;
		r && (e = e ? r.normalize(e) : r.getChartCoordinatesFromPoint(t, n), r.runPointActions(e, t));
	}
	onMouseOut() {
		let e = this;
		if (!e.series) return;
		let t = e.series.chart;
		e.firePointEvent("mouseOut"), e.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(e) {
			e.setState();
		}), t.hoverPoints = t.hoverPoint = null;
	}
	manageEvent(e) {
		let t = this, n = o(t.series.options.point, t.options).events?.[e];
		r(n) && (!t.hcEvents?.[e] || t.hcEvents?.[e]?.map((e) => e.fn).indexOf(n) === -1) ? (t.importedUserEvent?.(), t.importedUserEvent = m(t, e, n), t.hcEvents && (t.hcEvents[e].userEvent = !0)) : t.importedUserEvent && !n && t.hcEvents?.[e] && t.hcEvents?.[e].userEvent && (x(t, e), delete t.hcEvents[e], Object.keys(t.hcEvents) || delete t.importedUserEvent);
	}
	setState(e, t) {
		let n = this, r = n.series, i = n.state, a = r.options.states?.[e || "normal"] || {}, c = V.plotOptions?.[r.type]?.marker && r.options.marker, l = c?.enabled === !1, f = c?.states?.[e || "normal"] || {}, p = f.enabled === !1, m = n.marker || {}, g = r.chart, _ = c && r.markerAttribs, v = r.halo, y, b, x, S = r.stateMarkerGraphic, C;
		if (e ||= "", e === n.state && !t || n.selected && e !== "select" || a.enabled === !1 || e && (p || l && f.enabled === !1) || e && m.states?.[e]?.enabled === !1) return;
		if (n.state = e, _ && (y = r.markerAttribs(n, e)), n.graphic && !n.hasMockGraphic) {
			if (i && n.graphic.removeClass("highcharts-point-" + i), e && n.graphic.addClass("highcharts-point-" + e), !g.styledMode) {
				b = r.pointAttribs(n, e), x = g.options.chart.animation ?? a.animation;
				let t = b.opacity;
				r.options.inactiveOtherPoints && u(t) && (n.dataLabels || []).forEach(function(e) {
					e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({ opacity: t }, x), e.connector && e.connector.animate({ opacity: t }, x));
				}), n.graphic.animate(b, x);
			}
			y && n.graphic.animate(y, g.options.chart.animation ?? f.animation ?? c.animation), S && S.hide();
		} else e && f && (C = m.symbol || r.symbol, S && S.currentSymbol !== C && (S = S.destroy()), y && (S ? S[t ? "animate" : "attr"]({
			x: y.x,
			y: y.y
		}) : C && (r.stateMarkerGraphic = S = g.renderer.symbol(C, y.x, y.y, y.width, y.height, o(c, f)).add(r.markerGroup), S.currentSymbol = C)), !g.styledMode && S && n.state !== "inactive" && S.attr(r.pointAttribs(n, e))), S && (S[e && n.isInside ? "show" : "hide"](), S.element.point = n, S.addClass(n.getClassName(), !0));
		let w = d(a.halo) ? a.halo : {}, T = n.graphic || S, E = T?.visibility || "inherit";
		w.size && T && E !== "hidden" && !n.isCluster ? (v || (r.halo = v = g.renderer.path().add(T.parentGroup)), v.show()[t ? "animate" : "attr"]({ d: n.haloPath(w.size) }), v.attr({
			class: "highcharts-halo highcharts-color-" + (n.colorIndex ?? r.colorIndex) + (n.className ? " " + n.className : ""),
			visibility: E,
			zIndex: -1
		}), v.point = n, g.styledMode || v.attr(h({
			fill: n.color || r.color,
			"fill-opacity": w.opacity
		}, A.filterUserAttributes(w.attributes || {})))) : v?.point?.haloPath && !v.point.destroyed && v.animate({ d: v.point.haloPath(0) }, null, v.hide), s(n, "afterSetState", { state: e });
	}
	haloPath(e) {
		let t = this.pos();
		return t ? this.series.chart.renderer.symbols.circle(l(t[0], 1) - e, t[1] - e, e * 2, e * 2) : [];
	}
}, { defaultOptions: W } = p, G;
(function(t) {
	t.seriesTypes = g.seriesTypes;
	function n(e, n) {
		let r = W.plotOptions || {}, i = n.defaultOptions, a = n.prototype;
		return a.type = e, a.pointClass ||= U, !t.seriesTypes[e] && (i && (r[e] = i), t.seriesTypes[e] = n, !0);
	}
	t.registerSeriesType = n;
	function r(r, i, a, s, c) {
		let l = W.plotOptions || {};
		i ||= "", l[r] = o(l[i], a), delete t.seriesTypes[r];
		let u = t.seriesTypes[i] || g.Series;
		if (n(r, e(u, s)), t.seriesTypes[r].prototype.type = r, c) {
			class e extends U {}
			h(e.prototype, c), t.seriesTypes[r].prototype.pointClass = e;
		}
		return t.seriesTypes[r];
	}
	t.seriesType = r;
})(G ||= {});
var K = G;
//#endregion
export { A as i, U as n, B as r, K as t };
