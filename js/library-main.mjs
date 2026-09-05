// @__NO_SIDE_EFFECTS__
function Xn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = {}, ht = [], Re = () => {
}, Zs = () => !1, dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), pn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Zn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, oi = Object.prototype.hasOwnProperty, K = (e, t) => oi.call(e, t), I = Array.isArray, ze = (e) => Lt(e) === "[object Map]", ut = (e) => Lt(e) === "[object Set]", _s = (e) => Lt(e) === "[object Date]", D = (e) => typeof e == "function", Z = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Qs = (e) => (q(e) || D(e)) && D(e.then) && D(e.catch), er = Object.prototype.toString, Lt = (e) => er.call(e), ci = (e) => Lt(e).slice(8, -1), tr = (e) => Lt(e) === "[object Object]", Qn = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ot = /* @__PURE__ */ Xn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ui = /-\w/g, be = hn(
  (e) => e.replace(ui, (t) => t.slice(1).toUpperCase())
), ai = /\B([A-Z])/g, at = hn(
  (e) => e.replace(ai, "-$1").toLowerCase()
), nr = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), An = hn(
  (e) => e ? `on${nr(e)}` : ""
), Ue = (e, t) => !Object.is(e, t), Qt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, sr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, gn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vs;
const mn = () => vs || (vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function es(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Z(s) ? hi(s) : es(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Z(e) || q(e))
    return e;
}
const fi = /;(?![^(]*\))/g, di = /:([^]+)/, pi = /\/\*[^]*?\*\//g;
function hi(e) {
  const t = {};
  return e.replace(pi, "").split(fi).forEach((n) => {
    if (n) {
      const s = n.split(di);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ts(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = ts(e[n]);
      s && (t += s + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mi = /* @__PURE__ */ Xn(gi);
function rr(e) {
  return !!e || e === "";
}
function bi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ge(e[s], t[s]);
  return n;
}
function xs(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), s = new Uint8Array(n.length);
  for (const r of e) {
    let i = -1;
    for (let l = 0; l < n.length; l++)
      if (!s[l] && Ge(r, n[l])) {
        i = l;
        break;
      }
    if (i < 0) return !1;
    s[i] = 1;
  }
  return !0;
}
function Ge(e, t) {
  if (e === t) return !0;
  let n = _s(e), s = _s(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Fe(e), s = Fe(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? bi(e, t) : !1;
  if (n = q(e), s = q(t), n || s) {
    if (!n || !s)
      return !1;
    if (n = ze(e), s = ze(t), n || s || (n = ut(e), s = ut(t), n || s))
      return n && s ? xs(e, t) : !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (o && !c || !o && c || !Ge(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yi(e, t) {
  return e.findIndex((n) => Ge(n, t));
}
const ir = (e) => !!(e && e.__v_isRef === !0), H = (e) => Z(e) ? e : e == null ? "" : I(e) || q(e) && (e.toString === er || !D(e.toString)) ? ir(e) ? H(e.value) : JSON.stringify(e, lr, 2) : String(e), lr = (e, t) => ir(t) ? lr(e, t.value) : ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[On(s, i) + " =>"] = r, n),
    {}
  )
} : ut(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => On(n))
} : Fe(t) ? On(t) : q(t) && !I(t) && !tr(t) ? String(t) : t, On = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let se;
class _i {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && se && (se.active ? (this.parent = se, this.index = (se.scopes || (se.scopes = [])).push(
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
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].pause();
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = se;
      try {
        return se = this, t();
      } finally {
        se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = se, se = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (se === this)
        se = this.prevScope;
      else {
        let t = se;
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
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (n = 0, s = r.length; n < s; n++)
          r[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function vi() {
  return se;
}
let J;
const Pn = /* @__PURE__ */ new WeakSet();
class or {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, se && (se.active ? se.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pn.has(this) && (Pn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ur(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ss(this), ar(this);
    const t = J, n = ye;
    J = this, ye = !0;
    try {
      return this.fn();
    } finally {
      fr(this), J = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rs(t);
      this.deps = this.depsTail = void 0, Ss(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hn(this) && this.run();
  }
  get dirty() {
    return Hn(this);
  }
}
let cr = 0, Pt, Mt;
function ur(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mt, Mt = e;
    return;
  }
  e.next = Pt, Pt = e;
}
function ns() {
  cr++;
}
function ss() {
  if (--cr > 0)
    return;
  if (Mt) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Pt; ) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), rs(s), xi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Hn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (dr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function dr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nt) || (e.globalVersion = Nt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = J, s = ye;
  J = e, ye = !0;
  try {
    ar(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ue(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    J = n, ye = s, fr(e), e.flags &= -3;
  }
}
function rs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      rs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const pr = [];
function Le() {
  pr.push(ye), ye = !1;
}
function He() {
  const e = pr.pop();
  ye = e === void 0 ? !0 : e;
}
function Ss(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = J;
    J = void 0;
    try {
      t();
    } finally {
      J = n;
    }
  }
}
let Nt = 0;
class Si {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class hr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!J || !ye || J === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      n = this.activeLink = new Si(J, this), J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, gr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = J.depsTail, n.nextDep = void 0, J.depsTail.nextDep = n, J.depsTail = n, J.deps === n && (J.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Nt++, this.notify(t);
  }
  notify(t) {
    ns();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ss();
    }
  }
}
function gr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        gr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Kn = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ Symbol(
  ""
), Bn = /* @__PURE__ */ Symbol(
  ""
), Dt = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (ye && J) {
    let s = Kn.get(e);
    s || Kn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new hr()), r.map = s, r.key = n), r.track();
  }
}
function Ve(e, t, n, s, r, i) {
  const l = Kn.get(e);
  if (!l) {
    Nt++;
    return;
  }
  const o = (c) => {
    c && c.trigger();
  };
  if (ns(), t === "clear")
    l.forEach(o);
  else {
    const c = I(e), d = c && Qn(n);
    if (c && n === "length") {
      const f = Number(s);
      l.forEach((g, S) => {
        (S === "length" || S === Dt || !Fe(S) && S >= f) && o(g);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), d && o(l.get(Dt)), t) {
        case "add":
          c ? d && o(l.get("length")) : (o(l.get(lt)), ze(e) && o(l.get(Bn)));
          break;
        case "delete":
          c || (o(l.get(lt)), ze(e) && o(l.get(Bn)));
          break;
        case "set":
          ze(e) && o(l.get(lt));
          break;
      }
  }
  ss();
}
function ft(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (re(t, "iterate", Dt), /* @__PURE__ */ _e(e) ? t : t.map(Ke));
}
function bn(e) {
  return re(e = /* @__PURE__ */ W(e), "iterate", Dt), e;
}
function Pe(e, t) {
  return /* @__PURE__ */ Je(e) ? bt(/* @__PURE__ */ ot(e) ? Ke(t) : t) : Ke(t);
}
const Ci = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mn(this, Symbol.iterator, (e) => Pe(this, e));
  },
  concat(...e) {
    return ft(this).concat(
      ...e.map((t) => I(t) ? ft(t) : t)
    );
  },
  entries() {
    return Mn(this, "entries", (e) => (e[1] = Pe(this, e[1]), e));
  },
  every(e, t) {
    return Ie(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ie(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Pe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ie(
      this,
      "find",
      e,
      t,
      (n) => Pe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ie(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ie(
      this,
      "findLast",
      e,
      t,
      (n) => Pe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ie(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ie(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Rn(this, "includes", e);
  },
  indexOf(...e) {
    return Rn(this, "indexOf", e);
  },
  join(e) {
    return ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Rn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ie(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ct(this, "pop");
  },
  push(...e) {
    return Ct(this, "push", e);
  },
  reduce(e, ...t) {
    return Cs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cs(this, "reduceRight", e, t);
  },
  shift() {
    return Ct(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ie(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ct(this, "splice", e);
  },
  toReversed() {
    return ft(this).toReversed();
  },
  toSorted(e) {
    return ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ct(this, "unshift", e);
  },
  values() {
    return Mn(this, "values", (e) => Pe(this, e));
  }
};
function Mn(e, t, n) {
  const s = bn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ _e(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const wi = Array.prototype;
function Ie(e, t, n, s, r, i) {
  const l = bn(e), o = l !== e && !/* @__PURE__ */ _e(e), c = l[t];
  if (c !== wi[t]) {
    const g = c.apply(e, i);
    return o ? Ke(g) : g;
  }
  let d = n;
  l !== e && (o ? d = function(g, S) {
    return n.call(this, Pe(e, g), S, e);
  } : n.length > 2 && (d = function(g, S) {
    return n.call(this, g, S, e);
  }));
  const f = c.call(l, d, s);
  return o && r ? r(f) : f;
}
function Cs(e, t, n, s) {
  const r = bn(e), i = r !== e && !/* @__PURE__ */ _e(e);
  let l = n, o = !1;
  r !== e && (i ? (o = s.length === 0, l = function(d, f, g) {
    return o && (o = !1, d = Pe(e, d)), n.call(this, d, Pe(e, f), g, e);
  }) : n.length > 3 && (l = function(d, f, g) {
    return n.call(this, d, f, g, e);
  }));
  const c = r[t](l, ...s);
  return o ? Pe(e, c) : c;
}
function Rn(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  re(s, "iterate", Dt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ os(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : r;
}
function Ct(e, t, n = []) {
  Le(), ns();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return ss(), He(), s;
}
const Ei = /* @__PURE__ */ Xn("__proto__,__v_isRef,__isVue"), mr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
);
function Ti(e) {
  Fe(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class br {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Ui : xr : i ? vr : _r).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = I(t);
    if (!r) {
      let c;
      if (l && (c = Ci[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ti;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ae(t) ? t : s
    );
    if ((Fe(n) ? mr.has(n) : Ei(n)) || (r || re(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ ae(o)) {
      const c = l && Qn(n) ? o : o.value;
      return r && q(c) ? /* @__PURE__ */ qn(c) : c;
    }
    return q(o) ? r ? /* @__PURE__ */ qn(o) : /* @__PURE__ */ yn(o) : o;
  }
}
class yr extends br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const l = I(t) && Qn(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Je(i);
      if (!/* @__PURE__ */ _e(s) && !/* @__PURE__ */ Je(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !l && /* @__PURE__ */ ae(i) && !/* @__PURE__ */ ae(s))
        return d || (i.value = s), !0;
    }
    const o = l ? Number(n) < t.length : K(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ae(t) ? t : r
    );
    return t === /* @__PURE__ */ W(r) && c && (o ? Ue(s, i) && Ve(t, "set", n, s) : Ve(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = K(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ve(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Fe(n) || !mr.has(n)) && re(t, "has", n), s;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      I(t) ? "length" : lt
    ), Reflect.ownKeys(t);
  }
}
class Ai extends br {
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
const Oi = /* @__PURE__ */ new yr(), Pi = /* @__PURE__ */ new Ai(), Mi = /* @__PURE__ */ new yr(!0);
const Wn = (e) => e, Gt = (e) => Reflect.getPrototypeOf(e);
function Ri(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = ze(i), o = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = r[e](...s), f = n ? Wn : t ? bt : Ke;
    return !t && re(
      i,
      "iterate",
      c ? Bn : lt
    ), ie(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: g, done: S } = d.next();
          return S ? { value: g, done: S } : {
            value: o ? [f(g[0]), f(g[1])] : f(g),
            done: S
          };
        }
      }
    );
  };
}
function Jt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fi(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      e || (Ue(r, o) && re(l, "get", r), re(l, "get", o));
      const { has: c } = Gt(l), d = t ? Wn : e ? bt : Ke;
      if (c.call(l, r))
        return d(i.get(r));
      if (c.call(l, o))
        return d(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && re(/* @__PURE__ */ W(r), "iterate", lt), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      return e || (Ue(r, o) && re(l, "has", r), re(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, c = /* @__PURE__ */ W(o), d = t ? Wn : e ? bt : Ke;
      return !e && re(c, "iterate", lt), o.forEach((f, g) => r.call(i, d(f), d(g), l));
    }
  };
  return ie(
    n,
    e ? {
      add: Jt("add"),
      set: Jt("set"),
      delete: Jt("delete"),
      clear: Jt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ W(this), l = Gt(i), o = /* @__PURE__ */ W(r), c = !t && !/* @__PURE__ */ _e(r) && !/* @__PURE__ */ Je(r) ? o : r;
        return l.has.call(i, c) || Ue(r, c) && l.has.call(i, r) || Ue(o, c) && l.has.call(i, o) || (i.add(c), Ve(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ _e(i) && !/* @__PURE__ */ Je(i) && (i = /* @__PURE__ */ W(i));
        const l = /* @__PURE__ */ W(this), { has: o, get: c } = Gt(l);
        let d = o.call(l, r);
        d || (r = /* @__PURE__ */ W(r), d = o.call(l, r));
        const f = c.call(l, r);
        return l.set(r, i), d ? Ue(i, f) && Ve(l, "set", r, i) : Ve(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ W(this), { has: l, get: o } = Gt(i);
        let c = l.call(i, r);
        c || (r = /* @__PURE__ */ W(r), c = l.call(i, r)), o && o.call(i, r);
        const d = i.delete(r);
        return c && Ve(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ W(this), i = r.size !== 0, l = r.clear();
        return i && Ve(
          r,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ri(r, e, t);
  }), n;
}
function is(e, t) {
  const n = Fi(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    K(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Ii = {
  get: /* @__PURE__ */ is(!1, !1)
}, Ni = {
  get: /* @__PURE__ */ is(!1, !0)
}, Di = {
  get: /* @__PURE__ */ is(!0, !1)
};
const _r = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap();
function Vi(e) {
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
function yn(e) {
  return /* @__PURE__ */ Je(e) ? e : ls(
    e,
    !1,
    Oi,
    Ii,
    _r
  );
}
// @__NO_SIDE_EFFECTS__
function $i(e) {
  return ls(
    e,
    !1,
    Mi,
    Ni,
    vr
  );
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return ls(
    e,
    !0,
    Pi,
    Di,
    xr
  );
}
function ls(e, t, n, s, r) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = Vi(ci(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return /* @__PURE__ */ Je(e) ? /* @__PURE__ */ ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function ji(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && sr(e, "__v_skip", !0), e;
}
const Ke = (e) => q(e) ? /* @__PURE__ */ yn(e) : e, bt = (e) => q(e) ? /* @__PURE__ */ qn(e) : e;
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Li(e) {
  return /* @__PURE__ */ ae(e) ? e.value : e;
}
const Hi = {
  get: (e, t, n) => t === "__v_raw" ? e : Li(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ ae(r) && !/* @__PURE__ */ ae(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Sr(e) {
  return /* @__PURE__ */ ot(e) ? e : new Proxy(e, Hi);
}
class Ki {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new hr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return ur(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return dr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t, n = !1) {
  let s, r;
  return D(e) ? s = e : (s = e.get, r = e.set), new Ki(s, r, n);
}
const Yt = {}, nn = /* @__PURE__ */ new WeakMap();
let nt;
function Wi(e, t = !1, n = nt) {
  if (n) {
    let s = nn.get(n);
    s || nn.set(n, s = []), s.push(e);
  }
}
function qi(e, t, n = z) {
  const { immediate: s, deep: r, once: i, scheduler: l, augmentJob: o, call: c } = n, d = (R) => r ? R : /* @__PURE__ */ _e(R) || r === !1 || r === 0 ? $e(R, 1) : $e(R);
  let f, g, S, T, U = !1, O = !1;
  if (/* @__PURE__ */ ae(e) ? (g = () => e.value, U = /* @__PURE__ */ _e(e)) : /* @__PURE__ */ ot(e) ? (g = () => d(e), U = !0) : I(e) ? (O = !0, U = e.some((R) => /* @__PURE__ */ ot(R) || /* @__PURE__ */ _e(R)), g = () => e.map((R) => {
    if (/* @__PURE__ */ ae(R))
      return R.value;
    if (/* @__PURE__ */ ot(R))
      return d(R);
    if (D(R))
      return c ? c(R, 2) : R();
  })) : D(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (S) {
      Le();
      try {
        S();
      } finally {
        He();
      }
    }
    const R = nt;
    nt = f;
    try {
      return c ? c(e, 3, [T]) : e(T);
    } finally {
      nt = R;
    }
  } : g = Re, t && r) {
    const R = g, Y = r === !0 ? 1 / 0 : r;
    g = () => $e(R(), Y);
  }
  const p = vi(), m = () => {
    f.stop(), p && p.active && Zn(p.effects, f);
  };
  if (i && t) {
    const R = t;
    t = (...Y) => {
      const fe = R(...Y);
      return m(), fe;
    };
  }
  let P = O ? new Array(e.length).fill(Yt) : Yt;
  const L = (R) => {
    if (!(!(f.flags & 1) || !f.dirty && !R))
      if (t) {
        const Y = f.run();
        if (R || r || U || (O ? Y.some((fe, xe) => Ue(fe, P[xe])) : Ue(Y, P))) {
          S && S();
          const fe = nt;
          nt = f;
          try {
            const xe = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              P === Yt ? void 0 : O && P[0] === Yt ? [] : P,
              T
            ];
            P = Y, c ? c(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            nt = fe;
          }
        }
      } else
        f.run();
  };
  return o && o(L), f = new or(g), f.scheduler = l ? () => l(L, !1) : L, T = (R) => Wi(R, !1, f), S = f.onStop = () => {
    const R = nn.get(f);
    if (R) {
      if (c)
        c(R, 4);
      else
        for (const Y of R) Y();
      nn.delete(f);
    }
  }, t ? s ? L(!0) : P = f.run() : l ? l(L.bind(null, !0), !0) : f.run(), m.pause = f.pause.bind(f), m.resume = f.resume.bind(f), m.stop = m, m;
}
function $e(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ae(e))
    $e(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      $e(e[s], t, n);
  else if (ut(e) || ze(e))
    e.forEach((s) => {
      $e(s, t, n);
    });
  else if (tr(e)) {
    for (const s in e)
      $e(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && $e(e[s], t, n);
  }
  return e;
}
function Ht(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    _n(r, t, n);
  }
}
function ve(e, t, n, s) {
  if (D(e)) {
    const r = Ht(e, t, n, s);
    return r && Qs(r) && r.catch((i) => {
      _n(i, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ve(e[i], t, n, s));
    return r;
  }
}
function _n(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || z;
  if (t) {
    let o = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let g = 0; g < f.length; g++)
          if (f[g](e, c, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      Le(), Ht(i, null, 10, [
        e,
        c,
        d
      ]), He();
      return;
    }
  }
  ki(e, n, r, s, l);
}
function ki(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ce = [];
let Oe = -1;
const gt = [];
let ke = null, pt = 0;
const Cr = /* @__PURE__ */ Promise.resolve();
let sn = null;
function wr(e) {
  const t = sn || Cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zi(e) {
  let t = Oe + 1, n = ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ce[s], i = Ut(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function cs(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = ce[ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? ce.push(e) : ce.splice(zi(t), 0, e), e.flags |= 1, Er();
  }
}
function Er() {
  sn || (sn = Cr.then(Ar));
}
function Gi(e) {
  if (!I(e))
    ke && e.id === -1 ? ke.splice(pt + 1, 0, e) : e.flags & 1 || (gt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      gt.push(e[t]);
  Er();
}
function ws(e, t, n = Oe + 1) {
  for (; n < ce.length; n++) {
    const s = ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Tr(e) {
  if (gt.length) {
    const t = [...new Set(gt)].sort(
      (n, s) => Ut(n) - Ut(s)
    );
    if (gt.length = 0, ke) {
      for (let n = 0; n < t.length; n++)
        ke.push(t[n]);
      return;
    }
    for (ke = t, pt = 0; pt < ke.length; pt++) {
      const n = ke[pt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ke = null, pt = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ar(e) {
  try {
    for (Oe = 0; Oe < ce.length; Oe++) {
      const t = ce[Oe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ht(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Oe < ce.length; Oe++) {
      const t = ce[Oe];
      t && (t.flags &= -2);
    }
    Oe = -1, ce.length = 0, Tr(), sn = null, (ce.length || gt.length) && Ar();
  }
}
let me = null, Or = null;
function rn(e) {
  const t = me;
  return me = e, Or = e && e.type.__scopeId || null, t;
}
function Ji(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ds(-1);
    const i = rn(t), l = ct.length;
    let o;
    try {
      o = e(...r);
    } finally {
      for (let c = ct.length; c > l; c--) Zr();
      rn(i), s._d && Ds(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Qe(e, t) {
  if (me === null)
    return e;
  const n = wn(me), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, c = z] = t[r];
    i && (D(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && $e(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: c
    }));
  }
  return e;
}
function et(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let c = o.dir[s];
    c && (Le(), ve(c, n, 8, [
      e.el,
      o,
      e,
      t
    ]), He());
  }
}
function Yi(e, t) {
  if (ue) {
    let n = ue.provides;
    const s = ue.parent && ue.parent.provides;
    s === n && (n = ue.provides = Object.create(s)), n[e] = t;
  }
}
function en(e, t, n = !1) {
  const s = Gl();
  if (s || mt) {
    let r = mt ? mt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s && s.proxy) : t;
  }
}
const Xi = /* @__PURE__ */ Symbol.for("v-scx"), Zi = () => en(Xi);
function Fn(e, t, n) {
  return Pr(e, t, n);
}
function Pr(e, t, n = z) {
  const { immediate: s, deep: r, flush: i, once: l } = n, o = ie({}, n), c = t && s || !t && i !== "post";
  let d;
  if (jt) {
    if (i === "sync") {
      const T = Zi();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!c) {
      const T = () => {
      };
      return T.stop = Re, T.resume = Re, T.pause = Re, T;
    }
  }
  const f = ue;
  o.call = (T, U, O) => ve(T, f, U, O);
  let g = !1;
  i === "post" ? o.scheduler = (T) => {
    de(T, f && f.suspense);
  } : i !== "sync" && (g = !0, o.scheduler = (T, U) => {
    U ? T() : cs(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), g && (T.flags |= 2, f && (T.id = f.uid, T.i = f));
  };
  const S = qi(e, t, o);
  return jt && (d ? d.push(S) : c && S()), S;
}
function Qi(e, t, n) {
  const s = this.proxy, r = Z(e) ? e.includes(".") ? Mr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  D(t) ? i = t : (i = t.handler, n = t);
  const l = Kt(this), o = Pr(r, i.bind(s), n);
  return l(), o;
}
function Mr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const el = /* @__PURE__ */ Symbol("_vte"), vn = (e) => e.__isTeleport, In = /* @__PURE__ */ Symbol("_leaveCb");
function tl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Be) {
        t = n;
        break;
      }
  }
  return t;
}
function Rr(e) {
  if (!as(e))
    return vn(e.type) && e.children ? tl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && D(n.default))
      return n.default();
  }
}
function us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    us(
      vn(n.type) && Rr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Es(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ln = /* @__PURE__ */ new WeakMap();
function Rt(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (O, p) => Rt(
        O,
        t && (I(t) ? t[p] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Ft(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Rt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? wn(s.component) : s.el, l = r ? null : i, { i: o, r: c } = e, d = t && t.r, f = o.refs === z ? o.refs = {} : o.refs, g = o.setupState, S = /* @__PURE__ */ W(g), T = g === z ? Zs : (O) => Es(f, O) ? !1 : K(S, O), U = (O, p) => !(p && Es(f, p));
  if (d != null && d !== c) {
    if (Ts(t), Z(d))
      f[d] = null, T(d) && (g[d] = null);
    else if (/* @__PURE__ */ ae(d)) {
      const O = t;
      U(d, O.k) && (d.value = null), O.k && (f[O.k] = null);
    }
  }
  if (D(c))
    Ht(c, o, 12, [l, f]);
  else {
    const O = Z(c), p = /* @__PURE__ */ ae(c);
    if (O || p) {
      const m = () => {
        if (e.f) {
          const P = O ? T(c) ? g[c] : f[c] : U() || !e.k ? c.value : f[e.k];
          if (r)
            I(P) && Zn(P, i);
          else if (I(P))
            P.includes(i) || P.push(i);
          else if (O)
            f[c] = [i], T(c) && (g[c] = f[c]);
          else {
            const L = [i];
            U(c, e.k) && (c.value = L), e.k && (f[e.k] = L);
          }
        } else O ? (f[c] = l, T(c) && (g[c] = l)) : p && (U(c, e.k) && (c.value = l), e.k && (f[e.k] = l));
      };
      if (l) {
        const P = () => {
          m(), ln.delete(e);
        };
        P.id = -1, ln.set(e, P), de(P, n);
      } else
        Ts(e), m();
    }
  }
}
function Ts(e) {
  const t = ln.get(e);
  t && (t.flags |= 8, ln.delete(e));
}
mn().requestIdleCallback;
mn().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, as = (e) => e.type.__isKeepAlive;
function nl(e, t) {
  Ir(e, "a", t);
}
function sl(e, t) {
  Ir(e, "da", t);
}
function Ir(e, t, n = ue) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      as(r.parent.vnode) && rl(s, t, n, r), r = r.parent;
  }
}
function rl(e, t, n, s) {
  const r = xn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Nr(() => {
    Zn(s[t], r);
  }, n);
}
function xn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      Le();
      const o = Kt(n), c = ve(t, n, e, l);
      return o(), He(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const We = (e) => (t, n = ue) => {
  (!jt || e === "sp") && xn(e, (...s) => t(...s), n);
}, il = We("bm"), ll = We("m"), ol = We(
  "bu"
), cl = We("u"), ul = We(
  "bum"
), Nr = We("um"), al = We(
  "sp"
), fl = We("rtg"), dl = We("rtc");
function pl(e, t = ue) {
  xn("ec", e, t);
}
const hl = /* @__PURE__ */ Symbol.for("v-ndc");
function Te(e, t, n, s) {
  let r;
  const i = n, l = I(e);
  if (l || Z(e)) {
    const o = l && /* @__PURE__ */ ot(e);
    let c = !1, d = !1;
    o && (c = !/* @__PURE__ */ _e(e), d = /* @__PURE__ */ Je(e), e = bn(e)), r = new Array(e.length);
    for (let f = 0, g = e.length; f < g; f++)
      r[f] = t(
        c ? d ? bt(Ke(e[f])) : Ke(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (q(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, c) => t(o, c, void 0, i)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let c = 0, d = o.length; c < d; c++) {
        const f = o[c];
        r[c] = t(e[f], f, c, i);
      }
    }
  else
    r = [];
  return r;
}
const kn = (e) => e ? ni(e) ? wn(e) : kn(e.parent) : null, It = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => kn(e.parent),
    $root: (e) => kn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ur(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wr.bind(e.proxy)),
    $watch: (e) => Qi.bind(e)
  })
), Nn = (e, t) => e !== z && !e.__isScriptSetup && K(e, t), gl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: l, type: o, appContext: c } = e;
    if (t[0] !== "$") {
      const S = l[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Nn(s, t))
          return l[t] = 1, s[t];
        if (r !== z && K(r, t))
          return l[t] = 2, r[t];
        if (K(i, t))
          return l[t] = 3, i[t];
        if (n !== z && K(n, t))
          return l[t] = 4, n[t];
        zn && (l[t] = 0);
      }
    }
    const d = It[t];
    let f, g;
    if (d)
      return t === "$attrs" && re(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (f = o.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== z && K(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, K(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Nn(r, t) ? (r[t] = n, !0) : s !== z && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: l }
  }, o) {
    let c;
    return !!(n[o] || e !== z && o[0] !== "$" && K(e, o) || Nn(t, o) || K(i, o) || K(s, o) || K(It, o) || K(r.config.globalProperties, o) || (c = l.__cssModules) && c[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function As(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let zn = !0;
function ml(e) {
  const t = Ur(e), n = e.proxy, s = e.ctx;
  zn = !1, t.beforeCreate && Os(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: c,
    inject: d,
    // lifecycle
    created: f,
    beforeMount: g,
    mounted: S,
    beforeUpdate: T,
    updated: U,
    activated: O,
    deactivated: p,
    beforeDestroy: m,
    beforeUnmount: P,
    destroyed: L,
    unmounted: R,
    render: Y,
    renderTracked: fe,
    renderTriggered: xe,
    errorCaptured: qe,
    serverPrefetch: Bt,
    // public API
    expose: Ye,
    inheritAttrs: _t,
    // assets
    components: Wt,
    directives: qt,
    filters: En
  } = t;
  if (d && bl(d, s, null), l)
    for (const X in l) {
      const G = l[X];
      D(G) && (s[X] = G.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    q(X) && (e.data = /* @__PURE__ */ yn(X));
  }
  if (zn = !0, i)
    for (const X in i) {
      const G = i[X], Xe = D(G) ? G.bind(n, n) : D(G.get) ? G.get.bind(n, n) : Re, kt = !D(G) && D(G.set) ? G.set.bind(n) : Re, Ze = st({
        get: Xe,
        set: kt
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Ze.value,
        set: (Se) => Ze.value = Se
      });
    }
  if (o)
    for (const X in o)
      Dr(o[X], s, n, X);
  if (c) {
    const X = D(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((G) => {
      Yi(G, X[G]);
    });
  }
  f && Os(f, e, "c");
  function le(X, G) {
    I(G) ? G.forEach((Xe) => X(Xe.bind(n))) : G && X(G.bind(n));
  }
  if (le(il, g), le(ll, S), le(ol, T), le(cl, U), le(nl, O), le(sl, p), le(pl, qe), le(dl, fe), le(fl, xe), le(ul, P), le(Nr, R), le(al, Bt), I(Ye))
    if (Ye.length) {
      const X = e.exposed || (e.exposed = {});
      Ye.forEach((G) => {
        Object.defineProperty(X, G, {
          get: () => n[G],
          set: (Xe) => n[G] = Xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Re && (e.render = Y), _t != null && (e.inheritAttrs = _t), Wt && (e.components = Wt), qt && (e.directives = qt), Bt && Fr(e);
}
function bl(e, t, n = Re) {
  I(e) && (e = Gn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    q(r) ? "default" in r ? i = en(
      r.from || s,
      r.default,
      !0
    ) : i = en(r.from || s) : i = en(r), /* @__PURE__ */ ae(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function Os(e, t, n) {
  ve(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Dr(e, t, n, s) {
  let r = s.includes(".") ? Mr(n, s) : () => n[s];
  if (Z(e)) {
    const i = t[e];
    D(i) && Fn(r, i);
  } else if (D(e))
    Fn(r, e.bind(n));
  else if (q(e))
    if (I(e))
      e.forEach((i) => Dr(i, t, n, s));
    else {
      const i = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(i) && Fn(r, i, e);
    }
}
function Ur(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let c;
  return o ? c = o : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (d) => on(c, d, l, !0)
  ), on(c, t, l)), q(t) && i.set(t, c), c;
}
function on(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && on(e, i, n, !0), r && r.forEach(
    (l) => on(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = yl[l] || n && n[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const yl = {
  data: Ps,
  props: Ms,
  emits: Ms,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: vl,
  // provide / inject
  provide: Ps,
  inject: _l
};
function Ps(e, t) {
  return t ? e ? function() {
    return ie(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _l(e, t) {
  return Tt(Gn(e), Gn(t));
}
function Gn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ms(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    As(e),
    As(t ?? {})
  ) : t;
}
function vl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = oe(e[s], t[s]);
  return n;
}
function Vr() {
  return {
    app: null,
    config: {
      isNativeTag: Zs,
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
let xl = 0;
function Sl(e, t) {
  return function(s, r = null) {
    D(s) || (s = ie({}, s)), r != null && !q(r) && (r = null);
    const i = Vr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let c = !1;
    const d = i.app = {
      _uid: xl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: eo,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...g) {
        return l.has(f) || (f && D(f.install) ? (l.add(f), f.install(d, ...g)) : D(f) && (l.add(f), f(d, ...g))), d;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), d;
      },
      component(f, g) {
        return g ? (i.components[f] = g, d) : i.components[f];
      },
      directive(f, g) {
        return g ? (i.directives[f] = g, d) : i.directives[f];
      },
      mount(f, g, S) {
        if (!c) {
          const T = d._ceVNode || je(s, r);
          return T.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(T, f, S), c = !0, d._container = f, f.__vue_app__ = d, wn(T.component);
        }
      },
      onUnmount(f) {
        o.push(f);
      },
      unmount() {
        c && (ve(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(f, g) {
        return i.provides[f] = g, d;
      },
      runWithContext(f) {
        const g = mt;
        mt = d;
        try {
          return f();
        } finally {
          mt = g;
        }
      }
    };
    return d;
  };
}
let mt = null;
const Cl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${at(t)}Modifiers`];
function wl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const i = t.startsWith("update:"), l = i && Cl(s, t.slice(7));
  l && (l.trim && (r = n.map((f) => Z(f) ? f.trim() : f)), l.number && (r = r.map(gn)));
  let o, c = s[o = An(t)] || // also try camelCase event handler (#2249)
  s[o = An(be(t))];
  !c && i && (c = s[o = An(at(t))]), c && ve(
    c,
    e,
    6,
    r
  );
  const d = s[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, ve(
      d,
      e,
      6,
      r
    );
  }
}
const El = /* @__PURE__ */ new WeakMap();
function $r(e, t, n = !1) {
  const s = n ? El : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!D(e)) {
    const c = (d) => {
      const f = $r(d, t, !0);
      f && (o = !0, ie(l, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !o ? (q(e) && s.set(e, null), null) : (I(i) ? i.forEach((c) => l[c] = null) : ie(l, i), q(e) && s.set(e, l), l);
}
function Sn(e, t) {
  return !e || !dn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, at(t)) || K(e, t));
}
function Rs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: c,
    render: d,
    renderCache: f,
    props: g,
    data: S,
    setupState: T,
    ctx: U,
    inheritAttrs: O
  } = e, p = rn(e);
  let m, P;
  try {
    if (n.shapeFlag & 4) {
      const R = r || s, Y = R;
      m = Me(
        d.call(
          Y,
          R,
          f,
          g,
          T,
          S,
          U
        )
      ), P = o;
    } else {
      const R = t;
      m = Me(
        R.length > 1 ? R(
          g,
          { attrs: o, slots: l, emit: c }
        ) : R(
          g,
          null
        )
      ), P = t.props ? o : Tl(o);
    }
  } catch (R) {
    ct.length = 0, _n(R, e, 1), m = je(Be);
  }
  let L = m;
  if (P && O !== !1) {
    const R = Object.keys(P), { shapeFlag: Y } = L;
    R.length && Y & 7 && (i && R.some(pn) && (P = Al(
      P,
      i
    )), L = yt(L, P, !1, !0));
  }
  if (n.dirs && (L = yt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const R = vn(L.type) && Rr(L) || L;
    us(R, n.transition);
  }
  return m = L, rn(p), m;
}
const Tl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || dn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Al = (e, t) => {
  const n = {};
  for (const s in e)
    (!pn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ol(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: l, children: o, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Fs(s, l, d) : !!l;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        const S = f[g];
        if (jr(l, s, S) && !Sn(d, S))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? Fs(s, l, d) : !0 : !!l;
  return !1;
}
function Fs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (jr(t, e, i) && !Sn(n, i))
      return !0;
  }
  return !1;
}
function jr(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && q(s) && q(r) ? !Ge(s, r) : s !== r;
}
function Pl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Lr = {}, Hr = () => Object.create(Lr), Kr = (e) => Object.getPrototypeOf(e) === Lr;
function Ml(e, t, n, s = !1) {
  const r = {}, i = Hr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Br(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ $i(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Rl(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ W(r), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const f = e.vnode.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        let S = f[g];
        if (Sn(e.emitsOptions, S))
          continue;
        const T = t[S];
        if (c)
          if (K(i, S))
            T !== i[S] && (i[S] = T, d = !0);
          else {
            const U = be(S);
            r[U] = Jn(
              c,
              o,
              U,
              T,
              e,
              !1
            );
          }
        else
          T !== i[S] && (i[S] = T, d = !0);
      }
    }
  } else {
    Br(e, t, r, i) && (d = !0);
    let f;
    for (const g in o)
      (!t || // for camelCase
      !K(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = at(g)) === g || !K(t, f))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[g] = Jn(
        c,
        o,
        g,
        void 0,
        e,
        !0
      )) : delete r[g]);
    if (i !== o)
      for (const g in i)
        (!t || !K(t, g)) && (delete i[g], d = !0);
  }
  d && Ve(e.attrs, "set", "");
}
function Br(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let c in t) {
      if (Ot(c))
        continue;
      const d = t[c];
      let f;
      r && K(r, f = be(c)) ? !i || !i.includes(f) ? n[f] = d : (o || (o = {}))[f] = d : Sn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, l = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ W(n), d = o || z;
    for (let f = 0; f < i.length; f++) {
      const g = i[f];
      n[g] = Jn(
        r,
        c,
        g,
        d[g],
        e,
        !K(d, g)
      );
    }
  }
  return l;
}
function Jn(e, t, n, s, r, i) {
  const l = e[n];
  if (l != null) {
    const o = K(l, "default");
    if (o && s === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && D(c)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const f = Kt(r);
          s = d[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !o ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === at(n)) && (s = !0));
  }
  return s;
}
const Fl = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n = !1) {
  const s = n ? Fl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let c = !1;
  if (!D(e)) {
    const f = (g) => {
      c = !0;
      const [S, T] = Wr(g, t, !0);
      ie(l, S), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return q(e) && s.set(e, ht), ht;
  if (I(i))
    for (let f = 0; f < i.length; f++) {
      const g = be(i[f]);
      Is(g) && (l[g] = z);
    }
  else if (i)
    for (const f in i) {
      const g = be(f);
      if (Is(g)) {
        const S = i[f], T = l[g] = I(S) || D(S) ? { type: S } : ie({}, S), U = T.type;
        let O = !1, p = !0;
        if (I(U))
          for (let m = 0; m < U.length; ++m) {
            const P = U[m], L = D(P) && P.name;
            if (L === "Boolean") {
              O = !0;
              break;
            } else L === "String" && (p = !1);
          }
        else
          O = D(U) && U.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = O, T[
          1
          /* shouldCastTrue */
        ] = p, (O || K(T, "default")) && o.push(g);
      }
    }
  const d = [l, o];
  return q(e) && s.set(e, d), d;
}
function Is(e) {
  return e[0] !== "$" && !Ot(e);
}
const fs = (e) => e === "_" || e === "_ctx" || e === "$stable", ds = (e) => I(e) ? e.map(Me) : [Me(e)], Il = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ji((...r) => ds(t(...r)), n);
  return s._c = !1, s;
}, qr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (fs(r)) continue;
    const i = e[r];
    if (D(i))
      t[r] = Il(r, i, s);
    else if (i != null) {
      const l = ds(i);
      t[r] = () => l;
    }
  }
}, kr = (e, t) => {
  const n = ds(t);
  e.slots.default = () => n;
}, zr = (e, t, n) => {
  for (const s in t)
    (n || !fs(s)) && (e[s] = t[s]);
}, Nl = (e, t, n) => {
  const s = e.slots = Hr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (zr(s, t, n), n && sr(s, "_", r, !0)) : qr(t, s);
  } else t && kr(e, t);
}, Dl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, l = z;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : zr(r, t, n) : (i = !t.$stable, qr(t, r)), l = t;
  } else t && (kr(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !fs(o) && l[o] == null && delete r[o];
}, de = Ll;
function Ul(e) {
  return Vl(e);
}
function Vl(e, t) {
  const n = mn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: o,
    createComment: c,
    setText: d,
    setElementText: f,
    parentNode: g,
    nextSibling: S,
    setScopeId: T = Re,
    insertStaticContent: U
  } = e, O = (u, a, h, x = null, v = null, y = null, E = void 0, w = null, C = !!a.dynamicChildren) => {
    if (u === a)
      return;
    u && !wt(u, a) && (x = zt(u), Se(u, v, y, !0), u = null), a.patchFlag === -2 && (C = !1, a.dynamicChildren = null);
    const { type: _, ref: F, shapeFlag: A } = a;
    switch (_) {
      case Cn:
        p(u, a, h, x);
        break;
      case Be:
        m(u, a, h, x);
        break;
      case Un:
        u == null && P(a, h, x, E);
        break;
      case te:
        Wt(
          u,
          a,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        );
        break;
      default:
        A & 1 ? Y(
          u,
          a,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        ) : A & 6 ? qt(
          u,
          a,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        ) : (A & 64 || A & 128) && _.process(
          u,
          a,
          h,
          x,
          v,
          y,
          E,
          w,
          C,
          xt
        );
    }
    F != null && v ? Rt(F, u && u.ref, y, a || u, !a) : F == null && u && u.ref != null && Rt(u.ref, null, y, u, !0);
  }, p = (u, a, h, x) => {
    if (u == null)
      s(
        a.el = o(a.children),
        h,
        x
      );
    else {
      const v = a.el = u.el;
      a.children !== u.children && d(v, a.children);
    }
  }, m = (u, a, h, x) => {
    u == null ? s(
      a.el = c(a.children || ""),
      h,
      x
    ) : a.el = u.el;
  }, P = (u, a, h, x) => {
    [u.el, u.anchor] = U(
      u.children,
      a,
      h,
      x,
      u.el,
      u.anchor
    );
  }, L = ({ el: u, anchor: a }, h, x) => {
    let v;
    for (; u && u !== a; )
      v = S(u), s(u, h, x), u = v;
    s(a, h, x);
  }, R = ({ el: u, anchor: a }) => {
    let h;
    for (; u && u !== a; )
      h = S(u), r(u), u = h;
    r(a);
  }, Y = (u, a, h, x, v, y, E, w, C) => {
    if (a.type === "svg" ? E = "svg" : a.type === "math" && (E = "mathml"), u == null)
      fe(
        a,
        h,
        x,
        v,
        y,
        E,
        w,
        C
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), Bt(
          u,
          a,
          v,
          y,
          E,
          w,
          C
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, fe = (u, a, h, x, v, y, E, w) => {
    let C, _;
    const { props: F, shapeFlag: A, transition: M, dirs: N } = u;
    if (C = u.el = l(
      u.type,
      y,
      F && F.is,
      F
    ), A & 8 ? f(C, u.children) : A & 16 && qe(
      u.children,
      C,
      null,
      x,
      v,
      Dn(u, y),
      E,
      w
    ), N && et(u, null, x, "created"), xe(C, u, u.scopeId, E, x), F) {
      for (const k in F)
        k !== "value" && !Ot(k) && i(C, k, null, F[k], y, x);
      "value" in F && i(C, "value", null, F.value, y), (_ = F.onVnodeBeforeMount) && Ae(_, x, u);
    }
    N && et(u, null, x, "beforeMount");
    const $ = $l(v, M);
    $ && M.beforeEnter(C), s(C, a, h), ((_ = F && F.onVnodeMounted) || $ || N) && de(() => {
      _ && Ae(_, x, u), $ && M.enter(C), N && et(u, null, x, "mounted");
    }, v);
  }, xe = (u, a, h, x, v) => {
    if (h && T(u, h), x)
      for (let y = 0; y < x.length; y++)
        T(u, x[y]);
    if (v) {
      let y = v.subTree;
      if (a === y || Xr(y.type) && (y.ssContent === a || y.ssFallback === a)) {
        const E = v.vnode;
        xe(
          u,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, qe = (u, a, h, x, v, y, E, w, C = 0) => {
    for (let _ = C; _ < u.length; _++) {
      const F = u[_] = w ? De(u[_]) : Me(u[_]);
      O(
        null,
        F,
        a,
        h,
        x,
        v,
        y,
        E,
        w
      );
    }
  }, Bt = (u, a, h, x, v, y, E) => {
    const w = a.el = u.el;
    let { patchFlag: C, dynamicChildren: _, dirs: F } = a;
    C |= u.patchFlag & 16;
    const A = u.props || z, M = a.props || z;
    let N;
    if (h && tt(h, !1), (N = M.onVnodeBeforeUpdate) && Ae(N, h, a, u), F && et(a, u, h, "beforeUpdate"), h && tt(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (C = 0, E = !1, _ = null), (A.innerHTML && M.innerHTML == null || A.textContent && M.textContent == null) && f(w, ""), _ ? Ye(
      u.dynamicChildren,
      _,
      w,
      h,
      x,
      Dn(a, v),
      y
    ) : E || G(
      u,
      a,
      w,
      null,
      h,
      x,
      Dn(a, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        _t(w, A, M, h, v);
      else if (C & 2 && A.class !== M.class && i(w, "class", null, M.class, v), C & 4 && i(w, "style", A.style, M.style, v), C & 8) {
        const $ = a.dynamicProps;
        for (let k = 0; k < $.length; k++) {
          const B = $[k], Q = A[B], ne = M[B];
          (ne !== Q || B === "value") && i(w, B, Q, ne, v, h);
        }
      }
      C & 1 && u.children !== a.children && f(w, a.children);
    } else !E && _ == null && _t(w, A, M, h, v);
    ((N = M.onVnodeUpdated) || F) && de(() => {
      N && Ae(N, h, a, u), F && et(a, u, h, "updated");
    }, x);
  }, Ye = (u, a, h, x, v, y, E) => {
    for (let w = 0; w < a.length; w++) {
      const C = u[w], _ = a[w], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wt(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      O(
        C,
        _,
        F,
        null,
        x,
        v,
        y,
        E,
        !0
      );
    }
  }, _t = (u, a, h, x, v) => {
    if (a !== h) {
      if (a !== z)
        for (const y in a)
          !Ot(y) && !(y in h) && i(
            u,
            y,
            a[y],
            null,
            v,
            x
          );
      for (const y in h) {
        if (Ot(y)) continue;
        const E = h[y], w = a[y];
        E !== w && y !== "value" && i(u, y, w, E, v, x);
      }
      "value" in h && i(u, "value", a.value, h.value, v);
    }
  }, Wt = (u, a, h, x, v, y, E, w, C) => {
    const _ = a.el = u ? u.el : o(""), F = a.anchor = u ? u.anchor : o("");
    let { patchFlag: A, dynamicChildren: M, slotScopeIds: N } = a;
    N && (w = w ? w.concat(N) : N), u == null ? (s(_, h, x), s(F, h, x), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      h,
      F,
      v,
      y,
      E,
      w,
      C
    )) : A > 0 && A & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === M.length ? (Ye(
      u.dynamicChildren,
      M,
      h,
      v,
      y,
      E,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || v && a === v.subTree) && Gr(
      u,
      a,
      !0
      /* shallow */
    )) : G(
      u,
      a,
      h,
      F,
      v,
      y,
      E,
      w,
      C
    );
  }, qt = (u, a, h, x, v, y, E, w, C) => {
    a.slotScopeIds = w, u == null ? a.shapeFlag & 512 ? v.ctx.activate(
      a,
      h,
      x,
      E,
      C
    ) : En(
      a,
      h,
      x,
      v,
      y,
      E,
      C
    ) : ps(u, a, C);
  }, En = (u, a, h, x, v, y, E) => {
    const w = u.component = zl(
      u,
      x,
      v
    );
    if (as(u) && (w.ctx.renderer = xt), Jl(w, !1, E), w.asyncDep) {
      if (v && v.registerDep(w, le, E), !u.el) {
        const C = w.subTree = je(Be);
        m(null, C, a, h), u.placeholder = C.el;
      }
    } else
      le(
        w,
        u,
        a,
        h,
        v,
        y,
        E
      );
  }, ps = (u, a, h) => {
    const x = a.component = u.component;
    if (Ol(u, a, h))
      if (x.asyncDep && !x.asyncResolved) {
        X(x, a, h);
        return;
      } else
        x.next = a, x.update();
    else
      a.el = u.el, x.vnode = a;
  }, le = (u, a, h, x, v, y, E) => {
    const w = () => {
      if (u.isMounted) {
        let { next: A, bu: M, u: N, parent: $, vnode: k } = u;
        {
          const we = Jr(u);
          if (we) {
            A && (A.el = k.el, X(u, A, E)), we.asyncDep.then(() => {
              de(() => {
                u.isUnmounted || _();
              }, v);
            });
            return;
          }
        }
        let B = A, Q;
        tt(u, !1), A ? (A.el = k.el, X(u, A, E)) : A = k, M && Qt(M), (Q = A.props && A.props.onVnodeBeforeUpdate) && Ae(Q, $, A, k), tt(u, !0);
        const ne = Rs(u), Ce = u.subTree;
        u.subTree = ne, O(
          Ce,
          ne,
          // parent may have changed if it's in a teleport
          g(Ce.el),
          // anchor may have changed if it's in a fragment
          zt(Ce),
          u,
          v,
          y
        ), A.el = ne.el, B === null && Pl(u, ne.el), N && de(N, v), (Q = A.props && A.props.onVnodeUpdated) && de(
          () => Ae(Q, $, A, k),
          v
        );
      } else {
        let A;
        const { el: M, props: N } = a, { bm: $, m: k, parent: B, root: Q, type: ne } = u, Ce = Ft(a);
        tt(u, !1), $ && Qt($), !Ce && (A = N && N.onVnodeBeforeMount) && Ae(A, B, a), tt(u, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            ne,
            u.parent ? u.parent.type : void 0
          );
          const we = u.subTree = Rs(u);
          O(
            null,
            we,
            h,
            x,
            u,
            v,
            y
          ), a.el = we.el;
        }
        if (k && de(k, v), !Ce && (A = N && N.onVnodeMounted)) {
          const we = a;
          de(
            () => Ae(A, B, we),
            v
          );
        }
        (a.shapeFlag & 256 || B && Ft(B.vnode) && B.vnode.shapeFlag & 256) && u.a && de(u.a, v), u.isMounted = !0, a = h = x = null;
      }
    };
    u.scope.on();
    const C = u.effect = new or(w);
    u.scope.off();
    const _ = u.update = C.run.bind(C), F = u.job = C.runIfDirty.bind(C);
    F.i = u, F.id = u.uid, C.scheduler = () => cs(F), tt(u, !0), _();
  }, X = (u, a, h) => {
    a.component = u;
    const x = u.vnode.props;
    u.vnode = a, u.next = null, Rl(u, a.props, x, h), Dl(u, a.children, h), Le(), ws(u), He();
  }, G = (u, a, h, x, v, y, E, w, C = !1) => {
    const _ = u && u.children, F = u ? u.shapeFlag : 0, A = a.children, { patchFlag: M, shapeFlag: N } = a;
    if (M > 0) {
      if (M & 128) {
        kt(
          _,
          A,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        );
        return;
      } else if (M & 256) {
        Xe(
          _,
          A,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        );
        return;
      }
    }
    N & 8 ? (F & 16 && vt(_, v, y), A !== _ && f(h, A)) : F & 16 ? N & 16 ? kt(
      _,
      A,
      h,
      x,
      v,
      y,
      E,
      w,
      C
    ) : vt(_, v, y, !0) : (F & 8 && f(h, ""), N & 16 && qe(
      A,
      h,
      x,
      v,
      y,
      E,
      w,
      C
    ));
  }, Xe = (u, a, h, x, v, y, E, w, C) => {
    u = u || ht, a = a || ht;
    const _ = u.length, F = a.length, A = Math.min(_, F);
    let M;
    for (M = 0; M < A; M++) {
      const N = a[M] = C ? De(a[M]) : Me(a[M]);
      O(
        u[M],
        N,
        h,
        null,
        v,
        y,
        E,
        w,
        C
      );
    }
    _ > F ? vt(
      u,
      v,
      y,
      !0,
      !1,
      A
    ) : qe(
      a,
      h,
      x,
      v,
      y,
      E,
      w,
      C,
      A
    );
  }, kt = (u, a, h, x, v, y, E, w, C) => {
    let _ = 0;
    const F = a.length;
    let A = u.length - 1, M = F - 1;
    for (; _ <= A && _ <= M; ) {
      const N = u[_], $ = a[_] = C ? De(a[_]) : Me(a[_]);
      if (wt(N, $))
        O(
          N,
          $,
          h,
          null,
          v,
          y,
          E,
          w,
          C
        );
      else
        break;
      _++;
    }
    for (; _ <= A && _ <= M; ) {
      const N = u[A], $ = a[M] = C ? De(a[M]) : Me(a[M]);
      if (wt(N, $))
        O(
          N,
          $,
          h,
          null,
          v,
          y,
          E,
          w,
          C
        );
      else
        break;
      A--, M--;
    }
    if (_ > A) {
      if (_ <= M) {
        const N = M + 1, $ = N < F ? a[N].el : x;
        for (; _ <= M; )
          O(
            null,
            a[_] = C ? De(a[_]) : Me(a[_]),
            h,
            $,
            v,
            y,
            E,
            w,
            C
          ), _++;
      }
    } else if (_ > M)
      for (; _ <= A; )
        Se(u[_], v, y, !0), _++;
    else {
      const N = _, $ = _, k = /* @__PURE__ */ new Map();
      for (_ = $; _ <= M; _++) {
        const pe = a[_] = C ? De(a[_]) : Me(a[_]);
        pe.key != null && k.set(pe.key, _);
      }
      let B, Q = 0;
      const ne = M - $ + 1;
      let Ce = !1, we = 0;
      const St = new Array(ne);
      for (_ = 0; _ < ne; _++) St[_] = 0;
      for (_ = N; _ <= A; _++) {
        const pe = u[_];
        if (Q >= ne) {
          Se(pe, v, y, !0);
          continue;
        }
        let Ee;
        if (pe.key != null)
          Ee = k.get(pe.key);
        else
          for (B = $; B <= M; B++)
            if (St[B - $] === 0 && wt(pe, a[B])) {
              Ee = B;
              break;
            }
        Ee === void 0 ? Se(pe, v, y, !0) : (St[Ee - $] = _ + 1, Ee >= we ? we = Ee : Ce = !0, O(
          pe,
          a[Ee],
          h,
          null,
          v,
          y,
          E,
          w,
          C
        ), Q++);
      }
      const ms = Ce ? jl(St) : ht;
      for (B = ms.length - 1, _ = ne - 1; _ >= 0; _--) {
        const pe = $ + _, Ee = a[pe], bs = a[pe + 1], ys = pe + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bs.el || Yr(bs)
        ) : x;
        St[_] === 0 ? O(
          null,
          Ee,
          h,
          ys,
          v,
          y,
          E,
          w,
          C
        ) : Ce && (B < 0 || _ !== ms[B] ? Ze(Ee, h, ys, 2) : B--);
      }
    }
  }, Ze = (u, a, h, x, v = null) => {
    const { el: y, type: E, transition: w, children: C, shapeFlag: _ } = u;
    if (_ & 6) {
      Ze(u.component.subTree, a, h, x);
      return;
    }
    if (_ & 128) {
      u.suspense.move(a, h, x);
      return;
    }
    if (_ & 64) {
      E.move(u, a, h, xt);
      return;
    }
    if (E === te) {
      s(y, a, h);
      for (let A = 0; A < C.length; A++)
        Ze(C[A], a, h, x);
      s(u.anchor, a, h);
      return;
    }
    if (E === Un) {
      L(u, a, h);
      return;
    }
    if (x !== 2 && _ & 1 && w)
      if (x === 0)
        w.persisted && !y[In] ? s(y, a, h) : (w.beforeEnter(y), s(y, a, h), de(() => w.enter(y), v));
      else {
        const { leave: A, delayLeave: M, afterLeave: N } = w, $ = () => {
          u.ctx.isUnmounted ? r(y) : s(y, a, h);
        }, k = () => {
          const B = y._isLeaving || !!y[In];
          y._isLeaving && y[In](
            !0
            /* cancelled */
          ), w.persisted && !B ? $() : A(y, () => {
            $(), N && N();
          });
        };
        M ? M(y, $, k) : k();
      }
    else
      s(y, a, h);
  }, Se = (u, a, h, x = !1, v = !1) => {
    const {
      type: y,
      props: E,
      ref: w,
      children: C,
      dynamicChildren: _,
      shapeFlag: F,
      patchFlag: A,
      dirs: M,
      cacheIndex: N,
      memo: $
    } = u;
    if (A === -2 && (v = !1), w != null && (Le(), Rt(w, null, h, u, !0), He()), N != null && (a.renderCache[N] = void 0), F & 256) {
      a.ctx.deactivate(u);
      return;
    }
    const k = F & 1 && M, B = !Ft(u);
    let Q;
    if (B && (Q = E && E.onVnodeBeforeUnmount) && Ae(Q, a, u), F & 6)
      li(u.component, h, x);
    else {
      if (F & 128) {
        u.suspense.unmount(h, x);
        return;
      }
      k && et(u, null, a, "beforeUnmount"), F & 64 ? u.type.remove(
        u,
        a,
        h,
        xt,
        x
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== te || A > 0 && A & 64) ? vt(
        _,
        a,
        h,
        !1,
        !0
      ) : (y === te && A & 384 || !v && F & 16) && vt(C, a, h), x && hs(u);
    }
    const ne = $ != null && N == null;
    (B && (Q = E && E.onVnodeUnmounted) || k || ne) && de(() => {
      Q && Ae(Q, a, u), k && et(u, null, a, "unmounted"), ne && (u.el = null);
    }, h);
  }, hs = (u) => {
    const { type: a, el: h, anchor: x, transition: v } = u;
    if (a === te) {
      ii(h, x);
      return;
    }
    if (a === Un) {
      R(u);
      return;
    }
    const y = () => {
      r(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: w } = v, C = () => E(h, y);
      w ? w(u.el, y, C) : C();
    } else
      y();
  }, ii = (u, a) => {
    let h;
    for (; u !== a; )
      h = S(u), r(u), u = h;
    r(a);
  }, li = (u, a, h) => {
    const { bum: x, scope: v, job: y, subTree: E, um: w, m: C, a: _ } = u;
    Ns(C), Ns(_), x && Qt(x), v.stop(), y && (y.flags |= 8, Se(E, u, a, h)), w && de(w, a), de(() => {
      u.isUnmounted = !0;
    }, a);
  }, vt = (u, a, h, x = !1, v = !1, y = 0) => {
    for (let E = y; E < u.length; E++)
      Se(u[E], a, h, x, v);
  }, zt = (u) => {
    if (u.shapeFlag & 6)
      return zt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const a = S(u.anchor || u.el), h = a && a[el];
    return h ? S(h) : a;
  };
  let Tn = !1;
  const gs = (u, a, h) => {
    let x;
    u == null ? a._vnode && (Se(a._vnode, null, null, !0), x = a._vnode.component) : O(
      a._vnode || null,
      u,
      a,
      null,
      null,
      null,
      h
    ), a._vnode = u, Tn || (Tn = !0, ws(x), Tr(), Tn = !1);
  }, xt = {
    p: O,
    um: Se,
    m: Ze,
    r: hs,
    mt: En,
    mc: qe,
    pc: G,
    pbc: Ye,
    n: zt,
    o: e
  };
  return {
    render: gs,
    hydrate: void 0,
    createApp: Sl(gs)
  };
}
function Dn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $l(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = De(r[i]), o.el = l.el), !n && o.patchFlag !== -2 && Gr(l, o)), o.type === Cn && (o.patchFlag === -1 && (o = r[i] = De(o)), o.el = l.el), o.type === Be && !o.el && (o.el = l.el);
    }
}
function jl(e) {
  const t = e.slice(), n = [0];
  let s, r, i, l, o;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        o = i + l >> 1, e[n[o]] < d ? i = o + 1 : l = o;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function Jr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jr(t);
}
function Ns(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yr(t.subTree) : null;
}
const Xr = (e) => e.__isSuspense;
function Ll(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Gi(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), Cn = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Un = /* @__PURE__ */ Symbol.for("v-stc"), ct = [];
let he = null;
function V(e = !1) {
  ct.push(he = e ? null : []);
}
function Zr() {
  ct.pop(), he = ct[ct.length - 1] || null;
}
let Vt = 1;
function Ds(e, t = !1) {
  Vt += e, e < 0 && he && t && (he.hasOnce = !0);
}
function Qr(e) {
  return e.dynamicChildren = Vt > 0 ? he || ht : null, Zr(), Vt > 0 && he && he.push(e), e;
}
function j(e, t, n, s, r, i) {
  return Qr(
    b(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Hl(e, t, n, s, r) {
  return Qr(
    je(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function ei(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ti = ({ key: e }) => e ?? null, tn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || /* @__PURE__ */ ae(e) || D(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, s = 0, r = null, i = e === te ? 0 : 1, l = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ti(t),
    ref: t && tn(t),
    scopeId: Or,
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
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return o ? (cn(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Z(n) ? 8 : 16), Vt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && he.push(c), c;
}
const je = Kl;
function Kl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === hl) && (e = Be), ei(e)) {
    const o = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cn(o, n), Vt > 0 && !i && he && (o.shapeFlag & 6 ? he[he.indexOf(e)] = o : he.push(o)), o.patchFlag = -2, o;
  }
  if (Ql(e) && (e = e.__vccOpts), t) {
    t = Bl(t);
    let { class: o, style: c } = t;
    o && !Z(o) && (t.class = ts(o)), q(c) && (/* @__PURE__ */ os(c) && !I(c) && (c = ie({}, c)), t.style = es(c));
  }
  const l = Z(e) ? 1 : Xr(e) ? 128 : vn(e) ? 64 : q(e) ? 4 : D(e) ? 2 : 0;
  return b(
    e,
    t,
    n,
    s,
    r,
    l,
    i,
    !0
  );
}
function Bl(e) {
  return e ? /* @__PURE__ */ os(e) || Kr(e) ? ie({}, e) : e : null;
}
function yt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: c } = e, d = t ? Wl(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && ti(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? I(i) ? i.concat(tn(t)) : [i, tn(t)] : tn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== te ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && yt(e.ssContent),
    ssFallback: e.ssFallback && yt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && us(
    f,
    c.clone(f)
  ), f;
}
function ee(e = " ", t = 0) {
  return je(Cn, null, e, t);
}
function dt(e = "", t = !1) {
  return t ? (V(), Hl(Be, null, e)) : je(Be, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? je(Be) : I(e) ? je(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ei(e) ? De(e) : je(Cn, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
}
function cn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), cn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Kr(t) ? t._ctx = me : r === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (D(t)) {
    if (s & 65) {
      cn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: me }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ee(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Wl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ts([t.class, s.class]));
      else if (r === "style")
        t.style = es([t.style, s.style]);
      else if (dn(r)) {
        const i = t[r], l = s[r];
        l && i !== l && !(I(i) && i.includes(l)) ? t[r] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !pn(r) && (t[r] = l);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ae(e, t, n, s = null) {
  ve(e, t, 7, [
    n,
    s
  ]);
}
const ql = Vr();
let kl = 0;
function zl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || ql, i = {
    uid: kl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new _i(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Wr(s, r),
    emitsOptions: $r(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = wl.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const Gl = () => ue || me;
let un, $t;
{
  const e = mn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  un = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), $t = t(
    "__VUE_SSR_SETTERS__",
    (n) => jt = n
  );
}
const Kt = (e) => {
  const t = ue;
  return un(e), e.scope.on(), () => {
    e.scope.off(), un(t);
  };
}, Us = () => {
  ue && ue.scope.off(), un(null);
};
function ni(e) {
  return e.vnode.shapeFlag & 4;
}
let jt = !1;
function Jl(e, t = !1, n = !1) {
  t && $t(t);
  const { props: s, children: r } = e.vnode, i = ni(e);
  Ml(e, s, i, t), Nl(e, r, n || t);
  const l = i ? Yl(e, t) : void 0;
  return t && $t(!1), l;
}
function Yl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gl);
  const { setup: s } = n;
  if (s) {
    Le();
    const r = e.setupContext = s.length > 1 ? Zl(e) : null, i = Kt(e), l = Ht(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Qs(l);
    if (He(), i(), (o || e.sp) && !Ft(e) && Fr(e), o) {
      if (l.then(Us, Us), t)
        return l.then((c) => {
          $t(!0);
          try {
            Vs(e, c, t);
          } finally {
            $t(!1);
          }
        }).catch((c) => {
          _n(c, e, 0);
        });
      e.asyncDep = l;
    } else
      Vs(e, l);
  } else
    si(e);
}
function Vs(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = Sr(t)), si(e);
}
function si(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Re);
  {
    const r = Kt(e);
    Le();
    try {
      ml(e);
    } finally {
      He(), r();
    }
  }
}
const Xl = {
  get(e, t) {
    return re(e, "get", ""), e[t];
  }
};
function Zl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sr(ji(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in It)
        return It[n](e);
    },
    has(t, n) {
      return n in t || n in It;
    }
  })) : e.proxy;
}
function Ql(e) {
  return D(e) && "__vccOpts" in e;
}
const st = (e, t) => /* @__PURE__ */ Bi(e, t, jt), eo = "3.5.42";
let Yn;
const $s = typeof window < "u" && window.trustedTypes;
if ($s)
  try {
    Yn = /* @__PURE__ */ $s.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ri = Yn ? (e) => Yn.createHTML(e) : (e) => e, to = "http://www.w3.org/2000/svg", no = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, js = Ne && /* @__PURE__ */ Ne.createElement("template"), so = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ne.createElementNS(to, e) : t === "mathml" ? Ne.createElementNS(no, e) : n ? Ne.createElement(e, { is: n }) : Ne.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ne.createTextNode(e),
  createComment: (e) => Ne.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ne.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      js.innerHTML = ri(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = js.content;
      if (s === "svg" || s === "mathml") {
        const c = o.firstChild;
        for (; c.firstChild; )
          o.appendChild(c.firstChild);
        o.removeChild(c);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ro = /* @__PURE__ */ Symbol("_vtc");
function io(e, t, n) {
  const s = e[ro];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ls = /* @__PURE__ */ Symbol("_vod"), lo = /* @__PURE__ */ Symbol("_vsh"), oo = /* @__PURE__ */ Symbol(""), co = /(?:^|;)\s*display\s*:/;
function uo(e, t, n) {
  const s = e.style, r = Z(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (Z(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && At(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && At(s, l, "");
    for (const l in n) {
      l === "display" && (i = !0);
      const o = n[l];
      o != null ? fo(
        e,
        l,
        !Z(t) && t ? t[l] : void 0,
        o
      ) || At(s, l, o) : At(s, l, "");
    }
  } else if (r) {
    if (t !== n) {
      const l = s[oo];
      l && (n += ";" + l), s.cssText = n, i = co.test(n);
    }
  } else t && e.removeAttribute("style");
  Ls in e && (e[Ls] = i ? s.display : "", e[lo] && (s.display = "none"));
}
const Xt = /\s*!important$/;
function At(e, t, n) {
  if (I(n))
    n.forEach((s) => At(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Xt.test(n) ? e.setProperty(t, n.replace(Xt, ""), "important") : e.setProperty(t, n);
  else {
    const s = ao(e, t);
    Xt.test(n) ? e.setProperty(
      at(s),
      n.replace(Xt, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hs = ["Webkit", "Moz", "ms"], Vn = {};
function ao(e, t) {
  const n = Vn[t];
  if (n)
    return n;
  let s = be(t);
  if (s !== "filter" && s in e)
    return Vn[t] = s;
  s = nr(s);
  for (let r = 0; r < Hs.length; r++) {
    const i = Hs[r] + s;
    if (i in e)
      return Vn[t] = i;
  }
  return t;
}
function fo(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Z(s) && n === s;
}
const Ks = "http://www.w3.org/1999/xlink";
function Bs(e, t, n, s, r, i = mi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ks, t.slice(6, t.length)) : e.setAttributeNS(Ks, t, n) : n == null || i && !rr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Fe(n) ? String(n) : n
  );
}
function Ws(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ri(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = rr(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function rt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function po(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qs = /* @__PURE__ */ Symbol("_vei");
function ho(e, t, n, s, r = null) {
  const i = e[qs] || (e[qs] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [o, c] = bo(t);
    if (s) {
      const d = i[t] = vo(
        s,
        r
      );
      rt(e, o, d, c);
    } else l && (po(e, o, l, c), i[t] = void 0);
  }
}
const go = /(Once|Passive|Capture)$/, mo = /^on:?(?:Once|Passive|Capture)$/;
function bo(e) {
  let t, n;
  for (; (n = e.match(go)) && !mo.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : at(e.slice(2)), t];
}
let $n = 0;
const yo = /* @__PURE__ */ Promise.resolve(), _o = () => $n || (yo.then(() => $n = 0), $n = Date.now());
function vo(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (I(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const l = r.slice(), o = [s];
      for (let c = 0; c < l.length && !s._stopped; c++) {
        const d = l[c];
        d && ve(
          d,
          t,
          5,
          o
        );
      }
    } else
      ve(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = _o(), n;
}
const ks = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xo = (e, t, n, s, r, i) => {
  const l = r === "svg";
  t === "class" ? io(e, s, l) : t === "style" ? uo(e, n, s) : dn(t) ? pn(t) || ho(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : So(e, t, s, l)) ? (Ws(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bs(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Co(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Z(s))) ? Ws(e, be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Bs(e, t, s, l));
};
function So(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ks(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ks(t) && Z(n) ? !1 : t in e;
}
function Co(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = be(t);
  return Array.isArray(n) ? n.some((r) => be(r) === s) : Object.keys(n).some((r) => be(r) === s);
}
const an = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => Qt(t, n) : t;
};
function wo(e) {
  e.target.composing = !0;
}
function zs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const it = /* @__PURE__ */ Symbol("_assign"), Zt = /* @__PURE__ */ Symbol("_initialValue");
function jn(e, t, n) {
  return t && (e = e.trim()), n && (e = gn(e)), e;
}
const Gs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Zt] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Zt] = e.defaultValue.replace(/\r\n?/g, `
`))), e[it] = an(r);
    const i = s || r.props && r.props.type === "number";
    rt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[it](jn(e.value, n, i));
    }), (n || i) && rt(e, "change", () => {
      e.value = jn(e.value, n, i);
    }), t || (rt(e, "compositionstart", wo), rt(e, "compositionend", zs), rt(e, "change", zs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[Zt];
    delete e[Zt], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[it](jn(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, l) {
    if (e[it] = an(l), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? gn(e.value) : e.value, c = t ?? "";
    if (o === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c);
  }
}, Et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, rt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? gn(fn(c)) : fn(c)
      ), i = e.multiple, l = i ? ut(e._modelValue) ? new Set(r) : r : r[0], o = e._pendingValue = [
        i,
        i ? I(l) ? r.slice() : r : l
      ];
      try {
        e[it](l);
      } finally {
        wr(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[it] = an(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Js(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[it] = an(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Eo(t, n[1], n[0])) && Js(e, t);
  }
};
function Eo(e, t, n) {
  if (!n || I(e)) return Ge(e, t);
  if (ut(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Js(e, t) {
  const n = e.multiple, s = I(t);
  if (!(n && !s && !ut(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const l = e.options[r], o = fn(l);
      if (n)
        if (s) {
          const c = typeof o;
          c === "string" || c === "number" ? l.selected = t.some((d) => String(d) === String(o)) : l.selected = yi(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (Ge(fn(l), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function fn(e) {
  return "_value" in e ? e._value : e.value;
}
const To = /* @__PURE__ */ ie({ patchProp: xo }, so);
let Ys;
function Ao() {
  return Ys || (Ys = Ul(To));
}
const Oo = ((...e) => {
  const t = Ao().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Mo(s);
    if (!r) return;
    const i = t._component;
    !D(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = n(r, !1, Po(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
});
function Po(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mo(e) {
  return Z(e) ? document.querySelector(e) : e;
}
function Ro(e, t, n) {
  const s = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(s))
    return window._nc_initial_state.get(s);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const r = document.querySelector(s);
  if (r === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(r.value));
    return window._nc_initial_state.set(s, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
const Fo = { class: "library-vue-catalogue" }, Io = {
  class: "library-panel",
  "aria-label": "Publication catalogue"
}, No = {
  method: "get",
  class: "library-filter-bar",
  "aria-label": "Catalogue search and filters"
}, Do = ["value"], Uo = ["value"], Vo = ["value"], $o = ["value"], jo = ["value"], Lo = ["value"], Ho = {
  class: "library-pagination",
  "aria-label": "Catalogue pagination"
}, Ko = ["href"], Bo = {
  key: 1,
  class: "library-muted"
}, Wo = ["href"], qo = {
  key: 3,
  class: "library-muted"
}, ko = {
  key: 0,
  class: "library-empty-content",
  role: "status"
}, zo = {
  key: 1,
  class: "library-cover-gallery"
}, Go = ["href", "aria-label"], Jo = ["src", "alt"], Yo = { class: "library-cover-summary" }, Xo = {
  key: 0,
  class: "library-creator"
}, Zo = { class: "library-muted" }, Qo = { key: 0 }, ec = { key: 1 }, tc = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, nc = { key: 0 }, sc = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, rc = {
  key: 0,
  class: "library-muted"
}, ic = ["href"], lc = ["href"], oc = { class: "library-item-metadata" }, cc = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTagEditor"
}, uc = {
  key: 0,
  class: "library-tag-remove-list",
  "aria-label": "Remove Nextcloud tag"
}, ac = { class: "library-tag" }, fc = ["action"], dc = ["action"], pc = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, hc = {
  key: 0,
  class: "library-muted"
}, gc = { class: "library-comment-list" }, mc = { class: "library-muted" }, bc = ["action"], yc = ["action"], _c = ["value"], vc = ["value"], xc = ["value"], Sc = ["value"], Cc = ["value"], wc = ["value"], Ec = ["value"], Tc = ["value"], Ac = ["value"], Oc = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Pc = { class: "library-hero-actions" }, Mc = ["href"], Rc = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], s = [25, 50, 100, 250, 500], r = st(() => t.state.items || []), i = st(() => t.state.shelves || []), l = st(() => t.state.formats || []), o = st(() => t.state.scanStatuses || []), c = st(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: r.value.length,
      visible: r.value.length,
      from: r.value.length > 0 ? 1 : 0,
      to: r.value.length,
      previousUrl: "",
      nextUrl: ""
    }), d = /* @__PURE__ */ yn({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), f = st(() => t.state.settingsUrl || "");
    function g(O) {
      return String(O || "").toUpperCase();
    }
    function S(O) {
      return O.nextcloudTags || [];
    }
    function T(O) {
      return O.nextcloudComments || { count: 0, recent: [] };
    }
    function U(O, p) {
      return String(O.tagRemoveBaseUrl || "").replace("__TAG_ID__", String(p.id));
    }
    return (O, p) => (V(), j("div", Fo, [
      b("section", Io, [
        p[47] || (p[47] = b("h2", null, "Publication catalogue", -1)),
        p[48] || (p[48] = b("p", { class: "library-muted" }, "Browse as a shelf/gallery first; open the details panel when metadata matters.", -1)),
        b("form", No, [
          b("label", null, [
            p[7] || (p[7] = ee(" Search title / author ", -1)),
            Qe(b("input", {
              "onUpdate:modelValue": p[0] || (p[0] = (m) => d.q = m),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Gs, d.q]
            ])
          ]),
          b("label", null, [
            p[9] || (p[9] = ee(" Type ", -1)),
            Qe(b("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (m) => d.type = m),
              name: "type"
            }, [
              p[8] || (p[8] = b("option", { value: "" }, "All types", -1)),
              (V(), j(te, null, Te(n, (m) => b("option", {
                key: m,
                value: m
              }, H(m), 9, Do)), 64))
            ], 512), [
              [Et, d.type]
            ])
          ]),
          b("label", null, [
            p[10] || (p[10] = ee(" Nextcloud tag ", -1)),
            Qe(b("input", {
              "onUpdate:modelValue": p[2] || (p[2] = (m) => d.tag = m),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Gs, d.tag]
            ])
          ]),
          b("label", null, [
            p[12] || (p[12] = ee(" Format ", -1)),
            Qe(b("select", {
              "onUpdate:modelValue": p[3] || (p[3] = (m) => d.format = m),
              name: "format"
            }, [
              p[11] || (p[11] = b("option", { value: "" }, "All formats", -1)),
              (V(!0), j(te, null, Te(l.value, (m) => (V(), j("option", {
                key: m,
                value: m
              }, H(g(m)), 9, Uo))), 128))
            ], 512), [
              [Et, d.format]
            ])
          ]),
          b("label", null, [
            p[14] || (p[14] = ee(" Shelf ", -1)),
            Qe(b("select", {
              "onUpdate:modelValue": p[4] || (p[4] = (m) => d.shelf = m),
              name: "shelf"
            }, [
              p[13] || (p[13] = b("option", { value: "" }, "All shelves", -1)),
              (V(!0), j(te, null, Te(i.value, (m) => (V(), j("option", {
                key: m,
                value: m
              }, H(m), 9, Vo))), 128))
            ], 512), [
              [Et, d.shelf]
            ])
          ]),
          b("label", null, [
            p[16] || (p[16] = ee(" Scan status ", -1)),
            Qe(b("select", {
              "onUpdate:modelValue": p[5] || (p[5] = (m) => d.status = m),
              name: "status"
            }, [
              p[15] || (p[15] = b("option", { value: "" }, "All scan statuses", -1)),
              (V(!0), j(te, null, Te(o.value, (m) => (V(), j("option", {
                key: m,
                value: m
              }, H(m), 9, $o))), 128))
            ], 512), [
              [Et, d.status]
            ])
          ]),
          b("label", null, [
            p[18] || (p[18] = ee(" Sort ", -1)),
            Qe(b("select", {
              "onUpdate:modelValue": p[6] || (p[6] = (m) => d.sort = m),
              name: "sort"
            }, [...p[17] || (p[17] = [
              b("option", { value: "title" }, "Title", -1),
              b("option", { value: "recent" }, "Recently added", -1),
              b("option", { value: "publicationDate" }, "Publication date", -1),
              b("option", { value: "format" }, "Format", -1)
            ])], 512), [
              [Et, d.sort]
            ])
          ]),
          b("label", null, [
            p[19] || (p[19] = ee(" Page size ", -1)),
            b("select", {
              value: c.value.limit,
              name: "limit"
            }, [
              (V(), j(te, null, Te(s, (m) => b("option", {
                key: m,
                value: m
              }, H(m), 9, Lo)), 64))
            ], 8, jo)
          ]),
          p[20] || (p[20] = b("button", {
            type: "submit",
            class: "button primary",
            "aria-label": "Apply catalogue filters"
          }, "Apply filters", -1)),
          p[21] || (p[21] = b("a", {
            href: "?",
            class: "button secondary",
            "aria-label": "Clear catalogue filters"
          }, "Clear", -1))
        ]),
        b("nav", Ho, [
          b("span", null, "Showing " + H(c.value.from) + "–" + H(c.value.to) + " of " + H(c.value.total) + " catalogue items", 1),
          c.value.previousUrl ? (V(), j("a", {
            key: 0,
            href: c.value.previousUrl
          }, "Previous", 8, Ko)) : (V(), j("span", Bo, "Previous")),
          c.value.nextUrl ? (V(), j("a", {
            key: 2,
            href: c.value.nextUrl
          }, "Next", 8, Wo)) : (V(), j("span", qo, "Next"))
        ]),
        r.value.length === 0 ? (V(), j("div", ko, [...p[22] || (p[22] = [
          b("h3", null, "No catalogue items match", -1),
          b("p", { class: "library-muted" }, "Scan enabled roots or clear the active filters.", -1)
        ])])) : (V(), j("div", zo, [
          (V(!0), j(te, null, Te(r.value, (m) => (V(), j("article", {
            key: m.id,
            class: "library-cover-card"
          }, [
            b("a", {
              class: "library-cover-link",
              href: m.openUrl,
              "aria-label": `Read ${m.title}`
            }, [
              b("img", {
                class: "library-cover-image",
                src: m.coverUrl,
                alt: `Cover for ${m.title}`,
                loading: "lazy"
              }, null, 8, Jo)
            ], 8, Go),
            b("div", Yo, [
              b("h3", null, H(m.title), 1),
              m.creators ? (V(), j("p", Xo, H(m.creators), 1)) : dt("", !0),
              b("p", Zo, [
                b("span", null, H(m.publicationType), 1),
                m.extension ? (V(), j("span", Qo, " · Format: " + H(g(m.extension)), 1)) : dt("", !0),
                m.shelf ? (V(), j("span", ec, " · Shelf: " + H(m.shelf), 1)) : dt("", !0)
              ]),
              m.scanStatus !== "indexed" || m.scanError ? (V(), j("p", tc, [
                ee(" scanStatus: " + H(m.scanStatus || "unknown"), 1),
                m.scanError ? (V(), j("span", nc, " · scanError: " + H(m.scanError), 1)) : dt("", !0)
              ])) : dt("", !0),
              b("div", sc, [
                S(m).length === 0 ? (V(), j("span", rc, "No Nextcloud tags")) : (V(!0), j(te, { key: 1 }, Te(S(m), (P) => (V(), j("span", {
                  key: P.id,
                  class: "library-tag"
                }, H(P.name), 1))), 128))
              ]),
              b("p", null, [
                b("a", {
                  href: m.openUrl
                }, "Read", 8, ic),
                p[23] || (p[23] = ee(" · ", -1)),
                b("a", {
                  href: m.filesUrl
                }, "Show in Files", 8, lc)
              ])
            ]),
            b("details", null, [
              p[46] || (p[46] = b("summary", null, "Details / edit metadata", -1)),
              b("dl", oc, [
                p[24] || (p[24] = b("dt", null, "publicationType", -1)),
                b("dd", null, H(m.publicationType), 1),
                p[25] || (p[25] = b("dt", null, "metadataSource", -1)),
                b("dd", null, H(m.metadataSource), 1),
                p[26] || (p[26] = b("dt", null, "userEdited", -1)),
                b("dd", null, H(m.userEdited ? "yes" : "no"), 1),
                p[27] || (p[27] = b("dt", null, "path", -1)),
                b("dd", null, H(m.cachedPath), 1),
                p[28] || (p[28] = b("dt", null, "publication", -1)),
                b("dd", null, H(m.publication || "—"), 1),
                p[29] || (p[29] = b("dt", null, "date", -1)),
                b("dd", null, H(m.publicationDate || "—"), 1),
                p[30] || (p[30] = b("dt", null, "language", -1)),
                b("dd", null, H(m.language || "—"), 1),
                p[31] || (p[31] = b("dt", null, "publisher", -1)),
                b("dd", null, H(m.publisher || "—"), 1)
              ]),
              b("div", cc, [
                p[34] || (p[34] = b("strong", null, "Nextcloud tags", -1)),
                S(m).length > 0 ? (V(), j("ul", uc, [
                  (V(!0), j(te, null, Te(S(m), (P) => (V(), j("li", {
                    key: P.id
                  }, [
                    b("span", ac, H(P.name), 1),
                    b("form", {
                      method: "post",
                      action: U(m, P),
                      class: "library-inline-form"
                    }, [...p[32] || (p[32] = [
                      b("button", { type: "submit" }, "Remove tag", -1)
                    ])], 8, fc)
                  ]))), 128))
                ])) : dt("", !0),
                b("form", {
                  method: "post",
                  action: m.tagUrl,
                  class: "library-tag-form"
                }, [...p[33] || (p[33] = [
                  b("label", null, [
                    ee(" Add Nextcloud tag "),
                    b("input", {
                      type: "text",
                      name: "tagName",
                      placeholder: "photography, project-library..."
                    })
                  ], -1),
                  b("button", { type: "submit" }, "Add tag", -1)
                ])], 8, dc)
              ]),
              b("div", pc, [
                p[36] || (p[36] = b("strong", null, "Nextcloud comments", -1)),
                p[37] || (p[37] = ee()),
                p[38] || (p[38] = b("span", { class: "library-muted" }, "(file-level notes)", -1)),
                p[39] || (p[39] = ee(": ", -1)),
                T(m).count === 0 ? (V(), j("span", hc, "No Nextcloud comments")) : (V(), j(te, { key: 1 }, [
                  b("span", null, H(T(m).count) + " total", 1),
                  b("ul", gc, [
                    (V(!0), j(te, null, Te(T(m).recent, (P) => (V(), j("li", {
                      key: `${P.actorId}-${P.createdAt}-${P.message}`
                    }, [
                      b("span", mc, H(P.actorId) + " · " + H(P.createdAt), 1),
                      b("span", null, H(P.message), 1)
                    ]))), 128))
                  ])
                ], 64)),
                b("form", {
                  method: "post",
                  action: m.commentUrl,
                  class: "library-comment-form"
                }, [...p[35] || (p[35] = [
                  b("label", null, [
                    ee(" Add Nextcloud comment "),
                    b("textarea", {
                      name: "commentMessage",
                      rows: "2",
                      placeholder: "file-level note..."
                    })
                  ], -1),
                  b("button", { type: "submit" }, "Add comment", -1)
                ])], 8, bc)
              ]),
              b("form", {
                method: "post",
                action: m.updateUrl,
                class: "library-item-form"
              }, [
                b("label", null, [
                  p[40] || (p[40] = ee(" Title ", -1)),
                  b("input", {
                    type: "text",
                    name: "title",
                    value: m.title
                  }, null, 8, _c)
                ]),
                b("label", null, [
                  p[41] || (p[41] = ee(" Type ", -1)),
                  b("select", {
                    name: "publicationType",
                    value: m.publicationType
                  }, [
                    (V(), j(te, null, Te(n, (P) => b("option", {
                      key: P,
                      value: P
                    }, H(P), 9, xc)), 64))
                  ], 8, vc)
                ]),
                b("label", null, [
                  p[42] || (p[42] = ee(" Creators ", -1)),
                  b("input", {
                    type: "text",
                    name: "creators",
                    value: m.creators
                  }, null, 8, Sc)
                ]),
                b("label", null, [
                  p[43] || (p[43] = ee(" Publication ", -1)),
                  b("input", {
                    type: "text",
                    name: "publication",
                    value: m.publication
                  }, null, 8, Cc)
                ]),
                b("label", null, [
                  p[44] || (p[44] = ee(" Date ", -1)),
                  b("input", {
                    type: "text",
                    name: "publicationDate",
                    value: m.publicationDate
                  }, null, 8, wc)
                ]),
                b("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: m.subtitle
                }, null, 8, Ec),
                b("input", {
                  type: "hidden",
                  name: "language",
                  value: m.language
                }, null, 8, Tc),
                b("input", {
                  type: "hidden",
                  name: "publisher",
                  value: m.publisher
                }, null, 8, Ac),
                p[45] || (p[45] = b("button", { type: "submit" }, "Save metadata", -1))
              ], 8, yc)
            ])
          ]))), 128))
        ]))
      ]),
      b("section", Oc, [
        p[49] || (p[49] = b("div", null, [
          b("h2", null, "Library"),
          b("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        b("div", Pc, [
          b("a", {
            href: f.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Mc)
        ])
      ])
    ]));
  }
}, Xs = Ro("library", "catalogue", {}), Ln = document.querySelector("#library-vue-root");
function ge(e) {
  return String(e ?? "");
}
function Fc(e) {
  return ge(e).toUpperCase();
}
function Ic(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], s = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, r = ge(e.settingsUrl || ""), i = document.createElement("div");
  i.className = "library-vue-catalogue library-vue-fallback", i.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-label", "Publication catalogue");
  const o = document.createElement("h2");
  o.textContent = "Publication catalogue", l.appendChild(o);
  const c = document.createElement("p");
  c.className = "library-muted", c.textContent = "Browse as a shelf/gallery first; open the details panel when metadata matters.", l.appendChild(c);
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", "Catalogue pagination");
  const f = document.createElement("span");
  if (f.textContent = `Showing ${s.from ?? 0}–${s.to ?? n.length} of ${s.total ?? n.length} catalogue items`, d.appendChild(f), l.appendChild(d), n.length === 0) {
    const g = document.createElement("div");
    g.className = "library-empty-content", g.setAttribute("role", "status");
    const S = document.createElement("h3");
    S.textContent = "No catalogue items match";
    const T = document.createElement("p");
    T.className = "library-muted", T.textContent = "Scan enabled roots or clear the active filters.", g.append(S, T), l.appendChild(g);
  } else {
    const g = document.createElement("div");
    g.className = "library-cover-gallery";
    for (const S of n) {
      const T = document.createElement("article");
      T.className = "library-cover-card";
      const U = document.createElement("a");
      U.className = "library-cover-link", U.href = ge(S.openUrl || "#"), U.setAttribute("aria-label", `Read ${ge(S.title || "publication")}`);
      const O = document.createElement("img");
      O.className = "library-cover-image", O.src = ge(S.coverUrl || ""), O.alt = `Cover for ${ge(S.title || "publication")}`, O.loading = "lazy", U.appendChild(O);
      const p = document.createElement("div");
      p.className = "library-cover-summary";
      const m = document.createElement("h3");
      if (m.textContent = ge(S.title || "Untitled publication"), p.appendChild(m), S.creators) {
        const fe = document.createElement("p");
        fe.className = "library-creator", fe.textContent = ge(S.creators), p.appendChild(fe);
      }
      const P = document.createElement("p");
      P.className = "library-muted", P.textContent = [
        ge(S.publicationType || "other"),
        S.extension ? `Format: ${Fc(S.extension)}` : "",
        S.shelf ? `Shelf: ${ge(S.shelf)}` : ""
      ].filter(Boolean).join(" · "), p.appendChild(P);
      const L = document.createElement("p"), R = document.createElement("a");
      R.href = ge(S.openUrl || "#"), R.textContent = "Read";
      const Y = document.createElement("a");
      Y.href = ge(S.filesUrl || "#"), Y.textContent = "Show in Files", L.append(R, document.createTextNode(" · "), Y), p.appendChild(L), T.append(U, p), g.appendChild(T);
    }
    l.appendChild(g);
  }
  if (i.appendChild(l), r) {
    const g = document.createElement("section");
    g.className = "library-hero library-secondary-panel", g.setAttribute("aria-label", "Library settings");
    const S = document.createElement("div"), T = document.createElement("h2");
    T.textContent = "Library";
    const U = document.createElement("p");
    U.className = "library-lede", U.textContent = "Browse publications already stored in Nextcloud.", S.append(T, U);
    const O = document.createElement("div");
    O.className = "library-hero-actions";
    const p = document.createElement("a");
    p.href = r, p.className = "button secondary", p.setAttribute("aria-label", "Open Library settings"), p.textContent = "Library settings", O.appendChild(p), g.append(S, O), i.appendChild(g);
  }
  return i;
}
if (Ln)
  try {
    Oo(Rc, { state: Xs }).mount(Ln);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ln.replaceChildren(Ic(Xs));
  }
//# sourceMappingURL=library-main.mjs.map
