// @__NO_SIDE_EFFECTS__
function oi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, Zr = [], Zt = () => {
}, Ts = () => !1, sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), la = (e) => e.startsWith("onUpdate:"), tt = Object.assign, ci = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), ne = Array.isArray, Cr = (e) => An(e) === "[object Map]", Fr = (e) => An(e) === "[object Set]", xi = (e) => An(e) === "[object Date]", de = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Qt = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", xs = (e) => (Ce(e) || de(e)) && de(e.then) && de(e.catch), As = Object.prototype.toString, An = (e) => As.call(e), Vl = (e) => An(e).slice(8, -1), ks = (e) => An(e) === "[object Object]", ui = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mn = /* @__PURE__ */ oi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), oa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ql = /-\w/g, Ut = oa(
  (e) => e.replace(ql, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Hr = oa(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), Rs = oa((e) => e.charAt(0).toUpperCase() + e.slice(1)), ka = oa(
  (e) => e ? `on${Rs(e)}` : ""
), Jt = (e, t) => !Object.is(e, t), Kn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Os = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ca = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ai;
const ua = () => Ai || (Ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function di(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = Ue(n) ? Gl(n) : di(n);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (Ue(e) || Ce(e))
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
function Dt(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ne(e))
    for (let r = 0; r < e.length; r++) {
      const n = Dt(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ oi(Yl);
function Ns(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Tr(e[n], t[n]);
  return r;
}
function ki(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let i = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && Tr(a, r[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    n[i] = 1;
  }
  return !0;
}
function Tr(e, t) {
  if (e === t) return !0;
  let r = xi(e), n = xi(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Qt(e), n = Qt(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Ce(e), n = Ce(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = Cr(e), n = Cr(t), r || n || (r = Fr(e), n = Fr(t), r || n))
      return r && n ? ki(e, t) : !1;
    const a = Object.keys(e).length, i = Object.keys(t).length;
    if (a !== i)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), h = t.hasOwnProperty(o);
      if (u && !h || !u && h || !Tr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => Tr(r, t));
}
const Ps = (e) => !!(e && e.__v_isRef === !0), c = (e) => Ue(e) ? e : e == null ? "" : ne(e) || Ce(e) && (e.toString === As || !de(e.toString)) ? Ps(e) ? c(e.value) : JSON.stringify(e, Is, 2) : String(e), Is = (e, t) => Ps(t) ? Is(e, t.value) : Cr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], i) => (r[Ra(n, i) + " =>"] = a, r),
    {}
  )
} : Fr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ra(r))
} : Qt(t) ? Ra(t) : Ce(t) && !ne(t) && !ks(t) ? String(t) : t, Ra = (e, t = "") => {
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
let ke;
const Oa = /* @__PURE__ */ new WeakSet();
class Ls {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Oa.has(this) && (Oa.delete(this), this.trigger()));
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
    const t = ke, r = Ft;
    ke = this, Ft = !0;
    try {
      return this.fn();
    } finally {
      Fs(this), ke = t, Ft = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hi(t);
      this.deps = this.depsTail = void 0, Ri(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Oa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xa(this) && this.run();
  }
  get dirty() {
    return Xa(this);
  }
}
let Ds = 0, bn, yn;
function Ms(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = yn, yn = e;
    return;
  }
  e.next = bn, bn = e;
}
function fi() {
  Ds++;
}
function pi() {
  if (--Ds > 0)
    return;
  if (yn) {
    let t = yn;
    for (yn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; bn; ) {
    let t = bn;
    for (bn = void 0; t; ) {
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
    n.version === -1 ? (n === r && (r = a), hi(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = r;
}
function Xa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = ke, n = Ft;
  ke = e, Ft = !0;
  try {
    Us(e);
    const a = e.fn(e._value);
    (t.version === 0 || Jt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ke = r, Ft = n, Fs(e), e.flags &= -3;
  }
}
function hi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      hi(i, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ft = !0;
const $s = [];
function hr() {
  $s.push(Ft), Ft = !1;
}
function mr() {
  const e = $s.pop();
  Ft = e === void 0 ? !0 : e;
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
let wn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class mi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !Ft || ke === this.computed)
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
    this.version++, wn++, this.notify(t);
  }
  notify(t) {
    fi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      pi();
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
const Ja = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ Symbol(
  ""
), Za = /* @__PURE__ */ Symbol(
  ""
), Sn = /* @__PURE__ */ Symbol(
  ""
);
function Qe(e, t, r) {
  if (Ft && ke) {
    let n = Ja.get(e);
    n || Ja.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new mi()), a.map = n, a.key = r), a.track();
  }
}
function dr(e, t, r, n, a, i) {
  const o = Ja.get(e);
  if (!o) {
    wn++;
    return;
  }
  const u = (h) => {
    h && h.trigger();
  };
  if (fi(), t === "clear")
    o.forEach(u);
  else {
    const h = ne(e), S = h && ui(r);
    if (h && r === "length") {
      const y = Number(n);
      o.forEach((E, I) => {
        (I === "length" || I === Sn || !Qt(I) && I >= y) && u(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), S && u(o.get(Sn)), t) {
        case "add":
          h ? S && u(o.get("length")) : (u(o.get(Dr)), Cr(e) && u(o.get(Za)));
          break;
        case "delete":
          h || (u(o.get(Dr)), Cr(e) && u(o.get(Za)));
          break;
        case "set":
          Cr(e) && u(o.get(Dr));
          break;
      }
  }
  pi();
}
function Kr(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (Qe(t, "iterate", Sn), /* @__PURE__ */ Nt(e) ? t : t.map(Ht));
}
function da(e) {
  return Qe(e = /* @__PURE__ */ we(e), "iterate", Sn), e;
}
function Yt(e, t) {
  return /* @__PURE__ */ br(e) ? rn(/* @__PURE__ */ Mr(e) ? Ht(t) : t) : Ht(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return Na(this, Symbol.iterator, (e) => Yt(this, e));
  },
  concat(...e) {
    return Kr(this).concat(
      ...e.map((t) => ne(t) ? Kr(t) : t)
    );
  },
  entries() {
    return Na(this, "entries", (e) => (e[1] = Yt(this, e[1]), e));
  },
  every(e, t) {
    return or(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return or(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Yt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return or(
      this,
      "find",
      e,
      t,
      (r) => Yt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return or(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return or(
      this,
      "findLast",
      e,
      t,
      (r) => Yt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return or(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return or(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Pa(this, "includes", e);
  },
  indexOf(...e) {
    return Pa(this, "indexOf", e);
  },
  join(e) {
    return Kr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Pa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return or(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sn(this, "pop");
  },
  push(...e) {
    return sn(this, "push", e);
  },
  reduce(e, ...t) {
    return Oi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Oi(this, "reduceRight", e, t);
  },
  shift() {
    return sn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return or(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return sn(this, "splice", e);
  },
  toReversed() {
    return Kr(this).toReversed();
  },
  toSorted(e) {
    return Kr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Kr(this).toSpliced(...e);
  },
  unshift(...e) {
    return sn(this, "unshift", e);
  },
  values() {
    return Na(this, "values", (e) => Yt(this, e));
  }
};
function Na(e, t, r) {
  const n = da(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Nt(e) && (a._next = a.next, a.next = () => {
    const i = a._next();
    return i.done || (i.value = r(i.value)), i;
  }), a;
}
const ao = Array.prototype;
function or(e, t, r, n, a, i) {
  const o = da(e), u = o !== e && !/* @__PURE__ */ Nt(e), h = o[t];
  if (h !== ao[t]) {
    const E = h.apply(e, i);
    return u ? Ht(E) : E;
  }
  let S = r;
  o !== e && (u ? S = function(E, I) {
    return r.call(this, Yt(e, E), I, e);
  } : r.length > 2 && (S = function(E, I) {
    return r.call(this, E, I, e);
  }));
  const y = h.call(o, S, n);
  return u && a ? a(y) : y;
}
function Oi(e, t, r, n) {
  const a = da(e), i = a !== e && !/* @__PURE__ */ Nt(e);
  let o = r, u = !1;
  a !== e && (i ? (u = n.length === 0, o = function(S, y, E) {
    return u && (u = !1, S = Yt(e, S)), r.call(this, S, Yt(e, y), E, e);
  }) : r.length > 3 && (o = function(S, y, E) {
    return r.call(this, S, y, E, e);
  }));
  const h = a[t](o, ...n);
  return u ? Yt(e, h) : h;
}
function Pa(e, t, r) {
  const n = /* @__PURE__ */ we(e);
  Qe(n, "iterate", Sn);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ gi(r[0]) ? (r[0] = /* @__PURE__ */ we(r[0]), n[t](...r)) : a;
}
function sn(e, t, r = []) {
  hr(), fi();
  const n = (/* @__PURE__ */ we(e))[t].apply(e, r);
  return pi(), mr(), n;
}
const io = /* @__PURE__ */ oi("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qt)
);
function so(e) {
  Qt(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
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
      let h;
      if (o && (h = no[r]))
        return h;
      if (r === "hasOwnProperty")
        return so;
    }
    const u = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ et(t) ? t : n
    );
    if ((Qt(r) ? Vs.has(r) : io(r)) || (a || Qe(t, "get", r), i))
      return u;
    if (/* @__PURE__ */ et(u)) {
      const h = o && ui(r) ? u : u.value;
      return a && Ce(h) ? /* @__PURE__ */ ei(h) : h;
    }
    return Ce(u) ? a ? /* @__PURE__ */ ei(u) : /* @__PURE__ */ Mt(u) : u;
  }
}
class Bs extends qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let i = t[r];
    const o = ne(t) && ui(r);
    if (!this._isShallow) {
      const S = /* @__PURE__ */ br(i);
      if (!/* @__PURE__ */ Nt(n) && !/* @__PURE__ */ br(n) && (i = /* @__PURE__ */ we(i), n = /* @__PURE__ */ we(n)), !o && /* @__PURE__ */ et(i) && !/* @__PURE__ */ et(n))
        return S || (i.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), h = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ et(t) ? t : a
    );
    return t === /* @__PURE__ */ we(a) && h && (u ? Jt(n, i) && dr(t, "set", r, n) : dr(t, "add", r, n)), h;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && dr(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Qt(r) || !Vs.has(r)) && Qe(t, "has", r), n;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      ne(t) ? "length" : Dr
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
const Qa = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, i = /* @__PURE__ */ we(a), o = Cr(i), u = e === "entries" || e === Symbol.iterator && o, h = e === "keys" && o, S = a[e](...n), y = r ? Qa : t ? rn : Ht;
    return !t && Qe(
      i,
      "iterate",
      h ? Za : Dr
    ), tt(
      // inheriting all iterator properties
      Object.create(S),
      {
        // iterator protocol
        next() {
          const { value: E, done: I } = S.next();
          return I ? { value: E, done: I } : {
            value: u ? [y(E[0]), y(E[1])] : y(E),
            done: I
          };
        }
      }
    );
  };
}
function jn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      e || (Jt(a, u) && Qe(o, "get", a), Qe(o, "get", u));
      const { has: h } = $n(o), S = t ? Qa : e ? rn : Ht;
      if (h.call(o, a))
        return S(i.get(a));
      if (h.call(o, u))
        return S(i.get(u));
      i !== o && i.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Qe(/* @__PURE__ */ we(a), "iterate", Dr), a.size;
    },
    has(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      return e || (Jt(a, u) && Qe(o, "has", a), Qe(o, "has", u)), a === u ? i.has(a) : i.has(a) || i.has(u);
    },
    forEach(a, i) {
      const o = this, u = o.__v_raw, h = /* @__PURE__ */ we(u), S = t ? Qa : e ? rn : Ht;
      return !e && Qe(h, "iterate", Dr), u.forEach((y, E) => a.call(i, S(y), S(E), o));
    }
  };
  return tt(
    r,
    e ? {
      add: jn("add"),
      set: jn("set"),
      delete: jn("delete"),
      clear: jn("clear")
    } : {
      add(a) {
        const i = /* @__PURE__ */ we(this), o = $n(i), u = /* @__PURE__ */ we(a), h = !t && !/* @__PURE__ */ Nt(a) && !/* @__PURE__ */ br(a) ? u : a;
        return o.has.call(i, h) || Jt(a, h) && o.has.call(i, a) || Jt(u, h) && o.has.call(i, u) || (i.add(h), dr(i, "add", h, h)), this;
      },
      set(a, i) {
        !t && !/* @__PURE__ */ Nt(i) && !/* @__PURE__ */ br(i) && (i = /* @__PURE__ */ we(i));
        const o = /* @__PURE__ */ we(this), { has: u, get: h } = $n(o);
        let S = u.call(o, a);
        S || (a = /* @__PURE__ */ we(a), S = u.call(o, a));
        const y = h.call(o, a);
        return o.set(a, i), S ? Jt(i, y) && dr(o, "set", a, i) : dr(o, "add", a, i), this;
      },
      delete(a) {
        const i = /* @__PURE__ */ we(this), { has: o, get: u } = $n(i);
        let h = o.call(i, a);
        h || (a = /* @__PURE__ */ we(a), h = o.call(i, a)), u && u.call(i, a);
        const S = i.delete(a);
        return h && dr(i, "delete", a, void 0), S;
      },
      clear() {
        const a = /* @__PURE__ */ we(this), i = a.size !== 0, o = a.clear();
        return i && dr(
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
function bi(e, t) {
  const r = po(e, t);
  return (n, a, i) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Se(r, a) && a in n ? r : n,
    a,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ bi(!1, !1)
}, mo = {
  get: /* @__PURE__ */ bi(!1, !0)
}, bo = {
  get: /* @__PURE__ */ bi(!0, !1)
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
function Mt(e) {
  return /* @__PURE__ */ br(e) ? e : yi(
    e,
    !1,
    oo,
    ho,
    zs
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return yi(
    e,
    !1,
    uo,
    mo,
    Ws
  );
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  return yi(
    e,
    !0,
    co,
    bo,
    Ks
  );
}
function yi(e, t, r, n, a) {
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
function Mr(e) {
  return /* @__PURE__ */ br(e) ? /* @__PURE__ */ Mr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
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
const Ht = (e) => Ce(e) ? /* @__PURE__ */ Mt(e) : e, rn = (e) => Ce(e) ? /* @__PURE__ */ ei(e) : e;
// @__NO_SIDE_EFFECTS__
function et(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ et(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new mi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ we(t), this._value = r ? t : Ht(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Nt(t) || /* @__PURE__ */ br(t);
    t = n ? t : /* @__PURE__ */ we(t), Jt(t, r) && (this._rawValue = t, this._value = n ? t : Ht(t), this.dep.trigger());
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
function Gs(e) {
  return /* @__PURE__ */ Mr(e) ? e : new Proxy(e, Eo);
}
class Co {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new mi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
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
const Vn = {}, Jn = /* @__PURE__ */ new WeakMap();
let Nr;
function xo(e, t = !1, r = Nr) {
  if (r) {
    let n = Jn.get(r);
    n || Jn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = xe) {
  const { immediate: n, deep: a, once: i, scheduler: o, augmentJob: u, call: h } = r, S = (V) => a ? V : /* @__PURE__ */ Nt(V) || a === !1 || a === 0 ? fr(V, 1) : fr(V);
  let y, E, I, j, se = !1, K = !1;
  if (/* @__PURE__ */ et(e) ? (E = () => e.value, se = /* @__PURE__ */ Nt(e)) : /* @__PURE__ */ Mr(e) ? (E = () => S(e), se = !0) : ne(e) ? (K = !0, se = e.some((V) => /* @__PURE__ */ Mr(V) || /* @__PURE__ */ Nt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ et(V))
      return V.value;
    if (/* @__PURE__ */ Mr(V))
      return S(V);
    if (de(V))
      return h ? h(V, 2) : V();
  })) : de(e) ? t ? E = h ? () => h(e, 2) : e : E = () => {
    if (I) {
      hr();
      try {
        I();
      } finally {
        mr();
      }
    }
    const V = Nr;
    Nr = y;
    try {
      return h ? h(e, 3, [j]) : e(j);
    } finally {
      Nr = V;
    }
  } : E = Zt, t && a) {
    const V = E, ce = a === !0 ? 1 / 0 : a;
    E = () => fr(V(), ce);
  }
  const ue = eo(), le = () => {
    y.stop(), ue && ue.active && ci(ue.effects, y);
  };
  if (i && t) {
    const V = t;
    t = (...ce) => {
      const Ie = V(...ce);
      return le(), Ie;
    };
  }
  let z = K ? new Array(e.length).fill(Vn) : Vn;
  const M = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || a || se || (K ? ce.some((Ie, Ne) => Jt(Ie, z[Ne])) : Jt(ce, z))) {
          I && I();
          const Ie = Nr;
          Nr = y;
          try {
            const Ne = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === Vn ? void 0 : K && z[0] === Vn ? [] : z,
              j
            ];
            z = ce, h ? h(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            Nr = Ie;
          }
        }
      } else
        y.run();
  };
  return u && u(M), y = new Ls(E), y.scheduler = o ? () => o(M, !1) : M, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = Jn.get(y);
    if (V) {
      if (h)
        h(V, 4);
      else
        for (const ce of V) ce();
      Jn.delete(y);
    }
  }, t ? n ? M(!0) : z = y.run() : o ? o(M.bind(null, !0), !0) : y.run(), le.pause = y.pause.bind(y), le.resume = y.resume.bind(y), le.stop = le, le;
}
function fr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ et(e))
    fr(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      fr(e[n], t, r);
  else if (Fr(e) || Cr(e))
    e.forEach((n) => {
      fr(n, t, r);
    });
  else if (ks(e)) {
    for (const n in e)
      fr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && fr(e[n], t, r);
  }
  return e;
}
function kn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    fa(a, t, r);
  }
}
function $t(e, t, r, n) {
  if (de(e)) {
    const a = kn(e, t, r, n);
    return a && xs(a) && a.catch((i) => {
      fa(i, t, r);
    }), a;
  }
  if (ne(e)) {
    const a = [];
    for (let i = 0; i < e.length; i++)
      a.push($t(e[i], t, r, n));
    return a;
  }
}
function fa(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xe;
  if (t) {
    let u = t.parent;
    const h = t.proxy, S = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, h, S) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      hr(), kn(i, null, 10, [
        e,
        h,
        S
      ]), mr();
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
const ut = [];
let Gt = -1;
const Qr = [];
let Er = null, Xr = 0;
const Ys = /* @__PURE__ */ Promise.resolve();
let Zn = null;
function Xs(e) {
  const t = Zn || Ys;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Gt + 1, r = ut.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = ut[n], i = En(a);
    i < e || i === e && a.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function _i(e) {
  if (!(e.flags & 1)) {
    const t = En(e), r = ut[ut.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= En(r) ? ut.push(e) : ut.splice(Ro(t), 0, e), e.flags |= 1, Js();
  }
}
function Js() {
  Zn || (Zn = Ys.then(Qs));
}
function Oo(e) {
  if (!ne(e))
    Er && e.id === -1 ? Er.splice(Xr + 1, 0, e) : e.flags & 1 || (Qr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Qr.push(e[t]);
  Js();
}
function Pi(e, t, r = Gt + 1) {
  for (; r < ut.length; r++) {
    const n = ut[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ut.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zs(e) {
  if (Qr.length) {
    const t = [...new Set(Qr)].sort(
      (r, n) => En(r) - En(n)
    );
    if (Qr.length = 0, Er) {
      for (let r = 0; r < t.length; r++)
        Er.push(t[r]);
      return;
    }
    for (Er = t, Xr = 0; Xr < Er.length; Xr++) {
      const r = Er[Xr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Er = null, Xr = 0;
  }
}
const En = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qs(e) {
  try {
    for (Gt = 0; Gt < ut.length; Gt++) {
      const t = ut[Gt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gt < ut.length; Gt++) {
      const t = ut[Gt];
      t && (t.flags &= -2);
    }
    Gt = -1, ut.length = 0, Zs(), Zn = null, (ut.length || Qr.length) && Qs();
  }
}
let Ot = null, el = null;
function Qn(e) {
  const t = Ot;
  return Ot = e, el = e && e.type.__scopeId || null, t;
}
function No(e, t = Ot, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && qi(-1);
    const i = Qn(t), o = Ur.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let h = Ur.length; h > o; h--) xl();
      Qn(i), n._d && qi(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ot(e, t) {
  if (Ot === null)
    return e;
  const r = ya(Ot), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, o, u, h = xe] = t[a];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && fr(o), n.push({
      dir: i,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: h
    }));
  }
  return e;
}
function kr(e, t, r, n) {
  const a = e.dirs, i = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    i && (u.oldValue = i[o].value);
    let h = u.dir[n];
    h && (hr(), $t(h, r, 8, [
      e.el,
      u,
      e,
      t
    ]), mr());
  }
}
function Po(e, t) {
  if (dt) {
    let r = dt.provides;
    const n = dt.parent && dt.parent.provides;
    n === r && (r = dt.provides = Object.create(n)), r[e] = t;
  }
}
function Gn(e, t, r = !1) {
  const n = kc();
  if (n || en) {
    let a = en ? en._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Lo = () => Gn(Io);
function Ia(e, t, r) {
  return tl(e, t, r);
}
function tl(e, t, r = xe) {
  const { immediate: n, deep: a, flush: i, once: o } = r, u = tt({}, r), h = t && n || !t && i !== "post";
  let S;
  if (xn) {
    if (i === "sync") {
      const j = Lo();
      S = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!h) {
      const j = () => {
      };
      return j.stop = Zt, j.resume = Zt, j.pause = Zt, j;
    }
  }
  const y = dt;
  u.call = (j, se, K) => $t(j, y, se, K);
  let E = !1;
  i === "post" ? u.scheduler = (j) => {
    bt(j, y && y.suspense);
  } : i !== "sync" && (E = !0, u.scheduler = (j, se) => {
    se ? j() : _i(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return xn && (S ? S.push(I) : h && I()), I;
}
function Do(e, t, r) {
  const n = this.proxy, a = Ue(e) ? e.includes(".") ? rl(n, e) : () => n[e] : e.bind(n, n);
  let i;
  de(t) ? i = t : (i = t.handler, r = t);
  const o = Rn(this), u = tl(a, i.bind(n), r);
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
const Mo = /* @__PURE__ */ Symbol("_vte"), pa = (e) => e.__isTeleport, La = /* @__PURE__ */ Symbol("_leaveCb");
function Uo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== yr) {
        t = r;
        break;
      }
  }
  return t;
}
function nl(e) {
  if (!wi(e))
    return pa(e.type) && e.children ? Uo(e.children) : e;
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
function vi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    vi(
      pa(r.type) && nl(r) || r,
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
const ea = /* @__PURE__ */ new WeakMap();
function gn(e, t, r, n, a = !1) {
  if (ne(e)) {
    e.forEach(
      (K, ue) => gn(
        K,
        t && (ne(t) ? t[ue] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (_n(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && gn(e, t, r, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ya(n.component) : n.el, o = a ? null : i, { i: u, r: h } = e, S = t && t.r, y = u.refs === xe ? u.refs = {} : u.refs, E = u.setupState, I = /* @__PURE__ */ we(E), j = E === xe ? Ts : (K) => Ii(y, K) ? !1 : Se(I, K), se = (K, ue) => !(ue && Ii(y, ue));
  if (S != null && S !== h) {
    if (Li(t), Ue(S))
      y[S] = null, j(S) && (E[S] = null);
    else if (/* @__PURE__ */ et(S)) {
      const K = t;
      se(S, K.k) && (S.value = null), K.k && (y[K.k] = null);
    }
  }
  if (de(h))
    kn(h, u, 12, [o, y]);
  else {
    const K = Ue(h), ue = /* @__PURE__ */ et(h);
    if (K || ue) {
      const le = () => {
        if (e.f) {
          const z = K ? j(h) ? E[h] : y[h] : se() || !e.k ? h.value : y[e.k];
          if (a)
            ne(z) && ci(z, i);
          else if (ne(z))
            z.includes(i) || z.push(i);
          else if (K)
            y[h] = [i], j(h) && (E[h] = y[h]);
          else {
            const M = [i];
            se(h, e.k) && (h.value = M), e.k && (y[e.k] = M);
          }
        } else K ? (y[h] = o, j(h) && (E[h] = o)) : ue && (se(h, e.k) && (h.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const z = () => {
          le(), ea.delete(e);
        };
        z.id = -1, ea.set(e, z), bt(z, r);
      } else
        Li(e), le();
    }
  }
}
function Li(e) {
  const t = ea.get(e);
  t && (t.flags |= 8, ea.delete(e));
}
ua().requestIdleCallback;
ua().cancelIdleCallback;
const _n = (e) => !!e.type.__asyncLoader, wi = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  il(e, "a", t);
}
function Ho(e, t) {
  il(e, "da", t);
}
function il(e, t, r = dt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ha(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      wi(a.parent.vnode) && $o(n, t, r, a), a = a.parent;
  }
}
function $o(e, t, r, n) {
  const a = ha(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ol(() => {
    ci(n[t], a);
  }, r);
}
function ha(e, t, r = dt, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...o) => {
      hr();
      const u = Rn(r), h = $t(t, r, e, o);
      return u(), mr(), h;
    });
    return n ? a.unshift(i) : a.push(i), i;
  }
}
const gr = (e) => (t, r = dt) => {
  (!xn || e === "sp") && ha(e, (...n) => t(...n), r);
}, jo = gr("bm"), sl = gr("m"), Vo = gr(
  "bu"
), qo = gr("u"), ll = gr(
  "bum"
), ol = gr("um"), Bo = gr(
  "sp"
), zo = gr("rtg"), Wo = gr("rtc");
function Ko(e, t = dt) {
  ha("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, r, n) {
  let a;
  const i = r, o = ne(e);
  if (o || Ue(e)) {
    const u = o && /* @__PURE__ */ Mr(e);
    let h = !1, S = !1;
    u && (h = !/* @__PURE__ */ Nt(e), S = /* @__PURE__ */ br(e), e = da(e)), a = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      a[y] = t(
        h ? S ? rn(Ht(e[y])) : Ht(e[y]) : e[y],
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
        (u, h) => t(u, h, void 0, i)
      );
    else {
      const u = Object.keys(e);
      a = new Array(u.length);
      for (let h = 0, S = u.length; h < S; h++) {
        const y = u[h];
        a[h] = t(e[y], y, h, i);
      }
    }
  else
    a = [];
  return a;
}
const ti = (e) => e ? Ol(e) ? ya(e) : ti(e.parent) : null, vn = (
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
    $parent: (e) => ti(e.parent),
    $root: (e) => ti(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ul(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      _i(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
    $watch: (e) => Do.bind(e)
  })
), Da = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: a, props: i, accessCache: o, type: u, appContext: h } = e;
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
        if (Da(n, t))
          return o[t] = 1, n[t];
        if (a !== xe && Se(a, t))
          return o[t] = 2, a[t];
        if (Se(i, t))
          return o[t] = 3, i[t];
        if (r !== xe && Se(r, t))
          return o[t] = 4, r[t];
        ri && (o[t] = 0);
      }
    }
    const S = vn[t];
    let y, E;
    if (S)
      return t === "$attrs" && Qe(e.attrs, "get", ""), S(e);
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
    const { data: n, setupState: a, ctx: i } = e;
    return Da(a, t) ? (a[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: i, type: o }
  }, u) {
    let h;
    return !!(r[u] || e !== xe && u[0] !== "$" && Se(e, u) || Da(t, u) || Se(i, u) || Se(n, u) || Se(vn, u) || Se(a.config.globalProperties, u) || (h = o.__cssModules) && h[u]);
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
let ri = !0;
function Xo(e) {
  const t = ul(e), r = e.proxy, n = e.ctx;
  ri = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: i,
    methods: o,
    watch: u,
    provide: h,
    inject: S,
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
    renderTracked: Ie,
    renderTriggered: Ne,
    errorCaptured: qe,
    serverPrefetch: Ee,
    // public API
    expose: Le,
    inheritAttrs: rt,
    // assets
    components: ft,
    directives: Ge,
    filters: Rt
  } = t;
  if (S && Jo(S, n, null), o)
    for (const ge in o) {
      const pe = o[ge];
      de(pe) && (n[ge] = pe.bind(r));
    }
  if (a) {
    const ge = a.call(r, r);
    Ce(ge) && (e.data = /* @__PURE__ */ Mt(ge));
  }
  if (ri = !0, i)
    for (const ge in i) {
      const pe = i[ge], Be = de(pe) ? pe.bind(r, r) : de(pe.get) ? pe.get.bind(r, r) : Zt, _e = !de(pe) && de(pe.set) ? pe.set.bind(r) : Zt, Re = B({
        get: Be,
        set: _e
      });
      Object.defineProperty(n, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (ze) => Re.value = ze
      });
    }
  if (u)
    for (const ge in u)
      cl(u[ge], n, r, ge);
  if (h) {
    const ge = de(h) ? h.call(r) : h;
    Reflect.ownKeys(ge).forEach((pe) => {
      Po(pe, ge[pe]);
    });
  }
  y && Mi(y, e, "c");
  function De(ge, pe) {
    ne(pe) ? pe.forEach((Be) => ge(Be.bind(r))) : pe && ge(pe.bind(r));
  }
  if (De(jo, E), De(sl, I), De(Vo, j), De(qo, se), De(Fo, K), De(Ho, ue), De(Ko, qe), De(Wo, Ie), De(zo, Ne), De(ll, z), De(ol, V), De(Bo, Ee), ne(Le))
    if (Le.length) {
      const ge = e.exposed || (e.exposed = {});
      Le.forEach((pe) => {
        Object.defineProperty(ge, pe, {
          get: () => r[pe],
          set: (Be) => r[pe] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Zt && (e.render = ce), rt != null && (e.inheritAttrs = rt), ft && (e.components = ft), Ge && (e.directives = Ge), Ee && al(e);
}
function Jo(e, t, r = Zt) {
  ne(e) && (e = ni(e));
  for (const n in e) {
    const a = e[n];
    let i;
    Ce(a) ? "default" in a ? i = Gn(
      a.from || n,
      a.default,
      !0
    ) : i = Gn(a.from || n) : i = Gn(a), /* @__PURE__ */ et(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Mi(e, t, r) {
  $t(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function cl(e, t, r, n) {
  let a = n.includes(".") ? rl(r, n) : () => r[n];
  if (Ue(e)) {
    const i = t[e];
    de(i) && Ia(a, i);
  } else if (de(e))
    Ia(a, e.bind(r));
  else if (Ce(e))
    if (ne(e))
      e.forEach((i) => cl(i, t, r, n));
    else {
      const i = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(i) && Ia(a, i, e);
    }
}
function ul(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let h;
  return u ? h = u : !a.length && !r && !n ? h = t : (h = {}, a.length && a.forEach(
    (S) => ta(h, S, o, !0)
  ), ta(h, t, o)), Ce(t) && i.set(t, h), h;
}
function ta(e, t, r, n = !1) {
  const { mixins: a, extends: i } = t;
  i && ta(e, i, r, !0), a && a.forEach(
    (o) => ta(e, o, r, !0)
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
  methods: fn,
  computed: fn,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: fn,
  directives: fn,
  // watch
  watch: ec,
  // provide / inject
  provide: Ui,
  inject: Qo
};
function Ui(e, t) {
  return t ? e ? function() {
    return tt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return fn(ni(e), ni(t));
}
function ni(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fn(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fi(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Di(e),
    Di(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = tt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ct(e[n], t[n]);
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
    de(n) || (n = tt({}, n)), a != null && !Ce(a) && (a = null);
    const i = dl(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let h = !1;
    const S = i.app = {
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
        return o.has(y) || (y && de(y.install) ? (o.add(y), y.install(S, ...E)) : de(y) && (o.add(y), y(S, ...E))), S;
      },
      mixin(y) {
        return i.mixins.includes(y) || i.mixins.push(y), S;
      },
      component(y, E) {
        return E ? (i.components[y] = E, S) : i.components[y];
      },
      directive(y, E) {
        return E ? (i.directives[y] = E, S) : i.directives[y];
      },
      mount(y, E, I) {
        if (!h) {
          const j = S._ceVNode || pr(n, a);
          return j.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), h = !0, S._container = y, y.__vue_app__ = S, ya(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        h && ($t(
          u,
          S._instance,
          16
        ), e(null, S._container), delete S._container.__vue_app__);
      },
      provide(y, E) {
        return i.provides[y] = E, S;
      },
      runWithContext(y) {
        const E = en;
        en = S;
        try {
          return y();
        } finally {
          en = E;
        }
      }
    };
    return S;
  };
}
let en = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${Hr(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let a = r;
  const i = t.startsWith("update:"), o = i && nc(n, t.slice(7));
  o && (o.trim && (a = r.map((y) => Ue(y) ? y.trim() : y)), o.number && (a = a.map(ca)));
  let u, h = n[u = ka(t)] || // also try camelCase event handler (#2249)
  n[u = ka(Ut(t))];
  !h && i && (h = n[u = ka(Hr(t))]), h && $t(
    h,
    e,
    6,
    a
  );
  const S = n[u + "Once"];
  if (S) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, $t(
      S,
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
    const h = (S) => {
      const y = fl(S, t, !0);
      y && (u = !0, tt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !i && !u ? (Ce(e) && n.set(e, null), null) : (ne(i) ? i.forEach((h) => o[h] = null) : tt(o, i), Ce(e) && n.set(e, o), o);
}
function ma(e, t) {
  return !e || !sa(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Hr(t)) || Se(e, t));
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
    emit: h,
    render: S,
    renderCache: y,
    props: E,
    data: I,
    setupState: j,
    ctx: se,
    inheritAttrs: K
  } = e, ue = Qn(e);
  let le, z;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, ce = V;
      le = Xt(
        S.call(
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
      le = Xt(
        V.length > 1 ? V(
          E,
          { attrs: u, slots: o, emit: h }
        ) : V(
          E,
          null
        )
      ), z = t.props ? u : sc(u);
    }
  } catch (V) {
    Ur.length = 0, fa(V, e, 1), le = pr(yr);
  }
  let M = le;
  if (z && K !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = M;
    V.length && ce & 7 && (i && V.some(la) && (z = lc(
      z,
      i
    )), M = nn(M, z, !1, !0));
  }
  if (r.dirs && (M = nn(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = pa(M.type) && nl(M) || M;
    vi(V, r.transition);
  }
  return le = M, Qn(ue), le;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || sa(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!la(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: a, component: i } = e, { props: o, children: u, patchFlag: h } = t, S = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return n ? $i(n, o, S) : !!o;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const I = y[E];
        if (pl(o, n, I) && !ma(S, I))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? $i(n, o, S) : !0 : !!o;
  return !1;
}
function $i(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (pl(t, e, i) && !ma(r, i))
      return !0;
  }
  return !1;
}
function pl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && Ce(n) && Ce(a) ? !Tr(n, a) : n !== a;
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
  } = e, u = /* @__PURE__ */ we(a), [h] = e.propsOptions;
  let S = !1;
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
        if (ma(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (h)
          if (Se(i, I))
            j !== i[I] && (i[I] = j, S = !0);
          else {
            const se = Ut(I);
            a[se] = ai(
              h,
              u,
              se,
              j,
              e,
              !1
            );
          }
        else
          j !== i[I] && (i[I] = j, S = !0);
      }
    }
  } else {
    yl(e, t, a, i) && (S = !0);
    let y;
    for (const E in u)
      (!t || // for camelCase
      !Se(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Hr(E)) === E || !Se(t, y))) && (h ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[E] = ai(
        h,
        u,
        E,
        void 0,
        e,
        !0
      )) : delete a[E]);
    if (i !== u)
      for (const E in i)
        (!t || !Se(t, E)) && (delete i[E], S = !0);
  }
  S && dr(e.attrs, "set", "");
}
function yl(e, t, r, n) {
  const [a, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let h in t) {
      if (mn(h))
        continue;
      const S = t[h];
      let y;
      a && Se(a, y = Ut(h)) ? !i || !i.includes(y) ? r[y] = S : (u || (u = {}))[y] = S : ma(e.emitsOptions, h) || (!(h in n) || S !== n[h]) && (n[h] = S, o = !0);
    }
  if (i) {
    const h = /* @__PURE__ */ we(r), S = u || xe;
    for (let y = 0; y < i.length; y++) {
      const E = i[y];
      r[E] = ai(
        a,
        h,
        E,
        S[E],
        e,
        !Se(S, E)
      );
    }
  }
  return o;
}
function ai(e, t, r, n, a, i) {
  const o = e[r];
  if (o != null) {
    const u = Se(o, "default");
    if (u && n === void 0) {
      const h = o.default;
      if (o.type !== Function && !o.skipFactory && de(h)) {
        const { propsDefaults: S } = a;
        if (r in S)
          n = S[r];
        else {
          const y = Rn(a);
          n = S[r] = h.call(
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
    ] && (i && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Hr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function gl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const i = e.props, o = {}, u = [];
  let h = !1;
  if (!de(e)) {
    const y = (E) => {
      h = !0;
      const [I, j] = gl(E, t, !0);
      tt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!i && !h)
    return Ce(e) && n.set(e, Zr), Zr;
  if (ne(i))
    for (let y = 0; y < i.length; y++) {
      const E = Ut(i[y]);
      ji(E) && (o[E] = xe);
    }
  else if (i)
    for (const y in i) {
      const E = Ut(y);
      if (ji(E)) {
        const I = i[y], j = o[E] = ne(I) || de(I) ? { type: I } : tt({}, I), se = j.type;
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
  const S = [o, u];
  return Ce(e) && n.set(e, S), S;
}
function ji(e) {
  return e[0] !== "$" && !mn(e);
}
const Si = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => ne(e) ? e.map(Xt) : [Xt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...a) => Ei(t(...a)), r);
  return n._c = !1, n;
}, _l = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (Si(a)) continue;
    const i = e[a];
    if (de(i))
      t[a] = pc(a, i, n);
    else if (i != null) {
      const o = Ei(i);
      t[a] = () => o;
    }
  }
}, vl = (e, t) => {
  const r = Ei(t);
  e.slots.default = () => r;
}, wl = (e, t, r) => {
  for (const n in t)
    (r || !Si(n)) && (e[n] = t[n]);
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
      !Si(u) && o[u] == null && delete a[u];
}, bt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = ua();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: i,
    createElement: o,
    createText: u,
    createComment: h,
    setText: S,
    setElementText: y,
    parentNode: E,
    nextSibling: I,
    setScopeId: j = Zt,
    insertStaticContent: se
  } = e, K = (m, b, v, R = null, x = null, k = null, D = void 0, U = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !ln(m, b) && (R = gt(m), ze(m, x, k, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: A, ref: X, shapeFlag: $ } = b;
    switch (A) {
      case ba:
        ue(m, b, v, R);
        break;
      case yr:
        le(m, b, v, R);
        break;
      case Ua:
        m == null && z(b, v, R, D);
        break;
      case te:
        ft(
          m,
          b,
          v,
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
          v,
          R,
          x,
          k,
          D,
          U,
          L
        ) : $ & 6 ? Ge(
          m,
          b,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        ) : ($ & 64 || $ & 128) && A.process(
          m,
          b,
          v,
          R,
          x,
          k,
          D,
          U,
          L,
          pt
        );
    }
    X != null && x ? gn(X, m && m.ref, k, b || m, !b) : X == null && m && m.ref != null && gn(m.ref, null, k, m, !0);
  }, ue = (m, b, v, R) => {
    if (m == null)
      n(
        b.el = u(b.children),
        v,
        R
      );
    else {
      const x = b.el = m.el;
      b.children !== m.children && S(x, b.children);
    }
  }, le = (m, b, v, R) => {
    m == null ? n(
      b.el = h(b.children || ""),
      v,
      R
    ) : b.el = m.el;
  }, z = (m, b, v, R) => {
    [m.el, m.anchor] = se(
      m.children,
      b,
      v,
      R,
      m.el,
      m.anchor
    );
  }, M = ({ el: m, anchor: b }, v, R) => {
    let x;
    for (; m && m !== b; )
      x = I(m), n(m, v, R), m = x;
    n(b, v, R);
  }, V = ({ el: m, anchor: b }) => {
    let v;
    for (; m && m !== b; )
      v = I(m), a(m), m = v;
    a(b);
  }, ce = (m, b, v, R, x, k, D, U, L) => {
    if (b.type === "svg" ? D = "svg" : b.type === "math" && (D = "mathml"), m == null)
      Ie(
        b,
        v,
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
  }, Ie = (m, b, v, R, x, k, D, U) => {
    let L, A;
    const { props: X, shapeFlag: $, transition: W, dirs: G } = m;
    if (L = m.el = o(
      m.type,
      k,
      X && X.is,
      X
    ), $ & 8 ? y(L, m.children) : $ & 16 && qe(
      m.children,
      L,
      null,
      R,
      x,
      Ma(m, k),
      D,
      U
    ), G && kr(m, null, R, "created"), Ne(L, m, m.scopeId, D, R), X) {
      for (const N in X)
        N !== "value" && !mn(N) && i(L, N, null, X[N], k, R);
      "value" in X && i(L, "value", null, X.value, k), (A = X.onVnodeBeforeMount) && Kt(A, R, m);
    }
    G && kr(m, null, R, "beforeMount");
    const ae = gc(x, W);
    ae && W.beforeEnter(L), n(L, b, v), ((A = X && X.onVnodeMounted) || ae || G) && bt(() => {
      A && Kt(A, R, m), ae && W.enter(L), G && kr(m, null, R, "mounted");
    }, x);
  }, Ne = (m, b, v, R, x) => {
    if (v && j(m, v), R)
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
  }, qe = (m, b, v, R, x, k, D, U, L = 0) => {
    for (let A = L; A < m.length; A++) {
      const X = m[A] = U ? ur(m[A]) : Xt(m[A]);
      K(
        null,
        X,
        b,
        v,
        R,
        x,
        k,
        D,
        U
      );
    }
  }, Ee = (m, b, v, R, x, k, D) => {
    const U = b.el = m.el;
    let { patchFlag: L, dynamicChildren: A, dirs: X } = b;
    L |= m.patchFlag & 16;
    const $ = m.props || xe, W = b.props || xe;
    let G;
    if (v && Rr(v, !1), (G = W.onVnodeBeforeUpdate) && Kt(G, v, b, m), X && kr(b, m, v, "beforeUpdate"), v && Rr(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (L = 0, D = !1, A = null), ($.innerHTML && W.innerHTML == null || $.textContent && W.textContent == null) && y(U, ""), A ? Le(
      m.dynamicChildren,
      A,
      U,
      v,
      R,
      Ma(b, x),
      k
    ) : D || pe(
      m,
      b,
      U,
      null,
      v,
      R,
      Ma(b, x),
      k,
      !1
    ), L > 0) {
      if (L & 16)
        rt(U, $, W, v, x);
      else if (L & 2 && $.class !== W.class && i(U, "class", null, W.class, x), L & 4 && i(U, "style", $.style, W.style, x), L & 8) {
        const ae = b.dynamicProps;
        for (let N = 0; N < ae.length; N++) {
          const P = ae[N], H = $[P], ee = W[P];
          (ee !== H || P === "value") && i(U, P, H, ee, x, v);
        }
      }
      L & 1 && m.children !== b.children && y(U, b.children);
    } else !D && A == null && rt(U, $, W, v, x);
    ((G = W.onVnodeUpdated) || X) && bt(() => {
      G && Kt(G, v, b, m), X && kr(b, m, v, "updated");
    }, R);
  }, Le = (m, b, v, R, x, k, D) => {
    for (let U = 0; U < b.length; U++) {
      const L = m[U], A = b[U], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ln(L, A) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
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
  }, rt = (m, b, v, R, x) => {
    if (b !== v) {
      if (b !== xe)
        for (const k in b)
          !mn(k) && !(k in v) && i(
            m,
            k,
            b[k],
            null,
            x,
            R
          );
      for (const k in v) {
        if (mn(k)) continue;
        const D = v[k], U = b[k];
        D !== U && k !== "value" && i(m, k, U, D, x, R);
      }
      "value" in v && i(m, "value", b.value, v.value, x);
    }
  }, ft = (m, b, v, R, x, k, D, U, L) => {
    const A = b.el = m ? m.el : u(""), X = b.anchor = m ? m.anchor : u("");
    let { patchFlag: $, dynamicChildren: W, slotScopeIds: G } = b;
    G && (U = U ? U.concat(G) : G), m == null ? (n(A, v, R), n(X, v, R), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      v,
      X,
      x,
      k,
      D,
      U,
      L
    )) : $ > 0 && $ & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === W.length ? (Le(
      m.dynamicChildren,
      W,
      v,
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
      v,
      X,
      x,
      k,
      D,
      U,
      L
    );
  }, Ge = (m, b, v, R, x, k, D, U, L) => {
    b.slotScopeIds = U, m == null ? b.shapeFlag & 512 ? x.ctx.activate(
      b,
      v,
      R,
      D,
      L
    ) : Rt(
      b,
      v,
      R,
      x,
      k,
      D,
      L
    ) : Fe(m, b, L);
  }, Rt = (m, b, v, R, x, k, D) => {
    const U = m.component = Ac(
      m,
      R,
      x
    );
    if (wi(m) && (U.ctx.renderer = pt), Rc(U, !1, D), U.asyncDep) {
      if (x && x.registerDep(U, De, D), !m.el) {
        const L = U.subTree = pr(yr);
        le(null, L, b, v), m.placeholder = L.el;
      }
    } else
      De(
        U,
        m,
        b,
        v,
        x,
        k,
        D
      );
  }, Fe = (m, b, v) => {
    const R = b.component = m.component;
    if (oc(m, b, v))
      if (R.asyncDep && !R.asyncResolved) {
        ge(R, b, v);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = m.el, R.vnode = b;
  }, De = (m, b, v, R, x, k, D) => {
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
        Rr(m, !1), $ ? ($.el = N.el, ge(m, $, D)) : $ = N, W && Kn(W), (H = $.props && $.props.onVnodeBeforeUpdate) && Kt(H, ae, $, N), Rr(m, !0);
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
          () => Kt(H, ae, $, N),
          x
        );
      } else {
        let $;
        const { el: W, props: G } = b, { bm: ae, m: N, parent: P, root: H, type: ee } = m, oe = _n(b);
        Rr(m, !1), ae && Kn(ae), !oe && ($ = G && G.onVnodeBeforeMount) && Kt($, P, b), Rr(m, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            ee,
            m.parent ? m.parent.type : void 0
          );
          const he = m.subTree = Hi(m);
          K(
            null,
            he,
            v,
            R,
            m,
            x,
            k
          ), b.el = he.el;
        }
        if (N && bt(N, x), !oe && ($ = G && G.onVnodeMounted)) {
          const he = b;
          bt(
            () => Kt($, P, he),
            x
          );
        }
        (b.shapeFlag & 256 || P && _n(P.vnode) && P.vnode.shapeFlag & 256) && m.a && bt(m.a, x), m.isMounted = !0, b = v = R = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Ls(U);
    m.scope.off();
    const A = m.update = L.run.bind(L), X = m.job = L.runIfDirty.bind(L);
    X.i = m, X.id = m.uid, L.scheduler = () => _i(X), Rr(m, !0), A();
  }, ge = (m, b, v) => {
    b.component = m;
    const R = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, R, v), mc(m, b.children, v), hr(), Pi(m), mr();
  }, pe = (m, b, v, R, x, k, D, U, L = !1) => {
    const A = m && m.children, X = m ? m.shapeFlag : 0, $ = b.children, { patchFlag: W, shapeFlag: G } = b;
    if (W > 0) {
      if (W & 128) {
        _e(
          A,
          $,
          v,
          R,
          x,
          k,
          D,
          U,
          L
        );
        return;
      } else if (W & 256) {
        Be(
          A,
          $,
          v,
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
    G & 8 ? (X & 16 && He(A, x, k), $ !== A && y(v, $)) : X & 16 ? G & 16 ? _e(
      A,
      $,
      v,
      R,
      x,
      k,
      D,
      U,
      L
    ) : He(A, x, k, !0) : (X & 8 && y(v, ""), G & 16 && qe(
      $,
      v,
      R,
      x,
      k,
      D,
      U,
      L
    ));
  }, Be = (m, b, v, R, x, k, D, U, L) => {
    m = m || Zr, b = b || Zr;
    const A = m.length, X = b.length, $ = Math.min(A, X);
    let W;
    for (W = 0; W < $; W++) {
      const G = b[W] = L ? ur(b[W]) : Xt(b[W]);
      K(
        m[W],
        G,
        v,
        null,
        x,
        k,
        D,
        U,
        L
      );
    }
    A > X ? He(
      m,
      x,
      k,
      !0,
      !1,
      $
    ) : qe(
      b,
      v,
      R,
      x,
      k,
      D,
      U,
      L,
      $
    );
  }, _e = (m, b, v, R, x, k, D, U, L) => {
    let A = 0;
    const X = b.length;
    let $ = m.length - 1, W = X - 1;
    for (; A <= $ && A <= W; ) {
      const G = m[A], ae = b[A] = L ? ur(b[A]) : Xt(b[A]);
      if (ln(G, ae))
        K(
          G,
          ae,
          v,
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
      const G = m[$], ae = b[W] = L ? ur(b[W]) : Xt(b[W]);
      if (ln(G, ae))
        K(
          G,
          ae,
          v,
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
            b[A] = L ? ur(b[A]) : Xt(b[A]),
            v,
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
        ze(m[A], x, k, !0), A++;
    else {
      const G = A, ae = A, N = /* @__PURE__ */ new Map();
      for (A = ae; A <= W; A++) {
        const re = b[A] = L ? ur(b[A]) : Xt(b[A]);
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
          ze(re, x, k, !0);
          continue;
        }
        let Te;
        if (re.key != null)
          Te = N.get(re.key);
        else
          for (P = ae; P <= W; P++)
            if (fe[P - ae] === 0 && ln(re, b[P])) {
              Te = P;
              break;
            }
        Te === void 0 ? ze(re, x, k, !0) : (fe[Te - ae] = A + 1, Te >= he ? he = Te : oe = !0, K(
          re,
          b[Te],
          v,
          null,
          x,
          k,
          D,
          U,
          L
        ), H++);
      }
      const Me = oe ? _c(fe) : Zr;
      for (P = Me.length - 1, A = ee - 1; A >= 0; A--) {
        const re = ae + A, Te = b[re], Ye = b[re + 1], wt = re + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ye.el || Cl(Ye)
        ) : R;
        fe[A] === 0 ? K(
          null,
          Te,
          v,
          wt,
          x,
          k,
          D,
          U,
          L
        ) : oe && (P < 0 || A !== Me[P] ? Re(Te, v, wt, 2) : P--);
      }
    }
  }, Re = (m, b, v, R, x = null) => {
    const { el: k, type: D, transition: U, children: L, shapeFlag: A } = m;
    if (A & 6) {
      Re(m.component.subTree, b, v, R);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, v, R);
      return;
    }
    if (A & 64) {
      D.move(m, b, v, pt);
      return;
    }
    if (D === te) {
      n(k, b, v);
      for (let $ = 0; $ < L.length; $++)
        Re(L[$], b, v, R);
      n(m.anchor, b, v);
      return;
    }
    if (D === Ua) {
      M(m, b, v);
      return;
    }
    if (R !== 2 && A & 1 && U)
      if (R === 0)
        U.persisted && !k[La] ? n(k, b, v) : (U.beforeEnter(k), n(k, b, v), bt(() => U.enter(k), x));
      else {
        const { leave: $, delayLeave: W, afterLeave: G } = U, ae = () => {
          m.ctx.isUnmounted ? a(k) : n(k, b, v);
        }, N = () => {
          const P = k._isLeaving || !!k[La];
          k._isLeaving && k[La](
            !0
            /* cancelled */
          ), U.persisted && !P ? ae() : $(k, () => {
            ae(), G && G();
          });
        };
        W ? W(k, ae, N) : N();
      }
    else
      n(k, b, v);
  }, ze = (m, b, v, R = !1, x = !1) => {
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
    if ($ === -2 && (x = !1), U != null && (hr(), gn(U, null, v, m, !0), mr()), G != null && (b.renderCache[G] = void 0), X & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const N = X & 1 && W, P = !_n(m);
    let H;
    if (P && (H = D && D.onVnodeBeforeUnmount) && Kt(H, b, m), X & 6)
      er(m.component, v, R);
    else {
      if (X & 128) {
        m.suspense.unmount(v, R);
        return;
      }
      N && kr(m, null, b, "beforeUnmount"), X & 64 ? m.type.remove(
        m,
        b,
        v,
        pt,
        R
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== te || $ > 0 && $ & 64) ? He(
        A,
        b,
        v,
        !1,
        !0
      ) : (k === te && $ & 384 || !x && X & 16) && He(L, b, v), R && nt(m);
    }
    const ee = ae != null && G == null;
    (P && (H = D && D.onVnodeUnmounted) || N || ee) && bt(() => {
      H && Kt(H, b, m), N && kr(m, null, b, "unmounted"), ee && (m.el = null);
    }, v);
  }, nt = (m) => {
    const { type: b, el: v, anchor: R, transition: x } = m;
    if (b === te) {
      me(v, R);
      return;
    }
    if (b === Ua) {
      V(m);
      return;
    }
    const k = () => {
      a(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (m.shapeFlag & 1 && x && !x.persisted) {
      const { leave: D, delayLeave: U } = x, L = () => D(v, k);
      U ? U(m.el, k, L) : L();
    } else
      k();
  }, me = (m, b) => {
    let v;
    for (; m !== b; )
      v = I(m), a(m), m = v;
    a(b);
  }, er = (m, b, v) => {
    const { bum: R, scope: x, job: k, subTree: D, um: U, m: L, a: A } = m;
    Vi(L), Vi(A), R && Kn(R), x.stop(), k && (k.flags |= 8, ze(D, m, b, v)), U && bt(U, b), bt(() => {
      m.isUnmounted = !0;
    }, b);
  }, He = (m, b, v, R = !1, x = !1, k = 0) => {
    for (let D = k; D < m.length; D++)
      ze(m[D], b, v, R, x);
  }, gt = (m) => {
    if (m.shapeFlag & 6)
      return gt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), v = b && b[Mo];
    return v ? I(v) : b;
  };
  let _t = !1;
  const vt = (m, b, v) => {
    let R;
    m == null ? b._vnode && (ze(b._vnode, null, null, !0), R = b._vnode.component) : K(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      v
    ), b._vnode = m, _t || (_t = !0, Pi(R), Zs(), _t = !1);
  }, pt = {
    p: K,
    um: ze,
    m: Re,
    r: nt,
    mt: Rt,
    mc: qe,
    pc: pe,
    pbc: Le,
    n: gt,
    o: e
  };
  return {
    render: vt,
    hydrate: void 0,
    createApp: rc(vt)
  };
}
function Ma({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Rr({ effect: e, job: t }, r) {
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
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[i] = ur(a[i]), u.el = o.el), !r && u.patchFlag !== -2 && Sl(o, u)), u.type === ba && (u.patchFlag === -1 && (u = a[i] = ur(u)), u.el = o.el), u.type === yr && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, a, i, o, u;
  const h = e.length;
  for (n = 0; n < h; n++) {
    const S = e[n];
    if (S !== 0) {
      if (a = r[r.length - 1], e[a] < S) {
        t[n] = a, r.push(n);
        continue;
      }
      for (i = 0, o = r.length - 1; i < o; )
        u = i + o >> 1, e[r[u]] < S ? i = u + 1 : o = u;
      S < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n);
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
const te = /* @__PURE__ */ Symbol.for("v-fgt"), ba = /* @__PURE__ */ Symbol.for("v-txt"), yr = /* @__PURE__ */ Symbol.for("v-cmt"), Ua = /* @__PURE__ */ Symbol.for("v-stc"), Ur = [];
let kt = null;
function C(e = !1) {
  Ur.push(kt = e ? null : []);
}
function xl() {
  Ur.pop(), kt = Ur[Ur.length - 1] || null;
}
let Cn = 1;
function qi(e, t = !1) {
  Cn += e, e < 0 && kt && t && (kt.hasOnce = !0);
}
function Al(e) {
  return e.dynamicChildren = Cn > 0 ? kt || Zr : null, xl(), Cn > 0 && kt && kt.push(e), e;
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
    pr(
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
function ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rl = ({ key: e }) => e ?? null, Yn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ et(e) || de(e) ? { i: Ot, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, a = null, i = e === te ? 0 : 1, o = !1, u = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rl(t),
    ref: t && Yn(t),
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
    ctx: Ot
  };
  return u ? (ra(h, r), i & 128 && e.normalize(h)) : r && (h.shapeFlag |= Ue(r) ? 8 : 16), Cn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  kt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && kt.push(h), h;
}
const pr = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, i = !1) {
  if ((!e || e === Go) && (e = yr), kl(e)) {
    const u = nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && ra(u, r), Cn > 0 && !i && kt && (u.shapeFlag & 6 ? kt[kt.indexOf(e)] = u : kt.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: h } = t;
    u && !Ue(u) && (t.class = Dt(u)), Ce(h) && (/* @__PURE__ */ gi(h) && !ne(h) && (h = tt({}, h)), t.style = di(h));
  }
  const o = Ue(e) ? 1 : Tl(e) ? 128 : pa(e) ? 64 : Ce(e) ? 4 : de(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ gi(e) || bl(e) ? tt({}, e) : e : null;
}
function nn(e, t, r = !1, n = !1) {
  const { props: a, ref: i, patchFlag: o, children: u, transition: h } = e, S = t ? Cc(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: S,
    key: S && Rl(S),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? ne(i) ? i.concat(Yn(t)) : [i, Yn(t)] : Yn(t)
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
    transition: h,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nn(e.ssContent),
    ssFallback: e.ssFallback && nn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && n && vi(
    y,
    h.clone(y)
  ), y;
}
function be(e = " ", t = 0) {
  return pr(ba, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (C(), wc(yr, null, e)) : pr(yr, null, e);
}
function Xt(e) {
  return e == null || typeof e == "boolean" ? pr(yr) : ne(e) ? pr(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kl(e) ? ur(e) : pr(ba, null, String(e));
}
function ur(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nn(e);
}
function ra(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), ra(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !bl(t) ? t._ctx = Ot : a === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      ra(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ot }, r = 32;
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
        t.class !== n.class && (t.class = Dt([t.class, n.class]));
      else if (a === "style")
        t.style = di([t.style, n.style]);
      else if (sa(a)) {
        const i = t[a], o = n[a];
        o && i !== o && !(ne(i) && i.includes(o)) ? t[a] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !la(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Kt(e, t, r, n = null) {
  $t(e, t, 7, [
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
let dt = null;
const kc = () => dt || Ot;
let na, Tn;
{
  const e = ua(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (i) => {
      a.length > 1 ? a.forEach((o) => o(i)) : a[0](i);
    };
  };
  na = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => dt = r
  ), Tn = t(
    "__VUE_SSR_SETTERS__",
    (r) => xn = r
  );
}
const Rn = (e) => {
  const t = dt;
  return na(e), e.scope.on(), () => {
    e.scope.off(), na(t);
  };
}, Bi = () => {
  dt && dt.scope.off(), na(null);
};
function Ol(e) {
  return e.vnode.shapeFlag & 4;
}
let xn = !1;
function Rc(e, t = !1, r = !1) {
  t && Tn(t);
  const { props: n, children: a } = e.vnode, i = Ol(e);
  uc(e, n, i, t), hc(e, a, r || t);
  const o = i ? Oc(e, t) : void 0;
  return t && Tn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    hr();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, i = Rn(e), o = kn(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = xs(o);
    if (mr(), i(), (u || e.sp) && !_n(e) && al(e), u) {
      if (o.then(Bi, Bi), t)
        return o.then((h) => {
          Tn(!0);
          try {
            zi(e, h, t);
          } finally {
            Tn(!1);
          }
        }).catch((h) => {
          fa(h, e, 0);
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
  e.render || (e.render = n.render || Zt);
  {
    const a = Rn(e);
    hr();
    try {
      Xo(e);
    } finally {
      mr(), a();
    }
  }
}
const Nc = {
  get(e, t) {
    return Qe(e, "get", ""), e[t];
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
function ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gs(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in vn)
        return vn[r](e);
    },
    has(t, r) {
      return r in t || r in vn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return de(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ To(e, t, xn), Lc = "3.5.42";
let ii;
const Wi = typeof window < "u" && window.trustedTypes;
if (Wi)
  try {
    ii = /* @__PURE__ */ Wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Pl = ii ? (e) => ii.createHTML(e) : (e) => e, Dc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", cr = typeof document < "u" ? document : null, Ki = cr && /* @__PURE__ */ cr.createElement("template"), Uc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? cr.createElementNS(Dc, e) : t === "mathml" ? cr.createElementNS(Mc, e) : r ? cr.createElement(e, { is: r }) : cr.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => cr.createTextNode(e),
  createComment: (e) => cr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => cr.querySelector(e),
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
const Gi = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, a = Ue(r);
  let i = !1;
  if (r && !a) {
    if (t)
      if (Ue(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && pn(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && pn(n, o, "");
    for (const o in r) {
      o === "display" && (i = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !Ue(t) && t ? t[o] : void 0,
        u
      ) || pn(n, o, u) : pn(n, o, "");
    }
  } else if (a) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, i = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = i ? n.display : "", e[$c] && (n.display = "none"));
}
const qn = /\s*!important$/;
function pn(e, t, r) {
  if (ne(r))
    r.forEach((n) => pn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    qn.test(r) ? e.setProperty(t, r.replace(qn, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    qn.test(r) ? e.setProperty(
      Hr(n),
      r.replace(qn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Yi = ["Webkit", "Moz", "ms"], Fa = {};
function Bc(e, t) {
  const r = Fa[t];
  if (r)
    return r;
  let n = Ut(t);
  if (n !== "filter" && n in e)
    return Fa[t] = n;
  n = Rs(n);
  for (let a = 0; a < Yi.length; a++) {
    const i = Yi[a] + n;
    if (i in e)
      return Fa[t] = i;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Xi = "http://www.w3.org/1999/xlink";
function Ji(e, t, r, n, a, i = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Xi, t.slice(6, t.length)) : e.setAttributeNS(Xi, t, r) : r == null || i && !Ns(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qt(r) ? String(r) : r
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
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, h = r == null ? (
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
    u === "boolean" ? r = Ns(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Ir(e, t, r, n) {
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
    const [u, h] = Xc(t);
    if (n) {
      const S = i[t] = Qc(
        n,
        a
      );
      Ir(e, u, S, h);
    } else o && (Wc(e, u, o, h), i[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Hr(e.slice(2)), t];
}
let Ha = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => Ha || (Jc.then(() => Ha = 0), Ha = Date.now());
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
      for (let h = 0; h < o.length && !n._stopped; h++) {
        const S = o[h];
        S && $t(
          S,
          t,
          5,
          u
        );
      }
    } else
      $t(
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
  t === "class" ? Hc(e, n, o) : t === "style" ? qc(e, r, n) : sa(t) ? la(t) || Kc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Zi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ji(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? Zi(e, Ut(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ji(e, t, n, o));
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
  return es(t) && Ue(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Ut(t);
  return Array.isArray(r) ? r.some((a) => Ut(a) === n) : Object.keys(r).some((a) => Ut(a) === n);
}
const aa = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => Kn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function ts(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Lr = /* @__PURE__ */ Symbol("_assign"), Bn = /* @__PURE__ */ Symbol("_initialValue");
function $a(e, t, r) {
  return t && (e = e.trim()), r && (e = ca(e)), e;
}
const rs = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Bn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Bn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Lr] = aa(a);
    const i = n || a.props && a.props.type === "number";
    Ir(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Lr]($a(e.value, r, i));
    }), (r || i) && Ir(e, "change", () => {
      e.value = $a(e.value, r, i);
    }), t || (Ir(e, "compositionstart", nu), Ir(e, "compositionend", ts), Ir(e, "change", ts));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", i = e[Bn];
    delete e[Bn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Lr]($a(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: i } }, o) {
    if (e[Lr] = aa(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? ca(e.value) : e.value, h = t ?? "";
    if (u === h)
      return;
    const S = e.getRootNode();
    (S instanceof Document || S instanceof ShadowRoot) && S.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === h) || (e.value = h);
  }
}, Tt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Ir(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (h) => h.selected).map(
        (h) => r ? ca(ia(h)) : ia(h)
      ), i = e.multiple, o = i ? Fr(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        i,
        i ? ne(o) ? a.slice() : a : o
      ];
      try {
        e[Lr](o);
      } finally {
        Xs(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Lr] = aa(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ns(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Lr] = aa(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && ns(e, t);
  }
};
function au(e, t, r) {
  if (!r || ne(e)) return Tr(e, t);
  if (Fr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function ns(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Fr(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const o = e.options[a], u = ia(o);
      if (r)
        if (n) {
          const h = typeof u;
          h === "string" || h === "number" ? o.selected = t.some((S) => String(S) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (Tr(ia(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ia(e) {
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
}, zn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((a, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const u = su[t[o]];
      if (u && u(a, t)) return;
    }
    return e(a, ...i);
  }));
}, lu = /* @__PURE__ */ tt({ patchProp: eu }, Uc);
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
  return Ue(e) ? document.querySelector(e) : e;
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
    var n, a, i, o, u = [], h = !0, S = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(h = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); h = !0) ;
    } catch (y) {
      S = !0, a = y;
    } finally {
      try {
        if (!h && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (S) throw a;
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
let Ve = Object.freeze, Ke = Object.seal, Jr = Object.create, Ll = typeof Reflect < "u" && Reflect, si = Ll.apply, li = Ll.construct;
Ve || (Ve = function(t) {
  return t;
});
Ke || (Ke = function(t) {
  return t;
});
si || (si = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  return t.apply(r, a);
});
li || (li = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Pr = je(Array.prototype.forEach), wu = je(Array.prototype.lastIndexOf), ls = je(Array.prototype.pop), on = je(Array.prototype.push), Su = je(Array.prototype.splice), tn = Array.isArray, hn = je(String.prototype.toLowerCase), ja = je(String.prototype.toString), os = je(String.prototype.match), cn = je(String.prototype.replace), cs = je(String.prototype.indexOf), Eu = je(String.prototype.trim), Cu = je(Number.prototype.toString), Tu = je(Boolean.prototype.toString), us = typeof BigInt > "u" ? null : je(BigInt.prototype.toString), ds = typeof Symbol > "u" ? null : je(Symbol.prototype.toString), yt = je(Object.prototype.hasOwnProperty), un = je(Object.prototype.toString), Ze = je(RegExp.prototype.test), Or = xu(TypeError);
function je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return si(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return li(e, r);
  };
}
function ye(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : hn;
  if (ss && ss(e, null), !tn(t))
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
function At(e) {
  const t = Jr(null);
  for (const n of Il(e)) {
    var r = bu(n, 2);
    const a = r[0], i = r[1];
    yt(e, a) && (tn(i) ? t[a] = Au(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = At(i) : t[a] = i);
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
      return un(e);
    case "function":
    case "object": {
      if (e === null)
        return un(e);
      const t = e, r = Lt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : un(n);
      }
      return un(e);
    }
    default:
      return un(e);
  }
}
function Lt(e, t) {
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
const fs = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Va = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qa = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ba = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ps = Ve(["#text"]), hs = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), za = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ms = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wn = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ke(/\${[\w\W]*/g), Du = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Ke(/^aria-[\-\w]+$/), bs = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), ys = Ke(/<[/\w!]/g), gs = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), xt = {
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
}, Dl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = Ve(ye({}, Dl)), Bu = (function() {
  const e = {};
  return Pr(Dl, (t) => {
    e[t] = Ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ve(e);
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
}, Sr = function(t, r, n, a) {
  return yt(t, r) && tn(t[r]) ? ye(a.base ? At(a.base) : {}, t[r], a.transform) : n;
}, Wa = function(t, r, n) {
  const a = yt(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? At(a) : n();
};
function Ml() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ml(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== xt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, u = e.Element, h = e.NodeFilter, S = e.NamedNodeMap;
  S === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, I = u.prototype, j = Lt(I, "cloneNode"), se = Lt(I, "remove"), K = Lt(I, "nextSibling"), ue = Lt(I, "childNodes"), le = Lt(I, "parentNode"), z = Lt(I, "shadowRoot"), M = Lt(I, "attributes"), V = o && o.prototype ? Lt(o.prototype, "nodeType") : null, ce = o && o.prototype ? Lt(o.prototype, "nodeName") : null, Ie = o && o.prototype ? Lt(o.prototype, "ownerDocument") : null, Ne = function(d) {
    return V ? V(d) : d.nodeType;
  }, qe = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof i == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Le = "", rt, ft = !1, Ge = 0;
  const Rt = function() {
    if (Ge > 0)
      throw Or('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(d) {
    Rt(), Ge++;
    try {
      return Ee.createHTML(d);
    } finally {
      Ge--;
    }
  }, De = function(d) {
    Rt(), Ge++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Ge--;
    }
  }, ge = function() {
    return ft || (rt = Wu(E, a), ft = !0), rt;
  }, pe = r, Be = pe.implementation, _e = pe.createNodeIterator, Re = pe.createDocumentFragment, ze = pe.getElementsByTagName, nt = n.importNode;
  let me = _s();
  t.isSupported = typeof Il == "function" && typeof le == "function" && Be && Be.createHTMLDocument !== void 0;
  const er = Pu, He = Iu, gt = Lu, _t = Du, vt = Mu, pt = Uu, Pt = Fu, m = $u;
  let b = bs, v = null;
  const R = ye({}, [...fs, ...Va, ...qa, ...Ba, ...ps]);
  let x = null;
  const k = ye({}, [...hs, ...za, ...ms, ...Wn]);
  let D = Object.seal(Jr(null, {
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
  const A = Object.seal(Jr(null, {
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
  let X = !0, $ = !0, W = !1, G = !0, ae = !1, N = !0, P = !1, H = !1, ee = null, oe = null, he = !1, fe = !1, Me = !1, re = !1, Te = !0, Ye = !1;
  const wt = "user-content-";
  let tr = !0, at = !1, St = {}, Et = null;
  const jt = ye({}, [
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
  let Vt = null;
  const It = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let We = null;
  const rr = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), it = "http://www.w3.org/1998/Math/MathML", Ct = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let _r = st, $r = !1, an = null;
  const ga = ye({}, [it, Ct, st], ja), nr = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let jr = ye({}, nr);
  const On = Ve(["annotation-xml"]);
  let Vr = ye({}, On);
  const _a = ye({}, ["title", "style", "font", "a", "script"]);
  let vr = null;
  const Nn = ["application/xhtml+xml", "text/html"], va = "text/html";
  let Oe = null, wr = null;
  const wa = r.createElement("form"), qr = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, xr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (wr && wr === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = At(d), vr = // eslint-disable-next-line unicorn/prefer-includes
    Nn.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? va : d.PARSER_MEDIA_TYPE, Oe = vr === "application/xhtml+xml" ? ja : hn, v = Sr(d, "ALLOWED_TAGS", R, {
      transform: Oe
    }), x = Sr(d, "ALLOWED_ATTR", k, {
      transform: Oe
    }), an = Sr(d, "ALLOWED_NAMESPACES", ga, {
      transform: ja
    }), We = Sr(d, "ADD_URI_SAFE_ATTR", rr, {
      transform: Oe,
      base: rr
    }), Vt = Sr(d, "ADD_DATA_URI_TAGS", It, {
      transform: Oe,
      base: It
    }), Et = Sr(d, "FORBID_CONTENTS", jt, {
      transform: Oe
    }), U = Sr(d, "FORBID_TAGS", At({}), {
      transform: Oe
    }), L = Sr(d, "FORBID_ATTR", At({}), {
      transform: Oe
    }), St = yt(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? At(d.USE_PROFILES) : d.USE_PROFILES : !1, X = d.ALLOW_ARIA_ATTR !== !1, $ = d.ALLOW_DATA_ATTR !== !1, W = d.ALLOW_UNKNOWN_PROTOCOLS || !1, G = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = d.SAFE_FOR_TEMPLATES || !1, N = d.SAFE_FOR_XML !== !1, P = d.WHOLE_DOCUMENT || !1, fe = d.RETURN_DOM || !1, Me = d.RETURN_DOM_FRAGMENT || !1, re = d.RETURN_TRUSTED_TYPE || !1, he = d.FORCE_BODY || !1, Te = d.SANITIZE_DOM !== !1, Ye = d.SANITIZE_NAMED_PROPS || !1, tr = d.KEEP_CONTENT !== !1, at = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : bs, _r = typeof d.NAMESPACE == "string" ? d.NAMESPACE : st, jr = Wa(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ye({}, nr)
      // Default built-in map
    ), Vr = Wa(
      d,
      "HTML_INTEGRATION_POINTS",
      () => ye({}, On)
      // Default built-in map
    );
    const _ = Wa(d, "CUSTOM_ELEMENT_HANDLING", () => Jr(null));
    if (D = Jr(null), yt(_, "tagNameCheck") && qr(_.tagNameCheck) && (D.tagNameCheck = _.tagNameCheck), yt(_, "attributeNameCheck") && qr(_.attributeNameCheck) && (D.attributeNameCheck = _.attributeNameCheck), yt(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), Ke(D), ae && ($ = !1), Me && (fe = !0), St && (v = ye({}, ps), x = Jr(null), St.html === !0 && (ye(v, fs), ye(x, hs)), St.svg === !0 && (ye(v, Va), ye(x, za), ye(x, Wn)), St.svgFilters === !0 && (ye(v, qa), ye(x, za), ye(x, Wn)), St.mathMl === !0 && (ye(v, Ba), ye(x, ms), ye(x, Wn))), A.tagCheck = null, A.attributeCheck = null, yt(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? A.tagCheck = d.ADD_TAGS : tn(d.ADD_TAGS) && (v === R && (v = At(v)), ye(v, d.ADD_TAGS, Oe))), yt(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? A.attributeCheck = d.ADD_ATTR : tn(d.ADD_ATTR) && (x === k && (x = At(x)), ye(x, d.ADD_ATTR, Oe))), yt(d, "ADD_FORBID_CONTENTS") && tn(d.ADD_FORBID_CONTENTS) && (Et === jt && (Et = At(Et)), ye(Et, d.ADD_FORBID_CONTENTS, Oe)), tr && (v["#text"] = !0), P && ye(v, ["html", "head", "body"]), v.table && (ye(v, ["tbody"]), delete U.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Or('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Or('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        Le = Fe("");
      } catch (q) {
        throw Ee = O, q;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Le = "") : (Ee === void 0 && (Ee = ge()), Ee && typeof Le == "string" && (Le = Fe("")));
    Ve && Ve(d), wr = d;
  }, Pn = ye({}, [...Va, ...qa, ...Ou]), In = ye({}, [...Ba, ...Nu]), Ln = function(d, _, O) {
    return _.namespaceURI === st ? d === "svg" : _.namespaceURI === it ? d === "svg" && (O === "annotation-xml" || jr[O]) : !!Pn[d];
  }, Dn = function(d, _, O) {
    return _.namespaceURI === st ? d === "math" : _.namespaceURI === Ct ? d === "math" && Vr[O] : !!In[d];
  }, Sa = function(d, _, O) {
    return _.namespaceURI === Ct && !Vr[O] || _.namespaceURI === it && !jr[O] ? !1 : !In[d] && (_a[d] || !Pn[d]);
  }, Ea = function(d) {
    let _ = le(d);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: _r,
      tagName: "template"
    });
    const O = hn(d.tagName), q = hn(_.tagName);
    return an[d.namespaceURI] ? d.namespaceURI === Ct ? Ln(O, _, q) : d.namespaceURI === it ? Dn(O, _, q) : d.namespaceURI === st ? Sa(O, _, q) : !!(vr === "application/xhtml+xml" && an[d.namespaceURI]) : !1;
  }, qt = function(d) {
    on(t.removed, {
      element: d
    });
    try {
      le(d).removeChild(d);
    } catch {
      if (se(d), !le(d))
        throw Or("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Br = function(d, _, O) {
    try {
      d.removeAttributeNode(_);
    } catch {
      try {
        d.removeAttribute(O);
      } catch {
      }
    }
  }, Bt = function(d) {
    zr(d);
    const _ = ue(d);
    if (_) {
      const q = [];
      Pr(_, (Z) => {
        on(q, Z);
      }), Pr(q, (Z) => {
        try {
          se(Z);
        } catch {
        }
      });
    }
    const O = M(d);
    if (O)
      for (let q = O.length - 1; q >= 0; --q) {
        const Z = O[q], ie = Z && Z.name;
        typeof ie == "string" && Br(d, Z, ie);
      }
  }, ar = function(d, _, O) {
    if (!O)
      try {
        O = _.getAttributeNode(d);
      } catch {
        O = null;
      }
    on(t.removed, {
      attribute: O || null,
      from: _
    });
    try {
      O ? _.removeAttributeNode(O) : _.removeAttribute(d);
    } catch {
      try {
        _.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (fe || Me)
        try {
          qt(_);
        } catch {
        }
      else
        try {
          _.setAttribute(d, "");
        } catch {
        }
  }, Ca = function(d) {
    const _ = M(d);
    if (_)
      for (let O = _.length - 1; O >= 0; --O) {
        const q = _[O], Z = q && q.name;
        typeof Z != "string" || x[Oe(Z)] || Br(d, q, Z);
      }
  }, zr = function(d) {
    const _ = [d];
    for (; _.length > 0; ) {
      const O = _.pop();
      Ne(O) === xt.element && Ca(O);
      const Z = ue(O);
      if (Z)
        for (let ie = Z.length - 1; ie >= 0; --ie)
          _.push(Z[ie]);
    }
  }, Mn = function(d, _) {
    return N ? d === "patchsrc" ? !0 : d === "for" && _ !== "label" && _ !== "output" : !1;
  }, Ta = function(d) {
    if (!N)
      return;
    const _ = [d];
    for (; _.length > 0; ) {
      const O = _.pop(), q = Ne(O);
      if (q === xt.processingInstruction || q === xt.comment && Ze(gs, O.data)) {
        try {
          se(O);
        } catch {
        }
        continue;
      }
      if (q === xt.element) {
        const ie = O, Ae = Oe(qe(O));
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Mn("for", Ae) && ie.removeAttribute("for");
        } catch {
        }
      }
      const Z = ue(O);
      if (Z)
        for (let ie = Z.length - 1; ie >= 0; --ie)
          _.push(Z[ie]);
    }
  }, Un = function(d) {
    let _ = null, O = null;
    if (he)
      d = "<remove></remove>" + d;
    else {
      const ie = os(d, /^[\r\n\t ]+/);
      O = ie && ie[0];
    }
    vr === "application/xhtml+xml" && _r === st && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const q = Ee ? Fe(d) : d;
    if (_r === st)
      try {
        _ = new y().parseFromString(q, vr);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = Be.createDocument(_r, "template", null);
      try {
        _.documentElement.innerHTML = $r ? Le : q;
      } catch {
      }
    }
    const Z = _.body || _.documentElement;
    return d && O && Z.insertBefore(r.createTextNode(O), Z.childNodes[0] || null), _r === st ? ze.call(_, P ? "html" : "body")[0] : P ? _.documentElement : Z;
  }, Fn = function(d) {
    const _ = Ie ? Ie(d) : d.ownerDocument;
    return _e.call(
      _ || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Ar = function(d) {
    return d = cn(d, er, " "), d = cn(d, He, " "), d = cn(d, gt, " "), d;
  }, ir = function(d) {
    var _;
    d.normalize();
    const O = Ie ? Ie(d) : d.ownerDocument, q = _e.call(
      O || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_TEXT | h.SHOW_COMMENT | h.SHOW_CDATA_SECTION | h.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = q.nextNode();
    for (; Z; )
      Z.data = Ar(Z.data), Z = q.nextNode();
    const ie = (_ = d.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(d, "template");
    ie && Pr(ie, (Ae) => {
      sr(Ae.content) && ir(Ae.content);
    });
  }, zt = function(d) {
    const _ = ce ? ce(d) : null;
    return typeof _ != "string" || Oe(_) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, sr = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === xt.documentFragment;
    } catch {
      return !1;
    }
  }, w = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function g(F, d, _) {
    F.length !== 0 && Pr(F, (O) => {
      O.call(t, d, _, wr);
    });
  }
  const p = function(d, _) {
    return !!(N && d.hasChildNodes() && !w(d.firstElementChild) && Ze(ys, d.textContent) && Ze(ys, d.innerHTML) || N && d.namespaceURI === st && qu[_] && (w(d.firstElementChild) || typeof d.textContent == "string" && Ze(Bu[_], d.textContent)) || d.nodeType === xt.processingInstruction || N && d.nodeType === xt.comment && Ze(gs, d.data));
  }, Q = function(d, _) {
    if (d instanceof RegExp)
      return Ze(d, _);
    if (d instanceof Function) {
      for (var O = arguments.length, q = new Array(O > 2 ? O - 2 : 0), Z = 2; Z < O; Z++)
        q[Z - 2] = arguments[Z];
      return !!d(_, ...q);
    }
    return !1;
  }, $e = function(d, _, O) {
    if (!U[_] && Ci(_) && Q(D.tagNameCheck, _))
      return !1;
    if (tr && !Et[_]) {
      const q = le(d), Z = ue(d);
      if (Z && q) {
        const ie = Z.length;
        for (let Ae = ie - 1; Ae >= 0; --Ae) {
          const Pe = d === O ? j(Z[Ae], !0) : Z[Ae];
          q.insertBefore(Pe, K(d));
        }
      }
    }
    return qt(d), !0;
  }, Xe = function(d, _, O, q) {
    return d.length === 0 ? _ : _ === O || _ === q ? At(_) : _;
  }, Wt = function(d, _) {
    return d === _ || le(d) !== null ? !1 : (at && zr(d), !0);
  }, lr = function(d, _) {
    if (g(me.beforeSanitizeElements, d, null), Wt(d, _))
      return !0;
    if (zt(d))
      return qt(d), !0;
    const O = Oe(qe(d));
    if (v = Xe(me.uponSanitizeElement, v, R, ee), g(me.uponSanitizeElement, d, {
      tagName: O,
      allowedTags: v
    }), Wt(d, _))
      return !0;
    if (p(d, O))
      return qt(d), !0;
    if (U[O] || !(A.tagCheck instanceof Function && A.tagCheck(O)) && !v[O]) {
      const Z = $e(d, O, _);
      return Z === !1 && g(me.afterSanitizeElements, d, null), Z;
    }
    if (Ne(d) === xt.element && !Ea(d) || (O === "noscript" || O === "noembed" || O === "noframes") && Ze(ju, d.innerHTML))
      return qt(d), !0;
    if (ae && d.nodeType === xt.text) {
      const Z = Ar(d.textContent);
      d.textContent !== Z && (on(t.removed, {
        element: d.cloneNode()
      }), d.textContent = Z);
    }
    return g(me.afterSanitizeElements, d, null), !1;
  }, Wr = function(d, _, O) {
    if (L[_] || Mn(_, d) || Te && (_ === "id" || _ === "name") && (O in r || O in wa))
      return !1;
    const q = x[_] || A.attributeCheck instanceof Function && A.attributeCheck(_, d);
    return $ && Ze(_t, _) || X && Ze(vt, _) ? !0 : q ? We[_] || Ze(b, cn(O, Pt, "")) || (_ === "src" || _ === "xlink:href" || _ === "href") && d !== "script" && cs(O, "data:") === 0 && Vt[d] || W && !Ze(pt, cn(O, Pt, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ci(d) && Q(D.tagNameCheck, d) && Q(D.attributeNameCheck, _, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      _ === "is" && D.allowCustomizedBuiltInElements && Q(D.tagNameCheck, O)
    );
  }, Fl = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ci = function(d) {
    return !Fl[hn(d)] && Ze(m, d);
  }, Hl = function(d, _, O, q) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !O)
      switch (E.getAttributeType(d, _)) {
        case "TrustedHTML":
          return Fe(q);
        case "TrustedScriptURL":
          return De(q);
      }
    return q;
  }, $l = function(d, _, O, q) {
    try {
      O ? d.setAttributeNS(O, _, q) : d.setAttribute(_, q), zt(d) ? qt(d) : ls(t.removed);
    } catch {
      ar(_, d);
    }
  }, Ti = function(d) {
    g(me.beforeSanitizeAttributes, d, null);
    const _ = d.attributes;
    if (!_ || zt(d))
      return;
    x = Xe(me.uponSanitizeAttribute, x, k, oe);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let q = _.length;
    const Z = Oe(d.nodeName);
    for (; q--; ) {
      const ie = _[q], Ae = ie.name, Pe = ie.namespaceURI, ht = ie.value, mt = Oe(Ae), Aa = ht;
      let lt = Ae === "value" ? Aa : Eu(Aa);
      if (O.attrName = mt, O.attrValue = lt, O.keepAttr = !0, O.forceKeepAttr = void 0, g(me.uponSanitizeAttribute, d, O), lt = O.attrValue, Ye && (mt === "id" || mt === "name") && cs(lt, wt) !== 0 && (ar(Ae, d, ie), lt = wt + lt), N && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, lt)) {
        ar(Ae, d, ie);
        continue;
      }
      if (mt === "attributename" && os(lt, "href")) {
        ar(Ae, d, ie);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          ar(Ae, d, ie);
          continue;
        }
        if (!G && Ze(Vu, lt)) {
          ar(Ae, d, ie);
          continue;
        }
        if (ae && (lt = Ar(lt)), !Wr(Z, mt, lt)) {
          ar(Ae, d, ie);
          continue;
        }
        lt = Hl(Z, mt, Pe, lt), lt !== Aa && $l(d, Ae, Pe, lt);
      }
    }
    g(me.afterSanitizeAttributes, d, null);
  }, Hn = function(d) {
    let _ = null;
    const O = Fn(d);
    for (g(me.beforeSanitizeShadowDOM, d, null); _ = O.nextNode(); )
      if (g(me.uponSanitizeShadowNode, _, null), lr(_, d), Ti(_), sr(_.content) && Hn(_.content), Ne(_) === xt.element) {
        const q = z(_);
        sr(q) && (xa(q), Hn(q));
      }
    g(me.afterSanitizeShadowDOM, d, null);
  }, xa = function(d) {
    const _ = [{
      node: d,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const O = _.pop();
      if (O.shadow) {
        Hn(O.shadow);
        continue;
      }
      const q = O.node, ie = Ne(q) === xt.element, Ae = ue(q);
      if (Ae)
        for (let Pe = Ae.length - 1; Pe >= 0; --Pe)
          _.push({
            node: Ae[Pe],
            shadow: null
          });
      if (ie) {
        const Pe = ce ? ce(q) : null;
        if (typeof Pe == "string" && Oe(Pe) === "template") {
          const ht = q.content;
          sr(ht) && _.push({
            node: ht,
            shadow: null
          });
        }
      }
      if (ie) {
        const Pe = z(q);
        sr(Pe) && _.push({
          node: null,
          shadow: Pe
        }, {
          node: Pe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, O = null, q = null, Z = null;
    if ($r = !F, $r && (F = "<!-->"), typeof F != "string" && !w(F) && (F = ku(F), typeof F != "string"))
      throw Or("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (v = ee, x = oe) : xr(d), (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && (v = At(v)), me.uponSanitizeAttribute.length > 0 && (x = At(x)), t.removed = [];
    const ie = at && typeof F != "string" && w(F);
    if (ie) {
      Ta(F);
      const ht = qe(F);
      if (typeof ht == "string") {
        const mt = Oe(ht);
        if (!v[mt] || U[mt])
          throw Bt(F), Or("root node is forbidden and cannot be sanitized in-place");
      }
      if (zt(F))
        throw Bt(F), Or("root node is clobbered and cannot be sanitized in-place");
      try {
        xa(F);
      } catch (mt) {
        throw Bt(F), mt;
      }
    } else if (w(F))
      _ = Un("<!---->"), O = _.ownerDocument.importNode(F, !0), O.nodeType === xt.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? _ = O : _.appendChild(O), xa(O);
    else {
      if (!fe && !ae && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && re ? Fe(F) : F;
      if (_ = Un(F), !_)
        return fe ? null : re ? Le : "";
    }
    _ && he && qt(_.firstChild);
    const Ae = ie ? F : _;
    try {
      const ht = Fn(Ae);
      for (; q = ht.nextNode(); )
        lr(q, Ae), Ti(q), sr(q.content) && Hn(q.content);
    } catch (ht) {
      throw ie && (Bt(F), Pr(t.removed, (mt) => {
        mt.element && zr(mt.element);
      })), ht;
    }
    if (ie)
      return Pr(t.removed, (ht) => {
        ht.element && zr(ht.element);
      }), ae && ir(F), F;
    if (fe) {
      if (ae && ir(_), Me)
        for (Z = Re.call(_.ownerDocument); _.firstChild; )
          Z.appendChild(_.firstChild);
      else
        Z = _;
      return (x.shadowroot || x.shadowrootmode) && (Z = nt.call(n, Z, !0)), Z;
    }
    let Pe = P ? _.outerHTML : _.innerHTML;
    return P && v["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Ze(Hu, _.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Pe), ae && (Pe = Ar(Pe)), Ee && re ? Fe(Pe) : Pe;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xr(F), H = !0, ee = v, oe = x;
  }, t.clearConfig = function() {
    wr = null, H = !1, ee = null, oe = null, Ee = rt, Le = "";
  }, t.isValidAttribute = function(F, d, _) {
    wr || xr({});
    const O = Oe(F), q = Oe(d);
    return Wr(O, q, _);
  }, t.addHook = function(F, d) {
    typeof d == "function" && yt(me, F) && on(me[F], d);
  }, t.removeHook = function(F, d) {
    if (yt(me, F)) {
      if (d !== void 0) {
        const _ = wu(me[F], d);
        return _ === -1 ? void 0 : Su(me[F], _, 1)[0];
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
var Ka, vs;
function Yu() {
  if (vs) return Ka;
  vs = 1;
  var e = /["'&<>]/;
  Ka = t;
  function t(r) {
    var n = "" + r, a = e.exec(n);
    if (!a)
      return n;
    var i, o = "", u = 0, h = 0;
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
      h !== u && (o += n.substring(h, u)), h = u + 1, o += i;
    }
    return h !== u ? o + n.substring(h, u) : o;
  }
  return Ka;
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
  }, h = (K) => K, S = (u.sanitize ? Ku.sanitize : h) || h, y = u.escape ? ws : h, E = (K) => typeof K == "string" || typeof K == "number", I = (K, ue, le) => K.replace(/%n/g, "" + le).replace(/{([^{}]*)}/g, (z, M) => {
    if (ue === void 0 || !(M in ue))
      return y(z);
    const V = ue[M];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? ws : h)(`${V.value}`) : y(z);
  });
  let se = (a?.bundle ?? Ju(e)).translations[t] || t;
  return se = Array.isArray(se) ? se[0] : se, S(typeof i == "object" || o !== void 0 ? I(
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
}, Fm = ["action", "onSubmit"], Hm = ["value"], $m = ["value"], jm = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], Vm = ["data-library-star-error"], qm = { class: "library-cover-summary" }, Bm = { class: "library-cover-primary" }, zm = ["aria-label"], Wm = ["href"], Km = ["onToggle"], Gm = ["aria-label"], Ym = { class: "library-cover-meta" }, Xm = {
  key: 0,
  class: "library-creator"
}, Jm = { class: "library-cover-detail-list" }, Zm = { class: "library-cover-detail-chip" }, Qm = {
  key: 0,
  class: "library-cover-detail-chip"
}, eb = {
  key: 1,
  class: "library-cover-detail-chip"
}, tb = {
  key: 2,
  class: "library-cover-detail-chip"
}, rb = {
  key: 3,
  class: "library-cover-detail-chip"
}, nb = {
  key: 4,
  class: "library-cover-detail-chip"
}, ab = {
  key: 5,
  class: "library-cover-detail-chip"
}, ib = {
  key: 6,
  class: "library-cover-detail-chip"
}, sb = {
  key: 1,
  class: "library-muted library-cover-description"
}, lb = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, ob = { key: 0 }, cb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, ub = {
  key: 0,
  class: "library-muted"
}, db = { class: "library-cover-actions" }, fb = ["href"], pb = ["href"], hb = ["onClick"], mb = ["href"], bb = ["aria-label"], yb = { class: "library-pagination-range" }, gb = { key: 0 }, _b = ["href"], vb = {
  key: 1,
  class: "library-muted"
}, wb = ["href"], Sb = {
  key: 3,
  class: "library-muted"
}, Eb = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, Cb = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, Tb = ["src", "alt"], xb = { class: "library-muted library-catalogue-eyebrow" }, Ab = { id: "library-detail-drawer-heading" }, kb = {
  key: 0,
  class: "library-creator"
}, Rb = {
  key: 1,
  class: "library-muted"
}, Ob = { class: "library-detail-drawer-facts" }, Nb = { key: 0 }, Pb = { key: 1 }, Ib = { key: 2 }, Lb = { class: "library-detail-drawer-actions" }, Db = ["href"], Mb = ["href"], Ub = ["aria-label"], Fb = ["disabled"], Hb = ["disabled"], $b = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ Mt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ Mt((a.items || []).map((w) => ({ ...w }))), o = B(() => i), u = B(() => a.shelves || []), h = B(() => a.formats || []), S = B(() => a.publications || []), y = B(() => a.publicationSummaries || []), E = B(() => a.publicationIssueContext || null), I = B(() => a.publicationYears || []), j = B(() => a.creators || []), se = B(() => a.scanStatuses || []), K = B(() => a.workflowStatuses || []), ue = B(() => a.genres || []), le = B(() => a.classifications || []), z = B(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), M = /* @__PURE__ */ Mt({
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
    }), V = B(() => a.settingsUrl || ""), ce = B(() => a.requestToken || ""), Ie = B(() => a.metadataExportUrl || ""), Ne = B(() => a.metadataSidecarManifestUrl || ""), qe = B(() => a.metadataSidecarBundleUrl || ""), Ee = B(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), Le = B(() => a.batchTagUrl || "/apps/library/bulk/tags"), rt = B(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ft = B(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = B(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Rt = B(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Fe = B(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), De = B(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ge = B(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), pe = B(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), Be = B(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), _e = /* @__PURE__ */ Mt({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Re = B(() => _e.summary || {}), ze = B(() => {
      const w = Number(Re.value.generatedAt || 0);
      return w > 0 ? new Date(w * 1e3).toLocaleString() : "";
    }), nt = B(() => Re.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), me = B(() => Re.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), er = B(() => Re.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), He = B(() => a.discoveryPage === "publication"), gt = B(() => a.discoveryPage === "year"), _t = B(() => a.discoveryPage === "creator"), vt = B(() => He.value || gt.value || _t.value), pt = B(() => a.discoveryTitle || M.publication || M.year || M.creator || ""), Pt = B(() => vt.value ? pt.value : s("library", "Library")), m = B(() => _t.value ? s("library", "Creator") : gt.value ? s("library", "Publication year") : s("library", "Publication / series")), b = B(() => Number(a.rootCount || 0)), v = B(() => Number(a.enabledRootCount || 0)), R = B(() => b.value === 0), x = B(() => b.value > 0 && v.value === 0), k = B(() => N.value.length > 0), D = {
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
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const g = w.get("batchMetadataField") || "field", p = w.get("batchMetadataApplied") || "0", Q = w.get("batchMetadataUnchanged") || "0", $e = w.get("batchMetadataSkipped") || "0";
      return s("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: p, field: g, unchanged: Q, skipped: $e });
    }), L = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? s("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), A = B(() => a.savedCollections || []), X = B(() => a.savedCollectionSaveUrl || "/apps/library/collections"), $ = B(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), W = ["compact", "gallery", "shelf"], G = B(() => W.includes(M.view) ? M.view : "compact"), ae = B(() => ({
      "library-cover-gallery--compact": G.value === "compact",
      "library-cover-gallery--gallery": G.value === "gallery",
      "library-cover-gallery--shelf": G.value === "shelf"
    })), N = B(() => Object.entries(D).map(([w, g]) => ({ key: w, label: g, value: M[w] || "" })).filter((w) => String(w.value).trim() !== "")), P = B(() => Object.entries(M).filter(([w, g]) => !["q", "sort", "starred"].includes(w) && String(g || "").trim() !== "").map(([w, g]) => ({ key: w, value: g }))), H = B(() => Object.entries(M).filter(([w, g]) => String(g || "").trim() !== "").map(([w, g]) => ({ key: w, value: g }))), ee = /* @__PURE__ */ Mt({}), oe = /* @__PURE__ */ Mt({}), he = B(() => o.value.filter((w) => w.starred || w.workflowStatus === "reading" || w.lastOpenedAt).slice(0, 5)), fe = B(() => o.value.find((w) => w.description || w.publication || w.creators) || o.value[0] || null), Me = B(() => !vt.value && o.value.length > 0), re = /* @__PURE__ */ Ni(null), Te = B(() => re.value ? o.value.findIndex((w) => w.id === re.value.id) : -1), Ye = B(() => Te.value > 0 ? o.value[Te.value - 1] : null), wt = B(() => Te.value >= 0 && Te.value < o.value.length - 1 ? o.value[Te.value + 1] : null), tr = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], at = B(() => {
      const w = M.scannerConflicts === "1" || String(M.weakMetadata || "").trim() !== "", g = w ? o.value.find((p) => Et(p).length > 0) : null;
      return {
        enabled: w,
        item: g,
        fields: g ? Et(g) : [],
        reviewNextUrl: Fe.value,
        skipUrl: z.value.nextUrl || Fe.value
      };
    });
    function St(w) {
      return Array.isArray(w) ? JSON.stringify(w) : w == null ? "" : String(w);
    }
    function Et(w) {
      const g = w.fieldValues || {}, p = w.fieldSources || {};
      return tr.filter((Q) => Object.prototype.hasOwnProperty.call(g, Q)).map((Q) => {
        const $e = St(w[Q]), Xe = St(g[Q]), Wt = St(p[Q] || w.metadataSource || "scanner"), lr = Wt.includes("filename") || Wt.includes("path") ? Xe : "", Wr = Wt.includes("sidecar") ? Xe : "";
        return { field: Q, currentValue: $e, scannerCandidate: Xe, pathTemplateCandidate: lr, sidecarValue: Wr, sourceProvenance: Wt, differs: $e !== Xe };
      }).filter((Q) => Q.differs);
    }
    function jt(w) {
      re.value = w;
    }
    function Vt() {
      re.value = null;
    }
    function It(w) {
      w && (re.value = w);
    }
    const We = /* @__PURE__ */ Ni(null);
    let rr = null, it = 0, Ct = null;
    function st(w) {
      const g = new URLSearchParams(new FormData(w));
      for (const p of Array.from(g.keys()))
        String(g.get(p) || "").trim() === "" && g.delete(p);
      return g.delete("page"), g.get("view") === "compact" && g.delete("view"), g;
    }
    function _r(w) {
      i.splice(0, i.length, ...(w.items || []).map((g) => ({ ...g })));
      for (const g of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(w, g) && (a[g] = w[g]);
      Object.assign(M, w.activeFilters || {});
    }
    async function $r(w = !1) {
      if (!(_e.loading || _e.refreshing)) {
        w ? _e.refreshing = !0 : _e.loading = !0, _e.error = "";
        try {
          const g = await fetch(`${Be.value}${w ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!g.ok)
            throw new Error(`Import health request failed: ${g.status}`);
          _e.summary = await g.json(), _e.loaded = !0;
        } catch (g) {
          _e.error = g?.message || String(g);
        } finally {
          _e.loading = !1, _e.refreshing = !1;
        }
      }
    }
    async function an(w) {
      w && w.currentTarget && w.currentTarget.open !== !0 || _e.loaded || _e.loading || await $r(!1);
    }
    async function ga() {
      await $r(!0);
    }
    async function nr(w) {
      const g = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!g) return;
      const Q = st(g).toString(), $e = Q ? `?${Q}` : "", Xe = ++it;
      Ct?.abort();
      const Wt = new AbortController();
      Ct = Wt;
      try {
        const lr = await fetch(Ee.value + $e, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Wt.signal
        });
        if (Xe !== it) return;
        if (!lr.ok) {
          g.submit();
          return;
        }
        const Wr = await lr.json();
        if (Xe !== it) return;
        _r(Wr), history.replaceState({}, "", Q ? `?${Q}` : window.location.pathname);
      } catch (lr) {
        Xe === it && lr?.name !== "AbortError" && g.submit();
      } finally {
        Xe === it && (Ct = null);
      }
    }
    function jr(w) {
      nr(w);
    }
    function On(w) {
      window.clearTimeout(rr), rr = window.setTimeout(() => jr(w), 350);
    }
    function Vr(w) {
      const g = new URLSearchParams();
      for (const [Q, $e] of Object.entries(M)) {
        const Xe = String($e || "").trim();
        Xe !== "" && Q !== w && !(Q === "sort" && Xe === "title") && !(Q === "view" && Xe === "compact") && g.set(Q, Xe);
      }
      const p = g.toString();
      return p ? `?${p}` : "?";
    }
    function _a() {
      return Vr("q");
    }
    const vr = B(() => a.smartViewCounts || {}), Nn = B(() => {
      const w = {};
      for (const [g, p] of Object.entries(M)) {
        const Q = String(p || "").trim();
        Q !== "" && !(g === "sort" && Q === "title") && (w[g] = Q);
      }
      return w;
    }), va = B(() => JSON.stringify(Nn.value)), Oe = B(() => Object.keys(Nn.value).length > 0), wr = B(() => [
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
    ]), wa = B(() => [
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
    function qr(w) {
      if (!W.includes(w)) return;
      M.view = w;
      const g = new URLSearchParams(window.location.search);
      w === "compact" ? g.delete("view") : g.set("view", w), g.delete("page"), history.replaceState({}, "", g.toString() ? `?${g.toString()}` : window.location.pathname);
    }
    function xr(w) {
      const g = new URLSearchParams(window.location.search);
      for (const Q of Object.keys(D))
        g.delete(Q);
      g.delete("page");
      for (const [Q, $e] of Object.entries(w))
        String($e || "").trim() !== "" && g.set(Q, String($e));
      const p = g.toString();
      return p ? `?${p}` : "?";
    }
    function Pn(w) {
      return xr(w || {});
    }
    function In(w) {
      return $.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function Ln(w) {
      return String(w || "").toUpperCase();
    }
    function Dn(w) {
      return w.nextcloudTags || [];
    }
    function Sa(w) {
      return y.value.find((p) => p.publication === w)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(w)}`;
    }
    function Ea(w) {
      return a.publicationYearLandingUrls?.[w] || `/apps/library/years/${encodeURIComponent(w)}`;
    }
    function qt(w) {
      return a.creatorLandingUrls?.[w] || `/apps/library/creators/${encodeURIComponent(w)}`;
    }
    function Br(w) {
      const g = w?.target?.value || "";
      g && (window.location.href = g);
    }
    function Bt(w) {
      return oe[w.id] || "loading";
    }
    function ar(w) {
      oe[w.id] = "loaded";
    }
    function Ca(w) {
      oe[w.id] = "error";
    }
    function zr(w, g) {
      ee[w] = !!g?.currentTarget?.open;
    }
    function Mn(w) {
      const g = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(g);
    }
    function Ta(w) {
      if (w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Mn(w.target))
        return;
      w.preventDefault();
      const g = We.value?.closest?.(".library-workspace-panel--refine");
      g && (g.open = !0), We.value?.focus(), We.value?.select?.();
    }
    function Un(w) {
      w.key !== "Escape" || document.activeElement !== We.value || M.q === "" || (w.preventDefault(), M.q = "", We.value.value = "", window.clearTimeout(rr), jr({ currentTarget: We.value }));
    }
    function Fn(w) {
      return !re.value || w.metaKey || w.ctrlKey || w.altKey ? !1 : w.key === "Escape" ? (w.preventDefault(), Vt(), !0) : w.key === "ArrowLeft" && Ye.value ? (w.preventDefault(), It(Ye.value), !0) : w.key === "ArrowRight" && wt.value ? (w.preventDefault(), It(wt.value), !0) : !1;
    }
    function Ar(w) {
      Fn(w) || (Ta(w), Un(w));
    }
    sl(() => {
      window.addEventListener("keydown", Ar);
    }), ll(() => {
      window.removeEventListener("keydown", Ar), window.clearTimeout(rr), it += 1, Ct?.abort(), Ct = null;
    });
    const ir = /* @__PURE__ */ Mt({}), zt = /* @__PURE__ */ Mt({});
    async function sr(w, g) {
      const p = g?.currentTarget?.closest?.("form") || g?.currentTarget;
      if (!p || !w?.starUrl || ir[w.id]) return;
      const Q = !!w.starred;
      ir[w.id] = !0, zt[w.id] = "", w.starred = !Q;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(p),
          credentials: "same-origin"
        })).ok || (w.starred = Q, zt[w.id] = s("library", "Could not update star. Try again."));
      } catch {
        w.starred = Q, zt[w.id] = s("library", "Could not update star. Try again.");
      } finally {
        ir[w.id] = !1;
      }
    }
    return (w, g) => (C(), T("div", Zu, [
      l("section", Qu, [
        l("nav", {
          class: "library-catalogue-workspace library-workspace-menubar",
          "aria-label": f(s)("library", "One catalogue workspace")
        }, [
          l("details", td, [
            l("summary", rd, [
              g[22] || (g[22] = l("span", {
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
              onSubmit: zn(nr, ["prevent"])
            }, [
              (C(!0), T(te, null, ve(P.value, (p) => (C(), T("input", {
                key: p.key,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, ld))), 128)),
              l("div", od, [
                l("label", {
                  class: "library-quick-filter-search",
                  title: f(s)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    be(c(f(s)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                    g[23] || (g[23] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  ot(l("input", {
                    ref_key: "quickSearchInput",
                    ref: We,
                    "onUpdate:modelValue": g[0] || (g[0] = (p) => M.q = p),
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
                    ot(l("select", {
                      "onUpdate:modelValue": g[1] || (g[1] = (p) => M.sort = p),
                      name: "sort",
                      onChange: nr
                    }, [
                      l("option", pd, c(f(s)("library", "Title")), 1),
                      l("option", hd, c(f(s)("library", "Recently added")), 1),
                      l("option", md, c(f(s)("library", "Publication date")), 1),
                      l("option", bd, c(f(s)("library", "Series")), 1),
                      l("option", yd, c(f(s)("library", "Recently opened")), 1),
                      l("option", gd, c(f(s)("library", "Format")), 1)
                    ], 544), [
                      [Tt, M.sort]
                    ])
                  ]),
                  l("label", null, [
                    be(c(f(s)("library", "Starred")), 1),
                    ot(l("select", {
                      "onUpdate:modelValue": g[2] || (g[2] = (p) => M.starred = p),
                      name: "starred",
                      onChange: nr
                    }, [
                      l("option", _d, c(f(s)("library", "All")), 1),
                      l("option", vd, c(f(s)("library", "Starred")), 1)
                    ], 544), [
                      [Tt, M.starred]
                    ])
                  ]),
                  l("label", null, [
                    be(c(f(s)("library", "Size")), 1),
                    l("select", {
                      value: z.value.limit,
                      name: "limit",
                      onChange: nr
                    }, [
                      (C(), T(te, null, ve(n, (p) => l("option", {
                        key: p,
                        value: p
                      }, c(p), 9, Sd)), 64))
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
              onSubmit: zn(nr, ["prevent"])
            }, [
              l("label", null, [
                be(c(f(s)("library", "Type")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[3] || (g[3] = (p) => M.type = p),
                  name: "type"
                }, [
                  l("option", xd, c(f(s)("library", "All types")), 1),
                  (C(), T(te, null, ve(r, (p) => l("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Ad)), 64))
                ], 512), [
                  [Tt, M.type]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Series / periodical")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[4] || (g[4] = (p) => M.publication = p),
                  name: "publication"
                }, [
                  l("option", kd, c(f(s)("library", "All series and periodicals")), 1),
                  (C(!0), T(te, null, ve(S.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Rd))), 128))
                ], 512), [
                  [Tt, M.publication]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Publication year")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[5] || (g[5] = (p) => M.year = p),
                  name: "year"
                }, [
                  l("option", Od, c(f(s)("library", "All years")), 1),
                  (C(!0), T(te, null, ve(I.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Nd))), 128))
                ], 512), [
                  [Tt, M.year]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Creator")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[6] || (g[6] = (p) => M.creator = p),
                  name: "creator",
                  title: "Exact full-field creator matches only"
                }, [
                  l("option", Pd, c(f(s)("library", "All creators")), 1),
                  (C(!0), T(te, null, ve(j.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Id))), 128))
                ], 512), [
                  [Tt, M.creator]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Nextcloud tag")), 1),
                ot(l("input", {
                  "onUpdate:modelValue": g[7] || (g[7] = (p) => M.tag = p),
                  type: "text",
                  name: "tag",
                  placeholder: "photography"
                }, null, 512), [
                  [rs, M.tag]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Format")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[8] || (g[8] = (p) => M.format = p),
                  name: "format"
                }, [
                  l("option", Ld, c(f(s)("library", "All formats")), 1),
                  (C(!0), T(te, null, ve(h.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(Ln(p)), 9, Dd))), 128))
                ], 512), [
                  [Tt, M.format]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Shelf")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[9] || (g[9] = (p) => M.shelf = p),
                  name: "shelf"
                }, [
                  l("option", Md, c(f(s)("library", "All shelves")), 1),
                  (C(!0), T(te, null, ve(u.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Ud))), 128))
                ], 512), [
                  [Tt, M.shelf]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Scan status")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[10] || (g[10] = (p) => M.status = p),
                  name: "status"
                }, [
                  l("option", Fd, c(f(s)("library", "All scan statuses")), 1),
                  (C(!0), T(te, null, ve(se.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, Hd))), 128))
                ], 512), [
                  [Tt, M.status]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Workflow status")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[11] || (g[11] = (p) => M.workflowStatus = p),
                  name: "workflowStatus"
                }, [
                  l("option", $d, c(f(s)("library", "All workflow statuses")), 1),
                  (C(!0), T(te, null, ve(K.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, jd))), 128))
                ], 512), [
                  [Tt, M.workflowStatus]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Genre")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[12] || (g[12] = (p) => M.genre = p),
                  name: "genre"
                }, [
                  l("option", Vd, c(f(s)("library", "All genres")), 1),
                  (C(!0), T(te, null, ve(ue.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, qd))), 128))
                ], 512), [
                  [Tt, M.genre]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Classification")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[13] || (g[13] = (p) => M.classification = p),
                  name: "classification"
                }, [
                  l("option", Bd, c(f(s)("library", "All classifications")), 1),
                  (C(!0), T(te, null, ve(le.value, (p) => (C(), T("option", {
                    key: p,
                    value: p
                  }, c(p), 9, zd))), 128))
                ], 512), [
                  [Tt, M.classification]
                ])
              ]),
              l("label", null, [
                be(c(f(s)("library", "Scanner conflicts")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[14] || (g[14] = (p) => M.scannerConflicts = p),
                  name: "scannerConflicts"
                }, [
                  l("option", Wd, c(f(s)("library", "All metadata")), 1),
                  l("option", Kd, c(f(s)("library", "Needs review")), 1)
                ], 512), [
                  [Tt, M.scannerConflicts]
                ])
              ]),
              l("button", Gd, c(f(s)("library", "Apply filters")), 1),
              l("a", Yd, c(f(s)("library", "Clear")), 1)
            ], 40, Td)
          ]),
          l("details", Xd, [
            l("summary", Jd, [
              g[24] || (g[24] = l("span", {
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
            Me.value ? (C(), T("article", tf, [
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
                  onClick: g[15] || (g[15] = (p) => jt(he.value[0]))
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
                onClick: g[16] || (g[16] = (p) => jt(fe.value))
              }, c(f(s)("library", "Peek")), 1)
            ])) : Y("", !0),
            l("nav", {
              class: "library-useful-view-links",
              "aria-label": f(s)("library", "Useful views")
            }, [
              (C(!0), T(te, null, ve(wr.value, (p) => (C(), T("a", {
                key: p.key,
                class: "library-useful-view-chip",
                href: xr(p.filters),
                title: f(s)("library", p.description)
              }, [
                l("strong", null, c(f(s)("library", p.label)), 1),
                l("small", df, c(Number(vr.value[p.key] || 0)), 1)
              ], 8, uf))), 128))
            ], 8, cf),
            l("div", ff, [
              y.value.length > 0 ? (C(), T("label", {
                key: 0,
                class: "library-shortcut-select-card library-periodical-groups",
                title: f(s)("library", "Jump into recurring publications with one click.")
              }, [
                l("span", null, c(f(s)("library", "Series / periodicals")), 1),
                l("select", { onChange: Br }, [
                  l("option", hf, c(f(s)("library", "Choose series")), 1),
                  (C(!0), T(te, null, ve(y.value, (p) => (C(), T("option", {
                    key: p.publication,
                    value: Sa(p.publication)
                  }, c(p.publication) + " · " + c(p.itemCount), 9, mf))), 128))
                ], 32)
              ], 8, pf)) : Y("", !0),
              I.value.length > 0 ? (C(), T("label", bf, [
                l("span", null, c(f(s)("library", "Publication year")), 1),
                l("select", { onChange: Br }, [
                  l("option", yf, c(f(s)("library", "Choose year")), 1),
                  (C(!0), T(te, null, ve(I.value, (p) => (C(), T("option", {
                    key: p,
                    value: Ea(p)
                  }, c(p), 9, gf))), 128))
                ], 32)
              ])) : Y("", !0),
              j.value.length > 0 ? (C(), T("label", _f, [
                l("span", null, c(f(s)("library", "Creator")), 1),
                l("select", { onChange: Br }, [
                  l("option", vf, c(f(s)("library", "Choose creator")), 1),
                  (C(!0), T(te, null, ve(j.value, (p) => (C(), T("option", {
                    key: p,
                    value: qt(p)
                  }, c(p), 9, wf))), 128))
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
                title: Oe.value ? "" : f(s)("library", "Choose search terms or filters first, then save them as a custom collection.")
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Tf),
                l("input", {
                  type: "hidden",
                  name: "savedCollectionFilters",
                  value: va.value
                }, null, 8, xf),
                l("label", null, [
                  be(c(f(s)("library", "Collection name")), 1),
                  l("input", {
                    type: "text",
                    name: "savedCollectionName",
                    placeholder: f(s)("library", "e.g. Bremen photo books"),
                    disabled: !Oe.value,
                    autocomplete: "off"
                  }, null, 8, Af)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  disabled: !Oe.value,
                  title: f(s)("library", "Save current view")
                }, c(f(s)("library", "Save")), 9, kf)
              ], 8, Cf),
              A.value.length > 0 ? (C(), T("nav", {
                key: 0,
                class: "library-saved-collection-links",
                "aria-label": f(s)("library", "Saved custom collections")
              }, [
                (C(!0), T(te, null, ve(A.value, (p) => (C(), T("article", {
                  key: p.id,
                  class: "library-saved-collection-card"
                }, [
                  l("a", {
                    class: "library-saved-collection-link",
                    href: Pn(p.filters)
                  }, [
                    l("strong", null, c(p.name), 1),
                    l("span", null, c(Number(p.count || 0)) + " " + c(f(s)("library", "items")), 1)
                  ], 8, Of),
                  l("form", {
                    method: "post",
                    action: In(p.id),
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
              g[25] || (g[25] = l("span", {
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
                action: Le.value,
                class: "library-batch-action-card library-batch-tag-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, jf),
                (C(!0), T(te, null, ve(H.value, (p) => (C(), T("input", {
                  key: p.key,
                  type: "hidden",
                  name: p.key,
                  value: p.value
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
                action: rt.value,
                class: "library-batch-action-card library-batch-tag-remove-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Wf),
                (C(!0), T(te, null, ve(H.value, (p) => (C(), T("input", {
                  key: `remove-tag-${p.key}`,
                  type: "hidden",
                  name: p.key,
                  value: p.value
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
                action: ft.value,
                class: "library-batch-action-card library-batch-metadata-reset-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Jf),
                (C(!0), T(te, null, ve(H.value, (p) => (C(), T("input", {
                  key: `reset-${p.key}`,
                  type: "hidden",
                  name: p.key,
                  value: p.value
                }, null, 8, Zf))), 128)),
                g[26] || (g[26] = l("input", {
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
                action: Ge.value,
                class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                target: "_blank"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, tp),
                (C(!0), T(te, null, ve(H.value, (p) => (C(), T("input", {
                  key: `edit-preview-${p.key}`,
                  type: "hidden",
                  name: p.key,
                  value: p.value
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
                  g[27] || (g[27] = l("input", {
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
                action: Rt.value,
                class: "library-batch-action-card library-batch-cover-refresh-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, mp),
                (C(!0), T(te, null, ve(H.value, (p) => (C(), T("input", {
                  key: `cover-${p.key}`,
                  type: "hidden",
                  name: p.key,
                  value: p.value
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
              g[28] || (g[28] = l("span", {
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
              (C(!0), T(te, null, ve(wa.value, (p) => (C(), T("a", {
                key: p.key,
                class: "library-weak-metadata-card",
                href: xr(p.filters),
                title: f(s)("library", p.description)
              }, [
                l("span", null, [
                  l("strong", null, c(f(s)("library", p.label)), 1)
                ]),
                l("b", null, c(Number(vr.value[p.key] || 0)), 1)
              ], 8, Cp))), 128))
            ], 8, Ep),
            l("div", Tp, [
              l("article", {
                title: f(s)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
              }, [
                l("h4", null, c(f(s)("library", "Metadata-error queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: nt.value.reviewUrl || "?status=metadata_error"
                }, c(f(s)("library", "Open metadata-error rows")), 9, Ap),
                l("a", {
                  class: "button secondary",
                  href: ge.value
                }, c(f(s)("library", "Export metadata-error rows")), 9, kp),
                l("form", {
                  method: "post",
                  action: Le.value,
                  class: "library-review-queue-tag-form"
                }, [
                  l("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Op),
                  g[29] || (g[29] = l("input", {
                    type: "hidden",
                    name: "status",
                    value: "metadata_error"
                  }, null, -1)),
                  g[30] || (g[30] = l("input", {
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
                  href: Fe.value
                }, c(f(s)("library", "Review scanner conflicts")), 9, Ip),
                l("form", {
                  method: "post",
                  action: Le.value,
                  class: "library-review-queue-tag-form"
                }, [
                  l("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: ce.value
                  }, null, 8, Dp),
                  g[31] || (g[31] = l("input", {
                    type: "hidden",
                    name: "scannerConflicts",
                    value: "1"
                  }, null, -1)),
                  g[32] || (g[32] = l("input", {
                    type: "hidden",
                    name: "nextcloudTagName",
                    value: "library-scanner-conflict"
                  }, null, -1)),
                  l("button", Mp, c(f(s)("library", "Tag scanner-conflict rows")), 1)
                ], 8, Lp)
              ], 8, Pp)
            ]),
            at.value.enabled ? (C(), T("section", Up, [
              l("div", Fp, [
                l("p", Hp, c(f(s)("library", "Metadata review workbench")), 1),
                l("h3", {
                  id: "library-metadata-review-workbench-heading",
                  title: f(s)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                }, c(f(s)("library", "Review next conflict")), 9, $p)
              ]),
              at.value.item ? (C(), T("article", jp, [
                l("header", null, [
                  l("strong", null, c(at.value.item.title), 1),
                  l("span", Vp, c(at.value.item.cachedPath), 1)
                ]),
                l("div", qp, [
                  (C(!0), T(te, null, ve(at.value.fields, (p) => (C(), T("article", {
                    key: p.field,
                    class: "library-metadata-review-field"
                  }, [
                    l("h4", null, c(p.field), 1),
                    l("dl", null, [
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "Current value")), 1),
                        l("dd", null, c(p.currentValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "scanner candidate")), 1),
                        l("dd", null, c(p.scannerCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "path-template candidate")), 1),
                        l("dd", null, c(p.pathTemplateCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "sidecar value")), 1),
                        l("dd", null, c(p.sidecarValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(f(s)("library", "source provenance")), 1),
                        l("dd", null, c(p.sourceProvenance || "—"), 1)
                      ])
                    ]),
                    l("form", {
                      method: "post",
                      action: at.value.item.resetFieldUrl,
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
                        value: p.field
                      }, null, 8, Wp),
                      g[33] || (g[33] = l("input", {
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
                    href: at.value.item.detailsUrl
                  }, c(f(s)("library", "Open full details")), 9, Yp),
                  l("a", {
                    class: "button secondary",
                    href: at.value.skipUrl
                  }, c(f(s)("library", "Skip to next conflict")), 9, Xp)
                ])
              ])) : (C(), T("p", Jp, c(f(s)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
              l("a", {
                class: "button secondary",
                href: at.value.reviewNextUrl
              }, c(f(s)("library", "Review next conflict")), 9, Zp)
            ])) : Y("", !0)
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--admin",
            "data-workspace-panel": "admin",
            onToggle: an
          }, [
            l("summary", Qp, [
              g[34] || (g[34] = l("span", {
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
              Ie.value ? (C(), T("a", {
                key: 0,
                href: Ie.value,
                class: "button secondary",
                "aria-label": "Export corrected metadata"
              }, c(f(s)("library", "Export corrected metadata")), 9, ih)) : Y("", !0),
              Ne.value ? (C(), T("a", {
                key: 1,
                href: Ne.value,
                class: "button secondary",
                "aria-label": "Export sidecar manifest"
              }, c(f(s)("library", "Sidecar manifest")), 9, sh)) : Y("", !0),
              qe.value ? (C(), T("a", {
                key: 2,
                href: qe.value,
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
                ze.value ? (C(), T("p", bh, c(f(s)("library", "Last generated")) + ": " + c(ze.value), 1)) : Y("", !0),
                l("button", {
                  type: "button",
                  class: "button secondary library-import-health-refresh",
                  disabled: _e.refreshing,
                  onClick: ga
                }, c(_e.refreshing ? f(s)("library", "Refreshing metadata overview…") : f(s)("library", "Refresh metadata overview")), 9, yh),
                l("div", gh, [
                  l("a", {
                    class: "button secondary",
                    href: nt.value.reviewUrl || "?status=metadata_error"
                  }, c(f(s)("library", "Review metadata errors")), 9, _h),
                  l("a", {
                    class: "button secondary",
                    href: De.value
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
                    l("p", Ch, c(nt.value.total || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Archive/container check")), 1),
                    l("p", Th, c(me.value.mismatches || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Cover health")), 1),
                    l("p", xh, c(er.value.note), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(f(s)("library", "Cover support matrix")), 1),
                    l("p", Ah, c(f(s)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                  ]),
                  nt.value.examples?.length ? (C(), T("details", kh, [
                    l("summary", null, c(f(s)("library", "Example files and suggested actions")), 1),
                    l("ul", null, [
                      (C(!0), T(te, null, ve(nt.value.examples, (p) => (C(), T("li", {
                        key: `${p.fileId}-${p.path}`
                      }, [
                        l("code", null, c(p.path), 1),
                        l("span", null, c(p.scanStatus) + " · " + c(p.scanError) + " · " + c(p.actualContainerType), 1),
                        l("strong", null, c(p.suggestedRepairAction), 1)
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
            l("h2", Nh, c(Pt.value), 1)
          ])
        ]),
        L.value ? (C(), T("p", Ph, c(L.value), 1)) : Y("", !0),
        U.value ? (C(), T("p", Ih, c(U.value), 1)) : Y("", !0),
        vt.value ? (C(), T("section", Lh, [
          l("p", Dh, c(m.value), 1),
          l("h3", {
            id: "library-discovery-heading",
            title: _t.value ? f(s)("library", "Items by this creator, sorted by publication context when available.") : gt.value ? f(s)("library", "Items from this publication year, sorted by publication date when available.") : f(s)("library", "Items in this publication, sorted by issue/date context when available.")
          }, c(pt.value), 9, Mh),
          l("div", Uh, [
            l("span", null, c(z.value.total) + " " + c(f(s)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), T("span", Fh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            E.value?.datedCount ? (C(), T("span", Hh, c(E.value.datedCount) + " " + c(f(s)("library", "dated")), 1)) : Y("", !0),
            E.value?.undatedCount > 0 ? (C(), T("span", $h, c(E.value.undatedCount) + " " + c(f(s)("library", "undated")), 1)) : Y("", !0)
          ]),
          He.value && E.value ? (C(), T("aside", jh, [
            l("strong", null, c(f(s)("library", "Publication contents")), 1),
            l("span", null, c(E.value.itemCount) + " " + c(f(s)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), T("span", Vh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            l("span", null, c(E.value.datedCount) + " " + c(f(s)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), T("span", qh, c(E.value.undatedCount) + " " + c(f(s)("library", "without dates yet")), 1)) : Y("", !0),
            l("span", null, c(f(s)("library", "read-only grouping")), 1)
          ])) : Y("", !0),
          He.value && E.value?.issueGroups?.length ? (C(), T("section", Bh, [
            l("div", null, [
              l("p", zh, c(f(s)("library", "Issue order")), 1),
              l("h4", {
                id: "library-publication-issue-groups-heading",
                title: f(s)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
              }, c(f(s)("library", "Read-only issue/date grouping")), 9, Wh)
            ]),
            l("div", Kh, [
              (C(!0), T(te, null, ve(E.value.issueGroups, (p) => (C(), T("a", {
                key: `strip-${p.label}`,
                class: "library-issue-strip-card",
                href: p.items?.[0]?.detailsUrl || "#"
              }, [
                l("span", null, c(p.label), 1),
                l("strong", null, c(p.items?.[0]?.issueLabel || f(s)("library", "Issue")), 1),
                l("small", null, c(p.items?.length || 0) + " " + c(f(s)("library", "items")), 1)
              ], 8, Gh))), 128))
            ]),
            E.value.gapRanges?.length ? (C(), T("p", Yh, c(f(s)("library", "Gap")) + ": " + c(E.value.gapRanges.join(", ")), 1)) : Y("", !0),
            (C(!0), T(te, null, ve(E.value.issueGroups, (p) => (C(), T("div", {
              key: p.label,
              class: "library-publication-issue-group"
            }, [
              l("h5", null, c(p.label), 1),
              l("ol", null, [
                (C(!0), T(te, null, ve(p.items, (Q, $e) => (C(), T("li", {
                  key: Q.itemId
                }, [
                  l("span", Xh, c(Q.issueLabel), 1),
                  l("a", {
                    href: Q.detailsUrl || "#"
                  }, c(Q.title), 9, Jh),
                  l("small", null, [
                    be(c(Q.publicationType), 1),
                    Q.publicationDate ? (C(), T(te, { key: 0 }, [
                      be(" · " + c(Q.publicationDate), 1)
                    ], 64)) : Y("", !0)
                  ]),
                  l("small", Zh, [
                    $e > 0 ? (C(), T(te, { key: 0 }, [
                      be(c(f(s)("library", "Previous issue")), 1)
                    ], 64)) : Y("", !0),
                    $e > 0 && $e < p.items.length - 1 ? (C(), T(te, { key: 1 }, [
                      be(" · ")
                    ], 64)) : Y("", !0),
                    $e < p.items.length - 1 ? (C(), T(te, { key: 2 }, [
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
            class: Dt({ active: G.value === "compact" }),
            "aria-pressed": G.value === "compact" ? "true" : "false",
            onClick: g[17] || (g[17] = (p) => qr("compact"))
          }, c(f(s)("library", "Compact")), 11, nm),
          l("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Dt({ active: G.value === "gallery" }),
            "aria-pressed": G.value === "gallery" ? "true" : "false",
            onClick: g[18] || (g[18] = (p) => qr("gallery"))
          }, c(f(s)("library", "Gallery")), 11, am),
          l("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Dt({ active: G.value === "shelf" }),
            "aria-pressed": G.value === "shelf" ? "true" : "false",
            onClick: g[19] || (g[19] = (p) => qr("shelf"))
          }, c(f(s)("library", "Shelf")), 11, im)
        ]),
        l("div", sm, [
          l("p", lm, [
            be(c(f(s)("library", "Showing")) + " " + c(z.value.from) + "–" + c(z.value.to) + " " + c(f(s)("library", "of")) + " " + c(z.value.total) + " " + c(f(s)("library", "catalogue items")), 1),
            N.value.length > 0 ? (C(), T("span", om, [
              g[35] || (g[35] = be(" · ", -1)),
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
          (C(!0), T(te, null, ve(N.value, (p) => (C(), T("a", {
            key: p.key,
            href: Vr(p.key),
            class: "library-filter-chip",
            "aria-label": `${f(s)("library", "Remove filter")}: ${p.label}`
          }, [
            l("strong", null, c(p.label) + ":", 1),
            be(" " + c(p.value) + " ", 1),
            g[36] || (g[36] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, gm))), 128))
        ], 8, ym)) : Y("", !0),
        o.value.length === 0 ? (C(), T("div", {
          key: 4,
          class: Dt(["library-empty-content", { "library-first-run-guidance": R.value || x.value, "library-filter-empty-state": k.value && !R.value && !x.value }]),
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
                href: _a(),
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
          class: Dt(["library-cover-gallery", ae.value])
        }, [
          (C(!0), T(te, null, ve(o.value, (p) => (C(), T("article", {
            key: p.id,
            class: Dt(["library-cover-card", { "library-cover-card--open": ee[p.id], "library-cover-card--cover-loaded": Bt(p) === "loaded", "library-cover-card--cover-error": Bt(p) === "error" }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: p.openUrl,
              "aria-label": `Read ${p.title}`
            }, [
              l("span", Lm, [
                Bt(p) === "loading" ? (C(), T("span", Dm)) : Y("", !0),
                l("img", {
                  class: Dt(["library-cover-image", { "library-cover-image--loaded": Bt(p) === "loaded" }]),
                  src: p.coverUrl,
                  alt: `Cover for ${p.title}`,
                  loading: "lazy",
                  onLoad: (Q) => ar(p),
                  onError: (Q) => Ca(p)
                }, null, 42, Mm),
                Bt(p) === "error" ? (C(), T("span", Um, c(f(s)("library", "Cover unavailable")), 1)) : Y("", !0)
              ])
            ], 8, Im),
            l("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form",
              onSubmit: zn((Q) => sr(p, Q), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Hm),
              g[37] || (g[37] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, $m),
              l("button", {
                type: "submit",
                class: Dt(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? f(s)("library", "Unstar this publication") : f(s)("library", "Star this publication"),
                "aria-label": p.starred ? f(s)("library", "Unstar this publication") : f(s)("library", "Star this publication"),
                "aria-busy": ir[p.id] ? "true" : void 0,
                disabled: ir[p.id],
                onClick: zn((Q) => sr(p, Q), ["prevent"])
              }, c(p.starred ? "★" : "☆"), 11, jm),
              zt[p.id] ? (C(), T("span", {
                key: 0,
                "data-library-star-error": p.id,
                class: "library-star-feedback",
                role: "alert"
              }, c(zt[p.id]), 9, Vm)) : Y("", !0)
            ], 40, Fm),
            l("div", qm, [
              l("div", Bm, [
                l("h3", null, [
                  p.starred ? (C(), T("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": f(s)("library", "Starred")
                  }, "★", 8, zm)) : Y("", !0),
                  be(c(p.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, c(f(s)("library", "Read")), 9, Wm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (Q) => zr(p.id, Q)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${f(s)("library", "Show details and actions")}: ${p.title}`
                }, c(f(s)("library", "Details")), 9, Gm),
                l("div", Ym, [
                  p.creators ? (C(), T("p", Xm, c(p.creators), 1)) : Y("", !0),
                  l("dl", Jm, [
                    l("div", Zm, [
                      l("dt", null, c(f(s)("library", "Type")), 1),
                      l("dd", null, c(p.publicationType), 1)
                    ]),
                    p.publication ? (C(), T("div", Qm, [
                      l("dt", null, c(f(s)("library", "Series")), 1),
                      l("dd", null, c(p.publication), 1)
                    ])) : Y("", !0),
                    p.publicationDate ? (C(), T("div", eb, [
                      l("dt", null, c(f(s)("library", "Date")), 1),
                      l("dd", null, c(p.publicationDate), 1)
                    ])) : Y("", !0),
                    p.workflowStatus ? (C(), T("div", tb, [
                      l("dt", null, c(f(s)("library", "Status")), 1),
                      l("dd", null, c(p.workflowStatus), 1)
                    ])) : Y("", !0),
                    p.hasScannerConflict ? (C(), T("div", rb, [
                      l("dt", null, c(f(s)("library", "Review")), 1),
                      l("dd", null, c(p.scannerConflictCount) + " fields", 1)
                    ])) : Y("", !0),
                    p.lastOpenedAt ? (C(), T("div", nb, [
                      l("dt", null, c(f(s)("library", "Last opened")), 1),
                      l("dd", null, c(p.lastOpenedAt), 1)
                    ])) : Y("", !0),
                    p.extension ? (C(), T("div", ab, [
                      l("dt", null, c(f(s)("library", "Format")) + ":", 1),
                      l("dd", null, c(Ln(p.extension)), 1)
                    ])) : Y("", !0),
                    p.shelf ? (C(), T("div", ib, [
                      l("dt", null, c(f(s)("library", "Shelf")), 1),
                      l("dd", null, c(p.shelf), 1)
                    ])) : Y("", !0)
                  ]),
                  p.description ? (C(), T("p", sb, c(p.description), 1)) : Y("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (C(), T("p", lb, [
                    be(" scanStatus: " + c(p.scanStatus || "unknown"), 1),
                    p.scanError ? (C(), T("span", ob, " · scanError: " + c(p.scanError), 1)) : Y("", !0)
                  ])) : Y("", !0),
                  l("div", cb, [
                    Dn(p).length === 0 ? (C(), T("span", ub, "No Nextcloud tags")) : (C(!0), T(te, { key: 1 }, ve(Dn(p), (Q) => (C(), T("span", {
                      key: Q.id,
                      class: "library-tag"
                    }, c(Q.name), 1))), 128))
                  ]),
                  l("p", db, [
                    l("a", {
                      href: p.filesUrl
                    }, c(f(s)("library", "Show in Files")), 9, fb),
                    g[38] || (g[38] = be(" · ", -1)),
                    l("a", {
                      href: p.downloadUrl
                    }, c(f(s)("library", "Download source")), 9, pb),
                    g[39] || (g[39] = be(" · ", -1)),
                    l("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (Q) => jt(p)
                    }, c(f(s)("library", "Details drawer")), 9, hb),
                    g[40] || (g[40] = be(" · ", -1)),
                    l("a", {
                      href: p.detailsUrl
                    }, c(f(s)("library", "Details")), 9, mb)
                  ])
                ])
              ], 40, Km)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (C(), T("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": f(s)("library", "Catalogue pagination")
        }, [
          l("span", yb, [
            be(c(f(s)("library", "Page")) + " " + c(z.value.page), 1),
            z.value.total > 0 ? (C(), T("span", gb, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
          ]),
          z.value.previousUrl ? (C(), T("a", {
            key: 0,
            href: z.value.previousUrl
          }, c(f(s)("library", "Previous")), 9, _b)) : (C(), T("span", vb, c(f(s)("library", "Previous")), 1)),
          z.value.nextUrl ? (C(), T("a", {
            key: 2,
            href: z.value.nextUrl
          }, c(f(s)("library", "Next")), 9, wb)) : (C(), T("span", Sb, c(f(s)("library", "Next")), 1))
        ], 8, bb)) : Y("", !0),
        re.value ? (C(), T("div", {
          key: 7,
          class: "library-detail-drawer-backdrop",
          onClick: Vt,
          "aria-hidden": "true"
        })) : Y("", !0),
        re.value ? (C(), T("aside", Eb, [
          l("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: Vt
          }, "×"),
          l("p", Cb, c(f(s)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
          l("img", {
            class: "library-detail-drawer-cover",
            src: re.value.coverUrl,
            alt: `Cover for ${re.value.title}`,
            loading: "lazy"
          }, null, 8, Tb),
          l("p", xb, c(re.value.publicationType || f(s)("library", "Publication")), 1),
          l("h3", Ab, c(re.value.title), 1),
          re.value.creators ? (C(), T("p", kb, c(re.value.creators), 1)) : Y("", !0),
          re.value.description ? (C(), T("p", Rb, c(re.value.description), 1)) : Y("", !0),
          l("dl", Ob, [
            re.value.publication ? (C(), T("div", Nb, [
              l("dt", null, c(f(s)("library", "Series")), 1),
              l("dd", null, c(re.value.publication), 1)
            ])) : Y("", !0),
            re.value.publicationDate ? (C(), T("div", Pb, [
              l("dt", null, c(f(s)("library", "Date")), 1),
              l("dd", null, c(re.value.publicationDate), 1)
            ])) : Y("", !0),
            re.value.shelf ? (C(), T("div", Ib, [
              l("dt", null, c(f(s)("library", "Shelf")), 1),
              l("dd", null, c(re.value.shelf), 1)
            ])) : Y("", !0)
          ]),
          l("p", Lb, [
            l("a", {
              class: "button primary",
              href: re.value.openUrl
            }, c(f(s)("library", "Read")), 9, Db),
            l("a", {
              class: "button secondary",
              href: re.value.detailsUrl
            }, c(f(s)("library", "View full details")), 9, Mb)
          ]),
          l("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": f(s)("library", "Browse neighbouring items")
          }, [
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ye.value,
              onClick: g[20] || (g[20] = (p) => It(Ye.value))
            }, c(f(s)("library", "Previous issue")), 9, Fb),
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !wt.value,
              onClick: g[21] || (g[21] = (p) => It(wt.value))
            }, c(f(s)("library", "Next issue")), 9, Hb)
          ], 8, Ub)
        ])) : Y("", !0)
      ])
    ]));
  }
}, Ss = fu("library", "catalogue", {}), Xn = document.querySelector("#library-vue-root"), Es = {
  ...Ss,
  requestToken: Xn?.dataset.requestToken || Ss.requestToken || ""
};
function J(e) {
  return String(e ?? "");
}
function Ul(e) {
  return J(e).toUpperCase();
}
function jb(e, t, r, n = J) {
  for (const a of t) {
    const i = document.createElement("option");
    i.value = J(a), i.textContent = n(a), J(a) === J(r) && (i.selected = !0), e.appendChild(i);
  }
}
function Cs(e, t, r, n, a = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = J(n), o.placeholder = a, i.appendChild(o), e.appendChild(i);
}
function Gr(e, t, r, n, a, i, o = J) {
  const u = document.createElement("label");
  u.textContent = t;
  const h = document.createElement("select");
  h.name = r;
  const S = document.createElement("option");
  S.value = "", S.textContent = a, h.appendChild(S), jb(h, i, n, o), u.appendChild(h), e.appendChild(u);
}
function Yr(e) {
  const t = J(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Vb(e, t = {}) {
  return J(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(J(e || t?.publication || ""))}`);
}
function qb(e) {
  return J(e.discoveryPage) === "publication";
}
function Bb(e, t = {}) {
  return J(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(J(e))}`);
}
function Ga(e) {
  return J(e.discoveryPage) === "year";
}
function zb(e, t = {}) {
  return J(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(J(e))}`);
}
function Ya(e) {
  return J(e.discoveryPage) === "creator";
}
function Wb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && J(n).trim() !== "");
}
function Kb() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function dn(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function Gb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Yb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", s("library", "Catalogue search and filters")), Cs(n, s("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Gr(n, s("library", "Type"), "type", r.type, s("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Cs(n, s("library", "Nextcloud tag"), "tag", r.tag, "photography"), Gr(n, s("library", "Format"), "format", r.format, s("library", "All formats"), e.formats || [], Ul), Gr(n, s("library", "Shelf"), "shelf", r.shelf, s("library", "All shelves"), e.shelves || []), Gr(n, s("library", "Scan status"), "status", r.status, s("library", "All scan statuses"), e.scanStatuses || []), Gr(n, s("library", "Sort"), "sort", r.sort || "title", s("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Gr(n, s("library", "Page size"), "limit", t.limit || 100, s("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", s("library", "Apply catalogue filters")), a.textContent = s("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", s("library", "Clear catalogue filters")), i.textContent = s("library", "Clear"), n.append(a, i), n;
}
function Xb() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", i = document.createElement("p");
  return i.className = "library-notice library-batch-metadata-apply-result", i.textContent = s("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${a} skipped.`), i;
}
function Jb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", s("library", "Quick catalogue filters"));
  let a = null;
  const i = () => {
    window.clearTimeout(a), a = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || J(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = J(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = s("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = J(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", i), o.appendChild(u), n.appendChild(o);
  const h = [
    [s("library", "Sort"), "sort", r.sort || "title", [["title", s("library", "Title")], ["recent", s("library", "Recently added")], ["publicationDate", s("library", "Publication date")], ["publication", s("library", "Series")], ["lastOpened", s("library", "Recently opened")], ["format", s("library", "Format")]]],
    [s("library", "Starred"), "starred", r.starred || "", [["", s("library", "All")], ["1", s("library", "Starred")]]],
    [s("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, I, j, se] of h) {
    const K = document.createElement("label");
    K.textContent = E;
    const ue = document.createElement("select");
    ue.name = I;
    for (const [le, z] of se) {
      const M = document.createElement("option");
      M.value = J(le), M.textContent = J(z), J(le) === J(j) && (M.selected = !0), ue.appendChild(M);
    }
    ue.addEventListener("change", () => n.requestSubmit()), K.appendChild(ue), n.appendChild(K);
  }
  const S = document.createElement("button");
  S.type = "submit", S.className = "button primary", S.setAttribute("aria-label", s("library", "Apply catalogue filters")), S.textContent = s("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", s("library", "Clear catalogue filters")), y.textContent = s("library", "Clear all"), n.append(S, y), n;
}
function Zb(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, a = J(e.settingsUrl || ""), i = J(e.metadataExportUrl || ""), o = J(e.batchTagUrl || "/apps/library/bulk/tags"), u = J(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), h = J(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), S = J(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = J(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
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
  const z = Xb();
  z && I.appendChild(z), I.appendChild(Jb(e, n));
  const M = document.createElement("details");
  M.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = s("library", "Show catalogue filters"), M.append(V, Yb(e, n)), I.appendChild(M), qb(e) || Ga(e) || Ya(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = Ya(e) ? s("library", "Creator") : Ga(e) ? s("library", "Publication year") : s("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = J(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const ee = document.createElement("p");
    ee.className = "library-muted", ee.textContent = `${n.total ?? r.length} ${Ya(e) ? s("library", "items by this creator. Sorted by publication context when available.") : Ga(e) ? s("library", "items from this publication year. Sorted by publication date when available.") : s("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const oe = document.createElement("a");
    oe.href = "/apps/library/", oe.className = "button secondary", oe.textContent = s("library", "Back to full catalogue"), N.append(P, H, ee, oe), I.appendChild(N);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Ie = document.createElement("a");
  Ie.href = "?", Ie.textContent = ` ${s("library", "Clear all filters")}`, ce.appendChild(Ie), I.appendChild(ce);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const qe = document.createElement("summary");
  qe.textContent = `${s("library", "Batch actions for current results")} (${n.total ?? r.length} ${s("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const Le = Yr(e);
  Le && Ee.appendChild(Le);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), Ee.appendChild(H);
  }
  const rt = document.createElement("label");
  rt.textContent = s("library", "Apply Nextcloud tag to current results");
  const ft = document.createElement("input");
  ft.type = "text", ft.name = "nextcloudTagName", ft.placeholder = "batch-review", rt.appendChild(ft);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = s("library", "Apply Nextcloud tag to current results");
  const Rt = document.createElement("p");
  Rt.className = "library-muted", Rt.textContent = s("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(rt, Ge, Rt);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = u, Fe.className = "library-batch-tag-remove-form";
  const De = Yr(e);
  De && Fe.appendChild(De);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), Fe.appendChild(H);
  }
  const ge = document.createElement("label");
  ge.textContent = s("library", "Nextcloud tag");
  const pe = document.createElement("input");
  pe.type = "text", pe.name = "nextcloudTagName", pe.setAttribute("list", "library-nextcloud-tag-suggestions"), pe.placeholder = s("library", "e.g. Review"), pe.autocomplete = "off", ge.appendChild(pe);
  const Be = document.createElement("button");
  Be.type = "submit", Be.className = "button secondary", Be.textContent = s("library", "Remove tag from current results");
  const _e = document.createElement("p");
  _e.className = "library-muted", _e.textContent = s("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Fe.append(ge, Be, _e);
  const Re = document.createElement("form");
  Re.method = "post", Re.action = h, Re.className = "library-batch-metadata-reset-form";
  const ze = Yr(e);
  ze && Re.appendChild(ze);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), Re.appendChild(H);
  }
  const nt = document.createElement("input");
  nt.type = "hidden", nt.name = "scannerConflicts", nt.value = "1";
  const me = document.createElement("button");
  me.type = "submit", me.className = "button secondary", me.textContent = s("library", "Reset filtered metadata");
  const er = document.createElement("p");
  er.className = "library-muted", er.textContent = s("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Re.append(nt, me, er);
  const He = document.createElement("form");
  He.method = "post", He.action = S, He.className = "library-batch-metadata-edit-preview-form", He.target = "_blank";
  const gt = Yr(e);
  gt && He.appendChild(gt);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), He.appendChild(H);
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
  const pt = document.createElement("label");
  pt.textContent = s("library", "Preview value");
  const Pt = document.createElement("input");
  Pt.type = "text", Pt.name = "bulkEditValue", Pt.placeholder = "magazine, de, photography...", Pt.autocomplete = "off", pt.appendChild(Pt);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = s("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = s("library", "Preview first, then apply from the review page."), He.append(_t, pt, m, b);
  const v = document.createElement("form");
  v.method = "post", v.action = y, v.className = "library-batch-cover-refresh-form";
  const R = Yr(e);
  R && v.appendChild(R);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), v.appendChild(H);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = s("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = s("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), v.append(x, k), Ne.append(qe, Ee, Fe, Re, He, v), I.appendChild(Ne);
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
      ee.href = Vb(P.publication, P), ee.textContent = J(P.publication);
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
      const fe = document.createElement("li"), Me = document.createElement("a");
      Me.href = Bb(he, e), Me.textContent = J(he), fe.appendChild(Me), oe.appendChild(fe);
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
      const fe = document.createElement("li"), Me = document.createElement("a");
      Me.href = zb(he, e), Me.textContent = J(he), fe.appendChild(Me), oe.appendChild(fe);
    }
    N.append(P, H, ee, oe), I.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), ee = Wb(e);
    N.className = "library-empty-content", (P === 0 || H === 0) && N.classList.add("library-first-run-guidance"), ee && P > 0 && H > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const oe = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", P === 0 ? (oe.textContent = s("library", "Start with one Library root"), he.textContent = s("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), dn(fe, a, "button primary", s("library", "Add a Library root")), Gb(fe, s("library", "Run a scan after saving a root"))) : H === 0 ? (oe.textContent = s("library", "No enabled Library roots"), he.textContent = s("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), dn(fe, a, "button primary", s("library", "Open Library settings"))) : ee ? (oe.textContent = s("library", "No matches for the current filters"), he.textContent = s("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), dn(fe, Kb(), "button secondary", s("library", "Clear search")), dn(fe, "?", "button primary", s("library", "Clear all filters"))) : (oe.textContent = s("library", "No catalogue items yet"), he.textContent = s("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), dn(fe, a, "button primary", s("library", "Run a scan from settings"))), N.append(oe, he, fe), I.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const P of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const ee = document.createElement("a");
      ee.className = "library-cover-link", ee.href = J(P.openUrl || "#"), ee.setAttribute("aria-label", `Read ${J(P.title || "publication")}`);
      const oe = document.createElement("img");
      oe.className = "library-cover-image", oe.src = J(P.coverUrl || ""), oe.alt = `Cover for ${J(P.title || "publication")}`, oe.loading = "lazy", ee.appendChild(oe);
      const he = Yr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = J(P.starUrl || ""), fe.className = "library-cover-star-form", he && fe.appendChild(he);
      const Me = document.createElement("input");
      Me.type = "hidden", Me.name = "returnTo", Me.value = "catalogue";
      const re = document.createElement("input");
      re.type = "hidden", re.name = "starred", re.value = P.starred ? "0" : "1";
      const Te = document.createElement("button");
      Te.type = "submit", Te.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Te.setAttribute("aria-pressed", P.starred ? "true" : "false"), Te.setAttribute("aria-label", P.starred ? s("library", "Unstar this publication") : s("library", "Star this publication")), Te.title = P.starred ? s("library", "Unstar this publication") : s("library", "Star this publication"), Te.textContent = P.starred ? "★" : "☆", fe.append(Me, re, Te);
      const Ye = document.createElement("div");
      Ye.className = "library-cover-summary";
      const wt = document.createElement("h3");
      if (wt.textContent = J(P.title || "Untitled publication"), Ye.appendChild(wt), P.creators) {
        const We = document.createElement("p");
        We.className = "library-creator", We.textContent = J(P.creators), Ye.appendChild(We);
      }
      const tr = document.createElement("dl");
      tr.className = "library-cover-detail-list";
      const at = [
        ["Type", J(P.publicationType || "other")],
        ["Format", P.extension ? Ul(P.extension) : ""],
        ["Shelf", P.shelf ? J(P.shelf) : ""]
      ].filter(([, We]) => We !== "");
      for (const [We, rr] of at) {
        const it = document.createElement("div");
        it.className = "library-cover-detail-chip";
        const Ct = document.createElement("dt");
        Ct.textContent = We;
        const st = document.createElement("dd");
        st.textContent = rr, it.append(Ct, st), tr.appendChild(it);
      }
      Ye.appendChild(tr);
      const St = document.createElement("p"), Et = document.createElement("a");
      Et.href = J(P.openUrl || "#"), Et.textContent = s("library", "Read");
      const jt = document.createElement("a");
      jt.href = J(P.filesUrl || "#"), jt.textContent = s("library", "Show in Files");
      const Vt = document.createElement("a");
      Vt.href = J(P.downloadUrl || "#"), Vt.textContent = s("library", "Download source");
      const It = document.createElement("a");
      It.href = J(P.detailsUrl || "#"), It.textContent = s("library", "Details"), St.append(Et, document.createTextNode(" · "), jt, document.createTextNode(" · "), Vt, document.createTextNode(" · "), It), Ye.appendChild(St), H.append(ee, fe, Ye), N.appendChild(H);
    }
    I.appendChild(N);
  }
  return E.appendChild(I), E;
}
if (Xn)
  try {
    cu($b, { state: Es }).mount(Xn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Xn.replaceChildren(Zb(Es));
  }
//# sourceMappingURL=library-main.mjs.map
