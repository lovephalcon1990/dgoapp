/**
 * 修改 echarts.common.min.js 添加如下支持layui扩展的代码：
 * layui&&layui.define?layui.define(function(f){e(t.echarts={});f("echarts",t.echarts)}):
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : layui && layui.define ? layui.define(function (f) {
    e(t.echarts = {});
    f("echarts", t.echarts)
  }) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t) {
      if (null == t || "object" != typeof t)
        return t;
      var n = t,
        i = xd.call(t);
      if ("[object Array]" === i) {
        n = [];
        for (var r = 0, o = t.length; r < o; r++)
          n[r] = e(t[r])
      } else if (yd[i]) {
        var a = t.constructor;
        if (t.constructor.from)
          n = a.from(t);
        else {
          n = new a(t.length);
          for (var r = 0, o = t.length; r < o; r++)
            n[r] = e(t[r])
        }
      } else if (!md[i] && !L(t) && !b(t)) {
        n = {};
        for (var s in t)
          t.hasOwnProperty(s) && (n[s] = e(t[s]))
      }
      return n
    }

    function n(t, i, r) {
      if (!_(i) || !_(t))
        return r ? e(i) : t;
      for (var o in i)
        if (i.hasOwnProperty(o)) {
          var a = t[o],
            s = i[o];
          !_(s) || !_(a) || m(s) || m(a) || b(s) || b(a) || w(s) || w(a) || L(s) || L(a) ? !r && o in t || (t[o] = e(i[o], !0)) : n(a, s, r)
        }
      return t
    }

    function i(t, e) {
      for (var i = t[0], r = 1, o = t.length; r < o; r++)
        i = n(i, t[r], e);
      return i
    }

    function r(t, e) {
      for (var n in e)
        e.hasOwnProperty(n) && (t[n] = e[n]);
      return t
    }

    function o(t, e, n) {
      for (var i in e)
        e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
      return t
    }

    function a() {
      return dd || (dd = Td().getContext("2d")),
        dd
    }

    function s(t, e) {
      if (t) {
        if (t.indexOf)
          return t.indexOf(e);
        for (var n = 0, i = t.length; n < i; n++)
          if (t[n] === e)
            return n
      }
      return -1
    }

    function l(t, e) {
      function n() {}
      var i = t.prototype;
      n.prototype = e.prototype,
        t.prototype = new n;
      for (var r in i)
        t.prototype[r] = i[r];
      t.prototype.constructor = t,
        t.superClass = e
    }

    function h(t, e, n) {
      o(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, n)
    }

    function u(t) {
      if (t)
        return "string" != typeof t && "number" == typeof t.length
    }

    function c(t, e, n) {
      if (t && e)
        if (t.forEach && t.forEach === wd)
          t.forEach(e, n);
        else if (t.length === +t.length)
        for (var i = 0, r = t.length; i < r; i++)
          e.call(n, t[i], i, t);
      else
        for (var o in t)
          t.hasOwnProperty(o) && e.call(n, t[o], o, t)
    }

    function d(t, e, n) {
      if (t && e) {
        if (t.map && t.map === Sd)
          return t.map(e, n);
        for (var i = [], r = 0, o = t.length; r < o; r++)
          i.push(e.call(n, t[r], r, t));
        return i
      }
    }

    function f(t, e, n, i) {
      if (t && e) {
        if (t.reduce && t.reduce === Id)
          return t.reduce(e, n, i);
        for (var r = 0, o = t.length; r < o; r++)
          n = e.call(i, n, t[r], r, t);
        return n
      }
    }

    function p(t, e, n) {
      if (t && e) {
        if (t.filter && t.filter === bd)
          return t.filter(e, n);
        for (var i = [], r = 0, o = t.length; r < o; r++)
          e.call(n, t[r], r, t) && i.push(t[r]);
        return i
      }
    }

    function g(t, e) {
      var n = Md.call(arguments, 2);
      return function () {
        return t.apply(e, n.concat(Md.call(arguments)))
      }
    }

    function v(t) {
      var e = Md.call(arguments, 1);
      return function () {
        return t.apply(this, e.concat(Md.call(arguments)))
      }
    }

    function m(t) {
      return "[object Array]" === xd.call(t)
    }

    function y(t) {
      return "function" == typeof t
    }

    function x(t) {
      return "[object String]" === xd.call(t)
    }

    function _(t) {
      var e = typeof t;
      return "function" === e || !!t && "object" == e
    }

    function w(t) {
      return !!md[xd.call(t)]
    }

    function b(t) {
      return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function M(t) {
      return t !== t
    }

    function S(t) {
      for (var e = 0, n = arguments.length; e < n; e++)
        if (null != arguments[e])
          return arguments[e]
    }

    function I(t, e) {
      return null != t ? t : e
    }

    function T(t, e, n) {
      return null != t ? t : null != e ? e : n
    }

    function A() {
      return Function.call.apply(Md, arguments)
    }

    function C(t) {
      if ("number" == typeof t)
        return [t, t, t, t];
      var e = t.length;
      return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function k(t, e) {
      if (!t)
        throw new Error(e)
    }

    function D(t) {
      t[Ad] = !0
    }

    function L(t) {
      return t[Ad]
    }

    function P(t) {
      t && c(t, function (t, e) {
        this.set(e, t)
      }, this)
    }

    function O(t) {
      return new P(t)
    }

    function z() {}

    function E(t, e) {
      var n = new Dd(2);
      return null == t && (t = 0),
        null == e && (e = 0),
        n[0] = t,
        n[1] = e,
        n
    }

    function N(t, e) {
      return t[0] = e[0],
        t[1] = e[1],
        t
    }

    function B(t) {
      var e = new Dd(2);
      return e[0] = t[0],
        e[1] = t[1],
        e
    }

    function R(t, e, n) {
      return t[0] = e[0] + n[0],
        t[1] = e[1] + n[1],
        t
    }

    function V(t, e, n, i) {
      return t[0] = e[0] + n[0] * i,
        t[1] = e[1] + n[1] * i,
        t
    }

    function W(t, e, n) {
      return t[0] = e[0] - n[0],
        t[1] = e[1] - n[1],
        t
    }

    function G(t) {
      return Math.sqrt(H(t))
    }

    function H(t) {
      return t[0] * t[0] + t[1] * t[1]
    }

    function F(t, e, n) {
      return t[0] = e[0] * n,
        t[1] = e[1] * n,
        t
    }

    function Z(t, e) {
      var n = G(e);
      return 0 === n ? (t[0] = 0,
          t[1] = 0) : (t[0] = e[0] / n,
          t[1] = e[1] / n),
        t
    }

    function U(t, e) {
      return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function X(t, e) {
      return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function j(t, e, n) {
      var i = e[0],
        r = e[1];
      return t[0] = n[0] * i + n[2] * r + n[4],
        t[1] = n[1] * i + n[3] * r + n[5],
        t
    }

    function q(t, e, n) {
      return t[0] = Math.min(e[0], n[0]),
        t[1] = Math.min(e[1], n[1]),
        t
    }

    function Y(t, e, n) {
      return t[0] = Math.max(e[0], n[0]),
        t[1] = Math.max(e[1], n[1]),
        t
    }

    function $() {
      this.on("mousedown", this._dragStart, this),
        this.on("mousemove", this._drag, this),
        this.on("mouseup", this._dragEnd, this),
        this.on("globalout", this._dragEnd, this)
    }

    function K(t, e) {
      return {
        target: t,
        topTarget: e && e.topTarget
      }
    }

    function Q(t, e, n) {
      return {
        type: t,
        event: n,
        target: e.target,
        topTarget: e.topTarget,
        cancelBubble: !1,
        offsetX: n.zrX,
        offsetY: n.zrY,
        gestureEvent: n.gestureEvent,
        pinchX: n.pinchX,
        pinchY: n.pinchY,
        pinchScale: n.pinchScale,
        wheelDelta: n.zrDelta,
        zrByTouch: n.zrByTouch,
        which: n.which
      }
    }

    function J() {}

    function tt(t, e, n) {
      if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
        for (var i, r = t; r;) {
          if (r.clipPath && !r.clipPath.contain(e, n))
            return !1;
          r.silent && (i = !0),
            r = r.parent
        }
        return !i || Rd
      }
      return !1
    }

    function et() {
      var t = new Gd(6);
      return nt(t),
        t
    }

    function nt(t) {
      return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t[4] = 0,
        t[5] = 0,
        t
    }

    function it(t, e) {
      return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t
    }

    function rt(t, e, n) {
      var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        o = e[0] * n[2] + e[2] * n[3],
        a = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];
      return t[0] = i,
        t[1] = r,
        t[2] = o,
        t[3] = a,
        t[4] = s,
        t[5] = l,
        t
    }

    function ot(t, e, n) {
      return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4] + n[0],
        t[5] = e[5] + n[1],
        t
    }

    function at(t, e, n) {
      var i = e[0],
        r = e[2],
        o = e[4],
        a = e[1],
        s = e[3],
        l = e[5],
        h = Math.sin(n),
        u = Math.cos(n);
      return t[0] = i * u + a * h,
        t[1] = -i * h + a * u,
        t[2] = r * u + s * h,
        t[3] = -r * h + u * s,
        t[4] = u * o + h * l,
        t[5] = u * l - h * o,
        t
    }

    function st(t, e, n) {
      var i = n[0],
        r = n[1];
      return t[0] = e[0] * i,
        t[1] = e[1] * r,
        t[2] = e[2] * i,
        t[3] = e[3] * r,
        t[4] = e[4] * i,
        t[5] = e[5] * r,
        t
    }

    function lt(t, e) {
      var n = e[0],
        i = e[2],
        r = e[4],
        o = e[1],
        a = e[3],
        s = e[5],
        l = n * a - o * i;
      return l ? (l = 1 / l,
        t[0] = a * l,
        t[1] = -o * l,
        t[2] = -i * l,
        t[3] = n * l,
        t[4] = (i * s - a * r) * l,
        t[5] = (o * r - n * s) * l,
        t) : null
    }

    function ht(t) {
      return t > Zd || t < -Zd
    }

    function ut(t) {
      this._target = t.target,
        this._life = t.life || 1e3,
        this._delay = t.delay || 0,
        this._initialized = !1,
        this.loop = null != t.loop && t.loop,
        this.gap = t.gap || 0,
        this.easing = t.easing || "Linear",
        this.onframe = t.onframe,
        this.ondestroy = t.ondestroy,
        this.onrestart = t.onrestart,
        this._pausedTime = 0,
        this._paused = !1
    }

    function ct(t) {
      return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }

    function dt(t) {
      return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
    }

    function ft(t) {
      return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function pt(t) {
      return ct(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function gt(t) {
      return ft(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function vt(t, e, n) {
      return n < 0 ? n += 1 : n > 1 && (n -= 1),
        6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function mt(t, e, n) {
      return t + (e - t) * n
    }

    function yt(t, e, n, i, r) {
      return t[0] = e,
        t[1] = n,
        t[2] = i,
        t[3] = r,
        t
    }

    function xt(t, e) {
      return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }

    function _t(t, e) {
      nf && xt(nf, e),
        nf = ef.put(t, nf || e.slice())
    }

    function wt(t, e) {
      if (t) {
        e = e || [];
        var n = ef.get(t);
        if (n)
          return xt(e, n);
        var i = (t += "").replace(/ /g, "").toLowerCase();
        if (i in tf)
          return xt(e, tf[i]),
            _t(t, e),
            e;
        if ("#" !== i.charAt(0)) {
          var r = i.indexOf("("),
            o = i.indexOf(")");
          if (-1 !== r && o + 1 === i.length) {
            var a = i.substr(0, r),
              s = i.substr(r + 1, o - (r + 1)).split(","),
              l = 1;
            switch (a) {
              case "rgba":
                if (4 !== s.length)
                  return void yt(e, 0, 0, 0, 1);
                l = gt(s.pop());
              case "rgb":
                return 3 !== s.length ? void yt(e, 0, 0, 0, 1) : (yt(e, pt(s[0]), pt(s[1]), pt(s[2]), l),
                  _t(t, e),
                  e);
              case "hsla":
                return 4 !== s.length ? void yt(e, 0, 0, 0, 1) : (s[3] = gt(s[3]),
                  bt(s, e),
                  _t(t, e),
                  e);
              case "hsl":
                return 3 !== s.length ? void yt(e, 0, 0, 0, 1) : (bt(s, e),
                  _t(t, e),
                  e);
              default:
                return
            }
          }
          yt(e, 0, 0, 0, 1)
        } else {
          if (4 === i.length)
            return (h = parseInt(i.substr(1), 16)) >= 0 && h <= 4095 ? (yt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1),
              _t(t, e),
              e) : void yt(e, 0, 0, 0, 1);
          if (7 === i.length) {
            var h = parseInt(i.substr(1), 16);
            return h >= 0 && h <= 16777215 ? (yt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1),
              _t(t, e),
              e) : void yt(e, 0, 0, 0, 1)
          }
        }
      }
    }

    function bt(t, e) {
      var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = gt(t[1]),
        r = gt(t[2]),
        o = r <= .5 ? r * (i + 1) : r + i - r * i,
        a = 2 * r - o;
      return e = e || [],
        yt(e, ct(255 * vt(a, o, n + 1 / 3)), ct(255 * vt(a, o, n)), ct(255 * vt(a, o, n - 1 / 3)), 1),
        4 === t.length && (e[3] = t[3]),
        e
    }

    function Mt(t) {
      if (t) {
        var e, n, i = t[0] / 255,
          r = t[1] / 255,
          o = t[2] / 255,
          a = Math.min(i, r, o),
          s = Math.max(i, r, o),
          l = s - a,
          h = (s + a) / 2;
        if (0 === l)
          e = 0,
          n = 0;
        else {
          n = h < .5 ? l / (s + a) : l / (2 - s - a);
          var u = ((s - i) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - o) / 6 + l / 2) / l;
          i === s ? e = d - c : r === s ? e = 1 / 3 + u - d : o === s && (e = 2 / 3 + c - u),
            e < 0 && (e += 1),
            e > 1 && (e -= 1)
        }
        var f = [360 * e, n, h];
        return null != t[3] && f.push(t[3]),
          f
      }
    }

    function St(t, e) {
      var n = wt(t);
      if (n) {
        for (var i = 0; i < 3; i++)
          n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0;
        return kt(n, 4 === n.length ? "rgba" : "rgb")
      }
    }

    function It(t) {
      var e = wt(t);
      if (e)
        return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }

    function Tt(t, e, n) {
      if (e && e.length && t >= 0 && t <= 1) {
        n = n || [];
        var i = t * (e.length - 1),
          r = Math.floor(i),
          o = Math.ceil(i),
          a = e[r],
          s = e[o],
          l = i - r;
        return n[0] = ct(mt(a[0], s[0], l)),
          n[1] = ct(mt(a[1], s[1], l)),
          n[2] = ct(mt(a[2], s[2], l)),
          n[3] = ft(mt(a[3], s[3], l)),
          n
      }
    }

    function At(t, e, n) {
      if (e && e.length && t >= 0 && t <= 1) {
        var i = t * (e.length - 1),
          r = Math.floor(i),
          o = Math.ceil(i),
          a = wt(e[r]),
          s = wt(e[o]),
          l = i - r,
          h = kt([ct(mt(a[0], s[0], l)), ct(mt(a[1], s[1], l)), ct(mt(a[2], s[2], l)), ft(mt(a[3], s[3], l))], "rgba");
        return n ? {
          color: h,
          leftIndex: r,
          rightIndex: o,
          value: i
        } : h
      }
    }

    function Ct(t, e) {
      if ((t = wt(t)) && null != e)
        return t[3] = ft(e),
          kt(t, "rgba")
    }

    function kt(t, e) {
      if (t && t.length) {
        var n = t[0] + "," + t[1] + "," + t[2];
        return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]),
          e + "(" + n + ")"
      }
    }

    function Dt(t, e) {
      return t[e]
    }

    function Lt(t, e, n) {
      t[e] = n
    }

    function Pt(t, e, n) {
      return (e - t) * n + t
    }

    function Ot(t, e, n) {
      return n > .5 ? e : t
    }

    function zt(t, e, n, i, r) {
      var o = t.length;
      if (1 == r)
        for (s = 0; s < o; s++)
          i[s] = Pt(t[s], e[s], n);
      else
        for (var a = o && t[0].length, s = 0; s < o; s++)
          for (var l = 0; l < a; l++)
            i[s][l] = Pt(t[s][l], e[s][l], n)
    }

    function Et(t, e, n) {
      var i = t.length,
        r = e.length;
      if (i !== r)
        if (i > r)
          t.length = r;
        else
          for (a = i; a < r; a++)
            t.push(1 === n ? e[a] : sf.call(e[a]));
      for (var o = t[0] && t[0].length, a = 0; a < t.length; a++)
        if (1 === n)
          isNaN(t[a]) && (t[a] = e[a]);
        else
          for (var s = 0; s < o; s++)
            isNaN(t[a][s]) && (t[a][s] = e[a][s])
    }

    function Nt(t, e, n) {
      if (t === e)
        return !0;
      var i = t.length;
      if (i !== e.length)
        return !1;
      if (1 === n) {
        for (o = 0; o < i; o++)
          if (t[o] !== e[o])
            return !1
      } else
        for (var r = t[0].length, o = 0; o < i; o++)
          for (var a = 0; a < r; a++)
            if (t[o][a] !== e[o][a])
              return !1;
      return !0
    }

    function Bt(t, e, n, i, r, o, a, s, l) {
      var h = t.length;
      if (1 == l)
        for (c = 0; c < h; c++)
          s[c] = Rt(t[c], e[c], n[c], i[c], r, o, a);
      else
        for (var u = t[0].length, c = 0; c < h; c++)
          for (var d = 0; d < u; d++)
            s[c][d] = Rt(t[c][d], e[c][d], n[c][d], i[c][d], r, o, a)
    }

    function Rt(t, e, n, i, r, o, a) {
      var s = .5 * (n - t),
        l = .5 * (i - e);
      return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Vt(t) {
      if (u(t)) {
        var e = t.length;
        if (u(t[0])) {
          for (var n = [], i = 0; i < e; i++)
            n.push(sf.call(t[i]));
          return n
        }
        return sf.call(t)
      }
      return t
    }

    function Wt(t) {
      return t[0] = Math.floor(t[0]),
        t[1] = Math.floor(t[1]),
        t[2] = Math.floor(t[2]),
        "rgba(" + t.join(",") + ")"
    }

    function Gt(t) {
      var e = t[t.length - 1].value;
      return u(e && e[0]) ? 2 : 1
    }

    function Ht(t, e, n, i, r, o) {
      var a = t._getter,
        s = t._setter,
        l = "spline" === e,
        h = i.length;
      if (h) {
        var c, d = u(i[0].value),
          f = !1,
          p = !1,
          g = d ? Gt(i) : 0;
        i.sort(function (t, e) {
            return t.time - e.time
          }),
          c = i[h - 1].time;
        for (var v = [], m = [], y = i[0].value, x = !0, _ = 0; _ < h; _++) {
          v.push(i[_].time / c);
          var w = i[_].value;
          if (d && Nt(w, y, g) || !d && w === y || (x = !1),
            y = w,
            "string" == typeof w) {
            var b = wt(w);
            b ? (w = b,
              f = !0) : p = !0
          }
          m.push(w)
        }
        if (o || !x) {
          for (var M = m[h - 1], _ = 0; _ < h - 1; _++)
            d ? Et(m[_], M, g) : !isNaN(m[_]) || isNaN(M) || p || f || (m[_] = M);
          d && Et(a(t._target, r), M, g);
          var S, I, T, A, C, k, D = 0,
            L = 0;
          if (f)
            var P = [0, 0, 0, 0];
          var O = new ut({
            target: t._target,
            life: c,
            loop: t._loop,
            delay: t._delay,
            onframe: function (t, e) {
              var n;
              if (e < 0)
                n = 0;
              else if (e < L) {
                for (n = S = Math.min(D + 1, h - 1); n >= 0 && !(v[n] <= e); n--)
                ;
                n = Math.min(n, h - 2)
              } else {
                for (n = D; n < h && !(v[n] > e); n++)
                ;
                n = Math.min(n - 1, h - 2)
              }
              D = n,
                L = e;
              var i = v[n + 1] - v[n];
              if (0 !== i)
                if (I = (e - v[n]) / i,
                  l)
                  if (A = m[n],
                    T = m[0 === n ? n : n - 1],
                    C = m[n > h - 2 ? h - 1 : n + 1],
                    k = m[n > h - 3 ? h - 1 : n + 2],
                    d)
                    Bt(T, A, C, k, I, I * I, I * I * I, a(t, r), g);
                  else {
                    if (f)
                      o = Bt(T, A, C, k, I, I * I, I * I * I, P, 1),
                      o = Wt(P);
                    else {
                      if (p)
                        return Ot(A, C, I);
                      o = Rt(T, A, C, k, I, I * I, I * I * I)
                    }
                    s(t, r, o)
                  }
              else if (d)
                zt(m[n], m[n + 1], I, a(t, r), g);
              else {
                var o;
                if (f)
                  zt(m[n], m[n + 1], I, P, 1),
                  o = Wt(P);
                else {
                  if (p)
                    return Ot(m[n], m[n + 1], I);
                  o = Pt(m[n], m[n + 1], I)
                }
                s(t, r, o)
              }
            },
            ondestroy: n
          });
          return e && "spline" !== e && (O.easing = e),
            O
        }
      }
    }

    function Ft(t, e, n, i) {
      n < 0 && (t += n,
          n = -n),
        i < 0 && (e += i,
          i = -i),
        this.x = t,
        this.y = e,
        this.width = n,
        this.height = i
    }

    function Zt(t) {
      for (var e = 0; t >= xf;)
        e |= 1 & t,
        t >>= 1;
      return t + e
    }

    function Ut(t, e, n, i) {
      var r = e + 1;
      if (r === n)
        return 1;
      if (i(t[r++], t[e]) < 0) {
        for (; r < n && i(t[r], t[r - 1]) < 0;)
          r++;
        Xt(t, e, r)
      } else
        for (; r < n && i(t[r], t[r - 1]) >= 0;)
          r++;
      return r - e
    }

    function Xt(t, e, n) {
      for (n--; e < n;) {
        var i = t[e];
        t[e++] = t[n],
          t[n--] = i
      }
    }

    function jt(t, e, n, i, r) {
      for (i === e && i++; i < n; i++) {
        for (var o, a = t[i], s = e, l = i; s < l;)
          r(a, t[o = s + l >>> 1]) < 0 ? l = o : s = o + 1;
        var h = i - s;
        switch (h) {
          case 3:
            t[s + 3] = t[s + 2];
          case 2:
            t[s + 2] = t[s + 1];
          case 1:
            t[s + 1] = t[s];
            break;
          default:
            for (; h > 0;)
              t[s + h] = t[s + h - 1],
              h--
        }
        t[s] = a
      }
    }

    function qt(t, e, n, i, r, o) {
      var a = 0,
        s = 0,
        l = 1;
      if (o(t, e[n + r]) > 0) {
        for (s = i - r; l < s && o(t, e[n + r + l]) > 0;)
          a = l,
          (l = 1 + (l << 1)) <= 0 && (l = s);
        l > s && (l = s),
          a += r,
          l += r
      } else {
        for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0;)
          a = l,
          (l = 1 + (l << 1)) <= 0 && (l = s);
        l > s && (l = s);
        var h = a;
        a = r - l,
          l = r - h
      }
      for (a++; a < l;) {
        var u = a + (l - a >>> 1);
        o(t, e[n + u]) > 0 ? a = u + 1 : l = u
      }
      return l
    }

    function Yt(t, e, n, i, r, o) {
      var a = 0,
        s = 0,
        l = 1;
      if (o(t, e[n + r]) < 0) {
        for (s = r + 1; l < s && o(t, e[n + r - l]) < 0;)
          a = l,
          (l = 1 + (l << 1)) <= 0 && (l = s);
        l > s && (l = s);
        var h = a;
        a = r - l,
          l = r - h
      } else {
        for (s = i - r; l < s && o(t, e[n + r + l]) >= 0;)
          a = l,
          (l = 1 + (l << 1)) <= 0 && (l = s);
        l > s && (l = s),
          a += r,
          l += r
      }
      for (a++; a < l;) {
        var u = a + (l - a >>> 1);
        o(t, e[n + u]) < 0 ? l = u : a = u + 1
      }
      return l
    }

    function $t(t, e) {
      function n(n) {
        var s = o[n],
          h = a[n],
          u = o[n + 1],
          c = a[n + 1];
        a[n] = h + c,
          n === l - 3 && (o[n + 1] = o[n + 2],
            a[n + 1] = a[n + 2]),
          l--;
        var d = Yt(t[u], t, s, h, 0, e);
        s += d,
          0 !== (h -= d) && 0 !== (c = qt(t[s + h - 1], t, u, c, c - 1, e)) && (h <= c ? i(s, h, u, c) : r(s, h, u, c))
      }

      function i(n, i, r, o) {
        var a = 0;
        for (a = 0; a < i; a++)
          h[a] = t[n + a];
        var l = 0,
          u = r,
          c = n;
        if (t[c++] = t[u++],
          0 != --o)
          if (1 !== i) {
            for (var d, f, p, g = s;;) {
              d = 0,
                f = 0,
                p = !1;
              do {
                if (e(t[u], h[l]) < 0) {
                  if (t[c++] = t[u++],
                    f++,
                    d = 0,
                    0 == --o) {
                    p = !0;
                    break
                  }
                } else if (t[c++] = h[l++],
                  d++,
                  f = 0,
                  1 == --i) {
                  p = !0;
                  break
                }
              } while ((d | f) < g);
              if (p)
                break;
              do {
                if (0 !== (d = Yt(t[u], h, l, i, 0, e))) {
                  for (a = 0; a < d; a++)
                    t[c + a] = h[l + a];
                  if (c += d,
                    l += d,
                    (i -= d) <= 1) {
                    p = !0;
                    break
                  }
                }
                if (t[c++] = t[u++],
                  0 == --o) {
                  p = !0;
                  break
                }
                if (0 !== (f = qt(h[l], t, u, o, 0, e))) {
                  for (a = 0; a < f; a++)
                    t[c + a] = t[u + a];
                  if (c += f,
                    u += f,
                    0 === (o -= f)) {
                    p = !0;
                    break
                  }
                }
                if (t[c++] = h[l++],
                  1 == --i) {
                  p = !0;
                  break
                }
                g--
              } while (d >= _f || f >= _f);
              if (p)
                break;
              g < 0 && (g = 0),
                g += 2
            }
            if ((s = g) < 1 && (s = 1),
              1 === i) {
              for (a = 0; a < o; a++)
                t[c + a] = t[u + a];
              t[c + o] = h[l]
            } else {
              if (0 === i)
                throw new Error;
              for (a = 0; a < i; a++)
                t[c + a] = h[l + a]
            }
          } else {
            for (a = 0; a < o; a++)
              t[c + a] = t[u + a];
            t[c + o] = h[l]
          }
        else
          for (a = 0; a < i; a++)
            t[c + a] = h[l + a]
      }

      function r(n, i, r, o) {
        var a = 0;
        for (a = 0; a < o; a++)
          h[a] = t[r + a];
        var l = n + i - 1,
          u = o - 1,
          c = r + o - 1,
          d = 0,
          f = 0;
        if (t[c--] = t[l--],
          0 != --i)
          if (1 !== o) {
            for (var p = s;;) {
              var g = 0,
                v = 0,
                m = !1;
              do {
                if (e(h[u], t[l]) < 0) {
                  if (t[c--] = t[l--],
                    g++,
                    v = 0,
                    0 == --i) {
                    m = !0;
                    break
                  }
                } else if (t[c--] = h[u--],
                  v++,
                  g = 0,
                  1 == --o) {
                  m = !0;
                  break
                }
              } while ((g | v) < p);
              if (m)
                break;
              do {
                if (0 != (g = i - Yt(h[u], t, n, i, i - 1, e))) {
                  for (i -= g,
                    f = (c -= g) + 1,
                    d = (l -= g) + 1,
                    a = g - 1; a >= 0; a--)
                    t[f + a] = t[d + a];
                  if (0 === i) {
                    m = !0;
                    break
                  }
                }
                if (t[c--] = h[u--],
                  1 == --o) {
                  m = !0;
                  break
                }
                if (0 != (v = o - qt(t[l], h, 0, o, o - 1, e))) {
                  for (o -= v,
                    f = (c -= v) + 1,
                    d = (u -= v) + 1,
                    a = 0; a < v; a++)
                    t[f + a] = h[d + a];
                  if (o <= 1) {
                    m = !0;
                    break
                  }
                }
                if (t[c--] = t[l--],
                  0 == --i) {
                  m = !0;
                  break
                }
                p--
              } while (g >= _f || v >= _f);
              if (m)
                break;
              p < 0 && (p = 0),
                p += 2
            }
            if ((s = p) < 1 && (s = 1),
              1 === o) {
              for (f = (c -= i) + 1,
                d = (l -= i) + 1,
                a = i - 1; a >= 0; a--)
                t[f + a] = t[d + a];
              t[c] = h[u]
            } else {
              if (0 === o)
                throw new Error;
              for (d = c - (o - 1),
                a = 0; a < o; a++)
                t[d + a] = h[a]
            }
          } else {
            for (f = (c -= i) + 1,
              d = (l -= i) + 1,
              a = i - 1; a >= 0; a--)
              t[f + a] = t[d + a];
            t[c] = h[u]
          }
        else
          for (d = c - (o - 1),
            a = 0; a < o; a++)
            t[d + a] = h[a]
      }
      var o, a, s = _f,
        l = 0,
        h = [];
      o = [],
        a = [],
        this.mergeRuns = function () {
          for (; l > 1;) {
            var t = l - 2;
            if (t >= 1 && a[t - 1] <= a[t] + a[t + 1] || t >= 2 && a[t - 2] <= a[t] + a[t - 1])
              a[t - 1] < a[t + 1] && t--;
            else if (a[t] > a[t + 1])
              break;
            n(t)
          }
        },
        this.forceMergeRuns = function () {
          for (; l > 1;) {
            var t = l - 2;
            t > 0 && a[t - 1] < a[t + 1] && t--,
              n(t)
          }
        },
        this.pushRun = function (t, e) {
          o[l] = t,
            a[l] = e,
            l += 1
        }
    }

    function Kt(t, e, n, i) {
      n || (n = 0),
        i || (i = t.length);
      var r = i - n;
      if (!(r < 2)) {
        var o = 0;
        if (r < xf)
          return o = Ut(t, n, i, e),
            void jt(t, n, i, n + o, e);
        var a = new $t(t, e),
          s = Zt(r);
        do {
          if ((o = Ut(t, n, i, e)) < s) {
            var l = r;
            l > s && (l = s),
              jt(t, n, n + l, n + o, e),
              o = l
          }
          a.pushRun(n, o),
            a.mergeRuns(),
            r -= o,
            n += o
        } while (0 !== r);
        a.forceMergeRuns()
      }
    }

    function Qt(t, e) {
      return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function Jt(t, e, n) {
      var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        o = null == e.y ? 0 : e.y,
        a = null == e.y2 ? 0 : e.y2;
      return e.global || (i = i * n.width + n.x,
          r = r * n.width + n.x,
          o = o * n.height + n.y,
          a = a * n.height + n.y),
        t.createLinearGradient(i, o, r, a)
    }

    function te(t, e, n) {
      var i = n.width,
        r = n.height,
        o = Math.min(i, r),
        a = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;
      return e.global || (a = a * i + n.x,
          s = s * r + n.y,
          l *= o),
        t.createRadialGradient(a, s, 0, a, s, l)
    }

    function ee() {
      return !1
    }

    function ne(t, e, n) {
      var i = Td(),
        r = e.getWidth(),
        o = e.getHeight(),
        a = i.style;
      return a.position = "absolute",
        a.left = 0,
        a.top = 0,
        a.width = r + "px",
        a.height = o + "px",
        i.width = r * n,
        i.height = o * n,
        i.setAttribute("data-zr-dom-id", t),
        i
    }

    function ie(t) {
      if ("string" == typeof t) {
        var e = Df.get(t);
        return e && e.image
      }
      return t
    }

    function re(t, e, n, i, r) {
      if (t) {
        if ("string" == typeof t) {
          if (e && e.__zrImageSrc === t || !n)
            return e;
          var o = Df.get(t),
            a = {
              hostEl: n,
              cb: i,
              cbPayload: r
            };
          return o ? !ae(e = o.image) && o.pending.push(a) : (!e && (e = new Image),
              e.onload = oe,
              Df.put(t, e.__cachedImgObj = {
                image: e,
                pending: [a]
              }),
              e.src = e.__zrImageSrc = t),
            e
        }
        return t
      }
      return e
    }

    function oe() {
      var t = this.__cachedImgObj;
      this.onload = this.__cachedImgObj = null;
      for (var e = 0; e < t.pending.length; e++) {
        var n = t.pending[e],
          i = n.cb;
        i && i(this, n.cbPayload),
          n.hostEl.dirty()
      }
      t.pending.length = 0
    }

    function ae(t) {
      return t && t.width && t.height
    }

    function se(t, e) {
      var n = t + ":" + (e = e || Ef);
      if (Lf[n])
        return Lf[n];
      for (var i = (t + "").split("\n"), r = 0, o = 0, a = i.length; o < a; o++)
        r = Math.max(Nf(i[o], e).width, r);
      return Pf > Of && (Pf = 0,
          Lf = {}),
        Pf++,
        Lf[n] = r,
        r
    }

    function le(t, e, n, i, r, o, a) {
      return o ? ue(t, e, n, i, r, o, a) : he(t, e, n, i, r, a)
    }

    function he(t, e, n, i, r, o) {
      var a = xe(t, e, r, o),
        s = se(t, e);
      r && (s += r[1] + r[3]);
      var l = a.outerHeight,
        h = new Ft(ce(0, s, n), de(0, l, i), s, l);
      return h.lineHeight = a.lineHeight,
        h
    }

    function ue(t, e, n, i, r, o, a) {
      var s = _e(t, {
          rich: o,
          truncate: a,
          font: e,
          textAlign: n,
          textPadding: r
        }),
        l = s.outerWidth,
        h = s.outerHeight;
      return new Ft(ce(0, l, n), de(0, h, i), l, h)
    }

    function ce(t, e, n) {
      return "right" === n ? t -= e : "center" === n && (t -= e / 2),
        t
    }

    function de(t, e, n) {
      return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e),
        t
    }

    function fe(t, e, n) {
      var i = e.x,
        r = e.y,
        o = e.height,
        a = e.width,
        s = o / 2,
        l = "left",
        h = "top";
      switch (t) {
        case "left":
          i -= n,
            r += s,
            l = "right",
            h = "middle";
          break;
        case "right":
          i += n + a,
            r += s,
            h = "middle";
          break;
        case "top":
          i += a / 2,
            r -= n,
            l = "center",
            h = "bottom";
          break;
        case "bottom":
          i += a / 2,
            r += o + n,
            l = "center";
          break;
        case "inside":
          i += a / 2,
            r += s,
            l = "center",
            h = "middle";
          break;
        case "insideLeft":
          i += n,
            r += s,
            h = "middle";
          break;
        case "insideRight":
          i += a - n,
            r += s,
            l = "right",
            h = "middle";
          break;
        case "insideTop":
          i += a / 2,
            r += n,
            l = "center";
          break;
        case "insideBottom":
          i += a / 2,
            r += o - n,
            l = "center",
            h = "bottom";
          break;
        case "insideTopLeft":
          i += n,
            r += n;
          break;
        case "insideTopRight":
          i += a - n,
            r += n,
            l = "right";
          break;
        case "insideBottomLeft":
          i += n,
            r += o - n,
            h = "bottom";
          break;
        case "insideBottomRight":
          i += a - n,
            r += o - n,
            l = "right",
            h = "bottom"
      }
      return {
        x: i,
        y: r,
        textAlign: l,
        textVerticalAlign: h
      }
    }

    function pe(t, e, n, i, r) {
      if (!e)
        return "";
      var o = (t + "").split("\n");
      r = ge(e, n, i, r);
      for (var a = 0, s = o.length; a < s; a++)
        o[a] = ve(o[a], r);
      return o.join("\n")
    }

    function ge(t, e, n, i) {
      (i = r({}, i)).font = e;
      var n = I(n, "...");
      i.maxIterations = I(i.maxIterations, 2);
      var o = i.minChar = I(i.minChar, 0);
      i.cnCharWidth = se("国", e);
      var a = i.ascCharWidth = se("a", e);
      i.placeholder = I(i.placeholder, "");
      for (var s = t = Math.max(0, t - 1), l = 0; l < o && s >= a; l++)
        s -= a;
      var h = se(n);
      return h > s && (n = "",
          h = 0),
        s = t - h,
        i.ellipsis = n,
        i.ellipsisWidth = h,
        i.contentWidth = s,
        i.containerWidth = t,
        i
    }

    function ve(t, e) {
      var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;
      if (!n)
        return "";
      var o = se(t, i);
      if (o <= n)
        return t;
      for (var a = 0;; a++) {
        if (o <= r || a >= e.maxIterations) {
          t += e.ellipsis;
          break
        }
        var s = 0 === a ? me(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
        o = se(t = t.substr(0, s), i)
      }
      return "" === t && (t = e.placeholder),
        t
    }

    function me(t, e, n, i) {
      for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
        var s = t.charCodeAt(o);
        r += 0 <= s && s <= 127 ? n : i
      }
      return o
    }

    function ye(t) {
      return se("国", t)
    }

    function xe(t, e, n, i) {
      null != t && (t += "");
      var r = ye(e),
        o = t ? t.split("\n") : [],
        a = o.length * r,
        s = a;
      if (n && (s += n[0] + n[2]),
        t && i) {
        var l = i.outerHeight,
          h = i.outerWidth;
        if (null != l && s > l)
          t = "",
          o = [];
        else if (null != h)
          for (var u = ge(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
              minChar: i.minChar,
              placeholder: i.placeholder
            }), c = 0, d = o.length; c < d; c++)
            o[c] = ve(o[c], u)
      }
      return {
        lines: o,
        height: a,
        outerHeight: s,
        lineHeight: r
      }
    }

    function _e(t, e) {
      var n = {
        lines: [],
        width: 0,
        height: 0
      };
      if (null != t && (t += ""),
        !t)
        return n;
      for (var i, r = zf.lastIndex = 0; null != (i = zf.exec(t));) {
        var o = i.index;
        o > r && we(n, t.substring(r, o)),
          we(n, i[2], i[1]),
          r = zf.lastIndex
      }
      r < t.length && we(n, t.substring(r, t.length));
      var a = n.lines,
        s = 0,
        l = 0,
        h = [],
        u = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;
      u && (null != d && (d -= u[1] + u[3]),
        null != f && (f -= u[0] + u[2]));
      for (D = 0; D < a.length; D++) {
        for (var p = a[D], g = 0, v = 0, m = 0; m < p.tokens.length; m++) {
          var y = (L = p.tokens[m]).styleName && e.rich[L.styleName] || {},
            x = L.textPadding = y.textPadding,
            _ = L.font = y.font || e.font,
            w = L.textHeight = I(y.textHeight, ye(_));
          if (x && (w += x[0] + x[2]),
            L.height = w,
            L.lineHeight = T(y.textLineHeight, e.textLineHeight, w),
            L.textAlign = y && y.textAlign || e.textAlign,
            L.textVerticalAlign = y && y.textVerticalAlign || "middle",
            null != f && s + L.lineHeight > f)
            return {
              lines: [],
              width: 0,
              height: 0
            };
          L.textWidth = se(L.text, _);
          var b = y.textWidth,
            M = null == b || "auto" === b;
          if ("string" == typeof b && "%" === b.charAt(b.length - 1))
            L.percentWidth = b,
            h.push(L),
            b = 0;
          else {
            if (M) {
              b = L.textWidth;
              var S = y.textBackgroundColor,
                A = S && S.image;
              A && ae(A = ie(A)) && (b = Math.max(b, A.width * w / A.height))
            }
            var C = x ? x[1] + x[3] : 0;
            b += C;
            var k = null != d ? d - v : null;
            null != k && k < b && (!M || k < C ? (L.text = "",
              L.textWidth = b = 0) : (L.text = pe(L.text, k - C, _, c.ellipsis, {
                minChar: c.minChar
              }),
              L.textWidth = se(L.text, _),
              b = L.textWidth + C))
          }
          v += L.width = b,
            y && (g = Math.max(g, L.lineHeight))
        }
        p.width = v,
          p.lineHeight = g,
          s += g,
          l = Math.max(l, v)
      }
      n.outerWidth = n.width = I(e.textWidth, l),
        n.outerHeight = n.height = I(e.textHeight, s),
        u && (n.outerWidth += u[1] + u[3],
          n.outerHeight += u[0] + u[2]);
      for (var D = 0; D < h.length; D++) {
        var L = h[D],
          P = L.percentWidth;
        L.width = parseInt(P, 10) / 100 * l
      }
      return n
    }

    function we(t, e, n) {
      for (var i = "" === e, r = e.split("\n"), o = t.lines, a = 0; a < r.length; a++) {
        var s = r[a],
          l = {
            styleName: n,
            text: s,
            isLineHolder: !s && !i
          };
        if (a)
          o.push({
            tokens: [l]
          });
        else {
          var h = (o[o.length - 1] || (o[0] = {
              tokens: []
            })).tokens,
            u = h.length;
          1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
        }
      }
    }

    function be(t) {
      return (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ") || t.textFont || t.font
    }

    function Me(t, e) {
      var n, i, r, o, a = e.x,
        s = e.y,
        l = e.width,
        h = e.height,
        u = e.r;
      l < 0 && (a += l,
          l = -l),
        h < 0 && (s += h,
          h = -h),
        "number" == typeof u ? n = i = r = o = u : u instanceof Array ? 1 === u.length ? n = i = r = o = u[0] : 2 === u.length ? (n = r = u[0],
          i = o = u[1]) : 3 === u.length ? (n = u[0],
          i = o = u[1],
          r = u[2]) : (n = u[0],
          i = u[1],
          r = u[2],
          o = u[3]) : n = i = r = o = 0;
      var c;
      n + i > l && (n *= l / (c = n + i),
          i *= l / c),
        r + o > l && (r *= l / (c = r + o),
          o *= l / c),
        i + r > h && (i *= h / (c = i + r),
          r *= h / c),
        n + o > h && (n *= h / (c = n + o),
          o *= h / c),
        t.moveTo(a + n, s),
        t.lineTo(a + l - i, s),
        0 !== i && t.quadraticCurveTo(a + l, s, a + l, s + i),
        t.lineTo(a + l, s + h - r),
        0 !== r && t.quadraticCurveTo(a + l, s + h, a + l - r, s + h),
        t.lineTo(a + o, s + h),
        0 !== o && t.quadraticCurveTo(a, s + h, a, s + h - o),
        t.lineTo(a, s + n),
        0 !== n && t.quadraticCurveTo(a, s, a + n, s)
    }

    function Se(t) {
      return Ie(t),
        c(t.rich, Ie),
        t
    }

    function Ie(t) {
      if (t) {
        t.font = be(t);
        var e = t.textAlign;
        "middle" === e && (e = "center"),
          t.textAlign = null == e || Rf[e] ? e : "left";
        var n = t.textVerticalAlign || t.textBaseline;
        "center" === n && (n = "middle"),
          t.textVerticalAlign = null == n || Vf[n] ? n : "top",
          t.textPadding && (t.textPadding = C(t.textPadding))
      }
    }

    function Te(t, e, n, i, r) {
      i.rich ? Ce(t, e, n, i, r) : Ae(t, e, n, i, r)
    }

    function Ae(t, e, n, i, r) {
      var o = Ne(e, "font", i.font || Ef),
        a = i.textPadding,
        s = t.__textCotentBlock;
      s && !t.__dirty || (s = t.__textCotentBlock = xe(n, o, a, i.truncate));
      var l = s.outerHeight,
        h = s.lines,
        u = s.lineHeight,
        c = Ee(l, i, r),
        d = c.baseX,
        f = c.baseY,
        p = c.textAlign,
        g = c.textVerticalAlign;
      De(e, i, r, d, f);
      var v = de(f, l, g),
        m = d,
        y = v,
        x = Pe(i);
      if (x || a) {
        var _ = se(n, o);
        a && (_ += a[1] + a[3]);
        var w = ce(d, _, p);
        x && Oe(t, e, i, w, v, _, l),
          a && (m = We(d, p, a),
            y += a[0])
      }
      Ne(e, "textAlign", p || "left"),
        Ne(e, "textBaseline", "middle"),
        Ne(e, "shadowBlur", i.textShadowBlur || 0),
        Ne(e, "shadowColor", i.textShadowColor || "transparent"),
        Ne(e, "shadowOffsetX", i.textShadowOffsetX || 0),
        Ne(e, "shadowOffsetY", i.textShadowOffsetY || 0),
        y += u / 2;
      var b = i.textStrokeWidth,
        M = Be(i.textStroke, b),
        S = Re(i.textFill);
      M && (Ne(e, "lineWidth", b),
          Ne(e, "strokeStyle", M)),
        S && Ne(e, "fillStyle", S);
      for (var I = 0; I < h.length; I++)
        M && e.strokeText(h[I], m, y),
        S && e.fillText(h[I], m, y),
        y += u
    }

    function Ce(t, e, n, i, r) {
      var o = t.__textCotentBlock;
      o && !t.__dirty || (o = t.__textCotentBlock = _e(n, i)),
        ke(t, e, o, i, r)
    }

    function ke(t, e, n, i, r) {
      var o = n.width,
        a = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        h = Ee(s, i, r),
        u = h.baseX,
        c = h.baseY,
        d = h.textAlign,
        f = h.textVerticalAlign;
      De(e, i, r, u, c);
      var p = ce(u, a, d),
        g = de(c, s, f),
        v = p,
        m = g;
      l && (v += l[3],
        m += l[0]);
      var y = v + o;
      Pe(i) && Oe(t, e, i, p, g, a, s);
      for (var x = 0; x < n.lines.length; x++) {
        for (var _, w = n.lines[x], b = w.tokens, M = b.length, S = w.lineHeight, I = w.width, T = 0, A = v, C = y, k = M - 1; T < M && (!(_ = b[T]).textAlign || "left" === _.textAlign);)
          Le(t, e, _, i, S, m, A, "left"),
          I -= _.width,
          A += _.width,
          T++;
        for (; k >= 0 && "right" === (_ = b[k]).textAlign;)
          Le(t, e, _, i, S, m, C, "right"),
          I -= _.width,
          C -= _.width,
          k--;
        for (A += (o - (A - v) - (y - C) - I) / 2; T <= k;)
          Le(t, e, _ = b[T], i, S, m, A + _.width / 2, "center"),
          A += _.width,
          T++;
        m += S
      }
    }

    function De(t, e, n, i, r) {
      if (n && e.textRotation) {
        var o = e.textOrigin;
        "center" === o ? (i = n.width / 2 + n.x,
            r = n.height / 2 + n.y) : o && (i = o[0] + n.x,
            r = o[1] + n.y),
          t.translate(i, r),
          t.rotate(-e.textRotation),
          t.translate(-i, -r)
      }
    }

    function Le(t, e, n, i, r, o, a, s) {
      var l = i.rich[n.styleName] || {},
        h = n.textVerticalAlign,
        u = o + r / 2;
      "top" === h ? u = o + n.height / 2 : "bottom" === h && (u = o + r - n.height / 2),
        !n.isLineHolder && Pe(l) && Oe(t, e, l, "right" === s ? a - n.width : "center" === s ? a - n.width / 2 : a, u - n.height / 2, n.width, n.height);
      var c = n.textPadding;
      c && (a = We(a, s, c),
          u -= n.height / 2 - c[2] - n.textHeight / 2),
        Ne(e, "shadowBlur", T(l.textShadowBlur, i.textShadowBlur, 0)),
        Ne(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"),
        Ne(e, "shadowOffsetX", T(l.textShadowOffsetX, i.textShadowOffsetX, 0)),
        Ne(e, "shadowOffsetY", T(l.textShadowOffsetY, i.textShadowOffsetY, 0)),
        Ne(e, "textAlign", s),
        Ne(e, "textBaseline", "middle"),
        Ne(e, "font", n.font || Ef);
      var d = Be(l.textStroke || i.textStroke, p),
        f = Re(l.textFill || i.textFill),
        p = I(l.textStrokeWidth, i.textStrokeWidth);
      d && (Ne(e, "lineWidth", p),
          Ne(e, "strokeStyle", d),
          e.strokeText(n.text, a, u)),
        f && (Ne(e, "fillStyle", f),
          e.fillText(n.text, a, u))
    }

    function Pe(t) {
      return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function Oe(t, e, n, i, r, o, a) {
      var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        h = n.textBorderColor,
        u = x(s);
      if (Ne(e, "shadowBlur", n.textBoxShadowBlur || 0),
        Ne(e, "shadowColor", n.textBoxShadowColor || "transparent"),
        Ne(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0),
        Ne(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0),
        u || l && h) {
        e.beginPath();
        var c = n.textBorderRadius;
        c ? Me(e, {
            x: i,
            y: r,
            width: o,
            height: a,
            r: c
          }) : e.rect(i, r, o, a),
          e.closePath()
      }
      if (u)
        Ne(e, "fillStyle", s),
        e.fill();
      else if (_(s)) {
        var d = s.image;
        (d = re(d, null, t, ze, s)) && ae(d) && e.drawImage(d, i, r, o, a)
      }
      l && h && (Ne(e, "lineWidth", l),
        Ne(e, "strokeStyle", h),
        e.stroke())
    }

    function ze(t, e) {
      e.image = t
    }

    function Ee(t, e, n) {
      var i = e.x || 0,
        r = e.y || 0,
        o = e.textAlign,
        a = e.textVerticalAlign;
      if (n) {
        var s = e.textPosition;
        if (s instanceof Array)
          i = n.x + Ve(s[0], n.width),
          r = n.y + Ve(s[1], n.height);
        else {
          var l = fe(s, n, e.textDistance);
          i = l.x,
            r = l.y,
            o = o || l.textAlign,
            a = a || l.textVerticalAlign
        }
        var h = e.textOffset;
        h && (i += h[0],
          r += h[1])
      }
      return {
        baseX: i,
        baseY: r,
        textAlign: o,
        textVerticalAlign: a
      }
    }

    function Ne(t, e, n) {
      return t[e] = n,
        t[e]
    }

    function Be(t, e) {
      return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Re(t) {
      return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Ve(t, e) {
      return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function We(t, e, n) {
      return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function Ge(t, e) {
      return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function He(t) {
      t = t || {},
        pf.call(this, t);
      for (var e in t)
        t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
      this.style = new Mf(t.style, this),
        this._rect = null,
        this.__clipPaths = []
    }

    function Fe(t) {
      He.call(this, t)
    }

    function Ze(t) {
      return parseInt(t, 10)
    }

    function Ue(t) {
      return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }

    function Xe(t) {
      t.__unusedCount++
    }

    function je(t) {
      1 == t.__unusedCount && t.clear()
    }

    function qe(t, e, n) {
      return Hf.copy(t.getBoundingRect()),
        t.transform && Hf.applyTransform(t.transform),
        Ff.width = e,
        Ff.height = n,
        !Hf.intersect(Ff)
    }

    function Ye(t, e) {
      if (t == e)
        return !1;
      if (!t || !e || t.length !== e.length)
        return !0;
      for (var n = 0; n < t.length; n++)
        if (t[n] !== e[n])
          return !0
    }

    function $e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.setTransform(e),
          e.beginPath(),
          i.buildPath(e, i.shape),
          e.clip(),
          i.restoreTransform(e)
      }
    }

    function Ke(t, e) {
      var n = document.createElement("div");
      return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";",
        n
    }

    function Qe(t) {
      return t.getBoundingClientRect ? t.getBoundingClientRect() : {
        left: 0,
        top: 0
      }
    }

    function Je(t, e, n, i) {
      return n = n || {},
        i || !vd.canvasSupported ? tn(t, e, n) : vd.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX,
          n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX,
          n.zrY = e.offsetY) : tn(t, e, n),
        n
    }

    function tn(t, e, n) {
      var i = Qe(t);
      n.zrX = e.clientX - i.left,
        n.zrY = e.clientY - i.top
    }

    function en(t, e, n) {
      if (null != (e = e || window.event).zrX)
        return e;
      var i = e.type;
      if (i && i.indexOf("touch") >= 0) {
        var r = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
        r && Je(t, r, e, n)
      } else
        Je(t, e, e, n),
        e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
      var o = e.button;
      return null == e.which && void 0 !== o && Xf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
        e
    }

    function nn(t, e, n) {
      Uf ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function rn(t, e, n) {
      Uf ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function on(t) {
      return t.which > 1
    }

    function an(t) {
      var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];
      return Math.sqrt(e * e + n * n)
    }

    function sn(t) {
      return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function ln(t) {
      return "mousewheel" === t && vd.browser.firefox ? "DOMMouseScroll" : t
    }

    function hn(t, e, n) {
      var i = t._gestureMgr;
      "start" === n && i.clear();
      var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
      if ("end" === n && i.clear(),
        r) {
        var o = r.type;
        e.gestureEvent = o,
          t.handler.dispatchToElement({
            target: r.target
          }, o, r.event)
      }
    }

    function un(t) {
      t._touching = !0,
        clearTimeout(t._touchTimer),
        t._touchTimer = setTimeout(function () {
          t._touching = !1
        }, 700)
    }

    function cn(t) {
      var e = t.pointerType;
      return "pen" === e || "touch" === e
    }

    function dn(t) {
      function e(t, e) {
        return function () {
          if (!e._touching)
            return t.apply(e, arguments)
        }
      }
      c(Qf, function (e) {
          t._handlers[e] = g(ep[e], t)
        }),
        c(tp, function (e) {
          t._handlers[e] = g(ep[e], t)
        }),
        c(Kf, function (n) {
          t._handlers[n] = e(ep[n], t)
        })
    }

    function fn(t) {
      function e(e, n) {
        c(e, function (e) {
          nn(t, ln(e), n._handlers[e])
        }, n)
      }
      Bd.call(this),
        this.dom = t,
        this._touching = !1,
        this._touchTimer,
        this._gestureMgr = new Yf,
        this._handlers = {},
        dn(this),
        vd.pointerEventsSupported ? e(tp, this) : (vd.touchEventsSupported && e(Qf, this),
          e(Kf, this))
    }

    function pn(t, e) {
      var n = new sp(pd(), t, e);
      return op[n.id] = n,
        n
    }

    function gn(t, e) {
      rp[t] = e
    }

    function vn(t) {
      delete op[t]
    }

    function mn(t) {
      return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function yn(t, e, n, i) {
      var r = e[1] - e[0],
        o = n[1] - n[0];
      if (0 === r)
        return 0 === o ? n[0] : (n[0] + n[1]) / 2;
      if (i)
        if (r > 0) {
          if (t <= e[0])
            return n[0];
          if (t >= e[1])
            return n[1]
        } else {
          if (t >= e[0])
            return n[0];
          if (t <= e[1])
            return n[1]
        }
      else {
        if (t === e[0])
          return n[0];
        if (t === e[1])
          return n[1]
      }
      return (t - e[0]) / r * o + n[0]
    }

    function xn(t, e) {
      switch (t) {
        case "center":
        case "middle":
          t = "50%";
          break;
        case "left":
        case "top":
          t = "0%";
          break;
        case "right":
        case "bottom":
          t = "100%"
      }
      return "string" == typeof t ? mn(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }

    function _n(t, e, n) {
      return null == e && (e = 10),
        e = Math.min(Math.max(0, e), 20),
        t = (+t).toFixed(e),
        n ? t : +t
    }

    function wn(t) {
      return t.sort(function (t, e) {
          return t - e
        }),
        t
    }

    function bn(t) {
      if (t = +t,
        isNaN(t))
        return 0;
      for (var e = 1, n = 0; Math.round(t * e) / e !== t;)
        e *= 10,
        n++;
      return n
    }

    function Mn(t) {
      var e = t.toString(),
        n = e.indexOf("e");
      if (n > 0) {
        var i = +e.slice(n + 1);
        return i < 0 ? -i : 0
      }
      var r = e.indexOf(".");
      return r < 0 ? 0 : e.length - 1 - r
    }

    function Sn(t, e) {
      var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        o = Math.round(n(Math.abs(e[1] - e[0])) / i),
        a = Math.min(Math.max(-r + o, 0), 20);
      return isFinite(a) ? a : 20
    }

    function In(t, e, n) {
      if (!t[e])
        return 0;
      var i = f(t, function (t, e) {
        return t + (isNaN(e) ? 0 : e)
      }, 0);
      if (0 === i)
        return 0;
      for (var r = Math.pow(10, n), o = d(t, function (t) {
          return (isNaN(t) ? 0 : t) / i * r * 100
        }), a = 100 * r, s = d(o, function (t) {
          return Math.floor(t)
        }), l = f(s, function (t, e) {
          return t + e
        }, 0), h = d(o, function (t, e) {
          return t - s[e]
        }); l < a;) {
        for (var u = Number.NEGATIVE_INFINITY, c = null, p = 0, g = h.length; p < g; ++p)
          h[p] > u && (u = h[p],
            c = p);
        ++s[c],
          h[c] = 0,
          ++l
      }
      return s[e] / r
    }

    function Tn(t) {
      var e = 2 * Math.PI;
      return (t % e + e) % e
    }

    function An(t) {
      return t > -hp && t < hp
    }

    function Cn(t) {
      if (t instanceof Date)
        return t;
      if ("string" == typeof t) {
        var e = up.exec(t);
        if (!e)
          return new Date(NaN);
        if (e[8]) {
          var n = +e[4] || 0;
          return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)),
            new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
        }
        return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
      }
      return null == t ? new Date(NaN) : new Date(Math.round(t))
    }

    function kn(t) {
      return Math.pow(10, Dn(t))
    }

    function Dn(t) {
      return Math.floor(Math.log(t) / Math.LN10)
    }

    function Ln(t, e) {
      var n, i = Dn(t),
        r = Math.pow(10, i),
        o = t / r;
      return n = e ? o < 1.5 ? 1 : o < 2.5 ? 2 : o < 4 ? 3 : o < 7 ? 5 : 10 : o < 1 ? 1 : o < 2 ? 2 : o < 3 ? 3 : o < 5 ? 5 : 10,
        t = n * r,
        i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
    }

    function Pn(t) {
      return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
    }

    function On(t, e) {
      return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
          return e.toUpperCase()
        }),
        e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
        t
    }

    function zn(t) {
      return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function En(t, e, n) {
      m(e) || (e = [e]);
      var i = e.length;
      if (!i)
        return "";
      for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
        var a = fp[o],
          s = pp(a, 0);
        t = t.replace(pp(a), n ? zn(s) : s)
      }
      for (var l = 0; l < i; l++)
        for (var h = 0; h < r.length; h++) {
          s = e[l][r[h]];
          t = t.replace(pp(fp[h], l), n ? zn(s) : s)
        }
      return t
    }

    function Nn(t, e) {
      return t ? '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + zn(t) + ";" + (e || "") + '"></span>' : ""
    }

    function Bn(t, e, n) {
      "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
      var i = Cn(e),
        r = n ? "UTC" : "",
        o = i["get" + r + "FullYear"](),
        a = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        h = i["get" + r + "Minutes"](),
        u = i["get" + r + "Seconds"]();
      return t = t.replace("MM", gp(a)).replace("M", a).replace("yyyy", o).replace("yy", o % 100).replace("dd", gp(s)).replace("d", s).replace("hh", gp(l)).replace("h", l).replace("mm", gp(h)).replace("m", h).replace("ss", gp(u)).replace("s", u)
    }

    function Rn(t) {
      return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function Vn(t, e, n) {
      return t[wp + e] = n
    }

    function Wn(t, e) {
      return t[wp + e]
    }

    function Gn(t, e) {
      return t.hasOwnProperty(wp + e)
    }

    function Hn(t) {
      var e = {
        main: "",
        sub: ""
      };
      return t && (t = t.split(xp),
          e.main = t[0] || "",
          e.sub = t[1] || ""),
        e
    }

    function Fn(t) {
      k(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function Zn(t, e) {
      t.$constructor = t,
        t.extend = function (t) {
          var e = this,
            n = function () {
              t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
          return r(n.prototype, t),
            n.extend = this.extend,
            n.superCall = Un,
            n.superApply = Xn,
            l(n, this),
            n.superClass = e,
            n
        }
    }

    function Un(t, e) {
      var n = A(arguments, 2);
      return this.superClass.prototype[e].apply(t, n)
    }

    function Xn(t, e, n) {
      return this.superClass.prototype[e].apply(t, n)
    }

    function jn(t, e) {
      function n(t) {
        var e = i[t.main];
        return e && e[_p] || ((e = i[t.main] = {})[_p] = !0),
          e
      }
      e = e || {};
      var i = {};
      if (t.registerClass = function (t, e) {
          return e && (Fn(e),
              (e = Hn(e)).sub ? e.sub !== _p && (n(e)[e.sub] = t) : i[e.main] = t),
            t
        },
        t.getClass = function (t, e, n) {
          var r = i[t];
          if (r && r[_p] && (r = e ? r[e] : null),
            n && !r)
            throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
          return r
        },
        t.getClassesByMainType = function (t) {
          t = Hn(t);
          var e = [],
            n = i[t.main];
          return n && n[_p] ? c(n, function (t, n) {
              n !== _p && e.push(t)
            }) : e.push(n),
            e
        },
        t.hasClass = function (t) {
          return t = Hn(t),
            !!i[t.main]
        },
        t.getAllClassMainTypes = function () {
          var t = [];
          return c(i, function (e, n) {
              t.push(n)
            }),
            t
        },
        t.hasSubTypes = function (t) {
          t = Hn(t);
          var e = i[t.main];
          return e && e[_p]
        },
        t.parseClassType = Hn,
        e.registerWhenExtend) {
        var r = t.extend;
        r && (t.extend = function (e) {
          var n = r.call(this, e);
          return t.registerClass(n, e.type)
        })
      }
      return t
    }

    function qn(t) {
      return t > -kp && t < kp
    }

    function Yn(t) {
      return t > kp || t < -kp
    }

    function $n(t, e, n, i, r) {
      var o = 1 - r;
      return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
    }

    function Kn(t, e, n, i, r) {
      var o = 1 - r;
      return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
    }

    function Qn(t, e, n, i, r, o) {
      var a = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        h = t - r,
        u = s * s - 3 * a * l,
        c = s * l - 9 * a * h,
        d = l * l - 3 * s * h,
        f = 0;
      if (qn(u) && qn(c))
        qn(s) ? o[0] = 0 : (S = -l / s) >= 0 && S <= 1 && (o[f++] = S);
      else {
        var p = c * c - 4 * u * d;
        if (qn(p)) {
          var g = c / u,
            v = -g / 2;
          (S = -s / a + g) >= 0 && S <= 1 && (o[f++] = S),
            v >= 0 && v <= 1 && (o[f++] = v)
        } else if (p > 0) {
          var m = Cp(p),
            y = u * s + 1.5 * a * (-c + m),
            x = u * s + 1.5 * a * (-c - m);
          (S = (-s - ((y = y < 0 ? -Ap(-y, Pp) : Ap(y, Pp)) + (x = x < 0 ? -Ap(-x, Pp) : Ap(x, Pp)))) / (3 * a)) >= 0 && S <= 1 && (o[f++] = S)
        } else {
          var _ = (2 * u * s - 3 * a * c) / (2 * Cp(u * u * u)),
            w = Math.acos(_) / 3,
            b = Cp(u),
            M = Math.cos(w),
            S = (-s - 2 * b * M) / (3 * a),
            v = (-s + b * (M + Lp * Math.sin(w))) / (3 * a),
            I = (-s + b * (M - Lp * Math.sin(w))) / (3 * a);
          S >= 0 && S <= 1 && (o[f++] = S),
            v >= 0 && v <= 1 && (o[f++] = v),
            I >= 0 && I <= 1 && (o[f++] = I)
        }
      }
      return f
    }

    function Jn(t, e, n, i, r) {
      var o = 6 * n - 12 * e + 6 * t,
        a = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;
      if (qn(a))
        Yn(o) && (c = -s / o) >= 0 && c <= 1 && (r[l++] = c);
      else {
        var h = o * o - 4 * a * s;
        if (qn(h))
          r[0] = -o / (2 * a);
        else if (h > 0) {
          var u = Cp(h),
            c = (-o + u) / (2 * a),
            d = (-o - u) / (2 * a);
          c >= 0 && c <= 1 && (r[l++] = c),
            d >= 0 && d <= 1 && (r[l++] = d)
        }
      }
      return l
    }

    function ti(t, e, n, i, r, o) {
      var a = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        h = (s - a) * r + a,
        u = (l - s) * r + s,
        c = (u - h) * r + h;
      o[0] = t,
        o[1] = a,
        o[2] = h,
        o[3] = c,
        o[4] = c,
        o[5] = u,
        o[6] = l,
        o[7] = i
    }

    function ei(t, e, n, i, r, o, a, s, l, h, u) {
      var c, d, f, p, g, v = .005,
        m = 1 / 0;
      Op[0] = l,
        Op[1] = h;
      for (var y = 0; y < 1; y += .05)
        zp[0] = $n(t, n, r, a, y),
        zp[1] = $n(e, i, o, s, y),
        (p = zd(Op, zp)) < m && (c = y,
          m = p);
      m = 1 / 0;
      for (var x = 0; x < 32 && !(v < Dp); x++)
        d = c - v,
        f = c + v,
        zp[0] = $n(t, n, r, a, d),
        zp[1] = $n(e, i, o, s, d),
        p = zd(zp, Op),
        d >= 0 && p < m ? (c = d,
          m = p) : (Ep[0] = $n(t, n, r, a, f),
          Ep[1] = $n(e, i, o, s, f),
          g = zd(Ep, Op),
          f <= 1 && g < m ? (c = f,
            m = g) : v *= .5);
      return u && (u[0] = $n(t, n, r, a, c),
          u[1] = $n(e, i, o, s, c)),
        Cp(m)
    }

    function ni(t, e, n, i) {
      var r = 1 - i;
      return r * (r * t + 2 * i * e) + i * i * n
    }

    function ii(t, e, n, i) {
      return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function ri(t, e, n, i, r) {
      var o = t - 2 * e + n,
        a = 2 * (e - t),
        s = t - i,
        l = 0;
      if (qn(o))
        Yn(a) && (c = -s / a) >= 0 && c <= 1 && (r[l++] = c);
      else {
        var h = a * a - 4 * o * s;
        if (qn(h))
          (c = -a / (2 * o)) >= 0 && c <= 1 && (r[l++] = c);
        else if (h > 0) {
          var u = Cp(h),
            c = (-a + u) / (2 * o),
            d = (-a - u) / (2 * o);
          c >= 0 && c <= 1 && (r[l++] = c),
            d >= 0 && d <= 1 && (r[l++] = d)
        }
      }
      return l
    }

    function oi(t, e, n) {
      var i = t + n - 2 * e;
      return 0 === i ? .5 : (t - e) / i
    }

    function ai(t, e, n, i, r) {
      var o = (e - t) * i + t,
        a = (n - e) * i + e,
        s = (a - o) * i + o;
      r[0] = t,
        r[1] = o,
        r[2] = s,
        r[3] = s,
        r[4] = a,
        r[5] = n
    }

    function si(t, e, n, i, r, o, a, s, l) {
      var h, u = .005,
        c = 1 / 0;
      Op[0] = a,
        Op[1] = s;
      for (var d = 0; d < 1; d += .05)
        zp[0] = ni(t, n, r, d),
        zp[1] = ni(e, i, o, d),
        (v = zd(Op, zp)) < c && (h = d,
          c = v);
      c = 1 / 0;
      for (var f = 0; f < 32 && !(u < Dp); f++) {
        var p = h - u,
          g = h + u;
        zp[0] = ni(t, n, r, p),
          zp[1] = ni(e, i, o, p);
        var v = zd(zp, Op);
        if (p >= 0 && v < c)
          h = p,
          c = v;
        else {
          Ep[0] = ni(t, n, r, g),
            Ep[1] = ni(e, i, o, g);
          var m = zd(Ep, Op);
          g <= 1 && m < c ? (h = g,
            c = m) : u *= .5
        }
      }
      return l && (l[0] = ni(t, n, r, h),
          l[1] = ni(e, i, o, h)),
        Cp(c)
    }

    function li(t, e, n, i, r, o) {
      r[0] = Np(t, n),
        r[1] = Np(e, i),
        o[0] = Bp(t, n),
        o[1] = Bp(e, i)
    }

    function hi(t, e, n, i, r, o, a, s, l, h) {
      var u, c = Jn,
        d = $n,
        f = c(t, n, r, a, Zp);
      for (l[0] = 1 / 0,
        l[1] = 1 / 0,
        h[0] = -1 / 0,
        h[1] = -1 / 0,
        u = 0; u < f; u++) {
        var p = d(t, n, r, a, Zp[u]);
        l[0] = Np(p, l[0]),
          h[0] = Bp(p, h[0])
      }
      for (f = c(e, i, o, s, Up),
        u = 0; u < f; u++) {
        var g = d(e, i, o, s, Up[u]);
        l[1] = Np(g, l[1]),
          h[1] = Bp(g, h[1])
      }
      l[0] = Np(t, l[0]),
        h[0] = Bp(t, h[0]),
        l[0] = Np(a, l[0]),
        h[0] = Bp(a, h[0]),
        l[1] = Np(e, l[1]),
        h[1] = Bp(e, h[1]),
        l[1] = Np(s, l[1]),
        h[1] = Bp(s, h[1])
    }

    function ui(t, e, n, i, r, o, a, s) {
      var l = oi,
        h = ni,
        u = Bp(Np(l(t, n, r), 1), 0),
        c = Bp(Np(l(e, i, o), 1), 0),
        d = h(t, n, r, u),
        f = h(e, i, o, c);
      a[0] = Np(t, r, d),
        a[1] = Np(e, o, f),
        s[0] = Bp(t, r, d),
        s[1] = Bp(e, o, f)
    }

    function ci(t, e, n, i, r, o, a, s, l) {
      var h = q,
        u = Y,
        c = Math.abs(r - o);
      if (c % Wp < 1e-4 && c > 1e-4)
        return s[0] = t - n,
          s[1] = e - i,
          l[0] = t + n,
          void(l[1] = e + i);
      if (Gp[0] = Vp(r) * n + t,
        Gp[1] = Rp(r) * i + e,
        Hp[0] = Vp(o) * n + t,
        Hp[1] = Rp(o) * i + e,
        h(s, Gp, Hp),
        u(l, Gp, Hp),
        (r %= Wp) < 0 && (r += Wp),
        (o %= Wp) < 0 && (o += Wp),
        r > o && !a ? o += Wp : r < o && a && (r += Wp),
        a) {
        var d = o;
        o = r,
          r = d
      }
      for (var f = 0; f < o; f += Math.PI / 2)
        f > r && (Fp[0] = Vp(f) * n + t,
          Fp[1] = Rp(f) * i + e,
          h(s, Fp, s),
          u(l, Fp, l))
    }

    function di(t, e, n, i, r, o, a) {
      if (0 === r)
        return !1;
      var s = r,
        l = 0,
        h = t;
      if (a > e + s && a > i + s || a < e - s && a < i - s || o > t + s && o > n + s || o < t - s && o < n - s)
        return !1;
      if (t === n)
        return Math.abs(o - t) <= s / 2;
      var u = (l = (e - i) / (t - n)) * o - a + (h = (t * i - n * e) / (t - n));
      return u * u / (l * l + 1) <= s / 2 * s / 2
    }

    function fi(t, e, n, i, r, o, a, s, l, h, u) {
      if (0 === l)
        return !1;
      var c = l;
      return !(u > e + c && u > i + c && u > o + c && u > s + c || u < e - c && u < i - c && u < o - c && u < s - c || h > t + c && h > n + c && h > r + c && h > a + c || h < t - c && h < n - c && h < r - c && h < a - c) && ei(t, e, n, i, r, o, a, s, h, u, null) <= c / 2
    }

    function pi(t, e, n, i, r, o, a, s, l) {
      if (0 === a)
        return !1;
      var h = a;
      return !(l > e + h && l > i + h && l > o + h || l < e - h && l < i - h && l < o - h || s > t + h && s > n + h && s > r + h || s < t - h && s < n - h && s < r - h) && si(t, e, n, i, r, o, s, l, null) <= h / 2
    }

    function gi(t) {
      return (t %= og) < 0 && (t += og),
        t
    }

    function vi(t, e, n, i, r, o, a, s, l) {
      if (0 === a)
        return !1;
      var h = a;
      s -= t,
        l -= e;
      var u = Math.sqrt(s * s + l * l);
      if (u - h > n || u + h < n)
        return !1;
      if (Math.abs(i - r) % ag < 1e-4)
        return !0;
      if (o) {
        var c = i;
        i = gi(r),
          r = gi(c)
      } else
        i = gi(i),
        r = gi(r);
      i > r && (r += ag);
      var d = Math.atan2(l, s);
      return d < 0 && (d += ag),
        d >= i && d <= r || d + ag >= i && d + ag <= r
    }

    function mi(t, e, n, i, r, o) {
      if (o > e && o > i || o < e && o < i)
        return 0;
      if (i === e)
        return 0;
      var a = i < e ? 1 : -1,
        s = (o - e) / (i - e);
      return 1 !== s && 0 !== s || (a = i < e ? .5 : -.5),
        s * (n - t) + t > r ? a : 0
    }

    function yi(t, e) {
      return Math.abs(t - e) < lg
    }

    function xi() {
      var t = ug[0];
      ug[0] = ug[1],
        ug[1] = t
    }

    function _i(t, e, n, i, r, o, a, s, l, h) {
      if (h > e && h > i && h > o && h > s || h < e && h < i && h < o && h < s)
        return 0;
      var u = Qn(e, i, o, s, h, hg);
      if (0 === u)
        return 0;
      for (var c, d, f = 0, p = -1, g = 0; g < u; g++) {
        var v = hg[g],
          m = 0 === v || 1 === v ? .5 : 1;
        $n(t, n, r, a, v) < l || (p < 0 && (p = Jn(e, i, o, s, ug),
            ug[1] < ug[0] && p > 1 && xi(),
            c = $n(e, i, o, s, ug[0]),
            p > 1 && (d = $n(e, i, o, s, ug[1]))),
          2 == p ? v < ug[0] ? f += c < e ? m : -m : v < ug[1] ? f += d < c ? m : -m : f += s < d ? m : -m : v < ug[0] ? f += c < e ? m : -m : f += s < c ? m : -m)
      }
      return f
    }

    function wi(t, e, n, i, r, o, a, s) {
      if (s > e && s > i && s > o || s < e && s < i && s < o)
        return 0;
      var l = ri(e, i, o, s, hg);
      if (0 === l)
        return 0;
      var h = oi(e, i, o);
      if (h >= 0 && h <= 1) {
        for (var u = 0, c = ni(e, i, o, h), d = 0; d < l; d++) {
          f = 0 === hg[d] || 1 === hg[d] ? .5 : 1;
          (p = ni(t, n, r, hg[d])) < a || (hg[d] < h ? u += c < e ? f : -f : u += o < c ? f : -f)
        }
        return u
      }
      var f = 0 === hg[0] || 1 === hg[0] ? .5 : 1,
        p = ni(t, n, r, hg[0]);
      return p < a ? 0 : o < e ? f : -f
    }

    function bi(t, e, n, i, r, o, a, s) {
      if ((s -= e) > n || s < -n)
        return 0;
      h = Math.sqrt(n * n - s * s);
      hg[0] = -h,
        hg[1] = h;
      var l = Math.abs(i - r);
      if (l < 1e-4)
        return 0;
      if (l % sg < 1e-4) {
        i = 0,
          r = sg;
        p = o ? 1 : -1;
        return a >= hg[0] + t && a <= hg[1] + t ? p : 0
      }
      if (o) {
        var h = i;
        i = gi(r),
          r = gi(h)
      } else
        i = gi(i),
        r = gi(r);
      i > r && (r += sg);
      for (var u = 0, c = 0; c < 2; c++) {
        var d = hg[c];
        if (d + t > a) {
          var f = Math.atan2(s, d),
            p = o ? 1 : -1;
          f < 0 && (f = sg + f),
            (f >= i && f <= r || f + sg >= i && f + sg <= r) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (p = -p),
              u += p)
        }
      }
      return u
    }

    function Mi(t, e, n, i, r) {
      for (var o = 0, a = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
        var c = t[u++];
        switch (c === Xp.M && u > 1 && (n || (o += mi(a, s, l, h, i, r))),
          1 == u && (l = a = t[u],
            h = s = t[u + 1]),
          c) {
          case Xp.M:
            a = l = t[u++],
              s = h = t[u++];
            break;
          case Xp.L:
            if (n) {
              if (di(a, s, t[u], t[u + 1], e, i, r))
                return !0
            } else
              o += mi(a, s, t[u], t[u + 1], i, r) || 0;
            a = t[u++],
              s = t[u++];
            break;
          case Xp.C:
            if (n) {
              if (fi(a, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r))
                return !0
            } else
              o += _i(a, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
            a = t[u++],
              s = t[u++];
            break;
          case Xp.Q:
            if (n) {
              if (pi(a, s, t[u++], t[u++], t[u], t[u + 1], e, i, r))
                return !0
            } else
              o += wi(a, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
            a = t[u++],
              s = t[u++];
            break;
          case Xp.A:
            var d = t[u++],
              f = t[u++],
              p = t[u++],
              g = t[u++],
              v = t[u++],
              m = t[u++],
              y = (t[u++],
                1 - t[u++]),
              x = Math.cos(v) * p + d,
              _ = Math.sin(v) * g + f;
            u > 1 ? o += mi(a, s, x, _, i, r) : (l = x,
              h = _);
            var w = (i - d) * g / p + d;
            if (n) {
              if (vi(d, f, g, v, v + m, y, e, w, r))
                return !0
            } else
              o += bi(d, f, g, v, v + m, y, w, r);
            a = Math.cos(v + m) * p + d,
              s = Math.sin(v + m) * g + f;
            break;
          case Xp.R:
            l = a = t[u++],
              h = s = t[u++];
            var x = l + t[u++],
              _ = h + t[u++];
            if (n) {
              if (di(l, h, x, h, e, i, r) || di(x, h, x, _, e, i, r) || di(x, _, l, _, e, i, r) || di(l, _, l, h, e, i, r))
                return !0
            } else
              o += mi(x, h, x, _, i, r),
              o += mi(l, _, l, h, i, r);
            break;
          case Xp.Z:
            if (n) {
              if (di(a, s, l, h, e, i, r))
                return !0
            } else
              o += mi(a, s, l, h, i, r);
            a = l,
              s = h
        }
      }
      return n || yi(s, h) || (o += mi(a, s, l, h, i, r) || 0),
        0 !== o
    }

    function Si(t, e, n) {
      return Mi(t, 0, !1, e, n)
    }

    function Ii(t, e, n, i) {
      return Mi(t, e, !0, n, i)
    }

    function Ti(t) {
      He.call(this, t),
        this.path = null
    }

    function Ai(t, e, n, i, r, o, a, s, l, h, u) {
      var c = l * (bg / 180),
        d = wg(c) * (t - n) / 2 + _g(c) * (e - i) / 2,
        f = -1 * _g(c) * (t - n) / 2 + wg(c) * (e - i) / 2,
        p = d * d / (a * a) + f * f / (s * s);
      p > 1 && (a *= xg(p),
        s *= xg(p));
      var g = (r === o ? -1 : 1) * xg((a * a * (s * s) - a * a * (f * f) - s * s * (d * d)) / (a * a * (f * f) + s * s * (d * d))) || 0,
        v = g * a * f / s,
        m = g * -s * d / a,
        y = (t + n) / 2 + wg(c) * v - _g(c) * m,
        x = (e + i) / 2 + _g(c) * v + wg(c) * m,
        _ = Ig([1, 0], [(d - v) / a, (f - m) / s]),
        w = [(d - v) / a, (f - m) / s],
        b = [(-1 * d - v) / a, (-1 * f - m) / s],
        M = Ig(w, b);
      Sg(w, b) <= -1 && (M = bg),
        Sg(w, b) >= 1 && (M = 0),
        0 === o && M > 0 && (M -= 2 * bg),
        1 === o && M < 0 && (M += 2 * bg),
        u.addData(h, y, x, a, s, _, M, c, o)
    }

    function Ci(t) {
      if (!t)
        return [];
      var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
      for (e = 0; e < yg.length; e++)
        n = n.replace(new RegExp(yg[e], "g"), "|" + yg[e]);
      var i, r = n.split("|"),
        o = 0,
        a = 0,
        s = new rg,
        l = rg.CMD;
      for (e = 1; e < r.length; e++) {
        var h, u = r[e],
          c = u.charAt(0),
          d = 0,
          f = u.slice(1).replace(/e,-/g, "e-").split(",");
        f.length > 0 && "" === f[0] && f.shift();
        for (var p = 0; p < f.length; p++)
          f[p] = parseFloat(f[p]);
        for (; d < f.length && !isNaN(f[d]) && !isNaN(f[0]);) {
          var g, v, m, y, x, _, w, b = o,
            M = a;
          switch (c) {
            case "l":
              o += f[d++],
                a += f[d++],
                h = l.L,
                s.addData(h, o, a);
              break;
            case "L":
              o = f[d++],
                a = f[d++],
                h = l.L,
                s.addData(h, o, a);
              break;
            case "m":
              o += f[d++],
                a += f[d++],
                h = l.M,
                s.addData(h, o, a),
                c = "l";
              break;
            case "M":
              o = f[d++],
                a = f[d++],
                h = l.M,
                s.addData(h, o, a),
                c = "L";
              break;
            case "h":
              o += f[d++],
                h = l.L,
                s.addData(h, o, a);
              break;
            case "H":
              o = f[d++],
                h = l.L,
                s.addData(h, o, a);
              break;
            case "v":
              a += f[d++],
                h = l.L,
                s.addData(h, o, a);
              break;
            case "V":
              a = f[d++],
                h = l.L,
                s.addData(h, o, a);
              break;
            case "C":
              h = l.C,
                s.addData(h, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]),
                o = f[d - 2],
                a = f[d - 1];
              break;
            case "c":
              h = l.C,
                s.addData(h, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a),
                o += f[d - 2],
                a += f[d - 1];
              break;
            case "S":
              g = o,
                v = a;
              var S = s.len(),
                I = s.data;
              i === l.C && (g += o - I[S - 4],
                  v += a - I[S - 3]),
                h = l.C,
                b = f[d++],
                M = f[d++],
                o = f[d++],
                a = f[d++],
                s.addData(h, g, v, b, M, o, a);
              break;
            case "s":
              g = o,
                v = a;
              var S = s.len(),
                I = s.data;
              i === l.C && (g += o - I[S - 4],
                  v += a - I[S - 3]),
                h = l.C,
                b = o + f[d++],
                M = a + f[d++],
                o += f[d++],
                a += f[d++],
                s.addData(h, g, v, b, M, o, a);
              break;
            case "Q":
              b = f[d++],
                M = f[d++],
                o = f[d++],
                a = f[d++],
                h = l.Q,
                s.addData(h, b, M, o, a);
              break;
            case "q":
              b = f[d++] + o,
                M = f[d++] + a,
                o += f[d++],
                a += f[d++],
                h = l.Q,
                s.addData(h, b, M, o, a);
              break;
            case "T":
              g = o,
                v = a;
              var S = s.len(),
                I = s.data;
              i === l.Q && (g += o - I[S - 4],
                  v += a - I[S - 3]),
                o = f[d++],
                a = f[d++],
                h = l.Q,
                s.addData(h, g, v, o, a);
              break;
            case "t":
              g = o,
                v = a;
              var S = s.len(),
                I = s.data;
              i === l.Q && (g += o - I[S - 4],
                  v += a - I[S - 3]),
                o += f[d++],
                a += f[d++],
                h = l.Q,
                s.addData(h, g, v, o, a);
              break;
            case "A":
              m = f[d++],
                y = f[d++],
                x = f[d++],
                _ = f[d++],
                w = f[d++],
                Ai(b = o, M = a, o = f[d++], a = f[d++], _, w, m, y, x, h = l.A, s);
              break;
            case "a":
              m = f[d++],
                y = f[d++],
                x = f[d++],
                _ = f[d++],
                w = f[d++],
                Ai(b = o, M = a, o += f[d++], a += f[d++], _, w, m, y, x, h = l.A, s)
          }
        }
        "z" !== c && "Z" !== c || (h = l.Z,
            s.addData(h)),
          i = h
      }
      return s.toStatic(),
        s
    }

    function ki(t, e) {
      var n = Ci(t);
      return e = e || {},
        e.buildPath = function (t) {
          if (t.setData)
            t.setData(n.data),
            (e = t.getContext()) && t.rebuildPath(e);
          else {
            var e = t;
            n.rebuildPath(e)
          }
        },
        e.applyTransform = function (t) {
          mg(n, t),
            this.dirty(!0)
        },
        e
    }

    function Di(t, e) {
      return new Ti(ki(t, e))
    }

    function Li(t, e) {
      return Ti.extend(ki(t, e))
    }

    function Pi(t, e, n, i, r, o, a) {
      var s = .5 * (n - t),
        l = .5 * (i - e);
      return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Oi(t, e, n) {
      var i = e.points,
        r = e.smooth;
      if (i && i.length >= 2) {
        if (r && "spline" !== r) {
          var o = Og(i, r, n, e.smoothConstraint);
          t.moveTo(i[0][0], i[0][1]);
          for (var a = i.length, s = 0; s < (n ? a : a - 1); s++) {
            var l = o[2 * s],
              h = o[2 * s + 1],
              u = i[(s + 1) % a];
            t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
          }
        } else {
          "spline" === r && (i = Pg(i, n)),
            t.moveTo(i[0][0], i[0][1]);
          for (var s = 1, c = i.length; s < c; s++)
            t.lineTo(i[s][0], i[s][1])
        }
        n && t.closePath()
      }
    }

    function zi(t, e, n) {
      var i = t.cpx2,
        r = t.cpy2;
      return null === i || null === r ? [(n ? Kn : $n)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Kn : $n)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? ii : ni)(t.x1, t.cpx1, t.x2, e), (n ? ii : ni)(t.y1, t.cpy1, t.y2, e)]
    }

    function Ei(t) {
      return Ti.extend(t)
    }

    function Ni(t, e, n, i) {
      var r = Di(t, e),
        o = r.getBoundingRect();
      return n && ("center" === i && (n = Ri(n, o)),
          Vi(r, n)),
        r
    }

    function Bi(t, e, n) {
      var i = new Fe({
        style: {
          image: t,
          x: e.x,
          y: e.y,
          width: e.width,
          height: e.height
        },
        onload: function (t) {
          if ("center" === n) {
            var r = {
              width: t.width,
              height: t.height
            };
            i.setStyle(Ri(e, r))
          }
        }
      });
      return i
    }

    function Ri(t, e) {
      var n, i = e.width / e.height,
        r = t.height * i;
      return n = r <= t.width ? t.height : (r = t.width) / i, {
        x: t.x + t.width / 2 - r / 2,
        y: t.y + t.height / 2 - n / 2,
        width: r,
        height: n
      }
    }

    function Vi(t, e) {
      if (t.applyTransform) {
        var n = t.getBoundingRect().calculateTransform(e);
        t.applyTransform(n)
      }
    }

    function Wi(t) {
      var e = t.shape,
        n = t.style.lineWidth;
      return Ug(2 * e.x1) === Ug(2 * e.x2) && (e.x1 = e.x2 = Hi(e.x1, n, !0)),
        Ug(2 * e.y1) === Ug(2 * e.y2) && (e.y1 = e.y2 = Hi(e.y1, n, !0)),
        t
    }

    function Gi(t) {
      var e = t.shape,
        n = t.style.lineWidth,
        i = e.x,
        r = e.y,
        o = e.width,
        a = e.height;
      return e.x = Hi(e.x, n, !0),
        e.y = Hi(e.y, n, !0),
        e.width = Math.max(Hi(i + o, n, !1) - e.x, 0 === o ? 0 : 1),
        e.height = Math.max(Hi(r + a, n, !1) - e.y, 0 === a ? 0 : 1),
        t
    }

    function Hi(t, e, n) {
      var i = Ug(2 * t);
      return (i + Ug(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function Fi(t) {
      return null != t && "none" != t
    }

    function Zi(t) {
      return "string" == typeof t ? St(t, -.1) : t
    }

    function Ui(t) {
      if (t.__hoverStlDirty) {
        var e = t.style.stroke,
          n = t.style.fill,
          i = t.__hoverStl;
        i.fill = i.fill || (Fi(n) ? Zi(n) : null),
          i.stroke = i.stroke || (Fi(e) ? Zi(e) : null);
        var r = {};
        for (var o in i)
          null != i[o] && (r[o] = t.style[o]);
        t.__normalStl = r,
          t.__hoverStlDirty = !1
      }
    }

    function Xi(t) {
      if (!t.__isHover) {
        if (Ui(t),
          t.useHoverLayer)
          t.__zr && t.__zr.addHover(t, t.__hoverStl);
        else {
          var e = t.style,
            n = e.insideRollbackOpt;
          n && hr(e),
            e.extendFrom(t.__hoverStl),
            n && (lr(e, e.insideOriginalTextPosition, n),
              null == e.textFill && (e.textFill = n.autoColor)),
            t.dirty(!1),
            t.z2 += 1
        }
        t.__isHover = !0
      }
    }

    function ji(t) {
      if (t.__isHover) {
        var e = t.__normalStl;
        t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e),
            t.z2 -= 1),
          t.__isHover = !1
      }
    }

    function qi(t) {
      "group" === t.type ? t.traverse(function (t) {
        "group" !== t.type && Xi(t)
      }) : Xi(t)
    }

    function Yi(t) {
      "group" === t.type ? t.traverse(function (t) {
        "group" !== t.type && ji(t)
      }) : ji(t)
    }

    function $i(t, e) {
      t.__hoverStl = t.hoverStyle || e || {},
        t.__hoverStlDirty = !0,
        t.__isHover && Ui(t)
    }

    function Ki(t) {
      this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && qi(this)
    }

    function Qi(t) {
      this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Yi(this)
    }

    function Ji() {
      this.__isEmphasis = !0,
        qi(this)
    }

    function tr() {
      this.__isEmphasis = !1,
        Yi(this)
    }

    function er(t, e, n) {
      t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch,
        "group" === t.type ? t.traverse(function (t) {
          "group" !== t.type && $i(t, e)
        }) : $i(t, e),
        t.on("mouseover", Ki).on("mouseout", Qi),
        t.on("emphasis", Ji).on("normal", tr)
    }

    function nr(t, e, n, i, r, o, a) {
      var s = (r = r || qg).labelFetcher,
        l = r.labelDataIndex,
        h = r.labelDimIndex,
        u = n.getShallow("show"),
        c = i.getShallow("show"),
        d = u || c ? I(s ? s.getFormattedLabel(l, "normal", null, h) : null, r.defaultText) : null,
        f = u ? d : null,
        p = c ? I(s ? s.getFormattedLabel(l, "emphasis", null, h) : null, d) : null;
      null == f && null == p || (ir(t, n, o, r),
          ir(e, i, a, r, !0)),
        t.text = f,
        e.text = p
    }

    function ir(t, e, n, i, o) {
      return rr(t, e, i, o),
        n && r(t, n),
        t.host && t.host.dirty && t.host.dirty(!1),
        t
    }

    function rr(t, e, n, i) {
      if ((n = n || qg).isRectText) {
        var r = e.getShallow("position") || (i ? null : "inside");
        "outside" === r && (r = "top"),
          t.textPosition = r,
          t.textOffset = e.getShallow("offset");
        var o = e.getShallow("rotate");
        null != o && (o *= Math.PI / 180),
          t.textRotation = o,
          t.textDistance = I(e.getShallow("distance"), i ? null : 5)
      }
      var a, s = e.ecModel,
        l = s && s.option.textStyle,
        h = or(e);
      if (h) {
        a = {};
        for (var u in h)
          if (h.hasOwnProperty(u)) {
            var c = e.getModel(["rich", u]);
            ar(a[u] = {}, c, l, n, i)
          }
      }
      return t.rich = a,
        ar(t, e, l, n, i, !0),
        n.forceRich && !n.textStyle && (n.textStyle = {}),
        t
    }

    function or(t) {
      for (var e; t && t !== t.ecModel;) {
        var n = (t.option || qg).rich;
        if (n) {
          e = e || {};
          for (var i in n)
            n.hasOwnProperty(i) && (e[i] = 1)
        }
        t = t.parentModel
      }
      return e
    }

    function ar(t, e, n, i, r, o) {
      if (n = !r && n || qg,
        t.textFill = sr(e.getShallow("color"), i) || n.color,
        t.textStroke = sr(e.getShallow("textBorderColor"), i) || n.textBorderColor,
        t.textStrokeWidth = I(e.getShallow("textBorderWidth"), n.textBorderWidth),
        !r) {
        if (o) {
          var a = t.textPosition;
          t.insideRollback = lr(t, a, i),
            t.insideOriginalTextPosition = a,
            t.insideRollbackOpt = i
        }
        null == t.textFill && (t.textFill = i.autoColor)
      }
      t.fontStyle = e.getShallow("fontStyle") || n.fontStyle,
        t.fontWeight = e.getShallow("fontWeight") || n.fontWeight,
        t.fontSize = e.getShallow("fontSize") || n.fontSize,
        t.fontFamily = e.getShallow("fontFamily") || n.fontFamily,
        t.textAlign = e.getShallow("align"),
        t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"),
        t.textLineHeight = e.getShallow("lineHeight"),
        t.textWidth = e.getShallow("width"),
        t.textHeight = e.getShallow("height"),
        t.textTag = e.getShallow("tag"),
        o && i.disableBox || (t.textBackgroundColor = sr(e.getShallow("backgroundColor"), i),
          t.textPadding = e.getShallow("padding"),
          t.textBorderColor = sr(e.getShallow("borderColor"), i),
          t.textBorderWidth = e.getShallow("borderWidth"),
          t.textBorderRadius = e.getShallow("borderRadius"),
          t.textBoxShadowColor = e.getShallow("shadowColor"),
          t.textBoxShadowBlur = e.getShallow("shadowBlur"),
          t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"),
          t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")),
        t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor,
        t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur,
        t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX,
        t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function sr(t, e) {
      return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function lr(t, e, n) {
      var i, r = n.useInsideStyle;
      return null == t.textFill && !1 !== r && (!0 === r || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = {
            textFill: null,
            textStroke: t.textStroke,
            textStrokeWidth: t.textStrokeWidth
          },
          t.textFill = "#fff",
          null == t.textStroke && (t.textStroke = n.autoColor,
            null == t.textStrokeWidth && (t.textStrokeWidth = 2))),
        i
    }

    function hr(t) {
      var e = t.insideRollback;
      e && (t.textFill = e.textFill,
        t.textStroke = e.textStroke,
        t.textStrokeWidth = e.textStrokeWidth)
    }

    function ur(t, e) {
      var n = e || e.getModel("textStyle");
      return [t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" ")
    }

    function cr(t, e, n, i, r, o) {
      if ("function" == typeof r && (o = r,
          r = null),
        i && i.isAnimationEnabled()) {
        var a = t ? "Update" : "",
          s = i.getShallow("animationDuration" + a),
          l = i.getShallow("animationEasing" + a),
          h = i.getShallow("animationDelay" + a);
        "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)),
          "function" == typeof s && (s = s(r)),
          s > 0 ? e.animateTo(n, s, h || 0, l, o, !!o) : (e.stopAnimation(),
            e.attr(n),
            o && o())
      } else
        e.stopAnimation(),
        e.attr(n),
        o && o()
    }

    function dr(t, e, n, i, r) {
      cr(!0, t, e, n, i, r)
    }

    function fr(t, e, n, i, r) {
      cr(!1, t, e, n, i, r)
    }

    function pr(t, e) {
      for (var n = nt([]); t && t !== e;)
        rt(n, t.getLocalTransform(), n),
        t = t.parent;
      return n
    }

    function gr(t, e, n) {
      return e && !u(e) && (e = Ud.getLocalTransform(e)),
        n && (e = lt([], e)),
        j([], t, e)
    }

    function vr(t, e, n) {
      var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
      return o = gr(o, e, n),
        Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
    }

    function mr(t, e, n, i) {
      function o(t) {
        var e = {
          position: B(t.position),
          rotation: t.rotation
        };
        return t.shape && (e.shape = r({}, t.shape)),
          e
      }
      if (t && e) {
        var a = function (t) {
          var e = {};
          return t.traverse(function (t) {
              !t.isGroup && t.anid && (e[t.anid] = t)
            }),
            e
        }(t);
        e.traverse(function (t) {
          if (!t.isGroup && t.anid) {
            var e = a[t.anid];
            if (e) {
              var i = o(t);
              t.attr(o(e)),
                dr(t, i, n, t.dataIndex)
            }
          }
        })
      }
    }

    function yr(t, e) {
      return d(t, function (t) {
        var n = t[0];
        n = Xg(n, e.x),
          n = jg(n, e.x + e.width);
        var i = t[1];
        return i = Xg(i, e.y),
          i = jg(i, e.y + e.height),
          [n, i]
      })
    }

    function xr(t, e, n) {
      var i = (e = r({
        rectHover: !0
      }, e)).style = {
        strokeNoScale: !0
      };
      if (n = n || {
          x: -1,
          y: -1,
          width: 2,
          height: 2
        },
        t)
        return 0 === t.indexOf("image://") ? (i.image = t.slice(8),
          o(i, n),
          new Fe(e)) : Ni(t.replace("path://", ""), e, n, "center")
    }

    function _r(t, e, n) {
      this.parentModel = e,
        this.ecModel = n,
        this.option = t
    }

    function wr(t, e, n) {
      for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++)
      ;
      return null == t && n && (t = n.get(e)),
        t
    }

    function br(t, e) {
      var n = Wn(t, "getParent");
      return n ? n.call(t, e) : t.parentModel
    }

    function Mr(t) {
      return t instanceof Array ? t : null == t ? [] : [t]
    }

    function Sr(t, e) {
      if (t)
        for (var n = t.emphasis = t.emphasis || {}, i = t.normal = t.normal || {}, r = 0, o = e.length; r < o; r++) {
          var a = e[r];
          !n.hasOwnProperty(a) && i.hasOwnProperty(a) && (n[a] = i[a])
        }
    }

    function Ir(t) {
      return t && (null == t.value ? t : t.value)
    }

    function Tr(t) {
      return nv(t) && !(t instanceof Array)
    }

    function Ar(t, e) {
      var n = e && e.type;
      return "ordinal" === n ? t : ("time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Cn(t)),
        null == t || "" === t ? NaN : +t)
    }

    function Cr(t, e) {
      e = (e || []).slice();
      var n = d(t || [], function (t, e) {
        return {
          exist: t
        }
      });
      return ev(e, function (t, i) {
          if (nv(t)) {
            for (r = 0; r < n.length; r++)
              if (!n[r].option && null != t.id && n[r].exist.id === t.id + "")
                return n[r].option = t,
                  void(e[i] = null);
            for (var r = 0; r < n.length; r++) {
              var o = n[r].exist;
              if (!(n[r].option || null != o.id && null != t.id || null == t.name || Dr(t) || Dr(o) || o.name !== t.name + ""))
                return n[r].option = t,
                  void(e[i] = null)
            }
          }
        }),
        ev(e, function (t, e) {
          if (nv(t)) {
            for (var i = 0; i < n.length; i++) {
              var r = n[i].exist;
              if (!n[i].option && !Dr(r) && null == t.id) {
                n[i].option = t;
                break
              }
            }
            i >= n.length && n.push({
              option: t
            })
          }
        }),
        n
    }

    function kr(t) {
      var e = O();
      ev(t, function (t, n) {
          var i = t.exist;
          i && e.set(i.id, t)
        }),
        ev(t, function (t, n) {
          var i = t.option;
          k(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)),
            i && null != i.id && e.set(i.id, t),
            !t.keyInfo && (t.keyInfo = {})
        }),
        ev(t, function (t, n) {
          var i = t.exist,
            r = t.option,
            o = t.keyInfo;
          if (nv(r)) {
            if (o.name = null != r.name ? r.name + "" : i ? i.name : "\0-",
              i)
              o.id = i.id;
            else if (null != r.id)
              o.id = r.id + "";
            else {
              var a = 0;
              do {
                o.id = "\0" + o.name + "\0" + a++
              } while (e.get(o.id))
            }
            e.set(o.id, t)
          }
        })
    }

    function Dr(t) {
      return nv(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }

    function Lr(t, e) {
      return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? m(e.dataIndex) ? d(e.dataIndex, function (e) {
        return t.indexOfRawIndex(e)
      }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? m(e.name) ? d(e.name, function (e) {
        return t.indexOfName(e)
      }) : t.indexOfName(e.name) : void 0
    }

    function Pr(t, e, n) {
      if (x(e)) {
        var i = {};
        i[e + "Index"] = 0,
          e = i
      }
      var r = n && n.defaultMainType;
      !r || Nr(e, r + "Index") || Nr(e, r + "Id") || Nr(e, r + "Name") || (e[r + "Index"] = 0);
      var o = {};
      return ev(e, function (i, r) {
          var i = e[r];
          if ("dataIndex" !== r && "dataIndexInside" !== r) {
            var a = r.match(/^(\w+)(Index|Id|Name)$/) || [],
              l = a[1],
              h = (a[2] || "").toLowerCase();
            if (!(!l || !h || null == i || "index" === h && "none" === i || n && n.includeMainTypes && s(n.includeMainTypes, l) < 0)) {
              var u = {
                mainType: l
              };
              "index" === h && "all" === i || (u[h] = i);
              var c = t.queryComponents(u);
              o[l + "Models"] = c,
                o[l + "Model"] = c[0]
            }
          } else
            o[r] = i
        }),
        o
    }

    function Or(t, e) {
      var n = t.dimensions;
      e = t.getDimension(e);
      for (var i = 0; i < n.length; i++) {
        var r = t.getDimensionInfo(n[i]);
        if (r.name === e)
          return r.coordDim
      }
    }

    function zr(t, e) {
      var n = [];
      return ev(t.dimensions, function (i) {
          var r = t.getDimensionInfo(i);
          r.coordDim === e && (n[r.coordDimIndex] = r.name)
        }),
        n
    }

    function Er(t, e) {
      var n = [];
      return ev(t.dimensions, function (i) {
          var r = t.getDimensionInfo(i),
            o = r.otherDims[e];
          null != o && !1 !== o && (n[o] = r.name)
        }),
        n
    }

    function Nr(t, e) {
      return t && t.hasOwnProperty(e)
    }

    function Br(t) {
      return [t || "", av++, Math.random()].join(sv)
    }

    function Rr(t, e, n, i, r) {
      var o = 0,
        a = 0;
      null == i && (i = 1 / 0),
        null == r && (r = 1 / 0);
      var s = 0;
      e.eachChild(function (l, h) {
        var u, c, d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(h + 1),
          g = p && p.getBoundingRect();
        if ("horizontal" === t) {
          var v = f.width + (g ? -g.x + f.x : 0);
          (u = o + v) > i || l.newline ? (o = 0,
            u = v,
            a += s + n,
            s = f.height) : s = Math.max(s, f.height)
        } else {
          var m = f.height + (g ? -g.y + f.y : 0);
          (c = a + m) > r || l.newline ? (o += s + n,
            a = 0,
            c = m,
            s = f.width) : s = Math.max(s, f.width)
        }
        l.newline || (d[0] = o,
          d[1] = a,
          "horizontal" === t ? o = u + n : a = c + n)
      })
    }

    function Vr(t, e, n) {
      n = dp(n || 0);
      var i = e.width,
        r = e.height,
        o = xn(t.left, i),
        a = xn(t.top, r),
        s = xn(t.right, i),
        l = xn(t.bottom, r),
        h = xn(t.width, i),
        u = xn(t.height, r),
        c = n[2] + n[0],
        d = n[1] + n[3],
        f = t.aspect;
      switch (isNaN(h) && (h = i - s - d - o),
        isNaN(u) && (u = r - l - c - a),
        null != f && (isNaN(h) && isNaN(u) && (f > i / r ? h = .8 * i : u = .8 * r),
          isNaN(h) && (h = f * u),
          isNaN(u) && (u = h / f)),
        isNaN(o) && (o = i - s - h - d),
        isNaN(a) && (a = r - l - u - c),
        t.left || t.right) {
        case "center":
          o = i / 2 - h / 2 - n[3];
          break;
        case "right":
          o = i - h - d
      }
      switch (t.top || t.bottom) {
        case "middle":
        case "center":
          a = r / 2 - u / 2 - n[0];
          break;
        case "bottom":
          a = r - u - c
      }
      o = o || 0,
        a = a || 0,
        isNaN(h) && (h = i - d - o - (s || 0)),
        isNaN(u) && (u = r - c - a - (l || 0));
      var p = new Ft(o + n[3], a + n[0], h, u);
      return p.margin = n,
        p
    }

    function Wr(t, e, n, i, r) {
      var a = !r || !r.hv || r.hv[0],
        s = !r || !r.hv || r.hv[1],
        l = r && r.boundingMode || "all";
      if (a || s) {
        var h;
        if ("raw" === l)
          h = "group" === t.type ? new Ft(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
        else if (h = t.getBoundingRect(),
          t.needLocalTransform()) {
          var u = t.getLocalTransform();
          (h = h.clone()).applyTransform(u)
        }
        e = Vr(o({
          width: h.width,
          height: h.height
        }, e), n, i);
        var c = t.position,
          d = a ? e.x - h.x : 0,
          f = s ? e.y - h.y : 0;
        t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
      }
    }

    function Gr(t, e, n) {
      function i(n, i) {
        var a = {},
          l = 0,
          h = {},
          u = 0;
        if (lv(n, function (e) {
            h[e] = t[e]
          }),
          lv(n, function (t) {
            r(e, t) && (a[t] = h[t] = e[t]),
              o(a, t) && l++,
              o(h, t) && u++
          }),
          s[i])
          return o(e, n[1]) ? h[n[2]] = null : o(e, n[2]) && (h[n[1]] = null),
            h;
        if (2 !== u && l) {
          if (l >= 2)
            return a;
          for (var c = 0; c < n.length; c++) {
            var d = n[c];
            if (!r(a, d) && r(t, d)) {
              a[d] = t[d];
              break
            }
          }
          return a
        }
        return h
      }

      function r(t, e) {
        return t.hasOwnProperty(e)
      }

      function o(t, e) {
        return null != t[e] && "auto" !== t[e]
      }

      function a(t, e, n) {
        lv(t, function (t) {
          e[t] = n[t]
        })
      }!_(n) && (n = {});
      var s = n.ignoreSize;
      !m(s) && (s = [s, s]);
      var l = i(uv[0], 0),
        h = i(uv[1], 1);
      a(uv[0], t, l),
        a(uv[1], t, h)
    }

    function Hr(t) {
      return Fr({}, t)
    }

    function Fr(t, e) {
      return e && t && lv(hv, function (n) {
          e.hasOwnProperty(n) && (t[n] = e[n])
        }),
        t
    }

    function Zr(t, i) {
      c(i, function (i, r) {
        pv.hasClass(r) || ("object" == typeof i ? t[r] = t[r] ? n(t[r], i, !1) : e(i) : null == t[r] && (t[r] = i))
      })
    }

    function Ur(t) {
      t = t,
        this.option = {},
        this.option[Sv] = 1,
        this._componentsMap = O({
          series: []
        }),
        this._seriesIndices = null,
        Zr(t, this._theme.option),
        n(t, vv, !1),
        this.mergeOption(t)
    }

    function Xr(t, e) {
      m(e) || (e = e ? [e] : []);
      var n = {};
      return yv(e, function (e) {
          n[e] = (t.get(e) || []).slice()
        }),
        n
    }

    function jr(t, e, n) {
      return e.type ? e.type : n ? n.subType : pv.determineSubType(t, e)
    }

    function qr(t) {
      return _v(t, function (t) {
        return t.componentIndex
      }) || []
    }

    function Yr(t, e) {
      return e.hasOwnProperty("subType") ? xv(t, function (t) {
        return t.subType === e.subType
      }) : t
    }

    function $r(t) {}

    function Kr(t) {
      c(Tv, function (e) {
        this[e] = g(t[e], t)
      }, this)
    }

    function Qr() {
      this._coordinateSystems = []
    }

    function Jr(t) {
      this._api = t,
        this._timelineOptions = [],
        this._mediaList = [],
        this._mediaDefault,
        this._currentMediaIndices = [],
        this._optionBackup,
        this._newBaseOption
    }

    function to(t, e, n) {
      var i, r, o = [],
        a = [],
        s = t.timeline;
      if (t.baseOption && (r = t.baseOption),
        (s || t.options) && (r = r || {},
          o = (t.options || []).slice()),
        t.media) {
        r = r || {};
        var l = t.media;
        Cv(l, function (t) {
          t && t.option && (t.query ? a.push(t) : i || (i = t))
        })
      }
      return r || (r = t),
        r.timeline || (r.timeline = s),
        Cv([r].concat(o).concat(d(a, function (t) {
          return t.option
        })), function (t) {
          Cv(e, function (e) {
            e(t, n)
          })
        }), {
          baseOption: r,
          timelineOptions: o,
          mediaDefault: i,
          mediaList: a
        }
    }

    function eo(t, e, n) {
      var i = {
          width: e,
          height: n,
          aspectratio: e / n
        },
        r = !0;
      return c(t, function (t, e) {
          var n = e.match(Pv);
          if (n && n[1] && n[2]) {
            var o = n[1],
              a = n[2].toLowerCase();
            no(i[a], t, o) || (r = !1)
          }
        }),
        r
    }

    function no(t, e, n) {
      return "min" === n ? t >= e : "max" === n ? t <= e : t === e
    }

    function io(t, e) {
      return t.join(",") === e.join(",")
    }

    function ro(t, e) {
      Cv(e = e || {}, function (e, n) {
        if (null != e) {
          var i = t[n];
          if (pv.hasClass(n)) {
            e = Mr(e);
            var r = Cr(i = Mr(i), e);
            t[n] = Dv(r, function (t) {
              return t.option && t.exist ? Lv(t.exist, t.option, !0) : t.exist || t.option
            })
          } else
            t[n] = Lv(i, e, !0)
        }
      })
    }

    function oo(t) {
      var e = t && t.itemStyle;
      if (e)
        for (var i = 0, r = Ev.length; i < r; i++) {
          var o = Ev[i],
            a = e.normal,
            s = e.emphasis;
          a && a[o] && (t[o] = t[o] || {},
              t[o].normal ? n(t[o].normal, a[o]) : t[o].normal = a[o],
              a[o] = null),
            s && s[o] && (t[o] = t[o] || {},
              t[o].emphasis ? n(t[o].emphasis, s[o]) : t[o].emphasis = s[o],
              s[o] = null)
        }
    }

    function ao(t, e) {
      var n = zv(t) && t[e],
        i = zv(n) && n.textStyle;
      if (i)
        for (var r = 0, o = iv.length; r < o; r++) {
          var e = iv[r];
          i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }

    function so(t) {
      zv(t) && (ao(t, "normal"),
        ao(t, "emphasis"))
    }

    function lo(t) {
      if (zv(t)) {
        oo(t),
          so(t.label),
          so(t.upperLabel),
          so(t.edgeLabel);
        var e = t.markPoint;
        oo(e),
          so(e && e.label);
        var n = t.markLine;
        oo(t.markLine),
          so(n && n.label);
        var i = t.markArea;
        so(i && i.label),
          ao(t, "axisLabel"),
          ao(t, "title"),
          ao(t, "detail");
        var r = t.data;
        if (r)
          for (a = 0; a < r.length; a++)
            oo(r[a]),
            so(r[a] && r[a].label);
        if ((e = t.markPoint) && e.data)
          for (var o = e.data, a = 0; a < o.length; a++)
            oo(o[a]),
            so(o[a] && o[a].label);
        if ((n = t.markLine) && n.data)
          for (var s = n.data, a = 0; a < s.length; a++)
            m(s[a]) ? (oo(s[a][0]),
              so(s[a][0] && s[a][0].label),
              oo(s[a][1]),
              so(s[a][1] && s[a][1].label)) : (oo(s[a]),
              so(s[a] && s[a].label))
      }
    }

    function ho(t) {
      return m(t) ? t : t ? [t] : []
    }

    function uo(t) {
      return (m(t) ? t[0] : t) || {}
    }

    function co(t, e) {
      e = e.split(",");
      for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++)
      ;
      return n
    }

    function fo(t, e, n, i) {
      e = e.split(",");
      for (var r, o = t, a = 0; a < e.length - 1; a++)
        null == o[r = e[a]] && (o[r] = {}),
        o = o[r];
      (i || null == o[e[a]]) && (o[e[a]] = n)
    }

    function po(t) {
      c(Bv, function (e) {
        e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
      })
    }

    function go() {
      this.group = new yf,
        this.uid = Br("viewChart")
    }

    function vo(t, e) {
      if (t && (t.trigger(e),
          "group" === t.type))
        for (var n = 0; n < t.childCount(); n++)
          vo(t.childAt(n), e)
    }

    function mo(t, e, n) {
      var i = Lr(t, e);
      null != i ? c(Mr(i), function (e) {
        vo(t.getItemGraphicEl(e), n)
      }) : t.eachItemGraphicEl(function (t) {
        vo(t, n)
      })
    }

    function yo(t, e, n) {
      function i() {
        u = (new Date).getTime(),
          c = null,
          t.apply(a, s || [])
      }
      var r, o, a, s, l, h = 0,
        u = 0,
        c = null;
      e = e || 0;
      var d = function () {
        r = (new Date).getTime(),
          a = this,
          s = arguments;
        var t = l || e,
          d = l || n;
        l = null,
          o = r - (d ? h : u) - t,
          clearTimeout(c),
          d ? c = setTimeout(i, t) : o >= 0 ? i() : c = setTimeout(i, -o),
          h = r
      };
      return d.clear = function () {
          c && (clearTimeout(c),
            c = null)
        },
        d.debounceNextCall = function (t) {
          l = t
        },
        d
    }

    function xo(t, e, n, i) {
      var r = t[e];
      if (r) {
        var o = r[Uv] || r,
          a = r[jv];
        if (r[Xv] !== n || a !== i) {
          if (null == n || !i)
            return t[e] = o;
          (r = t[e] = yo(o, n, "debounce" === i))[Uv] = o,
          r[jv] = i,
            r[Xv] = n
        }
        return r
      }
    }

    function _o(t, e) {
      var n = t[e];
      n && n[Uv] && (t[e] = n[Uv])
    }

    function wo(t) {
      return function (e, n, i) {
        e = e && e.toLowerCase(),
          Bd.prototype[t].call(this, e, n, i)
      }
    }

    function bo() {
      Bd.call(this)
    }

    function Mo(t, n, i) {
      function r(t, e) {
        return t.prio - e.prio
      }
      i = i || {},
        "string" == typeof n && (n = gm[n]),
        this.id,
        this.group,
        this._dom = t;
      var o = "canvas",
        a = this._zr = pn(t, {
          renderer: i.renderer || o,
          devicePixelRatio: i.devicePixelRatio,
          width: i.width,
          height: i.height
        });
      this._throttledZrFlush = yo(g(a.flush, a), 17),
        (n = e(n)) && Wv(n, !0),
        this._theme = n,
        this._chartsViews = [],
        this._chartsMap = {},
        this._componentsViews = [],
        this._componentsMap = {},
        this._coordSysMgr = new Qr,
        this._api = Vo(this),
        Bd.call(this),
        this._messageCenter = new bo,
        this._initEvents(),
        this.resize = g(this.resize, this),
        this._pendingActions = [],
        Kt(pm, r),
        Kt(cm, r),
        a.animation.on("frame", this._onframe, this),
        D(this)
    }

    function So(t, e, n) {
      var i, r = this._model,
        o = this._coordSysMgr.getCoordinateSystems();
      e = Pr(r, e);
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (s[t] && null != (i = s[t](r, e, n)))
          return i
      }
    }

    function Io(t, e, n, i, r) {
      function o(i) {
        i && i.__alive && i[e] && i[e](i.__model, a, t._api, n)
      }
      var a = t._model;
      if (i) {
        var s = {};
        s[i + "Id"] = n[i + "Id"],
          s[i + "Index"] = n[i + "Index"],
          s[i + "Name"] = n[i + "Name"];
        var l = {
          mainType: i,
          query: s
        };
        r && (l.subType = r),
          a && a.eachComponent(l, function (e, n) {
            o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
          }, t)
      } else
        Yv(t._componentsViews.concat(t._chartsViews), o)
    }

    function To(t, e) {
      var n = t.type,
        i = t.escapeConnect,
        a = hm[n],
        s = a.actionInfo,
        l = (s.update || "update").split(":"),
        h = l.pop();
      l = null != l[0] && $v(l[0]),
        this[im] = !0;
      var u = [t],
        c = !1;
      t.batch && (c = !0,
        u = d(t.batch, function (e) {
          return e = o(r({}, e), t),
            e.batch = null,
            e
        }));
      var f, p = [],
        g = "highlight" === n || "downplay" === n;
      Yv(u, function (t) {
          f = a.action(t, this._model, this._api),
            (f = f || r({}, t)).type = s.event || f.type,
            p.push(f),
            g ? Io(this, h, t, "series") : l && Io(this, h, t, l.main, l.sub)
        }, this),
        "none" === h || g || l || (this[rm] ? (sm.prepareAndUpdate.call(this, t),
          this[rm] = !1) : sm[h].call(this, t)),
        f = c ? {
          type: s.event || n,
          escapeConnect: i,
          batch: p
        } : p[0],
        this[im] = !1,
        !e && this._messageCenter.trigger(f.type, f)
    }

    function Ao(t) {
      for (var e = this._pendingActions; e.length;) {
        var n = e.shift();
        To.call(this, n, t)
      }
    }

    function Co(t) {
      !t && this.trigger("updated")
    }

    function ko(t, e, n) {
      var i = this._api;
      Yv(this._componentsViews, function (r) {
          var o = r.__model;
          r[t](o, e, i, n),
            Ro(o, r)
        }, this),
        e.eachSeries(function (r, o) {
          var a = this._chartsMap[r.__viewId];
          a[t](r, e, i, n),
            Ro(r, a),
            Bo(r, a)
        }, this),
        No(this._zr, e),
        Yv(fm, function (t) {
          t(e, i)
        })
    }

    function Do(t, e) {
      for (var n = "component" === t, i = n ? this._componentsViews : this._chartsViews, r = n ? this._componentsMap : this._chartsMap, o = this._zr, a = 0; a < i.length; a++)
        i[a].__alive = !1;
      e[n ? "eachComponent" : "eachSeries"](function (t, a) {
        if (n) {
          if ("series" === t)
            return
        } else
          a = t;
        var s = "_ec_" + a.id + "_" + a.type,
          l = r[s];
        if (!l) {
          var h = $v(a.type),
            u = n ? Hv.getClass(h.main, h.sub) : go.getClass(h.sub);
          if (!u)
            return;
          (l = new u).init(e, this._api),
            r[s] = l,
            i.push(l),
            o.add(l.group)
        }
        a.__viewId = l.__id = s,
          l.__alive = !0,
          l.__model = a,
          l.group.__ecComponentInfo = {
            mainType: a.mainType,
            index: a.componentIndex
          }
      }, this);
      for (a = 0; a < i.length;) {
        var s = i[a];
        s.__alive ? a++ : (o.remove(s.group),
          s.dispose(e, this._api),
          i.splice(a, 1),
          delete r[s.__id],
          s.__id = s.group.__ecComponentInfo = null)
      }
    }

    function Lo(t, e) {
      Yv(cm, function (n) {
        n.func(t, e)
      })
    }

    function Po(t) {
      var e = {};
      t.eachSeries(function (t) {
        var n = t.get("stack"),
          i = t.getData();
        if (n && "list" === i.type) {
          var r = e[n];
          e.hasOwnProperty(n) && r && (i.stackedOn = r),
            e[n] = i
        }
      })
    }

    function Oo(t, e) {
      var n = this._api;
      Yv(pm, function (i) {
        i.isLayout && i.func(t, n, e)
      })
    }

    function zo(t, e, n) {
      var i = this._api;
      t.clearColorPalette(),
        t.eachSeries(function (t) {
          t.clearColorPalette()
        }),
        Yv(pm, function (r) {
          (!n || !r.isLayout) && r.func(t, i, e)
        })
    }

    function Eo(t, e) {
      var n = this._api;
      Yv(this._componentsViews, function (i) {
          var r = i.__model;
          i.render(r, t, n, e),
            Ro(r, i)
        }, this),
        Yv(this._chartsViews, function (t) {
          t.__alive = !1
        }, this),
        t.eachSeries(function (i, r) {
          var o = this._chartsMap[i.__viewId];
          o.__alive = !0,
            o.render(i, t, n, e),
            o.group.silent = !!i.get("silent"),
            Ro(i, o),
            Bo(i, o)
        }, this),
        No(this._zr, t),
        Yv(this._chartsViews, function (e) {
          e.__alive || e.remove(t, n)
        }, this)
    }

    function No(t, e) {
      var n = t.storage,
        i = 0;
      n.traverse(function (t) {
          t.isGroup || i++
        }),
        i > e.get("hoverLayerThreshold") && !vd.node && n.traverse(function (t) {
          t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function Bo(t, e) {
      var n = 0;
      e.group.traverse(function (t) {
        "group" === t.type || t.ignore || n++
      });
      var i = +t.get("progressive"),
        r = n > t.get("progressiveThreshold") && i && !vd.node;
      r && e.group.traverse(function (t) {
          t.isGroup || (t.progressive = r ? Math.floor(n++/ i) : -1,
              r && t.stopAnimation(!0))
          });
        var o = t.get("blendMode") || null; e.group.traverse(function (t) {
          t.isGroup || t.setStyle("blend", o)
        })
      }

      function Ro(t, e) {
        var n = t.get("z"),
          i = t.get("zlevel");
        e.group.traverse(function (t) {
          "group" !== t.type && (null != n && (t.z = n),
            null != i && (t.zlevel = i))
        })
      }

      function Vo(t) {
        var e = t._coordSysMgr;
        return r(new Kr(t), {
          getCoordinateSystems: g(e.getCoordinateSystems, e),
          getComponentByElement: function (e) {
            for (; e;) {
              var n = e.__ecComponentInfo;
              if (null != n)
                return t._model.getComponent(n.mainType, n.index);
              e = e.parent
            }
          }
        })
      }

      function Wo(t) {
        function e(t, e) {
          for (var i = 0; i < t.length; i++)
            t[i][n] = e
        }
        var n = "__connectUpdateStatus";
        c(um, function (i, r) {
          t._messageCenter.on(r, function (i) {
            if (ym[t.group] && 0 !== t[n]) {
              if (i && i.escapeConnect)
                return;
              var r = t.makeActionFromEvent(i),
                o = [];
              c(mm, function (e) {
                  e !== t && e.group === t.group && o.push(e)
                }),
                e(o, 0),
                Yv(o, function (t) {
                  1 !== t[n] && t.dispatchAction(r)
                }),
                e(o, 2)
            }
          })
        })
      }

      function Go(t) {
        ym[t] = !1
      }

      function Ho(t) {
        var e;
        return e = t.getAttribute ? t.getAttribute(wm) : t[wm],
          mm[e]
      }

      function Fo(t) {
        dm.push(t)
      }

      function Zo(t, e) {
        "function" == typeof t && (e = t,
            t = Jv),
          cm.push({
            prio: t,
            func: e
          })
      }

      function Uo(t, e, n) {
        "function" == typeof e && (n = e,
          e = "");
        var i = _(t) ? t.type : [t, t = {
          event: e
        }][0];
        t.event = (t.event || i).toLowerCase(),
          e = t.event,
          k(om.test(i) && om.test(e)),
          hm[i] || (hm[i] = {
            action: n,
            actionInfo: t
          }),
          um[e] = i
      }

      function Xo(t, e) {
        "function" == typeof t && (e = t,
            t = tm),
          pm.push({
            prio: t,
            func: e,
            isLayout: !0
          })
      }

      function jo(t, e) {
        "function" == typeof t && (e = t,
            t = em),
          pm.push({
            prio: t,
            func: e
          })
      }

      function qo(t, e) {
        vm[t] = e
      }

      function Yo(t) {
        return pv.extend(t)
      }

      function $o(t) {
        return Hv.extend(t)
      }

      function Ko(t) {
        return Gv.extend(t)
      }

      function Qo(t) {
        return go.extend(t)
      }

      function Jo(t) {
        return t
      }

      function ta(t, e, n, i, r) {
        this._old = t,
          this._new = e,
          this._oldKeyGetter = n || Jo,
          this._newKeyGetter = i || Jo,
          this.context = r
      }

      function ea(t, e, n, i, r) {
        for (var o = 0; o < t.length; o++) {
          var a = "_ec_" + r[i](t[o], o),
            s = e[a];
          null == s ? (n.push(a),
            e[a] = o) : (s.length || (e[a] = s = [s]),
            s.push(o))
        }
      }

      function na(t, e) {
        c(Am.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
          }),
          t.__wrappedMethods = e.__wrappedMethods
      }

      function ia(t) {
        this._array = t || []
      }

      function ra(t) {
        return m(t) || (t = [t]),
          t
      }

      function oa(t, e) {
        var n = t.dimensions,
          i = new Cm(d(n, t.getDimensionInfo, t), t.hostModel);
        na(i, t);
        for (var r = i._storage = {}, o = t._storage, a = 0; a < n.length; a++) {
          var l = n[a],
            h = o[l];
          s(e, l) >= 0 ? r[l] = new h.constructor(o[l].length) : r[l] = o[l]
        }
        return i
      }

      function aa(t, n, i) {
        function r(t, e, n) {
          zm[e] ? t.otherDims[e] = n : (t.coordDim = e,
            t.coordDimIndex = n,
            h.set(e, !0))
        }

        function o(t, e, n) {
          if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);)
              i++;
            t += i
          }
          return e.set(t, !0),
            t
        }
        n = n || [],
          i = i || {},
          t = (t || []).slice();
        var a = (i.dimsDef || []).slice(),
          s = O(i.encodeDef),
          l = O(),
          h = O(),
          u = [],
          c = i.dimCount;
        if (null == c) {
          var d = sa(n[0]);
          c = Math.max(m(d) && d.length || 1, t.length, a.length),
            Lm(t, function (t) {
              var e = t.dimsDef;
              e && (c = Math.max(c, e.length))
            })
        }
        for (var f = 0; f < c; f++) {
          var p = Pm(a[f]) ? {
              name: a[f]
            } : a[f] || {},
            g = p.name,
            v = u[f] = {
              otherDims: {}
            };
          null != g && null == l.get(g) && (v.name = v.tooltipName = g,
              l.set(g, f)),
            null != p.type && (v.type = p.type)
        }
        s.each(function (t, e) {
          t = s.set(e, Mr(t).slice()),
            Lm(t, function (n, i) {
              Pm(n) && (n = l.get(n)),
                null != n && n < c && (t[i] = n,
                  r(u[n], e, i))
            })
        });
        var y = 0;
        Lm(t, function (t, n) {
          var i, t, o, a;
          Pm(t) ? (i = t,
            t = {}) : (i = t.name,
            t = e(t),
            o = t.dimsDef,
            a = t.otherDims,
            t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
          var l = Mr(s.get(i));
          if (!l.length)
            for (var h = 0; h < (o && o.length || 1); h++) {
              for (; y < u.length && null != u[y].coordDim;)
                y++;
              y < u.length && l.push(y++)
            }
          Lm(l, function (e, n) {
            var s = u[e];
            r(Om(s, t), i, n),
              null == s.name && o && (s.name = s.tooltipName = o[n]),
              a && Om(s.otherDims, a)
          })
        });
        for (var x = i.extraPrefix || "value", _ = 0; _ < c; _++)
          null == (v = u[_] = u[_] || {}).coordDim && (v.coordDim = o(x, h, i.extraFromZero),
            v.coordDimIndex = 0,
            v.isExtraCoord = !0),
          null == v.name && (v.name = o(v.coordDim, l)),
          null == v.type && Em(n, _) && (v.type = "ordinal");
        return u
      }

      function sa(t) {
        return m(t) ? t : _(t) ? t.value : t
      }

      function la(t) {
        for (var e = 0; e < t.length && null == t[e];)
          e++;
        return t[e]
      }

      function ha(t) {
        var e = la(t);
        return null != e && !m(Ir(e))
      }

      function ua(t, e, n) {
        t = t || [];
        var i = e.get("coordinateSystem"),
          r = Nm[i],
          o = Qr.get(i),
          a = {
            encodeDef: e.get("encode"),
            dimsDef: e.get("dimensions")
          },
          l = r && r(t, e, n, a),
          h = l && l.dimensions;
        h || (h = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"],
          h = aa(h, t, a));
        var u = l ? l.categoryIndex : -1,
          c = new Cm(h, e),
          d = fa(l, t),
          f = {},
          p = u >= 0 && ha(t) ? function (t, e, n, i) {
            return Tr(t) && (c.hasItemOption = !0),
              i === u ? n : Ar(Ir(t), h[i])
          } :
          function (t, e, n, i) {
            var r = Ir(t),
              o = Ar(r && r[i], h[i]);
            Tr(t) && (c.hasItemOption = !0);
            var a = l && l.categoryAxesModels;
            return a && a[e] && "string" == typeof o && (f[e] = f[e] || a[e].getCategories(),
                (o = s(f[e], o)) < 0 && !isNaN(o) && (o = +o)),
              o
          };
        return c.hasItemOption = !1,
          c.initData(t, d, p),
          c
      }

      function ca(t) {
        return "category" !== t && "time" !== t
      }

      function da(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
      }

      function fa(t, e) {
        var n, i = [],
          r = t && t.dimensions[t.categoryIndex];
        if (r && (n = t.categoryAxesModels[r.name]),
          n) {
          var o = n.getCategories();
          if (o) {
            var a = e.length;
            if (m(e[0]) && e[0].length > 1) {
              i = [];
              for (var s = 0; s < a; s++)
                i[s] = o[e[s][t.categoryIndex || 0]]
            } else
              i = o.slice(0)
          }
        }
        return i
      }

      function pa(t) {
        this._setting = t || {},
          this._extent = [1 / 0, -1 / 0],
          this._interval = 0,
          this.init && this.init.apply(this, arguments)
      }

      function ga(t, e, n, i) {
        var r = {},
          o = t[1] - t[0],
          a = r.interval = Ln(o / e, !0);
        null != n && a < n && (a = r.interval = n),
          null != i && a > i && (a = r.interval = i);
        var s = r.intervalPrecision = va(a);
        return ya(r.niceTickExtent = [Wm(Math.ceil(t[0] / a) * a, s), Wm(Math.floor(t[1] / a) * a, s)], t),
          r
      }

      function va(t) {
        return Mn(t) + 2
      }

      function ma(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
      }

      function ya(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]),
          !isFinite(t[1]) && (t[1] = e[1]),
          ma(t, 0, e),
          ma(t, 1, e),
          t[0] > t[1] && (t[0] = t[1])
      }

      function xa(t, e, n, i) {
        var r = [];
        if (!t)
          return r;
        e[0] < n[0] && r.push(e[0]);
        for (var o = n[0]; o <= n[1] && (r.push(o),
            (o = Wm(o + t, i)) !== r[r.length - 1]);)
          if (r.length > 1e4)
            return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]),
          r
      }

      function _a(t, e) {
        return Qm(t, Km(e))
      }

      function wa(t, e) {
        var n, i, r, o = t.type,
          a = e.getMin(),
          s = e.getMax(),
          l = null != a,
          h = null != s,
          u = t.getExtent();
        return "ordinal" === o ? n = (e.get("data") || []).length : (m(i = e.get("boundaryGap")) || (i = [i || 0, i || 0]),
            "boolean" == typeof i[0] && (i = [0, 0]),
            i[0] = xn(i[0], 1),
            i[1] = xn(i[1], 1),
            r = u[1] - u[0] || Math.abs(u[0])),
          null == a && (a = "ordinal" === o ? n ? 0 : NaN : u[0] - i[0] * r),
          null == s && (s = "ordinal" === o ? n ? n - 1 : NaN : u[1] + i[1] * r),
          "dataMin" === a ? a = u[0] : "function" == typeof a && (a = a({
            min: u[0],
            max: u[1]
          })),
          "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
          })),
          (null == a || !isFinite(a)) && (a = NaN),
          (null == s || !isFinite(s)) && (s = NaN),
          t.setBlank(M(a) || M(s)),
          e.getNeedCrossZero() && (a > 0 && s > 0 && !l && (a = 0),
            a < 0 && s < 0 && !h && (s = 0)),
          [a, s]
      }

      function ba(t, e) {
        var n = wa(t, e),
          i = null != e.getMin(),
          r = null != e.getMax(),
          o = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var a = t.type;
        t.setExtent(n[0], n[1]),
          t.niceExtent({
            splitNumber: o,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null,
            maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null
          });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
      }

      function Ma(t, e) {
        if (e = e || t.get("type"))
          switch (e) {
            case "category":
              return new Vm(t.getCategories(), [1 / 0, -1 / 0]);
            case "value":
              return new Hm;
            default:
              return (pa.getClass(e) || Hm).create(t)
          }
      }

      function Sa(t, e, n, i, r) {
        var o, a = 0,
          s = 0,
          l = (i - r) / 180 * Math.PI,
          h = 1;
        e.length > 40 && (h = Math.floor(e.length / 40));
        for (var u = 0; u < t.length; u += h) {
          var c = t[u],
            d = le(e[u], n, "center", "top");
          d.x += c * Math.cos(l),
            d.y += c * Math.sin(l),
            d.width *= 1.3,
            d.height *= 1.3,
            o ? o.intersect(d) ? (s++,
              a = Math.max(a, s)) : (o.union(d),
              s = 0) : o = d.clone()
        }
        return 0 === a && h > 1 ? h : (a + 1) * h - 1
      }

      function Ia(t, e) {
        var n = t.scale,
          i = n.getTicksLabels(),
          r = n.getTicks();
        return "string" == typeof e ? (e = function (t) {
            return function (e) {
              return t.replace("{value}", null != e ? e : "")
            }
          }(e),
          d(i, e)) : "function" == typeof e ? d(r, function (n, i) {
          return e(Ta(t, n), i)
        }, this) : i
      }

      function Ta(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
      }

      function Aa(t) {
        return _(t) && null != t.value ? t.value : t + ""
      }

      function Ca(t, e) {
        if ("image" !== this.type) {
          var n = this.style,
            i = this.shape;
          i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t,
              n.fill = e || "#fff") : (n.fill && (n.fill = t),
              n.stroke && (n.stroke = t)),
            this.dirty(!1)
        }
      }

      function ka(t, e, n, i, r, o, a) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Bi(t.slice(8), new Ft(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? Ni(t.slice(7), {}, new Ft(e, n, i, r), a ? "center" : "cover") : new cy({
            shape: {
              symbolType: t,
              x: e,
              y: n,
              width: i,
              height: r
            }
          }),
          l.__isEmptyBrush = s,
          l.setColor = Ca,
          l.setColor(o),
          l
      }

      function Da(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n,
          t[1] -= n
      }

      function La(t) {
        var e, n = Er(t, "label");
        if (n.length)
          e = n[0];
        else
          for (var i, r = t.dimensions.slice(); r.length && (e = r.pop(),
              "ordinal" === (i = t.getDimensionInfo(e).type) || "time" === i);)
        ;
        return e
      }

      function Pa(t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [+n, +n]
      }

      function Oa(t) {
        return [t[0] / 2, t[1] / 2]
      }

      function za(t, e, n) {
        yf.call(this),
          this.updateData(t, e, n)
      }

      function Ea(t, e) {
        this.parent.drift(t, e)
      }

      function Na(t) {
        this.group = new yf,
          this._symbolCtor = t || za
      }

      function Ba(t, e, n) {
        var i = t.getItemLayout(e);
        return i && !isNaN(i[0]) && !isNaN(i[1]) && !(n && n(e)) && "none" !== t.getItemVisual(e, "symbol")
      }

      function Ra(t) {
        return t >= 0 ? 1 : -1
      }

      function Va(t, e, n) {
        for (var i, r = t.getBaseAxis(), o = t.getOtherAxis(r), a = r.onZero ? 0 : o.scale.getExtent()[0], s = o.dim, l = "x" === s || "radius" === s ? 1 : 0, h = e.stackedOn, u = e.get(s, n); h && Ra(h.get(s, n)) === Ra(u);) {
          i = h;
          break
        }
        var c = [];
        return c[l] = e.get(r.dim, n),
          c[1 - l] = i ? i.get(s, n, !0) : a,
          t.dataToPoint(c)
      }

      function Wa(t, e) {
        var n = [];
        return e.diff(t).add(function (t) {
            n.push({
              cmd: "+",
              idx: t
            })
          }).update(function (t, e) {
            n.push({
              cmd: "=",
              idx: e,
              idx1: t
            })
          }).remove(function (t) {
            n.push({
              cmd: "-",
              idx: t
            })
          }).execute(),
          n
      }

      function Ga(t) {
        return isNaN(t[0]) || isNaN(t[1])
      }

      function Ha(t, e, n, i, r, o, a, s, l, h, u) {
        for (var c = 0, d = n, f = 0; f < i; f++) {
          var p = e[d];
          if (d >= r || d < 0)
            break;
          if (Ga(p)) {
            if (u) {
              d += o;
              continue
            }
            break
          }
          if (d === n)
            t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]),
            Ay(ky, p);
          else if (l > 0) {
            var g = d + o,
              v = e[g];
            if (u)
              for (; v && Ga(e[g]);)
                v = e[g += o];
            var m = .5,
              y = e[c];
            if (!(v = e[g]) || Ga(v))
              Ay(Dy, p);
            else {
              Ga(v) && !u && (v = p),
                W(Cy, v, y);
              var x, _;
              if ("x" === h || "y" === h) {
                var w = "x" === h ? 0 : 1;
                x = Math.abs(p[w] - y[w]),
                  _ = Math.abs(p[w] - v[w])
              } else
                x = Od(p, y),
                _ = Od(p, v);
              Ty(Dy, p, Cy, -l * (1 - (m = _ / (_ + x))))
            }
            Sy(ky, ky, s),
              Iy(ky, ky, a),
              Sy(Dy, Dy, s),
              Iy(Dy, Dy, a),
              t.bezierCurveTo(ky[0], ky[1], Dy[0], Dy[1], p[0], p[1]),
              Ty(ky, p, Cy, l * m)
          } else
            t.lineTo(p[0], p[1]);
          c = d,
            d += o
        }
        return f
      }

      function Fa(t, e) {
        var n = [1 / 0, 1 / 0],
          i = [-1 / 0, -1 / 0];
        if (e)
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o[0] < n[0] && (n[0] = o[0]),
              o[1] < n[1] && (n[1] = o[1]),
              o[0] > i[0] && (i[0] = o[0]),
              o[1] > i[1] && (i[1] = o[1])
          }
        return {
          min: e ? n : i,
          max: e ? i : n
        }
      }

      function Za(t, e) {
        if (t.length === e.length) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n],
              r = e[n];
            if (i[0] !== r[0] || i[1] !== r[1])
              return
          }
          return !0
        }
      }

      function Ua(t) {
        return "number" == typeof t ? t : t ? .3 : 0
      }

      function Xa(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
          var n = t.getBandWidth() / 2 - 1,
            i = e[1] > e[0] ? 1 : -1;
          e[0] += i * n,
            e[1] -= i * n
        }
        return e
      }

      function ja(t) {
        return t >= 0 ? 1 : -1
      }

      function qa(t, e) {
        var n = t.getBaseAxis(),
          i = t.getOtherAxis(n),
          r = 0;
        if (!n.onZero) {
          var o = i.scale.getExtent();
          o[0] > 0 ? r = o[0] : o[1] < 0 && (r = o[1])
        }
        var a = i.dim,
          s = "x" === a || "radius" === a ? 1 : 0;
        return e.mapArray([a], function (i, o) {
          for (var l, h = e.stackedOn; h && ja(h.get(a, o)) === ja(i);) {
            l = h;
            break
          }
          var u = [];
          return u[s] = e.get(n.dim, o),
            u[1 - s] = l ? l.get(a, o, !0) : r,
            t.dataToPoint(u)
        }, !0)
      }

      function Ya(t, e, n) {
        var i = Xa(t.getAxis("x")),
          r = Xa(t.getAxis("y")),
          o = t.getBaseAxis().isHorizontal(),
          a = Math.min(i[0], i[1]),
          s = Math.min(r[0], r[1]),
          l = Math.max(i[0], i[1]) - a,
          h = Math.max(r[0], r[1]) - s,
          u = n.get("lineStyle.normal.width") || 2,
          c = n.get("clipOverflow") ? u / 2 : Math.max(l, h);
        o ? (s -= c,
          h += 2 * c) : (a -= c,
          l += 2 * c);
        var d = new Ng({
          shape: {
            x: a,
            y: s,
            width: l,
            height: h
          }
        });
        return e && (d.shape[o ? "width" : "height"] = 0,
            fr(d, {
              shape: {
                width: l,
                height: h
              }
            }, n)),
          d
      }

      function $a(t, e, n) {
        var i = t.getAngleAxis(),
          r = t.getRadiusAxis().getExtent(),
          o = i.getExtent(),
          a = Math.PI / 180,
          s = new Dg({
            shape: {
              cx: t.cx,
              cy: t.cy,
              r0: r[0],
              r: r[1],
              startAngle: -o[0] * a,
              endAngle: -o[1] * a,
              clockwise: i.inverse
            }
          });
        return e && (s.shape.endAngle = -o[0] * a,
            fr(s, {
              shape: {
                endAngle: -o[1] * a
              }
            }, n)),
          s
      }

      function Ka(t, e, n) {
        return "polar" === t.type ? $a(t, e, n) : Ya(t, e, n)
      }

      function Qa(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {
          var s = t[a + 1],
            l = t[a];
          o.push(l);
          var h = [];
          switch (n) {
            case "end":
              h[r] = s[r],
                h[1 - r] = l[1 - r],
                o.push(h);
              break;
            case "middle":
              var u = (l[r] + s[r]) / 2,
                c = [];
              h[r] = c[r] = u,
                h[1 - r] = l[1 - r],
                c[1 - r] = s[1 - r],
                o.push(h),
                o.push(c);
              break;
            default:
              h[r] = l[r],
                h[1 - r] = s[1 - r],
                o.push(h)
          }
        }
        return t[a] && o.push(t[a]),
          o
      }

      function Ja(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count()) {
          for (var i, r = n.length - 1; r >= 0; r--)
            if (n[r].dimension < 2) {
              i = n[r];
              break
            }
          if (i && "cartesian2d" === e.type) {
            var o = i.dimension,
              a = t.dimensions[o],
              s = e.getAxis(a),
              l = d(i.stops, function (t) {
                return {
                  coord: s.toGlobalCoord(s.dataToCoord(t.value)),
                  color: t.color
                }
              }),
              h = l.length,
              u = i.outerColors.slice();
            h && l[0].coord > l[h - 1].coord && (l.reverse(),
              u.reverse());
            var f = l[0].coord - 10,
              p = l[h - 1].coord + 10,
              g = p - f;
            if (g < .001)
              return "transparent";
            c(l, function (t) {
                t.offset = (t.coord - f) / g
              }),
              l.push({
                offset: h ? l[h - 1].offset : .5,
                color: u[1] || "transparent"
              }),
              l.unshift({
                offset: h ? l[0].offset : .5,
                color: u[0] || "transparent"
              });
            var v = new Fg(0, 0, 0, 0, l, !0);
            return v[a] = f,
              v[a + "2"] = p,
              v
          }
        }
      }

      function ts(t) {
        return this._axes[t]
      }

      function es(t) {
        By.call(this, t)
      }

      function ns(t, e) {
        return e.type || (e.data ? "category" : "value")
      }

      function is(t, e, n) {
        return t.getCoordSysModel() === e
      }

      function rs(t, e) {
        var n = e * Math.PI / 180,
          i = t.plain(),
          r = i.width,
          o = i.height,
          a = r * Math.cos(n) + o * Math.sin(n),
          s = r * Math.sin(n) + o * Math.cos(n);
        return new Ft(i.x, i.y, a, s)
      }

      function os(t) {
        var e, n = t.model,
          i = n.getFormattedLabels(),
          r = n.getModel("axisLabel"),
          o = 1,
          a = i.length;
        a > 40 && (o = Math.ceil(a / 40));
        for (var s = 0; s < a; s += o)
          if (!t.isLabelIgnored(s)) {
            var l = rs(r.getTextRect(i[s]), r.get("rotate") || 0);
            e ? e.union(l) : e = l
          }
        return e
      }

      function as(t, e, n) {
        this._coordsMap = {},
          this._coordsList = [],
          this._axesMap = {},
          this._axesList = [],
          this._initCartesian(t, e, n),
          this.model = t
      }

      function ss(t, e, n) {
        var i = t[e];
        if (n.onZero) {
          var r = n.onZeroAxisIndex;
          if (null == r) {
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var a = i[o];
                if (a && !ls(a)) {
                  r = +o;
                  break
                }
              }
            null == r && (n.onZero = !1),
              n.onZeroAxisIndex = r
          } else
            (a = i[r]) && ls(a) && (n.onZero = !1)
        }
      }

      function ls(t) {
        return "category" === t.type || "time" === t.type || !Xy(t)
      }

      function hs(t, e) {
        var n = t.getExtent(),
          i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
          } :
          function (t) {
            return i - t + e
          },
          t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
          } :
          function (t) {
            return i - t + e
          }
      }

      function us(t, e) {
        return d(Yy, function (e) {
          var n = t.getReferringComponents(e)[0];
          return n
        })
      }

      function cs(t) {
        return "cartesian2d" === t.get("coordinateSystem")
      }

      function ds(t) {
        var e = {
          componentType: t.mainType
        };
        return e[t.mainType + "Index"] = t.componentIndex,
          e
      }

      function fs(t, e, n, i) {
        var r, o, a = Tn(n - t.rotation),
          s = i[0] > i[1],
          l = "start" === e && !s || "start" !== e && s;
        return An(a - $y / 2) ? (o = l ? "bottom" : "top",
          r = "center") : An(a - 1.5 * $y) ? (o = l ? "top" : "bottom",
          r = "center") : (o = "middle",
          r = a < 1.5 * $y && a > $y / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
          rotation: a,
          textAlign: r,
          textVerticalAlign: o
        }
      }

      function ps(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
      }

      function gs(t, e, n) {
        var i = t.get("axisLabel.showMinLabel"),
          r = t.get("axisLabel.showMaxLabel");
        e = e || [],
          n = n || [];
        var o = e[0],
          a = e[1],
          s = e[e.length - 1],
          l = e[e.length - 2],
          h = n[0],
          u = n[1],
          c = n[n.length - 1],
          d = n[n.length - 2];
        !1 === i ? (vs(o),
            vs(h)) : ms(o, a) && (i ? (vs(a),
            vs(u)) : (vs(o),
            vs(h))),
          !1 === r ? (vs(s),
            vs(c)) : ms(l, s) && (r ? (vs(l),
            vs(d)) : (vs(s),
            vs(c)))
      }

      function vs(t) {
        t && (t.ignore = !0)
      }

      function ms(t, e, n) {
        var i = t && t.getBoundingRect().clone(),
          r = e && e.getBoundingRect().clone();
        if (i && r) {
          var o = nt([]);
          return at(o, o, -t.rotation),
            i.applyTransform(rt([], o, t.getLocalTransform())),
            r.applyTransform(rt([], o, e.getLocalTransform())),
            i.intersect(r)
        }
      }

      function ys(t) {
        return "middle" === t || "center" === t
      }

      function xs(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
          for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), s = r.get("length"), l = ex(r, n.labelInterval), h = i.getTicksCoords(r.get("alignWithLabel")), u = i.scale.getTicks(), c = e.get("axisLabel.showMinLabel"), d = e.get("axisLabel.showMaxLabel"), f = [], p = [], g = t._transform, v = [], m = h.length, y = 0; y < m; y++)
            if (!tx(i, y, l, m, c, d)) {
              var x = h[y];
              f[0] = x,
                f[1] = 0,
                p[0] = x,
                p[1] = n.tickDirection * s,
                g && (j(f, f, g),
                  j(p, p, g));
              var _ = new Bg(Wi({
                anid: "tick_" + u[y],
                shape: {
                  x1: f[0],
                  y1: f[1],
                  x2: p[0],
                  y2: p[1]
                },
                style: o(a.getLineStyle(), {
                  stroke: e.get("axisLine.lineStyle.color")
                }),
                z2: 2,
                silent: !0
              }));
              t.group.add(_),
                v.push(_)
            }
          return v
        }
      }

      function _s(t, e, n) {
        var i = e.axis;
        if (S(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
          var r = e.getModel("axisLabel"),
            o = r.get("margin"),
            a = i.scale.getTicks(),
            s = e.getFormattedLabels(),
            l = (S(n.labelRotate, r.get("rotate")) || 0) * $y / 180,
            h = Jy(n.rotation, l, n.labelDirection),
            u = e.get("data"),
            d = [],
            f = ps(e),
            p = e.get("triggerEvent"),
            g = e.get("axisLabel.showMinLabel"),
            v = e.get("axisLabel.showMaxLabel");
          return c(a, function (l, c) {
              if (!tx(i, c, n.labelInterval, a.length, g, v)) {
                var m = r;
                u && u[l] && u[l].textStyle && (m = new _r(u[l].textStyle, r, e.ecModel));
                var y = m.getTextColor() || e.get("axisLine.lineStyle.color"),
                  x = [i.dataToCoord(l), n.labelOffset + n.labelDirection * o],
                  _ = i.scale.getLabel(l),
                  w = new Tg({
                    anid: "label_" + l,
                    position: x,
                    rotation: h.rotation,
                    silent: f,
                    z2: 10
                  });
                ir(w.style, m, {
                    text: s[c],
                    textAlign: m.getShallow("align", !0) || h.textAlign,
                    textVerticalAlign: m.getShallow("verticalAlign", !0) || m.getShallow("baseline", !0) || h.textVerticalAlign,
                    textFill: "function" == typeof y ? y("category" === i.type ? _ : "value" === i.type ? l + "" : l, c) : y
                  }),
                  p && (w.eventData = ds(e),
                    w.eventData.targetType = "axisLabel",
                    w.eventData.value = _),
                  t._dumbGroup.add(w),
                  w.updateTransform(),
                  d.push(w),
                  t.group.add(w),
                  w.decomposeTransform()
              }
            }),
            d
        }
      }

      function ws(t, e) {
        var n = {
          axesInfo: {},
          seriesInvolved: !1,
          coordSysAxesInfo: {},
          coordSysMap: {}
        };
        return bs(n, t, e),
          n.seriesInvolved && Ss(n, t),
          n
      }

      function bs(t, e, n) {
        var i = e.getComponent("tooltip"),
          r = e.getComponent("axisPointer"),
          o = r.get("link", !0) || [],
          a = [];
        nx(n.getCoordinateSystems(), function (n) {
          function s(i, s, l) {
            var c = l.model.getModel("axisPointer", r),
              d = c.get("show");
            if (d && ("auto" !== d || i || Ds(c))) {
              null == s && (s = c.get("triggerTooltip"));
              var f = (c = i ? Ms(l, u, r, e, i, s) : c).get("snap"),
                p = Ls(l.model),
                g = s || f || "category" === l.type,
                v = t.axesInfo[p] = {
                  key: p,
                  axis: l,
                  coordSys: n,
                  axisPointerModel: c,
                  triggerTooltip: s,
                  involveSeries: g,
                  snap: f,
                  useHandle: Ds(c),
                  seriesModels: []
                };
              h[p] = v,
                t.seriesInvolved |= g;
              var m = Is(o, l);
              if (null != m) {
                var y = a[m] || (a[m] = {
                  axesInfo: {}
                });
                y.axesInfo[p] = v,
                  y.mapper = o[m].mapper,
                  v.linkGroup = y
              }
            }
          }
          if (n.axisPointerEnabled) {
            var l = Ls(n.model),
              h = t.coordSysAxesInfo[l] = {};
            t.coordSysMap[l] = n;
            var u = n.model.getModel("tooltip", i);
            if (nx(n.getAxes(), ix(s, !1, null)),
              n.getTooltipAxes && i && u.get("show")) {
              var c = "axis" === u.get("trigger"),
                d = "cross" === u.get("axisPointer.type"),
                f = n.getTooltipAxes(u.get("axisPointer.axis"));
              (c || d) && nx(f.baseAxes, ix(s, !d || "cross", c)),
                d && nx(f.otherAxes, ix(s, "cross", !1))
            }
          }
        })
      }

      function Ms(t, n, i, r, a, s) {
        var l = n.getModel("axisPointer"),
          h = {};
        nx(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            h[t] = e(l.get(t))
          }),
          h.snap = "category" !== t.type && !!s,
          "cross" === l.get("type") && (h.type = "line");
        var u = h.label || (h.label = {});
        if (null == u.show && (u.show = !1),
          "cross" === a && (u.show = !0,
            !s)) {
          var c = h.lineStyle = l.get("crossStyle");
          c && o(u, c.textStyle)
        }
        return t.model.getModel("axisPointer", new _r(h, i, r))
      }

      function Ss(t, e) {
        e.eachSeries(function (e) {
          var n = e.coordinateSystem,
            i = e.get("tooltip.trigger", !0),
            r = e.get("tooltip.show", !0);
          n && "none" !== i && !1 !== i && "item" !== i && !1 !== r && !1 !== e.get("axisPointer.show", !0) && nx(t.coordSysAxesInfo[Ls(n.model)], function (t) {
            var i = t.axis;
            n.getAxis(i.dim) === i && (t.seriesModels.push(e),
              null == t.seriesDataCount && (t.seriesDataCount = 0),
              t.seriesDataCount += e.getData().count())
          })
        }, this)
      }

      function Is(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
          var o = t[r] || {};
          if (Ts(o[i + "AxisId"], n.id) || Ts(o[i + "AxisIndex"], n.componentIndex) || Ts(o[i + "AxisName"], n.name))
            return r
        }
      }

      function Ts(t, e) {
        return "all" === t || m(t) && s(t, e) >= 0 || t === e
      }

      function As(t) {
        var e = Cs(t);
        if (e) {
          var n = e.axisPointerModel,
            i = e.axis.scale,
            r = n.option,
            o = n.get("status"),
            a = n.get("value");
          null != a && (a = i.parse(a));
          var s = Ds(n);
          null == o && (r.status = s ? "show" : "hide");
          var l = i.getExtent().slice();
          l[0] > l[1] && l.reverse(),
            (null == a || a > l[1]) && (a = l[1]),
            a < l[0] && (a = l[0]),
            r.value = a,
            s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
      }

      function Cs(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[Ls(t)]
      }

      function ks(t) {
        var e = Cs(t);
        return e && e.axisPointerModel
      }

      function Ds(t) {
        return !!t.get("handle.show")
      }

      function Ls(t) {
        return t.type + "||" + t.id
      }

      function Ps(t, e, n, i, r, o) {
        var a = rx.getAxisPointerClass(t.axisPointerClass);
        if (a) {
          var s = ks(e);
          s ? (t._axisPointer || (t._axisPointer = new a)).render(e, s, i, o) : Os(t, i)
        }
      }

      function Os(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n),
          t._axisPointer = null
      }

      function zs(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem,
          r = e.axis,
          o = {},
          a = r.position,
          s = r.onZero ? "onZero" : a,
          l = r.dim,
          h = i.getRect(),
          u = [h.x, h.x + h.width, h.y, h.y + h.height],
          c = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
          },
          d = e.get("offset") || 0,
          f = "x" === l ? [u[2] - d, u[3] + d] : [u[0] - d, u[1] + d];
        if (r.onZero) {
          var p = i.getAxis("x" === l ? "y" : "x", r.onZeroAxisIndex),
            g = p.toGlobalCoord(p.dataToCoord(0));
          f[c.onZero] = Math.max(Math.min(g, f[1]), f[0])
        }
        o.position = ["y" === l ? f[c[s]] : u[0], "x" === l ? f[c[s]] : u[3]],
          o.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
        var v = {
          top: -1,
          bottom: 1,
          left: -1,
          right: 1
        };
        o.labelDirection = o.tickDirection = o.nameDirection = v[a],
          o.labelOffset = r.onZero ? f[c[a]] - f[c.onZero] : 0,
          e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection),
          S(n.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
        var m = e.get("axisLabel.rotate");
        return o.labelRotate = "top" === s ? -m : m,
          o.labelInterval = r.getLabelInterval(),
          o.z2 = 1,
          o
      }

      function Es(t) {
        return t.get("stack") || cx + t.seriesIndex
      }

      function Ns(t) {
        return t.dim + t.index
      }

      function Bs(t, e) {
        return Rs(d(t, function (t) {
          var e = t.getData(),
            n = t.coordinateSystem.getBaseAxis(),
            i = n.getExtent(),
            r = "category" === n.type ? n.getBandWidth() : Math.abs(i[1] - i[0]) / e.count();
          return {
            bandWidth: r,
            barWidth: xn(t.get("barWidth"), r),
            barMaxWidth: xn(t.get("barMaxWidth"), r),
            barGap: t.get("barGap"),
            barCategoryGap: t.get("barCategoryGap"),
            axisKey: Ns(n),
            stackId: Es(t)
          }
        }), e)
      }

      function Rs(t, e) {
        var n = {};
        c(t, function (t, e) {
          var i = t.axisKey,
            r = t.bandWidth,
            o = n[i] || {
              bandWidth: r,
              remainedWidth: r,
              autoWidthCount: 0,
              categoryGap: "20%",
              gap: "30%",
              stacks: {}
            },
            a = o.stacks;
          n[i] = o;
          var s = t.stackId;
          a[s] || o.autoWidthCount++,
            a[s] = a[s] || {
              width: 0,
              maxWidth: 0
            };
          var l = t.barWidth;
          l && !a[s].width && (a[s].width = l,
            l = Math.min(o.remainedWidth, l),
            o.remainedWidth -= l);
          var h = t.barMaxWidth;
          h && (a[s].maxWidth = h);
          var u = t.barGap;
          null != u && (o.gap = u);
          var c = t.barCategoryGap;
          null != c && (o.categoryGap = c)
        });
        var i = {};
        return c(n, function (t, e) {
            i[e] = {};
            var n = t.stacks,
              r = t.bandWidth,
              o = xn(t.categoryGap, r),
              a = xn(t.gap, 1),
              s = t.remainedWidth,
              l = t.autoWidthCount,
              h = (s - o) / (l + (l - 1) * a);
            h = Math.max(h, 0),
              c(n, function (t, e) {
                var n = t.maxWidth;
                n && n < h && (n = Math.min(n, s),
                  t.width && (n = Math.min(n, t.width)),
                  s -= n,
                  t.width = n,
                  l--)
              }),
              h = (s - o) / (l + (l - 1) * a),
              h = Math.max(h, 0);
            var u, d = 0;
            c(n, function (t, e) {
                t.width || (t.width = h),
                  u = t,
                  d += t.width * (1 + a)
              }),
              u && (d -= u.width * a);
            var f = -d / 2;
            c(n, function (t, n) {
              i[e][n] = i[e][n] || {
                  offset: f,
                  width: t.width
                },
                f += t.width * (1 + a)
            })
          }),
          i
      }

      function Vs(t, e, n) {
        var i = Bs(p(e.getSeriesByType(t), function (t) {
            return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
          })),
          r = {},
          o = {};
        e.eachSeriesByType(t, function (t) {
          if ("cartesian2d" === t.coordinateSystem.type) {
            var e = t.getData(),
              n = t.coordinateSystem,
              a = n.getBaseAxis(),
              s = Es(t),
              l = i[Ns(a)][s],
              h = l.offset,
              u = l.width,
              c = n.getOtherAxis(a),
              d = t.get("barMinHeight") || 0,
              f = a.onZero ? c.toGlobalCoord(c.dataToCoord(0)) : c.getGlobalExtent()[0],
              p = [t.coordDimToDataDim("x")[0], t.coordDimToDataDim("y")[0]],
              g = e.mapArray(p, function (t, e) {
                return n.dataToPoint([t, e])
              }, !0);
            r[s] = r[s] || [],
              o[s] = o[s] || [],
              e.setLayout({
                offset: h,
                size: u
              }),
              e.each(t.coordDimToDataDim(c.dim)[0], function (t, n) {
                if (!isNaN(t)) {
                  r[s][n] || (r[s][n] = {
                      p: f,
                      n: f
                    },
                    o[s][n] = {
                      p: f,
                      n: f
                    });
                  var i, a, l, p, v = t >= 0 ? "p" : "n",
                    m = g[n],
                    y = r[s][n][v],
                    x = o[s][n][v];
                  c.isHorizontal() ? (i = y,
                      a = m[1] + h,
                      l = m[0] - x,
                      p = u,
                      o[s][n][v] += l,
                      Math.abs(l) < d && (l = (l < 0 ? -1 : 1) * d),
                      r[s][n][v] += l) : (i = m[0] + h,
                      a = y,
                      l = u,
                      p = m[1] - x,
                      o[s][n][v] += p,
                      Math.abs(p) < d && (p = (p <= 0 ? -1 : 1) * d),
                      r[s][n][v] += p),
                    e.setItemLayout(n, {
                      x: i,
                      y: a,
                      width: l,
                      height: p
                    })
                }
              }, !0)
          }
        }, this)
      }

      function Ws(t, e, n, i, r, o, a) {
        nr(t, e, n.getModel("label.normal"), n.getModel("label.emphasis"), {
            labelFetcher: r,
            labelDataIndex: o,
            defaultText: r.getRawValue(o),
            isRectText: !0,
            autoColor: i
          }),
          Gs(t),
          Gs(e)
      }

      function Gs(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
      }

      function Hs(t, e, n) {
        n.style.text = null,
          dr(n, {
            shape: {
              width: 0
            }
          }, e, t, function () {
            n.parent && n.parent.remove(n)
          })
      }

      function Fs(t, e, n) {
        n.style.text = null,
          dr(n, {
            shape: {
              r: n.shape.r0
            }
          }, e, t, function () {
            n.parent && n.parent.remove(n)
          })
      }

      function Zs(t, e, n, i, r, a, s, l) {
        var h = e.getItemVisual(n, "color"),
          u = e.getItemVisual(n, "opacity"),
          c = i.getModel("itemStyle.normal"),
          d = i.getModel("itemStyle.emphasis").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0),
          t.useStyle(o({
            fill: h,
            opacity: u
          }, c.getBarItemStyle()));
        var f = i.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = s ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || Ws(t.style, d, i, h, a, n, p),
          er(t, d)
      }

      function Us(t, e) {
        var n = t.get(px) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
      }

      function Xs(t, e, n, i) {
        var r = e.getData(),
          o = this.dataIndex,
          a = r.getName(o),
          s = e.get("selectedOffset");
        i.dispatchAction({
            type: "pieToggleSelect",
            from: t,
            name: a,
            seriesId: e.id
          }),
          r.each(function (t) {
            js(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
          })
      }

      function js(t, e, n, i, r) {
        var o = (e.startAngle + e.endAngle) / 2,
          a = Math.cos(o),
          s = Math.sin(o),
          l = n ? i : 0,
          h = [a * l, s * l];
        r ? t.animate().when(200, {
          position: h
        }).start("bounceOut") : t.attr("position", h)
      }

      function qs(t, e) {
        function n() {
          o.ignore = o.hoverIgnore,
            a.ignore = a.hoverIgnore
        }

        function i() {
          o.ignore = o.normalIgnore,
            a.ignore = a.normalIgnore
        }
        yf.call(this);
        var r = new Dg({
            z2: 2
          }),
          o = new Eg,
          a = new Tg;
        this.add(r),
          this.add(o),
          this.add(a),
          this.updateData(t, e, !0),
          this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
      }

      function Ys(t, e, n, i, r, o, a) {
        function s(e, n) {
          for (var i = e; i >= 0 && (t[i].y -= n,
              !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--)
          ;
        }

        function l(t, e, n, i, r, o) {
          for (var a = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)
            if ("center" !== t[s].position) {
              var h = Math.abs(t[s].y - i),
                u = t[s].len,
                c = t[s].len2,
                d = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
              e && d >= a && (d = a - 10),
                !e && d <= a && (d = a + 10),
                t[s].x = n + d * o,
                a = d
            }
        }
        t.sort(function (t, e) {
          return t.y - e.y
        });
        for (var h, u = 0, c = t.length, d = [], f = [], p = 0; p < c; p++)
          (h = t[p].y - u) < 0 && function (e, n, i, r) {
            for (var o = e; o < n; o++)
              if (t[o].y += i,
                o > e && o + 1 < n && t[o + 1].y > t[o].y + t[o].height)
                return void s(o, i / 2);
            s(n - 1, i / 2)
          }(p, c, -h),
          u = t[p].y + t[p].height;
        a - u < 0 && s(c - 1, u - a);
        for (p = 0; p < c; p++)
          t[p].y >= n ? f.push(t[p]) : d.push(t[p]);
        l(d, !1, e, n, i, r),
          l(f, !0, e, n, i, r)
      }

      function $s(t, e, n, i, r, o) {
        for (var a = [], s = [], l = 0; l < t.length; l++)
          t[l].x < e ? a.push(t[l]) : s.push(t[l]);
        Ys(s, e, n, i, 1, r, o),
          Ys(a, e, n, i, -1, r, o);
        for (l = 0; l < t.length; l++) {
          var h = t[l].linePoints;
          if (h) {
            var u = h[1][0] - h[2][0];
            t[l].x < e ? h[2][0] = t[l].x + 3 : h[2][0] = t[l].x - 3,
              h[1][1] = h[2][1] = t[l].y,
              h[1][0] = h[2][0] + u
          }
        }
      }

      function Ks() {
        this.group = new yf,
          this._symbolEl = new Mx({})
      }

      function Qs(t, e, n, i) {
        var r = n.type,
          o = Yg[r.charAt(0).toUpperCase() + r.slice(1)],
          a = new o(n);
        e.add(a),
          i.set(t, a),
          a.__ecGraphicId = t
      }

      function Js(t, e) {
        var n = t && t.parent;
        n && ("group" === t.type && t.traverse(function (t) {
            Js(t, e)
          }),
          e.removeKey(t.__ecGraphicId),
          n.remove(t))
      }

      function tl(t) {
        return t = r({}, t),
          c(["id", "parentId", "$action", "hv", "bounding"].concat(hv), function (e) {
            delete t[e]
          }),
          t
      }

      function el(t, e) {
        var n;
        return c(e, function (e) {
            null != t[e] && "auto" !== t[e] && (n = !0)
          }),
          n
      }

      function nl(t, e) {
        var n = t.exist;
        if (e.id = t.keyInfo.id,
          !e.type && n && (e.type = n.type),
          null == e.parentId) {
          var i = e.parentOption;
          i ? e.parentId = i.id : n && (e.parentId = n.parentId)
        }
        e.parentOption = null
      }

      function il(t, e, i) {
        var o = r({}, i),
          a = t[e],
          s = i.$action || "merge";
        if ("merge" === s)
          if (a) {
            n(a, o, !0),
              Gr(a, o, {
                ignoreSize: !0
              }),
              Fr(i, a)
          } else
            t[e] = o;
        else
          "replace" === s ? t[e] = o : "remove" === s && a && (t[e] = null)
      }

      function rl(t, e) {
        t && (t.hv = e.hv = [el(e, ["left", "right"]), el(e, ["top", "bottom"])],
          "group" === t.type && (null == t.width && (t.width = e.width = 0),
            null == t.height && (t.height = e.height = 0)))
      }

      function ol(t, e, n, i, o) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e))
          if (t.involveSeries) {
            var s = al(e, t),
              l = s.payloadBatch,
              h = s.snapToValue;
            l[0] && null == o.seriesIndex && r(o, l[0]),
              !i && t.snap && a.containData(h) && null != h && (e = h),
              n.showPointer(t, e, l, o),
              n.showTooltip(t, s, h)
          } else
            n.showPointer(t, e)
      }

      function al(t, e) {
        var n = e.axis,
          i = n.dim,
          r = t,
          o = [],
          a = Number.MAX_VALUE,
          s = -1;
        return Ax(e.seriesModels, function (e, l) {
          var h, u, c = e.coordDimToDataDim(i);
          if (e.getAxisTooltipData) {
            var d = e.getAxisTooltipData(c, t, n);
            u = d.dataIndices,
              h = d.nestestValue
          } else {
            if (!(u = e.getData().indicesOfNearest(c[0], t, !1, "category" === n.type ? .5 : null)).length)
              return;
            h = e.getData().get(c[0], u[0])
          }
          if (null != h && isFinite(h)) {
            var f = t - h,
              p = Math.abs(f);
            p <= a && ((p < a || f >= 0 && s < 0) && (a = p,
                s = f,
                r = h,
                o.length = 0),
              Ax(u, function (t) {
                o.push({
                  seriesIndex: e.seriesIndex,
                  dataIndexInside: t,
                  dataIndex: e.getData().getRawIndex(t)
                })
              }))
          }
        }), {
          payloadBatch: o,
          snapToValue: r
        }
      }

      function sl(t, e, n, i) {
        t[e.key] = {
          value: n,
          payloadBatch: i
        }
      }

      function ll(t, e, n, i) {
        var r = n.payloadBatch,
          o = e.axis,
          a = o.model,
          s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
          var l = e.coordSys.model,
            h = Ls(l),
            u = t.map[h];
          u || (u = t.map[h] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
              },
              t.list.push(u)),
            u.dataByAxis.push({
              axisDim: o.dim,
              axisIndex: a.componentIndex,
              axisType: a.type,
              axisId: a.id,
              value: i,
              valueLabelOpt: {
                precision: s.get("label.precision"),
                formatter: s.get("label.formatter")
              },
              seriesDataIndices: r.slice()
            })
        }
      }

      function hl(t, e, n) {
        var i = n.axesInfo = [];
        Ax(e, function (e, n) {
          var r = e.axisPointerModel.option,
            o = t[n];
          o ? (!e.useHandle && (r.status = "show"),
              r.value = o.value,
              r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"),
            "show" === r.status && i.push({
              axisDim: e.axis.dim,
              axisIndex: e.axis.model.componentIndex,
              value: r.value
            })
        })
      }

      function ul(t, e, n, i) {
        if (!pl(e) && t.list.length) {
          var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
          i({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: n.tooltipOption,
            position: n.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
          })
        } else
          i({
            type: "hideTip"
          })
      }

      function cl(t, e, n) {
        var i = n.getZr(),
          r = kx(i).axisPointerLastHighlights || {},
          o = kx(i).axisPointerLastHighlights = {};
        Ax(t, function (t, e) {
          var n = t.axisPointerModel.option;
          "show" === n.status && Ax(n.seriesDataIndices, function (t) {
            var e = t.seriesIndex + " | " + t.dataIndex;
            o[e] = t
          })
        });
        var a = [],
          s = [];
        c(r, function (t, e) {
            !o[e] && s.push(t)
          }),
          c(o, function (t, e) {
            !r[e] && a.push(t)
          }),
          s.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: s
          }),
          a.length && n.dispatchAction({
            type: "highlight",
            escapeConnect: !0,
            batch: a
          })
      }

      function dl(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
          var i = t[n];
          if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex)
            return i
        }
      }

      function fl(t) {
        var e = t.axis.model,
          n = {},
          i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex,
          n.axisName = n[i + "AxisName"] = e.name,
          n.axisId = n[i + "AxisId"] = e.id,
          n
      }

      function pl(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
      }

      function gl(t, e, n) {
        if (!vd.node) {
          var i = e.getZr();
          Dx(i).records || (Dx(i).records = {}),
            vl(i, e),
            (Dx(i).records[t] || (Dx(i).records[t] = {})).handler = n
        }
      }

      function vl(t, e) {
        function n(n, i) {
          t.on(n, function (n) {
            var r = _l(e);
            Lx(Dx(t).records, function (t) {
                t && i(t, n, r.dispatchAction)
              }),
              ml(r.pendings, e)
          })
        }
        Dx(t).initialized || (Dx(t).initialized = !0,
          n("click", v(xl, "click")),
          n("mousemove", v(xl, "mousemove")),
          n("globalout", yl))
      }

      function ml(t, e) {
        var n, i = t.showTip.length,
          r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]),
          n && (n.dispatchAction = null,
            e.dispatchAction(n))
      }

      function yl(t, e, n) {
        t.handler("leave", null, n)
      }

      function xl(t, e, n, i) {
        e.handler(t, n, i)
      }

      function _l(t) {
        var e = {
            showTip: [],
            hideTip: []
          },
          n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n,
              t.dispatchAction(i))
          };
        return {
          dispatchAction: n,
          pendings: e
        }
      }

      function wl(t, e) {
        if (!vd.node) {
          var n = e.getZr();
          (Dx(n).records || {})[t] && (Dx(n).records[t] = null)
        }
      }

      function bl() {}

      function Ml(t, e, n, i) {
        Sl(Ox(n).lastProp, i) || (Ox(n).lastProp = i,
          e ? dr(n, i, t) : (n.stopAnimation(),
            n.attr(i)))
      }

      function Sl(t, e) {
        if (_(t) && _(e)) {
          var n = !0;
          return c(e, function (e, i) {
              n = n && Sl(t[i], e)
            }),
            !!n
        }
        return t === e
      }

      function Il(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
      }

      function Tl(t) {
        return {
          position: t.position.slice(),
          rotation: t.rotation || 0
        }
      }

      function Al(t, e, n) {
        var i = e.get("z"),
          r = e.get("zlevel");
        t && t.traverse(function (t) {
          "group" !== t.type && (null != i && (t.z = i),
            null != r && (t.zlevel = r),
            t.silent = n)
        })
      }

      function Cl(t) {
        var e, n = t.get("type"),
          i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle()).fill = null : "shadow" === n && ((e = i.getAreaStyle()).stroke = null),
          e
      }

      function kl(t, e, n, i, r) {
        var o = Ll(n.get("value"), e.axis, e.ecModel, n.get("seriesDataIndices"), {
            precision: n.get("label.precision"),
            formatter: n.get("label.formatter")
          }),
          a = n.getModel("label"),
          s = dp(a.get("padding") || 0),
          l = a.getFont(),
          h = le(o, l),
          u = r.position,
          c = h.width + s[1] + s[3],
          d = h.height + s[0] + s[2],
          f = r.align;
        "right" === f && (u[0] -= c),
          "center" === f && (u[0] -= c / 2);
        var p = r.verticalAlign;
        "bottom" === p && (u[1] -= d),
          "middle" === p && (u[1] -= d / 2),
          Dl(u, c, d, i);
        var g = a.get("backgroundColor");
        g && "auto" !== g || (g = e.get("axisLine.lineStyle.color")),
          t.label = {
            shape: {
              x: 0,
              y: 0,
              width: c,
              height: d,
              r: a.get("borderRadius")
            },
            position: u.slice(),
            style: {
              text: o,
              textFont: l,
              textFill: a.getTextColor(),
              textPosition: "inside",
              fill: g,
              stroke: a.get("borderColor") || "transparent",
              lineWidth: a.get("borderWidth") || 0,
              shadowBlur: a.get("shadowBlur"),
              shadowColor: a.get("shadowColor"),
              shadowOffsetX: a.get("shadowOffsetX"),
              shadowOffsetY: a.get("shadowOffsetY")
            },
            z2: 10
          }
      }

      function Dl(t, e, n, i) {
        var r = i.getWidth(),
          o = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e,
          t[1] = Math.min(t[1] + n, o) - n,
          t[0] = Math.max(t[0], 0),
          t[1] = Math.max(t[1], 0)
      }

      function Ll(t, e, n, i, r) {
        var o = e.scale.getLabel(t, {
            precision: r.precision
          }),
          a = r.formatter;
        if (a) {
          var s = {
            value: Ta(e, t),
            seriesData: []
          };
          c(i, function (t) {
              var e = n.getSeriesByIndex(t.seriesIndex),
                i = t.dataIndexInside,
                r = e && e.getDataParams(i);
              r && s.seriesData.push(r)
            }),
            x(a) ? o = a.replace("{value}", o) : y(a) && (o = a(s))
        }
        return o
      }

      function Pl(t, e, n) {
        var i = et();
        return at(i, i, n.rotation),
          ot(i, i, n.position),
          gr([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
      }

      function Ol(t, e, n, i, r, o) {
        var a = Ky.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get("label.margin"),
          kl(e, i, r, o, {
            position: Pl(i.axis, t, n),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign
          })
      }

      function zl(t, e, n) {
        return n = n || 0, {
          x1: t[n],
          y1: t[1 - n],
          x2: e[n],
          y2: e[1 - n]
        }
      }

      function El(t, e, n) {
        return n = n || 0, {
          x: t[n],
          y: t[1 - n],
          width: e[n],
          height: e[1 - n]
        }
      }

      function Nl(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index,
          t.getCartesian(n)
      }

      function Bl(t) {
        return "x" === t.dim ? 0 : 1
      }

      function Rl(t) {
        var e = "left " + t + "s cubic-bezier(0.23, 1, 0.32, 1),top " + t + "s cubic-bezier(0.23, 1, 0.32, 1)";
        return d(Wx, function (t) {
          return t + "transition:" + e
        }).join(";")
      }

      function Vl(t) {
        var e = [],
          n = t.get("fontSize"),
          i = t.getTextColor();
        return i && e.push("color:" + i),
          e.push("font:" + t.getFont()),
          n && e.push("line-height:" + Math.round(3 * n / 2) + "px"),
          Rx(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
          }),
          e.join(";")
      }

      function Wl(t) {
        var e = [],
          n = t.get("transitionDuration"),
          i = t.get("backgroundColor"),
          r = t.getModel("textStyle"),
          o = t.get("padding");
        return n && e.push(Rl(n)),
          i && (vd.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + It(i)),
            e.push("filter:alpha(opacity=70)"))),
          Rx(["width", "color", "radius"], function (n) {
            var i = "border-" + n,
              r = Vx(i),
              o = t.get(r);
            null != o && e.push(i + ":" + o + ("color" === n ? "" : "px"))
          }),
          e.push(Vl(r)),
          null != o && e.push("padding:" + dp(o).join("px ") + "px"),
          e.join(";") + ";"
      }

      function Gl(t, e) {
        var n = document.createElement("div"),
          i = this._zr = e.getZr();
        this.el = n,
          this._x = e.getWidth() / 2,
          this._y = e.getHeight() / 2,
          t.appendChild(n),
          this._container = t,
          this._show = !1,
          this._hideTimeout;
        var r = this;
        n.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout),
                r._show = !0),
              r._inContent = !0
          },
          n.onmousemove = function (e) {
            if (e = e || window.event,
              !r._enterable) {
              var n = i.handler;
              en(t, e, !0),
                n.dispatch("mousemove", e)
            }
          },
          n.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay),
              r._inContent = !1
          }
      }

      function Hl(t) {
        for (var e = t.pop(); t.length;) {
          var n = t.pop();
          n && (n instanceof _r && (n = n.get("tooltip", !0)),
            "string" == typeof n && (n = {
              formatter: n
            }),
            e = new _r(n, e, e.ecModel))
        }
        return e
      }

      function Fl(t, e) {
        return t.dispatchAction || g(e.dispatchAction, e)
      }

      function Zl(t, e, n, i, r, o, a) {
        var s = Xl(n),
          l = s.width,
          h = s.height;
        return null != o && (t + l + o > i ? t -= l + o : t += o),
          null != a && (e + h + a > r ? e -= h + a : e += a),
          [t, e]
      }

      function Ul(t, e, n, i, r) {
        var o = Xl(n),
          a = o.width,
          s = o.height;
        return t = Math.min(t + a, i) - a,
          e = Math.min(e + s, r) - s,
          t = Math.max(t, 0),
          e = Math.max(e, 0),
          [t, e]
      }

      function Xl(t) {
        var e = t.clientWidth,
          n = t.clientHeight;
        if (document.defaultView && document.defaultView.getComputedStyle) {
          var i = document.defaultView.getComputedStyle(t);
          i && (e += parseInt(i.paddingLeft, 10) + parseInt(i.paddingRight, 10) + parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10),
            n += parseInt(i.paddingTop, 10) + parseInt(i.paddingBottom, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
        }
        return {
          width: e,
          height: n
        }
      }

      function jl(t, e, n) {
        var i = n[0],
          r = n[1],
          o = 0,
          a = 0,
          s = e.width,
          l = e.height;
        switch (t) {
          case "inside":
            o = e.x + s / 2 - i / 2,
              a = e.y + l / 2 - r / 2;
            break;
          case "top":
            o = e.x + s / 2 - i / 2,
              a = e.y - r - 5;
            break;
          case "bottom":
            o = e.x + s / 2 - i / 2,
              a = e.y + l + 5;
            break;
          case "left":
            o = e.x - i - 5,
              a = e.y + l / 2 - r / 2;
            break;
          case "right":
            o = e.x + s + 5,
              a = e.y + l / 2 - r / 2
        }
        return [o, a]
      }

      function ql(t) {
        return "center" === t || "middle" === t
      }

      function Yl(t, e, n) {
        var i, r = {},
          o = "toggleSelected" === t;
        return n.eachComponent("legend", function (n) {
          o && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name),
              i = n.isSelected(e.name)),
            c(n.getData(), function (t) {
              var e = t.get("name");
              if ("\n" !== e && "" !== e) {
                var i = n.isSelected(e);
                r.hasOwnProperty(e) ? r[e] = r[e] && i : r[e] = i
              }
            })
        }), {
          name: e.name,
          selected: r
        }
      }

      function $l(t, e, n) {
        var i = e.getBoxLayoutParams(),
          r = e.get("padding"),
          o = {
            width: n.getWidth(),
            height: n.getHeight()
          },
          a = Vr(i, o, r);
        cv(e.get("orient"), t, e.get("itemGap"), a.width, a.height),
          Wr(t, i, o, r)
      }

      function Kl(t, e) {
        var n = dp(e.get("padding")),
          i = e.getItemStyle(["color", "opacity"]);
        return i.fill = e.get("backgroundColor"),
          t = new Ng({
            shape: {
              x: t.x - n[3],
              y: t.y - n[0],
              width: t.width + n[1] + n[3],
              height: t.height + n[0] + n[2],
              r: e.get("borderRadius")
            },
            style: i,
            silent: !0,
            z2: -1
          })
      }

      function Ql(t, e) {
        e.dispatchAction({
          type: "legendToggleSelect",
          name: t
        })
      }

      function Jl(t, e, n) {
        var i = n.getZr().storage.getDisplayList()[0];
        i && i.useHoverLayer || t.get("legendHoverLink") && n.dispatchAction({
          type: "highlight",
          seriesName: t.name,
          name: e
        })
      }

      function th(t, e, n) {
        var i = n.getZr().storage.getDisplayList()[0];
        i && i.useHoverLayer || t.get("legendHoverLink") && n.dispatchAction({
          type: "downplay",
          seriesName: t.name,
          name: e
        })
      }

      function eh(t, e, n) {
        var i = [1, 1];
        i[t.getOrient().index] = 0,
          Gr(e, n, {
            type: "box",
            ignoreSize: i
          })
      }

      function nh(t) {
        Sr(t.label, ["show"])
      }

      function ih(t) {
        return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
      }

      function rh(t) {
        return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
      }

      function oh(t, e, n) {
        var i = -1;
        do {
          i = Math.max(bn(t.get(e, n)), i),
            t = t.stackedOn
        } while (t);
        return i
      }

      function ah(t, e, n, i, r, o) {
        var a = [],
          s = ch(e, i, t),
          l = e.indicesOfNearest(i, s, !0)[0];
        a[r] = e.get(n, l, !0),
          a[o] = e.get(i, l, !0);
        var h = oh(e, i, l);
        return (h = Math.min(h, 20)) >= 0 && (a[o] = +a[o].toFixed(h)),
          a
      }

      function sh(t, n) {
        var i = t.getData(),
          r = t.coordinateSystem;
        if (n && !rh(n) && !m(n.coord) && r) {
          var o = r.dimensions,
            a = lh(n, i, r, t);
          if ((n = e(n)).type && a_[n.type] && a.baseAxis && a.valueAxis) {
            var s = r_(o, a.baseAxis.dim),
              l = r_(o, a.valueAxis.dim);
            n.coord = a_[n.type](i, a.baseDataDim, a.valueDataDim, s, l),
              n.value = n.coord[l]
          } else {
            for (var h = [null != n.xAxis ? n.xAxis : n.radiusAxis, null != n.yAxis ? n.yAxis : n.angleAxis], u = 0; u < 2; u++)
              if (a_[h[u]]) {
                var c = t.coordDimToDataDim(o[u])[0];
                h[u] = ch(i, c, h[u])
              }
            n.coord = h
          }
        }
        return n
      }

      function lh(t, e, n, i) {
        var r = {};
        return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim,
            r.valueAxis = n.getAxis(i.dataDimToCoordDim(r.valueDataDim)),
            r.baseAxis = n.getOtherAxis(r.valueAxis),
            r.baseDataDim = i.coordDimToDataDim(r.baseAxis.dim)[0]) : (r.baseAxis = i.getBaseAxis(),
            r.valueAxis = n.getOtherAxis(r.baseAxis),
            r.baseDataDim = i.coordDimToDataDim(r.baseAxis.dim)[0],
            r.valueDataDim = i.coordDimToDataDim(r.valueAxis.dim)[0]),
          r
      }

      function hh(t, e) {
        return !(t && t.containData && e.coord && !ih(e)) || t.containData(e.coord)
      }

      function uh(t, e, n, i) {
        return i < 2 ? t.coord && t.coord[i] : t.value
      }

      function ch(t, e, n) {
        if ("average" === n) {
          var i = 0,
            r = 0;
          return t.each(e, function (t, e) {
              isNaN(t) || (i += t,
                r++)
            }, !0),
            i / r
        }
        return t.getDataExtent(e, !0)["max" === n ? 1 : 0]
      }

      function dh(t, e, n) {
        var i = e.coordinateSystem;
        t.each(function (r) {
          var o, a = t.getItemModel(r),
            s = xn(a.get("x"), n.getWidth()),
            l = xn(a.get("y"), n.getHeight());
          if (isNaN(s) || isNaN(l)) {
            if (e.getMarkerPosition)
              o = e.getMarkerPosition(t.getValues(t.dimensions, r));
            else if (i) {
              var h = t.get(i.dimensions[0], r),
                u = t.get(i.dimensions[1], r);
              o = i.dataToPoint([h, u])
            }
          } else
            o = [s, l];
          isNaN(s) || (o[0] = s),
            isNaN(l) || (o[1] = l),
            t.setItemLayout(r, o)
        })
      }

      function fh(t, e, n) {
        var i;
        i = t ? d(t && t.dimensions, function (t) {
          var n = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
          return n.name = t,
            n
        }) : [{
          name: "value",
          type: "float"
        }];
        var r = new Cm(i, n),
          o = d(n.get("data"), v(sh, e));
        return t && (o = p(o, v(hh, t))),
          r.initData(o, null, t ? uh : function (t) {
            return t.value
          }),
          r
      }

      function ph(t) {
        return isNaN(+t.cpx1) || isNaN(+t.cpy1)
      }

      function gh(t) {
        return "_" + t + "Type"
      }

      function vh(t, e, n) {
        var i = e.getItemVisual(n, "color"),
          r = e.getItemVisual(n, t),
          o = e.getItemVisual(n, t + "Size");
        if (r && "none" !== r) {
          m(o) || (o = [o, o]);
          var a = ka(r, -o[0] / 2, -o[1] / 2, o[0], o[1], i);
          return a.name = t,
            a
        }
      }

      function mh(t) {
        var e = new u_({
          name: "line"
        });
        return yh(e.shape, t),
          e
      }

      function yh(t, e) {
        var n = e[0],
          i = e[1],
          r = e[2];
        t.x1 = n[0],
          t.y1 = n[1],
          t.x2 = i[0],
          t.y2 = i[1],
          t.percent = 1,
          r ? (t.cpx1 = r[0],
            t.cpy1 = r[1]) : (t.cpx1 = NaN,
            t.cpy1 = NaN)
      }

      function xh(t, e, n) {
        yf.call(this),
          this._createLine(t, e, n)
      }

      function _h(t) {
        return isNaN(t[0]) || isNaN(t[1])
      }

      function wh(t) {
        return !_h(t[0]) && !_h(t[1])
      }

      function bh(t) {
        this._ctor = t || xh,
          this.group = new yf
      }

      function Mh(t) {
        return !isNaN(t) && !isFinite(t)
      }

      function Sh(t, e, n, i) {
        var r = 1 - t,
          o = i.dimensions[t];
        return Mh(e[r]) && Mh(n[r]) && e[t] === n[t] && i.getAxis(o).containData(e[t])
      }

      function Ih(t, e) {
        if ("cartesian2d" === t.type) {
          var n = e[0].coord,
            i = e[1].coord;
          if (n && i && (Sh(1, n, i, t) || Sh(0, n, i, t)))
            return !0
        }
        return hh(t, e[0]) && hh(t, e[1])
      }

      function Th(t, e, n, i, r) {
        var o, a = i.coordinateSystem,
          s = t.getItemModel(e),
          l = xn(s.get("x"), r.getWidth()),
          h = xn(s.get("y"), r.getHeight());
        if (isNaN(l) || isNaN(h)) {
          if (i.getMarkerPosition)
            o = i.getMarkerPosition(t.getValues(t.dimensions, e));
          else {
            var u = a.dimensions,
              c = t.get(u[0], e),
              d = t.get(u[1], e);
            o = a.dataToPoint([c, d])
          }
          if ("cartesian2d" === a.type) {
            var f = a.getAxis("x"),
              p = a.getAxis("y"),
              u = a.dimensions;
            Mh(t.get(u[0], e)) ? o[0] = f.toGlobalCoord(f.getExtent()[n ? 0 : 1]) : Mh(t.get(u[1], e)) && (o[1] = p.toGlobalCoord(p.getExtent()[n ? 0 : 1]))
          }
          isNaN(l) || (o[0] = l),
            isNaN(h) || (o[1] = h)
        } else
          o = [l, h];
        t.setItemLayout(e, o)
      }

      function Ah(t, e, n) {
        var i;
        i = t ? d(t && t.dimensions, function (t) {
          var n = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
          return n.name = t,
            n
        }) : [{
          name: "value",
          type: "float"
        }];
        var r = new Cm(i, n),
          o = new Cm(i, n),
          a = new Cm([], n),
          s = d(n.get("data"), v(p_, e, t, n));
        t && (s = p(s, v(Ih, t)));
        var l = t ? uh : function (t) {
          return t.value
        };
        return r.initData(d(s, function (t) {
            return t[0]
          }), null, l),
          o.initData(d(s, function (t) {
            return t[1]
          }), null, l),
          a.initData(d(s, function (t) {
            return t[2]
          })),
          a.hasItemOption = !0, {
            from: r,
            to: o,
            line: a
          }
      }

      function Ch(t) {
        return !isNaN(t) && !isFinite(t)
      }

      function kh(t, e, n, i) {
        var r = 1 - t;
        return Ch(e[r]) && Ch(n[r])
      }

      function Dh(t, e) {
        var n = e.coord[0],
          i = e.coord[1];
        return !("cartesian2d" !== t.type || !n || !i || !kh(1, n, i, t) && !kh(0, n, i, t)) || (hh(t, {
          coord: n,
          x: e.x0,
          y: e.y0
        }) || hh(t, {
          coord: i,
          x: e.x1,
          y: e.y1
        }))
      }

      function Lh(t, e, n, i, r) {
        var o, a = i.coordinateSystem,
          s = t.getItemModel(e),
          l = xn(s.get(n[0]), r.getWidth()),
          h = xn(s.get(n[1]), r.getHeight());
        if (isNaN(l) || isNaN(h)) {
          if (i.getMarkerPosition)
            o = i.getMarkerPosition(t.getValues(n, e));
          else {
            var u = t.get(n[0], e),
              c = t.get(n[1], e);
            o = a.dataToPoint([u, c], !0)
          }
          if ("cartesian2d" === a.type) {
            var d = a.getAxis("x"),
              f = a.getAxis("y"),
              u = t.get(n[0], e),
              c = t.get(n[1], e);
            Ch(u) ? o[0] = d.toGlobalCoord(d.getExtent()["x0" === n[0] ? 0 : 1]) : Ch(c) && (o[1] = f.toGlobalCoord(f.getExtent()["y0" === n[1] ? 0 : 1]))
          }
          isNaN(l) || (o[0] = l),
            isNaN(h) || (o[1] = h)
        } else
          o = [l, h];
        return o
      }

      function Ph(t, e, n) {
        var i, r, o = ["x0", "y0", "x1", "y1"];
        t ? (i = d(t && t.dimensions, function (t) {
            var n = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
            return n.name = t,
              n
          }),
          r = new Cm(d(o, function (t, e) {
            return {
              name: t,
              type: i[e % 2].type
            }
          }), n)) : r = new Cm(i = [{
          name: "value",
          type: "float"
        }], n);
        var a = d(n.get("data"), v(g_, e, t, n));
        t && (a = p(a, v(Dh, t)));
        var s = t ? function (t, e, n, i) {
            return t.coord[Math.floor(i / 2)][i % 2]
          } :
          function (t) {
            return t.value
          };
        return r.initData(a, null, s),
          r.hasItemOption = !0,
          r
      }

      function Oh(t) {
        return s(m_, t) >= 0
      }

      function zh(t, e, n) {
        function i(t, e) {
          return s(e.nodes, t) >= 0
        }

        function r(t, i) {
          var r = !1;
          return e(function (e) {
              c(n(t, e) || [], function (t) {
                i.records[e.name][t] && (r = !0)
              })
            }),
            r
        }

        function o(t, i) {
          i.nodes.push(t),
            e(function (e) {
              c(n(t, e) || [], function (t) {
                i.records[e.name][t] = !0
              })
            })
        }
        return function (n) {
          var a = {
            nodes: [],
            records: {}
          };
          if (e(function (t) {
              a.records[t.name] = {}
            }),
            !n)
            return a;
          o(n, a);
          var s;
          do {
            s = !1,
              t(function (t) {
                !i(t, a) && r(t, a) && (o(t, a),
                  s = !0)
              })
          } while (s);
          return a
        }
      }

      function Eh(t, e, n) {
        var i = [1 / 0, -1 / 0];
        return x_(n, function (t) {
            var n = t.getData();
            n && x_(t.coordDimToDataDim(e), function (t) {
              var e = n.getDataExtent(t);
              e[0] < i[0] && (i[0] = e[0]),
                e[1] > i[1] && (i[1] = e[1])
            })
          }),
          i[1] < i[0] && (i = [NaN, NaN]),
          Nh(t, i),
          i
      }

      function Nh(t, e) {
        var n = t.getAxisModel(),
          i = n.getMin(!0),
          r = "category" === n.get("type"),
          o = r && (n.get("data") || []).length;
        null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = o > 0 ? 0 : NaN);
        var a = n.getMax(!0);
        return null != a && "dataMax" !== a && "function" != typeof a ? e[1] = a : r && (e[1] = o > 0 ? o - 1 : NaN),
          n.get("scale", !0) || (e[0] > 0 && (e[0] = 0),
            e[1] < 0 && (e[1] = 0)),
          e
      }

      function Bh(t, e) {
        var n = t.getAxisModel(),
          i = t._percentWindow,
          r = t._valueWindow;
        if (i) {
          var o = Sn(r, [0, 500]);
          o = Math.min(o, 20);
          var a = e || 0 === i[0] && 100 === i[1];
          n.setRange(a ? null : +r[0].toFixed(o), a ? null : +r[1].toFixed(o))
        }
      }

      function Rh(t) {
        var e = t._minMaxSpan = {},
          n = t._dataZoomModel;
        x_(["min", "max"], function (i) {
          e[i + "Span"] = n.get(i + "Span");
          var r = n.get(i + "ValueSpan");
          if (null != r && (e[i + "ValueSpan"] = r,
              null != (r = t.getAxisModel().axis.scale.parse(r)))) {
            var o = t._dataExtent;
            e[i + "Span"] = yn(o[0] + r, o, [0, 100], !0)
          }
        })
      }

      function Vh(t) {
        var e = {};
        return b_(["start", "end", "startValue", "endValue", "throttle"], function (n) {
            t.hasOwnProperty(n) && (e[n] = t[n])
          }),
          e
      }

      function Wh(t, e) {
        var n = t._rangePropMode,
          i = t.get("rangeMode");
        b_([
          ["start", "startValue"],
          ["end", "endValue"]
        ], function (t, r) {
          var o = null != e[t[0]],
            a = null != e[t[1]];
          o && !a ? n[r] = "percent" : !o && a ? n[r] = "value" : i ? n[r] = i[r] : o && (n[r] = "percent")
        })
      }

      function Gh(t, e) {
        var n = t[e] - t[1 - e];
        return {
          span: Math.abs(n),
          sign: n > 0 ? -1 : n < 0 ? 1 : e ? -1 : 1
        }
      }

      function Hh(t, e) {
        return Math.min(e[1], Math.max(e[0], t))
      }

      function Fh(t) {
        return {
          x: "y",
          y: "x",
          radius: "angle",
          angle: "radius"
        } [t]
      }

      function Zh(t) {
        return "vertical" === t ? "ns-resize" : "ew-resize"
      }

      function Uh(t, e, n) {
        qh(t)[e] = n
      }

      function Xh(t, e, n) {
        var i = qh(t);
        i[e] === n && (i[e] = null)
      }

      function jh(t, e) {
        return !!qh(t)[e]
      }

      function qh(t) {
        return t[N_] || (t[N_] = {})
      }

      function Yh(t) {
        this.pointerChecker,
          this._zr = t,
          this._opt = {};
        var n = g,
          i = n($h, this),
          r = n(Kh, this),
          a = n(Qh, this),
          s = n(Jh, this),
          l = n(tu, this);
        Bd.call(this),
          this.setPointerChecker = function (t) {
            this.pointerChecker = t
          },
          this.enable = function (n, h) {
            this.disable(),
              this._opt = o(e(h) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                preventDefaultMouseMove: !0
              }),
              null == n && (n = !0),
              !0 !== n && "move" !== n && "pan" !== n || (t.on("mousedown", i),
                t.on("mousemove", r),
                t.on("mouseup", a)),
              !0 !== n && "scale" !== n && "zoom" !== n || (t.on("mousewheel", s),
                t.on("pinch", l))
          },
          this.disable = function () {
            t.off("mousedown", i),
              t.off("mousemove", r),
              t.off("mouseup", a),
              t.off("mousewheel", s),
              t.off("pinch", l)
          },
          this.dispose = this.disable,
          this.isDragging = function () {
            return this._dragging
          },
          this.isPinching = function () {
            return this._pinching
          }
      }

      function $h(t) {
        if (!(on(t) || t.target && t.target.draggable)) {
          var e = t.offsetX,
            n = t.offsetY;
          this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e,
            this._y = n,
            this._dragging = !0)
        }
      }

      function Kh(t) {
        if (!on(t) && nu(this, "moveOnMouseMove", t) && this._dragging && "pinch" !== t.gestureEvent && !jh(this._zr, "globalPan")) {
          var e = t.offsetX,
            n = t.offsetY,
            i = this._x,
            r = this._y,
            o = e - i,
            a = n - r;
          this._x = e,
            this._y = n,
            this._opt.preventDefaultMouseMove && jf(t.event),
            this.trigger("pan", o, a, i, r, e, n)
        }
      }

      function Qh(t) {
        on(t) || (this._dragging = !1)
      }

      function Jh(t) {
        if (nu(this, "zoomOnMouseWheel", t) && 0 !== t.wheelDelta) {
          var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
          eu.call(this, t, e, t.offsetX, t.offsetY)
        }
      }

      function tu(t) {
        if (!jh(this._zr, "globalPan")) {
          var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
          eu.call(this, t, e, t.pinchX, t.pinchY)
        }
      }

      function eu(t, e, n, i) {
        this.pointerChecker && this.pointerChecker(t, n, i) && (jf(t.event),
          this.trigger("zoom", e, n, i))
      }

      function nu(t, e, n) {
        var i = t._opt[e];
        return i && (!x(i) || n.event[i + "Key"])
      }

      function iu(t, e) {
        var n = su(t),
          i = e.dataZoomId,
          r = e.coordId;
        c(n, function (t, n) {
            var o = t.dataZoomInfos;
            o[i] && s(e.allCoordIds, r) < 0 && (delete o[i],
              t.count--)
          }),
          hu(n);
        var o = n[r];
        o || ((o = n[r] = {
              coordId: r,
              dataZoomInfos: {},
              count: 0
            }).controller = lu(t, o),
            o.dispatchAction = v(fu, t)),
          !o.dataZoomInfos[i] && o.count++,
          o.dataZoomInfos[i] = e;
        var a = pu(o.dataZoomInfos);
        o.controller.enable(a.controlType, a.opt),
          o.controller.setPointerChecker(e.containsPoint),
          xo(o, "dispatchAction", e.throttleRate, "fixRate")
      }

      function ru(t, e) {
        var n = su(t);
        c(n, function (t) {
            t.controller.dispose();
            var n = t.dataZoomInfos;
            n[e] && (delete n[e],
              t.count--)
          }),
          hu(n)
      }

      function ou(t, e) {
        if (t && "dataZoom" === t.type && t.batch)
          for (var n = 0, i = t.batch.length; n < i; n++)
            if (t.batch[n].dataZoomId === e)
              return !1;
        return !0
      }

      function au(t) {
        return t.type + "\0_" + t.id
      }

      function su(t) {
        var e = t.getZr();
        return e[R_] || (e[R_] = {})
      }

      function lu(t, e) {
        var n = new Yh(t.getZr());
        return n.on("pan", B_(uu, e)),
          n.on("zoom", B_(cu, e)),
          n
      }

      function hu(t) {
        c(t, function (e, n) {
          e.count || (e.controller.dispose(),
            delete t[n])
        })
      }

      function uu(t, e, n, i, r, o, a) {
        du(t, function (s) {
          return s.panGetRange(t.controller, e, n, i, r, o, a)
        })
      }

      function cu(t, e, n, i) {
        du(t, function (r) {
          return r.zoomGetRange(t.controller, e, n, i)
        })
      }

      function du(t, e) {
        var n = [];
        c(t.dataZoomInfos, function (t) {
            var i = e(t);
            !t.disabled && i && n.push({
              dataZoomId: t.dataZoomId,
              start: i[0],
              end: i[1]
            })
          }),
          t.dispatchAction(n)
      }

      function fu(t, e) {
        t.dispatchAction({
          type: "dataZoom",
          batch: e
        })
      }

      function pu(t) {
        var e, n = {},
          i = {
            true: 2,
            move: 1,
            false: 0,
            undefined: -1
          };
        return c(t, function (t) {
          var o = !t.disabled && (!t.zoomLock || "move");
          i[o] > i[e] && (e = o),
            r(n, t.roamControllerOpt)
        }), {
          controlType: e,
          opt: n
        }
      }

      function gu(t, e, n) {
        n.getAxisProxy(t.name, e).reset(n)
      }

      function vu(t, e, n) {
        n.getAxisProxy(t.name, e).filterData(n)
      }

      function mu(t, e) {
        H_[t] = e
      }

      function yu(t) {
        return H_[t]
      }

      function xu(t) {
        return 0 === t.indexOf("my")
      }

      function _u(t) {
        this.model = t
      }

      function wu(t) {
        this.model = t
      }

      function bu(t) {
        var e = {},
          n = [],
          i = [];
        return t.eachRawSeries(function (t) {
          var r = t.coordinateSystem;
          if (!r || "cartesian2d" !== r.type && "polar" !== r.type)
            n.push(t);
          else {
            var o = r.getBaseAxis();
            if ("category" === o.type) {
              var a = o.dim + "_" + o.index;
              e[a] || (e[a] = {
                    categoryAxis: o,
                    valueAxis: r.getOtherAxis(o),
                    series: []
                  },
                  i.push({
                    axisDim: o.dim,
                    axisIndex: o.index
                  })),
                e[a].series.push(t)
            } else
              n.push(t)
          }
        }), {
          seriesGroupByCategoryAxis: e,
          other: n,
          meta: i
        }
      }

      function Mu(t) {
        var e = [];
        return c(t, function (t, n) {
            var i = t.categoryAxis,
              r = t.valueAxis.dim,
              o = [" "].concat(d(t.series, function (t) {
                return t.name
              })),
              a = [i.model.getCategories()];
            c(t.series, function (t) {
              a.push(t.getRawData().mapArray(r, function (t) {
                return t
              }))
            });
            for (var s = [o.join(Q_)], l = 0; l < a[0].length; l++) {
              for (var h = [], u = 0; u < a.length; u++)
                h.push(a[u][l]);
              s.push(h.join(Q_))
            }
            e.push(s.join("\n"))
          }),
          e.join("\n\n" + K_ + "\n\n")
      }

      function Su(t) {
        return d(t, function (t) {
          var e = t.getRawData(),
            n = [t.name],
            i = [];
          return e.each(e.dimensions, function () {
              for (var t = arguments.length, r = arguments[t - 1], o = e.getName(r), a = 0; a < t - 1; a++)
                i[a] = arguments[a];
              n.push((o ? o + Q_ : "") + i.join(Q_))
            }),
            n.join("\n")
        }).join("\n\n" + K_ + "\n\n")
      }

      function Iu(t) {
        var e = bu(t);
        return {
          value: p([Mu(e.seriesGroupByCategoryAxis), Su(e.other)], function (t) {
            return t.replace(/[\n\t\s]/g, "")
          }).join("\n\n" + K_ + "\n\n"),
          meta: e.meta
        }
      }

      function Tu(t) {
        return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
      }

      function Au(t) {
        if (t.slice(0, t.indexOf("\n")).indexOf(Q_) >= 0)
          return !0
      }

      function Cu(t) {
        for (var e = t.split(/\n+/g), n = [], i = d(Tu(e.shift()).split(J_), function (t) {
            return {
              name: t,
              data: []
            }
          }), r = 0; r < e.length; r++) {
          var o = Tu(e[r]).split(J_);
          n.push(o.shift());
          for (var a = 0; a < o.length; a++)
            i[a] && (i[a].data[r] = o[a])
        }
        return {
          series: i,
          categories: n
        }
      }

      function ku(t) {
        for (var e = t.split(/\n+/g), n = Tu(e.shift()), i = [], r = 0; r < e.length; r++) {
          var o, a = Tu(e[r]).split(J_),
            s = "",
            l = !1;
          isNaN(a[0]) ? (l = !0,
            s = a[0],
            a = a.slice(1),
            i[r] = {
              name: s,
              value: []
            },
            o = i[r].value) : o = i[r] = [];
          for (var h = 0; h < a.length; h++)
            o.push(+a[h]);
          1 === o.length && (l ? i[r].value = o[0] : i[r] = o[0])
        }
        return {
          name: n,
          data: i
        }
      }

      function Du(t, e) {
        var n = {
          series: []
        };
        return c(t.split(new RegExp("\n*" + K_ + "\n*", "g")), function (t, i) {
            if (Au(t)) {
              var r = Cu(t),
                o = e[i],
                a = o.axisDim + "Axis";
              o && (n[a] = n[a] || [],
                n[a][o.axisIndex] = {
                  data: r.categories
                },
                n.series = n.series.concat(r.series))
            } else {
              r = ku(t);
              n.series.push(r)
            }
          }),
          n
      }

      function Lu(t) {
        this._dom = null,
          this.model = t
      }

      function Pu(t, e) {
        return d(t, function (t, n) {
          var i = e && e[n];
          return _(i) && !m(i) ? (_(t) && !m(t) && (t = t.value),
            o({
              value: t
            }, i)) : t
        })
      }

      function Ou(t) {
        Bd.call(this),
          this._zr = t,
          this.group = new yf,
          this._brushType,
          this._brushOption,
          this._panels,
          this._track = [],
          this._dragging,
          this._covers = [],
          this._creatingCover,
          this._creatingPanel,
          this._enableGlobalPan,
          this._uid = "brushController_" + fw++,
          this._handlers = {},
          ew(pw, function (t, e) {
            this._handlers[e] = g(t, this)
          }, this)
      }

      function zu(t, i) {
        var r = t._zr;
        t._enableGlobalPan || Uh(r, hw, t._uid),
          ew(t._handlers, function (t, e) {
            r.on(e, t)
          }),
          t._brushType = i.brushType,
          t._brushOption = n(e(dw), i, !0)
      }

      function Eu(t) {
        var e = t._zr;
        Xh(e, hw, t._uid),
          ew(t._handlers, function (t, n) {
            e.off(n, t)
          }),
          t._brushType = t._brushOption = null
      }

      function Nu(t, e) {
        var n = gw[e.brushType].createCover(t, e);
        return n.__brushOption = e,
          Vu(n, e),
          t.group.add(n),
          n
      }

      function Bu(t, e) {
        var n = Gu(e);
        return n.endCreating && (n.endCreating(t, e),
            Vu(e, e.__brushOption)),
          e
      }

      function Ru(t, e) {
        var n = e.__brushOption;
        Gu(e).updateCoverShape(t, e, n.range, n)
      }

      function Vu(t, e) {
        var n = e.z;
        null == n && (n = aw),
          t.traverse(function (t) {
            t.z = n,
              t.z2 = n
          })
      }

      function Wu(t, e) {
        Gu(e).updateCommon(t, e),
          Ru(t, e)
      }

      function Gu(t) {
        return gw[t.__brushOption.brushType]
      }

      function Hu(t, e, n) {
        var i = t._panels;
        if (!i)
          return !0;
        var r, o = t._transform;
        return ew(i, function (t) {
            t.isTargetByCursor(e, n, o) && (r = t)
          }),
          r
      }

      function Fu(t, e) {
        var n = t._panels;
        if (!n)
          return !0;
        var i = e.__brushOption.panelId;
        return null == i || n[i]
      }

      function Zu(t) {
        var e = t._covers,
          n = e.length;
        return ew(e, function (e) {
            t.group.remove(e)
          }, t),
          e.length = 0,
          !!n
      }

      function Uu(t, n) {
        var i = nw(t._covers, function (t) {
          var n = t.__brushOption,
            i = e(n.range);
          return {
            brushType: n.brushType,
            panelId: n.panelId,
            range: i
          }
        });
        t.trigger("brush", i, {
          isEnd: !!n.isEnd,
          removeOnClick: !!n.removeOnClick
        })
      }

      function Xu(t) {
        var e = t._track;
        if (!e.length)
          return !1;
        var n = e[e.length - 1],
          i = e[0],
          r = n[0] - i[0],
          o = n[1] - i[1];
        return ow(r * r + o * o, .5) > sw
      }

      function ju(t) {
        var e = t.length - 1;
        return e < 0 && (e = 0),
          [t[0], t[e]]
      }

      function qu(t, e, n, i) {
        var r = new yf;
        return r.add(new Ng({
            name: "main",
            style: Qu(n),
            silent: !0,
            draggable: !0,
            cursor: "move",
            drift: tw(t, e, r, "nswe"),
            ondragend: tw(Uu, e, {
              isEnd: !0
            })
          })),
          ew(i, function (n) {
            r.add(new Ng({
              name: n,
              style: {
                opacity: 0
              },
              draggable: !0,
              silent: !0,
              invisible: !0,
              drift: tw(t, e, r, n),
              ondragend: tw(Uu, e, {
                isEnd: !0
              })
            }))
          }),
          r
      }

      function Yu(t, e, n, i) {
        var r = i.brushStyle.lineWidth || 0,
          o = rw(r, lw),
          a = n[0][0],
          s = n[1][0],
          l = a - r / 2,
          h = s - r / 2,
          u = n[0][1],
          c = n[1][1],
          d = u - o + r / 2,
          f = c - o + r / 2,
          p = u - a,
          g = c - s,
          v = p + r,
          m = g + r;
        Ku(t, e, "main", a, s, p, g),
          i.transformable && (Ku(t, e, "w", l, h, o, m),
            Ku(t, e, "e", d, h, o, m),
            Ku(t, e, "n", l, h, v, o),
            Ku(t, e, "s", l, f, v, o),
            Ku(t, e, "nw", l, h, o, o),
            Ku(t, e, "ne", d, h, o, o),
            Ku(t, e, "sw", l, f, o, o),
            Ku(t, e, "se", d, f, o, o))
      }

      function $u(t, e) {
        var n = e.__brushOption,
          i = n.transformable,
          r = e.childAt(0);
        r.useStyle(Qu(n)),
          r.attr({
            silent: !i,
            cursor: i ? "move" : "default"
          }),
          ew(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (n) {
            var r = e.childOfName(n),
              o = ec(t, n);
            r && r.attr({
              silent: !i,
              invisible: !i,
              cursor: i ? cw[o] + "-resize" : null
            })
          })
      }

      function Ku(t, e, n, i, r, o, a) {
        var s = e.childOfName(n);
        s && s.setShape(ac(oc(t, e, [
          [i, r],
          [i + o, r + a]
        ])))
      }

      function Qu(t) {
        return o({
          strokeNoScale: !0
        }, t.brushStyle)
      }

      function Ju(t, e, n, i) {
        var r = [iw(t, n), iw(e, i)],
          o = [rw(t, n), rw(e, i)];
        return [
          [r[0], o[0]],
          [r[1], o[1]]
        ]
      }

      function tc(t) {
        return pr(t.group)
      }

      function ec(t, e) {
        if (e.length > 1)
          return ("e" === (i = [ec(t, (e = e.split(""))[0]), ec(t, e[1])])[0] || "w" === i[0]) && i.reverse(),
            i.join("");
        var n = {
            left: "w",
            right: "e",
            top: "n",
            bottom: "s"
          },
          i = vr({
            w: "left",
            e: "right",
            n: "top",
            s: "bottom"
          } [e], tc(t));
        return n[i]
      }

      function nc(t, e, n, i, r, o, a, s) {
        var l = i.__brushOption,
          h = t(l.range),
          u = rc(n, o, a);
        ew(r.split(""), function (t) {
            var e = uw[t];
            h[e[0]][e[1]] += u[e[0]]
          }),
          l.range = e(Ju(h[0][0], h[1][0], h[0][1], h[1][1])),
          Wu(n, i),
          Uu(n, {
            isEnd: !1
          })
      }

      function ic(t, e, n, i, r) {
        var o = e.__brushOption.range,
          a = rc(t, n, i);
        ew(o, function (t) {
            t[0] += a[0],
              t[1] += a[1]
          }),
          Wu(t, e),
          Uu(t, {
            isEnd: !1
          })
      }

      function rc(t, e, n) {
        var i = t.group,
          r = i.transformCoordToLocal(e, n),
          o = i.transformCoordToLocal(0, 0);
        return [r[0] - o[0], r[1] - o[1]]
      }

      function oc(t, n, i) {
        var r = Fu(t, n);
        return r && !0 !== r ? r.clipPath(i, t._transform) : e(i)
      }

      function ac(t) {
        var e = iw(t[0][0], t[1][0]),
          n = iw(t[0][1], t[1][1]);
        return {
          x: e,
          y: n,
          width: rw(t[0][0], t[1][0]) - e,
          height: rw(t[0][1], t[1][1]) - n
        }
      }

      function sc(t, e, n) {
        if (t._brushType) {
          var i = t._zr,
            r = t._covers,
            o = Hu(t, e, n);
          if (!t._dragging)
            for (var a = 0; a < r.length; a++) {
              var s = r[a].__brushOption;
              if (o && (!0 === o || s.panelId === o.panelId) && gw[s.brushType].contain(r[a], n[0], n[1]))
                return
            }
          o && i.setCursorStyle("crosshair")
        }
      }

      function lc(t) {
        var e = t.event;
        e.preventDefault && e.preventDefault()
      }

      function hc(t, e, n) {
        return t.childOfName("main").contain(e, n)
      }

      function uc(t, n, i, r) {
        var o, a = t._creatingCover,
          s = t._creatingPanel,
          l = t._brushOption;
        if (t._track.push(i.slice()),
          Xu(t) || a) {
          if (s && !a) {
            "single" === l.brushMode && Zu(t);
            var h = e(l);
            h.brushType = cc(h.brushType, s),
              h.panelId = !0 === s ? null : s.panelId,
              a = t._creatingCover = Nu(t, h),
              t._covers.push(a)
          }
          if (a) {
            var u = gw[cc(t._brushType, s)];
            a.__brushOption.range = u.getCreatingRange(oc(t, a, t._track)),
              r && (Bu(t, a),
                u.updateCommon(t, a)),
              Ru(t, a),
              o = {
                isEnd: r
              }
          }
        } else
          r && "single" === l.brushMode && l.removeOnClick && Hu(t, n, i) && Zu(t) && (o = {
            isEnd: r,
            removeOnClick: !0
          });
        return o
      }

      function cc(t, e) {
        return "auto" === t ? e.defaultBrushType : t
      }

      function dc(t) {
        if (this._dragging) {
          lc(t);
          var e = uc(this, t, this.group.transformCoordToLocal(t.offsetX, t.offsetY), !0);
          this._dragging = !1,
            this._track = [],
            this._creatingCover = null,
            e && Uu(this, e)
        }
      }

      function fc(t) {
        return {
          createCover: function (e, n) {
            return qu(tw(nc, function (e) {
              var n = [e, [0, 100]];
              return t && n.reverse(),
                n
            }, function (e) {
              return e[t]
            }), e, n, [
              ["w", "e"],
              ["n", "s"]
            ][t])
          },
          getCreatingRange: function (e) {
            var n = ju(e);
            return [iw(n[0][t], n[1][t]), rw(n[0][t], n[1][t])]
          },
          updateCoverShape: function (e, n, i, r) {
            var o, a = Fu(e, n);
            if (!0 !== a && a.getLinearBrushOtherExtent)
              o = a.getLinearBrushOtherExtent(t, e._transform);
            else {
              var s = e._zr;
              o = [0, [s.getWidth(), s.getHeight()][1 - t]]
            }
            var l = [i, o];
            t && l.reverse(),
              Yu(e, n, l, r)
          },
          updateCommon: $u,
          contain: hc
        }
      }

      function pc(t, e, n) {
        var i = e.getComponentByElement(t.topTarget),
          r = i && i.coordinateSystem;
        return i && i !== n && !vw[i.mainType] && r && r.model !== n
      }

      function gc(t) {
        return t = yc(t),
          function (e, n) {
            return yr(e, t)
          }
      }

      function vc(t, e) {
        return t = yc(t),
          function (n) {
            var i = null != e ? e : n,
              r = i ? t.width : t.height,
              o = i ? t.x : t.y;
            return [o, o + (r || 0)]
          }
      }

      function mc(t, e, n) {
        return t = yc(t),
          function (i, r, o) {
            return t.contain(r[0], r[1]) && !pc(i, e, n)
          }
      }

      function yc(t) {
        return Ft.create(t)
      }

      function xc(t, e, n) {
        var i = this._targetInfoList = [],
          r = {},
          o = wc(e, t);
        mw(Mw, function (t, e) {
          (!n || !n.include || yw(n.include, e) >= 0) && t(o, i, r)
        })
      }

      function _c(t) {
        return t[0] > t[1] && t.reverse(),
          t
      }

      function wc(t, e) {
        return Pr(t, e, {
          includeMainTypes: ww
        })
      }

      function bc(t, e, n, i) {
        var r = n.getAxis(["x", "y"][t]),
          o = _c(d([0, 1], function (t) {
            return e ? r.coordToData(r.toLocalCoord(i[t])) : r.toGlobalCoord(r.dataToCoord(i[t]))
          })),
          a = [];
        return a[t] = o,
          a[1 - t] = [NaN, NaN], {
            values: o,
            xyMinMax: a
          }
      }

      function Mc(t, e, n, i) {
        return [e[0] - i[t] * n[0], e[1] - i[t] * n[1]]
      }

      function Sc(t, e) {
        var n = Ic(t),
          i = Ic(e),
          r = [n[0] / i[0], n[1] / i[1]];
        return isNaN(r[0]) && (r[0] = 1),
          isNaN(r[1]) && (r[1] = 1),
          r
      }

      function Ic(t) {
        return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [NaN, NaN]
      }

      function Tc(t, e) {
        var n = Dc(t);
        Cw(e, function (e, i) {
            for (var r = n.length - 1; r >= 0 && !n[r][i]; r--)
            ;
            if (r < 0) {
              var o = t.queryComponents({
                mainType: "dataZoom",
                subType: "select",
                id: i
              })[0];
              if (o) {
                var a = o.getPercentRange();
                n[0][i] = {
                  dataZoomId: i,
                  start: a[0],
                  end: a[1]
                }
              }
            }
          }),
          n.push(e)
      }

      function Ac(t) {
        var e = Dc(t),
          n = e[e.length - 1];
        e.length > 1 && e.pop();
        var i = {};
        return Cw(n, function (t, n) {
            for (var r = e.length - 1; r >= 0; r--)
              if (t = e[r][n]) {
                i[n] = t;
                break
              }
          }),
          i
      }

      function Cc(t) {
        t[kw] = null
      }

      function kc(t) {
        return Dc(t).length
      }

      function Dc(t) {
        var e = t[kw];
        return e || (e = t[kw] = [{}]),
          e
      }

      function Lc(t, e, n) {
        (this._brushController = new Ou(n.getZr())).on("brush", g(this._onBrush, this)).mount(),
          this._isZoomActive
      }

      function Pc(t) {
        var e = {};
        return c(["xAxisIndex", "yAxisIndex"], function (n) {
            e[n] = t[n],
              null == e[n] && (e[n] = "all"),
              (!1 === e[n] || "none" === e[n]) && (e[n] = [])
          }),
          e
      }

      function Oc(t, e) {
        t.setIconStatus("back", kc(e) > 1 ? "emphasis" : "normal")
      }

      function zc(t, e, n, i, r) {
        var o = n._isZoomActive;
        i && "takeGlobalCursor" === i.type && (o = "dataZoomSelect" === i.key && i.dataZoomSelectActive),
          n._isZoomActive = o,
          t.setIconStatus("zoom", o ? "emphasis" : "normal");
        var a = new xc(Pc(t.option), e, {
          include: ["grid"]
        });
        n._brushController.setPanels(a.makePanelOpts(r, function (t) {
          return t.xAxisDeclared && !t.yAxisDeclared ? "lineX" : !t.xAxisDeclared && t.yAxisDeclared ? "lineY" : "rect"
        })).enableBrush(!!o && {
          brushType: "auto",
          brushStyle: {
            lineWidth: 0,
            fill: "rgba(0,0,0,0.2)"
          }
        })
      }

      function Ec(t) {
        this.model = t
      }

      function Nc() {
        if (!Vw && Ww) {
          Vw = !0;
          var t = Ww.styleSheets;
          t.length < 31 ? Ww.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
        }
      }

      function Bc(t) {
        return parseInt(t, 10)
      }

      function Rc(t, e) {
        Nc(),
          this.root = t,
          this.storage = e;
        var n = document.createElement("div"),
          i = document.createElement("div");
        n.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",
          i.style.cssText = "position:absolute;left:0;top:0;",
          t.appendChild(n),
          this._vmlRoot = i,
          this._vmlViewport = n,
          this.resize();
        var r = e.delFromStorage,
          o = e.addToStorage;
        e.delFromStorage = function (t) {
            r.call(e, t),
              t && t.onRemove && t.onRemove(i)
          },
          e.addToStorage = function (t) {
            t.onAdd && t.onAdd(i),
              o.call(e, t)
          },
          this._firstPaint = !0
      }

      function Vc(t) {
        return function () {
          df('In IE8.0 VML mode painter not support method "' + t + '"')
        }
      }

      function Wc(t) {
        return document.createElementNS(xb, t)
      }

      function Gc(t) {
        return bb(1e4 * t) / 1e4
      }

      function Hc(t) {
        return t < Cb && t > -Cb
      }

      function Fc(t, e) {
        var n = e ? t.textFill : t.fill;
        return null != n && n !== wb
      }

      function Zc(t, e) {
        var n = e ? t.textStroke : t.stroke;
        return null != n && n !== wb
      }

      function Uc(t, e) {
        e && Xc(t, "transform", "matrix(" + _b.call(e, ",") + ")")
      }

      function Xc(t, e, n) {
        (!n || "linear" !== n.type && "radial" !== n.type) && t.setAttribute(e, n)
      }

      function jc(t, e, n) {
        t.setAttributeNS("http://www.w3.org/1999/xlink", e, n)
      }

      function qc(t, e, n) {
        if (Fc(e, n)) {
          var i = n ? e.textFill : e.fill;
          i = "transparent" === i ? wb : i,
            "none" !== t.getAttribute("clip-path") && i === wb && (i = "rgba(0, 0, 0, 0.002)"),
            Xc(t, "fill", i),
            Xc(t, "fill-opacity", e.opacity)
        } else
          Xc(t, "fill", wb);
        if (Zc(e, n)) {
          var r = n ? e.textStroke : e.stroke;
          Xc(t, "stroke", r = "transparent" === r ? wb : r),
            Xc(t, "stroke-width", (n ? e.textStrokeWidth : e.lineWidth) / (e.strokeNoScale ? e.host.getLineScale() : 1)),
            Xc(t, "paint-order", "stroke"),
            Xc(t, "stroke-opacity", e.opacity),
            e.lineDash ? (Xc(t, "stroke-dasharray", e.lineDash.join(",")),
              Xc(t, "stroke-dashoffset", bb(e.lineDashOffset || 0))) : Xc(t, "stroke-dasharray", ""),
            e.lineCap && Xc(t, "stroke-linecap", e.lineCap),
            e.lineJoin && Xc(t, "stroke-linejoin", e.lineJoin),
            e.miterLimit && Xc(t, "stroke-miterlimit", e.miterLimit)
        } else
          Xc(t, "stroke", wb)
      }

      function Yc(t) {
        for (var e = [], n = t.data, i = t.len(), r = 0; r < i;) {
          var o = "",
            a = 0;
          switch (n[r++]) {
            case Xp.M:
              o = "M",
                a = 2;
              break;
            case Xp.L:
              o = "L",
                a = 2;
              break;
            case Xp.Q:
              o = "Q",
                a = 4;
              break;
            case Xp.C:
              o = "C",
                a = 6;
              break;
            case Xp.A:
              var s = n[r++],
                l = n[r++],
                h = n[r++],
                u = n[r++],
                c = n[r++],
                d = n[r++],
                f = n[r++],
                p = n[r++],
                g = Math.abs(d),
                v = Hc(g % Tb) && !Hc(g),
                m = !1;
              m = g >= Tb || !Hc(g) && (d > -Ib && d < 0 || d > Ib) == !!p;
              var y = Gc(s + h * Sb(c)),
                x = Gc(l + u * Mb(c));
              v && (d = p ? Tb - 1e-4 : 1e-4 - Tb,
                m = !0,
                9 === r && e.push("M", y, x));
              var _ = Gc(s + h * Sb(c + d)),
                w = Gc(l + u * Mb(c + d));
              e.push("A", Gc(h), Gc(u), bb(f * Ab), +m, +p, _, w);
              break;
            case Xp.Z:
              o = "Z";
              break;
            case Xp.R:
              var _ = Gc(n[r++]),
                w = Gc(n[r++]),
                b = Gc(n[r++]),
                M = Gc(n[r++]);
              e.push("M", _, w, "L", _ + b, w, "L", _ + b, w + M, "L", _, w + M, "L", _, w)
          }
          o && e.push(o);
          for (var S = 0; S < a; S++)
            e.push(Gc(n[r++]))
        }
        return e.join(" ")
      }

      function $c(t) {
        return "middle" === t ? "middle" : "bottom" === t ? "baseline" : "hanging"
      }

      function Kc() {}

      function Qc(t, e, n, i) {
        for (var r = 0, o = e.length, a = 0, s = 0; r < o; r++) {
          var l = e[r];
          if (l.removed) {
            for (var h = [], u = s; u < s + l.count; u++)
              h.push(u);
            l.indices = h,
              s += l.count
          } else {
            for (var h = [], u = a; u < a + l.count; u++)
              h.push(u);
            l.indices = h,
              a += l.count,
              l.added || (s += l.count)
          }
        }
        return e
      }

      function Jc(t) {
        return {
          newPos: t.newPos,
          components: t.components.slice(0)
        }
      }

      function td(t, e, n) {
        this._svgRoot = t,
          this._tagNames = "string" == typeof e ? [e] : e,
          this._markLabel = n,
          this.nextId = 0
      }

      function ed(t) {
        td.call(this, t, ["linearGradient", "radialGradient"], "__gradient_in_use__")
      }

      function nd(t) {
        td.call(this, t, "clipPath", "__clippath_in_use__")
      }

      function id(t) {
        return parseInt(t, 10)
      }

      function rd(t) {
        return t instanceof Ti ? kb : t instanceof Fe ? Db : t instanceof Tg ? Lb : kb
      }

      function od(t, e) {
        return e && t && e.parentNode !== t
      }

      function ad(t, e, n) {
        if (od(t, e) && n) {
          var i = n.nextSibling;
          i ? t.insertBefore(e, i) : t.appendChild(e)
        }
      }

      function sd(t, e) {
        if (od(t, e)) {
          var n = t.firstChild;
          n ? t.insertBefore(e, n) : t.appendChild(e)
        }
      }

      function ld(t, e) {
        e && t && e.parentNode === t && t.removeChild(e)
      }

      function hd(t) {
        return t.__textSvgEl
      }

      function ud(t) {
        return t.__svgEl
      }

      function cd(t) {
        return function () {
          df('In SVG mode painter not support method "' + t + '"')
        }
      }
      var dd, fd = 2311,
        pd = function () {
          return fd++
        },
        gd = {},
        vd = gd = "undefined" == typeof navigator ? {
          browser: {},
          os: {},
          node: !0,
          canvasSupported: !0,
          svgSupported: !0
        } : function (t) {
          var e = {},
            n = {},
            i = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
            o = t.match(/Edge\/([\d.]+)/),
            a = /micromessenger/i.test(t);
          return i && (n.firefox = !0,
              n.version = i[1]),
            r && (n.ie = !0,
              n.version = r[1]),
            o && (n.edge = !0,
              n.version = o[1]),
            a && (n.weChat = !0), {
              browser: n,
              os: e,
              node: !1,
              canvasSupported: !!document.createElement("canvas").getContext,
              svgSupported: "undefined" != typeof SVGRect,
              touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
              pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11)
            }
        }(navigator.userAgent),
        md = {
          "[object Function]": 1,
          "[object RegExp]": 1,
          "[object Date]": 1,
          "[object Error]": 1,
          "[object CanvasGradient]": 1,
          "[object CanvasPattern]": 1,
          "[object Image]": 1,
          "[object Canvas]": 1
        },
        yd = {
          "[object Int8Array]": 1,
          "[object Uint8Array]": 1,
          "[object Uint8ClampedArray]": 1,
          "[object Int16Array]": 1,
          "[object Uint16Array]": 1,
          "[object Int32Array]": 1,
          "[object Uint32Array]": 1,
          "[object Float32Array]": 1,
          "[object Float64Array]": 1
        },
        xd = Object.prototype.toString,
        _d = Array.prototype,
        wd = _d.forEach,
        bd = _d.filter,
        Md = _d.slice,
        Sd = _d.map,
        Id = _d.reduce,
        Td = function () {
          return document.createElement("canvas")
        },
        Ad = "__ec_primitive__";
      P.prototype = {
        constructor: P,
        get: function (t) {
          return this["_ec_" + t]
        },
        set: function (t, e) {
          return this["_ec_" + t] = e,
            e
        },
        each: function (t, e) {
          void 0 !== e && (t = g(t, e));
          for (var n in this)
            this.hasOwnProperty(n) && t(this[n], n.slice(4))
        },
        removeKey: function (t) {
          delete this["_ec_" + t]
        }
      };
      var Cd = {
          createCanvas: function (t) {
            Td = t
          }
        },
        kd = (Object.freeze || Object)({
          clone: e,
          merge: n,
          mergeAll: i,
          extend: r,
          defaults: o,
          createCanvas: Td,
          getContext: a,
          indexOf: s,
          inherits: l,
          mixin: h,
          isArrayLike: u,
          each: c,
          map: d,
          reduce: f,
          filter: p,
          find: function (t, e, n) {
            if (t && e)
              for (var i = 0, r = t.length; i < r; i++)
                if (e.call(n, t[i], i, t))
                  return t[i]
          },
          bind: g,
          curry: v,
          isArray: m,
          isFunction: y,
          isString: x,
          isObject: _,
          isBuiltInObject: w,
          isDom: b,
          eqNaN: M,
          retrieve: S,
          retrieve2: I,
          retrieve3: T,
          slice: A,
          normalizeCssArray: C,
          assert: k,
          setAsPrimitive: D,
          isPrimitive: L,
          createHashMap: O,
          noop: z,
          $inject: Cd
        }),
        Dd = "undefined" == typeof Float32Array ? Array : Float32Array,
        Ld = G,
        Pd = H,
        Od = U,
        zd = X,
        Ed = (Object.freeze || Object)({
          create: E,
          copy: N,
          clone: B,
          set: function (t, e, n) {
            return t[0] = e,
              t[1] = n,
              t
          },
          add: R,
          scaleAndAdd: V,
          sub: W,
          len: G,
          length: Ld,
          lenSquare: H,
          lengthSquare: Pd,
          mul: function (t, e, n) {
            return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t
          },
          div: function (t, e, n) {
            return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t
          },
          dot: function (t, e) {
            return t[0] * e[0] + t[1] * e[1]
          },
          scale: F,
          normalize: Z,
          distance: U,
          dist: Od,
          distanceSquare: X,
          distSquare: zd,
          negate: function (t, e) {
            return t[0] = -e[0],
              t[1] = -e[1],
              t
          },
          lerp: function (t, e, n, i) {
            return t[0] = e[0] + i * (n[0] - e[0]),
              t[1] = e[1] + i * (n[1] - e[1]),
              t
          },
          applyTransform: j,
          min: q,
          max: Y
        });
      $.prototype = {
        constructor: $,
        _dragStart: function (t) {
          var e = t.target;
          e && e.draggable && (this._draggingTarget = e,
            e.dragging = !0,
            this._x = t.offsetX,
            this._y = t.offsetY,
            this.dispatchToElement(K(e, t), "dragstart", t.event))
        },
        _drag: function (t) {
          var e = this._draggingTarget;
          if (e) {
            var n = t.offsetX,
              i = t.offsetY,
              r = n - this._x,
              o = i - this._y;
            this._x = n,
              this._y = i,
              e.drift(r, o, t),
              this.dispatchToElement(K(e, t), "drag", t.event);
            var a = this.findHover(n, i, e).target,
              s = this._dropTarget;
            this._dropTarget = a,
              e !== a && (s && a !== s && this.dispatchToElement(K(s, t), "dragleave", t.event),
                a && a !== s && this.dispatchToElement(K(a, t), "dragenter", t.event))
          }
        },
        _dragEnd: function (t) {
          var e = this._draggingTarget;
          e && (e.dragging = !1),
            this.dispatchToElement(K(e, t), "dragend", t.event),
            this._dropTarget && this.dispatchToElement(K(this._dropTarget, t), "drop", t.event),
            this._draggingTarget = null,
            this._dropTarget = null
        }
      };
      var Nd = Array.prototype.slice,
        Bd = function () {
          this._$handlers = {}
        };
      Bd.prototype = {
        constructor: Bd,
        one: function (t, e, n) {
          var i = this._$handlers;
          if (!e || !t)
            return this;
          i[t] || (i[t] = []);
          for (var r = 0; r < i[t].length; r++)
            if (i[t][r].h === e)
              return this;
          return i[t].push({
              h: e,
              one: !0,
              ctx: n || this
            }),
            this
        },
        on: function (t, e, n) {
          var i = this._$handlers;
          if (!e || !t)
            return this;
          i[t] || (i[t] = []);
          for (var r = 0; r < i[t].length; r++)
            if (i[t][r].h === e)
              return this;
          return i[t].push({
              h: e,
              one: !1,
              ctx: n || this
            }),
            this
        },
        isSilent: function (t) {
          var e = this._$handlers;
          return e[t] && e[t].length
        },
        off: function (t, e) {
          var n = this._$handlers;
          if (!t)
            return this._$handlers = {},
              this;
          if (e) {
            if (n[t]) {
              for (var i = [], r = 0, o = n[t].length; r < o; r++)
                n[t][r].h != e && i.push(n[t][r]);
              n[t] = i
            }
            n[t] && 0 === n[t].length && delete n[t]
          } else
            delete n[t];
          return this
        },
        trigger: function (t) {
          if (this._$handlers[t]) {
            var e = arguments,
              n = e.length;
            n > 3 && (e = Nd.call(e, 1));
            for (var i = this._$handlers[t], r = i.length, o = 0; o < r;) {
              switch (n) {
                case 1:
                  i[o].h.call(i[o].ctx);
                  break;
                case 2:
                  i[o].h.call(i[o].ctx, e[1]);
                  break;
                case 3:
                  i[o].h.call(i[o].ctx, e[1], e[2]);
                  break;
                default:
                  i[o].h.apply(i[o].ctx, e)
              }
              i[o].one ? (i.splice(o, 1),
                r--) : o++
            }
          }
          return this
        },
        triggerWithContext: function (t) {
          if (this._$handlers[t]) {
            var e = arguments,
              n = e.length;
            n > 4 && (e = Nd.call(e, 1, e.length - 1));
            for (var i = e[e.length - 1], r = this._$handlers[t], o = r.length, a = 0; a < o;) {
              switch (n) {
                case 1:
                  r[a].h.call(i);
                  break;
                case 2:
                  r[a].h.call(i, e[1]);
                  break;
                case 3:
                  r[a].h.call(i, e[1], e[2]);
                  break;
                default:
                  r[a].h.apply(i, e)
              }
              r[a].one ? (r.splice(a, 1),
                o--) : a++
            }
          }
          return this
        }
      };
      var Rd = "silent";
      J.prototype.dispose = function () {};
      var Vd = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Wd = function (t, e, n, i) {
          Bd.call(this),
            this.storage = t,
            this.painter = e,
            this.painterRoot = i,
            n = n || new J,
            this.proxy = n,
            n.handler = this,
            this._hovered = {},
            this._lastTouchMoment,
            this._lastX,
            this._lastY,
            $.call(this),
            c(Vd, function (t) {
              n.on && n.on(t, this[t], this)
            }, this)
        };
      Wd.prototype = {
          constructor: Wd,
          mousemove: function (t) {
            var e = t.zrX,
              n = t.zrY,
              i = this._hovered,
              r = i.target;
            r && !r.__zr && (r = (i = this.findHover(i.x, i.y)).target);
            var o = this._hovered = this.findHover(e, n),
              a = o.target,
              s = this.proxy;
            s.setCursor && s.setCursor(a ? a.cursor : "default"),
              r && a !== r && this.dispatchToElement(i, "mouseout", t),
              this.dispatchToElement(o, "mousemove", t),
              a && a !== r && this.dispatchToElement(o, "mouseover", t)
          },
          mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
              n = n && n.parentNode
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {
              event: t
            })
          },
          resize: function (t) {
            this._hovered = {}
          },
          dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e)
          },
          dispose: function () {
            this.proxy.dispose(),
              this.storage = this.proxy = this.painter = null
          },
          setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
          },
          dispatchToElement: function (t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
              for (var r = "on" + e, o = Q(e, t, n); i && (i[r] && (o.cancelBubble = i[r].call(i, o)),
                  i.trigger(e, o),
                  i = i.parent,
                  !o.cancelBubble);)
              ;
              o.cancelBubble || (this.trigger(e, o),
                this.painter && this.painter.eachOtherLayer(function (t) {
                  "function" == typeof t[r] && t[r].call(t, o),
                    t.trigger && t.trigger(e, o)
                }))
            }
          },
          findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {
                x: t,
                y: e
              }, o = i.length - 1; o >= 0; o--) {
              var a;
              if (i[o] !== n && !i[o].ignore && (a = tt(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]),
                  a !== Rd)) {
                r.target = i[o];
                break
              }
            }
            return r
          }
        },
        c(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
          Wd.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY),
              i = n.target;
            if ("mousedown" === t)
              this._downEl = i,
              this._downPoint = [e.zrX, e.zrY],
              this._upEl = i;
            else if ("mosueup" === t)
              this._upEl = i;
            else if ("click" === t) {
              if (this._downEl !== this._upEl || !this._downPoint || Od(this._downPoint, [e.zrX, e.zrY]) > 4)
                return;
              this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
          }
        }),
        h(Wd, Bd),
        h(Wd, $);
      var Gd = "undefined" == typeof Float32Array ? Array : Float32Array,
        Hd = (Object.freeze || Object)({
          create: et,
          identity: nt,
          copy: it,
          mul: rt,
          translate: ot,
          rotate: at,
          scale: st,
          invert: lt
        }),
        Fd = nt,
        Zd = 5e-5,
        Ud = function (t) {
          (t = t || {}).position || (this.position = [0, 0]),
            null == t.rotation && (this.rotation = 0),
            t.scale || (this.scale = [1, 1]),
            this.origin = this.origin || null
        },
        Xd = Ud.prototype;
      Xd.transform = null,
        Xd.needLocalTransform = function () {
          return ht(this.rotation) || ht(this.position[0]) || ht(this.position[1]) || ht(this.scale[0] - 1) || ht(this.scale[1] - 1)
        },
        Xd.updateTransform = function () {
          var t = this.parent,
            e = t && t.transform,
            n = this.needLocalTransform(),
            i = this.transform;
          n || e ? (i = i || et(),
            n ? this.getLocalTransform(i) : Fd(i),
            e && (n ? rt(i, t.transform, i) : it(i, t.transform)),
            this.transform = i,
            this.invTransform = this.invTransform || et(),
            lt(this.invTransform, i)) : i && Fd(i)
        },
        Xd.getLocalTransform = function (t) {
          return Ud.getLocalTransform(this, t)
        },
        Xd.setTransform = function (t) {
          var e = this.transform,
            n = t.dpr || 1;
          e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
        },
        Xd.restoreTransform = function (t) {
          var e = t.dpr || 1;
          t.setTransform(e, 0, 0, e, 0, 0)
        };
      var jd = [];
      Xd.decomposeTransform = function () {
          if (this.transform) {
            var t = this.parent,
              e = this.transform;
            t && t.transform && (rt(jd, t.invTransform, e),
              e = jd);
            var n = e[0] * e[0] + e[1] * e[1],
              i = e[2] * e[2] + e[3] * e[3],
              r = this.position,
              o = this.scale;
            ht(n - 1) && (n = Math.sqrt(n)),
              ht(i - 1) && (i = Math.sqrt(i)),
              e[0] < 0 && (n = -n),
              e[3] < 0 && (i = -i),
              r[0] = e[4],
              r[1] = e[5],
              o[0] = n,
              o[1] = i,
              this.rotation = Math.atan2(-e[1] / i, e[0] / n)
          }
        },
        Xd.getGlobalScale = function () {
          var t = this.transform;
          if (!t)
            return [1, 1];
          var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
            n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
          return t[0] < 0 && (e = -e),
            t[3] < 0 && (n = -n),
            [e, n]
        },
        Xd.transformCoordToLocal = function (t, e) {
          var n = [t, e],
            i = this.invTransform;
          return i && j(n, n, i),
            n
        },
        Xd.transformCoordToGlobal = function (t, e) {
          var n = [t, e],
            i = this.transform;
          return i && j(n, n, i),
            n
        },
        Ud.getLocalTransform = function (t, e) {
          Fd(e = e || []);
          var n = t.origin,
            i = t.scale || [1, 1],
            r = t.rotation || 0,
            o = t.position || [0, 0];
          return n && (e[4] -= n[0],
              e[5] -= n[1]),
            st(e, e, i),
            r && at(e, e, r),
            n && (e[4] += n[0],
              e[5] += n[1]),
            e[4] += o[0],
            e[5] += o[1],
            e
        };
      var qd = {
        linear: function (t) {
          return t
        },
        quadraticIn: function (t) {
          return t * t
        },
        quadraticOut: function (t) {
          return t * (2 - t)
        },
        quadraticInOut: function (t) {
          return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        },
        cubicIn: function (t) {
          return t * t * t
        },
        cubicOut: function (t) {
          return --t * t * t + 1
        },
        cubicInOut: function (t) {
          return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        },
        quarticIn: function (t) {
          return t * t * t * t
        },
        quarticOut: function (t) {
          return 1 - --t * t * t * t
        },
        quarticInOut: function (t) {
          return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        },
        quinticIn: function (t) {
          return t * t * t * t * t
        },
        quinticOut: function (t) {
          return --t * t * t * t * t + 1
        },
        quinticInOut: function (t) {
          return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        },
        sinusoidalIn: function (t) {
          return 1 - Math.cos(t * Math.PI / 2)
        },
        sinusoidalOut: function (t) {
          return Math.sin(t * Math.PI / 2)
        },
        sinusoidalInOut: function (t) {
          return .5 * (1 - Math.cos(Math.PI * t))
        },
        exponentialIn: function (t) {
          return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        exponentialOut: function (t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        exponentialInOut: function (t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        circularIn: function (t) {
          return 1 - Math.sqrt(1 - t * t)
        },
        circularOut: function (t) {
          return Math.sqrt(1 - --t * t)
        },
        circularInOut: function (t) {
          return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        elasticIn: function (t) {
          var e, n = .1;
          return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1,
              e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI),
            -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
        },
        elasticOut: function (t) {
          var e, n = .1;
          return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1,
              e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI),
            n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
        },
        elasticInOut: function (t) {
          var e, n = .1;
          return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1,
              e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI),
            (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
        },
        backIn: function (t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e)
        },
        backOut: function (t) {
          var e = 1.70158;
          return --t * t * ((e + 1) * t + e) + 1
        },
        backInOut: function (t) {
          var e = 2.5949095;
          return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        },
        bounceIn: function (t) {
          return 1 - qd.bounceOut(1 - t)
        },
        bounceOut: function (t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceInOut: function (t) {
          return t < .5 ? .5 * qd.bounceIn(2 * t) : .5 * qd.bounceOut(2 * t - 1) + .5
        }
      };
      ut.prototype = {
        constructor: ut,
        step: function (t, e) {
          if (this._initialized || (this._startTime = t + this._delay,
              this._initialized = !0),
            this._paused)
            this._pausedTime += e;
          else {
            var n = (t - this._startTime - this._pausedTime) / this._life;
            if (!(n < 0)) {
              n = Math.min(n, 1);
              var i = this.easing,
                r = "string" == typeof i ? qd[i] : i,
                o = "function" == typeof r ? r(n) : n;
              return this.fire("frame", o),
                1 == n ? this.loop ? (this.restart(t),
                  "restart") : (this._needsRemove = !0,
                  "destroy") : null
            }
          }
        },
        restart: function (t) {
          var e = (t - this._startTime - this._pausedTime) % this._life;
          this._startTime = t - e + this.gap,
            this._pausedTime = 0,
            this._needsRemove = !1
        },
        fire: function (t, e) {
          this[t = "on" + t] && this[t](this._target, e)
        },
        pause: function () {
          this._paused = !0
        },
        resume: function () {
          this._paused = !1
        }
      };
      var Yd = function () {
          this.head = null,
            this.tail = null,
            this._len = 0
        },
        $d = Yd.prototype;
      $d.insert = function (t) {
          var e = new Kd(t);
          return this.insertEntry(e),
            e
        },
        $d.insertEntry = function (t) {
          this.head ? (this.tail.next = t,
              t.prev = this.tail,
              t.next = null,
              this.tail = t) : this.head = this.tail = t,
            this._len++
        },
        $d.remove = function (t) {
          var e = t.prev,
            n = t.next;
          e ? e.next = n : this.head = n,
            n ? n.prev = e : this.tail = e,
            t.next = t.prev = null,
            this._len--
        },
        $d.len = function () {
          return this._len
        },
        $d.clear = function () {
          this.head = this.tail = null,
            this._len = 0
        };
      var Kd = function (t) {
          this.value = t,
            this.next,
            this.prev
        },
        Qd = function (t) {
          this._list = new Yd,
            this._map = {},
            this._maxSize = t || 10,
            this._lastRemovedEntry = null
        },
        Jd = Qd.prototype;
      Jd.put = function (t, e) {
          var n = this._list,
            i = this._map,
            r = null;
          if (null == i[t]) {
            var o = n.len(),
              a = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
              var s = n.head;
              n.remove(s),
                delete i[s.key],
                r = s.value,
                this._lastRemovedEntry = s
            }
            a ? a.value = e : a = new Kd(e),
              a.key = t,
              n.insertEntry(a),
              i[t] = a
          }
          return r
        },
        Jd.get = function (t) {
          var e = this._map[t],
            n = this._list;
          if (null != e)
            return e !== n.tail && (n.remove(e),
                n.insertEntry(e)),
              e.value
        },
        Jd.clear = function () {
          this._list.clear(),
            this._map = {}
        };
      var tf = {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255, 1],
          antiquewhite: [250, 235, 215, 1],
          aqua: [0, 255, 255, 1],
          aquamarine: [127, 255, 212, 1],
          azure: [240, 255, 255, 1],
          beige: [245, 245, 220, 1],
          bisque: [255, 228, 196, 1],
          black: [0, 0, 0, 1],
          blanchedalmond: [255, 235, 205, 1],
          blue: [0, 0, 255, 1],
          blueviolet: [138, 43, 226, 1],
          brown: [165, 42, 42, 1],
          burlywood: [222, 184, 135, 1],
          cadetblue: [95, 158, 160, 1],
          chartreuse: [127, 255, 0, 1],
          chocolate: [210, 105, 30, 1],
          coral: [255, 127, 80, 1],
          cornflowerblue: [100, 149, 237, 1],
          cornsilk: [255, 248, 220, 1],
          crimson: [220, 20, 60, 1],
          cyan: [0, 255, 255, 1],
          darkblue: [0, 0, 139, 1],
          darkcyan: [0, 139, 139, 1],
          darkgoldenrod: [184, 134, 11, 1],
          darkgray: [169, 169, 169, 1],
          darkgreen: [0, 100, 0, 1],
          darkgrey: [169, 169, 169, 1],
          darkkhaki: [189, 183, 107, 1],
          darkmagenta: [139, 0, 139, 1],
          darkolivegreen: [85, 107, 47, 1],
          darkorange: [255, 140, 0, 1],
          darkorchid: [153, 50, 204, 1],
          darkred: [139, 0, 0, 1],
          darksalmon: [233, 150, 122, 1],
          darkseagreen: [143, 188, 143, 1],
          darkslateblue: [72, 61, 139, 1],
          darkslategray: [47, 79, 79, 1],
          darkslategrey: [47, 79, 79, 1],
          darkturquoise: [0, 206, 209, 1],
          darkviolet: [148, 0, 211, 1],
          deeppink: [255, 20, 147, 1],
          deepskyblue: [0, 191, 255, 1],
          dimgray: [105, 105, 105, 1],
          dimgrey: [105, 105, 105, 1],
          dodgerblue: [30, 144, 255, 1],
          firebrick: [178, 34, 34, 1],
          floralwhite: [255, 250, 240, 1],
          forestgreen: [34, 139, 34, 1],
          fuchsia: [255, 0, 255, 1],
          gainsboro: [220, 220, 220, 1],
          ghostwhite: [248, 248, 255, 1],
          gold: [255, 215, 0, 1],
          goldenrod: [218, 165, 32, 1],
          gray: [128, 128, 128, 1],
          green: [0, 128, 0, 1],
          greenyellow: [173, 255, 47, 1],
          grey: [128, 128, 128, 1],
          honeydew: [240, 255, 240, 1],
          hotpink: [255, 105, 180, 1],
          indianred: [205, 92, 92, 1],
          indigo: [75, 0, 130, 1],
          ivory: [255, 255, 240, 1],
          khaki: [240, 230, 140, 1],
          lavender: [230, 230, 250, 1],
          lavenderblush: [255, 240, 245, 1],
          lawngreen: [124, 252, 0, 1],
          lemonchiffon: [255, 250, 205, 1],
          lightblue: [173, 216, 230, 1],
          lightcoral: [240, 128, 128, 1],
          lightcyan: [224, 255, 255, 1],
          lightgoldenrodyellow: [250, 250, 210, 1],
          lightgray: [211, 211, 211, 1],
          lightgreen: [144, 238, 144, 1],
          lightgrey: [211, 211, 211, 1],
          lightpink: [255, 182, 193, 1],
          lightsalmon: [255, 160, 122, 1],
          lightseagreen: [32, 178, 170, 1],
          lightskyblue: [135, 206, 250, 1],
          lightslategray: [119, 136, 153, 1],
          lightslategrey: [119, 136, 153, 1],
          lightsteelblue: [176, 196, 222, 1],
          lightyellow: [255, 255, 224, 1],
          lime: [0, 255, 0, 1],
          limegreen: [50, 205, 50, 1],
          linen: [250, 240, 230, 1],
          magenta: [255, 0, 255, 1],
          maroon: [128, 0, 0, 1],
          mediumaquamarine: [102, 205, 170, 1],
          mediumblue: [0, 0, 205, 1],
          mediumorchid: [186, 85, 211, 1],
          mediumpurple: [147, 112, 219, 1],
          mediumseagreen: [60, 179, 113, 1],
          mediumslateblue: [123, 104, 238, 1],
          mediumspringgreen: [0, 250, 154, 1],
          mediumturquoise: [72, 209, 204, 1],
          mediumvioletred: [199, 21, 133, 1],
          midnightblue: [25, 25, 112, 1],
          mintcream: [245, 255, 250, 1],
          mistyrose: [255, 228, 225, 1],
          moccasin: [255, 228, 181, 1],
          navajowhite: [255, 222, 173, 1],
          navy: [0, 0, 128, 1],
          oldlace: [253, 245, 230, 1],
          olive: [128, 128, 0, 1],
          olivedrab: [107, 142, 35, 1],
          orange: [255, 165, 0, 1],
          orangered: [255, 69, 0, 1],
          orchid: [218, 112, 214, 1],
          palegoldenrod: [238, 232, 170, 1],
          palegreen: [152, 251, 152, 1],
          paleturquoise: [175, 238, 238, 1],
          palevioletred: [219, 112, 147, 1],
          papayawhip: [255, 239, 213, 1],
          peachpuff: [255, 218, 185, 1],
          peru: [205, 133, 63, 1],
          pink: [255, 192, 203, 1],
          plum: [221, 160, 221, 1],
          powderblue: [176, 224, 230, 1],
          purple: [128, 0, 128, 1],
          red: [255, 0, 0, 1],
          rosybrown: [188, 143, 143, 1],
          royalblue: [65, 105, 225, 1],
          saddlebrown: [139, 69, 19, 1],
          salmon: [250, 128, 114, 1],
          sandybrown: [244, 164, 96, 1],
          seagreen: [46, 139, 87, 1],
          seashell: [255, 245, 238, 1],
          sienna: [160, 82, 45, 1],
          silver: [192, 192, 192, 1],
          skyblue: [135, 206, 235, 1],
          slateblue: [106, 90, 205, 1],
          slategray: [112, 128, 144, 1],
          slategrey: [112, 128, 144, 1],
          snow: [255, 250, 250, 1],
          springgreen: [0, 255, 127, 1],
          steelblue: [70, 130, 180, 1],
          tan: [210, 180, 140, 1],
          teal: [0, 128, 128, 1],
          thistle: [216, 191, 216, 1],
          tomato: [255, 99, 71, 1],
          turquoise: [64, 224, 208, 1],
          violet: [238, 130, 238, 1],
          wheat: [245, 222, 179, 1],
          white: [255, 255, 255, 1],
          whitesmoke: [245, 245, 245, 1],
          yellow: [255, 255, 0, 1],
          yellowgreen: [154, 205, 50, 1]
        },
        ef = new Qd(20),
        nf = null,
        rf = Tt,
        of = At,
        af = (Object.freeze || Object)({
          parse: wt,
          lift: St,
          toHex: It,
          fastLerp: Tt,
          fastMapToColor: rf,
          lerp: At,
          mapToColor: of ,
          modifyHSL: function (t, e, n, i) {
            if (t = wt(t))
              return t = Mt(t),
                null != e && (t[0] = dt(e)),
                null != n && (t[1] = gt(n)),
                null != i && (t[2] = gt(i)),
                kt(bt(t), "rgba")
          },
          modifyAlpha: Ct,
          stringify: kt
        }),
        sf = Array.prototype.slice,
        lf = function (t, e, n, i) {
          this._tracks = {},
            this._target = t,
            this._loop = e || !1,
            this._getter = n || Dt,
            this._setter = i || Lt,
            this._clipCount = 0,
            this._delay = 0,
            this._doneList = [],
            this._onframeList = [],
            this._clipList = []
        };
      lf.prototype = {
        when: function (t, e) {
          var n = this._tracks;
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              if (!n[i]) {
                n[i] = [];
                var r = this._getter(this._target, i);
                if (null == r)
                  continue;
                0 !== t && n[i].push({
                  time: 0,
                  value: Vt(r)
                })
              }
              n[i].push({
                time: t,
                value: e[i]
              })
            }
          return this
        },
        during: function (t) {
          return this._onframeList.push(t),
            this
        },
        pause: function () {
          for (var t = 0; t < this._clipList.length; t++)
            this._clipList[t].pause();
          this._paused = !0
        },
        resume: function () {
          for (var t = 0; t < this._clipList.length; t++)
            this._clipList[t].resume();
          this._paused = !1
        },
        isPaused: function () {
          return !!this._paused
        },
        _doneCallback: function () {
          this._tracks = {},
            this._clipList.length = 0;
          for (var t = this._doneList, e = t.length, n = 0; n < e; n++)
            t[n].call(this)
        },
        start: function (t, e) {
          var n, i = this,
            r = 0;
          for (var o in this._tracks)
            if (this._tracks.hasOwnProperty(o)) {
              var a = Ht(this, t, function () {
                --r || i._doneCallback()
              }, this._tracks[o], o, e);
              a && (this._clipList.push(a),
                r++,
                this.animation && this.animation.addClip(a),
                n = a)
            }
          if (n) {
            var s = n.onframe;
            n.onframe = function (t, e) {
              s(t, e);
              for (var n = 0; n < i._onframeList.length; n++)
                i._onframeList[n](t, e)
            }
          }
          return r || this._doneCallback(),
            this
        },
        stop: function (t) {
          for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
            var r = e[i];
            t && r.onframe(this._target, 1),
              n && n.removeClip(r)
          }
          e.length = 0
        },
        delay: function (t) {
          return this._delay = t,
            this
        },
        done: function (t) {
          return t && this._doneList.push(t),
            this
        },
        getClips: function () {
          return this._clipList
        }
      };
      var hf = 1;
      "undefined" != typeof window && (hf = Math.max(window.devicePixelRatio || 1, 1));
      var uf = hf,
        cf = function () {},
        df = cf,
        ff = function () {
          this.animators = []
        };
      ff.prototype = {
        constructor: ff,
        animate: function (t, e) {
          var n, i = !1,
            r = this,
            o = this.__zr;
          if (t) {
            var a = t.split("."),
              l = r;
            i = "shape" === a[0];
            for (var h = 0, u = a.length; h < u; h++)
              l && (l = l[a[h]]);
            l && (n = l)
          } else
            n = r;
          if (n) {
            var c = r.animators,
              d = new lf(n, e);
            return d.during(function (t) {
                r.dirty(i)
              }).done(function () {
                c.splice(s(c, d), 1)
              }),
              c.push(d),
              o && o.animation.addAnimator(d),
              d
          }
          df('Property "' + t + '" is not existed in element ' + r.id)
        },
        stopAnimation: function (t) {
          for (var e = this.animators, n = e.length, i = 0; i < n; i++)
            e[i].stop(t);
          return e.length = 0,
            this
        },
        animateTo: function (t, e, n, i, r, o) {
          x(n) ? (r = i,
              i = n,
              n = 0) : y(i) ? (r = i,
              i = "linear",
              n = 0) : y(n) ? (r = n,
              n = 0) : y(e) ? (r = e,
              e = 500) : e || (e = 500),
            this.stopAnimation(),
            this._animateToShallow("", this, t, e, n);
          var a = this.animators.slice(),
            s = a.length;
          s || r && r();
          for (var l = 0; l < a.length; l++)
            a[l].done(function () {
              --s || r && r()
            }).start(i, o)
        },
        _animateToShallow: function (t, e, n, i, r) {
          var o = {},
            a = 0;
          for (var s in n)
            if (n.hasOwnProperty(s))
              if (null != e[s])
                _(n[s]) && !u(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (o[s] = n[s],
                  a++);
              else if (null != n[s])
            if (t) {
              var l = {};
              l[t] = {},
                l[t][s] = n[s],
                this.attr(l)
            } else
              this.attr(s, n[s]);
          return a > 0 && this.animate(t, !1).when(null == i ? 500 : i, o).delay(r || 0),
            this
        }
      };
      var pf = function (t) {
        Ud.call(this, t),
          Bd.call(this, t),
          ff.call(this, t),
          this.id = t.id || pd()
      };
      pf.prototype = {
          type: "element",
          name: "",
          __zr: null,
          ignore: !1,
          clipPath: null,
          drift: function (t, e) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;
              case "vertical":
                t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
              n[4] += t,
              n[5] += e,
              this.decomposeTransform(),
              this.dirty(!1)
          },
          beforeUpdate: function () {},
          afterUpdate: function () {},
          update: function () {
            this.updateTransform()
          },
          traverse: function (t, e) {},
          attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
              if (e) {
                var n = this[t];
                n || (n = this[t] = []),
                  n[0] = e[0],
                  n[1] = e[1]
              }
            } else
              this[t] = e
          },
          hide: function () {
            this.ignore = !0,
              this.__zr && this.__zr.refresh()
          },
          show: function () {
            this.ignore = !1,
              this.__zr && this.__zr.refresh()
          },
          attr: function (t, e) {
            if ("string" == typeof t)
              this.attrKV(t, e);
            else if (_(t))
              for (var n in t)
                t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1),
              this
          },
          setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e),
              this.clipPath && this.clipPath !== t && this.removeClipPath(),
              this.clipPath = t,
              t.__zr = e,
              t.__clipTarget = this,
              this.dirty(!1)
          },
          removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr),
              t.__zr = null,
              t.__clipTarget = null,
              this.clipPath = null,
              this.dirty(!1))
          },
          addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e)
              for (var n = 0; n < e.length; n++)
                t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
          },
          removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e)
              for (var n = 0; n < e.length; n++)
                t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
          }
        },
        h(pf, ff),
        h(pf, Ud),
        h(pf, Bd);
      var gf = j,
        vf = Math.min,
        mf = Math.max;
      Ft.prototype = {
          constructor: Ft,
          union: function (t) {
            var e = vf(t.x, this.x),
              n = vf(t.y, this.y);
            this.width = mf(t.x + t.width, this.x + this.width) - e,
              this.height = mf(t.y + t.height, this.y + this.height) - n,
              this.x = e,
              this.y = n
          },
          applyTransform: function () {
            var t = [],
              e = [],
              n = [],
              i = [];
            return function (r) {
              if (r) {
                t[0] = n[0] = this.x,
                  t[1] = i[1] = this.y,
                  e[0] = i[0] = this.x + this.width,
                  e[1] = n[1] = this.y + this.height,
                  gf(t, t, r),
                  gf(e, e, r),
                  gf(n, n, r),
                  gf(i, i, r),
                  this.x = vf(t[0], e[0], n[0], i[0]),
                  this.y = vf(t[1], e[1], n[1], i[1]);
                var o = mf(t[0], e[0], n[0], i[0]),
                  a = mf(t[1], e[1], n[1], i[1]);
                this.width = o - this.x,
                  this.height = a - this.y
              }
            }
          }(),
          calculateTransform: function (t) {
            var e = this,
              n = t.width / e.width,
              i = t.height / e.height,
              r = et();
            return ot(r, r, [-e.x, -e.y]),
              st(r, r, [n, i]),
              ot(r, r, [t.x, t.y]),
              r
          },
          intersect: function (t) {
            if (!t)
              return !1;
            t instanceof Ft || (t = Ft.create(t));
            var e = this,
              n = e.x,
              i = e.x + e.width,
              r = e.y,
              o = e.y + e.height,
              a = t.x,
              s = t.x + t.width,
              l = t.y,
              h = t.y + t.height;
            return !(i < a || s < n || o < l || h < r)
          },
          contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
          },
          clone: function () {
            return new Ft(this.x, this.y, this.width, this.height)
          },
          copy: function (t) {
            this.x = t.x,
              this.y = t.y,
              this.width = t.width,
              this.height = t.height
          },
          plain: function () {
            return {
              x: this.x,
              y: this.y,
              width: this.width,
              height: this.height
            }
          }
        },
        Ft.create = function (t) {
          return new Ft(t.x, t.y, t.width, t.height)
        };
      var yf = function (t) {
        t = t || {},
          pf.call(this, t);
        for (var e in t)
          t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [],
          this.__storage = null,
          this.__dirty = !0
      };
      yf.prototype = {
          constructor: yf,
          isGroup: !0,
          type: "group",
          silent: !1,
          children: function () {
            return this._children.slice()
          },
          childAt: function (t) {
            return this._children[t]
          },
          childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++)
              if (e[n].name === t)
                return e[n]
          },
          childCount: function () {
            return this._children.length
          },
          add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t),
                this._doAdd(t)),
              this
          },
          addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
              var n = this._children,
                i = n.indexOf(e);
              i >= 0 && (n.splice(i, 0, t),
                this._doAdd(t))
            }
            return this
          },
          _doAdd: function (t) {
            t.parent && t.parent.remove(t),
              t.parent = this;
            var e = this.__storage,
              n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t),
                t instanceof yf && t.addChildrenToStorage(e)),
              n && n.refresh()
          },
          remove: function (t) {
            var e = this.__zr,
              n = this.__storage,
              i = this._children,
              r = s(i, t);
            return r < 0 ? this : (i.splice(r, 1),
              t.parent = null,
              n && (n.delFromStorage(t),
                t instanceof yf && t.delChildrenFromStorage(n)),
              e && e.refresh(),
              this)
          },
          removeAll: function () {
            var t, e, n = this._children,
              i = this.__storage;
            for (e = 0; e < n.length; e++)
              t = n[e],
              i && (i.delFromStorage(t),
                t instanceof yf && t.delChildrenFromStorage(i)),
              t.parent = null;
            return n.length = 0,
              this
          },
          eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
              var r = n[i];
              t.call(e, r, i)
            }
            return this
          },
          traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
              var i = this._children[n];
              t.call(e, i),
                "group" === i.type && i.traverse(t, e)
            }
            return this
          },
          addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
              var n = this._children[e];
              t.addToStorage(n),
                n instanceof yf && n.addChildrenToStorage(t)
            }
          },
          delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
              var n = this._children[e];
              t.delFromStorage(n),
                n instanceof yf && n.delChildrenFromStorage(t)
            }
          },
          dirty: function () {
            return this.__dirty = !0,
              this.__zr && this.__zr.refresh(),
              this
          },
          getBoundingRect: function (t) {
            for (var e = null, n = new Ft(0, 0, 0, 0), i = t || this._children, r = [], o = 0; o < i.length; o++) {
              var a = i[o];
              if (!a.ignore && !a.invisible) {
                var s = a.getBoundingRect(),
                  l = a.getLocalTransform(r);
                l ? (n.copy(s),
                  n.applyTransform(l),
                  (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s)
              }
            }
            return e || n
          }
        },
        l(yf, pf);
      var xf = 32,
        _f = 7,
        wf = function () {
          this._roots = [],
            this._displayList = [],
            this._displayListLen = 0
        };
      wf.prototype = {
        constructor: wf,
        traverse: function (t, e) {
          for (var n = 0; n < this._roots.length; n++)
            this._roots[n].traverse(t, e)
        },
        getDisplayList: function (t, e) {
          return e = e || !1,
            t && this.updateDisplayList(e),
            this._displayList
        },
        updateDisplayList: function (t) {
          this._displayListLen = 0;
          for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++)
            this._updateAndAddDisplayable(e[i], null, t);
          n.length = this._displayListLen,
            vd.canvasSupported && Kt(n, Qt)
        },
        _updateAndAddDisplayable: function (t, e, n) {
          if (!t.ignore || n) {
            t.beforeUpdate(),
              t.__dirty && t.update(),
              t.afterUpdate();
            var i = t.clipPath;
            if (i) {
              e = e ? e.slice() : [];
              for (var r = i, o = t; r;)
                r.parent = o,
                r.updateTransform(),
                e.push(r),
                o = r,
                r = r.clipPath
            }
            if (t.isGroup) {
              for (var a = t._children, s = 0; s < a.length; s++) {
                var l = a[s];
                t.__dirty && (l.__dirty = !0),
                  this._updateAndAddDisplayable(l, e, n)
              }
              t.__dirty = !1
            } else
              t.__clipPaths = e,
              this._displayList[this._displayListLen++] = t
          }
        },
        addRoot: function (t) {
          t.__storage !== this && (t instanceof yf && t.addChildrenToStorage(this),
            this.addToStorage(t),
            this._roots.push(t))
        },
        delRoot: function (t) {
          if (null == t) {
            for (n = 0; n < this._roots.length; n++) {
              var e = this._roots[n];
              e instanceof yf && e.delChildrenFromStorage(this)
            }
            return this._roots = [],
              this._displayList = [],
              void(this._displayListLen = 0)
          }
          if (t instanceof Array)
            for (var n = 0, i = t.length; n < i; n++)
              this.delRoot(t[n]);
          else {
            var r = s(this._roots, t);
            r >= 0 && (this.delFromStorage(t),
              this._roots.splice(r, 1),
              t instanceof yf && t.delChildrenFromStorage(this))
          }
        },
        addToStorage: function (t) {
          return t.__storage = this,
            t.dirty(!1),
            this
        },
        delFromStorage: function (t) {
          return t && (t.__storage = null),
            this
        },
        dispose: function () {
          this._renderList = this._roots = null
        },
        displayableSortFunc: Qt
      };
      var bf = [
          ["shadowBlur", 0],
          ["shadowOffsetX", 0],
          ["shadowOffsetY", 0],
          ["shadowColor", "#000"],
          ["lineCap", "butt"],
          ["lineJoin", "miter"],
          ["miterLimit", 10]
        ],
        Mf = function (t, e) {
          this.extendFrom(t, !1),
            this.host = e
        };
      Mf.prototype = {
        constructor: Mf,
        host: null,
        fill: "#000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
          for (var i = this, r = n && n.style, o = !r, a = 0; a < bf.length; a++) {
            var s = bf[a],
              l = s[0];
            (o || i[l] !== r[l]) && (t[l] = i[l] || s[1])
          }
          if ((o || i.fill !== r.fill) && (t.fillStyle = i.fill),
            (o || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke),
            (o || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity),
            (o || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"),
            this.hasStroke()) {
            var h = i.lineWidth;
            t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
          }
        },
        hasFill: function () {
          var t = this.fill;
          return null != t && "none" !== t
        },
        hasStroke: function () {
          var t = this.stroke;
          return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
          if (t)
            for (var n in t)
              !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function (t, e) {
          "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
          var t = new this.constructor;
          return t.extendFrom(this, !0),
            t
        },
        getGradient: function (t, e, n) {
          for (var i = ("radial" === e.type ? te : Jt)(t, e, n), r = e.colorStops, o = 0; o < r.length; o++)
            i.addColorStop(r[o].offset, r[o].color);
          return i
        }
      };
      for (var Sf = Mf.prototype, If = 0; If < bf.length; If++) {
        var Tf = bf[If];
        Tf[0] in Sf || (Sf[Tf[0]] = Tf[1])
      }
      Mf.getGradient = Sf.getGradient;
      var Af = function (t, e) {
        this.image = t,
          this.repeat = e,
          this.type = "pattern"
      };
      Af.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
      };
      var Cf = function (t, e, n) {
        var i;
        n = n || uf,
          "string" == typeof t ? i = ne(t, e, n) : _(t) && (t = (i = t).id),
          this.id = t,
          this.dom = i;
        var r = i.style;
        r && (i.onselectstart = ee,
            r["-webkit-user-select"] = "none",
            r["user-select"] = "none",
            r["-webkit-touch-callout"] = "none",
            r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)",
            r.padding = 0,
            r.margin = 0,
            r["border-width"] = 0),
          this.domBack = null,
          this.ctxBack = null,
          this.painter = e,
          this.config = null,
          this.clearColor = 0,
          this.motionBlur = !1,
          this.lastFrameAlpha = .7,
          this.dpr = n
      };
      Cf.prototype = {
        constructor: Cf,
        elCount: 0,
        __dirty: !0,
        initContext: function () {
          this.ctx = this.dom.getContext("2d"),
            this.ctx.__currentValues = {},
            this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
          var t = this.dpr;
          this.domBack = ne("back-" + this.id, this.painter, t),
            this.ctxBack = this.domBack.getContext("2d"),
            this.ctxBack.__currentValues = {},
            1 != t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
          var n = this.dpr,
            i = this.dom,
            r = i.style,
            o = this.domBack;
          r.width = t + "px",
            r.height = e + "px",
            i.width = t * n,
            i.height = e * n,
            o && (o.width = t * n,
              o.height = e * n,
              1 != n && this.ctxBack.scale(n, n))
        },
        clear: function (t) {
          var e = this.dom,
            n = this.ctx,
            i = e.width,
            r = e.height,
            o = this.clearColor,
            a = this.motionBlur && !t,
            s = this.lastFrameAlpha,
            l = this.dpr;
          if (a && (this.domBack || this.createBackBuffer(),
              this.ctxBack.globalCompositeOperation = "copy",
              this.ctxBack.drawImage(e, 0, 0, i / l, r / l)),
            n.clearRect(0, 0, i, r),
            o) {
            var h;
            o.colorStops ? (h = o.__canvasGradient || Mf.getGradient(n, o, {
                  x: 0,
                  y: 0,
                  width: i,
                  height: r
                }),
                o.__canvasGradient = h) : o.image && (h = Af.prototype.getCanvasPattern.call(o, n)),
              n.save(),
              n.fillStyle = h || o,
              n.fillRect(0, 0, i, r),
              n.restore()
          }
          if (a) {
            var u = this.domBack;
            n.save(),
              n.globalAlpha = s,
              n.drawImage(u, 0, 0, i, r),
              n.restore()
          }
        }
      };
      var kf = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
          setTimeout(t, 16)
        },
        Df = new Qd(50),
        Lf = {},
        Pf = 0,
        Of = 5e3,
        zf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
        Ef = "12px sans-serif",
        Nf = function (t, e) {
          var n = a();
          return n.font = e || Ef,
            n.measureText(t)
        },
        Bf = {
          measureText: function (t) {
            Nf = t
          }
        },
        Rf = {
          left: 1,
          right: 1,
          center: 1
        },
        Vf = {
          top: 1,
          bottom: 1,
          middle: 1
        },
        Wf = new Ft,
        Gf = function () {};
      Gf.prototype = {
          constructor: Gf,
          drawRectText: function (t, e) {
            var n = this.style;
            e = n.textRect || e,
              this.__dirty && Se(n);
            var i = n.text;
            if (null != i && (i += ""),
              Ge(i, n)) {
              t.save();
              var r = this.transform;
              n.transformText ? this.setTransform(t) : r && (Wf.copy(e),
                  Wf.applyTransform(r),
                  e = Wf),
                Te(this, t, i, n, e),
                t.restore()
            }
          }
        },
        He.prototype = {
          constructor: He,
          type: "displayable",
          __dirty: !0,
          invisible: !1,
          z: 0,
          z2: 0,
          zlevel: 0,
          draggable: !1,
          dragging: !1,
          silent: !1,
          culling: !1,
          cursor: "pointer",
          rectHover: !1,
          progressive: -1,
          beforeBrush: function (t) {},
          afterBrush: function (t) {},
          brush: function (t, e) {},
          getBoundingRect: function () {},
          contain: function (t, e) {
            return this.rectContain(t, e)
          },
          traverse: function (t, e) {
            t.call(e, this)
          },
          rectContain: function (t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1])
          },
          dirty: function () {
            this.__dirty = !0,
              this._rect = null,
              this.__zr && this.__zr.refresh()
          },
          animateStyle: function (t) {
            return this.animate("style", t)
          },
          attrKV: function (t, e) {
            "style" !== t ? pf.prototype.attrKV.call(this, t, e) : this.style.set(e)
          },
          setStyle: function (t, e) {
            return this.style.set(t, e),
              this.dirty(!1),
              this
          },
          useStyle: function (t) {
            return this.style = new Mf(t, this),
              this.dirty(!1),
              this
          }
        },
        l(He, pf),
        h(He, Gf),
        Fe.prototype = {
          constructor: Fe,
          type: "image",
          brush: function (t, e) {
            var n = this.style,
              i = n.image;
            n.bind(t, this, e);
            var r = this._image = re(i, this._image, this, this.onload);
            if (r && ae(r)) {
              var o = n.x || 0,
                a = n.y || 0,
                s = n.width,
                l = n.height,
                h = r.width / r.height;
              if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width,
                  l = r.height),
                this.setTransform(t),
                n.sWidth && n.sHeight) {
                var u = n.sx || 0,
                  c = n.sy || 0;
                t.drawImage(r, u, c, n.sWidth, n.sHeight, o, a, s, l)
              } else if (n.sx && n.sy) {
                var d = s - (u = n.sx),
                  f = l - (c = n.sy);
                t.drawImage(r, u, c, d, f, o, a, s, l)
              } else
                t.drawImage(r, o, a, s, l);
              this.restoreTransform(t),
                null != n.text && this.drawRectText(t, this.getBoundingRect())
            }
          },
          getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new Ft(t.x || 0, t.y || 0, t.width || 0, t.height || 0)),
              this._rect
          }
        },
        l(Fe, He);
      var Hf = new Ft(0, 0, 0, 0),
        Ff = new Ft(0, 0, 0, 0),
        Zf = function (t, e, n) {
          this.type = "canvas";
          var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
          this._opts = n = r({}, n || {}),
            this.dpr = n.devicePixelRatio || uf,
            this._singleCanvas = i,
            this.root = t;
          var o = t.style;
          o && (o["-webkit-tap-highlight-color"] = "transparent",
              o["-webkit-user-select"] = o["user-select"] = o["-webkit-touch-callout"] = "none",
              t.innerHTML = ""),
            this.storage = e;
          var a = this._zlevelList = [],
            s = this._layers = {};
          if (this._layerConfig = {},
            i) {
            null != n.width && (t.width = n.width),
              null != n.height && (t.height = n.height);
            var l = t.width,
              h = t.height;
            this._width = l,
              this._height = h;
            var u = new Cf(t, this, 1);
            u.initContext(),
              s[0] = u,
              a.push(0),
              this._domRoot = t
          } else {
            this._width = this._getSize(0),
              this._height = this._getSize(1);
            var c = this._domRoot = Ke(this._width, this._height);
            t.appendChild(c)
          }
          this._progressiveLayers = [],
            this._hoverlayer,
            this._hoverElements = []
        };
      Zf.prototype = {
        constructor: Zf,
        getType: function () {
          return "canvas"
        },
        isSingleCanvas: function () {
          return this._singleCanvas
        },
        getViewportRoot: function () {
          return this._domRoot
        },
        getViewportRootOffset: function () {
          var t = this.getViewportRoot();
          if (t)
            return {
              offsetLeft: t.offsetLeft || 0,
              offsetTop: t.offsetTop || 0
            }
        },
        refresh: function (t) {
          var e = this.storage.getDisplayList(!0),
            n = this._zlevelList;
          this._paintList(e, t);
          for (var i = 0; i < n.length; i++) {
            var r = n[i],
              o = this._layers[r];
            !o.__builtin__ && o.refresh && o.refresh()
          }
          return this.refreshHover(),
            this._progressiveLayers.length && this._startProgessive(),
            this
        },
        addHover: function (t, e) {
          if (!t.__hoverMir) {
            var n = new t.constructor({
              style: t.style,
              shape: t.shape
            });
            n.__from = t,
              t.__hoverMir = n,
              n.setStyle(e),
              this._hoverElements.push(n)
          }
        },
        removeHover: function (t) {
          var e = t.__hoverMir,
            n = this._hoverElements,
            i = s(n, e);
          i >= 0 && n.splice(i, 1),
            t.__hoverMir = null
        },
        clearHover: function (t) {
          for (var e = this._hoverElements, n = 0; n < e.length; n++) {
            var i = e[n].__from;
            i && (i.__hoverMir = null)
          }
          e.length = 0
        },
        refreshHover: function () {
          var t = this._hoverElements,
            e = t.length,
            n = this._hoverlayer;
          if (n && n.clear(),
            e) {
            Kt(t, this.storage.displayableSortFunc),
              n || (n = this._hoverlayer = this.getLayer(1e5));
            var i = {};
            n.ctx.save();
            for (var r = 0; r < e;) {
              var o = t[r],
                a = o.__from;
              a && a.__zr ? (r++,
                a.invisible || (o.transform = a.transform,
                  o.invTransform = a.invTransform,
                  o.__clipPaths = a.__clipPaths,
                  this._doPaintEl(o, n, !0, i))) : (t.splice(r, 1),
                a.__hoverMir = null,
                e--)
            }
            n.ctx.restore()
          }
        },
        _startProgessive: function () {
          function t() {
            n === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()),
              e._furtherProgressive ? (e._progress++,
                kf(t)) : e._progressiveToken = -1)
          }
          var e = this;
          if (e._furtherProgressive) {
            var n = e._progressiveToken = +new Date;
            e._progress++,
              kf(t)
          }
        },
        _clearProgressive: function () {
          this._progressiveToken = -1,
            this._progress = 0,
            c(this._progressiveLayers, function (t) {
              t.__dirty && t.clear()
            })
        },
        _paintList: function (t, e) {
          null == e && (e = !1),
            this._updateLayerStatus(t),
            this._clearProgressive(),
            this.eachBuiltinLayer(Xe),
            this._doPaintList(t, e),
            this.eachBuiltinLayer(je)
        },
        _doPaintList: function (t, e) {
          function n(t) {
            var e = o.dpr || 1;
            o.save(),
              o.globalAlpha = 1,
              o.shadowBlur = 0,
              i.__dirty = !0,
              o.setTransform(1, 0, 0, 1, 0, 0),
              o.drawImage(t.dom, 0, 0, u * e, d * e),
              o.restore()
          }
          for (var i, r, o, a, s, l, h = 0, u = this._width, d = this._height, f = this._progress, p = 0, g = t.length; p < g; p++) {
            var v = t[p],
              m = this._singleCanvas ? 0 : v.zlevel,
              y = v.__frame;
            if (y < 0 && s && (n(s),
                s = null),
              r !== m && (o && o.restore(),
                a = {},
                r = m,
                (i = this.getLayer(r)).__builtin__ || df("ZLevel " + r + " has been used by unkown layer " + i.id),
                (o = i.ctx).save(),
                i.__unusedCount = 0,
                (i.__dirty || e) && i.clear()),
              i.__dirty || e) {
              if (y >= 0) {
                if (!s) {
                  if ((s = this._progressiveLayers[Math.min(h++, 4)]).ctx.save(),
                    s.renderScope = {},
                    s && s.__progress > s.__maxProgress) {
                    p = s.__nextIdxNotProg - 1;
                    continue
                  }
                  l = s.__progress,
                    s.__dirty || (f = l),
                    s.__progress = f + 1
                }
                y === f && this._doPaintEl(v, s, !0, s.renderScope)
              } else
                this._doPaintEl(v, i, e, a);
              v.__dirty = !1
            }
          }
          s && n(s),
            o && o.restore(),
            this._furtherProgressive = !1,
            c(this._progressiveLayers, function (t) {
              t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
            }, this)
        },
        _doPaintEl: function (t, e, n, i) {
          var r = e.ctx,
            o = t.transform;
          if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!o || o[0] || o[3]) && (!t.culling || !qe(t, this._width, this._height))) {
            var a = t.__clipPaths;
            (i.prevClipLayer !== e || Ye(a, i.prevElClipPaths)) && (i.prevElClipPaths && (i.prevClipLayer.ctx.restore(),
                i.prevClipLayer = i.prevElClipPaths = null,
                i.prevEl = null),
              a && (r.save(),
                $e(a, r),
                i.prevClipLayer = e,
                i.prevElClipPaths = a)),
            t.beforeBrush && t.beforeBrush(r),
              t.brush(r, i.prevEl || null),
              i.prevEl = t,
              t.afterBrush && t.afterBrush(r)
          }
        },
        getLayer: function (t) {
          if (this._singleCanvas)
            return this._layers[0];
          var e = this._layers[t];
          return e || ((e = new Cf("zr_" + t, this, this.dpr)).__builtin__ = !0,
              this._layerConfig[t] && n(e, this._layerConfig[t], !0),
              this.insertLayer(t, e),
              e.initContext()),
            e
        },
        insertLayer: function (t, e) {
          var n = this._layers,
            i = this._zlevelList,
            r = i.length,
            o = null,
            a = -1,
            s = this._domRoot;
          if (n[t])
            df("ZLevel " + t + " has been used already");
          else if (Ue(e)) {
            if (r > 0 && t > i[0]) {
              for (a = 0; a < r - 1 && !(i[a] < t && i[a + 1] > t); a++)
              ;
              o = n[i[a]]
            }
            if (i.splice(a + 1, 0, t),
              n[t] = e,
              !e.virtual)
              if (o) {
                var l = o.dom;
                l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
              } else
                s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
          } else
            df("Layer of zlevel " + t + " is not valid")
        },
        eachLayer: function (t, e) {
          var n, i, r = this._zlevelList;
          for (i = 0; i < r.length; i++)
            n = r[i],
            t.call(e, this._layers[n], n)
        },
        eachBuiltinLayer: function (t, e) {
          var n, i, r, o = this._zlevelList;
          for (r = 0; r < o.length; r++)
            i = o[r],
            (n = this._layers[i]).__builtin__ && t.call(e, n, i)
        },
        eachOtherLayer: function (t, e) {
          var n, i, r, o = this._zlevelList;
          for (r = 0; r < o.length; r++)
            i = o[r],
            (n = this._layers[i]).__builtin__ || t.call(e, n, i)
        },
        getLayers: function () {
          return this._layers
        },
        _updateLayerStatus: function (t) {
          var e = this._layers,
            n = this._progressiveLayers,
            i = {},
            r = {};
          this.eachBuiltinLayer(function (t, e) {
              i[e] = t.elCount,
                t.elCount = 0,
                t.__dirty = !1
            }),
            c(n, function (t, e) {
              r[e] = t.elCount,
                t.elCount = 0,
                t.__dirty = !1
            });
          for (var o, a, s = 0, l = 0, h = 0, u = t.length; h < u; h++) {
            var d = t[h],
              f = e[this._singleCanvas ? 0 : d.zlevel],
              p = d.progressive;
            if (f && (f.elCount++,
                f.__dirty = f.__dirty || d.__dirty),
              p >= 0) {
              a !== p && (a = p,
                l++);
              var g = d.__frame = l - 1;
              if (!o) {
                var v = Math.min(s, 4);
                (o = n[v]) || (o = n[v] = new Cf("progressive", this, this.dpr)).initContext(),
                  o.__maxProgress = 0
              }
              o.__dirty = o.__dirty || d.__dirty,
                o.elCount++,
                o.__maxProgress = Math.max(o.__maxProgress, g),
                o.__maxProgress >= o.__progress && (f.__dirty = !0)
            } else
              d.__frame = -1,
              o && (o.__nextIdxNotProg = h,
                s++,
                o = null)
          }
          o && (s++,
              o.__nextIdxNotProg = h),
            this.eachBuiltinLayer(function (t, e) {
              i[e] !== t.elCount && (t.__dirty = !0)
            }),
            n.length = Math.min(s, 5),
            c(n, function (t, e) {
              r[e] !== t.elCount && (d.__dirty = !0),
                t.__dirty && (t.__progress = 0)
            })
        },
        clear: function () {
          return this.eachBuiltinLayer(this._clearLayer),
            this
        },
        _clearLayer: function (t) {
          t.clear()
        },
        configLayer: function (t, e) {
          if (e) {
            var i = this._layerConfig;
            i[t] ? n(i[t], e, !0) : i[t] = e;
            var r = this._layers[t];
            r && n(r, i[t], !0)
          }
        },
        delLayer: function (t) {
          var e = this._layers,
            n = this._zlevelList,
            i = e[t];
          i && (i.dom.parentNode.removeChild(i.dom),
            delete e[t],
            n.splice(s(n, t), 1))
        },
        resize: function (t, e) {
          var n = this._domRoot;
          n.style.display = "none";
          var i = this._opts;
          if (null != t && (i.width = t),
            null != e && (i.height = e),
            t = this._getSize(0),
            e = this._getSize(1),
            n.style.display = "",
            this._width != t || e != this._height) {
            n.style.width = t + "px",
              n.style.height = e + "px";
            for (var r in this._layers)
              this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
            c(this._progressiveLayers, function (n) {
                n.resize(t, e)
              }),
              this.refresh(!0)
          }
          return this._width = t,
            this._height = e,
            this
        },
        clearLayer: function (t) {
          var e = this._layers[t];
          e && e.clear()
        },
        dispose: function () {
          this.root.innerHTML = "",
            this.root = this.storage = this._domRoot = this._layers = null
        },
        getRenderedCanvas: function (t) {
          function e(t, e) {
            var i = a._zlevelList;
            null == t && (t = -1 / 0);
            for (var r, o = 0; o < i.length; o++) {
              var s = i[o],
                l = a._layers[s];
              if (!l.__builtin__ && s > t && s < e) {
                r = l;
                break
              }
            }
            r && r.renderToCanvas && (n.ctx.save(),
              r.renderToCanvas(n.ctx),
              n.ctx.restore())
          }
          if (t = t || {},
            this._singleCanvas)
            return this._layers[0].dom;
          var n = new Cf("image", this, t.pixelRatio || this.dpr);
          n.initContext(),
            n.clearColor = t.backgroundColor,
            n.clear();
          for (var i, r = this.storage.getDisplayList(!0), o = {}, a = this, s = 0; s < r.length; s++) {
            var l = r[s];
            l.zlevel !== i && (e(i, l.zlevel),
                i = l.zlevel),
              this._doPaintEl(l, n, !0, o)
          }
          return e(i, 1 / 0),
            n.dom
        },
        getWidth: function () {
          return this._width
        },
        getHeight: function () {
          return this._height
        },
        _getSize: function (t) {
          var e = this._opts,
            n = ["width", "height"][t],
            i = ["clientWidth", "clientHeight"][t],
            r = ["paddingLeft", "paddingTop"][t],
            o = ["paddingRight", "paddingBottom"][t];
          if (null != e[n] && "auto" !== e[n])
            return parseFloat(e[n]);
          var a = this.root,
            s = document.defaultView.getComputedStyle(a);
          return (a[i] || Ze(s[n]) || Ze(a.style[n])) - (Ze(s[r]) || 0) - (Ze(s[o]) || 0) | 0
        },
        pathToImage: function (t, e) {
          e = e || this.dpr;
          var n = document.createElement("canvas"),
            i = n.getContext("2d"),
            r = t.getBoundingRect(),
            o = t.style,
            a = o.shadowBlur,
            s = o.shadowOffsetX,
            l = o.shadowOffsetY,
            h = o.hasStroke() ? o.lineWidth : 0,
            u = Math.max(h / 2, -s + a),
            c = Math.max(h / 2, s + a),
            d = Math.max(h / 2, -l + a),
            f = Math.max(h / 2, l + a),
            p = r.width + u + c,
            g = r.height + d + f;
          n.width = p * e,
            n.height = g * e,
            i.scale(e, e),
            i.clearRect(0, 0, p, g),
            i.dpr = e;
          var v = {
            position: t.position,
            rotation: t.rotation,
            scale: t.scale
          };
          t.position = [u - r.x, d - r.y],
            t.rotation = 0,
            t.scale = [1, 1],
            t.updateTransform(),
            t && t.brush(i);
          var m = new Fe({
            style: {
              x: 0,
              y: 0,
              image: n
            }
          });
          return null != v.position && (m.position = t.position = v.position),
            null != v.rotation && (m.rotation = t.rotation = v.rotation),
            null != v.scale && (m.scale = t.scale = v.scale),
            m
        }
      };
      var Uf = "undefined" != typeof window && !!window.addEventListener,
        Xf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        jf = Uf ? function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            t.cancelBubble = !0
        } :
        function (t) {
          t.returnValue = !1,
            t.cancelBubble = !0
        },
        qf = function (t) {
          t = t || {},
            this.stage = t.stage || {},
            this.onframe = t.onframe || function () {},
            this._clips = [],
            this._running = !1,
            this._time,
            this._pausedTime,
            this._pauseStart,
            this._paused = !1,
            Bd.call(this)
        };
      qf.prototype = {
          constructor: qf,
          addClip: function (t) {
            this._clips.push(t)
          },
          addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++)
              this.addClip(e[n])
          },
          removeClip: function (t) {
            var e = s(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
          },
          removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++)
              this.removeClip(e[n]);
            t.animation = null
          },
          _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], o = [], a = 0; a < i; a++) {
              var s = n[a],
                l = s.step(t, e);
              l && (r.push(l),
                o.push(s))
            }
            for (a = 0; a < i;)
              n[a]._needsRemove ? (n[a] = n[i - 1],
                n.pop(),
                i--) : a++;
            i = r.length;
            for (a = 0; a < i; a++)
              o[a].fire(r[a]);
            this._time = t,
              this.onframe(e),
              this.trigger("frame", e),
              this.stage.update && this.stage.update()
          },
          _startLoop: function () {
            function t() {
              e._running && (kf(t),
                !e._paused && e._update())
            }
            var e = this;
            this._running = !0,
              kf(t)
          },
          start: function () {
            this._time = (new Date).getTime(),
              this._pausedTime = 0,
              this._startLoop()
          },
          stop: function () {
            this._running = !1
          },
          pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(),
              this._paused = !0)
          },
          resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart,
              this._paused = !1)
          },
          clear: function () {
            this._clips = []
          },
          animate: function (t, e) {
            var n = new lf(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(n),
              n
          }
        },
        h(qf, Bd);
      var Yf = function () {
        this._track = []
      };
      Yf.prototype = {
        constructor: Yf,
        recognize: function (t, e, n) {
          return this._doTrack(t, e, n),
            this._recognize(t)
        },
        clear: function () {
          return this._track.length = 0,
            this
        },
        _doTrack: function (t, e, n) {
          var i = t.touches;
          if (i) {
            for (var r = {
                points: [],
                touches: [],
                target: e,
                event: t
              }, o = 0, a = i.length; o < a; o++) {
              var s = i[o],
                l = Je(n, s, {});
              r.points.push([l.zrX, l.zrY]),
                r.touches.push(s)
            }
            this._track.push(r)
          }
        },
        _recognize: function (t) {
          for (var e in $f)
            if ($f.hasOwnProperty(e)) {
              var n = $f[e](this._track, t);
              if (n)
                return n
            }
        }
      };
      var $f = {
          pinch: function (t, e) {
            var n = t.length;
            if (n) {
              var i = (t[n - 1] || {}).points,
                r = (t[n - 2] || {}).points || i;
              if (r && r.length > 1 && i && i.length > 1) {
                var o = an(i) / an(r);
                !isFinite(o) && (o = 1),
                  e.pinchScale = o;
                var a = sn(i);
                return e.pinchX = a[0],
                  e.pinchY = a[1], {
                    type: "pinch",
                    target: t[0].target,
                    event: e
                  }
              }
            }
          }
        },
        Kf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Qf = ["touchstart", "touchend", "touchmove"],
        Jf = {
          pointerdown: 1,
          pointerup: 1,
          pointermove: 1,
          pointerout: 1
        },
        tp = d(Kf, function (t) {
          var e = t.replace("mouse", "pointer");
          return Jf[e] ? e : t
        }),
        ep = {
          mousemove: function (t) {
            t = en(this.dom, t),
              this.trigger("mousemove", t)
          },
          mouseout: function (t) {
            var e = (t = en(this.dom, t)).toElement || t.relatedTarget;
            if (e != this.dom)
              for (; e && 9 != e.nodeType;) {
                if (e === this.dom)
                  return;
                e = e.parentNode
              }
            this.trigger("mouseout", t)
          },
          touchstart: function (t) {
            (t = en(this.dom, t)).zrByTouch = !0,
              this._lastTouchMoment = new Date,
              hn(this, t, "start"),
              ep.mousemove.call(this, t),
              ep.mousedown.call(this, t),
              un(this)
          },
          touchmove: function (t) {
            (t = en(this.dom, t)).zrByTouch = !0,
              hn(this, t, "change"),
              ep.mousemove.call(this, t),
              un(this)
          },
          touchend: function (t) {
            (t = en(this.dom, t)).zrByTouch = !0,
              hn(this, t, "end"),
              ep.mouseup.call(this, t),
              +new Date - this._lastTouchMoment < 300 && ep.click.call(this, t),
              un(this)
          },
          pointerdown: function (t) {
            ep.mousedown.call(this, t)
          },
          pointermove: function (t) {
            cn(t) || ep.mousemove.call(this, t)
          },
          pointerup: function (t) {
            ep.mouseup.call(this, t)
          },
          pointerout: function (t) {
            cn(t) || ep.mouseout.call(this, t)
          }
        };
      c(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        ep[t] = function (e) {
          e = en(this.dom, e),
            this.trigger(t, e)
        }
      });
      var np = fn.prototype;
      np.dispose = function () {
          for (var t = Kf.concat(Qf), e = 0; e < t.length; e++) {
            var n = t[e];
            rn(this.dom, ln(n), this._handlers[n])
          }
        },
        np.setCursor = function (t) {
          this.dom.style.cursor = t || "default"
        },
        h(fn, Bd);
      var ip = !vd.canvasSupported,
        rp = {
          canvas: Zf
        },
        op = {},
        ap = "3.7.0",
        sp = function (t, e, n) {
          n = n || {},
            this.dom = e,
            this.id = t;
          var i = this,
            r = new wf,
            o = n.renderer;
          if (ip) {
            if (!rp.vml)
              throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            o = "vml"
          } else
            o && rp[o] || (o = "canvas");
          var a = new rp[o](e, r, n);
          this.storage = r,
            this.painter = a;
          var s = vd.node ? null : new fn(a.getViewportRoot());
          this.handler = new Wd(r, a, s, a.root),
            this.animation = new qf({
              stage: {
                update: g(this.flush, this)
              }
            }),
            this.animation.start(),
            this._needsRefresh;
          var l = r.delFromStorage,
            h = r.addToStorage;
          r.delFromStorage = function (t) {
              l.call(r, t),
                t && t.removeSelfFromZr(i)
            },
            r.addToStorage = function (t) {
              h.call(r, t),
                t.addSelfToZr(i)
            }
        };
      sp.prototype = {
        constructor: sp,
        getId: function () {
          return this.id
        },
        add: function (t) {
          this.storage.addRoot(t),
            this._needsRefresh = !0
        },
        remove: function (t) {
          this.storage.delRoot(t),
            this._needsRefresh = !0
        },
        configLayer: function (t, e) {
          this.painter.configLayer(t, e),
            this._needsRefresh = !0
        },
        refreshImmediately: function () {
          this._needsRefresh = !1,
            this.painter.refresh(),
            this._needsRefresh = !1
        },
        refresh: function () {
          this._needsRefresh = !0
        },
        flush: function () {
          this._needsRefresh && this.refreshImmediately(),
            this._needsRefreshHover && this.refreshHoverImmediately()
        },
        addHover: function (t, e) {
          this.painter.addHover && (this.painter.addHover(t, e),
            this.refreshHover())
        },
        removeHover: function (t) {
          this.painter.removeHover && (this.painter.removeHover(t),
            this.refreshHover())
        },
        clearHover: function () {
          this.painter.clearHover && (this.painter.clearHover(),
            this.refreshHover())
        },
        refreshHover: function () {
          this._needsRefreshHover = !0
        },
        refreshHoverImmediately: function () {
          this._needsRefreshHover = !1,
            this.painter.refreshHover && this.painter.refreshHover()
        },
        resize: function (t) {
          t = t || {},
            this.painter.resize(t.width, t.height),
            this.handler.resize()
        },
        clearAnimation: function () {
          this.animation.clear()
        },
        getWidth: function () {
          return this.painter.getWidth()
        },
        getHeight: function () {
          return this.painter.getHeight()
        },
        pathToImage: function (t, e) {
          return this.painter.pathToImage(t, e)
        },
        setCursorStyle: function (t) {
          this.handler.setCursorStyle(t)
        },
        findHover: function (t, e) {
          return this.handler.findHover(t, e)
        },
        on: function (t, e, n) {
          this.handler.on(t, e, n)
        },
        off: function (t, e) {
          this.handler.off(t, e)
        },
        trigger: function (t, e) {
          this.handler.trigger(t, e)
        },
        clear: function () {
          this.storage.delRoot(),
            this.painter.clear()
        },
        dispose: function () {
          this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            this.animation = this.storage = this.painter = this.handler = null,
            vn(this.id)
        }
      };
      var lp = (Object.freeze || Object)({
          version: ap,
          init: pn,
          dispose: function (t) {
            if (t)
              t.dispose();
            else {
              for (var e in op)
                op.hasOwnProperty(e) && op[e].dispose();
              op = {}
            }
            return this
          },
          getInstance: function (t) {
            return op[t]
          },
          registerPainter: gn
        }),
        hp = 1e-4,
        up = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        cp = (Object.freeze || Object)({
          linearMap: yn,
          parsePercent: xn,
          round: _n,
          asc: wn,
          getPrecision: bn,
          getPrecisionSafe: Mn,
          getPixelPrecision: Sn,
          getPercentWithPrecision: In,
          MAX_SAFE_INTEGER: 9007199254740991,
          remRadian: Tn,
          isRadianAroundZero: An,
          parseDate: Cn,
          quantity: kn,
          nice: Ln,
          reformIntervals: function (t) {
            function e(t, n, i) {
              return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] == (i ? -1 : 1) || !i && e(t, n, 1))
            }
            t.sort(function (t, n) {
              return e(t, n, 0) ? -1 : 1
            });
            for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
              for (var o = t[r].interval, a = t[r].close, s = 0; s < 2; s++)
                o[s] <= n && (o[s] = n,
                  a[s] = s ? 1 : 1 - i),
                n = o[s],
                i = a[s];
              o[0] === o[1] && a[0] * a[1] != 1 ? t.splice(r, 1) : r++
            }
            return t
          },
          isNumeric: function (t) {
            return t - parseFloat(t) >= 0
          }
        }),
        dp = C,
        fp = ["a", "b", "c", "d", "e", "f", "g"],
        pp = function (t, e) {
          return "{" + t + (null == e ? "" : e) + "}"
        },
        gp = function (t) {
          return t < 10 ? "0" + t : t
        },
        vp = pe,
        mp = le,
        yp = (Object.freeze || Object)({
          addCommas: Pn,
          toCamelCase: On,
          normalizeCssArray: dp,
          encodeHTML: zn,
          formatTpl: En,
          formatTplSimple: function (t, e, n) {
            return c(e, function (e, i) {
                t = t.replace("{" + i + "}", n ? zn(e) : e)
              }),
              t
          },
          getTooltipMarker: Nn,
          formatTime: Bn,
          capitalFirst: Rn,
          truncateText: vp,
          getTextRect: mp
        }),
        xp = ".",
        _p = "___EC__COMPONENT__CONTAINER___",
        wp = "\0ec_\0",
        bp = function (t) {
          for (var e = 0; e < t.length; e++)
            t[e][1] || (t[e][1] = t[e][0]);
          return function (e, n, i) {
            for (var r = {}, o = 0; o < t.length; o++) {
              var a = t[o][1];
              if (!(n && s(n, a) >= 0 || i && s(i, a) < 0)) {
                var l = e.getShallow(a);
                null != l && (r[t[o][0]] = l)
              }
            }
            return r
          }
        },
        Mp = bp([
          ["lineWidth", "width"],
          ["stroke", "color"],
          ["opacity"],
          ["shadowBlur"],
          ["shadowOffsetX"],
          ["shadowOffsetY"],
          ["shadowColor"]
        ]),
        Sp = {
          getLineStyle: function (t) {
            var e = Mp(this, t),
              n = this.getLineDash(e.lineWidth);
            return n && (e.lineDash = n),
              e
          },
          getLineDash: function (t) {
            null == t && (t = 1);
            var e = this.get("type"),
              n = Math.max(t, 2),
              i = 4 * t;
            return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
          }
        },
        Ip = bp([
          ["fill", "color"],
          ["shadowBlur"],
          ["shadowOffsetX"],
          ["shadowOffsetY"],
          ["opacity"],
          ["shadowColor"]
        ]),
        Tp = {
          getAreaStyle: function (t, e) {
            return Ip(this, t, e)
          }
        },
        Ap = Math.pow,
        Cp = Math.sqrt,
        kp = 1e-8,
        Dp = 1e-4,
        Lp = Cp(3),
        Pp = 1 / 3,
        Op = E(),
        zp = E(),
        Ep = E(),
        Np = Math.min,
        Bp = Math.max,
        Rp = Math.sin,
        Vp = Math.cos,
        Wp = 2 * Math.PI,
        Gp = E(),
        Hp = E(),
        Fp = E(),
        Zp = [],
        Up = [],
        Xp = {
          M: 1,
          L: 2,
          C: 3,
          Q: 4,
          A: 5,
          Z: 6,
          R: 7
        },
        jp = [],
        qp = [],
        Yp = [],
        $p = [],
        Kp = Math.min,
        Qp = Math.max,
        Jp = Math.cos,
        tg = Math.sin,
        eg = Math.sqrt,
        ng = Math.abs,
        ig = "undefined" != typeof Float32Array,
        rg = function (t) {
          this._saveData = !t,
            this._saveData && (this.data = []),
            this._ctx = null
        };
      rg.prototype = {
          constructor: rg,
          _xi: 0,
          _yi: 0,
          _x0: 0,
          _y0: 0,
          _ux: 0,
          _uy: 0,
          _len: 0,
          _lineDash: null,
          _dashOffset: 0,
          _dashIdx: 0,
          _dashSum: 0,
          setScale: function (t, e) {
            this._ux = ng(1 / uf / t) || 0,
              this._uy = ng(1 / uf / e) || 0
          },
          getContext: function () {
            return this._ctx
          },
          beginPath: function (t) {
            return this._ctx = t,
              t && t.beginPath(),
              t && (this.dpr = t.dpr),
              this._saveData && (this._len = 0),
              this._lineDash && (this._lineDash = null,
                this._dashOffset = 0),
              this
          },
          moveTo: function (t, e) {
            return this.addData(Xp.M, t, e),
              this._ctx && this._ctx.moveTo(t, e),
              this._x0 = t,
              this._y0 = e,
              this._xi = t,
              this._yi = e,
              this
          },
          lineTo: function (t, e) {
            var n = ng(t - this._xi) > this._ux || ng(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Xp.L, t, e),
              this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
              n && (this._xi = t,
                this._yi = e),
              this
          },
          bezierCurveTo: function (t, e, n, i, r, o) {
            return this.addData(Xp.C, t, e, n, i, r, o),
              this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)),
              this._xi = r,
              this._yi = o,
              this
          },
          quadraticCurveTo: function (t, e, n, i) {
            return this.addData(Xp.Q, t, e, n, i),
              this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)),
              this._xi = n,
              this._yi = i,
              this
          },
          arc: function (t, e, n, i, r, o) {
            return this.addData(Xp.A, t, e, n, n, i, r - i, 0, o ? 0 : 1),
              this._ctx && this._ctx.arc(t, e, n, i, r, o),
              this._xi = Jp(r) * n + t,
              this._yi = tg(r) * n + t,
              this
          },
          arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r),
              this
          },
          rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i),
              this.addData(Xp.R, t, e, n, i),
              this
          },
          closePath: function () {
            this.addData(Xp.Z);
            var t = this._ctx,
              e = this._x0,
              n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n),
                t.closePath()),
              this._xi = e,
              this._yi = n,
              this
          },
          fill: function (t) {
            t && t.fill(),
              this.toStatic()
          },
          stroke: function (t) {
            t && t.stroke(),
              this.toStatic()
          },
          setLineDash: function (t) {
            if (t instanceof Array) {
              this._lineDash = t,
                this._dashIdx = 0;
              for (var e = 0, n = 0; n < t.length; n++)
                e += t[n];
              this._dashSum = e
            }
            return this
          },
          setLineDashOffset: function (t) {
            return this._dashOffset = t,
              this
          },
          len: function () {
            return this._len
          },
          setData: function (t) {
            var e = t.length;
            this.data && this.data.length == e || !ig || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++)
              this.data[n] = t[n];
            this._len = e
          },
          appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++)
              n += t[r].len();
            ig && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; r < e; r++)
              for (var o = t[r].data, a = 0; a < o.length; a++)
                this.data[i++] = o[a];
            this._len = i
          },
          addData: function (t) {
            if (this._saveData) {
              var e = this.data;
              this._len + arguments.length > e.length && (this._expandData(),
                e = this.data);
              for (var n = 0; n < arguments.length; n++)
                e[this._len++] = arguments[n];
              this._prevCmd = t
            }
          },
          _expandData: function () {
            if (!(this.data instanceof Array)) {
              for (var t = [], e = 0; e < this._len; e++)
                t[e] = this.data[e];
              this.data = t
            }
          },
          _needsDash: function () {
            return this._lineDash
          },
          _dashedLineTo: function (t, e) {
            var n, i, r = this._dashSum,
              o = this._dashOffset,
              a = this._lineDash,
              s = this._ctx,
              l = this._xi,
              h = this._yi,
              u = t - l,
              c = e - h,
              d = eg(u * u + c * c),
              f = l,
              p = h,
              g = a.length;
            for (u /= d,
              c /= d,
              o < 0 && (o = r + o),
              f -= (o %= r) * u,
              p -= o * c; u > 0 && f <= t || u < 0 && f >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e);)
              f += u * (n = a[i = this._dashIdx]),
              p += c * n,
              this._dashIdx = (i + 1) % g,
              u > 0 && f < l || u < 0 && f > l || c > 0 && p < h || c < 0 && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? Kp(f, t) : Qp(f, t), c >= 0 ? Kp(p, e) : Qp(p, e));
            u = f - t,
              c = p - e,
              this._dashOffset = -eg(u * u + c * c)
          },
          _dashedBezierTo: function (t, e, n, i, r, o) {
            var a, s, l, h, u, c = this._dashSum,
              d = this._dashOffset,
              f = this._lineDash,
              p = this._ctx,
              g = this._xi,
              v = this._yi,
              m = $n,
              y = 0,
              x = this._dashIdx,
              _ = f.length,
              w = 0;
            for (d < 0 && (d = c + d),
              d %= c,
              a = 0; a < 1; a += .1)
              s = m(g, t, n, r, a + .1) - m(g, t, n, r, a),
              l = m(v, e, i, o, a + .1) - m(v, e, i, o, a),
              y += eg(s * s + l * l);
            for (; x < _ && !((w += f[x]) > d); x++)
            ;
            for (a = (w - d) / y; a <= 1;)
              h = m(g, t, n, r, a),
              u = m(v, e, i, o, a),
              x % 2 ? p.moveTo(h, u) : p.lineTo(h, u),
              a += f[x] / y,
              x = (x + 1) % _;
            x % 2 != 0 && p.lineTo(r, o),
              s = r - h,
              l = o - u,
              this._dashOffset = -eg(s * s + l * l)
          },
          _dashedQuadraticTo: function (t, e, n, i) {
            var r = n,
              o = i;
            n = (n + 2 * t) / 3,
              i = (i + 2 * e) / 3,
              t = (this._xi + 2 * t) / 3,
              e = (this._yi + 2 * e) / 3,
              this._dashedBezierTo(t, e, n, i, r, o)
          },
          toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len,
              ig && (this.data = new Float32Array(t)))
          },
          getBoundingRect: function () {
            jp[0] = jp[1] = Yp[0] = Yp[1] = Number.MAX_VALUE,
              qp[0] = qp[1] = $p[0] = $p[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, o = 0; o < t.length;) {
              var a = t[o++];
              switch (1 == o && (i = e = t[o],
                  r = n = t[o + 1]),
                a) {
                case Xp.M:
                  e = i = t[o++],
                    n = r = t[o++],
                    Yp[0] = i,
                    Yp[1] = r,
                    $p[0] = i,
                    $p[1] = r;
                  break;
                case Xp.L:
                  li(e, n, t[o], t[o + 1], Yp, $p),
                    e = t[o++],
                    n = t[o++];
                  break;
                case Xp.C:
                  hi(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Yp, $p),
                    e = t[o++],
                    n = t[o++];
                  break;
                case Xp.Q:
                  ui(e, n, t[o++], t[o++], t[o], t[o + 1], Yp, $p),
                    e = t[o++],
                    n = t[o++];
                  break;
                case Xp.A:
                  var s = t[o++],
                    l = t[o++],
                    h = t[o++],
                    u = t[o++],
                    c = t[o++],
                    d = t[o++] + c,
                    f = (t[o++],
                      1 - t[o++]);
                  1 == o && (i = Jp(c) * h + s,
                      r = tg(c) * u + l),
                    ci(s, l, h, u, c, d, f, Yp, $p),
                    e = Jp(d) * h + s,
                    n = tg(d) * u + l;
                  break;
                case Xp.R:
                  li(i = e = t[o++], r = n = t[o++], i + t[o++], r + t[o++], Yp, $p);
                  break;
                case Xp.Z:
                  e = i,
                    n = r
              }
              q(jp, jp, Yp),
                Y(qp, qp, $p)
            }
            return 0 === o && (jp[0] = jp[1] = qp[0] = qp[1] = 0),
              new Ft(jp[0], jp[1], qp[0] - jp[0], qp[1] - jp[1])
          },
          rebuildPath: function (t) {
            for (var e, n, i, r, o, a, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; c < u;) {
              var d = s[c++];
              switch (1 == c && (e = i = s[c],
                  n = r = s[c + 1]),
                d) {
                case Xp.M:
                  e = i = s[c++],
                    n = r = s[c++],
                    t.moveTo(i, r);
                  break;
                case Xp.L:
                  o = s[c++],
                    a = s[c++],
                    (ng(o - i) > l || ng(a - r) > h || c === u - 1) && (t.lineTo(o, a),
                      i = o,
                      r = a);
                  break;
                case Xp.C:
                  t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]),
                    i = s[c - 2],
                    r = s[c - 1];
                  break;
                case Xp.Q:
                  t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]),
                    i = s[c - 2],
                    r = s[c - 1];
                  break;
                case Xp.A:
                  var f = s[c++],
                    p = s[c++],
                    g = s[c++],
                    v = s[c++],
                    m = s[c++],
                    y = s[c++],
                    x = s[c++],
                    _ = s[c++],
                    w = g > v ? g : v,
                    b = g > v ? 1 : g / v,
                    M = g > v ? v / g : 1,
                    S = m + y;
                  Math.abs(g - v) > .001 ? (t.translate(f, p),
                      t.rotate(x),
                      t.scale(b, M),
                      t.arc(0, 0, w, m, S, 1 - _),
                      t.scale(1 / b, 1 / M),
                      t.rotate(-x),
                      t.translate(-f, -p)) : t.arc(f, p, w, m, S, 1 - _),
                    1 == c && (e = Jp(m) * g + f,
                      n = tg(m) * v + p),
                    i = Jp(S) * g + f,
                    r = tg(S) * v + p;
                  break;
                case Xp.R:
                  e = i = s[c],
                    n = r = s[c + 1],
                    t.rect(s[c++], s[c++], s[c++], s[c++]);
                  break;
                case Xp.Z:
                  t.closePath(),
                    i = e,
                    r = n
              }
            }
          }
        },
        rg.CMD = Xp;
      var og = 2 * Math.PI,
        ag = 2 * Math.PI,
        sg = 2 * Math.PI,
        lg = 1e-4,
        hg = [-1, -1, -1],
        ug = [-1, -1],
        cg = Af.prototype.getCanvasPattern,
        dg = Math.abs,
        fg = new rg(!0);
      Ti.prototype = {
          constructor: Ti,
          type: "path",
          __dirtyPath: !0,
          strokeContainThreshold: 5,
          brush: function (t, e) {
            var n = this.style,
              i = this.path || fg,
              r = n.hasStroke(),
              o = n.hasFill(),
              a = n.fill,
              s = n.stroke,
              l = o && !!a.colorStops,
              h = r && !!s.colorStops,
              u = o && !!a.image,
              c = r && !!s.image;
            if (n.bind(t, this, e),
              this.setTransform(t),
              this.__dirty) {
              var d;
              l && (d = d || this.getBoundingRect(),
                  this._fillGradient = n.getGradient(t, a, d)),
                h && (d = d || this.getBoundingRect(),
                  this._strokeGradient = n.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = cg.call(a, t)),
              h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = cg.call(s, t));
            var f = n.lineDash,
              p = n.lineDashOffset,
              g = !!t.setLineDash,
              v = this.getGlobalScale();
            i.setScale(v[0], v[1]),
              this.__dirtyPath || f && !g && r ? (i.beginPath(t),
                f && !g && (i.setLineDash(f),
                  i.setLineDashOffset(p)),
                this.buildPath(i, this.shape, !1),
                this.path && (this.__dirtyPath = !1)) : (t.beginPath(),
                this.path.rebuildPath(t)),
              o && i.fill(t),
              f && g && (t.setLineDash(f),
                t.lineDashOffset = p),
              r && i.stroke(t),
              f && g && t.setLineDash([]),
              this.restoreTransform(t),
              null != n.text && this.drawRectText(t, this.getBoundingRect())
          },
          buildPath: function (t, e, n) {},
          createPathProxy: function () {
            this.path = new rg
          },
          getBoundingRect: function () {
            var t = this._rect,
              e = this.style,
              n = !t;
            if (n) {
              var i = this.path;
              i || (i = this.path = new rg),
                this.__dirtyPath && (i.beginPath(),
                  this.buildPath(i, this.shape, !1)),
                t = i.getBoundingRect()
            }
            if (this._rect = t,
              e.hasStroke()) {
              var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
              if (this.__dirty || n) {
                r.copy(t);
                var o = e.lineWidth,
                  a = e.strokeNoScale ? this.getLineScale() : 1;
                e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)),
                  a > 1e-10 && (r.width += o / a,
                    r.height += o / a,
                    r.x -= o / a / 2,
                    r.y -= o / a / 2)
              }
              return r
            }
            return t
          },
          contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e),
              i = this.getBoundingRect(),
              r = this.style;
            if (t = n[0],
              e = n[1],
              i.contain(t, e)) {
              var o = this.path.data;
              if (r.hasStroke()) {
                var a = r.lineWidth,
                  s = r.strokeNoScale ? this.getLineScale() : 1;
                if (s > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)),
                    Ii(o, a / s, t, e)))
                  return !0
              }
              if (r.hasFill())
                return Si(o, t, e)
            }
            return !1
          },
          dirty: function (t) {
            null == t && (t = !0),
              t && (this.__dirtyPath = t,
                this._rect = null),
              this.__dirty = !0,
              this.__zr && this.__zr.refresh(),
              this.__clipTarget && this.__clipTarget.dirty()
          },
          animateShape: function (t) {
            return this.animate("shape", t)
          },
          attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e),
              this.__dirtyPath = !0,
              this._rect = null) : He.prototype.attrKV.call(this, t, e)
          },
          setShape: function (t, e) {
            var n = this.shape;
            if (n) {
              if (_(t))
                for (var i in t)
                  t.hasOwnProperty(i) && (n[i] = t[i]);
              else
                n[t] = e;
              this.dirty(!0)
            }
            return this
          },
          getLineScale: function () {
            var t = this.transform;
            return t && dg(t[0] - 1) > 1e-10 && dg(t[3] - 1) > 1e-10 ? Math.sqrt(dg(t[0] * t[3] - t[2] * t[1])) : 1
          }
        },
        Ti.extend = function (t) {
          var e = function (e) {
            Ti.call(this, e),
              t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
              this.shape = this.shape || {};
              var i = this.shape;
              for (var r in n)
                !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
          };
          l(e, Ti);
          for (var n in t)
            "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
          return e
        },
        l(Ti, He);
      var pg = [
          [],
          [],
          []
        ],
        gg = Math.sqrt,
        vg = Math.atan2,
        mg = function (t, e) {
          var n, i, r, o, a, s, l = t.data,
            h = Xp.M,
            u = Xp.C,
            c = Xp.L,
            d = Xp.R,
            f = Xp.A,
            p = Xp.Q;
          for (r = 0,
            o = 0; r < l.length;) {
            switch (n = l[r++],
              o = r,
              i = 0,
              n) {
              case h:
              case c:
                i = 1;
                break;
              case u:
                i = 3;
                break;
              case p:
                i = 2;
                break;
              case f:
                var g = e[4],
                  v = e[5],
                  m = gg(e[0] * e[0] + e[1] * e[1]),
                  y = gg(e[2] * e[2] + e[3] * e[3]),
                  x = vg(-e[1] / y, e[0] / m);
                l[r] *= m,
                  l[r++] += g,
                  l[r] *= y,
                  l[r++] += v,
                  l[r++] *= m,
                  l[r++] *= y,
                  l[r++] += x,
                  l[r++] += x,
                  o = r += 2;
                break;
              case d:
                s[0] = l[r++],
                  s[1] = l[r++],
                  j(s, s, e),
                  l[o++] = s[0],
                  l[o++] = s[1],
                  s[0] += l[r++],
                  s[1] += l[r++],
                  j(s, s, e),
                  l[o++] = s[0],
                  l[o++] = s[1]
            }
            for (a = 0; a < i; a++)
              (s = pg[a])[0] = l[r++],
              s[1] = l[r++],
              j(s, s, e),
              l[o++] = s[0],
              l[o++] = s[1]
          }
        },
        yg = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
        xg = Math.sqrt,
        _g = Math.sin,
        wg = Math.cos,
        bg = Math.PI,
        Mg = function (t) {
          return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        },
        Sg = function (t, e) {
          return (t[0] * e[0] + t[1] * e[1]) / (Mg(t) * Mg(e))
        },
        Ig = function (t, e) {
          return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Sg(t, e))
        },
        Tg = function (t) {
          He.call(this, t)
        };
      Tg.prototype = {
          constructor: Tg,
          type: "text",
          brush: function (t, e) {
            var n = this.style;
            this.__dirty && Se(n),
              n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""),
              n.bind(t, this, e),
              Ge(i, n) && (this.setTransform(t),
                Te(this, t, i, n),
                this.restoreTransform(t))
          },
          getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && Se(t),
              !this._rect) {
              var e = t.text;
              null != e ? e += "" : e = "";
              var n = le(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
              if (n.x += t.x || 0,
                n.y += t.y || 0,
                Be(t.textStroke, t.textStrokeWidth)) {
                var i = t.textStrokeWidth;
                n.x -= i / 2,
                  n.y -= i / 2,
                  n.width += i,
                  n.height += i
              }
              this._rect = n
            }
            return this._rect
          }
        },
        l(Tg, He);
      var Ag = Ti.extend({
          type: "circle",
          shape: {
            cx: 0,
            cy: 0,
            r: 0
          },
          buildPath: function (t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy),
              t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
          }
        }),
        Cg = [
          ["shadowBlur", 0],
          ["shadowColor", "#000"],
          ["shadowOffsetX", 0],
          ["shadowOffsetY", 0]
        ],
        kg = function (t) {
          return vd.browser.ie && vd.browser.version >= 11 ? function () {
              var e, n = this.__clipPaths,
                i = this.style;
              if (n)
                for (var r = 0; r < n.length; r++) {
                  var o = n[r],
                    a = o && o.shape,
                    s = o && o.type;
                  if (a && ("sector" === s && a.startAngle === a.endAngle || "rect" === s && (!a.width || !a.height))) {
                    for (l = 0; l < Cg.length; l++)
                      Cg[l][2] = i[Cg[l][0]],
                      i[Cg[l][0]] = Cg[l][1];
                    e = !0;
                    break
                  }
                }
              if (t.apply(this, arguments),
                e)
                for (var l = 0; l < Cg.length; l++)
                  i[Cg[l][0]] = Cg[l][2]
            } :
            t
        },
        Dg = Ti.extend({
          type: "sector",
          shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
          },
          brush: kg(Ti.prototype.brush),
          buildPath: function (t, e) {
            var n = e.cx,
              i = e.cy,
              r = Math.max(e.r0 || 0, 0),
              o = Math.max(e.r, 0),
              a = e.startAngle,
              s = e.endAngle,
              l = e.clockwise,
              h = Math.cos(a),
              u = Math.sin(a);
            t.moveTo(h * r + n, u * r + i),
              t.lineTo(h * o + n, u * o + i),
              t.arc(n, i, o, a, s, !l),
              t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i),
              0 !== r && t.arc(n, i, r, s, a, l),
              t.closePath()
          }
        }),
        Lg = Ti.extend({
          type: "ring",
          shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
          },
          buildPath: function (t, e) {
            var n = e.cx,
              i = e.cy,
              r = 2 * Math.PI;
            t.moveTo(n + e.r, i),
              t.arc(n, i, e.r, 0, r, !1),
              t.moveTo(n + e.r0, i),
              t.arc(n, i, e.r0, 0, r, !0)
          }
        }),
        Pg = function (t, e) {
          for (var n = t.length, i = [], r = 0, o = 1; o < n; o++)
            r += U(t[o - 1], t[o]);
          var a = r / 2;
          a = a < n ? n : a;
          for (o = 0; o < a; o++) {
            var s, l, h, u = o / (a - 1) * (e ? n : n - 1),
              c = Math.floor(u),
              d = u - c,
              f = t[c % n];
            e ? (s = t[(c - 1 + n) % n],
              l = t[(c + 1) % n],
              h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1],
              l = t[c > n - 2 ? n - 1 : c + 1],
              h = t[c > n - 3 ? n - 1 : c + 2]);
            var p = d * d,
              g = d * p;
            i.push([Pi(s[0], f[0], l[0], h[0], d, p, g), Pi(s[1], f[1], l[1], h[1], d, p, g)])
          }
          return i
        },
        Og = function (t, e, n, i) {
          var r, o, a, s, l = [],
            h = [],
            u = [],
            c = [];
          if (i) {
            a = [1 / 0, 1 / 0],
              s = [-1 / 0, -1 / 0];
            for (var d = 0, f = t.length; d < f; d++)
              q(a, a, t[d]),
              Y(s, s, t[d]);
            q(a, a, i[0]),
              Y(s, s, i[1])
          }
          for (var d = 0, f = t.length; d < f; d++) {
            var p = t[d];
            if (n)
              r = t[d ? d - 1 : f - 1],
              o = t[(d + 1) % f];
            else {
              if (0 === d || d === f - 1) {
                l.push(B(t[d]));
                continue
              }
              r = t[d - 1],
                o = t[d + 1]
            }
            W(h, o, r),
              F(h, h, e);
            var g = U(p, r),
              v = U(p, o),
              m = g + v;
            0 !== m && (g /= m,
                v /= m),
              F(u, h, -g),
              F(c, h, v);
            var y = R([], p, u),
              x = R([], p, c);
            i && (Y(y, y, a),
                q(y, y, s),
                Y(x, x, a),
                q(x, x, s)),
              l.push(y),
              l.push(x)
          }
          return n && l.push(l.shift()),
            l
        },
        zg = Ti.extend({
          type: "polygon",
          shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
          },
          buildPath: function (t, e) {
            Oi(t, e, !0)
          }
        }),
        Eg = Ti.extend({
          type: "polyline",
          shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
          },
          style: {
            stroke: "#000",
            fill: null
          },
          buildPath: function (t, e) {
            Oi(t, e, !1)
          }
        }),
        Ng = Ti.extend({
          type: "rect",
          shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
          },
          buildPath: function (t, e) {
            var n = e.x,
              i = e.y,
              r = e.width,
              o = e.height;
            e.r ? Me(t, e) : t.rect(n, i, r, o),
              t.closePath()
          }
        }),
        Bg = Ti.extend({
          type: "line",
          shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
          },
          style: {
            stroke: "#000",
            fill: null
          },
          buildPath: function (t, e) {
            var n = e.x1,
              i = e.y1,
              r = e.x2,
              o = e.y2,
              a = e.percent;
            0 !== a && (t.moveTo(n, i),
              a < 1 && (r = n * (1 - a) + r * a,
                o = i * (1 - a) + o * a),
              t.lineTo(r, o))
          },
          pointAt: function (t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
          }
        }),
        Rg = [],
        Vg = Ti.extend({
          type: "bezier-curve",
          shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
          },
          style: {
            stroke: "#000",
            fill: null
          },
          buildPath: function (t, e) {
            var n = e.x1,
              i = e.y1,
              r = e.x2,
              o = e.y2,
              a = e.cpx1,
              s = e.cpy1,
              l = e.cpx2,
              h = e.cpy2,
              u = e.percent;
            0 !== u && (t.moveTo(n, i),
              null == l || null == h ? (u < 1 && (ai(n, a, r, u, Rg),
                  a = Rg[1],
                  r = Rg[2],
                  ai(i, s, o, u, Rg),
                  s = Rg[1],
                  o = Rg[2]),
                t.quadraticCurveTo(a, s, r, o)) : (u < 1 && (ti(n, a, l, r, u, Rg),
                  a = Rg[1],
                  l = Rg[2],
                  r = Rg[3],
                  ti(i, s, h, o, u, Rg),
                  s = Rg[1],
                  h = Rg[2],
                  o = Rg[3]),
                t.bezierCurveTo(a, s, l, h, r, o)))
          },
          pointAt: function (t) {
            return zi(this.shape, t, !1)
          },
          tangentAt: function (t) {
            var e = zi(this.shape, t, !0);
            return Z(e, e)
          }
        }),
        Wg = Ti.extend({
          type: "arc",
          shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
          },
          style: {
            stroke: "#000",
            fill: null
          },
          buildPath: function (t, e) {
            var n = e.cx,
              i = e.cy,
              r = Math.max(e.r, 0),
              o = e.startAngle,
              a = e.endAngle,
              s = e.clockwise,
              l = Math.cos(o),
              h = Math.sin(o);
            t.moveTo(l * r + n, h * r + i),
              t.arc(n, i, r, o, a, !s)
          }
        }),
        Gg = Ti.extend({
          type: "compound",
          shape: {
            paths: null
          },
          _updatePathDirty: function () {
            for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++)
              t = t || e[n].__dirtyPath;
            this.__dirtyPath = t,
              this.__dirty = this.__dirty || t
          },
          beforeBrush: function () {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++)
              t[n].path || t[n].createPathProxy(),
              t[n].path.setScale(e[0], e[1])
          },
          buildPath: function (t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++)
              n[i].buildPath(t, n[i].shape, !0)
          },
          afterBrush: function () {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
              t[e].__dirtyPath = !1
          },
          getBoundingRect: function () {
            return this._updatePathDirty(),
              Ti.prototype.getBoundingRect.call(this)
          }
        }),
        Hg = function (t) {
          this.colorStops = t || []
        };
      Hg.prototype = {
        constructor: Hg,
        addColorStop: function (t, e) {
          this.colorStops.push({
            offset: t,
            color: e
          })
        }
      };
      var Fg = function (t, e, n, i, r, o) {
        this.x = null == t ? 0 : t,
          this.y = null == e ? 0 : e,
          this.x2 = null == n ? 1 : n,
          this.y2 = null == i ? 0 : i,
          this.type = "linear",
          this.global = o || !1,
          Hg.call(this, r)
      };
      Fg.prototype = {
          constructor: Fg
        },
        l(Fg, Hg);
      var Zg = function (t, e, n, i, r) {
        this.x = null == t ? .5 : t,
          this.y = null == e ? .5 : e,
          this.r = null == n ? .5 : n,
          this.type = "radial",
          this.global = r || !1,
          Hg.call(this, i)
      };
      Zg.prototype = {
          constructor: Zg
        },
        l(Zg, Hg);
      var Ug = Math.round,
        Xg = Math.max,
        jg = Math.min,
        qg = {},
        Yg = (Object.freeze || Object)({
          extendShape: Ei,
          extendPath: function (t, e) {
            return Li(t, e)
          },
          makePath: Ni,
          makeImage: Bi,
          mergePath: function (t, e) {
            for (var n = [], i = t.length, r = 0; r < i; r++) {
              var o = t[r];
              o.path || o.createPathProxy(),
                o.__dirtyPath && o.buildPath(o.path, o.shape, !0),
                n.push(o.path)
            }
            var a = new Ti(e);
            return a.createPathProxy(),
              a.buildPath = function (t) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e)
              },
              a
          },
          resizePath: Vi,
          subPixelOptimizeLine: Wi,
          subPixelOptimizeRect: Gi,
          subPixelOptimize: Hi,
          setHoverStyle: er,
          setLabelStyle: nr,
          setTextStyle: ir,
          setText: function (t, e, n) {
            var i, r = {
              isRectText: !0
            };
            !1 === n ? i = !0 : r.autoColor = n,
              rr(t, e, r, i),
              t.host && t.host.dirty && t.host.dirty(!1)
          },
          getFont: ur,
          updateProps: dr,
          initProps: fr,
          getTransform: pr,
          applyTransform: gr,
          transformDirection: vr,
          groupTransition: mr,
          clipPointsByRect: yr,
          clipRectByRect: function (t, e) {
            var n = Xg(t.x, e.x),
              i = jg(t.x + t.width, e.x + e.width),
              r = Xg(t.y, e.y),
              o = jg(t.y + t.height, e.y + e.height);
            if (i >= n && o >= r)
              return {
                x: n,
                y: r,
                width: i - n,
                height: o - r
              }
          },
          createIcon: xr,
          Group: yf,
          Image: Fe,
          Text: Tg,
          Circle: Ag,
          Sector: Dg,
          Ring: Lg,
          Polygon: zg,
          Polyline: Eg,
          Rect: Ng,
          Line: Bg,
          BezierCurve: Vg,
          Arc: Wg,
          CompoundPath: Gg,
          LinearGradient: Fg,
          RadialGradient: Zg,
          BoundingRect: Ft
        }),
        $g = ["textStyle", "color"],
        Kg = {
          getTextColor: function (t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get($g) : null)
          },
          getFont: function () {
            return ur({
              fontStyle: this.getShallow("fontStyle"),
              fontWeight: this.getShallow("fontWeight"),
              fontSize: this.getShallow("fontSize"),
              fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
          },
          getTextRect: function (t) {
            return le(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
          }
        },
        Qg = bp([
          ["fill", "color"],
          ["stroke", "borderColor"],
          ["lineWidth", "borderWidth"],
          ["opacity"],
          ["shadowBlur"],
          ["shadowOffsetX"],
          ["shadowOffsetY"],
          ["shadowColor"],
          ["textPosition"],
          ["textAlign"]
        ]),
        Jg = {
          getItemStyle: function (t, e) {
            var n = Qg(this, t, e),
              i = this.getBorderLineDash();
            return i && (n.lineDash = i),
              n
          },
          getBorderLineDash: function () {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
          }
        },
        tv = h;
      _r.prototype = {
          constructor: _r,
          init: null,
          mergeOption: function (t) {
            n(this.option, t, !0)
          },
          get: function (t, e) {
            return null == t ? this.option : wr(this.option, this.parsePath(t), !e && br(this, t))
          },
          getShallow: function (t, e) {
            var n = this.option,
              i = null == n ? n : n[t],
              r = !e && br(this, t);
            return null == i && r && (i = r.getShallow(t)),
              i
          },
          getModel: function (t, e) {
            var n, i = null == t ? this.option : wr(this.option, t = this.parsePath(t));
            return e = e || (n = br(this, t)) && n.getModel(t),
              new _r(i, e, this.ecModel)
          },
          isEmpty: function () {
            return null == this.option
          },
          restoreData: function () {},
          clone: function () {
            return new(0,
              this.constructor)(e(this.option))
          },
          setReadOnly: function (t) {},
          parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")),
              t
          },
          customizeGetParent: function (t) {
            Vn(this, "getParent", t)
          },
          isAnimationEnabled: function () {
            if (!vd.node) {
              if (null != this.option.animation)
                return !!this.option.animation;
              if (this.parentModel)
                return this.parentModel.isAnimationEnabled()
            }
          }
        },
        Zn(_r),
        tv(_r, Sp),
        tv(_r, Tp),
        tv(_r, Kg),
        tv(_r, Jg);
      var ev = c,
        nv = _,
        iv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        rv = {
          getDataParams: function (t, e) {
            var n = this.getData(e),
              i = this.getRawValue(t, e),
              r = n.getRawIndex(t),
              o = n.getName(t, !0),
              a = n.getRawDataItem(t),
              s = n.getItemVisual(t, "color");
            return {
              componentType: this.mainType,
              componentSubType: this.subType,
              seriesType: "series" === this.mainType ? this.subType : null,
              seriesIndex: this.seriesIndex,
              seriesId: this.id,
              seriesName: this.name,
              name: o,
              dataIndex: r,
              data: a,
              dataType: e,
              value: i,
              color: s,
              marker: Nn(s),
              $vars: ["seriesName", "name", "value"]
            }
          },
          getFormattedLabel: function (t, e, n, i, r) {
            e = e || "normal";
            var o = this.getData(n).getItemModel(t),
              a = this.getDataParams(t, n);
            null != i && a.value instanceof Array && (a.value = a.value[i]);
            var s = o.get([r || "label", e, "formatter"]);
            return "function" == typeof s ? (a.status = e,
              s(a)) : "string" == typeof s ? En(s, a) : void 0
          },
          getRawValue: function (t, e) {
            var n = this.getData(e).getRawDataItem(t);
            if (null != n)
              return !nv(n) || n instanceof Array ? n : n.value
          },
          formatTooltip: z
        },
        ov = function () {
          var t = 0;
          return function () {
            var e = "\0__ec_prop_getter_" + t++;
            return function (t) {
              return t[e] || (t[e] = {})
            }
          }
        }(),
        av = 0,
        sv = "_",
        lv = c,
        hv = ["left", "right", "top", "bottom", "width", "height"],
        uv = [
          ["width", "left", "right"],
          ["height", "top", "bottom"]
        ],
        cv = Rr,
        dv = (v(Rr, "vertical"),
          v(Rr, "horizontal"), {
            getBoxLayoutParams: function () {
              return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
              }
            }
          }),
        fv = Array.prototype.push,
        pv = _r.extend({
          type: "component",
          id: "",
          name: "",
          mainType: "",
          subType: "",
          componentIndex: 0,
          defaultOption: null,
          ecModel: null,
          dependentModels: [],
          uid: null,
          layoutMode: null,
          $constructor: function (t, e, n, i) {
            _r.call(this, t, e, n, i),
              this.uid = Br("componentModel")
          },
          init: function (t, e, n, i) {
            this.mergeDefaultAndTheme(t, n)
          },
          mergeDefaultAndTheme: function (t, e) {
            var i = this.layoutMode,
              r = i ? Hr(t) : {};
            n(t, e.getTheme().get(this.mainType)),
              n(t, this.getDefaultOption()),
              i && Gr(t, r, i)
          },
          mergeOption: function (t, e) {
            n(this.option, t, !0);
            var i = this.layoutMode;
            i && Gr(this.option, t, i)
          },
          optionUpdated: function (t, e) {},
          getDefaultOption: function () {
            if (!Gn(this, "__defaultOption")) {
              for (var t = [], e = this.constructor; e;) {
                var i = e.prototype.defaultOption;
                i && t.push(i),
                  e = e.superClass
              }
              for (var r = {}, o = t.length - 1; o >= 0; o--)
                r = n(r, t[o], !0);
              Vn(this, "__defaultOption", r)
            }
            return Wn(this, "__defaultOption")
          },
          getReferringComponents: function (t) {
            return this.ecModel.queryComponents({
              mainType: t,
              index: this.get(t + "Index", !0),
              id: this.get(t + "Id", !0)
            })
          }
        });
      jn(pv, {
          registerWhenExtend: !0
        }),
        function (t) {
          var e = {};
          t.registerSubTypeDefaulter = function (t, n) {
              t = Hn(t),
                e[t.main] = n
            },
            t.determineSubType = function (n, i) {
              var r = i.type;
              if (!r) {
                var o = Hn(n).main;
                t.hasSubTypes(n) && e[o] && (r = e[o](i))
              }
              return r
            }
        }(pv),
        function (t, e) {
          function n(t) {
            var n = {},
              o = [];
            return c(t, function (a) {
              var l = i(n, a),
                h = r(l.originalDeps = e(a), t);
              l.entryCount = h.length,
                0 === l.entryCount && o.push(a),
                c(h, function (t) {
                  s(l.predecessor, t) < 0 && l.predecessor.push(t);
                  var e = i(n, t);
                  s(e.successor, t) < 0 && e.successor.push(a)
                })
            }), {
              graph: n,
              noEntryList: o
            }
          }

          function i(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
              }),
              t[e]
          }

          function r(t, e) {
            var n = [];
            return c(t, function (t) {
                s(e, t) >= 0 && n.push(t)
              }),
              n
          }
          t.topologicalTravel = function (t, e, i, r) {
            function o(t) {
              s[t].entryCount--,
                0 === s[t].entryCount && l.push(t)
            }
            if (t.length) {
              var a = n(e),
                s = a.graph,
                l = a.noEntryList,
                h = {};
              for (c(t, function (t) {
                  h[t] = !0
                }); l.length;) {
                var u = l.pop(),
                  d = s[u],
                  f = !!h[u];
                f && (i.call(r, u, d.originalDeps.slice()),
                    delete h[u]),
                  c(d.successor, f ? function (t) {
                      h[t] = !0,
                        o(t)
                    } :
                    o)
              }
              c(h, function () {
                throw new Error("Circle dependency may exists")
              })
            }
          }
        }(pv, function (t) {
          var e = [];
          return c(pv.getClassesByMainType(t), function (t) {
              fv.apply(e, t.prototype.dependencies || [])
            }),
            d(e, function (t) {
              return Hn(t).main
            })
        }),
        h(pv, dv);
      var gv = "";
      "undefined" != typeof navigator && (gv = navigator.platform || "");
      var vv = {
          color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
          textStyle: {
            fontFamily: gv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
          },
          blendMode: null,
          animation: "auto",
          animationDuration: 1e3,
          animationDurationUpdate: 300,
          animationEasing: "exponentialOut",
          animationEasingUpdate: "cubicOut",
          animationThreshold: 2e3,
          progressiveThreshold: 3e3,
          progressive: 400,
          hoverLayerThreshold: 3e3,
          useUTC: !1
        },
        mv = {
          clearColorPalette: function () {
            Vn(this, "colorIdx", 0),
              Vn(this, "colorNameMap", {})
          },
          getColorFromPalette: function (t, e) {
            var n = Wn(e = e || this, "colorIdx") || 0,
              i = Wn(e, "colorNameMap") || Vn(e, "colorNameMap", {});
            if (i.hasOwnProperty(t))
              return i[t];
            var r = this.get("color", !0) || [];
            if (r.length) {
              var o = r[n];
              return t && (i[t] = o),
                Vn(e, "colorIdx", (n + 1) % r.length),
                o
            }
          }
        },
        yv = c,
        xv = p,
        _v = d,
        wv = m,
        bv = s,
        Mv = _,
        Sv = "\0_ec_inner",
        Iv = _r.extend({
          constructor: Iv,
          init: function (t, e, n, i) {
            n = n || {},
              this.option = null,
              this._theme = new _r(n),
              this._optionManager = i
          },
          setOption: function (t, e) {
            k(!(Sv in t), "please use chart.getOption()"),
              this._optionManager.setOption(t, e),
              this.resetOption(null)
          },
          resetOption: function (t) {
            var e = !1,
              n = this._optionManager;
            if (!t || "recreate" === t) {
              var i = n.mountOption("recreate" === t);
              this.option && "recreate" !== t ? (this.restoreData(),
                  this.mergeOption(i)) : Ur.call(this, i),
                e = !0
            }
            if ("timeline" !== t && "media" !== t || this.restoreData(),
              !t || "recreate" === t || "timeline" === t) {
              var r = n.getTimelineOption(this);
              r && (this.mergeOption(r),
                e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
              var o = n.getMediaOption(this, this._api);
              o.length && yv(o, function (t) {
                this.mergeOption(t, e = !0)
              }, this)
            }
            return e
          },
          mergeOption: function (t) {
            var i = this.option,
              o = this._componentsMap,
              a = [];
            yv(t, function (t, r) {
                null != t && (pv.hasClass(r) ? a.push(r) : i[r] = null == i[r] ? e(t) : n(i[r], t, !0))
              }),
              pv.topologicalTravel(a, pv.getAllClassMainTypes(), function (e, n) {
                var a = Mr(t[e]),
                  s = Cr(o.get(e), a);
                kr(s),
                  yv(s, function (t, n) {
                    var i = t.option;
                    Mv(i) && (t.keyInfo.mainType = e,
                      t.keyInfo.subType = jr(e, i, t.exist))
                  });
                var l = Xr(o, n);
                i[e] = [],
                  o.set(e, []),
                  yv(s, function (t, n) {
                    var a = t.exist,
                      s = t.option;
                    if (k(Mv(s) || a, "Empty component definition"),
                      s) {
                      var h = pv.getClass(e, t.keyInfo.subType, !0);
                      if (a && a instanceof h)
                        a.name = t.keyInfo.name,
                        a.mergeOption(s, this),
                        a.optionUpdated(s, !1);
                      else {
                        var u = r({
                          dependentModels: l,
                          componentIndex: n
                        }, t.keyInfo);
                        r(a = new h(s, this, this, u), u),
                          a.init(s, this, this, u),
                          a.optionUpdated(null, !0)
                      }
                    } else
                      a.mergeOption({}, this),
                      a.optionUpdated({}, !1);
                    o.get(e)[n] = a,
                      i[e][n] = a.option
                  }, this),
                  "series" === e && (this._seriesIndices = qr(o.get("series")))
              }, this),
              this._seriesIndices = this._seriesIndices || []
          },
          getOption: function () {
            var t = e(this.option);
            return yv(t, function (e, n) {
                if (pv.hasClass(n)) {
                  for (var i = (e = Mr(e)).length - 1; i >= 0; i--)
                    Dr(e[i]) && e.splice(i, 1);
                  t[n] = e
                }
              }),
              delete t[Sv],
              t
          },
          getTheme: function () {
            return this._theme
          },
          getComponent: function (t, e) {
            var n = this._componentsMap.get(t);
            if (n)
              return n[e || 0]
          },
          queryComponents: function (t) {
            var e = t.mainType;
            if (!e)
              return [];
            var n = t.index,
              i = t.id,
              r = t.name,
              o = this._componentsMap.get(e);
            if (!o || !o.length)
              return [];
            var a;
            if (null != n)
              wv(n) || (n = [n]),
              a = xv(_v(n, function (t) {
                return o[t]
              }), function (t) {
                return !!t
              });
            else if (null != i) {
              var s = wv(i);
              a = xv(o, function (t) {
                return s && bv(i, t.id) >= 0 || !s && t.id === i
              })
            } else if (null != r) {
              var l = wv(r);
              a = xv(o, function (t) {
                return l && bv(r, t.name) >= 0 || !l && t.name === r
              })
            } else
              a = o.slice();
            return Yr(a, t)
          },
          findComponents: function (t) {
            var e = t.query,
              n = t.mainType,
              i = function (t) {
                var e = n + "Index",
                  i = n + "Id",
                  r = n + "Name";
                return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                  mainType: n,
                  index: t[e],
                  id: t[i],
                  name: t[r]
                }
              }(e);
            return function (e) {
              return t.filter ? xv(e, t.filter) : e
            }(Yr(i ? this.queryComponents(i) : this._componentsMap.get(n), t))
          },
          eachComponent: function (t, e, n) {
            var i = this._componentsMap;
            if ("function" == typeof t)
              n = e,
              e = t,
              i.each(function (t, i) {
                yv(t, function (t, r) {
                  e.call(n, i, t, r)
                })
              });
            else if (x(t))
              yv(i.get(t), e, n);
            else if (Mv(t)) {
              var r = this.findComponents(t);
              yv(r, e, n)
            }
          },
          getSeriesByName: function (t) {
            var e = this._componentsMap.get("series");
            return xv(e, function (e) {
              return e.name === t
            })
          },
          getSeriesByIndex: function (t) {
            return this._componentsMap.get("series")[t]
          },
          getSeriesByType: function (t) {
            var e = this._componentsMap.get("series");
            return xv(e, function (e) {
              return e.subType === t
            })
          },
          getSeries: function () {
            return this._componentsMap.get("series").slice()
          },
          eachSeries: function (t, e) {
            $r(),
              yv(this._seriesIndices, function (n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n)
              }, this)
          },
          eachRawSeries: function (t, e) {
            yv(this._componentsMap.get("series"), t, e)
          },
          eachSeriesByType: function (t, e, n) {
            $r(),
              yv(this._seriesIndices, function (i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i)
              }, this)
          },
          eachRawSeriesByType: function (t, e, n) {
            return yv(this.getSeriesByType(t), e, n)
          },
          isSeriesFiltered: function (t) {
            return $r(),
              s(this._seriesIndices, t.componentIndex) < 0
          },
          getCurrentSeriesIndices: function () {
            return (this._seriesIndices || []).slice()
          },
          filterSeries: function (t, e) {
            $r();
            var n = xv(this._componentsMap.get("series"), t, e);
            this._seriesIndices = qr(n)
          },
          restoreData: function () {
            var t = this._componentsMap;
            this._seriesIndices = qr(t.get("series"));
            var e = [];
            t.each(function (t, n) {
                e.push(n)
              }),
              pv.topologicalTravel(e, pv.getAllClassMainTypes(), function (e, n) {
                yv(t.get(e), function (t) {
                  t.restoreData()
                })
              })
          }
        });
      h(Iv, mv);
      var Tv = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        Av = {};
      Qr.prototype = {
          constructor: Qr,
          create: function (t, e) {
            var n = [];
            c(Av, function (i, r) {
                var o = i.create(t, e);
                n = n.concat(o || [])
              }),
              this._coordinateSystems = n
          },
          update: function (t, e) {
            c(this._coordinateSystems, function (n) {
              n.update && n.update(t, e)
            })
          },
          getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
          }
        },
        Qr.register = function (t, e) {
          Av[t] = e
        },
        Qr.get = function (t) {
          return Av[t]
        };
      var Cv = c,
        kv = e,
        Dv = d,
        Lv = n,
        Pv = /^(min|max)?(.+)$/;
      Jr.prototype = {
        constructor: Jr,
        setOption: function (t, e) {
          t = kv(t, !0);
          var n = this._optionBackup,
            i = to.call(this, t, e, !n);
          this._newBaseOption = i.baseOption,
            n ? (ro(n.baseOption, i.baseOption),
              i.timelineOptions.length && (n.timelineOptions = i.timelineOptions),
              i.mediaList.length && (n.mediaList = i.mediaList),
              i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        },
        mountOption: function (t) {
          var e = this._optionBackup;
          return this._timelineOptions = Dv(e.timelineOptions, kv),
            this._mediaList = Dv(e.mediaList, kv),
            this._mediaDefault = kv(e.mediaDefault),
            this._currentMediaIndices = [],
            kv(t ? e.baseOption : this._newBaseOption)
        },
        getTimelineOption: function (t) {
          var e, n = this._timelineOptions;
          if (n.length) {
            var i = t.getComponent("timeline");
            i && (e = kv(n[i.getCurrentIndex()], !0))
          }
          return e
        },
        getMediaOption: function (t) {
          var e = this._api.getWidth(),
            n = this._api.getHeight(),
            i = this._mediaList,
            r = this._mediaDefault,
            o = [],
            a = [];
          if (!i.length && !r)
            return a;
          for (var s = 0, l = i.length; s < l; s++)
            eo(i[s].query, e, n) && o.push(s);
          return !o.length && r && (o = [-1]),
            o.length && !io(o, this._currentMediaIndices) && (a = Dv(o, function (t) {
              return kv(-1 === t ? r.option : i[t].option)
            })),
            this._currentMediaIndices = o,
            a
        }
      };
      var Ov = c,
        zv = _,
        Ev = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Nv = function (t, e) {
          Ov(ho(t.series), function (t) {
            zv(t) && lo(t)
          });
          var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
          e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
            Ov(n, function (e) {
              Ov(ho(t[e]), function (t) {
                t && (ao(t, "axisLabel"),
                  ao(t.axisPointer, "label"))
              })
            }),
            Ov(ho(t.parallel), function (t) {
              var e = t && t.parallelAxisDefault;
              ao(e, "axisLabel"),
                ao(e && e.axisPointer, "label")
            }),
            Ov(ho(t.calendar), function (t) {
              ao(t, "dayLabel"),
                ao(t, "monthLabel"),
                ao(t, "yearLabel")
            }),
            Ov(ho(t.radar), function (t) {
              ao(t, "name")
            }),
            Ov(ho(t.geo), function (t) {
              zv(t) && (so(t.label),
                Ov(ho(t.regions), function (t) {
                  so(t.label)
                }))
            }),
            so(uo(t.timeline).label),
            ao(uo(t.axisPointer), "label"),
            ao(uo(t.tooltip).axisPointer, "label")
        },
        Bv = [
          ["x", "left"],
          ["y", "top"],
          ["x2", "right"],
          ["y2", "bottom"]
        ],
        Rv = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        Vv = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
        Wv = function (t, e) {
          Nv(t, e),
            t.series = Mr(t.series),
            c(t.series, function (t) {
              if (_(t)) {
                var e = t.type;
                if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise),
                  "gauge" === e) {
                  var n = co(t, "pointer.color");
                  null != n && fo(t, "itemStyle.normal.color", n)
                }
                for (var i = 0; i < Vv.length; i++)
                  if (Vv[i] === t.type) {
                    po(t);
                    break
                  }
              }
            }),
            t.dataRange && (t.visualMap = t.dataRange),
            c(Rv, function (e) {
              var n = t[e];
              n && (m(n) || (n = [n]),
                c(n, function (t) {
                  po(t)
                }))
            })
        },
        Gv = pv.extend({
          type: "series.__base__",
          seriesIndex: 0,
          coordinateSystem: null,
          defaultOption: null,
          legendDataProvider: null,
          visualColorAccessPath: "itemStyle.normal.color",
          layoutMode: null,
          init: function (t, e, n, i) {
            this.seriesIndex = this.componentIndex,
              this.mergeDefaultAndTheme(t, n);
            var r = this.getInitialData(t, n);
            Vn(this, "dataBeforeProcessed", r),
              this.restoreData()
          },
          mergeDefaultAndTheme: function (t, e) {
            var i = this.layoutMode,
              r = i ? Hr(t) : {},
              o = this.subType;
            pv.hasClass(o) && (o += "Series"),
              n(t, e.getTheme().get(this.subType)),
              n(t, this.getDefaultOption()),
              Sr(t.label, ["show"]),
              this.fillDataTextStyle(t.data),
              i && Gr(t, r, i)
          },
          mergeOption: function (t, e) {
            t = n(this.option, t, !0),
              this.fillDataTextStyle(t.data);
            var i = this.layoutMode;
            i && Gr(this.option, t, i);
            var r = this.getInitialData(t, e);
            r && (Vn(this, "data", r),
              Vn(this, "dataBeforeProcessed", r.cloneShallow()))
          },
          fillDataTextStyle: function (t) {
            if (t)
              for (var e = ["show"], n = 0; n < t.length; n++)
                t[n] && t[n].label && Sr(t[n].label, e)
          },
          getInitialData: function () {},
          getData: function (t) {
            var e = Wn(this, "data");
            return null == t ? e : e.getLinkedData(t)
          },
          setData: function (t) {
            Vn(this, "data", t)
          },
          getRawData: function () {
            return Wn(this, "dataBeforeProcessed")
          },
          coordDimToDataDim: function (t) {
            return zr(this.getData(), t)
          },
          dataDimToCoordDim: function (t) {
            return Or(this.getData(), t)
          },
          getBaseAxis: function () {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
          },
          formatTooltip: function (t, e, n) {
            var i = Wn(this, "data"),
              r = this.getRawValue(t),
              o = m(r) ? function (n) {
                function r(t, n) {
                  var r = i.getDimensionInfo(n);
                  if (r && !1 !== r.otherDims.tooltip) {
                    var s = r.type,
                      l = (o ? "- " + (r.tooltipName || r.name) + ": " : "") + ("ordinal" === s ? t + "" : "time" === s ? e ? "" : Bn("yyyy/MM/dd hh:mm:ss", t) : Pn(t));
                    l && a.push(zn(l))
                  }
                }
                var o = f(n, function (t, e, n) {
                    var r = i.getDimensionInfo(n);
                    return t |= r && !1 !== r.tooltip && null != r.tooltipName
                  }, 0),
                  a = [],
                  s = Er(i, "tooltip");
                return s.length ? c(s, function (e) {
                    r(i.get(e, t), e)
                  }) : c(n, r),
                  (o ? "<br/>" : "") + a.join(o ? "<br/>" : ", ")
              }(r) : zn(Pn(r)),
              a = i.getName(t),
              s = i.getItemVisual(t, "color");
            _(s) && s.colorStops && (s = (s.colorStops[0] || {}).color);
            var l = Nn(s = s || "transparent"),
              h = this.name;
            return "\0-" === h && (h = ""),
              h = h ? zn(h) + (e ? ": " : "<br/>") : "",
              e ? l + h + o : h + l + (a ? zn(a) + ": " + o : o)
          },
          isAnimationEnabled: function () {
            if (vd.node)
              return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1),
              t
          },
          restoreData: function () {
            Vn(this, "data", Wn(this, "dataBeforeProcessed").cloneShallow())
          },
          getColorFromPalette: function (t, e) {
            var n = this.ecModel,
              i = mv.getColorFromPalette.call(this, t, e);
            return i || (i = n.getColorFromPalette(t, e)),
              i
          },
          getAxisTooltipData: null,
          getTooltipPosition: null
        });
      h(Gv, rv),
        h(Gv, mv);
      var Hv = function () {
        this.group = new yf,
          this.uid = Br("viewComponent")
      };
      Hv.prototype = {
        constructor: Hv,
        init: function (t, e) {},
        render: function (t, e, n, i) {},
        dispose: function () {}
      };
      var Fv = Hv.prototype;
      Fv.updateView = Fv.updateLayout = Fv.updateVisual = function (t, e, n, i) {},
        Zn(Hv),
        jn(Hv, {
          registerWhenExtend: !0
        }),
        go.prototype = {
          type: "chart",
          init: function (t, e) {},
          render: function (t, e, n, i) {},
          highlight: function (t, e, n, i) {
            mo(t.getData(), i, "emphasis")
          },
          downplay: function (t, e, n, i) {
            mo(t.getData(), i, "normal")
          },
          remove: function (t, e) {
            this.group.removeAll()
          },
          dispose: function () {}
        };
      var Zv = go.prototype;
      Zv.updateView = Zv.updateLayout = Zv.updateVisual = function (t, e, n, i) {
          this.render(t, e, n, i)
        },
        Zn(go),
        jn(go, {
          registerWhenExtend: !0
        });
      var Uv = "\0__throttleOriginMethod",
        Xv = "\0__throttleRate",
        jv = "\0__throttleType",
        qv = Math.PI,
        Yv = c,
        $v = pv.parseClassType,
        Kv = "3.8.0",
        Qv = {
          zrender: "3.7.0"
        },
        Jv = 1e3,
        tm = 1e3,
        em = 3e3,
        nm = {
          PROCESSOR: {
            FILTER: Jv,
            STATISTIC: 5e3
          },
          VISUAL: {
            LAYOUT: tm,
            GLOBAL: 2e3,
            CHART: em,
            COMPONENT: 4e3,
            BRUSH: 5e3
          }
        },
        im = "__flagInMainProcess",
        rm = "__optionUpdated",
        om = /^[a-zA-Z0-9_]+$/;
      bo.prototype.on = wo("on"),
        bo.prototype.off = wo("off"),
        bo.prototype.one = wo("one"),
        h(bo, Bd);
      var am = Mo.prototype;
      am._onframe = function () {
          if (this[rm]) {
            var t = this[rm].silent;
            this[im] = !0,
              sm.prepareAndUpdate.call(this),
              this[im] = !1,
              this[rm] = !1,
              Ao.call(this, t),
              Co.call(this, t)
          }
        },
        am.getDom = function () {
          return this._dom
        },
        am.getZr = function () {
          return this._zr
        },
        am.setOption = function (t, e, n) {
          var i;
          if (_(e) && (n = e.lazyUpdate,
              i = e.silent,
              e = e.notMerge),
            this[im] = !0,
            !this._model || e) {
            var r = new Jr(this._api),
              o = this._theme;
            (this._model = new Iv(null, null, o, r)).init(null, null, o, r)
          }
          this._model.setOption(t, dm),
            n ? (this[rm] = {
                silent: i
              },
              this[im] = !1) : (sm.prepareAndUpdate.call(this),
              this._zr.flush(),
              this[rm] = !1,
              this[im] = !1,
              Ao.call(this, i),
              Co.call(this, i))
        },
        am.setTheme = function () {
          console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        },
        am.getModel = function () {
          return this._model
        },
        am.getOption = function () {
          return this._model && this._model.getOption()
        },
        am.getWidth = function () {
          return this._zr.getWidth()
        },
        am.getHeight = function () {
          return this._zr.getHeight()
        },
        am.getDevicePixelRatio = function () {
          return this._zr.painter.dpr || window.devicePixelRatio || 1
        },
        am.getRenderedCanvas = function (t) {
          if (vd.canvasSupported) {
            (t = t || {}).pixelRatio = t.pixelRatio || 1,
              t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr;
            return c(e.storage.getDisplayList(), function (t) {
                t.stopAnimation(!0)
              }),
              e.painter.getRenderedCanvas(t)
          }
        },
        am.getSvgDataUrl = function () {
          if (vd.svgSupported) {
            var t = this._zr;
            return c(t.storage.getDisplayList(), function (t) {
                t.stopAnimation(!0)
              }),
              t.painter.pathToSvg()
          }
        },
        am.getDataURL = function (t) {
          var e = (t = t || {}).excludeComponents,
            n = this._model,
            i = [],
            r = this;
          Yv(e, function (t) {
            n.eachComponent({
              mainType: t
            }, function (t) {
              var e = r._componentsMap[t.__viewId];
              e.group.ignore || (i.push(e),
                e.group.ignore = !0)
            })
          });
          var o = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
          return Yv(i, function (t) {
              t.group.ignore = !1
            }),
            o
        },
        am.getConnectedDataURL = function (t) {
          if (vd.canvasSupported) {
            var n = this.group,
              i = Math.min,
              r = Math.max;
            if (ym[n]) {
              var o = 1 / 0,
                a = 1 / 0,
                s = -1 / 0,
                l = -1 / 0,
                h = [],
                u = t && t.pixelRatio || 1;
              c(mm, function (u, c) {
                if (u.group === n) {
                  var d = u.getRenderedCanvas(e(t)),
                    f = u.getDom().getBoundingClientRect();
                  o = i(f.left, o),
                    a = i(f.top, a),
                    s = r(f.right, s),
                    l = r(f.bottom, l),
                    h.push({
                      dom: d,
                      left: f.left,
                      top: f.top
                    })
                }
              });
              var d = (s *= u) - (o *= u),
                f = (l *= u) - (a *= u),
                p = Td();
              p.width = d,
                p.height = f;
              var g = pn(p);
              return Yv(h, function (t) {
                  var e = new Fe({
                    style: {
                      x: t.left * u - o,
                      y: t.top * u - a,
                      image: t.dom
                    }
                  });
                  g.add(e)
                }),
                g.refreshImmediately(),
                p.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
          }
        },
        am.convertToPixel = v(So, "convertToPixel"),
        am.convertFromPixel = v(So, "convertFromPixel"),
        am.containPixel = function (t, e) {
          var n;
          return t = Pr(this._model, t),
            c(t, function (t, i) {
              i.indexOf("Models") >= 0 && c(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint)
                  n |= !!r.containPoint(e);
                else if ("seriesModels" === i) {
                  var o = this._chartsMap[t.__viewId];
                  o && o.containPoint && (n |= o.containPoint(e, t))
                }
              }, this)
            }, this),
            !!n
        },
        am.getVisual = function (t, e) {
          var n = (t = Pr(this._model, t, {
              defaultMainType: "series"
            })).seriesModel,
            i = n.getData(),
            r = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(t.dataIndex) : null;
          return null != r ? i.getItemVisual(r, e) : i.getVisual(e)
        },
        am.getViewOfComponentModel = function (t) {
          return this._componentsMap[t.__viewId]
        },
        am.getViewOfSeriesModel = function (t) {
          return this._chartsMap[t.__viewId]
        };
      var sm = {
        update: function (t) {
          var e = this._model,
            n = this._api,
            i = this._coordSysMgr,
            r = this._zr;
          if (e) {
            e.restoreData(),
              i.create(this._model, this._api),
              Lo.call(this, e, n),
              Po.call(this, e),
              i.update(e, n),
              zo.call(this, e, t),
              Eo.call(this, e, t);
            var o = e.get("backgroundColor") || "transparent",
              a = r.painter;
            if (a.isSingleCanvas && a.isSingleCanvas())
              r.configLayer(0, {
                clearColor: o
              });
            else {
              if (!vd.canvasSupported) {
                var s = wt(o);
                o = kt(s, "rgb"),
                  0 === s[3] && (o = "transparent")
              }
              o.colorStops || o.image ? (r.configLayer(0, {
                  clearColor: o
                }),
                this.__hasGradientOrPatternBg = !0,
                this._dom.style.background = "transparent") : (this.__hasGradientOrPatternBg && r.configLayer(0, {
                  clearColor: null
                }),
                this.__hasGradientOrPatternBg = !1,
                this._dom.style.background = o)
            }
            Yv(fm, function (t) {
              t(e, n)
            })
          }
        },
        updateView: function (t) {
          var e = this._model;
          e && (e.eachSeries(function (t) {
              t.getData().clearAllVisual()
            }),
            zo.call(this, e, t),
            ko.call(this, "updateView", e, t))
        },
        updateVisual: function (t) {
          var e = this._model;
          e && (e.eachSeries(function (t) {
              t.getData().clearAllVisual()
            }),
            zo.call(this, e, t, !0),
            ko.call(this, "updateVisual", e, t))
        },
        updateLayout: function (t) {
          var e = this._model;
          e && (Oo.call(this, e, t),
            ko.call(this, "updateLayout", e, t))
        },
        prepareAndUpdate: function (t) {
          var e = this._model;
          Do.call(this, "component", e),
            Do.call(this, "chart", e),
            sm.update.call(this, t)
        }
      };
      am.resize = function (t) {
          this[im] = !0,
            this._zr.resize(t);
          var e = this._model && this._model.resetOption("media");
          sm[e ? "prepareAndUpdate" : "update"].call(this),
            this._loadingFX && this._loadingFX.resize(),
            this[im] = !1;
          var n = t && t.silent;
          Ao.call(this, n),
            Co.call(this, n)
        },
        am.showLoading = function (t, e) {
          if (_(t) && (e = t,
              t = ""),
            t = t || "default",
            this.hideLoading(),
            vm[t]) {
            var n = vm[t](this._api, e),
              i = this._zr;
            this._loadingFX = n,
              i.add(n)
          }
        },
        am.hideLoading = function () {
          this._loadingFX && this._zr.remove(this._loadingFX),
            this._loadingFX = null
        },
        am.makeActionFromEvent = function (t) {
          var e = r({}, t);
          return e.type = um[t.type],
            e
        },
        am.dispatchAction = function (t, e) {
          _(e) || (e = {
              silent: !!e
            }),
            hm[t.type] && this._model && (this[im] ? this._pendingActions.push(t) : (To.call(this, t, e.silent),
              e.flush ? this._zr.flush(!0) : !1 !== e.flush && vd.browser.weChat && this._throttledZrFlush(),
              Ao.call(this, e.silent),
              Co.call(this, e.silent)))
        },
        am.on = wo("on"),
        am.off = wo("off"),
        am.one = wo("one");
      var lm = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
      am._initEvents = function () {
          Yv(lm, function (t) {
              this._zr.on(t, function (e) {
                var n, i = this.getModel(),
                  o = e.target;
                if ("globalout" === t)
                  n = {};
                else if (o && null != o.dataIndex) {
                  var a = o.dataModel || i.getSeriesByIndex(o.seriesIndex);
                  n = a && a.getDataParams(o.dataIndex, o.dataType) || {}
                } else
                  o && o.eventData && (n = r({}, o.eventData));
                n && (n.event = e,
                  n.type = t,
                  this.trigger(t, n))
              }, this)
            }, this),
            Yv(um, function (t, e) {
              this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
              }, this)
            }, this)
        },
        am.isDisposed = function () {
          return this._disposed
        },
        am.clear = function () {
          this.setOption({
            series: []
          }, !0)
        },
        am.dispose = function () {
          if (!this._disposed) {
            this._disposed = !0;
            var t = this._api,
              e = this._model;
            Yv(this._componentsViews, function (n) {
                n.dispose(e, t)
              }),
              Yv(this._chartsViews, function (n) {
                n.dispose(e, t)
              }),
              this._zr.dispose(),
              delete mm[this.id]
          }
        },
        h(Mo, Bd);
      var hm = {},
        um = {},
        cm = [],
        dm = [],
        fm = [],
        pm = [],
        gm = {},
        vm = {},
        mm = {},
        ym = {},
        xm = new Date - 0,
        _m = new Date - 0,
        wm = "_echarts_instance_",
        bm = Go;
      jo(2e3, function (t) {
          t.eachRawSeries(function (e) {
            var n = (e.visualColorAccessPath || "itemStyle.normal.color").split("."),
              i = e.getData(),
              r = e.get(n) || e.getColorFromPalette(e.get("name"));
            i.setVisual("color", r),
              t.isSeriesFiltered(e) || ("function" != typeof r || r instanceof Hg || i.each(function (t) {
                  i.setItemVisual(t, "color", r(e.getDataParams(t)))
                }),
                i.each(function (t) {
                  var e = i.getItemModel(t).get(n, !0);
                  null != e && i.setItemVisual(t, "color", e)
                }))
          })
        }),
        Fo(Wv),
        qo("default", function (t, e) {
          o(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
          });
          var n = new Ng({
              style: {
                fill: e.maskColor
              },
              zlevel: e.zlevel,
              z: 1e4
            }),
            i = new Wg({
              shape: {
                startAngle: -qv / 2,
                endAngle: -qv / 2 + .1,
                r: 10
              },
              style: {
                stroke: e.color,
                lineCap: "round",
                lineWidth: 5
              },
              zlevel: e.zlevel,
              z: 10001
            }),
            r = new Ng({
              style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
              },
              zlevel: e.zlevel,
              z: 10001
            });
          i.animateShape(!0).when(1e3, {
              endAngle: 3 * qv / 2
            }).start("circularInOut"),
            i.animateShape(!0).when(1e3, {
              startAngle: 3 * qv / 2
            }).delay(300).start("circularInOut");
          var a = new yf;
          return a.add(i),
            a.add(r),
            a.add(n),
            a.resize = function () {
              var e = t.getWidth() / 2,
                o = t.getHeight() / 2;
              i.setShape({
                cx: e,
                cy: o
              });
              var a = i.shape.r;
              r.setShape({
                  x: e - a,
                  y: o - a,
                  width: 2 * a,
                  height: 2 * a
                }),
                n.setShape({
                  x: 0,
                  y: 0,
                  width: t.getWidth(),
                  height: t.getHeight()
                })
            },
            a.resize(),
            a
        }),
        Uo({
          type: "highlight",
          event: "highlight",
          update: "highlight"
        }, z),
        Uo({
          type: "downplay",
          event: "downplay",
          update: "downplay"
        }, z);
      var Mm = {
        registerMap: function (e) {
          t.registerMap = e
        },
        getMap: function (e) {
          t.getMap = e
        },
        parseGeoJSON: function (e) {
          t.parseGeoJSON = e
        }
      };
      ta.prototype = {
        constructor: ta,
        add: function (t) {
          return this._add = t,
            this
        },
        update: function (t) {
          return this._update = t,
            this
        },
        remove: function (t) {
          return this._remove = t,
            this
        },
        execute: function () {
          var t = this._old,
            e = this._new,
            n = {},
            i = [],
            r = [];
          for (ea(t, {}, i, "_oldKeyGetter", this),
            ea(e, n, r, "_newKeyGetter", this),
            o = 0; o < t.length; o++)
            null != (s = n[a = i[o]]) ? ((h = s.length) ? (1 === h && (n[a] = null),
                s = s.unshift()) : n[a] = null,
              this._update && this._update(s, o)) : this._remove && this._remove(o);
          for (var o = 0; o < r.length; o++) {
            var a = r[o];
            if (n.hasOwnProperty(a)) {
              var s = n[a];
              if (null == s)
                continue;
              if (s.length)
                for (var l = 0, h = s.length; l < h; l++)
                  this._add && this._add(s[l]);
              else
                this._add && this._add(s)
            }
          }
        }
      };
      var Sm = _,
        Im = "undefined" == typeof window ? global : window,
        Tm = {
          float: void 0 === Im.Float64Array ? Array : Im.Float64Array,
          int: void 0 === Im.Int32Array ? Array : Im.Int32Array,
          ordinal: Array,
          number: Array,
          time: Array
        },
        Am = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"];
      ia.prototype.pure = !1,
        ia.prototype.count = function () {
          return this._array.length
        },
        ia.prototype.getItem = function (t) {
          return this._array[t]
        };
      var Cm = function (t, e) {
          t = t || ["x", "y"];
          for (var n = {}, i = [], r = 0; r < t.length; r++) {
            var o, a = {};
            "string" == typeof t[r] ? a = {
                name: o = t[r],
                coordDim: o,
                coordDimIndex: 0,
                stackable: !1,
                type: "number"
              } : (o = (a = t[r]).name,
                a.type = a.type || "number",
                a.coordDim || (a.coordDim = o,
                  a.coordDimIndex = 0)),
              a.otherDims = a.otherDims || {},
              i.push(o),
              n[o] = a
          }
          this.dimensions = i,
            this._dimensionInfos = n,
            this.hostModel = e,
            this.dataType,
            this.indices = [],
            this._storage = {},
            this._nameList = [],
            this._idList = [],
            this._optionModels = [],
            this.stackedOn = null,
            this._visual = {},
            this._layout = {},
            this._itemVisuals = [],
            this._itemLayouts = [],
            this._graphicEls = [],
            this._rawData,
            this._extent
        },
        km = Cm.prototype;
      km.type = "list",
        km.hasItemOption = !0,
        km.getDimension = function (t) {
          return isNaN(t) || (t = this.dimensions[t] || t),
            t
        },
        km.getDimensionInfo = function (t) {
          return e(this._dimensionInfos[this.getDimension(t)])
        },
        km.initData = function (t, e, n) {
          var i = m(t = t || []);
          i && (t = new ia(t)),
            this._rawData = t;
          var r, o = this._storage = {},
            a = this.indices = [],
            s = this.dimensions,
            l = this._dimensionInfos,
            h = t.count(),
            u = [],
            c = {};
          e = e || [];
          for (x = 0; x < s.length; x++) {
            var d = l[s[x]];
            0 === d.otherDims.itemName && (r = x);
            var f = Tm[d.type];
            o[s[x]] = new f(h)
          }
          var p = this;
          n || (p.hasItemOption = !1),
            n = n || function (t, e, n, i) {
              var r = Ir(t);
              return Tr(t) && (p.hasItemOption = !0),
                Ar(r instanceof Array ? r[i] : r, l[e])
            };
          for (x = 0; x < h; x++) {
            for (var g = t.getItem(x), v = 0; v < s.length; v++) {
              var y = s[v];
              o[y][x] = n(g, y, x, v)
            }
            a.push(x)
          }
          for (var x = 0; x < h; x++) {
            g = t.getItem(x);
            !e[x] && g && (null != g.name ? e[x] = g.name : null != r && (e[x] = o[s[r]][x]));
            var _ = e[x] || "",
              w = g && g.id;
            !w && _ && (c[_] = c[_] || 0,
                w = _,
                c[_] > 0 && (w += "__ec__" + c[_]),
                c[_]++),
              w && (u[x] = w)
          }
          this._nameList = e,
            this._idList = u
        },
        km.count = function () {
          return this.indices.length
        },
        km.get = function (t, e, n) {
          var i = this._storage,
            r = this.indices[e];
          if (null == r || !i[t])
            return NaN;
          var o = i[t][r];
          if (n) {
            var a = this._dimensionInfos[t];
            if (a && a.stackable)
              for (var s = this.stackedOn; s;) {
                var l = s.get(t, e);
                (o >= 0 && l > 0 || o <= 0 && l < 0) && (o += l),
                s = s.stackedOn
              }
          }
          return o
        },
        km.getValues = function (t, e, n) {
          var i = [];
          m(t) || (n = e,
            e = t,
            t = this.dimensions);
          for (var r = 0, o = t.length; r < o; r++)
            i.push(this.get(t[r], e, n));
          return i
        },
        km.hasValue = function (t) {
          for (var e = this.dimensions, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++)
            if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t)))
              return !1;
          return !0
        },
        km.getDataExtent = function (t, e, n) {
          t = this.getDimension(t);
          var i = this._storage[t],
            r = this.getDimensionInfo(t);
          e = r && r.stackable && e;
          var o, a = (this._extent || (this._extent = {}))[t + !!e];
          if (a)
            return a;
          if (i) {
            for (var s = 1 / 0, l = -1 / 0, h = 0, u = this.count(); h < u; h++)
              o = this.get(t, h, e),
              n && !n(o, t, h) || (o < s && (s = o),
                o > l && (l = o));
            return this._extent[t + !!e] = [s, l]
          }
          return [1 / 0, -1 / 0]
        },
        km.getSum = function (t, e) {
          var n = 0;
          if (this._storage[t])
            for (var i = 0, r = this.count(); i < r; i++) {
              var o = this.get(t, i, e);
              isNaN(o) || (n += o)
            }
          return n
        },
        km.indexOf = function (t, e) {
          var n = this._storage[t],
            i = this.indices;
          if (n)
            for (var r = 0, o = i.length; r < o; r++)
              if (n[i[r]] === e)
                return r;
          return -1
        },
        km.indexOfName = function (t) {
          for (var e = this.indices, n = this._nameList, i = 0, r = e.length; i < r; i++)
            if (n[e[i]] === t)
              return i;
          return -1
        },
        km.indexOfRawIndex = function (t) {
          var e = this.indices,
            n = e[t];
          if (null != n && n === t)
            return t;
          for (var i = 0, r = e.length - 1; i <= r;) {
            var o = (i + r) / 2 | 0;
            if (e[o] < t)
              i = o + 1;
            else {
              if (!(e[o] > t))
                return o;
              r = o - 1
            }
          }
          return -1
        },
        km.indicesOfNearest = function (t, e, n, i) {
          var r = [];
          if (!this._storage[t])
            return r;
          null == i && (i = 1 / 0);
          for (var o = Number.MAX_VALUE, a = -1, s = 0, l = this.count(); s < l; s++) {
            var h = e - this.get(t, s, n),
              u = Math.abs(h);
            h <= i && u <= o && ((u < o || h >= 0 && a < 0) && (o = u,
                a = h,
                r.length = 0),
              r.push(s))
          }
          return r
        },
        km.getRawIndex = function (t) {
          var e = this.indices[t];
          return null == e ? -1 : e
        },
        km.getRawDataItem = function (t) {
          return this._rawData.getItem(this.getRawIndex(t))
        },
        km.getName = function (t) {
          return this._nameList[this.indices[t]] || ""
        },
        km.getId = function (t) {
          return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
        },
        km.each = function (t, e, n, i) {
          "function" == typeof t && (i = n,
            n = e,
            e = t,
            t = []);
          var r = [],
            o = (t = d(ra(t), this.getDimension, this)).length,
            a = this.indices;
          i = i || this;
          for (var s = 0; s < a.length; s++)
            switch (o) {
              case 0:
                e.call(i, s);
                break;
              case 1:
                e.call(i, this.get(t[0], s, n), s);
                break;
              case 2:
                e.call(i, this.get(t[0], s, n), this.get(t[1], s, n), s);
                break;
              default:
                for (var l = 0; l < o; l++)
                  r[l] = this.get(t[l], s, n);
                r[l] = s,
                  e.apply(i, r)
            }
        },
        km.filterSelf = function (t, e, n, i) {
          "function" == typeof t && (i = n,
            n = e,
            e = t,
            t = []);
          var r = [],
            o = [],
            a = (t = d(ra(t), this.getDimension, this)).length,
            s = this.indices;
          i = i || this;
          for (var l = 0; l < s.length; l++) {
            var h;
            if (a)
              if (1 === a)
                h = e.call(i, this.get(t[0], l, n), l);
              else {
                for (var u = 0; u < a; u++)
                  o[u] = this.get(t[u], l, n);
                o[u] = l,
                  h = e.apply(i, o)
              }
            else
              h = e.call(i, l);
            h && r.push(s[l])
          }
          return this.indices = r,
            this._extent = {},
            this
        },
        km.mapArray = function (t, e, n, i) {
          "function" == typeof t && (i = n,
            n = e,
            e = t,
            t = []);
          var r = [];
          return this.each(t, function () {
              r.push(e && e.apply(this, arguments))
            }, n, i),
            r
        },
        km.map = function (t, e, n, i) {
          var r = oa(this, t = d(ra(t), this.getDimension, this)),
            o = r.indices = this.indices,
            a = r._storage,
            s = [];
          return this.each(t, function () {
              var n = arguments[arguments.length - 1],
                i = e && e.apply(this, arguments);
              if (null != i) {
                "number" == typeof i && (s[0] = i,
                  i = s);
                for (var r = 0; r < i.length; r++) {
                  var l = t[r],
                    h = a[l],
                    u = o[n];
                  h && (h[u] = i[r])
                }
              }
            }, n, i),
            r
        },
        km.downSample = function (t, e, n, i) {
          for (var r = oa(this, [t]), o = this._storage, a = r._storage, s = this.indices, l = r.indices = [], h = [], u = [], c = Math.floor(1 / e), d = a[t], f = this.count(), p = 0; p < o[t].length; p++)
            a[t][p] = o[t][p];
          for (p = 0; p < f; p += c) {
            c > f - p && (c = f - p,
              h.length = c);
            for (var g = 0; g < c; g++) {
              var v = s[p + g];
              h[g] = d[v],
                u[g] = v
            }
            var m = n(h);
            d[v = u[i(h, m) || 0]] = m,
              l.push(v)
          }
          return r
        },
        km.getItemModel = function (t) {
          var e = this.hostModel;
          return t = this.indices[t],
            new _r(this._rawData.getItem(t), e, e && e.ecModel)
        },
        km.diff = function (t) {
          var e, n = this._idList,
            i = t && t._idList;
          return new ta(t ? t.indices : [], this.indices, function (t) {
            return null != (e = i[t]) ? e : "e\0\0" + t
          }, function (t) {
            return null != (e = n[t]) ? e : "e\0\0" + t
          })
        },
        km.getVisual = function (t) {
          var e = this._visual;
          return e && e[t]
        },
        km.setVisual = function (t, e) {
          if (Sm(t))
            for (var n in t)
              t.hasOwnProperty(n) && this.setVisual(n, t[n]);
          else
            this._visual = this._visual || {},
            this._visual[t] = e
        },
        km.setLayout = function (t, e) {
          if (Sm(t))
            for (var n in t)
              t.hasOwnProperty(n) && this.setLayout(n, t[n]);
          else
            this._layout[t] = e
        },
        km.getLayout = function (t) {
          return this._layout[t]
        },
        km.getItemLayout = function (t) {
          return this._itemLayouts[t]
        },
        km.setItemLayout = function (t, e, n) {
          this._itemLayouts[t] = n ? r(this._itemLayouts[t] || {}, e) : e
        },
        km.clearItemLayouts = function () {
          this._itemLayouts.length = 0
        },
        km.getItemVisual = function (t, e, n) {
          var i = this._itemVisuals[t],
            r = i && i[e];
          return null != r || n ? r : this.getVisual(e)
        },
        km.setItemVisual = function (t, e, n) {
          var i = this._itemVisuals[t] || {};
          if (this._itemVisuals[t] = i,
            Sm(e))
            for (var r in e)
              e.hasOwnProperty(r) && (i[r] = e[r]);
          else
            i[e] = n
        },
        km.clearAllVisual = function () {
          this._visual = {},
            this._itemVisuals = []
        };
      var Dm = function (t) {
        t.seriesIndex = this.seriesIndex,
          t.dataIndex = this.dataIndex,
          t.dataType = this.dataType
      };
      km.setItemGraphicEl = function (t, e) {
          var n = this.hostModel;
          e && (e.dataIndex = t,
              e.dataType = this.dataType,
              e.seriesIndex = n && n.seriesIndex,
              "group" === e.type && e.traverse(Dm, e)),
            this._graphicEls[t] = e
        },
        km.getItemGraphicEl = function (t) {
          return this._graphicEls[t]
        },
        km.eachItemGraphicEl = function (t, e) {
          c(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i)
          })
        },
        km.cloneShallow = function () {
          var t = d(this.dimensions, this.getDimensionInfo, this),
            e = new Cm(t, this.hostModel);
          return e._storage = this._storage,
            na(e, this),
            e.indices = this.indices.slice(),
            this._extent && (e._extent = r({}, this._extent)),
            e
        },
        km.wrapMethod = function (t, e) {
          var n = this[t];
          "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [],
            this.__wrappedMethods.push(t),
            this[t] = function () {
              var t = n.apply(this, arguments);
              return e.apply(this, [t].concat(A(arguments)))
            }
          )
        },
        km.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"],
        km.CHANGABLE_METHODS = ["filterSelf"];
      var Lm = c,
        Pm = x,
        Om = o,
        zm = {
          tooltip: 1,
          label: 1,
          itemName: 1
        },
        Em = aa.guessOrdinal = function (t, e) {
          for (var n = 0, i = t.length; n < i; n++) {
            var r = sa(t[n]);
            if (!m(r))
              return !1;
            if (null != (r = r[e]) && isFinite(r) && "" !== r)
              return !1;
            if (Pm(r) && "-" !== r)
              return !0
          }
          return !1
        },
        Nm = {
          cartesian2d: function (t, e, n, i) {
            var r = d(["xAxis", "yAxis"], function (t) {
                return n.queryComponents({
                  mainType: t,
                  index: e.get(t + "Index"),
                  id: e.get(t + "Id")
                })[0]
              }),
              o = r[0],
              a = r[1],
              s = o.get("type"),
              l = a.get("type"),
              h = [{
                name: "x",
                type: da(s),
                stackable: ca(s)
              }, {
                name: "y",
                type: da(l),
                stackable: ca(l)
              }],
              u = "category" === s,
              c = "category" === l;
            h = aa(h, t, i);
            var f = {};
            return u && (f.x = o),
              c && (f.y = a), {
                dimensions: h,
                categoryIndex: u ? 0 : c ? 1 : -1,
                categoryAxesModels: f
              }
          },
          singleAxis: function (t, e, n, i) {
            var r = n.queryComponents({
                mainType: "singleAxis",
                index: e.get("singleAxisIndex"),
                id: e.get("singleAxisId")
              })[0],
              o = r.get("type"),
              a = "category" === o,
              s = [{
                name: "single",
                type: da(o),
                stackable: ca(o)
              }];
            s = aa(s, t, i);
            var l = {};
            return a && (l.single = r), {
              dimensions: s,
              categoryIndex: a ? 0 : -1,
              categoryAxesModels: l
            }
          },
          polar: function (t, e, n, i) {
            var r = n.queryComponents({
                mainType: "polar",
                index: e.get("polarIndex"),
                id: e.get("polarId")
              })[0],
              o = r.findAxisModel("angleAxis"),
              a = r.findAxisModel("radiusAxis"),
              s = a.get("type"),
              l = o.get("type"),
              h = [{
                name: "radius",
                type: da(s),
                stackable: ca(s)
              }, {
                name: "angle",
                type: da(l),
                stackable: ca(l)
              }],
              u = "category" === l,
              c = "category" === s;
            h = aa(h, t, i);
            var d = {};
            return c && (d.radius = a),
              u && (d.angle = o), {
                dimensions: h,
                categoryIndex: u ? 1 : c ? 0 : -1,
                categoryAxesModels: d
              }
          },
          geo: function (t, e, n, i) {
            return {
              dimensions: aa([{
                name: "lng"
              }, {
                name: "lat"
              }], t, i)
            }
          }
        },
        Bm = pa.prototype;
      Bm.parse = function (t) {
          return t
        },
        Bm.getSetting = function (t) {
          return this._setting[t]
        },
        Bm.contain = function (t) {
          var e = this._extent;
          return t >= e[0] && t <= e[1]
        },
        Bm.normalize = function (t) {
          var e = this._extent;
          return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
        },
        Bm.scale = function (t) {
          var e = this._extent;
          return t * (e[1] - e[0]) + e[0]
        },
        Bm.unionExtent = function (t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]),
            t[1] > e[1] && (e[1] = t[1])
        },
        Bm.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getDataExtent(e, !0))
        },
        Bm.getExtent = function () {
          return this._extent.slice()
        },
        Bm.setExtent = function (t, e) {
          var n = this._extent;
          isNaN(t) || (n[0] = t),
            isNaN(e) || (n[1] = e)
        },
        Bm.getTicksLabels = function () {
          for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++)
            t.push(this.getLabel(e[n]));
          return t
        },
        Bm.isBlank = function () {
          return this._isBlank
        },
        Bm.setBlank = function (t) {
          this._isBlank = t
        },
        Zn(pa),
        jn(pa, {
          registerWhenExtend: !0
        });
      var Rm = pa.prototype,
        Vm = pa.extend({
          type: "ordinal",
          init: function (t, e) {
            this._data = t,
              this._extent = e || [0, t.length - 1]
          },
          parse: function (t) {
            return "string" == typeof t ? s(this._data, t) : Math.round(t)
          },
          contain: function (t) {
            return t = this.parse(t),
              Rm.contain.call(this, t) && null != this._data[t]
          },
          normalize: function (t) {
            return Rm.normalize.call(this, this.parse(t))
          },
          scale: function (t) {
            return Math.round(Rm.scale.call(this, t))
          },
          getTicks: function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];)
              t.push(n),
              n++;
            return t
          },
          getLabel: function (t) {
            return this._data[t]
          },
          count: function () {
            return this._extent[1] - this._extent[0] + 1
          },
          unionExtentFromData: function (t, e) {
            this.unionExtent(t.getDataExtent(e, !1))
          },
          niceTicks: z,
          niceExtent: z
        });
      Vm.create = function () {
        return new Vm
      };
      var Wm = _n,
        Gm = _n,
        Hm = pa.extend({
          type: "interval",
          _interval: 0,
          _intervalPrecision: 2,
          setExtent: function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)),
              isNaN(e) || (n[1] = parseFloat(e))
          },
          unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]),
              t[1] > e[1] && (e[1] = t[1]),
              Hm.prototype.setExtent.call(this, e[0], e[1])
          },
          getInterval: function () {
            return this._interval
          },
          setInterval: function (t) {
            this._interval = t,
              this._niceExtent = this._extent.slice(),
              this._intervalPrecision = va(t)
          },
          getTicks: function () {
            return xa(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
          },
          getTicksLabels: function () {
            for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++)
              t.push(this.getLabel(e[n]));
            return t
          },
          getLabel: function (t, e) {
            if (null == t)
              return "";
            var n = e && e.precision;
            return null == n ? n = Mn(t) || 0 : "auto" === n && (n = this._intervalPrecision),
              t = Gm(t, n, !0),
              Pn(t)
          },
          niceTicks: function (t, e, n) {
            t = t || 5;
            var i = this._extent,
              r = i[1] - i[0];
            if (isFinite(r)) {
              r < 0 && (r = -r,
                i.reverse());
              var o = ga(i, t, e, n);
              this._intervalPrecision = o.intervalPrecision,
                this._interval = o.interval,
                this._niceExtent = o.niceTickExtent
            }
          },
          niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1])
              if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2,
                  e[0] -= n / 2)
              } else
                e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0,
                e[1] = 1),
              this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = Gm(Math.floor(e[0] / r) * r)),
              t.fixMax || (e[1] = Gm(Math.ceil(e[1] / r) * r))
          }
        });
      Hm.create = function () {
        return new Hm
      };
      var Fm = Hm.prototype,
        Zm = Math.ceil,
        Um = Math.floor,
        Xm = function (t, e, n, i) {
          for (; n < i;) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r
          }
          return n
        },
        jm = Hm.extend({
          type: "time",
          getLabel: function (t) {
            var e = this._stepLvl,
              n = new Date(t);
            return Bn(e[0], n, this.getSetting("useUTC"))
          },
          niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= 864e5,
                e[1] += 864e5),
              e[1] === -1 / 0 && e[0] === 1 / 0) {
              var n = new Date;
              e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()),
                e[0] = e[1] - 864e5
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = _n(Um(e[0] / i) * i)),
              t.fixMax || (e[1] = _n(Zm(e[1] / i) * i))
          },
          niceTicks: function (t, e, n) {
            t = t || 10;
            var i = this._extent,
              r = i[1] - i[0],
              o = r / t;
            null != e && o < e && (o = e),
              null != n && o > n && (o = n);
            var a = qm.length,
              s = Xm(qm, o, 0, a),
              l = qm[Math.min(s, a - 1)],
              h = l[1];
            "year" === l[0] && (h *= Ln(r / h / t, !0));
            var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
              c = [Math.round(Zm((i[0] - u) / h) * h + u), Math.round(Um((i[1] - u) / h) * h + u)];
            ya(c, i),
              this._stepLvl = l,
              this._interval = h,
              this._niceExtent = c
          },
          parse: function (t) {
            return +Cn(t)
          }
        });
      c(["contain", "normalize"], function (t) {
        jm.prototype[t] = function (e) {
          return Fm[t].call(this, this.parse(e))
        }
      });
      var qm = [
        ["hh:mm:ss", 1e3],
        ["hh:mm:ss", 5e3],
        ["hh:mm:ss", 1e4],
        ["hh:mm:ss", 15e3],
        ["hh:mm:ss", 3e4],
        ["hh:mm\nMM-dd", 6e4],
        ["hh:mm\nMM-dd", 3e5],
        ["hh:mm\nMM-dd", 6e5],
        ["hh:mm\nMM-dd", 9e5],
        ["hh:mm\nMM-dd", 18e5],
        ["hh:mm\nMM-dd", 36e5],
        ["hh:mm\nMM-dd", 72e5],
        ["hh:mm\nMM-dd", 216e5],
        ["hh:mm\nMM-dd", 432e5],
        ["MM-dd\nyyyy", 864e5],
        ["MM-dd\nyyyy", 1728e5],
        ["MM-dd\nyyyy", 2592e5],
        ["MM-dd\nyyyy", 3456e5],
        ["MM-dd\nyyyy", 432e6],
        ["MM-dd\nyyyy", 5184e5],
        ["week", 6048e5],
        ["MM-dd\nyyyy", 864e6],
        ["week", 12096e5],
        ["week", 18144e5],
        ["month", 26784e5],
        ["week", 36288e5],
        ["month", 53568e5],
        ["week", 36288e5],
        ["quarter", 8208e6],
        ["month", 107136e5],
        ["month", 13392e6],
        ["half-year", 16416e6],
        ["month", 214272e5],
        ["month", 26784e6],
        ["year", 32832e6]
      ];
      jm.create = function (t) {
        return new jm({
          useUTC: t.ecModel.get("useUTC")
        })
      };
      var Ym = pa.prototype,
        $m = Hm.prototype,
        Km = Mn,
        Qm = _n,
        Jm = Math.floor,
        ty = Math.ceil,
        ey = Math.pow,
        ny = Math.log,
        iy = pa.extend({
          type: "log",
          base: 10,
          $constructor: function () {
            pa.apply(this, arguments),
              this._originalScale = new Hm
          },
          getTicks: function () {
            var t = this._originalScale,
              e = this._extent,
              n = t.getExtent();
            return d($m.getTicks.call(this), function (i) {
              var r = _n(ey(this.base, i));
              return r = i === e[0] && t.__fixMin ? _a(r, n[0]) : r,
                r = i === e[1] && t.__fixMax ? _a(r, n[1]) : r
            }, this)
          },
          getLabel: $m.getLabel,
          scale: function (t) {
            return t = Ym.scale.call(this, t),
              ey(this.base, t)
          },
          setExtent: function (t, e) {
            var n = this.base;
            t = ny(t) / ny(n),
              e = ny(e) / ny(n),
              $m.setExtent.call(this, t, e)
          },
          getExtent: function () {
            var t = this.base,
              e = Ym.getExtent.call(this);
            e[0] = ey(t, e[0]),
              e[1] = ey(t, e[1]);
            var n = this._originalScale,
              i = n.getExtent();
            return n.__fixMin && (e[0] = _a(e[0], i[0])),
              n.__fixMax && (e[1] = _a(e[1], i[1])),
              e
          },
          unionExtent: function (t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = ny(t[0]) / ny(e),
              t[1] = ny(t[1]) / ny(e),
              Ym.unionExtent.call(this, t)
          },
          unionExtentFromData: function (t, e) {
            this.unionExtent(t.getDataExtent(e, !0, function (t) {
              return t > 0
            }))
          },
          niceTicks: function (t) {
            t = t || 10;
            var e = this._extent,
              n = e[1] - e[0];
            if (!(n === 1 / 0 || n <= 0)) {
              var i = kn(n);
              for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;)
                i *= 10;
              var r = [_n(ty(e[0] / i) * i), _n(Jm(e[1] / i) * i)];
              this._interval = i,
                this._niceExtent = r
            }
          },
          niceExtent: function (t) {
            $m.niceExtent.call(this, t);
            var e = this._originalScale;
            e.__fixMin = t.fixMin,
              e.__fixMax = t.fixMax
          }
        });
      c(["contain", "normalize"], function (t) {
          iy.prototype[t] = function (e) {
            return e = ny(e) / ny(this.base),
              Ym[t].call(this, e)
          }
        }),
        iy.create = function () {
          return new iy
        };
      var ry = {
          getFormattedLabels: function () {
            return Ia(this.axis, this.get("axisLabel.formatter"))
          },
          getCategories: function () {
            return "category" === this.get("type") && d(this.get("data"), Aa)
          },
          getMin: function (t) {
            var e = this.option,
              n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !M(n) && (n = this.axis.scale.parse(n)),
              n
          },
          getMax: function (t) {
            var e = this.option,
              n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !M(n) && (n = this.axis.scale.parse(n)),
              n
          },
          getNeedCrossZero: function () {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale
          },
          getCoordSysModel: z,
          setRange: function (t, e) {
            this.option.rangeStart = t,
              this.option.rangeEnd = e
          },
          resetRange: function () {
            this.option.rangeStart = this.option.rangeEnd = null
          }
        },
        oy = Ei({
          type: "triangle",
          shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
          },
          buildPath: function (t, e) {
            var n = e.cx,
              i = e.cy,
              r = e.width / 2,
              o = e.height / 2;
            t.moveTo(n, i - o),
              t.lineTo(n + r, i + o),
              t.lineTo(n - r, i + o),
              t.closePath()
          }
        }),
        ay = Ei({
          type: "diamond",
          shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
          },
          buildPath: function (t, e) {
            var n = e.cx,
              i = e.cy,
              r = e.width / 2,
              o = e.height / 2;
            t.moveTo(n, i - o),
              t.lineTo(n + r, i),
              t.lineTo(n, i + o),
              t.lineTo(n - r, i),
              t.closePath()
          }
        }),
        sy = Ei({
          type: "pin",
          shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          },
          buildPath: function (t, e) {
            var n = e.x,
              i = e.y,
              r = e.width / 5 * 3,
              o = Math.max(r, e.height),
              a = r / 2,
              s = a * a / (o - a),
              l = i - o + a + s,
              h = Math.asin(s / a),
              u = Math.cos(h) * a,
              c = Math.sin(h),
              d = Math.cos(h),
              f = .6 * a,
              p = .7 * a;
            t.moveTo(n - u, l + s),
              t.arc(n, l, a, Math.PI - h, 2 * Math.PI + h),
              t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i),
              t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s),
              t.closePath()
          }
        }),
        ly = Ei({
          type: "arrow",
          shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          },
          buildPath: function (t, e) {
            var n = e.height,
              i = e.width,
              r = e.x,
              o = e.y,
              a = i / 3 * 2;
            t.moveTo(r, o),
              t.lineTo(r + a, o + n),
              t.lineTo(r, o + n / 4 * 3),
              t.lineTo(r - a, o + n),
              t.lineTo(r, o),
              t.closePath()
          }
        }),
        hy = {
          line: function (t, e, n, i, r) {
            r.x1 = t,
              r.y1 = e + i / 2,
              r.x2 = t + n,
              r.y2 = e + i / 2
          },
          rect: function (t, e, n, i, r) {
            r.x = t,
              r.y = e,
              r.width = n,
              r.height = i
          },
          roundRect: function (t, e, n, i, r) {
            r.x = t,
              r.y = e,
              r.width = n,
              r.height = i,
              r.r = Math.min(n, i) / 4
          },
          square: function (t, e, n, i, r) {
            var o = Math.min(n, i);
            r.x = t,
              r.y = e,
              r.width = o,
              r.height = o
          },
          circle: function (t, e, n, i, r) {
            r.cx = t + n / 2,
              r.cy = e + i / 2,
              r.r = Math.min(n, i) / 2
          },
          diamond: function (t, e, n, i, r) {
            r.cx = t + n / 2,
              r.cy = e + i / 2,
              r.width = n,
              r.height = i
          },
          pin: function (t, e, n, i, r) {
            r.x = t + n / 2,
              r.y = e + i / 2,
              r.width = n,
              r.height = i
          },
          arrow: function (t, e, n, i, r) {
            r.x = t + n / 2,
              r.y = e + i / 2,
              r.width = n,
              r.height = i
          },
          triangle: function (t, e, n, i, r) {
            r.cx = t + n / 2,
              r.cy = e + i / 2,
              r.width = n,
              r.height = i
          }
        },
        uy = {};
      c({
        line: Bg,
        rect: Ng,
        roundRect: Ng,
        square: Ng,
        circle: Ag,
        diamond: ay,
        pin: sy,
        arrow: ly,
        triangle: oy
      }, function (t, e) {
        uy[e] = new t
      });
      var cy = Ei({
          type: "symbol",
          shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
          },
          beforeBrush: function () {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"],
              t.textAlign = "center",
              t.textVerticalAlign = "middle")
          },
          buildPath: function (t, e, n) {
            var i = e.symbolType,
              r = uy[i];
            "none" !== e.symbolType && (r || (r = uy[i = "rect"]),
              hy[i](e.x, e.y, e.width, e.height, r.shape),
              r.buildPath(t, r.shape, n))
          }
        }),
        dy = (Object.freeze || Object)({
          createList: function (t) {
            return ua(t.get("data"), t, t.ecModel)
          },
          createScale: function (t, e) {
            var n = e;
            e instanceof _r || h(n = new _r(e), ry);
            var i = Ma(n);
            return i.setExtent(t[0], t[1]),
              ba(i, n),
              i
          },
          mixinAxisModelCommonMethods: function (t) {
            h(t, ry)
          },
          completeDimensions: aa,
          createSymbol: ka
        }),
        fy = yn,
        py = [0, 1],
        gy = function (t, e, n) {
          this.dim = t,
            this.scale = e,
            this._extent = n || [0, 0],
            this.inverse = !1,
            this.onBand = !1,
            this._labelInterval
        };
      gy.prototype = {
        constructor: gy,
        contain: function (t) {
          var e = this._extent,
            n = Math.min(e[0], e[1]),
            i = Math.max(e[0], e[1]);
          return t >= n && t <= i
        },
        containData: function (t) {
          return this.contain(this.dataToCoord(t))
        },
        getExtent: function () {
          return this._extent.slice()
        },
        getPixelPrecision: function (t) {
          return Sn(t || this.scale.getExtent(), this._extent)
        },
        setExtent: function (t, e) {
          var n = this._extent;
          n[0] = t,
            n[1] = e
        },
        dataToCoord: function (t, e) {
          var n = this._extent,
            i = this.scale;
          return t = i.normalize(t),
            this.onBand && "ordinal" === i.type && Da(n = n.slice(), i.count()),
            fy(t, py, n, e)
        },
        coordToData: function (t, e) {
          var n = this._extent,
            i = this.scale;
          this.onBand && "ordinal" === i.type && Da(n = n.slice(), i.count());
          var r = fy(t, n, py, e);
          return this.scale.scale(r)
        },
        pointToData: function (t, e) {},
        getTicksCoords: function (t) {
          if (this.onBand && !t) {
            for (var e = this.getBands(), n = [], i = 0; i < e.length; i++)
              n.push(e[i][0]);
            return e[i - 1] && n.push(e[i - 1][1]),
              n
          }
          return d(this.scale.getTicks(), this.dataToCoord, this)
        },
        getLabelsCoords: function () {
          return d(this.scale.getTicks(), this.dataToCoord, this)
        },
        getBands: function () {
          for (var t = this.getExtent(), e = [], n = this.scale.count(), i = t[0], r = t[1] - i, o = 0; o < n; o++)
            e.push([r * o / n + i, r * (o + 1) / n + i]);
          return e
        },
        getBandWidth: function () {
          var t = this._extent,
            e = this.scale.getExtent(),
            n = e[1] - e[0] + (this.onBand ? 1 : 0);
          0 === n && (n = 1);
          var i = Math.abs(t[1] - t[0]);
          return Math.abs(i) / n
        },
        isHorizontal: null,
        getRotate: null,
        getLabelInterval: function () {
          var t = this._labelInterval;
          if (!t) {
            var e = this.model,
              n = e.getModel("axisLabel");
            t = n.get("interval"),
              "category" !== this.type || null != t && "auto" !== t || (t = Sa(d(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), n.getFont(), this.getRotate ? this.getRotate() : this.isHorizontal && !this.isHorizontal() ? 90 : 0, n.get("rotate"))),
              this._labelInterval = t
          }
          return t
        }
      };
      var vy = {};
      c(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
          vy[t] = kd[t]
        }),
        Gv.extend({
          type: "series.line",
          dependencies: ["grid", "polar"],
          getInitialData: function (t, e) {
            return ua(t.data, this, e)
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
              normal: {
                position: "top"
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                type: "solid"
              }
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: !1,
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
          }
        });
      var my = za.prototype;
      my._createSymbol = function (t, e, n, i) {
          this.removeAll();
          var r = ka(t, -1, -1, 2, 2, e.getItemVisual(n, "color"));
          r.attr({
              z2: 100,
              culling: !0,
              scale: Oa(i)
            }),
            r.drift = Ea,
            this._symbolType = t,
            this.add(r)
        },
        my.stopSymbolAnimation = function (t) {
          this.childAt(0).stopAnimation(t)
        },
        my.getSymbolPath = function () {
          return this.childAt(0)
        },
        my.getScale = function () {
          return this.childAt(0).scale
        },
        my.highlight = function () {
          this.childAt(0).trigger("emphasis")
        },
        my.downplay = function () {
          this.childAt(0).trigger("normal")
        },
        my.setZ = function (t, e) {
          var n = this.childAt(0);
          n.zlevel = t,
            n.z = e
        },
        my.setDraggable = function (t) {
          var e = this.childAt(0);
          e.draggable = t,
            e.cursor = t ? "move" : "pointer"
        },
        my.updateData = function (t, e, n) {
          this.silent = !1;
          var i = t.getItemVisual(e, "symbol") || "circle",
            r = t.hostModel,
            o = Pa(t, e),
            a = i !== this._symbolType;
          if (a ? this._createSymbol(i, t, e, o) : ((s = this.childAt(0)).silent = !1,
              dr(s, {
                scale: Oa(o)
              }, r, e)),
            this._updateCommon(t, e, o, n),
            a) {
            var s = this.childAt(0),
              l = n && n.fadeIn,
              h = {
                scale: s.scale.slice()
              };
            l && (h.style = {
                opacity: s.style.opacity
              }),
              s.scale = [0, 0],
              l && (s.style.opacity = 0),
              fr(s, h, r, e)
          }
          this._seriesModel = r
        };
      var yy = ["itemStyle", "normal"],
        xy = ["itemStyle", "emphasis"],
        _y = ["label", "normal"],
        wy = ["label", "emphasis"];
      my._updateCommon = function (t, e, n, i) {
          var o = this.childAt(0),
            a = t.hostModel,
            s = t.getItemVisual(e, "color");
          "image" !== o.type && o.useStyle({
            strokeNoScale: !0
          });
          var l = i && i.itemStyle,
            h = i && i.hoverItemStyle,
            u = i && i.symbolRotate,
            c = i && i.symbolOffset,
            d = i && i.labelModel,
            f = i && i.hoverLabelModel,
            p = i && i.hoverAnimation,
            g = i && i.cursorStyle;
          if (!i || t.hasItemOption) {
            var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            l = v.getModel(yy).getItemStyle(["color"]),
              h = v.getModel(xy).getItemStyle(),
              u = v.getShallow("symbolRotate"),
              c = v.getShallow("symbolOffset"),
              d = v.getModel(_y),
              f = v.getModel(wy),
              p = v.getShallow("hoverAnimation"),
              g = v.getShallow("cursor")
          } else
            h = r({}, h);
          var m = o.style;
          o.attr("rotation", (u || 0) * Math.PI / 180 || 0),
            c && o.attr("position", [xn(c[0], n[0]), xn(c[1], n[1])]),
            g && o.attr("cursor", g),
            o.setColor(s, i && i.symbolInnerColor),
            o.setStyle(l);
          var y = t.getItemVisual(e, "opacity");
          null != y && (m.opacity = y);
          var x = i && i.useNameLabel,
            _ = !x && La(t);
          (x || null != _) && nr(m, h, d, f, {
              labelFetcher: a,
              labelDataIndex: e,
              defaultText: x ? t.getName(e) : t.get(_, e),
              isRectText: !0,
              autoColor: s
            }),
            o.off("mouseover").off("mouseout").off("emphasis").off("normal"),
            o.hoverStyle = h,
            er(o);
          var w = Oa(n);
          if (p && a.isAnimationEnabled()) {
            var b = function () {
                var t = w[1] / w[0];
                this.animateTo({
                  scale: [Math.max(1.1 * w[0], w[0] + 3), Math.max(1.1 * w[1], w[1] + 3 * t)]
                }, 400, "elasticOut")
              },
              M = function () {
                this.animateTo({
                  scale: w
                }, 400, "elasticOut")
              };
            o.on("mouseover", b).on("mouseout", M).on("emphasis", b).on("normal", M)
          }
        },
        my.fadeOut = function (t, e) {
          var n = this.childAt(0);
          this.silent = n.silent = !0,
            !(e && e.keepLabel) && (n.style.text = null),
            dr(n, {
              style: {
                opacity: 0
              },
              scale: [0, 0]
            }, this._seriesModel, this.dataIndex, t)
        },
        l(za, yf);
      var by = Na.prototype;
      by.updateData = function (t, e) {
          var n = this.group,
            i = t.hostModel,
            r = this._data,
            o = this._symbolCtor,
            a = {
              itemStyle: i.getModel("itemStyle.normal").getItemStyle(["color"]),
              hoverItemStyle: i.getModel("itemStyle.emphasis").getItemStyle(),
              symbolRotate: i.get("symbolRotate"),
              symbolOffset: i.get("symbolOffset"),
              hoverAnimation: i.get("hoverAnimation"),
              labelModel: i.getModel("label.normal"),
              hoverLabelModel: i.getModel("label.emphasis"),
              cursorStyle: i.get("cursor")
            };
          t.diff(r).add(function (i) {
              var r = t.getItemLayout(i);
              if (Ba(t, i, e)) {
                var s = new o(t, i, a);
                s.attr("position", r),
                  t.setItemGraphicEl(i, s),
                  n.add(s)
              }
            }).update(function (s, l) {
              var h = r.getItemGraphicEl(l),
                u = t.getItemLayout(s);
              Ba(t, s, e) ? (h ? (h.updateData(t, s, a),
                  dr(h, {
                    position: u
                  }, i)) : (h = new o(t, s)).attr("position", u),
                n.add(h),
                t.setItemGraphicEl(s, h)) : n.remove(h)
            }).remove(function (t) {
              var e = r.getItemGraphicEl(t);
              e && e.fadeOut(function () {
                n.remove(e)
              })
            }).execute(),
            this._data = t
        },
        by.updateLayout = function () {
          var t = this._data;
          t && t.eachItemGraphicEl(function (e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
          })
        },
        by.remove = function (t) {
          var e = this.group,
            n = this._data;
          n && (t ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
              e.remove(t)
            })
          }) : e.removeAll())
        };
      var My = function (t, e, n, i, r, o) {
          for (var a = Wa(t, e), s = [], l = [], h = [], u = [], c = [], d = [], f = [], p = o.dimensions, g = 0; g < a.length; g++) {
            var v = a[g],
              m = !0;
            switch (v.cmd) {
              case "=":
                var y = t.getItemLayout(v.idx),
                  x = e.getItemLayout(v.idx1);
                (isNaN(y[0]) || isNaN(y[1])) && (y = x.slice()),
                s.push(y),
                  l.push(x),
                  h.push(n[v.idx]),
                  u.push(i[v.idx1]),
                  f.push(e.getRawIndex(v.idx1));
                break;
              case "+":
                _ = v.idx;
                s.push(r.dataToPoint([e.get(p[0], _, !0), e.get(p[1], _, !0)])),
                  l.push(e.getItemLayout(_).slice()),
                  h.push(Va(r, e, _)),
                  u.push(i[_]),
                  f.push(e.getRawIndex(_));
                break;
              case "-":
                var _ = v.idx,
                  w = t.getRawIndex(_);
                w !== _ ? (s.push(t.getItemLayout(_)),
                  l.push(o.dataToPoint([t.get(p[0], _, !0), t.get(p[1], _, !0)])),
                  h.push(n[_]),
                  u.push(Va(o, t, _)),
                  f.push(w)) : m = !1
            }
            m && (c.push(v),
              d.push(d.length))
          }
          d.sort(function (t, e) {
            return f[t] - f[e]
          });
          for (var b = [], M = [], S = [], I = [], T = [], g = 0; g < d.length; g++) {
            _ = d[g];
            b[g] = s[_],
              M[g] = l[_],
              S[g] = h[_],
              I[g] = u[_],
              T[g] = c[_]
          }
          return {
            current: b,
            next: M,
            stackedOnCurrent: S,
            stackedOnNext: I,
            status: T
          }
        },
        Sy = q,
        Iy = Y,
        Ty = V,
        Ay = N,
        Cy = [],
        ky = [],
        Dy = [],
        Ly = Ti.extend({
          type: "ec-polyline",
          shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
          },
          style: {
            fill: null,
            stroke: "#000"
          },
          brush: kg(Ti.prototype.brush),
          buildPath: function (t, e) {
            var n = e.points,
              i = 0,
              r = n.length,
              o = Fa(n, e.smoothConstraint);
            if (e.connectNulls) {
              for (; r > 0 && Ga(n[r - 1]); r--)
              ;
              for (; i < r && Ga(n[i]); i++)
              ;
            }
            for (; i < r;)
              i += Ha(t, n, i, r, r, 1, o.min, o.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
          }
        }),
        Py = Ti.extend({
          type: "ec-polygon",
          shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
          },
          brush: kg(Ti.prototype.brush),
          buildPath: function (t, e) {
            var n = e.points,
              i = e.stackedOnPoints,
              r = 0,
              o = n.length,
              a = e.smoothMonotone,
              s = Fa(n, e.smoothConstraint),
              l = Fa(i, e.smoothConstraint);
            if (e.connectNulls) {
              for (; o > 0 && Ga(n[o - 1]); o--)
              ;
              for (; r < o && Ga(n[r]); r++)
              ;
            }
            for (; r < o;) {
              var h = Ha(t, n, r, o, o, 1, s.min, s.max, e.smooth, a, e.connectNulls);
              Ha(t, i, r + h - 1, h, o, -1, l.min, l.max, e.stackedOnSmooth, a, e.connectNulls),
                r += h + 1,
                t.closePath()
            }
          }
        });
      go.extend({
        type: "line",
        init: function () {
          var t = new yf,
            e = new Na;
          this.group.add(e.group),
            this._symbolDraw = e,
            this._lineGroup = t
        },
        render: function (t, e, n) {
          var i = t.coordinateSystem,
            r = this.group,
            a = t.getData(),
            s = t.getModel("lineStyle.normal"),
            l = t.getModel("areaStyle.normal"),
            h = a.mapArray(a.getItemLayout, !0),
            u = "polar" === i.type,
            c = this._coordSys,
            d = this._symbolDraw,
            f = this._polyline,
            p = this._polygon,
            g = this._lineGroup,
            v = t.get("animation"),
            m = !l.isEmpty(),
            y = qa(i, a),
            x = t.get("showSymbol"),
            _ = x && !u && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(a, i),
            w = this._data;
          w && w.eachItemGraphicEl(function (t, e) {
              t.__temp && (r.remove(t),
                w.setItemGraphicEl(e, null))
            }),
            x || d.remove(),
            r.add(g);
          var b = !u && t.get("step");
          f && c.type === i.type && b === this._step ? (m && !p ? p = this._newPolygon(h, y, i, v) : p && !m && (g.remove(p),
              p = this._polygon = null),
            g.setClipPath(Ka(i, !1, t)),
            x && d.updateData(a, _),
            a.eachItemGraphicEl(function (t) {
              t.stopAnimation(!0)
            }),
            Za(this._stackedOnPoints, y) && Za(this._points, h) || (v ? this._updateAnimation(a, y, i, n, b) : (b && (h = Qa(h, i, b),
                y = Qa(y, i, b)),
              f.setShape({
                points: h
              }),
              p && p.setShape({
                points: h,
                stackedOnPoints: y
              })))) : (x && d.updateData(a, _),
            b && (h = Qa(h, i, b),
              y = Qa(y, i, b)),
            f = this._newPolyline(h, i, v),
            m && (p = this._newPolygon(h, y, i, v)),
            g.setClipPath(Ka(i, !0, t)));
          var M = Ja(a, i) || a.getVisual("color");
          f.useStyle(o(s.getLineStyle(), {
            fill: "none",
            stroke: M,
            lineJoin: "bevel"
          }));
          var S = t.get("smooth");
          if (S = Ua(t.get("smooth")),
            f.setShape({
              smooth: S,
              smoothMonotone: t.get("smoothMonotone"),
              connectNulls: t.get("connectNulls")
            }),
            p) {
            var I = a.stackedOn,
              T = 0;
            p.useStyle(o(l.getAreaStyle(), {
                fill: M,
                opacity: .7,
                lineJoin: "bevel"
              })),
              I && (T = Ua(I.hostModel.get("smooth"))),
              p.setShape({
                smooth: S,
                stackedOnSmooth: T,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
              })
          }
          this._data = a,
            this._coordSys = i,
            this._stackedOnPoints = y,
            this._points = h,
            this._step = b
        },
        dispose: function () {},
        highlight: function (t, e, n, i) {
          var r = t.getData(),
            o = Lr(r, i);
          if (!(o instanceof Array) && null != o && o >= 0) {
            var a = r.getItemGraphicEl(o);
            if (!a) {
              var s = r.getItemLayout(o);
              if (!s)
                return;
              (a = new za(r, o)).position = s,
                a.setZ(t.get("zlevel"), t.get("z")),
                a.ignore = isNaN(s[0]) || isNaN(s[1]),
                a.__temp = !0,
                r.setItemGraphicEl(o, a),
                a.stopSymbolAnimation(!0),
                this.group.add(a)
            }
            a.highlight()
          } else
            go.prototype.highlight.call(this, t, e, n, i)
        },
        downplay: function (t, e, n, i) {
          var r = t.getData(),
            o = Lr(r, i);
          if (null != o && o >= 0) {
            var a = r.getItemGraphicEl(o);
            a && (a.__temp ? (r.setItemGraphicEl(o, null),
              this.group.remove(a)) : a.downplay())
          } else
            go.prototype.downplay.call(this, t, e, n, i)
        },
        _newPolyline: function (t) {
          var e = this._polyline;
          return e && this._lineGroup.remove(e),
            e = new Ly({
              shape: {
                points: t
              },
              silent: !0,
              z2: 10
            }),
            this._lineGroup.add(e),
            this._polyline = e,
            e
        },
        _newPolygon: function (t, e) {
          var n = this._polygon;
          return n && this._lineGroup.remove(n),
            n = new Py({
              shape: {
                points: t,
                stackedOnPoints: e
              },
              silent: !0
            }),
            this._lineGroup.add(n),
            this._polygon = n,
            n
        },
        _getSymbolIgnoreFunc: function (t, e) {
          var n = e.getAxesByScale("ordinal")[0];
          if (n && n.isLabelIgnored)
            return g(n.isLabelIgnored, n)
        },
        _updateAnimation: function (t, e, n, i, r) {
          var o = this._polyline,
            a = this._polygon,
            s = t.hostModel,
            l = My(this._data, t, this._stackedOnPoints, e, this._coordSys, n),
            h = l.current,
            u = l.stackedOnCurrent,
            c = l.next,
            d = l.stackedOnNext;
          r && (h = Qa(l.current, n, r),
              u = Qa(l.stackedOnCurrent, n, r),
              c = Qa(l.next, n, r),
              d = Qa(l.stackedOnNext, n, r)),
            o.shape.__points = l.current,
            o.shape.points = h,
            dr(o, {
              shape: {
                points: c
              }
            }, s),
            a && (a.setShape({
                points: h,
                stackedOnPoints: u
              }),
              dr(a, {
                shape: {
                  points: c,
                  stackedOnPoints: d
                }
              }, s));
          for (var f = [], p = l.status, g = 0; g < p.length; g++)
            if ("=" === p[g].cmd) {
              var v = t.getItemGraphicEl(p[g].idx1);
              v && f.push({
                el: v,
                ptIdx: g
              })
            }
          o.animators && o.animators.length && o.animators[0].during(function () {
            for (var t = 0; t < f.length; t++)
              f[t].el.attr("position", o.shape.__points[f[t].ptIdx])
          })
        },
        remove: function (t) {
          var e = this.group,
            n = this._data;
          this._lineGroup.removeAll(),
            this._symbolDraw.remove(!0),
            n && n.eachItemGraphicEl(function (t, i) {
              t.__temp && (e.remove(t),
                n.setItemGraphicEl(i, null))
            }),
            this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
      });
      var Oy = function (t, e, n, i, r) {
          i.eachRawSeriesByType(t, function (t) {
            var r = t.getData(),
              o = t.get("symbol") || e,
              a = t.get("symbolSize");
            r.setVisual({
                legendSymbol: n || o,
                symbol: o,
                symbolSize: a
              }),
              i.isSeriesFiltered(t) || ("function" == typeof a && r.each(function (e) {
                  var n = t.getRawValue(e),
                    i = t.getDataParams(e);
                  r.setItemVisual(e, "symbolSize", a(n, i))
                }),
                r.each(function (t) {
                  var e = r.getItemModel(t),
                    n = e.getShallow("symbol", !0),
                    i = e.getShallow("symbolSize", !0);
                  null != n && r.setItemVisual(t, "symbol", n),
                    null != i && r.setItemVisual(t, "symbolSize", i)
                }))
          })
        },
        zy = function (t, e) {
          e.eachSeriesByType(t, function (t) {
            var e = t.getData(),
              n = t.coordinateSystem;
            if (n) {
              for (var i = [], r = n.dimensions, o = 0; o < r.length; o++)
                i.push(t.coordDimToDataDim(n.dimensions[o])[0]);
              1 === i.length ? e.each(i[0], function (t, i) {
                e.setItemLayout(i, isNaN(t) ? [NaN, NaN] : n.dataToPoint(t))
              }) : 2 === i.length && e.each(i, function (t, i, r) {
                e.setItemLayout(r, isNaN(t) || isNaN(i) ? [NaN, NaN] : n.dataToPoint([t, i]))
              }, !0)
            }
          })
        },
        Ey = {
          average: function (t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++)
              isNaN(t[i]) || (e += t[i],
                n++);
            return 0 === n ? NaN : e / n
          },
          sum: function (t) {
            for (var e = 0, n = 0; n < t.length; n++)
              e += t[n] || 0;
            return e
          },
          max: function (t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++)
              t[n] > e && (e = t[n]);
            return e
          },
          min: function (t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++)
              t[n] < e && (e = t[n]);
            return e
          },
          nearest: function (t) {
            return t[0]
          }
        },
        Ny = function (t, e) {
          return Math.round(t.length / 2)
        },
        By = function (t) {
          this._axes = {},
            this._dimList = [],
            this.name = t || ""
        };
      By.prototype = {
          constructor: By,
          type: "cartesian",
          getAxis: function (t) {
            return this._axes[t]
          },
          getAxes: function () {
            return d(this._dimList, ts, this)
          },
          getAxesByScale: function (t) {
            return t = t.toLowerCase(),
              p(this.getAxes(), function (e) {
                return e.scale.type === t
              })
          },
          addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t,
              this._dimList.push(e)
          },
          dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
          },
          coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
          },
          _dataCoordConvert: function (t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
              var o = n[r],
                a = this._axes[o];
              i[o] = a[e](t[o])
            }
            return i
          }
        },
        es.prototype = {
          constructor: es,
          type: "cartesian2d",
          dimensions: ["x", "y"],
          getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
          },
          containPoint: function (t) {
            var e = this.getAxis("x"),
              n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
          },
          containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
          },
          dataToPoint: function (t, e) {
            var n = this.getAxis("x"),
              i = this.getAxis("y");
            return [n.toGlobalCoord(n.dataToCoord(t[0], e)), i.toGlobalCoord(i.dataToCoord(t[1], e))]
          },
          pointToData: function (t, e) {
            var n = this.getAxis("x"),
              i = this.getAxis("y");
            return [n.coordToData(n.toLocalCoord(t[0]), e), i.coordToData(i.toLocalCoord(t[1]), e)]
          },
          getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
          }
        },
        l(es, By);
      var Ry = function (t, e, n, i, r) {
        gy.call(this, t, e, n),
          this.type = i || "value",
          this.position = r || "bottom"
      };
      Ry.prototype = {
          constructor: Ry,
          index: 0,
          onZero: !1,
          model: null,
          isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
          },
          getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]),
              e[1] = this.toGlobalCoord(e[1]),
              t && e[0] > e[1] && e.reverse(),
              e
          },
          getOtherAxis: function () {
            this.grid.getOtherAxis()
          },
          isLabelIgnored: function (t) {
            if ("category" === this.type) {
              var e = this.getLabelInterval();
              return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
            }
          },
          pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
          },
          toLocalCoord: null,
          toGlobalCoord: null
        },
        l(Ry, gy);
      var Vy = {
          show: !0,
          zlevel: 0,
          z: 0,
          inverse: !1,
          name: "",
          nameLocation: "end",
          nameRotate: null,
          nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
          },
          nameTextStyle: {},
          nameGap: 15,
          silent: !1,
          triggerEvent: !1,
          tooltip: {
            show: !1
          },
          axisPointer: {},
          axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
              color: "#333",
              width: 1,
              type: "solid"
            },
            symbol: ["none", "none"],
            symbolSize: [10, 15]
          },
          axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
              width: 1
            }
          },
          axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
          },
          splitLine: {
            show: !0,
            lineStyle: {
              color: ["#ccc"],
              width: 1,
              type: "solid"
            }
          },
          splitArea: {
            show: !1,
            areaStyle: {
              color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            }
          }
        },
        Wy = {};
      Wy.categoryAxis = n({
          boundaryGap: !0,
          splitLine: {
            show: !1
          },
          axisTick: {
            alignWithLabel: !1,
            interval: "auto"
          },
          axisLabel: {
            interval: "auto"
          }
        }, Vy),
        Wy.valueAxis = n({
          boundaryGap: [0, 0],
          splitNumber: 5
        }, Vy),
        Wy.timeAxis = o({
          scale: !0,
          min: "dataMin",
          max: "dataMax"
        }, Wy.valueAxis),
        Wy.logAxis = o({
          scale: !0,
          logBase: 10
        }, Wy.valueAxis);
      var Gy = ["value", "category", "time", "log"],
        Hy = function (t, e, r, o) {
          c(Gy, function (a) {
              e.extend({
                type: t + "Axis." + a,
                mergeDefaultAndTheme: function (e, i) {
                  var o = this.layoutMode,
                    s = o ? Hr(e) : {};
                  n(e, i.getTheme().get(a + "Axis")),
                    n(e, this.getDefaultOption()),
                    e.type = r(t, e),
                    o && Gr(e, s, o)
                },
                defaultOption: i([{}, Wy[a + "Axis"], o], !0)
              })
            }),
            pv.registerSubTypeDefaulter(t + "Axis", v(r, t))
        },
        Fy = pv.extend({
          type: "cartesian2dAxis",
          axis: null,
          init: function () {
            Fy.superApply(this, "init", arguments),
              this.resetRange()
          },
          mergeOption: function () {
            Fy.superApply(this, "mergeOption", arguments),
              this.resetRange()
          },
          restoreData: function () {
            Fy.superApply(this, "restoreData", arguments),
              this.resetRange()
          },
          getCoordSysModel: function () {
            return this.ecModel.queryComponents({
              mainType: "grid",
              index: this.option.gridIndex,
              id: this.option.gridId
            })[0]
          }
        });
      n(Fy.prototype, ry);
      var Zy = {
        offset: 0
      };
      Hy("x", Fy, ns, Zy),
        Hy("y", Fy, ns, Zy),
        pv.extend({
          type: "grid",
          dependencies: ["xAxis", "yAxis"],
          layoutMode: "box",
          coordinateSystem: null,
          defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
          }
        });
      var Uy = c,
        Xy = function (t) {
          var e = t.scale.getExtent(),
            n = e[0],
            i = e[1];
          return !(n > 0 && i > 0 || n < 0 && i < 0)
        },
        jy = ba,
        qy = as.prototype;
      qy.type = "grid",
        qy.axisPointerEnabled = !0,
        qy.getRect = function () {
          return this._rect
        },
        qy.update = function (t, e) {
          var n = this._axesMap;
          this._updateScale(t, this.model),
            Uy(n.x, function (t) {
              jy(t.scale, t.model)
            }),
            Uy(n.y, function (t) {
              jy(t.scale, t.model)
            }),
            Uy(n.x, function (t) {
              ss(n, "y", t)
            }),
            Uy(n.y, function (t) {
              ss(n, "x", t)
            }),
            this.resize(this.model, e)
        },
        qy.resize = function (t, e, n) {
          function i() {
            Uy(o, function (t) {
              var e = t.isHorizontal(),
                n = e ? [0, r.width] : [0, r.height],
                i = t.inverse ? 1 : 0;
              t.setExtent(n[i], n[1 - i]),
                hs(t, e ? r.x : r.y)
            })
          }
          var r = Vr(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
          });
          this._rect = r;
          var o = this._axesList;
          i(),
            !n && t.get("containLabel") && (Uy(o, function (t) {
                if (!t.model.get("axisLabel.inside")) {
                  var e = os(t);
                  if (e) {
                    var n = t.isHorizontal() ? "height" : "width",
                      i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i,
                      "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
                  }
                }
              }),
              i())
        },
        qy.getAxis = function (t, e) {
          var n = this._axesMap[t];
          if (null != n) {
            if (null == e)
              for (var i in n)
                if (n.hasOwnProperty(i))
                  return n[i];
            return n[e]
          }
        },
        qy.getAxes = function () {
          return this._axesList.slice()
        },
        qy.getCartesian = function (t, e) {
          if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
          }
          _(t) && (e = t.yAxisIndex,
            t = t.xAxisIndex);
          for (var i = 0, r = this._coordsList; i < r.length; i++)
            if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e)
              return r[i]
        },
        qy.getCartesians = function () {
          return this._coordsList.slice()
        },
        qy.convertToPixel = function (t, e, n) {
          var i = this._findConvertTarget(t, e);
          return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
        },
        qy.convertFromPixel = function (t, e, n) {
          var i = this._findConvertTarget(t, e);
          return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
        },
        qy._findConvertTarget = function (t, e) {
          var n, i, r = e.seriesModel,
            o = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            a = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
            l = e.gridModel,
            h = this._coordsList;
          return r ? s(h, n = r.coordinateSystem) < 0 && (n = null) : o && a ? n = this.getCartesian(o.componentIndex, a.componentIndex) : o ? i = this.getAxis("x", o.componentIndex) : a ? i = this.getAxis("y", a.componentIndex) : l && l.coordinateSystem === this && (n = this._coordsList[0]), {
            cartesian: n,
            axis: i
          }
        },
        qy.containPoint = function (t) {
          var e = this._coordsList[0];
          if (e)
            return e.containPoint(t)
        },
        qy._initCartesian = function (t, e, n) {
          function i(n) {
            return function (i, s) {
              if (is(i, t, e)) {
                var l = i.get("position");
                "x" === n ? "top" !== l && "bottom" !== l && r[l = "bottom"] && (l = "top" === l ? "bottom" : "top") : "left" !== l && "right" !== l && r[l = "left"] && (l = "left" === l ? "right" : "left"),
                  r[l] = !0;
                var h = new Ry(n, Ma(i), [0, 0], i.get("type"), l),
                  u = "category" === h.type;
                h.onBand = u && i.get("boundaryGap"),
                  h.inverse = i.get("inverse"),
                  h.onZero = i.get("axisLine.onZero"),
                  h.onZeroAxisIndex = i.get("axisLine.onZeroAxisIndex"),
                  i.axis = h,
                  h.model = i,
                  h.grid = this,
                  h.index = s,
                  this._axesList.push(h),
                  o[n][s] = h,
                  a[n]++
              }
            }
          }
          var r = {
              left: !1,
              right: !1,
              top: !1,
              bottom: !1
            },
            o = {
              x: {},
              y: {}
            },
            a = {
              x: 0,
              y: 0
            };
          if (e.eachComponent("xAxis", i("x"), this),
            e.eachComponent("yAxis", i("y"), this),
            !a.x || !a.y)
            return this._axesMap = {},
              void(this._axesList = []);
          this._axesMap = o,
            Uy(o.x, function (e, n) {
              Uy(o.y, function (i, r) {
                var o = "x" + n + "y" + r,
                  a = new es(o);
                a.grid = this,
                  a.model = t,
                  this._coordsMap[o] = a,
                  this._coordsList.push(a),
                  a.addAxis(e),
                  a.addAxis(i)
              }, this)
            }, this)
        },
        qy._updateScale = function (t, e) {
          function n(t, e, n) {
            Uy(n.coordDimToDataDim(e.dim), function (n) {
              e.scale.unionExtentFromData(t, n)
            })
          }
          c(this._axesList, function (t) {
              t.scale.setExtent(1 / 0, -1 / 0)
            }),
            t.eachSeries(function (i) {
              if (cs(i)) {
                var r = us(i),
                  o = r[0],
                  a = r[1];
                if (!is(o, e, t) || !is(a, e, t))
                  return;
                var s = this.getCartesian(o.componentIndex, a.componentIndex),
                  l = i.getData(),
                  h = s.getAxis("x"),
                  u = s.getAxis("y");
                "list" === l.type && (n(l, h, i),
                  n(l, u, i))
              }
            }, this)
        },
        qy.getTooltipAxes = function (t) {
          var e = [],
            n = [];
          return Uy(this.getCartesians(), function (i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
              o = i.getOtherAxis(r);
            s(e, r) < 0 && e.push(r),
              s(n, o) < 0 && n.push(o)
          }), {
            baseAxes: e,
            otherAxes: n
          }
        };
      var Yy = ["xAxis", "yAxis"];
      as.create = function (t, e) {
          var n = [];
          return t.eachComponent("grid", function (i, r) {
              var o = new as(i, t, e);
              o.name = "grid_" + r,
                o.resize(i, e, !0),
                i.coordinateSystem = o,
                n.push(o)
            }),
            t.eachSeries(function (t) {
              if (cs(t)) {
                var e = us(t),
                  n = e[0],
                  i = e[1],
                  r = n.getCoordSysModel(),
                  o = r.coordinateSystem;
                t.coordinateSystem = o.getCartesian(n.componentIndex, i.componentIndex)
              }
            }),
            n
        },
        as.dimensions = as.prototype.dimensions = es.prototype.dimensions,
        Qr.register("cartesian2d", as);
      var $y = Math.PI,
        Ky = function (t, e) {
          this.opt = e,
            this.axisModel = t,
            o(e, {
              labelOffset: 0,
              nameDirection: 1,
              tickDirection: 1,
              labelDirection: 1,
              silent: !0
            }),
            this.group = new yf;
          var n = new yf({
            position: e.position.slice(),
            rotation: e.rotation
          });
          n.updateTransform(),
            this._transform = n.transform,
            this._dumbGroup = n
        };
      Ky.prototype = {
        constructor: Ky,
        hasBuilder: function (t) {
          return !!Qy[t]
        },
        add: function (t) {
          Qy[t].call(this)
        },
        getGroup: function () {
          return this.group
        }
      };
      var Qy = {
          axisLine: function () {
            var t = this.opt,
              e = this.axisModel;
            if (e.get("axisLine.show")) {
              var n = this.axisModel.axis.getExtent(),
                i = this._transform,
                o = [n[0], 0],
                a = [n[1], 0];
              i && (j(o, o, i),
                j(a, a, i));
              var s = r({
                lineCap: "round"
              }, e.getModel("axisLine.lineStyle").getLineStyle());
              this.group.add(new Bg(Wi({
                anid: "line",
                shape: {
                  x1: o[0],
                  y1: o[1],
                  x2: a[0],
                  y2: a[1]
                },
                style: s,
                strokeContainThreshold: t.strokeContainThreshold || 5,
                silent: !0,
                z2: 1
              })));
              var l = e.get("axisLine.symbol"),
                h = e.get("axisLine.symbolSize");
              if (null != l) {
                "string" == typeof l && (l = [l, l]),
                  "string" != typeof h && "number" != typeof h || (h = [h, h]);
                var u = h[0],
                  d = h[1];
                c([
                  [t.rotation + Math.PI / 2, o],
                  [t.rotation - Math.PI / 2, a]
                ], function (t, e) {
                  if ("none" !== l[e] && null != l[e]) {
                    var n = ka(l[e], -u / 2, -d / 2, u, d, s.stroke, !0);
                    n.attr({
                        rotation: t[0],
                        position: t[1],
                        silent: !0
                      }),
                      this.group.add(n)
                  }
                }, this)
              }
            }
          },
          axisTickLabel: function () {
            var t = this.axisModel,
              e = this.opt,
              n = xs(this, t, e);
            gs(t, _s(this, t, e), n)
          },
          axisName: function () {
            var t = this.opt,
              e = this.axisModel,
              n = S(t.axisName, e.get("name"));
            if (n) {
              var i, o = e.get("nameLocation"),
                a = t.nameDirection,
                s = e.getModel("nameTextStyle"),
                l = e.get("nameGap") || 0,
                h = this.axisModel.axis.getExtent(),
                u = h[0] > h[1] ? -1 : 1,
                c = ["start" === o ? h[0] - u * l : "end" === o ? h[1] + u * l : (h[0] + h[1]) / 2, ys(o) ? t.labelOffset + a * l : 0],
                d = e.get("nameRotate");
              null != d && (d = d * $y / 180);
              var f;
              ys(o) ? i = Jy(t.rotation, null != d ? d : t.rotation, a) : (i = fs(t, o, d || 0, h),
                null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(i.rotation)),
                  !isFinite(f) && (f = null)));
              var p = s.getFont(),
                g = e.get("nameTruncate", !0) || {},
                v = g.ellipsis,
                m = S(t.nameTruncateMaxWidth, g.maxWidth, f),
                y = null != v && null != m ? vp(n, m, p, v, {
                  minChar: 2,
                  placeholder: g.placeholder
                }) : n,
                x = e.get("tooltip", !0),
                _ = e.mainType,
                w = {
                  componentType: _,
                  name: n,
                  $vars: ["name"]
                };
              w[_ + "Index"] = e.componentIndex;
              var b = new Tg({
                anid: "name",
                __fullText: n,
                __truncatedText: y,
                position: c,
                rotation: i.rotation,
                silent: ps(e),
                z2: 1,
                tooltip: x && x.show ? r({
                  content: n,
                  formatter: function () {
                    return n
                  },
                  formatterParams: w
                }, x) : null
              });
              ir(b.style, s, {
                  text: y,
                  textFont: p,
                  textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                  textAlign: i.textAlign,
                  textVerticalAlign: i.textVerticalAlign
                }),
                e.get("triggerEvent") && (b.eventData = ds(e),
                  b.eventData.targetType = "axisName",
                  b.eventData.name = n),
                this._dumbGroup.add(b),
                b.updateTransform(),
                this.group.add(b),
                b.decomposeTransform()
            }
          }
        },
        Jy = Ky.innerTextLayout = function (t, e, n) {
          var i, r, o = Tn(e - t);
          return An(o) ? (r = n > 0 ? "top" : "bottom",
            i = "center") : An(o - $y) ? (r = n > 0 ? "bottom" : "top",
            i = "center") : (r = "middle",
            i = o > 0 && o < $y ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
            rotation: o,
            textAlign: i,
            textVerticalAlign: r
          }
        },
        tx = Ky.ifIgnoreOnTick = function (t, e, n, i, r, o) {
          if (0 === e && r || e === i - 1 && o)
            return !1;
          var a, s = t.scale;
          return "ordinal" === s.type && ("function" == typeof n ? (a = s.getTicks()[e],
            !n(a, s.getLabel(a))) : e % (n + 1))
        },
        ex = Ky.getInterval = function (t, e) {
          var n = t.get("interval");
          return null != n && "auto" != n || (n = e),
            n
        },
        nx = c,
        ix = v,
        rx = $o({
          type: "axis",
          _axisPointer: null,
          axisPointerClass: null,
          render: function (t, e, n, i) {
            this.axisPointerClass && As(t),
              rx.superApply(this, "render", arguments),
              Ps(this, t, 0, n, 0, !0)
          },
          updateAxisPointer: function (t, e, n, i, r) {
            Ps(this, t, 0, n, 0, !1)
          },
          remove: function (t, e) {
            var n = this._axisPointer;
            n && n.remove(e),
              rx.superApply(this, "remove", arguments)
          },
          dispose: function (t, e) {
            Os(this, e),
              rx.superApply(this, "dispose", arguments)
          }
        }),
        ox = [];
      rx.registerAxisPointerClass = function (t, e) {
          ox[t] = e
        },
        rx.getAxisPointerClass = function (t) {
          return t && ox[t]
        };
      var ax = Ky.ifIgnoreOnTick,
        sx = Ky.getInterval,
        lx = ["axisLine", "axisTickLabel", "axisName"],
        hx = ["splitArea", "splitLine"],
        ux = rx.extend({
          type: "cartesianAxis",
          axisPointerClass: "CartesianAxisPointer",
          render: function (t, e, n, i) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new yf,
              this.group.add(this._axisGroup),
              t.get("show")) {
              var o = t.getCoordSysModel(),
                a = zs(o, t),
                s = new Ky(t, a);
              c(lx, s.add, s),
                this._axisGroup.add(s.getGroup()),
                c(hx, function (e) {
                  t.get(e + ".show") && this["_" + e](t, o, a.labelInterval)
                }, this),
                mr(r, this._axisGroup, t),
                ux.superCall(this, "render", t, e, n, i)
            }
          },
          _splitLine: function (t, e, n) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
              var r = t.getModel("splitLine"),
                a = r.getModel("lineStyle"),
                s = a.get("color"),
                l = sx(r, n);
              s = m(s) ? s : [s];
              for (var h = e.coordinateSystem.getRect(), u = i.isHorizontal(), c = 0, d = i.getTicksCoords(), f = i.scale.getTicks(), p = t.get("axisLabel.showMinLabel"), g = t.get("axisLabel.showMaxLabel"), v = [], y = [], x = a.getLineStyle(), _ = 0; _ < d.length; _++)
                if (!ax(i, _, l, d.length, p, g)) {
                  var w = i.toGlobalCoord(d[_]);
                  u ? (v[0] = w,
                    v[1] = h.y,
                    y[0] = w,
                    y[1] = h.y + h.height) : (v[0] = h.x,
                    v[1] = w,
                    y[0] = h.x + h.width,
                    y[1] = w);
                  var b = c++ % s.length;
                  this._axisGroup.add(new Bg(Wi({
                    anid: "line_" + f[_],
                    shape: {
                      x1: v[0],
                      y1: v[1],
                      x2: y[0],
                      y2: y[1]
                    },
                    style: o({
                      stroke: s[b]
                    }, x),
                    silent: !0
                  })))
                }
            }
          },
          _splitArea: function (t, e, n) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
              var r = t.getModel("splitArea"),
                a = r.getModel("areaStyle"),
                s = a.get("color"),
                l = e.coordinateSystem.getRect(),
                h = i.getTicksCoords(),
                u = i.scale.getTicks(),
                c = i.toGlobalCoord(h[0]),
                d = i.toGlobalCoord(h[0]),
                f = 0,
                p = sx(r, n),
                g = a.getAreaStyle();
              s = m(s) ? s : [s];
              for (var v = t.get("axisLabel.showMinLabel"), y = t.get("axisLabel.showMaxLabel"), x = 1; x < h.length; x++)
                if (!ax(i, x, p, h.length, v, y)) {
                  var _, w, b, M, S = i.toGlobalCoord(h[x]);
                  i.isHorizontal() ? (_ = c,
                    w = l.y,
                    b = S - _,
                    M = l.height) : (_ = l.x,
                    w = d,
                    b = l.width,
                    M = S - w);
                  var I = f++ % s.length;
                  this._axisGroup.add(new Ng({
                      anid: "area_" + u[x],
                      shape: {
                        x: _,
                        y: w,
                        width: b,
                        height: M
                      },
                      style: o({
                        fill: s[I]
                      }, g),
                      silent: !0
                    })),
                    c = _ + b,
                    d = w + M
                }
            }
          }
        });
      ux.extend({
          type: "xAxis"
        }),
        ux.extend({
          type: "yAxis"
        }),
        $o({
          type: "grid",
          render: function (t, e) {
            this.group.removeAll(),
              t.get("show") && this.group.add(new Ng({
                shape: t.coordinateSystem.getRect(),
                style: o({
                  fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
              }))
          }
        }),
        Fo(function (t) {
          t.xAxis && t.yAxis && !t.grid && (t.grid = {})
        }),
        jo(v(Oy, "line", "circle", "line")),
        Xo(v(zy, "line")),
        Zo(nm.PROCESSOR.STATISTIC, v(function (t, e, n) {
          e.eachSeriesByType(t, function (t) {
            var e = t.getData(),
              n = t.get("sampling"),
              i = t.coordinateSystem;
            if ("cartesian2d" === i.type && n) {
              var r = i.getBaseAxis(),
                o = i.getOtherAxis(r),
                a = r.getExtent(),
                s = a[1] - a[0],
                l = Math.round(e.count() / s);
              if (l > 1) {
                var h;
                "string" == typeof n ? h = Ey[n] : "function" == typeof n && (h = n),
                  h && (e = e.downSample(o.dim, 1 / l, h, Ny),
                    t.setData(e))
              }
            }
          }, this)
        }, "line"));
      var cx = "__ec_stack_";
      Vs.getLayoutOnAxis = function (t, e) {
          var n = [],
            i = t.axis;
          if ("category" === i.type) {
            for (var r = i.getBandWidth(), a = 0; a < t.count; a++)
              n.push(o({
                bandWidth: r,
                axisKey: "axis0",
                stackId: cx + a
              }, t));
            for (var s = Rs(n), l = [], a = 0; a < t.count; a++) {
              var h = s.axis0[cx + a];
              h.offsetCenter = h.offset + h.width / 2,
                l.push(h)
            }
            return l
          }
        },
        Gv.extend({
          type: "series.__base_bar__",
          getInitialData: function (t, e) {
            return ua(t.data, this, e)
          },
          getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
              var n = e.dataToPoint(t, !0),
                i = this.getData(),
                r = i.getLayout("offset"),
                o = i.getLayout("size");
              return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + o / 2,
                n
            }
            return [NaN, NaN]
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            itemStyle: {}
          }
        }).extend({
          type: "series.bar",
          dependencies: ["grid", "polar"],
          brushSelector: "rect"
        });
      var dx = bp([
          ["fill", "color"],
          ["stroke", "borderColor"],
          ["lineWidth", "borderWidth"],
          ["stroke", "barBorderColor"],
          ["lineWidth", "barBorderWidth"],
          ["opacity"],
          ["shadowBlur"],
          ["shadowOffsetX"],
          ["shadowOffsetY"],
          ["shadowColor"]
        ]),
        fx = {
          getBarItemStyle: function (t) {
            var e = dx(this, t);
            if (this.getBorderLineDash) {
              var n = this.getBorderLineDash();
              n && (e.lineDash = n)
            }
            return e
          }
        },
        px = ["itemStyle", "normal", "barBorderWidth"];
      r(_r.prototype, fx),
        Qo({
          type: "bar",
          render: function (t, e, n) {
            var i = t.get("coordinateSystem");
            return "cartesian2d" !== i && "polar" !== i || this._render(t, e, n),
              this.group
          },
          dispose: z,
          _render: function (t, e, n) {
            var i, r = this.group,
              o = t.getData(),
              a = this._data,
              s = t.coordinateSystem,
              l = s.getBaseAxis();
            "cartesian2d" === s.type ? i = l.isHorizontal() : "polar" === s.type && (i = "angle" === l.dim);
            var h = t.isAnimationEnabled() ? t : null;
            o.diff(a).add(function (e) {
                if (o.hasValue(e)) {
                  var n = o.getItemModel(e),
                    a = vx[s.type](o, e, n),
                    l = gx[s.type](o, e, n, a, i, h);
                  o.setItemGraphicEl(e, l),
                    r.add(l),
                    Zs(l, o, e, n, a, t, i, "polar" === s.type)
                }
              }).update(function (e, n) {
                var l = a.getItemGraphicEl(n);
                if (o.hasValue(e)) {
                  var u = o.getItemModel(e),
                    c = vx[s.type](o, e, u);
                  l ? dr(l, {
                      shape: c
                    }, h, e) : l = gx[s.type](o, e, u, c, i, h, !0),
                    o.setItemGraphicEl(e, l),
                    r.add(l),
                    Zs(l, o, e, u, c, t, i, "polar" === s.type)
                } else
                  r.remove(l)
              }).remove(function (t) {
                var e = a.getItemGraphicEl(t);
                "cartesian2d" === s.type ? e && Hs(t, h, e) : e && Fs(t, h, e)
              }).execute(),
              this._data = o
          },
          remove: function (t, e) {
            var n = this.group,
              i = this._data;
            t.get("animation") ? i && i.eachItemGraphicEl(function (e) {
              "sector" === e.type ? Fs(e.dataIndex, t, e) : Hs(e.dataIndex, t, e)
            }) : n.removeAll()
          }
        });
      var gx = {
          cartesian2d: function (t, e, n, i, o, a, s) {
            var l = new Ng({
              shape: r({}, i)
            });
            if (a) {
              var h = l.shape,
                u = o ? "height" : "width",
                c = {};
              h[u] = 0,
                c[u] = i[u],
                Yg[s ? "updateProps" : "initProps"](l, {
                  shape: c
                }, a, e)
            }
            return l
          },
          polar: function (t, e, n, i, o, a, s) {
            var l = new Dg({
              shape: r({}, i)
            });
            if (a) {
              var h = l.shape,
                u = o ? "r" : "endAngle",
                c = {};
              h[u] = o ? 0 : i.startAngle,
                c[u] = i[u],
                Yg[s ? "updateProps" : "initProps"](l, {
                  shape: c
                }, a, e)
            }
            return l
          }
        },
        vx = {
          cartesian2d: function (t, e, n) {
            var i = t.getItemLayout(e),
              r = Us(n, i),
              o = i.width > 0 ? 1 : -1,
              a = i.height > 0 ? 1 : -1;
            return {
              x: i.x + o * r / 2,
              y: i.y + a * r / 2,
              width: i.width - o * r,
              height: i.height - a * r
            }
          },
          polar: function (t, e, n) {
            var i = t.getItemLayout(e);
            return {
              cx: i.cx,
              cy: i.cy,
              r0: i.r0,
              r: i.r,
              startAngle: i.startAngle,
              endAngle: i.endAngle
            }
          }
        };
      Xo(v(Vs, "bar")),
        jo(function (t) {
          t.eachSeriesByType("bar", function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
          })
        });
      var mx = {
          updateSelectedMap: function (t) {
            this._targetList = t.slice(),
              this._selectTargetMap = f(t || [], function (t, e) {
                return t.set(e.name, e),
                  t
              }, O())
          },
          select: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            "single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
                t.selected = !1
              }),
              n && (n.selected = !0)
          },
          unSelect: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
          },
          toggleSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            if (null != n)
              return this[n.selected ? "unSelect" : "select"](t, e),
                n.selected
          },
          isSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
          }
        },
        yx = Ko({
          type: "series.pie",
          init: function (t) {
            yx.superApply(this, "init", arguments),
              this.legendDataProvider = function () {
                return this.getRawData()
              },
              this.updateSelectedMap(t.data),
              this._defaultLabelLine(t)
          },
          mergeOption: function (t) {
            yx.superCall(this, "mergeOption", t),
              this.updateSelectedMap(this.option.data)
          },
          getInitialData: function (t, e) {
            var n = aa(["value"], t.data),
              i = new Cm(n, this);
            return i.initData(t.data),
              i
          },
          getDataParams: function (t) {
            var e = this.getData(),
              n = yx.superCall(this, "getDataParams", t),
              i = [];
            return e.each("value", function (t) {
                i.push(t)
              }),
              n.percent = In(i, t, e.hostModel.get("percentPrecision")),
              n.$vars.push("percent"),
              n
          },
          _defaultLabelLine: function (t) {
            Sr(t.labelLine, ["show"]);
            var e = t.labelLine.normal,
              n = t.labelLine.emphasis;
            e.show = e.show && t.label.normal.show,
              n.show = n.show && t.label.emphasis.show
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {
              normal: {
                rotate: !1,
                show: !0,
                position: "outer"
              },
              emphasis: {}
            },
            labelLine: {
              normal: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                lineStyle: {
                  width: 1,
                  type: "solid"
                }
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 1
              },
              emphasis: {}
            },
            animationType: "expansion",
            animationEasing: "cubicOut",
            data: []
          }
        });
      h(yx, mx);
      var xx = qs.prototype;
      xx.updateData = function (t, e, n) {
          function i() {
            s.stopAnimation(!0),
              s.animateTo({
                shape: {
                  r: u.r + l.get("hoverOffset")
                }
              }, 300, "elasticOut")
          }

          function a() {
            s.stopAnimation(!0),
              s.animateTo({
                shape: {
                  r: u.r
                }
              }, 300, "elasticOut")
          }
          var s = this.childAt(0),
            l = t.hostModel,
            h = t.getItemModel(e),
            u = t.getItemLayout(e),
            c = r({}, u);
          c.label = null,
            n ? (s.setShape(c),
              "scale" === l.getShallow("animationType") ? (s.shape.r = u.r0,
                fr(s, {
                  shape: {
                    r: u.r
                  }
                }, l, e)) : (s.shape.endAngle = u.startAngle,
                dr(s, {
                  shape: {
                    endAngle: u.endAngle
                  }
                }, l, e))) : dr(s, {
              shape: c
            }, l, e);
          var d = h.getModel("itemStyle"),
            f = t.getItemVisual(e, "color");
          s.useStyle(o({
              lineJoin: "bevel",
              fill: f
            }, d.getModel("normal").getItemStyle())),
            s.hoverStyle = d.getModel("emphasis").getItemStyle();
          var p = h.getShallow("cursor");
          p && s.attr("cursor", p),
            js(this, t.getItemLayout(e), h.get("selected"), l.get("selectedOffset"), l.get("animation")),
            s.off("mouseover").off("mouseout").off("emphasis").off("normal"),
            h.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", i).on("mouseout", a).on("emphasis", i).on("normal", a),
            this._updateLabel(t, e),
            er(this)
        },
        xx._updateLabel = function (t, e) {
          var n = this.childAt(1),
            i = this.childAt(2),
            r = t.hostModel,
            o = t.getItemModel(e),
            a = t.getItemLayout(e).label,
            s = t.getItemVisual(e, "color");
          dr(n, {
              shape: {
                points: a.linePoints || [
                  [a.x, a.y],
                  [a.x, a.y],
                  [a.x, a.y]
                ]
              }
            }, r, e),
            dr(i, {
              style: {
                x: a.x,
                y: a.y
              }
            }, r, e),
            i.attr({
              rotation: a.rotation,
              origin: [a.x, a.y],
              z2: 10
            });
          var l = o.getModel("label.normal"),
            h = o.getModel("label.emphasis"),
            u = o.getModel("labelLine.normal"),
            c = o.getModel("labelLine.emphasis"),
            s = t.getItemVisual(e, "color");
          nr(i.style, i.hoverStyle = {}, l, h, {
              labelFetcher: t.hostModel,
              labelDataIndex: e,
              defaultText: t.getName(e),
              autoColor: s,
              useInsideStyle: !!a.inside
            }, {
              textAlign: a.textAlign,
              textVerticalAlign: a.verticalAlign,
              opacity: t.getItemVisual(e, "opacity")
            }),
            i.ignore = i.normalIgnore = !l.get("show"),
            i.hoverIgnore = !h.get("show"),
            n.ignore = n.normalIgnore = !u.get("show"),
            n.hoverIgnore = !c.get("show"),
            n.setStyle({
              stroke: s,
              opacity: t.getItemVisual(e, "opacity")
            }),
            n.setStyle(u.getModel("lineStyle").getLineStyle()),
            n.hoverStyle = c.getModel("lineStyle").getLineStyle();
          var d = u.get("smooth");
          d && !0 === d && (d = .4),
            n.setShape({
              smooth: d
            })
        },
        l(qs, yf);
      go.extend({
        type: "pie",
        init: function () {
          var t = new yf;
          this._sectorGroup = t
        },
        render: function (t, e, n, i) {
          if (!i || i.from !== this.uid) {
            var r = t.getData(),
              o = this._data,
              a = this.group,
              s = e.get("animation"),
              l = !o,
              h = t.get("animationType"),
              u = v(Xs, this.uid, t, s, n),
              c = t.get("selectedMode");
            if (r.diff(o).add(function (t) {
                var e = new qs(r, t);
                l && "scale" !== h && e.eachChild(function (t) {
                    t.stopAnimation(!0)
                  }),
                  c && e.on("click", u),
                  r.setItemGraphicEl(t, e),
                  a.add(e)
              }).update(function (t, e) {
                var n = o.getItemGraphicEl(e);
                n.updateData(r, t),
                  n.off("click"),
                  c && n.on("click", u),
                  a.add(n),
                  r.setItemGraphicEl(t, n)
              }).remove(function (t) {
                var e = o.getItemGraphicEl(t);
                a.remove(e)
              }).execute(),
              s && l && r.count() > 0 && "scale" !== h) {
              var d = r.getItemLayout(0),
                f = Math.max(n.getWidth(), n.getHeight()) / 2,
                p = g(a.removeClipPath, a);
              a.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
            }
            this._data = r
          }
        },
        dispose: function () {},
        _createClipPath: function (t, e, n, i, r, o, a) {
          var s = new Dg({
            shape: {
              cx: t,
              cy: e,
              r0: 0,
              r: n,
              startAngle: i,
              endAngle: i,
              clockwise: r
            }
          });
          return fr(s, {
              shape: {
                endAngle: i + (r ? 1 : -1) * Math.PI * 2
              }
            }, a, o),
            s
        },
        containPoint: function (t, e) {
          var n = e.getData().getItemLayout(0);
          if (n) {
            var i = t[0] - n.cx,
              r = t[1] - n.cy,
              o = Math.sqrt(i * i + r * r);
            return o <= n.r && o >= n.r0
          }
        }
      });
      var _x = function (t, e, n, i) {
          var r, o, a = t.getData(),
            s = [],
            l = !1;
          a.each(function (n) {
              var i, h, u, c, d = a.getItemLayout(n),
                f = a.getItemModel(n),
                p = f.getModel("label.normal"),
                g = p.get("position") || f.get("label.emphasis.position"),
                v = f.getModel("labelLine.normal"),
                m = v.get("length"),
                y = v.get("length2"),
                x = (d.startAngle + d.endAngle) / 2,
                _ = Math.cos(x),
                w = Math.sin(x);
              r = d.cx,
                o = d.cy;
              var b = "inside" === g || "inner" === g;
              if ("center" === g)
                i = d.cx,
                h = d.cy,
                c = "center";
              else {
                var M = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r,
                  S = (b ? (d.r + d.r0) / 2 * w : d.r * w) + o;
                if (i = M + 3 * _,
                  h = S + 3 * w,
                  !b) {
                  var I = M + _ * (m + e - d.r),
                    T = S + w * (m + e - d.r),
                    A = I + (_ < 0 ? -1 : 1) * y,
                    C = T;
                  i = A + (_ < 0 ? -5 : 5),
                    h = C,
                    u = [
                      [M, S],
                      [I, T],
                      [A, C]
                    ]
                }
                c = b ? "center" : _ > 0 ? "left" : "right"
              }
              var k = p.getFont(),
                D = p.get("rotate") ? _ < 0 ? -x + Math.PI : -x : 0,
                L = le(t.getFormattedLabel(n, "normal") || a.getName(n), k, c, "top");
              l = !!D,
                d.label = {
                  x: i,
                  y: h,
                  position: g,
                  height: L.height,
                  len: m,
                  len2: y,
                  linePoints: u,
                  textAlign: c,
                  verticalAlign: "middle",
                  rotation: D,
                  inside: b
                },
                b || s.push(d.label)
            }),
            !l && t.get("avoidLabelOverlap") && $s(s, r, o, e, n, i)
        },
        wx = 2 * Math.PI,
        bx = Math.PI / 180;
      ! function (t, e) {
        c(e, function (e) {
          e.update = "updateView",
            Uo(e, function (n, i) {
              var r = {};
              return i.eachComponent({
                mainType: "series",
                subType: t,
                query: n
              }, function (t) {
                t[e.method] && t[e.method](n.name, n.dataIndex);
                var i = t.getData();
                i.each(function (e) {
                  var n = i.getName(e);
                  r[n] = t.isSelected(n) || !1
                })
              }), {
                name: n.name,
                selected: r
              }
            })
        })
      }("pie", [{
        type: "pieToggleSelect",
        event: "pieselectchanged",
        method: "toggleSelected"
      }, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
      }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
      }]),
      jo(v(function (t, e) {
          var n = {};
          e.eachRawSeriesByType(t, function (t) {
            var i = t.getRawData(),
              r = {};
            if (!e.isSeriesFiltered(t)) {
              var o = t.getData();
              o.each(function (t) {
                  var e = o.getRawIndex(t);
                  r[e] = t
                }),
                i.each(function (e) {
                  var a = r[e],
                    s = null != a && o.getItemVisual(a, "color", !0);
                  if (s)
                    i.setItemVisual(e, "color", s);
                  else {
                    var l = i.getItemModel(e).get("itemStyle.normal.color") || t.getColorFromPalette(i.getName(e), n);
                    i.setItemVisual(e, "color", l),
                      null != a && o.setItemVisual(a, "color", l)
                  }
                })
            }
          })
        }, "pie")),
        Xo(v(function (t, e, n, i) {
          e.eachSeriesByType(t, function (t) {
            var e = t.get("center"),
              i = t.get("radius");
            m(i) || (i = [0, i]),
              m(e) || (e = [e, e]);
            var r = n.getWidth(),
              o = n.getHeight(),
              a = Math.min(r, o),
              s = xn(e[0], r),
              l = xn(e[1], o),
              h = xn(i[0], a / 2),
              u = xn(i[1], a / 2),
              c = t.getData(),
              d = -t.get("startAngle") * bx,
              f = t.get("minAngle") * bx,
              p = 0;
            c.each("value", function (t) {
              !isNaN(t) && p++
            });
            var g = c.getSum("value"),
              v = Math.PI / (g || p) * 2,
              y = t.get("clockwise"),
              x = t.get("roseType"),
              _ = t.get("stillShowZeroSum"),
              w = c.getDataExtent("value");
            w[0] = 0;
            var b = wx,
              M = 0,
              S = d,
              I = y ? 1 : -1;
            if (c.each("value", function (t, e) {
                var n;
                if (isNaN(t))
                  c.setItemLayout(e, {
                    angle: NaN,
                    startAngle: NaN,
                    endAngle: NaN,
                    clockwise: y,
                    cx: s,
                    cy: l,
                    r0: h,
                    r: x ? NaN : u
                  });
                else {
                  (n = "area" !== x ? 0 === g && _ ? v : t * v : wx / p) < f ? (n = f,
                    b -= f) : M += t;
                  var i = S + I * n;
                  c.setItemLayout(e, {
                      angle: n,
                      startAngle: S,
                      endAngle: i,
                      clockwise: y,
                      cx: s,
                      cy: l,
                      r0: h,
                      r: x ? yn(t, w, [h, u]) : u
                    }),
                    S = i
                }
              }, !0),
              b < wx && p)
              if (b <= .001) {
                var T = wx / p;
                c.each("value", function (t, e) {
                  if (!isNaN(t)) {
                    var n = c.getItemLayout(e);
                    n.angle = T,
                      n.startAngle = d + I * e * T,
                      n.endAngle = d + I * (e + 1) * T
                  }
                })
              } else
                v = b / M,
                S = d,
                c.each("value", function (t, e) {
                  if (!isNaN(t)) {
                    var n = c.getItemLayout(e),
                      i = n.angle === f ? f : t * v;
                    n.startAngle = S,
                      n.endAngle = S + I * i,
                      S += I * i
                  }
                });
            _x(t, u, r, o)
          })
        }, "pie")),
        Zo(v(function (t, e) {
          var n = e.findComponents({
            mainType: "legend"
          });
          n && n.length && e.eachSeriesByType(t, function (t) {
            var e = t.getData();
            e.filterSelf(function (t) {
              for (var i = e.getName(t), r = 0; r < n.length; r++)
                if (!n[r].isSelected(i))
                  return !1;
              return !0
            }, this)
          }, this)
        }, "pie")),
        Gv.extend({
          type: "series.scatter",
          dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
          getInitialData: function (t, e) {
            return ua(t.data, this, e)
          },
          brushSelector: "point",
          defaultOption: {
            coordinateSystem: "cartesian2d",
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            symbolSize: 10,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: {
              normal: {
                opacity: .8
              }
            }
          }
        });
      var Mx = Ei({
          shape: {
            points: null,
            sizes: null
          },
          symbolProxy: null,
          buildPath: function (t, e) {
            for (var n = e.points, i = e.sizes, r = this.symbolProxy, o = r.shape, a = 0; a < n.length; a++) {
              var s = n[a];
              if (!isNaN(s[0]) && !isNaN(s[1])) {
                var l = i[a];
                l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (o.x = s[0] - l[0] / 2,
                  o.y = s[1] - l[1] / 2,
                  o.width = l[0],
                  o.height = l[1],
                  r.buildPath(t, o, !0))
              }
            }
          },
          findDataIndex: function (t, e) {
            for (var n = this.shape, i = n.points, r = n.sizes, o = i.length - 1; o >= 0; o--) {
              var a = i[o],
                s = r[o],
                l = a[0] - s[0] / 2,
                h = a[1] - s[1] / 2;
              if (t >= l && e >= h && t <= l + s[0] && e <= h + s[1])
                return o
            }
            return -1
          }
        }),
        Sx = Ks.prototype;
      Sx.updateData = function (t) {
          this.group.removeAll();
          var e = this._symbolEl,
            n = t.hostModel;
          e.setShape({
              points: t.mapArray(t.getItemLayout),
              sizes: t.mapArray(function (e) {
                var n = t.getItemVisual(e, "symbolSize");
                return n instanceof Array || (n = [n, n]),
                  n
              })
            }),
            e.symbolProxy = ka(t.getVisual("symbol"), 0, 0, 0, 0),
            e.setColor = e.symbolProxy.setColor,
            e.useStyle(n.getModel("itemStyle.normal").getItemStyle(["color"]));
          var i = t.getVisual("color");
          i && e.setColor(i),
            e.seriesIndex = n.seriesIndex,
            e.on("mousemove", function (t) {
              e.dataIndex = null;
              var n = e.findDataIndex(t.offsetX, t.offsetY);
              n >= 0 && (e.dataIndex = n)
            }),
            this.group.add(e)
        },
        Sx.updateLayout = function (t) {
          var e = t.getData();
          this._symbolEl.setShape({
            points: e.mapArray(e.getItemLayout)
          })
        },
        Sx.remove = function () {
          this.group.removeAll()
        },
        Qo({
          type: "scatter",
          init: function () {
            this._normalSymbolDraw = new Na,
              this._largeSymbolDraw = new Ks
          },
          render: function (t, e, n) {
            var i = t.getData(),
              r = this._largeSymbolDraw,
              o = this._normalSymbolDraw,
              a = this.group,
              s = t.get("large") && i.count() > t.get("largeThreshold") ? r : o;
            this._symbolDraw = s,
              s.updateData(i),
              a.add(s.group),
              a.remove(s === r ? o.group : r.group)
          },
          updateLayout: function (t) {
            this._symbolDraw.updateLayout(t)
          },
          remove: function (t, e) {
            this._symbolDraw && this._symbolDraw.remove(e, !0)
          },
          dispose: function () {}
        }),
        jo(v(Oy, "scatter", "circle", null)),
        Xo(v(zy, "scatter")),
        Fo(function (t) {
          var e = t.graphic;
          m(e) ? e[0] && e[0].elements ? t.graphic = [t.graphic[0]] : t.graphic = [{
            elements: e
          }] : e && !e.elements && (t.graphic = [{
            elements: [e]
          }])
        });
      var Ix = Yo({
        type: "graphic",
        defaultOption: {
          elements: [],
          parentId: null
        },
        _elOptionsToUpdate: null,
        mergeOption: function (t) {
          var e = this.option.elements;
          this.option.elements = null,
            Ix.superApply(this, "mergeOption", arguments),
            this.option.elements = e
        },
        optionUpdated: function (t, e) {
          var n = this.option,
            i = (e ? n : t).elements,
            r = n.elements = e ? [] : n.elements,
            o = [];
          this._flatten(i, o);
          var a = Cr(r, o);
          kr(a);
          var s = this._elOptionsToUpdate = [];
          c(a, function (t, e) {
            var n = t.option;
            n && (s.push(n),
              nl(t, n),
              il(r, e, n),
              rl(r[e], n))
          }, this);
          for (var l = r.length - 1; l >= 0; l--)
            null == r[l] ? r.splice(l, 1) : delete r[l].$action
        },
        _flatten: function (t, e, n) {
          c(t, function (t) {
            if (t) {
              n && (t.parentOption = n),
                e.push(t);
              var i = t.children;
              "group" === t.type && i && this._flatten(i, e, t),
                delete t.children
            }
          }, this)
        },
        useElOptionsToUpdate: function () {
          var t = this._elOptionsToUpdate;
          return this._elOptionsToUpdate = null,
            t
        }
      });
      $o({
        type: "graphic",
        init: function (t, e) {
          this._elMap = O(),
            this._lastGraphicModel
        },
        render: function (t, e, n) {
          t !== this._lastGraphicModel && this._clear(),
            this._lastGraphicModel = t,
            this._updateElements(t, n),
            this._relocate(t, n)
        },
        _updateElements: function (t, e) {
          var n = t.useElOptionsToUpdate();
          if (n) {
            var i = this._elMap,
              r = this.group;
            c(n, function (t) {
              var e = t.$action,
                n = t.id,
                o = i.get(n),
                a = t.parentId,
                s = null != a ? i.get(a) : r;
              if ("text" === t.type) {
                var l = t.style;
                t.hv && t.hv[1] && (l.textVerticalAlign = l.textBaseline = null),
                  !l.hasOwnProperty("textFill") && l.fill && (l.textFill = l.fill),
                  !l.hasOwnProperty("textStroke") && l.stroke && (l.textStroke = l.stroke)
              }
              var h = tl(t);
              e && "merge" !== e ? "replace" === e ? (Js(o, i),
                Qs(n, s, h, i)) : "remove" === e && Js(o, i) : o ? o.attr(h) : Qs(n, s, h, i);
              var u = i.get(n);
              u && (u.__ecGraphicWidth = t.width,
                u.__ecGraphicHeight = t.height)
            })
          }
        },
        _relocate: function (t, e) {
          for (var n = t.option.elements, i = this.group, r = this._elMap, o = n.length - 1; o >= 0; o--) {
            var a = n[o],
              s = r.get(a.id);
            if (s) {
              var l = s.parent;
              Wr(s, a, l === i ? {
                width: e.getWidth(),
                height: e.getHeight()
              } : {
                width: l.__ecGraphicWidth || 0,
                height: l.__ecGraphicHeight || 0
              }, null, {
                hv: a.hv,
                boundingMode: a.bounding
              })
            }
          }
        },
        _clear: function () {
          var t = this._elMap;
          t.each(function (e) {
              Js(e, t)
            }),
            this._elMap = O()
        },
        dispose: function () {
          this._clear()
        }
      });
      var Tx = function (t, e) {
          var n, i = [],
            r = t.seriesIndex;
          if (null == r || !(n = e.getSeriesByIndex(r)))
            return {
              point: []
            };
          var o = n.getData(),
            a = Lr(o, t);
          if (null == a || m(a))
            return {
              point: []
            };
          var s = o.getItemGraphicEl(a),
            l = n.coordinateSystem;
          if (n.getTooltipPosition)
            i = n.getTooltipPosition(a) || [];
          else if (l && l.dataToPoint)
            i = l.dataToPoint(o.getValues(d(l.dimensions, function (t) {
              return n.coordDimToDataDim(t)[0]
            }), a, !0)) || [];
          else if (s) {
            var h = s.getBoundingRect().clone();
            h.applyTransform(s.transform),
              i = [h.x + h.width / 2, h.y + h.height / 2]
          }
          return {
            point: i,
            el: s
          }
        },
        Ax = c,
        Cx = v,
        kx = ov(),
        Dx = (Yo({
            type: "axisPointer",
            coordSysAxesInfo: null,
            defaultOption: {
              show: "auto",
              triggerOn: null,
              zlevel: 0,
              z: 50,
              type: "line",
              snap: !1,
              triggerTooltip: !0,
              value: null,
              status: null,
              link: [],
              animation: null,
              animationDurationUpdate: 200,
              lineStyle: {
                color: "#aaa",
                width: 1,
                type: "solid"
              },
              shadowStyle: {
                color: "rgba(150,150,150,0.3)"
              },
              label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
              },
              handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
              }
            }
          }),
          ov()),
        Lx = c,
        Px = $o({
          type: "axisPointer",
          render: function (t, e, n) {
            var i = e.getComponent("tooltip"),
              r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            gl("axisPointer", n, function (t, e, n) {
              "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                type: "updateAxisPointer",
                currTrigger: t,
                x: e && e.offsetX,
                y: e && e.offsetY
              })
            })
          },
          remove: function (t, e) {
            wl(e.getZr(), "axisPointer"),
              Px.superApply(this._model, "remove", arguments)
          },
          dispose: function (t, e) {
            wl("axisPointer", e),
              Px.superApply(this._model, "dispose", arguments)
          }
        }),
        Ox = ov(),
        zx = e,
        Ex = g;
      (bl.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, n, i) {
          var r = e.get("value"),
            o = e.get("status");
          if (this._axisModel = t,
            this._axisPointerModel = e,
            this._api = n,
            i || this._lastValue !== r || this._lastStatus !== o) {
            this._lastValue = r,
              this._lastStatus = o;
            var a = this._group,
              s = this._handle;
            if (!o || "hide" === o)
              return a && a.hide(),
                void(s && s.hide());
            a && a.show(),
              s && s.show();
            var l = {};
            this.makeElOption(l, r, t, e, n);
            var h = l.graphicKey;
            h !== this._lastGraphicKey && this.clear(n),
              this._lastGraphicKey = h;
            var u = this._moveAnimation = this.determineAnimation(t, e);
            if (a) {
              var c = v(Ml, e, u);
              this.updatePointerEl(a, l, c, e),
                this.updateLabelEl(a, l, c, e)
            } else
              a = this._group = new yf,
              this.createPointerEl(a, l, t, e),
              this.createLabelEl(a, l, t, e),
              n.getZr().add(a);
            Al(a, e, !0),
              this._renderHandle(r)
          }
        },
        remove: function (t) {
          this.clear(t)
        },
        dispose: function (t) {
          this.clear(t)
        },
        determineAnimation: function (t, e) {
          var n = e.get("animation"),
            i = t.axis,
            r = "category" === i.type,
            o = e.get("snap");
          if (!o && !r)
            return !1;
          if ("auto" === n || null == n) {
            var a = this.animationThreshold;
            if (r && i.getBandWidth() > a)
              return !0;
            if (o) {
              var s = Cs(t).seriesDataCount,
                l = i.getExtent();
              return Math.abs(l[0] - l[1]) / s > a
            }
            return !1
          }
          return !0 === n
        },
        makeElOption: function (t, e, n, i, r) {},
        createPointerEl: function (t, e, n, i) {
          var r = e.pointer;
          if (r) {
            var o = Ox(t).pointerEl = new Yg[r.type](zx(e.pointer));
            t.add(o)
          }
        },
        createLabelEl: function (t, e, n, i) {
          if (e.label) {
            var r = Ox(t).labelEl = new Ng(zx(e.label));
            t.add(r),
              Il(r, i)
          }
        },
        updatePointerEl: function (t, e, n) {
          var i = Ox(t).pointerEl;
          i && (i.setStyle(e.pointer.style),
            n(i, {
              shape: e.pointer.shape
            }))
        },
        updateLabelEl: function (t, e, n, i) {
          var r = Ox(t).labelEl;
          r && (r.setStyle(e.label.style),
            n(r, {
              shape: e.label.shape,
              position: e.label.position
            }),
            Il(r, i))
        },
        _renderHandle: function (t) {
          if (!this._dragging && this.updateHandleTransform) {
            var e = this._axisPointerModel,
              n = this._api.getZr(),
              i = this._handle,
              r = e.getModel("handle"),
              o = e.get("status");
            if (!r.get("show") || !o || "hide" === o)
              return i && n.remove(i),
                void(this._handle = null);
            var a;
            this._handle || (a = !0,
                i = this._handle = xr(r.get("icon"), {
                  cursor: "move",
                  draggable: !0,
                  onmousemove: function (t) {
                    jf(t.event)
                  },
                  onmousedown: Ex(this._onHandleDragMove, this, 0, 0),
                  drift: Ex(this._onHandleDragMove, this),
                  ondragend: Ex(this._onHandleDragEnd, this)
                }),
                n.add(i)),
              Al(i, e, !1);
            var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
            i.setStyle(r.getItemStyle(null, s));
            var l = r.get("size");
            m(l) || (l = [l, l]),
              i.attr("scale", [l[0] / 2, l[1] / 2]),
              xo(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"),
              this._moveHandleToValue(t, a)
          }
        },
        _moveHandleToValue: function (t, e) {
          Ml(this._axisPointerModel, !e && this._moveAnimation, this._handle, Tl(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
          var n = this._handle;
          if (n) {
            this._dragging = !0;
            var i = this.updateHandleTransform(Tl(n), [t, e], this._axisModel, this._axisPointerModel);
            this._payloadInfo = i,
              n.stopAnimation(),
              n.attr(Tl(i)),
              Ox(n).lastProp = null,
              this._doDispatchAxisPointer()
          }
        },
        _doDispatchAxisPointer: function () {
          if (this._handle) {
            var t = this._payloadInfo,
              e = this._axisModel;
            this._api.dispatchAction({
              type: "updateAxisPointer",
              x: t.cursorPoint[0],
              y: t.cursorPoint[1],
              tooltipOption: t.tooltipOption,
              axesInfo: [{
                axisDim: e.axis.dim,
                axisIndex: e.componentIndex
              }]
            })
          }
        },
        _onHandleDragEnd: function (t) {
          if (this._dragging = !1,
            this._handle) {
            var e = this._axisPointerModel.get("value");
            this._moveHandleToValue(e),
              this._api.dispatchAction({
                type: "hideTip"
              })
          }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
          this._lastValue = null,
            this._lastStatus = null;
          var e = t.getZr(),
            n = this._group,
            i = this._handle;
          e && n && (this._lastGraphicKey = null,
            n && e.remove(n),
            i && e.remove(i),
            this._group = null,
            this._handle = null,
            this._payloadInfo = null)
        },
        doClear: function () {},
        buildLabel: function (t, e, n) {
          return n = n || 0, {
            x: t[n],
            y: t[1 - n],
            width: e[n],
            height: e[1 - n]
          }
        }
      }).constructor = bl,
        Zn(bl);
      var Nx = bl.extend({
          makeElOption: function (t, e, n, i, r) {
            var o = n.axis,
              a = o.grid,
              s = i.get("type"),
              l = Nl(a, o).getOtherAxis(o).getGlobalExtent(),
              h = o.toGlobalCoord(o.dataToCoord(e, !0));
            if (s && "none" !== s) {
              var u = Cl(i),
                c = Bx[s](o, h, l, u);
              c.style = u,
                t.graphicKey = c.type,
                t.pointer = c
            }
            Ol(e, t, zs(a.model, n), n, i, r)
          },
          getHandleTransform: function (t, e, n) {
            var i = zs(e.axis.grid.model, e, {
              labelInside: !1
            });
            return i.labelMargin = n.get("handle.margin"), {
              position: Pl(e.axis, t, i),
              rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            }
          },
          updateHandleTransform: function (t, e, n, i) {
            var r = n.axis,
              o = r.grid,
              a = r.getGlobalExtent(!0),
              s = Nl(o, r).getOtherAxis(r).getGlobalExtent(),
              l = "x" === r.dim ? 0 : 1,
              h = t.position;
            h[l] += e[l],
              h[l] = Math.min(a[1], h[l]),
              h[l] = Math.max(a[0], h[l]);
            var u = (s[1] + s[0]) / 2,
              c = [u, u];
            c[l] = h[l];
            var d = [{
              verticalAlign: "middle"
            }, {
              align: "center"
            }];
            return {
              position: h,
              rotation: t.rotation,
              cursorPoint: c,
              tooltipOption: d[l]
            }
          }
        }),
        Bx = {
          line: function (t, e, n, i) {
            var r = zl([e, n[0]], [e, n[1]], Bl(t));
            return Wi({
              shape: r,
              style: i
            }), {
              type: "Line",
              shape: r
            }
          },
          shadow: function (t, e, n, i) {
            var r = t.getBandWidth(),
              o = n[1] - n[0];
            return {
              type: "Rect",
              shape: El([e - r / 2, n[0]], [r, o], Bl(t))
            }
          }
        };
      rx.registerAxisPointerClass("CartesianAxisPointer", Nx),
        Fo(function (t) {
          if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !m(e) && (t.axisPointer.link = [e])
          }
        }),
        Zo(nm.PROCESSOR.STATISTIC, function (t, e) {
          t.getComponent("axisPointer").coordSysAxesInfo = ws(t, e)
        }),
        Uo({
          type: "updateAxisPointer",
          event: "updateAxisPointer",
          update: ":updateAxisPointer"
        }, function (t, e, n) {
          var i = t.currTrigger,
            r = [t.x, t.y],
            o = t,
            a = t.dispatchAction || g(n.dispatchAction, n),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
          if (s) {
            pl(r) && (r = Tx({
              seriesIndex: o.seriesIndex,
              dataIndex: o.dataIndex
            }, e).point);
            var l = pl(r),
              h = o.axesInfo,
              u = s.axesInfo,
              c = "leave" === i || pl(r),
              d = {},
              f = {},
              p = {
                list: [],
                map: {}
              },
              v = {
                showPointer: Cx(sl, f),
                showTooltip: Cx(ll, p)
              };
            Ax(s.coordSysMap, function (t, e) {
              var n = l || t.containPoint(r);
              Ax(s.coordSysAxesInfo[e], function (t, e) {
                var i = t.axis,
                  o = dl(h, t);
                if (!c && n && (!h || o)) {
                  var a = o && o.value;
                  null != a || l || (a = i.pointToData(r)),
                    null != a && ol(t, a, v, !1, d)
                }
              })
            });
            var m = {};
            return Ax(u, function (t, e) {
                var n = t.linkGroup;
                n && !f[e] && Ax(n.axesInfo, function (e, i) {
                  var r = f[i];
                  if (e !== t && r) {
                    var o = r.value;
                    n.mapper && (o = t.axis.scale.parse(n.mapper(o, fl(e), fl(t)))),
                      m[t.key] = o
                  }
                })
              }),
              Ax(m, function (t, e) {
                ol(u[e], t, v, !0, d)
              }),
              hl(f, u, d),
              ul(p, r, t, a),
              cl(u, 0, n),
              d
          }
        }),
        Yo({
          type: "tooltip",
          dependencies: ["axisPointer"],
          defaultOption: {
            zlevel: 0,
            z: 8,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
              type: "line",
              axis: "auto",
              animation: "auto",
              animationDurationUpdate: 200,
              animationEasingUpdate: "exponentialOut",
              crossStyle: {
                color: "#999",
                width: 1,
                type: "dashed",
                textStyle: {}
              }
            },
            textStyle: {
              color: "#fff",
              fontSize: 14
            }
          }
        });
      var Rx = c,
        Vx = On,
        Wx = ["", "-webkit-", "-moz-", "-o-"];
      Gl.prototype = {
        constructor: Gl,
        _enterable: !0,
        update: function () {
          var t = this._container,
            e = t.currentStyle || document.defaultView.getComputedStyle(t),
            n = t.style;
          "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
        },
        show: function (t) {
          clearTimeout(this._hideTimeout);
          var e = this.el;
          e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + Wl(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""),
            e.style.display = e.innerHTML ? "block" : "none",
            this._show = !0
        },
        setContent: function (t) {
          this.el.innerHTML = null == t ? "" : t
        },
        setEnterable: function (t) {
          this._enterable = t
        },
        getSize: function () {
          var t = this.el;
          return [t.clientWidth, t.clientHeight]
        },
        moveTo: function (t, e) {
          var n, i = this._zr;
          i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft,
            e += n.offsetTop);
          var r = this.el.style;
          r.left = t + "px",
            r.top = e + "px",
            this._x = t,
            this._y = e
        },
        hide: function () {
          this.el.style.display = "none",
            this._show = !1
        },
        hideLater: function (t) {
          !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t,
            this._show = !1,
            this._hideTimeout = setTimeout(g(this.hide, this), t)) : this.hide())
        },
        isShow: function () {
          return this._show
        }
      };
      var Gx = g,
        Hx = c,
        Fx = xn,
        Zx = new Ng({
          shape: {
            x: -1,
            y: -1,
            width: 2,
            height: 2
          }
        });
      $o({
          type: "tooltip",
          init: function (t, e) {
            if (!vd.node) {
              var n = new Gl(e.getDom(), e);
              this._tooltipContent = n
            }
          },
          render: function (t, e, n) {
            if (!vd.node) {
              this.group.removeAll(),
                this._tooltipModel = t,
                this._ecModel = e,
                this._api = n,
                this._lastDataByCoordSys = null,
                this._alwaysShowContent = t.get("alwaysShowContent");
              var i = this._tooltipContent;
              i.update(),
                i.setEnterable(t.get("enterable")),
                this._initGlobalListener(),
                this._keepShow()
            }
          },
          _initGlobalListener: function () {
            var t = this._tooltipModel.get("triggerOn");
            gl("itemTooltip", this._api, Gx(function (e, n, i) {
              "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(n, i) : "leave" === e && this._hide(i))
            }, this))
          },
          _keepShow: function () {
            var t = this._tooltipModel,
              e = this._ecModel,
              n = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
              var i = this;
              clearTimeout(this._refreshUpdateTimeout),
                this._refreshUpdateTimeout = setTimeout(function () {
                  i.manuallyShowTip(t, e, n, {
                    x: i._lastX,
                    y: i._lastY
                  })
                })
            }
          },
          manuallyShowTip: function (t, e, n, i) {
            if (i.from !== this.uid && !vd.node) {
              var r = Fl(i, n);
              this._ticket = "";
              var o = i.dataByCoordSys;
              if (i.tooltip && null != i.x && null != i.y) {
                var a = Zx;
                a.position = [i.x, i.y],
                  a.update(),
                  a.tooltip = i.tooltip,
                  this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    target: a
                  }, r)
              } else if (o)
                this._tryShow({
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  event: {},
                  dataByCoordSys: i.dataByCoordSys,
                  tooltipOption: i.tooltipOption
                }, r);
              else if (null != i.seriesIndex) {
                if (this._manuallyAxisShowTip(t, e, n, i))
                  return;
                var s = Tx(i, e),
                  l = s.point[0],
                  h = s.point[1];
                null != l && null != h && this._tryShow({
                  offsetX: l,
                  offsetY: h,
                  position: i.position,
                  target: s.el,
                  event: {}
                }, r)
              } else
                null != i.x && null != i.y && (n.dispatchAction({
                    type: "updateAxisPointer",
                    x: i.x,
                    y: i.y
                  }),
                  this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    target: n.getZr().findHover(i.x, i.y).target,
                    event: {}
                  }, r))
            }
          },
          manuallyHideTip: function (t, e, n, i) {
            var r = this._tooltipContent;
            this._alwaysShowContent || r.hideLater(this._tooltipModel.get("hideDelay")),
              this._lastX = this._lastY = null,
              i.from !== this.uid && this._hide(Fl(i, n))
          },
          _manuallyAxisShowTip: function (t, e, n, i) {
            var r = i.seriesIndex,
              o = i.dataIndex,
              a = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != o && null != a) {
              var s = e.getSeriesByIndex(r);
              if (s && "axis" === (t = Hl([s.getData().getItemModel(o), s, (s.coordinateSystem || {}).model, t])).get("trigger"))
                return n.dispatchAction({
                    type: "updateAxisPointer",
                    seriesIndex: r,
                    dataIndex: o,
                    position: i.position
                  }),
                  !0
            }
          },
          _tryShow: function (t, e) {
            var n = t.target;
            if (this._tooltipModel) {
              this._lastX = t.offsetX,
                this._lastY = t.offsetY;
              var i = t.dataByCoordSys;
              i && i.length ? this._showAxisTooltip(i, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null,
                this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null,
                this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null,
                this._hide(e))
            }
          },
          _showOrMove: function (t, e) {
            var n = t.get("showDelay");
            e = g(e, this),
              clearTimeout(this._showTimout),
              n > 0 ? this._showTimout = setTimeout(e, n) : e()
          },
          _showAxisTooltip: function (t, e) {
            var n = this._ecModel,
              i = this._tooltipModel,
              r = [e.offsetX, e.offsetY],
              o = [],
              a = [],
              s = Hl([e.tooltipOption, i]);
            Hx(t, function (t) {
                Hx(t.dataByAxis, function (t) {
                  var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
                    i = t.value,
                    r = [];
                  if (e && null != i) {
                    var s = Ll(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                    c(t.seriesDataIndices, function (o) {
                      var l = n.getSeriesByIndex(o.seriesIndex),
                        h = o.dataIndexInside,
                        u = l && l.getDataParams(h);
                      u.axisDim = t.axisDim,
                        u.axisIndex = t.axisIndex,
                        u.axisType = t.axisType,
                        u.axisId = t.axisId,
                        u.axisValue = Ta(e.axis, i),
                        u.axisValueLabel = s,
                        u && (a.push(u),
                          r.push(l.formatTooltip(h, !0)))
                    });
                    var l = s;
                    o.push((l ? zn(l) + "<br />" : "") + r.join("<br />"))
                  }
                })
              }, this),
              o.reverse(),
              o = o.join("<br /><br />");
            var l = e.position;
            this._showOrMove(s, function () {
              this._updateContentNotChangedOnAxis(t) ? this._updatePosition(s, l, r[0], r[1], this._tooltipContent, a) : this._showTooltipContent(s, o, a, Math.random(), r[0], r[1], l)
            })
          },
          _showSeriesItemTooltip: function (t, e, n) {
            var i = this._ecModel,
              r = e.seriesIndex,
              o = i.getSeriesByIndex(r),
              a = e.dataModel || o,
              s = e.dataIndex,
              l = e.dataType,
              h = a.getData(),
              u = Hl([h.getItemModel(s), a, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
              c = u.get("trigger");
            if (null == c || "item" === c) {
              var d = a.getDataParams(s, l),
                f = a.formatTooltip(s, !1, l),
                p = "item_" + a.name + "_" + s;
              this._showOrMove(u, function () {
                  this._showTooltipContent(u, f, d, p, t.offsetX, t.offsetY, t.position, t.target)
                }),
                n({
                  type: "showTip",
                  dataIndexInside: s,
                  dataIndex: h.getRawIndex(s),
                  seriesIndex: r,
                  from: this.uid
                })
            }
          },
          _showComponentItemTooltip: function (t, e, n) {
            var i = e.tooltip;
            if ("string" == typeof i) {
              var r = i;
              i = {
                content: r,
                formatter: r
              }
            }
            var o = new _r(i, this._tooltipModel, this._ecModel),
              a = o.get("content"),
              s = Math.random();
            this._showOrMove(o, function () {
                this._showTooltipContent(o, a, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
              }),
              n({
                type: "showTip",
                from: this.uid
              })
          },
          _showTooltipContent: function (t, e, n, i, r, o, a, s) {
            if (this._ticket = "",
              t.get("showContent") && t.get("show")) {
              var l = this._tooltipContent,
                h = t.get("formatter");
              a = a || t.get("position");
              var u = e;
              if (h && "string" == typeof h)
                u = En(h, n, !0);
              else if ("function" == typeof h) {
                var c = Gx(function (e, i) {
                  e === this._ticket && (l.setContent(i),
                    this._updatePosition(t, a, r, o, l, n, s))
                }, this);
                this._ticket = i,
                  u = h(n, i, c)
              }
              l.setContent(u),
                l.show(t),
                this._updatePosition(t, a, r, o, l, n, s)
            }
          },
          _updatePosition: function (t, e, n, i, r, o, a) {
            var s = this._api.getWidth(),
              l = this._api.getHeight();
            e = e || t.get("position");
            var h = r.getSize(),
              u = t.get("align"),
              c = t.get("verticalAlign"),
              d = a && a.getBoundingRect().clone();
            if (a && d.applyTransform(a.transform),
              "function" == typeof e && (e = e([n, i], o, r.el, d, {
                viewSize: [s, l],
                contentSize: h.slice()
              })),
              m(e))
              n = Fx(e[0], s),
              i = Fx(e[1], l);
            else if (_(e)) {
              e.width = h[0],
                e.height = h[1];
              var f = Vr(e, {
                width: s,
                height: l
              });
              n = f.x,
                i = f.y,
                u = null,
                c = null
            } else
              "string" == typeof e && a ? (n = (p = jl(e, d, h))[0],
                i = p[1]) : (n = (p = Zl(n, i, r.el, s, l, u ? null : 20, c ? null : 20))[0],
                i = p[1]);
            if (u && (n -= ql(u) ? h[0] / 2 : "right" === u ? h[0] : 0),
              c && (i -= ql(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0),
              t.get("confine")) {
              var p = Ul(n, i, r.el, s, l);
              n = p[0],
                i = p[1]
            }
            r.moveTo(n, i)
          },
          _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys,
              n = !!e && e.length === t.length;
            return n && Hx(e, function (e, i) {
                var r = e.dataByAxis || {},
                  o = (t[i] || {}).dataByAxis || [];
                (n &= r.length === o.length) && Hx(r, function (t, e) {
                  var i = o[e] || {},
                    r = t.seriesDataIndices || [],
                    a = i.seriesDataIndices || [];
                  (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length) && Hx(r, function (t, e) {
                    var i = a[e];
                    n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                  })
                })
              }),
              this._lastDataByCoordSys = t,
              !!n
          },
          _hide: function (t) {
            this._lastDataByCoordSys = null,
              t({
                type: "hideTip",
                from: this.uid
              })
          },
          dispose: function (t, e) {
            vd.node || (this._tooltipContent.hide(),
              wl("itemTooltip", e))
          }
        }),
        Uo({
          type: "showTip",
          event: "showTip",
          update: "tooltip:manuallyShowTip"
        }, function () {}),
        Uo({
          type: "hideTip",
          event: "hideTip",
          update: "tooltip:manuallyHideTip"
        }, function () {});
      var Ux = Yo({
        type: "legend.plain",
        dependencies: ["series"],
        layoutMode: {
          type: "box",
          ignoreSize: !0
        },
        init: function (t, e, n) {
          this.mergeDefaultAndTheme(t, n),
            t.selected = t.selected || {}
        },
        mergeOption: function (t) {
          Ux.superCall(this, "mergeOption", t)
        },
        optionUpdated: function () {
          this._updateData(this.ecModel);
          var t = this._data;
          if (t[0] && "single" === this.get("selectedMode")) {
            for (var e = !1, n = 0; n < t.length; n++) {
              var i = t[n].get("name");
              if (this.isSelected(i)) {
                this.select(i),
                  e = !0;
                break
              }
            }!e && this.select(t[0].get("name"))
          }
        },
        _updateData: function (t) {
          var e = d(this.get("data") || [], function (t) {
            return "string" != typeof t && "number" != typeof t || (t = {
                name: t
              }),
              new _r(t, this, this.ecModel)
          }, this);
          this._data = e;
          var n = d(t.getSeries(), function (t) {
            return t.name
          });
          t.eachSeries(function (t) {
              if (t.legendDataProvider) {
                var e = t.legendDataProvider();
                n = n.concat(e.mapArray(e.getName))
              }
            }),
            this._availableNames = n
        },
        getData: function () {
          return this._data
        },
        select: function (t) {
          var e = this.option.selected;
          "single" === this.get("selectedMode") && c(this._data, function (t) {
              e[t.get("name")] = !1
            }),
            e[t] = !0
        },
        unSelect: function (t) {
          "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        },
        toggleSelected: function (t) {
          var e = this.option.selected;
          e.hasOwnProperty(t) || (e[t] = !0),
            this[e[t] ? "unSelect" : "select"](t)
        },
        isSelected: function (t) {
          var e = this.option.selected;
          return !(e.hasOwnProperty(t) && !e[t]) && s(this._availableNames, t) >= 0
        },
        defaultOption: {
          zlevel: 0,
          z: 4,
          show: !0,
          orient: "horizontal",
          left: "center",
          top: 0,
          align: "auto",
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#ccc",
          borderRadius: 0,
          borderWidth: 0,
          padding: 5,
          itemGap: 10,
          itemWidth: 25,
          itemHeight: 14,
          inactiveColor: "#ccc",
          textStyle: {
            color: "#333"
          },
          selectedMode: !0,
          tooltip: {
            show: !1
          }
        }
      });
      Uo("legendToggleSelect", "legendselectchanged", v(Yl, "toggleSelected")),
        Uo("legendSelect", "legendselected", v(Yl, "select")),
        Uo("legendUnSelect", "legendunselected", v(Yl, "unSelect"));
      var Xx = v,
        jx = c,
        qx = yf,
        Yx = $o({
          type: "legend.plain",
          newlineDisabled: !1,
          init: function () {
            this.group.add(this._contentGroup = new qx),
              this._backgroundEl
          },
          getContentGroup: function () {
            return this._contentGroup
          },
          render: function (t, e, n) {
            if (this.resetInner(),
              t.get("show", !0)) {
              var i = t.get("align");
              i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"),
                this.renderInner(i, t, e, n);
              var r = t.getBoxLayoutParams(),
                a = {
                  width: n.getWidth(),
                  height: n.getHeight()
                },
                s = t.get("padding"),
                l = Vr(r, a, s),
                h = this.layoutInner(t, i, l),
                u = Vr(o({
                  width: h.width,
                  height: h.height
                }, r), a, s);
              this.group.attr("position", [u.x - h.x, u.y - h.y]),
                this.group.add(this._backgroundEl = Kl(h, t))
            }
          },
          resetInner: function () {
            this.getContentGroup().removeAll(),
              this._backgroundEl && this.group.remove(this._backgroundEl)
          },
          renderInner: function (t, e, n, i) {
            var r = this.getContentGroup(),
              o = O(),
              a = e.get("selectedMode");
            jx(e.getData(), function (s, l) {
              var h = s.get("name");
              if (this.newlineDisabled || "" !== h && "\n" !== h) {
                var u = n.getSeriesByName(h)[0];
                if (!o.get(h))
                  if (u) {
                    var c = u.getData(),
                      d = c.getVisual("color");
                    "function" == typeof d && (d = d(u.getDataParams(0)));
                    var f = c.getVisual("legendSymbol") || "roundRect",
                      p = c.getVisual("symbol");
                    this._createItem(h, l, s, e, f, p, t, d, a).on("click", Xx(Ql, h, i)).on("mouseover", Xx(Jl, u, null, i)).on("mouseout", Xx(th, u, null, i)),
                      o.set(h, !0)
                  } else
                    n.eachRawSeries(function (n) {
                      if (!o.get(h) && n.legendDataProvider) {
                        var r = n.legendDataProvider(),
                          u = r.indexOfName(h);
                        if (u < 0)
                          return;
                        var c = r.getItemVisual(u, "color");
                        this._createItem(h, l, s, e, "roundRect", null, t, c, a).on("click", Xx(Ql, h, i)).on("mouseover", Xx(Jl, n, h, i)).on("mouseout", Xx(th, n, h, i)),
                          o.set(h, !0)
                      }
                    }, this)
              } else
                r.add(new qx({
                  newline: !0
                }))
            }, this)
          },
          _createItem: function (t, e, n, i, o, a, s, l, h) {
            var u = i.get("itemWidth"),
              c = i.get("itemHeight"),
              d = i.get("inactiveColor"),
              f = i.isSelected(t),
              p = new qx,
              g = n.getModel("textStyle"),
              v = n.get("icon"),
              m = n.getModel("tooltip"),
              y = m.parentModel;
            if (o = v || o,
              p.add(ka(o, 0, 0, u, c, f ? l : d, !0)),
              !v && a && (a !== o || "none" == a)) {
              var x = .8 * c;
              "none" === a && (a = "circle"),
                p.add(ka(a, (u - x) / 2, (c - x) / 2, x, x, f ? l : d))
            }
            var _ = "left" === s ? u + 5 : -5,
              w = s,
              b = i.get("formatter"),
              M = t;
            "string" == typeof b && b ? M = b.replace("{name}", null != t ? t : "") : "function" == typeof b && (M = b(t)),
              p.add(new Tg({
                style: ir({}, g, {
                  text: M,
                  x: _,
                  y: c / 2,
                  textFill: f ? g.getTextColor() : d,
                  textAlign: w,
                  textVerticalAlign: "middle"
                })
              }));
            var S = new Ng({
              shape: p.getBoundingRect(),
              invisible: !0,
              tooltip: m.get("show") ? r({
                content: t,
                formatter: y.get("formatter", !0) || function () {
                  return t
                },
                formatterParams: {
                  componentType: "legend",
                  legendIndex: i.componentIndex,
                  name: t,
                  $vars: ["name"]
                }
              }, m.option) : null
            });
            return p.add(S),
              p.eachChild(function (t) {
                t.silent = !0
              }),
              S.silent = !h,
              this.getContentGroup().add(p),
              er(p),
              p.__legendDataIndex = e,
              p
          },
          layoutInner: function (t, e, n) {
            var i = this.getContentGroup();
            cv(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
            var r = i.getBoundingRect();
            return i.attr("position", [-r.x, -r.y]),
              this.group.getBoundingRect()
          }
        });
      Zo(function (t) {
          var e = t.findComponents({
            mainType: "legend"
          });
          e && e.length && t.filterSeries(function (t) {
            for (var n = 0; n < e.length; n++)
              if (!e[n].isSelected(t.name))
                return !1;
            return !0
          })
        }),
        pv.registerSubTypeDefaulter("legend", function () {
          return "plain"
        });
      var $x = Ux.extend({
          type: "legend.scroll",
          setScrollDataIndex: function (t) {
            this.option.scrollDataIndex = t
          },
          defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
              horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
              vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {
              color: "#333"
            },
            animationDurationUpdate: 800
          },
          init: function (t, e, n, i) {
            var r = Hr(t);
            $x.superCall(this, "init", t, e, n, i),
              eh(this, t, r)
          },
          mergeOption: function (t, e) {
            $x.superCall(this, "mergeOption", t, e),
              eh(this, this.option, t)
          },
          getOrient: function () {
            return "vertical" === this.get("orient") ? {
              index: 1,
              name: "vertical"
            } : {
              index: 0,
              name: "horizontal"
            }
          }
        }),
        Kx = yf,
        Qx = ["width", "height"],
        Jx = ["x", "y"],
        t_ = Yx.extend({
          type: "legend.scroll",
          newlineDisabled: !0,
          init: function () {
            t_.superCall(this, "init"),
              this._currentIndex = 0,
              this.group.add(this._containerGroup = new Kx),
              this._containerGroup.add(this.getContentGroup()),
              this.group.add(this._controllerGroup = new Kx),
              this._showController
          },
          resetInner: function () {
            t_.superCall(this, "resetInner"),
              this._controllerGroup.removeAll(),
              this._containerGroup.removeClipPath(),
              this._containerGroup.__rectSize = null
          },
          renderInner: function (t, e, n, i) {
            function r(t, n) {
              var r = t + "DataIndex",
                l = xr(e.get("pageIcons", !0)[e.getOrient().name][n], {
                  onclick: g(o._pageGo, o, r, e, i)
                }, {
                  x: -s[0] / 2,
                  y: -s[1] / 2,
                  width: s[0],
                  height: s[1]
                });
              l.name = t,
                a.add(l)
            }
            var o = this;
            t_.superCall(this, "renderInner", t, e, n, i);
            var a = this._controllerGroup,
              s = e.get("pageIconSize", !0);
            m(s) || (s = [s, s]),
              r("pagePrev", 0);
            var l = e.getModel("pageTextStyle");
            a.add(new Tg({
                name: "pageText",
                style: {
                  textFill: l.getTextColor(),
                  font: l.getFont(),
                  textVerticalAlign: "middle",
                  textAlign: "center"
                },
                silent: !0
              })),
              r("pageNext", 1)
          },
          layoutInner: function (t, e, n) {
            var i = this.getContentGroup(),
              r = this._containerGroup,
              o = this._controllerGroup,
              a = t.getOrient().index,
              s = Qx[a],
              l = Qx[1 - a],
              h = Jx[1 - a];
            cv(t.get("orient"), i, t.get("itemGap"), a ? n.width : null, a ? null : n.height),
              cv("horizontal", o, t.get("pageButtonItemGap", !0));
            var u = i.getBoundingRect(),
              c = o.getBoundingRect(),
              d = this._showController = u[s] > n[s],
              f = [-u.x, -u.y];
            f[a] = i.position[a];
            var p = [0, 0],
              g = [-c.x, -c.y],
              v = I(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            d && ("end" === t.get("pageButtonPosition", !0) ? g[a] += n[s] - c[s] : p[a] += c[s] + v),
              g[1 - a] += u[l] / 2 - c[l] / 2,
              i.attr("position", f),
              r.attr("position", p),
              o.attr("position", g);
            var m = this.group.getBoundingRect();
            if ((m = {
                x: 0,
                y: 0
              })[s] = d ? n[s] : u[s],
              m[l] = Math.max(u[l], c[l]),
              m[h] = Math.min(0, c[h] + g[1 - a]),
              r.__rectSize = n[s],
              d) {
              var y = {
                x: 0,
                y: 0
              };
              y[s] = Math.max(n[s] - c[s] - v, 0),
                y[l] = m[l],
                r.setClipPath(new Ng({
                  shape: y
                })),
                r.__rectSize = y[s]
            } else
              o.eachChild(function (t) {
                t.attr({
                  invisible: !0,
                  silent: !0
                })
              });
            var x = this._getPageInfo(t);
            return null != x.pageIndex && dr(i, {
                position: x.contentPosition
              }, !!d && t),
              this._updatePageInfoView(t, x),
              m
          },
          _pageGo: function (t, e, n) {
            var i = this._getPageInfo(e)[t];
            null != i && n.dispatchAction({
              type: "legendScroll",
              scrollDataIndex: i,
              legendId: e.id
            })
          },
          _updatePageInfoView: function (t, e) {
            var n = this._controllerGroup;
            c(["pagePrev", "pageNext"], function (i) {
              var r = null != e[i + "DataIndex"],
                o = n.childOfName(i);
              o && (o.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)),
                o.cursor = r ? "pointer" : "default")
            });
            var i = n.childOfName("pageText"),
              r = t.get("pageFormatter"),
              o = e.pageIndex,
              a = null != o ? o + 1 : 0,
              s = e.pageCount;
            i && r && i.setStyle("text", x(r) ? r.replace("{current}", a).replace("{total}", s) : r({
              current: a,
              total: s
            }))
          },
          _getPageInfo: function (t) {
            function e(t) {
              var e = t.getBoundingRect().clone();
              return e[f] += t.position[u],
                e
            }
            var n, i, r, o, a = t.get("scrollDataIndex", !0),
              s = this.getContentGroup(),
              l = s.getBoundingRect(),
              h = this._containerGroup.__rectSize,
              u = t.getOrient().index,
              c = Qx[u],
              d = Qx[1 - u],
              f = Jx[u],
              p = s.position.slice();
            this._showController ? s.eachChild(function (t) {
              t.__legendDataIndex === a && (o = t)
            }) : o = s.childAt(0);
            var g = h ? Math.ceil(l[c] / h) : 0;
            if (o) {
              var v = o.getBoundingRect(),
                m = o.position[u] + v[f];
              p[u] = -m - l[f],
                n = Math.floor(g * (m + v[f] + h / 2) / l[c]),
                n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
              var y = {
                x: 0,
                y: 0
              };
              y[c] = h,
                y[d] = l[d],
                y[f] = -p[u] - l[f];
              var x, _ = s.children();
              if (s.eachChild(function (t, n) {
                  var i = e(t);
                  i.intersect(y) && (null == x && (x = n),
                      r = t.__legendDataIndex),
                    n === _.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null)
                }),
                null != x) {
                var w = e(_[x]);
                if (y[f] = w[f] + w[c] - y[c],
                  x <= 0 && w[f] >= y[f])
                  i = null;
                else {
                  for (; x > 0 && e(_[x - 1]).intersect(y);)
                    x--;
                  i = _[x].__legendDataIndex
                }
              }
            }
            return {
              contentPosition: p,
              pageIndex: n,
              pageCount: g,
              pagePrevDataIndex: i,
              pageNextDataIndex: r
            }
          }
        });
      Uo("legendScroll", "legendscroll", function (t, e) {
          var n = t.scrollDataIndex;
          null != n && e.eachComponent({
            mainType: "legend",
            subType: "scroll",
            query: t
          }, function (t) {
            t.setScrollDataIndex(n)
          })
        }),
        Yo({
          type: "title",
          layoutMode: {
            type: "box",
            ignoreSize: !0
          },
          defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {
              fontSize: 18,
              fontWeight: "bolder",
              color: "#333"
            },
            subtextStyle: {
              color: "#aaa"
            }
          }
        }),
        $o({
          type: "title",
          render: function (t, e, n) {
            if (this.group.removeAll(),
              t.get("show")) {
              var i = this.group,
                r = t.getModel("textStyle"),
                o = t.getModel("subtextStyle"),
                a = t.get("textAlign"),
                s = t.get("textBaseline"),
                l = new Tg({
                  style: ir({}, r, {
                    text: t.get("text"),
                    textFill: r.getTextColor()
                  }, {
                    disableBox: !0
                  }),
                  z2: 10
                }),
                h = l.getBoundingRect(),
                u = t.get("subtext"),
                c = new Tg({
                  style: ir({}, o, {
                    text: u,
                    textFill: o.getTextColor(),
                    y: h.height + t.get("itemGap"),
                    textVerticalAlign: "top"
                  }, {
                    disableBox: !0
                  }),
                  z2: 10
                }),
                d = t.get("link"),
                f = t.get("sublink");
              l.silent = !d,
                c.silent = !f,
                d && l.on("click", function () {
                  window.open(d, "_" + t.get("target"))
                }),
                f && c.on("click", function () {
                  window.open(f, "_" + t.get("subtarget"))
                }),
                i.add(l),
                u && i.add(c);
              var p = i.getBoundingRect(),
                g = t.getBoxLayoutParams();
              g.width = p.width,
                g.height = p.height;
              var v = Vr(g, {
                width: n.getWidth(),
                height: n.getHeight()
              }, t.get("padding"));
              a || ("middle" === (a = t.get("left") || t.get("right")) && (a = "center"),
                  "right" === a ? v.x += v.width : "center" === a && (v.x += v.width / 2)),
                s || ("center" === (s = t.get("top") || t.get("bottom")) && (s = "middle"),
                  "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2),
                  s = s || "top"),
                i.attr("position", [v.x, v.y]);
              var m = {
                textAlign: a,
                textVerticalAlign: s
              };
              l.setStyle(m),
                c.setStyle(m),
                p = i.getBoundingRect();
              var y = v.margin,
                x = t.getItemStyle(["color", "opacity"]);
              x.fill = t.get("backgroundColor");
              var _ = new Ng({
                shape: {
                  x: p.x - y[3],
                  y: p.y - y[0],
                  width: p.width + y[1] + y[3],
                  height: p.height + y[0] + y[2],
                  r: t.get("borderRadius")
                },
                style: x,
                silent: !0
              });
              Gi(_),
                i.add(_)
            }
          }
        });
      var e_ = Pn,
        n_ = zn,
        i_ = Yo({
          type: "marker",
          dependencies: ["series", "grid", "polar", "geo"],
          init: function (t, e, n, i) {
            this.mergeDefaultAndTheme(t, n),
              this.mergeOption(t, n, i.createdBySelf, !0)
          },
          isAnimationEnabled: function () {
            if (vd.node)
              return !1;
            var t = this.__hostSeries;
            return this.getShallow("animation") && t && t.isAnimationEnabled()
          },
          mergeOption: function (t, e, n, i) {
            var o = this.constructor,
              a = this.mainType + "Model";
            n || e.eachSeries(function (t) {
              var n = t.get(this.mainType),
                s = t[a];
              n && n.data ? (s ? s.mergeOption(n, e, !0) : (i && nh(n),
                  c(n.data, function (t) {
                    t instanceof Array ? (nh(t[0]),
                      nh(t[1])) : nh(t)
                  }),
                  r(s = new o(n, this, e), {
                    mainType: this.mainType,
                    seriesIndex: t.seriesIndex,
                    name: t.name,
                    createdBySelf: !0
                  }),
                  s.__hostSeries = t),
                t[a] = s) : t[a] = null
            }, this)
          },
          formatTooltip: function (t) {
            var e = this.getData(),
              n = this.getRawValue(t),
              i = m(n) ? d(n, e_).join(", ") : e_(n),
              r = e.getName(t),
              o = n_(this.name);
            return (null != n || r) && (o += "<br />"),
              r && (o += n_(r),
                null != n && (o += " : ")),
              null != n && (o += n_(i)),
              o
          },
          getData: function () {
            return this._data
          },
          setData: function (t) {
            this._data = t
          }
        });
      h(i_, rv),
        i_.extend({
          type: "markPoint",
          defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: "pin",
            symbolSize: 50,
            tooltip: {
              trigger: "item"
            },
            label: {
              normal: {
                show: !0,
                position: "inside"
              },
              emphasis: {
                show: !0
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 2
              }
            }
          }
        });
      var r_ = s,
        o_ = v,
        a_ = {
          min: o_(ah, "min"),
          max: o_(ah, "max"),
          average: o_(ah, "average")
        },
        s_ = $o({
          type: "marker",
          init: function () {
            this.markerGroupMap = O()
          },
          render: function (t, e, n) {
            var i = this.markerGroupMap;
            i.each(function (t) {
              t.__keep = !1
            });
            var r = this.type + "Model";
            e.eachSeries(function (t) {
                var i = t[r];
                i && this.renderSeries(t, i, e, n)
              }, this),
              i.each(function (t) {
                !t.__keep && this.group.remove(t.group)
              }, this)
          },
          renderSeries: function () {}
        });
      s_.extend({
          type: "markPoint",
          updateLayout: function (t, e, n) {
            e.eachSeries(function (t) {
              var e = t.markPointModel;
              e && (dh(e.getData(), t, n),
                this.markerGroupMap.get(t.id).updateLayout(e))
            }, this)
          },
          renderSeries: function (t, e, n, i) {
            var r = t.coordinateSystem,
              o = t.id,
              a = t.getData(),
              s = this.markerGroupMap,
              l = s.get(o) || s.set(o, new Na),
              h = fh(r, t, e);
            e.setData(h),
              dh(e.getData(), t, i),
              h.each(function (t) {
                var n = h.getItemModel(t),
                  i = n.getShallow("symbolSize");
                "function" == typeof i && (i = i(e.getRawValue(t), e.getDataParams(t))),
                  h.setItemVisual(t, {
                    symbolSize: i,
                    color: n.get("itemStyle.normal.color") || a.getVisual("color"),
                    symbol: n.getShallow("symbol")
                  })
              }),
              l.updateData(h),
              this.group.add(l.group),
              h.eachItemGraphicEl(function (t) {
                t.traverse(function (t) {
                  t.dataModel = e
                })
              }),
              l.__keep = !0,
              l.group.silent = e.get("silent") || t.get("silent")
          }
        }),
        Fo(function (t) {
          t.markPoint = t.markPoint || {}
        }),
        i_.extend({
          type: "markLine",
          defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: ["circle", "arrow"],
            symbolSize: [8, 16],
            precision: 2,
            tooltip: {
              trigger: "item"
            },
            label: {
              normal: {
                show: !0,
                position: "end"
              },
              emphasis: {
                show: !0
              }
            },
            lineStyle: {
              normal: {
                type: "dashed"
              },
              emphasis: {
                width: 3
              }
            },
            animationEasing: "linear"
          }
        });
      var l_ = Bg.prototype,
        h_ = Vg.prototype,
        u_ = Ei({
          type: "ec-line",
          style: {
            stroke: "#000",
            fill: null
          },
          shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1,
            cpx1: null,
            cpy1: null
          },
          buildPath: function (t, e) {
            (ph(e) ? l_ : h_).buildPath(t, e)
          },
          pointAt: function (t) {
            return ph(this.shape) ? l_.pointAt.call(this, t) : h_.pointAt.call(this, t)
          },
          tangentAt: function (t) {
            var e = this.shape,
              n = ph(e) ? [e.x2 - e.x1, e.y2 - e.y1] : h_.tangentAt.call(this, t);
            return Z(n, n)
          }
        }),
        c_ = ["fromSymbol", "toSymbol"],
        d_ = xh.prototype;
      d_.beforeUpdate = function () {
          var t = this,
            e = t.childOfName("fromSymbol"),
            n = t.childOfName("toSymbol"),
            i = t.childOfName("label");
          if (e || n || !i.ignore) {
            for (var r = 1, o = this.parent; o;)
              o.scale && (r /= o.scale[0]),
              o = o.parent;
            var a = t.childOfName("line");
            if (this.__dirty || a.__dirty) {
              var s = a.shape.percent,
                l = a.pointAt(0),
                h = a.pointAt(s),
                u = W([], h, l);
              if (Z(u, u),
                e && (e.attr("position", l),
                  c = a.tangentAt(0),
                  e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])),
                  e.attr("scale", [r * s, r * s])),
                n) {
                n.attr("position", h);
                var c = a.tangentAt(1);
                n.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])),
                  n.attr("scale", [r * s, r * s])
              }
              if (!i.ignore) {
                i.attr("position", h);
                var d, f, p, g = 5 * r;
                if ("end" === i.__position)
                  d = [u[0] * g + h[0], u[1] * g + h[1]],
                  f = u[0] > .8 ? "left" : u[0] < -.8 ? "right" : "center",
                  p = u[1] > .8 ? "top" : u[1] < -.8 ? "bottom" : "middle";
                else if ("middle" === i.__position) {
                  var v = s / 2,
                    m = [(c = a.tangentAt(v))[1], -c[0]],
                    y = a.pointAt(v);
                  m[1] > 0 && (m[0] = -m[0],
                      m[1] = -m[1]),
                    d = [y[0] + m[0] * g, y[1] + m[1] * g],
                    f = "center",
                    p = "bottom";
                  var x = -Math.atan2(c[1], c[0]);
                  h[0] < l[0] && (x = Math.PI + x),
                    i.attr("rotation", x)
                } else
                  d = [-u[0] * g + l[0], -u[1] * g + l[1]],
                  f = u[0] > .8 ? "right" : u[0] < -.8 ? "left" : "center",
                  p = u[1] > .8 ? "bottom" : u[1] < -.8 ? "top" : "middle";
                i.attr({
                  style: {
                    textVerticalAlign: i.__verticalAlign || p,
                    textAlign: i.__textAlign || f
                  },
                  position: d,
                  scale: [r, r]
                })
              }
            }
          }
        },
        d_._createLine = function (t, e, n) {
          var i = t.hostModel,
            r = mh(t.getItemLayout(e));
          r.shape.percent = 0,
            fr(r, {
              shape: {
                percent: 1
              }
            }, i, e),
            this.add(r);
          var o = new Tg({
            name: "label"
          });
          this.add(o),
            c(c_, function (n) {
              var i = vh(n, t, e);
              this.add(i),
                this[gh(n)] = t.getItemVisual(e, n)
            }, this),
            this._updateCommonStl(t, e, n)
        },
        d_.updateData = function (t, e, n) {
          var i = t.hostModel,
            r = this.childOfName("line"),
            o = t.getItemLayout(e),
            a = {
              shape: {}
            };
          yh(a.shape, o),
            dr(r, a, i, e),
            c(c_, function (n) {
              var i = t.getItemVisual(e, n),
                r = gh(n);
              if (this[r] !== i) {
                this.remove(this.childOfName(n));
                var o = vh(n, t, e);
                this.add(o)
              }
              this[r] = i
            }, this),
            this._updateCommonStl(t, e, n)
        },
        d_._updateCommonStl = function (t, e, n) {
          var i = t.hostModel,
            r = this.childOfName("line"),
            a = n && n.lineStyle,
            s = n && n.hoverLineStyle,
            l = n && n.labelModel,
            h = n && n.hoverLabelModel;
          if (!n || t.hasItemOption) {
            var u = t.getItemModel(e);
            a = u.getModel("lineStyle.normal").getLineStyle(),
              s = u.getModel("lineStyle.emphasis").getLineStyle(),
              l = u.getModel("label.normal"),
              h = u.getModel("label.emphasis")
          }
          var d = t.getItemVisual(e, "color"),
            f = T(t.getItemVisual(e, "opacity"), a.opacity, 1);
          r.useStyle(o({
              strokeNoScale: !0,
              fill: "none",
              stroke: d,
              opacity: f
            }, a)),
            r.hoverStyle = s,
            c(c_, function (t) {
              var e = this.childOfName(t);
              e && (e.setColor(d),
                e.setStyle({
                  opacity: f
                }))
            }, this);
          var p, g, v, m, y = l.getShallow("show"),
            x = h.getShallow("show"),
            _ = this.childOfName("label");
          if (y || x) {
            var w = i.getRawValue(e);
            g = null == w ? g = t.getName(e) : isFinite(w) ? _n(w) : w,
              p = d || "#000",
              v = I(i.getFormattedLabel(e, "normal", t.dataType), g),
              m = I(i.getFormattedLabel(e, "emphasis", t.dataType), v)
          }
          if (y) {
            var b = ir(_.style, l, {
              text: v
            }, {
              autoColor: p
            });
            _.__textAlign = b.textAlign,
              _.__verticalAlign = b.textVerticalAlign,
              _.__position = l.get("position") || "middle"
          } else
            _.setStyle("text", null);
          _.hoverStyle = x ? {
              text: m,
              textFill: h.getTextColor(!0),
              fontStyle: h.getShallow("fontStyle"),
              fontWeight: h.getShallow("fontWeight"),
              fontSize: h.getShallow("fontSize"),
              fontFamily: h.getShallow("fontFamily")
            } : {
              text: null
            },
            _.ignore = !y && !x,
            er(this)
        },
        d_.highlight = function () {
          this.trigger("emphasis")
        },
        d_.downplay = function () {
          this.trigger("normal")
        },
        d_.updateLayout = function (t, e) {
          this.setLinePoints(t.getItemLayout(e))
        },
        d_.setLinePoints = function (t) {
          var e = this.childOfName("line");
          yh(e.shape, t),
            e.dirty()
        },
        l(xh, yf);
      var f_ = bh.prototype;
      f_.updateData = function (t) {
          var e = this._lineData,
            n = this.group,
            i = this._ctor,
            r = t.hostModel,
            o = {
              lineStyle: r.getModel("lineStyle.normal").getLineStyle(),
              hoverLineStyle: r.getModel("lineStyle.emphasis").getLineStyle(),
              labelModel: r.getModel("label.normal"),
              hoverLabelModel: r.getModel("label.emphasis")
            };
          t.diff(e).add(function (e) {
              if (wh(t.getItemLayout(e))) {
                var r = new i(t, e, o);
                t.setItemGraphicEl(e, r),
                  n.add(r)
              }
            }).update(function (r, a) {
              var s = e.getItemGraphicEl(a);
              wh(t.getItemLayout(r)) ? (s ? s.updateData(t, r, o) : s = new i(t, r, o),
                t.setItemGraphicEl(r, s),
                n.add(s)) : n.remove(s)
            }).remove(function (t) {
              n.remove(e.getItemGraphicEl(t))
            }).execute(),
            this._lineData = t
        },
        f_.updateLayout = function () {
          var t = this._lineData;
          t.eachItemGraphicEl(function (e, n) {
            e.updateLayout(t, n)
          }, this)
        },
        f_.remove = function () {
          this.group.removeAll()
        };
      var p_ = function (t, i, o, a) {
        var s = t.getData(),
          l = a.type;
        if (!m(a) && ("min" === l || "max" === l || "average" === l || null != a.xAxis || null != a.yAxis)) {
          var h, u;
          if (null != a.yAxis || null != a.xAxis)
            h = null != a.yAxis ? "y" : "x",
            i.getAxis(h),
            u = S(a.yAxis, a.xAxis);
          else {
            var c = lh(a, s, i, t);
            h = c.valueDataDim,
              c.valueAxis,
              u = ch(s, h, l)
          }
          var d = "x" === h ? 0 : 1,
            f = 1 - d,
            p = e(a),
            g = {};
          p.type = null,
            p.coord = [],
            g.coord = [],
            p.coord[f] = -1 / 0,
            g.coord[f] = 1 / 0;
          var v = o.get("precision");
          v >= 0 && "number" == typeof u && (u = +u.toFixed(Math.min(v, 20))),
            p.coord[d] = g.coord[d] = u,
            a = [p, g, {
              type: l,
              valueIndex: a.valueIndex,
              value: u
            }]
        }
        return a = [sh(t, a[0]), sh(t, a[1]), r({}, a[2])],
          a[2].type = a[2].type || "",
          n(a[2], a[0]),
          n(a[2], a[1]),
          a
      };
      s_.extend({
          type: "markLine",
          updateLayout: function (t, e, n) {
            e.eachSeries(function (t) {
              var e = t.markLineModel;
              if (e) {
                var i = e.getData(),
                  r = e.__from,
                  o = e.__to;
                r.each(function (e) {
                    Th(r, e, !0, t, n),
                      Th(o, e, !1, t, n)
                  }),
                  i.each(function (t) {
                    i.setItemLayout(t, [r.getItemLayout(t), o.getItemLayout(t)])
                  }),
                  this.markerGroupMap.get(t.id).updateLayout()
              }
            }, this)
          },
          renderSeries: function (t, e, n, i) {
            function r(e, n, r) {
              var o = e.getItemModel(n);
              Th(e, n, r, t, i),
                e.setItemVisual(n, {
                  symbolSize: o.get("symbolSize") || g[r ? 0 : 1],
                  symbol: o.get("symbol", !0) || p[r ? 0 : 1],
                  color: o.get("itemStyle.normal.color") || s.getVisual("color")
                })
            }
            var o = t.coordinateSystem,
              a = t.id,
              s = t.getData(),
              l = this.markerGroupMap,
              h = l.get(a) || l.set(a, new bh);
            this.group.add(h.group);
            var u = Ah(o, t, e),
              c = u.from,
              d = u.to,
              f = u.line;
            e.__from = c,
              e.__to = d,
              e.setData(f);
            var p = e.get("symbol"),
              g = e.get("symbolSize");
            m(p) || (p = [p, p]),
              "number" == typeof g && (g = [g, g]),
              u.from.each(function (t) {
                r(c, t, !0),
                  r(d, t, !1)
              }),
              f.each(function (t) {
                var e = f.getItemModel(t).get("lineStyle.normal.color");
                f.setItemVisual(t, {
                    color: e || c.getItemVisual(t, "color")
                  }),
                  f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]),
                  f.setItemVisual(t, {
                    fromSymbolSize: c.getItemVisual(t, "symbolSize"),
                    fromSymbol: c.getItemVisual(t, "symbol"),
                    toSymbolSize: d.getItemVisual(t, "symbolSize"),
                    toSymbol: d.getItemVisual(t, "symbol")
                  })
              }),
              h.updateData(f),
              u.line.eachItemGraphicEl(function (t, n) {
                t.traverse(function (t) {
                  t.dataModel = e
                })
              }),
              h.__keep = !0,
              h.group.silent = e.get("silent") || t.get("silent")
          }
        }),
        Fo(function (t) {
          t.markLine = t.markLine || {}
        }),
        i_.extend({
          type: "markArea",
          defaultOption: {
            zlevel: 0,
            z: 1,
            tooltip: {
              trigger: "item"
            },
            animation: !1,
            label: {
              normal: {
                show: !0,
                position: "top"
              },
              emphasis: {
                show: !0,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0
              }
            }
          }
        });
      var g_ = function (t, e, n, r) {
          var o = sh(t, r[0]),
            a = sh(t, r[1]),
            s = S,
            l = o.coord,
            h = a.coord;
          l[0] = s(l[0], -1 / 0),
            l[1] = s(l[1], -1 / 0),
            h[0] = s(h[0], 1 / 0),
            h[1] = s(h[1], 1 / 0);
          var u = i([{}, o, a]);
          return u.coord = [o.coord, a.coord],
            u.x0 = o.x,
            u.y0 = o.y,
            u.x1 = a.x,
            u.y1 = a.y,
            u
        },
        v_ = [
          ["x0", "y0"],
          ["x1", "y0"],
          ["x1", "y1"],
          ["x0", "y1"]
        ];
      s_.extend({
          type: "markArea",
          updateLayout: function (t, e, n) {
            e.eachSeries(function (t) {
              var e = t.markAreaModel;
              if (e) {
                var i = e.getData();
                i.each(function (e) {
                  var r = d(v_, function (r) {
                    return Lh(i, e, r, t, n)
                  });
                  i.setItemLayout(e, r),
                    i.getItemGraphicEl(e).setShape("points", r)
                })
              }
            }, this)
          },
          renderSeries: function (t, e, n, i) {
            var r = t.coordinateSystem,
              a = t.name,
              s = t.getData(),
              l = this.markerGroupMap,
              h = l.get(a) || l.set(a, {
                group: new yf
              });
            this.group.add(h.group),
              h.__keep = !0;
            var u = Ph(r, t, e);
            e.setData(u),
              u.each(function (e) {
                u.setItemLayout(e, d(v_, function (n) {
                    return Lh(u, e, n, t, i)
                  })),
                  u.setItemVisual(e, {
                    color: s.getVisual("color")
                  })
              }),
              u.diff(h.__data).add(function (t) {
                var e = new zg({
                  shape: {
                    points: u.getItemLayout(t)
                  }
                });
                u.setItemGraphicEl(t, e),
                  h.group.add(e)
              }).update(function (t, n) {
                var i = h.__data.getItemGraphicEl(n);
                dr(i, {
                    shape: {
                      points: u.getItemLayout(t)
                    }
                  }, e, t),
                  h.group.add(i),
                  u.setItemGraphicEl(t, i)
              }).remove(function (t) {
                var e = h.__data.getItemGraphicEl(t);
                h.group.remove(e)
              }).execute(),
              u.eachItemGraphicEl(function (t, n) {
                var i = u.getItemModel(n),
                  r = i.getModel("label.normal"),
                  a = i.getModel("label.emphasis"),
                  s = u.getItemVisual(n, "color");
                t.useStyle(o(i.getModel("itemStyle.normal").getItemStyle(), {
                    fill: Ct(s, .4),
                    stroke: s
                  })),
                  t.hoverStyle = i.getModel("itemStyle.emphasis").getItemStyle(),
                  nr(t.style, t.hoverStyle, r, a, {
                    labelFetcher: e,
                    labelDataIndex: n,
                    defaultText: u.getName(n) || "",
                    isRectText: !0,
                    autoColor: s
                  }),
                  er(t, {}),
                  t.dataModel = e
              }),
              h.__data = u,
              h.group.silent = e.get("silent") || t.get("silent")
          }
        }),
        Fo(function (t) {
          t.markArea = t.markArea || {}
        }),
        pv.registerSubTypeDefaulter("dataZoom", function () {
          return "slider"
        });
      var m_ = ["cartesian2d", "polar", "singleAxis"],
        y_ = function (t, e) {
          var n = d(t = t.slice(), Rn),
            i = d(e = (e || []).slice(), Rn);
          return function (r, o) {
            c(t, function (t, a) {
              for (var s = {
                  name: t,
                  capital: n[a]
                }, l = 0; l < e.length; l++)
                s[e[l]] = t + i[l];
              r.call(o, s)
            })
          }
        }(["x", "y", "z", "radius", "angle", "single"], ["axisIndex", "axis", "index", "id"]),
        x_ = c,
        __ = wn,
        w_ = function (t, e, n, i) {
          this._dimName = t,
            this._axisIndex = e,
            this._valueWindow,
            this._percentWindow,
            this._dataExtent,
            this._minMaxSpan,
            this.ecModel = i,
            this._dataZoomModel = n
        };
      w_.prototype = {
        constructor: w_,
        hostedBy: function (t) {
          return this._dataZoomModel === t
        },
        getDataValueWindow: function () {
          return this._valueWindow.slice()
        },
        getDataPercentWindow: function () {
          return this._percentWindow.slice()
        },
        getTargetSeriesModels: function () {
          var t = [],
            e = this.ecModel;
          return e.eachSeries(function (n) {
              if (Oh(n.get("coordinateSystem"))) {
                var i = this._dimName,
                  r = e.queryComponents({
                    mainType: i + "Axis",
                    index: n.get(i + "AxisIndex"),
                    id: n.get(i + "AxisId")
                  })[0];
                this._axisIndex === (r && r.componentIndex) && t.push(n)
              }
            }, this),
            t
        },
        getAxisModel: function () {
          return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
        },
        getOtherAxisModel: function () {
          var t, e, n = this._dimName,
            i = this.ecModel,
            r = this.getAxisModel();
          "x" === n || "y" === n ? (e = "gridIndex",
            t = "x" === n ? "y" : "x") : (e = "polarIndex",
            t = "angle" === n ? "radius" : "angle");
          var o;
          return i.eachComponent(t + "Axis", function (t) {
              (t.get(e) || 0) === (r.get(e) || 0) && (o = t)
            }),
            o
        },
        getMinMaxSpan: function () {
          return e(this._minMaxSpan)
        },
        calculateDataWindow: function (t) {
          var e = this._dataExtent,
            n = this.getAxisModel().axis.scale,
            i = this._dataZoomModel.getRangePropMode(),
            r = [0, 100],
            o = [t.start, t.end],
            a = [];
          return x_(["startValue", "endValue"], function (e) {
              a.push(null != t[e] ? n.parse(t[e]) : null)
            }),
            x_([0, 1], function (t) {
              var s = a[t],
                l = o[t];
              "percent" === i[t] ? (null == l && (l = r[t]),
                  s = n.parse(yn(l, r, e, !0))) : l = yn(s, e, r, !0),
                a[t] = s,
                o[t] = l
            }), {
              valueWindow: __(a),
              percentWindow: __(o)
            }
        },
        reset: function (t) {
          if (t === this._dataZoomModel) {
            this._dataExtent = Eh(this, this._dimName, this.getTargetSeriesModels());
            var e = this.calculateDataWindow(t.option);
            this._valueWindow = e.valueWindow,
              this._percentWindow = e.percentWindow,
              Rh(this),
              Bh(this)
          }
        },
        restore: function (t) {
          t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null,
            Bh(this, !0))
        },
        filterData: function (t) {
          function e(t) {
            return t >= o[0] && t <= o[1]
          }
          if (t === this._dataZoomModel) {
            var n = this._dimName,
              i = this.getTargetSeriesModels(),
              r = t.get("filterMode"),
              o = this._valueWindow;
            if ("none" !== r) {
              var a = this.getOtherAxisModel();
              t.get("$fromToolbox") && a && "category" === a.get("type") && (r = "empty"),
                x_(i, function (t) {
                  var i = t.getData(),
                    a = t.coordDimToDataDim(n);
                  "weakFilter" === r ? i && i.filterSelf(function (t) {
                    for (var e, n, r, s = 0; s < a.length; s++) {
                      var l = i.get(a[s], t),
                        h = !isNaN(l),
                        u = l < o[0],
                        c = l > o[1];
                      if (h && !u && !c)
                        return !0;
                      h && (r = !0),
                        u && (e = !0),
                        c && (n = !0)
                    }
                    return r && e && n
                  }) : i && x_(a, function (n) {
                    "empty" === r ? t.setData(i.map(n, function (t) {
                      return e(t) ? t : NaN
                    })) : i.filterSelf(n, e)
                  })
                })
            }
          }
        }
      };
      var b_ = c,
        M_ = y_,
        S_ = Yo({
          type: "dataZoom",
          dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
          defaultOption: {
            zlevel: 0,
            z: 4,
            orient: null,
            xAxisIndex: null,
            yAxisIndex: null,
            filterMode: "filter",
            throttle: null,
            start: 0,
            end: 100,
            startValue: null,
            endValue: null,
            minSpan: null,
            maxSpan: null,
            minValueSpan: null,
            maxValueSpan: null,
            rangeMode: null
          },
          init: function (t, e, n) {
            this._dataIntervalByAxis = {},
              this._dataInfo = {},
              this._axisProxies = {},
              this.textStyleModel,
              this._autoThrottle = !0,
              this._rangePropMode = ["percent", "percent"];
            var i = Vh(t);
            this.mergeDefaultAndTheme(t, n),
              this.doInit(i)
          },
          mergeOption: function (t) {
            var e = Vh(t);
            n(this.option, t, !0),
              this.doInit(e)
          },
          doInit: function (t) {
            var e = this.option;
            vd.canvasSupported || (e.realtime = !1),
              this._setDefaultThrottle(t),
              Wh(this, t),
              b_([
                ["start", "startValue"],
                ["end", "endValue"]
              ], function (t, n) {
                "value" === this._rangePropMode[n] && (e[t[0]] = null)
              }, this),
              this.textStyleModel = this.getModel("textStyle"),
              this._resetTarget(),
              this._giveAxisProxies()
          },
          _giveAxisProxies: function () {
            var t = this._axisProxies;
            this.eachTargetAxis(function (e, n, i, r) {
              var o = this.dependentModels[e.axis][n],
                a = o.__dzAxisProxy || (o.__dzAxisProxy = new w_(e.name, n, this, r));
              t[e.name + "_" + n] = a
            }, this)
          },
          _resetTarget: function () {
            var t = this.option,
              e = this._judgeAutoMode();
            M_(function (e) {
                var n = e.axisIndex;
                t[n] = Mr(t[n])
              }, this),
              "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
          },
          _judgeAutoMode: function () {
            var t = this.option,
              e = !1;
            M_(function (n) {
              null != t[n.axisIndex] && (e = !0)
            }, this);
            var n = t.orient;
            return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"),
              "axisIndex")
          },
          _autoSetAxisIndex: function () {
            var t = !0,
              e = this.get("orient", !0),
              n = this.option,
              i = this.dependentModels;
            if (t) {
              var r = "vertical" === e ? "y" : "x";
              i[r + "Axis"].length ? (n[r + "AxisIndex"] = [0],
                t = !1) : b_(i.singleAxis, function (i) {
                t && i.get("orient", !0) === e && (n.singleAxisIndex = [i.componentIndex],
                  t = !1)
              })
            }
            t && M_(function (e) {
                if (t) {
                  var i = [],
                    r = this.dependentModels[e.axis];
                  if (r.length && !i.length)
                    for (var o = 0, a = r.length; o < a; o++)
                      "category" === r[o].get("type") && i.push(o);
                  n[e.axisIndex] = i,
                    i.length && (t = !1)
                }
              }, this),
              t && this.ecModel.eachSeries(function (t) {
                this._isSeriesHasAllAxesTypeOf(t, "value") && M_(function (e) {
                  var i = n[e.axisIndex],
                    r = t.get(e.axisIndex),
                    o = t.get(e.axisId),
                    a = t.ecModel.queryComponents({
                      mainType: e.axis,
                      index: r,
                      id: o
                    })[0];
                  s(i, r = a.componentIndex) < 0 && i.push(r)
                })
              }, this)
          },
          _autoSetOrient: function () {
            var t;
            this.eachTargetAxis(function (e) {
                !t && (t = e.name)
              }, this),
              this.option.orient = "y" === t ? "vertical" : "horizontal"
          },
          _isSeriesHasAllAxesTypeOf: function (t, e) {
            var n = !0;
            return M_(function (i) {
                var r = t.get(i.axisIndex),
                  o = this.dependentModels[i.axis][r];
                o && o.get("type") === e || (n = !1)
              }, this),
              n
          },
          _setDefaultThrottle: function (t) {
            if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1),
              this._autoThrottle) {
              var e = this.ecModel.option;
              this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
            }
          },
          getFirstTargetAxisModel: function () {
            var t;
            return M_(function (e) {
                if (null == t) {
                  var n = this.get(e.axisIndex);
                  n.length && (t = this.dependentModels[e.axis][n[0]])
                }
              }, this),
              t
          },
          eachTargetAxis: function (t, e) {
            var n = this.ecModel;
            M_(function (i) {
              b_(this.get(i.axisIndex), function (r) {
                t.call(e, i, r, this, n)
              }, this)
            }, this)
          },
          getAxisProxy: function (t, e) {
            return this._axisProxies[t + "_" + e]
          },
          getAxisModel: function (t, e) {
            var n = this.getAxisProxy(t, e);
            return n && n.getAxisModel()
          },
          setRawRange: function (t, e) {
            var n = this.option;
            b_([
                ["start", "startValue"],
                ["end", "endValue"]
              ], function (e) {
                null == t[e[0]] && null == t[e[1]] || (n[e[0]] = t[e[0]],
                  n[e[1]] = t[e[1]])
              }, this),
              !e && Wh(this, t)
          },
          getPercentRange: function () {
            var t = this.findRepresentativeAxisProxy();
            if (t)
              return t.getDataPercentWindow()
          },
          getValueRange: function (t, e) {
            if (null != t || null != e)
              return this.getAxisProxy(t, e).getDataValueWindow();
            var n = this.findRepresentativeAxisProxy();
            return n ? n.getDataValueWindow() : void 0
          },
          findRepresentativeAxisProxy: function (t) {
            if (t)
              return t.__dzAxisProxy;
            var e = this._axisProxies;
            for (var n in e)
              if (e.hasOwnProperty(n) && e[n].hostedBy(this))
                return e[n];
            for (var n in e)
              if (e.hasOwnProperty(n) && !e[n].hostedBy(this))
                return e[n]
          },
          getRangePropMode: function () {
            return this._rangePropMode.slice()
          }
        }),
        I_ = Hv.extend({
          type: "dataZoom",
          render: function (t, e, n, i) {
            this.dataZoomModel = t,
              this.ecModel = e,
              this.api = n
          },
          getTargetCoordInfo: function () {
            function t(t, e, n, i) {
              for (var r, o = 0; o < n.length; o++)
                if (n[o].model === t) {
                  r = n[o];
                  break
                }
              r || n.push(r = {
                  model: t,
                  axisModels: [],
                  coordIndex: i
                }),
                r.axisModels.push(e)
            }
            var e = this.dataZoomModel,
              n = this.ecModel,
              i = {};
            return e.eachTargetAxis(function (e, r) {
                var o = n.getComponent(e.axis, r);
                if (o) {
                  var a = o.getCoordSysModel();
                  a && t(a, o, i[a.mainType] || (i[a.mainType] = []), a.componentIndex)
                }
              }, this),
              i
          }
        }),
        T_ = (S_.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
              show: !0,
              right: "ph",
              top: "ph",
              width: "ph",
              height: "ph",
              left: null,
              bottom: null,
              backgroundColor: "rgba(47,69,84,0)",
              dataBackground: {
                lineStyle: {
                  color: "#2f4554",
                  width: .5,
                  opacity: .3
                },
                areaStyle: {
                  color: "rgba(47,69,84,0.3)",
                  opacity: .3
                }
              },
              borderColor: "#ddd",
              fillerColor: "rgba(167,183,204,0.4)",
              handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
              handleSize: "100%",
              handleStyle: {
                color: "#a7b7cc"
              },
              labelPrecision: null,
              labelFormatter: null,
              showDetail: !0,
              showDataShadow: "auto",
              realtime: !0,
              zoomLock: !1,
              textStyle: {
                color: "#333"
              }
            }
          }),
          function (t, e, n, i, r, o) {
            e[0] = Hh(e[0], n),
              e[1] = Hh(e[1], n),
              t = t || 0;
            var a = n[1] - n[0];
            null != r && (r = Hh(r, [0, a])),
              null != o && (o = Math.max(o, null != r ? r : 0)),
              "all" === i && (r = o = Math.abs(e[1] - e[0]),
                i = 0);
            var s = Gh(e, i);
            e[i] += t;
            var l = r || 0,
              h = n.slice();
            s.sign < 0 ? h[0] += l : h[1] -= l,
              e[i] = Hh(e[i], h);
            u = Gh(e, i);
            null != r && (u.sign !== s.sign || u.span < r) && (e[1 - i] = e[i] + s.sign * r);
            var u = Gh(e, i);
            return null != o && u.span > o && (e[1 - i] = e[i] + u.sign * o),
              e
          }
        ),
        A_ = Ng,
        C_ = yn,
        k_ = wn,
        D_ = g,
        L_ = c,
        P_ = "horizontal",
        O_ = 5,
        z_ = ["line", "bar", "candlestick", "scatter"],
        E_ = I_.extend({
          type: "dataZoom.slider",
          init: function (t, e) {
            this._displayables = {},
              this._orient,
              this._range,
              this._handleEnds,
              this._size,
              this._handleWidth,
              this._handleHeight,
              this._location,
              this._dragging,
              this._dataShadowInfo,
              this.api = e
          },
          render: function (t, e, n, i) {
            E_.superApply(this, "render", arguments),
              xo(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"),
              this._orient = t.get("orient"),
              !1 !== this.dataZoomModel.get("show") ? (i && "dataZoom" === i.type && i.from === this.uid || this._buildView(),
                this._updateView()) : this.group.removeAll()
          },
          remove: function () {
            E_.superApply(this, "remove", arguments),
              _o(this, "_dispatchZoomAction")
          },
          dispose: function () {
            E_.superApply(this, "dispose", arguments),
              _o(this, "_dispatchZoomAction")
          },
          _buildView: function () {
            var t = this.group;
            t.removeAll(),
              this._resetLocation(),
              this._resetInterval();
            var e = this._displayables.barGroup = new yf;
            this._renderBackground(),
              this._renderHandle(),
              this._renderDataShadow(),
              t.add(e),
              this._positionGroup()
          },
          _resetLocation: function () {
            var t = this.dataZoomModel,
              e = this.api,
              n = this._findCoordRect(),
              i = {
                width: e.getWidth(),
                height: e.getHeight()
              },
              r = this._orient === P_ ? {
                right: i.width - n.x - n.width,
                top: i.height - 30 - 7,
                width: n.width,
                height: 30
              } : {
                right: 7,
                top: n.y,
                width: 30,
                height: n.height
              },
              o = Hr(t.option);
            c(["right", "top", "width", "height"], function (t) {
              "ph" === o[t] && (o[t] = r[t])
            });
            var a = Vr(o, i, t.padding);
            this._location = {
                x: a.x,
                y: a.y
              },
              this._size = [a.width, a.height],
              "vertical" === this._orient && this._size.reverse()
          },
          _positionGroup: function () {
            var t = this.group,
              e = this._location,
              n = this._orient,
              i = this.dataZoomModel.getFirstTargetAxisModel(),
              r = i && i.get("inverse"),
              o = this._displayables.barGroup,
              a = (this._dataShadowInfo || {}).otherAxisInverse;
            o.attr(n !== P_ || r ? n === P_ && r ? {
              scale: a ? [-1, 1] : [-1, -1]
            } : "vertical" !== n || r ? {
              scale: a ? [-1, -1] : [-1, 1],
              rotation: Math.PI / 2
            } : {
              scale: a ? [1, -1] : [1, 1],
              rotation: Math.PI / 2
            } : {
              scale: a ? [1, 1] : [1, -1]
            });
            var s = t.getBoundingRect([o]);
            t.attr("position", [e.x - s.x, e.y - s.y])
          },
          _getViewExtent: function () {
            return [0, this._size[0]]
          },
          _renderBackground: function () {
            var t = this.dataZoomModel,
              e = this._size,
              n = this._displayables.barGroup;
            n.add(new A_({
                silent: !0,
                shape: {
                  x: 0,
                  y: 0,
                  width: e[0],
                  height: e[1]
                },
                style: {
                  fill: t.get("backgroundColor")
                },
                z2: -40
              })),
              n.add(new A_({
                shape: {
                  x: 0,
                  y: 0,
                  width: e[0],
                  height: e[1]
                },
                style: {
                  fill: "transparent"
                },
                z2: 0,
                onclick: g(this._onClickPanelClick, this)
              }))
          },
          _renderDataShadow: function () {
            var t = this._dataShadowInfo = this._prepareDataShadowInfo();
            if (t) {
              var e = this._size,
                n = t.series,
                i = n.getRawData(),
                r = n.getShadowDim ? n.getShadowDim() : t.otherDim;
              if (null != r) {
                var a = i.getDataExtent(r),
                  s = .3 * (a[1] - a[0]);
                a = [a[0] - s, a[1] + s];
                var l, h = [0, e[1]],
                  u = [0, e[0]],
                  c = [
                    [e[0], 0],
                    [0, 0]
                  ],
                  d = [],
                  f = u[1] / (i.count() - 1),
                  p = 0,
                  g = Math.round(i.count() / e[0]);
                i.each([r], function (t, e) {
                  if (g > 0 && e % g)
                    p += f;
                  else {
                    var n = null == t || isNaN(t) || "" === t,
                      i = n ? 0 : C_(t, a, h, !0);
                    n && !l && e ? (c.push([c[c.length - 1][0], 0]),
                        d.push([d[d.length - 1][0], 0])) : !n && l && (c.push([p, 0]),
                        d.push([p, 0])),
                      c.push([p, i]),
                      d.push([p, i]),
                      p += f,
                      l = n
                  }
                });
                var v = this.dataZoomModel;
                this._displayables.barGroup.add(new zg({
                    shape: {
                      points: c
                    },
                    style: o({
                      fill: v.get("dataBackgroundColor")
                    }, v.getModel("dataBackground.areaStyle").getAreaStyle()),
                    silent: !0,
                    z2: -20
                  })),
                  this._displayables.barGroup.add(new Eg({
                    shape: {
                      points: d
                    },
                    style: v.getModel("dataBackground.lineStyle").getLineStyle(),
                    silent: !0,
                    z2: -19
                  }))
              }
            }
          },
          _prepareDataShadowInfo: function () {
            var t = this.dataZoomModel,
              e = t.get("showDataShadow");
            if (!1 !== e) {
              var n, i = this.ecModel;
              return t.eachTargetAxis(function (r, o) {
                  c(t.getAxisProxy(r.name, o).getTargetSeriesModels(), function (t) {
                    if (!(n || !0 !== e && s(z_, t.get("type")) < 0)) {
                      var a, l = i.getComponent(r.axis, o).axis,
                        h = Fh(r.name),
                        u = t.coordinateSystem;
                      null != h && u.getOtherAxis && (a = u.getOtherAxis(l).inverse),
                        n = {
                          thisAxis: l,
                          series: t,
                          thisDim: r.name,
                          otherDim: h,
                          otherAxisInverse: a
                        }
                    }
                  }, this)
                }, this),
                n
            }
          },
          _renderHandle: function () {
            var t = this._displayables,
              e = t.handles = [],
              n = t.handleLabels = [],
              i = this._displayables.barGroup,
              r = this._size,
              o = this.dataZoomModel;
            i.add(t.filler = new A_({
                draggable: !0,
                cursor: Zh(this._orient),
                drift: D_(this._onDragMove, this, "all"),
                onmousemove: function (t) {
                  jf(t.event)
                },
                ondragstart: D_(this._showDataInfo, this, !0),
                ondragend: D_(this._onDragEnd, this),
                onmouseover: D_(this._showDataInfo, this, !0),
                onmouseout: D_(this._showDataInfo, this, !1),
                style: {
                  fill: o.get("fillerColor"),
                  textPosition: "inside"
                }
              })),
              i.add(new A_(Gi({
                silent: !0,
                shape: {
                  x: 0,
                  y: 0,
                  width: r[0],
                  height: r[1]
                },
                style: {
                  stroke: o.get("dataBackgroundColor") || o.get("borderColor"),
                  lineWidth: 1,
                  fill: "rgba(0,0,0,0)"
                }
              }))),
              L_([0, 1], function (t) {
                var r = xr(o.get("handleIcon"), {
                    cursor: Zh(this._orient),
                    draggable: !0,
                    drift: D_(this._onDragMove, this, t),
                    onmousemove: function (t) {
                      jf(t.event)
                    },
                    ondragend: D_(this._onDragEnd, this),
                    onmouseover: D_(this._showDataInfo, this, !0),
                    onmouseout: D_(this._showDataInfo, this, !1)
                  }, {
                    x: -1,
                    y: 0,
                    width: 2,
                    height: 2
                  }),
                  a = r.getBoundingRect();
                this._handleHeight = xn(o.get("handleSize"), this._size[1]),
                  this._handleWidth = a.width / a.height * this._handleHeight,
                  r.setStyle(o.getModel("handleStyle").getItemStyle());
                var s = o.get("handleColor");
                null != s && (r.style.fill = s),
                  i.add(e[t] = r);
                var l = o.textStyleModel;
                this.group.add(n[t] = new Tg({
                  silent: !0,
                  invisible: !0,
                  style: {
                    x: 0,
                    y: 0,
                    text: "",
                    textVerticalAlign: "middle",
                    textAlign: "center",
                    textFill: l.getTextColor(),
                    textFont: l.getFont()
                  },
                  z2: 10
                }))
              }, this)
          },
          _resetInterval: function () {
            var t = this._range = this.dataZoomModel.getPercentRange(),
              e = this._getViewExtent();
            this._handleEnds = [C_(t[0], [0, 100], e, !0), C_(t[1], [0, 100], e, !0)]
          },
          _updateInterval: function (t, e) {
            var n = this.dataZoomModel,
              i = this._handleEnds,
              r = this._getViewExtent(),
              o = n.findRepresentativeAxisProxy().getMinMaxSpan(),
              a = [0, 100];
            T_(e, i, r, n.get("zoomLock") ? "all" : t, null != o.minSpan ? C_(o.minSpan, a, r, !0) : null, null != o.maxSpan ? C_(o.maxSpan, a, r, !0) : null),
              this._range = k_([C_(i[0], r, a, !0), C_(i[1], r, a, !0)])
          },
          _updateView: function (t) {
            var e = this._displayables,
              n = this._handleEnds,
              i = k_(n.slice()),
              r = this._size;
            L_([0, 1], function (t) {
                var i = e.handles[t],
                  o = this._handleHeight;
                i.attr({
                  scale: [o / 2, o / 2],
                  position: [n[t], r[1] / 2 - o / 2]
                })
              }, this),
              e.filler.setShape({
                x: i[0],
                y: 0,
                width: i[1] - i[0],
                height: r[1]
              }),
              this._updateDataInfo(t)
          },
          _updateDataInfo: function (t) {
            function e(t) {
              var e = pr(i.handles[t].parent, this.group),
                n = vr(0 === t ? "right" : "left", e),
                s = this._handleWidth / 2 + O_,
                l = gr([c[t] + (0 === t ? -s : s), this._size[1] / 2], e);
              r[t].setStyle({
                x: l[0],
                y: l[1],
                textVerticalAlign: o === P_ ? "middle" : n,
                textAlign: o === P_ ? n : "center",
                text: a[t]
              })
            }
            var n = this.dataZoomModel,
              i = this._displayables,
              r = i.handleLabels,
              o = this._orient,
              a = ["", ""];
            if (n.get("showDetail")) {
              var s = n.findRepresentativeAxisProxy();
              if (s) {
                var l = s.getAxisModel().axis,
                  h = this._range,
                  u = t ? s.calculateDataWindow({
                    start: h[0],
                    end: h[1]
                  }).valueWindow : s.getDataValueWindow();
                a = [this._formatLabel(u[0], l), this._formatLabel(u[1], l)]
              }
            }
            var c = k_(this._handleEnds.slice());
            e.call(this, 0),
              e.call(this, 1)
          },
          _formatLabel: function (t, e) {
            var n = this.dataZoomModel,
              i = n.get("labelFormatter"),
              r = n.get("labelPrecision");
            null != r && "auto" !== r || (r = e.getPixelPrecision());
            var o = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));
            return y(i) ? i(t, o) : x(i) ? i.replace("{value}", o) : o
          },
          _showDataInfo: function (t) {
            t = this._dragging || t;
            var e = this._displayables.handleLabels;
            e[0].attr("invisible", !t),
              e[1].attr("invisible", !t)
          },
          _onDragMove: function (t, e, n) {
            this._dragging = !0;
            var i = gr([e, n], this._displayables.barGroup.getLocalTransform(), !0);
            this._updateInterval(t, i[0]);
            var r = this.dataZoomModel.get("realtime");
            this._updateView(!r),
              r && r && this._dispatchZoomAction()
          },
          _onDragEnd: function () {
            this._dragging = !1,
              this._showDataInfo(!1),
              this._dispatchZoomAction()
          },
          _onClickPanelClick: function (t) {
            var e = this._size,
              n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
            if (!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
              var i = this._handleEnds,
                r = (i[0] + i[1]) / 2;
              this._updateInterval("all", n[0] - r),
                this._updateView(),
                this._dispatchZoomAction()
            }
          },
          _dispatchZoomAction: function () {
            var t = this._range;
            this.api.dispatchAction({
              type: "dataZoom",
              from: this.uid,
              dataZoomId: this.dataZoomModel.id,
              start: t[0],
              end: t[1]
            })
          },
          _findCoordRect: function () {
            var t;
            if (L_(this.getTargetCoordInfo(), function (e) {
                if (!t && e.length) {
                  var n = e[0].model.coordinateSystem;
                  t = n.getRect && n.getRect()
                }
              }),
              !t) {
              var e = this.api.getWidth(),
                n = this.api.getHeight();
              t = {
                x: .2 * e,
                y: .2 * n,
                width: .6 * e,
                height: .6 * n
              }
            }
            return t
          }
        });
      S_.extend({
        type: "dataZoom.inside",
        defaultOption: {
          disabled: !1,
          zoomLock: !1,
          zoomOnMouseWheel: !0,
          moveOnMouseMove: !0,
          preventDefaultMouseMove: !0
        }
      });
      var N_ = "\0_ec_interaction_mutex";
      Uo({
          type: "takeGlobalCursor",
          event: "globalCursorTaken",
          update: "update"
        }, function () {}),
        h(Yh, Bd);
      var B_ = v,
        R_ = "\0_ec_dataZoom_roams",
        V_ = g,
        W_ = I_.extend({
          type: "dataZoom.inside",
          init: function (t, e) {
            this._range
          },
          render: function (t, e, n, i) {
            W_.superApply(this, "render", arguments),
              ou(i, t.id) && (this._range = t.getPercentRange()),
              c(this.getTargetCoordInfo(), function (e, i) {
                var r = d(e, function (t) {
                  return au(t.model)
                });
                c(e, function (e) {
                  var o = e.model,
                    a = t.option;
                  iu(n, {
                    coordId: au(o),
                    allCoordIds: r,
                    containsPoint: function (t, e, n) {
                      return o.coordinateSystem.containPoint([e, n])
                    },
                    dataZoomId: t.id,
                    throttleRate: t.get("throttle", !0),
                    panGetRange: V_(this._onPan, this, e, i),
                    zoomGetRange: V_(this._onZoom, this, e, i),
                    zoomLock: a.zoomLock,
                    disabled: a.disabled,
                    roamControllerOpt: {
                      zoomOnMouseWheel: a.zoomOnMouseWheel,
                      moveOnMouseMove: a.moveOnMouseMove,
                      preventDefaultMouseMove: a.preventDefaultMouseMove
                    }
                  })
                }, this)
              }, this)
          },
          dispose: function () {
            ru(this.api, this.dataZoomModel.id),
              W_.superApply(this, "dispose", arguments),
              this._range = null
          },
          _onPan: function (t, e, n, i, r, o, a, s, l) {
            var h = this._range.slice(),
              u = t.axisModels[0];
            if (u) {
              var c = G_[e]([o, a], [s, l], u, n, t),
                d = c.signal * (h[1] - h[0]) * c.pixel / c.pixelLength;
              return T_(d, h, [0, 100], "all"),
                this._range = h
            }
          },
          _onZoom: function (t, e, n, i, r, o) {
            var a = this._range.slice(),
              s = t.axisModels[0];
            if (s) {
              var l = G_[e](null, [r, o], s, n, t),
                h = (l.signal > 0 ? l.pixelStart + l.pixelLength - l.pixel : l.pixel - l.pixelStart) / l.pixelLength * (a[1] - a[0]) + a[0];
              i = Math.max(1 / i, 0),
                a[0] = (a[0] - h) * i + h,
                a[1] = (a[1] - h) * i + h;
              var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
              return T_(0, a, [0, 100], 0, u.minSpan, u.maxSpan),
                this._range = a
            }
          }
        }),
        G_ = {
          grid: function (t, e, n, i, r) {
            var o = n.axis,
              a = {},
              s = r.model.coordinateSystem.getRect();
            return t = t || [0, 0],
              "x" === o.dim ? (a.pixel = e[0] - t[0],
                a.pixelLength = s.width,
                a.pixelStart = s.x,
                a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1],
                a.pixelLength = s.height,
                a.pixelStart = s.y,
                a.signal = o.inverse ? -1 : 1),
              a
          },
          polar: function (t, e, n, i, r) {
            var o = n.axis,
              a = {},
              s = r.model.coordinateSystem,
              l = s.getRadiusAxis().getExtent(),
              h = s.getAngleAxis().getExtent();
            return t = t ? s.pointToCoord(t) : [0, 0],
              e = s.pointToCoord(e),
              "radiusAxis" === n.mainType ? (a.pixel = e[0] - t[0],
                a.pixelLength = l[1] - l[0],
                a.pixelStart = l[0],
                a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1],
                a.pixelLength = h[1] - h[0],
                a.pixelStart = h[0],
                a.signal = o.inverse ? -1 : 1),
              a
          },
          singleAxis: function (t, e, n, i, r) {
            var o = n.axis,
              a = r.model.coordinateSystem.getRect(),
              s = {};
            return t = t || [0, 0],
              "horizontal" === o.orient ? (s.pixel = e[0] - t[0],
                s.pixelLength = a.width,
                s.pixelStart = a.x,
                s.signal = o.inverse ? 1 : -1) : (s.pixel = e[1] - t[1],
                s.pixelLength = a.height,
                s.pixelStart = a.y,
                s.signal = o.inverse ? -1 : 1),
              s
          }
        };
      Zo(function (t, e) {
          t.eachComponent("dataZoom", function (t) {
              t.eachTargetAxis(gu),
                t.eachTargetAxis(vu)
            }),
            t.eachComponent("dataZoom", function (t) {
              var e = t.findRepresentativeAxisProxy(),
                n = e.getDataPercentWindow(),
                i = e.getDataValueWindow();
              t.setRawRange({
                start: n[0],
                end: n[1],
                startValue: i[0],
                endValue: i[1]
              }, !0)
            })
        }),
        Uo("dataZoom", function (t, e) {
          var n = zh(g(e.eachComponent, e, "dataZoom"), y_, function (t, e) {
              return t.get(e.axisIndex)
            }),
            i = [];
          e.eachComponent({
              mainType: "dataZoom",
              query: t
            }, function (t, e) {
              i.push.apply(i, n(t).nodes)
            }),
            c(i, function (e, n) {
              e.setRawRange({
                start: t.start,
                end: t.end,
                startValue: t.startValue,
                endValue: t.endValue
              })
            })
        });
      var H_ = {},
        F_ = Yo({
          type: "toolbox",
          layoutMode: {
            type: "box",
            ignoreSize: !0
          },
          mergeDefaultAndTheme: function (t) {
            F_.superApply(this, "mergeDefaultAndTheme", arguments),
              c(this.option.feature, function (t, e) {
                var i = yu(e);
                i && n(t, i.defaultOption)
              })
          },
          defaultOption: {
            show: !0,
            z: 6,
            zlevel: 0,
            orient: "horizontal",
            left: "right",
            top: "top",
            backgroundColor: "transparent",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemSize: 15,
            itemGap: 8,
            showTitle: !0,
            iconStyle: {
              normal: {
                borderColor: "#666",
                color: "none"
              },
              emphasis: {
                borderColor: "#3E98C5"
              }
            }
          }
        });
      $o({
        type: "toolbox",
        render: function (t, e, n, i) {
          function r(r, a) {
            var s, c = u[r],
              d = u[a],
              f = new _r(l[c], t, t.ecModel);
            if (c && !d) {
              if (xu(c))
                s = {
                  model: f,
                  onclick: f.option.onclick,
                  featureName: c
                };
              else {
                var p = yu(c);
                if (!p)
                  return;
                s = new p(f, e, n)
              }
              h[c] = s
            } else {
              if (!(s = h[d]))
                return;
              s.model = f,
                s.ecModel = e,
                s.api = n
            }
            c || !d ? f.get("show") && !s.unusable ? (o(f, s, c),
              f.setIconStatus = function (t, e) {
                var n = this.option,
                  i = this.iconPaths;
                n.iconStatus = n.iconStatus || {},
                  n.iconStatus[t] = e,
                  i[t] && i[t].trigger(e)
              },
              s.render && s.render(f, e, n, i)) : s.remove && s.remove(e, n) : s.dispose && s.dispose(e, n)
          }

          function o(i, r, o) {
            var l = i.getModel("iconStyle"),
              h = r.getIcons ? r.getIcons() : i.get("icon"),
              u = i.get("title") || {};
            if ("string" == typeof h) {
              var d = h,
                f = u;
              u = {},
                (h = {})[o] = d,
                u[o] = f
            }
            var p = i.iconPaths = {};
            c(h, function (o, h) {
              var c = xr(o, {}, {
                x: -s / 2,
                y: -s / 2,
                width: s,
                height: s
              });
              c.setStyle(l.getModel("normal").getItemStyle()),
                c.hoverStyle = l.getModel("emphasis").getItemStyle(),
                er(c),
                t.get("showTitle") && (c.__title = u[h],
                  c.on("mouseover", function () {
                    var t = l.getModel("emphasis").getItemStyle();
                    c.setStyle({
                      text: u[h],
                      textPosition: t.textPosition || "bottom",
                      textFill: t.fill || t.stroke || "#000",
                      textAlign: t.textAlign || "center"
                    })
                  }).on("mouseout", function () {
                    c.setStyle({
                      textFill: null
                    })
                  })),
                c.trigger(i.get("iconStatus." + h) || "normal"),
                a.add(c),
                c.on("click", g(r.onclick, r, e, n, h)),
                p[h] = c
            })
          }
          var a = this.group;
          if (a.removeAll(),
            t.get("show")) {
            var s = +t.get("itemSize"),
              l = t.get("feature") || {},
              h = this._features || (this._features = {}),
              u = [];
            c(l, function (t, e) {
                u.push(e)
              }),
              new ta(this._featureNames || [], u).add(r).update(r).remove(v(r, null)).execute(),
              this._featureNames = u,
              $l(a, t, n),
              a.add(Kl(a.getBoundingRect(), t)),
              a.eachChild(function (t) {
                var e = t.__title,
                  i = t.hoverStyle;
                if (i && e) {
                  var r = le(e, be(i)),
                    o = t.position[0] + a.position[0],
                    l = !1;
                  t.position[1] + a.position[1] + s + r.height > n.getHeight() && (i.textPosition = "top",
                    l = !0);
                  var h = l ? -5 - r.height : s + 8;
                  o + r.width / 2 > n.getWidth() ? (i.textPosition = ["100%", h],
                    i.textAlign = "right") : o - r.width / 2 < 0 && (i.textPosition = [0, h],
                    i.textAlign = "left")
                }
              })
          }
        },
        updateView: function (t, e, n, i) {
          c(this._features, function (t) {
            t.updateView && t.updateView(t.model, e, n, i)
          })
        },
        updateLayout: function (t, e, n, i) {
          c(this._features, function (t) {
            t.updateLayout && t.updateLayout(t.model, e, n, i)
          })
        },
        remove: function (t, e) {
          c(this._features, function (n) {
              n.remove && n.remove(t, e)
            }),
            this.group.removeAll()
        },
        dispose: function (t, e) {
          c(this._features, function (n) {
            n.dispose && n.dispose(t, e)
          })
        }
      });
      var Z_ = {
          toolbox: {
            brush: {
              title: {
                rect: "矩形选择",
                polygon: "圈选",
                lineX: "横向选择",
                lineY: "纵向选择",
                keep: "保持选择",
                clear: "清除选择"
              }
            },
            dataView: {
              title: "数据视图",
              lang: ["数据视图", "关闭", "刷新"]
            },
            dataZoom: {
              title: {
                zoom: "区域缩放",
                back: "区域缩放还原"
              }
            },
            magicType: {
              title: {
                line: "切换为折线图",
                bar: "切换为柱状图",
                stack: "切换为堆叠",
                tiled: "切换为平铺"
              }
            },
            restore: {
              title: "还原"
            },
            saveAsImage: {
              title: "保存为图片",
              lang: ["右键另存为图片"]
            }
          }
        },
        U_ = Z_.toolbox.saveAsImage;
      _u.defaultOption = {
          show: !0,
          icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
          title: U_.title,
          type: "png",
          name: "",
          excludeComponents: ["toolbox"],
          pixelRatio: 1,
          lang: U_.lang.slice()
        },
        _u.prototype.unusable = !vd.canvasSupported,
        _u.prototype.onclick = function (t, e) {
          var n = this.model,
            i = n.get("name") || t.get("title.0.text") || "echarts",
            r = document.createElement("a"),
            o = n.get("type", !0) || "png";
          r.download = i + "." + o,
            r.target = "_blank";
          var a = e.getConnectedDataURL({
            type: o,
            backgroundColor: n.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
            excludeComponents: n.get("excludeComponents"),
            pixelRatio: n.get("pixelRatio")
          });
          if (r.href = a,
            "function" != typeof MouseEvent || vd.browser.ie || vd.browser.edge)
            if (window.navigator.msSaveOrOpenBlob) {
              for (var s = atob(a.split(",")[1]), l = s.length, h = new Uint8Array(l); l--;)
                h[l] = s.charCodeAt(l);
              var u = new Blob([h]);
              window.navigator.msSaveOrOpenBlob(u, i + "." + o)
            } else {
              var c = n.get("lang"),
                d = '<body style="margin:0;"><img src="' + a + '" style="max-width:100%;" title="' + (c && c[0] || "") + '" /></body>';
              window.open().document.write(d)
            }
          else {
            var f = new MouseEvent("click", {
              view: window,
              bubbles: !0,
              cancelable: !1
            });
            r.dispatchEvent(f)
          }
        },
        mu("saveAsImage", _u);
      var X_ = Z_.toolbox.magicType;
      wu.defaultOption = {
        show: !0,
        type: [],
        icon: {
          line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
          bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
          stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
          tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
        },
        title: e(X_.title),
        option: {},
        seriesIndex: {}
      };
      var j_ = wu.prototype;
      j_.getIcons = function () {
        var t = this.model,
          e = t.get("icon"),
          n = {};
        return c(t.get("type"), function (t) {
            e[t] && (n[t] = e[t])
          }),
          n
      };
      var q_ = {
          line: function (t, e, i, r) {
            if ("bar" === t)
              return n({
                id: e,
                type: "line",
                data: i.get("data"),
                stack: i.get("stack"),
                markPoint: i.get("markPoint"),
                markLine: i.get("markLine")
              }, r.get("option.line") || {}, !0)
          },
          bar: function (t, e, i, r) {
            if ("line" === t)
              return n({
                id: e,
                type: "bar",
                data: i.get("data"),
                stack: i.get("stack"),
                markPoint: i.get("markPoint"),
                markLine: i.get("markLine")
              }, r.get("option.bar") || {}, !0)
          },
          stack: function (t, e, i, r) {
            if ("line" === t || "bar" === t)
              return n({
                id: e,
                stack: "__ec_magicType_stack__"
              }, r.get("option.stack") || {}, !0)
          },
          tiled: function (t, e, i, r) {
            if ("line" === t || "bar" === t)
              return n({
                id: e,
                stack: ""
              }, r.get("option.tiled") || {}, !0)
          }
        },
        Y_ = [
          ["line", "bar"],
          ["stack", "tiled"]
        ];
      j_.onclick = function (t, e, n) {
          var i = this.model,
            r = i.get("seriesIndex." + n);
          if (q_[n]) {
            var a = {
              series: []
            };
            c(Y_, function (t) {
                s(t, n) >= 0 && c(t, function (t) {
                  i.setIconStatus(t, "normal")
                })
              }),
              i.setIconStatus(n, "emphasis"),
              t.eachComponent({
                mainType: "series",
                query: null == r ? null : {
                  seriesIndex: r
                }
              }, function (e) {
                var r = e.subType,
                  s = e.id,
                  l = q_[n](r, s, e, i);
                l && (o(l, e.option),
                  a.series.push(l));
                var h = e.coordinateSystem;
                if (h && "cartesian2d" === h.type && ("line" === n || "bar" === n)) {
                  var u = h.getAxesByScale("ordinal")[0];
                  if (u) {
                    var c = u.dim + "Axis",
                      d = t.queryComponents({
                        mainType: c,
                        index: e.get(name + "Index"),
                        id: e.get(name + "Id")
                      })[0].componentIndex;
                    a[c] = a[c] || [];
                    for (var f = 0; f <= d; f++)
                      a[c][d] = a[c][d] || {};
                    a[c][d].boundaryGap = "bar" === n
                  }
                }
              }),
              e.dispatchAction({
                type: "changeMagicType",
                currentType: n,
                newOption: a
              })
          }
        },
        Uo({
          type: "changeMagicType",
          event: "magicTypeChanged",
          update: "prepareAndUpdate"
        }, function (t, e) {
          e.mergeOption(t.newOption)
        }),
        mu("magicType", wu);
      var $_ = Z_.toolbox.dataView,
        K_ = new Array(60).join("-"),
        Q_ = "\t",
        J_ = new RegExp("[" + Q_ + "]+", "g");
      Lu.defaultOption = {
          show: !0,
          readOnly: !1,
          optionToContent: null,
          contentToOption: null,
          icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
          title: e($_.title),
          lang: e($_.lang),
          backgroundColor: "#fff",
          textColor: "#000",
          textareaColor: "#fff",
          textareaBorderColor: "#333",
          buttonColor: "#c23531",
          buttonTextColor: "#fff"
        },
        Lu.prototype.onclick = function (t, e) {
          function n() {
            i.removeChild(o),
              x._dom = null
          }
          var i = e.getDom(),
            r = this.model;
          this._dom && i.removeChild(this._dom);
          var o = document.createElement("div");
          o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;",
            o.style.backgroundColor = r.get("backgroundColor") || "#fff";
          var a = document.createElement("h4"),
            s = r.get("lang") || [];
          a.innerHTML = s[0] || r.get("title"),
            a.style.cssText = "margin: 10px 20px;",
            a.style.color = r.get("textColor");
          var l = document.createElement("div"),
            h = document.createElement("textarea");
          l.style.cssText = "display:block;width:100%;overflow:auto;";
          var u = r.get("optionToContent"),
            c = r.get("contentToOption"),
            d = Iu(t);
          if ("function" == typeof u) {
            var f = u(e.getOption());
            "string" == typeof f ? l.innerHTML = f : b(f) && l.appendChild(f)
          } else
            l.appendChild(h),
            h.readOnly = r.get("readOnly"),
            h.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",
            h.style.color = r.get("textColor"),
            h.style.borderColor = r.get("textareaBorderColor"),
            h.style.backgroundColor = r.get("textareaColor"),
            h.value = d.value;
          var p = d.meta,
            g = document.createElement("div");
          g.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
          var v = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
            m = document.createElement("div"),
            y = document.createElement("div");
          v += ";background-color:" + r.get("buttonColor"),
            v += ";color:" + r.get("buttonTextColor");
          var x = this;
          nn(m, "click", n),
            nn(y, "click", function () {
              var t;
              try {
                t = "function" == typeof c ? c(l, e.getOption()) : Du(h.value, p)
              } catch (t) {
                throw n(),
                  new Error("Data view format error " + t)
              }
              t && e.dispatchAction({
                  type: "changeDataView",
                  newOption: t
                }),
                n()
            }),
            m.innerHTML = s[1],
            y.innerHTML = s[2],
            y.style.cssText = v,
            m.style.cssText = v,
            !r.get("readOnly") && g.appendChild(y),
            g.appendChild(m),
            nn(h, "keydown", function (t) {
              if (9 === (t.keyCode || t.which)) {
                var e = this.value,
                  n = this.selectionStart,
                  i = this.selectionEnd;
                this.value = e.substring(0, n) + Q_ + e.substring(i),
                  this.selectionStart = this.selectionEnd = n + 1,
                  jf(t)
              }
            }),
            o.appendChild(a),
            o.appendChild(l),
            o.appendChild(g),
            l.style.height = i.clientHeight - 80 + "px",
            i.appendChild(o),
            this._dom = o
        },
        Lu.prototype.remove = function (t, e) {
          this._dom && e.getDom().removeChild(this._dom)
        },
        Lu.prototype.dispose = function (t, e) {
          this.remove(t, e)
        },
        mu("dataView", Lu),
        Uo({
          type: "changeDataView",
          event: "dataViewChanged",
          update: "prepareAndUpdate"
        }, function (t, e) {
          var n = [];
          c(t.newOption.series, function (t) {
              var i = e.getSeriesByName(t.name)[0];
              if (i) {
                var o = i.get("data");
                n.push({
                  name: t.name,
                  data: Pu(t.data, o)
                })
              } else
                n.push(r({
                  type: "scatter"
                }, t))
            }),
            e.mergeOption(o({
              series: n
            }, t.newOption))
        });
      var tw = v,
        ew = c,
        nw = d,
        iw = Math.min,
        rw = Math.max,
        ow = Math.pow,
        aw = 1e4,
        sw = 6,
        lw = 6,
        hw = "globalPan",
        uw = {
          w: [0, 0],
          e: [0, 1],
          n: [1, 0],
          s: [1, 1]
        },
        cw = {
          w: "ew",
          e: "ew",
          n: "ns",
          s: "ns",
          ne: "nesw",
          sw: "nesw",
          nw: "nwse",
          se: "nwse"
        },
        dw = {
          brushStyle: {
            lineWidth: 2,
            stroke: "rgba(0,0,0,0.3)",
            fill: "rgba(0,0,0,0.1)"
          },
          transformable: !0,
          brushMode: "single",
          removeOnClick: !1
        },
        fw = 0;
      Ou.prototype = {
          constructor: Ou,
          enableBrush: function (t) {
            return this._brushType && Eu(this),
              t.brushType && zu(this, t),
              this
          },
          setPanels: function (t) {
            if (t && t.length) {
              var n = this._panels = {};
              c(t, function (t) {
                n[t.panelId] = e(t)
              })
            } else
              this._panels = null;
            return this
          },
          mount: function (t) {
            t = t || {},
              this._enableGlobalPan = t.enableGlobalPan;
            var e = this.group;
            return this._zr.add(e),
              e.attr({
                position: t.position || [0, 0],
                rotation: t.rotation || 0,
                scale: t.scale || [1, 1]
              }),
              this._transform = e.getLocalTransform(),
              this
          },
          eachCover: function (t, e) {
            ew(this._covers, t, e)
          },
          updateCovers: function (t) {
            function i(t, e) {
              return (null != t.id ? t.id : o + e) + "-" + t.brushType
            }

            function r(e, n) {
              var i = t[e];
              if (null != n && a[n] === h)
                s[e] = a[n];
              else {
                var r = s[e] = null != n ? (a[n].__brushOption = i,
                  a[n]) : Bu(l, Nu(l, i));
                Wu(l, r)
              }
            }
            t = d(t, function (t) {
              return n(e(dw), t, !0)
            });
            var o = "\0-brush-index-",
              a = this._covers,
              s = this._covers = [],
              l = this,
              h = this._creatingCover;
            return new ta(a, t, function (t, e) {
                return i(t.__brushOption, e)
              }, i).add(r).update(r).remove(function (t) {
                a[t] !== h && l.group.remove(a[t])
              }).execute(),
              this
          },
          unmount: function () {
            return this.enableBrush(!1),
              Zu(this),
              this._zr.remove(this.group),
              this
          },
          dispose: function () {
            this.unmount(),
              this.off()
          }
        },
        h(Ou, Bd);
      var pw = {
          mousedown: function (t) {
            if (this._dragging)
              dc.call(this, t);
            else if (!t.target || !t.target.draggable) {
              lc(t);
              var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
              this._creatingCover = null,
                (this._creatingPanel = Hu(this, t, e)) && (this._dragging = !0,
                  this._track = [e.slice()])
            }
          },
          mousemove: function (t) {
            var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
            if (sc(this, t, e),
              this._dragging) {
              lc(t);
              var n = uc(this, t, e, !1);
              n && Uu(this, n)
            }
          },
          mouseup: dc
        },
        gw = {
          lineX: fc(0),
          lineY: fc(1),
          rect: {
            createCover: function (t, e) {
              return qu(tw(nc, function (t) {
                return t
              }, function (t) {
                return t
              }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
            },
            getCreatingRange: function (t) {
              var e = ju(t);
              return Ju(e[1][0], e[1][1], e[0][0], e[0][1])
            },
            updateCoverShape: function (t, e, n, i) {
              Yu(t, e, n, i)
            },
            updateCommon: $u,
            contain: hc
          },
          polygon: {
            createCover: function (t, e) {
              var n = new yf;
              return n.add(new Eg({
                  name: "main",
                  style: Qu(e),
                  silent: !0
                })),
                n
            },
            getCreatingRange: function (t) {
              return t
            },
            endCreating: function (t, e) {
              e.remove(e.childAt(0)),
                e.add(new zg({
                  name: "main",
                  draggable: !0,
                  drift: tw(ic, t, e),
                  ondragend: tw(Uu, t, {
                    isEnd: !0
                  })
                }))
            },
            updateCoverShape: function (t, e, n, i) {
              e.childAt(0).setShape({
                points: oc(t, e, n)
              })
            },
            updateCommon: $u,
            contain: hc
          }
        },
        vw = {
          axisPointer: 1,
          tooltip: 1,
          brush: 1
        },
        mw = c,
        yw = s,
        xw = v,
        _w = ["dataToPoint", "pointToData"],
        ww = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"],
        bw = xc.prototype;
      bw.setOutputRanges = function (t, e) {
          this.matchOutputRanges(t, e, function (t, e, n) {
            if ((t.coordRanges || (t.coordRanges = [])).push(e),
              !t.coordRange) {
              t.coordRange = e;
              var i = Tw[t.brushType](0, n, e);
              t.__rangeOffset = {
                offset: Aw[t.brushType](i.values, t.range, [1, 1]),
                xyMinMax: i.xyMinMax
              }
            }
          })
        },
        bw.matchOutputRanges = function (t, e, n) {
          mw(t, function (t) {
            var i = this.findTargetInfo(t, e);
            i && !0 !== i && c(i.coordSyses, function (i) {
              var r = Tw[t.brushType](1, i, t.range);
              n(t, r.values, i, e)
            })
          }, this)
        },
        bw.setInputRanges = function (t, e) {
          mw(t, function (t) {
            var n = this.findTargetInfo(t, e);
            if (t.range = t.range || [],
              n && !0 !== n) {
              t.panelId = n.panelId;
              var i = Tw[t.brushType](0, n.coordSys, t.coordRange),
                r = t.__rangeOffset;
              t.range = r ? Aw[t.brushType](i.values, r.offset, Sc(i.xyMinMax, r.xyMinMax)) : i.values
            }
          }, this)
        },
        bw.makePanelOpts = function (t, e) {
          return d(this._targetInfoList, function (n) {
            var i = n.getPanelRect();
            return {
              panelId: n.panelId,
              defaultBrushType: e && e(n),
              clipPath: gc(i),
              isTargetByCursor: mc(i, t, n.coordSysModel),
              getLinearBrushOtherExtent: vc(i)
            }
          })
        },
        bw.controlSeries = function (t, e, n) {
          var i = this.findTargetInfo(t, n);
          return !0 === i || i && yw(i.coordSyses, e.coordinateSystem) >= 0
        },
        bw.findTargetInfo = function (t, e) {
          for (var n = this._targetInfoList, i = wc(e, t), r = 0; r < n.length; r++) {
            var o = n[r],
              a = t.panelId;
            if (a) {
              if (o.panelId === a)
                return o
            } else
              for (r = 0; r < Sw.length; r++)
                if (Sw[r](i, o))
                  return o
          }
          return !0
        };
      var Mw = {
          grid: function (t, e) {
            var n = t.xAxisModels,
              i = t.yAxisModels,
              r = t.gridModels,
              o = O(),
              a = {},
              s = {};
            (n || i || r) && (mw(n, function (t) {
                var e = t.axis.grid.model;
                o.set(e.id, e),
                  a[e.id] = !0
              }),
              mw(i, function (t) {
                var e = t.axis.grid.model;
                o.set(e.id, e),
                  s[e.id] = !0
              }),
              mw(r, function (t) {
                o.set(t.id, t),
                  a[t.id] = !0,
                  s[t.id] = !0
              }),
              o.each(function (t) {
                var r = t.coordinateSystem,
                  o = [];
                mw(r.getCartesians(), function (t, e) {
                    (yw(n, t.getAxis("x").model) >= 0 || yw(i, t.getAxis("y").model) >= 0) && o.push(t)
                  }),
                  e.push({
                    panelId: "grid--" + t.id,
                    gridModel: t,
                    coordSysModel: t,
                    coordSys: o[0],
                    coordSyses: o,
                    getPanelRect: Iw.grid,
                    xAxisDeclared: a[t.id],
                    yAxisDeclared: s[t.id]
                  })
              }))
          },
          geo: function (t, e) {
            mw(t.geoModels, function (t) {
              var n = t.coordinateSystem;
              e.push({
                panelId: "geo--" + t.id,
                geoModel: t,
                coordSysModel: t,
                coordSys: n,
                coordSyses: [n],
                getPanelRect: Iw.geo
              })
            })
          }
        },
        Sw = [function (t, e) {
          var n = t.xAxisModel,
            i = t.yAxisModel,
            r = t.gridModel;
          return !r && n && (r = n.axis.grid.model),
            !r && i && (r = i.axis.grid.model),
            r && r === e.gridModel
        }, function (t, e) {
          var n = t.geoModel;
          return n && n === e.geoModel
        }],
        Iw = {
          grid: function () {
            return this.coordSys.grid.getRect().clone()
          },
          geo: function () {
            var t = this.coordSys,
              e = t.getBoundingRect().clone();
            return e.applyTransform(pr(t)),
              e
          }
        },
        Tw = {
          lineX: xw(bc, 0),
          lineY: xw(bc, 1),
          rect: function (t, e, n) {
            var i = e[_w[t]]([n[0][0], n[1][0]]),
              r = e[_w[t]]([n[0][1], n[1][1]]),
              o = [_c([i[0], r[0]]), _c([i[1], r[1]])];
            return {
              values: o,
              xyMinMax: o
            }
          },
          polygon: function (t, e, n) {
            var i = [
              [1 / 0, -1 / 0],
              [1 / 0, -1 / 0]
            ];
            return {
              values: d(n, function (n) {
                var r = e[_w[t]](n);
                return i[0][0] = Math.min(i[0][0], r[0]),
                  i[1][0] = Math.min(i[1][0], r[1]),
                  i[0][1] = Math.max(i[0][1], r[0]),
                  i[1][1] = Math.max(i[1][1], r[1]),
                  r
              }),
              xyMinMax: i
            }
          }
        },
        Aw = {
          lineX: xw(Mc, 0),
          lineY: xw(Mc, 1),
          rect: function (t, e, n) {
            return [
              [t[0][0] - n[0] * e[0][0], t[0][1] - n[0] * e[0][1]],
              [t[1][0] - n[1] * e[1][0], t[1][1] - n[1] * e[1][1]]
            ]
          },
          polygon: function (t, e, n) {
            return d(t, function (t, i) {
              return [t[0] - n[0] * e[i][0], t[1] - n[1] * e[i][1]]
            })
          }
        },
        Cw = c,
        kw = "\0_ec_hist_store";
      S_.extend({
          type: "dataZoom.select"
        }),
        I_.extend({
          type: "dataZoom.select"
        });
      var Dw = Z_.toolbox.dataZoom,
        Lw = c,
        Pw = "\0_ec_\0toolbox-dataZoom_";
      Lc.defaultOption = {
        show: !0,
        icon: {
          zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
          back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        title: e(Dw.title)
      };
      var Ow = Lc.prototype;
      Ow.render = function (t, e, n, i) {
          this.model = t,
            this.ecModel = e,
            this.api = n,
            zc(t, e, this, i, n),
            Oc(t, e)
        },
        Ow.onclick = function (t, e, n) {
          zw[n].call(this)
        },
        Ow.remove = function (t, e) {
          this._brushController.unmount()
        },
        Ow.dispose = function (t, e) {
          this._brushController.dispose()
        };
      var zw = {
        zoom: function () {
          var t = !this._isZoomActive;
          this.api.dispatchAction({
            type: "takeGlobalCursor",
            key: "dataZoomSelect",
            dataZoomSelectActive: t
          })
        },
        back: function () {
          this._dispatchZoomAction(Ac(this.ecModel))
        }
      };
      Ow._onBrush = function (t, e) {
          function n(t, e, n) {
            var a = e.getAxis(t),
              s = a.model,
              l = i(t, s, o),
              h = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
            null == h.minValueSpan && null == h.maxValueSpan || (n = T_(0, n.slice(), a.scale.getExtent(), 0, h.minValueSpan, h.maxValueSpan)),
              l && (r[l.id] = {
                dataZoomId: l.id,
                startValue: n[0],
                endValue: n[1]
              })
          }

          function i(t, e, n) {
            var i;
            return n.eachComponent({
                mainType: "dataZoom",
                subType: "select"
              }, function (n) {
                n.getAxisModel(t, e.componentIndex) && (i = n)
              }),
              i
          }
          if (e.isEnd && t.length) {
            var r = {},
              o = this.ecModel;
            this._brushController.updateCovers([]),
              new xc(Pc(this.model.option), o, {
                include: ["grid"]
              }).matchOutputRanges(t, o, function (t, e, i) {
                if ("cartesian2d" === i.type) {
                  var r = t.brushType;
                  "rect" === r ? (n("x", i, e[0]),
                    n("y", i, e[1])) : n({
                    lineX: "x",
                    lineY: "y"
                  } [r], i, e)
                }
              }),
              Tc(o, r),
              this._dispatchZoomAction(r)
          }
        },
        Ow._dispatchZoomAction = function (t) {
          var n = [];
          Lw(t, function (t, i) {
              n.push(e(t))
            }),
            n.length && this.api.dispatchAction({
              type: "dataZoom",
              from: this.uid,
              batch: n
            })
        },
        mu("dataZoom", Lc),
        Fo(function (t) {
          function e(t, e) {
            if (e) {
              var r = t + "Index",
                o = e[r];
              null == o || "all" == o || m(o) || (o = !1 === o || "none" === o ? [] : [o]),
                n(t, function (e, n) {
                  if (null == o || "all" == o || -1 !== s(o, n)) {
                    var a = {
                      type: "select",
                      $fromToolbox: !0,
                      id: Pw + t + n
                    };
                    a[r] = n,
                      i.push(a)
                  }
                })
            }
          }

          function n(e, n) {
            var i = t[e];
            m(i) || (i = i ? [i] : []),
              Lw(i, n)
          }
          if (t) {
            var i = t.dataZoom || (t.dataZoom = []);
            m(i) || (t.dataZoom = i = [i]);
            var r = t.toolbox;
            if (r && (m(r) && (r = r[0]),
                r && r.feature)) {
              var o = r.feature.dataZoom;
              e("xAxis", o),
                e("yAxis", o)
            }
          }
        });
      var Ew = Z_.toolbox.restore;
      Ec.defaultOption = {
          show: !0,
          icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
          title: Ew.title
        },
        Ec.prototype.onclick = function (t, e, n) {
          Cc(t),
            e.dispatchAction({
              type: "restore",
              from: this.uid
            })
        },
        mu("restore", Ec),
        Uo({
          type: "restore",
          event: "restore",
          update: "prepareAndUpdate"
        }, function (t, e) {
          e.resetOption("recreate")
        });
      var Nw, Bw = "urn:schemas-microsoft-com:vml",
        Rw = "undefined" == typeof window ? null : window,
        Vw = !1,
        Ww = Rw && Rw.document;
      if (Ww && !vd.canvasSupported)
        try {
          !Ww.namespaces.zrvml && Ww.namespaces.add("zrvml", Bw),
            Nw = function (t) {
              return Ww.createElement("<zrvml:" + t + ' class="zrvml">')
            }
        } catch (t) {
          Nw = function (t) {
            return Ww.createElement("<" + t + ' xmlns="' + Bw + '" class="zrvml">')
          }
        }
      var Gw = Math.round,
        Hw = Math.sqrt,
        Fw = Math.abs,
        Zw = Math.cos,
        Uw = Math.sin,
        Xw = Math.max;
      if (!vd.canvasSupported) {
        var jw = 21600,
          qw = jw / 2,
          Yw = function (t) {
            t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;",
              t.coordsize = jw + "," + jw,
              t.coordorigin = "0,0"
          },
          $w = function (t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
          },
          Kw = function (t, e, n) {
            return "rgb(" + [t, e, n].join(",") + ")"
          },
          Qw = function (t, e) {
            e && t && e.parentNode !== t && t.appendChild(e)
          },
          Jw = function (t, e) {
            e && t && e.parentNode === t && t.removeChild(e)
          },
          tb = function (t, e, n) {
            return 1e5 * (parseFloat(t) || 0) + 1e3 * (parseFloat(e) || 0) + n
          },
          eb = function (t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
          },
          nb = function (t, e, n) {
            var i = wt(e);
            n = +n,
              isNaN(n) && (n = 1),
              i && (t.color = Kw(i[0], i[1], i[2]),
                t.opacity = n * i[3])
          },
          ib = function (t) {
            var e = wt(t);
            return [Kw(e[0], e[1], e[2]), e[3]]
          },
          rb = function (t, e, n) {
            var i = e.fill;
            if (null != i)
              if (i instanceof Hg) {
                var r, o = 0,
                  a = [0, 0],
                  s = 0,
                  l = 1,
                  h = n.getBoundingRect(),
                  u = h.width,
                  c = h.height;
                if ("linear" === i.type) {
                  r = "gradient";
                  var d = n.transform,
                    f = [i.x * u, i.y * c],
                    p = [i.x2 * u, i.y2 * c];
                  d && (j(f, f, d),
                    j(p, p, d));
                  var g = p[0] - f[0],
                    v = p[1] - f[1];
                  (o = 180 * Math.atan2(g, v) / Math.PI) < 0 && (o += 360),
                    o < 1e-6 && (o = 0)
                } else {
                  r = "gradientradial";
                  var f = [i.x * u, i.y * c],
                    d = n.transform,
                    m = n.scale,
                    y = u,
                    x = c;
                  a = [(f[0] - h.x) / y, (f[1] - h.y) / x],
                    d && j(f, f, d),
                    y /= m[0] * jw,
                    x /= m[1] * jw;
                  var _ = Xw(y, x);
                  s = 0 / _,
                    l = 2 * i.r / _ - s
                }
                var w = i.colorStops.slice();
                w.sort(function (t, e) {
                  return t.offset - e.offset
                });
                for (var b = w.length, M = [], S = [], I = 0; I < b; I++) {
                  var T = w[I],
                    A = ib(T.color);
                  S.push(T.offset * l + s + " " + A[0]),
                    0 !== I && I !== b - 1 || M.push(A)
                }
                if (b >= 2) {
                  var C = M[0][0],
                    k = M[1][0],
                    D = M[0][1] * e.opacity,
                    L = M[1][1] * e.opacity;
                  t.type = r,
                    t.method = "none",
                    t.focus = "100%",
                    t.angle = o,
                    t.color = C,
                    t.color2 = k,
                    t.colors = S.join(","),
                    t.opacity = L,
                    t.opacity2 = D
                }
                "radial" === r && (t.focusposition = a.join(","))
              } else
                nb(t, i, e.opacity)
          },
          ob = function (t, e) {
            null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")),
              null == e.stroke || e.stroke instanceof Hg || nb(t, e.stroke, e.opacity)
          },
          ab = function (t, e, n, i) {
            var r = "fill" == e,
              o = t.getElementsByTagName(e)[0];
            null != n[e] && "none" !== n[e] && (r || !r && n.lineWidth) ? (t[r ? "filled" : "stroked"] = "true",
              n[e] instanceof Hg && Jw(t, o),
              o || (o = Nw(e)),
              r ? rb(o, n, i) : ob(o, n),
              Qw(t, o)) : (t[r ? "filled" : "stroked"] = "false",
              Jw(t, o))
          },
          sb = [
            [],
            [],
            []
          ],
          lb = function (t, e) {
            var n, i, r, o, a, s, l = Xp.M,
              h = Xp.C,
              u = Xp.L,
              c = Xp.A,
              d = Xp.Q,
              f = [],
              p = t.data,
              g = t.len();
            for (o = 0; o < g;) {
              switch (r = p[o++],
                i = "",
                n = 0,
                r) {
                case l:
                  i = " m ",
                    n = 1,
                    a = p[o++],
                    s = p[o++],
                    sb[0][0] = a,
                    sb[0][1] = s;
                  break;
                case u:
                  i = " l ",
                    n = 1,
                    a = p[o++],
                    s = p[o++],
                    sb[0][0] = a,
                    sb[0][1] = s;
                  break;
                case d:
                case h:
                  i = " c ",
                    n = 3;
                  var v, m, y = p[o++],
                    x = p[o++],
                    _ = p[o++],
                    w = p[o++];
                  r === d ? (v = _,
                      m = w,
                      _ = (_ + 2 * y) / 3,
                      w = (w + 2 * x) / 3,
                      y = (a + 2 * y) / 3,
                      x = (s + 2 * x) / 3) : (v = p[o++],
                      m = p[o++]),
                    sb[0][0] = y,
                    sb[0][1] = x,
                    sb[1][0] = _,
                    sb[1][1] = w,
                    sb[2][0] = v,
                    sb[2][1] = m,
                    a = v,
                    s = m;
                  break;
                case c:
                  var b = 0,
                    M = 0,
                    S = 1,
                    I = 1,
                    T = 0;
                  e && (b = e[4],
                    M = e[5],
                    S = Hw(e[0] * e[0] + e[1] * e[1]),
                    I = Hw(e[2] * e[2] + e[3] * e[3]),
                    T = Math.atan2(-e[1] / I, e[0] / S));
                  var A = p[o++],
                    C = p[o++],
                    k = p[o++],
                    D = p[o++],
                    L = p[o++] + T,
                    P = p[o++] + L + T;
                  o++;
                  var O = p[o++],
                    z = A + Zw(L) * k,
                    E = C + Uw(L) * D,
                    y = A + Zw(P) * k,
                    x = C + Uw(P) * D,
                    N = O ? " wa " : " at ";
                  Math.abs(z - y) < 1e-4 && (Math.abs(P - L) > .01 ? O && (z += .0125) : Math.abs(E - C) < 1e-4 ? O && z < A || !O && z > A ? x -= .0125 : x += .0125 : O && E < C || !O && E > C ? y += .0125 : y -= .0125),
                    f.push(N, Gw(((A - k) * S + b) * jw - qw), ",", Gw(((C - D) * I + M) * jw - qw), ",", Gw(((A + k) * S + b) * jw - qw), ",", Gw(((C + D) * I + M) * jw - qw), ",", Gw((z * S + b) * jw - qw), ",", Gw((E * I + M) * jw - qw), ",", Gw((y * S + b) * jw - qw), ",", Gw((x * I + M) * jw - qw)),
                    a = y,
                    s = x;
                  break;
                case Xp.R:
                  var B = sb[0],
                    R = sb[1];
                  B[0] = p[o++],
                    B[1] = p[o++],
                    R[0] = B[0] + p[o++],
                    R[1] = B[1] + p[o++],
                    e && (j(B, B, e),
                      j(R, R, e)),
                    B[0] = Gw(B[0] * jw - qw),
                    R[0] = Gw(R[0] * jw - qw),
                    B[1] = Gw(B[1] * jw - qw),
                    R[1] = Gw(R[1] * jw - qw),
                    f.push(" m ", B[0], ",", B[1], " l ", R[0], ",", B[1], " l ", R[0], ",", R[1], " l ", B[0], ",", R[1]);
                  break;
                case Xp.Z:
                  f.push(" x ")
              }
              if (n > 0) {
                f.push(i);
                for (var V = 0; V < n; V++) {
                  var W = sb[V];
                  e && j(W, W, e),
                    f.push(Gw(W[0] * jw - qw), ",", Gw(W[1] * jw - qw), V < n - 1 ? "," : "")
                }
              }
            }
            return f.join("")
          };
        Ti.prototype.brushVML = function (t) {
            var e = this.style,
              n = this._vmlEl;
            n || (n = Nw("shape"),
                Yw(n),
                this._vmlEl = n),
              ab(n, "fill", e, this),
              ab(n, "stroke", e, this);
            var i = this.transform,
              r = null != i,
              o = n.getElementsByTagName("stroke")[0];
            if (o) {
              var a = e.lineWidth;
              if (r && !e.strokeNoScale) {
                var s = i[0] * i[3] - i[1] * i[2];
                a *= Hw(Fw(s))
              }
              o.weight = a + "px"
            }
            var l = this.path || (this.path = new rg);
            this.__dirtyPath && (l.beginPath(),
                this.buildPath(l, this.shape),
                l.toStatic(),
                this.__dirtyPath = !1),
              n.path = lb(l, this.transform),
              n.style.zIndex = tb(this.zlevel, this.z, this.z2),
              Qw(t, n),
              null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
          },
          Ti.prototype.onRemove = function (t) {
            Jw(t, this._vmlEl),
              this.removeRectText(t)
          },
          Ti.prototype.onAdd = function (t) {
            Qw(t, this._vmlEl),
              this.appendRectText(t)
          };
        var hb = function (t) {
          return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
        };
        Fe.prototype.brushVML = function (t) {
            var e, n, i = this.style,
              r = i.image;
            if (hb(r)) {
              var o = r.src;
              if (o === this._imageSrc)
                e = this._imageWidth,
                n = this._imageHeight;
              else {
                var a = r.runtimeStyle,
                  s = a.width,
                  l = a.height;
                a.width = "auto",
                  a.height = "auto",
                  e = r.width,
                  n = r.height,
                  a.width = s,
                  a.height = l,
                  this._imageSrc = o,
                  this._imageWidth = e,
                  this._imageHeight = n
              }
              r = o
            } else
              r === this._imageSrc && (e = this._imageWidth,
                n = this._imageHeight);
            if (r) {
              var h = i.x || 0,
                u = i.y || 0,
                c = i.width,
                d = i.height,
                f = i.sWidth,
                p = i.sHeight,
                g = i.sx || 0,
                v = i.sy || 0,
                m = f && p,
                y = this._vmlEl;
              y || (y = Ww.createElement("div"),
                Yw(y),
                this._vmlEl = y);
              var x, _ = y.style,
                w = !1,
                b = 1,
                M = 1;
              if (this.transform && (x = this.transform,
                  b = Hw(x[0] * x[0] + x[1] * x[1]),
                  M = Hw(x[2] * x[2] + x[3] * x[3]),
                  w = x[1] || x[2]),
                w) {
                var S = [h, u],
                  I = [h + c, u],
                  T = [h, u + d],
                  A = [h + c, u + d];
                j(S, S, x),
                  j(I, I, x),
                  j(T, T, x),
                  j(A, A, x);
                var C = Xw(S[0], I[0], T[0], A[0]),
                  k = Xw(S[1], I[1], T[1], A[1]),
                  D = [];
                D.push("M11=", x[0] / b, ",", "M12=", x[2] / M, ",", "M21=", x[1] / b, ",", "M22=", x[3] / M, ",", "Dx=", Gw(h * b + x[4]), ",", "Dy=", Gw(u * M + x[5])),
                  _.padding = "0 " + Gw(C) + "px " + Gw(k) + "px 0",
                  _.filter = "progid:DXImageTransform.Microsoft.Matrix(" + D.join("") + ", SizingMethod=clip)"
              } else
                x && (h = h * b + x[4],
                  u = u * M + x[5]),
                _.filter = "",
                _.left = Gw(h) + "px",
                _.top = Gw(u) + "px";
              var L = this._imageEl,
                P = this._cropEl;
              L || (L = Ww.createElement("div"),
                this._imageEl = L);
              var O = L.style;
              if (m) {
                if (e && n)
                  O.width = Gw(b * e * c / f) + "px",
                  O.height = Gw(M * n * d / p) + "px";
                else {
                  var z = new Image,
                    E = this;
                  z.onload = function () {
                      z.onload = null,
                        e = z.width,
                        n = z.height,
                        O.width = Gw(b * e * c / f) + "px",
                        O.height = Gw(M * n * d / p) + "px",
                        E._imageWidth = e,
                        E._imageHeight = n,
                        E._imageSrc = r
                    },
                    z.src = r
                }
                P || ((P = Ww.createElement("div")).style.overflow = "hidden",
                  this._cropEl = P);
                var N = P.style;
                N.width = Gw((c + g * c / f) * b),
                  N.height = Gw((d + v * d / p) * M),
                  N.filter = "progid:DXImageTransform.Microsoft.Matrix(Dx=" + -g * c / f * b + ",Dy=" + -v * d / p * M + ")",
                  P.parentNode || y.appendChild(P),
                  L.parentNode != P && P.appendChild(L)
              } else
                O.width = Gw(b * c) + "px",
                O.height = Gw(M * d) + "px",
                y.appendChild(L),
                P && P.parentNode && (y.removeChild(P),
                  this._cropEl = null);
              var B = "",
                R = i.opacity;
              R < 1 && (B += ".Alpha(opacity=" + Gw(100 * R) + ") "),
                B += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + r + ", SizingMethod=scale)",
                O.filter = B,
                y.style.zIndex = tb(this.zlevel, this.z, this.z2),
                Qw(t, y),
                null != i.text && this.drawRectText(t, this.getBoundingRect())
            }
          },
          Fe.prototype.onRemove = function (t) {
            Jw(t, this._vmlEl),
              this._vmlEl = null,
              this._cropEl = null,
              this._imageEl = null,
              this.removeRectText(t)
          },
          Fe.prototype.onAdd = function (t) {
            Qw(t, this._vmlEl),
              this.appendRectText(t)
          };
        var ub, cb = {},
          db = 0,
          fb = document.createElement("div"),
          pb = function (t) {
            var e = cb[t];
            if (!e) {
              db > 100 && (db = 0,
                cb = {});
              var n, i = fb.style;
              try {
                i.font = t,
                  n = i.fontFamily.split(",")[0]
              } catch (t) {}
              e = {
                  style: i.fontStyle || "normal",
                  variant: i.fontVariant || "normal",
                  weight: i.fontWeight || "normal",
                  size: 0 | parseFloat(i.fontSize || 12),
                  family: n || "Microsoft YaHei"
                },
                cb[t] = e,
                db++
            }
            return e
          };
        Bf.measureText(function (t, e) {
          var n = Ww;
          ub || ((ub = n.createElement("div")).style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",
            Ww.body.appendChild(ub));
          try {
            ub.style.font = e
          } catch (t) {}
          return ub.innerHTML = "",
            ub.appendChild(n.createTextNode(t)), {
              width: ub.offsetWidth
            }
        });
        for (var gb = new Ft, vb = [Gf, He, Fe, Ti, Tg], mb = 0; mb < vb.length; mb++) {
          var yb = vb[mb].prototype;
          yb.drawRectText = function (t, e, n, i) {
              var r = this.style;
              this.__dirty && Se(r);
              var o = r.text;
              if (null != o && (o += ""),
                o) {
                if (r.rich) {
                  var a = _e(o, r);
                  o = [];
                  for (var s = 0; s < a.lines.length; s++) {
                    for (var l = a.lines[s].tokens, h = [], u = 0; u < l.length; u++)
                      h.push(l[u].text);
                    o.push(h.join(""))
                  }
                  o = o.join("\n")
                }
                var c, d, f = r.textAlign,
                  p = r.textVerticalAlign,
                  g = pb(r.font),
                  v = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"';
                n = n || le(o, v, f, p);
                var m = this.transform;
                if (m && !i && (gb.copy(e),
                    gb.applyTransform(m),
                    e = gb),
                  i)
                  c = e.x,
                  d = e.y;
                else {
                  var y = r.textPosition,
                    x = r.textDistance;
                  if (y instanceof Array)
                    c = e.x + eb(y[0], e.width),
                    d = e.y + eb(y[1], e.height),
                    f = f || "left";
                  else {
                    var _ = fe(y, e, x);
                    c = _.x,
                      d = _.y,
                      f = f || _.textAlign,
                      p = p || _.textVerticalAlign
                  }
                }
                c = ce(c, n.width, f),
                  d = de(d, n.height, p),
                  d += n.height / 2;
                var w, b, M, S = Nw,
                  I = this._textVmlEl;
                I ? b = (w = (M = I.firstChild).nextSibling).nextSibling : (I = S("line"),
                  w = S("path"),
                  b = S("textpath"),
                  M = S("skew"),
                  b.style["v-text-align"] = "left",
                  Yw(I),
                  w.textpathok = !0,
                  b.on = !0,
                  I.from = "0 0",
                  I.to = "1000 0.05",
                  Qw(I, M),
                  Qw(I, w),
                  Qw(I, b),
                  this._textVmlEl = I);
                var T = [c, d],
                  A = I.style;
                m && i ? (j(T, T, m),
                    M.on = !0,
                    M.matrix = m[0].toFixed(3) + "," + m[2].toFixed(3) + "," + m[1].toFixed(3) + "," + m[3].toFixed(3) + ",0,0",
                    M.offset = (Gw(T[0]) || 0) + "," + (Gw(T[1]) || 0),
                    M.origin = "0 0",
                    A.left = "0px",
                    A.top = "0px") : (M.on = !1,
                    A.left = Gw(c) + "px",
                    A.top = Gw(d) + "px"),
                  b.string = $w(o);
                try {
                  b.style.font = v
                } catch (t) {}
                ab(I, "fill", {
                    fill: r.textFill,
                    opacity: r.opacity
                  }, this),
                  ab(I, "stroke", {
                    stroke: r.textStroke,
                    opacity: r.opacity,
                    lineDash: r.lineDash
                  }, this),
                  I.style.zIndex = tb(this.zlevel, this.z, this.z2),
                  Qw(t, I)
              }
            },
            yb.removeRectText = function (t) {
              Jw(t, this._textVmlEl),
                this._textVmlEl = null
            },
            yb.appendRectText = function (t) {
              Qw(t, this._textVmlEl)
            }
        }
        Tg.prototype.brushVML = function (t) {
            var e = this.style;
            null != e.text ? this.drawRectText(t, {
              x: e.x || 0,
              y: e.y || 0,
              width: 0,
              height: 0
            }, this.getBoundingRect(), !0) : this.removeRectText(t)
          },
          Tg.prototype.onRemove = function (t) {
            this.removeRectText(t)
          },
          Tg.prototype.onAdd = function (t) {
            this.appendRectText(t)
          }
      }
      Rc.prototype = {
          constructor: Rc,
          getType: function () {
            return "vml"
          },
          getViewportRoot: function () {
            return this._vmlViewport
          },
          getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t)
              return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
              }
          },
          refresh: function () {
            var t = this.storage.getDisplayList(!0, !0);
            this._paintList(t)
          },
          _paintList: function (t) {
            for (var e = this._vmlRoot, n = 0; n < t.length; n++) {
              var i = t[n];
              i.invisible || i.ignore ? (i.__alreadyNotVisible || i.onRemove(e),
                  i.__alreadyNotVisible = !0) : (i.__alreadyNotVisible && i.onAdd(e),
                  i.__alreadyNotVisible = !1,
                  i.__dirty && (i.beforeBrush && i.beforeBrush(),
                    (i.brushVML || i.brush).call(i, e),
                    i.afterBrush && i.afterBrush())),
                i.__dirty = !1
            }
            this._firstPaint && (this._vmlViewport.appendChild(e),
              this._firstPaint = !1)
          },
          resize: function (t, e) {
            var t = null == t ? this._getWidth() : t,
              e = null == e ? this._getHeight() : e;
            if (this._width != t || this._height != e) {
              this._width = t,
                this._height = e;
              var n = this._vmlViewport.style;
              n.width = t + "px",
                n.height = e + "px"
            }
          },
          dispose: function () {
            this.root.innerHTML = "",
              this._vmlRoot = this._vmlViewport = this.storage = null
          },
          getWidth: function () {
            return this._width
          },
          getHeight: function () {
            return this._height
          },
          clear: function () {
            this._vmlViewport && this.root.removeChild(this._vmlViewport)
          },
          _getWidth: function () {
            var t = this.root,
              e = t.currentStyle;
            return (t.clientWidth || Bc(e.width)) - Bc(e.paddingLeft) - Bc(e.paddingRight) | 0
          },
          _getHeight: function () {
            var t = this.root,
              e = t.currentStyle;
            return (t.clientHeight || Bc(e.height)) - Bc(e.paddingTop) - Bc(e.paddingBottom) | 0
          }
        },
        c(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
          Rc.prototype[t] = Vc(t)
        }),
        gn("vml", Rc);
      var xb = "http://www.w3.org/2000/svg",
        _b = Array.prototype.join,
        wb = "none",
        bb = Math.round,
        Mb = Math.sin,
        Sb = Math.cos,
        Ib = Math.PI,
        Tb = 2 * Math.PI,
        Ab = 180 / Ib,
        Cb = 1e-4,
        kb = {};
      kb.brush = function (t) {
        var e = t.style,
          n = t.__svgEl;
        n || (n = Wc("path"),
            t.__svgEl = n),
          t.path || t.createPathProxy();
        var i = t.path;
        t.__dirtyPath && (i.beginPath(),
            t.buildPath(i, t.shape),
            t.__dirtyPath = !1,
            Xc(n, "d", Yc(i))),
          qc(n, e),
          Uc(n, t.transform),
          null != e.text && Ob(t, t.getBoundingRect())
      };
      var Db = {};
      Db.brush = function (t) {
        var e = t.style,
          n = e.image;
        if (n instanceof HTMLImageElement && (n = n.src),
          n) {
          var i = e.x || 0,
            r = e.y || 0,
            o = e.width,
            a = e.height,
            s = t.__svgEl;
          s || (s = Wc("image"),
              t.__svgEl = s),
            n !== t.__imageSrc && (jc(s, "href", n),
              t.__imageSrc = n),
            Xc(s, "width", o),
            Xc(s, "height", a),
            Xc(s, "x", i),
            Xc(s, "y", r),
            Uc(s, t.transform),
            null != e.text && Ob(t, t.getBoundingRect())
        }
      };
      var Lb = {},
        Pb = new Ft,
        Ob = function (t, e, n) {
          var i = t.style;
          t.__dirty && Se(i);
          var r = i.text;
          if (null != r && (r += ""),
            r) {
            var o = t.__textSvgEl;
            if (o || (o = Wc("text"),
                t.__textSvgEl = o),
              qc(o, i, !0),
              t instanceof Tg || t.style.transformText)
              Uc(o, t.transform);
            else if (t.transform)
              Pb.copy(e),
              Pb.applyTransform(t.transform),
              e = Pb;
            else {
              var a = t.transformCoordToGlobal(e.x, e.y);
              e.x = a[0],
                e.y = a[1]
            }
            var s, l, h = i.textPosition,
              u = i.textDistance,
              c = i.textAlign || "left";
            "number" == typeof i.fontSize && (i.fontSize += "px");
            var d = i.font || [i.fontStyle || "", i.fontWeight || "", i.fontSize || "", i.fontFamily || ""].join(" ") || Ef,
              f = $c(i.textVerticalAlign),
              p = (n = le(r, d, c, f)).lineHeight;
            if (h instanceof Array)
              s = e.x + h[0],
              l = e.y + h[1];
            else {
              var g = fe(h, e, u);
              s = g.x,
                l = g.y,
                f = $c(g.textVerticalAlign),
                c = g.textAlign
            }
            Xc(o, "alignment-baseline", f),
              d && (o.style.font = d);
            var v = i.textPadding;
            Xc(o, "x", s),
              Xc(o, "y", l);
            var m = r.split("\n"),
              y = m.length,
              x = c;
            "left" === x ? (x = "start",
              v && (s += v[3])) : "right" === x ? (x = "end",
              v && (s -= v[1])) : "center" === x && (x = "middle",
              v && (s += (v[3] - v[1]) / 2));
            var _ = 0;
            if ("baseline" === f ? (_ = -n.height + p,
                v && (_ -= v[2])) : "middle" === f ? (_ = (-n.height + p) / 2,
                v && (l += (v[0] - v[2]) / 2)) : v && (_ += v[0]),
              t.__text !== r || t.__textFont !== d) {
              var w = t.__tspanList || [];
              t.__tspanList = w;
              for (M = 0; M < y; M++)
                (S = w[M]) ? S.innerHTML = "" : (S = w[M] = Wc("tspan"),
                  o.appendChild(S),
                  Xc(S, "alignment-baseline", f),
                  Xc(S, "text-anchor", x)),
                Xc(S, "x", s),
                Xc(S, "y", l + M * p + _),
                S.appendChild(document.createTextNode(m[M]));
              for (; M < w.length; M++)
                o.removeChild(w[M]);
              w.length = y,
                t.__text = r,
                t.__textFont = d
            } else if (t.__tspanList.length)
              for (var b = t.__tspanList.length, M = 0; M < b; ++M) {
                var S = t.__tspanList[M];
                S && (Xc(S, "x", s),
                  Xc(S, "y", l + M * p + _))
              }
          }
        };
      Lb.drawRectText = Ob,
        Lb.brush = function (t) {
          var e = t.style;
          null != e.text && (e.textPosition = [0, 0],
            Ob(t, {
              x: e.x || 0,
              y: e.y || 0,
              width: 0,
              height: 0
            }, t.getBoundingRect()))
        },
        Kc.prototype = {
          diff: function (t, e, n) {
            n || (n = function (t, e) {
                return t === e
              }),
              this.equals = n;
            var i = this;
            t = t.slice();
            var r = (e = e.slice()).length,
              o = t.length,
              a = 1,
              s = r + o,
              l = [{
                newPos: -1,
                components: []
              }],
              h = this.extractCommon(l[0], e, t, 0);
            if (l[0].newPos + 1 >= r && h + 1 >= o) {
              for (var u = [], c = 0; c < e.length; c++)
                u.push(c);
              return [{
                indices: u,
                count: e.length
              }]
            }
            for (; a <= s;) {
              var d = function () {
                for (var n = -1 * a; n <= a; n += 2) {
                  var s, h = l[n - 1],
                    u = l[n + 1],
                    c = (u ? u.newPos : 0) - n;
                  h && (l[n - 1] = void 0);
                  var d = h && h.newPos + 1 < r,
                    f = u && 0 <= c && c < o;
                  if (d || f) {
                    if (!d || f && h.newPos < u.newPos ? (s = Jc(u),
                        i.pushComponent(s.components, void 0, !0)) : ((s = h).newPos++,
                        i.pushComponent(s.components, !0, void 0)),
                      c = i.extractCommon(s, e, t, n),
                      s.newPos + 1 >= r && c + 1 >= o)
                      return Qc(0, s.components);
                    l[n] = s
                  } else
                    l[n] = void 0
                }
                a++
              }();
              if (d)
                return d
            }
          },
          pushComponent: function (t, e, n) {
            var i = t[t.length - 1];
            i && i.added === e && i.removed === n ? t[t.length - 1] = {
              count: i.count + 1,
              added: e,
              removed: n
            } : t.push({
              count: 1,
              added: e,
              removed: n
            })
          },
          extractCommon: function (t, e, n, i) {
            for (var r = e.length, o = n.length, a = t.newPos, s = a - i, l = 0; a + 1 < r && s + 1 < o && this.equals(e[a + 1], n[s + 1]);)
              a++,
              s++,
              l++;
            return l && t.components.push({
                count: l
              }),
              t.newPos = a,
              s
          },
          tokenize: function (t) {
            return t.slice()
          },
          join: function (t) {
            return t.slice()
          }
        };
      var zb = new Kc,
        Eb = function (t, e, n) {
          return zb.diff(t, e, n)
        };
      td.prototype.createElement = Wc,
        td.prototype.getDefs = function (t) {
          var e = this._svgRoot,
            n = this._svgRoot.getElementsByTagName("defs");
          return 0 === n.length ? t ? ((n = e.insertBefore(this.createElement("defs"), e.firstChild)).contains || (n.contains = function (t) {
              var e = n.children;
              if (!e)
                return !1;
              for (var i = e.length - 1; i >= 0; --i)
                if (e[i] === t)
                  return !0;
              return !1
            }),
            n) : null : n[0]
        },
        td.prototype.update = function (t, e) {
          if (t) {
            var n = this.getDefs(!1);
            if (t._dom && n.contains(t._dom))
              "function" == typeof e && e();
            else {
              var i = this.add(t);
              i && (t._dom = i)
            }
          }
        },
        td.prototype.addDom = function (t) {
          this.getDefs(!0).appendChild(t)
        },
        td.prototype.removeDom = function (t) {
          this.getDefs(!1).removeChild(t._dom)
        },
        td.prototype.getDoms = function () {
          var t = this.getDefs(!1);
          if (!t)
            return [];
          var e = [];
          return c(this._tagNames, function (n) {
              var i = t.getElementsByTagName(n);
              e = e.concat([].slice.call(i))
            }),
            e
        },
        td.prototype.markAllUnused = function () {
          var t = this;
          c(this.getDoms(), function (e) {
            e[t._markLabel] = "0"
          })
        },
        td.prototype.markUsed = function (t) {
          t && (t[this._markLabel] = "1")
        },
        td.prototype.removeUnused = function () {
          var t = this.getDefs(!1);
          if (t) {
            var e = this;
            c(this.getDoms(), function (n) {
              "1" !== n[e._markLabel] && t.removeChild(n)
            })
          }
        },
        td.prototype.getSvgProxy = function (t) {
          return t instanceof Ti ? kb : t instanceof Fe ? Db : t instanceof Tg ? Lb : kb
        },
        td.prototype.getTextSvgElement = function (t) {
          return t.__textSvgEl
        },
        td.prototype.getSvgElement = function (t) {
          return t.__svgEl
        },
        l(ed, td),
        ed.prototype.addWithoutUpdate = function (t, e) {
          if (e && e.style) {
            var n = this;
            c(["fill", "stroke"], function (i) {
              if (e.style[i] && ("linear" === e.style[i].type || "radial" === e.style[i].type)) {
                var r, o = e.style[i],
                  a = n.getDefs(!0);
                o._dom ? (r = o._dom,
                    a.contains(o._dom) || n.addDom(r)) : r = n.add(o),
                  n.markUsed(e);
                var s = r.getAttribute("id");
                t.setAttribute(i, "url(#" + s + ")")
              }
            })
          }
        },
        ed.prototype.add = function (t) {
          var e;
          if ("linear" === t.type)
            e = this.createElement("linearGradient");
          else {
            if ("radial" !== t.type)
              return df("Illegal gradient type."),
                null;
            e = this.createElement("radialGradient")
          }
          return t.id = t.id || this.nextId++,
            e.setAttribute("id", "zr-gradient-" + t.id),
            this.updateDom(t, e),
            this.addDom(e),
            e
        },
        ed.prototype.update = function (t) {
          var e = this;
          td.prototype.update.call(this, t, function () {
            var n = t.type,
              i = t._dom.tagName;
            "linear" === n && "linearGradient" === i || "radial" === n && "radialGradient" === i ? e.updateDom(t, t._dom) : (e.removeDom(t),
              e.add(t))
          })
        },
        ed.prototype.updateDom = function (t, e) {
          if ("linear" === t.type)
            e.setAttribute("x1", t.x),
            e.setAttribute("y1", t.y),
            e.setAttribute("x2", t.x2),
            e.setAttribute("y2", t.y2);
          else {
            if ("radial" !== t.type)
              return void df("Illegal gradient type.");
            e.setAttribute("cx", t.x),
              e.setAttribute("cy", t.y),
              e.setAttribute("r", t.r)
          }
          t.global ? e.setAttribute("gradientUnits", "userSpaceOnUse") : e.setAttribute("gradientUnits", "objectBoundingBox"),
            e.innerHTML = "";
          for (var n = t.colorStops, i = 0, r = n.length; i < r; ++i) {
            var o = this.createElement("stop");
            o.setAttribute("offset", 100 * n[i].offset + "%"),
              o.setAttribute("stop-color", n[i].color),
              e.appendChild(o)
          }
          t._dom = e
        },
        ed.prototype.markUsed = function (t) {
          if (t.style) {
            var e = t.style.fill;
            e && e._dom && td.prototype.markUsed.call(this, e._dom),
              (e = t.style.stroke) && e._dom && td.prototype.markUsed.call(this, e._dom)
          }
        },
        l(nd, td),
        nd.prototype.update = function (t, e) {
          this.updateDom(e, t.__clipPaths, !1);
          var n = this.getTextSvgElement(t);
          n && this.updateDom(n, t.__clipPaths, !0),
            this.markUsed(t)
        },
        nd.prototype.updateDom = function (t, e, n) {
          if (e && e.length > 0) {
            var i, r, o = this.getDefs(!0),
              a = e[0],
              s = n ? "_textDom" : "_dom";
            a[s] ? (r = a[s].getAttribute("id"),
              i = a[s],
              o.contains(i) || o.appendChild(i)) : (r = "zr-clip-" + this.nextId,
              ++this.nextId,
              (i = this.createElement("clipPath")).setAttribute("id", r),
              o.appendChild(i),
              a[s] = i);
            var l = this.getSvgProxy(a);
            if (a.transform && a.parent.invTransform && !n) {
              var h = Array.prototype.slice.call(a.transform);
              rt(a.transform, a.parent.invTransform, a.transform),
                l.brush(a),
                a.transform = h
            } else
              l.brush(a);
            var u = this.getSvgElement(a);
            i.appendChild(u),
              t.setAttribute("clip-path", "url(#" + r + ")"),
              e.length > 1 && this.updateDom(i, e.slice(1), n)
          } else
            t && t.setAttribute("clip-path", "none")
        },
        nd.prototype.markUsed = function (t) {
          var e = this;
          t.__clipPaths && t.__clipPaths.length > 0 && c(t.__clipPaths, function (t) {
            t._dom && td.prototype.markUsed.call(e, t._dom),
              t._textDom && td.prototype.markUsed.call(e, t._textDom)
          })
        };
      var Nb = function (t, e) {
        this.root = t,
          this.storage = e;
        var n = Wc("svg");
        n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
          n.setAttribute("version", "1.1"),
          n.setAttribute("baseProfile", "full"),
          n.style["user-select"] = "none",
          this.gradientManager = new ed(n),
          this.clipPathManager = new nd(n);
        var i = document.createElement("div");
        i.style.cssText = "overflow: hidden;",
          this._svgRoot = n,
          this._viewport = i,
          t.appendChild(i),
          i.appendChild(n),
          this.resize(),
          this._visibleList = []
      };
      Nb.prototype = {
          constructor: Nb,
          getType: function () {
            return "svg"
          },
          getViewportRoot: function () {
            return this._viewport
          },
          getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t)
              return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
              }
          },
          refresh: function () {
            var t = this.storage.getDisplayList(!0);
            this._paintList(t)
          },
          _paintList: function (t) {
            this.gradientManager.markAllUnused(),
              this.clipPathManager.markAllUnused();
            var e, n = this._svgRoot,
              i = this._visibleList,
              r = t.length,
              o = [];
            for (e = 0; e < r; e++) {
              var a = rd(p = t[e]);
              if (!p.invisible) {
                if (p.__dirty) {
                  a && a.brush(p);
                  var s = ud(p) || hd(p);
                  this.clipPathManager.update(p, s),
                    p.style && (this.gradientManager.update(p.style.fill),
                      this.gradientManager.update(p.style.stroke)),
                    p.__dirty = !1
                }
                o.push(p)
              }
            }
            var l, h = Eb(i, o);
            for (e = 0; e < h.length; e++)
              if ((d = h[e]).removed)
                for (f = 0; f < d.count; f++) {
                  var u = ud(p = i[d.indices[f]]),
                    c = hd(p);
                  ld(n, u),
                    ld(n, c)
                }
            for (e = 0; e < h.length; e++) {
              var d = h[e];
              if (d.added)
                for (f = 0; f < d.count; f++) {
                  var u = ud(p = o[d.indices[f]]),
                    c = hd(p);
                  l ? ad(n, u, l) : sd(n, u),
                    u ? ad(n, c, u) : l ? ad(n, c, l) : sd(n, c),
                    ad(n, c, u),
                    l = c || u || l,
                    this.gradientManager.addWithoutUpdate(u, p),
                    this.clipPathManager.markUsed(p)
                }
              else if (!d.removed)
                for (var f = 0; f < d.count; f++) {
                  var p = o[d.indices[f]];
                  l = u = hd(p) || ud(p) || l,
                    this.gradientManager.markUsed(p),
                    this.gradientManager.addWithoutUpdate(u, p),
                    this.clipPathManager.markUsed(p)
                }
            }
            this.gradientManager.removeUnused(),
              this.clipPathManager.removeUnused(),
              this._visibleList = o
          },
          _getDefs: function (t) {
            var e = this._svgRoot,
              n = this._svgRoot.getElementsByTagName("defs");
            return 0 === n.length ? t ? ((n = e.insertBefore(Wc("defs"), e.firstChild)).contains || (n.contains = function (t) {
                var e = n.children;
                if (!e)
                  return !1;
                for (var i = e.length - 1; i >= 0; --i)
                  if (e[i] === t)
                    return !0;
                return !1
              }),
              n) : null : n[0]
          },
          resize: function () {
            var t = this._getWidth(),
              e = this._getHeight();
            if (this._width !== t && this._height !== e) {
              this._width = t,
                this._height = e;
              var n = this._viewport.style;
              n.width = t + "px",
                n.height = e + "px";
              var i = this._svgRoot;
              i.setAttribute("width", t),
                i.setAttribute("height", e)
            }
          },
          getWidth: function () {
            return this._getWidth()
          },
          getHeight: function () {
            return this._getHeight()
          },
          _getWidth: function () {
            var t = this.root,
              e = document.defaultView.getComputedStyle(t);
            return (t.clientWidth || id(e.width)) - id(e.paddingLeft) - id(e.paddingRight) | 0
          },
          _getHeight: function () {
            var t = this.root,
              e = document.defaultView.getComputedStyle(t);
            return (t.clientHeight || id(e.height)) - id(e.paddingTop) - id(e.paddingBottom) | 0
          },
          dispose: function () {
            this.root.innerHTML = "",
              this._svgRoot = this._viewport = this.storage = null
          },
          clear: function () {
            this._viewport && this.root.removeChild(this._viewport)
          },
          pathToSvg: function () {
            this.refresh();
            var t = this._svgRoot.outerHTML;
            return "data:img/svg+xml;utf-8," + unescape(t)
          }
        },
        c(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
          Nb.prototype[t] = cd(t)
        }),
        gn("svg", Nb),
        t.version = Kv,
        t.dependencies = Qv,
        t.PRIORITY = nm,
        t.init = function (t, e, n) {
          var i = Ho(t);
          if (i)
            return i;
          var r = new Mo(t, e, n);
          return r.id = "ec_" + xm++,
            mm[r.id] = r,
            t.setAttribute ? t.setAttribute(wm, r.id) : t[wm] = r.id,
            Wo(r),
            r
        },
        t.connect = function (t) {
          if (m(t)) {
            var e = t;
            t = null,
              c(e, function (e) {
                null != e.group && (t = e.group)
              }),
              t = t || "g_" + _m++,
              c(e, function (e) {
                e.group = t
              })
          }
          return ym[t] = !0,
            t
        },
        t.disConnect = Go,
        t.disconnect = bm,
        t.dispose = function (t) {
          "string" == typeof t ? t = mm[t] : t instanceof Mo || (t = Ho(t)),
            t instanceof Mo && !t.isDisposed() && t.dispose()
        },
        t.getInstanceByDom = Ho,
        t.getInstanceById = function (t) {
          return mm[t]
        },
        t.registerTheme = function (t, e) {
          gm[t] = e
        },
        t.registerPreprocessor = Fo,
        t.registerProcessor = Zo,
        t.registerPostUpdate = function (t) {
          fm.push(t)
        },
        t.registerAction = Uo,
        t.registerCoordinateSystem = function (t, e) {
          Qr.register(t, e)
        },
        t.getCoordinateSystemDimensions = function (t) {
          var e = Qr.get(t);
          if (e)
            return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
        },
        t.registerLayout = Xo,
        t.registerVisual = jo,
        t.registerLoading = qo,
        t.extendComponentModel = Yo,
        t.extendComponentView = $o,
        t.extendSeriesModel = Ko,
        t.extendChartView = Qo,
        t.setCanvasCreator = function (t) {
          Cd.createCanvas(t)
        },
        t.$inject = Mm,
        t.zrender = lp,
        t.graphic = Yg,
        t.number = cp,
        t.format = yp,
        t.throttle = yo,
        t.helper = dy,
        t.matrix = Hd,
        t.vector = Ed,
        t.color = af,
        t.util = vy,
        t.List = Cm,
        t.Model = _r,
        t.Axis = gy,
        t.env = vd
    });
