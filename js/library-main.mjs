// @__NO_SIDE_EFFECTS__
function qi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, Mr = [], qt = () => {
}, yo = () => !1, Wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Kn = (e) => e.startsWith("onUpdate:"), et = Object.assign, zi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ja = Object.prototype.hasOwnProperty, Se = (e, t) => ja.call(e, t), ee = Array.isArray, dr = (e) => hn(e) === "[object Map]", wr = (e) => hn(e) === "[object Set]", _s = (e) => hn(e) === "[object Date]", ce = (e) => typeof e == "function", Ue = (e) => typeof e == "string", zt = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", go = (e) => (Ce(e) || ce(e)) && ce(e.then) && ce(e.catch), _o = Object.prototype.toString, hn = (e) => _o.call(e), Va = (e) => hn(e).slice(8, -1), vo = (e) => hn(e) === "[object Object]", Wi = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ qi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Ba = /-\w/g, Ot = Gn(
  (e) => e.replace(Ba, (t) => t.slice(1).toUpperCase())
), qa = /\B([A-Z])/g, xr = Gn(
  (e) => e.replace(qa, "-$1").toLowerCase()
), So = Gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ci = Gn(
  (e) => e ? `on${So(e)}` : ""
), Bt = (e, t) => !Object.is(e, t), In = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Eo = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vs;
const Xn = () => vs || (vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ki(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? Ga(n) : Ki(n);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Ue(e) || Ce(e))
    return e;
}
const za = /;(?![^(]*\))/g, Wa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
function Ga(e) {
  const t = {};
  return e.replace(Ka, "").split(za).forEach((r) => {
    if (r) {
      const n = r.split(Wa);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ur(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ur(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Ya = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xa = /* @__PURE__ */ qi(Ya);
function To(e) {
  return !!e || e === "";
}
function Ja(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = fr(e[n], t[n]);
  return r;
}
function Ss(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && fr(i, r[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    n[s] = 1;
  }
  return !0;
}
function fr(e, t) {
  if (e === t) return !0;
  let r = _s(e), n = _s(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = zt(e), n = zt(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? Ja(e, t) : !1;
  if (r = Ce(e), n = Ce(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = dr(e), n = dr(t), r || n || (r = wr(e), n = wr(t), r || n))
      return r && n ? Ss(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (c && !f || !c && f || !fr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Za(e, t) {
  return e.findIndex((r) => fr(r, t));
}
const Co = (e) => !!(e && e.__v_isRef === !0), d = (e) => Ue(e) ? e : e == null ? "" : ee(e) || Ce(e) && (e.toString === _o || !ce(e.toString)) ? Co(e) ? d(e.value) : JSON.stringify(e, wo, 2) : String(e), wo = (e, t) => Co(t) ? wo(e, t.value) : dr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], s) => (r[ui(n, s) + " =>"] = i, r),
    {}
  )
} : wr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ui(r))
} : zt(t) ? ui(t) : Ce(t) && !ee(t) && !vo(t) ? String(t) : t, ui = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    zt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ge;
class Qa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ge && (Ge.active ? (this.parent = Ge, this.index = (Ge.scopes || (Ge.scopes = [])).push(
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
      const r = Ge;
      try {
        return Ge = this, t();
      } finally {
        Ge = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ge, Ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ge === this)
        Ge = this.prevScope;
      else {
        let t = Ge;
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
function el() {
  return Ge;
}
let Re;
const di = /* @__PURE__ */ new WeakSet();
class xo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && (Ge.active ? Ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, di.has(this) && (di.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ro(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Es(this), ko(this);
    const t = Re, r = Nt;
    Re = this, Nt = !0;
    try {
      return this.fn();
    } finally {
      Oo(this), Re = t, Nt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Xi(t);
      this.deps = this.depsTail = void 0, Es(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? di.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pi(this) && this.run();
  }
  get dirty() {
    return Pi(this);
  }
}
let Ao = 0, rn, nn;
function Ro(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = nn, nn = e;
    return;
  }
  e.next = rn, rn = e;
}
function Gi() {
  Ao++;
}
function Yi() {
  if (--Ao > 0)
    return;
  if (nn) {
    let t = nn;
    for (nn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; rn; ) {
    let t = rn;
    for (rn = void 0; t; ) {
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
function ko(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Oo(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Xi(n), tl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Pi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (No(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function No(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ln) || (e.globalVersion = ln, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Re, n = Nt;
  Re = e, Nt = !0;
  try {
    ko(e);
    const i = e.fn(e._value);
    (t.version === 0 || Bt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Re = r, Nt = n, Oo(e), e.flags &= -3;
  }
}
function Xi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      Xi(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function tl(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Nt = !0;
const Po = [];
function Zt() {
  Po.push(Nt), Nt = !1;
}
function Qt() {
  const e = Po.pop();
  Nt = e === void 0 ? !0 : e;
}
function Es(e) {
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
let ln = 0;
class rl {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ji {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Re || !Nt || Re === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      r = this.activeLink = new rl(Re, this), Re.deps ? (r.prevDep = Re.depsTail, Re.depsTail.nextDep = r, Re.depsTail = r) : Re.deps = Re.depsTail = r, Io(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Re.depsTail, r.nextDep = void 0, Re.depsTail.nextDep = r, Re.depsTail = r, Re.deps === r && (Re.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, ln++, this.notify(t);
  }
  notify(t) {
    Gi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Yi();
    }
  }
}
function Io(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Io(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ii = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ Symbol(
  ""
), Li = /* @__PURE__ */ Symbol(
  ""
), cn = /* @__PURE__ */ Symbol(
  ""
);
function Ze(e, t, r) {
  if (Nt && Re) {
    let n = Ii.get(e);
    n || Ii.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Ji()), i.map = n, i.key = r), i.track();
  }
}
function Yt(e, t, r, n, i, s) {
  const o = Ii.get(e);
  if (!o) {
    ln++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (Gi(), t === "clear")
    o.forEach(c);
  else {
    const f = ee(e), v = f && Wi(r);
    if (f && r === "length") {
      const y = Number(n);
      o.forEach((S, I) => {
        (I === "length" || I === cn || !zt(I) && I >= y) && c(S);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && c(o.get(r)), v && c(o.get(cn)), t) {
        case "add":
          f ? v && c(o.get("length")) : (c(o.get(Er)), dr(e) && c(o.get(Li)));
          break;
        case "delete":
          f || (c(o.get(Er)), dr(e) && c(o.get(Li)));
          break;
        case "set":
          dr(e) && c(o.get(Er));
          break;
      }
  }
  Yi();
}
function Or(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Ze(t, "iterate", cn), /* @__PURE__ */ xt(e) ? t : t.map(Pt));
}
function Jn(e) {
  return Ze(e = /* @__PURE__ */ ve(e), "iterate", cn), e;
}
function jt(e, t) {
  return /* @__PURE__ */ er(e) ? $r(/* @__PURE__ */ Tr(e) ? Pt(t) : t) : Pt(t);
}
const nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return fi(this, Symbol.iterator, (e) => jt(this, e));
  },
  concat(...e) {
    return Or(this).concat(
      ...e.map((t) => ee(t) ? Or(t) : t)
    );
  },
  entries() {
    return fi(this, "entries", (e) => (e[1] = jt(this, e[1]), e));
  },
  every(e, t) {
    return Wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Wt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => jt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Wt(
      this,
      "find",
      e,
      t,
      (r) => jt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Wt(
      this,
      "findLast",
      e,
      t,
      (r) => jt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Wt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return pi(this, "includes", e);
  },
  indexOf(...e) {
    return pi(this, "indexOf", e);
  },
  join(e) {
    return Or(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return pi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wr(this, "pop");
  },
  push(...e) {
    return Wr(this, "push", e);
  },
  reduce(e, ...t) {
    return Ts(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ts(this, "reduceRight", e, t);
  },
  shift() {
    return Wr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wr(this, "splice", e);
  },
  toReversed() {
    return Or(this).toReversed();
  },
  toSorted(e) {
    return Or(this).toSorted(e);
  },
  toSpliced(...e) {
    return Or(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wr(this, "unshift", e);
  },
  values() {
    return fi(this, "values", (e) => jt(this, e));
  }
};
function fi(e, t, r) {
  const n = Jn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ xt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = r(s.value)), s;
  }), i;
}
const il = Array.prototype;
function Wt(e, t, r, n, i, s) {
  const o = Jn(e), c = o !== e && !/* @__PURE__ */ xt(e), f = o[t];
  if (f !== il[t]) {
    const S = f.apply(e, s);
    return c ? Pt(S) : S;
  }
  let v = r;
  o !== e && (c ? v = function(S, I) {
    return r.call(this, jt(e, S), I, e);
  } : r.length > 2 && (v = function(S, I) {
    return r.call(this, S, I, e);
  }));
  const y = f.call(o, v, n);
  return c && i ? i(y) : y;
}
function Ts(e, t, r, n) {
  const i = Jn(e), s = i !== e && !/* @__PURE__ */ xt(e);
  let o = r, c = !1;
  i !== e && (s ? (c = n.length === 0, o = function(v, y, S) {
    return c && (c = !1, v = jt(e, v)), r.call(this, v, jt(e, y), S, e);
  }) : r.length > 3 && (o = function(v, y, S) {
    return r.call(this, v, y, S, e);
  }));
  const f = i[t](o, ...n);
  return c ? jt(e, f) : f;
}
function pi(e, t, r) {
  const n = /* @__PURE__ */ ve(e);
  Ze(n, "iterate", cn);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ es(r[0]) ? (r[0] = /* @__PURE__ */ ve(r[0]), n[t](...r)) : i;
}
function Wr(e, t, r = []) {
  Zt(), Gi();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, r);
  return Yi(), Qt(), n;
}
const sl = /* @__PURE__ */ qi("__proto__,__v_isRef,__isVue"), Lo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zt)
);
function ol(e) {
  zt(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
}
class Mo {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (i ? s ? bl : Ho : s ? Fo : Do).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = ee(t);
    if (!i) {
      let f;
      if (o && (f = nl[r]))
        return f;
      if (r === "hasOwnProperty")
        return ol;
    }
    const c = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qe(t) ? t : n
    );
    if ((zt(r) ? Lo.has(r) : sl(r)) || (i || Ze(t, "get", r), s))
      return c;
    if (/* @__PURE__ */ Qe(c)) {
      const f = o && Wi(r) ? c : c.value;
      return i && Ce(f) ? /* @__PURE__ */ Ui(f) : f;
    }
    return Ce(c) ? i ? /* @__PURE__ */ Ui(c) : /* @__PURE__ */ ur(c) : c;
  }
}
class Uo extends Mo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let s = t[r];
    const o = ee(t) && Wi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ er(s);
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ er(n) && (s = /* @__PURE__ */ ve(s), n = /* @__PURE__ */ ve(n)), !o && /* @__PURE__ */ Qe(s) && !/* @__PURE__ */ Qe(n))
        return v || (s.value = n), !0;
    }
    const c = o ? Number(r) < t.length : Se(t, r), f = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Qe(t) ? t : i
    );
    return t === /* @__PURE__ */ ve(i) && f && (c ? Bt(n, s) && Yt(t, "set", r, n) : Yt(t, "add", r, n)), f;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Yt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!zt(r) || !Lo.has(r)) && Ze(t, "has", r), n;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      ee(t) ? "length" : Er
    ), Reflect.ownKeys(t);
  }
}
class al extends Mo {
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
const ll = /* @__PURE__ */ new Uo(), cl = /* @__PURE__ */ new al(), ul = /* @__PURE__ */ new Uo(!0);
const Mi = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function dl(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, s = /* @__PURE__ */ ve(i), o = dr(s), c = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, v = i[e](...n), y = r ? Mi : t ? $r : Pt;
    return !t && Ze(
      s,
      "iterate",
      f ? Li : Er
    ), et(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: S, done: I } = v.next();
          return I ? { value: S, done: I } : {
            value: c ? [y(S[0]), y(S[1])] : y(S),
            done: I
          };
        }
      }
    );
  };
}
function An(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fl(e, t) {
  const r = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ve(s), c = /* @__PURE__ */ ve(i);
      e || (Bt(i, c) && Ze(o, "get", i), Ze(o, "get", c));
      const { has: f } = xn(o), v = t ? Mi : e ? $r : Pt;
      if (f.call(o, i))
        return v(s.get(i));
      if (f.call(o, c))
        return v(s.get(c));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ze(/* @__PURE__ */ ve(i), "iterate", Er), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ve(s), c = /* @__PURE__ */ ve(i);
      return e || (Bt(i, c) && Ze(o, "has", i), Ze(o, "has", c)), i === c ? s.has(i) : s.has(i) || s.has(c);
    },
    forEach(i, s) {
      const o = this, c = o.__v_raw, f = /* @__PURE__ */ ve(c), v = t ? Mi : e ? $r : Pt;
      return !e && Ze(f, "iterate", Er), c.forEach((y, S) => i.call(s, v(y), v(S), o));
    }
  };
  return et(
    r,
    e ? {
      add: An("add"),
      set: An("set"),
      delete: An("delete"),
      clear: An("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ ve(this), o = xn(s), c = /* @__PURE__ */ ve(i), f = !t && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ er(i) ? c : i;
        return o.has.call(s, f) || Bt(i, f) && o.has.call(s, i) || Bt(c, f) && o.has.call(s, c) || (s.add(f), Yt(s, "add", f, f)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ xt(s) && !/* @__PURE__ */ er(s) && (s = /* @__PURE__ */ ve(s));
        const o = /* @__PURE__ */ ve(this), { has: c, get: f } = xn(o);
        let v = c.call(o, i);
        v || (i = /* @__PURE__ */ ve(i), v = c.call(o, i));
        const y = f.call(o, i);
        return o.set(i, s), v ? Bt(s, y) && Yt(o, "set", i, s) : Yt(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ ve(this), { has: o, get: c } = xn(s);
        let f = o.call(s, i);
        f || (i = /* @__PURE__ */ ve(i), f = o.call(s, i)), c && c.call(s, i);
        const v = s.delete(i);
        return f && Yt(s, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ve(this), s = i.size !== 0, o = i.clear();
        return s && Yt(
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
    r[i] = dl(i, e, t);
  }), r;
}
function Zi(e, t) {
  const r = fl(e, t);
  return (n, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Se(r, i) && i in n ? r : n,
    i,
    s
  );
}
const pl = {
  get: /* @__PURE__ */ Zi(!1, !1)
}, hl = {
  get: /* @__PURE__ */ Zi(!1, !0)
}, ml = {
  get: /* @__PURE__ */ Zi(!0, !1)
};
const Do = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
function yl(e) {
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
function ur(e) {
  return /* @__PURE__ */ er(e) ? e : Qi(
    e,
    !1,
    ll,
    pl,
    Do
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return Qi(
    e,
    !1,
    ul,
    hl,
    Fo
  );
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  return Qi(
    e,
    !0,
    cl,
    ml,
    Ho
  );
}
function Qi(e, t, r, n, i) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = yl(Va(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return /* @__PURE__ */ er(e) ? /* @__PURE__ */ Tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function _l(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Eo(e, "__v_skip", !0), e;
}
const Pt = (e) => Ce(e) ? /* @__PURE__ */ ur(e) : e, $r = (e) => Ce(e) ? /* @__PURE__ */ Ui(e) : e;
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return Sl(e, !1);
}
function Sl(e, t) {
  return /* @__PURE__ */ Qe(e) ? e : new El(e, t);
}
class El {
  constructor(t, r) {
    this.dep = new Ji(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ve(t), this._value = r ? t : Pt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(t) || /* @__PURE__ */ er(t);
    t = n ? t : /* @__PURE__ */ ve(t), Bt(t, r) && (this._rawValue = t, this._value = n ? t : Pt(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ Qe(e) ? e.value : e;
}
const Tl = {
  get: (e, t, r) => t === "__v_raw" ? e : m(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Qe(i) && !/* @__PURE__ */ Qe(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function $o(e) {
  return /* @__PURE__ */ Tr(e) ? e : new Proxy(e, Tl);
}
class Cl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Ji(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ln - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Ro(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return No(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function wl(e, t, r = !1) {
  let n, i;
  return ce(e) ? n = e : (n = e.get, i = e.set), new Cl(n, i, r);
}
const Rn = {}, Dn = /* @__PURE__ */ new WeakMap();
let gr;
function xl(e, t = !1, r = gr) {
  if (r) {
    let n = Dn.get(r);
    n || Dn.set(r, n = []), n.push(e);
  }
}
function Al(e, t, r = xe) {
  const { immediate: n, deep: i, once: s, scheduler: o, augmentJob: c, call: f } = r, v = (V) => i ? V : /* @__PURE__ */ xt(V) || i === !1 || i === 0 ? Xt(V, 1) : Xt(V);
  let y, S, I, j, ne = !1, z = !1;
  if (/* @__PURE__ */ Qe(e) ? (S = () => e.value, ne = /* @__PURE__ */ xt(e)) : /* @__PURE__ */ Tr(e) ? (S = () => v(e), ne = !0) : ee(e) ? (z = !0, ne = e.some((V) => /* @__PURE__ */ Tr(V) || /* @__PURE__ */ xt(V)), S = () => e.map((V) => {
    if (/* @__PURE__ */ Qe(V))
      return V.value;
    if (/* @__PURE__ */ Tr(V))
      return v(V);
    if (ce(V))
      return f ? f(V, 2) : V();
  })) : ce(e) ? t ? S = f ? () => f(e, 2) : e : S = () => {
    if (I) {
      Zt();
      try {
        I();
      } finally {
        Qt();
      }
    }
    const V = gr;
    gr = y;
    try {
      return f ? f(e, 3, [j]) : e(j);
    } finally {
      gr = V;
    }
  } : S = qt, t && i) {
    const V = S, ae = i === !0 ? 1 / 0 : i;
    S = () => Xt(V(), ae);
  }
  const le = el(), ie = () => {
    y.stop(), le && le.active && zi(le.effects, y);
  };
  if (s && t) {
    const V = t;
    t = (...ae) => {
      const Pe = V(...ae);
      return ie(), Pe;
    };
  }
  let q = z ? new Array(e.length).fill(Rn) : Rn;
  const U = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ae = y.run();
        if (V || i || ne || (z ? ae.some((Pe, Oe) => Bt(Pe, q[Oe])) : Bt(ae, q))) {
          I && I();
          const Pe = gr;
          gr = y;
          try {
            const Oe = [
              ae,
              // pass undefined as the old value when it's changed for the first time
              q === Rn ? void 0 : z && q[0] === Rn ? [] : q,
              j
            ];
            q = ae, f ? f(t, 3, Oe) : (
              // @ts-expect-error
              t(...Oe)
            );
          } finally {
            gr = Pe;
          }
        }
      } else
        y.run();
  };
  return c && c(U), y = new xo(S), y.scheduler = o ? () => o(U, !1) : U, j = (V) => xl(V, !1, y), I = y.onStop = () => {
    const V = Dn.get(y);
    if (V) {
      if (f)
        f(V, 4);
      else
        for (const ae of V) ae();
      Dn.delete(y);
    }
  }, t ? n ? U(!0) : q = y.run() : o ? o(U.bind(null, !0), !0) : y.run(), ie.pause = y.pause.bind(y), ie.resume = y.resume.bind(y), ie.stop = ie, ie;
}
function Xt(e, t = 1 / 0, r) {
  if (t <= 0 || !Ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Qe(e))
    Xt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Xt(e[n], t, r);
  else if (wr(e) || dr(e))
    e.forEach((n) => {
      Xt(n, t, r);
    });
  else if (vo(e)) {
    for (const n in e)
      Xt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Xt(e[n], t, r);
  }
  return e;
}
function mn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Zn(i, t, r);
  }
}
function It(e, t, r, n) {
  if (ce(e)) {
    const i = mn(e, t, r, n);
    return i && go(i) && i.catch((s) => {
      Zn(s, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(It(e[s], t, r, n));
    return i;
  }
}
function Zn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xe;
  if (t) {
    let c = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; c; ) {
      const y = c.ec;
      if (y) {
        for (let S = 0; S < y.length; S++)
          if (y[S](e, f, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (s) {
      Zt(), mn(s, null, 10, [
        e,
        f,
        v
      ]), Qt();
      return;
    }
  }
  Rl(e, r, i, n, o);
}
function Rl(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const at = [];
let $t = -1;
const Dr = [];
let cr = null, Ir = 0;
const jo = /* @__PURE__ */ Promise.resolve();
let Fn = null;
function Vo(e) {
  const t = Fn || jo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = $t + 1, r = at.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = at[n], s = un(i);
    s < e || s === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function ts(e) {
  if (!(e.flags & 1)) {
    const t = un(e), r = at[at.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= un(r) ? at.push(e) : at.splice(kl(t), 0, e), e.flags |= 1, Bo();
  }
}
function Bo() {
  Fn || (Fn = jo.then(zo));
}
function Ol(e) {
  if (!ee(e))
    cr && e.id === -1 ? cr.splice(Ir + 1, 0, e) : e.flags & 1 || (Dr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Dr.push(e[t]);
  Bo();
}
function Cs(e, t, r = $t + 1) {
  for (; r < at.length; r++) {
    const n = at[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      at.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function qo(e) {
  if (Dr.length) {
    const t = [...new Set(Dr)].sort(
      (r, n) => un(r) - un(n)
    );
    if (Dr.length = 0, cr) {
      for (let r = 0; r < t.length; r++)
        cr.push(t[r]);
      return;
    }
    for (cr = t, Ir = 0; Ir < cr.length; Ir++) {
      const r = cr[Ir];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    cr = null, Ir = 0;
  }
}
const un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zo(e) {
  try {
    for ($t = 0; $t < at.length; $t++) {
      const t = at[$t];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), mn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $t < at.length; $t++) {
      const t = at[$t];
      t && (t.flags &= -2);
    }
    $t = -1, at.length = 0, qo(), Fn = null, (at.length || Dr.length) && zo();
  }
}
let wt = null, Wo = null;
function Hn(e) {
  const t = wt;
  return wt = e, Wo = e && e.type.__scopeId || null, t;
}
function Nl(e, t = wt, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Ms(-1);
    const s = Hn(t), o = Cr.length;
    let c;
    try {
      c = e(...i);
    } finally {
      for (let f = Cr.length; f > o; f--) ga();
      Hn(s), n._d && Ms(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, t) {
  if (wt === null)
    return e;
  const r = ni(wt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, c, f = xe] = t[i];
    s && (ce(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Xt(o), n.push({
      dir: s,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return e;
}
function mr(e, t, r, n) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    s && (c.oldValue = s[o].value);
    let f = c.dir[n];
    f && (Zt(), It(f, r, 8, [
      e.el,
      c,
      e,
      t
    ]), Qt());
  }
}
function Pl(e, t) {
  if (lt) {
    let r = lt.provides;
    const n = lt.parent && lt.parent.provides;
    n === r && (r = lt.provides = Object.create(n)), r[e] = t;
  }
}
function Ln(e, t, r = !1) {
  const n = Rc();
  if (n || Fr) {
    let i = Fr ? Fr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ce(t) ? t.call(n && n.proxy) : t;
  }
}
const Il = /* @__PURE__ */ Symbol.for("v-scx"), Ll = () => Ln(Il);
function hi(e, t, r) {
  return Ko(e, t, r);
}
function Ko(e, t, r = xe) {
  const { immediate: n, deep: i, flush: s, once: o } = r, c = et({}, r), f = t && n || !t && s !== "post";
  let v;
  if (pn) {
    if (s === "sync") {
      const j = Ll();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!f) {
      const j = () => {
      };
      return j.stop = qt, j.resume = qt, j.pause = qt, j;
    }
  }
  const y = lt;
  c.call = (j, ne, z) => It(j, y, ne, z);
  let S = !1;
  s === "post" ? c.scheduler = (j) => {
    mt(j, y && y.suspense);
  } : s !== "sync" && (S = !0, c.scheduler = (j, ne) => {
    ne ? j() : ts(j);
  }), c.augmentJob = (j) => {
    t && (j.flags |= 4), S && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Al(e, t, c);
  return pn && (v ? v.push(I) : f && I()), I;
}
function Ml(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? Go(n, e) : () => n[e] : e.bind(n, n);
  let s;
  ce(t) ? s = t : (s = t.handler, r = t);
  const o = bn(this), c = Ko(i, s.bind(n), r);
  return o(), c;
}
function Go(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ul = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, mi = /* @__PURE__ */ Symbol("_leaveCb");
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== tr) {
        t = r;
        break;
      }
  }
  return t;
}
function Yo(e) {
  if (!ns(e))
    return Qn(e.type) && e.children ? Dl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && ce(r.default))
      return r.default();
  }
}
function rs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    rs(
      Qn(r.type) && Yo(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ws(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const $n = /* @__PURE__ */ new WeakMap();
function sn(e, t, r, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (z, le) => sn(
        z,
        t && (ee(t) ? t[le] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (on(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && sn(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? ni(n.component) : n.el, o = i ? null : s, { i: c, r: f } = e, v = t && t.r, y = c.refs === xe ? c.refs = {} : c.refs, S = c.setupState, I = /* @__PURE__ */ ve(S), j = S === xe ? yo : (z) => ws(y, z) ? !1 : Se(I, z), ne = (z, le) => !(le && ws(y, le));
  if (v != null && v !== f) {
    if (xs(t), Ue(v))
      y[v] = null, j(v) && (S[v] = null);
    else if (/* @__PURE__ */ Qe(v)) {
      const z = t;
      ne(v, z.k) && (v.value = null), z.k && (y[z.k] = null);
    }
  }
  if (ce(f))
    mn(f, c, 12, [o, y]);
  else {
    const z = Ue(f), le = /* @__PURE__ */ Qe(f);
    if (z || le) {
      const ie = () => {
        if (e.f) {
          const q = z ? j(f) ? S[f] : y[f] : ne() || !e.k ? f.value : y[e.k];
          if (i)
            ee(q) && zi(q, s);
          else if (ee(q))
            q.includes(s) || q.push(s);
          else if (z)
            y[f] = [s], j(f) && (S[f] = y[f]);
          else {
            const U = [s];
            ne(f, e.k) && (f.value = U), e.k && (y[e.k] = U);
          }
        } else z ? (y[f] = o, j(f) && (S[f] = o)) : le && (ne(f, e.k) && (f.value = o), e.k && (y[e.k] = o));
      };
      if (o) {
        const q = () => {
          ie(), $n.delete(e);
        };
        q.id = -1, $n.set(e, q), mt(q, r);
      } else
        xs(e), ie();
    }
  }
}
function xs(e) {
  const t = $n.get(e);
  t && (t.flags |= 8, $n.delete(e));
}
Xn().requestIdleCallback;
Xn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, ns = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Jo(e, "a", t);
}
function Hl(e, t) {
  Jo(e, "da", t);
}
function Jo(e, t, r = lt) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ei(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      ns(i.parent.vnode) && $l(n, t, r, i), i = i.parent;
  }
}
function $l(e, t, r, n) {
  const i = ei(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ea(() => {
    zi(n[t], i);
  }, r);
}
function ei(e, t, r = lt, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...o) => {
      Zt();
      const c = bn(r), f = It(t, r, e, o);
      return c(), Qt(), f;
    });
    return n ? i.unshift(s) : i.push(s), s;
  }
}
const rr = (e) => (t, r = lt) => {
  (!pn || e === "sp") && ei(e, (...n) => t(...n), r);
}, jl = rr("bm"), Zo = rr("m"), Vl = rr(
  "bu"
), Bl = rr("u"), Qo = rr(
  "bum"
), ea = rr("um"), ql = rr(
  "sp"
), zl = rr("rtg"), Wl = rr("rtc");
function Kl(e, t = lt) {
  ei("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function _e(e, t, r, n) {
  let i;
  const s = r, o = ee(e);
  if (o || Ue(e)) {
    const c = o && /* @__PURE__ */ Tr(e);
    let f = !1, v = !1;
    c && (f = !/* @__PURE__ */ xt(e), v = /* @__PURE__ */ er(e), e = Jn(e)), i = new Array(e.length);
    for (let y = 0, S = e.length; y < S; y++)
      i[y] = t(
        f ? v ? $r(Pt(e[y])) : Pt(e[y]) : e[y],
        y,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let c = 0; c < e; c++)
      i[c] = t(c + 1, c, void 0, s);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (c, f) => t(c, f, void 0, s)
      );
    else {
      const c = Object.keys(e);
      i = new Array(c.length);
      for (let f = 0, v = c.length; f < v; f++) {
        const y = c[f];
        i[f] = t(e[y], y, f, s);
      }
    }
  else
    i = [];
  return i;
}
const Di = (e) => e ? Ea(e) ? ni(e) : Di(e.parent) : null, an = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Di(e.parent),
    $root: (e) => Di(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ra(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ts(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vo.bind(e.proxy)),
    $watch: (e) => Ml.bind(e)
  })
), bi = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: s, accessCache: o, type: c, appContext: f } = e;
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
            return s[t];
        }
      else {
        if (bi(n, t))
          return o[t] = 1, n[t];
        if (i !== xe && Se(i, t))
          return o[t] = 2, i[t];
        if (Se(s, t))
          return o[t] = 3, s[t];
        if (r !== xe && Se(r, t))
          return o[t] = 4, r[t];
        Fi && (o[t] = 0);
      }
    }
    const v = an[t];
    let y, S;
    if (v)
      return t === "$attrs" && Ze(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && Se(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      S = f.config.globalProperties, Se(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: s } = e;
    return bi(i, t) ? (i[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: s, type: o }
  }, c) {
    let f;
    return !!(r[c] || e !== xe && c[0] !== "$" && Se(e, c) || bi(t, c) || Se(s, c) || Se(n, c) || Se(an, c) || Se(i.config.globalProperties, c) || (f = o.__cssModules) && f[c]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function As(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Fi = !0;
function Xl(e) {
  const t = ra(e), r = e.proxy, n = e.ctx;
  Fi = !1, t.beforeCreate && Rs(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: c,
    provide: f,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: S,
    mounted: I,
    beforeUpdate: j,
    updated: ne,
    activated: z,
    deactivated: le,
    beforeDestroy: ie,
    beforeUnmount: q,
    destroyed: U,
    unmounted: V,
    render: ae,
    renderTracked: Pe,
    renderTriggered: Oe,
    errorCaptured: $e,
    serverPrefetch: Ee,
    // public API
    expose: Ie,
    inheritAttrs: tt,
    // assets
    components: ct,
    directives: We,
    filters: Et
  } = t;
  if (v && Jl(v, n, null), o)
    for (const me in o) {
      const ue = o[me];
      ce(ue) && (n[me] = ue.bind(r));
    }
  if (i) {
    const me = i.call(r, r);
    Ce(me) && (e.data = /* @__PURE__ */ ur(me));
  }
  if (Fi = !0, s)
    for (const me in s) {
      const ue = s[me], je = ce(ue) ? ue.bind(r, r) : ce(ue.get) ? ue.get.bind(r, r) : qt, be = !ce(ue) && ce(ue.set) ? ue.set.bind(r) : qt, we = K({
        get: je,
        set: be
      });
      Object.defineProperty(n, me, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Ve) => we.value = Ve
      });
    }
  if (c)
    for (const me in c)
      ta(c[me], n, r, me);
  if (f) {
    const me = ce(f) ? f.call(r) : f;
    Reflect.ownKeys(me).forEach((ue) => {
      Pl(ue, me[ue]);
    });
  }
  y && Rs(y, e, "c");
  function Le(me, ue) {
    ee(ue) ? ue.forEach((je) => me(je.bind(r))) : ue && me(ue.bind(r));
  }
  if (Le(jl, S), Le(Zo, I), Le(Vl, j), Le(Bl, ne), Le(Fl, z), Le(Hl, le), Le(Kl, $e), Le(Wl, Pe), Le(zl, Oe), Le(Qo, q), Le(ea, V), Le(ql, Ee), ee(Ie))
    if (Ie.length) {
      const me = e.exposed || (e.exposed = {});
      Ie.forEach((ue) => {
        Object.defineProperty(me, ue, {
          get: () => r[ue],
          set: (je) => r[ue] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ae && e.render === qt && (e.render = ae), tt != null && (e.inheritAttrs = tt), ct && (e.components = ct), We && (e.directives = We), Ee && Xo(e);
}
function Jl(e, t, r = qt) {
  ee(e) && (e = Hi(e));
  for (const n in e) {
    const i = e[n];
    let s;
    Ce(i) ? "default" in i ? s = Ln(
      i.from || n,
      i.default,
      !0
    ) : s = Ln(i.from || n) : s = Ln(i), /* @__PURE__ */ Qe(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[n] = s;
  }
}
function Rs(e, t, r) {
  It(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ta(e, t, r, n) {
  let i = n.includes(".") ? Go(r, n) : () => r[n];
  if (Ue(e)) {
    const s = t[e];
    ce(s) && hi(i, s);
  } else if (ce(e))
    hi(i, e.bind(r));
  else if (Ce(e))
    if (ee(e))
      e.forEach((s) => ta(s, t, r, n));
    else {
      const s = ce(e.handler) ? e.handler.bind(r) : t[e.handler];
      ce(s) && hi(i, s, e);
    }
}
function ra(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = s.get(t);
  let f;
  return c ? f = c : !i.length && !r && !n ? f = t : (f = {}, i.length && i.forEach(
    (v) => jn(f, v, o, !0)
  ), jn(f, t, o)), Ce(t) && s.set(t, f), f;
}
function jn(e, t, r, n = !1) {
  const { mixins: i, extends: s } = t;
  s && jn(e, s, r, !0), i && i.forEach(
    (o) => jn(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = Zl[o] || r && r[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Zl = {
  data: ks,
  props: Os,
  emits: Os,
  // objects
  methods: Zr,
  computed: Zr,
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
  components: Zr,
  directives: Zr,
  // watch
  watch: ec,
  // provide / inject
  provide: ks,
  inject: Ql
};
function ks(e, t) {
  return t ? e ? function() {
    return et(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Zr(Hi(e), Hi(t));
}
function Hi(e) {
  if (ee(e)) {
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
function Zr(e, t) {
  return e ? et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Os(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : et(
    /* @__PURE__ */ Object.create(null),
    As(e),
    As(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = et(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ot(e[n], t[n]);
  return r;
}
function na() {
  return {
    app: null,
    config: {
      isNativeTag: yo,
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
    ce(n) || (n = et({}, n)), i != null && !Ce(i) && (i = null);
    const s = na(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const v = s.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Lc,
      get config() {
        return s.config;
      },
      set config(y) {
      },
      use(y, ...S) {
        return o.has(y) || (y && ce(y.install) ? (o.add(y), y.install(v, ...S)) : ce(y) && (o.add(y), y(v, ...S))), v;
      },
      mixin(y) {
        return s.mixins.includes(y) || s.mixins.push(y), v;
      },
      component(y, S) {
        return S ? (s.components[y] = S, v) : s.components[y];
      },
      directive(y, S) {
        return S ? (s.directives[y] = S, v) : s.directives[y];
      },
      mount(y, S, I) {
        if (!f) {
          const j = v._ceVNode || Jt(n, i);
          return j.appContext = s, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), f = !0, v._container = y, y.__vue_app__ = v, ni(j.component);
        }
      },
      onUnmount(y) {
        c.push(y);
      },
      unmount() {
        f && (It(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, S) {
        return s.provides[y] = S, v;
      },
      runWithContext(y) {
        const S = Fr;
        Fr = v;
        try {
          return y();
        } finally {
          Fr = S;
        }
      }
    };
    return v;
  };
}
let Fr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ot(t)}Modifiers`] || e[`${xr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let i = r;
  const s = t.startsWith("update:"), o = s && nc(n, t.slice(7));
  o && (o.trim && (i = r.map((y) => Ue(y) ? y.trim() : y)), o.number && (i = i.map(Yn)));
  let c, f = n[c = ci(t)] || // also try camelCase event handler (#2249)
  n[c = ci(Ot(t))];
  !f && s && (f = n[c = ci(xr(t))]), f && It(
    f,
    e,
    6,
    i
  );
  const v = n[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, It(
      v,
      e,
      6,
      i
    );
  }
}
const sc = /* @__PURE__ */ new WeakMap();
function ia(e, t, r = !1) {
  const n = r ? sc : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, c = !1;
  if (!ce(e)) {
    const f = (v) => {
      const y = ia(v, t, !0);
      y && (c = !0, et(o, y));
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !c ? (Ce(e) && n.set(e, null), null) : (ee(s) ? s.forEach((f) => o[f] = null) : et(o, s), Ce(e) && n.set(e, o), o);
}
function ti(e, t) {
  return !e || !Wn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, xr(t)) || Se(e, t));
}
function Ns(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: c,
    emit: f,
    render: v,
    renderCache: y,
    props: S,
    data: I,
    setupState: j,
    ctx: ne,
    inheritAttrs: z
  } = e, le = Hn(e);
  let ie, q;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ae = V;
      ie = Vt(
        v.call(
          ae,
          V,
          y,
          S,
          j,
          I,
          ne
        )
      ), q = c;
    } else {
      const V = t;
      ie = Vt(
        V.length > 1 ? V(
          S,
          { attrs: c, slots: o, emit: f }
        ) : V(
          S,
          null
        )
      ), q = t.props ? c : oc(c);
    }
  } catch (V) {
    Cr.length = 0, Zn(V, e, 1), ie = Jt(tr);
  }
  let U = ie;
  if (q && z !== !1) {
    const V = Object.keys(q), { shapeFlag: ae } = U;
    V.length && ae & 7 && (s && V.some(Kn) && (q = ac(
      q,
      s
    )), U = jr(U, q, !1, !0));
  }
  if (r.dirs && (U = jr(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Qn(U.type) && Yo(U) || U;
    rs(V, r.transition);
  }
  return ie = U, Hn(le), ie;
}
const oc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Wn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ac = (e, t) => {
  const r = {};
  for (const n in e)
    (!Kn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function lc(e, t, r) {
  const { props: n, children: i, component: s } = e, { props: o, children: c, patchFlag: f } = t, v = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Ps(n, o, v) : !!o;
    if (f & 8) {
      const y = t.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        const I = y[S];
        if (sa(o, n, I) && !ti(v, I))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? Ps(n, o, v) : !0 : !!o;
  return !1;
}
function Ps(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (sa(t, e, s) && !ti(r, s))
      return !0;
  }
  return !1;
}
function sa(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ce(n) && Ce(i) ? !fr(n, i) : n !== i;
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
const oa = {}, aa = () => Object.create(oa), la = (e) => Object.getPrototypeOf(e) === oa;
function uc(e, t, r, n = !1) {
  const i = {}, s = aa();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ca(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ gl(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function dc(e, t, r, n) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ ve(i), [f] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const y = e.vnode.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        let I = y[S];
        if (ti(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (f)
          if (Se(s, I))
            j !== s[I] && (s[I] = j, v = !0);
          else {
            const ne = Ot(I);
            i[ne] = $i(
              f,
              c,
              ne,
              j,
              e,
              !1
            );
          }
        else
          j !== s[I] && (s[I] = j, v = !0);
      }
    }
  } else {
    ca(e, t, i, s) && (v = !0);
    let y;
    for (const S in c)
      (!t || // for camelCase
      !Se(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = xr(S)) === S || !Se(t, y))) && (f ? r && // for camelCase
      (r[S] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[S] = $i(
        f,
        c,
        S,
        void 0,
        e,
        !0
      )) : delete i[S]);
    if (s !== c)
      for (const S in s)
        (!t || !Se(t, S)) && (delete s[S], v = !0);
  }
  v && Yt(e.attrs, "set", "");
}
function ca(e, t, r, n) {
  const [i, s] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let f in t) {
      if (tn(f))
        continue;
      const v = t[f];
      let y;
      i && Se(i, y = Ot(f)) ? !s || !s.includes(y) ? r[y] = v : (c || (c = {}))[y] = v : ti(e.emitsOptions, f) || (!(f in n) || v !== n[f]) && (n[f] = v, o = !0);
    }
  if (s) {
    const f = /* @__PURE__ */ ve(r), v = c || xe;
    for (let y = 0; y < s.length; y++) {
      const S = s[y];
      r[S] = $i(
        i,
        f,
        S,
        v[S],
        e,
        !Se(v, S)
      );
    }
  }
  return o;
}
function $i(e, t, r, n, i, s) {
  const o = e[r];
  if (o != null) {
    const c = Se(o, "default");
    if (c && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && ce(f)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = bn(i);
          n = v[r] = f.call(
            null,
            t
          ), y();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === xr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function ua(e, t, r = !1) {
  const n = r ? fc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, c = [];
  let f = !1;
  if (!ce(e)) {
    const y = (S) => {
      f = !0;
      const [I, j] = ua(S, t, !0);
      et(o, I), j && c.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!s && !f)
    return Ce(e) && n.set(e, Mr), Mr;
  if (ee(s))
    for (let y = 0; y < s.length; y++) {
      const S = Ot(s[y]);
      Is(S) && (o[S] = xe);
    }
  else if (s)
    for (const y in s) {
      const S = Ot(y);
      if (Is(S)) {
        const I = s[y], j = o[S] = ee(I) || ce(I) ? { type: I } : et({}, I), ne = j.type;
        let z = !1, le = !0;
        if (ee(ne))
          for (let ie = 0; ie < ne.length; ++ie) {
            const q = ne[ie], U = ce(q) && q.name;
            if (U === "Boolean") {
              z = !0;
              break;
            } else U === "String" && (le = !1);
          }
        else
          z = ce(ne) && ne.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = z, j[
          1
          /* shouldCastTrue */
        ] = le, (z || Se(j, "default")) && c.push(S);
      }
    }
  const v = [o, c];
  return Ce(e) && n.set(e, v), v;
}
function Is(e) {
  return e[0] !== "$" && !tn(e);
}
const is = (e) => e === "_" || e === "_ctx" || e === "$stable", ss = (e) => ee(e) ? e.map(Vt) : [Vt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Nl((...i) => ss(t(...i)), r);
  return n._c = !1, n;
}, da = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (is(i)) continue;
    const s = e[i];
    if (ce(s))
      t[i] = pc(i, s, n);
    else if (s != null) {
      const o = ss(s);
      t[i] = () => o;
    }
  }
}, fa = (e, t) => {
  const r = ss(t);
  e.slots.default = () => r;
}, pa = (e, t, r) => {
  for (const n in t)
    (r || !is(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = aa();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (pa(n, t, r), r && Eo(n, "_", i, !0)) : da(t, n);
  } else t && fa(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let s = !0, o = xe;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? r && c === 1 ? s = !1 : pa(i, t, r) : (s = !t.$stable, da(t, i)), o = t;
  } else t && (fa(e, t), o = { default: 1 });
  if (s)
    for (const c in i)
      !is(c) && o[c] == null && delete i[c];
}, mt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = Xn();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: c,
    createComment: f,
    setText: v,
    setElementText: y,
    parentNode: S,
    nextSibling: I,
    setScopeId: j = qt,
    insertStaticContent: ne
  } = e, z = (h, b, _, k = null, E = null, A = null, L = void 0, D = null, M = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !Kr(h, b) && (k = ut(h), Ve(h, E, A, !0), h = null), b.patchFlag === -2 && (M = !1, b.dynamicChildren = null);
    const { type: T, ref: G, shapeFlag: $ } = b;
    switch (T) {
      case ri:
        le(h, b, _, k);
        break;
      case tr:
        ie(h, b, _, k);
        break;
      case gi:
        h == null && q(b, _, k, L);
        break;
      case se:
        ct(
          h,
          b,
          _,
          k,
          E,
          A,
          L,
          D,
          M
        );
        break;
      default:
        $ & 1 ? ae(
          h,
          b,
          _,
          k,
          E,
          A,
          L,
          D,
          M
        ) : $ & 6 ? We(
          h,
          b,
          _,
          k,
          E,
          A,
          L,
          D,
          M
        ) : ($ & 64 || $ & 128) && T.process(
          h,
          b,
          _,
          k,
          E,
          A,
          L,
          D,
          M,
          rt
        );
    }
    G != null && E ? sn(G, h && h.ref, A, b || h, !b) : G == null && h && h.ref != null && sn(h.ref, null, A, h, !0);
  }, le = (h, b, _, k) => {
    if (h == null)
      n(
        b.el = c(b.children),
        _,
        k
      );
    else {
      const E = b.el = h.el;
      b.children !== h.children && v(E, b.children);
    }
  }, ie = (h, b, _, k) => {
    h == null ? n(
      b.el = f(b.children || ""),
      _,
      k
    ) : b.el = h.el;
  }, q = (h, b, _, k) => {
    [h.el, h.anchor] = ne(
      h.children,
      b,
      _,
      k,
      h.el,
      h.anchor
    );
  }, U = ({ el: h, anchor: b }, _, k) => {
    let E;
    for (; h && h !== b; )
      E = I(h), n(h, _, k), h = E;
    n(b, _, k);
  }, V = ({ el: h, anchor: b }) => {
    let _;
    for (; h && h !== b; )
      _ = I(h), i(h), h = _;
    i(b);
  }, ae = (h, b, _, k, E, A, L, D, M) => {
    if (b.type === "svg" ? L = "svg" : b.type === "math" && (L = "mathml"), h == null)
      Pe(
        b,
        _,
        k,
        E,
        A,
        L,
        D,
        M
      );
    else {
      const T = h.el && h.el._isVueCE ? h.el : null;
      try {
        T && T._beginPatch(), Ee(
          h,
          b,
          E,
          A,
          L,
          D,
          M
        );
      } finally {
        T && T._endPatch();
      }
    }
  }, Pe = (h, b, _, k, E, A, L, D) => {
    let M, T;
    const { props: G, shapeFlag: $, transition: W, dirs: J } = h;
    if (M = h.el = o(
      h.type,
      A,
      G && G.is,
      G
    ), $ & 8 ? y(M, h.children) : $ & 16 && $e(
      h.children,
      M,
      null,
      k,
      E,
      yi(h, A),
      L,
      D
    ), J && mr(h, null, k, "created"), Oe(M, h, h.scopeId, L, k), G) {
      for (const O in G)
        O !== "value" && !tn(O) && s(M, O, null, G[O], A, k);
      "value" in G && s(M, "value", null, G.value, A), (T = G.onVnodeBeforeMount) && Ht(T, k, h);
    }
    J && mr(h, null, k, "beforeMount");
    const te = gc(E, W);
    te && W.beforeEnter(M), n(M, b, _), ((T = G && G.onVnodeMounted) || te || J) && mt(() => {
      T && Ht(T, k, h), te && W.enter(M), J && mr(h, null, k, "mounted");
    }, E);
  }, Oe = (h, b, _, k, E) => {
    if (_ && j(h, _), k)
      for (let A = 0; A < k.length; A++)
        j(h, k[A]);
    if (E) {
      let A = E.subTree;
      if (b === A || ya(A.type) && (A.ssContent === b || A.ssFallback === b)) {
        const L = E.vnode;
        Oe(
          h,
          L,
          L.scopeId,
          L.slotScopeIds,
          E.parent
        );
      }
    }
  }, $e = (h, b, _, k, E, A, L, D, M = 0) => {
    for (let T = M; T < h.length; T++) {
      const G = h[T] = D ? Gt(h[T]) : Vt(h[T]);
      z(
        null,
        G,
        b,
        _,
        k,
        E,
        A,
        L,
        D
      );
    }
  }, Ee = (h, b, _, k, E, A, L) => {
    const D = b.el = h.el;
    let { patchFlag: M, dynamicChildren: T, dirs: G } = b;
    M |= h.patchFlag & 16;
    const $ = h.props || xe, W = b.props || xe;
    let J;
    if (_ && br(_, !1), (J = W.onVnodeBeforeUpdate) && Ht(J, _, b, h), G && mr(b, h, _, "beforeUpdate"), _ && br(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    T && (!h.dynamicChildren || h.dynamicChildren.length !== T.length) && (M = 0, L = !1, T = null), ($.innerHTML && W.innerHTML == null || $.textContent && W.textContent == null) && y(D, ""), T ? Ie(
      h.dynamicChildren,
      T,
      D,
      _,
      k,
      yi(b, E),
      A
    ) : L || ue(
      h,
      b,
      D,
      null,
      _,
      k,
      yi(b, E),
      A,
      !1
    ), M > 0) {
      if (M & 16)
        tt(D, $, W, _, E);
      else if (M & 2 && $.class !== W.class && s(D, "class", null, W.class, E), M & 4 && s(D, "style", $.style, W.style, E), M & 8) {
        const te = b.dynamicProps;
        for (let O = 0; O < te.length; O++) {
          const N = te[O], H = $[N], Q = W[N];
          (Q !== H || N === "value") && s(D, N, H, Q, E, _);
        }
      }
      M & 1 && h.children !== b.children && y(D, b.children);
    } else !L && T == null && tt(D, $, W, _, E);
    ((J = W.onVnodeUpdated) || G) && mt(() => {
      J && Ht(J, _, b, h), G && mr(b, h, _, "updated");
    }, k);
  }, Ie = (h, b, _, k, E, A, L) => {
    for (let D = 0; D < b.length; D++) {
      const M = h[D], T = b[D], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Kr(M, T) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? S(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      z(
        M,
        T,
        G,
        null,
        k,
        E,
        A,
        L,
        !0
      );
    }
  }, tt = (h, b, _, k, E) => {
    if (b !== _) {
      if (b !== xe)
        for (const A in b)
          !tn(A) && !(A in _) && s(
            h,
            A,
            b[A],
            null,
            E,
            k
          );
      for (const A in _) {
        if (tn(A)) continue;
        const L = _[A], D = b[A];
        L !== D && A !== "value" && s(h, A, D, L, E, k);
      }
      "value" in _ && s(h, "value", b.value, _.value, E);
    }
  }, ct = (h, b, _, k, E, A, L, D, M) => {
    const T = b.el = h ? h.el : c(""), G = b.anchor = h ? h.anchor : c("");
    let { patchFlag: $, dynamicChildren: W, slotScopeIds: J } = b;
    J && (D = D ? D.concat(J) : J), h == null ? (n(T, _, k), n(G, _, k), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      G,
      E,
      A,
      L,
      D,
      M
    )) : $ > 0 && $ & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === W.length ? (Ie(
      h.dynamicChildren,
      W,
      _,
      E,
      A,
      L,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || E && b === E.subTree) && ha(
      h,
      b,
      !0
      /* shallow */
    )) : ue(
      h,
      b,
      _,
      G,
      E,
      A,
      L,
      D,
      M
    );
  }, We = (h, b, _, k, E, A, L, D, M) => {
    b.slotScopeIds = D, h == null ? b.shapeFlag & 512 ? E.ctx.activate(
      b,
      _,
      k,
      L,
      M
    ) : Et(
      b,
      _,
      k,
      E,
      A,
      L,
      M
    ) : De(h, b, M);
  }, Et = (h, b, _, k, E, A, L) => {
    const D = h.component = Ac(
      h,
      k,
      E
    );
    if (ns(h) && (D.ctx.renderer = rt), kc(D, !1, L), D.asyncDep) {
      if (E && E.registerDep(D, Le, L), !h.el) {
        const M = D.subTree = Jt(tr);
        ie(null, M, b, _), h.placeholder = M.el;
      }
    } else
      Le(
        D,
        h,
        b,
        _,
        E,
        A,
        L
      );
  }, De = (h, b, _) => {
    const k = b.component = h.component;
    if (lc(h, b, _))
      if (k.asyncDep && !k.asyncResolved) {
        me(k, b, _);
        return;
      } else
        k.next = b, k.update();
    else
      b.el = h.el, k.vnode = b;
  }, Le = (h, b, _, k, E, A, L) => {
    const D = () => {
      if (h.isMounted) {
        let { next: $, bu: W, u: J, parent: te, vnode: O } = h;
        {
          const ye = ma(h);
          if (ye) {
            $ && ($.el = O.el, me(h, $, L)), ye.asyncDep.then(() => {
              mt(() => {
                h.isUnmounted || T();
              }, E);
            });
            return;
          }
        }
        let N = $, H;
        br(h, !1), $ ? ($.el = O.el, me(h, $, L)) : $ = O, W && In(W), (H = $.props && $.props.onVnodeBeforeUpdate) && Ht(H, te, $, O), br(h, !0);
        const Q = Ns(h), oe = h.subTree;
        h.subTree = Q, z(
          oe,
          Q,
          // parent may have changed if it's in a teleport
          S(oe.el),
          // anchor may have changed if it's in a fragment
          ut(oe),
          h,
          E,
          A
        ), $.el = Q.el, N === null && cc(h, Q.el), J && mt(J, E), (H = $.props && $.props.onVnodeUpdated) && mt(
          () => Ht(H, te, $, O),
          E
        );
      } else {
        let $;
        const { el: W, props: J } = b, { bm: te, m: O, parent: N, root: H, type: Q } = h, oe = on(b);
        br(h, !1), te && In(te), !oe && ($ = J && J.onVnodeBeforeMount) && Ht($, N, b), br(h, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            Q,
            h.parent ? h.parent.type : void 0
          );
          const ye = h.subTree = Ns(h);
          z(
            null,
            ye,
            _,
            k,
            h,
            E,
            A
          ), b.el = ye.el;
        }
        if (O && mt(O, E), !oe && ($ = J && J.onVnodeMounted)) {
          const ye = b;
          mt(
            () => Ht($, N, ye),
            E
          );
        }
        (b.shapeFlag & 256 || N && on(N.vnode) && N.vnode.shapeFlag & 256) && h.a && mt(h.a, E), h.isMounted = !0, b = _ = k = null;
      }
    };
    h.scope.on();
    const M = h.effect = new xo(D);
    h.scope.off();
    const T = h.update = M.run.bind(M), G = h.job = M.runIfDirty.bind(M);
    G.i = h, G.id = h.uid, M.scheduler = () => ts(G), br(h, !0), T();
  }, me = (h, b, _) => {
    b.component = h;
    const k = h.vnode.props;
    h.vnode = b, h.next = null, dc(h, b.props, k, _), mc(h, b.children, _), Zt(), Cs(h), Qt();
  }, ue = (h, b, _, k, E, A, L, D, M = !1) => {
    const T = h && h.children, G = h ? h.shapeFlag : 0, $ = b.children, { patchFlag: W, shapeFlag: J } = b;
    if (W > 0) {
      if (W & 128) {
        be(
          T,
          $,
          _,
          k,
          E,
          A,
          L,
          D,
          M
        );
        return;
      } else if (W & 256) {
        je(
          T,
          $,
          _,
          k,
          E,
          A,
          L,
          D,
          M
        );
        return;
      }
    }
    J & 8 ? (G & 16 && Be(T, E, A), $ !== T && y(_, $)) : G & 16 ? J & 16 ? be(
      T,
      $,
      _,
      k,
      E,
      A,
      L,
      D,
      M
    ) : Be(T, E, A, !0) : (G & 8 && y(_, ""), J & 16 && $e(
      $,
      _,
      k,
      E,
      A,
      L,
      D,
      M
    ));
  }, je = (h, b, _, k, E, A, L, D, M) => {
    h = h || Mr, b = b || Mr;
    const T = h.length, G = b.length, $ = Math.min(T, G);
    let W;
    for (W = 0; W < $; W++) {
      const J = b[W] = M ? Gt(b[W]) : Vt(b[W]);
      z(
        h[W],
        J,
        _,
        null,
        E,
        A,
        L,
        D,
        M
      );
    }
    T > G ? Be(
      h,
      E,
      A,
      !0,
      !1,
      $
    ) : $e(
      b,
      _,
      k,
      E,
      A,
      L,
      D,
      M,
      $
    );
  }, be = (h, b, _, k, E, A, L, D, M) => {
    let T = 0;
    const G = b.length;
    let $ = h.length - 1, W = G - 1;
    for (; T <= $ && T <= W; ) {
      const J = h[T], te = b[T] = M ? Gt(b[T]) : Vt(b[T]);
      if (Kr(J, te))
        z(
          J,
          te,
          _,
          null,
          E,
          A,
          L,
          D,
          M
        );
      else
        break;
      T++;
    }
    for (; T <= $ && T <= W; ) {
      const J = h[$], te = b[W] = M ? Gt(b[W]) : Vt(b[W]);
      if (Kr(J, te))
        z(
          J,
          te,
          _,
          null,
          E,
          A,
          L,
          D,
          M
        );
      else
        break;
      $--, W--;
    }
    if (T > $) {
      if (T <= W) {
        const J = W + 1, te = J < G ? b[J].el : k;
        for (; T <= W; )
          z(
            null,
            b[T] = M ? Gt(b[T]) : Vt(b[T]),
            _,
            te,
            E,
            A,
            L,
            D,
            M
          ), T++;
      }
    } else if (T > W)
      for (; T <= $; )
        Ve(h[T], E, A, !0), T++;
    else {
      const J = T, te = T, O = /* @__PURE__ */ new Map();
      for (T = te; T <= W; T++) {
        const ke = b[T] = M ? Gt(b[T]) : Vt(b[T]);
        ke.key != null && O.set(ke.key, T);
      }
      let N, H = 0;
      const Q = W - te + 1;
      let oe = !1, ye = 0;
      const fe = new Array(Q);
      for (T = 0; T < Q; T++) fe[T] = 0;
      for (T = J; T <= $; T++) {
        const ke = h[T];
        if (H >= Q) {
          Ve(ke, E, A, !0);
          continue;
        }
        let Te;
        if (ke.key != null)
          Te = O.get(ke.key);
        else
          for (N = te; N <= W; N++)
            if (fe[N - te] === 0 && Kr(ke, b[N])) {
              Te = N;
              break;
            }
        Te === void 0 ? Ve(ke, E, A, !0) : (fe[Te - te] = T + 1, Te >= ye ? ye = Te : oe = !0, z(
          ke,
          b[Te],
          _,
          null,
          E,
          A,
          L,
          D,
          M
        ), H++);
      }
      const Me = oe ? _c(fe) : Mr;
      for (N = Me.length - 1, T = Q - 1; T >= 0; T--) {
        const ke = te + T, Te = b[ke], nt = b[ke + 1], Lt = ke + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          nt.el || ba(nt)
        ) : k;
        fe[T] === 0 ? z(
          null,
          Te,
          _,
          Lt,
          E,
          A,
          L,
          D,
          M
        ) : oe && (N < 0 || T !== Me[N] ? we(Te, _, Lt, 2) : N--);
      }
    }
  }, we = (h, b, _, k, E = null) => {
    const { el: A, type: L, transition: D, children: M, shapeFlag: T } = h;
    if (T & 6) {
      we(h.component.subTree, b, _, k);
      return;
    }
    if (T & 128) {
      h.suspense.move(b, _, k);
      return;
    }
    if (T & 64) {
      L.move(h, b, _, rt);
      return;
    }
    if (L === se) {
      n(A, b, _);
      for (let $ = 0; $ < M.length; $++)
        we(M[$], b, _, k);
      n(h.anchor, b, _);
      return;
    }
    if (L === gi) {
      U(h, b, _);
      return;
    }
    if (k !== 2 && T & 1 && D)
      if (k === 0)
        D.persisted && !A[mi] ? n(A, b, _) : (D.beforeEnter(A), n(A, b, _), mt(() => D.enter(A), E));
      else {
        const { leave: $, delayLeave: W, afterLeave: J } = D, te = () => {
          h.ctx.isUnmounted ? i(A) : n(A, b, _);
        }, O = () => {
          const N = A._isLeaving || !!A[mi];
          A._isLeaving && A[mi](
            !0
            /* cancelled */
          ), D.persisted && !N ? te() : $(A, () => {
            te(), J && J();
          });
        };
        W ? W(A, te, O) : O();
      }
    else
      n(A, b, _);
  }, Ve = (h, b, _, k = !1, E = !1) => {
    const {
      type: A,
      props: L,
      ref: D,
      children: M,
      dynamicChildren: T,
      shapeFlag: G,
      patchFlag: $,
      dirs: W,
      cacheIndex: J,
      memo: te
    } = h;
    if ($ === -2 && (E = !1), D != null && (Zt(), sn(D, null, _, h, !0), Qt()), J != null && (b.renderCache[J] = void 0), G & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const O = G & 1 && W, N = !on(h);
    let H;
    if (N && (H = L && L.onVnodeBeforeUnmount) && Ht(H, b, h), G & 6)
      At(h.component, _, k);
    else {
      if (G & 128) {
        h.suspense.unmount(_, k);
        return;
      }
      O && mr(h, null, b, "beforeUnmount"), G & 64 ? h.type.remove(
        h,
        b,
        _,
        rt,
        k
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== se || $ > 0 && $ & 64) ? Be(
        T,
        b,
        _,
        !1,
        !0
      ) : (A === se && $ & 384 || !E && G & 16) && Be(M, b, _), k && Ye(h);
    }
    const Q = te != null && J == null;
    (N && (H = L && L.onVnodeUnmounted) || O || Q) && mt(() => {
      H && Ht(H, b, h), O && mr(h, null, b, "unmounted"), Q && (h.el = null);
    }, _);
  }, Ye = (h) => {
    const { type: b, el: _, anchor: k, transition: E } = h;
    if (b === se) {
      pe(_, k);
      return;
    }
    if (b === gi) {
      V(h);
      return;
    }
    const A = () => {
      i(_), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (h.shapeFlag & 1 && E && !E.persisted) {
      const { leave: L, delayLeave: D } = E, M = () => L(_, A);
      D ? D(h.el, A, M) : M();
    } else
      A();
  }, pe = (h, b) => {
    let _;
    for (; h !== b; )
      _ = I(h), i(h), h = _;
    i(b);
  }, At = (h, b, _) => {
    const { bum: k, scope: E, job: A, subTree: L, um: D, m: M, a: T } = h;
    Ls(M), Ls(T), k && In(k), E.stop(), A && (A.flags |= 8, Ve(L, h, b, _)), D && mt(D, b), mt(() => {
      h.isUnmounted = !0;
    }, b);
  }, Be = (h, b, _, k = !1, E = !1, A = 0) => {
    for (let L = A; L < h.length; L++)
      Ve(h[L], b, _, k, E);
  }, ut = (h) => {
    if (h.shapeFlag & 6)
      return ut(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = I(h.anchor || h.el), _ = b && b[Ul];
    return _ ? I(_) : b;
  };
  let Tt = !1;
  const Ct = (h, b, _) => {
    let k;
    h == null ? b._vnode && (Ve(b._vnode, null, null, !0), k = b._vnode.component) : z(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = h, Tt || (Tt = !0, Cs(k), qo(), Tt = !1);
  }, rt = {
    p: z,
    um: Ve,
    m: we,
    r: Ye,
    mt: Et,
    mc: $e,
    pc: ue,
    pbc: Ie,
    n: ut,
    o: e
  };
  return {
    render: Ct,
    hydrate: void 0,
    createApp: rc(Ct)
  };
}
function yi({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function br({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ha(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ee(n) && ee(i))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let c = i[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[s] = Gt(i[s]), c.el = o.el), !r && c.patchFlag !== -2 && ha(o, c)), c.type === ri && (c.patchFlag === -1 && (c = i[s] = Gt(c)), c.el = o.el), c.type === tr && !c.el && (c.el = o.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, s, o, c;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (s = 0, o = r.length - 1; s < o; )
        c = s + o >> 1, e[r[c]] < v ? s = c + 1 : o = c;
      v < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, o = r[s - 1]; s-- > 0; )
    r[s] = o, o = t[o];
  return r;
}
function ma(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ma(t);
}
function Ls(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ba(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ba(t.subTree) : null;
}
const ya = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Ol(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), ri = /* @__PURE__ */ Symbol.for("v-txt"), tr = /* @__PURE__ */ Symbol.for("v-cmt"), gi = /* @__PURE__ */ Symbol.for("v-stc"), Cr = [];
let St = null;
function C(e = !1) {
  Cr.push(St = e ? null : []);
}
function ga() {
  Cr.pop(), St = Cr[Cr.length - 1] || null;
}
let dn = 1;
function Ms(e, t = !1) {
  dn += e, e < 0 && St && t && (St.hasOnce = !0);
}
function _a(e) {
  return e.dynamicChildren = dn > 0 ? St || Mr : null, ga(), dn > 0 && St && St.push(e), e;
}
function w(e, t, r, n, i, s) {
  return _a(
    l(
      e,
      t,
      r,
      n,
      i,
      s,
      !0
    )
  );
}
function Sc(e, t, r, n, i) {
  return _a(
    Jt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function va(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Kr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Sa = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ Qe(e) || ce(e) ? { i: wt, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, i = null, s = e === se ? 0 : 1, o = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Sa(t),
    ref: t && Mn(t),
    scopeId: Wo,
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
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: wt
  };
  return c ? (Vn(f, r), s & 128 && e.normalize(f)) : r && (f.shapeFlag |= Ue(r) ? 8 : 16), dn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  St && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && St.push(f), f;
}
const Jt = Ec;
function Ec(e, t = null, r = null, n = 0, i = null, s = !1) {
  if ((!e || e === Gl) && (e = tr), va(e)) {
    const c = jr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Vn(c, r), dn > 0 && !s && St && (c.shapeFlag & 6 ? St[St.indexOf(e)] = c : St.push(c)), c.patchFlag = -2, c;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: c, style: f } = t;
    c && !Ue(c) && (t.class = Ur(c)), Ce(f) && (/* @__PURE__ */ es(f) && !ee(f) && (f = et({}, f)), t.style = Ki(f));
  }
  const o = Ue(e) ? 1 : ya(e) ? 128 : Qn(e) ? 64 : Ce(e) ? 4 : ce(e) ? 2 : 0;
  return l(
    e,
    t,
    r,
    n,
    i,
    o,
    s,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ es(e) || la(e) ? et({}, e) : e : null;
}
function jr(e, t, r = !1, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: c, transition: f } = e, v = t ? Cc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Sa(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? ee(s) ? s.concat(Mn(t)) : [s, Mn(t)] : Mn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== se ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && jr(e.ssContent),
    ssFallback: e.ssFallback && jr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && rs(
    y,
    f.clone(y)
  ), y;
}
function ge(e = " ", t = 0) {
  return Jt(ri, null, e, t);
}
function de(e = "", t = !1) {
  return t ? (C(), Sc(tr, null, e)) : Jt(tr, null, e);
}
function Vt(e) {
  return e == null || typeof e == "boolean" ? Jt(tr) : ee(e) ? Jt(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : va(e) ? Gt(e) : Jt(ri, null, String(e));
}
function Gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jr(e);
}
function Vn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Vn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !la(t) ? t._ctx = wt : i === 3 && wt && (wt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ce(t)) {
    if (n & 65) {
      Vn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: wt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [ge(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ur([t.class, n.class]));
      else if (i === "style")
        t.style = Ki([t.style, n.style]);
      else if (Wn(i)) {
        const s = t[i], o = n[i];
        o && s !== o && !(ee(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Kn(i) && (t[i] = o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Ht(e, t, r, n = null) {
  It(e, t, 7, [
    r,
    n
  ]);
}
const wc = na();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || wc, s = {
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
    scope: new Qa(
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
    propsOptions: ua(n, i),
    emitsOptions: ia(n, i),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ic.bind(null, s), e.ce && e.ce(s), s;
}
let lt = null;
const Rc = () => lt || wt;
let Bn, fn;
{
  const e = Xn(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => lt = r
  ), fn = t(
    "__VUE_SSR_SETTERS__",
    (r) => pn = r
  );
}
const bn = (e) => {
  const t = lt;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Us = () => {
  lt && lt.scope.off(), Bn(null);
};
function Ea(e) {
  return e.vnode.shapeFlag & 4;
}
let pn = !1;
function kc(e, t = !1, r = !1) {
  t && fn(t);
  const { props: n, children: i } = e.vnode, s = Ea(e);
  uc(e, n, s, t), hc(e, i, r || t);
  const o = s ? Oc(e, t) : void 0;
  return t && fn(!1), o;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    Zt();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, s = bn(e), o = mn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = go(o);
    if (Qt(), s(), (c || e.sp) && !on(e) && Xo(e), c) {
      if (o.then(Us, Us), t)
        return o.then((f) => {
          fn(!0);
          try {
            Ds(e, f, t);
          } finally {
            fn(!1);
          }
        }).catch((f) => {
          Zn(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Ds(e, o);
  } else
    Ta(e);
}
function Ds(e, t, r) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = $o(t)), Ta(e);
}
function Ta(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || qt);
  {
    const i = bn(e);
    Zt();
    try {
      Xl(e);
    } finally {
      Qt(), i();
    }
  }
}
const Nc = {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
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
function ni(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($o(_l(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in an)
        return an[r](e);
    },
    has(t, r) {
      return r in t || r in an;
    }
  })) : e.proxy;
}
function Ic(e) {
  return ce(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ wl(e, t, pn), Lc = "3.5.42";
let ji;
const Fs = typeof window < "u" && window.trustedTypes;
if (Fs)
  try {
    ji = /* @__PURE__ */ Fs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ca = ji ? (e) => ji.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Hs = Kt && /* @__PURE__ */ Kt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Kt.createElementNS(Mc, e) : t === "mathml" ? Kt.createElementNS(Uc, e) : r ? Kt.createElement(e, { is: r }) : Kt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Kt.createTextNode(e),
  createComment: (e) => Kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, s) {
    const o = r ? r.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Hs.innerHTML = Ca(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Hs.content;
      if (n === "svg" || n === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, r);
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
const $s = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = Ue(r);
  let s = !1;
  if (r && !i) {
    if (t)
      if (Ue(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          r[c] == null && Qr(n, c, "");
        }
      else
        for (const o in t)
          r[o] == null && Qr(n, o, "");
    for (const o in r) {
      o === "display" && (s = !0);
      const c = r[o];
      c != null ? zc(
        e,
        o,
        !Ue(t) && t ? t[o] : void 0,
        c
      ) || Qr(n, o, c) : Qr(n, o, "");
    }
  } else if (i) {
    if (t !== r) {
      const o = n[jc];
      o && (r += ";" + o), n.cssText = r, s = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  $s in e && (e[$s] = s ? n.display : "", e[$c] && (n.display = "none"));
}
const kn = /\s*!important$/;
function Qr(e, t, r) {
  if (ee(r))
    r.forEach((n) => Qr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    kn.test(r) ? e.setProperty(t, r.replace(kn, ""), "important") : e.setProperty(t, r);
  else {
    const n = qc(e, t);
    kn.test(r) ? e.setProperty(
      xr(n),
      r.replace(kn, ""),
      "important"
    ) : e[n] = r;
  }
}
const js = ["Webkit", "Moz", "ms"], _i = {};
function qc(e, t) {
  const r = _i[t];
  if (r)
    return r;
  let n = Ot(t);
  if (n !== "filter" && n in e)
    return _i[t] = n;
  n = So(n);
  for (let i = 0; i < js.length; i++) {
    const s = js[i] + n;
    if (s in e)
      return _i[t] = s;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Vs = "http://www.w3.org/1999/xlink";
function Bs(e, t, r, n, i, s = Xa(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Vs, t.slice(6, t.length)) : e.setAttributeNS(Vs, t, r) : r == null || s && !To(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : zt(r) ? String(r) : r
  );
}
function qs(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ca(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (c !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const c = typeof e[t];
    c === "boolean" ? r = To(r) : r == null && c === "string" ? (r = "", o = !0) : c === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function vr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const zs = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const s = e[zs] || (e[zs] = {}), o = s[t];
  if (n && o)
    o.value = n;
  else {
    const [c, f] = Xc(t);
    if (n) {
      const v = s[t] = Qc(
        n,
        i
      );
      vr(e, c, v, f);
    } else o && (Wc(e, c, o, f), s[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : xr(e.slice(2)), t];
}
let vi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => vi || (Jc.then(() => vi = 0), vi = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (ee(i)) {
      const s = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        s.call(n), n._stopped = !0;
      };
      const o = i.slice(), c = [n];
      for (let f = 0; f < o.length && !n._stopped; f++) {
        const v = o[f];
        v && It(
          v,
          t,
          5,
          c
        );
      }
    } else
      It(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, s) => {
  const o = i === "svg";
  t === "class" ? Hc(e, n, o) : t === "style" ? Bc(e, r, n) : Wn(t) ? Kn(t) || Kc(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, o)) ? (qs(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bs(e, t, n, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? qs(e, Ot(t), n, s, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Bs(e, t, n, o));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ws(t) && ce(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ws(t) && Ue(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Ot(t);
  return Array.isArray(r) ? r.some((i) => Ot(i) === n) : Object.keys(r).some((i) => Ot(i) === n);
}
const qn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => In(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Ks(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sr = /* @__PURE__ */ Symbol("_assign"), On = /* @__PURE__ */ Symbol("_initialValue");
function Si(e, t, r) {
  return t && (e = e.trim()), r && (e = Yn(e)), e;
}
const Ei = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[On] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[On] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Sr] = qn(i);
    const s = n || i.props && i.props.type === "number";
    vr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Sr](Si(e.value, r, s));
    }), (r || s) && vr(e, "change", () => {
      e.value = Si(e.value, r, s);
    }), t || (vr(e, "compositionstart", nu), vr(e, "compositionend", Ks), vr(e, "change", Ks));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", s = e[On];
    delete e[On], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[Sr](Si(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: s } }, o) {
    if (e[Sr] = qn(o), e.composing) return;
    const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, f = t ?? "";
    if (c === f)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === f) || (e.value = f);
  }
}, st = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, vr(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => r ? Yn(zn(f)) : zn(f)
      ), s = e.multiple, o = s ? wr(e._modelValue) ? new Set(i) : i : i[0], c = e._pendingValue = [
        s,
        s ? ee(o) ? i.slice() : i : o
      ];
      try {
        e[Sr](o);
      } finally {
        Vo(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Sr] = qn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Gs(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Sr] = qn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && Gs(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return fr(e, t);
  if (wr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Gs(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !wr(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], c = zn(o);
      if (r)
        if (n) {
          const f = typeof c;
          f === "string" || f === "number" ? o.selected = t.some((v) => String(v) === String(c)) : o.selected = Za(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (fr(zn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function zn(e) {
  return "_value" in e ? e._value : e.value;
}
const su = ["ctrl", "shift", "alt", "meta"], ou = {
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
}, Nn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const c = ou[t[o]];
      if (c && c(i, t)) return;
    }
    return e(i, ...s);
  }));
}, au = /* @__PURE__ */ et({ patchProp: eu }, Dc);
let Ys;
function lu() {
  return Ys || (Ys = bc(au));
}
const cu = ((...e) => {
  const t = lu().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = du(n);
    if (!i) return;
    const s = t._component;
    !ce(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return Ue(e) ? document.querySelector(e) : e;
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
    const s = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function Xs(e, t) {
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
    var n, i, s, o, c = [], f = !0, v = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(f = (n = s.call(r)).done) && (c.push(n.value), c.length !== t); f = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!f && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw i;
      }
    }
    return c;
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
    if (typeof e == "string") return Xs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xs(e, t) : void 0;
  }
}
const wa = Object.entries, Js = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let He = Object.freeze, ze = Object.seal, Lr = Object.create, xa = typeof Reflect < "u" && Reflect, Vi = xa.apply, Bi = xa.construct;
He || (He = function(t) {
  return t;
});
ze || (ze = function(t) {
  return t;
});
Vi || (Vi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Bi || (Bi = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const _r = Fe(Array.prototype.forEach), Su = Fe(Array.prototype.lastIndexOf), Zs = Fe(Array.prototype.pop), Gr = Fe(Array.prototype.push), Eu = Fe(Array.prototype.splice), Hr = Array.isArray, en = Fe(String.prototype.toLowerCase), Ti = Fe(String.prototype.toString), Qs = Fe(String.prototype.match), Yr = Fe(String.prototype.replace), eo = Fe(String.prototype.indexOf), Tu = Fe(String.prototype.trim), Cu = Fe(Number.prototype.toString), wu = Fe(Boolean.prototype.toString), to = typeof BigInt > "u" ? null : Fe(BigInt.prototype.toString), ro = typeof Symbol > "u" ? null : Fe(Symbol.prototype.toString), bt = Fe(Object.prototype.hasOwnProperty), Xr = Fe(Object.prototype.toString), Je = Fe(RegExp.prototype.test), yr = xu(TypeError);
function Fe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Vi(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Bi(e, r);
  };
}
function he(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : en;
  if (Js && Js(e, null), !Hr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (gu(t) || (t[n] = s), i = s);
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
function vt(e) {
  const t = Lr(null);
  for (const n of wa(e)) {
    var r = bu(n, 2);
    const i = r[0], s = r[1];
    bt(e, i) && (Hr(s) ? t[i] = Au(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = vt(s) : t[i] = s);
  }
  return t;
}
function Ru(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Cu(e);
    case "boolean":
      return wu(e);
    case "bigint":
      return to ? to(e) : "0";
    case "symbol":
      return ro ? ro(e) : "Symbol()";
    case "undefined":
      return Xr(e);
    case "function":
    case "object": {
      if (e === null)
        return Xr(e);
      const t = e, r = kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Xr(n);
      }
      return Xr(e);
    }
    default:
      return Xr(e);
  }
}
function kt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return Fe(n.get);
      if (typeof n.value == "function")
        return Fe(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function ku(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const no = He(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ci = He(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wi = He(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = He(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xi = He(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = He(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), io = He(["#text"]), so = He(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ai = He(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oo = He(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Pn = He(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = ze(/{{[\w\W]*|^[\w\W]*}}/g), Iu = ze(/<%[\w\W]*|^[\w\W]*%>/g), Lu = ze(/\${[\w\W]*/g), Mu = ze(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = ze(/^aria-[\-\w]+$/), ao = ze(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = ze(/^(?:\w+script|data):/i), Fu = ze(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = ze(/^html$/i), $u = ze(/^[a-z][.\w]*(-[.\w]+)+$/i), lo = ze(/<[/\w!]/g), co = ze(/<[/\w]/g), ju = ze(/<\/no(script|embed|frames)/i), Vu = ze(/\/>/i), _t = {
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
}, Aa = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = He(he({}, Aa)), qu = (function() {
  const e = {};
  return _r(Aa, (t) => {
    e[t] = ze(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), He(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
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
}, uo = function() {
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
}, lr = function(t, r, n, i) {
  return bt(t, r) && Hr(t[r]) ? he(i.base ? vt(i.base) : {}, t[r], i.transform) : n;
}, Ri = function(t, r, n) {
  const i = bt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? vt(i) : n();
};
function Ra() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ra(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== _t.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, c = e.Element, f = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, S = e.trustedTypes, I = c.prototype, j = kt(I, "cloneNode"), ne = kt(I, "remove"), z = kt(I, "nextSibling"), le = kt(I, "childNodes"), ie = kt(I, "parentNode"), q = kt(I, "shadowRoot"), U = kt(I, "attributes"), V = o && o.prototype ? kt(o.prototype, "nodeType") : null, ae = o && o.prototype ? kt(o.prototype, "nodeName") : null, Pe = o && o.prototype ? kt(o.prototype, "ownerDocument") : null, Oe = function(u) {
    return V ? V(u) : u.nodeType;
  }, $e = function(u) {
    return ae ? ae(u) : u.nodeName;
  };
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Ie = "", tt, ct = !1, We = 0;
  const Et = function() {
    if (We > 0)
      throw yr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(u) {
    Et(), We++;
    try {
      return Ee.createHTML(u);
    } finally {
      We--;
    }
  }, Le = function(u) {
    Et(), We++;
    try {
      return Ee.createScriptURL(u);
    } finally {
      We--;
    }
  }, me = function() {
    return ct || (tt = Wu(S, i), ct = !0), tt;
  }, ue = r, je = ue.implementation, be = ue.createNodeIterator, we = ue.createDocumentFragment, Ve = ue.getElementsByTagName, Ye = n.importNode;
  let pe = uo();
  t.isSupported = typeof wa == "function" && typeof ie == "function" && je && je.createHTMLDocument !== void 0;
  const At = Pu, Be = Iu, ut = Lu, Tt = Mu, Ct = Uu, rt = Du, dt = Fu, h = $u;
  let b = ao, _ = null;
  const k = he({}, [...no, ...Ci, ...wi, ...xi, ...io]);
  let E = null;
  const A = he({}, [...so, ...Ai, ...oo, ...Pn]);
  let L = Object.seal(Lr(null, {
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
  })), D = null, M = null;
  const T = Object.seal(Lr(null, {
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
  let G = !0, $ = !0, W = !1, J = !0, te = !1, O = !0, N = !1, H = !1, Q = null, oe = null, ye = !1, fe = !1, Me = !1, ke = !1, Te = !0, nt = !1;
  const Lt = "user-content-";
  let Mt = !0, pr = !1, Rt = {}, yt = null;
  const nr = he({}, [
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
  let Ut = null;
  const ir = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let gt = null;
  const Ar = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Dt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", Xe = "http://www.w3.org/1999/xhtml";
  let sr = Xe, Vr = !1, Br = null;
  const ii = he({}, [Dt, ft, Xe], Ti), yn = He(["mi", "mo", "mn", "ms", "mtext"]);
  let qr = he({}, yn);
  const gn = He(["annotation-xml"]);
  let Rr = he({}, gn);
  const _n = he({}, ["title", "style", "font", "a", "script"]);
  let P = null;
  const x = ["application/xhtml+xml", "text/html"], p = "text/html";
  let Z = null, Ke = null;
  const or = r.createElement("form"), os = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, si = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ke && Ke === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = vt(u), P = // eslint-disable-next-line unicorn/prefer-includes
    x.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? p : u.PARSER_MEDIA_TYPE, Z = P === "application/xhtml+xml" ? Ti : en, _ = lr(u, "ALLOWED_TAGS", k, {
      transform: Z
    }), E = lr(u, "ALLOWED_ATTR", A, {
      transform: Z
    }), Br = lr(u, "ALLOWED_NAMESPACES", ii, {
      transform: Ti
    }), gt = lr(u, "ADD_URI_SAFE_ATTR", Ar, {
      transform: Z,
      base: Ar
    }), Ut = lr(u, "ADD_DATA_URI_TAGS", ir, {
      transform: Z,
      base: ir
    }), yt = lr(u, "FORBID_CONTENTS", nr, {
      transform: Z
    }), D = lr(u, "FORBID_TAGS", vt({}), {
      transform: Z
    }), M = lr(u, "FORBID_ATTR", vt({}), {
      transform: Z
    }), Rt = bt(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? vt(u.USE_PROFILES) : u.USE_PROFILES : !1, G = u.ALLOW_ARIA_ATTR !== !1, $ = u.ALLOW_DATA_ATTR !== !1, W = u.ALLOW_UNKNOWN_PROTOCOLS || !1, J = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = u.SAFE_FOR_TEMPLATES || !1, O = u.SAFE_FOR_XML !== !1, N = u.WHOLE_DOCUMENT || !1, fe = u.RETURN_DOM || !1, Me = u.RETURN_DOM_FRAGMENT || !1, ke = u.RETURN_TRUSTED_TYPE || !1, ye = u.FORCE_BODY || !1, Te = u.SANITIZE_DOM !== !1, nt = u.SANITIZE_NAMED_PROPS || !1, Mt = u.KEEP_CONTENT !== !1, pr = u.IN_PLACE || !1, b = ku(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : ao, sr = typeof u.NAMESPACE == "string" ? u.NAMESPACE : Xe, qr = Ri(
      u,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => he({}, yn)
      // Default built-in map
    ), Rr = Ri(
      u,
      "HTML_INTEGRATION_POINTS",
      () => he({}, gn)
      // Default built-in map
    );
    const g = Ri(u, "CUSTOM_ELEMENT_HANDLING", () => Lr(null));
    if (L = Lr(null), bt(g, "tagNameCheck") && os(g.tagNameCheck) && (L.tagNameCheck = g.tagNameCheck), bt(g, "attributeNameCheck") && os(g.attributeNameCheck) && (L.attributeNameCheck = g.attributeNameCheck), bt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), ze(L), te && ($ = !1), Me && (fe = !0), Rt && (_ = he({}, io), E = Lr(null), Rt.html === !0 && (he(_, no), he(E, so)), Rt.svg === !0 && (he(_, Ci), he(E, Ai), he(E, Pn)), Rt.svgFilters === !0 && (he(_, wi), he(E, Ai), he(E, Pn)), Rt.mathMl === !0 && (he(_, xi), he(E, oo), he(E, Pn))), T.tagCheck = null, T.attributeCheck = null, bt(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? T.tagCheck = u.ADD_TAGS : Hr(u.ADD_TAGS) && (_ === k && (_ = vt(_)), he(_, u.ADD_TAGS, Z))), bt(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? T.attributeCheck = u.ADD_ATTR : Hr(u.ADD_ATTR) && (E === A && (E = vt(E)), he(E, u.ADD_ATTR, Z))), bt(u, "ADD_FORBID_CONTENTS") && Hr(u.ADD_FORBID_CONTENTS) && (yt === nr && (yt = vt(yt)), he(yt, u.ADD_FORBID_CONTENTS, Z)), Mt && (_["#text"] = !0), N && he(_, ["html", "head", "body"]), _.table && (he(_, ["tbody"]), delete D.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Ee;
      Ee = u.TRUSTED_TYPES_POLICY;
      try {
        Ie = De("");
      } catch (B) {
        throw Ee = R, B;
      }
    } else u.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Ie = "") : (Ee === void 0 && (Ee = me()), Ee && typeof Ie == "string" && (Ie = De("")));
    He && He(u), Ke = u;
  }, as = he({}, [...Ci, ...wi, ...Ou]), ls = he({}, [...xi, ...Nu]), Oa = function(u, g, R) {
    return g.namespaceURI === Xe ? u === "svg" : g.namespaceURI === Dt ? u === "svg" && (R === "annotation-xml" || qr[R]) : !!as[u];
  }, Na = function(u, g, R) {
    return g.namespaceURI === Xe ? u === "math" : g.namespaceURI === ft ? u === "math" && Rr[R] : !!ls[u];
  }, Pa = function(u, g, R) {
    return g.namespaceURI === ft && !Rr[R] || g.namespaceURI === Dt && !qr[R] ? !1 : !ls[u] && (_n[u] || !as[u]);
  }, Ia = function(u) {
    let g = ie(u);
    (!g || !g.tagName) && (g = {
      namespaceURI: sr,
      tagName: "template"
    });
    const R = en(u.tagName), B = en(g.tagName);
    return Br[u.namespaceURI] ? u.namespaceURI === ft ? Oa(R, g, B) : u.namespaceURI === Dt ? Na(R, g, B) : u.namespaceURI === Xe ? Pa(R, g, B) : !!(P === "application/xhtml+xml" && Br[u.namespaceURI]) : !1;
  }, ar = function(u) {
    Gr(t.removed, {
      element: u
    });
    try {
      ie(u).removeChild(u);
    } catch {
      if (ne(u), !ie(u))
        throw yr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, cs = function(u, g, R) {
    try {
      u.removeAttributeNode(g);
    } catch {
      try {
        u.removeAttribute(R);
      } catch {
      }
    }
  }, vn = function(u) {
    Sn(u);
    const g = le(u);
    if (g) {
      const B = [];
      _r(g, (X) => {
        Gr(B, X);
      }), _r(B, (X) => {
        try {
          ne(X);
        } catch {
        }
      });
    }
    const R = U(u);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const X = R[B], re = X && X.name;
        typeof re == "string" && cs(u, X, re);
      }
  }, hr = function(u, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(u);
      } catch {
        R = null;
      }
    Gr(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(u);
    } catch {
      try {
        g.removeAttribute(u);
      } catch {
      }
    }
    if (u === "is")
      if (fe || Me)
        try {
          ar(g);
        } catch {
        }
      else
        try {
          g.setAttribute(u, "");
        } catch {
        }
  }, La = function(u) {
    const g = U(u);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], X = B && B.name;
        typeof X != "string" || E[Z(X)] || cs(u, B, X);
      }
  }, Sn = function(u) {
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop();
      Oe(R) === _t.element && La(R);
      const X = le(R);
      if (X)
        for (let re = X.length - 1; re >= 0; --re)
          g.push(X[re]);
    }
  }, us = function(u, g) {
    return O ? u === "patchsrc" ? !0 : u === "for" && g !== "label" && g !== "output" : !1;
  }, Ma = function(u) {
    if (!O)
      return;
    const g = [u];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Oe(R);
      if (B === _t.processingInstruction || B === _t.comment && Je(co, R.data)) {
        try {
          ne(R);
        } catch {
        }
        continue;
      }
      if (B === _t.element) {
        const re = R, Ae = Z($e(R));
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && us("for", Ae) && re.removeAttribute("for");
        } catch {
        }
      }
      const X = le(R);
      if (X)
        for (let re = X.length - 1; re >= 0; --re)
          g.push(X[re]);
    }
  }, ds = function(u) {
    let g = null, R = null;
    if (ye)
      u = "<remove></remove>" + u;
    else {
      const re = Qs(u, /^[\r\n\t ]+/);
      R = re && re[0];
    }
    P === "application/xhtml+xml" && sr === Xe && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const B = Ee ? De(u) : u;
    if (sr === Xe)
      try {
        g = new y().parseFromString(B, P);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = je.createDocument(sr, "template", null);
      try {
        g.documentElement.innerHTML = Vr ? Ie : B;
      } catch {
      }
    }
    const X = g.body || g.documentElement;
    return u && R && X.insertBefore(r.createTextNode(R), X.childNodes[0] || null), sr === Xe ? Ve.call(g, N ? "html" : "body")[0] : N ? g.documentElement : X;
  }, fs = function(u) {
    const g = Pe ? Pe(u) : u.ownerDocument;
    return be.call(
      g || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, En = function(u) {
    return u = Yr(u, At, " "), u = Yr(u, Be, " "), u = Yr(u, ut, " "), u;
  }, oi = function(u) {
    var g;
    u.normalize();
    const R = Pe ? Pe(u) : u.ownerDocument, B = be.call(
      R || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = B.nextNode();
    for (; X; )
      X.data = En(X.data), X = B.nextNode();
    const re = (g = u.querySelectorAll) === null || g === void 0 ? void 0 : g.call(u, "template");
    re && _r(re, (Ae) => {
      kr(Ae.content) && oi(Ae.content);
    });
  }, Tn = function(u) {
    const g = ae ? ae(u) : null;
    return typeof g != "string" || Z(g) !== "form" ? !1 : typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    u.attributes !== U(u) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    u.nodeType !== V(u) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    u.childNodes !== le(u);
  }, kr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return V(u) === _t.documentFragment;
    } catch {
      return !1;
    }
  }, zr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return typeof V(u) == "number";
    } catch {
      return !1;
    }
  };
  function Ft(F, u, g) {
    F.length !== 0 && _r(F, (R) => {
      R.call(t, u, g, Ke);
    });
  }
  const Ua = function(u, g) {
    return !!(O && u.hasChildNodes() && !zr(u.firstElementChild) && Je(lo, u.textContent) && Je(lo, u.innerHTML) || O && u.namespaceURI === Xe && Bu[g] && (zr(u.firstElementChild) || typeof u.textContent == "string" && Je(qu[g], u.textContent)) || u.nodeType === _t.processingInstruction || O && u.nodeType === _t.comment && Je(co, u.data));
  }, Cn = function(u, g) {
    if (u instanceof RegExp)
      return Je(u, g);
    if (u instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), X = 2; X < R; X++)
        B[X - 2] = arguments[X];
      return !!u(g, ...B);
    }
    return !1;
  }, Da = function(u, g, R) {
    if (!D[g] && ys(g) && Cn(L.tagNameCheck, g))
      return !1;
    if (Mt && !yt[g]) {
      const B = ie(u), X = le(u);
      if (X && B) {
        const re = X.length;
        for (let Ae = re - 1; Ae >= 0; --Ae) {
          const Ne = u === R ? j(X[Ae], !0) : X[Ae];
          B.insertBefore(Ne, z(u));
        }
      }
    }
    return ar(u), !0;
  }, ps = function(u, g, R, B) {
    return u.length === 0 ? g : g === R || g === B ? vt(g) : g;
  }, hs = function(u, g) {
    return u === g || ie(u) !== null ? !1 : (pr && Sn(u), !0);
  }, ms = function(u, g) {
    if (Ft(pe.beforeSanitizeElements, u, null), hs(u, g))
      return !0;
    if (Tn(u))
      return ar(u), !0;
    const R = Z($e(u));
    if (_ = ps(pe.uponSanitizeElement, _, k, Q), Ft(pe.uponSanitizeElement, u, {
      tagName: R,
      allowedTags: _
    }), hs(u, g))
      return !0;
    if (Ua(u, R))
      return ar(u), !0;
    if (D[R] || !(T.tagCheck instanceof Function && T.tagCheck(R)) && !_[R]) {
      const X = Da(u, R, g);
      return X === !1 && Ft(pe.afterSanitizeElements, u, null), X;
    }
    if (Oe(u) === _t.element && !Ia(u) || (R === "noscript" || R === "noembed" || R === "noframes") && Je(ju, u.innerHTML))
      return ar(u), !0;
    if (te && u.nodeType === _t.text) {
      const X = En(u.textContent);
      u.textContent !== X && (Gr(t.removed, {
        element: u.cloneNode()
      }), u.textContent = X);
    }
    return Ft(pe.afterSanitizeElements, u, null), !1;
  }, bs = function(u, g, R) {
    if (M[g] || us(g, u) || Te && (g === "id" || g === "name") && (R in r || R in or))
      return !1;
    const B = E[g] || T.attributeCheck instanceof Function && T.attributeCheck(g, u);
    return $ && Je(Tt, g) || G && Je(Ct, g) ? !0 : B ? gt[g] || Je(b, Yr(R, dt, "")) || (g === "src" || g === "xlink:href" || g === "href") && u !== "script" && eo(R, "data:") === 0 && Ut[u] || W && !Je(rt, Yr(R, dt, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ys(u) && Cn(L.tagNameCheck, u) && Cn(L.attributeNameCheck, g, u) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && L.allowCustomizedBuiltInElements && Cn(L.tagNameCheck, R)
    );
  }, Fa = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ys = function(u) {
    return !Fa[en(u)] && Je(h, u);
  }, Ha = function(u, g, R, B) {
    if (Ee && typeof S == "object" && typeof S.getAttributeType == "function" && !R)
      switch (S.getAttributeType(u, g)) {
        case "TrustedHTML":
          return De(B);
        case "TrustedScriptURL":
          return Le(B);
      }
    return B;
  }, $a = function(u, g, R, B) {
    try {
      R ? u.setAttributeNS(R, g, B) : u.setAttribute(g, B), Tn(u) ? ar(u) : Zs(t.removed);
    } catch {
      hr(g, u);
    }
  }, gs = function(u) {
    Ft(pe.beforeSanitizeAttributes, u, null);
    const g = u.attributes;
    if (!g || Tn(u))
      return;
    E = ps(pe.uponSanitizeAttribute, E, A, oe);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const X = Z(u.nodeName);
    for (; B--; ) {
      const re = g[B], Ae = re.name, Ne = re.namespaceURI, pt = re.value, ht = Z(Ae), li = pt;
      let it = Ae === "value" ? li : Tu(li);
      if (R.attrName = ht, R.attrValue = it, R.keepAttr = !0, R.forceKeepAttr = void 0, Ft(pe.uponSanitizeAttribute, u, R), it = R.attrValue, nt && (ht === "id" || ht === "name") && eo(it, Lt) !== 0 && (hr(Ae, u, re), it = Lt + it), O && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        hr(Ae, u, re);
        continue;
      }
      if (ht === "attributename" && Qs(it, "href")) {
        hr(Ae, u, re);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          hr(Ae, u, re);
          continue;
        }
        if (!J && Je(Vu, it)) {
          hr(Ae, u, re);
          continue;
        }
        if (te && (it = En(it)), !bs(X, ht, it)) {
          hr(Ae, u, re);
          continue;
        }
        it = Ha(X, ht, Ne, it), it !== li && $a(u, Ae, Ne, it);
      }
    }
    Ft(pe.afterSanitizeAttributes, u, null);
  }, wn = function(u) {
    let g = null;
    const R = fs(u);
    for (Ft(pe.beforeSanitizeShadowDOM, u, null); g = R.nextNode(); )
      if (Ft(pe.uponSanitizeShadowNode, g, null), ms(g, u), gs(g), kr(g.content) && wn(g.content), Oe(g) === _t.element) {
        const B = q(g);
        kr(B) && (ai(B), wn(B));
      }
    Ft(pe.afterSanitizeShadowDOM, u, null);
  }, ai = function(u) {
    const g = [{
      node: u,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        wn(R.shadow);
        continue;
      }
      const B = R.node, re = Oe(B) === _t.element, Ae = le(B);
      if (Ae)
        for (let Ne = Ae.length - 1; Ne >= 0; --Ne)
          g.push({
            node: Ae[Ne],
            shadow: null
          });
      if (re) {
        const Ne = ae ? ae(B) : null;
        if (typeof Ne == "string" && Z(Ne) === "template") {
          const pt = B.content;
          kr(pt) && g.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (re) {
        const Ne = q(B);
        kr(Ne) && g.push({
          node: null,
          shadow: Ne
        }, {
          node: Ne,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, X = null;
    if (Vr = !F, Vr && (F = "<!-->"), typeof F != "string" && !zr(F) && (F = Ru(F), typeof F != "string"))
      throw yr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = Q, E = oe) : si(u), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (_ = vt(_)), pe.uponSanitizeAttribute.length > 0 && (E = vt(E)), t.removed = [];
    const re = pr && typeof F != "string" && zr(F);
    if (re) {
      Ma(F);
      const pt = $e(F);
      if (typeof pt == "string") {
        const ht = Z(pt);
        if (!_[ht] || D[ht])
          throw vn(F), yr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Tn(F))
        throw vn(F), yr("root node is clobbered and cannot be sanitized in-place");
      try {
        ai(F);
      } catch (ht) {
        throw vn(F), ht;
      }
    } else if (zr(F))
      g = ds("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === _t.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), ai(R);
    else {
      if (!fe && !te && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && ke ? De(F) : F;
      if (g = ds(F), !g)
        return fe ? null : ke ? Ie : "";
    }
    g && ye && ar(g.firstChild);
    const Ae = re ? F : g;
    try {
      const pt = fs(Ae);
      for (; B = pt.nextNode(); )
        ms(B, Ae), gs(B), kr(B.content) && wn(B.content);
    } catch (pt) {
      throw re && (vn(F), _r(t.removed, (ht) => {
        ht.element && Sn(ht.element);
      })), pt;
    }
    if (re)
      return _r(t.removed, (pt) => {
        pt.element && Sn(pt.element);
      }), te && oi(F), F;
    if (fe) {
      if (te && oi(g), Me)
        for (X = we.call(g.ownerDocument); g.firstChild; )
          X.appendChild(g.firstChild);
      else
        X = g;
      return (E.shadowroot || E.shadowrootmode) && (X = Ye.call(n, X, !0)), X;
    }
    let Ne = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Je(Hu, g.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ne), te && (Ne = En(Ne)), Ee && ke ? De(Ne) : Ne;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    si(F), H = !0, Q = _, oe = E;
  }, t.clearConfig = function() {
    Ke = null, H = !1, Q = null, oe = null, Ee = tt, Ie = "";
  }, t.isValidAttribute = function(F, u, g) {
    Ke || si({});
    const R = Z(F), B = Z(u);
    return bs(R, B, g);
  }, t.addHook = function(F, u) {
    typeof u == "function" && bt(pe, F) && Gr(pe[F], u);
  }, t.removeHook = function(F, u) {
    if (bt(pe, F)) {
      if (u !== void 0) {
        const g = Su(pe[F], u);
        return g === -1 ? void 0 : Eu(pe[F], g, 1)[0];
      }
      return Zs(pe[F]);
    }
  }, t.removeHooks = function(F) {
    bt(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = uo();
  }, t;
}
var Ku = Ra();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ki, fo;
function Yu() {
  if (fo) return ki;
  fo = 1;
  var e = /["'&<>]/;
  ki = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var s, o = "", c = 0, f = 0;
    for (c = i.index; c < n.length; c++) {
      switch (n.charCodeAt(c)) {
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
      f !== c && (o += n.substring(f, c)), f = c + 1, o += s;
    }
    return f !== c ? o + n.substring(f, c) : o;
  }
  return ki;
}
var Xu = Yu();
const po = /* @__PURE__ */ Gu(Xu);
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
function a(e, t, r, n, i) {
  const s = typeof r == "object" ? r : void 0, o = typeof n == "number" ? n : typeof r == "number" ? r : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, f = (z) => z, v = (c.sanitize ? Ku.sanitize : f) || f, y = c.escape ? po : f, S = (z) => typeof z == "string" || typeof z == "number", I = (z, le, ie) => z.replace(/%n/g, "" + ie).replace(/{([^{}]*)}/g, (q, U) => {
    if (le === void 0 || !(U in le))
      return y(q);
    const V = le[U];
    return S(V) ? y(`${V}`) : typeof V == "object" && S(V.value) ? (V.escape !== !1 ? po : f)(`${V.value}`) : y(q);
  });
  let ne = (i?.bundle ?? Ju(e)).translations[t] || t;
  return ne = Array.isArray(ne) ? ne[0] : ne, v(typeof s == "object" || o !== void 0 ? I(
    ne,
    s,
    o
  ) : ne);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, id = ["aria-label"], sd = { class: "library-catalogue-actions-list" }, od = ["href"], ad = ["href"], ld = ["href"], cd = ["href"], ud = {
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
}, vd = ["disabled"], Sd = { class: "library-actions-health-links" }, Ed = ["href"], Td = ["href"], Cd = ["href"], wd = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, Rd = { class: "library-import-health-number" }, kd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Id = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Ld = { class: "library-muted" }, Md = ["href"], Ud = ["href"], Dd = ["action"], Fd = ["value"], Hd = {
  type: "submit",
  class: "button secondary"
}, $d = { class: "library-muted" }, jd = ["href"], Vd = ["action"], Bd = ["value"], qd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, Kd = { class: "library-useful-views-copy" }, Gd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-useful-views-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-muted" }, Zd = ["aria-label"], Qd = ["href", "title"], ef = { class: "library-useful-view-count" }, tf = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, rf = { class: "library-saved-collections-copy" }, nf = { class: "library-muted library-catalogue-eyebrow" }, sf = { id: "library-saved-collections-heading" }, of = { class: "library-muted" }, af = ["action"], lf = ["value"], cf = ["value"], uf = ["placeholder", "disabled"], df = ["disabled"], ff = {
  key: 0,
  class: "library-muted"
}, pf = ["aria-label"], hf = ["href"], mf = ["action"], bf = ["value"], yf = {
  type: "submit",
  class: "button tertiary"
}, gf = ["aria-label"], _f = ["name", "value"], vf = { class: "library-quick-search-row" }, Sf = { class: "library-quick-filter-search" }, Ef = ["aria-label"], Tf = { class: "library-quick-filter-options" }, Cf = { class: "library-quick-filter-option-grid" }, wf = { value: "title" }, xf = { value: "recent" }, Af = { value: "publicationDate" }, Rf = { value: "publication" }, kf = { value: "lastOpened" }, Of = { value: "format" }, Nf = { value: "" }, Pf = { value: "1" }, If = ["value"], Lf = ["value"], Mf = ["aria-label"], Uf = ["aria-label"], Df = { class: "library-filter-panel" }, Ff = { class: "library-filter-panel-summary" }, Hf = ["aria-label"], $f = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, jf = { value: "" }, Vf = ["value"], Bf = { value: "" }, qf = ["value"], zf = { value: "" }, Wf = ["value"], Kf = { value: "" }, Gf = ["value"], Yf = { value: "" }, Xf = ["value"], Jf = { value: "" }, Zf = ["value"], Qf = { value: "" }, ep = ["value"], tp = { value: "" }, rp = ["value"], np = { value: "" }, ip = ["value"], sp = { value: "" }, op = ["value"], ap = { value: "" }, lp = { value: "1" }, cp = { value: "" }, up = { value: "1" }, dp = { value: "title" }, fp = { value: "recent" }, pp = { value: "publicationDate" }, hp = { value: "publication" }, mp = { value: "lastOpened" }, bp = { value: "format" }, yp = ["value"], gp = ["value"], _p = ["aria-label"], vp = ["aria-label"], Sp = ["href"], Ep = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Tp = { class: "library-muted library-catalogue-eyebrow" }, Cp = { id: "library-discovery-heading" }, wp = { class: "library-muted" }, xp = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Ap = { key: 0 }, Rp = { key: 1 }, kp = { key: 2 }, Op = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Np = { key: 0 }, Pp = { key: 1 }, Ip = {
  href: "/apps/library/",
  class: "button secondary"
}, Lp = { class: "library-catalogue-status-row" }, Mp = { class: "library-muted library-filter-result-summary" }, Up = { key: 0 }, Dp = { href: "?" }, Fp = ["aria-label"], Hp = { class: "library-pagination-range" }, $p = { key: 0 }, jp = ["href"], Vp = {
  key: 1,
  class: "library-muted"
}, Bp = ["href"], qp = {
  key: 3,
  class: "library-muted"
}, zp = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Wp = ["aria-label"], Kp = { class: "library-settings-count-badge" }, Gp = ["action"], Yp = ["value"], Xp = ["name", "value"], Jp = ["placeholder"], Zp = {
  type: "submit",
  class: "button primary"
}, Qp = { class: "library-muted" }, eh = ["action"], th = ["value"], rh = ["name", "value"], nh = ["placeholder"], ih = {
  type: "submit",
  class: "button secondary"
}, sh = { class: "library-muted" }, oh = ["action"], ah = ["value"], lh = ["name", "value"], ch = {
  type: "submit",
  class: "button secondary"
}, uh = { class: "library-muted" }, dh = ["action"], fh = ["value"], ph = ["name", "value"], hh = { name: "bulkEditField" }, mh = { value: "publicationType" }, bh = { value: "subtitle" }, yh = { value: "creators" }, gh = { value: "publication" }, _h = { value: "publicationDate" }, vh = { value: "language" }, Sh = { value: "publisher" }, Eh = { value: "genres" }, Th = { value: "classifications" }, Ch = {
  type: "submit",
  class: "button secondary"
}, wh = { class: "library-muted" }, xh = ["action"], Ah = ["value"], Rh = ["name", "value"], kh = {
  type: "submit",
  class: "button secondary"
}, Oh = { class: "library-muted" }, Nh = { class: "library-discovery-shortcuts" }, Ph = { class: "library-discovery-shortcut-grid" }, Ih = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Lh = { id: "library-periodical-groups-heading" }, Mh = { class: "library-muted" }, Uh = ["href"], Dh = { class: "library-muted" }, Fh = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Hh = { id: "library-periodical-groups-empty-heading" }, $h = { class: "library-muted" }, jh = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Vh = { id: "library-year-groups-heading" }, Bh = ["href"], qh = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, zh = { id: "library-creator-groups-heading" }, Wh = ["href"], Kh = ["aria-label"], Gh = ["href", "aria-label"], Yh = { class: "library-muted" }, Xh = { class: "library-empty-actions" }, Jh = ["href"], Zh = { class: "library-muted" }, Qh = { class: "library-muted" }, em = { class: "library-empty-actions" }, tm = ["href"], rm = { class: "library-muted" }, nm = { class: "library-empty-actions" }, im = ["href"], sm = {
  href: "?",
  class: "button primary"
}, om = { class: "library-muted" }, am = { class: "library-empty-actions" }, lm = ["href"], cm = {
  key: 4,
  class: "library-cover-gallery"
}, um = ["href", "aria-label"], dm = ["src", "alt"], fm = ["action", "onSubmit"], pm = ["value"], hm = ["value"], mm = ["aria-pressed", "title", "aria-label", "onClick"], bm = { class: "library-cover-summary" }, ym = { class: "library-cover-primary" }, gm = ["aria-label"], _m = ["href"], vm = ["onToggle"], Sm = ["aria-label"], Em = { class: "library-cover-meta" }, Tm = {
  key: 0,
  class: "library-creator"
}, Cm = { class: "library-cover-detail-list" }, wm = { class: "library-cover-detail-chip" }, xm = {
  key: 0,
  class: "library-cover-detail-chip"
}, Am = {
  key: 1,
  class: "library-cover-detail-chip"
}, Rm = {
  key: 2,
  class: "library-cover-detail-chip"
}, km = {
  key: 3,
  class: "library-cover-detail-chip"
}, Om = {
  key: 4,
  class: "library-cover-detail-chip"
}, Nm = {
  key: 5,
  class: "library-cover-detail-chip"
}, Pm = {
  key: 6,
  class: "library-cover-detail-chip"
}, Im = {
  key: 1,
  class: "library-muted library-cover-description"
}, Lm = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Mm = { key: 0 }, Um = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Dm = {
  key: 0,
  class: "library-muted"
}, Fm = { class: "library-cover-actions" }, Hm = ["href"], $m = ["href"], jm = ["href"], Vm = ["aria-label"], Bm = { class: "library-pagination-range" }, qm = { key: 0 }, zm = ["href"], Wm = {
  key: 1,
  class: "library-muted"
}, Km = ["href"], Gm = {
  key: 3,
  class: "library-muted"
}, Ym = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ ur({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), s = /* @__PURE__ */ ur((i.items || []).map((P) => ({ ...P }))), o = K(() => s), c = K(() => i.shelves || []), f = K(() => i.formats || []), v = K(() => i.publications || []), y = K(() => i.publicationSummaries || []), S = K(() => i.publicationIssueContext || null), I = K(() => i.publicationYears || []), j = K(() => i.creators || []), ne = K(() => i.scanStatuses || []), z = K(() => i.workflowStatuses || []), le = K(() => i.genres || []), ie = K(() => i.classifications || []), q = K(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ ur({
      q: i.activeFilters?.q || "",
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
      weakMetadata: i.activeFilters?.weakMetadata || "",
      unreviewedImports: i.activeFilters?.unreviewedImports || "",
      sort: i.activeFilters?.sort || "title"
    }), V = K(() => i.settingsUrl || ""), ae = K(() => i.requestToken || ""), Pe = K(() => i.metadataExportUrl || ""), Oe = K(() => i.metadataSidecarManifestUrl || ""), $e = K(() => i.metadataSidecarBundleUrl || ""), Ee = K(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ie = K(() => i.batchTagUrl || "/apps/library/bulk/tags"), tt = K(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ct = K(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), We = K(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Et = K(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), De = K(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Le = K(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), me = K(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ue = K(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), je = K(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), be = /* @__PURE__ */ ur({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), we = K(() => be.summary || {}), Ve = K(() => {
      const P = Number(we.value.generatedAt || 0);
      return P > 0 ? new Date(P * 1e3).toLocaleString() : "";
    }), Ye = K(() => we.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), pe = K(() => we.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), At = K(() => we.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Be = K(() => we.value.coverSupportMatrix || At.value.byFormat || []), ut = K(() => we.value.environmentCapabilities || {}), Tt = K(() => i.discoveryPage === "publication"), Ct = K(() => i.discoveryPage === "year"), rt = K(() => i.discoveryPage === "creator"), dt = K(() => Tt.value || Ct.value || rt.value), h = K(() => i.discoveryTitle || U.publication || U.year || U.creator || ""), b = K(() => dt.value ? h.value : a("library", "Publication catalogue")), _ = K(() => rt.value ? a("library", "Creator") : Ct.value ? a("library", "Publication year") : a("library", "Publication / series")), k = K(() => Number(i.rootCount || 0)), E = K(() => Number(i.enabledRootCount || 0)), A = K(() => k.value === 0), L = K(() => k.value > 0 && E.value === 0), D = K(() => J.value.length > 0), M = {
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
      starred: "Starred",
      needsMetadata: "Needs metadata",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, T = K(() => {
      if (typeof window > "u") return "";
      const P = new URLSearchParams(window.location.search);
      if (P.get("batchMetadataApplyResult") !== "1") return "";
      const x = P.get("batchMetadataField") || "field", p = P.get("batchMetadataApplied") || "0", Z = P.get("batchMetadataUnchanged") || "0", Ke = P.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: p, field: x, unchanged: Z, skipped: Ke });
    }), G = K(() => i.savedCollections || []), $ = K(() => i.savedCollectionSaveUrl || "/apps/library/collections"), W = K(() => i.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), J = K(() => Object.entries(M).map(([P, x]) => ({ key: P, label: x, value: U[P] || "" })).filter((P) => String(P.value).trim() !== "")), te = K(() => Object.entries(U).filter(([P, x]) => !["q", "sort", "starred"].includes(P) && String(x || "").trim() !== "").map(([P, x]) => ({ key: P, value: x }))), O = K(() => Object.entries(U).filter(([P, x]) => String(x || "").trim() !== "").map(([P, x]) => ({ key: P, value: x }))), N = /* @__PURE__ */ ur({}), H = /* @__PURE__ */ vl(null);
    let Q = null;
    function oe(P) {
      const x = new URLSearchParams(new FormData(P));
      for (const p of Array.from(x.keys()))
        String(x.get(p) || "").trim() === "" && x.delete(p);
      return x.delete("page"), x;
    }
    function ye(P) {
      s.splice(0, s.length, ...(P.items || []).map((x) => ({ ...x })));
      for (const x of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(P, x) && (i[x] = P[x]);
      Object.assign(U, P.activeFilters || {});
    }
    async function fe(P = !1) {
      if (!(be.loading || be.refreshing)) {
        P ? be.refreshing = !0 : be.loading = !0, be.error = "";
        try {
          const x = await fetch(`${je.value}${P ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!x.ok)
            throw new Error(`Import health request failed: ${x.status}`);
          be.summary = await x.json(), be.loaded = !0;
        } catch (x) {
          be.error = x?.message || String(x);
        } finally {
          be.loading = !1, be.refreshing = !1;
        }
      }
    }
    async function Me(P) {
      P && P.currentTarget && P.currentTarget.open !== !0 || be.loaded || be.loading || await fe(!1);
    }
    async function ke() {
      await fe(!0);
    }
    async function Te(P) {
      const x = P?.currentTarget?.tagName === "FORM" ? P.currentTarget : P?.currentTarget?.form;
      if (!x) return;
      const Z = oe(x).toString(), Ke = Z ? `?${Z}` : "", or = await fetch(Ee.value + Ke, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!or.ok) {
        x.submit();
        return;
      }
      ye(await or.json()), history.replaceState({}, "", Z ? `?${Z}` : window.location.pathname);
    }
    function nt(P) {
      Te(P);
    }
    function Lt(P) {
      window.clearTimeout(Q), Q = window.setTimeout(() => nt(P), 350);
    }
    function Mt(P) {
      const x = new URLSearchParams();
      for (const [Z, Ke] of Object.entries(U)) {
        const or = String(Ke || "").trim();
        or !== "" && Z !== P && !(Z === "sort" && or === "title") && x.set(Z, or);
      }
      const p = x.toString();
      return p ? `?${p}` : "?";
    }
    function pr() {
      return Mt("q");
    }
    const Rt = K(() => i.smartViewCounts || {}), yt = K(() => {
      const P = {};
      for (const [x, p] of Object.entries(U)) {
        const Z = String(p || "").trim();
        Z !== "" && !(x === "sort" && Z === "title") && (P[x] = Z);
      }
      return P;
    }), nr = K(() => JSON.stringify(yt.value)), Ut = K(() => Object.keys(yt.value).length > 0), ir = K(() => [
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
      { key: "weak-filename-metadata", label: "Weak filename metadata", description: "Items whose metadata still depends on filename/folder parsing.", query: "weakMetadata=filename", filters: { weakMetadata: "filename" } },
      { key: "unreviewed-imports", label: "Unreviewed imports", description: "Scanner-created catalogue rows not yet touched by user review.", query: "unreviewedImports=1", filters: { unreviewedImports: "1" } }
    ]);
    function gt(P) {
      const x = new URLSearchParams(window.location.search);
      for (const Z of Object.keys(M))
        x.delete(Z);
      x.delete("page");
      for (const [Z, Ke] of Object.entries(P))
        String(Ke || "").trim() !== "" && x.set(Z, String(Ke));
      const p = x.toString();
      return p ? `?${p}` : "?";
    }
    function Ar(P) {
      return gt(P || {});
    }
    function Dt(P) {
      return W.value.replace("__COLLECTION_ID__", encodeURIComponent(String(P || "0")));
    }
    function ft(P) {
      return String(P || "").toUpperCase();
    }
    function Xe(P) {
      return P.nextcloudTags || [];
    }
    function sr(P) {
      return y.value.find((p) => p.publication === P)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(P)}`;
    }
    function Vr(P) {
      return i.publicationYearLandingUrls?.[P] || `/apps/library/years/${encodeURIComponent(P)}`;
    }
    function Br(P) {
      return i.creatorLandingUrls?.[P] || `/apps/library/creators/${encodeURIComponent(P)}`;
    }
    function ii(P, x) {
      N[P] = !!x?.currentTarget?.open;
    }
    function yn(P) {
      const x = String(P?.tagName || "").toLowerCase();
      return P?.isContentEditable || ["input", "select", "textarea", "button"].includes(x);
    }
    function qr(P) {
      P.key !== "/" || P.metaKey || P.ctrlKey || P.altKey || P.shiftKey || yn(P.target) || (P.preventDefault(), H.value?.focus(), H.value?.select?.());
    }
    function gn(P) {
      P.key !== "Escape" || document.activeElement !== H.value || U.q === "" || (P.preventDefault(), U.q = "", H.value.value = "", window.clearTimeout(Q), nt({ currentTarget: H.value }));
    }
    function Rr(P) {
      qr(P), gn(P);
    }
    Zo(() => {
      window.addEventListener("keydown", Rr);
    }), Qo(() => {
      window.removeEventListener("keydown", Rr);
    });
    async function _n(P, x) {
      const p = x?.currentTarget?.closest?.("form") || x?.currentTarget;
      if (!p || !P?.starUrl) return;
      const Z = !!P.starred;
      P.starred = !Z;
      try {
        (await fetch(P.starUrl, {
          method: "POST",
          body: new FormData(p),
          credentials: "same-origin"
        })).ok || (P.starred = Z);
      } catch {
        P.starred = Z;
      }
    }
    return (P, x) => (C(), w("div", Zu, [
      l("section", Qu, [
        l("div", ed, [
          l("div", null, [
            dt.value ? (C(), w("p", td, d(_.value), 1)) : de("", !0),
            l("h2", rd, d(b.value), 1),
            l("p", nd, d(dt.value ? m(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : m(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          l("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": m(a)("library", "Library actions")
          }, [
            l("details", {
              class: "library-catalogue-actions-menu",
              onToggle: Me
            }, [
              l("summary", null, d(m(a)("library", "Actions")), 1),
              l("div", sd, [
                l("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, d(m(a)("library", "Settings")), 9, od),
                Pe.value ? (C(), w("a", {
                  key: 0,
                  href: Pe.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, d(m(a)("library", "Export corrected metadata")), 9, ad)) : de("", !0),
                Oe.value ? (C(), w("a", {
                  key: 1,
                  href: Oe.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, d(m(a)("library", "Sidecar manifest")), 9, ld)) : de("", !0),
                $e.value ? (C(), w("a", {
                  key: 2,
                  href: $e.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, d(m(a)("library", "Sidecar ZIP")), 9, cd)) : de("", !0),
                l("div", ud, [
                  l("p", dd, d(m(a)("library", "Import health")), 1),
                  l("h3", fd, d(m(a)("library", "Metadata overview")), 1),
                  l("p", pd, d(m(a)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  be.loading ? (C(), w("p", hd, d(m(a)("library", "Loading cached metadata overview…")), 1)) : be.error ? (C(), w("p", md, d(be.error), 1)) : be.loaded ? de("", !0) : (C(), w("p", bd, d(m(a)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  be.loaded ? (C(), w(se, { key: 3 }, [
                    we.value.message ? (C(), w("p", yd, d(we.value.message), 1)) : we.value.cacheStatus === "missing" ? (C(), w("p", gd, d(m(a)("library", "No cached metadata overview exists yet")), 1)) : de("", !0),
                    Ve.value ? (C(), w("p", _d, d(m(a)("library", "Last generated")) + ": " + d(Ve.value), 1)) : de("", !0),
                    l("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: be.refreshing,
                      onClick: ke
                    }, d(be.refreshing ? m(a)("library", "Refreshing metadata overview…") : m(a)("library", "Refresh metadata overview")), 9, vd),
                    l("div", Sd, [
                      l("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, d(m(a)("library", "Review metadata errors")), 9, Ed),
                      l("a", {
                        class: "button secondary",
                        href: Le.value
                      }, d(m(a)("library", "Full review")), 9, Td),
                      l("a", {
                        class: "button secondary",
                        href: me.value
                      }, d(m(a)("library", "Export TSV")), 9, Cd),
                      l("a", {
                        class: "button secondary",
                        href: ue.value
                      }, d(m(a)("library", "Probe covers")), 9, wd)
                    ]),
                    l("div", xd, [
                      l("article", null, [
                        l("h4", null, d(m(a)("library", "Metadata errors")), 1),
                        l("p", Ad, d(Ye.value.total || 0), 1),
                        l("ul", null, [
                          (C(!0), w(se, null, _e(Ye.value.byExtension, (p) => (C(), w("li", {
                            key: p.extension
                          }, d(ft(p.extension)) + " · " + d(p.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, d(m(a)("library", "Archive/container check")), 1),
                        l("p", Rd, d(pe.value.mismatches || 0), 1),
                        l("ul", null, [
                          (C(!0), w(se, null, _e(pe.value.byExtensionAndContainer, (p) => (C(), w("li", {
                            key: `${p.extension}-${p.actualContainerType}`
                          }, d(ft(p.extension)) + " · " + d(p.actualContainerType) + " · " + d(p.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, d(m(a)("library", "Cover health")), 1),
                        l("p", kd, d(At.value.note), 1),
                        l("ul", null, [
                          (C(!0), w(se, null, _e(At.value.byFormat, (p) => (C(), w("li", {
                            key: `${p.extension}-${p.nextcloudPreview}-${p.libraryCoverRoute}`
                          }, d(ft(p.extension)) + " · nextcloudPreview: " + d(p.nextcloudPreview) + " · libraryCoverRoute: " + d(p.libraryCoverRoute) + " · " + d(p.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, d(m(a)("library", "Cover support matrix")), 1),
                        l("p", Od, d(m(a)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        l("ul", null, [
                          (C(!0), w(se, null, _e(Be.value, (p) => (C(), w("li", {
                            key: `${p.extension}-${p.nextcloudPreview}-${p.libraryCoverRoute}-${p.count}`
                          }, d(ft(p.extension)) + " · Nextcloud/plugin preview: " + d(p.nextcloudPreview) + " · Library extraction: " + d(p.libraryCoverRoute) + " · " + d(p.count), 1))), 128))
                        ]),
                        l("p", Nd, d(m(a)("library", "Extractor tools")) + ": ZIP=" + d(ut.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + d(ut.value.sevenZipCommand || "missing") + " · RAR=" + d(ut.value.rarCommand || "missing") + " · bsdtar=" + d(ut.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ye.value.examples?.length ? (C(), w("details", Pd, [
                      l("summary", null, d(m(a)("library", "Example files and suggested actions")), 1),
                      l("ul", null, [
                        (C(!0), w(se, null, _e(Ye.value.examples, (p) => (C(), w("li", {
                          key: `${p.fileId}-${p.path}`
                        }, [
                          l("code", null, d(p.path), 1),
                          l("span", null, d(p.scanStatus) + " · " + d(p.scanError) + " · " + d(p.actualContainerType), 1),
                          l("strong", null, d(p.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : de("", !0)
                  ], 64)) : de("", !0),
                  l("div", Id, [
                    l("article", null, [
                      l("h4", null, d(m(a)("library", "Metadata-error queue")), 1),
                      l("p", Ld, d(m(a)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      l("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, d(m(a)("library", "Open metadata-error rows")), 9, Md),
                      l("a", {
                        class: "button secondary",
                        href: me.value
                      }, d(m(a)("library", "Export metadata-error rows")), 9, Ud),
                      l("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ae.value
                        }, null, 8, Fd),
                        x[18] || (x[18] = l("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        x[19] || (x[19] = l("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        l("button", Hd, d(m(a)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    l("article", null, [
                      l("h4", null, d(m(a)("library", "Scanner-conflict queue")), 1),
                      l("p", $d, d(m(a)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      l("a", {
                        class: "button secondary",
                        href: De.value
                      }, d(m(a)("library", "Open scanner-conflict rows")), 9, jd),
                      l("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ae.value
                        }, null, 8, Bd),
                        x[20] || (x[20] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        x[21] || (x[21] = l("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        l("button", qd, d(m(a)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, id)
        ]),
        T.value ? (C(), w("p", zd, d(T.value), 1)) : de("", !0),
        l("section", Wd, [
          l("div", Kd, [
            l("p", Gd, d(m(a)("library", "Useful views")), 1),
            l("h3", Yd, d(m(a)("library", "Useful views")), 1),
            l("p", Xd, d(m(a)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            l("p", Jd, d(m(a)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          l("nav", {
            class: "library-useful-view-links",
            "aria-label": m(a)("library", "Built-in useful catalogue views")
          }, [
            (C(!0), w(se, null, _e(ir.value, (p) => (C(), w("a", {
              key: p.key,
              class: "library-useful-view-chip",
              href: gt(p.filters),
              title: p.description
            }, [
              l("strong", null, d(m(a)("library", p.label)), 1),
              l("span", null, d(m(a)("library", p.description)), 1),
              l("small", ef, d(Number(Rt.value[p.key] || 0)), 1)
            ], 8, Qd))), 128))
          ], 8, Zd)
        ]),
        l("section", tf, [
          l("div", rf, [
            l("p", nf, d(m(a)("library", "Custom collections")), 1),
            l("h3", sf, d(m(a)("library", "Custom collections")), 1),
            l("p", of, d(m(a)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          l("form", {
            method: "post",
            action: $.value,
            class: "library-saved-collection-save-form"
          }, [
            l("input", {
              type: "hidden",
              name: "requesttoken",
              value: ae.value
            }, null, 8, lf),
            l("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: nr.value
            }, null, 8, cf),
            l("label", null, [
              ge(d(m(a)("library", "Collection name")) + " ", 1),
              l("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: m(a)("library", "e.g. Bremen photo books"),
                disabled: !Ut.value,
                autocomplete: "off"
              }, null, 8, uf)
            ]),
            l("button", {
              type: "submit",
              class: "button secondary",
              disabled: !Ut.value
            }, d(m(a)("library", "Save current view")), 9, df)
          ], 8, af),
          Ut.value ? de("", !0) : (C(), w("p", ff, d(m(a)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          G.value.length > 0 ? (C(), w("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": m(a)("library", "Saved custom collections")
          }, [
            (C(!0), w(se, null, _e(G.value, (p) => (C(), w("article", {
              key: p.id,
              class: "library-saved-collection-card"
            }, [
              l("a", {
                class: "library-saved-collection-link",
                href: Ar(p.filters)
              }, [
                l("strong", null, d(p.name), 1),
                l("span", null, d(Number(p.count || 0)) + " " + d(m(a)("library", "items")), 1)
              ], 8, hf),
              l("form", {
                method: "post",
                action: Dt(p.id),
                class: "library-saved-collection-delete-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: ae.value
                }, null, 8, bf),
                l("button", yf, d(m(a)("library", "Delete")), 1)
              ], 8, mf)
            ]))), 128))
          ], 8, pf)) : de("", !0)
        ]),
        l("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": m(a)("library", "Quick catalogue filters"),
          onSubmit: Nn(Te, ["prevent"])
        }, [
          (C(!0), w(se, null, _e(te.value, (p) => (C(), w("input", {
            key: p.key,
            type: "hidden",
            name: p.key,
            value: p.value
          }, null, 8, _f))), 128)),
          l("div", vf, [
            l("label", Sf, [
              l("span", null, [
                ge(d(m(a)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                x[22] || (x[22] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              qe(l("input", {
                ref_key: "quickSearchInput",
                ref: H,
                "onUpdate:modelValue": x[0] || (x[0] = (p) => U.q = p),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Lt
              }, null, 544), [
                [Ei, U.q]
              ])
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Search catalogue")
            }, d(m(a)("library", "Search")), 9, Ef)
          ]),
          l("details", Tf, [
            l("summary", null, d(m(a)("library", "Filter & sort")), 1),
            l("div", Cf, [
              l("label", null, [
                ge(d(m(a)("library", "Sort")) + " ", 1),
                qe(l("select", {
                  "onUpdate:modelValue": x[1] || (x[1] = (p) => U.sort = p),
                  name: "sort",
                  onChange: Te
                }, [
                  l("option", wf, d(m(a)("library", "Title")), 1),
                  l("option", xf, d(m(a)("library", "Recently added")), 1),
                  l("option", Af, d(m(a)("library", "Publication date")), 1),
                  l("option", Rf, d(m(a)("library", "Series")), 1),
                  l("option", kf, d(m(a)("library", "Recently opened")), 1),
                  l("option", Of, d(m(a)("library", "Format")), 1)
                ], 544), [
                  [st, U.sort]
                ])
              ]),
              l("label", null, [
                ge(d(m(a)("library", "Starred")) + " ", 1),
                qe(l("select", {
                  "onUpdate:modelValue": x[2] || (x[2] = (p) => U.starred = p),
                  name: "starred",
                  onChange: Te
                }, [
                  l("option", Nf, d(m(a)("library", "All")), 1),
                  l("option", Pf, d(m(a)("library", "Starred")), 1)
                ], 544), [
                  [st, U.starred]
                ])
              ]),
              l("label", null, [
                ge(d(m(a)("library", "Size")) + " ", 1),
                l("select", {
                  value: q.value.limit,
                  name: "limit",
                  onChange: Te
                }, [
                  (C(), w(se, null, _e(n, (p) => l("option", {
                    key: p,
                    value: p
                  }, d(p), 9, Lf)), 64))
                ], 40, If)
              ]),
              l("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": m(a)("library", "Apply catalogue filters")
              }, d(m(a)("library", "Apply filters")), 9, Mf),
              l("a", {
                href: "?",
                class: "button secondary",
                "aria-label": m(a)("library", "Clear catalogue filters")
              }, d(m(a)("library", "Clear all")), 9, Uf)
            ])
          ])
        ], 40, gf),
        l("details", Df, [
          l("summary", Ff, d(m(a)("library", "Show catalogue filters")), 1),
          l("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": m(a)("library", "Catalogue search and filters"),
            onSubmit: Nn(Te, ["prevent"])
          }, [
            l("label", null, [
              ge(d(m(a)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              qe(l("input", {
                "onUpdate:modelValue": x[3] || (x[3] = (p) => U.q = p),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Ei, U.q]
              ])
            ]),
            l("p", $f, d(m(a)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            l("label", null, [
              ge(d(m(a)("library", "Type")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[4] || (x[4] = (p) => U.type = p),
                name: "type"
              }, [
                l("option", jf, d(m(a)("library", "All types")), 1),
                (C(), w(se, null, _e(r, (p) => l("option", {
                  key: p,
                  value: p
                }, d(p), 9, Vf)), 64))
              ], 512), [
                [st, U.type]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Series / periodical")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[5] || (x[5] = (p) => U.publication = p),
                name: "publication"
              }, [
                l("option", Bf, d(m(a)("library", "All series and periodicals")), 1),
                (C(!0), w(se, null, _e(v.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, qf))), 128))
              ], 512), [
                [st, U.publication]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Publication year")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[6] || (x[6] = (p) => U.year = p),
                name: "year"
              }, [
                l("option", zf, d(m(a)("library", "All years")), 1),
                (C(!0), w(se, null, _e(I.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, Wf))), 128))
              ], 512), [
                [st, U.year]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Creator")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[7] || (x[7] = (p) => U.creator = p),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                l("option", Kf, d(m(a)("library", "All creators")), 1),
                (C(!0), w(se, null, _e(j.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, Gf))), 128))
              ], 512), [
                [st, U.creator]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Nextcloud tag")) + " ", 1),
              qe(l("input", {
                "onUpdate:modelValue": x[8] || (x[8] = (p) => U.tag = p),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Ei, U.tag]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Format")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[9] || (x[9] = (p) => U.format = p),
                name: "format"
              }, [
                l("option", Yf, d(m(a)("library", "All formats")), 1),
                (C(!0), w(se, null, _e(f.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(ft(p)), 9, Xf))), 128))
              ], 512), [
                [st, U.format]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Shelf")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[10] || (x[10] = (p) => U.shelf = p),
                name: "shelf"
              }, [
                l("option", Jf, d(m(a)("library", "All shelves")), 1),
                (C(!0), w(se, null, _e(c.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, Zf))), 128))
              ], 512), [
                [st, U.shelf]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Scan status")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[11] || (x[11] = (p) => U.status = p),
                name: "status"
              }, [
                l("option", Qf, d(m(a)("library", "All scan statuses")), 1),
                (C(!0), w(se, null, _e(ne.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, ep))), 128))
              ], 512), [
                [st, U.status]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Workflow status")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[12] || (x[12] = (p) => U.workflowStatus = p),
                name: "workflowStatus"
              }, [
                l("option", tp, d(m(a)("library", "All workflow statuses")), 1),
                (C(!0), w(se, null, _e(z.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, rp))), 128))
              ], 512), [
                [st, U.workflowStatus]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Genre")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[13] || (x[13] = (p) => U.genre = p),
                name: "genre"
              }, [
                l("option", np, d(m(a)("library", "All genres")), 1),
                (C(!0), w(se, null, _e(le.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, ip))), 128))
              ], 512), [
                [st, U.genre]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Classification")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[14] || (x[14] = (p) => U.classification = p),
                name: "classification"
              }, [
                l("option", sp, d(m(a)("library", "All classifications")), 1),
                (C(!0), w(se, null, _e(ie.value, (p) => (C(), w("option", {
                  key: p,
                  value: p
                }, d(p), 9, op))), 128))
              ], 512), [
                [st, U.classification]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Scanner conflicts")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[15] || (x[15] = (p) => U.scannerConflicts = p),
                name: "scannerConflicts"
              }, [
                l("option", ap, d(m(a)("library", "All metadata")), 1),
                l("option", lp, d(m(a)("library", "Needs review")), 1)
              ], 512), [
                [st, U.scannerConflicts]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Starred")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[16] || (x[16] = (p) => U.starred = p),
                name: "starred"
              }, [
                l("option", cp, d(m(a)("library", "All publications")), 1),
                l("option", up, d(m(a)("library", "Starred only")), 1)
              ], 512), [
                [st, U.starred]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Sort")) + " ", 1),
              qe(l("select", {
                "onUpdate:modelValue": x[17] || (x[17] = (p) => U.sort = p),
                name: "sort"
              }, [
                l("option", dp, d(m(a)("library", "Title")), 1),
                l("option", fp, d(m(a)("library", "Recently added")), 1),
                l("option", pp, d(m(a)("library", "Publication date")), 1),
                l("option", hp, d(m(a)("library", "Series / periodical")), 1),
                l("option", mp, d(m(a)("library", "Recently opened")), 1),
                l("option", bp, d(m(a)("library", "Format")), 1)
              ], 512), [
                [st, U.sort]
              ])
            ]),
            l("label", null, [
              ge(d(m(a)("library", "Page size")) + " ", 1),
              l("select", {
                value: q.value.limit,
                name: "limit"
              }, [
                (C(), w(se, null, _e(n, (p) => l("option", {
                  key: p,
                  value: p
                }, d(p), 9, gp)), 64))
              ], 8, yp)
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(a)("library", "Apply catalogue filters")
            }, d(m(a)("library", "Apply filters")), 9, _p),
            l("a", {
              href: "?",
              class: "button secondary",
              "aria-label": m(a)("library", "Clear catalogue filters")
            }, d(m(a)("library", "Clear")), 9, vp),
            l("a", {
              href: De.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, d(m(a)("library", "Review scanner conflicts")), 9, Sp)
          ], 40, Hf)
        ]),
        dt.value ? (C(), w("section", Ep, [
          l("p", Tp, d(_.value), 1),
          l("h3", Cp, d(h.value), 1),
          l("p", wp, d(rt.value ? m(a)("library", "Items by this creator, sorted by publication context when available.") : Ct.value ? m(a)("library", "Items from this publication year, sorted by publication date when available.") : m(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          l("div", xp, [
            l("span", null, d(q.value.total) + " " + d(m(a)("library", "items")), 1),
            S.value?.earliestYear && S.value?.latestYear ? (C(), w("span", Ap, d(S.value.earliestYear) + "–" + d(S.value.latestYear), 1)) : de("", !0),
            S.value?.datedCount ? (C(), w("span", Rp, d(S.value.datedCount) + " " + d(m(a)("library", "dated")), 1)) : de("", !0),
            S.value?.undatedCount > 0 ? (C(), w("span", kp, d(S.value.undatedCount) + " " + d(m(a)("library", "undated")), 1)) : de("", !0)
          ]),
          Tt.value && S.value ? (C(), w("aside", Op, [
            l("strong", null, d(m(a)("library", "Publication contents")), 1),
            l("span", null, d(S.value.itemCount) + " " + d(m(a)("library", "items")), 1),
            S.value.earliestYear && S.value.latestYear ? (C(), w("span", Np, d(S.value.earliestYear) + "–" + d(S.value.latestYear), 1)) : de("", !0),
            l("span", null, d(S.value.datedCount) + " " + d(m(a)("library", "with issue/date coverage")), 1),
            S.value.undatedCount > 0 ? (C(), w("span", Pp, d(S.value.undatedCount) + " " + d(m(a)("library", "without dates yet")), 1)) : de("", !0)
          ])) : de("", !0),
          l("p", null, [
            l("a", Ip, d(m(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : de("", !0),
        l("div", Lp, [
          l("p", Mp, [
            ge(d(m(a)("library", "Showing")) + " " + d(q.value.from) + "–" + d(q.value.to) + " " + d(m(a)("library", "of")) + " " + d(q.value.total) + " " + d(m(a)("library", "catalogue items")), 1),
            J.value.length > 0 ? (C(), w("span", Up, [
              x[23] || (x[23] = ge(" · ", -1)),
              l("a", Dp, d(m(a)("library", "Clear all filters")), 1)
            ])) : de("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": m(a)("library", "Catalogue pagination")
          }, [
            l("span", Hp, [
              ge(d(m(a)("library", "Page")) + " " + d(q.value.page), 1),
              q.value.total > 0 ? (C(), w("span", $p, " · " + d(q.value.from) + "–" + d(q.value.to), 1)) : de("", !0)
            ]),
            q.value.previousUrl ? (C(), w("a", {
              key: 0,
              href: q.value.previousUrl
            }, d(m(a)("library", "Previous")), 9, jp)) : (C(), w("span", Vp, d(m(a)("library", "Previous")), 1)),
            q.value.nextUrl ? (C(), w("a", {
              key: 2,
              href: q.value.nextUrl
            }, d(m(a)("library", "Next")), 9, Bp)) : (C(), w("span", qp, d(m(a)("library", "Next")), 1))
          ], 8, Fp)
        ]),
        l("div", zp, [
          l("details", {
            class: "library-batch-actions",
            "aria-label": m(a)("library", "Batch actions for current results")
          }, [
            l("summary", null, [
              ge(d(m(a)("library", "Batch")) + " ", 1),
              l("span", Kp, d(q.value.total) + " " + d(m(a)("library", "Current filter result")), 1)
            ]),
            l("form", {
              method: "post",
              action: Ie.value,
              class: "library-batch-tag-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, Yp),
              (C(!0), w(se, null, _e(O.value, (p) => (C(), w("input", {
                key: p.key,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Xp))), 128)),
              l("label", null, [
                l("span", null, d(m(a)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Jp)
              ]),
              l("button", Zp, d(m(a)("library", "Apply Nextcloud tag to current results")), 1),
              l("p", Qp, d(m(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Gp),
            l("form", {
              method: "post",
              action: tt.value,
              class: "library-batch-tag-remove-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, th),
              (C(!0), w(se, null, _e(O.value, (p) => (C(), w("input", {
                key: `remove-tag-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, rh))), 128)),
              l("label", null, [
                l("span", null, d(m(a)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, nh)
              ]),
              l("button", ih, d(m(a)("library", "Remove tag from current results")), 1),
              l("p", sh, d(m(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, eh),
            l("form", {
              method: "post",
              action: ct.value,
              class: "library-batch-metadata-reset-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, ah),
              (C(!0), w(se, null, _e(O.value, (p) => (C(), w("input", {
                key: `reset-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, lh))), 128)),
              x[24] || (x[24] = l("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              l("button", ch, d(m(a)("library", "Reset filtered metadata")), 1),
              l("p", uh, d(m(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, oh),
            l("form", {
              method: "post",
              action: We.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, fh),
              (C(!0), w(se, null, _e(O.value, (p) => (C(), w("input", {
                key: `edit-preview-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, ph))), 128)),
              l("label", null, [
                l("span", null, d(m(a)("library", "Metadata field")), 1),
                l("select", hh, [
                  l("option", mh, d(m(a)("library", "Publication type")), 1),
                  l("option", bh, d(m(a)("library", "Subtitle")), 1),
                  l("option", yh, d(m(a)("library", "Creators")), 1),
                  l("option", gh, d(m(a)("library", "Series / periodical")), 1),
                  l("option", _h, d(m(a)("library", "Publication date")), 1),
                  l("option", vh, d(m(a)("library", "Language")), 1),
                  l("option", Sh, d(m(a)("library", "Publisher")), 1),
                  l("option", Eh, d(m(a)("library", "Genres")), 1),
                  l("option", Th, d(m(a)("library", "Classifications")), 1)
                ])
              ]),
              l("label", null, [
                l("span", null, d(m(a)("library", "Preview value")), 1),
                x[25] || (x[25] = l("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              l("button", Ch, d(m(a)("library", "Preview & apply metadata edit")), 1),
              l("p", wh, d(m(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, dh),
            l("form", {
              method: "post",
              action: Et.value,
              class: "library-batch-cover-refresh-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, Ah),
              (C(!0), w(se, null, _e(O.value, (p) => (C(), w("input", {
                key: `cover-${p.key}`,
                type: "hidden",
                name: p.key,
                value: p.value
              }, null, 8, Rh))), 128)),
              l("button", kh, d(m(a)("library", "Request fresh cover previews")), 1),
              l("p", Oh, d(m(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, xh)
          ], 8, Wp),
          l("details", Nh, [
            l("summary", null, d(m(a)("library", "Browse")), 1),
            l("div", Ph, [
              y.value.length > 0 ? (C(), w("section", Ih, [
                l("h3", Lh, d(m(a)("library", "Top series and periodicals")), 1),
                l("p", Mh, d(m(a)("library", "Jump into recurring publications with one click.")), 1),
                l("ul", null, [
                  (C(!0), w(se, null, _e(y.value, (p) => (C(), w("li", {
                    key: p.publication
                  }, [
                    l("a", {
                      href: sr(p.publication)
                    }, d(p.publication), 9, Uh),
                    l("span", Dh, d(p.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (C(), w("section", Fh, [
                l("h3", Hh, d(m(a)("library", "No series or periodicals found yet")), 1),
                l("p", $h, d(m(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : de("", !0),
              I.value.length > 0 ? (C(), w("section", jh, [
                l("h3", Vh, d(m(a)("library", "Top publication years")), 1),
                l("ul", null, [
                  (C(!0), w(se, null, _e(I.value, (p) => (C(), w("li", { key: p }, [
                    l("a", {
                      href: Vr(p)
                    }, d(p), 9, Bh)
                  ]))), 128))
                ])
              ])) : de("", !0),
              j.value.length > 0 ? (C(), w("section", qh, [
                l("h3", zh, d(m(a)("library", "Top creators")), 1),
                l("ul", null, [
                  (C(!0), w(se, null, _e(j.value, (p) => (C(), w("li", { key: p }, [
                    l("a", {
                      href: Br(p)
                    }, d(p), 9, Wh)
                  ]))), 128))
                ])
              ])) : de("", !0)
            ])
          ])
        ]),
        J.value.length > 0 ? (C(), w("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": m(a)("library", "Active filters")
        }, [
          l("span", null, d(m(a)("library", "Active filters")), 1),
          (C(!0), w(se, null, _e(J.value, (p) => (C(), w("a", {
            key: p.key,
            href: Mt(p.key),
            class: "library-filter-chip",
            "aria-label": `${m(a)("library", "Remove filter")}: ${p.label}`
          }, [
            l("strong", null, d(p.label) + ":", 1),
            ge(" " + d(p.value) + " ", 1),
            x[26] || (x[26] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Gh))), 128))
        ], 8, Kh)) : de("", !0),
        o.value.length === 0 ? (C(), w("div", {
          key: 3,
          class: Ur(["library-empty-content", { "library-first-run-guidance": A.value || L.value, "library-filter-empty-state": D.value && !A.value && !L.value }]),
          role: "status"
        }, [
          A.value ? (C(), w(se, { key: 0 }, [
            l("h3", null, d(m(a)("library", "Start with one Library root")), 1),
            l("p", Yh, d(m(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            l("p", Xh, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, d(m(a)("library", "Add a Library root")), 9, Jh),
              l("span", Zh, d(m(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : L.value ? (C(), w(se, { key: 1 }, [
            l("h3", null, d(m(a)("library", "No enabled Library roots")), 1),
            l("p", Qh, d(m(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            l("p", em, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, d(m(a)("library", "Open Library settings")), 9, tm)
            ])
          ], 64)) : D.value ? (C(), w(se, { key: 2 }, [
            l("h3", null, d(m(a)("library", "No matches for the current filters")), 1),
            l("p", rm, d(m(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            l("p", nm, [
              l("a", {
                href: pr(),
                class: "button secondary"
              }, d(m(a)("library", "Clear search")), 9, im),
              l("a", sm, d(m(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (C(), w(se, { key: 3 }, [
            l("h3", null, d(m(a)("library", "No catalogue items yet")), 1),
            l("p", om, d(m(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            l("p", am, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, d(m(a)("library", "Run a scan from settings")), 9, lm)
            ])
          ], 64))
        ], 2)) : (C(), w("div", cm, [
          (C(!0), w(se, null, _e(o.value, (p) => (C(), w("article", {
            key: p.id,
            class: Ur(["library-cover-card", { "library-cover-card--open": N[p.id] }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: p.openUrl,
              "aria-label": `Read ${p.title}`
            }, [
              l("img", {
                class: "library-cover-image",
                src: p.coverUrl,
                alt: `Cover for ${p.title}`,
                loading: "lazy"
              }, null, 8, dm)
            ], 8, um),
            l("form", {
              method: "post",
              action: p.starUrl,
              class: "library-cover-star-form",
              onSubmit: Nn((Z) => _n(p, Z), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: ae.value
              }, null, 8, pm),
              x[27] || (x[27] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: p.starred ? "0" : "1"
              }, null, 8, hm),
              l("button", {
                type: "submit",
                class: Ur(["library-cover-star-button", { "library-cover-star-button--starred": p.starred }]),
                "aria-pressed": p.starred ? "true" : "false",
                title: p.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                "aria-label": p.starred ? m(a)("library", "Unstar this publication") : m(a)("library", "Star this publication"),
                onClick: Nn((Z) => _n(p, Z), ["prevent"])
              }, d(p.starred ? "★" : "☆"), 11, mm)
            ], 40, fm),
            l("div", bm, [
              l("div", ym, [
                l("h3", null, [
                  p.starred ? (C(), w("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": m(a)("library", "Starred")
                  }, "★", 8, gm)) : de("", !0),
                  ge(d(p.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: p.openUrl
                }, d(m(a)("library", "Read")), 9, _m)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (Z) => ii(p.id, Z)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${m(a)("library", "Show details and actions")}: ${p.title}`
                }, d(m(a)("library", "Details")), 9, Sm),
                l("div", Em, [
                  p.creators ? (C(), w("p", Tm, d(p.creators), 1)) : de("", !0),
                  l("dl", Cm, [
                    l("div", wm, [
                      l("dt", null, d(m(a)("library", "Type")), 1),
                      l("dd", null, d(p.publicationType), 1)
                    ]),
                    p.publication ? (C(), w("div", xm, [
                      l("dt", null, d(m(a)("library", "Series")), 1),
                      l("dd", null, d(p.publication), 1)
                    ])) : de("", !0),
                    p.publicationDate ? (C(), w("div", Am, [
                      l("dt", null, d(m(a)("library", "Date")), 1),
                      l("dd", null, d(p.publicationDate), 1)
                    ])) : de("", !0),
                    p.workflowStatus ? (C(), w("div", Rm, [
                      l("dt", null, d(m(a)("library", "Status")), 1),
                      l("dd", null, d(p.workflowStatus), 1)
                    ])) : de("", !0),
                    p.hasScannerConflict ? (C(), w("div", km, [
                      l("dt", null, d(m(a)("library", "Review")), 1),
                      l("dd", null, d(p.scannerConflictCount) + " fields", 1)
                    ])) : de("", !0),
                    p.lastOpenedAt ? (C(), w("div", Om, [
                      l("dt", null, d(m(a)("library", "Last opened")), 1),
                      l("dd", null, d(p.lastOpenedAt), 1)
                    ])) : de("", !0),
                    p.extension ? (C(), w("div", Nm, [
                      l("dt", null, d(m(a)("library", "Format")) + ":", 1),
                      l("dd", null, d(ft(p.extension)), 1)
                    ])) : de("", !0),
                    p.shelf ? (C(), w("div", Pm, [
                      l("dt", null, d(m(a)("library", "Shelf")), 1),
                      l("dd", null, d(p.shelf), 1)
                    ])) : de("", !0)
                  ]),
                  p.description ? (C(), w("p", Im, d(p.description), 1)) : de("", !0),
                  p.scanStatus !== "indexed" || p.scanError ? (C(), w("p", Lm, [
                    ge(" scanStatus: " + d(p.scanStatus || "unknown"), 1),
                    p.scanError ? (C(), w("span", Mm, " · scanError: " + d(p.scanError), 1)) : de("", !0)
                  ])) : de("", !0),
                  l("div", Um, [
                    Xe(p).length === 0 ? (C(), w("span", Dm, "No Nextcloud tags")) : (C(!0), w(se, { key: 1 }, _e(Xe(p), (Z) => (C(), w("span", {
                      key: Z.id,
                      class: "library-tag"
                    }, d(Z.name), 1))), 128))
                  ]),
                  l("p", Fm, [
                    l("a", {
                      href: p.filesUrl
                    }, d(m(a)("library", "Show in Files")), 9, Hm),
                    x[28] || (x[28] = ge(" · ", -1)),
                    l("a", {
                      href: p.downloadUrl
                    }, d(m(a)("library", "Download source")), 9, $m),
                    x[29] || (x[29] = ge(" · ", -1)),
                    l("a", {
                      href: p.detailsUrl
                    }, d(m(a)("library", "Details")), 9, jm)
                  ])
                ])
              ], 40, vm)
            ])
          ], 2))), 128))
        ])),
        o.value.length > 0 ? (C(), w("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": m(a)("library", "Catalogue pagination")
        }, [
          l("span", Bm, [
            ge(d(m(a)("library", "Page")) + " " + d(q.value.page), 1),
            q.value.total > 0 ? (C(), w("span", qm, " · " + d(q.value.from) + "–" + d(q.value.to), 1)) : de("", !0)
          ]),
          q.value.previousUrl ? (C(), w("a", {
            key: 0,
            href: q.value.previousUrl
          }, d(m(a)("library", "Previous")), 9, zm)) : (C(), w("span", Wm, d(m(a)("library", "Previous")), 1)),
          q.value.nextUrl ? (C(), w("a", {
            key: 2,
            href: q.value.nextUrl
          }, d(m(a)("library", "Next")), 9, Km)) : (C(), w("span", Gm, d(m(a)("library", "Next")), 1))
        ], 8, Vm)) : de("", !0)
      ])
    ]));
  }
}, ho = fu("library", "catalogue", {}), Un = document.querySelector("#library-vue-root"), mo = {
  ...ho,
  requestToken: Un?.dataset.requestToken || ho.requestToken || ""
};
function Y(e) {
  return String(e ?? "");
}
function ka(e) {
  return Y(e).toUpperCase();
}
function Xm(e, t, r, n = Y) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = Y(i), s.textContent = n(i), Y(i) === Y(r) && (s.selected = !0), e.appendChild(s);
  }
}
function bo(e, t, r, n, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = r === "q" ? "search" : "text", o.name = r, o.value = Y(n), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function Nr(e, t, r, n, i, s, o = Y) {
  const c = document.createElement("label");
  c.textContent = t;
  const f = document.createElement("select");
  f.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, f.appendChild(v), Xm(f, s, n, o), c.appendChild(f), e.appendChild(c);
}
function Pr(e) {
  const t = Y(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function Jm(e, t = {}) {
  return Y(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Y(e || t?.publication || ""))}`);
}
function Zm(e) {
  return Y(e.discoveryPage) === "publication";
}
function Qm(e, t = {}) {
  return Y(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Y(e))}`);
}
function Oi(e) {
  return Y(e.discoveryPage) === "year";
}
function eb(e, t = {}) {
  return Y(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Y(e))}`);
}
function Ni(e) {
  return Y(e.discoveryPage) === "creator";
}
function tb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Y(n).trim() !== "");
}
function rb() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Jr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function nb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function ib(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), bo(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Nr(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), bo(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), Nr(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], ka), Nr(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), Nr(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), Nr(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Nr(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", a("library", "Clear catalogue filters")), s.textContent = a("library", "Clear"), n.append(i, s), n;
}
function sb() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", s = document.createElement("p");
  return s.className = "library-notice library-batch-metadata-apply-result", s.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), s;
}
function ob(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", a("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [S, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(S) || Y(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = S, j.value = Y(I), n.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = a("library", "Search");
  const c = document.createElement("input");
  c.type = "search", c.name = "q", c.value = Y(r.q), c.placeholder = "Camera, Eco, Rolleiflex...", c.addEventListener("input", s), o.appendChild(c), n.appendChild(o);
  const f = [
    [a("library", "Sort"), "sort", r.sort || "title", [["title", a("library", "Title")], ["recent", a("library", "Recently added")], ["publicationDate", a("library", "Publication date")], ["publication", a("library", "Series")], ["lastOpened", a("library", "Recently opened")], ["format", a("library", "Format")]]],
    [a("library", "Starred"), "starred", r.starred || "", [["", a("library", "All")], ["1", a("library", "Starred")]]],
    [a("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [S, I, j, ne] of f) {
    const z = document.createElement("label");
    z.textContent = S;
    const le = document.createElement("select");
    le.name = I;
    for (const [ie, q] of ne) {
      const U = document.createElement("option");
      U.value = Y(ie), U.textContent = Y(q), Y(ie) === Y(j) && (U.selected = !0), le.appendChild(U);
    }
    le.addEventListener("change", () => n.requestSubmit()), z.appendChild(le), n.appendChild(z);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", a("library", "Apply catalogue filters")), v.textContent = a("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", a("library", "Clear catalogue filters")), y.textContent = a("library", "Clear all"), n.append(v, y), n;
}
function ab(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = Y(e.settingsUrl || ""), s = Y(e.metadataExportUrl || ""), o = Y(e.batchTagUrl || "/apps/library/bulk/tags"), c = Y(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), f = Y(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = Y(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Y(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), S = document.createElement("div");
  S.className = "library-vue-catalogue library-vue-fallback", S.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ne = document.createElement("div"), z = document.createElement("h2");
  z.id = "library-catalogue-heading", z.textContent = a("library", "Publication catalogue");
  const le = document.createElement("p");
  le.className = "library-muted", le.textContent = a("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ne.append(z, le);
  const ie = document.createElement("nav");
  if (ie.className = "library-catalogue-toolbar", ie.setAttribute("aria-label", a("library", "Library actions")), i) {
    const O = document.createElement("a");
    O.href = i, O.className = "button secondary", O.setAttribute("aria-label", "Open Library settings"), O.textContent = a("library", "Settings"), ie.appendChild(O);
  }
  if (s) {
    const O = document.createElement("a");
    O.href = s, O.className = "button secondary", O.setAttribute("aria-label", "Export corrected metadata"), O.textContent = a("library", "Export corrected metadata"), ie.appendChild(O);
  }
  if (e.metadataSidecarManifestUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarManifestUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar manifest"), O.textContent = a("library", "Sidecar manifest"), ie.appendChild(O);
  }
  if (e.metadataSidecarBundleUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarBundleUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar ZIP"), O.textContent = a("library", "Sidecar ZIP"), ie.appendChild(O);
  }
  j.append(ne, ie), I.appendChild(j);
  const q = sb();
  q && I.appendChild(q), I.appendChild(ob(e, n));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), U.append(V, ib(e, n)), I.appendChild(U), Zm(e) || Oi(e) || Ni(e)) {
    const O = document.createElement("section");
    O.className = "library-discovery-header", O.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ni(e) ? a("library", "Creator") : Oi(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = Y(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${Ni(e) ? a("library", "items by this creator. Sorted by publication context when available.") : Oi(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const oe = document.createElement("a");
    oe.href = "/apps/library/", oe.className = "button secondary", oe.textContent = a("library", "Back to full catalogue"), O.append(N, H, Q, oe), I.appendChild(O);
  }
  const ae = document.createElement("p");
  ae.className = "library-muted library-filter-result-summary", ae.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Pe = document.createElement("a");
  Pe.href = "?", Pe.textContent = ` ${a("library", "Clear all filters")}`, ae.appendChild(Pe), I.appendChild(ae);
  const Oe = document.createElement("details");
  Oe.className = "library-batch-actions";
  const $e = document.createElement("summary");
  $e.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const Ie = Pr(e);
  Ie && Ee.appendChild(Ie);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Ee.appendChild(H);
  }
  const tt = document.createElement("label");
  tt.textContent = a("library", "Apply Nextcloud tag to current results");
  const ct = document.createElement("input");
  ct.type = "text", ct.name = "nextcloudTagName", ct.placeholder = "batch-review", tt.appendChild(ct);
  const We = document.createElement("button");
  We.type = "submit", We.className = "button secondary", We.textContent = a("library", "Apply Nextcloud tag to current results");
  const Et = document.createElement("p");
  Et.className = "library-muted", Et.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(tt, We, Et);
  const De = document.createElement("form");
  De.method = "post", De.action = c, De.className = "library-batch-tag-remove-form";
  const Le = Pr(e);
  Le && De.appendChild(Le);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), De.appendChild(H);
  }
  const me = document.createElement("label");
  me.textContent = a("library", "Nextcloud tag");
  const ue = document.createElement("input");
  ue.type = "text", ue.name = "nextcloudTagName", ue.setAttribute("list", "library-nextcloud-tag-suggestions"), ue.placeholder = a("library", "e.g. Review"), ue.autocomplete = "off", me.appendChild(ue);
  const je = document.createElement("button");
  je.type = "submit", je.className = "button secondary", je.textContent = a("library", "Remove tag from current results");
  const be = document.createElement("p");
  be.className = "library-muted", be.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), De.append(me, je, be);
  const we = document.createElement("form");
  we.method = "post", we.action = f, we.className = "library-batch-metadata-reset-form";
  const Ve = Pr(e);
  Ve && we.appendChild(Ve);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), we.appendChild(H);
  }
  const Ye = document.createElement("input");
  Ye.type = "hidden", Ye.name = "scannerConflicts", Ye.value = "1";
  const pe = document.createElement("button");
  pe.type = "submit", pe.className = "button secondary", pe.textContent = a("library", "Reset filtered metadata");
  const At = document.createElement("p");
  At.className = "library-muted", At.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), we.append(Ye, pe, At);
  const Be = document.createElement("form");
  Be.method = "post", Be.action = v, Be.className = "library-batch-metadata-edit-preview-form", Be.target = "_blank";
  const ut = Pr(e);
  ut && Be.appendChild(ut);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Be.appendChild(H);
  }
  const Tt = document.createElement("label");
  Tt.textContent = a("library", "Metadata field");
  const Ct = document.createElement("select");
  Ct.name = "bulkEditField";
  for (const [O, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = O, H.textContent = a("library", N), Ct.appendChild(H);
  }
  Tt.appendChild(Ct);
  const rt = document.createElement("label");
  rt.textContent = a("library", "Preview value");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "bulkEditValue", dt.placeholder = "magazine, de, photography...", dt.autocomplete = "off", rt.appendChild(dt);
  const h = document.createElement("button");
  h.type = "submit", h.className = "button secondary", h.textContent = a("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = a("library", "Preview first, then apply from the review page."), Be.append(Tt, rt, h, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const k = Pr(e);
  k && _.appendChild(k);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), _.appendChild(H);
  }
  const E = document.createElement("button");
  E.type = "submit", E.className = "button secondary", E.textContent = a("library", "Request fresh cover previews");
  const A = document.createElement("p");
  A.className = "library-muted", A.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(E, A), Oe.append($e, Ee, De, we, Be, _), I.appendChild(Oe);
  const L = document.createElement("nav");
  L.className = "library-pagination", L.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, L.appendChild(D), I.appendChild(L);
  const M = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], T = document.createElement("details");
  T.className = M.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const G = document.createElement("summary");
  G.className = "library-periodical-groups-summary", G.textContent = a("library", "Show top series and periodicals"), T.appendChild(G);
  const $ = document.createElement("h3");
  $.textContent = M.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = M.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), T.append($, W), M.length > 0) {
    const O = document.createElement("ul");
    for (const N of M) {
      const H = document.createElement("li"), Q = document.createElement("a");
      Q.href = Jm(N.publication, N), Q.textContent = Y(N.publication);
      const oe = document.createElement("span");
      oe.className = "library-muted", oe.textContent = `${N.itemCount} items`, H.append(Q, oe), O.appendChild(H);
    }
    T.appendChild(O);
  }
  I.appendChild(T);
  const J = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (J.length > 0) {
    const O = document.createElement("details");
    O.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = a("library", "Top publication years");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump into dated books, magazines, journals and comics by year.");
    const oe = document.createElement("ul");
    for (const ye of J) {
      const fe = document.createElement("li"), Me = document.createElement("a");
      Me.href = Qm(ye, e), Me.textContent = Y(ye), fe.appendChild(Me), oe.appendChild(fe);
    }
    O.append(N, H, Q, oe), I.appendChild(O);
  }
  const te = Array.isArray(e.creators) ? e.creators : [];
  if (te.length > 0) {
    const O = document.createElement("details");
    O.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = a("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = a("library", "Top creators");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = a("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const oe = document.createElement("ul");
    for (const ye of te) {
      const fe = document.createElement("li"), Me = document.createElement("a");
      Me.href = eb(ye, e), Me.textContent = Y(ye), fe.appendChild(Me), oe.appendChild(fe);
    }
    O.append(N, H, Q, oe), I.appendChild(O);
  }
  if (r.length === 0) {
    const O = document.createElement("div"), N = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), Q = tb(e);
    O.className = "library-empty-content", (N === 0 || H === 0) && O.classList.add("library-first-run-guidance"), Q && N > 0 && H > 0 && O.classList.add("library-filter-empty-state"), O.setAttribute("role", "status");
    const oe = document.createElement("h3"), ye = document.createElement("p");
    ye.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", N === 0 ? (oe.textContent = a("library", "Start with one Library root"), ye.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Jr(fe, i, "button primary", a("library", "Add a Library root")), nb(fe, a("library", "Run a scan after saving a root"))) : H === 0 ? (oe.textContent = a("library", "No enabled Library roots"), ye.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Jr(fe, i, "button primary", a("library", "Open Library settings"))) : Q ? (oe.textContent = a("library", "No matches for the current filters"), ye.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Jr(fe, rb(), "button secondary", a("library", "Clear search")), Jr(fe, "?", "button primary", a("library", "Clear all filters"))) : (oe.textContent = a("library", "No catalogue items yet"), ye.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Jr(fe, i, "button primary", a("library", "Run a scan from settings"))), O.append(oe, ye, fe), I.appendChild(O);
  } else {
    const O = document.createElement("div");
    O.className = "library-cover-gallery";
    for (const N of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const Q = document.createElement("a");
      Q.className = "library-cover-link", Q.href = Y(N.openUrl || "#"), Q.setAttribute("aria-label", `Read ${Y(N.title || "publication")}`);
      const oe = document.createElement("img");
      oe.className = "library-cover-image", oe.src = Y(N.coverUrl || ""), oe.alt = `Cover for ${Y(N.title || "publication")}`, oe.loading = "lazy", Q.appendChild(oe);
      const ye = Pr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = Y(N.starUrl || ""), fe.className = "library-cover-star-form", ye && fe.appendChild(ye);
      const Me = document.createElement("input");
      Me.type = "hidden", Me.name = "returnTo", Me.value = "catalogue";
      const ke = document.createElement("input");
      ke.type = "hidden", ke.name = "starred", ke.value = N.starred ? "0" : "1";
      const Te = document.createElement("button");
      Te.type = "submit", Te.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Te.setAttribute("aria-pressed", N.starred ? "true" : "false"), Te.setAttribute("aria-label", N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), Te.title = N.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), Te.textContent = N.starred ? "★" : "☆", fe.append(Me, ke, Te);
      const nt = document.createElement("div");
      nt.className = "library-cover-summary";
      const Lt = document.createElement("h3");
      if (Lt.textContent = Y(N.title || "Untitled publication"), nt.appendChild(Lt), N.creators) {
        const gt = document.createElement("p");
        gt.className = "library-creator", gt.textContent = Y(N.creators), nt.appendChild(gt);
      }
      const Mt = document.createElement("dl");
      Mt.className = "library-cover-detail-list";
      const pr = [
        ["Type", Y(N.publicationType || "other")],
        ["Format", N.extension ? ka(N.extension) : ""],
        ["Shelf", N.shelf ? Y(N.shelf) : ""]
      ].filter(([, gt]) => gt !== "");
      for (const [gt, Ar] of pr) {
        const Dt = document.createElement("div");
        Dt.className = "library-cover-detail-chip";
        const ft = document.createElement("dt");
        ft.textContent = gt;
        const Xe = document.createElement("dd");
        Xe.textContent = Ar, Dt.append(ft, Xe), Mt.appendChild(Dt);
      }
      nt.appendChild(Mt);
      const Rt = document.createElement("p"), yt = document.createElement("a");
      yt.href = Y(N.openUrl || "#"), yt.textContent = a("library", "Read");
      const nr = document.createElement("a");
      nr.href = Y(N.filesUrl || "#"), nr.textContent = a("library", "Show in Files");
      const Ut = document.createElement("a");
      Ut.href = Y(N.downloadUrl || "#"), Ut.textContent = a("library", "Download source");
      const ir = document.createElement("a");
      ir.href = Y(N.detailsUrl || "#"), ir.textContent = a("library", "Details"), Rt.append(yt, document.createTextNode(" · "), nr, document.createTextNode(" · "), Ut, document.createTextNode(" · "), ir), nt.appendChild(Rt), H.append(Q, fe, nt), O.appendChild(H);
    }
    I.appendChild(O);
  }
  return S.appendChild(I), S;
}
if (Un)
  try {
    cu(Ym, { state: mo }).mount(Un);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Un.replaceChildren(ab(mo));
  }
//# sourceMappingURL=library-main.mjs.map
