// @__NO_SIDE_EFFECTS__
function ta(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ae = {}, jr = [], Kt = () => {
}, Es = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ei = (e) => e.startsWith("onUpdate:"), rt = Object.assign, ra = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Se = (e, t) => jl.call(e, t), re = Array.isArray, br = (e) => En(e) === "[object Map]", Nr = (e) => En(e) === "[object Set]", Ta = (e) => En(e) === "[object Date]", de = (e) => typeof e == "function", De = (e) => typeof e == "string", Yt = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", Cs = (e) => (Ce(e) || de(e)) && de(e.then) && de(e.catch), Ts = Object.prototype.toString, En = (e) => Ts.call(e), Vl = (e) => En(e).slice(8, -1), xs = (e) => En(e) === "[object Object]", na = (e) => De(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dn = /* @__PURE__ */ ta(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ti = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, It = ti(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), ql = /\B([A-Z])/g, Pr = ti(
  (e) => e.replace(ql, "-$1").toLowerCase()
), As = ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), vi = ti(
  (e) => e ? `on${As(e)}` : ""
), Gt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, ks = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ri = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xa;
const ni = () => xa || (xa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ia(e) {
  if (re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = De(n) ? Kl(n) : ia(n);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (De(e) || Ce(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Wl = /:([^]+)/, Gl = /\/\*[^]*?\*\//g;
function Kl(e) {
  const t = {};
  return e.replace(Gl, "").split(zl).forEach((r) => {
    if (r) {
      const n = r.split(Wl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function qt(e) {
  let t = "";
  if (De(e))
    t = e;
  else if (re(e))
    for (let r = 0; r < e.length; r++) {
      const n = qt(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ ta(Yl);
function Rs(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = yr(e[n], t[n]);
  return r;
}
function Aa(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let a = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && yr(i, r[o])) {
        a = o;
        break;
      }
    if (a < 0) return !1;
    n[a] = 1;
  }
  return !0;
}
function yr(e, t) {
  if (e === t) return !0;
  let r = Ta(e), n = Ta(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Yt(e), n = Yt(t), r || n)
    return e === t;
  if (r = re(e), n = re(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Ce(e), n = Ce(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = br(e), n = br(t), r || n || (r = Nr(e), n = Nr(t), r || n))
      return r && n ? Aa(e, t) : !1;
    const i = Object.keys(e).length, a = Object.keys(t).length;
    if (i !== a)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), p = t.hasOwnProperty(o);
      if (u && !p || !u && p || !yr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => yr(r, t));
}
const Os = (e) => !!(e && e.__v_isRef === !0), c = (e) => De(e) ? e : e == null ? "" : re(e) || Ce(e) && (e.toString === Ts || !de(e.toString)) ? Os(e) ? c(e.value) : JSON.stringify(e, Ns, 2) : String(e), Ns = (e, t) => Os(t) ? Ns(e, t.value) : br(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], a) => (r[wi(n, a) + " =>"] = i, r),
    {}
  )
} : Nr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => wi(r))
} : Yt(t) ? wi(t) : Ce(t) && !re(t) && !xs(t) ? String(t) : t, wi = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
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
        const i = this.scopes.slice();
        for (t = 0, r = i.length; t < r; t++)
          i[t].resume();
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
        const i = this.scopes.slice();
        for (r = 0, n = i.length; r < n; r++)
          i[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function eo() {
  return Je;
}
let Re;
const Si = /* @__PURE__ */ new WeakSet();
class Ps {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Si.has(this) && (Si.delete(this), this.trigger()));
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
    this.flags |= 2, ka(this), Ls(this);
    const t = Re, r = Mt;
    Re = this, Mt = !0;
    try {
      return this.fn();
    } finally {
      Us(this), Re = t, Mt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        la(t);
      this.deps = this.depsTail = void 0, ka(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Si.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Bi(this) && this.run();
  }
  get dirty() {
    return Bi(this);
  }
}
let Is = 0, fn, pn;
function Ms(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pn, pn = e;
    return;
  }
  e.next = fn, fn = e;
}
function aa() {
  Is++;
}
function sa() {
  if (--Is > 0)
    return;
  if (pn) {
    let t = pn;
    for (pn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; fn; ) {
    let t = fn;
    for (fn = void 0; t; ) {
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
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Us(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), la(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Bi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ds(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ds(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yn) || (e.globalVersion = yn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Bi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = Mt;
  Re = e, Mt = !0;
  try {
    Ls(e);
    const i = e.fn(e._value);
    (t.version === 0 || Gt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Re = r, Mt = n, Us(e), e.flags &= -3;
  }
}
function la(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      la(a, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Mt = !0;
const Fs = [];
function ar() {
  Fs.push(Mt), Mt = !1;
}
function sr() {
  const e = Fs.pop();
  Mt = e === void 0 ? !0 : e;
}
function ka(e) {
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
let yn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class oa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Re || !Mt || Re === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      r = this.activeLink = new ro(Re, this), Re.deps ? (r.prevDep = Re.depsTail, Re.depsTail.nextDep = r, Re.depsTail = r) : Re.deps = Re.depsTail = r, Hs(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Re.depsTail, r.nextDep = void 0, Re.depsTail.nextDep = r, Re.depsTail = r, Re.deps === r && (Re.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, yn++, this.notify(t);
  }
  notify(t) {
    aa();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      sa();
    }
  }
}
function Hs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Hs(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const qi = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ Symbol(
  ""
), zi = /* @__PURE__ */ Symbol(
  ""
), gn = /* @__PURE__ */ Symbol(
  ""
);
function et(e, t, r) {
  if (Mt && Re) {
    let n = qi.get(e);
    n || qi.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new oa()), i.map = n, i.key = r), i.track();
  }
}
function rr(e, t, r, n, i, a) {
  const o = qi.get(e);
  if (!o) {
    yn++;
    return;
  }
  const u = (p) => {
    p && p.trigger();
  };
  if (aa(), t === "clear")
    o.forEach(u);
  else {
    const p = re(e), v = p && na(r);
    if (p && r === "length") {
      const y = Number(n);
      o.forEach((w, I) => {
        (I === "length" || I === gn || !Yt(I) && I >= y) && u(w);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && u(o.get(r)), v && u(o.get(gn)), t) {
        case "add":
          p ? v && u(o.get("length")) : (u(o.get(kr)), br(e) && u(o.get(zi)));
          break;
        case "delete":
          p || (u(o.get(kr)), br(e) && u(o.get(zi)));
          break;
        case "set":
          br(e) && u(o.get(kr));
          break;
      }
  }
  sa();
}
function Ur(e) {
  const t = /* @__PURE__ */ we(e);
  return t === e ? t : (et(t, "iterate", gn), /* @__PURE__ */ kt(e) ? t : t.map(Lt));
}
function ii(e) {
  return et(e = /* @__PURE__ */ we(e), "iterate", gn), e;
}
function zt(e, t) {
  return /* @__PURE__ */ lr(e) ? zr(/* @__PURE__ */ Rr(e) ? Lt(t) : t) : Lt(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ei(this, Symbol.iterator, (e) => zt(this, e));
  },
  concat(...e) {
    return Ur(this).concat(
      ...e.map((t) => re(t) ? Ur(t) : t)
    );
  },
  entries() {
    return Ei(this, "entries", (e) => (e[1] = zt(this, e[1]), e));
  },
  every(e, t) {
    return Qt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => zt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Qt(
      this,
      "find",
      e,
      t,
      (r) => zt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Qt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qt(
      this,
      "findLast",
      e,
      t,
      (r) => zt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Qt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ci(this, "includes", e);
  },
  indexOf(...e) {
    return Ci(this, "indexOf", e);
  },
  join(e) {
    return Ur(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ci(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return tn(this, "pop");
  },
  push(...e) {
    return tn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ra(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ra(this, "reduceRight", e, t);
  },
  shift() {
    return tn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return tn(this, "splice", e);
  },
  toReversed() {
    return Ur(this).toReversed();
  },
  toSorted(e) {
    return Ur(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ur(this).toSpliced(...e);
  },
  unshift(...e) {
    return tn(this, "unshift", e);
  },
  values() {
    return Ei(this, "values", (e) => zt(this, e));
  }
};
function Ei(e, t, r) {
  const n = ii(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ kt(e) && (i._next = i.next, i.next = () => {
    const a = i._next();
    return a.done || (a.value = r(a.value)), a;
  }), i;
}
const io = Array.prototype;
function Qt(e, t, r, n, i, a) {
  const o = ii(e), u = o !== e && !/* @__PURE__ */ kt(e), p = o[t];
  if (p !== io[t]) {
    const w = p.apply(e, a);
    return u ? Lt(w) : w;
  }
  let v = r;
  o !== e && (u ? v = function(w, I) {
    return r.call(this, zt(e, w), I, e);
  } : r.length > 2 && (v = function(w, I) {
    return r.call(this, w, I, e);
  }));
  const y = p.call(o, v, n);
  return u && i ? i(y) : y;
}
function Ra(e, t, r, n) {
  const i = ii(e), a = i !== e && !/* @__PURE__ */ kt(e);
  let o = r, u = !1;
  i !== e && (a ? (u = n.length === 0, o = function(v, y, w) {
    return u && (u = !1, v = zt(e, v)), r.call(this, v, zt(e, y), w, e);
  }) : r.length > 3 && (o = function(v, y, w) {
    return r.call(this, v, y, w, e);
  }));
  const p = i[t](o, ...n);
  return u ? zt(e, p) : p;
}
function Ci(e, t, r) {
  const n = /* @__PURE__ */ we(e);
  et(n, "iterate", gn);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ da(r[0]) ? (r[0] = /* @__PURE__ */ we(r[0]), n[t](...r)) : i;
}
function tn(e, t, r = []) {
  ar(), aa();
  const n = (/* @__PURE__ */ we(e))[t].apply(e, r);
  return sa(), sr(), n;
}
const ao = /* @__PURE__ */ ta("__proto__,__v_isRef,__isVue"), $s = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Yt)
);
function so(e) {
  Yt(e) || (e = String(e));
  const t = /* @__PURE__ */ we(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class js {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return n === (i ? a ? yo : zs : a ? qs : Bs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = re(t);
    if (!i) {
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
    if ((Yt(r) ? $s.has(r) : ao(r)) || (i || et(t, "get", r), a))
      return u;
    if (/* @__PURE__ */ tt(u)) {
      const p = o && na(r) ? u : u.value;
      return i && Ce(p) ? /* @__PURE__ */ Gi(p) : p;
    }
    return Ce(u) ? i ? /* @__PURE__ */ Gi(u) : /* @__PURE__ */ mr(u) : u;
  }
}
class Vs extends js {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let a = t[r];
    const o = re(t) && na(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ lr(a);
      if (!/* @__PURE__ */ kt(n) && !/* @__PURE__ */ lr(n) && (a = /* @__PURE__ */ we(a), n = /* @__PURE__ */ we(n)), !o && /* @__PURE__ */ tt(a) && !/* @__PURE__ */ tt(n))
        return v || (a.value = n), !0;
    }
    const u = o ? Number(r) < t.length : Se(t, r), p = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ tt(t) ? t : i
    );
    return t === /* @__PURE__ */ we(i) && p && (u ? Gt(n, a) && rr(t, "set", r, n) : rr(t, "add", r, n)), p;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && rr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Yt(r) || !$s.has(r)) && et(t, "has", r), n;
  }
  ownKeys(t) {
    return et(
      t,
      "iterate",
      re(t) ? "length" : kr
    ), Reflect.ownKeys(t);
  }
}
class lo extends js {
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
const oo = /* @__PURE__ */ new Vs(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Vs(!0);
const Wi = (e) => e, In = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, a = /* @__PURE__ */ we(i), o = br(a), u = e === "entries" || e === Symbol.iterator && o, p = e === "keys" && o, v = i[e](...n), y = r ? Wi : t ? zr : Lt;
    return !t && et(
      a,
      "iterate",
      p ? zi : kr
    ), rt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: w, done: I } = v.next();
          return I ? { value: w, done: I } : {
            value: u ? [y(w[0]), y(w[1])] : y(w),
            done: I
          };
        }
      }
    );
  };
}
function Mn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(i) {
      const a = this.__v_raw, o = /* @__PURE__ */ we(a), u = /* @__PURE__ */ we(i);
      e || (Gt(i, u) && et(o, "get", i), et(o, "get", u));
      const { has: p } = In(o), v = t ? Wi : e ? zr : Lt;
      if (p.call(o, i))
        return v(a.get(i));
      if (p.call(o, u))
        return v(a.get(u));
      a !== o && a.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && et(/* @__PURE__ */ we(i), "iterate", kr), i.size;
    },
    has(i) {
      const a = this.__v_raw, o = /* @__PURE__ */ we(a), u = /* @__PURE__ */ we(i);
      return e || (Gt(i, u) && et(o, "has", i), et(o, "has", u)), i === u ? a.has(i) : a.has(i) || a.has(u);
    },
    forEach(i, a) {
      const o = this, u = o.__v_raw, p = /* @__PURE__ */ we(u), v = t ? Wi : e ? zr : Lt;
      return !e && et(p, "iterate", kr), u.forEach((y, w) => i.call(a, v(y), v(w), o));
    }
  };
  return rt(
    r,
    e ? {
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear")
    } : {
      add(i) {
        const a = /* @__PURE__ */ we(this), o = In(a), u = /* @__PURE__ */ we(i), p = !t && !/* @__PURE__ */ kt(i) && !/* @__PURE__ */ lr(i) ? u : i;
        return o.has.call(a, p) || Gt(i, p) && o.has.call(a, i) || Gt(u, p) && o.has.call(a, u) || (a.add(p), rr(a, "add", p, p)), this;
      },
      set(i, a) {
        !t && !/* @__PURE__ */ kt(a) && !/* @__PURE__ */ lr(a) && (a = /* @__PURE__ */ we(a));
        const o = /* @__PURE__ */ we(this), { has: u, get: p } = In(o);
        let v = u.call(o, i);
        v || (i = /* @__PURE__ */ we(i), v = u.call(o, i));
        const y = p.call(o, i);
        return o.set(i, a), v ? Gt(a, y) && rr(o, "set", i, a) : rr(o, "add", i, a), this;
      },
      delete(i) {
        const a = /* @__PURE__ */ we(this), { has: o, get: u } = In(a);
        let p = o.call(a, i);
        p || (i = /* @__PURE__ */ we(i), p = o.call(a, i)), u && u.call(a, i);
        const v = a.delete(i);
        return p && rr(a, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ we(this), a = i.size !== 0, o = i.clear();
        return a && rr(
          i,
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
  ].forEach((i) => {
    r[i] = fo(i, e, t);
  }), r;
}
function ca(e, t) {
  const r = po(e, t);
  return (n, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Se(r, i) && i in n ? r : n,
    i,
    a
  );
}
const ho = {
  get: /* @__PURE__ */ ca(!1, !1)
}, mo = {
  get: /* @__PURE__ */ ca(!1, !0)
}, bo = {
  get: /* @__PURE__ */ ca(!0, !1)
};
const Bs = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
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
function mr(e) {
  return /* @__PURE__ */ lr(e) ? e : ua(
    e,
    !1,
    oo,
    ho,
    Bs
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return ua(
    e,
    !1,
    uo,
    mo,
    qs
  );
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  return ua(
    e,
    !0,
    co,
    bo,
    zs
  );
}
function ua(e, t, r, n, i) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const o = go(Vl(e));
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  return /* @__PURE__ */ lr(e) ? /* @__PURE__ */ Rr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ we(t) : e;
}
function vo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && ks(e, "__v_skip", !0), e;
}
const Lt = (e) => Ce(e) ? /* @__PURE__ */ mr(e) : e, zr = (e) => Ce(e) ? /* @__PURE__ */ Gi(e) : e;
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Oa(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ tt(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new oa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ we(t), this._value = r ? t : Lt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ kt(t) || /* @__PURE__ */ lr(t);
    t = n ? t : /* @__PURE__ */ we(t), Gt(t, r) && (this._rawValue = t, this._value = n ? t : Lt(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ tt(e) ? e.value : e;
}
const Eo = {
  get: (e, t, r) => t === "__v_raw" ? e : h(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ tt(i) && !/* @__PURE__ */ tt(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ws(e) {
  return /* @__PURE__ */ Rr(e) ? e : new Proxy(e, Eo);
}
class Co {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new oa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = yn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Ms(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ds(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function To(e, t, r = !1) {
  let n, i;
  return de(e) ? n = e : (n = e.get, i = e.set), new Co(n, i, r);
}
const Ln = {}, qn = /* @__PURE__ */ new WeakMap();
let Cr;
function xo(e, t = !1, r = Cr) {
  if (r) {
    let n = qn.get(r);
    n || qn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = Ae) {
  const { immediate: n, deep: i, once: a, scheduler: o, augmentJob: u, call: p } = r, v = (V) => i ? V : /* @__PURE__ */ kt(V) || i === !1 || i === 0 ? nr(V, 1) : nr(V);
  let y, w, I, j, ae = !1, W = !1;
  if (/* @__PURE__ */ tt(e) ? (w = () => e.value, ae = /* @__PURE__ */ kt(e)) : /* @__PURE__ */ Rr(e) ? (w = () => v(e), ae = !0) : re(e) ? (W = !0, ae = e.some((V) => /* @__PURE__ */ Rr(V) || /* @__PURE__ */ kt(V)), w = () => e.map((V) => {
    if (/* @__PURE__ */ tt(V))
      return V.value;
    if (/* @__PURE__ */ Rr(V))
      return v(V);
    if (de(V))
      return p ? p(V, 2) : V();
  })) : de(e) ? t ? w = p ? () => p(e, 2) : e : w = () => {
    if (I) {
      ar();
      try {
        I();
      } finally {
        sr();
      }
    }
    const V = Cr;
    Cr = y;
    try {
      return p ? p(e, 3, [j]) : e(j);
    } finally {
      Cr = V;
    }
  } : w = Kt, t && i) {
    const V = w, ce = i === !0 ? 1 / 0 : i;
    w = () => nr(V(), ce);
  }
  const ue = eo(), se = () => {
    y.stop(), ue && ue.active && ra(ue.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...ce) => {
      const Me = V(...ce);
      return se(), Me;
    };
  }
  let z = W ? new Array(e.length).fill(Ln) : Ln;
  const M = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || i || ae || (W ? ce.some((Me, Ne) => Gt(Me, z[Ne])) : Gt(ce, z))) {
          I && I();
          const Me = Cr;
          Cr = y;
          try {
            const Ne = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === Ln ? void 0 : W && z[0] === Ln ? [] : z,
              j
            ];
            z = ce, p ? p(t, 3, Ne) : (
              // @ts-expect-error
              t(...Ne)
            );
          } finally {
            Cr = Me;
          }
        }
      } else
        y.run();
  };
  return u && u(M), y = new Ps(w), y.scheduler = o ? () => o(M, !1) : M, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = qn.get(y);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const ce of V) ce();
      qn.delete(y);
    }
  }, t ? n ? M(!0) : z = y.run() : o ? o(M.bind(null, !0), !0) : y.run(), se.pause = y.pause.bind(y), se.resume = y.resume.bind(y), se.stop = se, se;
}
function nr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ tt(e))
    nr(e.value, t, r);
  else if (re(e))
    for (let n = 0; n < e.length; n++)
      nr(e[n], t, r);
  else if (Nr(e) || br(e))
    e.forEach((n) => {
      nr(n, t, r);
    });
  else if (xs(e)) {
    for (const n in e)
      nr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && nr(e[n], t, r);
  }
  return e;
}
function Cn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    ai(i, t, r);
  }
}
function Ut(e, t, r, n) {
  if (de(e)) {
    const i = Cn(e, t, r, n);
    return i && Cs(i) && i.catch((a) => {
      ai(a, t, r);
    }), i;
  }
  if (re(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(Ut(e[a], t, r, n));
    return i;
  }
}
function ai(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ae;
  if (t) {
    let u = t.parent;
    const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let w = 0; w < y.length; w++)
          if (y[w](e, p, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      ar(), Cn(a, null, 10, [
        e,
        p,
        v
      ]), sr();
      return;
    }
  }
  ko(e, r, i, n, o);
}
function ko(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ct = [];
let Bt = -1;
const Vr = [];
let hr = null, Hr = 0;
const Gs = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Ks(e) {
  const t = zn || Gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = Bt + 1, r = ct.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = ct[n], a = _n(i);
    a < e || a === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function fa(e) {
  if (!(e.flags & 1)) {
    const t = _n(e), r = ct[ct.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _n(r) ? ct.push(e) : ct.splice(Ro(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  zn || (zn = Gs.then(Js));
}
function Oo(e) {
  if (!re(e))
    hr && e.id === -1 ? hr.splice(Hr + 1, 0, e) : e.flags & 1 || (Vr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Vr.push(e[t]);
  Ys();
}
function Na(e, t, r = Bt + 1) {
  for (; r < ct.length; r++) {
    const n = ct[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ct.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Xs(e) {
  if (Vr.length) {
    const t = [...new Set(Vr)].sort(
      (r, n) => _n(r) - _n(n)
    );
    if (Vr.length = 0, hr) {
      for (let r = 0; r < t.length; r++)
        hr.push(t[r]);
      return;
    }
    for (hr = t, Hr = 0; Hr < hr.length; Hr++) {
      const r = hr[Hr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    hr = null, Hr = 0;
  }
}
const _n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Js(e) {
  try {
    for (Bt = 0; Bt < ct.length; Bt++) {
      const t = ct[Bt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Cn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Bt < ct.length; Bt++) {
      const t = ct[Bt];
      t && (t.flags &= -2);
    }
    Bt = -1, ct.length = 0, Xs(), zn = null, (ct.length || Vr.length) && Js();
  }
}
let At = null, Zs = null;
function Wn(e) {
  const t = At;
  return At = e, Zs = e && e.type.__scopeId || null, t;
}
function No(e, t = At, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Va(-1);
    const a = Wn(t), o = Or.length;
    let u;
    try {
      u = e(...i);
    } finally {
      for (let p = Or.length; p > o; p--) Cl();
      Wn(a), n._d && Va(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ke(e, t) {
  if (At === null)
    return e;
  const r = ui(At), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, o, u, p = Ae] = t[i];
    a && (de(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && nr(o), n.push({
      dir: a,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: p
    }));
  }
  return e;
}
function wr(e, t, r, n) {
  const i = e.dirs, a = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const u = i[o];
    a && (u.oldValue = a[o].value);
    let p = u.dir[n];
    p && (ar(), Ut(p, r, 8, [
      e.el,
      u,
      e,
      t
    ]), sr());
  }
}
function Po(e, t) {
  if (ut) {
    let r = ut.provides;
    const n = ut.parent && ut.parent.provides;
    n === r && (r = ut.provides = Object.create(n)), r[e] = t;
  }
}
function jn(e, t, r = !1) {
  const n = kc();
  if (n || Br) {
    let i = Br ? Br._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && de(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Mo = () => jn(Io);
function Ti(e, t, r) {
  return Qs(e, t, r);
}
function Qs(e, t, r = Ae) {
  const { immediate: n, deep: i, flush: a, once: o } = r, u = rt({}, r), p = t && n || !t && a !== "post";
  let v;
  if (Sn) {
    if (a === "sync") {
      const j = Mo();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!p) {
      const j = () => {
      };
      return j.stop = Kt, j.resume = Kt, j.pause = Kt, j;
    }
  }
  const y = ut;
  u.call = (j, ae, W) => Ut(j, y, ae, W);
  let w = !1;
  a === "post" ? u.scheduler = (j) => {
    mt(j, y && y.suspense);
  } : a !== "sync" && (w = !0, u.scheduler = (j, ae) => {
    ae ? j() : fa(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), w && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, u);
  return Sn && (v ? v.push(I) : p && I()), I;
}
function Lo(e, t, r) {
  const n = this.proxy, i = De(e) ? e.includes(".") ? el(n, e) : () => n[e] : e.bind(n, n);
  let a;
  de(t) ? a = t : (a = t.handler, r = t);
  const o = Tn(this), u = Qs(i, a.bind(n), r);
  return o(), u;
}
function el(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Uo = /* @__PURE__ */ Symbol("_vte"), si = (e) => e.__isTeleport, xi = /* @__PURE__ */ Symbol("_leaveCb");
function Do(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== or) {
        t = r;
        break;
      }
  }
  return t;
}
function tl(e) {
  if (!ha(e))
    return si(e.type) && e.children ? Do(e.children) : e;
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
function pa(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    pa(
      si(r.type) && tl(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pa(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Gn = /* @__PURE__ */ new WeakMap();
function hn(e, t, r, n, i = !1) {
  if (re(e)) {
    e.forEach(
      (W, ue) => hn(
        W,
        t && (re(t) ? t[ue] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (mn(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && hn(e, t, r, n.component.subTree);
    return;
  }
  const a = n.shapeFlag & 4 ? ui(n.component) : n.el, o = i ? null : a, { i: u, r: p } = e, v = t && t.r, y = u.refs === Ae ? u.refs = {} : u.refs, w = u.setupState, I = /* @__PURE__ */ we(w), j = w === Ae ? Es : (W) => Pa(y, W) ? !1 : Se(I, W), ae = (W, ue) => !(ue && Pa(y, ue));
  if (v != null && v !== p) {
    if (Ia(t), De(v))
      y[v] = null, j(v) && (w[v] = null);
    else if (/* @__PURE__ */ tt(v)) {
      const W = t;
      ae(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (de(p))
    Cn(p, u, 12, [o, y]);
  else {
    const W = De(p), ue = /* @__PURE__ */ tt(p);
    if (W || ue) {
      const se = () => {
        if (e.f) {
          const z = W ? j(p) ? w[p] : y[p] : ae() || !e.k ? p.value : y[e.k];
          if (i)
            re(z) && ra(z, a);
          else if (re(z))
            z.includes(a) || z.push(a);
          else if (W)
            y[p] = [a], j(p) && (w[p] = y[p]);
          else {
            const M = [a];
            ae(p, e.k) && (p.value = M), e.k && (y[e.k] = M);
          }
        } else W ? (y[p] = o, j(p) && (w[p] = o)) : ue && (ae(p, e.k) && (p.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const z = () => {
          se(), Gn.delete(e);
        };
        z.id = -1, Gn.set(e, z), mt(z, r);
      } else
        Ia(e), se();
    }
  }
}
function Ia(e) {
  const t = Gn.get(e);
  t && (t.flags |= 8, Gn.delete(e));
}
ni().requestIdleCallback;
ni().cancelIdleCallback;
const mn = (e) => !!e.type.__asyncLoader, ha = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  nl(e, "a", t);
}
function Ho(e, t) {
  nl(e, "da", t);
}
function nl(e, t, r = ut) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (li(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      ha(i.parent.vnode) && $o(n, t, r, i), i = i.parent;
  }
}
function $o(e, t, r, n) {
  const i = li(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  sl(() => {
    ra(n[t], i);
  }, r);
}
function li(e, t, r = ut, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...o) => {
      ar();
      const u = Tn(r), p = Ut(t, r, e, o);
      return u(), sr(), p;
    });
    return n ? i.unshift(a) : i.push(a), a;
  }
}
const cr = (e) => (t, r = ut) => {
  (!Sn || e === "sp") && li(e, (...n) => t(...n), r);
}, jo = cr("bm"), il = cr("m"), Vo = cr(
  "bu"
), Bo = cr("u"), al = cr(
  "bum"
), sl = cr("um"), qo = cr(
  "sp"
), zo = cr("rtg"), Wo = cr("rtc");
function Go(e, t = ut) {
  li("ec", e, t);
}
const Ko = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, r, n) {
  let i;
  const a = r, o = re(e);
  if (o || De(e)) {
    const u = o && /* @__PURE__ */ Rr(e);
    let p = !1, v = !1;
    u && (p = !/* @__PURE__ */ kt(e), v = /* @__PURE__ */ lr(e), e = ii(e)), i = new Array(e.length);
    for (let y = 0, w = e.length; y < w; y++)
      i[y] = t(
        p ? v ? zr(Lt(e[y])) : Lt(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let u = 0; u < e; u++)
      i[u] = t(u + 1, u, void 0, a);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (u, p) => t(u, p, void 0, a)
      );
    else {
      const u = Object.keys(e);
      i = new Array(u.length);
      for (let p = 0, v = u.length; p < v; p++) {
        const y = u[p];
        i[p] = t(e[y], y, p, a);
      }
    }
  else
    i = [];
  return i;
}
const Ki = (e) => e ? kl(e) ? ui(e) : Ki(e.parent) : null, bn = (
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
    $parent: (e) => Ki(e.parent),
    $root: (e) => Ki(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => Lo.bind(e)
  })
), Ai = (e, t) => e !== Ae && !e.__isScriptSetup && Se(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: a, accessCache: o, type: u, appContext: p } = e;
    if (t[0] !== "$") {
      const I = o[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (Ai(n, t))
          return o[t] = 1, n[t];
        if (i !== Ae && Se(i, t))
          return o[t] = 2, i[t];
        if (Se(a, t))
          return o[t] = 3, a[t];
        if (r !== Ae && Se(r, t))
          return o[t] = 4, r[t];
        Yi && (o[t] = 0);
      }
    }
    const v = bn[t];
    let y, w;
    if (v)
      return t === "$attrs" && et(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ae && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      w = p.config.globalProperties, Se(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: a } = e;
    return Ai(i, t) ? (i[t] = r, !0) : n !== Ae && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: a, type: o }
  }, u) {
    let p;
    return !!(r[u] || e !== Ae && u[0] !== "$" && Se(e, u) || Ai(t, u) || Se(a, u) || Se(n, u) || Se(bn, u) || Se(i.config.globalProperties, u) || (p = o.__cssModules) && p[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ma(e) {
  return re(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Yi = !0;
function Xo(e) {
  const t = ol(e), r = e.proxy, n = e.ctx;
  Yi = !1, t.beforeCreate && La(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: o,
    watch: u,
    provide: p,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: w,
    mounted: I,
    beforeUpdate: j,
    updated: ae,
    activated: W,
    deactivated: ue,
    beforeDestroy: se,
    beforeUnmount: z,
    destroyed: M,
    unmounted: V,
    render: ce,
    renderTracked: Me,
    renderTriggered: Ne,
    errorCaptured: Ve,
    serverPrefetch: Ee,
    // public API
    expose: Le,
    inheritAttrs: nt,
    // assets
    components: dt,
    directives: Xe,
    filters: Et
  } = t;
  if (v && Jo(v, n, null), o)
    for (const _e in o) {
      const fe = o[_e];
      de(fe) && (n[_e] = fe.bind(r));
    }
  if (i) {
    const _e = i.call(r, r);
    Ce(_e) && (e.data = /* @__PURE__ */ mr(_e));
  }
  if (Yi = !0, a)
    for (const _e in a) {
      const fe = a[_e], Be = de(fe) ? fe.bind(r, r) : de(fe.get) ? fe.get.bind(r, r) : Kt, ve = !de(fe) && de(fe.set) ? fe.set.bind(r) : Kt, Te = q({
        get: Be,
        set: ve
      });
      Object.defineProperty(n, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (qe) => Te.value = qe
      });
    }
  if (u)
    for (const _e in u)
      ll(u[_e], n, r, _e);
  if (p) {
    const _e = de(p) ? p.call(r) : p;
    Reflect.ownKeys(_e).forEach((fe) => {
      Po(fe, _e[fe]);
    });
  }
  y && La(y, e, "c");
  function Ue(_e, fe) {
    re(fe) ? fe.forEach((Be) => _e(Be.bind(r))) : fe && _e(fe.bind(r));
  }
  if (Ue(jo, w), Ue(il, I), Ue(Vo, j), Ue(Bo, ae), Ue(Fo, W), Ue(Ho, ue), Ue(Go, Ve), Ue(Wo, Me), Ue(zo, Ne), Ue(al, z), Ue(sl, V), Ue(qo, Ee), re(Le))
    if (Le.length) {
      const _e = e.exposed || (e.exposed = {});
      Le.forEach((fe) => {
        Object.defineProperty(_e, fe, {
          get: () => r[fe],
          set: (Be) => r[fe] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Kt && (e.render = ce), nt != null && (e.inheritAttrs = nt), dt && (e.components = dt), Xe && (e.directives = Xe), Ee && rl(e);
}
function Jo(e, t, r = Kt) {
  re(e) && (e = Xi(e));
  for (const n in e) {
    const i = e[n];
    let a;
    Ce(i) ? "default" in i ? a = jn(
      i.from || n,
      i.default,
      !0
    ) : a = jn(i.from || n) : a = jn(i), /* @__PURE__ */ tt(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : t[n] = a;
  }
}
function La(e, t, r) {
  Ut(
    re(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ll(e, t, r, n) {
  let i = n.includes(".") ? el(r, n) : () => r[n];
  if (De(e)) {
    const a = t[e];
    de(a) && Ti(i, a);
  } else if (de(e))
    Ti(i, e.bind(r));
  else if (Ce(e))
    if (re(e))
      e.forEach((a) => ll(a, t, r, n));
    else {
      const a = de(e.handler) ? e.handler.bind(r) : t[e.handler];
      de(a) && Ti(i, a, e);
    }
}
function ol(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = a.get(t);
  let p;
  return u ? p = u : !i.length && !r && !n ? p = t : (p = {}, i.length && i.forEach(
    (v) => Kn(p, v, o, !0)
  ), Kn(p, t, o)), Ce(t) && a.set(t, p), p;
}
function Kn(e, t, r, n = !1) {
  const { mixins: i, extends: a } = t;
  a && Kn(e, a, r, !0), i && i.forEach(
    (o) => Kn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Zo[o] || r && r[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Zo = {
  data: Ua,
  props: Da,
  emits: Da,
  // objects
  methods: on,
  computed: on,
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
  components: on,
  directives: on,
  // watch
  watch: ec,
  // provide / inject
  provide: Ua,
  inject: Qo
};
function Ua(e, t) {
  return t ? e ? function() {
    return rt(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return on(Xi(e), Xi(t));
}
function Xi(e) {
  if (re(e)) {
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
function on(e, t) {
  return e ? rt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Da(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : rt(
    /* @__PURE__ */ Object.create(null),
    Ma(e),
    Ma(t ?? {})
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
function cl() {
  return {
    app: null,
    config: {
      isNativeTag: Es,
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
  return function(n, i = null) {
    de(n) || (n = rt({}, n)), i != null && !Ce(i) && (i = null);
    const a = cl(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let p = !1;
    const v = a.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Mc,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...w) {
        return o.has(y) || (y && de(y.install) ? (o.add(y), y.install(v, ...w)) : de(y) && (o.add(y), y(v, ...w))), v;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), v;
      },
      component(y, w) {
        return w ? (a.components[y] = w, v) : a.components[y];
      },
      directive(y, w) {
        return w ? (a.directives[y] = w, v) : a.directives[y];
      },
      mount(y, w, I) {
        if (!p) {
          const j = v._ceVNode || ir(n, i);
          return j.appContext = a, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), p = !0, v._container = y, y.__vue_app__ = v, ui(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        p && (Ut(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, w) {
        return a.provides[y] = w, v;
      },
      runWithContext(y) {
        const w = Br;
        Br = v;
        try {
          return y();
        } finally {
          Br = w;
        }
      }
    };
    return v;
  };
}
let Br = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${It(t)}Modifiers`] || e[`${Pr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ae;
  let i = r;
  const a = t.startsWith("update:"), o = a && nc(n, t.slice(7));
  o && (o.trim && (i = r.map((y) => De(y) ? y.trim() : y)), o.number && (i = i.map(ri)));
  let u, p = n[u = vi(t)] || // also try camelCase event handler (#2249)
  n[u = vi(It(t))];
  !p && a && (p = n[u = vi(Pr(t))]), p && Ut(
    p,
    e,
    6,
    i
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ut(
      v,
      e,
      6,
      i
    );
  }
}
const ac = /* @__PURE__ */ new WeakMap();
function ul(e, t, r = !1) {
  const n = r ? ac : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let o = {}, u = !1;
  if (!de(e)) {
    const p = (v) => {
      const y = ul(v, t, !0);
      y && (u = !0, rt(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !a && !u ? (Ce(e) && n.set(e, null), null) : (re(a) ? a.forEach((p) => o[p] = null) : rt(o, a), Ce(e) && n.set(e, o), o);
}
function oi(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Pr(t)) || Se(e, t));
}
function Fa(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [a],
    slots: o,
    attrs: u,
    emit: p,
    render: v,
    renderCache: y,
    props: w,
    data: I,
    setupState: j,
    ctx: ae,
    inheritAttrs: W
  } = e, ue = Wn(e);
  let se, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ce = V;
      se = Wt(
        v.call(
          ce,
          V,
          y,
          w,
          j,
          I,
          ae
        )
      ), z = u;
    } else {
      const V = t;
      se = Wt(
        V.length > 1 ? V(
          w,
          { attrs: u, slots: o, emit: p }
        ) : V(
          w,
          null
        )
      ), z = t.props ? u : sc(u);
    }
  } catch (V) {
    Or.length = 0, ai(V, e, 1), se = ir(or);
  }
  let M = se;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = M;
    V.length && ce & 7 && (a && V.some(ei) && (z = lc(
      z,
      a
    )), M = Wr(M, z, !1, !0));
  }
  if (r.dirs && (M = Wr(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = si(M.type) && tl(M) || M;
    pa(V, r.transition);
  }
  return se = M, Wn(ue), se;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Qn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!ei(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: i, component: a } = e, { props: o, children: u, patchFlag: p } = t, v = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return n ? Ha(n, o, v) : !!o;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let w = 0; w < y.length; w++) {
        const I = y[w];
        if (dl(o, n, I) && !oi(v, I))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? Ha(n, o, v) : !0 : !!o;
  return !1;
}
function Ha(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    if (dl(t, e, a) && !oi(r, a))
      return !0;
  }
  return !1;
}
function dl(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ce(n) && Ce(i) ? !yr(n, i) : n !== i;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const fl = {}, pl = () => Object.create(fl), hl = (e) => Object.getPrototypeOf(e) === fl;
function uc(e, t, r, n = !1) {
  const i = {}, a = pl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ml(e, t, i, a);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ _o(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function dc(e, t, r, n) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ we(i), [p] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const y = e.vnode.dynamicProps;
      for (let w = 0; w < y.length; w++) {
        let I = y[w];
        if (oi(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (p)
          if (Se(a, I))
            j !== a[I] && (a[I] = j, v = !0);
          else {
            const ae = It(I);
            i[ae] = Ji(
              p,
              u,
              ae,
              j,
              e,
              !1
            );
          }
        else
          j !== a[I] && (a[I] = j, v = !0);
      }
    }
  } else {
    ml(e, t, i, a) && (v = !0);
    let y;
    for (const w in u)
      (!t || // for camelCase
      !Se(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Pr(w)) === w || !Se(t, y))) && (p ? r && // for camelCase
      (r[w] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[w] = Ji(
        p,
        u,
        w,
        void 0,
        e,
        !0
      )) : delete i[w]);
    if (a !== u)
      for (const w in a)
        (!t || !Se(t, w)) && (delete a[w], v = !0);
  }
  v && rr(e.attrs, "set", "");
}
function ml(e, t, r, n) {
  const [i, a] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let p in t) {
      if (dn(p))
        continue;
      const v = t[p];
      let y;
      i && Se(i, y = It(p)) ? !a || !a.includes(y) ? r[y] = v : (u || (u = {}))[y] = v : oi(e.emitsOptions, p) || (!(p in n) || v !== n[p]) && (n[p] = v, o = !0);
    }
  if (a) {
    const p = /* @__PURE__ */ we(r), v = u || Ae;
    for (let y = 0; y < a.length; y++) {
      const w = a[y];
      r[w] = Ji(
        i,
        p,
        w,
        v[w],
        e,
        !Se(v, w)
      );
    }
  }
  return o;
}
function Ji(e, t, r, n, i, a) {
  const o = e[r];
  if (o != null) {
    const u = Se(o, "default");
    if (u && n === void 0) {
      const p = o.default;
      if (o.type !== Function && !o.skipFactory && de(p)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = Tn(i);
          n = v[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        n = p;
      i.ce && i.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (a && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Pr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function bl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const a = e.props, o = {}, u = [];
  let p = !1;
  if (!de(e)) {
    const y = (w) => {
      p = !0;
      const [I, j] = bl(w, t, !0);
      rt(o, I), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !p)
    return Ce(e) && n.set(e, jr), jr;
  if (re(a))
    for (let y = 0; y < a.length; y++) {
      const w = It(a[y]);
      $a(w) && (o[w] = Ae);
    }
  else if (a)
    for (const y in a) {
      const w = It(y);
      if ($a(w)) {
        const I = a[y], j = o[w] = re(I) || de(I) ? { type: I } : rt({}, I), ae = j.type;
        let W = !1, ue = !0;
        if (re(ae))
          for (let se = 0; se < ae.length; ++se) {
            const z = ae[se], M = de(z) && z.name;
            if (M === "Boolean") {
              W = !0;
              break;
            } else M === "String" && (ue = !1);
          }
        else
          W = de(ae) && ae.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = ue, (W || Se(j, "default")) && u.push(w);
      }
    }
  const v = [o, u];
  return Ce(e) && n.set(e, v), v;
}
function $a(e) {
  return e[0] !== "$" && !dn(e);
}
const ma = (e) => e === "_" || e === "_ctx" || e === "$stable", ba = (e) => re(e) ? e.map(Wt) : [Wt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...i) => ba(t(...i)), r);
  return n._c = !1, n;
}, yl = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (ma(i)) continue;
    const a = e[i];
    if (de(a))
      t[i] = pc(i, a, n);
    else if (a != null) {
      const o = ba(a);
      t[i] = () => o;
    }
  }
}, gl = (e, t) => {
  const r = ba(t);
  e.slots.default = () => r;
}, _l = (e, t, r) => {
  for (const n in t)
    (r || !ma(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = pl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (_l(n, t, r), r && ks(n, "_", i, !0)) : yl(t, n);
  } else t && gl(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let a = !0, o = Ae;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? a = !1 : _l(i, t, r) : (a = !t.$stable, yl(t, i)), o = t;
  } else t && (gl(e, t), o = { default: 1 });
  if (a)
    for (const u in i)
      !ma(u) && o[u] == null && delete i[u];
}, mt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = ni();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: a,
    createElement: o,
    createText: u,
    createComment: p,
    setText: v,
    setElementText: y,
    parentNode: w,
    nextSibling: I,
    setScopeId: j = Kt,
    insertStaticContent: ae
  } = e, W = (m, b, _, O = null, T = null, k = null, L = void 0, D = null, U = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !rn(m, b) && (O = ft(m), qe(m, T, k, !0), m = null), b.patchFlag === -2 && (U = !1, b.dynamicChildren = null);
    const { type: A, ref: K, shapeFlag: H } = b;
    switch (A) {
      case ci:
        ue(m, b, _, O);
        break;
      case or:
        se(m, b, _, O);
        break;
      case Ri:
        m == null && z(b, _, O, L);
        break;
      case ee:
        dt(
          m,
          b,
          _,
          O,
          T,
          k,
          L,
          D,
          U
        );
        break;
      default:
        H & 1 ? ce(
          m,
          b,
          _,
          O,
          T,
          k,
          L,
          D,
          U
        ) : H & 6 ? Xe(
          m,
          b,
          _,
          O,
          T,
          k,
          L,
          D,
          U
        ) : (H & 64 || H & 128) && A.process(
          m,
          b,
          _,
          O,
          T,
          k,
          L,
          D,
          U,
          it
        );
    }
    K != null && T ? hn(K, m && m.ref, k, b || m, !b) : K == null && m && m.ref != null && hn(m.ref, null, k, m, !0);
  }, ue = (m, b, _, O) => {
    if (m == null)
      n(
        b.el = u(b.children),
        _,
        O
      );
    else {
      const T = b.el = m.el;
      b.children !== m.children && v(T, b.children);
    }
  }, se = (m, b, _, O) => {
    m == null ? n(
      b.el = p(b.children || ""),
      _,
      O
    ) : b.el = m.el;
  }, z = (m, b, _, O) => {
    [m.el, m.anchor] = ae(
      m.children,
      b,
      _,
      O,
      m.el,
      m.anchor
    );
  }, M = ({ el: m, anchor: b }, _, O) => {
    let T;
    for (; m && m !== b; )
      T = I(m), n(m, _, O), m = T;
    n(b, _, O);
  }, V = ({ el: m, anchor: b }) => {
    let _;
    for (; m && m !== b; )
      _ = I(m), i(m), m = _;
    i(b);
  }, ce = (m, b, _, O, T, k, L, D, U) => {
    if (b.type === "svg" ? L = "svg" : b.type === "math" && (L = "mathml"), m == null)
      Me(
        b,
        _,
        O,
        T,
        k,
        L,
        D,
        U
      );
    else {
      const A = m.el && m.el._isVueCE ? m.el : null;
      try {
        A && A._beginPatch(), Ee(
          m,
          b,
          T,
          k,
          L,
          D,
          U
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, Me = (m, b, _, O, T, k, L, D) => {
    let U, A;
    const { props: K, shapeFlag: H, transition: G, dirs: Z } = m;
    if (U = m.el = o(
      m.type,
      k,
      K && K.is,
      K
    ), H & 8 ? y(U, m.children) : H & 16 && Ve(
      m.children,
      U,
      null,
      O,
      T,
      ki(m, k),
      L,
      D
    ), Z && wr(m, null, O, "created"), Ne(U, m, m.scopeId, L, O), K) {
      for (const P in K)
        P !== "value" && !dn(P) && a(U, P, null, K[P], k, O);
      "value" in K && a(U, "value", null, K.value, k), (A = K.onVnodeBeforeMount) && Vt(A, O, m);
    }
    Z && wr(m, null, O, "beforeMount");
    const Q = gc(T, G);
    Q && G.beforeEnter(U), n(U, b, _), ((A = K && K.onVnodeMounted) || Q || Z) && mt(() => {
      A && Vt(A, O, m), Q && G.enter(U), Z && wr(m, null, O, "mounted");
    }, T);
  }, Ne = (m, b, _, O, T) => {
    if (_ && j(m, _), O)
      for (let k = 0; k < O.length; k++)
        j(m, O[k]);
    if (T) {
      let k = T.subTree;
      if (b === k || El(k.type) && (k.ssContent === b || k.ssFallback === b)) {
        const L = T.vnode;
        Ne(
          m,
          L,
          L.scopeId,
          L.slotScopeIds,
          T.parent
        );
      }
    }
  }, Ve = (m, b, _, O, T, k, L, D, U = 0) => {
    for (let A = U; A < m.length; A++) {
      const K = m[A] = D ? tr(m[A]) : Wt(m[A]);
      W(
        null,
        K,
        b,
        _,
        O,
        T,
        k,
        L,
        D
      );
    }
  }, Ee = (m, b, _, O, T, k, L) => {
    const D = b.el = m.el;
    let { patchFlag: U, dynamicChildren: A, dirs: K } = b;
    U |= m.patchFlag & 16;
    const H = m.props || Ae, G = b.props || Ae;
    let Z;
    if (_ && Sr(_, !1), (Z = G.onVnodeBeforeUpdate) && Vt(Z, _, b, m), K && wr(b, m, _, "beforeUpdate"), _ && Sr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (U = 0, L = !1, A = null), (H.innerHTML && G.innerHTML == null || H.textContent && G.textContent == null) && y(D, ""), A ? Le(
      m.dynamicChildren,
      A,
      D,
      _,
      O,
      ki(b, T),
      k
    ) : L || fe(
      m,
      b,
      D,
      null,
      _,
      O,
      ki(b, T),
      k,
      !1
    ), U > 0) {
      if (U & 16)
        nt(D, H, G, _, T);
      else if (U & 2 && H.class !== G.class && a(D, "class", null, G.class, T), U & 4 && a(D, "style", H.style, G.style, T), U & 8) {
        const Q = b.dynamicProps;
        for (let P = 0; P < Q.length; P++) {
          const N = Q[P], $ = H[N], te = G[N];
          (te !== $ || N === "value") && a(D, N, $, te, T, _);
        }
      }
      U & 1 && m.children !== b.children && y(D, b.children);
    } else !L && A == null && nt(D, H, G, _, T);
    ((Z = G.onVnodeUpdated) || K) && mt(() => {
      Z && Vt(Z, _, b, m), K && wr(b, m, _, "updated");
    }, O);
  }, Le = (m, b, _, O, T, k, L) => {
    for (let D = 0; D < b.length; D++) {
      const U = m[D], A = b[D], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rn(U, A) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 198) ? w(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        U,
        A,
        K,
        null,
        O,
        T,
        k,
        L,
        !0
      );
    }
  }, nt = (m, b, _, O, T) => {
    if (b !== _) {
      if (b !== Ae)
        for (const k in b)
          !dn(k) && !(k in _) && a(
            m,
            k,
            b[k],
            null,
            T,
            O
          );
      for (const k in _) {
        if (dn(k)) continue;
        const L = _[k], D = b[k];
        L !== D && k !== "value" && a(m, k, D, L, T, O);
      }
      "value" in _ && a(m, "value", b.value, _.value, T);
    }
  }, dt = (m, b, _, O, T, k, L, D, U) => {
    const A = b.el = m ? m.el : u(""), K = b.anchor = m ? m.anchor : u("");
    let { patchFlag: H, dynamicChildren: G, slotScopeIds: Z } = b;
    Z && (D = D ? D.concat(Z) : Z), m == null ? (n(A, _, O), n(K, _, O), Ve(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      K,
      T,
      k,
      L,
      D,
      U
    )) : H > 0 && H & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === G.length ? (Le(
      m.dynamicChildren,
      G,
      _,
      T,
      k,
      L,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || T && b === T.subTree) && vl(
      m,
      b,
      !0
      /* shallow */
    )) : fe(
      m,
      b,
      _,
      K,
      T,
      k,
      L,
      D,
      U
    );
  }, Xe = (m, b, _, O, T, k, L, D, U) => {
    b.slotScopeIds = D, m == null ? b.shapeFlag & 512 ? T.ctx.activate(
      b,
      _,
      O,
      L,
      U
    ) : Et(
      b,
      _,
      O,
      T,
      k,
      L,
      U
    ) : Fe(m, b, U);
  }, Et = (m, b, _, O, T, k, L) => {
    const D = m.component = Ac(
      m,
      O,
      T
    );
    if (ha(m) && (D.ctx.renderer = it), Rc(D, !1, L), D.asyncDep) {
      if (T && T.registerDep(D, Ue, L), !m.el) {
        const U = D.subTree = ir(or);
        se(null, U, b, _), m.placeholder = U.el;
      }
    } else
      Ue(
        D,
        m,
        b,
        _,
        T,
        k,
        L
      );
  }, Fe = (m, b, _) => {
    const O = b.component = m.component;
    if (oc(m, b, _))
      if (O.asyncDep && !O.asyncResolved) {
        _e(O, b, _);
        return;
      } else
        O.next = b, O.update();
    else
      b.el = m.el, O.vnode = b;
  }, Ue = (m, b, _, O, T, k, L) => {
    const D = () => {
      if (m.isMounted) {
        let { next: H, bu: G, u: Z, parent: Q, vnode: P } = m;
        {
          const be = wl(m);
          if (be) {
            H && (H.el = P.el, _e(m, H, L)), be.asyncDep.then(() => {
              mt(() => {
                m.isUnmounted || A();
              }, T);
            });
            return;
          }
        }
        let N = H, $;
        Sr(m, !1), H ? (H.el = P.el, _e(m, H, L)) : H = P, G && $n(G), ($ = H.props && H.props.onVnodeBeforeUpdate) && Vt($, Q, H, P), Sr(m, !0);
        const te = Fa(m), le = m.subTree;
        m.subTree = te, W(
          le,
          te,
          // parent may have changed if it's in a teleport
          w(le.el),
          // anchor may have changed if it's in a fragment
          ft(le),
          m,
          T,
          k
        ), H.el = te.el, N === null && cc(m, te.el), Z && mt(Z, T), ($ = H.props && H.props.onVnodeUpdated) && mt(
          () => Vt($, Q, H, P),
          T
        );
      } else {
        let H;
        const { el: G, props: Z } = b, { bm: Q, m: P, parent: N, root: $, type: te } = m, le = mn(b);
        Sr(m, !1), Q && $n(Q), !le && (H = Z && Z.onVnodeBeforeMount) && Vt(H, N, b), Sr(m, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            te,
            m.parent ? m.parent.type : void 0
          );
          const be = m.subTree = Fa(m);
          W(
            null,
            be,
            _,
            O,
            m,
            T,
            k
          ), b.el = be.el;
        }
        if (P && mt(P, T), !le && (H = Z && Z.onVnodeMounted)) {
          const be = b;
          mt(
            () => Vt(H, N, be),
            T
          );
        }
        (b.shapeFlag & 256 || N && mn(N.vnode) && N.vnode.shapeFlag & 256) && m.a && mt(m.a, T), m.isMounted = !0, b = _ = O = null;
      }
    };
    m.scope.on();
    const U = m.effect = new Ps(D);
    m.scope.off();
    const A = m.update = U.run.bind(U), K = m.job = U.runIfDirty.bind(U);
    K.i = m, K.id = m.uid, U.scheduler = () => fa(K), Sr(m, !0), A();
  }, _e = (m, b, _) => {
    b.component = m;
    const O = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, O, _), mc(m, b.children, _), ar(), Na(m), sr();
  }, fe = (m, b, _, O, T, k, L, D, U = !1) => {
    const A = m && m.children, K = m ? m.shapeFlag : 0, H = b.children, { patchFlag: G, shapeFlag: Z } = b;
    if (G > 0) {
      if (G & 128) {
        ve(
          A,
          H,
          _,
          O,
          T,
          k,
          L,
          D,
          U
        );
        return;
      } else if (G & 256) {
        Be(
          A,
          H,
          _,
          O,
          T,
          k,
          L,
          D,
          U
        );
        return;
      }
    }
    Z & 8 ? (K & 16 && ze(A, T, k), H !== A && y(_, H)) : K & 16 ? Z & 16 ? ve(
      A,
      H,
      _,
      O,
      T,
      k,
      L,
      D,
      U
    ) : ze(A, T, k, !0) : (K & 8 && y(_, ""), Z & 16 && Ve(
      H,
      _,
      O,
      T,
      k,
      L,
      D,
      U
    ));
  }, Be = (m, b, _, O, T, k, L, D, U) => {
    m = m || jr, b = b || jr;
    const A = m.length, K = b.length, H = Math.min(A, K);
    let G;
    for (G = 0; G < H; G++) {
      const Z = b[G] = U ? tr(b[G]) : Wt(b[G]);
      W(
        m[G],
        Z,
        _,
        null,
        T,
        k,
        L,
        D,
        U
      );
    }
    A > K ? ze(
      m,
      T,
      k,
      !0,
      !1,
      H
    ) : Ve(
      b,
      _,
      O,
      T,
      k,
      L,
      D,
      U,
      H
    );
  }, ve = (m, b, _, O, T, k, L, D, U) => {
    let A = 0;
    const K = b.length;
    let H = m.length - 1, G = K - 1;
    for (; A <= H && A <= G; ) {
      const Z = m[A], Q = b[A] = U ? tr(b[A]) : Wt(b[A]);
      if (rn(Z, Q))
        W(
          Z,
          Q,
          _,
          null,
          T,
          k,
          L,
          D,
          U
        );
      else
        break;
      A++;
    }
    for (; A <= H && A <= G; ) {
      const Z = m[H], Q = b[G] = U ? tr(b[G]) : Wt(b[G]);
      if (rn(Z, Q))
        W(
          Z,
          Q,
          _,
          null,
          T,
          k,
          L,
          D,
          U
        );
      else
        break;
      H--, G--;
    }
    if (A > H) {
      if (A <= G) {
        const Z = G + 1, Q = Z < K ? b[Z].el : O;
        for (; A <= G; )
          W(
            null,
            b[A] = U ? tr(b[A]) : Wt(b[A]),
            _,
            Q,
            T,
            k,
            L,
            D,
            U
          ), A++;
      }
    } else if (A > G)
      for (; A <= H; )
        qe(m[A], T, k, !0), A++;
    else {
      const Z = A, Q = A, P = /* @__PURE__ */ new Map();
      for (A = Q; A <= G; A++) {
        const Oe = b[A] = U ? tr(b[A]) : Wt(b[A]);
        Oe.key != null && P.set(Oe.key, A);
      }
      let N, $ = 0;
      const te = G - Q + 1;
      let le = !1, be = 0;
      const he = new Array(te);
      for (A = 0; A < te; A++) he[A] = 0;
      for (A = Z; A <= H; A++) {
        const Oe = m[A];
        if ($ >= te) {
          qe(Oe, T, k, !0);
          continue;
        }
        let oe;
        if (Oe.key != null)
          oe = P.get(Oe.key);
        else
          for (N = Q; N <= G; N++)
            if (he[N - Q] === 0 && rn(Oe, b[N])) {
              oe = N;
              break;
            }
        oe === void 0 ? qe(Oe, T, k, !0) : (he[oe - Q] = A + 1, oe >= be ? be = oe : le = !0, W(
          Oe,
          b[oe],
          _,
          null,
          T,
          k,
          L,
          D,
          U
        ), $++);
      }
      const xe = le ? _c(he) : jr;
      for (N = xe.length - 1, A = te - 1; A >= 0; A--) {
        const Oe = Q + A, oe = b[Oe], We = b[Oe + 1], Ot = Oe + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          We.el || Sl(We)
        ) : O;
        he[A] === 0 ? W(
          null,
          oe,
          _,
          Ot,
          T,
          k,
          L,
          D,
          U
        ) : le && (N < 0 || A !== xe[N] ? Te(oe, _, Ot, 2) : N--);
      }
    }
  }, Te = (m, b, _, O, T = null) => {
    const { el: k, type: L, transition: D, children: U, shapeFlag: A } = m;
    if (A & 6) {
      Te(m.component.subTree, b, _, O);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, _, O);
      return;
    }
    if (A & 64) {
      L.move(m, b, _, it);
      return;
    }
    if (L === ee) {
      n(k, b, _);
      for (let H = 0; H < U.length; H++)
        Te(U[H], b, _, O);
      n(m.anchor, b, _);
      return;
    }
    if (L === Ri) {
      M(m, b, _);
      return;
    }
    if (O !== 2 && A & 1 && D)
      if (O === 0)
        D.persisted && !k[xi] ? n(k, b, _) : (D.beforeEnter(k), n(k, b, _), mt(() => D.enter(k), T));
      else {
        const { leave: H, delayLeave: G, afterLeave: Z } = D, Q = () => {
          m.ctx.isUnmounted ? i(k) : n(k, b, _);
        }, P = () => {
          const N = k._isLeaving || !!k[xi];
          k._isLeaving && k[xi](
            !0
            /* cancelled */
          ), D.persisted && !N ? Q() : H(k, () => {
            Q(), Z && Z();
          });
        };
        G ? G(k, Q, P) : P();
      }
    else
      n(k, b, _);
  }, qe = (m, b, _, O = !1, T = !1) => {
    const {
      type: k,
      props: L,
      ref: D,
      children: U,
      dynamicChildren: A,
      shapeFlag: K,
      patchFlag: H,
      dirs: G,
      cacheIndex: Z,
      memo: Q
    } = m;
    if (H === -2 && (T = !1), D != null && (ar(), hn(D, null, _, m, !0), sr()), Z != null && (b.renderCache[Z] = void 0), K & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const P = K & 1 && G, N = !mn(m);
    let $;
    if (N && ($ = L && L.onVnodeBeforeUnmount) && Vt($, b, m), K & 6)
      Rt(m.component, _, O);
    else {
      if (K & 128) {
        m.suspense.unmount(_, O);
        return;
      }
      P && wr(m, null, b, "beforeUnmount"), K & 64 ? m.type.remove(
        m,
        b,
        _,
        it,
        O
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== ee || H > 0 && H & 64) ? ze(
        A,
        b,
        _,
        !1,
        !0
      ) : (k === ee && H & 384 || !T && K & 16) && ze(U, b, _), O && Ze(m);
    }
    const te = Q != null && Z == null;
    (N && ($ = L && L.onVnodeUnmounted) || P || te) && mt(() => {
      $ && Vt($, b, m), P && wr(m, null, b, "unmounted"), te && (m.el = null);
    }, _);
  }, Ze = (m) => {
    const { type: b, el: _, anchor: O, transition: T } = m;
    if (b === ee) {
      ye(_, O);
      return;
    }
    if (b === Ri) {
      V(m);
      return;
    }
    const k = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (m.shapeFlag & 1 && T && !T.persisted) {
      const { leave: L, delayLeave: D } = T, U = () => L(_, k);
      D ? D(m.el, k, U) : U();
    } else
      k();
  }, ye = (m, b) => {
    let _;
    for (; m !== b; )
      _ = I(m), i(m), m = _;
    i(b);
  }, Rt = (m, b, _) => {
    const { bum: O, scope: T, job: k, subTree: L, um: D, m: U, a: A } = m;
    ja(U), ja(A), O && $n(O), T.stop(), k && (k.flags |= 8, qe(L, m, b, _)), D && mt(D, b), mt(() => {
      m.isUnmounted = !0;
    }, b);
  }, ze = (m, b, _, O = !1, T = !1, k = 0) => {
    for (let L = k; L < m.length; L++)
      qe(m[L], b, _, O, T);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), _ = b && b[Uo];
    return _ ? I(_) : b;
  };
  let yt = !1;
  const Ct = (m, b, _) => {
    let O;
    m == null ? b._vnode && (qe(b._vnode, null, null, !0), O = b._vnode.component) : W(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = m, yt || (yt = !0, Na(O), Xs(), yt = !1);
  }, it = {
    p: W,
    um: qe,
    m: Te,
    r: Ze,
    mt: Et,
    mc: Ve,
    pc: fe,
    pbc: Le,
    n: ft,
    o: e
  };
  return {
    render: Ct,
    hydrate: void 0,
    createApp: rc(Ct)
  };
}
function ki({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Sr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vl(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (re(n) && re(i))
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      let u = i[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[a] = tr(i[a]), u.el = o.el), !r && u.patchFlag !== -2 && vl(o, u)), u.type === ci && (u.patchFlag === -1 && (u = i[a] = tr(u)), u.el = o.el), u.type === or && !u.el && (u.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, a, o, u;
  const p = e.length;
  for (n = 0; n < p; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (a = 0, o = r.length - 1; a < o; )
        u = a + o >> 1, e[r[u]] < v ? a = u + 1 : o = u;
      v < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, o = r[a - 1]; a-- > 0; )
    r[a] = o, o = t[o];
  return r;
}
function wl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wl(t);
}
function ja(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Sl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Sl(t.subTree) : null;
}
const El = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const ee = /* @__PURE__ */ Symbol.for("v-fgt"), ci = /* @__PURE__ */ Symbol.for("v-txt"), or = /* @__PURE__ */ Symbol.for("v-cmt"), Ri = /* @__PURE__ */ Symbol.for("v-stc"), Or = [];
let St = null;
function S(e = !1) {
  Or.push(St = e ? null : []);
}
function Cl() {
  Or.pop(), St = Or[Or.length - 1] || null;
}
let vn = 1;
function Va(e, t = !1) {
  vn += e, e < 0 && St && t && (St.hasOnce = !0);
}
function Tl(e) {
  return e.dynamicChildren = vn > 0 ? St || jr : null, Cl(), vn > 0 && St && St.push(e), e;
}
function C(e, t, r, n, i, a) {
  return Tl(
    s(
      e,
      t,
      r,
      n,
      i,
      a,
      !0
    )
  );
}
function wc(e, t, r, n, i) {
  return Tl(
    ir(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function xl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Al = ({ key: e }) => e ?? null, Vn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? De(e) || /* @__PURE__ */ tt(e) || de(e) ? { i: At, r: e, k: t, f: !!r } : e : null);
function s(e, t = null, r = null, n = 0, i = null, a = e === ee ? 0 : 1, o = !1, u = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Al(t),
    ref: t && Vn(t),
    scopeId: Zs,
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
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: At
  };
  return u ? (Yn(p, r), a & 128 && e.normalize(p)) : r && (p.shapeFlag |= De(r) ? 8 : 16), vn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  St && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && St.push(p), p;
}
const ir = Sc;
function Sc(e, t = null, r = null, n = 0, i = null, a = !1) {
  if ((!e || e === Ko) && (e = or), xl(e)) {
    const u = Wr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Yn(u, r), vn > 0 && !a && St && (u.shapeFlag & 6 ? St[St.indexOf(e)] = u : St.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: u, style: p } = t;
    u && !De(u) && (t.class = qt(u)), Ce(p) && (/* @__PURE__ */ da(p) && !re(p) && (p = rt({}, p)), t.style = ia(p));
  }
  const o = De(e) ? 1 : El(e) ? 128 : si(e) ? 64 : Ce(e) ? 4 : de(e) ? 2 : 0;
  return s(
    e,
    t,
    r,
    n,
    i,
    o,
    a,
    !0
  );
}
function Ec(e) {
  return e ? /* @__PURE__ */ da(e) || hl(e) ? rt({}, e) : e : null;
}
function Wr(e, t, r = !1, n = !1) {
  const { props: i, ref: a, patchFlag: o, children: u, transition: p } = e, v = t ? Cc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Al(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? re(a) ? a.concat(Vn(t)) : [a, Vn(t)] : Vn(t)
    ) : a,
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
    patchFlag: t && e.type !== ee ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Wr(e.ssContent),
    ssFallback: e.ssFallback && Wr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && n && pa(
    y,
    p.clone(y)
  ), y;
}
function pe(e = " ", t = 0) {
  return ir(ci, null, e, t);
}
function J(e = "", t = !1) {
  return t ? (S(), wc(or, null, e)) : ir(or, null, e);
}
function Wt(e) {
  return e == null || typeof e == "boolean" ? ir(or) : re(e) ? ir(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xl(e) ? tr(e) : ir(ci, null, String(e));
}
function tr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wr(e);
}
function Yn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (re(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Yn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !hl(t) ? t._ctx = At : i === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      Yn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: At }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [pe(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = qt([t.class, n.class]));
      else if (i === "style")
        t.style = ia([t.style, n.style]);
      else if (Qn(i)) {
        const a = t[i], o = n[i];
        o && a !== o && !(re(a) && a.includes(o)) ? t[i] = a ? [].concat(a, o) : o : o == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ei(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Vt(e, t, r, n = null) {
  Ut(e, t, 7, [
    r,
    n
  ]);
}
const Tc = cl();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Tc, a = {
    uid: xc++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
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
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: bl(n, i),
    emitsOptions: ul(n, i),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ic.bind(null, a), e.ce && e.ce(a), a;
}
let ut = null;
const kc = () => ut || At;
let Xn, wn;
{
  const e = ni(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (a) => {
      i.length > 1 ? i.forEach((o) => o(a)) : i[0](a);
    };
  };
  Xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ut = r
  ), wn = t(
    "__VUE_SSR_SETTERS__",
    (r) => Sn = r
  );
}
const Tn = (e) => {
  const t = ut;
  return Xn(e), e.scope.on(), () => {
    e.scope.off(), Xn(t);
  };
}, Ba = () => {
  ut && ut.scope.off(), Xn(null);
};
function kl(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function Rc(e, t = !1, r = !1) {
  t && wn(t);
  const { props: n, children: i } = e.vnode, a = kl(e);
  uc(e, n, a, t), hc(e, i, r || t);
  const o = a ? Oc(e, t) : void 0;
  return t && wn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    ar();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, a = Tn(e), o = Cn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), u = Cs(o);
    if (sr(), a(), (u || e.sp) && !mn(e) && rl(e), u) {
      if (o.then(Ba, Ba), t)
        return o.then((p) => {
          wn(!0);
          try {
            qa(e, p, t);
          } finally {
            wn(!1);
          }
        }).catch((p) => {
          ai(p, e, 0);
        });
      e.asyncDep = o;
    } else
      qa(e, o);
  } else
    Rl(e);
}
function qa(e, t, r) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Ws(t)), Rl(e);
}
function Rl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Kt);
  {
    const i = Tn(e);
    ar();
    try {
      Xo(e);
    } finally {
      sr(), i();
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
function ui(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ws(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in bn)
        return bn[r](e);
    },
    has(t, r) {
      return r in t || r in bn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return de(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ To(e, t, Sn), Mc = "3.5.42";
let Zi;
const za = typeof window < "u" && window.trustedTypes;
if (za)
  try {
    Zi = /* @__PURE__ */ za.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ol = Zi ? (e) => Zi.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", er = typeof document < "u" ? document : null, Wa = er && /* @__PURE__ */ er.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? er.createElementNS(Lc, e) : t === "mathml" ? er.createElementNS(Uc, e) : r ? er.createElement(e, { is: r }) : er.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => er.createTextNode(e),
  createComment: (e) => er.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => er.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, a) {
    const o = r ? r.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      Wa.innerHTML = Ol(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Wa.content;
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
const Ga = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = De(r);
  let a = !1;
  if (r && !i) {
    if (t)
      if (De(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          r[u] == null && cn(n, u, "");
        }
      else
        for (const o in t)
          r[o] == null && cn(n, o, "");
    for (const o in r) {
      o === "display" && (a = !0);
      const u = r[o];
      u != null ? zc(
        e,
        o,
        !De(t) && t ? t[o] : void 0,
        u
      ) || cn(n, o, u) : cn(n, o, "");
    }
  } else if (i) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, a = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Ga in e && (e[Ga] = a ? n.display : "", e[$c] && (n.display = "none"));
}
const Un = /\s*!important$/;
function cn(e, t, r) {
  if (re(r))
    r.forEach((n) => cn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    Un.test(r) ? e.setProperty(t, r.replace(Un, ""), "important") : e.setProperty(t, r);
  else {
    const n = qc(e, t);
    Un.test(r) ? e.setProperty(
      Pr(n),
      r.replace(Un, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ka = ["Webkit", "Moz", "ms"], Oi = {};
function qc(e, t) {
  const r = Oi[t];
  if (r)
    return r;
  let n = It(t);
  if (n !== "filter" && n in e)
    return Oi[t] = n;
  n = As(n);
  for (let i = 0; i < Ka.length; i++) {
    const a = Ka[i] + n;
    if (a in e)
      return Oi[t] = a;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && De(n) && r === n;
}
const Ya = "http://www.w3.org/1999/xlink";
function Xa(e, t, r, n, i, a = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ya, t.slice(6, t.length)) : e.setAttributeNS(Ya, t, r) : r == null || a && !Rs(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Yt(r) ? String(r) : r
  );
}
function Ja(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ol(r) : r);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? (
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
    u === "boolean" ? r = Rs(r) : r == null && u === "string" ? (r = "", o = !0) : u === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function xr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Za = /* @__PURE__ */ Symbol("_vei");
function Gc(e, t, r, n, i = null) {
  const a = e[Za] || (e[Za] = {}), o = a[t];
  if (n && o)
    o.value = n;
  else {
    const [u, p] = Xc(t);
    if (n) {
      const v = a[t] = Qc(
        n,
        i
      );
      xr(e, u, v, p);
    } else o && (Wc(e, u, o, p), a[t] = void 0);
  }
}
const Kc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Kc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Pr(e.slice(2)), t];
}
let Ni = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => Ni || (Jc.then(() => Ni = 0), Ni = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (re(i)) {
      const a = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        a.call(n), n._stopped = !0;
      };
      const o = i.slice(), u = [n];
      for (let p = 0; p < o.length && !n._stopped; p++) {
        const v = o[p];
        v && Ut(
          v,
          t,
          5,
          u
        );
      }
    } else
      Ut(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Qa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, a) => {
  const o = i === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? Bc(e, r, n) : Qn(t) ? ei(t) || Gc(e, t, r, n, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (Ja(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xa(e, t, n, o, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !De(n))) ? Ja(e, It(t), n, a, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Xa(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qa(t) && de(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qa(t) && De(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = It(t);
  return Array.isArray(r) ? r.some((i) => It(i) === n) : Object.keys(r).some((i) => It(i) === n);
}
const Jn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (r) => $n(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function es(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ar = /* @__PURE__ */ Symbol("_assign"), Dn = /* @__PURE__ */ Symbol("_initialValue");
function Pi(e, t, r) {
  return t && (e = e.trim()), r && (e = ri(e)), e;
}
const Ii = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[Dn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Dn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ar] = Jn(i);
    const a = n || i.props && i.props.type === "number";
    xr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ar](Pi(e.value, r, a));
    }), (r || a) && xr(e, "change", () => {
      e.value = Pi(e.value, r, a);
    }), t || (xr(e, "compositionstart", nu), xr(e, "compositionend", es), xr(e, "change", es));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", a = e[Dn];
    delete e[Dn], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Ar](Pi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: a } }, o) {
    if (e[Ar] = Jn(o), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? ri(e.value) : e.value, p = t ?? "";
    if (u === p)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === p) || (e.value = p);
  }
}, lt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, xr(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (p) => p.selected).map(
        (p) => r ? ri(Zn(p)) : Zn(p)
      ), a = e.multiple, o = a ? Nr(e._modelValue) ? new Set(i) : i : i[0], u = e._pendingValue = [
        a,
        a ? re(o) ? i.slice() : i : o
      ];
      try {
        e[Ar](o);
      } finally {
        Ks(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Ar] = Jn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ts(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Ar] = Jn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && ts(e, t);
  }
};
function iu(e, t, r) {
  if (!r || re(e)) return yr(e, t);
  if (Nr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function ts(e, t) {
  const r = e.multiple, n = re(t);
  if (!(r && !n && !Nr(t))) {
    for (let i = 0, a = e.options.length; i < a; i++) {
      const o = e.options[i], u = Zn(o);
      if (r)
        if (n) {
          const p = typeof u;
          p === "string" || p === "number" ? o.selected = t.some((v) => String(v) === String(u)) : o.selected = Zl(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (yr(Zn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Zn(e) {
  return "_value" in e ? e._value : e.value;
}
const au = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => au.some((r) => e[`${r}Key`] && !t.includes(r))
}, Fn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...a) => {
    for (let o = 0; o < t.length; o++) {
      const u = su[t[o]];
      if (u && u(i, t)) return;
    }
    return e(i, ...a);
  }));
}, lu = /* @__PURE__ */ rt({ patchProp: eu }, Dc);
let rs;
function ou() {
  return rs || (rs = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = du(n);
    if (!i) return;
    const a = t._component;
    !de(a) && !a.render && !a.template && (a.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function du(e) {
  return De(e) ? document.querySelector(e) : e;
}
function fu(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(n);
  if (i === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const a = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, a), a;
  } catch (a) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: a }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: a });
  }
}
function ns(e, t) {
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
    var n, i, a, o, u = [], p = !0, v = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(p = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); p = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!p && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw i;
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
    if (typeof e == "string") return ns(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ns(e, t) : void 0;
  }
}
const Nl = Object.entries, is = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let je = Object.freeze, Ye = Object.seal, $r = Object.create, Pl = typeof Reflect < "u" && Reflect, Qi = Pl.apply, ea = Pl.construct;
je || (je = function(t) {
  return t;
});
Ye || (Ye = function(t) {
  return t;
});
Qi || (Qi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  return t.apply(r, i);
});
ea || (ea = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Tr = $e(Array.prototype.forEach), wu = $e(Array.prototype.lastIndexOf), as = $e(Array.prototype.pop), nn = $e(Array.prototype.push), Su = $e(Array.prototype.splice), qr = Array.isArray, un = $e(String.prototype.toLowerCase), Mi = $e(String.prototype.toString), ss = $e(String.prototype.match), an = $e(String.prototype.replace), ls = $e(String.prototype.indexOf), Eu = $e(String.prototype.trim), Cu = $e(Number.prototype.toString), Tu = $e(Boolean.prototype.toString), os = typeof BigInt > "u" ? null : $e(BigInt.prototype.toString), cs = typeof Symbol > "u" ? null : $e(Symbol.prototype.toString), bt = $e(Object.prototype.hasOwnProperty), sn = $e(Object.prototype.toString), Qe = $e(RegExp.prototype.test), Er = xu(TypeError);
function $e(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Qi(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ea(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : un;
  if (is && is(e, null), !qr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (gu(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    bt(e, t) || (e[t] = null);
  return e;
}
function wt(e) {
  const t = $r(null);
  for (const n of Nl(e)) {
    var r = bu(n, 2);
    const i = r[0], a = r[1];
    bt(e, i) && (qr(a) ? t[i] = Au(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = wt(a) : t[i] = a);
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
      return os ? os(e) : "0";
    case "symbol":
      return cs ? cs(e) : "Symbol()";
    case "undefined":
      return sn(e);
    case "function":
    case "object": {
      if (e === null)
        return sn(e);
      const t = e, r = Pt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : sn(n);
      }
      return sn(e);
    }
    default:
      return sn(e);
  }
}
function Pt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return $e(n.get);
      if (typeof n.value == "function")
        return $e(n.value);
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
const us = je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Li = je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ui = je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Di = je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ds = je(["#text"]), fs = je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Fi = je(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ps = je(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hn = je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ye(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ye(/<%[\w\W]*|^[\w\W]*%>/g), Mu = Ye(/\${[\w\W]*/g), Lu = Ye(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = Ye(/^aria-[\-\w]+$/), hs = Ye(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ye(/^(?:\w+script|data):/i), Fu = Ye(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ye(/^html$/i), $u = Ye(/^[a-z][.\w]*(-[.\w]+)+$/i), ms = Ye(/<[/\w!]/g), bs = Ye(/<[/\w]/g), ju = Ye(/<\/no(script|embed|frames)/i), Vu = Ye(/\/>/i), vt = {
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
}, Il = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = je(ge({}, Il)), qu = (function() {
  const e = {};
  return Tr(Il, (t) => {
    e[t] = Ye(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), je(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const a = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(a, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, ys = function() {
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
}, pr = function(t, r, n, i) {
  return bt(t, r) && qr(t[r]) ? ge(i.base ? wt(i.base) : {}, t[r], i.transform) : n;
}, Hi = function(t, r, n) {
  const i = bt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? wt(i) : n();
};
function Ml() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ml(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== vt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, o = e.Node, u = e.Element, p = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, w = e.trustedTypes, I = u.prototype, j = Pt(I, "cloneNode"), ae = Pt(I, "remove"), W = Pt(I, "nextSibling"), ue = Pt(I, "childNodes"), se = Pt(I, "parentNode"), z = Pt(I, "shadowRoot"), M = Pt(I, "attributes"), V = o && o.prototype ? Pt(o.prototype, "nodeType") : null, ce = o && o.prototype ? Pt(o.prototype, "nodeName") : null, Me = o && o.prototype ? Pt(o.prototype, "ownerDocument") : null, Ne = function(d) {
    return V ? V(d) : d.nodeType;
  }, Ve = function(d) {
    return ce ? ce(d) : d.nodeName;
  };
  if (typeof a == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Le = "", nt, dt = !1, Xe = 0;
  const Et = function() {
    if (Xe > 0)
      throw Er('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Fe = function(d) {
    Et(), Xe++;
    try {
      return Ee.createHTML(d);
    } finally {
      Xe--;
    }
  }, Ue = function(d) {
    Et(), Xe++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Xe--;
    }
  }, _e = function() {
    return dt || (nt = Wu(w, i), dt = !0), nt;
  }, fe = r, Be = fe.implementation, ve = fe.createNodeIterator, Te = fe.createDocumentFragment, qe = fe.getElementsByTagName, Ze = n.importNode;
  let ye = ys();
  t.isSupported = typeof Nl == "function" && typeof se == "function" && Be && Be.createHTMLDocument !== void 0;
  const Rt = Pu, ze = Iu, ft = Mu, yt = Lu, Ct = Uu, it = Du, at = Fu, m = $u;
  let b = hs, _ = null;
  const O = ge({}, [...us, ...Li, ...Ui, ...Di, ...ds]);
  let T = null;
  const k = ge({}, [...fs, ...Fi, ...ps, ...Hn]);
  let L = Object.seal($r(null, {
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
  })), D = null, U = null;
  const A = Object.seal($r(null, {
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
  let K = !0, H = !0, G = !1, Z = !0, Q = !1, P = !0, N = !1, $ = !1, te = null, le = null, be = !1, he = !1, xe = !1, Oe = !1, oe = !0, We = !1;
  const Ot = "user-content-";
  let Dt = !0, Ft = !1, Tt = {}, gt = null;
  const _t = ge({}, [
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
  let Ht = null;
  const ur = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let xt = null;
  const gr = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $t = "http://www.w3.org/1998/Math/MathML", Xt = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let Jt = He, Gr = !1, Ir = null;
  const di = ge({}, [$t, Xt, He], Mi), Kr = je(["mi", "mo", "mn", "ms", "mtext"]);
  let Mr = ge({}, Kr);
  const xn = je(["annotation-xml"]);
  let _r = ge({}, xn);
  const fi = ge({}, ["title", "style", "font", "a", "script"]);
  let vr = null;
  const Yr = ["application/xhtml+xml", "text/html"], Xr = "text/html";
  let Pe = null, dr = null;
  const fr = r.createElement("form"), Jr = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Zr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (dr && dr === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = wt(d), vr = // eslint-disable-next-line unicorn/prefer-includes
    Yr.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? Xr : d.PARSER_MEDIA_TYPE, Pe = vr === "application/xhtml+xml" ? Mi : un, _ = pr(d, "ALLOWED_TAGS", O, {
      transform: Pe
    }), T = pr(d, "ALLOWED_ATTR", k, {
      transform: Pe
    }), Ir = pr(d, "ALLOWED_NAMESPACES", di, {
      transform: Mi
    }), xt = pr(d, "ADD_URI_SAFE_ATTR", gr, {
      transform: Pe,
      base: gr
    }), Ht = pr(d, "ADD_DATA_URI_TAGS", ur, {
      transform: Pe,
      base: ur
    }), gt = pr(d, "FORBID_CONTENTS", _t, {
      transform: Pe
    }), D = pr(d, "FORBID_TAGS", wt({}), {
      transform: Pe
    }), U = pr(d, "FORBID_ATTR", wt({}), {
      transform: Pe
    }), Tt = bt(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? wt(d.USE_PROFILES) : d.USE_PROFILES : !1, K = d.ALLOW_ARIA_ATTR !== !1, H = d.ALLOW_DATA_ATTR !== !1, G = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = d.SAFE_FOR_TEMPLATES || !1, P = d.SAFE_FOR_XML !== !1, N = d.WHOLE_DOCUMENT || !1, he = d.RETURN_DOM || !1, xe = d.RETURN_DOM_FRAGMENT || !1, Oe = d.RETURN_TRUSTED_TYPE || !1, be = d.FORCE_BODY || !1, oe = d.SANITIZE_DOM !== !1, We = d.SANITIZE_NAMED_PROPS || !1, Dt = d.KEEP_CONTENT !== !1, Ft = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : hs, Jt = typeof d.NAMESPACE == "string" ? d.NAMESPACE : He, Mr = Hi(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ge({}, Kr)
      // Default built-in map
    ), _r = Hi(
      d,
      "HTML_INTEGRATION_POINTS",
      () => ge({}, xn)
      // Default built-in map
    );
    const g = Hi(d, "CUSTOM_ELEMENT_HANDLING", () => $r(null));
    if (L = $r(null), bt(g, "tagNameCheck") && Jr(g.tagNameCheck) && (L.tagNameCheck = g.tagNameCheck), bt(g, "attributeNameCheck") && Jr(g.attributeNameCheck) && (L.attributeNameCheck = g.attributeNameCheck), bt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ye(L), Q && (H = !1), xe && (he = !0), Tt && (_ = ge({}, ds), T = $r(null), Tt.html === !0 && (ge(_, us), ge(T, fs)), Tt.svg === !0 && (ge(_, Li), ge(T, Fi), ge(T, Hn)), Tt.svgFilters === !0 && (ge(_, Ui), ge(T, Fi), ge(T, Hn)), Tt.mathMl === !0 && (ge(_, Di), ge(T, ps), ge(T, Hn))), A.tagCheck = null, A.attributeCheck = null, bt(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? A.tagCheck = d.ADD_TAGS : qr(d.ADD_TAGS) && (_ === O && (_ = wt(_)), ge(_, d.ADD_TAGS, Pe))), bt(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? A.attributeCheck = d.ADD_ATTR : qr(d.ADD_ATTR) && (T === k && (T = wt(T)), ge(T, d.ADD_ATTR, Pe))), bt(d, "ADD_FORBID_CONTENTS") && qr(d.ADD_FORBID_CONTENTS) && (gt === _t && (gt = wt(gt)), ge(gt, d.ADD_FORBID_CONTENTS, Pe)), Dt && (_["#text"] = !0), N && ge(_, ["html", "head", "body"]), _.table && (ge(_, ["tbody"]), delete D.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Er('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Er('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        Le = Fe("");
      } catch (B) {
        throw Ee = R, B;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Le = "") : (Ee === void 0 && (Ee = _e()), Ee && typeof Le == "string" && (Le = Fe("")));
    je && je(d), dr = d;
  }, An = ge({}, [...Li, ...Ui, ...Ou]), kn = ge({}, [...Di, ...Nu]), pi = function(d, g, R) {
    return g.namespaceURI === He ? d === "svg" : g.namespaceURI === $t ? d === "svg" && (R === "annotation-xml" || Mr[R]) : !!An[d];
  }, hi = function(d, g, R) {
    return g.namespaceURI === He ? d === "math" : g.namespaceURI === Xt ? d === "math" && _r[R] : !!kn[d];
  }, mi = function(d, g, R) {
    return g.namespaceURI === Xt && !_r[R] || g.namespaceURI === $t && !Mr[R] ? !1 : !kn[d] && (fi[d] || !An[d]);
  }, bi = function(d) {
    let g = se(d);
    (!g || !g.tagName) && (g = {
      namespaceURI: Jt,
      tagName: "template"
    });
    const R = un(d.tagName), B = un(g.tagName);
    return Ir[d.namespaceURI] ? d.namespaceURI === Xt ? pi(R, g, B) : d.namespaceURI === $t ? hi(R, g, B) : d.namespaceURI === He ? mi(R, g, B) : !!(vr === "application/xhtml+xml" && Ir[d.namespaceURI]) : !1;
  }, Nt = function(d) {
    nn(t.removed, {
      element: d
    });
    try {
      se(d).removeChild(d);
    } catch {
      if (ae(d), !se(d))
        throw Er("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Qr = function(d, g, R) {
    try {
      d.removeAttributeNode(g);
    } catch {
      try {
        d.removeAttribute(R);
      } catch {
      }
    }
  }, x = function(d) {
    ne(d);
    const g = ue(d);
    if (g) {
      const B = [];
      Tr(g, (X) => {
        nn(B, X);
      }), Tr(B, (X) => {
        try {
          ae(X);
        } catch {
        }
      });
    }
    const R = M(d);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const X = R[B], ie = X && X.name;
        typeof ie == "string" && Qr(d, X, ie);
      }
  }, E = function(d, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(d);
      } catch {
        R = null;
      }
    nn(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(d);
    } catch {
      try {
        g.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (he || xe)
        try {
          Nt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(d, "");
        } catch {
        }
  }, f = function(d) {
    const g = M(d);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], X = B && B.name;
        typeof X != "string" || T[Pe(X)] || Qr(d, B, X);
      }
  }, ne = function(d) {
    const g = [d];
    for (; g.length > 0; ) {
      const R = g.pop();
      Ne(R) === vt.element && f(R);
      const X = ue(R);
      if (X)
        for (let ie = X.length - 1; ie >= 0; --ie)
          g.push(X[ie]);
    }
  }, Ge = function(d, g) {
    return P ? d === "patchsrc" ? !0 : d === "for" && g !== "label" && g !== "output" : !1;
  }, Zt = function(d) {
    if (!P)
      return;
    const g = [d];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Ne(R);
      if (B === vt.processingInstruction || B === vt.comment && Qe(bs, R.data)) {
        try {
          ae(R);
        } catch {
        }
        continue;
      }
      if (B === vt.element) {
        const ie = R, ke = Pe(Ve(R));
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Ge("for", ke) && ie.removeAttribute("for");
        } catch {
        }
      }
      const X = ue(R);
      if (X)
        for (let ie = X.length - 1; ie >= 0; --ie)
          g.push(X[ie]);
    }
  }, ya = function(d) {
    let g = null, R = null;
    if (be)
      d = "<remove></remove>" + d;
    else {
      const ie = ss(d, /^[\r\n\t ]+/);
      R = ie && ie[0];
    }
    vr === "application/xhtml+xml" && Jt === He && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const B = Ee ? Fe(d) : d;
    if (Jt === He)
      try {
        g = new y().parseFromString(B, vr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Be.createDocument(Jt, "template", null);
      try {
        g.documentElement.innerHTML = Gr ? Le : B;
      } catch {
      }
    }
    const X = g.body || g.documentElement;
    return d && R && X.insertBefore(r.createTextNode(R), X.childNodes[0] || null), Jt === He ? qe.call(g, N ? "html" : "body")[0] : N ? g.documentElement : X;
  }, ga = function(d) {
    const g = Me ? Me(d) : d.ownerDocument;
    return ve.call(
      g || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Rn = function(d) {
    return d = an(d, Rt, " "), d = an(d, ze, " "), d = an(d, ft, " "), d;
  }, yi = function(d) {
    var g;
    d.normalize();
    const R = Me ? Me(d) : d.ownerDocument, B = ve.call(
      R || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = B.nextNode();
    for (; X; )
      X.data = Rn(X.data), X = B.nextNode();
    const ie = (g = d.querySelectorAll) === null || g === void 0 ? void 0 : g.call(d, "template");
    ie && Tr(ie, (ke) => {
      Lr(ke.content) && yi(ke.content);
    });
  }, On = function(d) {
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
  }, Lr = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === vt.documentFragment;
    } catch {
      return !1;
    }
  }, en = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function jt(F, d, g) {
    F.length !== 0 && Tr(F, (R) => {
      R.call(t, d, g, dr);
    });
  }
  const Ul = function(d, g) {
    return !!(P && d.hasChildNodes() && !en(d.firstElementChild) && Qe(ms, d.textContent) && Qe(ms, d.innerHTML) || P && d.namespaceURI === He && Bu[g] && (en(d.firstElementChild) || typeof d.textContent == "string" && Qe(qu[g], d.textContent)) || d.nodeType === vt.processingInstruction || P && d.nodeType === vt.comment && Qe(bs, d.data));
  }, Nn = function(d, g) {
    if (d instanceof RegExp)
      return Qe(d, g);
    if (d instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), X = 2; X < R; X++)
        B[X - 2] = arguments[X];
      return !!d(g, ...B);
    }
    return !1;
  }, Dl = function(d, g, R) {
    if (!D[g] && Ea(g) && Nn(L.tagNameCheck, g))
      return !1;
    if (Dt && !gt[g]) {
      const B = se(d), X = ue(d);
      if (X && B) {
        const ie = X.length;
        for (let ke = ie - 1; ke >= 0; --ke) {
          const Ie = d === R ? j(X[ke], !0) : X[ke];
          B.insertBefore(Ie, W(d));
        }
      }
    }
    return Nt(d), !0;
  }, _a = function(d, g, R, B) {
    return d.length === 0 ? g : g === R || g === B ? wt(g) : g;
  }, va = function(d, g) {
    return d === g || se(d) !== null ? !1 : (Ft && ne(d), !0);
  }, wa = function(d, g) {
    if (jt(ye.beforeSanitizeElements, d, null), va(d, g))
      return !0;
    if (On(d))
      return Nt(d), !0;
    const R = Pe(Ve(d));
    if (_ = _a(ye.uponSanitizeElement, _, O, te), jt(ye.uponSanitizeElement, d, {
      tagName: R,
      allowedTags: _
    }), va(d, g))
      return !0;
    if (Ul(d, R))
      return Nt(d), !0;
    if (D[R] || !(A.tagCheck instanceof Function && A.tagCheck(R)) && !_[R]) {
      const X = Dl(d, R, g);
      return X === !1 && jt(ye.afterSanitizeElements, d, null), X;
    }
    if (Ne(d) === vt.element && !bi(d) || (R === "noscript" || R === "noembed" || R === "noframes") && Qe(ju, d.innerHTML))
      return Nt(d), !0;
    if (Q && d.nodeType === vt.text) {
      const X = Rn(d.textContent);
      d.textContent !== X && (nn(t.removed, {
        element: d.cloneNode()
      }), d.textContent = X);
    }
    return jt(ye.afterSanitizeElements, d, null), !1;
  }, Sa = function(d, g, R) {
    if (U[g] || Ge(g, d) || oe && (g === "id" || g === "name") && (R in r || R in fr))
      return !1;
    const B = T[g] || A.attributeCheck instanceof Function && A.attributeCheck(g, d);
    return H && Qe(yt, g) || K && Qe(Ct, g) ? !0 : B ? xt[g] || Qe(b, an(R, at, "")) || (g === "src" || g === "xlink:href" || g === "href") && d !== "script" && ls(R, "data:") === 0 && Ht[d] || G && !Qe(it, an(R, at, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ea(d) && Nn(L.tagNameCheck, d) && Nn(L.attributeNameCheck, g, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && L.allowCustomizedBuiltInElements && Nn(L.tagNameCheck, R)
    );
  }, Fl = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ea = function(d) {
    return !Fl[un(d)] && Qe(m, d);
  }, Hl = function(d, g, R, B) {
    if (Ee && typeof w == "object" && typeof w.getAttributeType == "function" && !R)
      switch (w.getAttributeType(d, g)) {
        case "TrustedHTML":
          return Fe(B);
        case "TrustedScriptURL":
          return Ue(B);
      }
    return B;
  }, $l = function(d, g, R, B) {
    try {
      R ? d.setAttributeNS(R, g, B) : d.setAttribute(g, B), On(d) ? Nt(d) : as(t.removed);
    } catch {
      E(g, d);
    }
  }, Ca = function(d) {
    jt(ye.beforeSanitizeAttributes, d, null);
    const g = d.attributes;
    if (!g || On(d))
      return;
    T = _a(ye.uponSanitizeAttribute, T, k, le);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const X = Pe(d.nodeName);
    for (; B--; ) {
      const ie = g[B], ke = ie.name, Ie = ie.namespaceURI, pt = ie.value, ht = Pe(ke), _i = pt;
      let st = ke === "value" ? _i : Eu(_i);
      if (R.attrName = ht, R.attrValue = st, R.keepAttr = !0, R.forceKeepAttr = void 0, jt(ye.uponSanitizeAttribute, d, R), st = R.attrValue, We && (ht === "id" || ht === "name") && ls(st, Ot) !== 0 && (E(ke, d, ie), st = Ot + st), P && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, st)) {
        E(ke, d, ie);
        continue;
      }
      if (ht === "attributename" && ss(st, "href")) {
        E(ke, d, ie);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          E(ke, d, ie);
          continue;
        }
        if (!Z && Qe(Vu, st)) {
          E(ke, d, ie);
          continue;
        }
        if (Q && (st = Rn(st)), !Sa(X, ht, st)) {
          E(ke, d, ie);
          continue;
        }
        st = Hl(X, ht, Ie, st), st !== _i && $l(d, ke, Ie, st);
      }
    }
    jt(ye.afterSanitizeAttributes, d, null);
  }, Pn = function(d) {
    let g = null;
    const R = ga(d);
    for (jt(ye.beforeSanitizeShadowDOM, d, null); g = R.nextNode(); )
      if (jt(ye.uponSanitizeShadowNode, g, null), wa(g, d), Ca(g), Lr(g.content) && Pn(g.content), Ne(g) === vt.element) {
        const B = z(g);
        Lr(B) && (gi(B), Pn(B));
      }
    jt(ye.afterSanitizeShadowDOM, d, null);
  }, gi = function(d) {
    const g = [{
      node: d,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        Pn(R.shadow);
        continue;
      }
      const B = R.node, ie = Ne(B) === vt.element, ke = ue(B);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          g.push({
            node: ke[Ie],
            shadow: null
          });
      if (ie) {
        const Ie = ce ? ce(B) : null;
        if (typeof Ie == "string" && Pe(Ie) === "template") {
          const pt = B.content;
          Lr(pt) && g.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Ie = z(B);
        Lr(Ie) && g.push({
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
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, X = null;
    if (Gr = !F, Gr && (F = "<!-->"), typeof F != "string" && !en(F) && (F = ku(F), typeof F != "string"))
      throw Er("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = te, T = le) : Zr(d), (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && (_ = wt(_)), ye.uponSanitizeAttribute.length > 0 && (T = wt(T)), t.removed = [];
    const ie = Ft && typeof F != "string" && en(F);
    if (ie) {
      Zt(F);
      const pt = Ve(F);
      if (typeof pt == "string") {
        const ht = Pe(pt);
        if (!_[ht] || D[ht])
          throw x(F), Er("root node is forbidden and cannot be sanitized in-place");
      }
      if (On(F))
        throw x(F), Er("root node is clobbered and cannot be sanitized in-place");
      try {
        gi(F);
      } catch (ht) {
        throw x(F), ht;
      }
    } else if (en(F))
      g = ya("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === vt.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), gi(R);
    else {
      if (!he && !Q && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && Oe ? Fe(F) : F;
      if (g = ya(F), !g)
        return he ? null : Oe ? Le : "";
    }
    g && be && Nt(g.firstChild);
    const ke = ie ? F : g;
    try {
      const pt = ga(ke);
      for (; B = pt.nextNode(); )
        wa(B, ke), Ca(B), Lr(B.content) && Pn(B.content);
    } catch (pt) {
      throw ie && (x(F), Tr(t.removed, (ht) => {
        ht.element && ne(ht.element);
      })), pt;
    }
    if (ie)
      return Tr(t.removed, (pt) => {
        pt.element && ne(pt.element);
      }), Q && yi(F), F;
    if (he) {
      if (Q && yi(g), xe)
        for (X = Te.call(g.ownerDocument); g.firstChild; )
          X.appendChild(g.firstChild);
      else
        X = g;
      return (T.shadowroot || T.shadowrootmode) && (X = Ze.call(n, X, !0)), X;
    }
    let Ie = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Qe(Hu, g.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ie), Q && (Ie = Rn(Ie)), Ee && Oe ? Fe(Ie) : Ie;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(F), $ = !0, te = _, le = T;
  }, t.clearConfig = function() {
    dr = null, $ = !1, te = null, le = null, Ee = nt, Le = "";
  }, t.isValidAttribute = function(F, d, g) {
    dr || Zr({});
    const R = Pe(F), B = Pe(d);
    return Sa(R, B, g);
  }, t.addHook = function(F, d) {
    typeof d == "function" && bt(ye, F) && nn(ye[F], d);
  }, t.removeHook = function(F, d) {
    if (bt(ye, F)) {
      if (d !== void 0) {
        const g = wu(ye[F], d);
        return g === -1 ? void 0 : Su(ye[F], g, 1)[0];
      }
      return as(ye[F]);
    }
  }, t.removeHooks = function(F) {
    bt(ye, F) && (ye[F] = []);
  }, t.removeAllHooks = function() {
    ye = ys();
  }, t;
}
var Gu = Ml();
function Ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $i, gs;
function Yu() {
  if (gs) return $i;
  gs = 1;
  var e = /["'&<>]/;
  $i = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var a, o = "", u = 0, p = 0;
    for (u = i.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
        case 34:
          a = "&quot;";
          break;
        case 38:
          a = "&amp;";
          break;
        case 39:
          a = "&#39;";
          break;
        case 60:
          a = "&lt;";
          break;
        case 62:
          a = "&gt;";
          break;
        default:
          continue;
      }
      p !== u && (o += n.substring(p, u)), p = u + 1, o += a;
    }
    return p !== u ? o + n.substring(p, u) : o;
  }
  return $i;
}
var Xu = Yu();
const _s = /* @__PURE__ */ Ku(Xu);
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
function l(e, t, r, n, i) {
  const a = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, p = (W) => W, v = (u.sanitize ? Gu.sanitize : p) || p, y = u.escape ? _s : p, w = (W) => typeof W == "string" || typeof W == "number", I = (W, ue, se) => W.replace(/%n/g, "" + se).replace(/{([^{}]*)}/g, (z, M) => {
    if (ue === void 0 || !(M in ue))
      return y(z);
    const V = ue[M];
    return w(V) ? y(`${V}`) : typeof V == "object" && w(V.value) ? (V.escape !== !1 ? _s : p)(`${V.value}`) : y(z);
  });
  let ae = (i?.bundle ?? Ju(e)).translations[t] || t;
  return ae = Array.isArray(ae) ? ae[0] : ae, v(typeof a == "object" || o !== void 0 ? I(
    ae,
    a,
    o
  ) : ae);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, id = ["aria-label"], ad = { class: "library-catalogue-actions-list" }, sd = ["href"], ld = ["href"], od = ["href"], cd = ["href"], ud = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, dd = { class: "library-muted library-catalogue-eyebrow" }, fd = { id: "library-actions-health-heading" }, pd = { class: "library-muted" }, hd = {
  key: 0,
  class: "library-muted"
}, md = {
  key: 1,
  class: "library-notice"
}, bd = {
  key: 2,
  class: "library-muted"
}, yd = {
  key: 0,
  class: "library-muted"
}, gd = {
  key: 1,
  class: "library-muted"
}, _d = {
  key: 2,
  class: "library-muted"
}, vd = ["disabled"], wd = { class: "library-actions-health-links" }, Sd = ["href"], Ed = ["href"], Cd = ["href"], Td = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, kd = { class: "library-import-health-number" }, Rd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Id = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Md = { class: "library-muted" }, Ld = ["href"], Ud = ["href"], Dd = ["action"], Fd = ["value"], Hd = {
  type: "submit",
  class: "button secondary"
}, $d = { class: "library-muted" }, jd = ["href"], Vd = ["action"], Bd = ["value"], qd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  key: 1,
  class: "library-home-dashboard",
  "aria-labelledby": "library-home-dashboard-heading"
}, Gd = { class: "library-home-hero-card" }, Kd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-home-dashboard-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-home-hero-actions" }, Zd = ["href"], Qd = ["aria-label"], ef = ["onClick"], tf = ["src", "alt"], rf = {
  key: 0,
  class: "library-home-rediscover"
}, nf = { class: "library-muted library-catalogue-eyebrow" }, af = { class: "library-muted" }, sf = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, lf = { class: "library-useful-views-copy" }, of = { class: "library-muted library-catalogue-eyebrow" }, cf = { id: "library-useful-views-heading" }, uf = { class: "library-muted" }, df = { class: "library-muted" }, ff = ["aria-label"], pf = ["href", "title"], hf = { class: "library-useful-view-count" }, mf = {
  class: "library-weak-metadata-dashboard",
  "aria-labelledby": "library-weak-metadata-heading"
}, bf = { class: "library-weak-metadata-dashboard-copy" }, yf = { class: "library-muted library-catalogue-eyebrow" }, gf = { id: "library-weak-metadata-heading" }, _f = { class: "library-muted" }, vf = ["aria-label"], wf = ["href", "title"], Sf = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, Ef = { class: "library-saved-collections-copy" }, Cf = { class: "library-muted library-catalogue-eyebrow" }, Tf = { id: "library-saved-collections-heading" }, xf = { class: "library-muted" }, Af = ["action"], kf = ["value"], Rf = ["value"], Of = ["placeholder", "disabled"], Nf = ["disabled"], Pf = {
  key: 0,
  class: "library-muted"
}, If = ["aria-label"], Mf = ["href"], Lf = ["action"], Uf = ["value"], Df = {
  type: "submit",
  class: "button tertiary"
}, Ff = ["aria-label"], Hf = ["name", "value"], $f = { class: "library-quick-search-row" }, jf = { class: "library-quick-filter-search" }, Vf = ["aria-label"], Bf = { class: "library-quick-filter-options" }, qf = { class: "library-quick-filter-option-grid" }, zf = { value: "title" }, Wf = { value: "recent" }, Gf = { value: "publicationDate" }, Kf = { value: "publication" }, Yf = { value: "lastOpened" }, Xf = { value: "format" }, Jf = { value: "" }, Zf = { value: "1" }, Qf = ["value"], ep = ["value"], tp = ["aria-label"], rp = ["aria-label"], np = { class: "library-filter-panel" }, ip = { class: "library-filter-panel-summary" }, ap = ["aria-label"], sp = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, lp = { value: "" }, op = ["value"], cp = { value: "" }, up = ["value"], dp = { value: "" }, fp = ["value"], pp = { value: "" }, hp = ["value"], mp = { value: "" }, bp = ["value"], yp = { value: "" }, gp = ["value"], _p = { value: "" }, vp = ["value"], wp = { value: "" }, Sp = ["value"], Ep = { value: "" }, Cp = ["value"], Tp = { value: "" }, xp = ["value"], Ap = { value: "" }, kp = { value: "1" }, Rp = { value: "" }, Op = { value: "1" }, Np = { value: "title" }, Pp = { value: "recent" }, Ip = { value: "publicationDate" }, Mp = { value: "publication" }, Lp = { value: "lastOpened" }, Up = { value: "format" }, Dp = ["value"], Fp = ["value"], Hp = ["aria-label"], $p = ["aria-label"], jp = ["href"], Vp = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Bp = { class: "library-muted library-catalogue-eyebrow" }, qp = { id: "library-discovery-heading" }, zp = { class: "library-muted" }, Wp = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Gp = { key: 0 }, Kp = { key: 1 }, Yp = { key: 2 }, Xp = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Jp = { key: 0 }, Zp = { key: 1 }, Qp = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, eh = { class: "library-muted library-catalogue-eyebrow" }, th = { id: "library-publication-issue-groups-heading" }, rh = { class: "library-muted" }, nh = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, ih = ["href"], ah = {
  key: 0,
  class: "library-notice"
}, sh = { class: "library-publication-issue-label" }, lh = ["href"], oh = { class: "library-muted" }, ch = {
  key: 1,
  class: "library-publication-unknown-issues"
}, uh = { class: "library-muted" }, dh = {
  href: "/apps/library/",
  class: "button secondary"
}, fh = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, ph = { class: "library-muted" }, hh = ["aria-pressed"], mh = ["aria-pressed"], bh = ["aria-pressed"], yh = { class: "library-catalogue-status-row" }, gh = { class: "library-muted library-filter-result-summary" }, _h = { key: 0 }, vh = { href: "?" }, wh = ["aria-label"], Sh = { class: "library-pagination-range" }, Eh = { key: 0 }, Ch = ["href"], Th = {
  key: 1,
  class: "library-muted"
}, xh = ["href"], Ah = {
  key: 3,
  class: "library-muted"
}, kh = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Rh = ["aria-label"], Oh = { class: "library-settings-count-badge" }, Nh = ["action"], Ph = ["value"], Ih = ["name", "value"], Mh = ["placeholder"], Lh = {
  type: "submit",
  class: "button primary"
}, Uh = { class: "library-muted" }, Dh = ["action"], Fh = ["value"], Hh = ["name", "value"], $h = ["placeholder"], jh = {
  type: "submit",
  class: "button secondary"
}, Vh = { class: "library-muted" }, Bh = ["action"], qh = ["value"], zh = ["name", "value"], Wh = {
  type: "submit",
  class: "button secondary"
}, Gh = { class: "library-muted" }, Kh = ["action"], Yh = ["value"], Xh = ["name", "value"], Jh = { name: "bulkEditField" }, Zh = { value: "publicationType" }, Qh = { value: "subtitle" }, em = { value: "creators" }, tm = { value: "publication" }, rm = { value: "publicationDate" }, nm = { value: "language" }, im = { value: "publisher" }, am = { value: "genres" }, sm = { value: "classifications" }, lm = {
  type: "submit",
  class: "button secondary"
}, om = { class: "library-muted" }, cm = ["action"], um = ["value"], dm = ["name", "value"], fm = {
  type: "submit",
  class: "button secondary"
}, pm = { class: "library-muted" }, hm = { class: "library-discovery-shortcuts" }, mm = { class: "library-discovery-shortcut-grid" }, bm = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, ym = { id: "library-periodical-groups-heading" }, gm = { class: "library-muted" }, _m = ["href"], vm = { class: "library-muted" }, wm = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Sm = { id: "library-periodical-groups-empty-heading" }, Em = { class: "library-muted" }, Cm = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Tm = { id: "library-year-groups-heading" }, xm = ["href"], Am = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, km = { id: "library-creator-groups-heading" }, Rm = ["href"], Om = ["aria-label"], Nm = ["href", "aria-label"], Pm = { class: "library-muted" }, Im = { class: "library-empty-actions" }, Mm = ["href"], Lm = { class: "library-muted" }, Um = { class: "library-muted" }, Dm = { class: "library-empty-actions" }, Fm = ["href"], Hm = { class: "library-muted" }, $m = { class: "library-empty-actions" }, jm = ["href"], Vm = {
  href: "?",
  class: "button primary"
}, Bm = { class: "library-muted" }, qm = { class: "library-empty-actions" }, zm = ["href"], Wm = ["href", "aria-label"], Gm = ["src", "alt"], Km = ["action", "onSubmit"], Ym = ["value"], Xm = ["value"], Jm = ["aria-pressed", "title", "aria-label", "onClick"], Zm = { class: "library-cover-summary" }, Qm = { class: "library-cover-primary" }, eb = ["aria-label"], tb = ["href"], rb = ["onToggle"], nb = ["aria-label"], ib = { class: "library-cover-meta" }, ab = {
  key: 0,
  class: "library-creator"
}, sb = { class: "library-cover-detail-list" }, lb = { class: "library-cover-detail-chip" }, ob = {
  key: 0,
  class: "library-cover-detail-chip"
}, cb = {
  key: 1,
  class: "library-cover-detail-chip"
}, ub = {
  key: 2,
  class: "library-cover-detail-chip"
}, db = {
  key: 3,
  class: "library-cover-detail-chip"
}, fb = {
  key: 4,
  class: "library-cover-detail-chip"
}, pb = {
  key: 5,
  class: "library-cover-detail-chip"
}, hb = {
  key: 6,
  class: "library-cover-detail-chip"
}, mb = {
  key: 1,
  class: "library-muted library-cover-description"
}, bb = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, yb = { key: 0 }, gb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, _b = {
  key: 0,
  class: "library-muted"
}, vb = { class: "library-cover-actions" }, wb = ["href"], Sb = ["href"], Eb = ["onClick"], Cb = ["href"], Tb = ["aria-label"], xb = { class: "library-pagination-range" }, Ab = { key: 0 }, kb = ["href"], Rb = {
  key: 1,
  class: "library-muted"
}, Ob = ["href"], Nb = {
  key: 3,
  class: "library-muted"
}, Pb = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  role: "dialog",
  "aria-modal": "true"
}, Ib = ["src", "alt"], Mb = { class: "library-muted library-catalogue-eyebrow" }, Lb = { id: "library-detail-drawer-heading" }, Ub = {
  key: 0,
  class: "library-creator"
}, Db = {
  key: 1,
  class: "library-muted"
}, Fb = { class: "library-detail-drawer-facts" }, Hb = { key: 0 }, $b = { key: 1 }, jb = { key: 2 }, Vb = { class: "library-detail-drawer-actions" }, Bb = ["href"], qb = ["href"], zb = ["aria-label"], Wb = ["disabled"], Gb = ["disabled"], Kb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ mr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), a = /* @__PURE__ */ mr((i.items || []).map((x) => ({ ...x }))), o = q(() => a), u = q(() => i.shelves || []), p = q(() => i.formats || []), v = q(() => i.publications || []), y = q(() => i.publicationSummaries || []), w = q(() => i.publicationIssueContext || null), I = q(() => i.publicationYears || []), j = q(() => i.creators || []), ae = q(() => i.scanStatuses || []), W = q(() => i.workflowStatuses || []), ue = q(() => i.genres || []), se = q(() => i.classifications || []), z = q(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), M = /* @__PURE__ */ mr({
      q: i.activeFilters?.q || "",
      view: i.activeFilters?.view || "compact",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      needsMetadata: i.activeFilters?.needsMetadata || "",
      coverReview: i.activeFilters?.coverReview || "",
      noCreator: i.activeFilters?.noCreator || "",
      noPublication: i.activeFilters?.noPublication || "",
      noDate: i.activeFilters?.noDate || "",
      titleFromFilename: i.activeFilters?.titleFromFilename || "",
      noDescription: i.activeFilters?.noDescription || "",
      unsupportedContainer: i.activeFilters?.unsupportedContainer || "",
      weakMetadata: i.activeFilters?.weakMetadata || "",
      unreviewedImports: i.activeFilters?.unreviewedImports || "",
      sort: i.activeFilters?.sort || "title"
    }), V = q(() => i.settingsUrl || ""), ce = q(() => i.requestToken || ""), Me = q(() => i.metadataExportUrl || ""), Ne = q(() => i.metadataSidecarManifestUrl || ""), Ve = q(() => i.metadataSidecarBundleUrl || ""), Ee = q(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Le = q(() => i.batchTagUrl || "/apps/library/bulk/tags"), nt = q(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = q(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Xe = q(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Et = q(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Fe = q(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Ue = q(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), _e = q(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), fe = q(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Be = q(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), ve = /* @__PURE__ */ mr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Te = q(() => ve.summary || {}), qe = q(() => {
      const x = Number(Te.value.generatedAt || 0);
      return x > 0 ? new Date(x * 1e3).toLocaleString() : "";
    }), Ze = q(() => Te.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), ye = q(() => Te.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Rt = q(() => Te.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), ze = q(() => Te.value.coverSupportMatrix || Rt.value.byFormat || []), ft = q(() => Te.value.environmentCapabilities || {}), yt = q(() => i.discoveryPage === "publication"), Ct = q(() => i.discoveryPage === "year"), it = q(() => i.discoveryPage === "creator"), at = q(() => yt.value || Ct.value || it.value), m = q(() => i.discoveryTitle || M.publication || M.year || M.creator || ""), b = q(() => at.value ? m.value : l("library", "Publication catalogue")), _ = q(() => it.value ? l("library", "Creator") : Ct.value ? l("library", "Publication year") : l("library", "Publication / series")), O = q(() => Number(i.rootCount || 0)), T = q(() => Number(i.enabledRootCount || 0)), k = q(() => O.value === 0), L = q(() => O.value > 0 && T.value === 0), D = q(() => N.value.length > 0), U = {
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
    }, A = q(() => {
      if (typeof window > "u") return "";
      const x = new URLSearchParams(window.location.search);
      if (x.get("batchMetadataApplyResult") !== "1") return "";
      const E = x.get("batchMetadataField") || "field", f = x.get("batchMetadataApplied") || "0", ne = x.get("batchMetadataUnchanged") || "0", Ge = x.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: E, unchanged: ne, skipped: Ge });
    }), K = q(() => i.savedCollections || []), H = q(() => i.savedCollectionSaveUrl || "/apps/library/collections"), G = q(() => i.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Z = ["compact", "gallery", "shelf"], Q = q(() => Z.includes(M.view) ? M.view : "compact"), P = q(() => ({
      "library-cover-gallery--compact": Q.value === "compact",
      "library-cover-gallery--gallery": Q.value === "gallery",
      "library-cover-gallery--shelf": Q.value === "shelf"
    })), N = q(() => Object.entries(U).map(([x, E]) => ({ key: x, label: E, value: M[x] || "" })).filter((x) => String(x.value).trim() !== "")), $ = q(() => Object.entries(M).filter(([x, E]) => !["q", "sort", "starred"].includes(x) && String(E || "").trim() !== "").map(([x, E]) => ({ key: x, value: E }))), te = q(() => Object.entries(M).filter(([x, E]) => String(E || "").trim() !== "").map(([x, E]) => ({ key: x, value: E }))), le = /* @__PURE__ */ mr({}), be = q(() => o.value.filter((x) => x.starred || x.workflowStatus === "reading" || x.lastOpenedAt).slice(0, 5)), he = q(() => [...o.value].slice(0, 6)), xe = q(() => o.value.find((x) => x.description || x.publication || x.creators) || o.value[0] || null), Oe = q(() => !at.value && o.value.length > 0), oe = /* @__PURE__ */ Oa(null), We = q(() => oe.value ? o.value.findIndex((x) => x.id === oe.value.id) : -1), Ot = q(() => We.value > 0 ? o.value[We.value - 1] : null), Dt = q(() => We.value >= 0 && We.value < o.value.length - 1 ? o.value[We.value + 1] : null);
    function Ft(x) {
      oe.value = x;
    }
    function Tt() {
      oe.value = null;
    }
    function gt(x) {
      x && (oe.value = x);
    }
    const _t = /* @__PURE__ */ Oa(null);
    let Ht = null;
    function ur(x) {
      const E = new URLSearchParams(new FormData(x));
      for (const f of Array.from(E.keys()))
        String(E.get(f) || "").trim() === "" && E.delete(f);
      return E.delete("page"), E.get("view") === "compact" && E.delete("view"), E;
    }
    function xt(x) {
      a.splice(0, a.length, ...(x.items || []).map((E) => ({ ...E })));
      for (const E of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(x, E) && (i[E] = x[E]);
      Object.assign(M, x.activeFilters || {});
    }
    async function gr(x = !1) {
      if (!(ve.loading || ve.refreshing)) {
        x ? ve.refreshing = !0 : ve.loading = !0, ve.error = "";
        try {
          const E = await fetch(`${Be.value}${x ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!E.ok)
            throw new Error(`Import health request failed: ${E.status}`);
          ve.summary = await E.json(), ve.loaded = !0;
        } catch (E) {
          ve.error = E?.message || String(E);
        } finally {
          ve.loading = !1, ve.refreshing = !1;
        }
      }
    }
    async function $t(x) {
      x && x.currentTarget && x.currentTarget.open !== !0 || ve.loaded || ve.loading || await gr(!1);
    }
    async function Xt() {
      await gr(!0);
    }
    async function He(x) {
      const E = x?.currentTarget?.tagName === "FORM" ? x.currentTarget : x?.currentTarget?.form;
      if (!E) return;
      const ne = ur(E).toString(), Ge = ne ? `?${ne}` : "", Zt = await fetch(Ee.value + Ge, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Zt.ok) {
        E.submit();
        return;
      }
      xt(await Zt.json()), history.replaceState({}, "", ne ? `?${ne}` : window.location.pathname);
    }
    function Jt(x) {
      He(x);
    }
    function Gr(x) {
      window.clearTimeout(Ht), Ht = window.setTimeout(() => Jt(x), 350);
    }
    function Ir(x) {
      const E = new URLSearchParams();
      for (const [ne, Ge] of Object.entries(M)) {
        const Zt = String(Ge || "").trim();
        Zt !== "" && ne !== x && !(ne === "sort" && Zt === "title") && !(ne === "view" && Zt === "compact") && E.set(ne, Zt);
      }
      const f = E.toString();
      return f ? `?${f}` : "?";
    }
    function di() {
      return Ir("q");
    }
    const Kr = q(() => i.smartViewCounts || {}), Mr = q(() => {
      const x = {};
      for (const [E, f] of Object.entries(M)) {
        const ne = String(f || "").trim();
        ne !== "" && !(E === "sort" && ne === "title") && (x[E] = ne);
      }
      return x;
    }), xn = q(() => JSON.stringify(Mr.value)), _r = q(() => Object.keys(Mr.value).length > 0), fi = q(() => [
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
    ]), vr = q(() => [
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
    function Yr(x) {
      if (!Z.includes(x)) return;
      M.view = x;
      const E = new URLSearchParams(window.location.search);
      x === "compact" ? E.delete("view") : E.set("view", x), E.delete("page"), history.replaceState({}, "", E.toString() ? `?${E.toString()}` : window.location.pathname);
    }
    function Xr(x) {
      const E = new URLSearchParams(window.location.search);
      for (const ne of Object.keys(U))
        E.delete(ne);
      E.delete("page");
      for (const [ne, Ge] of Object.entries(x))
        String(Ge || "").trim() !== "" && E.set(ne, String(Ge));
      const f = E.toString();
      return f ? `?${f}` : "?";
    }
    function Pe(x) {
      return Xr(x || {});
    }
    function dr(x) {
      return G.value.replace("__COLLECTION_ID__", encodeURIComponent(String(x || "0")));
    }
    function fr(x) {
      return String(x || "").toUpperCase();
    }
    function Jr(x) {
      return x.nextcloudTags || [];
    }
    function Zr(x) {
      return y.value.find((f) => f.publication === x)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(x)}`;
    }
    function An(x) {
      return i.publicationYearLandingUrls?.[x] || `/apps/library/years/${encodeURIComponent(x)}`;
    }
    function kn(x) {
      return i.creatorLandingUrls?.[x] || `/apps/library/creators/${encodeURIComponent(x)}`;
    }
    function pi(x, E) {
      le[x] = !!E?.currentTarget?.open;
    }
    function hi(x) {
      const E = String(x?.tagName || "").toLowerCase();
      return x?.isContentEditable || ["input", "select", "textarea", "button"].includes(E);
    }
    function mi(x) {
      x.key !== "/" || x.metaKey || x.ctrlKey || x.altKey || x.shiftKey || hi(x.target) || (x.preventDefault(), _t.value?.focus(), _t.value?.select?.());
    }
    function bi(x) {
      x.key !== "Escape" || document.activeElement !== _t.value || M.q === "" || (x.preventDefault(), M.q = "", _t.value.value = "", window.clearTimeout(Ht), Jt({ currentTarget: _t.value }));
    }
    function Nt(x) {
      mi(x), bi(x);
    }
    il(() => {
      window.addEventListener("keydown", Nt);
    }), al(() => {
      window.removeEventListener("keydown", Nt);
    });
    async function Qr(x, E) {
      const f = E?.currentTarget?.closest?.("form") || E?.currentTarget;
      if (!f || !x?.starUrl) return;
      const ne = !!x.starred;
      x.starred = !ne;
      try {
        (await fetch(x.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (x.starred = ne);
      } catch {
        x.starred = ne;
      }
    }
    return (x, E) => (S(), C("div", Zu, [
      s("section", Qu, [
        s("div", ed, [
          s("div", null, [
            at.value ? (S(), C("p", td, c(_.value), 1)) : J("", !0),
            s("h2", rd, c(b.value), 1),
            s("p", nd, c(at.value ? h(l)("library", "Browse this focused view; use filters only when you need to narrow it further.") : h(l)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          s("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": h(l)("library", "Library actions")
          }, [
            s("details", {
              class: "library-catalogue-actions-menu",
              onToggle: $t
            }, [
              s("summary", null, c(h(l)("library", "Actions")), 1),
              s("div", ad, [
                s("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, c(h(l)("library", "Settings")), 9, sd),
                Me.value ? (S(), C("a", {
                  key: 0,
                  href: Me.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, c(h(l)("library", "Export corrected metadata")), 9, ld)) : J("", !0),
                Ne.value ? (S(), C("a", {
                  key: 1,
                  href: Ne.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, c(h(l)("library", "Sidecar manifest")), 9, od)) : J("", !0),
                Ve.value ? (S(), C("a", {
                  key: 2,
                  href: Ve.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, c(h(l)("library", "Sidecar ZIP")), 9, cd)) : J("", !0),
                s("div", ud, [
                  s("p", dd, c(h(l)("library", "Import health")), 1),
                  s("h3", fd, c(h(l)("library", "Metadata overview")), 1),
                  s("p", pd, c(h(l)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  ve.loading ? (S(), C("p", hd, c(h(l)("library", "Loading cached metadata overview…")), 1)) : ve.error ? (S(), C("p", md, c(ve.error), 1)) : ve.loaded ? J("", !0) : (S(), C("p", bd, c(h(l)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  ve.loaded ? (S(), C(ee, { key: 3 }, [
                    Te.value.message ? (S(), C("p", yd, c(Te.value.message), 1)) : Te.value.cacheStatus === "missing" ? (S(), C("p", gd, c(h(l)("library", "No cached metadata overview exists yet")), 1)) : J("", !0),
                    qe.value ? (S(), C("p", _d, c(h(l)("library", "Last generated")) + ": " + c(qe.value), 1)) : J("", !0),
                    s("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: ve.refreshing,
                      onClick: Xt
                    }, c(ve.refreshing ? h(l)("library", "Refreshing metadata overview…") : h(l)("library", "Refresh metadata overview")), 9, vd),
                    s("div", wd, [
                      s("a", {
                        class: "button secondary",
                        href: Ze.value.reviewUrl || "?status=metadata_error"
                      }, c(h(l)("library", "Review metadata errors")), 9, Sd),
                      s("a", {
                        class: "button secondary",
                        href: Ue.value
                      }, c(h(l)("library", "Full review")), 9, Ed),
                      s("a", {
                        class: "button secondary",
                        href: _e.value
                      }, c(h(l)("library", "Export TSV")), 9, Cd),
                      s("a", {
                        class: "button secondary",
                        href: fe.value
                      }, c(h(l)("library", "Probe covers")), 9, Td)
                    ]),
                    s("div", xd, [
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Metadata errors")), 1),
                        s("p", Ad, c(Ze.value.total || 0), 1),
                        s("ul", null, [
                          (S(!0), C(ee, null, me(Ze.value.byExtension, (f) => (S(), C("li", {
                            key: f.extension
                          }, c(fr(f.extension)) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Archive/container check")), 1),
                        s("p", kd, c(ye.value.mismatches || 0), 1),
                        s("ul", null, [
                          (S(!0), C(ee, null, me(ye.value.byExtensionAndContainer, (f) => (S(), C("li", {
                            key: `${f.extension}-${f.actualContainerType}`
                          }, c(fr(f.extension)) + " · " + c(f.actualContainerType) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Cover health")), 1),
                        s("p", Rd, c(Rt.value.note), 1),
                        s("ul", null, [
                          (S(!0), C(ee, null, me(Rt.value.byFormat, (f) => (S(), C("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}`
                          }, c(fr(f.extension)) + " · nextcloudPreview: " + c(f.nextcloudPreview) + " · libraryCoverRoute: " + c(f.libraryCoverRoute) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, c(h(l)("library", "Cover support matrix")), 1),
                        s("p", Od, c(h(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        s("ul", null, [
                          (S(!0), C(ee, null, me(ze.value, (f) => (S(), C("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}-${f.count}`
                          }, c(fr(f.extension)) + " · Nextcloud/plugin preview: " + c(f.nextcloudPreview) + " · Library extraction: " + c(f.libraryCoverRoute) + " · " + c(f.count), 1))), 128))
                        ]),
                        s("p", Nd, c(h(l)("library", "Extractor tools")) + ": ZIP=" + c(ft.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + c(ft.value.sevenZipCommand || "missing") + " · RAR=" + c(ft.value.rarCommand || "missing") + " · bsdtar=" + c(ft.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ze.value.examples?.length ? (S(), C("details", Pd, [
                      s("summary", null, c(h(l)("library", "Example files and suggested actions")), 1),
                      s("ul", null, [
                        (S(!0), C(ee, null, me(Ze.value.examples, (f) => (S(), C("li", {
                          key: `${f.fileId}-${f.path}`
                        }, [
                          s("code", null, c(f.path), 1),
                          s("span", null, c(f.scanStatus) + " · " + c(f.scanError) + " · " + c(f.actualContainerType), 1),
                          s("strong", null, c(f.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : J("", !0)
                  ], 64)) : J("", !0),
                  s("div", Id, [
                    s("article", null, [
                      s("h4", null, c(h(l)("library", "Metadata-error queue")), 1),
                      s("p", Md, c(h(l)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: Ze.value.reviewUrl || "?status=metadata_error"
                      }, c(h(l)("library", "Open metadata-error rows")), 9, Ld),
                      s("a", {
                        class: "button secondary",
                        href: _e.value
                      }, c(h(l)("library", "Export metadata-error rows")), 9, Ud),
                      s("form", {
                        method: "post",
                        action: Le.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, Fd),
                        E[25] || (E[25] = s("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        E[26] || (E[26] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        s("button", Hd, c(h(l)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    s("article", null, [
                      s("h4", null, c(h(l)("library", "Scanner-conflict queue")), 1),
                      s("p", $d, c(h(l)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: Fe.value
                      }, c(h(l)("library", "Open scanner-conflict rows")), 9, jd),
                      s("form", {
                        method: "post",
                        action: Le.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, Bd),
                        E[27] || (E[27] = s("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        E[28] || (E[28] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        s("button", qd, c(h(l)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, id)
        ]),
        A.value ? (S(), C("p", zd, c(A.value), 1)) : J("", !0),
        Oe.value ? (S(), C("section", Wd, [
          s("article", Gd, [
            s("p", Kd, c(h(l)("library", "Home dashboard")), 1),
            s("h3", Yd, c(h(l)("library", "Continue reading")), 1),
            s("p", Xd, c(h(l)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item without opening admin tools.")), 1),
            s("div", Jd, [
              be.value[0] ? (S(), C("a", {
                key: 0,
                class: "button primary",
                href: be.value[0].openUrl
              }, c(h(l)("library", "Read now")), 9, Zd)) : J("", !0),
              be.value[0] ? (S(), C("button", {
                key: 1,
                type: "button",
                class: "button secondary",
                onClick: E[0] || (E[0] = (f) => Ft(be.value[0]))
              }, c(h(l)("library", "Open details drawer")), 1)) : J("", !0)
            ])
          ]),
          s("nav", {
            class: "library-home-rail",
            "aria-label": h(l)("library", "Recently added")
          }, [
            s("h4", null, c(h(l)("library", "Recently added")), 1),
            (S(!0), C(ee, null, me(he.value, (f) => (S(), C("button", {
              key: `recent-${f.id}`,
              type: "button",
              class: "library-home-mini-card",
              onClick: (ne) => Ft(f)
            }, [
              s("img", {
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, tf),
              s("span", null, c(f.title), 1)
            ], 8, ef))), 128))
          ], 8, Qd),
          xe.value ? (S(), C("article", rf, [
            s("p", nf, c(h(l)("library", "Rediscover")), 1),
            s("strong", null, c(xe.value.title), 1),
            s("span", af, c(xe.value.creators || xe.value.publication || xe.value.cachedPath), 1),
            s("button", {
              type: "button",
              class: "button secondary",
              onClick: E[1] || (E[1] = (f) => Ft(xe.value))
            }, c(h(l)("library", "Peek")), 1)
          ])) : J("", !0)
        ])) : J("", !0),
        s("section", sf, [
          s("div", lf, [
            s("p", of, c(h(l)("library", "Useful views")), 1),
            s("h3", cf, c(h(l)("library", "Useful views")), 1),
            s("p", uf, c(h(l)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            s("p", df, c(h(l)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          s("nav", {
            class: "library-useful-view-links",
            "aria-label": h(l)("library", "Built-in useful catalogue views")
          }, [
            (S(!0), C(ee, null, me(fi.value, (f) => (S(), C("a", {
              key: f.key,
              class: "library-useful-view-chip",
              href: Xr(f.filters),
              title: f.description
            }, [
              s("strong", null, c(h(l)("library", f.label)), 1),
              s("span", null, c(h(l)("library", f.description)), 1),
              s("small", hf, c(Number(Kr.value[f.key] || 0)), 1)
            ], 8, pf))), 128))
          ], 8, ff)
        ]),
        s("section", mf, [
          s("div", bf, [
            s("p", yf, c(h(l)("library", "Metadata cleanup")), 1),
            s("h3", gf, c(h(l)("library", "Weak metadata cockpit")), 1),
            s("p", _f, c(h(l)("library", "Counts are derived from indexed metadata and scanner provenance, not manual lists; compact cards stay browse-first while Details carries repair actions.")), 1)
          ]),
          s("nav", {
            class: "library-weak-metadata-links",
            "aria-label": h(l)("library", "Weak metadata catalogue views")
          }, [
            (S(!0), C(ee, null, me(vr.value, (f) => (S(), C("a", {
              key: f.key,
              class: "library-weak-metadata-card",
              href: Xr(f.filters),
              title: f.description
            }, [
              s("span", null, [
                s("strong", null, c(h(l)("library", f.label)), 1),
                s("small", null, c(h(l)("library", f.description)), 1)
              ]),
              s("b", null, c(Number(Kr.value[f.key] || 0)), 1)
            ], 8, wf))), 128))
          ], 8, vf)
        ]),
        s("section", Sf, [
          s("div", Ef, [
            s("p", Cf, c(h(l)("library", "Custom collections")), 1),
            s("h3", Tf, c(h(l)("library", "Custom collections")), 1),
            s("p", xf, c(h(l)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          s("form", {
            method: "post",
            action: H.value,
            class: "library-saved-collection-save-form"
          }, [
            s("input", {
              type: "hidden",
              name: "requesttoken",
              value: ce.value
            }, null, 8, kf),
            s("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: xn.value
            }, null, 8, Rf),
            s("label", null, [
              pe(c(h(l)("library", "Collection name")) + " ", 1),
              s("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: h(l)("library", "e.g. Bremen photo books"),
                disabled: !_r.value,
                autocomplete: "off"
              }, null, 8, Of)
            ]),
            s("button", {
              type: "submit",
              class: "button secondary",
              disabled: !_r.value
            }, c(h(l)("library", "Save current view")), 9, Nf)
          ], 8, Af),
          _r.value ? J("", !0) : (S(), C("p", Pf, c(h(l)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          K.value.length > 0 ? (S(), C("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": h(l)("library", "Saved custom collections")
          }, [
            (S(!0), C(ee, null, me(K.value, (f) => (S(), C("article", {
              key: f.id,
              class: "library-saved-collection-card"
            }, [
              s("a", {
                class: "library-saved-collection-link",
                href: Pe(f.filters)
              }, [
                s("strong", null, c(f.name), 1),
                s("span", null, c(Number(f.count || 0)) + " " + c(h(l)("library", "items")), 1)
              ], 8, Mf),
              s("form", {
                method: "post",
                action: dr(f.id),
                class: "library-saved-collection-delete-form"
              }, [
                s("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ce.value
                }, null, 8, Uf),
                s("button", Df, c(h(l)("library", "Delete")), 1)
              ], 8, Lf)
            ]))), 128))
          ], 8, If)) : J("", !0)
        ]),
        s("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": h(l)("library", "Quick catalogue filters"),
          onSubmit: Fn(He, ["prevent"])
        }, [
          (S(!0), C(ee, null, me($.value, (f) => (S(), C("input", {
            key: f.key,
            type: "hidden",
            name: f.key,
            value: f.value
          }, null, 8, Hf))), 128)),
          s("div", $f, [
            s("label", jf, [
              s("span", null, [
                pe(c(h(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                E[29] || (E[29] = s("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              Ke(s("input", {
                ref_key: "quickSearchInput",
                ref: _t,
                "onUpdate:modelValue": E[2] || (E[2] = (f) => M.q = f),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Gr
              }, null, 544), [
                [Ii, M.q]
              ])
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": h(l)("library", "Search catalogue")
            }, c(h(l)("library", "Search")), 9, Vf)
          ]),
          s("details", Bf, [
            s("summary", null, c(h(l)("library", "Filter & sort")), 1),
            s("div", qf, [
              s("label", null, [
                pe(c(h(l)("library", "Sort")) + " ", 1),
                Ke(s("select", {
                  "onUpdate:modelValue": E[3] || (E[3] = (f) => M.sort = f),
                  name: "sort",
                  onChange: He
                }, [
                  s("option", zf, c(h(l)("library", "Title")), 1),
                  s("option", Wf, c(h(l)("library", "Recently added")), 1),
                  s("option", Gf, c(h(l)("library", "Publication date")), 1),
                  s("option", Kf, c(h(l)("library", "Series")), 1),
                  s("option", Yf, c(h(l)("library", "Recently opened")), 1),
                  s("option", Xf, c(h(l)("library", "Format")), 1)
                ], 544), [
                  [lt, M.sort]
                ])
              ]),
              s("label", null, [
                pe(c(h(l)("library", "Starred")) + " ", 1),
                Ke(s("select", {
                  "onUpdate:modelValue": E[4] || (E[4] = (f) => M.starred = f),
                  name: "starred",
                  onChange: He
                }, [
                  s("option", Jf, c(h(l)("library", "All")), 1),
                  s("option", Zf, c(h(l)("library", "Starred")), 1)
                ], 544), [
                  [lt, M.starred]
                ])
              ]),
              s("label", null, [
                pe(c(h(l)("library", "Size")) + " ", 1),
                s("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: He
                }, [
                  (S(), C(ee, null, me(n, (f) => s("option", {
                    key: f,
                    value: f
                  }, c(f), 9, ep)), 64))
                ], 40, Qf)
              ]),
              s("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": h(l)("library", "Apply catalogue filters")
              }, c(h(l)("library", "Apply filters")), 9, tp),
              s("a", {
                href: "?",
                class: "button secondary",
                "aria-label": h(l)("library", "Clear catalogue filters")
              }, c(h(l)("library", "Clear all")), 9, rp)
            ])
          ])
        ], 40, Ff),
        s("details", np, [
          s("summary", ip, c(h(l)("library", "Show catalogue filters")), 1),
          s("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": h(l)("library", "Catalogue search and filters"),
            onSubmit: Fn(He, ["prevent"])
          }, [
            s("label", null, [
              pe(c(h(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              Ke(s("input", {
                "onUpdate:modelValue": E[5] || (E[5] = (f) => M.q = f),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Ii, M.q]
              ])
            ]),
            s("p", sp, c(h(l)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            s("label", null, [
              pe(c(h(l)("library", "Type")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[6] || (E[6] = (f) => M.type = f),
                name: "type"
              }, [
                s("option", lp, c(h(l)("library", "All types")), 1),
                (S(), C(ee, null, me(r, (f) => s("option", {
                  key: f,
                  value: f
                }, c(f), 9, op)), 64))
              ], 512), [
                [lt, M.type]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Series / periodical")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[7] || (E[7] = (f) => M.publication = f),
                name: "publication"
              }, [
                s("option", cp, c(h(l)("library", "All series and periodicals")), 1),
                (S(!0), C(ee, null, me(v.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, up))), 128))
              ], 512), [
                [lt, M.publication]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Publication year")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[8] || (E[8] = (f) => M.year = f),
                name: "year"
              }, [
                s("option", dp, c(h(l)("library", "All years")), 1),
                (S(!0), C(ee, null, me(I.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, fp))), 128))
              ], 512), [
                [lt, M.year]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Creator")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[9] || (E[9] = (f) => M.creator = f),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                s("option", pp, c(h(l)("library", "All creators")), 1),
                (S(!0), C(ee, null, me(j.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, hp))), 128))
              ], 512), [
                [lt, M.creator]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Nextcloud tag")) + " ", 1),
              Ke(s("input", {
                "onUpdate:modelValue": E[10] || (E[10] = (f) => M.tag = f),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Ii, M.tag]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Format")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[11] || (E[11] = (f) => M.format = f),
                name: "format"
              }, [
                s("option", mp, c(h(l)("library", "All formats")), 1),
                (S(!0), C(ee, null, me(p.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(fr(f)), 9, bp))), 128))
              ], 512), [
                [lt, M.format]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Shelf")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[12] || (E[12] = (f) => M.shelf = f),
                name: "shelf"
              }, [
                s("option", yp, c(h(l)("library", "All shelves")), 1),
                (S(!0), C(ee, null, me(u.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, gp))), 128))
              ], 512), [
                [lt, M.shelf]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Scan status")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[13] || (E[13] = (f) => M.status = f),
                name: "status"
              }, [
                s("option", _p, c(h(l)("library", "All scan statuses")), 1),
                (S(!0), C(ee, null, me(ae.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, vp))), 128))
              ], 512), [
                [lt, M.status]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Workflow status")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[14] || (E[14] = (f) => M.workflowStatus = f),
                name: "workflowStatus"
              }, [
                s("option", wp, c(h(l)("library", "All workflow statuses")), 1),
                (S(!0), C(ee, null, me(W.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, Sp))), 128))
              ], 512), [
                [lt, M.workflowStatus]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Genre")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[15] || (E[15] = (f) => M.genre = f),
                name: "genre"
              }, [
                s("option", Ep, c(h(l)("library", "All genres")), 1),
                (S(!0), C(ee, null, me(ue.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, Cp))), 128))
              ], 512), [
                [lt, M.genre]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Classification")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[16] || (E[16] = (f) => M.classification = f),
                name: "classification"
              }, [
                s("option", Tp, c(h(l)("library", "All classifications")), 1),
                (S(!0), C(ee, null, me(se.value, (f) => (S(), C("option", {
                  key: f,
                  value: f
                }, c(f), 9, xp))), 128))
              ], 512), [
                [lt, M.classification]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Scanner conflicts")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[17] || (E[17] = (f) => M.scannerConflicts = f),
                name: "scannerConflicts"
              }, [
                s("option", Ap, c(h(l)("library", "All metadata")), 1),
                s("option", kp, c(h(l)("library", "Needs review")), 1)
              ], 512), [
                [lt, M.scannerConflicts]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Starred")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[18] || (E[18] = (f) => M.starred = f),
                name: "starred"
              }, [
                s("option", Rp, c(h(l)("library", "All publications")), 1),
                s("option", Op, c(h(l)("library", "Starred only")), 1)
              ], 512), [
                [lt, M.starred]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Sort")) + " ", 1),
              Ke(s("select", {
                "onUpdate:modelValue": E[19] || (E[19] = (f) => M.sort = f),
                name: "sort"
              }, [
                s("option", Np, c(h(l)("library", "Title")), 1),
                s("option", Pp, c(h(l)("library", "Recently added")), 1),
                s("option", Ip, c(h(l)("library", "Publication date")), 1),
                s("option", Mp, c(h(l)("library", "Series / periodical")), 1),
                s("option", Lp, c(h(l)("library", "Recently opened")), 1),
                s("option", Up, c(h(l)("library", "Format")), 1)
              ], 512), [
                [lt, M.sort]
              ])
            ]),
            s("label", null, [
              pe(c(h(l)("library", "Page size")) + " ", 1),
              s("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (S(), C(ee, null, me(n, (f) => s("option", {
                  key: f,
                  value: f
                }, c(f), 9, Fp)), 64))
              ], 8, Dp)
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": h(l)("library", "Apply catalogue filters")
            }, c(h(l)("library", "Apply filters")), 9, Hp),
            s("a", {
              href: "?",
              class: "button secondary",
              "aria-label": h(l)("library", "Clear catalogue filters")
            }, c(h(l)("library", "Clear")), 9, $p),
            s("a", {
              href: Fe.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, c(h(l)("library", "Review scanner conflicts")), 9, jp)
          ], 40, ap)
        ]),
        at.value ? (S(), C("section", Vp, [
          s("p", Bp, c(_.value), 1),
          s("h3", qp, c(m.value), 1),
          s("p", zp, c(it.value ? h(l)("library", "Items by this creator, sorted by publication context when available.") : Ct.value ? h(l)("library", "Items from this publication year, sorted by publication date when available.") : h(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          s("div", Wp, [
            s("span", null, c(z.value.total) + " " + c(h(l)("library", "items")), 1),
            w.value?.earliestYear && w.value?.latestYear ? (S(), C("span", Gp, c(w.value.earliestYear) + "–" + c(w.value.latestYear), 1)) : J("", !0),
            w.value?.datedCount ? (S(), C("span", Kp, c(w.value.datedCount) + " " + c(h(l)("library", "dated")), 1)) : J("", !0),
            w.value?.undatedCount > 0 ? (S(), C("span", Yp, c(w.value.undatedCount) + " " + c(h(l)("library", "undated")), 1)) : J("", !0)
          ]),
          yt.value && w.value ? (S(), C("aside", Xp, [
            s("strong", null, c(h(l)("library", "Publication contents")), 1),
            s("span", null, c(w.value.itemCount) + " " + c(h(l)("library", "items")), 1),
            w.value.earliestYear && w.value.latestYear ? (S(), C("span", Jp, c(w.value.earliestYear) + "–" + c(w.value.latestYear), 1)) : J("", !0),
            s("span", null, c(w.value.datedCount) + " " + c(h(l)("library", "with issue/date coverage")), 1),
            w.value.undatedCount > 0 ? (S(), C("span", Zp, c(w.value.undatedCount) + " " + c(h(l)("library", "without dates yet")), 1)) : J("", !0),
            s("span", null, c(h(l)("library", "read-only grouping")), 1)
          ])) : J("", !0),
          yt.value && w.value?.issueGroups?.length ? (S(), C("section", Qp, [
            s("div", null, [
              s("p", eh, c(h(l)("library", "Issue order")), 1),
              s("h4", th, c(h(l)("library", "Read-only issue/date grouping")), 1),
              s("p", rh, c(h(l)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")), 1)
            ]),
            s("div", nh, [
              (S(!0), C(ee, null, me(w.value.issueGroups, (f) => (S(), C("a", {
                key: `strip-${f.label}`,
                class: "library-issue-strip-card",
                href: f.items?.[0]?.detailsUrl || "#"
              }, [
                s("span", null, c(f.label), 1),
                s("strong", null, c(f.items?.[0]?.issueLabel || h(l)("library", "Issue")), 1),
                s("small", null, c(f.items?.length || 0) + " " + c(h(l)("library", "items")), 1)
              ], 8, ih))), 128))
            ]),
            w.value.gapRanges?.length ? (S(), C("p", ah, c(h(l)("library", "Gap")) + ": " + c(w.value.gapRanges.join(", ")), 1)) : J("", !0),
            (S(!0), C(ee, null, me(w.value.issueGroups, (f) => (S(), C("div", {
              key: f.label,
              class: "library-publication-issue-group"
            }, [
              s("h5", null, c(f.label), 1),
              s("ol", null, [
                (S(!0), C(ee, null, me(f.items, (ne, Ge) => (S(), C("li", {
                  key: ne.itemId
                }, [
                  s("span", sh, c(ne.issueLabel), 1),
                  s("a", {
                    href: ne.detailsUrl || "#"
                  }, c(ne.title), 9, lh),
                  s("small", null, [
                    pe(c(ne.publicationType), 1),
                    ne.publicationDate ? (S(), C(ee, { key: 0 }, [
                      pe(" · " + c(ne.publicationDate), 1)
                    ], 64)) : J("", !0)
                  ]),
                  s("small", oh, [
                    Ge > 0 ? (S(), C(ee, { key: 0 }, [
                      pe(c(h(l)("library", "Previous issue")), 1)
                    ], 64)) : J("", !0),
                    Ge > 0 && Ge < f.items.length - 1 ? (S(), C(ee, { key: 1 }, [
                      pe(" · ")
                    ], 64)) : J("", !0),
                    Ge < f.items.length - 1 ? (S(), C(ee, { key: 2 }, [
                      pe(c(h(l)("library", "Next issue")), 1)
                    ], 64)) : J("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            w.value.unknownIssueItems?.length ? (S(), C("details", ch, [
              s("summary", null, c(h(l)("library", "Unknown issue/date")) + " · " + c(w.value.unknownIssueItems.length), 1),
              s("p", uh, c(h(l)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")), 1)
            ])) : J("", !0)
          ])) : J("", !0),
          s("p", null, [
            s("a", dh, c(h(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : J("", !0),
        s("nav", fh, [
          s("span", ph, c(h(l)("library", "Compact / Gallery / Shelf")), 1),
          s("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: qt({ active: Q.value === "compact" }),
            "aria-pressed": Q.value === "compact" ? "true" : "false",
            onClick: E[20] || (E[20] = (f) => Yr("compact"))
          }, c(h(l)("library", "Compact")), 11, hh),
          s("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: qt({ active: Q.value === "gallery" }),
            "aria-pressed": Q.value === "gallery" ? "true" : "false",
            onClick: E[21] || (E[21] = (f) => Yr("gallery"))
          }, c(h(l)("library", "Gallery")), 11, mh),
          s("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: qt({ active: Q.value === "shelf" }),
            "aria-pressed": Q.value === "shelf" ? "true" : "false",
            onClick: E[22] || (E[22] = (f) => Yr("shelf"))
          }, c(h(l)("library", "Shelf")), 11, bh)
        ]),
        s("div", yh, [
          s("p", gh, [
            pe(c(h(l)("library", "Showing")) + " " + c(z.value.from) + "–" + c(z.value.to) + " " + c(h(l)("library", "of")) + " " + c(z.value.total) + " " + c(h(l)("library", "catalogue items")), 1),
            N.value.length > 0 ? (S(), C("span", _h, [
              E[30] || (E[30] = pe(" · ", -1)),
              s("a", vh, c(h(l)("library", "Clear all filters")), 1)
            ])) : J("", !0)
          ]),
          s("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": h(l)("library", "Catalogue pagination")
          }, [
            s("span", Sh, [
              pe(c(h(l)("library", "Page")) + " " + c(z.value.page), 1),
              z.value.total > 0 ? (S(), C("span", Eh, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : J("", !0)
            ]),
            z.value.previousUrl ? (S(), C("a", {
              key: 0,
              href: z.value.previousUrl
            }, c(h(l)("library", "Previous")), 9, Ch)) : (S(), C("span", Th, c(h(l)("library", "Previous")), 1)),
            z.value.nextUrl ? (S(), C("a", {
              key: 2,
              href: z.value.nextUrl
            }, c(h(l)("library", "Next")), 9, xh)) : (S(), C("span", Ah, c(h(l)("library", "Next")), 1))
          ], 8, wh)
        ]),
        s("div", kh, [
          s("details", {
            class: "library-batch-actions",
            "aria-label": h(l)("library", "Batch actions for current results")
          }, [
            s("summary", null, [
              pe(c(h(l)("library", "Batch")) + " ", 1),
              s("span", Oh, c(z.value.total) + " " + c(h(l)("library", "Current filter result")), 1)
            ]),
            s("form", {
              method: "post",
              action: Le.value,
              class: "library-batch-tag-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Ph),
              (S(!0), C(ee, null, me(te.value, (f) => (S(), C("input", {
                key: f.key,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Ih))), 128)),
              s("label", null, [
                s("span", null, c(h(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: h(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Mh)
              ]),
              s("button", Lh, c(h(l)("library", "Apply Nextcloud tag to current results")), 1),
              s("p", Uh, c(h(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Nh),
            s("form", {
              method: "post",
              action: nt.value,
              class: "library-batch-tag-remove-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Fh),
              (S(!0), C(ee, null, me(te.value, (f) => (S(), C("input", {
                key: `remove-tag-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Hh))), 128)),
              s("label", null, [
                s("span", null, c(h(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: h(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, $h)
              ]),
              s("button", jh, c(h(l)("library", "Remove tag from current results")), 1),
              s("p", Vh, c(h(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, Dh),
            s("form", {
              method: "post",
              action: dt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, qh),
              (S(!0), C(ee, null, me(te.value, (f) => (S(), C("input", {
                key: `reset-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, zh))), 128)),
              E[31] || (E[31] = s("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              s("button", Wh, c(h(l)("library", "Reset filtered metadata")), 1),
              s("p", Gh, c(h(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Bh),
            s("form", {
              method: "post",
              action: Xe.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Yh),
              (S(!0), C(ee, null, me(te.value, (f) => (S(), C("input", {
                key: `edit-preview-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Xh))), 128)),
              s("label", null, [
                s("span", null, c(h(l)("library", "Metadata field")), 1),
                s("select", Jh, [
                  s("option", Zh, c(h(l)("library", "Publication type")), 1),
                  s("option", Qh, c(h(l)("library", "Subtitle")), 1),
                  s("option", em, c(h(l)("library", "Creators")), 1),
                  s("option", tm, c(h(l)("library", "Series / periodical")), 1),
                  s("option", rm, c(h(l)("library", "Publication date")), 1),
                  s("option", nm, c(h(l)("library", "Language")), 1),
                  s("option", im, c(h(l)("library", "Publisher")), 1),
                  s("option", am, c(h(l)("library", "Genres")), 1),
                  s("option", sm, c(h(l)("library", "Classifications")), 1)
                ])
              ]),
              s("label", null, [
                s("span", null, c(h(l)("library", "Preview value")), 1),
                E[32] || (E[32] = s("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              s("button", lm, c(h(l)("library", "Preview & apply metadata edit")), 1),
              s("p", om, c(h(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Kh),
            s("form", {
              method: "post",
              action: Et.value,
              class: "library-batch-cover-refresh-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, um),
              (S(!0), C(ee, null, me(te.value, (f) => (S(), C("input", {
                key: `cover-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, dm))), 128)),
              s("button", fm, c(h(l)("library", "Request fresh cover previews")), 1),
              s("p", pm, c(h(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, cm)
          ], 8, Rh),
          s("details", hm, [
            s("summary", null, c(h(l)("library", "Browse")), 1),
            s("div", mm, [
              y.value.length > 0 ? (S(), C("section", bm, [
                s("h3", ym, c(h(l)("library", "Top series and periodicals")), 1),
                s("p", gm, c(h(l)("library", "Jump into recurring publications with one click.")), 1),
                s("ul", null, [
                  (S(!0), C(ee, null, me(y.value, (f) => (S(), C("li", {
                    key: f.publication
                  }, [
                    s("a", {
                      href: Zr(f.publication)
                    }, c(f.publication), 9, _m),
                    s("span", vm, c(f.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (S(), C("section", wm, [
                s("h3", Sm, c(h(l)("library", "No series or periodicals found yet")), 1),
                s("p", Em, c(h(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : J("", !0),
              I.value.length > 0 ? (S(), C("section", Cm, [
                s("h3", Tm, c(h(l)("library", "Top publication years")), 1),
                s("ul", null, [
                  (S(!0), C(ee, null, me(I.value, (f) => (S(), C("li", { key: f }, [
                    s("a", {
                      href: An(f)
                    }, c(f), 9, xm)
                  ]))), 128))
                ])
              ])) : J("", !0),
              j.value.length > 0 ? (S(), C("section", Am, [
                s("h3", km, c(h(l)("library", "Top creators")), 1),
                s("ul", null, [
                  (S(!0), C(ee, null, me(j.value, (f) => (S(), C("li", { key: f }, [
                    s("a", {
                      href: kn(f)
                    }, c(f), 9, Rm)
                  ]))), 128))
                ])
              ])) : J("", !0)
            ])
          ])
        ]),
        N.value.length > 0 ? (S(), C("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": h(l)("library", "Active filters")
        }, [
          s("span", null, c(h(l)("library", "Active filters")), 1),
          (S(!0), C(ee, null, me(N.value, (f) => (S(), C("a", {
            key: f.key,
            href: Ir(f.key),
            class: "library-filter-chip",
            "aria-label": `${h(l)("library", "Remove filter")}: ${f.label}`
          }, [
            s("strong", null, c(f.label) + ":", 1),
            pe(" " + c(f.value) + " ", 1),
            E[33] || (E[33] = s("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Nm))), 128))
        ], 8, Om)) : J("", !0),
        o.value.length === 0 ? (S(), C("div", {
          key: 4,
          class: qt(["library-empty-content", { "library-first-run-guidance": k.value || L.value, "library-filter-empty-state": D.value && !k.value && !L.value }]),
          role: "status"
        }, [
          k.value ? (S(), C(ee, { key: 0 }, [
            s("h3", null, c(h(l)("library", "Start with one Library root")), 1),
            s("p", Pm, c(h(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            s("p", Im, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(h(l)("library", "Add a Library root")), 9, Mm),
              s("span", Lm, c(h(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : L.value ? (S(), C(ee, { key: 1 }, [
            s("h3", null, c(h(l)("library", "No enabled Library roots")), 1),
            s("p", Um, c(h(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            s("p", Dm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(h(l)("library", "Open Library settings")), 9, Fm)
            ])
          ], 64)) : D.value ? (S(), C(ee, { key: 2 }, [
            s("h3", null, c(h(l)("library", "No matches for the current filters")), 1),
            s("p", Hm, c(h(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            s("p", $m, [
              s("a", {
                href: di(),
                class: "button secondary"
              }, c(h(l)("library", "Clear search")), 9, jm),
              s("a", Vm, c(h(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (S(), C(ee, { key: 3 }, [
            s("h3", null, c(h(l)("library", "No catalogue items yet")), 1),
            s("p", Bm, c(h(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            s("p", qm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, c(h(l)("library", "Run a scan from settings")), 9, zm)
            ])
          ], 64))
        ], 2)) : (S(), C("div", {
          key: 5,
          class: qt(["library-cover-gallery", P.value])
        }, [
          (S(!0), C(ee, null, me(o.value, (f) => (S(), C("article", {
            key: f.id,
            class: qt(["library-cover-card", { "library-cover-card--open": le[f.id] }])
          }, [
            s("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              s("img", {
                class: "library-cover-image",
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, Gm)
            ], 8, Wm),
            s("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: Fn((ne) => Qr(f, ne), ["prevent"])
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Ym),
              E[34] || (E[34] = s("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              s("input", {
                type: "hidden",
                name: "starred",
                value: f.starred ? "0" : "1"
              }, null, 8, Xm),
              s("button", {
                type: "submit",
                class: qt(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? h(l)("library", "Unstar this publication") : h(l)("library", "Star this publication"),
                "aria-label": f.starred ? h(l)("library", "Unstar this publication") : h(l)("library", "Star this publication"),
                onClick: Fn((ne) => Qr(f, ne), ["prevent"])
              }, c(f.starred ? "★" : "☆"), 11, Jm)
            ], 40, Km),
            s("div", Zm, [
              s("div", Qm, [
                s("h3", null, [
                  f.starred ? (S(), C("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": h(l)("library", "Starred")
                  }, "★", 8, eb)) : J("", !0),
                  pe(c(f.title), 1)
                ]),
                s("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, c(h(l)("library", "Read")), 9, tb)
              ]),
              s("details", {
                class: "library-cover-details",
                onToggle: (ne) => pi(f.id, ne)
              }, [
                s("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${h(l)("library", "Show details and actions")}: ${f.title}`
                }, c(h(l)("library", "Details")), 9, nb),
                s("div", ib, [
                  f.creators ? (S(), C("p", ab, c(f.creators), 1)) : J("", !0),
                  s("dl", sb, [
                    s("div", lb, [
                      s("dt", null, c(h(l)("library", "Type")), 1),
                      s("dd", null, c(f.publicationType), 1)
                    ]),
                    f.publication ? (S(), C("div", ob, [
                      s("dt", null, c(h(l)("library", "Series")), 1),
                      s("dd", null, c(f.publication), 1)
                    ])) : J("", !0),
                    f.publicationDate ? (S(), C("div", cb, [
                      s("dt", null, c(h(l)("library", "Date")), 1),
                      s("dd", null, c(f.publicationDate), 1)
                    ])) : J("", !0),
                    f.workflowStatus ? (S(), C("div", ub, [
                      s("dt", null, c(h(l)("library", "Status")), 1),
                      s("dd", null, c(f.workflowStatus), 1)
                    ])) : J("", !0),
                    f.hasScannerConflict ? (S(), C("div", db, [
                      s("dt", null, c(h(l)("library", "Review")), 1),
                      s("dd", null, c(f.scannerConflictCount) + " fields", 1)
                    ])) : J("", !0),
                    f.lastOpenedAt ? (S(), C("div", fb, [
                      s("dt", null, c(h(l)("library", "Last opened")), 1),
                      s("dd", null, c(f.lastOpenedAt), 1)
                    ])) : J("", !0),
                    f.extension ? (S(), C("div", pb, [
                      s("dt", null, c(h(l)("library", "Format")) + ":", 1),
                      s("dd", null, c(fr(f.extension)), 1)
                    ])) : J("", !0),
                    f.shelf ? (S(), C("div", hb, [
                      s("dt", null, c(h(l)("library", "Shelf")), 1),
                      s("dd", null, c(f.shelf), 1)
                    ])) : J("", !0)
                  ]),
                  f.description ? (S(), C("p", mb, c(f.description), 1)) : J("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (S(), C("p", bb, [
                    pe(" scanStatus: " + c(f.scanStatus || "unknown"), 1),
                    f.scanError ? (S(), C("span", yb, " · scanError: " + c(f.scanError), 1)) : J("", !0)
                  ])) : J("", !0),
                  s("div", gb, [
                    Jr(f).length === 0 ? (S(), C("span", _b, "No Nextcloud tags")) : (S(!0), C(ee, { key: 1 }, me(Jr(f), (ne) => (S(), C("span", {
                      key: ne.id,
                      class: "library-tag"
                    }, c(ne.name), 1))), 128))
                  ]),
                  s("p", vb, [
                    s("a", {
                      href: f.filesUrl
                    }, c(h(l)("library", "Show in Files")), 9, wb),
                    E[35] || (E[35] = pe(" · ", -1)),
                    s("a", {
                      href: f.downloadUrl
                    }, c(h(l)("library", "Download source")), 9, Sb),
                    E[36] || (E[36] = pe(" · ", -1)),
                    s("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (ne) => Ft(f)
                    }, c(h(l)("library", "Details drawer")), 9, Eb),
                    E[37] || (E[37] = pe(" · ", -1)),
                    s("a", {
                      href: f.detailsUrl
                    }, c(h(l)("library", "Details")), 9, Cb)
                  ])
                ])
              ], 40, rb)
            ])
          ], 2))), 128))
        ], 2)),
        o.value.length > 0 ? (S(), C("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": h(l)("library", "Catalogue pagination")
        }, [
          s("span", xb, [
            pe(c(h(l)("library", "Page")) + " " + c(z.value.page), 1),
            z.value.total > 0 ? (S(), C("span", Ab, " · " + c(z.value.from) + "–" + c(z.value.to), 1)) : J("", !0)
          ]),
          z.value.previousUrl ? (S(), C("a", {
            key: 0,
            href: z.value.previousUrl
          }, c(h(l)("library", "Previous")), 9, kb)) : (S(), C("span", Rb, c(h(l)("library", "Previous")), 1)),
          z.value.nextUrl ? (S(), C("a", {
            key: 2,
            href: z.value.nextUrl
          }, c(h(l)("library", "Next")), 9, Ob)) : (S(), C("span", Nb, c(h(l)("library", "Next")), 1))
        ], 8, Tb)) : J("", !0),
        oe.value ? (S(), C("div", {
          key: 7,
          class: "library-detail-drawer-backdrop",
          onClick: Tt,
          "aria-hidden": "true"
        })) : J("", !0),
        oe.value ? (S(), C("aside", Pb, [
          s("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: Tt
          }, "×"),
          s("img", {
            class: "library-detail-drawer-cover",
            src: oe.value.coverUrl,
            alt: `Cover for ${oe.value.title}`,
            loading: "lazy"
          }, null, 8, Ib),
          s("p", Mb, c(oe.value.publicationType || h(l)("library", "Publication")), 1),
          s("h3", Lb, c(oe.value.title), 1),
          oe.value.creators ? (S(), C("p", Ub, c(oe.value.creators), 1)) : J("", !0),
          oe.value.description ? (S(), C("p", Db, c(oe.value.description), 1)) : J("", !0),
          s("dl", Fb, [
            oe.value.publication ? (S(), C("div", Hb, [
              s("dt", null, c(h(l)("library", "Series")), 1),
              s("dd", null, c(oe.value.publication), 1)
            ])) : J("", !0),
            oe.value.publicationDate ? (S(), C("div", $b, [
              s("dt", null, c(h(l)("library", "Date")), 1),
              s("dd", null, c(oe.value.publicationDate), 1)
            ])) : J("", !0),
            oe.value.shelf ? (S(), C("div", jb, [
              s("dt", null, c(h(l)("library", "Shelf")), 1),
              s("dd", null, c(oe.value.shelf), 1)
            ])) : J("", !0)
          ]),
          s("p", Vb, [
            s("a", {
              class: "button primary",
              href: oe.value.openUrl
            }, c(h(l)("library", "Read")), 9, Bb),
            s("a", {
              class: "button secondary",
              href: oe.value.detailsUrl
            }, c(h(l)("library", "View full details")), 9, qb)
          ]),
          s("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": h(l)("library", "Browse neighbouring items")
          }, [
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !Ot.value,
              onClick: E[23] || (E[23] = (f) => gt(Ot.value))
            }, c(h(l)("library", "Previous issue")), 9, Wb),
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !Dt.value,
              onClick: E[24] || (E[24] = (f) => gt(Dt.value))
            }, c(h(l)("library", "Next issue")), 9, Gb)
          ], 8, zb)
        ])) : J("", !0)
      ])
    ]));
  }
}, vs = fu("library", "catalogue", {}), Bn = document.querySelector("#library-vue-root"), ws = {
  ...vs,
  requestToken: Bn?.dataset.requestToken || vs.requestToken || ""
};
function Y(e) {
  return String(e ?? "");
}
function Ll(e) {
  return Y(e).toUpperCase();
}
function Yb(e, t, r, n = Y) {
  for (const i of t) {
    const a = document.createElement("option");
    a.value = Y(i), a.textContent = n(i), Y(i) === Y(r) && (a.selected = !0), e.appendChild(a);
  }
}
function Ss(e, t, r, n, i = "") {
  const a = document.createElement("label");
  a.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = Y(n), o.placeholder = i, a.appendChild(o), e.appendChild(a);
}
function Dr(e, t, r, n, i, a, o = Y) {
  const u = document.createElement("label");
  u.textContent = t;
  const p = document.createElement("select");
  p.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, p.appendChild(v), Yb(p, a, n, o), u.appendChild(p), e.appendChild(u);
}
function Fr(e) {
  const t = Y(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Xb(e, t = {}) {
  return Y(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Y(e || t?.publication || ""))}`);
}
function Jb(e) {
  return Y(e.discoveryPage) === "publication";
}
function Zb(e, t = {}) {
  return Y(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Y(e))}`);
}
function ji(e) {
  return Y(e.discoveryPage) === "year";
}
function Qb(e, t = {}) {
  return Y(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Y(e))}`);
}
function Vi(e) {
  return Y(e.discoveryPage) === "creator";
}
function ey(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Y(n).trim() !== "");
}
function ty() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function ln(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function ry(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function ny(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), Ss(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Dr(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Ss(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), Dr(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], Ll), Dr(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), Dr(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), Dr(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Dr(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", l("library", "Apply catalogue filters")), i.textContent = l("library", "Apply filters");
  const a = document.createElement("a");
  return a.href = "?", a.className = "button secondary", a.setAttribute("aria-label", l("library", "Clear catalogue filters")), a.textContent = l("library", "Clear"), n.append(i, a), n;
}
function iy() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", a = document.createElement("p");
  return a.className = "library-notice library-batch-metadata-apply-result", a.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), a;
}
function ay(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let i = null;
  const a = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [w, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(w) || Y(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = w, j.value = Y(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = l("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = Y(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", a), o.appendChild(u), n.appendChild(o);
  const p = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [w, I, j, ae] of p) {
    const W = document.createElement("label");
    W.textContent = w;
    const ue = document.createElement("select");
    ue.name = I;
    for (const [se, z] of ae) {
      const M = document.createElement("option");
      M.value = Y(se), M.textContent = Y(z), Y(se) === Y(j) && (M.selected = !0), ue.appendChild(M);
    }
    ue.addEventListener("change", () => n.requestSubmit()), W.appendChild(ue), n.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", l("library", "Apply catalogue filters")), v.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(v, y), n;
}
function sy(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = Y(e.settingsUrl || ""), a = Y(e.metadataExportUrl || ""), o = Y(e.batchTagUrl || "/apps/library/bulk/tags"), u = Y(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), p = Y(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = Y(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Y(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), w = document.createElement("div");
  w.className = "library-vue-catalogue library-vue-fallback", w.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ae = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = l("library", "Publication catalogue");
  const ue = document.createElement("p");
  ue.className = "library-muted", ue.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ae.append(W, ue);
  const se = document.createElement("nav");
  if (se.className = "library-catalogue-toolbar", se.setAttribute("aria-label", l("library", "Library actions")), i) {
    const P = document.createElement("a");
    P.href = i, P.className = "button secondary", P.setAttribute("aria-label", "Open Library settings"), P.textContent = l("library", "Settings"), se.appendChild(P);
  }
  if (a) {
    const P = document.createElement("a");
    P.href = a, P.className = "button secondary", P.setAttribute("aria-label", "Export corrected metadata"), P.textContent = l("library", "Export corrected metadata"), se.appendChild(P);
  }
  if (e.metadataSidecarManifestUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarManifestUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar manifest"), P.textContent = l("library", "Sidecar manifest"), se.appendChild(P);
  }
  if (e.metadataSidecarBundleUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarBundleUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar ZIP"), P.textContent = l("library", "Sidecar ZIP"), se.appendChild(P);
  }
  j.append(ae, se), I.appendChild(j);
  const z = iy();
  z && I.appendChild(z), I.appendChild(ay(e, n));
  const M = document.createElement("details");
  M.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), M.append(V, ny(e, n)), I.appendChild(M), Jb(e) || ji(e) || Vi(e)) {
    const P = document.createElement("section");
    P.className = "library-discovery-header", P.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Vi(e) ? l("library", "Creator") : ji(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = Y(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = `${n.total ?? r.length} ${Vi(e) ? l("library", "items by this creator. Sorted by publication context when available.") : ji(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const le = document.createElement("a");
    le.href = "/apps/library/", le.className = "button secondary", le.textContent = l("library", "Back to full catalogue"), P.append(N, $, te, le), I.appendChild(P);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Me = document.createElement("a");
  Me.href = "?", Me.textContent = ` ${l("library", "Clear all filters")}`, ce.appendChild(Me), I.appendChild(ce);
  const Ne = document.createElement("details");
  Ne.className = "library-batch-actions";
  const Ve = document.createElement("summary");
  Ve.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const Le = Fr(e);
  Le && Ee.appendChild(Le);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = Y(N), Ee.appendChild($);
  }
  const nt = document.createElement("label");
  nt.textContent = l("library", "Apply Nextcloud tag to current results");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "nextcloudTagName", dt.placeholder = "batch-review", nt.appendChild(dt);
  const Xe = document.createElement("button");
  Xe.type = "submit", Xe.className = "button secondary", Xe.textContent = l("library", "Apply Nextcloud tag to current results");
  const Et = document.createElement("p");
  Et.className = "library-muted", Et.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(nt, Xe, Et);
  const Fe = document.createElement("form");
  Fe.method = "post", Fe.action = u, Fe.className = "library-batch-tag-remove-form";
  const Ue = Fr(e);
  Ue && Fe.appendChild(Ue);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = Y(N), Fe.appendChild($);
  }
  const _e = document.createElement("label");
  _e.textContent = l("library", "Nextcloud tag");
  const fe = document.createElement("input");
  fe.type = "text", fe.name = "nextcloudTagName", fe.setAttribute("list", "library-nextcloud-tag-suggestions"), fe.placeholder = l("library", "e.g. Review"), fe.autocomplete = "off", _e.appendChild(fe);
  const Be = document.createElement("button");
  Be.type = "submit", Be.className = "button secondary", Be.textContent = l("library", "Remove tag from current results");
  const ve = document.createElement("p");
  ve.className = "library-muted", ve.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Fe.append(_e, Be, ve);
  const Te = document.createElement("form");
  Te.method = "post", Te.action = p, Te.className = "library-batch-metadata-reset-form";
  const qe = Fr(e);
  qe && Te.appendChild(qe);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = Y(N), Te.appendChild($);
  }
  const Ze = document.createElement("input");
  Ze.type = "hidden", Ze.name = "scannerConflicts", Ze.value = "1";
  const ye = document.createElement("button");
  ye.type = "submit", ye.className = "button secondary", ye.textContent = l("library", "Reset filtered metadata");
  const Rt = document.createElement("p");
  Rt.className = "library-muted", Rt.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Te.append(Ze, ye, Rt);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = v, ze.className = "library-batch-metadata-edit-preview-form", ze.target = "_blank";
  const ft = Fr(e);
  ft && ze.appendChild(ft);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = Y(N), ze.appendChild($);
  }
  const yt = document.createElement("label");
  yt.textContent = l("library", "Metadata field");
  const Ct = document.createElement("select");
  Ct.name = "bulkEditField";
  for (const [P, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = P, $.textContent = l("library", N), Ct.appendChild($);
  }
  yt.appendChild(Ct);
  const it = document.createElement("label");
  it.textContent = l("library", "Preview value");
  const at = document.createElement("input");
  at.type = "text", at.name = "bulkEditValue", at.placeholder = "magazine, de, photography...", at.autocomplete = "off", it.appendChild(at);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = l("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = l("library", "Preview first, then apply from the review page."), ze.append(yt, it, m, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const O = Fr(e);
  O && _.appendChild(O);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = P, $.value = Y(N), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = l("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, k), Ne.append(Ve, Ee, Fe, Te, ze, _), I.appendChild(Ne);
  const L = document.createElement("nav");
  L.className = "library-pagination", L.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, L.appendChild(D), I.appendChild(L);
  const U = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], A = document.createElement("details");
  A.className = U.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = l("library", "Show top series and periodicals"), A.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = U.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const G = document.createElement("p");
  if (G.className = "library-muted", G.textContent = U.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), A.append(H, G), U.length > 0) {
    const P = document.createElement("ul");
    for (const N of U) {
      const $ = document.createElement("li"), te = document.createElement("a");
      te.href = Xb(N.publication, N), te.textContent = Y(N.publication);
      const le = document.createElement("span");
      le.className = "library-muted", le.textContent = `${N.itemCount} items`, $.append(te, le), P.appendChild($);
    }
    A.appendChild(P);
  }
  I.appendChild(A);
  const Z = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Z.length > 0) {
    const P = document.createElement("details");
    P.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = l("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top publication years");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const le = document.createElement("ul");
    for (const be of Z) {
      const he = document.createElement("li"), xe = document.createElement("a");
      xe.href = Zb(be, e), xe.textContent = Y(be), he.appendChild(xe), le.appendChild(he);
    }
    P.append(N, $, te, le), I.appendChild(P);
  }
  const Q = Array.isArray(e.creators) ? e.creators : [];
  if (Q.length > 0) {
    const P = document.createElement("details");
    P.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = l("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top creators");
    const te = document.createElement("p");
    te.className = "library-muted", te.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const le = document.createElement("ul");
    for (const be of Q) {
      const he = document.createElement("li"), xe = document.createElement("a");
      xe.href = Qb(be, e), xe.textContent = Y(be), he.appendChild(xe), le.appendChild(he);
    }
    P.append(N, $, te, le), I.appendChild(P);
  }
  if (r.length === 0) {
    const P = document.createElement("div"), N = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), te = ey(e);
    P.className = "library-empty-content", (N === 0 || $ === 0) && P.classList.add("library-first-run-guidance"), te && N > 0 && $ > 0 && P.classList.add("library-filter-empty-state"), P.setAttribute("role", "status");
    const le = document.createElement("h3"), be = document.createElement("p");
    be.className = "library-muted";
    const he = document.createElement("p");
    he.className = "library-empty-actions", N === 0 ? (le.textContent = l("library", "Start with one Library root"), be.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), ln(he, i, "button primary", l("library", "Add a Library root")), ry(he, l("library", "Run a scan after saving a root"))) : $ === 0 ? (le.textContent = l("library", "No enabled Library roots"), be.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), ln(he, i, "button primary", l("library", "Open Library settings"))) : te ? (le.textContent = l("library", "No matches for the current filters"), be.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), ln(he, ty(), "button secondary", l("library", "Clear search")), ln(he, "?", "button primary", l("library", "Clear all filters"))) : (le.textContent = l("library", "No catalogue items yet"), be.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), ln(he, i, "button primary", l("library", "Run a scan from settings"))), P.append(le, be, he), I.appendChild(P);
  } else {
    const P = document.createElement("div");
    P.className = "library-cover-gallery";
    for (const N of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const te = document.createElement("a");
      te.className = "library-cover-link", te.href = Y(N.openUrl || "#"), te.setAttribute("aria-label", `Read ${Y(N.title || "publication")}`);
      const le = document.createElement("img");
      le.className = "library-cover-image", le.src = Y(N.coverUrl || ""), le.alt = `Cover for ${Y(N.title || "publication")}`, le.loading = "lazy", te.appendChild(le);
      const be = Fr(e), he = document.createElement("form");
      he.method = "post", he.action = Y(N.starUrl || ""), he.className = "library-cover-star-form", be && he.appendChild(be);
      const xe = document.createElement("input");
      xe.type = "hidden", xe.name = "returnTo", xe.value = "catalogue";
      const Oe = document.createElement("input");
      Oe.type = "hidden", Oe.name = "starred", Oe.value = N.starred ? "0" : "1";
      const oe = document.createElement("button");
      oe.type = "submit", oe.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", oe.setAttribute("aria-pressed", N.starred ? "true" : "false"), oe.setAttribute("aria-label", N.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), oe.title = N.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), oe.textContent = N.starred ? "★" : "☆", he.append(xe, Oe, oe);
      const We = document.createElement("div");
      We.className = "library-cover-summary";
      const Ot = document.createElement("h3");
      if (Ot.textContent = Y(N.title || "Untitled publication"), We.appendChild(Ot), N.creators) {
        const xt = document.createElement("p");
        xt.className = "library-creator", xt.textContent = Y(N.creators), We.appendChild(xt);
      }
      const Dt = document.createElement("dl");
      Dt.className = "library-cover-detail-list";
      const Ft = [
        ["Type", Y(N.publicationType || "other")],
        ["Format", N.extension ? Ll(N.extension) : ""],
        ["Shelf", N.shelf ? Y(N.shelf) : ""]
      ].filter(([, xt]) => xt !== "");
      for (const [xt, gr] of Ft) {
        const $t = document.createElement("div");
        $t.className = "library-cover-detail-chip";
        const Xt = document.createElement("dt");
        Xt.textContent = xt;
        const He = document.createElement("dd");
        He.textContent = gr, $t.append(Xt, He), Dt.appendChild($t);
      }
      We.appendChild(Dt);
      const Tt = document.createElement("p"), gt = document.createElement("a");
      gt.href = Y(N.openUrl || "#"), gt.textContent = l("library", "Read");
      const _t = document.createElement("a");
      _t.href = Y(N.filesUrl || "#"), _t.textContent = l("library", "Show in Files");
      const Ht = document.createElement("a");
      Ht.href = Y(N.downloadUrl || "#"), Ht.textContent = l("library", "Download source");
      const ur = document.createElement("a");
      ur.href = Y(N.detailsUrl || "#"), ur.textContent = l("library", "Details"), Tt.append(gt, document.createTextNode(" · "), _t, document.createTextNode(" · "), Ht, document.createTextNode(" · "), ur), We.appendChild(Tt), $.append(te, he, We), P.appendChild($);
    }
    I.appendChild(P);
  }
  return w.appendChild(I), w;
}
if (Bn)
  try {
    cu(Kb, { state: ws }).mount(Bn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Bn.replaceChildren(sy(ws));
  }
//# sourceMappingURL=library-main.mjs.map
