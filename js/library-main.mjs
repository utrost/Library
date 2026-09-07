// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, pn = [], gt = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vr = (e) => e.startsWith("onUpdate:"), Me = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ie = (e, t) => Ml.call(e, t), K = Array.isArray, Lt = (e) => Wn(e) === "[object Map]", Qt = (e) => Wn(e) === "[object Set]", li = (e) => Wn(e) === "[object Date]", J = (e) => typeof e == "function", ye = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", oo = (e) => (le(e) || J(e)) && J(e.then) && J(e.catch), lo = Object.prototype.toString, Wn = (e) => lo.call(e), Ll = (e) => Wn(e).slice(8, -1), ao = (e) => Wn(e) === "[object Object]", Cs = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, st = Ar(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, en = Ar(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = Ar(
  (e) => e ? `on${co(e)}` : ""
), vt = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
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
      const r = e[n], s = ye(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ye(e) || le(e))
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
  if (ye(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = Rs(e[n]);
      r && (t += r + " ");
    }
  else if (le(e))
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
    n = Ft(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Ft(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Ft(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), r = _t(t), n || r)
    return e === t;
  if (n = K(e), r = K(t), n || r)
    return n && r ? Wl(e, t) : !1;
  if (n = le(e), r = le(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Lt(e), r = Lt(t), n || r || (n = Qt(e), r = Qt(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Ft(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Bl(e, t) {
  return e.findIndex((n) => Ft(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), C = (e) => ye(e) ? e : e == null ? "" : K(e) || le(e) && (e.toString === lo || !J(e.toString)) ? po(e) ? C(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : _t(t) ? Yr(t) : le(t) && !K(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Re;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Re && (Re.active ? (this.parent = Re, this.index = (Re.scopes || (Re.scopes = [])).push(
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
      const n = Re;
      try {
        return Re = this, t();
      } finally {
        Re = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Re, Re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Re === this)
        Re = this.prevScope;
      else {
        let t = Re;
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
  return Re;
}
let fe;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && (Re.active ? Re.effects.push(this) : this.flags &= -2);
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
    const t = fe, n = it;
    fe = this, it = !0;
    try {
      return this.fn();
    } finally {
      yo(this), fe = t, it = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ds(t);
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
let go = 0, Nn, Mn;
function _o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mn, Mn = e;
    return;
  }
  e.next = Nn, Nn = e;
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
  for (; Nn; ) {
    let t = Nn;
    for (Nn = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = s), Ds(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
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
  const t = e.dep, n = fe, r = it;
  fe = e, it = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || vt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    fe = n, it = r, yo(e), e.flags &= -3;
  }
}
function Ds(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ds(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let it = !0;
const Eo = [];
function Ct() {
  Eo.push(it), it = !1;
}
function Ot() {
  const e = Eo.pop();
  it = e === void 0 ? !0 : e;
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
class So {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!fe || !it || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new ql(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, vo(n);
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
const hs = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), Hn = /* @__PURE__ */ Symbol(
  ""
);
function Ne(e, t, n) {
  if (it && fe) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function At(e, t, n, r, s, i) {
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
      o.forEach((b, w) => {
        (w === "length" || w === Hn || !_t(w) && w >= d) && l(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Hn)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(Xt)), Lt(e) && l(o.get(ms)));
          break;
        case "delete":
          c || (l(o.get(Xt)), Lt(e) && l(o.get(ms)));
          break;
        case "set":
          Lt(e) && l(o.get(Xt));
          break;
      }
  }
  Ps();
}
function cn(e) {
  const t = /* @__PURE__ */ oe(e);
  return t === e ? t : (Ne(t, "iterate", Hn), /* @__PURE__ */ ot(e) ? t : t.map(Rt));
}
function Cr(e) {
  return Ne(e = /* @__PURE__ */ oe(e), "iterate", Hn), e;
}
function ht(e, t) {
  return /* @__PURE__ */ Ut(e) ? _n(/* @__PURE__ */ Jt(e) ? Rt(t) : t) : Rt(t);
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
    return Tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Tt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => ht(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Tt(
      this,
      "find",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Tt(
      this,
      "findLast",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Tt(this, "forEach", e, t, void 0, arguments);
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
    return Tt(this, "map", e, t, void 0, arguments);
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
    return Tt(this, "some", e, t, void 0, arguments);
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
  return r !== e && !/* @__PURE__ */ ot(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function Tt(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ ot(e), c = o[t];
  if (c !== Jl[t]) {
    const b = c.apply(e, i);
    return l ? Rt(b) : b;
  }
  let h = n;
  o !== e && (l ? h = function(b, w) {
    return n.call(this, ht(e, b), w, e);
  } : n.length > 2 && (h = function(b, w) {
    return n.call(this, b, w, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ ot(e);
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
  const r = /* @__PURE__ */ oe(e);
  Ne(r, "iterate", Hn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  Ct(), Is();
  const r = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return Ps(), Ot(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function Ql(e) {
  _t(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Ne(t, "has", e), t.hasOwnProperty(e);
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
      /* @__PURE__ */ $e(t) ? t : r
    );
    if ((_t(n) ? Ao.has(n) : Zl(n)) || (s || Ne(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ $e(l)) {
      const c = o && Cs(n) ? l : l.value;
      return s && le(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return le(l) ? s ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Or(l) : l;
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
      const h = /* @__PURE__ */ Ut(i);
      if (!/* @__PURE__ */ ot(r) && !/* @__PURE__ */ Ut(r) && (i = /* @__PURE__ */ oe(i), r = /* @__PURE__ */ oe(r)), !o && /* @__PURE__ */ $e(i) && !/* @__PURE__ */ $e(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ $e(t) ? t : s
    );
    return t === /* @__PURE__ */ oe(s) && c && (l ? vt(r, i) && At(t, "set", n, r) : At(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ie(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && At(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_t(n) || !Ao.has(n)) && Ne(t, "has", n), r;
  }
  ownKeys(t) {
    return Ne(
      t,
      "iterate",
      K(t) ? "length" : Xt
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
    const s = this.__v_raw, i = /* @__PURE__ */ oe(s), o = Lt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : Rt;
    return !t && Ne(
      i,
      "iterate",
      c ? ms : Xt
    ), Me(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: w } = h.next();
          return w ? { value: b, done: w } : {
            value: l ? [d(b[0]), d(b[1])] : d(b),
            done: w
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
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(s);
      e || (vt(s, l) && Ne(o, "get", s), Ne(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : Rt;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ne(/* @__PURE__ */ oe(s), "iterate", Xt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(s);
      return e || (vt(s, l) && Ne(o, "has", s), Ne(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ oe(l), h = t ? gs : e ? _n : Rt;
      return !e && Ne(c, "iterate", Xt), l.forEach((d, b) => s.call(i, h(d), h(b), o));
    }
  };
  return Me(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ oe(this), o = rr(i), l = /* @__PURE__ */ oe(s), c = !t && !/* @__PURE__ */ ot(s) && !/* @__PURE__ */ Ut(s) ? l : s;
        return o.has.call(i, c) || vt(s, c) && o.has.call(i, s) || vt(l, c) && o.has.call(i, l) || (i.add(c), At(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ot(i) && !/* @__PURE__ */ Ut(i) && (i = /* @__PURE__ */ oe(i));
        const o = /* @__PURE__ */ oe(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ oe(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? vt(i, d) && At(o, "set", s, i) : At(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ oe(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ oe(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && At(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ oe(this), i = s.size !== 0, o = s.clear();
        return i && At(
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
function Ns(e, t) {
  const n = ia(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ie(n, s) && s in r ? n : r,
    s,
    i
  );
}
const oa = {
  get: /* @__PURE__ */ Ns(!1, !1)
}, la = {
  get: /* @__PURE__ */ Ns(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Ns(!0, !1)
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
  return /* @__PURE__ */ Ut(e) ? e : Ms(
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
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function Jt(e) {
  return /* @__PURE__ */ Ut(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function da(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const Rt = (e) => le(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => le(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return /* @__PURE__ */ $e(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : k(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ $e(s) && !/* @__PURE__ */ $e(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, pa);
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
  return J(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const ir = {}, pr = /* @__PURE__ */ new WeakMap();
let Gt;
function ga(e, t = !1, n = Gt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = ae) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (F) => s ? F : /* @__PURE__ */ ot(F) || s === !1 || s === 0 ? xt(F, 1) : xt(F);
  let d, b, w, P, B = !1, M = !1;
  if (/* @__PURE__ */ $e(e) ? (b = () => e.value, B = /* @__PURE__ */ ot(e)) : /* @__PURE__ */ Jt(e) ? (b = () => h(e), B = !0) : K(e) ? (M = !0, B = e.some((F) => /* @__PURE__ */ Jt(F) || /* @__PURE__ */ ot(F)), b = () => e.map((F) => {
    if (/* @__PURE__ */ $e(F))
      return F.value;
    if (/* @__PURE__ */ Jt(F))
      return h(F);
    if (J(F))
      return c ? c(F, 2) : F();
  })) : J(e) ? t ? b = c ? () => c(e, 2) : e : b = () => {
    if (w) {
      Ct();
      try {
        w();
      } finally {
        Ot();
      }
    }
    const F = Gt;
    Gt = d;
    try {
      return c ? c(e, 3, [P]) : e(P);
    } finally {
      Gt = F;
    }
  } : b = gt, t && s) {
    const F = b, ne = s === !0 ? 1 / 0 : s;
    b = () => xt(F(), ne);
  }
  const N = Kl(), $ = () => {
    d.stop(), N && N.active && ws(N.effects, d);
  };
  if (i && t) {
    const F = t;
    t = (...ne) => {
      const _e = F(...ne);
      return $(), _e;
    };
  }
  let q = M ? new Array(e.length).fill(ir) : ir;
  const Z = (F) => {
    if (!(!(d.flags & 1) || !d.dirty && !F))
      if (t) {
        const ne = d.run();
        if (F || s || B || (M ? ne.some((_e, me) => vt(_e, q[me])) : vt(ne, q))) {
          w && w();
          const _e = Gt;
          Gt = d;
          try {
            const me = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              q === ir ? void 0 : M && q[0] === ir ? [] : q,
              P
            ];
            q = ne, c ? c(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            Gt = _e;
          }
        }
      } else
        d.run();
  };
  return l && l(Z), d = new mo(b), d.scheduler = o ? () => o(Z, !1) : Z, P = (F) => ga(F, !1, d), w = d.onStop = () => {
    const F = pr.get(d);
    if (F) {
      if (c)
        c(F, 4);
      else
        for (const ne of F) ne();
      pr.delete(d);
    }
  }, t ? r ? Z(!0) : q = d.run() : o ? o(Z.bind(null, !0), !0) : d.run(), $.pause = d.pause.bind(d), $.resume = d.resume.bind(d), $.stop = $, $;
}
function xt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ $e(e))
    xt(e.value, t, n);
  else if (K(e))
    for (let r = 0; r < e.length; r++)
      xt(e[r], t, n);
  else if (Qt(e) || Lt(e))
    e.forEach((r) => {
      xt(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      xt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && xt(e[r], t, n);
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
function lt(e, t, n, r) {
  if (J(e)) {
    const s = Bn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (K(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(lt(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ae;
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
      Ct(), Bn(i, null, 10, [
        e,
        c,
        h
      ]), Ot();
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
const He = [];
let pt = -1;
const hn = [];
let Mt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = pt + 1, n = He.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = He[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = He[He.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? He.push(e) : He.splice(ya(t), 0, e), e.flags |= 1, No();
  }
}
function No() {
  hr || (hr = Po.then(Lo));
}
function Ta(e) {
  if (!K(e))
    Mt && e.id === -1 ? Mt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  No();
}
function di(e, t, n = pt + 1) {
  for (; n < He.length; n++) {
    const r = He[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      He.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mo(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (hn.length = 0, Mt) {
      for (let n = 0; n < t.length; n++)
        Mt.push(t[n]);
      return;
    }
    for (Mt = t, fn = 0; fn < Mt.length; fn++) {
      const n = Mt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mt = null, fn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (pt = 0; pt < He.length; pt++) {
      const t = He[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pt < He.length; pt++) {
      const t = He[pt];
      t && (t.flags &= -2);
    }
    pt = -1, He.length = 0, Mo(), hr = null, (He.length || hn.length) && Lo();
  }
}
let tt = null, Fo = null;
function mr(e) {
  const t = tt;
  return tt = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = tt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && vi(-1);
    const i = mr(t), o = Zt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Zt.length; c > o; c--) ol();
      mr(i), r._d && vi(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Be(e, t) {
  if (tt === null)
    return e;
  const n = Mr(tt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ae] = t[s];
    i && (J(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && xt(o), r.push({
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
function zt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Ct(), lt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ot());
  }
}
function Sa(e, t) {
  if (je) {
    let n = je.provides;
    const r = je.parent && je.parent.provides;
    r === n && (n = je.provides = Object.create(r)), n[e] = t;
  }
}
function ur(e, t, n = !1) {
  const r = Tc();
  if (r || mn) {
    let s = mn ? mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(r && r.proxy) : t;
  }
}
const va = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => ur(va);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = ae) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Me({}, n), c = t && r || !t && i !== "post";
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
  const d = je;
  l.call = (P, B, M) => lt(P, d, B, M);
  let b = !1;
  i === "post" ? l.scheduler = (P) => {
    Ge(P, d && d.suspense);
  } : i !== "sync" && (b = !0, l.scheduler = (P, B) => {
    B ? P() : Fs(P);
  }), l.augmentJob = (P) => {
    t && (P.flags |= 4), b && (P.flags |= 2, d && (P.id = d.uid, P.i = d));
  };
  const w = _a(e, t, l);
  return zn && (h ? h.push(w) : c && w()), w;
}
function xa(e, t, n) {
  const r = this.proxy, s = ye(e) ? e.includes(".") ? ko(r, e) : () => r[e] : e.bind(r, r);
  let i;
  J(t) ? i = t : (i = t.handler, n = t);
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
    if (t & 32 && J(n.default))
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ae ? l.refs = {} : l.refs, b = l.setupState, w = /* @__PURE__ */ oe(b), P = b === ae ? io : (M) => pi(d, M) ? !1 : ie(w, M), B = (M, N) => !(N && pi(d, N));
  if (h != null && h !== c) {
    if (hi(t), ye(h))
      d[h] = null, P(h) && (b[h] = null);
    else if (/* @__PURE__ */ $e(h)) {
      const M = t;
      B(h, M.k) && (h.value = null), M.k && (d[M.k] = null);
    }
  }
  if (J(c))
    Bn(c, l, 12, [o, d]);
  else {
    const M = ye(c), N = /* @__PURE__ */ $e(c);
    if (M || N) {
      const $ = () => {
        if (e.f) {
          const q = M ? P(c) ? b[c] : d[c] : B() || !e.k ? c.value : d[e.k];
          if (s)
            K(q) && ws(q, i);
          else if (K(q))
            q.includes(i) || q.push(i);
          else if (M)
            d[c] = [i], P(c) && (b[c] = d[c]);
          else {
            const Z = [i];
            B(c, e.k) && (c.value = Z), e.k && (d[e.k] = Z);
          }
        } else M ? (d[c] = o, P(c) && (b[c] = o)) : N && (B(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const q = () => {
          $(), gr.delete(e);
        };
        q.id = -1, gr.set(e, q), Ge(q, n);
      } else
        hi(e), $();
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
function $o(e, t, n = je) {
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
function Pr(e, t, n = je, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ct();
      const l = Gn(n), c = lt(t, n, e, o);
      return l(), Ot(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Pt = (e) => (t, n = je) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Pt("bm"), Da = Pt("m"), Na = Pt(
  "bu"
), Ma = Pt("u"), La = Pt(
  "bum"
), Vo = Pt("um"), Fa = Pt(
  "sp"
), Ua = Pt("rtg"), ka = Pt("rtc");
function Ha(e, t = je) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function Ue(e, t, n, r) {
  let s;
  const i = n, o = K(e);
  if (o || ye(e)) {
    const l = o && /* @__PURE__ */ Jt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ ot(e), h = /* @__PURE__ */ Ut(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, b = e.length; d < b; d++)
      s[d] = t(
        c ? h ? _n(Rt(e[d])) : Rt(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (le(e))
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
  /* @__PURE__ */ Me(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== ae && !e.__isScriptSetup && ie(e, t), $a = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
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
        if (s !== ae && ie(s, t))
          return o[t] = 2, s[t];
        if (ie(i, t))
          return o[t] = 3, i[t];
        if (n !== ae && ie(n, t))
          return o[t] = 4, n[t];
        ys && (o[t] = 0);
      }
    }
    const h = Un[t];
    let d, b;
    if (h)
      return t === "$attrs" && Ne(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ae && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = c.config.globalProperties, ie(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== ae && ie(r, t) ? (r[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ae && l[0] !== "$" && ie(e, l) || es(t, l) || ie(i, l) || ie(r, l) || ie(Un, l) || ie(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
    mounted: w,
    beforeUpdate: P,
    updated: B,
    activated: M,
    deactivated: N,
    beforeDestroy: $,
    beforeUnmount: q,
    destroyed: Z,
    unmounted: F,
    render: ne,
    renderTracked: _e,
    renderTriggered: me,
    errorCaptured: xe,
    serverPrefetch: Q,
    // public API
    expose: U,
    inheritAttrs: g,
    // assets
    components: at,
    directives: ct,
    filters: tn
  } = t;
  if (h && za(h, r, null), o)
    for (const de in o) {
      const se = o[de];
      J(se) && (r[de] = se.bind(n));
    }
  if (s) {
    const de = s.call(n, n);
    le(de) && (e.data = /* @__PURE__ */ Or(de));
  }
  if (ys = !0, i)
    for (const de in i) {
      const se = i[de], nt = J(se) ? se.bind(n, n) : J(se.get) ? se.get.bind(n, n) : gt, kt = !J(se) && J(se.set) ? se.set.bind(n) : gt, yt = Pe({
        get: nt,
        set: kt
      });
      Object.defineProperty(r, de, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (Ze) => yt.value = Ze
      });
    }
  if (l)
    for (const de in l)
      zo(l[de], r, n, de);
  if (c) {
    const de = J(c) ? c.call(n) : c;
    Reflect.ownKeys(de).forEach((se) => {
      Sa(se, de[se]);
    });
  }
  d && gi(d, e, "c");
  function Oe(de, se) {
    K(se) ? se.forEach((nt) => de(nt.bind(n))) : se && de(se.bind(n));
  }
  if (Oe(Pa, b), Oe(Da, w), Oe(Na, P), Oe(Ma, B), Oe(Oa, M), Oe(Ra, N), Oe(Ha, xe), Oe(ka, _e), Oe(Ua, me), Oe(La, q), Oe(Vo, F), Oe(Fa, Q), K(U))
    if (U.length) {
      const de = e.exposed || (e.exposed = {});
      U.forEach((se) => {
        Object.defineProperty(de, se, {
          get: () => n[se],
          set: (nt) => n[se] = nt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ne && e.render === gt && (e.render = ne), g != null && (e.inheritAttrs = g), at && (e.components = at), ct && (e.directives = ct), Q && jo(e);
}
function za(e, t, n = gt) {
  K(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    le(s) ? "default" in s ? i = ur(
      s.from || r,
      s.default,
      !0
    ) : i = ur(s.from || r) : i = ur(s), /* @__PURE__ */ $e(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  lt(
    K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? ko(n, r) : () => n[r];
  if (ye(e)) {
    const i = t[e];
    J(i) && Zr(s, i);
  } else if (J(e))
    Zr(s, e.bind(n));
  else if (le(e))
    if (K(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(i) && Zr(s, i, e);
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
  ), _r(c, t, o)), le(t) && i.set(t, c), c;
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
  beforeCreate: ke,
  created: ke,
  beforeMount: ke,
  mounted: ke,
  beforeUpdate: ke,
  updated: ke,
  beforeDestroy: ke,
  beforeUnmount: ke,
  destroyed: ke,
  unmounted: ke,
  activated: ke,
  deactivated: ke,
  errorCaptured: ke,
  serverPrefetch: ke,
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
    return Me(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
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
function ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Me(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Me(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ke(e[r], t[r]);
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
    J(r) || (r = Me({}, r)), s != null && !le(s) && (s = null);
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
        return o.has(d) || (d && J(d.install) ? (o.add(d), d.install(h, ...b)) : J(d) && (o.add(d), d(h, ...b))), h;
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
      mount(d, b, w) {
        if (!c) {
          const P = h._ceVNode || wt(r, s);
          return P.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(P, d, w), c = !0, h._container = d, d.__vue_app__ = h, Mr(P.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (lt(
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
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${st(t)}Modifiers`] || e[`${en(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ae;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => ye(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Kr(t)] || // also try camelCase event handler (#2249)
  r[l = Kr(st(t))];
  !c && i && (c = r[l = Kr(en(t))]), c && lt(
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
    e.emitted[l] = !0, lt(
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
  if (!J(e)) {
    const c = (h) => {
      const d = Go(h, t, !0);
      d && (l = !0, Me(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (le(e) && r.set(e, null), null) : (K(i) ? i.forEach((c) => o[c] = null) : Me(o, i), le(e) && r.set(e, o), o);
}
function Dr(e, t) {
  return !e || !Sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, en(t)) || ie(e, t));
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
    data: w,
    setupState: P,
    ctx: B,
    inheritAttrs: M
  } = e, N = mr(e);
  let $, q;
  try {
    if (n.shapeFlag & 4) {
      const F = s || r, ne = F;
      $ = mt(
        h.call(
          ne,
          F,
          d,
          b,
          P,
          w,
          B
        )
      ), q = l;
    } else {
      const F = t;
      $ = mt(
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
    Zt.length = 0, Rr(F, e, 1), $ = wt(It);
  }
  let Z = $;
  if (q && M !== !1) {
    const F = Object.keys(q), { shapeFlag: ne } = Z;
    F.length && ne & 7 && (i && F.some(vr) && (q = Qa(
      q,
      i
    )), Z = bn(Z, q, !1, !0));
  }
  if (n.dirs && (Z = bn(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Ir(Z.type) && Ho(Z) || Z;
    Us(F, n.transition);
  }
  return $ = Z, mr(N), $;
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
      for (let b = 0; b < d.length; b++) {
        const w = d[b];
        if (Ko(o, r, w) && !Dr(h, w))
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
    if (Ko(t, e, i) && !Dr(n, i))
      return !0;
  }
  return !1;
}
function Ko(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && le(r) && le(s) ? !Ft(r, s) : r !== s;
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
  } = e, l = /* @__PURE__ */ oe(s), [c] = e.propsOptions;
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
        let w = d[b];
        if (Dr(e.emitsOptions, w))
          continue;
        const P = t[w];
        if (c)
          if (ie(i, w))
            P !== i[w] && (i[w] = P, h = !0);
          else {
            const B = st(w);
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
          P !== i[w] && (i[w] = P, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const b in l)
      (!t || // for camelCase
      !ie(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = en(b)) === b || !ie(t, d))) && (c ? n && // for camelCase
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
        (!t || !ie(t, b)) && (delete i[b], h = !0);
  }
  h && At(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Dn(c))
        continue;
      const h = t[c];
      let d;
      s && ie(s, d = st(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ oe(n), h = l || ae;
    for (let d = 0; d < i.length; d++) {
      const b = i[d];
      n[b] = Es(
        s,
        c,
        b,
        h[b],
        e,
        !ie(h, b)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && J(c)) {
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
    ] && (r === "" || r === en(n)) && (r = !0));
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
  if (!J(e)) {
    const d = (b) => {
      c = !0;
      const [w, P] = Zo(b, t, !0);
      Me(o, w), P && l.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return le(e) && r.set(e, pn), pn;
  if (K(i))
    for (let d = 0; d < i.length; d++) {
      const b = st(i[d]);
      Ei(b) && (o[b] = ae);
    }
  else if (i)
    for (const d in i) {
      const b = st(d);
      if (Ei(b)) {
        const w = i[d], P = o[b] = K(w) || J(w) ? { type: w } : Me({}, w), B = P.type;
        let M = !1, N = !0;
        if (K(B))
          for (let $ = 0; $ < B.length; ++$) {
            const q = B[$], Z = J(q) && q.name;
            if (Z === "Boolean") {
              M = !0;
              break;
            } else Z === "String" && (N = !1);
          }
        else
          M = J(B) && B.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = M, P[
          1
          /* shouldCastTrue */
        ] = N, (M || ie(P, "default")) && l.push(b);
      }
    }
  const h = [o, l];
  return le(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
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
    if (J(i))
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
  let i = !0, o = ae;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, Ge = dc;
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
    nextSibling: w,
    setScopeId: P = gt,
    insertStaticContent: B
  } = e, M = (u, f, m, S = null, _ = null, T = null, O = void 0, R = null, I = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (S = nn(u), Ze(u, _, T, !0), u = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: y, ref: z, shapeFlag: D } = f;
    switch (y) {
      case Nr:
        N(u, f, m, S);
        break;
      case It:
        $(u, f, m, S);
        break;
      case ns:
        u == null && q(f, m, S, O);
        break;
      case he:
        at(
          u,
          f,
          m,
          S,
          _,
          T,
          O,
          R,
          I
        );
        break;
      default:
        D & 1 ? ne(
          u,
          f,
          m,
          S,
          _,
          T,
          O,
          R,
          I
        ) : D & 6 ? ct(
          u,
          f,
          m,
          S,
          _,
          T,
          O,
          R,
          I
        ) : (D & 64 || D & 128) && y.process(
          u,
          f,
          m,
          S,
          _,
          T,
          O,
          R,
          I,
          jt
        );
    }
    z != null && _ ? Ln(z, u && u.ref, T, f || u, !f) : z == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, N = (u, f, m, S) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        S
      );
    else {
      const _ = f.el = u.el;
      f.children !== u.children && h(_, f.children);
    }
  }, $ = (u, f, m, S) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      S
    ) : f.el = u.el;
  }, q = (u, f, m, S) => {
    [u.el, u.anchor] = B(
      u.children,
      f,
      m,
      S,
      u.el,
      u.anchor
    );
  }, Z = ({ el: u, anchor: f }, m, S) => {
    let _;
    for (; u && u !== f; )
      _ = w(u), r(u, m, S), u = _;
    r(f, m, S);
  }, F = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = w(u), s(u), u = m;
    s(f);
  }, ne = (u, f, m, S, _, T, O, R, I) => {
    if (f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), u == null)
      _e(
        f,
        m,
        S,
        _,
        T,
        O,
        R,
        I
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), Q(
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
  }, _e = (u, f, m, S, _, T, O, R) => {
    let I, y;
    const { props: z, shapeFlag: D, transition: j, dirs: G } = u;
    if (I = u.el = o(
      u.type,
      T,
      z && z.is,
      z
    ), D & 8 ? d(I, u.children) : D & 16 && xe(
      u.children,
      I,
      null,
      S,
      _,
      ts(u, T),
      O,
      R
    ), G && zt(u, null, S, "created"), me(I, u, u.scopeId, O, S), z) {
      for (const te in z)
        te !== "value" && !Dn(te) && i(I, te, null, z[te], T, S);
      "value" in z && i(I, "value", null, z.value, T), (y = z.onVnodeBeforeMount) && dt(y, S, u);
    }
    G && zt(u, null, S, "beforeMount");
    const X = uc(_, j);
    X && j.beforeEnter(I), r(I, f, m), ((y = z && z.onVnodeMounted) || X || G) && Ge(() => {
      y && dt(y, S, u), X && j.enter(I), G && zt(u, null, S, "mounted");
    }, _);
  }, me = (u, f, m, S, _) => {
    if (m && P(u, m), S)
      for (let T = 0; T < S.length; T++)
        P(u, S[T]);
    if (_) {
      let T = _.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const O = _.vnode;
        me(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, xe = (u, f, m, S, _, T, O, R, I = 0) => {
    for (let y = I; y < u.length; y++) {
      const z = u[y] = R ? St(u[y]) : mt(u[y]);
      M(
        null,
        z,
        f,
        m,
        S,
        _,
        T,
        O,
        R
      );
    }
  }, Q = (u, f, m, S, _, T, O) => {
    const R = f.el = u.el;
    let { patchFlag: I, dynamicChildren: y, dirs: z } = f;
    I |= u.patchFlag & 16;
    const D = u.props || ae, j = f.props || ae;
    let G;
    if (m && Wt(m, !1), (G = j.onVnodeBeforeUpdate) && dt(G, m, f, u), z && zt(f, u, m, "beforeUpdate"), m && Wt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (I = 0, O = !1, y = null), (D.innerHTML && j.innerHTML == null || D.textContent && j.textContent == null) && d(R, ""), y ? U(
      u.dynamicChildren,
      y,
      R,
      m,
      S,
      ts(f, _),
      T
    ) : O || se(
      u,
      f,
      R,
      null,
      m,
      S,
      ts(f, _),
      T,
      !1
    ), I > 0) {
      if (I & 16)
        g(R, D, j, m, _);
      else if (I & 2 && D.class !== j.class && i(R, "class", null, j.class, _), I & 4 && i(R, "style", D.style, j.style, _), I & 8) {
        const X = f.dynamicProps;
        for (let te = 0; te < X.length; te++) {
          const ee = X[te], pe = D[ee], be = j[ee];
          (be !== pe || ee === "value") && i(R, ee, pe, be, _, m);
        }
      }
      I & 1 && u.children !== f.children && d(R, f.children);
    } else !O && y == null && g(R, D, j, m, _);
    ((G = j.onVnodeUpdated) || z) && Ge(() => {
      G && dt(G, m, f, u), z && zt(f, u, m, "updated");
    }, S);
  }, U = (u, f, m, S, _, T, O) => {
    for (let R = 0; R < f.length; R++) {
      const I = u[R], y = f[R], z = (
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
        z,
        null,
        S,
        _,
        T,
        O,
        !0
      );
    }
  }, g = (u, f, m, S, _) => {
    if (f !== m) {
      if (f !== ae)
        for (const T in f)
          !Dn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            _,
            S
          );
      for (const T in m) {
        if (Dn(T)) continue;
        const O = m[T], R = f[T];
        O !== R && T !== "value" && i(u, T, R, O, _, S);
      }
      "value" in m && i(u, "value", f.value, m.value, _);
    }
  }, at = (u, f, m, S, _, T, O, R, I) => {
    const y = f.el = u ? u.el : l(""), z = f.anchor = u ? u.anchor : l("");
    let { patchFlag: D, dynamicChildren: j, slotScopeIds: G } = f;
    G && (R = R ? R.concat(G) : G), u == null ? (r(y, m, S), r(z, m, S), xe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      z,
      _,
      T,
      O,
      R,
      I
    )) : D > 0 && D & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (U(
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
    )) : se(
      u,
      f,
      m,
      z,
      _,
      T,
      O,
      R,
      I
    );
  }, ct = (u, f, m, S, _, T, O, R, I) => {
    f.slotScopeIds = R, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      m,
      S,
      O,
      I
    ) : tn(
      f,
      m,
      S,
      _,
      T,
      O,
      I
    ) : bt(u, f, I);
  }, tn = (u, f, m, S, _, T, O) => {
    const R = u.component = yc(
      u,
      S,
      _
    );
    if (ks(u) && (R.ctx.renderer = jt), Ec(R, !1, O), R.asyncDep) {
      if (_ && _.registerDep(R, Oe, O), !u.el) {
        const I = R.subTree = wt(It);
        $(null, I, f, m), u.placeholder = I.el;
      }
    } else
      Oe(
        R,
        u,
        f,
        m,
        _,
        T,
        O
      );
  }, bt = (u, f, m) => {
    const S = f.component = u.component;
    if (ec(u, f, m))
      if (S.asyncDep && !S.asyncResolved) {
        de(S, f, m);
        return;
      } else
        S.next = f, S.update();
    else
      f.el = u.el, S.vnode = f;
  }, Oe = (u, f, m, S, _, T, O) => {
    const R = () => {
      if (u.isMounted) {
        let { next: D, bu: j, u: G, parent: X, vnode: te } = u;
        {
          const Ve = rl(u);
          if (Ve) {
            D && (D.el = te.el, de(u, D, O)), Ve.asyncDep.then(() => {
              Ge(() => {
                u.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let ee = D, pe;
        Wt(u, !1), D ? (D.el = te.el, de(u, D, O)) : D = te, j && cr(j), (pe = D.props && D.props.onVnodeBeforeUpdate) && dt(pe, X, D, te), Wt(u, !0);
        const be = yi(u), Le = u.subTree;
        u.subTree = be, M(
          Le,
          be,
          // parent may have changed if it's in a teleport
          b(Le.el),
          // anchor may have changed if it's in a fragment
          nn(Le),
          u,
          _,
          T
        ), D.el = be.el, ee === null && tc(u, be.el), G && Ge(G, _), (pe = D.props && D.props.onVnodeUpdated) && Ge(
          () => dt(pe, X, D, te),
          _
        );
      } else {
        let D;
        const { el: j, props: G } = f, { bm: X, m: te, parent: ee, root: pe, type: be } = u, Le = Fn(f);
        Wt(u, !1), X && cr(X), !Le && (D = G && G.onVnodeBeforeMount) && dt(D, ee, f), Wt(u, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            be,
            u.parent ? u.parent.type : void 0
          );
          const Ve = u.subTree = yi(u);
          M(
            null,
            Ve,
            m,
            S,
            u,
            _,
            T
          ), f.el = Ve.el;
        }
        if (te && Ge(te, _), !Le && (D = G && G.onVnodeMounted)) {
          const Ve = f;
          Ge(
            () => dt(D, ee, Ve),
            _
          );
        }
        (f.shapeFlag & 256 || ee && Fn(ee.vnode) && ee.vnode.shapeFlag & 256) && u.a && Ge(u.a, _), u.isMounted = !0, f = m = S = null;
      }
    };
    u.scope.on();
    const I = u.effect = new mo(R);
    u.scope.off();
    const y = u.update = I.run.bind(I), z = u.job = I.runIfDirty.bind(I);
    z.i = u, z.id = u.uid, I.scheduler = () => Fs(z), Wt(u, !0), y();
  }, de = (u, f, m) => {
    f.component = u;
    const S = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, S, m), lc(u, f.children, m), Ct(), di(u), Ot();
  }, se = (u, f, m, S, _, T, O, R, I = !1) => {
    const y = u && u.children, z = u ? u.shapeFlag : 0, D = f.children, { patchFlag: j, shapeFlag: G } = f;
    if (j > 0) {
      if (j & 128) {
        kt(
          y,
          D,
          m,
          S,
          _,
          T,
          O,
          R,
          I
        );
        return;
      } else if (j & 256) {
        nt(
          y,
          D,
          m,
          S,
          _,
          T,
          O,
          R,
          I
        );
        return;
      }
    }
    G & 8 ? (z & 16 && Ht(y, _, T), D !== y && d(m, D)) : z & 16 ? G & 16 ? kt(
      y,
      D,
      m,
      S,
      _,
      T,
      O,
      R,
      I
    ) : Ht(y, _, T, !0) : (z & 8 && d(m, ""), G & 16 && xe(
      D,
      m,
      S,
      _,
      T,
      O,
      R,
      I
    ));
  }, nt = (u, f, m, S, _, T, O, R, I) => {
    u = u || pn, f = f || pn;
    const y = u.length, z = f.length, D = Math.min(y, z);
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
    y > z ? Ht(
      u,
      _,
      T,
      !0,
      !1,
      D
    ) : xe(
      f,
      m,
      S,
      _,
      T,
      O,
      R,
      I,
      D
    );
  }, kt = (u, f, m, S, _, T, O, R, I) => {
    let y = 0;
    const z = f.length;
    let D = u.length - 1, j = z - 1;
    for (; y <= D && y <= j; ) {
      const G = u[y], X = f[y] = I ? St(f[y]) : mt(f[y]);
      if (xn(G, X))
        M(
          G,
          X,
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
      const G = u[D], X = f[j] = I ? St(f[j]) : mt(f[j]);
      if (xn(G, X))
        M(
          G,
          X,
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
        const G = j + 1, X = G < z ? f[G].el : S;
        for (; y <= j; )
          M(
            null,
            f[y] = I ? St(f[y]) : mt(f[y]),
            m,
            X,
            _,
            T,
            O,
            R,
            I
          ), y++;
      }
    } else if (y > j)
      for (; y <= D; )
        Ze(u[y], _, T, !0), y++;
    else {
      const G = y, X = y, te = /* @__PURE__ */ new Map();
      for (y = X; y <= j; y++) {
        const we = f[y] = I ? St(f[y]) : mt(f[y]);
        we.key != null && te.set(we.key, y);
      }
      let ee, pe = 0;
      const be = j - X + 1;
      let Le = !1, Ve = 0;
      const Qe = new Array(be);
      for (y = 0; y < be; y++) Qe[y] = 0;
      for (y = G; y <= D; y++) {
        const we = u[y];
        if (pe >= be) {
          Ze(we, _, T, !0);
          continue;
        }
        let Ye;
        if (we.key != null)
          Ye = te.get(we.key);
        else
          for (ee = X; ee <= j; ee++)
            if (Qe[ee - X] === 0 && xn(we, f[ee])) {
              Ye = ee;
              break;
            }
        Ye === void 0 ? Ze(we, _, T, !0) : (Qe[Ye - X] = y + 1, Ye >= Ve ? Ve = Ye : Le = !0, M(
          we,
          f[Ye],
          m,
          null,
          _,
          T,
          O,
          R,
          I
        ), pe++);
      }
      const $t = Le ? fc(Qe) : pn;
      for (ee = $t.length - 1, y = be - 1; y >= 0; y--) {
        const we = X + y, Ye = f[we], Tn = f[we + 1], En = we + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : S;
        Qe[y] === 0 ? M(
          null,
          Ye,
          m,
          En,
          _,
          T,
          O,
          R,
          I
        ) : Le && (ee < 0 || y !== $t[ee] ? yt(Ye, m, En, 2) : ee--);
      }
    }
  }, yt = (u, f, m, S, _ = null) => {
    const { el: T, type: O, transition: R, children: I, shapeFlag: y } = u;
    if (y & 6) {
      yt(u.component.subTree, f, m, S);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, S);
      return;
    }
    if (y & 64) {
      O.move(u, f, m, jt);
      return;
    }
    if (O === he) {
      r(T, f, m);
      for (let D = 0; D < I.length; D++)
        yt(I[D], f, m, S);
      r(u.anchor, f, m);
      return;
    }
    if (O === ns) {
      Z(u, f, m);
      return;
    }
    if (S !== 2 && y & 1 && R)
      if (S === 0)
        R.persisted && !T[Qr] ? r(T, f, m) : (R.beforeEnter(T), r(T, f, m), Ge(() => R.enter(T), _));
      else {
        const { leave: D, delayLeave: j, afterLeave: G } = R, X = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, te = () => {
          const ee = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), R.persisted && !ee ? X() : D(T, () => {
            X(), G && G();
          });
        };
        j ? j(T, X, te) : te();
      }
    else
      r(T, f, m);
  }, Ze = (u, f, m, S = !1, _ = !1) => {
    const {
      type: T,
      props: O,
      ref: R,
      children: I,
      dynamicChildren: y,
      shapeFlag: z,
      patchFlag: D,
      dirs: j,
      cacheIndex: G,
      memo: X
    } = u;
    if (D === -2 && (_ = !1), R != null && (Ct(), Ln(R, null, m, u, !0), Ot()), G != null && (f.renderCache[G] = void 0), z & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const te = z & 1 && j, ee = !Fn(u);
    let pe;
    if (ee && (pe = O && O.onVnodeBeforeUnmount) && dt(pe, f, u), z & 6)
      Lr(u.component, m, S);
    else {
      if (z & 128) {
        u.suspense.unmount(m, S);
        return;
      }
      te && zt(u, null, f, "beforeUnmount"), z & 64 ? u.type.remove(
        u,
        f,
        m,
        jt,
        S
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== he || D > 0 && D & 64) ? Ht(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === he && D & 384 || !_ && z & 16) && Ht(I, f, m), S && Kn(u);
    }
    const be = X != null && G == null;
    (ee && (pe = O && O.onVnodeUnmounted) || te || be) && Ge(() => {
      pe && dt(pe, f, u), te && zt(u, null, f, "unmounted"), be && (u.el = null);
    }, m);
  }, Kn = (u) => {
    const { type: f, el: m, anchor: S, transition: _ } = u;
    if (f === he) {
      ce(m, S);
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
      m = w(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: S, scope: _, job: T, subTree: O, um: R, m: I, a: y } = u;
    Si(I), Si(y), S && cr(S), _.stop(), T && (T.flags |= 8, Ze(O, u, f, m)), R && Ge(R, f), Ge(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ht = (u, f, m, S = !1, _ = !1, T = 0) => {
    for (let O = T; O < u.length; O++)
      Ze(u[O], f, m, S, _);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = w(u.anchor || u.el), m = f && f[wa];
    return m ? w(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let S;
    u == null ? f._vnode && (Ze(f._vnode, null, null, !0), S = f._vnode.component) : M(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(S), Mo(), yn = !1);
  }, jt = {
    p: M,
    um: Ze,
    m: yt,
    r: Kn,
    mt: tn,
    mc: xe,
    pc: se,
    pbc: U,
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
  if (K(r) && K(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = St(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Nr && (l.patchFlag === -1 && (l = s[i] = St(l)), l.el = o.el), l.type === It && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Zt = [];
let Je = null;
function V(e = !1) {
  Zt.push(Je = e ? null : []);
}
function ol() {
  Zt.pop(), Je = Zt[Zt.length - 1] || null;
}
let $n = 1;
function vi(e, t = !1) {
  $n += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? Je || pn : null, ol(), $n > 0 && Je && Je.push(e), e;
}
function W(e, t, n, r, s, i) {
  return ll(
    v(
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
    wt(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || /* @__PURE__ */ $e(e) || J(e) ? { i: tt, r: e, k: t, f: !!n } : e : null);
function v(e, t = null, n = null, r = 0, s = null, i = e === he ? 0 : 1, o = !1, l = !1) {
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
    ctx: tt
  };
  return l ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ye(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Je.push(c), c;
}
const wt = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = It), al(e)) {
    const l = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(l, n), $n > 0 && !i && Je && (l.shapeFlag & 6 ? Je[Je.indexOf(e)] = l : Je.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !ye(l) && (t.class = Rs(l)), le(c) && (/* @__PURE__ */ Ls(c) && !K(c) && (c = Me({}, c)), t.style = Os(c));
  }
  const o = ye(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : le(e) ? 4 : J(e) ? 2 : 0;
  return v(
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Me({}, e) : e : null;
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
function Ee(e = " ", t = 0) {
  return wt(Nr, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (V(), pc(It, null, e)) : wt(It, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? wt(It) : K(e) ? wt(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? St(e) : wt(Nr, null, String(e));
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
      !s && !Xo(t) ? t._ctx = tt : s === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (J(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: tt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Ee(t)]) : n = 8;
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
        o && i !== o && !(K(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !vr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function dt(e, t, n, r = null) {
  lt(e, t, 7, [
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
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
let je = null;
const Tc = () => je || tt;
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
    (n) => je = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Gn = (e) => {
  const t = je;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, Ai = () => {
  je && je.scope.off(), yr(null);
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
    Ct();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Gn(e), o = Bn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (Ot(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
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
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Io(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || gt);
  {
    const s = Gn(e);
    Ct();
    try {
      Va(e);
    } finally {
      Ot(), s();
    }
  }
}
const vc = {
  get(e, t) {
    return Ne(e, "get", ""), e[t];
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
  return J(e) && "__vccOpts" in e;
}
const Pe = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", Et = typeof document < "u" ? document : null, Ci = Et && /* @__PURE__ */ Et.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Et.createElementNS(Cc, e) : t === "mathml" ? Et.createElementNS(Oc, e) : n ? Et.createElement(e, { is: n }) : Et.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Et.createTextNode(e),
  createComment: (e) => Et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Et.querySelector(e),
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
const Oi = /* @__PURE__ */ Symbol("_vod"), Dc = /* @__PURE__ */ Symbol("_vsh"), Nc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = ye(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ye(t))
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
        !ye(t) && t ? t[o] : void 0,
        l
      ) || In(r, o, l) : In(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Nc];
      o && (n += ";" + o), r.cssText = n, i = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Dc] && (r.display = "none"));
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
      en(r),
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
  let r = st(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ye(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : _t(n) ? String(n) : n
  );
}
function Di(e, t, n, r, s) {
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
function Yt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function kc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ni = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, r, s = null) {
  const i = e[Ni] || (e[Ni] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Vc(t);
    if (r) {
      const h = i[t] = Bc(
        r,
        s
      );
      Yt(e, l, h, c);
    } else o && (kc(e, l, o, c), i[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, $c = /^on:?(?:Once|Passive|Capture)$/;
function Vc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !$c.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : en(e.slice(2)), t];
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
        h && lt(
          h,
          t,
          5,
          l
        );
      }
    } else
      lt(
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
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? vr(t) || Hc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, o)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ye(r))) ? Di(e, st(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Kc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && ye(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = st(t);
  return Array.isArray(n) ? n.some((s) => st(s) === r) : Object.keys(n).some((s) => st(s) === r);
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
const qt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function is(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[qt] = Tr(s);
    const i = r || s.props && s.props.type === "number";
    Yt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[qt](is(e.value, n, i));
    }), (n || i) && Yt(e, "change", () => {
      e.value = is(e.value, n, i);
    }), t || (Yt(e, "compositionstart", qc), Yt(e, "compositionend", Li), Yt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[lr];
    delete e[lr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[qt](is(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[qt] = Tr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Yt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Qt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? K(o) ? s.slice() : s : o
      ];
      try {
        e[qt](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[qt] = Tr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[qt] = Tr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || K(e)) return Ft(e, t);
  if (Qt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = K(t);
  if (!(n && !r && !Qt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Bl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Ft(Er(o), t)) {
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
const Jc = /* @__PURE__ */ Me({ patchProp: Gc }, Rc);
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
    !J(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return ye(e) ? document.querySelector(e) : e;
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
let Ae = Object.freeze, Ce = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, vs = hl.apply, As = hl.construct;
Ae || (Ae = function(t) {
  return t;
});
Ce || (Ce = function(t) {
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
const Kt = ve(Array.prototype.forEach), fu = ve(Array.prototype.lastIndexOf), $i = ve(Array.prototype.pop), wn = ve(Array.prototype.push), du = ve(Array.prototype.splice), gn = Array.isArray, Pn = ve(String.prototype.toLowerCase), os = ve(String.prototype.toString), Vi = ve(String.prototype.match), Cn = ve(String.prototype.replace), zi = ve(String.prototype.indexOf), pu = ve(String.prototype.trim), hu = ve(Number.prototype.toString), mu = ve(Boolean.prototype.toString), Wi = typeof BigInt > "u" ? null : ve(BigInt.prototype.toString), Bi = typeof Symbol > "u" ? null : ve(Symbol.prototype.toString), Ke = ve(Object.prototype.hasOwnProperty), On = ve(Object.prototype.toString), De = ve(RegExp.prototype.test), Bt = gu(TypeError);
function ve(e) {
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
function re(e, t) {
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
    Ke(e, t) || (e[t] = null);
  return e;
}
function Xe(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    Ke(e, s) && (gn(i) ? t[s] = _u(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = Xe(i) : t[s] = i);
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
      const t = e, n = rt(t, "toString");
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
function rt(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return ve(r.get);
      if (typeof r.value == "function")
        return ve(r.value);
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
    return De(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gi = Ae(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Ae(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Ae(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Ae(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Ae(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Ae(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ki = Ae(["#text"]), Yi = Ae(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Ae(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Ae(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Ae(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ce(/{{[\w\W]*|^[\w\W]*}}/g), vu = Ce(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ce(/\${[\w\W]*/g), xu = Ce(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ce(/^aria-[\-\w]+$/), Xi = Ce(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ce(/^(?:\w+script|data):/i), Ou = Ce(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ce(/^html$/i), Iu = Ce(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ce(/<[/\w!]/g), Zi = Ce(/<[/\w]/g), Pu = Ce(/<\/no(script|embed|frames)/i), Du = Ce(/\/>/i), qe = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = Ae(re({}, ml)), Mu = (function() {
  const e = {};
  return Kt(ml, (t) => {
    e[t] = Ce(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ae(e);
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
}, Nt = function(t, n, r, s) {
  return Ke(t, n) && gn(t[n]) ? re(s.base ? Xe(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = Ke(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? Xe(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (A) => gl(A);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== qe.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, b = e.trustedTypes, w = l.prototype, P = rt(w, "cloneNode"), B = rt(w, "remove"), M = rt(w, "nextSibling"), N = rt(w, "childNodes"), $ = rt(w, "parentNode"), q = rt(w, "shadowRoot"), Z = rt(w, "attributes"), F = o && o.prototype ? rt(o.prototype, "nodeType") : null, ne = o && o.prototype ? rt(o.prototype, "nodeName") : null, _e = o && o.prototype ? rt(o.prototype, "ownerDocument") : null, me = function(a) {
    return F ? F(a) : a.nodeType;
  }, xe = function(a) {
    return ne ? ne(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const A = n.createElement("template");
    A.content && A.content.ownerDocument && (n = A.content.ownerDocument);
  }
  let Q, U = "", g, at = !1, ct = 0;
  const tn = function() {
    if (ct > 0)
      throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, bt = function(a) {
    tn(), ct++;
    try {
      return Q.createHTML(a);
    } finally {
      ct--;
    }
  }, Oe = function(a) {
    tn(), ct++;
    try {
      return Q.createScriptURL(a);
    } finally {
      ct--;
    }
  }, de = function() {
    return at || (g = Fu(b, s), at = !0), g;
  }, se = n, nt = se.implementation, kt = se.createNodeIterator, yt = se.createDocumentFragment, Ze = se.getElementsByTagName, Kn = r.importNode;
  let ce = Qi();
  t.isSupported = typeof pl == "function" && typeof $ == "function" && nt && nt.createHTMLDocument !== void 0;
  const Lr = Su, Ht = vu, nn = Au, yn = xu, Yn = wu, jt = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const S = re({}, [...Gi, ...ls, ...as, ...cs, ...Ki]);
  let _ = null;
  const T = re({}, [...Yi, ...us, ...qi, ...ar]);
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
  let z = !0, D = !0, j = !1, G = !0, X = !1, te = !0, ee = !1, pe = !1, be = null, Le = null, Ve = !1, Qe = !1, $t = !1, we = !1, Ye = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, kr = !1, rn = {}, sn = null;
  const $s = re({}, [
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
  const zs = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ws = null;
  const Bs = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let on = ut, Hr = !1, jr = null;
  const bl = re({}, [qn, Xn, ut], os), Gs = Ae(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = re({}, Gs);
  const Ks = Ae(["annotation-xml"]);
  let Vr = re({}, Ks);
  const yl = re({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let Te = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = Xe(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, Te = Sn === "application/xhtml+xml" ? os : Pn, m = Nt(a, "ALLOWED_TAGS", S, {
      transform: Te
    }), _ = Nt(a, "ALLOWED_ATTR", T, {
      transform: Te
    }), jr = Nt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Ws = Nt(a, "ADD_URI_SAFE_ATTR", Bs, {
      transform: Te,
      base: Bs
    }), Vs = Nt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: Te,
      base: zs
    }), sn = Nt(a, "FORBID_CONTENTS", $s, {
      transform: Te
    }), R = Nt(a, "FORBID_TAGS", Xe({}), {
      transform: Te
    }), I = Nt(a, "FORBID_ATTR", Xe({}), {
      transform: Te
    }), rn = Ke(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? Xe(a.USE_PROFILES) : a.USE_PROFILES : !1, z = a.ALLOW_ARIA_ATTR !== !1, D = a.ALLOW_DATA_ATTR !== !1, j = a.ALLOW_UNKNOWN_PROTOCOLS || !1, G = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = a.SAFE_FOR_TEMPLATES || !1, te = a.SAFE_FOR_XML !== !1, ee = a.WHOLE_DOCUMENT || !1, Qe = a.RETURN_DOM || !1, $t = a.RETURN_DOM_FRAGMENT || !1, we = a.RETURN_TRUSTED_TYPE || !1, Ve = a.FORCE_BODY || !1, Ye = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, kr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : ut, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => re({}, Gs)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => re({}, Ks)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (O = dn(null), Ke(p, "tagNameCheck") && Ys(p.tagNameCheck) && (O.tagNameCheck = p.tagNameCheck), Ke(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (O.attributeNameCheck = p.attributeNameCheck), Ke(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ce(O), X && (D = !1), $t && (Qe = !0), rn && (m = re({}, Ki), _ = dn(null), rn.html === !0 && (re(m, Gi), re(_, Yi)), rn.svg === !0 && (re(m, ls), re(_, us), re(_, ar)), rn.svgFilters === !0 && (re(m, as), re(_, us), re(_, ar)), rn.mathMl === !0 && (re(m, cs), re(_, qi), re(_, ar))), y.tagCheck = null, y.attributeCheck = null, Ke(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === S && (m = Xe(m)), re(m, a.ADD_TAGS, Te))), Ke(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (_ === T && (_ = Xe(_)), re(_, a.ADD_ATTR, Te))), Ke(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = Xe(sn)), re(sn, a.ADD_FORBID_CONTENTS, Te)), Ur && (m["#text"] = !0), ee && re(m, ["html", "head", "body"]), m.table && (re(m, ["tbody"]), delete R.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = Q;
      Q = a.TRUSTED_TYPES_POLICY;
      try {
        U = bt("");
      } catch (L) {
        throw Q = E, L;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (Q = void 0, U = "") : (Q === void 0 && (Q = de()), Q && typeof U == "string" && (U = bt("")));
    Ae && Ae(a), ln = a;
  }, qs = re({}, [...ls, ...as, ...Tu]), Xs = re({}, [...cs, ...Eu]), vl = function(a, p, E) {
    return p.namespaceURI === ut ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, Al = function(a, p, E) {
    return p.namespaceURI === ut ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = $(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = Pn(a.tagName), L = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? vl(E, p, L) : a.namespaceURI === qn ? Al(E, p, L) : a.namespaceURI === ut ? xl(E, p, L) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Dt = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      $(a).removeChild(a);
    } catch {
      if (B(a), !$(a))
        throw Bt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
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
      Kt(p, (H) => {
        wn(L, H);
      }), Kt(L, (H) => {
        try {
          B(H);
        } catch {
        }
      });
    }
    const E = Z(a);
    if (E)
      for (let L = E.length - 1; L >= 0; --L) {
        const H = E[L], Y = H && H.name;
        typeof Y == "string" && Js(a, H, Y);
      }
  }, Vt = function(a, p, E) {
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
      if (Qe || $t)
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
    const p = Z(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const L = p[E], H = L && L.name;
        typeof H != "string" || _[Te(H)] || Js(a, L, H);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      me(E) === qe.element && Cl(E);
      const H = N(E);
      if (H)
        for (let Y = H.length - 1; Y >= 0; --Y)
          p.push(H[Y]);
    }
  }, Zs = function(a, p) {
    return te ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!te)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), L = me(E);
      if (L === qe.processingInstruction || L === qe.comment && De(Zi, E.data)) {
        try {
          B(E);
        } catch {
        }
        continue;
      }
      if (L === qe.element) {
        const Y = E, ue = Te(xe(E));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && Zs("for", ue) && Y.removeAttribute("for");
        } catch {
        }
      }
      const H = N(E);
      if (H)
        for (let Y = H.length - 1; Y >= 0; --Y)
          p.push(H[Y]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (Ve)
      a = "<remove></remove>" + a;
    else {
      const Y = Vi(a, /^[\r\n\t ]+/);
      E = Y && Y[0];
    }
    Sn === "application/xhtml+xml" && on === ut && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const L = Q ? bt(a) : a;
    if (on === ut)
      try {
        p = new d().parseFromString(L, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = nt.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = Hr ? U : L;
      } catch {
      }
    }
    const H = p.body || p.documentElement;
    return a && E && H.insertBefore(n.createTextNode(E), H.childNodes[0] || null), on === ut ? Ze.call(p, ee ? "html" : "body")[0] : ee ? p.documentElement : H;
  }, ei = function(a) {
    const p = _e ? _e(a) : a.ownerDocument;
    return kt.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, Ht, " "), a = Cn(a, nn, " "), a;
  }, Wr = function(a) {
    var p;
    a.normalize();
    const E = _e ? _e(a) : a.ownerDocument, L = kt.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = L.nextNode();
    for (; H; )
      H.data = Qn(H.data), H = L.nextNode();
    const Y = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    Y && Kt(Y, (ue) => {
      an(ue.content) && Wr(ue.content);
    });
  }, er = function(a) {
    const p = ne ? ne(a) : null;
    return typeof p != "string" || Te(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== Z(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
      return F(a) === qe.documentFragment;
    } catch {
      return !1;
    }
  }, vn = function(a) {
    if (!F || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof F(a) == "number";
    } catch {
      return !1;
    }
  };
  function ft(A, a, p) {
    A.length !== 0 && Kt(A, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(te && a.hasChildNodes() && !vn(a.firstElementChild) && De(Ji, a.textContent) && De(Ji, a.innerHTML) || te && a.namespaceURI === ut && Nu[p] && (vn(a.firstElementChild) || typeof a.textContent == "string" && De(Mu[p], a.textContent)) || a.nodeType === qe.processingInstruction || te && a.nodeType === qe.comment && De(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return De(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, L = new Array(E > 2 ? E - 2 : 0), H = 2; H < E; H++)
        L[H - 2] = arguments[H];
      return !!a(p, ...L);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!R[p] && ii(p) && tr(O.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const L = $(a), H = N(a);
      if (H && L) {
        const Y = H.length;
        for (let ue = Y - 1; ue >= 0; --ue) {
          const ge = a === E ? P(H[ue], !0) : H[ue];
          L.insertBefore(ge, M(a));
        }
      }
    }
    return Dt(a), !0;
  }, ti = function(a, p, E, L) {
    return a.length === 0 ? p : p === E || p === L ? Xe(p) : p;
  }, ni = function(a, p) {
    return a === p || $(a) !== null ? !1 : (kr && Zn(a), !0);
  }, ri = function(a, p) {
    if (ft(ce.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return Dt(a), !0;
    const E = Te(xe(a));
    if (m = ti(ce.uponSanitizeElement, m, S, be), ft(ce.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Dt(a), !0;
    if (R[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const H = Il(a, E, p);
      return H === !1 && ft(ce.afterSanitizeElements, a, null), H;
    }
    if (me(a) === qe.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && De(Pu, a.innerHTML))
      return Dt(a), !0;
    if (X && a.nodeType === qe.text) {
      const H = Qn(a.textContent);
      a.textContent !== H && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = H);
    }
    return ft(ce.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (I[p] || Zs(p, a) || Ye && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const L = _[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return D && De(yn, p) || z && De(Yn, p) ? !0 : L ? Ws[p] || De(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || j && !De(jt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(O.tagNameCheck, a) && tr(O.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && O.allowCustomizedBuiltInElements && tr(O.tagNameCheck, E)
    );
  }, Pl = re({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && De(u, a);
  }, Dl = function(a, p, E, L) {
    if (Q && typeof b == "object" && typeof b.getAttributeType == "function" && !E)
      switch (b.getAttributeType(a, p)) {
        case "TrustedHTML":
          return bt(L);
        case "TrustedScriptURL":
          return Oe(L);
      }
    return L;
  }, Nl = function(a, p, E, L) {
    try {
      E ? a.setAttributeNS(E, p, L) : a.setAttribute(p, L), er(a) ? Dt(a) : $i(t.removed);
    } catch {
      Vt(p, a);
    }
  }, oi = function(a) {
    ft(ce.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    _ = ti(ce.uponSanitizeAttribute, _, T, Le);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let L = p.length;
    const H = Te(a.nodeName);
    for (; L--; ) {
      const Y = p[L], ue = Y.name, ge = Y.namespaceURI, ze = Y.value, We = Te(ue), Gr = ze;
      let Fe = ue === "value" ? Gr : pu(Gr);
      if (E.attrName = We, E.attrValue = Fe, E.keepAttr = !0, E.forceKeepAttr = void 0, ft(ce.uponSanitizeAttribute, a, E), Fe = E.attrValue, Tn && (We === "id" || We === "name") && zi(Fe, En) !== 0 && (Vt(ue, a, Y), Fe = En + Fe), te && De(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Fe)) {
        Vt(ue, a, Y);
        continue;
      }
      if (We === "attributename" && Vi(Fe, "href")) {
        Vt(ue, a, Y);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          Vt(ue, a, Y);
          continue;
        }
        if (!G && De(Du, Fe)) {
          Vt(ue, a, Y);
          continue;
        }
        if (X && (Fe = Qn(Fe)), !si(H, We, Fe)) {
          Vt(ue, a, Y);
          continue;
        }
        Fe = Dl(H, We, ge, Fe), Fe !== Gr && Nl(a, ue, ge, Fe);
      }
    }
    ft(ce.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (ft(ce.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (ft(ce.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), me(p) === qe.element) {
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
      const L = E.node, Y = me(L) === qe.element, ue = N(L);
      if (ue)
        for (let ge = ue.length - 1; ge >= 0; --ge)
          p.push({
            node: ue[ge],
            shadow: null
          });
      if (Y) {
        const ge = ne ? ne(L) : null;
        if (typeof ge == "string" && Te(ge) === "template") {
          const ze = L.content;
          an(ze) && p.push({
            node: ze,
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
  return t.sanitize = function(A) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, L = null, H = null;
    if (Hr = !A, Hr && (A = "<!-->"), typeof A != "string" && !vn(A) && (A = bu(A), typeof A != "string"))
      throw Bt("dirty is not a string, aborting");
    if (!t.isSupported)
      return A;
    pe ? (m = be, _ = Le) : zr(a), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (m = Xe(m)), ce.uponSanitizeAttribute.length > 0 && (_ = Xe(_)), t.removed = [];
    const Y = kr && typeof A != "string" && vn(A);
    if (Y) {
      Ol(A);
      const ze = xe(A);
      if (typeof ze == "string") {
        const We = Te(ze);
        if (!m[We] || R[We])
          throw Jn(A), Bt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(A))
        throw Jn(A), Bt("root node is clobbered and cannot be sanitized in-place");
      try {
        Br(A);
      } catch (We) {
        throw Jn(A), We;
      }
    } else if (vn(A))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(A, !0), E.nodeType === qe.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Br(E);
    else {
      if (!Qe && !X && !ee && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return Q && we ? bt(A) : A;
      if (p = Qs(A), !p)
        return Qe ? null : we ? U : "";
    }
    p && Ve && Dt(p.firstChild);
    const ue = Y ? A : p;
    try {
      const ze = ei(ue);
      for (; L = ze.nextNode(); )
        ri(L, ue), oi(L), an(L.content) && nr(L.content);
    } catch (ze) {
      throw Y && (Jn(A), Kt(t.removed, (We) => {
        We.element && Zn(We.element);
      })), ze;
    }
    if (Y)
      return Kt(t.removed, (ze) => {
        ze.element && Zn(ze.element);
      }), X && Wr(A), A;
    if (Qe) {
      if (X && Wr(p), $t)
        for (H = yt.call(p.ownerDocument); p.firstChild; )
          H.appendChild(p.firstChild);
      else
        H = p;
      return (_.shadowroot || _.shadowrootmode) && (H = Kn.call(r, H, !0)), H;
    }
    let ge = ee ? p.outerHTML : p.innerHTML;
    return ee && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && De(Ru, p.ownerDocument.doctype.name) && (ge = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + ge), X && (ge = Qn(ge)), Q && we ? bt(ge) : ge;
  }, t.setConfig = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(A), pe = !0, be = m, Le = _;
  }, t.clearConfig = function() {
    ln = null, pe = !1, be = null, Le = null, Q = g, U = "";
  }, t.isValidAttribute = function(A, a, p) {
    ln || zr({});
    const E = Te(A), L = Te(a);
    return si(E, L, p);
  }, t.addHook = function(A, a) {
    typeof a == "function" && Ke(ce, A) && wn(ce[A], a);
  }, t.removeHook = function(A, a) {
    if (Ke(ce, A)) {
      if (a !== void 0) {
        const p = fu(ce[A], a);
        return p === -1 ? void 0 : du(ce[A], p, 1)[0];
      }
      return $i(ce[A]);
    }
  }, t.removeHooks = function(A) {
    Ke(ce, A) && (ce[A] = []);
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
function x(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (M) => M, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, b = (M) => typeof M == "string" || typeof M == "number", w = (M, N, $) => M.replace(/%n/g, "" + $).replace(/{([^{}]*)}/g, (q, Z) => {
    if (N === void 0 || !(Z in N))
      return d(q);
    const F = N[Z];
    return b(F) ? d(`${F}`) : typeof F == "object" && b(F.value) ? (F.escape !== !1 ? to : c)(`${F.value}`) : d(q);
  });
  let B = (s?.bundle ?? $u(e)).translations[t] || t;
  return B = Array.isArray(B) ? B[0] : B, h(typeof i == "object" || o !== void 0 ? w(
    B,
    i,
    o
  ) : B);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Wu = { id: "library-catalogue-heading" }, Bu = { class: "library-muted" }, Gu = ["aria-label"], Ku = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "" }, cf = ["value"], uf = { value: "" }, ff = ["value"], df = { value: "" }, pf = ["value"], hf = { value: "" }, mf = { value: "1" }, gf = { value: "title" }, _f = { value: "recent" }, bf = { value: "publicationDate" }, yf = { value: "publication" }, Tf = { value: "lastOpened" }, Ef = { value: "format" }, Sf = ["value"], vf = ["value"], Af = ["aria-label"], xf = ["aria-label"], wf = ["aria-label"], Cf = ["href", "aria-label"], Of = ["aria-label"], Rf = ["href"], If = {
  key: 1,
  class: "library-muted"
}, Pf = ["href"], Df = {
  key: 3,
  class: "library-muted"
}, Nf = {
  key: 1,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Mf = { id: "library-periodical-groups-heading" }, Lf = { class: "library-muted" }, Ff = ["href"], Uf = { class: "library-muted" }, kf = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Hf = { id: "library-periodical-groups-empty-heading" }, jf = { class: "library-muted" }, $f = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Vf = { class: "library-muted" }, zf = {
  key: 4,
  class: "library-cover-gallery"
}, Wf = ["href", "aria-label"], Bf = ["src", "alt"], Gf = { class: "library-cover-summary" }, Kf = { class: "library-cover-primary" }, Yf = ["aria-label"], qf = ["href"], Xf = { class: "library-cover-details" }, Jf = ["aria-label"], Zf = { class: "library-cover-meta" }, Qf = {
  key: 0,
  class: "library-creator"
}, ed = { class: "library-muted" }, td = { key: 0 }, nd = { key: 1 }, rd = { key: 2 }, sd = { key: 3 }, id = { key: 4 }, od = { key: 5 }, ld = { key: 6 }, ad = { key: 7 }, cd = {
  key: 1,
  class: "library-muted library-cover-description"
}, ud = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, fd = { key: 0 }, dd = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, pd = {
  key: 0,
  class: "library-muted"
}, hd = { class: "library-cover-actions" }, md = ["href"], gd = ["href"], _d = ["href"], bd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, yd = { class: "library-hero-actions" }, Td = ["href"], Ed = ["href"], Sd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Pe(() => t.state.items || []), i = Pe(() => t.state.shelves || []), o = Pe(() => t.state.formats || []), l = Pe(() => t.state.publications || []), c = Pe(() => t.state.publicationSummaries || []), h = Pe(() => t.state.publicationYears || []), d = Pe(() => t.state.creators || []), b = Pe(() => t.state.scanStatuses || []), w = Pe(() => t.state.workflowStatuses || []), P = Pe(() => t.state.genres || []), B = Pe(() => t.state.classifications || []), M = Pe(() => t.state.cataloguePagination || {
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
      starred: t.state.activeFilters?.starred || "",
      sort: t.state.activeFilters?.sort || "title"
    }), $ = Pe(() => t.state.settingsUrl || ""), q = Pe(() => t.state.metadataExportUrl || ""), Z = {
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
      starred: "Starred"
    }, F = Pe(() => Object.entries(Z).map(([Q, U]) => ({ key: Q, label: U, value: N[Q] || "" })).filter((Q) => String(Q.value).trim() !== ""));
    function ne(Q) {
      const U = new URLSearchParams(window.location.search);
      U.delete(Q), U.delete("page");
      const g = U.toString();
      return g ? `?${g}` : "?";
    }
    function _e(Q) {
      return String(Q || "").toUpperCase();
    }
    function me(Q) {
      return Q.nextcloudTags || [];
    }
    function xe(Q) {
      const U = new URLSearchParams(window.location.search);
      return U.set("publication", Q), U.set("sort", "publication"), U.delete("page"), `?${U.toString()}`;
    }
    return (Q, U) => (V(), W("div", Vu, [
      v("section", zu, [
        v("h2", Wu, C(k(x)("library", "Publication catalogue")), 1),
        v("p", Bu, C(k(x)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        v("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": k(x)("library", "Catalogue search and filters")
        }, [
          v("label", null, [
            Ee(C(k(x)("library", "Search title / author")) + " ", 1),
            Be(v("input", {
              "onUpdate:modelValue": U[0] || (U[0] = (g) => N.q = g),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, N.q]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Type")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[1] || (U[1] = (g) => N.type = g),
              name: "type"
            }, [
              v("option", Ku, C(k(x)("library", "All types")), 1),
              (V(), W(he, null, Ue(n, (g) => v("option", {
                key: g,
                value: g
              }, C(g), 9, Yu)), 64))
            ], 512), [
              [et, N.type]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Series / periodical")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[2] || (U[2] = (g) => N.publication = g),
              name: "publication"
            }, [
              v("option", qu, C(k(x)("library", "All series and periodicals")), 1),
              (V(!0), W(he, null, Ue(l.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, Xu))), 128))
            ], 512), [
              [et, N.publication]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Publication year")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[3] || (U[3] = (g) => N.year = g),
              name: "year"
            }, [
              v("option", Ju, C(k(x)("library", "All years")), 1),
              (V(!0), W(he, null, Ue(h.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, Zu))), 128))
            ], 512), [
              [et, N.year]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Creator")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[4] || (U[4] = (g) => N.creator = g),
              name: "creator",
              title: "Exact full-field creator matches only"
            }, [
              v("option", Qu, C(k(x)("library", "All creators")), 1),
              (V(!0), W(he, null, Ue(d.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, ef))), 128))
            ], 512), [
              [et, N.creator]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Nextcloud tag")) + " ", 1),
            Be(v("input", {
              "onUpdate:modelValue": U[5] || (U[5] = (g) => N.tag = g),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, N.tag]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Format")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[6] || (U[6] = (g) => N.format = g),
              name: "format"
            }, [
              v("option", tf, C(k(x)("library", "All formats")), 1),
              (V(!0), W(he, null, Ue(o.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(_e(g)), 9, nf))), 128))
            ], 512), [
              [et, N.format]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Shelf")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[7] || (U[7] = (g) => N.shelf = g),
              name: "shelf"
            }, [
              v("option", rf, C(k(x)("library", "All shelves")), 1),
              (V(!0), W(he, null, Ue(i.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, sf))), 128))
            ], 512), [
              [et, N.shelf]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Scan status")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[8] || (U[8] = (g) => N.status = g),
              name: "status"
            }, [
              v("option", of, C(k(x)("library", "All scan statuses")), 1),
              (V(!0), W(he, null, Ue(b.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, lf))), 128))
            ], 512), [
              [et, N.status]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Workflow status")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[9] || (U[9] = (g) => N.workflowStatus = g),
              name: "workflowStatus"
            }, [
              v("option", af, C(k(x)("library", "All workflow statuses")), 1),
              (V(!0), W(he, null, Ue(w.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, cf))), 128))
            ], 512), [
              [et, N.workflowStatus]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Genre")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[10] || (U[10] = (g) => N.genre = g),
              name: "genre"
            }, [
              v("option", uf, C(k(x)("library", "All genres")), 1),
              (V(!0), W(he, null, Ue(P.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, ff))), 128))
            ], 512), [
              [et, N.genre]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Classification")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[11] || (U[11] = (g) => N.classification = g),
              name: "classification"
            }, [
              v("option", df, C(k(x)("library", "All classifications")), 1),
              (V(!0), W(he, null, Ue(B.value, (g) => (V(), W("option", {
                key: g,
                value: g
              }, C(g), 9, pf))), 128))
            ], 512), [
              [et, N.classification]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Starred")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[12] || (U[12] = (g) => N.starred = g),
              name: "starred"
            }, [
              v("option", hf, C(k(x)("library", "All publications")), 1),
              v("option", mf, C(k(x)("library", "Starred only")), 1)
            ], 512), [
              [et, N.starred]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Sort")) + " ", 1),
            Be(v("select", {
              "onUpdate:modelValue": U[13] || (U[13] = (g) => N.sort = g),
              name: "sort"
            }, [
              v("option", gf, C(k(x)("library", "Title")), 1),
              v("option", _f, C(k(x)("library", "Recently added")), 1),
              v("option", bf, C(k(x)("library", "Publication date")), 1),
              v("option", yf, C(k(x)("library", "Series / periodical")), 1),
              v("option", Tf, C(k(x)("library", "Recently opened")), 1),
              v("option", Ef, C(k(x)("library", "Format")), 1)
            ], 512), [
              [et, N.sort]
            ])
          ]),
          v("label", null, [
            Ee(C(k(x)("library", "Page size")) + " ", 1),
            v("select", {
              value: M.value.limit,
              name: "limit"
            }, [
              (V(), W(he, null, Ue(r, (g) => v("option", {
                key: g,
                value: g
              }, C(g), 9, vf)), 64))
            ], 8, Sf)
          ]),
          v("button", {
            type: "submit",
            class: "button primary",
            "aria-label": k(x)("library", "Apply catalogue filters")
          }, C(k(x)("library", "Apply filters")), 9, Af),
          v("a", {
            href: "?",
            class: "button secondary",
            "aria-label": k(x)("library", "Clear catalogue filters")
          }, C(k(x)("library", "Clear")), 9, xf)
        ], 8, Gu),
        F.value.length > 0 ? (V(), W("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": k(x)("library", "Active filters")
        }, [
          v("span", null, C(k(x)("library", "Active filters")), 1),
          (V(!0), W(he, null, Ue(F.value, (g) => (V(), W("a", {
            key: g.key,
            href: ne(g.key),
            class: "library-filter-chip",
            "aria-label": `${k(x)("library", "Remove filter")}: ${g.label}`
          }, [
            v("strong", null, C(g.label) + ":", 1),
            Ee(" " + C(g.value) + " ", 1),
            U[14] || (U[14] = v("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Cf))), 128))
        ], 8, wf)) : Ie("", !0),
        v("nav", {
          class: "library-pagination",
          "aria-label": k(x)("library", "Catalogue pagination")
        }, [
          v("span", null, "Showing " + C(M.value.from) + "–" + C(M.value.to) + " of " + C(M.value.total) + " catalogue items", 1),
          M.value.previousUrl ? (V(), W("a", {
            key: 0,
            href: M.value.previousUrl
          }, C(k(x)("library", "Previous")), 9, Rf)) : (V(), W("span", If, C(k(x)("library", "Previous")), 1)),
          M.value.nextUrl ? (V(), W("a", {
            key: 2,
            href: M.value.nextUrl
          }, C(k(x)("library", "Next")), 9, Pf)) : (V(), W("span", Df, C(k(x)("library", "Next")), 1))
        ], 8, Of),
        c.value.length > 0 ? (V(), W("section", Nf, [
          v("h3", Mf, C(k(x)("library", "Top series and periodicals")), 1),
          v("p", Lf, C(k(x)("library", "Jump into recurring publications with one click.")), 1),
          v("ul", null, [
            (V(!0), W(he, null, Ue(c.value, (g) => (V(), W("li", {
              key: g.publication
            }, [
              v("a", {
                href: xe(g.publication)
              }, C(g.publication), 9, Ff),
              v("span", Uf, C(g.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (V(), W("section", kf, [
          v("h3", Hf, C(k(x)("library", "No series or periodicals found yet")), 1),
          v("p", jf, C(k(x)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ie("", !0),
        s.value.length === 0 ? (V(), W("div", $f, [
          v("h3", null, C(k(x)("library", "No catalogue items match")), 1),
          v("p", Vf, C(k(x)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (V(), W("div", zf, [
          (V(!0), W(he, null, Ue(s.value, (g) => (V(), W("article", {
            key: g.id,
            class: "library-cover-card"
          }, [
            v("a", {
              class: "library-cover-link",
              href: g.openUrl,
              "aria-label": `Read ${g.title}`
            }, [
              v("img", {
                class: "library-cover-image",
                src: g.coverUrl,
                alt: `Cover for ${g.title}`,
                loading: "lazy"
              }, null, 8, Bf)
            ], 8, Wf),
            v("div", Gf, [
              v("div", Kf, [
                v("h3", null, [
                  g.starred ? (V(), W("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": k(x)("library", "Starred")
                  }, "★", 8, Yf)) : Ie("", !0),
                  Ee(C(g.title), 1)
                ]),
                v("a", {
                  class: "library-cover-read",
                  href: g.openUrl
                }, C(k(x)("library", "Read")), 9, qf)
              ]),
              v("details", Xf, [
                v("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${k(x)("library", "Show details and actions")}: ${g.title}`
                }, C(k(x)("library", "Details")), 9, Jf),
                v("div", Zf, [
                  g.creators ? (V(), W("p", Qf, C(g.creators), 1)) : Ie("", !0),
                  v("p", ed, [
                    v("span", null, C(g.publicationType), 1),
                    g.publication ? (V(), W("span", td, " · " + C(g.publication), 1)) : Ie("", !0),
                    g.publicationDate ? (V(), W("span", nd, " · " + C(g.publicationDate), 1)) : Ie("", !0),
                    g.workflowStatus ? (V(), W("span", rd, " · Workflow status: " + C(g.workflowStatus), 1)) : Ie("", !0),
                    g.genres?.length ? (V(), W("span", sd, " · Genres: " + C(g.genres.join("; ")), 1)) : Ie("", !0),
                    g.classifications?.length ? (V(), W("span", id, " · Classifications: " + C(g.classifications.join("; ")), 1)) : Ie("", !0),
                    g.lastOpenedAt ? (V(), W("span", od, " · Last opened: " + C(g.lastOpenedAt), 1)) : Ie("", !0),
                    g.extension ? (V(), W("span", ld, " · Format: " + C(_e(g.extension)), 1)) : Ie("", !0),
                    g.shelf ? (V(), W("span", ad, " · Shelf: " + C(g.shelf), 1)) : Ie("", !0)
                  ]),
                  g.description ? (V(), W("p", cd, C(g.description), 1)) : Ie("", !0),
                  g.scanStatus !== "indexed" || g.scanError ? (V(), W("p", ud, [
                    Ee(" scanStatus: " + C(g.scanStatus || "unknown"), 1),
                    g.scanError ? (V(), W("span", fd, " · scanError: " + C(g.scanError), 1)) : Ie("", !0)
                  ])) : Ie("", !0),
                  v("div", dd, [
                    me(g).length === 0 ? (V(), W("span", pd, "No Nextcloud tags")) : (V(!0), W(he, { key: 1 }, Ue(me(g), (at) => (V(), W("span", {
                      key: at.id,
                      class: "library-tag"
                    }, C(at.name), 1))), 128))
                  ]),
                  v("p", hd, [
                    v("a", {
                      href: g.filesUrl
                    }, C(k(x)("library", "Show in Files")), 9, md),
                    U[15] || (U[15] = Ee(" · ", -1)),
                    v("a", {
                      href: g.downloadUrl
                    }, C(k(x)("library", "Download source")), 9, gd),
                    U[16] || (U[16] = Ee(" · ", -1)),
                    v("a", {
                      href: g.detailsUrl
                    }, C(k(x)("library", "Details")), 9, _d)
                  ])
                ])
              ])
            ])
          ]))), 128))
        ]))
      ]),
      v("section", bd, [
        U[17] || (U[17] = v("div", null, [
          v("h2", null, "Library"),
          v("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        v("div", yd, [
          v("a", {
            href: $.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Td),
          q.value ? (V(), W("a", {
            key: 0,
            href: q.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Ed)) : Ie("", !0)
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
function vd(e, t, n, r = Se) {
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
  h.value = "", h.textContent = s, c.appendChild(h), vd(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Ad(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", x("library", "Catalogue search and filters")), so(r, x("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, x("library", "Type"), "type", n.type, x("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, x("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, x("library", "Format"), "format", n.format, x("library", "All formats"), e.formats || [], _l), un(r, x("library", "Shelf"), "shelf", n.shelf, x("library", "All shelves"), e.shelves || []), un(r, x("library", "Scan status"), "status", n.status, x("library", "All scan statuses"), e.scanStatuses || []), un(r, x("library", "Sort"), "sort", n.sort || "title", x("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, x("library", "Page size"), "limit", t.limit || 100, x("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", x("library", "Apply catalogue filters")), s.textContent = x("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", x("library", "Clear catalogue filters")), i.textContent = x("library", "Clear"), r.append(s, i), r;
}
function xd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = Se(e.settingsUrl || ""), i = Se(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = x("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = x("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(Ad(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", x("library", "Catalogue pagination"));
  const b = document.createElement("span");
  if (b.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(b), l.appendChild(d), n.length === 0) {
    const w = document.createElement("div");
    w.className = "library-empty-content", w.setAttribute("role", "status");
    const P = document.createElement("h3");
    P.textContent = x("library", "No catalogue items match");
    const B = document.createElement("p");
    B.className = "library-muted", B.textContent = x("library", "Scan enabled roots or clear the active filters."), w.append(P, B), l.appendChild(w);
  } else {
    const w = document.createElement("div");
    w.className = "library-cover-gallery";
    for (const P of n) {
      const B = document.createElement("article");
      B.className = "library-cover-card";
      const M = document.createElement("a");
      M.className = "library-cover-link", M.href = Se(P.openUrl || "#"), M.setAttribute("aria-label", `Read ${Se(P.title || "publication")}`);
      const N = document.createElement("img");
      N.className = "library-cover-image", N.src = Se(P.coverUrl || ""), N.alt = `Cover for ${Se(P.title || "publication")}`, N.loading = "lazy", M.appendChild(N);
      const $ = document.createElement("div");
      $.className = "library-cover-summary";
      const q = document.createElement("h3");
      if (q.textContent = Se(P.title || "Untitled publication"), $.appendChild(q), P.creators) {
        const Q = document.createElement("p");
        Q.className = "library-creator", Q.textContent = Se(P.creators), $.appendChild(Q);
      }
      const Z = document.createElement("p");
      Z.className = "library-muted", Z.textContent = [
        Se(P.publicationType || "other"),
        P.extension ? `Format: ${_l(P.extension)}` : "",
        P.shelf ? `Shelf: ${Se(P.shelf)}` : ""
      ].filter(Boolean).join(" · "), $.appendChild(Z);
      const F = document.createElement("p"), ne = document.createElement("a");
      ne.href = Se(P.openUrl || "#"), ne.textContent = x("library", "Read");
      const _e = document.createElement("a");
      _e.href = Se(P.filesUrl || "#"), _e.textContent = x("library", "Show in Files");
      const me = document.createElement("a");
      me.href = Se(P.downloadUrl || "#"), me.textContent = x("library", "Download source");
      const xe = document.createElement("a");
      xe.href = Se(P.detailsUrl || "#"), xe.textContent = x("library", "Details"), F.append(ne, document.createTextNode(" · "), _e, document.createTextNode(" · "), me, document.createTextNode(" · "), xe), $.appendChild(F), B.append(M, $), w.appendChild(B);
    }
    l.appendChild(w);
  }
  if (o.appendChild(l), s || i) {
    const w = document.createElement("section");
    w.className = "library-hero library-secondary-panel", w.setAttribute("aria-label", "Library settings");
    const P = document.createElement("div"), B = document.createElement("h2");
    B.textContent = "Library";
    const M = document.createElement("p");
    M.className = "library-lede", M.textContent = "Browse publications already stored in Nextcloud.", P.append(B, M);
    const N = document.createElement("div");
    if (N.className = "library-hero-actions", s) {
      const $ = document.createElement("a");
      $.href = s, $.className = "button secondary", $.setAttribute("aria-label", "Open Library settings"), $.textContent = "Library settings", N.appendChild($);
    }
    if (i) {
      const $ = document.createElement("a");
      $.href = i, $.className = "button secondary", $.setAttribute("aria-label", "Export corrected metadata"), $.textContent = "Export corrected metadata", N.appendChild($);
    }
    w.append(P, N), o.appendChild(w);
  }
  return o;
}
if (dr)
  try {
    Qc(Sd, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(xd(ro));
  }
//# sourceMappingURL=library-main.mjs.map
