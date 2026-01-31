!(function (r, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(
          ((r =
            "undefined" != typeof globalThis
              ? globalThis
              : r || self).PowiainaNum = {}),
        );
})(this, function (r) {
  "use strict";
  function e(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var t = 0, a = Array(e); t < e; t++) a[t] = r[t];
    return a;
  }
  function t(r, e) {
    for (var t = 0; t < e.length; t++) {
      var a = e[t];
      ((a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(r, i(a.key), a));
    }
  }
  function a(r, e) {
    return (
      (function (r) {
        if (Array.isArray(r)) return r;
      })(r) ||
      (function (r, e) {
        var t =
          null == r
            ? null
            : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
              r["@@iterator"];
        if (null != t) {
          var a,
            n,
            i,
            o,
            u = [],
            s = !0,
            l = !1;
          try {
            if (((i = (t = t.call(r)).next), 0 === e)) {
              if (Object(t) !== t) return;
              s = !1;
            } else
              for (
                ;
                !(s = (a = i.call(t)).done) &&
                (u.push(a.value), u.length !== e);
                s = !0
              );
          } catch (r) {
            ((l = !0), (n = r));
          } finally {
            try {
              if (!s && null != t.return && ((o = t.return()), Object(o) !== o))
                return;
            } finally {
              if (l) throw n;
            }
          }
          return u;
        }
      })(r, e) ||
      u(r, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function n(r) {
    return (
      (function (r) {
        if (Array.isArray(r)) return e(r);
      })(r) ||
      (function (r) {
        if (
          ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
          null != r["@@iterator"]
        )
          return Array.from(r);
      })(r) ||
      u(r) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function i(r) {
    var e = (function (r, e) {
      if ("object" != typeof r || !r) return r;
      var t = r[Symbol.toPrimitive];
      if (void 0 !== t) {
        var a = t.call(r, e || "default");
        if ("object" != typeof a) return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(r);
    })(r, "string");
    return "symbol" == typeof e ? e : e + "";
  }
  function o(r) {
    return (o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              "function" == typeof Symbol &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          })(r);
  }
  function u(r, t) {
    if (r) {
      if ("string" == typeof r) return e(r, t);
      var a = {}.toString.call(r).slice(8, -1);
      return (
        "Object" === a && r.constructor && (a = r.constructor.name),
        "Map" === a || "Set" === a
          ? Array.from(r)
          : "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            ? e(r, t)
            : void 0
      );
    }
  }
  var s = 9007199254740991,
    l = 15.954589770191003,
    f = 11102230246251568e-32,
    h = 1.444667861009766,
    g =
      /^(PN)?[\/\-\+]*(Infinity|NaN|(P+|P\^\d+ )?(10(\^+|\{([1-9]\d*|!)(,([1-9]\d*|!))?(,[1-9]\d*)?\})|\(10(\^+|\{([1-9]\d*|!)(,([1-9]\d*|!))?(,[1-9]\d*)?\})\)\^[1-9]\d*\x20*)*((\d+(\.\d*)?|\d*\.\d+)?([Ee][-\+]*))*(0|\d+(\.\d*)?|\d*\.\d+))$/,
    c = /^((\d+(\.\d*)?|\d*\.\d+)?([EeFf]([-\+]?)))*(0|\d+(\.\d*)?|\d*\.\d+)$/;
  function p(r) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    return {
      repeat: r,
      arrow: e,
      expans: t,
      megota: a,
      valuereplaced: e == 1 / 0 ? 0 : t == 1 / 0 ? 1 : -1,
    };
  }
  function y() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    for (var a = 0; a < Math.min(e[0].length, e[1].length); a++) {
      var n = e[0][a],
        i = e[1][a];
      if (n < i) return -1;
      if (n > i) return 1;
    }
    return 0;
  }
  function v(r) {
    return Math.log10(Number(r.substring(0, 17))) + (r.length - 17);
  }
  var N = 0.5671432904097838;
  function m(r) {
    var e,
      t,
      a =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-10,
      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      i = a,
      o = n;
    if (!Number.isFinite(r)) return r;
    if (o) {
      if (0 === r) return r;
      if (1 === r) return N;
      e = r < 10 ? 0 : Math.log(r) - Math.log(Math.log(r));
    } else {
      if (0 === r) return -1 / 0;
      e = r <= -0.1 ? -2 : Math.log(-r) - Math.log(-Math.log(-r));
    }
    for (var u = 0; u < 100; ++u) {
      if (
        ((t = (r * Math.exp(-e) + e * e) / (e + 1)),
        Math.abs(t - e) < i * Math.abs(t))
      )
        return t;
      e = t;
    }
    throw Error("Iteration failed to converge: ".concat(r.toString()));
  }
  function w(r) {
    return 2 == r.length;
  }
  function b(r) {
    return "number" == typeof r[0] && "number" == typeof r[1];
  }
  function d(r) {
    return "x" === r ? 1 / 0 : r;
  }
  function O(r) {
    return 4 == r.length;
  }
  function E(r) {
    return (
      "number" == typeof r[0] &&
      "number" == typeof r[1] &&
      "number" == typeof r[2] &&
      "number" == typeof r[3]
    );
  }
  function I(r) {
    return (
      "x" === r[0] &&
      "number" == typeof r[1] &&
      "number" == typeof r[2] &&
      "number" == typeof r[3]
    );
  }
  function k(r) {
    return (
      "number" == typeof r[0] &&
      "number" == typeof r[1] &&
      "x" == r[2] &&
      "number" == typeof r[3]
    );
  }
  function x(r) {
    var e,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e10,
      a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!(r = new A(r)).isFinite()) return r;
    if (a) {
      if (r.eq(A.ZERO)) return r;
      if (r.eq(A.ONE)) return new A(N);
      e = A.log(r);
    } else {
      if (r.eq(A.ZERO)) return A.NEGATIVE_INFINITY;
      e = A.log(r.neg());
    }
    for (var n = 0; n < 100; ++n) {
      var i = e.neg().exp(),
        o = e.sub(r.mul(i)),
        u = e.add(A.ONE).sub(e.add(2).mul(o).div(A.mul(2, e).add(2)));
      if (u.eq(A.ZERO)) return e;
      var s = e.sub(o.div(u));
      if (A.abs(s.sub(e)).lt(A.abs(s).mul(t))) return s;
      e = s;
    }
    throw Error("Iteration failed to converge: " + r);
  }
  function M(r, e) {
    return y([r.megota, r.expans, r.arrow], [e.megota, e.expans, e.arrow]);
  }
  function q(r) {
    for (var e = 1; e < r.array.length - 1; ++e) {
      var t = r.array[e],
        a = r.array[e + 1];
      t.arrow == a.arrow &&
        t.expans == a.expans &&
        t.megota == a.megota &&
        ((t.repeat += a.repeat), r.array.splice(e + 1, 1), --e);
    }
  }
  function S(r, e, t) {
    var a = new A(r),
      n = new A(e),
      i = new A(t),
      o = (function (r, e, t) {
        return new A(r)
          .pow(new A(t).sub(e).add(1))
          .mul(new A(2).pow(new A(e).sub(t)));
      })(a, n, new A(i).omegalog(a.toNumber()));
    if (i.gt(a)) {
      var u = S(a, n.add(1), i).sub(2),
        s = S(a, n, a),
        l = a;
      return _(a, n, u.pow_base(l.div(s)).mul(s));
    }
    return o;
  }
  function _(r, e, t) {
    var a = new A(r),
      n = new A(e),
      i = new A(t);
    if (n.isInt()) return A.arrow(a, n, i);
    if (i.gt(a)) {
      var o = S(a, n, i),
        u = S(a, n, a),
        s = a,
        l = o.div(u).logBase(s.div(u));
      return _(a, n.add(1), A.add(2, l));
    }
    return A.arrFrac(
      a,
      (function (r, e, t) {
        var a = new A(2).logBase(r);
        return new A(e)
          .sub(1)
          .add(new A(t).logBase(r).sub(a).div(new A(1).sub(a)));
      })(a, n, i),
    );
  }
  function R(r) {
    for (var e = BigInt(64); r >= BigInt(1) << e; ) e *= BigInt(2);
    for (var t = e / BigInt(2); t > BigInt(0); )
      (r >= BigInt(1) << e ? (e += t) : (e -= t), (t /= BigInt(2)));
    var a = e - BigInt(54),
      n = r >> a;
    return Math.log10(Number(n)) + (Math.LOG10E / Math.LOG2E) * Number(a);
  }
  var F,
    T = {
      ZERO: [{ arrow: 0, expans: 1, megota: 1, repeat: 1 / 0 }],
      NaN: [{ arrow: 0, expans: 1, megota: 1, repeat: NaN }],
    },
    A = (function () {
      function r(e) {
        if (
          ((function (r, e) {
            if (!(r instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
          (this.array = T.NaN),
          (this.small = !1),
          (this.sign = 0),
          (this.layer = 0),
          r.blankArgumentConstructorReturnZero &&
            ((this.array = T.ZERO), (this.small = !0)),
          void 0 !== e)
        )
          try {
            if (void 0 === e);
            else if ("number" == typeof e) {
              var t = r.fromNumber(e);
              this.resetFromObject(t);
            } else if ("string" == typeof e) {
              var a = r.fromString(e);
              this.resetFromObject(a);
            } else if ("object" == o(e)) {
              var n = r.fromObject(e);
              this.resetFromObject(n);
            } else if ("bigint" == typeof e) {
              var i = r.fromBigInt(e);
              this.resetFromObject(i);
            } else;
          } catch (e) {
            if (
              (console.error("Malformed input"),
              console.error(e),
              r.throwErrorOnResultNaN && r.isNaN(this))
            )
              throw new Error("NaN");
          }
      }
      return (function (r, e, a) {
        return (
          e && t(r.prototype, e),
          a && t(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(
        r,
        [
          {
            key: "add",
            value: function (e) {
              var t,
                a,
                n,
                i,
                o,
                u,
                h = this.normalize(),
                g = new r(e);
              if (
                (h.eq(r.POSITIVE_INFINITY) && g.eq(r.NEGATIVE_INFINITY)) ||
                (h.eq(r.NEGATIVE_INFINITY) && g.eq(r.POSITIVE_INFINITY))
              ) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (!h.isFinite()) return h;
              if (!g.isFinite()) return g;
              if (h.isZero()) return g;
              if (g.isZero()) return h;
              if (
                h.sign == -g.sign &&
                (function () {
                  var r = h.abs(),
                    e = g.abs();
                  return r.eq(e);
                })()
              )
                return r.ZERO;
              if (
                h.abs().lt(s) &&
                g.abs().lt(s) &&
                h.abs().gte(f) &&
                g.abs().gte(f)
              )
                return r.fromNumber(h.toNumber() + g.toNumber());
              if (
                h.abs().lt(r.E_MSI_REC) ||
                h.abs().gt(r.E_MSI) ||
                g.abs().lt(r.E_MSI_REC) ||
                g.abs().gt(r.E_MSI)
              ) {
                var c = h.maxabs(g);
                return h.abs().eq(c) ? h : (g.abs().eq(c), g);
              }
              if (-1 == h.sign) return h.neg().add(g.neg()).neg();
              h.cmpabs(g) > 0 ? ((o = h), (u = g)) : ((u = h), (o = g));
              var y = o.toNumber() + u.toNumber();
              if (isFinite(y) && 0 !== y) return r.fromNumber(y);
              var v = 1;
              if (
                !(
                  o.small ||
                  u.small ||
                  (null === (t = o.array[1]) || void 0 === t
                    ? void 0
                    : t.repeat) ||
                  (null === (a = u.array[1]) || void 0 === a
                    ? void 0
                    : a.repeat) ||
                  o.sign != u.sign
                )
              )
                return new r((o.array[0].repeat + u.array[0].repeat) * o.sign);
              var N =
                  (o.small ? -1 : 1) *
                  ((
                    null === (n = o.array[1]) || void 0 === n
                      ? void 0
                      : n.repeat
                  )
                    ? o.array[0].repeat
                    : Math.log10(o.array[0].repeat)),
                m =
                  (u.small ? -1 : 1) *
                  ((
                    null === (i = u.array[1]) || void 0 === i
                      ? void 0
                      : i.repeat
                  )
                    ? u.array[0].repeat
                    : Math.log10(u.array[0].repeat));
              if (N - m > l) return o;
              var w = -Math.floor(N),
                b = 0,
                d = o.sign * Math.pow(10, N + w) + u.sign * Math.pow(10, m + w);
              if (
                (d > 0 && (b = Math.log10(d) - w),
                d < 0 && ((b = Math.log10(-d) - w), (v *= -1)),
                0 == d)
              )
                return r.ZERO;
              var O = r.NaN;
              return (
                (O.sign = 1),
                (O.array =
                  b > l || b < -l
                    ? [p(b, 0), p(1, 1)]
                    : [p(Math.pow(10, Math.abs(b)), 0)]),
                (O.small = b < 0),
                (O.sign *= v),
                O
              );
            },
          },
          {
            key: "plus",
            value: function (r) {
              return this.add(r);
            },
          },
          {
            key: "sub",
            value: function (e) {
              return this.add(new r(e).neg());
            },
          },
          {
            key: "minus",
            value: function (r) {
              return this.sub(r);
            },
          },
          {
            key: "mul",
            value: function (e) {
              var t = this,
                a = new r(e);
              if (
                (t.eq(r.POSITIVE_INFINITY) && a.eq(r.NEGATIVE_INFINITY)) ||
                (a.eq(r.POSITIVE_INFINITY) && t.eq(r.NEGATIVE_INFINITY))
              )
                return r.NEGATIVE_INFINITY;
              if (
                (t.isInfiNaN() && a.isZero()) ||
                (a.isInfiNaN() && t.isZero())
              ) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (t.eq(r.NEGATIVE_INFINITY) && a.eq(r.NEGATIVE_INFINITY))
                return r.POSITIVE_INFINITY;
              if (!t.isFinite()) return t;
              if (!a.isFinite()) return a;
              if (t.isZero() || a.isZero()) return r.ZERO;
              var n,
                i = t.toNumber() * a.toNumber();
              return isFinite(i) && 0 !== i
                ? r.fromNumber(i)
                : (((n = t.abs().log10().add(a.abs().log10()).pow10()).sign =
                    t.sign * a.sign),
                  n);
            },
          },
          {
            key: "times",
            value: function (r) {
              return this.mul(r);
            },
          },
          {
            key: "div",
            value: function (e) {
              var t = new r(e).rec();
              return this.mul(t);
            },
          },
          {
            key: "divide",
            value: function (r) {
              return this.div(r);
            },
          },
          {
            key: "mod",
            value: function (e) {
              var t = new r(e),
                a = this.div(t);
              return a.sub(a.floor()).mul(t);
            },
          },
          {
            key: "modulus",
            value: function (r) {
              return this.mod(r);
            },
          },
          {
            key: "pow10",
            value: function () {
              var e,
                t,
                a = this.clone();
              return this.isFinite()
                ? a.isneg()
                  ? ((a.sign *= -1), a.pow10().rec())
                  : a.lt(308.25471555991675)
                    ? r.fromNumber(Math.pow(10, a.toNumber()))
                    : a.small
                      ? a.lt(r.MSI_REC)
                        ? r.ONE
                        : new r(Math.pow(10, Math.pow(a.array[0].repeat, -1)))
                      : (a.gt(r.TETRATED_MSI) ||
                          (a.setOperator(
                            (null !==
                              (t =
                                null === (e = a.array[1]) || void 0 === e
                                  ? void 0
                                  : e.repeat) && void 0 !== t
                              ? t
                              : 0) + 1,
                            1,
                          ),
                          a.normalize()),
                        a)
                : this;
            },
          },
          {
            key: "pow",
            value: function (e) {
              var t = new r(e);
              if (this.eq(1)) return r.ONE;
              if (!t.isFinite()) return t;
              if (!this.isFinite()) return this;
              if (this.eq(10)) return t.pow10();
              if (t.isneg()) return this.pow(t.neg()).rec();
              if (this.isneg()) {
                if (!t.isInt()) {
                  if (t.small && t.rec().div(2).eq(1))
                    return this.neg().pow(t).neg();
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                }
                var a = this.abs().pow(t);
                return (
                  (a.sign = (function () {
                    var r = t.mod(2).round();
                    return r.eq(0) || r.eq(2) ? 1 : -1;
                  })()),
                  a
                );
              }
              var n = this.toNumber(),
                i = t.toNumber(),
                o = Math.pow(n, i);
              if (isFinite(o) && 0 !== o) return r.fromNumber(o);
              if (this.isZero() && t.isZero()) return r.ONE;
              if (this.isZero()) return r.ZERO;
              if (t.isZero()) return r.ONE;
              if (this.gt(0)) return this.log10().mul(t).pow10();
              if (t.rec().mod(2).eq(1))
                return this.neg().log10().mul(t).pow10().neg();
              if (r.throwErrorOnResultNaN) throw new Error("NaN");
              return r.NaN;
            },
          },
          {
            key: "pow_base",
            value: function (e) {
              return new r(e).pow(this);
            },
          },
          {
            key: "root",
            value: function (e) {
              var t = new r(e);
              return this.pow(t.rec());
            },
          },
          {
            key: "sqrt",
            value: function () {
              return this.pow(0.5);
            },
          },
          {
            key: "cbrt",
            value: function () {
              return this.abs().root(3).mul(this.sign);
            },
          },
          {
            key: "log10",
            value: function () {
              if (this.isneg()) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (this.isZero()) return r.NEGATIVE_INFINITY;
              if (this.small) {
                var e = this.clone();
                return ((e.small = !e.small), e.log10().neg());
              }
              if (1 == this.array.length)
                return new r(Math.log10(this.array[0].repeat));
              if (this.gte(r.TETRATED_MSI)) return this;
              var t = this.clone();
              return (
                (t.array[1].repeat = t.array[1].repeat - 1),
                t.normalize(),
                t
              );
            },
          },
          {
            key: "log",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Math.E,
                t = new r(e);
              return this.log10().div(t.log10());
            },
          },
          {
            key: "log2",
            value: function () {
              return this.log(2);
            },
          },
          {
            key: "logBase",
            value: function (r) {
              return this.log(r);
            },
          },
          {
            key: "ln",
            value: function () {
              return this.log();
            },
          },
          {
            key: "pLog10",
            value: function () {
              return this.isneg() ? r.ZERO : this.log10();
            },
          },
          {
            key: "exp",
            value: function () {
              return this.pow_base(Math.E);
            },
          },
          {
            key: "factorial",
            value: function () {
              return this.abs().lt(s)
                ? this.add(1).gamma()
                : this.abs().lt(r.E_MSI)
                  ? r.exp(this.mul(this.log10().sub(1)))
                  : r.exp(this);
            },
          },
          {
            key: "gamma",
            value: function () {
              if (this.small) return this.rec();
              if (this.lte(s)) {
                if (this.lt(24))
                  return r.fromNumber(
                    (function (r) {
                      if (!isFinite(r)) return r;
                      if (r < -50)
                        return r === Math.trunc(r)
                          ? Number.NEGATIVE_INFINITY
                          : 0;
                      for (var e = 1; r < 10; ) ((e *= r), ++r);
                      var t = 0.9189385332046727;
                      ((t += ((r -= 1) + 0.5) * Math.log(r)), (t -= r));
                      var a = r * r,
                        n = r;
                      return (
                        (t += 1 / (12 * n)),
                        (t -= 1 / (360 * (n *= a))),
                        (t += 1 / (1260 * (n *= a))),
                        (t -= 1 / (1680 * (n *= a))),
                        (t += 1 / (1188 * (n *= a))),
                        (t -= 691 / (360360 * (n *= a))),
                        (t += 7 / (1092 * (n *= a))),
                        (t -= 3617 / (122400 * (n *= a))),
                        Math.exp(t) / e
                      );
                    })(this.sign * this.array[0].repeat),
                  );
                var e = this.array[0].repeat - 1,
                  t = 0.9189385332046727;
                t += (e + 0.5) * Math.log(e);
                var a = e * e,
                  n = e,
                  i = 12 * n,
                  o = 1 / i,
                  u = (t -= e) + o;
                if (u === t) return r.exp(t);
                if ((u = (t = u) - (o = 1 / (i = 360 * (n *= a)))) === t)
                  return r.exp(t);
                t = u;
                var l = 1 / (i = 1260 * (n *= a));
                return (
                  (t += l),
                  (t -= l = 1 / (i = 1680 * (n *= a))),
                  r.exp(t)
                );
              }
              return this.gt(s)
                ? r.exp(this.mul(this.log().sub(1)))
                : r.exp(this);
            },
          },
          {
            key: "lambertw",
            value: function () {
              var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                t = e;
              if (this.lt(-0.3678794411710499)) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (t)
                return this.abs().lt("1e-300")
                  ? new r(this)
                  : this.small
                    ? r.fromNumber(m(this.toNumber()))
                    : this.lt(s)
                      ? r.fromNumber(m(this.sign * this.array[0].repeat))
                      : this.lt("eee15")
                        ? x(this)
                        : this.log();
              if (-1 === this.sign) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              return this.lt(9e15)
                ? r.fromNumber(m(this.sign * this.array[0].repeat, 1e-10, !1))
                : this.lt(r.E_MSI)
                  ? x(this, 1e-10, !1)
                  : this.neg().rec().lambertw().neg();
            },
          },
          {
            key: "tetrate",
            value: function (e) {
              var t,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                n = this,
                i = new r(e),
                o = new r(a);
              if (n.isNaN() || i.isNaN() || o.isNaN()) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (n.eq(1)) return r.ONE;
              if (
                (o.neq(r.ONE) && n.gte(h) && (i = i.add(o.slog(n))),
                i.isInfi() && i.sign > 0)
              )
                return n.gte(h)
                  ? r.POSITIVE_INFINITY
                  : (t = this.log().neg()).lambertw().div(t);
              if (i.lte(-2)) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (n.isZero()) {
                if (i.isZero()) {
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                }
                return i.gte(s / 2) || i.toNumber() % 2 == 0 ? r.ZERO : r.ONE;
              }
              if (n.eq(r.ONE)) {
                if (i.eq(r.ONE.neg())) {
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                }
                return r.ONE;
              }
              if (i.eq(r.ONE.neg())) return r.ZERO;
              if (i.eq(r.ZERO)) return r.ONE;
              if (i.eq(r.ONE)) return n;
              if (i.eq(2)) return n.pow(n);
              if (n.eq(2)) {
                if (i.eq(3)) return r.fromNumber(16);
                if (i.eq(4)) return r.fromNumber(65536);
              }
              var u = n.max(i);
              if (u.gt(r.PENTATED_MSI)) return u;
              if (u.gt(r.TETRATED_MSI) || i.gt(s)) {
                if (this.lt(h)) return (t = n.ln().neg()).lambertw().div(t);
                var l = n.slog(10).add(i);
                return (
                  l.setOperator(l.getOperator(2) + 1, 2),
                  l.normalize(),
                  l
                );
              }
              for (
                var f = i.toNumber(),
                  g = Math.floor(f),
                  c = n.pow(f - g),
                  p = r.NaN,
                  y = 0,
                  v = r.E_MSI;
                0 !== g && c.lt(v) && y < 100;
                ++y
              )
                if (g > 0) {
                  if (((c = n.pow(c)), p.eq(c))) {
                    g = 0;
                    break;
                  }
                  ((p = c), --g);
                } else {
                  if (((c = c.log(n)), p.eq(c))) {
                    g = 0;
                    break;
                  }
                  ((p = c), ++g);
                }
              return (
                (100 == y || this.lt(h)) && (g = 0),
                c.setOperator(c.getOperator(1) + g, 1),
                c.normalize(),
                c
              );
            },
          },
          {
            key: "tetr",
            value: function (r) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              return this.tetrate(r, e);
            },
          },
          {
            key: "slog",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 10,
                t = this,
                a = new r(e);
              if (t.isInfiNaN()) return t;
              if (a.isNaN()) return a;
              if (a.isInfi()) return r.ZERO;
              if (t.isZero()) return r.ONE;
              if (t.eq(r.ONE)) return r.ZERO;
              if (t.eq(a)) return r.ONE;
              if (a.lt(h)) {
                var n = a.tetrate(1 / 0);
                if (t.eq(n)) return r.POSITIVE_INFINITY;
                if (t.gt(n)) {
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                }
              }
              if (t.max(a).gt(r.PENTATED_MSI)) return t.gt(a) ? t : r.ZERO;
              if (t.max(a).gt(r.TETRATED_MSI) && t.gt(a))
                return (
                  t.setOperator(t.getOperator(2) - 1, 2),
                  t.normalize(),
                  t.sub(t.getOperator(1))
                );
              if (t.lt(r.ZERO)) return a.pow(t).sub(2);
              var i = 0,
                o = t.getOperator(1) - a.getOperator(1);
              if (o > 3) {
                var u = o - 3;
                ((i += u), t.setOperator(t.getOperator(1) - u, 1));
              }
              for (var s = 0; s < 100; ++s)
                if (t.lt(r.ZERO)) ((t = r.pow(e, t)), --i);
                else {
                  if (t.lte(1)) return new r(i + t.toNumber() - 1);
                  (++i, (t = r.log(t, e)));
                }
              if (t.gt(10)) return new r(i);
              if (r.throwErrorOnResultNaN) throw new Error("NaN");
              return r.NaN;
            },
          },
          {
            key: "ssqrt",
            value: function () {
              var e = this;
              if (e.lt(1 / h)) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (!e.isFinite()) return e;
              if (e.gt(r.TETRATED_MSI)) return e;
              if (e.gt(r.EE_MSI))
                return (e.setOperator(e.getOperator(1) - 1, 1), e);
              var t = e.ln();
              return t.div(t.lambertw());
            },
          },
          {
            key: "tetrate_10",
            value: function () {
              return r.tetrate(10, this);
            },
          },
          {
            key: "iteratedlog",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 10,
                a = this,
                n = new r(t),
                i = new r(e);
              return i.isZero()
                ? a
                : i.eq(r.ONE)
                  ? a.log(n)
                  : n.tetrate(a.slog(n).sub(i));
            },
          },
          {
            key: "omegalog",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 10,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1e-6,
                a = this,
                n = a;
              if (n.isInfiNaN()) return n;
              if (n.gte("10{1,2}e15.954589770191003")) return n;
              var i = new r(e);
              if (n.getOperator(1 / 0) >= 1)
                return (
                  n.setOperator(n.getOperator(1 / 0) - 1, 1 / 0, 1, 1),
                  n
                );
              if (a.lt(r.pentate(i, 2))) return new r(a).anyarrow_log(3)(i);
              if (10 == e) {
                for (var o = [], u = 0; u < a.array.length; u++)
                  o[u] = {
                    arrow: a.array[u].arrow,
                    expans: a.array[u].expans,
                    megota: a.array[u].megota,
                    repeat: a.array[u].repeat,
                    valuereplaced: a.array[u].valuereplaced,
                  };
                var s = r.omegacollect(o);
                return new r(
                  s[1].arrow - 1 + Math.log(s[0].repeat / 2) / Math.log(5),
                );
              }
              for (var l = 2, f = 9007199254740991, h = NaN; l <= f; ) {
                var g = Math.floor((l + f) / 2),
                  c = r.arrFrac(i, g).cmp(a);
                if (0 === c) return new r(g);
                if (
                  (c < 0 ? ((h = g), (l = g + 1)) : (f = g - 1),
                  Math.abs(l - f) <= t)
                )
                  return new r(g);
              }
              return new r(h);
            },
          },
          {
            key: "arrow",
            value: function (e) {
              var t = this,
                a = new r(e);
              return a.lt(r.ZERO)
                ? (console.warn(
                    "The arrow is <0 or not a integer, the returned function will return NaN.",
                  ),
                  function () {
                    if (r.throwErrorOnResultNaN) throw new Error("NaN");
                    return r.NaN;
                  })
                : a.isInt()
                  ? a.eq(0)
                    ? function (r) {
                        return t.mul(r);
                      }
                    : a.eq(1)
                      ? function (r) {
                          return t.pow(r);
                        }
                      : a.eq(2)
                        ? function (r) {
                            return t.tetrate(r);
                          }
                        : function (e) {
                            var n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 1,
                              i =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 0,
                              o = new r(e),
                              u = new r(n),
                              l = r.arrowFuncMap.get(
                                ""
                                  .concat(t.toString(), " ")
                                  .concat(a.toString(), " ")
                                  .concat(o.toString(), " ")
                                  .concat(i),
                              );
                            if (l) return l;
                            var f = (function () {
                              var e;
                              if (t.isNaN() || o.isNaN() || u.isNaN())
                                return r.NaN;
                              if (o.lt(r.ZERO)) return r.NaN;
                              if (t.eq(r.ZERO)) {
                                if (o.eq(r.ONE)) return r.ZERO;
                                if (r.throwErrorOnResultNaN)
                                  throw new Error("NaN");
                                return r.NaN;
                              }
                              if (
                                (u.neq(r.ONE) &&
                                  (o = o.add(u.anyarrow_log(a)(t))),
                                t.eq(r.ONE))
                              )
                                return r.ONE;
                              if (o.eq(r.ZERO)) return r.ONE;
                              if (o.eq(r.ONE)) return t;
                              if (a.gt(r.MSI))
                                return (
                                  (e = a).setOperator(
                                    e.getOperator(1 / 0) + 1,
                                    1 / 0,
                                  ),
                                  e
                                );
                              var n = a.toNumber();
                              if (o.eq(2)) return t.arrow(n - 1)(t, u, i + 1);
                              if (t.max(o).gt(r.arrowMSI(n + 1)))
                                return t.max(o);
                              if (t.gt(r.arrowMSI(n)) || o.gt(s)) {
                                t.gt(r.arrowMSI(n))
                                  ? ((e = t).setOperator(
                                      e.getOperator(n) - 1,
                                      n,
                                    ),
                                    e.normalize())
                                  : (e = t.gt(r.arrowMSI(n - 1))
                                      ? new r(t.getOperator(n - 1))
                                      : r.ZERO);
                                var l = e.add(o);
                                return (
                                  l.setOperator(l.getOperator(n) + 1, n),
                                  l.normalize(),
                                  l
                                );
                              }
                              if (i >= r.maxOps + 10)
                                return new r({
                                  small: !1,
                                  sign: 1,
                                  layer: 0,
                                  array: [p(10, 0), p(1, n)],
                                });
                              var f = o.toNumber(),
                                h = Math.floor(f),
                                g = a.sub(r.ONE);
                              e = t.arrow(g)(f - h, u, i + 1);
                              for (
                                var c = 0, y = r.arrowMSI(n - 1);
                                0 !== h && e.lt(y) && c < 100;
                                c++
                              )
                                h > 0 && ((e = t.arrow(g)(e, u, i + 1)), --h);
                              return (
                                100 == c && (h = 0),
                                e.setOperator(e.getOperator(n - 1) + h, n - 1),
                                e.normalize(),
                                e
                              );
                            })();
                            return (
                              i < r.maxOps + 10 &&
                                r.arrowFuncMap.set(
                                  ""
                                    .concat(t.toString(), " ")
                                    .concat(a.toString(), " ")
                                    .concat(o.toString(), " ")
                                    .concat(i),
                                  f,
                                ),
                              f
                            );
                          }
                  : function (r) {
                      return _(t, a, r);
                    };
            },
          },
          {
            key: "anyarrow_log",
            value: function (e) {
              var t = this,
                a = new r(e),
                n = a.toNumber();
              if (a.gt(s))
                throw new Error("[PowiainaNum 0.2 error]Not implemented");
              return !a.isInt() || a.lt(0)
                ? function () {
                    if (r.throwErrorOnResultNaN) throw new Error("NaN");
                    return r.NaN;
                  }
                : a.eq(0)
                  ? function (r) {
                      return t.div(r);
                    }
                  : a.eq(1)
                    ? function (r) {
                        return t.log(r);
                      }
                    : a.eq(2)
                      ? function (r) {
                          return t.slog(r);
                        }
                      : t.isInfiNaN()
                        ? function () {
                            return t;
                          }
                        : function (e) {
                            var a =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              i = new r(e);
                            if (i.isNaN()) return i;
                            if (i.isInfi()) return r.ZERO;
                            if (t.isZero()) return r.ONE;
                            if (t.eq(r.ONE)) return r.ZERO;
                            if (t.eq(i)) return r.ONE;
                            if (t.max(i).gt(r.arrowMSI(n + 1)))
                              return t.gt(i) ? t : r.ZERO;
                            if (t.max(i).gt(r.arrowMSI(n)) && t.gt(i))
                              return (
                                t.setOperator(t.getOperator(n) - 1, n),
                                t.normalize(),
                                t.sub(t.getOperator(n - 1))
                              );
                            if (t.lt(r.ZERO)) {
                              if (r.throwErrorOnResultNaN)
                                throw new Error("NaN");
                              return r.NaN;
                            }
                            var o = 0,
                              u = t.getOperator(n) - i.getOperator(n);
                            if (u > 3) {
                              var s = u - 3;
                              ((o += s),
                                t.setOperator(t.getOperator(n) - s, n));
                            }
                            for (var l = 0; l < 100; ++l)
                              if (t.lt(r.ZERO)) ((t = t.arrow(n - 1)(e)), --o);
                              else {
                                if (t.lte(1))
                                  return new r(o + t.toNumber() - 1);
                                (++o, (t = t.anyarrow_log(n - 1)(e, a + 1)));
                              }
                            if (t.gt(10)) return new r(o);
                            if (r.throwErrorOnResultNaN) throw new Error("NaN");
                            return r.NaN;
                          };
            },
          },
          {
            key: "omega2log",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 10,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1e-6,
                a = this,
                n = a.clone();
              if (n.isInfiNaN()) return n;
              if (n.gte("10{1,3}e15.954589770191003")) return n;
              if ((new r(e), n.getOperator(1 / 0, 2) >= 1))
                return (
                  n.setOperator(n.getOperator(1 / 0) - 1, 1 / 0, 2, 1),
                  n
                );
              if (a.lt(new r(e).expansionArrow(3)(2)))
                return new r(a).expansion_log2(3)(e);
              if (10 == e) {
                for (var i = [], o = 0; o < a.array.length; o++)
                  i[o] = {
                    arrow: a.array[o].arrow,
                    expans: a.array[o].expans,
                    megota: a.array[o].megota,
                    repeat: a.array[o].repeat,
                    valuereplaced: a.array[o].valuereplaced,
                  };
                var u = r.omegacollect(i);
                return new r(
                  u[1].arrow - 1 + Math.log(u[0].repeat / 2) / Math.log(5),
                );
              }
              for (var s = 2, l = 9007199254740991, f = NaN; s <= l; ) {
                var h = Math.floor((s + l) / 2),
                  g = r.arrw2Frac(e, h).cmp(a);
                if (0 === g) return new r(h);
                if (
                  (g < 0 ? ((f = h), (s = h + 1)) : (l = h - 1),
                  Math.abs(s - l) <= t)
                )
                  return new r(h);
              }
              return new r(f);
            },
          },
          {
            key: "arrow_height_inverse",
            value: function (r) {
              return this.anyarrow_log(r);
            },
          },
          {
            key: "arrow_w2_height_inverse",
            value: function (r) {
              return this.expansion_log2(r);
            },
          },
          {
            key: "chain",
            value: function (r, e) {
              return this.arrow(e)(r);
            },
          },
          {
            key: "pentate",
            value: function (r, e) {
              return this.arrow(3)(r, e);
            },
          },
          {
            key: "hexate",
            value: function (r, e) {
              return this.arrow(4)(r, e);
            },
          },
          {
            key: "pent",
            value: function (r, e) {
              return this.arrow(3)(r, e);
            },
          },
          {
            key: "penta_log",
            value: function () {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 10;
              return this.anyarrow_log(3)(r);
            },
          },
          {
            key: "expansion",
            value: function (e) {
              var t,
                a = new r(e),
                n = this;
              if (a.lt(r.ZERO)) return r.NaN;
              if (a.eq(r.ONE)) return this;
              if (this.eq(r.ONE)) return r.ONE;
              if (this.eq(2)) return new r(4);
              if (a.eq(0)) return r.ONE;
              if (a.gt(0) && a.lt(1) && !a.isInt()) return n.pow(a);
              if (a.gt(1) && a.lt(2) && !a.isInt()) {
                var i = a.sub(1).pow_base(n);
                return i.lt(2) ? r.arrow(n, 3, i) : r.arrFrac(n, i);
              }
              if (n.gt("10{1,2}".concat(s)) || a.gt(s)) {
                n.gt("10{1,2}".concat(s))
                  ? ((t = n.clone()).setOperator(t.getOperator(1, 2) - 1, 1, 2),
                    t.normalize())
                  : (t = n.gt("10{".concat(s, "}10"))
                      ? new r(n.getOperator(1 / 0))
                      : r.ZERO);
                var o = t.add(a);
                return (
                  o.setOperator(o.getOperator(1, 2) + 1, 1, 2),
                  o.normalize(),
                  o
                );
              }
              var u = a.toNumber() - 1,
                l = Math.floor(u);
              t = r.expansion(n, 1 + u - l);
              for (
                var f = 0, h = new r("10{1,2}e15.954589770191003");
                0 !== l && t.lt(h) && f < 100;
                f++
              )
                l > 0 && ((t = r.arrFrac(n, t)), --l);
              return (
                t.setOperator(t.getOperator(1 / 0) + l, 1 / 0),
                t.normalize(),
                t
              );
            },
          },
          {
            key: "expansionArrow",
            value: function (e) {
              var t = new r(e),
                a = this;
              if (t.lt(0) || !t.isInt())
                return function () {
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                };
              if (t.eq(0))
                return function (r) {
                  return a.arrow(r)(a);
                };
              if (t.eq(1))
                return function (r) {
                  return a.expansion(r);
                };
              var n = t;
              return function (e) {
                var t,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  o = new r(e);
                if (a.isNaN() || o.isNaN()) return r.NaN;
                if (o.lt(r.ZERO)) {
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                }
                if (a.eq(r.ZERO)) {
                  if (o.eq(r.ONE)) return r.ZERO;
                  if (r.throwErrorOnResultNaN) throw new Error("NaN");
                  return r.NaN;
                }
                if (a.eq(r.ONE)) return r.ONE;
                if (o.eq(r.ZERO)) return r.ONE;
                if (o.eq(r.ONE)) return a;
                if (n.gt(r.MSI))
                  return (
                    (t = n).setOperator(t.getOperator(1 / 0, 2) + 1, 1 / 0, 2),
                    t
                  );
                var u = n.toNumber();
                if (o.eq(2)) return a.expansionArrow(u - 1)(a, i + 1);
                if (a.max(o).gt("10{".concat(u + 1, ",2}").concat(s)))
                  return a.max(o);
                if (a.gt("10{".concat(u, ",2}").concat(s)) || o.gt(s)) {
                  a.gt("10{".concat(u, ",2}").concat(s))
                    ? ((t = a.clone()).setOperator(
                        t.getOperator(u, 2) - 1,
                        u,
                        2,
                      ),
                      t.normalize())
                    : (t = a.gt("10{".concat(u - 1, ",2}").concat(s))
                        ? new r(a.getOperator(u - 1, 2))
                        : r.ZERO);
                  var l = t.add(o);
                  return (
                    l.setOperator(l.getOperator(u, 2) + 1, u, 2),
                    l.normalize(),
                    l
                  );
                }
                if (i >= r.maxOps + 10)
                  return new r({
                    small: !1,
                    sign: 1,
                    layer: 0,
                    array: [p(10, 0), p(1, u, 2)],
                  });
                var f = o.toNumber(),
                  h = Math.floor(f),
                  g = n.sub(r.ONE);
                t = a.expansionArrow(g)(f - h, i + 1);
                for (
                  var c = 0, y = new r("10{".concat(u - 1, ",2}").concat(s));
                  0 !== h && t.lt(y) && c < 100;
                  c++
                )
                  h > 0 && ((t = a.expansionArrow(g)(t, i + 1)), --h);
                return (
                  100 == c && (h = 0),
                  t.setOperator(t.getOperator(u - 1, 2) + h, u - 1, 2),
                  t.normalize(),
                  t
                );
              };
            },
          },
          {
            key: "expansion_log_inner",
            value: function (e) {
              var t = this,
                a = new r(e);
              if (a.eq(2) && t.gt(4)) return r.NaN;
              if (t.gte("10{2,2}".concat(s))) return t;
              if (t.gte("10{1,2}".concat(s)))
                return (t.setOperator(t.getOperator(1, 2) - 1, 1, 2), t);
              var n = 0,
                i = t,
                o = 0;
              i.getOperator(1 / 0) >= 10 &&
                ((o = i.getOperator(1 / 0) - 10), i.setOperator(10, 1 / 0));
              for (var u = 0; u < 100; ++u)
                if (i.lt(r.ZERO)) ((i = r.arrFrac(a, i)), --n);
                else {
                  if (i.lte(1)) return new r(n + i.toNumber() - 1 + o);
                  (++n, (i = i.omegalog(a.toNumber())));
                }
              return i.gt(10) ? new r(n + o) : i.add(o);
            },
          },
          {
            key: "expansion_log2",
            value: function (e) {
              var t = this.clone(),
                a = new r(e),
                n = a.toNumber();
              if (a.gt(s))
                throw new Error("[PowiainaNum 0.2 error]Not implemented");
              return !a.isInt() || a.lt(1)
                ? function () {
                    if (r.throwErrorOnResultNaN) throw new Error("NaN");
                    return r.NaN;
                  }
                : a.eq(1)
                  ? function (r) {
                      return t.expansion_log_inner(r);
                    }
                  : t.isInfiNaN()
                    ? function () {
                        return t;
                      }
                    : function (e) {
                        var a =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          i = new r(e);
                        if (i.isNaN()) return i;
                        if (i.isInfi()) return r.ZERO;
                        if (t.isZero()) return r.ONE;
                        if (t.eq(r.ONE)) return r.ZERO;
                        if (t.eq(i)) return r.ONE;
                        if (t.max(i).gt(r.arrowexpansMSI(n + 1)))
                          return t.gt(i) ? t : r.ZERO;
                        if (t.max(i).gt(r.arrowexpansMSI(n)) && t.gt(i))
                          return (
                            t.setOperator(t.getOperator(n, 2) - 1, n, 2),
                            t.normalize(),
                            t.sub(t.getOperator(n - 1, 2))
                          );
                        if (t.lt(r.ZERO)) {
                          if (r.throwErrorOnResultNaN) throw new Error("NaN");
                          return r.NaN;
                        }
                        var o = 0,
                          u = t.getOperator(n, 2) - i.getOperator(n, 2);
                        if (u > 3) {
                          var s = u - 3;
                          ((o += s),
                            t.setOperator(t.getOperator(n, 2) - s, n, 2));
                        }
                        for (var l = 0; l < 100; ++l)
                          if (t.lt(r.ZERO))
                            ((t = t.expansionArrow(n - 1)(e)), --o);
                          else {
                            if (t.lte(1)) return new r(o + t.toNumber() - 1);
                            (++o, (t = t.expansion_log2(n - 1)(e, a + 1)));
                          }
                        if (t.gt(10)) return new r(o);
                        if (r.throwErrorOnResultNaN) throw new Error("NaN");
                        return r.NaN;
                      };
            },
          },
          {
            key: "multiExpansion",
            value: function (r) {
              return this.expansionArrow(2)(r);
            },
          },
          {
            key: "powerExpansion",
            value: function (r) {
              return this.expansionArrow(3)(r);
            },
          },
          {
            key: "explosion",
            value: function (e) {
              return r.BEAF(this, e, 1, 3);
            },
          },
          {
            key: "megotion",
            value: function (e) {
              return r.BEAF(this, e, 1, 1, 2);
            },
          },
          {
            key: "powiaination",
            value: function (e) {
              return r.BEAF(this, e, 1, 1, 1, 2);
            },
          },
          {
            key: "abs",
            value: function () {
              var r = this.clone();
              return (r.sign < 0 && (r.sign *= -1), r);
            },
          },
          {
            key: "clampMin",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return r.max.apply(r, [this].concat(t));
            },
          },
          {
            key: "clampMax",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return r.min.apply(r, [this].concat(t));
            },
          },
          {
            key: "clamp",
            value: function (r, e) {
              return this.max(r).min(e);
            },
          },
          {
            key: "max",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return r.max.apply(r, [this].concat(t));
            },
          },
          {
            key: "min",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return r.min.apply(r, [this].concat(t));
            },
          },
          {
            key: "maxabs",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              var i = t.map(function (e) {
                return new r(e).abs();
              });
              return r.max.apply(r, [this.abs()].concat(n(i)));
            },
          },
          {
            key: "minabs",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              var i = t.map(function (e) {
                return new r(e).abs();
              });
              return r.min.apply(r, [this.abs()].concat(n(i)));
            },
          },
          {
            key: "cmpabs",
            value: function (e) {
              var t = new r(e).abs();
              return this.abs().cmp(t);
            },
          },
          {
            key: "compare",
            value: function (e) {
              var t = new r(e);
              if (this.isNaN() || t.isNaN()) return 2;
              if (this.sign < t.sign) return -1;
              if (this.sign > t.sign) return 1;
              var a = -1 == this.sign && -1 == t.sign;
              if (this.small && !t.small) return -1 * (a ? -1 : 1);
              if (t.small && !this.small) return 1 * (a ? -1 : 1);
              var n = 1;
              (this.small && t.small && (n *= -1), a && (n *= -1));
              for (
                var i = 0, o = 0;
                this.array.length - 1 - o >= 0 && t.array.length - 1 - o >= 0;
                o++
              ) {
                var u = this.array[this.array.length - 1 - o],
                  s = t.array[t.array.length - 1 - o];
                if (u.repeat === 1 / 0 && s.repeat === 1 / 0)
                  return this.small === t.small ? 0 : t.small ? 1 : -1;
                if (u.repeat === 1 / 0) {
                  i = 1;
                  break;
                }
                if (s.repeat === 1 / 0) {
                  i = -1;
                  break;
                }
                var l = y(
                  [u.megota, u.expans, u.arrow, u.repeat],
                  [s.megota, s.expans, s.arrow, s.repeat],
                );
                if (1 == l) {
                  i = 1;
                  break;
                }
                if (-1 == l) {
                  i = -1;
                  break;
                }
              }
              return i * n + 1 - 1;
            },
          },
          {
            key: "cmp",
            value: function (r) {
              return this.compare(r);
            },
          },
          {
            key: "eq",
            value: function (r) {
              return 0 === this.cmp(r);
            },
          },
          {
            key: "neq",
            value: function (r) {
              return 0 !== this.cmp(r);
            },
          },
          {
            key: "lt",
            value: function (r) {
              return -1 === this.cmp(r);
            },
          },
          {
            key: "lte",
            value: function (r) {
              return this.cmp(r) <= 0;
            },
          },
          {
            key: "gt",
            value: function (r) {
              return 1 == this.cmp(r);
            },
          },
          {
            key: "gte",
            value: function (r) {
              var e = this.cmp(r);
              return 0 == e || 1 == e;
            },
          },
          {
            key: "equals",
            value: function (r) {
              return this.eq(r);
            },
          },
          {
            key: "notEquals",
            value: function (r) {
              return this.neq(r);
            },
          },
          {
            key: "eq_tolerance",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1e-7,
                a = new r(e);
              return this.sub(a).lte(this.max(a).mul(t));
            },
          },
          {
            key: "sin",
            value: function () {
              var e = this;
              if (e.isneg()) return e.neg().sin().neg();
              var t = e.mod(7074237752028440);
              return r.fromNumber(Math.sin(t.toNumber()));
            },
          },
          {
            key: "cos",
            value: function () {
              return this.sub(Math.PI / 2).sin();
            },
          },
          {
            key: "tan",
            value: function () {
              return this.sin().div(this.cos());
            },
          },
          {
            key: "cot",
            value: function () {
              return this.cos().div(this.sin());
            },
          },
          {
            key: "sec",
            value: function () {
              return this.cos().rec();
            },
          },
          {
            key: "csc",
            value: function () {
              return this.sin().rec();
            },
          },
          {
            key: "neg",
            value: function () {
              var r = this.clone();
              return ((r.sign *= -1), r.normalize(), r);
            },
          },
          {
            key: "rec",
            value: function () {
              var r = this.clone();
              return ((r.small = !r.small), r);
            },
          },
          {
            key: "recip",
            value: function () {
              return this.rec();
            },
          },
          {
            key: "reciprocate",
            value: function () {
              return this.rec();
            },
          },
          {
            key: "floor",
            value: function () {
              if (this.isInt()) return this;
              if (this.small) return 1 == this.sign ? r.ZERO : r.ONE.neg();
              var e = this.abs();
              return (
                (e.array[0].repeat = Math[1 == this.sign ? "floor" : "ceil"](
                  e.getOperator(0),
                )),
                (e.sign = this.sign),
                e
              );
            },
          },
          {
            key: "ceil",
            value: function () {
              if (this.isInt()) return this;
              if (this.small) return 1 == this.sign ? r.ONE : r.ZERO;
              var e = this.abs();
              return (
                (e.array[0].repeat = Math[1 == this.sign ? "ceil" : "floor"](
                  e.getOperator(0),
                )),
                (e.sign = this.sign),
                e
              );
            },
          },
          {
            key: "round",
            value: function () {
              if (this.isInt()) return this;
              if (this.small)
                return 1 == this.sign
                  ? this.rec().lte(2)
                    ? r.ONE
                    : r.ZERO
                  : this.abs().rec().lte(2)
                    ? r.ZERO
                    : r.ONE.neg();
              var e = this.abs();
              return (
                (e.array[0].repeat = Math.round(e.array[0].repeat)),
                (e.sign = this.sign),
                e
              );
            },
          },
          {
            key: "trunc",
            value: function () {
              var r = this;
              return r.gte(0) ? r.floor() : r.ceil();
            },
          },
          {
            key: "isNaN",
            value: (function (r) {
              function e() {
                return r.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return r.toString();
                }),
                e
              );
            })(function () {
              return isNaN(this.array[0].repeat);
            }),
          },
          {
            key: "isZero",
            value: function () {
              return Boolean(this.small && !isFinite(this.array[0].repeat));
            },
          },
          {
            key: "isFinite",
            value: (function (r) {
              function e() {
                return r.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return r.toString();
                }),
                e
              );
            })(function () {
              return (
                Boolean(this.small || isFinite(this.array[0].repeat)) &&
                !this.isNaN()
              );
            }),
          },
          {
            key: "isInfi",
            value: function () {
              return this.rec().isZero();
            },
          },
          {
            key: "isInfiNaN",
            value: function () {
              return this.isInfi() || this.isNaN();
            },
          },
          {
            key: "isInt",
            value: function () {
              return (
                !!this.isZero() ||
                !(this.small || !Number.isInteger(this.array[0].repeat)) ||
                !!this.abs().gte(s / 2)
              );
            },
          },
          {
            key: "ispos",
            value: function () {
              return this.sign > 0;
            },
          },
          {
            key: "isneg",
            value: function () {
              return this.sign < 0;
            },
          },
          {
            key: "getOperatorIndex",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
              return r.opGetOperatorIndex(this.array, e, t, a);
            },
          },
          {
            key: "getOperator",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
              return r.opGetOperator(this.array, e, t, a);
            },
          },
          {
            key: "setOperator",
            value: function (e, t) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1;
              return r.opSetOperator(this.array, e, t, a, n);
            },
          },
          {
            key: "toNumber",
            value: function () {
              return -1 == this.sign
                ? -this.neg().toNumber()
                : this.small
                  ? 1 / this.rec().toNumber()
                  : this.gte("e308.25471555991675")
                    ? 1 / 0
                    : 1 == this.array.length
                      ? this.array[0].repeat
                      : 2 == this.array.length &&
                          1 == this.array[1].arrow &&
                          1 == this.array[1].expans &&
                          1 == this.array[1].megota &&
                          1 == this.array[1].repeat
                        ? Math.pow(10, this.array[0].repeat)
                        : NaN;
            },
          },
          {
            key: "toString_core",
            value: function () {
              if (this.isNaN()) return "NaN";
              if (-1 == this.sign) return "-".concat(this.neg().toString());
              if (this.small)
                return this.isZero() ? "0" : "/".concat(this.rec().toString());
              if (this.isInfi()) return "Infinity";
              var r = "";
              this.layer
                ? this.layer < 3
                  ? (r += "P".repeat(this.layer))
                  : (r += "P^" + this.layer + " ")
                : (r += "");
              for (var e = this.array.length - 1; e >= 0; e--) {
                var t = this.array[e],
                  a = "10{"
                    .concat(t.arrow === 1 / 0 ? "!" : t.arrow)
                    .concat(
                      t.expans > 1 || t.megota > 1
                        ? ",".concat(t.expans === 1 / 0 ? "!" : t.expans)
                        : "",
                    )
                    .concat(t.megota > 1 ? ",".concat(t.megota) : "", "}");
                ((a =
                  1 == t.arrow && 1 == t.expans && 1 == t.megota && t.repeat < 5
                    ? "e".repeat(t.repeat)
                    : 0 == t.arrow && 1 == t.expans && 1 == t.megota
                      ? t.repeat.toString()
                      : t.repeat > 1
                        ? "(".concat(a, ")^").concat(t.repeat, " ")
                        : "".concat(a)),
                  (r += "".concat(a)));
              }
              return r;
            },
          },
          {
            key: "toString",
            value: function () {
              try {
                return this.toString_core();
              } catch (r) {
                return (
                  console.error("Checked error when converting to string"),
                  "NaN"
                );
              }
            },
          },
          {
            key: "toJSON",
            value: function () {
              return "PN" + this.toString();
            },
          },
          {
            key: "arr01",
            get: function () {
              for (var r = [0], e = 0; e < this.array.length; e++)
                0 == e
                  ? (r[0] = this.array[e].repeat)
                  : ((r[e] = [0, 0, 0, 0]),
                    (r[e][0] =
                      this.array[e].arrow == 1 / 0 ? "x" : this.array[e].arrow),
                    (r[e][1] = this.array[e].repeat),
                    (r[e][2] =
                      this.array[e].expans == 1 / 0
                        ? "x"
                        : this.array[e].expans),
                    (r[e][3] = this.array[e].megota));
              return r;
            },
          },
          {
            key: "normalize",
            value: function () {
              var e = !0,
                t = this;
              (void 0 === this.array && (t.array = [p(NaN, 0, 1, 1)]),
                void 0 === this.sign && (this.sign = 0),
                void 0 === this.layer && (this.layer = 0));
              for (var a = 0; a < this.array.length; a++)
                if (this.array[a].repeat == 1 / 0)
                  return (
                    (this.array = [
                      { arrow: 0, expans: 1, megota: 1, repeat: 1 / 0 },
                    ]),
                    (this.layer = 0),
                    this
                  );
              for (var n = 1; n < t.array.length; ++n) {
                var i = t.array[n];
                if (
                  ((null !== i.arrow && void 0 !== i.arrow) || (i.arrow = 0),
                  (null !== i.expans && void 0 !== i.expans) || (i.expans = 1),
                  (null !== i.megota && void 0 !== i.megota) || (i.megota = 1),
                  isNaN(i.arrow) ||
                    isNaN(i.repeat) ||
                    isNaN(i.expans) ||
                    isNaN(i.megota))
                )
                  return ((t.array = [p(NaN, 0, 1, 1)]), t);
                if (!isFinite(i.repeat) || !isFinite(i.megota))
                  return ((t.array = [p(1 / 0, 0, 1, 1)]), t);
                (Number.isInteger(i.arrow) || (i.arrow = Math.floor(i.arrow)),
                  Number.isInteger(i.repeat) ||
                    (i.repeat = Math.floor(i.repeat)),
                  Number.isInteger(i.expans) ||
                    (i.expans = Math.floor(i.expans)),
                  Number.isInteger(i.megota) ||
                    (i.megota = Math.floor(i.megota)));
              }
              t.array.length || ((t.small = !t.small), (t.array = [p(1 / 0)]));
              do {
                ((e = !1), this.array.sort(M));
                for (var o = 1; o < t.array.length - 1; ++o) {
                  var u = t.array[o],
                    f = t.array[o + 1];
                  u.arrow == f.arrow &&
                    u.expans == f.expans &&
                    u.megota == f.megota &&
                    ((u.repeat += f.repeat),
                    t.array.splice(o + 1, 1),
                    --o,
                    (e = !0));
                }
                for (var h = 1; h < t.array.length; ++h) {
                  var g = t.array[h];
                  0 === g.arrow ||
                  (0 !== g.repeat && null !== g.repeat && void 0 !== g.repeat)
                    ? 0 == g.arrow &&
                      g.expans >= 2 &&
                      ((g.arrow = 1 / 0),
                      (g.valuereplaced = 0),
                      (g.expans = g.expans - 1))
                    : (t.array.splice(h, 1), --h);
                }
                if (
                  (t.array.length >= 2 &&
                    t.array[0].repeat < s &&
                    1 == t.array[1].arrow &&
                    t.array[1].expans >= 2 &&
                    (0 == t.array[0].repeat
                      ? (t.array.splice(0, 1, p(1)), t.array[1].repeat--)
                      : 1 == t.array[0].repeat
                        ? (t.array.splice(0, 1, p(10)), t.array[1].repeat--)
                        : 2 == t.array[0].repeat
                          ? (t.array.splice(
                              0,
                              1,
                              p(10),
                              p(
                                10,
                                10,
                                t.array[1].expans - 1,
                                t.array[1].megota,
                              ),
                            ),
                            t.array[2].repeat--)
                          : (t.array.splice(
                              0,
                              1,
                              p(10),
                              p(
                                10,
                                10,
                                t.array[1].expans - 1,
                                t.array[1].megota,
                              ),
                              p(
                                t.array[0].repeat - 2,
                                1 / 0,
                                t.array[1].expans - 1,
                                t.array[1].megota,
                              ),
                            ),
                            t.array[2].repeat--),
                    (e = !0)),
                  t.array.length > r.maxOps &&
                    t.array.splice(1, t.array.length - r.maxOps),
                  this.array.length >= 2 &&
                    1 == this.array[1].arrow &&
                    this.array[1].repeat >= 1 &&
                    this.array[0].repeat < l &&
                    (this.setOperator(this.array[1].repeat - 1, 1),
                    this.setOperator(Math.pow(10, this.array[0].repeat), 0),
                    (e = !0)),
                  this.array[0].repeat > s &&
                    isFinite(this.array[0].repeat) &&
                    (this.setOperator(this.getOperator(1) + 1, 1),
                    this.setOperator(Math.log10(this.array[0].repeat), 0),
                    (e = !0)),
                  this.array[this.array.length - 1].megota > s
                    ? (this.layer++,
                      (this.array = [
                        p(this.array[this.array.length - 1].megota),
                      ]),
                      (e = !0))
                    : this.layer &&
                      1 == this.array.length &&
                      0 === this.array[0].arrow &&
                      (this.layer--,
                      (this.array = [
                        p(10),
                        p(1, 10, 10, this.array[0].repeat),
                      ]),
                      (e = !0)),
                  1 == this.array.length &&
                    this.array[0].repeat < 1 &&
                    ((this.array[0].repeat = 1 / this.array[0].repeat),
                    (this.small = !this.small),
                    (e = !0)),
                  1 == this.array.length &&
                    1 == this.array[0].repeat &&
                    this.small &&
                    ((this.small = !1), (e = !0)),
                  this.array.length >= 2 &&
                    !isFinite(this.array[1].arrow) &&
                    (this.array[1].repeat > 1
                      ? (this.array.push(
                          p(
                            this.array[1].repeat - 1,
                            1 / 0,
                            this.array[1].expans,
                            this.array[1].megota,
                          ),
                        ),
                        (this.array[1].repeat = 1),
                        (this.array[1].arrow = this.array[0].repeat),
                        (this.array[0].repeat = 10))
                      : ((this.array[1].arrow = this.array[0].repeat),
                        (this.array[0].repeat = 10))),
                  this.array.length >= 2 &&
                    this.array[1].arrow >= s &&
                    isFinite(this.array[1].arrow) &&
                    ((this.array[0].repeat = this.array[1].arrow),
                    (this.array[1] = p(
                      1,
                      1 / 0,
                      this.array[1].expans,
                      this.array[1].megota,
                    ))),
                  this.array.length >= 2 &&
                    this.array[1].arrow >= 2 &&
                    this.array[0].repeat < s &&
                    isFinite(this.array[1].arrow))
                ) {
                  var c = this.array[0].repeat,
                    y = this.array[1].arrow,
                    v = this.array[1].repeat;
                  ((this.array[0].repeat = 10),
                    this.array.splice(
                      2,
                      0,
                      p(v - 1, y, this.array[1].expans, this.array[1].megota),
                    ),
                    (this.array[1] = p(
                      c - 1,
                      y - 1,
                      this.array[1].expans,
                      this.array[1].megota,
                    )));
                }
                for (
                  ;
                  t.array.length >= 2 &&
                  1 == t.array[0].repeat &&
                  t.array[1].repeat;
                )
                  (t.array[1].repeat > 1
                    ? t.array[1].repeat--
                    : t.array.splice(1, 1),
                    (t.array[0].repeat = 10),
                    (e = !0));
                (t.array.length >= 2 &&
                  t.array.length < r.maxOps &&
                  t.array[0].repeat < s &&
                  t.array[1].arrow >= 2 &&
                  t.array[1].repeat > 1 &&
                  isFinite(t.array[1].arrow) &&
                  (t.array[1].repeat--,
                  t.array.splice(
                    1,
                    0,
                    p(
                      t.array[0].repeat - 1,
                      t.array[1].arrow - 1,
                      t.array[1].expans,
                      t.array[1].megota,
                    ),
                  ),
                  (t.array[0].repeat = 10),
                  (e = !0)),
                  t.array.length >= 2 &&
                    t.array[1].repeat > s &&
                    t.array[1].arrow !== 1 / 0 &&
                    (t.array[1].arrow++,
                    (t.array[0].repeat = t.array[1].repeat),
                    (t.array[1].repeat = 1),
                    (e = !0)),
                  t.array.length >= 2 &&
                    t.array[1].repeat > s &&
                    t.array[1].arrow === 1 / 0 &&
                    ((t.array[1].arrow = 1),
                    t.array[1].expans++,
                    (t.array[0].repeat = t.array[1].repeat),
                    (t.array[1].repeat = 1),
                    (e = !0)));
              } while (e);
              return this;
            },
          },
          {
            key: "clone",
            value: function () {
              var e = new r();
              return (e.resetFromObject(this), e);
            },
          },
          {
            key: "resetFromObject",
            value: function (r) {
              if (r.array)
                return (
                  (this.array = r.array.map(function (r) {
                    return {
                      arrow: r.arrow,
                      expans: r.expans,
                      megota: r.megota,
                      repeat: r.repeat,
                    };
                  })),
                  (this.small = r.small),
                  (this.sign = r.sign),
                  (this.layer = r.layer),
                  this
                );
            },
          },
        ],
        [
          {
            key: "add",
            value: function (e, t) {
              return new r(e).add(t);
            },
          },
          {
            key: "plus",
            value: function (e, t) {
              return new r(e).add(t);
            },
          },
          {
            key: "sub",
            value: function (e, t) {
              return new r(e).sub(t);
            },
          },
          {
            key: "minus",
            value: function (e, t) {
              return new r(e).sub(t);
            },
          },
          {
            key: "mul",
            value: function (e, t) {
              return new r(e).mul(t);
            },
          },
          {
            key: "times",
            value: function (e, t) {
              return new r(e).mul(t);
            },
          },
          {
            key: "div",
            value: function (e, t) {
              return new r(e).div(t);
            },
          },
          {
            key: "divide",
            value: function (e, t) {
              return new r(e).div(t);
            },
          },
          {
            key: "mod",
            value: function (e, t) {
              return new r(e).mod(t);
            },
          },
          {
            key: "modulus",
            value: function (e, t) {
              return new r(e).mod(t);
            },
          },
          {
            key: "pow",
            value: function (e, t) {
              return new r(e).pow(t);
            },
          },
          {
            key: "root",
            value: function (e, t) {
              return new r(e).root(t);
            },
          },
          {
            key: "sqrt",
            value: function (e) {
              return new r(e).sqrt();
            },
          },
          {
            key: "cbrt",
            value: function (e) {
              return new r(e).cbrt();
            },
          },
          {
            key: "log10",
            value: function (e) {
              return new r(e).log10();
            },
          },
          {
            key: "log",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Math.E;
              return new r(e).log(t);
            },
          },
          {
            key: "log2",
            value: function (e) {
              return new r(e).log2();
            },
          },
          {
            key: "logBase",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Math.E;
              return new r(e).log(t);
            },
          },
          {
            key: "pLog10",
            value: function (e) {
              return new r(e).pLog10();
            },
          },
          {
            key: "exp",
            value: function (e) {
              return new r(e).pow_base(Math.E);
            },
          },
          {
            key: "factorial",
            value: function (e) {
              return new r(e).factorial();
            },
          },
          {
            key: "gamma",
            value: function (e) {
              return new r(e).gamma();
            },
          },
          {
            key: "lambertw",
            value: function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return new r(e).lambertw(t);
            },
          },
          {
            key: "affordGeometricSeries",
            value: function (e, t, a, n) {
              return this.affordGeometricSeries_core(
                new r(e),
                new r(t),
                new r(a),
                n,
              );
            },
          },
          {
            key: "affordGeometricSeries_core",
            value: function (r, e, t, a) {
              var n =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4],
                i = e.mul(t.pow(a));
              return r
                .div(i)
                .mul(t.sub(1))
                .add(1)
                .clampMin(n ? 1 : -1 / 0)
                .log10()
                .div(t.log10())
                .floor();
            },
          },
          {
            key: "sumGeometricSeries",
            value: function (e, t, a, n) {
              return this.sumGeometricSeries_core(e, new r(t), new r(a), n);
            },
          },
          {
            key: "sumGeometricSeries_core",
            value: function (e, t, a, n) {
              return t
                .mul(a.pow(n))
                .mul(r.sub(1, a.pow(e)))
                .div(r.sub(1, a));
            },
          },
          {
            key: "affordArithmeticSeries",
            value: function (e, t, a, n) {
              return this.affordArithmeticSeries_core(
                new r(e),
                new r(t),
                new r(a),
                new r(n),
              );
            },
          },
          {
            key: "affordArithmeticSeries_core",
            value: function (r, e, t, a) {
              var n = e.add(a.mul(t)).sub(t.div(2)),
                i = n.pow(2);
              return n
                .neg()
                .add(i.add(t.mul(r).mul(2)).sqrt())
                .div(t)
                .floor();
            },
          },
          {
            key: "sumArithmeticSeries",
            value: function (e, t, a, n) {
              return this.sumArithmeticSeries_core(
                new r(e),
                new r(t),
                new r(a),
                new r(n),
              );
            },
          },
          {
            key: "sumArithmeticSeries_core",
            value: function (r, e, t, a) {
              var n = e.add(a.mul(t));
              return r.div(2).mul(n.mul(2).add(r.sub(1).mul(t)));
            },
          },
          {
            key: "tetrate",
            value: function (e, t) {
              var a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1;
              return new r(e).tetrate(t, a);
            },
          },
          {
            key: "tetrate_10",
            value: function (e) {
              return r.fromNumber(10).tetrate(e);
            },
          },
          {
            key: "iteratedlog",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 10;
              return new r(e).iteratedlog(t, a);
            },
          },
          {
            key: "oBase",
            value: function (r) {
              return r[0].repeat;
            },
          },
          {
            key: "operatorLevel",
            value: function (r) {
              return null == r
                ? [0, 0, 0]
                : Array.isArray(r)
                  ? n(r)
                  : [r.megota, r.expans, r.arrow];
            },
          },
          {
            key: "cmpOperatorLevel",
            value: function (r, e) {
              return y(this.operatorLevel(r), this.operatorLevel(e));
            },
          },
          {
            key: "higherOmega",
            value: function (r) {
              return (
                this.operatorLevel(r),
                isFinite(r.expans) && isFinite(r.arrow)
                  ? [r.megota, r.expans, 1 / 0]
                  : this.operatorLevel(r)
              );
            },
          },
          {
            key: "omegacollect",
            value: function (e) {
              var t;
              function a(r) {
                (e[1].arrow++,
                  (e[0].repeat = e[1].repeat + Math.log10(r)),
                  (e[1].repeat = 1));
              }
              for (var n = 1e6; n--; ) {
                var i = r.oBase(e);
                if (i >= 10)
                  ((e[0].repeat = Math.log10(i)),
                    r.opSetOperator(
                      e,
                      r.opGetOperator(e, 1, 1, 1) + 1,
                      1,
                      1,
                      1,
                    ));
                else {
                  if (
                    e.length <= 2 &&
                    1 ==
                      (null === (t = e[1]) || void 0 === t ? void 0 : t.repeat)
                  )
                    return e;
                  var o =
                    this.cmpOperatorLevel(this.higherOmega(e[1]), e[2]) <= 0;
                  if (
                    o &&
                    1 == e[1].repeat &&
                    isFinite(e[1].arrow) &&
                    e[1].arrow >= 3
                  ) {
                    ((e[0].repeat =
                      e[1].arrow - 1 + Math.log(e[0].repeat / 2) / Math.log(5)),
                      (e[1] = p(1, 1 / 0, e[1].expans, e[1].megota)),
                      q({ array: e }));
                    continue;
                  }
                  if (isFinite(e[1].arrow)) {
                    (e[1].repeat >= 2 || (o && e[1].arrow < 3) || 1 !== i
                      ? a(i)
                      : 1 ==
                          this.cmpOperatorLevel(this.higherOmega(e[1]), e[2]) &&
                        (e[1].arrow = e[2].arrow),
                      q({ array: e }));
                    continue;
                  }
                  if (!isFinite(e[1].arrow)) {
                    var u = e[1].repeat + Math.log10(i);
                    ((e[1] = p(1, 1, e[1].expans + 1, e[1].megota)),
                      (e[0].repeat = u),
                      q({ array: e }));
                    continue;
                  }
                }
              }
              return e;
            },
          },
          {
            key: "arrow",
            value: function (e, t, a) {
              return new r(e).arrow(t)(a);
            },
          },
          {
            key: "arrFrac",
            value: function (e, t) {
              if (new r(t).lt(2)) return r.pentate(e, t);
              var a = new r(e),
                n = new r(t);
              return new r(a).arrow(n.floor().add(1))(
                a.div(2).pow(n.sub(n.floor())).mul(2),
              );
            },
          },
          {
            key: "arrw2Frac",
            value: function (e, t) {
              if (new r(t).lt(2)) return new r(e).expansionArrow(3)(t);
              var a = new r(e),
                n = new r(t);
              return new r(a).expansionArrow(n.floor().add(1))(
                a.div(2).pow(n.sub(n.floor())).mul(2),
              );
            },
          },
          {
            key: "arrowMSI",
            value: function (e) {
              return new r("10{".concat(e, "}").concat(s));
            },
          },
          {
            key: "arrowexpansMSI",
            value: function (e) {
              return new r("10{".concat(e, ",2}").concat(s));
            },
          },
          {
            key: "hyper",
            value: function (e) {
              var t = new r(e);
              return t.eq(0)
                ? function (e, t) {
                    return new r(t).eq(0) ? new r(e) : new r(e).add(1);
                  }
                : t.eq(1)
                  ? r.add
                  : t.eq(2)
                    ? r.mul
                    : t.eq(3)
                      ? r.pow
                      : function (e, a) {
                          return new r(e).arrow(t.sub(2))(a);
                        };
            },
          },
          {
            key: "pentate",
            value: function (e, t, a) {
              return new r(e).arrow(3)(t, a);
            },
          },
          {
            key: "hexate",
            value: function (e, t, a) {
              return new r(e).arrow(4)(t, a);
            },
          },
          {
            key: "pent",
            value: function (e, t, a) {
              return new r(e).arrow(3)(t, a);
            },
          },
          {
            key: "penta_log",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 10;
              return new r(e).anyarrow_log(3)(t);
            },
          },
          {
            key: "expansion",
            value: function (e, t) {
              return new r(e).expansion(t);
            },
          },
          {
            key: "multiExpansion",
            value: function (e, t) {
              return new r(e).multiExpansion(t);
            },
          },
          {
            key: "powerExpansion",
            value: function (e, t) {
              return new r(e).powerExpansion(t);
            },
          },
          {
            key: "BEAF",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              function n(e) {
                return void 0 !== t[e] && null !== t[e]
                  ? new r(t[e])
                  : new r(1);
              }
              return n(0).eq(1)
                ? new r(1)
                : n(1).eq(1)
                  ? new r(n(0))
                  : (n(5).eq(2) &&
                        (n(4).gte(2) || n(3).gte(2) || n(2).gte(2))) ||
                      0 !==
                        t
                          .slice(6)
                          .map(function (e) {
                            return new r(e);
                          })
                          .filter(function (r) {
                            return r.gt(1);
                          }).length
                    ? r.POSITIVE_INFINITY
                    : r.BEAF_core(n(0), n(1), n(2), n(3), n(4), n(5));
            },
          },
          {
            key: "BEAF_core",
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1,
                o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 1,
                u =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 1,
                l =
                  arguments.length > 6 && void 0 !== arguments[6]
                    ? arguments[6]
                    : 0,
                f = new r(e),
                h = new r(t);
              function g(e) {
                var t;
                return new r(
                  null !== (t = [n, i, o, u][e]) && void 0 !== t ? t : 1,
                );
              }
              if (f.eq(1)) return new r(1);
              if (h.eq(1)) return new r(f);
              if (h.isZero()) return new r(1);
              if (f.lt(0)) {
                if (r.throwErrorOnResultNaN) throw new Error("NaN");
                return r.NaN;
              }
              if (new r(u).gte(3)) return r.POSITIVE_INFINITY;
              if (g(0).eq(0) && g(1).eq(1) && g(2).eq(1)) return f.mul(h);
              if (g(0).eq(1) && g(1).eq(1) && g(2).eq(1)) return f.pow(h);
              if (g(0).eq(2) && g(1).eq(1) && g(2).eq(1) && g(3).eq(1))
                return f.tetrate(h);
              if (g(1).eq(1) && g(2).eq(1) && g(3).eq(1))
                return f.arrow(g(0))(h);
              if (g(1).eq(2) && g(2).eq(1) && g(3).eq(1))
                return f.expansionArrow(g(0))(h);
              var c = g(0).toNumber(),
                y = g(1),
                v = g(2),
                N = g(3);
              if (N.eq(2)) {
                if (1 != c) return r.POSITIVE_INFINITY;
                if (y.neq(1)) return r.POSITIVE_INFINITY;
                if (v.neq(1)) return r.POSITIVE_INFINITY;
                if (h.gte(s)) return r.POSITIVE_INFINITY;
                var m = new r(10);
                return ((m.layer = h.toNumber()), m.normalize(), m);
              }
              function w(r, e, t) {
                return 0 == r && e > 1
                  ? [1 / 0, e - 1, t]
                  : 0 == r && 1 == e && t > 1
                    ? [1, 1 / 0, t - 1]
                    : [r, e, t];
              }
              if (v.gt(s)) {
                var b = new r(v);
                return (b.layer++, b.normalize(), b);
              }
              function d(r) {
                return isFinite(r) ? r.toString() : "!";
              }
              function O(r, e, t) {
                var n = a(w(r, e, t), 3),
                  i = n[0],
                  o = n[1],
                  u = n[2];
                return "10{"
                  .concat(d(i), ",")
                  .concat(d(o), ",")
                  .concat(u, "}")
                  .concat(s);
              }
              var E = f,
                I = new r(g(0)),
                k = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    a = r.beafFuncMap.get(
                      ""
                        .concat(E.toString(), " ")
                        .concat(c.toString(), " ")
                        .concat(y.toString(), " ")
                        .concat(v.toString(), " ")
                        .concat(N.toString(), " ")
                        .concat(e.toString(), " ")
                        .concat(t),
                    );
                  if (a) return a;
                  var n,
                    i = new r(e);
                  if (E.isNaN() || i.isNaN()) return r.NaN;
                  if (i.lt(r.ZERO)) return r.NaN;
                  if (E.eq(r.ZERO)) {
                    if (i.eq(r.ONE)) return r.ZERO;
                    if (r.throwErrorOnResultNaN) throw new Error("NaN");
                    return r.NaN;
                  }
                  if (E.eq(r.ONE)) return r.ONE;
                  if (i.eq(r.ZERO)) return r.ONE;
                  if (i.eq(r.ONE)) return E;
                  if (I.eq(0))
                    return r.BEAF_core(E, E, h, y.sub(1), v, u, t + 1);
                  if (y.eq(0))
                    return r.BEAF_core(E, E, E, h, v.sub(1), u, t + 1);
                  if (v.eq(0))
                    return r.BEAF_core(E, E, E, E, y, new r(u).sub(1), t + 1);
                  if (v.gt(s)) throw new Error("Not implemeneted");
                  if (y.gt(s))
                    return (
                      (n = new r(y)).setOperator(
                        n.getOperator(1, 1 / 0, v.toNumber()) + 1,
                        1,
                        1 / 0,
                        v.toNumber(),
                      ),
                      n
                    );
                  if (I.gt(r.MSI))
                    return (
                      (n = I.clone()).setOperator(
                        n.getOperator(1 / 0, y.toNumber(), v.toNumber()) + 1,
                        1 / 0,
                        y.toNumber(),
                        v.toNumber(),
                      ),
                      n
                    );
                  var o = I.toNumber();
                  if (i.eq(2)) return r.BEAF_core(E, E, o - 1, y, v, u, t + 1);
                  if (E.max(i).gt(O(o + 1, y.toNumber(), v.toNumber())))
                    return E.max(i);
                  if (E.gt(O(o + 1, y.toNumber(), v.toNumber())) || i.gt(s)) {
                    E.gt(O(o, y.toNumber(), v.toNumber()))
                      ? ((n = E.clone()).setOperator(
                          n.getOperator(o, y.toNumber(), v.toNumber()) - 1,
                          o,
                          y.toNumber(),
                          v.toNumber(),
                        ),
                        n.normalize())
                      : (n = E.gt(O(o - 1, y.toNumber(), v.toNumber()))
                          ? new r(
                              E.getOperator(o - 1, y.toNumber(), v.toNumber()),
                            )
                          : r.ZERO);
                    var l = n.add(i);
                    return (
                      l.setOperator(
                        l.getOperator(o, y.toNumber(), v.toNumber()) + 1,
                        o,
                        y.toNumber(),
                        v.toNumber(),
                      ),
                      l.normalize(),
                      l
                    );
                  }
                  if (t >= r.maxOps + 10)
                    return new r({
                      small: !1,
                      sign: 1,
                      layer: 0,
                      array: [p(10, 0), p(1, o, y.toNumber(), v.toNumber())],
                    });
                  var f = i.toNumber(),
                    g = Math.floor(f),
                    m = I.sub(r.ONE);
                  n = r.BEAF_core(E, f - g, m, y, v, N, t + 1);
                  for (
                    var w = 0, b = O(o - 1, y.toNumber(), v.toNumber());
                    0 !== g && n.lt(b) && w < 100;
                    w++
                  )
                    g > 0 && ((n = r.BEAF_core(E, n, m, y, v, N, t + 1)), --g);
                  return (
                    100 == w && (g = 0),
                    n.setOperator(
                      n.getOperator(o - 1, y.toNumber(), v.toNumber()) + g,
                      o - 1,
                      y.toNumber(),
                      v.toNumber(),
                    ),
                    n.normalize(),
                    n
                  );
                })(h, l);
              return (
                l < r.maxOps + 10 &&
                  r.beafFuncMap.set(
                    ""
                      .concat(E.toString(), " ")
                      .concat(c.toString(), " ")
                      .concat(y.toString(), " ")
                      .concat(v.toString(), " ")
                      .concat(N.toString(), " ")
                      .concat(h.toString(), " ")
                      .concat(l),
                    k,
                  ),
                k
              );
            },
          },
          {
            key: "abs",
            value: function (e) {
              return new r(e).abs();
            },
          },
          {
            key: "max",
            value: function () {
              for (
                var e = r.NEGATIVE_INFINITY,
                  t = arguments.length,
                  a = new Array(t),
                  n = 0;
                n < t;
                n++
              )
                a[n] = arguments[n];
              for (var i = 0; i < a.length; i++)
                e.lt(a[i]) && (e = new r(a[i]));
              return e;
            },
          },
          {
            key: "min",
            value: function () {
              for (
                var e = r.POSITIVE_INFINITY,
                  t = arguments.length,
                  a = new Array(t),
                  n = 0;
                n < t;
                n++
              )
                a[n] = arguments[n];
              for (var i = 0; i < a.length; i++)
                e.gt(a[i]) && (e = new r(a[i]));
              return e;
            },
          },
          {
            key: "clampMin",
            value: function () {
              return r.max.apply(r, arguments);
            },
          },
          {
            key: "clampMax",
            value: function () {
              return r.min.apply(r, arguments);
            },
          },
          {
            key: "eq",
            value: function (e, t) {
              return new r(e).eq(t);
            },
          },
          {
            key: "equals",
            value: function (e, t) {
              return new r(e).eq(t);
            },
          },
          {
            key: "neq",
            value: function (e, t) {
              return new r(e).neq(t);
            },
          },
          {
            key: "notEquals",
            value: function (e, t) {
              return new r(e).notEquals(t);
            },
          },
          {
            key: "lt",
            value: function (e, t) {
              return new r(e).lt(t);
            },
          },
          {
            key: "gt",
            value: function (e, t) {
              return new r(e).gt(t);
            },
          },
          {
            key: "lte",
            value: function (e, t) {
              return new r(e).lte(t);
            },
          },
          {
            key: "gte",
            value: function (e, t) {
              return new r(e).gte(t);
            },
          },
          {
            key: "rec",
            value: function (e) {
              return new r(e).rec();
            },
          },
          {
            key: "recip",
            value: function (e) {
              return new r(e).rec();
            },
          },
          {
            key: "reciprocate",
            value: function (e) {
              return new r(e).rec();
            },
          },
          {
            key: "floor",
            value: function (e) {
              return new r(e).floor();
            },
          },
          {
            key: "ceil",
            value: function (e) {
              return new r(e).ceil();
            },
          },
          {
            key: "round",
            value: function (e) {
              return new r(e).round();
            },
          },
          {
            key: "trunc",
            value: function (e) {
              return new r(e).trunc();
            },
          },
          {
            key: "sign",
            value: function (e) {
              return new r(e).sign;
            },
          },
          {
            key: "isNaN",
            value: function (e) {
              return new r(e).isNaN();
            },
          },
          {
            key: "opGetOperatorIndex",
            value: function (r, e) {
              for (
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 1,
                  n = 0;
                n < r.length;
                n++
              ) {
                var i = y([r[n].megota, r[n].expans, r[n].arrow], [a, t, e]);
                if (0 == i) return n;
                if (1 == i) return n - 0.5;
              }
              return r.length - 0.5;
            },
          },
          {
            key: "opGetOperator",
            value: function (e, t) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1,
                i = r.opGetOperatorIndex(e, t, a, n);
              return e[i] ? e[i].repeat : 0;
            },
          },
          {
            key: "opSetOperator",
            value: function (e, t, a) {
              var n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1,
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 1,
                o = r.opGetOperatorIndex(e, a, n, i);
              return e[o]
                ? ((e[o].repeat = t), 0 == e[o].repeat && (e.splice(o, 1), !0))
                : (e.splice(Math.ceil(o), 0, {
                    arrow: a,
                    expans: n,
                    megota: i,
                    valuereplaced: n === 1 / 0 ? 1 : a == 1 / 0 ? 0 : -1,
                    repeat: t,
                  }),
                  !0);
            },
          },
          {
            key: "fromBigInt",
            value: function (e) {
              var t = new r(0),
                a = e < BigInt(0) ? -e : e;
              return (
                (t.sign = e < BigInt(0) ? -1 : 1),
                (t.array = a <= s ? [p(Number(a))] : [p(R(a)), p(1, 1)]),
                t.normalize(),
                t
              );
            },
          },
          {
            key: "fromNumber",
            value: function (e) {
              var t = new r();
              if (
                (t.resetFromObject({
                  array: [{ arrow: 0, expans: 1, megota: 1, repeat: NaN }],
                  small: !1,
                  layer: 0,
                  sign: 0,
                }),
                Number.isNaN(e))
              )
                return t;
              if (e < 0) t.sign = -1;
              else {
                if (0 == e)
                  return (
                    (t.sign = 0),
                    (t.small = !0),
                    (t.array = [p(1 / 0, 0)]),
                    t
                  );
                e > 0 && (t.sign = 1);
              }
              var a = Math.abs(e);
              return (
                a == 1 / 0
                  ? (t.array = [p(1 / 0, 0)])
                  : a >= f && a < 1
                    ? ((t.small = !0), (t.array = [p(1 / a, 0)]))
                    : a < f
                      ? ((t.small = !0),
                        (t.array = [p(-Math.log10(a), 0), p(1, 1)]))
                      : a <= s
                        ? (t.array = [p(a, 0)])
                        : (t.setOperator(Math.log10(a), 0),
                          (t.array = [p(Math.log10(a), 0), p(1, 1)])),
                t
              );
            },
          },
          {
            key: "fromString",
            value: function (e) {
              if (r.usingBreakEternityLikeFromString && c.test(e)) {
                var t = e.match(/(e+-)(\d+(.\d+)?)/);
                if (t) {
                  var a = t[1].length;
                  e = "/" + "e".repeat(a - 1) + t[2];
                }
              }
              return this.fromString_core(e);
            },
          },
          {
            key: "fromString_core",
            value: function (e) {
              var t,
                a,
                n,
                i,
                o,
                u,
                f,
                h = new r(NaN);
              if ((e.startsWith("PN") && (e = e.substring(2)), "NaN" == e))
                return r.NaN;
              if (
                (r.vanilla ||
                  ((e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(
                    /J\^(\d+)/g,
                    "(10{!})^$1",
                  )).replace(/J/g, "10{!}")).replace(
                    /K\^(\d+)/g,
                    "(10{1,2})^$1",
                  )).replace(/K/g, "10{1,2}")).replace(
                    /L\^(\d+)/g,
                    "(10{2,2})^$1",
                  )).replace(/L/g, "10{2,2}")).replace(
                    /M\^(\d+)/g,
                    "(10{!,2})^$1",
                  )).replace(/M/g, "10{!,2}")).replace(
                    /N\^(\d+)/g,
                    "(10{1,!})^$1",
                  )).replace(/N/g, "10{1,!}")),
                  /^.*e-.*(e|\^).*/.test(e) &&
                    (e = "/10^" + e.substring(e.indexOf("e-")))),
                !isNaN(Number(e)))
              ) {
                var c = Number(e),
                  y = !1;
                if (
                  (0 == c
                    ? /^((0)|(0*\.0+e\d+)|(0*\.0*))$/.test(e) && (y = !0)
                    : (y = !0),
                  !y)
                ) {
                  var N = e.search(/e/),
                    m = e.substring((-1 == N ? e.length : N) + 1),
                    w = e.substring(0, -1 == N ? void 0 : N),
                    b = [0, 0];
                  if (((b[1] = Number(m || "0")), Number(w) >= 1)) {
                    var d = w.length >= 17 ? v(w) : Math.log10(Number(w)),
                      O = Math.floor(d),
                      E = d - O;
                    ((b[0] = Math.pow(10, E)), (b[1] += O));
                  } else {
                    var I = (f = w.match(/^0\.(0*)[1-9]/)) ? f[1].length : 0;
                    ((w =
                      (w = w.substring(w.search(/[1-9]/))).charAt(0) +
                      "." +
                      w.substring(1)),
                      (I += 1),
                      (b[0] = Number(w)),
                      (b[1] += -I));
                  }
                  return r
                    .pow(10, -b[1] - 1)
                    .mul(10 * Math.pow(b[0], -1))
                    .rec();
                }
                if (isFinite(c) && y) return (h = r.fromNumber(Number(e)));
              }
              if (
                -1 !== e.indexOf("l") &&
                -1 !== e.indexOf("s") &&
                -1 !== e.indexOf("a")
              ) {
                var k = (function (r) {
                  var e = r.match(/l(\d+)\s+s(\d+)\s+a(\[.*\])/);
                  try {
                    if (e)
                      return {
                        lValue: parseInt(e[1]),
                        sValue: parseInt(e[2]),
                        array: JSON.parse(e[3]),
                      };
                  } catch (r) {
                    return null;
                  }
                  return null;
                })(e);
                if (!k || (0 !== k.sValue && 1 !== k.sValue && -1 !== k.sValue))
                  throw "[PowiainaNum 0.2 error]malformed input: " + e;
                return (
                  ((h = r.fromObject(k.array)).layer = k.lValue),
                  (h.sign = k.sValue),
                  (h.small = !1),
                  h.normalize(),
                  h
                );
              }
              if (
                (r.vanilla ||
                  (e = e
                    .replace(/\(e\^(\d+)\)/g, "(10^)^$1 ")
                    .replace(/(\d+)[Pp][Tt]/g, "(10^)^$1 ")),
                r.vanilla ||
                  (e = (function (r) {
                    for (var e = "", t = !1, a = 0; a < r.length; a++) {
                      var n = r[a];
                      "{" === n
                        ? ((t = !0), (e += n))
                        : "}" === n
                          ? ((t = !1), (e += n))
                          : "," === n
                            ? t && (e += n)
                            : (e += n);
                    }
                    return e;
                  })(e)),
                !g.test(e))
              )
                throw "[PowiainaNum 0.2 error]malformed input: " + e;
              var x = !1,
                M = !1;
              if ("-" == e[0] || "+" == e[0]) {
                var q = e.search(/[^-\+]/);
                ((x =
                  (null !==
                    (a =
                      null === (t = e.substring(0, q).match(/-/g)) ||
                      void 0 === t
                        ? void 0
                        : t.length) && void 0 !== a
                    ? a
                    : 0) %
                    2 ==
                  1),
                  (e = e.substring(q)));
              }
              if ("/" == e[0]) {
                var S = e.search(/[^\/]/);
                ((M =
                  (null !==
                    (i =
                      null === (n = e.substring(0, S).match(/\//g)) ||
                      void 0 === n
                        ? void 0
                        : n.length) && void 0 !== i
                    ? i
                    : 0) %
                    2 ==
                  1),
                  (e = e.substring(S)));
              }
              if ("NaN" == e) h.array = [p(NaN)];
              else if ("Infinity" == e) h.array = [p(1 / 0)];
              else {
                var _, R, F, T;
                for (
                  h.sign = 1,
                    h.array = [p(0)],
                    "P" == e[0] &&
                      ("^" == e[1]
                        ? ((_ = e.substring(2).search(/[^0-9]/) + 2),
                          (h.layer = Number(e.substring(2, _))),
                          (e = e.substring(_ + 1)))
                        : ((_ = e.search(/[^P]/)),
                          (h.layer = _),
                          (e = e.substring(_))));
                  e && /^(\(?10[\^\{])/.test(e);
                ) {
                  var A = void 0,
                    Z = void 0,
                    P = void 0;
                  if (("(" == e[0] && (e = e.substring(1)), "^" == e[2]))
                    ((A = _ = e.substring(2).search(/[^\^]/)), (R = _ + 2));
                  else {
                    _ = e.indexOf("}");
                    var B = e.substring(3, _).split(",");
                    ((A = Number("!" == B[0] ? 1 / 0 : B[0])),
                      (Z = Number(
                        null !== (o = "!" == B[1] ? 1 / 0 : B[1]) &&
                          void 0 !== o
                          ? o
                          : 1,
                      )),
                      (P = Number(null !== (u = B[2]) && void 0 !== u ? u : 1)),
                      (R = _ + 1));
                  }
                  (")" == (e = e.substring(R))[0]
                    ? ((_ = e.indexOf(" ")),
                      (F = Number(e.substring(2, _))),
                      (e = e.substring(_ + 1)))
                    : (F = 1),
                    1 == A && 1 == Z && 1 == P
                      ? h.array.length >= 2 &&
                        1 == h.array[1].arrow &&
                        1 == h.array[1].expans &&
                        1 == h.array[1].megota
                        ? (h.array[1].repeat += F)
                        : h.array.splice(1, 0, p(F, 1, Z, P))
                      : 2 == A && 1 == Z && 1 == P
                        ? ((_ =
                            h.array.length >= 2 &&
                            1 == h.array[1].arrow &&
                            1 == h.array[1].expans &&
                            1 == h.array[1].megota
                              ? h.array[1].repeat
                              : 0),
                          (R = h.array[0].repeat) >= 1e10 && ++_,
                          R >= 10 && ++_,
                          (h.array[0].repeat = _),
                          h.array.length >= 2 &&
                            1 == h.array[1].arrow &&
                            1 == h.array[1].expans &&
                            1 == h.array[1].megota &&
                            h.array.splice(1, 1),
                          (T = h.getOperatorIndex(2)),
                          Number.isInteger(T)
                            ? (h.array[T].repeat += F)
                            : h.array.splice(Math.ceil(T), 0, p(F, 2, Z, P)))
                        : isFinite(A) && 1 == Z && 1 == P
                          ? ((_ = h.getOperator(A - 1)),
                            (R = h.getOperator(A - 2)) >= 10 && ++_,
                            (T = h.getOperatorIndex(A)),
                            h.array.splice(1, Math.ceil(T) - 1),
                            (h.array[0].repeat = _),
                            Number.isInteger(T)
                              ? (h.array[1].repeat += F)
                              : h.array.splice(1, 0, p(F, A, Z, P)))
                          : h.array.splice(1, 0, p(F, A, Z, P)));
                }
                ((_ = e.split(/[Ee]/)), (R = [h.array[0].repeat, 0]), (F = 1));
                for (var V = _.length - 1; V >= 0; --V) {
                  R[0] < l && 0 === R[1]
                    ? (R[0] = Math.pow(10, F * R[0]))
                    : -1 == F
                      ? (0 === R[1]
                          ? (R[0] = Math.pow(10, F * R[0]))
                          : 1 == R[1] && R[0] <= Math.log10(Number.MAX_VALUE)
                            ? (R[0] = Math.pow(10, F * Math.pow(10, R[0])))
                            : (R[0] = 0),
                        (R[1] = 0))
                      : R[1]++;
                  var G = _[V].indexOf("."),
                    z = -1 == G ? _[V].length : G;
                  (0 === R[1]
                    ? z >= 17
                      ? ((R[0] = Math.log10(R[0]) + v(_[V].substring(0, z))),
                        (R[1] = 1))
                      : _[V] && (R[0] *= Number(_[V]))
                    : ((T =
                        z >= 17
                          ? v(_[V].substring(0, z))
                          : _[V]
                            ? Math.log10(Number(_[V]))
                            : 0),
                      1 == R[1]
                        ? (R[0] += T)
                        : 2 == R[1] &&
                          R[0] < l + Math.log10(T) &&
                          (R[0] += Math.log10(
                            1 + Math.pow(10, Math.log10(T) - R[0]),
                          ))),
                    R[0] < l && R[1]
                      ? ((R[0] = Math.pow(10, R[0])), R[1]--)
                      : R[0] > s && ((R[0] = Math.log10(R[0])), R[1]++));
                }
                ((h.array[0].repeat = R[0]),
                  R[1] &&
                    (h.array.length >= 2 &&
                    1 == h.array[1].arrow &&
                    1 == h.array[1].expans &&
                    1 == h.array[1].megota
                      ? (h.array[1].repeat += R[1])
                      : h.array.splice(1, 0, p(R[1], 1, 1, 1))));
              }
              return (
                x && (h.sign *= -1),
                M && (h.small = !h.small),
                h.normalize(),
                h.normalize(),
                h
              );
            },
          },
          {
            key: "fromObject",
            value: function (e) {
              var t = new r();
              if (
                (t.resetFromObject({
                  array: [{ arrow: 0, expans: 1, megota: 1, repeat: NaN }],
                  small: !1,
                  layer: 0,
                  sign: 0,
                }),
                (t.array = []),
                (function (r) {
                  if (!Array.isArray(r)) return !1;
                  for (var e = 0; e < r.length; e++) {
                    var t = r[e];
                    if (!Array.isArray(t)) return !1;
                    if (!w(t)) return !1;
                    if (!b(t)) return !1;
                  }
                  return !0;
                })(e))
              ) {
                for (var a = 0; a < e.length; a++)
                  t.array[a] = {
                    arrow: e[a][0],
                    expans: 1,
                    megota: 1,
                    repeat: e[a][1],
                  };
                return ((t.small = !1), (t.sign = 1), (t.layer = 0), t);
              }
              if (
                (function (r) {
                  return (
                    null !== r &&
                    "object" === o(r) &&
                    "mag" in r &&
                    "number" == typeof r.mag &&
                    "layer" in r &&
                    "number" == typeof r.layer &&
                    "sign" in r &&
                    "number" == typeof r.sign
                  );
                })(e)
              ) {
                var n = e,
                  i = n.mag < 0,
                  u = new r(1);
                return (
                  n.layer >= s
                    ? (u.array = [p(Math.log10(n.layer)), p(1, 1), p(1, 2)])
                    : n.layer >= 1
                      ? (u.array = [p(Math.abs(n.mag)), p(n.layer, 1)])
                      : (u.array = [p(n.mag)]),
                  (u.small = i),
                  u.normalize(),
                  u
                );
              }
              if (
                (function (r) {
                  if (!Array.isArray(r)) return !1;
                  if ("number" != typeof r[0]) return !1;
                  for (var e = 1; e < r.length; e++) {
                    var t = r[e];
                    if (!Array.isArray(t)) return !1;
                    if (!O(t)) return !1;
                    if (!E(t) && !I(t) && !k(t)) return !1;
                  }
                  return !0;
                })(e)
              ) {
                var l = e;
                t.array[0] = p(l[0]);
                for (var f = 1; f < l.length; f++) {
                  var h = l[f];
                  t.array[1] = p(h[1], d(h[0]), d(h[2]), h[3]);
                }
                return ((t.small = !1), (t.sign = 1), (t.layer = 0), t);
              }
              return (t.resetFromObject(e), t);
            },
          },
          {
            key: "grahalFunction",
            value: function (e) {
              var t = new r(e);
              return !t.isInt() || t.lt(0) || t.isNaN()
                ? r.NaN
                : t.eq(1)
                  ? new r("10^^^(10^)^7625597484984 3638334640023.7783")
                  : t.lte(s)
                    ? new r(
                        "(10{!})^".concat(
                          t.toNumber(),
                          " 10^^^(10^)^7625597484984 3638334640023.7783",
                        ),
                      )
                    : r.BEAF(3, t, 1, 2);
            },
          },
        ],
      );
    })();
  ((A.ZERO = new A({ array: T.ZERO, small: !0, layer: 0, sign: 0 })),
    (A.ONE = new A({
      array: [{ arrow: 0, expans: 1, megota: 1, repeat: 1 }],
      small: !1,
      layer: 0,
      sign: 1,
    })),
    (A.MSI = new A(s)),
    (A.MSI_REC = (((F = new A(s)).small = !0), F)),
    (A.E_MSI = new A({
      array: [
        { arrow: 0, expans: 1, megota: 1, repeat: s },
        { arrow: 1, expans: 1, megota: 1, repeat: 1 },
      ],
      small: !1,
      layer: 0,
      sign: 1,
    })),
    (A.EE_MSI = new A({
      array: [
        { arrow: 0, expans: 1, megota: 1, repeat: s },
        { arrow: 1, expans: 1, megota: 1, repeat: 2 },
      ],
      small: !1,
      layer: 0,
      sign: 1,
    })),
    (A.E_MSI_REC = new A({
      array: [
        { arrow: 0, expans: 1, megota: 1, repeat: s },
        { arrow: 1, expans: 1, megota: 1, repeat: 1 },
      ],
      small: !0,
      layer: 0,
      sign: 1,
    })),
    (A.TETRATED_MSI = new A({
      array: [
        { arrow: 0, expans: 1, megota: 1, repeat: 1e10 },
        { arrow: 1, expans: 1, megota: 1, repeat: s - 2 },
      ],
      small: !1,
      layer: 0,
      sign: 1,
    })),
    (A.PENTATED_MSI = new A({
      array: [
        { arrow: 0, expans: 1, megota: 1, repeat: 10 },
        { arrow: 2, expans: 1, megota: 1, repeat: s - 1 },
      ],
      small: !1,
      layer: 0,
      sign: 1,
    })),
    (A.TRITRI = new A({
      small: !1,
      layer: 0,
      sign: 1,
      array: [p(3638334640023.7783, 0, 1, 1), p(7625587484984, 1, 1, 1)],
    })),
    (A.GRAHAMS_NUMBER = new A(
      "(10{!})^63 10^^^(10^)^7625597484984 3638334640023.7783",
    )),
    (A.POSITIVE_INFINITY = new A(1 / 0)),
    (A.NEGATIVE_INFINITY = new A(-1 / 0)),
    (A.NaN = new A({
      array: [{ arrow: 0, expans: 1, megota: 1, repeat: NaN }],
      small: !1,
      layer: 0,
      sign: 0,
    })),
    (A.E = new A(Math.E)),
    (A.LN2 = new A(Math.LN2)),
    (A.LN10 = new A(Math.LN10)),
    (A.LOG2E = new A(Math.LOG2E)),
    (A.LOG10E = new A(Math.LOG10E)),
    (A.PI = new A(Math.PI)),
    (A.SQRT1_2 = new A(Math.SQRT1_2)),
    (A.SQRT2 = new A(Math.SQRT2)),
    (A.maxOps = 100),
    (A.POW_2_44_MOD_PI = 1.701173079953),
    (A.arrowFuncMap = new Map()),
    (A.beafFuncMap = new Map()),
    (A.usingBreakEternityLikeFromString = !0),
    (A.blankArgumentConstructorReturnZero = !1),
    (A.throwErrorOnResultNaN = !1),
    (A.vanilla = !1),
    (r.arraySortFunction = M),
    (r.default = A),
    (r.mergeSameArrays = q),
    (r.newOperator = p),
    Object.defineProperty(r, "__esModule", { value: !0 }));
});
window.ExpantaNum = PowiainaNum.default;
