// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ue = {}, pn = [], _t = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vr = (e) => e.startsWith("onUpdate:"), Ue = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dl = Object.prototype.hasOwnProperty, le = (e, t) => Dl.call(e, t), G = Array.isArray, Ft = (e) => Bn(e) === "[object Map]", en = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", Q = (e) => typeof e == "function", Ae = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", oo = (e) => (ce(e) || Q(e)) && Q(e.then) && Q(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, at = Ar(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, tn = Ar(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = Ar(
  (e) => e ? `on${co(e)}` : ""
), At = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, uo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, xr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ai;
const wr = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Os(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ae(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Ae(e) || ce(e))
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
function Rs(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = Rs(e[n]);
      r && (t += r + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ xs(Vl);
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
  if (n = ce(e), r = ce(t), n || r) {
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
const po = (e) => !!(e && e.__v_isRef === !0), x = (e) => Ae(e) ? e : e == null ? "" : G(e) || ce(e) && (e.toString === lo || !Q(e.toString)) ? po(e) ? x(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : yt(t) ? Yr(t) : ce(t) && !G(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Me;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Me && (Me.active ? (this.parent = Me, this.index = (Me.scopes || (Me.scopes = [])).push(
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
      const n = Me;
      try {
        return Me = this, t();
      } finally {
        Me = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Me, Me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Me === this)
        Me = this.prevScope;
      else {
        let t = Me;
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
  return Me;
}
let pe;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && (Me.active ? Me.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qr.has(this) && (qr.delete(this), this.trigger()));
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
    const t = pe, n = ct;
    pe = this, ct = !0;
    try {
      return this.fn();
    } finally {
      yo(this), pe = t, ct = n, this.flags &= -3;
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
    this.flags & 64 ? qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ps(this) && this.run();
  }
  get dirty() {
    return ps(this);
  }
}
let go = 0, Mn, Dn;
function bo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dn, Dn = e;
    return;
  }
  e.next = Mn, Mn = e;
}
function Ps() {
  go++;
}
function Is() {
  if (--go > 0)
    return;
  if (Dn) {
    let t = Dn;
    for (Dn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mn; ) {
    let t = Mn;
    for (Mn = void 0; t; ) {
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
function ps(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kn) || (e.globalVersion = kn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, r = ct;
  pe = e, ct = !0;
  try {
    _o(e);
    const s = e.fn(e._value);
    (t.version === 0 || At(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    pe = n, ct = r, yo(e), e.flags &= -3;
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
    const n = pe;
    pe = void 0;
    try {
      t();
    } finally {
      pe = n;
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
    if (!pe || !ct || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new ql(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, vo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = r);
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
const hs = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), Hn = /* @__PURE__ */ Symbol(
  ""
);
function Fe(e, t, n) {
  if (ct && pe) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function xt(e, t, n, r, s, i) {
  const o = hs.get(e);
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
    const c = G(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((_, I) => {
        (I === "length" || I === Hn || !yt(I) && I >= d) && l(_);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Hn)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(Jt)), Ft(e) && l(o.get(ms)));
          break;
        case "delete":
          c || (l(o.get(Jt)), Ft(e) && l(o.get(ms)));
          break;
        case "set":
          Ft(e) && l(o.get(Jt));
          break;
      }
  }
  Is();
}
function cn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e ? t : (Fe(t, "iterate", Hn), /* @__PURE__ */ ut(e) ? t : t.map(Pt));
}
function Cr(e) {
  return Fe(e = /* @__PURE__ */ ae(e), "iterate", Hn), e;
}
function gt(e, t) {
  return /* @__PURE__ */ kt(e) ? bn(/* @__PURE__ */ Zt(e) ? Pt(t) : t) : Pt(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => gt(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => G(t) ? cn(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
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
    return Jr(this, "includes", e);
  },
  indexOf(...e) {
    return Jr(this, "indexOf", e);
  },
  join(e) {
    return cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jr(this, "lastIndexOf", e);
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
    return Xr(this, "values", (e) => gt(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ ut(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function Et(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ ut(e), c = o[t];
  if (c !== Jl[t]) {
    const _ = c.apply(e, i);
    return l ? Pt(_) : _;
  }
  let h = n;
  o !== e && (l ? h = function(_, I) {
    return n.call(this, gt(e, _), I, e);
  } : n.length > 2 && (h = function(_, I) {
    return n.call(this, _, I, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ ut(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, _) {
    return l && (l = !1, h = gt(e, h)), n.call(this, h, gt(e, d), _, e);
  }) : n.length > 3 && (o = function(h, d, _) {
    return n.call(this, h, d, _, e);
  }));
  const c = s[t](o, ...r);
  return l ? gt(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ ae(e);
  Fe(r, "iterate", Hn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  Ot(), Ps();
  const r = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return Is(), Rt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function Ql(e) {
  yt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Fe(t, "has", e), t.hasOwnProperty(e);
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
    if ((yt(n) ? Ao.has(n) : Zl(n)) || (s || Fe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ We(l)) {
      const c = o && Cs(n) ? l : l.value;
      return s && ce(c) ? /* @__PURE__ */ bs(c) : c;
    }
    return ce(l) ? s ? /* @__PURE__ */ bs(l) : /* @__PURE__ */ Or(l) : l;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = G(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ kt(i);
      if (!/* @__PURE__ */ ut(r) && !/* @__PURE__ */ kt(r) && (i = /* @__PURE__ */ ae(i), r = /* @__PURE__ */ ae(r)), !o && /* @__PURE__ */ We(i) && !/* @__PURE__ */ We(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : le(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ We(t) ? t : s
    );
    return t === /* @__PURE__ */ ae(s) && c && (l ? At(r, i) && xt(t, "set", n, r) : xt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = le(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && xt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!yt(n) || !Ao.has(n)) && Fe(t, "has", n), r;
  }
  ownKeys(t) {
    return Fe(
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
const gs = (e) => e, rr = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ae(s), o = Ft(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? bn : Pt;
    return !t && Fe(
      i,
      "iterate",
      c ? ms : Jt
    ), Ue(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: _, done: I } = h.next();
          return I ? { value: _, done: I } : {
            value: l ? [d(_[0]), d(_[1])] : d(_),
            done: I
          };
        }
      }
    );
  };
}
function sr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ia(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(s);
      e || (At(s, l) && Fe(o, "get", s), Fe(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? bn : Pt;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Fe(/* @__PURE__ */ ae(s), "iterate", Jt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(s);
      return e || (At(s, l) && Fe(o, "has", s), Fe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ae(l), h = t ? gs : e ? bn : Pt;
      return !e && Fe(c, "iterate", Jt), l.forEach((d, _) => s.call(i, h(d), h(_), o));
    }
  };
  return Ue(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ae(this), o = rr(i), l = /* @__PURE__ */ ae(s), c = !t && !/* @__PURE__ */ ut(s) && !/* @__PURE__ */ kt(s) ? l : s;
        return o.has.call(i, c) || At(s, c) && o.has.call(i, s) || At(l, c) && o.has.call(i, l) || (i.add(c), xt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ut(i) && !/* @__PURE__ */ kt(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ ae(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? At(i, d) && xt(o, "set", s, i) : xt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ae(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && xt(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ ae(this), i = s.size !== 0, o = s.clear();
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
function Ms(e, t) {
  const n = ia(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    le(n, s) && s in r ? n : r,
    s,
    i
  );
}
const oa = {
  get: /* @__PURE__ */ Ms(!1, !1)
}, la = {
  get: /* @__PURE__ */ Ms(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Ms(!0, !1)
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
function Or(e) {
  return /* @__PURE__ */ kt(e) ? e : Ds(
    e,
    !1,
    ta,
    oa,
    Co
  );
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return Ds(
    e,
    !1,
    ra,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return Ds(
    e,
    !0,
    na,
    aa,
    Ro
  );
}
function Ds(e, t, n, r, s) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function da(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const Pt = (e) => ce(e) ? /* @__PURE__ */ Or(e) : e, bn = (e) => ce(e) ? /* @__PURE__ */ bs(e) : e;
// @__NO_SIDE_EFFECTS__
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function D(e) {
  return /* @__PURE__ */ We(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : D(Reflect.get(e, t, n)),
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
    pe !== this)
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
const ir = {}, pr = /* @__PURE__ */ new WeakMap();
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function ba(e, t, n = ue) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (w) => s ? w : /* @__PURE__ */ ut(w) || s === !1 || s === 0 ? wt(w, 1) : wt(w);
  let d, _, I, k, K = !1, L = !1;
  if (/* @__PURE__ */ We(e) ? (_ = () => e.value, K = /* @__PURE__ */ ut(e)) : /* @__PURE__ */ Zt(e) ? (_ = () => h(e), K = !0) : G(e) ? (L = !0, K = e.some((w) => /* @__PURE__ */ Zt(w) || /* @__PURE__ */ ut(w)), _ = () => e.map((w) => {
    if (/* @__PURE__ */ We(w))
      return w.value;
    if (/* @__PURE__ */ Zt(w))
      return h(w);
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
    d.stop(), F && F.active && ws(F.effects, d);
  };
  if (i && t) {
    const w = t;
    t = (...J) => {
      const ie = w(...J);
      return ee(), ie;
    };
  }
  let q = L ? new Array(e.length).fill(ir) : ir;
  const z = (w) => {
    if (!(!(d.flags & 1) || !d.dirty && !w))
      if (t) {
        const J = d.run();
        if (w || s || K || (L ? J.some((ie, te) => At(ie, q[te])) : At(J, q))) {
          I && I();
          const ie = Kt;
          Kt = d;
          try {
            const te = [
              J,
              // pass undefined as the old value when it's changed for the first time
              q === ir ? void 0 : L && q[0] === ir ? [] : q,
              k
            ];
            q = J, c ? c(t, 3, te) : (
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
    const w = pr.get(d);
    if (w) {
      if (c)
        c(w, 4);
      else
        for (const J of w) J();
      pr.delete(d);
    }
  }, t ? r ? z(!0) : q = d.run() : o ? o(z.bind(null, !0), !0) : d.run(), ee.pause = d.pause.bind(d), ee.resume = d.resume.bind(d), ee.stop = ee, ee;
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
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
function Wn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Rr(s, t, n);
  }
}
function ft(e, t, n, r) {
  if (Q(e)) {
    const s = Wn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (G(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(ft(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ue;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ot(), Wn(i, null, 10, [
        e,
        c,
        h
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
let hr = null;
function No(e) {
  const t = hr || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = mt + 1, n = ze.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ze[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? ze.push(e) : ze.splice(ya(t), 0, e), e.flags |= 1, Mo();
  }
}
function Mo() {
  hr || (hr = Io.then(Lo));
}
function Ta(e) {
  if (!G(e))
    Lt && e.id === -1 ? Lt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  Mo();
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
function Do(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, r) => jn(n) - jn(r)
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
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (mt = 0; mt < ze.length; mt++) {
      const t = ze[mt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
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
    mt = -1, ze.length = 0, Do(), hr = null, (ze.length || hn.length) && Lo();
  }
}
let it = null, Fo = null;
function mr(e) {
  const t = it;
  return it = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = it, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && vi(-1);
    const i = mr(t), o = Qt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Qt.length; c > o; c--) ol();
      mr(i), r._d && vi(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function je(e, t) {
  if (it === null)
    return e;
  const n = Dr(it), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ue] = t[s];
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
function ur(e, t, n = !1) {
  const r = Tc();
  if (r || mn) {
    let s = mn ? mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(r && r.proxy) : t;
  }
}
const va = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => ur(va);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = ue) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Ue({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const k = Aa();
      h = k.__watcherHandles || (k.__watcherHandles = []);
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
    Xe(k, d && d.suspense);
  } : i !== "sync" && (_ = !0, l.scheduler = (k, K) => {
    K ? k() : Fs(k);
  }), l.augmentJob = (k) => {
    t && (k.flags |= 4), _ && (k.flags |= 2, d && (k.id = d.uid, k.i = d));
  };
  const I = ba(e, t, l);
  return zn && (h ? h.push(I) : c && I()), I;
}
function xa(e, t, n) {
  const r = this.proxy, s = Ae(e) ? e.includes(".") ? ko(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Q(t) ? i = t : (i = t.handler, n = t);
  const o = Gn(this), l = Uo(s, i.bind(r), n);
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
const wa = /* @__PURE__ */ Symbol("_vte"), Pr = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
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
    return Pr(e.type) && e.children ? Ca(e.children) : e;
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
      Pr(n.type) && Ho(n) || n,
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
const gr = /* @__PURE__ */ new WeakMap();
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
  const i = r.shapeFlag & 4 ? Dr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ue ? l.refs = {} : l.refs, _ = l.setupState, I = /* @__PURE__ */ ae(_), k = _ === ue ? io : (L) => pi(d, L) ? !1 : le(I, L), K = (L, F) => !(F && pi(d, F));
  if (h != null && h !== c) {
    if (hi(t), Ae(h))
      d[h] = null, k(h) && (_[h] = null);
    else if (/* @__PURE__ */ We(h)) {
      const L = t;
      K(h, L.k) && (h.value = null), L.k && (d[L.k] = null);
    }
  }
  if (Q(c))
    Wn(c, l, 12, [o, d]);
  else {
    const L = Ae(c), F = /* @__PURE__ */ We(c);
    if (L || F) {
      const ee = () => {
        if (e.f) {
          const q = L ? k(c) ? _[c] : d[c] : K() || !e.k ? c.value : d[e.k];
          if (s)
            G(q) && ws(q, i);
          else if (G(q))
            q.includes(i) || q.push(i);
          else if (L)
            d[c] = [i], k(c) && (_[c] = d[c]);
          else {
            const z = [i];
            K(c, e.k) && (c.value = z), e.k && (d[e.k] = z);
          }
        } else L ? (d[c] = o, k(c) && (_[c] = o)) : F && (K(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const q = () => {
          ee(), gr.delete(e);
        };
        q.id = -1, gr.set(e, q), Xe(q, n);
      } else
        hi(e), ee();
    }
  }
}
function hi(e) {
  const t = gr.get(e);
  t && (t.flags |= 8, gr.delete(e));
}
wr().requestIdleCallback;
wr().cancelIdleCallback;
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
  if (Ir(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ks(s.parent.vnode) && Pa(r, t, n, s), s = s.parent;
  }
}
function Pa(e, t, n, r) {
  const s = Ir(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Vo(() => {
    ws(r[t], s);
  }, n);
}
function Ir(e, t, n = Be, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ot();
      const l = Gn(n), c = ft(t, n, e, o);
      return l(), Rt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Nt = (e) => (t, n = Be) => {
  (!zn || e === "sp") && Ir(e, (...r) => t(...r), n);
}, Ia = Nt("bm"), Na = Nt("m"), Ma = Nt(
  "bu"
), Da = Nt("u"), La = Nt(
  "bum"
), Vo = Nt("um"), Fa = Nt(
  "sp"
), Ua = Nt("rtg"), ka = Nt("rtc");
function Ha(e, t = Be) {
  Ir("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function $e(e, t, n, r) {
  let s;
  const i = n, o = G(e);
  if (o || Ae(e)) {
    const l = o && /* @__PURE__ */ Zt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ ut(e), h = /* @__PURE__ */ kt(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, _ = e.length; d < _; d++)
      s[d] = t(
        c ? h ? bn(Pt(e[d])) : Pt(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (ce(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, h = l.length; c < h; c++) {
        const d = l[c];
        s[c] = t(e[d], d, c, i);
      }
    }
  else
    s = [];
  return s;
}
const _s = (e) => e ? ul(e) ? Dr(e) : _s(e.parent) : null, Un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ue(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = No.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== ue && !e.__isScriptSetup && le(e, t), $a = {
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
        if (es(r, t))
          return o[t] = 1, r[t];
        if (s !== ue && le(s, t))
          return o[t] = 2, s[t];
        if (le(i, t))
          return o[t] = 3, i[t];
        if (n !== ue && le(n, t))
          return o[t] = 4, n[t];
        ys && (o[t] = 0);
      }
    }
    const h = Un[t];
    let d, _;
    if (h)
      return t === "$attrs" && Fe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ue && le(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      _ = c.config.globalProperties, le(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== ue && le(r, t) ? (r[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ue && l[0] !== "$" && le(e, l) || es(t, l) || le(i, l) || le(r, l) || le(Un, l) || le(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ys = !0;
function Va(e) {
  const t = Bo(e), n = e.proxy, r = e.ctx;
  ys = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: _,
    mounted: I,
    beforeUpdate: k,
    updated: K,
    activated: L,
    deactivated: F,
    beforeDestroy: ee,
    beforeUnmount: q,
    destroyed: z,
    unmounted: w,
    render: J,
    renderTracked: ie,
    renderTriggered: te,
    errorCaptured: X,
    serverPrefetch: he,
    // public API
    expose: Ee,
    inheritAttrs: Ge,
    // assets
    components: me,
    directives: U,
    filters: g
  } = t;
  if (h && za(h, r, null), o)
    for (const ge in o) {
      const oe = o[ge];
      Q(oe) && (r[ge] = oe.bind(n));
    }
  if (s) {
    const ge = s.call(n, n);
    ce(ge) && (e.data = /* @__PURE__ */ Or(ge));
  }
  if (ys = !0, i)
    for (const ge in i) {
      const oe = i[ge], ot = Q(oe) ? oe.bind(n, n) : Q(oe.get) ? oe.get.bind(n, n) : _t, Ht = !Q(oe) && Q(oe.set) ? oe.set.bind(n) : _t, Tt = Re({
        get: ot,
        set: Ht
      });
      Object.defineProperty(r, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (rt) => Tt.value = rt
      });
    }
  if (l)
    for (const ge in l)
      zo(l[ge], r, n, ge);
  if (c) {
    const ge = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(ge).forEach((oe) => {
      Sa(oe, ge[oe]);
    });
  }
  d && gi(d, e, "c");
  function xe(ge, oe) {
    G(oe) ? oe.forEach((ot) => ge(ot.bind(n))) : oe && ge(oe.bind(n));
  }
  if (xe(Ia, _), xe(Na, I), xe(Ma, k), xe(Da, K), xe(Oa, L), xe(Ra, F), xe(Ha, X), xe(ka, ie), xe(Ua, te), xe(La, q), xe(Vo, w), xe(Fa, he), G(Ee))
    if (Ee.length) {
      const ge = e.exposed || (e.exposed = {});
      Ee.forEach((oe) => {
        Object.defineProperty(ge, oe, {
          get: () => n[oe],
          set: (ot) => n[oe] = ot,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === _t && (e.render = J), Ge != null && (e.inheritAttrs = Ge), me && (e.components = me), U && (e.directives = U), he && jo(e);
}
function za(e, t, n = _t) {
  G(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ce(s) ? "default" in s ? i = ur(
      s.from || r,
      s.default,
      !0
    ) : i = ur(s.from || r) : i = ur(s), /* @__PURE__ */ We(i) ? Object.defineProperty(t, r, {
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
    Q(i) && Zr(s, i);
  } else if (Q(e))
    Zr(s, e.bind(n));
  else if (ce(e))
    if (G(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(i) && Zr(s, i, e);
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
    (h) => br(c, h, o, !0)
  ), br(c, t, o)), ce(t) && i.set(t, c), c;
}
function br(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && br(e, i, n, !0), s && s.forEach(
    (o) => br(e, o, n, !0)
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
    return Ue(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rn(Ts(e), Ts(t));
}
function Ts(e) {
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
  return e ? Ue(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ue(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ue(/* @__PURE__ */ Object.create(null), e);
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
    Q(r) || (r = Ue({}, r)), s != null && !ce(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
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
        return o.has(d) || (d && Q(d.install) ? (o.add(d), d.install(h, ..._)) : Q(d) && (o.add(d), d(h, ..._))), h;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), h;
      },
      component(d, _) {
        return _ ? (i.components[d] = _, h) : i.components[d];
      },
      directive(d, _) {
        return _ ? (i.directives[d] = _, h) : i.directives[d];
      },
      mount(d, _, I) {
        if (!c) {
          const k = h._ceVNode || Ct(r, s);
          return k.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(k, d, I), c = !0, h._container = d, d.__vue_app__ = h, Dr(k.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (ft(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, _) {
        return i.provides[d] = _, h;
      },
      runWithContext(d) {
        const _ = mn;
        mn = h;
        try {
          return d();
        } finally {
          mn = _;
        }
      }
    };
    return h;
  };
}
let mn = null;
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${at(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ue;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Ae(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Kr(t)] || // also try camelCase event handler (#2249)
  r[l = Kr(at(t))];
  !c && i && (c = r[l = Kr(tn(t))]), c && ft(
    c,
    e,
    6,
    s
  );
  const h = r[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ft(
      h,
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
    const c = (h) => {
      const d = Go(h, t, !0);
      d && (l = !0, Ue(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (ce(e) && r.set(e, null), null) : (G(i) ? i.forEach((c) => o[c] = null) : Ue(o, i), ce(e) && r.set(e, o), o);
}
function Nr(e, t) {
  return !e || !Sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, tn(t)) || le(e, t));
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
    render: h,
    renderCache: d,
    props: _,
    data: I,
    setupState: k,
    ctx: K,
    inheritAttrs: L
  } = e, F = mr(e);
  let ee, q;
  try {
    if (n.shapeFlag & 4) {
      const w = s || r, J = w;
      ee = bt(
        h.call(
          J,
          w,
          d,
          _,
          k,
          I,
          K
        )
      ), q = l;
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
      ), q = t.props ? l : Za(l);
    }
  } catch (w) {
    Qt.length = 0, Rr(w, e, 1), ee = Ct(It);
  }
  let z = ee;
  if (q && L !== !1) {
    const w = Object.keys(q), { shapeFlag: J } = z;
    w.length && J & 7 && (i && w.some(vr) && (q = Qa(
      q,
      i
    )), z = _n(z, q, !1, !0));
  }
  if (n.dirs && (z = _n(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const w = Pr(z.type) && Ho(z) || z;
    Us(w, n.transition);
  }
  return ee = z, mr(F), ee;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!vr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ec(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ti(r, o, h) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let _ = 0; _ < d.length; _++) {
        const I = d[_];
        if (Ko(o, r, I) && !Nr(h, I))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ti(r, o, h) : !0 : !!o;
  return !1;
}
function Ti(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Ko(t, e, i) && !Nr(n, i))
      return !0;
  }
  return !1;
}
function Ko(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && ce(r) && ce(s) ? !Ut(r, s) : r !== s;
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
  } = e, l = /* @__PURE__ */ ae(s), [c] = e.propsOptions;
  let h = !1;
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
        if (Nr(e.emitsOptions, I))
          continue;
        const k = t[I];
        if (c)
          if (le(i, I))
            k !== i[I] && (i[I] = k, h = !0);
          else {
            const K = at(I);
            s[K] = Es(
              c,
              l,
              K,
              k,
              e,
              !1
            );
          }
        else
          k !== i[I] && (i[I] = k, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const _ in l)
      (!t || // for camelCase
      !le(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = tn(_)) === _ || !le(t, d))) && (c ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[_] = Es(
        c,
        l,
        _,
        void 0,
        e,
        !0
      )) : delete s[_]);
    if (i !== l)
      for (const _ in i)
        (!t || !le(t, _)) && (delete i[_], h = !0);
  }
  h && xt(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Nn(c))
        continue;
      const h = t[c];
      let d;
      s && le(s, d = at(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Nr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ae(n), h = l || ue;
    for (let d = 0; d < i.length; d++) {
      const _ = i[d];
      n[_] = Es(
        s,
        c,
        _,
        h[_],
        e,
        !le(h, _)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = le(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Q(c)) {
        const { propsDefaults: h } = s;
        if (n in h)
          r = h[n];
        else {
          const d = Gn(s);
          r = h[n] = c.call(
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
      Ue(o, I), k && l.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return ce(e) && r.set(e, pn), pn;
  if (G(i))
    for (let d = 0; d < i.length; d++) {
      const _ = at(i[d]);
      Ei(_) && (o[_] = ue);
    }
  else if (i)
    for (const d in i) {
      const _ = at(d);
      if (Ei(_)) {
        const I = i[d], k = o[_] = G(I) || Q(I) ? { type: I } : Ue({}, I), K = k.type;
        let L = !1, F = !0;
        if (G(K))
          for (let ee = 0; ee < K.length; ++ee) {
            const q = K[ee], z = Q(q) && q.name;
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
        ] = F, (L || le(k, "default")) && l.push(_);
      }
    }
  const h = [o, l];
  return ce(e) && r.set(e, h), h;
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
  let i = !0, o = ue;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, Xe = dc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = wr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: h,
    setElementText: d,
    parentNode: _,
    nextSibling: I,
    setScopeId: k = _t,
    insertStaticContent: K
  } = e, L = (u, f, m, A = null, b = null, T = null, O = void 0, R = null, P = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (A = nn(u), rt(u, b, T, !0), u = null), f.patchFlag === -2 && (P = !1, f.dynamicChildren = null);
    const { type: y, ref: B, shapeFlag: N } = f;
    switch (y) {
      case Mr:
        F(u, f, m, A);
        break;
      case It:
        ee(u, f, m, A);
        break;
      case ns:
        u == null && q(f, m, A, O);
        break;
      case _e:
        me(
          u,
          f,
          m,
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
          m,
          A,
          b,
          T,
          O,
          R,
          P
        ) : N & 6 ? U(
          u,
          f,
          m,
          A,
          b,
          T,
          O,
          R,
          P
        ) : (N & 64 || N & 128) && y.process(
          u,
          f,
          m,
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
  }, F = (u, f, m, A) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        A
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && h(b, f.children);
    }
  }, ee = (u, f, m, A) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      A
    ) : f.el = u.el;
  }, q = (u, f, m, A) => {
    [u.el, u.anchor] = K(
      u.children,
      f,
      m,
      A,
      u.el,
      u.anchor
    );
  }, z = ({ el: u, anchor: f }, m, A) => {
    let b;
    for (; u && u !== f; )
      b = I(u), r(u, m, A), u = b;
    r(f, m, A);
  }, w = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = I(u), s(u), u = m;
    s(f);
  }, J = (u, f, m, A, b, T, O, R, P) => {
    if (f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), u == null)
      ie(
        f,
        m,
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
        y && y._beginPatch(), he(
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
  }, ie = (u, f, m, A, b, T, O, R) => {
    let P, y;
    const { props: B, shapeFlag: N, transition: $, dirs: W } = u;
    if (P = u.el = o(
      u.type,
      T,
      B && B.is,
      B
    ), N & 8 ? d(P, u.children) : N & 16 && X(
      u.children,
      P,
      null,
      A,
      b,
      ts(u, T),
      O,
      R
    ), W && Bt(u, null, A, "created"), te(P, u, u.scopeId, O, A), B) {
      for (const re in B)
        re !== "value" && !Nn(re) && i(P, re, null, B[re], T, A);
      "value" in B && i(P, "value", null, B.value, T), (y = B.onVnodeBeforeMount) && ht(y, A, u);
    }
    W && Bt(u, null, A, "beforeMount");
    const Z = uc(b, $);
    Z && $.beforeEnter(P), r(P, f, m), ((y = B && B.onVnodeMounted) || Z || W) && Xe(() => {
      y && ht(y, A, u), Z && $.enter(P), W && Bt(u, null, A, "mounted");
    }, b);
  }, te = (u, f, m, A, b) => {
    if (m && k(u, m), A)
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
  }, X = (u, f, m, A, b, T, O, R, P = 0) => {
    for (let y = P; y < u.length; y++) {
      const B = u[y] = R ? vt(u[y]) : bt(u[y]);
      L(
        null,
        B,
        f,
        m,
        A,
        b,
        T,
        O,
        R
      );
    }
  }, he = (u, f, m, A, b, T, O) => {
    const R = f.el = u.el;
    let { patchFlag: P, dynamicChildren: y, dirs: B } = f;
    P |= u.patchFlag & 16;
    const N = u.props || ue, $ = f.props || ue;
    let W;
    if (m && Wt(m, !1), (W = $.onVnodeBeforeUpdate) && ht(W, m, f, u), B && Bt(f, u, m, "beforeUpdate"), m && Wt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (P = 0, O = !1, y = null), (N.innerHTML && $.innerHTML == null || N.textContent && $.textContent == null) && d(R, ""), y ? Ee(
      u.dynamicChildren,
      y,
      R,
      m,
      A,
      ts(f, b),
      T
    ) : O || oe(
      u,
      f,
      R,
      null,
      m,
      A,
      ts(f, b),
      T,
      !1
    ), P > 0) {
      if (P & 16)
        Ge(R, N, $, m, b);
      else if (P & 2 && N.class !== $.class && i(R, "class", null, $.class, b), P & 4 && i(R, "style", N.style, $.style, b), P & 8) {
        const Z = f.dynamicProps;
        for (let re = 0; re < Z.length; re++) {
          const ne = Z[re], be = N[ne], Se = $[ne];
          (Se !== be || ne === "value") && i(R, ne, be, Se, b, m);
        }
      }
      P & 1 && u.children !== f.children && d(R, f.children);
    } else !O && y == null && Ge(R, N, $, m, b);
    ((W = $.onVnodeUpdated) || B) && Xe(() => {
      W && ht(W, m, f, u), B && Bt(f, u, m, "updated");
    }, A);
  }, Ee = (u, f, m, A, b, T, O) => {
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
          m
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
  }, Ge = (u, f, m, A, b) => {
    if (f !== m) {
      if (f !== ue)
        for (const T in f)
          !Nn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            b,
            A
          );
      for (const T in m) {
        if (Nn(T)) continue;
        const O = m[T], R = f[T];
        O !== R && T !== "value" && i(u, T, R, O, b, A);
      }
      "value" in m && i(u, "value", f.value, m.value, b);
    }
  }, me = (u, f, m, A, b, T, O, R, P) => {
    const y = f.el = u ? u.el : l(""), B = f.anchor = u ? u.anchor : l("");
    let { patchFlag: N, dynamicChildren: $, slotScopeIds: W } = f;
    W && (R = R ? R.concat(W) : W), u == null ? (r(y, m, A), r(B, m, A), X(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
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
      m,
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
      m,
      B,
      b,
      T,
      O,
      R,
      P
    );
  }, U = (u, f, m, A, b, T, O, R, P) => {
    f.slotScopeIds = R, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      m,
      A,
      O,
      P
    ) : g(
      f,
      m,
      A,
      b,
      T,
      O,
      P
    ) : De(u, f, P);
  }, g = (u, f, m, A, b, T, O) => {
    const R = u.component = yc(
      u,
      A,
      b
    );
    if (ks(u) && (R.ctx.renderer = $t), Ec(R, !1, O), R.asyncDep) {
      if (b && b.registerDep(R, xe, O), !u.el) {
        const P = R.subTree = Ct(It);
        ee(null, P, f, m), u.placeholder = P.el;
      }
    } else
      xe(
        R,
        u,
        f,
        m,
        b,
        T,
        O
      );
  }, De = (u, f, m) => {
    const A = f.component = u.component;
    if (ec(u, f, m))
      if (A.asyncDep && !A.asyncResolved) {
        ge(A, f, m);
        return;
      } else
        A.next = f, A.update();
    else
      f.el = u.el, A.vnode = f;
  }, xe = (u, f, m, A, b, T, O) => {
    const R = () => {
      if (u.isMounted) {
        let { next: N, bu: $, u: W, parent: Z, vnode: re } = u;
        {
          const Ke = rl(u);
          if (Ke) {
            N && (N.el = re.el, ge(u, N, O)), Ke.asyncDep.then(() => {
              Xe(() => {
                u.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let ne = N, be;
        Wt(u, !1), N ? (N.el = re.el, ge(u, N, O)) : N = re, $ && cr($), (be = N.props && N.props.onVnodeBeforeUpdate) && ht(be, Z, N, re), Wt(u, !0);
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
        ), N.el = Se.el, ne === null && tc(u, Se.el), W && Xe(W, b), (be = N.props && N.props.onVnodeUpdated) && Xe(
          () => ht(be, Z, N, re),
          b
        );
      } else {
        let N;
        const { el: $, props: W } = f, { bm: Z, m: re, parent: ne, root: be, type: Se } = u, ke = Fn(f);
        Wt(u, !1), Z && cr(Z), !ke && (N = W && W.onVnodeBeforeMount) && ht(N, ne, f), Wt(u, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            Se,
            u.parent ? u.parent.type : void 0
          );
          const Ke = u.subTree = yi(u);
          L(
            null,
            Ke,
            m,
            A,
            u,
            b,
            T
          ), f.el = Ke.el;
        }
        if (re && Xe(re, b), !ke && (N = W && W.onVnodeMounted)) {
          const Ke = f;
          Xe(
            () => ht(N, ne, Ke),
            b
          );
        }
        (f.shapeFlag & 256 || ne && Fn(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && Xe(u.a, b), u.isMounted = !0, f = m = A = null;
      }
    };
    u.scope.on();
    const P = u.effect = new mo(R);
    u.scope.off();
    const y = u.update = P.run.bind(P), B = u.job = P.runIfDirty.bind(P);
    B.i = u, B.id = u.uid, P.scheduler = () => Fs(B), Wt(u, !0), y();
  }, ge = (u, f, m) => {
    f.component = u;
    const A = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, A, m), lc(u, f.children, m), Ot(), di(u), Rt();
  }, oe = (u, f, m, A, b, T, O, R, P = !1) => {
    const y = u && u.children, B = u ? u.shapeFlag : 0, N = f.children, { patchFlag: $, shapeFlag: W } = f;
    if ($ > 0) {
      if ($ & 128) {
        Ht(
          y,
          N,
          m,
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
          m,
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
    W & 8 ? (B & 16 && jt(y, b, T), N !== y && d(m, N)) : B & 16 ? W & 16 ? Ht(
      y,
      N,
      m,
      A,
      b,
      T,
      O,
      R,
      P
    ) : jt(y, b, T, !0) : (B & 8 && d(m, ""), W & 16 && X(
      N,
      m,
      A,
      b,
      T,
      O,
      R,
      P
    ));
  }, ot = (u, f, m, A, b, T, O, R, P) => {
    u = u || pn, f = f || pn;
    const y = u.length, B = f.length, N = Math.min(y, B);
    let $;
    for ($ = 0; $ < N; $++) {
      const W = f[$] = P ? vt(f[$]) : bt(f[$]);
      L(
        u[$],
        W,
        m,
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
    ) : X(
      f,
      m,
      A,
      b,
      T,
      O,
      R,
      P,
      N
    );
  }, Ht = (u, f, m, A, b, T, O, R, P) => {
    let y = 0;
    const B = f.length;
    let N = u.length - 1, $ = B - 1;
    for (; y <= N && y <= $; ) {
      const W = u[y], Z = f[y] = P ? vt(f[y]) : bt(f[y]);
      if (xn(W, Z))
        L(
          W,
          Z,
          m,
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
          m,
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
            m,
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
        const Ie = f[y] = P ? vt(f[y]) : bt(f[y]);
        Ie.key != null && re.set(Ie.key, y);
      }
      let ne, be = 0;
      const Se = $ - Z + 1;
      let ke = !1, Ke = 0;
      const st = new Array(Se);
      for (y = 0; y < Se; y++) st[y] = 0;
      for (y = W; y <= N; y++) {
        const Ie = u[y];
        if (be >= Se) {
          rt(Ie, b, T, !0);
          continue;
        }
        let Ze;
        if (Ie.key != null)
          Ze = re.get(Ie.key);
        else
          for (ne = Z; ne <= $; ne++)
            if (st[ne - Z] === 0 && xn(Ie, f[ne])) {
              Ze = ne;
              break;
            }
        Ze === void 0 ? rt(Ie, b, T, !0) : (st[Ze - Z] = y + 1, Ze >= Ke ? Ke = Ze : ke = !0, L(
          Ie,
          f[Ze],
          m,
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
        const Ie = Z + y, Ze = f[Ie], Tn = f[Ie + 1], En = Ie + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : A;
        st[y] === 0 ? L(
          null,
          Ze,
          m,
          En,
          b,
          T,
          O,
          R,
          P
        ) : ke && (ne < 0 || y !== Vt[ne] ? Tt(Ze, m, En, 2) : ne--);
      }
    }
  }, Tt = (u, f, m, A, b = null) => {
    const { el: T, type: O, transition: R, children: P, shapeFlag: y } = u;
    if (y & 6) {
      Tt(u.component.subTree, f, m, A);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, A);
      return;
    }
    if (y & 64) {
      O.move(u, f, m, $t);
      return;
    }
    if (O === _e) {
      r(T, f, m);
      for (let N = 0; N < P.length; N++)
        Tt(P[N], f, m, A);
      r(u.anchor, f, m);
      return;
    }
    if (O === ns) {
      z(u, f, m);
      return;
    }
    if (A !== 2 && y & 1 && R)
      if (A === 0)
        R.persisted && !T[Qr] ? r(T, f, m) : (R.beforeEnter(T), r(T, f, m), Xe(() => R.enter(T), b));
      else {
        const { leave: N, delayLeave: $, afterLeave: W } = R, Z = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, re = () => {
          const ne = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), R.persisted && !ne ? Z() : N(T, () => {
            Z(), W && W();
          });
        };
        $ ? $(T, Z, re) : re();
      }
    else
      r(T, f, m);
  }, rt = (u, f, m, A = !1, b = !1) => {
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
    if (N === -2 && (b = !1), R != null && (Ot(), Ln(R, null, m, u, !0), Rt()), W != null && (f.renderCache[W] = void 0), B & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const re = B & 1 && $, ne = !Fn(u);
    let be;
    if (ne && (be = O && O.onVnodeBeforeUnmount) && ht(be, f, u), B & 6)
      Lr(u.component, m, A);
    else {
      if (B & 128) {
        u.suspense.unmount(m, A);
        return;
      }
      re && Bt(u, null, f, "beforeUnmount"), B & 64 ? u.type.remove(
        u,
        f,
        m,
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
        m,
        !1,
        !0
      ) : (T === _e && N & 384 || !b && B & 16) && jt(P, f, m), A && Kn(u);
    }
    const Se = Z != null && W == null;
    (ne && (be = O && O.onVnodeUnmounted) || re || Se) && Xe(() => {
      be && ht(be, f, u), re && Bt(u, null, f, "unmounted"), Se && (u.el = null);
    }, m);
  }, Kn = (u) => {
    const { type: f, el: m, anchor: A, transition: b } = u;
    if (f === _e) {
      fe(m, A);
      return;
    }
    if (f === ns) {
      w(u);
      return;
    }
    const T = () => {
      s(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: R } = b, P = () => O(m, T);
      R ? R(u.el, T, P) : P();
    } else
      T();
  }, fe = (u, f) => {
    let m;
    for (; u !== f; )
      m = I(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: A, scope: b, job: T, subTree: O, um: R, m: P, a: y } = u;
    Si(P), Si(y), A && cr(A), b.stop(), T && (T.flags |= 8, rt(O, u, f, m)), R && Xe(R, f), Xe(() => {
      u.isUnmounted = !0;
    }, f);
  }, jt = (u, f, m, A = !1, b = !1, T = 0) => {
    for (let O = T; O < u.length; O++)
      rt(u[O], f, m, A, b);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = I(u.anchor || u.el), m = f && f[wa];
    return m ? I(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let A;
    u == null ? f._vnode && (rt(f._vnode, null, null, !0), A = f._vnode.component) : L(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(A), Do(), yn = !1);
  }, $t = {
    p: L,
    um: rt,
    m: Tt,
    r: Kn,
    mt: g,
    mc: X,
    pc: oe,
    pbc: Ee,
    n: nn,
    o: e
  };
  return {
    render: Yn,
    hydrate: void 0,
    createApp: Ya(Yn)
  };
}
function ts({ type: e, props: t }, n) {
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
    const h = e[r];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < h ? i = l + 1 : o = l;
      h < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
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
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Mr = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let nt = null;
function j(e = !1) {
  Qt.push(nt = e ? null : []);
}
function ol() {
  Qt.pop(), nt = Qt[Qt.length - 1] || null;
}
let $n = 1;
function vi(e, t = !1) {
  $n += e, e < 0 && nt && t && (nt.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? nt || pn : null, ol(), $n > 0 && nt && nt.push(e), e;
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
const cl = ({ key: e }) => e ?? null, fr = ({
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
    ref: t && fr(t),
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
  return l ? (_r(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ae(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
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
    return n && _r(l, n), $n > 0 && !i && nt && (l.shapeFlag & 6 ? nt[nt.indexOf(e)] = l : nt.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !Ae(l) && (t.class = Rs(l)), ce(c) && (/* @__PURE__ */ Ls(c) && !G(c) && (c = Ue({}, c)), t.style = Os(c));
  }
  const o = Ae(e) ? 1 : il(e) ? 128 : Pr(e) ? 64 : ce(e) ? 4 : Q(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Ue({}, e) : e : null;
}
function _n(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? gc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && cl(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? G(i) ? i.concat(fr(t)) : [i, fr(t)] : fr(t)
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
function Oe(e = "", t = !1) {
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
function _r(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), _r(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = it : s === 3 && it && (it.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (r & 65) {
      _r(e, { default: t });
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
        t.class !== r.class && (t.class = Rs([t.class, r.class]));
      else if (s === "style")
        t.style = Os([t.style, r.style]);
      else if (Sr(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(G(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !vr(s) && (t[s] = o);
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
    propsDefaults: ue,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
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
let yr, Vn;
{
  const e = wr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  yr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Be = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Gn = (e) => {
  const t = Be;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, Ai = () => {
  Be && Be.scope.off(), yr(null);
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Ec(e, t = !1, n = !1) {
  t && Vn(t);
  const { props: r, children: s } = e.vnode, i = ul(e);
  nc(e, r, i, t), oc(e, s, n || t);
  const o = i ? Sc(e, t) : void 0;
  return t && Vn(!1), o;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    Ot();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Gn(e), o = Wn(
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
          Vn(!0);
          try {
            xi(e, c, t);
          } finally {
            Vn(!1);
          }
        }).catch((c) => {
          Rr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o);
  } else
    fl(e);
}
function xi(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = Po(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || _t);
  {
    const s = Gn(e);
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
    return Fe(e, "get", ""), e[t];
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
function Dr(e) {
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
const Re = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Ci = St && /* @__PURE__ */ St.createElement("template"), Rc = {
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
const Oi = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Mc = /* @__PURE__ */ Symbol(""), Dc = /(?:^|;)\s*display\s*:/;
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
      const o = r[Mc];
      o && (n += ";" + o), r.cssText = n, i = Dc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Nc] && (r.display = "none"));
}
const or = /\s*!important$/;
function Pn(e, t, n) {
  if (G(n))
    n.forEach((r) => Pn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    or.test(n) ? e.setProperty(t, n.replace(or, ""), "important") : e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    or.test(n) ? e.setProperty(
      tn(r),
      n.replace(or, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], rs = {};
function Fc(e, t) {
  const n = rs[t];
  if (n)
    return n;
  let r = at(t);
  if (r !== "filter" && r in e)
    return rs[t] = r;
  r = co(r);
  for (let s = 0; s < Ri.length; s++) {
    const i = Ri[s] + r;
    if (i in e)
      return rs[t] = i;
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
const Mi = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, r, s = null) {
  const i = e[Mi] || (e[Mi] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Vc(t);
    if (r) {
      const h = i[t] = Wc(
        r,
        s
      );
      qt(e, l, h, c);
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
let ss = 0;
const zc = /* @__PURE__ */ Promise.resolve(), Bc = () => ss || (zc.then(() => ss = 0), ss = Date.now());
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
        const h = o[c];
        h && ft(
          h,
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
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Ic(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? vr(t) || Hc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, o)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ae(r))) ? Ni(e, at(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ii(e, t, r, o));
};
function Kc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Di(t) && Ae(n) ? !1 : t in e;
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
const Tr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (n) => cr(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Xt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function is(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Xt] = Tr(s);
    const i = r || s.props && s.props.type === "number";
    qt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Xt](is(e.value, n, i));
    }), (n || i) && qt(e, "change", () => {
      e.value = is(e.value, n, i);
    }), t || (qt(e, "compositionstart", qc), qt(e, "compositionend", Li), qt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[lr];
    delete e[lr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Xt](is(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[Xt] = Tr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Qe = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, qt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
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
    }), e[Xt] = Tr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Xt] = Tr(n);
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
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Wl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Ut(Er(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Er(e) {
  return "_value" in e ? e._value : e.value;
}
const Jc = /* @__PURE__ */ Ue({ patchProp: Gc }, Rc);
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
    var r, s, i, o, l = [], c = !0, h = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (d) {
      h = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw s;
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
let Pe = Object.freeze, Ne = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, vs = hl.apply, As = hl.construct;
Pe || (Pe = function(t) {
  return t;
});
Ne || (Ne = function(t) {
  return t;
});
vs || (vs = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
As || (As = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Yt = Ce(Array.prototype.forEach), fu = Ce(Array.prototype.lastIndexOf), $i = Ce(Array.prototype.pop), wn = Ce(Array.prototype.push), du = Ce(Array.prototype.splice), gn = Array.isArray, In = Ce(String.prototype.toLowerCase), os = Ce(String.prototype.toString), Vi = Ce(String.prototype.match), Cn = Ce(String.prototype.replace), zi = Ce(String.prototype.indexOf), pu = Ce(String.prototype.trim), hu = Ce(Number.prototype.toString), mu = Ce(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : Ce(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : Ce(Symbol.prototype.toString), Je = Ce(Object.prototype.hasOwnProperty), On = Ce(Object.prototype.toString), Le = Ce(RegExp.prototype.test), Gt = gu(TypeError);
function Ce(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return vs(e, t, r);
  };
}
function gu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return As(e, n);
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
    Je(e, t) || (e[t] = null);
  return e;
}
function tt(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    Je(e, s) && (gn(i) ? t[s] = bu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = tt(i) : t[s] = i);
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
        return Ce(r.get);
      if (typeof r.value == "function")
        return Ce(r.value);
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
    return Le(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gi = Pe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Pe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Pe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Pe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Pe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Pe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ki = Pe(["#text"]), Yi = Pe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Pe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Pe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Pe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ne(/{{[\w\W]*|^[\w\W]*}}/g), vu = Ne(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ne(/\${[\w\W]*/g), xu = Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ne(/^aria-[\-\w]+$/), Xi = Ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ne(/^(?:\w+script|data):/i), Ou = Ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ne(/^html$/i), Pu = Ne(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ne(/<[/\w!]/g), Zi = Ne(/<[/\w]/g), Iu = Ne(/<\/no(script|embed|frames)/i), Nu = Ne(/\/>/i), et = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Mu = Pe(se({}, ml)), Du = (function() {
  const e = {};
  return Yt(ml, (t) => {
    e[t] = Ne(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Pe(e);
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
}, Dt = function(t, n, r, s) {
  return Je(t, n) && gn(t[n]) ? se(s.base ? tt(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = Je(t, n) ? t[n] : void 0;
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
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, _ = e.trustedTypes, I = l.prototype, k = lt(I, "cloneNode"), K = lt(I, "remove"), L = lt(I, "nextSibling"), F = lt(I, "childNodes"), ee = lt(I, "parentNode"), q = lt(I, "shadowRoot"), z = lt(I, "attributes"), w = o && o.prototype ? lt(o.prototype, "nodeType") : null, J = o && o.prototype ? lt(o.prototype, "nodeName") : null, ie = o && o.prototype ? lt(o.prototype, "ownerDocument") : null, te = function(a) {
    return w ? w(a) : a.nodeType;
  }, X = function(a) {
    return J ? J(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const C = n.createElement("template");
    C.content && C.content.ownerDocument && (n = C.content.ownerDocument);
  }
  let he, Ee = "", Ge, me = !1, U = 0;
  const g = function() {
    if (U > 0)
      throw Gt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(a) {
    g(), U++;
    try {
      return he.createHTML(a);
    } finally {
      U--;
    }
  }, xe = function(a) {
    g(), U++;
    try {
      return he.createScriptURL(a);
    } finally {
      U--;
    }
  }, ge = function() {
    return me || (Ge = Fu(_, s), me = !0), Ge;
  }, oe = n, ot = oe.implementation, Ht = oe.createNodeIterator, Tt = oe.createDocumentFragment, rt = oe.getElementsByTagName, Kn = r.importNode;
  let fe = Qi();
  t.isSupported = typeof pl == "function" && typeof ee == "function" && ot && ot.createHTMLDocument !== void 0;
  const Lr = Su, jt = vu, nn = Au, yn = xu, Yn = wu, $t = Cu, Fr = Ou, u = Pu;
  let f = Xi, m = null;
  const A = se({}, [...Gi, ...ls, ...as, ...cs, ...Ki]);
  let b = null;
  const T = se({}, [...Yi, ...us, ...qi, ...ar]);
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
  let B = !0, N = !0, $ = !1, W = !0, Z = !1, re = !0, ne = !1, be = !1, Se = null, ke = null, Ke = !1, st = !1, Vt = !1, Ie = !1, Ze = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, kr = !1, rn = {}, sn = null;
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
  const Ws = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let on = dt, Hr = !1, jr = null;
  const _l = se({}, [qn, Xn, dt], os), Gs = Pe(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = se({}, Gs);
  const Ks = Pe(["annotation-xml"]);
  let Vr = se({}, Ks);
  const yl = se({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let we = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = tt(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, we = Sn === "application/xhtml+xml" ? os : In, m = Dt(a, "ALLOWED_TAGS", A, {
      transform: we
    }), b = Dt(a, "ALLOWED_ATTR", T, {
      transform: we
    }), jr = Dt(a, "ALLOWED_NAMESPACES", _l, {
      transform: os
    }), Bs = Dt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: we,
      base: Ws
    }), Vs = Dt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: we,
      base: zs
    }), sn = Dt(a, "FORBID_CONTENTS", $s, {
      transform: we
    }), R = Dt(a, "FORBID_TAGS", tt({}), {
      transform: we
    }), P = Dt(a, "FORBID_ATTR", tt({}), {
      transform: we
    }), rn = Je(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? tt(a.USE_PROFILES) : a.USE_PROFILES : !1, B = a.ALLOW_ARIA_ATTR !== !1, N = a.ALLOW_DATA_ATTR !== !1, $ = a.ALLOW_UNKNOWN_PROTOCOLS || !1, W = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, re = a.SAFE_FOR_XML !== !1, ne = a.WHOLE_DOCUMENT || !1, st = a.RETURN_DOM || !1, Vt = a.RETURN_DOM_FRAGMENT || !1, Ie = a.RETURN_TRUSTED_TYPE || !1, Ke = a.FORCE_BODY || !1, Ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, kr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : dt, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => se({}, Gs)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => se({}, Ks)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (O = dn(null), Je(p, "tagNameCheck") && Ys(p.tagNameCheck) && (O.tagNameCheck = p.tagNameCheck), Je(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (O.attributeNameCheck = p.attributeNameCheck), Je(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ne(O), Z && (N = !1), Vt && (st = !0), rn && (m = se({}, Ki), b = dn(null), rn.html === !0 && (se(m, Gi), se(b, Yi)), rn.svg === !0 && (se(m, ls), se(b, us), se(b, ar)), rn.svgFilters === !0 && (se(m, as), se(b, us), se(b, ar)), rn.mathMl === !0 && (se(m, cs), se(b, qi), se(b, ar))), y.tagCheck = null, y.attributeCheck = null, Je(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === A && (m = tt(m)), se(m, a.ADD_TAGS, we))), Je(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (b === T && (b = tt(b)), se(b, a.ADD_ATTR, we))), Je(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = tt(sn)), se(sn, a.ADD_FORBID_CONTENTS, we)), Ur && (m["#text"] = !0), ne && se(m, ["html", "head", "body"]), m.table && (se(m, ["tbody"]), delete R.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = he;
      he = a.TRUSTED_TYPES_POLICY;
      try {
        Ee = De("");
      } catch (M) {
        throw he = E, M;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (he = void 0, Ee = "") : (he === void 0 && (he = ge()), he && typeof Ee == "string" && (Ee = De("")));
    Pe && Pe(a), ln = a;
  }, qs = se({}, [...ls, ...as, ...Tu]), Xs = se({}, [...cs, ...Eu]), vl = function(a, p, E) {
    return p.namespaceURI === dt ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, Al = function(a, p, E) {
    return p.namespaceURI === dt ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = ee(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = In(a.tagName), M = In(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? vl(E, p, M) : a.namespaceURI === qn ? Al(E, p, M) : a.namespaceURI === dt ? xl(E, p, M) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Mt = function(a) {
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
  }, Jn = function(a) {
    Zn(a);
    const p = F(a);
    if (p) {
      const M = [];
      Yt(p, (H) => {
        wn(M, H);
      }), Yt(M, (H) => {
        try {
          K(H);
        } catch {
        }
      });
    }
    const E = z(a);
    if (E)
      for (let M = E.length - 1; M >= 0; --M) {
        const H = E[M], Y = H && H.name;
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
          Mt(p);
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
        const M = p[E], H = M && M.name;
        typeof H != "string" || b[we(H)] || Js(a, M, H);
      }
  }, Zn = function(a) {
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
      const E = p.pop(), M = te(E);
      if (M === et.processingInstruction || M === et.comment && Le(Zi, E.data)) {
        try {
          K(E);
        } catch {
        }
        continue;
      }
      if (M === et.element) {
        const Y = E, de = we(X(E));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && Zs("for", de) && Y.removeAttribute("for");
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
    if (Ke)
      a = "<remove></remove>" + a;
    else {
      const Y = Vi(a, /^[\r\n\t ]+/);
      E = Y && Y[0];
    }
    Sn === "application/xhtml+xml" && on === dt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const M = he ? De(a) : a;
    if (on === dt)
      try {
        p = new d().parseFromString(M, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = ot.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = Hr ? Ee : M;
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
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, jt, " "), a = Cn(a, nn, " "), a;
  }, Br = function(a) {
    var p;
    a.normalize();
    const E = ie ? ie(a) : a.ownerDocument, M = Ht.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = M.nextNode();
    for (; H; )
      H.data = Qn(H.data), H = M.nextNode();
    const Y = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    Y && Yt(Y, (de) => {
      an(de.content) && Br(de.content);
    });
  }, er = function(a) {
    const p = J ? J(a) : null;
    return typeof p != "string" || we(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    return !!(re && a.hasChildNodes() && !vn(a.firstElementChild) && Le(Ji, a.textContent) && Le(Ji, a.innerHTML) || re && a.namespaceURI === dt && Mu[p] && (vn(a.firstElementChild) || typeof a.textContent == "string" && Le(Du[p], a.textContent)) || a.nodeType === et.processingInstruction || re && a.nodeType === et.comment && Le(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Le(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, M = new Array(E > 2 ? E - 2 : 0), H = 2; H < E; H++)
        M[H - 2] = arguments[H];
      return !!a(p, ...M);
    }
    return !1;
  }, Pl = function(a, p, E) {
    if (!R[p] && ii(p) && tr(O.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const M = ee(a), H = F(a);
      if (H && M) {
        const Y = H.length;
        for (let de = Y - 1; de >= 0; --de) {
          const ye = a === E ? k(H[de], !0) : H[de];
          M.insertBefore(ye, L(a));
        }
      }
    }
    return Mt(a), !0;
  }, ti = function(a, p, E, M) {
    return a.length === 0 ? p : p === E || p === M ? tt(p) : p;
  }, ni = function(a, p) {
    return a === p || ee(a) !== null ? !1 : (kr && Zn(a), !0);
  }, ri = function(a, p) {
    if (pt(fe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return Mt(a), !0;
    const E = we(X(a));
    if (m = ti(fe.uponSanitizeElement, m, A, Se), pt(fe.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Mt(a), !0;
    if (R[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const H = Pl(a, E, p);
      return H === !1 && pt(fe.afterSanitizeElements, a, null), H;
    }
    if (te(a) === et.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Le(Iu, a.innerHTML))
      return Mt(a), !0;
    if (Z && a.nodeType === et.text) {
      const H = Qn(a.textContent);
      a.textContent !== H && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = H);
    }
    return pt(fe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (P[p] || Zs(p, a) || Ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const M = b[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return N && Le(yn, p) || B && Le(Yn, p) ? !0 : M ? Bs[p] || Le(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || $ && !Le($t, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(O.tagNameCheck, a) && tr(O.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && O.allowCustomizedBuiltInElements && tr(O.tagNameCheck, E)
    );
  }, Il = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Il[In(a)] && Le(u, a);
  }, Nl = function(a, p, E, M) {
    if (he && typeof _ == "object" && typeof _.getAttributeType == "function" && !E)
      switch (_.getAttributeType(a, p)) {
        case "TrustedHTML":
          return De(M);
        case "TrustedScriptURL":
          return xe(M);
      }
    return M;
  }, Ml = function(a, p, E, M) {
    try {
      E ? a.setAttributeNS(E, p, M) : a.setAttribute(p, M), er(a) ? Mt(a) : $i(t.removed);
    } catch {
      zt(p, a);
    }
  }, oi = function(a) {
    pt(fe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    b = ti(fe.uponSanitizeAttribute, b, T, ke);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let M = p.length;
    const H = we(a.nodeName);
    for (; M--; ) {
      const Y = p[M], de = Y.name, ye = Y.namespaceURI, Ye = Y.value, qe = we(de), Gr = Ye;
      let He = de === "value" ? Gr : pu(Gr);
      if (E.attrName = qe, E.attrValue = He, E.keepAttr = !0, E.forceKeepAttr = void 0, pt(fe.uponSanitizeAttribute, a, E), He = E.attrValue, Tn && (qe === "id" || qe === "name") && zi(He, En) !== 0 && (zt(de, a, Y), He = En + He), re && Le(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        zt(de, a, Y);
        continue;
      }
      if (qe === "attributename" && Vi(He, "href")) {
        zt(de, a, Y);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          zt(de, a, Y);
          continue;
        }
        if (!W && Le(Nu, He)) {
          zt(de, a, Y);
          continue;
        }
        if (Z && (He = Qn(He)), !si(H, qe, He)) {
          zt(de, a, Y);
          continue;
        }
        He = Nl(H, qe, ye, He), He !== Gr && Ml(a, de, ye, He);
      }
    }
    pt(fe.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (pt(fe.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (pt(fe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), te(p) === et.element) {
        const M = q(p);
        an(M) && (Wr(M), nr(M));
      }
    pt(fe.afterSanitizeShadowDOM, a, null);
  }, Wr = function(a) {
    const p = [{
      node: a,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const E = p.pop();
      if (E.shadow) {
        nr(E.shadow);
        continue;
      }
      const M = E.node, Y = te(M) === et.element, de = F(M);
      if (de)
        for (let ye = de.length - 1; ye >= 0; --ye)
          p.push({
            node: de[ye],
            shadow: null
          });
      if (Y) {
        const ye = J ? J(M) : null;
        if (typeof ye == "string" && we(ye) === "template") {
          const Ye = M.content;
          an(Ye) && p.push({
            node: Ye,
            shadow: null
          });
        }
      }
      if (Y) {
        const ye = q(M);
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
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, M = null, H = null;
    if (Hr = !C, Hr && (C = "<!-->"), typeof C != "string" && !vn(C) && (C = _u(C), typeof C != "string"))
      throw Gt("dirty is not a string, aborting");
    if (!t.isSupported)
      return C;
    be ? (m = Se, b = ke) : zr(a), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (m = tt(m)), fe.uponSanitizeAttribute.length > 0 && (b = tt(b)), t.removed = [];
    const Y = kr && typeof C != "string" && vn(C);
    if (Y) {
      Ol(C);
      const Ye = X(C);
      if (typeof Ye == "string") {
        const qe = we(Ye);
        if (!m[qe] || R[qe])
          throw Jn(C), Gt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(C))
        throw Jn(C), Gt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(C);
      } catch (qe) {
        throw Jn(C), qe;
      }
    } else if (vn(C))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(C, !0), E.nodeType === et.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Wr(E);
    else {
      if (!st && !Z && !ne && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return he && Ie ? De(C) : C;
      if (p = Qs(C), !p)
        return st ? null : Ie ? Ee : "";
    }
    p && Ke && Mt(p.firstChild);
    const de = Y ? C : p;
    try {
      const Ye = ei(de);
      for (; M = Ye.nextNode(); )
        ri(M, de), oi(M), an(M.content) && nr(M.content);
    } catch (Ye) {
      throw Y && (Jn(C), Yt(t.removed, (qe) => {
        qe.element && Zn(qe.element);
      })), Ye;
    }
    if (Y)
      return Yt(t.removed, (Ye) => {
        Ye.element && Zn(Ye.element);
      }), Z && Br(C), C;
    if (st) {
      if (Z && Br(p), Vt)
        for (H = Tt.call(p.ownerDocument); p.firstChild; )
          H.appendChild(p.firstChild);
      else
        H = p;
      return (b.shadowroot || b.shadowrootmode) && (H = Kn.call(r, H, !0)), H;
    }
    let ye = ne ? p.outerHTML : p.innerHTML;
    return ne && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Le(Ru, p.ownerDocument.doctype.name) && (ye = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + ye), Z && (ye = Qn(ye)), he && Ie ? De(ye) : ye;
  }, t.setConfig = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(C), be = !0, Se = m, ke = b;
  }, t.clearConfig = function() {
    ln = null, be = !1, Se = null, ke = null, he = Ge, Ee = "";
  }, t.isValidAttribute = function(C, a, p) {
    ln || zr({});
    const E = we(C), M = we(a);
    return si(E, M, p);
  }, t.addHook = function(C, a) {
    typeof a == "function" && Je(fe, C) && wn(fe[C], a);
  }, t.removeHook = function(C, a) {
    if (Je(fe, C)) {
      if (a !== void 0) {
        const p = fu(fe[C], a);
        return p === -1 ? void 0 : du(fe[C], p, 1)[0];
      }
      return $i(fe[C]);
    }
  }, t.removeHooks = function(C) {
    Je(fe, C) && (fe[C] = []);
  }, t.removeAllHooks = function() {
    fe = Qi();
  }, t;
}
var Uu = gl();
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds, eo;
function Hu() {
  if (eo) return ds;
  eo = 1;
  var e = /["'&<>]/;
  ds = t;
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
  return ds;
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
  }, c = (L) => L, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, _ = (L) => typeof L == "string" || typeof L == "number", I = (L, F, ee) => L.replace(/%n/g, "" + ee).replace(/{([^{}]*)}/g, (q, z) => {
    if (F === void 0 || !(z in F))
      return d(q);
    const w = F[z];
    return _(w) ? d(`${w}`) : typeof w == "object" && _(w.value) ? (w.escape !== !1 ? to : c)(`${w.value}`) : d(q);
  });
  let K = (s?.bundle ?? $u(e)).translations[t] || t;
  return K = Array.isArray(K) ? K[0] : K, h(typeof i == "object" || o !== void 0 ? I(
    K,
    i,
    o
  ) : K);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Gu = { class: "library-filter-panel" }, Ku = { class: "library-filter-panel-summary" }, Yu = ["aria-label"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "" }, cf = ["value"], uf = { value: "" }, ff = ["value"], df = { value: "" }, pf = ["value"], hf = { value: "" }, mf = ["value"], gf = { value: "" }, bf = { value: "1" }, _f = { value: "" }, yf = { value: "1" }, Tf = { value: "title" }, Ef = { value: "recent" }, Sf = { value: "publicationDate" }, vf = { value: "publication" }, Af = { value: "lastOpened" }, xf = { value: "format" }, wf = ["value"], Cf = ["value"], Of = ["aria-label"], Rf = ["aria-label"], Pf = ["href"], If = ["aria-label"], Nf = ["href", "aria-label"], Mf = ["aria-label"], Df = ["href"], Lf = {
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
}, Jf = ["href", "aria-label"], Zf = ["src", "alt"], Qf = { class: "library-cover-summary" }, ed = { class: "library-cover-primary" }, td = ["aria-label"], nd = ["href"], rd = { class: "library-cover-details" }, sd = ["aria-label"], id = { class: "library-cover-meta" }, od = {
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
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Re(() => t.state.items || []), i = Re(() => t.state.shelves || []), o = Re(() => t.state.formats || []), l = Re(() => t.state.publications || []), c = Re(() => t.state.publicationSummaries || []), h = Re(() => t.state.publicationYears || []), d = Re(() => t.state.creators || []), _ = Re(() => t.state.scanStatuses || []), I = Re(() => t.state.workflowStatuses || []), k = Re(() => t.state.genres || []), K = Re(() => t.state.classifications || []), L = Re(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), F = /* @__PURE__ */ Or({
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
    }), ee = Re(() => t.state.settingsUrl || ""), q = Re(() => t.state.metadataExportUrl || ""), z = Re(() => t.state.metadataSidecarManifestUrl || ""), w = Re(() => t.state.metadataSidecarBundleUrl || ""), J = Re(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), ie = {
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
    }, te = Re(() => Object.entries(ie).map(([me, U]) => ({ key: me, label: U, value: F[me] || "" })).filter((me) => String(me.value).trim() !== ""));
    function X(me) {
      const U = new URLSearchParams(window.location.search);
      U.delete(me), U.delete("page");
      const g = U.toString();
      return g ? `?${g}` : "?";
    }
    function he(me) {
      return String(me || "").toUpperCase();
    }
    function Ee(me) {
      return me.nextcloudTags || [];
    }
    function Ge(me) {
      const U = new URLSearchParams(window.location.search);
      return U.set("publication", me), U.set("sort", "publication"), U.delete("page"), `?${U.toString()}`;
    }
    return (me, U) => (j(), V("div", Vu, [
      S("section", zu, [
        S("h2", Bu, x(D(v)("library", "Publication catalogue")), 1),
        S("p", Wu, x(D(v)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        S("details", Gu, [
          S("summary", Ku, x(D(v)("library", "Show catalogue filters")), 1),
          S("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": D(v)("library", "Catalogue search and filters")
          }, [
            S("label", null, [
              ve(x(D(v)("library", "Search title / author")) + " ", 1),
              je(S("input", {
                "onUpdate:modelValue": U[0] || (U[0] = (g) => F.q = g),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [Fi, F.q]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Type")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[1] || (U[1] = (g) => F.type = g),
                name: "type"
              }, [
                S("option", qu, x(D(v)("library", "All types")), 1),
                (j(), V(_e, null, $e(n, (g) => S("option", {
                  key: g,
                  value: g
                }, x(g), 9, Xu)), 64))
              ], 512), [
                [Qe, F.type]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Series / periodical")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[2] || (U[2] = (g) => F.publication = g),
                name: "publication"
              }, [
                S("option", Ju, x(D(v)("library", "All series and periodicals")), 1),
                (j(!0), V(_e, null, $e(l.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, Zu))), 128))
              ], 512), [
                [Qe, F.publication]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Publication year")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[3] || (U[3] = (g) => F.year = g),
                name: "year"
              }, [
                S("option", Qu, x(D(v)("library", "All years")), 1),
                (j(!0), V(_e, null, $e(h.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, ef))), 128))
              ], 512), [
                [Qe, F.year]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Creator")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[4] || (U[4] = (g) => F.creator = g),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                S("option", tf, x(D(v)("library", "All creators")), 1),
                (j(!0), V(_e, null, $e(d.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, nf))), 128))
              ], 512), [
                [Qe, F.creator]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Nextcloud tag")) + " ", 1),
              je(S("input", {
                "onUpdate:modelValue": U[5] || (U[5] = (g) => F.tag = g),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Fi, F.tag]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Format")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[6] || (U[6] = (g) => F.format = g),
                name: "format"
              }, [
                S("option", rf, x(D(v)("library", "All formats")), 1),
                (j(!0), V(_e, null, $e(o.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(he(g)), 9, sf))), 128))
              ], 512), [
                [Qe, F.format]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Shelf")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[7] || (U[7] = (g) => F.shelf = g),
                name: "shelf"
              }, [
                S("option", of, x(D(v)("library", "All shelves")), 1),
                (j(!0), V(_e, null, $e(i.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, lf))), 128))
              ], 512), [
                [Qe, F.shelf]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Scan status")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[8] || (U[8] = (g) => F.status = g),
                name: "status"
              }, [
                S("option", af, x(D(v)("library", "All scan statuses")), 1),
                (j(!0), V(_e, null, $e(_.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, cf))), 128))
              ], 512), [
                [Qe, F.status]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Workflow status")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[9] || (U[9] = (g) => F.workflowStatus = g),
                name: "workflowStatus"
              }, [
                S("option", uf, x(D(v)("library", "All workflow statuses")), 1),
                (j(!0), V(_e, null, $e(I.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, ff))), 128))
              ], 512), [
                [Qe, F.workflowStatus]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Genre")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[10] || (U[10] = (g) => F.genre = g),
                name: "genre"
              }, [
                S("option", df, x(D(v)("library", "All genres")), 1),
                (j(!0), V(_e, null, $e(k.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, pf))), 128))
              ], 512), [
                [Qe, F.genre]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Classification")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[11] || (U[11] = (g) => F.classification = g),
                name: "classification"
              }, [
                S("option", hf, x(D(v)("library", "All classifications")), 1),
                (j(!0), V(_e, null, $e(K.value, (g) => (j(), V("option", {
                  key: g,
                  value: g
                }, x(g), 9, mf))), 128))
              ], 512), [
                [Qe, F.classification]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Scanner conflicts")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[12] || (U[12] = (g) => F.scannerConflicts = g),
                name: "scannerConflicts"
              }, [
                S("option", gf, x(D(v)("library", "All metadata")), 1),
                S("option", bf, x(D(v)("library", "Needs review")), 1)
              ], 512), [
                [Qe, F.scannerConflicts]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Starred")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[13] || (U[13] = (g) => F.starred = g),
                name: "starred"
              }, [
                S("option", _f, x(D(v)("library", "All publications")), 1),
                S("option", yf, x(D(v)("library", "Starred only")), 1)
              ], 512), [
                [Qe, F.starred]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Sort")) + " ", 1),
              je(S("select", {
                "onUpdate:modelValue": U[14] || (U[14] = (g) => F.sort = g),
                name: "sort"
              }, [
                S("option", Tf, x(D(v)("library", "Title")), 1),
                S("option", Ef, x(D(v)("library", "Recently added")), 1),
                S("option", Sf, x(D(v)("library", "Publication date")), 1),
                S("option", vf, x(D(v)("library", "Series / periodical")), 1),
                S("option", Af, x(D(v)("library", "Recently opened")), 1),
                S("option", xf, x(D(v)("library", "Format")), 1)
              ], 512), [
                [Qe, F.sort]
              ])
            ]),
            S("label", null, [
              ve(x(D(v)("library", "Page size")) + " ", 1),
              S("select", {
                value: L.value.limit,
                name: "limit"
              }, [
                (j(), V(_e, null, $e(r, (g) => S("option", {
                  key: g,
                  value: g
                }, x(g), 9, Cf)), 64))
              ], 8, wf)
            ]),
            S("button", {
              type: "submit",
              class: "button primary",
              "aria-label": D(v)("library", "Apply catalogue filters")
            }, x(D(v)("library", "Apply filters")), 9, Of),
            S("a", {
              href: "?",
              class: "button secondary",
              "aria-label": D(v)("library", "Clear catalogue filters")
            }, x(D(v)("library", "Clear")), 9, Rf),
            S("a", {
              href: J.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, x(D(v)("library", "Review scanner conflicts")), 9, Pf)
          ], 8, Yu)
        ]),
        te.value.length > 0 ? (j(), V("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": D(v)("library", "Active filters")
        }, [
          S("span", null, x(D(v)("library", "Active filters")), 1),
          (j(!0), V(_e, null, $e(te.value, (g) => (j(), V("a", {
            key: g.key,
            href: X(g.key),
            class: "library-filter-chip",
            "aria-label": `${D(v)("library", "Remove filter")}: ${g.label}`
          }, [
            S("strong", null, x(g.label) + ":", 1),
            ve(" " + x(g.value) + " ", 1),
            U[15] || (U[15] = S("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Nf))), 128))
        ], 8, If)) : Oe("", !0),
        S("nav", {
          class: "library-pagination",
          "aria-label": D(v)("library", "Catalogue pagination")
        }, [
          S("span", null, "Showing " + x(L.value.from) + "–" + x(L.value.to) + " of " + x(L.value.total) + " catalogue items", 1),
          L.value.previousUrl ? (j(), V("a", {
            key: 0,
            href: L.value.previousUrl
          }, x(D(v)("library", "Previous")), 9, Df)) : (j(), V("span", Lf, x(D(v)("library", "Previous")), 1)),
          L.value.nextUrl ? (j(), V("a", {
            key: 2,
            href: L.value.nextUrl
          }, x(D(v)("library", "Next")), 9, Ff)) : (j(), V("span", Uf, x(D(v)("library", "Next")), 1))
        ], 8, Mf),
        c.value.length > 0 ? (j(), V("details", kf, [
          S("summary", Hf, x(D(v)("library", "Show top series and periodicals")), 1),
          S("h3", jf, x(D(v)("library", "Top series and periodicals")), 1),
          S("p", $f, x(D(v)("library", "Jump into recurring publications with one click.")), 1),
          S("ul", null, [
            (j(!0), V(_e, null, $e(c.value, (g) => (j(), V("li", {
              key: g.publication
            }, [
              S("a", {
                href: Ge(g.publication)
              }, x(g.publication), 9, Vf),
              S("span", zf, x(g.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (j(), V("details", Bf, [
          S("summary", Wf, x(D(v)("library", "Show top series and periodicals")), 1),
          S("h3", Gf, x(D(v)("library", "No series or periodicals found yet")), 1),
          S("p", Kf, x(D(v)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Oe("", !0),
        s.value.length === 0 ? (j(), V("div", Yf, [
          S("h3", null, x(D(v)("library", "No catalogue items match")), 1),
          S("p", qf, x(D(v)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (j(), V("div", Xf, [
          (j(!0), V(_e, null, $e(s.value, (g) => (j(), V("article", {
            key: g.id,
            class: "library-cover-card"
          }, [
            S("a", {
              class: "library-cover-link",
              href: g.openUrl,
              "aria-label": `Read ${g.title}`
            }, [
              S("img", {
                class: "library-cover-image",
                src: g.coverUrl,
                alt: `Cover for ${g.title}`,
                loading: "lazy"
              }, null, 8, Zf)
            ], 8, Jf),
            S("div", Qf, [
              S("div", ed, [
                S("h3", null, [
                  g.starred ? (j(), V("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": D(v)("library", "Starred")
                  }, "★", 8, td)) : Oe("", !0),
                  ve(x(g.title), 1)
                ]),
                S("a", {
                  class: "library-cover-read",
                  href: g.openUrl
                }, x(D(v)("library", "Read")), 9, nd)
              ]),
              S("details", rd, [
                S("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${D(v)("library", "Show details and actions")}: ${g.title}`
                }, x(D(v)("library", "Details")), 9, sd),
                S("div", id, [
                  g.creators ? (j(), V("p", od, x(g.creators), 1)) : Oe("", !0),
                  S("p", ld, [
                    S("span", null, x(g.publicationType), 1),
                    g.publication ? (j(), V("span", ad, " · " + x(g.publication), 1)) : Oe("", !0),
                    g.publicationDate ? (j(), V("span", cd, " · " + x(g.publicationDate), 1)) : Oe("", !0),
                    g.workflowStatus ? (j(), V("span", ud, " · Workflow status: " + x(g.workflowStatus), 1)) : Oe("", !0),
                    g.genres?.length ? (j(), V("span", fd, " · Genres: " + x(g.genres.join("; ")), 1)) : Oe("", !0),
                    g.classifications?.length ? (j(), V("span", dd, " · Classifications: " + x(g.classifications.join("; ")), 1)) : Oe("", !0),
                    g.hasScannerConflict ? (j(), V("span", pd, " · Needs scanner review: " + x(g.scannerConflictCount) + " fields", 1)) : Oe("", !0),
                    g.lastOpenedAt ? (j(), V("span", hd, " · Last opened: " + x(g.lastOpenedAt), 1)) : Oe("", !0),
                    g.extension ? (j(), V("span", md, " · Format: " + x(he(g.extension)), 1)) : Oe("", !0),
                    g.shelf ? (j(), V("span", gd, " · Shelf: " + x(g.shelf), 1)) : Oe("", !0)
                  ]),
                  g.description ? (j(), V("p", bd, x(g.description), 1)) : Oe("", !0),
                  g.scanStatus !== "indexed" || g.scanError ? (j(), V("p", _d, [
                    ve(" scanStatus: " + x(g.scanStatus || "unknown"), 1),
                    g.scanError ? (j(), V("span", yd, " · scanError: " + x(g.scanError), 1)) : Oe("", !0)
                  ])) : Oe("", !0),
                  S("div", Td, [
                    Ee(g).length === 0 ? (j(), V("span", Ed, "No Nextcloud tags")) : (j(!0), V(_e, { key: 1 }, $e(Ee(g), (De) => (j(), V("span", {
                      key: De.id,
                      class: "library-tag"
                    }, x(De.name), 1))), 128))
                  ]),
                  S("p", Sd, [
                    S("a", {
                      href: g.filesUrl
                    }, x(D(v)("library", "Show in Files")), 9, vd),
                    U[16] || (U[16] = ve(" · ", -1)),
                    S("a", {
                      href: g.downloadUrl
                    }, x(D(v)("library", "Download source")), 9, Ad),
                    U[17] || (U[17] = ve(" · ", -1)),
                    S("a", {
                      href: g.detailsUrl
                    }, x(D(v)("library", "Details")), 9, xd)
                  ])
                ])
              ])
            ])
          ]))), 128))
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
          q.value ? (j(), V("a", {
            key: 0,
            href: q.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Rd)) : Oe("", !0),
          z.value ? (j(), V("a", {
            key: 1,
            href: z.value,
            class: "button secondary",
            "aria-label": "Export sidecar manifest"
          }, "Export sidecar manifest", 8, Pd)) : Oe("", !0),
          w.value ? (j(), V("a", {
            key: 2,
            href: w.value,
            class: "button secondary",
            "aria-label": "Export sidecar ZIP"
          }, "Export sidecar ZIP", 8, Id)) : Oe("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function Te(e) {
  return String(e ?? "");
}
function bl(e) {
  return Te(e).toUpperCase();
}
function Md(e, t, n, r = Te) {
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
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), Md(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Dd(e) {
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
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = v("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h);
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
  const q = document.createElement("p");
  if (q.className = "library-muted", q.textContent = K.length > 0 ? v("library", "Jump into recurring publications with one click.") : v("library", "Add publication or series names in item details to build this shortcut panel."), L.append(ee, q), K.length > 0) {
    const z = document.createElement("ul");
    for (const w of K) {
      const J = document.createElement("li"), ie = document.createElement("a");
      ie.href = Dd(Te(w.publication)), ie.textContent = Te(w.publication);
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
      const X = document.createElement("div");
      X.className = "library-cover-summary";
      const he = document.createElement("h3");
      if (he.textContent = Te(w.title || "Untitled publication"), X.appendChild(he), w.creators) {
        const xe = document.createElement("p");
        xe.className = "library-creator", xe.textContent = Te(w.creators), X.appendChild(xe);
      }
      const Ee = document.createElement("p");
      Ee.className = "library-muted", Ee.textContent = [
        Te(w.publicationType || "other"),
        w.extension ? `Format: ${bl(w.extension)}` : "",
        w.shelf ? `Shelf: ${Te(w.shelf)}` : ""
      ].filter(Boolean).join(" · "), X.appendChild(Ee);
      const Ge = document.createElement("p"), me = document.createElement("a");
      me.href = Te(w.openUrl || "#"), me.textContent = v("library", "Read");
      const U = document.createElement("a");
      U.href = Te(w.filesUrl || "#"), U.textContent = v("library", "Show in Files");
      const g = document.createElement("a");
      g.href = Te(w.downloadUrl || "#"), g.textContent = v("library", "Download source");
      const De = document.createElement("a");
      De.href = Te(w.detailsUrl || "#"), De.textContent = v("library", "Details"), Ge.append(me, document.createTextNode(" · "), U, document.createTextNode(" · "), g, document.createTextNode(" · "), De), X.appendChild(Ge), J.append(ie, X), z.appendChild(J);
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
      const X = document.createElement("a");
      X.href = s, X.className = "button secondary", X.setAttribute("aria-label", "Open Library settings"), X.textContent = "Library settings", te.appendChild(X);
    }
    if (i) {
      const X = document.createElement("a");
      X.href = i, X.className = "button secondary", X.setAttribute("aria-label", "Export corrected metadata"), X.textContent = "Export corrected metadata", te.appendChild(X);
    }
    if (e.metadataSidecarManifestUrl) {
      const X = document.createElement("a");
      X.href = e.metadataSidecarManifestUrl, X.className = "button secondary", X.setAttribute("aria-label", "Export sidecar manifest"), X.textContent = "Export sidecar manifest", te.appendChild(X);
    }
    if (e.metadataSidecarBundleUrl) {
      const X = document.createElement("a");
      X.href = e.metadataSidecarBundleUrl, X.className = "button secondary", X.setAttribute("aria-label", "Export sidecar ZIP"), X.textContent = "Export sidecar ZIP", te.appendChild(X);
    }
    z.append(w, te), o.appendChild(z);
  }
  return o;
}
if (dr)
  try {
    Qc(Nd, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(Fd(ro));
  }
//# sourceMappingURL=library-main.mjs.map
