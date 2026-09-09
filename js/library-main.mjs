// @__NO_SIDE_EFFECTS__
function zi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, Lr = [], qt = () => {
}, bs = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gn = (e) => e.startsWith("onUpdate:"), Qe = Object.assign, Wi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jo = Object.prototype.hasOwnProperty, Se = (e, t) => jo.call(e, t), Q = Array.isArray, pr = (e) => mn(e) === "[object Map]", Ar = (e) => mn(e) === "[object Set]", _a = (e) => mn(e) === "[object Date]", le = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", ys = (e) => (Ce(e) || le(e)) && le(e.then) && le(e.catch), gs = Object.prototype.toString, mn = (e) => gs.call(e), Vo = (e) => mn(e).slice(8, -1), _s = (e) => mn(e) === "[object Object]", Ki = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ zi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, qo = /-\w/g, Rt = Yn(
  (e) => e.replace(qo, (t) => t.slice(1).toUpperCase())
), Bo = /\B([A-Z])/g, kr = Yn(
  (e) => e.replace(Bo, "-$1").toLowerCase()
), vs = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ui = Yn(
  (e) => e ? `on${vs(e)}` : ""
), Vt = (e, t) => !Object.is(e, t), In = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ss = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Xn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let va;
const Jn = () => va || (va = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gi(e) {
  if (Q(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? Go(n) : Gi(n);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (Ue(e) || Ce(e))
    return e;
}
const zo = /;(?![^(]*\))/g, Wo = /:([^]+)/, Ko = /\/\*[^]*?\*\//g;
function Go(e) {
  const t = {};
  return e.replace(Ko, "").split(zo).forEach((r) => {
    if (r) {
      const n = r.split(Wo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ur(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (Q(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ur(e[r]);
      n && (t += n + " ");
    }
  else if (Ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xo = /* @__PURE__ */ zi(Yo);
function Es(e) {
  return !!e || e === "";
}
function Jo(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = hr(e[n], t[n]);
  return r;
}
function Sa(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let a = -1;
    for (let s = 0; s < r.length; s++)
      if (!n[s] && hr(i, r[s])) {
        a = s;
        break;
      }
    if (a < 0) return !1;
    n[a] = 1;
  }
  return !0;
}
function hr(e, t) {
  if (e === t) return !0;
  let r = _a(e), n = _a(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Bt(e), n = Bt(t), r || n)
    return e === t;
  if (r = Q(e), n = Q(t), r || n)
    return r && n ? Jo(e, t) : !1;
  if (r = Ce(e), n = Ce(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = pr(e), n = pr(t), r || n || (r = Ar(e), n = Ar(t), r || n))
      return r && n ? Sa(e, t) : !1;
    const i = Object.keys(e).length, a = Object.keys(t).length;
    if (i !== a)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), p = t.hasOwnProperty(s);
      if (c && !p || !c && p || !hr(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zo(e, t) {
  return e.findIndex((r) => hr(r, t));
}
const Ts = (e) => !!(e && e.__v_isRef === !0), d = (e) => Ue(e) ? e : e == null ? "" : Q(e) || Ce(e) && (e.toString === gs || !le(e.toString)) ? Ts(e) ? d(e.value) : JSON.stringify(e, Cs, 2) : String(e), Cs = (e, t) => Ts(t) ? Cs(e, t.value) : pr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], a) => (r[di(n, a) + " =>"] = i, r),
    {}
  )
} : Ar(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => di(r))
} : Bt(t) ? di(t) : Ce(t) && !Q(t) && !_s(t) ? String(t) : t, di = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ge;
class Qo {
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
let ke;
const fi = /* @__PURE__ */ new WeakSet();
class ws {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && (Ge.active ? Ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fi.has(this) && (fi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || As(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ea(this), ks(this);
    const t = ke, r = Ot;
    ke = this, Ot = !0;
    try {
      return this.fn();
    } finally {
      Rs(this), ke = t, Ot = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ji(t);
      this.deps = this.depsTail = void 0, Ea(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Mi(this) && this.run();
  }
  get dirty() {
    return Mi(this);
  }
}
let xs = 0, nn, an;
function As(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = an, an = e;
    return;
  }
  e.next = nn, nn = e;
}
function Yi() {
  xs++;
}
function Xi() {
  if (--xs > 0)
    return;
  if (an) {
    let t = an;
    for (an = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; nn; ) {
    let t = nn;
    for (nn = void 0; t; ) {
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
function ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Ji(n), tl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Mi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Os(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Os(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cn) || (e.globalVersion = cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = ke, n = Ot;
  ke = e, Ot = !0;
  try {
    ks(e);
    const i = e.fn(e._value);
    (t.version === 0 || Vt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ke = r, Ot = n, Rs(e), e.flags &= -3;
  }
}
function Ji(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      Ji(a, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function tl(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ot = !0;
const Ns = [];
function er() {
  Ns.push(Ot), Ot = !1;
}
function tr() {
  const e = Ns.pop();
  Ot = e === void 0 ? !0 : e;
}
function Ea(e) {
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
let cn = 0;
class rl {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !Ot || ke === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== ke)
      r = this.activeLink = new rl(ke, this), ke.deps ? (r.prevDep = ke.depsTail, ke.depsTail.nextDep = r, ke.depsTail = r) : ke.deps = ke.depsTail = r, Ps(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = ke.depsTail, r.nextDep = void 0, ke.depsTail.nextDep = r, ke.depsTail = r, ke.deps === r && (ke.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, cn++, this.notify(t);
  }
  notify(t) {
    Yi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Xi();
    }
  }
}
function Ps(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ps(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ii = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ Symbol(
  ""
), Li = /* @__PURE__ */ Symbol(
  ""
), un = /* @__PURE__ */ Symbol(
  ""
);
function Je(e, t, r) {
  if (Ot && ke) {
    let n = Ii.get(e);
    n || Ii.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Zi()), i.map = n, i.key = r), i.track();
  }
}
function Jt(e, t, r, n, i, a) {
  const s = Ii.get(e);
  if (!s) {
    cn++;
    return;
  }
  const c = (p) => {
    p && p.trigger();
  };
  if (Yi(), t === "clear")
    s.forEach(c);
  else {
    const p = Q(e), v = p && Ki(r);
    if (p && r === "length") {
      const y = Number(n);
      s.forEach((S, P) => {
        (P === "length" || P === un || !Bt(P) && P >= y) && c(S);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && c(s.get(r)), v && c(s.get(un)), t) {
        case "add":
          p ? v && c(s.get("length")) : (c(s.get(Cr)), pr(e) && c(s.get(Li)));
          break;
        case "delete":
          p || (c(s.get(Cr)), pr(e) && c(s.get(Li)));
          break;
        case "set":
          pr(e) && c(s.get(Cr));
          break;
      }
  }
  Xi();
}
function Or(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Je(t, "iterate", un), /* @__PURE__ */ xt(e) ? t : t.map(Nt));
}
function Zn(e) {
  return Je(e = /* @__PURE__ */ ve(e), "iterate", un), e;
}
function $t(e, t) {
  return /* @__PURE__ */ rr(e) ? $r(/* @__PURE__ */ wr(e) ? Nt(t) : t) : Nt(t);
}
const nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return pi(this, Symbol.iterator, (e) => $t(this, e));
  },
  concat(...e) {
    return Or(this).concat(
      ...e.map((t) => Q(t) ? Or(t) : t)
    );
  },
  entries() {
    return pi(this, "entries", (e) => (e[1] = $t(this, e[1]), e));
  },
  every(e, t) {
    return Gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => $t(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Gt(
      this,
      "find",
      e,
      t,
      (r) => $t(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gt(
      this,
      "findLast",
      e,
      t,
      (r) => $t(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hi(this, "includes", e);
  },
  indexOf(...e) {
    return hi(this, "indexOf", e);
  },
  join(e) {
    return Or(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Kr(this, "pop");
  },
  push(...e) {
    return Kr(this, "push", e);
  },
  reduce(e, ...t) {
    return Ta(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ta(this, "reduceRight", e, t);
  },
  shift() {
    return Kr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Kr(this, "splice", e);
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
    return Kr(this, "unshift", e);
  },
  values() {
    return pi(this, "values", (e) => $t(this, e));
  }
};
function pi(e, t, r) {
  const n = Zn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ xt(e) && (i._next = i.next, i.next = () => {
    const a = i._next();
    return a.done || (a.value = r(a.value)), a;
  }), i;
}
const il = Array.prototype;
function Gt(e, t, r, n, i, a) {
  const s = Zn(e), c = s !== e && !/* @__PURE__ */ xt(e), p = s[t];
  if (p !== il[t]) {
    const S = p.apply(e, a);
    return c ? Nt(S) : S;
  }
  let v = r;
  s !== e && (c ? v = function(S, P) {
    return r.call(this, $t(e, S), P, e);
  } : r.length > 2 && (v = function(S, P) {
    return r.call(this, S, P, e);
  }));
  const y = p.call(s, v, n);
  return c && i ? i(y) : y;
}
function Ta(e, t, r, n) {
  const i = Zn(e), a = i !== e && !/* @__PURE__ */ xt(e);
  let s = r, c = !1;
  i !== e && (a ? (c = n.length === 0, s = function(v, y, S) {
    return c && (c = !1, v = $t(e, v)), r.call(this, v, $t(e, y), S, e);
  }) : r.length > 3 && (s = function(v, y, S) {
    return r.call(this, v, y, S, e);
  }));
  const p = i[t](s, ...n);
  return c ? $t(e, p) : p;
}
function hi(e, t, r) {
  const n = /* @__PURE__ */ ve(e);
  Je(n, "iterate", un);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ ta(r[0]) ? (r[0] = /* @__PURE__ */ ve(r[0]), n[t](...r)) : i;
}
function Kr(e, t, r = []) {
  er(), Yi();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, r);
  return Xi(), tr(), n;
}
const al = /* @__PURE__ */ zi("__proto__,__v_isRef,__isVue"), Ms = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
);
function sl(e) {
  Bt(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Je(t, "has", e), t.hasOwnProperty(e);
}
class Is {
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
      return n === (i ? a ? bl : Fs : a ? Ds : Us).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = Q(t);
    if (!i) {
      let p;
      if (s && (p = nl[r]))
        return p;
      if (r === "hasOwnProperty")
        return sl;
    }
    const c = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ze(t) ? t : n
    );
    if ((Bt(r) ? Ms.has(r) : al(r)) || (i || Je(t, "get", r), a))
      return c;
    if (/* @__PURE__ */ Ze(c)) {
      const p = s && Ki(r) ? c : c.value;
      return i && Ce(p) ? /* @__PURE__ */ Di(p) : p;
    }
    return Ce(c) ? i ? /* @__PURE__ */ Di(c) : /* @__PURE__ */ fr(c) : c;
  }
}
class Ls extends Is {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let a = t[r];
    const s = Q(t) && Ki(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ rr(a);
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ rr(n) && (a = /* @__PURE__ */ ve(a), n = /* @__PURE__ */ ve(n)), !s && /* @__PURE__ */ Ze(a) && !/* @__PURE__ */ Ze(n))
        return v || (a.value = n), !0;
    }
    const c = s ? Number(r) < t.length : Se(t, r), p = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Ze(t) ? t : i
    );
    return t === /* @__PURE__ */ ve(i) && p && (c ? Vt(n, a) && Jt(t, "set", r, n) : Jt(t, "add", r, n)), p;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Jt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Bt(r) || !Ms.has(r)) && Je(t, "has", r), n;
  }
  ownKeys(t) {
    return Je(
      t,
      "iterate",
      Q(t) ? "length" : Cr
    ), Reflect.ownKeys(t);
  }
}
class ol extends Is {
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
const ll = /* @__PURE__ */ new Ls(), cl = /* @__PURE__ */ new ol(), ul = /* @__PURE__ */ new Ls(!0);
const Ui = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function dl(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, a = /* @__PURE__ */ ve(i), s = pr(a), c = e === "entries" || e === Symbol.iterator && s, p = e === "keys" && s, v = i[e](...n), y = r ? Ui : t ? $r : Nt;
    return !t && Je(
      a,
      "iterate",
      p ? Li : Cr
    ), Qe(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: S, done: P } = v.next();
          return P ? { value: S, done: P } : {
            value: c ? [y(S[0]), y(S[1])] : y(S),
            done: P
          };
        }
      }
    );
  };
}
function kn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fl(e, t) {
  const r = {
    get(i) {
      const a = this.__v_raw, s = /* @__PURE__ */ ve(a), c = /* @__PURE__ */ ve(i);
      e || (Vt(i, c) && Je(s, "get", i), Je(s, "get", c));
      const { has: p } = An(s), v = t ? Ui : e ? $r : Nt;
      if (p.call(s, i))
        return v(a.get(i));
      if (p.call(s, c))
        return v(a.get(c));
      a !== s && a.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Je(/* @__PURE__ */ ve(i), "iterate", Cr), i.size;
    },
    has(i) {
      const a = this.__v_raw, s = /* @__PURE__ */ ve(a), c = /* @__PURE__ */ ve(i);
      return e || (Vt(i, c) && Je(s, "has", i), Je(s, "has", c)), i === c ? a.has(i) : a.has(i) || a.has(c);
    },
    forEach(i, a) {
      const s = this, c = s.__v_raw, p = /* @__PURE__ */ ve(c), v = t ? Ui : e ? $r : Nt;
      return !e && Je(p, "iterate", Cr), c.forEach((y, S) => i.call(a, v(y), v(S), s));
    }
  };
  return Qe(
    r,
    e ? {
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear")
    } : {
      add(i) {
        const a = /* @__PURE__ */ ve(this), s = An(a), c = /* @__PURE__ */ ve(i), p = !t && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ rr(i) ? c : i;
        return s.has.call(a, p) || Vt(i, p) && s.has.call(a, i) || Vt(c, p) && s.has.call(a, c) || (a.add(p), Jt(a, "add", p, p)), this;
      },
      set(i, a) {
        !t && !/* @__PURE__ */ xt(a) && !/* @__PURE__ */ rr(a) && (a = /* @__PURE__ */ ve(a));
        const s = /* @__PURE__ */ ve(this), { has: c, get: p } = An(s);
        let v = c.call(s, i);
        v || (i = /* @__PURE__ */ ve(i), v = c.call(s, i));
        const y = p.call(s, i);
        return s.set(i, a), v ? Vt(a, y) && Jt(s, "set", i, a) : Jt(s, "add", i, a), this;
      },
      delete(i) {
        const a = /* @__PURE__ */ ve(this), { has: s, get: c } = An(a);
        let p = s.call(a, i);
        p || (i = /* @__PURE__ */ ve(i), p = s.call(a, i)), c && c.call(a, i);
        const v = a.delete(i);
        return p && Jt(a, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ve(this), a = i.size !== 0, s = i.clear();
        return a && Jt(
          i,
          "clear",
          void 0,
          void 0
        ), s;
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
function Qi(e, t) {
  const r = fl(e, t);
  return (n, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Se(r, i) && i in n ? r : n,
    i,
    a
  );
}
const pl = {
  get: /* @__PURE__ */ Qi(!1, !1)
}, hl = {
  get: /* @__PURE__ */ Qi(!1, !0)
}, ml = {
  get: /* @__PURE__ */ Qi(!0, !1)
};
const Us = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
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
function fr(e) {
  return /* @__PURE__ */ rr(e) ? e : ea(
    e,
    !1,
    ll,
    pl,
    Us
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return ea(
    e,
    !1,
    ul,
    hl,
    Ds
  );
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
  return ea(
    e,
    !0,
    cl,
    ml,
    Fs
  );
}
function ea(e, t, r, n, i) {
  if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = yl(Vo(e));
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? n : r
  );
  return i.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  return /* @__PURE__ */ rr(e) ? /* @__PURE__ */ wr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ta(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function _l(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Ss(e, "__v_skip", !0), e;
}
const Nt = (e) => Ce(e) ? /* @__PURE__ */ fr(e) : e, $r = (e) => Ce(e) ? /* @__PURE__ */ Di(e) : e;
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return Sl(e, !1);
}
function Sl(e, t) {
  return /* @__PURE__ */ Ze(e) ? e : new El(e, t);
}
class El {
  constructor(t, r) {
    this.dep = new Zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ve(t), this._value = r ? t : Nt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(t) || /* @__PURE__ */ rr(t);
    t = n ? t : /* @__PURE__ */ ve(t), Vt(t, r) && (this._rawValue = t, this._value = n ? t : Nt(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ Ze(e) ? e.value : e;
}
const Tl = {
  get: (e, t, r) => t === "__v_raw" ? e : m(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Ze(i) && !/* @__PURE__ */ Ze(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Hs(e) {
  return /* @__PURE__ */ wr(e) ? e : new Proxy(e, Tl);
}
class Cl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return As(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Os(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function wl(e, t, r = !1) {
  let n, i;
  return le(e) ? n = e : (n = e.get, i = e.set), new Cl(n, i, r);
}
const Rn = {}, Fn = /* @__PURE__ */ new WeakMap();
let vr;
function xl(e, t = !1, r = vr) {
  if (r) {
    let n = Fn.get(r);
    n || Fn.set(r, n = []), n.push(e);
  }
}
function Al(e, t, r = xe) {
  const { immediate: n, deep: i, once: a, scheduler: s, augmentJob: c, call: p } = r, v = (V) => i ? V : /* @__PURE__ */ xt(V) || i === !1 || i === 0 ? Zt(V, 1) : Zt(V);
  let y, S, P, j, re = !1, z = !1;
  if (/* @__PURE__ */ Ze(e) ? (S = () => e.value, re = /* @__PURE__ */ xt(e)) : /* @__PURE__ */ wr(e) ? (S = () => v(e), re = !0) : Q(e) ? (z = !0, re = e.some((V) => /* @__PURE__ */ wr(V) || /* @__PURE__ */ xt(V)), S = () => e.map((V) => {
    if (/* @__PURE__ */ Ze(V))
      return V.value;
    if (/* @__PURE__ */ wr(V))
      return v(V);
    if (le(V))
      return p ? p(V, 2) : V();
  })) : le(e) ? t ? S = p ? () => p(e, 2) : e : S = () => {
    if (P) {
      er();
      try {
        P();
      } finally {
        tr();
      }
    }
    const V = vr;
    vr = y;
    try {
      return p ? p(e, 3, [j]) : e(j);
    } finally {
      vr = V;
    }
  } : S = qt, t && i) {
    const V = S, se = i === !0 ? 1 / 0 : i;
    S = () => Zt(V(), se);
  }
  const oe = el(), ne = () => {
    y.stop(), oe && oe.active && Wi(oe.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...se) => {
      const Pe = V(...se);
      return ne(), Pe;
    };
  }
  let B = z ? new Array(e.length).fill(Rn) : Rn;
  const U = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const se = y.run();
        if (V || i || re || (z ? se.some((Pe, Oe) => Vt(Pe, B[Oe])) : Vt(se, B))) {
          P && P();
          const Pe = vr;
          vr = y;
          try {
            const Oe = [
              se,
              // pass undefined as the old value when it's changed for the first time
              B === Rn ? void 0 : z && B[0] === Rn ? [] : B,
              j
            ];
            B = se, p ? p(t, 3, Oe) : (
              // @ts-expect-error
              t(...Oe)
            );
          } finally {
            vr = Pe;
          }
        }
      } else
        y.run();
  };
  return c && c(U), y = new ws(S), y.scheduler = s ? () => s(U, !1) : U, j = (V) => xl(V, !1, y), P = y.onStop = () => {
    const V = Fn.get(y);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const se of V) se();
      Fn.delete(y);
    }
  }, t ? n ? U(!0) : B = y.run() : s ? s(U.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Zt(e, t = 1 / 0, r) {
  if (t <= 0 || !Ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Ze(e))
    Zt(e.value, t, r);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      Zt(e[n], t, r);
  else if (Ar(e) || pr(e))
    e.forEach((n) => {
      Zt(n, t, r);
    });
  else if (_s(e)) {
    for (const n in e)
      Zt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Zt(e[n], t, r);
  }
  return e;
}
function bn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Qn(i, t, r);
  }
}
function Pt(e, t, r, n) {
  if (le(e)) {
    const i = bn(e, t, r, n);
    return i && ys(i) && i.catch((a) => {
      Qn(a, t, r);
    }), i;
  }
  if (Q(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(Pt(e[a], t, r, n));
    return i;
  }
}
function Qn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: s } = t && t.appContext.config || xe;
  if (t) {
    let c = t.parent;
    const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; c; ) {
      const y = c.ec;
      if (y) {
        for (let S = 0; S < y.length; S++)
          if (y[S](e, p, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (a) {
      er(), bn(a, null, 10, [
        e,
        p,
        v
      ]), tr();
      return;
    }
  }
  kl(e, r, i, n, s);
}
function kl(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const st = [];
let Ht = -1;
const Dr = [];
let dr = null, Mr = 0;
const $s = /* @__PURE__ */ Promise.resolve();
let Hn = null;
function js(e) {
  const t = Hn || $s;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rl(e) {
  let t = Ht + 1, r = st.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = st[n], a = dn(i);
    a < e || a === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function ra(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), r = st[st.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(r) ? st.push(e) : st.splice(Rl(t), 0, e), e.flags |= 1, Vs();
  }
}
function Vs() {
  Hn || (Hn = $s.then(Bs));
}
function Ol(e) {
  if (!Q(e))
    dr && e.id === -1 ? dr.splice(Mr + 1, 0, e) : e.flags & 1 || (Dr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Dr.push(e[t]);
  Vs();
}
function Ca(e, t, r = Ht + 1) {
  for (; r < st.length; r++) {
    const n = st[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      st.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function qs(e) {
  if (Dr.length) {
    const t = [...new Set(Dr)].sort(
      (r, n) => dn(r) - dn(n)
    );
    if (Dr.length = 0, dr) {
      for (let r = 0; r < t.length; r++)
        dr.push(t[r]);
      return;
    }
    for (dr = t, Mr = 0; Mr < dr.length; Mr++) {
      const r = dr[Mr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    dr = null, Mr = 0;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bs(e) {
  try {
    for (Ht = 0; Ht < st.length; Ht++) {
      const t = st[Ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ht < st.length; Ht++) {
      const t = st[Ht];
      t && (t.flags &= -2);
    }
    Ht = -1, st.length = 0, qs(), Hn = null, (st.length || Dr.length) && Bs();
  }
}
let wt = null, zs = null;
function $n(e) {
  const t = wt;
  return wt = e, zs = e && e.type.__scopeId || null, t;
}
function Nl(e, t = wt, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && La(-1);
    const a = $n(t), s = xr.length;
    let c;
    try {
      c = e(...i);
    } finally {
      for (let p = xr.length; p > s; p--) go();
      $n(a), n._d && La(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ze(e, t) {
  if (wt === null)
    return e;
  const r = ii(wt), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, s, c, p = xe] = t[i];
    a && (le(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Zt(s), n.push({
      dir: a,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: p
    }));
  }
  return e;
}
function yr(e, t, r, n) {
  const i = e.dirs, a = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    a && (c.oldValue = a[s].value);
    let p = c.dir[n];
    p && (er(), Pt(p, r, 8, [
      e.el,
      c,
      e,
      t
    ]), tr());
  }
}
function Pl(e, t) {
  if (ot) {
    let r = ot.provides;
    const n = ot.parent && ot.parent.provides;
    n === r && (r = ot.provides = Object.create(n)), r[e] = t;
  }
}
function Ln(e, t, r = !1) {
  const n = kc();
  if (n || Fr) {
    let i = Fr ? Fr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && le(t) ? t.call(n && n.proxy) : t;
  }
}
const Ml = /* @__PURE__ */ Symbol.for("v-scx"), Il = () => Ln(Ml);
function mi(e, t, r) {
  return Ws(e, t, r);
}
function Ws(e, t, r = xe) {
  const { immediate: n, deep: i, flush: a, once: s } = r, c = Qe({}, r), p = t && n || !t && a !== "post";
  let v;
  if (hn) {
    if (a === "sync") {
      const j = Il();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!p) {
      const j = () => {
      };
      return j.stop = qt, j.resume = qt, j.pause = qt, j;
    }
  }
  const y = ot;
  c.call = (j, re, z) => Pt(j, y, re, z);
  let S = !1;
  a === "post" ? c.scheduler = (j) => {
    pt(j, y && y.suspense);
  } : a !== "sync" && (S = !0, c.scheduler = (j, re) => {
    re ? j() : ra(j);
  }), c.augmentJob = (j) => {
    t && (j.flags |= 4), S && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const P = Al(e, t, c);
  return hn && (v ? v.push(P) : p && P()), P;
}
function Ll(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? Ks(n, e) : () => n[e] : e.bind(n, n);
  let a;
  le(t) ? a = t : (a = t.handler, r = t);
  const s = yn(this), c = Ws(i, a.bind(n), r);
  return s(), c;
}
function Ks(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ul = /* @__PURE__ */ Symbol("_vte"), ei = (e) => e.__isTeleport, bi = /* @__PURE__ */ Symbol("_leaveCb");
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== nr) {
        t = r;
        break;
      }
  }
  return t;
}
function Gs(e) {
  if (!ia(e))
    return ei(e.type) && e.children ? Dl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && le(r.default))
      return r.default();
  }
}
function na(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    na(
      ei(r.type) && Gs(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ys(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wa(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const jn = /* @__PURE__ */ new WeakMap();
function sn(e, t, r, n, i = !1) {
  if (Q(e)) {
    e.forEach(
      (z, oe) => sn(
        z,
        t && (Q(t) ? t[oe] : t),
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
  const a = n.shapeFlag & 4 ? ii(n.component) : n.el, s = i ? null : a, { i: c, r: p } = e, v = t && t.r, y = c.refs === xe ? c.refs = {} : c.refs, S = c.setupState, P = /* @__PURE__ */ ve(S), j = S === xe ? bs : (z) => wa(y, z) ? !1 : Se(P, z), re = (z, oe) => !(oe && wa(y, oe));
  if (v != null && v !== p) {
    if (xa(t), Ue(v))
      y[v] = null, j(v) && (S[v] = null);
    else if (/* @__PURE__ */ Ze(v)) {
      const z = t;
      re(v, z.k) && (v.value = null), z.k && (y[z.k] = null);
    }
  }
  if (le(p))
    bn(p, c, 12, [s, y]);
  else {
    const z = Ue(p), oe = /* @__PURE__ */ Ze(p);
    if (z || oe) {
      const ne = () => {
        if (e.f) {
          const B = z ? j(p) ? S[p] : y[p] : re() || !e.k ? p.value : y[e.k];
          if (i)
            Q(B) && Wi(B, a);
          else if (Q(B))
            B.includes(a) || B.push(a);
          else if (z)
            y[p] = [a], j(p) && (S[p] = y[p]);
          else {
            const U = [a];
            re(p, e.k) && (p.value = U), e.k && (y[e.k] = U);
          }
        } else z ? (y[p] = s, j(p) && (S[p] = s)) : oe && (re(p, e.k) && (p.value = s), e.k && (y[e.k] = s));
      };
      if (s) {
        const B = () => {
          ne(), jn.delete(e);
        };
        B.id = -1, jn.set(e, B), pt(B, r);
      } else
        xa(e), ne();
    }
  }
}
function xa(e) {
  const t = jn.get(e);
  t && (t.flags |= 8, jn.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, ia = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Xs(e, "a", t);
}
function Hl(e, t) {
  Xs(e, "da", t);
}
function Xs(e, t, r = ot) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ti(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      ia(i.parent.vnode) && $l(n, t, r, i), i = i.parent;
  }
}
function $l(e, t, r, n) {
  const i = ti(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Qs(() => {
    Wi(n[t], i);
  }, r);
}
function ti(e, t, r = ot, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...s) => {
      er();
      const c = yn(r), p = Pt(t, r, e, s);
      return c(), tr(), p;
    });
    return n ? i.unshift(a) : i.push(a), a;
  }
}
const ir = (e) => (t, r = ot) => {
  (!hn || e === "sp") && ti(e, (...n) => t(...n), r);
}, jl = ir("bm"), Js = ir("m"), Vl = ir(
  "bu"
), ql = ir("u"), Zs = ir(
  "bum"
), Qs = ir("um"), Bl = ir(
  "sp"
), zl = ir("rtg"), Wl = ir("rtc");
function Kl(e, t = ot) {
  ti("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function ge(e, t, r, n) {
  let i;
  const a = r, s = Q(e);
  if (s || Ue(e)) {
    const c = s && /* @__PURE__ */ wr(e);
    let p = !1, v = !1;
    c && (p = !/* @__PURE__ */ xt(e), v = /* @__PURE__ */ rr(e), e = Zn(e)), i = new Array(e.length);
    for (let y = 0, S = e.length; y < S; y++)
      i[y] = t(
        p ? v ? $r(Nt(e[y])) : Nt(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let c = 0; c < e; c++)
      i[c] = t(c + 1, c, void 0, a);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (c, p) => t(c, p, void 0, a)
      );
    else {
      const c = Object.keys(e);
      i = new Array(c.length);
      for (let p = 0, v = c.length; p < v; p++) {
        const y = c[p];
        i[p] = t(e[y], y, p, a);
      }
    }
  else
    i = [];
  return i;
}
const Fi = (e) => e ? Eo(e) ? ii(e) : Fi(e.parent) : null, ln = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fi(e.parent),
    $root: (e) => Fi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => to(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ra(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
    $watch: (e) => Ll.bind(e)
  })
), yi = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: a, accessCache: s, type: c, appContext: p } = e;
    if (t[0] !== "$") {
      const P = s[t];
      if (P !== void 0)
        switch (P) {
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
        if (yi(n, t))
          return s[t] = 1, n[t];
        if (i !== xe && Se(i, t))
          return s[t] = 2, i[t];
        if (Se(a, t))
          return s[t] = 3, a[t];
        if (r !== xe && Se(r, t))
          return s[t] = 4, r[t];
        Hi && (s[t] = 0);
      }
    }
    const v = ln[t];
    let y, S;
    if (v)
      return t === "$attrs" && Je(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && Se(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      S = p.config.globalProperties, Se(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: a } = e;
    return yi(i, t) ? (i[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: a, type: s }
  }, c) {
    let p;
    return !!(r[c] || e !== xe && c[0] !== "$" && Se(e, c) || yi(t, c) || Se(a, c) || Se(n, c) || Se(ln, c) || Se(i.config.globalProperties, c) || (p = s.__cssModules) && p[c]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Aa(e) {
  return Q(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Hi = !0;
function Xl(e) {
  const t = to(e), r = e.proxy, n = e.ctx;
  Hi = !1, t.beforeCreate && ka(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: s,
    watch: c,
    provide: p,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: S,
    mounted: P,
    beforeUpdate: j,
    updated: re,
    activated: z,
    deactivated: oe,
    beforeDestroy: ne,
    beforeUnmount: B,
    destroyed: U,
    unmounted: V,
    render: se,
    renderTracked: Pe,
    renderTriggered: Oe,
    errorCaptured: je,
    serverPrefetch: Ee,
    // public API
    expose: Me,
    inheritAttrs: et,
    // assets
    components: lt,
    directives: Ke,
    filters: _t
  } = t;
  if (v && Jl(v, n, null), s)
    for (const me in s) {
      const ce = s[me];
      le(ce) && (n[me] = ce.bind(r));
    }
  if (i) {
    const me = i.call(r, r);
    Ce(me) && (e.data = /* @__PURE__ */ fr(me));
  }
  if (Hi = !0, a)
    for (const me in a) {
      const ce = a[me], Ve = le(ce) ? ce.bind(r, r) : le(ce.get) ? ce.get.bind(r, r) : qt, be = !le(ce) && le(ce.set) ? ce.set.bind(r) : qt, we = K({
        get: Ve,
        set: be
      });
      Object.defineProperty(n, me, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (qe) => we.value = qe
      });
    }
  if (c)
    for (const me in c)
      eo(c[me], n, r, me);
  if (p) {
    const me = le(p) ? p.call(r) : p;
    Reflect.ownKeys(me).forEach((ce) => {
      Pl(ce, me[ce]);
    });
  }
  y && ka(y, e, "c");
  function Ie(me, ce) {
    Q(ce) ? ce.forEach((Ve) => me(Ve.bind(r))) : ce && me(ce.bind(r));
  }
  if (Ie(jl, S), Ie(Js, P), Ie(Vl, j), Ie(ql, re), Ie(Fl, z), Ie(Hl, oe), Ie(Kl, je), Ie(Wl, Pe), Ie(zl, Oe), Ie(Zs, B), Ie(Qs, V), Ie(Bl, Ee), Q(Me))
    if (Me.length) {
      const me = e.exposed || (e.exposed = {});
      Me.forEach((ce) => {
        Object.defineProperty(me, ce, {
          get: () => r[ce],
          set: (Ve) => r[ce] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  se && e.render === qt && (e.render = se), et != null && (e.inheritAttrs = et), lt && (e.components = lt), Ke && (e.directives = Ke), Ee && Ys(e);
}
function Jl(e, t, r = qt) {
  Q(e) && (e = $i(e));
  for (const n in e) {
    const i = e[n];
    let a;
    Ce(i) ? "default" in i ? a = Ln(
      i.from || n,
      i.default,
      !0
    ) : a = Ln(i.from || n) : a = Ln(i), /* @__PURE__ */ Ze(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[n] = a;
  }
}
function ka(e, t, r) {
  Pt(
    Q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function eo(e, t, r, n) {
  let i = n.includes(".") ? Ks(r, n) : () => r[n];
  if (Ue(e)) {
    const a = t[e];
    le(a) && mi(i, a);
  } else if (le(e))
    mi(i, e.bind(r));
  else if (Ce(e))
    if (Q(e))
      e.forEach((a) => eo(a, t, r, n));
    else {
      const a = le(e.handler) ? e.handler.bind(r) : t[e.handler];
      le(a) && mi(i, a, e);
    }
}
function to(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = a.get(t);
  let p;
  return c ? p = c : !i.length && !r && !n ? p = t : (p = {}, i.length && i.forEach(
    (v) => Vn(p, v, s, !0)
  ), Vn(p, t, s)), Ce(t) && a.set(t, p), p;
}
function Vn(e, t, r, n = !1) {
  const { mixins: i, extends: a } = t;
  a && Vn(e, a, r, !0), i && i.forEach(
    (s) => Vn(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const c = Zl[s] || r && r[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Zl = {
  data: Ra,
  props: Oa,
  emits: Oa,
  // objects
  methods: Qr,
  computed: Qr,
  // lifecycle
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  // assets
  components: Qr,
  directives: Qr,
  // watch
  watch: ec,
  // provide / inject
  provide: Ra,
  inject: Ql
};
function Ra(e, t) {
  return t ? e ? function() {
    return Qe(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Qr($i(e), $i(t));
}
function $i(e) {
  if (Q(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function at(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qr(e, t) {
  return e ? Qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Oa(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
    /* @__PURE__ */ Object.create(null),
    Aa(e),
    Aa(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Qe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = at(e[n], t[n]);
  return r;
}
function ro() {
  return {
    app: null,
    config: {
      isNativeTag: bs,
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
    le(n) || (n = Qe({}, n)), i != null && !Ce(i) && (i = null);
    const a = ro(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let p = !1;
    const v = a.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Ic,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...S) {
        return s.has(y) || (y && le(y.install) ? (s.add(y), y.install(v, ...S)) : le(y) && (s.add(y), y(v, ...S))), v;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), v;
      },
      component(y, S) {
        return S ? (a.components[y] = S, v) : a.components[y];
      },
      directive(y, S) {
        return S ? (a.directives[y] = S, v) : a.directives[y];
      },
      mount(y, S, P) {
        if (!p) {
          const j = v._ceVNode || Qt(n, i);
          return j.appContext = a, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, y, P), p = !0, v._container = y, y.__vue_app__ = v, ii(j.component);
        }
      },
      onUnmount(y) {
        c.push(y);
      },
      unmount() {
        p && (Pt(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, S) {
        return a.provides[y] = S, v;
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
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${kr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let i = r;
  const a = t.startsWith("update:"), s = a && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((y) => Ue(y) ? y.trim() : y)), s.number && (i = i.map(Xn)));
  let c, p = n[c = ui(t)] || // also try camelCase event handler (#2249)
  n[c = ui(Rt(t))];
  !p && a && (p = n[c = ui(kr(t))]), p && Pt(
    p,
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
    e.emitted[c] = !0, Pt(
      v,
      e,
      6,
      i
    );
  }
}
const ac = /* @__PURE__ */ new WeakMap();
function no(e, t, r = !1) {
  const n = r ? ac : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let s = {}, c = !1;
  if (!le(e)) {
    const p = (v) => {
      const y = no(v, t, !0);
      y && (c = !0, Qe(s, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !a && !c ? (Ce(e) && n.set(e, null), null) : (Q(a) ? a.forEach((p) => s[p] = null) : Qe(s, a), Ce(e) && n.set(e, s), s);
}
function ri(e, t) {
  return !e || !Kn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, kr(t)) || Se(e, t));
}
function Na(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [a],
    slots: s,
    attrs: c,
    emit: p,
    render: v,
    renderCache: y,
    props: S,
    data: P,
    setupState: j,
    ctx: re,
    inheritAttrs: z
  } = e, oe = $n(e);
  let ne, B;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, se = V;
      ne = jt(
        v.call(
          se,
          V,
          y,
          S,
          j,
          P,
          re
        )
      ), B = c;
    } else {
      const V = t;
      ne = jt(
        V.length > 1 ? V(
          S,
          { attrs: c, slots: s, emit: p }
        ) : V(
          S,
          null
        )
      ), B = t.props ? c : sc(c);
    }
  } catch (V) {
    xr.length = 0, Qn(V, e, 1), ne = Qt(nr);
  }
  let U = ne;
  if (B && z !== !1) {
    const V = Object.keys(B), { shapeFlag: se } = U;
    V.length && se & 7 && (a && V.some(Gn) && (B = oc(
      B,
      a
    )), U = jr(U, B, !1, !0));
  }
  if (r.dirs && (U = jr(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ei(U.type) && Gs(U) || U;
    na(V, r.transition);
  }
  return ne = U, $n(oe), ne;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Kn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, oc = (e, t) => {
  const r = {};
  for (const n in e)
    (!Gn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function lc(e, t, r) {
  const { props: n, children: i, component: a } = e, { props: s, children: c, patchFlag: p } = t, v = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return n ? Pa(n, s, v) : !!s;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        const P = y[S];
        if (io(s, n, P) && !ri(v, P))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : n === s ? !1 : n ? s ? Pa(n, s, v) : !0 : !!s;
  return !1;
}
function Pa(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    if (io(t, e, a) && !ri(r, a))
      return !0;
  }
  return !1;
}
function io(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ce(n) && Ce(i) ? !hr(n, i) : n !== i;
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
const ao = {}, so = () => Object.create(ao), oo = (e) => Object.getPrototypeOf(e) === ao;
function uc(e, t, r, n = !1) {
  const i = {}, a = so();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lo(e, t, i, a);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ gl(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function dc(e, t, r, n) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, c = /* @__PURE__ */ ve(i), [p] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const y = e.vnode.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        let P = y[S];
        if (ri(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (p)
          if (Se(a, P))
            j !== a[P] && (a[P] = j, v = !0);
          else {
            const re = Rt(P);
            i[re] = ji(
              p,
              c,
              re,
              j,
              e,
              !1
            );
          }
        else
          j !== a[P] && (a[P] = j, v = !0);
      }
    }
  } else {
    lo(e, t, i, a) && (v = !0);
    let y;
    for (const S in c)
      (!t || // for camelCase
      !Se(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = kr(S)) === S || !Se(t, y))) && (p ? r && // for camelCase
      (r[S] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[S] = ji(
        p,
        c,
        S,
        void 0,
        e,
        !0
      )) : delete i[S]);
    if (a !== c)
      for (const S in a)
        (!t || !Se(t, S)) && (delete a[S], v = !0);
  }
  v && Jt(e.attrs, "set", "");
}
function lo(e, t, r, n) {
  const [i, a] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let p in t) {
      if (rn(p))
        continue;
      const v = t[p];
      let y;
      i && Se(i, y = Rt(p)) ? !a || !a.includes(y) ? r[y] = v : (c || (c = {}))[y] = v : ri(e.emitsOptions, p) || (!(p in n) || v !== n[p]) && (n[p] = v, s = !0);
    }
  if (a) {
    const p = /* @__PURE__ */ ve(r), v = c || xe;
    for (let y = 0; y < a.length; y++) {
      const S = a[y];
      r[S] = ji(
        i,
        p,
        S,
        v[S],
        e,
        !Se(v, S)
      );
    }
  }
  return s;
}
function ji(e, t, r, n, i, a) {
  const s = e[r];
  if (s != null) {
    const c = Se(s, "default");
    if (c && n === void 0) {
      const p = s.default;
      if (s.type !== Function && !s.skipFactory && le(p)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = yn(i);
          n = v[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        n = p;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (a && !c ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === kr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function co(e, t, r = !1) {
  const n = r ? fc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const a = e.props, s = {}, c = [];
  let p = !1;
  if (!le(e)) {
    const y = (S) => {
      p = !0;
      const [P, j] = co(S, t, !0);
      Qe(s, P), j && c.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !p)
    return Ce(e) && n.set(e, Lr), Lr;
  if (Q(a))
    for (let y = 0; y < a.length; y++) {
      const S = Rt(a[y]);
      Ma(S) && (s[S] = xe);
    }
  else if (a)
    for (const y in a) {
      const S = Rt(y);
      if (Ma(S)) {
        const P = a[y], j = s[S] = Q(P) || le(P) ? { type: P } : Qe({}, P), re = j.type;
        let z = !1, oe = !0;
        if (Q(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const B = re[ne], U = le(B) && B.name;
            if (U === "Boolean") {
              z = !0;
              break;
            } else U === "String" && (oe = !1);
          }
        else
          z = le(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = z, j[
          1
          /* shouldCastTrue */
        ] = oe, (z || Se(j, "default")) && c.push(S);
      }
    }
  const v = [s, c];
  return Ce(e) && n.set(e, v), v;
}
function Ma(e) {
  return e[0] !== "$" && !rn(e);
}
const aa = (e) => e === "_" || e === "_ctx" || e === "$stable", sa = (e) => Q(e) ? e.map(jt) : [jt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Nl((...i) => sa(t(...i)), r);
  return n._c = !1, n;
}, uo = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (aa(i)) continue;
    const a = e[i];
    if (le(a))
      t[i] = pc(i, a, n);
    else if (a != null) {
      const s = sa(a);
      t[i] = () => s;
    }
  }
}, fo = (e, t) => {
  const r = sa(t);
  e.slots.default = () => r;
}, po = (e, t, r) => {
  for (const n in t)
    (r || !aa(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = so();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (po(n, t, r), r && Ss(n, "_", i, !0)) : uo(t, n);
  } else t && fo(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let a = !0, s = xe;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? r && c === 1 ? a = !1 : po(i, t, r) : (a = !t.$stable, uo(t, i)), s = t;
  } else t && (fo(e, t), s = { default: 1 });
  if (a)
    for (const c in i)
      !aa(c) && s[c] == null && delete i[c];
}, pt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = Jn();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: a,
    createElement: s,
    createText: c,
    createComment: p,
    setText: v,
    setElementText: y,
    parentNode: S,
    nextSibling: P,
    setScopeId: j = qt,
    insertStaticContent: re
  } = e, z = (h, b, _, R = null, E = null, A = null, I = void 0, D = null, L = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !Gr(h, b) && (R = ct(h), qe(h, E, A, !0), h = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: w, ref: G, shapeFlag: $ } = b;
    switch (w) {
      case ni:
        oe(h, b, _, R);
        break;
      case nr:
        ne(h, b, _, R);
        break;
      case _i:
        h == null && B(b, _, R, I);
        break;
      case ie:
        lt(
          h,
          b,
          _,
          R,
          E,
          A,
          I,
          D,
          L
        );
        break;
      default:
        $ & 1 ? se(
          h,
          b,
          _,
          R,
          E,
          A,
          I,
          D,
          L
        ) : $ & 6 ? Ke(
          h,
          b,
          _,
          R,
          E,
          A,
          I,
          D,
          L
        ) : ($ & 64 || $ & 128) && w.process(
          h,
          b,
          _,
          R,
          E,
          A,
          I,
          D,
          L,
          tt
        );
    }
    G != null && E ? sn(G, h && h.ref, A, b || h, !b) : G == null && h && h.ref != null && sn(h.ref, null, A, h, !0);
  }, oe = (h, b, _, R) => {
    if (h == null)
      n(
        b.el = c(b.children),
        _,
        R
      );
    else {
      const E = b.el = h.el;
      b.children !== h.children && v(E, b.children);
    }
  }, ne = (h, b, _, R) => {
    h == null ? n(
      b.el = p(b.children || ""),
      _,
      R
    ) : b.el = h.el;
  }, B = (h, b, _, R) => {
    [h.el, h.anchor] = re(
      h.children,
      b,
      _,
      R,
      h.el,
      h.anchor
    );
  }, U = ({ el: h, anchor: b }, _, R) => {
    let E;
    for (; h && h !== b; )
      E = P(h), n(h, _, R), h = E;
    n(b, _, R);
  }, V = ({ el: h, anchor: b }) => {
    let _;
    for (; h && h !== b; )
      _ = P(h), i(h), h = _;
    i(b);
  }, se = (h, b, _, R, E, A, I, D, L) => {
    if (b.type === "svg" ? I = "svg" : b.type === "math" && (I = "mathml"), h == null)
      Pe(
        b,
        _,
        R,
        E,
        A,
        I,
        D,
        L
      );
    else {
      const w = h.el && h.el._isVueCE ? h.el : null;
      try {
        w && w._beginPatch(), Ee(
          h,
          b,
          E,
          A,
          I,
          D,
          L
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, Pe = (h, b, _, R, E, A, I, D) => {
    let L, w;
    const { props: G, shapeFlag: $, transition: W, dirs: J } = h;
    if (L = h.el = s(
      h.type,
      A,
      G && G.is,
      G
    ), $ & 8 ? y(L, h.children) : $ & 16 && je(
      h.children,
      L,
      null,
      R,
      E,
      gi(h, A),
      I,
      D
    ), J && yr(h, null, R, "created"), Oe(L, h, h.scopeId, I, R), G) {
      for (const O in G)
        O !== "value" && !rn(O) && a(L, O, null, G[O], A, R);
      "value" in G && a(L, "value", null, G.value, A), (w = G.onVnodeBeforeMount) && Ft(w, R, h);
    }
    J && yr(h, null, R, "beforeMount");
    const ee = gc(E, W);
    ee && W.beforeEnter(L), n(L, b, _), ((w = G && G.onVnodeMounted) || ee || J) && pt(() => {
      w && Ft(w, R, h), ee && W.enter(L), J && yr(h, null, R, "mounted");
    }, E);
  }, Oe = (h, b, _, R, E) => {
    if (_ && j(h, _), R)
      for (let A = 0; A < R.length; A++)
        j(h, R[A]);
    if (E) {
      let A = E.subTree;
      if (b === A || yo(A.type) && (A.ssContent === b || A.ssFallback === b)) {
        const I = E.vnode;
        Oe(
          h,
          I,
          I.scopeId,
          I.slotScopeIds,
          E.parent
        );
      }
    }
  }, je = (h, b, _, R, E, A, I, D, L = 0) => {
    for (let w = L; w < h.length; w++) {
      const G = h[w] = D ? Xt(h[w]) : jt(h[w]);
      z(
        null,
        G,
        b,
        _,
        R,
        E,
        A,
        I,
        D
      );
    }
  }, Ee = (h, b, _, R, E, A, I) => {
    const D = b.el = h.el;
    let { patchFlag: L, dynamicChildren: w, dirs: G } = b;
    L |= h.patchFlag & 16;
    const $ = h.props || xe, W = b.props || xe;
    let J;
    if (_ && gr(_, !1), (J = W.onVnodeBeforeUpdate) && Ft(J, _, b, h), G && yr(b, h, _, "beforeUpdate"), _ && gr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!h.dynamicChildren || h.dynamicChildren.length !== w.length) && (L = 0, I = !1, w = null), ($.innerHTML && W.innerHTML == null || $.textContent && W.textContent == null) && y(D, ""), w ? Me(
      h.dynamicChildren,
      w,
      D,
      _,
      R,
      gi(b, E),
      A
    ) : I || ce(
      h,
      b,
      D,
      null,
      _,
      R,
      gi(b, E),
      A,
      !1
    ), L > 0) {
      if (L & 16)
        et(D, $, W, _, E);
      else if (L & 2 && $.class !== W.class && a(D, "class", null, W.class, E), L & 4 && a(D, "style", $.style, W.style, E), L & 8) {
        const ee = b.dynamicProps;
        for (let O = 0; O < ee.length; O++) {
          const N = ee[O], H = $[N], Z = W[N];
          (Z !== H || N === "value") && a(D, N, H, Z, E, _);
        }
      }
      L & 1 && h.children !== b.children && y(D, b.children);
    } else !I && w == null && et(D, $, W, _, E);
    ((J = W.onVnodeUpdated) || G) && pt(() => {
      J && Ft(J, _, b, h), G && yr(b, h, _, "updated");
    }, R);
  }, Me = (h, b, _, R, E, A, I) => {
    for (let D = 0; D < b.length; D++) {
      const L = h[D], w = b[D], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Gr(L, w) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? S(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      z(
        L,
        w,
        G,
        null,
        R,
        E,
        A,
        I,
        !0
      );
    }
  }, et = (h, b, _, R, E) => {
    if (b !== _) {
      if (b !== xe)
        for (const A in b)
          !rn(A) && !(A in _) && a(
            h,
            A,
            b[A],
            null,
            E,
            R
          );
      for (const A in _) {
        if (rn(A)) continue;
        const I = _[A], D = b[A];
        I !== D && A !== "value" && a(h, A, D, I, E, R);
      }
      "value" in _ && a(h, "value", b.value, _.value, E);
    }
  }, lt = (h, b, _, R, E, A, I, D, L) => {
    const w = b.el = h ? h.el : c(""), G = b.anchor = h ? h.anchor : c("");
    let { patchFlag: $, dynamicChildren: W, slotScopeIds: J } = b;
    J && (D = D ? D.concat(J) : J), h == null ? (n(w, _, R), n(G, _, R), je(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      G,
      E,
      A,
      I,
      D,
      L
    )) : $ > 0 && $ & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === W.length ? (Me(
      h.dynamicChildren,
      W,
      _,
      E,
      A,
      I,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || E && b === E.subTree) && ho(
      h,
      b,
      !0
      /* shallow */
    )) : ce(
      h,
      b,
      _,
      G,
      E,
      A,
      I,
      D,
      L
    );
  }, Ke = (h, b, _, R, E, A, I, D, L) => {
    b.slotScopeIds = D, h == null ? b.shapeFlag & 512 ? E.ctx.activate(
      b,
      _,
      R,
      I,
      L
    ) : _t(
      b,
      _,
      R,
      E,
      A,
      I,
      L
    ) : De(h, b, L);
  }, _t = (h, b, _, R, E, A, I) => {
    const D = h.component = Ac(
      h,
      R,
      E
    );
    if (ia(h) && (D.ctx.renderer = tt), Rc(D, !1, I), D.asyncDep) {
      if (E && E.registerDep(D, Ie, I), !h.el) {
        const L = D.subTree = Qt(nr);
        ne(null, L, b, _), h.placeholder = L.el;
      }
    } else
      Ie(
        D,
        h,
        b,
        _,
        E,
        A,
        I
      );
  }, De = (h, b, _) => {
    const R = b.component = h.component;
    if (lc(h, b, _))
      if (R.asyncDep && !R.asyncResolved) {
        me(R, b, _);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = h.el, R.vnode = b;
  }, Ie = (h, b, _, R, E, A, I) => {
    const D = () => {
      if (h.isMounted) {
        let { next: $, bu: W, u: J, parent: ee, vnode: O } = h;
        {
          const ye = mo(h);
          if (ye) {
            $ && ($.el = O.el, me(h, $, I)), ye.asyncDep.then(() => {
              pt(() => {
                h.isUnmounted || w();
              }, E);
            });
            return;
          }
        }
        let N = $, H;
        gr(h, !1), $ ? ($.el = O.el, me(h, $, I)) : $ = O, W && In(W), (H = $.props && $.props.onVnodeBeforeUpdate) && Ft(H, ee, $, O), gr(h, !0);
        const Z = Na(h), ae = h.subTree;
        h.subTree = Z, z(
          ae,
          Z,
          // parent may have changed if it's in a teleport
          S(ae.el),
          // anchor may have changed if it's in a fragment
          ct(ae),
          h,
          E,
          A
        ), $.el = Z.el, N === null && cc(h, Z.el), J && pt(J, E), (H = $.props && $.props.onVnodeUpdated) && pt(
          () => Ft(H, ee, $, O),
          E
        );
      } else {
        let $;
        const { el: W, props: J } = b, { bm: ee, m: O, parent: N, root: H, type: Z } = h, ae = on(b);
        gr(h, !1), ee && In(ee), !ae && ($ = J && J.onVnodeBeforeMount) && Ft($, N, b), gr(h, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            Z,
            h.parent ? h.parent.type : void 0
          );
          const ye = h.subTree = Na(h);
          z(
            null,
            ye,
            _,
            R,
            h,
            E,
            A
          ), b.el = ye.el;
        }
        if (O && pt(O, E), !ae && ($ = J && J.onVnodeMounted)) {
          const ye = b;
          pt(
            () => Ft($, N, ye),
            E
          );
        }
        (b.shapeFlag & 256 || N && on(N.vnode) && N.vnode.shapeFlag & 256) && h.a && pt(h.a, E), h.isMounted = !0, b = _ = R = null;
      }
    };
    h.scope.on();
    const L = h.effect = new ws(D);
    h.scope.off();
    const w = h.update = L.run.bind(L), G = h.job = L.runIfDirty.bind(L);
    G.i = h, G.id = h.uid, L.scheduler = () => ra(G), gr(h, !0), w();
  }, me = (h, b, _) => {
    b.component = h;
    const R = h.vnode.props;
    h.vnode = b, h.next = null, dc(h, b.props, R, _), mc(h, b.children, _), er(), Ca(h), tr();
  }, ce = (h, b, _, R, E, A, I, D, L = !1) => {
    const w = h && h.children, G = h ? h.shapeFlag : 0, $ = b.children, { patchFlag: W, shapeFlag: J } = b;
    if (W > 0) {
      if (W & 128) {
        be(
          w,
          $,
          _,
          R,
          E,
          A,
          I,
          D,
          L
        );
        return;
      } else if (W & 256) {
        Ve(
          w,
          $,
          _,
          R,
          E,
          A,
          I,
          D,
          L
        );
        return;
      }
    }
    J & 8 ? (G & 16 && Be(w, E, A), $ !== w && y(_, $)) : G & 16 ? J & 16 ? be(
      w,
      $,
      _,
      R,
      E,
      A,
      I,
      D,
      L
    ) : Be(w, E, A, !0) : (G & 8 && y(_, ""), J & 16 && je(
      $,
      _,
      R,
      E,
      A,
      I,
      D,
      L
    ));
  }, Ve = (h, b, _, R, E, A, I, D, L) => {
    h = h || Lr, b = b || Lr;
    const w = h.length, G = b.length, $ = Math.min(w, G);
    let W;
    for (W = 0; W < $; W++) {
      const J = b[W] = L ? Xt(b[W]) : jt(b[W]);
      z(
        h[W],
        J,
        _,
        null,
        E,
        A,
        I,
        D,
        L
      );
    }
    w > G ? Be(
      h,
      E,
      A,
      !0,
      !1,
      $
    ) : je(
      b,
      _,
      R,
      E,
      A,
      I,
      D,
      L,
      $
    );
  }, be = (h, b, _, R, E, A, I, D, L) => {
    let w = 0;
    const G = b.length;
    let $ = h.length - 1, W = G - 1;
    for (; w <= $ && w <= W; ) {
      const J = h[w], ee = b[w] = L ? Xt(b[w]) : jt(b[w]);
      if (Gr(J, ee))
        z(
          J,
          ee,
          _,
          null,
          E,
          A,
          I,
          D,
          L
        );
      else
        break;
      w++;
    }
    for (; w <= $ && w <= W; ) {
      const J = h[$], ee = b[W] = L ? Xt(b[W]) : jt(b[W]);
      if (Gr(J, ee))
        z(
          J,
          ee,
          _,
          null,
          E,
          A,
          I,
          D,
          L
        );
      else
        break;
      $--, W--;
    }
    if (w > $) {
      if (w <= W) {
        const J = W + 1, ee = J < G ? b[J].el : R;
        for (; w <= W; )
          z(
            null,
            b[w] = L ? Xt(b[w]) : jt(b[w]),
            _,
            ee,
            E,
            A,
            I,
            D,
            L
          ), w++;
      }
    } else if (w > W)
      for (; w <= $; )
        qe(h[w], E, A, !0), w++;
    else {
      const J = w, ee = w, O = /* @__PURE__ */ new Map();
      for (w = ee; w <= W; w++) {
        const Re = b[w] = L ? Xt(b[w]) : jt(b[w]);
        Re.key != null && O.set(Re.key, w);
      }
      let N, H = 0;
      const Z = W - ee + 1;
      let ae = !1, ye = 0;
      const fe = new Array(Z);
      for (w = 0; w < Z; w++) fe[w] = 0;
      for (w = J; w <= $; w++) {
        const Re = h[w];
        if (H >= Z) {
          qe(Re, E, A, !0);
          continue;
        }
        let Te;
        if (Re.key != null)
          Te = O.get(Re.key);
        else
          for (N = ee; N <= W; N++)
            if (fe[N - ee] === 0 && Gr(Re, b[N])) {
              Te = N;
              break;
            }
        Te === void 0 ? qe(Re, E, A, !0) : (fe[Te - ee] = w + 1, Te >= ye ? ye = Te : ae = !0, z(
          Re,
          b[Te],
          _,
          null,
          E,
          A,
          I,
          D,
          L
        ), H++);
      }
      const Le = ae ? _c(fe) : Lr;
      for (N = Le.length - 1, w = Z - 1; w >= 0; w--) {
        const Re = ee + w, Te = b[Re], rt = b[Re + 1], Mt = Re + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          rt.el || bo(rt)
        ) : R;
        fe[w] === 0 ? z(
          null,
          Te,
          _,
          Mt,
          E,
          A,
          I,
          D,
          L
        ) : ae && (N < 0 || w !== Le[N] ? we(Te, _, Mt, 2) : N--);
      }
    }
  }, we = (h, b, _, R, E = null) => {
    const { el: A, type: I, transition: D, children: L, shapeFlag: w } = h;
    if (w & 6) {
      we(h.component.subTree, b, _, R);
      return;
    }
    if (w & 128) {
      h.suspense.move(b, _, R);
      return;
    }
    if (w & 64) {
      I.move(h, b, _, tt);
      return;
    }
    if (I === ie) {
      n(A, b, _);
      for (let $ = 0; $ < L.length; $++)
        we(L[$], b, _, R);
      n(h.anchor, b, _);
      return;
    }
    if (I === _i) {
      U(h, b, _);
      return;
    }
    if (R !== 2 && w & 1 && D)
      if (R === 0)
        D.persisted && !A[bi] ? n(A, b, _) : (D.beforeEnter(A), n(A, b, _), pt(() => D.enter(A), E));
      else {
        const { leave: $, delayLeave: W, afterLeave: J } = D, ee = () => {
          h.ctx.isUnmounted ? i(A) : n(A, b, _);
        }, O = () => {
          const N = A._isLeaving || !!A[bi];
          A._isLeaving && A[bi](
            !0
            /* cancelled */
          ), D.persisted && !N ? ee() : $(A, () => {
            ee(), J && J();
          });
        };
        W ? W(A, ee, O) : O();
      }
    else
      n(A, b, _);
  }, qe = (h, b, _, R = !1, E = !1) => {
    const {
      type: A,
      props: I,
      ref: D,
      children: L,
      dynamicChildren: w,
      shapeFlag: G,
      patchFlag: $,
      dirs: W,
      cacheIndex: J,
      memo: ee
    } = h;
    if ($ === -2 && (E = !1), D != null && (er(), sn(D, null, _, h, !0), tr()), J != null && (b.renderCache[J] = void 0), G & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const O = G & 1 && W, N = !on(h);
    let H;
    if (N && (H = I && I.onVnodeBeforeUnmount) && Ft(H, b, h), G & 6)
      At(h.component, _, R);
    else {
      if (G & 128) {
        h.suspense.unmount(_, R);
        return;
      }
      O && yr(h, null, b, "beforeUnmount"), G & 64 ? h.type.remove(
        h,
        b,
        _,
        tt,
        R
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== ie || $ > 0 && $ & 64) ? Be(
        w,
        b,
        _,
        !1,
        !0
      ) : (A === ie && $ & 384 || !E && G & 16) && Be(L, b, _), R && Ye(h);
    }
    const Z = ee != null && J == null;
    (N && (H = I && I.onVnodeUnmounted) || O || Z) && pt(() => {
      H && Ft(H, b, h), O && yr(h, null, b, "unmounted"), Z && (h.el = null);
    }, _);
  }, Ye = (h) => {
    const { type: b, el: _, anchor: R, transition: E } = h;
    if (b === ie) {
      pe(_, R);
      return;
    }
    if (b === _i) {
      V(h);
      return;
    }
    const A = () => {
      i(_), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (h.shapeFlag & 1 && E && !E.persisted) {
      const { leave: I, delayLeave: D } = E, L = () => I(_, A);
      D ? D(h.el, A, L) : L();
    } else
      A();
  }, pe = (h, b) => {
    let _;
    for (; h !== b; )
      _ = P(h), i(h), h = _;
    i(b);
  }, At = (h, b, _) => {
    const { bum: R, scope: E, job: A, subTree: I, um: D, m: L, a: w } = h;
    Ia(L), Ia(w), R && In(R), E.stop(), A && (A.flags |= 8, qe(I, h, b, _)), D && pt(D, b), pt(() => {
      h.isUnmounted = !0;
    }, b);
  }, Be = (h, b, _, R = !1, E = !1, A = 0) => {
    for (let I = A; I < h.length; I++)
      qe(h[I], b, _, R, E);
  }, ct = (h) => {
    if (h.shapeFlag & 6)
      return ct(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = P(h.anchor || h.el), _ = b && b[Ul];
    return _ ? P(_) : b;
  };
  let vt = !1;
  const St = (h, b, _) => {
    let R;
    h == null ? b._vnode && (qe(b._vnode, null, null, !0), R = b._vnode.component) : z(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = h, vt || (vt = !0, Ca(R), qs(), vt = !1);
  }, tt = {
    p: z,
    um: qe,
    m: we,
    r: Ye,
    mt: _t,
    mc: je,
    pc: ce,
    pbc: Me,
    n: ct,
    o: e
  };
  return {
    render: St,
    hydrate: void 0,
    createApp: rc(St)
  };
}
function gi({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function gr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ho(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (Q(n) && Q(i))
    for (let a = 0; a < n.length; a++) {
      const s = n[a];
      let c = i[a];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[a] = Xt(i[a]), c.el = s.el), !r && c.patchFlag !== -2 && ho(s, c)), c.type === ni && (c.patchFlag === -1 && (c = i[a] = Xt(c)), c.el = s.el), c.type === nr && !c.el && (c.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, a, s, c;
  const p = e.length;
  for (n = 0; n < p; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (a = 0, s = r.length - 1; a < s; )
        c = a + s >> 1, e[r[c]] < v ? a = c + 1 : s = c;
      v < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, s = r[a - 1]; a-- > 0; )
    r[a] = s, s = t[s];
  return r;
}
function mo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mo(t);
}
function Ia(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function bo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? bo(t.subTree) : null;
}
const yo = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Ol(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), ni = /* @__PURE__ */ Symbol.for("v-txt"), nr = /* @__PURE__ */ Symbol.for("v-cmt"), _i = /* @__PURE__ */ Symbol.for("v-stc"), xr = [];
let gt = null;
function T(e = !1) {
  xr.push(gt = e ? null : []);
}
function go() {
  xr.pop(), gt = xr[xr.length - 1] || null;
}
let fn = 1;
function La(e, t = !1) {
  fn += e, e < 0 && gt && t && (gt.hasOnce = !0);
}
function _o(e) {
  return e.dynamicChildren = fn > 0 ? gt || Lr : null, go(), fn > 0 && gt && gt.push(e), e;
}
function C(e, t, r, n, i, a) {
  return _o(
    l(
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
function Sc(e, t, r, n, i) {
  return _o(
    Qt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Gr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const So = ({ key: e }) => e ?? null, Un = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ Ze(e) || le(e) ? { i: wt, r: e, k: t, f: !!r } : e : null);
function l(e, t = null, r = null, n = 0, i = null, a = e === ie ? 0 : 1, s = !1, c = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && So(t),
    ref: t && Un(t),
    scopeId: zs,
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
    ctx: wt
  };
  return c ? (qn(p, r), a & 128 && e.normalize(p)) : r && (p.shapeFlag |= Ue(r) ? 8 : 16), fn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && gt.push(p), p;
}
const Qt = Ec;
function Ec(e, t = null, r = null, n = 0, i = null, a = !1) {
  if ((!e || e === Gl) && (e = nr), vo(e)) {
    const c = jr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && qn(c, r), fn > 0 && !a && gt && (c.shapeFlag & 6 ? gt[gt.indexOf(e)] = c : gt.push(c)), c.patchFlag = -2, c;
  }
  if (Mc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: c, style: p } = t;
    c && !Ue(c) && (t.class = Ur(c)), Ce(p) && (/* @__PURE__ */ ta(p) && !Q(p) && (p = Qe({}, p)), t.style = Gi(p));
  }
  const s = Ue(e) ? 1 : yo(e) ? 128 : ei(e) ? 64 : Ce(e) ? 4 : le(e) ? 2 : 0;
  return l(
    e,
    t,
    r,
    n,
    i,
    s,
    a,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ ta(e) || oo(e) ? Qe({}, e) : e : null;
}
function jr(e, t, r = !1, n = !1) {
  const { props: i, ref: a, patchFlag: s, children: c, transition: p } = e, v = t ? Cc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && So(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? Q(a) ? a.concat(Un(t)) : [a, Un(t)] : Un(t)
    ) : a,
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
    patchFlag: t && e.type !== ie ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && jr(e.ssContent),
    ssFallback: e.ssFallback && jr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && n && na(
    y,
    p.clone(y)
  ), y;
}
function _e(e = " ", t = 0) {
  return Qt(ni, null, e, t);
}
function ue(e = "", t = !1) {
  return t ? (T(), Sc(nr, null, e)) : Qt(nr, null, e);
}
function jt(e) {
  return e == null || typeof e == "boolean" ? Qt(nr) : Q(e) ? Qt(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vo(e) ? Xt(e) : Qt(ni, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jr(e);
}
function qn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), qn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !oo(t) ? t._ctx = wt : i === 3 && wt && (wt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (n & 65) {
      qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: wt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [_e(t)]) : r = 8;
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
        t.style = Gi([t.style, n.style]);
      else if (Kn(i)) {
        const a = t[i], s = n[i];
        s && a !== s && !(Q(a) && a.includes(s)) ? t[i] = a ? [].concat(a, s) : s : s == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Gn(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Ft(e, t, r, n = null) {
  Pt(e, t, 7, [
    r,
    n
  ]);
}
const wc = ro();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || wc, a = {
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
    scope: new Qo(
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
    propsOptions: co(n, i),
    emitsOptions: no(n, i),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ic.bind(null, a), e.ce && e.ce(a), a;
}
let ot = null;
const kc = () => ot || wt;
let Bn, pn;
{
  const e = Jn(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (a) => {
      i.length > 1 ? i.forEach((s) => s(a)) : i[0](a);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ot = r
  ), pn = t(
    "__VUE_SSR_SETTERS__",
    (r) => hn = r
  );
}
const yn = (e) => {
  const t = ot;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Ua = () => {
  ot && ot.scope.off(), Bn(null);
};
function Eo(e) {
  return e.vnode.shapeFlag & 4;
}
let hn = !1;
function Rc(e, t = !1, r = !1) {
  t && pn(t);
  const { props: n, children: i } = e.vnode, a = Eo(e);
  uc(e, n, a, t), hc(e, i, r || t);
  const s = a ? Oc(e, t) : void 0;
  return t && pn(!1), s;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    er();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, a = yn(e), s = bn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = ys(s);
    if (tr(), a(), (c || e.sp) && !on(e) && Ys(e), c) {
      if (s.then(Ua, Ua), t)
        return s.then((p) => {
          pn(!0);
          try {
            Da(e, p, t);
          } finally {
            pn(!1);
          }
        }).catch((p) => {
          Qn(p, e, 0);
        });
      e.asyncDep = s;
    } else
      Da(e, s);
  } else
    To(e);
}
function Da(e, t, r) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = Hs(t)), To(e);
}
function To(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || qt);
  {
    const i = yn(e);
    er();
    try {
      Xl(e);
    } finally {
      tr(), i();
    }
  }
}
const Nc = {
  get(e, t) {
    return Je(e, "get", ""), e[t];
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
function ii(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hs(_l(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ln)
        return ln[r](e);
    },
    has(t, r) {
      return r in t || r in ln;
    }
  })) : e.proxy;
}
function Mc(e) {
  return le(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ wl(e, t, hn), Ic = "3.5.42";
let Vi;
const Fa = typeof window < "u" && window.trustedTypes;
if (Fa)
  try {
    Vi = /* @__PURE__ */ Fa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Co = Vi ? (e) => Vi.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, Ha = Yt && /* @__PURE__ */ Yt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Yt.createElementNS(Lc, e) : t === "mathml" ? Yt.createElementNS(Uc, e) : r ? Yt.createElement(e, { is: r }) : Yt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Yt.createTextNode(e),
  createComment: (e) => Yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, a) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      Ha.innerHTML = Co(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Ha.content;
      if (n === "svg" || n === "mathml") {
        const p = c.firstChild;
        for (; p.firstChild; )
          c.appendChild(p.firstChild);
        c.removeChild(p);
      }
      t.insertBefore(c, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const $a = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, i = Ue(r);
  let a = !1;
  if (r && !i) {
    if (t)
      if (Ue(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          r[c] == null && en(n, c, "");
        }
      else
        for (const s in t)
          r[s] == null && en(n, s, "");
    for (const s in r) {
      s === "display" && (a = !0);
      const c = r[s];
      c != null ? zc(
        e,
        s,
        !Ue(t) && t ? t[s] : void 0,
        c
      ) || en(n, s, c) : en(n, s, "");
    }
  } else if (i) {
    if (t !== r) {
      const s = n[jc];
      s && (r += ";" + s), n.cssText = r, a = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  $a in e && (e[$a] = a ? n.display : "", e[$c] && (n.display = "none"));
}
const On = /\s*!important$/;
function en(e, t, r) {
  if (Q(r))
    r.forEach((n) => en(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    On.test(r) ? e.setProperty(t, r.replace(On, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    On.test(r) ? e.setProperty(
      kr(n),
      r.replace(On, ""),
      "important"
    ) : e[n] = r;
  }
}
const ja = ["Webkit", "Moz", "ms"], vi = {};
function Bc(e, t) {
  const r = vi[t];
  if (r)
    return r;
  let n = Rt(t);
  if (n !== "filter" && n in e)
    return vi[t] = n;
  n = vs(n);
  for (let i = 0; i < ja.length; i++) {
    const a = ja[i] + n;
    if (a in e)
      return vi[t] = a;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Va = "http://www.w3.org/1999/xlink";
function qa(e, t, r, n, i, a = Xo(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Va, t.slice(6, t.length)) : e.setAttributeNS(Va, t, r) : r == null || a && !Es(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Bt(r) ? String(r) : r
  );
}
function Ba(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Co(r) : r);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const c = a === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (c !== p || !("_value" in e)) && (e.value = p), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const c = typeof e[t];
    c === "boolean" ? r = Es(r) : r == null && c === "string" ? (r = "", s = !0) : c === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Er(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const za = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const a = e[za] || (e[za] = {}), s = a[t];
  if (n && s)
    s.value = n;
  else {
    const [c, p] = Xc(t);
    if (n) {
      const v = a[t] = Qc(
        n,
        i
      );
      Er(e, c, v, p);
    } else s && (Wc(e, c, s, p), a[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : kr(e.slice(2)), t];
}
let Si = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => Si || (Jc.then(() => Si = 0), Si = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (Q(i)) {
      const a = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        a.call(n), n._stopped = !0;
      };
      const s = i.slice(), c = [n];
      for (let p = 0; p < s.length && !n._stopped; p++) {
        const v = s[p];
        v && Pt(
          v,
          t,
          5,
          c
        );
      }
    } else
      Pt(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Wa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, a) => {
  const s = i === "svg";
  t === "class" ? Hc(e, n, s) : t === "style" ? qc(e, r, n) : Kn(t) ? Gn(t) || Kc(e, t, r, n, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, s)) ? (Ba(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qa(e, t, n, s, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? Ba(e, Rt(t), n, a, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), qa(e, t, n, s));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wa(t) && le(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wa(t) && Ue(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Rt(t);
  return Array.isArray(r) ? r.some((i) => Rt(i) === n) : Object.keys(r).some((i) => Rt(i) === n);
}
const zn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (r) => In(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Ka(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tr = /* @__PURE__ */ Symbol("_assign"), Nn = /* @__PURE__ */ Symbol("_initialValue");
function Ei(e, t, r) {
  return t && (e = e.trim()), r && (e = Xn(e)), e;
}
const Ti = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[Nn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Nn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Tr] = zn(i);
    const a = n || i.props && i.props.type === "number";
    Er(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Tr](Ei(e.value, r, a));
    }), (r || a) && Er(e, "change", () => {
      e.value = Ei(e.value, r, a);
    }), t || (Er(e, "compositionstart", nu), Er(e, "compositionend", Ka), Er(e, "change", Ka));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", a = e[Nn];
    delete e[Nn], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Tr](Ei(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: a } }, s) {
    if (e[Tr] = zn(s), e.composing) return;
    const c = (a || e.type === "number") && !/^0\d/.test(e.value) ? Xn(e.value) : e.value, p = t ?? "";
    if (c === p)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === p) || (e.value = p);
  }
}, it = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Er(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (p) => p.selected).map(
        (p) => r ? Xn(Wn(p)) : Wn(p)
      ), a = e.multiple, s = a ? Ar(e._modelValue) ? new Set(i) : i : i[0], c = e._pendingValue = [
        a,
        a ? Q(s) ? i.slice() : i : s
      ];
      try {
        e[Tr](s);
      } finally {
        js(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Tr] = zn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ga(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Tr] = zn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && Ga(e, t);
  }
};
function iu(e, t, r) {
  if (!r || Q(e)) return hr(e, t);
  if (Ar(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Ga(e, t) {
  const r = e.multiple, n = Q(t);
  if (!(r && !n && !Ar(t))) {
    for (let i = 0, a = e.options.length; i < a; i++) {
      const s = e.options[i], c = Wn(s);
      if (r)
        if (n) {
          const p = typeof c;
          p === "string" || p === "number" ? s.selected = t.some((v) => String(v) === String(c)) : s.selected = Zo(t, c) > -1;
        } else
          s.selected = t.has(c);
      else if (hr(Wn(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Wn(e) {
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
}, Pn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const c = su[t[s]];
      if (c && c(i, t)) return;
    }
    return e(i, ...a);
  }));
}, ou = /* @__PURE__ */ Qe({ patchProp: eu }, Dc);
let Ya;
function lu() {
  return Ya || (Ya = bc(ou));
}
const cu = ((...e) => {
  const t = lu().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = du(n);
    if (!i) return;
    const a = t._component;
    !le(a) && !a.render && !a.template && (a.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
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
    const a = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, a), a;
  } catch (a) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: a }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: a });
  }
}
function Xa(e, t) {
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
    var n, i, a, s, c = [], p = !0, v = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(p = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); p = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!p && r.return != null && (s = r.return(), Object(s) !== s)) return;
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
    if (typeof e == "string") return Xa(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xa(e, t) : void 0;
  }
}
const wo = Object.entries, Ja = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let $e = Object.freeze, We = Object.seal, Ir = Object.create, xo = typeof Reflect < "u" && Reflect, qi = xo.apply, Bi = xo.construct;
$e || ($e = function(t) {
  return t;
});
We || (We = function(t) {
  return t;
});
qi || (qi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  return t.apply(r, i);
});
Bi || (Bi = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Sr = He(Array.prototype.forEach), Su = He(Array.prototype.lastIndexOf), Za = He(Array.prototype.pop), Yr = He(Array.prototype.push), Eu = He(Array.prototype.splice), Hr = Array.isArray, tn = He(String.prototype.toLowerCase), Ci = He(String.prototype.toString), Qa = He(String.prototype.match), Xr = He(String.prototype.replace), es = He(String.prototype.indexOf), Tu = He(String.prototype.trim), Cu = He(Number.prototype.toString), wu = He(Boolean.prototype.toString), ts = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), rs = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), ht = He(Object.prototype.hasOwnProperty), Jr = He(Object.prototype.toString), Xe = He(RegExp.prototype.test), _r = xu(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return qi(e, t, n);
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
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : tn;
  if (Ja && Ja(e, null), !Hr(t))
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
    ht(e, t) || (e[t] = null);
  return e;
}
function yt(e) {
  const t = Ir(null);
  for (const n of wo(e)) {
    var r = bu(n, 2);
    const i = r[0], a = r[1];
    ht(e, i) && (Hr(a) ? t[i] = Au(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = yt(a) : t[i] = a);
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
      return wu(e);
    case "bigint":
      return ts ? ts(e) : "0";
    case "symbol":
      return rs ? rs(e) : "Symbol()";
    case "undefined":
      return Jr(e);
    case "function":
    case "object": {
      if (e === null)
        return Jr(e);
      const t = e, r = kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Jr(n);
      }
      return Jr(e);
    }
    default:
      return Jr(e);
  }
}
function kt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
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
    return Xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const ns = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wi = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xi = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ai = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), is = $e(["#text"]), as = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ki = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ss = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Mn = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = We(/{{[\w\W]*|^[\w\W]*}}/g), Mu = We(/<%[\w\W]*|^[\w\W]*%>/g), Iu = We(/\${[\w\W]*/g), Lu = We(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = We(/^aria-[\-\w]+$/), os = We(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = We(/^(?:\w+script|data):/i), Fu = We(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = We(/^html$/i), $u = We(/^[a-z][.\w]*(-[.\w]+)+$/i), ls = We(/<[/\w!]/g), cs = We(/<[/\w]/g), ju = We(/<\/no(script|embed|frames)/i), Vu = We(/\/>/i), bt = {
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
}, Ao = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = $e(he({}, Ao)), Bu = (function() {
  const e = {};
  return Sr(Ao, (t) => {
    e[t] = We(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $e(e);
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
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, us = function() {
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
}, ur = function(t, r, n, i) {
  return ht(t, r) && Hr(t[r]) ? he(i.base ? yt(i.base) : {}, t[r], i.transform) : n;
}, Ri = function(t, r, n) {
  const i = ht(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? yt(i) : n();
};
function ko() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => ko(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== bt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, c = e.Element, p = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, S = e.trustedTypes, P = c.prototype, j = kt(P, "cloneNode"), re = kt(P, "remove"), z = kt(P, "nextSibling"), oe = kt(P, "childNodes"), ne = kt(P, "parentNode"), B = kt(P, "shadowRoot"), U = kt(P, "attributes"), V = s && s.prototype ? kt(s.prototype, "nodeType") : null, se = s && s.prototype ? kt(s.prototype, "nodeName") : null, Pe = s && s.prototype ? kt(s.prototype, "ownerDocument") : null, Oe = function(u) {
    return V ? V(u) : u.nodeType;
  }, je = function(u) {
    return se ? se(u) : u.nodeName;
  };
  if (typeof a == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Me = "", et, lt = !1, Ke = 0;
  const _t = function() {
    if (Ke > 0)
      throw _r('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(u) {
    _t(), Ke++;
    try {
      return Ee.createHTML(u);
    } finally {
      Ke--;
    }
  }, Ie = function(u) {
    _t(), Ke++;
    try {
      return Ee.createScriptURL(u);
    } finally {
      Ke--;
    }
  }, me = function() {
    return lt || (et = Wu(S, i), lt = !0), et;
  }, ce = r, Ve = ce.implementation, be = ce.createNodeIterator, we = ce.createDocumentFragment, qe = ce.getElementsByTagName, Ye = n.importNode;
  let pe = us();
  t.isSupported = typeof wo == "function" && typeof ne == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const At = Pu, Be = Mu, ct = Iu, vt = Lu, St = Uu, tt = Du, ut = Fu, h = $u;
  let b = os, _ = null;
  const R = he({}, [...ns, ...wi, ...xi, ...Ai, ...is]);
  let E = null;
  const A = he({}, [...as, ...ki, ...ss, ...Mn]);
  let I = Object.seal(Ir(null, {
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
  })), D = null, L = null;
  const w = Object.seal(Ir(null, {
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
  let G = !0, $ = !0, W = !1, J = !0, ee = !1, O = !0, N = !1, H = !1, Z = null, ae = null, ye = !1, fe = !1, Le = !1, Re = !1, Te = !0, rt = !1;
  const Mt = "user-content-";
  let It = !0, mr = !1, Et = {}, mt = null;
  const ar = he({}, [
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
  let Lt = null;
  const sr = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let Tt = null;
  const or = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ut = "http://www.w3.org/1998/Math/MathML", zt = "http://www.w3.org/2000/svg", Fe = "http://www.w3.org/1999/xhtml";
  let Wt = Fe, Vr = !1, qr = null;
  const ai = he({}, [Ut, zt, Fe], Ci), gn = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let Br = he({}, gn);
  const _n = $e(["annotation-xml"]);
  let zr = he({}, _n);
  const vn = he({}, ["title", "style", "font", "a", "script"]);
  let lr = null;
  const M = ["application/xhtml+xml", "text/html"], x = "text/html";
  let f = null, de = null;
  const Ct = r.createElement("form"), Kt = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, si = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (de && de === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = yt(u), lr = // eslint-disable-next-line unicorn/prefer-includes
    M.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? x : u.PARSER_MEDIA_TYPE, f = lr === "application/xhtml+xml" ? Ci : tn, _ = ur(u, "ALLOWED_TAGS", R, {
      transform: f
    }), E = ur(u, "ALLOWED_ATTR", A, {
      transform: f
    }), qr = ur(u, "ALLOWED_NAMESPACES", ai, {
      transform: Ci
    }), Tt = ur(u, "ADD_URI_SAFE_ATTR", or, {
      transform: f,
      base: or
    }), Lt = ur(u, "ADD_DATA_URI_TAGS", sr, {
      transform: f,
      base: sr
    }), mt = ur(u, "FORBID_CONTENTS", ar, {
      transform: f
    }), D = ur(u, "FORBID_TAGS", yt({}), {
      transform: f
    }), L = ur(u, "FORBID_ATTR", yt({}), {
      transform: f
    }), Et = ht(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? yt(u.USE_PROFILES) : u.USE_PROFILES : !1, G = u.ALLOW_ARIA_ATTR !== !1, $ = u.ALLOW_DATA_ATTR !== !1, W = u.ALLOW_UNKNOWN_PROTOCOLS || !1, J = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = u.SAFE_FOR_TEMPLATES || !1, O = u.SAFE_FOR_XML !== !1, N = u.WHOLE_DOCUMENT || !1, fe = u.RETURN_DOM || !1, Le = u.RETURN_DOM_FRAGMENT || !1, Re = u.RETURN_TRUSTED_TYPE || !1, ye = u.FORCE_BODY || !1, Te = u.SANITIZE_DOM !== !1, rt = u.SANITIZE_NAMED_PROPS || !1, It = u.KEEP_CONTENT !== !1, mr = u.IN_PLACE || !1, b = Ru(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : os, Wt = typeof u.NAMESPACE == "string" ? u.NAMESPACE : Fe, Br = Ri(
      u,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => he({}, gn)
      // Default built-in map
    ), zr = Ri(
      u,
      "HTML_INTEGRATION_POINTS",
      () => he({}, _n)
      // Default built-in map
    );
    const g = Ri(u, "CUSTOM_ELEMENT_HANDLING", () => Ir(null));
    if (I = Ir(null), ht(g, "tagNameCheck") && Kt(g.tagNameCheck) && (I.tagNameCheck = g.tagNameCheck), ht(g, "attributeNameCheck") && Kt(g.attributeNameCheck) && (I.attributeNameCheck = g.attributeNameCheck), ht(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), We(I), ee && ($ = !1), Le && (fe = !0), Et && (_ = he({}, is), E = Ir(null), Et.html === !0 && (he(_, ns), he(E, as)), Et.svg === !0 && (he(_, wi), he(E, ki), he(E, Mn)), Et.svgFilters === !0 && (he(_, xi), he(E, ki), he(E, Mn)), Et.mathMl === !0 && (he(_, Ai), he(E, ss), he(E, Mn))), w.tagCheck = null, w.attributeCheck = null, ht(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? w.tagCheck = u.ADD_TAGS : Hr(u.ADD_TAGS) && (_ === R && (_ = yt(_)), he(_, u.ADD_TAGS, f))), ht(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? w.attributeCheck = u.ADD_ATTR : Hr(u.ADD_ATTR) && (E === A && (E = yt(E)), he(E, u.ADD_ATTR, f))), ht(u, "ADD_FORBID_CONTENTS") && Hr(u.ADD_FORBID_CONTENTS) && (mt === ar && (mt = yt(mt)), he(mt, u.ADD_FORBID_CONTENTS, f)), It && (_["#text"] = !0), N && he(_, ["html", "head", "body"]), _.table && (he(_, ["tbody"]), delete D.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw _r('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw _r('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const k = Ee;
      Ee = u.TRUSTED_TYPES_POLICY;
      try {
        Me = De("");
      } catch (q) {
        throw Ee = k, q;
      }
    } else u.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Me = "") : (Ee === void 0 && (Ee = me()), Ee && typeof Me == "string" && (Me = De("")));
    $e && $e(u), de = u;
  }, oa = he({}, [...wi, ...xi, ...Ou]), la = he({}, [...Ai, ...Nu]), Oo = function(u, g, k) {
    return g.namespaceURI === Fe ? u === "svg" : g.namespaceURI === Ut ? u === "svg" && (k === "annotation-xml" || Br[k]) : !!oa[u];
  }, No = function(u, g, k) {
    return g.namespaceURI === Fe ? u === "math" : g.namespaceURI === zt ? u === "math" && zr[k] : !!la[u];
  }, Po = function(u, g, k) {
    return g.namespaceURI === zt && !zr[k] || g.namespaceURI === Ut && !Br[k] ? !1 : !la[u] && (vn[u] || !oa[u]);
  }, Mo = function(u) {
    let g = ne(u);
    (!g || !g.tagName) && (g = {
      namespaceURI: Wt,
      tagName: "template"
    });
    const k = tn(u.tagName), q = tn(g.tagName);
    return qr[u.namespaceURI] ? u.namespaceURI === zt ? Oo(k, g, q) : u.namespaceURI === Ut ? No(k, g, q) : u.namespaceURI === Fe ? Po(k, g, q) : !!(lr === "application/xhtml+xml" && qr[u.namespaceURI]) : !1;
  }, cr = function(u) {
    Yr(t.removed, {
      element: u
    });
    try {
      ne(u).removeChild(u);
    } catch {
      if (re(u), !ne(u))
        throw _r("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ca = function(u, g, k) {
    try {
      u.removeAttributeNode(g);
    } catch {
      try {
        u.removeAttribute(k);
      } catch {
      }
    }
  }, Sn = function(u) {
    En(u);
    const g = oe(u);
    if (g) {
      const q = [];
      Sr(g, (X) => {
        Yr(q, X);
      }), Sr(q, (X) => {
        try {
          re(X);
        } catch {
        }
      });
    }
    const k = U(u);
    if (k)
      for (let q = k.length - 1; q >= 0; --q) {
        const X = k[q], te = X && X.name;
        typeof te == "string" && ca(u, X, te);
      }
  }, br = function(u, g, k) {
    if (!k)
      try {
        k = g.getAttributeNode(u);
      } catch {
        k = null;
      }
    Yr(t.removed, {
      attribute: k || null,
      from: g
    });
    try {
      k ? g.removeAttributeNode(k) : g.removeAttribute(u);
    } catch {
      try {
        g.removeAttribute(u);
      } catch {
      }
    }
    if (u === "is")
      if (fe || Le)
        try {
          cr(g);
        } catch {
        }
      else
        try {
          g.setAttribute(u, "");
        } catch {
        }
  }, Io = function(u) {
    const g = U(u);
    if (g)
      for (let k = g.length - 1; k >= 0; --k) {
        const q = g[k], X = q && q.name;
        typeof X != "string" || E[f(X)] || ca(u, q, X);
      }
  }, En = function(u) {
    const g = [u];
    for (; g.length > 0; ) {
      const k = g.pop();
      Oe(k) === bt.element && Io(k);
      const X = oe(k);
      if (X)
        for (let te = X.length - 1; te >= 0; --te)
          g.push(X[te]);
    }
  }, ua = function(u, g) {
    return O ? u === "patchsrc" ? !0 : u === "for" && g !== "label" && g !== "output" : !1;
  }, Lo = function(u) {
    if (!O)
      return;
    const g = [u];
    for (; g.length > 0; ) {
      const k = g.pop(), q = Oe(k);
      if (q === bt.processingInstruction || q === bt.comment && Xe(cs, k.data)) {
        try {
          re(k);
        } catch {
        }
        continue;
      }
      if (q === bt.element) {
        const te = k, Ae = f(je(k));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && ua("for", Ae) && te.removeAttribute("for");
        } catch {
        }
      }
      const X = oe(k);
      if (X)
        for (let te = X.length - 1; te >= 0; --te)
          g.push(X[te]);
    }
  }, da = function(u) {
    let g = null, k = null;
    if (ye)
      u = "<remove></remove>" + u;
    else {
      const te = Qa(u, /^[\r\n\t ]+/);
      k = te && te[0];
    }
    lr === "application/xhtml+xml" && Wt === Fe && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const q = Ee ? De(u) : u;
    if (Wt === Fe)
      try {
        g = new y().parseFromString(q, lr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ve.createDocument(Wt, "template", null);
      try {
        g.documentElement.innerHTML = Vr ? Me : q;
      } catch {
      }
    }
    const X = g.body || g.documentElement;
    return u && k && X.insertBefore(r.createTextNode(k), X.childNodes[0] || null), Wt === Fe ? qe.call(g, N ? "html" : "body")[0] : N ? g.documentElement : X;
  }, fa = function(u) {
    const g = Pe ? Pe(u) : u.ownerDocument;
    return be.call(
      g || u,
      u,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Tn = function(u) {
    return u = Xr(u, At, " "), u = Xr(u, Be, " "), u = Xr(u, ct, " "), u;
  }, oi = function(u) {
    var g;
    u.normalize();
    const k = Pe ? Pe(u) : u.ownerDocument, q = be.call(
      k || u,
      u,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = q.nextNode();
    for (; X; )
      X.data = Tn(X.data), X = q.nextNode();
    const te = (g = u.querySelectorAll) === null || g === void 0 ? void 0 : g.call(u, "template");
    te && Sr(te, (Ae) => {
      Rr(Ae.content) && oi(Ae.content);
    });
  }, Cn = function(u) {
    const g = se ? se(u) : null;
    return typeof g != "string" || f(g) !== "form" ? !1 : typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    u.childNodes !== oe(u);
  }, Rr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return V(u) === bt.documentFragment;
    } catch {
      return !1;
    }
  }, Wr = function(u) {
    if (!V || typeof u != "object" || u === null)
      return !1;
    try {
      return typeof V(u) == "number";
    } catch {
      return !1;
    }
  };
  function Dt(F, u, g) {
    F.length !== 0 && Sr(F, (k) => {
      k.call(t, u, g, de);
    });
  }
  const Uo = function(u, g) {
    return !!(O && u.hasChildNodes() && !Wr(u.firstElementChild) && Xe(ls, u.textContent) && Xe(ls, u.innerHTML) || O && u.namespaceURI === Fe && qu[g] && (Wr(u.firstElementChild) || typeof u.textContent == "string" && Xe(Bu[g], u.textContent)) || u.nodeType === bt.processingInstruction || O && u.nodeType === bt.comment && Xe(cs, u.data));
  }, wn = function(u, g) {
    if (u instanceof RegExp)
      return Xe(u, g);
    if (u instanceof Function) {
      for (var k = arguments.length, q = new Array(k > 2 ? k - 2 : 0), X = 2; X < k; X++)
        q[X - 2] = arguments[X];
      return !!u(g, ...q);
    }
    return !1;
  }, Do = function(u, g, k) {
    if (!D[g] && ya(g) && wn(I.tagNameCheck, g))
      return !1;
    if (It && !mt[g]) {
      const q = ne(u), X = oe(u);
      if (X && q) {
        const te = X.length;
        for (let Ae = te - 1; Ae >= 0; --Ae) {
          const Ne = u === k ? j(X[Ae], !0) : X[Ae];
          q.insertBefore(Ne, z(u));
        }
      }
    }
    return cr(u), !0;
  }, pa = function(u, g, k, q) {
    return u.length === 0 ? g : g === k || g === q ? yt(g) : g;
  }, ha = function(u, g) {
    return u === g || ne(u) !== null ? !1 : (mr && En(u), !0);
  }, ma = function(u, g) {
    if (Dt(pe.beforeSanitizeElements, u, null), ha(u, g))
      return !0;
    if (Cn(u))
      return cr(u), !0;
    const k = f(je(u));
    if (_ = pa(pe.uponSanitizeElement, _, R, Z), Dt(pe.uponSanitizeElement, u, {
      tagName: k,
      allowedTags: _
    }), ha(u, g))
      return !0;
    if (Uo(u, k))
      return cr(u), !0;
    if (D[k] || !(w.tagCheck instanceof Function && w.tagCheck(k)) && !_[k]) {
      const X = Do(u, k, g);
      return X === !1 && Dt(pe.afterSanitizeElements, u, null), X;
    }
    if (Oe(u) === bt.element && !Mo(u) || (k === "noscript" || k === "noembed" || k === "noframes") && Xe(ju, u.innerHTML))
      return cr(u), !0;
    if (ee && u.nodeType === bt.text) {
      const X = Tn(u.textContent);
      u.textContent !== X && (Yr(t.removed, {
        element: u.cloneNode()
      }), u.textContent = X);
    }
    return Dt(pe.afterSanitizeElements, u, null), !1;
  }, ba = function(u, g, k) {
    if (L[g] || ua(g, u) || Te && (g === "id" || g === "name") && (k in r || k in Ct))
      return !1;
    const q = E[g] || w.attributeCheck instanceof Function && w.attributeCheck(g, u);
    return $ && Xe(vt, g) || G && Xe(St, g) ? !0 : q ? Tt[g] || Xe(b, Xr(k, ut, "")) || (g === "src" || g === "xlink:href" || g === "href") && u !== "script" && es(k, "data:") === 0 && Lt[u] || W && !Xe(tt, Xr(k, ut, "")) ? !0 : !k : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ya(u) && wn(I.tagNameCheck, u) && wn(I.attributeNameCheck, g, u) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && I.allowCustomizedBuiltInElements && wn(I.tagNameCheck, k)
    );
  }, Fo = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ya = function(u) {
    return !Fo[tn(u)] && Xe(h, u);
  }, Ho = function(u, g, k, q) {
    if (Ee && typeof S == "object" && typeof S.getAttributeType == "function" && !k)
      switch (S.getAttributeType(u, g)) {
        case "TrustedHTML":
          return De(q);
        case "TrustedScriptURL":
          return Ie(q);
      }
    return q;
  }, $o = function(u, g, k, q) {
    try {
      k ? u.setAttributeNS(k, g, q) : u.setAttribute(g, q), Cn(u) ? cr(u) : Za(t.removed);
    } catch {
      br(g, u);
    }
  }, ga = function(u) {
    Dt(pe.beforeSanitizeAttributes, u, null);
    const g = u.attributes;
    if (!g || Cn(u))
      return;
    E = pa(pe.uponSanitizeAttribute, E, A, ae);
    const k = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let q = g.length;
    const X = f(u.nodeName);
    for (; q--; ) {
      const te = g[q], Ae = te.name, Ne = te.namespaceURI, dt = te.value, ft = f(Ae), ci = dt;
      let nt = Ae === "value" ? ci : Tu(ci);
      if (k.attrName = ft, k.attrValue = nt, k.keepAttr = !0, k.forceKeepAttr = void 0, Dt(pe.uponSanitizeAttribute, u, k), nt = k.attrValue, rt && (ft === "id" || ft === "name") && es(nt, Mt) !== 0 && (br(Ae, u, te), nt = Mt + nt), O && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, nt)) {
        br(Ae, u, te);
        continue;
      }
      if (ft === "attributename" && Qa(nt, "href")) {
        br(Ae, u, te);
        continue;
      }
      if (!k.forceKeepAttr) {
        if (!k.keepAttr) {
          br(Ae, u, te);
          continue;
        }
        if (!J && Xe(Vu, nt)) {
          br(Ae, u, te);
          continue;
        }
        if (ee && (nt = Tn(nt)), !ba(X, ft, nt)) {
          br(Ae, u, te);
          continue;
        }
        nt = Ho(X, ft, Ne, nt), nt !== ci && $o(u, Ae, Ne, nt);
      }
    }
    Dt(pe.afterSanitizeAttributes, u, null);
  }, xn = function(u) {
    let g = null;
    const k = fa(u);
    for (Dt(pe.beforeSanitizeShadowDOM, u, null); g = k.nextNode(); )
      if (Dt(pe.uponSanitizeShadowNode, g, null), ma(g, u), ga(g), Rr(g.content) && xn(g.content), Oe(g) === bt.element) {
        const q = B(g);
        Rr(q) && (li(q), xn(q));
      }
    Dt(pe.afterSanitizeShadowDOM, u, null);
  }, li = function(u) {
    const g = [{
      node: u,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const k = g.pop();
      if (k.shadow) {
        xn(k.shadow);
        continue;
      }
      const q = k.node, te = Oe(q) === bt.element, Ae = oe(q);
      if (Ae)
        for (let Ne = Ae.length - 1; Ne >= 0; --Ne)
          g.push({
            node: Ae[Ne],
            shadow: null
          });
      if (te) {
        const Ne = se ? se(q) : null;
        if (typeof Ne == "string" && f(Ne) === "template") {
          const dt = q.content;
          Rr(dt) && g.push({
            node: dt,
            shadow: null
          });
        }
      }
      if (te) {
        const Ne = B(q);
        Rr(Ne) && g.push({
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
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, k = null, q = null, X = null;
    if (Vr = !F, Vr && (F = "<!-->"), typeof F != "string" && !Wr(F) && (F = ku(F), typeof F != "string"))
      throw _r("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = Z, E = ae) : si(u), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (_ = yt(_)), pe.uponSanitizeAttribute.length > 0 && (E = yt(E)), t.removed = [];
    const te = mr && typeof F != "string" && Wr(F);
    if (te) {
      Lo(F);
      const dt = je(F);
      if (typeof dt == "string") {
        const ft = f(dt);
        if (!_[ft] || D[ft])
          throw Sn(F), _r("root node is forbidden and cannot be sanitized in-place");
      }
      if (Cn(F))
        throw Sn(F), _r("root node is clobbered and cannot be sanitized in-place");
      try {
        li(F);
      } catch (ft) {
        throw Sn(F), ft;
      }
    } else if (Wr(F))
      g = da("<!---->"), k = g.ownerDocument.importNode(F, !0), k.nodeType === bt.element && k.nodeName === "BODY" || k.nodeName === "HTML" ? g = k : g.appendChild(k), li(k);
    else {
      if (!fe && !ee && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && Re ? De(F) : F;
      if (g = da(F), !g)
        return fe ? null : Re ? Me : "";
    }
    g && ye && cr(g.firstChild);
    const Ae = te ? F : g;
    try {
      const dt = fa(Ae);
      for (; q = dt.nextNode(); )
        ma(q, Ae), ga(q), Rr(q.content) && xn(q.content);
    } catch (dt) {
      throw te && (Sn(F), Sr(t.removed, (ft) => {
        ft.element && En(ft.element);
      })), dt;
    }
    if (te)
      return Sr(t.removed, (dt) => {
        dt.element && En(dt.element);
      }), ee && oi(F), F;
    if (fe) {
      if (ee && oi(g), Le)
        for (X = we.call(g.ownerDocument); g.firstChild; )
          X.appendChild(g.firstChild);
      else
        X = g;
      return (E.shadowroot || E.shadowrootmode) && (X = Ye.call(n, X, !0)), X;
    }
    let Ne = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Xe(Hu, g.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ne), ee && (Ne = Tn(Ne)), Ee && Re ? De(Ne) : Ne;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    si(F), H = !0, Z = _, ae = E;
  }, t.clearConfig = function() {
    de = null, H = !1, Z = null, ae = null, Ee = et, Me = "";
  }, t.isValidAttribute = function(F, u, g) {
    de || si({});
    const k = f(F), q = f(u);
    return ba(k, q, g);
  }, t.addHook = function(F, u) {
    typeof u == "function" && ht(pe, F) && Yr(pe[F], u);
  }, t.removeHook = function(F, u) {
    if (ht(pe, F)) {
      if (u !== void 0) {
        const g = Su(pe[F], u);
        return g === -1 ? void 0 : Eu(pe[F], g, 1)[0];
      }
      return Za(pe[F]);
    }
  }, t.removeHooks = function(F) {
    ht(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = us();
  }, t;
}
var Ku = ko();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oi, ds;
function Yu() {
  if (ds) return Oi;
  ds = 1;
  var e = /["'&<>]/;
  Oi = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var a, s = "", c = 0, p = 0;
    for (c = i.index; c < n.length; c++) {
      switch (n.charCodeAt(c)) {
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
      p !== c && (s += n.substring(p, c)), p = c + 1, s += a;
    }
    return p !== c ? s + n.substring(p, c) : s;
  }
  return Oi;
}
var Xu = Yu();
const fs = /* @__PURE__ */ Gu(Xu);
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
function o(e, t, r, n, i) {
  const a = typeof r == "object" ? r : void 0, s = typeof n == "number" ? n : typeof r == "number" ? r : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, p = (z) => z, v = (c.sanitize ? Ku.sanitize : p) || p, y = c.escape ? fs : p, S = (z) => typeof z == "string" || typeof z == "number", P = (z, oe, ne) => z.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (B, U) => {
    if (oe === void 0 || !(U in oe))
      return y(B);
    const V = oe[U];
    return S(V) ? y(`${V}`) : typeof V == "object" && S(V.value) ? (V.escape !== !1 ? fs : p)(`${V.value}`) : y(B);
  });
  let re = (i?.bundle ?? Ju(e)).translations[t] || t;
  return re = Array.isArray(re) ? re[0] : re, v(typeof a == "object" || s !== void 0 ? P(
    re,
    a,
    s
  ) : re);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, id = ["aria-label"], ad = { class: "library-catalogue-actions-list" }, sd = ["href"], od = ["href"], ld = ["href"], cd = ["href"], ud = {
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
}, vd = ["disabled"], Sd = { class: "library-actions-health-links" }, Ed = ["href"], Td = ["href"], Cd = ["href"], wd = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, kd = { class: "library-import-health-number" }, Rd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Md = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Id = { class: "library-muted" }, Ld = ["href"], Ud = ["href"], Dd = ["action"], Fd = ["value"], Hd = {
  type: "submit",
  class: "button secondary"
}, $d = { class: "library-muted" }, jd = ["href"], Vd = ["action"], qd = ["value"], Bd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, Kd = { class: "library-useful-views-copy" }, Gd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-useful-views-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-muted" }, Zd = ["aria-label"], Qd = ["href", "title"], ef = { class: "library-useful-view-count" }, tf = {
  class: "library-weak-metadata-dashboard",
  "aria-labelledby": "library-weak-metadata-heading"
}, rf = { class: "library-weak-metadata-dashboard-copy" }, nf = { class: "library-muted library-catalogue-eyebrow" }, af = { id: "library-weak-metadata-heading" }, sf = { class: "library-muted" }, of = ["aria-label"], lf = ["href", "title"], cf = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, uf = { class: "library-saved-collections-copy" }, df = { class: "library-muted library-catalogue-eyebrow" }, ff = { id: "library-saved-collections-heading" }, pf = { class: "library-muted" }, hf = ["action"], mf = ["value"], bf = ["value"], yf = ["placeholder", "disabled"], gf = ["disabled"], _f = {
  key: 0,
  class: "library-muted"
}, vf = ["aria-label"], Sf = ["href"], Ef = ["action"], Tf = ["value"], Cf = {
  type: "submit",
  class: "button tertiary"
}, wf = ["aria-label"], xf = ["name", "value"], Af = { class: "library-quick-search-row" }, kf = { class: "library-quick-filter-search" }, Rf = ["aria-label"], Of = { class: "library-quick-filter-options" }, Nf = { class: "library-quick-filter-option-grid" }, Pf = { value: "title" }, Mf = { value: "recent" }, If = { value: "publicationDate" }, Lf = { value: "publication" }, Uf = { value: "lastOpened" }, Df = { value: "format" }, Ff = { value: "" }, Hf = { value: "1" }, $f = ["value"], jf = ["value"], Vf = ["aria-label"], qf = ["aria-label"], Bf = { class: "library-filter-panel" }, zf = { class: "library-filter-panel-summary" }, Wf = ["aria-label"], Kf = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, Gf = { value: "" }, Yf = ["value"], Xf = { value: "" }, Jf = ["value"], Zf = { value: "" }, Qf = ["value"], ep = { value: "" }, tp = ["value"], rp = { value: "" }, np = ["value"], ip = { value: "" }, ap = ["value"], sp = { value: "" }, op = ["value"], lp = { value: "" }, cp = ["value"], up = { value: "" }, dp = ["value"], fp = { value: "" }, pp = ["value"], hp = { value: "" }, mp = { value: "1" }, bp = { value: "" }, yp = { value: "1" }, gp = { value: "title" }, _p = { value: "recent" }, vp = { value: "publicationDate" }, Sp = { value: "publication" }, Ep = { value: "lastOpened" }, Tp = { value: "format" }, Cp = ["value"], wp = ["value"], xp = ["aria-label"], Ap = ["aria-label"], kp = ["href"], Rp = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Op = { class: "library-muted library-catalogue-eyebrow" }, Np = { id: "library-discovery-heading" }, Pp = { class: "library-muted" }, Mp = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Ip = { key: 0 }, Lp = { key: 1 }, Up = { key: 2 }, Dp = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Fp = { key: 0 }, Hp = { key: 1 }, $p = {
  href: "/apps/library/",
  class: "button secondary"
}, jp = { class: "library-catalogue-status-row" }, Vp = { class: "library-muted library-filter-result-summary" }, qp = { key: 0 }, Bp = { href: "?" }, zp = ["aria-label"], Wp = { class: "library-pagination-range" }, Kp = { key: 0 }, Gp = ["href"], Yp = {
  key: 1,
  class: "library-muted"
}, Xp = ["href"], Jp = {
  key: 3,
  class: "library-muted"
}, Zp = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Qp = ["aria-label"], eh = { class: "library-settings-count-badge" }, th = ["action"], rh = ["value"], nh = ["name", "value"], ih = ["placeholder"], ah = {
  type: "submit",
  class: "button primary"
}, sh = { class: "library-muted" }, oh = ["action"], lh = ["value"], ch = ["name", "value"], uh = ["placeholder"], dh = {
  type: "submit",
  class: "button secondary"
}, fh = { class: "library-muted" }, ph = ["action"], hh = ["value"], mh = ["name", "value"], bh = {
  type: "submit",
  class: "button secondary"
}, yh = { class: "library-muted" }, gh = ["action"], _h = ["value"], vh = ["name", "value"], Sh = { name: "bulkEditField" }, Eh = { value: "publicationType" }, Th = { value: "subtitle" }, Ch = { value: "creators" }, wh = { value: "publication" }, xh = { value: "publicationDate" }, Ah = { value: "language" }, kh = { value: "publisher" }, Rh = { value: "genres" }, Oh = { value: "classifications" }, Nh = {
  type: "submit",
  class: "button secondary"
}, Ph = { class: "library-muted" }, Mh = ["action"], Ih = ["value"], Lh = ["name", "value"], Uh = {
  type: "submit",
  class: "button secondary"
}, Dh = { class: "library-muted" }, Fh = { class: "library-discovery-shortcuts" }, Hh = { class: "library-discovery-shortcut-grid" }, $h = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, jh = { id: "library-periodical-groups-heading" }, Vh = { class: "library-muted" }, qh = ["href"], Bh = { class: "library-muted" }, zh = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Wh = { id: "library-periodical-groups-empty-heading" }, Kh = { class: "library-muted" }, Gh = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Yh = { id: "library-year-groups-heading" }, Xh = ["href"], Jh = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, Zh = { id: "library-creator-groups-heading" }, Qh = ["href"], em = ["aria-label"], tm = ["href", "aria-label"], rm = { class: "library-muted" }, nm = { class: "library-empty-actions" }, im = ["href"], am = { class: "library-muted" }, sm = { class: "library-muted" }, om = { class: "library-empty-actions" }, lm = ["href"], cm = { class: "library-muted" }, um = { class: "library-empty-actions" }, dm = ["href"], fm = {
  href: "?",
  class: "button primary"
}, pm = { class: "library-muted" }, hm = { class: "library-empty-actions" }, mm = ["href"], bm = {
  key: 4,
  class: "library-cover-gallery"
}, ym = ["href", "aria-label"], gm = ["src", "alt"], _m = ["action", "onSubmit"], vm = ["value"], Sm = ["value"], Em = ["aria-pressed", "title", "aria-label", "onClick"], Tm = { class: "library-cover-summary" }, Cm = { class: "library-cover-primary" }, wm = ["aria-label"], xm = ["href"], Am = ["onToggle"], km = ["aria-label"], Rm = { class: "library-cover-meta" }, Om = {
  key: 0,
  class: "library-creator"
}, Nm = { class: "library-cover-detail-list" }, Pm = { class: "library-cover-detail-chip" }, Mm = {
  key: 0,
  class: "library-cover-detail-chip"
}, Im = {
  key: 1,
  class: "library-cover-detail-chip"
}, Lm = {
  key: 2,
  class: "library-cover-detail-chip"
}, Um = {
  key: 3,
  class: "library-cover-detail-chip"
}, Dm = {
  key: 4,
  class: "library-cover-detail-chip"
}, Fm = {
  key: 5,
  class: "library-cover-detail-chip"
}, Hm = {
  key: 6,
  class: "library-cover-detail-chip"
}, $m = {
  key: 1,
  class: "library-muted library-cover-description"
}, jm = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Vm = { key: 0 }, qm = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Bm = {
  key: 0,
  class: "library-muted"
}, zm = { class: "library-cover-actions" }, Wm = ["href"], Km = ["href"], Gm = ["href"], Ym = ["aria-label"], Xm = { class: "library-pagination-range" }, Jm = { key: 0 }, Zm = ["href"], Qm = {
  key: 1,
  class: "library-muted"
}, eb = ["href"], tb = {
  key: 3,
  class: "library-muted"
}, rb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ fr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), a = /* @__PURE__ */ fr((i.items || []).map((M) => ({ ...M }))), s = K(() => a), c = K(() => i.shelves || []), p = K(() => i.formats || []), v = K(() => i.publications || []), y = K(() => i.publicationSummaries || []), S = K(() => i.publicationIssueContext || null), P = K(() => i.publicationYears || []), j = K(() => i.creators || []), re = K(() => i.scanStatuses || []), z = K(() => i.workflowStatuses || []), oe = K(() => i.genres || []), ne = K(() => i.classifications || []), B = K(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ fr({
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
      noDate: i.activeFilters?.noDate || "",
      titleFromFilename: i.activeFilters?.titleFromFilename || "",
      noDescription: i.activeFilters?.noDescription || "",
      unsupportedContainer: i.activeFilters?.unsupportedContainer || "",
      weakMetadata: i.activeFilters?.weakMetadata || "",
      unreviewedImports: i.activeFilters?.unreviewedImports || "",
      sort: i.activeFilters?.sort || "title"
    }), V = K(() => i.settingsUrl || ""), se = K(() => i.requestToken || ""), Pe = K(() => i.metadataExportUrl || ""), Oe = K(() => i.metadataSidecarManifestUrl || ""), je = K(() => i.metadataSidecarBundleUrl || ""), Ee = K(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Me = K(() => i.batchTagUrl || "/apps/library/bulk/tags"), et = K(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), lt = K(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = K(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), _t = K(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), De = K(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Ie = K(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), me = K(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ce = K(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Ve = K(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), be = /* @__PURE__ */ fr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), we = K(() => be.summary || {}), qe = K(() => {
      const M = Number(we.value.generatedAt || 0);
      return M > 0 ? new Date(M * 1e3).toLocaleString() : "";
    }), Ye = K(() => we.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), pe = K(() => we.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), At = K(() => we.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Be = K(() => we.value.coverSupportMatrix || At.value.byFormat || []), ct = K(() => we.value.environmentCapabilities || {}), vt = K(() => i.discoveryPage === "publication"), St = K(() => i.discoveryPage === "year"), tt = K(() => i.discoveryPage === "creator"), ut = K(() => vt.value || St.value || tt.value), h = K(() => i.discoveryTitle || U.publication || U.year || U.creator || ""), b = K(() => ut.value ? h.value : o("library", "Publication catalogue")), _ = K(() => tt.value ? o("library", "Creator") : St.value ? o("library", "Publication year") : o("library", "Publication / series")), R = K(() => Number(i.rootCount || 0)), E = K(() => Number(i.enabledRootCount || 0)), A = K(() => R.value === 0), I = K(() => R.value > 0 && E.value === 0), D = K(() => J.value.length > 0), L = {
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
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, w = K(() => {
      if (typeof window > "u") return "";
      const M = new URLSearchParams(window.location.search);
      if (M.get("batchMetadataApplyResult") !== "1") return "";
      const x = M.get("batchMetadataField") || "field", f = M.get("batchMetadataApplied") || "0", de = M.get("batchMetadataUnchanged") || "0", Ct = M.get("batchMetadataSkipped") || "0";
      return o("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: x, unchanged: de, skipped: Ct });
    }), G = K(() => i.savedCollections || []), $ = K(() => i.savedCollectionSaveUrl || "/apps/library/collections"), W = K(() => i.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), J = K(() => Object.entries(L).map(([M, x]) => ({ key: M, label: x, value: U[M] || "" })).filter((M) => String(M.value).trim() !== "")), ee = K(() => Object.entries(U).filter(([M, x]) => !["q", "sort", "starred"].includes(M) && String(x || "").trim() !== "").map(([M, x]) => ({ key: M, value: x }))), O = K(() => Object.entries(U).filter(([M, x]) => String(x || "").trim() !== "").map(([M, x]) => ({ key: M, value: x }))), N = /* @__PURE__ */ fr({}), H = /* @__PURE__ */ vl(null);
    let Z = null;
    function ae(M) {
      const x = new URLSearchParams(new FormData(M));
      for (const f of Array.from(x.keys()))
        String(x.get(f) || "").trim() === "" && x.delete(f);
      return x.delete("page"), x;
    }
    function ye(M) {
      a.splice(0, a.length, ...(M.items || []).map((x) => ({ ...x })));
      for (const x of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(M, x) && (i[x] = M[x]);
      Object.assign(U, M.activeFilters || {});
    }
    async function fe(M = !1) {
      if (!(be.loading || be.refreshing)) {
        M ? be.refreshing = !0 : be.loading = !0, be.error = "";
        try {
          const x = await fetch(`${Ve.value}${M ? "?refresh=1" : ""}`, {
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
    async function Le(M) {
      M && M.currentTarget && M.currentTarget.open !== !0 || be.loaded || be.loading || await fe(!1);
    }
    async function Re() {
      await fe(!0);
    }
    async function Te(M) {
      const x = M?.currentTarget?.tagName === "FORM" ? M.currentTarget : M?.currentTarget?.form;
      if (!x) return;
      const de = ae(x).toString(), Ct = de ? `?${de}` : "", Kt = await fetch(Ee.value + Ct, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Kt.ok) {
        x.submit();
        return;
      }
      ye(await Kt.json()), history.replaceState({}, "", de ? `?${de}` : window.location.pathname);
    }
    function rt(M) {
      Te(M);
    }
    function Mt(M) {
      window.clearTimeout(Z), Z = window.setTimeout(() => rt(M), 350);
    }
    function It(M) {
      const x = new URLSearchParams();
      for (const [de, Ct] of Object.entries(U)) {
        const Kt = String(Ct || "").trim();
        Kt !== "" && de !== M && !(de === "sort" && Kt === "title") && x.set(de, Kt);
      }
      const f = x.toString();
      return f ? `?${f}` : "?";
    }
    function mr() {
      return It("q");
    }
    const Et = K(() => i.smartViewCounts || {}), mt = K(() => {
      const M = {};
      for (const [x, f] of Object.entries(U)) {
        const de = String(f || "").trim();
        de !== "" && !(x === "sort" && de === "title") && (M[x] = de);
      }
      return M;
    }), ar = K(() => JSON.stringify(mt.value)), Lt = K(() => Object.keys(mt.value).length > 0), sr = K(() => [
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
    ]), Tt = K(() => [
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
    function or(M) {
      const x = new URLSearchParams(window.location.search);
      for (const de of Object.keys(L))
        x.delete(de);
      x.delete("page");
      for (const [de, Ct] of Object.entries(M))
        String(Ct || "").trim() !== "" && x.set(de, String(Ct));
      const f = x.toString();
      return f ? `?${f}` : "?";
    }
    function Ut(M) {
      return or(M || {});
    }
    function zt(M) {
      return W.value.replace("__COLLECTION_ID__", encodeURIComponent(String(M || "0")));
    }
    function Fe(M) {
      return String(M || "").toUpperCase();
    }
    function Wt(M) {
      return M.nextcloudTags || [];
    }
    function Vr(M) {
      return y.value.find((f) => f.publication === M)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(M)}`;
    }
    function qr(M) {
      return i.publicationYearLandingUrls?.[M] || `/apps/library/years/${encodeURIComponent(M)}`;
    }
    function ai(M) {
      return i.creatorLandingUrls?.[M] || `/apps/library/creators/${encodeURIComponent(M)}`;
    }
    function gn(M, x) {
      N[M] = !!x?.currentTarget?.open;
    }
    function Br(M) {
      const x = String(M?.tagName || "").toLowerCase();
      return M?.isContentEditable || ["input", "select", "textarea", "button"].includes(x);
    }
    function _n(M) {
      M.key !== "/" || M.metaKey || M.ctrlKey || M.altKey || M.shiftKey || Br(M.target) || (M.preventDefault(), H.value?.focus(), H.value?.select?.());
    }
    function zr(M) {
      M.key !== "Escape" || document.activeElement !== H.value || U.q === "" || (M.preventDefault(), U.q = "", H.value.value = "", window.clearTimeout(Z), rt({ currentTarget: H.value }));
    }
    function vn(M) {
      _n(M), zr(M);
    }
    Js(() => {
      window.addEventListener("keydown", vn);
    }), Zs(() => {
      window.removeEventListener("keydown", vn);
    });
    async function lr(M, x) {
      const f = x?.currentTarget?.closest?.("form") || x?.currentTarget;
      if (!f || !M?.starUrl) return;
      const de = !!M.starred;
      M.starred = !de;
      try {
        (await fetch(M.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (M.starred = de);
      } catch {
        M.starred = de;
      }
    }
    return (M, x) => (T(), C("div", Zu, [
      l("section", Qu, [
        l("div", ed, [
          l("div", null, [
            ut.value ? (T(), C("p", td, d(_.value), 1)) : ue("", !0),
            l("h2", rd, d(b.value), 1),
            l("p", nd, d(ut.value ? m(o)("library", "Browse this focused view; use filters only when you need to narrow it further.") : m(o)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          l("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": m(o)("library", "Library actions")
          }, [
            l("details", {
              class: "library-catalogue-actions-menu",
              onToggle: Le
            }, [
              l("summary", null, d(m(o)("library", "Actions")), 1),
              l("div", ad, [
                l("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, d(m(o)("library", "Settings")), 9, sd),
                Pe.value ? (T(), C("a", {
                  key: 0,
                  href: Pe.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, d(m(o)("library", "Export corrected metadata")), 9, od)) : ue("", !0),
                Oe.value ? (T(), C("a", {
                  key: 1,
                  href: Oe.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, d(m(o)("library", "Sidecar manifest")), 9, ld)) : ue("", !0),
                je.value ? (T(), C("a", {
                  key: 2,
                  href: je.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, d(m(o)("library", "Sidecar ZIP")), 9, cd)) : ue("", !0),
                l("div", ud, [
                  l("p", dd, d(m(o)("library", "Import health")), 1),
                  l("h3", fd, d(m(o)("library", "Metadata overview")), 1),
                  l("p", pd, d(m(o)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  be.loading ? (T(), C("p", hd, d(m(o)("library", "Loading cached metadata overview…")), 1)) : be.error ? (T(), C("p", md, d(be.error), 1)) : be.loaded ? ue("", !0) : (T(), C("p", bd, d(m(o)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  be.loaded ? (T(), C(ie, { key: 3 }, [
                    we.value.message ? (T(), C("p", yd, d(we.value.message), 1)) : we.value.cacheStatus === "missing" ? (T(), C("p", gd, d(m(o)("library", "No cached metadata overview exists yet")), 1)) : ue("", !0),
                    qe.value ? (T(), C("p", _d, d(m(o)("library", "Last generated")) + ": " + d(qe.value), 1)) : ue("", !0),
                    l("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: be.refreshing,
                      onClick: Re
                    }, d(be.refreshing ? m(o)("library", "Refreshing metadata overview…") : m(o)("library", "Refresh metadata overview")), 9, vd),
                    l("div", Sd, [
                      l("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, d(m(o)("library", "Review metadata errors")), 9, Ed),
                      l("a", {
                        class: "button secondary",
                        href: Ie.value
                      }, d(m(o)("library", "Full review")), 9, Td),
                      l("a", {
                        class: "button secondary",
                        href: me.value
                      }, d(m(o)("library", "Export TSV")), 9, Cd),
                      l("a", {
                        class: "button secondary",
                        href: ce.value
                      }, d(m(o)("library", "Probe covers")), 9, wd)
                    ]),
                    l("div", xd, [
                      l("article", null, [
                        l("h4", null, d(m(o)("library", "Metadata errors")), 1),
                        l("p", Ad, d(Ye.value.total || 0), 1),
                        l("ul", null, [
                          (T(!0), C(ie, null, ge(Ye.value.byExtension, (f) => (T(), C("li", {
                            key: f.extension
                          }, d(Fe(f.extension)) + " · " + d(f.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, d(m(o)("library", "Archive/container check")), 1),
                        l("p", kd, d(pe.value.mismatches || 0), 1),
                        l("ul", null, [
                          (T(!0), C(ie, null, ge(pe.value.byExtensionAndContainer, (f) => (T(), C("li", {
                            key: `${f.extension}-${f.actualContainerType}`
                          }, d(Fe(f.extension)) + " · " + d(f.actualContainerType) + " · " + d(f.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, d(m(o)("library", "Cover health")), 1),
                        l("p", Rd, d(At.value.note), 1),
                        l("ul", null, [
                          (T(!0), C(ie, null, ge(At.value.byFormat, (f) => (T(), C("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}`
                          }, d(Fe(f.extension)) + " · nextcloudPreview: " + d(f.nextcloudPreview) + " · libraryCoverRoute: " + d(f.libraryCoverRoute) + " · " + d(f.count), 1))), 128))
                        ])
                      ]),
                      l("article", null, [
                        l("h4", null, d(m(o)("library", "Cover support matrix")), 1),
                        l("p", Od, d(m(o)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        l("ul", null, [
                          (T(!0), C(ie, null, ge(Be.value, (f) => (T(), C("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}-${f.count}`
                          }, d(Fe(f.extension)) + " · Nextcloud/plugin preview: " + d(f.nextcloudPreview) + " · Library extraction: " + d(f.libraryCoverRoute) + " · " + d(f.count), 1))), 128))
                        ]),
                        l("p", Nd, d(m(o)("library", "Extractor tools")) + ": ZIP=" + d(ct.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + d(ct.value.sevenZipCommand || "missing") + " · RAR=" + d(ct.value.rarCommand || "missing") + " · bsdtar=" + d(ct.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ye.value.examples?.length ? (T(), C("details", Pd, [
                      l("summary", null, d(m(o)("library", "Example files and suggested actions")), 1),
                      l("ul", null, [
                        (T(!0), C(ie, null, ge(Ye.value.examples, (f) => (T(), C("li", {
                          key: `${f.fileId}-${f.path}`
                        }, [
                          l("code", null, d(f.path), 1),
                          l("span", null, d(f.scanStatus) + " · " + d(f.scanError) + " · " + d(f.actualContainerType), 1),
                          l("strong", null, d(f.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : ue("", !0)
                  ], 64)) : ue("", !0),
                  l("div", Md, [
                    l("article", null, [
                      l("h4", null, d(m(o)("library", "Metadata-error queue")), 1),
                      l("p", Id, d(m(o)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      l("a", {
                        class: "button secondary",
                        href: Ye.value.reviewUrl || "?status=metadata_error"
                      }, d(m(o)("library", "Open metadata-error rows")), 9, Ld),
                      l("a", {
                        class: "button secondary",
                        href: me.value
                      }, d(m(o)("library", "Export metadata-error rows")), 9, Ud),
                      l("form", {
                        method: "post",
                        action: Me.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: se.value
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
                        l("button", Hd, d(m(o)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    l("article", null, [
                      l("h4", null, d(m(o)("library", "Scanner-conflict queue")), 1),
                      l("p", $d, d(m(o)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      l("a", {
                        class: "button secondary",
                        href: De.value
                      }, d(m(o)("library", "Open scanner-conflict rows")), 9, jd),
                      l("form", {
                        method: "post",
                        action: Me.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: se.value
                        }, null, 8, qd),
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
                        l("button", Bd, d(m(o)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, id)
        ]),
        w.value ? (T(), C("p", zd, d(w.value), 1)) : ue("", !0),
        l("section", Wd, [
          l("div", Kd, [
            l("p", Gd, d(m(o)("library", "Useful views")), 1),
            l("h3", Yd, d(m(o)("library", "Useful views")), 1),
            l("p", Xd, d(m(o)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            l("p", Jd, d(m(o)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          l("nav", {
            class: "library-useful-view-links",
            "aria-label": m(o)("library", "Built-in useful catalogue views")
          }, [
            (T(!0), C(ie, null, ge(sr.value, (f) => (T(), C("a", {
              key: f.key,
              class: "library-useful-view-chip",
              href: or(f.filters),
              title: f.description
            }, [
              l("strong", null, d(m(o)("library", f.label)), 1),
              l("span", null, d(m(o)("library", f.description)), 1),
              l("small", ef, d(Number(Et.value[f.key] || 0)), 1)
            ], 8, Qd))), 128))
          ], 8, Zd)
        ]),
        l("section", tf, [
          l("div", rf, [
            l("p", nf, d(m(o)("library", "Metadata cleanup")), 1),
            l("h3", af, d(m(o)("library", "Weak metadata cockpit")), 1),
            l("p", sf, d(m(o)("library", "Counts are derived from indexed metadata and scanner provenance, not manual lists; compact cards stay browse-first while Details carries repair actions.")), 1)
          ]),
          l("nav", {
            class: "library-weak-metadata-links",
            "aria-label": m(o)("library", "Weak metadata catalogue views")
          }, [
            (T(!0), C(ie, null, ge(Tt.value, (f) => (T(), C("a", {
              key: f.key,
              class: "library-weak-metadata-card",
              href: or(f.filters),
              title: f.description
            }, [
              l("span", null, [
                l("strong", null, d(m(o)("library", f.label)), 1),
                l("small", null, d(m(o)("library", f.description)), 1)
              ]),
              l("b", null, d(Number(Et.value[f.key] || 0)), 1)
            ], 8, lf))), 128))
          ], 8, of)
        ]),
        l("section", cf, [
          l("div", uf, [
            l("p", df, d(m(o)("library", "Custom collections")), 1),
            l("h3", ff, d(m(o)("library", "Custom collections")), 1),
            l("p", pf, d(m(o)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          l("form", {
            method: "post",
            action: $.value,
            class: "library-saved-collection-save-form"
          }, [
            l("input", {
              type: "hidden",
              name: "requesttoken",
              value: se.value
            }, null, 8, mf),
            l("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: ar.value
            }, null, 8, bf),
            l("label", null, [
              _e(d(m(o)("library", "Collection name")) + " ", 1),
              l("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: m(o)("library", "e.g. Bremen photo books"),
                disabled: !Lt.value,
                autocomplete: "off"
              }, null, 8, yf)
            ]),
            l("button", {
              type: "submit",
              class: "button secondary",
              disabled: !Lt.value
            }, d(m(o)("library", "Save current view")), 9, gf)
          ], 8, hf),
          Lt.value ? ue("", !0) : (T(), C("p", _f, d(m(o)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          G.value.length > 0 ? (T(), C("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": m(o)("library", "Saved custom collections")
          }, [
            (T(!0), C(ie, null, ge(G.value, (f) => (T(), C("article", {
              key: f.id,
              class: "library-saved-collection-card"
            }, [
              l("a", {
                class: "library-saved-collection-link",
                href: Ut(f.filters)
              }, [
                l("strong", null, d(f.name), 1),
                l("span", null, d(Number(f.count || 0)) + " " + d(m(o)("library", "items")), 1)
              ], 8, Sf),
              l("form", {
                method: "post",
                action: zt(f.id),
                class: "library-saved-collection-delete-form"
              }, [
                l("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: se.value
                }, null, 8, Tf),
                l("button", Cf, d(m(o)("library", "Delete")), 1)
              ], 8, Ef)
            ]))), 128))
          ], 8, vf)) : ue("", !0)
        ]),
        l("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": m(o)("library", "Quick catalogue filters"),
          onSubmit: Pn(Te, ["prevent"])
        }, [
          (T(!0), C(ie, null, ge(ee.value, (f) => (T(), C("input", {
            key: f.key,
            type: "hidden",
            name: f.key,
            value: f.value
          }, null, 8, xf))), 128)),
          l("div", Af, [
            l("label", kf, [
              l("span", null, [
                _e(d(m(o)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                x[22] || (x[22] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              ze(l("input", {
                ref_key: "quickSearchInput",
                ref: H,
                "onUpdate:modelValue": x[0] || (x[0] = (f) => U.q = f),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: Mt
              }, null, 544), [
                [Ti, U.q]
              ])
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(o)("library", "Search catalogue")
            }, d(m(o)("library", "Search")), 9, Rf)
          ]),
          l("details", Of, [
            l("summary", null, d(m(o)("library", "Filter & sort")), 1),
            l("div", Nf, [
              l("label", null, [
                _e(d(m(o)("library", "Sort")) + " ", 1),
                ze(l("select", {
                  "onUpdate:modelValue": x[1] || (x[1] = (f) => U.sort = f),
                  name: "sort",
                  onChange: Te
                }, [
                  l("option", Pf, d(m(o)("library", "Title")), 1),
                  l("option", Mf, d(m(o)("library", "Recently added")), 1),
                  l("option", If, d(m(o)("library", "Publication date")), 1),
                  l("option", Lf, d(m(o)("library", "Series")), 1),
                  l("option", Uf, d(m(o)("library", "Recently opened")), 1),
                  l("option", Df, d(m(o)("library", "Format")), 1)
                ], 544), [
                  [it, U.sort]
                ])
              ]),
              l("label", null, [
                _e(d(m(o)("library", "Starred")) + " ", 1),
                ze(l("select", {
                  "onUpdate:modelValue": x[2] || (x[2] = (f) => U.starred = f),
                  name: "starred",
                  onChange: Te
                }, [
                  l("option", Ff, d(m(o)("library", "All")), 1),
                  l("option", Hf, d(m(o)("library", "Starred")), 1)
                ], 544), [
                  [it, U.starred]
                ])
              ]),
              l("label", null, [
                _e(d(m(o)("library", "Size")) + " ", 1),
                l("select", {
                  value: B.value.limit,
                  name: "limit",
                  onChange: Te
                }, [
                  (T(), C(ie, null, ge(n, (f) => l("option", {
                    key: f,
                    value: f
                  }, d(f), 9, jf)), 64))
                ], 40, $f)
              ]),
              l("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": m(o)("library", "Apply catalogue filters")
              }, d(m(o)("library", "Apply filters")), 9, Vf),
              l("a", {
                href: "?",
                class: "button secondary",
                "aria-label": m(o)("library", "Clear catalogue filters")
              }, d(m(o)("library", "Clear all")), 9, qf)
            ])
          ])
        ], 40, wf),
        l("details", Bf, [
          l("summary", zf, d(m(o)("library", "Show catalogue filters")), 1),
          l("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": m(o)("library", "Catalogue search and filters"),
            onSubmit: Pn(Te, ["prevent"])
          }, [
            l("label", null, [
              _e(d(m(o)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              ze(l("input", {
                "onUpdate:modelValue": x[3] || (x[3] = (f) => U.q = f),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Ti, U.q]
              ])
            ]),
            l("p", Kf, d(m(o)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            l("label", null, [
              _e(d(m(o)("library", "Type")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[4] || (x[4] = (f) => U.type = f),
                name: "type"
              }, [
                l("option", Gf, d(m(o)("library", "All types")), 1),
                (T(), C(ie, null, ge(r, (f) => l("option", {
                  key: f,
                  value: f
                }, d(f), 9, Yf)), 64))
              ], 512), [
                [it, U.type]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Series / periodical")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[5] || (x[5] = (f) => U.publication = f),
                name: "publication"
              }, [
                l("option", Xf, d(m(o)("library", "All series and periodicals")), 1),
                (T(!0), C(ie, null, ge(v.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, Jf))), 128))
              ], 512), [
                [it, U.publication]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Publication year")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[6] || (x[6] = (f) => U.year = f),
                name: "year"
              }, [
                l("option", Zf, d(m(o)("library", "All years")), 1),
                (T(!0), C(ie, null, ge(P.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, Qf))), 128))
              ], 512), [
                [it, U.year]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Creator")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[7] || (x[7] = (f) => U.creator = f),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                l("option", ep, d(m(o)("library", "All creators")), 1),
                (T(!0), C(ie, null, ge(j.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, tp))), 128))
              ], 512), [
                [it, U.creator]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Nextcloud tag")) + " ", 1),
              ze(l("input", {
                "onUpdate:modelValue": x[8] || (x[8] = (f) => U.tag = f),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Ti, U.tag]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Format")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[9] || (x[9] = (f) => U.format = f),
                name: "format"
              }, [
                l("option", rp, d(m(o)("library", "All formats")), 1),
                (T(!0), C(ie, null, ge(p.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(Fe(f)), 9, np))), 128))
              ], 512), [
                [it, U.format]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Shelf")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[10] || (x[10] = (f) => U.shelf = f),
                name: "shelf"
              }, [
                l("option", ip, d(m(o)("library", "All shelves")), 1),
                (T(!0), C(ie, null, ge(c.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, ap))), 128))
              ], 512), [
                [it, U.shelf]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Scan status")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[11] || (x[11] = (f) => U.status = f),
                name: "status"
              }, [
                l("option", sp, d(m(o)("library", "All scan statuses")), 1),
                (T(!0), C(ie, null, ge(re.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, op))), 128))
              ], 512), [
                [it, U.status]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Workflow status")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[12] || (x[12] = (f) => U.workflowStatus = f),
                name: "workflowStatus"
              }, [
                l("option", lp, d(m(o)("library", "All workflow statuses")), 1),
                (T(!0), C(ie, null, ge(z.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, cp))), 128))
              ], 512), [
                [it, U.workflowStatus]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Genre")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[13] || (x[13] = (f) => U.genre = f),
                name: "genre"
              }, [
                l("option", up, d(m(o)("library", "All genres")), 1),
                (T(!0), C(ie, null, ge(oe.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, dp))), 128))
              ], 512), [
                [it, U.genre]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Classification")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[14] || (x[14] = (f) => U.classification = f),
                name: "classification"
              }, [
                l("option", fp, d(m(o)("library", "All classifications")), 1),
                (T(!0), C(ie, null, ge(ne.value, (f) => (T(), C("option", {
                  key: f,
                  value: f
                }, d(f), 9, pp))), 128))
              ], 512), [
                [it, U.classification]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Scanner conflicts")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[15] || (x[15] = (f) => U.scannerConflicts = f),
                name: "scannerConflicts"
              }, [
                l("option", hp, d(m(o)("library", "All metadata")), 1),
                l("option", mp, d(m(o)("library", "Needs review")), 1)
              ], 512), [
                [it, U.scannerConflicts]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Starred")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[16] || (x[16] = (f) => U.starred = f),
                name: "starred"
              }, [
                l("option", bp, d(m(o)("library", "All publications")), 1),
                l("option", yp, d(m(o)("library", "Starred only")), 1)
              ], 512), [
                [it, U.starred]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Sort")) + " ", 1),
              ze(l("select", {
                "onUpdate:modelValue": x[17] || (x[17] = (f) => U.sort = f),
                name: "sort"
              }, [
                l("option", gp, d(m(o)("library", "Title")), 1),
                l("option", _p, d(m(o)("library", "Recently added")), 1),
                l("option", vp, d(m(o)("library", "Publication date")), 1),
                l("option", Sp, d(m(o)("library", "Series / periodical")), 1),
                l("option", Ep, d(m(o)("library", "Recently opened")), 1),
                l("option", Tp, d(m(o)("library", "Format")), 1)
              ], 512), [
                [it, U.sort]
              ])
            ]),
            l("label", null, [
              _e(d(m(o)("library", "Page size")) + " ", 1),
              l("select", {
                value: B.value.limit,
                name: "limit"
              }, [
                (T(), C(ie, null, ge(n, (f) => l("option", {
                  key: f,
                  value: f
                }, d(f), 9, wp)), 64))
              ], 8, Cp)
            ]),
            l("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(o)("library", "Apply catalogue filters")
            }, d(m(o)("library", "Apply filters")), 9, xp),
            l("a", {
              href: "?",
              class: "button secondary",
              "aria-label": m(o)("library", "Clear catalogue filters")
            }, d(m(o)("library", "Clear")), 9, Ap),
            l("a", {
              href: De.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, d(m(o)("library", "Review scanner conflicts")), 9, kp)
          ], 40, Wf)
        ]),
        ut.value ? (T(), C("section", Rp, [
          l("p", Op, d(_.value), 1),
          l("h3", Np, d(h.value), 1),
          l("p", Pp, d(tt.value ? m(o)("library", "Items by this creator, sorted by publication context when available.") : St.value ? m(o)("library", "Items from this publication year, sorted by publication date when available.") : m(o)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          l("div", Mp, [
            l("span", null, d(B.value.total) + " " + d(m(o)("library", "items")), 1),
            S.value?.earliestYear && S.value?.latestYear ? (T(), C("span", Ip, d(S.value.earliestYear) + "–" + d(S.value.latestYear), 1)) : ue("", !0),
            S.value?.datedCount ? (T(), C("span", Lp, d(S.value.datedCount) + " " + d(m(o)("library", "dated")), 1)) : ue("", !0),
            S.value?.undatedCount > 0 ? (T(), C("span", Up, d(S.value.undatedCount) + " " + d(m(o)("library", "undated")), 1)) : ue("", !0)
          ]),
          vt.value && S.value ? (T(), C("aside", Dp, [
            l("strong", null, d(m(o)("library", "Publication contents")), 1),
            l("span", null, d(S.value.itemCount) + " " + d(m(o)("library", "items")), 1),
            S.value.earliestYear && S.value.latestYear ? (T(), C("span", Fp, d(S.value.earliestYear) + "–" + d(S.value.latestYear), 1)) : ue("", !0),
            l("span", null, d(S.value.datedCount) + " " + d(m(o)("library", "with issue/date coverage")), 1),
            S.value.undatedCount > 0 ? (T(), C("span", Hp, d(S.value.undatedCount) + " " + d(m(o)("library", "without dates yet")), 1)) : ue("", !0)
          ])) : ue("", !0),
          l("p", null, [
            l("a", $p, d(m(o)("library", "Back to full catalogue")), 1)
          ])
        ])) : ue("", !0),
        l("div", jp, [
          l("p", Vp, [
            _e(d(m(o)("library", "Showing")) + " " + d(B.value.from) + "–" + d(B.value.to) + " " + d(m(o)("library", "of")) + " " + d(B.value.total) + " " + d(m(o)("library", "catalogue items")), 1),
            J.value.length > 0 ? (T(), C("span", qp, [
              x[23] || (x[23] = _e(" · ", -1)),
              l("a", Bp, d(m(o)("library", "Clear all filters")), 1)
            ])) : ue("", !0)
          ]),
          l("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": m(o)("library", "Catalogue pagination")
          }, [
            l("span", Wp, [
              _e(d(m(o)("library", "Page")) + " " + d(B.value.page), 1),
              B.value.total > 0 ? (T(), C("span", Kp, " · " + d(B.value.from) + "–" + d(B.value.to), 1)) : ue("", !0)
            ]),
            B.value.previousUrl ? (T(), C("a", {
              key: 0,
              href: B.value.previousUrl
            }, d(m(o)("library", "Previous")), 9, Gp)) : (T(), C("span", Yp, d(m(o)("library", "Previous")), 1)),
            B.value.nextUrl ? (T(), C("a", {
              key: 2,
              href: B.value.nextUrl
            }, d(m(o)("library", "Next")), 9, Xp)) : (T(), C("span", Jp, d(m(o)("library", "Next")), 1))
          ], 8, zp)
        ]),
        l("div", Zp, [
          l("details", {
            class: "library-batch-actions",
            "aria-label": m(o)("library", "Batch actions for current results")
          }, [
            l("summary", null, [
              _e(d(m(o)("library", "Batch")) + " ", 1),
              l("span", eh, d(B.value.total) + " " + d(m(o)("library", "Current filter result")), 1)
            ]),
            l("form", {
              method: "post",
              action: Me.value,
              class: "library-batch-tag-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: se.value
              }, null, 8, rh),
              (T(!0), C(ie, null, ge(O.value, (f) => (T(), C("input", {
                key: f.key,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, nh))), 128)),
              l("label", null, [
                l("span", null, d(m(o)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(o)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, ih)
              ]),
              l("button", ah, d(m(o)("library", "Apply Nextcloud tag to current results")), 1),
              l("p", sh, d(m(o)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, th),
            l("form", {
              method: "post",
              action: et.value,
              class: "library-batch-tag-remove-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: se.value
              }, null, 8, lh),
              (T(!0), C(ie, null, ge(O.value, (f) => (T(), C("input", {
                key: `remove-tag-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, ch))), 128)),
              l("label", null, [
                l("span", null, d(m(o)("library", "Nextcloud tag")), 1),
                l("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(o)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, uh)
              ]),
              l("button", dh, d(m(o)("library", "Remove tag from current results")), 1),
              l("p", fh, d(m(o)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, oh),
            l("form", {
              method: "post",
              action: lt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: se.value
              }, null, 8, hh),
              (T(!0), C(ie, null, ge(O.value, (f) => (T(), C("input", {
                key: `reset-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, mh))), 128)),
              x[24] || (x[24] = l("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              l("button", bh, d(m(o)("library", "Reset filtered metadata")), 1),
              l("p", yh, d(m(o)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, ph),
            l("form", {
              method: "post",
              action: Ke.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: se.value
              }, null, 8, _h),
              (T(!0), C(ie, null, ge(O.value, (f) => (T(), C("input", {
                key: `edit-preview-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, vh))), 128)),
              l("label", null, [
                l("span", null, d(m(o)("library", "Metadata field")), 1),
                l("select", Sh, [
                  l("option", Eh, d(m(o)("library", "Publication type")), 1),
                  l("option", Th, d(m(o)("library", "Subtitle")), 1),
                  l("option", Ch, d(m(o)("library", "Creators")), 1),
                  l("option", wh, d(m(o)("library", "Series / periodical")), 1),
                  l("option", xh, d(m(o)("library", "Publication date")), 1),
                  l("option", Ah, d(m(o)("library", "Language")), 1),
                  l("option", kh, d(m(o)("library", "Publisher")), 1),
                  l("option", Rh, d(m(o)("library", "Genres")), 1),
                  l("option", Oh, d(m(o)("library", "Classifications")), 1)
                ])
              ]),
              l("label", null, [
                l("span", null, d(m(o)("library", "Preview value")), 1),
                x[25] || (x[25] = l("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              l("button", Nh, d(m(o)("library", "Preview & apply metadata edit")), 1),
              l("p", Ph, d(m(o)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, gh),
            l("form", {
              method: "post",
              action: _t.value,
              class: "library-batch-cover-refresh-form"
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: se.value
              }, null, 8, Ih),
              (T(!0), C(ie, null, ge(O.value, (f) => (T(), C("input", {
                key: `cover-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Lh))), 128)),
              l("button", Uh, d(m(o)("library", "Request fresh cover previews")), 1),
              l("p", Dh, d(m(o)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, Mh)
          ], 8, Qp),
          l("details", Fh, [
            l("summary", null, d(m(o)("library", "Browse")), 1),
            l("div", Hh, [
              y.value.length > 0 ? (T(), C("section", $h, [
                l("h3", jh, d(m(o)("library", "Top series and periodicals")), 1),
                l("p", Vh, d(m(o)("library", "Jump into recurring publications with one click.")), 1),
                l("ul", null, [
                  (T(!0), C(ie, null, ge(y.value, (f) => (T(), C("li", {
                    key: f.publication
                  }, [
                    l("a", {
                      href: Vr(f.publication)
                    }, d(f.publication), 9, qh),
                    l("span", Bh, d(f.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (T(), C("section", zh, [
                l("h3", Wh, d(m(o)("library", "No series or periodicals found yet")), 1),
                l("p", Kh, d(m(o)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : ue("", !0),
              P.value.length > 0 ? (T(), C("section", Gh, [
                l("h3", Yh, d(m(o)("library", "Top publication years")), 1),
                l("ul", null, [
                  (T(!0), C(ie, null, ge(P.value, (f) => (T(), C("li", { key: f }, [
                    l("a", {
                      href: qr(f)
                    }, d(f), 9, Xh)
                  ]))), 128))
                ])
              ])) : ue("", !0),
              j.value.length > 0 ? (T(), C("section", Jh, [
                l("h3", Zh, d(m(o)("library", "Top creators")), 1),
                l("ul", null, [
                  (T(!0), C(ie, null, ge(j.value, (f) => (T(), C("li", { key: f }, [
                    l("a", {
                      href: ai(f)
                    }, d(f), 9, Qh)
                  ]))), 128))
                ])
              ])) : ue("", !0)
            ])
          ])
        ]),
        J.value.length > 0 ? (T(), C("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": m(o)("library", "Active filters")
        }, [
          l("span", null, d(m(o)("library", "Active filters")), 1),
          (T(!0), C(ie, null, ge(J.value, (f) => (T(), C("a", {
            key: f.key,
            href: It(f.key),
            class: "library-filter-chip",
            "aria-label": `${m(o)("library", "Remove filter")}: ${f.label}`
          }, [
            l("strong", null, d(f.label) + ":", 1),
            _e(" " + d(f.value) + " ", 1),
            x[26] || (x[26] = l("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, tm))), 128))
        ], 8, em)) : ue("", !0),
        s.value.length === 0 ? (T(), C("div", {
          key: 3,
          class: Ur(["library-empty-content", { "library-first-run-guidance": A.value || I.value, "library-filter-empty-state": D.value && !A.value && !I.value }]),
          role: "status"
        }, [
          A.value ? (T(), C(ie, { key: 0 }, [
            l("h3", null, d(m(o)("library", "Start with one Library root")), 1),
            l("p", rm, d(m(o)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            l("p", nm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, d(m(o)("library", "Add a Library root")), 9, im),
              l("span", am, d(m(o)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : I.value ? (T(), C(ie, { key: 1 }, [
            l("h3", null, d(m(o)("library", "No enabled Library roots")), 1),
            l("p", sm, d(m(o)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            l("p", om, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, d(m(o)("library", "Open Library settings")), 9, lm)
            ])
          ], 64)) : D.value ? (T(), C(ie, { key: 2 }, [
            l("h3", null, d(m(o)("library", "No matches for the current filters")), 1),
            l("p", cm, d(m(o)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            l("p", um, [
              l("a", {
                href: mr(),
                class: "button secondary"
              }, d(m(o)("library", "Clear search")), 9, dm),
              l("a", fm, d(m(o)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (T(), C(ie, { key: 3 }, [
            l("h3", null, d(m(o)("library", "No catalogue items yet")), 1),
            l("p", pm, d(m(o)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            l("p", hm, [
              l("a", {
                href: V.value,
                class: "button primary"
              }, d(m(o)("library", "Run a scan from settings")), 9, mm)
            ])
          ], 64))
        ], 2)) : (T(), C("div", bm, [
          (T(!0), C(ie, null, ge(s.value, (f) => (T(), C("article", {
            key: f.id,
            class: Ur(["library-cover-card", { "library-cover-card--open": N[f.id] }])
          }, [
            l("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              l("img", {
                class: "library-cover-image",
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, gm)
            ], 8, ym),
            l("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: Pn((de) => lr(f, de), ["prevent"])
            }, [
              l("input", {
                type: "hidden",
                name: "requesttoken",
                value: se.value
              }, null, 8, vm),
              x[27] || (x[27] = l("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              l("input", {
                type: "hidden",
                name: "starred",
                value: f.starred ? "0" : "1"
              }, null, 8, Sm),
              l("button", {
                type: "submit",
                class: Ur(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? m(o)("library", "Unstar this publication") : m(o)("library", "Star this publication"),
                "aria-label": f.starred ? m(o)("library", "Unstar this publication") : m(o)("library", "Star this publication"),
                onClick: Pn((de) => lr(f, de), ["prevent"])
              }, d(f.starred ? "★" : "☆"), 11, Em)
            ], 40, _m),
            l("div", Tm, [
              l("div", Cm, [
                l("h3", null, [
                  f.starred ? (T(), C("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": m(o)("library", "Starred")
                  }, "★", 8, wm)) : ue("", !0),
                  _e(d(f.title), 1)
                ]),
                l("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, d(m(o)("library", "Read")), 9, xm)
              ]),
              l("details", {
                class: "library-cover-details",
                onToggle: (de) => gn(f.id, de)
              }, [
                l("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${m(o)("library", "Show details and actions")}: ${f.title}`
                }, d(m(o)("library", "Details")), 9, km),
                l("div", Rm, [
                  f.creators ? (T(), C("p", Om, d(f.creators), 1)) : ue("", !0),
                  l("dl", Nm, [
                    l("div", Pm, [
                      l("dt", null, d(m(o)("library", "Type")), 1),
                      l("dd", null, d(f.publicationType), 1)
                    ]),
                    f.publication ? (T(), C("div", Mm, [
                      l("dt", null, d(m(o)("library", "Series")), 1),
                      l("dd", null, d(f.publication), 1)
                    ])) : ue("", !0),
                    f.publicationDate ? (T(), C("div", Im, [
                      l("dt", null, d(m(o)("library", "Date")), 1),
                      l("dd", null, d(f.publicationDate), 1)
                    ])) : ue("", !0),
                    f.workflowStatus ? (T(), C("div", Lm, [
                      l("dt", null, d(m(o)("library", "Status")), 1),
                      l("dd", null, d(f.workflowStatus), 1)
                    ])) : ue("", !0),
                    f.hasScannerConflict ? (T(), C("div", Um, [
                      l("dt", null, d(m(o)("library", "Review")), 1),
                      l("dd", null, d(f.scannerConflictCount) + " fields", 1)
                    ])) : ue("", !0),
                    f.lastOpenedAt ? (T(), C("div", Dm, [
                      l("dt", null, d(m(o)("library", "Last opened")), 1),
                      l("dd", null, d(f.lastOpenedAt), 1)
                    ])) : ue("", !0),
                    f.extension ? (T(), C("div", Fm, [
                      l("dt", null, d(m(o)("library", "Format")) + ":", 1),
                      l("dd", null, d(Fe(f.extension)), 1)
                    ])) : ue("", !0),
                    f.shelf ? (T(), C("div", Hm, [
                      l("dt", null, d(m(o)("library", "Shelf")), 1),
                      l("dd", null, d(f.shelf), 1)
                    ])) : ue("", !0)
                  ]),
                  f.description ? (T(), C("p", $m, d(f.description), 1)) : ue("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (T(), C("p", jm, [
                    _e(" scanStatus: " + d(f.scanStatus || "unknown"), 1),
                    f.scanError ? (T(), C("span", Vm, " · scanError: " + d(f.scanError), 1)) : ue("", !0)
                  ])) : ue("", !0),
                  l("div", qm, [
                    Wt(f).length === 0 ? (T(), C("span", Bm, "No Nextcloud tags")) : (T(!0), C(ie, { key: 1 }, ge(Wt(f), (de) => (T(), C("span", {
                      key: de.id,
                      class: "library-tag"
                    }, d(de.name), 1))), 128))
                  ]),
                  l("p", zm, [
                    l("a", {
                      href: f.filesUrl
                    }, d(m(o)("library", "Show in Files")), 9, Wm),
                    x[28] || (x[28] = _e(" · ", -1)),
                    l("a", {
                      href: f.downloadUrl
                    }, d(m(o)("library", "Download source")), 9, Km),
                    x[29] || (x[29] = _e(" · ", -1)),
                    l("a", {
                      href: f.detailsUrl
                    }, d(m(o)("library", "Details")), 9, Gm)
                  ])
                ])
              ], 40, Am)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (T(), C("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": m(o)("library", "Catalogue pagination")
        }, [
          l("span", Xm, [
            _e(d(m(o)("library", "Page")) + " " + d(B.value.page), 1),
            B.value.total > 0 ? (T(), C("span", Jm, " · " + d(B.value.from) + "–" + d(B.value.to), 1)) : ue("", !0)
          ]),
          B.value.previousUrl ? (T(), C("a", {
            key: 0,
            href: B.value.previousUrl
          }, d(m(o)("library", "Previous")), 9, Zm)) : (T(), C("span", Qm, d(m(o)("library", "Previous")), 1)),
          B.value.nextUrl ? (T(), C("a", {
            key: 2,
            href: B.value.nextUrl
          }, d(m(o)("library", "Next")), 9, eb)) : (T(), C("span", tb, d(m(o)("library", "Next")), 1))
        ], 8, Ym)) : ue("", !0)
      ])
    ]));
  }
}, ps = fu("library", "catalogue", {}), Dn = document.querySelector("#library-vue-root"), hs = {
  ...ps,
  requestToken: Dn?.dataset.requestToken || ps.requestToken || ""
};
function Y(e) {
  return String(e ?? "");
}
function Ro(e) {
  return Y(e).toUpperCase();
}
function nb(e, t, r, n = Y) {
  for (const i of t) {
    const a = document.createElement("option");
    a.value = Y(i), a.textContent = n(i), Y(i) === Y(r) && (a.selected = !0), e.appendChild(a);
  }
}
function ms(e, t, r, n, i = "") {
  const a = document.createElement("label");
  a.textContent = t;
  const s = document.createElement("input");
  s.type = r === "q" ? "search" : "text", s.name = r, s.value = Y(n), s.placeholder = i, a.appendChild(s), e.appendChild(a);
}
function Nr(e, t, r, n, i, a, s = Y) {
  const c = document.createElement("label");
  c.textContent = t;
  const p = document.createElement("select");
  p.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, p.appendChild(v), nb(p, a, n, s), c.appendChild(p), e.appendChild(c);
}
function Pr(e) {
  const t = Y(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function ib(e, t = {}) {
  return Y(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Y(e || t?.publication || ""))}`);
}
function ab(e) {
  return Y(e.discoveryPage) === "publication";
}
function sb(e, t = {}) {
  return Y(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Y(e))}`);
}
function Ni(e) {
  return Y(e.discoveryPage) === "year";
}
function ob(e, t = {}) {
  return Y(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Y(e))}`);
}
function Pi(e) {
  return Y(e.discoveryPage) === "creator";
}
function lb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Y(n).trim() !== "");
}
function cb() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Zr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function ub(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function db(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", o("library", "Catalogue search and filters")), ms(n, o("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Nr(n, o("library", "Type"), "type", r.type, o("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ms(n, o("library", "Nextcloud tag"), "tag", r.tag, "photography"), Nr(n, o("library", "Format"), "format", r.format, o("library", "All formats"), e.formats || [], Ro), Nr(n, o("library", "Shelf"), "shelf", r.shelf, o("library", "All shelves"), e.shelves || []), Nr(n, o("library", "Scan status"), "status", r.status, o("library", "All scan statuses"), e.scanStatuses || []), Nr(n, o("library", "Sort"), "sort", r.sort || "title", o("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Nr(n, o("library", "Page size"), "limit", t.limit || 100, o("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", o("library", "Apply catalogue filters")), i.textContent = o("library", "Apply filters");
  const a = document.createElement("a");
  return a.href = "?", a.className = "button secondary", a.setAttribute("aria-label", o("library", "Clear catalogue filters")), a.textContent = o("library", "Clear"), n.append(i, a), n;
}
function fb() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", a = document.createElement("p");
  return a.className = "library-notice library-batch-metadata-apply-result", a.textContent = o("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), a;
}
function pb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", o("library", "Quick catalogue filters"));
  let i = null;
  const a = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [S, P] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(S) || Y(P).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = S, j.value = Y(P), n.appendChild(j);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = o("library", "Search");
  const c = document.createElement("input");
  c.type = "search", c.name = "q", c.value = Y(r.q), c.placeholder = "Camera, Eco, Rolleiflex...", c.addEventListener("input", a), s.appendChild(c), n.appendChild(s);
  const p = [
    [o("library", "Sort"), "sort", r.sort || "title", [["title", o("library", "Title")], ["recent", o("library", "Recently added")], ["publicationDate", o("library", "Publication date")], ["publication", o("library", "Series")], ["lastOpened", o("library", "Recently opened")], ["format", o("library", "Format")]]],
    [o("library", "Starred"), "starred", r.starred || "", [["", o("library", "All")], ["1", o("library", "Starred")]]],
    [o("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [S, P, j, re] of p) {
    const z = document.createElement("label");
    z.textContent = S;
    const oe = document.createElement("select");
    oe.name = P;
    for (const [ne, B] of re) {
      const U = document.createElement("option");
      U.value = Y(ne), U.textContent = Y(B), Y(ne) === Y(j) && (U.selected = !0), oe.appendChild(U);
    }
    oe.addEventListener("change", () => n.requestSubmit()), z.appendChild(oe), n.appendChild(z);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", o("library", "Apply catalogue filters")), v.textContent = o("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", o("library", "Clear catalogue filters")), y.textContent = o("library", "Clear all"), n.append(v, y), n;
}
function hb(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = Y(e.settingsUrl || ""), a = Y(e.metadataExportUrl || ""), s = Y(e.batchTagUrl || "/apps/library/bulk/tags"), c = Y(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), p = Y(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = Y(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Y(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), S = document.createElement("div");
  S.className = "library-vue-catalogue library-vue-fallback", S.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), z = document.createElement("h2");
  z.id = "library-catalogue-heading", z.textContent = o("library", "Publication catalogue");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = o("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(z, oe);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", o("library", "Library actions")), i) {
    const O = document.createElement("a");
    O.href = i, O.className = "button secondary", O.setAttribute("aria-label", "Open Library settings"), O.textContent = o("library", "Settings"), ne.appendChild(O);
  }
  if (a) {
    const O = document.createElement("a");
    O.href = a, O.className = "button secondary", O.setAttribute("aria-label", "Export corrected metadata"), O.textContent = o("library", "Export corrected metadata"), ne.appendChild(O);
  }
  if (e.metadataSidecarManifestUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarManifestUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar manifest"), O.textContent = o("library", "Sidecar manifest"), ne.appendChild(O);
  }
  if (e.metadataSidecarBundleUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarBundleUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar ZIP"), O.textContent = o("library", "Sidecar ZIP"), ne.appendChild(O);
  }
  j.append(re, ne), P.appendChild(j);
  const B = fb();
  B && P.appendChild(B), P.appendChild(pb(e, n));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = o("library", "Show catalogue filters"), U.append(V, db(e, n)), P.appendChild(U), ab(e) || Ni(e) || Pi(e)) {
    const O = document.createElement("section");
    O.className = "library-discovery-header", O.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Pi(e) ? o("library", "Creator") : Ni(e) ? o("library", "Publication year") : o("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = Y(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = `${n.total ?? r.length} ${Pi(e) ? o("library", "items by this creator. Sorted by publication context when available.") : Ni(e) ? o("library", "items from this publication year. Sorted by publication date when available.") : o("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ae = document.createElement("a");
    ae.href = "/apps/library/", ae.className = "button secondary", ae.textContent = o("library", "Back to full catalogue"), O.append(N, H, Z, ae), P.appendChild(O);
  }
  const se = document.createElement("p");
  se.className = "library-muted library-filter-result-summary", se.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Pe = document.createElement("a");
  Pe.href = "?", Pe.textContent = ` ${o("library", "Clear all filters")}`, se.appendChild(Pe), P.appendChild(se);
  const Oe = document.createElement("details");
  Oe.className = "library-batch-actions";
  const je = document.createElement("summary");
  je.textContent = `${o("library", "Batch actions for current results")} (${n.total ?? r.length} ${o("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = s, Ee.className = "library-batch-tag-form";
  const Me = Pr(e);
  Me && Ee.appendChild(Me);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Ee.appendChild(H);
  }
  const et = document.createElement("label");
  et.textContent = o("library", "Apply Nextcloud tag to current results");
  const lt = document.createElement("input");
  lt.type = "text", lt.name = "nextcloudTagName", lt.placeholder = "batch-review", et.appendChild(lt);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = o("library", "Apply Nextcloud tag to current results");
  const _t = document.createElement("p");
  _t.className = "library-muted", _t.textContent = o("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(et, Ke, _t);
  const De = document.createElement("form");
  De.method = "post", De.action = c, De.className = "library-batch-tag-remove-form";
  const Ie = Pr(e);
  Ie && De.appendChild(Ie);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), De.appendChild(H);
  }
  const me = document.createElement("label");
  me.textContent = o("library", "Nextcloud tag");
  const ce = document.createElement("input");
  ce.type = "text", ce.name = "nextcloudTagName", ce.setAttribute("list", "library-nextcloud-tag-suggestions"), ce.placeholder = o("library", "e.g. Review"), ce.autocomplete = "off", me.appendChild(ce);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = o("library", "Remove tag from current results");
  const be = document.createElement("p");
  be.className = "library-muted", be.textContent = o("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), De.append(me, Ve, be);
  const we = document.createElement("form");
  we.method = "post", we.action = p, we.className = "library-batch-metadata-reset-form";
  const qe = Pr(e);
  qe && we.appendChild(qe);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), we.appendChild(H);
  }
  const Ye = document.createElement("input");
  Ye.type = "hidden", Ye.name = "scannerConflicts", Ye.value = "1";
  const pe = document.createElement("button");
  pe.type = "submit", pe.className = "button secondary", pe.textContent = o("library", "Reset filtered metadata");
  const At = document.createElement("p");
  At.className = "library-muted", At.textContent = o("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), we.append(Ye, pe, At);
  const Be = document.createElement("form");
  Be.method = "post", Be.action = v, Be.className = "library-batch-metadata-edit-preview-form", Be.target = "_blank";
  const ct = Pr(e);
  ct && Be.appendChild(ct);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Be.appendChild(H);
  }
  const vt = document.createElement("label");
  vt.textContent = o("library", "Metadata field");
  const St = document.createElement("select");
  St.name = "bulkEditField";
  for (const [O, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = O, H.textContent = o("library", N), St.appendChild(H);
  }
  vt.appendChild(St);
  const tt = document.createElement("label");
  tt.textContent = o("library", "Preview value");
  const ut = document.createElement("input");
  ut.type = "text", ut.name = "bulkEditValue", ut.placeholder = "magazine, de, photography...", ut.autocomplete = "off", tt.appendChild(ut);
  const h = document.createElement("button");
  h.type = "submit", h.className = "button secondary", h.textContent = o("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = o("library", "Preview first, then apply from the review page."), Be.append(vt, tt, h, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const R = Pr(e);
  R && _.appendChild(R);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), _.appendChild(H);
  }
  const E = document.createElement("button");
  E.type = "submit", E.className = "button secondary", E.textContent = o("library", "Request fresh cover previews");
  const A = document.createElement("p");
  A.className = "library-muted", A.textContent = o("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(E, A), Oe.append(je, Ee, De, we, Be, _), P.appendChild(Oe);
  const I = document.createElement("nav");
  I.className = "library-pagination", I.setAttribute("aria-label", o("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, I.appendChild(D), P.appendChild(I);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], w = document.createElement("details");
  w.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const G = document.createElement("summary");
  G.className = "library-periodical-groups-summary", G.textContent = o("library", "Show top series and periodicals"), w.appendChild(G);
  const $ = document.createElement("h3");
  $.textContent = L.length > 0 ? o("library", "Top series and periodicals") : o("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = L.length > 0 ? o("library", "Jump into recurring publications with one click.") : o("library", "Add publication or series names in item details to build this shortcut panel."), w.append($, W), L.length > 0) {
    const O = document.createElement("ul");
    for (const N of L) {
      const H = document.createElement("li"), Z = document.createElement("a");
      Z.href = ib(N.publication, N), Z.textContent = Y(N.publication);
      const ae = document.createElement("span");
      ae.className = "library-muted", ae.textContent = `${N.itemCount} items`, H.append(Z, ae), O.appendChild(H);
    }
    w.appendChild(O);
  }
  P.appendChild(w);
  const J = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (J.length > 0) {
    const O = document.createElement("details");
    O.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = o("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = o("library", "Top publication years");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = o("library", "Jump into dated books, magazines, journals and comics by year.");
    const ae = document.createElement("ul");
    for (const ye of J) {
      const fe = document.createElement("li"), Le = document.createElement("a");
      Le.href = sb(ye, e), Le.textContent = Y(ye), fe.appendChild(Le), ae.appendChild(fe);
    }
    O.append(N, H, Z, ae), P.appendChild(O);
  }
  const ee = Array.isArray(e.creators) ? e.creators : [];
  if (ee.length > 0) {
    const O = document.createElement("details");
    O.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = o("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = o("library", "Top creators");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = o("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ae = document.createElement("ul");
    for (const ye of ee) {
      const fe = document.createElement("li"), Le = document.createElement("a");
      Le.href = ob(ye, e), Le.textContent = Y(ye), fe.appendChild(Le), ae.appendChild(fe);
    }
    O.append(N, H, Z, ae), P.appendChild(O);
  }
  if (r.length === 0) {
    const O = document.createElement("div"), N = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), Z = lb(e);
    O.className = "library-empty-content", (N === 0 || H === 0) && O.classList.add("library-first-run-guidance"), Z && N > 0 && H > 0 && O.classList.add("library-filter-empty-state"), O.setAttribute("role", "status");
    const ae = document.createElement("h3"), ye = document.createElement("p");
    ye.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", N === 0 ? (ae.textContent = o("library", "Start with one Library root"), ye.textContent = o("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Zr(fe, i, "button primary", o("library", "Add a Library root")), ub(fe, o("library", "Run a scan after saving a root"))) : H === 0 ? (ae.textContent = o("library", "No enabled Library roots"), ye.textContent = o("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Zr(fe, i, "button primary", o("library", "Open Library settings"))) : Z ? (ae.textContent = o("library", "No matches for the current filters"), ye.textContent = o("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Zr(fe, cb(), "button secondary", o("library", "Clear search")), Zr(fe, "?", "button primary", o("library", "Clear all filters"))) : (ae.textContent = o("library", "No catalogue items yet"), ye.textContent = o("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Zr(fe, i, "button primary", o("library", "Run a scan from settings"))), O.append(ae, ye, fe), P.appendChild(O);
  } else {
    const O = document.createElement("div");
    O.className = "library-cover-gallery";
    for (const N of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const Z = document.createElement("a");
      Z.className = "library-cover-link", Z.href = Y(N.openUrl || "#"), Z.setAttribute("aria-label", `Read ${Y(N.title || "publication")}`);
      const ae = document.createElement("img");
      ae.className = "library-cover-image", ae.src = Y(N.coverUrl || ""), ae.alt = `Cover for ${Y(N.title || "publication")}`, ae.loading = "lazy", Z.appendChild(ae);
      const ye = Pr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = Y(N.starUrl || ""), fe.className = "library-cover-star-form", ye && fe.appendChild(ye);
      const Le = document.createElement("input");
      Le.type = "hidden", Le.name = "returnTo", Le.value = "catalogue";
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "starred", Re.value = N.starred ? "0" : "1";
      const Te = document.createElement("button");
      Te.type = "submit", Te.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Te.setAttribute("aria-pressed", N.starred ? "true" : "false"), Te.setAttribute("aria-label", N.starred ? o("library", "Unstar this publication") : o("library", "Star this publication")), Te.title = N.starred ? o("library", "Unstar this publication") : o("library", "Star this publication"), Te.textContent = N.starred ? "★" : "☆", fe.append(Le, Re, Te);
      const rt = document.createElement("div");
      rt.className = "library-cover-summary";
      const Mt = document.createElement("h3");
      if (Mt.textContent = Y(N.title || "Untitled publication"), rt.appendChild(Mt), N.creators) {
        const Tt = document.createElement("p");
        Tt.className = "library-creator", Tt.textContent = Y(N.creators), rt.appendChild(Tt);
      }
      const It = document.createElement("dl");
      It.className = "library-cover-detail-list";
      const mr = [
        ["Type", Y(N.publicationType || "other")],
        ["Format", N.extension ? Ro(N.extension) : ""],
        ["Shelf", N.shelf ? Y(N.shelf) : ""]
      ].filter(([, Tt]) => Tt !== "");
      for (const [Tt, or] of mr) {
        const Ut = document.createElement("div");
        Ut.className = "library-cover-detail-chip";
        const zt = document.createElement("dt");
        zt.textContent = Tt;
        const Fe = document.createElement("dd");
        Fe.textContent = or, Ut.append(zt, Fe), It.appendChild(Ut);
      }
      rt.appendChild(It);
      const Et = document.createElement("p"), mt = document.createElement("a");
      mt.href = Y(N.openUrl || "#"), mt.textContent = o("library", "Read");
      const ar = document.createElement("a");
      ar.href = Y(N.filesUrl || "#"), ar.textContent = o("library", "Show in Files");
      const Lt = document.createElement("a");
      Lt.href = Y(N.downloadUrl || "#"), Lt.textContent = o("library", "Download source");
      const sr = document.createElement("a");
      sr.href = Y(N.detailsUrl || "#"), sr.textContent = o("library", "Details"), Et.append(mt, document.createTextNode(" · "), ar, document.createTextNode(" · "), Lt, document.createTextNode(" · "), sr), rt.appendChild(Et), H.append(Z, fe, rt), O.appendChild(H);
    }
    P.appendChild(O);
  }
  return S.appendChild(P), S;
}
if (Dn)
  try {
    cu(rb, { state: hs }).mount(Dn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Dn.replaceChildren(hb(hs));
  }
//# sourceMappingURL=library-main.mjs.map
