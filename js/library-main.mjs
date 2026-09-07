// @__NO_SIDE_EFFECTS__
function Rs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = {}, _n = [], Rt = () => {
}, co = () => !1, Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rr = (e) => e.startsWith("onUpdate:"), Be = Object.assign, Ns = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, ce = (e, t) => Hl.call(e, t), K = Array.isArray, qt = (e) => Jn(e) === "[object Map]", an = (e) => Jn(e) === "[object Set]", fi = (e) => Jn(e) === "[object Date]", Z = (e) => typeof e == "function", we = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", uo = (e) => (de(e) || Z(e)) && Z(e.then) && Z(e.catch), fo = Object.prototype.toString, Jn = (e) => fo.call(e), jl = (e) => Jn(e).slice(8, -1), po = (e) => Jn(e) === "[object Object]", Ps = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = /* @__PURE__ */ Rs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $l = /-\w/g, yt = Nr(
  (e) => e.replace($l, (t) => t.slice(1).toUpperCase())
), Vl = /\B([A-Z])/g, cn = Nr(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), ho = Nr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xr = Nr(
  (e) => e ? `on${ho(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), mr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Pr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let di;
const Ir = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Is(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = we(r) ? ql(r) : Is(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (we(e) || de(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Bl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function ql(e) {
  const t = {};
  return e.replace(Wl, "").split(zl).forEach((n) => {
    if (n) {
      const r = n.split(Bl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function vn(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = vn(e[n]);
      r && (t += r + " ");
    }
  else if (de(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gl = /* @__PURE__ */ Rs(Kl);
function bo(e) {
  return !!e || e === "";
}
function Yl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Kt(e[r], t[r]);
  return n;
}
function pi(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Kt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Kt(e, t) {
  if (e === t) return !0;
  let n = fi(e), r = fi(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Nt(e), r = Nt(t), n || r)
    return e === t;
  if (n = K(e), r = K(t), n || r)
    return n && r ? Yl(e, t) : !1;
  if (n = de(e), r = de(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = qt(e), r = qt(t), n || r || (n = an(e), r = an(t), n || r))
      return n && r ? pi(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (l && !u || !l && u || !Kt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const yo = (e) => !!(e && e.__v_isRef === !0), T = (e) => we(e) ? e : e == null ? "" : K(e) || de(e) && (e.toString === fo || !Z(e.toString)) ? yo(e) ? T(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => yo(t) ? go(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Jr(r, i) + " =>"] = s, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jr(n))
} : Nt(t) ? Jr(t) : de(t) && !K(t) && !po(t) ? String(t) : t, Jr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let He;
class Jl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && He && (He.active ? (this.parent = He, this.index = (He.scopes || (He.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = He;
      try {
        return He = this, t();
      } finally {
        He = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = He, He = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (He === this)
        He = this.prevScope;
      else {
        let t = He;
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const s = this.scopes.slice();
        for (n = 0, r = s.length; n < r; n++)
          s[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zl() {
  return He;
}
let be;
const Zr = /* @__PURE__ */ new WeakSet();
class _o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, He && (He.active ? He.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zr.has(this) && (Zr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || To(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hi(this), So(this);
    const t = be, n = gt;
    be = this, gt = !0;
    try {
      return this.fn();
    } finally {
      Eo(this), be = t, gt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ms(t);
      this.deps = this.depsTail = void 0, hi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let vo = 0, jn, $n;
function To(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $n, $n = e;
    return;
  }
  e.next = jn, jn = e;
}
function Ls() {
  vo++;
}
function Ds() {
  if (--vo > 0)
    return;
  if ($n) {
    let t = $n;
    for ($n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Eo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ms(r), Ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function ys(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ao(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn) || (e.globalVersion = Wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, r = gt;
  be = e, gt = !0;
  try {
    So(e);
    const s = e.fn(e._value);
    (t.version === 0 || Ot(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    be = n, gt = r, Eo(e), e.flags &= -3;
  }
}
function Ms(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ms(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let gt = !0;
const xo = [];
function Ut() {
  xo.push(gt), gt = !1;
}
function Ht() {
  const e = xo.pop();
  gt = e === void 0 ? !0 : e;
}
function hi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = be;
    be = void 0;
    try {
      t();
    } finally {
      be = n;
    }
  }
}
let Wn = 0;
class ea {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!be || !gt || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new ea(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, Co(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    Ls();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ds();
    }
  }
}
function Co(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Co(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const gs = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), _s = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (gt && be) {
    let r = gs.get(e);
    r || gs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Fs()), s.map = r, s.key = n), s.track();
  }
}
function Mt(e, t, n, r, s, i) {
  const o = gs.get(e);
  if (!o) {
    Wn++;
    return;
  }
  const l = (u) => {
    u && u.trigger();
  };
  if (Ls(), t === "clear")
    o.forEach(l);
  else {
    const u = K(e), g = u && Ps(n);
    if (u && n === "length") {
      const h = Number(r);
      o.forEach((A, P) => {
        (P === "length" || P === qn || !Nt(P) && P >= h) && l(A);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), g && l(o.get(qn)), t) {
        case "add":
          u ? g && l(o.get("length")) : (l(o.get(sn)), qt(e) && l(o.get(_s)));
          break;
        case "delete":
          u || (l(o.get(sn)), qt(e) && l(o.get(_s)));
          break;
        case "set":
          qt(e) && l(o.get(sn));
          break;
      }
  }
  Ds();
}
function mn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e ? t : (Ve(t, "iterate", qn), /* @__PURE__ */ ht(e) ? t : t.map(_t));
}
function Lr(e) {
  return Ve(e = /* @__PURE__ */ ae(e), "iterate", qn), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ jt(e) ? An(/* @__PURE__ */ on(e) ? _t(t) : t) : _t(t);
}
const ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qr(this, Symbol.iterator, (e) => Ct(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => K(t) ? mn(t) : t)
    );
  },
  entries() {
    return Qr(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Ct(this, r)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return es(this, "includes", e);
  },
  indexOf(...e) {
    return es(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return es(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...e) {
    return Nn(this, "push", e);
  },
  reduce(e, ...t) {
    return mi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mi(this, "reduceRight", e, t);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
  },
  toReversed() {
    return mn(this).toReversed();
  },
  toSorted(e) {
    return mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nn(this, "unshift", e);
  },
  values() {
    return Qr(this, "values", (e) => Ct(this, e));
  }
};
function Qr(e, t, n) {
  const r = Lr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ ht(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const na = Array.prototype;
function It(e, t, n, r, s, i) {
  const o = Lr(e), l = o !== e && !/* @__PURE__ */ ht(e), u = o[t];
  if (u !== na[t]) {
    const A = u.apply(e, i);
    return l ? _t(A) : A;
  }
  let g = n;
  o !== e && (l ? g = function(A, P) {
    return n.call(this, Ct(e, A), P, e);
  } : n.length > 2 && (g = function(A, P) {
    return n.call(this, A, P, e);
  }));
  const h = u.call(o, g, r);
  return l && s ? s(h) : h;
}
function mi(e, t, n, r) {
  const s = Lr(e), i = s !== e && !/* @__PURE__ */ ht(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(g, h, A) {
    return l && (l = !1, g = Ct(e, g)), n.call(this, g, Ct(e, h), A, e);
  }) : n.length > 3 && (o = function(g, h, A) {
    return n.call(this, g, h, A, e);
  }));
  const u = s[t](o, ...r);
  return l ? Ct(e, u) : u;
}
function es(e, t, n) {
  const r = /* @__PURE__ */ ae(e);
  Ve(r, "iterate", qn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Hs(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), r[t](...n)) : s;
}
function Nn(e, t, n = []) {
  Ut(), Ls();
  const r = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return Ds(), Ht(), r;
}
const ra = /* @__PURE__ */ Rs("__proto__,__v_isRef,__isVue"), wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function sa(e) {
  Nt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class Oo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (s ? i ? ha : Io : i ? Po : No).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = K(t);
    if (!s) {
      let u;
      if (o && (u = ta[n]))
        return u;
      if (n === "hasOwnProperty")
        return sa;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ze(t) ? t : r
    );
    if ((Nt(n) ? wo.has(n) : ra(n)) || (s || Ve(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ze(l)) {
      const u = o && Ps(n) ? l : l.value;
      return s && de(u) ? /* @__PURE__ */ Ts(u) : u;
    }
    return de(l) ? s ? /* @__PURE__ */ Ts(l) : /* @__PURE__ */ nn(l) : l;
  }
}
class Ro extends Oo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = K(t) && Ps(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ jt(i);
      if (!/* @__PURE__ */ ht(r) && !/* @__PURE__ */ jt(r) && (i = /* @__PURE__ */ ae(i), r = /* @__PURE__ */ ae(r)), !o && /* @__PURE__ */ ze(i) && !/* @__PURE__ */ ze(r))
        return g || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ce(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ ze(t) ? t : s
    );
    return t === /* @__PURE__ */ ae(s) && u && (l ? Ot(r, i) && Mt(t, "set", n, r) : Mt(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = ce(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Mt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Nt(n) || !wo.has(n)) && Ve(t, "has", n), r;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      K(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class ia extends Oo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const oa = /* @__PURE__ */ new Ro(), la = /* @__PURE__ */ new ia(), aa = /* @__PURE__ */ new Ro(!0);
const vs = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function ca(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ae(s), o = qt(i), l = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, g = s[e](...r), h = n ? vs : t ? An : _t;
    return !t && Ve(
      i,
      "iterate",
      u ? _s : sn
    ), Be(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: A, done: P } = g.next();
          return P ? { value: A, done: P } : {
            value: l ? [h(A[0]), h(A[1])] : h(A),
            done: P
          };
        }
      }
    );
  };
}
function cr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ua(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(s);
      e || (Ot(s, l) && Ve(o, "get", s), Ve(o, "get", l));
      const { has: u } = ar(o), g = t ? vs : e ? An : _t;
      if (u.call(o, s))
        return g(i.get(s));
      if (u.call(o, l))
        return g(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ ae(s), "iterate", sn), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(s);
      return e || (Ot(s, l) && Ve(o, "has", s), Ve(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, u = /* @__PURE__ */ ae(l), g = t ? vs : e ? An : _t;
      return !e && Ve(u, "iterate", sn), l.forEach((h, A) => s.call(i, g(h), g(A), o));
    }
  };
  return Be(
    n,
    e ? {
      add: cr("add"),
      set: cr("set"),
      delete: cr("delete"),
      clear: cr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ae(this), o = ar(i), l = /* @__PURE__ */ ae(s), u = !t && !/* @__PURE__ */ ht(s) && !/* @__PURE__ */ jt(s) ? l : s;
        return o.has.call(i, u) || Ot(s, u) && o.has.call(i, s) || Ot(l, u) && o.has.call(i, l) || (i.add(u), Mt(i, "add", u, u)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ht(i) && !/* @__PURE__ */ jt(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: u } = ar(o);
        let g = l.call(o, s);
        g || (s = /* @__PURE__ */ ae(s), g = l.call(o, s));
        const h = u.call(o, s);
        return o.set(s, i), g ? Ot(i, h) && Mt(o, "set", s, i) : Mt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = ar(i);
        let u = o.call(i, s);
        u || (s = /* @__PURE__ */ ae(s), u = o.call(i, s)), l && l.call(i, s);
        const g = i.delete(s);
        return u && Mt(i, "delete", s, void 0), g;
      },
      clear() {
        const s = /* @__PURE__ */ ae(this), i = s.size !== 0, o = s.clear();
        return i && Mt(
          s,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = ca(s, e, t);
  }), n;
}
function ks(e, t) {
  const n = ua(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ce(n, s) && s in r ? n : r,
    s,
    i
  );
}
const fa = {
  get: /* @__PURE__ */ ks(!1, !1)
}, da = {
  get: /* @__PURE__ */ ks(!1, !0)
}, pa = {
  get: /* @__PURE__ */ ks(!0, !1)
};
const No = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap();
function ma(e) {
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
function nn(e) {
  return /* @__PURE__ */ jt(e) ? e : Us(
    e,
    !1,
    oa,
    fa,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return Us(
    e,
    !1,
    aa,
    da,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  return Us(
    e,
    !0,
    la,
    pa,
    Io
  );
}
function Us(e, t, n, r, s) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = ma(jl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ jt(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function ya(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && mo(e, "__v_skip", !0), e;
}
const _t = (e) => de(e) ? /* @__PURE__ */ nn(e) : e, An = (e) => de(e) ? /* @__PURE__ */ Ts(e) : e;
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return _a(e, !1);
}
function _a(e, t) {
  return /* @__PURE__ */ ze(e) ? e : new va(e, t);
}
class va {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : _t(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ht(t) || /* @__PURE__ */ jt(t);
    t = r ? t : /* @__PURE__ */ ae(t), Ot(t, n) && (this._rawValue = t, this._value = r ? t : _t(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ ze(e) ? e.value : e;
}
const Ta = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ ze(s) && !/* @__PURE__ */ ze(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lo(e) {
  return /* @__PURE__ */ on(e) ? e : new Proxy(e, Ta);
}
class Sa {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return To(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ao(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t, n = !1) {
  let r, s;
  return Z(e) ? r = e : (r = e.get, s = e.set), new Sa(r, s, n);
}
const ur = {}, _r = /* @__PURE__ */ new WeakMap();
let Qt;
function Aa(e, t = !1, n = Qt) {
  if (n) {
    let r = _r.get(n);
    r || _r.set(n, r = []), r.push(e);
  }
}
function xa(e, t, n = pe) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: u } = n, g = (M) => s ? M : /* @__PURE__ */ ht(M) || s === !1 || s === 0 ? Ft(M, 1) : Ft(M);
  let h, A, P, D, G = !1, V = !1;
  if (/* @__PURE__ */ ze(e) ? (A = () => e.value, G = /* @__PURE__ */ ht(e)) : /* @__PURE__ */ on(e) ? (A = () => g(e), G = !0) : K(e) ? (V = !0, G = e.some((M) => /* @__PURE__ */ on(M) || /* @__PURE__ */ ht(M)), A = () => e.map((M) => {
    if (/* @__PURE__ */ ze(M))
      return M.value;
    if (/* @__PURE__ */ on(M))
      return g(M);
    if (Z(M))
      return u ? u(M, 2) : M();
  })) : Z(e) ? t ? A = u ? () => u(e, 2) : e : A = () => {
    if (P) {
      Ut();
      try {
        P();
      } finally {
        Ht();
      }
    }
    const M = Qt;
    Qt = h;
    try {
      return u ? u(e, 3, [D]) : e(D);
    } finally {
      Qt = M;
    }
  } : A = Rt, t && s) {
    const M = A, ne = s === !0 ? 1 / 0 : s;
    A = () => Ft(M(), ne);
  }
  const X = Zl(), B = () => {
    h.stop(), X && X.active && Ns(X.effects, h);
  };
  if (i && t) {
    const M = t;
    t = (...ne) => {
      const Ee = M(...ne);
      return B(), Ee;
    };
  }
  let N = V ? new Array(e.length).fill(ur) : ur;
  const q = (M) => {
    if (!(!(h.flags & 1) || !h.dirty && !M))
      if (t) {
        const ne = h.run();
        if (M || s || G || (V ? ne.some((Ee, ge) => Ot(Ee, N[ge])) : Ot(ne, N))) {
          P && P();
          const Ee = Qt;
          Qt = h;
          try {
            const ge = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              N === ur ? void 0 : V && N[0] === ur ? [] : N,
              D
            ];
            N = ne, u ? u(t, 3, ge) : (
              // @ts-expect-error
              t(...ge)
            );
          } finally {
            Qt = Ee;
          }
        }
      } else
        h.run();
  };
  return l && l(q), h = new _o(A), h.scheduler = o ? () => o(q, !1) : q, D = (M) => Aa(M, !1, h), P = h.onStop = () => {
    const M = _r.get(h);
    if (M) {
      if (u)
        u(M, 4);
      else
        for (const ne of M) ne();
      _r.delete(h);
    }
  }, t ? r ? q(!0) : N = h.run() : o ? o(q.bind(null, !0), !0) : h.run(), B.pause = h.pause.bind(h), B.resume = h.resume.bind(h), B.stop = B, B;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ze(e))
    Ft(e.value, t, n);
  else if (K(e))
    for (let r = 0; r < e.length; r++)
      Ft(e[r], t, n);
  else if (an(e) || qt(e))
    e.forEach((r) => {
      Ft(r, t, n);
    });
  else if (po(e)) {
    for (const r in e)
      Ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n);
  }
  return e;
}
function Zn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Dr(s, t, n);
  }
}
function vt(e, t, n, r) {
  if (Z(e)) {
    const s = Zn(e, t, n, r);
    return s && uo(s) && s.catch((i) => {
      Dr(i, t, n);
    }), s;
  }
  if (K(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(vt(e[i], t, n, r));
    return s;
  }
}
function Dr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const u = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let A = 0; A < h.length; A++)
          if (h[A](e, u, g) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ut(), Zn(i, null, 10, [
        e,
        u,
        g
      ]), Ht();
      return;
    }
  }
  Ca(e, n, s, r, o);
}
function Ca(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Qe = [];
let xt = -1;
const Tn = [];
let Wt = null, yn = 0;
const Do = /* @__PURE__ */ Promise.resolve();
let vr = null;
function Mo(e) {
  const t = vr || Do;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wa(e) {
  let t = xt + 1, n = Qe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Qe[r], i = Kn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function js(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = Qe[Qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? Qe.push(e) : Qe.splice(wa(t), 0, e), e.flags |= 1, Fo();
  }
}
function Fo() {
  vr || (vr = Do.then(Uo));
}
function Oa(e) {
  if (!K(e))
    Wt && e.id === -1 ? Wt.splice(yn + 1, 0, e) : e.flags & 1 || (Tn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Tn.push(e[t]);
  Fo();
}
function bi(e, t, n = xt + 1) {
  for (; n < Qe.length; n++) {
    const r = Qe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Qe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ko(e) {
  if (Tn.length) {
    const t = [...new Set(Tn)].sort(
      (n, r) => Kn(n) - Kn(r)
    );
    if (Tn.length = 0, Wt) {
      for (let n = 0; n < t.length; n++)
        Wt.push(t[n]);
      return;
    }
    for (Wt = t, yn = 0; yn < Wt.length; yn++) {
      const n = Wt[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Wt = null, yn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Uo(e) {
  try {
    for (xt = 0; xt < Qe.length; xt++) {
      const t = Qe[xt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Zn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xt < Qe.length; xt++) {
      const t = Qe[xt];
      t && (t.flags &= -2);
    }
    xt = -1, Qe.length = 0, ko(), vr = null, (Qe.length || Tn.length) && Uo();
  }
}
let pt = null, Ho = null;
function Tr(e) {
  const t = pt;
  return pt = e, Ho = e && e.type.__scopeId || null, t;
}
function Ra(e, t = pt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && wi(-1);
    const i = Tr(t), o = ln.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let u = ln.length; u > o; u--) fl();
      Tr(i), r._d && wi(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fe(e, t) {
  if (pt === null)
    return e;
  const n = Hr(pt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, u = pe] = t[s];
    i && (Z(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ft(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function Xt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let u = l.dir[r];
    u && (Ut(), vt(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ht());
  }
}
function Na(e, t) {
  if (et) {
    let n = et.provides;
    const r = et.parent && et.parent.provides;
    r === n && (n = et.provides = Object.create(r)), n[e] = t;
  }
}
function br(e, t, n = !1) {
  const r = Cc();
  if (r || Sn) {
    let s = Sn ? Sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(r && r.proxy) : t;
  }
}
const Pa = /* @__PURE__ */ Symbol.for("v-scx"), Ia = () => br(Pa);
function ts(e, t, n) {
  return jo(e, t, n);
}
function jo(e, t, n = pe) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Be({}, n), u = t && r || !t && i !== "post";
  let g;
  if (Xn) {
    if (i === "sync") {
      const D = Ia();
      g = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!u) {
      const D = () => {
      };
      return D.stop = Rt, D.resume = Rt, D.pause = Rt, D;
    }
  }
  const h = et;
  l.call = (D, G, V) => vt(D, h, G, V);
  let A = !1;
  i === "post" ? l.scheduler = (D) => {
    it(D, h && h.suspense);
  } : i !== "sync" && (A = !0, l.scheduler = (D, G) => {
    G ? D() : js(D);
  }), l.augmentJob = (D) => {
    t && (D.flags |= 4), A && (D.flags |= 2, h && (D.id = h.uid, D.i = h));
  };
  const P = xa(e, t, l);
  return Xn && (g ? g.push(P) : u && P()), P;
}
function La(e, t, n) {
  const r = this.proxy, s = we(e) ? e.includes(".") ? $o(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Z(t) ? i = t : (i = t.handler, n = t);
  const o = Qn(this), l = jo(s, i.bind(r), n);
  return o(), l;
}
function $o(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Da = /* @__PURE__ */ Symbol("_vte"), Mr = (e) => e.__isTeleport, ns = /* @__PURE__ */ Symbol("_leaveCb");
function Ma(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== $t) {
        t = n;
        break;
      }
  }
  return t;
}
function Vo(e) {
  if (!Vs(e))
    return Mr(e.type) && e.children ? Ma(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Z(n.default))
      return n.default();
  }
}
function $s(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    $s(
      Mr(n.type) && Vo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function yi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Sr = /* @__PURE__ */ new WeakMap();
function Vn(e, t, n, r, s = !1) {
  if (K(e)) {
    e.forEach(
      (V, X) => Vn(
        V,
        t && (K(t) ? t[X] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (zn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Vn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Hr(r.component) : r.el, o = s ? null : i, { i: l, r: u } = e, g = t && t.r, h = l.refs === pe ? l.refs = {} : l.refs, A = l.setupState, P = /* @__PURE__ */ ae(A), D = A === pe ? co : (V) => yi(h, V) ? !1 : ce(P, V), G = (V, X) => !(X && yi(h, X));
  if (g != null && g !== u) {
    if (gi(t), we(g))
      h[g] = null, D(g) && (A[g] = null);
    else if (/* @__PURE__ */ ze(g)) {
      const V = t;
      G(g, V.k) && (g.value = null), V.k && (h[V.k] = null);
    }
  }
  if (Z(u))
    Zn(u, l, 12, [o, h]);
  else {
    const V = we(u), X = /* @__PURE__ */ ze(u);
    if (V || X) {
      const B = () => {
        if (e.f) {
          const N = V ? D(u) ? A[u] : h[u] : G() || !e.k ? u.value : h[e.k];
          if (s)
            K(N) && Ns(N, i);
          else if (K(N))
            N.includes(i) || N.push(i);
          else if (V)
            h[u] = [i], D(u) && (A[u] = h[u]);
          else {
            const q = [i];
            G(u, e.k) && (u.value = q), e.k && (h[e.k] = q);
          }
        } else V ? (h[u] = o, D(u) && (A[u] = o)) : X && (G(u, e.k) && (u.value = o), e.k && (h[e.k] = o));
      };
      if (o) {
        const N = () => {
          B(), Sr.delete(e);
        };
        N.id = -1, Sr.set(e, N), it(N, n);
      } else
        gi(e), B();
    }
  }
}
function gi(e) {
  const t = Sr.get(e);
  t && (t.flags |= 8, Sr.delete(e));
}
Ir().requestIdleCallback;
Ir().cancelIdleCallback;
const zn = (e) => !!e.type.__asyncLoader, Vs = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  Bo(e, "a", t);
}
function ka(e, t) {
  Bo(e, "da", t);
}
function Bo(e, t, n = et) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Vs(s.parent.vnode) && Ua(r, t, n, s), s = s.parent;
  }
}
function Ua(e, t, n, r) {
  const s = Fr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ko(() => {
    Ns(r[t], s);
  }, n);
}
function Fr(e, t, n = et, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ut();
      const l = Qn(n), u = vt(t, n, e, o);
      return l(), Ht(), u;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Vt = (e) => (t, n = et) => {
  (!Xn || e === "sp") && Fr(e, (...r) => t(...r), n);
}, Ha = Vt("bm"), Wo = Vt("m"), ja = Vt(
  "bu"
), $a = Vt("u"), qo = Vt(
  "bum"
), Ko = Vt("um"), Va = Vt(
  "sp"
), za = Vt("rtg"), Ba = Vt("rtc");
function Wa(e, t = et) {
  Fr("ec", e, t);
}
const qa = /* @__PURE__ */ Symbol.for("v-ndc");
function ke(e, t, n, r) {
  let s;
  const i = n, o = K(e);
  if (o || we(e)) {
    const l = o && /* @__PURE__ */ on(e);
    let u = !1, g = !1;
    l && (u = !/* @__PURE__ */ ht(e), g = /* @__PURE__ */ jt(e), e = Lr(e)), s = new Array(e.length);
    for (let h = 0, A = e.length; h < A; h++)
      s[h] = t(
        u ? g ? An(_t(e[h])) : _t(e[h]) : e[h],
        h,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (de(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, u) => t(l, u, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let u = 0, g = l.length; u < g; u++) {
        const h = l[u];
        s[u] = t(e[h], h, u, i);
      }
    }
  else
    s = [];
  return s;
}
const Ss = (e) => e ? ml(e) ? Hr(e) : Ss(e.parent) : null, Bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ss(e.parent),
    $root: (e) => Ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      js(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)),
    $watch: (e) => La.bind(e)
  })
), rs = (e, t) => e !== pe && !e.__isScriptSetup && ce(e, t), Ka = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: u } = e;
    if (t[0] !== "$") {
      const P = o[t];
      if (P !== void 0)
        switch (P) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (rs(r, t))
          return o[t] = 1, r[t];
        if (s !== pe && ce(s, t))
          return o[t] = 2, s[t];
        if (ce(i, t))
          return o[t] = 3, i[t];
        if (n !== pe && ce(n, t))
          return o[t] = 4, n[t];
        Es && (o[t] = 0);
      }
    }
    const g = Bn[t];
    let h, A;
    if (g)
      return t === "$attrs" && Ve(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== pe && ce(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      A = u.config.globalProperties, ce(A, t)
    )
      return A[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return rs(s, t) ? (s[t] = n, !0) : r !== pe && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let u;
    return !!(n[l] || e !== pe && l[0] !== "$" && ce(e, l) || rs(t, l) || ce(i, l) || ce(r, l) || ce(Bn, l) || ce(s.config.globalProperties, l) || (u = o.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function _i(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Es = !0;
function Ga(e) {
  const t = Yo(e), n = e.proxy, r = e.ctx;
  Es = !1, t.beforeCreate && vi(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: u,
    inject: g,
    // lifecycle
    created: h,
    beforeMount: A,
    mounted: P,
    beforeUpdate: D,
    updated: G,
    activated: V,
    deactivated: X,
    beforeDestroy: B,
    beforeUnmount: N,
    destroyed: q,
    unmounted: M,
    render: ne,
    renderTracked: Ee,
    renderTriggered: ge,
    errorCaptured: Pe,
    serverPrefetch: ye,
    // public API
    expose: Ae,
    inheritAttrs: je,
    // assets
    components: We,
    directives: Re,
    filters: tt
  } = t;
  if (g && Ya(g, r, null), o)
    for (const k in o) {
      const U = o[k];
      Z(U) && (r[k] = U.bind(n));
    }
  if (s) {
    const k = s.call(n, n);
    de(k) && (e.data = /* @__PURE__ */ nn(k));
  }
  if (Es = !0, i)
    for (const k in i) {
      const U = i[k], ue = Z(U) ? U.bind(n, n) : Z(U.get) ? U.get.bind(n, n) : Rt, Te = !Z(U) && Z(U.set) ? U.set.bind(n) : Rt, ie = fe({
        get: ue,
        set: Te
      });
      Object.defineProperty(r, k, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (he) => ie.value = he
      });
    }
  if (l)
    for (const k in l)
      Go(l[k], r, n, k);
  if (u) {
    const k = Z(u) ? u.call(n) : u;
    Reflect.ownKeys(k).forEach((U) => {
      Na(U, k[U]);
    });
  }
  h && vi(h, e, "c");
  function ve(k, U) {
    K(U) ? U.forEach((ue) => k(ue.bind(n))) : U && k(U.bind(n));
  }
  if (ve(Ha, A), ve(Wo, P), ve(ja, D), ve($a, G), ve(Fa, V), ve(ka, X), ve(Wa, Pe), ve(Ba, Ee), ve(za, ge), ve(qo, N), ve(Ko, M), ve(Va, ye), K(Ae))
    if (Ae.length) {
      const k = e.exposed || (e.exposed = {});
      Ae.forEach((U) => {
        Object.defineProperty(k, U, {
          get: () => n[U],
          set: (ue) => n[U] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ne && e.render === Rt && (e.render = ne), je != null && (e.inheritAttrs = je), We && (e.components = We), Re && (e.directives = Re), ye && zo(e);
}
function Ya(e, t, n = Rt) {
  K(e) && (e = As(e));
  for (const r in e) {
    const s = e[r];
    let i;
    de(s) ? "default" in s ? i = br(
      s.from || r,
      s.default,
      !0
    ) : i = br(s.from || r) : i = br(s), /* @__PURE__ */ ze(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function vi(e, t, n) {
  vt(
    K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Go(e, t, n, r) {
  let s = r.includes(".") ? $o(n, r) : () => n[r];
  if (we(e)) {
    const i = t[e];
    Z(i) && ts(s, i);
  } else if (Z(e))
    ts(s, e.bind(n));
  else if (de(e))
    if (K(e))
      e.forEach((i) => Go(i, t, n, r));
    else {
      const i = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(i) && ts(s, i, e);
    }
}
function Yo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let u;
  return l ? u = l : !s.length && !n && !r ? u = t : (u = {}, s.length && s.forEach(
    (g) => Er(u, g, o, !0)
  ), Er(u, t, o)), de(t) && i.set(t, u), u;
}
function Er(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Er(e, i, n, !0), s && s.forEach(
    (o) => Er(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Xa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Xa = {
  data: Ti,
  props: Si,
  emits: Si,
  // objects
  methods: Fn,
  computed: Fn,
  // lifecycle
  beforeCreate: Ze,
  created: Ze,
  beforeMount: Ze,
  mounted: Ze,
  beforeUpdate: Ze,
  updated: Ze,
  beforeDestroy: Ze,
  beforeUnmount: Ze,
  destroyed: Ze,
  unmounted: Ze,
  activated: Ze,
  deactivated: Ze,
  errorCaptured: Ze,
  serverPrefetch: Ze,
  // assets
  components: Fn,
  directives: Fn,
  // watch
  watch: Za,
  // provide / inject
  provide: Ti,
  inject: Ja
};
function Ti(e, t) {
  return t ? e ? function() {
    return Be(
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ja(e, t) {
  return Fn(As(e), As(t));
}
function As(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ze(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fn(e, t) {
  return e ? Be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Si(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Be(
    /* @__PURE__ */ Object.create(null),
    _i(e),
    _i(t ?? {})
  ) : t;
}
function Za(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Be(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ze(e[r], t[r]);
  return n;
}
function Xo() {
  return {
    app: null,
    config: {
      isNativeTag: co,
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
let Qa = 0;
function ec(e, t) {
  return function(r, s = null) {
    Z(r) || (r = Be({}, r)), s != null && !de(s) && (s = null);
    const i = Xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const g = i.app = {
      _uid: Qa++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ic,
      get config() {
        return i.config;
      },
      set config(h) {
      },
      use(h, ...A) {
        return o.has(h) || (h && Z(h.install) ? (o.add(h), h.install(g, ...A)) : Z(h) && (o.add(h), h(g, ...A))), g;
      },
      mixin(h) {
        return i.mixins.includes(h) || i.mixins.push(h), g;
      },
      component(h, A) {
        return A ? (i.components[h] = A, g) : i.components[h];
      },
      directive(h, A) {
        return A ? (i.directives[h] = A, g) : i.directives[h];
      },
      mount(h, A, P) {
        if (!u) {
          const D = g._ceVNode || kt(r, s);
          return D.appContext = i, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(D, h, P), u = !0, g._container = h, h.__vue_app__ = g, Hr(D.component);
        }
      },
      onUnmount(h) {
        l.push(h);
      },
      unmount() {
        u && (vt(
          l,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(h, A) {
        return i.provides[h] = A, g;
      },
      runWithContext(h) {
        const A = Sn;
        Sn = g;
        try {
          return h();
        } finally {
          Sn = A;
        }
      }
    };
    return g;
  };
}
let Sn = null;
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${yt(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || pe;
  let s = n;
  const i = t.startsWith("update:"), o = i && tc(r, t.slice(7));
  o && (o.trim && (s = n.map((h) => we(h) ? h.trim() : h)), o.number && (s = s.map(Pr)));
  let l, u = r[l = Xr(t)] || // also try camelCase event handler (#2249)
  r[l = Xr(yt(t))];
  !u && i && (u = r[l = Xr(cn(t))]), u && vt(
    u,
    e,
    6,
    s
  );
  const g = r[l + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, vt(
      g,
      e,
      6,
      s
    );
  }
}
const rc = /* @__PURE__ */ new WeakMap();
function Jo(e, t, n = !1) {
  const r = n ? rc : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!Z(e)) {
    const u = (g) => {
      const h = Jo(g, t, !0);
      h && (l = !0, Be(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !l ? (de(e) && r.set(e, null), null) : (K(i) ? i.forEach((u) => o[u] = null) : Be(o, i), de(e) && r.set(e, o), o);
}
function kr(e, t) {
  return !e || !Or(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, cn(t)) || ce(e, t));
}
function Ei(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: u,
    render: g,
    renderCache: h,
    props: A,
    data: P,
    setupState: D,
    ctx: G,
    inheritAttrs: V
  } = e, X = Tr(e);
  let B, N;
  try {
    if (n.shapeFlag & 4) {
      const M = s || r, ne = M;
      B = wt(
        g.call(
          ne,
          M,
          h,
          A,
          D,
          P,
          G
        )
      ), N = l;
    } else {
      const M = t;
      B = wt(
        M.length > 1 ? M(
          A,
          { attrs: l, slots: o, emit: u }
        ) : M(
          A,
          null
        )
      ), N = t.props ? l : sc(l);
    }
  } catch (M) {
    ln.length = 0, Dr(M, e, 1), B = kt($t);
  }
  let q = B;
  if (N && V !== !1) {
    const M = Object.keys(N), { shapeFlag: ne } = q;
    M.length && ne & 7 && (i && M.some(Rr) && (N = ic(
      N,
      i
    )), q = xn(q, N, !1, !0));
  }
  if (n.dirs && (q = xn(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = Mr(q.type) && Vo(q) || q;
    $s(M, n.transition);
  }
  return B = q, Tr(X), B;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ic = (e, t) => {
  const n = {};
  for (const r in e)
    (!Rr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function oc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: u } = t, g = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? Ai(r, o, g) : !!o;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let A = 0; A < h.length; A++) {
        const P = h[A];
        if (Zo(o, r, P) && !kr(g, P))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ai(r, o, g) : !0 : !!o;
  return !1;
}
function Ai(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Zo(t, e, i) && !kr(n, i))
      return !0;
  }
  return !1;
}
function Zo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && de(r) && de(s) ? !Kt(r, s) : r !== s;
}
function lc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Qo = {}, el = () => Object.create(Qo), tl = (e) => Object.getPrototypeOf(e) === Qo;
function ac(e, t, n, r = !1) {
  const s = {}, i = el();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ ba(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function cc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ae(s), [u] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let A = 0; A < h.length; A++) {
        let P = h[A];
        if (kr(e.emitsOptions, P))
          continue;
        const D = t[P];
        if (u)
          if (ce(i, P))
            D !== i[P] && (i[P] = D, g = !0);
          else {
            const G = yt(P);
            s[G] = xs(
              u,
              l,
              G,
              D,
              e,
              !1
            );
          }
        else
          D !== i[P] && (i[P] = D, g = !0);
      }
    }
  } else {
    nl(e, t, s, i) && (g = !0);
    let h;
    for (const A in l)
      (!t || // for camelCase
      !ce(t, A) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = cn(A)) === A || !ce(t, h))) && (u ? n && // for camelCase
      (n[A] !== void 0 || // for kebab-case
      n[h] !== void 0) && (s[A] = xs(
        u,
        l,
        A,
        void 0,
        e,
        !0
      )) : delete s[A]);
    if (i !== l)
      for (const A in i)
        (!t || !ce(t, A)) && (delete i[A], g = !0);
  }
  g && Mt(e.attrs, "set", "");
}
function nl(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let u in t) {
      if (Hn(u))
        continue;
      const g = t[u];
      let h;
      s && ce(s, h = yt(u)) ? !i || !i.includes(h) ? n[h] = g : (l || (l = {}))[h] = g : kr(e.emitsOptions, u) || (!(u in r) || g !== r[u]) && (r[u] = g, o = !0);
    }
  if (i) {
    const u = /* @__PURE__ */ ae(n), g = l || pe;
    for (let h = 0; h < i.length; h++) {
      const A = i[h];
      n[A] = xs(
        s,
        u,
        A,
        g[A],
        e,
        !ce(g, A)
      );
    }
  }
  return o;
}
function xs(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ce(o, "default");
    if (l && r === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Z(u)) {
        const { propsDefaults: g } = s;
        if (n in g)
          r = g[n];
        else {
          const h = Qn(s);
          r = g[n] = u.call(
            null,
            t
          ), h();
        }
      } else
        r = u;
      s.ce && s.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
const uc = /* @__PURE__ */ new WeakMap();
function rl(e, t, n = !1) {
  const r = n ? uc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let u = !1;
  if (!Z(e)) {
    const h = (A) => {
      u = !0;
      const [P, D] = rl(A, t, !0);
      Be(o, P), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!i && !u)
    return de(e) && r.set(e, _n), _n;
  if (K(i))
    for (let h = 0; h < i.length; h++) {
      const A = yt(i[h]);
      xi(A) && (o[A] = pe);
    }
  else if (i)
    for (const h in i) {
      const A = yt(h);
      if (xi(A)) {
        const P = i[h], D = o[A] = K(P) || Z(P) ? { type: P } : Be({}, P), G = D.type;
        let V = !1, X = !0;
        if (K(G))
          for (let B = 0; B < G.length; ++B) {
            const N = G[B], q = Z(N) && N.name;
            if (q === "Boolean") {
              V = !0;
              break;
            } else q === "String" && (X = !1);
          }
        else
          V = Z(G) && G.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = V, D[
          1
          /* shouldCastTrue */
        ] = X, (V || ce(D, "default")) && l.push(A);
      }
    }
  const g = [o, l];
  return de(e) && r.set(e, g), g;
}
function xi(e) {
  return e[0] !== "$" && !Hn(e);
}
const zs = (e) => e === "_" || e === "_ctx" || e === "$stable", Bs = (e) => K(e) ? e.map(wt) : [wt(e)], fc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ra((...s) => Bs(t(...s)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (zs(s)) continue;
    const i = e[s];
    if (Z(i))
      t[s] = fc(s, i, r);
    else if (i != null) {
      const o = Bs(i);
      t[s] = () => o;
    }
  }
}, il = (e, t) => {
  const n = Bs(t);
  e.slots.default = () => n;
}, ol = (e, t, n) => {
  for (const r in t)
    (n || !zs(r)) && (e[r] = t[r]);
}, dc = (e, t, n) => {
  const r = e.slots = el();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ol(r, t, n), n && mo(r, "_", s, !0)) : sl(t, r);
  } else t && il(e, t);
}, pc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = pe;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ol(s, t, n) : (i = !t.$stable, sl(t, s)), o = t;
  } else t && (il(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !zs(l) && o[l] == null && delete s[l];
}, it = gc;
function hc(e) {
  return mc(e);
}
function mc(e, t) {
  const n = Ir();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: u,
    setText: g,
    setElementText: h,
    parentNode: A,
    nextSibling: P,
    setScopeId: D = Rt,
    insertStaticContent: G
  } = e, V = (f, p, _, w = null, S = null, x = null, O = void 0, v = null, m = !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Pn(f, p) && (w = Ge(f), he(f, S, x, !0), f = null), p.patchFlag === -2 && (m = !1, p.dynamicChildren = null);
    const { type: c, ref: L, shapeFlag: I } = p;
    switch (c) {
      case Ur:
        X(f, p, _, w);
        break;
      case $t:
        B(f, p, _, w);
        break;
      case is:
        f == null && N(p, _, w, O);
        break;
      case le:
        We(
          f,
          p,
          _,
          w,
          S,
          x,
          O,
          v,
          m
        );
        break;
      default:
        I & 1 ? ne(
          f,
          p,
          _,
          w,
          S,
          x,
          O,
          v,
          m
        ) : I & 6 ? Re(
          f,
          p,
          _,
          w,
          S,
          x,
          O,
          v,
          m
        ) : (I & 64 || I & 128) && c.process(
          f,
          p,
          _,
          w,
          S,
          x,
          O,
          v,
          m,
          ft
        );
    }
    L != null && S ? Vn(L, f && f.ref, x, p || f, !p) : L == null && f && f.ref != null && Vn(f.ref, null, x, f, !0);
  }, X = (f, p, _, w) => {
    if (f == null)
      r(
        p.el = l(p.children),
        _,
        w
      );
    else {
      const S = p.el = f.el;
      p.children !== f.children && g(S, p.children);
    }
  }, B = (f, p, _, w) => {
    f == null ? r(
      p.el = u(p.children || ""),
      _,
      w
    ) : p.el = f.el;
  }, N = (f, p, _, w) => {
    [f.el, f.anchor] = G(
      f.children,
      p,
      _,
      w,
      f.el,
      f.anchor
    );
  }, q = ({ el: f, anchor: p }, _, w) => {
    let S;
    for (; f && f !== p; )
      S = P(f), r(f, _, w), f = S;
    r(p, _, w);
  }, M = ({ el: f, anchor: p }) => {
    let _;
    for (; f && f !== p; )
      _ = P(f), s(f), f = _;
    s(p);
  }, ne = (f, p, _, w, S, x, O, v, m) => {
    if (p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), f == null)
      Ee(
        p,
        _,
        w,
        S,
        x,
        O,
        v,
        m
      );
    else {
      const c = f.el && f.el._isVueCE ? f.el : null;
      try {
        c && c._beginPatch(), ye(
          f,
          p,
          S,
          x,
          O,
          v,
          m
        );
      } finally {
        c && c._endPatch();
      }
    }
  }, Ee = (f, p, _, w, S, x, O, v) => {
    let m, c;
    const { props: L, shapeFlag: I, transition: $, dirs: W } = f;
    if (m = f.el = o(
      f.type,
      x,
      L && L.is,
      L
    ), I & 8 ? h(m, f.children) : I & 16 && Pe(
      f.children,
      m,
      null,
      w,
      S,
      ss(f, x),
      O,
      v
    ), W && Xt(f, null, w, "created"), ge(m, f, f.scopeId, O, w), L) {
      for (const te in L)
        te !== "value" && !Hn(te) && i(m, te, null, L[te], x, w);
      "value" in L && i(m, "value", null, L.value, x), (c = L.onVnodeBeforeMount) && At(c, w, f);
    }
    W && Xt(f, null, w, "beforeMount");
    const J = bc(S, $);
    J && $.beforeEnter(m), r(m, p, _), ((c = L && L.onVnodeMounted) || J || W) && it(() => {
      c && At(c, w, f), J && $.enter(m), W && Xt(f, null, w, "mounted");
    }, S);
  }, ge = (f, p, _, w, S) => {
    if (_ && D(f, _), w)
      for (let x = 0; x < w.length; x++)
        D(f, w[x]);
    if (S) {
      let x = S.subTree;
      if (p === x || ul(x.type) && (x.ssContent === p || x.ssFallback === p)) {
        const O = S.vnode;
        ge(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          S.parent
        );
      }
    }
  }, Pe = (f, p, _, w, S, x, O, v, m = 0) => {
    for (let c = m; c < f.length; c++) {
      const L = f[c] = v ? Dt(f[c]) : wt(f[c]);
      V(
        null,
        L,
        p,
        _,
        w,
        S,
        x,
        O,
        v
      );
    }
  }, ye = (f, p, _, w, S, x, O) => {
    const v = p.el = f.el;
    let { patchFlag: m, dynamicChildren: c, dirs: L } = p;
    m |= f.patchFlag & 16;
    const I = f.props || pe, $ = p.props || pe;
    let W;
    if (_ && Jt(_, !1), (W = $.onVnodeBeforeUpdate) && At(W, _, p, f), L && Xt(p, f, _, "beforeUpdate"), _ && Jt(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    c && (!f.dynamicChildren || f.dynamicChildren.length !== c.length) && (m = 0, O = !1, c = null), (I.innerHTML && $.innerHTML == null || I.textContent && $.textContent == null) && h(v, ""), c ? Ae(
      f.dynamicChildren,
      c,
      v,
      _,
      w,
      ss(p, S),
      x
    ) : O || U(
      f,
      p,
      v,
      null,
      _,
      w,
      ss(p, S),
      x,
      !1
    ), m > 0) {
      if (m & 16)
        je(v, I, $, _, S);
      else if (m & 2 && I.class !== $.class && i(v, "class", null, $.class, S), m & 4 && i(v, "style", I.style, $.style, S), m & 8) {
        const J = p.dynamicProps;
        for (let te = 0; te < J.length; te++) {
          const Q = J[te], _e = I[Q], Ce = $[Q];
          (Ce !== _e || Q === "value") && i(v, Q, _e, Ce, S, _);
        }
      }
      m & 1 && f.children !== p.children && h(v, p.children);
    } else !O && c == null && je(v, I, $, _, S);
    ((W = $.onVnodeUpdated) || L) && it(() => {
      W && At(W, _, p, f), L && Xt(p, f, _, "updated");
    }, w);
  }, Ae = (f, p, _, w, S, x, O) => {
    for (let v = 0; v < p.length; v++) {
      const m = f[v], c = p[v], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        m.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (m.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(m, c) || // - In the case of a component, it could contain anything.
        m.shapeFlag & 198) ? A(m.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      V(
        m,
        c,
        L,
        null,
        w,
        S,
        x,
        O,
        !0
      );
    }
  }, je = (f, p, _, w, S) => {
    if (p !== _) {
      if (p !== pe)
        for (const x in p)
          !Hn(x) && !(x in _) && i(
            f,
            x,
            p[x],
            null,
            S,
            w
          );
      for (const x in _) {
        if (Hn(x)) continue;
        const O = _[x], v = p[x];
        O !== v && x !== "value" && i(f, x, v, O, S, w);
      }
      "value" in _ && i(f, "value", p.value, _.value, S);
    }
  }, We = (f, p, _, w, S, x, O, v, m) => {
    const c = p.el = f ? f.el : l(""), L = p.anchor = f ? f.anchor : l("");
    let { patchFlag: I, dynamicChildren: $, slotScopeIds: W } = p;
    W && (v = v ? v.concat(W) : W), f == null ? (r(c, _, w), r(L, _, w), Pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      L,
      S,
      x,
      O,
      v,
      m
    )) : I > 0 && I & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === $.length ? (Ae(
      f.dynamicChildren,
      $,
      _,
      S,
      x,
      O,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || S && p === S.subTree) && ll(
      f,
      p,
      !0
      /* shallow */
    )) : U(
      f,
      p,
      _,
      L,
      S,
      x,
      O,
      v,
      m
    );
  }, Re = (f, p, _, w, S, x, O, v, m) => {
    p.slotScopeIds = v, f == null ? p.shapeFlag & 512 ? S.ctx.activate(
      p,
      _,
      w,
      O,
      m
    ) : tt(
      p,
      _,
      w,
      S,
      x,
      O,
      m
    ) : qe(f, p, m);
  }, tt = (f, p, _, w, S, x, O) => {
    const v = f.component = xc(
      f,
      w,
      S
    );
    if (Vs(f) && (v.ctx.renderer = ft), wc(v, !1, O), v.asyncDep) {
      if (S && S.registerDep(v, ve, O), !f.el) {
        const m = v.subTree = kt($t);
        B(null, m, p, _), f.placeholder = m.el;
      }
    } else
      ve(
        v,
        f,
        p,
        _,
        S,
        x,
        O
      );
  }, qe = (f, p, _) => {
    const w = p.component = f.component;
    if (oc(f, p, _))
      if (w.asyncDep && !w.asyncResolved) {
        k(w, p, _);
        return;
      } else
        w.next = p, w.update();
    else
      p.el = f.el, w.vnode = p;
  }, ve = (f, p, _, w, S, x, O) => {
    const v = () => {
      if (f.isMounted) {
        let { next: I, bu: $, u: W, parent: J, vnode: te } = f;
        {
          const nt = al(f);
          if (nt) {
            I && (I.el = te.el, k(f, I, O)), nt.asyncDep.then(() => {
              it(() => {
                f.isUnmounted || c();
              }, S);
            });
            return;
          }
        }
        let Q = I, _e;
        Jt(f, !1), I ? (I.el = te.el, k(f, I, O)) : I = te, $ && mr($), (_e = I.props && I.props.onVnodeBeforeUpdate) && At(_e, J, I, te), Jt(f, !0);
        const Ce = Ei(f), Ye = f.subTree;
        f.subTree = Ce, V(
          Ye,
          Ce,
          // parent may have changed if it's in a teleport
          A(Ye.el),
          // anchor may have changed if it's in a fragment
          Ge(Ye),
          f,
          S,
          x
        ), I.el = Ce.el, Q === null && lc(f, Ce.el), W && it(W, S), (_e = I.props && I.props.onVnodeUpdated) && it(
          () => At(_e, J, I, te),
          S
        );
      } else {
        let I;
        const { el: $, props: W } = p, { bm: J, m: te, parent: Q, root: _e, type: Ce } = f, Ye = zn(p);
        Jt(f, !1), J && mr(J), !Ye && (I = W && W.onVnodeBeforeMount) && At(I, Q, p), Jt(f, !0);
        {
          _e.ce && _e.ce._hasShadowRoot() && _e.ce._injectChildStyle(
            Ce,
            f.parent ? f.parent.type : void 0
          );
          const nt = f.subTree = Ei(f);
          V(
            null,
            nt,
            _,
            w,
            f,
            S,
            x
          ), p.el = nt.el;
        }
        if (te && it(te, S), !Ye && (I = W && W.onVnodeMounted)) {
          const nt = p;
          it(
            () => At(I, Q, nt),
            S
          );
        }
        (p.shapeFlag & 256 || Q && zn(Q.vnode) && Q.vnode.shapeFlag & 256) && f.a && it(f.a, S), f.isMounted = !0, p = _ = w = null;
      }
    };
    f.scope.on();
    const m = f.effect = new _o(v);
    f.scope.off();
    const c = f.update = m.run.bind(m), L = f.job = m.runIfDirty.bind(m);
    L.i = f, L.id = f.uid, m.scheduler = () => js(L), Jt(f, !0), c();
  }, k = (f, p, _) => {
    p.component = f;
    const w = f.vnode.props;
    f.vnode = p, f.next = null, cc(f, p.props, w, _), pc(f, p.children, _), Ut(), bi(f), Ht();
  }, U = (f, p, _, w, S, x, O, v, m = !1) => {
    const c = f && f.children, L = f ? f.shapeFlag : 0, I = p.children, { patchFlag: $, shapeFlag: W } = p;
    if ($ > 0) {
      if ($ & 128) {
        Te(
          c,
          I,
          _,
          w,
          S,
          x,
          O,
          v,
          m
        );
        return;
      } else if ($ & 256) {
        ue(
          c,
          I,
          _,
          w,
          S,
          x,
          O,
          v,
          m
        );
        return;
      }
    }
    W & 8 ? (L & 16 && De(c, S, x), I !== c && h(_, I)) : L & 16 ? W & 16 ? Te(
      c,
      I,
      _,
      w,
      S,
      x,
      O,
      v,
      m
    ) : De(c, S, x, !0) : (L & 8 && h(_, ""), W & 16 && Pe(
      I,
      _,
      w,
      S,
      x,
      O,
      v,
      m
    ));
  }, ue = (f, p, _, w, S, x, O, v, m) => {
    f = f || _n, p = p || _n;
    const c = f.length, L = p.length, I = Math.min(c, L);
    let $;
    for ($ = 0; $ < I; $++) {
      const W = p[$] = m ? Dt(p[$]) : wt(p[$]);
      V(
        f[$],
        W,
        _,
        null,
        S,
        x,
        O,
        v,
        m
      );
    }
    c > L ? De(
      f,
      S,
      x,
      !0,
      !1,
      I
    ) : Pe(
      p,
      _,
      w,
      S,
      x,
      O,
      v,
      m,
      I
    );
  }, Te = (f, p, _, w, S, x, O, v, m) => {
    let c = 0;
    const L = p.length;
    let I = f.length - 1, $ = L - 1;
    for (; c <= I && c <= $; ) {
      const W = f[c], J = p[c] = m ? Dt(p[c]) : wt(p[c]);
      if (Pn(W, J))
        V(
          W,
          J,
          _,
          null,
          S,
          x,
          O,
          v,
          m
        );
      else
        break;
      c++;
    }
    for (; c <= I && c <= $; ) {
      const W = f[I], J = p[$] = m ? Dt(p[$]) : wt(p[$]);
      if (Pn(W, J))
        V(
          W,
          J,
          _,
          null,
          S,
          x,
          O,
          v,
          m
        );
      else
        break;
      I--, $--;
    }
    if (c > I) {
      if (c <= $) {
        const W = $ + 1, J = W < L ? p[W].el : w;
        for (; c <= $; )
          V(
            null,
            p[c] = m ? Dt(p[c]) : wt(p[c]),
            _,
            J,
            S,
            x,
            O,
            v,
            m
          ), c++;
      }
    } else if (c > $)
      for (; c <= I; )
        he(f[c], S, x, !0), c++;
    else {
      const W = c, J = c, te = /* @__PURE__ */ new Map();
      for (c = J; c <= $; c++) {
        const Me = p[c] = m ? Dt(p[c]) : wt(p[c]);
        Me.key != null && te.set(Me.key, c);
      }
      let Q, _e = 0;
      const Ce = $ - J + 1;
      let Ye = !1, nt = 0;
      const dt = new Array(Ce);
      for (c = 0; c < Ce; c++) dt[c] = 0;
      for (c = W; c <= I; c++) {
        const Me = f[c];
        if (_e >= Ce) {
          he(Me, S, x, !0);
          continue;
        }
        let lt;
        if (Me.key != null)
          lt = te.get(Me.key);
        else
          for (Q = J; Q <= $; Q++)
            if (dt[Q - J] === 0 && Pn(Me, p[Q])) {
              lt = Q;
              break;
            }
        lt === void 0 ? he(Me, S, x, !0) : (dt[lt - J] = c + 1, lt >= nt ? nt = lt : Ye = !0, V(
          Me,
          p[lt],
          _,
          null,
          S,
          x,
          O,
          v,
          m
        ), _e++);
      }
      const Gt = Ye ? yc(dt) : _n;
      for (Q = Gt.length - 1, c = Ce - 1; c >= 0; c--) {
        const Me = J + c, lt = p[Me], Cn = p[Me + 1], wn = Me + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Cn.el || cl(Cn)
        ) : w;
        dt[c] === 0 ? V(
          null,
          lt,
          _,
          wn,
          S,
          x,
          O,
          v,
          m
        ) : Ye && (Q < 0 || c !== Gt[Q] ? ie(lt, _, wn, 2) : Q--);
      }
    }
  }, ie = (f, p, _, w, S = null) => {
    const { el: x, type: O, transition: v, children: m, shapeFlag: c } = f;
    if (c & 6) {
      ie(f.component.subTree, p, _, w);
      return;
    }
    if (c & 128) {
      f.suspense.move(p, _, w);
      return;
    }
    if (c & 64) {
      O.move(f, p, _, ft);
      return;
    }
    if (O === le) {
      r(x, p, _);
      for (let I = 0; I < m.length; I++)
        ie(m[I], p, _, w);
      r(f.anchor, p, _);
      return;
    }
    if (O === is) {
      q(f, p, _);
      return;
    }
    if (w !== 2 && c & 1 && v)
      if (w === 0)
        v.persisted && !x[ns] ? r(x, p, _) : (v.beforeEnter(x), r(x, p, _), it(() => v.enter(x), S));
      else {
        const { leave: I, delayLeave: $, afterLeave: W } = v, J = () => {
          f.ctx.isUnmounted ? s(x) : r(x, p, _);
        }, te = () => {
          const Q = x._isLeaving || !!x[ns];
          x._isLeaving && x[ns](
            !0
            /* cancelled */
          ), v.persisted && !Q ? J() : I(x, () => {
            J(), W && W();
          });
        };
        $ ? $(x, J, te) : te();
      }
    else
      r(x, p, _);
  }, he = (f, p, _, w = !1, S = !1) => {
    const {
      type: x,
      props: O,
      ref: v,
      children: m,
      dynamicChildren: c,
      shapeFlag: L,
      patchFlag: I,
      dirs: $,
      cacheIndex: W,
      memo: J
    } = f;
    if (I === -2 && (S = !1), v != null && (Ut(), Vn(v, null, _, f, !0), Ht()), W != null && (p.renderCache[W] = void 0), L & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const te = L & 1 && $, Q = !zn(f);
    let _e;
    if (Q && (_e = O && O.onVnodeBeforeUnmount) && At(_e, p, f), L & 6)
      Ke(f.component, _, w);
    else {
      if (L & 128) {
        f.suspense.unmount(_, w);
        return;
      }
      te && Xt(f, null, p, "beforeUnmount"), L & 64 ? f.type.remove(
        f,
        p,
        _,
        ft,
        w
      ) : c && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !c.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== le || I > 0 && I & 64) ? De(
        c,
        p,
        _,
        !1,
        !0
      ) : (x === le && I & 384 || !S && L & 16) && De(m, p, _), w && xe(f);
    }
    const Ce = J != null && W == null;
    (Q && (_e = O && O.onVnodeUnmounted) || te || Ce) && it(() => {
      _e && At(_e, p, f), te && Xt(f, null, p, "unmounted"), Ce && (f.el = null);
    }, _);
  }, xe = (f) => {
    const { type: p, el: _, anchor: w, transition: S } = f;
    if (p === le) {
      re(_, w);
      return;
    }
    if (p === is) {
      M(f);
      return;
    }
    const x = () => {
      s(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (f.shapeFlag & 1 && S && !S.persisted) {
      const { leave: O, delayLeave: v } = S, m = () => O(_, x);
      v ? v(f.el, x, m) : m();
    } else
      x();
  }, re = (f, p) => {
    let _;
    for (; f !== p; )
      _ = P(f), s(f), f = _;
    s(p);
  }, Ke = (f, p, _) => {
    const { bum: w, scope: S, job: x, subTree: O, um: v, m, a: c } = f;
    Ci(m), Ci(c), w && mr(w), S.stop(), x && (x.flags |= 8, he(O, f, p, _)), v && it(v, p), it(() => {
      f.isUnmounted = !0;
    }, p);
  }, De = (f, p, _, w = !1, S = !1, x = 0) => {
    for (let O = x; O < f.length; O++)
      he(f[O], p, _, w, S);
  }, Ge = (f) => {
    if (f.shapeFlag & 6)
      return Ge(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = P(f.anchor || f.el), _ = p && p[Da];
    return _ ? P(_) : p;
  };
  let mt = !1;
  const Tt = (f, p, _) => {
    let w;
    f == null ? p._vnode && (he(p._vnode, null, null, !0), w = p._vnode.component) : V(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = f, mt || (mt = !0, bi(w), ko(), mt = !1);
  }, ft = {
    p: V,
    um: he,
    m: ie,
    r: xe,
    mt: tt,
    mc: Pe,
    pc: U,
    pbc: Ae,
    n: Ge,
    o: e
  };
  return {
    render: Tt,
    hydrate: void 0,
    createApp: ec(Tt)
  };
}
function ss({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ll(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (K(r) && K(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Dt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && ll(o, l)), l.type === Ur && (l.patchFlag === -1 && (l = s[i] = Dt(l)), l.el = o.el), l.type === $t && !l.el && (l.el = o.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const u = e.length;
  for (r = 0; r < u; r++) {
    const g = e[r];
    if (g !== 0) {
      if (s = n[n.length - 1], e[s] < g) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < g ? i = l + 1 : o = l;
      g < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function al(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : al(t);
}
function Ci(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function cl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? cl(t.subTree) : null;
}
const ul = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Oa(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), Ur = /* @__PURE__ */ Symbol.for("v-txt"), $t = /* @__PURE__ */ Symbol.for("v-cmt"), is = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let ut = null;
function H(e = !1) {
  ln.push(ut = e ? null : []);
}
function fl() {
  ln.pop(), ut = ln[ln.length - 1] || null;
}
let Gn = 1;
function wi(e, t = !1) {
  Gn += e, e < 0 && ut && t && (ut.hasOnce = !0);
}
function dl(e) {
  return e.dynamicChildren = Gn > 0 ? ut || _n : null, fl(), Gn > 0 && ut && ut.push(e), e;
}
function j(e, t, n, r, s, i) {
  return dl(
    b(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
    )
  );
}
function _c(e, t, n, r, s) {
  return dl(
    kt(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function pl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hl = ({ key: e }) => e ?? null, yr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || /* @__PURE__ */ ze(e) || Z(e) ? { i: pt, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, r = 0, s = null, i = e === le ? 0 : 1, o = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hl(t),
    ref: t && yr(t),
    scopeId: Ho,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: pt
  };
  return l ? (Ar(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= we(n) ? 8 : 16), Gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ut && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ut.push(u), u;
}
const kt = vc;
function vc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === qa) && (e = $t), pl(e)) {
    const l = xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ar(l, n), Gn > 0 && !i && ut && (l.shapeFlag & 6 ? ut[ut.indexOf(e)] = l : ut.push(l)), l.patchFlag = -2, l;
  }
  if (Pc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: l, style: u } = t;
    l && !we(l) && (t.class = vn(l)), de(u) && (/* @__PURE__ */ Hs(u) && !K(u) && (u = Be({}, u)), t.style = Is(u));
  }
  const o = we(e) ? 1 : ul(e) ? 128 : Mr(e) ? 64 : de(e) ? 4 : Z(e) ? 2 : 0;
  return b(
    e,
    t,
    n,
    r,
    s,
    o,
    i,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ Hs(e) || tl(e) ? Be({}, e) : e : null;
}
function xn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: u } = e, g = t ? Sc(s || {}, t) : s, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && hl(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? K(i) ? i.concat(yr(t)) : [i, yr(t)] : yr(t)
    ) : i,
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
    patchFlag: t && e.type !== le ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && xn(e.ssContent),
    ssFallback: e.ssFallback && xn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && $s(
    h,
    u.clone(h)
  ), h;
}
function oe(e = " ", t = 0) {
  return kt(Ur, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (H(), _c($t, null, e)) : kt($t, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? kt($t) : K(e) ? kt(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pl(e) ? Dt(e) : kt(Ur, null, String(e));
}
function Dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xn(e);
}
function Ar(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ar(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !tl(t) ? t._ctx = pt : s === 3 && pt && (pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (r & 65) {
      Ar(e, { default: t });
      return;
    }
    t = { default: t, _ctx: pt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [oe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = vn([t.class, r.class]));
      else if (s === "style")
        t.style = Is([t.style, r.style]);
      else if (Or(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(K(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function At(e, t, n, r = null) {
  vt(e, t, 7, [
    n,
    r
  ]);
}
const Ec = Xo();
let Ac = 0;
function xc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Ec, i = {
    uid: Ac++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Jl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: rl(r, s),
    emitsOptions: Jo(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = nc.bind(null, i), e.ce && e.ce(i), i;
}
let et = null;
const Cc = () => et || pt;
let xr, Yn;
{
  const e = Ir(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  xr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => et = n
  ), Yn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xn = n
  );
}
const Qn = (e) => {
  const t = et;
  return xr(e), e.scope.on(), () => {
    e.scope.off(), xr(t);
  };
}, Oi = () => {
  et && et.scope.off(), xr(null);
};
function ml(e) {
  return e.vnode.shapeFlag & 4;
}
let Xn = !1;
function wc(e, t = !1, n = !1) {
  t && Yn(t);
  const { props: r, children: s } = e.vnode, i = ml(e);
  ac(e, r, i, t), dc(e, s, n || t);
  const o = i ? Oc(e, t) : void 0;
  return t && Yn(!1), o;
}
function Oc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ka);
  const { setup: r } = n;
  if (r) {
    Ut();
    const s = e.setupContext = r.length > 1 ? Nc(e) : null, i = Qn(e), o = Zn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = uo(o);
    if (Ht(), i(), (l || e.sp) && !zn(e) && zo(e), l) {
      if (o.then(Oi, Oi), t)
        return o.then((u) => {
          Yn(!0);
          try {
            Ri(e, u, t);
          } finally {
            Yn(!1);
          }
        }).catch((u) => {
          Dr(u, e, 0);
        });
      e.asyncDep = o;
    } else
      Ri(e, o);
  } else
    bl(e);
}
function Ri(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = Lo(t)), bl(e);
}
function bl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Rt);
  {
    const s = Qn(e);
    Ut();
    try {
      Ga(e);
    } finally {
      Ht(), s();
    }
  }
}
const Rc = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lo(ya(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bn)
        return Bn[n](e);
    },
    has(t, n) {
      return n in t || n in Bn;
    }
  })) : e.proxy;
}
function Pc(e) {
  return Z(e) && "__vccOpts" in e;
}
const fe = (e, t) => /* @__PURE__ */ Ea(e, t, Xn), Ic = "3.5.42";
let Cs;
const Ni = typeof window < "u" && window.trustedTypes;
if (Ni)
  try {
    Cs = /* @__PURE__ */ Ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yl = Cs ? (e) => Cs.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, Pi = Lt && /* @__PURE__ */ Lt.createElement("template"), Mc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Lt.createElementNS(Lc, e) : t === "mathml" ? Lt.createElementNS(Dc, e) : n ? Lt.createElement(e, { is: n }) : Lt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Lt.createTextNode(e),
  createComment: (e) => Lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Pi.innerHTML = yl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Pi.content;
      if (r === "svg" || r === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function kc(e, t, n) {
  const r = e[Fc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ii = /* @__PURE__ */ Symbol("_vod"), Uc = /* @__PURE__ */ Symbol("_vsh"), Hc = /* @__PURE__ */ Symbol(""), jc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const r = e.style, s = we(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (we(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && kn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && kn(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? zc(
        e,
        o,
        !we(t) && t ? t[o] : void 0,
        l
      ) || kn(r, o, l) : kn(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Hc];
      o && (n += ";" + o), r.cssText = n, i = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ii in e && (e[Ii] = i ? r.display : "", e[Uc] && (r.display = "none"));
}
const fr = /\s*!important$/;
function kn(e, t, n) {
  if (K(n))
    n.forEach((r) => kn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    fr.test(n) ? e.setProperty(t, n.replace(fr, ""), "important") : e.setProperty(t, n);
  else {
    const r = Vc(e, t);
    fr.test(n) ? e.setProperty(
      cn(r),
      n.replace(fr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Li = ["Webkit", "Moz", "ms"], os = {};
function Vc(e, t) {
  const n = os[t];
  if (n)
    return n;
  let r = yt(t);
  if (r !== "filter" && r in e)
    return os[t] = r;
  r = ho(r);
  for (let s = 0; s < Li.length; s++) {
    const i = Li[s] + r;
    if (i in e)
      return os[t] = i;
  }
  return t;
}
function zc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && we(r) && n === r;
}
const Di = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, r, s, i = Gl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Di, t.slice(6, t.length)) : e.setAttributeNS(Di, t, n) : n == null || i && !bo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Nt(n) ? String(n) : n
  );
}
function Fi(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = bo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function tn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Bc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ki = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, r, s = null) {
  const i = e[ki] || (e[ki] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, u] = Gc(t);
    if (r) {
      const g = i[t] = Jc(
        r,
        s
      );
      tn(e, l, g, u);
    } else o && (Bc(e, l, o, u), i[t] = void 0);
  }
}
const qc = /(Once|Passive|Capture)$/, Kc = /^on:?(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t, n;
  for (; (n = e.match(qc)) && !Kc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let ls = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), Xc = () => ls || (Yc.then(() => ls = 0), ls = Date.now());
function Jc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (K(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let u = 0; u < o.length && !r._stopped; u++) {
        const g = o[u];
        g && vt(
          g,
          t,
          5,
          l
        );
      }
    } else
      vt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Xc(), n;
}
const Ui = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? kc(e, r, o) : t === "style" ? $c(e, n, r) : Or(t) ? Rr(t) || Wc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, o)) ? (Fi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (eu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !we(r))) ? Fi(e, yt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Mi(e, t, r, o));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ui(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ui(t) && we(n) ? !1 : t in e;
}
function eu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = yt(t);
  return Array.isArray(n) ? n.some((s) => yt(s) === r) : Object.keys(n).some((s) => yt(s) === r);
}
const Cr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => mr(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function Hi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign"), dr = /* @__PURE__ */ Symbol("_initialValue");
function as(e, t, n) {
  return t && (e = e.trim()), n && (e = Pr(e)), e;
}
const cs = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[dr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[dr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[rn] = Cr(s);
    const i = r || s.props && s.props.type === "number";
    tn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[rn](as(e.value, n, i));
    }), (n || i) && tn(e, "change", () => {
      e.value = as(e.value, n, i);
    }), t || (tn(e, "compositionstart", tu), tn(e, "compositionend", Hi), tn(e, "change", Hi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[dr];
    delete e[dr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[rn](as(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[rn] = Cr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Pr(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === u) || (e.value = u);
  }
}, Je = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, tn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Pr(wr(u)) : wr(u)
      ), i = e.multiple, o = i ? an(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? K(o) ? s.slice() : s : o
      ];
      try {
        e[rn](o);
      } finally {
        Mo(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[rn] = Cr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ji(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[rn] = Cr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !nu(t, n[1], n[0])) && ji(e, t);
  }
};
function nu(e, t, n) {
  if (!n || K(e)) return Kt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function ji(e, t) {
  const n = e.multiple, r = K(t);
  if (!(n && !r && !an(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = wr(o);
      if (n)
        if (r) {
          const u = typeof l;
          u === "string" || u === "number" ? o.selected = t.some((g) => String(g) === String(l)) : o.selected = Xl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Kt(wr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wr(e) {
  return "_value" in e ? e._value : e.value;
}
const ru = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => ru.some((n) => e[`${n}Key`] && !t.includes(n))
}, pr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = su[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, iu = /* @__PURE__ */ Be({ patchProp: Zc }, Mc);
let $i;
function ou() {
  return $i || ($i = hc(iu));
}
const lu = ((...e) => {
  const t = ou().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = cu(r);
    if (!s) return;
    const i = t._component;
    !Z(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, au(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function au(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  return we(e) ? document.querySelector(e) : e;
}
function uu(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const s = document.querySelector(r);
  if (s === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(s.value));
    return window._nc_initial_state.set(r, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function Vi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fu(e) {
  if (Array.isArray(e)) return e;
}
function du(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, i, o, l = [], u = !0, g = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0) ;
    } catch (h) {
      g = !0, s = h;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (g) throw s;
      }
    }
    return l;
  }
}
function pu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(e, t) {
  return fu(e) || du(e, t) || mu(e, t) || pu();
}
function mu(e, t) {
  if (e) {
    if (typeof e == "string") return Vi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vi(e, t) : void 0;
  }
}
const gl = Object.entries, zi = Object.setPrototypeOf, bu = Object.isFrozen, yu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let Le = Object.freeze, Ue = Object.seal, gn = Object.create, _l = typeof Reflect < "u" && Reflect, ws = _l.apply, Os = _l.construct;
Le || (Le = function(t) {
  return t;
});
Ue || (Ue = function(t) {
  return t;
});
ws || (ws = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
Os || (Os = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const en = Ne(Array.prototype.forEach), _u = Ne(Array.prototype.lastIndexOf), Bi = Ne(Array.prototype.pop), In = Ne(Array.prototype.push), vu = Ne(Array.prototype.splice), En = Array.isArray, Un = Ne(String.prototype.toLowerCase), us = Ne(String.prototype.toString), Wi = Ne(String.prototype.match), Ln = Ne(String.prototype.replace), qi = Ne(String.prototype.indexOf), Tu = Ne(String.prototype.trim), Su = Ne(Number.prototype.toString), Eu = Ne(Boolean.prototype.toString), Ki = typeof BigInt > "u" ? null : Ne(BigInt.prototype.toString), Gi = typeof Symbol > "u" ? null : Ne(Symbol.prototype.toString), ot = Ne(Object.prototype.hasOwnProperty), Dn = Ne(Object.prototype.toString), $e = Ne(RegExp.prototype.test), Zt = Au(TypeError);
function Ne(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return ws(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Os(e, n);
  };
}
function se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Un;
  if (zi && zi(e, null), !En(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (bu(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function xu(e) {
  for (let t = 0; t < e.length; t++)
    ot(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = gn(null);
  for (const r of gl(e)) {
    var n = hu(r, 2);
    const s = n[0], i = n[1];
    ot(e, s) && (En(i) ? t[s] = xu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = ct(i) : t[s] = i);
  }
  return t;
}
function Cu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Su(e);
    case "boolean":
      return Eu(e);
    case "bigint":
      return Ki ? Ki(e) : "0";
    case "symbol":
      return Gi ? Gi(e) : "Symbol()";
    case "undefined":
      return Dn(e);
    case "function":
    case "object": {
      if (e === null)
        return Dn(e);
      const t = e, n = bt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Dn(r);
      }
      return Dn(e);
    }
    default:
      return Dn(e);
  }
}
function bt(e, t) {
  for (; e !== null; ) {
    const r = gu(e, t);
    if (r) {
      if (r.get)
        return Ne(r.get);
      if (typeof r.value == "function")
        return Ne(r.value);
    }
    e = yu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function wu(e) {
  try {
    return $e(e, ""), !0;
  } catch {
    return !1;
  }
}
const Yi = Le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fs = Le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ds = Le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = Le(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ps = Le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ru = Le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xi = Le(["#text"]), Ji = Le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hs = Le(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zi = Le(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hr = Le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nu = Ue(/{{[\w\W]*|^[\w\W]*}}/g), Pu = Ue(/<%[\w\W]*|^[\w\W]*%>/g), Iu = Ue(/\${[\w\W]*/g), Lu = Ue(/^data-[\-\w.\u00B7-\uFFFF]+$/), Du = Ue(/^aria-[\-\w]+$/), Qi = Ue(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Mu = Ue(/^(?:\w+script|data):/i), Fu = Ue(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ku = Ue(/^html$/i), Uu = Ue(/^[a-z][.\w]*(-[.\w]+)+$/i), eo = Ue(/<[/\w!]/g), to = Ue(/<[/\w]/g), Hu = Ue(/<\/no(script|embed|frames)/i), ju = Ue(/\/>/i), at = {
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
}, vl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $u = Le(se({}, vl)), Vu = (function() {
  const e = {};
  return en(vl, (t) => {
    e[t] = Ue(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Le(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Bu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, no = function() {
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
}, Bt = function(t, n, r, s) {
  return ot(t, n) && En(t[n]) ? se(s.base ? ct(s.base) : {}, t[n], s.transform) : r;
}, ms = function(t, n, r) {
  const s = ot(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? ct(s) : r();
};
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (R) => Tl(R);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== at.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, u = e.NodeFilter, g = e.NamedNodeMap;
  g === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const h = e.DOMParser, A = e.trustedTypes, P = l.prototype, D = bt(P, "cloneNode"), G = bt(P, "remove"), V = bt(P, "nextSibling"), X = bt(P, "childNodes"), B = bt(P, "parentNode"), N = bt(P, "shadowRoot"), q = bt(P, "attributes"), M = o && o.prototype ? bt(o.prototype, "nodeType") : null, ne = o && o.prototype ? bt(o.prototype, "nodeName") : null, Ee = o && o.prototype ? bt(o.prototype, "ownerDocument") : null, ge = function(a) {
    return M ? M(a) : a.nodeType;
  }, Pe = function(a) {
    return ne ? ne(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const R = n.createElement("template");
    R.content && R.content.ownerDocument && (n = R.content.ownerDocument);
  }
  let ye, Ae = "", je, We = !1, Re = 0;
  const tt = function() {
    if (Re > 0)
      throw Zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, qe = function(a) {
    tt(), Re++;
    try {
      return ye.createHTML(a);
    } finally {
      Re--;
    }
  }, ve = function(a) {
    tt(), Re++;
    try {
      return ye.createScriptURL(a);
    } finally {
      Re--;
    }
  }, k = function() {
    return We || (je = Bu(A, s), We = !0), je;
  }, U = n, ue = U.implementation, Te = U.createNodeIterator, ie = U.createDocumentFragment, he = U.getElementsByTagName, xe = r.importNode;
  let re = no();
  t.isSupported = typeof gl == "function" && typeof B == "function" && ue && ue.createHTMLDocument !== void 0;
  const Ke = Nu, De = Pu, Ge = Iu, mt = Lu, Tt = Du, ft = Mu, Pt = Fu, f = Uu;
  let p = Qi, _ = null;
  const w = se({}, [...Yi, ...fs, ...ds, ...ps, ...Xi]);
  let S = null;
  const x = se({}, [...Ji, ...hs, ...Zi, ...hr]);
  let O = Object.seal(gn(null, {
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
  })), v = null, m = null;
  const c = Object.seal(gn(null, {
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
  let L = !0, I = !0, $ = !1, W = !0, J = !1, te = !0, Q = !1, _e = !1, Ce = null, Ye = null, nt = !1, dt = !1, Gt = !1, Me = !1, lt = !0, Cn = !1;
  const wn = "user-content-";
  let jr = !0, $r = !1, un = {}, fn = null;
  const Ws = se({}, [
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
  let qs = null;
  const Ks = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Gs = null;
  const Ys = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), er = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", St = "http://www.w3.org/1999/xhtml";
  let dn = St, Vr = !1, zr = null;
  const El = se({}, [er, tr, St], us), Xs = Le(["mi", "mo", "mn", "ms", "mtext"]);
  let Br = se({}, Xs);
  const Js = Le(["annotation-xml"]);
  let Wr = se({}, Js);
  const Al = se({}, ["title", "style", "font", "a", "script"]);
  let On = null;
  const xl = ["application/xhtml+xml", "text/html"], Cl = "text/html";
  let Oe = null, pn = null;
  const wl = n.createElement("form"), Zs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, qr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ct(a), On = // eslint-disable-next-line unicorn/prefer-includes
    xl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Cl : a.PARSER_MEDIA_TYPE, Oe = On === "application/xhtml+xml" ? us : Un, _ = Bt(a, "ALLOWED_TAGS", w, {
      transform: Oe
    }), S = Bt(a, "ALLOWED_ATTR", x, {
      transform: Oe
    }), zr = Bt(a, "ALLOWED_NAMESPACES", El, {
      transform: us
    }), Gs = Bt(a, "ADD_URI_SAFE_ATTR", Ys, {
      transform: Oe,
      base: Ys
    }), qs = Bt(a, "ADD_DATA_URI_TAGS", Ks, {
      transform: Oe,
      base: Ks
    }), fn = Bt(a, "FORBID_CONTENTS", Ws, {
      transform: Oe
    }), v = Bt(a, "FORBID_TAGS", ct({}), {
      transform: Oe
    }), m = Bt(a, "FORBID_ATTR", ct({}), {
      transform: Oe
    }), un = ot(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ct(a.USE_PROFILES) : a.USE_PROFILES : !1, L = a.ALLOW_ARIA_ATTR !== !1, I = a.ALLOW_DATA_ATTR !== !1, $ = a.ALLOW_UNKNOWN_PROTOCOLS || !1, W = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = a.SAFE_FOR_TEMPLATES || !1, te = a.SAFE_FOR_XML !== !1, Q = a.WHOLE_DOCUMENT || !1, dt = a.RETURN_DOM || !1, Gt = a.RETURN_DOM_FRAGMENT || !1, Me = a.RETURN_TRUSTED_TYPE || !1, nt = a.FORCE_BODY || !1, lt = a.SANITIZE_DOM !== !1, Cn = a.SANITIZE_NAMED_PROPS || !1, jr = a.KEEP_CONTENT !== !1, $r = a.IN_PLACE || !1, p = wu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Qi, dn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : St, Br = ms(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => se({}, Xs)
      // Default built-in map
    ), Wr = ms(
      a,
      "HTML_INTEGRATION_POINTS",
      () => se({}, Js)
      // Default built-in map
    );
    const y = ms(a, "CUSTOM_ELEMENT_HANDLING", () => gn(null));
    if (O = gn(null), ot(y, "tagNameCheck") && Zs(y.tagNameCheck) && (O.tagNameCheck = y.tagNameCheck), ot(y, "attributeNameCheck") && Zs(y.attributeNameCheck) && (O.attributeNameCheck = y.attributeNameCheck), ot(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), Ue(O), J && (I = !1), Gt && (dt = !0), un && (_ = se({}, Xi), S = gn(null), un.html === !0 && (se(_, Yi), se(S, Ji)), un.svg === !0 && (se(_, fs), se(S, hs), se(S, hr)), un.svgFilters === !0 && (se(_, ds), se(S, hs), se(S, hr)), un.mathMl === !0 && (se(_, ps), se(S, Zi), se(S, hr))), c.tagCheck = null, c.attributeCheck = null, ot(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? c.tagCheck = a.ADD_TAGS : En(a.ADD_TAGS) && (_ === w && (_ = ct(_)), se(_, a.ADD_TAGS, Oe))), ot(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? c.attributeCheck = a.ADD_ATTR : En(a.ADD_ATTR) && (S === x && (S = ct(S)), se(S, a.ADD_ATTR, Oe))), ot(a, "ADD_FORBID_CONTENTS") && En(a.ADD_FORBID_CONTENTS) && (fn === Ws && (fn = ct(fn)), se(fn, a.ADD_FORBID_CONTENTS, Oe)), jr && (_["#text"] = !0), Q && se(_, ["html", "head", "body"]), _.table && (se(_, ["tbody"]), delete v.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const C = ye;
      ye = a.TRUSTED_TYPES_POLICY;
      try {
        Ae = qe("");
      } catch (F) {
        throw ye = C, F;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ye = void 0, Ae = "") : (ye === void 0 && (ye = k()), ye && typeof Ae == "string" && (Ae = qe("")));
    Le && Le(a), pn = a;
  }, Qs = se({}, [...fs, ...ds, ...Ou]), ei = se({}, [...ps, ...Ru]), Ol = function(a, y, C) {
    return y.namespaceURI === St ? a === "svg" : y.namespaceURI === er ? a === "svg" && (C === "annotation-xml" || Br[C]) : !!Qs[a];
  }, Rl = function(a, y, C) {
    return y.namespaceURI === St ? a === "math" : y.namespaceURI === tr ? a === "math" && Wr[C] : !!ei[a];
  }, Nl = function(a, y, C) {
    return y.namespaceURI === tr && !Wr[C] || y.namespaceURI === er && !Br[C] ? !1 : !ei[a] && (Al[a] || !Qs[a]);
  }, Pl = function(a) {
    let y = B(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: dn,
      tagName: "template"
    });
    const C = Un(a.tagName), F = Un(y.tagName);
    return zr[a.namespaceURI] ? a.namespaceURI === tr ? Ol(C, y, F) : a.namespaceURI === er ? Rl(C, y, F) : a.namespaceURI === St ? Nl(C, y, F) : !!(On === "application/xhtml+xml" && zr[a.namespaceURI]) : !1;
  }, zt = function(a) {
    In(t.removed, {
      element: a
    });
    try {
      B(a).removeChild(a);
    } catch {
      if (G(a), !B(a))
        throw Zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ti = function(a, y, C) {
    try {
      a.removeAttributeNode(y);
    } catch {
      try {
        a.removeAttribute(C);
      } catch {
      }
    }
  }, nr = function(a) {
    rr(a);
    const y = X(a);
    if (y) {
      const F = [];
      en(y, (z) => {
        In(F, z);
      }), en(F, (z) => {
        try {
          G(z);
        } catch {
        }
      });
    }
    const C = q(a);
    if (C)
      for (let F = C.length - 1; F >= 0; --F) {
        const z = C[F], Y = z && z.name;
        typeof Y == "string" && ti(a, z, Y);
      }
  }, Yt = function(a, y, C) {
    if (!C)
      try {
        C = y.getAttributeNode(a);
      } catch {
        C = null;
      }
    In(t.removed, {
      attribute: C || null,
      from: y
    });
    try {
      C ? y.removeAttributeNode(C) : y.removeAttribute(a);
    } catch {
      try {
        y.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (dt || Gt)
        try {
          zt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(a, "");
        } catch {
        }
  }, Il = function(a) {
    const y = q(a);
    if (y)
      for (let C = y.length - 1; C >= 0; --C) {
        const F = y[C], z = F && F.name;
        typeof z != "string" || S[Oe(z)] || ti(a, F, z);
      }
  }, rr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const C = y.pop();
      ge(C) === at.element && Il(C);
      const z = X(C);
      if (z)
        for (let Y = z.length - 1; Y >= 0; --Y)
          y.push(z[Y]);
    }
  }, ni = function(a, y) {
    return te ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Ll = function(a) {
    if (!te)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const C = y.pop(), F = ge(C);
      if (F === at.processingInstruction || F === at.comment && $e(to, C.data)) {
        try {
          G(C);
        } catch {
        }
        continue;
      }
      if (F === at.element) {
        const Y = C, me = Oe(Pe(C));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && ni("for", me) && Y.removeAttribute("for");
        } catch {
        }
      }
      const z = X(C);
      if (z)
        for (let Y = z.length - 1; Y >= 0; --Y)
          y.push(z[Y]);
    }
  }, ri = function(a) {
    let y = null, C = null;
    if (nt)
      a = "<remove></remove>" + a;
    else {
      const Y = Wi(a, /^[\r\n\t ]+/);
      C = Y && Y[0];
    }
    On === "application/xhtml+xml" && dn === St && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const F = ye ? qe(a) : a;
    if (dn === St)
      try {
        y = new h().parseFromString(F, On);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = ue.createDocument(dn, "template", null);
      try {
        y.documentElement.innerHTML = Vr ? Ae : F;
      } catch {
      }
    }
    const z = y.body || y.documentElement;
    return a && C && z.insertBefore(n.createTextNode(C), z.childNodes[0] || null), dn === St ? he.call(y, Q ? "html" : "body")[0] : Q ? y.documentElement : z;
  }, si = function(a) {
    const y = Ee ? Ee(a) : a.ownerDocument;
    return Te.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, sr = function(a) {
    return a = Ln(a, Ke, " "), a = Ln(a, De, " "), a = Ln(a, Ge, " "), a;
  }, Kr = function(a) {
    var y;
    a.normalize();
    const C = Ee ? Ee(a) : a.ownerDocument, F = Te.call(
      C || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let z = F.nextNode();
    for (; z; )
      z.data = sr(z.data), z = F.nextNode();
    const Y = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    Y && en(Y, (me) => {
      hn(me.content) && Kr(me.content);
    });
  }, ir = function(a) {
    const y = ne ? ne(a) : null;
    return typeof y != "string" || Oe(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== q(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== M(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== X(a);
  }, hn = function(a) {
    if (!M || typeof a != "object" || a === null)
      return !1;
    try {
      return M(a) === at.documentFragment;
    } catch {
      return !1;
    }
  }, Rn = function(a) {
    if (!M || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof M(a) == "number";
    } catch {
      return !1;
    }
  };
  function Et(R, a, y) {
    R.length !== 0 && en(R, (C) => {
      C.call(t, a, y, pn);
    });
  }
  const Dl = function(a, y) {
    return !!(te && a.hasChildNodes() && !Rn(a.firstElementChild) && $e(eo, a.textContent) && $e(eo, a.innerHTML) || te && a.namespaceURI === St && $u[y] && (Rn(a.firstElementChild) || typeof a.textContent == "string" && $e(Vu[y], a.textContent)) || a.nodeType === at.processingInstruction || te && a.nodeType === at.comment && $e(to, a.data));
  }, or = function(a, y) {
    if (a instanceof RegExp)
      return $e(a, y);
    if (a instanceof Function) {
      for (var C = arguments.length, F = new Array(C > 2 ? C - 2 : 0), z = 2; z < C; z++)
        F[z - 2] = arguments[z];
      return !!a(y, ...F);
    }
    return !1;
  }, Ml = function(a, y, C) {
    if (!v[y] && ci(y) && or(O.tagNameCheck, y))
      return !1;
    if (jr && !fn[y]) {
      const F = B(a), z = X(a);
      if (z && F) {
        const Y = z.length;
        for (let me = Y - 1; me >= 0; --me) {
          const Se = a === C ? D(z[me], !0) : z[me];
          F.insertBefore(Se, V(a));
        }
      }
    }
    return zt(a), !0;
  }, ii = function(a, y, C, F) {
    return a.length === 0 ? y : y === C || y === F ? ct(y) : y;
  }, oi = function(a, y) {
    return a === y || B(a) !== null ? !1 : ($r && rr(a), !0);
  }, li = function(a, y) {
    if (Et(re.beforeSanitizeElements, a, null), oi(a, y))
      return !0;
    if (ir(a))
      return zt(a), !0;
    const C = Oe(Pe(a));
    if (_ = ii(re.uponSanitizeElement, _, w, Ce), Et(re.uponSanitizeElement, a, {
      tagName: C,
      allowedTags: _
    }), oi(a, y))
      return !0;
    if (Dl(a, C))
      return zt(a), !0;
    if (v[C] || !(c.tagCheck instanceof Function && c.tagCheck(C)) && !_[C]) {
      const z = Ml(a, C, y);
      return z === !1 && Et(re.afterSanitizeElements, a, null), z;
    }
    if (ge(a) === at.element && !Pl(a) || (C === "noscript" || C === "noembed" || C === "noframes") && $e(Hu, a.innerHTML))
      return zt(a), !0;
    if (J && a.nodeType === at.text) {
      const z = sr(a.textContent);
      a.textContent !== z && (In(t.removed, {
        element: a.cloneNode()
      }), a.textContent = z);
    }
    return Et(re.afterSanitizeElements, a, null), !1;
  }, ai = function(a, y, C) {
    if (m[y] || ni(y, a) || lt && (y === "id" || y === "name") && (C in n || C in wl))
      return !1;
    const F = S[y] || c.attributeCheck instanceof Function && c.attributeCheck(y, a);
    return I && $e(mt, y) || L && $e(Tt, y) ? !0 : F ? Gs[y] || $e(p, Ln(C, Pt, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && qi(C, "data:") === 0 && qs[a] || $ && !$e(ft, Ln(C, Pt, "")) ? !0 : !C : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ci(a) && or(O.tagNameCheck, a) && or(O.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && O.allowCustomizedBuiltInElements && or(O.tagNameCheck, C)
    );
  }, Fl = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ci = function(a) {
    return !Fl[Un(a)] && $e(f, a);
  }, kl = function(a, y, C, F) {
    if (ye && typeof A == "object" && typeof A.getAttributeType == "function" && !C)
      switch (A.getAttributeType(a, y)) {
        case "TrustedHTML":
          return qe(F);
        case "TrustedScriptURL":
          return ve(F);
      }
    return F;
  }, Ul = function(a, y, C, F) {
    try {
      C ? a.setAttributeNS(C, y, F) : a.setAttribute(y, F), ir(a) ? zt(a) : Bi(t.removed);
    } catch {
      Yt(y, a);
    }
  }, ui = function(a) {
    Et(re.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || ir(a))
      return;
    S = ii(re.uponSanitizeAttribute, S, x, Ye);
    const C = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let F = y.length;
    const z = Oe(a.nodeName);
    for (; F--; ) {
      const Y = y[F], me = Y.name, Se = Y.namespaceURI, rt = Y.value, st = Oe(me), Yr = rt;
      let Xe = me === "value" ? Yr : Tu(Yr);
      if (C.attrName = st, C.attrValue = Xe, C.keepAttr = !0, C.forceKeepAttr = void 0, Et(re.uponSanitizeAttribute, a, C), Xe = C.attrValue, Cn && (st === "id" || st === "name") && qi(Xe, wn) !== 0 && (Yt(me, a, Y), Xe = wn + Xe), te && $e(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Xe)) {
        Yt(me, a, Y);
        continue;
      }
      if (st === "attributename" && Wi(Xe, "href")) {
        Yt(me, a, Y);
        continue;
      }
      if (!C.forceKeepAttr) {
        if (!C.keepAttr) {
          Yt(me, a, Y);
          continue;
        }
        if (!W && $e(ju, Xe)) {
          Yt(me, a, Y);
          continue;
        }
        if (J && (Xe = sr(Xe)), !ai(z, st, Xe)) {
          Yt(me, a, Y);
          continue;
        }
        Xe = kl(z, st, Se, Xe), Xe !== Yr && Ul(a, me, Se, Xe);
      }
    }
    Et(re.afterSanitizeAttributes, a, null);
  }, lr = function(a) {
    let y = null;
    const C = si(a);
    for (Et(re.beforeSanitizeShadowDOM, a, null); y = C.nextNode(); )
      if (Et(re.uponSanitizeShadowNode, y, null), li(y, a), ui(y), hn(y.content) && lr(y.content), ge(y) === at.element) {
        const F = N(y);
        hn(F) && (Gr(F), lr(F));
      }
    Et(re.afterSanitizeShadowDOM, a, null);
  }, Gr = function(a) {
    const y = [{
      node: a,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const C = y.pop();
      if (C.shadow) {
        lr(C.shadow);
        continue;
      }
      const F = C.node, Y = ge(F) === at.element, me = X(F);
      if (me)
        for (let Se = me.length - 1; Se >= 0; --Se)
          y.push({
            node: me[Se],
            shadow: null
          });
      if (Y) {
        const Se = ne ? ne(F) : null;
        if (typeof Se == "string" && Oe(Se) === "template") {
          const rt = F.content;
          hn(rt) && y.push({
            node: rt,
            shadow: null
          });
        }
      }
      if (Y) {
        const Se = N(F);
        hn(Se) && y.push({
          node: null,
          shadow: Se
        }, {
          node: Se,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(R) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, C = null, F = null, z = null;
    if (Vr = !R, Vr && (R = "<!-->"), typeof R != "string" && !Rn(R) && (R = Cu(R), typeof R != "string"))
      throw Zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return R;
    _e ? (_ = Ce, S = Ye) : qr(a), (re.uponSanitizeElement.length > 0 || re.uponSanitizeAttribute.length > 0) && (_ = ct(_)), re.uponSanitizeAttribute.length > 0 && (S = ct(S)), t.removed = [];
    const Y = $r && typeof R != "string" && Rn(R);
    if (Y) {
      Ll(R);
      const rt = Pe(R);
      if (typeof rt == "string") {
        const st = Oe(rt);
        if (!_[st] || v[st])
          throw nr(R), Zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (ir(R))
        throw nr(R), Zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Gr(R);
      } catch (st) {
        throw nr(R), st;
      }
    } else if (Rn(R))
      y = ri("<!---->"), C = y.ownerDocument.importNode(R, !0), C.nodeType === at.element && C.nodeName === "BODY" || C.nodeName === "HTML" ? y = C : y.appendChild(C), Gr(C);
    else {
      if (!dt && !J && !Q && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return ye && Me ? qe(R) : R;
      if (y = ri(R), !y)
        return dt ? null : Me ? Ae : "";
    }
    y && nt && zt(y.firstChild);
    const me = Y ? R : y;
    try {
      const rt = si(me);
      for (; F = rt.nextNode(); )
        li(F, me), ui(F), hn(F.content) && lr(F.content);
    } catch (rt) {
      throw Y && (nr(R), en(t.removed, (st) => {
        st.element && rr(st.element);
      })), rt;
    }
    if (Y)
      return en(t.removed, (rt) => {
        rt.element && rr(rt.element);
      }), J && Kr(R), R;
    if (dt) {
      if (J && Kr(y), Gt)
        for (z = ie.call(y.ownerDocument); y.firstChild; )
          z.appendChild(y.firstChild);
      else
        z = y;
      return (S.shadowroot || S.shadowrootmode) && (z = xe.call(r, z, !0)), z;
    }
    let Se = Q ? y.outerHTML : y.innerHTML;
    return Q && _["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && $e(ku, y.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Se), J && (Se = sr(Se)), ye && Me ? qe(Se) : Se;
  }, t.setConfig = function() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qr(R), _e = !0, Ce = _, Ye = S;
  }, t.clearConfig = function() {
    pn = null, _e = !1, Ce = null, Ye = null, ye = je, Ae = "";
  }, t.isValidAttribute = function(R, a, y) {
    pn || qr({});
    const C = Oe(R), F = Oe(a);
    return ai(C, F, y);
  }, t.addHook = function(R, a) {
    typeof a == "function" && ot(re, R) && In(re[R], a);
  }, t.removeHook = function(R, a) {
    if (ot(re, R)) {
      if (a !== void 0) {
        const y = _u(re[R], a);
        return y === -1 ? void 0 : vu(re[R], y, 1)[0];
      }
      return Bi(re[R]);
    }
  }, t.removeHooks = function(R) {
    ot(re, R) && (re[R] = []);
  }, t.removeAllHooks = function() {
    re = no();
  }, t;
}
var Wu = Tl();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bs, ro;
function Ku() {
  if (ro) return bs;
  ro = 1;
  var e = /["'&<>]/;
  bs = t;
  function t(n) {
    var r = "" + n, s = e.exec(r);
    if (!s)
      return r;
    var i, o = "", l = 0, u = 0;
    for (l = s.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
        case 34:
          i = "&quot;";
          break;
        case 38:
          i = "&amp;";
          break;
        case 39:
          i = "&#39;";
          break;
        case 60:
          i = "&lt;";
          break;
        case 62:
          i = "&gt;";
          break;
        default:
          continue;
      }
      u !== l && (o += r.substring(u, l)), u = l + 1, o += i;
    }
    return u !== l ? o + r.substring(u, l) : o;
  }
  return bs;
}
var Gu = Ku();
const so = /* @__PURE__ */ qu(Gu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Yu(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function d(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, u = (V) => V, g = (l.sanitize ? Wu.sanitize : u) || u, h = l.escape ? so : u, A = (V) => typeof V == "string" || typeof V == "number", P = (V, X, B) => V.replace(/%n/g, "" + B).replace(/{([^{}]*)}/g, (N, q) => {
    if (X === void 0 || !(q in X))
      return h(N);
    const M = X[q];
    return A(M) ? h(`${M}`) : typeof M == "object" && A(M.value) ? (M.escape !== !1 ? so : u)(`${M.value}`) : h(N);
  });
  let G = (s?.bundle ?? Yu(e)).translations[t] || t;
  return G = Array.isArray(G) ? G[0] : G, g(typeof i == "object" || o !== void 0 ? P(
    G,
    i,
    o
  ) : G);
}
const Xu = { class: "library-vue-catalogue" }, Ju = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Zu = { class: "library-catalogue-header" }, Qu = { id: "library-catalogue-heading" }, ef = { class: "library-muted" }, tf = ["aria-label"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["aria-label"], af = ["name", "value"], cf = { class: "library-quick-filter-search" }, uf = { value: "title" }, ff = { value: "recent" }, df = { value: "publicationDate" }, pf = { value: "publication" }, hf = { value: "lastOpened" }, mf = { value: "format" }, bf = { value: "" }, yf = { value: "1" }, gf = ["value"], _f = ["value"], vf = ["aria-label"], Tf = ["aria-label"], Sf = { class: "library-filter-panel" }, Ef = { class: "library-filter-panel-summary" }, Af = ["aria-label"], xf = { value: "" }, Cf = ["value"], wf = { value: "" }, Of = ["value"], Rf = { value: "" }, Nf = ["value"], Pf = { value: "" }, If = ["value"], Lf = { value: "" }, Df = ["value"], Mf = { value: "" }, Ff = ["value"], kf = { value: "" }, Uf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "title" }, Xf = { value: "recent" }, Jf = { value: "publicationDate" }, Zf = { value: "publication" }, Qf = { value: "lastOpened" }, ed = { value: "format" }, td = ["value"], nd = ["value"], rd = ["aria-label"], sd = ["aria-label"], id = ["href"], od = { class: "library-muted library-filter-result-summary" }, ld = { key: 0 }, ad = { href: "?" }, cd = { class: "library-batch-actions" }, ud = { class: "library-settings-count-badge" }, fd = ["action"], dd = ["value"], pd = ["name", "value"], hd = {
  type: "submit",
  class: "button secondary"
}, md = { class: "library-muted" }, bd = ["aria-label"], yd = ["href", "aria-label"], gd = ["aria-label"], _d = { class: "library-pagination-range" }, vd = { key: 0 }, Td = ["href"], Sd = {
  key: 1,
  class: "library-muted"
}, Ed = ["href"], Ad = {
  key: 3,
  class: "library-muted"
}, xd = {
  key: 1,
  class: "library-periodical-groups"
}, Cd = { class: "library-periodical-groups-summary" }, wd = { id: "library-periodical-groups-heading" }, Od = { class: "library-muted" }, Rd = ["href"], Nd = { class: "library-muted" }, Pd = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Id = { class: "library-periodical-groups-summary" }, Ld = { id: "library-periodical-groups-empty-heading" }, Dd = { class: "library-muted" }, Md = { class: "library-muted" }, Fd = { class: "library-empty-actions" }, kd = ["href"], Ud = { class: "library-muted" }, Hd = { class: "library-muted" }, jd = { class: "library-empty-actions" }, $d = ["href"], Vd = { class: "library-muted" }, zd = { class: "library-empty-actions" }, Bd = ["href"], Wd = {
  href: "?",
  class: "button primary"
}, qd = { class: "library-muted" }, Kd = { class: "library-empty-actions" }, Gd = ["href"], Yd = {
  key: 4,
  class: "library-cover-gallery"
}, Xd = ["href", "aria-label"], Jd = ["src", "alt"], Zd = ["action", "onSubmit"], Qd = ["value"], ep = ["value"], tp = ["aria-pressed", "title", "aria-label", "onClick"], np = { class: "library-cover-summary" }, rp = { class: "library-cover-primary" }, sp = ["aria-label"], ip = ["href"], op = ["onToggle"], lp = ["aria-label"], ap = { class: "library-cover-meta" }, cp = {
  key: 0,
  class: "library-creator"
}, up = { class: "library-cover-detail-list" }, fp = { class: "library-cover-detail-chip" }, dp = {
  key: 0,
  class: "library-cover-detail-chip"
}, pp = {
  key: 1,
  class: "library-cover-detail-chip"
}, hp = {
  key: 2,
  class: "library-cover-detail-chip"
}, mp = {
  key: 3,
  class: "library-cover-detail-chip"
}, bp = {
  key: 4,
  class: "library-cover-detail-chip"
}, yp = {
  key: 5,
  class: "library-cover-detail-chip"
}, gp = {
  key: 6,
  class: "library-cover-detail-chip"
}, _p = {
  key: 1,
  class: "library-muted library-cover-description"
}, vp = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Tp = { key: 0 }, Sp = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Ep = {
  key: 0,
  class: "library-muted"
}, Ap = { class: "library-cover-actions" }, xp = ["href"], Cp = ["href"], wp = ["href"], Op = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ nn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ nn((s.items || []).map((v) => ({ ...v }))), o = fe(() => i), l = fe(() => s.shelves || []), u = fe(() => s.formats || []), g = fe(() => s.publications || []), h = fe(() => s.publicationSummaries || []), A = fe(() => s.publicationYears || []), P = fe(() => s.creators || []), D = fe(() => s.scanStatuses || []), G = fe(() => s.workflowStatuses || []), V = fe(() => s.genres || []), X = fe(() => s.classifications || []), B = fe(() => s.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), N = /* @__PURE__ */ nn({
      q: s.activeFilters?.q || "",
      type: s.activeFilters?.type || "",
      publication: s.activeFilters?.publication || "",
      year: s.activeFilters?.year || "",
      creator: s.activeFilters?.creator || "",
      format: s.activeFilters?.format || "",
      tag: s.activeFilters?.tag || "",
      shelf: s.activeFilters?.shelf || "",
      status: s.activeFilters?.status || "",
      workflowStatus: s.activeFilters?.workflowStatus || "",
      genre: s.activeFilters?.genre || "",
      classification: s.activeFilters?.classification || "",
      scannerConflicts: s.activeFilters?.scannerConflicts || "",
      starred: s.activeFilters?.starred || "",
      sort: s.activeFilters?.sort || "title"
    }), q = fe(() => s.settingsUrl || ""), M = fe(() => s.requestToken || ""), ne = fe(() => s.metadataExportUrl || ""), Ee = fe(() => s.metadataSidecarManifestUrl || ""), ge = fe(() => s.metadataSidecarBundleUrl || ""), Pe = fe(() => s.catalogueEndpointUrl || "/apps/library/catalogue"), ye = fe(() => s.batchTagUrl || "/apps/library/bulk/tags"), Ae = fe(() => s.scannerConflictReviewUrl || "?scannerConflicts=1"), je = fe(() => Number(s.rootCount || 0)), We = fe(() => Number(s.enabledRootCount || 0)), Re = fe(() => je.value === 0), tt = fe(() => je.value > 0 && We.value === 0), qe = fe(() => k.value.length > 0), ve = {
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
    }, k = fe(() => Object.entries(ve).map(([v, m]) => ({ key: v, label: m, value: N[v] || "" })).filter((v) => String(v.value).trim() !== "")), U = fe(() => Object.entries(N).filter(([v, m]) => !["q", "sort", "starred"].includes(v) && String(m || "").trim() !== "").map(([v, m]) => ({ key: v, value: m }))), ue = fe(() => Object.entries(N).filter(([v, m]) => String(m || "").trim() !== "").map(([v, m]) => ({ key: v, value: m }))), Te = /* @__PURE__ */ nn({}), ie = /* @__PURE__ */ ga(null);
    let he = null;
    function xe(v) {
      const m = new URLSearchParams(new FormData(v));
      for (const c of Array.from(m.keys()))
        String(m.get(c) || "").trim() === "" && m.delete(c);
      return m.delete("page"), m;
    }
    function re(v) {
      i.splice(0, i.length, ...(v.items || []).map((m) => ({ ...m })));
      for (const m of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(v, m) && (s[m] = v[m]);
      Object.assign(N, v.activeFilters || {});
    }
    async function Ke(v) {
      const m = v?.currentTarget?.tagName === "FORM" ? v.currentTarget : v?.currentTarget?.form;
      if (!m) return;
      const L = xe(m).toString(), I = L ? `?${L}` : "", $ = await fetch(Pe.value + I, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!$.ok) {
        m.submit();
        return;
      }
      re(await $.json()), history.replaceState({}, "", L ? `?${L}` : window.location.pathname);
    }
    function De(v) {
      Ke(v);
    }
    function Ge(v) {
      window.clearTimeout(he), he = window.setTimeout(() => De(v), 350);
    }
    function mt(v) {
      const m = new URLSearchParams();
      for (const [L, I] of Object.entries(N)) {
        const $ = String(I || "").trim();
        $ !== "" && L !== v && !(L === "sort" && $ === "title") && m.set(L, $);
      }
      const c = m.toString();
      return c ? `?${c}` : "?";
    }
    function Tt() {
      return mt("q");
    }
    function ft(v) {
      return String(v || "").toUpperCase();
    }
    function Pt(v) {
      return v.nextcloudTags || [];
    }
    function f(v) {
      const m = new URLSearchParams(window.location.search);
      return m.set("publication", v), m.set("sort", "publication"), m.delete("page"), `?${m.toString()}`;
    }
    function p(v, m) {
      Te[v] = !!m?.currentTarget?.open;
    }
    function _(v) {
      const m = String(v?.tagName || "").toLowerCase();
      return v?.isContentEditable || ["input", "select", "textarea", "button"].includes(m);
    }
    function w(v) {
      v.key !== "/" || v.metaKey || v.ctrlKey || v.altKey || v.shiftKey || _(v.target) || (v.preventDefault(), ie.value?.focus(), ie.value?.select?.());
    }
    function S(v) {
      v.key !== "Escape" || document.activeElement !== ie.value || N.q === "" || (v.preventDefault(), N.q = "", ie.value.value = "", window.clearTimeout(he), De({ currentTarget: ie.value }));
    }
    function x(v) {
      w(v), S(v);
    }
    Wo(() => {
      window.addEventListener("keydown", x);
    }), qo(() => {
      window.removeEventListener("keydown", x);
    });
    async function O(v, m) {
      const c = m?.currentTarget?.closest?.("form") || m?.currentTarget;
      if (!c || !v?.starUrl) return;
      const L = !!v.starred;
      v.starred = !L;
      try {
        (await fetch(v.starUrl, {
          method: "POST",
          body: new FormData(c),
          credentials: "same-origin"
        })).ok || (v.starred = L);
      } catch {
        v.starred = L;
      }
    }
    return (v, m) => (H(), j("div", Xu, [
      b("section", Ju, [
        b("div", Zu, [
          b("div", null, [
            b("h2", Qu, T(E(d)("library", "Publication catalogue")), 1),
            b("p", ef, T(E(d)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          b("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": E(d)("library", "Library actions")
          }, [
            b("a", {
              href: q.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, T(E(d)("library", "Settings")), 9, nf),
            ne.value ? (H(), j("a", {
              key: 0,
              href: ne.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, T(E(d)("library", "Export corrected metadata")), 9, rf)) : Ie("", !0),
            Ee.value ? (H(), j("a", {
              key: 1,
              href: Ee.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, T(E(d)("library", "Sidecar manifest")), 9, sf)) : Ie("", !0),
            ge.value ? (H(), j("a", {
              key: 2,
              href: ge.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, T(E(d)("library", "Sidecar ZIP")), 9, of)) : Ie("", !0)
          ], 8, tf)
        ]),
        b("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": E(d)("library", "Quick catalogue filters"),
          onSubmit: pr(Ke, ["prevent"])
        }, [
          (H(!0), j(le, null, ke(U.value, (c) => (H(), j("input", {
            key: c.key,
            type: "hidden",
            name: c.key,
            value: c.value
          }, null, 8, af))), 128)),
          b("label", cf, [
            oe(T(E(d)("library", "Search")) + " ", 1),
            m[18] || (m[18] = b("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Fe(b("input", {
              ref_key: "quickSearchInput",
              ref: ie,
              "onUpdate:modelValue": m[0] || (m[0] = (c) => N.q = c),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: Ge
            }, null, 544), [
              [cs, N.q]
            ])
          ]),
          b("label", null, [
            oe(T(E(d)("library", "Sort")) + " ", 1),
            Fe(b("select", {
              "onUpdate:modelValue": m[1] || (m[1] = (c) => N.sort = c),
              name: "sort",
              onChange: Ke
            }, [
              b("option", uf, T(E(d)("library", "Title")), 1),
              b("option", ff, T(E(d)("library", "Recently added")), 1),
              b("option", df, T(E(d)("library", "Publication date")), 1),
              b("option", pf, T(E(d)("library", "Series")), 1),
              b("option", hf, T(E(d)("library", "Recently opened")), 1),
              b("option", mf, T(E(d)("library", "Format")), 1)
            ], 544), [
              [Je, N.sort]
            ])
          ]),
          b("label", null, [
            oe(T(E(d)("library", "Starred")) + " ", 1),
            Fe(b("select", {
              "onUpdate:modelValue": m[2] || (m[2] = (c) => N.starred = c),
              name: "starred",
              onChange: Ke
            }, [
              b("option", bf, T(E(d)("library", "All")), 1),
              b("option", yf, T(E(d)("library", "Starred")), 1)
            ], 544), [
              [Je, N.starred]
            ])
          ]),
          b("label", null, [
            oe(T(E(d)("library", "Size")) + " ", 1),
            b("select", {
              value: B.value.limit,
              name: "limit",
              onChange: Ke
            }, [
              (H(), j(le, null, ke(r, (c) => b("option", {
                key: c,
                value: c
              }, T(c), 9, _f)), 64))
            ], 40, gf)
          ]),
          b("button", {
            type: "submit",
            class: "button primary",
            "aria-label": E(d)("library", "Apply catalogue filters")
          }, T(E(d)("library", "Apply filters")), 9, vf),
          b("a", {
            href: "?",
            class: "button secondary",
            "aria-label": E(d)("library", "Clear catalogue filters")
          }, T(E(d)("library", "Clear all")), 9, Tf)
        ], 40, lf),
        b("details", Sf, [
          b("summary", Ef, T(E(d)("library", "Show catalogue filters")), 1),
          b("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": E(d)("library", "Catalogue search and filters"),
            onSubmit: pr(Ke, ["prevent"])
          }, [
            b("label", null, [
              oe(T(E(d)("library", "Search title / author")) + " ", 1),
              Fe(b("input", {
                "onUpdate:modelValue": m[3] || (m[3] = (c) => N.q = c),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [cs, N.q]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Type")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[4] || (m[4] = (c) => N.type = c),
                name: "type"
              }, [
                b("option", xf, T(E(d)("library", "All types")), 1),
                (H(), j(le, null, ke(n, (c) => b("option", {
                  key: c,
                  value: c
                }, T(c), 9, Cf)), 64))
              ], 512), [
                [Je, N.type]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Series / periodical")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[5] || (m[5] = (c) => N.publication = c),
                name: "publication"
              }, [
                b("option", wf, T(E(d)("library", "All series and periodicals")), 1),
                (H(!0), j(le, null, ke(g.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, Of))), 128))
              ], 512), [
                [Je, N.publication]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Publication year")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[6] || (m[6] = (c) => N.year = c),
                name: "year"
              }, [
                b("option", Rf, T(E(d)("library", "All years")), 1),
                (H(!0), j(le, null, ke(A.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, Nf))), 128))
              ], 512), [
                [Je, N.year]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Creator")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[7] || (m[7] = (c) => N.creator = c),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                b("option", Pf, T(E(d)("library", "All creators")), 1),
                (H(!0), j(le, null, ke(P.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, If))), 128))
              ], 512), [
                [Je, N.creator]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Nextcloud tag")) + " ", 1),
              Fe(b("input", {
                "onUpdate:modelValue": m[8] || (m[8] = (c) => N.tag = c),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [cs, N.tag]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Format")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[9] || (m[9] = (c) => N.format = c),
                name: "format"
              }, [
                b("option", Lf, T(E(d)("library", "All formats")), 1),
                (H(!0), j(le, null, ke(u.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(ft(c)), 9, Df))), 128))
              ], 512), [
                [Je, N.format]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Shelf")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[10] || (m[10] = (c) => N.shelf = c),
                name: "shelf"
              }, [
                b("option", Mf, T(E(d)("library", "All shelves")), 1),
                (H(!0), j(le, null, ke(l.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, Ff))), 128))
              ], 512), [
                [Je, N.shelf]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Scan status")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[11] || (m[11] = (c) => N.status = c),
                name: "status"
              }, [
                b("option", kf, T(E(d)("library", "All scan statuses")), 1),
                (H(!0), j(le, null, ke(D.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, Uf))), 128))
              ], 512), [
                [Je, N.status]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Workflow status")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[12] || (m[12] = (c) => N.workflowStatus = c),
                name: "workflowStatus"
              }, [
                b("option", Hf, T(E(d)("library", "All workflow statuses")), 1),
                (H(!0), j(le, null, ke(G.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, jf))), 128))
              ], 512), [
                [Je, N.workflowStatus]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Genre")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[13] || (m[13] = (c) => N.genre = c),
                name: "genre"
              }, [
                b("option", $f, T(E(d)("library", "All genres")), 1),
                (H(!0), j(le, null, ke(V.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, Vf))), 128))
              ], 512), [
                [Je, N.genre]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Classification")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[14] || (m[14] = (c) => N.classification = c),
                name: "classification"
              }, [
                b("option", zf, T(E(d)("library", "All classifications")), 1),
                (H(!0), j(le, null, ke(X.value, (c) => (H(), j("option", {
                  key: c,
                  value: c
                }, T(c), 9, Bf))), 128))
              ], 512), [
                [Je, N.classification]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Scanner conflicts")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[15] || (m[15] = (c) => N.scannerConflicts = c),
                name: "scannerConflicts"
              }, [
                b("option", Wf, T(E(d)("library", "All metadata")), 1),
                b("option", qf, T(E(d)("library", "Needs review")), 1)
              ], 512), [
                [Je, N.scannerConflicts]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Starred")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[16] || (m[16] = (c) => N.starred = c),
                name: "starred"
              }, [
                b("option", Kf, T(E(d)("library", "All publications")), 1),
                b("option", Gf, T(E(d)("library", "Starred only")), 1)
              ], 512), [
                [Je, N.starred]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Sort")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": m[17] || (m[17] = (c) => N.sort = c),
                name: "sort"
              }, [
                b("option", Yf, T(E(d)("library", "Title")), 1),
                b("option", Xf, T(E(d)("library", "Recently added")), 1),
                b("option", Jf, T(E(d)("library", "Publication date")), 1),
                b("option", Zf, T(E(d)("library", "Series / periodical")), 1),
                b("option", Qf, T(E(d)("library", "Recently opened")), 1),
                b("option", ed, T(E(d)("library", "Format")), 1)
              ], 512), [
                [Je, N.sort]
              ])
            ]),
            b("label", null, [
              oe(T(E(d)("library", "Page size")) + " ", 1),
              b("select", {
                value: B.value.limit,
                name: "limit"
              }, [
                (H(), j(le, null, ke(r, (c) => b("option", {
                  key: c,
                  value: c
                }, T(c), 9, nd)), 64))
              ], 8, td)
            ]),
            b("button", {
              type: "submit",
              class: "button primary",
              "aria-label": E(d)("library", "Apply catalogue filters")
            }, T(E(d)("library", "Apply filters")), 9, rd),
            b("a", {
              href: "?",
              class: "button secondary",
              "aria-label": E(d)("library", "Clear catalogue filters")
            }, T(E(d)("library", "Clear")), 9, sd),
            b("a", {
              href: Ae.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, T(E(d)("library", "Review scanner conflicts")), 9, id)
          ], 40, Af)
        ]),
        b("p", od, [
          oe(T(E(d)("library", "Showing")) + " " + T(B.value.from) + "–" + T(B.value.to) + " " + T(E(d)("library", "of")) + " " + T(B.value.total) + " " + T(E(d)("library", "catalogue items")), 1),
          k.value.length > 0 ? (H(), j("span", ld, [
            m[19] || (m[19] = oe(" · ", -1)),
            b("a", ad, T(E(d)("library", "Clear all filters")), 1)
          ])) : Ie("", !0)
        ]),
        b("details", cd, [
          b("summary", null, [
            oe(T(E(d)("library", "Batch actions for current results")) + " ", 1),
            b("span", ud, T(B.value.total) + " " + T(E(d)("library", "Current filter result")), 1)
          ]),
          b("form", {
            method: "post",
            action: ye.value,
            class: "library-batch-tag-form"
          }, [
            b("input", {
              type: "hidden",
              name: "requesttoken",
              value: M.value
            }, null, 8, dd),
            (H(!0), j(le, null, ke(ue.value, (c) => (H(), j("input", {
              key: c.key,
              type: "hidden",
              name: c.key,
              value: c.value
            }, null, 8, pd))), 128)),
            b("label", null, [
              oe(T(E(d)("library", "Apply Nextcloud tag to current results")) + " ", 1),
              m[20] || (m[20] = b("input", {
                type: "text",
                name: "nextcloudTagName",
                placeholder: "batch-review"
              }, null, -1))
            ]),
            b("button", hd, T(E(d)("library", "Apply tag to filtered results")), 1),
            b("p", md, T(E(d)("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata.")), 1)
          ], 8, fd)
        ]),
        k.value.length > 0 ? (H(), j("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": E(d)("library", "Active filters")
        }, [
          b("span", null, T(E(d)("library", "Active filters")), 1),
          (H(!0), j(le, null, ke(k.value, (c) => (H(), j("a", {
            key: c.key,
            href: mt(c.key),
            class: "library-filter-chip",
            "aria-label": `${E(d)("library", "Remove filter")}: ${c.label}`
          }, [
            b("strong", null, T(c.label) + ":", 1),
            oe(" " + T(c.value) + " ", 1),
            m[21] || (m[21] = b("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, yd))), 128))
        ], 8, bd)) : Ie("", !0),
        b("nav", {
          class: "library-pagination",
          "aria-label": E(d)("library", "Catalogue pagination")
        }, [
          b("span", _d, [
            oe(T(E(d)("library", "Page")) + " " + T(B.value.page), 1),
            B.value.total > 0 ? (H(), j("span", vd, " · " + T(B.value.from) + "–" + T(B.value.to), 1)) : Ie("", !0)
          ]),
          B.value.previousUrl ? (H(), j("a", {
            key: 0,
            href: B.value.previousUrl
          }, T(E(d)("library", "Previous")), 9, Td)) : (H(), j("span", Sd, T(E(d)("library", "Previous")), 1)),
          B.value.nextUrl ? (H(), j("a", {
            key: 2,
            href: B.value.nextUrl
          }, T(E(d)("library", "Next")), 9, Ed)) : (H(), j("span", Ad, T(E(d)("library", "Next")), 1))
        ], 8, gd),
        h.value.length > 0 ? (H(), j("details", xd, [
          b("summary", Cd, T(E(d)("library", "Show top series and periodicals")), 1),
          b("h3", wd, T(E(d)("library", "Top series and periodicals")), 1),
          b("p", Od, T(E(d)("library", "Jump into recurring publications with one click.")), 1),
          b("ul", null, [
            (H(!0), j(le, null, ke(h.value, (c) => (H(), j("li", {
              key: c.publication
            }, [
              b("a", {
                href: f(c.publication)
              }, T(c.publication), 9, Rd),
              b("span", Nd, T(c.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : h.value.length === 0 ? (H(), j("details", Pd, [
          b("summary", Id, T(E(d)("library", "Show top series and periodicals")), 1),
          b("h3", Ld, T(E(d)("library", "No series or periodicals found yet")), 1),
          b("p", Dd, T(E(d)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ie("", !0),
        o.value.length === 0 ? (H(), j("div", {
          key: 3,
          class: vn(["library-empty-content", { "library-first-run-guidance": Re.value || tt.value, "library-filter-empty-state": qe.value && !Re.value && !tt.value }]),
          role: "status"
        }, [
          Re.value ? (H(), j(le, { key: 0 }, [
            b("h3", null, T(E(d)("library", "Start with one Library root")), 1),
            b("p", Md, T(E(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            b("p", Fd, [
              b("a", {
                href: q.value,
                class: "button primary"
              }, T(E(d)("library", "Add a Library root")), 9, kd),
              b("span", Ud, T(E(d)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : tt.value ? (H(), j(le, { key: 1 }, [
            b("h3", null, T(E(d)("library", "No enabled Library roots")), 1),
            b("p", Hd, T(E(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            b("p", jd, [
              b("a", {
                href: q.value,
                class: "button primary"
              }, T(E(d)("library", "Open Library settings")), 9, $d)
            ])
          ], 64)) : qe.value ? (H(), j(le, { key: 2 }, [
            b("h3", null, T(E(d)("library", "No matches for the current filters")), 1),
            b("p", Vd, T(E(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            b("p", zd, [
              b("a", {
                href: Tt(),
                class: "button secondary"
              }, T(E(d)("library", "Clear search")), 9, Bd),
              b("a", Wd, T(E(d)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (H(), j(le, { key: 3 }, [
            b("h3", null, T(E(d)("library", "No catalogue items yet")), 1),
            b("p", qd, T(E(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            b("p", Kd, [
              b("a", {
                href: q.value,
                class: "button primary"
              }, T(E(d)("library", "Run a scan from settings")), 9, Gd)
            ])
          ], 64))
        ], 2)) : (H(), j("div", Yd, [
          (H(!0), j(le, null, ke(o.value, (c) => (H(), j("article", {
            key: c.id,
            class: vn(["library-cover-card", { "library-cover-card--open": Te[c.id] }])
          }, [
            b("a", {
              class: "library-cover-link",
              href: c.openUrl,
              "aria-label": `Read ${c.title}`
            }, [
              b("img", {
                class: "library-cover-image",
                src: c.coverUrl,
                alt: `Cover for ${c.title}`,
                loading: "lazy"
              }, null, 8, Jd)
            ], 8, Xd),
            b("form", {
              method: "post",
              action: c.starUrl,
              class: "library-cover-star-form",
              onSubmit: pr((L) => O(c, L), ["prevent"])
            }, [
              b("input", {
                type: "hidden",
                name: "requesttoken",
                value: M.value
              }, null, 8, Qd),
              m[22] || (m[22] = b("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              b("input", {
                type: "hidden",
                name: "starred",
                value: c.starred ? "0" : "1"
              }, null, 8, ep),
              b("button", {
                type: "submit",
                class: vn(["library-cover-star-button", { "library-cover-star-button--starred": c.starred }]),
                "aria-pressed": c.starred ? "true" : "false",
                title: c.starred ? E(d)("library", "Unstar this publication") : E(d)("library", "Star this publication"),
                "aria-label": c.starred ? E(d)("library", "Unstar this publication") : E(d)("library", "Star this publication"),
                onClick: pr((L) => O(c, L), ["prevent"])
              }, T(c.starred ? "★" : "☆"), 11, tp)
            ], 40, Zd),
            b("div", np, [
              b("div", rp, [
                b("h3", null, [
                  c.starred ? (H(), j("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": E(d)("library", "Starred")
                  }, "★", 8, sp)) : Ie("", !0),
                  oe(T(c.title), 1)
                ]),
                b("a", {
                  class: "library-cover-read",
                  href: c.openUrl
                }, T(E(d)("library", "Read")), 9, ip)
              ]),
              b("details", {
                class: "library-cover-details",
                onToggle: (L) => p(c.id, L)
              }, [
                b("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${E(d)("library", "Show details and actions")}: ${c.title}`
                }, T(E(d)("library", "Details")), 9, lp),
                b("div", ap, [
                  c.creators ? (H(), j("p", cp, T(c.creators), 1)) : Ie("", !0),
                  b("dl", up, [
                    b("div", fp, [
                      b("dt", null, T(E(d)("library", "Type")), 1),
                      b("dd", null, T(c.publicationType), 1)
                    ]),
                    c.publication ? (H(), j("div", dp, [
                      b("dt", null, T(E(d)("library", "Series")), 1),
                      b("dd", null, T(c.publication), 1)
                    ])) : Ie("", !0),
                    c.publicationDate ? (H(), j("div", pp, [
                      b("dt", null, T(E(d)("library", "Date")), 1),
                      b("dd", null, T(c.publicationDate), 1)
                    ])) : Ie("", !0),
                    c.workflowStatus ? (H(), j("div", hp, [
                      b("dt", null, T(E(d)("library", "Status")), 1),
                      b("dd", null, T(c.workflowStatus), 1)
                    ])) : Ie("", !0),
                    c.hasScannerConflict ? (H(), j("div", mp, [
                      b("dt", null, T(E(d)("library", "Review")), 1),
                      b("dd", null, T(c.scannerConflictCount) + " fields", 1)
                    ])) : Ie("", !0),
                    c.lastOpenedAt ? (H(), j("div", bp, [
                      b("dt", null, T(E(d)("library", "Last opened")), 1),
                      b("dd", null, T(c.lastOpenedAt), 1)
                    ])) : Ie("", !0),
                    c.extension ? (H(), j("div", yp, [
                      b("dt", null, T(E(d)("library", "Format")) + ":", 1),
                      b("dd", null, T(ft(c.extension)), 1)
                    ])) : Ie("", !0),
                    c.shelf ? (H(), j("div", gp, [
                      b("dt", null, T(E(d)("library", "Shelf")), 1),
                      b("dd", null, T(c.shelf), 1)
                    ])) : Ie("", !0)
                  ]),
                  c.description ? (H(), j("p", _p, T(c.description), 1)) : Ie("", !0),
                  c.scanStatus !== "indexed" || c.scanError ? (H(), j("p", vp, [
                    oe(" scanStatus: " + T(c.scanStatus || "unknown"), 1),
                    c.scanError ? (H(), j("span", Tp, " · scanError: " + T(c.scanError), 1)) : Ie("", !0)
                  ])) : Ie("", !0),
                  b("div", Sp, [
                    Pt(c).length === 0 ? (H(), j("span", Ep, "No Nextcloud tags")) : (H(!0), j(le, { key: 1 }, ke(Pt(c), (L) => (H(), j("span", {
                      key: L.id,
                      class: "library-tag"
                    }, T(L.name), 1))), 128))
                  ]),
                  b("p", Ap, [
                    b("a", {
                      href: c.filesUrl
                    }, T(E(d)("library", "Show in Files")), 9, xp),
                    m[23] || (m[23] = oe(" · ", -1)),
                    b("a", {
                      href: c.downloadUrl
                    }, T(E(d)("library", "Download source")), 9, Cp),
                    m[24] || (m[24] = oe(" · ", -1)),
                    b("a", {
                      href: c.detailsUrl
                    }, T(E(d)("library", "Details")), 9, wp)
                  ])
                ])
              ], 40, op)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, io = uu("library", "catalogue", {}), gr = document.querySelector("#library-vue-root"), oo = {
  ...io,
  requestToken: gr?.dataset.requestToken || io.requestToken || ""
};
function ee(e) {
  return String(e ?? "");
}
function Sl(e) {
  return ee(e).toUpperCase();
}
function Rp(e, t, n, r = ee) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ee(s), i.textContent = r(s), ee(s) === ee(n) && (i.selected = !0), e.appendChild(i);
  }
}
function lo(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ee(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function bn(e, t, n, r, s, i, o = ee) {
  const l = document.createElement("label");
  l.textContent = t;
  const u = document.createElement("select");
  u.name = n;
  const g = document.createElement("option");
  g.value = "", g.textContent = s, u.appendChild(g), Rp(u, i, r, o), l.appendChild(u), e.appendChild(l);
}
function ao(e) {
  const t = ee(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Np(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function Pp(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && ee(r).trim() !== "");
}
function Ip() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Mn(e, t, n, r) {
  const s = document.createElement("a");
  return s.href = t, s.className = n, s.textContent = r, e.appendChild(s), s;
}
function Lp(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Dp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", d("library", "Catalogue search and filters")), lo(r, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), bn(r, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), lo(r, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), bn(r, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], Sl), bn(r, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), bn(r, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), bn(r, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), bn(r, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", d("library", "Apply catalogue filters")), s.textContent = d("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", d("library", "Clear catalogue filters")), i.textContent = d("library", "Clear"), r.append(s, i), r;
}
function Mp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let s = null;
  const i = () => {
    window.clearTimeout(s), s = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [A, P] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(A) || ee(P).trim() === "") continue;
    const D = document.createElement("input");
    D.type = "hidden", D.name = A, D.value = ee(P), r.appendChild(D);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = ee(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", i), o.appendChild(l), r.appendChild(o);
  const u = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [A, P, D, G] of u) {
    const V = document.createElement("label");
    V.textContent = A;
    const X = document.createElement("select");
    X.name = P;
    for (const [B, N] of G) {
      const q = document.createElement("option");
      q.value = ee(B), q.textContent = ee(N), ee(B) === ee(D) && (q.selected = !0), X.appendChild(q);
    }
    X.addEventListener("change", () => r.requestSubmit()), V.appendChild(X), r.appendChild(V);
  }
  const g = document.createElement("button");
  g.type = "submit", g.className = "button primary", g.setAttribute("aria-label", d("library", "Apply catalogue filters")), g.textContent = d("library", "Apply filters");
  const h = document.createElement("a");
  return h.href = "?", h.className = "button secondary", h.setAttribute("aria-label", d("library", "Clear catalogue filters")), h.textContent = d("library", "Clear all"), r.append(g, h), r;
}
function Fp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ee(e.settingsUrl || ""), i = ee(e.metadataExportUrl || ""), o = ee(e.batchTagUrl || "/apps/library/bulk/tags"), l = document.createElement("div");
  l.className = "library-vue-catalogue library-vue-fallback", l.dataset.vueFallback = "true";
  const u = document.createElement("section");
  u.className = "library-panel", u.setAttribute("aria-labelledby", "library-catalogue-heading");
  const g = document.createElement("div");
  g.className = "library-catalogue-header";
  const h = document.createElement("div"), A = document.createElement("h2");
  A.id = "library-catalogue-heading", A.textContent = d("library", "Publication catalogue");
  const P = document.createElement("p");
  P.className = "library-muted", P.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), h.append(A, P);
  const D = document.createElement("nav");
  if (D.className = "library-catalogue-toolbar", D.setAttribute("aria-label", d("library", "Library actions")), s) {
    const k = document.createElement("a");
    k.href = s, k.className = "button secondary", k.setAttribute("aria-label", "Open Library settings"), k.textContent = d("library", "Settings"), D.appendChild(k);
  }
  if (i) {
    const k = document.createElement("a");
    k.href = i, k.className = "button secondary", k.setAttribute("aria-label", "Export corrected metadata"), k.textContent = d("library", "Export corrected metadata"), D.appendChild(k);
  }
  if (e.metadataSidecarManifestUrl) {
    const k = document.createElement("a");
    k.href = e.metadataSidecarManifestUrl, k.className = "button secondary", k.setAttribute("aria-label", "Export sidecar manifest"), k.textContent = d("library", "Sidecar manifest"), D.appendChild(k);
  }
  if (e.metadataSidecarBundleUrl) {
    const k = document.createElement("a");
    k.href = e.metadataSidecarBundleUrl, k.className = "button secondary", k.setAttribute("aria-label", "Export sidecar ZIP"), k.textContent = d("library", "Sidecar ZIP"), D.appendChild(k);
  }
  g.append(h, D), u.appendChild(g), u.appendChild(Mp(e, r));
  const G = document.createElement("details");
  G.className = "library-filter-panel";
  const V = document.createElement("summary");
  V.className = "library-filter-panel-summary", V.textContent = d("library", "Show catalogue filters"), G.append(V, Dp(e, r)), u.appendChild(G);
  const X = document.createElement("p");
  X.className = "library-muted library-filter-result-summary", X.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const B = document.createElement("a");
  B.href = "?", B.textContent = ` ${d("library", "Clear all filters")}`, X.appendChild(B), u.appendChild(X);
  const N = document.createElement("details");
  N.className = "library-batch-actions";
  const q = document.createElement("summary");
  q.textContent = `${d("library", "Batch actions for current results")} (${r.total ?? n.length} ${d("library", "Current filter result")})`;
  const M = document.createElement("form");
  M.method = "post", M.action = o, M.className = "library-batch-tag-form";
  const ne = ao(e);
  ne && M.appendChild(ne);
  for (const [k, U] of Object.entries(e.activeFilters || {})) {
    if (ee(U).trim() === "") continue;
    const ue = document.createElement("input");
    ue.type = "hidden", ue.name = k, ue.value = ee(U), M.appendChild(ue);
  }
  const Ee = document.createElement("label");
  Ee.textContent = d("library", "Apply Nextcloud tag to current results");
  const ge = document.createElement("input");
  ge.type = "text", ge.name = "nextcloudTagName", ge.placeholder = "batch-review", Ee.appendChild(ge);
  const Pe = document.createElement("button");
  Pe.type = "submit", Pe.className = "button secondary", Pe.textContent = d("library", "Apply tag to filtered results");
  const ye = document.createElement("p");
  ye.className = "library-muted", ye.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), M.append(Ee, Pe, ye), N.append(q, M), u.appendChild(N);
  const Ae = document.createElement("nav");
  Ae.className = "library-pagination", Ae.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const je = document.createElement("span");
  je.className = "library-pagination-range", je.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, Ae.appendChild(je), u.appendChild(Ae);
  const We = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], Re = document.createElement("details");
  Re.className = We.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const tt = document.createElement("summary");
  tt.className = "library-periodical-groups-summary", tt.textContent = d("library", "Show top series and periodicals"), Re.appendChild(tt);
  const qe = document.createElement("h3");
  qe.textContent = We.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const ve = document.createElement("p");
  if (ve.className = "library-muted", ve.textContent = We.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), Re.append(qe, ve), We.length > 0) {
    const k = document.createElement("ul");
    for (const U of We) {
      const ue = document.createElement("li"), Te = document.createElement("a");
      Te.href = Np(ee(U.publication)), Te.textContent = ee(U.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${U.itemCount} items`, ue.append(Te, ie), k.appendChild(ue);
    }
    Re.appendChild(k);
  }
  if (u.appendChild(Re), n.length === 0) {
    const k = document.createElement("div"), U = Number(e.rootCount || 0), ue = Number(e.enabledRootCount || 0), Te = Pp(e);
    k.className = "library-empty-content", (U === 0 || ue === 0) && k.classList.add("library-first-run-guidance"), Te && U > 0 && ue > 0 && k.classList.add("library-filter-empty-state"), k.setAttribute("role", "status");
    const ie = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const xe = document.createElement("p");
    xe.className = "library-empty-actions", U === 0 ? (ie.textContent = d("library", "Start with one Library root"), he.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Mn(xe, s, "button primary", d("library", "Add a Library root")), Lp(xe, d("library", "Run a scan after saving a root"))) : ue === 0 ? (ie.textContent = d("library", "No enabled Library roots"), he.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Mn(xe, s, "button primary", d("library", "Open Library settings"))) : Te ? (ie.textContent = d("library", "No matches for the current filters"), he.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Mn(xe, Ip(), "button secondary", d("library", "Clear search")), Mn(xe, "?", "button primary", d("library", "Clear all filters"))) : (ie.textContent = d("library", "No catalogue items yet"), he.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Mn(xe, s, "button primary", d("library", "Run a scan from settings"))), k.append(ie, he, xe), u.appendChild(k);
  } else {
    const k = document.createElement("div");
    k.className = "library-cover-gallery";
    for (const U of n) {
      const ue = document.createElement("article");
      ue.className = "library-cover-card";
      const Te = document.createElement("a");
      Te.className = "library-cover-link", Te.href = ee(U.openUrl || "#"), Te.setAttribute("aria-label", `Read ${ee(U.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = ee(U.coverUrl || ""), ie.alt = `Cover for ${ee(U.title || "publication")}`, ie.loading = "lazy", Te.appendChild(ie);
      const he = ao(e), xe = document.createElement("form");
      xe.method = "post", xe.action = ee(U.starUrl || ""), xe.className = "library-cover-star-form", he && xe.appendChild(he);
      const re = document.createElement("input");
      re.type = "hidden", re.name = "returnTo", re.value = "catalogue";
      const Ke = document.createElement("input");
      Ke.type = "hidden", Ke.name = "starred", Ke.value = U.starred ? "0" : "1";
      const De = document.createElement("button");
      De.type = "submit", De.className = U.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", De.setAttribute("aria-pressed", U.starred ? "true" : "false"), De.setAttribute("aria-label", U.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), De.title = U.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), De.textContent = U.starred ? "★" : "☆", xe.append(re, Ke, De);
      const Ge = document.createElement("div");
      Ge.className = "library-cover-summary";
      const mt = document.createElement("h3");
      if (mt.textContent = ee(U.title || "Untitled publication"), Ge.appendChild(mt), U.creators) {
        const S = document.createElement("p");
        S.className = "library-creator", S.textContent = ee(U.creators), Ge.appendChild(S);
      }
      const Tt = document.createElement("dl");
      Tt.className = "library-cover-detail-list";
      const ft = [
        ["Type", ee(U.publicationType || "other")],
        ["Format", U.extension ? Sl(U.extension) : ""],
        ["Shelf", U.shelf ? ee(U.shelf) : ""]
      ].filter(([, S]) => S !== "");
      for (const [S, x] of ft) {
        const O = document.createElement("div");
        O.className = "library-cover-detail-chip";
        const v = document.createElement("dt");
        v.textContent = S;
        const m = document.createElement("dd");
        m.textContent = x, O.append(v, m), Tt.appendChild(O);
      }
      Ge.appendChild(Tt);
      const Pt = document.createElement("p"), f = document.createElement("a");
      f.href = ee(U.openUrl || "#"), f.textContent = d("library", "Read");
      const p = document.createElement("a");
      p.href = ee(U.filesUrl || "#"), p.textContent = d("library", "Show in Files");
      const _ = document.createElement("a");
      _.href = ee(U.downloadUrl || "#"), _.textContent = d("library", "Download source");
      const w = document.createElement("a");
      w.href = ee(U.detailsUrl || "#"), w.textContent = d("library", "Details"), Pt.append(f, document.createTextNode(" · "), p, document.createTextNode(" · "), _, document.createTextNode(" · "), w), Ge.appendChild(Pt), ue.append(Te, xe, Ge), k.appendChild(ue);
    }
    u.appendChild(k);
  }
  return l.appendChild(u), l;
}
if (gr)
  try {
    lu(Op, { state: oo }).mount(gr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), gr.replaceChildren(Fp(oo));
  }
//# sourceMappingURL=library-main.mjs.map
