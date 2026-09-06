// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, pn = [], pt = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vr = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ie = (e, t) => Ml.call(e, t), B = Array.isArray, Mt = (e) => Bn(e) === "[object Map]", Qt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", J = (e) => typeof e == "function", _e = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", oo = (e) => (le(e) || J(e)) && J(e.then) && J(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, et = Ar(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, en = Ar(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = Ar(
  (e) => e ? `on${co(e)}` : ""
), Et = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
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
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = _e(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (_e(e) || le(e))
    return e;
}
const Hl = /;(?![^(]*\))/g, kl = /:([^]+)/, jl = /\/\*[^]*?\*\//g;
function $l(e) {
  const t = {};
  return e.replace(jl, "").split(Hl).forEach((n) => {
    if (n) {
      const r = n.split(kl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Rs(e) {
  let t = "";
  if (_e(e))
    t = e;
  else if (B(e))
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
function Bl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Lt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Lt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Lt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ht(e), r = ht(t), n || r)
    return e === t;
  if (n = B(e), r = B(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = le(e), r = le(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Mt(e), r = Mt(t), n || r || (n = Qt(e), r = Qt(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Lt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Lt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), M = (e) => _e(e) ? e : e == null ? "" : B(e) || le(e) && (e.toString === lo || !J(e.toString)) ? po(e) ? M(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : ht(t) ? Yr(t) : le(t) && !B(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let we;
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && we && (we.active ? (this.parent = we, this.index = (we.scopes || (we.scopes = [])).push(
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
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (we === this)
        we = this.prevScope;
      else {
        let t = we;
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
function Gl() {
  return we;
}
let de;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && (we.active ? we.effects.push(this) : this.flags &= -2);
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
    const t = de, n = tt;
    de = this, tt = !0;
    try {
      return this.fn();
    } finally {
      yo(this), de = t, tt = n, this.flags &= -3;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = de, r = tt;
  de = e, tt = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || Et(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    de = n, tt = r, yo(e), e.flags &= -3;
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
let tt = !0;
const Eo = [];
function xt() {
  Eo.push(tt), tt = !1;
}
function wt() {
  const e = Eo.pop();
  tt = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = de;
    de = void 0;
    try {
      t();
    } finally {
      de = n;
    }
  }
}
let Hn = 0;
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
    if (!de || !tt || de === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== de)
      n = this.activeLink = new ql(de, this), de.deps ? (n.prevDep = de.depsTail, de.depsTail.nextDep = n, de.depsTail = n) : de.deps = de.depsTail = n, vo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = de.depsTail, n.nextDep = void 0, de.depsTail.nextDep = n, de.depsTail = n, de.deps === n && (de.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
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
), kn = /* @__PURE__ */ Symbol(
  ""
);
function Re(e, t, n) {
  if (tt && de) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function St(e, t, n, r, s, i) {
  const o = hs.get(e);
  if (!o) {
    Hn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Is(), t === "clear")
    o.forEach(l);
  else {
    const c = B(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((_, A) => {
        (A === "length" || A === kn || !ht(A) && A >= d) && l(_);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(kn)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(Xt)), Mt(e) && l(o.get(ms)));
          break;
        case "delete":
          c || (l(o.get(Xt)), Mt(e) && l(o.get(ms)));
          break;
        case "set":
          Mt(e) && l(o.get(Xt));
          break;
      }
  }
  Ps();
}
function cn(e) {
  const t = /* @__PURE__ */ oe(e);
  return t === e ? t : (Re(t, "iterate", kn), /* @__PURE__ */ nt(e) ? t : t.map(Ct));
}
function Cr(e) {
  return Re(e = /* @__PURE__ */ oe(e), "iterate", kn), e;
}
function ft(e, t) {
  return /* @__PURE__ */ Ft(e) ? _n(/* @__PURE__ */ Jt(e) ? Ct(t) : t) : Ct(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => ft(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => B(t) ? cn(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
  },
  every(e, t) {
    return bt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return bt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => ft(this, r)),
      arguments
    );
  },
  find(e, t) {
    return bt(
      this,
      "find",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return bt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return bt(
      this,
      "findLast",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return bt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return bt(this, "forEach", e, t, void 0, arguments);
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
    return bt(this, "map", e, t, void 0, arguments);
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
    return bt(this, "some", e, t, void 0, arguments);
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
    return Xr(this, "values", (e) => ft(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ nt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function bt(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ nt(e), c = o[t];
  if (c !== Jl[t]) {
    const _ = c.apply(e, i);
    return l ? Ct(_) : _;
  }
  let h = n;
  o !== e && (l ? h = function(_, A) {
    return n.call(this, ft(e, _), A, e);
  } : n.length > 2 && (h = function(_, A) {
    return n.call(this, _, A, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ nt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, _) {
    return l && (l = !1, h = ft(e, h)), n.call(this, h, ft(e, d), _, e);
  }) : n.length > 3 && (o = function(h, d, _) {
    return n.call(this, h, d, _, e);
  }));
  const c = s[t](o, ...r);
  return l ? ft(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ oe(e);
  Re(r, "iterate", kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  xt(), Is();
  const r = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return Ps(), wt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Ql(e) {
  ht(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Re(t, "has", e), t.hasOwnProperty(e);
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
    const o = B(t);
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
      /* @__PURE__ */ Ue(t) ? t : r
    );
    if ((ht(n) ? Ao.has(n) : Zl(n)) || (s || Re(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ue(l)) {
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
    const o = B(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Ft(i);
      if (!/* @__PURE__ */ nt(r) && !/* @__PURE__ */ Ft(r) && (i = /* @__PURE__ */ oe(i), r = /* @__PURE__ */ oe(r)), !o && /* @__PURE__ */ Ue(i) && !/* @__PURE__ */ Ue(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ue(t) ? t : s
    );
    return t === /* @__PURE__ */ oe(s) && c && (l ? Et(r, i) && St(t, "set", n, r) : St(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ie(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && St(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ht(n) || !Ao.has(n)) && Re(t, "has", n), r;
  }
  ownKeys(t) {
    return Re(
      t,
      "iterate",
      B(t) ? "length" : Xt
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
    const s = this.__v_raw, i = /* @__PURE__ */ oe(s), o = Mt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : Ct;
    return !t && Re(
      i,
      "iterate",
      c ? ms : Xt
    ), Ie(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: _, done: A } = h.next();
          return A ? { value: _, done: A } : {
            value: l ? [d(_[0]), d(_[1])] : d(_),
            done: A
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
      e || (Et(s, l) && Re(o, "get", s), Re(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : Ct;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Re(/* @__PURE__ */ oe(s), "iterate", Xt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(s);
      return e || (Et(s, l) && Re(o, "has", s), Re(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ oe(l), h = t ? gs : e ? _n : Ct;
      return !e && Re(c, "iterate", Xt), l.forEach((d, _) => s.call(i, h(d), h(_), o));
    }
  };
  return Ie(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ oe(this), o = rr(i), l = /* @__PURE__ */ oe(s), c = !t && !/* @__PURE__ */ nt(s) && !/* @__PURE__ */ Ft(s) ? l : s;
        return o.has.call(i, c) || Et(s, c) && o.has.call(i, s) || Et(l, c) && o.has.call(i, l) || (i.add(c), St(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ nt(i) && !/* @__PURE__ */ Ft(i) && (i = /* @__PURE__ */ oe(i));
        const o = /* @__PURE__ */ oe(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ oe(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? Et(i, d) && St(o, "set", s, i) : St(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ oe(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ oe(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && St(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ oe(this), i = s.size !== 0, o = s.clear();
        return i && St(
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
  return /* @__PURE__ */ Ft(e) ? e : Ms(
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
  return /* @__PURE__ */ Ft(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
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
const Ct = (e) => le(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => le(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function V(e) {
  return /* @__PURE__ */ Ue(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : V(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Ue(s) && !/* @__PURE__ */ Ue(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, pa);
}
class ha {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new So(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
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
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = ae) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (N) => s ? N : /* @__PURE__ */ nt(N) || s === !1 || s === 0 ? vt(N, 1) : vt(N);
  let d, _, A, S, $ = !1, L = !1;
  if (/* @__PURE__ */ Ue(e) ? (_ = () => e.value, $ = /* @__PURE__ */ nt(e)) : /* @__PURE__ */ Jt(e) ? (_ = () => h(e), $ = !0) : B(e) ? (L = !0, $ = e.some((N) => /* @__PURE__ */ Jt(N) || /* @__PURE__ */ nt(N)), _ = () => e.map((N) => {
    if (/* @__PURE__ */ Ue(N))
      return N.value;
    if (/* @__PURE__ */ Jt(N))
      return h(N);
    if (J(N))
      return c ? c(N, 2) : N();
  })) : J(e) ? t ? _ = c ? () => c(e, 2) : e : _ = () => {
    if (A) {
      xt();
      try {
        A();
      } finally {
        wt();
      }
    }
    const N = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [S]) : e(S);
    } finally {
      Kt = N;
    }
  } : _ = pt, t && s) {
    const N = _, te = s === !0 ? 1 / 0 : s;
    _ = () => vt(N(), te);
  }
  const K = Gl(), k = () => {
    d.stop(), K && K.active && ws(K.effects, d);
  };
  if (i && t) {
    const N = t;
    t = (...te) => {
      const ne = N(...te);
      return k(), ne;
    };
  }
  let G = L ? new Array(e.length).fill(ir) : ir;
  const Y = (N) => {
    if (!(!(d.flags & 1) || !d.dirty && !N))
      if (t) {
        const te = d.run();
        if (N || s || $ || (L ? te.some((ne, F) => Et(ne, G[F])) : Et(te, G))) {
          A && A();
          const ne = Kt;
          Kt = d;
          try {
            const F = [
              te,
              // pass undefined as the old value when it's changed for the first time
              G === ir ? void 0 : L && G[0] === ir ? [] : G,
              S
            ];
            G = te, c ? c(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            Kt = ne;
          }
        }
      } else
        d.run();
  };
  return l && l(Y), d = new mo(_), d.scheduler = o ? () => o(Y, !1) : Y, S = (N) => ga(N, !1, d), A = d.onStop = () => {
    const N = pr.get(d);
    if (N) {
      if (c)
        c(N, 4);
      else
        for (const te of N) te();
      pr.delete(d);
    }
  }, t ? r ? Y(!0) : G = d.run() : o ? o(Y.bind(null, !0), !0) : d.run(), k.pause = d.pause.bind(d), k.resume = d.resume.bind(d), k.stop = k, k;
}
function vt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ue(e))
    vt(e.value, t, n);
  else if (B(e))
    for (let r = 0; r < e.length; r++)
      vt(e[r], t, n);
  else if (Qt(e) || Mt(e))
    e.forEach((r) => {
      vt(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      vt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && vt(e[r], t, n);
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
function rt(e, t, n, r) {
  if (J(e)) {
    const s = Wn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (B(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(rt(e[i], t, n, r));
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
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      xt(), Wn(i, null, 10, [
        e,
        c,
        h
      ]), wt();
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
const Le = [];
let ut = -1;
const hn = [];
let Nt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = ut + 1, n = Le.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Le[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Le[Le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Le.push(e) : Le.splice(ya(t), 0, e), e.flags |= 1, No();
  }
}
function No() {
  hr || (hr = Po.then(Lo));
}
function Ta(e) {
  if (!B(e))
    Nt && e.id === -1 ? Nt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  No();
}
function di(e, t, n = ut + 1) {
  for (; n < Le.length; n++) {
    const r = Le[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Le.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mo(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (hn.length = 0, Nt) {
      for (let n = 0; n < t.length; n++)
        Nt.push(t[n]);
      return;
    }
    for (Nt = t, fn = 0; fn < Nt.length; fn++) {
      const n = Nt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nt = null, fn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (ut = 0; ut < Le.length; ut++) {
      const t = Le[ut];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ut < Le.length; ut++) {
      const t = Le[ut];
      t && (t.flags &= -2);
    }
    ut = -1, Le.length = 0, Mo(), hr = null, (Le.length || hn.length) && Lo();
  }
}
let Je = null, Fo = null;
function mr(e) {
  const t = Je;
  return Je = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = Je, n) {
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
function lt(e, t) {
  if (Je === null)
    return e;
  const n = Mr(Je), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ae] = t[s];
    i && (J(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && vt(o), r.push({
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
    c && (xt(), rt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), wt());
  }
}
function Sa(e, t) {
  if (Fe) {
    let n = Fe.provides;
    const r = Fe.parent && Fe.parent.provides;
    r === n && (n = Fe.provides = Object.create(r)), n[e] = t;
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
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Ie({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const S = Aa();
      h = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!c) {
      const S = () => {
      };
      return S.stop = pt, S.resume = pt, S.pause = pt, S;
    }
  }
  const d = Fe;
  l.call = (S, $, L) => rt(S, d, $, L);
  let _ = !1;
  i === "post" ? l.scheduler = (S) => {
    $e(S, d && d.suspense);
  } : i !== "sync" && (_ = !0, l.scheduler = (S, $) => {
    $ ? S() : Fs(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), _ && (S.flags |= 2, d && (S.id = d.uid, S.i = d));
  };
  const A = _a(e, t, l);
  return zn && (h ? h.push(A) : c && A()), A;
}
function xa(e, t, n) {
  const r = this.proxy, s = _e(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  J(t) ? i = t : (i = t.handler, n = t);
  const o = Kn(this), l = Uo(s, i.bind(r), n);
  return o(), l;
}
function Ho(e, t) {
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
      if (n.type !== Ot) {
        t = n;
        break;
      }
  }
  return t;
}
function ko(e) {
  if (!Hs(e))
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
      Ir(n.type) && ko(n) || n,
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
  if (B(e)) {
    e.forEach(
      (L, K) => Ln(
        L,
        t && (B(t) ? t[K] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ae ? l.refs = {} : l.refs, _ = l.setupState, A = /* @__PURE__ */ oe(_), S = _ === ae ? io : (L) => pi(d, L) ? !1 : ie(A, L), $ = (L, K) => !(K && pi(d, K));
  if (h != null && h !== c) {
    if (hi(t), _e(h))
      d[h] = null, S(h) && (_[h] = null);
    else if (/* @__PURE__ */ Ue(h)) {
      const L = t;
      $(h, L.k) && (h.value = null), L.k && (d[L.k] = null);
    }
  }
  if (J(c))
    Wn(c, l, 12, [o, d]);
  else {
    const L = _e(c), K = /* @__PURE__ */ Ue(c);
    if (L || K) {
      const k = () => {
        if (e.f) {
          const G = L ? S(c) ? _[c] : d[c] : $() || !e.k ? c.value : d[e.k];
          if (s)
            B(G) && ws(G, i);
          else if (B(G))
            G.includes(i) || G.push(i);
          else if (L)
            d[c] = [i], S(c) && (_[c] = d[c]);
          else {
            const Y = [i];
            $(c, e.k) && (c.value = Y), e.k && (d[e.k] = Y);
          }
        } else L ? (d[c] = o, S(c) && (_[c] = o)) : K && ($(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const G = () => {
          k(), gr.delete(e);
        };
        G.id = -1, gr.set(e, G), $e(G, n);
      } else
        hi(e), k();
    }
  }
}
function hi(e) {
  const t = gr.get(e);
  t && (t.flags |= 8, gr.delete(e));
}
wr().requestIdleCallback;
wr().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, Hs = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  $o(e, "a", t);
}
function Ra(e, t) {
  $o(e, "da", t);
}
function $o(e, t, n = Fe) {
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
      Hs(s.parent.vnode) && Ia(r, t, n, s), s = s.parent;
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
function Pr(e, t, n = Fe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      xt();
      const l = Kn(n), c = rt(t, n, e, o);
      return l(), wt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Rt = (e) => (t, n = Fe) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Rt("bm"), Da = Rt("m"), Na = Rt(
  "bu"
), Ma = Rt("u"), La = Rt(
  "bum"
), Vo = Rt("um"), Fa = Rt(
  "sp"
), Ua = Rt("rtg"), Ha = Rt("rtc");
function ka(e, t = Fe) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function Xe(e, t, n, r) {
  let s;
  const i = n, o = B(e);
  if (o || _e(e)) {
    const l = o && /* @__PURE__ */ Jt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ nt(e), h = /* @__PURE__ */ Ft(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, _ = e.length; d < _; d++)
      s[d] = t(
        c ? h ? _n(Ct(e[d])) : Ct(e[d]) : e[d],
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
  /* @__PURE__ */ Ie(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Bo(e),
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
      const A = o[t];
      if (A !== void 0)
        switch (A) {
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
    let d, _;
    if (h)
      return t === "$attrs" && Re(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ae && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      _ = c.config.globalProperties, ie(_, t)
    )
      return _[t];
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
  return B(e) ? e.reduce(
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
    mounted: A,
    beforeUpdate: S,
    updated: $,
    activated: L,
    deactivated: K,
    beforeDestroy: k,
    beforeUnmount: G,
    destroyed: Y,
    unmounted: N,
    render: te,
    renderTracked: ne,
    renderTriggered: F,
    errorCaptured: b,
    serverPrefetch: ce,
    // public API
    expose: Pe,
    inheritAttrs: mt,
    // assets
    components: Ut,
    directives: st,
    filters: tn
  } = t;
  if (h && za(h, r, null), o)
    for (const pe in o) {
      const se = o[pe];
      J(se) && (r[pe] = se.bind(n));
    }
  if (s) {
    const pe = s.call(n, n);
    le(pe) && (e.data = /* @__PURE__ */ Or(pe));
  }
  if (ys = !0, i)
    for (const pe in i) {
      const se = i[pe], Ze = J(se) ? se.bind(n, n) : J(se.get) ? se.get.bind(n, n) : pt, Ht = !J(se) && J(se.set) ? se.set.bind(n) : pt, _t = We({
        get: Ze,
        set: Ht
      });
      Object.defineProperty(r, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => _t.value,
        set: (Ye) => _t.value = Ye
      });
    }
  if (l)
    for (const pe in l)
      zo(l[pe], r, n, pe);
  if (c) {
    const pe = J(c) ? c.call(n) : c;
    Reflect.ownKeys(pe).forEach((se) => {
      Sa(se, pe[se]);
    });
  }
  d && gi(d, e, "c");
  function xe(pe, se) {
    B(se) ? se.forEach((Ze) => pe(Ze.bind(n))) : se && pe(se.bind(n));
  }
  if (xe(Pa, _), xe(Da, A), xe(Na, S), xe(Ma, $), xe(Oa, L), xe(Ra, K), xe(ka, b), xe(Ha, ne), xe(Ua, F), xe(La, G), xe(Vo, N), xe(Fa, ce), B(Pe))
    if (Pe.length) {
      const pe = e.exposed || (e.exposed = {});
      Pe.forEach((se) => {
        Object.defineProperty(pe, se, {
          get: () => n[se],
          set: (Ze) => n[se] = Ze,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === pt && (e.render = te), mt != null && (e.inheritAttrs = mt), Ut && (e.components = Ut), st && (e.directives = st), ce && jo(e);
}
function za(e, t, n = pt) {
  B(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    le(s) ? "default" in s ? i = ur(
      s.from || r,
      s.default,
      !0
    ) : i = ur(s.from || r) : i = ur(s), /* @__PURE__ */ Ue(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  rt(
    B(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (_e(e)) {
    const i = t[e];
    J(i) && Zr(s, i);
  } else if (J(e))
    Zr(s, e.bind(n));
  else if (le(e))
    if (B(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(i) && Zr(s, i, e);
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
      const l = Ba[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ba = {
  data: _i,
  props: bi,
  emits: bi,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: Me,
  created: Me,
  beforeMount: Me,
  mounted: Me,
  beforeUpdate: Me,
  updated: Me,
  beforeDestroy: Me,
  beforeUnmount: Me,
  destroyed: Me,
  unmounted: Me,
  activated: Me,
  deactivated: Me,
  errorCaptured: Me,
  serverPrefetch: Me,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Ka,
  // provide / inject
  provide: _i,
  inject: Wa
};
function _i(e, t) {
  return t ? e ? function() {
    return Ie(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rn(Ts(e), Ts(t));
}
function Ts(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Me(e[r], t[r]);
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
let Ga = 0;
function Ya(e, t) {
  return function(r, s = null) {
    J(r) || (r = Ie({}, r)), s != null && !le(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
      _uid: Ga++,
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
        return o.has(d) || (d && J(d.install) ? (o.add(d), d.install(h, ..._)) : J(d) && (o.add(d), d(h, ..._))), h;
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
      mount(d, _, A) {
        if (!c) {
          const S = h._ceVNode || At(r, s);
          return S.appContext = i, A === !0 ? A = "svg" : A === !1 && (A = void 0), e(S, d, A), c = !0, h._container = d, d.__vue_app__ = h, Mr(S.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (rt(
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
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${en(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ae;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => _e(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Gr(t)] || // also try camelCase event handler (#2249)
  r[l = Gr(et(t))];
  !c && i && (c = r[l = Gr(en(t))]), c && rt(
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
    e.emitted[l] = !0, rt(
      h,
      e,
      6,
      s
    );
  }
}
const Ja = /* @__PURE__ */ new WeakMap();
function Ko(e, t, n = !1) {
  const r = n ? Ja : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!J(e)) {
    const c = (h) => {
      const d = Ko(h, t, !0);
      d && (l = !0, Ie(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (le(e) && r.set(e, null), null) : (B(i) ? i.forEach((c) => o[c] = null) : Ie(o, i), le(e) && r.set(e, o), o);
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
    props: _,
    data: A,
    setupState: S,
    ctx: $,
    inheritAttrs: L
  } = e, K = mr(e);
  let k, G;
  try {
    if (n.shapeFlag & 4) {
      const N = s || r, te = N;
      k = dt(
        h.call(
          te,
          N,
          d,
          _,
          S,
          A,
          $
        )
      ), G = l;
    } else {
      const N = t;
      k = dt(
        N.length > 1 ? N(
          _,
          { attrs: l, slots: o, emit: c }
        ) : N(
          _,
          null
        )
      ), G = t.props ? l : Za(l);
    }
  } catch (N) {
    Zt.length = 0, Rr(N, e, 1), k = At(Ot);
  }
  let Y = k;
  if (G && L !== !1) {
    const N = Object.keys(G), { shapeFlag: te } = Y;
    N.length && te & 7 && (i && N.some(vr) && (G = Qa(
      G,
      i
    )), Y = bn(Y, G, !1, !0));
  }
  if (n.dirs && (Y = bn(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const N = Ir(Y.type) && ko(Y) || Y;
    Us(N, n.transition);
  }
  return k = Y, mr(K), k;
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
        const A = d[_];
        if (Go(o, r, A) && !Dr(h, A))
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
    if (Go(t, e, i) && !Dr(n, i))
      return !0;
  }
  return !1;
}
function Go(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && le(r) && le(s) ? !Lt(r, s) : r !== s;
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
      for (let _ = 0; _ < d.length; _++) {
        let A = d[_];
        if (Dr(e.emitsOptions, A))
          continue;
        const S = t[A];
        if (c)
          if (ie(i, A))
            S !== i[A] && (i[A] = S, h = !0);
          else {
            const $ = et(A);
            s[$] = Es(
              c,
              l,
              $,
              S,
              e,
              !1
            );
          }
        else
          S !== i[A] && (i[A] = S, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const _ in l)
      (!t || // for camelCase
      !ie(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = en(_)) === _ || !ie(t, d))) && (c ? n && // for camelCase
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
        (!t || !ie(t, _)) && (delete i[_], h = !0);
  }
  h && St(e.attrs, "set", "");
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
      s && ie(s, d = et(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ oe(n), h = l || ae;
    for (let d = 0; d < i.length; d++) {
      const _ = i[d];
      n[_] = Es(
        s,
        c,
        _,
        h[_],
        e,
        !ie(h, _)
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
          const d = Kn(s);
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
    const d = (_) => {
      c = !0;
      const [A, S] = Zo(_, t, !0);
      Ie(o, A), S && l.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return le(e) && r.set(e, pn), pn;
  if (B(i))
    for (let d = 0; d < i.length; d++) {
      const _ = et(i[d]);
      Ei(_) && (o[_] = ae);
    }
  else if (i)
    for (const d in i) {
      const _ = et(d);
      if (Ei(_)) {
        const A = i[d], S = o[_] = B(A) || J(A) ? { type: A } : Ie({}, A), $ = S.type;
        let L = !1, K = !0;
        if (B($))
          for (let k = 0; k < $.length; ++k) {
            const G = $[k], Y = J(G) && G.name;
            if (Y === "Boolean") {
              L = !0;
              break;
            } else Y === "String" && (K = !1);
          }
        else
          L = J($) && $.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = L, S[
          1
          /* shouldCastTrue */
        ] = K, (L || ie(S, "default")) && l.push(_);
      }
    }
  const h = [o, l];
  return le(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => B(e) ? e.map(dt) : [dt(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ks(s)) continue;
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
    (n || !ks(r)) && (e[r] = t[r]);
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
      !ks(l) && o[l] == null && delete s[l];
}, $e = dc;
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
    nextSibling: A,
    setScopeId: S = pt,
    insertStaticContent: $
  } = e, L = (u, f, m, v = null, g = null, T = null, w = void 0, C = null, O = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (v = nn(u), Ye(u, g, T, !0), u = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: y, ref: j, shapeFlag: P } = f;
    switch (y) {
      case Nr:
        K(u, f, m, v);
        break;
      case Ot:
        k(u, f, m, v);
        break;
      case ns:
        u == null && G(f, m, v, w);
        break;
      case Te:
        Ut(
          u,
          f,
          m,
          v,
          g,
          T,
          w,
          C,
          O
        );
        break;
      default:
        P & 1 ? te(
          u,
          f,
          m,
          v,
          g,
          T,
          w,
          C,
          O
        ) : P & 6 ? st(
          u,
          f,
          m,
          v,
          g,
          T,
          w,
          C,
          O
        ) : (P & 64 || P & 128) && y.process(
          u,
          f,
          m,
          v,
          g,
          T,
          w,
          C,
          O,
          jt
        );
    }
    j != null && g ? Ln(j, u && u.ref, T, f || u, !f) : j == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, K = (u, f, m, v) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        v
      );
    else {
      const g = f.el = u.el;
      f.children !== u.children && h(g, f.children);
    }
  }, k = (u, f, m, v) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      v
    ) : f.el = u.el;
  }, G = (u, f, m, v) => {
    [u.el, u.anchor] = $(
      u.children,
      f,
      m,
      v,
      u.el,
      u.anchor
    );
  }, Y = ({ el: u, anchor: f }, m, v) => {
    let g;
    for (; u && u !== f; )
      g = A(u), r(u, m, v), u = g;
    r(f, m, v);
  }, N = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = A(u), s(u), u = m;
    s(f);
  }, te = (u, f, m, v, g, T, w, C, O) => {
    if (f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), u == null)
      ne(
        f,
        m,
        v,
        g,
        T,
        w,
        C,
        O
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), ce(
          u,
          f,
          g,
          T,
          w,
          C,
          O
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ne = (u, f, m, v, g, T, w, C) => {
    let O, y;
    const { props: j, shapeFlag: P, transition: H, dirs: z } = u;
    if (O = u.el = o(
      u.type,
      T,
      j && j.is,
      j
    ), P & 8 ? d(O, u.children) : P & 16 && b(
      u.children,
      O,
      null,
      v,
      g,
      ts(u, T),
      w,
      C
    ), z && zt(u, null, v, "created"), F(O, u, u.scopeId, w, v), j) {
      for (const ee in j)
        ee !== "value" && !Dn(ee) && i(O, ee, null, j[ee], T, v);
      "value" in j && i(O, "value", null, j.value, T), (y = j.onVnodeBeforeMount) && ct(y, v, u);
    }
    z && zt(u, null, v, "beforeMount");
    const q = uc(g, H);
    q && H.beforeEnter(O), r(O, f, m), ((y = j && j.onVnodeMounted) || q || z) && $e(() => {
      y && ct(y, v, u), q && H.enter(O), z && zt(u, null, v, "mounted");
    }, g);
  }, F = (u, f, m, v, g) => {
    if (m && S(u, m), v)
      for (let T = 0; T < v.length; T++)
        S(u, v[T]);
    if (g) {
      let T = g.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const w = g.vnode;
        F(
          u,
          w,
          w.scopeId,
          w.slotScopeIds,
          g.parent
        );
      }
    }
  }, b = (u, f, m, v, g, T, w, C, O = 0) => {
    for (let y = O; y < u.length; y++) {
      const j = u[y] = C ? Tt(u[y]) : dt(u[y]);
      L(
        null,
        j,
        f,
        m,
        v,
        g,
        T,
        w,
        C
      );
    }
  }, ce = (u, f, m, v, g, T, w) => {
    const C = f.el = u.el;
    let { patchFlag: O, dynamicChildren: y, dirs: j } = f;
    O |= u.patchFlag & 16;
    const P = u.props || ae, H = f.props || ae;
    let z;
    if (m && Bt(m, !1), (z = H.onVnodeBeforeUpdate) && ct(z, m, f, u), j && zt(f, u, m, "beforeUpdate"), m && Bt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (O = 0, w = !1, y = null), (P.innerHTML && H.innerHTML == null || P.textContent && H.textContent == null) && d(C, ""), y ? Pe(
      u.dynamicChildren,
      y,
      C,
      m,
      v,
      ts(f, g),
      T
    ) : w || se(
      u,
      f,
      C,
      null,
      m,
      v,
      ts(f, g),
      T,
      !1
    ), O > 0) {
      if (O & 16)
        mt(C, P, H, m, g);
      else if (O & 2 && P.class !== H.class && i(C, "class", null, H.class, g), O & 4 && i(C, "style", P.style, H.style, g), O & 8) {
        const q = f.dynamicProps;
        for (let ee = 0; ee < q.length; ee++) {
          const Q = q[ee], he = P[Q], ge = H[Q];
          (ge !== he || Q === "value") && i(C, Q, he, ge, g, m);
        }
      }
      O & 1 && u.children !== f.children && d(C, f.children);
    } else !w && y == null && mt(C, P, H, m, g);
    ((z = H.onVnodeUpdated) || j) && $e(() => {
      z && ct(z, m, f, u), j && zt(f, u, m, "updated");
    }, v);
  }, Pe = (u, f, m, v, g, T, w) => {
    for (let C = 0; C < f.length; C++) {
      const O = u[C], y = f[C], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(O, y) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? _(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      L(
        O,
        y,
        j,
        null,
        v,
        g,
        T,
        w,
        !0
      );
    }
  }, mt = (u, f, m, v, g) => {
    if (f !== m) {
      if (f !== ae)
        for (const T in f)
          !Dn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            g,
            v
          );
      for (const T in m) {
        if (Dn(T)) continue;
        const w = m[T], C = f[T];
        w !== C && T !== "value" && i(u, T, C, w, g, v);
      }
      "value" in m && i(u, "value", f.value, m.value, g);
    }
  }, Ut = (u, f, m, v, g, T, w, C, O) => {
    const y = f.el = u ? u.el : l(""), j = f.anchor = u ? u.anchor : l("");
    let { patchFlag: P, dynamicChildren: H, slotScopeIds: z } = f;
    z && (C = C ? C.concat(z) : z), u == null ? (r(y, m, v), r(j, m, v), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      j,
      g,
      T,
      w,
      C,
      O
    )) : P > 0 && P & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === H.length ? (Pe(
      u.dynamicChildren,
      H,
      m,
      g,
      T,
      w,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || g && f === g.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : se(
      u,
      f,
      m,
      j,
      g,
      T,
      w,
      C,
      O
    );
  }, st = (u, f, m, v, g, T, w, C, O) => {
    f.slotScopeIds = C, u == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      m,
      v,
      w,
      O
    ) : tn(
      f,
      m,
      v,
      g,
      T,
      w,
      O
    ) : gt(u, f, O);
  }, tn = (u, f, m, v, g, T, w) => {
    const C = u.component = yc(
      u,
      v,
      g
    );
    if (Hs(u) && (C.ctx.renderer = jt), Ec(C, !1, w), C.asyncDep) {
      if (g && g.registerDep(C, xe, w), !u.el) {
        const O = C.subTree = At(Ot);
        k(null, O, f, m), u.placeholder = O.el;
      }
    } else
      xe(
        C,
        u,
        f,
        m,
        g,
        T,
        w
      );
  }, gt = (u, f, m) => {
    const v = f.component = u.component;
    if (ec(u, f, m))
      if (v.asyncDep && !v.asyncResolved) {
        pe(v, f, m);
        return;
      } else
        v.next = f, v.update();
    else
      f.el = u.el, v.vnode = f;
  }, xe = (u, f, m, v, g, T, w) => {
    const C = () => {
      if (u.isMounted) {
        let { next: P, bu: H, u: z, parent: q, vnode: ee } = u;
        {
          const He = rl(u);
          if (He) {
            P && (P.el = ee.el, pe(u, P, w)), He.asyncDep.then(() => {
              $e(() => {
                u.isUnmounted || y();
              }, g);
            });
            return;
          }
        }
        let Q = P, he;
        Bt(u, !1), P ? (P.el = ee.el, pe(u, P, w)) : P = ee, H && cr(H), (he = P.props && P.props.onVnodeBeforeUpdate) && ct(he, q, P, ee), Bt(u, !0);
        const ge = yi(u), De = u.subTree;
        u.subTree = ge, L(
          De,
          ge,
          // parent may have changed if it's in a teleport
          _(De.el),
          // anchor may have changed if it's in a fragment
          nn(De),
          u,
          g,
          T
        ), P.el = ge.el, Q === null && tc(u, ge.el), z && $e(z, g), (he = P.props && P.props.onVnodeUpdated) && $e(
          () => ct(he, q, P, ee),
          g
        );
      } else {
        let P;
        const { el: H, props: z } = f, { bm: q, m: ee, parent: Q, root: he, type: ge } = u, De = Fn(f);
        Bt(u, !1), q && cr(q), !De && (P = z && z.onVnodeBeforeMount) && ct(P, Q, f), Bt(u, !0);
        {
          he.ce && he.ce._hasShadowRoot() && he.ce._injectChildStyle(
            ge,
            u.parent ? u.parent.type : void 0
          );
          const He = u.subTree = yi(u);
          L(
            null,
            He,
            m,
            v,
            u,
            g,
            T
          ), f.el = He.el;
        }
        if (ee && $e(ee, g), !De && (P = z && z.onVnodeMounted)) {
          const He = f;
          $e(
            () => ct(P, Q, He),
            g
          );
        }
        (f.shapeFlag & 256 || Q && Fn(Q.vnode) && Q.vnode.shapeFlag & 256) && u.a && $e(u.a, g), u.isMounted = !0, f = m = v = null;
      }
    };
    u.scope.on();
    const O = u.effect = new mo(C);
    u.scope.off();
    const y = u.update = O.run.bind(O), j = u.job = O.runIfDirty.bind(O);
    j.i = u, j.id = u.uid, O.scheduler = () => Fs(j), Bt(u, !0), y();
  }, pe = (u, f, m) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, v, m), lc(u, f.children, m), xt(), di(u), wt();
  }, se = (u, f, m, v, g, T, w, C, O = !1) => {
    const y = u && u.children, j = u ? u.shapeFlag : 0, P = f.children, { patchFlag: H, shapeFlag: z } = f;
    if (H > 0) {
      if (H & 128) {
        Ht(
          y,
          P,
          m,
          v,
          g,
          T,
          w,
          C,
          O
        );
        return;
      } else if (H & 256) {
        Ze(
          y,
          P,
          m,
          v,
          g,
          T,
          w,
          C,
          O
        );
        return;
      }
    }
    z & 8 ? (j & 16 && kt(y, g, T), P !== y && d(m, P)) : j & 16 ? z & 16 ? Ht(
      y,
      P,
      m,
      v,
      g,
      T,
      w,
      C,
      O
    ) : kt(y, g, T, !0) : (j & 8 && d(m, ""), z & 16 && b(
      P,
      m,
      v,
      g,
      T,
      w,
      C,
      O
    ));
  }, Ze = (u, f, m, v, g, T, w, C, O) => {
    u = u || pn, f = f || pn;
    const y = u.length, j = f.length, P = Math.min(y, j);
    let H;
    for (H = 0; H < P; H++) {
      const z = f[H] = O ? Tt(f[H]) : dt(f[H]);
      L(
        u[H],
        z,
        m,
        null,
        g,
        T,
        w,
        C,
        O
      );
    }
    y > j ? kt(
      u,
      g,
      T,
      !0,
      !1,
      P
    ) : b(
      f,
      m,
      v,
      g,
      T,
      w,
      C,
      O,
      P
    );
  }, Ht = (u, f, m, v, g, T, w, C, O) => {
    let y = 0;
    const j = f.length;
    let P = u.length - 1, H = j - 1;
    for (; y <= P && y <= H; ) {
      const z = u[y], q = f[y] = O ? Tt(f[y]) : dt(f[y]);
      if (xn(z, q))
        L(
          z,
          q,
          m,
          null,
          g,
          T,
          w,
          C,
          O
        );
      else
        break;
      y++;
    }
    for (; y <= P && y <= H; ) {
      const z = u[P], q = f[H] = O ? Tt(f[H]) : dt(f[H]);
      if (xn(z, q))
        L(
          z,
          q,
          m,
          null,
          g,
          T,
          w,
          C,
          O
        );
      else
        break;
      P--, H--;
    }
    if (y > P) {
      if (y <= H) {
        const z = H + 1, q = z < j ? f[z].el : v;
        for (; y <= H; )
          L(
            null,
            f[y] = O ? Tt(f[y]) : dt(f[y]),
            m,
            q,
            g,
            T,
            w,
            C,
            O
          ), y++;
      }
    } else if (y > H)
      for (; y <= P; )
        Ye(u[y], g, T, !0), y++;
    else {
      const z = y, q = y, ee = /* @__PURE__ */ new Map();
      for (y = q; y <= H; y++) {
        const ve = f[y] = O ? Tt(f[y]) : dt(f[y]);
        ve.key != null && ee.set(ve.key, y);
      }
      let Q, he = 0;
      const ge = H - q + 1;
      let De = !1, He = 0;
      const qe = new Array(ge);
      for (y = 0; y < ge; y++) qe[y] = 0;
      for (y = z; y <= P; y++) {
        const ve = u[y];
        if (he >= ge) {
          Ye(ve, g, T, !0);
          continue;
        }
        let ze;
        if (ve.key != null)
          ze = ee.get(ve.key);
        else
          for (Q = q; Q <= H; Q++)
            if (qe[Q - q] === 0 && xn(ve, f[Q])) {
              ze = Q;
              break;
            }
        ze === void 0 ? Ye(ve, g, T, !0) : (qe[ze - q] = y + 1, ze >= He ? He = ze : De = !0, L(
          ve,
          f[ze],
          m,
          null,
          g,
          T,
          w,
          C,
          O
        ), he++);
      }
      const $t = De ? fc(qe) : pn;
      for (Q = $t.length - 1, y = ge - 1; y >= 0; y--) {
        const ve = q + y, ze = f[ve], Tn = f[ve + 1], En = ve + 1 < j ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : v;
        qe[y] === 0 ? L(
          null,
          ze,
          m,
          En,
          g,
          T,
          w,
          C,
          O
        ) : De && (Q < 0 || y !== $t[Q] ? _t(ze, m, En, 2) : Q--);
      }
    }
  }, _t = (u, f, m, v, g = null) => {
    const { el: T, type: w, transition: C, children: O, shapeFlag: y } = u;
    if (y & 6) {
      _t(u.component.subTree, f, m, v);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, v);
      return;
    }
    if (y & 64) {
      w.move(u, f, m, jt);
      return;
    }
    if (w === Te) {
      r(T, f, m);
      for (let P = 0; P < O.length; P++)
        _t(O[P], f, m, v);
      r(u.anchor, f, m);
      return;
    }
    if (w === ns) {
      Y(u, f, m);
      return;
    }
    if (v !== 2 && y & 1 && C)
      if (v === 0)
        C.persisted && !T[Qr] ? r(T, f, m) : (C.beforeEnter(T), r(T, f, m), $e(() => C.enter(T), g));
      else {
        const { leave: P, delayLeave: H, afterLeave: z } = C, q = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, ee = () => {
          const Q = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), C.persisted && !Q ? q() : P(T, () => {
            q(), z && z();
          });
        };
        H ? H(T, q, ee) : ee();
      }
    else
      r(T, f, m);
  }, Ye = (u, f, m, v = !1, g = !1) => {
    const {
      type: T,
      props: w,
      ref: C,
      children: O,
      dynamicChildren: y,
      shapeFlag: j,
      patchFlag: P,
      dirs: H,
      cacheIndex: z,
      memo: q
    } = u;
    if (P === -2 && (g = !1), C != null && (xt(), Ln(C, null, m, u, !0), wt()), z != null && (f.renderCache[z] = void 0), j & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const ee = j & 1 && H, Q = !Fn(u);
    let he;
    if (Q && (he = w && w.onVnodeBeforeUnmount) && ct(he, f, u), j & 6)
      Lr(u.component, m, v);
    else {
      if (j & 128) {
        u.suspense.unmount(m, v);
        return;
      }
      ee && zt(u, null, f, "beforeUnmount"), j & 64 ? u.type.remove(
        u,
        f,
        m,
        jt,
        v
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Te || P > 0 && P & 64) ? kt(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === Te && P & 384 || !g && j & 16) && kt(O, f, m), v && Gn(u);
    }
    const ge = q != null && z == null;
    (Q && (he = w && w.onVnodeUnmounted) || ee || ge) && $e(() => {
      he && ct(he, f, u), ee && zt(u, null, f, "unmounted"), ge && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: f, el: m, anchor: v, transition: g } = u;
    if (f === Te) {
      ue(m, v);
      return;
    }
    if (f === ns) {
      N(u);
      return;
    }
    const T = () => {
      s(m), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (u.shapeFlag & 1 && g && !g.persisted) {
      const { leave: w, delayLeave: C } = g, O = () => w(m, T);
      C ? C(u.el, T, O) : O();
    } else
      T();
  }, ue = (u, f) => {
    let m;
    for (; u !== f; )
      m = A(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: v, scope: g, job: T, subTree: w, um: C, m: O, a: y } = u;
    Si(O), Si(y), v && cr(v), g.stop(), T && (T.flags |= 8, Ye(w, u, f, m)), C && $e(C, f), $e(() => {
      u.isUnmounted = !0;
    }, f);
  }, kt = (u, f, m, v = !1, g = !1, T = 0) => {
    for (let w = T; w < u.length; w++)
      Ye(u[w], f, m, v, g);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = A(u.anchor || u.el), m = f && f[wa];
    return m ? A(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let v;
    u == null ? f._vnode && (Ye(f._vnode, null, null, !0), v = f._vnode.component) : L(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(v), Mo(), yn = !1);
  }, jt = {
    p: L,
    um: Ye,
    m: _t,
    r: Gn,
    mt: tn,
    mc: b,
    pc: se,
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
  if (B(r) && B(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Tt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Nr && (l.patchFlag === -1 && (l = s[i] = Tt(l)), l.el = o.el), l.type === Ot && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Zt = [];
let Ge = null;
function X(e = !1) {
  Zt.push(Ge = e ? null : []);
}
function ol() {
  Zt.pop(), Ge = Zt[Zt.length - 1] || null;
}
let $n = 1;
function vi(e, t = !1) {
  $n += e, e < 0 && Ge && t && (Ge.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? Ge || pn : null, ol(), $n > 0 && Ge && Ge.push(e), e;
}
function Z(e, t, n, r, s, i) {
  return ll(
    R(
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
    At(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || /* @__PURE__ */ Ue(e) || J(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function R(e, t = null, n = null, r = 0, s = null, i = e === Te ? 0 : 1, o = !1, l = !1) {
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
    ctx: Je
  };
  return l ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= _e(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ge.push(c), c;
}
const At = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Ot), al(e)) {
    const l = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(l, n), $n > 0 && !i && Ge && (l.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = l : Ge.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !_e(l) && (t.class = Rs(l)), le(c) && (/* @__PURE__ */ Ls(c) && !B(c) && (c = Ie({}, c)), t.style = Os(c));
  }
  const o = _e(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : le(e) ? 4 : J(e) ? 2 : 0;
  return R(
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Ie({}, e) : e : null;
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
      n && i ? B(i) ? i.concat(fr(t)) : [i, fr(t)] : fr(t)
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
    patchFlag: t && e.type !== Te ? o === -1 ? 16 : o | 16 : o,
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
function Ce(e = " ", t = 0) {
  return At(Nr, null, e, t);
}
function at(e = "", t = !1) {
  return t ? (X(), pc(Ot, null, e)) : At(Ot, null, e);
}
function dt(e) {
  return e == null || typeof e == "boolean" ? At(Ot) : B(e) ? At(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? Tt(e) : At(Nr, null, String(e));
}
function Tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (J(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Je }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Ce(t)]) : n = 8;
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
        o && i !== o && !(B(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !vr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function ct(e, t, n, r = null) {
  rt(e, t, 7, [
    n,
    r
  ]);
}
const _c = Wo();
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
    scope: new Kl(
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
    emitsOptions: Ko(r, s),
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
let Fe = null;
const Tc = () => Fe || Je;
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
    (n) => Fe = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Kn = (e) => {
  const t = Fe;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, Ai = () => {
  Fe && Fe.scope.off(), yr(null);
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
    xt();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Kn(e), o = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (wt(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
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
  e.render || (e.render = r.render || pt);
  {
    const s = Kn(e);
    xt();
    try {
      Va(e);
    } finally {
      wt(), s();
    }
  }
}
const vc = {
  get(e, t) {
    return Re(e, "get", ""), e[t];
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
const We = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", yt = typeof document < "u" ? document : null, Ci = yt && /* @__PURE__ */ yt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? yt.createElementNS(Cc, e) : t === "mathml" ? yt.createElementNS(Oc, e) : n ? yt.createElement(e, { is: n }) : yt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => yt.createTextNode(e),
  createComment: (e) => yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yt.querySelector(e),
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
  const r = e.style, s = _e(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (_e(t))
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
        !_e(t) && t ? t[o] : void 0,
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
  if (B(n))
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
  let r = et(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _e(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ht(n) ? String(n) : n
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
function Hc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ni = /* @__PURE__ */ Symbol("_vei");
function kc(e, t, n, r, s = null) {
  const i = e[Ni] || (e[Ni] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Vc(t);
    if (r) {
      const h = i[t] = Wc(
        r,
        s
      );
      Yt(e, l, h, c);
    } else o && (Hc(e, l, o, c), i[t] = void 0);
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
const zc = /* @__PURE__ */ Promise.resolve(), Bc = () => ss || (zc.then(() => ss = 0), ss = Date.now());
function Wc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (B(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const h = o[c];
        h && rt(
          h,
          t,
          5,
          l
        );
      }
    } else
      rt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Bc(), n;
}
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? vr(t) || kc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !_e(r))) ? Di(e, et(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && _e(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = et(t);
  return Array.isArray(n) ? n.some((s) => et(s) === r) : Object.keys(n).some((s) => et(s) === r);
}
const Tr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => cr(t, n) : t;
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
}, Pt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Yt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Qt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? B(o) ? s.slice() : s : o
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
  if (!n || B(e)) return Lt(e, t);
  if (Qt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = B(t);
  if (!(n && !r && !Qt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Wl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Lt(Er(o), t)) {
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
const Jc = /* @__PURE__ */ Ie({ patchProp: Kc }, Rc);
let Hi;
function Zc() {
  return Hi || (Hi = ac(Jc));
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
  return _e(e) ? document.querySelector(e) : e;
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
function ki(e, t) {
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
    if (typeof e == "string") return ki(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ki(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let Se = Object.freeze, Ae = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, vs = hl.apply, As = hl.construct;
Se || (Se = function(t) {
  return t;
});
Ae || (Ae = function(t) {
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
const Gt = Ee(Array.prototype.forEach), fu = Ee(Array.prototype.lastIndexOf), $i = Ee(Array.prototype.pop), wn = Ee(Array.prototype.push), du = Ee(Array.prototype.splice), gn = Array.isArray, Pn = Ee(String.prototype.toLowerCase), os = Ee(String.prototype.toString), Vi = Ee(String.prototype.match), Cn = Ee(String.prototype.replace), zi = Ee(String.prototype.indexOf), pu = Ee(String.prototype.trim), hu = Ee(Number.prototype.toString), mu = Ee(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : Ee(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : Ee(Symbol.prototype.toString), Ve = Ee(Object.prototype.hasOwnProperty), On = Ee(Object.prototype.toString), Oe = Ee(RegExp.prototype.test), Wt = gu(TypeError);
function Ee(e) {
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
    Ve(e, t) || (e[t] = null);
  return e;
}
function Ke(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    Ve(e, s) && (gn(i) ? t[s] = _u(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = Ke(i) : t[s] = i);
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
      return Bi ? Bi(e) : "0";
    case "symbol":
      return Wi ? Wi(e) : "Symbol()";
    case "undefined":
      return On(e);
    case "function":
    case "object": {
      if (e === null)
        return On(e);
      const t = e, n = Qe(t, "toString");
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
function Qe(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return Ee(r.get);
      if (typeof r.value == "function")
        return Ee(r.value);
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
    return Oe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ki = Se(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Se(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Se(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Se(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Se(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Se(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = Se(["#text"]), Yi = Se(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Se(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Se(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Se(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ae(/{{[\w\W]*|^[\w\W]*}}/g), vu = Ae(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ae(/\${[\w\W]*/g), xu = Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ae(/^aria-[\-\w]+$/), Xi = Ae(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ae(/^(?:\w+script|data):/i), Ou = Ae(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ae(/^html$/i), Iu = Ae(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ae(/<[/\w!]/g), Zi = Ae(/<[/\w]/g), Pu = Ae(/<\/no(script|embed|frames)/i), Du = Ae(/\/>/i), Be = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = Se(re({}, ml)), Mu = (function() {
  const e = {};
  return Gt(ml, (t) => {
    e[t] = Ae(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Se(e);
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
  return Ve(t, n) && gn(t[n]) ? re(s.base ? Ke(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = Ve(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? Ke(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (x) => gl(x);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Be.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, _ = e.trustedTypes, A = l.prototype, S = Qe(A, "cloneNode"), $ = Qe(A, "remove"), L = Qe(A, "nextSibling"), K = Qe(A, "childNodes"), k = Qe(A, "parentNode"), G = Qe(A, "shadowRoot"), Y = Qe(A, "attributes"), N = o && o.prototype ? Qe(o.prototype, "nodeType") : null, te = o && o.prototype ? Qe(o.prototype, "nodeName") : null, ne = o && o.prototype ? Qe(o.prototype, "ownerDocument") : null, F = function(a) {
    return N ? N(a) : a.nodeType;
  }, b = function(a) {
    return te ? te(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const x = n.createElement("template");
    x.content && x.content.ownerDocument && (n = x.content.ownerDocument);
  }
  let ce, Pe = "", mt, Ut = !1, st = 0;
  const tn = function() {
    if (st > 0)
      throw Wt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, gt = function(a) {
    tn(), st++;
    try {
      return ce.createHTML(a);
    } finally {
      st--;
    }
  }, xe = function(a) {
    tn(), st++;
    try {
      return ce.createScriptURL(a);
    } finally {
      st--;
    }
  }, pe = function() {
    return Ut || (mt = Fu(_, s), Ut = !0), mt;
  }, se = n, Ze = se.implementation, Ht = se.createNodeIterator, _t = se.createDocumentFragment, Ye = se.getElementsByTagName, Gn = r.importNode;
  let ue = Qi();
  t.isSupported = typeof pl == "function" && typeof k == "function" && Ze && Ze.createHTMLDocument !== void 0;
  const Lr = Su, kt = vu, nn = Au, yn = xu, Yn = wu, jt = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const v = re({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let g = null;
  const T = re({}, [...Yi, ...us, ...qi, ...ar]);
  let w = Object.seal(dn(null, {
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
  })), C = null, O = null;
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
  let j = !0, P = !0, H = !1, z = !0, q = !1, ee = !0, Q = !1, he = !1, ge = null, De = null, He = !1, qe = !1, $t = !1, ve = !1, ze = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, Hr = !1, rn = {}, sn = null;
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
  let Bs = null;
  const Ws = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let on = it, kr = !1, jr = null;
  const bl = re({}, [qn, Xn, it], os), Ks = Se(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = re({}, Ks);
  const Gs = Se(["annotation-xml"]);
  let Vr = re({}, Gs);
  const yl = re({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let be = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = Ke(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, be = Sn === "application/xhtml+xml" ? os : Pn, m = Dt(a, "ALLOWED_TAGS", v, {
      transform: be
    }), g = Dt(a, "ALLOWED_ATTR", T, {
      transform: be
    }), jr = Dt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Bs = Dt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: be,
      base: Ws
    }), Vs = Dt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: be,
      base: zs
    }), sn = Dt(a, "FORBID_CONTENTS", $s, {
      transform: be
    }), C = Dt(a, "FORBID_TAGS", Ke({}), {
      transform: be
    }), O = Dt(a, "FORBID_ATTR", Ke({}), {
      transform: be
    }), rn = Ve(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? Ke(a.USE_PROFILES) : a.USE_PROFILES : !1, j = a.ALLOW_ARIA_ATTR !== !1, P = a.ALLOW_DATA_ATTR !== !1, H = a.ALLOW_UNKNOWN_PROTOCOLS || !1, z = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = a.SAFE_FOR_TEMPLATES || !1, ee = a.SAFE_FOR_XML !== !1, Q = a.WHOLE_DOCUMENT || !1, qe = a.RETURN_DOM || !1, $t = a.RETURN_DOM_FRAGMENT || !1, ve = a.RETURN_TRUSTED_TYPE || !1, He = a.FORCE_BODY || !1, ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : it, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => re({}, Ks)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => re({}, Gs)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (w = dn(null), Ve(p, "tagNameCheck") && Ys(p.tagNameCheck) && (w.tagNameCheck = p.tagNameCheck), Ve(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (w.attributeNameCheck = p.attributeNameCheck), Ve(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ae(w), q && (P = !1), $t && (qe = !0), rn && (m = re({}, Gi), g = dn(null), rn.html === !0 && (re(m, Ki), re(g, Yi)), rn.svg === !0 && (re(m, ls), re(g, us), re(g, ar)), rn.svgFilters === !0 && (re(m, as), re(g, us), re(g, ar)), rn.mathMl === !0 && (re(m, cs), re(g, qi), re(g, ar))), y.tagCheck = null, y.attributeCheck = null, Ve(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === v && (m = Ke(m)), re(m, a.ADD_TAGS, be))), Ve(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (g === T && (g = Ke(g)), re(g, a.ADD_ATTR, be))), Ve(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = Ke(sn)), re(sn, a.ADD_FORBID_CONTENTS, be)), Ur && (m["#text"] = !0), Q && re(m, ["html", "head", "body"]), m.table && (re(m, ["tbody"]), delete C.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = ce;
      ce = a.TRUSTED_TYPES_POLICY;
      try {
        Pe = gt("");
      } catch (D) {
        throw ce = E, D;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ce = void 0, Pe = "") : (ce === void 0 && (ce = pe()), ce && typeof Pe == "string" && (Pe = gt("")));
    Se && Se(a), ln = a;
  }, qs = re({}, [...ls, ...as, ...Tu]), Xs = re({}, [...cs, ...Eu]), vl = function(a, p, E) {
    return p.namespaceURI === it ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, Al = function(a, p, E) {
    return p.namespaceURI === it ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = k(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = Pn(a.tagName), D = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? vl(E, p, D) : a.namespaceURI === qn ? Al(E, p, D) : a.namespaceURI === it ? xl(E, p, D) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, It = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      k(a).removeChild(a);
    } catch {
      if ($(a), !k(a))
        throw Wt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
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
    const p = K(a);
    if (p) {
      const D = [];
      Gt(p, (U) => {
        wn(D, U);
      }), Gt(D, (U) => {
        try {
          $(U);
        } catch {
        }
      });
    }
    const E = Y(a);
    if (E)
      for (let D = E.length - 1; D >= 0; --D) {
        const U = E[D], W = U && U.name;
        typeof W == "string" && Js(a, U, W);
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
      if (qe || $t)
        try {
          It(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const p = Y(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const D = p[E], U = D && D.name;
        typeof U != "string" || g[be(U)] || Js(a, D, U);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      F(E) === Be.element && Cl(E);
      const U = K(E);
      if (U)
        for (let W = U.length - 1; W >= 0; --W)
          p.push(U[W]);
    }
  }, Zs = function(a, p) {
    return ee ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!ee)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), D = F(E);
      if (D === Be.processingInstruction || D === Be.comment && Oe(Zi, E.data)) {
        try {
          $(E);
        } catch {
        }
        continue;
      }
      if (D === Be.element) {
        const W = E, fe = be(b(E));
        try {
          W.hasAttribute && W.hasAttribute("patchsrc") && W.removeAttribute("patchsrc"), W.hasAttribute && W.hasAttribute("for") && Zs("for", fe) && W.removeAttribute("for");
        } catch {
        }
      }
      const U = K(E);
      if (U)
        for (let W = U.length - 1; W >= 0; --W)
          p.push(U[W]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (He)
      a = "<remove></remove>" + a;
    else {
      const W = Vi(a, /^[\r\n\t ]+/);
      E = W && W[0];
    }
    Sn === "application/xhtml+xml" && on === it && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const D = ce ? gt(a) : a;
    if (on === it)
      try {
        p = new d().parseFromString(D, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Ze.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Pe : D;
      } catch {
      }
    }
    const U = p.body || p.documentElement;
    return a && E && U.insertBefore(n.createTextNode(E), U.childNodes[0] || null), on === it ? Ye.call(p, Q ? "html" : "body")[0] : Q ? p.documentElement : U;
  }, ei = function(a) {
    const p = ne ? ne(a) : a.ownerDocument;
    return Ht.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, kt, " "), a = Cn(a, nn, " "), a;
  }, Br = function(a) {
    var p;
    a.normalize();
    const E = ne ? ne(a) : a.ownerDocument, D = Ht.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let U = D.nextNode();
    for (; U; )
      U.data = Qn(U.data), U = D.nextNode();
    const W = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    W && Gt(W, (fe) => {
      an(fe.content) && Br(fe.content);
    });
  }, er = function(a) {
    const p = te ? te(a) : null;
    return typeof p != "string" || be(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== Y(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== N(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== K(a);
  }, an = function(a) {
    if (!N || typeof a != "object" || a === null)
      return !1;
    try {
      return N(a) === Be.documentFragment;
    } catch {
      return !1;
    }
  }, vn = function(a) {
    if (!N || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof N(a) == "number";
    } catch {
      return !1;
    }
  };
  function ot(x, a, p) {
    x.length !== 0 && Gt(x, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(ee && a.hasChildNodes() && !vn(a.firstElementChild) && Oe(Ji, a.textContent) && Oe(Ji, a.innerHTML) || ee && a.namespaceURI === it && Nu[p] && (vn(a.firstElementChild) || typeof a.textContent == "string" && Oe(Mu[p], a.textContent)) || a.nodeType === Be.processingInstruction || ee && a.nodeType === Be.comment && Oe(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Oe(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, D = new Array(E > 2 ? E - 2 : 0), U = 2; U < E; U++)
        D[U - 2] = arguments[U];
      return !!a(p, ...D);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!C[p] && ii(p) && tr(w.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const D = k(a), U = K(a);
      if (U && D) {
        const W = U.length;
        for (let fe = W - 1; fe >= 0; --fe) {
          const me = a === E ? S(U[fe], !0) : U[fe];
          D.insertBefore(me, L(a));
        }
      }
    }
    return It(a), !0;
  }, ti = function(a, p, E, D) {
    return a.length === 0 ? p : p === E || p === D ? Ke(p) : p;
  }, ni = function(a, p) {
    return a === p || k(a) !== null ? !1 : (Hr && Zn(a), !0);
  }, ri = function(a, p) {
    if (ot(ue.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return It(a), !0;
    const E = be(b(a));
    if (m = ti(ue.uponSanitizeElement, m, v, ge), ot(ue.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return It(a), !0;
    if (C[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const U = Il(a, E, p);
      return U === !1 && ot(ue.afterSanitizeElements, a, null), U;
    }
    if (F(a) === Be.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Oe(Pu, a.innerHTML))
      return It(a), !0;
    if (q && a.nodeType === Be.text) {
      const U = Qn(a.textContent);
      a.textContent !== U && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = U);
    }
    return ot(ue.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (O[p] || Zs(p, a) || ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const D = g[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return P && Oe(yn, p) || j && Oe(Yn, p) ? !0 : D ? Bs[p] || Oe(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || H && !Oe(jt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(w.tagNameCheck, a) && tr(w.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && w.allowCustomizedBuiltInElements && tr(w.tagNameCheck, E)
    );
  }, Pl = re({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Oe(u, a);
  }, Dl = function(a, p, E, D) {
    if (ce && typeof _ == "object" && typeof _.getAttributeType == "function" && !E)
      switch (_.getAttributeType(a, p)) {
        case "TrustedHTML":
          return gt(D);
        case "TrustedScriptURL":
          return xe(D);
      }
    return D;
  }, Nl = function(a, p, E, D) {
    try {
      E ? a.setAttributeNS(E, p, D) : a.setAttribute(p, D), er(a) ? It(a) : $i(t.removed);
    } catch {
      Vt(p, a);
    }
  }, oi = function(a) {
    ot(ue.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    g = ti(ue.uponSanitizeAttribute, g, T, De);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: g,
      forceKeepAttr: void 0
    };
    let D = p.length;
    const U = be(a.nodeName);
    for (; D--; ) {
      const W = p[D], fe = W.name, me = W.namespaceURI, ke = W.value, je = be(fe), Kr = ke;
      let Ne = fe === "value" ? Kr : pu(Kr);
      if (E.attrName = je, E.attrValue = Ne, E.keepAttr = !0, E.forceKeepAttr = void 0, ot(ue.uponSanitizeAttribute, a, E), Ne = E.attrValue, Tn && (je === "id" || je === "name") && zi(Ne, En) !== 0 && (Vt(fe, a, W), Ne = En + Ne), ee && Oe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ne)) {
        Vt(fe, a, W);
        continue;
      }
      if (je === "attributename" && Vi(Ne, "href")) {
        Vt(fe, a, W);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          Vt(fe, a, W);
          continue;
        }
        if (!z && Oe(Du, Ne)) {
          Vt(fe, a, W);
          continue;
        }
        if (q && (Ne = Qn(Ne)), !si(U, je, Ne)) {
          Vt(fe, a, W);
          continue;
        }
        Ne = Dl(U, je, me, Ne), Ne !== Kr && Nl(a, fe, me, Ne);
      }
    }
    ot(ue.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (ot(ue.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (ot(ue.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), F(p) === Be.element) {
        const D = G(p);
        an(D) && (Wr(D), nr(D));
      }
    ot(ue.afterSanitizeShadowDOM, a, null);
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
      const D = E.node, W = F(D) === Be.element, fe = K(D);
      if (fe)
        for (let me = fe.length - 1; me >= 0; --me)
          p.push({
            node: fe[me],
            shadow: null
          });
      if (W) {
        const me = te ? te(D) : null;
        if (typeof me == "string" && be(me) === "template") {
          const ke = D.content;
          an(ke) && p.push({
            node: ke,
            shadow: null
          });
        }
      }
      if (W) {
        const me = G(D);
        an(me) && p.push({
          node: null,
          shadow: me
        }, {
          node: me,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(x) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, D = null, U = null;
    if (kr = !x, kr && (x = "<!-->"), typeof x != "string" && !vn(x) && (x = bu(x), typeof x != "string"))
      throw Wt("dirty is not a string, aborting");
    if (!t.isSupported)
      return x;
    he ? (m = ge, g = De) : zr(a), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (m = Ke(m)), ue.uponSanitizeAttribute.length > 0 && (g = Ke(g)), t.removed = [];
    const W = Hr && typeof x != "string" && vn(x);
    if (W) {
      Ol(x);
      const ke = b(x);
      if (typeof ke == "string") {
        const je = be(ke);
        if (!m[je] || C[je])
          throw Jn(x), Wt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(x))
        throw Jn(x), Wt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(x);
      } catch (je) {
        throw Jn(x), je;
      }
    } else if (vn(x))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(x, !0), E.nodeType === Be.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Wr(E);
    else {
      if (!qe && !q && !Q && // eslint-disable-next-line unicorn/prefer-includes
      x.indexOf("<") === -1)
        return ce && ve ? gt(x) : x;
      if (p = Qs(x), !p)
        return qe ? null : ve ? Pe : "";
    }
    p && He && It(p.firstChild);
    const fe = W ? x : p;
    try {
      const ke = ei(fe);
      for (; D = ke.nextNode(); )
        ri(D, fe), oi(D), an(D.content) && nr(D.content);
    } catch (ke) {
      throw W && (Jn(x), Gt(t.removed, (je) => {
        je.element && Zn(je.element);
      })), ke;
    }
    if (W)
      return Gt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      }), q && Br(x), x;
    if (qe) {
      if (q && Br(p), $t)
        for (U = _t.call(p.ownerDocument); p.firstChild; )
          U.appendChild(p.firstChild);
      else
        U = p;
      return (g.shadowroot || g.shadowrootmode) && (U = Gn.call(r, U, !0)), U;
    }
    let me = Q ? p.outerHTML : p.innerHTML;
    return Q && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Oe(Ru, p.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + me), q && (me = Qn(me)), ce && ve ? gt(me) : me;
  }, t.setConfig = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(x), he = !0, ge = m, De = g;
  }, t.clearConfig = function() {
    ln = null, he = !1, ge = null, De = null, ce = mt, Pe = "";
  }, t.isValidAttribute = function(x, a, p) {
    ln || zr({});
    const E = be(x), D = be(a);
    return si(E, D, p);
  }, t.addHook = function(x, a) {
    typeof a == "function" && Ve(ue, x) && wn(ue[x], a);
  }, t.removeHook = function(x, a) {
    if (Ve(ue, x)) {
      if (a !== void 0) {
        const p = fu(ue[x], a);
        return p === -1 ? void 0 : du(ue[x], p, 1)[0];
      }
      return $i(ue[x]);
    }
  }, t.removeHooks = function(x) {
    Ve(ue, x) && (ue[x] = []);
  }, t.removeAllHooks = function() {
    ue = Qi();
  }, t;
}
var Uu = gl();
function Hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds, eo;
function ku() {
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
var ju = ku();
const to = /* @__PURE__ */ Hu(ju);
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
function I(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (L) => L, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, _ = (L) => typeof L == "string" || typeof L == "number", A = (L, K, k) => L.replace(/%n/g, "" + k).replace(/{([^{}]*)}/g, (G, Y) => {
    if (K === void 0 || !(Y in K))
      return d(G);
    const N = K[Y];
    return _(N) ? d(`${N}`) : typeof N == "object" && _(N.value) ? (N.escape !== !1 ? to : c)(`${N.value}`) : d(G);
  });
  let $ = (s?.bundle ?? $u(e)).translations[t] || t;
  return $ = Array.isArray($) ? $[0] : $, h(typeof i == "object" || o !== void 0 ? A(
    $,
    i,
    o
  ) : $);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Ku = ["aria-label"], Gu = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "title" }, cf = { value: "recent" }, uf = { value: "publicationDate" }, ff = { value: "publication" }, df = { value: "format" }, pf = ["value"], hf = ["value"], mf = ["aria-label"], gf = ["aria-label"], _f = ["aria-label"], bf = ["href", "aria-label"], yf = ["aria-label"], Tf = ["href"], Ef = {
  key: 1,
  class: "library-muted"
}, Sf = ["href"], vf = {
  key: 3,
  class: "library-muted"
}, Af = {
  key: 1,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, xf = { id: "library-periodical-groups-heading" }, wf = { class: "library-muted" }, Cf = ["href"], Of = { class: "library-muted" }, Rf = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, If = { id: "library-periodical-groups-empty-heading" }, Pf = { class: "library-muted" }, Df = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Nf = { class: "library-muted" }, Mf = {
  key: 4,
  class: "library-cover-gallery"
}, Lf = ["href", "aria-label"], Ff = ["src", "alt"], Uf = { class: "library-cover-summary" }, Hf = { class: "library-cover-primary" }, kf = ["href"], jf = { class: "library-cover-details" }, $f = ["aria-label"], Vf = { class: "library-cover-meta" }, zf = {
  key: 0,
  class: "library-creator"
}, Bf = { class: "library-muted" }, Wf = { key: 0 }, Kf = { key: 1 }, Gf = { key: 2 }, Yf = { key: 3 }, qf = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, Xf = { key: 0 }, Jf = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Zf = {
  key: 0,
  class: "library-muted"
}, Qf = { class: "library-cover-actions" }, ed = ["href"], td = ["href"], nd = ["href"], rd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, sd = { class: "library-hero-actions" }, id = ["href"], od = ["href"], ld = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = We(() => t.state.items || []), i = We(() => t.state.shelves || []), o = We(() => t.state.formats || []), l = We(() => t.state.publications || []), c = We(() => t.state.publicationSummaries || []), h = We(() => t.state.publicationYears || []), d = We(() => t.state.creators || []), _ = We(() => t.state.scanStatuses || []), A = We(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), S = /* @__PURE__ */ Or({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      publication: t.state.activeFilters?.publication || "",
      year: t.state.activeFilters?.year || "",
      creator: t.state.activeFilters?.creator || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), $ = We(() => t.state.settingsUrl || ""), L = We(() => t.state.metadataExportUrl || ""), K = {
      q: "Search",
      type: "Type",
      publication: "Series / periodical",
      year: "Publication year",
      creator: "Creator",
      format: "Format",
      tag: "Nextcloud tag",
      shelf: "Shelf",
      status: "Scan status"
    }, k = We(() => Object.entries(K).map(([ne, F]) => ({ key: ne, label: F, value: S[ne] || "" })).filter((ne) => String(ne.value).trim() !== ""));
    function G(ne) {
      const F = new URLSearchParams(window.location.search);
      F.delete(ne), F.delete("page");
      const b = F.toString();
      return b ? `?${b}` : "?";
    }
    function Y(ne) {
      return String(ne || "").toUpperCase();
    }
    function N(ne) {
      return ne.nextcloudTags || [];
    }
    function te(ne) {
      const F = new URLSearchParams(window.location.search);
      return F.set("publication", ne), F.set("sort", "publication"), F.delete("page"), `?${F.toString()}`;
    }
    return (ne, F) => (X(), Z("div", Vu, [
      R("section", zu, [
        R("h2", Bu, M(V(I)("library", "Publication catalogue")), 1),
        R("p", Wu, M(V(I)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        R("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": V(I)("library", "Catalogue search and filters")
        }, [
          R("label", null, [
            Ce(M(V(I)("library", "Search title / author")) + " ", 1),
            lt(R("input", {
              "onUpdate:modelValue": F[0] || (F[0] = (b) => S.q = b),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, S.q]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Type")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[1] || (F[1] = (b) => S.type = b),
              name: "type"
            }, [
              R("option", Gu, M(V(I)("library", "All types")), 1),
              (X(), Z(Te, null, Xe(n, (b) => R("option", {
                key: b,
                value: b
              }, M(b), 9, Yu)), 64))
            ], 512), [
              [Pt, S.type]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Series / periodical")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[2] || (F[2] = (b) => S.publication = b),
              name: "publication"
            }, [
              R("option", qu, M(V(I)("library", "All series and periodicals")), 1),
              (X(!0), Z(Te, null, Xe(l.value, (b) => (X(), Z("option", {
                key: b,
                value: b
              }, M(b), 9, Xu))), 128))
            ], 512), [
              [Pt, S.publication]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Publication year")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[3] || (F[3] = (b) => S.year = b),
              name: "year"
            }, [
              R("option", Ju, M(V(I)("library", "All years")), 1),
              (X(!0), Z(Te, null, Xe(h.value, (b) => (X(), Z("option", {
                key: b,
                value: b
              }, M(b), 9, Zu))), 128))
            ], 512), [
              [Pt, S.year]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Creator")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[4] || (F[4] = (b) => S.creator = b),
              name: "creator",
              title: "Exact full-field creator matches only"
            }, [
              R("option", Qu, M(V(I)("library", "All creators")), 1),
              (X(!0), Z(Te, null, Xe(d.value, (b) => (X(), Z("option", {
                key: b,
                value: b
              }, M(b), 9, ef))), 128))
            ], 512), [
              [Pt, S.creator]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Nextcloud tag")) + " ", 1),
            lt(R("input", {
              "onUpdate:modelValue": F[5] || (F[5] = (b) => S.tag = b),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, S.tag]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Format")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[6] || (F[6] = (b) => S.format = b),
              name: "format"
            }, [
              R("option", tf, M(V(I)("library", "All formats")), 1),
              (X(!0), Z(Te, null, Xe(o.value, (b) => (X(), Z("option", {
                key: b,
                value: b
              }, M(Y(b)), 9, nf))), 128))
            ], 512), [
              [Pt, S.format]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Shelf")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[7] || (F[7] = (b) => S.shelf = b),
              name: "shelf"
            }, [
              R("option", rf, M(V(I)("library", "All shelves")), 1),
              (X(!0), Z(Te, null, Xe(i.value, (b) => (X(), Z("option", {
                key: b,
                value: b
              }, M(b), 9, sf))), 128))
            ], 512), [
              [Pt, S.shelf]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Scan status")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[8] || (F[8] = (b) => S.status = b),
              name: "status"
            }, [
              R("option", of, M(V(I)("library", "All scan statuses")), 1),
              (X(!0), Z(Te, null, Xe(_.value, (b) => (X(), Z("option", {
                key: b,
                value: b
              }, M(b), 9, lf))), 128))
            ], 512), [
              [Pt, S.status]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Sort")) + " ", 1),
            lt(R("select", {
              "onUpdate:modelValue": F[9] || (F[9] = (b) => S.sort = b),
              name: "sort"
            }, [
              R("option", af, M(V(I)("library", "Title")), 1),
              R("option", cf, M(V(I)("library", "Recently added")), 1),
              R("option", uf, M(V(I)("library", "Publication date")), 1),
              R("option", ff, M(V(I)("library", "Series / periodical")), 1),
              R("option", df, M(V(I)("library", "Format")), 1)
            ], 512), [
              [Pt, S.sort]
            ])
          ]),
          R("label", null, [
            Ce(M(V(I)("library", "Page size")) + " ", 1),
            R("select", {
              value: A.value.limit,
              name: "limit"
            }, [
              (X(), Z(Te, null, Xe(r, (b) => R("option", {
                key: b,
                value: b
              }, M(b), 9, hf)), 64))
            ], 8, pf)
          ]),
          R("button", {
            type: "submit",
            class: "button primary",
            "aria-label": V(I)("library", "Apply catalogue filters")
          }, M(V(I)("library", "Apply filters")), 9, mf),
          R("a", {
            href: "?",
            class: "button secondary",
            "aria-label": V(I)("library", "Clear catalogue filters")
          }, M(V(I)("library", "Clear")), 9, gf)
        ], 8, Ku),
        k.value.length > 0 ? (X(), Z("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": V(I)("library", "Active filters")
        }, [
          R("span", null, M(V(I)("library", "Active filters")), 1),
          (X(!0), Z(Te, null, Xe(k.value, (b) => (X(), Z("a", {
            key: b.key,
            href: G(b.key),
            class: "library-filter-chip",
            "aria-label": `${V(I)("library", "Remove filter")}: ${b.label}`
          }, [
            R("strong", null, M(b.label) + ":", 1),
            Ce(" " + M(b.value) + " ", 1),
            F[10] || (F[10] = R("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, bf))), 128))
        ], 8, _f)) : at("", !0),
        R("nav", {
          class: "library-pagination",
          "aria-label": V(I)("library", "Catalogue pagination")
        }, [
          R("span", null, "Showing " + M(A.value.from) + "–" + M(A.value.to) + " of " + M(A.value.total) + " catalogue items", 1),
          A.value.previousUrl ? (X(), Z("a", {
            key: 0,
            href: A.value.previousUrl
          }, M(V(I)("library", "Previous")), 9, Tf)) : (X(), Z("span", Ef, M(V(I)("library", "Previous")), 1)),
          A.value.nextUrl ? (X(), Z("a", {
            key: 2,
            href: A.value.nextUrl
          }, M(V(I)("library", "Next")), 9, Sf)) : (X(), Z("span", vf, M(V(I)("library", "Next")), 1))
        ], 8, yf),
        c.value.length > 0 ? (X(), Z("section", Af, [
          R("h3", xf, M(V(I)("library", "Top series and periodicals")), 1),
          R("p", wf, M(V(I)("library", "Jump into recurring publications with one click.")), 1),
          R("ul", null, [
            (X(!0), Z(Te, null, Xe(c.value, (b) => (X(), Z("li", {
              key: b.publication
            }, [
              R("a", {
                href: te(b.publication)
              }, M(b.publication), 9, Cf),
              R("span", Of, M(b.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (X(), Z("section", Rf, [
          R("h3", If, M(V(I)("library", "No series or periodicals found yet")), 1),
          R("p", Pf, M(V(I)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : at("", !0),
        s.value.length === 0 ? (X(), Z("div", Df, [
          R("h3", null, M(V(I)("library", "No catalogue items match")), 1),
          R("p", Nf, M(V(I)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (X(), Z("div", Mf, [
          (X(!0), Z(Te, null, Xe(s.value, (b) => (X(), Z("article", {
            key: b.id,
            class: "library-cover-card"
          }, [
            R("a", {
              class: "library-cover-link",
              href: b.openUrl,
              "aria-label": `Read ${b.title}`
            }, [
              R("img", {
                class: "library-cover-image",
                src: b.coverUrl,
                alt: `Cover for ${b.title}`,
                loading: "lazy"
              }, null, 8, Ff)
            ], 8, Lf),
            R("div", Uf, [
              R("div", Hf, [
                R("h3", null, M(b.title), 1),
                R("a", {
                  class: "library-cover-read",
                  href: b.openUrl
                }, M(V(I)("library", "Read")), 9, kf)
              ]),
              R("details", jf, [
                R("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${V(I)("library", "Show details and actions")}: ${b.title}`
                }, M(V(I)("library", "Details")), 9, $f),
                R("div", Vf, [
                  b.creators ? (X(), Z("p", zf, M(b.creators), 1)) : at("", !0),
                  R("p", Bf, [
                    R("span", null, M(b.publicationType), 1),
                    b.publication ? (X(), Z("span", Wf, " · " + M(b.publication), 1)) : at("", !0),
                    b.publicationDate ? (X(), Z("span", Kf, " · " + M(b.publicationDate), 1)) : at("", !0),
                    b.extension ? (X(), Z("span", Gf, " · Format: " + M(Y(b.extension)), 1)) : at("", !0),
                    b.shelf ? (X(), Z("span", Yf, " · Shelf: " + M(b.shelf), 1)) : at("", !0)
                  ]),
                  b.scanStatus !== "indexed" || b.scanError ? (X(), Z("p", qf, [
                    Ce(" scanStatus: " + M(b.scanStatus || "unknown"), 1),
                    b.scanError ? (X(), Z("span", Xf, " · scanError: " + M(b.scanError), 1)) : at("", !0)
                  ])) : at("", !0),
                  R("div", Jf, [
                    N(b).length === 0 ? (X(), Z("span", Zf, "No Nextcloud tags")) : (X(!0), Z(Te, { key: 1 }, Xe(N(b), (ce) => (X(), Z("span", {
                      key: ce.id,
                      class: "library-tag"
                    }, M(ce.name), 1))), 128))
                  ]),
                  R("p", Qf, [
                    R("a", {
                      href: b.filesUrl
                    }, M(V(I)("library", "Show in Files")), 9, ed),
                    F[11] || (F[11] = Ce(" · ", -1)),
                    R("a", {
                      href: b.downloadUrl
                    }, M(V(I)("library", "Download source")), 9, td),
                    F[12] || (F[12] = Ce(" · ", -1)),
                    R("a", {
                      href: b.detailsUrl
                    }, M(V(I)("library", "Details")), 9, nd)
                  ])
                ])
              ])
            ])
          ]))), 128))
        ]))
      ]),
      R("section", rd, [
        F[13] || (F[13] = R("div", null, [
          R("h2", null, "Library"),
          R("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        R("div", sd, [
          R("a", {
            href: $.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, id),
          L.value ? (X(), Z("a", {
            key: 0,
            href: L.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, od)) : at("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function ye(e) {
  return String(e ?? "");
}
function _l(e) {
  return ye(e).toUpperCase();
}
function ad(e, t, n, r = ye) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ye(s), i.textContent = r(s), ye(s) === ye(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ye(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function un(e, t, n, r, s, i, o = ye) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), ad(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function cd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", I("library", "Catalogue search and filters")), so(r, I("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, I("library", "Type"), "type", n.type, I("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, I("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, I("library", "Format"), "format", n.format, I("library", "All formats"), e.formats || [], _l), un(r, I("library", "Shelf"), "shelf", n.shelf, I("library", "All shelves"), e.shelves || []), un(r, I("library", "Scan status"), "status", n.status, I("library", "All scan statuses"), e.scanStatuses || []), un(r, I("library", "Sort"), "sort", n.sort || "title", I("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, I("library", "Page size"), "limit", t.limit || 100, I("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", I("library", "Apply catalogue filters")), s.textContent = I("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", I("library", "Clear catalogue filters")), i.textContent = I("library", "Clear"), r.append(s, i), r;
}
function ud(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ye(e.settingsUrl || ""), i = ye(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = I("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = I("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(cd(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", I("library", "Catalogue pagination"));
  const _ = document.createElement("span");
  if (_.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(_), l.appendChild(d), n.length === 0) {
    const A = document.createElement("div");
    A.className = "library-empty-content", A.setAttribute("role", "status");
    const S = document.createElement("h3");
    S.textContent = I("library", "No catalogue items match");
    const $ = document.createElement("p");
    $.className = "library-muted", $.textContent = I("library", "Scan enabled roots or clear the active filters."), A.append(S, $), l.appendChild(A);
  } else {
    const A = document.createElement("div");
    A.className = "library-cover-gallery";
    for (const S of n) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const L = document.createElement("a");
      L.className = "library-cover-link", L.href = ye(S.openUrl || "#"), L.setAttribute("aria-label", `Read ${ye(S.title || "publication")}`);
      const K = document.createElement("img");
      K.className = "library-cover-image", K.src = ye(S.coverUrl || ""), K.alt = `Cover for ${ye(S.title || "publication")}`, K.loading = "lazy", L.appendChild(K);
      const k = document.createElement("div");
      k.className = "library-cover-summary";
      const G = document.createElement("h3");
      if (G.textContent = ye(S.title || "Untitled publication"), k.appendChild(G), S.creators) {
        const ce = document.createElement("p");
        ce.className = "library-creator", ce.textContent = ye(S.creators), k.appendChild(ce);
      }
      const Y = document.createElement("p");
      Y.className = "library-muted", Y.textContent = [
        ye(S.publicationType || "other"),
        S.extension ? `Format: ${_l(S.extension)}` : "",
        S.shelf ? `Shelf: ${ye(S.shelf)}` : ""
      ].filter(Boolean).join(" · "), k.appendChild(Y);
      const N = document.createElement("p"), te = document.createElement("a");
      te.href = ye(S.openUrl || "#"), te.textContent = I("library", "Read");
      const ne = document.createElement("a");
      ne.href = ye(S.filesUrl || "#"), ne.textContent = I("library", "Show in Files");
      const F = document.createElement("a");
      F.href = ye(S.downloadUrl || "#"), F.textContent = I("library", "Download source");
      const b = document.createElement("a");
      b.href = ye(S.detailsUrl || "#"), b.textContent = I("library", "Details"), N.append(te, document.createTextNode(" · "), ne, document.createTextNode(" · "), F, document.createTextNode(" · "), b), k.appendChild(N), $.append(L, k), A.appendChild($);
    }
    l.appendChild(A);
  }
  if (o.appendChild(l), s || i) {
    const A = document.createElement("section");
    A.className = "library-hero library-secondary-panel", A.setAttribute("aria-label", "Library settings");
    const S = document.createElement("div"), $ = document.createElement("h2");
    $.textContent = "Library";
    const L = document.createElement("p");
    L.className = "library-lede", L.textContent = "Browse publications already stored in Nextcloud.", S.append($, L);
    const K = document.createElement("div");
    if (K.className = "library-hero-actions", s) {
      const k = document.createElement("a");
      k.href = s, k.className = "button secondary", k.setAttribute("aria-label", "Open Library settings"), k.textContent = "Library settings", K.appendChild(k);
    }
    if (i) {
      const k = document.createElement("a");
      k.href = i, k.className = "button secondary", k.setAttribute("aria-label", "Export corrected metadata"), k.textContent = "Export corrected metadata", K.appendChild(k);
    }
    A.append(S, K), o.appendChild(A);
  }
  return o;
}
if (dr)
  try {
    Qc(ld, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(ud(ro));
  }
//# sourceMappingURL=library-main.mjs.map
