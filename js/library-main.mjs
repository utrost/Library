// @__NO_SIDE_EFFECTS__
function Zn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = {}, gt = [], Re = () => {
}, tr = () => !1, hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gn = (e) => e.startsWith("onUpdate:"), le = Object.assign, Qn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fi = Object.prototype.hasOwnProperty, K = (e, t) => fi.call(e, t), I = Array.isArray, Je = (e) => Ht(e) === "[object Map]", ut = (e) => Ht(e) === "[object Set]", vs = (e) => Ht(e) === "[object Date]", V = (e) => typeof e == "function", Z = (e) => typeof e == "string", Ie = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", nr = (e) => (k(e) || V(e)) && V(e.then) && V(e.catch), sr = Object.prototype.toString, Ht = (e) => sr.call(e), di = (e) => Ht(e).slice(8, -1), rr = (e) => Ht(e) === "[object Object]", es = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ Zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, pi = /-\w/g, be = mn(
  (e) => e.replace(pi, (t) => t.slice(1).toUpperCase())
), hi = /\B([A-Z])/g, ft = mn(
  (e) => e.replace(hi, "-$1").toLowerCase()
), ir = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pn = mn(
  (e) => e ? `on${ir(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), en = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, lr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, bn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xs;
const yn = () => xs || (xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ts(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Z(s) ? yi(s) : ts(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Z(e) || k(e))
    return e;
}
const gi = /;(?![^(]*\))/g, mi = /:([^]+)/, bi = /\/\*[^]*?\*\//g;
function yi(e) {
  const t = {};
  return e.replace(bi, "").split(gi).forEach((n) => {
    if (n) {
      const s = n.split(mi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ns(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = ns(e[n]);
      s && (t += s + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const _i = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vi = /* @__PURE__ */ Zn(_i);
function or(e) {
  return !!e || e === "";
}
function xi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ye(e[s], t[s]);
  return n;
}
function Ss(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), s = new Uint8Array(n.length);
  for (const r of e) {
    let i = -1;
    for (let l = 0; l < n.length; l++)
      if (!s[l] && Ye(r, n[l])) {
        i = l;
        break;
      }
    if (i < 0) return !1;
    s[i] = 1;
  }
  return !0;
}
function Ye(e, t) {
  if (e === t) return !0;
  let n = vs(e), s = vs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ie(e), s = Ie(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? xi(e, t) : !1;
  if (n = k(e), s = k(t), n || s) {
    if (!n || !s)
      return !1;
    if (n = Je(e), s = Je(t), n || s || (n = ut(e), s = ut(t), n || s))
      return n && s ? Ss(e, t) : !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (o && !c || !o && c || !Ye(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Si(e, t) {
  return e.findIndex((n) => Ye(n, t));
}
const cr = (e) => !!(e && e.__v_isRef === !0), H = (e) => Z(e) ? e : e == null ? "" : I(e) || k(e) && (e.toString === sr || !V(e.toString)) ? cr(e) ? H(e.value) : JSON.stringify(e, ar, 2) : String(e), ar = (e, t) => cr(t) ? ar(e, t.value) : Je(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Fn(s, i) + " =>"] = r, n),
    {}
  )
} : ut(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fn(n))
} : Ie(t) ? Fn(t) : k(t) && !I(t) && !rr(t) ? String(t) : t, Fn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ie(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let re;
class Ci {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && re && (re.active ? (this.parent = re, this.index = (re.scopes || (re.scopes = [])).push(
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
      const n = re;
      try {
        return re = this, t();
      } finally {
        re = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = re, re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (re === this)
        re = this.prevScope;
      else {
        let t = re;
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
function wi() {
  return re;
}
let J;
const Mn = /* @__PURE__ */ new WeakSet();
class ur {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && (re.active ? re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Mn.has(this) && (Mn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || dr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cs(this), pr(this);
    const t = J, n = ye;
    J = this, ye = !0;
    try {
      return this.fn();
    } finally {
      hr(this), J = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        is(t);
      this.deps = this.depsTail = void 0, Cs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kn(this) && this.run();
  }
  get dirty() {
    return Kn(this);
  }
}
let fr = 0, Ft, Mt;
function dr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mt, Mt = e;
    return;
  }
  e.next = Ft, Ft = e;
}
function ss() {
  fr++;
}
function rs() {
  if (--fr > 0)
    return;
  if (Mt) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ft; ) {
    let t = Ft;
    for (Ft = void 0; t; ) {
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
function pr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function hr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), is(s), Ei(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (gr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function gr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dt) || (e.globalVersion = Dt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = J, s = ye;
  J = e, ye = !0;
  try {
    pr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ve(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    J = n, ye = s, hr(e), e.flags &= -3;
  }
}
function is(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      is(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ei(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const mr = [];
function He() {
  mr.push(ye), ye = !1;
}
function Ke() {
  const e = mr.pop();
  ye = e === void 0 ? !0 : e;
}
function Cs(e) {
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
let Dt = 0;
class Ti {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class br {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!J || !ye || J === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      n = this.activeLink = new Ti(J, this), J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, yr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = J.depsTail, n.nextDep = void 0, J.depsTail.nextDep = n, J.depsTail = n, J.deps === n && (J.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Dt++, this.notify(t);
  }
  notify(t) {
    ss();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      rs();
    }
  }
}
function yr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        yr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
), Ut = /* @__PURE__ */ Symbol(
  ""
);
function ie(e, t, n) {
  if (ye && J) {
    let s = Bn.get(e);
    s || Bn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new br()), r.map = s, r.key = n), r.track();
  }
}
function $e(e, t, n, s, r, i) {
  const l = Bn.get(e);
  if (!l) {
    Dt++;
    return;
  }
  const o = (c) => {
    c && c.trigger();
  };
  if (ss(), t === "clear")
    l.forEach(o);
  else {
    const c = I(e), d = c && es(n);
    if (c && n === "length") {
      const f = Number(s);
      l.forEach((h, S) => {
        (S === "length" || S === Ut || !Ie(S) && S >= f) && o(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), d && o(l.get(Ut)), t) {
        case "add":
          c ? d && o(l.get("length")) : (o(l.get(ot)), Je(e) && o(l.get(Wn)));
          break;
        case "delete":
          c || (o(l.get(ot)), Je(e) && o(l.get(Wn)));
          break;
        case "set":
          Je(e) && o(l.get(ot));
          break;
      }
  }
  rs();
}
function dt(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (ie(t, "iterate", Ut), /* @__PURE__ */ _e(e) ? t : t.map(Be));
}
function _n(e) {
  return ie(e = /* @__PURE__ */ W(e), "iterate", Ut), e;
}
function Fe(e, t) {
  return /* @__PURE__ */ Xe(e) ? yt(/* @__PURE__ */ ct(e) ? Be(t) : t) : Be(t);
}
const Ai = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rn(this, Symbol.iterator, (e) => Fe(this, e));
  },
  concat(...e) {
    return dt(this).concat(
      ...e.map((t) => I(t) ? dt(t) : t)
    );
  },
  entries() {
    return Rn(this, "entries", (e) => (e[1] = Fe(this, e[1]), e));
  },
  every(e, t) {
    return Ne(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ne(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Fe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ne(
      this,
      "find",
      e,
      t,
      (n) => Fe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ne(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ne(
      this,
      "findLast",
      e,
      t,
      (n) => Fe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ne(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ne(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return In(this, "includes", e);
  },
  indexOf(...e) {
    return In(this, "indexOf", e);
  },
  join(e) {
    return dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return In(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ne(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return ws(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ws(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ne(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
  },
  toReversed() {
    return dt(this).toReversed();
  },
  toSorted(e) {
    return dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return wt(this, "unshift", e);
  },
  values() {
    return Rn(this, "values", (e) => Fe(this, e));
  }
};
function Rn(e, t, n) {
  const s = _n(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ _e(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Oi = Array.prototype;
function Ne(e, t, n, s, r, i) {
  const l = _n(e), o = l !== e && !/* @__PURE__ */ _e(e), c = l[t];
  if (c !== Oi[t]) {
    const h = c.apply(e, i);
    return o ? Be(h) : h;
  }
  let d = n;
  l !== e && (o ? d = function(h, S) {
    return n.call(this, Fe(e, h), S, e);
  } : n.length > 2 && (d = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const f = c.call(l, d, s);
  return o && r ? r(f) : f;
}
function ws(e, t, n, s) {
  const r = _n(e), i = r !== e && !/* @__PURE__ */ _e(e);
  let l = n, o = !1;
  r !== e && (i ? (o = s.length === 0, l = function(d, f, h) {
    return o && (o = !1, d = Fe(e, d)), n.call(this, d, Fe(e, f), h, e);
  }) : n.length > 3 && (l = function(d, f, h) {
    return n.call(this, d, f, h, e);
  }));
  const c = r[t](l, ...s);
  return o ? Fe(e, c) : c;
}
function In(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  ie(s, "iterate", Ut);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ cs(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : r;
}
function wt(e, t, n = []) {
  He(), ss();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return rs(), Ke(), s;
}
const Pi = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), _r = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ie)
);
function Fi(e) {
  Ie(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class vr {
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
      return s === (r ? i ? Li : wr : i ? Cr : Sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = I(t);
    if (!r) {
      let c;
      if (l && (c = Ai[n]))
        return c;
      if (n === "hasOwnProperty")
        return Fi;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ fe(t) ? t : s
    );
    if ((Ie(n) ? _r.has(n) : Pi(n)) || (r || ie(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ fe(o)) {
      const c = l && es(n) ? o : o.value;
      return r && k(c) ? /* @__PURE__ */ qn(c) : c;
    }
    return k(o) ? r ? /* @__PURE__ */ qn(o) : /* @__PURE__ */ vn(o) : o;
  }
}
class xr extends vr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const l = I(t) && es(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Xe(i);
      if (!/* @__PURE__ */ _e(s) && !/* @__PURE__ */ Xe(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !l && /* @__PURE__ */ fe(i) && !/* @__PURE__ */ fe(s))
        return d || (i.value = s), !0;
    }
    const o = l ? Number(n) < t.length : K(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ fe(t) ? t : r
    );
    return t === /* @__PURE__ */ W(r) && c && (o ? Ve(s, i) && $e(t, "set", n, s) : $e(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = K(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && $e(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ie(n) || !_r.has(n)) && ie(t, "has", n), s;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      I(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class Mi extends vr {
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
const Ri = /* @__PURE__ */ new xr(), Ii = /* @__PURE__ */ new Mi(), Ni = /* @__PURE__ */ new xr(!0);
const kn = (e) => e, Jt = (e) => Reflect.getPrototypeOf(e);
function Di(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = Je(i), o = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = r[e](...s), f = n ? kn : t ? yt : Be;
    return !t && ie(
      i,
      "iterate",
      c ? Wn : ot
    ), le(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = d.next();
          return S ? { value: h, done: S } : {
            value: o ? [f(h[0]), f(h[1])] : f(h),
            done: S
          };
        }
      }
    );
  };
}
function Yt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ui(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      e || (Ve(r, o) && ie(l, "get", r), ie(l, "get", o));
      const { has: c } = Jt(l), d = t ? kn : e ? yt : Be;
      if (c.call(l, r))
        return d(i.get(r));
      if (c.call(l, o))
        return d(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ie(/* @__PURE__ */ W(r), "iterate", ot), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      return e || (Ve(r, o) && ie(l, "has", r), ie(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, c = /* @__PURE__ */ W(o), d = t ? kn : e ? yt : Be;
      return !e && ie(c, "iterate", ot), o.forEach((f, h) => r.call(i, d(f), d(h), l));
    }
  };
  return le(
    n,
    e ? {
      add: Yt("add"),
      set: Yt("set"),
      delete: Yt("delete"),
      clear: Yt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ W(this), l = Jt(i), o = /* @__PURE__ */ W(r), c = !t && !/* @__PURE__ */ _e(r) && !/* @__PURE__ */ Xe(r) ? o : r;
        return l.has.call(i, c) || Ve(r, c) && l.has.call(i, r) || Ve(o, c) && l.has.call(i, o) || (i.add(c), $e(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ _e(i) && !/* @__PURE__ */ Xe(i) && (i = /* @__PURE__ */ W(i));
        const l = /* @__PURE__ */ W(this), { has: o, get: c } = Jt(l);
        let d = o.call(l, r);
        d || (r = /* @__PURE__ */ W(r), d = o.call(l, r));
        const f = c.call(l, r);
        return l.set(r, i), d ? Ve(i, f) && $e(l, "set", r, i) : $e(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ W(this), { has: l, get: o } = Jt(i);
        let c = l.call(i, r);
        c || (r = /* @__PURE__ */ W(r), c = l.call(i, r)), o && o.call(i, r);
        const d = i.delete(r);
        return c && $e(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ W(this), i = r.size !== 0, l = r.clear();
        return i && $e(
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
    n[r] = Di(r, e, t);
  }), n;
}
function ls(e, t) {
  const n = Ui(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    K(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Vi = {
  get: /* @__PURE__ */ ls(!1, !1)
}, $i = {
  get: /* @__PURE__ */ ls(!1, !0)
}, ji = {
  get: /* @__PURE__ */ ls(!0, !1)
};
const Sr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ new WeakMap();
function Hi(e) {
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
function vn(e) {
  return /* @__PURE__ */ Xe(e) ? e : os(
    e,
    !1,
    Ri,
    Vi,
    Sr
  );
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return os(
    e,
    !1,
    Ni,
    $i,
    Cr
  );
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return os(
    e,
    !0,
    Ii,
    ji,
    wr
  );
}
function os(e, t, n, s, r) {
  if (!k(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = Hi(di(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return /* @__PURE__ */ Xe(e) ? /* @__PURE__ */ ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function Bi(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && lr(e, "__v_skip", !0), e;
}
const Be = (e) => k(e) ? /* @__PURE__ */ vn(e) : e, yt = (e) => k(e) ? /* @__PURE__ */ qn(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Wi(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const ki = {
  get: (e, t, n) => t === "__v_raw" ? e : Wi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ fe(r) && !/* @__PURE__ */ fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Er(e) {
  return /* @__PURE__ */ ct(e) ? e : new Proxy(e, ki);
}
class qi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new br(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return dr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return gr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function zi(e, t, n = !1) {
  let s, r;
  return V(e) ? s = e : (s = e.get, r = e.set), new qi(s, r, n);
}
const Xt = {}, rn = /* @__PURE__ */ new WeakMap();
let rt;
function Gi(e, t = !1, n = rt) {
  if (n) {
    let s = rn.get(n);
    s || rn.set(n, s = []), s.push(e);
  }
}
function Ji(e, t, n = z) {
  const { immediate: s, deep: r, once: i, scheduler: l, augmentJob: o, call: c } = n, d = (F) => r ? F : /* @__PURE__ */ _e(F) || r === !1 || r === 0 ? je(F, 1) : je(F);
  let f, h, S, T, D = !1, O = !1;
  if (/* @__PURE__ */ fe(e) ? (h = () => e.value, D = /* @__PURE__ */ _e(e)) : /* @__PURE__ */ ct(e) ? (h = () => d(e), D = !0) : I(e) ? (O = !0, D = e.some((F) => /* @__PURE__ */ ct(F) || /* @__PURE__ */ _e(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ fe(F))
      return F.value;
    if (/* @__PURE__ */ ct(F))
      return d(F);
    if (V(F))
      return c ? c(F, 2) : F();
  })) : V(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (S) {
      He();
      try {
        S();
      } finally {
        Ke();
      }
    }
    const F = rt;
    rt = f;
    try {
      return c ? c(e, 3, [T]) : e(T);
    } finally {
      rt = F;
    }
  } : h = Re, t && r) {
    const F = h, Y = r === !0 ? 1 / 0 : r;
    h = () => je(F(), Y);
  }
  const U = wi(), p = () => {
    f.stop(), U && U.active && Qn(U.effects, f);
  };
  if (i && t) {
    const F = t;
    t = (...Y) => {
      const de = F(...Y);
      return p(), de;
    };
  }
  let m = O ? new Array(e.length).fill(Xt) : Xt;
  const R = (F) => {
    if (!(!(f.flags & 1) || !f.dirty && !F))
      if (t) {
        const Y = f.run();
        if (F || r || D || (O ? Y.some((de, xe) => Ve(de, m[xe])) : Ve(Y, m))) {
          S && S();
          const de = rt;
          rt = f;
          try {
            const xe = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              m === Xt ? void 0 : O && m[0] === Xt ? [] : m,
              T
            ];
            m = Y, c ? c(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            rt = de;
          }
        }
      } else
        f.run();
  };
  return o && o(R), f = new ur(h), f.scheduler = l ? () => l(R, !1) : R, T = (F) => Gi(F, !1, f), S = f.onStop = () => {
    const F = rn.get(f);
    if (F) {
      if (c)
        c(F, 4);
      else
        for (const Y of F) Y();
      rn.delete(f);
    }
  }, t ? s ? R(!0) : m = f.run() : l ? l(R.bind(null, !0), !0) : f.run(), p.pause = f.pause.bind(f), p.resume = f.resume.bind(f), p.stop = p, p;
}
function je(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    je(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      je(e[s], t, n);
  else if (ut(e) || Je(e))
    e.forEach((s) => {
      je(s, t, n);
    });
  else if (rr(e)) {
    for (const s in e)
      je(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && je(e[s], t, n);
  }
  return e;
}
function Kt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    xn(r, t, n);
  }
}
function ve(e, t, n, s) {
  if (V(e)) {
    const r = Kt(e, t, n, s);
    return r && nr(r) && r.catch((i) => {
      xn(i, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ve(e[i], t, n, s));
    return r;
  }
}
function xn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || z;
  if (t) {
    let o = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, c, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      He(), Kt(i, null, 10, [
        e,
        c,
        d
      ]), Ke();
      return;
    }
  }
  Yi(e, n, r, s, l);
}
function Yi(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ae = [];
let Pe = -1;
const mt = [];
let Ge = null, ht = 0;
const Tr = /* @__PURE__ */ Promise.resolve();
let ln = null;
function Ar(e) {
  const t = ln || Tr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xi(e) {
  let t = Pe + 1, n = ae.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ae[s], i = Vt(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function as(e) {
  if (!(e.flags & 1)) {
    const t = Vt(e), n = ae[ae.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vt(n) ? ae.push(e) : ae.splice(Xi(t), 0, e), e.flags |= 1, Or();
  }
}
function Or() {
  ln || (ln = Tr.then(Fr));
}
function Zi(e) {
  if (!I(e))
    Ge && e.id === -1 ? Ge.splice(ht + 1, 0, e) : e.flags & 1 || (mt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      mt.push(e[t]);
  Or();
}
function Es(e, t, n = Pe + 1) {
  for (; n < ae.length; n++) {
    const s = ae[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Pr(e) {
  if (mt.length) {
    const t = [...new Set(mt)].sort(
      (n, s) => Vt(n) - Vt(s)
    );
    if (mt.length = 0, Ge) {
      for (let n = 0; n < t.length; n++)
        Ge.push(t[n]);
      return;
    }
    for (Ge = t, ht = 0; ht < Ge.length; ht++) {
      const n = Ge[ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ge = null, ht = 0;
  }
}
const Vt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fr(e) {
  try {
    for (Pe = 0; Pe < ae.length; Pe++) {
      const t = ae[Pe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Pe < ae.length; Pe++) {
      const t = ae[Pe];
      t && (t.flags &= -2);
    }
    Pe = -1, ae.length = 0, Pr(), ln = null, (ae.length || mt.length) && Fr();
  }
}
let me = null, Mr = null;
function on(e) {
  const t = me;
  return me = e, Mr = e && e.type.__scopeId || null, t;
}
function Qi(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Us(-1);
    const i = on(t), l = at.length;
    let o;
    try {
      o = e(...r);
    } finally {
      for (let c = at.length; c > l; c--) ti();
      on(i), s._d && Us(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function tt(e, t) {
  if (me === null)
    return e;
  const n = Tn(me), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, c = z] = t[r];
    i && (V(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && je(l), s.push({
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
function nt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let c = o.dir[s];
    c && (He(), ve(c, n, 8, [
      e.el,
      o,
      e,
      t
    ]), Ke());
  }
}
function el(e, t) {
  if (ue) {
    let n = ue.provides;
    const s = ue.parent && ue.parent.provides;
    s === n && (n = ue.provides = Object.create(s)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const s = Zl();
  if (s || bt) {
    let r = bt ? bt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(s && s.proxy) : t;
  }
}
const tl = /* @__PURE__ */ Symbol.for("v-scx"), nl = () => tn(tl);
function Nn(e, t, n) {
  return Rr(e, t, n);
}
function Rr(e, t, n = z) {
  const { immediate: s, deep: r, flush: i, once: l } = n, o = le({}, n), c = t && s || !t && i !== "post";
  let d;
  if (Lt) {
    if (i === "sync") {
      const T = nl();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!c) {
      const T = () => {
      };
      return T.stop = Re, T.resume = Re, T.pause = Re, T;
    }
  }
  const f = ue;
  o.call = (T, D, O) => ve(T, f, D, O);
  let h = !1;
  i === "post" ? o.scheduler = (T) => {
    pe(T, f && f.suspense);
  } : i !== "sync" && (h = !0, o.scheduler = (T, D) => {
    D ? T() : as(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), h && (T.flags |= 2, f && (T.id = f.uid, T.i = f));
  };
  const S = Ji(e, t, o);
  return Lt && (d ? d.push(S) : c && S()), S;
}
function sl(e, t, n) {
  const s = this.proxy, r = Z(e) ? e.includes(".") ? Ir(s, e) : () => s[e] : e.bind(s, s);
  let i;
  V(t) ? i = t : (i = t.handler, n = t);
  const l = Bt(this), o = Rr(r, i.bind(s), n);
  return l(), o;
}
function Ir(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const rl = /* @__PURE__ */ Symbol("_vte"), Sn = (e) => e.__isTeleport, Dn = /* @__PURE__ */ Symbol("_leaveCb");
function il(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== We) {
        t = n;
        break;
      }
  }
  return t;
}
function Nr(e) {
  if (!fs(e))
    return Sn(e.type) && e.children ? il(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && V(n.default))
      return n.default();
  }
}
function us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    us(
      Sn(n.type) && Nr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Dr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ts(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const cn = /* @__PURE__ */ new WeakMap();
function Rt(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (O, U) => Rt(
        O,
        t && (I(t) ? t[U] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (It(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Rt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Tn(s.component) : s.el, l = r ? null : i, { i: o, r: c } = e, d = t && t.r, f = o.refs === z ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ W(h), T = h === z ? tr : (O) => Ts(f, O) ? !1 : K(S, O), D = (O, U) => !(U && Ts(f, U));
  if (d != null && d !== c) {
    if (As(t), Z(d))
      f[d] = null, T(d) && (h[d] = null);
    else if (/* @__PURE__ */ fe(d)) {
      const O = t;
      D(d, O.k) && (d.value = null), O.k && (f[O.k] = null);
    }
  }
  if (V(c))
    Kt(c, o, 12, [l, f]);
  else {
    const O = Z(c), U = /* @__PURE__ */ fe(c);
    if (O || U) {
      const p = () => {
        if (e.f) {
          const m = O ? T(c) ? h[c] : f[c] : D() || !e.k ? c.value : f[e.k];
          if (r)
            I(m) && Qn(m, i);
          else if (I(m))
            m.includes(i) || m.push(i);
          else if (O)
            f[c] = [i], T(c) && (h[c] = f[c]);
          else {
            const R = [i];
            D(c, e.k) && (c.value = R), e.k && (f[e.k] = R);
          }
        } else O ? (f[c] = l, T(c) && (h[c] = l)) : U && (D(c, e.k) && (c.value = l), e.k && (f[e.k] = l));
      };
      if (l) {
        const m = () => {
          p(), cn.delete(e);
        };
        m.id = -1, cn.set(e, m), pe(m, n);
      } else
        As(e), p();
    }
  }
}
function As(e) {
  const t = cn.get(e);
  t && (t.flags |= 8, cn.delete(e));
}
yn().requestIdleCallback;
yn().cancelIdleCallback;
const It = (e) => !!e.type.__asyncLoader, fs = (e) => e.type.__isKeepAlive;
function ll(e, t) {
  Ur(e, "a", t);
}
function ol(e, t) {
  Ur(e, "da", t);
}
function Ur(e, t, n = ue) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Cn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      fs(r.parent.vnode) && cl(s, t, n, r), r = r.parent;
  }
}
function cl(e, t, n, s) {
  const r = Cn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Vr(() => {
    Qn(s[t], r);
  }, n);
}
function Cn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      He();
      const o = Bt(n), c = ve(t, n, e, l);
      return o(), Ke(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ke = (e) => (t, n = ue) => {
  (!Lt || e === "sp") && Cn(e, (...s) => t(...s), n);
}, al = ke("bm"), ul = ke("m"), fl = ke(
  "bu"
), dl = ke("u"), pl = ke(
  "bum"
), Vr = ke("um"), hl = ke(
  "sp"
), gl = ke("rtg"), ml = ke("rtc");
function bl(e, t = ue) {
  Cn("ec", e, t);
}
const yl = /* @__PURE__ */ Symbol.for("v-ndc");
function Te(e, t, n, s) {
  let r;
  const i = n, l = I(e);
  if (l || Z(e)) {
    const o = l && /* @__PURE__ */ ct(e);
    let c = !1, d = !1;
    o && (c = !/* @__PURE__ */ _e(e), d = /* @__PURE__ */ Xe(e), e = _n(e)), r = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      r[f] = t(
        c ? d ? yt(Be(e[f])) : Be(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (k(e))
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
const zn = (e) => e ? ii(e) ? Tn(e) : zn(e.parent) : null, Nt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zn(e.parent),
    $root: (e) => zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      as(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ar.bind(e.proxy)),
    $watch: (e) => sl.bind(e)
  })
), Un = (e, t) => e !== z && !e.__isScriptSetup && K(e, t), _l = {
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
        if (Un(s, t))
          return l[t] = 1, s[t];
        if (r !== z && K(r, t))
          return l[t] = 2, r[t];
        if (K(i, t))
          return l[t] = 3, i[t];
        if (n !== z && K(n, t))
          return l[t] = 4, n[t];
        Gn && (l[t] = 0);
      }
    }
    const d = Nt[t];
    let f, h;
    if (d)
      return t === "$attrs" && ie(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (f = o.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== z && K(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, K(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Un(r, t) ? (r[t] = n, !0) : s !== z && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: l }
  }, o) {
    let c;
    return !!(n[o] || e !== z && o[0] !== "$" && K(e, o) || Un(t, o) || K(i, o) || K(s, o) || K(Nt, o) || K(r.config.globalProperties, o) || (c = l.__cssModules) && c[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Os(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Gn = !0;
function vl(e) {
  const t = jr(e), n = e.proxy, s = e.ctx;
  Gn = !1, t.beforeCreate && Ps(t.beforeCreate, e, "bc");
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
    beforeMount: h,
    mounted: S,
    beforeUpdate: T,
    updated: D,
    activated: O,
    deactivated: U,
    beforeDestroy: p,
    beforeUnmount: m,
    destroyed: R,
    unmounted: F,
    render: Y,
    renderTracked: de,
    renderTriggered: xe,
    errorCaptured: qe,
    serverPrefetch: Wt,
    // public API
    expose: Ze,
    inheritAttrs: vt,
    // assets
    components: kt,
    directives: qt,
    filters: An
  } = t;
  if (d && xl(d, s, null), l)
    for (const X in l) {
      const G = l[X];
      V(G) && (s[X] = G.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    k(X) && (e.data = /* @__PURE__ */ vn(X));
  }
  if (Gn = !0, i)
    for (const X in i) {
      const G = i[X], Qe = V(G) ? G.bind(n, n) : V(G.get) ? G.get.bind(n, n) : Re, zt = !V(G) && V(G.set) ? G.set.bind(n) : Re, et = ze({
        get: Qe,
        set: zt
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Se) => et.value = Se
      });
    }
  if (o)
    for (const X in o)
      $r(o[X], s, n, X);
  if (c) {
    const X = V(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((G) => {
      el(G, X[G]);
    });
  }
  f && Ps(f, e, "c");
  function oe(X, G) {
    I(G) ? G.forEach((Qe) => X(Qe.bind(n))) : G && X(G.bind(n));
  }
  if (oe(al, h), oe(ul, S), oe(fl, T), oe(dl, D), oe(ll, O), oe(ol, U), oe(bl, qe), oe(ml, de), oe(gl, xe), oe(pl, m), oe(Vr, F), oe(hl, Wt), I(Ze))
    if (Ze.length) {
      const X = e.exposed || (e.exposed = {});
      Ze.forEach((G) => {
        Object.defineProperty(X, G, {
          get: () => n[G],
          set: (Qe) => n[G] = Qe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Re && (e.render = Y), vt != null && (e.inheritAttrs = vt), kt && (e.components = kt), qt && (e.directives = qt), Wt && Dr(e);
}
function xl(e, t, n = Re) {
  I(e) && (e = Jn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    k(r) ? "default" in r ? i = tn(
      r.from || s,
      r.default,
      !0
    ) : i = tn(r.from || s) : i = tn(r), /* @__PURE__ */ fe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function Ps(e, t, n) {
  ve(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function $r(e, t, n, s) {
  let r = s.includes(".") ? Ir(n, s) : () => n[s];
  if (Z(e)) {
    const i = t[e];
    V(i) && Nn(r, i);
  } else if (V(e))
    Nn(r, e.bind(n));
  else if (k(e))
    if (I(e))
      e.forEach((i) => $r(i, t, n, s));
    else {
      const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(i) && Nn(r, i, e);
    }
}
function jr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let c;
  return o ? c = o : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (d) => an(c, d, l, !0)
  ), an(c, t, l)), k(t) && i.set(t, c), c;
}
function an(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && an(e, i, n, !0), r && r.forEach(
    (l) => an(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = Sl[l] || n && n[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const Sl = {
  data: Fs,
  props: Ms,
  emits: Ms,
  // objects
  methods: At,
  computed: At,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: At,
  directives: At,
  // watch
  watch: wl,
  // provide / inject
  provide: Fs,
  inject: Cl
};
function Fs(e, t) {
  return t ? e ? function() {
    return le(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Cl(e, t) {
  return At(Jn(e), Jn(t));
}
function Jn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function At(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ms(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Os(e),
    Os(t ?? {})
  ) : t;
}
function wl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ce(e[s], t[s]);
  return n;
}
function Lr() {
  return {
    app: null,
    config: {
      isNativeTag: tr,
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
let El = 0;
function Tl(e, t) {
  return function(s, r = null) {
    V(s) || (s = le({}, s)), r != null && !k(r) && (r = null);
    const i = Lr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let c = !1;
    const d = i.app = {
      _uid: El++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ro,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return l.has(f) || (f && V(f.install) ? (l.add(f), f.install(d, ...h)) : V(f) && (l.add(f), f(d, ...h))), d;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), d;
      },
      component(f, h) {
        return h ? (i.components[f] = h, d) : i.components[f];
      },
      directive(f, h) {
        return h ? (i.directives[f] = h, d) : i.directives[f];
      },
      mount(f, h, S) {
        if (!c) {
          const T = d._ceVNode || Le(s, r);
          return T.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(T, f, S), c = !0, d._container = f, f.__vue_app__ = d, Tn(T.component);
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
      provide(f, h) {
        return i.provides[f] = h, d;
      },
      runWithContext(f) {
        const h = bt;
        bt = d;
        try {
          return f();
        } finally {
          bt = h;
        }
      }
    };
    return d;
  };
}
let bt = null;
const Al = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${ft(t)}Modifiers`];
function Ol(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const i = t.startsWith("update:"), l = i && Al(s, t.slice(7));
  l && (l.trim && (r = n.map((f) => Z(f) ? f.trim() : f)), l.number && (r = r.map(bn)));
  let o, c = s[o = Pn(t)] || // also try camelCase event handler (#2249)
  s[o = Pn(be(t))];
  !c && i && (c = s[o = Pn(ft(t))]), c && ve(
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
const Pl = /* @__PURE__ */ new WeakMap();
function Hr(e, t, n = !1) {
  const s = n ? Pl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!V(e)) {
    const c = (d) => {
      const f = Hr(d, t, !0);
      f && (o = !0, le(l, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !o ? (k(e) && s.set(e, null), null) : (I(i) ? i.forEach((c) => l[c] = null) : le(l, i), k(e) && s.set(e, l), l);
}
function wn(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, ft(t)) || K(e, t));
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
    props: h,
    data: S,
    setupState: T,
    ctx: D,
    inheritAttrs: O
  } = e, U = on(e);
  let p, m;
  try {
    if (n.shapeFlag & 4) {
      const F = r || s, Y = F;
      p = Me(
        d.call(
          Y,
          F,
          f,
          h,
          T,
          S,
          D
        )
      ), m = o;
    } else {
      const F = t;
      p = Me(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: l, emit: c }
        ) : F(
          h,
          null
        )
      ), m = t.props ? o : Fl(o);
    }
  } catch (F) {
    at.length = 0, xn(F, e, 1), p = Le(We);
  }
  let R = p;
  if (m && O !== !1) {
    const F = Object.keys(m), { shapeFlag: Y } = R;
    F.length && Y & 7 && (i && F.some(gn) && (m = Ml(
      m,
      i
    )), R = _t(R, m, !1, !0));
  }
  if (n.dirs && (R = _t(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Sn(R.type) && Nr(R) || R;
    us(F, n.transition);
  }
  return p = R, on(U), p;
}
const Fl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ml = (e, t) => {
  const n = {};
  for (const s in e)
    (!gn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Rl(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: l, children: o, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Is(s, l, d) : !!l;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const S = f[h];
        if (Kr(l, s, S) && !wn(d, S))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? Is(s, l, d) : !0 : !!l;
  return !1;
}
function Is(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Kr(t, e, i) && !wn(n, i))
      return !0;
  }
  return !1;
}
function Kr(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && k(s) && k(r) ? !Ye(s, r) : s !== r;
}
function Il({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Br = {}, Wr = () => Object.create(Br), kr = (e) => Object.getPrototypeOf(e) === Br;
function Nl(e, t, n, s = !1) {
  const r = {}, i = Wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Ki(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Dl(e, t, n, s) {
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
      for (let h = 0; h < f.length; h++) {
        let S = f[h];
        if (wn(e.emitsOptions, S))
          continue;
        const T = t[S];
        if (c)
          if (K(i, S))
            T !== i[S] && (i[S] = T, d = !0);
          else {
            const D = be(S);
            r[D] = Yn(
              c,
              o,
              D,
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
    qr(e, t, r, i) && (d = !0);
    let f;
    for (const h in o)
      (!t || // for camelCase
      !K(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = ft(h)) === h || !K(t, f))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[h] = Yn(
        c,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (i !== o)
      for (const h in i)
        (!t || !K(t, h)) && (delete i[h], d = !0);
  }
  d && $e(e.attrs, "set", "");
}
function qr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let c in t) {
      if (Pt(c))
        continue;
      const d = t[c];
      let f;
      r && K(r, f = be(c)) ? !i || !i.includes(f) ? n[f] = d : (o || (o = {}))[f] = d : wn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, l = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ W(n), d = o || z;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = Yn(
        r,
        c,
        h,
        d[h],
        e,
        !K(d, h)
      );
    }
  }
  return l;
}
function Yn(e, t, n, s, r, i) {
  const l = e[n];
  if (l != null) {
    const o = K(l, "default");
    if (o && s === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && V(c)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const f = Bt(r);
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
    ] && (s === "" || s === ft(n)) && (s = !0));
  }
  return s;
}
const Ul = /* @__PURE__ */ new WeakMap();
function zr(e, t, n = !1) {
  const s = n ? Ul : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let c = !1;
  if (!V(e)) {
    const f = (h) => {
      c = !0;
      const [S, T] = zr(h, t, !0);
      le(l, S), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return k(e) && s.set(e, gt), gt;
  if (I(i))
    for (let f = 0; f < i.length; f++) {
      const h = be(i[f]);
      Ns(h) && (l[h] = z);
    }
  else if (i)
    for (const f in i) {
      const h = be(f);
      if (Ns(h)) {
        const S = i[f], T = l[h] = I(S) || V(S) ? { type: S } : le({}, S), D = T.type;
        let O = !1, U = !0;
        if (I(D))
          for (let p = 0; p < D.length; ++p) {
            const m = D[p], R = V(m) && m.name;
            if (R === "Boolean") {
              O = !0;
              break;
            } else R === "String" && (U = !1);
          }
        else
          O = V(D) && D.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = O, T[
          1
          /* shouldCastTrue */
        ] = U, (O || K(T, "default")) && o.push(h);
      }
    }
  const d = [l, o];
  return k(e) && s.set(e, d), d;
}
function Ns(e) {
  return e[0] !== "$" && !Pt(e);
}
const ds = (e) => e === "_" || e === "_ctx" || e === "$stable", ps = (e) => I(e) ? e.map(Me) : [Me(e)], Vl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Qi((...r) => ps(t(...r)), n);
  return s._c = !1, s;
}, Gr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (ds(r)) continue;
    const i = e[r];
    if (V(i))
      t[r] = Vl(r, i, s);
    else if (i != null) {
      const l = ps(i);
      t[r] = () => l;
    }
  }
}, Jr = (e, t) => {
  const n = ps(t);
  e.slots.default = () => n;
}, Yr = (e, t, n) => {
  for (const s in t)
    (n || !ds(s)) && (e[s] = t[s]);
}, $l = (e, t, n) => {
  const s = e.slots = Wr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Yr(s, t, n), n && lr(s, "_", r, !0)) : Gr(t, s);
  } else t && Jr(e, t);
}, jl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, l = z;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : Yr(r, t, n) : (i = !t.$stable, Gr(t, r)), l = t;
  } else t && (Jr(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !ds(o) && l[o] == null && delete r[o];
}, pe = Wl;
function Ll(e) {
  return Hl(e);
}
function Hl(e, t) {
  const n = yn();
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
    parentNode: h,
    nextSibling: S,
    setScopeId: T = Re,
    insertStaticContent: D
  } = e, O = (a, u, g, x = null, v = null, y = null, E = void 0, w = null, C = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !Et(a, u) && (x = Gt(a), Se(a, v, y, !0), a = null), u.patchFlag === -2 && (C = !1, u.dynamicChildren = null);
    const { type: _, ref: M, shapeFlag: A } = u;
    switch (_) {
      case En:
        U(a, u, g, x);
        break;
      case We:
        p(a, u, g, x);
        break;
      case $n:
        a == null && m(u, g, x, E);
        break;
      case te:
        kt(
          a,
          u,
          g,
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
          a,
          u,
          g,
          x,
          v,
          y,
          E,
          w,
          C
        ) : A & 6 ? qt(
          a,
          u,
          g,
          x,
          v,
          y,
          E,
          w,
          C
        ) : (A & 64 || A & 128) && _.process(
          a,
          u,
          g,
          x,
          v,
          y,
          E,
          w,
          C,
          St
        );
    }
    M != null && v ? Rt(M, a && a.ref, y, u || a, !u) : M == null && a && a.ref != null && Rt(a.ref, null, y, a, !0);
  }, U = (a, u, g, x) => {
    if (a == null)
      s(
        u.el = o(u.children),
        g,
        x
      );
    else {
      const v = u.el = a.el;
      u.children !== a.children && d(v, u.children);
    }
  }, p = (a, u, g, x) => {
    a == null ? s(
      u.el = c(u.children || ""),
      g,
      x
    ) : u.el = a.el;
  }, m = (a, u, g, x) => {
    [a.el, a.anchor] = D(
      a.children,
      u,
      g,
      x,
      a.el,
      a.anchor
    );
  }, R = ({ el: a, anchor: u }, g, x) => {
    let v;
    for (; a && a !== u; )
      v = S(a), s(a, g, x), a = v;
    s(u, g, x);
  }, F = ({ el: a, anchor: u }) => {
    let g;
    for (; a && a !== u; )
      g = S(a), r(a), a = g;
    r(u);
  }, Y = (a, u, g, x, v, y, E, w, C) => {
    if (u.type === "svg" ? E = "svg" : u.type === "math" && (E = "mathml"), a == null)
      de(
        u,
        g,
        x,
        v,
        y,
        E,
        w,
        C
      );
    else {
      const _ = a.el && a.el._isVueCE ? a.el : null;
      try {
        _ && _._beginPatch(), Wt(
          a,
          u,
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
  }, de = (a, u, g, x, v, y, E, w) => {
    let C, _;
    const { props: M, shapeFlag: A, transition: P, dirs: N } = a;
    if (C = a.el = l(
      a.type,
      y,
      M && M.is,
      M
    ), A & 8 ? f(C, a.children) : A & 16 && qe(
      a.children,
      C,
      null,
      x,
      v,
      Vn(a, y),
      E,
      w
    ), N && nt(a, null, x, "created"), xe(C, a, a.scopeId, E, x), M) {
      for (const q in M)
        q !== "value" && !Pt(q) && i(C, q, null, M[q], y, x);
      "value" in M && i(C, "value", null, M.value, y), (_ = M.onVnodeBeforeMount) && Oe(_, x, a);
    }
    N && nt(a, null, x, "beforeMount");
    const L = Kl(v, P);
    L && P.beforeEnter(C), s(C, u, g), ((_ = M && M.onVnodeMounted) || L || N) && pe(() => {
      _ && Oe(_, x, a), L && P.enter(C), N && nt(a, null, x, "mounted");
    }, v);
  }, xe = (a, u, g, x, v) => {
    if (g && T(a, g), x)
      for (let y = 0; y < x.length; y++)
        T(a, x[y]);
    if (v) {
      let y = v.subTree;
      if (u === y || ei(y.type) && (y.ssContent === u || y.ssFallback === u)) {
        const E = v.vnode;
        xe(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, qe = (a, u, g, x, v, y, E, w, C = 0) => {
    for (let _ = C; _ < a.length; _++) {
      const M = a[_] = w ? Ue(a[_]) : Me(a[_]);
      O(
        null,
        M,
        u,
        g,
        x,
        v,
        y,
        E,
        w
      );
    }
  }, Wt = (a, u, g, x, v, y, E) => {
    const w = u.el = a.el;
    let { patchFlag: C, dynamicChildren: _, dirs: M } = u;
    C |= a.patchFlag & 16;
    const A = a.props || z, P = u.props || z;
    let N;
    if (g && st(g, !1), (N = P.onVnodeBeforeUpdate) && Oe(N, g, u, a), M && nt(u, a, g, "beforeUpdate"), g && st(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!a.dynamicChildren || a.dynamicChildren.length !== _.length) && (C = 0, E = !1, _ = null), (A.innerHTML && P.innerHTML == null || A.textContent && P.textContent == null) && f(w, ""), _ ? Ze(
      a.dynamicChildren,
      _,
      w,
      g,
      x,
      Vn(u, v),
      y
    ) : E || G(
      a,
      u,
      w,
      null,
      g,
      x,
      Vn(u, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        vt(w, A, P, g, v);
      else if (C & 2 && A.class !== P.class && i(w, "class", null, P.class, v), C & 4 && i(w, "style", A.style, P.style, v), C & 8) {
        const L = u.dynamicProps;
        for (let q = 0; q < L.length; q++) {
          const B = L[q], Q = A[B], se = P[B];
          (se !== Q || B === "value") && i(w, B, Q, se, v, g);
        }
      }
      C & 1 && a.children !== u.children && f(w, u.children);
    } else !E && _ == null && vt(w, A, P, g, v);
    ((N = P.onVnodeUpdated) || M) && pe(() => {
      N && Oe(N, g, u, a), M && nt(u, a, g, "updated");
    }, x);
  }, Ze = (a, u, g, x, v, y, E) => {
    for (let w = 0; w < u.length; w++) {
      const C = a[w], _ = u[w], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Et(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      O(
        C,
        _,
        M,
        null,
        x,
        v,
        y,
        E,
        !0
      );
    }
  }, vt = (a, u, g, x, v) => {
    if (u !== g) {
      if (u !== z)
        for (const y in u)
          !Pt(y) && !(y in g) && i(
            a,
            y,
            u[y],
            null,
            v,
            x
          );
      for (const y in g) {
        if (Pt(y)) continue;
        const E = g[y], w = u[y];
        E !== w && y !== "value" && i(a, y, w, E, v, x);
      }
      "value" in g && i(a, "value", u.value, g.value, v);
    }
  }, kt = (a, u, g, x, v, y, E, w, C) => {
    const _ = u.el = a ? a.el : o(""), M = u.anchor = a ? a.anchor : o("");
    let { patchFlag: A, dynamicChildren: P, slotScopeIds: N } = u;
    N && (w = w ? w.concat(N) : N), a == null ? (s(_, g, x), s(M, g, x), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      M,
      v,
      y,
      E,
      w,
      C
    )) : A > 0 && A & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === P.length ? (Ze(
      a.dynamicChildren,
      P,
      g,
      v,
      y,
      E,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || v && u === v.subTree) && Xr(
      a,
      u,
      !0
      /* shallow */
    )) : G(
      a,
      u,
      g,
      M,
      v,
      y,
      E,
      w,
      C
    );
  }, qt = (a, u, g, x, v, y, E, w, C) => {
    u.slotScopeIds = w, a == null ? u.shapeFlag & 512 ? v.ctx.activate(
      u,
      g,
      x,
      E,
      C
    ) : An(
      u,
      g,
      x,
      v,
      y,
      E,
      C
    ) : hs(a, u, C);
  }, An = (a, u, g, x, v, y, E) => {
    const w = a.component = Xl(
      a,
      x,
      v
    );
    if (fs(a) && (w.ctx.renderer = St), Ql(w, !1, E), w.asyncDep) {
      if (v && v.registerDep(w, oe, E), !a.el) {
        const C = w.subTree = Le(We);
        p(null, C, u, g), a.placeholder = C.el;
      }
    } else
      oe(
        w,
        a,
        u,
        g,
        v,
        y,
        E
      );
  }, hs = (a, u, g) => {
    const x = u.component = a.component;
    if (Rl(a, u, g))
      if (x.asyncDep && !x.asyncResolved) {
        X(x, u, g);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = a.el, x.vnode = u;
  }, oe = (a, u, g, x, v, y, E) => {
    const w = () => {
      if (a.isMounted) {
        let { next: A, bu: P, u: N, parent: L, vnode: q } = a;
        {
          const we = Zr(a);
          if (we) {
            A && (A.el = q.el, X(a, A, E)), we.asyncDep.then(() => {
              pe(() => {
                a.isUnmounted || _();
              }, v);
            });
            return;
          }
        }
        let B = A, Q;
        st(a, !1), A ? (A.el = q.el, X(a, A, E)) : A = q, P && en(P), (Q = A.props && A.props.onVnodeBeforeUpdate) && Oe(Q, L, A, q), st(a, !0);
        const se = Rs(a), Ce = a.subTree;
        a.subTree = se, O(
          Ce,
          se,
          // parent may have changed if it's in a teleport
          h(Ce.el),
          // anchor may have changed if it's in a fragment
          Gt(Ce),
          a,
          v,
          y
        ), A.el = se.el, B === null && Il(a, se.el), N && pe(N, v), (Q = A.props && A.props.onVnodeUpdated) && pe(
          () => Oe(Q, L, A, q),
          v
        );
      } else {
        let A;
        const { el: P, props: N } = u, { bm: L, m: q, parent: B, root: Q, type: se } = a, Ce = It(u);
        st(a, !1), L && en(L), !Ce && (A = N && N.onVnodeBeforeMount) && Oe(A, B, u), st(a, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            se,
            a.parent ? a.parent.type : void 0
          );
          const we = a.subTree = Rs(a);
          O(
            null,
            we,
            g,
            x,
            a,
            v,
            y
          ), u.el = we.el;
        }
        if (q && pe(q, v), !Ce && (A = N && N.onVnodeMounted)) {
          const we = u;
          pe(
            () => Oe(A, B, we),
            v
          );
        }
        (u.shapeFlag & 256 || B && It(B.vnode) && B.vnode.shapeFlag & 256) && a.a && pe(a.a, v), a.isMounted = !0, u = g = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new ur(w);
    a.scope.off();
    const _ = a.update = C.run.bind(C), M = a.job = C.runIfDirty.bind(C);
    M.i = a, M.id = a.uid, C.scheduler = () => as(M), st(a, !0), _();
  }, X = (a, u, g) => {
    u.component = a;
    const x = a.vnode.props;
    a.vnode = u, a.next = null, Dl(a, u.props, x, g), jl(a, u.children, g), He(), Es(a), Ke();
  }, G = (a, u, g, x, v, y, E, w, C = !1) => {
    const _ = a && a.children, M = a ? a.shapeFlag : 0, A = u.children, { patchFlag: P, shapeFlag: N } = u;
    if (P > 0) {
      if (P & 128) {
        zt(
          _,
          A,
          g,
          x,
          v,
          y,
          E,
          w,
          C
        );
        return;
      } else if (P & 256) {
        Qe(
          _,
          A,
          g,
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
    N & 8 ? (M & 16 && xt(_, v, y), A !== _ && f(g, A)) : M & 16 ? N & 16 ? zt(
      _,
      A,
      g,
      x,
      v,
      y,
      E,
      w,
      C
    ) : xt(_, v, y, !0) : (M & 8 && f(g, ""), N & 16 && qe(
      A,
      g,
      x,
      v,
      y,
      E,
      w,
      C
    ));
  }, Qe = (a, u, g, x, v, y, E, w, C) => {
    a = a || gt, u = u || gt;
    const _ = a.length, M = u.length, A = Math.min(_, M);
    let P;
    for (P = 0; P < A; P++) {
      const N = u[P] = C ? Ue(u[P]) : Me(u[P]);
      O(
        a[P],
        N,
        g,
        null,
        v,
        y,
        E,
        w,
        C
      );
    }
    _ > M ? xt(
      a,
      v,
      y,
      !0,
      !1,
      A
    ) : qe(
      u,
      g,
      x,
      v,
      y,
      E,
      w,
      C,
      A
    );
  }, zt = (a, u, g, x, v, y, E, w, C) => {
    let _ = 0;
    const M = u.length;
    let A = a.length - 1, P = M - 1;
    for (; _ <= A && _ <= P; ) {
      const N = a[_], L = u[_] = C ? Ue(u[_]) : Me(u[_]);
      if (Et(N, L))
        O(
          N,
          L,
          g,
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
    for (; _ <= A && _ <= P; ) {
      const N = a[A], L = u[P] = C ? Ue(u[P]) : Me(u[P]);
      if (Et(N, L))
        O(
          N,
          L,
          g,
          null,
          v,
          y,
          E,
          w,
          C
        );
      else
        break;
      A--, P--;
    }
    if (_ > A) {
      if (_ <= P) {
        const N = P + 1, L = N < M ? u[N].el : x;
        for (; _ <= P; )
          O(
            null,
            u[_] = C ? Ue(u[_]) : Me(u[_]),
            g,
            L,
            v,
            y,
            E,
            w,
            C
          ), _++;
      }
    } else if (_ > P)
      for (; _ <= A; )
        Se(a[_], v, y, !0), _++;
    else {
      const N = _, L = _, q = /* @__PURE__ */ new Map();
      for (_ = L; _ <= P; _++) {
        const he = u[_] = C ? Ue(u[_]) : Me(u[_]);
        he.key != null && q.set(he.key, _);
      }
      let B, Q = 0;
      const se = P - L + 1;
      let Ce = !1, we = 0;
      const Ct = new Array(se);
      for (_ = 0; _ < se; _++) Ct[_] = 0;
      for (_ = N; _ <= A; _++) {
        const he = a[_];
        if (Q >= se) {
          Se(he, v, y, !0);
          continue;
        }
        let Ee;
        if (he.key != null)
          Ee = q.get(he.key);
        else
          for (B = L; B <= P; B++)
            if (Ct[B - L] === 0 && Et(he, u[B])) {
              Ee = B;
              break;
            }
        Ee === void 0 ? Se(he, v, y, !0) : (Ct[Ee - L] = _ + 1, Ee >= we ? we = Ee : Ce = !0, O(
          he,
          u[Ee],
          g,
          null,
          v,
          y,
          E,
          w,
          C
        ), Q++);
      }
      const bs = Ce ? Bl(Ct) : gt;
      for (B = bs.length - 1, _ = se - 1; _ >= 0; _--) {
        const he = L + _, Ee = u[he], ys = u[he + 1], _s = he + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ys.el || Qr(ys)
        ) : x;
        Ct[_] === 0 ? O(
          null,
          Ee,
          g,
          _s,
          v,
          y,
          E,
          w,
          C
        ) : Ce && (B < 0 || _ !== bs[B] ? et(Ee, g, _s, 2) : B--);
      }
    }
  }, et = (a, u, g, x, v = null) => {
    const { el: y, type: E, transition: w, children: C, shapeFlag: _ } = a;
    if (_ & 6) {
      et(a.component.subTree, u, g, x);
      return;
    }
    if (_ & 128) {
      a.suspense.move(u, g, x);
      return;
    }
    if (_ & 64) {
      E.move(a, u, g, St);
      return;
    }
    if (E === te) {
      s(y, u, g);
      for (let A = 0; A < C.length; A++)
        et(C[A], u, g, x);
      s(a.anchor, u, g);
      return;
    }
    if (E === $n) {
      R(a, u, g);
      return;
    }
    if (x !== 2 && _ & 1 && w)
      if (x === 0)
        w.persisted && !y[Dn] ? s(y, u, g) : (w.beforeEnter(y), s(y, u, g), pe(() => w.enter(y), v));
      else {
        const { leave: A, delayLeave: P, afterLeave: N } = w, L = () => {
          a.ctx.isUnmounted ? r(y) : s(y, u, g);
        }, q = () => {
          const B = y._isLeaving || !!y[Dn];
          y._isLeaving && y[Dn](
            !0
            /* cancelled */
          ), w.persisted && !B ? L() : A(y, () => {
            L(), N && N();
          });
        };
        P ? P(y, L, q) : q();
      }
    else
      s(y, u, g);
  }, Se = (a, u, g, x = !1, v = !1) => {
    const {
      type: y,
      props: E,
      ref: w,
      children: C,
      dynamicChildren: _,
      shapeFlag: M,
      patchFlag: A,
      dirs: P,
      cacheIndex: N,
      memo: L
    } = a;
    if (A === -2 && (v = !1), w != null && (He(), Rt(w, null, g, a, !0), Ke()), N != null && (u.renderCache[N] = void 0), M & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const q = M & 1 && P, B = !It(a);
    let Q;
    if (B && (Q = E && E.onVnodeBeforeUnmount) && Oe(Q, u, a), M & 6)
      ui(a.component, g, x);
    else {
      if (M & 128) {
        a.suspense.unmount(g, x);
        return;
      }
      q && nt(a, null, u, "beforeUnmount"), M & 64 ? a.type.remove(
        a,
        u,
        g,
        St,
        x
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== te || A > 0 && A & 64) ? xt(
        _,
        u,
        g,
        !1,
        !0
      ) : (y === te && A & 384 || !v && M & 16) && xt(C, u, g), x && gs(a);
    }
    const se = L != null && N == null;
    (B && (Q = E && E.onVnodeUnmounted) || q || se) && pe(() => {
      Q && Oe(Q, u, a), q && nt(a, null, u, "unmounted"), se && (a.el = null);
    }, g);
  }, gs = (a) => {
    const { type: u, el: g, anchor: x, transition: v } = a;
    if (u === te) {
      ai(g, x);
      return;
    }
    if (u === $n) {
      F(a);
      return;
    }
    const y = () => {
      r(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: w } = v, C = () => E(g, y);
      w ? w(a.el, y, C) : C();
    } else
      y();
  }, ai = (a, u) => {
    let g;
    for (; a !== u; )
      g = S(a), r(a), a = g;
    r(u);
  }, ui = (a, u, g) => {
    const { bum: x, scope: v, job: y, subTree: E, um: w, m: C, a: _ } = a;
    Ds(C), Ds(_), x && en(x), v.stop(), y && (y.flags |= 8, Se(E, a, u, g)), w && pe(w, u), pe(() => {
      a.isUnmounted = !0;
    }, u);
  }, xt = (a, u, g, x = !1, v = !1, y = 0) => {
    for (let E = y; E < a.length; E++)
      Se(a[E], u, g, x, v);
  }, Gt = (a) => {
    if (a.shapeFlag & 6)
      return Gt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = S(a.anchor || a.el), g = u && u[rl];
    return g ? S(g) : u;
  };
  let On = !1;
  const ms = (a, u, g) => {
    let x;
    a == null ? u._vnode && (Se(u._vnode, null, null, !0), x = u._vnode.component) : O(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = a, On || (On = !0, Es(x), Pr(), On = !1);
  }, St = {
    p: O,
    um: Se,
    m: et,
    r: gs,
    mt: An,
    mc: qe,
    pc: G,
    pbc: Ze,
    n: Gt,
    o: e
  };
  return {
    render: ms,
    hydrate: void 0,
    createApp: Tl(ms)
  };
}
function Vn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function st({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Kl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = Ue(r[i]), o.el = l.el), !n && o.patchFlag !== -2 && Xr(l, o)), o.type === En && (o.patchFlag === -1 && (o = r[i] = Ue(o)), o.el = l.el), o.type === We && !o.el && (o.el = l.el);
    }
}
function Bl(e) {
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
function Zr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zr(t);
}
function Ds(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qr(t.subTree) : null;
}
const ei = (e) => e.__isSuspense;
function Wl(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Zi(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), En = /* @__PURE__ */ Symbol.for("v-txt"), We = /* @__PURE__ */ Symbol.for("v-cmt"), $n = /* @__PURE__ */ Symbol.for("v-stc"), at = [];
let ge = null;
function $(e = !1) {
  at.push(ge = e ? null : []);
}
function ti() {
  at.pop(), ge = at[at.length - 1] || null;
}
let $t = 1;
function Us(e, t = !1) {
  $t += e, e < 0 && ge && t && (ge.hasOnce = !0);
}
function ni(e) {
  return e.dynamicChildren = $t > 0 ? ge || gt : null, ti(), $t > 0 && ge && ge.push(e), e;
}
function j(e, t, n, s, r, i) {
  return ni(
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
function kl(e, t, n, s, r) {
  return ni(
    Le(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function si(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ri = ({ key: e }) => e ?? null, nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || /* @__PURE__ */ fe(e) || V(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, s = 0, r = null, i = e === te ? 0 : 1, l = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ri(t),
    ref: t && nn(t),
    scopeId: Mr,
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
  return o ? (un(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Z(n) ? 8 : 16), $t > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ge.push(c), c;
}
const Le = ql;
function ql(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === yl) && (e = We), si(e)) {
    const o = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && un(o, n), $t > 0 && !i && ge && (o.shapeFlag & 6 ? ge[ge.indexOf(e)] = o : ge.push(o)), o.patchFlag = -2, o;
  }
  if (so(e) && (e = e.__vccOpts), t) {
    t = zl(t);
    let { class: o, style: c } = t;
    o && !Z(o) && (t.class = ns(o)), k(c) && (/* @__PURE__ */ cs(c) && !I(c) && (c = le({}, c)), t.style = ts(c));
  }
  const l = Z(e) ? 1 : ei(e) ? 128 : Sn(e) ? 64 : k(e) ? 4 : V(e) ? 2 : 0;
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
function zl(e) {
  return e ? /* @__PURE__ */ cs(e) || kr(e) ? le({}, e) : e : null;
}
function _t(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: c } = e, d = t ? Gl(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && ri(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? I(i) ? i.concat(nn(t)) : [i, nn(t)] : nn(t)
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
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
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
  return Le(En, null, e, t);
}
function Ae(e = "", t = !1) {
  return t ? ($(), kl(We, null, e)) : Le(We, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? Le(We) : I(e) ? Le(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : si(e) ? Ue(e) : Le(En, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function un(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), un(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !kr(t) ? t._ctx = me : r === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (V(t)) {
    if (s & 65) {
      un(e, { default: t });
      return;
    }
    t = { default: t, _ctx: me }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ee(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Gl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ns([t.class, s.class]));
      else if (r === "style")
        t.style = ts([t.style, s.style]);
      else if (hn(r)) {
        const i = t[r], l = s[r];
        l && i !== l && !(I(i) && i.includes(l)) ? t[r] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !gn(r) && (t[r] = l);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Oe(e, t, n, s = null) {
  ve(e, t, 7, [
    n,
    s
  ]);
}
const Jl = Lr();
let Yl = 0;
function Xl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Jl, i = {
    uid: Yl++,
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
    scope: new Ci(
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
    propsOptions: zr(s, r),
    emitsOptions: Hr(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ol.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const Zl = () => ue || me;
let fn, jt;
{
  const e = yn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), jt = t(
    "__VUE_SSR_SETTERS__",
    (n) => Lt = n
  );
}
const Bt = (e) => {
  const t = ue;
  return fn(e), e.scope.on(), () => {
    e.scope.off(), fn(t);
  };
}, Vs = () => {
  ue && ue.scope.off(), fn(null);
};
function ii(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function Ql(e, t = !1, n = !1) {
  t && jt(t);
  const { props: s, children: r } = e.vnode, i = ii(e);
  Nl(e, s, i, t), $l(e, r, n || t);
  const l = i ? eo(e, t) : void 0;
  return t && jt(!1), l;
}
function eo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _l);
  const { setup: s } = n;
  if (s) {
    He();
    const r = e.setupContext = s.length > 1 ? no(e) : null, i = Bt(e), l = Kt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = nr(l);
    if (Ke(), i(), (o || e.sp) && !It(e) && Dr(e), o) {
      if (l.then(Vs, Vs), t)
        return l.then((c) => {
          jt(!0);
          try {
            $s(e, c, t);
          } finally {
            jt(!1);
          }
        }).catch((c) => {
          xn(c, e, 0);
        });
      e.asyncDep = l;
    } else
      $s(e, l);
  } else
    li(e);
}
function $s(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) && (e.setupState = Er(t)), li(e);
}
function li(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Re);
  {
    const r = Bt(e);
    He();
    try {
      vl(e);
    } finally {
      Ke(), r();
    }
  }
}
const to = {
  get(e, t) {
    return ie(e, "get", ""), e[t];
  }
};
function no(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, to),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Tn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Er(Bi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Nt)
        return Nt[n](e);
    },
    has(t, n) {
      return n in t || n in Nt;
    }
  })) : e.proxy;
}
function so(e) {
  return V(e) && "__vccOpts" in e;
}
const ze = (e, t) => /* @__PURE__ */ zi(e, t, Lt), ro = "3.5.42";
let Xn;
const js = typeof window < "u" && window.trustedTypes;
if (js)
  try {
    Xn = /* @__PURE__ */ js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const oi = Xn ? (e) => Xn.createHTML(e) : (e) => e, io = "http://www.w3.org/2000/svg", lo = "http://www.w3.org/1998/Math/MathML", De = typeof document < "u" ? document : null, Ls = De && /* @__PURE__ */ De.createElement("template"), oo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? De.createElementNS(io, e) : t === "mathml" ? De.createElementNS(lo, e) : n ? De.createElement(e, { is: n }) : De.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => De.createTextNode(e),
  createComment: (e) => De.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => De.querySelector(e),
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
      Ls.innerHTML = oi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Ls.content;
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
}, co = /* @__PURE__ */ Symbol("_vtc");
function ao(e, t, n) {
  const s = e[co];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Hs = /* @__PURE__ */ Symbol("_vod"), uo = /* @__PURE__ */ Symbol("_vsh"), fo = /* @__PURE__ */ Symbol(""), po = /(?:^|;)\s*display\s*:/;
function ho(e, t, n) {
  const s = e.style, r = Z(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (Z(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && Ot(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && Ot(s, l, "");
    for (const l in n) {
      l === "display" && (i = !0);
      const o = n[l];
      o != null ? mo(
        e,
        l,
        !Z(t) && t ? t[l] : void 0,
        o
      ) || Ot(s, l, o) : Ot(s, l, "");
    }
  } else if (r) {
    if (t !== n) {
      const l = s[fo];
      l && (n += ";" + l), s.cssText = n, i = po.test(n);
    }
  } else t && e.removeAttribute("style");
  Hs in e && (e[Hs] = i ? s.display : "", e[uo] && (s.display = "none"));
}
const Zt = /\s*!important$/;
function Ot(e, t, n) {
  if (I(n))
    n.forEach((s) => Ot(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Zt.test(n) ? e.setProperty(t, n.replace(Zt, ""), "important") : e.setProperty(t, n);
  else {
    const s = go(e, t);
    Zt.test(n) ? e.setProperty(
      ft(s),
      n.replace(Zt, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ks = ["Webkit", "Moz", "ms"], jn = {};
function go(e, t) {
  const n = jn[t];
  if (n)
    return n;
  let s = be(t);
  if (s !== "filter" && s in e)
    return jn[t] = s;
  s = ir(s);
  for (let r = 0; r < Ks.length; r++) {
    const i = Ks[r] + s;
    if (i in e)
      return jn[t] = i;
  }
  return t;
}
function mo(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Z(s) && n === s;
}
const Bs = "http://www.w3.org/1999/xlink";
function Ws(e, t, n, s, r, i = vi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bs, t.slice(6, t.length)) : e.setAttributeNS(Bs, t, n) : n == null || i && !or(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ie(n) ? String(n) : n
  );
}
function ks(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? oi(n) : n);
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
    o === "boolean" ? n = or(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(r || t);
}
function it(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function bo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qs = /* @__PURE__ */ Symbol("_vei");
function yo(e, t, n, s, r = null) {
  const i = e[qs] || (e[qs] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [o, c] = xo(t);
    if (s) {
      const d = i[t] = wo(
        s,
        r
      );
      it(e, o, d, c);
    } else l && (bo(e, o, l, c), i[t] = void 0);
  }
}
const _o = /(Once|Passive|Capture)$/, vo = /^on:?(?:Once|Passive|Capture)$/;
function xo(e) {
  let t, n;
  for (; (n = e.match(_o)) && !vo.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ft(e.slice(2)), t];
}
let Ln = 0;
const So = /* @__PURE__ */ Promise.resolve(), Co = () => Ln || (So.then(() => Ln = 0), Ln = Date.now());
function wo(e, t) {
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
  return n.value = e, n.attached = Co(), n;
}
const zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Eo = (e, t, n, s, r, i) => {
  const l = r === "svg";
  t === "class" ? ao(e, s, l) : t === "style" ? ho(e, n, s) : hn(t) ? gn(t) || yo(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : To(e, t, s, l)) ? (ks(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ws(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ao(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Z(s))) ? ks(e, be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ws(e, t, s, l));
};
function To(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zs(t) && V(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return zs(t) && Z(n) ? !1 : t in e;
}
function Ao(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = be(t);
  return Array.isArray(n) ? n.some((r) => be(r) === s) : Object.keys(n).some((r) => be(r) === s);
}
const dn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => en(t, n) : t;
};
function Oo(e) {
  e.target.composing = !0;
}
function Gs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const lt = /* @__PURE__ */ Symbol("_assign"), Qt = /* @__PURE__ */ Symbol("_initialValue");
function Hn(e, t, n) {
  return t && (e = e.trim()), n && (e = bn(e)), e;
}
const Js = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Qt] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Qt] = e.defaultValue.replace(/\r\n?/g, `
`))), e[lt] = dn(r);
    const i = s || r.props && r.props.type === "number";
    it(e, t ? "change" : "input", (l) => {
      l.target.composing || e[lt](Hn(e.value, n, i));
    }), (n || i) && it(e, "change", () => {
      e.value = Hn(e.value, n, i);
    }), t || (it(e, "compositionstart", Oo), it(e, "compositionend", Gs), it(e, "change", Gs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[Qt];
    delete e[Qt], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[lt](Hn(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, l) {
    if (e[lt] = dn(l), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? bn(e.value) : e.value, c = t ?? "";
    if (o === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c);
  }
}, Tt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, it(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? bn(pn(c)) : pn(c)
      ), i = e.multiple, l = i ? ut(e._modelValue) ? new Set(r) : r : r[0], o = e._pendingValue = [
        i,
        i ? I(l) ? r.slice() : r : l
      ];
      try {
        e[lt](l);
      } finally {
        Ar(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[lt] = dn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ys(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[lt] = dn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Po(t, n[1], n[0])) && Ys(e, t);
  }
};
function Po(e, t, n) {
  if (!n || I(e)) return Ye(e, t);
  if (ut(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Ys(e, t) {
  const n = e.multiple, s = I(t);
  if (!(n && !s && !ut(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const l = e.options[r], o = pn(l);
      if (n)
        if (s) {
          const c = typeof o;
          c === "string" || c === "number" ? l.selected = t.some((d) => String(d) === String(o)) : l.selected = Si(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (Ye(pn(l), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function pn(e) {
  return "_value" in e ? e._value : e.value;
}
const Fo = /* @__PURE__ */ le({ patchProp: Eo }, oo);
let Xs;
function Mo() {
  return Xs || (Xs = Ll(Fo));
}
const Ro = ((...e) => {
  const t = Mo().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = No(s);
    if (!r) return;
    const i = t._component;
    !V(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = n(r, !1, Io(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
});
function Io(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function No(e) {
  return Z(e) ? document.querySelector(e) : e;
}
function Do(e, t, n) {
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
const Uo = { class: "library-vue-catalogue" }, Vo = {
  class: "library-panel",
  "aria-label": "Publication catalogue"
}, $o = {
  method: "get",
  class: "library-filter-bar",
  "aria-label": "Catalogue search and filters"
}, jo = ["value"], Lo = ["value"], Ho = ["value"], Ko = ["value"], Bo = ["value"], Wo = ["value"], ko = {
  class: "library-pagination",
  "aria-label": "Catalogue pagination"
}, qo = ["href"], zo = {
  key: 1,
  class: "library-muted"
}, Go = ["href"], Jo = {
  key: 3,
  class: "library-muted"
}, Yo = {
  key: 0,
  class: "library-empty-content",
  role: "status"
}, Xo = {
  key: 1,
  class: "library-cover-gallery"
}, Zo = ["href", "aria-label"], Qo = ["src", "alt"], ec = { class: "library-cover-summary" }, tc = {
  key: 0,
  class: "library-creator"
}, nc = { class: "library-muted" }, sc = { key: 0 }, rc = { key: 1 }, ic = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, lc = { key: 0 }, oc = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, cc = {
  key: 0,
  class: "library-muted"
}, ac = ["href"], uc = ["href"], fc = { class: "library-item-metadata" }, dc = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTagEditor"
}, pc = {
  key: 0,
  class: "library-tag-remove-list",
  "aria-label": "Remove Nextcloud tag"
}, hc = { class: "library-tag" }, gc = ["action"], mc = ["value"], bc = ["action"], yc = ["value"], _c = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, vc = {
  key: 0,
  class: "library-muted"
}, xc = { class: "library-comment-list" }, Sc = { class: "library-muted" }, Cc = ["action"], wc = ["value"], Ec = ["action"], Tc = ["value"], Ac = ["value"], Oc = ["value"], Pc = ["value"], Fc = ["value"], Mc = ["value"], Rc = ["value"], Ic = ["value"], Nc = ["value"], Dc = ["value"], Uc = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Vc = { class: "library-hero-actions" }, $c = ["href"], jc = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], s = [25, 50, 100, 250, 500], r = ze(() => t.state.items || []), i = ze(() => t.state.shelves || []), l = ze(() => t.state.formats || []), o = ze(() => t.state.scanStatuses || []), c = ze(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: r.value.length,
      visible: r.value.length,
      from: r.value.length > 0 ? 1 : 0,
      to: r.value.length,
      previousUrl: "",
      nextUrl: ""
    }), d = /* @__PURE__ */ vn({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), f = ze(() => t.state.settingsUrl || ""), h = ze(() => t.state.requestToken || "");
    function S(U) {
      return String(U || "").toUpperCase();
    }
    function T(U) {
      return U.nextcloudTags || [];
    }
    function D(U) {
      return U.nextcloudComments || { count: 0, recent: [] };
    }
    function O(U, p) {
      return String(U.tagRemoveBaseUrl || "").replace("__TAG_ID__", String(p.id));
    }
    return (U, p) => ($(), j("div", Uo, [
      b("section", Vo, [
        p[49] || (p[49] = b("h2", null, "Publication catalogue", -1)),
        p[50] || (p[50] = b("p", { class: "library-muted" }, "Browse as a shelf/gallery first; open the details panel when metadata matters.", -1)),
        b("form", $o, [
          b("label", null, [
            p[7] || (p[7] = ee(" Search title / author ", -1)),
            tt(b("input", {
              "onUpdate:modelValue": p[0] || (p[0] = (m) => d.q = m),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Js, d.q]
            ])
          ]),
          b("label", null, [
            p[9] || (p[9] = ee(" Type ", -1)),
            tt(b("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (m) => d.type = m),
              name: "type"
            }, [
              p[8] || (p[8] = b("option", { value: "" }, "All types", -1)),
              ($(), j(te, null, Te(n, (m) => b("option", {
                key: m,
                value: m
              }, H(m), 9, jo)), 64))
            ], 512), [
              [Tt, d.type]
            ])
          ]),
          b("label", null, [
            p[10] || (p[10] = ee(" Nextcloud tag ", -1)),
            tt(b("input", {
              "onUpdate:modelValue": p[2] || (p[2] = (m) => d.tag = m),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Js, d.tag]
            ])
          ]),
          b("label", null, [
            p[12] || (p[12] = ee(" Format ", -1)),
            tt(b("select", {
              "onUpdate:modelValue": p[3] || (p[3] = (m) => d.format = m),
              name: "format"
            }, [
              p[11] || (p[11] = b("option", { value: "" }, "All formats", -1)),
              ($(!0), j(te, null, Te(l.value, (m) => ($(), j("option", {
                key: m,
                value: m
              }, H(S(m)), 9, Lo))), 128))
            ], 512), [
              [Tt, d.format]
            ])
          ]),
          b("label", null, [
            p[14] || (p[14] = ee(" Shelf ", -1)),
            tt(b("select", {
              "onUpdate:modelValue": p[4] || (p[4] = (m) => d.shelf = m),
              name: "shelf"
            }, [
              p[13] || (p[13] = b("option", { value: "" }, "All shelves", -1)),
              ($(!0), j(te, null, Te(i.value, (m) => ($(), j("option", {
                key: m,
                value: m
              }, H(m), 9, Ho))), 128))
            ], 512), [
              [Tt, d.shelf]
            ])
          ]),
          b("label", null, [
            p[16] || (p[16] = ee(" Scan status ", -1)),
            tt(b("select", {
              "onUpdate:modelValue": p[5] || (p[5] = (m) => d.status = m),
              name: "status"
            }, [
              p[15] || (p[15] = b("option", { value: "" }, "All scan statuses", -1)),
              ($(!0), j(te, null, Te(o.value, (m) => ($(), j("option", {
                key: m,
                value: m
              }, H(m), 9, Ko))), 128))
            ], 512), [
              [Tt, d.status]
            ])
          ]),
          b("label", null, [
            p[18] || (p[18] = ee(" Sort ", -1)),
            tt(b("select", {
              "onUpdate:modelValue": p[6] || (p[6] = (m) => d.sort = m),
              name: "sort"
            }, [...p[17] || (p[17] = [
              b("option", { value: "title" }, "Title", -1),
              b("option", { value: "recent" }, "Recently added", -1),
              b("option", { value: "publicationDate" }, "Publication date", -1),
              b("option", { value: "format" }, "Format", -1)
            ])], 512), [
              [Tt, d.sort]
            ])
          ]),
          b("label", null, [
            p[19] || (p[19] = ee(" Page size ", -1)),
            b("select", {
              value: c.value.limit,
              name: "limit"
            }, [
              ($(), j(te, null, Te(s, (m) => b("option", {
                key: m,
                value: m
              }, H(m), 9, Wo)), 64))
            ], 8, Bo)
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
        b("nav", ko, [
          b("span", null, "Showing " + H(c.value.from) + "–" + H(c.value.to) + " of " + H(c.value.total) + " catalogue items", 1),
          c.value.previousUrl ? ($(), j("a", {
            key: 0,
            href: c.value.previousUrl
          }, "Previous", 8, qo)) : ($(), j("span", zo, "Previous")),
          c.value.nextUrl ? ($(), j("a", {
            key: 2,
            href: c.value.nextUrl
          }, "Next", 8, Go)) : ($(), j("span", Jo, "Next"))
        ]),
        r.value.length === 0 ? ($(), j("div", Yo, [...p[22] || (p[22] = [
          b("h3", null, "No catalogue items match", -1),
          b("p", { class: "library-muted" }, "Scan enabled roots or clear the active filters.", -1)
        ])])) : ($(), j("div", Xo, [
          ($(!0), j(te, null, Te(r.value, (m) => ($(), j("article", {
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
              }, null, 8, Qo)
            ], 8, Zo),
            b("div", ec, [
              b("h3", null, H(m.title), 1),
              m.creators ? ($(), j("p", tc, H(m.creators), 1)) : Ae("", !0),
              b("p", nc, [
                b("span", null, H(m.publicationType), 1),
                m.extension ? ($(), j("span", sc, " · Format: " + H(S(m.extension)), 1)) : Ae("", !0),
                m.shelf ? ($(), j("span", rc, " · Shelf: " + H(m.shelf), 1)) : Ae("", !0)
              ]),
              m.scanStatus !== "indexed" || m.scanError ? ($(), j("p", ic, [
                ee(" scanStatus: " + H(m.scanStatus || "unknown"), 1),
                m.scanError ? ($(), j("span", lc, " · scanError: " + H(m.scanError), 1)) : Ae("", !0)
              ])) : Ae("", !0),
              b("div", oc, [
                T(m).length === 0 ? ($(), j("span", cc, "No Nextcloud tags")) : ($(!0), j(te, { key: 1 }, Te(T(m), (R) => ($(), j("span", {
                  key: R.id,
                  class: "library-tag"
                }, H(R.name), 1))), 128))
              ]),
              b("p", null, [
                b("a", {
                  href: m.openUrl
                }, "Read", 8, ac),
                p[23] || (p[23] = ee(" · ", -1)),
                b("a", {
                  href: m.filesUrl
                }, "Show in Files", 8, uc)
              ])
            ]),
            b("details", null, [
              p[48] || (p[48] = b("summary", null, "Details / edit metadata", -1)),
              b("dl", fc, [
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
              b("div", dc, [
                p[35] || (p[35] = b("strong", null, "Nextcloud tags", -1)),
                T(m).length > 0 ? ($(), j("ul", pc, [
                  ($(!0), j(te, null, Te(T(m), (R) => ($(), j("li", {
                    key: R.id
                  }, [
                    b("span", hc, H(R.name), 1),
                    b("form", {
                      method: "post",
                      action: O(m, R),
                      class: "library-inline-form"
                    }, [
                      h.value ? ($(), j("input", {
                        key: 0,
                        type: "hidden",
                        name: "requesttoken",
                        value: h.value
                      }, null, 8, mc)) : Ae("", !0),
                      p[32] || (p[32] = b("button", { type: "submit" }, "Remove tag", -1))
                    ], 8, gc)
                  ]))), 128))
                ])) : Ae("", !0),
                b("form", {
                  method: "post",
                  action: m.tagUrl,
                  class: "library-tag-form"
                }, [
                  h.value ? ($(), j("input", {
                    key: 0,
                    type: "hidden",
                    name: "requesttoken",
                    value: h.value
                  }, null, 8, yc)) : Ae("", !0),
                  p[33] || (p[33] = b("label", null, [
                    ee(" Add Nextcloud tag "),
                    b("input", {
                      type: "text",
                      name: "nextcloudTagName",
                      placeholder: "photography, project-library..."
                    })
                  ], -1)),
                  p[34] || (p[34] = b("button", { type: "submit" }, "Add tag", -1))
                ], 8, bc)
              ]),
              b("div", _c, [
                p[38] || (p[38] = b("strong", null, "Nextcloud comments", -1)),
                p[39] || (p[39] = ee()),
                p[40] || (p[40] = b("span", { class: "library-muted" }, "(file-level notes)", -1)),
                p[41] || (p[41] = ee(": ", -1)),
                D(m).count === 0 ? ($(), j("span", vc, "No Nextcloud comments")) : ($(), j(te, { key: 1 }, [
                  b("span", null, H(D(m).count) + " total", 1),
                  b("ul", xc, [
                    ($(!0), j(te, null, Te(D(m).recent, (R) => ($(), j("li", {
                      key: `${R.actorId}-${R.createdAt}-${R.message}`
                    }, [
                      b("span", Sc, H(R.actorId) + " · " + H(R.createdAt), 1),
                      b("span", null, H(R.message), 1)
                    ]))), 128))
                  ])
                ], 64)),
                b("form", {
                  method: "post",
                  action: m.commentUrl,
                  class: "library-comment-form"
                }, [
                  h.value ? ($(), j("input", {
                    key: 0,
                    type: "hidden",
                    name: "requesttoken",
                    value: h.value
                  }, null, 8, wc)) : Ae("", !0),
                  p[36] || (p[36] = b("label", null, [
                    ee(" Add Nextcloud comment "),
                    b("textarea", {
                      name: "commentMessage",
                      rows: "2",
                      placeholder: "file-level note..."
                    })
                  ], -1)),
                  p[37] || (p[37] = b("button", { type: "submit" }, "Add comment", -1))
                ], 8, Cc)
              ]),
              b("form", {
                method: "post",
                action: m.updateUrl,
                class: "library-item-form"
              }, [
                h.value ? ($(), j("input", {
                  key: 0,
                  type: "hidden",
                  name: "requesttoken",
                  value: h.value
                }, null, 8, Tc)) : Ae("", !0),
                b("label", null, [
                  p[42] || (p[42] = ee(" Title ", -1)),
                  b("input", {
                    type: "text",
                    name: "title",
                    value: m.title
                  }, null, 8, Ac)
                ]),
                b("label", null, [
                  p[43] || (p[43] = ee(" Type ", -1)),
                  b("select", {
                    name: "publicationType",
                    value: m.publicationType
                  }, [
                    ($(), j(te, null, Te(n, (R) => b("option", {
                      key: R,
                      value: R
                    }, H(R), 9, Pc)), 64))
                  ], 8, Oc)
                ]),
                b("label", null, [
                  p[44] || (p[44] = ee(" Creators ", -1)),
                  b("input", {
                    type: "text",
                    name: "creators",
                    value: m.creators
                  }, null, 8, Fc)
                ]),
                b("label", null, [
                  p[45] || (p[45] = ee(" Publication ", -1)),
                  b("input", {
                    type: "text",
                    name: "publication",
                    value: m.publication
                  }, null, 8, Mc)
                ]),
                b("label", null, [
                  p[46] || (p[46] = ee(" Date ", -1)),
                  b("input", {
                    type: "text",
                    name: "publicationDate",
                    value: m.publicationDate
                  }, null, 8, Rc)
                ]),
                b("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: m.subtitle
                }, null, 8, Ic),
                b("input", {
                  type: "hidden",
                  name: "language",
                  value: m.language
                }, null, 8, Nc),
                b("input", {
                  type: "hidden",
                  name: "publisher",
                  value: m.publisher
                }, null, 8, Dc),
                p[47] || (p[47] = b("button", { type: "submit" }, "Save metadata", -1))
              ], 8, Ec)
            ])
          ]))), 128))
        ]))
      ]),
      b("section", Uc, [
        p[51] || (p[51] = b("div", null, [
          b("h2", null, "Library"),
          b("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        b("div", Vc, [
          b("a", {
            href: f.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, $c)
        ])
      ])
    ]));
  }
}, Zs = Do("library", "catalogue", {}), sn = document.querySelector("#library-vue-root"), Qs = {
  ...Zs,
  requestToken: sn?.dataset.requestToken || Zs.requestToken || ""
};
function ne(e) {
  return String(e ?? "");
}
function ci(e) {
  return ne(e).toUpperCase();
}
function Lc(e, t, n, s = ne) {
  for (const r of t) {
    const i = document.createElement("option");
    i.value = ne(r), i.textContent = s(r), ne(r) === ne(n) && (i.selected = !0), e.appendChild(i);
  }
}
function er(e, t, n, s, r = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const l = document.createElement("input");
  l.type = n === "q" ? "search" : "text", l.name = n, l.value = ne(s), l.placeholder = r, i.appendChild(l), e.appendChild(i);
}
function pt(e, t, n, s, r, i, l = ne) {
  const o = document.createElement("label");
  o.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const d = document.createElement("option");
  d.value = "", d.textContent = r, c.appendChild(d), Lc(c, i, s, l), o.appendChild(c), e.appendChild(o);
}
function Hc(e, t) {
  const n = e.activeFilters || {}, s = document.createElement("form");
  s.method = "get", s.className = "library-filter-bar", s.setAttribute("aria-label", "Catalogue search and filters"), er(s, "Search title / author", "q", n.q, "Camera, Eco, Rolleiflex..."), pt(s, "Type", "type", n.type, "All types", ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), er(s, "Nextcloud tag", "tag", n.tag, "photography"), pt(s, "Format", "format", n.format, "All formats", e.formats || [], ci), pt(s, "Shelf", "shelf", n.shelf, "All shelves", e.shelves || []), pt(s, "Scan status", "status", n.status, "All scan statuses", e.scanStatuses || []), pt(s, "Sort", "sort", n.sort || "title", "Sort by", ["title", "recent", "publicationDate", "format"]), pt(s, "Page size", "limit", t.limit || 100, "Page size", [25, 50, 100, 250, 500]);
  const r = document.createElement("button");
  r.type = "submit", r.className = "button primary", r.setAttribute("aria-label", "Apply catalogue filters"), r.textContent = "Apply filters";
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", "Clear catalogue filters"), i.textContent = "Clear", s.append(r, i), s;
}
function Kc(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], s = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, r = ne(e.settingsUrl || ""), i = document.createElement("div");
  i.className = "library-vue-catalogue library-vue-fallback", i.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-label", "Publication catalogue");
  const o = document.createElement("h2");
  o.textContent = "Publication catalogue", l.appendChild(o);
  const c = document.createElement("p");
  c.className = "library-muted", c.textContent = "Browse as a shelf/gallery first; open the details panel when metadata matters.", l.appendChild(c), l.appendChild(Hc(e, s));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", "Catalogue pagination");
  const f = document.createElement("span");
  if (f.textContent = `Showing ${s.from ?? 0}–${s.to ?? n.length} of ${s.total ?? n.length} catalogue items`, d.appendChild(f), l.appendChild(d), n.length === 0) {
    const h = document.createElement("div");
    h.className = "library-empty-content", h.setAttribute("role", "status");
    const S = document.createElement("h3");
    S.textContent = "No catalogue items match";
    const T = document.createElement("p");
    T.className = "library-muted", T.textContent = "Scan enabled roots or clear the active filters.", h.append(S, T), l.appendChild(h);
  } else {
    const h = document.createElement("div");
    h.className = "library-cover-gallery";
    for (const S of n) {
      const T = document.createElement("article");
      T.className = "library-cover-card";
      const D = document.createElement("a");
      D.className = "library-cover-link", D.href = ne(S.openUrl || "#"), D.setAttribute("aria-label", `Read ${ne(S.title || "publication")}`);
      const O = document.createElement("img");
      O.className = "library-cover-image", O.src = ne(S.coverUrl || ""), O.alt = `Cover for ${ne(S.title || "publication")}`, O.loading = "lazy", D.appendChild(O);
      const U = document.createElement("div");
      U.className = "library-cover-summary";
      const p = document.createElement("h3");
      if (p.textContent = ne(S.title || "Untitled publication"), U.appendChild(p), S.creators) {
        const de = document.createElement("p");
        de.className = "library-creator", de.textContent = ne(S.creators), U.appendChild(de);
      }
      const m = document.createElement("p");
      m.className = "library-muted", m.textContent = [
        ne(S.publicationType || "other"),
        S.extension ? `Format: ${ci(S.extension)}` : "",
        S.shelf ? `Shelf: ${ne(S.shelf)}` : ""
      ].filter(Boolean).join(" · "), U.appendChild(m);
      const R = document.createElement("p"), F = document.createElement("a");
      F.href = ne(S.openUrl || "#"), F.textContent = "Read";
      const Y = document.createElement("a");
      Y.href = ne(S.filesUrl || "#"), Y.textContent = "Show in Files", R.append(F, document.createTextNode(" · "), Y), U.appendChild(R), T.append(D, U), h.appendChild(T);
    }
    l.appendChild(h);
  }
  if (i.appendChild(l), r) {
    const h = document.createElement("section");
    h.className = "library-hero library-secondary-panel", h.setAttribute("aria-label", "Library settings");
    const S = document.createElement("div"), T = document.createElement("h2");
    T.textContent = "Library";
    const D = document.createElement("p");
    D.className = "library-lede", D.textContent = "Browse publications already stored in Nextcloud.", S.append(T, D);
    const O = document.createElement("div");
    O.className = "library-hero-actions";
    const U = document.createElement("a");
    U.href = r, U.className = "button secondary", U.setAttribute("aria-label", "Open Library settings"), U.textContent = "Library settings", O.appendChild(U), h.append(S, O), i.appendChild(h);
  }
  return i;
}
if (sn)
  try {
    Ro(jc, { state: Qs }).mount(sn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), sn.replaceChildren(Kc(Qs));
  }
//# sourceMappingURL=library-main.mjs.map
