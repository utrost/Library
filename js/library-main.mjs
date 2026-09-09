// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, Lr = [], Vt = () => {
}, ps = () => !1, Hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $n = (e) => e.startsWith("onUpdate:"), Ze = Object.assign, Hi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ja = Object.prototype.hasOwnProperty, _e = (e, t) => ja.call(e, t), ee = Array.isArray, cr = (e) => un(e) === "[object Map]", Cr = (e) => un(e) === "[object Set]", bo = (e) => un(e) === "[object Date]", ae = (e) => typeof e == "function", Me = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", hs = (e) => (Te(e) || ae(e)) && ae(e.then) && ae(e.catch), ms = Object.prototype.toString, un = (e) => ms.call(e), Va = (e) => un(e).slice(8, -1), bs = (e) => un(e) === "[object Object]", $i = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jr = /* @__PURE__ */ Fi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Ba = /-\w/g, Pt = jn(
  (e) => e.replace(Ba, (t) => t.slice(1).toUpperCase())
), za = /\B([A-Z])/g, xr = jn(
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
      const n = e[r], i = Me(n) ? Ga(n) : ji(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Me(e) || Te(e))
    return e;
}
const Wa = /;(?![^(]*\))/g, qa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
function Ga(e) {
  const t = {};
  return e.replace(Ka, "").split(Wa).forEach((r) => {
    if (r) {
      const n = r.split(qa);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ir(e) {
  let t = "";
  if (Me(e))
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
    if (r = cr(e), n = cr(t), r || n || (r = Cr(e), n = Cr(t), r || n))
      return r && n ? go(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), f = t.hasOwnProperty(s);
      if (l && !f || !l && f || !ur(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Za(e, t) {
  return e.findIndex((r) => ur(r, t));
}
const vs = (e) => !!(e && e.__v_isRef === !0), d = (e) => Me(e) ? e : e == null ? "" : ee(e) || Te(e) && (e.toString === ms || !ae(e.toString)) ? vs(e) ? d(e.value) : JSON.stringify(e, Es, 2) : String(e), Es = (e, t) => vs(t) ? Es(e, t.value) : cr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ii(n, o) + " =>"] = i, r),
    {}
  )
} : Cr(t) ? {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _o(this), xs(this);
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
function Cs(e, t = !1) {
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
function xs(e) {
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
    xs(e);
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
class Wi {
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
function Xe(e, t, r) {
  if (kt && we) {
    let n = wi.get(e);
    n || wi.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Wi()), i.map = n, i.key = r), i.track();
  }
}
function Kt(e, t, r, n, i, o) {
  const s = wi.get(e);
  if (!s) {
    nn++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Vi(), t === "clear")
    s.forEach(l);
  else {
    const f = ee(e), v = f && $i(r);
    if (f && r === "length") {
      const y = Number(n);
      s.forEach((E, k) => {
        (k === "length" || k === on || !Bt(k) && k >= y) && l(E);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && l(s.get(r)), v && l(s.get(on)), t) {
        case "add":
          f ? v && l(s.get("length")) : (l(s.get(Er)), cr(e) && l(s.get(Ri)));
          break;
        case "delete":
          f || (l(s.get(Er)), cr(e) && l(s.get(Ri)));
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
  return t === e ? t : (Xe(t, "iterate", on), /* @__PURE__ */ xt(e) ? t : t.map(Lt));
}
function zn(e) {
  return Xe(e = /* @__PURE__ */ ge(e), "iterate", on), e;
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
  return n !== e && !/* @__PURE__ */ xt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const il = Array.prototype;
function zt(e, t, r, n, i, o) {
  const s = zn(e), l = s !== e && !/* @__PURE__ */ xt(e), f = s[t];
  if (f !== il[t]) {
    const E = f.apply(e, o);
    return l ? Lt(E) : E;
  }
  let v = r;
  s !== e && (l ? v = function(E, k) {
    return r.call(this, Ht(e, E), k, e);
  } : r.length > 2 && (v = function(E, k) {
    return r.call(this, E, k, e);
  }));
  const y = f.call(s, v, n);
  return l && i ? i(y) : y;
}
function vo(e, t, r, n) {
  const i = zn(e), o = i !== e && !/* @__PURE__ */ xt(e);
  let s = r, l = !1;
  i !== e && (o ? (l = n.length === 0, s = function(v, y, E) {
    return l && (l = !1, v = Ht(e, v)), r.call(this, v, Ht(e, y), E, e);
  }) : r.length > 3 && (s = function(v, y, E) {
    return r.call(this, v, y, E, e);
  }));
  const f = i[t](s, ...n);
  return l ? Ht(e, f) : f;
}
function ai(e, t, r) {
  const n = /* @__PURE__ */ ge(e);
  Xe(n, "iterate", on);
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
  return Xe(t, "has", e), t.hasOwnProperty(e);
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
      let f;
      if (s && (f = nl[r]))
        return f;
      if (r === "hasOwnProperty")
        return sl;
    }
    const l = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Je(t) ? t : n
    );
    if ((Bt(r) ? Ns.has(r) : ol(r)) || (i || Xe(t, "get", r), o))
      return l;
    if (/* @__PURE__ */ Je(l)) {
      const f = s && $i(r) ? l : l.value;
      return i && Te(f) ? /* @__PURE__ */ Ni(f) : f;
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
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ Zt(n) && (o = /* @__PURE__ */ ge(o), n = /* @__PURE__ */ ge(n)), !s && /* @__PURE__ */ Je(o) && !/* @__PURE__ */ Je(n))
        return v || (o.value = n), !0;
    }
    const l = s ? Number(r) < t.length : _e(t, r), f = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Je(t) ? t : i
    );
    return t === /* @__PURE__ */ ge(i) && f && (l ? jt(n, o) && Kt(t, "set", r, n) : Kt(t, "add", r, n)), f;
  }
  deleteProperty(t, r) {
    const n = _e(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Kt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Bt(r) || !Ns.has(r)) && Xe(t, "has", r), n;
  }
  ownKeys(t) {
    return Xe(
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
    const i = this.__v_raw, o = /* @__PURE__ */ ge(i), s = cr(o), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, v = i[e](...n), y = r ? Oi : t ? Fr : Lt;
    return !t && Xe(
      o,
      "iterate",
      f ? Ri : Er
    ), Ze(
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
      e || (jt(i, l) && Xe(s, "get", i), Xe(s, "get", l));
      const { has: f } = _n(s), v = t ? Oi : e ? Fr : Lt;
      if (f.call(s, i))
        return v(o.get(i));
      if (f.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Xe(/* @__PURE__ */ ge(i), "iterate", Er), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      return e || (jt(i, l) && Xe(s, "has", i), Xe(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, f = /* @__PURE__ */ ge(l), v = t ? Oi : e ? Fr : Lt;
      return !e && Xe(f, "iterate", Er), l.forEach((y, E) => i.call(o, v(y), v(E), s));
    }
  };
  return Ze(
    r,
    e ? {
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ge(this), s = _n(o), l = /* @__PURE__ */ ge(i), f = !t && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ Zt(i) ? l : i;
        return s.has.call(o, f) || jt(i, f) && s.has.call(o, i) || jt(l, f) && s.has.call(o, l) || (o.add(f), Kt(o, "add", f, f)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ xt(o) && !/* @__PURE__ */ Zt(o) && (o = /* @__PURE__ */ ge(o));
        const s = /* @__PURE__ */ ge(this), { has: l, get: f } = _n(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ ge(i), v = l.call(s, i));
        const y = f.call(s, i);
        return s.set(i, o), v ? jt(o, y) && Kt(s, "set", i, o) : Kt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ge(this), { has: s, get: l } = _n(o);
        let f = s.call(o, i);
        f || (i = /* @__PURE__ */ ge(i), f = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return f && Kt(o, "delete", i, void 0), v;
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
function qi(e, t) {
  const r = dl(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    _e(r, i) && i in n ? r : n,
    i,
    o
  );
}
const pl = {
  get: /* @__PURE__ */ qi(!1, !1)
}, hl = {
  get: /* @__PURE__ */ qi(!1, !0)
}, ml = {
  get: /* @__PURE__ */ qi(!0, !1)
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
function xt(e) {
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
function Je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return El(e, !1);
}
function El(e, t) {
  return /* @__PURE__ */ Je(e) ? e : new Tl(e, t);
}
class Tl {
  constructor(t, r) {
    this.dep = new Wi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ge(t), this._value = r ? t : Lt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(t) || /* @__PURE__ */ Zt(t);
    t = n ? t : /* @__PURE__ */ ge(t), jt(t, r) && (this._rawValue = t, this._value = n ? t : Lt(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ Je(e) ? e.value : e;
}
const Sl = {
  get: (e, t, r) => t === "__v_raw" ? e : b(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Je(i) && !/* @__PURE__ */ Je(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Us(e) {
  return /* @__PURE__ */ Tr(e) ? e : new Proxy(e, Sl);
}
class Cl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Wi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return Cs(this, !0), !0;
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
function xl(e, t, r = !1) {
  let n, i;
  return ae(e) ? n = e : (n = e.get, i = e.set), new Cl(n, i, r);
}
const En = {}, Nn = /* @__PURE__ */ new WeakMap();
let yr;
function Al(e, t = !1, r = yr) {
  if (r) {
    let n = Nn.get(r);
    n || Nn.set(r, n = []), n.push(e);
  }
}
function wl(e, t, r = xe) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: l, call: f } = r, v = (V) => i ? V : /* @__PURE__ */ xt(V) || i === !1 || i === 0 ? Gt(V, 1) : Gt(V);
  let y, E, k, j, re = !1, q = !1;
  if (/* @__PURE__ */ Je(e) ? (E = () => e.value, re = /* @__PURE__ */ xt(e)) : /* @__PURE__ */ Tr(e) ? (E = () => v(e), re = !0) : ee(e) ? (q = !0, re = e.some((V) => /* @__PURE__ */ Tr(V) || /* @__PURE__ */ xt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Je(V))
      return V.value;
    if (/* @__PURE__ */ Tr(V))
      return v(V);
    if (ae(V))
      return f ? f(V, 2) : V();
  })) : ae(e) ? t ? E = f ? () => f(e, 2) : e : E = () => {
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
      return f ? f(e, 3, [j]) : e(j);
    } finally {
      yr = V;
    }
  } : E = Vt, t && i) {
    const V = E, ue = i === !0 ? 1 / 0 : i;
    E = () => Gt(V(), ue);
  }
  const se = el(), ne = () => {
    y.stop(), se && se.active && Hi(se.effects, y);
  };
  if (o && t) {
    const V = t;
    t = (...ue) => {
      const Le = V(...ue);
      return ne(), Le;
    };
  }
  let z = q ? new Array(e.length).fill(En) : En;
  const D = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ue = y.run();
        if (V || i || re || (q ? ue.some((Le, Ne) => jt(Le, z[Ne])) : jt(ue, z))) {
          k && k();
          const Le = yr;
          yr = y;
          try {
            const Ne = [
              ue,
              // pass undefined as the old value when it's changed for the first time
              z === En ? void 0 : q && z[0] === En ? [] : z,
              j
            ];
            z = ue, f ? f(t, 3, Ne) : (
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
      if (f)
        f(V, 4);
      else
        for (const ue of V) ue();
      Nn.delete(y);
    }
  }, t ? n ? D(!0) : z = y.run() : s ? s(D.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Gt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Je(e))
    Gt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Gt(e[n], t, r);
  else if (Cr(e) || cr(e))
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
    Wn(i, t, r);
  }
}
function It(e, t, r, n) {
  if (ae(e)) {
    const i = fn(e, t, r, n);
    return i && hs(i) && i.catch((o) => {
      Wn(o, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(It(e[o], t, r, n));
    return i;
  }
}
function Wn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || xe;
  if (t) {
    let l = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const y = l.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, f, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Xt(), fn(o, null, 10, [
        e,
        f,
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
let Ct = null, Vs = null;
function kn(e) {
  const t = Ct;
  return Ct = e, Vs = e && e.type.__scopeId || null, t;
}
function Pl(e, t = Ct, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && ko(-1);
    const o = kn(t), s = Sr.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let f = Sr.length; f > s; f--) ha();
      kn(o), n._d && ko(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function We(e, t) {
  if (Ct === null)
    return e;
  const r = Xn(Ct), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, f = xe] = t[i];
    o && (ae(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Gt(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function hr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let f = l.dir[n];
    f && (Xt(), It(f, r, 8, [
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
function Bs(e, t, r = xe) {
  const { immediate: n, deep: i, flush: o, once: s } = r, l = Ze({}, r), f = t && n || !t && o !== "post";
  let v;
  if (cn) {
    if (o === "sync") {
      const j = Il();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!f) {
      const j = () => {
      };
      return j.stop = Vt, j.resume = Vt, j.pause = Vt, j;
    }
  }
  const y = at;
  l.call = (j, re, q) => It(j, y, re, q);
  let E = !1;
  o === "post" ? l.scheduler = (j) => {
    ht(j, y && y.suspense);
  } : o !== "sync" && (E = !0, l.scheduler = (j, re) => {
    re ? j() : Yi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const k = wl(e, t, l);
  return cn && (v ? v.push(k) : f && k()), k;
}
function Ml(e, t, r) {
  const n = this.proxy, i = Me(e) ? e.includes(".") ? zs(n, e) : () => n[e] : e.bind(n, n);
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
const Ul = /* @__PURE__ */ Symbol("_vte"), qn = (e) => e.__isTeleport, ci = /* @__PURE__ */ Symbol("_leaveCb");
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
function Ws(e) {
  if (!Ji(e))
    return qn(e.type) && e.children ? Dl(e.children) : e;
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
      qn(r.type) && Ws(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function qs(e) {
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
      (q, se) => en(
        q,
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
  const o = n.shapeFlag & 4 ? Xn(n.component) : n.el, s = i ? null : o, { i: l, r: f } = e, v = t && t.r, y = l.refs === xe ? l.refs = {} : l.refs, E = l.setupState, k = /* @__PURE__ */ ge(E), j = E === xe ? ps : (q) => To(y, q) ? !1 : _e(k, q), re = (q, se) => !(se && To(y, se));
  if (v != null && v !== f) {
    if (So(t), Me(v))
      y[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Je(v)) {
      const q = t;
      re(v, q.k) && (v.value = null), q.k && (y[q.k] = null);
    }
  }
  if (ae(f))
    fn(f, l, 12, [s, y]);
  else {
    const q = Me(f), se = /* @__PURE__ */ Je(f);
    if (q || se) {
      const ne = () => {
        if (e.f) {
          const z = q ? j(f) ? E[f] : y[f] : re() || !e.k ? f.value : y[e.k];
          if (i)
            ee(z) && Hi(z, o);
          else if (ee(z))
            z.includes(o) || z.push(o);
          else if (q)
            y[f] = [o], j(f) && (E[f] = y[f]);
          else {
            const D = [o];
            re(f, e.k) && (f.value = D), e.k && (y[e.k] = D);
          }
        } else q ? (y[f] = s, j(f) && (E[f] = s)) : se && (re(f, e.k) && (f.value = s), e.k && (y[e.k] = s));
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
      const l = dn(r), f = It(t, r, e, s);
      return l(), Jt(), f;
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
), Wl = er("rtg"), ql = er("rtc");
function Kl(e, t = at) {
  Kn("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function Ee(e, t, r, n) {
  let i;
  const o = r, s = ee(e);
  if (s || Me(e)) {
    const l = s && /* @__PURE__ */ Tr(e);
    let f = !1, v = !1;
    l && (f = !/* @__PURE__ */ xt(e), v = /* @__PURE__ */ Zt(e), e = zn(e)), i = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      i[y] = t(
        f ? v ? Fr(Lt(e[y])) : Lt(e[y]) : e[y],
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
        (l, f) => t(l, f, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, v = l.length; f < v; f++) {
        const y = l[f];
        i[f] = t(e[y], y, f, o);
      }
    }
  else
    i = [];
  return i;
}
const Pi = (e) => e ? ga(e) ? Xn(e) : Pi(e.parent) : null, rn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
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
), ui = (e, t) => e !== xe && !e.__isScriptSetup && _e(e, t), Yl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: l, appContext: f } = e;
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
        if (i !== xe && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (r !== xe && _e(r, t))
          return s[t] = 4, r[t];
        ki && (s[t] = 0);
      }
    }
    const v = rn[t];
    let y, E;
    if (v)
      return t === "$attrs" && Xe(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = l.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && _e(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      E = f.config.globalProperties, _e(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ui(i, t) ? (i[t] = r, !0) : n !== xe && _e(n, t) ? (n[t] = r, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, l) {
    let f;
    return !!(r[l] || e !== xe && l[0] !== "$" && _e(e, l) || ui(t, l) || _e(o, l) || _e(n, l) || _e(rn, l) || _e(i.config.globalProperties, l) || (f = s.__cssModules) && f[l]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : _e(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Co(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ki = !0;
function Xl(e) {
  const t = Zs(e), r = e.proxy, n = e.ctx;
  ki = !1, t.beforeCreate && xo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: f,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: k,
    beforeUpdate: j,
    updated: re,
    activated: q,
    deactivated: se,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: D,
    unmounted: V,
    render: ue,
    renderTracked: Le,
    renderTriggered: Ne,
    errorCaptured: je,
    serverPrefetch: ve,
    // public API
    expose: De,
    inheritAttrs: Qe,
    // assets
    components: lt,
    directives: Ke,
    filters: _t
  } = t;
  if (v && Jl(v, n, null), s)
    for (const be in s) {
      const ce = s[be];
      ae(ce) && (n[be] = ce.bind(r));
    }
  if (i) {
    const be = i.call(r, r);
    Te(be) && (e.data = /* @__PURE__ */ lr(be));
  }
  if (ki = !0, o)
    for (const be in o) {
      const ce = o[be], Ve = ae(ce) ? ce.bind(r, r) : ae(ce.get) ? ce.get.bind(r, r) : Vt, he = !ae(ce) && ae(ce.set) ? ce.set.bind(r) : Vt, Se = J({
        get: Ve,
        set: he
      });
      Object.defineProperty(n, be, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Be) => Se.value = Be
      });
    }
  if (l)
    for (const be in l)
      Js(l[be], n, r, be);
  if (f) {
    const be = ae(f) ? f.call(r) : f;
    Reflect.ownKeys(be).forEach((ce) => {
      kl(ce, be[ce]);
    });
  }
  y && xo(y, e, "c");
  function Ie(be, ce) {
    ee(ce) ? ce.forEach((Ve) => be(Ve.bind(r))) : ce && be(ce.bind(r));
  }
  if (Ie(jl, E), Ie(Gs, k), Ie(Vl, j), Ie(Bl, re), Ie(Fl, q), Ie(Hl, se), Ie(Kl, je), Ie(ql, Le), Ie(Wl, Ne), Ie(Ys, z), Ie(Xs, V), Ie(zl, ve), ee(De))
    if (De.length) {
      const be = e.exposed || (e.exposed = {});
      De.forEach((ce) => {
        Object.defineProperty(be, ce, {
          get: () => r[ce],
          set: (Ve) => r[ce] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ue && e.render === Vt && (e.render = ue), Qe != null && (e.inheritAttrs = Qe), lt && (e.components = lt), Ke && (e.directives = Ke), ve && qs(e);
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
    ) : o = wn(i.from || n) : o = wn(i), /* @__PURE__ */ Je(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function xo(e, t, r) {
  It(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Js(e, t, r, n) {
  let i = n.includes(".") ? zs(r, n) : () => r[n];
  if (Me(e)) {
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
  let f;
  return l ? f = l : !i.length && !r && !n ? f = t : (f = {}, i.length && i.forEach(
    (v) => In(f, v, s, !0)
  ), In(f, t, s)), Te(t) && o.set(t, f), f;
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
    return Ze(
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
  return e ? Ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wo(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ze(
    /* @__PURE__ */ Object.create(null),
    Co(e),
    Co(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Ze(/* @__PURE__ */ Object.create(null), e);
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
    ae(n) || (n = Ze({}, n)), i != null && !Te(i) && (i = null);
    const o = Qs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
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
        if (!f) {
          const j = v._ceVNode || Yt(n, i);
          return j.appContext = o, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(j, y, k), f = !0, v._container = y, y.__vue_app__ = v, Xn(j.component);
        }
      },
      onUnmount(y) {
        l.push(y);
      },
      unmount() {
        f && (It(
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
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pt(t)}Modifiers`] || e[`${xr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let i = r;
  const o = t.startsWith("update:"), s = o && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((y) => Me(y) ? y.trim() : y)), s.number && (i = i.map(Vn)));
  let l, f = n[l = ni(t)] || // also try camelCase event handler (#2249)
  n[l = ni(Pt(t))];
  !f && o && (f = n[l = ni(xr(t))]), f && It(
    f,
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
    const f = (v) => {
      const y = ea(v, t, !0);
      y && (l = !0, Ze(s, y));
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !l ? (Te(e) && n.set(e, null), null) : (ee(o) ? o.forEach((f) => s[f] = null) : Ze(s, o), Te(e) && n.set(e, s), s);
}
function Gn(e, t) {
  return !e || !Hn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, xr(t)) || _e(e, t));
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
    emit: f,
    render: v,
    renderCache: y,
    props: E,
    data: k,
    setupState: j,
    ctx: re,
    inheritAttrs: q
  } = e, se = kn(e);
  let ne, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ue = V;
      ne = $t(
        v.call(
          ue,
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
          { attrs: l, slots: s, emit: f }
        ) : V(
          E,
          null
        )
      ), z = t.props ? l : sc(l);
    }
  } catch (V) {
    Sr.length = 0, Wn(V, e, 1), ne = Yt(Qt);
  }
  let D = ne;
  if (z && q !== !1) {
    const V = Object.keys(z), { shapeFlag: ue } = D;
    V.length && ue & 7 && (o && V.some($n) && (z = ac(
      z,
      o
    )), D = Hr(D, z, !1, !0));
  }
  if (r.dirs && (D = Hr(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = qn(D.type) && Ws(D) || D;
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
  const { props: n, children: i, component: o } = e, { props: s, children: l, patchFlag: f } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Oo(n, s, v) : !!s;
    if (f & 8) {
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
  } = e, l = /* @__PURE__ */ ge(i), [f] = e.propsOptions;
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
        if (f)
          if (_e(o, k))
            j !== o[k] && (o[k] = j, v = !0);
          else {
            const re = Pt(k);
            i[re] = Ii(
              f,
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
      ((y = xr(E)) === E || !_e(t, y))) && (f ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[E] = Ii(
        f,
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
    for (let f in t) {
      if (Jr(f))
        continue;
      const v = t[f];
      let y;
      i && _e(i, y = Pt(f)) ? !o || !o.includes(y) ? r[y] = v : (l || (l = {}))[y] = v : Gn(e.emitsOptions, f) || (!(f in n) || v !== n[f]) && (n[f] = v, s = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ ge(r), v = l || xe;
    for (let y = 0; y < o.length; y++) {
      const E = o[y];
      r[E] = Ii(
        i,
        f,
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
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && ae(f)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = dn(i);
          n = v[r] = f.call(
            null,
            t
          ), y();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === xr(r)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function sa(e, t, r = !1) {
  const n = r ? dc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, l = [];
  let f = !1;
  if (!ae(e)) {
    const y = (E) => {
      f = !0;
      const [k, j] = sa(E, t, !0);
      Ze(s, k), j && l.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!o && !f)
    return Te(e) && n.set(e, Lr), Lr;
  if (ee(o))
    for (let y = 0; y < o.length; y++) {
      const E = Pt(o[y]);
      No(E) && (s[E] = xe);
    }
  else if (o)
    for (const y in o) {
      const E = Pt(y);
      if (No(E)) {
        const k = o[y], j = s[E] = ee(k) || ae(k) ? { type: k } : Ze({}, k), re = j.type;
        let q = !1, se = !0;
        if (ee(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const z = re[ne], D = ae(z) && z.name;
            if (D === "Boolean") {
              q = !0;
              break;
            } else D === "String" && (se = !1);
          }
        else
          q = ae(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = q, j[
          1
          /* shouldCastTrue */
        ] = se, (q || _e(j, "default")) && l.push(E);
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
  let o = !0, s = xe;
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
    createComment: f,
    setText: v,
    setElementText: y,
    parentNode: E,
    nextSibling: k,
    setScopeId: j = Vt,
    insertStaticContent: re
  } = e, q = (p, m, _, O = null, T = null, C = null, L = void 0, U = null, M = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !Br(p, m) && (O = ct(p), Be(p, T, C, !0), p = null), m.patchFlag === -2 && (M = !1, m.dynamicChildren = null);
    const { type: S, ref: K, shapeFlag: H } = m;
    switch (S) {
      case Yn:
        se(p, m, _, O);
        break;
      case Qt:
        ne(p, m, _, O);
        break;
      case di:
        p == null && z(m, _, O, L);
        break;
      case oe:
        lt(
          p,
          m,
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
        H & 1 ? ue(
          p,
          m,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        ) : H & 6 ? Ke(
          p,
          m,
          _,
          O,
          T,
          C,
          L,
          U,
          M
        ) : (H & 64 || H & 128) && S.process(
          p,
          m,
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
    K != null && T ? en(K, p && p.ref, C, m || p, !m) : K == null && p && p.ref != null && en(p.ref, null, C, p, !0);
  }, se = (p, m, _, O) => {
    if (p == null)
      n(
        m.el = l(m.children),
        _,
        O
      );
    else {
      const T = m.el = p.el;
      m.children !== p.children && v(T, m.children);
    }
  }, ne = (p, m, _, O) => {
    p == null ? n(
      m.el = f(m.children || ""),
      _,
      O
    ) : m.el = p.el;
  }, z = (p, m, _, O) => {
    [p.el, p.anchor] = re(
      p.children,
      m,
      _,
      O,
      p.el,
      p.anchor
    );
  }, D = ({ el: p, anchor: m }, _, O) => {
    let T;
    for (; p && p !== m; )
      T = k(p), n(p, _, O), p = T;
    n(m, _, O);
  }, V = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = k(p), i(p), p = _;
    i(m);
  }, ue = (p, m, _, O, T, C, L, U, M) => {
    if (m.type === "svg" ? L = "svg" : m.type === "math" && (L = "mathml"), p == null)
      Le(
        m,
        _,
        O,
        T,
        C,
        L,
        U,
        M
      );
    else {
      const S = p.el && p.el._isVueCE ? p.el : null;
      try {
        S && S._beginPatch(), ve(
          p,
          m,
          T,
          C,
          L,
          U,
          M
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, Le = (p, m, _, O, T, C, L, U) => {
    let M, S;
    const { props: K, shapeFlag: H, transition: W, dirs: X } = p;
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
      "value" in K && o(M, "value", null, K.value, C), (S = K.onVnodeBeforeMount) && Dt(S, O, p);
    }
    X && hr(p, null, O, "beforeMount");
    const Z = gc(T, W);
    Z && W.beforeEnter(M), n(M, m, _), ((S = K && K.onVnodeMounted) || Z || X) && ht(() => {
      S && Dt(S, O, p), Z && W.enter(M), X && hr(p, null, O, "mounted");
    }, T);
  }, Ne = (p, m, _, O, T) => {
    if (_ && j(p, _), O)
      for (let C = 0; C < O.length; C++)
        j(p, O[C]);
    if (T) {
      let C = T.subTree;
      if (m === C || pa(C.type) && (C.ssContent === m || C.ssFallback === m)) {
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
  }, je = (p, m, _, O, T, C, L, U, M = 0) => {
    for (let S = M; S < p.length; S++) {
      const K = p[S] = U ? qt(p[S]) : $t(p[S]);
      q(
        null,
        K,
        m,
        _,
        O,
        T,
        C,
        L,
        U
      );
    }
  }, ve = (p, m, _, O, T, C, L) => {
    const U = m.el = p.el;
    let { patchFlag: M, dynamicChildren: S, dirs: K } = m;
    M |= p.patchFlag & 16;
    const H = p.props || xe, W = m.props || xe;
    let X;
    if (_ && mr(_, !1), (X = W.onVnodeBeforeUpdate) && Dt(X, _, m, p), K && hr(m, p, _, "beforeUpdate"), _ && mr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!p.dynamicChildren || p.dynamicChildren.length !== S.length) && (M = 0, L = !1, S = null), (H.innerHTML && W.innerHTML == null || H.textContent && W.textContent == null) && y(U, ""), S ? De(
      p.dynamicChildren,
      S,
      U,
      _,
      O,
      fi(m, T),
      C
    ) : L || ce(
      p,
      m,
      U,
      null,
      _,
      O,
      fi(m, T),
      C,
      !1
    ), M > 0) {
      if (M & 16)
        Qe(U, H, W, _, T);
      else if (M & 2 && H.class !== W.class && o(U, "class", null, W.class, T), M & 4 && o(U, "style", H.style, W.style, T), M & 8) {
        const Z = m.dynamicProps;
        for (let N = 0; N < Z.length; N++) {
          const P = Z[N], $ = H[P], Q = W[P];
          (Q !== $ || P === "value") && o(U, P, $, Q, T, _);
        }
      }
      M & 1 && p.children !== m.children && y(U, m.children);
    } else !L && S == null && Qe(U, H, W, _, T);
    ((X = W.onVnodeUpdated) || K) && ht(() => {
      X && Dt(X, _, m, p), K && hr(m, p, _, "updated");
    }, O);
  }, De = (p, m, _, O, T, C, L) => {
    for (let U = 0; U < m.length; U++) {
      const M = p[U], S = m[U], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Br(M, S) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? E(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      q(
        M,
        S,
        K,
        null,
        O,
        T,
        C,
        L,
        !0
      );
    }
  }, Qe = (p, m, _, O, T) => {
    if (m !== _) {
      if (m !== xe)
        for (const C in m)
          !Jr(C) && !(C in _) && o(
            p,
            C,
            m[C],
            null,
            T,
            O
          );
      for (const C in _) {
        if (Jr(C)) continue;
        const L = _[C], U = m[C];
        L !== U && C !== "value" && o(p, C, U, L, T, O);
      }
      "value" in _ && o(p, "value", m.value, _.value, T);
    }
  }, lt = (p, m, _, O, T, C, L, U, M) => {
    const S = m.el = p ? p.el : l(""), K = m.anchor = p ? p.anchor : l("");
    let { patchFlag: H, dynamicChildren: W, slotScopeIds: X } = m;
    X && (U = U ? U.concat(X) : X), p == null ? (n(S, _, O), n(K, _, O), je(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      K,
      T,
      C,
      L,
      U,
      M
    )) : H > 0 && H & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === W.length ? (De(
      p.dynamicChildren,
      W,
      _,
      T,
      C,
      L,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && ua(
      p,
      m,
      !0
      /* shallow */
    )) : ce(
      p,
      m,
      _,
      K,
      T,
      C,
      L,
      U,
      M
    );
  }, Ke = (p, m, _, O, T, C, L, U, M) => {
    m.slotScopeIds = U, p == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      _,
      O,
      L,
      M
    ) : _t(
      m,
      _,
      O,
      T,
      C,
      L,
      M
    ) : He(p, m, M);
  }, _t = (p, m, _, O, T, C, L) => {
    const U = p.component = wc(
      p,
      O,
      T
    );
    if (Ji(p) && (U.ctx.renderer = tt), Oc(U, !1, L), U.asyncDep) {
      if (T && T.registerDep(U, Ie, L), !p.el) {
        const M = U.subTree = Yt(Qt);
        ne(null, M, m, _), p.placeholder = M.el;
      }
    } else
      Ie(
        U,
        p,
        m,
        _,
        T,
        C,
        L
      );
  }, He = (p, m, _) => {
    const O = m.component = p.component;
    if (lc(p, m, _))
      if (O.asyncDep && !O.asyncResolved) {
        be(O, m, _);
        return;
      } else
        O.next = m, O.update();
    else
      m.el = p.el, O.vnode = m;
  }, Ie = (p, m, _, O, T, C, L) => {
    const U = () => {
      if (p.isMounted) {
        let { next: H, bu: W, u: X, parent: Z, vnode: N } = p;
        {
          const me = fa(p);
          if (me) {
            H && (H.el = N.el, be(p, H, L)), me.asyncDep.then(() => {
              ht(() => {
                p.isUnmounted || S();
              }, T);
            });
            return;
          }
        }
        let P = H, $;
        mr(p, !1), H ? (H.el = N.el, be(p, H, L)) : H = N, W && An(W), ($ = H.props && H.props.onVnodeBeforeUpdate) && Dt($, Z, H, N), mr(p, !0);
        const Q = Ro(p), ie = p.subTree;
        p.subTree = Q, q(
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
        const { el: W, props: X } = m, { bm: Z, m: N, parent: P, root: $, type: Q } = p, ie = tn(m);
        mr(p, !1), Z && An(Z), !ie && (H = X && X.onVnodeBeforeMount) && Dt(H, P, m), mr(p, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            Q,
            p.parent ? p.parent.type : void 0
          );
          const me = p.subTree = Ro(p);
          q(
            null,
            me,
            _,
            O,
            p,
            T,
            C
          ), m.el = me.el;
        }
        if (N && ht(N, T), !ie && (H = X && X.onVnodeMounted)) {
          const me = m;
          ht(
            () => Dt(H, P, me),
            T
          );
        }
        (m.shapeFlag & 256 || P && tn(P.vnode) && P.vnode.shapeFlag & 256) && p.a && ht(p.a, T), p.isMounted = !0, m = _ = O = null;
      }
    };
    p.scope.on();
    const M = p.effect = new Ts(U);
    p.scope.off();
    const S = p.update = M.run.bind(M), K = p.job = M.runIfDirty.bind(M);
    K.i = p, K.id = p.uid, M.scheduler = () => Yi(K), mr(p, !0), S();
  }, be = (p, m, _) => {
    m.component = p;
    const O = p.vnode.props;
    p.vnode = m, p.next = null, fc(p, m.props, O, _), mc(p, m.children, _), Xt(), Eo(p), Jt();
  }, ce = (p, m, _, O, T, C, L, U, M = !1) => {
    const S = p && p.children, K = p ? p.shapeFlag : 0, H = m.children, { patchFlag: W, shapeFlag: X } = m;
    if (W > 0) {
      if (W & 128) {
        he(
          S,
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
      } else if (W & 256) {
        Ve(
          S,
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
    X & 8 ? (K & 16 && ze(S, T, C), H !== S && y(_, H)) : K & 16 ? X & 16 ? he(
      S,
      H,
      _,
      O,
      T,
      C,
      L,
      U,
      M
    ) : ze(S, T, C, !0) : (K & 8 && y(_, ""), X & 16 && je(
      H,
      _,
      O,
      T,
      C,
      L,
      U,
      M
    ));
  }, Ve = (p, m, _, O, T, C, L, U, M) => {
    p = p || Lr, m = m || Lr;
    const S = p.length, K = m.length, H = Math.min(S, K);
    let W;
    for (W = 0; W < H; W++) {
      const X = m[W] = M ? qt(m[W]) : $t(m[W]);
      q(
        p[W],
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
    S > K ? ze(
      p,
      T,
      C,
      !0,
      !1,
      H
    ) : je(
      m,
      _,
      O,
      T,
      C,
      L,
      U,
      M,
      H
    );
  }, he = (p, m, _, O, T, C, L, U, M) => {
    let S = 0;
    const K = m.length;
    let H = p.length - 1, W = K - 1;
    for (; S <= H && S <= W; ) {
      const X = p[S], Z = m[S] = M ? qt(m[S]) : $t(m[S]);
      if (Br(X, Z))
        q(
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
      S++;
    }
    for (; S <= H && S <= W; ) {
      const X = p[H], Z = m[W] = M ? qt(m[W]) : $t(m[W]);
      if (Br(X, Z))
        q(
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
      H--, W--;
    }
    if (S > H) {
      if (S <= W) {
        const X = W + 1, Z = X < K ? m[X].el : O;
        for (; S <= W; )
          q(
            null,
            m[S] = M ? qt(m[S]) : $t(m[S]),
            _,
            Z,
            T,
            C,
            L,
            U,
            M
          ), S++;
      }
    } else if (S > W)
      for (; S <= H; )
        Be(p[S], T, C, !0), S++;
    else {
      const X = S, Z = S, N = /* @__PURE__ */ new Map();
      for (S = Z; S <= W; S++) {
        const Re = m[S] = M ? qt(m[S]) : $t(m[S]);
        Re.key != null && N.set(Re.key, S);
      }
      let P, $ = 0;
      const Q = W - Z + 1;
      let ie = !1, me = 0;
      const le = new Array(Q);
      for (S = 0; S < Q; S++) le[S] = 0;
      for (S = X; S <= H; S++) {
        const Re = p[S];
        if ($ >= Q) {
          Be(Re, T, C, !0);
          continue;
        }
        let Oe;
        if (Re.key != null)
          Oe = N.get(Re.key);
        else
          for (P = Z; P <= W; P++)
            if (le[P - Z] === 0 && Br(Re, m[P])) {
              Oe = P;
              break;
            }
        Oe === void 0 ? Be(Re, T, C, !0) : (le[Oe - Z] = S + 1, Oe >= me ? me = Oe : ie = !0, q(
          Re,
          m[Oe],
          _,
          null,
          T,
          C,
          L,
          U,
          M
        ), $++);
      }
      const Pe = ie ? _c(le) : Lr;
      for (P = Pe.length - 1, S = Q - 1; S >= 0; S--) {
        const Re = Z + S, Oe = m[Re], ft = m[Re + 1], rt = Re + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ft.el || da(ft)
        ) : O;
        le[S] === 0 ? q(
          null,
          Oe,
          _,
          rt,
          T,
          C,
          L,
          U,
          M
        ) : ie && (P < 0 || S !== Pe[P] ? Se(Oe, _, rt, 2) : P--);
      }
    }
  }, Se = (p, m, _, O, T = null) => {
    const { el: C, type: L, transition: U, children: M, shapeFlag: S } = p;
    if (S & 6) {
      Se(p.component.subTree, m, _, O);
      return;
    }
    if (S & 128) {
      p.suspense.move(m, _, O);
      return;
    }
    if (S & 64) {
      L.move(p, m, _, tt);
      return;
    }
    if (L === oe) {
      n(C, m, _);
      for (let H = 0; H < M.length; H++)
        Se(M[H], m, _, O);
      n(p.anchor, m, _);
      return;
    }
    if (L === di) {
      D(p, m, _);
      return;
    }
    if (O !== 2 && S & 1 && U)
      if (O === 0)
        U.persisted && !C[ci] ? n(C, m, _) : (U.beforeEnter(C), n(C, m, _), ht(() => U.enter(C), T));
      else {
        const { leave: H, delayLeave: W, afterLeave: X } = U, Z = () => {
          p.ctx.isUnmounted ? i(C) : n(C, m, _);
        }, N = () => {
          const P = C._isLeaving || !!C[ci];
          C._isLeaving && C[ci](
            !0
            /* cancelled */
          ), U.persisted && !P ? Z() : H(C, () => {
            Z(), X && X();
          });
        };
        W ? W(C, Z, N) : N();
      }
    else
      n(C, m, _);
  }, Be = (p, m, _, O = !1, T = !1) => {
    const {
      type: C,
      props: L,
      ref: U,
      children: M,
      dynamicChildren: S,
      shapeFlag: K,
      patchFlag: H,
      dirs: W,
      cacheIndex: X,
      memo: Z
    } = p;
    if (H === -2 && (T = !1), U != null && (Xt(), en(U, null, _, p, !0), Jt()), X != null && (m.renderCache[X] = void 0), K & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const N = K & 1 && W, P = !tn(p);
    let $;
    if (P && ($ = L && L.onVnodeBeforeUnmount) && Dt($, m, p), K & 6)
      At(p.component, _, O);
    else {
      if (K & 128) {
        p.suspense.unmount(_, O);
        return;
      }
      N && hr(p, null, m, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        m,
        _,
        tt,
        O
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== oe || H > 0 && H & 64) ? ze(
        S,
        m,
        _,
        !1,
        !0
      ) : (C === oe && H & 384 || !T && K & 16) && ze(M, m, _), O && et(p);
    }
    const Q = Z != null && X == null;
    (P && ($ = L && L.onVnodeUnmounted) || N || Q) && ht(() => {
      $ && Dt($, m, p), N && hr(p, null, m, "unmounted"), Q && (p.el = null);
    }, _);
  }, et = (p) => {
    const { type: m, el: _, anchor: O, transition: T } = p;
    if (m === oe) {
      de(_, O);
      return;
    }
    if (m === di) {
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
  }, de = (p, m) => {
    let _;
    for (; p !== m; )
      _ = k(p), i(p), p = _;
    i(m);
  }, At = (p, m, _) => {
    const { bum: O, scope: T, job: C, subTree: L, um: U, m: M, a: S } = p;
    Po(M), Po(S), O && An(O), T.stop(), C && (C.flags |= 8, Be(L, p, m, _)), U && ht(U, m), ht(() => {
      p.isUnmounted = !0;
    }, m);
  }, ze = (p, m, _, O = !1, T = !1, C = 0) => {
    for (let L = C; L < p.length; L++)
      Be(p[L], m, _, O, T);
  }, ct = (p) => {
    if (p.shapeFlag & 6)
      return ct(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = k(p.anchor || p.el), _ = m && m[Ul];
    return _ ? k(_) : m;
  };
  let vt = !1;
  const Et = (p, m, _) => {
    let O;
    p == null ? m._vnode && (Be(m._vnode, null, null, !0), O = m._vnode.component) : q(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, vt || (vt = !0, Eo(O), $s(), vt = !1);
  }, tt = {
    p: q,
    um: Be,
    m: Se,
    r: et,
    mt: _t,
    mc: je,
    pc: ce,
    pbc: De,
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = qt(i[o]), l.el = s.el), !r && l.patchFlag !== -2 && ua(s, l)), l.type === Yn && (l.patchFlag === -1 && (l = i[o] = qt(l)), l.el = s.el), l.type === Qt && !l.el && (l.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
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
function x(e = !1) {
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
    u(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || /* @__PURE__ */ Je(e) || ae(e) ? { i: Ct, r: e, k: t, f: !!r } : e : null);
function u(e, t = null, r = null, n = 0, i = null, o = e === oe ? 0 : 1, s = !1, l = !1) {
  const f = {
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
    ctx: Ct
  };
  return l ? (Mn(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Me(r) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && gt.push(f), f;
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
    let { class: l, style: f } = t;
    l && !Me(l) && (t.class = Ir(l)), Te(f) && (/* @__PURE__ */ Gi(f) && !ee(f) && (f = Ze({}, f)), t.style = ji(f));
  }
  const s = Me(e) ? 1 : pa(e) ? 128 : qn(e) ? 64 : Te(e) ? 4 : ae(e) ? 2 : 0;
  return u(
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
  return e ? /* @__PURE__ */ Gi(e) || ia(e) ? Ze({}, e) : e : null;
}
function Hr(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: f } = e, v = t ? Cc(i || {}, t) : i, y = {
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
    transition: f,
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
  return f && n && Xi(
    y,
    f.clone(y)
  ), y;
}
function ye(e = " ", t = 0) {
  return Yt(Yn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (x(), Ec(Qt, null, e)) : Yt(Qt, null, e);
}
function $t(e) {
  return e == null || typeof e == "boolean" ? Yt(Qt) : ee(e) ? Yt(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ba(e) ? qt(e) : Yt(Yn, null, String(e));
}
function qt(e) {
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
      !i && !ia(t) ? t._ctx = Ct : i === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ae(t)) {
    if (n & 65) {
      Mn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ct }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [ye(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
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
const xc = Qs();
let Ac = 0;
function wc(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || xc, o = {
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
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
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
const Rc = () => at || Ct;
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
    if (Jt(), o(), (l || e.sp) && !tn(e) && qs(e), l) {
      if (s.then(Lo, Lo), t)
        return s.then((f) => {
          ln(!0);
          try {
            Io(e, f, t);
          } finally {
            ln(!1);
          }
        }).catch((f) => {
          Wn(f, e, 0);
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
    return Xe(e, "get", ""), e[t];
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
const J = (e, t) => /* @__PURE__ */ xl(e, t, cn), Ic = "3.5.42";
let Mi;
const Mo = typeof window < "u" && window.trustedTypes;
if (Mo)
  try {
    Mi = /* @__PURE__ */ Mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const va = Mi ? (e) => Mi.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Wt = typeof document < "u" ? document : null, Uo = Wt && /* @__PURE__ */ Wt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Wt.createElementNS(Mc, e) : t === "mathml" ? Wt.createElementNS(Uc, e) : r ? Wt.createElement(e, { is: r }) : Wt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Wt.createTextNode(e),
  createComment: (e) => Wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Wt.querySelector(e),
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
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
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
  const n = e.style, i = Me(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Me(t))
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
      l != null ? Wc(
        e,
        s,
        !Me(t) && t ? t[s] : void 0,
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
      xr(n),
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
function Wc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Me(n) && r === n;
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
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (l !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(t), e._value = r;
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
function qc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Vo = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const o = e[Vo] || (e[Vo] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [l, f] = Xc(t);
    if (n) {
      const v = o[t] = Qc(
        n,
        i
      );
      _r(e, l, v, f);
    } else s && (qc(e, l, s, f), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : xr(e.slice(2)), t];
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
      for (let f = 0; f < s.length && !n._stopped; f++) {
        const v = s[f];
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Me(n))) ? jo(e, Pt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), $o(e, t, n, s));
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
  return Bo(t) && Me(r) ? !1 : t in e;
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
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Vn(e.value) : e.value, f = t ?? "";
    if (l === f)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === f) || (e.value = f);
  }
}, it = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, _r(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => r ? Vn(Fn(f)) : Fn(f)
      ), o = e.multiple, s = o ? Cr(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
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
    Wo(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[vr] = Dn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && Wo(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return ur(e, t);
  if (Cr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Wo(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !Cr(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], l = Fn(s);
      if (r)
        if (n) {
          const f = typeof l;
          f === "string" || f === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Za(t, l) > -1;
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
}, Cn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = su[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  }));
}, au = /* @__PURE__ */ Ze({ patchProp: eu }, Dc);
let qo;
function lu() {
  return qo || (qo = bc(au));
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
  return Me(e) ? document.querySelector(e) : e;
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
    var n, i, o, s, l = [], f = !0, v = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(f = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); f = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!f && r.return != null && (s = r.return(), Object(s) !== s)) return;
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
let $e = Object.freeze, qe = Object.seal, kr = Object.create, Ta = typeof Reflect < "u" && Reflect, Ui = Ta.apply, Di = Ta.construct;
$e || ($e = function(t) {
  return t;
});
qe || (qe = function(t) {
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
const gr = Fe(Array.prototype.forEach), Eu = Fe(Array.prototype.lastIndexOf), Yo = Fe(Array.prototype.pop), zr = Fe(Array.prototype.push), Tu = Fe(Array.prototype.splice), Dr = Array.isArray, Xr = Fe(String.prototype.toLowerCase), yi = Fe(String.prototype.toString), Xo = Fe(String.prototype.match), Wr = Fe(String.prototype.replace), Jo = Fe(String.prototype.indexOf), Su = Fe(String.prototype.trim), Cu = Fe(Number.prototype.toString), xu = Fe(Boolean.prototype.toString), Zo = typeof BigInt > "u" ? null : Fe(BigInt.prototype.toString), Qo = typeof Symbol > "u" ? null : Fe(Symbol.prototype.toString), mt = Fe(Object.prototype.hasOwnProperty), qr = Fe(Object.prototype.toString), Ye = Fe(RegExp.prototype.test), br = Au(TypeError);
function Fe(e) {
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
      return Cu(e);
    case "boolean":
      return xu(e);
    case "bigint":
      return Zo ? Zo(e) : "0";
    case "symbol":
      return Qo ? Qo(e) : "Symbol()";
    case "undefined":
      return qr(e);
    case "function":
    case "object": {
      if (e === null)
        return qr(e);
      const t = e, r = Nt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : qr(n);
      }
      return qr(e);
    }
    default:
      return qr(e);
  }
}
function Nt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return Fe(n.get);
      if (typeof n.value == "function")
        return Fe(n.value);
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
    return Ye(e, ""), !0;
  } catch {
    return !1;
  }
}
const es = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gi = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _i = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), vi = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ts = $e(["#text"]), rs = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ei = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ns = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), xn = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = qe(/{{[\w\W]*|^[\w\W]*}}/g), Lu = qe(/<%[\w\W]*|^[\w\W]*%>/g), Iu = qe(/\${[\w\W]*/g), Mu = qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = qe(/^aria-[\-\w]+$/), is = qe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = qe(/^(?:\w+script|data):/i), Fu = qe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = qe(/^html$/i), $u = qe(/^[a-z][.\w]*(-[.\w]+)+$/i), os = qe(/<[/\w!]/g), ss = qe(/<[/\w]/g), ju = qe(/<\/no(script|embed|frames)/i), Vu = qe(/\/>/i), bt = {
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
    e[t] = qe(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $e(e);
})(), Wu = function() {
  return typeof window > "u" ? null : window;
}, qu = function(t, r) {
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
function Ca() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (F) => Ca(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== bt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, f = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, k = l.prototype, j = Nt(k, "cloneNode"), re = Nt(k, "remove"), q = Nt(k, "nextSibling"), se = Nt(k, "childNodes"), ne = Nt(k, "parentNode"), z = Nt(k, "shadowRoot"), D = Nt(k, "attributes"), V = s && s.prototype ? Nt(s.prototype, "nodeType") : null, ue = s && s.prototype ? Nt(s.prototype, "nodeName") : null, Le = s && s.prototype ? Nt(s.prototype, "ownerDocument") : null, Ne = function(c) {
    return V ? V(c) : c.nodeType;
  }, je = function(c) {
    return ue ? ue(c) : c.nodeName;
  };
  if (typeof o == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let ve, De = "", Qe, lt = !1, Ke = 0;
  const _t = function() {
    if (Ke > 0)
      throw br('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(c) {
    _t(), Ke++;
    try {
      return ve.createHTML(c);
    } finally {
      Ke--;
    }
  }, Ie = function(c) {
    _t(), Ke++;
    try {
      return ve.createScriptURL(c);
    } finally {
      Ke--;
    }
  }, be = function() {
    return lt || (Qe = qu(E, i), lt = !0), Qe;
  }, ce = r, Ve = ce.implementation, he = ce.createNodeIterator, Se = ce.createDocumentFragment, Be = ce.getElementsByTagName, et = n.importNode;
  let de = as();
  t.isSupported = typeof Ea == "function" && typeof ne == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const At = ku, ze = Lu, ct = Iu, vt = Mu, Et = Uu, tt = Du, ut = Fu, p = $u;
  let m = is, _ = null;
  const O = pe({}, [...es, ...gi, ..._i, ...vi, ...ts]);
  let T = null;
  const C = pe({}, [...rs, ...Ei, ...ns, ...xn]);
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
  const S = Object.seal(kr(null, {
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
  let K = !0, H = !0, W = !1, X = !0, Z = !1, N = !0, P = !1, $ = !1, Q = null, ie = null, me = !1, le = !1, Pe = !1, Re = !1, Oe = !0, ft = !1;
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
  const dr = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Rt = "http://www.w3.org/1998/Math/MathML", I = "http://www.w3.org/2000/svg", A = "http://www.w3.org/1999/xhtml";
  let h = A, Ce = !1, Ot = null;
  const ir = pe({}, [Rt, I, A], yi), eo = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let Jn = pe({}, eo);
  const to = $e(["annotation-xml"]);
  let Zn = pe({}, to);
  const Aa = pe({}, ["title", "style", "font", "a", "script"]);
  let $r = null;
  const wa = ["application/xhtml+xml", "text/html"], Ra = "text/html";
  let Ue = null, Ar = null;
  const Oa = r.createElement("form"), ro = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Qn = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ar && Ar === c)
      return;
    (!c || typeof c != "object") && (c = {}), c = yt(c), $r = // eslint-disable-next-line unicorn/prefer-includes
    wa.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? Ra : c.PARSER_MEDIA_TYPE, Ue = $r === "application/xhtml+xml" ? yi : Xr, _ = sr(c, "ALLOWED_TAGS", O, {
      transform: Ue
    }), T = sr(c, "ALLOWED_ATTR", C, {
      transform: Ue
    }), Ot = sr(c, "ALLOWED_NAMESPACES", ir, {
      transform: yi
    }), St = sr(c, "ADD_URI_SAFE_ATTR", dr, {
      transform: Ue,
      base: dr
    }), rr = sr(c, "ADD_DATA_URI_TAGS", nr, {
      transform: Ue,
      base: nr
    }), Tt = sr(c, "FORBID_CONTENTS", tr, {
      transform: Ue
    }), U = sr(c, "FORBID_TAGS", yt({}), {
      transform: Ue
    }), M = sr(c, "FORBID_ATTR", yt({}), {
      transform: Ue
    }), wt = mt(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? yt(c.USE_PROFILES) : c.USE_PROFILES : !1, K = c.ALLOW_ARIA_ATTR !== !1, H = c.ALLOW_DATA_ATTR !== !1, W = c.ALLOW_UNKNOWN_PROTOCOLS || !1, X = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = c.SAFE_FOR_TEMPLATES || !1, N = c.SAFE_FOR_XML !== !1, P = c.WHOLE_DOCUMENT || !1, le = c.RETURN_DOM || !1, Pe = c.RETURN_DOM_FRAGMENT || !1, Re = c.RETURN_TRUSTED_TYPE || !1, me = c.FORCE_BODY || !1, Oe = c.SANITIZE_DOM !== !1, ft = c.SANITIZE_NAMED_PROPS || !1, Mt = c.KEEP_CONTENT !== !1, fr = c.IN_PLACE || !1, m = Ou(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : is, h = typeof c.NAMESPACE == "string" ? c.NAMESPACE : A, Jn = Ti(
      c,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, eo)
      // Default built-in map
    ), Zn = Ti(
      c,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, to)
      // Default built-in map
    );
    const g = Ti(c, "CUSTOM_ELEMENT_HANDLING", () => kr(null));
    if (L = kr(null), mt(g, "tagNameCheck") && ro(g.tagNameCheck) && (L.tagNameCheck = g.tagNameCheck), mt(g, "attributeNameCheck") && ro(g.attributeNameCheck) && (L.attributeNameCheck = g.attributeNameCheck), mt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), qe(L), Z && (H = !1), Pe && (le = !0), wt && (_ = pe({}, ts), T = kr(null), wt.html === !0 && (pe(_, es), pe(T, rs)), wt.svg === !0 && (pe(_, gi), pe(T, Ei), pe(T, xn)), wt.svgFilters === !0 && (pe(_, _i), pe(T, Ei), pe(T, xn)), wt.mathMl === !0 && (pe(_, vi), pe(T, ns), pe(T, xn))), S.tagCheck = null, S.attributeCheck = null, mt(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? S.tagCheck = c.ADD_TAGS : Dr(c.ADD_TAGS) && (_ === O && (_ = yt(_)), pe(_, c.ADD_TAGS, Ue))), mt(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? S.attributeCheck = c.ADD_ATTR : Dr(c.ADD_ATTR) && (T === C && (T = yt(T)), pe(T, c.ADD_ATTR, Ue))), mt(c, "ADD_FORBID_CONTENTS") && Dr(c.ADD_FORBID_CONTENTS) && (Tt === tr && (Tt = yt(Tt)), pe(Tt, c.ADD_FORBID_CONTENTS, Ue)), Mt && (_["#text"] = !0), P && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete U.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw br('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw br('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = ve;
      ve = c.TRUSTED_TYPES_POLICY;
      try {
        De = He("");
      } catch (B) {
        throw ve = R, B;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (ve = void 0, De = "") : (ve === void 0 && (ve = be()), ve && typeof De == "string" && (De = He("")));
    $e && $e(c), Ar = c;
  }, no = pe({}, [...gi, ..._i, ...Nu]), io = pe({}, [...vi, ...Pu]), Na = function(c, g, R) {
    return g.namespaceURI === A ? c === "svg" : g.namespaceURI === Rt ? c === "svg" && (R === "annotation-xml" || Jn[R]) : !!no[c];
  }, Pa = function(c, g, R) {
    return g.namespaceURI === A ? c === "math" : g.namespaceURI === I ? c === "math" && Zn[R] : !!io[c];
  }, ka = function(c, g, R) {
    return g.namespaceURI === I && !Zn[R] || g.namespaceURI === Rt && !Jn[R] ? !1 : !io[c] && (Aa[c] || !no[c]);
  }, La = function(c) {
    let g = ne(c);
    (!g || !g.tagName) && (g = {
      namespaceURI: h,
      tagName: "template"
    });
    const R = Xr(c.tagName), B = Xr(g.tagName);
    return Ot[c.namespaceURI] ? c.namespaceURI === I ? Na(R, g, B) : c.namespaceURI === Rt ? Pa(R, g, B) : c.namespaceURI === A ? ka(R, g, B) : !!($r === "application/xhtml+xml" && Ot[c.namespaceURI]) : !1;
  }, or = function(c) {
    zr(t.removed, {
      element: c
    });
    try {
      ne(c).removeChild(c);
    } catch {
      if (re(c), !ne(c))
        throw br("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oo = function(c, g, R) {
    try {
      c.removeAttributeNode(g);
    } catch {
      try {
        c.removeAttribute(R);
      } catch {
      }
    }
  }, pn = function(c) {
    hn(c);
    const g = se(c);
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
    const R = D(c);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const Y = R[B], te = Y && Y.name;
        typeof te == "string" && oo(c, Y, te);
      }
  }, pr = function(c, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(c);
      } catch {
        R = null;
      }
    zr(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(c);
    } catch {
      try {
        g.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (le || Pe)
        try {
          or(g);
        } catch {
        }
      else
        try {
          g.setAttribute(c, "");
        } catch {
        }
  }, Ia = function(c) {
    const g = D(c);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], Y = B && B.name;
        typeof Y != "string" || T[Ue(Y)] || oo(c, B, Y);
      }
  }, hn = function(c) {
    const g = [c];
    for (; g.length > 0; ) {
      const R = g.pop();
      Ne(R) === bt.element && Ia(R);
      const Y = se(R);
      if (Y)
        for (let te = Y.length - 1; te >= 0; --te)
          g.push(Y[te]);
    }
  }, so = function(c, g) {
    return N ? c === "patchsrc" ? !0 : c === "for" && g !== "label" && g !== "output" : !1;
  }, Ma = function(c) {
    if (!N)
      return;
    const g = [c];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Ne(R);
      if (B === bt.processingInstruction || B === bt.comment && Ye(ss, R.data)) {
        try {
          re(R);
        } catch {
        }
        continue;
      }
      if (B === bt.element) {
        const te = R, Ae = Ue(je(R));
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
  }, ao = function(c) {
    let g = null, R = null;
    if (me)
      c = "<remove></remove>" + c;
    else {
      const te = Xo(c, /^[\r\n\t ]+/);
      R = te && te[0];
    }
    $r === "application/xhtml+xml" && h === A && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const B = ve ? He(c) : c;
    if (h === A)
      try {
        g = new y().parseFromString(B, $r);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ve.createDocument(h, "template", null);
      try {
        g.documentElement.innerHTML = Ce ? De : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return c && R && Y.insertBefore(r.createTextNode(R), Y.childNodes[0] || null), h === A ? Be.call(g, P ? "html" : "body")[0] : P ? g.documentElement : Y;
  }, lo = function(c) {
    const g = Le ? Le(c) : c.ownerDocument;
    return he.call(
      g || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, mn = function(c) {
    return c = Wr(c, At, " "), c = Wr(c, ze, " "), c = Wr(c, ct, " "), c;
  }, ei = function(c) {
    var g;
    c.normalize();
    const R = Le ? Le(c) : c.ownerDocument, B = he.call(
      R || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = mn(Y.data), Y = B.nextNode();
    const te = (g = c.querySelectorAll) === null || g === void 0 ? void 0 : g.call(c, "template");
    te && gr(te, (Ae) => {
      wr(Ae.content) && ei(Ae.content);
    });
  }, bn = function(c) {
    const g = ue ? ue(c) : null;
    return typeof g != "string" || Ue(g) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    c.attributes !== D(c) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    c.nodeType !== V(c) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    c.childNodes !== se(c);
  }, wr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return V(c) === bt.documentFragment;
    } catch {
      return !1;
    }
  }, jr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return typeof V(c) == "number";
    } catch {
      return !1;
    }
  };
  function Ut(F, c, g) {
    F.length !== 0 && gr(F, (R) => {
      R.call(t, c, g, Ar);
    });
  }
  const Ua = function(c, g) {
    return !!(N && c.hasChildNodes() && !jr(c.firstElementChild) && Ye(os, c.textContent) && Ye(os, c.innerHTML) || N && c.namespaceURI === A && Bu[g] && (jr(c.firstElementChild) || typeof c.textContent == "string" && Ye(zu[g], c.textContent)) || c.nodeType === bt.processingInstruction || N && c.nodeType === bt.comment && Ye(ss, c.data));
  }, yn = function(c, g) {
    if (c instanceof RegExp)
      return Ye(c, g);
    if (c instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), Y = 2; Y < R; Y++)
        B[Y - 2] = arguments[Y];
      return !!c(g, ...B);
    }
    return !1;
  }, Da = function(c, g, R) {
    if (!U[g] && ho(g) && yn(L.tagNameCheck, g))
      return !1;
    if (Mt && !Tt[g]) {
      const B = ne(c), Y = se(c);
      if (Y && B) {
        const te = Y.length;
        for (let Ae = te - 1; Ae >= 0; --Ae) {
          const ke = c === R ? j(Y[Ae], !0) : Y[Ae];
          B.insertBefore(ke, q(c));
        }
      }
    }
    return or(c), !0;
  }, co = function(c, g, R, B) {
    return c.length === 0 ? g : g === R || g === B ? yt(g) : g;
  }, uo = function(c, g) {
    return c === g || ne(c) !== null ? !1 : (fr && hn(c), !0);
  }, fo = function(c, g) {
    if (Ut(de.beforeSanitizeElements, c, null), uo(c, g))
      return !0;
    if (bn(c))
      return or(c), !0;
    const R = Ue(je(c));
    if (_ = co(de.uponSanitizeElement, _, O, Q), Ut(de.uponSanitizeElement, c, {
      tagName: R,
      allowedTags: _
    }), uo(c, g))
      return !0;
    if (Ua(c, R))
      return or(c), !0;
    if (U[R] || !(S.tagCheck instanceof Function && S.tagCheck(R)) && !_[R]) {
      const Y = Da(c, R, g);
      return Y === !1 && Ut(de.afterSanitizeElements, c, null), Y;
    }
    if (Ne(c) === bt.element && !La(c) || (R === "noscript" || R === "noembed" || R === "noframes") && Ye(ju, c.innerHTML))
      return or(c), !0;
    if (Z && c.nodeType === bt.text) {
      const Y = mn(c.textContent);
      c.textContent !== Y && (zr(t.removed, {
        element: c.cloneNode()
      }), c.textContent = Y);
    }
    return Ut(de.afterSanitizeElements, c, null), !1;
  }, po = function(c, g, R) {
    if (M[g] || so(g, c) || Oe && (g === "id" || g === "name") && (R in r || R in Oa))
      return !1;
    const B = T[g] || S.attributeCheck instanceof Function && S.attributeCheck(g, c);
    return H && Ye(vt, g) || K && Ye(Et, g) ? !0 : B ? St[g] || Ye(m, Wr(R, ut, "")) || (g === "src" || g === "xlink:href" || g === "href") && c !== "script" && Jo(R, "data:") === 0 && rr[c] || W && !Ye(tt, Wr(R, ut, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ho(c) && yn(L.tagNameCheck, c) && yn(L.attributeNameCheck, g, c) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && L.allowCustomizedBuiltInElements && yn(L.tagNameCheck, R)
    );
  }, Fa = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ho = function(c) {
    return !Fa[Xr(c)] && Ye(p, c);
  }, Ha = function(c, g, R, B) {
    if (ve && typeof E == "object" && typeof E.getAttributeType == "function" && !R)
      switch (E.getAttributeType(c, g)) {
        case "TrustedHTML":
          return He(B);
        case "TrustedScriptURL":
          return Ie(B);
      }
    return B;
  }, $a = function(c, g, R, B) {
    try {
      R ? c.setAttributeNS(R, g, B) : c.setAttribute(g, B), bn(c) ? or(c) : Yo(t.removed);
    } catch {
      pr(g, c);
    }
  }, mo = function(c) {
    Ut(de.beforeSanitizeAttributes, c, null);
    const g = c.attributes;
    if (!g || bn(c))
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
    const Y = Ue(c.nodeName);
    for (; B--; ) {
      const te = g[B], Ae = te.name, ke = te.namespaceURI, dt = te.value, pt = Ue(Ae), ri = dt;
      let nt = Ae === "value" ? ri : Su(ri);
      if (R.attrName = pt, R.attrValue = nt, R.keepAttr = !0, R.forceKeepAttr = void 0, Ut(de.uponSanitizeAttribute, c, R), nt = R.attrValue, ft && (pt === "id" || pt === "name") && Jo(nt, rt) !== 0 && (pr(Ae, c, te), nt = rt + nt), N && Ye(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, nt)) {
        pr(Ae, c, te);
        continue;
      }
      if (pt === "attributename" && Xo(nt, "href")) {
        pr(Ae, c, te);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          pr(Ae, c, te);
          continue;
        }
        if (!X && Ye(Vu, nt)) {
          pr(Ae, c, te);
          continue;
        }
        if (Z && (nt = mn(nt)), !po(Y, pt, nt)) {
          pr(Ae, c, te);
          continue;
        }
        nt = Ha(Y, pt, ke, nt), nt !== ri && $a(c, Ae, ke, nt);
      }
    }
    Ut(de.afterSanitizeAttributes, c, null);
  }, gn = function(c) {
    let g = null;
    const R = lo(c);
    for (Ut(de.beforeSanitizeShadowDOM, c, null); g = R.nextNode(); )
      if (Ut(de.uponSanitizeShadowNode, g, null), fo(g, c), mo(g), wr(g.content) && gn(g.content), Ne(g) === bt.element) {
        const B = z(g);
        wr(B) && (ti(B), gn(B));
      }
    Ut(de.afterSanitizeShadowDOM, c, null);
  }, ti = function(c) {
    const g = [{
      node: c,
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
        const ke = ue ? ue(B) : null;
        if (typeof ke == "string" && Ue(ke) === "template") {
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
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, Y = null;
    if (Ce = !F, Ce && (F = "<!-->"), typeof F != "string" && !jr(F) && (F = Ru(F), typeof F != "string"))
      throw br("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = Q, T = ie) : Qn(c), (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && (_ = yt(_)), de.uponSanitizeAttribute.length > 0 && (T = yt(T)), t.removed = [];
    const te = fr && typeof F != "string" && jr(F);
    if (te) {
      Ma(F);
      const dt = je(F);
      if (typeof dt == "string") {
        const pt = Ue(dt);
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
      if (!le && !Z && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return ve && Re ? He(F) : F;
      if (g = ao(F), !g)
        return le ? null : Re ? De : "";
    }
    g && me && or(g.firstChild);
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
    if (le) {
      if (Z && ei(g), Pe)
        for (Y = Se.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (T.shadowroot || T.shadowrootmode) && (Y = et.call(n, Y, !0)), Y;
    }
    let ke = P ? g.outerHTML : g.innerHTML;
    return P && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ye(Hu, g.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + ke), Z && (ke = mn(ke)), ve && Re ? He(ke) : ke;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qn(F), $ = !0, Q = _, ie = T;
  }, t.clearConfig = function() {
    Ar = null, $ = !1, Q = null, ie = null, ve = Qe, De = "";
  }, t.isValidAttribute = function(F, c, g) {
    Ar || Qn({});
    const R = Ue(F), B = Ue(c);
    return po(R, B, g);
  }, t.addHook = function(F, c) {
    typeof c == "function" && mt(de, F) && zr(de[F], c);
  }, t.removeHook = function(F, c) {
    if (mt(de, F)) {
      if (c !== void 0) {
        const g = Eu(de[F], c);
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
var Ku = Ca();
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
    var o, s = "", l = 0, f = 0;
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
      f !== l && (s += n.substring(f, l)), f = l + 1, s += o;
    }
    return f !== l ? s + n.substring(f, l) : s;
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
  }, f = (q) => q, v = (l.sanitize ? Ku.sanitize : f) || f, y = l.escape ? cs : f, E = (q) => typeof q == "string" || typeof q == "number", k = (q, se, ne) => q.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, D) => {
    if (se === void 0 || !(D in se))
      return y(z);
    const V = se[D];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? cs : f)(`${V.value}`) : y(z);
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
}, Ef = ["disabled"], Tf = { class: "library-actions-health-links" }, Sf = ["href"], Cf = ["href"], xf = ["href"], Af = ["href"], wf = { class: "library-actions-health-grid" }, Rf = { class: "library-import-health-number" }, Of = { class: "library-import-health-number" }, Nf = { class: "library-muted" }, Pf = { class: "library-muted" }, kf = { class: "library-muted" }, Lf = {
  key: 3,
  class: "library-import-health-examples"
}, If = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Mf = ["aria-label"], Uf = ["name", "value"], Df = { class: "library-quick-search-row" }, Ff = { class: "library-quick-filter-search" }, Hf = ["aria-label"], $f = { class: "library-quick-filter-options" }, jf = { class: "library-quick-filter-option-grid" }, Vf = { value: "title" }, Bf = { value: "recent" }, zf = { value: "publicationDate" }, Wf = { value: "publication" }, qf = { value: "lastOpened" }, Kf = { value: "format" }, Gf = { value: "" }, Yf = { value: "1" }, Xf = ["value"], Jf = ["value"], Zf = ["aria-label"], Qf = ["aria-label"], ed = { class: "library-filter-panel" }, td = { class: "library-filter-panel-summary" }, rd = ["aria-label"], nd = { value: "" }, id = ["value"], od = { value: "" }, sd = ["value"], ad = { value: "" }, ld = ["value"], cd = { value: "" }, ud = ["value"], fd = { value: "" }, dd = ["value"], pd = { value: "" }, hd = ["value"], md = { value: "" }, bd = ["value"], yd = { value: "" }, gd = ["value"], _d = { value: "" }, vd = ["value"], Ed = { value: "" }, Td = ["value"], Sd = { value: "" }, Cd = { value: "1" }, xd = { value: "" }, Ad = { value: "1" }, wd = { value: "title" }, Rd = { value: "recent" }, Od = { value: "publicationDate" }, Nd = { value: "publication" }, Pd = { value: "lastOpened" }, kd = { value: "format" }, Ld = ["value"], Id = ["value"], Md = ["aria-label"], Ud = ["aria-label"], Dd = ["href"], Fd = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Hd = { class: "library-muted library-catalogue-eyebrow" }, $d = { id: "library-discovery-heading" }, jd = { class: "library-muted" }, Vd = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Bd = { key: 0 }, zd = { key: 1 }, Wd = { key: 2 }, qd = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Kd = { key: 0 }, Gd = { key: 1 }, Yd = {
  href: "/apps/library/",
  class: "button secondary"
}, Xd = { class: "library-catalogue-status-row" }, Jd = { class: "library-muted library-filter-result-summary" }, Zd = { key: 0 }, Qd = { href: "?" }, ep = ["aria-label"], tp = { class: "library-pagination-range" }, rp = { key: 0 }, np = ["href"], ip = {
  key: 1,
  class: "library-muted"
}, op = ["href"], sp = {
  key: 3,
  class: "library-muted"
}, ap = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, lp = ["aria-label"], cp = { class: "library-settings-count-badge" }, up = ["action"], fp = ["value"], dp = ["name", "value"], pp = ["placeholder"], hp = {
  type: "submit",
  class: "button primary"
}, mp = { class: "library-muted" }, bp = ["action"], yp = ["value"], gp = ["name", "value"], _p = ["placeholder"], vp = {
  type: "submit",
  class: "button secondary"
}, Ep = { class: "library-muted" }, Tp = ["action"], Sp = ["value"], Cp = ["name", "value"], xp = {
  type: "submit",
  class: "button secondary"
}, Ap = { class: "library-muted" }, wp = ["action"], Rp = ["value"], Op = ["name", "value"], Np = { name: "bulkEditField" }, Pp = { value: "publicationType" }, kp = { value: "subtitle" }, Lp = { value: "creators" }, Ip = { value: "publication" }, Mp = { value: "publicationDate" }, Up = { value: "language" }, Dp = { value: "publisher" }, Fp = { value: "genres" }, Hp = { value: "classifications" }, $p = {
  type: "submit",
  class: "button secondary"
}, jp = { class: "library-muted" }, Vp = ["action"], Bp = ["value"], zp = ["name", "value"], Wp = {
  type: "submit",
  class: "button secondary"
}, qp = { class: "library-muted" }, Kp = { class: "library-discovery-shortcuts" }, Gp = { class: "library-discovery-shortcut-grid" }, Yp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Xp = { id: "library-periodical-groups-heading" }, Jp = { class: "library-muted" }, Zp = ["href"], Qp = { class: "library-muted" }, eh = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, th = { id: "library-periodical-groups-empty-heading" }, rh = { class: "library-muted" }, nh = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, ih = { id: "library-year-groups-heading" }, oh = ["href"], sh = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, ah = { id: "library-creator-groups-heading" }, lh = ["href"], ch = ["aria-label"], uh = ["href", "aria-label"], fh = { class: "library-muted" }, dh = { class: "library-empty-actions" }, ph = ["href"], hh = { class: "library-muted" }, mh = { class: "library-muted" }, bh = { class: "library-empty-actions" }, yh = ["href"], gh = { class: "library-muted" }, _h = { class: "library-empty-actions" }, vh = ["href"], Eh = {
  href: "?",
  class: "button primary"
}, Th = { class: "library-muted" }, Sh = { class: "library-empty-actions" }, Ch = ["href"], xh = {
  key: 4,
  class: "library-cover-gallery"
}, Ah = ["href", "aria-label"], wh = ["src", "alt"], Rh = ["action", "onSubmit"], Oh = ["value"], Nh = ["value"], Ph = ["aria-pressed", "title", "aria-label", "onClick"], kh = { class: "library-cover-summary" }, Lh = { class: "library-cover-primary" }, Ih = ["aria-label"], Mh = ["href"], Uh = ["onToggle"], Dh = ["aria-label"], Fh = { class: "library-cover-meta" }, Hh = {
  key: 0,
  class: "library-creator"
}, $h = { class: "library-cover-detail-list" }, jh = { class: "library-cover-detail-chip" }, Vh = {
  key: 0,
  class: "library-cover-detail-chip"
}, Bh = {
  key: 1,
  class: "library-cover-detail-chip"
}, zh = {
  key: 2,
  class: "library-cover-detail-chip"
}, Wh = {
  key: 3,
  class: "library-cover-detail-chip"
}, qh = {
  key: 4,
  class: "library-cover-detail-chip"
}, Kh = {
  key: 5,
  class: "library-cover-detail-chip"
}, Gh = {
  key: 6,
  class: "library-cover-detail-chip"
}, Yh = {
  key: 1,
  class: "library-muted library-cover-description"
}, Xh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Jh = { key: 0 }, Zh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Qh = {
  key: 0,
  class: "library-muted"
}, em = { class: "library-cover-actions" }, tm = ["href"], rm = ["href"], nm = ["href"], im = ["aria-label"], om = { class: "library-pagination-range" }, sm = { key: 0 }, am = ["href"], lm = {
  key: 1,
  class: "library-muted"
}, cm = ["href"], um = {
  key: 3,
  class: "library-muted"
}, fm = {
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
    }), o = /* @__PURE__ */ lr((i.items || []).map((I) => ({ ...I }))), s = J(() => o), l = J(() => i.shelves || []), f = J(() => i.formats || []), v = J(() => i.publications || []), y = J(() => i.publicationSummaries || []), E = J(() => i.publicationIssueContext || null), k = J(() => i.publicationYears || []), j = J(() => i.creators || []), re = J(() => i.scanStatuses || []), q = J(() => i.workflowStatuses || []), se = J(() => i.genres || []), ne = J(() => i.classifications || []), z = J(() => i.cataloguePagination || {
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
    }), V = J(() => i.settingsUrl || ""), ue = J(() => i.requestToken || ""), Le = J(() => i.metadataExportUrl || ""), Ne = J(() => i.metadataSidecarManifestUrl || ""), je = J(() => i.metadataSidecarBundleUrl || ""), ve = J(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), De = J(() => i.batchTagUrl || "/apps/library/bulk/tags"), Qe = J(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), lt = J(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = J(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), _t = J(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), He = J(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Ie = J(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), be = J(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ce = J(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Ve = J(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), he = /* @__PURE__ */ lr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Se = J(() => he.summary || {}), Be = J(() => {
      const I = Number(Se.value.generatedAt || 0);
      return I > 0 ? new Date(I * 1e3).toLocaleString() : "";
    }), et = J(() => Se.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), de = J(() => Se.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), At = J(() => Se.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), ze = J(() => Se.value.coverSupportMatrix || At.value.byFormat || []), ct = J(() => Se.value.environmentCapabilities || {}), vt = J(() => i.discoveryPage === "publication"), Et = J(() => i.discoveryPage === "year"), tt = J(() => i.discoveryPage === "creator"), ut = J(() => vt.value || Et.value || tt.value), p = J(() => i.discoveryTitle || D.publication || D.year || D.creator || ""), m = J(() => ut.value ? p.value : a("library", "Publication catalogue")), _ = J(() => tt.value ? a("library", "Creator") : Et.value ? a("library", "Publication year") : a("library", "Publication / series")), O = J(() => Number(i.rootCount || 0)), T = J(() => Number(i.enabledRootCount || 0)), C = J(() => O.value === 0), L = J(() => O.value > 0 && T.value === 0), U = J(() => K.value.length > 0), M = {
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
    }, S = J(() => {
      if (typeof window > "u") return "";
      const I = new URLSearchParams(window.location.search);
      if (I.get("batchMetadataApplyResult") !== "1") return "";
      const A = I.get("batchMetadataField") || "field", h = I.get("batchMetadataApplied") || "0", Ce = I.get("batchMetadataUnchanged") || "0", Ot = I.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: A, unchanged: Ce, skipped: Ot });
    }), K = J(() => Object.entries(M).map(([I, A]) => ({ key: I, label: A, value: D[I] || "" })).filter((I) => String(I.value).trim() !== "")), H = J(() => Object.entries(D).filter(([I, A]) => !["q", "sort", "starred"].includes(I) && String(A || "").trim() !== "").map(([I, A]) => ({ key: I, value: A }))), W = J(() => Object.entries(D).filter(([I, A]) => String(A || "").trim() !== "").map(([I, A]) => ({ key: I, value: A }))), X = /* @__PURE__ */ lr({}), Z = /* @__PURE__ */ vl(null);
    let N = null;
    function P(I) {
      const A = new URLSearchParams(new FormData(I));
      for (const h of Array.from(A.keys()))
        String(A.get(h) || "").trim() === "" && A.delete(h);
      return A.delete("page"), A;
    }
    function $(I) {
      o.splice(0, o.length, ...(I.items || []).map((A) => ({ ...A })));
      for (const A of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl"])
        Object.prototype.hasOwnProperty.call(I, A) && (i[A] = I[A]);
      Object.assign(D, I.activeFilters || {});
    }
    async function Q(I = !1) {
      if (!(he.loading || he.refreshing)) {
        I ? he.refreshing = !0 : he.loading = !0, he.error = "";
        try {
          const A = await fetch(`${Ve.value}${I ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!A.ok)
            throw new Error(`Import health request failed: ${A.status}`);
          he.summary = await A.json(), he.loaded = !0;
        } catch (A) {
          he.error = A?.message || String(A);
        } finally {
          he.loading = !1, he.refreshing = !1;
        }
      }
    }
    async function ie(I) {
      I && I.currentTarget && I.currentTarget.open !== !0 || he.loaded || he.loading || await Q(!1);
    }
    async function me() {
      await Q(!0);
    }
    async function le(I) {
      const A = I?.currentTarget?.tagName === "FORM" ? I.currentTarget : I?.currentTarget?.form;
      if (!A) return;
      const Ce = P(A).toString(), Ot = Ce ? `?${Ce}` : "", ir = await fetch(ve.value + Ot, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!ir.ok) {
        A.submit();
        return;
      }
      $(await ir.json()), history.replaceState({}, "", Ce ? `?${Ce}` : window.location.pathname);
    }
    function Pe(I) {
      le(I);
    }
    function Re(I) {
      window.clearTimeout(N), N = window.setTimeout(() => Pe(I), 350);
    }
    function Oe(I) {
      const A = new URLSearchParams();
      for (const [Ce, Ot] of Object.entries(D)) {
        const ir = String(Ot || "").trim();
        ir !== "" && Ce !== I && !(Ce === "sort" && ir === "title") && A.set(Ce, ir);
      }
      const h = A.toString();
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
    function tr(I, A) {
      X[I] = !!A?.currentTarget?.open;
    }
    function rr(I) {
      const A = String(I?.tagName || "").toLowerCase();
      return I?.isContentEditable || ["input", "select", "textarea", "button"].includes(A);
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
    async function Rt(I, A) {
      const h = A?.currentTarget?.closest?.("form") || A?.currentTarget;
      if (!h || !I?.starUrl) return;
      const Ce = !!I.starred;
      I.starred = !Ce;
      try {
        (await fetch(I.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (I.starred = Ce);
      } catch {
        I.starred = Ce;
      }
    }
    return (I, A) => (x(), w("div", Zu, [
      u("section", Qu, [
        u("div", ef, [
          u("div", null, [
            ut.value ? (x(), w("p", tf, d(_.value), 1)) : fe("", !0),
            u("h2", rf, d(m.value), 1),
            u("p", nf, d(ut.value ? b(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : b(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          u("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": b(a)("library", "Library actions")
          }, [
            u("details", {
              class: "library-catalogue-actions-menu",
              onToggle: ie
            }, [
              u("summary", null, d(b(a)("library", "Actions")), 1),
              u("div", sf, [
                u("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, d(b(a)("library", "Settings")), 9, af),
                Le.value ? (x(), w("a", {
                  key: 0,
                  href: Le.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, d(b(a)("library", "Export corrected metadata")), 9, lf)) : fe("", !0),
                Ne.value ? (x(), w("a", {
                  key: 1,
                  href: Ne.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, d(b(a)("library", "Sidecar manifest")), 9, cf)) : fe("", !0),
                je.value ? (x(), w("a", {
                  key: 2,
                  href: je.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, d(b(a)("library", "Sidecar ZIP")), 9, uf)) : fe("", !0),
                u("div", ff, [
                  u("p", df, d(b(a)("library", "Import health")), 1),
                  u("h3", pf, d(b(a)("library", "Metadata overview")), 1),
                  u("p", hf, d(b(a)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  he.loading ? (x(), w("p", mf, d(b(a)("library", "Loading cached metadata overview…")), 1)) : he.error ? (x(), w("p", bf, d(he.error), 1)) : he.loaded ? fe("", !0) : (x(), w("p", yf, d(b(a)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  he.loaded ? (x(), w(oe, { key: 3 }, [
                    Se.value.message ? (x(), w("p", gf, d(Se.value.message), 1)) : Se.value.cacheStatus === "missing" ? (x(), w("p", _f, d(b(a)("library", "No cached metadata overview exists yet")), 1)) : fe("", !0),
                    Be.value ? (x(), w("p", vf, d(b(a)("library", "Last generated")) + ": " + d(Be.value), 1)) : fe("", !0),
                    u("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: he.refreshing,
                      onClick: me
                    }, d(he.refreshing ? b(a)("library", "Refreshing metadata overview…") : b(a)("library", "Refresh metadata overview")), 9, Ef),
                    u("div", Tf, [
                      u("a", {
                        class: "button secondary",
                        href: et.value.reviewUrl || "?status=metadata_error"
                      }, d(b(a)("library", "Review metadata errors")), 9, Sf),
                      u("a", {
                        class: "button secondary",
                        href: Ie.value
                      }, d(b(a)("library", "Full review")), 9, Cf),
                      u("a", {
                        class: "button secondary",
                        href: be.value
                      }, d(b(a)("library", "Export TSV")), 9, xf),
                      u("a", {
                        class: "button secondary",
                        href: ce.value
                      }, d(b(a)("library", "Probe covers")), 9, Af)
                    ]),
                    u("div", wf, [
                      u("article", null, [
                        u("h4", null, d(b(a)("library", "Metadata errors")), 1),
                        u("p", Rf, d(et.value.total || 0), 1),
                        u("ul", null, [
                          (x(!0), w(oe, null, Ee(et.value.byExtension, (h) => (x(), w("li", {
                            key: h.extension
                          }, d(rt(h.extension)) + " · " + d(h.count), 1))), 128))
                        ])
                      ]),
                      u("article", null, [
                        u("h4", null, d(b(a)("library", "Archive/container check")), 1),
                        u("p", Of, d(de.value.mismatches || 0), 1),
                        u("ul", null, [
                          (x(!0), w(oe, null, Ee(de.value.byExtensionAndContainer, (h) => (x(), w("li", {
                            key: `${h.extension}-${h.actualContainerType}`
                          }, d(rt(h.extension)) + " · " + d(h.actualContainerType) + " · " + d(h.count), 1))), 128))
                        ])
                      ]),
                      u("article", null, [
                        u("h4", null, d(b(a)("library", "Cover health")), 1),
                        u("p", Nf, d(At.value.note), 1),
                        u("ul", null, [
                          (x(!0), w(oe, null, Ee(At.value.byFormat, (h) => (x(), w("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                          }, d(rt(h.extension)) + " · nextcloudPreview: " + d(h.nextcloudPreview) + " · libraryCoverRoute: " + d(h.libraryCoverRoute) + " · " + d(h.count), 1))), 128))
                        ])
                      ]),
                      u("article", null, [
                        u("h4", null, d(b(a)("library", "Cover support matrix")), 1),
                        u("p", Pf, d(b(a)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        u("ul", null, [
                          (x(!0), w(oe, null, Ee(ze.value, (h) => (x(), w("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}-${h.count}`
                          }, d(rt(h.extension)) + " · Nextcloud/plugin preview: " + d(h.nextcloudPreview) + " · Library extraction: " + d(h.libraryCoverRoute) + " · " + d(h.count), 1))), 128))
                        ]),
                        u("p", kf, d(b(a)("library", "Extractor tools")) + ": ZIP=" + d(ct.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + d(ct.value.sevenZipCommand || "missing") + " · RAR=" + d(ct.value.rarCommand || "missing") + " · bsdtar=" + d(ct.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    et.value.examples?.length ? (x(), w("details", Lf, [
                      u("summary", null, d(b(a)("library", "Example files and suggested actions")), 1),
                      u("ul", null, [
                        (x(!0), w(oe, null, Ee(et.value.examples, (h) => (x(), w("li", {
                          key: `${h.fileId}-${h.path}`
                        }, [
                          u("code", null, d(h.path), 1),
                          u("span", null, d(h.scanStatus) + " · " + d(h.scanError) + " · " + d(h.actualContainerType), 1),
                          u("strong", null, d(h.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : fe("", !0)
                  ], 64)) : fe("", !0)
                ])
              ])
            ], 32)
          ], 8, of)
        ]),
        S.value ? (x(), w("p", If, d(S.value), 1)) : fe("", !0),
        u("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": b(a)("library", "Quick catalogue filters"),
          onSubmit: Cn(le, ["prevent"])
        }, [
          (x(!0), w(oe, null, Ee(H.value, (h) => (x(), w("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, Uf))), 128)),
          u("div", Df, [
            u("label", Ff, [
              u("span", null, [
                ye(d(b(a)("library", "Search")) + " ", 1),
                A[18] || (A[18] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              We(u("input", {
                ref_key: "quickSearchInput",
                ref: Z,
                "onUpdate:modelValue": A[0] || (A[0] = (h) => D.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: Re
              }, null, 544), [
                [bi, D.q]
              ])
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": b(a)("library", "Search catalogue")
            }, d(b(a)("library", "Search")), 9, Hf)
          ]),
          u("details", $f, [
            u("summary", null, d(b(a)("library", "Filter & sort")), 1),
            u("div", jf, [
              u("label", null, [
                ye(d(b(a)("library", "Sort")) + " ", 1),
                We(u("select", {
                  "onUpdate:modelValue": A[1] || (A[1] = (h) => D.sort = h),
                  name: "sort",
                  onChange: le
                }, [
                  u("option", Vf, d(b(a)("library", "Title")), 1),
                  u("option", Bf, d(b(a)("library", "Recently added")), 1),
                  u("option", zf, d(b(a)("library", "Publication date")), 1),
                  u("option", Wf, d(b(a)("library", "Series")), 1),
                  u("option", qf, d(b(a)("library", "Recently opened")), 1),
                  u("option", Kf, d(b(a)("library", "Format")), 1)
                ], 544), [
                  [it, D.sort]
                ])
              ]),
              u("label", null, [
                ye(d(b(a)("library", "Starred")) + " ", 1),
                We(u("select", {
                  "onUpdate:modelValue": A[2] || (A[2] = (h) => D.starred = h),
                  name: "starred",
                  onChange: le
                }, [
                  u("option", Gf, d(b(a)("library", "All")), 1),
                  u("option", Yf, d(b(a)("library", "Starred")), 1)
                ], 544), [
                  [it, D.starred]
                ])
              ]),
              u("label", null, [
                ye(d(b(a)("library", "Size")) + " ", 1),
                u("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: le
                }, [
                  (x(), w(oe, null, Ee(n, (h) => u("option", {
                    key: h,
                    value: h
                  }, d(h), 9, Jf)), 64))
                ], 40, Xf)
              ]),
              u("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": b(a)("library", "Apply catalogue filters")
              }, d(b(a)("library", "Apply filters")), 9, Zf),
              u("a", {
                href: "?",
                class: "button secondary",
                "aria-label": b(a)("library", "Clear catalogue filters")
              }, d(b(a)("library", "Clear all")), 9, Qf)
            ])
          ])
        ], 40, Mf),
        u("details", ed, [
          u("summary", td, d(b(a)("library", "Show catalogue filters")), 1),
          u("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": b(a)("library", "Catalogue search and filters"),
            onSubmit: Cn(le, ["prevent"])
          }, [
            u("label", null, [
              ye(d(b(a)("library", "Search title / author")) + " ", 1),
              We(u("input", {
                "onUpdate:modelValue": A[3] || (A[3] = (h) => D.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [bi, D.q]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Type")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[4] || (A[4] = (h) => D.type = h),
                name: "type"
              }, [
                u("option", nd, d(b(a)("library", "All types")), 1),
                (x(), w(oe, null, Ee(r, (h) => u("option", {
                  key: h,
                  value: h
                }, d(h), 9, id)), 64))
              ], 512), [
                [it, D.type]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Series / periodical")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[5] || (A[5] = (h) => D.publication = h),
                name: "publication"
              }, [
                u("option", od, d(b(a)("library", "All series and periodicals")), 1),
                (x(!0), w(oe, null, Ee(v.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, sd))), 128))
              ], 512), [
                [it, D.publication]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Publication year")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[6] || (A[6] = (h) => D.year = h),
                name: "year"
              }, [
                u("option", ad, d(b(a)("library", "All years")), 1),
                (x(!0), w(oe, null, Ee(k.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, ld))), 128))
              ], 512), [
                [it, D.year]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Creator")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[7] || (A[7] = (h) => D.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                u("option", cd, d(b(a)("library", "All creators")), 1),
                (x(!0), w(oe, null, Ee(j.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, ud))), 128))
              ], 512), [
                [it, D.creator]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Nextcloud tag")) + " ", 1),
              We(u("input", {
                "onUpdate:modelValue": A[8] || (A[8] = (h) => D.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [bi, D.tag]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Format")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[9] || (A[9] = (h) => D.format = h),
                name: "format"
              }, [
                u("option", fd, d(b(a)("library", "All formats")), 1),
                (x(!0), w(oe, null, Ee(f.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(rt(h)), 9, dd))), 128))
              ], 512), [
                [it, D.format]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Shelf")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[10] || (A[10] = (h) => D.shelf = h),
                name: "shelf"
              }, [
                u("option", pd, d(b(a)("library", "All shelves")), 1),
                (x(!0), w(oe, null, Ee(l.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, hd))), 128))
              ], 512), [
                [it, D.shelf]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Scan status")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[11] || (A[11] = (h) => D.status = h),
                name: "status"
              }, [
                u("option", md, d(b(a)("library", "All scan statuses")), 1),
                (x(!0), w(oe, null, Ee(re.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, bd))), 128))
              ], 512), [
                [it, D.status]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Workflow status")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[12] || (A[12] = (h) => D.workflowStatus = h),
                name: "workflowStatus"
              }, [
                u("option", yd, d(b(a)("library", "All workflow statuses")), 1),
                (x(!0), w(oe, null, Ee(q.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, gd))), 128))
              ], 512), [
                [it, D.workflowStatus]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Genre")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[13] || (A[13] = (h) => D.genre = h),
                name: "genre"
              }, [
                u("option", _d, d(b(a)("library", "All genres")), 1),
                (x(!0), w(oe, null, Ee(se.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, vd))), 128))
              ], 512), [
                [it, D.genre]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Classification")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[14] || (A[14] = (h) => D.classification = h),
                name: "classification"
              }, [
                u("option", Ed, d(b(a)("library", "All classifications")), 1),
                (x(!0), w(oe, null, Ee(ne.value, (h) => (x(), w("option", {
                  key: h,
                  value: h
                }, d(h), 9, Td))), 128))
              ], 512), [
                [it, D.classification]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Scanner conflicts")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[15] || (A[15] = (h) => D.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                u("option", Sd, d(b(a)("library", "All metadata")), 1),
                u("option", Cd, d(b(a)("library", "Needs review")), 1)
              ], 512), [
                [it, D.scannerConflicts]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Starred")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[16] || (A[16] = (h) => D.starred = h),
                name: "starred"
              }, [
                u("option", xd, d(b(a)("library", "All publications")), 1),
                u("option", Ad, d(b(a)("library", "Starred only")), 1)
              ], 512), [
                [it, D.starred]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Sort")) + " ", 1),
              We(u("select", {
                "onUpdate:modelValue": A[17] || (A[17] = (h) => D.sort = h),
                name: "sort"
              }, [
                u("option", wd, d(b(a)("library", "Title")), 1),
                u("option", Rd, d(b(a)("library", "Recently added")), 1),
                u("option", Od, d(b(a)("library", "Publication date")), 1),
                u("option", Nd, d(b(a)("library", "Series / periodical")), 1),
                u("option", Pd, d(b(a)("library", "Recently opened")), 1),
                u("option", kd, d(b(a)("library", "Format")), 1)
              ], 512), [
                [it, D.sort]
              ])
            ]),
            u("label", null, [
              ye(d(b(a)("library", "Page size")) + " ", 1),
              u("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (x(), w(oe, null, Ee(n, (h) => u("option", {
                  key: h,
                  value: h
                }, d(h), 9, Id)), 64))
              ], 8, Ld)
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": b(a)("library", "Apply catalogue filters")
            }, d(b(a)("library", "Apply filters")), 9, Md),
            u("a", {
              href: "?",
              class: "button secondary",
              "aria-label": b(a)("library", "Clear catalogue filters")
            }, d(b(a)("library", "Clear")), 9, Ud),
            u("a", {
              href: He.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, d(b(a)("library", "Review scanner conflicts")), 9, Dd)
          ], 40, rd)
        ]),
        ut.value ? (x(), w("section", Fd, [
          u("p", Hd, d(_.value), 1),
          u("h3", $d, d(p.value), 1),
          u("p", jd, d(tt.value ? b(a)("library", "Items by this creator, sorted by publication context when available.") : Et.value ? b(a)("library", "Items from this publication year, sorted by publication date when available.") : b(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          u("div", Vd, [
            u("span", null, d(z.value.total) + " " + d(b(a)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (x(), w("span", Bd, d(E.value.earliestYear) + "–" + d(E.value.latestYear), 1)) : fe("", !0),
            E.value?.datedCount ? (x(), w("span", zd, d(E.value.datedCount) + " " + d(b(a)("library", "dated")), 1)) : fe("", !0),
            E.value?.undatedCount > 0 ? (x(), w("span", Wd, d(E.value.undatedCount) + " " + d(b(a)("library", "undated")), 1)) : fe("", !0)
          ]),
          vt.value && E.value ? (x(), w("aside", qd, [
            u("strong", null, d(b(a)("library", "Publication contents")), 1),
            u("span", null, d(E.value.itemCount) + " " + d(b(a)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (x(), w("span", Kd, d(E.value.earliestYear) + "–" + d(E.value.latestYear), 1)) : fe("", !0),
            u("span", null, d(E.value.datedCount) + " " + d(b(a)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (x(), w("span", Gd, d(E.value.undatedCount) + " " + d(b(a)("library", "without dates yet")), 1)) : fe("", !0)
          ])) : fe("", !0),
          u("p", null, [
            u("a", Yd, d(b(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : fe("", !0),
        u("div", Xd, [
          u("p", Jd, [
            ye(d(b(a)("library", "Showing")) + " " + d(z.value.from) + "–" + d(z.value.to) + " " + d(b(a)("library", "of")) + " " + d(z.value.total) + " " + d(b(a)("library", "catalogue items")), 1),
            K.value.length > 0 ? (x(), w("span", Zd, [
              A[19] || (A[19] = ye(" · ", -1)),
              u("a", Qd, d(b(a)("library", "Clear all filters")), 1)
            ])) : fe("", !0)
          ]),
          u("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": b(a)("library", "Catalogue pagination")
          }, [
            u("span", tp, [
              ye(d(b(a)("library", "Page")) + " " + d(z.value.page), 1),
              z.value.total > 0 ? (x(), w("span", rp, " · " + d(z.value.from) + "–" + d(z.value.to), 1)) : fe("", !0)
            ]),
            z.value.previousUrl ? (x(), w("a", {
              key: 0,
              href: z.value.previousUrl
            }, d(b(a)("library", "Previous")), 9, np)) : (x(), w("span", ip, d(b(a)("library", "Previous")), 1)),
            z.value.nextUrl ? (x(), w("a", {
              key: 2,
              href: z.value.nextUrl
            }, d(b(a)("library", "Next")), 9, op)) : (x(), w("span", sp, d(b(a)("library", "Next")), 1))
          ], 8, ep)
        ]),
        u("div", ap, [
          u("details", {
            class: "library-batch-actions",
            "aria-label": b(a)("library", "Batch actions for current results")
          }, [
            u("summary", null, [
              ye(d(b(a)("library", "Batch")) + " ", 1),
              u("span", cp, d(z.value.total) + " " + d(b(a)("library", "Current filter result")), 1)
            ]),
            u("form", {
              method: "post",
              action: De.value,
              class: "library-batch-tag-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, fp),
              (x(!0), w(oe, null, Ee(W.value, (h) => (x(), w("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, dp))), 128)),
              u("label", null, [
                u("span", null, d(b(a)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: b(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, pp)
              ]),
              u("button", hp, d(b(a)("library", "Apply Nextcloud tag to current results")), 1),
              u("p", mp, d(b(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, up),
            u("form", {
              method: "post",
              action: Qe.value,
              class: "library-batch-tag-remove-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, yp),
              (x(!0), w(oe, null, Ee(W.value, (h) => (x(), w("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, gp))), 128)),
              u("label", null, [
                u("span", null, d(b(a)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: b(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, _p)
              ]),
              u("button", vp, d(b(a)("library", "Remove tag from current results")), 1),
              u("p", Ep, d(b(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, bp),
            u("form", {
              method: "post",
              action: lt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, Sp),
              (x(!0), w(oe, null, Ee(W.value, (h) => (x(), w("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Cp))), 128)),
              A[20] || (A[20] = u("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              u("button", xp, d(b(a)("library", "Reset filtered metadata")), 1),
              u("p", Ap, d(b(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Tp),
            u("form", {
              method: "post",
              action: Ke.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, Rp),
              (x(!0), w(oe, null, Ee(W.value, (h) => (x(), w("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Op))), 128)),
              u("label", null, [
                u("span", null, d(b(a)("library", "Metadata field")), 1),
                u("select", Np, [
                  u("option", Pp, d(b(a)("library", "Publication type")), 1),
                  u("option", kp, d(b(a)("library", "Subtitle")), 1),
                  u("option", Lp, d(b(a)("library", "Creators")), 1),
                  u("option", Ip, d(b(a)("library", "Series / periodical")), 1),
                  u("option", Mp, d(b(a)("library", "Publication date")), 1),
                  u("option", Up, d(b(a)("library", "Language")), 1),
                  u("option", Dp, d(b(a)("library", "Publisher")), 1),
                  u("option", Fp, d(b(a)("library", "Genres")), 1),
                  u("option", Hp, d(b(a)("library", "Classifications")), 1)
                ])
              ]),
              u("label", null, [
                u("span", null, d(b(a)("library", "Preview value")), 1),
                A[21] || (A[21] = u("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              u("button", $p, d(b(a)("library", "Preview & apply metadata edit")), 1),
              u("p", jp, d(b(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, wp),
            u("form", {
              method: "post",
              action: _t.value,
              class: "library-batch-cover-refresh-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, Bp),
              (x(!0), w(oe, null, Ee(W.value, (h) => (x(), w("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, zp))), 128)),
              u("button", Wp, d(b(a)("library", "Request fresh cover previews")), 1),
              u("p", qp, d(b(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, Vp)
          ], 8, lp),
          u("details", Kp, [
            u("summary", null, d(b(a)("library", "Browse")), 1),
            u("div", Gp, [
              y.value.length > 0 ? (x(), w("section", Yp, [
                u("h3", Xp, d(b(a)("library", "Top series and periodicals")), 1),
                u("p", Jp, d(b(a)("library", "Jump into recurring publications with one click.")), 1),
                u("ul", null, [
                  (x(!0), w(oe, null, Ee(y.value, (h) => (x(), w("li", {
                    key: h.publication
                  }, [
                    u("a", {
                      href: fr(h.publication)
                    }, d(h.publication), 9, Zp),
                    u("span", Qp, d(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (x(), w("section", eh, [
                u("h3", th, d(b(a)("library", "No series or periodicals found yet")), 1),
                u("p", rh, d(b(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : fe("", !0),
              k.value.length > 0 ? (x(), w("section", nh, [
                u("h3", ih, d(b(a)("library", "Top publication years")), 1),
                u("ul", null, [
                  (x(!0), w(oe, null, Ee(k.value, (h) => (x(), w("li", { key: h }, [
                    u("a", {
                      href: wt(h)
                    }, d(h), 9, oh)
                  ]))), 128))
                ])
              ])) : fe("", !0),
              j.value.length > 0 ? (x(), w("section", sh, [
                u("h3", ah, d(b(a)("library", "Top creators")), 1),
                u("ul", null, [
                  (x(!0), w(oe, null, Ee(j.value, (h) => (x(), w("li", { key: h }, [
                    u("a", {
                      href: Tt(h)
                    }, d(h), 9, lh)
                  ]))), 128))
                ])
              ])) : fe("", !0)
            ])
          ])
        ]),
        K.value.length > 0 ? (x(), w("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": b(a)("library", "Active filters")
        }, [
          u("span", null, d(b(a)("library", "Active filters")), 1),
          (x(!0), w(oe, null, Ee(K.value, (h) => (x(), w("a", {
            key: h.key,
            href: Oe(h.key),
            class: "library-filter-chip",
            "aria-label": `${b(a)("library", "Remove filter")}: ${h.label}`
          }, [
            u("strong", null, d(h.label) + ":", 1),
            ye(" " + d(h.value) + " ", 1),
            A[22] || (A[22] = u("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, uh))), 128))
        ], 8, ch)) : fe("", !0),
        s.value.length === 0 ? (x(), w("div", {
          key: 3,
          class: Ir(["library-empty-content", { "library-first-run-guidance": C.value || L.value, "library-filter-empty-state": U.value && !C.value && !L.value }]),
          role: "status"
        }, [
          C.value ? (x(), w(oe, { key: 0 }, [
            u("h3", null, d(b(a)("library", "Start with one Library root")), 1),
            u("p", fh, d(b(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            u("p", dh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(a)("library", "Add a Library root")), 9, ph),
              u("span", hh, d(b(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : L.value ? (x(), w(oe, { key: 1 }, [
            u("h3", null, d(b(a)("library", "No enabled Library roots")), 1),
            u("p", mh, d(b(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            u("p", bh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(a)("library", "Open Library settings")), 9, yh)
            ])
          ], 64)) : U.value ? (x(), w(oe, { key: 2 }, [
            u("h3", null, d(b(a)("library", "No matches for the current filters")), 1),
            u("p", gh, d(b(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            u("p", _h, [
              u("a", {
                href: ft(),
                class: "button secondary"
              }, d(b(a)("library", "Clear search")), 9, vh),
              u("a", Eh, d(b(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (x(), w(oe, { key: 3 }, [
            u("h3", null, d(b(a)("library", "No catalogue items yet")), 1),
            u("p", Th, d(b(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            u("p", Sh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(a)("library", "Run a scan from settings")), 9, Ch)
            ])
          ], 64))
        ], 2)) : (x(), w("div", xh, [
          (x(!0), w(oe, null, Ee(s.value, (h) => (x(), w("article", {
            key: h.id,
            class: Ir(["library-cover-card", { "library-cover-card--open": X[h.id] }])
          }, [
            u("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              u("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, wh)
            ], 8, Ah),
            u("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: Cn((Ce) => Rt(h, Ce), ["prevent"])
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ue.value
              }, null, 8, Oh),
              A[23] || (A[23] = u("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              u("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Nh),
              u("button", {
                type: "submit",
                class: Ir(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? b(a)("library", "Unstar this publication") : b(a)("library", "Star this publication"),
                "aria-label": h.starred ? b(a)("library", "Unstar this publication") : b(a)("library", "Star this publication"),
                onClick: Cn((Ce) => Rt(h, Ce), ["prevent"])
              }, d(h.starred ? "★" : "☆"), 11, Ph)
            ], 40, Rh),
            u("div", kh, [
              u("div", Lh, [
                u("h3", null, [
                  h.starred ? (x(), w("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": b(a)("library", "Starred")
                  }, "★", 8, Ih)) : fe("", !0),
                  ye(d(h.title), 1)
                ]),
                u("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, d(b(a)("library", "Read")), 9, Mh)
              ]),
              u("details", {
                class: "library-cover-details",
                onToggle: (Ce) => tr(h.id, Ce)
              }, [
                u("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${b(a)("library", "Show details and actions")}: ${h.title}`
                }, d(b(a)("library", "Details")), 9, Dh),
                u("div", Fh, [
                  h.creators ? (x(), w("p", Hh, d(h.creators), 1)) : fe("", !0),
                  u("dl", $h, [
                    u("div", jh, [
                      u("dt", null, d(b(a)("library", "Type")), 1),
                      u("dd", null, d(h.publicationType), 1)
                    ]),
                    h.publication ? (x(), w("div", Vh, [
                      u("dt", null, d(b(a)("library", "Series")), 1),
                      u("dd", null, d(h.publication), 1)
                    ])) : fe("", !0),
                    h.publicationDate ? (x(), w("div", Bh, [
                      u("dt", null, d(b(a)("library", "Date")), 1),
                      u("dd", null, d(h.publicationDate), 1)
                    ])) : fe("", !0),
                    h.workflowStatus ? (x(), w("div", zh, [
                      u("dt", null, d(b(a)("library", "Status")), 1),
                      u("dd", null, d(h.workflowStatus), 1)
                    ])) : fe("", !0),
                    h.hasScannerConflict ? (x(), w("div", Wh, [
                      u("dt", null, d(b(a)("library", "Review")), 1),
                      u("dd", null, d(h.scannerConflictCount) + " fields", 1)
                    ])) : fe("", !0),
                    h.lastOpenedAt ? (x(), w("div", qh, [
                      u("dt", null, d(b(a)("library", "Last opened")), 1),
                      u("dd", null, d(h.lastOpenedAt), 1)
                    ])) : fe("", !0),
                    h.extension ? (x(), w("div", Kh, [
                      u("dt", null, d(b(a)("library", "Format")) + ":", 1),
                      u("dd", null, d(rt(h.extension)), 1)
                    ])) : fe("", !0),
                    h.shelf ? (x(), w("div", Gh, [
                      u("dt", null, d(b(a)("library", "Shelf")), 1),
                      u("dd", null, d(h.shelf), 1)
                    ])) : fe("", !0)
                  ]),
                  h.description ? (x(), w("p", Yh, d(h.description), 1)) : fe("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (x(), w("p", Xh, [
                    ye(" scanStatus: " + d(h.scanStatus || "unknown"), 1),
                    h.scanError ? (x(), w("span", Jh, " · scanError: " + d(h.scanError), 1)) : fe("", !0)
                  ])) : fe("", !0),
                  u("div", Zh, [
                    Mt(h).length === 0 ? (x(), w("span", Qh, "No Nextcloud tags")) : (x(!0), w(oe, { key: 1 }, Ee(Mt(h), (Ce) => (x(), w("span", {
                      key: Ce.id,
                      class: "library-tag"
                    }, d(Ce.name), 1))), 128))
                  ]),
                  u("p", em, [
                    u("a", {
                      href: h.filesUrl
                    }, d(b(a)("library", "Show in Files")), 9, tm),
                    A[24] || (A[24] = ye(" · ", -1)),
                    u("a", {
                      href: h.downloadUrl
                    }, d(b(a)("library", "Download source")), 9, rm),
                    A[25] || (A[25] = ye(" · ", -1)),
                    u("a", {
                      href: h.detailsUrl
                    }, d(b(a)("library", "Details")), 9, nm)
                  ])
                ])
              ], 40, Uh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (x(), w("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": b(a)("library", "Catalogue pagination")
        }, [
          u("span", om, [
            ye(d(b(a)("library", "Page")) + " " + d(z.value.page), 1),
            z.value.total > 0 ? (x(), w("span", sm, " · " + d(z.value.from) + "–" + d(z.value.to), 1)) : fe("", !0)
          ]),
          z.value.previousUrl ? (x(), w("a", {
            key: 0,
            href: z.value.previousUrl
          }, d(b(a)("library", "Previous")), 9, am)) : (x(), w("span", lm, d(b(a)("library", "Previous")), 1)),
          z.value.nextUrl ? (x(), w("a", {
            key: 2,
            href: z.value.nextUrl
          }, d(b(a)("library", "Next")), 9, cm)) : (x(), w("span", um, d(b(a)("library", "Next")), 1))
        ], 8, im)) : fe("", !0)
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
function xa(e) {
  return G(e).toUpperCase();
}
function dm(e, t, r, n = G) {
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
  const f = document.createElement("select");
  f.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, f.appendChild(v), dm(f, o, n, s), l.appendChild(f), e.appendChild(l);
}
function Nr(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function pm(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function hm(e) {
  return G(e.discoveryPage) === "publication";
}
function mm(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "year";
}
function bm(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function xi(e) {
  return G(e.discoveryPage) === "creator";
}
function ym(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function gm() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Kr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function _m(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function vm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), ds(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Or(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ds(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), Or(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], xa), Or(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), Or(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), Or(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Or(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", a("library", "Clear catalogue filters")), o.textContent = a("library", "Clear"), n.append(i, o), n;
}
function Em() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), o;
}
function Tm(e, t) {
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
  const f = [
    [a("library", "Sort"), "sort", r.sort || "title", [["title", a("library", "Title")], ["recent", a("library", "Recently added")], ["publicationDate", a("library", "Publication date")], ["publication", a("library", "Series")], ["lastOpened", a("library", "Recently opened")], ["format", a("library", "Format")]]],
    [a("library", "Starred"), "starred", r.starred || "", [["", a("library", "All")], ["1", a("library", "Starred")]]],
    [a("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, k, j, re] of f) {
    const q = document.createElement("label");
    q.textContent = E;
    const se = document.createElement("select");
    se.name = k;
    for (const [ne, z] of re) {
      const D = document.createElement("option");
      D.value = G(ne), D.textContent = G(z), G(ne) === G(j) && (D.selected = !0), se.appendChild(D);
    }
    se.addEventListener("change", () => n.requestSubmit()), q.appendChild(se), n.appendChild(q);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", a("library", "Apply catalogue filters")), v.textContent = a("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", a("library", "Clear catalogue filters")), y.textContent = a("library", "Clear all"), n.append(v, y), n;
}
function Sm(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), f = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const k = document.createElement("section");
  k.className = "library-panel", k.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), q = document.createElement("h2");
  q.id = "library-catalogue-heading", q.textContent = a("library", "Publication catalogue");
  const se = document.createElement("p");
  se.className = "library-muted", se.textContent = a("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(q, se);
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
  const z = Em();
  z && k.appendChild(z), k.appendChild(Tm(e, n));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), D.append(V, vm(e, n)), k.appendChild(D), hm(e) || Ci(e) || xi(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = xi(e) ? a("library", "Creator") : Ci(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${xi(e) ? a("library", "items by this creator. Sorted by publication context when available.") : Ci(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = a("library", "Back to full catalogue"), N.append(P, $, Q, ie), k.appendChild(N);
  }
  const ue = document.createElement("p");
  ue.className = "library-muted library-filter-result-summary", ue.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Le = document.createElement("a");
  Le.href = "?", Le.textContent = ` ${a("library", "Clear all filters")}`, ue.appendChild(Le), k.appendChild(ue);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const je = document.createElement("summary");
  je.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const ve = document.createElement("form");
  ve.method = "post", ve.action = s, ve.className = "library-batch-tag-form";
  const De = Nr(e);
  De && ve.appendChild(De);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), ve.appendChild($);
  }
  const Qe = document.createElement("label");
  Qe.textContent = a("library", "Apply Nextcloud tag to current results");
  const lt = document.createElement("input");
  lt.type = "text", lt.name = "nextcloudTagName", lt.placeholder = "batch-review", Qe.appendChild(lt);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = a("library", "Apply Nextcloud tag to current results");
  const _t = document.createElement("p");
  _t.className = "library-muted", _t.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), ve.append(Qe, Ke, _t);
  const He = document.createElement("form");
  He.method = "post", He.action = l, He.className = "library-batch-tag-remove-form";
  const Ie = Nr(e);
  Ie && He.appendChild(Ie);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), He.appendChild($);
  }
  const be = document.createElement("label");
  be.textContent = a("library", "Nextcloud tag");
  const ce = document.createElement("input");
  ce.type = "text", ce.name = "nextcloudTagName", ce.setAttribute("list", "library-nextcloud-tag-suggestions"), ce.placeholder = a("library", "e.g. Review"), ce.autocomplete = "off", be.appendChild(ce);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = a("library", "Remove tag from current results");
  const he = document.createElement("p");
  he.className = "library-muted", he.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), He.append(be, Ve, he);
  const Se = document.createElement("form");
  Se.method = "post", Se.action = f, Se.className = "library-batch-metadata-reset-form";
  const Be = Nr(e);
  Be && Se.appendChild(Be);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (G(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(P), Se.appendChild($);
  }
  const et = document.createElement("input");
  et.type = "hidden", et.name = "scannerConflicts", et.value = "1";
  const de = document.createElement("button");
  de.type = "submit", de.className = "button secondary", de.textContent = a("library", "Reset filtered metadata");
  const At = document.createElement("p");
  At.className = "library-muted", At.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Se.append(et, de, At);
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
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = a("library", "Preview first, then apply from the review page."), ze.append(vt, tt, p, m);
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
  C.className = "library-muted", C.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, C), Ne.append(je, ve, He, Se, ze, _), k.appendChild(Ne);
  const L = document.createElement("nav");
  L.className = "library-pagination", L.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, L.appendChild(U), k.appendChild(L);
  const M = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], S = document.createElement("details");
  S.className = M.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = a("library", "Show top series and periodicals"), S.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = M.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = M.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), S.append(H, W), M.length > 0) {
    const N = document.createElement("ul");
    for (const P of M) {
      const $ = document.createElement("li"), Q = document.createElement("a");
      Q.href = pm(P.publication, P), Q.textContent = G(P.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${P.itemCount} items`, $.append(Q, ie), N.appendChild($);
    }
    S.appendChild(N);
  }
  k.appendChild(S);
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
    for (const me of X) {
      const le = document.createElement("li"), Pe = document.createElement("a");
      Pe.href = mm(me, e), Pe.textContent = G(me), le.appendChild(Pe), ie.appendChild(le);
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
    for (const me of Z) {
      const le = document.createElement("li"), Pe = document.createElement("a");
      Pe.href = bm(me, e), Pe.textContent = G(me), le.appendChild(Pe), ie.appendChild(le);
    }
    N.append(P, $, Q, ie), k.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), Q = ym(e);
    N.className = "library-empty-content", (P === 0 || $ === 0) && N.classList.add("library-first-run-guidance"), Q && P > 0 && $ > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const ie = document.createElement("h3"), me = document.createElement("p");
    me.className = "library-muted";
    const le = document.createElement("p");
    le.className = "library-empty-actions", P === 0 ? (ie.textContent = a("library", "Start with one Library root"), me.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Kr(le, i, "button primary", a("library", "Add a Library root")), _m(le, a("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = a("library", "No enabled Library roots"), me.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Kr(le, i, "button primary", a("library", "Open Library settings"))) : Q ? (ie.textContent = a("library", "No matches for the current filters"), me.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Kr(le, gm(), "button secondary", a("library", "Clear search")), Kr(le, "?", "button primary", a("library", "Clear all filters"))) : (ie.textContent = a("library", "No catalogue items yet"), me.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Kr(le, i, "button primary", a("library", "Run a scan from settings"))), N.append(ie, me, le), k.appendChild(N);
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
      const me = Nr(e), le = document.createElement("form");
      le.method = "post", le.action = G(P.starUrl || ""), le.className = "library-cover-star-form", me && le.appendChild(me);
      const Pe = document.createElement("input");
      Pe.type = "hidden", Pe.name = "returnTo", Pe.value = "catalogue";
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "starred", Re.value = P.starred ? "0" : "1";
      const Oe = document.createElement("button");
      Oe.type = "submit", Oe.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Oe.setAttribute("aria-pressed", P.starred ? "true" : "false"), Oe.setAttribute("aria-label", P.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), Oe.title = P.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), Oe.textContent = P.starred ? "★" : "☆", le.append(Pe, Re, Oe);
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
        ["Format", P.extension ? xa(P.extension) : ""],
        ["Shelf", P.shelf ? G(P.shelf) : ""]
      ].filter(([, St]) => St !== "");
      for (const [St, dr] of fr) {
        const Rt = document.createElement("div");
        Rt.className = "library-cover-detail-chip";
        const I = document.createElement("dt");
        I.textContent = St;
        const A = document.createElement("dd");
        A.textContent = dr, Rt.append(I, A), Mt.appendChild(Rt);
      }
      ft.appendChild(Mt);
      const wt = document.createElement("p"), Tt = document.createElement("a");
      Tt.href = G(P.openUrl || "#"), Tt.textContent = a("library", "Read");
      const tr = document.createElement("a");
      tr.href = G(P.filesUrl || "#"), tr.textContent = a("library", "Show in Files");
      const rr = document.createElement("a");
      rr.href = G(P.downloadUrl || "#"), rr.textContent = a("library", "Download source");
      const nr = document.createElement("a");
      nr.href = G(P.detailsUrl || "#"), nr.textContent = a("library", "Details"), wt.append(Tt, document.createTextNode(" · "), tr, document.createTextNode(" · "), rr, document.createTextNode(" · "), nr), ft.appendChild(wt), $.append(Q, le, ft), N.appendChild($);
    }
    k.appendChild(N);
  }
  return E.appendChild(k), E;
}
if (On)
  try {
    cu(fm, { state: fs }).mount(On);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), On.replaceChildren(Sm(fs));
  }
//# sourceMappingURL=library-main.mjs.map
