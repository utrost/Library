// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const le = {}, pn = [], gt = () => {
}, io = () => !1, vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sr = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, se = (e, t) => Ml.call(e, t), K = Array.isArray, Ft = (e) => Wn(e) === "[object Map]", en = (e) => Wn(e) === "[object Set]", li = (e) => Wn(e) === "[object Date]", Z = (e) => typeof e == "function", Ee = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", oo = (e) => (oe(e) || Z(e)) && Z(e.then) && Z(e.catch), lo = Object.prototype.toString, Wn = (e) => lo.call(e), Ll = (e) => Wn(e).slice(8, -1), ao = (e) => Wn(e) === "[object Object]", Cs = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, ot = Ar(
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
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ee(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Ee(e) || oe(e))
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
  if (Ee(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = Rs(e[n]);
      r && (t += r + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ xs(Vl);
function fo(e) {
  return !!e || e === "";
}
function Wl(e, t) {
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
  if (n = _t(e), r = _t(t), n || r)
    return e === t;
  if (n = K(e), r = K(t), n || r)
    return n && r ? Wl(e, t) : !1;
  if (n = oe(e), r = oe(t), n || r) {
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
function Bl(e, t) {
  return e.findIndex((n) => Ut(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), x = (e) => Ee(e) ? e : e == null ? "" : K(e) || oe(e) && (e.toString === lo || !Z(e.toString)) ? po(e) ? x(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : _t(t) ? Yr(t) : oe(t) && !K(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let De;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && De && (De.active ? (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(
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
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = De, De = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (De === this)
        De = this.prevScope;
      else {
        let t = De;
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
  return De;
}
let fe;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && (De.active ? De.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _o(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), bo(this);
    const t = fe, n = lt;
    fe = this, lt = !0;
    try {
      return this.fn();
    } finally {
      yo(this), fe = t, lt = n, this.flags &= -3;
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
let go = 0, Dn, Mn;
function _o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mn, Mn = e;
    return;
  }
  e.next = Dn, Dn = e;
}
function Is() {
  go++;
}
function Ps() {
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
function bo(e) {
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
  const t = e.dep, n = fe, r = lt;
  fe = e, lt = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || At(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    fe = n, lt = r, yo(e), e.flags &= -3;
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
let lt = !0;
const Eo = [];
function Ot() {
  Eo.push(lt), lt = !1;
}
function Rt() {
  const e = Eo.pop();
  lt = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = n;
    }
  }
}
let kn = 0;
class ql {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!fe || !lt || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new ql(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, So(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, kn++, this.notify(t);
  }
  notify(t) {
    Is();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
    }
  }
}
function So(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        So(r);
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
function Le(e, t, n) {
  if (lt && fe) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new vo()), s.map = r, s.key = n), s.track();
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
  if (Is(), t === "clear")
    o.forEach(l);
  else {
    const c = K(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((b, C) => {
        (C === "length" || C === Hn || !_t(C) && C >= d) && l(b);
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
  Ps();
}
function cn(e) {
  const t = /* @__PURE__ */ ie(e);
  return t === e ? t : (Le(t, "iterate", Hn), /* @__PURE__ */ at(e) ? t : t.map(It));
}
function Cr(e) {
  return Le(e = /* @__PURE__ */ ie(e), "iterate", Hn), e;
}
function ht(e, t) {
  return /* @__PURE__ */ kt(e) ? _n(/* @__PURE__ */ Zt(e) ? It(t) : t) : It(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => ht(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => K(t) ? cn(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
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
      (n) => n.map((r) => ht(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Et(
      this,
      "find",
      e,
      t,
      (n) => ht(this, n),
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
      (n) => ht(this, n),
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
    return Xr(this, "values", (e) => ht(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ at(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function Et(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ at(e), c = o[t];
  if (c !== Jl[t]) {
    const b = c.apply(e, i);
    return l ? It(b) : b;
  }
  let h = n;
  o !== e && (l ? h = function(b, C) {
    return n.call(this, ht(e, b), C, e);
  } : n.length > 2 && (h = function(b, C) {
    return n.call(this, b, C, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ at(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, b) {
    return l && (l = !1, h = ht(e, h)), n.call(this, h, ht(e, d), b, e);
  }) : n.length > 3 && (o = function(h, d, b) {
    return n.call(this, h, d, b, e);
  }));
  const c = s[t](o, ...r);
  return l ? ht(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ ie(e);
  Le(r, "iterate", Hn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ ie(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  Ot(), Is();
  const r = (/* @__PURE__ */ ie(e))[t].apply(e, n);
  return Ps(), Rt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function Ql(e) {
  _t(e) || (e = String(e));
  const t = /* @__PURE__ */ ie(this);
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
    const o = K(t);
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
    if ((_t(n) ? Ao.has(n) : Zl(n)) || (s || Le(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ We(l)) {
      const c = o && Cs(n) ? l : l.value;
      return s && oe(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return oe(l) ? s ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Or(l) : l;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = K(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ kt(i);
      if (!/* @__PURE__ */ at(r) && !/* @__PURE__ */ kt(r) && (i = /* @__PURE__ */ ie(i), r = /* @__PURE__ */ ie(r)), !o && /* @__PURE__ */ We(i) && !/* @__PURE__ */ We(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : se(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ We(t) ? t : s
    );
    return t === /* @__PURE__ */ ie(s) && c && (l ? At(r, i) && xt(t, "set", n, r) : xt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = se(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && xt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_t(n) || !Ao.has(n)) && Le(t, "has", n), r;
  }
  ownKeys(t) {
    return Le(
      t,
      "iterate",
      K(t) ? "length" : Jt
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
    const s = this.__v_raw, i = /* @__PURE__ */ ie(s), o = Ft(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : It;
    return !t && Le(
      i,
      "iterate",
      c ? ms : Jt
    ), Fe(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: C } = h.next();
          return C ? { value: b, done: C } : {
            value: l ? [d(b[0]), d(b[1])] : d(b),
            done: C
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
      const i = this.__v_raw, o = /* @__PURE__ */ ie(i), l = /* @__PURE__ */ ie(s);
      e || (At(s, l) && Le(o, "get", s), Le(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : It;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Le(/* @__PURE__ */ ie(s), "iterate", Jt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ie(i), l = /* @__PURE__ */ ie(s);
      return e || (At(s, l) && Le(o, "has", s), Le(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ie(l), h = t ? gs : e ? _n : It;
      return !e && Le(c, "iterate", Jt), l.forEach((d, b) => s.call(i, h(d), h(b), o));
    }
  };
  return Fe(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ie(this), o = rr(i), l = /* @__PURE__ */ ie(s), c = !t && !/* @__PURE__ */ at(s) && !/* @__PURE__ */ kt(s) ? l : s;
        return o.has.call(i, c) || At(s, c) && o.has.call(i, s) || At(l, c) && o.has.call(i, l) || (i.add(c), xt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ at(i) && !/* @__PURE__ */ kt(i) && (i = /* @__PURE__ */ ie(i));
        const o = /* @__PURE__ */ ie(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ ie(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? At(i, d) && xt(o, "set", s, i) : xt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ie(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ie(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && xt(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ ie(this), i = s.size !== 0, o = s.clear();
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
    se(n, s) && s in r ? n : r,
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
function Or(e) {
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
  if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function at(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ie(t) : e;
}
function da(e) {
  return !se(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const It = (e) => oe(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => oe(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function U(e) {
  return /* @__PURE__ */ We(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ We(s) && !/* @__PURE__ */ We(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ Zt(e) ? e : new Proxy(e, pa);
}
class ha {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
      return _o(this, !0), !0;
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
  return Z(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const ir = {}, pr = /* @__PURE__ */ new WeakMap();
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = le) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (F) => s ? F : /* @__PURE__ */ at(F) || s === !1 || s === 0 ? wt(F, 1) : wt(F);
  let d, b, C, P, B = !1, M = !1;
  if (/* @__PURE__ */ We(e) ? (b = () => e.value, B = /* @__PURE__ */ at(e)) : /* @__PURE__ */ Zt(e) ? (b = () => h(e), B = !0) : K(e) ? (M = !0, B = e.some((F) => /* @__PURE__ */ Zt(F) || /* @__PURE__ */ at(F)), b = () => e.map((F) => {
    if (/* @__PURE__ */ We(F))
      return F.value;
    if (/* @__PURE__ */ Zt(F))
      return h(F);
    if (Z(F))
      return c ? c(F, 2) : F();
  })) : Z(e) ? t ? b = c ? () => c(e, 2) : e : b = () => {
    if (C) {
      Ot();
      try {
        C();
      } finally {
        Rt();
      }
    }
    const F = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [P]) : e(P);
    } finally {
      Kt = F;
    }
  } : b = gt, t && s) {
    const F = b, te = s === !0 ? 1 / 0 : s;
    b = () => wt(F(), te);
  }
  const N = Kl(), z = () => {
    d.stop(), N && N.active && ws(N.effects, d);
  };
  if (i && t) {
    const F = t;
    t = (...te) => {
      const _e = F(...te);
      return z(), _e;
    };
  }
  let q = M ? new Array(e.length).fill(ir) : ir;
  const X = (F) => {
    if (!(!(d.flags & 1) || !d.dirty && !F))
      if (t) {
        const te = d.run();
        if (F || s || B || (M ? te.some((_e, be) => At(_e, q[be])) : At(te, q))) {
          C && C();
          const _e = Kt;
          Kt = d;
          try {
            const be = [
              te,
              // pass undefined as the old value when it's changed for the first time
              q === ir ? void 0 : M && q[0] === ir ? [] : q,
              P
            ];
            q = te, c ? c(t, 3, be) : (
              // @ts-expect-error
              t(...be)
            );
          } finally {
            Kt = _e;
          }
        }
      } else
        d.run();
  };
  return l && l(X), d = new mo(b), d.scheduler = o ? () => o(X, !1) : X, P = (F) => ga(F, !1, d), C = d.onStop = () => {
    const F = pr.get(d);
    if (F) {
      if (c)
        c(F, 4);
      else
        for (const te of F) te();
      pr.delete(d);
    }
  }, t ? r ? X(!0) : q = d.run() : o ? o(X.bind(null, !0), !0) : d.run(), z.pause = d.pause.bind(d), z.resume = d.resume.bind(d), z.stop = z, z;
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ We(e))
    wt(e.value, t, n);
  else if (K(e))
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
function Bn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Rr(s, t, n);
  }
}
function ct(e, t, n, r) {
  if (Z(e)) {
    const s = Bn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (K(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(ct(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || le;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let b = 0; b < d.length; b++)
          if (d[b](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ot(), Bn(i, null, 10, [
        e,
        c,
        h
      ]), Rt();
      return;
    }
  }
  ba(e, n, s, r, o);
}
function ba(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Ve = [];
let pt = -1;
const hn = [];
let Lt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function No(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = pt + 1, n = Ve.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Ve[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Ve[Ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Ve.push(e) : Ve.splice(ya(t), 0, e), e.flags |= 1, Do();
  }
}
function Do() {
  hr || (hr = Po.then(Lo));
}
function Ta(e) {
  if (!K(e))
    Lt && e.id === -1 ? Lt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  Do();
}
function di(e, t, n = pt + 1) {
  for (; n < Ve.length; n++) {
    const r = Ve[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Ve.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mo(e) {
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
    for (pt = 0; pt < Ve.length; pt++) {
      const t = Ve[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pt < Ve.length; pt++) {
      const t = Ve[pt];
      t && (t.flags &= -2);
    }
    pt = -1, Ve.length = 0, Mo(), hr = null, (Ve.length || hn.length) && Lo();
  }
}
let rt = null, Fo = null;
function mr(e) {
  const t = rt;
  return rt = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Si(-1);
    const i = mr(t), o = Qt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Qt.length; c > o; c--) ol();
      mr(i), r._d && Si(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function He(e, t) {
  if (rt === null)
    return e;
  const n = Mr(rt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = le] = t[s];
    i && (Z(i) && (i = {
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
function Wt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Ot(), ct(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Rt());
  }
}
function va(e, t) {
  if (ze) {
    let n = ze.provides;
    const r = ze.parent && ze.parent.provides;
    r === n && (n = ze.provides = Object.create(r)), n[e] = t;
  }
}
function ur(e, t, n = !1) {
  const r = Tc();
  if (r || mn) {
    let s = mn ? mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(r && r.proxy) : t;
  }
}
const Sa = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => ur(Sa);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = le) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Fe({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const P = Aa();
      h = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!c) {
      const P = () => {
      };
      return P.stop = gt, P.resume = gt, P.pause = gt, P;
    }
  }
  const d = ze;
  l.call = (P, B, M) => ct(P, d, B, M);
  let b = !1;
  i === "post" ? l.scheduler = (P) => {
    Ye(P, d && d.suspense);
  } : i !== "sync" && (b = !0, l.scheduler = (P, B) => {
    B ? P() : Fs(P);
  }), l.augmentJob = (P) => {
    t && (P.flags |= 4), b && (P.flags |= 2, d && (P.id = d.uid, P.i = d));
  };
  const C = _a(e, t, l);
  return zn && (h ? h.push(C) : c && C()), C;
}
function xa(e, t, n) {
  const r = this.proxy, s = Ee(e) ? e.includes(".") ? ko(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Z(t) ? i = t : (i = t.handler, n = t);
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
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Pt) {
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
    if (t & 32 && Z(n.default))
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
const gr = /* @__PURE__ */ new WeakMap();
function Ln(e, t, n, r, s = !1) {
  if (K(e)) {
    e.forEach(
      (M, N) => Ln(
        M,
        t && (K(t) ? t[N] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === le ? l.refs = {} : l.refs, b = l.setupState, C = /* @__PURE__ */ ie(b), P = b === le ? io : (M) => pi(d, M) ? !1 : se(C, M), B = (M, N) => !(N && pi(d, N));
  if (h != null && h !== c) {
    if (hi(t), Ee(h))
      d[h] = null, P(h) && (b[h] = null);
    else if (/* @__PURE__ */ We(h)) {
      const M = t;
      B(h, M.k) && (h.value = null), M.k && (d[M.k] = null);
    }
  }
  if (Z(c))
    Bn(c, l, 12, [o, d]);
  else {
    const M = Ee(c), N = /* @__PURE__ */ We(c);
    if (M || N) {
      const z = () => {
        if (e.f) {
          const q = M ? P(c) ? b[c] : d[c] : B() || !e.k ? c.value : d[e.k];
          if (s)
            K(q) && ws(q, i);
          else if (K(q))
            q.includes(i) || q.push(i);
          else if (M)
            d[c] = [i], P(c) && (b[c] = d[c]);
          else {
            const X = [i];
            B(c, e.k) && (c.value = X), e.k && (d[e.k] = X);
          }
        } else M ? (d[c] = o, P(c) && (b[c] = o)) : N && (B(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const q = () => {
          z(), gr.delete(e);
        };
        q.id = -1, gr.set(e, q), Ye(q, n);
      } else
        hi(e), z();
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
function $o(e, t, n = ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Pr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ks(s.parent.vnode) && Ia(r, t, n, s), s = s.parent;
  }
}
function Ia(e, t, n, r) {
  const s = Pr(
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
function Pr(e, t, n = ze, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ot();
      const l = Gn(n), c = ct(t, n, e, o);
      return l(), Rt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Nt = (e) => (t, n = ze) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Nt("bm"), Na = Nt("m"), Da = Nt(
  "bu"
), Ma = Nt("u"), La = Nt(
  "bum"
), Vo = Nt("um"), Fa = Nt(
  "sp"
), Ua = Nt("rtg"), ka = Nt("rtc");
function Ha(e, t = ze) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function je(e, t, n, r) {
  let s;
  const i = n, o = K(e);
  if (o || Ee(e)) {
    const l = o && /* @__PURE__ */ Zt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ at(e), h = /* @__PURE__ */ kt(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, b = e.length; d < b; d++)
      s[d] = t(
        c ? h ? _n(It(e[d])) : It(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (oe(e))
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
const bs = (e) => e ? ul(e) ? Mr(e) : bs(e.parent) : null, Un = (
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
    $parent: (e) => bs(e.parent),
    $root: (e) => bs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = No.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== le && !e.__isScriptSetup && se(e, t), $a = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
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
        if (s !== le && se(s, t))
          return o[t] = 2, s[t];
        if (se(i, t))
          return o[t] = 3, i[t];
        if (n !== le && se(n, t))
          return o[t] = 4, n[t];
        ys && (o[t] = 0);
      }
    }
    const h = Un[t];
    let d, b;
    if (h)
      return t === "$attrs" && Le(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== le && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = c.config.globalProperties, se(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== le && se(r, t) ? (r[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== le && l[0] !== "$" && se(e, l) || es(t, l) || se(i, l) || se(r, l) || se(Un, l) || se(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ys = !0;
function Va(e) {
  const t = Wo(e), n = e.proxy, r = e.ctx;
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
    beforeMount: b,
    mounted: C,
    beforeUpdate: P,
    updated: B,
    activated: M,
    deactivated: N,
    beforeDestroy: z,
    beforeUnmount: q,
    destroyed: X,
    unmounted: F,
    render: te,
    renderTracked: _e,
    renderTriggered: be,
    errorCaptured: xe,
    serverPrefetch: ae,
    // public API
    expose: Pe,
    inheritAttrs: me,
    // assets
    components: H,
    directives: g,
    filters: bt
  } = t;
  if (h && za(h, r, null), o)
    for (const de in o) {
      const re = o[de];
      Z(re) && (r[de] = re.bind(n));
    }
  if (s) {
    const de = s.call(n, n);
    oe(de) && (e.data = /* @__PURE__ */ Or(de));
  }
  if (ys = !0, i)
    for (const de in i) {
      const re = i[de], st = Z(re) ? re.bind(n, n) : Z(re.get) ? re.get.bind(n, n) : gt, Ht = !Z(re) && Z(re.set) ? re.set.bind(n) : gt, Tt = Re({
        get: st,
        set: Ht
      });
      Object.defineProperty(r, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (tt) => Tt.value = tt
      });
    }
  if (l)
    for (const de in l)
      zo(l[de], r, n, de);
  if (c) {
    const de = Z(c) ? c.call(n) : c;
    Reflect.ownKeys(de).forEach((re) => {
      va(re, de[re]);
    });
  }
  d && gi(d, e, "c");
  function Ne(de, re) {
    K(re) ? re.forEach((st) => de(st.bind(n))) : re && de(re.bind(n));
  }
  if (Ne(Pa, b), Ne(Na, C), Ne(Da, P), Ne(Ma, B), Ne(Oa, M), Ne(Ra, N), Ne(Ha, xe), Ne(ka, _e), Ne(Ua, be), Ne(La, q), Ne(Vo, F), Ne(Fa, ae), K(Pe))
    if (Pe.length) {
      const de = e.exposed || (e.exposed = {});
      Pe.forEach((re) => {
        Object.defineProperty(de, re, {
          get: () => n[re],
          set: (st) => n[re] = st,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === gt && (e.render = te), me != null && (e.inheritAttrs = me), H && (e.components = H), g && (e.directives = g), ae && jo(e);
}
function za(e, t, n = gt) {
  K(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    oe(s) ? "default" in s ? i = ur(
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
  ct(
    K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? ko(n, r) : () => n[r];
  if (Ee(e)) {
    const i = t[e];
    Z(i) && Zr(s, i);
  } else if (Z(e))
    Zr(s, e.bind(n));
  else if (oe(e))
    if (K(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(i) && Zr(s, i, e);
    }
}
function Wo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (h) => _r(c, h, o, !0)
  ), _r(c, t, o)), oe(t) && i.set(t, c), c;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && _r(e, i, n, !0), s && s.forEach(
    (o) => _r(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Wa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Wa = {
  data: _i,
  props: bi,
  emits: bi,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: $e,
  created: $e,
  beforeMount: $e,
  mounted: $e,
  beforeUpdate: $e,
  updated: $e,
  beforeDestroy: $e,
  beforeUnmount: $e,
  destroyed: $e,
  unmounted: $e,
  activated: $e,
  deactivated: $e,
  errorCaptured: $e,
  serverPrefetch: $e,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Ga,
  // provide / inject
  provide: _i,
  inject: Ba
};
function _i(e, t) {
  return t ? e ? function() {
    return Fe(
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ba(e, t) {
  return Rn(Ts(e), Ts(t));
}
function Ts(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function $e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
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
    n[r] = $e(e[r], t[r]);
  return n;
}
function Bo() {
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
    Z(r) || (r = Fe({}, r)), s != null && !oe(s) && (s = null);
    const i = Bo(), o = /* @__PURE__ */ new WeakSet(), l = [];
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
      use(d, ...b) {
        return o.has(d) || (d && Z(d.install) ? (o.add(d), d.install(h, ...b)) : Z(d) && (o.add(d), d(h, ...b))), h;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), h;
      },
      component(d, b) {
        return b ? (i.components[d] = b, h) : i.components[d];
      },
      directive(d, b) {
        return b ? (i.directives[d] = b, h) : i.directives[d];
      },
      mount(d, b, C) {
        if (!c) {
          const P = h._ceVNode || Ct(r, s);
          return P.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(P, d, C), c = !0, h._container = d, d.__vue_app__ = h, Mr(P.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (ct(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, b) {
        return i.provides[d] = b, h;
      },
      runWithContext(d) {
        const b = mn;
        mn = h;
        try {
          return d();
        } finally {
          mn = b;
        }
      }
    };
    return h;
  };
}
let mn = null;
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ot(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || le;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Ee(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Kr(t)] || // also try camelCase event handler (#2249)
  r[l = Kr(ot(t))];
  !c && i && (c = r[l = Kr(tn(t))]), c && ct(
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
    e.emitted[l] = !0, ct(
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
  if (!Z(e)) {
    const c = (h) => {
      const d = Go(h, t, !0);
      d && (l = !0, Fe(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (oe(e) && r.set(e, null), null) : (K(i) ? i.forEach((c) => o[c] = null) : Fe(o, i), oe(e) && r.set(e, o), o);
}
function Nr(e, t) {
  return !e || !vr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, tn(t)) || se(e, t));
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
    props: b,
    data: C,
    setupState: P,
    ctx: B,
    inheritAttrs: M
  } = e, N = mr(e);
  let z, q;
  try {
    if (n.shapeFlag & 4) {
      const F = s || r, te = F;
      z = mt(
        h.call(
          te,
          F,
          d,
          b,
          P,
          C,
          B
        )
      ), q = l;
    } else {
      const F = t;
      z = mt(
        F.length > 1 ? F(
          b,
          { attrs: l, slots: o, emit: c }
        ) : F(
          b,
          null
        )
      ), q = t.props ? l : Za(l);
    }
  } catch (F) {
    Qt.length = 0, Rr(F, e, 1), z = Ct(Pt);
  }
  let X = z;
  if (q && M !== !1) {
    const F = Object.keys(q), { shapeFlag: te } = X;
    F.length && te & 7 && (i && F.some(Sr) && (q = Qa(
      q,
      i
    )), X = bn(X, q, !1, !0));
  }
  if (n.dirs && (X = bn(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Ir(X.type) && Ho(X) || X;
    Us(F, n.transition);
  }
  return z = X, mr(N), z;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
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
      for (let b = 0; b < d.length; b++) {
        const C = d[b];
        if (Ko(o, r, C) && !Nr(h, C))
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
  return n === "style" && oe(r) && oe(s) ? !Ut(r, s) : r !== s;
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
  } = e, l = /* @__PURE__ */ ie(s), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let b = 0; b < d.length; b++) {
        let C = d[b];
        if (Nr(e.emitsOptions, C))
          continue;
        const P = t[C];
        if (c)
          if (se(i, C))
            P !== i[C] && (i[C] = P, h = !0);
          else {
            const B = ot(C);
            s[B] = Es(
              c,
              l,
              B,
              P,
              e,
              !1
            );
          }
        else
          P !== i[C] && (i[C] = P, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const b in l)
      (!t || // for camelCase
      !se(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = tn(b)) === b || !se(t, d))) && (c ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[b] = Es(
        c,
        l,
        b,
        void 0,
        e,
        !0
      )) : delete s[b]);
    if (i !== l)
      for (const b in i)
        (!t || !se(t, b)) && (delete i[b], h = !0);
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
      s && se(s, d = ot(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Nr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ie(n), h = l || le;
    for (let d = 0; d < i.length; d++) {
      const b = i[d];
      n[b] = Es(
        s,
        c,
        b,
        h[b],
        e,
        !se(h, b)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Z(c)) {
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
  if (!Z(e)) {
    const d = (b) => {
      c = !0;
      const [C, P] = Zo(b, t, !0);
      Fe(o, C), P && l.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return oe(e) && r.set(e, pn), pn;
  if (K(i))
    for (let d = 0; d < i.length; d++) {
      const b = ot(i[d]);
      Ei(b) && (o[b] = le);
    }
  else if (i)
    for (const d in i) {
      const b = ot(d);
      if (Ei(b)) {
        const C = i[d], P = o[b] = K(C) || Z(C) ? { type: C } : Fe({}, C), B = P.type;
        let M = !1, N = !0;
        if (K(B))
          for (let z = 0; z < B.length; ++z) {
            const q = B[z], X = Z(q) && q.name;
            if (X === "Boolean") {
              M = !0;
              break;
            } else X === "String" && (N = !1);
          }
        else
          M = Z(B) && B.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = M, P[
          1
          /* shouldCastTrue */
        ] = N, (M || se(P, "default")) && l.push(b);
      }
    }
  const h = [o, l];
  return oe(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Nn(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => K(e) ? e.map(mt) : [mt(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const i = e[s];
    if (Z(i))
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
  let i = !0, o = le;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, Ye = dc;
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
    parentNode: b,
    nextSibling: C,
    setScopeId: P = gt,
    insertStaticContent: B
  } = e, M = (u, f, m, v = null, _ = null, T = null, O = void 0, R = null, I = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (v = nn(u), tt(u, _, T, !0), u = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: y, ref: W, shapeFlag: D } = f;
    switch (y) {
      case Dr:
        N(u, f, m, v);
        break;
      case Pt:
        z(u, f, m, v);
        break;
      case ns:
        u == null && q(f, m, v, O);
        break;
      case he:
        H(
          u,
          f,
          m,
          v,
          _,
          T,
          O,
          R,
          I
        );
        break;
      default:
        D & 1 ? te(
          u,
          f,
          m,
          v,
          _,
          T,
          O,
          R,
          I
        ) : D & 6 ? g(
          u,
          f,
          m,
          v,
          _,
          T,
          O,
          R,
          I
        ) : (D & 64 || D & 128) && y.process(
          u,
          f,
          m,
          v,
          _,
          T,
          O,
          R,
          I,
          $t
        );
    }
    W != null && _ ? Ln(W, u && u.ref, T, f || u, !f) : W == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, N = (u, f, m, v) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        v
      );
    else {
      const _ = f.el = u.el;
      f.children !== u.children && h(_, f.children);
    }
  }, z = (u, f, m, v) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      v
    ) : f.el = u.el;
  }, q = (u, f, m, v) => {
    [u.el, u.anchor] = B(
      u.children,
      f,
      m,
      v,
      u.el,
      u.anchor
    );
  }, X = ({ el: u, anchor: f }, m, v) => {
    let _;
    for (; u && u !== f; )
      _ = C(u), r(u, m, v), u = _;
    r(f, m, v);
  }, F = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = C(u), s(u), u = m;
    s(f);
  }, te = (u, f, m, v, _, T, O, R, I) => {
    if (f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), u == null)
      _e(
        f,
        m,
        v,
        _,
        T,
        O,
        R,
        I
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), ae(
          u,
          f,
          _,
          T,
          O,
          R,
          I
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, _e = (u, f, m, v, _, T, O, R) => {
    let I, y;
    const { props: W, shapeFlag: D, transition: j, dirs: G } = u;
    if (I = u.el = o(
      u.type,
      T,
      W && W.is,
      W
    ), D & 8 ? d(I, u.children) : D & 16 && xe(
      u.children,
      I,
      null,
      v,
      _,
      ts(u, T),
      O,
      R
    ), G && Wt(u, null, v, "created"), be(I, u, u.scopeId, O, v), W) {
      for (const ee in W)
        ee !== "value" && !Nn(ee) && i(I, ee, null, W[ee], T, v);
      "value" in W && i(I, "value", null, W.value, T), (y = W.onVnodeBeforeMount) && dt(y, v, u);
    }
    G && Wt(u, null, v, "beforeMount");
    const J = uc(_, j);
    J && j.beforeEnter(I), r(I, f, m), ((y = W && W.onVnodeMounted) || J || G) && Ye(() => {
      y && dt(y, v, u), J && j.enter(I), G && Wt(u, null, v, "mounted");
    }, _);
  }, be = (u, f, m, v, _) => {
    if (m && P(u, m), v)
      for (let T = 0; T < v.length; T++)
        P(u, v[T]);
    if (_) {
      let T = _.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const O = _.vnode;
        be(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, xe = (u, f, m, v, _, T, O, R, I = 0) => {
    for (let y = I; y < u.length; y++) {
      const W = u[y] = R ? St(u[y]) : mt(u[y]);
      M(
        null,
        W,
        f,
        m,
        v,
        _,
        T,
        O,
        R
      );
    }
  }, ae = (u, f, m, v, _, T, O) => {
    const R = f.el = u.el;
    let { patchFlag: I, dynamicChildren: y, dirs: W } = f;
    I |= u.patchFlag & 16;
    const D = u.props || le, j = f.props || le;
    let G;
    if (m && Bt(m, !1), (G = j.onVnodeBeforeUpdate) && dt(G, m, f, u), W && Wt(f, u, m, "beforeUpdate"), m && Bt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (I = 0, O = !1, y = null), (D.innerHTML && j.innerHTML == null || D.textContent && j.textContent == null) && d(R, ""), y ? Pe(
      u.dynamicChildren,
      y,
      R,
      m,
      v,
      ts(f, _),
      T
    ) : O || re(
      u,
      f,
      R,
      null,
      m,
      v,
      ts(f, _),
      T,
      !1
    ), I > 0) {
      if (I & 16)
        me(R, D, j, m, _);
      else if (I & 2 && D.class !== j.class && i(R, "class", null, j.class, _), I & 4 && i(R, "style", D.style, j.style, _), I & 8) {
        const J = f.dynamicProps;
        for (let ee = 0; ee < J.length; ee++) {
          const Q = J[ee], pe = D[Q], ye = j[Q];
          (ye !== pe || Q === "value") && i(R, Q, pe, ye, _, m);
        }
      }
      I & 1 && u.children !== f.children && d(R, f.children);
    } else !O && y == null && me(R, D, j, m, _);
    ((G = j.onVnodeUpdated) || W) && Ye(() => {
      G && dt(G, m, f, u), W && Wt(f, u, m, "updated");
    }, v);
  }, Pe = (u, f, m, v, _, T, O) => {
    for (let R = 0; R < f.length; R++) {
      const I = u[R], y = f[R], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(I, y) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? b(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      M(
        I,
        y,
        W,
        null,
        v,
        _,
        T,
        O,
        !0
      );
    }
  }, me = (u, f, m, v, _) => {
    if (f !== m) {
      if (f !== le)
        for (const T in f)
          !Nn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            _,
            v
          );
      for (const T in m) {
        if (Nn(T)) continue;
        const O = m[T], R = f[T];
        O !== R && T !== "value" && i(u, T, R, O, _, v);
      }
      "value" in m && i(u, "value", f.value, m.value, _);
    }
  }, H = (u, f, m, v, _, T, O, R, I) => {
    const y = f.el = u ? u.el : l(""), W = f.anchor = u ? u.anchor : l("");
    let { patchFlag: D, dynamicChildren: j, slotScopeIds: G } = f;
    G && (R = R ? R.concat(G) : G), u == null ? (r(y, m, v), r(W, m, v), xe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      W,
      _,
      T,
      O,
      R,
      I
    )) : D > 0 && D & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (Pe(
      u.dynamicChildren,
      j,
      m,
      _,
      T,
      O,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : re(
      u,
      f,
      m,
      W,
      _,
      T,
      O,
      R,
      I
    );
  }, g = (u, f, m, v, _, T, O, R, I) => {
    f.slotScopeIds = R, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      m,
      v,
      O,
      I
    ) : bt(
      f,
      m,
      v,
      _,
      T,
      O,
      I
    ) : yt(u, f, I);
  }, bt = (u, f, m, v, _, T, O) => {
    const R = u.component = yc(
      u,
      v,
      _
    );
    if (ks(u) && (R.ctx.renderer = $t), Ec(R, !1, O), R.asyncDep) {
      if (_ && _.registerDep(R, Ne, O), !u.el) {
        const I = R.subTree = Ct(Pt);
        z(null, I, f, m), u.placeholder = I.el;
      }
    } else
      Ne(
        R,
        u,
        f,
        m,
        _,
        T,
        O
      );
  }, yt = (u, f, m) => {
    const v = f.component = u.component;
    if (ec(u, f, m))
      if (v.asyncDep && !v.asyncResolved) {
        de(v, f, m);
        return;
      } else
        v.next = f, v.update();
    else
      f.el = u.el, v.vnode = f;
  }, Ne = (u, f, m, v, _, T, O) => {
    const R = () => {
      if (u.isMounted) {
        let { next: D, bu: j, u: G, parent: J, vnode: ee } = u;
        {
          const Be = rl(u);
          if (Be) {
            D && (D.el = ee.el, de(u, D, O)), Be.asyncDep.then(() => {
              Ye(() => {
                u.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let Q = D, pe;
        Bt(u, !1), D ? (D.el = ee.el, de(u, D, O)) : D = ee, j && cr(j), (pe = D.props && D.props.onVnodeBeforeUpdate) && dt(pe, J, D, ee), Bt(u, !0);
        const ye = yi(u), Ue = u.subTree;
        u.subTree = ye, M(
          Ue,
          ye,
          // parent may have changed if it's in a teleport
          b(Ue.el),
          // anchor may have changed if it's in a fragment
          nn(Ue),
          u,
          _,
          T
        ), D.el = ye.el, Q === null && tc(u, ye.el), G && Ye(G, _), (pe = D.props && D.props.onVnodeUpdated) && Ye(
          () => dt(pe, J, D, ee),
          _
        );
      } else {
        let D;
        const { el: j, props: G } = f, { bm: J, m: ee, parent: Q, root: pe, type: ye } = u, Ue = Fn(f);
        Bt(u, !1), J && cr(J), !Ue && (D = G && G.onVnodeBeforeMount) && dt(D, Q, f), Bt(u, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            ye,
            u.parent ? u.parent.type : void 0
          );
          const Be = u.subTree = yi(u);
          M(
            null,
            Be,
            m,
            v,
            u,
            _,
            T
          ), f.el = Be.el;
        }
        if (ee && Ye(ee, _), !Ue && (D = G && G.onVnodeMounted)) {
          const Be = f;
          Ye(
            () => dt(D, Q, Be),
            _
          );
        }
        (f.shapeFlag & 256 || Q && Fn(Q.vnode) && Q.vnode.shapeFlag & 256) && u.a && Ye(u.a, _), u.isMounted = !0, f = m = v = null;
      }
    };
    u.scope.on();
    const I = u.effect = new mo(R);
    u.scope.off();
    const y = u.update = I.run.bind(I), W = u.job = I.runIfDirty.bind(I);
    W.i = u, W.id = u.uid, I.scheduler = () => Fs(W), Bt(u, !0), y();
  }, de = (u, f, m) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, v, m), lc(u, f.children, m), Ot(), di(u), Rt();
  }, re = (u, f, m, v, _, T, O, R, I = !1) => {
    const y = u && u.children, W = u ? u.shapeFlag : 0, D = f.children, { patchFlag: j, shapeFlag: G } = f;
    if (j > 0) {
      if (j & 128) {
        Ht(
          y,
          D,
          m,
          v,
          _,
          T,
          O,
          R,
          I
        );
        return;
      } else if (j & 256) {
        st(
          y,
          D,
          m,
          v,
          _,
          T,
          O,
          R,
          I
        );
        return;
      }
    }
    G & 8 ? (W & 16 && jt(y, _, T), D !== y && d(m, D)) : W & 16 ? G & 16 ? Ht(
      y,
      D,
      m,
      v,
      _,
      T,
      O,
      R,
      I
    ) : jt(y, _, T, !0) : (W & 8 && d(m, ""), G & 16 && xe(
      D,
      m,
      v,
      _,
      T,
      O,
      R,
      I
    ));
  }, st = (u, f, m, v, _, T, O, R, I) => {
    u = u || pn, f = f || pn;
    const y = u.length, W = f.length, D = Math.min(y, W);
    let j;
    for (j = 0; j < D; j++) {
      const G = f[j] = I ? St(f[j]) : mt(f[j]);
      M(
        u[j],
        G,
        m,
        null,
        _,
        T,
        O,
        R,
        I
      );
    }
    y > W ? jt(
      u,
      _,
      T,
      !0,
      !1,
      D
    ) : xe(
      f,
      m,
      v,
      _,
      T,
      O,
      R,
      I,
      D
    );
  }, Ht = (u, f, m, v, _, T, O, R, I) => {
    let y = 0;
    const W = f.length;
    let D = u.length - 1, j = W - 1;
    for (; y <= D && y <= j; ) {
      const G = u[y], J = f[y] = I ? St(f[y]) : mt(f[y]);
      if (xn(G, J))
        M(
          G,
          J,
          m,
          null,
          _,
          T,
          O,
          R,
          I
        );
      else
        break;
      y++;
    }
    for (; y <= D && y <= j; ) {
      const G = u[D], J = f[j] = I ? St(f[j]) : mt(f[j]);
      if (xn(G, J))
        M(
          G,
          J,
          m,
          null,
          _,
          T,
          O,
          R,
          I
        );
      else
        break;
      D--, j--;
    }
    if (y > D) {
      if (y <= j) {
        const G = j + 1, J = G < W ? f[G].el : v;
        for (; y <= j; )
          M(
            null,
            f[y] = I ? St(f[y]) : mt(f[y]),
            m,
            J,
            _,
            T,
            O,
            R,
            I
          ), y++;
      }
    } else if (y > j)
      for (; y <= D; )
        tt(u[y], _, T, !0), y++;
    else {
      const G = y, J = y, ee = /* @__PURE__ */ new Map();
      for (y = J; y <= j; y++) {
        const Ce = f[y] = I ? St(f[y]) : mt(f[y]);
        Ce.key != null && ee.set(Ce.key, y);
      }
      let Q, pe = 0;
      const ye = j - J + 1;
      let Ue = !1, Be = 0;
      const nt = new Array(ye);
      for (y = 0; y < ye; y++) nt[y] = 0;
      for (y = G; y <= D; y++) {
        const Ce = u[y];
        if (pe >= ye) {
          tt(Ce, _, T, !0);
          continue;
        }
        let Xe;
        if (Ce.key != null)
          Xe = ee.get(Ce.key);
        else
          for (Q = J; Q <= j; Q++)
            if (nt[Q - J] === 0 && xn(Ce, f[Q])) {
              Xe = Q;
              break;
            }
        Xe === void 0 ? tt(Ce, _, T, !0) : (nt[Xe - J] = y + 1, Xe >= Be ? Be = Xe : Ue = !0, M(
          Ce,
          f[Xe],
          m,
          null,
          _,
          T,
          O,
          R,
          I
        ), pe++);
      }
      const Vt = Ue ? fc(nt) : pn;
      for (Q = Vt.length - 1, y = ye - 1; y >= 0; y--) {
        const Ce = J + y, Xe = f[Ce], Tn = f[Ce + 1], En = Ce + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : v;
        nt[y] === 0 ? M(
          null,
          Xe,
          m,
          En,
          _,
          T,
          O,
          R,
          I
        ) : Ue && (Q < 0 || y !== Vt[Q] ? Tt(Xe, m, En, 2) : Q--);
      }
    }
  }, Tt = (u, f, m, v, _ = null) => {
    const { el: T, type: O, transition: R, children: I, shapeFlag: y } = u;
    if (y & 6) {
      Tt(u.component.subTree, f, m, v);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, v);
      return;
    }
    if (y & 64) {
      O.move(u, f, m, $t);
      return;
    }
    if (O === he) {
      r(T, f, m);
      for (let D = 0; D < I.length; D++)
        Tt(I[D], f, m, v);
      r(u.anchor, f, m);
      return;
    }
    if (O === ns) {
      X(u, f, m);
      return;
    }
    if (v !== 2 && y & 1 && R)
      if (v === 0)
        R.persisted && !T[Qr] ? r(T, f, m) : (R.beforeEnter(T), r(T, f, m), Ye(() => R.enter(T), _));
      else {
        const { leave: D, delayLeave: j, afterLeave: G } = R, J = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, ee = () => {
          const Q = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), R.persisted && !Q ? J() : D(T, () => {
            J(), G && G();
          });
        };
        j ? j(T, J, ee) : ee();
      }
    else
      r(T, f, m);
  }, tt = (u, f, m, v = !1, _ = !1) => {
    const {
      type: T,
      props: O,
      ref: R,
      children: I,
      dynamicChildren: y,
      shapeFlag: W,
      patchFlag: D,
      dirs: j,
      cacheIndex: G,
      memo: J
    } = u;
    if (D === -2 && (_ = !1), R != null && (Ot(), Ln(R, null, m, u, !0), Rt()), G != null && (f.renderCache[G] = void 0), W & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const ee = W & 1 && j, Q = !Fn(u);
    let pe;
    if (Q && (pe = O && O.onVnodeBeforeUnmount) && dt(pe, f, u), W & 6)
      Lr(u.component, m, v);
    else {
      if (W & 128) {
        u.suspense.unmount(m, v);
        return;
      }
      ee && Wt(u, null, f, "beforeUnmount"), W & 64 ? u.type.remove(
        u,
        f,
        m,
        $t,
        v
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== he || D > 0 && D & 64) ? jt(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === he && D & 384 || !_ && W & 16) && jt(I, f, m), v && Kn(u);
    }
    const ye = J != null && G == null;
    (Q && (pe = O && O.onVnodeUnmounted) || ee || ye) && Ye(() => {
      pe && dt(pe, f, u), ee && Wt(u, null, f, "unmounted"), ye && (u.el = null);
    }, m);
  }, Kn = (u) => {
    const { type: f, el: m, anchor: v, transition: _ } = u;
    if (f === he) {
      ce(m, v);
      return;
    }
    if (f === ns) {
      F(u);
      return;
    }
    const T = () => {
      s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: R } = _, I = () => O(m, T);
      R ? R(u.el, T, I) : I();
    } else
      T();
  }, ce = (u, f) => {
    let m;
    for (; u !== f; )
      m = C(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: v, scope: _, job: T, subTree: O, um: R, m: I, a: y } = u;
    vi(I), vi(y), v && cr(v), _.stop(), T && (T.flags |= 8, tt(O, u, f, m)), R && Ye(R, f), Ye(() => {
      u.isUnmounted = !0;
    }, f);
  }, jt = (u, f, m, v = !1, _ = !1, T = 0) => {
    for (let O = T; O < u.length; O++)
      tt(u[O], f, m, v, _);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = C(u.anchor || u.el), m = f && f[wa];
    return m ? C(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let v;
    u == null ? f._vnode && (tt(f._vnode, null, null, !0), v = f._vnode.component) : M(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(v), Mo(), yn = !1);
  }, $t = {
    p: M,
    um: tt,
    m: Tt,
    r: Kn,
    mt: bt,
    mc: xe,
    pc: re,
    pbc: Pe,
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
function Bt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (K(r) && K(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = St(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Dr && (l.patchFlag === -1 && (l = s[i] = St(l)), l.el = o.el), l.type === Pt && !l.el && (l.el = o.el);
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
function vi(e) {
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
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), Dr = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let et = null;
function $(e = !1) {
  Qt.push(et = e ? null : []);
}
function ol() {
  Qt.pop(), et = Qt[Qt.length - 1] || null;
}
let $n = 1;
function Si(e, t = !1) {
  $n += e, e < 0 && et && t && (et.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? et || pn : null, ol(), $n > 0 && et && et.push(e), e;
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
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ We(e) || Z(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function S(e, t = null, n = null, r = 0, s = null, i = e === he ? 0 : 1, o = !1, l = !1) {
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
    ctx: rt
  };
  return l ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ee(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && et.push(c), c;
}
const Ct = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Pt), al(e)) {
    const l = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(l, n), $n > 0 && !i && et && (l.shapeFlag & 6 ? et[et.indexOf(e)] = l : et.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !Ee(l) && (t.class = Rs(l)), oe(c) && (/* @__PURE__ */ Ls(c) && !K(c) && (c = Fe({}, c)), t.style = Os(c));
  }
  const o = Ee(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : oe(e) ? 4 : Z(e) ? 2 : 0;
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
function bn(e, t, n = !1, r = !1) {
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
      n && i ? K(i) ? i.concat(fr(t)) : [i, fr(t)] : fr(t)
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
    patchFlag: t && e.type !== he ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && bn(e.ssContent),
    ssFallback: e.ssFallback && bn(e.ssFallback),
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
function Te(e = " ", t = 0) {
  return Ct(Dr, null, e, t);
}
function Oe(e = "", t = !1) {
  return t ? ($(), pc(Pt, null, e)) : Ct(Pt, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? Ct(Pt) : K(e) ? Ct(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? St(e) : Ct(Dr, null, String(e));
}
function St(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = rt : s === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: rt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Te(t)]) : n = 8;
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
      else if (vr(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(K(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function dt(e, t, n, r = null) {
  ct(e, t, 7, [
    n,
    r
  ]);
}
const _c = Bo();
let bc = 0;
function yc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || _c, i = {
    uid: bc++,
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
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
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
let ze = null;
const Tc = () => ze || rt;
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
    (n) => ze = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Gn = (e) => {
  const t = ze;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, Ai = () => {
  ze && ze.scope.off(), yr(null);
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Ec(e, t = !1, n = !1) {
  t && Vn(t);
  const { props: r, children: s } = e.vnode, i = ul(e);
  nc(e, r, i, t), oc(e, s, n || t);
  const o = i ? vc(e, t) : void 0;
  return t && Vn(!1), o;
}
function vc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    Ot();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Gn(e), o = Bn(
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
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = Io(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || gt);
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
const Sc = {
  get(e, t) {
    return Le(e, "get", ""), e[t];
  }
};
function Ac(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Sc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Mr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io(da(e.exposed)), {
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
  return Z(e) && "__vccOpts" in e;
}
const Re = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let vs;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    vs = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = vs ? (e) => vs.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, Ci = vt && /* @__PURE__ */ vt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? vt.createElementNS(Cc, e) : t === "mathml" ? vt.createElementNS(Oc, e) : n ? vt.createElement(e, { is: n }) : vt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
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
}, Ic = /* @__PURE__ */ Symbol("_vtc");
function Pc(e, t, n) {
  const r = e[Ic];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Dc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = Ee(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Ee(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && In(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && In(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? Uc(
        e,
        o,
        !Ee(t) && t ? t[o] : void 0,
        l
      ) || In(r, o, l) : In(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Dc];
      o && (n += ";" + o), r.cssText = n, i = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Nc] && (r.display = "none"));
}
const or = /\s*!important$/;
function In(e, t, n) {
  if (K(n))
    n.forEach((r) => In(e, t, r));
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
  let r = ot(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : _t(n) ? String(n) : n
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
      const h = i[t] = Bc(
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
const zc = /* @__PURE__ */ Promise.resolve(), Wc = () => ss || (zc.then(() => ss = 0), ss = Date.now());
function Bc(e, t) {
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
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const h = o[c];
        h && ct(
          h,
          t,
          5,
          l
        );
      }
    } else
      ct(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Wc(), n;
}
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : vr(t) ? Sr(t) || Hc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, o)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(r))) ? Ni(e, ot(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Kc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && Ee(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = ot(t);
  return Array.isArray(n) ? n.some((s) => ot(s) === r) : Object.keys(n).some((s) => ot(s) === r);
}
const Tr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => cr(t, n) : t;
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
}, Je = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, qt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? en(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? K(o) ? s.slice() : s : o
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
  if (!n || K(e)) return Ut(e, t);
  if (en(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = K(t);
  if (!(n && !r && !en(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Bl(t, l) > -1;
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
    !Z(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return Ee(e) ? document.querySelector(e) : e;
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
let we = Object.freeze, Ie = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, Ss = hl.apply, As = hl.construct;
we || (we = function(t) {
  return t;
});
Ie || (Ie = function(t) {
  return t;
});
Ss || (Ss = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
As || (As = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Yt = Ae(Array.prototype.forEach), fu = Ae(Array.prototype.lastIndexOf), $i = Ae(Array.prototype.pop), wn = Ae(Array.prototype.push), du = Ae(Array.prototype.splice), gn = Array.isArray, Pn = Ae(String.prototype.toLowerCase), os = Ae(String.prototype.toString), Vi = Ae(String.prototype.match), Cn = Ae(String.prototype.replace), zi = Ae(String.prototype.indexOf), pu = Ae(String.prototype.trim), hu = Ae(Number.prototype.toString), mu = Ae(Boolean.prototype.toString), Wi = typeof BigInt > "u" ? null : Ae(BigInt.prototype.toString), Bi = typeof Symbol > "u" ? null : Ae(Symbol.prototype.toString), qe = Ae(Object.prototype.hasOwnProperty), On = Ae(Object.prototype.toString), Me = Ae(RegExp.prototype.test), Gt = gu(TypeError);
function Ae(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return Ss(e, t, r);
  };
}
function gu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return As(e, n);
  };
}
function ne(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pn;
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
function _u(e) {
  for (let t = 0; t < e.length; t++)
    qe(e, t) || (e[t] = null);
  return e;
}
function Qe(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    qe(e, s) && (gn(i) ? t[s] = _u(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = Qe(i) : t[s] = i);
  }
  return t;
}
function bu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return hu(e);
    case "boolean":
      return mu(e);
    case "bigint":
      return Wi ? Wi(e) : "0";
    case "symbol":
      return Bi ? Bi(e) : "Symbol()";
    case "undefined":
      return On(e);
    case "function":
    case "object": {
      if (e === null)
        return On(e);
      const t = e, n = it(t, "toString");
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
function it(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return Ae(r.get);
      if (typeof r.value == "function")
        return Ae(r.value);
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
const Gi = we(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = we(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = we(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = we(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = we(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = we(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ki = we(["#text"]), Yi = we(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = we(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = we(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = we(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vu = Ie(/{{[\w\W]*|^[\w\W]*}}/g), Su = Ie(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ie(/\${[\w\W]*/g), xu = Ie(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ie(/^aria-[\-\w]+$/), Xi = Ie(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ie(/^(?:\w+script|data):/i), Ou = Ie(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ie(/^html$/i), Iu = Ie(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ie(/<[/\w!]/g), Zi = Ie(/<[/\w]/g), Pu = Ie(/<\/no(script|embed|frames)/i), Nu = Ie(/\/>/i), Ze = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Du = we(ne({}, ml)), Mu = (function() {
  const e = {};
  return Yt(ml, (t) => {
    e[t] = Ie(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), we(e);
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
  return qe(t, n) && gn(t[n]) ? ne(s.base ? Qe(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = qe(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? Qe(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (w) => gl(w);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Ze.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, b = e.trustedTypes, C = l.prototype, P = it(C, "cloneNode"), B = it(C, "remove"), M = it(C, "nextSibling"), N = it(C, "childNodes"), z = it(C, "parentNode"), q = it(C, "shadowRoot"), X = it(C, "attributes"), F = o && o.prototype ? it(o.prototype, "nodeType") : null, te = o && o.prototype ? it(o.prototype, "nodeName") : null, _e = o && o.prototype ? it(o.prototype, "ownerDocument") : null, be = function(a) {
    return F ? F(a) : a.nodeType;
  }, xe = function(a) {
    return te ? te(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let ae, Pe = "", me, H = !1, g = 0;
  const bt = function() {
    if (g > 0)
      throw Gt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, yt = function(a) {
    bt(), g++;
    try {
      return ae.createHTML(a);
    } finally {
      g--;
    }
  }, Ne = function(a) {
    bt(), g++;
    try {
      return ae.createScriptURL(a);
    } finally {
      g--;
    }
  }, de = function() {
    return H || (me = Fu(b, s), H = !0), me;
  }, re = n, st = re.implementation, Ht = re.createNodeIterator, Tt = re.createDocumentFragment, tt = re.getElementsByTagName, Kn = r.importNode;
  let ce = Qi();
  t.isSupported = typeof pl == "function" && typeof z == "function" && st && st.createHTMLDocument !== void 0;
  const Lr = vu, jt = Su, nn = Au, yn = xu, Yn = wu, $t = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const v = ne({}, [...Gi, ...ls, ...as, ...cs, ...Ki]);
  let _ = null;
  const T = ne({}, [...Yi, ...us, ...qi, ...ar]);
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
  })), R = null, I = null;
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
  let W = !0, D = !0, j = !1, G = !0, J = !1, ee = !0, Q = !1, pe = !1, ye = null, Ue = null, Be = !1, nt = !1, Vt = !1, Ce = !1, Xe = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, kr = !1, rn = {}, sn = null;
  const $s = ne({}, [
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
  const zs = ne({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ws = null;
  const Bs = ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let on = ut, Hr = !1, jr = null;
  const bl = ne({}, [qn, Xn, ut], os), Gs = we(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = ne({}, Gs);
  const Ks = we(["annotation-xml"]);
  let Vr = ne({}, Ks);
  const yl = ne({}, ["title", "style", "font", "a", "script"]);
  let vn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let ve = null, ln = null;
  const vl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = Qe(a), vn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, ve = vn === "application/xhtml+xml" ? os : Pn, m = Mt(a, "ALLOWED_TAGS", v, {
      transform: ve
    }), _ = Mt(a, "ALLOWED_ATTR", T, {
      transform: ve
    }), jr = Mt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Ws = Mt(a, "ADD_URI_SAFE_ATTR", Bs, {
      transform: ve,
      base: Bs
    }), Vs = Mt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: ve,
      base: zs
    }), sn = Mt(a, "FORBID_CONTENTS", $s, {
      transform: ve
    }), R = Mt(a, "FORBID_TAGS", Qe({}), {
      transform: ve
    }), I = Mt(a, "FORBID_ATTR", Qe({}), {
      transform: ve
    }), rn = qe(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? Qe(a.USE_PROFILES) : a.USE_PROFILES : !1, W = a.ALLOW_ARIA_ATTR !== !1, D = a.ALLOW_DATA_ATTR !== !1, j = a.ALLOW_UNKNOWN_PROTOCOLS || !1, G = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = a.SAFE_FOR_TEMPLATES || !1, ee = a.SAFE_FOR_XML !== !1, Q = a.WHOLE_DOCUMENT || !1, nt = a.RETURN_DOM || !1, Vt = a.RETURN_DOM_FRAGMENT || !1, Ce = a.RETURN_TRUSTED_TYPE || !1, Be = a.FORCE_BODY || !1, Xe = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, kr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : ut, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ne({}, Gs)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ne({}, Ks)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (O = dn(null), qe(p, "tagNameCheck") && Ys(p.tagNameCheck) && (O.tagNameCheck = p.tagNameCheck), qe(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (O.attributeNameCheck = p.attributeNameCheck), qe(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ie(O), J && (D = !1), Vt && (nt = !0), rn && (m = ne({}, Ki), _ = dn(null), rn.html === !0 && (ne(m, Gi), ne(_, Yi)), rn.svg === !0 && (ne(m, ls), ne(_, us), ne(_, ar)), rn.svgFilters === !0 && (ne(m, as), ne(_, us), ne(_, ar)), rn.mathMl === !0 && (ne(m, cs), ne(_, qi), ne(_, ar))), y.tagCheck = null, y.attributeCheck = null, qe(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === v && (m = Qe(m)), ne(m, a.ADD_TAGS, ve))), qe(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (_ === T && (_ = Qe(_)), ne(_, a.ADD_ATTR, ve))), qe(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = Qe(sn)), ne(sn, a.ADD_FORBID_CONTENTS, ve)), Ur && (m["#text"] = !0), Q && ne(m, ["html", "head", "body"]), m.table && (ne(m, ["tbody"]), delete R.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = ae;
      ae = a.TRUSTED_TYPES_POLICY;
      try {
        Pe = yt("");
      } catch (L) {
        throw ae = E, L;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ae = void 0, Pe = "") : (ae === void 0 && (ae = de()), ae && typeof Pe == "string" && (Pe = yt("")));
    we && we(a), ln = a;
  }, qs = ne({}, [...ls, ...as, ...Tu]), Xs = ne({}, [...cs, ...Eu]), Sl = function(a, p, E) {
    return p.namespaceURI === ut ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, Al = function(a, p, E) {
    return p.namespaceURI === ut ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = z(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = Pn(a.tagName), L = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? Sl(E, p, L) : a.namespaceURI === qn ? Al(E, p, L) : a.namespaceURI === ut ? xl(E, p, L) : !!(vn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Dt = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      z(a).removeChild(a);
    } catch {
      if (B(a), !z(a))
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
    const p = N(a);
    if (p) {
      const L = [];
      Yt(p, (k) => {
        wn(L, k);
      }), Yt(L, (k) => {
        try {
          B(k);
        } catch {
        }
      });
    }
    const E = X(a);
    if (E)
      for (let L = E.length - 1; L >= 0; --L) {
        const k = E[L], Y = k && k.name;
        typeof Y == "string" && Js(a, k, Y);
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
      if (nt || Vt)
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
    const p = X(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const L = p[E], k = L && L.name;
        typeof k != "string" || _[ve(k)] || Js(a, L, k);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      be(E) === Ze.element && Cl(E);
      const k = N(E);
      if (k)
        for (let Y = k.length - 1; Y >= 0; --Y)
          p.push(k[Y]);
    }
  }, Zs = function(a, p) {
    return ee ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!ee)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), L = be(E);
      if (L === Ze.processingInstruction || L === Ze.comment && Me(Zi, E.data)) {
        try {
          B(E);
        } catch {
        }
        continue;
      }
      if (L === Ze.element) {
        const Y = E, ue = ve(xe(E));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && Zs("for", ue) && Y.removeAttribute("for");
        } catch {
        }
      }
      const k = N(E);
      if (k)
        for (let Y = k.length - 1; Y >= 0; --Y)
          p.push(k[Y]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (Be)
      a = "<remove></remove>" + a;
    else {
      const Y = Vi(a, /^[\r\n\t ]+/);
      E = Y && Y[0];
    }
    vn === "application/xhtml+xml" && on === ut && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const L = ae ? yt(a) : a;
    if (on === ut)
      try {
        p = new d().parseFromString(L, vn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = st.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = Hr ? Pe : L;
      } catch {
      }
    }
    const k = p.body || p.documentElement;
    return a && E && k.insertBefore(n.createTextNode(E), k.childNodes[0] || null), on === ut ? tt.call(p, Q ? "html" : "body")[0] : Q ? p.documentElement : k;
  }, ei = function(a) {
    const p = _e ? _e(a) : a.ownerDocument;
    return Ht.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, jt, " "), a = Cn(a, nn, " "), a;
  }, Wr = function(a) {
    var p;
    a.normalize();
    const E = _e ? _e(a) : a.ownerDocument, L = Ht.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let k = L.nextNode();
    for (; k; )
      k.data = Qn(k.data), k = L.nextNode();
    const Y = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    Y && Yt(Y, (ue) => {
      an(ue.content) && Wr(ue.content);
    });
  }, er = function(a) {
    const p = te ? te(a) : null;
    return typeof p != "string" || ve(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== X(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== F(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== N(a);
  }, an = function(a) {
    if (!F || typeof a != "object" || a === null)
      return !1;
    try {
      return F(a) === Ze.documentFragment;
    } catch {
      return !1;
    }
  }, Sn = function(a) {
    if (!F || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof F(a) == "number";
    } catch {
      return !1;
    }
  };
  function ft(w, a, p) {
    w.length !== 0 && Yt(w, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(ee && a.hasChildNodes() && !Sn(a.firstElementChild) && Me(Ji, a.textContent) && Me(Ji, a.innerHTML) || ee && a.namespaceURI === ut && Du[p] && (Sn(a.firstElementChild) || typeof a.textContent == "string" && Me(Mu[p], a.textContent)) || a.nodeType === Ze.processingInstruction || ee && a.nodeType === Ze.comment && Me(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Me(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, L = new Array(E > 2 ? E - 2 : 0), k = 2; k < E; k++)
        L[k - 2] = arguments[k];
      return !!a(p, ...L);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!R[p] && ii(p) && tr(O.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const L = z(a), k = N(a);
      if (k && L) {
        const Y = k.length;
        for (let ue = Y - 1; ue >= 0; --ue) {
          const ge = a === E ? P(k[ue], !0) : k[ue];
          L.insertBefore(ge, M(a));
        }
      }
    }
    return Dt(a), !0;
  }, ti = function(a, p, E, L) {
    return a.length === 0 ? p : p === E || p === L ? Qe(p) : p;
  }, ni = function(a, p) {
    return a === p || z(a) !== null ? !1 : (kr && Zn(a), !0);
  }, ri = function(a, p) {
    if (ft(ce.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return Dt(a), !0;
    const E = ve(xe(a));
    if (m = ti(ce.uponSanitizeElement, m, v, ye), ft(ce.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Dt(a), !0;
    if (R[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const k = Il(a, E, p);
      return k === !1 && ft(ce.afterSanitizeElements, a, null), k;
    }
    if (be(a) === Ze.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Me(Pu, a.innerHTML))
      return Dt(a), !0;
    if (J && a.nodeType === Ze.text) {
      const k = Qn(a.textContent);
      a.textContent !== k && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = k);
    }
    return ft(ce.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (I[p] || Zs(p, a) || Xe && (p === "id" || p === "name") && (E in n || E in vl))
      return !1;
    const L = _[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return D && Me(yn, p) || W && Me(Yn, p) ? !0 : L ? Ws[p] || Me(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || j && !Me($t, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(O.tagNameCheck, a) && tr(O.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && O.allowCustomizedBuiltInElements && tr(O.tagNameCheck, E)
    );
  }, Pl = ne({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Me(u, a);
  }, Nl = function(a, p, E, L) {
    if (ae && typeof b == "object" && typeof b.getAttributeType == "function" && !E)
      switch (b.getAttributeType(a, p)) {
        case "TrustedHTML":
          return yt(L);
        case "TrustedScriptURL":
          return Ne(L);
      }
    return L;
  }, Dl = function(a, p, E, L) {
    try {
      E ? a.setAttributeNS(E, p, L) : a.setAttribute(p, L), er(a) ? Dt(a) : $i(t.removed);
    } catch {
      zt(p, a);
    }
  }, oi = function(a) {
    ft(ce.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    _ = ti(ce.uponSanitizeAttribute, _, T, Ue);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let L = p.length;
    const k = ve(a.nodeName);
    for (; L--; ) {
      const Y = p[L], ue = Y.name, ge = Y.namespaceURI, Ge = Y.value, Ke = ve(ue), Gr = Ge;
      let ke = ue === "value" ? Gr : pu(Gr);
      if (E.attrName = Ke, E.attrValue = ke, E.keepAttr = !0, E.forceKeepAttr = void 0, ft(ce.uponSanitizeAttribute, a, E), ke = E.attrValue, Tn && (Ke === "id" || Ke === "name") && zi(ke, En) !== 0 && (zt(ue, a, Y), ke = En + ke), ee && Me(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ke)) {
        zt(ue, a, Y);
        continue;
      }
      if (Ke === "attributename" && Vi(ke, "href")) {
        zt(ue, a, Y);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          zt(ue, a, Y);
          continue;
        }
        if (!G && Me(Nu, ke)) {
          zt(ue, a, Y);
          continue;
        }
        if (J && (ke = Qn(ke)), !si(k, Ke, ke)) {
          zt(ue, a, Y);
          continue;
        }
        ke = Nl(k, Ke, ge, ke), ke !== Gr && Dl(a, ue, ge, ke);
      }
    }
    ft(ce.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (ft(ce.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (ft(ce.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), be(p) === Ze.element) {
        const L = q(p);
        an(L) && (Br(L), nr(L));
      }
    ft(ce.afterSanitizeShadowDOM, a, null);
  }, Br = function(a) {
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
      const L = E.node, Y = be(L) === Ze.element, ue = N(L);
      if (ue)
        for (let ge = ue.length - 1; ge >= 0; --ge)
          p.push({
            node: ue[ge],
            shadow: null
          });
      if (Y) {
        const ge = te ? te(L) : null;
        if (typeof ge == "string" && ve(ge) === "template") {
          const Ge = L.content;
          an(Ge) && p.push({
            node: Ge,
            shadow: null
          });
        }
      }
      if (Y) {
        const ge = q(L);
        an(ge) && p.push({
          node: null,
          shadow: ge
        }, {
          node: ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(w) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, L = null, k = null;
    if (Hr = !w, Hr && (w = "<!-->"), typeof w != "string" && !Sn(w) && (w = bu(w), typeof w != "string"))
      throw Gt("dirty is not a string, aborting");
    if (!t.isSupported)
      return w;
    pe ? (m = ye, _ = Ue) : zr(a), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (m = Qe(m)), ce.uponSanitizeAttribute.length > 0 && (_ = Qe(_)), t.removed = [];
    const Y = kr && typeof w != "string" && Sn(w);
    if (Y) {
      Ol(w);
      const Ge = xe(w);
      if (typeof Ge == "string") {
        const Ke = ve(Ge);
        if (!m[Ke] || R[Ke])
          throw Jn(w), Gt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(w))
        throw Jn(w), Gt("root node is clobbered and cannot be sanitized in-place");
      try {
        Br(w);
      } catch (Ke) {
        throw Jn(w), Ke;
      }
    } else if (Sn(w))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(w, !0), E.nodeType === Ze.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Br(E);
    else {
      if (!nt && !J && !Q && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return ae && Ce ? yt(w) : w;
      if (p = Qs(w), !p)
        return nt ? null : Ce ? Pe : "";
    }
    p && Be && Dt(p.firstChild);
    const ue = Y ? w : p;
    try {
      const Ge = ei(ue);
      for (; L = Ge.nextNode(); )
        ri(L, ue), oi(L), an(L.content) && nr(L.content);
    } catch (Ge) {
      throw Y && (Jn(w), Yt(t.removed, (Ke) => {
        Ke.element && Zn(Ke.element);
      })), Ge;
    }
    if (Y)
      return Yt(t.removed, (Ge) => {
        Ge.element && Zn(Ge.element);
      }), J && Wr(w), w;
    if (nt) {
      if (J && Wr(p), Vt)
        for (k = Tt.call(p.ownerDocument); p.firstChild; )
          k.appendChild(p.firstChild);
      else
        k = p;
      return (_.shadowroot || _.shadowrootmode) && (k = Kn.call(r, k, !0)), k;
    }
    let ge = Q ? p.outerHTML : p.innerHTML;
    return Q && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Me(Ru, p.ownerDocument.doctype.name) && (ge = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + ge), J && (ge = Qn(ge)), ae && Ce ? yt(ge) : ge;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(w), pe = !0, ye = m, Ue = _;
  }, t.clearConfig = function() {
    ln = null, pe = !1, ye = null, Ue = null, ae = me, Pe = "";
  }, t.isValidAttribute = function(w, a, p) {
    ln || zr({});
    const E = ve(w), L = ve(a);
    return si(E, L, p);
  }, t.addHook = function(w, a) {
    typeof a == "function" && qe(ce, w) && wn(ce[w], a);
  }, t.removeHook = function(w, a) {
    if (qe(ce, w)) {
      if (a !== void 0) {
        const p = fu(ce[w], a);
        return p === -1 ? void 0 : du(ce[w], p, 1)[0];
      }
      return $i(ce[w]);
    }
  }, t.removeHooks = function(w) {
    qe(ce, w) && (ce[w] = []);
  }, t.removeAllHooks = function() {
    ce = Qi();
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
function A(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (M) => M, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, b = (M) => typeof M == "string" || typeof M == "number", C = (M, N, z) => M.replace(/%n/g, "" + z).replace(/{([^{}]*)}/g, (q, X) => {
    if (N === void 0 || !(X in N))
      return d(q);
    const F = N[X];
    return b(F) ? d(`${F}`) : typeof F == "object" && b(F.value) ? (F.escape !== !1 ? to : c)(`${F.value}`) : d(q);
  });
  let B = (s?.bundle ?? $u(e)).translations[t] || t;
  return B = Array.isArray(B) ? B[0] : B, h(typeof i == "object" || o !== void 0 ? C(
    B,
    i,
    o
  ) : B);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Wu = { id: "library-catalogue-heading" }, Bu = { class: "library-muted" }, Gu = ["aria-label"], Ku = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "" }, cf = ["value"], uf = { value: "" }, ff = ["value"], df = { value: "" }, pf = ["value"], hf = { value: "" }, mf = { value: "1" }, gf = { value: "" }, _f = { value: "1" }, bf = { value: "title" }, yf = { value: "recent" }, Tf = { value: "publicationDate" }, Ef = { value: "publication" }, vf = { value: "lastOpened" }, Sf = { value: "format" }, Af = ["value"], xf = ["value"], wf = ["aria-label"], Cf = ["aria-label"], Of = ["href"], Rf = ["aria-label"], If = ["href", "aria-label"], Pf = ["aria-label"], Nf = ["href"], Df = {
  key: 1,
  class: "library-muted"
}, Mf = ["href"], Lf = {
  key: 3,
  class: "library-muted"
}, Ff = {
  key: 1,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Uf = { id: "library-periodical-groups-heading" }, kf = { class: "library-muted" }, Hf = ["href"], jf = { class: "library-muted" }, $f = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Vf = { id: "library-periodical-groups-empty-heading" }, zf = { class: "library-muted" }, Wf = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Bf = { class: "library-muted" }, Gf = {
  key: 4,
  class: "library-cover-gallery"
}, Kf = ["href", "aria-label"], Yf = ["src", "alt"], qf = { class: "library-cover-summary" }, Xf = { class: "library-cover-primary" }, Jf = ["aria-label"], Zf = ["href"], Qf = { class: "library-cover-details" }, ed = ["aria-label"], td = { class: "library-cover-meta" }, nd = {
  key: 0,
  class: "library-creator"
}, rd = { class: "library-muted" }, sd = { key: 0 }, id = { key: 1 }, od = { key: 2 }, ld = { key: 3 }, ad = { key: 4 }, cd = { key: 5 }, ud = { key: 6 }, fd = { key: 7 }, dd = { key: 8 }, pd = {
  key: 1,
  class: "library-muted library-cover-description"
}, hd = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, md = { key: 0 }, gd = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, _d = {
  key: 0,
  class: "library-muted"
}, bd = { class: "library-cover-actions" }, yd = ["href"], Td = ["href"], Ed = ["href"], vd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Sd = { class: "library-hero-actions" }, Ad = ["href"], xd = ["href"], wd = ["href"], Cd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Re(() => t.state.items || []), i = Re(() => t.state.shelves || []), o = Re(() => t.state.formats || []), l = Re(() => t.state.publications || []), c = Re(() => t.state.publicationSummaries || []), h = Re(() => t.state.publicationYears || []), d = Re(() => t.state.creators || []), b = Re(() => t.state.scanStatuses || []), C = Re(() => t.state.workflowStatuses || []), P = Re(() => t.state.genres || []), B = Re(() => t.state.classifications || []), M = Re(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), N = /* @__PURE__ */ Or({
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
    }), z = Re(() => t.state.settingsUrl || ""), q = Re(() => t.state.metadataExportUrl || ""), X = Re(() => t.state.metadataSidecarManifestUrl || ""), F = Re(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), te = {
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
    }, _e = Re(() => Object.entries(te).map(([me, H]) => ({ key: me, label: H, value: N[me] || "" })).filter((me) => String(me.value).trim() !== ""));
    function be(me) {
      const H = new URLSearchParams(window.location.search);
      H.delete(me), H.delete("page");
      const g = H.toString();
      return g ? `?${g}` : "?";
    }
    function xe(me) {
      return String(me || "").toUpperCase();
    }
    function ae(me) {
      return me.nextcloudTags || [];
    }
    function Pe(me) {
      const H = new URLSearchParams(window.location.search);
      return H.set("publication", me), H.set("sort", "publication"), H.delete("page"), `?${H.toString()}`;
    }
    return (me, H) => ($(), V("div", Vu, [
      S("section", zu, [
        S("h2", Wu, x(U(A)("library", "Publication catalogue")), 1),
        S("p", Bu, x(U(A)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        S("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": U(A)("library", "Catalogue search and filters")
        }, [
          S("label", null, [
            Te(x(U(A)("library", "Search title / author")) + " ", 1),
            He(S("input", {
              "onUpdate:modelValue": H[0] || (H[0] = (g) => N.q = g),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, N.q]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Type")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[1] || (H[1] = (g) => N.type = g),
              name: "type"
            }, [
              S("option", Ku, x(U(A)("library", "All types")), 1),
              ($(), V(he, null, je(n, (g) => S("option", {
                key: g,
                value: g
              }, x(g), 9, Yu)), 64))
            ], 512), [
              [Je, N.type]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Series / periodical")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[2] || (H[2] = (g) => N.publication = g),
              name: "publication"
            }, [
              S("option", qu, x(U(A)("library", "All series and periodicals")), 1),
              ($(!0), V(he, null, je(l.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, Xu))), 128))
            ], 512), [
              [Je, N.publication]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Publication year")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[3] || (H[3] = (g) => N.year = g),
              name: "year"
            }, [
              S("option", Ju, x(U(A)("library", "All years")), 1),
              ($(!0), V(he, null, je(h.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, Zu))), 128))
            ], 512), [
              [Je, N.year]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Creator")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[4] || (H[4] = (g) => N.creator = g),
              name: "creator",
              title: "Exact full-field creator matches only"
            }, [
              S("option", Qu, x(U(A)("library", "All creators")), 1),
              ($(!0), V(he, null, je(d.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, ef))), 128))
            ], 512), [
              [Je, N.creator]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Nextcloud tag")) + " ", 1),
            He(S("input", {
              "onUpdate:modelValue": H[5] || (H[5] = (g) => N.tag = g),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, N.tag]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Format")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[6] || (H[6] = (g) => N.format = g),
              name: "format"
            }, [
              S("option", tf, x(U(A)("library", "All formats")), 1),
              ($(!0), V(he, null, je(o.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(xe(g)), 9, nf))), 128))
            ], 512), [
              [Je, N.format]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Shelf")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[7] || (H[7] = (g) => N.shelf = g),
              name: "shelf"
            }, [
              S("option", rf, x(U(A)("library", "All shelves")), 1),
              ($(!0), V(he, null, je(i.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, sf))), 128))
            ], 512), [
              [Je, N.shelf]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Scan status")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[8] || (H[8] = (g) => N.status = g),
              name: "status"
            }, [
              S("option", of, x(U(A)("library", "All scan statuses")), 1),
              ($(!0), V(he, null, je(b.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, lf))), 128))
            ], 512), [
              [Je, N.status]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Workflow status")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[9] || (H[9] = (g) => N.workflowStatus = g),
              name: "workflowStatus"
            }, [
              S("option", af, x(U(A)("library", "All workflow statuses")), 1),
              ($(!0), V(he, null, je(C.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, cf))), 128))
            ], 512), [
              [Je, N.workflowStatus]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Genre")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[10] || (H[10] = (g) => N.genre = g),
              name: "genre"
            }, [
              S("option", uf, x(U(A)("library", "All genres")), 1),
              ($(!0), V(he, null, je(P.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, ff))), 128))
            ], 512), [
              [Je, N.genre]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Classification")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[11] || (H[11] = (g) => N.classification = g),
              name: "classification"
            }, [
              S("option", df, x(U(A)("library", "All classifications")), 1),
              ($(!0), V(he, null, je(B.value, (g) => ($(), V("option", {
                key: g,
                value: g
              }, x(g), 9, pf))), 128))
            ], 512), [
              [Je, N.classification]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Scanner conflicts")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[12] || (H[12] = (g) => N.scannerConflicts = g),
              name: "scannerConflicts"
            }, [
              S("option", hf, x(U(A)("library", "All metadata")), 1),
              S("option", mf, x(U(A)("library", "Needs review")), 1)
            ], 512), [
              [Je, N.scannerConflicts]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Starred")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[13] || (H[13] = (g) => N.starred = g),
              name: "starred"
            }, [
              S("option", gf, x(U(A)("library", "All publications")), 1),
              S("option", _f, x(U(A)("library", "Starred only")), 1)
            ], 512), [
              [Je, N.starred]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Sort")) + " ", 1),
            He(S("select", {
              "onUpdate:modelValue": H[14] || (H[14] = (g) => N.sort = g),
              name: "sort"
            }, [
              S("option", bf, x(U(A)("library", "Title")), 1),
              S("option", yf, x(U(A)("library", "Recently added")), 1),
              S("option", Tf, x(U(A)("library", "Publication date")), 1),
              S("option", Ef, x(U(A)("library", "Series / periodical")), 1),
              S("option", vf, x(U(A)("library", "Recently opened")), 1),
              S("option", Sf, x(U(A)("library", "Format")), 1)
            ], 512), [
              [Je, N.sort]
            ])
          ]),
          S("label", null, [
            Te(x(U(A)("library", "Page size")) + " ", 1),
            S("select", {
              value: M.value.limit,
              name: "limit"
            }, [
              ($(), V(he, null, je(r, (g) => S("option", {
                key: g,
                value: g
              }, x(g), 9, xf)), 64))
            ], 8, Af)
          ]),
          S("button", {
            type: "submit",
            class: "button primary",
            "aria-label": U(A)("library", "Apply catalogue filters")
          }, x(U(A)("library", "Apply filters")), 9, wf),
          S("a", {
            href: "?",
            class: "button secondary",
            "aria-label": U(A)("library", "Clear catalogue filters")
          }, x(U(A)("library", "Clear")), 9, Cf),
          S("a", {
            href: F.value,
            class: "button secondary library-scanner-conflict-review-link"
          }, x(U(A)("library", "Review scanner conflicts")), 9, Of)
        ], 8, Gu),
        _e.value.length > 0 ? ($(), V("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": U(A)("library", "Active filters")
        }, [
          S("span", null, x(U(A)("library", "Active filters")), 1),
          ($(!0), V(he, null, je(_e.value, (g) => ($(), V("a", {
            key: g.key,
            href: be(g.key),
            class: "library-filter-chip",
            "aria-label": `${U(A)("library", "Remove filter")}: ${g.label}`
          }, [
            S("strong", null, x(g.label) + ":", 1),
            Te(" " + x(g.value) + " ", 1),
            H[15] || (H[15] = S("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, If))), 128))
        ], 8, Rf)) : Oe("", !0),
        S("nav", {
          class: "library-pagination",
          "aria-label": U(A)("library", "Catalogue pagination")
        }, [
          S("span", null, "Showing " + x(M.value.from) + "–" + x(M.value.to) + " of " + x(M.value.total) + " catalogue items", 1),
          M.value.previousUrl ? ($(), V("a", {
            key: 0,
            href: M.value.previousUrl
          }, x(U(A)("library", "Previous")), 9, Nf)) : ($(), V("span", Df, x(U(A)("library", "Previous")), 1)),
          M.value.nextUrl ? ($(), V("a", {
            key: 2,
            href: M.value.nextUrl
          }, x(U(A)("library", "Next")), 9, Mf)) : ($(), V("span", Lf, x(U(A)("library", "Next")), 1))
        ], 8, Pf),
        c.value.length > 0 ? ($(), V("section", Ff, [
          S("h3", Uf, x(U(A)("library", "Top series and periodicals")), 1),
          S("p", kf, x(U(A)("library", "Jump into recurring publications with one click.")), 1),
          S("ul", null, [
            ($(!0), V(he, null, je(c.value, (g) => ($(), V("li", {
              key: g.publication
            }, [
              S("a", {
                href: Pe(g.publication)
              }, x(g.publication), 9, Hf),
              S("span", jf, x(g.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? ($(), V("section", $f, [
          S("h3", Vf, x(U(A)("library", "No series or periodicals found yet")), 1),
          S("p", zf, x(U(A)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Oe("", !0),
        s.value.length === 0 ? ($(), V("div", Wf, [
          S("h3", null, x(U(A)("library", "No catalogue items match")), 1),
          S("p", Bf, x(U(A)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : ($(), V("div", Gf, [
          ($(!0), V(he, null, je(s.value, (g) => ($(), V("article", {
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
              }, null, 8, Yf)
            ], 8, Kf),
            S("div", qf, [
              S("div", Xf, [
                S("h3", null, [
                  g.starred ? ($(), V("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": U(A)("library", "Starred")
                  }, "★", 8, Jf)) : Oe("", !0),
                  Te(x(g.title), 1)
                ]),
                S("a", {
                  class: "library-cover-read",
                  href: g.openUrl
                }, x(U(A)("library", "Read")), 9, Zf)
              ]),
              S("details", Qf, [
                S("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${U(A)("library", "Show details and actions")}: ${g.title}`
                }, x(U(A)("library", "Details")), 9, ed),
                S("div", td, [
                  g.creators ? ($(), V("p", nd, x(g.creators), 1)) : Oe("", !0),
                  S("p", rd, [
                    S("span", null, x(g.publicationType), 1),
                    g.publication ? ($(), V("span", sd, " · " + x(g.publication), 1)) : Oe("", !0),
                    g.publicationDate ? ($(), V("span", id, " · " + x(g.publicationDate), 1)) : Oe("", !0),
                    g.workflowStatus ? ($(), V("span", od, " · Workflow status: " + x(g.workflowStatus), 1)) : Oe("", !0),
                    g.genres?.length ? ($(), V("span", ld, " · Genres: " + x(g.genres.join("; ")), 1)) : Oe("", !0),
                    g.classifications?.length ? ($(), V("span", ad, " · Classifications: " + x(g.classifications.join("; ")), 1)) : Oe("", !0),
                    g.hasScannerConflict ? ($(), V("span", cd, " · Needs scanner review: " + x(g.scannerConflictCount) + " fields", 1)) : Oe("", !0),
                    g.lastOpenedAt ? ($(), V("span", ud, " · Last opened: " + x(g.lastOpenedAt), 1)) : Oe("", !0),
                    g.extension ? ($(), V("span", fd, " · Format: " + x(xe(g.extension)), 1)) : Oe("", !0),
                    g.shelf ? ($(), V("span", dd, " · Shelf: " + x(g.shelf), 1)) : Oe("", !0)
                  ]),
                  g.description ? ($(), V("p", pd, x(g.description), 1)) : Oe("", !0),
                  g.scanStatus !== "indexed" || g.scanError ? ($(), V("p", hd, [
                    Te(" scanStatus: " + x(g.scanStatus || "unknown"), 1),
                    g.scanError ? ($(), V("span", md, " · scanError: " + x(g.scanError), 1)) : Oe("", !0)
                  ])) : Oe("", !0),
                  S("div", gd, [
                    ae(g).length === 0 ? ($(), V("span", _d, "No Nextcloud tags")) : ($(!0), V(he, { key: 1 }, je(ae(g), (bt) => ($(), V("span", {
                      key: bt.id,
                      class: "library-tag"
                    }, x(bt.name), 1))), 128))
                  ]),
                  S("p", bd, [
                    S("a", {
                      href: g.filesUrl
                    }, x(U(A)("library", "Show in Files")), 9, yd),
                    H[16] || (H[16] = Te(" · ", -1)),
                    S("a", {
                      href: g.downloadUrl
                    }, x(U(A)("library", "Download source")), 9, Td),
                    H[17] || (H[17] = Te(" · ", -1)),
                    S("a", {
                      href: g.detailsUrl
                    }, x(U(A)("library", "Details")), 9, Ed)
                  ])
                ])
              ])
            ])
          ]))), 128))
        ]))
      ]),
      S("section", vd, [
        H[18] || (H[18] = S("div", null, [
          S("h2", null, "Library"),
          S("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        S("div", Sd, [
          S("a", {
            href: z.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Ad),
          q.value ? ($(), V("a", {
            key: 0,
            href: q.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, xd)) : Oe("", !0),
          X.value ? ($(), V("a", {
            key: 1,
            href: X.value,
            class: "button secondary",
            "aria-label": "Export sidecar manifest"
          }, "Export sidecar manifest", 8, wd)) : Oe("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function Se(e) {
  return String(e ?? "");
}
function _l(e) {
  return Se(e).toUpperCase();
}
function Od(e, t, n, r = Se) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = Se(s), i.textContent = r(s), Se(s) === Se(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = Se(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function un(e, t, n, r, s, i, o = Se) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), Od(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Rd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", A("library", "Catalogue search and filters")), so(r, A("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, A("library", "Type"), "type", n.type, A("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, A("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, A("library", "Format"), "format", n.format, A("library", "All formats"), e.formats || [], _l), un(r, A("library", "Shelf"), "shelf", n.shelf, A("library", "All shelves"), e.shelves || []), un(r, A("library", "Scan status"), "status", n.status, A("library", "All scan statuses"), e.scanStatuses || []), un(r, A("library", "Sort"), "sort", n.sort || "title", A("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, A("library", "Page size"), "limit", t.limit || 100, A("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", A("library", "Apply catalogue filters")), s.textContent = A("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", A("library", "Clear catalogue filters")), i.textContent = A("library", "Clear"), r.append(s, i), r;
}
function Id(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = Se(e.settingsUrl || ""), i = Se(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = A("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = A("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(Rd(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", A("library", "Catalogue pagination"));
  const b = document.createElement("span");
  if (b.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(b), l.appendChild(d), n.length === 0) {
    const C = document.createElement("div");
    C.className = "library-empty-content", C.setAttribute("role", "status");
    const P = document.createElement("h3");
    P.textContent = A("library", "No catalogue items match");
    const B = document.createElement("p");
    B.className = "library-muted", B.textContent = A("library", "Scan enabled roots or clear the active filters."), C.append(P, B), l.appendChild(C);
  } else {
    const C = document.createElement("div");
    C.className = "library-cover-gallery";
    for (const P of n) {
      const B = document.createElement("article");
      B.className = "library-cover-card";
      const M = document.createElement("a");
      M.className = "library-cover-link", M.href = Se(P.openUrl || "#"), M.setAttribute("aria-label", `Read ${Se(P.title || "publication")}`);
      const N = document.createElement("img");
      N.className = "library-cover-image", N.src = Se(P.coverUrl || ""), N.alt = `Cover for ${Se(P.title || "publication")}`, N.loading = "lazy", M.appendChild(N);
      const z = document.createElement("div");
      z.className = "library-cover-summary";
      const q = document.createElement("h3");
      if (q.textContent = Se(P.title || "Untitled publication"), z.appendChild(q), P.creators) {
        const ae = document.createElement("p");
        ae.className = "library-creator", ae.textContent = Se(P.creators), z.appendChild(ae);
      }
      const X = document.createElement("p");
      X.className = "library-muted", X.textContent = [
        Se(P.publicationType || "other"),
        P.extension ? `Format: ${_l(P.extension)}` : "",
        P.shelf ? `Shelf: ${Se(P.shelf)}` : ""
      ].filter(Boolean).join(" · "), z.appendChild(X);
      const F = document.createElement("p"), te = document.createElement("a");
      te.href = Se(P.openUrl || "#"), te.textContent = A("library", "Read");
      const _e = document.createElement("a");
      _e.href = Se(P.filesUrl || "#"), _e.textContent = A("library", "Show in Files");
      const be = document.createElement("a");
      be.href = Se(P.downloadUrl || "#"), be.textContent = A("library", "Download source");
      const xe = document.createElement("a");
      xe.href = Se(P.detailsUrl || "#"), xe.textContent = A("library", "Details"), F.append(te, document.createTextNode(" · "), _e, document.createTextNode(" · "), be, document.createTextNode(" · "), xe), z.appendChild(F), B.append(M, z), C.appendChild(B);
    }
    l.appendChild(C);
  }
  if (o.appendChild(l), s || i) {
    const C = document.createElement("section");
    C.className = "library-hero library-secondary-panel", C.setAttribute("aria-label", "Library settings");
    const P = document.createElement("div"), B = document.createElement("h2");
    B.textContent = "Library";
    const M = document.createElement("p");
    M.className = "library-lede", M.textContent = "Browse publications already stored in Nextcloud.", P.append(B, M);
    const N = document.createElement("div");
    if (N.className = "library-hero-actions", s) {
      const z = document.createElement("a");
      z.href = s, z.className = "button secondary", z.setAttribute("aria-label", "Open Library settings"), z.textContent = "Library settings", N.appendChild(z);
    }
    if (i) {
      const z = document.createElement("a");
      z.href = i, z.className = "button secondary", z.setAttribute("aria-label", "Export corrected metadata"), z.textContent = "Export corrected metadata", N.appendChild(z);
    }
    C.append(P, N), o.appendChild(C);
  }
  return o;
}
if (dr)
  try {
    Qc(Cd, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(Id(ro));
  }
//# sourceMappingURL=library-main.mjs.map
