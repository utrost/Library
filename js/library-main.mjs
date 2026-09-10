// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, zr = [], Zt = () => {
}, Ti = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ea = (e) => e.startsWith("onUpdate:"), tt = Object.assign, as = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), ne = Array.isArray, _r = (e) => Tn(e) === "[object Map]", Pr = (e) => Tn(e) === "[object Set]", Cs = (e) => Tn(e) === "[object Date]", de = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Qt = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", Ci = (e) => (Ce(e) || de(e)) && de(e.then) && de(e.catch), xi = Object.prototype.toString, Tn = (e) => xi.call(e), Vl = (e) => Tn(e).slice(8, -1), ki = (e) => Tn(e) === "[object Object]", ss = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ta = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ql = /-\w/g, Mt = ta(
  (e) => e.replace(ql, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Ir = ta(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), Ai = ta((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ea = ta(
  (e) => e ? `on${Ai(e)}` : ""
), Jt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ri = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ra = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xs;
const na = () => xs || (xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function is(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = Fe(n) ? Gl(n) : is(n);
      if (a)
        for (const s in a)
          t[s] = a[s];
    }
    return t;
  } else if (Fe(e) || Ce(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Wl = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Gl(e) {
  const t = {};
  return e.replace(Kl, "").split(zl).forEach((r) => {
    if (r) {
      const n = r.split(Wl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Lt(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (ne(e))
    for (let r = 0; r < e.length; r++) {
      const n = Lt(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ns(Yl);
function Ni(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = vr(e[n], t[n]);
  return r;
}
function ks(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let s = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && vr(a, r[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    n[s] = 1;
  }
  return !0;
}
function vr(e, t) {
  if (e === t) return !0;
  let r = Cs(e), n = Cs(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Qt(e), n = Qt(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Ce(e), n = Ce(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = _r(e), n = _r(t), r || n || (r = Pr(e), n = Pr(t), r || n))
      return r && n ? ks(e, t) : !1;
    const a = Object.keys(e).length, s = Object.keys(t).length;
    if (a !== s)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), h = t.hasOwnProperty(o);
      if (u && !h || !u && h || !vr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => vr(r, t));
}
const Oi = (e) => !!(e && e.__v_isRef === !0), c = (e) => Fe(e) ? e : e == null ? "" : ne(e) || Ce(e) && (e.toString === xi || !de(e.toString)) ? Oi(e) ? c(e.value) : JSON.stringify(e, Pi, 2) : String(e), Pi = (e, t) => Oi(t) ? Pi(e, t.value) : _r(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], s) => (r[Ta(n, s) + " =>"] = a, r),
    {}
  )
} : Pr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ta(r))
} : Qt(t) ? Ta(t) : Ce(t) && !ne(t) && !ki(t) ? String(t) : t, Ta = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Je;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Je && (Je.active ? (this.parent = Je, this.index = (Je.scopes || (Je.scopes = [])).push(
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
        const a = this.scopes.slice();
        for (t = 0, r = a.length; t < r; t++)
          a[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Je;
      try {
        return Je = this, t();
      } finally {
        Je = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Je, Je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Je === this)
        Je = this.prevScope;
      else {
        let t = Je;
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
        const a = this.scopes.slice();
        for (r = 0, n = a.length; r < n; r++)
          a[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function eo() {
  return Je;
}
let Re;
const Ca = /* @__PURE__ */ new WeakSet();
class Ii {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ca.has(this) && (Ca.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, As(this), Di(this);
    const t = Re, r = Dt;
    Re = this, Dt = !0;
    try {
      return this.fn();
    } finally {
      Ui(this), Re = t, Dt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cs(t);
      this.deps = this.depsTail = void 0, As(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ca.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    za(this) && this.run();
  }
  get dirty() {
    return za(this);
  }
}
let Li = 0, pn, hn;
function Mi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hn, hn = e;
    return;
  }
  e.next = pn, pn = e;
}
function ls() {
  Li++;
}
function os() {
  if (--Li > 0)
    return;
  if (hn) {
    let t = hn;
    for (hn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; pn; ) {
    let t = pn;
    for (pn = void 0; t; ) {
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
function Di(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ui(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === r && (r = a), cs(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = r;
}
function za(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !za(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = Dt;
  Re = e, Dt = !0;
  try {
    Di(e);
    const a = e.fn(e._value);
    (t.version === 0 || Jt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Re = r, Dt = n, Ui(e), e.flags &= -3;
  }
}
function cs(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      cs(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Dt = !0;
const Hi = [];
function dr() {
  Hi.push(Dt), Dt = !1;
}
function fr() {
  const e = Hi.pop();
  Dt = e === void 0 ? !0 : e;
}
function As(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Re;
    Re = void 0;
    try {
      t();
    } finally {
      Re = r;
    }
  }
}
let gn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class us {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Re || !Dt || Re === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      r = this.activeLink = new ro(Re, this), Re.deps ? (r.prevDep = Re.depsTail, Re.depsTail.nextDep = r, Re.depsTail = r) : Re.deps = Re.depsTail = r, $i(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Re.depsTail, r.nextDep = void 0, Re.depsTail.nextDep = r, Re.depsTail = r, Re.deps === r && (Re.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    ls();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      os();
    }
  }
}
function $i(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        $i(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Wa = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ Symbol(
  ""
), Ka = /* @__PURE__ */ Symbol(
  ""
), _n = /* @__PURE__ */ Symbol(
  ""
);
function Qe(e, t, r) {
  if (Dt && Re) {
    let n = Wa.get(e);
    n || Wa.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new us()), a.map = n, a.key = r), a.track();
  }
}
function or(e, t, r, n, a, s) {
  const o = Wa.get(e);
  if (!o) {
    gn++;
    return;
  }
  const u = (h) => {
    h && h.trigger();
  };
  if (ls(), t === "clear")
    o.forEach(u);
  else {
    const h = ne(e), w = h && ss(r);
    if (h && r === "length") {
      const y = Number(n);
      o.forEach((E, I) => {
        (I === "length" || I === _n || !Qt(I) && I >= y) && u(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), w && u(o.get(_n)), t) {
        case "add":
          h ? w && u(o.get("length")) : (u(o.get(Rr)), _r(e) && u(o.get(Ka)));
          break;
        case "delete":
          h || (u(o.get(Rr)), _r(e) && u(o.get(Ka)));
          break;
        case "set":
          _r(e) && u(o.get(Rr));
          break;
      }
  }
  os();
}
function $r(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (Qe(t, "iterate", _n), /* @__PURE__ */ Nt(e) ? t : t.map(Ut));
}
function aa(e) {
  return Qe(e = /* @__PURE__ */ we(e), "iterate", _n), e;
}
function Yt(e, t) {
  return /* @__PURE__ */ pr(e) ? Yr(/* @__PURE__ */ Nr(e) ? Ut(t) : t) : Ut(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return xa(this, Symbol.iterator, (e) => Yt(this, e));
  },
  concat(...e) {
    return $r(this).concat(
      ...e.map((t) => ne(t) ? $r(t) : t)
    );
  },
  entries() {
    return xa(this, "entries", (e) => (e[1] = Yt(this, e[1]), e));
  },
  every(e, t) {
    return ar(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ar(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Yt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return ar(
      this,
      "find",
      e,
      t,
      (r) => Yt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return ar(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ar(
      this,
      "findLast",
      e,
      t,
      (r) => Yt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ar(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ar(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ka(this, "includes", e);
  },
  indexOf(...e) {
    return ka(this, "indexOf", e);
  },
  join(e) {
    return $r(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ka(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ar(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rn(this, "pop");
  },
  push(...e) {
    return rn(this, "push", e);
  },
  reduce(e, ...t) {
    return Rs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rs(this, "reduceRight", e, t);
  },
  shift() {
    return rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ar(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rn(this, "splice", e);
  },
  toReversed() {
    return $r(this).toReversed();
  },
  toSorted(e) {
    return $r(this).toSorted(e);
  },
  toSpliced(...e) {
    return $r(this).toSpliced(...e);
  },
  unshift(...e) {
    return rn(this, "unshift", e);
  },
  values() {
    return xa(this, "values", (e) => Yt(this, e));
  }
};
function xa(e, t, r) {
  const n = aa(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Nt(e) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = r(s.value)), s;
  }), a;
}
const ao = Array.prototype;
function ar(e, t, r, n, a, s) {
  const o = aa(e), u = o !== e && !/* @__PURE__ */ Nt(e), h = o[t];
  if (h !== ao[t]) {
    const E = h.apply(e, s);
    return u ? Ut(E) : E;
  }
  let w = r;
  o !== e && (u ? w = function(E, I) {
    return r.call(this, Yt(e, E), I, e);
  } : r.length > 2 && (w = function(E, I) {
    return r.call(this, E, I, e);
  }));
  const y = h.call(o, w, n);
  return u && a ? a(y) : y;
}
function Rs(e, t, r, n) {
  const a = aa(e), s = a !== e && !/* @__PURE__ */ Nt(e);
  let o = r, u = !1;
  a !== e && (s ? (u = n.length === 0, o = function(w, y, E) {
    return u && (u = !1, w = Yt(e, w)), r.call(this, w, Yt(e, y), E, e);
  }) : r.length > 3 && (o = function(w, y, E) {
    return r.call(this, w, y, E, e);
  }));
  const h = a[t](o, ...n);
  return u ? Yt(e, h) : h;
}
function ka(e, t, r) {
  const n = /* @__PURE__ */ we(e);
  Qe(n, "iterate", _n);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ ps(r[0]) ? (r[0] = /* @__PURE__ */ we(r[0]), n[t](...r)) : a;
}
function rn(e, t, r = []) {
  dr(), ls();
  const n = (/* @__PURE__ */ we(e))[t].apply(e, r);
  return os(), fr(), n;
}
const so = /* @__PURE__ */ ns("__proto__,__v_isRef,__isVue"), ji = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qt)
);
function io(e) {
  Qt(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
}
class Vi {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !a;
    if (r === "__v_isReadonly")
      return a;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (a ? s ? yo : Wi : s ? zi : Bi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ne(t);
    if (!a) {
      let h;
      if (o && (h = no[r]))
        return h;
      if (r === "hasOwnProperty")
        return io;
    }
    const u = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ et(t) ? t : n
    );
    if ((Qt(r) ? ji.has(r) : so(r)) || (a || Qe(t, "get", r), s))
      return u;
    if (/* @__PURE__ */ et(u)) {
      const h = o && ss(r) ? u : u.value;
      return a && Ce(h) ? /* @__PURE__ */ Ya(h) : h;
    }
    return Ce(u) ? a ? /* @__PURE__ */ Ya(u) : /* @__PURE__ */ ir(u) : u;
  }
}
class qi extends Vi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let s = t[r];
    const o = ne(t) && ss(r);
    if (!this._isShallow) {
      const w = /* @__PURE__ */ pr(s);
      if (!/* @__PURE__ */ Nt(n) && !/* @__PURE__ */ pr(n) && (s = /* @__PURE__ */ we(s), n = /* @__PURE__ */ we(n)), !o && /* @__PURE__ */ et(s) && !/* @__PURE__ */ et(n))
        return w || (s.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), h = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ et(t) ? t : a
    );
    return t === /* @__PURE__ */ we(a) && h && (u ? Jt(n, s) && or(t, "set", r, n) : or(t, "add", r, n)), h;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && or(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Qt(r) || !ji.has(r)) && Qe(t, "has", r), n;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      ne(t) ? "length" : Rr
    ), Reflect.ownKeys(t);
  }
}
class lo extends Vi {
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
const oo = /* @__PURE__ */ new qi(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new qi(!0);
const Ga = (e) => e, In = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, s = /* @__PURE__ */ we(a), o = _r(s), u = e === "entries" || e === Symbol.iterator && o, h = e === "keys" && o, w = a[e](...n), y = r ? Ga : t ? Yr : Ut;
    return !t && Qe(
      s,
      "iterate",
      h ? Ka : Rr
    ), tt(
      // inheriting all iterator properties
      Object.create(w),
      {
        // iterator protocol
        next() {
          const { value: E, done: I } = w.next();
          return I ? { value: E, done: I } : {
            value: u ? [y(E[0]), y(E[1])] : y(E),
            done: I
          };
        }
      }
    );
  };
}
function Ln(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const s = this.__v_raw, o = /* @__PURE__ */ we(s), u = /* @__PURE__ */ we(a);
      e || (Jt(a, u) && Qe(o, "get", a), Qe(o, "get", u));
      const { has: h } = In(o), w = t ? Ga : e ? Yr : Ut;
      if (h.call(o, a))
        return w(s.get(a));
      if (h.call(o, u))
        return w(s.get(u));
      s !== o && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Qe(/* @__PURE__ */ we(a), "iterate", Rr), a.size;
    },
    has(a) {
      const s = this.__v_raw, o = /* @__PURE__ */ we(s), u = /* @__PURE__ */ we(a);
      return e || (Jt(a, u) && Qe(o, "has", a), Qe(o, "has", u)), a === u ? s.has(a) : s.has(a) || s.has(u);
    },
    forEach(a, s) {
      const o = this, u = o.__v_raw, h = /* @__PURE__ */ we(u), w = t ? Ga : e ? Yr : Ut;
      return !e && Qe(h, "iterate", Rr), u.forEach((y, E) => a.call(s, w(y), w(E), o));
    }
  };
  return tt(
    r,
    e ? {
      add: Ln("add"),
      set: Ln("set"),
      delete: Ln("delete"),
      clear: Ln("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ we(this), o = In(s), u = /* @__PURE__ */ we(a), h = !t && !/* @__PURE__ */ Nt(a) && !/* @__PURE__ */ pr(a) ? u : a;
        return o.has.call(s, h) || Jt(a, h) && o.has.call(s, a) || Jt(u, h) && o.has.call(s, u) || (s.add(h), or(s, "add", h, h)), this;
      },
      set(a, s) {
        !t && !/* @__PURE__ */ Nt(s) && !/* @__PURE__ */ pr(s) && (s = /* @__PURE__ */ we(s));
        const o = /* @__PURE__ */ we(this), { has: u, get: h } = In(o);
        let w = u.call(o, a);
        w || (a = /* @__PURE__ */ we(a), w = u.call(o, a));
        const y = h.call(o, a);
        return o.set(a, s), w ? Jt(s, y) && or(o, "set", a, s) : or(o, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ we(this), { has: o, get: u } = In(s);
        let h = o.call(s, a);
        h || (a = /* @__PURE__ */ we(a), h = o.call(s, a)), u && u.call(s, a);
        const w = s.delete(a);
        return h && or(s, "delete", a, void 0), w;
      },
      clear() {
        const a = /* @__PURE__ */ we(this), s = a.size !== 0, o = a.clear();
        return s && or(
          a,
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
  ].forEach((a) => {
    r[a] = fo(a, e, t);
  }), r;
}
function ds(e, t) {
  const r = po(e, t);
  return (n, a, s) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Se(r, a) && a in n ? r : n,
    a,
    s
  );
}
const ho = {
  get: /* @__PURE__ */ ds(!1, !1)
}, mo = {
  get: /* @__PURE__ */ ds(!1, !0)
}, bo = {
  get: /* @__PURE__ */ ds(!0, !1)
};
const Bi = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
function go(e) {
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
function ir(e) {
  return /* @__PURE__ */ pr(e) ? e : fs(
    e,
    !1,
    oo,
    ho,
    Bi
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return fs(
    e,
    !1,
    uo,
    mo,
    zi
  );
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  return fs(
    e,
    !0,
    co,
    bo,
    Wi
  );
}
function fs(e, t, r, n, a) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = a.get(e);
  if (s)
    return s;
  const o = go(Vl(e));
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? n : r
  );
  return a.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function Nr(e) {
  return /* @__PURE__ */ pr(e) ? /* @__PURE__ */ Nr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ps(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ we(t) : e;
}
function vo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Ri(e, "__v_skip", !0), e;
}
const Ut = (e) => Ce(e) ? /* @__PURE__ */ ir(e) : e, Yr = (e) => Ce(e) ? /* @__PURE__ */ Ya(e) : e;
// @__NO_SIDE_EFFECTS__
function et(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ et(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new us(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ we(t), this._value = r ? t : Ut(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Nt(t) || /* @__PURE__ */ pr(t);
    t = n ? t : /* @__PURE__ */ we(t), Jt(t, r) && (this._rawValue = t, this._value = n ? t : Ut(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ et(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : f(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return /* @__PURE__ */ et(a) && !/* @__PURE__ */ et(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ki(e) {
  return /* @__PURE__ */ Nr(e) ? e : new Proxy(e, Eo);
}
class To {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new us(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Mi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Co(e, t, r = !1) {
  let n, a;
  return de(e) ? n = e : (n = e.get, a = e.set), new To(n, a, r);
}
const Mn = {}, Bn = /* @__PURE__ */ new WeakMap();
let Cr;
function xo(e, t = !1, r = Cr) {
  if (r) {
    let n = Bn.get(r);
    n || Bn.set(r, n = []), n.push(e);
  }
}
function ko(e, t, r = xe) {
  const { immediate: n, deep: a, once: s, scheduler: o, augmentJob: u, call: h } = r, w = (V) => a ? V : /* @__PURE__ */ Nt(V) || a === !1 || a === 0 ? cr(V, 1) : cr(V);
  let y, E, I, j, ie = !1, K = !1;
  if (/* @__PURE__ */ et(e) ? (E = () => e.value, ie = /* @__PURE__ */ Nt(e)) : /* @__PURE__ */ Nr(e) ? (E = () => w(e), ie = !0) : ne(e) ? (K = !0, ie = e.some((V) => /* @__PURE__ */ Nr(V) || /* @__PURE__ */ Nt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ et(V))
      return V.value;
    if (/* @__PURE__ */ Nr(V))
      return w(V);
    if (de(V))
      return h ? h(V, 2) : V();
  })) : de(e) ? t ? E = h ? () => h(e, 2) : e : E = () => {
    if (I) {
      dr();
      try {
        I();
      } finally {
        fr();
      }
    }
    const V = Cr;
    Cr = y;
    try {
      return h ? h(e, 3, [j]) : e(j);
    } finally {
      Cr = V;
    }
  } : E = Zt, t && a) {
    const V = E, ce = a === !0 ? 1 / 0 : a;
    E = () => cr(V(), ce);
  }
  const ue = eo(), le = () => {
    y.stop(), ue && ue.active && as(ue.effects, y);
  };
  if (s && t) {
    const V = t;
    t = (...ce) => {
      const Me = V(...ce);
      return le(), Me;
    };
  }
  let W = K ? new Array(e.length).fill(Mn) : Mn;
  const D = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || a || ie || (K ? ce.some((Me, Pe) => Jt(Me, W[Pe])) : Jt(ce, W))) {
          I && I();
          const Me = Cr;
          Cr = y;
          try {
            const Pe = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              W === Mn ? void 0 : K && W[0] === Mn ? [] : W,
              j
            ];
            W = ce, h ? h(t, 3, Pe) : (
              // @ts-expect-error
              t(...Pe)
            );
          } finally {
            Cr = Me;
          }
        }
      } else
        y.run();
  };
  return u && u(D), y = new Ii(E), y.scheduler = o ? () => o(D, !1) : D, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = Bn.get(y);
    if (V) {
      if (h)
        h(V, 4);
      else
        for (const ce of V) ce();
      Bn.delete(y);
    }
  }, t ? n ? D(!0) : W = y.run() : o ? o(D.bind(null, !0), !0) : y.run(), le.pause = y.pause.bind(y), le.resume = y.resume.bind(y), le.stop = le, le;
}
function cr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ et(e))
    cr(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      cr(e[n], t, r);
  else if (Pr(e) || _r(e))
    e.forEach((n) => {
      cr(n, t, r);
    });
  else if (ki(e)) {
    for (const n in e)
      cr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && cr(e[n], t, r);
  }
  return e;
}
function Cn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    sa(a, t, r);
  }
}
function Ft(e, t, r, n) {
  if (de(e)) {
    const a = Cn(e, t, r, n);
    return a && Ci(a) && a.catch((s) => {
      sa(s, t, r);
    }), a;
  }
  if (ne(e)) {
    const a = [];
    for (let s = 0; s < e.length; s++)
      a.push(Ft(e[s], t, r, n));
    return a;
  }
}
function sa(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xe;
  if (t) {
    let u = t.parent;
    const h = t.proxy, w = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, h, w) === !1)
            return;
      }
      u = u.parent;
    }
    if (s) {
      dr(), Cn(s, null, 10, [
        e,
        h,
        w
      ]), fr();
      return;
    }
  }
  Ao(e, r, a, n, o);
}
function Ao(e, t, r, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ot = [];
let Gt = -1;
const Wr = [];
let gr = null, qr = 0;
const Gi = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Yi(e) {
  const t = zn || Gi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Gt + 1, r = ot.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = ot[n], s = vn(a);
    s < e || s === e && a.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function hs(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), r = ot[ot.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(r) ? ot.push(e) : ot.splice(Ro(t), 0, e), e.flags |= 1, Xi();
  }
}
function Xi() {
  zn || (zn = Gi.then(Zi));
}
function No(e) {
  if (!ne(e))
    gr && e.id === -1 ? gr.splice(qr + 1, 0, e) : e.flags & 1 || (Wr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wr.push(e[t]);
  Xi();
}
function Os(e, t, r = Gt + 1) {
  for (; r < ot.length; r++) {
    const n = ot[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ot.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ji(e) {
  if (Wr.length) {
    const t = [...new Set(Wr)].sort(
      (r, n) => vn(r) - vn(n)
    );
    if (Wr.length = 0, gr) {
      for (let r = 0; r < t.length; r++)
        gr.push(t[r]);
      return;
    }
    for (gr = t, qr = 0; qr < gr.length; qr++) {
      const r = gr[qr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    gr = null, qr = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zi(e) {
  try {
    for (Gt = 0; Gt < ot.length; Gt++) {
      const t = ot[Gt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Cn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gt < ot.length; Gt++) {
      const t = ot[Gt];
      t && (t.flags &= -2);
    }
    Gt = -1, ot.length = 0, Ji(), zn = null, (ot.length || Wr.length) && Zi();
  }
}
let Rt = null, Qi = null;
function Wn(e) {
  const t = Rt;
  return Rt = e, Qi = e && e.type.__scopeId || null, t;
}
function Oo(e, t = Rt, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Vs(-1);
    const s = Wn(t), o = Or.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let h = Or.length; h > o; h--) Cl();
      Wn(s), n._d && Vs(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function it(e, t) {
  if (Rt === null)
    return e;
  const r = ua(Rt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [s, o, u, h = xe] = t[a];
    s && (de(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && cr(o), n.push({
      dir: s,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: h
    }));
  }
  return e;
}
function Sr(e, t, r, n) {
  const a = e.dirs, s = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    s && (u.oldValue = s[o].value);
    let h = u.dir[n];
    h && (dr(), Ft(h, r, 8, [
      e.el,
      u,
      e,
      t
    ]), fr());
  }
}
function Po(e, t) {
  if (ct) {
    let r = ct.provides;
    const n = ct.parent && ct.parent.provides;
    n === r && (r = ct.provides = Object.create(n)), r[e] = t;
  }
}
function jn(e, t, r = !1) {
  const n = Ac();
  if (n || Kr) {
    let a = Kr ? Kr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Lo = () => jn(Io);
function Aa(e, t, r) {
  return el(e, t, r);
}
function el(e, t, r = xe) {
  const { immediate: n, deep: a, flush: s, once: o } = r, u = tt({}, r), h = t && n || !t && s !== "post";
  let w;
  if (En) {
    if (s === "sync") {
      const j = Lo();
      w = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!h) {
      const j = () => {
      };
      return j.stop = Zt, j.resume = Zt, j.pause = Zt, j;
    }
  }
  const y = ct;
  u.call = (j, ie, K) => Ft(j, y, ie, K);
  let E = !1;
  s === "post" ? u.scheduler = (j) => {
    gt(j, y && y.suspense);
  } : s !== "sync" && (E = !0, u.scheduler = (j, ie) => {
    ie ? j() : hs(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = ko(e, t, u);
  return En && (w ? w.push(I) : h && I()), I;
}
function Mo(e, t, r) {
  const n = this.proxy, a = Fe(e) ? e.includes(".") ? tl(n, e) : () => n[e] : e.bind(n, n);
  let s;
  de(t) ? s = t : (s = t.handler, r = t);
  const o = xn(this), u = el(a, s.bind(n), r);
  return o(), u;
}
function tl(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
const Do = /* @__PURE__ */ Symbol("_vte"), ia = (e) => e.__isTeleport, Ra = /* @__PURE__ */ Symbol("_leaveCb");
function Uo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== hr) {
        t = r;
        break;
      }
  }
  return t;
}
function rl(e) {
  if (!bs(e))
    return ia(e.type) && e.children ? Uo(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && de(r.default))
      return r.default();
  }
}
function ms(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    ms(
      ia(r.type) && rl(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ps(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Kn = /* @__PURE__ */ new WeakMap();
function mn(e, t, r, n, a = !1) {
  if (ne(e)) {
    e.forEach(
      (K, ue) => mn(
        K,
        t && (ne(t) ? t[ue] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (bn(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && mn(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? ua(n.component) : n.el, o = a ? null : s, { i: u, r: h } = e, w = t && t.r, y = u.refs === xe ? u.refs = {} : u.refs, E = u.setupState, I = /* @__PURE__ */ we(E), j = E === xe ? Ti : (K) => Ps(y, K) ? !1 : Se(I, K), ie = (K, ue) => !(ue && Ps(y, ue));
  if (w != null && w !== h) {
    if (Is(t), Fe(w))
      y[w] = null, j(w) && (E[w] = null);
    else if (/* @__PURE__ */ et(w)) {
      const K = t;
      ie(w, K.k) && (w.value = null), K.k && (y[K.k] = null);
    }
  }
  if (de(h))
    Cn(h, u, 12, [o, y]);
  else {
    const K = Fe(h), ue = /* @__PURE__ */ et(h);
    if (K || ue) {
      const le = () => {
        if (e.f) {
          const W = K ? j(h) ? E[h] : y[h] : ie() || !e.k ? h.value : y[e.k];
          if (a)
            ne(W) && as(W, s);
          else if (ne(W))
            W.includes(s) || W.push(s);
          else if (K)
            y[h] = [s], j(h) && (E[h] = y[h]);
          else {
            const D = [s];
            ie(h, e.k) && (h.value = D), e.k && (y[e.k] = D);
          }
        } else K ? (y[h] = o, j(h) && (E[h] = o)) : ue && (ie(h, e.k) && (h.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const W = () => {
          le(), Kn.delete(e);
        };
        W.id = -1, Kn.set(e, W), gt(W, r);
      } else
        Is(e), le();
    }
  }
}
function Is(e) {
  const t = Kn.get(e);
  t && (t.flags |= 8, Kn.delete(e));
}
na().requestIdleCallback;
na().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, bs = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  al(e, "a", t);
}
function Ho(e, t) {
  al(e, "da", t);
}
function al(e, t, r = ct) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (la(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      bs(a.parent.vnode) && $o(n, t, r, a), a = a.parent;
  }
}
function $o(e, t, r, n) {
  const a = la(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ll(() => {
    as(n[t], a);
  }, r);
}
function la(e, t, r = ct, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...o) => {
      dr();
      const u = xn(r), h = Ft(t, r, e, o);
      return u(), fr(), h;
    });
    return n ? a.unshift(s) : a.push(s), s;
  }
}
const mr = (e) => (t, r = ct) => {
  (!En || e === "sp") && la(e, (...n) => t(...n), r);
}, jo = mr("bm"), sl = mr("m"), Vo = mr(
  "bu"
), qo = mr("u"), il = mr(
  "bum"
), ll = mr("um"), Bo = mr(
  "sp"
), zo = mr("rtg"), Wo = mr("rtc");
function Ko(e, t = ct) {
  la("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, r, n) {
  let a;
  const s = r, o = ne(e);
  if (o || Fe(e)) {
    const u = o && /* @__PURE__ */ Nr(e);
    let h = !1, w = !1;
    u && (h = !/* @__PURE__ */ Nt(e), w = /* @__PURE__ */ pr(e), e = aa(e)), a = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      a[y] = t(
        h ? w ? Yr(Ut(e[y])) : Ut(e[y]) : e[y],
        y,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let u = 0; u < e; u++)
      a[u] = t(u + 1, u, void 0, s);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (u, h) => t(u, h, void 0, s)
      );
    else {
      const u = Object.keys(e);
      a = new Array(u.length);
      for (let h = 0, w = u.length; h < w; h++) {
        const y = u[h];
        a[h] = t(e[y], y, h, s);
      }
    }
  else
    a = [];
  return a;
}
const Xa = (e) => e ? Rl(e) ? ua(e) : Xa(e.parent) : null, yn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xa(e.parent),
    $root: (e) => Xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yi.bind(e.proxy)),
    $watch: (e) => Mo.bind(e)
  })
), Na = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: a, props: s, accessCache: o, type: u, appContext: h } = e;
    if (t[0] !== "$") {
      const I = o[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return n[t];
          case 2:
            return a[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (Na(n, t))
          return o[t] = 1, n[t];
        if (a !== xe && Se(a, t))
          return o[t] = 2, a[t];
        if (Se(s, t))
          return o[t] = 3, s[t];
        if (r !== xe && Se(r, t))
          return o[t] = 4, r[t];
        Ja && (o[t] = 0);
      }
    }
    const w = yn[t];
    let y, E;
    if (w)
      return t === "$attrs" && Qe(e.attrs, "get", ""), w(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      E = h.config.globalProperties, Se(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: s } = e;
    return Na(a, t) ? (a[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: s, type: o }
  }, u) {
    let h;
    return !!(r[u] || e !== xe && u[0] !== "$" && Se(e, u) || Na(t, u) || Se(s, u) || Se(n, u) || Se(yn, u) || Se(a.config.globalProperties, u) || (h = o.__cssModules) && h[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ls(e) {
  return ne(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Xo(e) {
  const t = cl(e), r = e.proxy, n = e.ctx;
  Ja = !1, t.beforeCreate && Ms(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: o,
    watch: u,
    provide: h,
    inject: w,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: I,
    beforeUpdate: j,
    updated: ie,
    activated: K,
    deactivated: ue,
    beforeDestroy: le,
    beforeUnmount: W,
    destroyed: D,
    unmounted: V,
    render: ce,
    renderTracked: Me,
    renderTriggered: Pe,
    errorCaptured: Be,
    serverPrefetch: Ee,
    // public API
    expose: De,
    inheritAttrs: rt,
    // assets
    components: ut,
    directives: Ge,
    filters: xt
  } = t;
  if (w && Jo(w, n, null), o)
    for (const ge in o) {
      const fe = o[ge];
      de(fe) && (n[ge] = fe.bind(r));
    }
  if (a) {
    const ge = a.call(r, r);
    Ce(ge) && (e.data = /* @__PURE__ */ ir(ge));
  }
  if (Ja = !0, s)
    for (const ge in s) {
      const fe = s[ge], ze = de(fe) ? fe.bind(r, r) : de(fe.get) ? fe.get.bind(r, r) : Zt, _e = !de(fe) && de(fe.set) ? fe.set.bind(r) : Zt, Ne = z({
        get: ze,
        set: _e
      });
      Object.defineProperty(n, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (We) => Ne.value = We
      });
    }
  if (u)
    for (const ge in u)
      ol(u[ge], n, r, ge);
  if (h) {
    const ge = de(h) ? h.call(r) : h;
    Reflect.ownKeys(ge).forEach((fe) => {
      Po(fe, ge[fe]);
    });
  }
  y && Ms(y, e, "c");
  function Ue(ge, fe) {
    ne(fe) ? fe.forEach((ze) => ge(ze.bind(r))) : fe && ge(fe.bind(r));
  }
  if (Ue(jo, E), Ue(sl, I), Ue(Vo, j), Ue(qo, ie), Ue(Fo, K), Ue(Ho, ue), Ue(Ko, Be), Ue(Wo, Me), Ue(zo, Pe), Ue(il, W), Ue(ll, V), Ue(Bo, Ee), ne(De))
    if (De.length) {
      const ge = e.exposed || (e.exposed = {});
      De.forEach((fe) => {
        Object.defineProperty(ge, fe, {
          get: () => r[fe],
          set: (ze) => r[fe] = ze,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Zt && (e.render = ce), rt != null && (e.inheritAttrs = rt), ut && (e.components = ut), Ge && (e.directives = Ge), Ee && nl(e);
}
function Jo(e, t, r = Zt) {
  ne(e) && (e = Za(e));
  for (const n in e) {
    const a = e[n];
    let s;
    Ce(a) ? "default" in a ? s = jn(
      a.from || n,
      a.default,
      !0
    ) : s = jn(a.from || n) : s = jn(a), /* @__PURE__ */ et(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[n] = s;
  }
}
function Ms(e, t, r) {
  Ft(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ol(e, t, r, n) {
  let a = n.includes(".") ? tl(r, n) : () => r[n];
  if (Fe(e)) {
    const s = t[e];
    de(s) && Aa(a, s);
  } else if (de(e))
    Aa(a, e.bind(r));
  else if (Ce(e))
    if (ne(e))
      e.forEach((s) => ol(s, t, r, n));
    else {
      const s = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(s) && Aa(a, s, e);
    }
}
function cl(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = s.get(t);
  let h;
  return u ? h = u : !a.length && !r && !n ? h = t : (h = {}, a.length && a.forEach(
    (w) => Gn(h, w, o, !0)
  ), Gn(h, t, o)), Ce(t) && s.set(t, h), h;
}
function Gn(e, t, r, n = !1) {
  const { mixins: a, extends: s } = t;
  s && Gn(e, s, r, !0), a && a.forEach(
    (o) => Gn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Ds,
  props: Us,
  emits: Us,
  // objects
  methods: cn,
  computed: cn,
  // lifecycle
  beforeCreate: lt,
  created: lt,
  beforeMount: lt,
  mounted: lt,
  beforeUpdate: lt,
  updated: lt,
  beforeDestroy: lt,
  beforeUnmount: lt,
  destroyed: lt,
  unmounted: lt,
  activated: lt,
  deactivated: lt,
  errorCaptured: lt,
  serverPrefetch: lt,
  // assets
  components: cn,
  directives: cn,
  // watch
  watch: ec,
  // provide / inject
  provide: Ds,
  inject: Qo
};
function Ds(e, t) {
  return t ? e ? function() {
    return tt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return cn(Za(e), Za(t));
}
function Za(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function lt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function cn(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Us(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Ls(e),
    Ls(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = tt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = lt(e[n], t[n]);
  return r;
}
function ul() {
  return {
    app: null,
    config: {
      isNativeTag: Ti,
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
  return function(n, a = null) {
    de(n) || (n = tt({}, n)), a != null && !Ce(a) && (a = null);
    const s = ul(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let h = !1;
    const w = s.app = {
      _uid: tc++,
      _component: n,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: Lc,
      get config() {
        return s.config;
      },
      set config(y) {
      },
      use(y, ...E) {
        return o.has(y) || (y && de(y.install) ? (o.add(y), y.install(w, ...E)) : de(y) && (o.add(y), y(w, ...E))), w;
      },
      mixin(y) {
        return s.mixins.includes(y) || s.mixins.push(y), w;
      },
      component(y, E) {
        return E ? (s.components[y] = E, w) : s.components[y];
      },
      directive(y, E) {
        return E ? (s.directives[y] = E, w) : s.directives[y];
      },
      mount(y, E, I) {
        if (!h) {
          const j = w._ceVNode || ur(n, a);
          return j.appContext = s, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), h = !0, w._container = y, y.__vue_app__ = w, ua(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        h && (Ft(
          u,
          w._instance,
          16
        ), e(null, w._container), delete w._container.__vue_app__);
      },
      provide(y, E) {
        return s.provides[y] = E, w;
      },
      runWithContext(y) {
        const E = Kr;
        Kr = w;
        try {
          return y();
        } finally {
          Kr = E;
        }
      }
    };
    return w;
  };
}
let Kr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mt(t)}Modifiers`] || e[`${Ir(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let a = r;
  const s = t.startsWith("update:"), o = s && nc(n, t.slice(7));
  o && (o.trim && (a = r.map((y) => Fe(y) ? y.trim() : y)), o.number && (a = a.map(ra)));
  let u, h = n[u = Ea(t)] || // also try camelCase event handler (#2249)
  n[u = Ea(Mt(t))];
  !h && s && (h = n[u = Ea(Ir(t))]), h && Ft(
    h,
    e,
    6,
    a
  );
  const w = n[u + "Once"];
  if (w) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ft(
      w,
      e,
      6,
      a
    );
  }
}
const sc = /* @__PURE__ */ new WeakMap();
function dl(e, t, r = !1) {
  const n = r ? sc : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const s = e.emits;
  let o = {}, u = !1;
  if (!de(e)) {
    const h = (w) => {
      const y = dl(w, t, !0);
      y && (u = !0, tt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !s && !u ? (Ce(e) && n.set(e, null), null) : (ne(s) ? s.forEach((h) => o[h] = null) : tt(o, s), Ce(e) && n.set(e, o), o);
}
function oa(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Ir(t)) || Se(e, t));
}
function Fs(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: a,
    propsOptions: [s],
    slots: o,
    attrs: u,
    emit: h,
    render: w,
    renderCache: y,
    props: E,
    data: I,
    setupState: j,
    ctx: ie,
    inheritAttrs: K
  } = e, ue = Wn(e);
  let le, W;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, ce = V;
      le = Xt(
        w.call(
          ce,
          V,
          y,
          E,
          j,
          I,
          ie
        )
      ), W = u;
    } else {
      const V = t;
      le = Xt(
        V.length > 1 ? V(
          E,
          { attrs: u, slots: o, emit: h }
        ) : V(
          E,
          null
        )
      ), W = t.props ? u : ic(u);
    }
  } catch (V) {
    Or.length = 0, sa(V, e, 1), le = ur(hr);
  }
  let D = le;
  if (W && K !== !1) {
    const V = Object.keys(W), { shapeFlag: ce } = D;
    V.length && ce & 7 && (s && V.some(ea) && (W = lc(
      W,
      s
    )), D = Xr(D, W, !1, !0));
  }
  if (r.dirs && (D = Xr(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ia(D.type) && rl(D) || D;
    ms(V, r.transition);
  }
  return le = D, Wn(ue), le;
}
const ic = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Qn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!ea(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: a, component: s } = e, { props: o, children: u, patchFlag: h } = t, w = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return n ? Hs(n, o, w) : !!o;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const I = y[E];
        if (fl(o, n, I) && !oa(w, I))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? Hs(n, o, w) : !0 : !!o;
  return !1;
}
function Hs(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const s = n[a];
    if (fl(t, e, s) && !oa(r, s))
      return !0;
  }
  return !1;
}
function fl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && Ce(n) && Ce(a) ? !vr(n, a) : n !== a;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const pl = {}, hl = () => Object.create(pl), ml = (e) => Object.getPrototypeOf(e) === pl;
function uc(e, t, r, n = !1) {
  const a = {}, s = hl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bl(e, t, a, s);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  r ? e.props = n ? a : /* @__PURE__ */ _o(a) : e.type.props ? e.props = a : e.props = s, e.attrs = s;
}
function dc(e, t, r, n) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ we(a), [h] = e.propsOptions;
  let w = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const y = e.vnode.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        let I = y[E];
        if (oa(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (h)
          if (Se(s, I))
            j !== s[I] && (s[I] = j, w = !0);
          else {
            const ie = Mt(I);
            a[ie] = Qa(
              h,
              u,
              ie,
              j,
              e,
              !1
            );
          }
        else
          j !== s[I] && (s[I] = j, w = !0);
      }
    }
  } else {
    bl(e, t, a, s) && (w = !0);
    let y;
    for (const E in u)
      (!t || // for camelCase
      !Se(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ir(E)) === E || !Se(t, y))) && (h ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[E] = Qa(
        h,
        u,
        E,
        void 0,
        e,
        !0
      )) : delete a[E]);
    if (s !== u)
      for (const E in s)
        (!t || !Se(t, E)) && (delete s[E], w = !0);
  }
  w && or(e.attrs, "set", "");
}
function bl(e, t, r, n) {
  const [a, s] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let h in t) {
      if (fn(h))
        continue;
      const w = t[h];
      let y;
      a && Se(a, y = Mt(h)) ? !s || !s.includes(y) ? r[y] = w : (u || (u = {}))[y] = w : oa(e.emitsOptions, h) || (!(h in n) || w !== n[h]) && (n[h] = w, o = !0);
    }
  if (s) {
    const h = /* @__PURE__ */ we(r), w = u || xe;
    for (let y = 0; y < s.length; y++) {
      const E = s[y];
      r[E] = Qa(
        a,
        h,
        E,
        w[E],
        e,
        !Se(w, E)
      );
    }
  }
  return o;
}
function Qa(e, t, r, n, a, s) {
  const o = e[r];
  if (o != null) {
    const u = Se(o, "default");
    if (u && n === void 0) {
      const h = o.default;
      if (o.type !== Function && !o.skipFactory && de(h)) {
        const { propsDefaults: w } = a;
        if (r in w)
          n = w[r];
        else {
          const y = xn(a);
          n = w[r] = h.call(
            null,
            t
          ), y();
        }
      } else
        n = h;
      a.ce && a.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ir(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function yl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const s = e.props, o = {}, u = [];
  let h = !1;
  if (!de(e)) {
    const y = (E) => {
      h = !0;
      const [I, j] = yl(E, t, !0);
      tt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!s && !h)
    return Ce(e) && n.set(e, zr), zr;
  if (ne(s))
    for (let y = 0; y < s.length; y++) {
      const E = Mt(s[y]);
      $s(E) && (o[E] = xe);
    }
  else if (s)
    for (const y in s) {
      const E = Mt(y);
      if ($s(E)) {
        const I = s[y], j = o[E] = ne(I) || de(I) ? { type: I } : tt({}, I), ie = j.type;
        let K = !1, ue = !0;
        if (ne(ie))
          for (let le = 0; le < ie.length; ++le) {
            const W = ie[le], D = de(W) && W.name;
            if (D === "Boolean") {
              K = !0;
              break;
            } else D === "String" && (ue = !1);
          }
        else
          K = de(ie) && ie.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = K, j[
          1
          /* shouldCastTrue */
        ] = ue, (K || Se(j, "default")) && u.push(E);
      }
    }
  const w = [o, u];
  return Ce(e) && n.set(e, w), w;
}
function $s(e) {
  return e[0] !== "$" && !fn(e);
}
const ys = (e) => e === "_" || e === "_ctx" || e === "$stable", gs = (e) => ne(e) ? e.map(Xt) : [Xt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Oo((...a) => gs(t(...a)), r);
  return n._c = !1, n;
}, gl = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (ys(a)) continue;
    const s = e[a];
    if (de(s))
      t[a] = pc(a, s, n);
    else if (s != null) {
      const o = gs(s);
      t[a] = () => o;
    }
  }
}, _l = (e, t) => {
  const r = gs(t);
  e.slots.default = () => r;
}, vl = (e, t, r) => {
  for (const n in t)
    (r || !ys(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = hl();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (vl(n, t, r), r && Ri(n, "_", a, !0)) : gl(t, n);
  } else t && _l(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let s = !0, o = xe;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? s = !1 : vl(a, t, r) : (s = !t.$stable, gl(t, a)), o = t;
  } else t && (_l(e, t), o = { default: 1 });
  if (s)
    for (const u in a)
      !ys(u) && o[u] == null && delete a[u];
}, gt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = na();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: s,
    createElement: o,
    createText: u,
    createComment: h,
    setText: w,
    setElementText: y,
    parentNode: E,
    nextSibling: I,
    setScopeId: j = Zt,
    insertStaticContent: ie
  } = e, K = (m, b, _, R = null, x = null, A = null, M = void 0, U = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !nn(m, b) && (R = vt(m), We(m, x, A, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: k, ref: Y, shapeFlag: H } = b;
    switch (k) {
      case ca:
        ue(m, b, _, R);
        break;
      case hr:
        le(m, b, _, R);
        break;
      case Pa:
        m == null && W(b, _, R, M);
        break;
      case re:
        ut(
          m,
          b,
          _,
          R,
          x,
          A,
          M,
          U,
          L
        );
        break;
      default:
        H & 1 ? ce(
          m,
          b,
          _,
          R,
          x,
          A,
          M,
          U,
          L
        ) : H & 6 ? Ge(
          m,
          b,
          _,
          R,
          x,
          A,
          M,
          U,
          L
        ) : (H & 64 || H & 128) && k.process(
          m,
          b,
          _,
          R,
          x,
          A,
          M,
          U,
          L,
          ft
        );
    }
    Y != null && x ? mn(Y, m && m.ref, A, b || m, !b) : Y == null && m && m.ref != null && mn(m.ref, null, A, m, !0);
  }, ue = (m, b, _, R) => {
    if (m == null)
      n(
        b.el = u(b.children),
        _,
        R
      );
    else {
      const x = b.el = m.el;
      b.children !== m.children && w(x, b.children);
    }
  }, le = (m, b, _, R) => {
    m == null ? n(
      b.el = h(b.children || ""),
      _,
      R
    ) : b.el = m.el;
  }, W = (m, b, _, R) => {
    [m.el, m.anchor] = ie(
      m.children,
      b,
      _,
      R,
      m.el,
      m.anchor
    );
  }, D = ({ el: m, anchor: b }, _, R) => {
    let x;
    for (; m && m !== b; )
      x = I(m), n(m, _, R), m = x;
    n(b, _, R);
  }, V = ({ el: m, anchor: b }) => {
    let _;
    for (; m && m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, ce = (m, b, _, R, x, A, M, U, L) => {
    if (b.type === "svg" ? M = "svg" : b.type === "math" && (M = "mathml"), m == null)
      Me(
        b,
        _,
        R,
        x,
        A,
        M,
        U,
        L
      );
    else {
      const k = m.el && m.el._isVueCE ? m.el : null;
      try {
        k && k._beginPatch(), Ee(
          m,
          b,
          x,
          A,
          M,
          U,
          L
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, Me = (m, b, _, R, x, A, M, U) => {
    let L, k;
    const { props: Y, shapeFlag: H, transition: B, dirs: Q } = m;
    if (L = m.el = o(
      m.type,
      A,
      Y && Y.is,
      Y
    ), H & 8 ? y(L, m.children) : H & 16 && Be(
      m.children,
      L,
      null,
      R,
      x,
      Oa(m, A),
      M,
      U
    ), Q && Sr(m, null, R, "created"), Pe(L, m, m.scopeId, M, R), Y) {
      for (const P in Y)
        P !== "value" && !fn(P) && s(L, P, null, Y[P], A, R);
      "value" in Y && s(L, "value", null, Y.value, A), (k = Y.onVnodeBeforeMount) && Kt(k, R, m);
    }
    Q && Sr(m, null, R, "beforeMount");
    const ee = gc(x, B);
    ee && B.beforeEnter(L), n(L, b, _), ((k = Y && Y.onVnodeMounted) || ee || Q) && gt(() => {
      k && Kt(k, R, m), ee && B.enter(L), Q && Sr(m, null, R, "mounted");
    }, x);
  }, Pe = (m, b, _, R, x) => {
    if (_ && j(m, _), R)
      for (let A = 0; A < R.length; A++)
        j(m, R[A]);
    if (x) {
      let A = x.subTree;
      if (b === A || Tl(A.type) && (A.ssContent === b || A.ssFallback === b)) {
        const M = x.vnode;
        Pe(
          m,
          M,
          M.scopeId,
          M.slotScopeIds,
          x.parent
        );
      }
    }
  }, Be = (m, b, _, R, x, A, M, U, L = 0) => {
    for (let k = L; k < m.length; k++) {
      const Y = m[k] = U ? lr(m[k]) : Xt(m[k]);
      K(
        null,
        Y,
        b,
        _,
        R,
        x,
        A,
        M,
        U
      );
    }
  }, Ee = (m, b, _, R, x, A, M) => {
    const U = b.el = m.el;
    let { patchFlag: L, dynamicChildren: k, dirs: Y } = b;
    L |= m.patchFlag & 16;
    const H = m.props || xe, B = b.props || xe;
    let Q;
    if (_ && Er(_, !1), (Q = B.onVnodeBeforeUpdate) && Kt(Q, _, b, m), Y && Sr(b, m, _, "beforeUpdate"), _ && Er(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    k && (!m.dynamicChildren || m.dynamicChildren.length !== k.length) && (L = 0, M = !1, k = null), (H.innerHTML && B.innerHTML == null || H.textContent && B.textContent == null) && y(U, ""), k ? De(
      m.dynamicChildren,
      k,
      U,
      _,
      R,
      Oa(b, x),
      A
    ) : M || fe(
      m,
      b,
      U,
      null,
      _,
      R,
      Oa(b, x),
      A,
      !1
    ), L > 0) {
      if (L & 16)
        rt(U, H, B, _, x);
      else if (L & 2 && H.class !== B.class && s(U, "class", null, B.class, x), L & 4 && s(U, "style", H.style, B.style, x), L & 8) {
        const ee = b.dynamicProps;
        for (let P = 0; P < ee.length; P++) {
          const O = ee[P], $ = H[O], te = B[O];
          (te !== $ || O === "value") && s(U, O, $, te, x, _);
        }
      }
      L & 1 && m.children !== b.children && y(U, b.children);
    } else !M && k == null && rt(U, H, B, _, x);
    ((Q = B.onVnodeUpdated) || Y) && gt(() => {
      Q && Kt(Q, _, b, m), Y && Sr(b, m, _, "updated");
    }, R);
  }, De = (m, b, _, R, x, A, M) => {
    for (let U = 0; U < b.length; U++) {
      const L = m[U], k = b[U], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !nn(L, k) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      K(
        L,
        k,
        Y,
        null,
        R,
        x,
        A,
        M,
        !0
      );
    }
  }, rt = (m, b, _, R, x) => {
    if (b !== _) {
      if (b !== xe)
        for (const A in b)
          !fn(A) && !(A in _) && s(
            m,
            A,
            b[A],
            null,
            x,
            R
          );
      for (const A in _) {
        if (fn(A)) continue;
        const M = _[A], U = b[A];
        M !== U && A !== "value" && s(m, A, U, M, x, R);
      }
      "value" in _ && s(m, "value", b.value, _.value, x);
    }
  }, ut = (m, b, _, R, x, A, M, U, L) => {
    const k = b.el = m ? m.el : u(""), Y = b.anchor = m ? m.anchor : u("");
    let { patchFlag: H, dynamicChildren: B, slotScopeIds: Q } = b;
    Q && (U = U ? U.concat(Q) : Q), m == null ? (n(k, _, R), n(Y, _, R), Be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      Y,
      x,
      A,
      M,
      U,
      L
    )) : H > 0 && H & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === B.length ? (De(
      m.dynamicChildren,
      B,
      _,
      x,
      A,
      M,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || x && b === x.subTree) && wl(
      m,
      b,
      !0
      /* shallow */
    )) : fe(
      m,
      b,
      _,
      Y,
      x,
      A,
      M,
      U,
      L
    );
  }, Ge = (m, b, _, R, x, A, M, U, L) => {
    b.slotScopeIds = U, m == null ? b.shapeFlag & 512 ? x.ctx.activate(
      b,
      _,
      R,
      M,
      L
    ) : xt(
      b,
      _,
      R,
      x,
      A,
      M,
      L
    ) : He(m, b, L);
  }, xt = (m, b, _, R, x, A, M) => {
    const U = m.component = kc(
      m,
      R,
      x
    );
    if (bs(m) && (U.ctx.renderer = ft), Rc(U, !1, M), U.asyncDep) {
      if (x && x.registerDep(U, Ue, M), !m.el) {
        const L = U.subTree = ur(hr);
        le(null, L, b, _), m.placeholder = L.el;
      }
    } else
      Ue(
        U,
        m,
        b,
        _,
        x,
        A,
        M
      );
  }, He = (m, b, _) => {
    const R = b.component = m.component;
    if (oc(m, b, _))
      if (R.asyncDep && !R.asyncResolved) {
        ge(R, b, _);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = m.el, R.vnode = b;
  }, Ue = (m, b, _, R, x, A, M) => {
    const U = () => {
      if (m.isMounted) {
        let { next: H, bu: B, u: Q, parent: ee, vnode: P } = m;
        {
          const pe = Sl(m);
          if (pe) {
            H && (H.el = P.el, ge(m, H, M)), pe.asyncDep.then(() => {
              gt(() => {
                m.isUnmounted || k();
              }, x);
            });
            return;
          }
        }
        let O = H, $;
        Er(m, !1), H ? (H.el = P.el, ge(m, H, M)) : H = P, B && $n(B), ($ = H.props && H.props.onVnodeBeforeUpdate) && Kt($, ee, H, P), Er(m, !0);
        const te = Fs(m), ae = m.subTree;
        m.subTree = te, K(
          ae,
          te,
          // parent may have changed if it's in a teleport
          E(ae.el),
          // anchor may have changed if it's in a fragment
          vt(ae),
          m,
          x,
          A
        ), H.el = te.el, O === null && cc(m, te.el), Q && gt(Q, x), ($ = H.props && H.props.onVnodeUpdated) && gt(
          () => Kt($, ee, H, P),
          x
        );
      } else {
        let H;
        const { el: B, props: Q } = b, { bm: ee, m: P, parent: O, root: $, type: te } = m, ae = bn(b);
        Er(m, !1), ee && $n(ee), !ae && (H = Q && Q.onVnodeBeforeMount) && Kt(H, O, b), Er(m, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            te,
            m.parent ? m.parent.type : void 0
          );
          const pe = m.subTree = Fs(m);
          K(
            null,
            pe,
            _,
            R,
            m,
            x,
            A
          ), b.el = pe.el;
        }
        if (P && gt(P, x), !ae && (H = Q && Q.onVnodeMounted)) {
          const pe = b;
          gt(
            () => Kt(H, O, pe),
            x
          );
        }
        (b.shapeFlag & 256 || O && bn(O.vnode) && O.vnode.shapeFlag & 256) && m.a && gt(m.a, x), m.isMounted = !0, b = _ = R = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Ii(U);
    m.scope.off();
    const k = m.update = L.run.bind(L), Y = m.job = L.runIfDirty.bind(L);
    Y.i = m, Y.id = m.uid, L.scheduler = () => hs(Y), Er(m, !0), k();
  }, ge = (m, b, _) => {
    b.component = m;
    const R = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, R, _), mc(m, b.children, _), dr(), Os(m), fr();
  }, fe = (m, b, _, R, x, A, M, U, L = !1) => {
    const k = m && m.children, Y = m ? m.shapeFlag : 0, H = b.children, { patchFlag: B, shapeFlag: Q } = b;
    if (B > 0) {
      if (B & 128) {
        _e(
          k,
          H,
          _,
          R,
          x,
          A,
          M,
          U,
          L
        );
        return;
      } else if (B & 256) {
        ze(
          k,
          H,
          _,
          R,
          x,
          A,
          M,
          U,
          L
        );
        return;
      }
    }
    Q & 8 ? (Y & 16 && $e(k, x, A), H !== k && y(_, H)) : Y & 16 ? Q & 16 ? _e(
      k,
      H,
      _,
      R,
      x,
      A,
      M,
      U,
      L
    ) : $e(k, x, A, !0) : (Y & 8 && y(_, ""), Q & 16 && Be(
      H,
      _,
      R,
      x,
      A,
      M,
      U,
      L
    ));
  }, ze = (m, b, _, R, x, A, M, U, L) => {
    m = m || zr, b = b || zr;
    const k = m.length, Y = b.length, H = Math.min(k, Y);
    let B;
    for (B = 0; B < H; B++) {
      const Q = b[B] = L ? lr(b[B]) : Xt(b[B]);
      K(
        m[B],
        Q,
        _,
        null,
        x,
        A,
        M,
        U,
        L
      );
    }
    k > Y ? $e(
      m,
      x,
      A,
      !0,
      !1,
      H
    ) : Be(
      b,
      _,
      R,
      x,
      A,
      M,
      U,
      L,
      H
    );
  }, _e = (m, b, _, R, x, A, M, U, L) => {
    let k = 0;
    const Y = b.length;
    let H = m.length - 1, B = Y - 1;
    for (; k <= H && k <= B; ) {
      const Q = m[k], ee = b[k] = L ? lr(b[k]) : Xt(b[k]);
      if (nn(Q, ee))
        K(
          Q,
          ee,
          _,
          null,
          x,
          A,
          M,
          U,
          L
        );
      else
        break;
      k++;
    }
    for (; k <= H && k <= B; ) {
      const Q = m[H], ee = b[B] = L ? lr(b[B]) : Xt(b[B]);
      if (nn(Q, ee))
        K(
          Q,
          ee,
          _,
          null,
          x,
          A,
          M,
          U,
          L
        );
      else
        break;
      H--, B--;
    }
    if (k > H) {
      if (k <= B) {
        const Q = B + 1, ee = Q < Y ? b[Q].el : R;
        for (; k <= B; )
          K(
            null,
            b[k] = L ? lr(b[k]) : Xt(b[k]),
            _,
            ee,
            x,
            A,
            M,
            U,
            L
          ), k++;
      }
    } else if (k > B)
      for (; k <= H; )
        We(m[k], x, A, !0), k++;
    else {
      const Q = k, ee = k, P = /* @__PURE__ */ new Map();
      for (k = ee; k <= B; k++) {
        const Te = b[k] = L ? lr(b[k]) : Xt(b[k]);
        Te.key != null && P.set(Te.key, k);
      }
      let O, $ = 0;
      const te = B - ee + 1;
      let ae = !1, pe = 0;
      const he = new Array(te);
      for (k = 0; k < te; k++) he[k] = 0;
      for (k = Q; k <= H; k++) {
        const Te = m[k];
        if ($ >= te) {
          We(Te, x, A, !0);
          continue;
        }
        let ke;
        if (Te.key != null)
          ke = P.get(Te.key);
        else
          for (O = ee; O <= B; O++)
            if (he[O - ee] === 0 && nn(Te, b[O])) {
              ke = O;
              break;
            }
        ke === void 0 ? We(Te, x, A, !0) : (he[ke - ee] = k + 1, ke >= pe ? pe = ke : ae = !0, K(
          Te,
          b[ke],
          _,
          null,
          x,
          A,
          M,
          U,
          L
        ), $++);
      }
      const oe = ae ? _c(he) : zr;
      for (O = oe.length - 1, k = te - 1; k >= 0; k--) {
        const Te = ee + k, ke = b[Te], Ye = b[Te + 1], Ht = Te + 1 < Y ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ye.el || El(Ye)
        ) : R;
        he[k] === 0 ? K(
          null,
          ke,
          _,
          Ht,
          x,
          A,
          M,
          U,
          L
        ) : ae && (O < 0 || k !== oe[O] ? Ne(ke, _, Ht, 2) : O--);
      }
    }
  }, Ne = (m, b, _, R, x = null) => {
    const { el: A, type: M, transition: U, children: L, shapeFlag: k } = m;
    if (k & 6) {
      Ne(m.component.subTree, b, _, R);
      return;
    }
    if (k & 128) {
      m.suspense.move(b, _, R);
      return;
    }
    if (k & 64) {
      M.move(m, b, _, ft);
      return;
    }
    if (M === re) {
      n(A, b, _);
      for (let H = 0; H < L.length; H++)
        Ne(L[H], b, _, R);
      n(m.anchor, b, _);
      return;
    }
    if (M === Pa) {
      D(m, b, _);
      return;
    }
    if (R !== 2 && k & 1 && U)
      if (R === 0)
        U.persisted && !A[Ra] ? n(A, b, _) : (U.beforeEnter(A), n(A, b, _), gt(() => U.enter(A), x));
      else {
        const { leave: H, delayLeave: B, afterLeave: Q } = U, ee = () => {
          m.ctx.isUnmounted ? a(A) : n(A, b, _);
        }, P = () => {
          const O = A._isLeaving || !!A[Ra];
          A._isLeaving && A[Ra](
            !0
            /* cancelled */
          ), U.persisted && !O ? ee() : H(A, () => {
            ee(), Q && Q();
          });
        };
        B ? B(A, ee, P) : P();
      }
    else
      n(A, b, _);
  }, We = (m, b, _, R = !1, x = !1) => {
    const {
      type: A,
      props: M,
      ref: U,
      children: L,
      dynamicChildren: k,
      shapeFlag: Y,
      patchFlag: H,
      dirs: B,
      cacheIndex: Q,
      memo: ee
    } = m;
    if (H === -2 && (x = !1), U != null && (dr(), mn(U, null, _, m, !0), fr()), Q != null && (b.renderCache[Q] = void 0), Y & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const P = Y & 1 && B, O = !bn(m);
    let $;
    if (O && ($ = M && M.onVnodeBeforeUnmount) && Kt($, b, m), Y & 6)
      er(m.component, _, R);
    else {
      if (Y & 128) {
        m.suspense.unmount(_, R);
        return;
      }
      P && Sr(m, null, b, "beforeUnmount"), Y & 64 ? m.type.remove(
        m,
        b,
        _,
        ft,
        R
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== re || H > 0 && H & 64) ? $e(
        k,
        b,
        _,
        !1,
        !0
      ) : (A === re && H & 384 || !x && Y & 16) && $e(L, b, _), R && nt(m);
    }
    const te = ee != null && Q == null;
    (O && ($ = M && M.onVnodeUnmounted) || P || te) && gt(() => {
      $ && Kt($, b, m), P && Sr(m, null, b, "unmounted"), te && (m.el = null);
    }, _);
  }, nt = (m) => {
    const { type: b, el: _, anchor: R, transition: x } = m;
    if (b === re) {
      me(_, R);
      return;
    }
    if (b === Pa) {
      V(m);
      return;
    }
    const A = () => {
      a(_), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (m.shapeFlag & 1 && x && !x.persisted) {
      const { leave: M, delayLeave: U } = x, L = () => M(_, A);
      U ? U(m.el, A, L) : L();
    } else
      A();
  }, me = (m, b) => {
    let _;
    for (; m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, er = (m, b, _) => {
    const { bum: R, scope: x, job: A, subTree: M, um: U, m: L, a: k } = m;
    js(L), js(k), R && $n(R), x.stop(), A && (A.flags |= 8, We(M, m, b, _)), U && gt(U, b), gt(() => {
      m.isUnmounted = !0;
    }, b);
  }, $e = (m, b, _, R = !1, x = !1, A = 0) => {
    for (let M = A; M < m.length; M++)
      We(m[M], b, _, R, x);
  }, vt = (m) => {
    if (m.shapeFlag & 6)
      return vt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), _ = b && b[Do];
    return _ ? I(_) : b;
  };
  let wt = !1;
  const dt = (m, b, _) => {
    let R;
    m == null ? b._vnode && (We(b._vnode, null, null, !0), R = b._vnode.component) : K(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = m, wt || (wt = !0, Os(R), Ji(), wt = !1);
  }, ft = {
    p: K,
    um: We,
    m: Ne,
    r: nt,
    mt: xt,
    mc: Be,
    pc: fe,
    pbc: De,
    n: vt,
    o: e
  };
  return {
    render: dt,
    hydrate: void 0,
    createApp: rc(dt)
  };
}
function Oa({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Er({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wl(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (ne(n) && ne(a))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let u = a[s];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[s] = lr(a[s]), u.el = o.el), !r && u.patchFlag !== -2 && wl(o, u)), u.type === ca && (u.patchFlag === -1 && (u = a[s] = lr(u)), u.el = o.el), u.type === hr && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, a, s, o, u;
  const h = e.length;
  for (n = 0; n < h; n++) {
    const w = e[n];
    if (w !== 0) {
      if (a = r[r.length - 1], e[a] < w) {
        t[n] = a, r.push(n);
        continue;
      }
      for (s = 0, o = r.length - 1; s < o; )
        u = s + o >> 1, e[r[u]] < w ? s = u + 1 : o = u;
      w < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, o = r[s - 1]; s-- > 0; )
    r[s] = o, o = t[o];
  return r;
}
function Sl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sl(t);
}
function js(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function El(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? El(t.subTree) : null;
}
const Tl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : No(e);
}
const re = /* @__PURE__ */ Symbol.for("v-fgt"), ca = /* @__PURE__ */ Symbol.for("v-txt"), hr = /* @__PURE__ */ Symbol.for("v-cmt"), Pa = /* @__PURE__ */ Symbol.for("v-stc"), Or = [];
let Ct = null;
function T(e = !1) {
  Or.push(Ct = e ? null : []);
}
function Cl() {
  Or.pop(), Ct = Or[Or.length - 1] || null;
}
let wn = 1;
function Vs(e, t = !1) {
  wn += e, e < 0 && Ct && t && (Ct.hasOnce = !0);
}
function xl(e) {
  return e.dynamicChildren = wn > 0 ? Ct || zr : null, Cl(), wn > 0 && Ct && Ct.push(e), e;
}
function C(e, t, r, n, a, s) {
  return xl(
    i(
      e,
      t,
      r,
      n,
      a,
      s,
      !0
    )
  );
}
function wc(e, t, r, n, a) {
  return xl(
    ur(
      e,
      t,
      r,
      n,
      a,
      !0
    )
  );
}
function kl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Al = ({ key: e }) => e ?? null, Vn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || /* @__PURE__ */ et(e) || de(e) ? { i: Rt, r: e, k: t, f: !!r } : e : null);
function i(e, t = null, r = null, n = 0, a = null, s = e === re ? 0 : 1, o = !1, u = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Al(t),
    ref: t && Vn(t),
    scopeId: Qi,
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
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return u ? (Yn(h, r), s & 128 && e.normalize(h)) : r && (h.shapeFlag |= Fe(r) ? 8 : 16), wn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Ct.push(h), h;
}
const ur = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, s = !1) {
  if ((!e || e === Go) && (e = hr), kl(e)) {
    const u = Xr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Yn(u, r), wn > 0 && !s && Ct && (u.shapeFlag & 6 ? Ct[Ct.indexOf(e)] = u : Ct.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: h } = t;
    u && !Fe(u) && (t.class = Lt(u)), Ce(h) && (/* @__PURE__ */ ps(h) && !ne(h) && (h = tt({}, h)), t.style = is(h));
  }
  const o = Fe(e) ? 1 : Tl(e) ? 128 : ia(e) ? 64 : Ce(e) ? 4 : de(e) ? 2 : 0;
  return i(
    e,
    t,
    r,
    n,
    a,
    o,
    s,
    !0
  );
}
function Ec(e) {
  return e ? /* @__PURE__ */ ps(e) || ml(e) ? tt({}, e) : e : null;
}
function Xr(e, t, r = !1, n = !1) {
  const { props: a, ref: s, patchFlag: o, children: u, transition: h } = e, w = t ? Tc(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: w,
    key: w && Al(w),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? ne(s) ? s.concat(Vn(t)) : [s, Vn(t)] : Vn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== re ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: h,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xr(e.ssContent),
    ssFallback: e.ssFallback && Xr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && n && ms(
    y,
    h.clone(y)
  ), y;
}
function be(e = " ", t = 0) {
  return ur(ca, null, e, t);
}
function G(e = "", t = !1) {
  return t ? (T(), wc(hr, null, e)) : ur(hr, null, e);
}
function Xt(e) {
  return e == null || typeof e == "boolean" ? ur(hr) : ne(e) ? ur(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kl(e) ? lr(e) : ur(ca, null, String(e));
}
function lr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xr(e);
}
function Yn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Yn(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !ml(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      Yn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [be(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Tc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Lt([t.class, n.class]));
      else if (a === "style")
        t.style = is([t.style, n.style]);
      else if (Qn(a)) {
        const s = t[a], o = n[a];
        o && s !== o && !(ne(s) && s.includes(o)) ? t[a] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ea(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Kt(e, t, r, n = null) {
  Ft(e, t, 7, [
    r,
    n
  ]);
}
const Cc = ul();
let xc = 0;
function kc(e, t, r) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || Cc, s = {
    uid: xc++,
    vnode: e,
    type: n,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ql(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yl(n, a),
    emitsOptions: dl(n, a),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ac.bind(null, s), e.ce && e.ce(s), s;
}
let ct = null;
const Ac = () => ct || Rt;
let Xn, Sn;
{
  const e = na(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (s) => {
      a.length > 1 ? a.forEach((o) => o(s)) : a[0](s);
    };
  };
  Xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ct = r
  ), Sn = t(
    "__VUE_SSR_SETTERS__",
    (r) => En = r
  );
}
const xn = (e) => {
  const t = ct;
  return Xn(e), e.scope.on(), () => {
    e.scope.off(), Xn(t);
  };
}, qs = () => {
  ct && ct.scope.off(), Xn(null);
};
function Rl(e) {
  return e.vnode.shapeFlag & 4;
}
let En = !1;
function Rc(e, t = !1, r = !1) {
  t && Sn(t);
  const { props: n, children: a } = e.vnode, s = Rl(e);
  uc(e, n, s, t), hc(e, a, r || t);
  const o = s ? Nc(e, t) : void 0;
  return t && Sn(!1), o;
}
function Nc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    dr();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, s = xn(e), o = Cn(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = Ci(o);
    if (fr(), s(), (u || e.sp) && !bn(e) && nl(e), u) {
      if (o.then(qs, qs), t)
        return o.then((h) => {
          Sn(!0);
          try {
            Bs(e, h, t);
          } finally {
            Sn(!1);
          }
        }).catch((h) => {
          sa(h, e, 0);
        });
      e.asyncDep = o;
    } else
      Bs(e, o);
  } else
    Nl(e);
}
function Bs(e, t, r) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Ki(t)), Nl(e);
}
function Nl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Zt);
  {
    const a = xn(e);
    dr();
    try {
      Xo(e);
    } finally {
      fr(), a();
    }
  }
}
const Oc = {
  get(e, t) {
    return Qe(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Oc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ua(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ki(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in yn)
        return yn[r](e);
    },
    has(t, r) {
      return r in t || r in yn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return de(e) && "__vccOpts" in e;
}
const z = (e, t) => /* @__PURE__ */ Co(e, t, En), Lc = "3.5.42";
let es;
const zs = typeof window < "u" && window.trustedTypes;
if (zs)
  try {
    es = /* @__PURE__ */ zs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ol = es ? (e) => es.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, Ws = sr && /* @__PURE__ */ sr.createElement("template"), Uc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? sr.createElementNS(Mc, e) : t === "mathml" ? sr.createElementNS(Dc, e) : r ? sr.createElement(e, { is: r }) : sr.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => sr.createTextNode(e),
  createComment: (e) => sr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => sr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, a, s) {
    const o = r ? r.previousSibling : t.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), r), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      Ws.innerHTML = Ol(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Ws.content;
      if (n === "svg" || n === "mathml") {
        const h = u.firstChild;
        for (; h.firstChild; )
          u.appendChild(h.firstChild);
        u.removeChild(h);
      }
      t.insertBefore(u, r);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ks = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, a = Fe(r);
  let s = !1;
  if (r && !a) {
    if (t)
      if (Fe(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && un(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && un(n, o, "");
    for (const o in r) {
      o === "display" && (s = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !Fe(t) && t ? t[o] : void 0,
        u
      ) || un(n, o, u) : un(n, o, "");
    }
  } else if (a) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, s = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Ks in e && (e[Ks] = s ? n.display : "", e[$c] && (n.display = "none"));
}
const Dn = /\s*!important$/;
function un(e, t, r) {
  if (ne(r))
    r.forEach((n) => un(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Dn.test(r) ? e.setProperty(t, r.replace(Dn, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    Dn.test(r) ? e.setProperty(
      Ir(n),
      r.replace(Dn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Gs = ["Webkit", "Moz", "ms"], Ia = {};
function Bc(e, t) {
  const r = Ia[t];
  if (r)
    return r;
  let n = Mt(t);
  if (n !== "filter" && n in e)
    return Ia[t] = n;
  n = Ai(n);
  for (let a = 0; a < Gs.length; a++) {
    const s = Gs[a] + n;
    if (s in e)
      return Ia[t] = s;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Fe(n) && r === n;
}
const Ys = "http://www.w3.org/1999/xlink";
function Xs(e, t, r, n, a, s = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ys, t.slice(6, t.length)) : e.setAttributeNS(Ys, t, r) : r == null || s && !Ni(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Qt(r) ? String(r) : r
  );
}
function Js(e, t, r, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ol(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const u = s === "OPTION" ? e.getAttribute("value") || "" : e.value, h = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (u !== h || !("_value" in e)) && (e.value = h), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const u = typeof e[t];
    u === "boolean" ? r = Ni(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function kr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Zs = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, a = null) {
  const s = e[Zs] || (e[Zs] = {}), o = s[t];
  if (n && o)
    o.value = n;
  else {
    const [u, h] = Xc(t);
    if (n) {
      const w = s[t] = Qc(
        n,
        a
      );
      kr(e, u, w, h);
    } else o && (Wc(e, u, o, h), s[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ir(e.slice(2)), t];
}
let La = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => La || (Jc.then(() => La = 0), La = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const a = r.value;
    if (ne(a)) {
      const s = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        s.call(n), n._stopped = !0;
      };
      const o = a.slice(), u = [n];
      for (let h = 0; h < o.length && !n._stopped; h++) {
        const w = o[h];
        w && Ft(
          w,
          t,
          5,
          u
        );
      }
    } else
      Ft(
        a,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, a, s) => {
  const o = a === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? qc(e, r, n) : Qn(t) ? ea(t) || Kc(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Js(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xs(e, t, n, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Fe(n))) ? Js(e, Mt(t), n, s, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Xs(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qs(t) && de(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Qs(t) && Fe(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Mt(t);
  return Array.isArray(r) ? r.some((a) => Mt(a) === n) : Object.keys(r).some((a) => Mt(a) === n);
}
const Jn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => $n(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function ei(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ar = /* @__PURE__ */ Symbol("_assign"), Un = /* @__PURE__ */ Symbol("_initialValue");
function Ma(e, t, r) {
  return t && (e = e.trim()), r && (e = ra(e)), e;
}
const ti = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Un] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Un] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ar] = Jn(a);
    const s = n || a.props && a.props.type === "number";
    kr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ar](Ma(e.value, r, s));
    }), (r || s) && kr(e, "change", () => {
      e.value = Ma(e.value, r, s);
    }), t || (kr(e, "compositionstart", nu), kr(e, "compositionend", ei), kr(e, "change", ei));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", s = e[Un];
    delete e[Un], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[Ar](Ma(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: s } }, o) {
    if (e[Ar] = Jn(o), e.composing) return;
    const u = (s || e.type === "number") && !/^0\d/.test(e.value) ? ra(e.value) : e.value, h = t ?? "";
    if (u === h)
      return;
    const w = e.getRootNode();
    (w instanceof Document || w instanceof ShadowRoot) && w.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === h) || (e.value = h);
  }
}, St = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, kr(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (h) => h.selected).map(
        (h) => r ? ra(Zn(h)) : Zn(h)
      ), s = e.multiple, o = s ? Pr(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        s,
        s ? ne(o) ? a.slice() : a : o
      ];
      try {
        e[Ar](o);
      } finally {
        Yi(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Ar] = Jn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ri(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Ar] = Jn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && ri(e, t);
  }
};
function au(e, t, r) {
  if (!r || ne(e)) return vr(e, t);
  if (Pr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function ri(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Pr(t))) {
    for (let a = 0, s = e.options.length; a < s; a++) {
      const o = e.options[a], u = Zn(o);
      if (r)
        if (n) {
          const h = typeof u;
          h === "string" || h === "number" ? o.selected = t.some((w) => String(w) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (vr(Zn(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Zn(e) {
  return "_value" in e ? e._value : e.value;
}
const su = ["ctrl", "shift", "alt", "meta"], iu = {
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
  exact: (e, t) => su.some((r) => e[`${r}Key`] && !t.includes(r))
}, Fn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((a, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const u = iu[t[o]];
      if (u && u(a, t)) return;
    }
    return e(a, ...s);
  }));
}, lu = /* @__PURE__ */ tt({ patchProp: eu }, Uc);
let ni;
function ou() {
  return ni || (ni = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const a = du(n);
    if (!a) return;
    const s = t._component;
    !de(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = r(a, !1, uu(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function du(e) {
  return Fe(e) ? document.querySelector(e) : e;
}
function fu(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(n);
  if (a === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const s = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function ai(e, t) {
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
    var n, a, s, o, u = [], h = !0, w = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(h = (n = s.call(r)).done) && (u.push(n.value), u.length !== t); h = !0) ;
    } catch (y) {
      w = !0, a = y;
    } finally {
      try {
        if (!h && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (w) throw a;
      }
    }
    return u;
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
    if (typeof e == "string") return ai(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ai(e, t) : void 0;
  }
}
const Pl = Object.entries, si = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let qe = Object.freeze, Ke = Object.seal, Br = Object.create, Il = typeof Reflect < "u" && Reflect, ts = Il.apply, rs = Il.construct;
qe || (qe = function(t) {
  return t;
});
Ke || (Ke = function(t) {
  return t;
});
ts || (ts = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    a[s - 2] = arguments[s];
  return t.apply(r, a);
});
rs || (rs = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const xr = je(Array.prototype.forEach), wu = je(Array.prototype.lastIndexOf), ii = je(Array.prototype.pop), an = je(Array.prototype.push), Su = je(Array.prototype.splice), Gr = Array.isArray, dn = je(String.prototype.toLowerCase), Da = je(String.prototype.toString), li = je(String.prototype.match), sn = je(String.prototype.replace), oi = je(String.prototype.indexOf), Eu = je(String.prototype.trim), Tu = je(Number.prototype.toString), Cu = je(Boolean.prototype.toString), ci = typeof BigInt > "u" ? null : je(BigInt.prototype.toString), ui = typeof Symbol > "u" ? null : je(Symbol.prototype.toString), _t = je(Object.prototype.hasOwnProperty), ln = je(Object.prototype.toString), Ze = je(RegExp.prototype.test), Tr = xu(TypeError);
function je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return ts(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return rs(e, r);
  };
}
function ye(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dn;
  if (si && si(e, null), !Gr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const s = r(a);
      s !== a && (gu(t) || (t[n] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function ku(e) {
  for (let t = 0; t < e.length; t++)
    _t(e, t) || (e[t] = null);
  return e;
}
function Tt(e) {
  const t = Br(null);
  for (const n of Pl(e)) {
    var r = bu(n, 2);
    const a = r[0], s = r[1];
    _t(e, a) && (Gr(s) ? t[a] = ku(s) : s && typeof s == "object" && s.constructor === Object ? t[a] = Tt(s) : t[a] = s);
  }
  return t;
}
function Au(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Tu(e);
    case "boolean":
      return Cu(e);
    case "bigint":
      return ci ? ci(e) : "0";
    case "symbol":
      return ui ? ui(e) : "Symbol()";
    case "undefined":
      return ln(e);
    case "function":
    case "object": {
      if (e === null)
        return ln(e);
      const t = e, r = It(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ln(n);
      }
      return ln(e);
    }
    default:
      return ln(e);
  }
}
function It(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return je(n.get);
      if (typeof n.value == "function")
        return je(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ru(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const di = qe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = qe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fa = qe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = qe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ha = qe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ou = qe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), fi = qe(["#text"]), pi = qe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $a = qe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), hi = qe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hn = qe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ke(/\${[\w\W]*/g), Mu = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Du = Ke(/^aria-[\-\w]+$/), mi = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), bi = Ke(/<[/\w!]/g), yi = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), Et = {
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
}, Ll = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = qe(ye({}, Ll)), Bu = (function() {
  const e = {};
  return xr(Ll, (t) => {
    e[t] = Ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), qe(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, gi = function() {
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
}, yr = function(t, r, n, a) {
  return _t(t, r) && Gr(t[r]) ? ye(a.base ? Tt(a.base) : {}, t[r], a.transform) : n;
}, ja = function(t, r, n) {
  const a = _t(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? Tt(a) : n();
};
function Ml() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ml(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, u = e.Element, h = e.NodeFilter, w = e.NamedNodeMap;
  w === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, I = u.prototype, j = It(I, "cloneNode"), ie = It(I, "remove"), K = It(I, "nextSibling"), ue = It(I, "childNodes"), le = It(I, "parentNode"), W = It(I, "shadowRoot"), D = It(I, "attributes"), V = o && o.prototype ? It(o.prototype, "nodeType") : null, ce = o && o.prototype ? It(o.prototype, "nodeName") : null, Me = o && o.prototype ? It(o.prototype, "ownerDocument") : null, Pe = function(d) {
    return V ? V(d) : d.nodeType;
  }, Be = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, De = "", rt, ut = !1, Ge = 0;
  const xt = function() {
    if (Ge > 0)
      throw Tr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(d) {
    xt(), Ge++;
    try {
      return Ee.createHTML(d);
    } finally {
      Ge--;
    }
  }, Ue = function(d) {
    xt(), Ge++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Ge--;
    }
  }, ge = function() {
    return ut || (rt = Wu(E, a), ut = !0), rt;
  }, fe = r, ze = fe.implementation, _e = fe.createNodeIterator, Ne = fe.createDocumentFragment, We = fe.getElementsByTagName, nt = n.importNode;
  let me = gi();
  t.isSupported = typeof Pl == "function" && typeof le == "function" && ze && ze.createHTMLDocument !== void 0;
  const er = Pu, $e = Iu, vt = Lu, wt = Mu, dt = Du, ft = Uu, Ot = Fu, m = $u;
  let b = mi, _ = null;
  const R = ye({}, [...di, ...Ua, ...Fa, ...Ha, ...fi]);
  let x = null;
  const A = ye({}, [...pi, ...$a, ...hi, ...Hn]);
  let M = Object.seal(Br(null, {
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
  })), U = null, L = null;
  const k = Object.seal(Br(null, {
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
  let Y = !0, H = !0, B = !1, Q = !0, ee = !1, P = !0, O = !1, $ = !1, te = null, ae = null, pe = !1, he = !1, oe = !1, Te = !1, ke = !0, Ye = !1;
  const Ht = "user-content-";
  let Xe = !0, tr = !1, kt = {}, pt = null;
  const $t = ye({}, [
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
  let Pt = null;
  const ht = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let mt = null;
  const Lr = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jt = "http://www.w3.org/1998/Math/MathML", Vt = "http://www.w3.org/2000/svg", at = "http://www.w3.org/1999/xhtml";
  let br = at, qt = !1, Mr = null;
  const da = ye({}, [jt, Vt, at], Da), Jr = qe(["mi", "mo", "mn", "ms", "mtext"]);
  let Zr = ye({}, Jr);
  const Qr = qe(["annotation-xml"]);
  let Dr = ye({}, Qr);
  const fa = ye({}, ["title", "style", "font", "a", "script"]);
  let rr = null;
  const pa = ["application/xhtml+xml", "text/html"], ha = "text/html";
  let Oe = null, Bt = null;
  const ma = r.createElement("form"), kn = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Ur = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bt && Bt === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = Tt(d), rr = // eslint-disable-next-line unicorn/prefer-includes
    pa.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? ha : d.PARSER_MEDIA_TYPE, Oe = rr === "application/xhtml+xml" ? Da : dn, _ = yr(d, "ALLOWED_TAGS", R, {
      transform: Oe
    }), x = yr(d, "ALLOWED_ATTR", A, {
      transform: Oe
    }), Mr = yr(d, "ALLOWED_NAMESPACES", da, {
      transform: Da
    }), mt = yr(d, "ADD_URI_SAFE_ATTR", Lr, {
      transform: Oe,
      base: Lr
    }), Pt = yr(d, "ADD_DATA_URI_TAGS", ht, {
      transform: Oe,
      base: ht
    }), pt = yr(d, "FORBID_CONTENTS", $t, {
      transform: Oe
    }), U = yr(d, "FORBID_TAGS", Tt({}), {
      transform: Oe
    }), L = yr(d, "FORBID_ATTR", Tt({}), {
      transform: Oe
    }), kt = _t(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? Tt(d.USE_PROFILES) : d.USE_PROFILES : !1, Y = d.ALLOW_ARIA_ATTR !== !1, H = d.ALLOW_DATA_ATTR !== !1, B = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = d.SAFE_FOR_TEMPLATES || !1, P = d.SAFE_FOR_XML !== !1, O = d.WHOLE_DOCUMENT || !1, he = d.RETURN_DOM || !1, oe = d.RETURN_DOM_FRAGMENT || !1, Te = d.RETURN_TRUSTED_TYPE || !1, pe = d.FORCE_BODY || !1, ke = d.SANITIZE_DOM !== !1, Ye = d.SANITIZE_NAMED_PROPS || !1, Xe = d.KEEP_CONTENT !== !1, tr = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : mi, br = typeof d.NAMESPACE == "string" ? d.NAMESPACE : at, Zr = ja(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ye({}, Jr)
      // Default built-in map
    ), Dr = ja(
      d,
      "HTML_INTEGRATION_POINTS",
      () => ye({}, Qr)
      // Default built-in map
    );
    const g = ja(d, "CUSTOM_ELEMENT_HANDLING", () => Br(null));
    if (M = Br(null), _t(g, "tagNameCheck") && kn(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), _t(g, "attributeNameCheck") && kn(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), _t(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ke(M), ee && (H = !1), oe && (he = !0), kt && (_ = ye({}, fi), x = Br(null), kt.html === !0 && (ye(_, di), ye(x, pi)), kt.svg === !0 && (ye(_, Ua), ye(x, $a), ye(x, Hn)), kt.svgFilters === !0 && (ye(_, Fa), ye(x, $a), ye(x, Hn)), kt.mathMl === !0 && (ye(_, Ha), ye(x, hi), ye(x, Hn))), k.tagCheck = null, k.attributeCheck = null, _t(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? k.tagCheck = d.ADD_TAGS : Gr(d.ADD_TAGS) && (_ === R && (_ = Tt(_)), ye(_, d.ADD_TAGS, Oe))), _t(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? k.attributeCheck = d.ADD_ATTR : Gr(d.ADD_ATTR) && (x === A && (x = Tt(x)), ye(x, d.ADD_ATTR, Oe))), _t(d, "ADD_FORBID_CONTENTS") && Gr(d.ADD_FORBID_CONTENTS) && (pt === $t && (pt = Tt(pt)), ye(pt, d.ADD_FORBID_CONTENTS, Oe)), Xe && (_["#text"] = !0), O && ye(_, ["html", "head", "body"]), _.table && (ye(_, ["tbody"]), delete U.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Tr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Tr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const N = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        De = He("");
      } catch (q) {
        throw Ee = N, q;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, De = "") : (Ee === void 0 && (Ee = ge()), Ee && typeof De == "string" && (De = He("")));
    qe && qe(d), Bt = d;
  }, en = ye({}, [...Ua, ...Fa, ...Nu]), An = ye({}, [...Ha, ...Ou]), ba = function(d, g, N) {
    return g.namespaceURI === at ? d === "svg" : g.namespaceURI === jt ? d === "svg" && (N === "annotation-xml" || Zr[N]) : !!en[d];
  }, ya = function(d, g, N) {
    return g.namespaceURI === at ? d === "math" : g.namespaceURI === Vt ? d === "math" && Dr[N] : !!An[d];
  }, wr = function(d, g, N) {
    return g.namespaceURI === Vt && !Dr[N] || g.namespaceURI === jt && !Zr[N] ? !1 : !An[d] && (fa[d] || !en[d]);
  }, ga = function(d) {
    let g = le(d);
    (!g || !g.tagName) && (g = {
      namespaceURI: br,
      tagName: "template"
    });
    const N = dn(d.tagName), q = dn(g.tagName);
    return Mr[d.namespaceURI] ? d.namespaceURI === Vt ? ba(N, g, q) : d.namespaceURI === jt ? ya(N, g, q) : d.namespaceURI === at ? wr(N, g, q) : !!(rr === "application/xhtml+xml" && Mr[d.namespaceURI]) : !1;
  }, zt = function(d) {
    an(t.removed, {
      element: d
    });
    try {
      le(d).removeChild(d);
    } catch {
      if (ie(d), !le(d))
        throw Tr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Rn = function(d, g, N) {
    try {
      d.removeAttributeNode(g);
    } catch {
      try {
        d.removeAttribute(N);
      } catch {
      }
    }
  }, Fr = function(d) {
    Hr(d);
    const g = ue(d);
    if (g) {
      const q = [];
      xr(g, (J) => {
        an(q, J);
      }), xr(q, (J) => {
        try {
          ie(J);
        } catch {
        }
      });
    }
    const N = D(d);
    if (N)
      for (let q = N.length - 1; q >= 0; --q) {
        const J = N[q], se = J && J.name;
        typeof se == "string" && Rn(d, J, se);
      }
  }, nr = function(d, g, N) {
    if (!N)
      try {
        N = g.getAttributeNode(d);
      } catch {
        N = null;
      }
    an(t.removed, {
      attribute: N || null,
      from: g
    });
    try {
      N ? g.removeAttributeNode(N) : g.removeAttribute(d);
    } catch {
      try {
        g.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (he || oe)
        try {
          zt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(d, "");
        } catch {
        }
  }, _a = function(d) {
    const g = D(d);
    if (g)
      for (let N = g.length - 1; N >= 0; --N) {
        const q = g[N], J = q && q.name;
        typeof J != "string" || x[Oe(J)] || Rn(d, q, J);
      }
  }, Hr = function(d) {
    const g = [d];
    for (; g.length > 0; ) {
      const N = g.pop();
      Pe(N) === Et.element && _a(N);
      const J = ue(N);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          g.push(J[se]);
    }
  }, tn = function(d, g) {
    return P ? d === "patchsrc" ? !0 : d === "for" && g !== "label" && g !== "output" : !1;
  }, Nn = function(d) {
    if (!P)
      return;
    const g = [d];
    for (; g.length > 0; ) {
      const N = g.pop(), q = Pe(N);
      if (q === Et.processingInstruction || q === Et.comment && Ze(yi, N.data)) {
        try {
          ie(N);
        } catch {
        }
        continue;
      }
      if (q === Et.element) {
        const se = N, Ae = Oe(Be(N));
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && tn("for", Ae) && se.removeAttribute("for");
        } catch {
        }
      }
      const J = ue(N);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          g.push(J[se]);
    }
  }, S = function(d) {
    let g = null, N = null;
    if (pe)
      d = "<remove></remove>" + d;
    else {
      const se = li(d, /^[\r\n\t ]+/);
      N = se && se[0];
    }
    rr === "application/xhtml+xml" && br === at && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const q = Ee ? He(d) : d;
    if (br === at)
      try {
        g = new y().parseFromString(q, rr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = ze.createDocument(br, "template", null);
      try {
        g.documentElement.innerHTML = qt ? De : q;
      } catch {
      }
    }
    const J = g.body || g.documentElement;
    return d && N && J.insertBefore(r.createTextNode(N), J.childNodes[0] || null), br === at ? We.call(g, O ? "html" : "body")[0] : O ? g.documentElement : J;
  }, v = function(d) {
    const g = Me ? Me(d) : d.ownerDocument;
    return _e.call(
      g || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, p = function(d) {
    return d = sn(d, er, " "), d = sn(d, $e, " "), d = sn(d, vt, " "), d;
  }, Z = function(d) {
    var g;
    d.normalize();
    const N = Me ? Me(d) : d.ownerDocument, q = _e.call(
      N || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_TEXT | h.SHOW_COMMENT | h.SHOW_CDATA_SECTION | h.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = q.nextNode();
    for (; J; )
      J.data = p(J.data), J = q.nextNode();
    const se = (g = d.querySelectorAll) === null || g === void 0 ? void 0 : g.call(d, "template");
    se && xr(se, (Ae) => {
      Ve(Ae.content) && Z(Ae.content);
    });
  }, Ie = function(d) {
    const g = ce ? ce(d) : null;
    return typeof g != "string" || Oe(g) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== D(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    d.nodeType !== V(d) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    d.childNodes !== ue(d);
  }, Ve = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Wt = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function At(F, d, g) {
    F.length !== 0 && xr(F, (N) => {
      N.call(t, d, g, Bt);
    });
  }
  const va = function(d, g) {
    return !!(P && d.hasChildNodes() && !Wt(d.firstElementChild) && Ze(bi, d.textContent) && Ze(bi, d.innerHTML) || P && d.namespaceURI === at && qu[g] && (Wt(d.firstElementChild) || typeof d.textContent == "string" && Ze(Bu[g], d.textContent)) || d.nodeType === Et.processingInstruction || P && d.nodeType === Et.comment && Ze(yi, d.data));
  }, On = function(d, g) {
    if (d instanceof RegExp)
      return Ze(d, g);
    if (d instanceof Function) {
      for (var N = arguments.length, q = new Array(N > 2 ? N - 2 : 0), J = 2; J < N; J++)
        q[J - 2] = arguments[J];
      return !!d(g, ...q);
    }
    return !1;
  }, Ul = function(d, g, N) {
    if (!U[g] && Es(g) && On(M.tagNameCheck, g))
      return !1;
    if (Xe && !pt[g]) {
      const q = le(d), J = ue(d);
      if (J && q) {
        const se = J.length;
        for (let Ae = se - 1; Ae >= 0; --Ae) {
          const Le = d === N ? j(J[Ae], !0) : J[Ae];
          q.insertBefore(Le, K(d));
        }
      }
    }
    return zt(d), !0;
  }, _s = function(d, g, N, q) {
    return d.length === 0 ? g : g === N || g === q ? Tt(g) : g;
  }, vs = function(d, g) {
    return d === g || le(d) !== null ? !1 : (tr && Hr(d), !0);
  }, ws = function(d, g) {
    if (At(me.beforeSanitizeElements, d, null), vs(d, g))
      return !0;
    if (Ie(d))
      return zt(d), !0;
    const N = Oe(Be(d));
    if (_ = _s(me.uponSanitizeElement, _, R, te), At(me.uponSanitizeElement, d, {
      tagName: N,
      allowedTags: _
    }), vs(d, g))
      return !0;
    if (va(d, N))
      return zt(d), !0;
    if (U[N] || !(k.tagCheck instanceof Function && k.tagCheck(N)) && !_[N]) {
      const J = Ul(d, N, g);
      return J === !1 && At(me.afterSanitizeElements, d, null), J;
    }
    if (Pe(d) === Et.element && !ga(d) || (N === "noscript" || N === "noembed" || N === "noframes") && Ze(ju, d.innerHTML))
      return zt(d), !0;
    if (ee && d.nodeType === Et.text) {
      const J = p(d.textContent);
      d.textContent !== J && (an(t.removed, {
        element: d.cloneNode()
      }), d.textContent = J);
    }
    return At(me.afterSanitizeElements, d, null), !1;
  }, Ss = function(d, g, N) {
    if (L[g] || tn(g, d) || ke && (g === "id" || g === "name") && (N in r || N in ma))
      return !1;
    const q = x[g] || k.attributeCheck instanceof Function && k.attributeCheck(g, d);
    return H && Ze(wt, g) || Y && Ze(dt, g) ? !0 : q ? mt[g] || Ze(b, sn(N, Ot, "")) || (g === "src" || g === "xlink:href" || g === "href") && d !== "script" && oi(N, "data:") === 0 && Pt[d] || B && !Ze(ft, sn(N, Ot, "")) ? !0 : !N : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Es(d) && On(M.tagNameCheck, d) && On(M.attributeNameCheck, g, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && On(M.tagNameCheck, N)
    );
  }, Fl = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Es = function(d) {
    return !Fl[dn(d)] && Ze(m, d);
  }, Hl = function(d, g, N, q) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !N)
      switch (E.getAttributeType(d, g)) {
        case "TrustedHTML":
          return He(q);
        case "TrustedScriptURL":
          return Ue(q);
      }
    return q;
  }, $l = function(d, g, N, q) {
    try {
      N ? d.setAttributeNS(N, g, q) : d.setAttribute(g, q), Ie(d) ? zt(d) : ii(t.removed);
    } catch {
      nr(g, d);
    }
  }, Ts = function(d) {
    At(me.beforeSanitizeAttributes, d, null);
    const g = d.attributes;
    if (!g || Ie(d))
      return;
    x = _s(me.uponSanitizeAttribute, x, A, ae);
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let q = g.length;
    const J = Oe(d.nodeName);
    for (; q--; ) {
      const se = g[q], Ae = se.name, Le = se.namespaceURI, bt = se.value, yt = Oe(Ae), Sa = bt;
      let st = Ae === "value" ? Sa : Eu(Sa);
      if (N.attrName = yt, N.attrValue = st, N.keepAttr = !0, N.forceKeepAttr = void 0, At(me.uponSanitizeAttribute, d, N), st = N.attrValue, Ye && (yt === "id" || yt === "name") && oi(st, Ht) !== 0 && (nr(Ae, d, se), st = Ht + st), P && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        nr(Ae, d, se);
        continue;
      }
      if (yt === "attributename" && li(st, "href")) {
        nr(Ae, d, se);
        continue;
      }
      if (!N.forceKeepAttr) {
        if (!N.keepAttr) {
          nr(Ae, d, se);
          continue;
        }
        if (!Q && Ze(Vu, st)) {
          nr(Ae, d, se);
          continue;
        }
        if (ee && (st = p(st)), !Ss(J, yt, st)) {
          nr(Ae, d, se);
          continue;
        }
        st = Hl(J, yt, Le, st), st !== Sa && $l(d, Ae, Le, st);
      }
    }
    At(me.afterSanitizeAttributes, d, null);
  }, Pn = function(d) {
    let g = null;
    const N = v(d);
    for (At(me.beforeSanitizeShadowDOM, d, null); g = N.nextNode(); )
      if (At(me.uponSanitizeShadowNode, g, null), ws(g, d), Ts(g), Ve(g.content) && Pn(g.content), Pe(g) === Et.element) {
        const q = W(g);
        Ve(q) && (wa(q), Pn(q));
      }
    At(me.afterSanitizeShadowDOM, d, null);
  }, wa = function(d) {
    const g = [{
      node: d,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const N = g.pop();
      if (N.shadow) {
        Pn(N.shadow);
        continue;
      }
      const q = N.node, se = Pe(q) === Et.element, Ae = ue(q);
      if (Ae)
        for (let Le = Ae.length - 1; Le >= 0; --Le)
          g.push({
            node: Ae[Le],
            shadow: null
          });
      if (se) {
        const Le = ce ? ce(q) : null;
        if (typeof Le == "string" && Oe(Le) === "template") {
          const bt = q.content;
          Ve(bt) && g.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (se) {
        const Le = W(q);
        Ve(Le) && g.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, N = null, q = null, J = null;
    if (qt = !F, qt && (F = "<!-->"), typeof F != "string" && !Wt(F) && (F = Au(F), typeof F != "string"))
      throw Tr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = te, x = ae) : Ur(d), (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && (_ = Tt(_)), me.uponSanitizeAttribute.length > 0 && (x = Tt(x)), t.removed = [];
    const se = tr && typeof F != "string" && Wt(F);
    if (se) {
      Nn(F);
      const bt = Be(F);
      if (typeof bt == "string") {
        const yt = Oe(bt);
        if (!_[yt] || U[yt])
          throw Fr(F), Tr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ie(F))
        throw Fr(F), Tr("root node is clobbered and cannot be sanitized in-place");
      try {
        wa(F);
      } catch (yt) {
        throw Fr(F), yt;
      }
    } else if (Wt(F))
      g = S("<!---->"), N = g.ownerDocument.importNode(F, !0), N.nodeType === Et.element && N.nodeName === "BODY" || N.nodeName === "HTML" ? g = N : g.appendChild(N), wa(N);
    else {
      if (!he && !ee && !O && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && Te ? He(F) : F;
      if (g = S(F), !g)
        return he ? null : Te ? De : "";
    }
    g && pe && zt(g.firstChild);
    const Ae = se ? F : g;
    try {
      const bt = v(Ae);
      for (; q = bt.nextNode(); )
        ws(q, Ae), Ts(q), Ve(q.content) && Pn(q.content);
    } catch (bt) {
      throw se && (Fr(F), xr(t.removed, (yt) => {
        yt.element && Hr(yt.element);
      })), bt;
    }
    if (se)
      return xr(t.removed, (bt) => {
        bt.element && Hr(bt.element);
      }), ee && Z(F), F;
    if (he) {
      if (ee && Z(g), oe)
        for (J = Ne.call(g.ownerDocument); g.firstChild; )
          J.appendChild(g.firstChild);
      else
        J = g;
      return (x.shadowroot || x.shadowrootmode) && (J = nt.call(n, J, !0)), J;
    }
    let Le = O ? g.outerHTML : g.innerHTML;
    return O && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ze(Hu, g.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Le), ee && (Le = p(Le)), Ee && Te ? He(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ur(F), $ = !0, te = _, ae = x;
  }, t.clearConfig = function() {
    Bt = null, $ = !1, te = null, ae = null, Ee = rt, De = "";
  }, t.isValidAttribute = function(F, d, g) {
    Bt || Ur({});
    const N = Oe(F), q = Oe(d);
    return Ss(N, q, g);
  }, t.addHook = function(F, d) {
    typeof d == "function" && _t(me, F) && an(me[F], d);
  }, t.removeHook = function(F, d) {
    if (_t(me, F)) {
      if (d !== void 0) {
        const g = wu(me[F], d);
        return g === -1 ? void 0 : Su(me[F], g, 1)[0];
      }
      return ii(me[F]);
    }
  }, t.removeHooks = function(F) {
    _t(me, F) && (me[F] = []);
  }, t.removeAllHooks = function() {
    me = gi();
  }, t;
}
var Ku = Ml();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Va, _i;
function Yu() {
  if (_i) return Va;
  _i = 1;
  var e = /["'&<>]/;
  Va = t;
  function t(r) {
    var n = "" + r, a = e.exec(n);
    if (!a)
      return n;
    var s, o = "", u = 0, h = 0;
    for (u = a.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
        case 34:
          s = "&quot;";
          break;
        case 38:
          s = "&amp;";
          break;
        case 39:
          s = "&#39;";
          break;
        case 60:
          s = "&lt;";
          break;
        case 62:
          s = "&gt;";
          break;
        default:
          continue;
      }
      h !== u && (o += n.substring(h, u)), h = u + 1, o += s;
    }
    return h !== u ? o + n.substring(h, u) : o;
  }
  return Va;
}
var Xu = Yu();
const vi = /* @__PURE__ */ Gu(Xu);
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
function l(e, t, r, n, a) {
  const s = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, h = (K) => K, w = (u.sanitize ? Ku.sanitize : h) || h, y = u.escape ? vi : h, E = (K) => typeof K == "string" || typeof K == "number", I = (K, ue, le) => K.replace(/%n/g, "" + le).replace(/{([^{}]*)}/g, (W, D) => {
    if (ue === void 0 || !(D in ue))
      return y(W);
    const V = ue[D];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? vi : h)(`${V.value}`) : y(W);
  });
  let ie = (a?.bundle ?? Ju(e)).translations[t] || t;
  return ie = Array.isArray(ie) ? ie[0] : ie, w(typeof s == "object" || o !== void 0 ? I(
    ie,
    s,
    o
  ) : ie);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = ["aria-label"], td = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, rd = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, nd = { class: "library-workspace-panel-title" }, ad = { class: "library-workspace-panel-purpose" }, sd = { class: "library-workspace-scope-badge" }, id = { class: "library-workspace-panel-copy" }, ld = { class: "library-muted library-catalogue-eyebrow" }, od = { class: "library-muted" }, cd = ["aria-label"], ud = ["name", "value"], dd = { class: "library-quick-search-row" }, fd = { class: "library-quick-filter-search" }, pd = ["aria-label"], hd = { class: "library-quick-filter-options" }, md = { class: "library-quick-filter-option-grid" }, bd = { value: "title" }, yd = { value: "recent" }, gd = { value: "publicationDate" }, _d = { value: "publication" }, vd = { value: "lastOpened" }, wd = { value: "format" }, Sd = { value: "" }, Ed = { value: "1" }, Td = ["value"], Cd = ["value"], xd = ["aria-label"], kd = ["aria-label"], Ad = ["aria-label"], Rd = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, Nd = { value: "" }, Od = ["value"], Pd = { value: "" }, Id = ["value"], Ld = { value: "" }, Md = ["value"], Dd = { value: "" }, Ud = ["value"], Fd = { value: "" }, Hd = ["value"], $d = { value: "" }, jd = ["value"], Vd = { value: "" }, qd = ["value"], Bd = { value: "" }, zd = ["value"], Wd = { value: "" }, Kd = ["value"], Gd = { value: "" }, Yd = ["value"], Xd = { value: "" }, Jd = { value: "1" }, Zd = {
  type: "submit",
  class: "button primary"
}, Qd = {
  href: "?",
  class: "button secondary"
}, ef = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, tf = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, rf = { class: "library-workspace-panel-title" }, nf = { class: "library-workspace-panel-purpose" }, af = { class: "library-workspace-scope-badge" }, sf = { class: "library-workspace-panel-copy" }, lf = { class: "library-muted library-catalogue-eyebrow" }, of = { class: "library-muted" }, cf = {
  key: 0,
  class: "library-home-hero-card"
}, uf = { class: "library-muted" }, df = { class: "library-home-hero-actions" }, ff = ["href"], pf = {
  key: 1,
  class: "library-home-rediscover"
}, hf = { class: "library-muted library-catalogue-eyebrow" }, mf = { class: "library-muted" }, bf = { class: "library-muted" }, yf = ["aria-label"], gf = ["href", "title"], _f = { class: "library-useful-view-count" }, vf = { class: "library-discovery-shortcut-grid" }, wf = {
  key: 0,
  class: "library-periodical-groups"
}, Sf = { class: "library-muted" }, Ef = ["href"], Tf = { class: "library-muted" }, Cf = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty"
}, xf = { class: "library-muted" }, kf = {
  key: 2,
  class: "library-year-groups"
}, Af = ["href"], Rf = {
  key: 3,
  class: "library-creator-groups"
}, Nf = ["href"], Of = { class: "library-saved-collections" }, Pf = { class: "library-muted" }, If = ["action"], Lf = ["value"], Mf = ["value"], Df = ["placeholder", "disabled"], Uf = ["disabled"], Ff = {
  key: 0,
  class: "library-muted"
}, Hf = ["aria-label"], $f = ["href"], jf = ["action"], Vf = ["value"], qf = {
  type: "submit",
  class: "button tertiary"
}, Bf = ["aria-label"], zf = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Wf = { class: "library-workspace-panel-title" }, Kf = { class: "library-workspace-panel-purpose" }, Gf = { class: "library-workspace-scope-badge" }, Yf = { class: "library-workspace-panel-copy" }, Xf = { class: "library-muted library-catalogue-eyebrow" }, Jf = { class: "library-muted" }, Zf = ["action"], Qf = ["value"], ep = ["name", "value"], tp = ["placeholder"], rp = {
  type: "submit",
  class: "button primary"
}, np = { class: "library-muted" }, ap = ["action"], sp = ["value"], ip = ["name", "value"], lp = ["placeholder"], op = {
  type: "submit",
  class: "button secondary"
}, cp = { class: "library-muted" }, up = ["action"], dp = ["value"], fp = ["name", "value"], pp = {
  type: "submit",
  class: "button secondary"
}, hp = { class: "library-muted" }, mp = ["action"], bp = ["value"], yp = ["name", "value"], gp = { name: "bulkEditField" }, _p = { value: "publicationType" }, vp = { value: "subtitle" }, wp = { value: "creators" }, Sp = { value: "publication" }, Ep = { value: "publicationDate" }, Tp = { value: "language" }, Cp = { value: "publisher" }, xp = { value: "genres" }, kp = { value: "classifications" }, Ap = {
  type: "submit",
  class: "button secondary"
}, Rp = { class: "library-muted" }, Np = ["action"], Op = ["value"], Pp = ["name", "value"], Ip = {
  type: "submit",
  class: "button secondary"
}, Lp = { class: "library-muted" }, Mp = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, Dp = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Up = { class: "library-workspace-panel-title" }, Fp = { class: "library-workspace-panel-purpose" }, Hp = { class: "library-workspace-scope-badge" }, $p = { class: "library-workspace-panel-copy" }, jp = { class: "library-muted library-catalogue-eyebrow" }, Vp = { class: "library-muted" }, qp = ["aria-label"], Bp = ["href", "title"], zp = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Wp = { class: "library-muted" }, Kp = ["href"], Gp = ["href"], Yp = ["action"], Xp = ["value"], Jp = {
  type: "submit",
  class: "button secondary"
}, Zp = { class: "library-muted" }, Qp = ["href"], eh = ["action"], th = ["value"], rh = {
  type: "submit",
  class: "button secondary"
}, nh = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, ah = { class: "library-metadata-review-workbench-copy" }, sh = { class: "library-muted library-catalogue-eyebrow" }, ih = { id: "library-metadata-review-workbench-heading" }, lh = { class: "library-muted" }, oh = {
  key: 0,
  class: "library-metadata-review-card"
}, ch = { class: "library-muted" }, uh = { class: "library-metadata-review-fields" }, dh = ["action"], fh = ["value"], ph = ["value"], hh = {
  type: "submit",
  class: "button secondary"
}, mh = { class: "library-metadata-review-actions" }, bh = ["href"], yh = ["href"], gh = {
  key: 1,
  class: "library-muted"
}, _h = ["href"], vh = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, wh = { class: "library-workspace-panel-title" }, Sh = { class: "library-workspace-panel-purpose" }, Eh = { class: "library-workspace-scope-badge" }, Th = { class: "library-workspace-panel-copy" }, Ch = { class: "library-muted library-catalogue-eyebrow" }, xh = { class: "library-muted" }, kh = { class: "library-catalogue-actions-list" }, Ah = ["href"], Rh = ["href"], Nh = ["href"], Oh = ["href"], Ph = { class: "library-actions-health-overview" }, Ih = { class: "library-muted library-catalogue-eyebrow" }, Lh = { class: "library-muted" }, Mh = {
  key: 0,
  class: "library-muted"
}, Dh = {
  key: 1,
  class: "library-notice"
}, Uh = {
  key: 2,
  class: "library-muted"
}, Fh = {
  key: 0,
  class: "library-muted"
}, Hh = {
  key: 1,
  class: "library-muted"
}, $h = {
  key: 2,
  class: "library-muted"
}, jh = ["disabled"], Vh = { class: "library-actions-health-links" }, qh = ["href"], Bh = ["href"], zh = ["href"], Wh = ["href"], Kh = { class: "library-actions-health-grid" }, Gh = { class: "library-import-health-number" }, Yh = { class: "library-import-health-number" }, Xh = { class: "library-muted" }, Jh = { class: "library-muted" }, Zh = {
  key: 0,
  class: "library-import-health-examples"
}, Qh = { class: "library-catalogue-header" }, em = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, tm = { id: "library-catalogue-heading" }, rm = {
  key: 1,
  class: "library-muted"
}, nm = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, am = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, sm = { class: "library-muted library-catalogue-eyebrow" }, im = { id: "library-discovery-heading" }, lm = { class: "library-muted" }, om = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, cm = { key: 0 }, um = { key: 1 }, dm = { key: 2 }, fm = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, pm = { key: 0 }, hm = { key: 1 }, mm = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, bm = { class: "library-muted library-catalogue-eyebrow" }, ym = { id: "library-publication-issue-groups-heading" }, gm = { class: "library-muted" }, _m = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, vm = ["href"], wm = {
  key: 0,
  class: "library-notice"
}, Sm = { class: "library-publication-issue-label" }, Em = ["href"], Tm = { class: "library-muted" }, Cm = {
  key: 1,
  class: "library-publication-unknown-issues"
}, xm = { class: "library-muted" }, km = {
  href: "/apps/library/",
  class: "button secondary"
}, Am = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, Rm = ["aria-pressed"], Nm = ["aria-pressed"], Om = ["aria-pressed"], Pm = { class: "library-catalogue-status-row" }, Im = { class: "library-muted library-filter-result-summary" }, Lm = { key: 0 }, Mm = { href: "?" }, Dm = ["aria-label"], Um = { class: "library-pagination-range" }, Fm = { key: 0 }, Hm = ["href"], $m = {
  key: 1,
  class: "library-muted"
}, jm = ["href"], Vm = {
  key: 3,
  class: "library-muted"
}, qm = ["aria-label"], Bm = ["href", "aria-label"], zm = { class: "library-muted" }, Wm = { class: "library-empty-actions" }, Km = ["href"], Gm = { class: "library-muted" }, Ym = { class: "library-muted" }, Xm = { class: "library-empty-actions" }, Jm = ["href"], Zm = { class: "library-muted" }, Qm = { class: "library-empty-actions" }, eb = ["href"], tb = {
  href: "?",
  class: "button primary"
}, rb = { class: "library-muted" }, nb = { class: "library-empty-actions" }, ab = ["href"], sb = ["href", "aria-label"], ib = { class: "library-cover-frame" }, lb = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, ob = ["src", "alt", "onLoad", "onError"], cb = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, ub = ["action", "onSubmit"], db = ["value"], fb = ["value"], pb = ["aria-pressed", "title", "aria-label", "onClick"], hb = { class: "library-cover-summary" }, mb = { class: "library-cover-primary" }, bb = ["aria-label"], yb = ["href"], gb = ["onToggle"], _b = ["aria-label"], vb = { class: "library-cover-meta" }, wb = {
  key: 0,
  class: "library-creator"
}, Sb = { class: "library-cover-detail-list" }, Eb = { class: "library-cover-detail-chip" }, Tb = {
  key: 0,
  class: "library-cover-detail-chip"
}, Cb = {
  key: 1,
  class: "library-cover-detail-chip"
}, xb = {
  key: 2,
  class: "library-cover-detail-chip"
}, kb = {
  key: 3,
  class: "library-cover-detail-chip"
}, Ab = {
  key: 4,
  class: "library-cover-detail-chip"
}, Rb = {
  key: 5,
  class: "library-cover-detail-chip"
}, Nb = {
  key: 6,
  class: "library-cover-detail-chip"
}, Ob = {
  key: 1,
  class: "library-muted library-cover-description"
}, Pb = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Ib = { key: 0 }, Lb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Mb = {
  key: 0,
  class: "library-muted"
}, Db = { class: "library-cover-actions" }, Ub = ["href"], Fb = ["href"], Hb = ["onClick"], $b = ["href"], jb = ["aria-label"], Vb = { class: "library-pagination-range" }, qb = { key: 0 }, Bb = ["href"], zb = {
  key: 1,
  class: "library-muted"
}, Wb = ["href"], Kb = {
  key: 3,
  class: "library-muted"
}, Gb = {
  key: 7,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, Yb = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, Xb = ["src", "alt"], Jb = { class: "library-muted library-catalogue-eyebrow" }, Zb = { id: "library-detail-drawer-heading" }, Qb = {
  key: 0,
  class: "library-creator"
}, ey = {
  key: 1,
  class: "library-muted"
}, ty = { class: "library-detail-drawer-facts" }, ry = { key: 0 }, ny = { key: 1 }, ay = { key: 2 }, sy = { class: "library-detail-drawer-actions" }, iy = ["href"], ly = ["href"], oy = ["aria-label"], cy = ["disabled"], uy = ["disabled"], dy = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ ir({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), s = /* @__PURE__ */ ir((a.items || []).map((S) => ({ ...S }))), o = z(() => s), u = z(() => a.shelves || []), h = z(() => a.formats || []), w = z(() => a.publications || []), y = z(() => a.publicationSummaries || []), E = z(() => a.publicationIssueContext || null), I = z(() => a.publicationYears || []), j = z(() => a.creators || []), ie = z(() => a.scanStatuses || []), K = z(() => a.workflowStatuses || []), ue = z(() => a.genres || []), le = z(() => a.classifications || []), W = z(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ ir({
      q: a.activeFilters?.q || "",
      view: a.activeFilters?.view || "compact",
      type: a.activeFilters?.type || "",
      publication: a.activeFilters?.publication || "",
      year: a.activeFilters?.year || "",
      creator: a.activeFilters?.creator || "",
      format: a.activeFilters?.format || "",
      tag: a.activeFilters?.tag || "",
      shelf: a.activeFilters?.shelf || "",
      status: a.activeFilters?.status || "",
      workflowStatus: a.activeFilters?.workflowStatus || "",
      genre: a.activeFilters?.genre || "",
      classification: a.activeFilters?.classification || "",
      scannerConflicts: a.activeFilters?.scannerConflicts || "",
      starred: a.activeFilters?.starred || "",
      needsMetadata: a.activeFilters?.needsMetadata || "",
      coverReview: a.activeFilters?.coverReview || "",
      noCreator: a.activeFilters?.noCreator || "",
      noPublication: a.activeFilters?.noPublication || "",
      noDate: a.activeFilters?.noDate || "",
      titleFromFilename: a.activeFilters?.titleFromFilename || "",
      noDescription: a.activeFilters?.noDescription || "",
      unsupportedContainer: a.activeFilters?.unsupportedContainer || "",
      weakMetadata: a.activeFilters?.weakMetadata || "",
      unreviewedImports: a.activeFilters?.unreviewedImports || "",
      sort: a.activeFilters?.sort || "title"
    }), V = z(() => a.settingsUrl || ""), ce = z(() => a.requestToken || ""), Me = z(() => a.metadataExportUrl || ""), Pe = z(() => a.metadataSidecarManifestUrl || ""), Be = z(() => a.metadataSidecarBundleUrl || ""), Ee = z(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), De = z(() => a.batchTagUrl || "/apps/library/bulk/tags"), rt = z(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ut = z(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = z(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), xt = z(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), He = z(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Ue = z(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ge = z(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), fe = z(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), ze = z(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), _e = /* @__PURE__ */ ir({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Ne = z(() => _e.summary || {}), We = z(() => {
      const S = Number(Ne.value.generatedAt || 0);
      return S > 0 ? new Date(S * 1e3).toLocaleString() : "";
    }), nt = z(() => Ne.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), me = z(() => Ne.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), er = z(() => Ne.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), $e = z(() => a.discoveryPage === "publication"), vt = z(() => a.discoveryPage === "year"), wt = z(() => a.discoveryPage === "creator"), dt = z(() => $e.value || vt.value || wt.value), ft = z(() => a.discoveryTitle || D.publication || D.year || D.creator || ""), Ot = z(() => dt.value ? ft.value : l("library", "Library")), m = z(() => wt.value ? l("library", "Creator") : vt.value ? l("library", "Publication year") : l("library", "Publication / series")), b = z(() => Number(a.rootCount || 0)), _ = z(() => Number(a.enabledRootCount || 0)), R = z(() => b.value === 0), x = z(() => b.value > 0 && _.value === 0), A = z(() => ee.value.length > 0), M = {
      q: "Search",
      view: "View mode",
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
      starred: "Starred",
      needsMetadata: "Needs metadata",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, U = z(() => {
      if (typeof window > "u") return "";
      const S = new URLSearchParams(window.location.search);
      if (S.get("batchMetadataApplyResult") !== "1") return "";
      const v = S.get("batchMetadataField") || "field", p = S.get("batchMetadataApplied") || "0", Z = S.get("batchMetadataUnchanged") || "0", Ie = S.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: p, field: v, unchanged: Z, skipped: Ie });
    }), L = z(() => a.savedCollections || []), k = z(() => a.savedCollectionSaveUrl || "/apps/library/collections"), Y = z(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), H = ["compact", "gallery", "shelf"], B = z(() => H.includes(D.view) ? D.view : "compact"), Q = z(() => ({
      "library-cover-gallery--compact": B.value === "compact",
      "library-cover-gallery--gallery": B.value === "gallery",
      "library-cover-gallery--shelf": B.value === "shelf"
    })), ee = z(() => Object.entries(M).map(([S, v]) => ({ key: S, label: v, value: D[S] || "" })).filter((S) => String(S.value).trim() !== "")), P = z(() => Object.entries(D).filter(([S, v]) => !["q", "sort", "starred"].includes(S) && String(v || "").trim() !== "").map(([S, v]) => ({ key: S, value: v }))), O = z(() => Object.entries(D).filter(([S, v]) => String(v || "").trim() !== "").map(([S, v]) => ({ key: S, value: v }))), $ = /* @__PURE__ */ ir({}), te = /* @__PURE__ */ ir({}), ae = z(() => o.value.filter((S) => S.starred || S.workflowStatus === "reading" || S.lastOpenedAt).slice(0, 5)), pe = z(() => o.value.find((S) => S.description || S.publication || S.creators) || o.value[0] || null), he = z(() => !dt.value && o.value.length > 0), oe = /* @__PURE__ */ Ns(null), Te = z(() => oe.value ? o.value.findIndex((S) => S.id === oe.value.id) : -1), ke = z(() => Te.value > 0 ? o.value[Te.value - 1] : null), Ye = z(() => Te.value >= 0 && Te.value < o.value.length - 1 ? o.value[Te.value + 1] : null), Ht = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], Xe = z(() => {
      const S = D.scannerConflicts === "1" || String(D.weakMetadata || "").trim() !== "", v = S ? o.value.find((p) => kt(p).length > 0) : null;
      return {
        enabled: S,
        item: v,
        fields: v ? kt(v) : [],
        reviewNextUrl: He.value,
        skipUrl: W.value.nextUrl || He.value
      };
    });
    function tr(S) {
      return Array.isArray(S) ? JSON.stringify(S) : S == null ? "" : String(S);
    }
    function kt(S) {
      const v = S.fieldValues || {}, p = S.fieldSources || {};
      return Ht.filter((Z) => Object.prototype.hasOwnProperty.call(v, Z)).map((Z) => {
        const Ie = tr(S[Z]), Ve = tr(v[Z]), Wt = tr(p[Z] || S.metadataSource || "scanner"), At = Wt.includes("filename") || Wt.includes("path") ? Ve : "", va = Wt.includes("sidecar") ? Ve : "";
        return { field: Z, currentValue: Ie, scannerCandidate: Ve, pathTemplateCandidate: At, sidecarValue: va, sourceProvenance: Wt, differs: Ie !== Ve };
      }).filter((Z) => Z.differs);
    }
    function pt(S) {
      oe.value = S;
    }
    function $t() {
      oe.value = null;
    }
    function Pt(S) {
      S && (oe.value = S);
    }
    const ht = /* @__PURE__ */ Ns(null);
    let mt = null;
    function Lr(S) {
      const v = new URLSearchParams(new FormData(S));
      for (const p of Array.from(v.keys()))
        String(v.get(p) || "").trim() === "" && v.delete(p);
      return v.delete("page"), v.get("view") === "compact" && v.delete("view"), v;
    }
    function jt(S) {
      s.splice(0, s.length, ...(S.items || []).map((v) => ({ ...v })));
      for (const v of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(S, v) && (a[v] = S[v]);
      Object.assign(D, S.activeFilters || {});
    }
    async function Vt(S = !1) {
      if (!(_e.loading || _e.refreshing)) {
        S ? _e.refreshing = !0 : _e.loading = !0, _e.error = "";
        try {
          const v = await fetch(`${ze.value}${S ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!v.ok)
            throw new Error(`Import health request failed: ${v.status}`);
          _e.summary = await v.json(), _e.loaded = !0;
        } catch (v) {
          _e.error = v?.message || String(v);
        } finally {
          _e.loading = !1, _e.refreshing = !1;
        }
      }
    }
    async function at(S) {
      S && S.currentTarget && S.currentTarget.open !== !0 || _e.loaded || _e.loading || await Vt(!1);
    }
    async function br() {
      await Vt(!0);
    }
    async function qt(S) {
      const v = S?.currentTarget?.tagName === "FORM" ? S.currentTarget : S?.currentTarget?.form;
      if (!v) return;
      const Z = Lr(v).toString(), Ie = Z ? `?${Z}` : "", Ve = await fetch(Ee.value + Ie, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Ve.ok) {
        v.submit();
        return;
      }
      jt(await Ve.json()), history.replaceState({}, "", Z ? `?${Z}` : window.location.pathname);
    }
    function Mr(S) {
      qt(S);
    }
    function da(S) {
      window.clearTimeout(mt), mt = window.setTimeout(() => Mr(S), 350);
    }
    function Jr(S) {
      const v = new URLSearchParams();
      for (const [Z, Ie] of Object.entries(D)) {
        const Ve = String(Ie || "").trim();
        Ve !== "" && Z !== S && !(Z === "sort" && Ve === "title") && !(Z === "view" && Ve === "compact") && v.set(Z, Ve);
      }
      const p = v.toString();
      return p ? `?${p}` : "?";
    }
    function Zr() {
      return Jr("q");
    }
    const Qr = z(() => a.smartViewCounts || {}), Dr = z(() => {
      const S = {};
      for (const [v, p] of Object.entries(D)) {
        const Z = String(p || "").trim();
        Z !== "" && !(v === "sort" && Z === "title") && (S[v] = Z);
      }
      return S;
    }), fa = z(() => JSON.stringify(Dr.value)), rr = z(() => Object.keys(Dr.value).length > 0), pa = z(() => [
      { key: "recently-opened", label: "Recently opened", description: "Continue from the publications you opened through Library.", query: "sort=lastOpened", filters: { sort: "lastOpened" } },
      { key: "starred", label: "Starred", description: "Your marked publications and reference items.", query: "starred=1", filters: { starred: "1" } },
      { key: "to-read", label: "To read", description: "Publications queued for later.", query: "workflowStatus=to-read", filters: { workflowStatus: "to-read" } },
      { key: "reading", label: "Reading", description: "Publications currently in progress.", query: "workflowStatus=reading", filters: { workflowStatus: "reading" } },
      { key: "finished", label: "Finished", description: "Completed publications.", query: "workflowStatus=finished", filters: { workflowStatus: "finished" } },
      { key: "needs-action", label: "Needs action", description: "Items that need a cleanup or follow-up decision.", query: "workflowStatus=needs-action", filters: { workflowStatus: "needs-action" } },
      { key: "needs-metadata", label: "Needs metadata", description: "Items with missing core fields, extraction errors, or filename-only metadata.", query: "needsMetadata=1", filters: { needsMetadata: "1" } },
      { key: "scanner-conflicts", label: "Scanner conflicts", description: "Rows where current metadata differs from scanner candidates.", query: "scannerConflicts=1", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata errors", description: "Files whose metadata extraction needs review.", query: "status=metadata_error", filters: { status: "metadata_error" } },
      { key: "placeholder-covers", label: "Placeholder covers", description: "Likely placeholder-cover candidates without a manual cover override.", query: "coverReview=placeholder", filters: { coverReview: "placeholder" } },
      { key: "no-creator", label: "No creator", description: "Publications without creator metadata.", query: "noCreator=1", filters: { noCreator: "1" } },
      { key: "no-publication", label: "No publication/series", description: "Items without publication, series, periodical or collection metadata.", query: "noPublication=1", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "Items without a publication date or year.", query: "noDate=1", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Rows whose title still comes from filename/path parsing.", query: "titleFromFilename=1", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Weak filename metadata", description: "Items whose metadata still depends on filename/folder parsing.", query: "weakMetadata=filename", filters: { weakMetadata: "filename" } },
      { key: "no-description", label: "No description", description: "Rows without summary or description text.", query: "noDescription=1", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Archive/container formats that Library cannot inspect deeply yet.", query: "unsupportedContainer=1", filters: { unsupportedContainer: "1" } },
      { key: "unreviewed-imports", label: "Unreviewed imports", description: "Scanner-created catalogue rows not yet touched by user review.", query: "unreviewedImports=1", filters: { unreviewedImports: "1" } }
    ]), ha = z(() => [
      { key: "no-creator", label: "Missing creator", description: "Creator field is empty.", filters: { noCreator: "1" } },
      { key: "no-publication", label: "Missing publication/series", description: "No publication, series, periodical or collection.", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "No publication year/date is indexed.", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Title was inferred from the source path.", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Filename/path-derived metadata", description: "At least one indexed field still depends on filename parsing.", filters: { weakMetadata: "filename" } },
      { key: "placeholder-covers", label: "Placeholder cover", description: "Likely placeholder-cover candidates.", filters: { coverReview: "placeholder" } },
      { key: "scanner-conflicts", label: "Scanner conflict", description: "Current metadata differs from scanner candidates.", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata extraction error", description: "Scanner recorded a metadata extraction error.", filters: { status: "metadata_error" } },
      { key: "no-description", label: "No description", description: "No summary/description text is indexed.", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Container type needs manual inspection or future extractor support.", filters: { unsupportedContainer: "1" } }
    ]);
    function Oe(S) {
      if (!H.includes(S)) return;
      D.view = S;
      const v = new URLSearchParams(window.location.search);
      S === "compact" ? v.delete("view") : v.set("view", S), v.delete("page"), history.replaceState({}, "", v.toString() ? `?${v.toString()}` : window.location.pathname);
    }
    function Bt(S) {
      const v = new URLSearchParams(window.location.search);
      for (const Z of Object.keys(M))
        v.delete(Z);
      v.delete("page");
      for (const [Z, Ie] of Object.entries(S))
        String(Ie || "").trim() !== "" && v.set(Z, String(Ie));
      const p = v.toString();
      return p ? `?${p}` : "?";
    }
    function ma(S) {
      return Bt(S || {});
    }
    function kn(S) {
      return Y.value.replace("__COLLECTION_ID__", encodeURIComponent(String(S || "0")));
    }
    function Ur(S) {
      return String(S || "").toUpperCase();
    }
    function en(S) {
      return S.nextcloudTags || [];
    }
    function An(S) {
      return y.value.find((p) => p.publication === S)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(S)}`;
    }
    function ba(S) {
      return a.publicationYearLandingUrls?.[S] || `/apps/library/years/${encodeURIComponent(S)}`;
    }
    function ya(S) {
      return a.creatorLandingUrls?.[S] || `/apps/library/creators/${encodeURIComponent(S)}`;
    }
    function wr(S) {
      return te[S.id] || "loading";
    }
    function ga(S) {
      te[S.id] = "loaded";
    }
    function zt(S) {
      te[S.id] = "error";
    }
    function Rn(S, v) {
      $[S] = !!v?.currentTarget?.open;
    }
    function Fr(S) {
      const v = String(S?.tagName || "").toLowerCase();
      return S?.isContentEditable || ["input", "select", "textarea", "button"].includes(v);
    }
    function nr(S) {
      if (S.key !== "/" || S.metaKey || S.ctrlKey || S.altKey || S.shiftKey || Fr(S.target))
        return;
      S.preventDefault();
      const v = ht.value?.closest?.(".library-workspace-panel--refine");
      v && (v.open = !0), ht.value?.focus(), ht.value?.select?.();
    }
    function _a(S) {
      S.key !== "Escape" || document.activeElement !== ht.value || D.q === "" || (S.preventDefault(), D.q = "", ht.value.value = "", window.clearTimeout(mt), Mr({ currentTarget: ht.value }));
    }
    function Hr(S) {
      return !oe.value || S.metaKey || S.ctrlKey || S.altKey ? !1 : S.key === "Escape" ? (S.preventDefault(), $t(), !0) : S.key === "ArrowLeft" && ke.value ? (S.preventDefault(), Pt(ke.value), !0) : S.key === "ArrowRight" && Ye.value ? (S.preventDefault(), Pt(Ye.value), !0) : !1;
    }
    function tn(S) {
      Hr(S) || (nr(S), _a(S));
    }
    sl(() => {
      window.addEventListener("keydown", tn);
    }), il(() => {
      window.removeEventListener("keydown", tn);
    });
    async function Nn(S, v) {
      const p = v?.currentTarget?.closest?.("form") || v?.currentTarget;
      if (!p || !S?.starUrl) return;
      const Z = !!S.starred;
      S.starred = !Z;
      try {
        (await fetch(S.starUrl, {
          method: "POST",
          body: new FormData(p),
          credentials: "same-origin"
        })).ok || (S.starred = Z);
      } catch {
        S.starred = Z;
      }
    }
    return (S, v) => (T(), C("div", Zu, [
      i("section", Qu, [
        i("nav", {
          class: "library-catalogue-workspace library-workspace-menubar",
          "aria-label": f(l)("library", "One catalogue workspace")
        }, [
          i("details", td, [
            i("summary", rd, [
              v[22] || (v[22] = i("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⌕", -1)),
              i("span", nd, c(f(l)("library", "Refine results")), 1),
              i("small", ad, c(f(l)("library", "Filters, facets and saved filter shortcuts")), 1),
              i("b", sd, c(D.shelf ? f(l)("library", "this shelf") : ee.value.length > 0 ? f(l)("library", "current results") : f(l)("library", "whole catalogue")), 1)
            ]),
            i("div", id, [
              i("p", ld, c(f(l)("library", "Refine results")), 1),
              i("p", od, c(f(l)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")), 1)
            ]),
            i("form", {
              method: "get",
              class: "library-quick-filter-bar",
              "aria-label": f(l)("library", "Quick catalogue filters"),
              onSubmit: Fn(qt, ["prevent"])
            }, [
              (T(!0), C(re, null, ve(P.value, (p) => (T(), C("input", {
                key: p.key,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, ud))), 128)),
              i("div", dd, [
                i("label", fd, [
                  i("span", null, [
                    be(c(f(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                    v[23] || (v[23] = i("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  it(i("input", {
                    ref_key: "quickSearchInput",
                    ref: ht,
                    "onUpdate:modelValue": v[0] || (v[0] = (p) => D.q = p),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                    "aria-describedby": "library-search-scope",
                    onInput: da
                  }, null, 544), [
                    [ti, D.q]
                  ])
                ]),
                i("button", {
                  type: "submit",
                  class: "button primary",
                  "aria-label": f(l)("library", "Search catalogue")
                }, c(f(l)("library", "Search")), 9, pd)
              ]),
              i("details", hd, [
                i("summary", null, c(f(l)("library", "Filter & sort")), 1),
                i("div", md, [
                  i("label", null, [
                    be(c(f(l)("library", "Sort")), 1),
                    it(i("select", {
                      "onUpdate:modelValue": v[1] || (v[1] = (p) => D.sort = p),
                      name: "sort",
                      onChange: qt
                    }, [
                      i("option", bd, c(f(l)("library", "Title")), 1),
                      i("option", yd, c(f(l)("library", "Recently added")), 1),
                      i("option", gd, c(f(l)("library", "Publication date")), 1),
                      i("option", _d, c(f(l)("library", "Series")), 1),
                      i("option", vd, c(f(l)("library", "Recently opened")), 1),
                      i("option", wd, c(f(l)("library", "Format")), 1)
                    ], 544), [
                      [St, D.sort]
                    ])
                  ]),
                  i("label", null, [
                    be(c(f(l)("library", "Starred")), 1),
                    it(i("select", {
                      "onUpdate:modelValue": v[2] || (v[2] = (p) => D.starred = p),
                      name: "starred",
                      onChange: qt
                    }, [
                      i("option", Sd, c(f(l)("library", "All")), 1),
                      i("option", Ed, c(f(l)("library", "Starred")), 1)
                    ], 544), [
                      [St, D.starred]
                    ])
                  ]),
                  i("label", null, [
                    be(c(f(l)("library", "Size")), 1),
                    i("select", {
                      value: W.value.limit,
                      name: "limit",
                      onChange: qt
                    }, [
                      (T(), C(re, null, ve(n, (p) => i("option", {
                        key: p,
                        value: p
                      }, c(p), 9, Cd)), 64))
                    ], 40, Td)
                  ]),
                  i("button", {
                    type: "submit",
                    class: "button secondary",
                    "aria-label": f(l)("library", "Apply catalogue filters")
                  }, c(f(l)("library", "Apply filters")), 9, xd),
                  i("a", {
                    href: "?",
                    class: "button secondary",
                    "aria-label": f(l)("library", "Clear catalogue filters")
                  }, c(f(l)("library", "Clear all")), 9, kd)
                ])
              ])
            ], 40, cd),
            i("form", {
              method: "get",
              class: "library-filter-bar",
              "aria-label": f(l)("library", "Catalogue search and filters"),
              onSubmit: Fn(qt, ["prevent"])
            }, [
              i("p", Rd, c(f(l)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
              i("label", null, [
                be(c(f(l)("library", "Type")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[3] || (v[3] = (p) => D.type = p),
                  name: "type"
                }, [
                  i("option", Nd, c(f(l)("library", "All types")), 1),
                  (T(), C(re, null, ve(r, (p) => i("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Od)), 64))
                ], 512), [
                  [St, D.type]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Series / periodical")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[4] || (v[4] = (p) => D.publication = p),
                  name: "publication"
                }, [
                  i("option", Pd, c(f(l)("library", "All series and periodicals")), 1),
                  (T(!0), C(re, null, ve(w.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Id))), 128))
                ], 512), [
                  [St, D.publication]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Publication year")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[5] || (v[5] = (p) => D.year = p),
                  name: "year"
                }, [
                  i("option", Ld, c(f(l)("library", "All years")), 1),
                  (T(!0), C(re, null, ve(I.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Md))), 128))
                ], 512), [
                  [St, D.year]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Creator")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[6] || (v[6] = (p) => D.creator = p),
                  name: "creator",
                  title: "Exact full-field creator matches only"
                }, [
                  i("option", Dd, c(f(l)("library", "All creators")), 1),
                  (T(!0), C(re, null, ve(j.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Ud))), 128))
                ], 512), [
                  [St, D.creator]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Nextcloud tag")), 1),
                it(i("input", {
                  "onUpdate:modelValue": v[7] || (v[7] = (p) => D.tag = p),
                  type: "text",
                  name: "tag",
                  placeholder: "photography"
                }, null, 512), [
                  [ti, D.tag]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Format")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[8] || (v[8] = (p) => D.format = p),
                  name: "format"
                }, [
                  i("option", Fd, c(f(l)("library", "All formats")), 1),
                  (T(!0), C(re, null, ve(h.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(Ur(p)), 9, Hd))), 128))
                ], 512), [
                  [St, D.format]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Shelf")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[9] || (v[9] = (p) => D.shelf = p),
                  name: "shelf"
                }, [
                  i("option", $d, c(f(l)("library", "All shelves")), 1),
                  (T(!0), C(re, null, ve(u.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, jd))), 128))
                ], 512), [
                  [St, D.shelf]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Scan status")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[10] || (v[10] = (p) => D.status = p),
                  name: "status"
                }, [
                  i("option", Vd, c(f(l)("library", "All scan statuses")), 1),
                  (T(!0), C(re, null, ve(ie.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, qd))), 128))
                ], 512), [
                  [St, D.status]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Workflow status")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[11] || (v[11] = (p) => D.workflowStatus = p),
                  name: "workflowStatus"
                }, [
                  i("option", Bd, c(f(l)("library", "All workflow statuses")), 1),
                  (T(!0), C(re, null, ve(K.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, zd))), 128))
                ], 512), [
                  [St, D.workflowStatus]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Genre")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[12] || (v[12] = (p) => D.genre = p),
                  name: "genre"
                }, [
                  i("option", Wd, c(f(l)("library", "All genres")), 1),
                  (T(!0), C(re, null, ve(ue.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Kd))), 128))
                ], 512), [
                  [St, D.genre]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Classification")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[13] || (v[13] = (p) => D.classification = p),
                  name: "classification"
                }, [
                  i("option", Gd, c(f(l)("library", "All classifications")), 1),
                  (T(!0), C(re, null, ve(le.value, (p) => (T(), C("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Yd))), 128))
                ], 512), [
                  [St, D.classification]
                ])
              ]),
              i("label", null, [
                be(c(f(l)("library", "Scanner conflicts")), 1),
                it(i("select", {
                  "onUpdate:modelValue": v[14] || (v[14] = (p) => D.scannerConflicts = p),
                  name: "scannerConflicts"
                }, [
                  i("option", Xd, c(f(l)("library", "All metadata")), 1),
                  i("option", Jd, c(f(l)("library", "Needs review")), 1)
                ], 512), [
                  [St, D.scannerConflicts]
                ])
              ]),
              i("button", Zd, c(f(l)("library", "Apply filters")), 1),
              i("a", Qd, c(f(l)("library", "Clear")), 1)
            ], 40, Ad)
          ]),
          i("details", ef, [
            i("summary", tf, [
              v[24] || (v[24] = i("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "↗", -1)),
              i("span", rf, c(f(l)("library", "Browse shortcuts")), 1),
              i("small", nf, c(f(l)("library", "Continue reading, recently added, rediscover and useful views")), 1),
              i("b", af, c(f(l)("library", "whole catalogue")), 1)
            ]),
            i("div", sf, [
              i("p", lf, c(f(l)("library", "Browse shortcuts")), 1),
              i("p", of, c(f(l)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")), 1)
            ]),
            he.value ? (T(), C("article", cf, [
              i("h3", null, c(f(l)("library", "Continue reading")), 1),
              i("p", uf, c(f(l)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")), 1),
              i("div", df, [
                ae.value[0] ? (T(), C("a", {
                  key: 0,
                  class: "button primary",
                  href: ae.value[0].openUrl
                }, c(f(l)("library", "Read now")), 9, ff)) : G("", !0),
                ae.value[0] ? (T(), C("button", {
                  key: 1,
                  type: "button",
                  class: "button secondary",
                  onClick: v[15] || (v[15] = (p) => pt(ae.value[0]))
                }, c(f(l)("library", "Open details drawer")), 1)) : G("", !0)
              ])
            ])) : G("", !0),
            pe.value ? (T(), C("article", pf, [
              i("p", hf, c(f(l)("library", "Rediscover")), 1),
              i("strong", null, c(pe.value.title), 1),
              i("span", mf, c(pe.value.creators || pe.value.publication || pe.value.cachedPath), 1),
              i("button", {
                type: "button",
                class: "button secondary",
                onClick: v[16] || (v[16] = (p) => pt(pe.value))
              }, c(f(l)("library", "Peek")), 1)
            ])) : G("", !0),
            i("p", bf, c(f(l)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1),
            i("nav", {
              class: "library-useful-view-links",
              "aria-label": f(l)("library", "Useful views")
            }, [
              (T(!0), C(re, null, ve(pa.value, (p) => (T(), C("a", {
                key: p.key,
                class: "library-useful-view-chip",
                href: Bt(p.filters),
                title: p.description
              }, [
                i("strong", null, c(f(l)("library", p.label)), 1),
                i("span", null, c(f(l)("library", p.description)), 1),
                i("small", _f, c(Number(Qr.value[p.key] || 0)), 1)
              ], 8, gf))), 128))
            ], 8, yf),
            i("div", vf, [
              y.value.length > 0 ? (T(), C("section", wf, [
                i("h3", null, c(f(l)("library", "Top series and periodicals")), 1),
                i("p", Sf, c(f(l)("library", "Jump into recurring publications with one click.")), 1),
                i("ul", null, [
                  (T(!0), C(re, null, ve(y.value, (p) => (T(), C("li", {
                    key: p.publication
                  }, [
                    i("a", {
                      href: An(p.publication)
                    }, c(p.publication), 9, Ef),
                    i("span", Tf, c(p.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : G("", !0),
              y.value.length === 0 ? (T(), C("section", Cf, [
                i("h3", null, c(f(l)("library", "No series or periodicals found yet")), 1),
                i("p", xf, c(f(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : G("", !0),
              I.value.length > 0 ? (T(), C("section", kf, [
                i("h3", null, c(f(l)("library", "Top publication years")), 1),
                i("ul", null, [
                  (T(!0), C(re, null, ve(I.value, (p) => (T(), C("li", { key: p }, [
                    i("a", {
                      href: ba(p)
                    }, c(p), 9, Af)
                  ]))), 128))
                ])
              ])) : G("", !0),
              j.value.length > 0 ? (T(), C("section", Rf, [
                i("h3", null, c(f(l)("library", "Top creators")), 1),
                i("ul", null, [
                  (T(!0), C(re, null, ve(j.value, (p) => (T(), C("li", { key: p }, [
                    i("a", {
                      href: ya(p)
                    }, c(p), 9, Nf)
                  ]))), 128))
                ])
              ])) : G("", !0)
            ]),
            i("section", Of, [
              i("h3", null, c(f(l)("library", "Custom collections")), 1),
              i("p", Pf, c(f(l)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1),
              i("form", {
                method: "post",
                action: k.value,
                class: "library-saved-collection-save-form"
              }, [
                i("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Lf),
                i("input", {
                  type: "hidden",
                  name: "savedCollectionFilters",
                  value: fa.value
                }, null, 8, Mf),
                i("label", null, [
                  be(c(f(l)("library", "Collection name")), 1),
                  i("input", {
                    type: "text",
                    name: "savedCollectionName",
                    placeholder: f(l)("library", "e.g. Bremen photo books"),
                    disabled: !rr.value,
                    autocomplete: "off"
                  }, null, 8, Df)
                ]),
                i("button", {
                  type: "submit",
                  class: "button secondary",
                  disabled: !rr.value
                }, c(f(l)("library", "Save current view")), 9, Uf)
              ], 8, If),
              rr.value ? G("", !0) : (T(), C("p", Ff, c(f(l)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
              L.value.length > 0 ? (T(), C("nav", {
                key: 1,
                class: "library-saved-collection-links",
                "aria-label": f(l)("library", "Saved custom collections")
              }, [
                (T(!0), C(re, null, ve(L.value, (p) => (T(), C("article", {
                  key: p.id,
                  class: "library-saved-collection-card"
                }, [
                  i("a", {
                    class: "library-saved-collection-link",
                    href: ma(p.filters)
                  }, [
                    i("strong", null, c(p.name), 1),
                    i("span", null, c(Number(p.count || 0)) + " " + c(f(l)("library", "items")), 1)
                  ], 8, $f),
                  i("form", {
                    method: "post",
                    action: kn(p.id),
                    class: "library-saved-collection-delete-form"
                  }, [
                    i("input", {
                      type: "hidden",
                      name: "requesttoken",
                      value: ce.value
                    }, null, 8, Vf),
                    i("button", qf, c(f(l)("library", "Delete")), 1)
                  ], 8, jf)
                ]))), 128))
              ], 8, Hf)) : G("", !0)
            ])
          ]),
          i("details", {
            class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
            "data-workspace-panel": "batch",
            "aria-label": f(l)("library", "Batch actions for current results")
          }, [
            i("summary", zf, [
              v[25] || (v[25] = i("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "✓", -1)),
              i("span", Wf, c(f(l)("library", "Batch actions")), 1),
              i("small", Kf, c(f(l)("library", "Preview and apply changes to current results")), 1),
              i("b", Gf, c(W.value.total) + " " + c(f(l)("library", "Current filter result")), 1)
            ]),
            i("div", Yf, [
              i("p", Xf, c(f(l)("library", "Batch actions")), 1),
              i("p", Jf, c(f(l)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")), 1)
            ]),
            i("form", {
              method: "post",
              action: De.value,
              class: "library-batch-tag-form"
            }, [
              i("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Qf),
              (T(!0), C(re, null, ve(O.value, (p) => (T(), C("input", {
                key: p.key,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, ep))), 128)),
              i("label", null, [
                i("span", null, c(f(l)("library", "Nextcloud tag")), 1),
                i("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: f(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, tp)
              ]),
              i("button", rp, c(f(l)("library", "Apply Nextcloud tag to current results")), 1),
              i("p", np, c(f(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Zf),
            i("form", {
              method: "post",
              action: rt.value,
              class: "library-batch-tag-remove-form"
            }, [
              i("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, sp),
              (T(!0), C(re, null, ve(O.value, (p) => (T(), C("input", {
                key: `remove-tag-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, ip))), 128)),
              i("label", null, [
                i("span", null, c(f(l)("library", "Nextcloud tag")), 1),
                i("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: f(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, lp)
              ]),
              i("button", op, c(f(l)("library", "Remove tag from current results")), 1),
              i("p", cp, c(f(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, ap),
            i("form", {
              method: "post",
              action: ut.value,
              class: "library-batch-metadata-reset-form"
            }, [
              i("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, dp),
              (T(!0), C(re, null, ve(O.value, (p) => (T(), C("input", {
                key: `reset-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, fp))), 128)),
              v[26] || (v[26] = i("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              i("button", pp, c(f(l)("library", "Reset filtered metadata")), 1),
              i("p", hp, c(f(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, up),
            i("form", {
              method: "post",
              action: Ge.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              i("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, bp),
              (T(!0), C(re, null, ve(O.value, (p) => (T(), C("input", {
                key: `edit-preview-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, yp))), 128)),
              i("label", null, [
                i("span", null, c(f(l)("library", "Metadata field")), 1),
                i("select", gp, [
                  i("option", _p, c(f(l)("library", "Publication type")), 1),
                  i("option", vp, c(f(l)("library", "Subtitle")), 1),
                  i("option", wp, c(f(l)("library", "Creators")), 1),
                  i("option", Sp, c(f(l)("library", "Series / periodical")), 1),
                  i("option", Ep, c(f(l)("library", "Publication date")), 1),
                  i("option", Tp, c(f(l)("library", "Language")), 1),
                  i("option", Cp, c(f(l)("library", "Publisher")), 1),
                  i("option", xp, c(f(l)("library", "Genres")), 1),
                  i("option", kp, c(f(l)("library", "Classifications")), 1)
                ])
              ]),
              i("label", null, [
                i("span", null, c(f(l)("library", "Preview value")), 1),
                v[27] || (v[27] = i("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              i("button", Ap, c(f(l)("library", "Preview & apply metadata edit")), 1),
              i("p", Rp, c(f(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, mp),
            i("form", {
              method: "post",
              action: xt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              i("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Op),
              (T(!0), C(re, null, ve(O.value, (p) => (T(), C("input", {
                key: `cover-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Pp))), 128)),
              i("button", Ip, c(f(l)("library", "Request fresh cover previews")), 1),
              i("p", Lp, c(f(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, Np)
          ], 8, Bf),
          i("details", Mp, [
            i("summary", Dp, [
              v[28] || (v[28] = i("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "!", -1)),
              i("span", Up, c(f(l)("library", "Review queue")), 1),
              i("small", Fp, c(f(l)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
              i("b", Hp, c(f(l)("library", "current results")), 1)
            ]),
            i("div", $p, [
              i("p", jp, c(f(l)("library", "Review queue")), 1),
              i("h3", null, c(f(l)("library", "Weak metadata cockpit")), 1),
              i("p", Vp, c(f(l)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")), 1)
            ]),
            i("nav", {
              class: "library-weak-metadata-links",
              "aria-label": f(l)("library", "Weak metadata catalogue views")
            }, [
              (T(!0), C(re, null, ve(ha.value, (p) => (T(), C("a", {
                key: p.key,
                class: "library-weak-metadata-card",
                href: Bt(p.filters),
                title: p.description
              }, [
                i("span", null, [
                  i("strong", null, c(f(l)("library", p.label)), 1),
                  i("small", null, c(f(l)("library", p.description)), 1)
                ]),
                i("b", null, c(Number(Qr.value[p.key] || 0)), 1)
              ], 8, Bp))), 128))
            ], 8, qp),
            i("div", zp, [
              i("article", null, [
                i("h4", null, c(f(l)("library", "Metadata-error queue")), 1),
                i("p", Wp, c(f(l)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                i("a", {
                  class: "button secondary",
                  href: nt.value.reviewUrl || "?status=metadata_error"
                }, c(f(l)("library", "Open metadata-error rows")), 9, Kp),
                i("a", {
                  class: "button secondary",
                  href: ge.value
                }, c(f(l)("library", "Export metadata-error rows")), 9, Gp),
                i("form", {
                  method: "post",
                  action: De.value,
                  class: "library-review-queue-tag-form"
                }, [
                  i("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Xp),
                  v[29] || (v[29] = i("input", {
                    type: "hidden",
                    name: "status",
                    value: "metadata_error"
                  }, null, -1)),
                  v[30] || (v[30] = i("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-metadata-error"
                  }, null, -1)),
                  i("button", Jp, c(f(l)("library", "Tag metadata-error rows")), 1)
                ], 8, Yp)
              ]),
              i("article", null, [
                i("h4", null, c(f(l)("library", "Scanner-conflict queue")), 1),
                i("p", Zp, c(f(l)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                i("a", {
                  class: "button secondary",
                  href: He.value
                }, c(f(l)("library", "Review scanner conflicts")), 9, Qp),
                i("form", {
                  method: "post",
                  action: De.value,
                  class: "library-review-queue-tag-form"
                }, [
                  i("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, th),
                  v[31] || (v[31] = i("input", {
                    type: "hidden",
                    name: "scannerConflicts",
                    value: "1"
                  }, null, -1)),
                  v[32] || (v[32] = i("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-scanner-conflict"
                  }, null, -1)),
                  i("button", rh, c(f(l)("library", "Tag scanner-conflict rows")), 1)
                ], 8, eh)
              ])
            ]),
            Xe.value.enabled ? (T(), C("section", nh, [
              i("div", ah, [
                i("p", sh, c(f(l)("library", "Metadata review workbench")), 1),
                i("h3", ih, c(f(l)("library", "Review next conflict")), 1),
                i("p", lh, c(f(l)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")), 1)
              ]),
              Xe.value.item ? (T(), C("article", oh, [
                i("header", null, [
                  i("strong", null, c(Xe.value.item.title), 1),
                  i("span", ch, c(Xe.value.item.cachedPath), 1)
                ]),
                i("div", uh, [
                  (T(!0), C(re, null, ve(Xe.value.fields, (p) => (T(), C("article", {
                    key: p.field,
                    class: "library-metadata-review-field"
                  }, [
                    i("h4", null, c(p.field), 1),
                    i("dl", null, [
                      i("div", null, [
                        i("dt", null, c(f(l)("library", "Current value")), 1),
                        i("dd", null, c(p.currentValue || "—"), 1)
                      ]),
                      i("div", null, [
                        i("dt", null, c(f(l)("library", "scanner candidate")), 1),
                        i("dd", null, c(p.scannerCandidate || "—"), 1)
                      ]),
                      i("div", null, [
                        i("dt", null, c(f(l)("library", "path-template candidate")), 1),
                        i("dd", null, c(p.pathTemplateCandidate || "—"), 1)
                      ]),
                      i("div", null, [
                        i("dt", null, c(f(l)("library", "sidecar value")), 1),
                        i("dd", null, c(p.sidecarValue || "—"), 1)
                      ]),
                      i("div", null, [
                        i("dt", null, c(f(l)("library", "source provenance")), 1),
                        i("dd", null, c(p.sourceProvenance || "—"), 1)
                      ])
                    ]),
                    i("form", {
                      method: "post",
                      action: Xe.value.item.resetFieldUrl,
                      class: "library-metadata-review-accept-form"
                    }, [
                      i("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ce.value
                      }, null, 8, fh),
                      i("input", {
                        type: "hidden",
                        name: "field",
                        value: p.field
                      }, null, 8, ph),
                      v[33] || (v[33] = i("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      i("button", hh, c(f(l)("library", "accept scanner candidate")), 1)
                    ], 8, dh)
                  ]))), 128))
                ]),
                i("footer", mh, [
                  i("a", {
                    class: "button secondary",
                    href: Xe.value.item.detailsUrl
                  }, c(f(l)("library", "Open full details")), 9, bh),
                  i("a", {
                    class: "button secondary",
                    href: Xe.value.skipUrl
                  }, c(f(l)("library", "Skip to next conflict")), 9, yh)
                ])
              ])) : (T(), C("p", gh, c(f(l)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
              i("a", {
                class: "button secondary",
                href: Xe.value.reviewNextUrl
              }, c(f(l)("library", "Review next conflict")), 9, _h)
            ])) : G("", !0)
          ]),
          i("details", {
            class: "library-workspace-panel library-workspace-panel--admin",
            "data-workspace-panel": "admin",
            onToggle: at
          }, [
            i("summary", vh, [
              v[34] || (v[34] = i("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              i("span", wh, c(f(l)("library", "Admin tools")), 1),
              i("small", Sh, c(f(l)("library", "Roots, scans, exports and repair operations")), 1),
              i("b", Eh, c(f(l)("library", "all enabled roots")), 1)
            ]),
            i("div", Th, [
              i("p", Ch, c(f(l)("library", "Admin tools")), 1),
              i("p", xh, c(f(l)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")), 1)
            ]),
            i("div", kh, [
              i("a", {
                href: V.value,
                class: "button secondary",
                "aria-label": "Open Library settings"
              }, c(f(l)("library", "Settings")), 9, Ah),
              Me.value ? (T(), C("a", {
                key: 0,
                href: Me.value,
                class: "button secondary",
                "aria-label": "Export corrected metadata"
              }, c(f(l)("library", "Export corrected metadata")), 9, Rh)) : G("", !0),
              Pe.value ? (T(), C("a", {
                key: 1,
                href: Pe.value,
                class: "button secondary",
                "aria-label": "Export sidecar manifest"
              }, c(f(l)("library", "Sidecar manifest")), 9, Nh)) : G("", !0),
              Be.value ? (T(), C("a", {
                key: 2,
                href: Be.value,
                class: "button secondary",
                "aria-label": "Export sidecar ZIP"
              }, c(f(l)("library", "Sidecar ZIP")), 9, Oh)) : G("", !0)
            ]),
            i("div", Ph, [
              i("p", Ih, c(f(l)("library", "Import health")), 1),
              i("h3", null, c(f(l)("library", "Metadata overview")), 1),
              i("p", Lh, c(f(l)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
              _e.loading ? (T(), C("p", Mh, c(f(l)("library", "Loading cached metadata overview…")), 1)) : _e.error ? (T(), C("p", Dh, c(_e.error), 1)) : _e.loaded ? G("", !0) : (T(), C("p", Uh, c(f(l)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
              _e.loaded ? (T(), C(re, { key: 3 }, [
                Ne.value.message ? (T(), C("p", Fh, c(Ne.value.message), 1)) : Ne.value.cacheStatus === "missing" ? (T(), C("p", Hh, c(f(l)("library", "No cached metadata overview exists yet")), 1)) : G("", !0),
                We.value ? (T(), C("p", $h, c(f(l)("library", "Last generated")) + ": " + c(We.value), 1)) : G("", !0),
                i("button", {
                  type: "button",
                  class: "button secondary library-import-health-refresh",
                  disabled: _e.refreshing,
                  onClick: br
                }, c(_e.refreshing ? f(l)("library", "Refreshing metadata overview…") : f(l)("library", "Refresh metadata overview")), 9, jh),
                i("div", Vh, [
                  i("a", {
                    class: "button secondary",
                    href: nt.value.reviewUrl || "?status=metadata_error"
                  }, c(f(l)("library", "Review metadata errors")), 9, qh),
                  i("a", {
                    class: "button secondary",
                    href: Ue.value
                  }, c(f(l)("library", "Full review")), 9, Bh),
                  i("a", {
                    class: "button secondary",
                    href: ge.value
                  }, c(f(l)("library", "Export TSV")), 9, zh),
                  i("a", {
                    class: "button secondary",
                    href: fe.value
                  }, c(f(l)("library", "Probe covers")), 9, Wh)
                ]),
                i("div", Kh, [
                  i("article", null, [
                    i("h4", null, c(f(l)("library", "Metadata errors")), 1),
                    i("p", Gh, c(nt.value.total || 0), 1)
                  ]),
                  i("article", null, [
                    i("h4", null, c(f(l)("library", "Archive/container check")), 1),
                    i("p", Yh, c(me.value.mismatches || 0), 1)
                  ]),
                  i("article", null, [
                    i("h4", null, c(f(l)("library", "Cover health")), 1),
                    i("p", Xh, c(er.value.note), 1)
                  ]),
                  i("article", null, [
                    i("h4", null, c(f(l)("library", "Cover support matrix")), 1),
                    i("p", Jh, c(f(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                  ]),
                  nt.value.examples?.length ? (T(), C("details", Zh, [
                    i("summary", null, c(f(l)("library", "Example files and suggested actions")), 1),
                    i("ul", null, [
                      (T(!0), C(re, null, ve(nt.value.examples, (p) => (T(), C("li", {
                        key: `${p.fileId}-${p.path}`
                      }, [
                        i("code", null, c(p.path), 1),
                        i("span", null, c(p.scanStatus) + " · " + c(p.scanError) + " · " + c(p.actualContainerType), 1),
                        i("strong", null, c(p.suggestedRepairAction), 1)
                      ]))), 128))
                    ])
                  ])) : G("", !0)
                ])
              ], 64)) : G("", !0)
            ])
          ], 32)
        ], 8, ed),
        i("div", Qh, [
          i("div", null, [
            dt.value ? (T(), C("p", em, c(m.value), 1)) : G("", !0),
            i("h2", tm, c(Ot.value), 1),
            dt.value ? (T(), C("p", rm, c(f(l)("library", "Browse this focused view; refine only when you need to narrow it further.")), 1)) : G("", !0)
          ])
        ]),
        U.value ? (T(), C("p", nm, c(U.value), 1)) : G("", !0),
        dt.value ? (T(), C("section", am, [
          i("p", sm, c(m.value), 1),
          i("h3", im, c(ft.value), 1),
          i("p", lm, c(wt.value ? f(l)("library", "Items by this creator, sorted by publication context when available.") : vt.value ? f(l)("library", "Items from this publication year, sorted by publication date when available.") : f(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          i("div", om, [
            i("span", null, c(W.value.total) + " " + c(f(l)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (T(), C("span", cm, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : G("", !0),
            E.value?.datedCount ? (T(), C("span", um, c(E.value.datedCount) + " " + c(f(l)("library", "dated")), 1)) : G("", !0),
            E.value?.undatedCount > 0 ? (T(), C("span", dm, c(E.value.undatedCount) + " " + c(f(l)("library", "undated")), 1)) : G("", !0)
          ]),
          $e.value && E.value ? (T(), C("aside", fm, [
            i("strong", null, c(f(l)("library", "Publication contents")), 1),
            i("span", null, c(E.value.itemCount) + " " + c(f(l)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (T(), C("span", pm, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : G("", !0),
            i("span", null, c(E.value.datedCount) + " " + c(f(l)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (T(), C("span", hm, c(E.value.undatedCount) + " " + c(f(l)("library", "without dates yet")), 1)) : G("", !0),
            i("span", null, c(f(l)("library", "read-only grouping")), 1)
          ])) : G("", !0),
          $e.value && E.value?.issueGroups?.length ? (T(), C("section", mm, [
            i("div", null, [
              i("p", bm, c(f(l)("library", "Issue order")), 1),
              i("h4", ym, c(f(l)("library", "Read-only issue/date grouping")), 1),
              i("p", gm, c(f(l)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")), 1)
            ]),
            i("div", _m, [
              (T(!0), C(re, null, ve(E.value.issueGroups, (p) => (T(), C("a", {
                key: `strip-${p.label}`,
                class: "library-issue-strip-card",
                href: p.items?.[0]?.detailsUrl || "#"
              }, [
                i("span", null, c(p.label), 1),
                i("strong", null, c(p.items?.[0]?.issueLabel || f(l)("library", "Issue")), 1),
                i("small", null, c(p.items?.length || 0) + " " + c(f(l)("library", "items")), 1)
              ], 8, vm))), 128))
            ]),
            E.value.gapRanges?.length ? (T(), C("p", wm, c(f(l)("library", "Gap")) + ": " + c(E.value.gapRanges.join(", ")), 1)) : G("", !0),
            (T(!0), C(re, null, ve(E.value.issueGroups, (p) => (T(), C("div", {
              key: p.label,
              class: "library-publication-issue-group"
            }, [
              i("h5", null, c(p.label), 1),
              i("ol", null, [
                (T(!0), C(re, null, ve(p.items, (Z, Ie) => (T(), C("li", {
                  key: Z.itemId
                }, [
                  i("span", Sm, c(Z.issueLabel), 1),
                  i("a", {
                    href: Z.detailsUrl || "#"
                  }, c(Z.title), 9, Em),
                  i("small", null, [
                    be(c(Z.publicationType), 1),
                    Z.publicationDate ? (T(), C(re, { key: 0 }, [
                      be(" · " + c(Z.publicationDate), 1)
                    ], 64)) : G("", !0)
                  ]),
                  i("small", Tm, [
                    Ie > 0 ? (T(), C(re, { key: 0 }, [
                      be(c(f(l)("library", "Previous issue")), 1)
                    ], 64)) : G("", !0),
                    Ie > 0 && Ie < p.items.length - 1 ? (T(), C(re, { key: 1 }, [
                      be(" · ")
                    ], 64)) : G("", !0),
                    Ie < p.items.length - 1 ? (T(), C(re, { key: 2 }, [
                      be(c(f(l)("library", "Next issue")), 1)
                    ], 64)) : G("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            E.value.unknownIssueItems?.length ? (T(), C("details", Cm, [
              i("summary", null, c(f(l)("library", "Unknown issue/date")) + " · " + c(E.value.unknownIssueItems.length), 1),
              i("p", xm, c(f(l)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")), 1)
            ])) : G("", !0)
          ])) : G("", !0),
          i("p", null, [
            i("a", km, c(f(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : G("", !0),
        i("nav", Am, [
          i("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: Lt({ active: B.value === "compact" }),
            "aria-pressed": B.value === "compact" ? "true" : "false",
            onClick: v[17] || (v[17] = (p) => Oe("compact"))
          }, c(f(l)("library", "Compact")), 11, Rm),
          i("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Lt({ active: B.value === "gallery" }),
            "aria-pressed": B.value === "gallery" ? "true" : "false",
            onClick: v[18] || (v[18] = (p) => Oe("gallery"))
          }, c(f(l)("library", "Gallery")), 11, Nm),
          i("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Lt({ active: B.value === "shelf" }),
            "aria-pressed": B.value === "shelf" ? "true" : "false",
            onClick: v[19] || (v[19] = (p) => Oe("shelf"))
          }, c(f(l)("library", "Shelf")), 11, Om)
        ]),
        i("div", Pm, [
          i("p", Im, [
            be(c(f(l)("library", "Showing")) + " " + c(W.value.from) + "–" + c(W.value.to) + " " + c(f(l)("library", "of")) + " " + c(W.value.total) + " " + c(f(l)("library", "catalogue items")), 1),
            ee.value.length > 0 ? (T(), C("span", Lm, [
              v[35] || (v[35] = be(" · ", -1)),
              i("a", Mm, c(f(l)("library", "Clear all filters")), 1)
            ])) : G("", !0)
          ]),
          i("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": f(l)("library", "Catalogue pagination")
          }, [
            i("span", Um, [
              be(c(f(l)("library", "Page")) + " " + c(W.value.page), 1),
              W.value.total > 0 ? (T(), C("span", Fm, " · " + c(W.value.from) + "–" + c(W.value.to), 1)) : G("", !0)
            ]),
            W.value.previousUrl ? (T(), C("a", {
              key: 0,
              href: W.value.previousUrl
            }, c(f(l)("library", "Previous")), 9, Hm)) : (T(), C("span", $m, c(f(l)("library", "Previous")), 1)),
            W.value.nextUrl ? (T(), C("a", {
              key: 2,
              href: W.value.nextUrl
            }, c(f(l)("library", "Next")), 9, jm)) : (T(), C("span", Vm, c(f(l)("library", "Next")), 1))
          ], 8, Dm)
        ]),
        ee.value.length > 0 ? (T(), C("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": f(l)("library", "Active filters")
        }, [
          i("span", null, c(f(l)("library", "Active filters")), 1),
          (T(!0), C(re, null, ve(ee.value, (p) => (T(), C("a", {
            key: p.key,
            href: Jr(p.key),
            class: "library-filter-chip",
            "aria-label": `${f(l)("library", "Remove filter")}: ${p.label}`
          }, [
            i("strong", null, c(p.label) + ":", 1),
            be(" " + c(p.value) + " ", 1),
            v[36] || (v[36] = i("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Bm))), 128))
        ], 8, qm)) : G("", !0),
        o.value.length === 0 ? (T(), C("div", {
          key: 3,
          class: Lt(["library-empty-content", { "library-first-run-guidance": R.value || x.value, "library-filter-empty-state": A.value && !R.value && !x.value }]),
          role: "status"
        }, [
          R.value ? (T(), C(re, { key: 0 }, [
            i("h3", null, c(f(l)("library", "Start with one Library root")), 1),
            i("p", zm, c(f(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            i("p", Wm, [
              i("a", {
                href: V.value,
                class: "button primary"
              }, c(f(l)("library", "Add a Library root")), 9, Km),
              i("span", Gm, c(f(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : x.value ? (T(), C(re, { key: 1 }, [
            i("h3", null, c(f(l)("library", "No enabled Library roots")), 1),
            i("p", Ym, c(f(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            i("p", Xm, [
              i("a", {
                href: V.value,
                class: "button primary"
              }, c(f(l)("library", "Open Library settings")), 9, Jm)
            ])
          ], 64)) : A.value ? (T(), C(re, { key: 2 }, [
            i("h3", null, c(f(l)("library", "No matches for the current filters")), 1),
            i("p", Zm, c(f(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            i("p", Qm, [
              i("a", {
                href: Zr(),
                class: "button secondary"
              }, c(f(l)("library", "Clear search")), 9, eb),
              i("a", tb, c(f(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (T(), C(re, { key: 3 }, [
            i("h3", null, c(f(l)("library", "No catalogue items yet")), 1),
            i("p", rb, c(f(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            i("p", nb, [
              i("a", {
                href: V.value,
                class: "button primary"
              }, c(f(l)("library", "Run a scan from settings")), 9, ab)
            ])
          ], 64))
        ], 2)) : (T(), C("div", {
          key: 4,
          class: Lt(["library-cover-gallery", Q.value])
        }, [
          (T(!0), C(re, null, ve(o.value, (p) => (T(), C("article", {
            key: p.id,
            class: Lt(["library-cover-card", { "library-cover-card--open": $[p.id], "library-cover-card--cover-loaded": wr(p) === "loaded", "library-cover-card--cover-error": wr(p) === "error" }])
          }, [
            i("a", {
              class: "library-cover-link",
              href: p.openUrl,
              "aria-label": `Read ${p.title}`
            }, [
              i("span", ib, [
                wr(p) === "loading" ? (T(), C("span", lb)) : G("", !0),
                i("img", {
                  class: Lt(["library-cover-image", { "library-cover-image--loaded": wr(p) === "loaded" }]),
                  src: p.coverUrl,
                  alt: `Cover for ${p.title}`,
                  loading: "lazy",
                  onLoad: (Z) => ga(p),
                  onError: (Z) => zt(p)
                }, null, 42, ob),
                wr(p) === "error" ? (T(), C("span", cb, c(f(l)("library", "Cover unavailable")), 1)) : G("", !0)
              ])
            ], 8, sb),
            i("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form",
              onSubmit: Fn((Z) => Nn(p, Z), ["prevent"])
            }, [
              i("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, db),
              v[37] || (v[37] = i("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              i("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, fb),
              i("button", {
                type: "submit",
                class: Lt(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? f(l)("library", "Unstar this publication") : f(l)("library", "Star this publication"),
                "aria-label": p.starred ? f(l)("library", "Unstar this publication") : f(l)("library", "Star this publication"),
                onClick: Fn((Z) => Nn(p, Z), ["prevent"])
              }, c(p.starred ? "★" : "☆"), 11, pb)
            ], 40, ub),
            i("div", hb, [
              i("div", mb, [
                i("h3", null, [
                  p.starred ? (T(), C("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": f(l)("library", "Starred")
                  }, "★", 8, bb)) : G("", !0),
                  be(c(p.title), 1)
                ]),
                i("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, c(f(l)("library", "Read")), 9, yb)
              ]),
              i("details", {
                class: "library-cover-details",
                onToggle: (Z) => Rn(p.id, Z)
              }, [
                i("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${f(l)("library", "Show details and actions")}: ${p.title}`
                }, c(f(l)("library", "Details")), 9, _b),
                i("div", vb, [
                  p.creators ? (T(), C("p", wb, c(p.creators), 1)) : G("", !0),
                  i("dl", Sb, [
                    i("div", Eb, [
                      i("dt", null, c(f(l)("library", "Type")), 1),
                      i("dd", null, c(p.publicationType), 1)
                    ]),
                    p.publication ? (T(), C("div", Tb, [
                      i("dt", null, c(f(l)("library", "Series")), 1),
                      i("dd", null, c(p.publication), 1)
                    ])) : G("", !0),
                    p.publicationDate ? (T(), C("div", Cb, [
                      i("dt", null, c(f(l)("library", "Date")), 1),
                      i("dd", null, c(p.publicationDate), 1)
                    ])) : G("", !0),
                    p.workflowStatus ? (T(), C("div", xb, [
                      i("dt", null, c(f(l)("library", "Status")), 1),
                      i("dd", null, c(p.workflowStatus), 1)
                    ])) : G("", !0),
                    p.hasScannerConflict ? (T(), C("div", kb, [
                      i("dt", null, c(f(l)("library", "Review")), 1),
                      i("dd", null, c(p.scannerConflictCount) + " fields", 1)
                    ])) : G("", !0),
                    p.lastOpenedAt ? (T(), C("div", Ab, [
                      i("dt", null, c(f(l)("library", "Last opened")), 1),
                      i("dd", null, c(p.lastOpenedAt), 1)
                    ])) : G("", !0),
                    p.extension ? (T(), C("div", Rb, [
                      i("dt", null, c(f(l)("library", "Format")) + ":", 1),
                      i("dd", null, c(Ur(p.extension)), 1)
                    ])) : G("", !0),
                    p.shelf ? (T(), C("div", Nb, [
                      i("dt", null, c(f(l)("library", "Shelf")), 1),
                      i("dd", null, c(p.shelf), 1)
                    ])) : G("", !0)
                  ]),
                  p.description ? (T(), C("p", Ob, c(p.description), 1)) : G("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (T(), C("p", Pb, [
                    be(" scanStatus: " + c(p.scanStatus || "unknown"), 1),
                    p.scanError ? (T(), C("span", Ib, " · scanError: " + c(p.scanError), 1)) : G("", !0)
                  ])) : G("", !0),
                  i("div", Lb, [
                    en(p).length === 0 ? (T(), C("span", Mb, "No Nextcloud tags")) : (T(!0), C(re, { key: 1 }, ve(en(p), (Z) => (T(), C("span", {
                      key: Z.id,
                      class: "library-tag"
                    }, c(Z.name), 1))), 128))
                  ]),
                  i("p", Db, [
                    i("a", {
                      href: p.filesUrl
                    }, c(f(l)("library", "Show in Files")), 9, Ub),
                    v[38] || (v[38] = be(" · ", -1)),
                    i("a", {
                      href: p.downloadUrl
                    }, c(f(l)("library", "Download source")), 9, Fb),
                    v[39] || (v[39] = be(" · ", -1)),
                    i("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (Z) => pt(p)
                    }, c(f(l)("library", "Details drawer")), 9, Hb),
                    v[40] || (v[40] = be(" · ", -1)),
                    i("a", {
                      href: p.detailsUrl
                    }, c(f(l)("library", "Details")), 9, $b)
                  ])
                ])
              ], 40, gb)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (T(), C("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": f(l)("library", "Catalogue pagination")
        }, [
          i("span", Vb, [
            be(c(f(l)("library", "Page")) + " " + c(W.value.page), 1),
            W.value.total > 0 ? (T(), C("span", qb, " · " + c(W.value.from) + "–" + c(W.value.to), 1)) : G("", !0)
          ]),
          W.value.previousUrl ? (T(), C("a", {
            key: 0,
            href: W.value.previousUrl
          }, c(f(l)("library", "Previous")), 9, Bb)) : (T(), C("span", zb, c(f(l)("library", "Previous")), 1)),
          W.value.nextUrl ? (T(), C("a", {
            key: 2,
            href: W.value.nextUrl
          }, c(f(l)("library", "Next")), 9, Wb)) : (T(), C("span", Kb, c(f(l)("library", "Next")), 1))
        ], 8, jb)) : G("", !0),
        oe.value ? (T(), C("div", {
          key: 6,
          class: "library-detail-drawer-backdrop",
          onClick: $t,
          "aria-hidden": "true"
        })) : G("", !0),
        oe.value ? (T(), C("aside", Gb, [
          i("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: $t
          }, "×"),
          i("p", Yb, c(f(l)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
          i("img", {
            class: "library-detail-drawer-cover",
            src: oe.value.coverUrl,
            alt: `Cover for ${oe.value.title}`,
            loading: "lazy"
          }, null, 8, Xb),
          i("p", Jb, c(oe.value.publicationType || f(l)("library", "Publication")), 1),
          i("h3", Zb, c(oe.value.title), 1),
          oe.value.creators ? (T(), C("p", Qb, c(oe.value.creators), 1)) : G("", !0),
          oe.value.description ? (T(), C("p", ey, c(oe.value.description), 1)) : G("", !0),
          i("dl", ty, [
            oe.value.publication ? (T(), C("div", ry, [
              i("dt", null, c(f(l)("library", "Series")), 1),
              i("dd", null, c(oe.value.publication), 1)
            ])) : G("", !0),
            oe.value.publicationDate ? (T(), C("div", ny, [
              i("dt", null, c(f(l)("library", "Date")), 1),
              i("dd", null, c(oe.value.publicationDate), 1)
            ])) : G("", !0),
            oe.value.shelf ? (T(), C("div", ay, [
              i("dt", null, c(f(l)("library", "Shelf")), 1),
              i("dd", null, c(oe.value.shelf), 1)
            ])) : G("", !0)
          ]),
          i("p", sy, [
            i("a", {
              class: "button primary",
              href: oe.value.openUrl
            }, c(f(l)("library", "Read")), 9, iy),
            i("a", {
              class: "button secondary",
              href: oe.value.detailsUrl
            }, c(f(l)("library", "View full details")), 9, ly)
          ]),
          i("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": f(l)("library", "Browse neighbouring items")
          }, [
            i("button", {
              type: "button",
              class: "button secondary",
              disabled: !ke.value,
              onClick: v[20] || (v[20] = (p) => Pt(ke.value))
            }, c(f(l)("library", "Previous issue")), 9, cy),
            i("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ye.value,
              onClick: v[21] || (v[21] = (p) => Pt(Ye.value))
            }, c(f(l)("library", "Next issue")), 9, uy)
          ], 8, oy)
        ])) : G("", !0)
      ])
    ]));
  }
}, wi = fu("library", "catalogue", {}), qn = document.querySelector("#library-vue-root"), Si = {
  ...wi,
  requestToken: qn?.dataset.requestToken || wi.requestToken || ""
};
function X(e) {
  return String(e ?? "");
}
function Dl(e) {
  return X(e).toUpperCase();
}
function fy(e, t, r, n = X) {
  for (const a of t) {
    const s = document.createElement("option");
    s.value = X(a), s.textContent = n(a), X(a) === X(r) && (s.selected = !0), e.appendChild(s);
  }
}
function Ei(e, t, r, n, a = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = X(n), o.placeholder = a, s.appendChild(o), e.appendChild(s);
}
function jr(e, t, r, n, a, s, o = X) {
  const u = document.createElement("label");
  u.textContent = t;
  const h = document.createElement("select");
  h.name = r;
  const w = document.createElement("option");
  w.value = "", w.textContent = a, h.appendChild(w), fy(h, s, n, o), u.appendChild(h), e.appendChild(u);
}
function Vr(e) {
  const t = X(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function py(e, t = {}) {
  return X(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(X(e || t?.publication || ""))}`);
}
function hy(e) {
  return X(e.discoveryPage) === "publication";
}
function my(e, t = {}) {
  return X(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(X(e))}`);
}
function qa(e) {
  return X(e.discoveryPage) === "year";
}
function by(e, t = {}) {
  return X(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(X(e))}`);
}
function Ba(e) {
  return X(e.discoveryPage) === "creator";
}
function yy(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && X(n).trim() !== "");
}
function gy() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function on(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function _y(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function vy(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), Ei(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), jr(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Ei(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), jr(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], Dl), jr(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), jr(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), jr(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), jr(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", l("library", "Apply catalogue filters")), a.textContent = l("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", l("library", "Clear catalogue filters")), s.textContent = l("library", "Clear"), n.append(a, s), n;
}
function wy() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", s = document.createElement("p");
  return s.className = "library-notice library-batch-metadata-apply-result", s.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${a} skipped.`), s;
}
function Sy(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let a = null;
  const s = () => {
    window.clearTimeout(a), a = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || X(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = X(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = l("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = X(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", s), o.appendChild(u), n.appendChild(o);
  const h = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, I, j, ie] of h) {
    const K = document.createElement("label");
    K.textContent = E;
    const ue = document.createElement("select");
    ue.name = I;
    for (const [le, W] of ie) {
      const D = document.createElement("option");
      D.value = X(le), D.textContent = X(W), X(le) === X(j) && (D.selected = !0), ue.appendChild(D);
    }
    ue.addEventListener("change", () => n.requestSubmit()), K.appendChild(ue), n.appendChild(K);
  }
  const w = document.createElement("button");
  w.type = "submit", w.className = "button primary", w.setAttribute("aria-label", l("library", "Apply catalogue filters")), w.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(w, y), n;
}
function Ey(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, a = X(e.settingsUrl || ""), s = X(e.metadataExportUrl || ""), o = X(e.batchTagUrl || "/apps/library/bulk/tags"), u = X(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), h = X(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), w = X(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = X(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ie = document.createElement("div"), K = document.createElement("h2");
  K.id = "library-catalogue-heading", K.textContent = l("library", "Library");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ie.append(K, ue);
  const le = document.createElement("nav");
  if (le.className = "library-catalogue-toolbar", le.setAttribute("aria-label", l("library", "Library actions")), a) {
    const P = document.createElement("a");
    P.href = a, P.className = "button secondary", P.setAttribute("aria-label", "Open Library settings"), P.textContent = l("library", "Settings"), le.appendChild(P);
  }
  if (s) {
    const P = document.createElement("a");
    P.href = s, P.className = "button secondary", P.setAttribute("aria-label", "Export corrected metadata"), P.textContent = l("library", "Export corrected metadata"), le.appendChild(P);
  }
  if (e.metadataSidecarManifestUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarManifestUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar manifest"), P.textContent = l("library", "Sidecar manifest"), le.appendChild(P);
  }
  if (e.metadataSidecarBundleUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarBundleUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar ZIP"), P.textContent = l("library", "Sidecar ZIP"), le.appendChild(P);
  }
  j.append(ie, le), I.appendChild(j);
  const W = wy();
  W && I.appendChild(W), I.appendChild(Sy(e, n));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), D.append(V, vy(e, n)), I.appendChild(D), hy(e) || qa(e) || Ba(e)) {
    const P = document.createElement("section");
    P.className = "library-discovery-header", P.setAttribute("aria-labelledby", "library-discovery-heading");
    const O = document.createElement("p");
    O.className = "library-muted", O.textContent = Ba(e) ? l("library", "Creator") : qa(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = X(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = `${n.total ?? r.length} ${Ba(e) ? l("library", "items by this creator. Sorted by publication context when available.") : qa(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ae = document.createElement("a");
    ae.href = "/apps/library/", ae.className = "button secondary", ae.textContent = l("library", "Back to full catalogue"), P.append(O, $, te, ae), I.appendChild(P);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Me = document.createElement("a");
  Me.href = "?", Me.textContent = ` ${l("library", "Clear all filters")}`, ce.appendChild(Me), I.appendChild(ce);
  const Pe = document.createElement("details");
  Pe.className = "library-batch-actions";
  const Be = document.createElement("summary");
  Be.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const De = Vr(e);
  De && Ee.appendChild(De);
  for (const [P, O] of Object.entries(e.activeFilters || {})) {
    if (X(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(O), Ee.appendChild($);
  }
  const rt = document.createElement("label");
  rt.textContent = l("library", "Apply Nextcloud tag to current results");
  const ut = document.createElement("input");
  ut.type = "text", ut.name = "nextcloudTagName", ut.placeholder = "batch-review", rt.appendChild(ut);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = l("library", "Apply Nextcloud tag to current results");
  const xt = document.createElement("p");
  xt.className = "library-muted", xt.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(rt, Ge, xt);
  const He = document.createElement("form");
  He.method = "post", He.action = u, He.className = "library-batch-tag-remove-form";
  const Ue = Vr(e);
  Ue && He.appendChild(Ue);
  for (const [P, O] of Object.entries(e.activeFilters || {})) {
    if (X(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(O), He.appendChild($);
  }
  const ge = document.createElement("label");
  ge.textContent = l("library", "Nextcloud tag");
  const fe = document.createElement("input");
  fe.type = "text", fe.name = "nextcloudTagName", fe.setAttribute("list", "library-nextcloud-tag-suggestions"), fe.placeholder = l("library", "e.g. Review"), fe.autocomplete = "off", ge.appendChild(fe);
  const ze = document.createElement("button");
  ze.type = "submit", ze.className = "button secondary", ze.textContent = l("library", "Remove tag from current results");
  const _e = document.createElement("p");
  _e.className = "library-muted", _e.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), He.append(ge, ze, _e);
  const Ne = document.createElement("form");
  Ne.method = "post", Ne.action = h, Ne.className = "library-batch-metadata-reset-form";
  const We = Vr(e);
  We && Ne.appendChild(We);
  for (const [P, O] of Object.entries(e.activeFilters || {})) {
    if (X(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(O), Ne.appendChild($);
  }
  const nt = document.createElement("input");
  nt.type = "hidden", nt.name = "scannerConflicts", nt.value = "1";
  const me = document.createElement("button");
  me.type = "submit", me.className = "button secondary", me.textContent = l("library", "Reset filtered metadata");
  const er = document.createElement("p");
  er.className = "library-muted", er.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ne.append(nt, me, er);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = w, $e.className = "library-batch-metadata-edit-preview-form", $e.target = "_blank";
  const vt = Vr(e);
  vt && $e.appendChild(vt);
  for (const [P, O] of Object.entries(e.activeFilters || {})) {
    if (X(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(O), $e.appendChild($);
  }
  const wt = document.createElement("label");
  wt.textContent = l("library", "Metadata field");
  const dt = document.createElement("select");
  dt.name = "bulkEditField";
  for (const [P, O] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = P, $.textContent = l("library", O), dt.appendChild($);
  }
  wt.appendChild(dt);
  const ft = document.createElement("label");
  ft.textContent = l("library", "Preview value");
  const Ot = document.createElement("input");
  Ot.type = "text", Ot.name = "bulkEditValue", Ot.placeholder = "magazine, de, photography...", Ot.autocomplete = "off", ft.appendChild(Ot);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = l("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = l("library", "Preview first, then apply from the review page."), $e.append(wt, ft, m, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const R = Vr(e);
  R && _.appendChild(R);
  for (const [P, O] of Object.entries(e.activeFilters || {})) {
    if (X(O).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = X(O), _.appendChild($);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = l("library", "Request fresh cover previews");
  const A = document.createElement("p");
  A.className = "library-muted", A.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(x, A), Pe.append(Be, Ee, He, Ne, $e, _), I.appendChild(Pe);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(U), I.appendChild(M);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], k = document.createElement("details");
  k.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const Y = document.createElement("summary");
  Y.className = "library-periodical-groups-summary", Y.textContent = l("library", "Show top series and periodicals"), k.appendChild(Y);
  const H = document.createElement("h3");
  H.textContent = L.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const B = document.createElement("p");
  if (B.className = "library-muted", B.textContent = L.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), k.append(H, B), L.length > 0) {
    const P = document.createElement("ul");
    for (const O of L) {
      const $ = document.createElement("li"), te = document.createElement("a");
      te.href = py(O.publication, O), te.textContent = X(O.publication);
      const ae = document.createElement("span");
      ae.className = "library-muted", ae.textContent = `${O.itemCount} items`, $.append(te, ae), P.appendChild($);
    }
    k.appendChild(P);
  }
  I.appendChild(k);
  const Q = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Q.length > 0) {
    const P = document.createElement("details");
    P.className = "library-year-groups";
    const O = document.createElement("summary");
    O.className = "library-periodical-groups-summary", O.textContent = l("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top publication years");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const ae = document.createElement("ul");
    for (const pe of Q) {
      const he = document.createElement("li"), oe = document.createElement("a");
      oe.href = my(pe, e), oe.textContent = X(pe), he.appendChild(oe), ae.appendChild(he);
    }
    P.append(O, $, te, ae), I.appendChild(P);
  }
  const ee = Array.isArray(e.creators) ? e.creators : [];
  if (ee.length > 0) {
    const P = document.createElement("details");
    P.className = "library-creator-groups";
    const O = document.createElement("summary");
    O.className = "library-periodical-groups-summary", O.textContent = l("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top creators");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ae = document.createElement("ul");
    for (const pe of ee) {
      const he = document.createElement("li"), oe = document.createElement("a");
      oe.href = by(pe, e), oe.textContent = X(pe), he.appendChild(oe), ae.appendChild(he);
    }
    P.append(O, $, te, ae), I.appendChild(P);
  }
  if (r.length === 0) {
    const P = document.createElement("div"), O = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), te = yy(e);
    P.className = "library-empty-content", (O === 0 || $ === 0) && P.classList.add("library-first-run-guidance"), te && O > 0 && $ > 0 && P.classList.add("library-filter-empty-state"), P.setAttribute("role", "status");
    const ae = document.createElement("h3"), pe = document.createElement("p");
    pe.className = "library-muted";
    const he = document.createElement("p");
    he.className = "library-empty-actions", O === 0 ? (ae.textContent = l("library", "Start with one Library root"), pe.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), on(he, a, "button primary", l("library", "Add a Library root")), _y(he, l("library", "Run a scan after saving a root"))) : $ === 0 ? (ae.textContent = l("library", "No enabled Library roots"), pe.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), on(he, a, "button primary", l("library", "Open Library settings"))) : te ? (ae.textContent = l("library", "No matches for the current filters"), pe.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), on(he, gy(), "button secondary", l("library", "Clear search")), on(he, "?", "button primary", l("library", "Clear all filters"))) : (ae.textContent = l("library", "No catalogue items yet"), pe.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), on(he, a, "button primary", l("library", "Run a scan from settings"))), P.append(ae, pe, he), I.appendChild(P);
  } else {
    const P = document.createElement("div");
    P.className = "library-cover-gallery";
    for (const O of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const te = document.createElement("a");
      te.className = "library-cover-link", te.href = X(O.openUrl || "#"), te.setAttribute("aria-label", `Read ${X(O.title || "publication")}`);
      const ae = document.createElement("img");
      ae.className = "library-cover-image", ae.src = X(O.coverUrl || ""), ae.alt = `Cover for ${X(O.title || "publication")}`, ae.loading = "lazy", te.appendChild(ae);
      const pe = Vr(e), he = document.createElement("form");
      he.method = "post", he.action = X(O.starUrl || ""), he.className = "library-cover-star-form", pe && he.appendChild(pe);
      const oe = document.createElement("input");
      oe.type = "hidden", oe.name = "returnTo", oe.value = "catalogue";
      const Te = document.createElement("input");
      Te.type = "hidden", Te.name = "starred", Te.value = O.starred ? "0" : "1";
      const ke = document.createElement("button");
      ke.type = "submit", ke.className = O.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ke.setAttribute("aria-pressed", O.starred ? "true" : "false"), ke.setAttribute("aria-label", O.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), ke.title = O.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), ke.textContent = O.starred ? "★" : "☆", he.append(oe, Te, ke);
      const Ye = document.createElement("div");
      Ye.className = "library-cover-summary";
      const Ht = document.createElement("h3");
      if (Ht.textContent = X(O.title || "Untitled publication"), Ye.appendChild(Ht), O.creators) {
        const mt = document.createElement("p");
        mt.className = "library-creator", mt.textContent = X(O.creators), Ye.appendChild(mt);
      }
      const Xe = document.createElement("dl");
      Xe.className = "library-cover-detail-list";
      const tr = [
        ["Type", X(O.publicationType || "other")],
        ["Format", O.extension ? Dl(O.extension) : ""],
        ["Shelf", O.shelf ? X(O.shelf) : ""]
      ].filter(([, mt]) => mt !== "");
      for (const [mt, Lr] of tr) {
        const jt = document.createElement("div");
        jt.className = "library-cover-detail-chip";
        const Vt = document.createElement("dt");
        Vt.textContent = mt;
        const at = document.createElement("dd");
        at.textContent = Lr, jt.append(Vt, at), Xe.appendChild(jt);
      }
      Ye.appendChild(Xe);
      const kt = document.createElement("p"), pt = document.createElement("a");
      pt.href = X(O.openUrl || "#"), pt.textContent = l("library", "Read");
      const $t = document.createElement("a");
      $t.href = X(O.filesUrl || "#"), $t.textContent = l("library", "Show in Files");
      const Pt = document.createElement("a");
      Pt.href = X(O.downloadUrl || "#"), Pt.textContent = l("library", "Download source");
      const ht = document.createElement("a");
      ht.href = X(O.detailsUrl || "#"), ht.textContent = l("library", "Details"), kt.append(pt, document.createTextNode(" · "), $t, document.createTextNode(" · "), Pt, document.createTextNode(" · "), ht), Ye.appendChild(kt), $.append(te, he, Ye), P.appendChild($);
    }
    I.appendChild(P);
  }
  return E.appendChild(I), E;
}
if (qn)
  try {
    cu(dy, { state: Si }).mount(qn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), qn.replaceChildren(Ey(Si));
  }
//# sourceMappingURL=library-main.mjs.map
