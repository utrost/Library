// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {}, pn = [], _t = () => {
}, io = () => !1, vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, Cs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ae = (e, t) => Ml.call(e, t), G = Array.isArray, Ft = (e) => Wn(e) === "[object Map]", en = (e) => Wn(e) === "[object Set]", li = (e) => Wn(e) === "[object Date]", Q = (e) => typeof e == "function", Ae = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", oo = (e) => (ue(e) || Q(e)) && Q(e.then) && Q(e.catch), lo = Object.prototype.toString, Wn = (e) => lo.call(e), Ll = (e) => Wn(e).slice(8, -1), ao = (e) => Wn(e) === "[object Object]", Os = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = /* @__PURE__ */ ws(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, at = xr(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, tn = xr(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = xr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = xr(
  (e) => e ? `on${co(e)}` : ""
), At = (e, t) => !Object.is(e, t), ur = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, uo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ai;
const Cr = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ae(r) ? $l(r) : Rs(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Ae(e) || ue(e))
    return e;
}
const kl = /;(?![^(]*\))/g, Hl = /:([^]+)/, jl = /\/\*[^]*?\*\//g;
function $l(e) {
  const t = {};
  return e.replace(jl, "").split(kl).forEach((n) => {
    if (n) {
      const r = n.split(Hl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Or(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = Or(e[n]);
      r && (t += r + " ");
    }
  else if (ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ ws(Vl);
function fo(e) {
  return !!e || e === "";
}
function Bl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Ut(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Ut(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Ut(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = yt(e), r = yt(t), n || r)
    return e === t;
  if (n = G(e), r = G(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = ue(e), r = ue(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Ft(e), r = Ft(t), n || r || (n = en(e), r = en(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Ut(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Ut(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), x = (e) => Ae(e) ? e : e == null ? "" : G(e) || ue(e) && (e.toString === lo || !Q(e.toString)) ? po(e) ? x(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[qr(r, i) + " =>"] = s, n),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qr(n))
} : yt(t) ? qr(t) : ue(t) && !G(t) && !ao(t) ? String(t) : t, qr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Ne;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(
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
      const n = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ne, Ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ne === this)
        Ne = this.prevScope;
      else {
        let t = Ne;
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
function Kl() {
  return Ne;
}
let me;
const Xr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xr.has(this) && (Xr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), _o(this);
    const t = me, n = ct;
    me = this, ct = !0;
    try {
      return this.fn();
    } finally {
      yo(this), me = t, ct = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, ui(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hs(this) && this.run();
  }
  get dirty() {
    return hs(this);
  }
}
let go = 0, Dn, Mn;
function bo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mn, Mn = e;
    return;
  }
  e.next = Dn, Dn = e;
}
function Ps() {
  go++;
}
function Is() {
  if (--go > 0)
    return;
  if (Mn) {
    let t = Mn;
    for (Mn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Dn; ) {
    let t = Dn;
    for (Dn = void 0; t; ) {
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
function _o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ns(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function hs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kn) || (e.globalVersion = kn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = me, r = ct;
  me = e, ct = !0;
  try {
    _o(e);
    const s = e.fn(e._value);
    (t.version === 0 || At(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    me = n, ct = r, yo(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ns(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ct = !0;
const Eo = [];
function Ot() {
  Eo.push(ct), ct = !1;
}
function Rt() {
  const e = Eo.pop();
  ct = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = me;
    me = void 0;
    try {
      t();
    } finally {
      me = n;
    }
  }
}
let kn = 0;
class ql {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class So {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!me || !ct || me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== me)
      n = this.activeLink = new ql(me, this), me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, vo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = me.depsTail, n.nextDep = void 0, me.depsTail.nextDep = n, me.depsTail = n, me.deps === n && (me.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, kn++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Is();
    }
  }
}
function vo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        vo(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ms = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), Hn = /* @__PURE__ */ Symbol(
  ""
);
function Le(e, t, n) {
  if (ct && me) {
    let r = ms.get(e);
    r || ms.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function xt(e, t, n, r, s, i) {
  const o = ms.get(e);
  if (!o) {
    kn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(l);
  else {
    const c = G(e), m = c && Os(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((_, I) => {
        (I === "length" || I === Hn || !yt(I) && I >= d) && l(_);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), m && l(o.get(Hn)), t) {
        case "add":
          c ? m && l(o.get("length")) : (l(o.get(Jt)), Ft(e) && l(o.get(gs)));
          break;
        case "delete":
          c || (l(o.get(Jt)), Ft(e) && l(o.get(gs)));
          break;
        case "set":
          Ft(e) && l(o.get(Jt));
          break;
      }
  }
  Is();
}
function cn(e) {
  const t = /* @__PURE__ */ ce(e);
  return t === e ? t : (Le(t, "iterate", Hn), /* @__PURE__ */ ut(e) ? t : t.map(Pt));
}
function Rr(e) {
  return Le(e = /* @__PURE__ */ ce(e), "iterate", Hn), e;
}
function gt(e, t) {
  return /* @__PURE__ */ kt(e) ? bn(/* @__PURE__ */ Zt(e) ? Pt(t) : t) : Pt(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jr(this, Symbol.iterator, (e) => gt(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => G(t) ? cn(t) : t)
    );
  },
  entries() {
    return Jr(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
  },
  every(e, t) {
    return Et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Et(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => gt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Et(
      this,
      "find",
      e,
      t,
      (n) => gt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Et(
      this,
      "findLast",
      e,
      t,
      (n) => gt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zr(this, "includes", e);
  },
  indexOf(...e) {
    return Zr(this, "indexOf", e);
  },
  join(e) {
    return cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return An(this, "pop");
  },
  push(...e) {
    return An(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return An(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return An(this, "splice", e);
  },
  toReversed() {
    return cn(this).toReversed();
  },
  toSorted(e) {
    return cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return An(this, "unshift", e);
  },
  values() {
    return Jr(this, "values", (e) => gt(this, e));
  }
};
function Jr(e, t, n) {
  const r = Rr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ ut(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function Et(e, t, n, r, s, i) {
  const o = Rr(e), l = o !== e && !/* @__PURE__ */ ut(e), c = o[t];
  if (c !== Jl[t]) {
    const _ = c.apply(e, i);
    return l ? Pt(_) : _;
  }
  let m = n;
  o !== e && (l ? m = function(_, I) {
    return n.call(this, gt(e, _), I, e);
  } : n.length > 2 && (m = function(_, I) {
    return n.call(this, _, I, e);
  }));
  const d = c.call(o, m, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Rr(e), i = s !== e && !/* @__PURE__ */ ut(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(m, d, _) {
    return l && (l = !1, m = gt(e, m)), n.call(this, m, gt(e, d), _, e);
  }) : n.length > 3 && (o = function(m, d, _) {
    return n.call(this, m, d, _, e);
  }));
  const c = s[t](o, ...r);
  return l ? gt(e, c) : c;
}
function Zr(e, t, n) {
  const r = /* @__PURE__ */ ce(e);
  Le(r, "iterate", Hn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ ce(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  Ot(), Ps();
  const r = (/* @__PURE__ */ ce(e))[t].apply(e, n);
  return Is(), Rt(), r;
}
const Zl = /* @__PURE__ */ ws("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function Ql(e) {
  yt(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return Le(t, "has", e), t.hasOwnProperty(e);
}
class xo {
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
      return r === (s ? i ? ca : Ro : i ? Oo : Co).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = G(t);
    if (!s) {
      let c;
      if (o && (c = Xl[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ql;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ We(t) ? t : r
    );
    if ((yt(n) ? Ao.has(n) : Zl(n)) || (s || Le(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ We(l)) {
      const c = o && Os(n) ? l : l.value;
      return s && ue(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return ue(l) ? s ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ jn(l) : l;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = G(t) && Os(n);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ kt(i);
      if (!/* @__PURE__ */ ut(r) && !/* @__PURE__ */ kt(r) && (i = /* @__PURE__ */ ce(i), r = /* @__PURE__ */ ce(r)), !o && /* @__PURE__ */ We(i) && !/* @__PURE__ */ We(r))
        return m || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ae(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ We(t) ? t : s
    );
    return t === /* @__PURE__ */ ce(s) && c && (l ? At(r, i) && xt(t, "set", n, r) : xt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ae(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && xt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!yt(n) || !Ao.has(n)) && Le(t, "has", n), r;
  }
  ownKeys(t) {
    return Le(
      t,
      "iterate",
      G(t) ? "length" : Jt
    ), Reflect.ownKeys(t);
  }
}
class ea extends xo {
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
const ta = /* @__PURE__ */ new wo(), na = /* @__PURE__ */ new ea(), ra = /* @__PURE__ */ new wo(!0);
const bs = (e) => e, sr = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ce(s), o = Ft(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, m = s[e](...r), d = n ? bs : t ? bn : Pt;
    return !t && Le(
      i,
      "iterate",
      c ? gs : Jt
    ), Fe(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: _, done: I } = m.next();
          return I ? { value: _, done: I } : {
            value: l ? [d(_[0]), d(_[1])] : d(_),
            done: I
          };
        }
      }
    );
  };
}
function ir(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ia(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      e || (At(s, l) && Le(o, "get", s), Le(o, "get", l));
      const { has: c } = sr(o), m = t ? bs : e ? bn : Pt;
      if (c.call(o, s))
        return m(i.get(s));
      if (c.call(o, l))
        return m(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Le(/* @__PURE__ */ ce(s), "iterate", Jt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      return e || (At(s, l) && Le(o, "has", s), Le(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ce(l), m = t ? bs : e ? bn : Pt;
      return !e && Le(c, "iterate", Jt), l.forEach((d, _) => s.call(i, m(d), m(_), o));
    }
  };
  return Fe(
    n,
    e ? {
      add: ir("add"),
      set: ir("set"),
      delete: ir("delete"),
      clear: ir("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ce(this), o = sr(i), l = /* @__PURE__ */ ce(s), c = !t && !/* @__PURE__ */ ut(s) && !/* @__PURE__ */ kt(s) ? l : s;
        return o.has.call(i, c) || At(s, c) && o.has.call(i, s) || At(l, c) && o.has.call(i, l) || (i.add(c), xt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ut(i) && !/* @__PURE__ */ kt(i) && (i = /* @__PURE__ */ ce(i));
        const o = /* @__PURE__ */ ce(this), { has: l, get: c } = sr(o);
        let m = l.call(o, s);
        m || (s = /* @__PURE__ */ ce(s), m = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), m ? At(i, d) && xt(o, "set", s, i) : xt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ce(this), { has: o, get: l } = sr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ce(s), c = o.call(i, s)), l && l.call(i, s);
        const m = i.delete(s);
        return c && xt(i, "delete", s, void 0), m;
      },
      clear() {
        const s = /* @__PURE__ */ ce(this), i = s.size !== 0, o = s.clear();
        return i && xt(
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
    n[s] = sa(s, e, t);
  }), n;
}
function Ds(e, t) {
  const n = ia(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ae(n, s) && s in r ? n : r,
    s,
    i
  );
}
const oa = {
  get: /* @__PURE__ */ Ds(!1, !1)
}, la = {
  get: /* @__PURE__ */ Ds(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Ds(!0, !1)
};
const Co = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
function ua(e) {
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
function jn(e) {
  return /* @__PURE__ */ kt(e) ? e : Ms(
    e,
    !1,
    ta,
    oa,
    Co
  );
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return Ms(
    e,
    !1,
    ra,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return Ms(
    e,
    !0,
    na,
    aa,
    Ro
  );
}
function Ms(e, t, n, r, s) {
  if (!ue(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = ua(Ll(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return /* @__PURE__ */ kt(e) ? /* @__PURE__ */ Zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function da(e) {
  return !ae(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const Pt = (e) => ue(e) ? /* @__PURE__ */ jn(e) : e, bn = (e) => ue(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function M(e) {
  return /* @__PURE__ */ We(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ We(s) && !/* @__PURE__ */ We(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Po(e) {
  return /* @__PURE__ */ Zt(e) ? e : new Proxy(e, pa);
}
class ha {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new So(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    me !== this)
      return bo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return To(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ma(e, t, n = !1) {
  let r, s;
  return Q(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const or = {}, hr = /* @__PURE__ */ new WeakMap();
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = hr.get(n);
    r || hr.set(n, r = []), r.push(e);
  }
}
function ba(e, t, n = fe) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, m = (w) => s ? w : /* @__PURE__ */ ut(w) || s === !1 || s === 0 ? wt(w, 1) : wt(w);
  let d, _, I, k, K = !1, L = !1;
  if (/* @__PURE__ */ We(e) ? (_ = () => e.value, K = /* @__PURE__ */ ut(e)) : /* @__PURE__ */ Zt(e) ? (_ = () => m(e), K = !0) : G(e) ? (L = !0, K = e.some((w) => /* @__PURE__ */ Zt(w) || /* @__PURE__ */ ut(w)), _ = () => e.map((w) => {
    if (/* @__PURE__ */ We(w))
      return w.value;
    if (/* @__PURE__ */ Zt(w))
      return m(w);
    if (Q(w))
      return c ? c(w, 2) : w();
  })) : Q(e) ? t ? _ = c ? () => c(e, 2) : e : _ = () => {
    if (I) {
      Ot();
      try {
        I();
      } finally {
        Rt();
      }
    }
    const w = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [k]) : e(k);
    } finally {
      Kt = w;
    }
  } : _ = _t, t && s) {
    const w = _, J = s === !0 ? 1 / 0 : s;
    _ = () => wt(w(), J);
  }
  const F = Kl(), ee = () => {
    d.stop(), F && F.active && Cs(F.effects, d);
  };
  if (i && t) {
    const w = t;
    t = (...J) => {
      const ie = w(...J);
      return ee(), ie;
    };
  }
  let X = L ? new Array(e.length).fill(or) : or;
  const z = (w) => {
    if (!(!(d.flags & 1) || !d.dirty && !w))
      if (t) {
        const J = d.run();
        if (w || s || K || (L ? J.some((ie, te) => At(ie, X[te])) : At(J, X))) {
          I && I();
          const ie = Kt;
          Kt = d;
          try {
            const te = [
              J,
              // pass undefined as the old value when it's changed for the first time
              X === or ? void 0 : L && X[0] === or ? [] : X,
              k
            ];
            X = J, c ? c(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            Kt = ie;
          }
        }
      } else
        d.run();
  };
  return l && l(z), d = new mo(_), d.scheduler = o ? () => o(z, !1) : z, k = (w) => ga(w, !1, d), I = d.onStop = () => {
    const w = hr.get(d);
    if (w) {
      if (c)
        c(w, 4);
      else
        for (const J of w) J();
      hr.delete(d);
    }
  }, t ? r ? z(!0) : X = d.run() : o ? o(z.bind(null, !0), !0) : d.run(), ee.pause = d.pause.bind(d), ee.resume = d.resume.bind(d), ee.stop = ee, ee;
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ We(e))
    wt(e.value, t, n);
  else if (G(e))
    for (let r = 0; r < e.length; r++)
      wt(e[r], t, n);
  else if (en(e) || Ft(e))
    e.forEach((r) => {
      wt(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      wt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && wt(e[r], t, n);
  }
  return e;
}
function Gn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Pr(s, t, n);
  }
}
function ft(e, t, n, r) {
  if (Q(e)) {
    const s = Gn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Pr(i, t, n);
    }), s;
  }
  if (G(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(ft(e[i], t, n, r));
    return s;
  }
}
function Pr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const c = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, c, m) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ot(), Gn(i, null, 10, [
        e,
        c,
        m
      ]), Rt();
      return;
    }
  }
  _a(e, n, s, r, o);
}
function _a(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const ze = [];
let mt = -1;
const hn = [];
let Lt = null, fn = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let mr = null;
function No(e) {
  const t = mr || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = mt + 1, n = ze.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ze[r], i = $n(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = $n(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $n(n) ? ze.push(e) : ze.splice(ya(t), 0, e), e.flags |= 1, Do();
  }
}
function Do() {
  mr || (mr = Io.then(Lo));
}
function Ta(e) {
  if (!G(e))
    Lt && e.id === -1 ? Lt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  Do();
}
function di(e, t, n = mt + 1) {
  for (; n < ze.length; n++) {
    const r = ze[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mo(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, r) => $n(n) - $n(r)
    );
    if (hn.length = 0, Lt) {
      for (let n = 0; n < t.length; n++)
        Lt.push(t[n]);
      return;
    }
    for (Lt = t, fn = 0; fn < Lt.length; fn++) {
      const n = Lt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Lt = null, fn = 0;
  }
}
const $n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (mt = 0; mt < ze.length; mt++) {
      const t = ze[mt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; mt < ze.length; mt++) {
      const t = ze[mt];
      t && (t.flags &= -2);
    }
    mt = -1, ze.length = 0, Mo(), mr = null, (ze.length || hn.length) && Lo();
  }
}
let it = null, Fo = null;
function gr(e) {
  const t = it;
  return it = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = it, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && vi(-1);
    const i = gr(t), o = Qt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Qt.length; c > o; c--) ol();
      gr(i), r._d && vi(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function je(e, t) {
  if (it === null)
    return e;
  const n = Lr(it), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = fe] = t[s];
    i && (Q(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && wt(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Bt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Ot(), ft(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Rt());
  }
}
function Sa(e, t) {
  if (Be) {
    let n = Be.provides;
    const r = Be.parent && Be.parent.provides;
    r === n && (n = Be.provides = Object.create(r)), n[e] = t;
  }
}
function fr(e, t, n = !1) {
  const r = Tc();
  if (r || mn) {
    let s = mn ? mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(r && r.proxy) : t;
  }
}
const va = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => fr(va);
function Qr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = fe) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Fe({}, n), c = t && r || !t && i !== "post";
  let m;
  if (Bn) {
    if (i === "sync") {
      const k = Aa();
      m = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!c) {
      const k = () => {
      };
      return k.stop = _t, k.resume = _t, k.pause = _t, k;
    }
  }
  const d = Be;
  l.call = (k, K, L) => ft(k, d, K, L);
  let _ = !1;
  i === "post" ? l.scheduler = (k) => {
    qe(k, d && d.suspense);
  } : i !== "sync" && (_ = !0, l.scheduler = (k, K) => {
    K ? k() : Fs(k);
  }), l.augmentJob = (k) => {
    t && (k.flags |= 4), _ && (k.flags |= 2, d && (k.id = d.uid, k.i = d));
  };
  const I = ba(e, t, l);
  return Bn && (m ? m.push(I) : c && I()), I;
}
function xa(e, t, n) {
  const r = this.proxy, s = Ae(e) ? e.includes(".") ? ko(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Q(t) ? i = t : (i = t.handler, n = t);
  const o = Kn(this), l = Uo(s, i.bind(r), n);
  return o(), l;
}
function ko(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, es = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== It) {
        t = n;
        break;
      }
  }
  return t;
}
function Ho(e) {
  if (!ks(e))
    return Ir(e.type) && e.children ? Ca(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function Us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Us(
      Ir(n.type) && Ho(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const br = /* @__PURE__ */ new WeakMap();
function Ln(e, t, n, r, s = !1) {
  if (G(e)) {
    e.forEach(
      (L, F) => Ln(
        L,
        t && (G(t) ? t[F] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Fn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ln(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Lr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, m = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, _ = l.setupState, I = /* @__PURE__ */ ce(_), k = _ === fe ? io : (L) => pi(d, L) ? !1 : ae(I, L), K = (L, F) => !(F && pi(d, F));
  if (m != null && m !== c) {
    if (hi(t), Ae(m))
      d[m] = null, k(m) && (_[m] = null);
    else if (/* @__PURE__ */ We(m)) {
      const L = t;
      K(m, L.k) && (m.value = null), L.k && (d[L.k] = null);
    }
  }
  if (Q(c))
    Gn(c, l, 12, [o, d]);
  else {
    const L = Ae(c), F = /* @__PURE__ */ We(c);
    if (L || F) {
      const ee = () => {
        if (e.f) {
          const X = L ? k(c) ? _[c] : d[c] : K() || !e.k ? c.value : d[e.k];
          if (s)
            G(X) && Cs(X, i);
          else if (G(X))
            X.includes(i) || X.push(i);
          else if (L)
            d[c] = [i], k(c) && (_[c] = d[c]);
          else {
            const z = [i];
            K(c, e.k) && (c.value = z), e.k && (d[e.k] = z);
          }
        } else L ? (d[c] = o, k(c) && (_[c] = o)) : F && (K(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const X = () => {
          ee(), br.delete(e);
        };
        X.id = -1, br.set(e, X), qe(X, n);
      } else
        hi(e), ee();
    }
  }
}
function hi(e) {
  const t = br.get(e);
  t && (t.flags |= 8, br.delete(e));
}
Cr().requestIdleCallback;
Cr().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  $o(e, "a", t);
}
function Ra(e, t) {
  $o(e, "da", t);
}
function $o(e, t, n = Be) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Nr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ks(s.parent.vnode) && Pa(r, t, n, s), s = s.parent;
  }
}
function Pa(e, t, n, r) {
  const s = Nr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Vo(() => {
    Cs(r[t], s);
  }, n);
}
function Nr(e, t, n = Be, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ot();
      const l = Kn(n), c = ft(t, n, e, o);
      return l(), Rt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Nt = (e) => (t, n = Be) => {
  (!Bn || e === "sp") && Nr(e, (...r) => t(...r), n);
}, Ia = Nt("bm"), Na = Nt("m"), Da = Nt(
  "bu"
), Ma = Nt("u"), La = Nt(
  "bum"
), Vo = Nt("um"), Fa = Nt(
  "sp"
), Ua = Nt("rtg"), ka = Nt("rtc");
function Ha(e, t = Be) {
  Nr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function $e(e, t, n, r) {
  let s;
  const i = n, o = G(e);
  if (o || Ae(e)) {
    const l = o && /* @__PURE__ */ Zt(e);
    let c = !1, m = !1;
    l && (c = !/* @__PURE__ */ ut(e), m = /* @__PURE__ */ kt(e), e = Rr(e)), s = new Array(e.length);
    for (let d = 0, _ = e.length; d < _; d++)
      s[d] = t(
        c ? m ? bn(Pt(e[d])) : Pt(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (ue(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, m = l.length; c < m; c++) {
        const d = l[c];
        s[c] = t(e[d], d, c, i);
      }
    }
  else
    s = [];
  return s;
}
const ys = (e) => e ? ul(e) ? Lr(e) : ys(e.parent) : null, Un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ys(e.parent),
    $root: (e) => ys(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = No.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), ts = (e, t) => e !== fe && !e.__isScriptSetup && ae(e, t), $a = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const I = o[t];
      if (I !== void 0)
        switch (I) {
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
        if (ts(r, t))
          return o[t] = 1, r[t];
        if (s !== fe && ae(s, t))
          return o[t] = 2, s[t];
        if (ae(i, t))
          return o[t] = 3, i[t];
        if (n !== fe && ae(n, t))
          return o[t] = 4, n[t];
        Ts && (o[t] = 0);
      }
    }
    const m = Un[t];
    let d, _;
    if (m)
      return t === "$attrs" && Le(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== fe && ae(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      _ = c.config.globalProperties, ae(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ts(s, t) ? (s[t] = n, !0) : r !== fe && ae(r, t) ? (r[t] = n, !0) : ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== fe && l[0] !== "$" && ae(e, l) || ts(t, l) || ae(i, l) || ae(r, l) || ae(Un, l) || ae(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ts = !0;
function Va(e) {
  const t = Bo(e), n = e.proxy, r = e.ctx;
  Ts = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: m,
    // lifecycle
    created: d,
    beforeMount: _,
    mounted: I,
    beforeUpdate: k,
    updated: K,
    activated: L,
    deactivated: F,
    beforeDestroy: ee,
    beforeUnmount: X,
    destroyed: z,
    unmounted: w,
    render: J,
    renderTracked: ie,
    renderTriggered: te,
    errorCaptured: q,
    serverPrefetch: ge,
    // public API
    expose: Ee,
    inheritAttrs: Ue,
    // assets
    components: Je,
    directives: De,
    filters: de
  } = t;
  if (m && za(m, r, null), o)
    for (const le in o) {
      const oe = o[le];
      Q(oe) && (r[le] = oe.bind(n));
    }
  if (s) {
    const le = s.call(n, n);
    ue(le) && (e.data = /* @__PURE__ */ jn(le));
  }
  if (Ts = !0, i)
    for (const le in i) {
      const oe = i[le], ot = Q(oe) ? oe.bind(n, n) : Q(oe.get) ? oe.get.bind(n, n) : _t, Ht = !Q(oe) && Q(oe.set) ? oe.set.bind(n) : _t, Tt = Oe({
        get: ot,
        set: Ht
      });
      Object.defineProperty(r, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (rt) => Tt.value = rt
      });
    }
  if (l)
    for (const le in l)
      zo(l[le], r, n, le);
  if (c) {
    const le = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(le).forEach((oe) => {
      Sa(oe, le[oe]);
    });
  }
  d && gi(d, e, "c");
  function h(le, oe) {
    G(oe) ? oe.forEach((ot) => le(ot.bind(n))) : oe && le(oe.bind(n));
  }
  if (h(Ia, _), h(Na, I), h(Da, k), h(Ma, K), h(Oa, L), h(Ra, F), h(Ha, q), h(ka, ie), h(Ua, te), h(La, X), h(Vo, w), h(Fa, ge), G(Ee))
    if (Ee.length) {
      const le = e.exposed || (e.exposed = {});
      Ee.forEach((oe) => {
        Object.defineProperty(le, oe, {
          get: () => n[oe],
          set: (ot) => n[oe] = ot,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === _t && (e.render = J), Ue != null && (e.inheritAttrs = Ue), Je && (e.components = Je), De && (e.directives = De), ge && jo(e);
}
function za(e, t, n = _t) {
  G(e) && (e = Es(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ue(s) ? "default" in s ? i = fr(
      s.from || r,
      s.default,
      !0
    ) : i = fr(s.from || r) : i = fr(s), /* @__PURE__ */ We(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  ft(
    G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? ko(n, r) : () => n[r];
  if (Ae(e)) {
    const i = t[e];
    Q(i) && Qr(s, i);
  } else if (Q(e))
    Qr(s, e.bind(n));
  else if (ue(e))
    if (G(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(i) && Qr(s, i, e);
    }
}
function Bo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (m) => _r(c, m, o, !0)
  ), _r(c, t, o)), ue(t) && i.set(t, c), c;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && _r(e, i, n, !0), s && s.forEach(
    (o) => _r(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Ba[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ba = {
  data: bi,
  props: _i,
  emits: _i,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Ga,
  // provide / inject
  provide: bi,
  inject: Wa
};
function bi(e, t) {
  return t ? e ? function() {
    return Fe(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rn(Es(e), Es(t));
}
function Es(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ve(e[r], t[r]);
  return n;
}
function Wo() {
  return {
    app: null,
    config: {
      isNativeTag: io,
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
let Ka = 0;
function Ya(e, t) {
  return function(r, s = null) {
    Q(r) || (r = Fe({}, r)), s != null && !ue(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const m = i.app = {
      _uid: Ka++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: wc,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ..._) {
        return o.has(d) || (d && Q(d.install) ? (o.add(d), d.install(m, ..._)) : Q(d) && (o.add(d), d(m, ..._))), m;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), m;
      },
      component(d, _) {
        return _ ? (i.components[d] = _, m) : i.components[d];
      },
      directive(d, _) {
        return _ ? (i.directives[d] = _, m) : i.directives[d];
      },
      mount(d, _, I) {
        if (!c) {
          const k = m._ceVNode || Ct(r, s);
          return k.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(k, d, I), c = !0, m._container = d, d.__vue_app__ = m, Lr(k.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (ft(
          l,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(d, _) {
        return i.provides[d] = _, m;
      },
      runWithContext(d) {
        const _ = mn;
        mn = m;
        try {
          return d();
        } finally {
          mn = _;
        }
      }
    };
    return m;
  };
}
let mn = null;
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${at(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || fe;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Ae(d) ? d.trim() : d)), o.number && (s = s.map(wr)));
  let l, c = r[l = Yr(t)] || // also try camelCase event handler (#2249)
  r[l = Yr(at(t))];
  !c && i && (c = r[l = Yr(tn(t))]), c && ft(
    c,
    e,
    6,
    s
  );
  const m = r[l + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ft(
      m,
      e,
      6,
      s
    );
  }
}
const Ja = /* @__PURE__ */ new WeakMap();
function Go(e, t, n = !1) {
  const r = n ? Ja : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!Q(e)) {
    const c = (m) => {
      const d = Go(m, t, !0);
      d && (l = !0, Fe(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (ue(e) && r.set(e, null), null) : (G(i) ? i.forEach((c) => o[c] = null) : Fe(o, i), ue(e) && r.set(e, o), o);
}
function Dr(e, t) {
  return !e || !vr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, tn(t)) || ae(e, t));
}
function yi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: m,
    renderCache: d,
    props: _,
    data: I,
    setupState: k,
    ctx: K,
    inheritAttrs: L
  } = e, F = gr(e);
  let ee, X;
  try {
    if (n.shapeFlag & 4) {
      const w = s || r, J = w;
      ee = bt(
        m.call(
          J,
          w,
          d,
          _,
          k,
          I,
          K
        )
      ), X = l;
    } else {
      const w = t;
      ee = bt(
        w.length > 1 ? w(
          _,
          { attrs: l, slots: o, emit: c }
        ) : w(
          _,
          null
        )
      ), X = t.props ? l : Za(l);
    }
  } catch (w) {
    Qt.length = 0, Pr(w, e, 1), ee = Ct(It);
  }
  let z = ee;
  if (X && L !== !1) {
    const w = Object.keys(X), { shapeFlag: J } = z;
    w.length && J & 7 && (i && w.some(Ar) && (X = Qa(
      X,
      i
    )), z = _n(z, X, !1, !0));
  }
  if (n.dirs && (z = _n(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const w = Ir(z.type) && Ho(z) || z;
    Us(w, n.transition);
  }
  return ee = z, gr(F), ee;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ar(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ec(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, m = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ti(r, o, m) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let _ = 0; _ < d.length; _++) {
        const I = d[_];
        if (Ko(o, r, I) && !Dr(m, I))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ti(r, o, m) : !0 : !!o;
  return !1;
}
function Ti(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Ko(t, e, i) && !Dr(n, i))
      return !0;
  }
  return !1;
}
function Ko(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && ue(r) && ue(s) ? !Ut(r, s) : r !== s;
}
function tc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Yo = {}, qo = () => Object.create(Yo), Xo = (e) => Object.getPrototypeOf(e) === Yo;
function nc(e, t, n, r = !1) {
  const s = {}, i = qo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jo(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ fa(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function rc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ce(s), [c] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let _ = 0; _ < d.length; _++) {
        let I = d[_];
        if (Dr(e.emitsOptions, I))
          continue;
        const k = t[I];
        if (c)
          if (ae(i, I))
            k !== i[I] && (i[I] = k, m = !0);
          else {
            const K = at(I);
            s[K] = Ss(
              c,
              l,
              K,
              k,
              e,
              !1
            );
          }
        else
          k !== i[I] && (i[I] = k, m = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (m = !0);
    let d;
    for (const _ in l)
      (!t || // for camelCase
      !ae(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = tn(_)) === _ || !ae(t, d))) && (c ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[_] = Ss(
        c,
        l,
        _,
        void 0,
        e,
        !0
      )) : delete s[_]);
    if (i !== l)
      for (const _ in i)
        (!t || !ae(t, _)) && (delete i[_], m = !0);
  }
  m && xt(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Nn(c))
        continue;
      const m = t[c];
      let d;
      s && ae(s, d = at(c)) ? !i || !i.includes(d) ? n[d] = m : (l || (l = {}))[d] = m : Dr(e.emitsOptions, c) || (!(c in r) || m !== r[c]) && (r[c] = m, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ce(n), m = l || fe;
    for (let d = 0; d < i.length; d++) {
      const _ = i[d];
      n[_] = Ss(
        s,
        c,
        _,
        m[_],
        e,
        !ae(m, _)
      );
    }
  }
  return o;
}
function Ss(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ae(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Q(c)) {
        const { propsDefaults: m } = s;
        if (n in m)
          r = m[n];
        else {
          const d = Kn(s);
          r = m[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        r = c;
      s.ce && s.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === tn(n)) && (r = !0));
  }
  return r;
}
const sc = /* @__PURE__ */ new WeakMap();
function Zo(e, t, n = !1) {
  const r = n ? sc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!Q(e)) {
    const d = (_) => {
      c = !0;
      const [I, k] = Zo(_, t, !0);
      Fe(o, I), k && l.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return ue(e) && r.set(e, pn), pn;
  if (G(i))
    for (let d = 0; d < i.length; d++) {
      const _ = at(i[d]);
      Ei(_) && (o[_] = fe);
    }
  else if (i)
    for (const d in i) {
      const _ = at(d);
      if (Ei(_)) {
        const I = i[d], k = o[_] = G(I) || Q(I) ? { type: I } : Fe({}, I), K = k.type;
        let L = !1, F = !0;
        if (G(K))
          for (let ee = 0; ee < K.length; ++ee) {
            const X = K[ee], z = Q(X) && X.name;
            if (z === "Boolean") {
              L = !0;
              break;
            } else z === "String" && (F = !1);
          }
        else
          L = Q(K) && K.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = L, k[
          1
          /* shouldCastTrue */
        ] = F, (L || ae(k, "default")) && l.push(_);
      }
    }
  const m = [o, l];
  return ue(e) && r.set(e, m), m;
}
function Ei(e) {
  return e[0] !== "$" && !Nn(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => G(e) ? e.map(bt) : [bt(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const i = e[s];
    if (Q(i))
      t[s] = ic(s, i, r);
    else if (i != null) {
      const o = js(i);
      t[s] = () => o;
    }
  }
}, el = (e, t) => {
  const n = js(t);
  e.slots.default = () => n;
}, tl = (e, t, n) => {
  for (const r in t)
    (n || !Hs(r)) && (e[r] = t[r]);
}, oc = (e, t, n) => {
  const r = e.slots = qo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (tl(r, t, n), n && uo(r, "_", s, !0)) : Qo(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = fe;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, qe = dc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = Cr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: m,
    setElementText: d,
    parentNode: _,
    nextSibling: I,
    setScopeId: k = _t,
    insertStaticContent: K
  } = e, L = (u, f, g, A = null, b = null, T = null, O = void 0, R = null, P = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (A = nn(u), rt(u, b, T, !0), u = null), f.patchFlag === -2 && (P = !1, f.dynamicChildren = null);
    const { type: y, ref: B, shapeFlag: N } = f;
    switch (y) {
      case Mr:
        F(u, f, g, A);
        break;
      case It:
        ee(u, f, g, A);
        break;
      case rs:
        u == null && X(f, g, A, O);
        break;
      case _e:
        Je(
          u,
          f,
          g,
          A,
          b,
          T,
          O,
          R,
          P
        );
        break;
      default:
        N & 1 ? J(
          u,
          f,
          g,
          A,
          b,
          T,
          O,
          R,
          P
        ) : N & 6 ? De(
          u,
          f,
          g,
          A,
          b,
          T,
          O,
          R,
          P
        ) : (N & 64 || N & 128) && y.process(
          u,
          f,
          g,
          A,
          b,
          T,
          O,
          R,
          P,
          $t
        );
    }
    B != null && b ? Ln(B, u && u.ref, T, f || u, !f) : B == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, F = (u, f, g, A) => {
    if (u == null)
      r(
        f.el = l(f.children),
        g,
        A
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && m(b, f.children);
    }
  }, ee = (u, f, g, A) => {
    u == null ? r(
      f.el = c(f.children || ""),
      g,
      A
    ) : f.el = u.el;
  }, X = (u, f, g, A) => {
    [u.el, u.anchor] = K(
      u.children,
      f,
      g,
      A,
      u.el,
      u.anchor
    );
  }, z = ({ el: u, anchor: f }, g, A) => {
    let b;
    for (; u && u !== f; )
      b = I(u), r(u, g, A), u = b;
    r(f, g, A);
  }, w = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = I(u), s(u), u = g;
    s(f);
  }, J = (u, f, g, A, b, T, O, R, P) => {
    if (f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), u == null)
      ie(
        f,
        g,
        A,
        b,
        T,
        O,
        R,
        P
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), ge(
          u,
          f,
          b,
          T,
          O,
          R,
          P
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ie = (u, f, g, A, b, T, O, R) => {
    let P, y;
    const { props: B, shapeFlag: N, transition: $, dirs: W } = u;
    if (P = u.el = o(
      u.type,
      T,
      B && B.is,
      B
    ), N & 8 ? d(P, u.children) : N & 16 && q(
      u.children,
      P,
      null,
      A,
      b,
      ns(u, T),
      O,
      R
    ), W && Bt(u, null, A, "created"), te(P, u, u.scopeId, O, A), B) {
      for (const re in B)
        re !== "value" && !Nn(re) && i(P, re, null, B[re], T, A);
      "value" in B && i(P, "value", null, B.value, T), (y = B.onVnodeBeforeMount) && ht(y, A, u);
    }
    W && Bt(u, null, A, "beforeMount");
    const Z = uc(b, $);
    Z && $.beforeEnter(P), r(P, f, g), ((y = B && B.onVnodeMounted) || Z || W) && qe(() => {
      y && ht(y, A, u), Z && $.enter(P), W && Bt(u, null, A, "mounted");
    }, b);
  }, te = (u, f, g, A, b) => {
    if (g && k(u, g), A)
      for (let T = 0; T < A.length; T++)
        k(u, A[T]);
    if (b) {
      let T = b.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const O = b.vnode;
        te(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, q = (u, f, g, A, b, T, O, R, P = 0) => {
    for (let y = P; y < u.length; y++) {
      const B = u[y] = R ? vt(u[y]) : bt(u[y]);
      L(
        null,
        B,
        f,
        g,
        A,
        b,
        T,
        O,
        R
      );
    }
  }, ge = (u, f, g, A, b, T, O) => {
    const R = f.el = u.el;
    let { patchFlag: P, dynamicChildren: y, dirs: B } = f;
    P |= u.patchFlag & 16;
    const N = u.props || fe, $ = f.props || fe;
    let W;
    if (g && Wt(g, !1), (W = $.onVnodeBeforeUpdate) && ht(W, g, f, u), B && Bt(f, u, g, "beforeUpdate"), g && Wt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (P = 0, O = !1, y = null), (N.innerHTML && $.innerHTML == null || N.textContent && $.textContent == null) && d(R, ""), y ? Ee(
      u.dynamicChildren,
      y,
      R,
      g,
      A,
      ns(f, b),
      T
    ) : O || oe(
      u,
      f,
      R,
      null,
      g,
      A,
      ns(f, b),
      T,
      !1
    ), P > 0) {
      if (P & 16)
        Ue(R, N, $, g, b);
      else if (P & 2 && N.class !== $.class && i(R, "class", null, $.class, b), P & 4 && i(R, "style", N.style, $.style, b), P & 8) {
        const Z = f.dynamicProps;
        for (let re = 0; re < Z.length; re++) {
          const ne = Z[re], be = N[ne], Se = $[ne];
          (Se !== be || ne === "value") && i(R, ne, be, Se, b, g);
        }
      }
      P & 1 && u.children !== f.children && d(R, f.children);
    } else !O && y == null && Ue(R, N, $, g, b);
    ((W = $.onVnodeUpdated) || B) && qe(() => {
      W && ht(W, g, f, u), B && Bt(f, u, g, "updated");
    }, A);
  }, Ee = (u, f, g, A, b, T, O) => {
    for (let R = 0; R < f.length; R++) {
      const P = u[R], y = f[R], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(P, y) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? _(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      L(
        P,
        y,
        B,
        null,
        A,
        b,
        T,
        O,
        !0
      );
    }
  }, Ue = (u, f, g, A, b) => {
    if (f !== g) {
      if (f !== fe)
        for (const T in f)
          !Nn(T) && !(T in g) && i(
            u,
            T,
            f[T],
            null,
            b,
            A
          );
      for (const T in g) {
        if (Nn(T)) continue;
        const O = g[T], R = f[T];
        O !== R && T !== "value" && i(u, T, R, O, b, A);
      }
      "value" in g && i(u, "value", f.value, g.value, b);
    }
  }, Je = (u, f, g, A, b, T, O, R, P) => {
    const y = f.el = u ? u.el : l(""), B = f.anchor = u ? u.anchor : l("");
    let { patchFlag: N, dynamicChildren: $, slotScopeIds: W } = f;
    W && (R = R ? R.concat(W) : W), u == null ? (r(y, g, A), r(B, g, A), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      B,
      b,
      T,
      O,
      R,
      P
    )) : N > 0 && N & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === $.length ? (Ee(
      u.dynamicChildren,
      $,
      g,
      b,
      T,
      O,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : oe(
      u,
      f,
      g,
      B,
      b,
      T,
      O,
      R,
      P
    );
  }, De = (u, f, g, A, b, T, O, R, P) => {
    f.slotScopeIds = R, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      g,
      A,
      O,
      P
    ) : de(
      f,
      g,
      A,
      b,
      T,
      O,
      P
    ) : U(u, f, P);
  }, de = (u, f, g, A, b, T, O) => {
    const R = u.component = yc(
      u,
      A,
      b
    );
    if (ks(u) && (R.ctx.renderer = $t), Ec(R, !1, O), R.asyncDep) {
      if (b && b.registerDep(R, h, O), !u.el) {
        const P = R.subTree = Ct(It);
        ee(null, P, f, g), u.placeholder = P.el;
      }
    } else
      h(
        R,
        u,
        f,
        g,
        b,
        T,
        O
      );
  }, U = (u, f, g) => {
    const A = f.component = u.component;
    if (ec(u, f, g))
      if (A.asyncDep && !A.asyncResolved) {
        le(A, f, g);
        return;
      } else
        A.next = f, A.update();
    else
      f.el = u.el, A.vnode = f;
  }, h = (u, f, g, A, b, T, O) => {
    const R = () => {
      if (u.isMounted) {
        let { next: N, bu: $, u: W, parent: Z, vnode: re } = u;
        {
          const Ge = rl(u);
          if (Ge) {
            N && (N.el = re.el, le(u, N, O)), Ge.asyncDep.then(() => {
              qe(() => {
                u.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let ne = N, be;
        Wt(u, !1), N ? (N.el = re.el, le(u, N, O)) : N = re, $ && ur($), (be = N.props && N.props.onVnodeBeforeUpdate) && ht(be, Z, N, re), Wt(u, !0);
        const Se = yi(u), ke = u.subTree;
        u.subTree = Se, L(
          ke,
          Se,
          // parent may have changed if it's in a teleport
          _(ke.el),
          // anchor may have changed if it's in a fragment
          nn(ke),
          u,
          b,
          T
        ), N.el = Se.el, ne === null && tc(u, Se.el), W && qe(W, b), (be = N.props && N.props.onVnodeUpdated) && qe(
          () => ht(be, Z, N, re),
          b
        );
      } else {
        let N;
        const { el: $, props: W } = f, { bm: Z, m: re, parent: ne, root: be, type: Se } = u, ke = Fn(f);
        Wt(u, !1), Z && ur(Z), !ke && (N = W && W.onVnodeBeforeMount) && ht(N, ne, f), Wt(u, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            Se,
            u.parent ? u.parent.type : void 0
          );
          const Ge = u.subTree = yi(u);
          L(
            null,
            Ge,
            g,
            A,
            u,
            b,
            T
          ), f.el = Ge.el;
        }
        if (re && qe(re, b), !ke && (N = W && W.onVnodeMounted)) {
          const Ge = f;
          qe(
            () => ht(N, ne, Ge),
            b
          );
        }
        (f.shapeFlag & 256 || ne && Fn(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && qe(u.a, b), u.isMounted = !0, f = g = A = null;
      }
    };
    u.scope.on();
    const P = u.effect = new mo(R);
    u.scope.off();
    const y = u.update = P.run.bind(P), B = u.job = P.runIfDirty.bind(P);
    B.i = u, B.id = u.uid, P.scheduler = () => Fs(B), Wt(u, !0), y();
  }, le = (u, f, g) => {
    f.component = u;
    const A = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, A, g), lc(u, f.children, g), Ot(), di(u), Rt();
  }, oe = (u, f, g, A, b, T, O, R, P = !1) => {
    const y = u && u.children, B = u ? u.shapeFlag : 0, N = f.children, { patchFlag: $, shapeFlag: W } = f;
    if ($ > 0) {
      if ($ & 128) {
        Ht(
          y,
          N,
          g,
          A,
          b,
          T,
          O,
          R,
          P
        );
        return;
      } else if ($ & 256) {
        ot(
          y,
          N,
          g,
          A,
          b,
          T,
          O,
          R,
          P
        );
        return;
      }
    }
    W & 8 ? (B & 16 && jt(y, b, T), N !== y && d(g, N)) : B & 16 ? W & 16 ? Ht(
      y,
      N,
      g,
      A,
      b,
      T,
      O,
      R,
      P
    ) : jt(y, b, T, !0) : (B & 8 && d(g, ""), W & 16 && q(
      N,
      g,
      A,
      b,
      T,
      O,
      R,
      P
    ));
  }, ot = (u, f, g, A, b, T, O, R, P) => {
    u = u || pn, f = f || pn;
    const y = u.length, B = f.length, N = Math.min(y, B);
    let $;
    for ($ = 0; $ < N; $++) {
      const W = f[$] = P ? vt(f[$]) : bt(f[$]);
      L(
        u[$],
        W,
        g,
        null,
        b,
        T,
        O,
        R,
        P
      );
    }
    y > B ? jt(
      u,
      b,
      T,
      !0,
      !1,
      N
    ) : q(
      f,
      g,
      A,
      b,
      T,
      O,
      R,
      P,
      N
    );
  }, Ht = (u, f, g, A, b, T, O, R, P) => {
    let y = 0;
    const B = f.length;
    let N = u.length - 1, $ = B - 1;
    for (; y <= N && y <= $; ) {
      const W = u[y], Z = f[y] = P ? vt(f[y]) : bt(f[y]);
      if (xn(W, Z))
        L(
          W,
          Z,
          g,
          null,
          b,
          T,
          O,
          R,
          P
        );
      else
        break;
      y++;
    }
    for (; y <= N && y <= $; ) {
      const W = u[N], Z = f[$] = P ? vt(f[$]) : bt(f[$]);
      if (xn(W, Z))
        L(
          W,
          Z,
          g,
          null,
          b,
          T,
          O,
          R,
          P
        );
      else
        break;
      N--, $--;
    }
    if (y > N) {
      if (y <= $) {
        const W = $ + 1, Z = W < B ? f[W].el : A;
        for (; y <= $; )
          L(
            null,
            f[y] = P ? vt(f[y]) : bt(f[y]),
            g,
            Z,
            b,
            T,
            O,
            R,
            P
          ), y++;
      }
    } else if (y > $)
      for (; y <= N; )
        rt(u[y], b, T, !0), y++;
    else {
      const W = y, Z = y, re = /* @__PURE__ */ new Map();
      for (y = Z; y <= $; y++) {
        const Pe = f[y] = P ? vt(f[y]) : bt(f[y]);
        Pe.key != null && re.set(Pe.key, y);
      }
      let ne, be = 0;
      const Se = $ - Z + 1;
      let ke = !1, Ge = 0;
      const st = new Array(Se);
      for (y = 0; y < Se; y++) st[y] = 0;
      for (y = W; y <= N; y++) {
        const Pe = u[y];
        if (be >= Se) {
          rt(Pe, b, T, !0);
          continue;
        }
        let Ze;
        if (Pe.key != null)
          Ze = re.get(Pe.key);
        else
          for (ne = Z; ne <= $; ne++)
            if (st[ne - Z] === 0 && xn(Pe, f[ne])) {
              Ze = ne;
              break;
            }
        Ze === void 0 ? rt(Pe, b, T, !0) : (st[Ze - Z] = y + 1, Ze >= Ge ? Ge = Ze : ke = !0, L(
          Pe,
          f[Ze],
          g,
          null,
          b,
          T,
          O,
          R,
          P
        ), be++);
      }
      const Vt = ke ? fc(st) : pn;
      for (ne = Vt.length - 1, y = Se - 1; y >= 0; y--) {
        const Pe = Z + y, Ze = f[Pe], Tn = f[Pe + 1], En = Pe + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : A;
        st[y] === 0 ? L(
          null,
          Ze,
          g,
          En,
          b,
          T,
          O,
          R,
          P
        ) : ke && (ne < 0 || y !== Vt[ne] ? Tt(Ze, g, En, 2) : ne--);
      }
    }
  }, Tt = (u, f, g, A, b = null) => {
    const { el: T, type: O, transition: R, children: P, shapeFlag: y } = u;
    if (y & 6) {
      Tt(u.component.subTree, f, g, A);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, g, A);
      return;
    }
    if (y & 64) {
      O.move(u, f, g, $t);
      return;
    }
    if (O === _e) {
      r(T, f, g);
      for (let N = 0; N < P.length; N++)
        Tt(P[N], f, g, A);
      r(u.anchor, f, g);
      return;
    }
    if (O === rs) {
      z(u, f, g);
      return;
    }
    if (A !== 2 && y & 1 && R)
      if (A === 0)
        R.persisted && !T[es] ? r(T, f, g) : (R.beforeEnter(T), r(T, f, g), qe(() => R.enter(T), b));
      else {
        const { leave: N, delayLeave: $, afterLeave: W } = R, Z = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, g);
        }, re = () => {
          const ne = T._isLeaving || !!T[es];
          T._isLeaving && T[es](
            !0
            /* cancelled */
          ), R.persisted && !ne ? Z() : N(T, () => {
            Z(), W && W();
          });
        };
        $ ? $(T, Z, re) : re();
      }
    else
      r(T, f, g);
  }, rt = (u, f, g, A = !1, b = !1) => {
    const {
      type: T,
      props: O,
      ref: R,
      children: P,
      dynamicChildren: y,
      shapeFlag: B,
      patchFlag: N,
      dirs: $,
      cacheIndex: W,
      memo: Z
    } = u;
    if (N === -2 && (b = !1), R != null && (Ot(), Ln(R, null, g, u, !0), Rt()), W != null && (f.renderCache[W] = void 0), B & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const re = B & 1 && $, ne = !Fn(u);
    let be;
    if (ne && (be = O && O.onVnodeBeforeUnmount) && ht(be, f, u), B & 6)
      Fr(u.component, g, A);
    else {
      if (B & 128) {
        u.suspense.unmount(g, A);
        return;
      }
      re && Bt(u, null, f, "beforeUnmount"), B & 64 ? u.type.remove(
        u,
        f,
        g,
        $t,
        A
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== _e || N > 0 && N & 64) ? jt(
        y,
        f,
        g,
        !1,
        !0
      ) : (T === _e && N & 384 || !b && B & 16) && jt(P, f, g), A && Yn(u);
    }
    const Se = Z != null && W == null;
    (ne && (be = O && O.onVnodeUnmounted) || re || Se) && qe(() => {
      be && ht(be, f, u), re && Bt(u, null, f, "unmounted"), Se && (u.el = null);
    }, g);
  }, Yn = (u) => {
    const { type: f, el: g, anchor: A, transition: b } = u;
    if (f === _e) {
      pe(g, A);
      return;
    }
    if (f === rs) {
      w(u);
      return;
    }
    const T = () => {
      s(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: R } = b, P = () => O(g, T);
      R ? R(u.el, T, P) : P();
    } else
      T();
  }, pe = (u, f) => {
    let g;
    for (; u !== f; )
      g = I(u), s(u), u = g;
    s(f);
  }, Fr = (u, f, g) => {
    const { bum: A, scope: b, job: T, subTree: O, um: R, m: P, a: y } = u;
    Si(P), Si(y), A && ur(A), b.stop(), T && (T.flags |= 8, rt(O, u, f, g)), R && qe(R, f), qe(() => {
      u.isUnmounted = !0;
    }, f);
  }, jt = (u, f, g, A = !1, b = !1, T = 0) => {
    for (let O = T; O < u.length; O++)
      rt(u[O], f, g, A, b);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = I(u.anchor || u.el), g = f && f[wa];
    return g ? I(g) : f;
  };
  let yn = !1;
  const qn = (u, f, g) => {
    let A;
    u == null ? f._vnode && (rt(f._vnode, null, null, !0), A = f._vnode.component) : L(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, yn || (yn = !0, di(A), Mo(), yn = !1);
  }, $t = {
    p: L,
    um: rt,
    m: Tt,
    r: Yn,
    mt: de,
    mc: q,
    pc: oe,
    pbc: Ee,
    n: nn,
    o: e
  };
  return {
    render: qn,
    hydrate: void 0,
    createApp: Ya(qn)
  };
}
function ns({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (G(r) && G(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = vt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Mr && (l.patchFlag === -1 && (l = s[i] = vt(l)), l.el = o.el), l.type === It && !l.el && (l.el = o.el);
    }
}
function fc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const m = e[r];
    if (m !== 0) {
      if (s = n[n.length - 1], e[s] < m) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < m ? i = l + 1 : o = l;
      m < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function rl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rl(t);
}
function Si(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function sl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? sl(t.subTree) : null;
}
const il = (e) => e.__isSuspense;
function dc(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Mr = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let nt = null;
function j(e = !1) {
  Qt.push(nt = e ? null : []);
}
function ol() {
  Qt.pop(), nt = Qt[Qt.length - 1] || null;
}
let Vn = 1;
function vi(e, t = !1) {
  Vn += e, e < 0 && nt && t && (nt.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = Vn > 0 ? nt || pn : null, ol(), Vn > 0 && nt && nt.push(e), e;
}
function V(e, t, n, r, s, i) {
  return ll(
    S(
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
function pc(e, t, n, r, s) {
  return ll(
    Ct(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function al(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cl = ({ key: e }) => e ?? null, dr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ae(e) || /* @__PURE__ */ We(e) || Q(e) ? { i: it, r: e, k: t, f: !!n } : e : null);
function S(e, t = null, n = null, r = 0, s = null, i = e === _e ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && dr(t),
    scopeId: Fo,
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
    ctx: it
  };
  return l ? (yr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ae(n) ? 8 : 16), Vn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && nt.push(c), c;
}
const Ct = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = It), al(e)) {
    const l = _n(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yr(l, n), Vn > 0 && !i && nt && (l.shapeFlag & 6 ? nt[nt.indexOf(e)] = l : nt.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !Ae(l) && (t.class = Or(l)), ue(c) && (/* @__PURE__ */ Ls(c) && !G(c) && (c = Fe({}, c)), t.style = Rs(c));
  }
  const o = Ae(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : ue(e) ? 4 : Q(e) ? 2 : 0;
  return S(
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
function mc(e) {
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Fe({}, e) : e : null;
}
function _n(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, m = t ? gc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && cl(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? G(i) ? i.concat(dr(t)) : [i, dr(t)] : dr(t)
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
    patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _n(e.ssContent),
    ssFallback: e.ssFallback && _n(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Us(
    d,
    c.clone(d)
  ), d;
}
function ve(e = " ", t = 0) {
  return Ct(Mr, null, e, t);
}
function Ce(e = "", t = !1) {
  return t ? (j(), pc(It, null, e)) : Ct(It, null, e);
}
function bt(e) {
  return e == null || typeof e == "boolean" ? Ct(It) : G(e) ? Ct(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? vt(e) : Ct(Mr, null, String(e));
}
function vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _n(e);
}
function yr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), yr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = it : s === 3 && it && (it.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (r & 65) {
      yr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: it }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ve(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function gc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Or([t.class, r.class]));
      else if (s === "style")
        t.style = Rs([t.style, r.style]);
      else if (vr(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(G(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ar(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function ht(e, t, n, r = null) {
  ft(e, t, 7, [
    n,
    r
  ]);
}
const bc = Wo();
let _c = 0;
function yc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || bc, i = {
    uid: _c++,
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
    scope: new Gl(
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
    propsOptions: Zo(r, s),
    emitsOptions: Go(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Xa.bind(null, i), e.ce && e.ce(i), i;
}
let Be = null;
const Tc = () => Be || it;
let Tr, zn;
{
  const e = Cr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Tr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Be = n
  ), zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Bn = n
  );
}
const Kn = (e) => {
  const t = Be;
  return Tr(e), e.scope.on(), () => {
    e.scope.off(), Tr(t);
  };
}, Ai = () => {
  Be && Be.scope.off(), Tr(null);
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let Bn = !1;
function Ec(e, t = !1, n = !1) {
  t && zn(t);
  const { props: r, children: s } = e.vnode, i = ul(e);
  nc(e, r, i, t), oc(e, s, n || t);
  const o = i ? Sc(e, t) : void 0;
  return t && zn(!1), o;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    Ot();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Kn(e), o = Gn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (Rt(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
      if (o.then(Ai, Ai), t)
        return o.then((c) => {
          zn(!0);
          try {
            xi(e, c, t);
          } finally {
            zn(!1);
          }
        }).catch((c) => {
          Pr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o);
  } else
    fl(e);
}
function xi(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (e.setupState = Po(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || _t);
  {
    const s = Kn(e);
    Ot();
    try {
      Va(e);
    } finally {
      Rt(), s();
    }
  }
}
const vc = {
  get(e, t) {
    return Le(e, "get", ""), e[t];
  }
};
function Ac(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Lr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Po(da(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Un)
        return Un[n](e);
    },
    has(t, n) {
      return n in t || n in Un;
    }
  })) : e.proxy;
}
function xc(e) {
  return Q(e) && "__vccOpts" in e;
}
const Oe = (e, t) => /* @__PURE__ */ ma(e, t, Bn), wc = "3.5.42";
let vs;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    vs = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = vs ? (e) => vs.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Ci = St && /* @__PURE__ */ St.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? St.createElementNS(Cc, e) : t === "mathml" ? St.createElementNS(Oc, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => St.createTextNode(e),
  createComment: (e) => St.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => St.querySelector(e),
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
      Ci.innerHTML = dl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ci.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, Pc = /* @__PURE__ */ Symbol("_vtc");
function Ic(e, t, n) {
  const r = e[Pc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Dc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = Ae(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Ae(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Pn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Pn(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? Uc(
        e,
        o,
        !Ae(t) && t ? t[o] : void 0,
        l
      ) || Pn(r, o, l) : Pn(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Dc];
      o && (n += ";" + o), r.cssText = n, i = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Nc] && (r.display = "none"));
}
const lr = /\s*!important$/;
function Pn(e, t, n) {
  if (G(n))
    n.forEach((r) => Pn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    lr.test(n) ? e.setProperty(t, n.replace(lr, ""), "important") : e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    lr.test(n) ? e.setProperty(
      tn(r),
      n.replace(lr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], ss = {};
function Fc(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let r = at(t);
  if (r !== "filter" && r in e)
    return ss[t] = r;
  r = co(r);
  for (let s = 0; s < Ri.length; s++) {
    const i = Ri[s] + r;
    if (i in e)
      return ss[t] = i;
  }
  return t;
}
function Uc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ae(r) && n === r;
}
const Pi = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pi, t.slice(6, t.length)) : e.setAttributeNS(Pi, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : yt(n) ? String(n) : n
  );
}
function Ni(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? dl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = fo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function qt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function kc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, r, s = null) {
  const i = e[Di] || (e[Di] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Vc(t);
    if (r) {
      const m = i[t] = Wc(
        r,
        s
      );
      qt(e, l, m, c);
    } else o && (kc(e, l, o, c), i[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, $c = /^on:?(?:Once|Passive|Capture)$/;
function Vc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !$c.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
}
let is = 0;
const zc = /* @__PURE__ */ Promise.resolve(), Bc = () => is || (zc.then(() => is = 0), is = Date.now());
function Wc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (G(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const m = o[c];
        m && ft(
          m,
          t,
          5,
          l
        );
      }
    } else
      ft(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Bc(), n;
}
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Ic(e, r, o) : t === "style" ? Lc(e, n, r) : vr(t) ? Ar(t) || Hc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, o)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ae(r))) ? Ni(e, at(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ii(e, t, r, o));
};
function Kc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && Ae(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = at(t);
  return Array.isArray(n) ? n.some((s) => at(s) === r) : Object.keys(n).some((s) => at(s) === r);
}
const Er = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (n) => ur(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Xt = /* @__PURE__ */ Symbol("_assign"), ar = /* @__PURE__ */ Symbol("_initialValue");
function os(e, t, n) {
  return t && (e = e.trim()), n && (e = wr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[ar] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ar] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Xt] = Er(s);
    const i = r || s.props && s.props.type === "number";
    qt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Xt](os(e.value, n, i));
    }), (n || i) && qt(e, "change", () => {
      e.value = os(e.value, n, i);
    }), t || (qt(e, "compositionstart", qc), qt(e, "compositionend", Li), qt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[ar];
    delete e[ar], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Xt](os(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[Xt] = Er(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? wr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const m = e.getRootNode();
    (m instanceof Document || m instanceof ShadowRoot) && m.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Qe = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, qt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? wr(Sr(c)) : Sr(c)
      ), i = e.multiple, o = i ? en(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? G(o) ? s.slice() : s : o
      ];
      try {
        e[Xt](o);
      } finally {
        No(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Xt] = Er(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Xt] = Er(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || G(e)) return Ut(e, t);
  if (en(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = G(t);
  if (!(n && !r && !en(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Sr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((m) => String(m) === String(l)) : o.selected = Wl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Ut(Sr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Sr(e) {
  return "_value" in e ? e._value : e.value;
}
const Jc = /* @__PURE__ */ Fe({ patchProp: Gc }, Rc);
let ki;
function Zc() {
  return ki || (ki = ac(Jc));
}
const Qc = ((...e) => {
  const t = Zc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = tu(r);
    if (!s) return;
    const i = t._component;
    !Q(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, eu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function eu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tu(e) {
  return Ae(e) ? document.querySelector(e) : e;
}
function nu(e, t, n) {
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
function Hi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ru(e) {
  if (Array.isArray(e)) return e;
}
function su(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, i, o, l = [], c = !0, m = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (d) {
      m = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (m) throw s;
      }
    }
    return l;
  }
}
function iu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ou(e, t) {
  return ru(e) || su(e, t) || lu(e, t) || iu();
}
function lu(e, t) {
  if (e) {
    if (typeof e == "string") return Hi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hi(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let Re = Object.freeze, Ie = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, As = hl.apply, xs = hl.construct;
Re || (Re = function(t) {
  return t;
});
Ie || (Ie = function(t) {
  return t;
});
As || (As = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
xs || (xs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Yt = we(Array.prototype.forEach), fu = we(Array.prototype.lastIndexOf), $i = we(Array.prototype.pop), wn = we(Array.prototype.push), du = we(Array.prototype.splice), gn = Array.isArray, In = we(String.prototype.toLowerCase), ls = we(String.prototype.toString), Vi = we(String.prototype.match), Cn = we(String.prototype.replace), zi = we(String.prototype.indexOf), pu = we(String.prototype.trim), hu = we(Number.prototype.toString), mu = we(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : we(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : we(Symbol.prototype.toString), Xe = we(Object.prototype.hasOwnProperty), On = we(Object.prototype.toString), Me = we(RegExp.prototype.test), Gt = gu(TypeError);
function we(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return As(e, t, r);
  };
}
function gu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return xs(e, n);
  };
}
function se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : In;
  if (ji && ji(e, null), !gn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (au(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function bu(e) {
  for (let t = 0; t < e.length; t++)
    Xe(e, t) || (e[t] = null);
  return e;
}
function tt(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    Xe(e, s) && (gn(i) ? t[s] = bu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = tt(i) : t[s] = i);
  }
  return t;
}
function _u(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return hu(e);
    case "boolean":
      return mu(e);
    case "bigint":
      return Bi ? Bi(e) : "0";
    case "symbol":
      return Wi ? Wi(e) : "Symbol()";
    case "undefined":
      return On(e);
    case "function":
    case "object": {
      if (e === null)
        return On(e);
      const t = e, n = lt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : On(r);
      }
      return On(e);
    }
    default:
      return On(e);
  }
}
function lt(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return we(r.get);
      if (typeof r.value == "function")
        return we(r.value);
    }
    e = cu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function yu(e) {
  try {
    return Me(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gi = Re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), as = Re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cs = Re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Re(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), us = Re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ki = Re(["#text"]), Yi = Re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fs = Re(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Re(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), cr = Re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ie(/{{[\w\W]*|^[\w\W]*}}/g), vu = Ie(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ie(/\${[\w\W]*/g), xu = Ie(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ie(/^aria-[\-\w]+$/), Xi = Ie(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ie(/^(?:\w+script|data):/i), Ou = Ie(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ie(/^html$/i), Pu = Ie(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ie(/<[/\w!]/g), Zi = Ie(/<[/\w]/g), Iu = Ie(/<\/no(script|embed|frames)/i), Nu = Ie(/\/>/i), et = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Du = Re(se({}, ml)), Mu = (function() {
  const e = {};
  return Yt(ml, (t) => {
    e[t] = Ie(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Re(e);
})(), Lu = function() {
  return typeof window > "u" ? null : window;
}, Fu = function(t, n) {
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
}, Qi = function() {
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
}, Mt = function(t, n, r, s) {
  return Xe(t, n) && gn(t[n]) ? se(s.base ? tt(s.base) : {}, t[n], s.transform) : r;
}, ds = function(t, n, r) {
  const s = Xe(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? tt(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (C) => gl(C);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== et.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, m = e.NamedNodeMap;
  m === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, _ = e.trustedTypes, I = l.prototype, k = lt(I, "cloneNode"), K = lt(I, "remove"), L = lt(I, "nextSibling"), F = lt(I, "childNodes"), ee = lt(I, "parentNode"), X = lt(I, "shadowRoot"), z = lt(I, "attributes"), w = o && o.prototype ? lt(o.prototype, "nodeType") : null, J = o && o.prototype ? lt(o.prototype, "nodeName") : null, ie = o && o.prototype ? lt(o.prototype, "ownerDocument") : null, te = function(a) {
    return w ? w(a) : a.nodeType;
  }, q = function(a) {
    return J ? J(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const C = n.createElement("template");
    C.content && C.content.ownerDocument && (n = C.content.ownerDocument);
  }
  let ge, Ee = "", Ue, Je = !1, De = 0;
  const de = function() {
    if (De > 0)
      throw Gt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(a) {
    de(), De++;
    try {
      return ge.createHTML(a);
    } finally {
      De--;
    }
  }, h = function(a) {
    de(), De++;
    try {
      return ge.createScriptURL(a);
    } finally {
      De--;
    }
  }, le = function() {
    return Je || (Ue = Fu(_, s), Je = !0), Ue;
  }, oe = n, ot = oe.implementation, Ht = oe.createNodeIterator, Tt = oe.createDocumentFragment, rt = oe.getElementsByTagName, Yn = r.importNode;
  let pe = Qi();
  t.isSupported = typeof pl == "function" && typeof ee == "function" && ot && ot.createHTMLDocument !== void 0;
  const Fr = Su, jt = vu, nn = Au, yn = xu, qn = wu, $t = Cu, Ur = Ou, u = Pu;
  let f = Xi, g = null;
  const A = se({}, [...Gi, ...as, ...cs, ...us, ...Ki]);
  let b = null;
  const T = se({}, [...Yi, ...fs, ...qi, ...cr]);
  let O = Object.seal(dn(null, {
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
  })), R = null, P = null;
  const y = Object.seal(dn(null, {
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
  let B = !0, N = !0, $ = !1, W = !0, Z = !1, re = !0, ne = !1, be = !1, Se = null, ke = null, Ge = !1, st = !1, Vt = !1, Pe = !1, Ze = !0, Tn = !1;
  const En = "user-content-";
  let kr = !0, Hr = !1, rn = {}, sn = null;
  const $s = se({}, [
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
  let Vs = null;
  const zs = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bs = null;
  const Ws = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Xn = "http://www.w3.org/1998/Math/MathML", Jn = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let on = dt, jr = !1, $r = null;
  const _l = se({}, [Xn, Jn, dt], ls), Gs = Re(["mi", "mo", "mn", "ms", "mtext"]);
  let Vr = se({}, Gs);
  const Ks = Re(["annotation-xml"]);
  let zr = se({}, Ks);
  const yl = se({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let xe = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Br = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = tt(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, xe = Sn === "application/xhtml+xml" ? ls : In, g = Mt(a, "ALLOWED_TAGS", A, {
      transform: xe
    }), b = Mt(a, "ALLOWED_ATTR", T, {
      transform: xe
    }), $r = Mt(a, "ALLOWED_NAMESPACES", _l, {
      transform: ls
    }), Bs = Mt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: xe,
      base: Ws
    }), Vs = Mt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: xe,
      base: zs
    }), sn = Mt(a, "FORBID_CONTENTS", $s, {
      transform: xe
    }), R = Mt(a, "FORBID_TAGS", tt({}), {
      transform: xe
    }), P = Mt(a, "FORBID_ATTR", tt({}), {
      transform: xe
    }), rn = Xe(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? tt(a.USE_PROFILES) : a.USE_PROFILES : !1, B = a.ALLOW_ARIA_ATTR !== !1, N = a.ALLOW_DATA_ATTR !== !1, $ = a.ALLOW_UNKNOWN_PROTOCOLS || !1, W = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, re = a.SAFE_FOR_XML !== !1, ne = a.WHOLE_DOCUMENT || !1, st = a.RETURN_DOM || !1, Vt = a.RETURN_DOM_FRAGMENT || !1, Pe = a.RETURN_TRUSTED_TYPE || !1, Ge = a.FORCE_BODY || !1, Ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, kr = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : dt, Vr = ds(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => se({}, Gs)
      // Default built-in map
    ), zr = ds(
      a,
      "HTML_INTEGRATION_POINTS",
      () => se({}, Ks)
      // Default built-in map
    );
    const p = ds(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (O = dn(null), Xe(p, "tagNameCheck") && Ys(p.tagNameCheck) && (O.tagNameCheck = p.tagNameCheck), Xe(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (O.attributeNameCheck = p.attributeNameCheck), Xe(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ie(O), Z && (N = !1), Vt && (st = !0), rn && (g = se({}, Ki), b = dn(null), rn.html === !0 && (se(g, Gi), se(b, Yi)), rn.svg === !0 && (se(g, as), se(b, fs), se(b, cr)), rn.svgFilters === !0 && (se(g, cs), se(b, fs), se(b, cr)), rn.mathMl === !0 && (se(g, us), se(b, qi), se(b, cr))), y.tagCheck = null, y.attributeCheck = null, Xe(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (g === A && (g = tt(g)), se(g, a.ADD_TAGS, xe))), Xe(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (b === T && (b = tt(b)), se(b, a.ADD_ATTR, xe))), Xe(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = tt(sn)), se(sn, a.ADD_FORBID_CONTENTS, xe)), kr && (g["#text"] = !0), ne && se(g, ["html", "head", "body"]), g.table && (se(g, ["tbody"]), delete R.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = ge;
      ge = a.TRUSTED_TYPES_POLICY;
      try {
        Ee = U("");
      } catch (D) {
        throw ge = E, D;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ge = void 0, Ee = "") : (ge === void 0 && (ge = le()), ge && typeof Ee == "string" && (Ee = U("")));
    Re && Re(a), ln = a;
  }, qs = se({}, [...as, ...cs, ...Tu]), Xs = se({}, [...us, ...Eu]), vl = function(a, p, E) {
    return p.namespaceURI === dt ? a === "svg" : p.namespaceURI === Xn ? a === "svg" && (E === "annotation-xml" || Vr[E]) : !!qs[a];
  }, Al = function(a, p, E) {
    return p.namespaceURI === dt ? a === "math" : p.namespaceURI === Jn ? a === "math" && zr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Jn && !zr[E] || p.namespaceURI === Xn && !Vr[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = ee(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = In(a.tagName), D = In(p.tagName);
    return $r[a.namespaceURI] ? a.namespaceURI === Jn ? vl(E, p, D) : a.namespaceURI === Xn ? Al(E, p, D) : a.namespaceURI === dt ? xl(E, p, D) : !!(Sn === "application/xhtml+xml" && $r[a.namespaceURI]) : !1;
  }, Dt = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      ee(a).removeChild(a);
    } catch {
      if (K(a), !ee(a))
        throw Gt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(a, p, E) {
    try {
      a.removeAttributeNode(p);
    } catch {
      try {
        a.removeAttribute(E);
      } catch {
      }
    }
  }, Zn = function(a) {
    Qn(a);
    const p = F(a);
    if (p) {
      const D = [];
      Yt(p, (H) => {
        wn(D, H);
      }), Yt(D, (H) => {
        try {
          K(H);
        } catch {
        }
      });
    }
    const E = z(a);
    if (E)
      for (let D = E.length - 1; D >= 0; --D) {
        const H = E[D], Y = H && H.name;
        typeof Y == "string" && Js(a, H, Y);
      }
  }, zt = function(a, p, E) {
    if (!E)
      try {
        E = p.getAttributeNode(a);
      } catch {
        E = null;
      }
    wn(t.removed, {
      attribute: E || null,
      from: p
    });
    try {
      E ? p.removeAttributeNode(E) : p.removeAttribute(a);
    } catch {
      try {
        p.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (st || Vt)
        try {
          Dt(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const p = z(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const D = p[E], H = D && D.name;
        typeof H != "string" || b[xe(H)] || Js(a, D, H);
      }
  }, Qn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      te(E) === et.element && Cl(E);
      const H = F(E);
      if (H)
        for (let Y = H.length - 1; Y >= 0; --Y)
          p.push(H[Y]);
    }
  }, Zs = function(a, p) {
    return re ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!re)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), D = te(E);
      if (D === et.processingInstruction || D === et.comment && Me(Zi, E.data)) {
        try {
          K(E);
        } catch {
        }
        continue;
      }
      if (D === et.element) {
        const Y = E, he = xe(q(E));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && Zs("for", he) && Y.removeAttribute("for");
        } catch {
        }
      }
      const H = F(E);
      if (H)
        for (let Y = H.length - 1; Y >= 0; --Y)
          p.push(H[Y]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (Ge)
      a = "<remove></remove>" + a;
    else {
      const Y = Vi(a, /^[\r\n\t ]+/);
      E = Y && Y[0];
    }
    Sn === "application/xhtml+xml" && on === dt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const D = ge ? U(a) : a;
    if (on === dt)
      try {
        p = new d().parseFromString(D, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = ot.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = jr ? Ee : D;
      } catch {
      }
    }
    const H = p.body || p.documentElement;
    return a && E && H.insertBefore(n.createTextNode(E), H.childNodes[0] || null), on === dt ? rt.call(p, ne ? "html" : "body")[0] : ne ? p.documentElement : H;
  }, ei = function(a) {
    const p = ie ? ie(a) : a.ownerDocument;
    return Ht.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, er = function(a) {
    return a = Cn(a, Fr, " "), a = Cn(a, jt, " "), a = Cn(a, nn, " "), a;
  }, Wr = function(a) {
    var p;
    a.normalize();
    const E = ie ? ie(a) : a.ownerDocument, D = Ht.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = D.nextNode();
    for (; H; )
      H.data = er(H.data), H = D.nextNode();
    const Y = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    Y && Yt(Y, (he) => {
      an(he.content) && Wr(he.content);
    });
  }, tr = function(a) {
    const p = J ? J(a) : null;
    return typeof p != "string" || xe(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== z(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== w(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== F(a);
  }, an = function(a) {
    if (!w || typeof a != "object" || a === null)
      return !1;
    try {
      return w(a) === et.documentFragment;
    } catch {
      return !1;
    }
  }, vn = function(a) {
    if (!w || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof w(a) == "number";
    } catch {
      return !1;
    }
  };
  function pt(C, a, p) {
    C.length !== 0 && Yt(C, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(re && a.hasChildNodes() && !vn(a.firstElementChild) && Me(Ji, a.textContent) && Me(Ji, a.innerHTML) || re && a.namespaceURI === dt && Du[p] && (vn(a.firstElementChild) || typeof a.textContent == "string" && Me(Mu[p], a.textContent)) || a.nodeType === et.processingInstruction || re && a.nodeType === et.comment && Me(Zi, a.data));
  }, nr = function(a, p) {
    if (a instanceof RegExp)
      return Me(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, D = new Array(E > 2 ? E - 2 : 0), H = 2; H < E; H++)
        D[H - 2] = arguments[H];
      return !!a(p, ...D);
    }
    return !1;
  }, Pl = function(a, p, E) {
    if (!R[p] && ii(p) && nr(O.tagNameCheck, p))
      return !1;
    if (kr && !sn[p]) {
      const D = ee(a), H = F(a);
      if (H && D) {
        const Y = H.length;
        for (let he = Y - 1; he >= 0; --he) {
          const ye = a === E ? k(H[he], !0) : H[he];
          D.insertBefore(ye, L(a));
        }
      }
    }
    return Dt(a), !0;
  }, ti = function(a, p, E, D) {
    return a.length === 0 ? p : p === E || p === D ? tt(p) : p;
  }, ni = function(a, p) {
    return a === p || ee(a) !== null ? !1 : (Hr && Qn(a), !0);
  }, ri = function(a, p) {
    if (pt(pe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (tr(a))
      return Dt(a), !0;
    const E = xe(q(a));
    if (g = ti(pe.uponSanitizeElement, g, A, Se), pt(pe.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: g
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Dt(a), !0;
    if (R[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !g[E]) {
      const H = Pl(a, E, p);
      return H === !1 && pt(pe.afterSanitizeElements, a, null), H;
    }
    if (te(a) === et.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Me(Iu, a.innerHTML))
      return Dt(a), !0;
    if (Z && a.nodeType === et.text) {
      const H = er(a.textContent);
      a.textContent !== H && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = H);
    }
    return pt(pe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (P[p] || Zs(p, a) || Ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const D = b[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return N && Me(yn, p) || B && Me(qn, p) ? !0 : D ? Bs[p] || Me(f, Cn(E, Ur, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || $ && !Me($t, Cn(E, Ur, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && nr(O.tagNameCheck, a) && nr(O.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && O.allowCustomizedBuiltInElements && nr(O.tagNameCheck, E)
    );
  }, Il = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Il[In(a)] && Me(u, a);
  }, Nl = function(a, p, E, D) {
    if (ge && typeof _ == "object" && typeof _.getAttributeType == "function" && !E)
      switch (_.getAttributeType(a, p)) {
        case "TrustedHTML":
          return U(D);
        case "TrustedScriptURL":
          return h(D);
      }
    return D;
  }, Dl = function(a, p, E, D) {
    try {
      E ? a.setAttributeNS(E, p, D) : a.setAttribute(p, D), tr(a) ? Dt(a) : $i(t.removed);
    } catch {
      zt(p, a);
    }
  }, oi = function(a) {
    pt(pe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || tr(a))
      return;
    b = ti(pe.uponSanitizeAttribute, b, T, ke);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let D = p.length;
    const H = xe(a.nodeName);
    for (; D--; ) {
      const Y = p[D], he = Y.name, ye = Y.namespaceURI, Ke = Y.value, Ye = xe(he), Kr = Ke;
      let He = he === "value" ? Kr : pu(Kr);
      if (E.attrName = Ye, E.attrValue = He, E.keepAttr = !0, E.forceKeepAttr = void 0, pt(pe.uponSanitizeAttribute, a, E), He = E.attrValue, Tn && (Ye === "id" || Ye === "name") && zi(He, En) !== 0 && (zt(he, a, Y), He = En + He), re && Me(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        zt(he, a, Y);
        continue;
      }
      if (Ye === "attributename" && Vi(He, "href")) {
        zt(he, a, Y);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          zt(he, a, Y);
          continue;
        }
        if (!W && Me(Nu, He)) {
          zt(he, a, Y);
          continue;
        }
        if (Z && (He = er(He)), !si(H, Ye, He)) {
          zt(he, a, Y);
          continue;
        }
        He = Nl(H, Ye, ye, He), He !== Kr && Dl(a, he, ye, He);
      }
    }
    pt(pe.afterSanitizeAttributes, a, null);
  }, rr = function(a) {
    let p = null;
    const E = ei(a);
    for (pt(pe.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (pt(pe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && rr(p.content), te(p) === et.element) {
        const D = X(p);
        an(D) && (Gr(D), rr(D));
      }
    pt(pe.afterSanitizeShadowDOM, a, null);
  }, Gr = function(a) {
    const p = [{
      node: a,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const E = p.pop();
      if (E.shadow) {
        rr(E.shadow);
        continue;
      }
      const D = E.node, Y = te(D) === et.element, he = F(D);
      if (he)
        for (let ye = he.length - 1; ye >= 0; --ye)
          p.push({
            node: he[ye],
            shadow: null
          });
      if (Y) {
        const ye = J ? J(D) : null;
        if (typeof ye == "string" && xe(ye) === "template") {
          const Ke = D.content;
          an(Ke) && p.push({
            node: Ke,
            shadow: null
          });
        }
      }
      if (Y) {
        const ye = X(D);
        an(ye) && p.push({
          node: null,
          shadow: ye
        }, {
          node: ye,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(C) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, D = null, H = null;
    if (jr = !C, jr && (C = "<!-->"), typeof C != "string" && !vn(C) && (C = _u(C), typeof C != "string"))
      throw Gt("dirty is not a string, aborting");
    if (!t.isSupported)
      return C;
    be ? (g = Se, b = ke) : Br(a), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (g = tt(g)), pe.uponSanitizeAttribute.length > 0 && (b = tt(b)), t.removed = [];
    const Y = Hr && typeof C != "string" && vn(C);
    if (Y) {
      Ol(C);
      const Ke = q(C);
      if (typeof Ke == "string") {
        const Ye = xe(Ke);
        if (!g[Ye] || R[Ye])
          throw Zn(C), Gt("root node is forbidden and cannot be sanitized in-place");
      }
      if (tr(C))
        throw Zn(C), Gt("root node is clobbered and cannot be sanitized in-place");
      try {
        Gr(C);
      } catch (Ye) {
        throw Zn(C), Ye;
      }
    } else if (vn(C))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(C, !0), E.nodeType === et.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Gr(E);
    else {
      if (!st && !Z && !ne && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return ge && Pe ? U(C) : C;
      if (p = Qs(C), !p)
        return st ? null : Pe ? Ee : "";
    }
    p && Ge && Dt(p.firstChild);
    const he = Y ? C : p;
    try {
      const Ke = ei(he);
      for (; D = Ke.nextNode(); )
        ri(D, he), oi(D), an(D.content) && rr(D.content);
    } catch (Ke) {
      throw Y && (Zn(C), Yt(t.removed, (Ye) => {
        Ye.element && Qn(Ye.element);
      })), Ke;
    }
    if (Y)
      return Yt(t.removed, (Ke) => {
        Ke.element && Qn(Ke.element);
      }), Z && Wr(C), C;
    if (st) {
      if (Z && Wr(p), Vt)
        for (H = Tt.call(p.ownerDocument); p.firstChild; )
          H.appendChild(p.firstChild);
      else
        H = p;
      return (b.shadowroot || b.shadowrootmode) && (H = Yn.call(r, H, !0)), H;
    }
    let ye = ne ? p.outerHTML : p.innerHTML;
    return ne && g["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Me(Ru, p.ownerDocument.doctype.name) && (ye = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + ye), Z && (ye = er(ye)), ge && Pe ? U(ye) : ye;
  }, t.setConfig = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(C), be = !0, Se = g, ke = b;
  }, t.clearConfig = function() {
    ln = null, be = !1, Se = null, ke = null, ge = Ue, Ee = "";
  }, t.isValidAttribute = function(C, a, p) {
    ln || Br({});
    const E = xe(C), D = xe(a);
    return si(E, D, p);
  }, t.addHook = function(C, a) {
    typeof a == "function" && Xe(pe, C) && wn(pe[C], a);
  }, t.removeHook = function(C, a) {
    if (Xe(pe, C)) {
      if (a !== void 0) {
        const p = fu(pe[C], a);
        return p === -1 ? void 0 : du(pe[C], p, 1)[0];
      }
      return $i(pe[C]);
    }
  }, t.removeHooks = function(C) {
    Xe(pe, C) && (pe[C] = []);
  }, t.removeAllHooks = function() {
    pe = Qi();
  }, t;
}
var Uu = gl();
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ps, eo;
function Hu() {
  if (eo) return ps;
  eo = 1;
  var e = /["'&<>]/;
  ps = t;
  function t(n) {
    var r = "" + n, s = e.exec(r);
    if (!s)
      return r;
    var i, o = "", l = 0, c = 0;
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
      c !== l && (o += r.substring(c, l)), c = l + 1, o += i;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return ps;
}
var ju = Hu();
const to = /* @__PURE__ */ ku(ju);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function $u(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function v(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (L) => L, m = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, _ = (L) => typeof L == "string" || typeof L == "number", I = (L, F, ee) => L.replace(/%n/g, "" + ee).replace(/{([^{}]*)}/g, (X, z) => {
    if (F === void 0 || !(z in F))
      return d(X);
    const w = F[z];
    return _(w) ? d(`${w}`) : typeof w == "object" && _(w.value) ? (w.escape !== !1 ? to : c)(`${w.value}`) : d(X);
  });
  let K = (s?.bundle ?? $u(e)).translations[t] || t;
  return K = Array.isArray(K) ? K[0] : K, m(typeof i == "object" || o !== void 0 ? I(
    K,
    i,
    o
  ) : K);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Gu = { class: "library-filter-panel" }, Ku = { class: "library-filter-panel-summary" }, Yu = ["aria-label"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "" }, cf = ["value"], uf = { value: "" }, ff = ["value"], df = { value: "" }, pf = ["value"], hf = { value: "" }, mf = ["value"], gf = { value: "" }, bf = { value: "1" }, _f = { value: "" }, yf = { value: "1" }, Tf = { value: "title" }, Ef = { value: "recent" }, Sf = { value: "publicationDate" }, vf = { value: "publication" }, Af = { value: "lastOpened" }, xf = { value: "format" }, wf = ["value"], Cf = ["value"], Of = ["aria-label"], Rf = ["aria-label"], Pf = ["href"], If = ["aria-label"], Nf = ["href", "aria-label"], Df = ["aria-label"], Mf = ["href"], Lf = {
  key: 1,
  class: "library-muted"
}, Ff = ["href"], Uf = {
  key: 3,
  class: "library-muted"
}, kf = {
  key: 1,
  class: "library-periodical-groups"
}, Hf = { class: "library-periodical-groups-summary" }, jf = { id: "library-periodical-groups-heading" }, $f = { class: "library-muted" }, Vf = ["href"], zf = { class: "library-muted" }, Bf = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Wf = { class: "library-periodical-groups-summary" }, Gf = { id: "library-periodical-groups-empty-heading" }, Kf = { class: "library-muted" }, Yf = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, qf = { class: "library-muted" }, Xf = {
  key: 4,
  class: "library-cover-gallery"
}, Jf = ["href", "aria-label"], Zf = ["src", "alt"], Qf = { class: "library-cover-summary" }, ed = { class: "library-cover-primary" }, td = ["aria-label"], nd = ["href"], rd = ["onToggle"], sd = ["aria-label"], id = { class: "library-cover-meta" }, od = {
  key: 0,
  class: "library-creator"
}, ld = { class: "library-muted" }, ad = { key: 0 }, cd = { key: 1 }, ud = { key: 2 }, fd = { key: 3 }, dd = { key: 4 }, pd = { key: 5 }, hd = { key: 6 }, md = { key: 7 }, gd = { key: 8 }, bd = {
  key: 1,
  class: "library-muted library-cover-description"
}, _d = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, yd = { key: 0 }, Td = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Ed = {
  key: 0,
  class: "library-muted"
}, Sd = { class: "library-cover-actions" }, vd = ["href"], Ad = ["href"], xd = ["href"], wd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Cd = { class: "library-hero-actions" }, Od = ["href"], Rd = ["href"], Pd = ["href"], Id = ["href"], Nd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Oe(() => t.state.items || []), i = Oe(() => t.state.shelves || []), o = Oe(() => t.state.formats || []), l = Oe(() => t.state.publications || []), c = Oe(() => t.state.publicationSummaries || []), m = Oe(() => t.state.publicationYears || []), d = Oe(() => t.state.creators || []), _ = Oe(() => t.state.scanStatuses || []), I = Oe(() => t.state.workflowStatuses || []), k = Oe(() => t.state.genres || []), K = Oe(() => t.state.classifications || []), L = Oe(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), F = /* @__PURE__ */ jn({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      publication: t.state.activeFilters?.publication || "",
      year: t.state.activeFilters?.year || "",
      creator: t.state.activeFilters?.creator || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      workflowStatus: t.state.activeFilters?.workflowStatus || "",
      genre: t.state.activeFilters?.genre || "",
      classification: t.state.activeFilters?.classification || "",
      scannerConflicts: t.state.activeFilters?.scannerConflicts || "",
      starred: t.state.activeFilters?.starred || "",
      sort: t.state.activeFilters?.sort || "title"
    }), ee = Oe(() => t.state.settingsUrl || ""), X = Oe(() => t.state.metadataExportUrl || ""), z = Oe(() => t.state.metadataSidecarManifestUrl || ""), w = Oe(() => t.state.metadataSidecarBundleUrl || ""), J = Oe(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), ie = {
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
    }, te = Oe(() => Object.entries(ie).map(([de, U]) => ({ key: de, label: U, value: F[de] || "" })).filter((de) => String(de.value).trim() !== "")), q = /* @__PURE__ */ jn({});
    function ge(de) {
      const U = new URLSearchParams(window.location.search);
      U.delete(de), U.delete("page");
      const h = U.toString();
      return h ? `?${h}` : "?";
    }
    function Ee(de) {
      return String(de || "").toUpperCase();
    }
    function Ue(de) {
      return de.nextcloudTags || [];
    }
    function Je(de) {
      const U = new URLSearchParams(window.location.search);
      return U.set("publication", de), U.set("sort", "publication"), U.delete("page"), `?${U.toString()}`;
    }
    function De(de, U) {
      q[de] = !!U?.currentTarget?.open;
    }
    return (de, U) => (j(), V("div", Vu, [
      S("section", zu, [
        S("h2", Bu, x(M(v)("library", "Publication catalogue")), 1),
        S("p", Wu, x(M(v)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        S("details", Gu, [
          S("summary", Ku, x(M(v)("library", "Show catalogue filters")), 1),
          S("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": M(v)("library", "Catalogue search and filters")
          }, [
            S("label", null, [
              ve(x(M(v)("library", "Search title / author")) + " ", 1),
              je(S("input", {
                "onUpdate:modelValue": U[0] || (U[0] = (h) => F.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [Fi, F.q]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Type")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[1] || (U[1] = (h) => F.type = h),
                name: "type"
              }, [
                S("option", qu, x(M(v)("library", "All types")), 1),
                (j(), V(_e, null, $e(n, (h) => S("option", {
                  key: h,
                  value: h
                }, x(h), 9, Xu)), 64))
              ], 512), [
                [Qe, F.type]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Series / periodical")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[2] || (U[2] = (h) => F.publication = h),
                name: "publication"
              }, [
                S("option", Ju, x(M(v)("library", "All series and periodicals")), 1),
                (j(!0), V(_e, null, $e(l.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, Zu))), 128))
              ], 512), [
                [Qe, F.publication]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Publication year")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[3] || (U[3] = (h) => F.year = h),
                name: "year"
              }, [
                S("option", Qu, x(M(v)("library", "All years")), 1),
                (j(!0), V(_e, null, $e(m.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, ef))), 128))
              ], 512), [
                [Qe, F.year]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Creator")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[4] || (U[4] = (h) => F.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                S("option", tf, x(M(v)("library", "All creators")), 1),
                (j(!0), V(_e, null, $e(d.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, nf))), 128))
              ], 512), [
                [Qe, F.creator]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Nextcloud tag")) + " ", 1),
              je(S("input", {
                "onUpdate:modelValue": U[5] || (U[5] = (h) => F.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Fi, F.tag]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Format")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[6] || (U[6] = (h) => F.format = h),
                name: "format"
              }, [
                S("option", rf, x(M(v)("library", "All formats")), 1),
                (j(!0), V(_e, null, $e(o.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(Ee(h)), 9, sf))), 128))
              ], 512), [
                [Qe, F.format]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Shelf")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[7] || (U[7] = (h) => F.shelf = h),
                name: "shelf"
              }, [
                S("option", of, x(M(v)("library", "All shelves")), 1),
                (j(!0), V(_e, null, $e(i.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, lf))), 128))
              ], 512), [
                [Qe, F.shelf]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Scan status")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[8] || (U[8] = (h) => F.status = h),
                name: "status"
              }, [
                S("option", af, x(M(v)("library", "All scan statuses")), 1),
                (j(!0), V(_e, null, $e(_.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, cf))), 128))
              ], 512), [
                [Qe, F.status]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Workflow status")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[9] || (U[9] = (h) => F.workflowStatus = h),
                name: "workflowStatus"
              }, [
                S("option", uf, x(M(v)("library", "All workflow statuses")), 1),
                (j(!0), V(_e, null, $e(I.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, ff))), 128))
              ], 512), [
                [Qe, F.workflowStatus]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Genre")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[10] || (U[10] = (h) => F.genre = h),
                name: "genre"
              }, [
                S("option", df, x(M(v)("library", "All genres")), 1),
                (j(!0), V(_e, null, $e(k.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, pf))), 128))
              ], 512), [
                [Qe, F.genre]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Classification")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[11] || (U[11] = (h) => F.classification = h),
                name: "classification"
              }, [
                S("option", hf, x(M(v)("library", "All classifications")), 1),
                (j(!0), V(_e, null, $e(K.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, x(h), 9, mf))), 128))
              ], 512), [
                [Qe, F.classification]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Scanner conflicts")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[12] || (U[12] = (h) => F.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                S("option", gf, x(M(v)("library", "All metadata")), 1),
                S("option", bf, x(M(v)("library", "Needs review")), 1)
              ], 512), [
                [Qe, F.scannerConflicts]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Starred")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[13] || (U[13] = (h) => F.starred = h),
                name: "starred"
              }, [
                S("option", _f, x(M(v)("library", "All publications")), 1),
                S("option", yf, x(M(v)("library", "Starred only")), 1)
              ], 512), [
                [Qe, F.starred]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Sort")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[14] || (U[14] = (h) => F.sort = h),
                name: "sort"
              }, [
                S("option", Tf, x(M(v)("library", "Title")), 1),
                S("option", Ef, x(M(v)("library", "Recently added")), 1),
                S("option", Sf, x(M(v)("library", "Publication date")), 1),
                S("option", vf, x(M(v)("library", "Series / periodical")), 1),
                S("option", Af, x(M(v)("library", "Recently opened")), 1),
                S("option", xf, x(M(v)("library", "Format")), 1)
              ], 512), [
                [Qe, F.sort]
              ])
            ]),
            S("label", null, [
              ve(x(M(v)("library", "Page size")) + " ", 1),
              S("select", {
                value: L.value.limit,
                name: "limit"
              }, [
                (j(), V(_e, null, $e(r, (h) => S("option", {
                  key: h,
                  value: h
                }, x(h), 9, Cf)), 64))
              ], 8, wf)
            ]),
            S("button", {
              type: "submit",
              class: "button primary",
              "aria-label": M(v)("library", "Apply catalogue filters")
            }, x(M(v)("library", "Apply filters")), 9, Of),
            S("a", {
              href: "?",
              class: "button secondary",
              "aria-label": M(v)("library", "Clear catalogue filters")
            }, x(M(v)("library", "Clear")), 9, Rf),
            S("a", {
              href: J.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, x(M(v)("library", "Review scanner conflicts")), 9, Pf)
          ], 8, Yu)
        ]),
        te.value.length > 0 ? (j(), V("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": M(v)("library", "Active filters")
        }, [
          S("span", null, x(M(v)("library", "Active filters")), 1),
          (j(!0), V(_e, null, $e(te.value, (h) => (j(), V("a", {
            key: h.key,
            href: ge(h.key),
            class: "library-filter-chip",
            "aria-label": `${M(v)("library", "Remove filter")}: ${h.label}`
          }, [
            S("strong", null, x(h.label) + ":", 1),
            ve(" " + x(h.value) + " ", 1),
            U[15] || (U[15] = S("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Nf))), 128))
        ], 8, If)) : Ce("", !0),
        S("nav", {
          class: "library-pagination",
          "aria-label": M(v)("library", "Catalogue pagination")
        }, [
          S("span", null, "Showing " + x(L.value.from) + "–" + x(L.value.to) + " of " + x(L.value.total) + " catalogue items", 1),
          L.value.previousUrl ? (j(), V("a", {
            key: 0,
            href: L.value.previousUrl
          }, x(M(v)("library", "Previous")), 9, Mf)) : (j(), V("span", Lf, x(M(v)("library", "Previous")), 1)),
          L.value.nextUrl ? (j(), V("a", {
            key: 2,
            href: L.value.nextUrl
          }, x(M(v)("library", "Next")), 9, Ff)) : (j(), V("span", Uf, x(M(v)("library", "Next")), 1))
        ], 8, Df),
        c.value.length > 0 ? (j(), V("details", kf, [
          S("summary", Hf, x(M(v)("library", "Show top series and periodicals")), 1),
          S("h3", jf, x(M(v)("library", "Top series and periodicals")), 1),
          S("p", $f, x(M(v)("library", "Jump into recurring publications with one click.")), 1),
          S("ul", null, [
            (j(!0), V(_e, null, $e(c.value, (h) => (j(), V("li", {
              key: h.publication
            }, [
              S("a", {
                href: Je(h.publication)
              }, x(h.publication), 9, Vf),
              S("span", zf, x(h.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (j(), V("details", Bf, [
          S("summary", Wf, x(M(v)("library", "Show top series and periodicals")), 1),
          S("h3", Gf, x(M(v)("library", "No series or periodicals found yet")), 1),
          S("p", Kf, x(M(v)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ce("", !0),
        s.value.length === 0 ? (j(), V("div", Yf, [
          S("h3", null, x(M(v)("library", "No catalogue items match")), 1),
          S("p", qf, x(M(v)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (j(), V("div", Xf, [
          (j(!0), V(_e, null, $e(s.value, (h) => (j(), V("article", {
            key: h.id,
            class: Or(["library-cover-card", { "library-cover-card--open": q[h.id] }])
          }, [
            S("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              S("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, Zf)
            ], 8, Jf),
            S("div", Qf, [
              S("div", ed, [
                S("h3", null, [
                  h.starred ? (j(), V("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": M(v)("library", "Starred")
                  }, "★", 8, td)) : Ce("", !0),
                  ve(x(h.title), 1)
                ]),
                S("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, x(M(v)("library", "Read")), 9, nd)
              ]),
              S("details", {
                class: "library-cover-details",
                onToggle: (le) => De(h.id, le)
              }, [
                S("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${M(v)("library", "Show details and actions")}: ${h.title}`
                }, x(M(v)("library", "Details")), 9, sd),
                S("div", id, [
                  h.creators ? (j(), V("p", od, x(h.creators), 1)) : Ce("", !0),
                  S("p", ld, [
                    S("span", null, x(h.publicationType), 1),
                    h.publication ? (j(), V("span", ad, " · " + x(h.publication), 1)) : Ce("", !0),
                    h.publicationDate ? (j(), V("span", cd, " · " + x(h.publicationDate), 1)) : Ce("", !0),
                    h.workflowStatus ? (j(), V("span", ud, " · Workflow status: " + x(h.workflowStatus), 1)) : Ce("", !0),
                    h.genres?.length ? (j(), V("span", fd, " · Genres: " + x(h.genres.join("; ")), 1)) : Ce("", !0),
                    h.classifications?.length ? (j(), V("span", dd, " · Classifications: " + x(h.classifications.join("; ")), 1)) : Ce("", !0),
                    h.hasScannerConflict ? (j(), V("span", pd, " · Needs scanner review: " + x(h.scannerConflictCount) + " fields", 1)) : Ce("", !0),
                    h.lastOpenedAt ? (j(), V("span", hd, " · Last opened: " + x(h.lastOpenedAt), 1)) : Ce("", !0),
                    h.extension ? (j(), V("span", md, " · Format: " + x(Ee(h.extension)), 1)) : Ce("", !0),
                    h.shelf ? (j(), V("span", gd, " · Shelf: " + x(h.shelf), 1)) : Ce("", !0)
                  ]),
                  h.description ? (j(), V("p", bd, x(h.description), 1)) : Ce("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (j(), V("p", _d, [
                    ve(" scanStatus: " + x(h.scanStatus || "unknown"), 1),
                    h.scanError ? (j(), V("span", yd, " · scanError: " + x(h.scanError), 1)) : Ce("", !0)
                  ])) : Ce("", !0),
                  S("div", Td, [
                    Ue(h).length === 0 ? (j(), V("span", Ed, "No Nextcloud tags")) : (j(!0), V(_e, { key: 1 }, $e(Ue(h), (le) => (j(), V("span", {
                      key: le.id,
                      class: "library-tag"
                    }, x(le.name), 1))), 128))
                  ]),
                  S("p", Sd, [
                    S("a", {
                      href: h.filesUrl
                    }, x(M(v)("library", "Show in Files")), 9, vd),
                    U[16] || (U[16] = ve(" · ", -1)),
                    S("a", {
                      href: h.downloadUrl
                    }, x(M(v)("library", "Download source")), 9, Ad),
                    U[17] || (U[17] = ve(" · ", -1)),
                    S("a", {
                      href: h.detailsUrl
                    }, x(M(v)("library", "Details")), 9, xd)
                  ])
                ])
              ], 40, rd)
            ])
          ], 2))), 128))
        ]))
      ]),
      S("section", wd, [
        U[18] || (U[18] = S("div", null, [
          S("h2", null, "Library"),
          S("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        S("div", Cd, [
          S("a", {
            href: ee.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Od),
          X.value ? (j(), V("a", {
            key: 0,
            href: X.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Rd)) : Ce("", !0),
          z.value ? (j(), V("a", {
            key: 1,
            href: z.value,
            class: "button secondary",
            "aria-label": "Export sidecar manifest"
          }, "Export sidecar manifest", 8, Pd)) : Ce("", !0),
          w.value ? (j(), V("a", {
            key: 2,
            href: w.value,
            class: "button secondary",
            "aria-label": "Export sidecar ZIP"
          }, "Export sidecar ZIP", 8, Id)) : Ce("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), pr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: pr?.dataset.requestToken || no.requestToken || ""
};
function Te(e) {
  return String(e ?? "");
}
function bl(e) {
  return Te(e).toUpperCase();
}
function Dd(e, t, n, r = Te) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = Te(s), i.textContent = r(s), Te(s) === Te(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = Te(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function un(e, t, n, r, s, i, o = Te) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const m = document.createElement("option");
  m.value = "", m.textContent = s, c.appendChild(m), Dd(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Md(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function Ld(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", v("library", "Catalogue search and filters")), so(r, v("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, v("library", "Type"), "type", n.type, v("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, v("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, v("library", "Format"), "format", n.format, v("library", "All formats"), e.formats || [], bl), un(r, v("library", "Shelf"), "shelf", n.shelf, v("library", "All shelves"), e.shelves || []), un(r, v("library", "Scan status"), "status", n.status, v("library", "All scan statuses"), e.scanStatuses || []), un(r, v("library", "Sort"), "sort", n.sort || "title", v("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, v("library", "Page size"), "limit", t.limit || 100, v("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", v("library", "Apply catalogue filters")), s.textContent = v("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", v("library", "Clear catalogue filters")), i.textContent = v("library", "Clear"), r.append(s, i), r;
}
function Fd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = Te(e.settingsUrl || ""), i = Te(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = v("library", "Publication catalogue"), l.appendChild(c);
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = v("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(m);
  const d = document.createElement("details");
  d.className = "library-filter-panel";
  const _ = document.createElement("summary");
  _.className = "library-filter-panel-summary", _.textContent = v("library", "Show catalogue filters"), d.append(_, Ld(e, r)), l.appendChild(d);
  const I = document.createElement("nav");
  I.className = "library-pagination", I.setAttribute("aria-label", v("library", "Catalogue pagination"));
  const k = document.createElement("span");
  k.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, I.appendChild(k), l.appendChild(I);
  const K = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], L = document.createElement("details");
  L.className = K.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const F = document.createElement("summary");
  F.className = "library-periodical-groups-summary", F.textContent = v("library", "Show top series and periodicals"), L.appendChild(F);
  const ee = document.createElement("h3");
  ee.textContent = K.length > 0 ? v("library", "Top series and periodicals") : v("library", "No series or periodicals found yet");
  const X = document.createElement("p");
  if (X.className = "library-muted", X.textContent = K.length > 0 ? v("library", "Jump into recurring publications with one click.") : v("library", "Add publication or series names in item details to build this shortcut panel."), L.append(ee, X), K.length > 0) {
    const z = document.createElement("ul");
    for (const w of K) {
      const J = document.createElement("li"), ie = document.createElement("a");
      ie.href = Md(Te(w.publication)), ie.textContent = Te(w.publication);
      const te = document.createElement("span");
      te.className = "library-muted", te.textContent = `${w.itemCount} items`, J.append(ie, te), z.appendChild(J);
    }
    L.appendChild(z);
  }
  if (l.appendChild(L), n.length === 0) {
    const z = document.createElement("div");
    z.className = "library-empty-content", z.setAttribute("role", "status");
    const w = document.createElement("h3");
    w.textContent = v("library", "No catalogue items match");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = v("library", "Scan enabled roots or clear the active filters."), z.append(w, J), l.appendChild(z);
  } else {
    const z = document.createElement("div");
    z.className = "library-cover-gallery";
    for (const w of n) {
      const J = document.createElement("article");
      J.className = "library-cover-card";
      const ie = document.createElement("a");
      ie.className = "library-cover-link", ie.href = Te(w.openUrl || "#"), ie.setAttribute("aria-label", `Read ${Te(w.title || "publication")}`);
      const te = document.createElement("img");
      te.className = "library-cover-image", te.src = Te(w.coverUrl || ""), te.alt = `Cover for ${Te(w.title || "publication")}`, te.loading = "lazy", ie.appendChild(te);
      const q = document.createElement("div");
      q.className = "library-cover-summary";
      const ge = document.createElement("h3");
      if (ge.textContent = Te(w.title || "Untitled publication"), q.appendChild(ge), w.creators) {
        const h = document.createElement("p");
        h.className = "library-creator", h.textContent = Te(w.creators), q.appendChild(h);
      }
      const Ee = document.createElement("p");
      Ee.className = "library-muted", Ee.textContent = [
        Te(w.publicationType || "other"),
        w.extension ? `Format: ${bl(w.extension)}` : "",
        w.shelf ? `Shelf: ${Te(w.shelf)}` : ""
      ].filter(Boolean).join(" · "), q.appendChild(Ee);
      const Ue = document.createElement("p"), Je = document.createElement("a");
      Je.href = Te(w.openUrl || "#"), Je.textContent = v("library", "Read");
      const De = document.createElement("a");
      De.href = Te(w.filesUrl || "#"), De.textContent = v("library", "Show in Files");
      const de = document.createElement("a");
      de.href = Te(w.downloadUrl || "#"), de.textContent = v("library", "Download source");
      const U = document.createElement("a");
      U.href = Te(w.detailsUrl || "#"), U.textContent = v("library", "Details"), Ue.append(Je, document.createTextNode(" · "), De, document.createTextNode(" · "), de, document.createTextNode(" · "), U), q.appendChild(Ue), J.append(ie, q), z.appendChild(J);
    }
    l.appendChild(z);
  }
  if (o.appendChild(l), s || i) {
    const z = document.createElement("section");
    z.className = "library-hero library-secondary-panel", z.setAttribute("aria-label", "Library settings");
    const w = document.createElement("div"), J = document.createElement("h2");
    J.textContent = "Library";
    const ie = document.createElement("p");
    ie.className = "library-lede", ie.textContent = "Browse publications already stored in Nextcloud.", w.append(J, ie);
    const te = document.createElement("div");
    if (te.className = "library-hero-actions", s) {
      const q = document.createElement("a");
      q.href = s, q.className = "button secondary", q.setAttribute("aria-label", "Open Library settings"), q.textContent = "Library settings", te.appendChild(q);
    }
    if (i) {
      const q = document.createElement("a");
      q.href = i, q.className = "button secondary", q.setAttribute("aria-label", "Export corrected metadata"), q.textContent = "Export corrected metadata", te.appendChild(q);
    }
    if (e.metadataSidecarManifestUrl) {
      const q = document.createElement("a");
      q.href = e.metadataSidecarManifestUrl, q.className = "button secondary", q.setAttribute("aria-label", "Export sidecar manifest"), q.textContent = "Export sidecar manifest", te.appendChild(q);
    }
    if (e.metadataSidecarBundleUrl) {
      const q = document.createElement("a");
      q.href = e.metadataSidecarBundleUrl, q.className = "button secondary", q.setAttribute("aria-label", "Export sidecar ZIP"), q.textContent = "Export sidecar ZIP", te.appendChild(q);
    }
    z.append(w, te), o.appendChild(z);
  }
  return o;
}
if (pr)
  try {
    Qc(Nd, { state: ro }).mount(pr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), pr.replaceChildren(Fd(ro));
  }
//# sourceMappingURL=library-main.mjs.map
