// @__NO_SIDE_EFFECTS__
function ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ae = {}, Jr = [], tr = () => {
}, xs = () => !1, ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), da = (e) => e.startsWith("onUpdate:"), rt = Object.assign, di = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), ne = Array.isArray, Er = (e) => kn(e) === "[object Map]", Fr = (e) => kn(e) === "[object Set]", Ai = (e) => kn(e) === "[object Date]", de = (e) => typeof e == "function", Fe = (e) => typeof e == "string", rr = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", As = (e) => (Te(e) || de(e)) && de(e.then) && de(e.catch), ks = Object.prototype.toString, kn = (e) => ks.call(e), Vl = (e) => kn(e).slice(8, -1), Rs = (e) => kn(e) === "[object Object]", fi = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bn = /* @__PURE__ */ ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ql = /-\w/g, $t = fa(
  (e) => e.replace(ql, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Hr = fa(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), Os = fa((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oa = fa(
  (e) => e ? `on${Os(e)}` : ""
), er = (e, t) => !Object.is(e, t), Jn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ns = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, pa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ki;
const ha = () => ki || (ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pi(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = Fe(n) ? Gl(n) : pi(n);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (Fe(e) || Te(e))
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
function Ft(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (ne(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ft(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ui(Yl);
function Ps(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Cr(e[n], t[n]);
  return r;
}
function Ri(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let i = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && Cr(a, r[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    n[i] = 1;
  }
  return !0;
}
function Cr(e, t) {
  if (e === t) return !0;
  let r = Ai(e), n = Ai(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = rr(e), n = rr(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = Er(e), n = Er(t), r || n || (r = Fr(e), n = Fr(t), r || n))
      return r && n ? Ri(e, t) : !1;
    const a = Object.keys(e).length, i = Object.keys(t).length;
    if (a !== i)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), h = t.hasOwnProperty(o);
      if (u && !h || !u && h || !Cr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => Cr(r, t));
}
const Is = (e) => !!(e && e.__v_isRef === !0), c = (e) => Fe(e) ? e : e == null ? "" : ne(e) || Te(e) && (e.toString === ks || !de(e.toString)) ? Is(e) ? c(e.value) : JSON.stringify(e, Ls, 2) : String(e), Ls = (e, t) => Is(t) ? Ls(e, t.value) : Er(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], i) => (r[Na(n, i) + " =>"] = a, r),
    {}
  )
} : Fr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Na(r))
} : rr(t) ? Na(t) : Te(t) && !ne(t) && !Rs(t) ? String(t) : t, Na = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
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
const Pa = /* @__PURE__ */ new WeakSet();
class Ds {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pa.has(this) && (Pa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Us(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oi(this), Fs(this);
    const t = Re, r = jt;
    Re = this, jt = !0;
    try {
      return this.fn();
    } finally {
      Hs(this), Re = t, jt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bi(t);
      this.deps = this.depsTail = void 0, Oi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Za(this) && this.run();
  }
  get dirty() {
    return Za(this);
  }
}
let Ms = 0, yn, gn;
function Us(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = gn, gn = e;
    return;
  }
  e.next = yn, yn = e;
}
function hi() {
  Ms++;
}
function mi() {
  if (--Ms > 0)
    return;
  if (gn) {
    let t = gn;
    for (gn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; yn; ) {
    let t = yn;
    for (yn = void 0; t; ) {
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
function Fs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === r && (r = a), bi(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = r;
}
function Za(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($s(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $s(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sn) || (e.globalVersion = Sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Za(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = jt;
  Re = e, jt = !0;
  try {
    Fs(e);
    const a = e.fn(e._value);
    (t.version === 0 || er(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Re = r, jt = n, Hs(e), e.flags &= -3;
  }
}
function bi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      bi(i, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let jt = !0;
const js = [];
function fr() {
  js.push(jt), jt = !1;
}
function pr() {
  const e = js.pop();
  jt = e === void 0 ? !0 : e;
}
function Oi(e) {
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
let Sn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Re || !jt || Re === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      r = this.activeLink = new ro(Re, this), Re.deps ? (r.prevDep = Re.depsTail, Re.depsTail.nextDep = r, Re.depsTail = r) : Re.deps = Re.depsTail = r, Vs(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Re.depsTail, r.nextDep = void 0, Re.depsTail.nextDep = r, Re.depsTail = r, Re.deps === r && (Re.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Sn++, this.notify(t);
  }
  notify(t) {
    hi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      mi();
    }
  }
}
function Vs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Vs(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Qa = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ Symbol(
  ""
), ei = /* @__PURE__ */ Symbol(
  ""
), En = /* @__PURE__ */ Symbol(
  ""
);
function et(e, t, r) {
  if (jt && Re) {
    let n = Qa.get(e);
    n || Qa.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new yi()), a.map = n, a.key = r), a.track();
  }
}
function cr(e, t, r, n, a, i) {
  const o = Qa.get(e);
  if (!o) {
    Sn++;
    return;
  }
  const u = (h) => {
    h && h.trigger();
  };
  if (hi(), t === "clear")
    o.forEach(u);
  else {
    const h = ne(e), S = h && fi(r);
    if (h && r === "length") {
      const y = Number(n);
      o.forEach((E, I) => {
        (I === "length" || I === En || !rr(I) && I >= y) && u(E);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), S && u(o.get(En)), t) {
        case "add":
          h ? S && u(o.get("length")) : (u(o.get(Dr)), Er(e) && u(o.get(ei)));
          break;
        case "delete":
          h || (u(o.get(Dr)), Er(e) && u(o.get(ei)));
          break;
        case "set":
          Er(e) && u(o.get(Dr));
          break;
      }
  }
  mi();
}
function Wr(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (et(t, "iterate", En), /* @__PURE__ */ Lt(e) ? t : t.map(Vt));
}
function ma(e) {
  return et(e = /* @__PURE__ */ we(e), "iterate", En), e;
}
function Zt(e, t) {
  return /* @__PURE__ */ hr(e) ? tn(/* @__PURE__ */ Mr(e) ? Vt(t) : t) : Vt(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ia(this, Symbol.iterator, (e) => Zt(this, e));
  },
  concat(...e) {
    return Wr(this).concat(
      ...e.map((t) => ne(t) ? Wr(t) : t)
    );
  },
  entries() {
    return Ia(this, "entries", (e) => (e[1] = Zt(this, e[1]), e));
  },
  every(e, t) {
    return sr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return sr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Zt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return sr(
      this,
      "find",
      e,
      t,
      (r) => Zt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return sr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return sr(
      this,
      "findLast",
      e,
      t,
      (r) => Zt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return sr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return sr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return La(this, "includes", e);
  },
  indexOf(...e) {
    return La(this, "indexOf", e);
  },
  join(e) {
    return Wr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return La(this, "lastIndexOf", e);
  },
  map(e, t) {
    return sr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ln(this, "pop");
  },
  push(...e) {
    return ln(this, "push", e);
  },
  reduce(e, ...t) {
    return Ni(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ni(this, "reduceRight", e, t);
  },
  shift() {
    return ln(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return sr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ln(this, "splice", e);
  },
  toReversed() {
    return Wr(this).toReversed();
  },
  toSorted(e) {
    return Wr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Wr(this).toSpliced(...e);
  },
  unshift(...e) {
    return ln(this, "unshift", e);
  },
  values() {
    return Ia(this, "values", (e) => Zt(this, e));
  }
};
function Ia(e, t, r) {
  const n = ma(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Lt(e) && (a._next = a.next, a.next = () => {
    const i = a._next();
    return i.done || (i.value = r(i.value)), i;
  }), a;
}
const ao = Array.prototype;
function sr(e, t, r, n, a, i) {
  const o = ma(e), u = o !== e && !/* @__PURE__ */ Lt(e), h = o[t];
  if (h !== ao[t]) {
    const E = h.apply(e, i);
    return u ? Vt(E) : E;
  }
  let S = r;
  o !== e && (u ? S = function(E, I) {
    return r.call(this, Zt(e, E), I, e);
  } : r.length > 2 && (S = function(E, I) {
    return r.call(this, E, I, e);
  }));
  const y = h.call(o, S, n);
  return u && a ? a(y) : y;
}
function Ni(e, t, r, n) {
  const a = ma(e), i = a !== e && !/* @__PURE__ */ Lt(e);
  let o = r, u = !1;
  a !== e && (i ? (u = n.length === 0, o = function(S, y, E) {
    return u && (u = !1, S = Zt(e, S)), r.call(this, S, Zt(e, y), E, e);
  }) : r.length > 3 && (o = function(S, y, E) {
    return r.call(this, S, y, E, e);
  }));
  const h = a[t](o, ...n);
  return u ? Zt(e, h) : h;
}
function La(e, t, r) {
  const n = /* @__PURE__ */ we(e);
  et(n, "iterate", En);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ vi(r[0]) ? (r[0] = /* @__PURE__ */ we(r[0]), n[t](...r)) : a;
}
function ln(e, t, r = []) {
  fr(), hi();
  const n = (/* @__PURE__ */ we(e))[t].apply(e, r);
  return mi(), pr(), n;
}
const io = /* @__PURE__ */ ui("__proto__,__v_isRef,__isVue"), qs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rr)
);
function so(e) {
  rr(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class Bs {
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
      return n === (a ? i ? yo : Gs : i ? Ks : Ws).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
      /* @__PURE__ */ tt(t) ? t : n
    );
    if ((rr(r) ? qs.has(r) : io(r)) || (a || et(t, "get", r), i))
      return u;
    if (/* @__PURE__ */ tt(u)) {
      const h = o && fi(r) ? u : u.value;
      return a && Te(h) ? /* @__PURE__ */ ri(h) : h;
    }
    return Te(u) ? a ? /* @__PURE__ */ ri(u) : /* @__PURE__ */ Ht(u) : u;
  }
}
class zs extends Bs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let i = t[r];
    const o = ne(t) && fi(r);
    if (!this._isShallow) {
      const S = /* @__PURE__ */ hr(i);
      if (!/* @__PURE__ */ Lt(n) && !/* @__PURE__ */ hr(n) && (i = /* @__PURE__ */ we(i), n = /* @__PURE__ */ we(n)), !o && /* @__PURE__ */ tt(i) && !/* @__PURE__ */ tt(n))
        return S || (i.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), h = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ tt(t) ? t : a
    );
    return t === /* @__PURE__ */ we(a) && h && (u ? er(n, i) && cr(t, "set", r, n) : cr(t, "add", r, n)), h;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && cr(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!rr(r) || !qs.has(r)) && et(t, "has", r), n;
  }
  ownKeys(t) {
    return et(
      t,
      "iterate",
      ne(t) ? "length" : Dr
    ), Reflect.ownKeys(t);
  }
}
class lo extends Bs {
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
const oo = /* @__PURE__ */ new zs(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new zs(!0);
const ti = (e) => e, Bn = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, i = /* @__PURE__ */ we(a), o = Er(i), u = e === "entries" || e === Symbol.iterator && o, h = e === "keys" && o, S = a[e](...n), y = r ? ti : t ? tn : Vt;
    return !t && et(
      i,
      "iterate",
      h ? ei : Dr
    ), rt(
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
function zn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      e || (er(a, u) && et(o, "get", a), et(o, "get", u));
      const { has: h } = Bn(o), S = t ? ti : e ? tn : Vt;
      if (h.call(o, a))
        return S(i.get(a));
      if (h.call(o, u))
        return S(i.get(u));
      i !== o && i.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && et(/* @__PURE__ */ we(a), "iterate", Dr), a.size;
    },
    has(a) {
      const i = this.__v_raw, o = /* @__PURE__ */ we(i), u = /* @__PURE__ */ we(a);
      return e || (er(a, u) && et(o, "has", a), et(o, "has", u)), a === u ? i.has(a) : i.has(a) || i.has(u);
    },
    forEach(a, i) {
      const o = this, u = o.__v_raw, h = /* @__PURE__ */ we(u), S = t ? ti : e ? tn : Vt;
      return !e && et(h, "iterate", Dr), u.forEach((y, E) => a.call(i, S(y), S(E), o));
    }
  };
  return rt(
    r,
    e ? {
      add: zn("add"),
      set: zn("set"),
      delete: zn("delete"),
      clear: zn("clear")
    } : {
      add(a) {
        const i = /* @__PURE__ */ we(this), o = Bn(i), u = /* @__PURE__ */ we(a), h = !t && !/* @__PURE__ */ Lt(a) && !/* @__PURE__ */ hr(a) ? u : a;
        return o.has.call(i, h) || er(a, h) && o.has.call(i, a) || er(u, h) && o.has.call(i, u) || (i.add(h), cr(i, "add", h, h)), this;
      },
      set(a, i) {
        !t && !/* @__PURE__ */ Lt(i) && !/* @__PURE__ */ hr(i) && (i = /* @__PURE__ */ we(i));
        const o = /* @__PURE__ */ we(this), { has: u, get: h } = Bn(o);
        let S = u.call(o, a);
        S || (a = /* @__PURE__ */ we(a), S = u.call(o, a));
        const y = h.call(o, a);
        return o.set(a, i), S ? er(i, y) && cr(o, "set", a, i) : cr(o, "add", a, i), this;
      },
      delete(a) {
        const i = /* @__PURE__ */ we(this), { has: o, get: u } = Bn(i);
        let h = o.call(i, a);
        h || (a = /* @__PURE__ */ we(a), h = o.call(i, a)), u && u.call(i, a);
        const S = i.delete(a);
        return h && cr(i, "delete", a, void 0), S;
      },
      clear() {
        const a = /* @__PURE__ */ we(this), i = a.size !== 0, o = a.clear();
        return i && cr(
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
function gi(e, t) {
  const r = po(e, t);
  return (n, a, i) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Se(r, a) && a in n ? r : n,
    a,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ gi(!1, !1)
}, mo = {
  get: /* @__PURE__ */ gi(!1, !0)
}, bo = {
  get: /* @__PURE__ */ gi(!0, !1)
};
const Ws = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
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
function Ht(e) {
  return /* @__PURE__ */ hr(e) ? e : _i(
    e,
    !1,
    oo,
    ho,
    Ws
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return _i(
    e,
    !1,
    uo,
    mo,
    Ks
  );
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  return _i(
    e,
    !0,
    co,
    bo,
    Gs
  );
}
function _i(e, t, r, n, a) {
  if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
  return /* @__PURE__ */ hr(e) ? /* @__PURE__ */ Mr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ we(t) : e;
}
function vo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Ns(e, "__v_skip", !0), e;
}
const Vt = (e) => Te(e) ? /* @__PURE__ */ Ht(e) : e, tn = (e) => Te(e) ? /* @__PURE__ */ ri(e) : e;
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ tt(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new yi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ we(t), this._value = r ? t : Vt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Lt(t) || /* @__PURE__ */ hr(t);
    t = n ? t : /* @__PURE__ */ we(t), er(t, r) && (this._rawValue = t, this._value = n ? t : Vt(t), this.dep.trigger());
  }
}
function p(e) {
  return /* @__PURE__ */ tt(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : p(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return /* @__PURE__ */ tt(a) && !/* @__PURE__ */ tt(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ys(e) {
  return /* @__PURE__ */ Mr(e) ? e : new Proxy(e, Eo);
}
class Co {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new yi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Us(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $s(this), t && (t.version = this.dep.version), this._value;
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
const Wn = {}, ta = /* @__PURE__ */ new WeakMap();
let Nr;
function xo(e, t = !1, r = Nr) {
  if (r) {
    let n = ta.get(r);
    n || ta.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = Ae) {
  const { immediate: n, deep: a, once: i, scheduler: o, augmentJob: u, call: h } = r, S = (V) => a ? V : /* @__PURE__ */ Lt(V) || a === !1 || a === 0 ? ur(V, 1) : ur(V);
  let y, E, I, j, se = !1, K = !1;
  if (/* @__PURE__ */ tt(e) ? (E = () => e.value, se = /* @__PURE__ */ Lt(e)) : /* @__PURE__ */ Mr(e) ? (E = () => S(e), se = !0) : ne(e) ? (K = !0, se = e.some((V) => /* @__PURE__ */ Mr(V) || /* @__PURE__ */ Lt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ tt(V))
      return V.value;
    if (/* @__PURE__ */ Mr(V))
      return S(V);
    if (de(V))
      return h ? h(V, 2) : V();
  })) : de(e) ? t ? E = h ? () => h(e, 2) : e : E = () => {
    if (I) {
      fr();
      try {
        I();
      } finally {
        pr();
      }
    }
    const V = Nr;
    Nr = y;
    try {
      return h ? h(e, 3, [j]) : e(j);
    } finally {
      Nr = V;
    }
  } : E = tr, t && a) {
    const V = E, ce = a === !0 ? 1 / 0 : a;
    E = () => ur(V(), ce);
  }
  const ue = eo(), le = () => {
    y.stop(), ue && ue.active && di(ue.effects, y);
  };
  if (i && t) {
    const V = t;
    t = (...ce) => {
      const Le = V(...ce);
      return le(), Le;
    };
  }
  let z = K ? new Array(e.length).fill(Wn) : Wn;
  const M = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || a || se || (K ? ce.some((Le, Ne) => er(Le, z[Ne])) : er(ce, z))) {
          I && I();
          const Le = Nr;
          Nr = y;
          try {
            const Ne = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === Wn ? void 0 : K && z[0] === Wn ? [] : z,
              j
            ];
            z = ce, h ? h(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            Nr = Le;
          }
        }
      } else
        y.run();
  };
  return u && u(M), y = new Ds(E), y.scheduler = o ? () => o(M, !1) : M, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = ta.get(y);
    if (V) {
      if (h)
        h(V, 4);
      else
        for (const ce of V) ce();
      ta.delete(y);
    }
  }, t ? n ? M(!0) : z = y.run() : o ? o(M.bind(null, !0), !0) : y.run(), le.pause = y.pause.bind(y), le.resume = y.resume.bind(y), le.stop = le, le;
}
function ur(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ tt(e))
    ur(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      ur(e[n], t, r);
  else if (Fr(e) || Er(e))
    e.forEach((n) => {
      ur(n, t, r);
    });
  else if (Rs(e)) {
    for (const n in e)
      ur(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ur(e[n], t, r);
  }
  return e;
}
function Rn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    ba(a, t, r);
  }
}
function qt(e, t, r, n) {
  if (de(e)) {
    const a = Rn(e, t, r, n);
    return a && As(a) && a.catch((i) => {
      ba(i, t, r);
    }), a;
  }
  if (ne(e)) {
    const a = [];
    for (let i = 0; i < e.length; i++)
      a.push(qt(e[i], t, r, n));
    return a;
  }
}
function ba(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ae;
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
      fr(), Rn(i, null, 10, [
        e,
        h,
        S
      ]), pr();
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
let Jt = -1;
const Zr = [];
let Sr = null, Yr = 0;
const Xs = /* @__PURE__ */ Promise.resolve();
let ra = null;
function Js(e) {
  const t = ra || Xs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Jt + 1, r = ut.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = ut[n], i = Cn(a);
    i < e || i === e && a.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function wi(e) {
  if (!(e.flags & 1)) {
    const t = Cn(e), r = ut[ut.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Cn(r) ? ut.push(e) : ut.splice(Ro(t), 0, e), e.flags |= 1, Zs();
  }
}
function Zs() {
  ra || (ra = Xs.then(el));
}
function Oo(e) {
  if (!ne(e))
    Sr && e.id === -1 ? Sr.splice(Yr + 1, 0, e) : e.flags & 1 || (Zr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Zr.push(e[t]);
  Zs();
}
function Ii(e, t, r = Jt + 1) {
  for (; r < ut.length; r++) {
    const n = ut[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ut.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Qs(e) {
  if (Zr.length) {
    const t = [...new Set(Zr)].sort(
      (r, n) => Cn(r) - Cn(n)
    );
    if (Zr.length = 0, Sr) {
      for (let r = 0; r < t.length; r++)
        Sr.push(t[r]);
      return;
    }
    for (Sr = t, Yr = 0; Yr < Sr.length; Yr++) {
      const r = Sr[Yr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Sr = null, Yr = 0;
  }
}
const Cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function el(e) {
  try {
    for (Jt = 0; Jt < ut.length; Jt++) {
      const t = ut[Jt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Jt < ut.length; Jt++) {
      const t = ut[Jt];
      t && (t.flags &= -2);
    }
    Jt = -1, ut.length = 0, Qs(), ra = null, (ut.length || Zr.length) && el();
  }
}
let It = null, tl = null;
function na(e) {
  const t = It;
  return It = e, tl = e && e.type.__scopeId || null, t;
}
function No(e, t = It, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Bi(-1);
    const i = na(t), o = Ur.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let h = Ur.length; h > o; h--) Al();
      na(i), n._d && Bi(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ot(e, t) {
  if (It === null)
    return e;
  const r = wa(It), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, o, u, h = Ae] = t[a];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ur(o), n.push({
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
    h && (fr(), qt(h, r, 8, [
      e.el,
      u,
      e,
      t
    ]), pr());
  }
}
function Po(e, t) {
  if (dt) {
    let r = dt.provides;
    const n = dt.parent && dt.parent.provides;
    n === r && (r = dt.provides = Object.create(n)), r[e] = t;
  }
}
function Zn(e, t, r = !1) {
  const n = kc();
  if (n || Qr) {
    let a = Qr ? Qr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Lo = () => Zn(Io);
function Da(e, t, r) {
  return rl(e, t, r);
}
function rl(e, t, r = Ae) {
  const { immediate: n, deep: a, flush: i, once: o } = r, u = rt({}, r), h = t && n || !t && i !== "post";
  let S;
  if (An) {
    if (i === "sync") {
      const j = Lo();
      S = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!h) {
      const j = () => {
      };
      return j.stop = tr, j.resume = tr, j.pause = tr, j;
    }
  }
  const y = dt;
  u.call = (j, se, K) => qt(j, y, se, K);
  let E = !1;
  i === "post" ? u.scheduler = (j) => {
    yt(j, y && y.suspense);
  } : i !== "sync" && (E = !0, u.scheduler = (j, se) => {
    se ? j() : wi(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return An && (S ? S.push(I) : h && I()), I;
}
function Do(e, t, r) {
  const n = this.proxy, a = Fe(e) ? e.includes(".") ? nl(n, e) : () => n[e] : e.bind(n, n);
  let i;
  de(t) ? i = t : (i = t.handler, r = t);
  const o = On(this), u = rl(a, i.bind(n), r);
  return o(), u;
}
function nl(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
const Mo = /* @__PURE__ */ Symbol("_vte"), ya = (e) => e.__isTeleport, Ma = /* @__PURE__ */ Symbol("_leaveCb");
function Uo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== mr) {
        t = r;
        break;
      }
  }
  return t;
}
function al(e) {
  if (!Ei(e))
    return ya(e.type) && e.children ? Uo(e.children) : e;
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
function Si(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    Si(
      ya(r.type) && al(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function il(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Li(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const aa = /* @__PURE__ */ new WeakMap();
function _n(e, t, r, n, a = !1) {
  if (ne(e)) {
    e.forEach(
      (K, ue) => _n(
        K,
        t && (ne(t) ? t[ue] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (vn(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && _n(e, t, r, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? wa(n.component) : n.el, o = a ? null : i, { i: u, r: h } = e, S = t && t.r, y = u.refs === Ae ? u.refs = {} : u.refs, E = u.setupState, I = /* @__PURE__ */ we(E), j = E === Ae ? xs : (K) => Li(y, K) ? !1 : Se(I, K), se = (K, ue) => !(ue && Li(y, ue));
  if (S != null && S !== h) {
    if (Di(t), Fe(S))
      y[S] = null, j(S) && (E[S] = null);
    else if (/* @__PURE__ */ tt(S)) {
      const K = t;
      se(S, K.k) && (S.value = null), K.k && (y[K.k] = null);
    }
  }
  if (de(h))
    Rn(h, u, 12, [o, y]);
  else {
    const K = Fe(h), ue = /* @__PURE__ */ tt(h);
    if (K || ue) {
      const le = () => {
        if (e.f) {
          const z = K ? j(h) ? E[h] : y[h] : se() || !e.k ? h.value : y[e.k];
          if (a)
            ne(z) && di(z, i);
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
          le(), aa.delete(e);
        };
        z.id = -1, aa.set(e, z), yt(z, r);
      } else
        Di(e), le();
    }
  }
}
function Di(e) {
  const t = aa.get(e);
  t && (t.flags |= 8, aa.delete(e));
}
ha().requestIdleCallback;
ha().cancelIdleCallback;
const vn = (e) => !!e.type.__asyncLoader, Ei = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  sl(e, "a", t);
}
function Ho(e, t) {
  sl(e, "da", t);
}
function sl(e, t, r = dt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ga(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      Ei(a.parent.vnode) && $o(n, t, r, a), a = a.parent;
  }
}
function $o(e, t, r, n) {
  const a = ga(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  cl(() => {
    di(n[t], a);
  }, r);
}
function ga(e, t, r = dt, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...o) => {
      fr();
      const u = On(r), h = qt(t, r, e, o);
      return u(), pr(), h;
    });
    return n ? a.unshift(i) : a.push(i), i;
  }
}
const br = (e) => (t, r = dt) => {
  (!An || e === "sp") && ga(e, (...n) => t(...n), r);
}, jo = br("bm"), ll = br("m"), Vo = br(
  "bu"
), qo = br("u"), ol = br(
  "bum"
), cl = br("um"), Bo = br(
  "sp"
), zo = br("rtg"), Wo = br("rtc");
function Ko(e, t = dt) {
  ga("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, r, n) {
  let a;
  const i = r, o = ne(e);
  if (o || Fe(e)) {
    const u = o && /* @__PURE__ */ Mr(e);
    let h = !1, S = !1;
    u && (h = !/* @__PURE__ */ Lt(e), S = /* @__PURE__ */ hr(e), e = ma(e)), a = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      a[y] = t(
        h ? S ? tn(Vt(e[y])) : Vt(e[y]) : e[y],
        y,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let u = 0; u < e; u++)
      a[u] = t(u + 1, u, void 0, i);
  } else if (Te(e))
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
const ni = (e) => e ? Nl(e) ? wa(e) : ni(e.parent) : null, wn = (
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
    $parent: (e) => ni(e.parent),
    $root: (e) => ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => dl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Js.bind(e.proxy)),
    $watch: (e) => Do.bind(e)
  })
), Ua = (e, t) => e !== Ae && !e.__isScriptSetup && Se(e, t), Yo = {
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
        if (Ua(n, t))
          return o[t] = 1, n[t];
        if (a !== Ae && Se(a, t))
          return o[t] = 2, a[t];
        if (Se(i, t))
          return o[t] = 3, i[t];
        if (r !== Ae && Se(r, t))
          return o[t] = 4, r[t];
        ai && (o[t] = 0);
      }
    }
    const S = wn[t];
    let y, E;
    if (S)
      return t === "$attrs" && et(e.attrs, "get", ""), S(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ae && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      E = h.config.globalProperties, Se(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: i } = e;
    return Ua(a, t) ? (a[t] = r, !0) : n !== Ae && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: i, type: o }
  }, u) {
    let h;
    return !!(r[u] || e !== Ae && u[0] !== "$" && Se(e, u) || Ua(t, u) || Se(i, u) || Se(n, u) || Se(wn, u) || Se(a.config.globalProperties, u) || (h = o.__cssModules) && h[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Mi(e) {
  return ne(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ai = !0;
function Xo(e) {
  const t = dl(e), r = e.proxy, n = e.ctx;
  ai = !1, t.beforeCreate && Ui(t.beforeCreate, e, "bc");
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
    renderTracked: Le,
    renderTriggered: Ne,
    errorCaptured: qe,
    serverPrefetch: Ee,
    // public API
    expose: De,
    inheritAttrs: nt,
    // assets
    components: ft,
    directives: Ge,
    filters: Nt
  } = t;
  if (S && Jo(S, n, null), o)
    for (const ge in o) {
      const pe = o[ge];
      de(pe) && (n[ge] = pe.bind(r));
    }
  if (a) {
    const ge = a.call(r, r);
    Te(ge) && (e.data = /* @__PURE__ */ Ht(ge));
  }
  if (ai = !0, i)
    for (const ge in i) {
      const pe = i[ge], Be = de(pe) ? pe.bind(r, r) : de(pe.get) ? pe.get.bind(r, r) : tr, _e = !de(pe) && de(pe.set) ? pe.set.bind(r) : tr, Oe = B({
        get: Be,
        set: _e
      });
      Object.defineProperty(n, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (ze) => Oe.value = ze
      });
    }
  if (u)
    for (const ge in u)
      ul(u[ge], n, r, ge);
  if (h) {
    const ge = de(h) ? h.call(r) : h;
    Reflect.ownKeys(ge).forEach((pe) => {
      Po(pe, ge[pe]);
    });
  }
  y && Ui(y, e, "c");
  function Me(ge, pe) {
    ne(pe) ? pe.forEach((Be) => ge(Be.bind(r))) : pe && ge(pe.bind(r));
  }
  if (Me(jo, E), Me(ll, I), Me(Vo, j), Me(qo, se), Me(Fo, K), Me(Ho, ue), Me(Ko, qe), Me(Wo, Le), Me(zo, Ne), Me(ol, z), Me(cl, V), Me(Bo, Ee), ne(De))
    if (De.length) {
      const ge = e.exposed || (e.exposed = {});
      De.forEach((pe) => {
        Object.defineProperty(ge, pe, {
          get: () => r[pe],
          set: (Be) => r[pe] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === tr && (e.render = ce), nt != null && (e.inheritAttrs = nt), ft && (e.components = ft), Ge && (e.directives = Ge), Ee && il(e);
}
function Jo(e, t, r = tr) {
  ne(e) && (e = ii(e));
  for (const n in e) {
    const a = e[n];
    let i;
    Te(a) ? "default" in a ? i = Zn(
      a.from || n,
      a.default,
      !0
    ) : i = Zn(a.from || n) : i = Zn(a), /* @__PURE__ */ tt(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Ui(e, t, r) {
  qt(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ul(e, t, r, n) {
  let a = n.includes(".") ? nl(r, n) : () => r[n];
  if (Fe(e)) {
    const i = t[e];
    de(i) && Da(a, i);
  } else if (de(e))
    Da(a, e.bind(r));
  else if (Te(e))
    if (ne(e))
      e.forEach((i) => ul(i, t, r, n));
    else {
      const i = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(i) && Da(a, i, e);
    }
}
function dl(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = i.get(t);
  let h;
  return u ? h = u : !a.length && !r && !n ? h = t : (h = {}, a.length && a.forEach(
    (S) => ia(h, S, o, !0)
  ), ia(h, t, o)), Te(t) && i.set(t, h), h;
}
function ia(e, t, r, n = !1) {
  const { mixins: a, extends: i } = t;
  i && ia(e, i, r, !0), a && a.forEach(
    (o) => ia(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Fi,
  props: Hi,
  emits: Hi,
  // objects
  methods: pn,
  computed: pn,
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
  components: pn,
  directives: pn,
  // watch
  watch: ec,
  // provide / inject
  provide: Fi,
  inject: Qo
};
function Fi(e, t) {
  return t ? e ? function() {
    return rt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return pn(ii(e), ii(t));
}
function ii(e) {
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
function pn(e, t) {
  return e ? rt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hi(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : rt(
    /* @__PURE__ */ Object.create(null),
    Mi(e),
    Mi(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = rt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ct(e[n], t[n]);
  return r;
}
function fl() {
  return {
    app: null,
    config: {
      isNativeTag: xs,
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
    de(n) || (n = rt({}, n)), a != null && !Te(a) && (a = null);
    const i = fl(), o = /* @__PURE__ */ new WeakSet(), u = [];
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
          const j = S._ceVNode || dr(n, a);
          return j.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), h = !0, S._container = y, y.__vue_app__ = S, wa(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        h && (qt(
          u,
          S._instance,
          16
        ), e(null, S._container), delete S._container.__vue_app__);
      },
      provide(y, E) {
        return i.provides[y] = E, S;
      },
      runWithContext(y) {
        const E = Qr;
        Qr = S;
        try {
          return y();
        } finally {
          Qr = E;
        }
      }
    };
    return S;
  };
}
let Qr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$t(t)}Modifiers`] || e[`${Hr(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ae;
  let a = r;
  const i = t.startsWith("update:"), o = i && nc(n, t.slice(7));
  o && (o.trim && (a = r.map((y) => Fe(y) ? y.trim() : y)), o.number && (a = a.map(pa)));
  let u, h = n[u = Oa(t)] || // also try camelCase event handler (#2249)
  n[u = Oa($t(t))];
  !h && i && (h = n[u = Oa(Hr(t))]), h && qt(
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
    e.emitted[u] = !0, qt(
      S,
      e,
      6,
      a
    );
  }
}
const ic = /* @__PURE__ */ new WeakMap();
function pl(e, t, r = !1) {
  const n = r ? ic : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const i = e.emits;
  let o = {}, u = !1;
  if (!de(e)) {
    const h = (S) => {
      const y = pl(S, t, !0);
      y && (u = !0, rt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !i && !u ? (Te(e) && n.set(e, null), null) : (ne(i) ? i.forEach((h) => o[h] = null) : rt(o, i), Te(e) && n.set(e, o), o);
}
function _a(e, t) {
  return !e || !ua(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Hr(t)) || Se(e, t));
}
function $i(e) {
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
  } = e, ue = na(e);
  let le, z;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, ce = V;
      le = Qt(
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
      le = Qt(
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
    Ur.length = 0, ba(V, e, 1), le = dr(mr);
  }
  let M = le;
  if (z && K !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = M;
    V.length && ce & 7 && (i && V.some(da) && (z = lc(
      z,
      i
    )), M = rn(M, z, !1, !0));
  }
  if (r.dirs && (M = rn(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ya(M.type) && al(M) || M;
    Si(V, r.transition);
  }
  return le = M, na(ue), le;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ua(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!da(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
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
      return n ? ji(n, o, S) : !!o;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const I = y[E];
        if (hl(o, n, I) && !_a(S, I))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? ji(n, o, S) : !0 : !!o;
  return !1;
}
function ji(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (hl(t, e, i) && !_a(r, i))
      return !0;
  }
  return !1;
}
function hl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && Te(n) && Te(a) ? !Cr(n, a) : n !== a;
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
const ml = {}, bl = () => Object.create(ml), yl = (e) => Object.getPrototypeOf(e) === ml;
function uc(e, t, r, n = !1) {
  const a = {}, i = bl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gl(e, t, a, i);
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
        if (_a(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (h)
          if (Se(i, I))
            j !== i[I] && (i[I] = j, S = !0);
          else {
            const se = $t(I);
            a[se] = si(
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
    gl(e, t, a, i) && (S = !0);
    let y;
    for (const E in u)
      (!t || // for camelCase
      !Se(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Hr(E)) === E || !Se(t, y))) && (h ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[E] = si(
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
  S && cr(e.attrs, "set", "");
}
function gl(e, t, r, n) {
  const [a, i] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let h in t) {
      if (bn(h))
        continue;
      const S = t[h];
      let y;
      a && Se(a, y = $t(h)) ? !i || !i.includes(y) ? r[y] = S : (u || (u = {}))[y] = S : _a(e.emitsOptions, h) || (!(h in n) || S !== n[h]) && (n[h] = S, o = !0);
    }
  if (i) {
    const h = /* @__PURE__ */ we(r), S = u || Ae;
    for (let y = 0; y < i.length; y++) {
      const E = i[y];
      r[E] = si(
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
function si(e, t, r, n, a, i) {
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
          const y = On(a);
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
function _l(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const i = e.props, o = {}, u = [];
  let h = !1;
  if (!de(e)) {
    const y = (E) => {
      h = !0;
      const [I, j] = _l(E, t, !0);
      rt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!i && !h)
    return Te(e) && n.set(e, Jr), Jr;
  if (ne(i))
    for (let y = 0; y < i.length; y++) {
      const E = $t(i[y]);
      Vi(E) && (o[E] = Ae);
    }
  else if (i)
    for (const y in i) {
      const E = $t(y);
      if (Vi(E)) {
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
  const S = [o, u];
  return Te(e) && n.set(e, S), S;
}
function Vi(e) {
  return e[0] !== "$" && !bn(e);
}
const Ci = (e) => e === "_" || e === "_ctx" || e === "$stable", Ti = (e) => ne(e) ? e.map(Qt) : [Qt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...a) => Ti(t(...a)), r);
  return n._c = !1, n;
}, vl = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (Ci(a)) continue;
    const i = e[a];
    if (de(i))
      t[a] = pc(a, i, n);
    else if (i != null) {
      const o = Ti(i);
      t[a] = () => o;
    }
  }
}, wl = (e, t) => {
  const r = Ti(t);
  e.slots.default = () => r;
}, Sl = (e, t, r) => {
  for (const n in t)
    (r || !Ci(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = bl();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Sl(n, t, r), r && Ns(n, "_", a, !0)) : vl(t, n);
  } else t && wl(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let i = !0, o = Ae;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? i = !1 : Sl(a, t, r) : (i = !t.$stable, vl(t, a)), o = t;
  } else t && (wl(e, t), o = { default: 1 });
  if (i)
    for (const u in a)
      !Ci(u) && o[u] == null && delete a[u];
}, yt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = ha();
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
    setScopeId: j = tr,
    insertStaticContent: se
  } = e, K = (m, b, w, R = null, x = null, k = null, D = void 0, U = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !on(m, b) && (R = _t(m), ze(m, x, k, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: A, ref: X, shapeFlag: $ } = b;
    switch (A) {
      case va:
        ue(m, b, w, R);
        break;
      case mr:
        le(m, b, w, R);
        break;
      case Ha:
        m == null && z(b, w, R, D);
        break;
      case te:
        ft(
          m,
          b,
          w,
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
          w,
          R,
          x,
          k,
          D,
          U,
          L
        ) : $ & 6 ? Ge(
          m,
          b,
          w,
          R,
          x,
          k,
          D,
          U,
          L
        ) : ($ & 64 || $ & 128) && A.process(
          m,
          b,
          w,
          R,
          x,
          k,
          D,
          U,
          L,
          pt
        );
    }
    X != null && x ? _n(X, m && m.ref, k, b || m, !b) : X == null && m && m.ref != null && _n(m.ref, null, k, m, !0);
  }, ue = (m, b, w, R) => {
    if (m == null)
      n(
        b.el = u(b.children),
        w,
        R
      );
    else {
      const x = b.el = m.el;
      b.children !== m.children && S(x, b.children);
    }
  }, le = (m, b, w, R) => {
    m == null ? n(
      b.el = h(b.children || ""),
      w,
      R
    ) : b.el = m.el;
  }, z = (m, b, w, R) => {
    [m.el, m.anchor] = se(
      m.children,
      b,
      w,
      R,
      m.el,
      m.anchor
    );
  }, M = ({ el: m, anchor: b }, w, R) => {
    let x;
    for (; m && m !== b; )
      x = I(m), n(m, w, R), m = x;
    n(b, w, R);
  }, V = ({ el: m, anchor: b }) => {
    let w;
    for (; m && m !== b; )
      w = I(m), a(m), m = w;
    a(b);
  }, ce = (m, b, w, R, x, k, D, U, L) => {
    if (b.type === "svg" ? D = "svg" : b.type === "math" && (D = "mathml"), m == null)
      Le(
        b,
        w,
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
  }, Le = (m, b, w, R, x, k, D, U) => {
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
      Fa(m, k),
      D,
      U
    ), G && kr(m, null, R, "created"), Ne(L, m, m.scopeId, D, R), X) {
      for (const N in X)
        N !== "value" && !bn(N) && i(L, N, null, X[N], k, R);
      "value" in X && i(L, "value", null, X.value, k), (A = X.onVnodeBeforeMount) && Xt(A, R, m);
    }
    G && kr(m, null, R, "beforeMount");
    const ae = gc(x, W);
    ae && W.beforeEnter(L), n(L, b, w), ((A = X && X.onVnodeMounted) || ae || G) && yt(() => {
      A && Xt(A, R, m), ae && W.enter(L), G && kr(m, null, R, "mounted");
    }, x);
  }, Ne = (m, b, w, R, x) => {
    if (w && j(m, w), R)
      for (let k = 0; k < R.length; k++)
        j(m, R[k]);
    if (x) {
      let k = x.subTree;
      if (b === k || xl(k.type) && (k.ssContent === b || k.ssFallback === b)) {
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
  }, qe = (m, b, w, R, x, k, D, U, L = 0) => {
    for (let A = L; A < m.length; A++) {
      const X = m[A] = U ? or(m[A]) : Qt(m[A]);
      K(
        null,
        X,
        b,
        w,
        R,
        x,
        k,
        D,
        U
      );
    }
  }, Ee = (m, b, w, R, x, k, D) => {
    const U = b.el = m.el;
    let { patchFlag: L, dynamicChildren: A, dirs: X } = b;
    L |= m.patchFlag & 16;
    const $ = m.props || Ae, W = b.props || Ae;
    let G;
    if (w && Rr(w, !1), (G = W.onVnodeBeforeUpdate) && Xt(G, w, b, m), X && kr(b, m, w, "beforeUpdate"), w && Rr(w, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (L = 0, D = !1, A = null), ($.innerHTML && W.innerHTML == null || $.textContent && W.textContent == null) && y(U, ""), A ? De(
      m.dynamicChildren,
      A,
      U,
      w,
      R,
      Fa(b, x),
      k
    ) : D || pe(
      m,
      b,
      U,
      null,
      w,
      R,
      Fa(b, x),
      k,
      !1
    ), L > 0) {
      if (L & 16)
        nt(U, $, W, w, x);
      else if (L & 2 && $.class !== W.class && i(U, "class", null, W.class, x), L & 4 && i(U, "style", $.style, W.style, x), L & 8) {
        const ae = b.dynamicProps;
        for (let N = 0; N < ae.length; N++) {
          const P = ae[N], H = $[P], ee = W[P];
          (ee !== H || P === "value") && i(U, P, H, ee, x, w);
        }
      }
      L & 1 && m.children !== b.children && y(U, b.children);
    } else !D && A == null && nt(U, $, W, w, x);
    ((G = W.onVnodeUpdated) || X) && yt(() => {
      G && Xt(G, w, b, m), X && kr(b, m, w, "updated");
    }, R);
  }, De = (m, b, w, R, x, k, D) => {
    for (let U = 0; U < b.length; U++) {
      const L = m[U], A = b[U], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !on(L, A) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
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
  }, nt = (m, b, w, R, x) => {
    if (b !== w) {
      if (b !== Ae)
        for (const k in b)
          !bn(k) && !(k in w) && i(
            m,
            k,
            b[k],
            null,
            x,
            R
          );
      for (const k in w) {
        if (bn(k)) continue;
        const D = w[k], U = b[k];
        D !== U && k !== "value" && i(m, k, U, D, x, R);
      }
      "value" in w && i(m, "value", b.value, w.value, x);
    }
  }, ft = (m, b, w, R, x, k, D, U, L) => {
    const A = b.el = m ? m.el : u(""), X = b.anchor = m ? m.anchor : u("");
    let { patchFlag: $, dynamicChildren: W, slotScopeIds: G } = b;
    G && (U = U ? U.concat(G) : G), m == null ? (n(A, w, R), n(X, w, R), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      w,
      X,
      x,
      k,
      D,
      U,
      L
    )) : $ > 0 && $ & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === W.length ? (De(
      m.dynamicChildren,
      W,
      w,
      x,
      k,
      D,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || x && b === x.subTree) && El(
      m,
      b,
      !0
      /* shallow */
    )) : pe(
      m,
      b,
      w,
      X,
      x,
      k,
      D,
      U,
      L
    );
  }, Ge = (m, b, w, R, x, k, D, U, L) => {
    b.slotScopeIds = U, m == null ? b.shapeFlag & 512 ? x.ctx.activate(
      b,
      w,
      R,
      D,
      L
    ) : Nt(
      b,
      w,
      R,
      x,
      k,
      D,
      L
    ) : He(m, b, L);
  }, Nt = (m, b, w, R, x, k, D) => {
    const U = m.component = Ac(
      m,
      R,
      x
    );
    if (Ei(m) && (U.ctx.renderer = pt), Rc(U, !1, D), U.asyncDep) {
      if (x && x.registerDep(U, Me, D), !m.el) {
        const L = U.subTree = dr(mr);
        le(null, L, b, w), m.placeholder = L.el;
      }
    } else
      Me(
        U,
        m,
        b,
        w,
        x,
        k,
        D
      );
  }, He = (m, b, w) => {
    const R = b.component = m.component;
    if (oc(m, b, w))
      if (R.asyncDep && !R.asyncResolved) {
        ge(R, b, w);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = m.el, R.vnode = b;
  }, Me = (m, b, w, R, x, k, D) => {
    const U = () => {
      if (m.isMounted) {
        let { next: $, bu: W, u: G, parent: ae, vnode: N } = m;
        {
          const he = Cl(m);
          if (he) {
            $ && ($.el = N.el, ge(m, $, D)), he.asyncDep.then(() => {
              yt(() => {
                m.isUnmounted || A();
              }, x);
            });
            return;
          }
        }
        let P = $, H;
        Rr(m, !1), $ ? ($.el = N.el, ge(m, $, D)) : $ = N, W && Jn(W), (H = $.props && $.props.onVnodeBeforeUpdate) && Xt(H, ae, $, N), Rr(m, !0);
        const ee = $i(m), oe = m.subTree;
        m.subTree = ee, K(
          oe,
          ee,
          // parent may have changed if it's in a teleport
          E(oe.el),
          // anchor may have changed if it's in a fragment
          _t(oe),
          m,
          x,
          k
        ), $.el = ee.el, P === null && cc(m, ee.el), G && yt(G, x), (H = $.props && $.props.onVnodeUpdated) && yt(
          () => Xt(H, ae, $, N),
          x
        );
      } else {
        let $;
        const { el: W, props: G } = b, { bm: ae, m: N, parent: P, root: H, type: ee } = m, oe = vn(b);
        Rr(m, !1), ae && Jn(ae), !oe && ($ = G && G.onVnodeBeforeMount) && Xt($, P, b), Rr(m, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            ee,
            m.parent ? m.parent.type : void 0
          );
          const he = m.subTree = $i(m);
          K(
            null,
            he,
            w,
            R,
            m,
            x,
            k
          ), b.el = he.el;
        }
        if (N && yt(N, x), !oe && ($ = G && G.onVnodeMounted)) {
          const he = b;
          yt(
            () => Xt($, P, he),
            x
          );
        }
        (b.shapeFlag & 256 || P && vn(P.vnode) && P.vnode.shapeFlag & 256) && m.a && yt(m.a, x), m.isMounted = !0, b = w = R = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Ds(U);
    m.scope.off();
    const A = m.update = L.run.bind(L), X = m.job = L.runIfDirty.bind(L);
    X.i = m, X.id = m.uid, L.scheduler = () => wi(X), Rr(m, !0), A();
  }, ge = (m, b, w) => {
    b.component = m;
    const R = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, R, w), mc(m, b.children, w), fr(), Ii(m), pr();
  }, pe = (m, b, w, R, x, k, D, U, L = !1) => {
    const A = m && m.children, X = m ? m.shapeFlag : 0, $ = b.children, { patchFlag: W, shapeFlag: G } = b;
    if (W > 0) {
      if (W & 128) {
        _e(
          A,
          $,
          w,
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
          w,
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
    G & 8 ? (X & 16 && $e(A, x, k), $ !== A && y(w, $)) : X & 16 ? G & 16 ? _e(
      A,
      $,
      w,
      R,
      x,
      k,
      D,
      U,
      L
    ) : $e(A, x, k, !0) : (X & 8 && y(w, ""), G & 16 && qe(
      $,
      w,
      R,
      x,
      k,
      D,
      U,
      L
    ));
  }, Be = (m, b, w, R, x, k, D, U, L) => {
    m = m || Jr, b = b || Jr;
    const A = m.length, X = b.length, $ = Math.min(A, X);
    let W;
    for (W = 0; W < $; W++) {
      const G = b[W] = L ? or(b[W]) : Qt(b[W]);
      K(
        m[W],
        G,
        w,
        null,
        x,
        k,
        D,
        U,
        L
      );
    }
    A > X ? $e(
      m,
      x,
      k,
      !0,
      !1,
      $
    ) : qe(
      b,
      w,
      R,
      x,
      k,
      D,
      U,
      L,
      $
    );
  }, _e = (m, b, w, R, x, k, D, U, L) => {
    let A = 0;
    const X = b.length;
    let $ = m.length - 1, W = X - 1;
    for (; A <= $ && A <= W; ) {
      const G = m[A], ae = b[A] = L ? or(b[A]) : Qt(b[A]);
      if (on(G, ae))
        K(
          G,
          ae,
          w,
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
      const G = m[$], ae = b[W] = L ? or(b[W]) : Qt(b[W]);
      if (on(G, ae))
        K(
          G,
          ae,
          w,
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
            b[A] = L ? or(b[A]) : Qt(b[A]),
            w,
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
        const re = b[A] = L ? or(b[A]) : Qt(b[A]);
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
        let xe;
        if (re.key != null)
          xe = N.get(re.key);
        else
          for (P = ae; P <= W; P++)
            if (fe[P - ae] === 0 && on(re, b[P])) {
              xe = P;
              break;
            }
        xe === void 0 ? ze(re, x, k, !0) : (fe[xe - ae] = A + 1, xe >= he ? he = xe : oe = !0, K(
          re,
          b[xe],
          w,
          null,
          x,
          k,
          D,
          U,
          L
        ), H++);
      }
      const Ue = oe ? _c(fe) : Jr;
      for (P = Ue.length - 1, A = ee - 1; A >= 0; A--) {
        const re = ae + A, xe = b[re], Ye = b[re + 1], St = re + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ye.el || Tl(Ye)
        ) : R;
        fe[A] === 0 ? K(
          null,
          xe,
          w,
          St,
          x,
          k,
          D,
          U,
          L
        ) : oe && (P < 0 || A !== Ue[P] ? Oe(xe, w, St, 2) : P--);
      }
    }
  }, Oe = (m, b, w, R, x = null) => {
    const { el: k, type: D, transition: U, children: L, shapeFlag: A } = m;
    if (A & 6) {
      Oe(m.component.subTree, b, w, R);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, w, R);
      return;
    }
    if (A & 64) {
      D.move(m, b, w, pt);
      return;
    }
    if (D === te) {
      n(k, b, w);
      for (let $ = 0; $ < L.length; $++)
        Oe(L[$], b, w, R);
      n(m.anchor, b, w);
      return;
    }
    if (D === Ha) {
      M(m, b, w);
      return;
    }
    if (R !== 2 && A & 1 && U)
      if (R === 0)
        U.persisted && !k[Ma] ? n(k, b, w) : (U.beforeEnter(k), n(k, b, w), yt(() => U.enter(k), x));
      else {
        const { leave: $, delayLeave: W, afterLeave: G } = U, ae = () => {
          m.ctx.isUnmounted ? a(k) : n(k, b, w);
        }, N = () => {
          const P = k._isLeaving || !!k[Ma];
          k._isLeaving && k[Ma](
            !0
            /* cancelled */
          ), U.persisted && !P ? ae() : $(k, () => {
            ae(), G && G();
          });
        };
        W ? W(k, ae, N) : N();
      }
    else
      n(k, b, w);
  }, ze = (m, b, w, R = !1, x = !1) => {
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
    if ($ === -2 && (x = !1), U != null && (fr(), _n(U, null, w, m, !0), pr()), G != null && (b.renderCache[G] = void 0), X & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const N = X & 1 && W, P = !vn(m);
    let H;
    if (P && (H = D && D.onVnodeBeforeUnmount) && Xt(H, b, m), X & 6)
      nr(m.component, w, R);
    else {
      if (X & 128) {
        m.suspense.unmount(w, R);
        return;
      }
      N && kr(m, null, b, "beforeUnmount"), X & 64 ? m.type.remove(
        m,
        b,
        w,
        pt,
        R
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== te || $ > 0 && $ & 64) ? $e(
        A,
        b,
        w,
        !1,
        !0
      ) : (k === te && $ & 384 || !x && X & 16) && $e(L, b, w), R && at(m);
    }
    const ee = ae != null && G == null;
    (P && (H = D && D.onVnodeUnmounted) || N || ee) && yt(() => {
      H && Xt(H, b, m), N && kr(m, null, b, "unmounted"), ee && (m.el = null);
    }, w);
  }, at = (m) => {
    const { type: b, el: w, anchor: R, transition: x } = m;
    if (b === te) {
      me(w, R);
      return;
    }
    if (b === Ha) {
      V(m);
      return;
    }
    const k = () => {
      a(w), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (m.shapeFlag & 1 && x && !x.persisted) {
      const { leave: D, delayLeave: U } = x, L = () => D(w, k);
      U ? U(m.el, k, L) : L();
    } else
      k();
  }, me = (m, b) => {
    let w;
    for (; m !== b; )
      w = I(m), a(m), m = w;
    a(b);
  }, nr = (m, b, w) => {
    const { bum: R, scope: x, job: k, subTree: D, um: U, m: L, a: A } = m;
    qi(L), qi(A), R && Jn(R), x.stop(), k && (k.flags |= 8, ze(D, m, b, w)), U && yt(U, b), yt(() => {
      m.isUnmounted = !0;
    }, b);
  }, $e = (m, b, w, R = !1, x = !1, k = 0) => {
    for (let D = k; D < m.length; D++)
      ze(m[D], b, w, R, x);
  }, _t = (m) => {
    if (m.shapeFlag & 6)
      return _t(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), w = b && b[Mo];
    return w ? I(w) : b;
  };
  let vt = !1;
  const wt = (m, b, w) => {
    let R;
    m == null ? b._vnode && (ze(b._vnode, null, null, !0), R = b._vnode.component) : K(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      w
    ), b._vnode = m, vt || (vt = !0, Ii(R), Qs(), vt = !1);
  }, pt = {
    p: K,
    um: ze,
    m: Oe,
    r: at,
    mt: Nt,
    mc: qe,
    pc: pe,
    pbc: De,
    n: _t,
    o: e
  };
  return {
    render: wt,
    hydrate: void 0,
    createApp: rc(wt)
  };
}
function Fa({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Rr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function El(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (ne(n) && ne(a))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let u = a[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[i] = or(a[i]), u.el = o.el), !r && u.patchFlag !== -2 && El(o, u)), u.type === va && (u.patchFlag === -1 && (u = a[i] = or(u)), u.el = o.el), u.type === mr && !u.el && (u.el = o.el);
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
function Cl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Cl(t);
}
function qi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Tl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Tl(t.subTree) : null;
}
const xl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), va = /* @__PURE__ */ Symbol.for("v-txt"), mr = /* @__PURE__ */ Symbol.for("v-cmt"), Ha = /* @__PURE__ */ Symbol.for("v-stc"), Ur = [];
let Ot = null;
function C(e = !1) {
  Ur.push(Ot = e ? null : []);
}
function Al() {
  Ur.pop(), Ot = Ur[Ur.length - 1] || null;
}
let Tn = 1;
function Bi(e, t = !1) {
  Tn += e, e < 0 && Ot && t && (Ot.hasOnce = !0);
}
function kl(e) {
  return e.dynamicChildren = Tn > 0 ? Ot || Jr : null, Al(), Tn > 0 && Ot && Ot.push(e), e;
}
function T(e, t, r, n, a, i) {
  return kl(
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
  return kl(
    dr(
      e,
      t,
      r,
      n,
      a,
      !0
    )
  );
}
function Rl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function on(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ol = ({ key: e }) => e ?? null, Qn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || /* @__PURE__ */ tt(e) || de(e) ? { i: It, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, a = null, i = e === te ? 0 : 1, o = !1, u = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ol(t),
    ref: t && Qn(t),
    scopeId: tl,
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
    ctx: It
  };
  return u ? (sa(h, r), i & 128 && e.normalize(h)) : r && (h.shapeFlag |= Fe(r) ? 8 : 16), Tn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Ot.push(h), h;
}
const dr = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, i = !1) {
  if ((!e || e === Go) && (e = mr), Rl(e)) {
    const u = rn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && sa(u, r), Tn > 0 && !i && Ot && (u.shapeFlag & 6 ? Ot[Ot.indexOf(e)] = u : Ot.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: h } = t;
    u && !Fe(u) && (t.class = Ft(u)), Te(h) && (/* @__PURE__ */ vi(h) && !ne(h) && (h = rt({}, h)), t.style = pi(h));
  }
  const o = Fe(e) ? 1 : xl(e) ? 128 : ya(e) ? 64 : Te(e) ? 4 : de(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ vi(e) || yl(e) ? rt({}, e) : e : null;
}
function rn(e, t, r = !1, n = !1) {
  const { props: a, ref: i, patchFlag: o, children: u, transition: h } = e, S = t ? Cc(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: S,
    key: S && Ol(S),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? ne(i) ? i.concat(Qn(t)) : [i, Qn(t)] : Qn(t)
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
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && n && Si(
    y,
    h.clone(y)
  ), y;
}
function be(e = " ", t = 0) {
  return dr(va, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (C(), wc(mr, null, e)) : dr(mr, null, e);
}
function Qt(e) {
  return e == null || typeof e == "boolean" ? dr(mr) : ne(e) ? dr(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rl(e) ? or(e) : dr(va, null, String(e));
}
function or(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
}
function sa(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), sa(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !yl(t) ? t._ctx = It : a === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      sa(e, { default: t });
      return;
    }
    t = { default: t, _ctx: It }, r = 32;
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
        t.class !== n.class && (t.class = Ft([t.class, n.class]));
      else if (a === "style")
        t.style = pi([t.style, n.style]);
      else if (ua(a)) {
        const i = t[a], o = n[a];
        o && i !== o && !(ne(i) && i.includes(o)) ? t[a] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !da(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Xt(e, t, r, n = null) {
  qt(e, t, 7, [
    r,
    n
  ]);
}
const Tc = fl();
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
    propsOptions: _l(n, a),
    emitsOptions: pl(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
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
const kc = () => dt || It;
let la, xn;
{
  const e = ha(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (i) => {
      a.length > 1 ? a.forEach((o) => o(i)) : a[0](i);
    };
  };
  la = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => dt = r
  ), xn = t(
    "__VUE_SSR_SETTERS__",
    (r) => An = r
  );
}
const On = (e) => {
  const t = dt;
  return la(e), e.scope.on(), () => {
    e.scope.off(), la(t);
  };
}, zi = () => {
  dt && dt.scope.off(), la(null);
};
function Nl(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function Rc(e, t = !1, r = !1) {
  t && xn(t);
  const { props: n, children: a } = e.vnode, i = Nl(e);
  uc(e, n, i, t), hc(e, a, r || t);
  const o = i ? Oc(e, t) : void 0;
  return t && xn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    fr();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, i = On(e), o = Rn(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = As(o);
    if (pr(), i(), (u || e.sp) && !vn(e) && il(e), u) {
      if (o.then(zi, zi), t)
        return o.then((h) => {
          xn(!0);
          try {
            Wi(e, h, t);
          } finally {
            xn(!1);
          }
        }).catch((h) => {
          ba(h, e, 0);
        });
      e.asyncDep = o;
    } else
      Wi(e, o);
  } else
    Pl(e);
}
function Wi(e, t, r) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Ys(t)), Pl(e);
}
function Pl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || tr);
  {
    const a = On(e);
    fr();
    try {
      Xo(e);
    } finally {
      pr(), a();
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
function wa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ys(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in wn)
        return wn[r](e);
    },
    has(t, r) {
      return r in t || r in wn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return de(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ To(e, t, An), Lc = "3.5.42";
let li;
const Ki = typeof window < "u" && window.trustedTypes;
if (Ki)
  try {
    li = /* @__PURE__ */ Ki.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Il = li ? (e) => li.createHTML(e) : (e) => e, Dc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", lr = typeof document < "u" ? document : null, Gi = lr && /* @__PURE__ */ lr.createElement("template"), Uc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? lr.createElementNS(Dc, e) : t === "mathml" ? lr.createElementNS(Mc, e) : r ? lr.createElement(e, { is: r }) : lr.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => lr.createTextNode(e),
  createComment: (e) => lr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lr.querySelector(e),
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
      Gi.innerHTML = Il(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Gi.content;
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
const Yi = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, a = Fe(r);
  let i = !1;
  if (r && !a) {
    if (t)
      if (Fe(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && hn(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && hn(n, o, "");
    for (const o in r) {
      o === "display" && (i = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !Fe(t) && t ? t[o] : void 0,
        u
      ) || hn(n, o, u) : hn(n, o, "");
    }
  } else if (a) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, i = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Yi in e && (e[Yi] = i ? n.display : "", e[$c] && (n.display = "none"));
}
const Kn = /\s*!important$/;
function hn(e, t, r) {
  if (ne(r))
    r.forEach((n) => hn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Kn.test(r) ? e.setProperty(t, r.replace(Kn, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    Kn.test(r) ? e.setProperty(
      Hr(n),
      r.replace(Kn, ""),
      "important"
    ) : e[n] = r;
  }
}
const Xi = ["Webkit", "Moz", "ms"], $a = {};
function Bc(e, t) {
  const r = $a[t];
  if (r)
    return r;
  let n = $t(t);
  if (n !== "filter" && n in e)
    return $a[t] = n;
  n = Os(n);
  for (let a = 0; a < Xi.length; a++) {
    const i = Xi[a] + n;
    if (i in e)
      return $a[t] = i;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Fe(n) && r === n;
}
const Ji = "http://www.w3.org/1999/xlink";
function Zi(e, t, r, n, a, i = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ji, t.slice(6, t.length)) : e.setAttributeNS(Ji, t, r) : r == null || i && !Ps(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : rr(r) ? String(r) : r
  );
}
function Qi(e, t, r, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Il(r) : r);
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
    u === "boolean" ? r = Ps(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
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
const es = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, a = null) {
  const i = e[es] || (e[es] = {}), o = i[t];
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
let ja = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => ja || (Jc.then(() => ja = 0), ja = Date.now());
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
        S && qt(
          S,
          t,
          5,
          u
        );
      }
    } else
      qt(
        a,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, a, i) => {
  const o = a === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? qc(e, r, n) : ua(t) ? da(t) || Kc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Qi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Fe(n))) ? Qi(e, $t(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Zi(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ts(t) && de(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ts(t) && Fe(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = $t(t);
  return Array.isArray(r) ? r.some((a) => $t(a) === n) : Object.keys(r).some((a) => $t(a) === n);
}
const oa = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => Jn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function rs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Lr = /* @__PURE__ */ Symbol("_assign"), Gn = /* @__PURE__ */ Symbol("_initialValue");
function Va(e, t, r) {
  return t && (e = e.trim()), r && (e = pa(e)), e;
}
const ns = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Gn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Gn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Lr] = oa(a);
    const i = n || a.props && a.props.type === "number";
    Ir(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Lr](Va(e.value, r, i));
    }), (r || i) && Ir(e, "change", () => {
      e.value = Va(e.value, r, i);
    }), t || (Ir(e, "compositionstart", nu), Ir(e, "compositionend", rs), Ir(e, "change", rs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", i = e[Gn];
    delete e[Gn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Lr](Va(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: i } }, o) {
    if (e[Lr] = oa(o), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? pa(e.value) : e.value, h = t ?? "";
    if (u === h)
      return;
    const S = e.getRootNode();
    (S instanceof Document || S instanceof ShadowRoot) && S.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === h) || (e.value = h);
  }
}, At = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Ir(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (h) => h.selected).map(
        (h) => r ? pa(ca(h)) : ca(h)
      ), i = e.multiple, o = i ? Fr(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        i,
        i ? ne(o) ? a.slice() : a : o
      ];
      try {
        e[Lr](o);
      } finally {
        Js(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Lr] = oa(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    as(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Lr] = oa(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && as(e, t);
  }
};
function au(e, t, r) {
  if (!r || ne(e)) return Cr(e, t);
  if (Fr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function as(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Fr(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const o = e.options[a], u = ca(o);
      if (r)
        if (n) {
          const h = typeof u;
          h === "string" || h === "number" ? o.selected = t.some((S) => String(S) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (Cr(ca(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ca(e) {
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
}, Yn = (e, t) => {
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
let is;
function ou() {
  return is || (is = bc(lu));
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
    const i = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function ss(e, t) {
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
    if (typeof e == "string") return ss(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ss(e, t) : void 0;
  }
}
const Ll = Object.entries, ls = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let Ve = Object.freeze, Ke = Object.seal, Xr = Object.create, Dl = typeof Reflect < "u" && Reflect, oi = Dl.apply, ci = Dl.construct;
Ve || (Ve = function(t) {
  return t;
});
Ke || (Ke = function(t) {
  return t;
});
oi || (oi = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  return t.apply(r, a);
});
ci || (ci = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Pr = je(Array.prototype.forEach), wu = je(Array.prototype.lastIndexOf), os = je(Array.prototype.pop), cn = je(Array.prototype.push), Su = je(Array.prototype.splice), en = Array.isArray, mn = je(String.prototype.toLowerCase), qa = je(String.prototype.toString), cs = je(String.prototype.match), un = je(String.prototype.replace), us = je(String.prototype.indexOf), Eu = je(String.prototype.trim), Cu = je(Number.prototype.toString), Tu = je(Boolean.prototype.toString), ds = typeof BigInt > "u" ? null : je(BigInt.prototype.toString), fs = typeof Symbol > "u" ? null : je(Symbol.prototype.toString), gt = je(Object.prototype.hasOwnProperty), dn = je(Object.prototype.toString), Qe = je(RegExp.prototype.test), Or = xu(TypeError);
function je(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return oi(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ci(e, r);
  };
}
function ye(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mn;
  if (ls && ls(e, null), !en(t))
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
    gt(e, t) || (e[t] = null);
  return e;
}
function Rt(e) {
  const t = Xr(null);
  for (const n of Ll(e)) {
    var r = bu(n, 2);
    const a = r[0], i = r[1];
    gt(e, a) && (en(i) ? t[a] = Au(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = Rt(i) : t[a] = i);
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
      return ds ? ds(e) : "0";
    case "symbol":
      return fs ? fs(e) : "Symbol()";
    case "undefined":
      return dn(e);
    case "function":
    case "object": {
      if (e === null)
        return dn(e);
      const t = e, r = Ut(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : dn(n);
      }
      return dn(e);
    }
    default:
      return dn(e);
  }
}
function Ut(e, t) {
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
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const ps = Ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ba = Ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), za = Ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = Ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Wa = Ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = Ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), hs = Ve(["#text"]), ms = Ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ka = Ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), bs = Ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xn = Ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ke(/\${[\w\W]*/g), Du = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Ke(/^aria-[\-\w]+$/), ys = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), gs = Ke(/<[/\w!]/g), _s = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), kt = {
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
}, Ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = Ve(ye({}, Ml)), Bu = (function() {
  const e = {};
  return Pr(Ml, (t) => {
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
}, vs = function() {
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
}, wr = function(t, r, n, a) {
  return gt(t, r) && en(t[r]) ? ye(a.base ? Rt(a.base) : {}, t[r], a.transform) : n;
}, Ga = function(t, r, n) {
  const a = gt(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? Rt(a) : n();
};
function Ul() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ul(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== kt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, u = e.Element, h = e.NodeFilter, S = e.NamedNodeMap;
  S === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, I = u.prototype, j = Ut(I, "cloneNode"), se = Ut(I, "remove"), K = Ut(I, "nextSibling"), ue = Ut(I, "childNodes"), le = Ut(I, "parentNode"), z = Ut(I, "shadowRoot"), M = Ut(I, "attributes"), V = o && o.prototype ? Ut(o.prototype, "nodeType") : null, ce = o && o.prototype ? Ut(o.prototype, "nodeName") : null, Le = o && o.prototype ? Ut(o.prototype, "ownerDocument") : null, Ne = function(d) {
    return V ? V(d) : d.nodeType;
  }, qe = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof i == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, De = "", nt, ft = !1, Ge = 0;
  const Nt = function() {
    if (Ge > 0)
      throw Or('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(d) {
    Nt(), Ge++;
    try {
      return Ee.createHTML(d);
    } finally {
      Ge--;
    }
  }, Me = function(d) {
    Nt(), Ge++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Ge--;
    }
  }, ge = function() {
    return ft || (nt = Wu(E, a), ft = !0), nt;
  }, pe = r, Be = pe.implementation, _e = pe.createNodeIterator, Oe = pe.createDocumentFragment, ze = pe.getElementsByTagName, at = n.importNode;
  let me = vs();
  t.isSupported = typeof Ll == "function" && typeof le == "function" && Be && Be.createHTMLDocument !== void 0;
  const nr = Pu, $e = Iu, _t = Lu, vt = Du, wt = Mu, pt = Uu, Dt = Fu, m = $u;
  let b = ys, w = null;
  const R = ye({}, [...ps, ...Ba, ...za, ...Wa, ...hs]);
  let x = null;
  const k = ye({}, [...ms, ...Ka, ...bs, ...Xn]);
  let D = Object.seal(Xr(null, {
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
  const A = Object.seal(Xr(null, {
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
  let X = !0, $ = !0, W = !1, G = !0, ae = !1, N = !0, P = !1, H = !1, ee = null, oe = null, he = !1, fe = !1, Ue = !1, re = !1, xe = !0, Ye = !1;
  const St = "user-content-";
  let ar = !0, it = !1, Et = {}, Ct = null;
  const Bt = ye({}, [
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
  let zt = null;
  const Mt = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let We = null;
  const ir = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Xe = "http://www.w3.org/1998/Math/MathML", st = "http://www.w3.org/2000/svg", Ze = "http://www.w3.org/1999/xhtml";
  let yr = Ze, $r = !1, nn = null;
  const Sa = ye({}, [Xe, st, Ze], qa), Wt = Ve(["mi", "mo", "mn", "ms", "mtext"]);
  let jr = ye({}, Wt);
  const an = Ve(["annotation-xml"]);
  let sn = ye({}, an);
  const Nn = ye({}, ["title", "style", "font", "a", "script"]);
  let Tr = null;
  const Pn = ["application/xhtml+xml", "text/html"], In = "text/html";
  let Pe = null, Kt = null;
  const Ea = r.createElement("form"), Ln = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, xr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kt && Kt === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = Rt(d), Tr = // eslint-disable-next-line unicorn/prefer-includes
    Pn.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? In : d.PARSER_MEDIA_TYPE, Pe = Tr === "application/xhtml+xml" ? qa : mn, w = wr(d, "ALLOWED_TAGS", R, {
      transform: Pe
    }), x = wr(d, "ALLOWED_ATTR", k, {
      transform: Pe
    }), nn = wr(d, "ALLOWED_NAMESPACES", Sa, {
      transform: qa
    }), We = wr(d, "ADD_URI_SAFE_ATTR", ir, {
      transform: Pe,
      base: ir
    }), zt = wr(d, "ADD_DATA_URI_TAGS", Mt, {
      transform: Pe,
      base: Mt
    }), Ct = wr(d, "FORBID_CONTENTS", Bt, {
      transform: Pe
    }), U = wr(d, "FORBID_TAGS", Rt({}), {
      transform: Pe
    }), L = wr(d, "FORBID_ATTR", Rt({}), {
      transform: Pe
    }), Et = gt(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? Rt(d.USE_PROFILES) : d.USE_PROFILES : !1, X = d.ALLOW_ARIA_ATTR !== !1, $ = d.ALLOW_DATA_ATTR !== !1, W = d.ALLOW_UNKNOWN_PROTOCOLS || !1, G = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = d.SAFE_FOR_TEMPLATES || !1, N = d.SAFE_FOR_XML !== !1, P = d.WHOLE_DOCUMENT || !1, fe = d.RETURN_DOM || !1, Ue = d.RETURN_DOM_FRAGMENT || !1, re = d.RETURN_TRUSTED_TYPE || !1, he = d.FORCE_BODY || !1, xe = d.SANITIZE_DOM !== !1, Ye = d.SANITIZE_NAMED_PROPS || !1, ar = d.KEEP_CONTENT !== !1, it = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : ys, yr = typeof d.NAMESPACE == "string" ? d.NAMESPACE : Ze, jr = Ga(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ye({}, Wt)
      // Default built-in map
    ), sn = Ga(
      d,
      "HTML_INTEGRATION_POINTS",
      () => ye({}, an)
      // Default built-in map
    );
    const _ = Ga(d, "CUSTOM_ELEMENT_HANDLING", () => Xr(null));
    if (D = Xr(null), gt(_, "tagNameCheck") && Ln(_.tagNameCheck) && (D.tagNameCheck = _.tagNameCheck), gt(_, "attributeNameCheck") && Ln(_.attributeNameCheck) && (D.attributeNameCheck = _.attributeNameCheck), gt(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), Ke(D), ae && ($ = !1), Ue && (fe = !0), Et && (w = ye({}, hs), x = Xr(null), Et.html === !0 && (ye(w, ps), ye(x, ms)), Et.svg === !0 && (ye(w, Ba), ye(x, Ka), ye(x, Xn)), Et.svgFilters === !0 && (ye(w, za), ye(x, Ka), ye(x, Xn)), Et.mathMl === !0 && (ye(w, Wa), ye(x, bs), ye(x, Xn))), A.tagCheck = null, A.attributeCheck = null, gt(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? A.tagCheck = d.ADD_TAGS : en(d.ADD_TAGS) && (w === R && (w = Rt(w)), ye(w, d.ADD_TAGS, Pe))), gt(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? A.attributeCheck = d.ADD_ATTR : en(d.ADD_ATTR) && (x === k && (x = Rt(x)), ye(x, d.ADD_ATTR, Pe))), gt(d, "ADD_FORBID_CONTENTS") && en(d.ADD_FORBID_CONTENTS) && (Ct === Bt && (Ct = Rt(Ct)), ye(Ct, d.ADD_FORBID_CONTENTS, Pe)), ar && (w["#text"] = !0), P && ye(w, ["html", "head", "body"]), w.table && (ye(w, ["tbody"]), delete U.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Or('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Or('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        De = He("");
      } catch (q) {
        throw Ee = O, q;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, De = "") : (Ee === void 0 && (Ee = ge()), Ee && typeof De == "string" && (De = He("")));
    Ve && Ve(d), Kt = d;
  }, Vr = ye({}, [...Ba, ...za, ...Ou]), Dn = ye({}, [...Wa, ...Nu]), Ca = function(d, _, O) {
    return _.namespaceURI === Ze ? d === "svg" : _.namespaceURI === Xe ? d === "svg" && (O === "annotation-xml" || jr[O]) : !!Vr[d];
  }, Mn = function(d, _, O) {
    return _.namespaceURI === Ze ? d === "math" : _.namespaceURI === st ? d === "math" && sn[O] : !!Dn[d];
  }, Un = function(d, _, O) {
    return _.namespaceURI === st && !sn[O] || _.namespaceURI === Xe && !jr[O] ? !1 : !Dn[d] && (Nn[d] || !Vr[d]);
  }, Ta = function(d) {
    let _ = le(d);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: yr,
      tagName: "template"
    });
    const O = mn(d.tagName), q = mn(_.tagName);
    return nn[d.namespaceURI] ? d.namespaceURI === st ? Ca(O, _, q) : d.namespaceURI === Xe ? Mn(O, _, q) : d.namespaceURI === Ze ? Un(O, _, q) : !!(Tr === "application/xhtml+xml" && nn[d.namespaceURI]) : !1;
  }, Gt = function(d) {
    cn(t.removed, {
      element: d
    });
    try {
      le(d).removeChild(d);
    } catch {
      if (se(d), !le(d))
        throw Or("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Fn = function(d, _, O) {
    try {
      d.removeAttributeNode(_);
    } catch {
      try {
        d.removeAttribute(O);
      } catch {
      }
    }
  }, gr = function(d) {
    qr(d);
    const _ = ue(d);
    if (_) {
      const q = [];
      Pr(_, (Z) => {
        cn(q, Z);
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
        typeof ie == "string" && Fn(d, Z, ie);
      }
  }, Tt = function(d, _, O) {
    if (!O)
      try {
        O = _.getAttributeNode(d);
      } catch {
        O = null;
      }
    cn(t.removed, {
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
      if (fe || Ue)
        try {
          Gt(_);
        } catch {
        }
      else
        try {
          _.setAttribute(d, "");
        } catch {
        }
  }, xa = function(d) {
    const _ = M(d);
    if (_)
      for (let O = _.length - 1; O >= 0; --O) {
        const q = _[O], Z = q && q.name;
        typeof Z != "string" || x[Pe(Z)] || Fn(d, q, Z);
      }
  }, qr = function(d) {
    const _ = [d];
    for (; _.length > 0; ) {
      const O = _.pop();
      Ne(O) === kt.element && xa(O);
      const Z = ue(O);
      if (Z)
        for (let ie = Z.length - 1; ie >= 0; --ie)
          _.push(Z[ie]);
    }
  }, Hn = function(d, _) {
    return N ? d === "patchsrc" ? !0 : d === "for" && _ !== "label" && _ !== "output" : !1;
  }, Aa = function(d) {
    if (!N)
      return;
    const _ = [d];
    for (; _.length > 0; ) {
      const O = _.pop(), q = Ne(O);
      if (q === kt.processingInstruction || q === kt.comment && Qe(_s, O.data)) {
        try {
          se(O);
        } catch {
        }
        continue;
      }
      if (q === kt.element) {
        const ie = O, ke = Pe(qe(O));
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Hn("for", ke) && ie.removeAttribute("for");
        } catch {
        }
      }
      const Z = ue(O);
      if (Z)
        for (let ie = Z.length - 1; ie >= 0; --ie)
          _.push(Z[ie]);
    }
  }, $n = function(d) {
    let _ = null, O = null;
    if (he)
      d = "<remove></remove>" + d;
    else {
      const ie = cs(d, /^[\r\n\t ]+/);
      O = ie && ie[0];
    }
    Tr === "application/xhtml+xml" && yr === Ze && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const q = Ee ? He(d) : d;
    if (yr === Ze)
      try {
        _ = new y().parseFromString(q, Tr);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = Be.createDocument(yr, "template", null);
      try {
        _.documentElement.innerHTML = $r ? De : q;
      } catch {
      }
    }
    const Z = _.body || _.documentElement;
    return d && O && Z.insertBefore(r.createTextNode(O), Z.childNodes[0] || null), yr === Ze ? ze.call(_, P ? "html" : "body")[0] : P ? _.documentElement : Z;
  }, jn = function(d) {
    const _ = Le ? Le(d) : d.ownerDocument;
    return _e.call(
      _ || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Br = function(d) {
    return d = un(d, nr, " "), d = un(d, $e, " "), d = un(d, _t, " "), d;
  }, zr = function(d) {
    var _;
    d.normalize();
    const O = Le ? Le(d) : d.ownerDocument, q = _e.call(
      O || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_TEXT | h.SHOW_COMMENT | h.SHOW_CDATA_SECTION | h.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = q.nextNode();
    for (; Z; )
      Z.data = Br(Z.data), Z = q.nextNode();
    const ie = (_ = d.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(d, "template");
    ie && Pr(ie, (ke) => {
      Pt(ke.content) && zr(ke.content);
    });
  }, Yt = function(d) {
    const _ = ce ? ce(d) : null;
    return typeof _ != "string" || Pe(_) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, Pt = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === kt.documentFragment;
    } catch {
      return !1;
    }
  }, _r = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function v(F, d, _) {
    F.length !== 0 && Pr(F, (O) => {
      O.call(t, d, _, Kt);
    });
  }
  const g = function(d, _) {
    return !!(N && d.hasChildNodes() && !_r(d.firstElementChild) && Qe(gs, d.textContent) && Qe(gs, d.innerHTML) || N && d.namespaceURI === Ze && qu[_] && (_r(d.firstElementChild) || typeof d.textContent == "string" && Qe(Bu[_], d.textContent)) || d.nodeType === kt.processingInstruction || N && d.nodeType === kt.comment && Qe(_s, d.data));
  }, f = function(d, _) {
    if (d instanceof RegExp)
      return Qe(d, _);
    if (d instanceof Function) {
      for (var O = arguments.length, q = new Array(O > 2 ? O - 2 : 0), Z = 2; Z < O; Z++)
        q[Z - 2] = arguments[Z];
      return !!d(_, ...q);
    }
    return !1;
  }, Q = function(d, _, O) {
    if (!U[_] && Vn(_) && f(D.tagNameCheck, _))
      return !1;
    if (ar && !Ct[_]) {
      const q = le(d), Z = ue(d);
      if (Z && q) {
        const ie = Z.length;
        for (let ke = ie - 1; ke >= 0; --ke) {
          const Ie = d === O ? j(Z[ke], !0) : Z[ke];
          q.insertBefore(Ie, K(d));
        }
      }
    }
    return Gt(d), !0;
  }, Ce = function(d, _, O, q) {
    return d.length === 0 ? _ : _ === O || _ === q ? Rt(_) : _;
  }, ht = function(d, _) {
    return d === _ || le(d) !== null ? !1 : (it && qr(d), !0);
  }, xt = function(d, _) {
    if (v(me.beforeSanitizeElements, d, null), ht(d, _))
      return !0;
    if (Yt(d))
      return Gt(d), !0;
    const O = Pe(qe(d));
    if (w = Ce(me.uponSanitizeElement, w, R, ee), v(me.uponSanitizeElement, d, {
      tagName: O,
      allowedTags: w
    }), ht(d, _))
      return !0;
    if (g(d, O))
      return Gt(d), !0;
    if (U[O] || !(A.tagCheck instanceof Function && A.tagCheck(O)) && !w[O]) {
      const Z = Q(d, O, _);
      return Z === !1 && v(me.afterSanitizeElements, d, null), Z;
    }
    if (Ne(d) === kt.element && !Ta(d) || (O === "noscript" || O === "noembed" || O === "noframes") && Qe(ju, d.innerHTML))
      return Gt(d), !0;
    if (ae && d.nodeType === kt.text) {
      const Z = Br(d.textContent);
      d.textContent !== Z && (cn(t.removed, {
        element: d.cloneNode()
      }), d.textContent = Z);
    }
    return v(me.afterSanitizeElements, d, null), !1;
  }, Ar = function(d, _, O) {
    if (L[_] || Hn(_, d) || xe && (_ === "id" || _ === "name") && (O in r || O in Ea))
      return !1;
    const q = x[_] || A.attributeCheck instanceof Function && A.attributeCheck(_, d);
    return $ && Qe(vt, _) || X && Qe(wt, _) ? !0 : q ? We[_] || Qe(b, un(O, Dt, "")) || (_ === "src" || _ === "xlink:href" || _ === "href") && d !== "script" && us(O, "data:") === 0 && zt[d] || W && !Qe(pt, un(O, Dt, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Vn(d) && f(D.tagNameCheck, d) && f(D.attributeNameCheck, _, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      _ === "is" && D.allowCustomizedBuiltInElements && f(D.tagNameCheck, O)
    );
  }, vr = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Vn = function(d) {
    return !vr[mn(d)] && Qe(m, d);
  }, Hl = function(d, _, O, q) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !O)
      switch (E.getAttributeType(d, _)) {
        case "TrustedHTML":
          return He(q);
        case "TrustedScriptURL":
          return Me(q);
      }
    return q;
  }, $l = function(d, _, O, q) {
    try {
      O ? d.setAttributeNS(O, _, q) : d.setAttribute(_, q), Yt(d) ? Gt(d) : os(t.removed);
    } catch {
      Tt(_, d);
    }
  }, xi = function(d) {
    v(me.beforeSanitizeAttributes, d, null);
    const _ = d.attributes;
    if (!_ || Yt(d))
      return;
    x = Ce(me.uponSanitizeAttribute, x, k, oe);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let q = _.length;
    const Z = Pe(d.nodeName);
    for (; q--; ) {
      const ie = _[q], ke = ie.name, Ie = ie.namespaceURI, mt = ie.value, bt = Pe(ke), Ra = mt;
      let lt = ke === "value" ? Ra : Eu(Ra);
      if (O.attrName = bt, O.attrValue = lt, O.keepAttr = !0, O.forceKeepAttr = void 0, v(me.uponSanitizeAttribute, d, O), lt = O.attrValue, Ye && (bt === "id" || bt === "name") && us(lt, St) !== 0 && (Tt(ke, d, ie), lt = St + lt), N && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, lt)) {
        Tt(ke, d, ie);
        continue;
      }
      if (bt === "attributename" && cs(lt, "href")) {
        Tt(ke, d, ie);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          Tt(ke, d, ie);
          continue;
        }
        if (!G && Qe(Vu, lt)) {
          Tt(ke, d, ie);
          continue;
        }
        if (ae && (lt = Br(lt)), !Ar(Z, bt, lt)) {
          Tt(ke, d, ie);
          continue;
        }
        lt = Hl(Z, bt, Ie, lt), lt !== Ra && $l(d, ke, Ie, lt);
      }
    }
    v(me.afterSanitizeAttributes, d, null);
  }, qn = function(d) {
    let _ = null;
    const O = jn(d);
    for (v(me.beforeSanitizeShadowDOM, d, null); _ = O.nextNode(); )
      if (v(me.uponSanitizeShadowNode, _, null), xt(_, d), xi(_), Pt(_.content) && qn(_.content), Ne(_) === kt.element) {
        const q = z(_);
        Pt(q) && (ka(q), qn(q));
      }
    v(me.afterSanitizeShadowDOM, d, null);
  }, ka = function(d) {
    const _ = [{
      node: d,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const O = _.pop();
      if (O.shadow) {
        qn(O.shadow);
        continue;
      }
      const q = O.node, ie = Ne(q) === kt.element, ke = ue(q);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          _.push({
            node: ke[Ie],
            shadow: null
          });
      if (ie) {
        const Ie = ce ? ce(q) : null;
        if (typeof Ie == "string" && Pe(Ie) === "template") {
          const mt = q.content;
          Pt(mt) && _.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Ie = z(q);
        Pt(Ie) && _.push({
          node: null,
          shadow: Ie
        }, {
          node: Ie,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, O = null, q = null, Z = null;
    if ($r = !F, $r && (F = "<!-->"), typeof F != "string" && !_r(F) && (F = ku(F), typeof F != "string"))
      throw Or("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (w = ee, x = oe) : xr(d), (me.uponSanitizeElement.length > 0 || me.uponSanitizeAttribute.length > 0) && (w = Rt(w)), me.uponSanitizeAttribute.length > 0 && (x = Rt(x)), t.removed = [];
    const ie = it && typeof F != "string" && _r(F);
    if (ie) {
      Aa(F);
      const mt = qe(F);
      if (typeof mt == "string") {
        const bt = Pe(mt);
        if (!w[bt] || U[bt])
          throw gr(F), Or("root node is forbidden and cannot be sanitized in-place");
      }
      if (Yt(F))
        throw gr(F), Or("root node is clobbered and cannot be sanitized in-place");
      try {
        ka(F);
      } catch (bt) {
        throw gr(F), bt;
      }
    } else if (_r(F))
      _ = $n("<!---->"), O = _.ownerDocument.importNode(F, !0), O.nodeType === kt.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? _ = O : _.appendChild(O), ka(O);
    else {
      if (!fe && !ae && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && re ? He(F) : F;
      if (_ = $n(F), !_)
        return fe ? null : re ? De : "";
    }
    _ && he && Gt(_.firstChild);
    const ke = ie ? F : _;
    try {
      const mt = jn(ke);
      for (; q = mt.nextNode(); )
        xt(q, ke), xi(q), Pt(q.content) && qn(q.content);
    } catch (mt) {
      throw ie && (gr(F), Pr(t.removed, (bt) => {
        bt.element && qr(bt.element);
      })), mt;
    }
    if (ie)
      return Pr(t.removed, (mt) => {
        mt.element && qr(mt.element);
      }), ae && zr(F), F;
    if (fe) {
      if (ae && zr(_), Ue)
        for (Z = Oe.call(_.ownerDocument); _.firstChild; )
          Z.appendChild(_.firstChild);
      else
        Z = _;
      return (x.shadowroot || x.shadowrootmode) && (Z = at.call(n, Z, !0)), Z;
    }
    let Ie = P ? _.outerHTML : _.innerHTML;
    return P && w["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && Qe(Hu, _.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Ie), ae && (Ie = Br(Ie)), Ee && re ? He(Ie) : Ie;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xr(F), H = !0, ee = w, oe = x;
  }, t.clearConfig = function() {
    Kt = null, H = !1, ee = null, oe = null, Ee = nt, De = "";
  }, t.isValidAttribute = function(F, d, _) {
    Kt || xr({});
    const O = Pe(F), q = Pe(d);
    return Ar(O, q, _);
  }, t.addHook = function(F, d) {
    typeof d == "function" && gt(me, F) && cn(me[F], d);
  }, t.removeHook = function(F, d) {
    if (gt(me, F)) {
      if (d !== void 0) {
        const _ = wu(me[F], d);
        return _ === -1 ? void 0 : Su(me[F], _, 1)[0];
      }
      return os(me[F]);
    }
  }, t.removeHooks = function(F) {
    gt(me, F) && (me[F] = []);
  }, t.removeAllHooks = function() {
    me = vs();
  }, t;
}
var Ku = Ul();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya, ws;
function Yu() {
  if (ws) return Ya;
  ws = 1;
  var e = /["'&<>]/;
  Ya = t;
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
  return Ya;
}
var Xu = Yu();
const Ss = /* @__PURE__ */ Gu(Xu);
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
  }, h = (K) => K, S = (u.sanitize ? Ku.sanitize : h) || h, y = u.escape ? Ss : h, E = (K) => typeof K == "string" || typeof K == "number", I = (K, ue, le) => K.replace(/%n/g, "" + le).replace(/{([^{}]*)}/g, (z, M) => {
    if (ue === void 0 || !(M in ue))
      return y(z);
    const V = ue[M];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? Ss : h)(`${V.value}`) : y(z);
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
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ Ht({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ Ht((a.items || []).map((v) => ({ ...v }))), o = B(() => i), u = B(() => a.shelves || []), h = B(() => a.formats || []), S = B(() => a.publications || []), y = B(() => a.publicationSummaries || []), E = B(() => a.publicationIssueContext || null), I = B(() => a.publicationYears || []), j = B(() => a.creators || []), se = B(() => a.scanStatuses || []), K = B(() => a.workflowStatuses || []), ue = B(() => a.genres || []), le = B(() => a.classifications || []), z = B(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), M = /* @__PURE__ */ Ht({
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
    }), V = B(() => a.settingsUrl || ""), ce = B(() => a.requestToken || ""), Le = B(() => a.metadataExportUrl || ""), Ne = B(() => a.metadataSidecarManifestUrl || ""), qe = B(() => a.metadataSidecarBundleUrl || ""), Ee = B(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), De = B(() => a.batchTagUrl || "/apps/library/bulk/tags"), nt = B(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ft = B(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = B(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Nt = B(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), He = B(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Me = B(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ge = B(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), pe = B(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), Be = B(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), _e = /* @__PURE__ */ Ht({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Oe = B(() => _e.summary || {}), ze = B(() => {
      const v = Number(Oe.value.generatedAt || 0);
      return v > 0 ? new Date(v * 1e3).toLocaleString() : "";
    }), at = B(() => Oe.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), me = B(() => Oe.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), nr = B(() => Oe.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), $e = B(() => a.discoveryPage === "publication"), _t = B(() => a.discoveryPage === "year"), vt = B(() => a.discoveryPage === "creator"), wt = B(() => $e.value || _t.value || vt.value), pt = B(() => a.discoveryTitle || M.publication || M.year || M.creator || ""), Dt = B(() => wt.value ? pt.value : s("library", "Library")), m = B(() => vt.value ? s("library", "Creator") : _t.value ? s("library", "Publication year") : s("library", "Publication / series")), b = B(() => Number(a.rootCount || 0)), w = B(() => Number(a.enabledRootCount || 0)), R = B(() => b.value === 0), x = B(() => b.value > 0 && w.value === 0), k = B(() => N.value.length > 0), D = {
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
      const v = new URLSearchParams(window.location.search);
      if (v.get("batchMetadataApplyResult") !== "1") return "";
      const g = v.get("batchMetadataField") || "field", f = v.get("batchMetadataApplied") || "0", Q = v.get("batchMetadataUnchanged") || "0", Ce = v.get("batchMetadataSkipped") || "0";
      return s("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: g, unchanged: Q, skipped: Ce });
    }), L = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? s("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), A = B(() => a.savedCollections || []), X = B(() => a.savedCollectionSaveUrl || "/apps/library/collections"), $ = B(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), W = ["compact", "gallery", "shelf"], G = B(() => W.includes(M.view) ? M.view : "compact"), ae = B(() => ({
      "library-cover-gallery--compact": G.value === "compact",
      "library-cover-gallery--gallery": G.value === "gallery",
      "library-cover-gallery--shelf": G.value === "shelf"
    })), N = B(() => Object.entries(D).map(([v, g]) => ({ key: v, label: g, value: M[v] || "" })).filter((v) => String(v.value).trim() !== "")), P = B(() => Object.entries(M).filter(([v, g]) => !["q", "sort", "starred"].includes(v) && String(g || "").trim() !== "").map(([v, g]) => ({ key: v, value: g }))), H = B(() => Object.entries(M).filter(([v, g]) => String(g || "").trim() !== "").map(([v, g]) => ({ key: v, value: g }))), ee = /* @__PURE__ */ Ht({}), oe = /* @__PURE__ */ Ht({}), he = B(() => o.value.filter((v) => v.starred || v.workflowStatus === "reading" || v.lastOpenedAt).slice(0, 5)), fe = B(() => o.value.find((v) => v.description || v.publication || v.creators) || o.value[0] || null), Ue = B(() => !wt.value && o.value.length > 0), re = /* @__PURE__ */ Pi(null), xe = B(() => re.value ? o.value.findIndex((v) => v.id === re.value.id) : -1), Ye = B(() => xe.value > 0 ? o.value[xe.value - 1] : null), St = B(() => xe.value >= 0 && xe.value < o.value.length - 1 ? o.value[xe.value + 1] : null), ar = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], it = B(() => {
      const v = M.scannerConflicts === "1" || String(M.weakMetadata || "").trim() !== "", g = v ? o.value.find((f) => Ct(f).length > 0) : null;
      return {
        enabled: v,
        item: g,
        fields: g ? Ct(g) : [],
        reviewNextUrl: He.value,
        skipUrl: z.value.nextUrl || He.value
      };
    });
    function Et(v) {
      return Array.isArray(v) ? JSON.stringify(v) : v == null ? "" : String(v);
    }
    function Ct(v) {
      const g = v.fieldValues || {}, f = v.fieldSources || {};
      return ar.filter((Q) => Object.prototype.hasOwnProperty.call(g, Q)).map((Q) => {
        const Ce = Et(v[Q]), ht = Et(g[Q]), xt = Et(f[Q] || v.metadataSource || "scanner"), Ar = xt.includes("filename") || xt.includes("path") ? ht : "", vr = xt.includes("sidecar") ? ht : "";
        return { field: Q, currentValue: Ce, scannerCandidate: ht, pathTemplateCandidate: Ar, sidecarValue: vr, sourceProvenance: xt, differs: Ce !== ht };
      }).filter((Q) => Q.differs);
    }
    function Bt(v) {
      re.value = v;
    }
    function zt() {
      re.value = null;
    }
    function Mt(v) {
      v && (re.value = v);
    }
    const We = /* @__PURE__ */ Pi(null);
    let ir = null, Xe = 0, st = null;
    function Ze(v) {
      const g = new URLSearchParams(new FormData(v));
      for (const f of Array.from(g.keys()))
        String(g.get(f) || "").trim() === "" && g.delete(f);
      return g.delete("page"), g.get("view") === "compact" && g.delete("view"), g;
    }
    function yr(v) {
      i.splice(0, i.length, ...(v.items || []).map((g) => ({ ...g })));
      for (const g of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(v, g) && (a[g] = v[g]);
      Object.assign(M, v.activeFilters || {});
    }
    async function $r(v = !1) {
      if (!(_e.loading || _e.refreshing)) {
        v ? _e.refreshing = !0 : _e.loading = !0, _e.error = "";
        try {
          const g = await fetch(`${Be.value}${v ? "?refresh=1" : ""}`, {
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
    async function nn(v) {
      v && v.currentTarget && v.currentTarget.open !== !0 || _e.loaded || _e.loading || await $r(!1);
    }
    async function Sa() {
      await $r(!0);
    }
    async function Wt(v, g = null) {
      const f = v?.currentTarget?.tagName === "FORM" ? v.currentTarget : v?.currentTarget?.form;
      if (!f) return;
      const Q = g?.params ?? Ze(f), Ce = Q.toString(), ht = Ce ? `?${Ce}` : "", xt = g?.generation ?? ++Xe;
      if (xt !== Xe) return;
      g === null && st?.abort();
      const Ar = new AbortController();
      st = Ar;
      try {
        const vr = await fetch(Ee.value + ht, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ar.signal
        });
        if (xt !== Xe) return;
        if (!vr.ok) {
          jr(Q);
          return;
        }
        const Vn = await vr.json();
        if (xt !== Xe) return;
        yr(Vn), history.replaceState({}, "", Ce ? `?${Ce}` : window.location.pathname);
      } catch (vr) {
        xt === Xe && vr?.name !== "AbortError" && jr(Q);
      } finally {
        xt === Xe && (st = null);
      }
    }
    function jr(v) {
      const g = document.createElement("form");
      g.method = "get", g.action = window.location.pathname, g.hidden = !0;
      for (const [f, Q] of v.entries()) {
        const Ce = document.createElement("input");
        Ce.type = "hidden", Ce.name = f, Ce.value = Q, g.appendChild(Ce);
      }
      document.body.appendChild(g), g.submit(), g.remove();
    }
    function an(v, g = null, f = null) {
      if (g === null) {
        Wt(v);
        return;
      }
      Wt({ currentTarget: v }, { params: g, generation: f });
    }
    function sn(v) {
      const g = v?.currentTarget?.form;
      if (!g) return;
      window.clearTimeout(ir);
      const f = ++Xe, Q = Ze(g);
      st?.abort(), st = null, ir = window.setTimeout(() => an(g, Q, f), 350);
    }
    function Nn(v) {
      const g = new URLSearchParams();
      for (const [Q, Ce] of Object.entries(M)) {
        const ht = String(Ce || "").trim();
        ht !== "" && Q !== v && !(Q === "sort" && ht === "title") && !(Q === "view" && ht === "compact") && g.set(Q, ht);
      }
      const f = g.toString();
      return f ? `?${f}` : "?";
    }
    function Tr() {
      return Nn("q");
    }
    const Pn = B(() => a.smartViewCounts || {}), In = B(() => {
      const v = {};
      for (const [g, f] of Object.entries(M)) {
        const Q = String(f || "").trim();
        Q !== "" && !(g === "sort" && Q === "title") && (v[g] = Q);
      }
      return v;
    }), Pe = B(() => JSON.stringify(In.value)), Kt = B(() => Object.keys(In.value).length > 0), Ea = B(() => [
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
    ]), Ln = B(() => [
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
    function xr(v) {
      if (!W.includes(v)) return;
      M.view = v;
      const g = new URLSearchParams(window.location.search);
      v === "compact" ? g.delete("view") : g.set("view", v), g.delete("page"), history.replaceState({}, "", g.toString() ? `?${g.toString()}` : window.location.pathname);
    }
    function Vr(v) {
      const g = new URLSearchParams(window.location.search);
      for (const Q of Object.keys(D))
        g.delete(Q);
      g.delete("page");
      for (const [Q, Ce] of Object.entries(v))
        String(Ce || "").trim() !== "" && g.set(Q, String(Ce));
      const f = g.toString();
      return f ? `?${f}` : "?";
    }
    function Dn(v) {
      return Vr(v || {});
    }
    function Ca(v) {
      return $.value.replace("__COLLECTION_ID__", encodeURIComponent(String(v || "0")));
    }
    function Mn(v) {
      return String(v || "").toUpperCase();
    }
    function Un(v) {
      return v.nextcloudTags || [];
    }
    function Ta(v) {
      return y.value.find((f) => f.publication === v)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(v)}`;
    }
    function Gt(v) {
      return a.publicationYearLandingUrls?.[v] || `/apps/library/years/${encodeURIComponent(v)}`;
    }
    function Fn(v) {
      return a.creatorLandingUrls?.[v] || `/apps/library/creators/${encodeURIComponent(v)}`;
    }
    function gr(v) {
      const g = v?.target?.value || "";
      g && (window.location.href = g);
    }
    function Tt(v) {
      return oe[v.id] || "loading";
    }
    function xa(v) {
      oe[v.id] = "loaded";
    }
    function qr(v) {
      oe[v.id] = "error";
    }
    function Hn(v, g) {
      ee[v] = !!g?.currentTarget?.open;
    }
    function Aa(v) {
      const g = String(v?.tagName || "").toLowerCase();
      return v?.isContentEditable || ["input", "select", "textarea", "button"].includes(g);
    }
    function $n(v) {
      if (v.key !== "/" || v.metaKey || v.ctrlKey || v.altKey || v.shiftKey || Aa(v.target))
        return;
      v.preventDefault();
      const g = We.value?.closest?.(".library-workspace-panel--refine");
      g && (g.open = !0), We.value?.focus(), We.value?.select?.();
    }
    function jn(v) {
      v.key !== "Escape" || document.activeElement !== We.value || M.q === "" || (v.preventDefault(), M.q = "", We.value.value = "", window.clearTimeout(ir), an({ currentTarget: We.value }));
    }
    function Br(v) {
      return !re.value || v.metaKey || v.ctrlKey || v.altKey ? !1 : v.key === "Escape" ? (v.preventDefault(), zt(), !0) : v.key === "ArrowLeft" && Ye.value ? (v.preventDefault(), Mt(Ye.value), !0) : v.key === "ArrowRight" && St.value ? (v.preventDefault(), Mt(St.value), !0) : !1;
    }
    function zr(v) {
      Br(v) || ($n(v), jn(v));
    }
    ll(() => {
      window.addEventListener("keydown", zr);
    }), ol(() => {
      window.removeEventListener("keydown", zr), window.clearTimeout(ir), Xe += 1, st?.abort(), st = null;
    });
    const Yt = /* @__PURE__ */ Ht({}), Pt = /* @__PURE__ */ Ht({});
    async function _r(v, g) {
      const f = g?.currentTarget?.closest?.("form") || g?.currentTarget;
      if (!f || !v?.starUrl || Yt[v.id]) return;
      const Q = !!v.starred;
      Yt[v.id] = !0, Pt[v.id] = "", v.starred = !Q;
      try {
        (await fetch(v.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (v.starred = Q, Pt[v.id] = s("library", "Could not update star. Try again."));
      } catch {
        v.starred = Q, Pt[v.id] = s("library", "Could not update star. Try again.");
      } finally {
        Yt[v.id] = !1;
      }
    }
    return (v, g) => (C(), T("div", Zu, [
      l("section", Qu, [
        l("nav", {
          class: "library-catalogue-workspace library-workspace-menubar",
          "aria-label": p(s)("library", "One catalogue workspace")
        }, [
          l("details", td, [
            l("summary", rd, [
              g[22] || (g[22] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⌕", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: p(s)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
              }, c(p(s)("library", "Refine results")), 9, nd),
              l("small", ad, c(p(s)("library", "Filters, facets and saved filter shortcuts")), 1),
              l("b", id, c(M.shelf ? p(s)("library", "this shelf") : N.value.length > 0 ? p(s)("library", "current results") : p(s)("library", "whole catalogue")), 1)
            ]),
            l("form", {
              method: "get",
              class: "library-quick-filter-bar",
              "aria-label": p(s)("library", "Quick catalogue filters"),
              onSubmit: Yn(Wt, ["prevent"])
            }, [
              (C(!0), T(te, null, ve(P.value, (f) => (C(), T("input", {
                key: f.key,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, ld))), 128)),
              l("div", od, [
                l("label", {
                  class: "library-quick-filter-search",
                  title: p(s)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    be(c(p(s)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                    g[23] || (g[23] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  ot(l("input", {
                    ref_key: "quickSearchInput",
                    ref: We,
                    "onUpdate:modelValue": g[0] || (g[0] = (f) => M.q = f),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                    onInput: sn
                  }, null, 544), [
                    [ns, M.q]
                  ])
                ], 8, cd),
                l("button", {
                  type: "submit",
                  class: "button primary",
                  "aria-label": p(s)("library", "Search catalogue")
                }, c(p(s)("library", "Search")), 9, ud)
              ]),
              l("details", dd, [
                l("summary", null, c(p(s)("library", "Filter & sort")), 1),
                l("div", fd, [
                  l("label", null, [
                    be(c(p(s)("library", "Sort")), 1),
                    ot(l("select", {
                      "onUpdate:modelValue": g[1] || (g[1] = (f) => M.sort = f),
                      name: "sort",
                      onChange: Wt
                    }, [
                      l("option", pd, c(p(s)("library", "Title")), 1),
                      l("option", hd, c(p(s)("library", "Recently added")), 1),
                      l("option", md, c(p(s)("library", "Publication date")), 1),
                      l("option", bd, c(p(s)("library", "Series")), 1),
                      l("option", yd, c(p(s)("library", "Recently opened")), 1),
                      l("option", gd, c(p(s)("library", "Format")), 1)
                    ], 544), [
                      [At, M.sort]
                    ])
                  ]),
                  l("label", null, [
                    be(c(p(s)("library", "Starred")), 1),
                    ot(l("select", {
                      "onUpdate:modelValue": g[2] || (g[2] = (f) => M.starred = f),
                      name: "starred",
                      onChange: Wt
                    }, [
                      l("option", _d, c(p(s)("library", "All")), 1),
                      l("option", vd, c(p(s)("library", "Starred")), 1)
                    ], 544), [
                      [At, M.starred]
                    ])
                  ]),
                  l("label", null, [
                    be(c(p(s)("library", "Size")), 1),
                    l("select", {
                      value: z.value.limit,
                      name: "limit",
                      onChange: Wt
                    }, [
                      (C(), T(te, null, ve(n, (f) => l("option", {
                        key: f,
                        value: f
                      }, c(f), 9, Sd)), 64))
                    ], 40, wd)
                  ]),
                  l("button", {
                    type: "submit",
                    class: "button secondary",
                    "aria-label": p(s)("library", "Apply catalogue filters")
                  }, c(p(s)("library", "Apply filters")), 9, Ed),
                  l("a", {
                    href: "?",
                    class: "button secondary",
                    "aria-label": p(s)("library", "Clear catalogue filters")
                  }, c(p(s)("library", "Clear all")), 9, Cd)
                ])
              ])
            ], 40, sd),
            l("form", {
              method: "get",
              class: "library-filter-bar",
              "aria-label": p(s)("library", "Catalogue search and filters"),
              onSubmit: Yn(Wt, ["prevent"])
            }, [
              l("label", null, [
                be(c(p(s)("library", "Type")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[3] || (g[3] = (f) => M.type = f),
                  name: "type"
                }, [
                  l("option", xd, c(p(s)("library", "All types")), 1),
                  (C(), T(te, null, ve(r, (f) => l("option", {
                    key: f,
                    value: f
                  }, c(f), 9, Ad)), 64))
                ], 512), [
                  [At, M.type]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Series / periodical")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[4] || (g[4] = (f) => M.publication = f),
                  name: "publication"
                }, [
                  l("option", kd, c(p(s)("library", "All series and periodicals")), 1),
                  (C(!0), T(te, null, ve(S.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, Rd))), 128))
                ], 512), [
                  [At, M.publication]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Publication year")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[5] || (g[5] = (f) => M.year = f),
                  name: "year"
                }, [
                  l("option", Od, c(p(s)("library", "All years")), 1),
                  (C(!0), T(te, null, ve(I.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, Nd))), 128))
                ], 512), [
                  [At, M.year]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Creator")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[6] || (g[6] = (f) => M.creator = f),
                  name: "creator",
                  title: "Exact full-field creator matches only"
                }, [
                  l("option", Pd, c(p(s)("library", "All creators")), 1),
                  (C(!0), T(te, null, ve(j.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, Id))), 128))
                ], 512), [
                  [At, M.creator]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Nextcloud tag")), 1),
                ot(l("input", {
                  "onUpdate:modelValue": g[7] || (g[7] = (f) => M.tag = f),
                  type: "text",
                  name: "tag",
                  placeholder: "photography"
                }, null, 512), [
                  [ns, M.tag]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Format")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[8] || (g[8] = (f) => M.format = f),
                  name: "format"
                }, [
                  l("option", Ld, c(p(s)("library", "All formats")), 1),
                  (C(!0), T(te, null, ve(h.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(Mn(f)), 9, Dd))), 128))
                ], 512), [
                  [At, M.format]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Shelf")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[9] || (g[9] = (f) => M.shelf = f),
                  name: "shelf"
                }, [
                  l("option", Md, c(p(s)("library", "All shelves")), 1),
                  (C(!0), T(te, null, ve(u.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, Ud))), 128))
                ], 512), [
                  [At, M.shelf]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Scan status")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[10] || (g[10] = (f) => M.status = f),
                  name: "status"
                }, [
                  l("option", Fd, c(p(s)("library", "All scan statuses")), 1),
                  (C(!0), T(te, null, ve(se.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, Hd))), 128))
                ], 512), [
                  [At, M.status]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Workflow status")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[11] || (g[11] = (f) => M.workflowStatus = f),
                  name: "workflowStatus"
                }, [
                  l("option", $d, c(p(s)("library", "All workflow statuses")), 1),
                  (C(!0), T(te, null, ve(K.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, jd))), 128))
                ], 512), [
                  [At, M.workflowStatus]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Genre")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[12] || (g[12] = (f) => M.genre = f),
                  name: "genre"
                }, [
                  l("option", Vd, c(p(s)("library", "All genres")), 1),
                  (C(!0), T(te, null, ve(ue.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, qd))), 128))
                ], 512), [
                  [At, M.genre]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Classification")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[13] || (g[13] = (f) => M.classification = f),
                  name: "classification"
                }, [
                  l("option", Bd, c(p(s)("library", "All classifications")), 1),
                  (C(!0), T(te, null, ve(le.value, (f) => (C(), T("option", {
                    key: f,
                    value: f
                  }, c(f), 9, zd))), 128))
                ], 512), [
                  [At, M.classification]
                ])
              ]),
              l("label", null, [
                be(c(p(s)("library", "Scanner conflicts")), 1),
                ot(l("select", {
                  "onUpdate:modelValue": g[14] || (g[14] = (f) => M.scannerConflicts = f),
                  name: "scannerConflicts"
                }, [
                  l("option", Wd, c(p(s)("library", "All metadata")), 1),
                  l("option", Kd, c(p(s)("library", "Needs review")), 1)
                ], 512), [
                  [At, M.scannerConflicts]
                ])
              ]),
              l("button", Gd, c(p(s)("library", "Apply filters")), 1),
              l("a", Yd, c(p(s)("library", "Clear")), 1)
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
                title: p(s)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
              }, c(p(s)("library", "Browse shortcuts")), 9, Zd),
              l("small", Qd, c(p(s)("library", "Continue reading, recently added, rediscover and useful views")), 1),
              l("b", ef, c(p(s)("library", "whole catalogue")), 1)
            ]),
            Ue.value ? (C(), T("article", tf, [
              l("h3", {
                title: p(s)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
              }, c(p(s)("library", "Continue reading")), 9, rf),
              l("div", nf, [
                he.value[0] ? (C(), T("a", {
                  key: 0,
                  class: "button primary",
                  href: he.value[0].openUrl
                }, c(p(s)("library", "Read now")), 9, af)) : Y("", !0),
                he.value[0] ? (C(), T("button", {
                  key: 1,
                  type: "button",
                  class: "button secondary",
                  onClick: g[15] || (g[15] = (f) => Bt(he.value[0]))
                }, c(p(s)("library", "Details")), 1)) : Y("", !0)
              ])
            ])) : Y("", !0),
            fe.value ? (C(), T("article", sf, [
              l("p", lf, c(p(s)("library", "Rediscover")), 1),
              l("strong", null, c(fe.value.title), 1),
              l("span", of, c(fe.value.creators || fe.value.publication || fe.value.cachedPath), 1),
              l("button", {
                type: "button",
                class: "button secondary",
                onClick: g[16] || (g[16] = (f) => Bt(fe.value))
              }, c(p(s)("library", "Peek")), 1)
            ])) : Y("", !0),
            l("nav", {
              class: "library-useful-view-links",
              "aria-label": p(s)("library", "Useful views")
            }, [
              (C(!0), T(te, null, ve(Ea.value, (f) => (C(), T("a", {
                key: f.key,
                class: "library-useful-view-chip",
                href: Vr(f.filters),
                title: p(s)("library", f.description)
              }, [
                l("strong", null, c(p(s)("library", f.label)), 1),
                l("small", df, c(Number(Pn.value[f.key] || 0)), 1)
              ], 8, uf))), 128))
            ], 8, cf),
            l("div", ff, [
              y.value.length > 0 ? (C(), T("label", {
                key: 0,
                class: "library-shortcut-select-card library-periodical-groups",
                title: p(s)("library", "Jump into recurring publications with one click.")
              }, [
                l("span", null, c(p(s)("library", "Series / periodicals")), 1),
                l("select", { onChange: gr }, [
                  l("option", hf, c(p(s)("library", "Choose series")), 1),
                  (C(!0), T(te, null, ve(y.value, (f) => (C(), T("option", {
                    key: f.publication,
                    value: Ta(f.publication)
                  }, c(f.publication) + " · " + c(f.itemCount), 9, mf))), 128))
                ], 32)
              ], 8, pf)) : Y("", !0),
              I.value.length > 0 ? (C(), T("label", bf, [
                l("span", null, c(p(s)("library", "Publication year")), 1),
                l("select", { onChange: gr }, [
                  l("option", yf, c(p(s)("library", "Choose year")), 1),
                  (C(!0), T(te, null, ve(I.value, (f) => (C(), T("option", {
                    key: f,
                    value: Gt(f)
                  }, c(f), 9, gf))), 128))
                ], 32)
              ])) : Y("", !0),
              j.value.length > 0 ? (C(), T("label", _f, [
                l("span", null, c(p(s)("library", "Creator")), 1),
                l("select", { onChange: gr }, [
                  l("option", vf, c(p(s)("library", "Choose creator")), 1),
                  (C(!0), T(te, null, ve(j.value, (f) => (C(), T("option", {
                    key: f,
                    value: Fn(f)
                  }, c(f), 9, wf))), 128))
                ], 32)
              ])) : Y("", !0)
            ]),
            l("section", Sf, [
              l("h3", {
                title: p(s)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
              }, c(p(s)("library", "Custom collections")), 9, Ef),
              l("form", {
                method: "post",
                action: X.value,
                class: "library-saved-collection-save-form",
                title: Kt.value ? "" : p(s)("library", "Choose search terms or filters first, then save them as a custom collection.")
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Tf),
                l("input", {
                  type: "hidden",
                  name: "savedCollectionFilters",
                  value: Pe.value
                }, null, 8, xf),
                l("label", null, [
                  be(c(p(s)("library", "Collection name")), 1),
                  l("input", {
                    type: "text",
                    name: "savedCollectionName",
                    placeholder: p(s)("library", "e.g. Bremen photo books"),
                    disabled: !Kt.value,
                    autocomplete: "off"
                  }, null, 8, Af)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  disabled: !Kt.value,
                  title: p(s)("library", "Save current view")
                }, c(p(s)("library", "Save")), 9, kf)
              ], 8, Cf),
              A.value.length > 0 ? (C(), T("nav", {
                key: 0,
                class: "library-saved-collection-links",
                "aria-label": p(s)("library", "Saved custom collections")
              }, [
                (C(!0), T(te, null, ve(A.value, (f) => (C(), T("article", {
                  key: f.id,
                  class: "library-saved-collection-card"
                }, [
                  l("a", {
                    class: "library-saved-collection-link",
                    href: Dn(f.filters)
                  }, [
                    l("strong", null, c(f.name), 1),
                    l("span", null, c(Number(f.count || 0)) + " " + c(p(s)("library", "items")), 1)
                  ], 8, Of),
                  l("form", {
                    method: "post",
                    action: Ca(f.id),
                    class: "library-saved-collection-delete-form"
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "requesttoken",
                      value: ce.value
                    }, null, 8, Pf),
                    l("button", If, c(p(s)("library", "Delete")), 1)
                  ], 8, Nf)
                ]))), 128))
              ], 8, Rf)) : Y("", !0)
            ])
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
            "data-workspace-panel": "batch",
            "aria-label": p(s)("library", "Batch actions for current results")
          }, [
            l("summary", Df, [
              g[25] || (g[25] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "✓", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: p(s)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
              }, c(p(s)("library", "Batch actions")), 9, Mf),
              l("small", Uf, c(p(s)("library", "Preview and apply changes to current results")), 1),
              l("b", Ff, c(z.value.total) + " " + c(p(s)("library", "Current filter result")), 1)
            ]),
            l("div", Hf, [
              l("form", {
                method: "post",
                action: De.value,
                class: "library-batch-action-card library-batch-tag-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, jf),
                (C(!0), T(te, null, ve(H.value, (f) => (C(), T("input", {
                  key: f.key,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, Vf))), 128)),
                l("label", null, [
                  l("span", null, c(p(s)("library", "Add tag")), 1),
                  l("input", {
                    type: "text",
                    name: "nextcloudTagName",
                    list: "library-nextcloud-tag-suggestions",
                    placeholder: p(s)("library", "e.g. Review"),
                    autocomplete: "off"
                  }, null, 8, qf)
                ]),
                l("button", {
                  type: "submit",
                  class: "button primary",
                  title: p(s)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                }, c(p(s)("library", "Apply")), 9, Bf)
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
                (C(!0), T(te, null, ve(H.value, (f) => (C(), T("input", {
                  key: `remove-tag-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, Kf))), 128)),
                l("label", null, [
                  l("span", null, c(p(s)("library", "Remove tag")), 1),
                  l("input", {
                    type: "text",
                    name: "nextcloudTagName",
                    list: "library-nextcloud-tag-suggestions",
                    placeholder: p(s)("library", "e.g. Review"),
                    autocomplete: "off"
                  }, null, 8, Gf)
                ]),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: p(s)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                }, c(p(s)("library", "Remove")), 9, Yf)
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
                (C(!0), T(te, null, ve(H.value, (f) => (C(), T("input", {
                  key: `reset-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, Zf))), 128)),
                g[26] || (g[26] = l("input", {
                  type: "hidden",
                  name: "scannerConflicts",
                  value: "1"
                }, null, -1)),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: p(s)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                }, c(p(s)("library", "Reset metadata")), 9, Qf)
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
                (C(!0), T(te, null, ve(H.value, (f) => (C(), T("input", {
                  key: `edit-preview-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, rp))), 128)),
                l("label", null, [
                  l("span", null, c(p(s)("library", "Field")), 1),
                  l("select", np, [
                    l("option", ap, c(p(s)("library", "Publication type")), 1),
                    l("option", ip, c(p(s)("library", "Subtitle")), 1),
                    l("option", sp, c(p(s)("library", "Creators")), 1),
                    l("option", lp, c(p(s)("library", "Series / periodical")), 1),
                    l("option", op, c(p(s)("library", "Publication date")), 1),
                    l("option", cp, c(p(s)("library", "Language")), 1),
                    l("option", up, c(p(s)("library", "Publisher")), 1),
                    l("option", dp, c(p(s)("library", "Genres")), 1),
                    l("option", fp, c(p(s)("library", "Classifications")), 1)
                  ])
                ]),
                l("label", null, [
                  l("span", null, c(p(s)("library", "Value")), 1),
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
                  title: p(s)("library", "Preview first, then apply from the review page.")
                }, c(p(s)("library", "Preview edit")), 9, pp)
              ], 8, ep),
              l("form", {
                method: "post",
                action: Nt.value,
                class: "library-batch-action-card library-batch-cover-refresh-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, mp),
                (C(!0), T(te, null, ve(H.value, (f) => (C(), T("input", {
                  key: `cover-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, bp))), 128)),
                l("button", {
                  type: "submit",
                  class: "button secondary",
                  title: p(s)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                }, c(p(s)("library", "Fresh covers")), 9, yp)
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
                title: p(s)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
              }, c(p(s)("library", "Review queue")), 9, vp),
              l("small", wp, c(p(s)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
              l("b", Sp, c(p(s)("library", "current results")), 1)
            ]),
            l("nav", {
              class: "library-weak-metadata-links",
              "aria-label": p(s)("library", "Weak metadata catalogue views")
            }, [
              (C(!0), T(te, null, ve(Ln.value, (f) => (C(), T("a", {
                key: f.key,
                class: "library-weak-metadata-card",
                href: Vr(f.filters),
                title: p(s)("library", f.description)
              }, [
                l("span", null, [
                  l("strong", null, c(p(s)("library", f.label)), 1)
                ]),
                l("b", null, c(Number(Pn.value[f.key] || 0)), 1)
              ], 8, Cp))), 128))
            ], 8, Ep),
            l("div", Tp, [
              l("article", {
                title: p(s)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
              }, [
                l("h4", null, c(p(s)("library", "Metadata-error queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: at.value.reviewUrl || "?status=metadata_error"
                }, c(p(s)("library", "Open metadata-error rows")), 9, Ap),
                l("a", {
                  class: "button secondary",
                  href: ge.value
                }, c(p(s)("library", "Export metadata-error rows")), 9, kp),
                l("form", {
                  method: "post",
                  action: De.value,
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
                  l("button", Np, c(p(s)("library", "Tag metadata-error rows")), 1)
                ], 8, Rp)
              ], 8, xp),
              l("article", {
                title: p(s)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
              }, [
                l("h4", null, c(p(s)("library", "Scanner-conflict queue")), 1),
                l("a", {
                  class: "button secondary",
                  href: He.value
                }, c(p(s)("library", "Review scanner conflicts")), 9, Ip),
                l("form", {
                  method: "post",
                  action: De.value,
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
                  l("button", Mp, c(p(s)("library", "Tag scanner-conflict rows")), 1)
                ], 8, Lp)
              ], 8, Pp)
            ]),
            it.value.enabled ? (C(), T("section", Up, [
              l("div", Fp, [
                l("p", Hp, c(p(s)("library", "Metadata review workbench")), 1),
                l("h3", {
                  id: "library-metadata-review-workbench-heading",
                  title: p(s)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                }, c(p(s)("library", "Review next conflict")), 9, $p)
              ]),
              it.value.item ? (C(), T("article", jp, [
                l("header", null, [
                  l("strong", null, c(it.value.item.title), 1),
                  l("span", Vp, c(it.value.item.cachedPath), 1)
                ]),
                l("div", qp, [
                  (C(!0), T(te, null, ve(it.value.fields, (f) => (C(), T("article", {
                    key: f.field,
                    class: "library-metadata-review-field"
                  }, [
                    l("h4", null, c(f.field), 1),
                    l("dl", null, [
                      l("div", null, [
                        l("dt", null, c(p(s)("library", "Current value")), 1),
                        l("dd", null, c(f.currentValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(p(s)("library", "scanner candidate")), 1),
                        l("dd", null, c(f.scannerCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(p(s)("library", "path-template candidate")), 1),
                        l("dd", null, c(f.pathTemplateCandidate || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(p(s)("library", "sidecar value")), 1),
                        l("dd", null, c(f.sidecarValue || "—"), 1)
                      ]),
                      l("div", null, [
                        l("dt", null, c(p(s)("library", "source provenance")), 1),
                        l("dd", null, c(f.sourceProvenance || "—"), 1)
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
                        value: f.field
                      }, null, 8, Wp),
                      g[33] || (g[33] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("button", Kp, c(p(s)("library", "accept scanner candidate")), 1)
                    ], 8, Bp)
                  ]))), 128))
                ]),
                l("footer", Gp, [
                  l("a", {
                    class: "button secondary",
                    href: it.value.item.detailsUrl
                  }, c(p(s)("library", "Open full details")), 9, Yp),
                  l("a", {
                    class: "button secondary",
                    href: it.value.skipUrl
                  }, c(p(s)("library", "Skip to next conflict")), 9, Xp)
                ])
              ])) : (C(), T("p", Jp, c(p(s)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
              l("a", {
                class: "button secondary",
                href: it.value.reviewNextUrl
              }, c(p(s)("library", "Review next conflict")), 9, Zp)
            ])) : Y("", !0)
          ]),
          l("details", {
            class: "library-workspace-panel library-workspace-panel--admin",
            "data-workspace-panel": "admin",
            onToggle: nn
          }, [
            l("summary", Qp, [
              g[34] || (g[34] = l("span", {
                class: "library-workspace-panel-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", {
                class: "library-workspace-panel-title",
                title: p(s)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
              }, c(p(s)("library", "Admin tools")), 9, eh),
              l("small", th, c(p(s)("library", "Roots, scans, exports and repair operations")), 1),
              l("b", rh, c(p(s)("library", "all enabled roots")), 1)
            ]),
            l("div", nh, [
              l("a", {
                href: V.value,
                class: "button secondary",
                "aria-label": "Open Library settings"
              }, c(p(s)("library", "Settings")), 9, ah),
              Le.value ? (C(), T("a", {
                key: 0,
                href: Le.value,
                class: "button secondary",
                "aria-label": "Export corrected metadata"
              }, c(p(s)("library", "Export corrected metadata")), 9, ih)) : Y("", !0),
              Ne.value ? (C(), T("a", {
                key: 1,
                href: Ne.value,
                class: "button secondary",
                "aria-label": "Export sidecar manifest"
              }, c(p(s)("library", "Sidecar manifest")), 9, sh)) : Y("", !0),
              qe.value ? (C(), T("a", {
                key: 2,
                href: qe.value,
                class: "button secondary",
                "aria-label": "Export sidecar ZIP"
              }, c(p(s)("library", "Sidecar ZIP")), 9, lh)) : Y("", !0)
            ]),
            l("div", oh, [
              l("p", ch, c(p(s)("library", "Import health")), 1),
              l("h3", {
                title: p(s)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
              }, c(p(s)("library", "Metadata overview")), 9, uh),
              _e.loading ? (C(), T("p", dh, c(p(s)("library", "Loading cached metadata overview…")), 1)) : _e.error ? (C(), T("p", fh, c(_e.error), 1)) : _e.loaded ? Y("", !0) : (C(), T("p", ph, c(p(s)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
              _e.loaded ? (C(), T(te, { key: 3 }, [
                Oe.value.message ? (C(), T("p", hh, c(Oe.value.message), 1)) : Oe.value.cacheStatus === "missing" ? (C(), T("p", mh, c(p(s)("library", "No cached metadata overview exists yet")), 1)) : Y("", !0),
                ze.value ? (C(), T("p", bh, c(p(s)("library", "Last generated")) + ": " + c(ze.value), 1)) : Y("", !0),
                l("button", {
                  type: "button",
                  class: "button secondary library-import-health-refresh",
                  disabled: _e.refreshing,
                  onClick: Sa
                }, c(_e.refreshing ? p(s)("library", "Refreshing metadata overview…") : p(s)("library", "Refresh metadata overview")), 9, yh),
                l("div", gh, [
                  l("a", {
                    class: "button secondary",
                    href: at.value.reviewUrl || "?status=metadata_error"
                  }, c(p(s)("library", "Review metadata errors")), 9, _h),
                  l("a", {
                    class: "button secondary",
                    href: Me.value
                  }, c(p(s)("library", "Full review")), 9, vh),
                  l("a", {
                    class: "button secondary",
                    href: ge.value
                  }, c(p(s)("library", "Export TSV")), 9, wh),
                  l("a", {
                    class: "button secondary",
                    href: pe.value
                  }, c(p(s)("library", "Probe covers")), 9, Sh)
                ]),
                l("div", Eh, [
                  l("article", null, [
                    l("h4", null, c(p(s)("library", "Metadata errors")), 1),
                    l("p", Ch, c(at.value.total || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(p(s)("library", "Archive/container check")), 1),
                    l("p", Th, c(me.value.mismatches || 0), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(p(s)("library", "Cover health")), 1),
                    l("p", xh, c(nr.value.note), 1)
                  ]),
                  l("article", null, [
                    l("h4", null, c(p(s)("library", "Cover support matrix")), 1),
                    l("p", Ah, c(p(s)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                  ]),
                  at.value.examples?.length ? (C(), T("details", kh, [
                    l("summary", null, c(p(s)("library", "Example files and suggested actions")), 1),
                    l("ul", null, [
                      (C(!0), T(te, null, ve(at.value.examples, (f) => (C(), T("li", {
                        key: `${f.fileId}-${f.path}`
                      }, [
                        l("code", null, c(f.path), 1),
                        l("span", null, c(f.scanStatus) + " · " + c(f.scanError) + " · " + c(f.actualContainerType), 1),
                        l("strong", null, c(f.suggestedRepairAction), 1)
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
            wt.value ? (C(), T("p", Oh, c(m.value), 1)) : Y("", !0),
            l("h2", Nh, c(Dt.value), 1)
          ])
        ]),
        L.value ? (C(), T("p", Ph, c(L.value), 1)) : Y("", !0),
        U.value ? (C(), T("p", Ih, c(U.value), 1)) : Y("", !0),
        wt.value ? (C(), T("section", Lh, [
          l("p", Dh, c(m.value), 1),
          l("h3", {
            id: "library-discovery-heading",
            title: vt.value ? p(s)("library", "Items by this creator, sorted by publication context when available.") : _t.value ? p(s)("library", "Items from this publication year, sorted by publication date when available.") : p(s)("library", "Items in this publication, sorted by issue/date context when available.")
          }, c(pt.value), 9, Mh),
          l("div", Uh, [
            l("span", null, c(z.value.total) + " " + c(p(s)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (C(), T("span", Fh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            E.value?.datedCount ? (C(), T("span", Hh, c(E.value.datedCount) + " " + c(p(s)("library", "dated")), 1)) : Y("", !0),
            E.value?.undatedCount > 0 ? (C(), T("span", $h, c(E.value.undatedCount) + " " + c(p(s)("library", "undated")), 1)) : Y("", !0)
          ]),
          $e.value && E.value ? (C(), T("aside", jh, [
            l("strong", null, c(p(s)("library", "Publication contents")), 1),
            l("span", null, c(E.value.itemCount) + " " + c(p(s)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (C(), T("span", Vh, c(E.value.earliestYear) + "–" + c(E.value.latestYear), 1)) : Y("", !0),
            l("span", null, c(E.value.datedCount) + " " + c(p(s)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (C(), T("span", qh, c(E.value.undatedCount) + " " + c(p(s)("library", "without dates yet")), 1)) : Y("", !0),
            l("span", null, c(p(s)("library", "read-only grouping")), 1)
          ])) : Y("", !0),
          $e.value && E.value?.issueGroups?.length ? (C(), T("section", Bh, [
            l("div", null, [
              l("p", zh, c(p(s)("library", "Issue order")), 1),
              l("h4", {
                id: "library-publication-issue-groups-heading",
                title: p(s)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
              }, c(p(s)("library", "Read-only issue/date grouping")), 9, Wh)
            ]),
            l("div", Kh, [
              (C(!0), T(te, null, ve(E.value.issueGroups, (f) => (C(), T("a", {
                key: `strip-${f.label}`,
                class: "library-issue-strip-card",
                href: f.items?.[0]?.detailsUrl || "#"
              }, [
                l("span", null, c(f.label), 1),
                l("strong", null, c(f.items?.[0]?.issueLabel || p(s)("library", "Issue")), 1),
                l("small", null, c(f.items?.length || 0) + " " + c(p(s)("library", "items")), 1)
              ], 8, Gh))), 128))
            ]),
            E.value.gapRanges?.length ? (C(), T("p", Yh, c(p(s)("library", "Gap")) + ": " + c(E.value.gapRanges.join(", ")), 1)) : Y("", !0),
            (C(!0), T(te, null, ve(E.value.issueGroups, (f) => (C(), T("div", {
              key: f.label,
              class: "library-publication-issue-group"
            }, [
              l("h5", null, c(f.label), 1),
              l("ol", null, [
                (C(!0), T(te, null, ve(f.items, (Q, Ce) => (C(), T("li", {
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
                    Ce > 0 ? (C(), T(te, { key: 0 }, [
                      be(c(p(s)("library", "Previous issue")), 1)
                    ], 64)) : Y("", !0),
                    Ce > 0 && Ce < f.items.length - 1 ? (C(), T(te, { key: 1 }, [
                      be(" · ")
                    ], 64)) : Y("", !0),
                    Ce < f.items.length - 1 ? (C(), T(te, { key: 2 }, [
                      be(c(p(s)("library", "Next issue")), 1)
                    ], 64)) : Y("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            E.value.unknownIssueItems?.length ? (C(), T("details", Qh, [
              l("summary", {
                title: p(s)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
              }, c(p(s)("library", "Unknown issue/date")) + " · " + c(E.value.unknownIssueItems.length), 9, em)
            ])) : Y("", !0)
          ])) : Y("", !0),
          l("p", null, [
            l("a", tm, c(p(s)("library", "Back to full catalogue")), 1)
          ])
        ])) : Y("", !0),
        l("nav", rm, [
          l("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: Ft({ active: G.value === "compact" }),
            "aria-pressed": G.value === "compact" ? "true" : "false",
            onClick: g[17] || (g[17] = (f) => xr("compact"))
          }, c(p(s)("library", "Compact")), 11, nm),
          l("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Ft({ active: G.value === "gallery" }),
            "aria-pressed": G.value === "gallery" ? "true" : "false",
            onClick: g[18] || (g[18] = (f) => xr("gallery"))
          }, c(p(s)("library", "Gallery")), 11, am),
          l("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Ft({ active: G.value === "shelf" }),
            "aria-pressed": G.value === "shelf" ? "true" : "false",
            onClick: g[19] || (g[19] = (f) => xr("shelf"))
          }, c(p(s)("library", "Shelf")), 11, im)
        ]),
        l("div", sm, [
          l("p", lm, [
            be(c(p(s)("library", "Showing")) + " " + c(z.value.from) + "–" + c(z.value.to) + " " + c(p(s)("library", "of")) + " " + c(z.value.total) + " " + c(p(s)("library", "catalogue items")), 1),
            N.value.length > 0 ? (C(), T("span", om, [
              g[35] || (g[35] = be(" · ", -1)),
              l("a", cm, c(p(s)("library", "Clear all filters")), 1)
            ])) : Y("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": p(s)("library", "Catalogue pagination")
          }, [
            l("span", dm, [
              be(c(p(s)("library", "Page")) + " " + c(z.value.page), 1),
              z.value.total > 0 ? (C(), T("span", fm, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
            ]),
            z.value.previousUrl ? (C(), T("a", {
              key: 0,
              href: z.value.previousUrl
            }, c(p(s)("library", "Previous")), 9, pm)) : (C(), T("span", hm, c(p(s)("library", "Previous")), 1)),
            z.value.nextUrl ? (C(), T("a", {
              key: 2,
              href: z.value.nextUrl
            }, c(p(s)("library", "Next")), 9, mm)) : (C(), T("span", bm, c(p(s)("library", "Next")), 1))
          ], 8, um)
        ]),
        N.value.length > 0 ? (C(), T("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": p(s)("library", "Active filters")
        }, [
          l("span", null, c(p(s)("library", "Active filters")), 1),
          (C(!0), T(te, null, ve(N.value, (f) => (C(), T("a", {
            key: f.key,
            href: Nn(f.key),
            class: "library-filter-chip",
            "aria-label": `${p(s)("library", "Remove filter")}: ${f.label}`
          }, [
            l("strong", null, c(f.label) + ":", 1),
            be(" " + c(f.value) + " ", 1),
            g[36] || (g[36] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, gm))), 128))
        ], 8, ym)) : Y("", !0),
        o.value.length === 0 ? (C(), T("div", {
          key: 4,
          class: Ft(["library-empty-content", { "library-first-run-guidance": R.value || x.value, "library-filter-empty-state": k.value && !R.value && !x.value }]),
          role: "status"
        }, [
          R.value ? (C(), T(te, { key: 0 }, [
            l("h3", {
              title: p(s)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
            }, c(p(s)("library", "Start with one Library root")), 9, _m),
            l("p", vm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(p(s)("library", "Add a Library root")), 9, wm),
              l("span", Sm, c(p(s)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : x.value ? (C(), T(te, { key: 1 }, [
            l("h3", {
              title: p(s)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
            }, c(p(s)("library", "No enabled Library roots")), 9, Em),
            l("p", Cm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(p(s)("library", "Open Library settings")), 9, Tm)
            ])
          ], 64)) : k.value ? (C(), T(te, { key: 2 }, [
            l("h3", {
              title: p(s)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
            }, c(p(s)("library", "No matches for the current filters")), 9, xm),
            l("p", Am, [
              l("a", {
                href: Tr(),
                class: "button secondary"
              }, c(p(s)("library", "Clear search")), 9, km),
              l("a", Rm, c(p(s)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), T(te, { key: 3 }, [
            l("h3", {
              title: p(s)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
            }, c(p(s)("library", "No catalogue items yet")), 9, Om),
            l("p", Nm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, c(p(s)("library", "Run a scan from settings")), 9, Pm)
            ])
          ], 64))
        ], 2)) : (C(), T("div", {
          key: 5,
          class: Ft(["library-cover-gallery", ae.value])
        }, [
          (C(!0), T(te, null, ve(o.value, (f) => (C(), T("article", {
            key: f.id,
            class: Ft(["library-cover-card", { "library-cover-card--open": ee[f.id], "library-cover-card--cover-loaded": Tt(f) === "loaded", "library-cover-card--cover-error": Tt(f) === "error" }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              l("span", Lm, [
                Tt(f) === "loading" ? (C(), T("span", Dm)) : Y("", !0),
                l("img", {
                  class: Ft(["library-cover-image", { "library-cover-image--loaded": Tt(f) === "loaded" }]),
                  src: f.coverUrl,
                  alt: `Cover for ${f.title}`,
                  loading: "lazy",
                  onLoad: (Q) => xa(f),
                  onError: (Q) => qr(f)
                }, null, 42, Mm),
                Tt(f) === "error" ? (C(), T("span", Um, c(p(s)("library", "Cover unavailable")), 1)) : Y("", !0)
              ])
            ], 8, Im),
            l("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: Yn((Q) => _r(f, Q), ["prevent"])
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
                value: f.starred ? "0" : "1"
              }, null, 8, $m),
              l("button", {
                type: "submit",
                class: Ft(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? p(s)("library", "Unstar this publication") : p(s)("library", "Star this publication"),
                "aria-label": f.starred ? p(s)("library", "Unstar this publication") : p(s)("library", "Star this publication"),
                "aria-busy": Yt[f.id] ? "true" : void 0,
                disabled: Yt[f.id],
                onClick: Yn((Q) => _r(f, Q), ["prevent"])
              }, c(f.starred ? "★" : "☆"), 11, jm),
              Pt[f.id] ? (C(), T("span", {
                key: 0,
                "data-library-star-error": f.id,
                class: "library-star-feedback",
                role: "alert"
              }, c(Pt[f.id]), 9, Vm)) : Y("", !0)
            ], 40, Fm),
            l("div", qm, [
              l("div", Bm, [
                l("h3", null, [
                  f.starred ? (C(), T("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": p(s)("library", "Starred")
                  }, "★", 8, zm)) : Y("", !0),
                  be(c(f.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, c(p(s)("library", "Read")), 9, Wm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (Q) => Hn(f.id, Q)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${p(s)("library", "Show details and actions")}: ${f.title}`
                }, c(p(s)("library", "Details")), 9, Gm),
                l("div", Ym, [
                  f.creators ? (C(), T("p", Xm, c(f.creators), 1)) : Y("", !0),
                  l("dl", Jm, [
                    l("div", Zm, [
                      l("dt", null, c(p(s)("library", "Type")), 1),
                      l("dd", null, c(f.publicationType), 1)
                    ]),
                    f.publication ? (C(), T("div", Qm, [
                      l("dt", null, c(p(s)("library", "Series")), 1),
                      l("dd", null, c(f.publication), 1)
                    ])) : Y("", !0),
                    f.publicationDate ? (C(), T("div", eb, [
                      l("dt", null, c(p(s)("library", "Date")), 1),
                      l("dd", null, c(f.publicationDate), 1)
                    ])) : Y("", !0),
                    f.workflowStatus ? (C(), T("div", tb, [
                      l("dt", null, c(p(s)("library", "Status")), 1),
                      l("dd", null, c(f.workflowStatus), 1)
                    ])) : Y("", !0),
                    f.hasScannerConflict ? (C(), T("div", rb, [
                      l("dt", null, c(p(s)("library", "Review")), 1),
                      l("dd", null, c(f.scannerConflictCount) + " fields", 1)
                    ])) : Y("", !0),
                    f.lastOpenedAt ? (C(), T("div", nb, [
                      l("dt", null, c(p(s)("library", "Last opened")), 1),
                      l("dd", null, c(f.lastOpenedAt), 1)
                    ])) : Y("", !0),
                    f.extension ? (C(), T("div", ab, [
                      l("dt", null, c(p(s)("library", "Format")) + ":", 1),
                      l("dd", null, c(Mn(f.extension)), 1)
                    ])) : Y("", !0),
                    f.shelf ? (C(), T("div", ib, [
                      l("dt", null, c(p(s)("library", "Shelf")), 1),
                      l("dd", null, c(f.shelf), 1)
                    ])) : Y("", !0)
                  ]),
                  f.description ? (C(), T("p", sb, c(f.description), 1)) : Y("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (C(), T("p", lb, [
                    be(" scanStatus: " + c(f.scanStatus || "unknown"), 1),
                    f.scanError ? (C(), T("span", ob, " · scanError: " + c(f.scanError), 1)) : Y("", !0)
                  ])) : Y("", !0),
                  l("div", cb, [
                    Un(f).length === 0 ? (C(), T("span", ub, "No Nextcloud tags")) : (C(!0), T(te, { key: 1 }, ve(Un(f), (Q) => (C(), T("span", {
                      key: Q.id,
                      class: "library-tag"
                    }, c(Q.name), 1))), 128))
                  ]),
                  l("p", db, [
                    l("a", {
                      href: f.filesUrl
                    }, c(p(s)("library", "Show in Files")), 9, fb),
                    g[38] || (g[38] = be(" · ", -1)),
                    l("a", {
                      href: f.downloadUrl
                    }, c(p(s)("library", "Download source")), 9, pb),
                    g[39] || (g[39] = be(" · ", -1)),
                    l("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (Q) => Bt(f)
                    }, c(p(s)("library", "Details drawer")), 9, hb),
                    g[40] || (g[40] = be(" · ", -1)),
                    l("a", {
                      href: f.detailsUrl
                    }, c(p(s)("library", "Details")), 9, mb)
                  ])
                ])
              ], 40, Km)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (C(), T("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": p(s)("library", "Catalogue pagination")
        }, [
          l("span", yb, [
            be(c(p(s)("library", "Page")) + " " + c(z.value.page), 1),
            z.value.total > 0 ? (C(), T("span", gb, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : Y("", !0)
          ]),
          z.value.previousUrl ? (C(), T("a", {
            key: 0,
            href: z.value.previousUrl
          }, c(p(s)("library", "Previous")), 9, _b)) : (C(), T("span", vb, c(p(s)("library", "Previous")), 1)),
          z.value.nextUrl ? (C(), T("a", {
            key: 2,
            href: z.value.nextUrl
          }, c(p(s)("library", "Next")), 9, wb)) : (C(), T("span", Sb, c(p(s)("library", "Next")), 1))
        ], 8, bb)) : Y("", !0),
        re.value ? (C(), T("div", {
          key: 7,
          class: "library-detail-drawer-backdrop",
          onClick: zt,
          "aria-hidden": "true"
        })) : Y("", !0),
        re.value ? (C(), T("aside", Eb, [
          l("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: zt
          }, "×"),
          l("p", Cb, c(p(s)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
          l("img", {
            class: "library-detail-drawer-cover",
            src: re.value.coverUrl,
            alt: `Cover for ${re.value.title}`,
            loading: "lazy"
          }, null, 8, Tb),
          l("p", xb, c(re.value.publicationType || p(s)("library", "Publication")), 1),
          l("h3", Ab, c(re.value.title), 1),
          re.value.creators ? (C(), T("p", kb, c(re.value.creators), 1)) : Y("", !0),
          re.value.description ? (C(), T("p", Rb, c(re.value.description), 1)) : Y("", !0),
          l("dl", Ob, [
            re.value.publication ? (C(), T("div", Nb, [
              l("dt", null, c(p(s)("library", "Series")), 1),
              l("dd", null, c(re.value.publication), 1)
            ])) : Y("", !0),
            re.value.publicationDate ? (C(), T("div", Pb, [
              l("dt", null, c(p(s)("library", "Date")), 1),
              l("dd", null, c(re.value.publicationDate), 1)
            ])) : Y("", !0),
            re.value.shelf ? (C(), T("div", Ib, [
              l("dt", null, c(p(s)("library", "Shelf")), 1),
              l("dd", null, c(re.value.shelf), 1)
            ])) : Y("", !0)
          ]),
          l("p", Lb, [
            l("a", {
              class: "button primary",
              href: re.value.openUrl
            }, c(p(s)("library", "Read")), 9, Db),
            l("a", {
              class: "button secondary",
              href: re.value.detailsUrl
            }, c(p(s)("library", "View full details")), 9, Mb)
          ]),
          l("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": p(s)("library", "Browse neighbouring items")
          }, [
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ye.value,
              onClick: g[20] || (g[20] = (f) => Mt(Ye.value))
            }, c(p(s)("library", "Previous issue")), 9, Fb),
            l("button", {
              type: "button",
              class: "button secondary",
              disabled: !St.value,
              onClick: g[21] || (g[21] = (f) => Mt(St.value))
            }, c(p(s)("library", "Next issue")), 9, Hb)
          ], 8, Ub)
        ])) : Y("", !0)
      ])
    ]));
  }
}, Es = fu("library", "catalogue", {}), ea = document.querySelector("#library-vue-root"), Cs = {
  ...Es,
  requestToken: ea?.dataset.requestToken || Es.requestToken || ""
};
function J(e) {
  return String(e ?? "");
}
function Fl(e) {
  return J(e).toUpperCase();
}
function jb(e, t, r, n = J) {
  for (const a of t) {
    const i = document.createElement("option");
    i.value = J(a), i.textContent = n(a), J(a) === J(r) && (i.selected = !0), e.appendChild(i);
  }
}
function Ts(e, t, r, n, a = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = J(n), o.placeholder = a, i.appendChild(o), e.appendChild(i);
}
function Kr(e, t, r, n, a, i, o = J) {
  const u = document.createElement("label");
  u.textContent = t;
  const h = document.createElement("select");
  h.name = r;
  const S = document.createElement("option");
  S.value = "", S.textContent = a, h.appendChild(S), jb(h, i, n, o), u.appendChild(h), e.appendChild(u);
}
function Gr(e) {
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
function Xa(e) {
  return J(e.discoveryPage) === "year";
}
function zb(e, t = {}) {
  return J(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(J(e))}`);
}
function Ja(e) {
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
function fn(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function Gb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Yb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", s("library", "Catalogue search and filters")), Ts(n, s("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Kr(n, s("library", "Type"), "type", r.type, s("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Ts(n, s("library", "Nextcloud tag"), "tag", r.tag, "photography"), Kr(n, s("library", "Format"), "format", r.format, s("library", "All formats"), e.formats || [], Fl), Kr(n, s("library", "Shelf"), "shelf", r.shelf, s("library", "All shelves"), e.shelves || []), Kr(n, s("library", "Scan status"), "status", r.status, s("library", "All scan statuses"), e.scanStatuses || []), Kr(n, s("library", "Sort"), "sort", r.sort || "title", s("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Kr(n, s("library", "Page size"), "limit", t.limit || 100, s("library", "Page size"), [25, 50, 100, 250, 500]);
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
  if (V.className = "library-filter-panel-summary", V.textContent = s("library", "Show catalogue filters"), M.append(V, Yb(e, n)), I.appendChild(M), qb(e) || Xa(e) || Ja(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = Ja(e) ? s("library", "Creator") : Xa(e) ? s("library", "Publication year") : s("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = J(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const ee = document.createElement("p");
    ee.className = "library-muted", ee.textContent = `${n.total ?? r.length} ${Ja(e) ? s("library", "items by this creator. Sorted by publication context when available.") : Xa(e) ? s("library", "items from this publication year. Sorted by publication date when available.") : s("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const oe = document.createElement("a");
    oe.href = "/apps/library/", oe.className = "button secondary", oe.textContent = s("library", "Back to full catalogue"), N.append(P, H, ee, oe), I.appendChild(N);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Le = document.createElement("a");
  Le.href = "?", Le.textContent = ` ${s("library", "Clear all filters")}`, ce.appendChild(Le), I.appendChild(ce);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const qe = document.createElement("summary");
  qe.textContent = `${s("library", "Batch actions for current results")} (${n.total ?? r.length} ${s("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const De = Gr(e);
  De && Ee.appendChild(De);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), Ee.appendChild(H);
  }
  const nt = document.createElement("label");
  nt.textContent = s("library", "Apply Nextcloud tag to current results");
  const ft = document.createElement("input");
  ft.type = "text", ft.name = "nextcloudTagName", ft.placeholder = "batch-review", nt.appendChild(ft);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = s("library", "Apply Nextcloud tag to current results");
  const Nt = document.createElement("p");
  Nt.className = "library-muted", Nt.textContent = s("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(nt, Ge, Nt);
  const He = document.createElement("form");
  He.method = "post", He.action = u, He.className = "library-batch-tag-remove-form";
  const Me = Gr(e);
  Me && He.appendChild(Me);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), He.appendChild(H);
  }
  const ge = document.createElement("label");
  ge.textContent = s("library", "Nextcloud tag");
  const pe = document.createElement("input");
  pe.type = "text", pe.name = "nextcloudTagName", pe.setAttribute("list", "library-nextcloud-tag-suggestions"), pe.placeholder = s("library", "e.g. Review"), pe.autocomplete = "off", ge.appendChild(pe);
  const Be = document.createElement("button");
  Be.type = "submit", Be.className = "button secondary", Be.textContent = s("library", "Remove tag from current results");
  const _e = document.createElement("p");
  _e.className = "library-muted", _e.textContent = s("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), He.append(ge, Be, _e);
  const Oe = document.createElement("form");
  Oe.method = "post", Oe.action = h, Oe.className = "library-batch-metadata-reset-form";
  const ze = Gr(e);
  ze && Oe.appendChild(ze);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), Oe.appendChild(H);
  }
  const at = document.createElement("input");
  at.type = "hidden", at.name = "scannerConflicts", at.value = "1";
  const me = document.createElement("button");
  me.type = "submit", me.className = "button secondary", me.textContent = s("library", "Reset filtered metadata");
  const nr = document.createElement("p");
  nr.className = "library-muted", nr.textContent = s("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Oe.append(at, me, nr);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = S, $e.className = "library-batch-metadata-edit-preview-form", $e.target = "_blank";
  const _t = Gr(e);
  _t && $e.appendChild(_t);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), $e.appendChild(H);
  }
  const vt = document.createElement("label");
  vt.textContent = s("library", "Metadata field");
  const wt = document.createElement("select");
  wt.name = "bulkEditField";
  for (const [N, P] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = N, H.textContent = s("library", P), wt.appendChild(H);
  }
  vt.appendChild(wt);
  const pt = document.createElement("label");
  pt.textContent = s("library", "Preview value");
  const Dt = document.createElement("input");
  Dt.type = "text", Dt.name = "bulkEditValue", Dt.placeholder = "magazine, de, photography...", Dt.autocomplete = "off", pt.appendChild(Dt);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = s("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = s("library", "Preview first, then apply from the review page."), $e.append(vt, pt, m, b);
  const w = document.createElement("form");
  w.method = "post", w.action = y, w.className = "library-batch-cover-refresh-form";
  const R = Gr(e);
  R && w.appendChild(R);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (J(P).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = N, H.value = J(P), w.appendChild(H);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = s("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = s("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), w.append(x, k), Ne.append(qe, Ee, He, Oe, $e, w), I.appendChild(Ne);
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
      const fe = document.createElement("li"), Ue = document.createElement("a");
      Ue.href = Bb(he, e), Ue.textContent = J(he), fe.appendChild(Ue), oe.appendChild(fe);
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
      const fe = document.createElement("li"), Ue = document.createElement("a");
      Ue.href = zb(he, e), Ue.textContent = J(he), fe.appendChild(Ue), oe.appendChild(fe);
    }
    N.append(P, H, ee, oe), I.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), ee = Wb(e);
    N.className = "library-empty-content", (P === 0 || H === 0) && N.classList.add("library-first-run-guidance"), ee && P > 0 && H > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const oe = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", P === 0 ? (oe.textContent = s("library", "Start with one Library root"), he.textContent = s("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), fn(fe, a, "button primary", s("library", "Add a Library root")), Gb(fe, s("library", "Run a scan after saving a root"))) : H === 0 ? (oe.textContent = s("library", "No enabled Library roots"), he.textContent = s("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), fn(fe, a, "button primary", s("library", "Open Library settings"))) : ee ? (oe.textContent = s("library", "No matches for the current filters"), he.textContent = s("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), fn(fe, Kb(), "button secondary", s("library", "Clear search")), fn(fe, "?", "button primary", s("library", "Clear all filters"))) : (oe.textContent = s("library", "No catalogue items yet"), he.textContent = s("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), fn(fe, a, "button primary", s("library", "Run a scan from settings"))), N.append(oe, he, fe), I.appendChild(N);
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
      const he = Gr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = J(P.starUrl || ""), fe.className = "library-cover-star-form", he && fe.appendChild(he);
      const Ue = document.createElement("input");
      Ue.type = "hidden", Ue.name = "returnTo", Ue.value = "catalogue";
      const re = document.createElement("input");
      re.type = "hidden", re.name = "starred", re.value = P.starred ? "0" : "1";
      const xe = document.createElement("button");
      xe.type = "submit", xe.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", xe.setAttribute("aria-pressed", P.starred ? "true" : "false"), xe.setAttribute("aria-label", P.starred ? s("library", "Unstar this publication") : s("library", "Star this publication")), xe.title = P.starred ? s("library", "Unstar this publication") : s("library", "Star this publication"), xe.textContent = P.starred ? "★" : "☆", fe.append(Ue, re, xe);
      const Ye = document.createElement("div");
      Ye.className = "library-cover-summary";
      const St = document.createElement("h3");
      if (St.textContent = J(P.title || "Untitled publication"), Ye.appendChild(St), P.creators) {
        const We = document.createElement("p");
        We.className = "library-creator", We.textContent = J(P.creators), Ye.appendChild(We);
      }
      const ar = document.createElement("dl");
      ar.className = "library-cover-detail-list";
      const it = [
        ["Type", J(P.publicationType || "other")],
        ["Format", P.extension ? Fl(P.extension) : ""],
        ["Shelf", P.shelf ? J(P.shelf) : ""]
      ].filter(([, We]) => We !== "");
      for (const [We, ir] of it) {
        const Xe = document.createElement("div");
        Xe.className = "library-cover-detail-chip";
        const st = document.createElement("dt");
        st.textContent = We;
        const Ze = document.createElement("dd");
        Ze.textContent = ir, Xe.append(st, Ze), ar.appendChild(Xe);
      }
      Ye.appendChild(ar);
      const Et = document.createElement("p"), Ct = document.createElement("a");
      Ct.href = J(P.openUrl || "#"), Ct.textContent = s("library", "Read");
      const Bt = document.createElement("a");
      Bt.href = J(P.filesUrl || "#"), Bt.textContent = s("library", "Show in Files");
      const zt = document.createElement("a");
      zt.href = J(P.downloadUrl || "#"), zt.textContent = s("library", "Download source");
      const Mt = document.createElement("a");
      Mt.href = J(P.detailsUrl || "#"), Mt.textContent = s("library", "Details"), Et.append(Ct, document.createTextNode(" · "), Bt, document.createTextNode(" · "), zt, document.createTextNode(" · "), Mt), Ye.appendChild(Et), H.append(ee, fe, Ye), N.appendChild(H);
    }
    I.appendChild(N);
  }
  return E.appendChild(I), E;
}
if (ea)
  try {
    cu($b, { state: Cs }).mount(ea);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), ea.replaceChildren(Zb(Cs));
  }
//# sourceMappingURL=library-main.mjs.map
