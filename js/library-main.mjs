// @__NO_SIDE_EFFECTS__
function ai(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, qr = [], Yt = () => {
}, Ts = () => !1, na = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), aa = (e) => e.startsWith("onUpdate:"), rt = Object.assign, ii = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), ne = Array.isArray, yr = (e) => xn(e) === "[object Map]", Or = (e) => xn(e) === "[object Set]", xi = (e) => xn(e) === "[object Date]", de = (e) => typeof e == "function", He = (e) => typeof e == "string", Xt = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", xs = (e) => (Ce(e) || de(e)) && de(e.then) && de(e.catch), As = Object.prototype.toString, xn = (e) => As.call(e), Vl = (e) => xn(e).slice(8, -1), ks = (e) => xn(e) === "[object Object]", si = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = /* @__PURE__ */ ai(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ia = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ql = /-\w/g, Dt = ia(
  (e) => e.replace(ql, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Nr = ia(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), Rs = ia((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ca = ia(
  (e) => e ? `on${Rs(e)}` : ""
), Gt = (e, t) => !Object.is(e, t), Bn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Os = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, sa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ai;
const la = () => Ai || (Ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function li(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = He(n) ? Gl(n) : li(n);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (He(e) || Ce(e))
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
  if (He(e))
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
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ai(Yl);
function Ns(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = gr(e[n], t[n]);
  return r;
}
function ki(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let i = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && gr(a, r[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    n[i] = 1;
  }
  return !0;
}
function gr(e, t) {
  if (e === t) return !0;
  let r = xi(e), n = xi(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Xt(e), n = Xt(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Ce(e), n = Ce(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = yr(e), n = yr(t), r || n || (r = Or(e), n = Or(t), r || n))
      return r && n ? ki(e, t) : !1;
    const a = Object.keys(e).length, i = Object.keys(t).length;
    if (a !== i)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), p = t.hasOwnProperty(o);
      if (u && !p || !u && p || !gr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => gr(r, t));
}
const Ps = (e) => !!(e && e.__v_isRef === !0), c = (e) => He(e) ? e : e == null ? "" : ne(e) || Ce(e) && (e.toString === As || !de(e.toString)) ? Ps(e) ? c(e.value) : JSON.stringify(e, Is, 2) : String(e), Is = (e, t) => Ps(t) ? Is(e, t.value) : yr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], i) => (r[Ta(n, i) + " =>"] = a, r),
    {}
  )
} : Or(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ta(r))
} : Xt(t) ? Ta(t) : Ce(t) && !ne(t) && !ks(t) ? String(t) : t, Ta = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
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
let ke;
const xa = /* @__PURE__ */ new WeakSet();
class Ls {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xa.has(this) && (xa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ms(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ri(this), Us(this);
    const t = ke, r = Mt;
    ke = this, Mt = !0;
    try {
      return this.fn();
    } finally {
      Fs(this), ke = t, Mt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ui(t);
      this.deps = this.depsTail = void 0, Ri(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wa(this) && this.run();
  }
  get dirty() {
    return Wa(this);
  }
}
let Ds = 0, mn, bn;
function Ms(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = bn, bn = e;
    return;
  }
  e.next = mn, mn = e;
}
function oi() {
  Ds++;
}
function ci() {
  if (--Ds > 0)
    return;
  if (bn) {
    let t = bn;
    for (bn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; mn; ) {
    let t = mn;
    for (mn = void 0; t; ) {
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
function Us(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === r && (r = a), ui(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = r;
}
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === vn) || (e.globalVersion = vn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = ke, n = Mt;
  ke = e, Mt = !0;
  try {
    Us(e);
    const a = e.fn(e._value);
    (t.version === 0 || Gt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ke = r, Mt = n, Fs(e), e.flags &= -3;
  }
}
function ui(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      ui(i, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Mt = !0;
const $s = [];
function or() {
  $s.push(Mt), Mt = !1;
}
function cr() {
  const e = $s.pop();
  Mt = e === void 0 ? !0 : e;
}
function Ri(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = r;
    }
  }
}
let vn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class di {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !Mt || ke === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== ke)
      r = this.activeLink = new ro(ke, this), ke.deps ? (r.prevDep = ke.depsTail, ke.depsTail.nextDep = r, ke.depsTail = r) : ke.deps = ke.depsTail = r, js(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = ke.depsTail, r.nextDep = void 0, ke.depsTail.nextDep = r, ke.depsTail = r, ke.deps === r && (ke.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, vn++, this.notify(t);
  }
  notify(t) {
    oi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      ci();
    }
  }
}
function js(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        js(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ka = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ Symbol(
  ""
), Ga = /* @__PURE__ */ Symbol(
  ""
), wn = /* @__PURE__ */ Symbol(
  ""
);
function et(e, t, r) {
  if (Mt && ke) {
    let n = Ka.get(e);
    n || Ka.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new di()), a.map = n, a.key = r), a.track();
  }
}
function ir(e, t, r, n, a, i) {
  const o = Ka.get(e);
  if (!o) {
    vn++;
    return;
  }
  const u = (p) => {
    p && p.trigger();
  };
  if (oi(), t === "clear")
    o.forEach(u);
  else {
    const p = ne(e), w = p && si(r);
    if (p && r === "length") {
      const y = Number(n);
      o.forEach((E, I) => {
        (I === "length" || I === wn || !Xt(I) && I >= y) && u(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), w && u(o.get(wn)), t) {
        case "add":
          p ? w && u(o.get("length")) : (u(o.get(Ar)), yr(e) && u(o.get(Ga)));
          break;
        case "delete":
          p || (u(o.get(Ar)), yr(e) && u(o.get(Ga)));
          break;
        case "set":
          yr(e) && u(o.get(Ar));
          break;
      }
  }
  ci();
}
function Fr(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (et(t, "iterate", wn), /* @__PURE__ */ Ot(e) ? t : t.map(Ut));
}
function oa(e) {
  return et(e = /* @__PURE__ */ we(e), "iterate", wn), e;
}
function Wt(e, t) {
  return /* @__PURE__ */ ur(e) ? Kr(/* @__PURE__ */ kr(e) ? Ut(t) : t) : Ut(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return Aa(this, Symbol.iterator, (e) => Wt(this, e));
  },
  concat(...e) {
    return Fr(this).concat(
      ...e.map((t) => ne(t) ? Fr(t) : t)
    );
  },
  entries() {
    return Aa(this, "entries", (e) => (e[1] = Wt(this, e[1]), e));
  },
  every(e, t) {
    return tr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Wt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return tr(
      this,
      "find",
      e,
      t,
      (r) => Wt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return tr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tr(
      this,
      "findLast",
      e,
      t,
      (r) => Wt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return tr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ka(this, "includes", e);
  },
  indexOf(...e) {
    return ka(this, "indexOf", e);
  },
  join(e) {
    return Fr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ka(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return an(this, "pop");
  },
  push(...e) {
    return an(this, "push", e);
  },
  reduce(e, ...t) {
    return Oi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Oi(this, "reduceRight", e, t);
  },
  shift() {
    return an(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return tr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return an(this, "splice", e);
  },
  toReversed() {
    return Fr(this).toReversed();
  },
  toSorted(e) {
    return Fr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Fr(this).toSpliced(...e);
  },
  unshift(...e) {
    return an(this, "unshift", e);
  },
  values() {
    return Aa(this, "values", (e) => Wt(this, e));
  }
};
function Aa(e, t, r) {
  const n = oa(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ot(e) && (a._next = a.next, a.next = () => {
    const i = a._next();
    return i.done || (i.value = r(i.value)), i;
  }), a;
}
const ao = Array.prototype;
function tr(e, t, r, n, a, i) {
  const o = oa(e), u = o !== e && !/* @__PURE__ */ Ot(e), p = o[t];
  if (p !== ao[t]) {
    const E = p.apply(e, i);
    return u ? Ut(E) : E;
  }
  let w = r;
  o !== e && (u ? w = function(E, I) {
    return r.call(this, Wt(e, E), I, e);
  } : r.length > 2 && (w = function(E, I) {
    return r.call(this, E, I, e);
  }));
  const y = p.call(o, w, n);
  return u && a ? a(y) : y;
}
function Oi(e, t, r, n) {
  const a = oa(e), i = a !== e && !/* @__PURE__ */ Ot(e);
  let o = r, u = !1;
  a !== e && (i ? (u = n.length === 0, o = function(w, y, E) {
    return u && (u = !1, w = Wt(e, w)), r.call(this, w, Wt(e, y), E, e);
  }) : r.length > 3 && (o = function(w, y, E) {
    return r.call(this, w, y, E, e);
  }));
  const p = a[t](o, ...n);
  return u ? Wt(e, p) : p;
}
function ka(e, t, r) {
  const n = /* @__PURE__ */ we(e);
  et(n, "iterate", wn);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ hi(r[0]) ? (r[0] = /* @__PURE__ */ we(r[0]), n[t](...r)) : a;
}
function an(e, t, r = []) {
  or(), oi();
  const n = (/* @__PURE__ */ we(e))[t].apply(e, r);
  return ci(), cr(), n;
}
const io = /* @__PURE__ */ ai("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xt)
);
function so(e) {
  Xt(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class qs {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, i = this._isShallow;
    if (r === "__v_isReactive")
      return !a;
    if (r === "__v_isReadonly")
      return a;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return n === (a ? i ? yo : Ks : i ? Ws : zs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ne(t);
    if (!a) {
      let p;
      if (o && (p = no[r]))
        return p;
      if (r === "hasOwnProperty")
        return so;
    }
    const u = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ tt(t) ? t : n
    );
    if ((Xt(r) ? Vs.has(r) : io(r)) || (a || et(t, "get", r), i))
      return u;
    if (/* @__PURE__ */ tt(u)) {
      const p = o && si(r) ? u : u.value;
      return a && Ce(p) ? /* @__PURE__ */ Xa(p) : p;
    }
    return Ce(u) ? a ? /* @__PURE__ */ Xa(u) : /* @__PURE__ */ nr(u) : u;
  }
}
class Bs extends qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let i = t[r];
    const o = ne(t) && si(r);
    if (!this._isShallow) {
      const w = /* @__PURE__ */ ur(i);
      if (!/* @__PURE__ */ Ot(n) && !/* @__PURE__ */ ur(n) && (i = /* @__PURE__ */ we(i), n = /* @__PURE__ */ we(n)), !o && /* @__PURE__ */ tt(i) && !/* @__PURE__ */ tt(n))
        return w || (i.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), p = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ tt(t) ? t : a
    );
    return t === /* @__PURE__ */ we(a) && p && (u ? Gt(n, i) && ir(t, "set", r, n) : ir(t, "add", r, n)), p;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && ir(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Xt(r) || !Vs.has(r)) && et(t, "has", r), n;
  }
  ownKeys(t) {
    return et(
      t,
      "iterate",
      ne(t) ? "length" : Ar
    ), Reflect.ownKeys(t);
  }
}
class lo extends qs {
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
const oo = /* @__PURE__ */ new Bs(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Bs(!0);
const Ya = (e) => e, Un = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, i = /* @__PURE__ */ we(a), o = yr(i), u = e === "entries" || e === Symbol.iterator && o, p = e === "keys" && o, w = a[e](...n), y = r ? Ya : t ? Kr : Ut;
    return !t && et(
      i,
      "iterate",
      p ? Ga : Ar
    ), rt(
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
function Fn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      e || (Gt(a, u) && et(o, "get", a), et(o, "get", u));
      const { has: p } = Un(o), w = t ? Ya : e ? Kr : Ut;
      if (p.call(o, a))
        return w(i.get(a));
      if (p.call(o, u))
        return w(i.get(u));
      i !== o && i.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && et(/* @__PURE__ */ we(a), "iterate", Ar), a.size;
    },
    has(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      return e || (Gt(a, u) && et(o, "has", a), et(o, "has", u)), a === u ? i.has(a) : i.has(a) || i.has(u);
    },
    forEach(a, i) {
      const o = this, u = o.__v_raw, p = /* @__PURE__ */ we(u), w = t ? Ya : e ? Kr : Ut;
      return !e && et(p, "iterate", Ar), u.forEach((y, E) => a.call(i, w(y), w(E), o));
    }
  };
  return rt(
    r,
    e ? {
      add: Fn("add"),
      set: Fn("set"),
      delete: Fn("delete"),
      clear: Fn("clear")
    } : {
      add(a) {
        const i = /* @__PURE__ */ we(this), o = Un(i), u = /* @__PURE__ */ we(a), p = !t && !/* @__PURE__ */ Ot(a) && !/* @__PURE__ */ ur(a) ? u : a;
        return o.has.call(i, p) || Gt(a, p) && o.has.call(i, a) || Gt(u, p) && o.has.call(i, u) || (i.add(p), ir(i, "add", p, p)), this;
      },
      set(a, i) {
        !t && !/* @__PURE__ */ Ot(i) && !/* @__PURE__ */ ur(i) && (i = /* @__PURE__ */ we(i));
        const o = /* @__PURE__ */ we(this), { has: u, get: p } = Un(o);
        let w = u.call(o, a);
        w || (a = /* @__PURE__ */ we(a), w = u.call(o, a));
        const y = p.call(o, a);
        return o.set(a, i), w ? Gt(i, y) && ir(o, "set", a, i) : ir(o, "add", a, i), this;
      },
      delete(a) {
        const i = /* @__PURE__ */ we(this), { has: o, get: u } = Un(i);
        let p = o.call(i, a);
        p || (a = /* @__PURE__ */ we(a), p = o.call(i, a)), u && u.call(i, a);
        const w = i.delete(a);
        return p && ir(i, "delete", a, void 0), w;
      },
      clear() {
        const a = /* @__PURE__ */ we(this), i = a.size !== 0, o = a.clear();
        return i && ir(
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
function fi(e, t) {
  const r = po(e, t);
  return (n, a, i) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Se(r, a) && a in n ? r : n,
    a,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ fi(!1, !1)
}, mo = {
  get: /* @__PURE__ */ fi(!1, !0)
}, bo = {
  get: /* @__PURE__ */ fi(!0, !1)
};
const zs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
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
function nr(e) {
  return /* @__PURE__ */ ur(e) ? e : pi(
    e,
    !1,
    oo,
    ho,
    zs
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return pi(
    e,
    !1,
    uo,
    mo,
    Ws
  );
}
// @__NO_SIDE_EFFECTS__
function Xa(e) {
  return pi(
    e,
    !0,
    co,
    bo,
    Ks
  );
}
function pi(e, t, r, n, a) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = a.get(e);
  if (i)
    return i;
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
function kr(e) {
  return /* @__PURE__ */ ur(e) ? /* @__PURE__ */ kr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ we(t) : e;
}
function vo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Os(e, "__v_skip", !0), e;
}
const Ut = (e) => Ce(e) ? /* @__PURE__ */ nr(e) : e, Kr = (e) => Ce(e) ? /* @__PURE__ */ Xa(e) : e;
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ tt(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new di(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ we(t), this._value = r ? t : Ut(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ot(t) || /* @__PURE__ */ ur(t);
    t = n ? t : /* @__PURE__ */ we(t), Gt(t, r) && (this._rawValue = t, this._value = n ? t : Ut(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ tt(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : f(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return /* @__PURE__ */ tt(a) && !/* @__PURE__ */ tt(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Gs(e) {
  return /* @__PURE__ */ kr(e) ? e : new Proxy(e, Eo);
}
class Co {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new di(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = vn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return Ms(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Hs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function To(e, t, r = !1) {
  let n, a;
  return de(e) ? n = e : (n = e.get, a = e.set), new Co(n, a, r);
}
const Hn = {}, Gn = /* @__PURE__ */ new WeakMap();
let Er;
function xo(e, t = !1, r = Er) {
  if (r) {
    let n = Gn.get(r);
    n || Gn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = xe) {
  const { immediate: n, deep: a, once: i, scheduler: o, augmentJob: u, call: p } = r, w = (V) => a ? V : /* @__PURE__ */ Ot(V) || a === !1 || a === 0 ? sr(V, 1) : sr(V);
  let y, E, I, j, se = !1, K = !1;
  if (/* @__PURE__ */ tt(e) ? (E = () => e.value, se = /* @__PURE__ */ Ot(e)) : /* @__PURE__ */ kr(e) ? (E = () => w(e), se = !0) : ne(e) ? (K = !0, se = e.some((V) => /* @__PURE__ */ kr(V) || /* @__PURE__ */ Ot(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ tt(V))
      return V.value;
    if (/* @__PURE__ */ kr(V))
      return w(V);
    if (de(V))
      return p ? p(V, 2) : V();
  })) : de(e) ? t ? E = p ? () => p(e, 2) : e : E = () => {
    if (I) {
      or();
      try {
        I();
      } finally {
        cr();
      }
    }
    const V = Er;
    Er = y;
    try {
      return p ? p(e, 3, [j]) : e(j);
    } finally {
      Er = V;
    }
  } : E = Yt, t && a) {
    const V = E, ce = a === !0 ? 1 / 0 : a;
    E = () => sr(V(), ce);
  }
  const ue = eo(), le = () => {
    y.stop(), ue && ue.active && ii(ue.effects, y);
  };
  if (i && t) {
    const V = t;
    t = (...ce) => {
      const De = V(...ce);
      return le(), De;
    };
  }
  let z = K ? new Array(e.length).fill(Hn) : Hn;
  const M = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || a || se || (K ? ce.some((De, Ne) => Gt(De, z[Ne])) : Gt(ce, z))) {
          I && I();
          const De = Er;
          Er = y;
          try {
            const Ne = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === Hn ? void 0 : K && z[0] === Hn ? [] : z,
              j
            ];
            z = ce, p ? p(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            Er = De;
          }
        }
      } else
        y.run();
  };
  return u && u(M), y = new Ls(E), y.scheduler = o ? () => o(M, !1) : M, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = Gn.get(y);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const ce of V) ce();
      Gn.delete(y);
    }
  }, t ? n ? M(!0) : z = y.run() : o ? o(M.bind(null, !0), !0) : y.run(), le.pause = y.pause.bind(y), le.resume = y.resume.bind(y), le.stop = le, le;
}
function sr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ tt(e))
    sr(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      sr(e[n], t, r);
  else if (Or(e) || yr(e))
    e.forEach((n) => {
      sr(n, t, r);
    });
  else if (ks(e)) {
    for (const n in e)
      sr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && sr(e[n], t, r);
  }
  return e;
}
function An(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    ca(a, t, r);
  }
}
function Ft(e, t, r, n) {
  if (de(e)) {
    const a = An(e, t, r, n);
    return a && xs(a) && a.catch((i) => {
      ca(i, t, r);
    }), a;
  }
  if (ne(e)) {
    const a = [];
    for (let i = 0; i < e.length; i++)
      a.push(Ft(e[i], t, r, n));
    return a;
  }
}
function ca(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xe;
  if (t) {
    let u = t.parent;
    const p = t.proxy, w = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, p, w) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      or(), An(i, null, 10, [
        e,
        p,
        w
      ]), cr();
      return;
    }
  }
  ko(e, r, a, n, o);
}
function ko(e, t, r, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ct = [];
let zt = -1;
const Br = [];
let br = null, jr = 0;
const Ys = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function Xs(e) {
  const t = Yn || Ys;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = zt + 1, r = ct.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = ct[n], i = Sn(a);
    i < e || i === e && a.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function mi(e) {
  if (!(e.flags & 1)) {
    const t = Sn(e), r = ct[ct.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Sn(r) ? ct.push(e) : ct.splice(Ro(t), 0, e), e.flags |= 1, Js();
  }
}
function Js() {
  Yn || (Yn = Ys.then(Qs));
}
function Oo(e) {
  if (!ne(e))
    br && e.id === -1 ? br.splice(jr + 1, 0, e) : e.flags & 1 || (Br.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Br.push(e[t]);
  Js();
}
function Pi(e, t, r = zt + 1) {
  for (; r < ct.length; r++) {
    const n = ct[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ct.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zs(e) {
  if (Br.length) {
    const t = [...new Set(Br)].sort(
      (r, n) => Sn(r) - Sn(n)
    );
    if (Br.length = 0, br) {
      for (let r = 0; r < t.length; r++)
        br.push(t[r]);
      return;
    }
    for (br = t, jr = 0; jr < br.length; jr++) {
      const r = br[jr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    br = null, jr = 0;
  }
}
const Sn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qs(e) {
  try {
    for (zt = 0; zt < ct.length; zt++) {
      const t = ct[zt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), An(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zt < ct.length; zt++) {
      const t = ct[zt];
      t && (t.flags &= -2);
    }
    zt = -1, ct.length = 0, Zs(), Yn = null, (ct.length || Br.length) && Qs();
  }
}
let Rt = null, el = null;
function Xn(e) {
  const t = Rt;
  return Rt = e, el = e && e.type.__scopeId || null, t;
}
function No(e, t = Rt, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && qi(-1);
    const i = Xn(t), o = Rr.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let p = Rr.length; p > o; p--) xl();
      Xn(i), n._d && qi(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function lt(e, t) {
  if (Rt === null)
    return e;
  const r = ha(Rt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, o, u, p = xe] = t[a];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && sr(o), n.push({
      dir: i,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: p
    }));
  }
  return e;
}
function vr(e, t, r, n) {
  const a = e.dirs, i = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    i && (u.oldValue = i[o].value);
    let p = u.dir[n];
    p && (or(), Ft(p, r, 8, [
      e.el,
      u,
      e,
      t
    ]), cr());
  }
}
function Po(e, t) {
  if (ut) {
    let r = ut.provides;
    const n = ut.parent && ut.parent.provides;
    n === r && (r = ut.provides = Object.create(n)), r[e] = t;
  }
}
function zn(e, t, r = !1) {
  const n = kc();
  if (n || zr) {
    let a = zr ? zr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Lo = () => zn(Io);
function Ra(e, t, r) {
  return tl(e, t, r);
}
function tl(e, t, r = xe) {
  const { immediate: n, deep: a, flush: i, once: o } = r, u = rt({}, r), p = t && n || !t && i !== "post";
  let w;
  if (Tn) {
    if (i === "sync") {
      const j = Lo();
      w = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!p) {
      const j = () => {
      };
      return j.stop = Yt, j.resume = Yt, j.pause = Yt, j;
    }
  }
  const y = ut;
  u.call = (j, se, K) => Ft(j, y, se, K);
  let E = !1;
  i === "post" ? u.scheduler = (j) => {
    bt(j, y && y.suspense);
  } : i !== "sync" && (E = !0, u.scheduler = (j, se) => {
    se ? j() : mi(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return Tn && (w ? w.push(I) : p && I()), I;
}
function Do(e, t, r) {
  const n = this.proxy, a = He(e) ? e.includes(".") ? rl(n, e) : () => n[e] : e.bind(n, n);
  let i;
  de(t) ? i = t : (i = t.handler, r = t);
  const o = kn(this), u = tl(a, i.bind(n), r);
  return o(), u;
}
function rl(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
const Mo = /* @__PURE__ */ Symbol("_vte"), ua = (e) => e.__isTeleport, Oa = /* @__PURE__ */ Symbol("_leaveCb");
function Uo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== dr) {
        t = r;
        break;
      }
  }
  return t;
}
function nl(e) {
  if (!yi(e))
    return ua(e.type) && e.children ? Uo(e.children) : e;
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
function bi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    bi(
      ua(r.type) && nl(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function al(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ii(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Jn = /* @__PURE__ */ new WeakMap();
function yn(e, t, r, n, a = !1) {
  if (ne(e)) {
    e.forEach(
      (K, ue) => yn(
        K,
        t && (ne(t) ? t[ue] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (gn(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && yn(e, t, r, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ha(n.component) : n.el, o = a ? null : i, { i: u, r: p } = e, w = t && t.r, y = u.refs === xe ? u.refs = {} : u.refs, E = u.setupState, I = /* @__PURE__ */ we(E), j = E === xe ? Ts : (K) => Ii(y, K) ? !1 : Se(I, K), se = (K, ue) => !(ue && Ii(y, ue));
  if (w != null && w !== p) {
    if (Li(t), He(w))
      y[w] = null, j(w) && (E[w] = null);
    else if (/* @__PURE__ */ tt(w)) {
      const K = t;
      se(w, K.k) && (w.value = null), K.k && (y[K.k] = null);
    }
  }
  if (de(p))
    An(p, u, 12, [o, y]);
  else {
    const K = He(p), ue = /* @__PURE__ */ tt(p);
    if (K || ue) {
      const le = () => {
        if (e.f) {
          const z = K ? j(p) ? E[p] : y[p] : se() || !e.k ? p.value : y[e.k];
          if (a)
            ne(z) && ii(z, i);
          else if (ne(z))
            z.includes(i) || z.push(i);
          else if (K)
            y[p] = [i], j(p) && (E[p] = y[p]);
          else {
            const M = [i];
            se(p, e.k) && (p.value = M), e.k && (y[e.k] = M);
          }
        } else K ? (y[p] = o, j(p) && (E[p] = o)) : ue && (se(p, e.k) && (p.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const z = () => {
          le(), Jn.delete(e);
        };
        z.id = -1, Jn.set(e, z), bt(z, r);
      } else
        Li(e), le();
    }
  }
}
function Li(e) {
  const t = Jn.get(e);
  t && (t.flags |= 8, Jn.delete(e));
}
la().requestIdleCallback;
la().cancelIdleCallback;
const gn = (e) => !!e.type.__asyncLoader, yi = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  il(e, "a", t);
}
function Ho(e, t) {
  il(e, "da", t);
}
function il(e, t, r = ut) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (da(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      yi(a.parent.vnode) && $o(n, t, r, a), a = a.parent;
  }
}
function $o(e, t, r, n) {
  const a = da(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ol(() => {
    ii(n[t], a);
  }, r);
}
function da(e, t, r = ut, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...o) => {
      or();
      const u = kn(r), p = Ft(t, r, e, o);
      return u(), cr(), p;
    });
    return n ? a.unshift(i) : a.push(i), i;
  }
}
const fr = (e) => (t, r = ut) => {
  (!Tn || e === "sp") && da(e, (...n) => t(...n), r);
}, jo = fr("bm"), sl = fr("m"), Vo = fr(
  "bu"
), qo = fr("u"), ll = fr(
  "bum"
), ol = fr("um"), Bo = fr(
  "sp"
), zo = fr("rtg"), Wo = fr("rtc");
function Ko(e, t = ut) {
  da("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, r, n) {
  let a;
  const i = r, o = ne(e);
  if (o || He(e)) {
    const u = o && /* @__PURE__ */ kr(e);
    let p = !1, w = !1;
    u && (p = !/* @__PURE__ */ Ot(e), w = /* @__PURE__ */ ur(e), e = oa(e)), a = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      a[y] = t(
        p ? w ? Kr(Ut(e[y])) : Ut(e[y]) : e[y],
        y,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let u = 0; u < e; u++)
      a[u] = t(u + 1, u, void 0, i);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (u, p) => t(u, p, void 0, i)
      );
    else {
      const u = Object.keys(e);
      a = new Array(u.length);
      for (let p = 0, w = u.length; p < w; p++) {
        const y = u[p];
        a[p] = t(e[y], y, p, i);
      }
    }
  else
    a = [];
  return a;
}
const Ja = (e) => e ? Ol(e) ? ha(e) : Ja(e.parent) : null, _n = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ rt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ja(e.parent),
    $root: (e) => Ja(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ul(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      mi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
    $watch: (e) => Do.bind(e)
  })
), Na = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: a, props: i, accessCache: o, type: u, appContext: p } = e;
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
            return i[t];
        }
      else {
        if (Na(n, t))
          return o[t] = 1, n[t];
        if (a !== xe && Se(a, t))
          return o[t] = 2, a[t];
        if (Se(i, t))
          return o[t] = 3, i[t];
        if (r !== xe && Se(r, t))
          return o[t] = 4, r[t];
        Za && (o[t] = 0);
      }
    }
    const w = _n[t];
    let y, E;
    if (w)
      return t === "$attrs" && et(e.attrs, "get", ""), w(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      E = p.config.globalProperties, Se(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: i } = e;
    return Na(a, t) ? (a[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: i, type: o }
  }, u) {
    let p;
    return !!(r[u] || e !== xe && u[0] !== "$" && Se(e, u) || Na(t, u) || Se(i, u) || Se(n, u) || Se(_n, u) || Se(a.config.globalProperties, u) || (p = o.__cssModules) && p[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Di(e) {
  return ne(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Za = !0;
function Xo(e) {
  const t = ul(e), r = e.proxy, n = e.ctx;
  Za = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: i,
    methods: o,
    watch: u,
    provide: p,
    inject: w,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: I,
    beforeUpdate: j,
    updated: se,
    activated: K,
    deactivated: ue,
    beforeDestroy: le,
    beforeUnmount: z,
    destroyed: M,
    unmounted: V,
    render: ce,
    renderTracked: De,
    renderTriggered: Ne,
    errorCaptured: Be,
    serverPrefetch: Ee,
    // public API
    expose: Me,
    inheritAttrs: nt,
    // assets
    components: dt,
    directives: Ye,
    filters: kt
  } = t;
  if (w && Jo(w, n, null), o)
    for (const ge in o) {
      const pe = o[ge];
      de(pe) && (n[ge] = pe.bind(r));
    }
  if (a) {
    const ge = a.call(r, r);
    Ce(ge) && (e.data = /* @__PURE__ */ nr(ge));
  }
  if (Za = !0, i)
    for (const ge in i) {
      const pe = i[ge], ze = de(pe) ? pe.bind(r, r) : de(pe.get) ? pe.get.bind(r, r) : Yt, _e = !de(pe) && de(pe.set) ? pe.set.bind(r) : Yt, Re = B({
        get: ze,
        set: _e
      });
      Object.defineProperty(n, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (We) => Re.value = We
      });
    }
  if (u)
    for (const ge in u)
      cl(u[ge], n, r, ge);
  if (p) {
    const ge = de(p) ? p.call(r) : p;
    Reflect.ownKeys(ge).forEach((pe) => {
      Po(pe, ge[pe]);
    });
  }
  y && Mi(y, e, "c");
  function Ue(ge, pe) {
    ne(pe) ? pe.forEach((ze) => ge(ze.bind(r))) : pe && ge(pe.bind(r));
  }
  if (Ue(jo, E), Ue(sl, I), Ue(Vo, j), Ue(qo, se), Ue(Fo, K), Ue(Ho, ue), Ue(Ko, Be), Ue(Wo, De), Ue(zo, Ne), Ue(ll, z), Ue(ol, V), Ue(Bo, Ee), ne(Me))
    if (Me.length) {
      const ge = e.exposed || (e.exposed = {});
      Me.forEach((pe) => {
        Object.defineProperty(ge, pe, {
          get: () => r[pe],
          set: (ze) => r[pe] = ze,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Yt && (e.render = ce), nt != null && (e.inheritAttrs = nt), dt && (e.components = dt), Ye && (e.directives = Ye), Ee && al(e);
}
function Jo(e, t, r = Yt) {
  ne(e) && (e = Qa(e));
  for (const n in e) {
    const a = e[n];
    let i;
    Ce(a) ? "default" in a ? i = zn(
      a.from || n,
      a.default,
      !0
    ) : i = zn(a.from || n) : i = zn(a), /* @__PURE__ */ tt(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Mi(e, t, r) {
  Ft(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function cl(e, t, r, n) {
  let a = n.includes(".") ? rl(r, n) : () => r[n];
  if (He(e)) {
    const i = t[e];
    de(i) && Ra(a, i);
  } else if (de(e))
    Ra(a, e.bind(r));
  else if (Ce(e))
    if (ne(e))
      e.forEach((i) => cl(i, t, r, n));
    else {
      const i = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(i) && Ra(a, i, e);
    }
}
function ul(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let p;
  return u ? p = u : !a.length && !r && !n ? p = t : (p = {}, a.length && a.forEach(
    (w) => Zn(p, w, o, !0)
  ), Zn(p, t, o)), Ce(t) && i.set(t, p), p;
}
function Zn(e, t, r, n = !1) {
  const { mixins: a, extends: i } = t;
  i && Zn(e, i, r, !0), a && a.forEach(
    (o) => Zn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Ui,
  props: Fi,
  emits: Fi,
  // objects
  methods: dn,
  computed: dn,
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
  components: dn,
  directives: dn,
  // watch
  watch: ec,
  // provide / inject
  provide: Ui,
  inject: Qo
};
function Ui(e, t) {
  return t ? e ? function() {
    return rt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return dn(Qa(e), Qa(t));
}
function Qa(e) {
  if (ne(e)) {
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
function dn(e, t) {
  return e ? rt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fi(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : rt(
    /* @__PURE__ */ Object.create(null),
    Di(e),
    Di(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = rt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ot(e[n], t[n]);
  return r;
}
function dl() {
  return {
    app: null,
    config: {
      isNativeTag: Ts,
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
    de(n) || (n = rt({}, n)), a != null && !Ce(a) && (a = null);
    const i = dl(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let p = !1;
    const w = i.app = {
      _uid: tc++,
      _component: n,
      _props: a,
      _container: null,
      _context: i,
      _instance: null,
      version: Lc,
      get config() {
        return i.config;
      },
      set config(y) {
      },
      use(y, ...E) {
        return o.has(y) || (y && de(y.install) ? (o.add(y), y.install(w, ...E)) : de(y) && (o.add(y), y(w, ...E))), w;
      },
      mixin(y) {
        return i.mixins.includes(y) || i.mixins.push(y), w;
      },
      component(y, E) {
        return E ? (i.components[y] = E, w) : i.components[y];
      },
      directive(y, E) {
        return E ? (i.directives[y] = E, w) : i.directives[y];
      },
      mount(y, E, I) {
        if (!p) {
          const j = w._ceVNode || lr(n, a);
          return j.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), p = !0, w._container = y, y.__vue_app__ = w, ha(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        p && (Ft(
          u,
          w._instance,
          16
        ), e(null, w._container), delete w._container.__vue_app__);
      },
      provide(y, E) {
        return i.provides[y] = E, w;
      },
      runWithContext(y) {
        const E = zr;
        zr = w;
        try {
          return y();
        } finally {
          zr = E;
        }
      }
    };
    return w;
  };
}
let zr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Dt(t)}Modifiers`] || e[`${Nr(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let a = r;
  const i = t.startsWith("update:"), o = i && nc(n, t.slice(7));
  o && (o.trim && (a = r.map((y) => He(y) ? y.trim() : y)), o.number && (a = a.map(sa)));
  let u, p = n[u = Ca(t)] || // also try camelCase event handler (#2249)
  n[u = Ca(Dt(t))];
  !p && i && (p = n[u = Ca(Nr(t))]), p && Ft(
    p,
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
const ic = /* @__PURE__ */ new WeakMap();
function fl(e, t, r = !1) {
  const n = r ? ic : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const i = e.emits;
  let o = {}, u = !1;
  if (!de(e)) {
    const p = (w) => {
      const y = fl(w, t, !0);
      y && (u = !0, rt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !i && !u ? (Ce(e) && n.set(e, null), null) : (ne(i) ? i.forEach((p) => o[p] = null) : rt(o, i), Ce(e) && n.set(e, o), o);
}
function fa(e, t) {
  return !e || !na(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Nr(t)) || Se(e, t));
}
function Hi(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: a,
    propsOptions: [i],
    slots: o,
    attrs: u,
    emit: p,
    render: w,
    renderCache: y,
    props: E,
    data: I,
    setupState: j,
    ctx: se,
    inheritAttrs: K
  } = e, ue = Xn(e);
  let le, z;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, ce = V;
      le = Kt(
        w.call(
          ce,
          V,
          y,
          E,
          j,
          I,
          se
        )
      ), z = u;
    } else {
      const V = t;
      le = Kt(
        V.length > 1 ? V(
          E,
          { attrs: u, slots: o, emit: p }
        ) : V(
          E,
          null
        )
      ), z = t.props ? u : sc(u);
    }
  } catch (V) {
    Rr.length = 0, ca(V, e, 1), le = lr(dr);
  }
  let M = le;
  if (z && K !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = M;
    V.length && ce & 7 && (i && V.some(aa) && (z = lc(
      z,
      i
    )), M = Gr(M, z, !1, !0));
  }
  if (r.dirs && (M = Gr(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ua(M.type) && nl(M) || M;
    bi(V, r.transition);
  }
  return le = M, Xn(ue), le;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || na(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!aa(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: a, component: i } = e, { props: o, children: u, patchFlag: p } = t, w = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return n ? $i(n, o, w) : !!o;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const I = y[E];
        if (pl(o, n, I) && !fa(w, I))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? $i(n, o, w) : !0 : !!o;
  return !1;
}
function $i(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (pl(t, e, i) && !fa(r, i))
      return !0;
  }
  return !1;
}
function pl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && Ce(n) && Ce(a) ? !gr(n, a) : n !== a;
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
const hl = {}, ml = () => Object.create(hl), bl = (e) => Object.getPrototypeOf(e) === hl;
function uc(e, t, r, n = !1) {
  const a = {}, i = ml();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), yl(e, t, a, i);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  r ? e.props = n ? a : /* @__PURE__ */ _o(a) : e.type.props ? e.props = a : e.props = i, e.attrs = i;
}
function dc(e, t, r, n) {
  const {
    props: a,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ we(a), [p] = e.propsOptions;
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
        if (fa(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (p)
          if (Se(i, I))
            j !== i[I] && (i[I] = j, w = !0);
          else {
            const se = Dt(I);
            a[se] = ei(
              p,
              u,
              se,
              j,
              e,
              !1
            );
          }
        else
          j !== i[I] && (i[I] = j, w = !0);
      }
    }
  } else {
    yl(e, t, a, i) && (w = !0);
    let y;
    for (const E in u)
      (!t || // for camelCase
      !Se(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Nr(E)) === E || !Se(t, y))) && (p ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[E] = ei(
        p,
        u,
        E,
        void 0,
        e,
        !0
      )) : delete a[E]);
    if (i !== u)
      for (const E in i)
        (!t || !Se(t, E)) && (delete i[E], w = !0);
  }
  w && ir(e.attrs, "set", "");
}
function yl(e, t, r, n) {
  const [a, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let p in t) {
      if (hn(p))
        continue;
      const w = t[p];
      let y;
      a && Se(a, y = Dt(p)) ? !i || !i.includes(y) ? r[y] = w : (u || (u = {}))[y] = w : fa(e.emitsOptions, p) || (!(p in n) || w !== n[p]) && (n[p] = w, o = !0);
    }
  if (i) {
    const p = /* @__PURE__ */ we(r), w = u || xe;
    for (let y = 0; y < i.length; y++) {
      const E = i[y];
      r[E] = ei(
        a,
        p,
        E,
        w[E],
        e,
        !Se(w, E)
      );
    }
  }
  return o;
}
function ei(e, t, r, n, a, i) {
  const o = e[r];
  if (o != null) {
    const u = Se(o, "default");
    if (u && n === void 0) {
      const p = o.default;
      if (o.type !== Function && !o.skipFactory && de(p)) {
        const { propsDefaults: w } = a;
        if (r in w)
          n = w[r];
        else {
          const y = kn(a);
          n = w[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        n = p;
      a.ce && a.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Nr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function gl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const i = e.props, o = {}, u = [];
  let p = !1;
  if (!de(e)) {
    const y = (E) => {
      p = !0;
      const [I, j] = gl(E, t, !0);
      rt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!i && !p)
    return Ce(e) && n.set(e, qr), qr;
  if (ne(i))
    for (let y = 0; y < i.length; y++) {
      const E = Dt(i[y]);
      ji(E) && (o[E] = xe);
    }
  else if (i)
    for (const y in i) {
      const E = Dt(y);
      if (ji(E)) {
        const I = i[y], j = o[E] = ne(I) || de(I) ? { type: I } : rt({}, I), se = j.type;
        let K = !1, ue = !0;
        if (ne(se))
          for (let le = 0; le < se.length; ++le) {
            const z = se[le], M = de(z) && z.name;
            if (M === "Boolean") {
              K = !0;
              break;
            } else M === "String" && (ue = !1);
          }
        else
          K = de(se) && se.name === "Boolean";
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
function ji(e) {
  return e[0] !== "$" && !hn(e);
}
const gi = (e) => e === "_" || e === "_ctx" || e === "$stable", _i = (e) => ne(e) ? e.map(Kt) : [Kt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...a) => _i(t(...a)), r);
  return n._c = !1, n;
}, _l = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (gi(a)) continue;
    const i = e[a];
    if (de(i))
      t[a] = pc(a, i, n);
    else if (i != null) {
      const o = _i(i);
      t[a] = () => o;
    }
  }
}, vl = (e, t) => {
  const r = _i(t);
  e.slots.default = () => r;
}, wl = (e, t, r) => {
  for (const n in t)
    (r || !gi(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = ml();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (wl(n, t, r), r && Os(n, "_", a, !0)) : _l(t, n);
  } else t && vl(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let i = !0, o = xe;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? i = !1 : wl(a, t, r) : (i = !t.$stable, _l(t, a)), o = t;
  } else t && (vl(e, t), o = { default: 1 });
  if (i)
    for (const u in a)
      !gi(u) && o[u] == null && delete a[u];
}, bt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = la();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: i,
    createElement: o,
    createText: u,
    createComment: p,
    setText: w,
    setElementText: y,
    parentNode: E,
    nextSibling: I,
    setScopeId: j = Yt,
    insertStaticContent: se
  } = e, K = (m, b, _, R = null, x = null, k = null, D = void 0, U = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !sn(m, b) && (R = gt(m), We(m, x, k, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: A, ref: X, shapeFlag: $ } = b;
    switch (A) {
      case pa:
        ue(m, b, _, R);
        break;
      case dr:
        le(m, b, _, R);
        break;
      case Ia:
        m == null && z(b, _, R, D);
        break;
      case te:
        dt(
          m,
          b,
          _,
          R,
          x,
          k,
          D,
          U,
          L
        );
        break;
      default:
        $ & 1 ? ce(
          m,
          b,
          _,
          R,
          x,
          k,
          D,
          U,
          L
        ) : $ & 6 ? Ye(
          m,
          b,
          _,
          R,
          x,
          k,
          D,
          U,
          L
        ) : ($ & 64 || $ & 128) && A.process(
          m,
          b,
          _,
          R,
          x,
          k,
          D,
          U,
          L,
          ft
        );
    }
    X != null && x ? yn(X, m && m.ref, k, b || m, !b) : X == null && m && m.ref != null && yn(m.ref, null, k, m, !0);
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
      b.el = p(b.children || ""),
      _,
      R
    ) : b.el = m.el;
  }, z = (m, b, _, R) => {
    [m.el, m.anchor] = se(
      m.children,
      b,
      _,
      R,
      m.el,
      m.anchor
    );
  }, M = ({ el: m, anchor: b }, _, R) => {
    let x;
    for (; m && m !== b; )
      x = I(m), n(m, _, R), m = x;
    n(b, _, R);
  }, V = ({ el: m, anchor: b }) => {
    let _;
    for (; m && m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, ce = (m, b, _, R, x, k, D, U, L) => {
    if (b.type === "svg" ? D = "svg" : b.type === "math" && (D = "mathml"), m == null)
      De(
        b,
        _,
        R,
        x,
        k,
        D,
        U,
        L
      );
    else {
      const A = m.el && m.el._isVueCE ? m.el : null;
      try {
        A && A._beginPatch(), Ee(
          m,
          b,
          x,
          k,
          D,
          U,
          L
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, De = (m, b, _, R, x, k, D, U) => {
    let L, A;
    const { props: X, shapeFlag: $, transition: W, dirs: G } = m;
    if (L = m.el = o(
      m.type,
      k,
      X && X.is,
      X
    ), $ & 8 ? y(L, m.children) : $ & 16 && Be(
      m.children,
      L,
      null,
      R,
      x,
      Pa(m, k),
      D,
      U
    ), G && vr(m, null, R, "created"), Ne(L, m, m.scopeId, D, R), X) {
      for (const N in X)
        N !== "value" && !hn(N) && i(L, N, null, X[N], k, R);
      "value" in X && i(L, "value", null, X.value, k), (A = X.onVnodeBeforeMount) && Bt(A, R, m);
    }
    G && vr(m, null, R, "beforeMount");
    const ae = gc(x, W);
    ae && W.beforeEnter(L), n(L, b, _), ((A = X && X.onVnodeMounted) || ae || G) && bt(() => {
      A && Bt(A, R, m), ae && W.enter(L), G && vr(m, null, R, "mounted");
    }, x);
  }, Ne = (m, b, _, R, x) => {
    if (_ && j(m, _), R)
      for (let k = 0; k < R.length; k++)
        j(m, R[k]);
    if (x) {
      let k = x.subTree;
      if (b === k || Tl(k.type) && (k.ssContent === b || k.ssFallback === b)) {
        const D = x.vnode;
        Ne(
          m,
          D,
          D.scopeId,
          D.slotScopeIds,
          x.parent
        );
      }
    }
  }, Be = (m, b, _, R, x, k, D, U, L = 0) => {
    for (let A = L; A < m.length; A++) {
      const X = m[A] = U ? ar(m[A]) : Kt(m[A]);
      K(
        null,
        X,
        b,
        _,
        R,
        x,
        k,
        D,
        U
      );
    }
  }, Ee = (m, b, _, R, x, k, D) => {
    const U = b.el = m.el;
    let { patchFlag: L, dynamicChildren: A, dirs: X } = b;
    L |= m.patchFlag & 16;
    const $ = m.props || xe, W = b.props || xe;
    let G;
    if (_ && wr(_, !1), (G = W.onVnodeBeforeUpdate) && Bt(G, _, b, m), X && vr(b, m, _, "beforeUpdate"), _ && wr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (L = 0, D = !1, A = null), ($.innerHTML && W.innerHTML == null || $.textContent && W.textContent == null) && y(U, ""), A ? Me(
      m.dynamicChildren,
      A,
      U,
      _,
      R,
      Pa(b, x),
      k
    ) : D || pe(
      m,
      b,
      U,
      null,
      _,
      R,
      Pa(b, x),
      k,
      !1
    ), L > 0) {
      if (L & 16)
        nt(U, $, W, _, x);
      else if (L & 2 && $.class !== W.class && i(U, "class", null, W.class, x), L & 4 && i(U, "style", $.style, W.style, x), L & 8) {
        const ae = b.dynamicProps;
        for (let N = 0; N < ae.length; N++) {
          const P = ae[N], H = $[P], ee = W[P];
          (ee !== H || P === "value") && i(U, P, H, ee, x, _);
        }
      }
      L & 1 && m.children !== b.children && y(U, b.children);
    } else !D && A == null && nt(U, $, W, _, x);
    ((G = W.onVnodeUpdated) || X) && bt(() => {
      G && Bt(G, _, b, m), X && vr(b, m, _, "updated");
    }, R);
  }, Me = (m, b, _, R, x, k, D) => {
    for (let U = 0; U < b.length; U++) {
      const L = m[U], A = b[U], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !sn(L, A) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      K(
        L,
        A,
        X,
        null,
        R,
        x,
        k,
        D,
        !0
      );
    }
  }, nt = (m, b, _, R, x) => {
    if (b !== _) {
      if (b !== xe)
        for (const k in b)
          !hn(k) && !(k in _) && i(
            m,
            k,
            b[k],
            null,
            x,
            R
          );
      for (const k in _) {
        if (hn(k)) continue;
        const D = _[k], U = b[k];
        D !== U && k !== "value" && i(m, k, U, D, x, R);
      }
      "value" in _ && i(m, "value", b.value, _.value, x);
    }
  }, dt = (m, b, _, R, x, k, D, U, L) => {
    const A = b.el = m ? m.el : u(""), X = b.anchor = m ? m.anchor : u("");
    let { patchFlag: $, dynamicChildren: W, slotScopeIds: G } = b;
    G && (U = U ? U.concat(G) : G), m == null ? (n(A, _, R), n(X, _, R), Be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      X,
      x,
      k,
      D,
      U,
      L
    )) : $ > 0 && $ & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === W.length ? (Me(
      m.dynamicChildren,
      W,
      _,
      x,
      k,
      D,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || x && b === x.subTree) && Sl(
      m,
      b,
      !0
      /* shallow */
    )) : pe(
      m,
      b,
      _,
      X,
      x,
      k,
      D,
      U,
      L
    );
  }, Ye = (m, b, _, R, x, k, D, U, L) => {
    b.slotScopeIds = U, m == null ? b.shapeFlag & 512 ? x.ctx.activate(
      b,
      _,
      R,
      D,
      L
    ) : kt(
      b,
      _,
      R,
      x,
      k,
      D,
      L
    ) : $e(m, b, L);
  }, kt = (m, b, _, R, x, k, D) => {
    const U = m.component = Ac(
      m,
      R,
      x
    );
    if (yi(m) && (U.ctx.renderer = ft), Rc(U, !1, D), U.asyncDep) {
      if (x && x.registerDep(U, Ue, D), !m.el) {
        const L = U.subTree = lr(dr);
        le(null, L, b, _), m.placeholder = L.el;
      }
    } else
      Ue(
        U,
        m,
        b,
        _,
        x,
        k,
        D
      );
  }, $e = (m, b, _) => {
    const R = b.component = m.component;
    if (oc(m, b, _))
      if (R.asyncDep && !R.asyncResolved) {
        ge(R, b, _);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = m.el, R.vnode = b;
  }, Ue = (m, b, _, R, x, k, D) => {
    const U = () => {
      if (m.isMounted) {
        let { next: $, bu: W, u: G, parent: ae, vnode: N } = m;
        {
          const he = El(m);
          if (he) {
            $ && ($.el = N.el, ge(m, $, D)), he.asyncDep.then(() => {
              bt(() => {
                m.isUnmounted || A();
              }, x);
            });
            return;
          }
        }
        let P = $, H;
        wr(m, !1), $ ? ($.el = N.el, ge(m, $, D)) : $ = N, W && Bn(W), (H = $.props && $.props.onVnodeBeforeUpdate) && Bt(H, ae, $, N), wr(m, !0);
        const ee = Hi(m), oe = m.subTree;
        m.subTree = ee, K(
          oe,
          ee,
          // parent may have changed if it's in a teleport
          E(oe.el),
          // anchor may have changed if it's in a fragment
          gt(oe),
          m,
          x,
          k
        ), $.el = ee.el, P === null && cc(m, ee.el), G && bt(G, x), (H = $.props && $.props.onVnodeUpdated) && bt(
          () => Bt(H, ae, $, N),
          x
        );
      } else {
        let $;
        const { el: W, props: G } = b, { bm: ae, m: N, parent: P, root: H, type: ee } = m, oe = gn(b);
        wr(m, !1), ae && Bn(ae), !oe && ($ = G && G.onVnodeBeforeMount) && Bt($, P, b), wr(m, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            ee,
            m.parent ? m.parent.type : void 0
          );
          const he = m.subTree = Hi(m);
          K(
            null,
            he,
            _,
            R,
            m,
            x,
            k
          ), b.el = he.el;
        }
        if (N && bt(N, x), !oe && ($ = G && G.onVnodeMounted)) {
          const he = b;
          bt(
            () => Bt($, P, he),
            x
          );
        }
        (b.shapeFlag & 256 || P && gn(P.vnode) && P.vnode.shapeFlag & 256) && m.a && bt(m.a, x), m.isMounted = !0, b = _ = R = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Ls(U);
    m.scope.off();
    const A = m.update = L.run.bind(L), X = m.job = L.runIfDirty.bind(L);
    X.i = m, X.id = m.uid, L.scheduler = () => mi(X), wr(m, !0), A();
  }, ge = (m, b, _) => {
    b.component = m;
    const R = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, R, _), mc(m, b.children, _), or(), Pi(m), cr();
  }, pe = (m, b, _, R, x, k, D, U, L = !1) => {
    const A = m && m.children, X = m ? m.shapeFlag : 0, $ = b.children, { patchFlag: W, shapeFlag: G } = b;
    if (W > 0) {
      if (W & 128) {
        _e(
          A,
          $,
          _,
          R,
          x,
          k,
          D,
          U,
          L
        );
        return;
      } else if (W & 256) {
        ze(
          A,
          $,
          _,
          R,
          x,
          k,
          D,
          U,
          L
        );
        return;
      }
    }
    G & 8 ? (X & 16 && je(A, x, k), $ !== A && y(_, $)) : X & 16 ? G & 16 ? _e(
      A,
      $,
      _,
      R,
      x,
      k,
      D,
      U,
      L
    ) : je(A, x, k, !0) : (X & 8 && y(_, ""), G & 16 && Be(
      $,
      _,
      R,
      x,
      k,
      D,
      U,
      L
    ));
  }, ze = (m, b, _, R, x, k, D, U, L) => {
    m = m || qr, b = b || qr;
    const A = m.length, X = b.length, $ = Math.min(A, X);
    let W;
    for (W = 0; W < $; W++) {
      const G = b[W] = L ? ar(b[W]) : Kt(b[W]);
      K(
        m[W],
        G,
        _,
        null,
        x,
        k,
        D,
        U,
        L
      );
    }
    A > X ? je(
      m,
      x,
      k,
      !0,
      !1,
      $
    ) : Be(
      b,
      _,
      R,
      x,
      k,
      D,
      U,
      L,
      $
    );
  }, _e = (m, b, _, R, x, k, D, U, L) => {
    let A = 0;
    const X = b.length;
    let $ = m.length - 1, W = X - 1;
    for (; A <= $ && A <= W; ) {
      const G = m[A], ae = b[A] = L ? ar(b[A]) : Kt(b[A]);
      if (sn(G, ae))
        K(
          G,
          ae,
          _,
          null,
          x,
          k,
          D,
          U,
          L
        );
      else
        break;
      A++;
    }
    for (; A <= $ && A <= W; ) {
      const G = m[$], ae = b[W] = L ? ar(b[W]) : Kt(b[W]);
      if (sn(G, ae))
        K(
          G,
          ae,
          _,
          null,
          x,
          k,
          D,
          U,
          L
        );
      else
        break;
      $--, W--;
    }
    if (A > $) {
      if (A <= W) {
        const G = W + 1, ae = G < X ? b[G].el : R;
        for (; A <= W; )
          K(
            null,
            b[A] = L ? ar(b[A]) : Kt(b[A]),
            _,
            ae,
            x,
            k,
            D,
            U,
            L
          ), A++;
      }
    } else if (A > W)
      for (; A <= $; )
        We(m[A], x, k, !0), A++;
    else {
      const G = A, ae = A, N = /* @__PURE__ */ new Map();
      for (A = ae; A <= W; A++) {
        const re = b[A] = L ? ar(b[A]) : Kt(b[A]);
        re.key != null && N.set(re.key, A);
      }
      let P, H = 0;
      const ee = W - ae + 1;
      let oe = !1, he = 0;
      const fe = new Array(ee);
      for (A = 0; A < ee; A++) fe[A] = 0;
      for (A = G; A <= $; A++) {
        const re = m[A];
        if (H >= ee) {
          We(re, x, k, !0);
          continue;
        }
        let Te;
        if (re.key != null)
          Te = N.get(re.key);
        else
          for (P = ae; P <= W; P++)
            if (fe[P - ae] === 0 && sn(re, b[P])) {
              Te = P;
              break;
            }
        Te === void 0 ? We(re, x, k, !0) : (fe[Te - ae] = A + 1, Te >= he ? he = Te : oe = !0, K(
          re,
          b[Te],
          _,
          null,
          x,
          k,
          D,
          U,
          L
        ), H++);
      }
      const Fe = oe ? _c(fe) : qr;
      for (P = Fe.length - 1, A = ee - 1; A >= 0; A--) {
        const re = ae + A, Te = b[re], Xe = b[re + 1], wt = re + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Xe.el || Cl(Xe)
        ) : R;
        fe[A] === 0 ? K(
          null,
          Te,
          _,
          wt,
          x,
          k,
          D,
          U,
          L
        ) : oe && (P < 0 || A !== Fe[P] ? Re(Te, _, wt, 2) : P--);
      }
    }
  }, Re = (m, b, _, R, x = null) => {
    const { el: k, type: D, transition: U, children: L, shapeFlag: A } = m;
    if (A & 6) {
      Re(m.component.subTree, b, _, R);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, _, R);
      return;
    }
    if (A & 64) {
      D.move(m, b, _, ft);
      return;
    }
    if (D === te) {
      n(k, b, _);
      for (let $ = 0; $ < L.length; $++)
        Re(L[$], b, _, R);
      n(m.anchor, b, _);
      return;
    }
    if (D === Ia) {
      M(m, b, _);
      return;
    }
    if (R !== 2 && A & 1 && U)
      if (R === 0)
        U.persisted && !k[Oa] ? n(k, b, _) : (U.beforeEnter(k), n(k, b, _), bt(() => U.enter(k), x));
      else {
        const { leave: $, delayLeave: W, afterLeave: G } = U, ae = () => {
          m.ctx.isUnmounted ? a(k) : n(k, b, _);
        }, N = () => {
          const P = k._isLeaving || !!k[Oa];
          k._isLeaving && k[Oa](
            !0
            /* cancelled */
          ), U.persisted && !P ? ae() : $(k, () => {
            ae(), G && G();
          });
        };
        W ? W(k, ae, N) : N();
      }
    else
      n(k, b, _);
  }, We = (m, b, _, R = !1, x = !1) => {
    const {
      type: k,
      props: D,
      ref: U,
      children: L,
      dynamicChildren: A,
      shapeFlag: X,
      patchFlag: $,
      dirs: W,
      cacheIndex: G,
      memo: ae
    } = m;
    if ($ === -2 && (x = !1), U != null && (or(), yn(U, null, _, m, !0), cr()), G != null && (b.renderCache[G] = void 0), X & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const N = X & 1 && W, P = !gn(m);
    let H;
    if (P && (H = D && D.onVnodeBeforeUnmount) && Bt(H, b, m), X & 6)
      Jt(m.component, _, R);
    else {
      if (X & 128) {
        m.suspense.unmount(_, R);
        return;
      }
      N && vr(m, null, b, "beforeUnmount"), X & 64 ? m.type.remove(
        m,
        b,
        _,
        ft,
        R
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== te || $ > 0 && $ & 64) ? je(
        A,
        b,
        _,
        !1,
        !0
      ) : (k === te && $ & 384 || !x && X & 16) && je(L, b, _), R && at(m);
    }
    const ee = ae != null && G == null;
    (P && (H = D && D.onVnodeUnmounted) || N || ee) && bt(() => {
      H && Bt(H, b, m), N && vr(m, null, b, "unmounted"), ee && (m.el = null);
    }, _);
  }, at = (m) => {
    const { type: b, el: _, anchor: R, transition: x } = m;
    if (b === te) {
      me(_, R);
      return;
    }
    if (b === Ia) {
      V(m);
      return;
    }
    const k = () => {
      a(_), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (m.shapeFlag & 1 && x && !x.persisted) {
      const { leave: D, delayLeave: U } = x, L = () => D(_, k);
      U ? U(m.el, k, L) : L();
    } else
      k();
  }, me = (m, b) => {
    let _;
    for (; m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, Jt = (m, b, _) => {
    const { bum: R, scope: x, job: k, subTree: D, um: U, m: L, a: A } = m;
    Vi(L), Vi(A), R && Bn(R), x.stop(), k && (k.flags |= 8, We(D, m, b, _)), U && bt(U, b), bt(() => {
      m.isUnmounted = !0;
    }, b);
  }, je = (m, b, _, R = !1, x = !1, k = 0) => {
    for (let D = k; D < m.length; D++)
      We(m[D], b, _, R, x);
  }, gt = (m) => {
    if (m.shapeFlag & 6)
      return gt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), _ = b && b[Mo];
    return _ ? I(_) : b;
  };
  let _t = !1;
  const vt = (m, b, _) => {
    let R;
    m == null ? b._vnode && (We(b._vnode, null, null, !0), R = b._vnode.component) : K(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = m, _t || (_t = !0, Pi(R), Zs(), _t = !1);
  }, ft = {
    p: K,
    um: We,
    m: Re,
    r: at,
    mt: kt,
    mc: Be,
    pc: pe,
    pbc: Me,
    n: gt,
    o: e
  };
  return {
    render: vt,
    hydrate: void 0,
    createApp: rc(vt)
  };
}
function Pa({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function wr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sl(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (ne(n) && ne(a))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let u = a[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[i] = ar(a[i]), u.el = o.el), !r && u.patchFlag !== -2 && Sl(o, u)), u.type === pa && (u.patchFlag === -1 && (u = a[i] = ar(u)), u.el = o.el), u.type === dr && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, a, i, o, u;
  const p = e.length;
  for (n = 0; n < p; n++) {
    const w = e[n];
    if (w !== 0) {
      if (a = r[r.length - 1], e[a] < w) {
        t[n] = a, r.push(n);
        continue;
      }
      for (i = 0, o = r.length - 1; i < o; )
        u = i + o >> 1, e[r[u]] < w ? i = u + 1 : o = u;
      w < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n);
    }
  }
  for (i = r.length, o = r[i - 1]; i-- > 0; )
    r[i] = o, o = t[o];
  return r;
}
function El(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : El(t);
}
function Vi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Cl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Cl(t.subTree) : null;
}
const Tl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), pa = /* @__PURE__ */ Symbol.for("v-txt"), dr = /* @__PURE__ */ Symbol.for("v-cmt"), Ia = /* @__PURE__ */ Symbol.for("v-stc"), Rr = [];
let At = null;
function C(e = !1) {
  Rr.push(At = e ? null : []);
}
function xl() {
  Rr.pop(), At = Rr[Rr.length - 1] || null;
}
let En = 1;
function qi(e, t = !1) {
  En += e, e < 0 && At && t && (At.hasOnce = !0);
}
function Al(e) {
  return e.dynamicChildren = En > 0 ? At || qr : null, xl(), En > 0 && At && At.push(e), e;
}
function T(e, t, r, n, a, i) {
  return Al(
    l(
      e,
      t,
      r,
      n,
      a,
      i,
      !0
    )
  );
}
function wc(e, t, r, n, a) {
  return Al(
    lr(
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
function sn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rl = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? He(e) || /* @__PURE__ */ tt(e) || de(e) ? { i: Rt, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, a = null, i = e === te ? 0 : 1, o = !1, u = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rl(t),
    ref: t && Wn(t),
    scopeId: el,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return u ? (Qn(p, r), i & 128 && e.normalize(p)) : r && (p.shapeFlag |= He(r) ? 8 : 16), En > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && At.push(p), p;
}
const lr = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, i = !1) {
  if ((!e || e === Go) && (e = dr), kl(e)) {
    const u = Gr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Qn(u, r), En > 0 && !i && At && (u.shapeFlag & 6 ? At[At.indexOf(e)] = u : At.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: p } = t;
    u && !He(u) && (t.class = Lt(u)), Ce(p) && (/* @__PURE__ */ hi(p) && !ne(p) && (p = rt({}, p)), t.style = li(p));
  }
  const o = He(e) ? 1 : Tl(e) ? 128 : ua(e) ? 64 : Ce(e) ? 4 : de(e) ? 2 : 0;
  return l(
    e,
    t,
    r,
    n,
    a,
    o,
    i,
    !0
  );
}
function Ec(e) {
  return e ? /* @__PURE__ */ hi(e) || bl(e) ? rt({}, e) : e : null;
}
function Gr(e, t, r = !1, n = !1) {
  const { props: a, ref: i, patchFlag: o, children: u, transition: p } = e, w = t ? Cc(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: w,
    key: w && Rl(w),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? ne(i) ? i.concat(Wn(t)) : [i, Wn(t)] : Wn(t)
    ) : i,
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
    patchFlag: t && e.type !== te ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Gr(e.ssContent),
    ssFallback: e.ssFallback && Gr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && n && bi(
    y,
    p.clone(y)
  ), y;
}
function be(e = " ", t = 0) {
  return lr(pa, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (C(), wc(dr, null, e)) : lr(dr, null, e);
}
function Kt(e) {
  return e == null || typeof e == "boolean" ? lr(dr) : ne(e) ? lr(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kl(e) ? ar(e) : lr(pa, null, String(e));
}
function ar(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gr(e);
}
function Qn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Qn(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !bl(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      Qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [be(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Lt([t.class, n.class]));
      else if (a === "style")
        t.style = li([t.style, n.style]);
      else if (na(a)) {
        const i = t[a], o = n[a];
        o && i !== o && !(ne(i) && i.includes(o)) ? t[a] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !aa(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Bt(e, t, r, n = null) {
  Ft(e, t, 7, [
    r,
    n
  ]);
}
const Tc = dl();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || Tc, i = {
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
    propsOptions: gl(n, a),
    emitsOptions: fl(n, a),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ac.bind(null, i), e.ce && e.ce(i), i;
}
let ut = null;
const kc = () => ut || Rt;
let ea, Cn;
{
  const e = la(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (i) => {
      a.length > 1 ? a.forEach((o) => o(i)) : a[0](i);
    };
  };
  ea = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ut = r
  ), Cn = t(
    "__VUE_SSR_SETTERS__",
    (r) => Tn = r
  );
}
const kn = (e) => {
  const t = ut;
  return ea(e), e.scope.on(), () => {
    e.scope.off(), ea(t);
  };
}, Bi = () => {
  ut && ut.scope.off(), ea(null);
};
function Ol(e) {
  return e.vnode.shapeFlag & 4;
}
let Tn = !1;
function Rc(e, t = !1, r = !1) {
  t && Cn(t);
  const { props: n, children: a } = e.vnode, i = Ol(e);
  uc(e, n, i, t), hc(e, a, r || t);
  const o = i ? Oc(e, t) : void 0;
  return t && Cn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    or();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, i = kn(e), o = An(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = xs(o);
    if (cr(), i(), (u || e.sp) && !gn(e) && al(e), u) {
      if (o.then(Bi, Bi), t)
        return o.then((p) => {
          Cn(!0);
          try {
            zi(e, p, t);
          } finally {
            Cn(!1);
          }
        }).catch((p) => {
          ca(p, e, 0);
        });
      e.asyncDep = o;
    } else
      zi(e, o);
  } else
    Nl(e);
}
function zi(e, t, r) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Gs(t)), Nl(e);
}
function Nl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Yt);
  {
    const a = kn(e);
    or();
    try {
      Xo(e);
    } finally {
      cr(), a();
    }
  }
}
const Nc = {
  get(e, t) {
    return et(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ha(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gs(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in _n)
        return _n[r](e);
    },
    has(t, r) {
      return r in t || r in _n;
    }
  })) : e.proxy;
}
function Ic(e) {
  return de(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ To(e, t, Tn), Lc = "3.5.42";
let ti;
const Wi = typeof window < "u" && window.trustedTypes;
if (Wi)
  try {
    ti = /* @__PURE__ */ Wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Pl = ti ? (e) => ti.createHTML(e) : (e) => e, Dc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", rr = typeof document < "u" ? document : null, Ki = rr && /* @__PURE__ */ rr.createElement("template"), Uc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? rr.createElementNS(Dc, e) : t === "mathml" ? rr.createElementNS(Mc, e) : r ? rr.createElement(e, { is: r }) : rr.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => rr.createTextNode(e),
  createComment: (e) => rr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => rr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, a, i) {
    const o = r ? r.previousSibling : t.lastChild;
    if (a && (a === i || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), r), !(a === i || !(a = a.nextSibling)); )
        ;
    else {
      Ki.innerHTML = Pl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Ki.content;
      if (n === "svg" || n === "mathml") {
        const p = u.firstChild;
        for (; p.firstChild; )
          u.appendChild(p.firstChild);
        u.removeChild(p);
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
const Gi = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, a = He(r);
  let i = !1;
  if (r && !a) {
    if (t)
      if (He(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && fn(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && fn(n, o, "");
    for (const o in r) {
      o === "display" && (i = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !He(t) && t ? t[o] : void 0,
        u
      ) || fn(n, o, u) : fn(n, o, "");
    }
  } else if (a) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, i = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = i ? n.display : "", e[$c] && (n.display = "none"));
}
const $n = /\s*!important$/;
function fn(e, t, r) {
  if (ne(r))
    r.forEach((n) => fn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    $n.test(r) ? e.setProperty(t, r.replace($n, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    $n.test(r) ? e.setProperty(
      Nr(n),
      r.replace($n, ""),
      "important"
    ) : e[n] = r;
  }
}
const Yi = ["Webkit", "Moz", "ms"], La = {};
function Bc(e, t) {
  const r = La[t];
  if (r)
    return r;
  let n = Dt(t);
  if (n !== "filter" && n in e)
    return La[t] = n;
  n = Rs(n);
  for (let a = 0; a < Yi.length; a++) {
    const i = Yi[a] + n;
    if (i in e)
      return La[t] = i;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && He(n) && r === n;
}
const Xi = "http://www.w3.org/1999/xlink";
function Ji(e, t, r, n, a, i = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Xi, t.slice(6, t.length)) : e.setAttributeNS(Xi, t, r) : r == null || i && !Ns(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Xt(r) ? String(r) : r
  );
}
function Zi(e, t, r, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Pl(r) : r);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (u !== p || !("_value" in e)) && (e.value = p), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const u = typeof e[t];
    u === "boolean" ? r = Ns(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Tr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Qi = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, a = null) {
  const i = e[Qi] || (e[Qi] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [u, p] = Xc(t);
    if (n) {
      const w = i[t] = Qc(
        n,
        a
      );
      Tr(e, u, w, p);
    } else o && (Wc(e, u, o, p), i[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Nr(e.slice(2)), t];
}
let Da = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => Da || (Jc.then(() => Da = 0), Da = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const a = r.value;
    if (ne(a)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = a.slice(), u = [n];
      for (let p = 0; p < o.length && !n._stopped; p++) {
        const w = o[p];
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
const es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, a, i) => {
  const o = a === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? qc(e, r, n) : na(t) ? aa(t) || Kc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Zi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ji(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !He(n))) ? Zi(e, Dt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ji(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && es(t) && de(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return es(t) && He(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Dt(t);
  return Array.isArray(r) ? r.some((a) => Dt(a) === n) : Object.keys(r).some((a) => Dt(a) === n);
}
const ta = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => Bn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function ts(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xr = /* @__PURE__ */ Symbol("_assign"), jn = /* @__PURE__ */ Symbol("_initialValue");
function Ma(e, t, r) {
  return t && (e = e.trim()), r && (e = sa(e)), e;
}
const rs = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[jn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[jn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[xr] = ta(a);
    const i = n || a.props && a.props.type === "number";
    Tr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[xr](Ma(e.value, r, i));
    }), (r || i) && Tr(e, "change", () => {
      e.value = Ma(e.value, r, i);
    }), t || (Tr(e, "compositionstart", nu), Tr(e, "compositionend", ts), Tr(e, "change", ts));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", i = e[jn];
    delete e[jn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[xr](Ma(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: i } }, o) {
    if (e[xr] = ta(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? sa(e.value) : e.value, p = t ?? "";
    if (u === p)
      return;
    const w = e.getRootNode();
    (w instanceof Document || w instanceof ShadowRoot) && w.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === p) || (e.value = p);
  }
}, Ct = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Tr(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (p) => p.selected).map(
        (p) => r ? sa(ra(p)) : ra(p)
      ), i = e.multiple, o = i ? Or(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        i,
        i ? ne(o) ? a.slice() : a : o
      ];
      try {
        e[xr](o);
      } finally {
        Xs(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[xr] = ta(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ns(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[xr] = ta(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && ns(e, t);
  }
};
function au(e, t, r) {
  if (!r || ne(e)) return gr(e, t);
  if (Or(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function ns(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Or(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const o = e.options[a], u = ra(o);
      if (r)
        if (n) {
          const p = typeof u;
          p === "string" || p === "number" ? o.selected = t.some((w) => String(w) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (gr(ra(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ra(e) {
  return "_value" in e ? e._value : e.value;
}
const iu = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => iu.some((r) => e[`${r}Key`] && !t.includes(r))
}, Vn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((a, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const u = su[t[o]];
      if (u && u(a, t)) return;
    }
    return e(a, ...i);
  }));
}, lu = /* @__PURE__ */ rt({ patchProp: eu }, Uc);
let as;
function ou() {
  return as || (as = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const a = du(n);
    if (!a) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
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
  return He(e) ? document.querySelector(e) : e;
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
    const i = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function is(e, t) {
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
    var n, a, i, o, u = [], p = !0, w = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(p = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); p = !0) ;
    } catch (y) {
      w = !0, a = y;
    } finally {
      try {
        if (!p && r.return != null && (o = r.return(), Object(o) !== o)) return;
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
    if (typeof e == "string") return is(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? is(e, t) : void 0;
  }
}
const Il = Object.entries, ss = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let qe = Object.freeze, Ge = Object.seal, Vr = Object.create, Ll = typeof Reflect < "u" && Reflect, ri = Ll.apply, ni = Ll.construct;
qe || (qe = function(t) {
  return t;
});
Ge || (Ge = function(t) {
  return t;
});
ri || (ri = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  return t.apply(r, a);
});
ni || (ni = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Cr = Ve(Array.prototype.forEach), wu = Ve(Array.prototype.lastIndexOf), ls = Ve(Array.prototype.pop), ln = Ve(Array.prototype.push), Su = Ve(Array.prototype.splice), Wr = Array.isArray, pn = Ve(String.prototype.toLowerCase), Ua = Ve(String.prototype.toString), os = Ve(String.prototype.match), on = Ve(String.prototype.replace), cs = Ve(String.prototype.indexOf), Eu = Ve(String.prototype.trim), Cu = Ve(Number.prototype.toString), Tu = Ve(Boolean.prototype.toString), us = typeof BigInt > "u" ? null : Ve(BigInt.prototype.toString), ds = typeof Symbol > "u" ? null : Ve(Symbol.prototype.toString), yt = Ve(Object.prototype.hasOwnProperty), cn = Ve(Object.prototype.toString), Qe = Ve(RegExp.prototype.test), Sr = xu(TypeError);
function Ve(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return ri(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ni(e, r);
  };
}
function ye(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pn;
  if (ss && ss(e, null), !Wr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const i = r(a);
      i !== a && (gu(t) || (t[n] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    yt(e, t) || (e[t] = null);
  return e;
}
function xt(e) {
  const t = Vr(null);
  for (const n of Il(e)) {
    var r = bu(n, 2);
    const a = r[0], i = r[1];
    yt(e, a) && (Wr(i) ? t[a] = Au(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = xt(i) : t[a] = i);
  }
  return t;
}
function ku(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Cu(e);
    case "boolean":
      return Tu(e);
    case "bigint":
      return us ? us(e) : "0";
    case "symbol":
      return ds ? ds(e) : "Symbol()";
    case "undefined":
      return cn(e);
    case "function":
    case "object": {
      if (e === null)
        return cn(e);
      const t = e, r = It(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : cn(n);
      }
      return cn(e);
    }
    default:
      return cn(e);
  }
}
function It(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return Ve(n.get);
      if (typeof n.value == "function")
        return Ve(n.value);
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
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const fs = qe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Fa = qe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ha = qe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = qe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $a = qe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = qe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ps = qe(["#text"]), hs = qe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ja = qe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ms = qe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), qn = qe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ge(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ge(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ge(/\${[\w\W]*/g), Du = Ge(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Ge(/^aria-[\-\w]+$/), bs = Ge(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ge(/^(?:\w+script|data):/i), Fu = Ge(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ge(/^html$/i), $u = Ge(/^[a-z][.\w]*(-[.\w]+)+$/i), ys = Ge(/<[/\w!]/g), gs = Ge(/<[/\w]/g), ju = Ge(/<\/no(script|embed|frames)/i), Vu = Ge(/\/>/i), Tt = {
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
}, Dl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = qe(ye({}, Dl)), Bu = (function() {
  const e = {};
  return Cr(Dl, (t) => {
    e[t] = Ge(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), qe(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const i = "dompurify" + (n ? "#" + n : "");
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
}, _s = function() {
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
}, mr = function(t, r, n, a) {
  return yt(t, r) && Wr(t[r]) ? ye(a.base ? xt(a.base) : {}, t[r], a.transform) : n;
}, Va = function(t, r, n) {
  const a = yt(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? xt(a) : n();
};
function Ml() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ml(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Tt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, u = e.Element, p = e.NodeFilter, w = e.NamedNodeMap;
  w === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, I = u.prototype, j = It(I, "cloneNode"), se = It(I, "remove"), K = It(I, "nextSibling"), ue = It(I, "childNodes"), le = It(I, "parentNode"), z = It(I, "shadowRoot"), M = It(I, "attributes"), V = o && o.prototype ? It(o.prototype, "nodeType") : null, ce = o && o.prototype ? It(o.prototype, "nodeName") : null, De = o && o.prototype ? It(o.prototype, "ownerDocument") : null, Ne = function(d) {
    return V ? V(d) : d.nodeType;
  }, Be = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof i == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Me = "", nt, dt = !1, Ye = 0;
  const kt = function() {
    if (Ye > 0)
      throw Sr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $e = function(d) {
    kt(), Ye++;
    try {
      return Ee.createHTML(d);
    } finally {
      Ye--;
    }
  }, Ue = function(d) {
    kt(), Ye++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Ye--;
    }
  }, ge = function() {
    return dt || (nt = Wu(E, a), dt = !0), nt;
  }, pe = r, ze = pe.implementation, _e = pe.createNodeIterator, Re = pe.createDocumentFragment, We = pe.getElementsByTagName, at = n.importNode;
  let me = _s();
  t.isSupported = typeof Il == "function" && typeof le == "function" && ze && ze.createHTMLDocument !== void 0;
  const Jt = Pu, je = Iu, gt = Lu, _t = Du, vt = Mu, ft = Uu, Nt = Fu, m = $u;
  let b = bs, _ = null;
  const R = ye({}, [...fs, ...Fa, ...Ha, ...$a, ...ps]);
  let x = null;
  const k = ye({}, [...hs, ...ja, ...ms, ...qn]);
  let D = Object.seal(Vr(null, {
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
  const A = Object.seal(Vr(null, {
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
  let X = !0, $ = !0, W = !1, G = !0, ae = !1, N = !0, P = !1, H = !1, ee = null, oe = null, he = !1, fe = !1, Fe = !1, re = !1, Te = !0, Xe = !1;
  const wt = "user-content-";
  let Zt = !0, it = !1, St = {}, Et = null;
  const Ht = ye({}, [
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
  let $t = null;
  const Pt = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ke = null;
  const pr = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jt = "http://www.w3.org/1998/Math/MathML", Qt = "http://www.w3.org/2000/svg", Ze = "http://www.w3.org/1999/xhtml";
  let hr = Ze, Yr = !1, Vt = null;
  const Rn = ye({}, [jt, Qt, Ze], Ua), On = qe(["mi", "mo", "mn", "ms", "mtext"]);
  let Pr = ye({}, On);
  const Nn = qe(["annotation-xml"]);
  let Ir = ye({}, Nn);
  const Pn = ye({}, ["title", "style", "font", "a", "script"]);
  let _r = null;
  const Xr = ["application/xhtml+xml", "text/html"], ma = "text/html";
  let Pe = null, qt = null;
  const Jr = r.createElement("form"), In = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Zr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (qt && qt === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = xt(d), _r = // eslint-disable-next-line unicorn/prefer-includes
    Xr.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? ma : d.PARSER_MEDIA_TYPE, Pe = _r === "application/xhtml+xml" ? Ua : pn, _ = mr(d, "ALLOWED_TAGS", R, {
      transform: Pe
    }), x = mr(d, "ALLOWED_ATTR", k, {
      transform: Pe
    }), Vt = mr(d, "ALLOWED_NAMESPACES", Rn, {
      transform: Ua
    }), Ke = mr(d, "ADD_URI_SAFE_ATTR", pr, {
      transform: Pe,
      base: pr
    }), $t = mr(d, "ADD_DATA_URI_TAGS", Pt, {
      transform: Pe,
      base: Pt
    }), Et = mr(d, "FORBID_CONTENTS", Ht, {
      transform: Pe
    }), U = mr(d, "FORBID_TAGS", xt({}), {
      transform: Pe
    }), L = mr(d, "FORBID_ATTR", xt({}), {
      transform: Pe
    }), St = yt(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? xt(d.USE_PROFILES) : d.USE_PROFILES : !1, X = d.ALLOW_ARIA_ATTR !== !1, $ = d.ALLOW_DATA_ATTR !== !1, W = d.ALLOW_UNKNOWN_PROTOCOLS || !1, G = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = d.SAFE_FOR_TEMPLATES || !1, N = d.SAFE_FOR_XML !== !1, P = d.WHOLE_DOCUMENT || !1, fe = d.RETURN_DOM || !1, Fe = d.RETURN_DOM_FRAGMENT || !1, re = d.RETURN_TRUSTED_TYPE || !1, he = d.FORCE_BODY || !1, Te = d.SANITIZE_DOM !== !1, Xe = d.SANITIZE_NAMED_PROPS || !1, Zt = d.KEEP_CONTENT !== !1, it = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : bs, hr = typeof d.NAMESPACE == "string" ? d.NAMESPACE : Ze, Pr = Va(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ye({}, On)
      // Default built-in map
    ), Ir = Va(
      d,
      "HTML_INTEGRATION_POINTS",
      () => ye({}, Nn)
      // Default built-in map
    );
    const g = Va(d, "CUSTOM_ELEMENT_HANDLING", () => Vr(null));
    if (D = Vr(null), yt(g, "tagNameCheck") && In(g.tagNameCheck) && (D.tagNameCheck = g.tagNameCheck), yt(g, "attributeNameCheck") && In(g.attributeNameCheck) && (D.attributeNameCheck = g.attributeNameCheck), yt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ge(D), ae && ($ = !1), Fe && (fe = !0), St && (_ = ye({}, ps), x = Vr(null), St.html === !0 && (ye(_, fs), ye(x, hs)), St.svg === !0 && (ye(_, Fa), ye(x, ja), ye(x, qn)), St.svgFilters === !0 && (ye(_, Ha), ye(x, ja), ye(x, qn)), St.mathMl === !0 && (ye(_, $a), ye(x, ms), ye(x, qn))), A.tagCheck = null, A.attributeCheck = null, yt(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? A.tagCheck = d.ADD_TAGS : Wr(d.ADD_TAGS) && (_ === R && (_ = xt(_)), ye(_, d.ADD_TAGS, Pe))), yt(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? A.attributeCheck = d.ADD_ATTR : Wr(d.ADD_ATTR) && (x === k && (x = xt(x)), ye(x, d.ADD_ATTR, Pe))), yt(d, "ADD_FORBID_CONTENTS") && Wr(d.ADD_FORBID_CONTENTS) && (Et === Ht && (Et = xt(Et)), ye(Et, d.ADD_FORBID_CONTENTS, Pe)), Zt && (_["#text"] = !0), P && ye(_, ["html", "head", "body"]), _.table && (ye(_, ["tbody"]), delete U.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Sr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Sr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        Me = $e("");
      } catch (q) {
        throw Ee = O, q;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Me = "") : (Ee === void 0 && (Ee = ge()), Ee && typeof Me == "string" && (Me = $e("")));
    qe && qe(d), qt = d;
  }, Qr = ye({}, [...Fa, ...Ha, ...Ou]), en = ye({}, [...$a, ...Nu]), ba = function(d, g, O) {
    return g.namespaceURI === Ze ? d === "svg" : g.namespaceURI === jt ? d === "svg" && (O === "annotation-xml" || Pr[O]) : !!Qr[d];
  }, ya = function(d, g, O) {
    return g.namespaceURI === Ze ? d === "math" : g.namespaceURI === Qt ? d === "math" && Ir[O] : !!en[d];
  }, ga = function(d, g, O) {
    return g.namespaceURI === Qt && !Ir[O] || g.namespaceURI === jt && !Pr[O] ? !1 : !en[d] && (Pn[d] || !Qr[d]);
  }, tn = function(d) {
    let g = le(d);
    (!g || !g.tagName) && (g = {
      namespaceURI: hr,
      tagName: "template"
    });
    const O = pn(d.tagName), q = pn(g.tagName);
    return Vt[d.namespaceURI] ? d.namespaceURI === Qt ? ba(O, g, q) : d.namespaceURI === jt ? ya(O, g, q) : d.namespaceURI === Ze ? ga(O, g, q) : !!(_r === "application/xhtml+xml" && Vt[d.namespaceURI]) : !1;
  }, pt = function(d) {
    ln(t.removed, {
      element: d
    });
    try {
      le(d).removeChild(d);
    } catch {
      if (se(d), !le(d))
        throw Sr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ln = function(d, g, O) {
    try {
      d.removeAttributeNode(g);
    } catch {
      try {
        d.removeAttribute(O);
      } catch {
      }
    }
  }, Lr = function(d) {
    Dr(d);
    const g = ue(d);
    if (g) {
      const q = [];
      Cr(g, (Q) => {
        ln(q, Q);
      }), Cr(q, (Q) => {
        try {
          se(Q);
        } catch {
        }
      });
    }
    const O = M(d);
    if (O)
      for (let q = O.length - 1; q >= 0; --q) {
        const Q = O[q], ie = Q && Q.name;
        typeof ie == "string" && Ln(d, Q, ie);
      }
  }, er = function(d, g, O) {
    if (!O)
      try {
        O = g.getAttributeNode(d);
      } catch {
        O = null;
      }
    ln(t.removed, {
      attribute: O || null,
      from: g
    });
    try {
      O ? g.removeAttributeNode(O) : g.removeAttribute(d);
    } catch {
      try {
        g.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (fe || Fe)
        try {
          pt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(d, "");
        } catch {
        }
  }, _a = function(d) {
    const g = M(d);
    if (g)
      for (let O = g.length - 1; O >= 0; --O) {
        const q = g[O], Q = q && q.name;
        typeof Q != "string" || x[Pe(Q)] || Ln(d, q, Q);
      }
  }, Dr = function(d) {
    const g = [d];
    for (; g.length > 0; ) {
      const O = g.pop();
      Ne(O) === Tt.element && _a(O);
      const Q = ue(O);
      if (Q)
        for (let ie = Q.length - 1; ie >= 0; --ie)
          g.push(Q[ie]);
    }
  }, Dn = function(d, g) {
    return N ? d === "patchsrc" ? !0 : d === "for" && g !== "label" && g !== "output" : !1;
  }, va = function(d) {
    if (!N)
      return;
    const g = [d];
    for (; g.length > 0; ) {
      const O = g.pop(), q = Ne(O);
      if (q === Tt.processingInstruction || q === Tt.comment && Qe(gs, O.data)) {
        try {
          se(O);
        } catch {
        }
        continue;
      }
      if (q === Tt.element) {
        const ie = O, Ae = Pe(Be(O));
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Dn("for", Ae) && ie.removeAttribute("for");
        } catch {
        }
      }
      const Q = ue(O);
      if (Q)
        for (let ie = Q.length - 1; ie >= 0; --ie)
          g.push(Q[ie]);
    }
  }, rn = function(d) {
    let g = null, O = null;
    if (he)
      d = "<remove></remove>" + d;
    else {
      const ie = os(d, /^[\r\n\t ]+/);
      O = ie && ie[0];
    }
    _r === "application/xhtml+xml" && hr === Ze && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const q = Ee ? $e(d) : d;
    if (hr === Ze)
      try {
        g = new y().parseFromString(q, _r);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = ze.createDocument(hr, "template", null);
      try {
        g.documentElement.innerHTML = Yr ? Me : q;
      } catch {
      }
    }
    const Q = g.body || g.documentElement;
    return d && O && Q.insertBefore(r.createTextNode(O), Q.childNodes[0] || null), hr === Ze ? We.call(g, P ? "html" : "body")[0] : P ? g.documentElement : Q;
  }, nn = function(d) {
    const g = De ? De(d) : d.ownerDocument;
    return _e.call(
      g || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, S = function(d) {
    return d = on(d, Jt, " "), d = on(d, je, " "), d = on(d, gt, " "), d;
  }, v = function(d) {
    var g;
    d.normalize();
    const O = De ? De(d) : d.ownerDocument, q = _e.call(
      O || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Q = q.nextNode();
    for (; Q; )
      Q.data = S(Q.data), Q = q.nextNode();
    const ie = (g = d.querySelectorAll) === null || g === void 0 ? void 0 : g.call(d, "template");
    ie && Cr(ie, (Ae) => {
      J(Ae.content) && v(Ae.content);
    });
  }, h = function(d) {
    const g = ce ? ce(d) : null;
    return typeof g != "string" || Pe(g) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== M(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, J = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === Tt.documentFragment;
    } catch {
      return !1;
    }
  }, Oe = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function Ie(F, d, g) {
    F.length !== 0 && Cr(F, (O) => {
      O.call(t, d, g, qt);
    });
  }
  const Mr = function(d, g) {
    return !!(N && d.hasChildNodes() && !Oe(d.firstElementChild) && Qe(ys, d.textContent) && Qe(ys, d.innerHTML) || N && d.namespaceURI === Ze && qu[g] && (Oe(d.firstElementChild) || typeof d.textContent == "string" && Qe(Bu[g], d.textContent)) || d.nodeType === Tt.processingInstruction || N && d.nodeType === Tt.comment && Qe(gs, d.data));
  }, Ur = function(d, g) {
    if (d instanceof RegExp)
      return Qe(d, g);
    if (d instanceof Function) {
      for (var O = arguments.length, q = new Array(O > 2 ? O - 2 : 0), Q = 2; Q < O; Q++)
        q[Q - 2] = arguments[Q];
      return !!d(g, ...q);
    }
    return !1;
  }, wa = function(d, g, O) {
    if (!U[g] && Ci(g) && Ur(D.tagNameCheck, g))
      return !1;
    if (Zt && !Et[g]) {
      const q = le(d), Q = ue(d);
      if (Q && q) {
        const ie = Q.length;
        for (let Ae = ie - 1; Ae >= 0; --Ae) {
          const Le = d === O ? j(Q[Ae], !0) : Q[Ae];
          q.insertBefore(Le, K(d));
        }
      }
    }
    return pt(d), !0;
  }, vi = function(d, g, O, q) {
    return d.length === 0 ? g : g === O || g === q ? xt(g) : g;
  }, wi = function(d, g) {
    return d === g || le(d) !== null ? !1 : (it && Dr(d), !0);
  }, Si = function(d, g) {
    if (Ie(me.beforeSanitizeElements, d, null), wi(d, g))
      return !0;
    if (h(d))
      return pt(d), !0;
    const O = Pe(Be(d));
    if (_ = vi(me.uponSanitizeElement, _, R, ee), Ie(me.uponSanitizeElement, d, {
      tagName: O,
      allowedTags: _
    }), wi(d, g))
      return !0;
    if (Mr(d, O))
      return pt(d), !0;
    if (U[O] || !(A.tagCheck instanceof Function && A.tagCheck(O)) && !_[O]) {
      const Q = wa(d, O, g);
      return Q === !1 && Ie(me.afterSanitizeElements, d, null), Q;
    }
    if (Ne(d) === Tt.element && !tn(d) || (O === "noscript" || O === "noembed" || O === "noframes") && Qe(ju, d.innerHTML))
      return pt(d), !0;
    if (ae && d.nodeType === Tt.text) {
      const Q = S(d.textContent);
      d.textContent !== Q && (ln(t.removed, {
        element: d.cloneNode()
      }), d.textContent = Q);
    }
    return Ie(me.afterSanitizeElements, d, null), !1;
  }, Ei = function(d, g, O) {
    if (L[g] || Dn(g, d) || Te && (g === "id" || g === "name") && (O in r || O in Jr))
      return !1;
    const q = x[g] || A.attributeCheck instanceof Function && A.attributeCheck(g, d);
    return $ && Qe(_t, g) || X && Qe(vt, g) ? !0 : q ? Ke[g] || Qe(b, on(O, Nt, "")) || (g === "src" || g === "xlink:href" || g === "href") && d !== "script" && cs(O, "data:") === 0 && $t[d] || W && !Qe(ft, on(O, Nt, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ci(d) && Ur(D.tagNameCheck, d) && Ur(D.attributeNameCheck, g, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && D.allowCustomizedBuiltInElements && Ur(D.tagNameCheck, O)
    );
  }, Fl = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ci = function(d) {
    return !Fl[pn(d)] && Qe(m, d);
  }, Hl = function(d, g, O, q) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !O)
      switch (E.getAttributeType(d, g)) {
        case "TrustedHTML":
          return $e(q);
        case "TrustedScriptURL":
          return Ue(q);
      }
    return q;
  }, $l = function(d, g, O, q) {
    try {
      O ? d.setAttributeNS(O, g, q) : d.setAttribute(g, q), h(d) ? pt(d) : ls(t.removed);
    } catch {
      er(g, d);
    }
  }, Ti = function(d) {
    Ie(me.beforeSanitizeAttributes, d, null);
    const g = d.attributes;
    if (!g || h(d))
      return;
    x = vi(me.uponSanitizeAttribute, x, k, oe);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let q = g.length;
    const Q = Pe(d.nodeName);
    for (; q--; ) {
      const ie = g[q], Ae = ie.name, Le = ie.namespaceURI, ht = ie.value, mt = Pe(Ae), Ea = ht;
      let st = Ae === "value" ? Ea : Eu(Ea);
      if (O.attrName = mt, O.attrValue = st, O.keepAttr = !0, O.forceKeepAttr = void 0, Ie(me.uponSanitizeAttribute, d, O), st = O.attrValue, Xe && (mt === "id" || mt === "name") && cs(st, wt) !== 0 && (er(Ae, d, ie), st = wt + st), N && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        er(Ae, d, ie);
        continue;
      }
      if (mt === "attributename" && os(st, "href")) {
        er(Ae, d, ie);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          er(Ae, d, ie);
          continue;
        }
        if (!G && Qe(Vu, st)) {
          er(Ae, d, ie);
          continue;
        }
        if (ae && (st = S(st)), !Ei(Q, mt, st)) {
          er(Ae, d, ie);
          continue;
        }
        st = Hl(Q, mt, Le, st), st !== Ea && $l(d, Ae, Le, st);
      }
    }
    Ie(me.afterSanitizeAttributes, d, null);
  }, Mn = function(d) {
    let g = null;
    const O = nn(d);
    for (Ie(me.beforeSanitizeShadowDOM, d, null); g = O.nextNode(); )
      if (Ie(me.uponSanitizeShadowNode, g, null), Si(g, d), Ti(g), J(g.content) && Mn(g.content), Ne(g) === Tt.element) {
        const q = z(g);
        J(q) && (Sa(q), Mn(q));
      }
    Ie(me.afterSanitizeShadowDOM, d, null);
  }, Sa = function(d) {
    const g = [{
      node: d,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const O = g.pop();
      if (O.shadow) {
        Mn(O.shadow);
        continue;
      }
      const q = O.node, ie = Ne(q) === Tt.element, Ae = ue(q);
      if (Ae)
        for (let Le = Ae.length - 1; Le >= 0; --Le)
          g.push({
            node: Ae[Le],
            shadow: null
          });
      if (ie) {
        const Le = ce ? ce(q) : null;
        if (typeof Le == "string" && Pe(Le) === "template") {
          const ht = q.content;
          J(ht) && g.push({
            node: ht,
            shadow: null
          });
        }
      }
      if (ie) {
        const Le = z(q);
        J(Le) && g.push({
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
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, O = null, q = null, Q = null;
    if (Yr = !F, Yr && (F = "<!-->"), typeof F != "string" && !Oe(F) && (F = ku(F), typeof F != "string"))
      throw Sr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = ee, x = oe) : Zr(d), (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && (_ = xt(_)), me.uponSanitizeAttribute.length > 0 && (x = xt(x)), t.removed = [];
    const ie = it && typeof F != "string" && Oe(F);
    if (ie) {
      va(F);
      const ht = Be(F);
      if (typeof ht == "string") {
        const mt = Pe(ht);
        if (!_[mt] || U[mt])
          throw Lr(F), Sr("root node is forbidden and cannot be sanitized in-place");
      }
      if (h(F))
        throw Lr(F), Sr("root node is clobbered and cannot be sanitized in-place");
      try {
        Sa(F);
      } catch (mt) {
        throw Lr(F), mt;
      }
    } else if (Oe(F))
      g = rn("<!---->"), O = g.ownerDocument.importNode(F, !0), O.nodeType === Tt.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? g = O : g.appendChild(O), Sa(O);
    else {
      if (!fe && !ae && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && re ? $e(F) : F;
      if (g = rn(F), !g)
        return fe ? null : re ? Me : "";
    }
    g && he && pt(g.firstChild);
    const Ae = ie ? F : g;
    try {
      const ht = nn(Ae);
      for (; q = ht.nextNode(); )
        Si(q, Ae), Ti(q), J(q.content) && Mn(q.content);
    } catch (ht) {
      throw ie && (Lr(F), Cr(t.removed, (mt) => {
        mt.element && Dr(mt.element);
      })), ht;
    }
    if (ie)
      return Cr(t.removed, (ht) => {
        ht.element && Dr(ht.element);
      }), ae && v(F), F;
    if (fe) {
      if (ae && v(g), Fe)
        for (Q = Re.call(g.ownerDocument); g.firstChild; )
          Q.appendChild(g.firstChild);
      else
        Q = g;
      return (x.shadowroot || x.shadowrootmode) && (Q = at.call(n, Q, !0)), Q;
    }
    let Le = P ? g.outerHTML : g.innerHTML;
    return P && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Qe(Hu, g.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Le), ae && (Le = S(Le)), Ee && re ? $e(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(F), H = !0, ee = _, oe = x;
  }, t.clearConfig = function() {
    qt = null, H = !1, ee = null, oe = null, Ee = nt, Me = "";
  }, t.isValidAttribute = function(F, d, g) {
    qt || Zr({});
    const O = Pe(F), q = Pe(d);
    return Ei(O, q, g);
  }, t.addHook = function(F, d) {
    typeof d == "function" && yt(me, F) && ln(me[F], d);
  }, t.removeHook = function(F, d) {
    if (yt(me, F)) {
      if (d !== void 0) {
        const g = wu(me[F], d);
        return g === -1 ? void 0 : Su(me[F], g, 1)[0];
      }
      return ls(me[F]);
    }
  }, t.removeHooks = function(F) {
    yt(me, F) && (me[F] = []);
  }, t.removeAllHooks = function() {
    me = _s();
  }, t;
}
var Ku = Ml();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qa, vs;
function Yu() {
  if (vs) return qa;
  vs = 1;
  var e = /["'&<>]/;
  qa = t;
  function t(r) {
    var n = "" + r, a = e.exec(n);
    if (!a)
      return n;
    var i, o = "", u = 0, p = 0;
    for (u = a.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
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
      p !== u && (o += n.substring(p, u)), p = u + 1, o += i;
    }
    return p !== u ? o + n.substring(p, u) : o;
  }
  return qa;
}
var Xu = Yu();
const ws = /* @__PURE__ */ Gu(Xu);
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
function s(e, t, r, n, a) {
  const i = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, p = (K) => K, w = (u.sanitize ? Ku.sanitize : p) || p, y = u.escape ? ws : p, E = (K) => typeof K == "string" || typeof K == "number", I = (K, ue, le) => K.replace(/%n/g, "" + le).replace(/{([^{}]*)}/g, (z, M) => {
    if (ue === void 0 || !(M in ue))
      return y(z);
    const V = ue[M];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? ws : p)(`${V.value}`) : y(z);
  });
  let se = (a?.bundle ?? Ju(e)).translations[t] || t;
  return se = Array.isArray(se) ? se[0] : se, w(typeof i == "object" || o !== void 0 ? I(
    se,
    i,
    o
  ) : se);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = ["aria-label"], td = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, rd = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, nd = ["title"], ad = { class: "library-workspace-panel-purpose" }, id = { class: "library-workspace-scope-badge" }, sd = ["aria-label"], ld = ["name", "value"], od = { class: "library-quick-search-row" }, cd = ["title"], ud = ["aria-label"], dd = { class: "library-quick-filter-options" }, fd = { class: "library-quick-filter-option-grid" }, pd = { value: "title" }, hd = { value: "recent" }, md = { value: "publicationDate" }, bd = { value: "publication" }, yd = { value: "lastOpened" }, gd = { value: "format" }, _d = { value: "" }, vd = { value: "1" }, wd = ["value"], Sd = ["value"], Ed = ["aria-label"], Cd = ["aria-label"], Td = ["aria-label"], xd = { value: "" }, Ad = ["value"], kd = { value: "" }, Rd = ["value"], Od = { value: "" }, Nd = ["value"], Pd = { value: "" }, Id = ["value"], Ld = { value: "" }, Dd = ["value"], Md = { value: "" }, Ud = ["value"], Fd = { value: "" }, Hd = ["value"], $d = { value: "" }, jd = ["value"], Vd = { value: "" }, qd = ["value"], Bd = { value: "" }, zd = ["value"], Wd = { value: "" }, Kd = { value: "1" }, Gd = {
  type: "submit",
  class: "button primary"
}, Yd = {
  href: "?",
  class: "button secondary"
}, Xd = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, Jd = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Zd = ["title"], Qd = { class: "library-workspace-panel-purpose" }, ef = { class: "library-workspace-scope-badge" }, tf = {
  key: 0,
  class: "library-home-hero-card"
}, rf = ["title"], nf = { class: "library-home-hero-actions" }, af = ["href"], sf = {
  key: 1,
  class: "library-home-rediscover"
}, lf = { class: "library-muted library-catalogue-eyebrow" }, of = { class: "library-muted" }, cf = ["aria-label"], uf = ["href", "title"], df = { class: "library-useful-view-count" }, ff = { class: "library-shortcut-selectors" }, pf = ["title"], hf = { value: "" }, mf = ["value"], bf = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, yf = { value: "" }, gf = ["value"], _f = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, vf = { value: "" }, wf = ["value"], Sf = { class: "library-saved-collections" }, Ef = ["title"], Cf = ["action", "title"], Tf = ["value"], xf = ["value"], Af = ["placeholder", "disabled"], kf = ["disabled", "title"], Rf = ["aria-label"], Of = ["href"], Nf = ["action"], Pf = ["value"], If = {
  type: "submit",
  class: "button tertiary"
}, Lf = ["aria-label"], Df = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Mf = ["title"], Uf = { class: "library-workspace-panel-purpose" }, Ff = { class: "library-workspace-scope-badge" }, Hf = { class: "library-batch-action-grid" }, $f = ["action"], jf = ["value"], Vf = ["name", "value"], qf = ["placeholder"], Bf = ["title"], zf = ["action"], Wf = ["value"], Kf = ["name", "value"], Gf = ["placeholder"], Yf = ["title"], Xf = ["action"], Jf = ["value"], Zf = ["name", "value"], Qf = ["title"], ep = ["action"], tp = ["value"], rp = ["name", "value"], np = { name: "bulkEditField" }, ap = { value: "publicationType" }, ip = { value: "subtitle" }, sp = { value: "creators" }, lp = { value: "publication" }, op = { value: "publicationDate" }, cp = { value: "language" }, up = { value: "publisher" }, dp = { value: "genres" }, fp = { value: "classifications" }, pp = ["title"], hp = ["action"], mp = ["value"], bp = ["name", "value"], yp = ["title"], gp = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, _p = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, vp = ["title"], wp = { class: "library-workspace-panel-purpose" }, Sp = { class: "library-workspace-scope-badge" }, Ep = ["aria-label"], Cp = ["href", "title"], Tp = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, xp = ["title"], Ap = ["href"], kp = ["href"], Rp = ["action"], Op = ["value"], Np = {
  type: "submit",
  class: "button secondary"
}, Pp = ["title"], Ip = ["href"], Lp = ["action"], Dp = ["value"], Mp = {
  type: "submit",
  class: "button secondary"
}, Up = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, Fp = { class: "library-metadata-review-workbench-copy" }, Hp = { class: "library-muted library-catalogue-eyebrow" }, $p = ["title"], jp = {
  key: 0,
  class: "library-metadata-review-card"
}, Vp = { class: "library-muted" }, qp = { class: "library-metadata-review-fields" }, Bp = ["action"], zp = ["value"], Wp = ["value"], Kp = {
  type: "submit",
  class: "button secondary"
}, Gp = { class: "library-metadata-review-actions" }, Yp = ["href"], Xp = ["href"], Jp = {
  key: 1,
  class: "library-muted"
}, Zp = ["href"], Qp = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, eh = ["title"], th = { class: "library-workspace-panel-purpose" }, rh = { class: "library-workspace-scope-badge" }, nh = { class: "library-catalogue-actions-list" }, ah = ["href"], ih = ["href"], sh = ["href"], lh = ["href"], oh = { class: "library-actions-health-overview" }, ch = { class: "library-muted library-catalogue-eyebrow" }, uh = ["title"], dh = {
  key: 0,
  class: "library-muted"
}, fh = {
  key: 1,
  class: "library-notice"
}, ph = {
  key: 2,
  class: "library-muted"
}, hh = {
  key: 0,
  class: "library-muted"
}, mh = {
  key: 1,
  class: "library-muted"
}, bh = {
  key: 2,
  class: "library-muted"
}, yh = ["disabled"], gh = { class: "library-actions-health-links" }, _h = ["href"], vh = ["href"], wh = ["href"], Sh = ["href"], Eh = { class: "library-actions-health-grid" }, Ch = { class: "library-import-health-number" }, Th = { class: "library-import-health-number" }, xh = { class: "library-muted" }, Ah = { class: "library-muted" }, kh = {
  key: 0,
  class: "library-import-health-examples"
}, Rh = { class: "library-catalogue-header" }, Oh = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Nh = { id: "library-catalogue-heading" }, Ph = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, Ih = {
  key: 1,
  class: "library-notice library-batch-metadata-apply-result"
}, Lh = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Dh = { class: "library-muted library-catalogue-eyebrow" }, Mh = ["title"], Uh = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Fh = { key: 0 }, Hh = { key: 1 }, $h = { key: 2 }, jh = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Vh = { key: 0 }, qh = { key: 1 }, Bh = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, zh = { class: "library-muted library-catalogue-eyebrow" }, Wh = ["title"], Kh = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, Gh = ["href"], Yh = {
  key: 0,
  class: "library-notice"
}, Xh = { class: "library-publication-issue-label" }, Jh = ["href"], Zh = { class: "library-muted" }, Qh = {
  key: 1,
  class: "library-publication-unknown-issues"
}, em = ["title"], tm = {
  href: "/apps/library/",
  class: "button secondary"
}, rm = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, nm = ["aria-pressed"], am = ["aria-pressed"], im = ["aria-pressed"], sm = { class: "library-catalogue-status-row" }, lm = { class: "library-muted library-filter-result-summary" }, om = { key: 0 }, cm = { href: "?" }, um = ["aria-label"], dm = { class: "library-pagination-range" }, fm = { key: 0 }, pm = ["href"], hm = {
  key: 1,
  class: "library-muted"
}, mm = ["href"], bm = {
  key: 3,
  class: "library-muted"
}, ym = ["aria-label"], gm = ["href", "aria-label"], _m = ["title"], vm = { class: "library-empty-actions" }, wm = ["href"], Sm = { class: "library-muted" }, Em = ["title"], Cm = { class: "library-empty-actions" }, Tm = ["href"], xm = ["title"], Am = { class: "library-empty-actions" }, km = ["href"], Rm = {
  href: "?",
  class: "button primary"
}, Om = ["title"], Nm = { class: "library-empty-actions" }, Pm = ["href"], Im = ["href", "aria-label"], Lm = { class: "library-cover-frame" }, Dm = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, Mm = ["src", "alt", "onLoad", "onError"], Um = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Fm = ["action", "onSubmit"], Hm = ["value"], $m = ["value"], jm = ["aria-pressed", "title", "aria-label", "onClick"], Vm = { class: "library-cover-summary" }, qm = { class: "library-cover-primary" }, Bm = ["aria-label"], zm = ["href"], Wm = ["onToggle"], Km = ["aria-label"], Gm = { class: "library-cover-meta" }, Ym = {
  key: 0,
  class: "library-creator"
}, Xm = { class: "library-cover-detail-list" }, Jm = { class: "library-cover-detail-chip" }, Zm = {
  key: 0,
  class: "library-cover-detail-chip"
}, Qm = {
  key: 1,
  class: "library-cover-detail-chip"
}, eb = {
  key: 2,
  class: "library-cover-detail-chip"
}, tb = {
  key: 3,
  class: "library-cover-detail-chip"
}, rb = {
  key: 4,
  class: "library-cover-detail-chip"
}, nb = {
  key: 5,
  class: "library-cover-detail-chip"
}, ab = {
  key: 6,
  class: "library-cover-detail-chip"
}, ib = {
  key: 1,
  class: "library-muted library-cover-description"
}, sb = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, lb = { key: 0 }, ob = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, cb = {
  key: 0,
  class: "library-muted"
}, ub = { class: "library-cover-actions" }, db = ["href"], fb = ["href"], pb = ["onClick"], hb = ["href"], mb = ["aria-label"], bb = { class: "library-pagination-range" }, yb = { key: 0 }, gb = ["href"], _b = {
  key: 1,
  class: "library-muted"
}, vb = ["href"], wb = {
  key: 3,
  class: "library-muted"
}, Sb = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, Eb = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, Cb = ["src", "alt"], Tb = { class: "library-muted library-catalogue-eyebrow" }, xb = { id: "library-detail-drawer-heading" }, Ab = {
  key: 0,
  class: "library-creator"
}, kb = {
  key: 1,
  class: "library-muted"
}, Rb = { class: "library-detail-drawer-facts" }, Ob = { key: 0 }, Nb = { key: 1 }, Pb = { key: 2 }, Ib = { class: "library-detail-drawer-actions" }, Lb = ["href"], Db = ["href"], Mb = ["aria-label"], Ub = ["disabled"], Fb = ["disabled"], Hb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ nr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ nr((a.items || []).map((S) => ({ ...S }))), o = B(() => i), u = B(() => a.shelves || []), p = B(() => a.formats || []), w = B(() => a.publications || []), y = B(() => a.publicationSummaries || []), E = B(() => a.publicationIssueContext || null), I = B(() => a.publicationYears || []), j = B(() => a.creators || []), se = B(() => a.scanStatuses || []), K = B(() => a.workflowStatuses || []), ue = B(() => a.genres || []), le = B(() => a.classifications || []), z = B(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), M = /* @__PURE__ */ nr({
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
    }), V = B(() => a.settingsUrl || ""), ce = B(() => a.requestToken || ""), De = B(() => a.metadataExportUrl || ""), Ne = B(() => a.metadataSidecarManifestUrl || ""), Be = B(() => a.metadataSidecarBundleUrl || ""), Ee = B(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), Me = B(() => a.batchTagUrl || "/apps/library/bulk/tags"), nt = B(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = B(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ye = B(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), kt = B(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), $e = B(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Ue = B(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ge = B(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), pe = B(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), ze = B(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), _e = /* @__PURE__ */ nr({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Re = B(() => _e.summary || {}), We = B(() => {
      const S = Number(Re.value.generatedAt || 0);
      return S > 0 ? new Date(S * 1e3).toLocaleString() : "";
    }), at = B(() => Re.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), me = B(() => Re.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Jt = B(() => Re.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), je = B(() => a.discoveryPage === "publication"), gt = B(() => a.discoveryPage === "year"), _t = B(() => a.discoveryPage === "creator"), vt = B(() => je.value || gt.value || _t.value), ft = B(() => a.discoveryTitle || M.publication || M.year || M.creator || ""), Nt = B(() => vt.value ? ft.value : s("library", "Library")), m = B(() => _t.value ? s("library", "Creator") : gt.value ? s("library", "Publication year") : s("library", "Publication / series")), b = B(() => Number(a.rootCount || 0)), _ = B(() => Number(a.enabledRootCount || 0)), R = B(() => b.value === 0), x = B(() => b.value > 0 && _.value === 0), k = B(() => N.value.length > 0), D = {
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
    }, U = B(() => {
      if (typeof window > "u") return "";
      const S = new URLSearchParams(window.location.search);
      if (S.get("batchMetadataApplyResult") !== "1") return "";
      const v = S.get("batchMetadataField") || "field", h = S.get("batchMetadataApplied") || "0", J = S.get("batchMetadataUnchanged") || "0", Oe = S.get("batchMetadataSkipped") || "0";
      return s("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: v, unchanged: J, skipped: Oe });
    }), L = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? s("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), A = B(() => a.savedCollections || []), X = B(() => a.savedCollectionSaveUrl || "/apps/library/collections"), $ = B(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), W = ["compact", "gallery", "shelf"], G = B(() => W.includes(M.view) ? M.view : "compact"), ae = B(() => ({
      "library-cover-gallery--compact": G.value === "compact",
      "library-cover-gallery--gallery": G.value === "gallery",
      "library-cover-gallery--shelf": G.value === "shelf"
    })), N = B(() => Object.entries(D).map(([S, v]) => ({ key: S, label: v, value: M[S] || "" })).filter((S) => String(S.value).trim() !== "")), P = B(() => Object.entries(M).filter(([S, v]) => !["q", "sort", "starred"].includes(S) && String(v || "").trim() !== "").map(([S, v]) => ({ key: S, value: v }))), H = B(() => Object.entries(M).filter(([S, v]) => String(v || "").trim() !== "").map(([S, v]) => ({ key: S, value: v }))), ee = /* @__PURE__ */ nr({}), oe = /* @__PURE__ */ nr({}), he = B(() => o.value.filter((S) => S.starred || S.workflowStatus === "reading" || S.lastOpenedAt).slice(0, 5)), fe = B(() => o.value.find((S) => S.description || S.publication || S.creators) || o.value[0] || null), Fe = B(() => !vt.value && o.value.length > 0), re = /* @__PURE__ */ Ni(null), Te = B(() => re.value ? o.value.findIndex((S) => S.id === re.value.id) : -1), Xe = B(() => Te.value > 0 ? o.value[Te.value - 1] : null), wt = B(() => Te.value >= 0 && Te.value < o.value.length - 1 ? o.value[Te.value + 1] : null), Zt = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], it = B(() => {
      const S = M.scannerConflicts === "1" || String(M.weakMetadata || "").trim() !== "", v = S ? o.value.find((h) => Et(h).length > 0) : null;
      return {
        enabled: S,
        item: v,
        fields: v ? Et(v) : [],
        reviewNextUrl: $e.value,
        skipUrl: z.value.nextUrl || $e.value
      };
    });
    function St(S) {
      return Array.isArray(S) ? JSON.stringify(S) : S == null ? "" : String(S);
    }
    function Et(S) {
      const v = S.fieldValues || {}, h = S.fieldSources || {};
      return Zt.filter((J) => Object.prototype.hasOwnProperty.call(v, J)).map((J) => {
        const Oe = St(S[J]), Ie = St(v[J]), Mr = St(h[J] || S.metadataSource || "scanner"), Ur = Mr.includes("filename") || Mr.includes("path") ? Ie : "", wa = Mr.includes("sidecar") ? Ie : "";
        return { field: J, currentValue: Oe, scannerCandidate: Ie, pathTemplateCandidate: Ur, sidecarValue: wa, sourceProvenance: Mr, differs: Oe !== Ie };
      }).filter((J) => J.differs);
    }
    function Ht(S) {
      re.value = S;
    }
    function $t() {
      re.value = null;
    }
    function Pt(S) {
      S && (re.value = S);
    }
    const Ke = /* @__PURE__ */ Ni(null);
    let pr = null;
    function jt(S) {
      const v = new URLSearchParams(new FormData(S));
      for (const h of Array.from(v.keys()))
        String(v.get(h) || "").trim() === "" && v.delete(h);
      return v.delete("page"), v.get("view") === "compact" && v.delete("view"), v;
    }
    function Qt(S) {
      i.splice(0, i.length, ...(S.items || []).map((v) => ({ ...v })));
      for (const v of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(S, v) && (a[v] = S[v]);
      Object.assign(M, S.activeFilters || {});
    }
    async function Ze(S = !1) {
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
    async function hr(S) {
      S && S.currentTarget && S.currentTarget.open !== !0 || _e.loaded || _e.loading || await Ze(!1);
    }
    async function Yr() {
      await Ze(!0);
    }
    async function Vt(S) {
      const v = S?.currentTarget?.tagName === "FORM" ? S.currentTarget : S?.currentTarget?.form;
      if (!v) return;
      const J = jt(v).toString(), Oe = J ? `?${J}` : "", Ie = await fetch(Ee.value + Oe, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Ie.ok) {
        v.submit();
        return;
      }
      Qt(await Ie.json()), history.replaceState({}, "", J ? `?${J}` : window.location.pathname);
    }
    function Rn(S) {
      Vt(S);
    }
    function On(S) {
      window.clearTimeout(pr), pr = window.setTimeout(() => Rn(S), 350);
    }
    function Pr(S) {
      const v = new URLSearchParams();
      for (const [J, Oe] of Object.entries(M)) {
        const Ie = String(Oe || "").trim();
        Ie !== "" && J !== S && !(J === "sort" && Ie === "title") && !(J === "view" && Ie === "compact") && v.set(J, Ie);
      }
      const h = v.toString();
      return h ? `?${h}` : "?";
    }
    function Nn() {
      return Pr("q");
    }
    const Ir = B(() => a.smartViewCounts || {}), Pn = B(() => {
      const S = {};
      for (const [v, h] of Object.entries(M)) {
        const J = String(h || "").trim();
        J !== "" && !(v === "sort" && J === "title") && (S[v] = J);
      }
      return S;
    }), _r = B(() => JSON.stringify(Pn.value)), Xr = B(() => Object.keys(Pn.value).length > 0), ma = B(() => [
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
    ]), Pe = B(() => [
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
    function qt(S) {
      if (!W.includes(S)) return;
      M.view = S;
      const v = new URLSearchParams(window.location.search);
      S === "compact" ? v.delete("view") : v.set("view", S), v.delete("page"), history.replaceState({}, "", v.toString() ? `?${v.toString()}` : window.location.pathname);
    }
    function Jr(S) {
      const v = new URLSearchParams(window.location.search);
      for (const J of Object.keys(D))
        v.delete(J);
      v.delete("page");
      for (const [J, Oe] of Object.entries(S))
        String(Oe || "").trim() !== "" && v.set(J, String(Oe));
      const h = v.toString();
      return h ? `?${h}` : "?";
    }
    function In(S) {
      return Jr(S || {});
    }
    function Zr(S) {
      return $.value.replace("__COLLECTION_ID__", encodeURIComponent(String(S || "0")));
    }
    function Qr(S) {
      return String(S || "").toUpperCase();
    }
    function en(S) {
      return S.nextcloudTags || [];
    }
    function ba(S) {
      return y.value.find((h) => h.publication === S)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(S)}`;
    }
    function ya(S) {
      return a.publicationYearLandingUrls?.[S] || `/apps/library/years/${encodeURIComponent(S)}`;
    }
    function ga(S) {
      return a.creatorLandingUrls?.[S] || `/apps/library/creators/${encodeURIComponent(S)}`;
    }
    function tn(S) {
      const v = S?.target?.value || "";
      v && (window.location.href = v);
    }
    function pt(S) {
      return oe[S.id] || "loading";
    }
    function Ln(S) {
      oe[S.id] = "loaded";
    }
    function Lr(S) {
      oe[S.id] = "error";
    }
    function er(S, v) {
      ee[S] = !!v?.currentTarget?.open;
    }
    function _a(S) {
      const v = String(S?.tagName || "").toLowerCase();
      return S?.isContentEditable || ["input", "select", "textarea", "button"].includes(v);
    }
    function Dr(S) {
      if (S.key !== "/" || S.metaKey || S.ctrlKey || S.altKey || S.shiftKey || _a(S.target))
        return;
      S.preventDefault();
      const v = Ke.value?.closest?.(".library-workspace-panel--refine");
      v && (v.open = !0), Ke.value?.focus(), Ke.value?.select?.();
    }
    function Dn(S) {
      S.key !== "Escape" || document.activeElement !== Ke.value || M.q === "" || (S.preventDefault(), M.q = "", Ke.value.value = "", window.clearTimeout(pr), Rn({ currentTarget: Ke.value }));
    }
    function va(S) {
      return !re.value || S.metaKey || S.ctrlKey || S.altKey ? !1 : S.key === "Escape" ? (S.preventDefault(), $t(), !0) : S.key === "ArrowLeft" && Xe.value ? (S.preventDefault(), Pt(Xe.value), !0) : S.key === "ArrowRight" && wt.value ? (S.preventDefault(), Pt(wt.value), !0) : !1;
    }
    function rn(S) {
      va(S) || (Dr(S), Dn(S));
    }
    sl(() => {
      window.addEventListener("keydown", rn);
    }), ll(() => {
      window.removeEventListener("keydown", rn);
    });
    async function nn(S, v) {
      const h = v?.currentTarget?.closest?.("form") || v?.currentTarget;
      if (!h || !S?.starUrl) return;
      const J = !!S.starred;
      S.starred = !J;
      try {
        (await fetch(S.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (S.starred = J);
      } catch {
        S.starred = J;
      }
    }
    return (S, v) => (C(), T("div", Zu, [
      l("section", Qu, [
        l("nav", {
          class: "library-catalogue-workspace library-workspace-menubar",
          "aria-label": f(s)("library", "One catalogue workspace")
        }, [
          l("details", td, [
            l("summary", rd, [
              v[22] || (v[22] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⌕", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
              }, c(f(s)("library", "Refine results")), 9, nd),
              l("small", ad, c(f(s)("library", "Filters, facets and saved filter shortcuts")), 1),
              l("b", id, c(M.shelf ? f(s)("library", "this shelf") : N.value.length > 0 ? f(s)("library", "current results") : f(s)("library", "whole catalogue")), 1)
            ]),
            l("form", {
              method: "get",
              class: "library-quick-filter-bar",
              "aria-label": f(s)("library", "Quick catalogue filters"),
              onSubmit: Vn(Vt, ["prevent"])
            }, [
              (C(!0), T(te, null, ve(P.value, (h) => (C(), T("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, ld))), 128)),
              l("div", od, [
                l("label", {
                  class: "library-quick-filter-search",
                  title: f(s)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    be(c(f(s)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                    v[23] || (v[23] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  lt(l("input", {
                    ref_key: "quickSearchInput",
                    ref: Ke,
                    "onUpdate:modelValue": v[0] || (v[0] = (h) => M.q = h),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                    onInput: On
                  }, null, 544), [
                    [rs, M.q]
                  ])
                ], 8, cd),
                l("button", {
                  type: "submit",
                  class: "button primary",
                  "aria-label": f(s)("library", "Search catalogue")
                }, c(f(s)("library", "Search")), 9, ud)
              ]),
              l("details", dd, [
                l("summary", null, c(f(s)("library", "Filter & sort")), 1),
                l("div", fd, [
                  l("label", null, [
                    be(c(f(s)("library", "Sort")), 1),
                    lt(l("select", {
                      "onUpdate:modelValue": v[1] || (v[1] = (h) => M.sort = h),
                      name: "sort",
                      onChange: Vt
                    }, [
                      l("option", pd, c(f(s)("library", "Title")), 1),
                      l("option", hd, c(f(s)("library", "Recently added")), 1),
                      l("option", md, c(f(s)("library", "Publication date")), 1),
                      l("option", bd, c(f(s)("library", "Series")), 1),
                      l("option", yd, c(f(s)("library", "Recently opened")), 1),
                      l("option", gd, c(f(s)("library", "Format")), 1)
                    ], 544), [
                      [Ct, M.sort]
                    ])
                  ]),
                  l("label", null, [
                    be(c(f(s)("library", "Starred")), 1),
                    lt(l("select", {
                      "onUpdate:modelValue": v[2] || (v[2] = (h) => M.starred = h),
                      name: "starred",
                      onChange: Vt
                    }, [
                      l("option", _d, c(f(s)("library", "All")), 1),
                      l("option", vd, c(f(s)("library", "Starred")), 1)
                    ], 544), [
                      [Ct, M.starred]
                    ])
                  ]),
                  l("label", null, [
                    be(c(f(s)("library", "Size")), 1),
                    l("select", {
                      value: z.value.limit,
                      name: "limit",
                      onChange: Vt
                    }, [
                      (C(), T(te, null, ve(n, (h) => l("option", {
                        key: h,
                        value: h
                      }, c(h), 9, Sd)), 64))
                    ], 40, wd)
                  ]),
                  l("button", {
                    type: "submit",
                    class: "button secondary",
                    "aria-label": f(s)("library", "Apply catalogue filters")
                  }, c(f(s)("library", "Apply filters")), 9, Ed),
                  l("a", {
                    href: "?",
                    class: "button secondary",
                    "aria-label": f(s)("library", "Clear catalogue filters")
                  }, c(f(s)("library", "Clear all")), 9, Cd)
                ])
              ])
            ], 40, sd),
            l("form", {
              method: "get",
              class: "library-filter-bar",
              "aria-label": f(s)("library", "Catalogue search and filters"),
              onSubmit: Vn(Vt, ["prevent"])
            }, [
              l("label", null, [
                be(c(f(s)("library", "Type")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[3] || (v[3] = (h) => M.type = h),
                  name: "type"
                }, [
                  l("option", xd, c(f(s)("library", "All types")), 1),
                  (C(), T(te, null, ve(r, (h) => l("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Ad)), 64))
                ], 512), [
                  [Ct, M.type]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Series / periodical")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[4] || (v[4] = (h) => M.publication = h),
                  name: "publication"
                }, [
                  l("option", kd, c(f(s)("library", "All series and periodicals")), 1),
                  (C(!0), T(te, null, ve(w.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Rd))), 128))
                ], 512), [
                  [Ct, M.publication]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Publication year")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[5] || (v[5] = (h) => M.year = h),
                  name: "year"
                }, [
                  l("option", Od, c(f(s)("library", "All years")), 1),
                  (C(!0), T(te, null, ve(I.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Nd))), 128))
                ], 512), [
                  [Ct, M.year]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Creator")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[6] || (v[6] = (h) => M.creator = h),
                  name: "creator",
                  title: "Exact full-field creator matches only"
                }, [
                  l("option", Pd, c(f(s)("library", "All creators")), 1),
                  (C(!0), T(te, null, ve(j.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Id))), 128))
                ], 512), [
                  [Ct, M.creator]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Nextcloud tag")), 1),
                lt(l("input", {
                  "onUpdate:modelValue": v[7] || (v[7] = (h) => M.tag = h),
                  type: "text",
                  name: "tag",
                  placeholder: "photography"
                }, null, 512), [
                  [rs, M.tag]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Format")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[8] || (v[8] = (h) => M.format = h),
                  name: "format"
                }, [
                  l("option", Ld, c(f(s)("library", "All formats")), 1),
                  (C(!0), T(te, null, ve(p.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(Qr(h)), 9, Dd))), 128))
                ], 512), [
                  [Ct, M.format]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Shelf")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[9] || (v[9] = (h) => M.shelf = h),
                  name: "shelf"
                }, [
                  l("option", Md, c(f(s)("library", "All shelves")), 1),
                  (C(!0), T(te, null, ve(u.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Ud))), 128))
                ], 512), [
                  [Ct, M.shelf]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Scan status")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[10] || (v[10] = (h) => M.status = h),
                  name: "status"
                }, [
                  l("option", Fd, c(f(s)("library", "All scan statuses")), 1),
                  (C(!0), T(te, null, ve(se.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, Hd))), 128))
                ], 512), [
                  [Ct, M.status]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Workflow status")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[11] || (v[11] = (h) => M.workflowStatus = h),
                  name: "workflowStatus"
                }, [
                  l("option", $d, c(f(s)("library", "All workflow statuses")), 1),
                  (C(!0), T(te, null, ve(K.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, jd))), 128))
                ], 512), [
                  [Ct, M.workflowStatus]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Genre")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[12] || (v[12] = (h) => M.genre = h),
                  name: "genre"
                }, [
                  l("option", Vd, c(f(s)("library", "All genres")), 1),
                  (C(!0), T(te, null, ve(ue.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, qd))), 128))
                ], 512), [
                  [Ct, M.genre]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Classification")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[13] || (v[13] = (h) => M.classification = h),
                  name: "classification"
                }, [
                  l("option", Bd, c(f(s)("library", "All classifications")), 1),
                  (C(!0), T(te, null, ve(le.value, (h) => (C(), T("option", {
                    key: h,
                    value: h
                  }, c(h), 9, zd))), 128))
                ], 512), [
                  [Ct, M.classification]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Scanner conflicts")), 1),
                lt(l("select", {
                  "onUpdate:modelValue": v[14] || (v[14] = (h) => M.scannerConflicts = h),
                  name: "scannerConflicts"
                }, [
                  l("option", Wd, c(f(s)("library", "All metadata")), 1),
                  l("option", Kd, c(f(s)("library", "Needs review")), 1)
                ], 512), [
                  [Ct, M.scannerConflicts]
                ])
              ]),
              l("button", Gd, c(f(s)("library", "Apply filters")), 1),
              l("a", Yd, c(f(s)("library", "Clear")), 1)
            ], 40, Td)
          ]),
          l("details", Xd, [
            l("summary", Jd, [
              v[24] || (v[24] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "↗", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
              }, c(f(s)("library", "Browse shortcuts")), 9, Zd),
              l("small", Qd, c(f(s)("library", "Continue reading, recently added, rediscover and useful views")), 1),
              l("b", ef, c(f(s)("library", "whole catalogue")), 1)
            ]),
            Fe.value ? (C(), T("article", tf, [
              l("h3", {
                title: f(s)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
              }, c(f(s)("library", "Continue reading")), 9, rf),
              l("div", nf, [
                he.value[0] ? (C(), T("a", {
                  key: 0,
                  class: "button primary",
                  href: he.value[0].openUrl
                }, c(f(s)("library", "Read now")), 9, af)) : Y("", !0),
                he.value[0] ? (C(), T("button", {
                  key: 1,
                  type: "button",
                  class: "button secondary",
                  onClick: v[15] || (v[15] = (h) => Ht(he.value[0]))
                }, c(f(s)("library", "Details")), 1)) : Y("", !0)
              ])
            ])) : Y("", !0),
            fe.value ? (C(), T("article", sf, [
              l("p", lf, c(f(s)("library", "Rediscover")), 1),
              l("strong", null, c(fe.value.title), 1),
              l("span", of, c(fe.value.creators || fe.value.publication || fe.value.cachedPath), 1),
              l("button", {
                type: "button",
                class: "button secondary",
                onClick: v[16] || (v[16] = (h) => Ht(fe.value))
              }, c(f(s)("library", "Peek")), 1)
            ])) : Y("", !0),
            l("nav", {
              class: "library-useful-view-links",
              "aria-label": f(s)("library", "Useful views")
            }, [
              (C(!0), T(te, null, ve(ma.value, (h) => (C(), T("a", {
                key: h.key,
                class: "library-useful-view-chip",
                href: Jr(h.filters),
                title: f(s)("library", h.description)
              }, [
                l("strong", null, c(f(s)("library", h.label)), 1),
                l("small", df, c(Number(Ir.value[h.key] || 0)), 1)
              ], 8, uf))), 128))
            ], 8, cf),
            l("div", ff, [
              y.value.length > 0 ? (C(), T("label", {
                key: 0,
                class: "library-shortcut-select-card library-periodical-groups",
                title: f(s)("library", "Jump into recurring publications with one click.")
              }, [
                l("span", null, c(f(s)("library", "Series / periodicals")), 1),
                l("select", { onChange: tn }, [
                  l("option", hf, c(f(s)("library", "Choose series")), 1),
                  (C(!0), T(te, null, ve(y.value, (h) => (C(), T("option", {
                    key: h.publication,
                    value: ba(h.publication)
                  }, c(h.publication) + " · " + c(h.itemCount), 9, mf))), 128))
                ], 32)
              ], 8, pf)) : Y("", !0),
              I.value.length > 0 ? (C(), T("label", bf, [
                l("span", null, c(f(s)("library", "Publication year")), 1),
                l("select", { onChange: tn }, [
                  l("option", yf, c(f(s)("library", "Choose year")), 1),
                  (C(!0), T(te, null, ve(I.value, (h) => (C(), T("option", {
                    key: h,
                    value: ya(h)
                  }, c(h), 9, gf))), 128))
                ], 32)
              ])) : Y("", !0),
              j.value.length > 0 ? (C(), T("label", _f, [
                l("span", null, c(f(s)("library", "Creator")), 1),
                l("select", { onChange: tn }, [
                  l("option", vf, c(f(s)("library", "Choose creator")), 1),
                  (C(!0), T(te, null, ve(j.value, (h) => (C(), T("option", {
                    key: h,
                    value: ga(h)
                  }, c(h), 9, wf))), 128))
                ], 32)
              ])) : Y("", !0)
            ]),
            l("section", Sf, [
              l("h3", {
                title: f(s)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
              }, c(f(s)("library", "Custom collections")), 9, Ef),
              l("form", {
                method: "post",
                action: X.value,
                class: "library-saved-collection-save-form",
                title: Xr.value ? "" : f(s)("library", "Choose search terms or filters first, then save them as a custom collection.")
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Tf),
                l("input", {
                  type: "hidden",
                  name: "savedCollectionFilters",
                  value: _r.value
                }, null, 8, xf),
                l("label", null, [
                  be(c(f(s)("library", "Collection name")), 1),
                  l("input", {
                    type: "text",
                    name: "savedCollectionName",
                    placeholder: f(s)("library", "e.g. Bremen photo books"),
                    disabled: !Xr.value,
                    autocomplete: "off"
                  }, null, 8, Af)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  disabled: !Xr.value,
                  title: f(s)("library", "Save current view")
                }, c(f(s)("library", "Save")), 9, kf)
              ], 8, Cf),
              A.value.length > 0 ? (C(), T("nav", {
                key: 0,
                class: "library-saved-collection-links",
                "aria-label": f(s)("library", "Saved custom collections")
              }, [
                (C(!0), T(te, null, ve(A.value, (h) => (C(), T("article", {
                  key: h.id,
                  class: "library-saved-collection-card"
                }, [
                  l("a", {
                    class: "library-saved-collection-link",
                    href: In(h.filters)
                  }, [
                    l("strong", null, c(h.name), 1),
                    l("span", null, c(Number(h.count || 0)) + " " + c(f(s)("library", "items")), 1)
                  ], 8, Of),
                  l("form", {
                    method: "post",
                    action: Zr(h.id),
                    class: "library-saved-collection-delete-form"
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "requesttoken",
                      value: ce.value
                    }, null, 8, Pf),
                    l("button", If, c(f(s)("library", "Delete")), 1)
                  ], 8, Nf)
                ]))), 128))
              ], 8, Rf)) : Y("", !0)
            ])
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
            "data-workspace-panel": "batch",
            "aria-label": f(s)("library", "Batch actions for current results")
          }, [
            l("summary", Df, [
              v[25] || (v[25] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "✓", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
              }, c(f(s)("library", "Batch actions")), 9, Mf),
              l("small", Uf, c(f(s)("library", "Preview and apply changes to current results")), 1),
              l("b", Ff, c(z.value.total) + " " + c(f(s)("library", "Current filter result")), 1)
            ]),
            l("div", Hf, [
              l("form", {
                method: "post",
                action: Me.value,
                class: "library-batch-action-card library-batch-tag-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, jf),
                (C(!0), T(te, null, ve(H.value, (h) => (C(), T("input", {
                  key: h.key,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, Vf))), 128)),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Add tag")), 1),
                  l("input", {
                    type: "text",
                    name: "nextcloudTagName",
                    list: "library-nextcloud-tag-suggestions",
                    placeholder: f(s)("library", "e.g. Review"),
                    autocomplete: "off"
                  }, null, 8, qf)
                ]),
                l("button", {
                  type: "submit",
                  class: "button primary",
                  title: f(s)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                }, c(f(s)("library", "Apply")), 9, Bf)
              ], 8, $f),
              l("form", {
                method: "post",
                action: nt.value,
                class: "library-batch-action-card library-batch-tag-remove-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Wf),
                (C(!0), T(te, null, ve(H.value, (h) => (C(), T("input", {
                  key: `remove-tag-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, Kf))), 128)),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Remove tag")), 1),
                  l("input", {
                    type: "text",
                    name: "nextcloudTagName",
                    list: "library-nextcloud-tag-suggestions",
                    placeholder: f(s)("library", "e.g. Review"),
                    autocomplete: "off"
                  }, null, 8, Gf)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                }, c(f(s)("library", "Remove")), 9, Yf)
              ], 8, zf),
              l("form", {
                method: "post",
                action: dt.value,
                class: "library-batch-action-card library-batch-metadata-reset-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Jf),
                (C(!0), T(te, null, ve(H.value, (h) => (C(), T("input", {
                  key: `reset-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, Zf))), 128)),
                v[26] || (v[26] = l("input", {
                  type: "hidden",
                  name: "scannerConflicts",
                  value: "1"
                }, null, -1)),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                }, c(f(s)("library", "Reset metadata")), 9, Qf)
              ], 8, Xf),
              l("form", {
                method: "post",
                action: Ye.value,
                class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                target: "_blank"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, tp),
                (C(!0), T(te, null, ve(H.value, (h) => (C(), T("input", {
                  key: `edit-preview-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, rp))), 128)),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Field")), 1),
                  l("select", np, [
                    l("option", ap, c(f(s)("library", "Publication type")), 1),
                    l("option", ip, c(f(s)("library", "Subtitle")), 1),
                    l("option", sp, c(f(s)("library", "Creators")), 1),
                    l("option", lp, c(f(s)("library", "Series / periodical")), 1),
                    l("option", op, c(f(s)("library", "Publication date")), 1),
                    l("option", cp, c(f(s)("library", "Language")), 1),
                    l("option", up, c(f(s)("library", "Publisher")), 1),
                    l("option", dp, c(f(s)("library", "Genres")), 1),
                    l("option", fp, c(f(s)("library", "Classifications")), 1)
                  ])
                ]),
                l("label", null, [
                  l("span", null, c(f(s)("library", "Value")), 1),
                  v[27] || (v[27] = l("input", {
                    type: "text",
                    name: "bulkEditValue",
                    placeholder: "magazine, de, photography...",
                    autocomplete: "off"
                  }, null, -1))
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Preview first, then apply from the review page.")
                }, c(f(s)("library", "Preview edit")), 9, pp)
              ], 8, ep),
              l("form", {
                method: "post",
                action: kt.value,
                class: "library-batch-action-card library-batch-cover-refresh-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, mp),
                (C(!0), T(te, null, ve(H.value, (h) => (C(), T("input", {
                  key: `cover-${h.key}`,
                  type: "hidden",
                  name: h.key,
                  value: h.value
                }, null, 8, bp))), 128)),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: f(s)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                }, c(f(s)("library", "Fresh covers")), 9, yp)
              ], 8, hp)
            ])
          ], 8, Lf),
          l("details", gp, [
            l("summary", _p, [
              v[28] || (v[28] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "!", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
              }, c(f(s)("library", "Review queue")), 9, vp),
              l("small", wp, c(f(s)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
              l("b", Sp, c(f(s)("library", "current results")), 1)
            ]),
            l("nav", {
              class: "library-weak-metadata-links",
              "aria-label": f(s)("library", "Weak metadata catalogue views")
            }, [
              (C(!0), T(te, null, ve(Pe.value, (h) => (C(), T("a", {
                key: h.key,
                class: "library-weak-metadata-card",
                href: Jr(h.filters),
                title: f(s)("library", h.description)
              }, [
                l("span", null, [
                  l("strong", null, c(f(s)("library", h.label)), 1)
                ]),
                l("b", null, c(Number(Ir.value[h.key] || 0)), 1)
              ], 8, Cp))), 128))
            ], 8, Ep),
            l("div", Tp, [
              l("article", {
                title: f(s)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
              }, [
                l("h4", null, c(f(s)("library", "Metadata-error queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: at.value.reviewUrl || "?status=metadata_error"
                }, c(f(s)("library", "Open metadata-error rows")), 9, Ap),
                l("a", {
                  class: "button secondary",
                  href: ge.value
                }, c(f(s)("library", "Export metadata-error rows")), 9, kp),
                l("form", {
                  method: "post",
                  action: Me.value,
                  class: "library-review-queue-tag-form"
                }, [
                  l("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Op),
                  v[29] || (v[29] = l("input", {
                    type: "hidden",
                    name: "status",
                    value: "metadata_error"
                  }, null, -1)),
                  v[30] || (v[30] = l("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-metadata-error"
                  }, null, -1)),
                  l("button", Np, c(f(s)("library", "Tag metadata-error rows")), 1)
                ], 8, Rp)
              ], 8, xp),
              l("article", {
                title: f(s)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
              }, [
                l("h4", null, c(f(s)("library", "Scanner-conflict queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: $e.value
                }, c(f(s)("library", "Review scanner conflicts")), 9, Ip),
                l("form", {
                  method: "post",
                  action: Me.value,
                  class: "library-review-queue-tag-form"
                }, [
                  l("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Dp),
                  v[31] || (v[31] = l("input", {
                    type: "hidden",
                    name: "scannerConflicts",
                    value: "1"
                  }, null, -1)),
                  v[32] || (v[32] = l("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-scanner-conflict"
                  }, null, -1)),
                  l("button", Mp, c(f(s)("library", "Tag scanner-conflict rows")), 1)
                ], 8, Lp)
              ], 8, Pp)
            ]),
            it.value.enabled ? (C(), T("section", Up, [
              l("div", Fp, [
                l("p", Hp, c(f(s)("library", "Metadata review workbench")), 1),
                l("h3", {
                  id: "library-metadata-review-workbench-heading",
                  title: f(s)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                }, c(f(s)("library", "Review next conflict")), 9, $p)
              ]),
              it.value.item ? (C(), T("article", jp, [
                l("header", null, [
                  l("strong", null, c(it.value.item.title), 1),
                  l("span", Vp, c(it.value.item.cachedPath), 1)
                ]),
                l("div", qp, [
                  (C(!0), T(te, null, ve(it.value.fields, (h) => (C(), T("article", {
                    key: h.field,
                    class: "library-metadata-review-field"
                  }, [
                    l("h4", null, c(h.field), 1),
                    l("dl", null, [
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "Current value")), 1),
                        l("dd", null, c(h.currentValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "scanner candidate")), 1),
                        l("dd", null, c(h.scannerCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "path-template candidate")), 1),
                        l("dd", null, c(h.pathTemplateCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "sidecar value")), 1),
                        l("dd", null, c(h.sidecarValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "source provenance")), 1),
                        l("dd", null, c(h.sourceProvenance || "—"), 1)
                      ])
                    ]),
                    l("form", {
                      method: "post",
                      action: it.value.item.resetFieldUrl,
                      class: "library-metadata-review-accept-form"
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ce.value
                      }, null, 8, zp),
                      l("input", {
                        type: "hidden",
                        name: "field",
                        value: h.field
                      }, null, 8, Wp),
                      v[33] || (v[33] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("button", Kp, c(f(s)("library", "accept scanner candidate")), 1)
                    ], 8, Bp)
                  ]))), 128))
                ]),
                l("footer", Gp, [
                  l("a", {
                    class: "button secondary",
                    href: it.value.item.detailsUrl
                  }, c(f(s)("library", "Open full details")), 9, Yp),
                  l("a", {
                    class: "button secondary",
                    href: it.value.skipUrl
                  }, c(f(s)("library", "Skip to next conflict")), 9, Xp)
                ])
              ])) : (C(), T("p", Jp, c(f(s)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
              l("a", {
                class: "button secondary",
                href: it.value.reviewNextUrl
              }, c(f(s)("library", "Review next conflict")), 9, Zp)
            ])) : Y("", !0)
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--admin",
            "data-workspace-panel": "admin",
            onToggle: hr
          }, [
            l("summary", Qp, [
              v[34] || (v[34] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: f(s)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
              }, c(f(s)("library", "Admin tools")), 9, eh),
              l("small", th, c(f(s)("library", "Roots, scans, exports and repair operations")), 1),
              l("b", rh, c(f(s)("library", "all enabled roots")), 1)
            ]),
            l("div", nh, [
              l("a", {
                href: V.value,
                class: "button secondary",
                "aria-label": "Open Library settings"
              }, c(f(s)("library", "Settings")), 9, ah),
              De.value ? (C(), T("a", {
                key: 0,
                href: De.value,
                class: "button secondary",
                "aria-label": "Export corrected metadata"
              }, c(f(s)("library", "Export corrected metadata")), 9, ih)) : Y("", !0),
              Ne.value ? (C(), T("a", {
                key: 1,
                href: Ne.value,
                class: "button secondary",
                "aria-label": "Export sidecar manifest"
              }, c(f(s)("library", "Sidecar manifest")), 9, sh)) : Y("", !0),
              Be.value ? (C(), T("a", {
                key: 2,
                href: Be.value,
                class: "button secondary",
                "aria-label": "Export sidecar ZIP"
              }, c(f(s)("library", "Sidecar ZIP")), 9, lh)) : Y("", !0)
            ]),
            l("div", oh, [
              l("p", ch, c(f(s)("library", "Import health")), 1),
              l("h3", {
                title: f(s)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
              }, c(f(s)("library", "Metadata overview")), 9, uh),
              _e.loading ? (C(), T("p", dh, c(f(s)("library", "Loading cached metadata overview…")), 1)) : _e.error ? (C(), T("p", fh, c(_e.error), 1)) : _e.loaded ? Y("", !0) : (C(), T("p", ph, c(f(s)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
              _e.loaded ? (C(), T(te, { key: 3 }, [
                Re.value.message ? (C(), T("p", hh, c(Re.value.message), 1)) : Re.value.cacheStatus === "missing" ? (C(), T("p", mh, c(f(s)("library", "No cached metadata overview exists yet")), 1)) : Y("", !0),
                We.value ? (C(), T("p", bh, c(f(s)("library", "Last generated")) + ": " + c(We.value), 1)) : Y("", !0),
                l("button", {
                  type: "button",
                  class: "button secondary library-import-health-refresh",
                  disabled: _e.refreshing,
                  onClick: Yr
                }, c(_e.refreshing ? f(s)("library", "Refreshing metadata overview…") : f(s)("library", "Refresh metadata overview")), 9, yh),
                l("div", gh, [
                  l("a", {
                    class: "button secondary",
                    href: at.value.reviewUrl || "?status=metadata_error"
                  }, c(f(s)("library", "Review metadata errors")), 9, _h),
                  l("a", {
                    class: "button secondary",
                    href: Ue.value
                  }, c(f(s)("library", "Full review")), 9, vh),
                  l("a", {
                    class: "button secondary",
                    href: ge.value
                  }, c(f(s)("library", "Export TSV")), 9, wh),
                  l("a", {
                    class: "button secondary",
                    href: pe.value
                  }, c(f(s)("library", "Probe covers")), 9, Sh)
                ]),
                l("div", Eh, [
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Metadata errors")), 1),
                    l("p", Ch, c(at.value.total || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Archive/container check")), 1),
                    l("p", Th, c(me.value.mismatches || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Cover health")), 1),
                    l("p", xh, c(Jt.value.note), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Cover support matrix")), 1),
                    l("p", Ah, c(f(s)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                  ]),
                  at.value.examples?.length ? (C(), T("details", kh, [
                    l("summary", null, c(f(s)("library", "Example files and suggested actions")), 1),
                    l("ul", null, [
                      (C(!0), T(te, null, ve(at.value.examples, (h) => (C(), T("li", {
                        key: `${h.fileId}-${h.path}`
                      }, [
                        l("code", null, c(h.path), 1),
                        l("span", null, c(h.scanStatus) + " · " + c(h.scanError) + " · " + c(h.actualContainerType), 1),
                        l("strong", null, c(h.suggestedRepairAction), 1)
                      ]))), 128))
                    ])
                  ])) : Y("", !0)
                ])
              ], 64)) : Y("", !0)
            ])
          ], 32)
        ], 8, ed),
        l("div", Rh, [
          l("div", null, [
            vt.value ? (C(), T("p", Oh, c(m.value), 1)) : Y("", !0),
            l("h2", Nh, c(Nt.value), 1)
          ])
        ]),
        L.value ? (C(), T("p", Ph, c(L.value), 1)) : Y("", !0),
        U.value ? (C(), T("p", Ih, c(U.value), 1)) : Y("", !0),
        vt.value ? (C(), T("section", Lh, [
          l("p", Dh, c(m.value), 1),
          l("h3", {
            id: "library-discovery-heading",
            title: _t.value ? f(s)("library", "Items by this creator, sorted by publication context when available.") : gt.value ? f(s)("library", "Items from this publication year, sorted by publication date when available.") : f(s)("library", "Items in this publication, sorted by issue/date context when available.")
          }, c(ft.value), 9, Mh),
          l("div", Uh, [
            l("span", null, c(z.value.total) + " " + c(f(s)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), T("span", Fh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            E.value?.datedCount ? (C(), T("span", Hh, c(E.value.datedCount) + " " + c(f(s)("library", "dated")), 1)) : Y("", !0),
            E.value?.undatedCount > 0 ? (C(), T("span", $h, c(E.value.undatedCount) + " " + c(f(s)("library", "undated")), 1)) : Y("", !0)
          ]),
          je.value && E.value ? (C(), T("aside", jh, [
            l("strong", null, c(f(s)("library", "Publication contents")), 1),
            l("span", null, c(E.value.itemCount) + " " + c(f(s)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), T("span", Vh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            l("span", null, c(E.value.datedCount) + " " + c(f(s)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), T("span", qh, c(E.value.undatedCount) + " " + c(f(s)("library", "without dates yet")), 1)) : Y("", !0),
            l("span", null, c(f(s)("library", "read-only grouping")), 1)
          ])) : Y("", !0),
          je.value && E.value?.issueGroups?.length ? (C(), T("section", Bh, [
            l("div", null, [
              l("p", zh, c(f(s)("library", "Issue order")), 1),
              l("h4", {
                id: "library-publication-issue-groups-heading",
                title: f(s)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
              }, c(f(s)("library", "Read-only issue/date grouping")), 9, Wh)
            ]),
            l("div", Kh, [
              (C(!0), T(te, null, ve(E.value.issueGroups, (h) => (C(), T("a", {
                key: `strip-${h.label}`,
                class: "library-issue-strip-card",
                href: h.items?.[0]?.detailsUrl || "#"
              }, [
                l("span", null, c(h.label), 1),
                l("strong", null, c(h.items?.[0]?.issueLabel || f(s)("library", "Issue")), 1),
                l("small", null, c(h.items?.length || 0) + " " + c(f(s)("library", "items")), 1)
              ], 8, Gh))), 128))
            ]),
            E.value.gapRanges?.length ? (C(), T("p", Yh, c(f(s)("library", "Gap")) + ": " + c(E.value.gapRanges.join(", ")), 1)) : Y("", !0),
            (C(!0), T(te, null, ve(E.value.issueGroups, (h) => (C(), T("div", {
              key: h.label,
              class: "library-publication-issue-group"
            }, [
              l("h5", null, c(h.label), 1),
              l("ol", null, [
                (C(!0), T(te, null, ve(h.items, (J, Oe) => (C(), T("li", {
                  key: J.itemId
                }, [
                  l("span", Xh, c(J.issueLabel), 1),
                  l("a", {
                    href: J.detailsUrl || "#"
                  }, c(J.title), 9, Jh),
                  l("small", null, [
                    be(c(J.publicationType), 1),
                    J.publicationDate ? (C(), T(te, { key: 0 }, [
                      be(" · " + c(J.publicationDate), 1)
                    ], 64)) : Y("", !0)
                  ]),
                  l("small", Zh, [
                    Oe > 0 ? (C(), T(te, { key: 0 }, [
                      be(c(f(s)("library", "Previous issue")), 1)
                    ], 64)) : Y("", !0),
                    Oe > 0 && Oe < h.items.length - 1 ? (C(), T(te, { key: 1 }, [
                      be(" · ")
                    ], 64)) : Y("", !0),
                    Oe < h.items.length - 1 ? (C(), T(te, { key: 2 }, [
                      be(c(f(s)("library", "Next issue")), 1)
                    ], 64)) : Y("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            E.value.unknownIssueItems?.length ? (C(), T("details", Qh, [
              l("summary", {
                title: f(s)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
              }, c(f(s)("library", "Unknown issue/date")) + " · " + c(E.value.unknownIssueItems.length), 9, em)
            ])) : Y("", !0)
          ])) : Y("", !0),
          l("p", null, [
            l("a", tm, c(f(s)("library", "Back to full catalogue")), 1)
          ])
        ])) : Y("", !0),
        l("nav", rm, [
          l("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: Lt({ active: G.value === "compact" }),
            "aria-pressed": G.value === "compact" ? "true" : "false",
            onClick: v[17] || (v[17] = (h) => qt("compact"))
          }, c(f(s)("library", "Compact")), 11, nm),
          l("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Lt({ active: G.value === "gallery" }),
            "aria-pressed": G.value === "gallery" ? "true" : "false",
            onClick: v[18] || (v[18] = (h) => qt("gallery"))
          }, c(f(s)("library", "Gallery")), 11, am),
          l("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Lt({ active: G.value === "shelf" }),
            "aria-pressed": G.value === "shelf" ? "true" : "false",
            onClick: v[19] || (v[19] = (h) => qt("shelf"))
          }, c(f(s)("library", "Shelf")), 11, im)
        ]),
        l("div", sm, [
          l("p", lm, [
            be(c(f(s)("library", "Showing")) + " " + c(z.value.from) + "–" + c(z.value.to) + " " + c(f(s)("library", "of")) + " " + c(z.value.total) + " " + c(f(s)("library", "catalogue items")), 1),
            N.value.length > 0 ? (C(), T("span", om, [
              v[35] || (v[35] = be(" · ", -1)),
              l("a", cm, c(f(s)("library", "Clear all filters")), 1)
            ])) : Y("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": f(s)("library", "Catalogue pagination")
          }, [
            l("span", dm, [
              be(c(f(s)("library", "Page")) + " " + c(z.value.page), 1),
              z.value.total > 0 ? (C(), T("span", fm, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
            ]),
            z.value.previousUrl ? (C(), T("a", {
              key: 0,
              href: z.value.previousUrl
            }, c(f(s)("library", "Previous")), 9, pm)) : (C(), T("span", hm, c(f(s)("library", "Previous")), 1)),
            z.value.nextUrl ? (C(), T("a", {
              key: 2,
              href: z.value.nextUrl
            }, c(f(s)("library", "Next")), 9, mm)) : (C(), T("span", bm, c(f(s)("library", "Next")), 1))
          ], 8, um)
        ]),
        N.value.length > 0 ? (C(), T("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": f(s)("library", "Active filters")
        }, [
          l("span", null, c(f(s)("library", "Active filters")), 1),
          (C(!0), T(te, null, ve(N.value, (h) => (C(), T("a", {
            key: h.key,
            href: Pr(h.key),
            class: "library-filter-chip",
            "aria-label": `${f(s)("library", "Remove filter")}: ${h.label}`
          }, [
            l("strong", null, c(h.label) + ":", 1),
            be(" " + c(h.value) + " ", 1),
            v[36] || (v[36] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, gm))), 128))
        ], 8, ym)) : Y("", !0),
        o.value.length === 0 ? (C(), T("div", {
          key: 4,
          class: Lt(["library-empty-content", { "library-first-run-guidance": R.value || x.value, "library-filter-empty-state": k.value && !R.value && !x.value }]),
          role: "status"
        }, [
          R.value ? (C(), T(te, { key: 0 }, [
            l("h3", {
              title: f(s)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
            }, c(f(s)("library", "Start with one Library root")), 9, _m),
            l("p", vm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(f(s)("library", "Add a Library root")), 9, wm),
              l("span", Sm, c(f(s)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : x.value ? (C(), T(te, { key: 1 }, [
            l("h3", {
              title: f(s)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
            }, c(f(s)("library", "No enabled Library roots")), 9, Em),
            l("p", Cm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(f(s)("library", "Open Library settings")), 9, Tm)
            ])
          ], 64)) : k.value ? (C(), T(te, { key: 2 }, [
            l("h3", {
              title: f(s)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
            }, c(f(s)("library", "No matches for the current filters")), 9, xm),
            l("p", Am, [
              l("a", {
                href: Nn(),
                class: "button secondary"
              }, c(f(s)("library", "Clear search")), 9, km),
              l("a", Rm, c(f(s)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), T(te, { key: 3 }, [
            l("h3", {
              title: f(s)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
            }, c(f(s)("library", "No catalogue items yet")), 9, Om),
            l("p", Nm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(f(s)("library", "Run a scan from settings")), 9, Pm)
            ])
          ], 64))
        ], 2)) : (C(), T("div", {
          key: 5,
          class: Lt(["library-cover-gallery", ae.value])
        }, [
          (C(!0), T(te, null, ve(o.value, (h) => (C(), T("article", {
            key: h.id,
            class: Lt(["library-cover-card", { "library-cover-card--open": ee[h.id], "library-cover-card--cover-loaded": pt(h) === "loaded", "library-cover-card--cover-error": pt(h) === "error" }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              l("span", Lm, [
                pt(h) === "loading" ? (C(), T("span", Dm)) : Y("", !0),
                l("img", {
                  class: Lt(["library-cover-image", { "library-cover-image--loaded": pt(h) === "loaded" }]),
                  src: h.coverUrl,
                  alt: `Cover for ${h.title}`,
                  loading: "lazy",
                  onLoad: (J) => Ln(h),
                  onError: (J) => Lr(h)
                }, null, 42, Mm),
                pt(h) === "error" ? (C(), T("span", Um, c(f(s)("library", "Cover unavailable")), 1)) : Y("", !0)
              ])
            ], 8, Im),
            l("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: Vn((J) => nn(h, J), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Hm),
              v[37] || (v[37] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, $m),
              l("button", {
                type: "submit",
                class: Lt(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? f(s)("library", "Unstar this publication") : f(s)("library", "Star this publication"),
                "aria-label": h.starred ? f(s)("library", "Unstar this publication") : f(s)("library", "Star this publication"),
                onClick: Vn((J) => nn(h, J), ["prevent"])
              }, c(h.starred ? "★" : "☆"), 11, jm)
            ], 40, Fm),
            l("div", Vm, [
              l("div", qm, [
                l("h3", null, [
                  h.starred ? (C(), T("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": f(s)("library", "Starred")
                  }, "★", 8, Bm)) : Y("", !0),
                  be(c(h.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, c(f(s)("library", "Read")), 9, zm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (J) => er(h.id, J)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${f(s)("library", "Show details and actions")}: ${h.title}`
                }, c(f(s)("library", "Details")), 9, Km),
                l("div", Gm, [
                  h.creators ? (C(), T("p", Ym, c(h.creators), 1)) : Y("", !0),
                  l("dl", Xm, [
                    l("div", Jm, [
                      l("dt", null, c(f(s)("library", "Type")), 1),
                      l("dd", null, c(h.publicationType), 1)
                    ]),
                    h.publication ? (C(), T("div", Zm, [
                      l("dt", null, c(f(s)("library", "Series")), 1),
                      l("dd", null, c(h.publication), 1)
                    ])) : Y("", !0),
                    h.publicationDate ? (C(), T("div", Qm, [
                      l("dt", null, c(f(s)("library", "Date")), 1),
                      l("dd", null, c(h.publicationDate), 1)
                    ])) : Y("", !0),
                    h.workflowStatus ? (C(), T("div", eb, [
                      l("dt", null, c(f(s)("library", "Status")), 1),
                      l("dd", null, c(h.workflowStatus), 1)
                    ])) : Y("", !0),
                    h.hasScannerConflict ? (C(), T("div", tb, [
                      l("dt", null, c(f(s)("library", "Review")), 1),
                      l("dd", null, c(h.scannerConflictCount) + " fields", 1)
                    ])) : Y("", !0),
                    h.lastOpenedAt ? (C(), T("div", rb, [
                      l("dt", null, c(f(s)("library", "Last opened")), 1),
                      l("dd", null, c(h.lastOpenedAt), 1)
                    ])) : Y("", !0),
                    h.extension ? (C(), T("div", nb, [
                      l("dt", null, c(f(s)("library", "Format")) + ":", 1),
                      l("dd", null, c(Qr(h.extension)), 1)
                    ])) : Y("", !0),
                    h.shelf ? (C(), T("div", ab, [
                      l("dt", null, c(f(s)("library", "Shelf")), 1),
                      l("dd", null, c(h.shelf), 1)
                    ])) : Y("", !0)
                  ]),
                  h.description ? (C(), T("p", ib, c(h.description), 1)) : Y("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (C(), T("p", sb, [
                    be(" scanStatus: " + c(h.scanStatus || "unknown"), 1),
                    h.scanError ? (C(), T("span", lb, " · scanError: " + c(h.scanError), 1)) : Y("", !0)
                  ])) : Y("", !0),
                  l("div", ob, [
                    en(h).length === 0 ? (C(), T("span", cb, "No Nextcloud tags")) : (C(!0), T(te, { key: 1 }, ve(en(h), (J) => (C(), T("span", {
                      key: J.id,
                      class: "library-tag"
                    }, c(J.name), 1))), 128))
                  ]),
                  l("p", ub, [
                    l("a", {
                      href: h.filesUrl
                    }, c(f(s)("library", "Show in Files")), 9, db),
                    v[38] || (v[38] = be(" · ", -1)),
                    l("a", {
                      href: h.downloadUrl
                    }, c(f(s)("library", "Download source")), 9, fb),
                    v[39] || (v[39] = be(" · ", -1)),
                    l("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (J) => Ht(h)
                    }, c(f(s)("library", "Details drawer")), 9, pb),
                    v[40] || (v[40] = be(" · ", -1)),
                    l("a", {
                      href: h.detailsUrl
                    }, c(f(s)("library", "Details")), 9, hb)
                  ])
                ])
              ], 40, Wm)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (C(), T("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": f(s)("library", "Catalogue pagination")
        }, [
          l("span", bb, [
            be(c(f(s)("library", "Page")) + " " + c(z.value.page), 1),
            z.value.total > 0 ? (C(), T("span", yb, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
          ]),
          z.value.previousUrl ? (C(), T("a", {
            key: 0,
            href: z.value.previousUrl
          }, c(f(s)("library", "Previous")), 9, gb)) : (C(), T("span", _b, c(f(s)("library", "Previous")), 1)),
          z.value.nextUrl ? (C(), T("a", {
            key: 2,
            href: z.value.nextUrl
          }, c(f(s)("library", "Next")), 9, vb)) : (C(), T("span", wb, c(f(s)("library", "Next")), 1))
        ], 8, mb)) : Y("", !0),
        re.value ? (C(), T("div", {
          key: 7,
          class: "library-detail-drawer-backdrop",
          onClick: $t,
          "aria-hidden": "true"
        })) : Y("", !0),
        re.value ? (C(), T("aside", Sb, [
          l("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: $t
          }, "×"),
          l("p", Eb, c(f(s)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
          l("img", {
            class: "library-detail-drawer-cover",
            src: re.value.coverUrl,
            alt: `Cover for ${re.value.title}`,
            loading: "lazy"
          }, null, 8, Cb),
          l("p", Tb, c(re.value.publicationType || f(s)("library", "Publication")), 1),
          l("h3", xb, c(re.value.title), 1),
          re.value.creators ? (C(), T("p", Ab, c(re.value.creators), 1)) : Y("", !0),
          re.value.description ? (C(), T("p", kb, c(re.value.description), 1)) : Y("", !0),
          l("dl", Rb, [
            re.value.publication ? (C(), T("div", Ob, [
              l("dt", null, c(f(s)("library", "Series")), 1),
              l("dd", null, c(re.value.publication), 1)
            ])) : Y("", !0),
            re.value.publicationDate ? (C(), T("div", Nb, [
              l("dt", null, c(f(s)("library", "Date")), 1),
              l("dd", null, c(re.value.publicationDate), 1)
            ])) : Y("", !0),
            re.value.shelf ? (C(), T("div", Pb, [
              l("dt", null, c(f(s)("library", "Shelf")), 1),
              l("dd", null, c(re.value.shelf), 1)
            ])) : Y("", !0)
          ]),
          l("p", Ib, [
            l("a", {
              class: "button primary",
              href: re.value.openUrl
            }, c(f(s)("library", "Read")), 9, Lb),
            l("a", {
              class: "button secondary",
              href: re.value.detailsUrl
            }, c(f(s)("library", "View full details")), 9, Db)
          ]),
          l("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": f(s)("library", "Browse neighbouring items")
          }, [
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !Xe.value,
              onClick: v[20] || (v[20] = (h) => Pt(Xe.value))
            }, c(f(s)("library", "Previous issue")), 9, Ub),
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !wt.value,
              onClick: v[21] || (v[21] = (h) => Pt(wt.value))
            }, c(f(s)("library", "Next issue")), 9, Fb)
          ], 8, Mb)
        ])) : Y("", !0)
      ])
    ]));
  }
}, Ss = fu("library", "catalogue", {}), Kn = document.querySelector("#library-vue-root"), Es = {
  ...Ss,
  requestToken: Kn?.dataset.requestToken || Ss.requestToken || ""
};
function Z(e) {
  return String(e ?? "");
}
function Ul(e) {
  return Z(e).toUpperCase();
}
function $b(e, t, r, n = Z) {
  for (const a of t) {
    const i = document.createElement("option");
    i.value = Z(a), i.textContent = n(a), Z(a) === Z(r) && (i.selected = !0), e.appendChild(i);
  }
}
function Cs(e, t, r, n, a = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = Z(n), o.placeholder = a, i.appendChild(o), e.appendChild(i);
}
function Hr(e, t, r, n, a, i, o = Z) {
  const u = document.createElement("label");
  u.textContent = t;
  const p = document.createElement("select");
  p.name = r;
  const w = document.createElement("option");
  w.value = "", w.textContent = a, p.appendChild(w), $b(p, i, n, o), u.appendChild(p), e.appendChild(u);
}
function $r(e) {
  const t = Z(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function jb(e, t = {}) {
  return Z(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Z(e || t?.publication || ""))}`);
}
function Vb(e) {
  return Z(e.discoveryPage) === "publication";
}
function qb(e, t = {}) {
  return Z(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Z(e))}`);
}
function Ba(e) {
  return Z(e.discoveryPage) === "year";
}
function Bb(e, t = {}) {
  return Z(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Z(e))}`);
}
function za(e) {
  return Z(e.discoveryPage) === "creator";
}
function zb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Z(n).trim() !== "");
}
function Wb() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function un(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function Kb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Gb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", s("library", "Catalogue search and filters")), Cs(n, s("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Hr(n, s("library", "Type"), "type", r.type, s("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Cs(n, s("library", "Nextcloud tag"), "tag", r.tag, "photography"), Hr(n, s("library", "Format"), "format", r.format, s("library", "All formats"), e.formats || [], Ul), Hr(n, s("library", "Shelf"), "shelf", r.shelf, s("library", "All shelves"), e.shelves || []), Hr(n, s("library", "Scan status"), "status", r.status, s("library", "All scan statuses"), e.scanStatuses || []), Hr(n, s("library", "Sort"), "sort", r.sort || "title", s("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Hr(n, s("library", "Page size"), "limit", t.limit || 100, s("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", s("library", "Apply catalogue filters")), a.textContent = s("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", s("library", "Clear catalogue filters")), i.textContent = s("library", "Clear"), n.append(a, i), n;
}
function Yb() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", i = document.createElement("p");
  return i.className = "library-notice library-batch-metadata-apply-result", i.textContent = s("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${a} skipped.`), i;
}
function Xb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", s("library", "Quick catalogue filters"));
  let a = null;
  const i = () => {
    window.clearTimeout(a), a = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || Z(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = Z(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = s("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = Z(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", i), o.appendChild(u), n.appendChild(o);
  const p = [
    [s("library", "Sort"), "sort", r.sort || "title", [["title", s("library", "Title")], ["recent", s("library", "Recently added")], ["publicationDate", s("library", "Publication date")], ["publication", s("library", "Series")], ["lastOpened", s("library", "Recently opened")], ["format", s("library", "Format")]]],
    [s("library", "Starred"), "starred", r.starred || "", [["", s("library", "All")], ["1", s("library", "Starred")]]],
    [s("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, I, j, se] of p) {
    const K = document.createElement("label");
    K.textContent = E;
    const ue = document.createElement("select");
    ue.name = I;
    for (const [le, z] of se) {
      const M = document.createElement("option");
      M.value = Z(le), M.textContent = Z(z), Z(le) === Z(j) && (M.selected = !0), ue.appendChild(M);
    }
    ue.addEventListener("change", () => n.requestSubmit()), K.appendChild(ue), n.appendChild(K);
  }
  const w = document.createElement("button");
  w.type = "submit", w.className = "button primary", w.setAttribute("aria-label", s("library", "Apply catalogue filters")), w.textContent = s("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", s("library", "Clear catalogue filters")), y.textContent = s("library", "Clear all"), n.append(w, y), n;
}
function Jb(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, a = Z(e.settingsUrl || ""), i = Z(e.metadataExportUrl || ""), o = Z(e.batchTagUrl || "/apps/library/bulk/tags"), u = Z(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), p = Z(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), w = Z(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Z(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const se = document.createElement("div"), K = document.createElement("h2");
  K.id = "library-catalogue-heading", K.textContent = s("library", "Library");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = s("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), se.append(K, ue);
  const le = document.createElement("nav");
  if (le.className = "library-catalogue-toolbar", le.setAttribute("aria-label", s("library", "Library actions")), a) {
    const N = document.createElement("a");
    N.href = a, N.className = "button secondary", N.setAttribute("aria-label", "Open Library settings"), N.textContent = s("library", "Settings"), le.appendChild(N);
  }
  if (i) {
    const N = document.createElement("a");
    N.href = i, N.className = "button secondary", N.setAttribute("aria-label", "Export corrected metadata"), N.textContent = s("library", "Export corrected metadata"), le.appendChild(N);
  }
  if (e.metadataSidecarManifestUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarManifestUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar manifest"), N.textContent = s("library", "Sidecar manifest"), le.appendChild(N);
  }
  if (e.metadataSidecarBundleUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarBundleUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar ZIP"), N.textContent = s("library", "Sidecar ZIP"), le.appendChild(N);
  }
  j.append(se, le), I.appendChild(j);
  const z = Yb();
  z && I.appendChild(z), I.appendChild(Xb(e, n));
  const M = document.createElement("details");
  M.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = s("library", "Show catalogue filters"), M.append(V, Gb(e, n)), I.appendChild(M), Vb(e) || Ba(e) || za(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = za(e) ? s("library", "Creator") : Ba(e) ? s("library", "Publication year") : s("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = Z(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const ee = document.createElement("p");
    ee.className = "library-muted", ee.textContent = `${n.total ?? r.length} ${za(e) ? s("library", "items by this creator. Sorted by publication context when available.") : Ba(e) ? s("library", "items from this publication year. Sorted by publication date when available.") : s("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const oe = document.createElement("a");
    oe.href = "/apps/library/", oe.className = "button secondary", oe.textContent = s("library", "Back to full catalogue"), N.append(P, H, ee, oe), I.appendChild(N);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const De = document.createElement("a");
  De.href = "?", De.textContent = ` ${s("library", "Clear all filters")}`, ce.appendChild(De), I.appendChild(ce);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const Be = document.createElement("summary");
  Be.textContent = `${s("library", "Batch actions for current results")} (${n.total ?? r.length} ${s("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const Me = $r(e);
  Me && Ee.appendChild(Me);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Z(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Z(P), Ee.appendChild(H);
  }
  const nt = document.createElement("label");
  nt.textContent = s("library", "Apply Nextcloud tag to current results");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "nextcloudTagName", dt.placeholder = "batch-review", nt.appendChild(dt);
  const Ye = document.createElement("button");
  Ye.type = "submit", Ye.className = "button secondary", Ye.textContent = s("library", "Apply Nextcloud tag to current results");
  const kt = document.createElement("p");
  kt.className = "library-muted", kt.textContent = s("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(nt, Ye, kt);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = u, $e.className = "library-batch-tag-remove-form";
  const Ue = $r(e);
  Ue && $e.appendChild(Ue);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Z(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Z(P), $e.appendChild(H);
  }
  const ge = document.createElement("label");
  ge.textContent = s("library", "Nextcloud tag");
  const pe = document.createElement("input");
  pe.type = "text", pe.name = "nextcloudTagName", pe.setAttribute("list", "library-nextcloud-tag-suggestions"), pe.placeholder = s("library", "e.g. Review"), pe.autocomplete = "off", ge.appendChild(pe);
  const ze = document.createElement("button");
  ze.type = "submit", ze.className = "button secondary", ze.textContent = s("library", "Remove tag from current results");
  const _e = document.createElement("p");
  _e.className = "library-muted", _e.textContent = s("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), $e.append(ge, ze, _e);
  const Re = document.createElement("form");
  Re.method = "post", Re.action = p, Re.className = "library-batch-metadata-reset-form";
  const We = $r(e);
  We && Re.appendChild(We);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Z(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Z(P), Re.appendChild(H);
  }
  const at = document.createElement("input");
  at.type = "hidden", at.name = "scannerConflicts", at.value = "1";
  const me = document.createElement("button");
  me.type = "submit", me.className = "button secondary", me.textContent = s("library", "Reset filtered metadata");
  const Jt = document.createElement("p");
  Jt.className = "library-muted", Jt.textContent = s("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Re.append(at, me, Jt);
  const je = document.createElement("form");
  je.method = "post", je.action = w, je.className = "library-batch-metadata-edit-preview-form", je.target = "_blank";
  const gt = $r(e);
  gt && je.appendChild(gt);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Z(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Z(P), je.appendChild(H);
  }
  const _t = document.createElement("label");
  _t.textContent = s("library", "Metadata field");
  const vt = document.createElement("select");
  vt.name = "bulkEditField";
  for (const [N, P] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = N, H.textContent = s("library", P), vt.appendChild(H);
  }
  _t.appendChild(vt);
  const ft = document.createElement("label");
  ft.textContent = s("library", "Preview value");
  const Nt = document.createElement("input");
  Nt.type = "text", Nt.name = "bulkEditValue", Nt.placeholder = "magazine, de, photography...", Nt.autocomplete = "off", ft.appendChild(Nt);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = s("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = s("library", "Preview first, then apply from the review page."), je.append(_t, ft, m, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const R = $r(e);
  R && _.appendChild(R);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Z(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = Z(P), _.appendChild(H);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = s("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = s("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(x, k), Ne.append(Be, Ee, $e, Re, je, _), I.appendChild(Ne);
  const D = document.createElement("nav");
  D.className = "library-pagination", D.setAttribute("aria-label", s("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, D.appendChild(U), I.appendChild(D);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], A = document.createElement("details");
  A.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const X = document.createElement("summary");
  X.className = "library-periodical-groups-summary", X.textContent = s("library", "Show top series and periodicals"), A.appendChild(X);
  const $ = document.createElement("h3");
  $.textContent = L.length > 0 ? s("library", "Top series and periodicals") : s("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = L.length > 0 ? s("library", "Jump into recurring publications with one click.") : s("library", "Add publication or series names in item details to build this shortcut panel."), A.append($, W), L.length > 0) {
    const N = document.createElement("ul");
    for (const P of L) {
      const H = document.createElement("li"), ee = document.createElement("a");
      ee.href = jb(P.publication, P), ee.textContent = Z(P.publication);
      const oe = document.createElement("span");
      oe.className = "library-muted", oe.textContent = `${P.itemCount} items`, H.append(ee, oe), N.appendChild(H);
    }
    A.appendChild(N);
  }
  I.appendChild(A);
  const G = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (G.length > 0) {
    const N = document.createElement("details");
    N.className = "library-year-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = s("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = s("library", "Top publication years");
    const ee = document.createElement("p");
    ee.className = "library-muted", ee.textContent = s("library", "Jump into dated books, magazines, journals and comics by year.");
    const oe = document.createElement("ul");
    for (const he of G) {
      const fe = document.createElement("li"), Fe = document.createElement("a");
      Fe.href = qb(he, e), Fe.textContent = Z(he), fe.appendChild(Fe), oe.appendChild(fe);
    }
    N.append(P, H, ee, oe), I.appendChild(N);
  }
  const ae = Array.isArray(e.creators) ? e.creators : [];
  if (ae.length > 0) {
    const N = document.createElement("details");
    N.className = "library-creator-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = s("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = s("library", "Top creators");
    const ee = document.createElement("p");
    ee.className = "library-muted", ee.textContent = s("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const oe = document.createElement("ul");
    for (const he of ae) {
      const fe = document.createElement("li"), Fe = document.createElement("a");
      Fe.href = Bb(he, e), Fe.textContent = Z(he), fe.appendChild(Fe), oe.appendChild(fe);
    }
    N.append(P, H, ee, oe), I.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), ee = zb(e);
    N.className = "library-empty-content", (P === 0 || H === 0) && N.classList.add("library-first-run-guidance"), ee && P > 0 && H > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const oe = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", P === 0 ? (oe.textContent = s("library", "Start with one Library root"), he.textContent = s("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), un(fe, a, "button primary", s("library", "Add a Library root")), Kb(fe, s("library", "Run a scan after saving a root"))) : H === 0 ? (oe.textContent = s("library", "No enabled Library roots"), he.textContent = s("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), un(fe, a, "button primary", s("library", "Open Library settings"))) : ee ? (oe.textContent = s("library", "No matches for the current filters"), he.textContent = s("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), un(fe, Wb(), "button secondary", s("library", "Clear search")), un(fe, "?", "button primary", s("library", "Clear all filters"))) : (oe.textContent = s("library", "No catalogue items yet"), he.textContent = s("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), un(fe, a, "button primary", s("library", "Run a scan from settings"))), N.append(oe, he, fe), I.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const P of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const ee = document.createElement("a");
      ee.className = "library-cover-link", ee.href = Z(P.openUrl || "#"), ee.setAttribute("aria-label", `Read ${Z(P.title || "publication")}`);
      const oe = document.createElement("img");
      oe.className = "library-cover-image", oe.src = Z(P.coverUrl || ""), oe.alt = `Cover for ${Z(P.title || "publication")}`, oe.loading = "lazy", ee.appendChild(oe);
      const he = $r(e), fe = document.createElement("form");
      fe.method = "post", fe.action = Z(P.starUrl || ""), fe.className = "library-cover-star-form", he && fe.appendChild(he);
      const Fe = document.createElement("input");
      Fe.type = "hidden", Fe.name = "returnTo", Fe.value = "catalogue";
      const re = document.createElement("input");
      re.type = "hidden", re.name = "starred", re.value = P.starred ? "0" : "1";
      const Te = document.createElement("button");
      Te.type = "submit", Te.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Te.setAttribute("aria-pressed", P.starred ? "true" : "false"), Te.setAttribute("aria-label", P.starred ? s("library", "Unstar this publication") : s("library", "Star this publication")), Te.title = P.starred ? s("library", "Unstar this publication") : s("library", "Star this publication"), Te.textContent = P.starred ? "★" : "☆", fe.append(Fe, re, Te);
      const Xe = document.createElement("div");
      Xe.className = "library-cover-summary";
      const wt = document.createElement("h3");
      if (wt.textContent = Z(P.title || "Untitled publication"), Xe.appendChild(wt), P.creators) {
        const Ke = document.createElement("p");
        Ke.className = "library-creator", Ke.textContent = Z(P.creators), Xe.appendChild(Ke);
      }
      const Zt = document.createElement("dl");
      Zt.className = "library-cover-detail-list";
      const it = [
        ["Type", Z(P.publicationType || "other")],
        ["Format", P.extension ? Ul(P.extension) : ""],
        ["Shelf", P.shelf ? Z(P.shelf) : ""]
      ].filter(([, Ke]) => Ke !== "");
      for (const [Ke, pr] of it) {
        const jt = document.createElement("div");
        jt.className = "library-cover-detail-chip";
        const Qt = document.createElement("dt");
        Qt.textContent = Ke;
        const Ze = document.createElement("dd");
        Ze.textContent = pr, jt.append(Qt, Ze), Zt.appendChild(jt);
      }
      Xe.appendChild(Zt);
      const St = document.createElement("p"), Et = document.createElement("a");
      Et.href = Z(P.openUrl || "#"), Et.textContent = s("library", "Read");
      const Ht = document.createElement("a");
      Ht.href = Z(P.filesUrl || "#"), Ht.textContent = s("library", "Show in Files");
      const $t = document.createElement("a");
      $t.href = Z(P.downloadUrl || "#"), $t.textContent = s("library", "Download source");
      const Pt = document.createElement("a");
      Pt.href = Z(P.detailsUrl || "#"), Pt.textContent = s("library", "Details"), St.append(Et, document.createTextNode(" · "), Ht, document.createTextNode(" · "), $t, document.createTextNode(" · "), Pt), Xe.appendChild(St), H.append(ee, fe, Xe), N.appendChild(H);
    }
    I.appendChild(N);
  }
  return E.appendChild(I), E;
}
if (Kn)
  try {
    cu(Hb, { state: Es }).mount(Kn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Kn.replaceChildren(Jb(Es));
  }
//# sourceMappingURL=library-main.mjs.map
