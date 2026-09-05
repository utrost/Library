// @__NO_SIDE_EFFECTS__
function Zn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = {}, gt = [], Me = () => {
}, er = () => !1, pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hn = (e) => e.startsWith("onUpdate:"), le = Object.assign, Qn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ui = Object.prototype.hasOwnProperty, K = (e, t) => ui.call(e, t), I = Array.isArray, ze = (e) => Ht(e) === "[object Map]", at = (e) => Ht(e) === "[object Set]", vs = (e) => Ht(e) === "[object Date]", D = (e) => typeof e == "function", Z = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", tr = (e) => (q(e) || D(e)) && D(e.then) && D(e.catch), nr = Object.prototype.toString, Ht = (e) => nr.call(e), fi = (e) => Ht(e).slice(8, -1), sr = (e) => Ht(e) === "[object Object]", es = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ Zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, di = /-\w/g, be = gn(
  (e) => e.replace(di, (t) => t.slice(1).toUpperCase())
), pi = /\B([A-Z])/g, ut = gn(
  (e) => e.replace(pi, "-$1").toLowerCase()
), rr = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), On = gn(
  (e) => e ? `on${rr(e)}` : ""
), Ue = (e, t) => !Object.is(e, t), en = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ir = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, mn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xs;
const bn = () => xs || (xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ts(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Z(s) ? bi(s) : ts(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Z(e) || q(e))
    return e;
}
const hi = /;(?![^(]*\))/g, gi = /:([^]+)/, mi = /\/\*[^]*?\*\//g;
function bi(e) {
  const t = {};
  return e.replace(mi, "").split(hi).forEach((n) => {
    if (n) {
      const s = n.split(gi);
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
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const yi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _i = /* @__PURE__ */ Zn(yi);
function lr(e) {
  return !!e || e === "";
}
function vi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ge(e[s], t[s]);
  return n;
}
function Ss(e, t) {
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
  let n = vs(e), s = vs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Re(e), s = Re(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? vi(e, t) : !1;
  if (n = q(e), s = q(t), n || s) {
    if (!n || !s)
      return !1;
    if (n = ze(e), s = ze(t), n || s || (n = at(e), s = at(t), n || s))
      return n && s ? Ss(e, t) : !1;
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
function xi(e, t) {
  return e.findIndex((n) => Ge(n, t));
}
const or = (e) => !!(e && e.__v_isRef === !0), H = (e) => Z(e) ? e : e == null ? "" : I(e) || q(e) && (e.toString === nr || !D(e.toString)) ? or(e) ? H(e.value) : JSON.stringify(e, cr, 2) : String(e), cr = (e, t) => or(t) ? cr(e, t.value) : ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Pn(s, i) + " =>"] = r, n),
    {}
  )
} : at(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pn(n))
} : Re(t) ? Pn(t) : q(t) && !I(t) && !sr(t) ? String(t) : t, Pn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let re;
class Si {
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
function Ci() {
  return re;
}
let J;
const Fn = /* @__PURE__ */ new WeakSet();
class ar {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && (re.active ? re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fn.has(this) && (Fn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cs(this), dr(this);
    const t = J, n = ye;
    J = this, ye = !0;
    try {
      return this.fn();
    } finally {
      pr(this), J = t, ye = n, this.flags &= -3;
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
    this.flags & 64 ? Fn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let ur = 0, Ft, Mt;
function fr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mt, Mt = e;
    return;
  }
  e.next = Ft, Ft = e;
}
function ss() {
  ur++;
}
function rs() {
  if (--ur > 0)
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
function dr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function pr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), is(s), wi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dt) || (e.globalVersion = Dt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = J, s = ye;
  J = e, ye = !0;
  try {
    dr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ue(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    J = n, ye = s, pr(e), e.flags &= -3;
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
function wi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const gr = [];
function Le() {
  gr.push(ye), ye = !1;
}
function He() {
  const e = gr.pop();
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
class Ei {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class mr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!J || !ye || J === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      n = this.activeLink = new Ei(J, this), J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, br(n);
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
function br(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        br(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ Symbol(
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
    r || (s.set(n, r = new mr()), r.map = s, r.key = n), r.track();
  }
}
function Ve(e, t, n, s, r, i) {
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
      l.forEach((g, S) => {
        (S === "length" || S === Ut || !Re(S) && S >= f) && o(g);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), d && o(l.get(Ut)), t) {
        case "add":
          c ? d && o(l.get("length")) : (o(l.get(lt)), ze(e) && o(l.get(Wn)));
          break;
        case "delete":
          c || (o(l.get(lt)), ze(e) && o(l.get(Wn)));
          break;
        case "set":
          ze(e) && o(l.get(lt));
          break;
      }
  }
  rs();
}
function ft(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (ie(t, "iterate", Ut), /* @__PURE__ */ _e(e) ? t : t.map(Ke));
}
function yn(e) {
  return ie(e = /* @__PURE__ */ W(e), "iterate", Ut), e;
}
function Pe(e, t) {
  return /* @__PURE__ */ Je(e) ? yt(/* @__PURE__ */ ot(e) ? Ke(t) : t) : Ke(t);
}
const Ti = {
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
    return Ie(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
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
    return wt(this, "unshift", e);
  },
  values() {
    return Mn(this, "values", (e) => Pe(this, e));
  }
};
function Mn(e, t, n) {
  const s = yn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ _e(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Ai = Array.prototype;
function Ie(e, t, n, s, r, i) {
  const l = yn(e), o = l !== e && !/* @__PURE__ */ _e(e), c = l[t];
  if (c !== Ai[t]) {
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
function ws(e, t, n, s) {
  const r = yn(e), i = r !== e && !/* @__PURE__ */ _e(e);
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
  ie(s, "iterate", Ut);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ cs(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : r;
}
function wt(e, t, n = []) {
  Le(), ss();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return rs(), He(), s;
}
const Oi = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), yr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function Pi(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class _r {
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
      return s === (r ? i ? ji : Cr : i ? Sr : xr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = I(t);
    if (!r) {
      let c;
      if (l && (c = Ti[n]))
        return c;
      if (n === "hasOwnProperty")
        return Pi;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ fe(t) ? t : s
    );
    if ((Re(n) ? yr.has(n) : Oi(n)) || (r || ie(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ fe(o)) {
      const c = l && es(n) ? o : o.value;
      return r && q(c) ? /* @__PURE__ */ kn(c) : c;
    }
    return q(o) ? r ? /* @__PURE__ */ kn(o) : /* @__PURE__ */ _n(o) : o;
  }
}
class vr extends _r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const l = I(t) && es(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Je(i);
      if (!/* @__PURE__ */ _e(s) && !/* @__PURE__ */ Je(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !l && /* @__PURE__ */ fe(i) && !/* @__PURE__ */ fe(s))
        return d || (i.value = s), !0;
    }
    const o = l ? Number(n) < t.length : K(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ fe(t) ? t : r
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
    return (!Re(n) || !yr.has(n)) && ie(t, "has", n), s;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      I(t) ? "length" : lt
    ), Reflect.ownKeys(t);
  }
}
class Fi extends _r {
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
const Mi = /* @__PURE__ */ new vr(), Ri = /* @__PURE__ */ new Fi(), Ii = /* @__PURE__ */ new vr(!0);
const qn = (e) => e, Jt = (e) => Reflect.getPrototypeOf(e);
function Ni(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = ze(i), o = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = r[e](...s), f = n ? qn : t ? yt : Ke;
    return !t && ie(
      i,
      "iterate",
      c ? Wn : lt
    ), le(
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
function Yt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Di(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      e || (Ue(r, o) && ie(l, "get", r), ie(l, "get", o));
      const { has: c } = Jt(l), d = t ? qn : e ? yt : Ke;
      if (c.call(l, r))
        return d(i.get(r));
      if (c.call(l, o))
        return d(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ie(/* @__PURE__ */ W(r), "iterate", lt), r.size;
    },
    has(r) {
      const i = this.__v_raw, l = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(r);
      return e || (Ue(r, o) && ie(l, "has", r), ie(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, c = /* @__PURE__ */ W(o), d = t ? qn : e ? yt : Ke;
      return !e && ie(c, "iterate", lt), o.forEach((f, g) => r.call(i, d(f), d(g), l));
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
        const i = /* @__PURE__ */ W(this), l = Jt(i), o = /* @__PURE__ */ W(r), c = !t && !/* @__PURE__ */ _e(r) && !/* @__PURE__ */ Je(r) ? o : r;
        return l.has.call(i, c) || Ue(r, c) && l.has.call(i, r) || Ue(o, c) && l.has.call(i, o) || (i.add(c), Ve(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ _e(i) && !/* @__PURE__ */ Je(i) && (i = /* @__PURE__ */ W(i));
        const l = /* @__PURE__ */ W(this), { has: o, get: c } = Jt(l);
        let d = o.call(l, r);
        d || (r = /* @__PURE__ */ W(r), d = o.call(l, r));
        const f = c.call(l, r);
        return l.set(r, i), d ? Ue(i, f) && Ve(l, "set", r, i) : Ve(l, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ W(this), { has: l, get: o } = Jt(i);
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
    n[r] = Ni(r, e, t);
  }), n;
}
function ls(e, t) {
  const n = Di(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    K(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Ui = {
  get: /* @__PURE__ */ ls(!1, !1)
}, Vi = {
  get: /* @__PURE__ */ ls(!1, !0)
}, $i = {
  get: /* @__PURE__ */ ls(!0, !1)
};
const xr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap();
function Li(e) {
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
function _n(e) {
  return /* @__PURE__ */ Je(e) ? e : os(
    e,
    !1,
    Mi,
    Ui,
    xr
  );
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  return os(
    e,
    !1,
    Ii,
    Vi,
    Sr
  );
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return os(
    e,
    !0,
    Ri,
    $i,
    Cr
  );
}
function os(e, t, n, s, r) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = Li(fi(e));
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
function cs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function Ki(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && ir(e, "__v_skip", !0), e;
}
const Ke = (e) => q(e) ? /* @__PURE__ */ _n(e) : e, yt = (e) => q(e) ? /* @__PURE__ */ kn(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Bi(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const Wi = {
  get: (e, t, n) => t === "__v_raw" ? e : Bi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ fe(r) && !/* @__PURE__ */ fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function wr(e) {
  return /* @__PURE__ */ ot(e) ? e : new Proxy(e, Wi);
}
class qi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new mr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return fr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ki(e, t, n = !1) {
  let s, r;
  return D(e) ? s = e : (s = e.get, r = e.set), new qi(s, r, n);
}
const Xt = {}, sn = /* @__PURE__ */ new WeakMap();
let nt;
function zi(e, t = !1, n = nt) {
  if (n) {
    let s = sn.get(n);
    s || sn.set(n, s = []), s.push(e);
  }
}
function Gi(e, t, n = z) {
  const { immediate: s, deep: r, once: i, scheduler: l, augmentJob: o, call: c } = n, d = (M) => r ? M : /* @__PURE__ */ _e(M) || r === !1 || r === 0 ? $e(M, 1) : $e(M);
  let f, g, S, T, U = !1, O = !1;
  if (/* @__PURE__ */ fe(e) ? (g = () => e.value, U = /* @__PURE__ */ _e(e)) : /* @__PURE__ */ ot(e) ? (g = () => d(e), U = !0) : I(e) ? (O = !0, U = e.some((M) => /* @__PURE__ */ ot(M) || /* @__PURE__ */ _e(M)), g = () => e.map((M) => {
    if (/* @__PURE__ */ fe(M))
      return M.value;
    if (/* @__PURE__ */ ot(M))
      return d(M);
    if (D(M))
      return c ? c(M, 2) : M();
  })) : D(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (S) {
      Le();
      try {
        S();
      } finally {
        He();
      }
    }
    const M = nt;
    nt = f;
    try {
      return c ? c(e, 3, [T]) : e(T);
    } finally {
      nt = M;
    }
  } : g = Me, t && r) {
    const M = g, Y = r === !0 ? 1 / 0 : r;
    g = () => $e(M(), Y);
  }
  const p = Ci(), m = () => {
    f.stop(), p && p.active && Qn(p.effects, f);
  };
  if (i && t) {
    const M = t;
    t = (...Y) => {
      const de = M(...Y);
      return m(), de;
    };
  }
  let P = O ? new Array(e.length).fill(Xt) : Xt;
  const L = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const Y = f.run();
        if (M || r || U || (O ? Y.some((de, xe) => Ue(de, P[xe])) : Ue(Y, P))) {
          S && S();
          const de = nt;
          nt = f;
          try {
            const xe = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              P === Xt ? void 0 : O && P[0] === Xt ? [] : P,
              T
            ];
            P = Y, c ? c(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            nt = de;
          }
        }
      } else
        f.run();
  };
  return o && o(L), f = new ar(g), f.scheduler = l ? () => l(L, !1) : L, T = (M) => zi(M, !1, f), S = f.onStop = () => {
    const M = sn.get(f);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const Y of M) Y();
      sn.delete(f);
    }
  }, t ? s ? L(!0) : P = f.run() : l ? l(L.bind(null, !0), !0) : f.run(), m.pause = f.pause.bind(f), m.resume = f.resume.bind(f), m.stop = m, m;
}
function $e(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    $e(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      $e(e[s], t, n);
  else if (at(e) || ze(e))
    e.forEach((s) => {
      $e(s, t, n);
    });
  else if (sr(e)) {
    for (const s in e)
      $e(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && $e(e[s], t, n);
  }
  return e;
}
function Kt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    vn(r, t, n);
  }
}
function ve(e, t, n, s) {
  if (D(e)) {
    const r = Kt(e, t, n, s);
    return r && tr(r) && r.catch((i) => {
      vn(i, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ve(e[i], t, n, s));
    return r;
  }
}
function vn(e, t, n, s = !0) {
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
      Le(), Kt(i, null, 10, [
        e,
        c,
        d
      ]), He();
      return;
    }
  }
  Ji(e, n, r, s, l);
}
function Ji(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ae = [];
let Oe = -1;
const mt = [];
let ke = null, ht = 0;
const Er = /* @__PURE__ */ Promise.resolve();
let rn = null;
function Tr(e) {
  const t = rn || Er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yi(e) {
  let t = Oe + 1, n = ae.length;
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
    !(e.flags & 2) && t >= Vt(n) ? ae.push(e) : ae.splice(Yi(t), 0, e), e.flags |= 1, Ar();
  }
}
function Ar() {
  rn || (rn = Er.then(Pr));
}
function Xi(e) {
  if (!I(e))
    ke && e.id === -1 ? ke.splice(ht + 1, 0, e) : e.flags & 1 || (mt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      mt.push(e[t]);
  Ar();
}
function Es(e, t, n = Oe + 1) {
  for (; n < ae.length; n++) {
    const s = ae[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Or(e) {
  if (mt.length) {
    const t = [...new Set(mt)].sort(
      (n, s) => Vt(n) - Vt(s)
    );
    if (mt.length = 0, ke) {
      for (let n = 0; n < t.length; n++)
        ke.push(t[n]);
      return;
    }
    for (ke = t, ht = 0; ht < ke.length; ht++) {
      const n = ke[ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ke = null, ht = 0;
  }
}
const Vt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pr(e) {
  try {
    for (Oe = 0; Oe < ae.length; Oe++) {
      const t = ae[Oe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Oe < ae.length; Oe++) {
      const t = ae[Oe];
      t && (t.flags &= -2);
    }
    Oe = -1, ae.length = 0, Or(), rn = null, (ae.length || mt.length) && Pr();
  }
}
let me = null, Fr = null;
function ln(e) {
  const t = me;
  return me = e, Fr = e && e.type.__scopeId || null, t;
}
function Zi(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Us(-1);
    const i = ln(t), l = ct.length;
    let o;
    try {
      o = e(...r);
    } finally {
      for (let c = ct.length; c > l; c--) ei();
      ln(i), s._d && Us(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Qe(e, t) {
  if (me === null)
    return e;
  const n = En(me), s = e.dirs || (e.dirs = []);
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
function Qi(e, t) {
  if (ue) {
    let n = ue.provides;
    const s = ue.parent && ue.parent.provides;
    s === n && (n = ue.provides = Object.create(s)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const s = Xl();
  if (s || bt) {
    let r = bt ? bt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s && s.proxy) : t;
  }
}
const el = /* @__PURE__ */ Symbol.for("v-scx"), tl = () => tn(el);
function In(e, t, n) {
  return Mr(e, t, n);
}
function Mr(e, t, n = z) {
  const { immediate: s, deep: r, flush: i, once: l } = n, o = le({}, n), c = t && s || !t && i !== "post";
  let d;
  if (Lt) {
    if (i === "sync") {
      const T = tl();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!c) {
      const T = () => {
      };
      return T.stop = Me, T.resume = Me, T.pause = Me, T;
    }
  }
  const f = ue;
  o.call = (T, U, O) => ve(T, f, U, O);
  let g = !1;
  i === "post" ? o.scheduler = (T) => {
    pe(T, f && f.suspense);
  } : i !== "sync" && (g = !0, o.scheduler = (T, U) => {
    U ? T() : as(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), g && (T.flags |= 2, f && (T.id = f.uid, T.i = f));
  };
  const S = Gi(e, t, o);
  return Lt && (d ? d.push(S) : c && S()), S;
}
function nl(e, t, n) {
  const s = this.proxy, r = Z(e) ? e.includes(".") ? Rr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  D(t) ? i = t : (i = t.handler, n = t);
  const l = Bt(this), o = Mr(r, i.bind(s), n);
  return l(), o;
}
function Rr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const sl = /* @__PURE__ */ Symbol("_vte"), xn = (e) => e.__isTeleport, Nn = /* @__PURE__ */ Symbol("_leaveCb");
function rl(e) {
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
function Ir(e) {
  if (!fs(e))
    return xn(e.type) && e.children ? rl(e.children) : e;
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
      xn(n.type) && Ir(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Nr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ts(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const on = /* @__PURE__ */ new WeakMap();
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
  if (It(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Rt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? En(s.component) : s.el, l = r ? null : i, { i: o, r: c } = e, d = t && t.r, f = o.refs === z ? o.refs = {} : o.refs, g = o.setupState, S = /* @__PURE__ */ W(g), T = g === z ? er : (O) => Ts(f, O) ? !1 : K(S, O), U = (O, p) => !(p && Ts(f, p));
  if (d != null && d !== c) {
    if (As(t), Z(d))
      f[d] = null, T(d) && (g[d] = null);
    else if (/* @__PURE__ */ fe(d)) {
      const O = t;
      U(d, O.k) && (d.value = null), O.k && (f[O.k] = null);
    }
  }
  if (D(c))
    Kt(c, o, 12, [l, f]);
  else {
    const O = Z(c), p = /* @__PURE__ */ fe(c);
    if (O || p) {
      const m = () => {
        if (e.f) {
          const P = O ? T(c) ? g[c] : f[c] : U() || !e.k ? c.value : f[e.k];
          if (r)
            I(P) && Qn(P, i);
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
          m(), on.delete(e);
        };
        P.id = -1, on.set(e, P), pe(P, n);
      } else
        As(e), m();
    }
  }
}
function As(e) {
  const t = on.get(e);
  t && (t.flags |= 8, on.delete(e));
}
bn().requestIdleCallback;
bn().cancelIdleCallback;
const It = (e) => !!e.type.__asyncLoader, fs = (e) => e.type.__isKeepAlive;
function il(e, t) {
  Dr(e, "a", t);
}
function ll(e, t) {
  Dr(e, "da", t);
}
function Dr(e, t, n = ue) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Sn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      fs(r.parent.vnode) && ol(s, t, n, r), r = r.parent;
  }
}
function ol(e, t, n, s) {
  const r = Sn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ur(() => {
    Qn(s[t], r);
  }, n);
}
function Sn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      Le();
      const o = Bt(n), c = ve(t, n, e, l);
      return o(), He(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const We = (e) => (t, n = ue) => {
  (!Lt || e === "sp") && Sn(e, (...s) => t(...s), n);
}, cl = We("bm"), al = We("m"), ul = We(
  "bu"
), fl = We("u"), dl = We(
  "bum"
), Ur = We("um"), pl = We(
  "sp"
), hl = We("rtg"), gl = We("rtc");
function ml(e, t = ue) {
  Sn("ec", e, t);
}
const bl = /* @__PURE__ */ Symbol.for("v-ndc");
function Te(e, t, n, s) {
  let r;
  const i = n, l = I(e);
  if (l || Z(e)) {
    const o = l && /* @__PURE__ */ ot(e);
    let c = !1, d = !1;
    o && (c = !/* @__PURE__ */ _e(e), d = /* @__PURE__ */ Je(e), e = yn(e)), r = new Array(e.length);
    for (let f = 0, g = e.length; f < g; f++)
      r[f] = t(
        c ? d ? yt(Ke(e[f])) : Ke(e[f]) : e[f],
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
const zn = (e) => e ? ri(e) ? En(e) : zn(e.parent) : null, Nt = (
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
    $options: (e) => $r(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      as(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Tr.bind(e.proxy)),
    $watch: (e) => nl.bind(e)
  })
), Dn = (e, t) => e !== z && !e.__isScriptSetup && K(e, t), yl = {
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
        if (Dn(s, t))
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
    let f, g;
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
      g = c.config.globalProperties, K(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Dn(r, t) ? (r[t] = n, !0) : s !== z && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: l }
  }, o) {
    let c;
    return !!(n[o] || e !== z && o[0] !== "$" && K(e, o) || Dn(t, o) || K(i, o) || K(s, o) || K(Nt, o) || K(r.config.globalProperties, o) || (c = l.__cssModules) && c[o]);
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
function _l(e) {
  const t = $r(e), n = e.proxy, s = e.ctx;
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
    beforeMount: g,
    mounted: S,
    beforeUpdate: T,
    updated: U,
    activated: O,
    deactivated: p,
    beforeDestroy: m,
    beforeUnmount: P,
    destroyed: L,
    unmounted: M,
    render: Y,
    renderTracked: de,
    renderTriggered: xe,
    errorCaptured: qe,
    serverPrefetch: Wt,
    // public API
    expose: Ye,
    inheritAttrs: vt,
    // assets
    components: qt,
    directives: kt,
    filters: Tn
  } = t;
  if (d && vl(d, s, null), l)
    for (const X in l) {
      const G = l[X];
      D(G) && (s[X] = G.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    q(X) && (e.data = /* @__PURE__ */ _n(X));
  }
  if (Gn = !0, i)
    for (const X in i) {
      const G = i[X], Xe = D(G) ? G.bind(n, n) : D(G.get) ? G.get.bind(n, n) : Me, zt = !D(G) && D(G.set) ? G.set.bind(n) : Me, Ze = st({
        get: Xe,
        set: zt
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
      Vr(o[X], s, n, X);
  if (c) {
    const X = D(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((G) => {
      Qi(G, X[G]);
    });
  }
  f && Ps(f, e, "c");
  function oe(X, G) {
    I(G) ? G.forEach((Xe) => X(Xe.bind(n))) : G && X(G.bind(n));
  }
  if (oe(cl, g), oe(al, S), oe(ul, T), oe(fl, U), oe(il, O), oe(ll, p), oe(ml, qe), oe(gl, de), oe(hl, xe), oe(dl, P), oe(Ur, M), oe(pl, Wt), I(Ye))
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
  Y && e.render === Me && (e.render = Y), vt != null && (e.inheritAttrs = vt), qt && (e.components = qt), kt && (e.directives = kt), Wt && Nr(e);
}
function vl(e, t, n = Me) {
  I(e) && (e = Jn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    q(r) ? "default" in r ? i = tn(
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
function Vr(e, t, n, s) {
  let r = s.includes(".") ? Rr(n, s) : () => n[s];
  if (Z(e)) {
    const i = t[e];
    D(i) && In(r, i);
  } else if (D(e))
    In(r, e.bind(n));
  else if (q(e))
    if (I(e))
      e.forEach((i) => Vr(i, t, n, s));
    else {
      const i = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(i) && In(r, i, e);
    }
}
function $r(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let c;
  return o ? c = o : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (d) => cn(c, d, l, !0)
  ), cn(c, t, l)), q(t) && i.set(t, c), c;
}
function cn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && cn(e, i, n, !0), r && r.forEach(
    (l) => cn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = xl[l] || n && n[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const xl = {
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
  watch: Cl,
  // provide / inject
  provide: Fs,
  inject: Sl
};
function Fs(e, t) {
  return t ? e ? function() {
    return le(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Sl(e, t) {
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
function Cl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ce(e[s], t[s]);
  return n;
}
function jr() {
  return {
    app: null,
    config: {
      isNativeTag: er,
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
let wl = 0;
function El(e, t) {
  return function(s, r = null) {
    D(s) || (s = le({}, s)), r != null && !q(r) && (r = null);
    const i = jr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let c = !1;
    const d = i.app = {
      _uid: wl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: so,
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
          return T.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(T, f, S), c = !0, d._container = f, f.__vue_app__ = d, En(T.component);
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
        const g = bt;
        bt = d;
        try {
          return f();
        } finally {
          bt = g;
        }
      }
    };
    return d;
  };
}
let bt = null;
const Tl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function Al(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const i = t.startsWith("update:"), l = i && Tl(s, t.slice(7));
  l && (l.trim && (r = n.map((f) => Z(f) ? f.trim() : f)), l.number && (r = r.map(mn)));
  let o, c = s[o = On(t)] || // also try camelCase event handler (#2249)
  s[o = On(be(t))];
  !c && i && (c = s[o = On(ut(t))]), c && ve(
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
const Ol = /* @__PURE__ */ new WeakMap();
function Lr(e, t, n = !1) {
  const s = n ? Ol : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!D(e)) {
    const c = (d) => {
      const f = Lr(d, t, !0);
      f && (o = !0, le(l, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !o ? (q(e) && s.set(e, null), null) : (I(i) ? i.forEach((c) => l[c] = null) : le(l, i), q(e) && s.set(e, l), l);
}
function Cn(e, t) {
  return !e || !pn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, ut(t)) || K(e, t));
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
  } = e, p = ln(e);
  let m, P;
  try {
    if (n.shapeFlag & 4) {
      const M = r || s, Y = M;
      m = Fe(
        d.call(
          Y,
          M,
          f,
          g,
          T,
          S,
          U
        )
      ), P = o;
    } else {
      const M = t;
      m = Fe(
        M.length > 1 ? M(
          g,
          { attrs: o, slots: l, emit: c }
        ) : M(
          g,
          null
        )
      ), P = t.props ? o : Pl(o);
    }
  } catch (M) {
    ct.length = 0, vn(M, e, 1), m = je(Be);
  }
  let L = m;
  if (P && O !== !1) {
    const M = Object.keys(P), { shapeFlag: Y } = L;
    M.length && Y & 7 && (i && M.some(hn) && (P = Fl(
      P,
      i
    )), L = _t(L, P, !1, !0));
  }
  if (n.dirs && (L = _t(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = xn(L.type) && Ir(L) || L;
    us(M, n.transition);
  }
  return m = L, ln(p), m;
}
const Pl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fl = (e, t) => {
  const n = {};
  for (const s in e)
    (!hn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ml(e, t, n) {
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
      for (let g = 0; g < f.length; g++) {
        const S = f[g];
        if (Hr(l, s, S) && !Cn(d, S))
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
    if (Hr(t, e, i) && !Cn(n, i))
      return !0;
  }
  return !1;
}
function Hr(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && q(s) && q(r) ? !Ge(s, r) : s !== r;
}
function Rl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Kr = {}, Br = () => Object.create(Kr), Wr = (e) => Object.getPrototypeOf(e) === Kr;
function Il(e, t, n, s = !1) {
  const r = {}, i = Br();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qr(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Hi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Nl(e, t, n, s) {
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
        if (Cn(e.emitsOptions, S))
          continue;
        const T = t[S];
        if (c)
          if (K(i, S))
            T !== i[S] && (i[S] = T, d = !0);
          else {
            const U = be(S);
            r[U] = Yn(
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
    qr(e, t, r, i) && (d = !0);
    let f;
    for (const g in o)
      (!t || // for camelCase
      !K(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = ut(g)) === g || !K(t, f))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[g] = Yn(
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
function qr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let c in t) {
      if (Pt(c))
        continue;
      const d = t[c];
      let f;
      r && K(r, f = be(c)) ? !i || !i.includes(f) ? n[f] = d : (o || (o = {}))[f] = d : Cn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, l = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ W(n), d = o || z;
    for (let f = 0; f < i.length; f++) {
      const g = i[f];
      n[g] = Yn(
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
function Yn(e, t, n, s, r, i) {
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
    ] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
const Dl = /* @__PURE__ */ new WeakMap();
function kr(e, t, n = !1) {
  const s = n ? Dl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let c = !1;
  if (!D(e)) {
    const f = (g) => {
      c = !0;
      const [S, T] = kr(g, t, !0);
      le(l, S), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return q(e) && s.set(e, gt), gt;
  if (I(i))
    for (let f = 0; f < i.length; f++) {
      const g = be(i[f]);
      Ns(g) && (l[g] = z);
    }
  else if (i)
    for (const f in i) {
      const g = be(f);
      if (Ns(g)) {
        const S = i[f], T = l[g] = I(S) || D(S) ? { type: S } : le({}, S), U = T.type;
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
function Ns(e) {
  return e[0] !== "$" && !Pt(e);
}
const ds = (e) => e === "_" || e === "_ctx" || e === "$stable", ps = (e) => I(e) ? e.map(Fe) : [Fe(e)], Ul = (e, t, n) => {
  if (t._n)
    return t;
  const s = Zi((...r) => ps(t(...r)), n);
  return s._c = !1, s;
}, zr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (ds(r)) continue;
    const i = e[r];
    if (D(i))
      t[r] = Ul(r, i, s);
    else if (i != null) {
      const l = ps(i);
      t[r] = () => l;
    }
  }
}, Gr = (e, t) => {
  const n = ps(t);
  e.slots.default = () => n;
}, Jr = (e, t, n) => {
  for (const s in t)
    (n || !ds(s)) && (e[s] = t[s]);
}, Vl = (e, t, n) => {
  const s = e.slots = Br();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Jr(s, t, n), n && ir(s, "_", r, !0)) : zr(t, s);
  } else t && Gr(e, t);
}, $l = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, l = z;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : Jr(r, t, n) : (i = !t.$stable, zr(t, r)), l = t;
  } else t && (Gr(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !ds(o) && l[o] == null && delete r[o];
}, pe = Bl;
function jl(e) {
  return Ll(e);
}
function Ll(e, t) {
  const n = bn();
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
    setScopeId: T = Me,
    insertStaticContent: U
  } = e, O = (a, u, h, x = null, v = null, y = null, E = void 0, w = null, C = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !Et(a, u) && (x = Gt(a), Se(a, v, y, !0), a = null), u.patchFlag === -2 && (C = !1, u.dynamicChildren = null);
    const { type: _, ref: R, shapeFlag: A } = u;
    switch (_) {
      case wn:
        p(a, u, h, x);
        break;
      case Be:
        m(a, u, h, x);
        break;
      case Vn:
        a == null && P(u, h, x, E);
        break;
      case te:
        qt(
          a,
          u,
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
          a,
          u,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        ) : A & 6 ? kt(
          a,
          u,
          h,
          x,
          v,
          y,
          E,
          w,
          C
        ) : (A & 64 || A & 128) && _.process(
          a,
          u,
          h,
          x,
          v,
          y,
          E,
          w,
          C,
          St
        );
    }
    R != null && v ? Rt(R, a && a.ref, y, u || a, !u) : R == null && a && a.ref != null && Rt(a.ref, null, y, a, !0);
  }, p = (a, u, h, x) => {
    if (a == null)
      s(
        u.el = o(u.children),
        h,
        x
      );
    else {
      const v = u.el = a.el;
      u.children !== a.children && d(v, u.children);
    }
  }, m = (a, u, h, x) => {
    a == null ? s(
      u.el = c(u.children || ""),
      h,
      x
    ) : u.el = a.el;
  }, P = (a, u, h, x) => {
    [a.el, a.anchor] = U(
      a.children,
      u,
      h,
      x,
      a.el,
      a.anchor
    );
  }, L = ({ el: a, anchor: u }, h, x) => {
    let v;
    for (; a && a !== u; )
      v = S(a), s(a, h, x), a = v;
    s(u, h, x);
  }, M = ({ el: a, anchor: u }) => {
    let h;
    for (; a && a !== u; )
      h = S(a), r(a), a = h;
    r(u);
  }, Y = (a, u, h, x, v, y, E, w, C) => {
    if (u.type === "svg" ? E = "svg" : u.type === "math" && (E = "mathml"), a == null)
      de(
        u,
        h,
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
  }, de = (a, u, h, x, v, y, E, w) => {
    let C, _;
    const { props: R, shapeFlag: A, transition: F, dirs: N } = a;
    if (C = a.el = l(
      a.type,
      y,
      R && R.is,
      R
    ), A & 8 ? f(C, a.children) : A & 16 && qe(
      a.children,
      C,
      null,
      x,
      v,
      Un(a, y),
      E,
      w
    ), N && et(a, null, x, "created"), xe(C, a, a.scopeId, E, x), R) {
      for (const k in R)
        k !== "value" && !Pt(k) && i(C, k, null, R[k], y, x);
      "value" in R && i(C, "value", null, R.value, y), (_ = R.onVnodeBeforeMount) && Ae(_, x, a);
    }
    N && et(a, null, x, "beforeMount");
    const $ = Hl(v, F);
    $ && F.beforeEnter(C), s(C, u, h), ((_ = R && R.onVnodeMounted) || $ || N) && pe(() => {
      _ && Ae(_, x, a), $ && F.enter(C), N && et(a, null, x, "mounted");
    }, v);
  }, xe = (a, u, h, x, v) => {
    if (h && T(a, h), x)
      for (let y = 0; y < x.length; y++)
        T(a, x[y]);
    if (v) {
      let y = v.subTree;
      if (u === y || Qr(y.type) && (y.ssContent === u || y.ssFallback === u)) {
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
  }, qe = (a, u, h, x, v, y, E, w, C = 0) => {
    for (let _ = C; _ < a.length; _++) {
      const R = a[_] = w ? De(a[_]) : Fe(a[_]);
      O(
        null,
        R,
        u,
        h,
        x,
        v,
        y,
        E,
        w
      );
    }
  }, Wt = (a, u, h, x, v, y, E) => {
    const w = u.el = a.el;
    let { patchFlag: C, dynamicChildren: _, dirs: R } = u;
    C |= a.patchFlag & 16;
    const A = a.props || z, F = u.props || z;
    let N;
    if (h && tt(h, !1), (N = F.onVnodeBeforeUpdate) && Ae(N, h, u, a), R && et(u, a, h, "beforeUpdate"), h && tt(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!a.dynamicChildren || a.dynamicChildren.length !== _.length) && (C = 0, E = !1, _ = null), (A.innerHTML && F.innerHTML == null || A.textContent && F.textContent == null) && f(w, ""), _ ? Ye(
      a.dynamicChildren,
      _,
      w,
      h,
      x,
      Un(u, v),
      y
    ) : E || G(
      a,
      u,
      w,
      null,
      h,
      x,
      Un(u, v),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        vt(w, A, F, h, v);
      else if (C & 2 && A.class !== F.class && i(w, "class", null, F.class, v), C & 4 && i(w, "style", A.style, F.style, v), C & 8) {
        const $ = u.dynamicProps;
        for (let k = 0; k < $.length; k++) {
          const B = $[k], Q = A[B], se = F[B];
          (se !== Q || B === "value") && i(w, B, Q, se, v, h);
        }
      }
      C & 1 && a.children !== u.children && f(w, u.children);
    } else !E && _ == null && vt(w, A, F, h, v);
    ((N = F.onVnodeUpdated) || R) && pe(() => {
      N && Ae(N, h, u, a), R && et(u, a, h, "updated");
    }, x);
  }, Ye = (a, u, h, x, v, y, E) => {
    for (let w = 0; w < u.length; w++) {
      const C = a[w], _ = u[w], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Et(C, _) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      O(
        C,
        _,
        R,
        null,
        x,
        v,
        y,
        E,
        !0
      );
    }
  }, vt = (a, u, h, x, v) => {
    if (u !== h) {
      if (u !== z)
        for (const y in u)
          !Pt(y) && !(y in h) && i(
            a,
            y,
            u[y],
            null,
            v,
            x
          );
      for (const y in h) {
        if (Pt(y)) continue;
        const E = h[y], w = u[y];
        E !== w && y !== "value" && i(a, y, w, E, v, x);
      }
      "value" in h && i(a, "value", u.value, h.value, v);
    }
  }, qt = (a, u, h, x, v, y, E, w, C) => {
    const _ = u.el = a ? a.el : o(""), R = u.anchor = a ? a.anchor : o("");
    let { patchFlag: A, dynamicChildren: F, slotScopeIds: N } = u;
    N && (w = w ? w.concat(N) : N), a == null ? (s(_, h, x), s(R, h, x), qe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      R,
      v,
      y,
      E,
      w,
      C
    )) : A > 0 && A & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === F.length ? (Ye(
      a.dynamicChildren,
      F,
      h,
      v,
      y,
      E,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || v && u === v.subTree) && Yr(
      a,
      u,
      !0
      /* shallow */
    )) : G(
      a,
      u,
      h,
      R,
      v,
      y,
      E,
      w,
      C
    );
  }, kt = (a, u, h, x, v, y, E, w, C) => {
    u.slotScopeIds = w, a == null ? u.shapeFlag & 512 ? v.ctx.activate(
      u,
      h,
      x,
      E,
      C
    ) : Tn(
      u,
      h,
      x,
      v,
      y,
      E,
      C
    ) : hs(a, u, C);
  }, Tn = (a, u, h, x, v, y, E) => {
    const w = a.component = Yl(
      a,
      x,
      v
    );
    if (fs(a) && (w.ctx.renderer = St), Zl(w, !1, E), w.asyncDep) {
      if (v && v.registerDep(w, oe, E), !a.el) {
        const C = w.subTree = je(Be);
        m(null, C, u, h), a.placeholder = C.el;
      }
    } else
      oe(
        w,
        a,
        u,
        h,
        v,
        y,
        E
      );
  }, hs = (a, u, h) => {
    const x = u.component = a.component;
    if (Ml(a, u, h))
      if (x.asyncDep && !x.asyncResolved) {
        X(x, u, h);
        return;
      } else
        x.next = u, x.update();
    else
      u.el = a.el, x.vnode = u;
  }, oe = (a, u, h, x, v, y, E) => {
    const w = () => {
      if (a.isMounted) {
        let { next: A, bu: F, u: N, parent: $, vnode: k } = a;
        {
          const we = Xr(a);
          if (we) {
            A && (A.el = k.el, X(a, A, E)), we.asyncDep.then(() => {
              pe(() => {
                a.isUnmounted || _();
              }, v);
            });
            return;
          }
        }
        let B = A, Q;
        tt(a, !1), A ? (A.el = k.el, X(a, A, E)) : A = k, F && en(F), (Q = A.props && A.props.onVnodeBeforeUpdate) && Ae(Q, $, A, k), tt(a, !0);
        const se = Rs(a), Ce = a.subTree;
        a.subTree = se, O(
          Ce,
          se,
          // parent may have changed if it's in a teleport
          g(Ce.el),
          // anchor may have changed if it's in a fragment
          Gt(Ce),
          a,
          v,
          y
        ), A.el = se.el, B === null && Rl(a, se.el), N && pe(N, v), (Q = A.props && A.props.onVnodeUpdated) && pe(
          () => Ae(Q, $, A, k),
          v
        );
      } else {
        let A;
        const { el: F, props: N } = u, { bm: $, m: k, parent: B, root: Q, type: se } = a, Ce = It(u);
        tt(a, !1), $ && en($), !Ce && (A = N && N.onVnodeBeforeMount) && Ae(A, B, u), tt(a, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            se,
            a.parent ? a.parent.type : void 0
          );
          const we = a.subTree = Rs(a);
          O(
            null,
            we,
            h,
            x,
            a,
            v,
            y
          ), u.el = we.el;
        }
        if (k && pe(k, v), !Ce && (A = N && N.onVnodeMounted)) {
          const we = u;
          pe(
            () => Ae(A, B, we),
            v
          );
        }
        (u.shapeFlag & 256 || B && It(B.vnode) && B.vnode.shapeFlag & 256) && a.a && pe(a.a, v), a.isMounted = !0, u = h = x = null;
      }
    };
    a.scope.on();
    const C = a.effect = new ar(w);
    a.scope.off();
    const _ = a.update = C.run.bind(C), R = a.job = C.runIfDirty.bind(C);
    R.i = a, R.id = a.uid, C.scheduler = () => as(R), tt(a, !0), _();
  }, X = (a, u, h) => {
    u.component = a;
    const x = a.vnode.props;
    a.vnode = u, a.next = null, Nl(a, u.props, x, h), $l(a, u.children, h), Le(), Es(a), He();
  }, G = (a, u, h, x, v, y, E, w, C = !1) => {
    const _ = a && a.children, R = a ? a.shapeFlag : 0, A = u.children, { patchFlag: F, shapeFlag: N } = u;
    if (F > 0) {
      if (F & 128) {
        zt(
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
      } else if (F & 256) {
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
    N & 8 ? (R & 16 && xt(_, v, y), A !== _ && f(h, A)) : R & 16 ? N & 16 ? zt(
      _,
      A,
      h,
      x,
      v,
      y,
      E,
      w,
      C
    ) : xt(_, v, y, !0) : (R & 8 && f(h, ""), N & 16 && qe(
      A,
      h,
      x,
      v,
      y,
      E,
      w,
      C
    ));
  }, Xe = (a, u, h, x, v, y, E, w, C) => {
    a = a || gt, u = u || gt;
    const _ = a.length, R = u.length, A = Math.min(_, R);
    let F;
    for (F = 0; F < A; F++) {
      const N = u[F] = C ? De(u[F]) : Fe(u[F]);
      O(
        a[F],
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
    _ > R ? xt(
      a,
      v,
      y,
      !0,
      !1,
      A
    ) : qe(
      u,
      h,
      x,
      v,
      y,
      E,
      w,
      C,
      A
    );
  }, zt = (a, u, h, x, v, y, E, w, C) => {
    let _ = 0;
    const R = u.length;
    let A = a.length - 1, F = R - 1;
    for (; _ <= A && _ <= F; ) {
      const N = a[_], $ = u[_] = C ? De(u[_]) : Fe(u[_]);
      if (Et(N, $))
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
    for (; _ <= A && _ <= F; ) {
      const N = a[A], $ = u[F] = C ? De(u[F]) : Fe(u[F]);
      if (Et(N, $))
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
      A--, F--;
    }
    if (_ > A) {
      if (_ <= F) {
        const N = F + 1, $ = N < R ? u[N].el : x;
        for (; _ <= F; )
          O(
            null,
            u[_] = C ? De(u[_]) : Fe(u[_]),
            h,
            $,
            v,
            y,
            E,
            w,
            C
          ), _++;
      }
    } else if (_ > F)
      for (; _ <= A; )
        Se(a[_], v, y, !0), _++;
    else {
      const N = _, $ = _, k = /* @__PURE__ */ new Map();
      for (_ = $; _ <= F; _++) {
        const he = u[_] = C ? De(u[_]) : Fe(u[_]);
        he.key != null && k.set(he.key, _);
      }
      let B, Q = 0;
      const se = F - $ + 1;
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
          Ee = k.get(he.key);
        else
          for (B = $; B <= F; B++)
            if (Ct[B - $] === 0 && Et(he, u[B])) {
              Ee = B;
              break;
            }
        Ee === void 0 ? Se(he, v, y, !0) : (Ct[Ee - $] = _ + 1, Ee >= we ? we = Ee : Ce = !0, O(
          he,
          u[Ee],
          h,
          null,
          v,
          y,
          E,
          w,
          C
        ), Q++);
      }
      const bs = Ce ? Kl(Ct) : gt;
      for (B = bs.length - 1, _ = se - 1; _ >= 0; _--) {
        const he = $ + _, Ee = u[he], ys = u[he + 1], _s = he + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ys.el || Zr(ys)
        ) : x;
        Ct[_] === 0 ? O(
          null,
          Ee,
          h,
          _s,
          v,
          y,
          E,
          w,
          C
        ) : Ce && (B < 0 || _ !== bs[B] ? Ze(Ee, h, _s, 2) : B--);
      }
    }
  }, Ze = (a, u, h, x, v = null) => {
    const { el: y, type: E, transition: w, children: C, shapeFlag: _ } = a;
    if (_ & 6) {
      Ze(a.component.subTree, u, h, x);
      return;
    }
    if (_ & 128) {
      a.suspense.move(u, h, x);
      return;
    }
    if (_ & 64) {
      E.move(a, u, h, St);
      return;
    }
    if (E === te) {
      s(y, u, h);
      for (let A = 0; A < C.length; A++)
        Ze(C[A], u, h, x);
      s(a.anchor, u, h);
      return;
    }
    if (E === Vn) {
      L(a, u, h);
      return;
    }
    if (x !== 2 && _ & 1 && w)
      if (x === 0)
        w.persisted && !y[Nn] ? s(y, u, h) : (w.beforeEnter(y), s(y, u, h), pe(() => w.enter(y), v));
      else {
        const { leave: A, delayLeave: F, afterLeave: N } = w, $ = () => {
          a.ctx.isUnmounted ? r(y) : s(y, u, h);
        }, k = () => {
          const B = y._isLeaving || !!y[Nn];
          y._isLeaving && y[Nn](
            !0
            /* cancelled */
          ), w.persisted && !B ? $() : A(y, () => {
            $(), N && N();
          });
        };
        F ? F(y, $, k) : k();
      }
    else
      s(y, u, h);
  }, Se = (a, u, h, x = !1, v = !1) => {
    const {
      type: y,
      props: E,
      ref: w,
      children: C,
      dynamicChildren: _,
      shapeFlag: R,
      patchFlag: A,
      dirs: F,
      cacheIndex: N,
      memo: $
    } = a;
    if (A === -2 && (v = !1), w != null && (Le(), Rt(w, null, h, a, !0), He()), N != null && (u.renderCache[N] = void 0), R & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const k = R & 1 && F, B = !It(a);
    let Q;
    if (B && (Q = E && E.onVnodeBeforeUnmount) && Ae(Q, u, a), R & 6)
      ai(a.component, h, x);
    else {
      if (R & 128) {
        a.suspense.unmount(h, x);
        return;
      }
      k && et(a, null, u, "beforeUnmount"), R & 64 ? a.type.remove(
        a,
        u,
        h,
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
        h,
        !1,
        !0
      ) : (y === te && A & 384 || !v && R & 16) && xt(C, u, h), x && gs(a);
    }
    const se = $ != null && N == null;
    (B && (Q = E && E.onVnodeUnmounted) || k || se) && pe(() => {
      Q && Ae(Q, u, a), k && et(a, null, u, "unmounted"), se && (a.el = null);
    }, h);
  }, gs = (a) => {
    const { type: u, el: h, anchor: x, transition: v } = a;
    if (u === te) {
      ci(h, x);
      return;
    }
    if (u === Vn) {
      M(a);
      return;
    }
    const y = () => {
      r(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: w } = v, C = () => E(h, y);
      w ? w(a.el, y, C) : C();
    } else
      y();
  }, ci = (a, u) => {
    let h;
    for (; a !== u; )
      h = S(a), r(a), a = h;
    r(u);
  }, ai = (a, u, h) => {
    const { bum: x, scope: v, job: y, subTree: E, um: w, m: C, a: _ } = a;
    Ds(C), Ds(_), x && en(x), v.stop(), y && (y.flags |= 8, Se(E, a, u, h)), w && pe(w, u), pe(() => {
      a.isUnmounted = !0;
    }, u);
  }, xt = (a, u, h, x = !1, v = !1, y = 0) => {
    for (let E = y; E < a.length; E++)
      Se(a[E], u, h, x, v);
  }, Gt = (a) => {
    if (a.shapeFlag & 6)
      return Gt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = S(a.anchor || a.el), h = u && u[sl];
    return h ? S(h) : u;
  };
  let An = !1;
  const ms = (a, u, h) => {
    let x;
    a == null ? u._vnode && (Se(u._vnode, null, null, !0), x = u._vnode.component) : O(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = a, An || (An = !0, Es(x), Or(), An = !1);
  }, St = {
    p: O,
    um: Se,
    m: Ze,
    r: gs,
    mt: Tn,
    mc: qe,
    pc: G,
    pbc: Ye,
    n: Gt,
    o: e
  };
  return {
    render: ms,
    hydrate: void 0,
    createApp: El(ms)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Hl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = De(r[i]), o.el = l.el), !n && o.patchFlag !== -2 && Yr(l, o)), o.type === wn && (o.patchFlag === -1 && (o = r[i] = De(o)), o.el = l.el), o.type === Be && !o.el && (o.el = l.el);
    }
}
function Kl(e) {
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
function Xr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xr(t);
}
function Ds(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Zr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Zr(t.subTree) : null;
}
const Qr = (e) => e.__isSuspense;
function Bl(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Xi(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), wn = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Vn = /* @__PURE__ */ Symbol.for("v-stc"), ct = [];
let ge = null;
function V(e = !1) {
  ct.push(ge = e ? null : []);
}
function ei() {
  ct.pop(), ge = ct[ct.length - 1] || null;
}
let $t = 1;
function Us(e, t = !1) {
  $t += e, e < 0 && ge && t && (ge.hasOnce = !0);
}
function ti(e) {
  return e.dynamicChildren = $t > 0 ? ge || gt : null, ei(), $t > 0 && ge && ge.push(e), e;
}
function j(e, t, n, s, r, i) {
  return ti(
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
function Wl(e, t, n, s, r) {
  return ti(
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
function ni(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const si = ({ key: e }) => e ?? null, nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || /* @__PURE__ */ fe(e) || D(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, s = 0, r = null, i = e === te ? 0 : 1, l = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && si(t),
    ref: t && nn(t),
    scopeId: Fr,
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
  return o ? (an(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Z(n) ? 8 : 16), $t > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ge.push(c), c;
}
const je = ql;
function ql(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === bl) && (e = Be), ni(e)) {
    const o = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && an(o, n), $t > 0 && !i && ge && (o.shapeFlag & 6 ? ge[ge.indexOf(e)] = o : ge.push(o)), o.patchFlag = -2, o;
  }
  if (no(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: o, style: c } = t;
    o && !Z(o) && (t.class = ns(o)), q(c) && (/* @__PURE__ */ cs(c) && !I(c) && (c = le({}, c)), t.style = ts(c));
  }
  const l = Z(e) ? 1 : Qr(e) ? 128 : xn(e) ? 64 : q(e) ? 4 : D(e) ? 2 : 0;
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
function kl(e) {
  return e ? /* @__PURE__ */ cs(e) || Wr(e) ? le({}, e) : e : null;
}
function _t(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: c } = e, d = t ? zl(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && si(d),
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
  return je(wn, null, e, t);
}
function dt(e = "", t = !1) {
  return t ? (V(), Wl(Be, null, e)) : je(Be, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? je(Be) : I(e) ? je(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ni(e) ? De(e) : je(wn, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function an(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), an(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Wr(t) ? t._ctx = me : r === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (D(t)) {
    if (s & 65) {
      an(e, { default: t });
      return;
    }
    t = { default: t, _ctx: me }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ee(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function zl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ns([t.class, s.class]));
      else if (r === "style")
        t.style = ts([t.style, s.style]);
      else if (pn(r)) {
        const i = t[r], l = s[r];
        l && i !== l && !(I(i) && i.includes(l)) ? t[r] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !hn(r) && (t[r] = l);
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
const Gl = jr();
let Jl = 0;
function Yl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Gl, i = {
    uid: Jl++,
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
    scope: new Si(
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
    propsOptions: kr(s, r),
    emitsOptions: Lr(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Al.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const Xl = () => ue || me;
let un, jt;
{
  const e = bn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  un = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), jt = t(
    "__VUE_SSR_SETTERS__",
    (n) => Lt = n
  );
}
const Bt = (e) => {
  const t = ue;
  return un(e), e.scope.on(), () => {
    e.scope.off(), un(t);
  };
}, Vs = () => {
  ue && ue.scope.off(), un(null);
};
function ri(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function Zl(e, t = !1, n = !1) {
  t && jt(t);
  const { props: s, children: r } = e.vnode, i = ri(e);
  Il(e, s, i, t), Vl(e, r, n || t);
  const l = i ? Ql(e, t) : void 0;
  return t && jt(!1), l;
}
function Ql(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, yl);
  const { setup: s } = n;
  if (s) {
    Le();
    const r = e.setupContext = s.length > 1 ? to(e) : null, i = Bt(e), l = Kt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = tr(l);
    if (He(), i(), (o || e.sp) && !It(e) && Nr(e), o) {
      if (l.then(Vs, Vs), t)
        return l.then((c) => {
          jt(!0);
          try {
            $s(e, c, t);
          } finally {
            jt(!1);
          }
        }).catch((c) => {
          vn(c, e, 0);
        });
      e.asyncDep = l;
    } else
      $s(e, l);
  } else
    ii(e);
}
function $s(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = wr(t)), ii(e);
}
function ii(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Me);
  {
    const r = Bt(e);
    Le();
    try {
      _l(e);
    } finally {
      He(), r();
    }
  }
}
const eo = {
  get(e, t) {
    return ie(e, "get", ""), e[t];
  }
};
function to(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, eo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function En(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wr(Ki(e.exposed)), {
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
function no(e) {
  return D(e) && "__vccOpts" in e;
}
const st = (e, t) => /* @__PURE__ */ ki(e, t, Lt), so = "3.5.42";
let Xn;
const js = typeof window < "u" && window.trustedTypes;
if (js)
  try {
    Xn = /* @__PURE__ */ js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const li = Xn ? (e) => Xn.createHTML(e) : (e) => e, ro = "http://www.w3.org/2000/svg", io = "http://www.w3.org/1998/Math/MathML", Ne = typeof document < "u" ? document : null, Ls = Ne && /* @__PURE__ */ Ne.createElement("template"), lo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ne.createElementNS(ro, e) : t === "mathml" ? Ne.createElementNS(io, e) : n ? Ne.createElement(e, { is: n }) : Ne.createElement(e);
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
      Ls.innerHTML = li(
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
}, oo = /* @__PURE__ */ Symbol("_vtc");
function co(e, t, n) {
  const s = e[oo];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Hs = /* @__PURE__ */ Symbol("_vod"), ao = /* @__PURE__ */ Symbol("_vsh"), uo = /* @__PURE__ */ Symbol(""), fo = /(?:^|;)\s*display\s*:/;
function po(e, t, n) {
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
      o != null ? go(
        e,
        l,
        !Z(t) && t ? t[l] : void 0,
        o
      ) || Ot(s, l, o) : Ot(s, l, "");
    }
  } else if (r) {
    if (t !== n) {
      const l = s[uo];
      l && (n += ";" + l), s.cssText = n, i = fo.test(n);
    }
  } else t && e.removeAttribute("style");
  Hs in e && (e[Hs] = i ? s.display : "", e[ao] && (s.display = "none"));
}
const Zt = /\s*!important$/;
function Ot(e, t, n) {
  if (I(n))
    n.forEach((s) => Ot(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Zt.test(n) ? e.setProperty(t, n.replace(Zt, ""), "important") : e.setProperty(t, n);
  else {
    const s = ho(e, t);
    Zt.test(n) ? e.setProperty(
      ut(s),
      n.replace(Zt, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ks = ["Webkit", "Moz", "ms"], $n = {};
function ho(e, t) {
  const n = $n[t];
  if (n)
    return n;
  let s = be(t);
  if (s !== "filter" && s in e)
    return $n[t] = s;
  s = rr(s);
  for (let r = 0; r < Ks.length; r++) {
    const i = Ks[r] + s;
    if (i in e)
      return $n[t] = i;
  }
  return t;
}
function go(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Z(s) && n === s;
}
const Bs = "http://www.w3.org/1999/xlink";
function Ws(e, t, n, s, r, i = _i(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bs, t.slice(6, t.length)) : e.setAttributeNS(Bs, t, n) : n == null || i && !lr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Re(n) ? String(n) : n
  );
}
function qs(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? li(n) : n);
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
    o === "boolean" ? n = lr(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
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
function mo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ks = /* @__PURE__ */ Symbol("_vei");
function bo(e, t, n, s, r = null) {
  const i = e[ks] || (e[ks] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [o, c] = vo(t);
    if (s) {
      const d = i[t] = Co(
        s,
        r
      );
      rt(e, o, d, c);
    } else l && (mo(e, o, l, c), i[t] = void 0);
  }
}
const yo = /(Once|Passive|Capture)$/, _o = /^on:?(?:Once|Passive|Capture)$/;
function vo(e) {
  let t, n;
  for (; (n = e.match(yo)) && !_o.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let jn = 0;
const xo = /* @__PURE__ */ Promise.resolve(), So = () => jn || (xo.then(() => jn = 0), jn = Date.now());
function Co(e, t) {
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
  return n.value = e, n.attached = So(), n;
}
const zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wo = (e, t, n, s, r, i) => {
  const l = r === "svg";
  t === "class" ? co(e, s, l) : t === "style" ? po(e, n, s) : pn(t) ? hn(t) || bo(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Eo(e, t, s, l)) ? (qs(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ws(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (To(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Z(s))) ? qs(e, be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ws(e, t, s, l));
};
function Eo(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zs(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return zs(t) && Z(n) ? !1 : t in e;
}
function To(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = be(t);
  return Array.isArray(n) ? n.some((r) => be(r) === s) : Object.keys(n).some((r) => be(r) === s);
}
const fn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => en(t, n) : t;
};
function Ao(e) {
  e.target.composing = !0;
}
function Gs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const it = /* @__PURE__ */ Symbol("_assign"), Qt = /* @__PURE__ */ Symbol("_initialValue");
function Ln(e, t, n) {
  return t && (e = e.trim()), n && (e = mn(e)), e;
}
const Js = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Qt] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Qt] = e.defaultValue.replace(/\r\n?/g, `
`))), e[it] = fn(r);
    const i = s || r.props && r.props.type === "number";
    rt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[it](Ln(e.value, n, i));
    }), (n || i) && rt(e, "change", () => {
      e.value = Ln(e.value, n, i);
    }), t || (rt(e, "compositionstart", Ao), rt(e, "compositionend", Gs), rt(e, "change", Gs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[Qt];
    delete e[Qt], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[it](Ln(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, l) {
    if (e[it] = fn(l), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? mn(e.value) : e.value, c = t ?? "";
    if (o === c)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c);
  }
}, Tt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, rt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? mn(dn(c)) : dn(c)
      ), i = e.multiple, l = i ? at(e._modelValue) ? new Set(r) : r : r[0], o = e._pendingValue = [
        i,
        i ? I(l) ? r.slice() : r : l
      ];
      try {
        e[it](l);
      } finally {
        Tr(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[it] = fn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ys(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[it] = fn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Oo(t, n[1], n[0])) && Ys(e, t);
  }
};
function Oo(e, t, n) {
  if (!n || I(e)) return Ge(e, t);
  if (at(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Ys(e, t) {
  const n = e.multiple, s = I(t);
  if (!(n && !s && !at(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const l = e.options[r], o = dn(l);
      if (n)
        if (s) {
          const c = typeof o;
          c === "string" || c === "number" ? l.selected = t.some((d) => String(d) === String(o)) : l.selected = xi(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (Ge(dn(l), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function dn(e) {
  return "_value" in e ? e._value : e.value;
}
const Po = /* @__PURE__ */ le({ patchProp: wo }, lo);
let Xs;
function Fo() {
  return Xs || (Xs = jl(Po));
}
const Mo = ((...e) => {
  const t = Fo().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Io(s);
    if (!r) return;
    const i = t._component;
    !D(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = n(r, !1, Ro(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
});
function Ro(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Io(e) {
  return Z(e) ? document.querySelector(e) : e;
}
function No(e, t, n) {
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
const Do = { class: "library-vue-catalogue" }, Uo = {
  class: "library-panel",
  "aria-label": "Publication catalogue"
}, Vo = {
  method: "get",
  class: "library-filter-bar",
  "aria-label": "Catalogue search and filters"
}, $o = ["value"], jo = ["value"], Lo = ["value"], Ho = ["value"], Ko = ["value"], Bo = ["value"], Wo = {
  class: "library-pagination",
  "aria-label": "Catalogue pagination"
}, qo = ["href"], ko = {
  key: 1,
  class: "library-muted"
}, zo = ["href"], Go = {
  key: 3,
  class: "library-muted"
}, Jo = {
  key: 0,
  class: "library-empty-content",
  role: "status"
}, Yo = {
  key: 1,
  class: "library-cover-gallery"
}, Xo = ["href", "aria-label"], Zo = ["src", "alt"], Qo = { class: "library-cover-summary" }, ec = {
  key: 0,
  class: "library-creator"
}, tc = { class: "library-muted" }, nc = { key: 0 }, sc = { key: 1 }, rc = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, ic = { key: 0 }, lc = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, oc = {
  key: 0,
  class: "library-muted"
}, cc = ["href"], ac = ["href"], uc = { class: "library-item-metadata" }, fc = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTagEditor"
}, dc = {
  key: 0,
  class: "library-tag-remove-list",
  "aria-label": "Remove Nextcloud tag"
}, pc = { class: "library-tag" }, hc = ["action"], gc = ["action"], mc = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, bc = {
  key: 0,
  class: "library-muted"
}, yc = { class: "library-comment-list" }, _c = { class: "library-muted" }, vc = ["action"], xc = ["action"], Sc = ["value"], Cc = ["value"], wc = ["value"], Ec = ["value"], Tc = ["value"], Ac = ["value"], Oc = ["value"], Pc = ["value"], Fc = ["value"], Mc = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Rc = { class: "library-hero-actions" }, Ic = ["href"], Nc = {
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
    }), d = /* @__PURE__ */ _n({
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
    return (O, p) => (V(), j("div", Do, [
      b("section", Uo, [
        p[47] || (p[47] = b("h2", null, "Publication catalogue", -1)),
        p[48] || (p[48] = b("p", { class: "library-muted" }, "Browse as a shelf/gallery first; open the details panel when metadata matters.", -1)),
        b("form", Vo, [
          b("label", null, [
            p[7] || (p[7] = ee(" Search title / author ", -1)),
            Qe(b("input", {
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
            Qe(b("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (m) => d.type = m),
              name: "type"
            }, [
              p[8] || (p[8] = b("option", { value: "" }, "All types", -1)),
              (V(), j(te, null, Te(n, (m) => b("option", {
                key: m,
                value: m
              }, H(m), 9, $o)), 64))
            ], 512), [
              [Tt, d.type]
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
              [Js, d.tag]
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
              }, H(g(m)), 9, jo))), 128))
            ], 512), [
              [Tt, d.format]
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
              }, H(m), 9, Lo))), 128))
            ], 512), [
              [Tt, d.shelf]
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
              }, H(m), 9, Ho))), 128))
            ], 512), [
              [Tt, d.status]
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
              [Tt, d.sort]
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
              }, H(m), 9, Bo)), 64))
            ], 8, Ko)
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
        b("nav", Wo, [
          b("span", null, "Showing " + H(c.value.from) + "–" + H(c.value.to) + " of " + H(c.value.total) + " catalogue items", 1),
          c.value.previousUrl ? (V(), j("a", {
            key: 0,
            href: c.value.previousUrl
          }, "Previous", 8, qo)) : (V(), j("span", ko, "Previous")),
          c.value.nextUrl ? (V(), j("a", {
            key: 2,
            href: c.value.nextUrl
          }, "Next", 8, zo)) : (V(), j("span", Go, "Next"))
        ]),
        r.value.length === 0 ? (V(), j("div", Jo, [...p[22] || (p[22] = [
          b("h3", null, "No catalogue items match", -1),
          b("p", { class: "library-muted" }, "Scan enabled roots or clear the active filters.", -1)
        ])])) : (V(), j("div", Yo, [
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
              }, null, 8, Zo)
            ], 8, Xo),
            b("div", Qo, [
              b("h3", null, H(m.title), 1),
              m.creators ? (V(), j("p", ec, H(m.creators), 1)) : dt("", !0),
              b("p", tc, [
                b("span", null, H(m.publicationType), 1),
                m.extension ? (V(), j("span", nc, " · Format: " + H(g(m.extension)), 1)) : dt("", !0),
                m.shelf ? (V(), j("span", sc, " · Shelf: " + H(m.shelf), 1)) : dt("", !0)
              ]),
              m.scanStatus !== "indexed" || m.scanError ? (V(), j("p", rc, [
                ee(" scanStatus: " + H(m.scanStatus || "unknown"), 1),
                m.scanError ? (V(), j("span", ic, " · scanError: " + H(m.scanError), 1)) : dt("", !0)
              ])) : dt("", !0),
              b("div", lc, [
                S(m).length === 0 ? (V(), j("span", oc, "No Nextcloud tags")) : (V(!0), j(te, { key: 1 }, Te(S(m), (P) => (V(), j("span", {
                  key: P.id,
                  class: "library-tag"
                }, H(P.name), 1))), 128))
              ]),
              b("p", null, [
                b("a", {
                  href: m.openUrl
                }, "Read", 8, cc),
                p[23] || (p[23] = ee(" · ", -1)),
                b("a", {
                  href: m.filesUrl
                }, "Show in Files", 8, ac)
              ])
            ]),
            b("details", null, [
              p[46] || (p[46] = b("summary", null, "Details / edit metadata", -1)),
              b("dl", uc, [
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
              b("div", fc, [
                p[34] || (p[34] = b("strong", null, "Nextcloud tags", -1)),
                S(m).length > 0 ? (V(), j("ul", dc, [
                  (V(!0), j(te, null, Te(S(m), (P) => (V(), j("li", {
                    key: P.id
                  }, [
                    b("span", pc, H(P.name), 1),
                    b("form", {
                      method: "post",
                      action: U(m, P),
                      class: "library-inline-form"
                    }, [...p[32] || (p[32] = [
                      b("button", { type: "submit" }, "Remove tag", -1)
                    ])], 8, hc)
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
                ])], 8, gc)
              ]),
              b("div", mc, [
                p[36] || (p[36] = b("strong", null, "Nextcloud comments", -1)),
                p[37] || (p[37] = ee()),
                p[38] || (p[38] = b("span", { class: "library-muted" }, "(file-level notes)", -1)),
                p[39] || (p[39] = ee(": ", -1)),
                T(m).count === 0 ? (V(), j("span", bc, "No Nextcloud comments")) : (V(), j(te, { key: 1 }, [
                  b("span", null, H(T(m).count) + " total", 1),
                  b("ul", yc, [
                    (V(!0), j(te, null, Te(T(m).recent, (P) => (V(), j("li", {
                      key: `${P.actorId}-${P.createdAt}-${P.message}`
                    }, [
                      b("span", _c, H(P.actorId) + " · " + H(P.createdAt), 1),
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
                ])], 8, vc)
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
                  }, null, 8, Sc)
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
                    }, H(P), 9, wc)), 64))
                  ], 8, Cc)
                ]),
                b("label", null, [
                  p[42] || (p[42] = ee(" Creators ", -1)),
                  b("input", {
                    type: "text",
                    name: "creators",
                    value: m.creators
                  }, null, 8, Ec)
                ]),
                b("label", null, [
                  p[43] || (p[43] = ee(" Publication ", -1)),
                  b("input", {
                    type: "text",
                    name: "publication",
                    value: m.publication
                  }, null, 8, Tc)
                ]),
                b("label", null, [
                  p[44] || (p[44] = ee(" Date ", -1)),
                  b("input", {
                    type: "text",
                    name: "publicationDate",
                    value: m.publicationDate
                  }, null, 8, Ac)
                ]),
                b("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: m.subtitle
                }, null, 8, Oc),
                b("input", {
                  type: "hidden",
                  name: "language",
                  value: m.language
                }, null, 8, Pc),
                b("input", {
                  type: "hidden",
                  name: "publisher",
                  value: m.publisher
                }, null, 8, Fc),
                p[45] || (p[45] = b("button", { type: "submit" }, "Save metadata", -1))
              ], 8, xc)
            ])
          ]))), 128))
        ]))
      ]),
      b("section", Mc, [
        p[49] || (p[49] = b("div", null, [
          b("h2", null, "Library"),
          b("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        b("div", Rc, [
          b("a", {
            href: f.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Ic)
        ])
      ])
    ]));
  }
}, Zs = No("library", "catalogue", {}), Hn = document.querySelector("#library-vue-root");
function ne(e) {
  return String(e ?? "");
}
function oi(e) {
  return ne(e).toUpperCase();
}
function Dc(e, t, n, s = ne) {
  for (const r of t) {
    const i = document.createElement("option");
    i.value = ne(r), i.textContent = s(r), ne(r) === ne(n) && (i.selected = !0), e.appendChild(i);
  }
}
function Qs(e, t, n, s, r = "") {
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
  d.value = "", d.textContent = r, c.appendChild(d), Dc(c, i, s, l), o.appendChild(c), e.appendChild(o);
}
function Uc(e, t) {
  const n = e.activeFilters || {}, s = document.createElement("form");
  s.method = "get", s.className = "library-filter-bar", s.setAttribute("aria-label", "Catalogue search and filters"), Qs(s, "Search title / author", "q", n.q, "Camera, Eco, Rolleiflex..."), pt(s, "Type", "type", n.type, "All types", ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Qs(s, "Nextcloud tag", "tag", n.tag, "photography"), pt(s, "Format", "format", n.format, "All formats", e.formats || [], oi), pt(s, "Shelf", "shelf", n.shelf, "All shelves", e.shelves || []), pt(s, "Scan status", "status", n.status, "All scan statuses", e.scanStatuses || []), pt(s, "Sort", "sort", n.sort || "title", "Sort by", ["title", "recent", "publicationDate", "format"]), pt(s, "Page size", "limit", t.limit || 100, "Page size", [25, 50, 100, 250, 500]);
  const r = document.createElement("button");
  r.type = "submit", r.className = "button primary", r.setAttribute("aria-label", "Apply catalogue filters"), r.textContent = "Apply filters";
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", "Clear catalogue filters"), i.textContent = "Clear", s.append(r, i), s;
}
function Vc(e, t) {
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
  c.className = "library-muted", c.textContent = "Browse as a shelf/gallery first; open the details panel when metadata matters.", l.appendChild(c), l.appendChild(Uc(e, s));
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
      U.className = "library-cover-link", U.href = ne(S.openUrl || "#"), U.setAttribute("aria-label", `Read ${ne(S.title || "publication")}`);
      const O = document.createElement("img");
      O.className = "library-cover-image", O.src = ne(S.coverUrl || ""), O.alt = `Cover for ${ne(S.title || "publication")}`, O.loading = "lazy", U.appendChild(O);
      const p = document.createElement("div");
      p.className = "library-cover-summary";
      const m = document.createElement("h3");
      if (m.textContent = ne(S.title || "Untitled publication"), p.appendChild(m), S.creators) {
        const de = document.createElement("p");
        de.className = "library-creator", de.textContent = ne(S.creators), p.appendChild(de);
      }
      const P = document.createElement("p");
      P.className = "library-muted", P.textContent = [
        ne(S.publicationType || "other"),
        S.extension ? `Format: ${oi(S.extension)}` : "",
        S.shelf ? `Shelf: ${ne(S.shelf)}` : ""
      ].filter(Boolean).join(" · "), p.appendChild(P);
      const L = document.createElement("p"), M = document.createElement("a");
      M.href = ne(S.openUrl || "#"), M.textContent = "Read";
      const Y = document.createElement("a");
      Y.href = ne(S.filesUrl || "#"), Y.textContent = "Show in Files", L.append(M, document.createTextNode(" · "), Y), p.appendChild(L), T.append(U, p), g.appendChild(T);
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
if (Hn)
  try {
    Mo(Nc, { state: Zs }).mount(Hn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Hn.replaceChildren(Vc(Zs));
  }
//# sourceMappingURL=library-main.mjs.map
