// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ce = {}, Lr = [], Vt = () => {
}, ps = () => !1, Hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $n = (e) => e.startsWith("onUpdate:"), Qe = Object.assign, Hi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ja = Object.prototype.hasOwnProperty, _e = (e, t) => ja.call(e, t), ee = Array.isArray, cr = (e) => un(e) === "[object Map]", xr = (e) => un(e) === "[object Set]", bo = (e) => un(e) === "[object Date]", ae = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", hs = (e) => (Te(e) || ae(e)) && ae(e.then) && ae(e.catch), ms = Object.prototype.toString, un = (e) => ms.call(e), Va = (e) => un(e).slice(8, -1), bs = (e) => un(e) === "[object Object]", $i = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jr = /* @__PURE__ */ Fi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Ba = /-\w/g, Pt = jn(
  (e) => e.replace(Ba, (t) => t.slice(1).toUpperCase())
), za = /\B([A-Z])/g, Cr = jn(
  (e) => e.replace(za, "-$1").toLowerCase()
), ys = jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = jn(
  (e) => e ? `on${ys(e)}` : ""
), jt = (e, t) => !Object.is(e, t), An = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, gs = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Vn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let yo;
const Bn = () => yo || (yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ji(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? Ga(n) : ji(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ue(e) || Te(e))
    return e;
}
const qa = /;(?![^(]*\))/g, Wa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
function Ga(e) {
  const t = {};
  return e.replace(Ka, "").split(qa).forEach((r) => {
    if (r) {
      const n = r.split(Wa);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ir(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ir(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Ya = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xa = /* @__PURE__ */ Fi(Ya);
function _s(e) {
  return !!e || e === "";
}
function Ja(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = ur(e[n], t[n]);
  return r;
}
function go(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < r.length; s++)
      if (!n[s] && ur(i, r[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    n[o] = 1;
  }
  return !0;
}
function ur(e, t) {
  if (e === t) return !0;
  let r = bo(e), n = bo(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Bt(e), n = Bt(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? Ja(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = cr(e), n = cr(t), r || n || (r = xr(e), n = xr(t), r || n))
      return r && n ? go(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), d = t.hasOwnProperty(s);
      if (l && !d || !l && d || !ur(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Za(e, t) {
  return e.findIndex((r) => ur(r, t));
}
const vs = (e) => !!(e && e.__v_isRef === !0), f = (e) => Ue(e) ? e : e == null ? "" : ee(e) || Te(e) && (e.toString === ms || !ae(e.toString)) ? vs(e) ? f(e.value) : JSON.stringify(e, Es, 2) : String(e), Es = (e, t) => vs(t) ? Es(e, t.value) : cr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ii(n, o) + " =>"] = i, r),
    {}
  )
} : xr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ii(r))
} : Bt(t) ? ii(t) : Te(t) && !ee(t) && !bs(t) ? String(t) : t, ii = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ge;
class Qa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ge && (Ge.active ? (this.parent = Ge, this.index = (Ge.scopes || (Ge.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, r = n.length; t < r; t++)
          n[t].pause();
      }
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, r = i.length; t < r; t++)
          i[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ge;
      try {
        return Ge = this, t();
      } finally {
        Ge = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ge, Ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ge === this)
        Ge = this.prevScope;
      else {
        let t = Ge;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (r = 0, n = i.length; r < n; r++)
          i[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function el() {
  return Ge;
}
let we;
const oi = /* @__PURE__ */ new WeakSet();
class Ts {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && (Ge.active ? Ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oi.has(this) && (oi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _o(this), Cs(this);
    const t = we, r = kt;
    we = this, kt = !0;
    try {
      return this.fn();
    } finally {
      As(this), we = t, kt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zi(t);
      this.deps = this.depsTail = void 0, _o(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? oi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ai(this) && this.run();
  }
  get dirty() {
    return Ai(this);
  }
}
let Ss = 0, Zr, Qr;
function xs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qr, Qr = e;
    return;
  }
  e.next = Zr, Zr = e;
}
function Vi() {
  Ss++;
}
function Bi() {
  if (--Ss > 0)
    return;
  if (Qr) {
    let t = Qr;
    for (Qr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Zr; ) {
    let t = Zr;
    for (Zr = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function As(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), zi(n), tl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ws(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ws(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ai(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = we, n = kt;
  we = e, kt = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || jt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    we = r, kt = n, As(e), e.flags &= -3;
  }
}
function zi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      zi(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function tl(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let kt = !0;
const Rs = [];
function Xt() {
  Rs.push(kt), kt = !1;
}
function Jt() {
  const e = Rs.pop();
  kt = e === void 0 ? !0 : e;
}
function _o(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = we;
    we = void 0;
    try {
      t();
    } finally {
      we = r;
    }
  }
}
let nn = 0;
class rl {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!we || !kt || we === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== we)
      r = this.activeLink = new rl(we, this), we.deps ? (r.prevDep = we.depsTail, we.depsTail.nextDep = r, we.depsTail = r) : we.deps = we.depsTail = r, Os(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = we.depsTail, r.nextDep = void 0, we.depsTail.nextDep = r, we.depsTail = r, we.deps === r && (we.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    Vi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Bi();
    }
  }
}
function Os(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Os(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const wi = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ Symbol(
  ""
), Ri = /* @__PURE__ */ Symbol(
  ""
), on = /* @__PURE__ */ Symbol(
  ""
);
function Je(e, t, r) {
  if (kt && we) {
    let n = wi.get(e);
    n || wi.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new qi()), i.map = n, i.key = r), i.track();
  }
}
function Kt(e, t, r, n, i, o) {
  const s = wi.get(e);
  if (!s) {
    nn++;
    return;
  }
  const l = (d) => {
    d && d.trigger();
  };
  if (Vi(), t === "clear")
    s.forEach(l);
  else {
    const d = ee(e), v = d && $i(r);
    if (d && r === "length") {
      const y = Number(n);
      s.forEach((E, k) => {
        (k === "length" || k === on || !Bt(k) && k >= y) && l(E);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && l(s.get(r)), v && l(s.get(on)), t) {
        case "add":
          d ? v && l(s.get("length")) : (l(s.get(Er)), cr(e) && l(s.get(Ri)));
          break;
        case "delete":
          d || (l(s.get(Er)), cr(e) && l(s.get(Ri)));
          break;
        case "set":
          cr(e) && l(s.get(Er));
          break;
      }
  }
  Bi();
}
function Rr(e) {
  const t = /* @__PURE__ */ ge(e);
  return t === e ? t : (Je(t, "iterate", on), /* @__PURE__ */ Ct(e) ? t : t.map(Lt));
}
function zn(e) {
  return Je(e = /* @__PURE__ */ ge(e), "iterate", on), e;
}
function Ht(e, t) {
  return /* @__PURE__ */ Zt(e) ? Fr(/* @__PURE__ */ Tr(e) ? Lt(t) : t) : Lt(t);
}
const nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return si(this, Symbol.iterator, (e) => Ht(this, e));
  },
  concat(...e) {
    return Rr(this).concat(
      ...e.map((t) => ee(t) ? Rr(t) : t)
    );
  },
  entries() {
    return si(this, "entries", (e) => (e[1] = Ht(this, e[1]), e));
  },
  every(e, t) {
    return zt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Ht(this, n)),
      arguments
    );
  },
  find(e, t) {
    return zt(
      this,
      "find",
      e,
      t,
      (r) => Ht(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return zt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zt(
      this,
      "findLast",
      e,
      t,
      (r) => Ht(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return zt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ai(this, "includes", e);
  },
  indexOf(...e) {
    return ai(this, "indexOf", e);
  },
  join(e) {
    return Rr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ai(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vr(this, "pop");
  },
  push(...e) {
    return Vr(this, "push", e);
  },
  reduce(e, ...t) {
    return vo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vo(this, "reduceRight", e, t);
  },
  shift() {
    return Vr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vr(this, "splice", e);
  },
  toReversed() {
    return Rr(this).toReversed();
  },
  toSorted(e) {
    return Rr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vr(this, "unshift", e);
  },
  values() {
    return si(this, "values", (e) => Ht(this, e));
  }
};
function si(e, t, r) {
  const n = zn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ct(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const il = Array.prototype;
function zt(e, t, r, n, i, o) {
  const s = zn(e), l = s !== e && !/* @__PURE__ */ Ct(e), d = s[t];
  if (d !== il[t]) {
    const E = d.apply(e, o);
    return l ? Lt(E) : E;
  }
  let v = r;
  s !== e && (l ? v = function(E, k) {
    return r.call(this, Ht(e, E), k, e);
  } : r.length > 2 && (v = function(E, k) {
    return r.call(this, E, k, e);
  }));
  const y = d.call(s, v, n);
  return l && i ? i(y) : y;
}
function vo(e, t, r, n) {
  const i = zn(e), o = i !== e && !/* @__PURE__ */ Ct(e);
  let s = r, l = !1;
  i !== e && (o ? (l = n.length === 0, s = function(v, y, E) {
    return l && (l = !1, v = Ht(e, v)), r.call(this, v, Ht(e, y), E, e);
  }) : r.length > 3 && (s = function(v, y, E) {
    return r.call(this, v, y, E, e);
  }));
  const d = i[t](s, ...n);
  return l ? Ht(e, d) : d;
}
function ai(e, t, r) {
  const n = /* @__PURE__ */ ge(e);
  Je(n, "iterate", on);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Gi(r[0]) ? (r[0] = /* @__PURE__ */ ge(r[0]), n[t](...r)) : i;
}
function Vr(e, t, r = []) {
  Xt(), Vi();
  const n = (/* @__PURE__ */ ge(e))[t].apply(e, r);
  return Bi(), Jt(), n;
}
const ol = /* @__PURE__ */ Fi("__proto__,__v_isRef,__isVue"), Ns = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
);
function sl(e) {
  Bt(e) || (e = String(e));
  const t = /* @__PURE__ */ ge(this);
  return Je(t, "has", e), t.hasOwnProperty(e);
}
class Ps {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? bl : Ms : o ? Is : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = ee(t);
    if (!i) {
      let d;
      if (s && (d = nl[r]))
        return d;
      if (r === "hasOwnProperty")
        return sl;
    }
    const l = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ze(t) ? t : n
    );
    if ((Bt(r) ? Ns.has(r) : ol(r)) || (i || Je(t, "get", r), o))
      return l;
    if (/* @__PURE__ */ Ze(l)) {
      const d = s && $i(r) ? l : l.value;
      return i && Te(d) ? /* @__PURE__ */ Ni(d) : d;
    }
    return Te(l) ? i ? /* @__PURE__ */ Ni(l) : /* @__PURE__ */ lr(l) : l;
  }
}
class ks extends Ps {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = ee(t) && $i(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Zt(o);
      if (!/* @__PURE__ */ Ct(n) && !/* @__PURE__ */ Zt(n) && (o = /* @__PURE__ */ ge(o), n = /* @__PURE__ */ ge(n)), !s && /* @__PURE__ */ Ze(o) && !/* @__PURE__ */ Ze(n))
        return v || (o.value = n), !0;
    }
    const l = s ? Number(r) < t.length : _e(t, r), d = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Ze(t) ? t : i
    );
    return t === /* @__PURE__ */ ge(i) && d && (l ? jt(n, o) && Kt(t, "set", r, n) : Kt(t, "add", r, n)), d;
  }
  deleteProperty(t, r) {
    const n = _e(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Kt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Bt(r) || !Ns.has(r)) && Je(t, "has", r), n;
  }
  ownKeys(t) {
    return Je(
      t,
      "iterate",
      ee(t) ? "length" : Er
    ), Reflect.ownKeys(t);
  }
}
class al extends Ps {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const ll = /* @__PURE__ */ new ks(), cl = /* @__PURE__ */ new al(), ul = /* @__PURE__ */ new ks(!0);
const Oi = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function fl(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ ge(i), s = cr(o), l = e === "entries" || e === Symbol.iterator && s, d = e === "keys" && s, v = i[e](...n), y = r ? Oi : t ? Fr : Lt;
    return !t && Je(
      o,
      "iterate",
      d ? Ri : Er
    ), Qe(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: E, done: k } = v.next();
          return k ? { value: E, done: k } : {
            value: l ? [y(E[0]), y(E[1])] : y(E),
            done: k
          };
        }
      }
    );
  };
}
function vn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dl(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      e || (jt(i, l) && Je(s, "get", i), Je(s, "get", l));
      const { has: d } = _n(s), v = t ? Oi : e ? Fr : Lt;
      if (d.call(s, i))
        return v(o.get(i));
      if (d.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Je(/* @__PURE__ */ ge(i), "iterate", Er), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      return e || (jt(i, l) && Je(s, "has", i), Je(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, d = /* @__PURE__ */ ge(l), v = t ? Oi : e ? Fr : Lt;
      return !e && Je(d, "iterate", Er), l.forEach((y, E) => i.call(o, v(y), v(E), s));
    }
  };
  return Qe(
    r,
    e ? {
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ge(this), s = _n(o), l = /* @__PURE__ */ ge(i), d = !t && !/* @__PURE__ */ Ct(i) && !/* @__PURE__ */ Zt(i) ? l : i;
        return s.has.call(o, d) || jt(i, d) && s.has.call(o, i) || jt(l, d) && s.has.call(o, l) || (o.add(d), Kt(o, "add", d, d)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Ct(o) && !/* @__PURE__ */ Zt(o) && (o = /* @__PURE__ */ ge(o));
        const s = /* @__PURE__ */ ge(this), { has: l, get: d } = _n(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ ge(i), v = l.call(s, i));
        const y = d.call(s, i);
        return s.set(i, o), v ? jt(o, y) && Kt(s, "set", i, o) : Kt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ge(this), { has: s, get: l } = _n(o);
        let d = s.call(o, i);
        d || (i = /* @__PURE__ */ ge(i), d = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return d && Kt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ge(this), o = i.size !== 0, s = i.clear();
        return o && Kt(
          i,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = fl(i, e, t);
  }), r;
}
function Wi(e, t) {
  const r = dl(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    _e(r, i) && i in n ? r : n,
    i,
    o
  );
}
const pl = {
  get: /* @__PURE__ */ Wi(!1, !1)
}, hl = {
  get: /* @__PURE__ */ Wi(!1, !0)
}, ml = {
  get: /* @__PURE__ */ Wi(!0, !1)
};
const Ls = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
function yl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return /* @__PURE__ */ Zt(e) ? e : Ki(
    e,
    !1,
    ll,
    pl,
    Ls
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return Ki(
    e,
    !1,
    ul,
    hl,
    Is
  );
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return Ki(
    e,
    !0,
    cl,
    ml,
    Ms
  );
}
function Ki(e, t, r, n, i) {
  if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = yl(Va(e));
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? n : r
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return /* @__PURE__ */ Zt(e) ? /* @__PURE__ */ Tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ge(t) : e;
}
function _l(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && gs(e, "__v_skip", !0), e;
}
const Lt = (e) => Te(e) ? /* @__PURE__ */ lr(e) : e, Fr = (e) => Te(e) ? /* @__PURE__ */ Ni(e) : e;
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return El(e, !1);
}
function El(e, t) {
  return /* @__PURE__ */ Ze(e) ? e : new Tl(e, t);
}
class Tl {
  constructor(t, r) {
    this.dep = new qi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ge(t), this._value = r ? t : Lt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ct(t) || /* @__PURE__ */ Zt(t);
    t = n ? t : /* @__PURE__ */ ge(t), jt(t, r) && (this._rawValue = t, this._value = n ? t : Lt(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ Ze(e) ? e.value : e;
}
const Sl = {
  get: (e, t, r) => t === "__v_raw" ? e : m(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Ze(i) && !/* @__PURE__ */ Ze(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Us(e) {
  return /* @__PURE__ */ Tr(e) ? e : new Proxy(e, Sl);
}
class xl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new qi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return xs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ws(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t, r = !1) {
  let n, i;
  return ae(e) ? n = e : (n = e.get, i = e.set), new xl(n, i, r);
}
const En = {}, Nn = /* @__PURE__ */ new WeakMap();
let yr;
function Al(e, t = !1, r = yr) {
  if (r) {
    let n = Nn.get(r);
    n || Nn.set(r, n = []), n.push(e);
  }
}
function wl(e, t, r = Ce) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: l, call: d } = r, v = (V) => i ? V : /* @__PURE__ */ Ct(V) || i === !1 || i === 0 ? Gt(V, 1) : Gt(V);
  let y, E, k, j, re = !1, W = !1;
  if (/* @__PURE__ */ Ze(e) ? (E = () => e.value, re = /* @__PURE__ */ Ct(e)) : /* @__PURE__ */ Tr(e) ? (E = () => v(e), re = !0) : ee(e) ? (W = !0, re = e.some((V) => /* @__PURE__ */ Tr(V) || /* @__PURE__ */ Ct(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Ze(V))
      return V.value;
    if (/* @__PURE__ */ Tr(V))
      return v(V);
    if (ae(V))
      return d ? d(V, 2) : V();
  })) : ae(e) ? t ? E = d ? () => d(e, 2) : e : E = () => {
    if (k) {
      Xt();
      try {
        k();
      } finally {
        Jt();
      }
    }
    const V = yr;
    yr = y;
    try {
      return d ? d(e, 3, [j]) : e(j);
    } finally {
      yr = V;
    }
  } : E = Vt, t && i) {
    const V = E, le = i === !0 ? 1 / 0 : i;
    E = () => Gt(V(), le);
  }
  const se = el(), ne = () => {
    y.stop(), se && se.active && Hi(se.effects, y);
  };
  if (o && t) {
    const V = t;
    t = (...le) => {
      const Le = V(...le);
      return ne(), Le;
    };
  }
  let z = W ? new Array(e.length).fill(En) : En;
  const D = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const le = y.run();
        if (V || i || re || (W ? le.some((Le, Ne) => jt(Le, z[Ne])) : jt(le, z))) {
          k && k();
          const Le = yr;
          yr = y;
          try {
            const Ne = [
              le,
              // pass undefined as the old value when it's changed for the first time
              z === En ? void 0 : W && z[0] === En ? [] : z,
              j
            ];
            z = le, d ? d(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            yr = Le;
          }
        }
      } else
        y.run();
  };
  return l && l(D), y = new Ts(E), y.scheduler = s ? () => s(D, !1) : D, j = (V) => Al(V, !1, y), k = y.onStop = () => {
    const V = Nn.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const le of V) le();
      Nn.delete(y);
    }
  }, t ? n ? D(!0) : z = y.run() : s ? s(D.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Gt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Ze(e))
    Gt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Gt(e[n], t, r);
  else if (xr(e) || cr(e))
    e.forEach((n) => {
      Gt(n, t, r);
    });
  else if (bs(e)) {
    for (const n in e)
      Gt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Gt(e[n], t, r);
  }
  return e;
}
function fn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    qn(i, t, r);
  }
}
function It(e, t, r, n) {
  if (ae(e)) {
    const i = fn(e, t, r, n);
    return i && hs(i) && i.catch((o) => {
      qn(o, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(It(e[o], t, r, n));
    return i;
  }
}
function qn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ce;
  if (t) {
    let l = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const y = l.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, d, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Xt(), fn(o, null, 10, [
        e,
        d,
        v
      ]), Jt();
      return;
    }
  }
  Rl(e, r, i, n, s);
}
function Rl(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const st = [];
let Ft = -1;
const Mr = [];
let ar = null, Pr = 0;
const Ds = /* @__PURE__ */ Promise.resolve();
let Pn = null;
function Fs(e) {
  const t = Pn || Ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ol(e) {
  let t = Ft + 1, r = st.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = st[n], o = sn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Yi(e) {
  if (!(e.flags & 1)) {
    const t = sn(e), r = st[st.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= sn(r) ? st.push(e) : st.splice(Ol(t), 0, e), e.flags |= 1, Hs();
  }
}
function Hs() {
  Pn || (Pn = Ds.then(js));
}
function Nl(e) {
  if (!ee(e))
    ar && e.id === -1 ? ar.splice(Pr + 1, 0, e) : e.flags & 1 || (Mr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Mr.push(e[t]);
  Hs();
}
function Eo(e, t, r = Ft + 1) {
  for (; r < st.length; r++) {
    const n = st[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      st.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function $s(e) {
  if (Mr.length) {
    const t = [...new Set(Mr)].sort(
      (r, n) => sn(r) - sn(n)
    );
    if (Mr.length = 0, ar) {
      for (let r = 0; r < t.length; r++)
        ar.push(t[r]);
      return;
    }
    for (ar = t, Pr = 0; Pr < ar.length; Pr++) {
      const r = ar[Pr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ar = null, Pr = 0;
  }
}
const sn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function js(e) {
  try {
    for (Ft = 0; Ft < st.length; Ft++) {
      const t = st[Ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ft < st.length; Ft++) {
      const t = st[Ft];
      t && (t.flags &= -2);
    }
    Ft = -1, st.length = 0, $s(), Pn = null, (st.length || Mr.length) && js();
  }
}
let xt = null, Vs = null;
function kn(e) {
  const t = xt;
  return xt = e, Vs = e && e.type.__scopeId || null, t;
}
function Pl(e, t = xt, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && ko(-1);
    const o = kn(t), s = Sr.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let d = Sr.length; d > s; d--) ha();
      kn(o), n._d && ko(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, t) {
  if (xt === null)
    return e;
  const r = Xn(xt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, d = Ce] = t[i];
    o && (ae(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Gt(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: d
    }));
  }
  return e;
}
function hr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let d = l.dir[n];
    d && (Xt(), It(d, r, 8, [
      e.el,
      l,
      e,
      t
    ]), Jt());
  }
}
function kl(e, t) {
  if (at) {
    let r = at.provides;
    const n = at.parent && at.parent.provides;
    n === r && (r = at.provides = Object.create(n)), r[e] = t;
  }
}
function wn(e, t, r = !1) {
  const n = Rc();
  if (n || Ur) {
    let i = Ur ? Ur._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ae(t) ? t.call(n && n.proxy) : t;
  }
}
const Ll = /* @__PURE__ */ Symbol.for("v-scx"), Il = () => wn(Ll);
function li(e, t, r) {
  return Bs(e, t, r);
}
function Bs(e, t, r = Ce) {
  const { immediate: n, deep: i, flush: o, once: s } = r, l = Qe({}, r), d = t && n || !t && o !== "post";
  let v;
  if (cn) {
    if (o === "sync") {
      const j = Il();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!d) {
      const j = () => {
      };
      return j.stop = Vt, j.resume = Vt, j.pause = Vt, j;
    }
  }
  const y = at;
  l.call = (j, re, W) => It(j, y, re, W);
  let E = !1;
  o === "post" ? l.scheduler = (j) => {
    ht(j, y && y.suspense);
  } : o !== "sync" && (E = !0, l.scheduler = (j, re) => {
    re ? j() : Yi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const k = wl(e, t, l);
  return cn && (v ? v.push(k) : d && k()), k;
}
function Ml(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? zs(n, e) : () => n[e] : e.bind(n, n);
  let o;
  ae(t) ? o = t : (o = t.handler, r = t);
  const s = dn(this), l = Bs(i, o.bind(n), r);
  return s(), l;
}
function zs(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ul = /* @__PURE__ */ Symbol("_vte"), Wn = (e) => e.__isTeleport, ci = /* @__PURE__ */ Symbol("_leaveCb");
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== Qt) {
        t = r;
        break;
      }
  }
  return t;
}
function qs(e) {
  if (!Ji(e))
    return Wn(e.type) && e.children ? Dl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && ae(r.default))
      return r.default();
  }
}
function Xi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    Xi(
      Wn(r.type) && qs(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ws(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function To(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ln = /* @__PURE__ */ new WeakMap();
function en(e, t, r, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (W, se) => en(
        W,
        t && (ee(t) ? t[se] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (tn(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && en(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Xn(n.component) : n.el, s = i ? null : o, { i: l, r: d } = e, v = t && t.r, y = l.refs === Ce ? l.refs = {} : l.refs, E = l.setupState, k = /* @__PURE__ */ ge(E), j = E === Ce ? ps : (W) => To(y, W) ? !1 : _e(k, W), re = (W, se) => !(se && To(y, se));
  if (v != null && v !== d) {
    if (So(t), Ue(v))
      y[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Ze(v)) {
      const W = t;
      re(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (ae(d))
    fn(d, l, 12, [s, y]);
  else {
    const W = Ue(d), se = /* @__PURE__ */ Ze(d);
    if (W || se) {
      const ne = () => {
        if (e.f) {
          const z = W ? j(d) ? E[d] : y[d] : re() || !e.k ? d.value : y[e.k];
          if (i)
            ee(z) && Hi(z, o);
          else if (ee(z))
            z.includes(o) || z.push(o);
          else if (W)
            y[d] = [o], j(d) && (E[d] = y[d]);
          else {
            const D = [o];
            re(d, e.k) && (d.value = D), e.k && (y[e.k] = D);
          }
        } else W ? (y[d] = s, j(d) && (E[d] = s)) : se && (re(d, e.k) && (d.value = s), e.k && (y[e.k] = s));
      };
      if (s) {
        const z = () => {
          ne(), Ln.delete(e);
        };
        z.id = -1, Ln.set(e, z), ht(z, r);
      } else
        So(e), ne();
    }
  }
}
function So(e) {
  const t = Ln.get(e);
  t && (t.flags |= 8, Ln.delete(e));
}
Bn().requestIdleCallback;
Bn().cancelIdleCallback;
const tn = (e) => !!e.type.__asyncLoader, Ji = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Ks(e, "a", t);
}
function Hl(e, t) {
  Ks(e, "da", t);
}
function Ks(e, t, r = at) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Kn(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Ji(i.parent.vnode) && $l(n, t, r, i), i = i.parent;
  }
}
function $l(e, t, r, n) {
  const i = Kn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Xs(() => {
    Hi(n[t], i);
  }, r);
}
function Kn(e, t, r = at, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Xt();
      const l = dn(r), d = It(t, r, e, s);
      return l(), Jt(), d;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const er = (e) => (t, r = at) => {
  (!cn || e === "sp") && Kn(e, (...n) => t(...n), r);
}, jl = er("bm"), Gs = er("m"), Vl = er(
  "bu"
), Bl = er("u"), Ys = er(
  "bum"
), Xs = er("um"), zl = er(
  "sp"
), ql = er("rtg"), Wl = er("rtc");
function Kl(e, t = at) {
  Kn("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function Ee(e, t, r, n) {
  let i;
  const o = r, s = ee(e);
  if (s || Ue(e)) {
    const l = s && /* @__PURE__ */ Tr(e);
    let d = !1, v = !1;
    l && (d = !/* @__PURE__ */ Ct(e), v = /* @__PURE__ */ Zt(e), e = zn(e)), i = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      i[y] = t(
        d ? v ? Fr(Lt(e[y])) : Lt(e[y]) : e[y],
        y,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (Te(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, d) => t(l, d, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let d = 0, v = l.length; d < v; d++) {
        const y = l[d];
        i[d] = t(e[y], y, d, o);
      }
    }
  else
    i = [];
  return i;
}
const Pi = (e) => e ? ga(e) ? Xn(e) : Pi(e.parent) : null, rn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Pi(e.parent),
    $root: (e) => Pi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fs.bind(e.proxy)),
    $watch: (e) => Ml.bind(e)
  })
), ui = (e, t) => e !== Ce && !e.__isScriptSetup && _e(e, t), Yl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: l, appContext: d } = e;
    if (t[0] !== "$") {
      const k = s[t];
      if (k !== void 0)
        switch (k) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (ui(n, t))
          return s[t] = 1, n[t];
        if (i !== Ce && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (r !== Ce && _e(r, t))
          return s[t] = 4, r[t];
        ki && (s[t] = 0);
      }
    }
    const v = rn[t];
    let y, E;
    if (v)
      return t === "$attrs" && Je(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = l.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ce && _e(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      E = d.config.globalProperties, _e(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ui(i, t) ? (i[t] = r, !0) : n !== Ce && _e(n, t) ? (n[t] = r, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, l) {
    let d;
    return !!(r[l] || e !== Ce && l[0] !== "$" && _e(e, l) || ui(t, l) || _e(o, l) || _e(n, l) || _e(rn, l) || _e(i.config.globalProperties, l) || (d = s.__cssModules) && d[l]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : _e(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function xo(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ki = !0;
function Xl(e) {
  const t = Zs(e), r = e.proxy, n = e.ctx;
  ki = !1, t.beforeCreate && Co(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: d,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: k,
    beforeUpdate: j,
    updated: re,
    activated: W,
    deactivated: se,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: D,
    unmounted: V,
    render: le,
    renderTracked: Le,
    renderTriggered: Ne,
    errorCaptured: je,
    serverPrefetch: ve,
    // public API
    expose: Ie,
    inheritAttrs: et,
    // assets
    components: lt,
    directives: Ke,
    filters: _t
  } = t;
  if (v && Jl(v, n, null), s)
    for (const he in s) {
      const ue = s[he];
      ae(ue) && (n[he] = ue.bind(r));
    }
  if (i) {
    const he = i.call(r, r);
    Te(he) && (e.data = /* @__PURE__ */ lr(he));
  }
  if (ki = !0, o)
    for (const he in o) {
      const ue = o[he], Ve = ae(ue) ? ue.bind(r, r) : ae(ue.get) ? ue.get.bind(r, r) : Vt, me = !ae(ue) && ae(ue.set) ? ue.set.bind(r) : Vt, Se = J({
        get: Ve,
        set: me
      });
      Object.defineProperty(n, he, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Be) => Se.value = Be
      });
    }
  if (l)
    for (const he in l)
      Js(l[he], n, r, he);
  if (d) {
    const he = ae(d) ? d.call(r) : d;
    Reflect.ownKeys(he).forEach((ue) => {
      kl(ue, he[ue]);
    });
  }
  y && Co(y, e, "c");
  function Me(he, ue) {
    ee(ue) ? ue.forEach((Ve) => he(Ve.bind(r))) : ue && he(ue.bind(r));
  }
  if (Me(jl, E), Me(Gs, k), Me(Vl, j), Me(Bl, re), Me(Fl, W), Me(Hl, se), Me(Kl, je), Me(Wl, Le), Me(ql, Ne), Me(Ys, z), Me(Xs, V), Me(zl, ve), ee(Ie))
    if (Ie.length) {
      const he = e.exposed || (e.exposed = {});
      Ie.forEach((ue) => {
        Object.defineProperty(he, ue, {
          get: () => r[ue],
          set: (Ve) => r[ue] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === Vt && (e.render = le), et != null && (e.inheritAttrs = et), lt && (e.components = lt), Ke && (e.directives = Ke), ve && Ws(e);
}
function Jl(e, t, r = Vt) {
  ee(e) && (e = Li(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Te(i) ? "default" in i ? o = wn(
      i.from || n,
      i.default,
      !0
    ) : o = wn(i.from || n) : o = wn(i), /* @__PURE__ */ Ze(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Co(e, t, r) {
  It(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Js(e, t, r, n) {
  let i = n.includes(".") ? zs(r, n) : () => r[n];
  if (Ue(e)) {
    const o = t[e];
    ae(o) && li(i, o);
  } else if (ae(e))
    li(i, e.bind(r));
  else if (Te(e))
    if (ee(e))
      e.forEach((o) => Js(o, t, r, n));
    else {
      const o = ae(e.handler) ? e.handler.bind(r) : t[e.handler];
      ae(o) && li(i, o, e);
    }
}
function Zs(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let d;
  return l ? d = l : !i.length && !r && !n ? d = t : (d = {}, i.length && i.forEach(
    (v) => In(d, v, s, !0)
  ), In(d, t, s)), Te(t) && o.set(t, d), d;
}
function In(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && In(e, o, r, !0), i && i.forEach(
    (s) => In(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const l = Zl[s] || r && r[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Zl = {
  data: Ao,
  props: wo,
  emits: wo,
  // objects
  methods: Gr,
  computed: Gr,
  // lifecycle
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  // assets
  components: Gr,
  directives: Gr,
  // watch
  watch: ec,
  // provide / inject
  provide: Ao,
  inject: Ql
};
function Ao(e, t) {
  return t ? e ? function() {
    return Qe(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Gr(Li(e), Li(t));
}
function Li(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gr(e, t) {
  return e ? Qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wo(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
    /* @__PURE__ */ Object.create(null),
    xo(e),
    xo(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Qe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ot(e[n], t[n]);
  return r;
}
function Qs() {
  return {
    app: null,
    config: {
      isNativeTag: ps,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let tc = 0;
function rc(e, t) {
  return function(n, i = null) {
    ae(n) || (n = Qe({}, n)), i != null && !Te(i) && (i = null);
    const o = Qs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let d = !1;
    const v = o.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ic,
      get config() {
        return o.config;
      },
      set config(y) {
      },
      use(y, ...E) {
        return s.has(y) || (y && ae(y.install) ? (s.add(y), y.install(v, ...E)) : ae(y) && (s.add(y), y(v, ...E))), v;
      },
      mixin(y) {
        return o.mixins.includes(y) || o.mixins.push(y), v;
      },
      component(y, E) {
        return E ? (o.components[y] = E, v) : o.components[y];
      },
      directive(y, E) {
        return E ? (o.directives[y] = E, v) : o.directives[y];
      },
      mount(y, E, k) {
        if (!d) {
          const j = v._ceVNode || Yt(n, i);
          return j.appContext = o, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(j, y, k), d = !0, v._container = y, y.__vue_app__ = v, Xn(j.component);
        }
      },
      onUnmount(y) {
        l.push(y);
      },
      unmount() {
        d && (It(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, E) {
        return o.provides[y] = E, v;
      },
      runWithContext(y) {
        const E = Ur;
        Ur = v;
        try {
          return y();
        } finally {
          Ur = E;
        }
      }
    };
    return v;
  };
}
let Ur = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pt(t)}Modifiers`] || e[`${Cr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ce;
  let i = r;
  const o = t.startsWith("update:"), s = o && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((y) => Ue(y) ? y.trim() : y)), s.number && (i = i.map(Vn)));
  let l, d = n[l = ni(t)] || // also try camelCase event handler (#2249)
  n[l = ni(Pt(t))];
  !d && o && (d = n[l = ni(Cr(t))]), d && It(
    d,
    e,
    6,
    i
  );
  const v = n[l + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, It(
      v,
      e,
      6,
      i
    );
  }
}
const oc = /* @__PURE__ */ new WeakMap();
function ea(e, t, r = !1) {
  const n = r ? oc : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, l = !1;
  if (!ae(e)) {
    const d = (v) => {
      const y = ea(v, t, !0);
      y && (l = !0, Qe(s, y));
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !o && !l ? (Te(e) && n.set(e, null), null) : (ee(o) ? o.forEach((d) => s[d] = null) : Qe(s, o), Te(e) && n.set(e, s), s);
}
function Gn(e, t) {
  return !e || !Hn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Cr(t)) || _e(e, t));
}
function Ro(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: d,
    render: v,
    renderCache: y,
    props: E,
    data: k,
    setupState: j,
    ctx: re,
    inheritAttrs: W
  } = e, se = kn(e);
  let ne, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, le = V;
      ne = $t(
        v.call(
          le,
          V,
          y,
          E,
          j,
          k,
          re
        )
      ), z = l;
    } else {
      const V = t;
      ne = $t(
        V.length > 1 ? V(
          E,
          { attrs: l, slots: s, emit: d }
        ) : V(
          E,
          null
        )
      ), z = t.props ? l : sc(l);
    }
  } catch (V) {
    Sr.length = 0, qn(V, e, 1), ne = Yt(Qt);
  }
  let D = ne;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: le } = D;
    V.length && le & 7 && (o && V.some($n) && (z = ac(
      z,
      o
    )), D = Hr(D, z, !1, !0));
  }
  if (r.dirs && (D = Hr(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Wn(D.type) && qs(D) || D;
    Xi(V, r.transition);
  }
  return ne = D, kn(se), ne;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Hn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ac = (e, t) => {
  const r = {};
  for (const n in e)
    (!$n(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function lc(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: l, patchFlag: d } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Oo(n, s, v) : !!s;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const k = y[E];
        if (ta(s, n, k) && !Gn(v, k))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === s ? !1 : n ? s ? Oo(n, s, v) : !0 : !!s;
  return !1;
}
function Oo(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (ta(t, e, o) && !Gn(r, o))
      return !0;
  }
  return !1;
}
function ta(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Te(n) && Te(i) ? !ur(n, i) : n !== i;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const ra = {}, na = () => Object.create(ra), ia = (e) => Object.getPrototypeOf(e) === ra;
function uc(e, t, r, n = !1) {
  const i = {}, o = na();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), oa(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ gl(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function fc(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = /* @__PURE__ */ ge(i), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const y = e.vnode.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        let k = y[E];
        if (Gn(e.emitsOptions, k))
          continue;
        const j = t[k];
        if (d)
          if (_e(o, k))
            j !== o[k] && (o[k] = j, v = !0);
          else {
            const re = Pt(k);
            i[re] = Ii(
              d,
              l,
              re,
              j,
              e,
              !1
            );
          }
        else
          j !== o[k] && (o[k] = j, v = !0);
      }
    }
  } else {
    oa(e, t, i, o) && (v = !0);
    let y;
    for (const E in l)
      (!t || // for camelCase
      !_e(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Cr(E)) === E || !_e(t, y))) && (d ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[E] = Ii(
        d,
        l,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (o !== l)
      for (const E in o)
        (!t || !_e(t, E)) && (delete o[E], v = !0);
  }
  v && Kt(e.attrs, "set", "");
}
function oa(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let d in t) {
      if (Jr(d))
        continue;
      const v = t[d];
      let y;
      i && _e(i, y = Pt(d)) ? !o || !o.includes(y) ? r[y] = v : (l || (l = {}))[y] = v : Gn(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, s = !0);
    }
  if (o) {
    const d = /* @__PURE__ */ ge(r), v = l || Ce;
    for (let y = 0; y < o.length; y++) {
      const E = o[y];
      r[E] = Ii(
        i,
        d,
        E,
        v[E],
        e,
        !_e(v, E)
      );
    }
  }
  return s;
}
function Ii(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const l = _e(s, "default");
    if (l && n === void 0) {
      const d = s.default;
      if (s.type !== Function && !s.skipFactory && ae(d)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = dn(i);
          n = v[r] = d.call(
            null,
            t
          ), y();
        }
      } else
        n = d;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Cr(r)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function sa(e, t, r = !1) {
  const n = r ? dc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, l = [];
  let d = !1;
  if (!ae(e)) {
    const y = (E) => {
      d = !0;
      const [k, j] = sa(E, t, !0);
      Qe(s, k), j && l.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!o && !d)
    return Te(e) && n.set(e, Lr), Lr;
  if (ee(o))
    for (let y = 0; y < o.length; y++) {
      const E = Pt(o[y]);
      No(E) && (s[E] = Ce);
    }
  else if (o)
    for (const y in o) {
      const E = Pt(y);
      if (No(E)) {
        const k = o[y], j = s[E] = ee(k) || ae(k) ? { type: k } : Qe({}, k), re = j.type;
        let W = !1, se = !0;
        if (ee(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const z = re[ne], D = ae(z) && z.name;
            if (D === "Boolean") {
              W = !0;
              break;
            } else D === "String" && (se = !1);
          }
        else
          W = ae(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = se, (W || _e(j, "default")) && l.push(E);
      }
    }
  const v = [s, l];
  return Te(e) && n.set(e, v), v;
}
function No(e) {
  return e[0] !== "$" && !Jr(e);
}
const Zi = (e) => e === "_" || e === "_ctx" || e === "$stable", Qi = (e) => ee(e) ? e.map($t) : [$t(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Pl((...i) => Qi(t(...i)), r);
  return n._c = !1, n;
}, aa = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Zi(i)) continue;
    const o = e[i];
    if (ae(o))
      t[i] = pc(i, o, n);
    else if (o != null) {
      const s = Qi(o);
      t[i] = () => s;
    }
  }
}, la = (e, t) => {
  const r = Qi(t);
  e.slots.default = () => r;
}, ca = (e, t, r) => {
  for (const n in t)
    (r || !Zi(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = na();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ca(n, t, r), r && gs(n, "_", i, !0)) : aa(t, n);
  } else t && la(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Ce;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? r && l === 1 ? o = !1 : ca(i, t, r) : (o = !t.$stable, aa(t, i)), s = t;
  } else t && (la(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !Zi(l) && s[l] == null && delete i[l];
}, ht = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = Bn();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: d,
    setText: v,
    setElementText: y,
    parentNode: E,
    nextSibling: k,
    setScopeId: j = Vt,
    insertStaticContent: re
  } = e, W = (p, b, _, O = null, T = null, C = null, L = void 0, U = null, M = !!b.dynamicChildren) => {
    if (p === b)
      return;
    p && !Br(p, b) && (O = ct(p), Be(p, T, C, !0), p = null), b.patchFlag === -2 && (M = !1, b.dynamicChildren = null);
    const { type: x, ref: K, shapeFlag: H } = b;
    switch (x) {
      case Yn:
        se(p, b, _, O);
        break;
      case Qt:
        ne(p, b, _, O);
        break;
      case di:
        p == null && z(b, _, O, L);
        break;
      case oe:
        lt(
          p,
          b,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        );
        break;
      default:
        H & 1 ? le(
          p,
          b,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        ) : H & 6 ? Ke(
          p,
          b,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        ) : (H & 64 || H & 128) && x.process(
          p,
          b,
          _,
          O,
          T,
          C,
          L,
          U,
          M,
          tt
        );
    }
    K != null && T ? en(K, p && p.ref, C, b || p, !b) : K == null && p && p.ref != null && en(p.ref, null, C, p, !0);
  }, se = (p, b, _, O) => {
    if (p == null)
      n(
        b.el = l(b.children),
        _,
        O
      );
    else {
      const T = b.el = p.el;
      b.children !== p.children && v(T, b.children);
    }
  }, ne = (p, b, _, O) => {
    p == null ? n(
      b.el = d(b.children || ""),
      _,
      O
    ) : b.el = p.el;
  }, z = (p, b, _, O) => {
    [p.el, p.anchor] = re(
      p.children,
      b,
      _,
      O,
      p.el,
      p.anchor
    );
  }, D = ({ el: p, anchor: b }, _, O) => {
    let T;
    for (; p && p !== b; )
      T = k(p), n(p, _, O), p = T;
    n(b, _, O);
  }, V = ({ el: p, anchor: b }) => {
    let _;
    for (; p && p !== b; )
      _ = k(p), i(p), p = _;
    i(b);
  }, le = (p, b, _, O, T, C, L, U, M) => {
    if (b.type === "svg" ? L = "svg" : b.type === "math" && (L = "mathml"), p == null)
      Le(
        b,
        _,
        O,
        T,
        C,
        L,
        U,
        M
      );
    else {
      const x = p.el && p.el._isVueCE ? p.el : null;
      try {
        x && x._beginPatch(), ve(
          p,
          b,
          T,
          C,
          L,
          U,
          M
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Le = (p, b, _, O, T, C, L, U) => {
    let M, x;
    const { props: K, shapeFlag: H, transition: q, dirs: X } = p;
    if (M = p.el = s(
      p.type,
      C,
      K && K.is,
      K
    ), H & 8 ? y(M, p.children) : H & 16 && je(
      p.children,
      M,
      null,
      O,
      T,
      fi(p, C),
      L,
      U
    ), X && hr(p, null, O, "created"), Ne(M, p, p.scopeId, L, O), K) {
      for (const N in K)
        N !== "value" && !Jr(N) && o(M, N, null, K[N], C, O);
      "value" in K && o(M, "value", null, K.value, C), (x = K.onVnodeBeforeMount) && Dt(x, O, p);
    }
    X && hr(p, null, O, "beforeMount");
    const Z = gc(T, q);
    Z && q.beforeEnter(M), n(M, b, _), ((x = K && K.onVnodeMounted) || Z || X) && ht(() => {
      x && Dt(x, O, p), Z && q.enter(M), X && hr(p, null, O, "mounted");
    }, T);
  }, Ne = (p, b, _, O, T) => {
    if (_ && j(p, _), O)
      for (let C = 0; C < O.length; C++)
        j(p, O[C]);
    if (T) {
      let C = T.subTree;
      if (b === C || pa(C.type) && (C.ssContent === b || C.ssFallback === b)) {
        const L = T.vnode;
        Ne(
          p,
          L,
          L.scopeId,
          L.slotScopeIds,
          T.parent
        );
      }
    }
  }, je = (p, b, _, O, T, C, L, U, M = 0) => {
    for (let x = M; x < p.length; x++) {
      const K = p[x] = U ? Wt(p[x]) : $t(p[x]);
      W(
        null,
        K,
        b,
        _,
        O,
        T,
        C,
        L,
        U
      );
    }
  }, ve = (p, b, _, O, T, C, L) => {
    const U = b.el = p.el;
    let { patchFlag: M, dynamicChildren: x, dirs: K } = b;
    M |= p.patchFlag & 16;
    const H = p.props || Ce, q = b.props || Ce;
    let X;
    if (_ && mr(_, !1), (X = q.onVnodeBeforeUpdate) && Dt(X, _, b, p), K && hr(b, p, _, "beforeUpdate"), _ && mr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!p.dynamicChildren || p.dynamicChildren.length !== x.length) && (M = 0, L = !1, x = null), (H.innerHTML && q.innerHTML == null || H.textContent && q.textContent == null) && y(U, ""), x ? Ie(
      p.dynamicChildren,
      x,
      U,
      _,
      O,
      fi(b, T),
      C
    ) : L || ue(
      p,
      b,
      U,
      null,
      _,
      O,
      fi(b, T),
      C,
      !1
    ), M > 0) {
      if (M & 16)
        et(U, H, q, _, T);
      else if (M & 2 && H.class !== q.class && o(U, "class", null, q.class, T), M & 4 && o(U, "style", H.style, q.style, T), M & 8) {
        const Z = b.dynamicProps;
        for (let N = 0; N < Z.length; N++) {
          const P = Z[N], $ = H[P], Q = q[P];
          (Q !== $ || P === "value") && o(U, P, $, Q, T, _);
        }
      }
      M & 1 && p.children !== b.children && y(U, b.children);
    } else !L && x == null && et(U, H, q, _, T);
    ((X = q.onVnodeUpdated) || K) && ht(() => {
      X && Dt(X, _, b, p), K && hr(b, p, _, "updated");
    }, O);
  }, Ie = (p, b, _, O, T, C, L) => {
    for (let U = 0; U < b.length; U++) {
      const M = p[U], x = b[U], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Br(M, x) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? E(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        M,
        x,
        K,
        null,
        O,
        T,
        C,
        L,
        !0
      );
    }
  }, et = (p, b, _, O, T) => {
    if (b !== _) {
      if (b !== Ce)
        for (const C in b)
          !Jr(C) && !(C in _) && o(
            p,
            C,
            b[C],
            null,
            T,
            O
          );
      for (const C in _) {
        if (Jr(C)) continue;
        const L = _[C], U = b[C];
        L !== U && C !== "value" && o(p, C, U, L, T, O);
      }
      "value" in _ && o(p, "value", b.value, _.value, T);
    }
  }, lt = (p, b, _, O, T, C, L, U, M) => {
    const x = b.el = p ? p.el : l(""), K = b.anchor = p ? p.anchor : l("");
    let { patchFlag: H, dynamicChildren: q, slotScopeIds: X } = b;
    X && (U = U ? U.concat(X) : X), p == null ? (n(x, _, O), n(K, _, O), je(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      K,
      T,
      C,
      L,
      U,
      M
    )) : H > 0 && H & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === q.length ? (Ie(
      p.dynamicChildren,
      q,
      _,
      T,
      C,
      L,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || T && b === T.subTree) && ua(
      p,
      b,
      !0
      /* shallow */
    )) : ue(
      p,
      b,
      _,
      K,
      T,
      C,
      L,
      U,
      M
    );
  }, Ke = (p, b, _, O, T, C, L, U, M) => {
    b.slotScopeIds = U, p == null ? b.shapeFlag & 512 ? T.ctx.activate(
      b,
      _,
      O,
      L,
      M
    ) : _t(
      b,
      _,
      O,
      T,
      C,
      L,
      M
    ) : Fe(p, b, M);
  }, _t = (p, b, _, O, T, C, L) => {
    const U = p.component = wc(
      p,
      O,
      T
    );
    if (Ji(p) && (U.ctx.renderer = tt), Oc(U, !1, L), U.asyncDep) {
      if (T && T.registerDep(U, Me, L), !p.el) {
        const M = U.subTree = Yt(Qt);
        ne(null, M, b, _), p.placeholder = M.el;
      }
    } else
      Me(
        U,
        p,
        b,
        _,
        T,
        C,
        L
      );
  }, Fe = (p, b, _) => {
    const O = b.component = p.component;
    if (lc(p, b, _))
      if (O.asyncDep && !O.asyncResolved) {
        he(O, b, _);
        return;
      } else
        O.next = b, O.update();
    else
      b.el = p.el, O.vnode = b;
  }, Me = (p, b, _, O, T, C, L) => {
    const U = () => {
      if (p.isMounted) {
        let { next: H, bu: q, u: X, parent: Z, vnode: N } = p;
        {
          const be = fa(p);
          if (be) {
            H && (H.el = N.el, he(p, H, L)), be.asyncDep.then(() => {
              ht(() => {
                p.isUnmounted || x();
              }, T);
            });
            return;
          }
        }
        let P = H, $;
        mr(p, !1), H ? (H.el = N.el, he(p, H, L)) : H = N, q && An(q), ($ = H.props && H.props.onVnodeBeforeUpdate) && Dt($, Z, H, N), mr(p, !0);
        const Q = Ro(p), ie = p.subTree;
        p.subTree = Q, W(
          ie,
          Q,
          // parent may have changed if it's in a teleport
          E(ie.el),
          // anchor may have changed if it's in a fragment
          ct(ie),
          p,
          T,
          C
        ), H.el = Q.el, P === null && cc(p, Q.el), X && ht(X, T), ($ = H.props && H.props.onVnodeUpdated) && ht(
          () => Dt($, Z, H, N),
          T
        );
      } else {
        let H;
        const { el: q, props: X } = b, { bm: Z, m: N, parent: P, root: $, type: Q } = p, ie = tn(b);
        mr(p, !1), Z && An(Z), !ie && (H = X && X.onVnodeBeforeMount) && Dt(H, P, b), mr(p, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            Q,
            p.parent ? p.parent.type : void 0
          );
          const be = p.subTree = Ro(p);
          W(
            null,
            be,
            _,
            O,
            p,
            T,
            C
          ), b.el = be.el;
        }
        if (N && ht(N, T), !ie && (H = X && X.onVnodeMounted)) {
          const be = b;
          ht(
            () => Dt(H, P, be),
            T
          );
        }
        (b.shapeFlag & 256 || P && tn(P.vnode) && P.vnode.shapeFlag & 256) && p.a && ht(p.a, T), p.isMounted = !0, b = _ = O = null;
      }
    };
    p.scope.on();
    const M = p.effect = new Ts(U);
    p.scope.off();
    const x = p.update = M.run.bind(M), K = p.job = M.runIfDirty.bind(M);
    K.i = p, K.id = p.uid, M.scheduler = () => Yi(K), mr(p, !0), x();
  }, he = (p, b, _) => {
    b.component = p;
    const O = p.vnode.props;
    p.vnode = b, p.next = null, fc(p, b.props, O, _), mc(p, b.children, _), Xt(), Eo(p), Jt();
  }, ue = (p, b, _, O, T, C, L, U, M = !1) => {
    const x = p && p.children, K = p ? p.shapeFlag : 0, H = b.children, { patchFlag: q, shapeFlag: X } = b;
    if (q > 0) {
      if (q & 128) {
        me(
          x,
          H,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        );
        return;
      } else if (q & 256) {
        Ve(
          x,
          H,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        );
        return;
      }
    }
    X & 8 ? (K & 16 && ze(x, T, C), H !== x && y(_, H)) : K & 16 ? X & 16 ? me(
      x,
      H,
      _,
      O,
      T,
      C,
      L,
      U,
      M
    ) : ze(x, T, C, !0) : (K & 8 && y(_, ""), X & 16 && je(
      H,
      _,
      O,
      T,
      C,
      L,
      U,
      M
    ));
  }, Ve = (p, b, _, O, T, C, L, U, M) => {
    p = p || Lr, b = b || Lr;
    const x = p.length, K = b.length, H = Math.min(x, K);
    let q;
    for (q = 0; q < H; q++) {
      const X = b[q] = M ? Wt(b[q]) : $t(b[q]);
      W(
        p[q],
        X,
        _,
        null,
        T,
        C,
        L,
        U,
        M
      );
    }
    x > K ? ze(
      p,
      T,
      C,
      !0,
      !1,
      H
    ) : je(
      b,
      _,
      O,
      T,
      C,
      L,
      U,
      M,
      H
    );
  }, me = (p, b, _, O, T, C, L, U, M) => {
    let x = 0;
    const K = b.length;
    let H = p.length - 1, q = K - 1;
    for (; x <= H && x <= q; ) {
      const X = p[x], Z = b[x] = M ? Wt(b[x]) : $t(b[x]);
      if (Br(X, Z))
        W(
          X,
          Z,
          _,
          null,
          T,
          C,
          L,
          U,
          M
        );
      else
        break;
      x++;
    }
    for (; x <= H && x <= q; ) {
      const X = p[H], Z = b[q] = M ? Wt(b[q]) : $t(b[q]);
      if (Br(X, Z))
        W(
          X,
          Z,
          _,
          null,
          T,
          C,
          L,
          U,
          M
        );
      else
        break;
      H--, q--;
    }
    if (x > H) {
      if (x <= q) {
        const X = q + 1, Z = X < K ? b[X].el : O;
        for (; x <= q; )
          W(
            null,
            b[x] = M ? Wt(b[x]) : $t(b[x]),
            _,
            Z,
            T,
            C,
            L,
            U,
            M
          ), x++;
      }
    } else if (x > q)
      for (; x <= H; )
        Be(p[x], T, C, !0), x++;
    else {
      const X = x, Z = x, N = /* @__PURE__ */ new Map();
      for (x = Z; x <= q; x++) {
        const Re = b[x] = M ? Wt(b[x]) : $t(b[x]);
        Re.key != null && N.set(Re.key, x);
      }
      let P, $ = 0;
      const Q = q - Z + 1;
      let ie = !1, be = 0;
      const ce = new Array(Q);
      for (x = 0; x < Q; x++) ce[x] = 0;
      for (x = X; x <= H; x++) {
        const Re = p[x];
        if ($ >= Q) {
          Be(Re, T, C, !0);
          continue;
        }
        let Oe;
        if (Re.key != null)
          Oe = N.get(Re.key);
        else
          for (P = Z; P <= q; P++)
            if (ce[P - Z] === 0 && Br(Re, b[P])) {
              Oe = P;
              break;
            }
        Oe === void 0 ? Be(Re, T, C, !0) : (ce[Oe - Z] = x + 1, Oe >= be ? be = Oe : ie = !0, W(
          Re,
          b[Oe],
          _,
          null,
          T,
          C,
          L,
          U,
          M
        ), $++);
      }
      const Pe = ie ? _c(ce) : Lr;
      for (P = Pe.length - 1, x = Q - 1; x >= 0; x--) {
        const Re = Z + x, Oe = b[Re], ft = b[Re + 1], rt = Re + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ft.el || da(ft)
        ) : O;
        ce[x] === 0 ? W(
          null,
          Oe,
          _,
          rt,
          T,
          C,
          L,
          U,
          M
        ) : ie && (P < 0 || x !== Pe[P] ? Se(Oe, _, rt, 2) : P--);
      }
    }
  }, Se = (p, b, _, O, T = null) => {
    const { el: C, type: L, transition: U, children: M, shapeFlag: x } = p;
    if (x & 6) {
      Se(p.component.subTree, b, _, O);
      return;
    }
    if (x & 128) {
      p.suspense.move(b, _, O);
      return;
    }
    if (x & 64) {
      L.move(p, b, _, tt);
      return;
    }
    if (L === oe) {
      n(C, b, _);
      for (let H = 0; H < M.length; H++)
        Se(M[H], b, _, O);
      n(p.anchor, b, _);
      return;
    }
    if (L === di) {
      D(p, b, _);
      return;
    }
    if (O !== 2 && x & 1 && U)
      if (O === 0)
        U.persisted && !C[ci] ? n(C, b, _) : (U.beforeEnter(C), n(C, b, _), ht(() => U.enter(C), T));
      else {
        const { leave: H, delayLeave: q, afterLeave: X } = U, Z = () => {
          p.ctx.isUnmounted ? i(C) : n(C, b, _);
        }, N = () => {
          const P = C._isLeaving || !!C[ci];
          C._isLeaving && C[ci](
            !0
            /* cancelled */
          ), U.persisted && !P ? Z() : H(C, () => {
            Z(), X && X();
          });
        };
        q ? q(C, Z, N) : N();
      }
    else
      n(C, b, _);
  }, Be = (p, b, _, O = !1, T = !1) => {
    const {
      type: C,
      props: L,
      ref: U,
      children: M,
      dynamicChildren: x,
      shapeFlag: K,
      patchFlag: H,
      dirs: q,
      cacheIndex: X,
      memo: Z
    } = p;
    if (H === -2 && (T = !1), U != null && (Xt(), en(U, null, _, p, !0), Jt()), X != null && (b.renderCache[X] = void 0), K & 256) {
      b.ctx.deactivate(p);
      return;
    }
    const N = K & 1 && q, P = !tn(p);
    let $;
    if (P && ($ = L && L.onVnodeBeforeUnmount) && Dt($, b, p), K & 6)
      At(p.component, _, O);
    else {
      if (K & 128) {
        p.suspense.unmount(_, O);
        return;
      }
      N && hr(p, null, b, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        b,
        _,
        tt,
        O
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== oe || H > 0 && H & 64) ? ze(
        x,
        b,
        _,
        !1,
        !0
      ) : (C === oe && H & 384 || !T && K & 16) && ze(M, b, _), O && Ye(p);
    }
    const Q = Z != null && X == null;
    (P && ($ = L && L.onVnodeUnmounted) || N || Q) && ht(() => {
      $ && Dt($, b, p), N && hr(p, null, b, "unmounted"), Q && (p.el = null);
    }, _);
  }, Ye = (p) => {
    const { type: b, el: _, anchor: O, transition: T } = p;
    if (b === oe) {
      de(_, O);
      return;
    }
    if (b === di) {
      V(p);
      return;
    }
    const C = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: L, delayLeave: U } = T, M = () => L(_, C);
      U ? U(p.el, C, M) : M();
    } else
      C();
  }, de = (p, b) => {
    let _;
    for (; p !== b; )
      _ = k(p), i(p), p = _;
    i(b);
  }, At = (p, b, _) => {
    const { bum: O, scope: T, job: C, subTree: L, um: U, m: M, a: x } = p;
    Po(M), Po(x), O && An(O), T.stop(), C && (C.flags |= 8, Be(L, p, b, _)), U && ht(U, b), ht(() => {
      p.isUnmounted = !0;
    }, b);
  }, ze = (p, b, _, O = !1, T = !1, C = 0) => {
    for (let L = C; L < p.length; L++)
      Be(p[L], b, _, O, T);
  }, ct = (p) => {
    if (p.shapeFlag & 6)
      return ct(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const b = k(p.anchor || p.el), _ = b && b[Ul];
    return _ ? k(_) : b;
  };
  let vt = !1;
  const Et = (p, b, _) => {
    let O;
    p == null ? b._vnode && (Be(b._vnode, null, null, !0), O = b._vnode.component) : W(
      b._vnode || null,
      p,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = p, vt || (vt = !0, Eo(O), $s(), vt = !1);
  }, tt = {
    p: W,
    um: Be,
    m: Se,
    r: Ye,
    mt: _t,
    mc: je,
    pc: ue,
    pbc: Ie,
    n: ct,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: rc(Et)
  };
}
function fi({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function mr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ua(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ee(n) && ee(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Wt(i[o]), l.el = s.el), !r && l.patchFlag !== -2 && ua(s, l)), l.type === Yn && (l.patchFlag === -1 && (l = i[o] = Wt(l)), l.el = s.el), l.type === Qt && !l.el && (l.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, l;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        l = o + s >> 1, e[r[l]] < v ? o = l + 1 : s = l;
      v < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function fa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fa(t);
}
function Po(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function da(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? da(t.subTree) : null;
}
const pa = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Nl(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), Yn = /* @__PURE__ */ Symbol.for("v-txt"), Qt = /* @__PURE__ */ Symbol.for("v-cmt"), di = /* @__PURE__ */ Symbol.for("v-stc"), Sr = [];
let gt = null;
function A(e = !1) {
  Sr.push(gt = e ? null : []);
}
function ha() {
  Sr.pop(), gt = Sr[Sr.length - 1] || null;
}
let an = 1;
function ko(e, t = !1) {
  an += e, e < 0 && gt && t && (gt.hasOnce = !0);
}
function ma(e) {
  return e.dynamicChildren = an > 0 ? gt || Lr : null, ha(), an > 0 && gt && gt.push(e), e;
}
function w(e, t, r, n, i, o) {
  return ma(
    c(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function Ec(e, t, r, n, i) {
  return ma(
    Yt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function ba(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Br(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ya = ({ key: e }) => e ?? null, Rn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ Ze(e) || ae(e) ? { i: xt, r: e, k: t, f: !!r } : e : null);
function c(e, t = null, r = null, n = 0, i = null, o = e === oe ? 0 : 1, s = !1, l = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ya(t),
    ref: t && Rn(t),
    scopeId: Vs,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xt
  };
  return l ? (Mn(d, r), o & 128 && e.normalize(d)) : r && (d.shapeFlag |= Ue(r) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && gt.push(d), d;
}
const Yt = Tc;
function Tc(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Gl) && (e = Qt), ba(e)) {
    const l = Hr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Mn(l, r), an > 0 && !o && gt && (l.shapeFlag & 6 ? gt[gt.indexOf(e)] = l : gt.push(l)), l.patchFlag = -2, l;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: d } = t;
    l && !Ue(l) && (t.class = Ir(l)), Te(d) && (/* @__PURE__ */ Gi(d) && !ee(d) && (d = Qe({}, d)), t.style = ji(d));
  }
  const s = Ue(e) ? 1 : pa(e) ? 128 : Wn(e) ? 64 : Te(e) ? 4 : ae(e) ? 2 : 0;
  return c(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function Sc(e) {
  return e ? /* @__PURE__ */ Gi(e) || ia(e) ? Qe({}, e) : e : null;
}
function Hr(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: d } = e, v = t ? xc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && ya(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ee(o) ? o.concat(Rn(t)) : [o, Rn(t)] : Rn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Hr(e.ssContent),
    ssFallback: e.ssFallback && Hr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && Xi(
    y,
    d.clone(y)
  ), y;
}
function ye(e = " ", t = 0) {
  return Yt(Yn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (A(), Ec(Qt, null, e)) : Yt(Qt, null, e);
}
function $t(e) {
  return e == null || typeof e == "boolean" ? Yt(Qt) : ee(e) ? Yt(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ba(e) ? Wt(e) : Yt(Yn, null, String(e));
}
function Wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hr(e);
}
function Mn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Mn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !ia(t) ? t._ctx = xt : i === 3 && xt && (xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ae(t)) {
    if (n & 65) {
      Mn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: xt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [ye(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function xc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ir([t.class, n.class]));
      else if (i === "style")
        t.style = ji([t.style, n.style]);
      else if (Hn(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(ee(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$n(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Dt(e, t, r, n = null) {
  It(e, t, 7, [
    r,
    n
  ]);
}
const Cc = Qs();
let Ac = 0;
function wc(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Cc, o = {
    uid: Ac++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Qa(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: sa(n, i),
    emitsOptions: ea(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ic.bind(null, o), e.ce && e.ce(o), o;
}
let at = null;
const Rc = () => at || xt;
let Un, ln;
{
  const e = Bn(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Un = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => at = r
  ), ln = t(
    "__VUE_SSR_SETTERS__",
    (r) => cn = r
  );
}
const dn = (e) => {
  const t = at;
  return Un(e), e.scope.on(), () => {
    e.scope.off(), Un(t);
  };
}, Lo = () => {
  at && at.scope.off(), Un(null);
};
function ga(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function Oc(e, t = !1, r = !1) {
  t && ln(t);
  const { props: n, children: i } = e.vnode, o = ga(e);
  uc(e, n, o, t), hc(e, i, r || t);
  const s = o ? Nc(e, t) : void 0;
  return t && ln(!1), s;
}
function Nc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    Xt();
    const i = e.setupContext = n.length > 1 ? kc(e) : null, o = dn(e), s = fn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = hs(s);
    if (Jt(), o(), (l || e.sp) && !tn(e) && Ws(e), l) {
      if (s.then(Lo, Lo), t)
        return s.then((d) => {
          ln(!0);
          try {
            Io(e, d, t);
          } finally {
            ln(!1);
          }
        }).catch((d) => {
          qn(d, e, 0);
        });
      e.asyncDep = s;
    } else
      Io(e, s);
  } else
    _a(e);
}
function Io(e, t, r) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Us(t)), _a(e);
}
function _a(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Vt);
  {
    const i = dn(e);
    Xt();
    try {
      Xl(e);
    } finally {
      Jt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return Je(e, "get", ""), e[t];
  }
};
function kc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Us(_l(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in rn)
        return rn[r](e);
    },
    has(t, r) {
      return r in t || r in rn;
    }
  })) : e.proxy;
}
function Lc(e) {
  return ae(e) && "__vccOpts" in e;
}
const J = (e, t) => /* @__PURE__ */ Cl(e, t, cn), Ic = "3.5.42";
let Mi;
const Mo = typeof window < "u" && window.trustedTypes;
if (Mo)
  try {
    Mi = /* @__PURE__ */ Mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const va = Mi ? (e) => Mi.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", qt = typeof document < "u" ? document : null, Uo = qt && /* @__PURE__ */ qt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? qt.createElementNS(Mc, e) : t === "mathml" ? qt.createElementNS(Uc, e) : r ? qt.createElement(e, { is: r }) : qt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => qt.createTextNode(e),
  createComment: (e) => qt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Uo.innerHTML = va(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Uo.content;
      if (n === "svg" || n === "mathml") {
        const d = l.firstChild;
        for (; d.firstChild; )
          l.appendChild(d.firstChild);
        l.removeChild(d);
      }
      t.insertBefore(l, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Do = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = Ue(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Ue(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          r[l] == null && Yr(n, l, "");
        }
      else
        for (const s in t)
          r[s] == null && Yr(n, s, "");
    for (const s in r) {
      s === "display" && (o = !0);
      const l = r[s];
      l != null ? qc(
        e,
        s,
        !Ue(t) && t ? t[s] : void 0,
        l
      ) || Yr(n, s, l) : Yr(n, s, "");
    }
  } else if (i) {
    if (t !== r) {
      const s = n[jc];
      s && (r += ";" + s), n.cssText = r, o = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Do in e && (e[Do] = o ? n.display : "", e[$c] && (n.display = "none"));
}
const Tn = /\s*!important$/;
function Yr(e, t, r) {
  if (ee(r))
    r.forEach((n) => Yr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Tn.test(r) ? e.setProperty(t, r.replace(Tn, ""), "important") : e.setProperty(t, r);
  else {
    const n = zc(e, t);
    Tn.test(r) ? e.setProperty(
      Cr(n),
      r.replace(Tn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Fo = ["Webkit", "Moz", "ms"], pi = {};
function zc(e, t) {
  const r = pi[t];
  if (r)
    return r;
  let n = Pt(t);
  if (n !== "filter" && n in e)
    return pi[t] = n;
  n = ys(n);
  for (let i = 0; i < Fo.length; i++) {
    const o = Fo[i] + n;
    if (o in e)
      return pi[t] = o;
  }
  return t;
}
function qc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Ho = "http://www.w3.org/1999/xlink";
function $o(e, t, r, n, i, o = Xa(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ho, t.slice(6, t.length)) : e.setAttributeNS(Ho, t, r) : r == null || o && !_s(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Bt(r) ? String(r) : r
  );
}
function jo(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? va(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, d = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (l !== d || !("_value" in e)) && (e.value = d), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const l = typeof e[t];
    l === "boolean" ? r = _s(r) : r == null && l === "string" ? (r = "", s = !0) : l === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function _r(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Vo = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const o = e[Vo] || (e[Vo] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [l, d] = Xc(t);
    if (n) {
      const v = o[t] = Qc(
        n,
        i
      );
      _r(e, l, v, d);
    } else s && (Wc(e, l, s, d), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Cr(e.slice(2)), t];
}
let hi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => hi || (Jc.then(() => hi = 0), hi = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (ee(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const s = i.slice(), l = [n];
      for (let d = 0; d < s.length && !n._stopped; d++) {
        const v = s[d];
        v && It(
          v,
          t,
          5,
          l
        );
      }
    } else
      It(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Hc(e, n, s) : t === "style" ? Bc(e, r, n) : Hn(t) ? $n(t) || Kc(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, s)) ? (jo(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $o(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? jo(e, Pt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), $o(e, t, n, s));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Bo(t) && ae(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Bo(t) && Ue(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Pt(t);
  return Array.isArray(r) ? r.some((i) => Pt(i) === n) : Object.keys(r).some((i) => Pt(i) === n);
}
const Dn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => An(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function zo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const vr = /* @__PURE__ */ Symbol("_assign"), Sn = /* @__PURE__ */ Symbol("_initialValue");
function mi(e, t, r) {
  return t && (e = e.trim()), r && (e = Vn(e)), e;
}
const bi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[Sn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Sn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[vr] = Dn(i);
    const o = n || i.props && i.props.type === "number";
    _r(e, t ? "change" : "input", (s) => {
      s.target.composing || e[vr](mi(e.value, r, o));
    }), (r || o) && _r(e, "change", () => {
      e.value = mi(e.value, r, o);
    }), t || (_r(e, "compositionstart", nu), _r(e, "compositionend", zo), _r(e, "change", zo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", o = e[Sn];
    delete e[Sn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[vr](mi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[vr] = Dn(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Vn(e.value) : e.value, d = t ?? "";
    if (l === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === d) || (e.value = d);
  }
}, it = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, _r(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => r ? Vn(Fn(d)) : Fn(d)
      ), o = e.multiple, s = o ? xr(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        o,
        o ? ee(s) ? i.slice() : i : s
      ];
      try {
        e[vr](s);
      } finally {
        Fs(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[vr] = Dn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qo(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[vr] = Dn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && qo(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return ur(e, t);
  if (xr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function qo(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !xr(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], l = Fn(s);
      if (r)
        if (n) {
          const d = typeof l;
          d === "string" || d === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Za(t, l) > -1;
        } else
          s.selected = t.has(l);
      else if (ur(Fn(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Fn(e) {
  return "_value" in e ? e._value : e.value;
}
const ou = ["ctrl", "shift", "alt", "meta"], su = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => ou.some((r) => e[`${r}Key`] && !t.includes(r))
}, xn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = su[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  }));
}, au = /* @__PURE__ */ Qe({ patchProp: eu }, Dc);
let Wo;
function lu() {
  return Wo || (Wo = bc(au));
}
const cu = ((...e) => {
  const t = lu().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = fu(n);
    if (!i) return;
    const o = t._component;
    !ae(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fu(e) {
  return Ue(e) ? document.querySelector(e) : e;
}
function du(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(n);
  if (i === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const o = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, o), o;
  } catch (o) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: o }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: o });
  }
}
function Ko(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, o, s, l = [], d = !0, v = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(d = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); d = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!d && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (v) throw i;
      }
    }
    return l;
  }
}
function mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bu(e, t) {
  return pu(e) || hu(e, t) || yu(e, t) || mu();
}
function yu(e, t) {
  if (e) {
    if (typeof e == "string") return Ko(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ko(e, t) : void 0;
  }
}
const Ea = Object.entries, Go = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let $e = Object.freeze, We = Object.seal, kr = Object.create, Ta = typeof Reflect < "u" && Reflect, Ui = Ta.apply, Di = Ta.construct;
$e || ($e = function(t) {
  return t;
});
We || (We = function(t) {
  return t;
});
Ui || (Ui = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  return t.apply(r, i);
});
Di || (Di = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const gr = He(Array.prototype.forEach), Eu = He(Array.prototype.lastIndexOf), Yo = He(Array.prototype.pop), zr = He(Array.prototype.push), Tu = He(Array.prototype.splice), Dr = Array.isArray, Xr = He(String.prototype.toLowerCase), yi = He(String.prototype.toString), Xo = He(String.prototype.match), qr = He(String.prototype.replace), Jo = He(String.prototype.indexOf), Su = He(String.prototype.trim), xu = He(Number.prototype.toString), Cu = He(Boolean.prototype.toString), Zo = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Qo = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), mt = He(Object.prototype.hasOwnProperty), Wr = He(Object.prototype.toString), Xe = He(RegExp.prototype.test), br = Au(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ui(e, t, n);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Di(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xr;
  if (Go && Go(e, null), !Dr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const o = r(i);
      o !== i && (gu(t) || (t[n] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function wu(e) {
  for (let t = 0; t < e.length; t++)
    mt(e, t) || (e[t] = null);
  return e;
}
function yt(e) {
  const t = kr(null);
  for (const n of Ea(e)) {
    var r = bu(n, 2);
    const i = r[0], o = r[1];
    mt(e, i) && (Dr(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = yt(o) : t[i] = o);
  }
  return t;
}
function Ru(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return xu(e);
    case "boolean":
      return Cu(e);
    case "bigint":
      return Zo ? Zo(e) : "0";
    case "symbol":
      return Qo ? Qo(e) : "Symbol()";
    case "undefined":
      return Wr(e);
    case "function":
    case "object": {
      if (e === null)
        return Wr(e);
      const t = e, r = Nt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Wr(n);
      }
      return Wr(e);
    }
    default:
      return Wr(e);
  }
}
function Nt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ou(e) {
  try {
    return Xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const es = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gi = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _i = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), vi = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ts = $e(["#text"]), rs = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ei = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Cn = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = We(/{{[\w\W]*|^[\w\W]*}}/g), Lu = We(/<%[\w\W]*|^[\w\W]*%>/g), Iu = We(/\${[\w\W]*/g), Mu = We(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = We(/^aria-[\-\w]+$/), is = We(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = We(/^(?:\w+script|data):/i), Fu = We(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = We(/^html$/i), $u = We(/^[a-z][.\w]*(-[.\w]+)+$/i), os = We(/<[/\w!]/g), ss = We(/<[/\w]/g), ju = We(/<\/no(script|embed|frames)/i), Vu = We(/\/>/i), bt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Sa = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = $e(pe({}, Sa)), zu = (function() {
  const e = {};
  return gr(Sa, (t) => {
    e[t] = We(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $e(e);
})(), qu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const o = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, as = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, sr = function(t, r, n, i) {
  return mt(t, r) && Dr(t[r]) ? pe(i.base ? yt(i.base) : {}, t[r], i.transform) : n;
}, Ti = function(t, r, n) {
  const i = mt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? yt(i) : n();
};
function xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qu();
  const t = (F) => xa(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== bt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, d = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, k = l.prototype, j = Nt(k, "cloneNode"), re = Nt(k, "remove"), W = Nt(k, "nextSibling"), se = Nt(k, "childNodes"), ne = Nt(k, "parentNode"), z = Nt(k, "shadowRoot"), D = Nt(k, "attributes"), V = s && s.prototype ? Nt(s.prototype, "nodeType") : null, le = s && s.prototype ? Nt(s.prototype, "nodeName") : null, Le = s && s.prototype ? Nt(s.prototype, "ownerDocument") : null, Ne = function(u) {
    return V ? V(u) : u.nodeType;
  }, je = function(u) {
    return le ? le(u) : u.nodeName;
  };
  if (typeof o == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let ve, Ie = "", et, lt = !1, Ke = 0;
  const _t = function() {
    if (Ke > 0)
      throw br('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(u) {
    _t(), Ke++;
    try {
      return ve.createHTML(u);
    } finally {
      Ke--;
    }
  }, Me = function(u) {
    _t(), Ke++;
    try {
      return ve.createScriptURL(u);
    } finally {
      Ke--;
    }
  }, he = function() {
    return lt || (et = Wu(E, i), lt = !0), et;
  }, ue = r, Ve = ue.implementation, me = ue.createNodeIterator, Se = ue.createDocumentFragment, Be = ue.getElementsByTagName, Ye = n.importNode;
  let de = as();
  t.isSupported = typeof Ea == "function" && typeof ne == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const At = ku, ze = Lu, ct = Iu, vt = Mu, Et = Uu, tt = Du, ut = Fu, p = $u;
  let b = is, _ = null;
  const O = pe({}, [...es, ...gi, ..._i, ...vi, ...ts]);
  let T = null;
  const C = pe({}, [...rs, ...Ei, ...ns, ...Cn]);
  let L = Object.seal(kr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), U = null, M = null;
  const x = Object.seal(kr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let K = !0, H = !0, q = !1, X = !0, Z = !1, N = !0, P = !1, $ = !1, Q = null, ie = null, be = !1, ce = !1, Pe = !1, Re = !1, Oe = !0, ft = !1;
  const rt = "user-content-";
  let Mt = !0, fr = !1, wt = {}, Tt = null;
  const tr = pe({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let rr = null;
  const nr = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let St = null;
  const dr = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rt = "http://www.w3.org/1998/Math/MathML", I = "http://www.w3.org/2000/svg", S = "http://www.w3.org/1999/xhtml";
  let h = S, xe = !1, Ot = null;
  const ir = pe({}, [Rt, I, S], yi), eo = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let Jn = pe({}, eo);
  const to = $e(["annotation-xml"]);
  let Zn = pe({}, to);
  const Aa = pe({}, ["title", "style", "font", "a", "script"]);
  let $r = null;
  const wa = ["application/xhtml+xml", "text/html"], Ra = "text/html";
  let De = null, Ar = null;
  const Oa = r.createElement("form"), ro = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Qn = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ar && Ar === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = yt(u), $r = // eslint-disable-next-line unicorn/prefer-includes
    wa.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Ra : u.PARSER_MEDIA_TYPE, De = $r === "application/xhtml+xml" ? yi : Xr, _ = sr(u, "ALLOWED_TAGS", O, {
      transform: De
    }), T = sr(u, "ALLOWED_ATTR", C, {
      transform: De
    }), Ot = sr(u, "ALLOWED_NAMESPACES", ir, {
      transform: yi
    }), St = sr(u, "ADD_URI_SAFE_ATTR", dr, {
      transform: De,
      base: dr
    }), rr = sr(u, "ADD_DATA_URI_TAGS", nr, {
      transform: De,
      base: nr
    }), Tt = sr(u, "FORBID_CONTENTS", tr, {
      transform: De
    }), U = sr(u, "FORBID_TAGS", yt({}), {
      transform: De
    }), M = sr(u, "FORBID_ATTR", yt({}), {
      transform: De
    }), wt = mt(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? yt(u.USE_PROFILES) : u.USE_PROFILES : !1, K = u.ALLOW_ARIA_ATTR !== !1, H = u.ALLOW_DATA_ATTR !== !1, q = u.ALLOW_UNKNOWN_PROTOCOLS || !1, X = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = u.SAFE_FOR_TEMPLATES || !1, N = u.SAFE_FOR_XML !== !1, P = u.WHOLE_DOCUMENT || !1, ce = u.RETURN_DOM || !1, Pe = u.RETURN_DOM_FRAGMENT || !1, Re = u.RETURN_TRUSTED_TYPE || !1, be = u.FORCE_BODY || !1, Oe = u.SANITIZE_DOM !== !1, ft = u.SANITIZE_NAMED_PROPS || !1, Mt = u.KEEP_CONTENT !== !1, fr = u.IN_PLACE || !1, b = Ou(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : is, h = typeof u.NAMESPACE == "string" ? u.NAMESPACE : S, Jn = Ti(
      u,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, eo)
      // Default built-in map
    ), Zn = Ti(
      u,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, to)
      // Default built-in map
    );
    const g = Ti(u, "CUSTOM_ELEMENT_HANDLING", () => kr(null));
    if (L = kr(null), mt(g, "tagNameCheck") && ro(g.tagNameCheck) && (L.tagNameCheck = g.tagNameCheck), mt(g, "attributeNameCheck") && ro(g.attributeNameCheck) && (L.attributeNameCheck = g.attributeNameCheck), mt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), We(L), Z && (H = !1), Pe && (ce = !0), wt && (_ = pe({}, ts), T = kr(null), wt.html === !0 && (pe(_, es), pe(T, rs)), wt.svg === !0 && (pe(_, gi), pe(T, Ei), pe(T, Cn)), wt.svgFilters === !0 && (pe(_, _i), pe(T, Ei), pe(T, Cn)), wt.mathMl === !0 && (pe(_, vi), pe(T, ns), pe(T, Cn))), x.tagCheck = null, x.attributeCheck = null, mt(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? x.tagCheck = u.ADD_TAGS : Dr(u.ADD_TAGS) && (_ === O && (_ = yt(_)), pe(_, u.ADD_TAGS, De))), mt(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? x.attributeCheck = u.ADD_ATTR : Dr(u.ADD_ATTR) && (T === C && (T = yt(T)), pe(T, u.ADD_ATTR, De))), mt(u, "ADD_FORBID_CONTENTS") && Dr(u.ADD_FORBID_CONTENTS) && (Tt === tr && (Tt = yt(Tt)), pe(Tt, u.ADD_FORBID_CONTENTS, De)), Mt && (_["#text"] = !0), P && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete U.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw br('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw br('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = ve;
      ve = u.TRUSTED_TYPES_POLICY;
      try {
        Ie = Fe("");
      } catch (B) {
        throw ve = R, B;
      }
    } else u.TRUSTED_TYPES_POLICY === null ? (ve = void 0, Ie = "") : (ve === void 0 && (ve = he()), ve && typeof Ie == "string" && (Ie = Fe("")));
    $e && $e(u), Ar = u;
  }, no = pe({}, [...gi, ..._i, ...Nu]), io = pe({}, [...vi, ...Pu]), Na = function(u, g, R) {
    return g.namespaceURI === S ? u === "svg" : g.namespaceURI === Rt ? u === "svg" && (R === "annotation-xml" || Jn[R]) : !!no[u];
  }, Pa = function(u, g, R) {
    return g.namespaceURI === S ? u === "math" : g.namespaceURI === I ? u === "math" && Zn[R] : !!io[u];
  }, ka = function(u, g, R) {
    return g.namespaceURI === I && !Zn[R] || g.namespaceURI === Rt && !Jn[R] ? !1 : !io[u] && (Aa[u] || !no[u]);
  }, La = function(u) {
    let g = ne(u);
    (!g || !g.tagName) && (g = {
      namespaceURI: h,
      tagName: "template"
    });
    const R = Xr(u.tagName), B = Xr(g.tagName);
    return Ot[u.namespaceURI] ? u.namespaceURI === I ? Na(R, g, B) : u.namespaceURI === Rt ? Pa(R, g, B) : u.namespaceURI === S ? ka(R, g, B) : !!($r === "application/xhtml+xml" && Ot[u.namespaceURI]) : !1;
  }, or = function(u) {
    zr(t.removed, {
      element: u
    });
    try {
      ne(u).removeChild(u);
    } catch {
      if (re(u), !ne(u))
        throw br("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oo = function(u, g, R) {
    try {
      u.removeAttributeNode(g);
    } catch {
      try {
        u.removeAttribute(R);
      } catch {
      }
    }
  }, pn = function(u) {
    hn(u);
    const g = se(u);
    if (g) {
      const B = [];
      gr(g, (Y) => {
        zr(B, Y);
      }), gr(B, (Y) => {
        try {
          re(Y);
        } catch {
        }
      });
    }
    const R = D(u);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const Y = R[B], te = Y && Y.name;
        typeof te == "string" && oo(u, Y, te);
      }
  }, pr = function(u, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(u);
      } catch {
        R = null;
      }
    zr(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(u);
    } catch {
      try {
        g.removeAttribute(u);
      } catch {
      }
    }
    if (u === "is")
      if (ce || Pe)
        try {
          or(g);
        } catch {
        }
      else
        try {
          g.setAttribute(u, "");
        } catch {
        }
  }, Ia = function(u) {
    const g = D(u);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], Y = B && B.name;
        typeof Y != "string" || T[De(Y)] || oo(u, B, Y);
      }
  }, hn = function(u) {
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop();
      Ne(R) === bt.element && Ia(R);
      const Y = se(R);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, so = function(u, g) {
    return N ? u === "patchsrc" ? !0 : u === "for" && g !== "label" && g !== "output" : !1;
  }, Ma = function(u) {
    if (!N)
      return;
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Ne(R);
      if (B === bt.processingInstruction || B === bt.comment && Xe(ss, R.data)) {
        try {
          re(R);
        } catch {
        }
        continue;
      }
      if (B === bt.element) {
        const te = R, Ae = De(je(R));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && so("for", Ae) && te.removeAttribute("for");
        } catch {
        }
      }
      const Y = se(R);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, ao = function(u) {
    let g = null, R = null;
    if (be)
      u = "<remove></remove>" + u;
    else {
      const te = Xo(u, /^[\r\n\t ]+/);
      R = te && te[0];
    }
    $r === "application/xhtml+xml" && h === S && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const B = ve ? Fe(u) : u;
    if (h === S)
      try {
        g = new y().parseFromString(B, $r);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ve.createDocument(h, "template", null);
      try {
        g.documentElement.innerHTML = xe ? Ie : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return u && R && Y.insertBefore(r.createTextNode(R), Y.childNodes[0] || null), h === S ? Be.call(g, P ? "html" : "body")[0] : P ? g.documentElement : Y;
  }, lo = function(u) {
    const g = Le ? Le(u) : u.ownerDocument;
    return me.call(
      g || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, mn = function(u) {
    return u = qr(u, At, " "), u = qr(u, ze, " "), u = qr(u, ct, " "), u;
  }, ei = function(u) {
    var g;
    u.normalize();
    const R = Le ? Le(u) : u.ownerDocument, B = me.call(
      R || u,
      u,
      // eslint-disable-next-line no-bitwise
      d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = mn(Y.data), Y = B.nextNode();
    const te = (g = u.querySelectorAll) === null || g === void 0 ? void 0 : g.call(u, "template");
    te && gr(te, (Ae) => {
      wr(Ae.content) && ei(Ae.content);
    });
  }, bn = function(u) {
    const g = le ? le(u) : null;
    return typeof g != "string" || De(g) !== "form" ? !1 : typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    u.attributes !== D(u) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    u.nodeType !== V(u) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    u.childNodes !== se(u);
  }, wr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return V(u) === bt.documentFragment;
    } catch {
      return !1;
    }
  }, jr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return typeof V(u) == "number";
    } catch {
      return !1;
    }
  };
  function Ut(F, u, g) {
    F.length !== 0 && gr(F, (R) => {
      R.call(t, u, g, Ar);
    });
  }
  const Ua = function(u, g) {
    return !!(N && u.hasChildNodes() && !jr(u.firstElementChild) && Xe(os, u.textContent) && Xe(os, u.innerHTML) || N && u.namespaceURI === S && Bu[g] && (jr(u.firstElementChild) || typeof u.textContent == "string" && Xe(zu[g], u.textContent)) || u.nodeType === bt.processingInstruction || N && u.nodeType === bt.comment && Xe(ss, u.data));
  }, yn = function(u, g) {
    if (u instanceof RegExp)
      return Xe(u, g);
    if (u instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), Y = 2; Y < R; Y++)
        B[Y - 2] = arguments[Y];
      return !!u(g, ...B);
    }
    return !1;
  }, Da = function(u, g, R) {
    if (!U[g] && ho(g) && yn(L.tagNameCheck, g))
      return !1;
    if (Mt && !Tt[g]) {
      const B = ne(u), Y = se(u);
      if (Y && B) {
        const te = Y.length;
        for (let Ae = te - 1; Ae >= 0; --Ae) {
          const ke = u === R ? j(Y[Ae], !0) : Y[Ae];
          B.insertBefore(ke, W(u));
        }
      }
    }
    return or(u), !0;
  }, co = function(u, g, R, B) {
    return u.length === 0 ? g : g === R || g === B ? yt(g) : g;
  }, uo = function(u, g) {
    return u === g || ne(u) !== null ? !1 : (fr && hn(u), !0);
  }, fo = function(u, g) {
    if (Ut(de.beforeSanitizeElements, u, null), uo(u, g))
      return !0;
    if (bn(u))
      return or(u), !0;
    const R = De(je(u));
    if (_ = co(de.uponSanitizeElement, _, O, Q), Ut(de.uponSanitizeElement, u, {
      tagName: R,
      allowedTags: _
    }), uo(u, g))
      return !0;
    if (Ua(u, R))
      return or(u), !0;
    if (U[R] || !(x.tagCheck instanceof Function && x.tagCheck(R)) && !_[R]) {
      const Y = Da(u, R, g);
      return Y === !1 && Ut(de.afterSanitizeElements, u, null), Y;
    }
    if (Ne(u) === bt.element && !La(u) || (R === "noscript" || R === "noembed" || R === "noframes") && Xe(ju, u.innerHTML))
      return or(u), !0;
    if (Z && u.nodeType === bt.text) {
      const Y = mn(u.textContent);
      u.textContent !== Y && (zr(t.removed, {
        element: u.cloneNode()
      }), u.textContent = Y);
    }
    return Ut(de.afterSanitizeElements, u, null), !1;
  }, po = function(u, g, R) {
    if (M[g] || so(g, u) || Oe && (g === "id" || g === "name") && (R in r || R in Oa))
      return !1;
    const B = T[g] || x.attributeCheck instanceof Function && x.attributeCheck(g, u);
    return H && Xe(vt, g) || K && Xe(Et, g) ? !0 : B ? St[g] || Xe(b, qr(R, ut, "")) || (g === "src" || g === "xlink:href" || g === "href") && u !== "script" && Jo(R, "data:") === 0 && rr[u] || q && !Xe(tt, qr(R, ut, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ho(u) && yn(L.tagNameCheck, u) && yn(L.attributeNameCheck, g, u) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && L.allowCustomizedBuiltInElements && yn(L.tagNameCheck, R)
    );
  }, Fa = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ho = function(u) {
    return !Fa[Xr(u)] && Xe(p, u);
  }, Ha = function(u, g, R, B) {
    if (ve && typeof E == "object" && typeof E.getAttributeType == "function" && !R)
      switch (E.getAttributeType(u, g)) {
        case "TrustedHTML":
          return Fe(B);
        case "TrustedScriptURL":
          return Me(B);
      }
    return B;
  }, $a = function(u, g, R, B) {
    try {
      R ? u.setAttributeNS(R, g, B) : u.setAttribute(g, B), bn(u) ? or(u) : Yo(t.removed);
    } catch {
      pr(g, u);
    }
  }, mo = function(u) {
    Ut(de.beforeSanitizeAttributes, u, null);
    const g = u.attributes;
    if (!g || bn(u))
      return;
    T = co(de.uponSanitizeAttribute, T, C, ie);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Y = De(u.nodeName);
    for (; B--; ) {
      const te = g[B], Ae = te.name, ke = te.namespaceURI, dt = te.value, pt = De(Ae), ri = dt;
      let nt = Ae === "value" ? ri : Su(ri);
      if (R.attrName = pt, R.attrValue = nt, R.keepAttr = !0, R.forceKeepAttr = void 0, Ut(de.uponSanitizeAttribute, u, R), nt = R.attrValue, ft && (pt === "id" || pt === "name") && Jo(nt, rt) !== 0 && (pr(Ae, u, te), nt = rt + nt), N && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, nt)) {
        pr(Ae, u, te);
        continue;
      }
      if (pt === "attributename" && Xo(nt, "href")) {
        pr(Ae, u, te);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          pr(Ae, u, te);
          continue;
        }
        if (!X && Xe(Vu, nt)) {
          pr(Ae, u, te);
          continue;
        }
        if (Z && (nt = mn(nt)), !po(Y, pt, nt)) {
          pr(Ae, u, te);
          continue;
        }
        nt = Ha(Y, pt, ke, nt), nt !== ri && $a(u, Ae, ke, nt);
      }
    }
    Ut(de.afterSanitizeAttributes, u, null);
  }, gn = function(u) {
    let g = null;
    const R = lo(u);
    for (Ut(de.beforeSanitizeShadowDOM, u, null); g = R.nextNode(); )
      if (Ut(de.uponSanitizeShadowNode, g, null), fo(g, u), mo(g), wr(g.content) && gn(g.content), Ne(g) === bt.element) {
        const B = z(g);
        wr(B) && (ti(B), gn(B));
      }
    Ut(de.afterSanitizeShadowDOM, u, null);
  }, ti = function(u) {
    const g = [{
      node: u,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        gn(R.shadow);
        continue;
      }
      const B = R.node, te = Ne(B) === bt.element, Ae = se(B);
      if (Ae)
        for (let ke = Ae.length - 1; ke >= 0; --ke)
          g.push({
            node: Ae[ke],
            shadow: null
          });
      if (te) {
        const ke = le ? le(B) : null;
        if (typeof ke == "string" && De(ke) === "template") {
          const dt = B.content;
          wr(dt) && g.push({
            node: dt,
            shadow: null
          });
        }
      }
      if (te) {
        const ke = z(B);
        wr(ke) && g.push({
          node: null,
          shadow: ke
        }, {
          node: ke,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, Y = null;
    if (xe = !F, xe && (F = "<!-->"), typeof F != "string" && !jr(F) && (F = Ru(F), typeof F != "string"))
      throw br("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = Q, T = ie) : Qn(u), (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && (_ = yt(_)), de.uponSanitizeAttribute.length > 0 && (T = yt(T)), t.removed = [];
    const te = fr && typeof F != "string" && jr(F);
    if (te) {
      Ma(F);
      const dt = je(F);
      if (typeof dt == "string") {
        const pt = De(dt);
        if (!_[pt] || U[pt])
          throw pn(F), br("root node is forbidden and cannot be sanitized in-place");
      }
      if (bn(F))
        throw pn(F), br("root node is clobbered and cannot be sanitized in-place");
      try {
        ti(F);
      } catch (pt) {
        throw pn(F), pt;
      }
    } else if (jr(F))
      g = ao("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === bt.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), ti(R);
    else {
      if (!ce && !Z && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return ve && Re ? Fe(F) : F;
      if (g = ao(F), !g)
        return ce ? null : Re ? Ie : "";
    }
    g && be && or(g.firstChild);
    const Ae = te ? F : g;
    try {
      const dt = lo(Ae);
      for (; B = dt.nextNode(); )
        fo(B, Ae), mo(B), wr(B.content) && gn(B.content);
    } catch (dt) {
      throw te && (pn(F), gr(t.removed, (pt) => {
        pt.element && hn(pt.element);
      })), dt;
    }
    if (te)
      return gr(t.removed, (dt) => {
        dt.element && hn(dt.element);
      }), Z && ei(F), F;
    if (ce) {
      if (Z && ei(g), Pe)
        for (Y = Se.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (T.shadowroot || T.shadowrootmode) && (Y = Ye.call(n, Y, !0)), Y;
    }
    let ke = P ? g.outerHTML : g.innerHTML;
    return P && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Xe(Hu, g.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + ke), Z && (ke = mn(ke)), ve && Re ? Fe(ke) : ke;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qn(F), $ = !0, Q = _, ie = T;
  }, t.clearConfig = function() {
    Ar = null, $ = !1, Q = null, ie = null, ve = et, Ie = "";
  }, t.isValidAttribute = function(F, u, g) {
    Ar || Qn({});
    const R = De(F), B = De(u);
    return po(R, B, g);
  }, t.addHook = function(F, u) {
    typeof u == "function" && mt(de, F) && zr(de[F], u);
  }, t.removeHook = function(F, u) {
    if (mt(de, F)) {
      if (u !== void 0) {
        const g = Eu(de[F], u);
        return g === -1 ? void 0 : Tu(de[F], g, 1)[0];
      }
      return Yo(de[F]);
    }
  }, t.removeHooks = function(F) {
    mt(de, F) && (de[F] = []);
  }, t.removeAllHooks = function() {
    de = as();
  }, t;
}
var Ku = xa();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Si, ls;
function Yu() {
  if (ls) return Si;
  ls = 1;
  var e = /["'&<>]/;
  Si = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var o, s = "", l = 0, d = 0;
    for (l = i.index; l < n.length; l++) {
      switch (n.charCodeAt(l)) {
        case 34:
          o = "&quot;";
          break;
        case 38:
          o = "&amp;";
          break;
        case 39:
          o = "&#39;";
          break;
        case 60:
          o = "&lt;";
          break;
        case 62:
          o = "&gt;";
          break;
        default:
          continue;
      }
      d !== l && (s += n.substring(d, l)), d = l + 1, s += o;
    }
    return d !== l ? s + n.substring(d, l) : s;
  }
  return Si;
}
var Xu = Yu();
const cs = /* @__PURE__ */ Gu(Xu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Ju(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function a(e, t, r, n, i) {
  const o = typeof r == "object" ? r : void 0, s = typeof n == "number" ? n : typeof r == "number" ? r : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, d = (W) => W, v = (l.sanitize ? Ku.sanitize : d) || d, y = l.escape ? cs : d, E = (W) => typeof W == "string" || typeof W == "number", k = (W, se, ne) => W.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, D) => {
    if (se === void 0 || !(D in se))
      return y(z);
    const V = se[D];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? cs : d)(`${V.value}`) : y(z);
  });
  let re = (i?.bundle ?? Ju(e)).translations[t] || t;
  return re = Array.isArray(re) ? re[0] : re, v(typeof o == "object" || s !== void 0 ? k(
    re,
    o,
    s
  ) : re);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, of = ["aria-label"], sf = { class: "library-catalogue-actions-list" }, af = ["href"], lf = ["href"], cf = ["href"], uf = ["href"], ff = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, df = { class: "library-muted library-catalogue-eyebrow" }, pf = { id: "library-actions-health-heading" }, hf = { class: "library-muted" }, mf = {
  key: 0,
  class: "library-muted"
}, bf = {
  key: 1,
  class: "library-notice"
}, yf = {
  key: 2,
  class: "library-muted"
}, gf = {
  key: 0,
  class: "library-muted"
}, _f = {
  key: 1,
  class: "library-muted"
}, vf = {
  key: 2,
  class: "library-muted"
}, Ef = ["disabled"], Tf = { class: "library-actions-health-links" }, Sf = ["href"], xf = ["href"], Cf = ["href"], Af = ["href"], wf = { class: "library-actions-health-grid" }, Rf = { class: "library-import-health-number" }, Of = { class: "library-import-health-number" }, Nf = { class: "library-muted" }, Pf = { class: "library-muted" }, kf = { class: "library-muted" }, Lf = {
  key: 3,
  class: "library-import-health-examples"
}, If = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Mf = { class: "library-muted" }, Uf = ["href"], Df = ["href"], Ff = ["action"], Hf = ["value"], $f = {
  type: "submit",
  class: "button secondary"
}, jf = { class: "library-muted" }, Vf = ["href"], Bf = ["action"], zf = ["value"], qf = {
  type: "submit",
  class: "button secondary"
}, Wf = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Kf = ["aria-label"], Gf = ["name", "value"], Yf = { class: "library-quick-search-row" }, Xf = { class: "library-quick-filter-search" }, Jf = ["aria-label"], Zf = { class: "library-quick-filter-options" }, Qf = { class: "library-quick-filter-option-grid" }, ed = { value: "title" }, td = { value: "recent" }, rd = { value: "publicationDate" }, nd = { value: "publication" }, id = { value: "lastOpened" }, od = { value: "format" }, sd = { value: "" }, ad = { value: "1" }, ld = ["value"], cd = ["value"], ud = ["aria-label"], fd = ["aria-label"], dd = { class: "library-filter-panel" }, pd = { class: "library-filter-panel-summary" }, hd = ["aria-label"], md = { value: "" }, bd = ["value"], yd = { value: "" }, gd = ["value"], _d = { value: "" }, vd = ["value"], Ed = { value: "" }, Td = ["value"], Sd = { value: "" }, xd = ["value"], Cd = { value: "" }, Ad = ["value"], wd = { value: "" }, Rd = ["value"], Od = { value: "" }, Nd = ["value"], Pd = { value: "" }, kd = ["value"], Ld = { value: "" }, Id = ["value"], Md = { value: "" }, Ud = { value: "1" }, Dd = { value: "" }, Fd = { value: "1" }, Hd = { value: "title" }, $d = { value: "recent" }, jd = { value: "publicationDate" }, Vd = { value: "publication" }, Bd = { value: "lastOpened" }, zd = { value: "format" }, qd = ["value"], Wd = ["value"], Kd = ["aria-label"], Gd = ["aria-label"], Yd = ["href"], Xd = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Jd = { class: "library-muted library-catalogue-eyebrow" }, Zd = { id: "library-discovery-heading" }, Qd = { class: "library-muted" }, ep = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, tp = { key: 0 }, rp = { key: 1 }, np = { key: 2 }, ip = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, op = { key: 0 }, sp = { key: 1 }, ap = {
  href: "/apps/library/",
  class: "button secondary"
}, lp = { class: "library-catalogue-status-row" }, cp = { class: "library-muted library-filter-result-summary" }, up = { key: 0 }, fp = { href: "?" }, dp = ["aria-label"], pp = { class: "library-pagination-range" }, hp = { key: 0 }, mp = ["href"], bp = {
  key: 1,
  class: "library-muted"
}, yp = ["href"], gp = {
  key: 3,
  class: "library-muted"
}, _p = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, vp = ["aria-label"], Ep = { class: "library-settings-count-badge" }, Tp = ["action"], Sp = ["value"], xp = ["name", "value"], Cp = ["placeholder"], Ap = {
  type: "submit",
  class: "button primary"
}, wp = { class: "library-muted" }, Rp = ["action"], Op = ["value"], Np = ["name", "value"], Pp = ["placeholder"], kp = {
  type: "submit",
  class: "button secondary"
}, Lp = { class: "library-muted" }, Ip = ["action"], Mp = ["value"], Up = ["name", "value"], Dp = {
  type: "submit",
  class: "button secondary"
}, Fp = { class: "library-muted" }, Hp = ["action"], $p = ["value"], jp = ["name", "value"], Vp = { name: "bulkEditField" }, Bp = { value: "publicationType" }, zp = { value: "subtitle" }, qp = { value: "creators" }, Wp = { value: "publication" }, Kp = { value: "publicationDate" }, Gp = { value: "language" }, Yp = { value: "publisher" }, Xp = { value: "genres" }, Jp = { value: "classifications" }, Zp = {
  type: "submit",
  class: "button secondary"
}, Qp = { class: "library-muted" }, eh = ["action"], th = ["value"], rh = ["name", "value"], nh = {
  type: "submit",
  class: "button secondary"
}, ih = { class: "library-muted" }, oh = { class: "library-discovery-shortcuts" }, sh = { class: "library-discovery-shortcut-grid" }, ah = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, lh = { id: "library-periodical-groups-heading" }, ch = { class: "library-muted" }, uh = ["href"], fh = { class: "library-muted" }, dh = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, ph = { id: "library-periodical-groups-empty-heading" }, hh = { class: "library-muted" }, mh = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, bh = { id: "library-year-groups-heading" }, yh = ["href"], gh = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, _h = { id: "library-creator-groups-heading" }, vh = ["href"], Eh = ["aria-label"], Th = ["href", "aria-label"], Sh = { class: "library-muted" }, xh = { class: "library-empty-actions" }, Ch = ["href"], Ah = { class: "library-muted" }, wh = { class: "library-muted" }, Rh = { class: "library-empty-actions" }, Oh = ["href"], Nh = { class: "library-muted" }, Ph = { class: "library-empty-actions" }, kh = ["href"], Lh = {
  href: "?",
  class: "button primary"
}, Ih = { class: "library-muted" }, Mh = { class: "library-empty-actions" }, Uh = ["href"], Dh = {
  key: 4,
  class: "library-cover-gallery"
}, Fh = ["href", "aria-label"], Hh = ["src", "alt"], $h = ["action", "onSubmit"], jh = ["value"], Vh = ["value"], Bh = ["aria-pressed", "title", "aria-label", "onClick"], zh = { class: "library-cover-summary" }, qh = { class: "library-cover-primary" }, Wh = ["aria-label"], Kh = ["href"], Gh = ["onToggle"], Yh = ["aria-label"], Xh = { class: "library-cover-meta" }, Jh = {
  key: 0,
  class: "library-creator"
}, Zh = { class: "library-cover-detail-list" }, Qh = { class: "library-cover-detail-chip" }, em = {
  key: 0,
  class: "library-cover-detail-chip"
}, tm = {
  key: 1,
  class: "library-cover-detail-chip"
}, rm = {
  key: 2,
  class: "library-cover-detail-chip"
}, nm = {
  key: 3,
  class: "library-cover-detail-chip"
}, im = {
  key: 4,
  class: "library-cover-detail-chip"
}, om = {
  key: 5,
  class: "library-cover-detail-chip"
}, sm = {
  key: 6,
  class: "library-cover-detail-chip"
}, am = {
  key: 1,
  class: "library-muted library-cover-description"
}, lm = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, cm = { key: 0 }, um = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, fm = {
  key: 0,
  class: "library-muted"
}, dm = { class: "library-cover-actions" }, pm = ["href"], hm = ["href"], mm = ["href"], bm = ["aria-label"], ym = { class: "library-pagination-range" }, gm = { key: 0 }, _m = ["href"], vm = {
  key: 1,
  class: "library-muted"
}, Em = ["href"], Tm = {
  key: 3,
  class: "library-muted"
}, Sm = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ lr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), o = /* @__PURE__ */ lr((i.items || []).map((I) => ({ ...I }))), s = J(() => o), l = J(() => i.shelves || []), d = J(() => i.formats || []), v = J(() => i.publications || []), y = J(() => i.publicationSummaries || []), E = J(() => i.publicationIssueContext || null), k = J(() => i.publicationYears || []), j = J(() => i.creators || []), re = J(() => i.scanStatuses || []), W = J(() => i.workflowStatuses || []), se = J(() => i.genres || []), ne = J(() => i.classifications || []), z = J(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ lr({
      q: i.activeFilters?.q || "",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      sort: i.activeFilters?.sort || "title"
    }), V = J(() => i.settingsUrl || ""), le = J(() => i.requestToken || ""), Le = J(() => i.metadataExportUrl || ""), Ne = J(() => i.metadataSidecarManifestUrl || ""), je = J(() => i.metadataSidecarBundleUrl || ""), ve = J(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ie = J(() => i.batchTagUrl || "/apps/library/bulk/tags"), et = J(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), lt = J(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = J(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), _t = J(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Fe = J(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Me = J(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), he = J(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ue = J(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Ve = J(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), me = /* @__PURE__ */ lr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Se = J(() => me.summary || {}), Be = J(() => {
      const I = Number(Se.value.generatedAt || 0);
      return I > 0 ? new Date(I * 1e3).toLocaleString() : "";
    }), Ye = J(() => Se.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), de = J(() => Se.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), At = J(() => Se.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), ze = J(() => Se.value.coverSupportMatrix || At.value.byFormat || []), ct = J(() => Se.value.environmentCapabilities || {}), vt = J(() => i.discoveryPage === "publication"), Et = J(() => i.discoveryPage === "year"), tt = J(() => i.discoveryPage === "creator"), ut = J(() => vt.value || Et.value || tt.value), p = J(() => i.discoveryTitle || D.publication || D.year || D.creator || ""), b = J(() => ut.value ? p.value : a("library", "Publication catalogue")), _ = J(() => tt.value ? a("library", "Creator") : Et.value ? a("library", "Publication year") : a("library", "Publication / series")), O = J(() => Number(i.rootCount || 0)), T = J(() => Number(i.enabledRootCount || 0)), C = J(() => O.value === 0), L = J(() => O.value > 0 && T.value === 0), U = J(() => K.value.length > 0), M = {
      q: "Search",
      type: "Type",
      publication: "Series / periodical",
      year: "Publication year",
      creator: "Creator",
      format: "Format",
      tag: "Nextcloud tag",
      shelf: "Shelf",
      status: "Scan status",
      workflowStatus: "Workflow status",
      genre: "Genre",
      classification: "Classification",
      scannerConflicts: "Scanner conflicts",
      starred: "Starred"
    }, x = J(() => {
      if (typeof window > "u") return "";
      const I = new URLSearchParams(window.location.search);
      if (I.get("batchMetadataApplyResult") !== "1") return "";
      const S = I.get("batchMetadataField") || "field", h = I.get("batchMetadataApplied") || "0", xe = I.get("batchMetadataUnchanged") || "0", Ot = I.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: S, unchanged: xe, skipped: Ot });
    }), K = J(() => Object.entries(M).map(([I, S]) => ({ key: I, label: S, value: D[I] || "" })).filter((I) => String(I.value).trim() !== "")), H = J(() => Object.entries(D).filter(([I, S]) => !["q", "sort", "starred"].includes(I) && String(S || "").trim() !== "").map(([I, S]) => ({ key: I, value: S }))), q = J(() => Object.entries(D).filter(([I, S]) => String(S || "").trim() !== "").map(([I, S]) => ({ key: I, value: S }))), X = /* @__PURE__ */ lr({}), Z = /* @__PURE__ */ vl(null);
    let N = null;
    function P(I) {
      const S = new URLSearchParams(new FormData(I));
      for (const h of Array.from(S.keys()))
        String(S.get(h) || "").trim() === "" && S.delete(h);
      return S.delete("page"), S;
    }
    function $(I) {
      o.splice(0, o.length, ...(I.items || []).map((S) => ({ ...S })));
      for (const S of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl"])
        Object.prototype.hasOwnProperty.call(I, S) && (i[S] = I[S]);
      Object.assign(D, I.activeFilters || {});
    }
    async function Q(I = !1) {
      if (!(me.loading || me.refreshing)) {
        I ? me.refreshing = !0 : me.loading = !0, me.error = "";
        try {
          const S = await fetch(`${Ve.value}${I ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!S.ok)
            throw new Error(`Import health request failed: ${S.status}`);
          me.summary = await S.json(), me.loaded = !0;
        } catch (S) {
          me.error = S?.message || String(S);
        } finally {
          me.loading = !1, me.refreshing = !1;
        }
      }
    }
    async function ie(I) {
      I && I.currentTarget && I.currentTarget.open !== !0 || me.loaded || me.loading || await Q(!1);
    }
    async function be() {
      await Q(!0);
    }
    async function ce(I) {
      const S = I?.currentTarget?.tagName === "FORM" ? I.currentTarget : I?.currentTarget?.form;
      if (!S) return;
      const xe = P(S).toString(), Ot = xe ? `?${xe}` : "", ir = await fetch(ve.value + Ot, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!ir.ok) {
        S.submit();
        return;
      }
      $(await ir.json()), history.replaceState({}, "", xe ? `?${xe}` : window.location.pathname);
    }
    function Pe(I) {
      ce(I);
    }
    function Re(I) {
      window.clearTimeout(N), N = window.setTimeout(() => Pe(I), 350);
    }
    function Oe(I) {
      const S = new URLSearchParams();
      for (const [xe, Ot] of Object.entries(D)) {
        const ir = String(Ot || "").trim();
        ir !== "" && xe !== I && !(xe === "sort" && ir === "title") && S.set(xe, ir);
      }
      const h = S.toString();
      return h ? `?${h}` : "?";
    }
    function ft() {
      return Oe("q");
    }
    function rt(I) {
      return String(I || "").toUpperCase();
    }
    function Mt(I) {
      return I.nextcloudTags || [];
    }
    function fr(I) {
      return y.value.find((h) => h.publication === I)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(I)}`;
    }
    function wt(I) {
      return i.publicationYearLandingUrls?.[I] || `/apps/library/years/${encodeURIComponent(I)}`;
    }
    function Tt(I) {
      return i.creatorLandingUrls?.[I] || `/apps/library/creators/${encodeURIComponent(I)}`;
    }
    function tr(I, S) {
      X[I] = !!S?.currentTarget?.open;
    }
    function rr(I) {
      const S = String(I?.tagName || "").toLowerCase();
      return I?.isContentEditable || ["input", "select", "textarea", "button"].includes(S);
    }
    function nr(I) {
      I.key !== "/" || I.metaKey || I.ctrlKey || I.altKey || I.shiftKey || rr(I.target) || (I.preventDefault(), Z.value?.focus(), Z.value?.select?.());
    }
    function St(I) {
      I.key !== "Escape" || document.activeElement !== Z.value || D.q === "" || (I.preventDefault(), D.q = "", Z.value.value = "", window.clearTimeout(N), Pe({ currentTarget: Z.value }));
    }
    function dr(I) {
      nr(I), St(I);
    }
    Gs(() => {
      window.addEventListener("keydown", dr);
    }), Ys(() => {
      window.removeEventListener("keydown", dr);
    });
    async function Rt(I, S) {
      const h = S?.currentTarget?.closest?.("form") || S?.currentTarget;
      if (!h || !I?.starUrl) return;
      const xe = !!I.starred;
      I.starred = !xe;
      try {
        (await fetch(I.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (I.starred = xe);
      } catch {
        I.starred = xe;
      }
    }
    return (I, S) => (A(), w("div", Zu, [
      c("section", Qu, [
        c("div", ef, [
          c("div", null, [
            ut.value ? (A(), w("p", tf, f(_.value), 1)) : fe("", !0),
            c("h2", rf, f(b.value), 1),
            c("p", nf, f(ut.value ? m(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : m(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          c("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": m(a)("library", "Library actions")
          }, [
            c("details", {
              class: "library-catalogue-actions-menu",
              onToggle: ie
            }, [
              c("summary", null, f(m(a)("library", "Actions")), 1),
              c("div", sf, [
                c("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, f(m(a)("library", "Settings")), 9, af),
                Le.value ? (A(), w("a", {
                  key: 0,
                  href: Le.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, f(m(a)("library", "Export corrected metadata")), 9, lf)) : fe("", !0),
                Ne.value ? (A(), w("a", {
                  key: 1,
                  href: Ne.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, f(m(a)("library", "Sidecar manifest")), 9, cf)) : fe("", !0),
                je.value ? (A(), w("a", {
                  key: 2,
                  href: je.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, f(m(a)("library", "Sidecar ZIP")), 9, uf)) : fe("", !0),
                c("div", ff, [
                  c("p", df, f(m(a)("library", "Import health")), 1),
                  c("h3", pf, f(m(a)("library", "Metadata overview")), 1),
                  c("p", hf, f(m(a)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  me.loading ? (A(), w("p", mf, f(m(a)("library", "Loading cached metadata overview…")), 1)) : me.error ? (A(), w("p", bf, f(me.error), 1)) : me.loaded ? fe("", !0) : (A(), w("p", yf, f(m(a)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  me.loaded ? (A(), w(oe, { key: 3 }, [
                    Se.value.message ? (A(), w("p", gf, f(Se.value.message), 1)) : Se.value.cacheStatus === "missing" ? (A(), w("p", _f, f(m(a)("library", "No cached metadata overview exists yet")), 1)) : fe("", !0),
                    Be.value ? (A(), w("p", vf, f(m(a)("library", "Last generated")) + ": " + f(Be.value), 1)) : fe("", !0),
                    c("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: me.refreshing,
                      onClick: be
                    }, f(me.refreshing ? m(a)("library", "Refreshing metadata overview…") : m(a)("library", "Refresh metadata overview")), 9, Ef),
                    c("div", Tf, [
                      c("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, f(m(a)("library", "Review metadata errors")), 9, Sf),
                      c("a", {
                        class: "button secondary",
                        href: Me.value
                      }, f(m(a)("library", "Full review")), 9, xf),
                      c("a", {
                        class: "button secondary",
                        href: he.value
                      }, f(m(a)("library", "Export TSV")), 9, Cf),
                      c("a", {
                        class: "button secondary",
                        href: ue.value
                      }, f(m(a)("library", "Probe covers")), 9, Af)
                    ]),
                    c("div", wf, [
                      c("article", null, [
                        c("h4", null, f(m(a)("library", "Metadata errors")), 1),
                        c("p", Rf, f(Ye.value.total || 0), 1),
                        c("ul", null, [
                          (A(!0), w(oe, null, Ee(Ye.value.byExtension, (h) => (A(), w("li", {
                            key: h.extension
                          }, f(rt(h.extension)) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      c("article", null, [
                        c("h4", null, f(m(a)("library", "Archive/container check")), 1),
                        c("p", Of, f(de.value.mismatches || 0), 1),
                        c("ul", null, [
                          (A(!0), w(oe, null, Ee(de.value.byExtensionAndContainer, (h) => (A(), w("li", {
                            key: `${h.extension}-${h.actualContainerType}`
                          }, f(rt(h.extension)) + " · " + f(h.actualContainerType) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      c("article", null, [
                        c("h4", null, f(m(a)("library", "Cover health")), 1),
                        c("p", Nf, f(At.value.note), 1),
                        c("ul", null, [
                          (A(!0), w(oe, null, Ee(At.value.byFormat, (h) => (A(), w("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                          }, f(rt(h.extension)) + " · nextcloudPreview: " + f(h.nextcloudPreview) + " · libraryCoverRoute: " + f(h.libraryCoverRoute) + " · " + f(h.count), 1))), 128))
                        ])
                      ]),
                      c("article", null, [
                        c("h4", null, f(m(a)("library", "Cover support matrix")), 1),
                        c("p", Pf, f(m(a)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        c("ul", null, [
                          (A(!0), w(oe, null, Ee(ze.value, (h) => (A(), w("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}-${h.count}`
                          }, f(rt(h.extension)) + " · Nextcloud/plugin preview: " + f(h.nextcloudPreview) + " · Library extraction: " + f(h.libraryCoverRoute) + " · " + f(h.count), 1))), 128))
                        ]),
                        c("p", kf, f(m(a)("library", "Extractor tools")) + ": ZIP=" + f(ct.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + f(ct.value.sevenZipCommand || "missing") + " · RAR=" + f(ct.value.rarCommand || "missing") + " · bsdtar=" + f(ct.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ye.value.examples?.length ? (A(), w("details", Lf, [
                      c("summary", null, f(m(a)("library", "Example files and suggested actions")), 1),
                      c("ul", null, [
                        (A(!0), w(oe, null, Ee(Ye.value.examples, (h) => (A(), w("li", {
                          key: `${h.fileId}-${h.path}`
                        }, [
                          c("code", null, f(h.path), 1),
                          c("span", null, f(h.scanStatus) + " · " + f(h.scanError) + " · " + f(h.actualContainerType), 1),
                          c("strong", null, f(h.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : fe("", !0)
                  ], 64)) : fe("", !0),
                  c("div", If, [
                    c("article", null, [
                      c("h4", null, f(m(a)("library", "Metadata-error queue")), 1),
                      c("p", Mf, f(m(a)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      c("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, f(m(a)("library", "Open metadata-error rows")), 9, Uf),
                      c("a", {
                        class: "button secondary",
                        href: he.value
                      }, f(m(a)("library", "Export metadata-error rows")), 9, Df),
                      c("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: le.value
                        }, null, 8, Hf),
                        S[18] || (S[18] = c("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        S[19] || (S[19] = c("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        c("button", $f, f(m(a)("library", "Tag metadata-error rows")), 1)
                      ], 8, Ff)
                    ]),
                    c("article", null, [
                      c("h4", null, f(m(a)("library", "Scanner-conflict queue")), 1),
                      c("p", jf, f(m(a)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      c("a", {
                        class: "button secondary",
                        href: Fe.value
                      }, f(m(a)("library", "Open scanner-conflict rows")), 9, Vf),
                      c("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: le.value
                        }, null, 8, zf),
                        S[20] || (S[20] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        S[21] || (S[21] = c("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        c("button", qf, f(m(a)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Bf)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, of)
        ]),
        x.value ? (A(), w("p", Wf, f(x.value), 1)) : fe("", !0),
        c("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": m(a)("library", "Quick catalogue filters"),
          onSubmit: xn(ce, ["prevent"])
        }, [
          (A(!0), w(oe, null, Ee(H.value, (h) => (A(), w("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, Gf))), 128)),
          c("div", Yf, [
            c("label", Xf, [
              c("span", null, [
                ye(f(m(a)("library", "Search")) + " ", 1),
                S[22] || (S[22] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              qe(c("input", {
                ref_key: "quickSearchInput",
                ref: Z,
                "onUpdate:modelValue": S[0] || (S[0] = (h) => D.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: Re
              }, null, 544), [
                [bi, D.q]
              ])
            ]),
            c("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Search catalogue")
            }, f(m(a)("library", "Search")), 9, Jf)
          ]),
          c("details", Zf, [
            c("summary", null, f(m(a)("library", "Filter & sort")), 1),
            c("div", Qf, [
              c("label", null, [
                ye(f(m(a)("library", "Sort")) + " ", 1),
                qe(c("select", {
                  "onUpdate:modelValue": S[1] || (S[1] = (h) => D.sort = h),
                  name: "sort",
                  onChange: ce
                }, [
                  c("option", ed, f(m(a)("library", "Title")), 1),
                  c("option", td, f(m(a)("library", "Recently added")), 1),
                  c("option", rd, f(m(a)("library", "Publication date")), 1),
                  c("option", nd, f(m(a)("library", "Series")), 1),
                  c("option", id, f(m(a)("library", "Recently opened")), 1),
                  c("option", od, f(m(a)("library", "Format")), 1)
                ], 544), [
                  [it, D.sort]
                ])
              ]),
              c("label", null, [
                ye(f(m(a)("library", "Starred")) + " ", 1),
                qe(c("select", {
                  "onUpdate:modelValue": S[2] || (S[2] = (h) => D.starred = h),
                  name: "starred",
                  onChange: ce
                }, [
                  c("option", sd, f(m(a)("library", "All")), 1),
                  c("option", ad, f(m(a)("library", "Starred")), 1)
                ], 544), [
                  [it, D.starred]
                ])
              ]),
              c("label", null, [
                ye(f(m(a)("library", "Size")) + " ", 1),
                c("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: ce
                }, [
                  (A(), w(oe, null, Ee(n, (h) => c("option", {
                    key: h,
                    value: h
                  }, f(h), 9, cd)), 64))
                ], 40, ld)
              ]),
              c("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": m(a)("library", "Apply catalogue filters")
              }, f(m(a)("library", "Apply filters")), 9, ud),
              c("a", {
                href: "?",
                class: "button secondary",
                "aria-label": m(a)("library", "Clear catalogue filters")
              }, f(m(a)("library", "Clear all")), 9, fd)
            ])
          ])
        ], 40, Kf),
        c("details", dd, [
          c("summary", pd, f(m(a)("library", "Show catalogue filters")), 1),
          c("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": m(a)("library", "Catalogue search and filters"),
            onSubmit: xn(ce, ["prevent"])
          }, [
            c("label", null, [
              ye(f(m(a)("library", "Search title / author")) + " ", 1),
              qe(c("input", {
                "onUpdate:modelValue": S[3] || (S[3] = (h) => D.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [bi, D.q]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Type")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[4] || (S[4] = (h) => D.type = h),
                name: "type"
              }, [
                c("option", md, f(m(a)("library", "All types")), 1),
                (A(), w(oe, null, Ee(r, (h) => c("option", {
                  key: h,
                  value: h
                }, f(h), 9, bd)), 64))
              ], 512), [
                [it, D.type]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Series / periodical")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[5] || (S[5] = (h) => D.publication = h),
                name: "publication"
              }, [
                c("option", yd, f(m(a)("library", "All series and periodicals")), 1),
                (A(!0), w(oe, null, Ee(v.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, gd))), 128))
              ], 512), [
                [it, D.publication]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Publication year")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[6] || (S[6] = (h) => D.year = h),
                name: "year"
              }, [
                c("option", _d, f(m(a)("library", "All years")), 1),
                (A(!0), w(oe, null, Ee(k.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, vd))), 128))
              ], 512), [
                [it, D.year]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Creator")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[7] || (S[7] = (h) => D.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                c("option", Ed, f(m(a)("library", "All creators")), 1),
                (A(!0), w(oe, null, Ee(j.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, Td))), 128))
              ], 512), [
                [it, D.creator]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Nextcloud tag")) + " ", 1),
              qe(c("input", {
                "onUpdate:modelValue": S[8] || (S[8] = (h) => D.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [bi, D.tag]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Format")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[9] || (S[9] = (h) => D.format = h),
                name: "format"
              }, [
                c("option", Sd, f(m(a)("library", "All formats")), 1),
                (A(!0), w(oe, null, Ee(d.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(rt(h)), 9, xd))), 128))
              ], 512), [
                [it, D.format]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Shelf")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[10] || (S[10] = (h) => D.shelf = h),
                name: "shelf"
              }, [
                c("option", Cd, f(m(a)("library", "All shelves")), 1),
                (A(!0), w(oe, null, Ee(l.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, Ad))), 128))
              ], 512), [
                [it, D.shelf]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Scan status")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[11] || (S[11] = (h) => D.status = h),
                name: "status"
              }, [
                c("option", wd, f(m(a)("library", "All scan statuses")), 1),
                (A(!0), w(oe, null, Ee(re.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, Rd))), 128))
              ], 512), [
                [it, D.status]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Workflow status")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[12] || (S[12] = (h) => D.workflowStatus = h),
                name: "workflowStatus"
              }, [
                c("option", Od, f(m(a)("library", "All workflow statuses")), 1),
                (A(!0), w(oe, null, Ee(W.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, Nd))), 128))
              ], 512), [
                [it, D.workflowStatus]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Genre")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[13] || (S[13] = (h) => D.genre = h),
                name: "genre"
              }, [
                c("option", Pd, f(m(a)("library", "All genres")), 1),
                (A(!0), w(oe, null, Ee(se.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, kd))), 128))
              ], 512), [
                [it, D.genre]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Classification")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[14] || (S[14] = (h) => D.classification = h),
                name: "classification"
              }, [
                c("option", Ld, f(m(a)("library", "All classifications")), 1),
                (A(!0), w(oe, null, Ee(ne.value, (h) => (A(), w("option", {
                  key: h,
                  value: h
                }, f(h), 9, Id))), 128))
              ], 512), [
                [it, D.classification]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Scanner conflicts")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[15] || (S[15] = (h) => D.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                c("option", Md, f(m(a)("library", "All metadata")), 1),
                c("option", Ud, f(m(a)("library", "Needs review")), 1)
              ], 512), [
                [it, D.scannerConflicts]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Starred")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[16] || (S[16] = (h) => D.starred = h),
                name: "starred"
              }, [
                c("option", Dd, f(m(a)("library", "All publications")), 1),
                c("option", Fd, f(m(a)("library", "Starred only")), 1)
              ], 512), [
                [it, D.starred]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Sort")) + " ", 1),
              qe(c("select", {
                "onUpdate:modelValue": S[17] || (S[17] = (h) => D.sort = h),
                name: "sort"
              }, [
                c("option", Hd, f(m(a)("library", "Title")), 1),
                c("option", $d, f(m(a)("library", "Recently added")), 1),
                c("option", jd, f(m(a)("library", "Publication date")), 1),
                c("option", Vd, f(m(a)("library", "Series / periodical")), 1),
                c("option", Bd, f(m(a)("library", "Recently opened")), 1),
                c("option", zd, f(m(a)("library", "Format")), 1)
              ], 512), [
                [it, D.sort]
              ])
            ]),
            c("label", null, [
              ye(f(m(a)("library", "Page size")) + " ", 1),
              c("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (A(), w(oe, null, Ee(n, (h) => c("option", {
                  key: h,
                  value: h
                }, f(h), 9, Wd)), 64))
              ], 8, qd)
            ]),
            c("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Apply catalogue filters")
            }, f(m(a)("library", "Apply filters")), 9, Kd),
            c("a", {
              href: "?",
              class: "button secondary",
              "aria-label": m(a)("library", "Clear catalogue filters")
            }, f(m(a)("library", "Clear")), 9, Gd),
            c("a", {
              href: Fe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, f(m(a)("library", "Review scanner conflicts")), 9, Yd)
          ], 40, hd)
        ]),
        ut.value ? (A(), w("section", Xd, [
          c("p", Jd, f(_.value), 1),
          c("h3", Zd, f(p.value), 1),
          c("p", Qd, f(tt.value ? m(a)("library", "Items by this creator, sorted by publication context when available.") : Et.value ? m(a)("library", "Items from this publication year, sorted by publication date when available.") : m(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          c("div", ep, [
            c("span", null, f(z.value.total) + " " + f(m(a)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (A(), w("span", tp, f(E.value.earliestYear) + "–" + f(E.value.latestYear), 1)) : fe("", !0),
            E.value?.datedCount ? (A(), w("span", rp, f(E.value.datedCount) + " " + f(m(a)("library", "dated")), 1)) : fe("", !0),
            E.value?.undatedCount > 0 ? (A(), w("span", np, f(E.value.undatedCount) + " " + f(m(a)("library", "undated")), 1)) : fe("", !0)
          ]),
          vt.value && E.value ? (A(), w("aside", ip, [
            c("strong", null, f(m(a)("library", "Publication contents")), 1),
            c("span", null, f(E.value.itemCount) + " " + f(m(a)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (A(), w("span", op, f(E.value.earliestYear) + "–" + f(E.value.latestYear), 1)) : fe("", !0),
            c("span", null, f(E.value.datedCount) + " " + f(m(a)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (A(), w("span", sp, f(E.value.undatedCount) + " " + f(m(a)("library", "without dates yet")), 1)) : fe("", !0)
          ])) : fe("", !0),
          c("p", null, [
            c("a", ap, f(m(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : fe("", !0),
        c("div", lp, [
          c("p", cp, [
            ye(f(m(a)("library", "Showing")) + " " + f(z.value.from) + "–" + f(z.value.to) + " " + f(m(a)("library", "of")) + " " + f(z.value.total) + " " + f(m(a)("library", "catalogue items")), 1),
            K.value.length > 0 ? (A(), w("span", up, [
              S[23] || (S[23] = ye(" · ", -1)),
              c("a", fp, f(m(a)("library", "Clear all filters")), 1)
            ])) : fe("", !0)
          ]),
          c("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": m(a)("library", "Catalogue pagination")
          }, [
            c("span", pp, [
              ye(f(m(a)("library", "Page")) + " " + f(z.value.page), 1),
              z.value.total > 0 ? (A(), w("span", hp, " · " + f(z.value.from) + "–" + f(z.value.to), 1)) : fe("", !0)
            ]),
            z.value.previousUrl ? (A(), w("a", {
              key: 0,
              href: z.value.previousUrl
            }, f(m(a)("library", "Previous")), 9, mp)) : (A(), w("span", bp, f(m(a)("library", "Previous")), 1)),
            z.value.nextUrl ? (A(), w("a", {
              key: 2,
              href: z.value.nextUrl
            }, f(m(a)("library", "Next")), 9, yp)) : (A(), w("span", gp, f(m(a)("library", "Next")), 1))
          ], 8, dp)
        ]),
        c("div", _p, [
          c("details", {
            class: "library-batch-actions",
            "aria-label": m(a)("library", "Batch actions for current results")
          }, [
            c("summary", null, [
              ye(f(m(a)("library", "Batch")) + " ", 1),
              c("span", Ep, f(z.value.total) + " " + f(m(a)("library", "Current filter result")), 1)
            ]),
            c("form", {
              method: "post",
              action: Ie.value,
              class: "library-batch-tag-form"
            }, [
              c("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Sp),
              (A(!0), w(oe, null, Ee(q.value, (h) => (A(), w("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, xp))), 128)),
              c("label", null, [
                c("span", null, f(m(a)("library", "Nextcloud tag")), 1),
                c("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Cp)
              ]),
              c("button", Ap, f(m(a)("library", "Apply Nextcloud tag to current results")), 1),
              c("p", wp, f(m(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Tp),
            c("form", {
              method: "post",
              action: et.value,
              class: "library-batch-tag-remove-form"
            }, [
              c("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Op),
              (A(!0), w(oe, null, Ee(q.value, (h) => (A(), w("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Np))), 128)),
              c("label", null, [
                c("span", null, f(m(a)("library", "Nextcloud tag")), 1),
                c("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Pp)
              ]),
              c("button", kp, f(m(a)("library", "Remove tag from current results")), 1),
              c("p", Lp, f(m(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Rp),
            c("form", {
              method: "post",
              action: lt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              c("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Mp),
              (A(!0), w(oe, null, Ee(q.value, (h) => (A(), w("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Up))), 128)),
              S[24] || (S[24] = c("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              c("button", Dp, f(m(a)("library", "Reset filtered metadata")), 1),
              c("p", Fp, f(m(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Ip),
            c("form", {
              method: "post",
              action: Ke.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              c("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, $p),
              (A(!0), w(oe, null, Ee(q.value, (h) => (A(), w("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, jp))), 128)),
              c("label", null, [
                c("span", null, f(m(a)("library", "Metadata field")), 1),
                c("select", Vp, [
                  c("option", Bp, f(m(a)("library", "Publication type")), 1),
                  c("option", zp, f(m(a)("library", "Subtitle")), 1),
                  c("option", qp, f(m(a)("library", "Creators")), 1),
                  c("option", Wp, f(m(a)("library", "Series / periodical")), 1),
                  c("option", Kp, f(m(a)("library", "Publication date")), 1),
                  c("option", Gp, f(m(a)("library", "Language")), 1),
                  c("option", Yp, f(m(a)("library", "Publisher")), 1),
                  c("option", Xp, f(m(a)("library", "Genres")), 1),
                  c("option", Jp, f(m(a)("library", "Classifications")), 1)
                ])
              ]),
              c("label", null, [
                c("span", null, f(m(a)("library", "Preview value")), 1),
                S[25] || (S[25] = c("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              c("button", Zp, f(m(a)("library", "Preview & apply metadata edit")), 1),
              c("p", Qp, f(m(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Hp),
            c("form", {
              method: "post",
              action: _t.value,
              class: "library-batch-cover-refresh-form"
            }, [
              c("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, th),
              (A(!0), w(oe, null, Ee(q.value, (h) => (A(), w("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, rh))), 128)),
              c("button", nh, f(m(a)("library", "Request fresh cover previews")), 1),
              c("p", ih, f(m(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, eh)
          ], 8, vp),
          c("details", oh, [
            c("summary", null, f(m(a)("library", "Browse")), 1),
            c("div", sh, [
              y.value.length > 0 ? (A(), w("section", ah, [
                c("h3", lh, f(m(a)("library", "Top series and periodicals")), 1),
                c("p", ch, f(m(a)("library", "Jump into recurring publications with one click.")), 1),
                c("ul", null, [
                  (A(!0), w(oe, null, Ee(y.value, (h) => (A(), w("li", {
                    key: h.publication
                  }, [
                    c("a", {
                      href: fr(h.publication)
                    }, f(h.publication), 9, uh),
                    c("span", fh, f(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (A(), w("section", dh, [
                c("h3", ph, f(m(a)("library", "No series or periodicals found yet")), 1),
                c("p", hh, f(m(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : fe("", !0),
              k.value.length > 0 ? (A(), w("section", mh, [
                c("h3", bh, f(m(a)("library", "Top publication years")), 1),
                c("ul", null, [
                  (A(!0), w(oe, null, Ee(k.value, (h) => (A(), w("li", { key: h }, [
                    c("a", {
                      href: wt(h)
                    }, f(h), 9, yh)
                  ]))), 128))
                ])
              ])) : fe("", !0),
              j.value.length > 0 ? (A(), w("section", gh, [
                c("h3", _h, f(m(a)("library", "Top creators")), 1),
                c("ul", null, [
                  (A(!0), w(oe, null, Ee(j.value, (h) => (A(), w("li", { key: h }, [
                    c("a", {
                      href: Tt(h)
                    }, f(h), 9, vh)
                  ]))), 128))
                ])
              ])) : fe("", !0)
            ])
          ])
        ]),
        K.value.length > 0 ? (A(), w("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": m(a)("library", "Active filters")
        }, [
          c("span", null, f(m(a)("library", "Active filters")), 1),
          (A(!0), w(oe, null, Ee(K.value, (h) => (A(), w("a", {
            key: h.key,
            href: Oe(h.key),
            class: "library-filter-chip",
            "aria-label": `${m(a)("library", "Remove filter")}: ${h.label}`
          }, [
            c("strong", null, f(h.label) + ":", 1),
            ye(" " + f(h.value) + " ", 1),
            S[26] || (S[26] = c("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Th))), 128))
        ], 8, Eh)) : fe("", !0),
        s.value.length === 0 ? (A(), w("div", {
          key: 3,
          class: Ir(["library-empty-content", { "library-first-run-guidance": C.value || L.value, "library-filter-empty-state": U.value && !C.value && !L.value }]),
          role: "status"
        }, [
          C.value ? (A(), w(oe, { key: 0 }, [
            c("h3", null, f(m(a)("library", "Start with one Library root")), 1),
            c("p", Sh, f(m(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            c("p", xh, [
              c("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Add a Library root")), 9, Ch),
              c("span", Ah, f(m(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : L.value ? (A(), w(oe, { key: 1 }, [
            c("h3", null, f(m(a)("library", "No enabled Library roots")), 1),
            c("p", wh, f(m(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            c("p", Rh, [
              c("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Open Library settings")), 9, Oh)
            ])
          ], 64)) : U.value ? (A(), w(oe, { key: 2 }, [
            c("h3", null, f(m(a)("library", "No matches for the current filters")), 1),
            c("p", Nh, f(m(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            c("p", Ph, [
              c("a", {
                href: ft(),
                class: "button secondary"
              }, f(m(a)("library", "Clear search")), 9, kh),
              c("a", Lh, f(m(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (A(), w(oe, { key: 3 }, [
            c("h3", null, f(m(a)("library", "No catalogue items yet")), 1),
            c("p", Ih, f(m(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            c("p", Mh, [
              c("a", {
                href: V.value,
                class: "button primary"
              }, f(m(a)("library", "Run a scan from settings")), 9, Uh)
            ])
          ], 64))
        ], 2)) : (A(), w("div", Dh, [
          (A(!0), w(oe, null, Ee(s.value, (h) => (A(), w("article", {
            key: h.id,
            class: Ir(["library-cover-card", { "library-cover-card--open": X[h.id] }])
          }, [
            c("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              c("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, Hh)
            ], 8, Fh),
            c("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: xn((xe) => Rt(h, xe), ["prevent"])
            }, [
              c("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, jh),
              S[27] || (S[27] = c("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              c("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Vh),
              c("button", {
                type: "submit",
                class: Ir(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                "aria-label": h.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                onClick: xn((xe) => Rt(h, xe), ["prevent"])
              }, f(h.starred ? "★" : "☆"), 11, Bh)
            ], 40, $h),
            c("div", zh, [
              c("div", qh, [
                c("h3", null, [
                  h.starred ? (A(), w("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": m(a)("library", "Starred")
                  }, "★", 8, Wh)) : fe("", !0),
                  ye(f(h.title), 1)
                ]),
                c("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, f(m(a)("library", "Read")), 9, Kh)
              ]),
              c("details", {
                class: "library-cover-details",
                onToggle: (xe) => tr(h.id, xe)
              }, [
                c("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${m(a)("library", "Show details and actions")}: ${h.title}`
                }, f(m(a)("library", "Details")), 9, Yh),
                c("div", Xh, [
                  h.creators ? (A(), w("p", Jh, f(h.creators), 1)) : fe("", !0),
                  c("dl", Zh, [
                    c("div", Qh, [
                      c("dt", null, f(m(a)("library", "Type")), 1),
                      c("dd", null, f(h.publicationType), 1)
                    ]),
                    h.publication ? (A(), w("div", em, [
                      c("dt", null, f(m(a)("library", "Series")), 1),
                      c("dd", null, f(h.publication), 1)
                    ])) : fe("", !0),
                    h.publicationDate ? (A(), w("div", tm, [
                      c("dt", null, f(m(a)("library", "Date")), 1),
                      c("dd", null, f(h.publicationDate), 1)
                    ])) : fe("", !0),
                    h.workflowStatus ? (A(), w("div", rm, [
                      c("dt", null, f(m(a)("library", "Status")), 1),
                      c("dd", null, f(h.workflowStatus), 1)
                    ])) : fe("", !0),
                    h.hasScannerConflict ? (A(), w("div", nm, [
                      c("dt", null, f(m(a)("library", "Review")), 1),
                      c("dd", null, f(h.scannerConflictCount) + " fields", 1)
                    ])) : fe("", !0),
                    h.lastOpenedAt ? (A(), w("div", im, [
                      c("dt", null, f(m(a)("library", "Last opened")), 1),
                      c("dd", null, f(h.lastOpenedAt), 1)
                    ])) : fe("", !0),
                    h.extension ? (A(), w("div", om, [
                      c("dt", null, f(m(a)("library", "Format")) + ":", 1),
                      c("dd", null, f(rt(h.extension)), 1)
                    ])) : fe("", !0),
                    h.shelf ? (A(), w("div", sm, [
                      c("dt", null, f(m(a)("library", "Shelf")), 1),
                      c("dd", null, f(h.shelf), 1)
                    ])) : fe("", !0)
                  ]),
                  h.description ? (A(), w("p", am, f(h.description), 1)) : fe("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (A(), w("p", lm, [
                    ye(" scanStatus: " + f(h.scanStatus || "unknown"), 1),
                    h.scanError ? (A(), w("span", cm, " · scanError: " + f(h.scanError), 1)) : fe("", !0)
                  ])) : fe("", !0),
                  c("div", um, [
                    Mt(h).length === 0 ? (A(), w("span", fm, "No Nextcloud tags")) : (A(!0), w(oe, { key: 1 }, Ee(Mt(h), (xe) => (A(), w("span", {
                      key: xe.id,
                      class: "library-tag"
                    }, f(xe.name), 1))), 128))
                  ]),
                  c("p", dm, [
                    c("a", {
                      href: h.filesUrl
                    }, f(m(a)("library", "Show in Files")), 9, pm),
                    S[28] || (S[28] = ye(" · ", -1)),
                    c("a", {
                      href: h.downloadUrl
                    }, f(m(a)("library", "Download source")), 9, hm),
                    S[29] || (S[29] = ye(" · ", -1)),
                    c("a", {
                      href: h.detailsUrl
                    }, f(m(a)("library", "Details")), 9, mm)
                  ])
                ])
              ], 40, Gh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (A(), w("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": m(a)("library", "Catalogue pagination")
        }, [
          c("span", ym, [
            ye(f(m(a)("library", "Page")) + " " + f(z.value.page), 1),
            z.value.total > 0 ? (A(), w("span", gm, " · " + f(z.value.from) + "–" + f(z.value.to), 1)) : fe("", !0)
          ]),
          z.value.previousUrl ? (A(), w("a", {
            key: 0,
            href: z.value.previousUrl
          }, f(m(a)("library", "Previous")), 9, _m)) : (A(), w("span", vm, f(m(a)("library", "Previous")), 1)),
          z.value.nextUrl ? (A(), w("a", {
            key: 2,
            href: z.value.nextUrl
          }, f(m(a)("library", "Next")), 9, Em)) : (A(), w("span", Tm, f(m(a)("library", "Next")), 1))
        ], 8, bm)) : fe("", !0)
      ])
    ]));
  }
}, us = du("library", "catalogue", {}), On = document.querySelector("#library-vue-root"), fs = {
  ...us,
  requestToken: On?.dataset.requestToken || us.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function Ca(e) {
  return G(e).toUpperCase();
}
function xm(e, t, r, n = G) {
  for (const i of t) {
    const o = document.createElement("option");
    o.value = G(i), o.textContent = n(i), G(i) === G(r) && (o.selected = !0), e.appendChild(o);
  }
}
function ds(e, t, r, n, i = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const s = document.createElement("input");
  s.type = r === "q" ? "search" : "text", s.name = r, s.value = G(n), s.placeholder = i, o.appendChild(s), e.appendChild(o);
}
function Or(e, t, r, n, i, o, s = G) {
  const l = document.createElement("label");
  l.textContent = t;
  const d = document.createElement("select");
  d.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, d.appendChild(v), xm(d, o, n, s), l.appendChild(d), e.appendChild(l);
}
function Nr(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Cm(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function Am(e) {
  return G(e.discoveryPage) === "publication";
}
function wm(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function xi(e) {
  return G(e.discoveryPage) === "year";
}
function Rm(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "creator";
}
function Om(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function Nm() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Kr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function Pm(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function km(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), ds(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Or(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ds(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), Or(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], Ca), Or(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), Or(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), Or(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Or(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", a("library", "Clear catalogue filters")), o.textContent = a("library", "Clear"), n.append(i, o), n;
}
function Lm() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), o;
}
function Im(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", a("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, k] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || G(k).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = G(k), n.appendChild(j);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = a("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = G(r.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", o), s.appendChild(l), n.appendChild(s);
  const d = [
    [a("library", "Sort"), "sort", r.sort || "title", [["title", a("library", "Title")], ["recent", a("library", "Recently added")], ["publicationDate", a("library", "Publication date")], ["publication", a("library", "Series")], ["lastOpened", a("library", "Recently opened")], ["format", a("library", "Format")]]],
    [a("library", "Starred"), "starred", r.starred || "", [["", a("library", "All")], ["1", a("library", "Starred")]]],
    [a("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, k, j, re] of d) {
    const W = document.createElement("label");
    W.textContent = E;
    const se = document.createElement("select");
    se.name = k;
    for (const [ne, z] of re) {
      const D = document.createElement("option");
      D.value = G(ne), D.textContent = G(z), G(ne) === G(j) && (D.selected = !0), se.appendChild(D);
    }
    se.addEventListener("change", () => n.requestSubmit()), W.appendChild(se), n.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", a("library", "Apply catalogue filters")), v.textContent = a("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", a("library", "Clear catalogue filters")), y.textContent = a("library", "Clear all"), n.append(v, y), n;
}
function Mm(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), d = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const k = document.createElement("section");
  k.className = "library-panel", k.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = a("library", "Publication catalogue");
  const se = document.createElement("p");
  se.className = "library-muted", se.textContent = a("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(W, se);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", a("library", "Library actions")), i) {
    const N = document.createElement("a");
    N.href = i, N.className = "button secondary", N.setAttribute("aria-label", "Open Library settings"), N.textContent = a("library", "Settings"), ne.appendChild(N);
  }
  if (o) {
    const N = document.createElement("a");
    N.href = o, N.className = "button secondary", N.setAttribute("aria-label", "Export corrected metadata"), N.textContent = a("library", "Export corrected metadata"), ne.appendChild(N);
  }
  if (e.metadataSidecarManifestUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarManifestUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar manifest"), N.textContent = a("library", "Sidecar manifest"), ne.appendChild(N);
  }
  if (e.metadataSidecarBundleUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarBundleUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar ZIP"), N.textContent = a("library", "Sidecar ZIP"), ne.appendChild(N);
  }
  j.append(re, ne), k.appendChild(j);
  const z = Lm();
  z && k.appendChild(z), k.appendChild(Im(e, n));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), D.append(V, km(e, n)), k.appendChild(D), Am(e) || xi(e) || Ci(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = Ci(e) ? a("library", "Creator") : xi(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${Ci(e) ? a("library", "items by this creator. Sorted by publication context when available.") : xi(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = a("library", "Back to full catalogue"), N.append(P, $, Q, ie), k.appendChild(N);
  }
  const le = document.createElement("p");
  le.className = "library-muted library-filter-result-summary", le.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Le = document.createElement("a");
  Le.href = "?", Le.textContent = ` ${a("library", "Clear all filters")}`, le.appendChild(Le), k.appendChild(le);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const je = document.createElement("summary");
  je.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const ve = document.createElement("form");
  ve.method = "post", ve.action = s, ve.className = "library-batch-tag-form";
  const Ie = Nr(e);
  Ie && ve.appendChild(Ie);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), ve.appendChild($);
  }
  const et = document.createElement("label");
  et.textContent = a("library", "Apply Nextcloud tag to current results");
  const lt = document.createElement("input");
  lt.type = "text", lt.name = "nextcloudTagName", lt.placeholder = "batch-review", et.appendChild(lt);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = a("library", "Apply Nextcloud tag to current results");
  const _t = document.createElement("p");
  _t.className = "library-muted", _t.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), ve.append(et, Ke, _t);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = l, Fe.className = "library-batch-tag-remove-form";
  const Me = Nr(e);
  Me && Fe.appendChild(Me);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), Fe.appendChild($);
  }
  const he = document.createElement("label");
  he.textContent = a("library", "Nextcloud tag");
  const ue = document.createElement("input");
  ue.type = "text", ue.name = "nextcloudTagName", ue.setAttribute("list", "library-nextcloud-tag-suggestions"), ue.placeholder = a("library", "e.g. Review"), ue.autocomplete = "off", he.appendChild(ue);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = a("library", "Remove tag from current results");
  const me = document.createElement("p");
  me.className = "library-muted", me.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Fe.append(he, Ve, me);
  const Se = document.createElement("form");
  Se.method = "post", Se.action = d, Se.className = "library-batch-metadata-reset-form";
  const Be = Nr(e);
  Be && Se.appendChild(Be);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), Se.appendChild($);
  }
  const Ye = document.createElement("input");
  Ye.type = "hidden", Ye.name = "scannerConflicts", Ye.value = "1";
  const de = document.createElement("button");
  de.type = "submit", de.className = "button secondary", de.textContent = a("library", "Reset filtered metadata");
  const At = document.createElement("p");
  At.className = "library-muted", At.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Se.append(Ye, de, At);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = v, ze.className = "library-batch-metadata-edit-preview-form", ze.target = "_blank";
  const ct = Nr(e);
  ct && ze.appendChild(ct);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), ze.appendChild($);
  }
  const vt = document.createElement("label");
  vt.textContent = a("library", "Metadata field");
  const Et = document.createElement("select");
  Et.name = "bulkEditField";
  for (const [N, P] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = N, $.textContent = a("library", P), Et.appendChild($);
  }
  vt.appendChild(Et);
  const tt = document.createElement("label");
  tt.textContent = a("library", "Preview value");
  const ut = document.createElement("input");
  ut.type = "text", ut.name = "bulkEditValue", ut.placeholder = "magazine, de, photography...", ut.autocomplete = "off", tt.appendChild(ut);
  const p = document.createElement("button");
  p.type = "submit", p.className = "button secondary", p.textContent = a("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = a("library", "Preview first, then apply from the review page."), ze.append(vt, tt, p, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const O = Nr(e);
  O && _.appendChild(O);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = a("library", "Request fresh cover previews");
  const C = document.createElement("p");
  C.className = "library-muted", C.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, C), Ne.append(je, ve, Fe, Se, ze, _), k.appendChild(Ne);
  const L = document.createElement("nav");
  L.className = "library-pagination", L.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, L.appendChild(U), k.appendChild(L);
  const M = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], x = document.createElement("details");
  x.className = M.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = a("library", "Show top series and periodicals"), x.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = M.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const q = document.createElement("p");
  if (q.className = "library-muted", q.textContent = M.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), x.append(H, q), M.length > 0) {
    const N = document.createElement("ul");
    for (const P of M) {
      const $ = document.createElement("li"), Q = document.createElement("a");
      Q.href = Cm(P.publication, P), Q.textContent = G(P.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${P.itemCount} items`, $.append(Q, ie), N.appendChild($);
    }
    x.appendChild(N);
  }
  k.appendChild(x);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const N = document.createElement("details");
    N.className = "library-year-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = a("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top publication years");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump into dated books, magazines, journals and comics by year.");
    const ie = document.createElement("ul");
    for (const be of X) {
      const ce = document.createElement("li"), Pe = document.createElement("a");
      Pe.href = wm(be, e), Pe.textContent = G(be), ce.appendChild(Pe), ie.appendChild(ce);
    }
    N.append(P, $, Q, ie), k.appendChild(N);
  }
  const Z = Array.isArray(e.creators) ? e.creators : [];
  if (Z.length > 0) {
    const N = document.createElement("details");
    N.className = "library-creator-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = a("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top creators");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const be of Z) {
      const ce = document.createElement("li"), Pe = document.createElement("a");
      Pe.href = Rm(be, e), Pe.textContent = G(be), ce.appendChild(Pe), ie.appendChild(ce);
    }
    N.append(P, $, Q, ie), k.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), Q = Om(e);
    N.className = "library-empty-content", (P === 0 || $ === 0) && N.classList.add("library-first-run-guidance"), Q && P > 0 && $ > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const ie = document.createElement("h3"), be = document.createElement("p");
    be.className = "library-muted";
    const ce = document.createElement("p");
    ce.className = "library-empty-actions", P === 0 ? (ie.textContent = a("library", "Start with one Library root"), be.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Kr(ce, i, "button primary", a("library", "Add a Library root")), Pm(ce, a("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = a("library", "No enabled Library roots"), be.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Kr(ce, i, "button primary", a("library", "Open Library settings"))) : Q ? (ie.textContent = a("library", "No matches for the current filters"), be.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Kr(ce, Nm(), "button secondary", a("library", "Clear search")), Kr(ce, "?", "button primary", a("library", "Clear all filters"))) : (ie.textContent = a("library", "No catalogue items yet"), be.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Kr(ce, i, "button primary", a("library", "Run a scan from settings"))), N.append(ie, be, ce), k.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const P of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const Q = document.createElement("a");
      Q.className = "library-cover-link", Q.href = G(P.openUrl || "#"), Q.setAttribute("aria-label", `Read ${G(P.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = G(P.coverUrl || ""), ie.alt = `Cover for ${G(P.title || "publication")}`, ie.loading = "lazy", Q.appendChild(ie);
      const be = Nr(e), ce = document.createElement("form");
      ce.method = "post", ce.action = G(P.starUrl || ""), ce.className = "library-cover-star-form", be && ce.appendChild(be);
      const Pe = document.createElement("input");
      Pe.type = "hidden", Pe.name = "returnTo", Pe.value = "catalogue";
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "starred", Re.value = P.starred ? "0" : "1";
      const Oe = document.createElement("button");
      Oe.type = "submit", Oe.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Oe.setAttribute("aria-pressed", P.starred ? "true" : "false"), Oe.setAttribute("aria-label", P.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), Oe.title = P.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), Oe.textContent = P.starred ? "★" : "☆", ce.append(Pe, Re, Oe);
      const ft = document.createElement("div");
      ft.className = "library-cover-summary";
      const rt = document.createElement("h3");
      if (rt.textContent = G(P.title || "Untitled publication"), ft.appendChild(rt), P.creators) {
        const St = document.createElement("p");
        St.className = "library-creator", St.textContent = G(P.creators), ft.appendChild(St);
      }
      const Mt = document.createElement("dl");
      Mt.className = "library-cover-detail-list";
      const fr = [
        ["Type", G(P.publicationType || "other")],
        ["Format", P.extension ? Ca(P.extension) : ""],
        ["Shelf", P.shelf ? G(P.shelf) : ""]
      ].filter(([, St]) => St !== "");
      for (const [St, dr] of fr) {
        const Rt = document.createElement("div");
        Rt.className = "library-cover-detail-chip";
        const I = document.createElement("dt");
        I.textContent = St;
        const S = document.createElement("dd");
        S.textContent = dr, Rt.append(I, S), Mt.appendChild(Rt);
      }
      ft.appendChild(Mt);
      const wt = document.createElement("p"), Tt = document.createElement("a");
      Tt.href = G(P.openUrl || "#"), Tt.textContent = a("library", "Read");
      const tr = document.createElement("a");
      tr.href = G(P.filesUrl || "#"), tr.textContent = a("library", "Show in Files");
      const rr = document.createElement("a");
      rr.href = G(P.downloadUrl || "#"), rr.textContent = a("library", "Download source");
      const nr = document.createElement("a");
      nr.href = G(P.detailsUrl || "#"), nr.textContent = a("library", "Details"), wt.append(Tt, document.createTextNode(" · "), tr, document.createTextNode(" · "), rr, document.createTextNode(" · "), nr), ft.appendChild(wt), $.append(Q, ce, ft), N.appendChild($);
    }
    k.appendChild(N);
  }
  return E.appendChild(k), E;
}
if (On)
  try {
    cu(Sm, { state: fs }).mount(On);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), On.replaceChildren(Mm(fs));
  }
//# sourceMappingURL=library-main.mjs.map
