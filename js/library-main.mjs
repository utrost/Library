// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const tt = {}, Tr = [], Di = () => {
}, Fp = () => !1, eu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tu = (e) => e.startsWith("onUpdate:"), $t = Object.assign, gd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, ym = Object.prototype.hasOwnProperty, lt = (e, t) => ym.call(e, t), Ie = Array.isArray, ga = (e) => as(e) === "[object Map]", Mn = (e) => as(e) === "[object Set]", Uf = (e) => as(e) === "[object Date]", Ue = (e) => typeof e == "function", vt = (e) => typeof e == "string", Ki = (e) => typeof e == "symbol", st = (e) => e !== null && typeof e == "object", Mp = (e) => (st(e) || Ue(e)) && Ue(e.then) && Ue(e.catch), Up = Object.prototype.toString, as = (e) => Up.call(e), _m = (e) => as(e).slice(8, -1), zp = (e) => as(e) === "[object Object]", md = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kl = /* @__PURE__ */ bd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), iu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, wm = /-\w/g, Jt = iu(
  (e) => e.replace(wm, (t) => t.slice(1).toUpperCase())
), km = /\B([A-Z])/g, qn = iu(
  (e) => e.replace(km, "-$1").toLowerCase()
), nu = iu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gu = iu(
  (e) => e ? `on${nu(e)}` : ""
), zt = (e, t) => !Object.is(e, t), Ks = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, jp = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, au = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Sm = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zf;
const ru = () => zf || (zf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (Ie(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = vt(n) ? Em(n) : hi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (vt(e) || st(e))
    return e;
}
const Cm = /;(?![^(]*\))/g, Tm = /:([^]+)/, Am = /\/\*[^]*?\*\//g;
function Em(e) {
  const t = {};
  return e.replace(Am, "").split(Cm).forEach((i) => {
    if (i) {
      const n = i.split(Tm);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ae(e) {
  let t = "";
  if (vt(e))
    t = e;
  else if (Ie(e))
    for (let i = 0; i < e.length; i++) {
      const n = Ae(e[i]);
      n && (t += n + " ");
    }
  else if (st(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Js(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !vt(t) && (e.class = Ae(t)), i && (e.style = hi(i)), e;
}
const $m = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xm = /* @__PURE__ */ bd($m);
function Bp(e) {
  return !!e || e === "";
}
function Om(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Un(e[n], t[n]);
  return i;
}
function jf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < i.length; s++)
      if (!n[s] && Un(a, i[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Un(e, t) {
  if (e === t) return !0;
  let i = Uf(e), n = Uf(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Ki(e), n = Ki(t), i || n)
    return e === t;
  if (i = Ie(e), n = Ie(t), i || n)
    return i && n ? Om(e, t) : !1;
  if (i = st(e), n = st(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = ga(e), n = ga(t), i || n || (i = Mn(e), n = Mn(t), i || n))
      return i && n ? jf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), d = t.hasOwnProperty(s);
      if (c && !d || !c && d || !Un(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yd(e, t) {
  return e.findIndex((i) => Un(i, t));
}
const Hp = (e) => !!(e && e.__v_isRef === !0), o = (e) => vt(e) ? e : e == null ? "" : Ie(e) || st(e) && (e.toString === Up || !Ue(e.toString)) ? Hp(e) ? o(e.value) : JSON.stringify(e, Vp, 2) : String(e), Vp = (e, t) => Hp(t) ? Vp(e, t.value) : ga(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[Ku(n, r) + " =>"] = a, i),
    {}
  )
} : Mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => Ku(i))
} : Ki(t) ? Ku(t) : st(t) && !Ie(t) && !zp(t) ? String(t) : t, Ku = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ki(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Nm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Mt;
class Rm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Mt && (Mt.active ? (this.parent = Mt, this.index = (Mt.scopes || (Mt.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, i;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, i = n.length; t < i; t++)
          n[t].pause();
      }
      for (t = 0, i = this.effects.length; t < i; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, i;
      if (this.scopes) {
        const a = this.scopes.slice();
        for (t = 0, i = a.length; t < i; t++)
          a[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, i = n.length; t < i; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const i = Mt;
      try {
        return Mt = this, t();
      } finally {
        Mt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mt, Mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Mt === this)
        Mt = this.prevScope;
      else {
        let t = Mt;
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
      let i, n;
      for (i = 0, n = this.effects.length; i < n; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, n = this.cleanups.length; i < n; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        const a = this.scopes.slice();
        for (i = 0, n = a.length; i < n; i++)
          a[i].stop(!0);
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
function Im() {
  return Mt;
}
let pt;
const Wu = /* @__PURE__ */ new WeakSet();
class qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mt && (Mt.active ? Mt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wu.has(this) && (Wu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bf(this), Wp(this);
    const t = pt, i = qi;
    pt = this, qi = !0;
    try {
      return this.fn();
    } finally {
      Yp(this), pt = t, qi = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kd(t);
      this.deps = this.depsTail = void 0, Bf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lc(this) && this.run();
  }
  get dirty() {
    return Lc(this);
  }
}
let Gp = 0, Sl, Cl;
function Kp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Cl, Cl = e;
    return;
  }
  e.next = Sl, Sl = e;
}
function _d() {
  Gp++;
}
function wd() {
  if (--Gp > 0)
    return;
  if (Cl) {
    let t = Cl;
    for (Cl = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; Sl; ) {
    let t = Sl;
    for (Sl = void 0; t; ) {
      const i = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = i;
    }
  }
  if (e) throw e;
}
function Wp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yp(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), kd(n), Lm(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function Lc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ml) || (e.globalVersion = Ml, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = pt, n = qi;
  pt = e, qi = !0;
  try {
    Wp(e);
    const a = e.fn(e._value);
    (t.version === 0 || zt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    pt = i, qi = n, Yp(e), e.flags &= -3;
  }
}
function kd(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      kd(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Lm(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let qi = !0;
const Xp = [];
function zn() {
  Xp.push(qi), qi = !1;
}
function jn() {
  const e = Xp.pop();
  qi = e === void 0 ? !0 : e;
}
function Bf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = pt;
    pt = void 0;
    try {
      t();
    } finally {
      pt = i;
    }
  }
}
let Ml = 0;
class Pm {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!pt || !qi || pt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== pt)
      i = this.activeLink = new Pm(pt, this), pt.deps ? (i.prevDep = pt.depsTail, pt.depsTail.nextDep = i, pt.depsTail = i) : pt.deps = pt.depsTail = i, Jp(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = pt.depsTail, i.nextDep = void 0, pt.depsTail.nextDep = i, pt.depsTail = i, pt.deps === i && (pt.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, Ml++, this.notify(t);
  }
  notify(t) {
    _d();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      wd();
    }
  }
}
function Jp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Jp(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Pc = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ Symbol(
  ""
), Dc = /* @__PURE__ */ Symbol(
  ""
), Ul = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, i) {
  if (qi && pt) {
    let n = Pc.get(e);
    n || Pc.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new lu()), a.map = n, a.key = i), a.track();
  }
}
function Nn(e, t, i, n, a, r) {
  const s = Pc.get(e);
  if (!s) {
    Ml++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (_d(), t === "clear")
    s.forEach(c);
  else {
    const d = Ie(e), y = d && md(i);
    if (d && i === "length") {
      const v = Number(n);
      s.forEach((g, m) => {
        (m === "length" || m === Ul || !Ki(m) && m >= v) && c(g);
      });
    } else
      switch ((i !== void 0 || s.has(void 0)) && c(s.get(i)), y && c(s.get(Ul)), t) {
        case "add":
          d ? y && c(s.get("length")) : (c(s.get(Qa)), ga(e) && c(s.get(Dc)));
          break;
        case "delete":
          d || (c(s.get(Qa)), ga(e) && c(s.get(Dc)));
          break;
        case "set":
          ga(e) && c(s.get(Qa));
          break;
      }
  }
  wd();
}
function gr(e) {
  const t = /* @__PURE__ */ rt(e);
  return t === e ? t : (Yt(t, "iterate", Ul), /* @__PURE__ */ Fi(e) ? t : t.map(Wi));
}
function su(e) {
  return Yt(e = /* @__PURE__ */ rt(e), "iterate", Ul), e;
}
function rn(e, t) {
  return /* @__PURE__ */ Bn(e) ? Rr(/* @__PURE__ */ er(e) ? Wi(t) : t) : Wi(t);
}
const Dm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yu(this, Symbol.iterator, (e) => rn(this, e));
  },
  concat(...e) {
    return gr(this).concat(
      ...e.map((t) => Ie(t) ? gr(t) : t)
    );
  },
  entries() {
    return Yu(this, "entries", (e) => (e[1] = rn(this, e[1]), e));
  },
  every(e, t) {
    return wn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => rn(this, n)),
      arguments
    );
  },
  find(e, t) {
    return wn(
      this,
      "find",
      e,
      t,
      (i) => rn(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return wn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wn(
      this,
      "findLast",
      e,
      t,
      (i) => rn(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zu(this, "includes", e);
  },
  indexOf(...e) {
    return Zu(this, "indexOf", e);
  },
  join(e) {
    return gr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rl(this, "pop");
  },
  push(...e) {
    return rl(this, "push", e);
  },
  reduce(e, ...t) {
    return Hf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hf(this, "reduceRight", e, t);
  },
  shift() {
    return rl(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rl(this, "splice", e);
  },
  toReversed() {
    return gr(this).toReversed();
  },
  toSorted(e) {
    return gr(this).toSorted(e);
  },
  toSpliced(...e) {
    return gr(this).toSpliced(...e);
  },
  unshift(...e) {
    return rl(this, "unshift", e);
  },
  values() {
    return Yu(this, "values", (e) => rn(this, e));
  }
};
function Yu(e, t, i) {
  const n = su(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Fi(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Fm = Array.prototype;
function wn(e, t, i, n, a, r) {
  const s = su(e), c = s !== e && !/* @__PURE__ */ Fi(e), d = s[t];
  if (d !== Fm[t]) {
    const g = d.apply(e, r);
    return c ? Wi(g) : g;
  }
  let y = i;
  s !== e && (c ? y = function(g, m) {
    return i.call(this, rn(e, g), m, e);
  } : i.length > 2 && (y = function(g, m) {
    return i.call(this, g, m, e);
  }));
  const v = d.call(s, y, n);
  return c && a ? a(v) : v;
}
function Hf(e, t, i, n) {
  const a = su(e), r = a !== e && !/* @__PURE__ */ Fi(e);
  let s = i, c = !1;
  a !== e && (r ? (c = n.length === 0, s = function(y, v, g) {
    return c && (c = !1, y = rn(e, y)), i.call(this, y, rn(e, v), g, e);
  }) : i.length > 3 && (s = function(y, v, g) {
    return i.call(this, y, v, g, e);
  }));
  const d = a[t](s, ...n);
  return c ? rn(e, d) : d;
}
function Zu(e, t, i) {
  const n = /* @__PURE__ */ rt(e);
  Yt(n, "iterate", Ul);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Td(i[0]) ? (i[0] = /* @__PURE__ */ rt(i[0]), n[t](...i)) : a;
}
function rl(e, t, i = []) {
  zn(), _d();
  const n = (/* @__PURE__ */ rt(e))[t].apply(e, i);
  return wd(), jn(), n;
}
const Mm = /* @__PURE__ */ bd("__proto__,__v_isRef,__isVue"), Qp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ki)
);
function Um(e) {
  Ki(e) || (e = String(e));
  const t = /* @__PURE__ */ rt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class ev {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._isShallow = i;
  }
  get(t, i, n) {
    if (i === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (i === "__v_isReactive")
      return !a;
    if (i === "__v_isReadonly")
      return a;
    if (i === "__v_isShallow")
      return r;
    if (i === "__v_raw")
      return n === (a ? r ? Ym : av : r ? nv : iv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = Ie(t);
    if (!a) {
      let d;
      if (s && (d = Dm[i]))
        return d;
      if (i === "hasOwnProperty")
        return Um;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qt(t) ? t : n
    );
    if ((Ki(i) ? Qp.has(i) : Mm(i)) || (a || Yt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ Qt(c)) {
      const d = s && md(i) ? c : c.value;
      return a && st(d) ? /* @__PURE__ */ zl(d) : d;
    }
    return st(c) ? a ? /* @__PURE__ */ zl(c) : /* @__PURE__ */ Nt(c) : c;
  }
}
class tv extends ev {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const s = Ie(t) && md(i);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ Bn(r);
      if (!/* @__PURE__ */ Fi(n) && !/* @__PURE__ */ Bn(n) && (r = /* @__PURE__ */ rt(r), n = /* @__PURE__ */ rt(n)), !s && /* @__PURE__ */ Qt(r) && !/* @__PURE__ */ Qt(n))
        return y || (r.value = n), !0;
    }
    const c = s ? Number(i) < t.length : lt(t, i), d = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Qt(t) ? t : a
    );
    return t === /* @__PURE__ */ rt(a) && d && (c ? zt(n, r) && Nn(t, "set", i, n) : Nn(t, "add", i, n)), d;
  }
  deleteProperty(t, i) {
    const n = lt(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && Nn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Ki(i) || !Qp.has(i)) && Yt(t, "has", i), n;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Ie(t) ? "length" : Qa
    ), Reflect.ownKeys(t);
  }
}
class zm extends ev {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, i) {
    return !0;
  }
  deleteProperty(t, i) {
    return !0;
  }
}
const jm = /* @__PURE__ */ new tv(), Bm = /* @__PURE__ */ new zm(), Hm = /* @__PURE__ */ new tv(!0);
const Fc = (e) => e, Is = (e) => Reflect.getPrototypeOf(e);
function Vm(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ rt(a), s = ga(r), c = e === "entries" || e === Symbol.iterator && s, d = e === "keys" && s, y = a[e](...n), v = i ? Fc : t ? Rr : Wi;
    return !t && Yt(
      r,
      "iterate",
      d ? Dc : Qa
    ), $t(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: g, done: m } = y.next();
          return m ? { value: g, done: m } : {
            value: c ? [v(g[0]), v(g[1])] : v(g),
            done: m
          };
        }
      }
    );
  };
}
function Ls(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qm(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ rt(r), c = /* @__PURE__ */ rt(a);
      e || (zt(a, c) && Yt(s, "get", a), Yt(s, "get", c));
      const { has: d } = Is(s), y = t ? Fc : e ? Rr : Wi;
      if (d.call(s, a))
        return y(r.get(a));
      if (d.call(s, c))
        return y(r.get(c));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ rt(a), "iterate", Qa), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ rt(r), c = /* @__PURE__ */ rt(a);
      return e || (zt(a, c) && Yt(s, "has", a), Yt(s, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const s = this, c = s.__v_raw, d = /* @__PURE__ */ rt(c), y = t ? Fc : e ? Rr : Wi;
      return !e && Yt(d, "iterate", Qa), c.forEach((v, g) => a.call(r, y(v), y(g), s));
    }
  };
  return $t(
    i,
    e ? {
      add: Ls("add"),
      set: Ls("set"),
      delete: Ls("delete"),
      clear: Ls("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ rt(this), s = Is(r), c = /* @__PURE__ */ rt(a), d = !t && !/* @__PURE__ */ Fi(a) && !/* @__PURE__ */ Bn(a) ? c : a;
        return s.has.call(r, d) || zt(a, d) && s.has.call(r, a) || zt(c, d) && s.has.call(r, c) || (r.add(d), Nn(r, "add", d, d)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Fi(r) && !/* @__PURE__ */ Bn(r) && (r = /* @__PURE__ */ rt(r));
        const s = /* @__PURE__ */ rt(this), { has: c, get: d } = Is(s);
        let y = c.call(s, a);
        y || (a = /* @__PURE__ */ rt(a), y = c.call(s, a));
        const v = d.call(s, a);
        return s.set(a, r), y ? zt(r, v) && Nn(s, "set", a, r) : Nn(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ rt(this), { has: s, get: c } = Is(r);
        let d = s.call(r, a);
        d || (a = /* @__PURE__ */ rt(a), d = s.call(r, a)), c && c.call(r, a);
        const y = r.delete(a);
        return d && Nn(r, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ rt(this), r = a.size !== 0, s = a.clear();
        return r && Nn(
          a,
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
  ].forEach((a) => {
    i[a] = Vm(a, e, t);
  }), i;
}
function Sd(e, t) {
  const i = qm(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    lt(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Gm = {
  get: /* @__PURE__ */ Sd(!1, !1)
}, Km = {
  get: /* @__PURE__ */ Sd(!1, !0)
}, Wm = {
  get: /* @__PURE__ */ Sd(!0, !1)
};
const iv = /* @__PURE__ */ new WeakMap(), nv = /* @__PURE__ */ new WeakMap(), av = /* @__PURE__ */ new WeakMap(), Ym = /* @__PURE__ */ new WeakMap();
function Zm(e) {
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
function Nt(e) {
  return /* @__PURE__ */ Bn(e) ? e : Cd(
    e,
    !1,
    jm,
    Gm,
    iv
  );
}
// @__NO_SIDE_EFFECTS__
function Xm(e) {
  return Cd(
    e,
    !1,
    Hm,
    Km,
    nv
  );
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  return Cd(
    e,
    !0,
    Bm,
    Wm,
    av
  );
}
function Cd(e, t, i, n, a) {
  if (!st(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Zm(_m(e));
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? n : i
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return /* @__PURE__ */ Bn(e) ? /* @__PURE__ */ er(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Td(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ rt(t) : e;
}
function Jm(e) {
  return !lt(e, "__v_skip") && Object.isExtensible(e) && jp(e, "__v_skip", !0), e;
}
const Wi = (e) => st(e) ? /* @__PURE__ */ Nt(e) : e, Rr = (e) => st(e) ? /* @__PURE__ */ zl(e) : e;
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  return lv(e, !1);
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  return lv(e, !0);
}
function lv(e, t) {
  return /* @__PURE__ */ Qt(e) ? e : new Qm(e, t);
}
class Qm {
  constructor(t, i) {
    this.dep = new lu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ rt(t), this._value = i ? t : Wi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Fi(t) || /* @__PURE__ */ Bn(t);
    t = n ? t : /* @__PURE__ */ rt(t), zt(t, i) && (this._rawValue = t, this._value = n ? t : Wi(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ Qt(e) ? e.value : e;
}
function Pn(e) {
  return Ue(e) ? e() : u(e);
}
const ey = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Qt(a) && !/* @__PURE__ */ Qt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function sv(e) {
  return /* @__PURE__ */ er(e) ? e : new Proxy(e, ey);
}
class ty {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new lu(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = n, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function iy(e) {
  return new ty(e);
}
class ny {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new lu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ml - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pt !== this)
      return Kp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ay(e, t, i = !1) {
  let n, a;
  return Ue(e) ? n = e : (n = e.get, a = e.set), new ny(n, a, i);
}
const Ps = {}, Qs = /* @__PURE__ */ new WeakMap();
let Ga;
function ry(e, t = !1, i = Ga) {
  if (i) {
    let n = Qs.get(i);
    n || Qs.set(i, n = []), n.push(e);
  }
}
function ly(e, t, i = tt) {
  const { immediate: n, deep: a, once: r, scheduler: s, augmentJob: c, call: d } = i, y = (R) => a ? R : /* @__PURE__ */ Fi(R) || a === !1 || a === 0 ? Rn(R, 1) : Rn(R);
  let v, g, m, k, T = !1, C = !1;
  if (/* @__PURE__ */ Qt(e) ? (g = () => e.value, T = /* @__PURE__ */ Fi(e)) : /* @__PURE__ */ er(e) ? (g = () => y(e), T = !0) : Ie(e) ? (C = !0, T = e.some((R) => /* @__PURE__ */ er(R) || /* @__PURE__ */ Fi(R)), g = () => e.map((R) => {
    if (/* @__PURE__ */ Qt(R))
      return R.value;
    if (/* @__PURE__ */ er(R))
      return y(R);
    if (Ue(R))
      return d ? d(R, 2) : R();
  })) : Ue(e) ? t ? g = d ? () => d(e, 2) : e : g = () => {
    if (m) {
      zn();
      try {
        m();
      } finally {
        jn();
      }
    }
    const R = Ga;
    Ga = v;
    try {
      return d ? d(e, 3, [k]) : e(k);
    } finally {
      Ga = R;
    }
  } : g = Di, t && a) {
    const R = g, pe = a === !0 ? 1 / 0 : a;
    g = () => Rn(R(), pe);
  }
  const O = Im(), I = () => {
    v.stop(), O && O.active && gd(O.effects, v);
  };
  if (r && t) {
    const R = t;
    t = (...pe) => {
      const Q = R(...pe);
      return I(), Q;
    };
  }
  let L = C ? new Array(e.length).fill(Ps) : Ps;
  const D = (R) => {
    if (!(!(v.flags & 1) || !v.dirty && !R))
      if (t) {
        const pe = v.run();
        if (R || a || T || (C ? pe.some((Q, $) => zt(Q, L[$])) : zt(pe, L))) {
          m && m();
          const Q = Ga;
          Ga = v;
          try {
            const $ = [
              pe,
              // pass undefined as the old value when it's changed for the first time
              L === Ps ? void 0 : C && L[0] === Ps ? [] : L,
              k
            ];
            L = pe, d ? d(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Ga = Q;
          }
        }
      } else
        v.run();
  };
  return c && c(D), v = new qp(g), v.scheduler = s ? () => s(D, !1) : D, k = (R) => ry(R, !1, v), m = v.onStop = () => {
    const R = Qs.get(v);
    if (R) {
      if (d)
        d(R, 4);
      else
        for (const pe of R) pe();
      Qs.delete(v);
    }
  }, t ? n ? D(!0) : L = v.run() : s ? s(D.bind(null, !0), !0) : v.run(), I.pause = v.pause.bind(v), I.resume = v.resume.bind(v), I.stop = I, I;
}
function Rn(e, t = 1 / 0, i) {
  if (t <= 0 || !st(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Qt(e))
    Rn(e.value, t, i);
  else if (Ie(e))
    for (let n = 0; n < e.length; n++)
      Rn(e[n], t, i);
  else if (Mn(e) || ga(e))
    e.forEach((n) => {
      Rn(n, t, i);
    });
  else if (zp(e)) {
    for (const n in e)
      Rn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rn(e[n], t, i);
  }
  return e;
}
function rs(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    ou(a, t, i);
  }
}
function Mi(e, t, i, n) {
  if (Ue(e)) {
    const a = rs(e, t, i, n);
    return a && Mp(a) && a.catch((r) => {
      ou(r, t, i);
    }), a;
  }
  if (Ie(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Mi(e[r], t, i, n));
    return a;
  }
}
function ou(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || tt;
  if (t) {
    let c = t.parent;
    const d = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; c; ) {
      const v = c.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, d, y) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      zn(), rs(r, null, 10, [
        e,
        d,
        y
      ]), jn();
      return;
    }
  }
  sy(e, i, a, n, s);
}
function sy(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ui = [];
let tn = -1;
const Ar = [];
let ha = null, kr = 0;
const ov = /* @__PURE__ */ Promise.resolve();
let eo = null;
function Rt(e) {
  const t = eo || ov;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oy(e) {
  let t = tn + 1, i = ui.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ui[n], r = jl(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function Ad(e) {
  if (!(e.flags & 1)) {
    const t = jl(e), i = ui[ui.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jl(i) ? ui.push(e) : ui.splice(oy(t), 0, e), e.flags |= 1, uv();
  }
}
function uv() {
  eo || (eo = ov.then(fv));
}
function cv(e) {
  if (!Ie(e))
    ha && e.id === -1 ? ha.splice(kr + 1, 0, e) : e.flags & 1 || (Ar.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ar.push(e[t]);
  uv();
}
function Vf(e, t, i = tn + 1) {
  for (; i < ui.length; i++) {
    const n = ui[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ui.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function dv(e) {
  if (Ar.length) {
    const t = [...new Set(Ar)].sort(
      (i, n) => jl(i) - jl(n)
    );
    if (Ar.length = 0, ha) {
      for (let i = 0; i < t.length; i++)
        ha.push(t[i]);
      return;
    }
    for (ha = t, kr = 0; kr < ha.length; kr++) {
      const i = ha[kr];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    ha = null, kr = 0;
  }
}
const jl = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fv(e) {
  try {
    for (tn = 0; tn < ui.length; tn++) {
      const t = ui[tn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; tn < ui.length; tn++) {
      const t = ui[tn];
      t && (t.flags &= -2);
    }
    tn = -1, ui.length = 0, dv(), eo = null, (ui.length || Ar.length) && fv();
  }
}
let Bt = null, uu = null;
function to(e) {
  const t = Bt;
  return Bt = e, uu = e && e.type.__scopeId || null, t;
}
function uy(e) {
  uu = e;
}
function cy() {
  uu = null;
}
const dy = (e) => we;
function we(e, t = Bt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && lo(-1);
    const r = to(t), s = Dn.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let d = Dn.length; d > s; d--) Ld();
      to(r), n._d && lo(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function be(e, t) {
  if (Bt === null)
    return e;
  const i = vu(Bt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, c, d = tt] = t[a];
    r && (Ue(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rn(s), n.push({
      dir: r,
      instance: i,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: d
    }));
  }
  return e;
}
function za(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const c = a[s];
    r && (c.oldValue = r[s].value);
    let d = c.dir[n];
    d && (zn(), Mi(d, i, 8, [
      e.el,
      c,
      e,
      t
    ]), jn());
  }
}
function Ii(e, t) {
  if (Xt) {
    let i = Xt.provides;
    const n = Xt.parent && Xt.parent.provides;
    n === i && (i = Xt.provides = Object.create(n)), i[e] = t;
  }
}
function Zt(e, t, i = !1) {
  const n = Sa();
  if (n || $r) {
    let a = $r ? $r._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && Ue(t) ? t.call(n && n.proxy) : t;
  }
}
const fy = /* @__PURE__ */ Symbol.for("v-scx"), hy = () => Zt(fy);
function py(e, t) {
  return cu(e, null, t);
}
function vy(e, t) {
  return cu(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, i) {
  return cu(e, t, i);
}
function cu(e, t, i = tt) {
  const { immediate: n, deep: a, flush: r, once: s } = i, c = $t({}, i), d = t && n || !t && r !== "post";
  let y;
  if (Kl) {
    if (r === "sync") {
      const k = hy();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!d) {
      const k = () => {
      };
      return k.stop = Di, k.resume = Di, k.pause = Di, k;
    }
  }
  const v = Xt;
  c.call = (k, T, C) => Mi(k, v, T, C);
  let g = !1;
  r === "post" ? c.scheduler = (k) => {
    oi(k, v && v.suspense);
  } : r !== "sync" && (g = !0, c.scheduler = (k, T) => {
    T ? k() : Ad(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), g && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const m = ly(e, t, c);
  return Kl && (y ? y.push(m) : d && m()), m;
}
function by(e, t, i) {
  const n = this.proxy, a = vt(e) ? e.includes(".") ? hv(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Ue(t) ? r = t : (r = t.handler, i = t);
  const s = os(this), c = cu(a, r.bind(n), i);
  return s(), c;
}
function hv(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const ca = /* @__PURE__ */ new WeakMap(), pv = /* @__PURE__ */ Symbol("_vte"), du = (e) => e.__isTeleport, Wa = (e) => e && (e.disabled || e.disabled === ""), gy = (e) => e && (e.defer || e.defer === ""), qf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const i = e && e.to;
  return vt(i) ? t ? t(i) : null : i;
}, my = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, s, c, d, y) {
    const {
      mc: v,
      pc: g,
      pbc: m,
      o: { insert: k, querySelector: T, createText: C, createComment: O, parentNode: I }
    } = y, L = Wa(t.props);
    let { dynamicChildren: D } = t;
    const R = ($, q, K) => {
      $.shapeFlag & 16 && v(
        $.children,
        q,
        K,
        a,
        r,
        s,
        c,
        d
      );
    }, pe = ($ = t) => {
      const q = Wa($.props), K = $.target = Mc($.props, T), Y = Uc(K, $, C, k);
      K && (s !== "svg" && qf(K) ? s = "svg" : s !== "mathml" && Gf(K) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), q || (R($, K, Y), bl($, !1)));
    }, Q = ($) => {
      const q = () => {
        if (ca.get($) === q) {
          if (ca.delete($), Wa($.props)) {
            const K = I($.el) || i;
            R($, K, $.anchor), bl($, !0);
          }
          pe($);
        }
      };
      ca.set($, q), oi(q, r);
    };
    if (e == null) {
      const $ = t.el = C(""), q = t.anchor = C("");
      if (k($, i, n), k(q, i, n), gy(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      L && (R(t, i, q), bl(t, !0)), pe();
    } else {
      t.el = e.el;
      const $ = t.anchor = e.anchor, q = ca.get(e);
      if (q) {
        q.flags |= 8, ca.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const K = t.target = e.target, Y = t.targetAnchor = e.targetAnchor, ne = Wa(e.props), B = ne ? i : K, z = ne ? $ : Y;
      if (s === "svg" || qf(K) ? s = "svg" : (s === "mathml" || Gf(K)) && (s = "mathml"), D ? (m(
        e.dynamicChildren,
        D,
        B,
        a,
        r,
        s,
        c
      ), Id(e, t, !0)) : d || g(
        e,
        t,
        B,
        z,
        a,
        r,
        s,
        c,
        !1
      ), L)
        ne ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ds(
          t,
          i,
          $,
          y,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const x = Mc(t.props, T);
        x && (t.target = x, Ds(
          t,
          x,
          null,
          y,
          0
        ));
      } else ne && Ds(
        t,
        K,
        Y,
        y,
        1
      );
      bl(t, L);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: c,
      anchor: d,
      targetStart: y,
      targetAnchor: v,
      target: g,
      props: m
    } = e, k = Wa(m), T = r || !k, C = ca.get(e);
    if (C && (C.flags |= 8, ca.delete(e)), g && (a(y), a(v)), r && a(d), !C && (k || g) && s & 16)
      for (let O = 0; O < c.length; O++) {
        const I = c[O];
        n(
          I,
          t,
          i,
          T,
          !!I.dynamicChildren
        );
      }
  },
  move: Ds,
  hydrate: yy
};
function Ds(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: s, anchor: c, shapeFlag: d, children: y, props: v } = e, g = r === 2;
  if (g && n(s, t, i), !ca.has(e) && (!g || Wa(v)) && d & 16)
    for (let m = 0; m < y.length; m++)
      a(
        y[m],
        t,
        i,
        2
      );
  g && n(c, t, i);
}
function yy(e, t, i, n, a, r, {
  o: { nextSibling: s, parentNode: c, querySelector: d, insert: y, createText: v }
}, g) {
  function m(O, I) {
    let L = I;
    for (; L; ) {
      if (L && L.nodeType === 8) {
        if (L.data === "teleport start anchor")
          t.targetStart = L;
        else if (L.data === "teleport anchor") {
          t.targetAnchor = L, O._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      L = s(L);
    }
  }
  function k(O, I) {
    I.anchor = g(
      s(O),
      I,
      c(O),
      i,
      n,
      a,
      r
    );
  }
  const T = t.target = Mc(
    t.props,
    d
  ), C = Wa(t.props);
  if (T) {
    const O = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (C ? (k(e, t), m(T, O), t.targetAnchor || Uc(
      T,
      t,
      v,
      y,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === T ? e : null
    )) : (t.anchor = s(e), m(T, O), t.targetAnchor || Uc(T, t, v, y), g(
      O && s(O),
      t,
      T,
      i,
      n,
      a,
      r
    ))), bl(t, C);
  } else C && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ed = my;
function bl(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function Uc(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), s = t.targetAnchor = i("");
  return r[pv] = s, e && (n(r, e, a), n(s, e, a)), s;
}
const Li = /* @__PURE__ */ Symbol("_leaveCb"), ll = /* @__PURE__ */ Symbol("_enterCb");
function _y() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), Ti(() => {
    e.isUnmounting = !0;
  }), e;
}
const xi = [Function, Array], vv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: xi,
  onEnter: xi,
  onAfterEnter: xi,
  onEnterCancelled: xi,
  // leave
  onBeforeLeave: xi,
  onLeave: xi,
  onAfterLeave: xi,
  onLeaveCancelled: xi,
  // appear
  onBeforeAppear: xi,
  onAppear: xi,
  onAfterAppear: xi,
  onAppearCancelled: xi
}, bv = (e) => {
  const t = e.subTree;
  return t.component ? bv(t.component) : t;
}, wy = {
  name: "BaseTransition",
  props: vv,
  setup(e, { slots: t }) {
    const i = Sa(), n = _y();
    return () => {
      const a = t.default && yv(t.default(), !0), r = a && a.length ? gv(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? E() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ rt(e), { mode: c } = s;
      if (n.isLeaving)
        return Xu(r);
      const d = io(r);
      if (!d)
        return Xu(r);
      let y = zc(
        d,
        s,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (g) => y = g
      );
      d.type !== jt && Bl(d, y);
      let v = i.subTree && io(i.subTree);
      if (v && v.type !== jt && !Ya(v, d) && bv(i).type !== jt) {
        let g = zc(
          v,
          s,
          n,
          i
        );
        if (Bl(v, g), c === "out-in" && d.type !== jt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete g.afterLeave, v = void 0;
          }, Xu(r);
        c === "in-out" && d.type !== jt ? g.delayLeave = (m, k, T) => {
          const C = mv(
            n,
            v
          );
          C[String(v.key)] = v, m[Li] = () => {
            k(), m[Li] = void 0, delete y.delayedLeave, v = void 0;
          }, y.delayedLeave = () => {
            T(), delete y.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function gv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== jt) {
        t = i;
        break;
      }
  }
  return t;
}
const ky = wy;
function mv(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function zc(e, t, i, n, a) {
  const {
    appear: r,
    mode: s,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: y,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: m,
    onLeave: k,
    onAfterLeave: T,
    onLeaveCancelled: C,
    onBeforeAppear: O,
    onAppear: I,
    onAfterAppear: L,
    onAppearCancelled: D
  } = t, R = String(e.key), pe = mv(i, e), Q = (K, Y) => {
    K && Mi(
      K,
      n,
      9,
      Y
    );
  }, $ = (K, Y) => {
    const ne = Y[1];
    Q(K, Y), Ie(K) ? K.every((B) => B.length <= 1) && ne() : K.length <= 1 && ne();
  }, q = {
    mode: s,
    persisted: c,
    beforeEnter(K) {
      let Y = d;
      if (!i.isMounted)
        if (r)
          Y = O || d;
        else
          return;
      K[Li] && K[Li](
        !0
        /* cancelled */
      );
      const ne = pe[R];
      ne && Ya(e, ne) && ne.el[Li] && ne.el[Li](), Q(Y, [K]);
    },
    enter(K) {
      if (pe[R] === e) return;
      let Y = y, ne = v, B = g;
      if (!i.isMounted)
        if (r)
          Y = I || y, ne = L || v, B = D || g;
        else
          return;
      let z = !1;
      K[ll] = (P) => {
        z || (z = !0, P ? Q(B, [K]) : Q(ne, [K]), q.delayedLeave && q.delayedLeave(), K[ll] = void 0);
      };
      const x = K[ll].bind(null, !1);
      Y ? $(Y, [K, x]) : x();
    },
    leave(K, Y) {
      const ne = String(e.key);
      if (K[ll] && K[ll](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return Y();
      Q(m, [K]);
      let B = !1;
      K[Li] = (x) => {
        B || (B = !0, Y(), x ? Q(C, [K]) : Q(T, [K]), K[Li] = void 0, pe[ne] === e && delete pe[ne]);
      };
      const z = K[Li].bind(null, !1);
      pe[ne] = e, k ? $(k, [K, z]) : z();
    },
    clone(K) {
      const Y = zc(
        K,
        t,
        i,
        n,
        a
      );
      return a && a(Y), Y;
    }
  };
  return q;
}
function Xu(e) {
  if (fu(e))
    return e = wa(e), e.children = null, e;
}
function io(e) {
  if (!fu(e))
    return du(e.type) && e.children ? gv(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && Ue(i.default))
      return i.default();
  }
}
function Bl(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    Bl(
      du(i.type) && io(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yv(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const c = i == null ? s.key : String(i) + String(s.key != null ? s.key : r);
    s.type === W ? (s.patchFlag & 128 && a++, n = n.concat(
      yv(s.children, t, c)
    )) : (t || s.type !== jt) && n.push(c != null ? wa(s, { key: c }) : s);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Vt(e, t) {
  return Ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $t({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sy() {
  const e = Sa();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _v(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cy(e) {
  const t = Sa(), i = /* @__PURE__ */ rv(null);
  if (t) {
    const a = t.refs === tt ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    });
  }
  return i;
}
function Kf(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const no = /* @__PURE__ */ new WeakMap();
function Tl(e, t, i, n, a = !1) {
  if (Ie(e)) {
    e.forEach(
      (C, O) => Tl(
        C,
        t && (Ie(t) ? t[O] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (Er(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Tl(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? vu(n.component) : n.el, s = a ? null : r, { i: c, r: d } = e, y = t && t.r, v = c.refs === tt ? c.refs = {} : c.refs, g = c.setupState, m = /* @__PURE__ */ rt(g), k = g === tt ? Fp : (C) => Kf(v, C) ? !1 : lt(m, C), T = (C, O) => !(O && Kf(v, O));
  if (y != null && y !== d) {
    if (Wf(t), vt(y))
      v[y] = null, k(y) && (g[y] = null);
    else if (/* @__PURE__ */ Qt(y)) {
      const C = t;
      T(y, C.k) && (y.value = null), C.k && (v[C.k] = null);
    }
  }
  if (Ue(d))
    rs(d, c, 12, [s, v]);
  else {
    const C = vt(d), O = /* @__PURE__ */ Qt(d);
    if (C || O) {
      const I = () => {
        if (e.f) {
          const L = C ? k(d) ? g[d] : v[d] : T() || !e.k ? d.value : v[e.k];
          if (a)
            Ie(L) && gd(L, r);
          else if (Ie(L))
            L.includes(r) || L.push(r);
          else if (C)
            v[d] = [r], k(d) && (g[d] = v[d]);
          else {
            const D = [r];
            T(d, e.k) && (d.value = D), e.k && (v[e.k] = D);
          }
        } else C ? (v[d] = s, k(d) && (g[d] = s)) : O && (T(d, e.k) && (d.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const L = () => {
          I(), no.delete(e);
        };
        L.id = -1, no.set(e, L), oi(L, i);
      } else
        Wf(e), I();
    }
  }
}
function Wf(e) {
  const t = no.get(e);
  t && (t.flags |= 8, no.delete(e));
}
ru().requestIdleCallback;
ru().cancelIdleCallback;
const Er = (e) => !!e.type.__asyncLoader, fu = (e) => e.type.__isKeepAlive;
function Ty(e, t) {
  wv(e, "a", t);
}
function Ay(e, t) {
  wv(e, "da", t);
}
function wv(e, t, i = Xt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (hu(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      fu(a.parent.vnode) && Ey(n, t, i, a), a = a.parent;
  }
}
function Ey(e, t, i, n) {
  const a = hu(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ls(() => {
    gd(n[t], a);
  }, i);
}
function hu(e, t, i = Xt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...s) => {
      zn();
      const c = os(i), d = Mi(t, i, e, s);
      return c(), jn(), d;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const Gn = (e) => (t, i = Xt) => {
  (!Kl || e === "sp") && hu(e, (...n) => t(...n), i);
}, kv = Gn("bm"), xt = Gn("m"), Sv = Gn(
  "bu"
), $y = Gn("u"), Ti = Gn(
  "bum"
), ls = Gn("um"), xy = Gn(
  "sp"
), Oy = Gn("rtg"), Ny = Gn("rtc");
function Ry(e, t = Xt) {
  hu("ec", e, t);
}
const $d = "components", Iy = "directives";
function Ze(e, t) {
  return Od($d, e, !0, t) || e;
}
const Cv = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return vt(e) ? Od($d, e, !1) || e : e || Cv;
}
function Yf(e) {
  return Od(Iy, e);
}
function Od(e, t, i = !0, n = !1) {
  const a = Bt || Xt;
  if (a) {
    const r = a.type;
    if (e === $d) {
      const c = v1(
        r,
        !1
      );
      if (c && (c === t || c === Jt(t) || c === nu(Jt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zf(a[e] || r[e], t) || // global registration
      Zf(a.appContext[e], t)
    );
    return !s && n ? r : s;
  }
}
function Zf(e, t) {
  return e && (e[t] || e[Jt(t)] || e[nu(Jt(t))]);
}
function ue(e, t, i, n) {
  let a;
  const r = i, s = Ie(e);
  if (s || vt(e)) {
    const c = s && /* @__PURE__ */ er(e);
    let d = !1, y = !1;
    c && (d = !/* @__PURE__ */ Fi(e), y = /* @__PURE__ */ Bn(e), e = su(e)), a = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      a[v] = t(
        d ? y ? Rr(Wi(e[v])) : Wi(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let c = 0; c < e; c++)
      a[c] = t(c + 1, c, void 0, r);
  } else if (st(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (c, d) => t(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      a = new Array(c.length);
      for (let d = 0, y = c.length; d < y; d++) {
        const v = c[d];
        a[d] = t(e[v], v, d, r);
      }
    }
  else
    a = [];
  return a;
}
function Be(e, t, i, n, a, r) {
  if (i == null && (i = {}), Bt.ce || Bt.parent && Er(Bt.parent) && Bt.parent.ce) {
    const y = i, v = Object.keys(y).length > 0;
    return t !== "default" && (y.name = t), h(), Pe(
      W,
      null,
      [ce("slot", y, n && n())],
      v ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const c = Dn.length;
  h();
  let d;
  try {
    const y = s && Tv(s(i)), v = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    y && y.key;
    d = Pe(
      W,
      {
        key: (v && !Ki(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!y && n ? "_fb" : "")
      },
      y || (n ? n() : []),
      y && e._ === 1 ? 64 : -2
    );
  } catch (y) {
    for (let v = Dn.length; v > c; v--) Ld();
    throw y;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Tv(e) {
  return e.some((t) => Vl(t) ? !(t.type === jt || t.type === W && !Tv(t.children)) : !0) ? e : null;
}
const jc = (e) => e ? Kv(e) ? vu(e) : jc(e.parent) : null, Al = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ $t(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => jc(e.parent),
    $root: (e) => jc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $v(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ad(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => by.bind(e)
  })
), Ju = (e, t) => e !== tt && !e.__isScriptSetup && lt(e, t), Ly = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: s, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return n[t];
          case 2:
            return a[t];
          case 4:
            return i[t];
          case 3:
            return r[t];
        }
      else {
        if (Ju(n, t))
          return s[t] = 1, n[t];
        if (a !== tt && lt(a, t))
          return s[t] = 2, a[t];
        if (lt(r, t))
          return s[t] = 3, r[t];
        if (i !== tt && lt(i, t))
          return s[t] = 4, i[t];
        Bc && (s[t] = 0);
      }
    }
    const y = Al[t];
    let v, g;
    if (y)
      return t === "$attrs" && Yt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (i !== tt && lt(i, t))
      return s[t] = 4, i[t];
    if (
      // global properties
      g = d.config.globalProperties, lt(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return Ju(a, t) ? (a[t] = i, !0) : n !== tt && lt(n, t) ? (n[t] = i, !0) : lt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: s }
  }, c) {
    let d;
    return !!(i[c] || e !== tt && c[0] !== "$" && lt(e, c) || Ju(t, c) || lt(r, c) || lt(n, c) || lt(Al, c) || lt(a.config.globalProperties, c) || (d = s.__cssModules) && d[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : lt(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Py() {
  return Av().slots;
}
function Dy() {
  return Av().attrs;
}
function Av(e) {
  const t = Sa();
  return t.setupContext || (t.setupContext = Yv(t));
}
function ao(e) {
  return Ie(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Fy(e, t) {
  return !e || !t ? e || t : Ie(e) && Ie(t) ? e.concat(t) : $t({}, ao(e), ao(t));
}
let Bc = !0;
function My(e) {
  const t = $v(e), i = e.proxy, n = e.ctx;
  Bc = !1, t.beforeCreate && Xf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: c,
    provide: d,
    inject: y,
    // lifecycle
    created: v,
    beforeMount: g,
    mounted: m,
    beforeUpdate: k,
    updated: T,
    activated: C,
    deactivated: O,
    beforeDestroy: I,
    beforeUnmount: L,
    destroyed: D,
    unmounted: R,
    render: pe,
    renderTracked: Q,
    renderTriggered: $,
    errorCaptured: q,
    serverPrefetch: K,
    // public API
    expose: Y,
    inheritAttrs: ne,
    // assets
    components: B,
    directives: z,
    filters: x
  } = t;
  if (y && Uy(y, n, null), s)
    for (const ae in s) {
      const X = s[ae];
      Ue(X) && (n[ae] = X.bind(i));
    }
  if (a) {
    const ae = a.call(i, i);
    st(ae) && (e.data = /* @__PURE__ */ Nt(ae));
  }
  if (Bc = !0, r)
    for (const ae in r) {
      const X = r[ae], ve = Ue(X) ? X.bind(i, i) : Ue(X.get) ? X.get.bind(i, i) : Di, Ce = !Ue(X) && Ue(X.set) ? X.set.bind(i) : Di, Le = H({
        get: ve,
        set: Ce
      });
      Object.defineProperty(n, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Oe) => Le.value = Oe
      });
    }
  if (c)
    for (const ae in c)
      Ev(c[ae], n, i, ae);
  if (d) {
    const ae = Ue(d) ? d.call(i) : d;
    Reflect.ownKeys(ae).forEach((X) => {
      Ii(X, ae[X]);
    });
  }
  v && Xf(v, e, "c");
  function Z(ae, X) {
    Ie(X) ? X.forEach((ve) => ae(ve.bind(i))) : X && ae(X.bind(i));
  }
  if (Z(kv, g), Z(xt, m), Z(Sv, k), Z($y, T), Z(Ty, C), Z(Ay, O), Z(Ry, q), Z(Ny, Q), Z(Oy, $), Z(Ti, L), Z(ls, R), Z(xy, K), Ie(Y))
    if (Y.length) {
      const ae = e.exposed || (e.exposed = {});
      Y.forEach((X) => {
        Object.defineProperty(ae, X, {
          get: () => i[X],
          set: (ve) => i[X] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  pe && e.render === Di && (e.render = pe), ne != null && (e.inheritAttrs = ne), B && (e.components = B), z && (e.directives = z), K && _v(e);
}
function Uy(e, t, i = Di) {
  Ie(e) && (e = Hc(e));
  for (const n in e) {
    const a = e[n];
    let r;
    st(a) ? "default" in a ? r = Zt(
      a.from || n,
      a.default,
      !0
    ) : r = Zt(a.from || n) : r = Zt(a), /* @__PURE__ */ Qt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[n] = r;
  }
}
function Xf(e, t, i) {
  Mi(
    Ie(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function Ev(e, t, i, n) {
  let a = n.includes(".") ? hv(i, n) : () => i[n];
  if (vt(e)) {
    const r = t[e];
    Ue(r) && qe(a, r);
  } else if (Ue(e))
    qe(a, e.bind(i));
  else if (st(e))
    if (Ie(e))
      e.forEach((r) => Ev(r, t, i, n));
    else {
      const r = Ue(e.handler) ? e.handler.bind(i) : t[e.handler];
      Ue(r) && qe(a, r, e);
    }
}
function $v(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !a.length && !i && !n ? d = t : (d = {}, a.length && a.forEach(
    (y) => ro(d, y, s, !0)
  ), ro(d, t, s)), st(t) && r.set(t, d), d;
}
function ro(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && ro(e, r, i, !0), a && a.forEach(
    (s) => ro(e, s, i, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const c = zy[s] || i && i[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const zy = {
  data: Jf,
  props: Qf,
  emits: Qf,
  // objects
  methods: gl,
  computed: gl,
  // lifecycle
  beforeCreate: si,
  created: si,
  beforeMount: si,
  mounted: si,
  beforeUpdate: si,
  updated: si,
  beforeDestroy: si,
  beforeUnmount: si,
  destroyed: si,
  unmounted: si,
  activated: si,
  deactivated: si,
  errorCaptured: si,
  serverPrefetch: si,
  // assets
  components: gl,
  directives: gl,
  // watch
  watch: By,
  // provide / inject
  provide: Jf,
  inject: jy
};
function Jf(e, t) {
  return t ? e ? function() {
    return $t(
      Ue(e) ? e.call(this, this) : e,
      Ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jy(e, t) {
  return gl(Hc(e), Hc(t));
}
function Hc(e) {
  if (Ie(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function si(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gl(e, t) {
  return e ? $t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qf(e, t) {
  return e ? Ie(e) && Ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $t(
    /* @__PURE__ */ Object.create(null),
    ao(e),
    ao(t ?? {})
  ) : t;
}
function By(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = $t(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = si(e[n], t[n]);
  return i;
}
function xv() {
  return {
    app: null,
    config: {
      isNativeTag: Fp,
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
let Hy = 0;
function Vy(e, t) {
  return function(n, a = null) {
    Ue(n) || (n = $t({}, n)), a != null && !st(a) && (a = null);
    const r = xv(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const y = r.app = {
      _uid: Hy++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: g1,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return s.has(v) || (v && Ue(v.install) ? (s.add(v), v.install(y, ...g)) : Ue(v) && (s.add(v), v(y, ...g))), y;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), y;
      },
      component(v, g) {
        return g ? (r.components[v] = g, y) : r.components[v];
      },
      directive(v, g) {
        return g ? (r.directives[v] = g, y) : r.directives[v];
      },
      mount(v, g, m) {
        if (!d) {
          const k = y._ceVNode || ce(n, a);
          return k.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(k, v, m), d = !0, y._container = v, v.__vue_app__ = y, vu(k.component);
        }
      },
      onUnmount(v) {
        c.push(v);
      },
      unmount() {
        d && (Mi(
          c,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(v, g) {
        return r.provides[v] = g, y;
      },
      runWithContext(v) {
        const g = $r;
        $r = y;
        try {
          return v();
        } finally {
          $r = g;
        }
      }
    };
    return y;
  };
}
let $r = null;
function Ov(e, t, i = tt) {
  const n = Sa(), a = Jt(t), r = qn(t), s = Nv(e, a), c = iy((d, y) => {
    let v, g = tt, m;
    return vy(() => {
      const k = e[a];
      zt(v, k) && (v = k, y());
    }), {
      get() {
        return d(), i.get ? i.get(v) : v;
      },
      set(k) {
        const T = i.set ? i.set(k) : k;
        if (!zt(T, v) && !(g !== tt && zt(k, g)))
          return;
        const C = n.vnode.props, O = !!(C && // check if parent has passed v-model
        (t in C || a in C || r in C) && (`onUpdate:${t}` in C || `onUpdate:${a}` in C || `onUpdate:${r}` in C));
        O || (v = k, y()), n.emit(`update:${t}`, T), zt(k, g) && (zt(k, T) && !zt(T, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && g !== tt && !zt(T, v)) && y(), g = k, m = T;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let d = 0;
    return {
      next() {
        return d < 2 ? { value: d++ ? s || tt : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Nv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Jt(t)}Modifiers`] || e[`${qn(t)}Modifiers`];
function qy(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || tt;
  let a = i;
  const r = t.startsWith("update:"), s = r && Nv(n, t.slice(7));
  s && (s.trim && (a = i.map((v) => vt(v) ? v.trim() : v)), s.number && (a = a.map(au)));
  let c, d = n[c = Gu(t)] || // also try camelCase event handler (#2249)
  n[c = Gu(Jt(t))];
  !d && r && (d = n[c = Gu(qn(t))]), d && Mi(
    d,
    e,
    6,
    a
  );
  const y = n[c + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Mi(
      y,
      e,
      6,
      a
    );
  }
}
const Gy = /* @__PURE__ */ new WeakMap();
function Rv(e, t, i = !1) {
  const n = i ? Gy : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, c = !1;
  if (!Ue(e)) {
    const d = (y) => {
      const v = Rv(y, t, !0);
      v && (c = !0, $t(s, v));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (st(e) && n.set(e, null), null) : (Ie(r) ? r.forEach((d) => s[d] = null) : $t(s, r), st(e) && n.set(e, s), s);
}
function pu(e, t) {
  return !e || !eu(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), lt(e, t[0].toLowerCase() + t.slice(1)) || lt(e, qn(t)) || lt(e, t));
}
function eh(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: d,
    render: y,
    renderCache: v,
    props: g,
    data: m,
    setupState: k,
    ctx: T,
    inheritAttrs: C
  } = e, O = to(e);
  let I, L;
  try {
    if (i.shapeFlag & 4) {
      const R = a || n, pe = R;
      I = ln(
        y.call(
          pe,
          R,
          v,
          g,
          k,
          m,
          T
        )
      ), L = c;
    } else {
      const R = t;
      I = ln(
        R.length > 1 ? R(
          g,
          { attrs: c, slots: s, emit: d }
        ) : R(
          g,
          null
        )
      ), L = t.props ? c : Ky(c);
    }
  } catch (R) {
    Dn.length = 0, ou(R, e, 1), I = ce(jt);
  }
  let D = I;
  if (L && C !== !1) {
    const R = Object.keys(L), { shapeFlag: pe } = D;
    R.length && pe & 7 && (r && R.some(tu) && (L = Wy(
      L,
      r
    )), D = wa(D, L, !1, !0));
  }
  if (i.dirs && (D = wa(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const R = du(D.type) && io(D) || D;
    Bl(R, i.transition);
  }
  return I = D, to(O), I;
}
const Ky = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || eu(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Wy = (e, t) => {
  const i = {};
  for (const n in e)
    (!tu(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Yy(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: s, children: c, patchFlag: d } = t, y = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? th(n, s, y) : !!s;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const m = v[g];
        if (Iv(s, n, m) && !pu(y, m))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : n === s ? !1 : n ? s ? th(n, s, y) : !0 : !!s;
  return !1;
}
function th(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Iv(t, e, r) && !pu(i, r))
      return !0;
  }
  return !1;
}
function Iv(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && st(n) && st(a) ? !Un(n, a) : n !== a;
}
function Zy({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const Lv = {}, Pv = () => Object.create(Lv), Dv = (e) => Object.getPrototypeOf(e) === Lv;
function Xy(e, t, i, n = !1) {
  const a = {}, r = Pv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fv(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Xm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Jy(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = /* @__PURE__ */ rt(a), [d] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let m = v[g];
        if (pu(e.emitsOptions, m))
          continue;
        const k = t[m];
        if (d)
          if (lt(r, m))
            k !== r[m] && (r[m] = k, y = !0);
          else {
            const T = Jt(m);
            a[T] = Vc(
              d,
              c,
              T,
              k,
              e,
              !1
            );
          }
        else
          k !== r[m] && (r[m] = k, y = !0);
      }
    }
  } else {
    Fv(e, t, a, r) && (y = !0);
    let v;
    for (const g in c)
      (!t || // for camelCase
      !lt(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = qn(g)) === g || !lt(t, v))) && (d ? i && // for camelCase
      (i[g] !== void 0 || // for kebab-case
      i[v] !== void 0) && (a[g] = Vc(
        d,
        c,
        g,
        void 0,
        e,
        !0
      )) : delete a[g]);
    if (r !== c)
      for (const g in r)
        (!t || !lt(t, g)) && (delete r[g], y = !0);
  }
  y && Nn(e.attrs, "set", "");
}
function Fv(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let d in t) {
      if (kl(d))
        continue;
      const y = t[d];
      let v;
      a && lt(a, v = Jt(d)) ? !r || !r.includes(v) ? i[v] = y : (c || (c = {}))[v] = y : pu(e.emitsOptions, d) || (!(d in n) || y !== n[d]) && (n[d] = y, s = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ rt(i), y = c || tt;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      i[g] = Vc(
        a,
        d,
        g,
        y[g],
        e,
        !lt(y, g)
      );
    }
  }
  return s;
}
function Vc(e, t, i, n, a, r) {
  const s = e[i];
  if (s != null) {
    const c = lt(s, "default");
    if (c && n === void 0) {
      const d = s.default;
      if (s.type !== Function && !s.skipFactory && Ue(d)) {
        const { propsDefaults: y } = a;
        if (i in y)
          n = y[i];
        else {
          const v = os(a);
          n = y[i] = d.call(
            null,
            t
          ), v();
        }
      } else
        n = d;
      a.ce && a.ce._setProp(i, n);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === qn(i)) && (n = !0));
  }
  return n;
}
const Qy = /* @__PURE__ */ new WeakMap();
function Mv(e, t, i = !1) {
  const n = i ? Qy : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, c = [];
  let d = !1;
  if (!Ue(e)) {
    const v = (g) => {
      d = !0;
      const [m, k] = Mv(g, t, !0);
      $t(s, m), k && c.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return st(e) && n.set(e, Tr), Tr;
  if (Ie(r))
    for (let v = 0; v < r.length; v++) {
      const g = Jt(r[v]);
      ih(g) && (s[g] = tt);
    }
  else if (r)
    for (const v in r) {
      const g = Jt(v);
      if (ih(g)) {
        const m = r[v], k = s[g] = Ie(m) || Ue(m) ? { type: m } : $t({}, m), T = k.type;
        let C = !1, O = !0;
        if (Ie(T))
          for (let I = 0; I < T.length; ++I) {
            const L = T[I], D = Ue(L) && L.name;
            if (D === "Boolean") {
              C = !0;
              break;
            } else D === "String" && (O = !1);
          }
        else
          C = Ue(T) && T.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = O, (C || lt(k, "default")) && c.push(g);
      }
    }
  const y = [s, c];
  return st(e) && n.set(e, y), y;
}
function ih(e) {
  return e[0] !== "$" && !kl(e);
}
const Nd = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Ie(e) ? e.map(ln) : [ln(e)], e1 = (e, t, i) => {
  if (t._n)
    return t;
  const n = we((...a) => Rd(t(...a)), i);
  return n._c = !1, n;
}, Uv = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Nd(a)) continue;
    const r = e[a];
    if (Ue(r))
      t[a] = e1(a, r, n);
    else if (r != null) {
      const s = Rd(r);
      t[a] = () => s;
    }
  }
}, zv = (e, t) => {
  const i = Rd(t);
  e.slots.default = () => i;
}, jv = (e, t, i) => {
  for (const n in t)
    (i || !Nd(n)) && (e[n] = t[n]);
}, t1 = (e, t, i) => {
  const n = e.slots = Pv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (jv(n, t, i), i && jp(n, "_", a, !0)) : Uv(t, n);
  } else t && zv(e, t);
}, i1 = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, s = tt;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : jv(a, t, i) : (r = !t.$stable, Uv(t, a)), s = t;
  } else t && (zv(e, t), s = { default: 1 });
  if (r)
    for (const c in a)
      !Nd(c) && s[c] == null && delete a[c];
}, oi = s1;
function n1(e) {
  return a1(e);
}
function a1(e, t) {
  const i = ru();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: d,
    setText: y,
    setElementText: v,
    parentNode: g,
    nextSibling: m,
    setScopeId: k = Di,
    insertStaticContent: T
  } = e, C = (S, N, F, V = null, j = null, J = null, te = void 0, le = null, he = !!N.dynamicChildren) => {
    if (S === N)
      return;
    S && !Ya(S, N) && (V = Re(S), Oe(S, j, J, !0), S = null), N.patchFlag === -2 && (he = !1, N.dynamicChildren = null);
    const { type: se, ref: $e, shapeFlag: _e } = N;
    switch (se) {
      case ss:
        O(S, N, F, V);
        break;
      case jt:
        I(S, N, F, V);
        break;
      case Ws:
        S == null && L(N, F, V, te);
        break;
      case W:
        B(
          S,
          N,
          F,
          V,
          j,
          J,
          te,
          le,
          he
        );
        break;
      default:
        _e & 1 ? pe(
          S,
          N,
          F,
          V,
          j,
          J,
          te,
          le,
          he
        ) : _e & 6 ? z(
          S,
          N,
          F,
          V,
          j,
          J,
          te,
          le,
          he
        ) : (_e & 64 || _e & 128) && se.process(
          S,
          N,
          F,
          V,
          j,
          J,
          te,
          le,
          he,
          ut
        );
    }
    $e != null && j ? Tl($e, S && S.ref, J, N || S, !N) : $e == null && S && S.ref != null && Tl(S.ref, null, J, S, !0);
  }, O = (S, N, F, V) => {
    if (S == null)
      n(
        N.el = c(N.children),
        F,
        V
      );
    else {
      const j = N.el = S.el;
      N.children !== S.children && y(j, N.children);
    }
  }, I = (S, N, F, V) => {
    S == null ? n(
      N.el = d(N.children || ""),
      F,
      V
    ) : N.el = S.el;
  }, L = (S, N, F, V) => {
    [S.el, S.anchor] = T(
      S.children,
      N,
      F,
      V,
      S.el,
      S.anchor
    );
  }, D = ({ el: S, anchor: N }, F, V) => {
    let j;
    for (; S && S !== N; )
      j = m(S), n(S, F, V), S = j;
    n(N, F, V);
  }, R = ({ el: S, anchor: N }) => {
    let F;
    for (; S && S !== N; )
      F = m(S), a(S), S = F;
    a(N);
  }, pe = (S, N, F, V, j, J, te, le, he) => {
    if (N.type === "svg" ? te = "svg" : N.type === "math" && (te = "mathml"), S == null)
      Q(
        N,
        F,
        V,
        j,
        J,
        te,
        le,
        he
      );
    else {
      const se = S.el && S.el._isVueCE ? S.el : null;
      try {
        se && se._beginPatch(), K(
          S,
          N,
          j,
          J,
          te,
          le,
          he
        );
      } finally {
        se && se._endPatch();
      }
    }
  }, Q = (S, N, F, V, j, J, te, le) => {
    let he, se;
    const { props: $e, shapeFlag: _e, transition: Te, dirs: xe } = S;
    if (he = S.el = s(
      S.type,
      J,
      $e && $e.is,
      $e
    ), _e & 8 ? v(he, S.children) : _e & 16 && q(
      S.children,
      he,
      null,
      V,
      j,
      Qu(S, J),
      te,
      le
    ), xe && za(S, null, V, "created"), $(he, S, S.scopeId, te, V), $e) {
      for (const Ye in $e)
        Ye !== "value" && !kl(Ye) && r(he, Ye, null, $e[Ye], J, V);
      "value" in $e && r(he, "value", null, $e.value, J), (se = $e.onVnodeBeforeMount) && en(se, V, S);
    }
    xe && za(S, null, V, "beforeMount");
    const He = r1(j, Te);
    He && Te.beforeEnter(he), n(he, N, F), ((se = $e && $e.onVnodeMounted) || He || xe) && oi(() => {
      se && en(se, V, S), He && Te.enter(he), xe && za(S, null, V, "mounted");
    }, j);
  }, $ = (S, N, F, V, j) => {
    if (F && k(S, F), V)
      for (let J = 0; J < V.length; J++)
        k(S, V[J]);
    if (j) {
      let J = j.subTree;
      if (N === J || Vv(J.type) && (J.ssContent === N || J.ssFallback === N)) {
        const te = j.vnode;
        $(
          S,
          te,
          te.scopeId,
          te.slotScopeIds,
          j.parent
        );
      }
    }
  }, q = (S, N, F, V, j, J, te, le, he = 0) => {
    for (let se = he; se < S.length; se++) {
      const $e = S[se] = le ? On(S[se]) : ln(S[se]);
      C(
        null,
        $e,
        N,
        F,
        V,
        j,
        J,
        te,
        le
      );
    }
  }, K = (S, N, F, V, j, J, te) => {
    const le = N.el = S.el;
    let { patchFlag: he, dynamicChildren: se, dirs: $e } = N;
    he |= S.patchFlag & 16;
    const _e = S.props || tt, Te = N.props || tt;
    let xe;
    if (F && ja(F, !1), (xe = Te.onVnodeBeforeUpdate) && en(xe, F, N, S), $e && za(N, S, F, "beforeUpdate"), F && ja(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    se && (!S.dynamicChildren || S.dynamicChildren.length !== se.length) && (he = 0, te = !1, se = null), (_e.innerHTML && Te.innerHTML == null || _e.textContent && Te.textContent == null) && v(le, ""), se ? Y(
      S.dynamicChildren,
      se,
      le,
      F,
      V,
      Qu(N, j),
      J
    ) : te || X(
      S,
      N,
      le,
      null,
      F,
      V,
      Qu(N, j),
      J,
      !1
    ), he > 0) {
      if (he & 16)
        ne(le, _e, Te, F, j);
      else if (he & 2 && _e.class !== Te.class && r(le, "class", null, Te.class, j), he & 4 && r(le, "style", _e.style, Te.style, j), he & 8) {
        const He = N.dynamicProps;
        for (let Ye = 0; Ye < He.length; Ye++) {
          const Ve = He[Ye], it = _e[Ve], ct = Te[Ve];
          (ct !== it || Ve === "value") && r(le, Ve, it, ct, j, F);
        }
      }
      he & 1 && S.children !== N.children && v(le, N.children);
    } else !te && se == null && ne(le, _e, Te, F, j);
    ((xe = Te.onVnodeUpdated) || $e) && oi(() => {
      xe && en(xe, F, N, S), $e && za(N, S, F, "updated");
    }, V);
  }, Y = (S, N, F, V, j, J, te) => {
    for (let le = 0; le < N.length; le++) {
      const he = S[le], se = N[le], $e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        he.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (he.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ya(he, se) || // - In the case of a component, it could contain anything.
        he.shapeFlag & 198) ? g(he.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      C(
        he,
        se,
        $e,
        null,
        V,
        j,
        J,
        te,
        !0
      );
    }
  }, ne = (S, N, F, V, j) => {
    if (N !== F) {
      if (N !== tt)
        for (const J in N)
          !kl(J) && !(J in F) && r(
            S,
            J,
            N[J],
            null,
            j,
            V
          );
      for (const J in F) {
        if (kl(J)) continue;
        const te = F[J], le = N[J];
        te !== le && J !== "value" && r(S, J, le, te, j, V);
      }
      "value" in F && r(S, "value", N.value, F.value, j);
    }
  }, B = (S, N, F, V, j, J, te, le, he) => {
    const se = N.el = S ? S.el : c(""), $e = N.anchor = S ? S.anchor : c("");
    let { patchFlag: _e, dynamicChildren: Te, slotScopeIds: xe } = N;
    xe && (le = le ? le.concat(xe) : xe), S == null ? (n(se, F, V), n($e, F, V), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      N.children || [],
      F,
      $e,
      j,
      J,
      te,
      le,
      he
    )) : _e > 0 && _e & 64 && Te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === Te.length ? (Y(
      S.dynamicChildren,
      Te,
      F,
      j,
      J,
      te,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (N.key != null || j && N === j.subTree) && Id(
      S,
      N,
      !0
      /* shallow */
    )) : X(
      S,
      N,
      F,
      $e,
      j,
      J,
      te,
      le,
      he
    );
  }, z = (S, N, F, V, j, J, te, le, he) => {
    N.slotScopeIds = le, S == null ? N.shapeFlag & 512 ? j.ctx.activate(
      N,
      F,
      V,
      te,
      he
    ) : x(
      N,
      F,
      V,
      j,
      J,
      te,
      he
    ) : P(S, N, he);
  }, x = (S, N, F, V, j, J, te) => {
    const le = S.component = d1(
      S,
      V,
      j
    );
    if (fu(S) && (le.ctx.renderer = ut), f1(le, !1, te), le.asyncDep) {
      if (j && j.registerDep(le, Z, te), !S.el) {
        const he = le.subTree = ce(jt);
        I(null, he, N, F), S.placeholder = he.el;
      }
    } else
      Z(
        le,
        S,
        N,
        F,
        j,
        J,
        te
      );
  }, P = (S, N, F) => {
    const V = N.component = S.component;
    if (Yy(S, N, F))
      if (V.asyncDep && !V.asyncResolved) {
        ae(V, N, F);
        return;
      } else
        V.next = N, V.update();
    else
      N.el = S.el, V.vnode = N;
  }, Z = (S, N, F, V, j, J, te) => {
    const le = () => {
      if (S.isMounted) {
        let { next: _e, bu: Te, u: xe, parent: He, vnode: Ye } = S;
        {
          const bt = Bv(S);
          if (bt) {
            _e && (_e.el = Ye.el, ae(S, _e, te)), bt.asyncDep.then(() => {
              oi(() => {
                S.isUnmounted || se();
              }, j);
            });
            return;
          }
        }
        let Ve = _e, it;
        ja(S, !1), _e ? (_e.el = Ye.el, ae(S, _e, te)) : _e = Ye, Te && Ks(Te), (it = _e.props && _e.props.onVnodeBeforeUpdate) && en(it, He, _e, Ye), ja(S, !0);
        const ct = eh(S), _t = S.subTree;
        S.subTree = ct, C(
          _t,
          ct,
          // parent may have changed if it's in a teleport
          g(_t.el),
          // anchor may have changed if it's in a fragment
          Re(_t),
          S,
          j,
          J
        ), _e.el = ct.el, Ve === null && Zy(S, ct.el), xe && oi(xe, j), (it = _e.props && _e.props.onVnodeUpdated) && oi(
          () => en(it, He, _e, Ye),
          j
        );
      } else {
        let _e;
        const { el: Te, props: xe } = N, { bm: He, m: Ye, parent: Ve, root: it, type: ct } = S, _t = Er(N);
        ja(S, !1), He && Ks(He), !_t && (_e = xe && xe.onVnodeBeforeMount) && en(_e, Ve, N), ja(S, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            ct,
            S.parent ? S.parent.type : void 0
          );
          const bt = S.subTree = eh(S);
          C(
            null,
            bt,
            F,
            V,
            S,
            j,
            J
          ), N.el = bt.el;
        }
        if (Ye && oi(Ye, j), !_t && (_e = xe && xe.onVnodeMounted)) {
          const bt = N;
          oi(
            () => en(_e, Ve, bt),
            j
          );
        }
        (N.shapeFlag & 256 || Ve && Er(Ve.vnode) && Ve.vnode.shapeFlag & 256) && S.a && oi(S.a, j), S.isMounted = !0, N = F = V = null;
      }
    };
    S.scope.on();
    const he = S.effect = new qp(le);
    S.scope.off();
    const se = S.update = he.run.bind(he), $e = S.job = he.runIfDirty.bind(he);
    $e.i = S, $e.id = S.uid, he.scheduler = () => Ad($e), ja(S, !0), se();
  }, ae = (S, N, F) => {
    N.component = S;
    const V = S.vnode.props;
    S.vnode = N, S.next = null, Jy(S, N.props, V, F), i1(S, N.children, F), zn(), Vf(S), jn();
  }, X = (S, N, F, V, j, J, te, le, he = !1) => {
    const se = S && S.children, $e = S ? S.shapeFlag : 0, _e = N.children, { patchFlag: Te, shapeFlag: xe } = N;
    if (Te > 0) {
      if (Te & 128) {
        Ce(
          se,
          _e,
          F,
          V,
          j,
          J,
          te,
          le,
          he
        );
        return;
      } else if (Te & 256) {
        ve(
          se,
          _e,
          F,
          V,
          j,
          J,
          te,
          le,
          he
        );
        return;
      }
    }
    xe & 8 ? ($e & 16 && ye(se, j, J), _e !== se && v(F, _e)) : $e & 16 ? xe & 16 ? Ce(
      se,
      _e,
      F,
      V,
      j,
      J,
      te,
      le,
      he
    ) : ye(se, j, J, !0) : ($e & 8 && v(F, ""), xe & 16 && q(
      _e,
      F,
      V,
      j,
      J,
      te,
      le,
      he
    ));
  }, ve = (S, N, F, V, j, J, te, le, he) => {
    S = S || Tr, N = N || Tr;
    const se = S.length, $e = N.length, _e = Math.min(se, $e);
    let Te;
    for (Te = 0; Te < _e; Te++) {
      const xe = N[Te] = he ? On(N[Te]) : ln(N[Te]);
      C(
        S[Te],
        xe,
        F,
        null,
        j,
        J,
        te,
        le,
        he
      );
    }
    se > $e ? ye(
      S,
      j,
      J,
      !0,
      !1,
      _e
    ) : q(
      N,
      F,
      V,
      j,
      J,
      te,
      le,
      he,
      _e
    );
  }, Ce = (S, N, F, V, j, J, te, le, he) => {
    let se = 0;
    const $e = N.length;
    let _e = S.length - 1, Te = $e - 1;
    for (; se <= _e && se <= Te; ) {
      const xe = S[se], He = N[se] = he ? On(N[se]) : ln(N[se]);
      if (Ya(xe, He))
        C(
          xe,
          He,
          F,
          null,
          j,
          J,
          te,
          le,
          he
        );
      else
        break;
      se++;
    }
    for (; se <= _e && se <= Te; ) {
      const xe = S[_e], He = N[Te] = he ? On(N[Te]) : ln(N[Te]);
      if (Ya(xe, He))
        C(
          xe,
          He,
          F,
          null,
          j,
          J,
          te,
          le,
          he
        );
      else
        break;
      _e--, Te--;
    }
    if (se > _e) {
      if (se <= Te) {
        const xe = Te + 1, He = xe < $e ? N[xe].el : V;
        for (; se <= Te; )
          C(
            null,
            N[se] = he ? On(N[se]) : ln(N[se]),
            F,
            He,
            j,
            J,
            te,
            le,
            he
          ), se++;
      }
    } else if (se > Te)
      for (; se <= _e; )
        Oe(S[se], j, J, !0), se++;
    else {
      const xe = se, He = se, Ye = /* @__PURE__ */ new Map();
      for (se = He; se <= Te; se++) {
        const kt = N[se] = he ? On(N[se]) : ln(N[se]);
        kt.key != null && Ye.set(kt.key, se);
      }
      let Ve, it = 0;
      const ct = Te - He + 1;
      let _t = !1, bt = 0;
      const ti = new Array(ct);
      for (se = 0; se < ct; se++) ti[se] = 0;
      for (se = xe; se <= _e; se++) {
        const kt = S[se];
        if (it >= ct) {
          Oe(kt, j, J, !0);
          continue;
        }
        let Ot;
        if (kt.key != null)
          Ot = Ye.get(kt.key);
        else
          for (Ve = He; Ve <= Te; Ve++)
            if (ti[Ve - He] === 0 && Ya(kt, N[Ve])) {
              Ot = Ve;
              break;
            }
        Ot === void 0 ? Oe(kt, j, J, !0) : (ti[Ot - He] = se + 1, Ot >= bt ? bt = Ot : _t = !0, C(
          kt,
          N[Ot],
          F,
          null,
          j,
          J,
          te,
          le,
          he
        ), it++);
      }
      const pi = _t ? l1(ti) : Tr;
      for (Ve = pi.length - 1, se = ct - 1; se >= 0; se--) {
        const kt = He + se, Ot = N[kt], Ui = N[kt + 1], qt = kt + 1 < $e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ui.el || Hv(Ui)
        ) : V;
        ti[se] === 0 ? C(
          null,
          Ot,
          F,
          qt,
          j,
          J,
          te,
          le,
          he
        ) : _t && (Ve < 0 || se !== pi[Ve] ? Le(Ot, F, qt, 2) : Ve--);
      }
    }
  }, Le = (S, N, F, V, j = null) => {
    const { el: J, type: te, transition: le, children: he, shapeFlag: se } = S;
    if (se & 6) {
      Le(S.component.subTree, N, F, V);
      return;
    }
    if (se & 128) {
      S.suspense.move(N, F, V);
      return;
    }
    if (se & 64) {
      te.move(S, N, F, ut);
      return;
    }
    if (te === W) {
      n(J, N, F);
      for (let _e = 0; _e < he.length; _e++)
        Le(he[_e], N, F, V);
      n(S.anchor, N, F);
      return;
    }
    if (te === Ws) {
      D(S, N, F);
      return;
    }
    if (V !== 2 && se & 1 && le)
      if (V === 0)
        le.persisted && !J[Li] ? n(J, N, F) : (le.beforeEnter(J), n(J, N, F), oi(() => le.enter(J), j));
      else {
        const { leave: _e, delayLeave: Te, afterLeave: xe } = le, He = () => {
          S.ctx.isUnmounted ? a(J) : n(J, N, F);
        }, Ye = () => {
          const Ve = J._isLeaving || !!J[Li];
          J._isLeaving && J[Li](
            !0
            /* cancelled */
          ), le.persisted && !Ve ? He() : _e(J, () => {
            He(), xe && xe();
          });
        };
        Te ? Te(J, He, Ye) : Ye();
      }
    else
      n(J, N, F);
  }, Oe = (S, N, F, V = !1, j = !1) => {
    const {
      type: J,
      props: te,
      ref: le,
      children: he,
      dynamicChildren: se,
      shapeFlag: $e,
      patchFlag: _e,
      dirs: Te,
      cacheIndex: xe,
      memo: He
    } = S;
    if (_e === -2 && (j = !1), le != null && (zn(), Tl(le, null, F, S, !0), jn()), xe != null && (N.renderCache[xe] = void 0), $e & 256) {
      N.ctx.deactivate(S);
      return;
    }
    const Ye = $e & 1 && Te, Ve = !Er(S);
    let it;
    if (Ve && (it = te && te.onVnodeBeforeUnmount) && en(it, N, S), $e & 6)
      ht(S.component, F, V);
    else {
      if ($e & 128) {
        S.suspense.unmount(F, V);
        return;
      }
      Ye && za(S, null, N, "beforeUnmount"), $e & 64 ? S.type.remove(
        S,
        N,
        F,
        ut,
        V
      ) : se && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !se.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (J !== W || _e > 0 && _e & 64) ? ye(
        se,
        N,
        F,
        !1,
        !0
      ) : (J === W && _e & 384 || !j && $e & 16) && ye(he, N, F), V && Me(S);
    }
    const ct = He != null && xe == null;
    (Ve && (it = te && te.onVnodeUnmounted) || Ye || ct) && oi(() => {
      it && en(it, N, S), Ye && za(S, null, N, "unmounted"), ct && (S.el = null);
    }, F);
  }, Me = (S) => {
    const { type: N, el: F, anchor: V, transition: j } = S;
    if (N === W) {
      Xe(F, V);
      return;
    }
    if (N === Ws) {
      R(S);
      return;
    }
    const J = () => {
      a(F), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (S.shapeFlag & 1 && j && !j.persisted) {
      const { leave: te, delayLeave: le } = j, he = () => te(F, J);
      le ? le(S.el, J, he) : he();
    } else
      J();
  }, Xe = (S, N) => {
    let F;
    for (; S !== N; )
      F = m(S), a(S), S = F;
    a(N);
  }, ht = (S, N, F) => {
    const { bum: V, scope: j, job: J, subTree: te, um: le, m: he, a: se } = S;
    nh(he), nh(se), V && Ks(V), j.stop(), J && (J.flags |= 8, Oe(te, S, N, F)), le && oi(le, N), oi(() => {
      S.isUnmounted = !0;
    }, N);
  }, ye = (S, N, F, V = !1, j = !1, J = 0) => {
    for (let te = J; te < S.length; te++)
      Oe(S[te], N, F, V, j);
  }, Re = (S) => {
    if (S.shapeFlag & 6)
      return Re(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const N = m(S.anchor || S.el), F = N && N[pv];
    return F ? m(F) : N;
  };
  let me = !1;
  const De = (S, N, F) => {
    let V;
    S == null ? N._vnode && (Oe(N._vnode, null, null, !0), V = N._vnode.component) : C(
      N._vnode || null,
      S,
      N,
      null,
      null,
      null,
      F
    ), N._vnode = S, me || (me = !0, Vf(V), dv(), me = !1);
  }, ut = {
    p: C,
    um: Oe,
    m: Le,
    r: Me,
    mt: x,
    mc: q,
    pc: X,
    pbc: Y,
    n: Re,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: Vy(De)
  };
}
function Qu({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function ja({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function r1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Ie(n) && Ie(a))
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = On(a[r]), c.el = s.el), !i && c.patchFlag !== -2 && Id(s, c)), c.type === ss && (c.patchFlag === -1 && (c = a[r] = On(c)), c.el = s.el), c.type === jt && !c.el && (c.el = s.el);
    }
}
function l1(e) {
  const t = e.slice(), i = [0];
  let n, a, r, s, c;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const y = e[n];
    if (y !== 0) {
      if (a = i[i.length - 1], e[a] < y) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, s = i.length - 1; r < s; )
        c = r + s >> 1, e[i[c]] < y ? r = c + 1 : s = c;
      y < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, s = i[r - 1]; r-- > 0; )
    i[r] = s, s = t[s];
  return i;
}
function Bv(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bv(t);
}
function nh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Hv(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Hv(t.subTree) : null;
}
const Vv = (e) => e.__isSuspense;
function s1(e, t) {
  t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : cv(e);
}
const W = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), jt = /* @__PURE__ */ Symbol.for("v-cmt"), Ws = /* @__PURE__ */ Symbol.for("v-stc"), Dn = [];
let Si = null;
function h(e = !1) {
  Dn.push(Si = e ? null : []);
}
function Ld() {
  Dn.pop(), Si = Dn[Dn.length - 1] || null;
}
let Hl = 1;
function lo(e, t = !1) {
  Hl += e, e < 0 && Si && t && (Si.hasOnce = !0);
}
function qv(e) {
  return e.dynamicChildren = Hl > 0 ? Si || Tr : null, Ld(), Hl > 0 && Si && Si.push(e), e;
}
function p(e, t, i, n, a, r) {
  return qv(
    l(
      e,
      t,
      i,
      n,
      a,
      r,
      !0
    )
  );
}
function Pe(e, t, i, n, a) {
  return qv(
    ce(
      e,
      t,
      i,
      n,
      a,
      !0
    )
  );
}
function Vl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ya(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gv = ({ key: e }) => e ?? null, Ys = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || /* @__PURE__ */ Qt(e) || Ue(e) ? { i: Bt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === W ? 0 : 1, s = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gv(t),
    ref: t && Ys(t),
    scopeId: uu,
    slotScopeIds: null,
    children: i,
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
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  };
  return c ? (so(d, i), r & 128 && e.normalize(d)) : i && (d.shapeFlag |= vt(i) ? 8 : 16), Hl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Si && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Si.push(d), d;
}
const ce = o1;
function o1(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Cv) && (e = jt), Vl(e)) {
    const c = wa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && so(c, i), Hl > 0 && !r && Si && (c.shapeFlag & 6 ? Si[Si.indexOf(e)] = c : Si.push(c)), c.patchFlag = -2, c;
  }
  if (b1(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: d } = t;
    c && !vt(c) && (t.class = Ae(c)), st(d) && (/* @__PURE__ */ Td(d) && !Ie(d) && (d = $t({}, d)), t.style = hi(d));
  }
  const s = vt(e) ? 1 : Vv(e) ? 128 : du(e) ? 64 : st(e) ? 4 : Ue(e) ? 2 : 0;
  return l(
    e,
    t,
    i,
    n,
    a,
    s,
    r,
    !0
  );
}
function ql(e) {
  return e ? /* @__PURE__ */ Td(e) || Dv(e) ? $t({}, e) : e : null;
}
function wa(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: s, children: c, transition: d } = e, y = t ? ei(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && Gv(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Ie(r) ? r.concat(Ys(t)) : [r, Ys(t)] : Ys(t)
    ) : r,
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
    patchFlag: t && e.type !== W ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wa(e.ssContent),
    ssFallback: e.ssFallback && wa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && Bl(
    v,
    d.clone(v)
  ), v;
}
function ie(e = " ", t = 0) {
  return ce(ss, null, e, t);
}
function E(e = "", t = !1) {
  return t ? (h(), Pe(jt, null, e)) : ce(jt, null, e);
}
function ln(e) {
  return e == null || typeof e == "boolean" ? ce(jt) : Ie(e) ? ce(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vl(e) ? On(e) : ce(ss, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wa(e);
}
function so(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ie(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), so(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Dv(t) ? t._ctx = Bt : a === 3 && Bt && (Bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ue(t)) {
    if (n & 65) {
      so(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Bt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ie(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function ei(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Ae([t.class, n.class]));
      else if (a === "style")
        t.style = hi([t.style, n.style]);
      else if (eu(a)) {
        const r = t[a], s = n[a];
        s && r !== s && !(Ie(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tu(a) && (t[a] = s);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function en(e, t, i, n = null) {
  Mi(e, t, 7, [
    i,
    n
  ]);
}
const u1 = xv();
let c1 = 0;
function d1(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || u1, r = {
    uid: c1++,
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
    scope: new Rm(
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
    propsOptions: Mv(n, a),
    emitsOptions: Rv(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
    setupContext: null,
    // suspense related
    suspense: i,
    suspenseId: i ? i.pendingId : 0,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qy.bind(null, r), e.ce && e.ce(r), r;
}
let Xt = null;
const Sa = () => Xt || Bt;
let oo, Gl;
{
  const e = ru(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  oo = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Xt = i
  ), Gl = t(
    "__VUE_SSR_SETTERS__",
    (i) => Kl = i
  );
}
const os = (e) => {
  const t = Xt;
  return oo(e), e.scope.on(), () => {
    e.scope.off(), oo(t);
  };
}, ah = () => {
  Xt && Xt.scope.off(), oo(null);
};
function Kv(e) {
  return e.vnode.shapeFlag & 4;
}
let Kl = !1;
function f1(e, t = !1, i = !1) {
  t && Gl(t);
  const { props: n, children: a } = e.vnode, r = Kv(e);
  Xy(e, n, r, t), t1(e, a, i || t);
  const s = r ? h1(e, t) : void 0;
  return t && Gl(!1), s;
}
function h1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ly);
  const { setup: n } = i;
  if (n) {
    zn();
    const a = e.setupContext = n.length > 1 ? Yv(e) : null, r = os(e), s = rs(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Mp(s);
    if (jn(), r(), (c || e.sp) && !Er(e) && _v(e), c) {
      if (s.then(ah, ah), t)
        return s.then((d) => {
          Gl(!0);
          try {
            rh(e, d, t);
          } finally {
            Gl(!1);
          }
        }).catch((d) => {
          ou(d, e, 0);
        });
      e.asyncDep = s;
    } else
      rh(e, s);
  } else
    Wv(e);
}
function rh(e, t, i) {
  Ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : st(t) && (e.setupState = sv(t)), Wv(e);
}
function Wv(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Di);
  {
    const a = os(e);
    zn();
    try {
      My(e);
    } finally {
      jn(), a();
    }
  }
}
const p1 = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Yv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, p1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sv(Jm(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in Al)
        return Al[i](e);
    },
    has(t, i) {
      return i in t || i in Al;
    }
  })) : e.proxy;
}
function v1(e, t = !0) {
  return Ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function b1(e) {
  return Ue(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ ay(e, t, Kl);
function di(e, t, i) {
  try {
    lo(-1);
    const n = arguments.length;
    return n === 2 ? st(t) && !Ie(t) ? Vl(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && Vl(i) && (i = [i]), ce(e, t, i));
  } finally {
    lo(1);
  }
}
const g1 = "3.5.42", m1 = Di;
let qc;
const lh = typeof window < "u" && window.trustedTypes;
if (lh)
  try {
    qc = /* @__PURE__ */ lh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zv = qc ? (e) => qc.createHTML(e) : (e) => e, y1 = "http://www.w3.org/2000/svg", _1 = "http://www.w3.org/1998/Math/MathML", xn = typeof document < "u" ? document : null, sh = xn && /* @__PURE__ */ xn.createElement("template"), w1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? xn.createElementNS(y1, e) : t === "mathml" ? xn.createElementNS(_1, e) : i ? xn.createElement(e, { is: i }) : xn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => xn.createTextNode(e),
  createComment: (e) => xn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, n, a, r) {
    const s = i ? i.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      sh.innerHTML = Zv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = sh.content;
      if (n === "svg" || n === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      t.insertBefore(c, i);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, la = "transition", sl = "animation", Wl = /* @__PURE__ */ Symbol("_vtc"), Xv = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, k1 = /* @__PURE__ */ $t(
  {},
  vv,
  Xv
), S1 = (e) => (e.displayName = "Transition", e.props = k1, e), C1 = /* @__PURE__ */ S1(
  (e, { slots: t }) => di(ky, T1(e), t)
), Ba = (e, t = []) => {
  Ie(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, oh = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function T1(e) {
  const t = {};
  for (const B in e)
    B in Xv || (t[B] = e[B]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: n,
    duration: a,
    enterFromClass: r = `${i}-enter-from`,
    enterActiveClass: s = `${i}-enter-active`,
    enterToClass: c = `${i}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: y = s,
    appearToClass: v = c,
    leaveFromClass: g = `${i}-leave-from`,
    leaveActiveClass: m = `${i}-leave-active`,
    leaveToClass: k = `${i}-leave-to`
  } = e, T = A1(a), C = T && T[0], O = T && T[1], {
    onBeforeEnter: I,
    onEnter: L,
    onEnterCancelled: D,
    onLeave: R,
    onLeaveCancelled: pe,
    onBeforeAppear: Q = I,
    onAppear: $ = L,
    onAppearCancelled: q = D
  } = t, K = (B, z, x, P) => {
    B._enterCancelled = P, Ha(B, z ? v : c), Ha(B, z ? y : s), x && x();
  }, Y = (B, z) => {
    B._isLeaving = !1, Ha(B, g), Ha(B, k), Ha(B, m), z && z();
  }, ne = (B) => (z, x) => {
    const P = B ? $ : L, Z = () => K(z, B, x);
    Ba(P, [z, Z]), uh(() => {
      Ha(z, B ? d : r), kn(z, B ? v : c), oh(P) || ch(z, n, C, Z);
    });
  };
  return $t(t, {
    onBeforeEnter(B) {
      Ba(I, [B]), kn(B, r), kn(B, s);
    },
    onBeforeAppear(B) {
      Ba(Q, [B]), kn(B, d), kn(B, y);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(B, z) {
      B._isLeaving = !0;
      const x = () => Y(B, z);
      kn(B, g), B._enterCancelled ? (kn(B, m), hh(B)) : (hh(B), kn(B, m)), uh(() => {
        B._isLeaving && (Ha(B, g), kn(B, k), oh(R) || ch(B, n, O, x));
      }), Ba(R, [B, x]);
    },
    onEnterCancelled(B) {
      K(B, !1, void 0, !0), Ba(D, [B]);
    },
    onAppearCancelled(B) {
      K(B, !0, void 0, !0), Ba(q, [B]);
    },
    onLeaveCancelled(B) {
      Y(B), Ba(pe, [B]);
    }
  });
}
function A1(e) {
  if (e == null)
    return null;
  if (st(e))
    return [ec(e.enter), ec(e.leave)];
  {
    const t = ec(e);
    return [t, t];
  }
}
function ec(e) {
  return Sm(e);
}
function kn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Wl] || (e[Wl] = /* @__PURE__ */ new Set())).add(t);
}
function Ha(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Wl];
  i && (i.delete(t), i.size || (e[Wl] = void 0));
}
function uh(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let E1 = 0;
function ch(e, t, i, n) {
  const a = e._endId = ++E1, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: s, timeout: c, propCount: d } = $1(e, t);
  if (!s)
    return n();
  const y = s + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(y, m), r();
  }, m = (k) => {
    k.target === e && ++v >= d && g();
  };
  setTimeout(() => {
    v < d && g();
  }, c + 1), e.addEventListener(y, m);
}
function $1(e, t) {
  const i = window.getComputedStyle(e), n = (T) => (i[T] || "").split(", "), a = n(`${la}Delay`), r = n(`${la}Duration`), s = dh(a, r), c = n(`${sl}Delay`), d = n(`${sl}Duration`), y = dh(c, d);
  let v = null, g = 0, m = 0;
  t === la ? s > 0 && (v = la, g = s, m = r.length) : t === sl ? y > 0 && (v = sl, g = y, m = d.length) : (g = Math.max(s, y), v = g > 0 ? s > y ? la : sl : null, m = v ? v === la ? r.length : d.length : 0);
  const k = v === la && /\b(?:transform|all)(?:,|$)/.test(
    n(`${la}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: m,
    hasTransform: k
  };
}
function dh(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => fh(i) + fh(e[n])));
}
function fh(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function hh(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function x1(e, t, i) {
  const n = e[Wl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const uo = /* @__PURE__ */ Symbol("_vod"), Jv = /* @__PURE__ */ Symbol("_vsh"), tr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[uo] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : ol(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), ol(e, !0), n.enter(e)) : n.leave(e, () => {
      ol(e, !1);
    }) : ol(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ol(e, t);
  }
};
function ol(e, t) {
  e.style.display = t ? e[uo] : "none", e[Jv] = !t;
}
const Qv = /* @__PURE__ */ Symbol("");
function O1(e) {
  const t = Sa();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => co(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? co(t.ce, a) : Gc(t.subTree, a), i(a);
  };
  Sv(() => {
    cv(n);
  }), xt(() => {
    qe(n, Di, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ls(() => a.disconnect());
  });
}
function Gc(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      Gc(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    co(e.el, t);
  else if (e.type === W)
    e.children.forEach((i) => Gc(i, t));
  else if (e.type === Ws) {
    let { el: i, anchor: n } = e;
    for (; i && (co(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function co(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = Nm(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[Qv] = n;
  }
}
const N1 = /(?:^|;)\s*display\s*:/;
function R1(e, t, i) {
  const n = e.style, a = vt(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (vt(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          i[c] == null && ml(n, c, "");
        }
      else
        for (const s in t)
          i[s] == null && ml(n, s, "");
    for (const s in i) {
      s === "display" && (r = !0);
      const c = i[s];
      c != null ? L1(
        e,
        s,
        !vt(t) && t ? t[s] : void 0,
        c
      ) || ml(n, s, c) : ml(n, s, "");
    }
  } else if (a) {
    if (t !== i) {
      const s = n[Qv];
      s && (i += ";" + s), n.cssText = i, r = N1.test(i);
    }
  } else t && e.removeAttribute("style");
  uo in e && (e[uo] = r ? n.display : "", e[Jv] && (n.display = "none"));
}
const Fs = /\s*!important$/;
function ml(e, t, i) {
  if (Ie(i))
    i.forEach((n) => ml(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    Fs.test(i) ? e.setProperty(t, i.replace(Fs, ""), "important") : e.setProperty(t, i);
  else {
    const n = I1(e, t);
    Fs.test(i) ? e.setProperty(
      qn(n),
      i.replace(Fs, ""),
      "important"
    ) : e[n] = i;
  }
}
const ph = ["Webkit", "Moz", "ms"], tc = {};
function I1(e, t) {
  const i = tc[t];
  if (i)
    return i;
  let n = Jt(t);
  if (n !== "filter" && n in e)
    return tc[t] = n;
  n = nu(n);
  for (let a = 0; a < ph.length; a++) {
    const r = ph[a] + n;
    if (r in e)
      return tc[t] = r;
  }
  return t;
}
function L1(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && vt(n) && i === n;
}
const vh = "http://www.w3.org/1999/xlink";
function bh(e, t, i, n, a, r = xm(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(vh, t.slice(6, t.length)) : e.setAttributeNS(vh, t, i) : i == null || r && !Bp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ki(i) ? String(i) : i
  );
}
function gh(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Zv(i) : i);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (c !== d || !("_value" in e)) && (e.value = d), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let s = !1;
  if (i === "" || i == null) {
    const c = typeof e[t];
    c === "boolean" ? i = Bp(i) : i == null && c === "string" ? (i = "", s = !0) : c === "number" && (i = 0, s = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function va(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function P1(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const mh = /* @__PURE__ */ Symbol("_vei");
function D1(e, t, i, n, a = null) {
  const r = e[mh] || (e[mh] = {}), s = r[t];
  if (n && s)
    s.value = n;
  else {
    const [c, d] = U1(t);
    if (n) {
      const y = r[t] = B1(
        n,
        a
      );
      va(e, c, y, d);
    } else s && (P1(e, c, s, d), r[t] = void 0);
  }
}
const F1 = /(Once|Passive|Capture)$/, M1 = /^on:?(?:Once|Passive|Capture)$/;
function U1(e) {
  let t, i;
  for (; (i = e.match(F1)) && !M1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : qn(e.slice(2)), t];
}
let ic = 0;
const z1 = /* @__PURE__ */ Promise.resolve(), j1 = () => ic || (z1.then(() => ic = 0), ic = Date.now());
function B1(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (Ie(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const s = a.slice(), c = [n];
      for (let d = 0; d < s.length && !n._stopped; d++) {
        const y = s[d];
        y && Mi(
          y,
          t,
          5,
          c
        );
      }
    } else
      Mi(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = j1(), i;
}
const yh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, H1 = (e, t, i, n, a, r) => {
  const s = a === "svg";
  t === "class" ? x1(e, n, s) : t === "style" ? R1(e, i, n) : eu(t) ? tu(t) || D1(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : V1(e, t, n, s)) ? (gh(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bh(e, t, n, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (q1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !vt(n))) ? gh(e, Jt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), bh(e, t, n, s));
};
function V1(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yh(t) && Ue(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return yh(t) && vt(i) ? !1 : t in e;
}
function q1(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = Jt(t);
  return Array.isArray(i) ? i.some((a) => Jt(a) === n) : Object.keys(i).some((a) => Jt(a) === n);
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ie(t) ? (i) => Ks(t, i) : t;
};
function G1(e) {
  e.target.composing = !0;
}
function _h(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign"), Ms = /* @__PURE__ */ Symbol("_initialValue");
function nc(e, t, i) {
  return t && (e = e.trim()), i && (e = au(e)), e;
}
const je = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Ms] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ms] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sn] = Ir(a);
    const r = n || a.props && a.props.type === "number";
    va(e, t ? "change" : "input", (s) => {
      s.target.composing || e[sn](nc(e.value, i, r));
    }), (i || r) && va(e, "change", () => {
      e.value = nc(e.value, i, r);
    }), t || (va(e, "compositionstart", G1), va(e, "compositionend", _h), va(e, "change", _h));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[Ms];
    delete e[Ms], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sn](nc(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, s) {
    if (e[sn] = Ir(s), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? au(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const y = e.getRootNode();
    (y instanceof Document || y instanceof ShadowRoot) && y.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === d) || (e.value = d);
  }
}, Hn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[sn] = Ir(i), va(e, "change", () => {
      const n = e._modelValue, a = Yl(e), r = e.checked, s = e[sn];
      if (Ie(n)) {
        const c = yd(n, a), d = c !== -1;
        if (r && !d)
          s(n.concat(a));
        else if (!r && d) {
          const y = [...n];
          y.splice(c, 1), s(y);
        }
      } else if (Mn(n)) {
        const c = new Set(n);
        r ? c.add(a) : c.delete(a), s(c);
      } else
        s(eb(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: wh,
  beforeUpdate(e, t, i) {
    e[sn] = Ir(i), wh(e, t, i);
  }
};
function wh(e, { value: t, oldValue: i }, n) {
  e._modelValue = t;
  let a;
  if (Ie(t))
    a = yd(t, n.props.value) > -1;
  else if (Mn(t))
    a = t.has(n.props.value);
  else {
    if (t === i) return;
    a = Un(t, eb(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const at = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, va(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? au(Yl(d)) : Yl(d)
      ), r = e.multiple, s = r ? Mn(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Ie(s) ? a.slice() : a : s
      ];
      try {
        e[sn](s);
      } finally {
        Rt(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[sn] = Ir(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    kh(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[sn] = Ir(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !K1(t, i[1], i[0])) && kh(e, t);
  }
};
function K1(e, t, i) {
  if (!i || Ie(e)) return Un(e, t);
  if (Mn(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function kh(e, t) {
  const i = e.multiple, n = Ie(t);
  if (!(i && !n && !Mn(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], c = Yl(s);
      if (i)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? s.selected = t.some((y) => String(y) === String(c)) : s.selected = yd(t, c) > -1;
        } else
          s.selected = t.has(c);
      else if (Un(Yl(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Yl(e) {
  return "_value" in e ? e._value : e.value;
}
function eb(e, t) {
  const i = t ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : t;
}
const W1 = ["ctrl", "shift", "alt", "meta"], Y1 = {
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
  exact: (e, t) => W1.some((i) => e[`${i}Key`] && !t.includes(i))
}, Se = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const c = Y1[t[s]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Z1 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ft = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = qn(a.key);
    if (t.some(
      (s) => s === r || Z1[s] === r
    ))
      return e(a);
  }));
}, X1 = /* @__PURE__ */ $t({ patchProp: H1 }, w1);
let Sh;
function J1() {
  return Sh || (Sh = n1(X1));
}
const Q1 = ((...e) => {
  const t = J1().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = t_(n);
    if (!a) return;
    const r = t._component;
    !Ue(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = i(a, !1, e_(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function e_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function t_(e) {
  return vt(e) ? document.querySelector(e) : e;
}
function fo(e, t, i) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(n);
  if (a === null) {
    if (i !== void 0)
      return i;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), i !== void 0)
      return i;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
const Ch = (e, t, i) => {
  const n = Object.assign({
    escape: !0
  }, i || {}), a = function(r, s) {
    return s = s || {}, r.replace(
      /{([^{}]*)}/g,
      function(c, d) {
        const y = s[d];
        return n.escape ? encodeURIComponent(typeof y == "string" || typeof y == "number" ? y.toString() : c) : typeof y == "string" || typeof y == "number" ? y.toString() : c;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), a(e, t || {});
}, Ci = (e, t, i) => {
  const n = Object.assign({
    noRewrite: !1
  }, i || {}), a = i?.baseURL ?? i_();
  return window?.OC?.config?.modRewriteWorking === !0 && !n.noRewrite ? a + Ch(e, t, i) : a + "/index.php" + Ch(e, t, i);
};
function i_() {
  let e = window._oc_webroot;
  if (typeof e > "u") {
    e = location.pathname;
    const t = e.indexOf("/index.php/");
    if (t !== -1)
      e = e.slice(0, t);
    else {
      const i = e.indexOf("/", 1);
      e = e.slice(0, i > 0 ? i : void 0);
    }
  }
  return e;
}
function Th(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function n_(e) {
  if (Array.isArray(e)) return e;
}
function a_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, s, c = [], d = !0, y = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(d = (n = r.call(i)).done) && (c.push(n.value), c.length !== t); d = !0) ;
    } catch (v) {
      y = !0, a = v;
    } finally {
      try {
        if (!d && i.return != null && (s = i.return(), Object(s) !== s)) return;
      } finally {
        if (y) throw a;
      }
    }
    return c;
  }
}
function r_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l_(e, t) {
  return n_(e) || a_(e, t) || s_(e, t) || r_();
}
function s_(e, t) {
  if (e) {
    if (typeof e == "string") return Th(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Th(e, t) : void 0;
  }
}
const tb = Object.entries, Ah = Object.setPrototypeOf, o_ = Object.isFrozen, ib = Object.getPrototypeOf, nb = Object.getOwnPropertyDescriptor;
let It = Object.freeze, Ht = Object.seal, Sr = Object.create, ab = typeof Reflect < "u" && Reflect, Kc = ab.apply, Wc = ab.construct;
It || (It = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
Kc || (Kc = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
  return t.apply(i, a);
});
Wc || (Wc = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
  return new t(...n);
});
const Sn = wt(Array.prototype.forEach), u_ = wt(Array.prototype.lastIndexOf), Eh = wt(Array.prototype.pop), ul = wt(Array.prototype.push), c_ = wt(Array.prototype.slice), d_ = wt(Array.prototype.splice), xr = Array.isArray, ac = rb(Set), rc = wt(Set.prototype.add), cl = wt(Set.prototype.has), Ka = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), $h = wt(String.prototype.match), dl = wt(String.prototype.replace), xh = wt(String.prototype.indexOf), f_ = wt(String.prototype.trim), h_ = wt(Number.prototype.toString), p_ = wt(Boolean.prototype.toString), Oh = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Nh = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), fi = wt(Object.prototype.hasOwnProperty), fl = wt(Object.prototype.toString), Ft = wt(RegExp.prototype.test), Cn = rb(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
    return Kc(e, t, n);
  };
}
function rb(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
    return Wc(e, i);
  };
}
function et(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ka;
  if (Ah && Ah(e, null), !xr(t)) return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const r = i(a);
      r !== a && (o_(t) || (t[n] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function v_(e) {
  for (let t = 0; t < e.length; t++) fi(e, t) || (e[t] = null);
  return e;
}
function wi(e) {
  const t = Sr(null);
  for (const n of tb(e)) {
    var i = l_(n, 2);
    const a = i[0], r = i[1];
    fi(e, a) && (xr(r) ? t[a] = v_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = wi(r) : t[a] = r);
  }
  return t;
}
function b_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return h_(e);
    case "boolean":
      return p_(e);
    case "bigint":
      return Oh ? Oh(e) : "0";
    case "symbol":
      return Nh ? Nh(e) : "Symbol()";
    case "undefined":
      return fl(e);
    case "function":
    case "object": {
      if (e === null) return fl(e);
      const t = e, i = Ni(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : fl(n);
      }
      return fl(e);
    }
    default:
      return fl(e);
  }
}
function Ni(e, t) {
  for (; e !== null; ) {
    const n = nb(e, t);
    if (n) {
      if (n.get) return wt(n.get);
      if (typeof n.value == "function") return wt(n.value);
    }
    e = ib(e);
  }
  function i() {
    return null;
  }
  return i;
}
function g_(e, t) {
  for (; e !== null; ) {
    const i = nb(e, t);
    if (i) return i.get ? wt(i.get) : null;
    e = ib(e);
  }
  return null;
}
function m_(e) {
  try {
    return Ft(e, ""), !0;
  } catch {
    return !1;
  }
}
const Rh = It([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), sc = It([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), oc = It([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), y_ = It([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), uc = It([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), __ = It([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), Ih = It(["#text"]), Lh = It([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), cc = It([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Ph = It([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Us = It([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), w_ = Ht(/{{[\w\W]*|^[\w\W]*}}/g), k_ = Ht(/<%[\w\W]*|^[\w\W]*%>/g), S_ = Ht(/\${[\w\W]*/g), C_ = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), T_ = Ht(/^aria-[\-\w]+$/), Dh = Ht(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), A_ = Ht(/^(?:\w+script|data):/i), E_ = Ht(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), $_ = Ht(/^html$/i), x_ = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Ht(/<[/\w!]/g), Fh = Ht(/<[/\w]/g), O_ = Ht(/<\/no(script|embed|frames)/i), Mh = Ht(/\/>/i), At = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, N_ = It(et({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), R_ = function() {
  return typeof window > "u" ? null : window;
}, I_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  i && i.hasAttribute(a) && (n = i.getAttribute(a));
  const r = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(r, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, Uh = function() {
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
}, sa = function(t, i, n, a) {
  return fi(t, i) && xr(t[i]) ? et(a.base ? wi(a.base) : {}, t[i], a.transform) : n;
}, fc = function(t, i, n) {
  const a = fi(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? wi(a) : n();
};
function lb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R_();
  const t = (fe) => lb(fe);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== At.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, c = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, v = e.trustedTypes, g = c.prototype, m = Ni(g, "cloneNode"), k = Ni(g, "remove"), T = Ni(g, "removeAttributeNode"), C = Ni(g, "nextSibling"), O = Ni(g, "childNodes"), I = Ni(g, "parentNode"), L = Ni(g, "shadowRoot"), D = Ni(g, "attributes"), R = s && s.prototype ? Ni(s.prototype, "nodeType") : null, pe = s && s.prototype ? Ni(s.prototype, "nodeName") : null, Q = s && s.prototype ? Ni(s.prototype, "ownerDocument") : null, $ = function(A) {
    return R ? R(A) : A.nodeType;
  }, q = function(A) {
    return pe ? pe(A) : A.nodeName;
  }, K = g_(g, "namespaceURI"), Y = function(A) {
    return K ? K(A) : A.namespaceURI;
  };
  if (typeof r == "function") {
    const fe = i.createElement("template");
    fe.content && fe.content.ownerDocument && (i = fe.content.ownerDocument);
  }
  let ne, B = "", z, x = !1, P = 0;
  const Z = function() {
    if (P > 0) throw Cn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ae = function(A) {
    Z(), P++;
    try {
      return ne.createHTML(A);
    } finally {
      P--;
    }
  }, X = function(A) {
    Z(), P++;
    try {
      return ne.createScriptURL(A);
    } finally {
      P--;
    }
  }, ve = function() {
    return x || (z = I_(v, a), x = !0), z;
  }, Ce = i, Le = Ce.implementation, Oe = Ce.createNodeIterator, Me = Ce.createDocumentFragment, Xe = Ce.getElementsByTagName, ht = n.importNode;
  let ye = Uh();
  t.isSupported = typeof tb == "function" && typeof I == "function" && Le && Le.createHTMLDocument !== void 0;
  const Re = w_, me = k_, De = S_, ut = C_, ee = T_, S = A_, N = E_, F = x_;
  let V = Dh, j = null;
  const J = et({}, [
    ...Rh,
    ...sc,
    ...oc,
    ...uc,
    ...Ih
  ]);
  let te = null;
  const le = et({}, [
    ...Lh,
    ...cc,
    ...Ph,
    ...Us
  ]);
  let he = Object.seal(Sr(null, {
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
  })), se = null, $e = null;
  const _e = Object.seal(Sr(null, {
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
  let Te = !0, xe = !0, He = !1, Ye = !0, Ve = !1, it = !0, ct = !1, _t = !1, bt = null, ti = null, pi = !1, kt = !1, Ot = !1, Ui = !1, qt = !0, vi = !1;
  const Aa = "user-content-";
  let Yi = !0, Ea = !1, Ai = null, Zi = {}, Xi = null;
  const Lr = et({}, [
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
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let dn = null;
  const Kn = et({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Wn = null;
  const Yn = et({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), dt = "http://www.w3.org/1998/Math/MathML", rr = "http://www.w3.org/2000/svg", bi = "http://www.w3.org/1999/xhtml";
  let fn = bi, Zn = !1, lr = null;
  const $a = et({}, [
    dt,
    rr,
    bi
  ], lc), Xn = It([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let hn = et({}, Xn);
  const Jn = It(["annotation-xml"]);
  let pn = et({}, Jn);
  const xa = et({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ei = null;
  const Su = ["application/xhtml+xml", "text/html"], ds = "text/html";
  let nt = null, vn = null;
  const Cu = i.createElement("form"), fs = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Pr = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (vn && vn === A) return;
    (!A || typeof A != "object") && (A = {}), A = wi(A), Ei = Su.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? ds : A.PARSER_MEDIA_TYPE, nt = Ei === "application/xhtml+xml" ? lc : Ka, j = sa(A, "ALLOWED_TAGS", J, { transform: nt }), te = sa(A, "ALLOWED_ATTR", le, { transform: nt }), lr = sa(A, "ALLOWED_NAMESPACES", $a, { transform: lc }), Wn = sa(A, "ADD_URI_SAFE_ATTR", Yn, {
      transform: nt,
      base: Yn
    }), dn = sa(A, "ADD_DATA_URI_TAGS", Kn, {
      transform: nt,
      base: Kn
    }), Xi = sa(A, "FORBID_CONTENTS", Lr, { transform: nt }), se = sa(A, "FORBID_TAGS", wi({}), { transform: nt }), $e = sa(A, "FORBID_ATTR", wi({}), { transform: nt }), Zi = fi(A, "USE_PROFILES") ? A.USE_PROFILES && typeof A.USE_PROFILES == "object" ? wi(A.USE_PROFILES) : A.USE_PROFILES : !1, Te = A.ALLOW_ARIA_ATTR !== !1, xe = A.ALLOW_DATA_ATTR !== !1, He = A.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ve = A.SAFE_FOR_TEMPLATES || !1, it = A.SAFE_FOR_XML !== !1, ct = A.WHOLE_DOCUMENT || !1, kt = A.RETURN_DOM || !1, Ot = A.RETURN_DOM_FRAGMENT || !1, Ui = A.RETURN_TRUSTED_TYPE || !1, pi = A.FORCE_BODY || !1, qt = A.SANITIZE_DOM !== !1, vi = A.SANITIZE_NAMED_PROPS || !1, Yi = A.KEEP_CONTENT !== !1, Ea = A.IN_PLACE || !1, V = m_(A.ALLOWED_URI_REGEXP) ? A.ALLOWED_URI_REGEXP : Dh, fn = typeof A.NAMESPACE == "string" ? A.NAMESPACE : bi, hn = fc(A, "MATHML_TEXT_INTEGRATION_POINTS", () => et({}, Xn)), pn = fc(A, "HTML_INTEGRATION_POINTS", () => et({}, Jn));
    const U = fc(A, "CUSTOM_ELEMENT_HANDLING", () => Sr(null));
    if (he = Sr(null), fi(U, "tagNameCheck") && fs(U.tagNameCheck) && (he.tagNameCheck = U.tagNameCheck), fi(U, "attributeNameCheck") && fs(U.attributeNameCheck) && (he.attributeNameCheck = U.attributeNameCheck), fi(U, "allowCustomizedBuiltInElements") && typeof U.allowCustomizedBuiltInElements == "boolean" && (he.allowCustomizedBuiltInElements = U.allowCustomizedBuiltInElements), Ht(he), Ve && (xe = !1), Ot && (kt = !0), Zi && (j = et({}, Ih), te = Sr(null), Zi.html === !0 && (et(j, Rh), et(te, Lh)), Zi.svg === !0 && (et(j, sc), et(te, cc), et(te, Us)), Zi.svgFilters === !0 && (et(j, oc), et(te, cc), et(te, Us)), Zi.mathMl === !0 && (et(j, uc), et(te, Ph), et(te, Us))), _e.tagCheck = null, _e.attributeCheck = null, fi(A, "ADD_TAGS") && (typeof A.ADD_TAGS == "function" ? _e.tagCheck = A.ADD_TAGS : xr(A.ADD_TAGS) && (j === J && (j = wi(j)), et(j, A.ADD_TAGS, nt))), fi(A, "ADD_ATTR") && (typeof A.ADD_ATTR == "function" ? _e.attributeCheck = A.ADD_ATTR : xr(A.ADD_ATTR) && (te === le && (te = wi(te)), et(te, A.ADD_ATTR, nt))), fi(A, "ADD_FORBID_CONTENTS") && xr(A.ADD_FORBID_CONTENTS) && (Xi === Lr && (Xi = wi(Xi)), et(Xi, A.ADD_FORBID_CONTENTS, nt)), Yi && (j["#text"] = !0), ct && et(j, [
      "html",
      "head",
      "body"
    ]), j.table && (et(j, ["tbody"]), delete se.tbody), A.TRUSTED_TYPES_POLICY) {
      if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function") throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const re = ne;
      ne = A.TRUSTED_TYPES_POLICY;
      try {
        B = ae("");
      } catch (oe) {
        throw ne = re, oe;
      }
    } else A.TRUSTED_TYPES_POLICY === null ? (ne = void 0, B = "") : (ne === void 0 && (ne = ve()), ne && typeof B == "string" && (B = ae("")));
    It && It(A), vn = A;
  }, gt = et({}, [
    ...sc,
    ...oc,
    ...y_
  ]), sr = et({}, [...uc, ...__]), Tu = function(A, U, re) {
    return U.namespaceURI === bi ? A === "svg" : U.namespaceURI === dt ? A === "svg" && (re === "annotation-xml" || hn[re]) : !!gt[A];
  }, Au = function(A, U, re) {
    return U.namespaceURI === bi ? A === "math" : U.namespaceURI === rr ? A === "math" && pn[re] : !!sr[A];
  }, bn = function(A, U, re) {
    return U.namespaceURI === rr && !pn[re] || U.namespaceURI === dt && !hn[re] ? !1 : !sr[A] && (xa[A] || !gt[A]);
  }, Eu = function(A) {
    const U = Y(A), re = Ka(q(A)), oe = I(A);
    let Ne, Fe;
    return oe && $(oe) === At.element ? (Ne = { namespaceURI: Y(oe) }, Fe = Ka(q(oe))) : (Ne = { namespaceURI: fn }, Fe = "template"), lr[U] ? U === rr ? Tu(re, Ne, Fe) : U === dt ? Au(re, Ne, Fe) : U === bi ? bn(re, Ne, Fe) : !!(Ei === "application/xhtml+xml" && lr[U]) : !1;
  }, ii = function(A) {
    ul(t.removed, { element: A });
    try {
      I(A).removeChild(A);
    } catch {
      if (k(A), !I(A)) throw Cn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, or = function(A, U, re) {
    try {
      T(A, U);
    } catch {
      try {
        A.removeAttribute(re);
      } catch {
      }
    }
  }, Dr = function(A) {
    Mr(A);
    const U = O(A);
    U && Sn(c_(U), (oe) => {
      try {
        k(oe);
      } catch {
      }
    });
    const re = $(A) === At.element ? D(A) : null;
    if (re) for (let oe = re.length - 1; oe >= 0; --oe) {
      const Ne = re[oe], Fe = Ne && Ne.name;
      typeof Fe == "string" && or(A, Ne, Fe);
    }
  }, Qn = function(A, U, re) {
    if (!re) try {
      re = U.getAttributeNode(A);
    } catch {
      re = null;
    }
    ul(t.removed, {
      attribute: re || null,
      from: U
    });
    try {
      re ? T(U, re) : U.removeAttribute(A);
    } catch {
      try {
        U.removeAttribute(A);
      } catch {
      }
    }
    if (A === "is")
      if (kt || Ot) try {
        ii(U);
      } catch {
      }
      else try {
        U.setAttribute(A, "");
      } catch {
      }
  }, hs = function(A) {
    const U = D(A);
    if (U)
      for (let re = U.length - 1; re >= 0; --re) {
        const oe = U[re], Ne = oe && oe.name;
        typeof Ne != "string" || te[nt(Ne)] || or(A, oe, Ne);
      }
  }, Fr = function(A, U) {
    let re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const oe = [A];
    for (; oe.length > 0; ) {
      const Ne = oe.pop();
      if (U(Ne) === !1) continue;
      if (re && $(Ne) === At.element) {
        const Ge = L(Ne);
        zi(Ge) && oe.push(Ge);
      }
      const Fe = O(Ne);
      if (Fe) for (let Ge = Fe.length - 1; Ge >= 0; --Ge) oe.push(Fe[Ge]);
    }
  }, Mr = function(A) {
    Fr(A, (U) => {
      $(U) === At.element && hs(U);
    });
  }, Ur = function(A) {
    const U = [];
    return Fr(A, (re) => {
      U.push(re);
    }, !0), U;
  }, $u = function(A, U) {
    const re = ac();
    Sn(Ur(A), (oe) => {
      $(oe) === At.element && rc(re, oe);
    }), Sn(U, (oe) => {
      $(oe) === At.element && !cl(re, oe) && hs(oe);
    });
  }, ps = function(A, U) {
    let re = !1;
    return Sn(t.removed, (oe) => {
      oe.element && (re = re || oe.element === A, Mr(oe.element));
    }), $u(A, U), re;
  }, xu = 8, Ou = function(A, U) {
    const re = Ai;
    let oe = null;
    const Ne = () => (oe || (oe = ac(), Sn(U, (Fe) => {
      rc(oe, Fe);
    })), oe);
    for (let Fe = 0; ; Fe++) {
      const Ge = Ur(A), mt = [A];
      let Ct = !1;
      if (Sn(Ge, (Tt) => {
        $(Tt) === At.documentFragment ? ul(mt, Tt) : !Ct && !cl(re, Tt) && (Ct = cl(Ne(), Tt));
      }), !Ct) return;
      if (Fe >= xu) throw Cn("the tree kept changing during in-place sanitization; refusing to return it");
      Sn(mt, (Tt, Pt) => {
        Nu(Tt, Pt > 0, A, Ne());
      });
    }
  }, Nu = function(A, U, re, oe) {
    const Ne = ur(A);
    let Fe;
    for (; Fe = Ne.nextNode(); )
      !cl(oe, Fe) || cl(Ai, Fe) || (U && ci(ye.uponSanitizeShadowNode, Fe, null), gi(Fe, re), hr(Fe, re), zi(Fe.content) && ia(Fe.content));
  }, Ru = function(A) {
    Ai && rc(Ai, A);
  }, vs = function(A, U) {
    return it ? A === "patchsrc" ? !0 : A === "for" && U !== "label" && U !== "output" : !1;
  }, Iu = function(A) {
    it && Fr(A, (U) => {
      const re = $(U);
      if (re === At.processingInstruction || re === At.comment && Ft(Fh, U.data)) {
        try {
          k(U);
        } catch {
        }
        return !1;
      }
      if (re === At.element) {
        const oe = U, Ne = nt(q(U));
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && vs("for", Ne) && oe.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(A) {
    let U = null, re = null;
    if (pi) A = "<remove></remove>" + A;
    else {
      const Fe = $h(A, /^[\r\n\t ]+/);
      re = Fe && Fe[0];
    }
    Ei === "application/xhtml+xml" && fn === bi && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const oe = ne ? ae(A) : A;
    if (fn === bi) try {
      U = new y().parseFromString(oe, Ei);
    } catch {
    }
    if (!U || !U.documentElement) {
      U = Le.createDocument(fn, "template", null);
      try {
        U.documentElement.innerHTML = Zn ? B : oe;
      } catch {
      }
    }
    const Ne = U.body || U.documentElement;
    return A && re && Ne.insertBefore(i.createTextNode(re), Ne.childNodes[0] || null), fn === bi ? Xe.call(U, ct ? "html" : "body")[0] : ct ? U.documentElement : Ne;
  }, ur = function(A) {
    const U = Q ? Q(A) : A.ownerDocument;
    return Oe.call(U || A, A, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, ea = function(A) {
    return A = dl(A, Re, " "), A = dl(A, me, " "), A = dl(A, De, " "), A;
  }, Oa = function(A) {
    var U;
    cr(A);
    const re = (U = A.querySelectorAll) === null || U === void 0 ? void 0 : U.call(A, "template");
    re && Sn(re, (oe) => {
      zi(oe.content) && Oa(oe.content);
    });
  }, cr = function(A) {
    A.normalize();
    const U = Q ? Q(A) : A.ownerDocument, re = Oe.call(U || A, A, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let oe = re.nextNode();
    for (; oe; )
      oe.data = ea(oe.data), oe = re.nextNode();
  }, ta = function(A) {
    const U = pe ? pe(A) : null;
    return typeof U != "string" || nt(U) !== "form" ? !1 : typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || A.attributes !== D(A) || typeof A.removeAttribute != "function" || typeof A.removeAttributeNode != "function" || typeof A.getAttributeNode != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function" || A.nodeType !== R(A) || A.childNodes !== O(A);
  }, zi = function(A) {
    if (!R || typeof A != "object" || A === null) return !1;
    try {
      return R(A) === At.documentFragment;
    } catch {
      return !1;
    }
  }, Na = function(A) {
    if (!R || typeof A != "object" || A === null) return !1;
    try {
      return typeof R(A) == "number";
    } catch {
      return !1;
    }
  };
  function ci(fe, A, U) {
    fe.length !== 0 && Sn(fe, (re) => {
      re.call(t, A, U, vn);
    });
  }
  const gs = function(A, U) {
    return !!(it && A.hasChildNodes() && !Na(A.firstElementChild) && Ft(dc, A.textContent) && Ft(dc, A.innerHTML) || it && N_[U] && $(A) === At.element && Y(A) === bi && (Na(A.firstElementChild) || typeof A.textContent == "string" && Ft(dc, A.textContent)) || A.nodeType === At.processingInstruction || it && A.nodeType === At.comment && Ft(Fh, A.data));
  }, dr = function(A, U) {
    if (A instanceof RegExp) return Ft(A, U);
    if (A instanceof Function) {
      for (var re = arguments.length, oe = new Array(re > 2 ? re - 2 : 0), Ne = 2; Ne < re; Ne++) oe[Ne - 2] = arguments[Ne];
      return !!A(U, ...oe);
    }
    return !1;
  }, zr = function(A, U, re) {
    if (!se[U] && Br(U) && dr(he.tagNameCheck, U)) return !1;
    if (Yi && !Xi[U] && !Xi[Ka(U)]) {
      const oe = I(A), Ne = O(A);
      if (Ne && oe) {
        const Fe = Ne.length;
        for (let Ge = Fe - 1; Ge >= 0; --Ge) {
          const mt = A === re ? m(Ne[Ge], !0) : Ne[Ge];
          oe.insertBefore(mt, C(A));
        }
      }
    }
    return ii(A), !0;
  }, fr = function(A, U, re, oe) {
    return A.length === 0 ? U : U === re || U === oe ? wi(U) : U;
  }, gn = function(A, U) {
    return A === U || I(A) !== null ? !1 : (Ea && Mr(A), !0);
  }, gi = function(A, U) {
    if (Ru(A), ci(ye.beforeSanitizeElements, A, null), gn(A, U)) return !0;
    if (ta(A))
      return ii(A), !0;
    const re = nt(q(A));
    if (j = fr(ye.uponSanitizeElement, j, J, bt), ci(ye.uponSanitizeElement, A, {
      tagName: re,
      allowedTags: j
    }), gn(A, U)) return !0;
    if (gs(A, re))
      return ii(A), !0;
    if (se[re] || !(_e.tagCheck instanceof Function && _e.tagCheck(re)) && !j[re]) {
      const oe = zr(A, re, U);
      return oe === !1 && (ci(ye.afterSanitizeElements, A, null), gn(A, U)) ? !0 : oe;
    }
    if ($(A) === At.element && !Eu(A) || (re === "noscript" || re === "noembed" || re === "noframes") && Ft(O_, A.innerHTML))
      return ii(A), !0;
    if (Ve && A.nodeType === At.text) {
      const oe = ea(A.textContent);
      A.textContent !== oe && (ul(t.removed, { element: A.cloneNode() }), A.textContent = oe);
    }
    return ci(ye.afterSanitizeElements, A, null), gn(A, U);
  }, jr = function(A, U, re) {
    if ($e[U] || vs(U, A) || qt && (U === "id" || U === "name") && (re in i || re in Cu)) return !1;
    const oe = te[U] || _e.attributeCheck instanceof Function && _e.attributeCheck(U, A);
    return xe && Ft(ut, U) || Te && Ft(ee, U) ? !0 : oe ? Wn[U] || Ft(V, dl(re, N, "")) || (U === "src" || U === "xlink:href" || U === "href") && A !== "script" && xh(re, "data:") === 0 && dn[A] || He && !Ft(S, dl(re, N, "")) ? !0 : !re : Br(A) && dr(he.tagNameCheck, A) && dr(he.attributeNameCheck, U, A) || U === "is" && he.allowCustomizedBuiltInElements && dr(he.tagNameCheck, re);
  }, ms = et({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Br = function(A) {
    return !ms[Ka(A)] && Ft(F, A);
  }, Lu = function(A, U, re, oe) {
    if (ne && typeof v == "object" && typeof v.getAttributeType == "function" && !re) switch (v.getAttributeType(A, U)) {
      case "TrustedHTML":
        return ae(oe);
      case "TrustedScriptURL":
        return X(oe);
    }
    return oe;
  }, Pu = function(A, U, re, oe) {
    try {
      return re ? A.setAttributeNS(re, U, oe) : A.setAttribute(U, oe), ta(A) ? (ii(A), !1) : !0;
    } catch {
      return Qn(U, A), !1;
    }
  }, Hr = function(A, U) {
    return it && Ft(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, U) ? !0 : Ka(A) === "attributename" && $h(U, "href") !== null;
  }, hr = function(A, U) {
    if (ci(ye.beforeSanitizeAttributes, A, null), gn(A, U)) return;
    const re = A.attributes;
    if (!re || ta(A)) return;
    te = fr(ye.uponSanitizeAttribute, te, le, ti);
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: te,
      forceKeepAttr: void 0
    };
    let Ne = re.length;
    const Fe = nt(A.nodeName);
    for (; Ne--; ) {
      const Ge = re[Ne], mt = Ge.name, Ct = Ge.namespaceURI, Tt = Ge.value, Pt = nt(mt), $i = Tt;
      let Gt = mt === "value" ? $i : f_($i), ys = !1;
      if (oe.attrName = Pt, oe.attrValue = Gt, oe.keepAttr = !0, oe.forceKeepAttr = void 0, ci(ye.uponSanitizeAttribute, A, oe), Gt = oe.attrValue, vi && (Pt === "id" || Pt === "name") && xh(Gt, Aa) !== 0 && (Qn(mt, A, Ge), Gt = Aa + Gt, ys = !0), Hr(mt, Gt)) {
        Qn(mt, A, Ge);
        continue;
      }
      if (!oe.forceKeepAttr) {
        if (!oe.keepAttr) {
          Qn(mt, A, Ge);
          continue;
        }
        if (!Ye && Ft(Mh, Gt)) {
          Qn(mt, A, Ge);
          continue;
        }
        if (Ve && (Gt = ea(Gt)), !jr(Fe, Pt, Gt)) {
          Qn(mt, A, Ge);
          continue;
        }
        Gt = Lu(Fe, Pt, Ct, Gt), Gt !== $i && Pu(A, mt, Ct, Gt) && ys && Eh(t.removed);
      }
    }
    ci(ye.afterSanitizeAttributes, A, null), gn(A, U);
  }, ia = function(A) {
    let U = null;
    const re = ur(A);
    for (ci(ye.beforeSanitizeShadowDOM, A, null); U = re.nextNode(); )
      if (ci(ye.uponSanitizeShadowNode, U, null), gi(U, A), hr(U, A), zi(U.content) && ia(U.content), $(U) === At.element) {
        const oe = L(U);
        zi(oe) && (Vr(oe), ia(oe));
      }
    Ve && cr(A), ci(ye.afterSanitizeShadowDOM, A, null);
  }, Vr = function(A) {
    const U = [{
      node: A,
      shadow: null
    }];
    for (; U.length > 0; ) {
      const re = U.pop();
      if (re.shadow) {
        ia(re.shadow);
        continue;
      }
      const oe = re.node, Ne = $(oe) === At.element, Fe = O(oe);
      if (Fe) for (let Ge = Fe.length - 1; Ge >= 0; --Ge) U.push({
        node: Fe[Ge],
        shadow: null
      });
      if (Ne) {
        const Ge = pe ? pe(oe) : null;
        if (typeof Ge == "string" && nt(Ge) === "template") {
          const mt = oe.content;
          zi(mt) && U.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (Ne) {
        const Ge = L(oe);
        zi(Ge) && U.push({
          node: null,
          shadow: Ge
        }, {
          node: Ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(fe) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U = null, re = null, oe = null, Ne = null;
    if (Zn = !fe, Zn && (fe = "<!-->"), typeof fe != "string" && !Na(fe) && (fe = b_(fe), typeof fe != "string"))
      throw Cn("dirty is not a string, aborting");
    if (!t.isSupported) return fe;
    _t ? (j = bt, te = ti) : Pr(A), (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && (j = wi(j)), ye.uponSanitizeAttribute.length > 0 && (te = wi(te)), t.removed = [];
    const Fe = Ea && typeof fe != "string" && Na(fe);
    let Ge = [];
    const mt = Ai;
    if (Fe) {
      Iu(fe);
      const Pt = q(fe);
      if (typeof Pt == "string") {
        const $i = nt(Pt);
        if (!j[$i] || se[$i])
          throw Dr(fe), Cn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ta(fe))
        throw Dr(fe), Cn("root node is clobbered and cannot be sanitized in-place");
      Ge = Ur(fe), Ai = ac();
    } else if (Na(fe))
      U = bs("<!---->"), re = U.ownerDocument.importNode(fe, !0), re.nodeType === At.element && re.nodeName === "BODY" || re.nodeName === "HTML" ? U = re : U.appendChild(re), Vr(U);
    else {
      if (!kt && !Ve && !ct && fe.indexOf("<") === -1) return ne && Ui ? ae(fe) : fe;
      if (U = bs(fe), !U) return kt ? null : Ui ? B : "";
    }
    U && pi && ii(U.firstChild);
    const Ct = Fe ? fe : U;
    try {
      Fe && Vr(fe);
      const Pt = ur(Ct);
      for (; oe = Pt.nextNode(); )
        gi(oe, Ct), hr(oe, Ct), zi(oe.content) && ia(oe.content);
      Fe && Ou(fe, Ge);
    } catch (Pt) {
      throw Fe && (Dr(fe), ps(fe, Ge)), Pt;
    } finally {
      Ai = mt;
    }
    if (Fe) {
      if (ps(fe, Ge)) throw Cn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Ve && Oa(fe), fe;
    }
    if (kt) {
      if (Ve && Oa(U), Ot)
        for (Ne = Me.call(U.ownerDocument); U.firstChild; ) Ne.appendChild(U.firstChild);
      else Ne = U;
      return (te.shadowroot || te.shadowrootmode) && (Ne = ht.call(n, Ne, !0)), Ne;
    }
    let Tt = ct ? U.outerHTML : U.innerHTML;
    return ct && j["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && Ft($_, U.ownerDocument.doctype.name) && (Tt = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + Tt), Ve && (Tt = ea(Tt)), ne && Ui ? ae(Tt) : Tt;
  }, t.setConfig = function() {
    let fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pr(fe), _t = !0, bt = j, ti = te;
  }, t.clearConfig = function() {
    vn = null, _t = !1, bt = null, ti = null, ne = z, B = "";
  }, t.isValidAttribute = function(fe, A, U) {
    vn || Pr({});
    const re = nt(fe), oe = nt(A);
    return typeof U == "string" && (Hr(A, U) || !Ye && Ft(Mh, U)) ? !1 : jr(re, oe, U);
  }, t.addHook = function(fe, A) {
    typeof A == "function" && fi(ye, fe) && ul(ye[fe], A);
  }, t.removeHook = function(fe, A) {
    if (fi(ye, fe)) {
      if (A !== void 0) {
        const U = u_(ye[fe], A);
        return U === -1 ? void 0 : d_(ye[fe], U, 1)[0];
      }
      return Eh(ye[fe]);
    }
  }, t.removeHooks = function(fe) {
    fi(ye, fe) && (ye[fe] = []);
  }, t.removeAllHooks = function() {
    ye = Uh();
  }, t;
}
var sb = lb();
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc, zh;
function L_() {
  if (zh) return hc;
  zh = 1;
  var e = /["'&<>]/;
  hc = t;
  function t(i) {
    var n = "" + i, a = e.exec(n);
    if (!a)
      return n;
    var r, s = "", c = 0, d = 0;
    for (c = a.index; c < n.length; c++) {
      switch (n.charCodeAt(c)) {
        case 34:
          r = "&quot;";
          break;
        case 38:
          r = "&amp;";
          break;
        case 39:
          r = "&#39;";
          break;
        case 60:
          r = "&lt;";
          break;
        case 62:
          r = "&gt;";
          break;
        default:
          continue;
      }
      d !== c && (s += n.substring(d, c)), d = c + 1, s += r;
    }
    return d !== c ? s + n.substring(d, c) : s;
  }
  return hc;
}
var P_ = L_();
const ho = /* @__PURE__ */ Pd(P_);
function ob() {
  return globalThis._nc_l10n_locale;
}
function D_() {
  return ob().replaceAll(/_/g, "-");
}
function us() {
  return globalThis._nc_l10n_language;
}
function F_(e) {
  const t = us();
  return [
    "ae",
    // Avestan
    "ar",
    // 'العربية', Arabic
    "arc",
    // Aramaic
    "arz",
    // 'مصرى', Egyptian
    "bcc",
    // 'بلوچی مکرانی', Southern Balochi
    "bqi",
    // 'بختياري', Bakthiari
    "ckb",
    // 'Soranî / کوردی', Sorani
    "dv",
    // Dhivehi
    "fa",
    // 'فارسی', Persian
    "glk",
    // 'گیلکی', Gilaki
    "ha",
    // 'هَوُسَ', Hausa
    "he",
    // 'עברית', Hebrew
    "khw",
    // 'کھوار', Khowar
    "ks",
    // 'कॉशुर / کٲشُر', Kashmiri
    "ku",
    // 'Kurdî / كوردی', Kurdish
    "mzn",
    // 'مازِرونی', Mazanderani
    "nqo",
    // 'ߒߞߏ', N’Ko
    "pnb",
    // 'پنجابی', Western Punjabi
    "ps",
    // 'پښتو', Pashto,
    "sd",
    // 'سنڌي', Sindhi
    "ug",
    // 'Uyghurche / ئۇيغۇرچە', Uyghur
    "ur",
    // 'اردو', Urdu
    "ur-PK",
    // 'اردو', Urdu (nextcloud BCP47 variant)
    "uz-AF",
    // 'اوزبیکی', Uzbek Afghan
    "yi"
    // 'ייִדיש', Yiddish
  ].includes(t);
}
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function ub(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function w(e, t, i, n, a) {
  const r = typeof i == "object" ? i : void 0, s = typeof n == "number" ? n : typeof i == "number" ? i : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, d = (C) => C, y = (c.sanitize ? sb.sanitize : d) || d, v = c.escape ? ho : d, g = (C) => typeof C == "string" || typeof C == "number", m = (C, O, I) => C.replace(/%n/g, "" + I).replace(/{([^{}]*)}/g, (L, D) => {
    if (O === void 0 || !(D in O))
      return v(L);
    const R = O[D];
    return g(R) ? v(`${R}`) : typeof R == "object" && g(R.value) ? (R.escape !== !1 ? ho : d)(`${R.value}`) : v(L);
  });
  let T = (a?.bundle ?? ub(e)).translations[t] || t;
  return T = Array.isArray(T) ? T[0] : T, y(typeof r == "object" || s !== void 0 ? m(
    T,
    r,
    s
  ) : T);
}
function Ut(e, t, i, n, a, r) {
  const s = "_" + t + "_::_" + i + "_", c = r?.bundle ?? ub(e), d = c.translations[s];
  if (typeof d < "u") {
    const y = d;
    if (Array.isArray(y)) {
      const v = c.pluralFunction(n);
      return w(e, y[v], a, n, r);
    }
  }
  return n === 1 ? w(e, t, a, n, r) : w(e, i, a, n, r);
}
function M_(e, t = us()) {
  switch (t === "pt-BR" && (t = "xbr"), t.length > 3 && (t = t.substring(0, t.lastIndexOf("-"))), t) {
    case "az":
    case "bo":
    case "dz":
    case "id":
    case "ja":
    case "jv":
    case "ka":
    case "km":
    case "kn":
    case "ko":
    case "ms":
    case "th":
    case "tr":
    case "vi":
    case "zh":
      return 0;
    case "af":
    case "bn":
    case "bg":
    case "ca":
    case "da":
    case "de":
    case "el":
    case "en":
    case "eo":
    case "es":
    case "et":
    case "eu":
    case "fa":
    case "fi":
    case "fo":
    case "fur":
    case "fy":
    case "gl":
    case "gu":
    case "ha":
    case "he":
    case "hu":
    case "is":
    case "it":
    case "ku":
    case "lb":
    case "ml":
    case "mn":
    case "mr":
    case "nah":
    case "nb":
    case "ne":
    case "nl":
    case "nn":
    case "no":
    case "oc":
    case "om":
    case "or":
    case "pa":
    case "pap":
    case "ps":
    case "pt":
    case "so":
    case "sq":
    case "sv":
    case "sw":
    case "ta":
    case "te":
    case "tk":
    case "ur":
    case "zu":
      return e === 1 ? 0 : 1;
    case "am":
    case "bh":
    case "fil":
    case "fr":
    case "gun":
    case "hi":
    case "hy":
    case "ln":
    case "mg":
    case "nso":
    case "xbr":
    case "ti":
    case "wa":
      return e === 0 || e === 1 ? 0 : 1;
    case "be":
    case "bs":
    case "hr":
    case "ru":
    case "sh":
    case "sr":
    case "uk":
      return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    case "cs":
    case "sk":
      return e === 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    case "ga":
      return e === 1 ? 0 : e === 2 ? 1 : 2;
    case "lt":
      return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    case "sl":
      return e % 100 === 1 ? 0 : e % 100 === 2 ? 1 : e % 100 === 3 || e % 100 === 4 ? 2 : 3;
    case "mk":
      return e % 10 === 1 ? 0 : 1;
    case "mt":
      return e === 1 ? 0 : e === 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
    case "lv":
      return e === 0 ? 0 : e % 10 === 1 && e % 100 !== 11 ? 1 : 2;
    case "pl":
      return e === 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;
    case "cy":
      return e === 1 ? 0 : e === 2 ? 1 : e === 8 || e === 11 ? 2 : 3;
    case "ro":
      return e === 1 ? 0 : e === 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
    case "ar":
      return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5;
    default:
      return 0;
  }
}
function U_(e, t = () => "", i = 256) {
  const n = /* @__PURE__ */ new Map();
  let a;
  return (...r) => {
    if (r.length !== 2 || r.some((y) => typeof y != "string")) return e(...r);
    const s = t();
    s !== a && (n.clear(), a = s);
    const c = JSON.stringify(r);
    if (n.has(c)) return n.get(c);
    const d = e(...r);
    return n.size >= i && n.delete(n.keys().next().value), n.set(c, d), d;
  };
}
class po {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? po.GLOBAL_SCOPE_PERSISTENT : po.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
  }
  scopeKey(t) {
    return `${this.scope}${t}`;
  }
  setItem(t, i) {
    this.wrapped.setItem(this.scopeKey(t), i);
  }
  getItem(t) {
    return this.wrapped.getItem(this.scopeKey(t));
  }
  removeItem(t) {
    this.wrapped.removeItem(this.scopeKey(t));
  }
  clear() {
    Object.keys(this.wrapped).filter((t) => t.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
  }
}
class z_ {
  appId;
  persisted = !1;
  clearedOnLogout = !1;
  constructor(t) {
    this.appId = t;
  }
  persist(t = !0) {
    return this.persisted = t, this;
  }
  clearOnLogout(t = !0) {
    return this.clearedOnLogout = t, this;
  }
  build() {
    return new po(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function cb(e) {
  return new z_(e);
}
function j_() {
  try {
    return fo("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var pc, jh;
function db() {
  if (jh) return pc;
  jh = 1;
  var e = {};
  return pc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, pc;
}
var vc, Bh;
function fb() {
  if (Bh) return vc;
  Bh = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return vc = {
    MAX_LENGTH: t,
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_SAFE_INTEGER: i,
    RELEASE_TYPES: [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ],
    SEMVER_SPEC_VERSION: e,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }, vc;
}
var zs = { exports: {} }, Hh;
function B_() {
  return Hh || (Hh = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = fb(), r = db();
    t = e.exports = {};
    const s = t.re = [], c = t.safeRe = [], d = t.src = [], y = t.safeSrc = [], v = t.t = {};
    let g = 0;
    const m = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", a],
      [m, n]
    ], T = (O) => {
      for (const [I, L] of k)
        O = O.split(`${I}*`).join(`${I}{0,${L}}`).split(`${I}+`).join(`${I}{1,${L}}`);
      return O;
    }, C = (O, I, L) => {
      const D = T(I), R = g++;
      r(O, R, I), v[O] = R, d[R] = I, y[R] = D, s[R] = new RegExp(I, L ? "g" : void 0), c[R] = new RegExp(D, L ? "g" : void 0);
    };
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"), C("NUMERICIDENTIFIERLOOSE", "\\d+"), C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), C("MAINVERSION", `(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})`), C("MAINVERSIONLOOSE", `(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASEIDENTIFIER", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIER]})`), C("PRERELEASEIDENTIFIERLOOSE", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASE", `(?:-(${d[v.PRERELEASEIDENTIFIER]}(?:\\.${d[v.PRERELEASEIDENTIFIER]})*))`), C("PRERELEASELOOSE", `(?:-?(${d[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[v.PRERELEASEIDENTIFIERLOOSE]})*))`), C("BUILDIDENTIFIER", `${m}+`), C("BUILD", `(?:\\+(${d[v.BUILDIDENTIFIER]}(?:\\.${d[v.BUILDIDENTIFIER]})*))`), C("FULLPLAIN", `v?${d[v.MAINVERSION]}${d[v.PRERELEASE]}?${d[v.BUILD]}?`), C("FULL", `^${d[v.FULLPLAIN]}$`), C("LOOSEPLAIN", `[v=\\s]*${d[v.MAINVERSIONLOOSE]}${d[v.PRERELEASELOOSE]}?${d[v.BUILD]}?`), C("LOOSE", `^${d[v.LOOSEPLAIN]}$`), C("GTLT", "((?:<|>)?=?)"), C("XRANGEIDENTIFIERLOOSE", `${d[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), C("XRANGEIDENTIFIER", `${d[v.NUMERICIDENTIFIER]}|x|X|\\*`), C("XRANGEPLAIN", `[v=\\s]*(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:${d[v.PRERELEASE]})?${d[v.BUILD]}?)?)?`), C("XRANGEPLAINLOOSE", `[v=\\s]*(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:${d[v.PRERELEASELOOSE]})?${d[v.BUILD]}?)?)?`), C("XRANGE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAIN]}$`), C("XRANGELOOSE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAINLOOSE]}$`), C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), C("COERCE", `${d[v.COERCEPLAIN]}(?:$|[^\\d])`), C("COERCEFULL", d[v.COERCEPLAIN] + `(?:${d[v.PRERELEASE]})?(?:${d[v.BUILD]})?(?:$|[^\\d])`), C("COERCERTL", d[v.COERCE], !0), C("COERCERTLFULL", d[v.COERCEFULL], !0), C("LONETILDE", "(?:~>?)"), C("TILDETRIM", `(\\s*)${d[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", C("TILDE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAIN]}$`), C("TILDELOOSE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAINLOOSE]}$`), C("LONECARET", "(?:\\^)"), C("CARETTRIM", `(\\s*)${d[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", C("CARET", `^${d[v.LONECARET]}${d[v.XRANGEPLAIN]}$`), C("CARETLOOSE", `^${d[v.LONECARET]}${d[v.XRANGEPLAINLOOSE]}$`), C("COMPARATORLOOSE", `^${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]})$|^$`), C("COMPARATOR", `^${d[v.GTLT]}\\s*(${d[v.FULLPLAIN]})$|^$`), C("COMPARATORTRIM", `(\\s*)${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]}|${d[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", C("HYPHENRANGE", `^\\s*(${d[v.XRANGEPLAIN]})\\s+-\\s+(${d[v.XRANGEPLAIN]})\\s*$`), C("HYPHENRANGELOOSE", `^\\s*(${d[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[v.XRANGEPLAINLOOSE]})\\s*$`), C("STAR", "(<|>)?=?\\s*\\*"), C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(zs, zs.exports)), zs.exports;
}
var bc, Vh;
function H_() {
  if (Vh) return bc;
  Vh = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return bc = (n) => n ? typeof n != "object" ? e : n : t, bc;
}
var gc, qh;
function V_() {
  if (qh) return gc;
  qh = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), s = e.test(a);
    return r && s && (n = +n, a = +a), n === a ? 0 : r && !s ? -1 : s && !r ? 1 : n < a ? -1 : 1;
  };
  return gc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, gc;
}
var mc, Gh;
function hb() {
  if (Gh) return mc;
  Gh = 1;
  const e = db(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = fb(), { safeRe: n, t: a } = B_(), r = H_(), { compareIdentifiers: s } = V_(), c = (y, v) => {
    const g = v.split(".");
    if (g.length > y.length)
      return !1;
    for (let m = 0; m < g.length; m++)
      if (s(y[m], g[m]) !== 0)
        return !1;
    return !0;
  };
  class d {
    constructor(v, g) {
      if (g = r(g), v instanceof d) {
        if (v.loose === !!g.loose && v.includePrerelease === !!g.includePrerelease)
          return v;
        v = v.version;
      } else if (typeof v != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof v}".`);
      if (v.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", v, g), this.options = g, this.loose = !!g.loose, this.includePrerelease = !!g.includePrerelease;
      const m = v.trim().match(g.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!m)
        throw new TypeError(`Invalid Version: ${v}`);
      if (this.raw = v, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      m[4] ? this.prerelease = m[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const T = +k;
          if (T >= 0 && T < i)
            return T;
        }
        return k;
      }) : this.prerelease = [], this.build = m[5] ? m[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(v) {
      if (e("SemVer.compare", this.version, this.options, v), !(v instanceof d)) {
        if (typeof v == "string" && v === this.version)
          return 0;
        v = new d(v, this.options);
      }
      return v.version === this.version ? 0 : this.compareMain(v) || this.comparePre(v);
    }
    compareMain(v) {
      return v instanceof d || (v = new d(v, this.options)), this.major < v.major ? -1 : this.major > v.major ? 1 : this.minor < v.minor ? -1 : this.minor > v.minor ? 1 : this.patch < v.patch ? -1 : this.patch > v.patch ? 1 : 0;
    }
    comparePre(v) {
      if (v instanceof d || (v = new d(v, this.options)), this.prerelease.length && !v.prerelease.length)
        return -1;
      if (!this.prerelease.length && v.prerelease.length)
        return 1;
      if (!this.prerelease.length && !v.prerelease.length)
        return 0;
      let g = 0;
      do {
        const m = this.prerelease[g], k = v.prerelease[g];
        if (e("prerelease compare", g, m, k), m === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (m === void 0)
          return -1;
        if (m === k)
          continue;
        return s(m, k);
      } while (++g);
    }
    compareBuild(v) {
      v instanceof d || (v = new d(v, this.options));
      let g = 0;
      do {
        const m = this.build[g], k = v.build[g];
        if (e("build compare", g, m, k), m === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (m === void 0)
          return -1;
        if (m === k)
          continue;
        return s(m, k);
      } while (++g);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(v, g, m) {
      if (v.startsWith("pre")) {
        if (!g && m === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (g) {
          const k = `-${g}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!k || k[1] !== g)
            throw new Error(`invalid identifier: ${g}`);
        }
      }
      switch (v) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", g, m);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", g, m);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", g, m), this.inc("pre", g, m);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", g, m), this.inc("pre", g, m);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const k = Number(m) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [k];
          else {
            let T = this.prerelease.length;
            for (; --T >= 0; )
              typeof this.prerelease[T] == "number" && (this.prerelease[T]++, T = -2);
            if (T === -1) {
              if (g === this.prerelease.join(".") && m === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (g) {
            let T = [g, k];
            if (m === !1 && (T = [g]), c(this.prerelease, g)) {
              const C = this.prerelease[g.split(".").length];
              isNaN(C) && (this.prerelease = T);
            } else
              this.prerelease = T;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${v}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return mc = d, mc;
}
var yc, Kh;
function q_() {
  if (Kh) return yc;
  Kh = 1;
  const e = hb();
  return yc = (i, n) => new e(i, n).major, yc;
}
var G_ = q_();
const Wh = /* @__PURE__ */ Pd(G_);
var _c, Yh;
function K_() {
  if (Yh) return _c;
  Yh = 1;
  const e = hb();
  return _c = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, _c;
}
var wc, Zh;
function W_() {
  if (Zh) return wc;
  Zh = 1;
  const e = K_();
  return wc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, wc;
}
var Y_ = W_();
const Z_ = /* @__PURE__ */ Pd(Y_);
class X_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Z_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Wh(t.getVersion()) !== Wh(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + t.getVersion() + " with " + this.getVersion()
    ), this.bus = t;
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, i) {
    this.bus.subscribe(t, i);
  }
  unsubscribe(t, i) {
    this.bus.unsubscribe(t, i);
  }
  emit(t, ...i) {
    this.bus.emit(t, ...i);
  }
}
class J_ {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, i) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).concat(
        i
      )
    );
  }
  unsubscribe(t, i) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).filter((n) => n !== i)
    );
  }
  emit(t, ...i) {
    (this.handlers.get(t) || []).forEach((a) => {
      try {
        a(i[0]);
      } catch (r) {
        console.error("could not invoke event listener", r);
      }
    });
  }
}
let hl = null;
function Dd() {
  return hl !== null ? hl : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? hl = new X_(window._nc_event_bus) : hl = window._nc_event_bus = new J_(), hl);
}
function pb(e, t) {
  Dd().subscribe(e, t);
}
function Q_(e, t) {
  Dd().unsubscribe(e, t);
}
function Fn(e, ...t) {
  Dd().emit(e, ...t);
}
const vb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const e0 = Object.prototype.toString, t0 = (e) => e0.call(e) === "[object Object]", mr = () => {
}, i0 = /* @__PURE__ */ n0();
function n0() {
  var e, t, i;
  return vb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function kc(e) {
  return Array.isArray(e) ? e : [e];
}
function a0(e, t, i) {
  return qe(e, t, {
    ...i,
    immediate: !0
  });
}
const bb = vb ? window : void 0;
function yl(e) {
  var t;
  const i = Pn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function Or(...e) {
  const t = (n, a, r, s) => (n.addEventListener(a, r, s), () => n.removeEventListener(a, r, s)), i = H(() => {
    const n = kc(Pn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return a0(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => yl(r))) !== null && n !== void 0 ? n : [bb].filter((r) => r != null),
      kc(Pn(i.value ? e[1] : e[0])),
      kc(u(i.value ? e[2] : e[1])),
      Pn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, s], c, d) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const y = t0(s) ? { ...s } : s, v = n.flatMap((g) => a.flatMap((m) => r.map((k) => t(g, m, k, y))));
    d(() => {
      v.forEach((g) => g());
    });
  }, { flush: "post" });
}
let Xh = !1;
function Jh(e, t, i = {}) {
  const { window: n = bb, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: c = !1 } = i;
  if (!n) return c ? {
    stop: mr,
    cancel: mr,
    trigger: mr
  } : mr;
  if (i0 && !Xh) {
    Xh = !0;
    const O = { passive: !0 };
    Array.from(n.document.body.children).forEach((I) => I.addEventListener("click", mr, O)), n.document.documentElement.addEventListener("click", mr, O);
  }
  let d = !0;
  const y = (O) => Pn(a).some((I) => {
    if (typeof I == "string") return Array.from(n.document.querySelectorAll(I)).some((L) => L === O.target || O.composedPath().includes(L));
    {
      const L = yl(I);
      return L && (O.target === L || O.composedPath().includes(L));
    }
  });
  function v(O) {
    const I = Pn(O);
    return I && I.$.subTree.shapeFlag === 16;
  }
  function g(O, I) {
    const L = Pn(O), D = L.$.subTree && L.$.subTree.children;
    return D == null || !Array.isArray(D) ? !1 : D.some((R) => R.el === I.target || I.composedPath().includes(R.el));
  }
  const m = (O) => {
    const I = yl(e);
    if (O.target != null && !(!(I instanceof Element) && v(e) && g(e, O)) && !(!I || I === O.target || O.composedPath().includes(I))) {
      if ("detail" in O && O.detail === 0 && (d = !y(O)), !d) {
        d = !0;
        return;
      }
      t(O);
    }
  };
  let k = !1;
  const T = [
    Or(n, "click", (O) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), m(O));
    }, {
      passive: !0,
      capture: r
    }),
    Or(n, "pointerdown", (O) => {
      const I = yl(e);
      d = !y(O) && !!(I && !O.composedPath().includes(I));
    }, { passive: !0 }),
    s && Or(n, "blur", (O) => {
      setTimeout(() => {
        const I = yl(e);
        let L = n.document.activeElement;
        for (; L?.shadowRoot; ) L = L.shadowRoot.activeElement;
        L?.tagName === "IFRAME" && !I?.contains(n.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), C = () => T.forEach((O) => O());
  return c ? {
    stop: C,
    cancel: () => {
      d = !1;
    },
    trigger: (O) => {
      d = !0, m(O), d = !1;
    }
  } : C;
}
function r0(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, c = /* @__PURE__ */ Nt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Nt({
    x: 0,
    y: 0
  }), y = H(() => c.x - d.x), v = H(() => c.y - d.y), { max: g, abs: m } = Math, k = H(() => g(m(y.value), m(v.value)) >= i), T = /* @__PURE__ */ rv(!1), C = H(() => k.value ? m(y.value) > m(v.value) ? y.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), O = ($) => [$.touches[0].clientX, $.touches[0].clientY], I = ($, q) => {
    c.x = $, c.y = q;
  }, L = ($, q) => {
    d.x = $, d.y = q;
  }, D = {
    passive: s,
    capture: !s
  }, R = ($) => {
    T.value && a?.($, C.value), T.value = !1;
  }, pe = [
    Or(e, "touchstart", ($) => {
      if ($.touches.length !== 1) return;
      const [q, K] = O($);
      I(q, K), L(q, K), r?.($);
    }, D),
    Or(e, "touchmove", ($) => {
      if ($.touches.length !== 1) return;
      const [q, K] = O($);
      L(q, K), D.capture && !D.passive && Math.abs(y.value) > Math.abs(v.value) && $.preventDefault(), !T.value && k.value && (T.value = !0), T.value && n?.($);
    }, D),
    Or(e, ["touchend", "touchcancel"], R, D)
  ];
  return {
    isSwiping: T,
    direction: C,
    coordsStart: c,
    coordsEnd: d,
    lengthX: y,
    lengthY: v,
    stop: () => pe.forEach(($) => $())
  };
}
var l0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
  __name: "splitpanes",
  props: {
    horizontal: {
      type: Boolean,
      default: !1
    },
    pushOtherPanes: {
      type: Boolean,
      default: !0
    },
    maximizePanes: {
      type: Boolean,
      default: !0
    },
    rtl: {
      type: Boolean,
      default: !1
    },
    firstSplitter: {
      type: Boolean,
      default: !1
    },
    keyboardStep: {
      type: Number,
      default: 5
    }
  },
  emits: [
    "ready",
    "resize",
    "resized",
    "pane-click",
    "pane-maximize",
    "pane-add",
    "pane-remove",
    "splitter-click",
    "splitter-dblclick",
    "direction-changed"
  ],
  setup(e, { emit: t }) {
    let i = t, n = e, a = Dy(), r = Py(), s = /* @__PURE__ */ G([]), c = H(() => s.value.reduce((ee, S) => (ee[~~S.id] = S) && ee, {})), d = H(() => s.value.length), y = /* @__PURE__ */ G(null), v = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), m = /* @__PURE__ */ G({
      splitter: null,
      timeoutId: null
    }), k = H(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": g.value.dragging,
      "splitpanes--ready": v.value
    })), T = () => {
      document.addEventListener("mousemove", I, { passive: !1 }), document.addEventListener("mouseup", L), "ontouchstart" in window && (document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", L));
    }, C = () => {
      document.removeEventListener("mousemove", I, { passive: !1 }), document.removeEventListener("mouseup", L), "ontouchstart" in window && (document.removeEventListener("touchmove", I, { passive: !1 }), document.removeEventListener("touchend", L));
    }, O = (ee, S) => {
      let N = ee.target.closest(".splitpanes__splitter");
      if (N) {
        let { left: F, top: V } = N.getBoundingClientRect(), { clientX: j, clientY: J } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
        g.value.cursorOffset = n.horizontal ? J - V : j - F;
      }
      T(), g.value.mouseDown = !0, g.value.activeSplitter = S, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
    }, I = (ee) => {
      g.value.mouseDown && (ee.preventDefault(), g.value.dragging || (window.getSelection()?.removeAllRanges(), g.value.dragging = !0), requestAnimationFrame(() => {
        K($(ee)), De("resize", { event: ee }, !0);
      }));
    }, L = (ee) => {
      g.value.dragging && (window.getSelection()?.removeAllRanges(), De("resized", { event: ee }, !0)), g.value.mouseDown = !1, g.value.activeSplitter = null, setTimeout(() => {
        g.value.dragging = !1, C(), document.documentElement.style.cursor = "";
      }, 100);
    }, D = (ee, S) => {
      "ontouchstart" in window && (ee.preventDefault(), m.value.splitter === S ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, R(ee, S), m.value.splitter = null) : (m.value.splitter = S, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), g.value.dragging || De("splitter-click", {
        event: ee,
        index: S
      }, !0);
    }, R = (ee, S) => {
      if (De("splitter-dblclick", {
        event: ee,
        index: S
      }, !0), n.maximizePanes) {
        let N = 0;
        s.value = s.value.map((F, V) => (F.size = V === S ? F.max : F.min, V !== S && (N += F.min), F)), s.value[S].size -= N, De("pane-maximize", {
          event: ee,
          index: S,
          pane: s.value[S]
        }), De("resized", {
          event: ee,
          index: S
        }, !0);
      }
    }, pe = (ee, S) => {
      if (!n.keyboardStep) return;
      let N = n.horizontal ? ee.key === "ArrowDown" : ee.key === "ArrowRight", F = n.horizontal ? ee.key === "ArrowUp" : ee.key === "ArrowLeft";
      if (!N && !F) return;
      ee.preventDefault(), g.value.activeSplitter = S;
      let V = (N ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), j = B(S) + s.value[S].size;
      Y(Math.min(Math.max(j + V * n.keyboardStep, 0), 100)), De("resize", { event: ee }, !0), De("resized", { event: ee }, !0), g.value.activeSplitter = null;
    }, Q = (ee, S) => {
      let N = c.value[S];
      N && De("pane-click", {
        event: ee,
        index: N.index,
        pane: N
      });
    }, $ = (ee) => {
      let S = y.value.getBoundingClientRect(), { clientX: N, clientY: F } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
      return {
        x: N - (n.horizontal ? 0 : g.value.cursorOffset) - S.left,
        y: F - (n.horizontal ? g.value.cursorOffset : 0) - S.top
      };
    }, q = (ee) => {
      ee = ee[n.horizontal ? "y" : "x"];
      let S = y.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (ee = S - ee), ee * 100 / S;
    }, K = (ee) => {
      Y(q(ee));
    }, Y = (ee) => {
      let S = g.value.activeSplitter;
      if (S === null || S >= s.value.length - 1) return;
      let N = {
        prevPanesSize: B(S),
        nextPanesSize: z(S),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, F = 0 + (n.pushOtherPanes ? 0 : N.prevPanesSize), V = 100 - (n.pushOtherPanes ? 0 : N.nextPanesSize);
      ee = Math.max(Math.min(ee, V), F);
      let j = [S, S + 1], J = s.value[j[0]] || null, te = s.value[j[1]] || null, le = J !== null && J.max < 100 && ee >= J.max + N.prevPanesSize, he = te !== null && te.max < 100 && ee <= 100 - (te.max + z(S + 1));
      if (le || he) {
        le ? (J.size = J.max, te.size = Math.min(Math.max(100 - J.max - N.prevPanesSize - N.nextPanesSize, te.min), te.max)) : (J.size = Math.min(Math.max(100 - te.max - N.prevPanesSize - z(S + 1), J.min), J.max), te.size = te.max);
        return;
      }
      if (n.pushOtherPanes) {
        let se = ne(N, ee);
        if (!se) return;
        ({ sums: N, panesToResize: j } = se), J = s.value[j[0]] || null, te = s.value[j[1]] || null;
      }
      J !== null && (J.size = Math.min(Math.max(ee - N.prevPanesSize - N.prevReachedMinPanes, J.min), J.max)), te !== null && (te.size = Math.min(Math.max(100 - ee - N.nextPanesSize - N.nextReachedMinPanes, te.min), te.max));
    }, ne = (ee, S) => {
      let N = g.value.activeSplitter, F = [N, N + 1];
      if (S < ee.prevPanesSize + s.value[F[0]].min) {
        if (F[0] = x(N).index, ee.prevReachedMinPanes = 0, F[0] < N && s.value.forEach((V, j) => {
          j > F[0] && j <= N && (V.size = V.min, ee.prevReachedMinPanes += V.min);
        }), F[0] === void 0) return ee.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((V, j) => {
          j > 0 && j <= N && (V.size = V.min, ee.prevReachedMinPanes += V.min);
        }), s.value[F[1]].size = 100 - ee.prevReachedMinPanes - s.value[0].min - ee.prevPanesSize - ee.nextPanesSize, null;
        ee.prevPanesSize = B(F[0]);
      }
      return S > 100 - ee.nextPanesSize - s.value[F[1]].min && (F[1] = P(N).index, ee.nextReachedMinPanes = 0, F[1] > N + 1 && s.value.forEach((V, j) => {
        j > N && j < F[1] && (V.size = V.min, ee.nextReachedMinPanes += V.min);
      }), ee.nextPanesSize = F[1] === void 0 ? 0 : z(F[1] - 1), F[1] === void 0) ? (ee.nextReachedMinPanes = 0, s.value.forEach((V, j) => {
        j >= N + 1 && (V.size = V.min, ee.nextReachedMinPanes += V.min);
      }), F[0] !== void 0 && (s.value[F[0]].size = 100 - ee.prevPanesSize - z(F[0] - 1)), null) : {
        sums: ee,
        panesToResize: F
      };
    }, B = (ee) => s.value.reduce((S, N, F) => S + (F < ee ? N.size : 0), 0), z = (ee) => s.value.reduce((S, N, F) => S + (F > ee + 1 ? N.size : 0), 0), x = (ee) => [...s.value].reverse().find((S) => S.index < ee && S.size > S.min) || {}, P = (ee) => s.value.find((S) => S.index > ee + 1 && S.size > S.min) || {}, Z = () => {
      let ee = Array.from(y.value?.children || []);
      for (let S of ee) {
        let N = S.classList.contains("splitpanes__pane"), F = S.classList.contains("splitpanes__splitter");
        !N && !F && (S.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (ee, S, N = !1) => {
      let F = ee - 1, V = document.createElement("div");
      V.classList.add("splitpanes__splitter"), N || (V.onmousedown = (j) => O(j, F), typeof window < "u" && "ontouchstart" in window && (V.ontouchstart = (j) => O(j, F)), V.onclick = (j) => D(j, F + 1), n.keyboardStep && (V.setAttribute("tabindex", "0"), V.setAttribute("role", "separator"), V.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), V.onkeydown = (j) => pe(j, F))), V.ondblclick = (j) => R(j, F + 1), S.parentNode.insertBefore(V, S);
    }, X = (ee) => {
      ee.onmousedown = null, ee.onclick = null, ee.ondblclick = null, ee.onkeydown = null, ee.remove();
    }, ve = () => {
      let ee = Array.from(y.value?.children || []);
      for (let N of ee) N.className.includes("splitpanes__splitter") && X(N);
      let S = 0;
      for (let N of ee) N.className.includes("splitpanes__pane") && (!S && n.firstSplitter ? ae(S, N, !0) : S && ae(S, N), S++);
    }, Ce = ({ uid: ee, ...S }) => {
      let N = c.value[ee];
      for (let [F, V] of Object.entries(S)) N[F] = V;
    }, Le = !1, Oe = (ee) => {
      let S = -1;
      Array.from(y.value?.children || []).some((N) => (N.className.includes("splitpanes__pane") && S++, N.isSameNode(ee.el))), s.value.splice(S, 0, {
        ...ee,
        index: S
      }), s.value.forEach((N, F) => N.index = F), v.value && !Le && (Le = !0, Rt(() => {
        ve(), Xe({ addedPane: s.value[S] }), De("pane-add", { pane: s.value[S] }), Le = !1;
      }));
    }, Me = (ee) => {
      let S = s.value.findIndex((F) => F.id === ee);
      s.value[S].el = null;
      let N = s.value.splice(S, 1)[0];
      s.value.forEach((F, V) => F.index = V), Rt(() => {
        ve(), De("pane-remove", { pane: N }), Xe({ removedPane: {
          ...N
        } });
      });
    }, Xe = (ee = {}) => {
      !ee.addedPane && !ee.removedPane ? ye() : s.value.some((S) => S.givenSize !== null || S.min || S.max < 100) ? Re(ee) : ht(), v.value && De("resized");
    }, ht = () => {
      let ee = 100 / d.value, S = 100, N = [], F = [];
      for (let V of s.value) V.size = Math.max(Math.min(ee, V.max), V.min), S -= V.size, V.size >= V.max && N.push(V.id), V.size <= V.min && F.push(V.id);
      Math.abs(S) > 0.1 && me(S, N, F);
    }, ye = () => {
      let ee = 100, S = [], N = [], F = 0;
      for (let j of s.value) ee -= j.size, j.givenSize !== null && F++, j.size >= j.max && S.push(j.id), j.size <= j.min && N.push(j.id);
      let V = 100;
      if (ee > 0.1) {
        for (let j of s.value) j.givenSize === null && (j.size = Math.max(Math.min(ee / (d.value - F), j.max), j.min)), V -= j.size;
        V > 0.1 && me(V, S, N);
      }
    }, Re = ({ addedPane: ee, removedPane: S } = {}) => {
      let N = s.value.reduce((le, he) => le + (he.givenSize === null ? 0 : he.givenSize), 0), F = s.value.filter((le) => le.givenSize === null).length, V = F > 0 ? (100 - N) / F : 0, j = 0, J = [], te = [];
      for (let le of s.value) j -= le.size, le.size >= le.max && J.push(le.id), le.size <= le.min && te.push(le.id);
      if (!(Math.abs(j) < 0.1)) {
        j = 100;
        for (let le of s.value) le.givenSize === null && (le.size = Math.max(Math.min(V, le.max), le.min)), j -= le.size, le.size >= le.max && J.push(le.id), le.size <= le.min && te.push(le.id);
        Math.abs(j) > 0.1 && me(j, J, te);
      }
    }, me = (ee, S, N) => {
      let F;
      F = ee > 0 ? ee / (d.value - S.length) : ee / (d.value - N.length), s.value.forEach((V, j) => {
        if (ee > 0 && !S.includes(V.id)) {
          let J = Math.max(Math.min(V.size + F, V.max), V.min), te = J - V.size;
          ee -= te, V.size = J;
        } else if (!N.includes(V.id)) {
          let J = Math.max(Math.min(V.size + F, V.max), V.min), te = J - V.size;
          ee -= te, V.size = J;
        }
      }), Math.abs(ee) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, De = (ee, S = void 0, N = !1) => {
      let F = S?.index ?? g.value.activeSplitter ?? null;
      i(ee, {
        ...S,
        ...F !== null && { index: F },
        ...N && F !== null && {
          prevPane: s.value[F - +!!n.firstSplitter],
          nextPane: s.value[F + +!n.firstSplitter]
        },
        panes: s.value.map((V) => ({
          min: V.min,
          max: V.max,
          size: V.size
        }))
      });
    };
    qe(() => n.firstSplitter, () => ve()), qe(() => n.horizontal, (ee) => Rt(() => {
      i("direction-changed", {
        horizontal: ee,
        panes: s.value.map((S) => ({
          min: S.min,
          max: S.max,
          size: S.size
        }))
      });
    })), xt(() => {
      Z(), ve(), Xe(), De("ready"), v.value = !0;
    }), Ti(() => v.value = !1);
    let ut = () => {
      let { class: ee, ...S } = a;
      return di("div", {
        ref: y,
        class: [k.value, ee],
        ...S
      }, r.default?.());
    };
    return Ii("panes", s), Ii("indexedPanes", c), Ii("horizontal", H(() => n.horizontal)), Ii("requestUpdate", Ce), Ii("onPaneAdd", Oe), Ii("onPaneRemove", Me), Ii("onPaneClick", Q), (ee, S) => (h(), Pe(xd(ut)));
  }
}), s0 = {
  __name: "pane",
  props: {
    size: { type: [Number, String] },
    minSize: {
      type: [Number, String],
      default: 0
    },
    maxSize: {
      type: [Number, String],
      default: 100
    }
  },
  setup(e) {
    let t = e, i = Zt("requestUpdate"), n = Zt("onPaneAdd"), a = Zt("horizontal"), r = Zt("onPaneRemove"), s = Zt("onPaneClick"), c = Sa()?.uid, d = Zt("indexedPanes"), y = H(() => d.value[c]), v = /* @__PURE__ */ G(null), g = H(() => {
      let C = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(C, k.value), m.value);
    }), m = H(() => {
      let C = parseFloat(t.minSize);
      return isNaN(C) ? 0 : C;
    }), k = H(() => {
      let C = parseFloat(t.maxSize);
      return isNaN(C) ? 100 : C;
    }), T = H(() => {
      let C = y.value?.size ?? (t.size === void 0 ? void 0 : g.value);
      return C === void 0 ? "" : `${a.value ? "height" : "width"}: ${C}%`;
    });
    return qe(() => g.value, (C) => i({
      uid: c,
      size: C
    })), qe(() => m.value, (C) => i({
      uid: c,
      min: C
    })), qe(() => k.value, (C) => i({
      uid: c,
      max: C
    })), xt(() => {
      n({
        id: c,
        el: v.value,
        min: m.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : g.value,
        size: g.value
      });
    }), Ti(() => r(c)), (C, O) => (h(), p("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: O[0] ||= (I) => u(s)(I, C._.uid),
      style: hi(T.value)
    }, [Be(C.$slots, "default")], 4));
  }
}, o0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", u0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", c0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", d0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Fd = 1024, gb = Fd / 2, vo = (e) => document.documentElement.clientWidth < e, mb = /* @__PURE__ */ G(vo(Fd)), yb = /* @__PURE__ */ G(vo(gb));
window.addEventListener("resize", () => {
  mb.value = vo(Fd), yb.value = vo(gb);
}, { passive: !0 });
function cs() {
  return /* @__PURE__ */ zl(mb);
}
function f0() {
  return /* @__PURE__ */ zl(yb);
}
class h0 {
  bundle;
  constructor(t) {
    this.bundle = {
      pluralFunction: t,
      translations: {}
    };
  }
  /**
   * Append new translations to the wrapper.
   *
   * This is useful if translations should be added on demand,
   * e.g. depending on component usage.
   *
   * @param bundle - The new translation bundle to append
   */
  addTranslations(t) {
    const i = Object.values(t.translations[""] ?? {}).map(({ msgid: n, msgid_plural: a, msgstr: r }) => a !== void 0 ? [`_${n}_::_${a}_`, r] : [n, r[0]]);
    this.bundle.translations = {
      ...this.bundle.translations,
      ...Object.fromEntries(i)
    };
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(t, i = {}) {
    return w("", t, i, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(t, i, n, a = {}) {
    return Ut("", t, i, n, a, { bundle: this.bundle });
  }
}
class p0 {
  debug = !1;
  language = "en";
  translations = {};
  setLanguage(t) {
    return this.language = t, this;
  }
  /**
   * Try to detect locale from context with `en` as fallback value
   * This only works within a Nextcloud page context.
   *
   * @deprecated use `detectLanguage` instead.
   */
  detectLocale() {
    return this.detectLanguage();
  }
  /**
   * Try to detect locale from context with `en` as fallback value.
   * This only works within a Nextcloud page context.
   */
  detectLanguage() {
    return this.setLanguage(us().replace("-", "_"));
  }
  /**
   * Register a new translation bundle for a specified language.
   *
   * Please note that existing translations for that language will be overwritten.
   *
   * @param language - Language this is the translation for
   * @param data - The translation bundle
   */
  addTranslation(t, i) {
    return this.translations[t] = i, this;
  }
  enableDebugMode() {
    return this.debug = !0, this;
  }
  build() {
    this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
    const t = new h0((i) => M_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function v0() {
  return new p0();
}
const _b = v0().detectLanguage().build(), Lt = (...e) => _b.gettext(...e);
function Ca(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== us() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        _b.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const b0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], g0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], m0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], y0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], _0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], w0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], k0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], S0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], C0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const T0 = /* @__PURE__ */ Symbol(""), [A0] = window.OC?.config?.version?.split(".") ?? [], wb = Number.parseInt(A0 ?? "35"), E0 = wb < 32, Ta = wb < 34, $0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function x0() {
  return Zt($0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const ot = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, O0 = { class: "button-vue__wrapper" }, N0 = { class: "button-vue__icon" }, R0 = { class: "button-vue__text" }, I0 = /* @__PURE__ */ Vt({
  __name: "NcButton",
  props: {
    alignment: { default: "center" },
    ariaLabel: { default: void 0 },
    disabled: { type: Boolean },
    download: { type: [String, Boolean], default: void 0 },
    href: { default: void 0 },
    pressed: { type: Boolean, default: void 0 },
    size: { default: "normal" },
    target: { default: "_self" },
    text: { default: void 0 },
    to: { default: void 0 },
    type: { default: "button" },
    variant: { default: "secondary" },
    wide: { type: Boolean }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const i = e, n = t, { formBoxItemClass: a } = x0(), r = Zt(T0, null) !== null, s = H(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = H(() => s.value === "button" && typeof i.pressed == "boolean"), d = H(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), y = H(() => d.value.startsWith("tertiary")), v = H(() => i.alignment.split("-")[0]), g = H(() => i.alignment.includes("-")), m = Zt("NcPopover:trigger:attrs", () => ({}), !1), k = H(() => m()), T = H(() => {
      if (s.value === "RouterLink")
        return {
          to: i.to,
          activeClass: "active"
        };
      if (s.value === "a")
        return {
          href: i.href || "#",
          target: i.target,
          rel: "nofollow noreferrer noopener",
          download: i.download || void 0
        };
      if (s.value === "button")
        return {
          ...k.value,
          "aria-pressed": i.pressed,
          type: i.type,
          disabled: i.disabled
        };
    });
    function C(O) {
      c.value && n("update:pressed", !i.pressed), n("click", O);
    }
    return (O, I) => (h(), Pe(xd(s.value), ei({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": y.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": g.value,
          "button-vue--legacy": u(E0),
          "button-vue--legacy34": u(Ta)
        },
        u(a)
      ]],
      "aria-label": e.ariaLabel
    }, T.value, { onClick: C }), {
      default: we(() => [
        l("span", O0, [
          l("span", N0, [
            Be(O.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", R0, [
            Be(O.$slots, "default", {}, () => [
              ie(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), on = /* @__PURE__ */ ot(I0, [["__scopeId", "data-v-47ce59a3"]]), L0 = ["aria-hidden", "aria-label"], P0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, D0 = ["d"], F0 = ["innerHTML"], M0 = /* @__PURE__ */ Vt({
  __name: "NcIconSvgWrapper",
  props: {
    directional: { type: Boolean },
    inline: { type: Boolean },
    svg: { default: "" },
    name: { default: void 0 },
    path: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    O1((a) => ({
      fb515064: i.value
    }));
    const t = e, i = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = H(() => {
      if (!t.svg || t.path)
        return;
      const a = sb.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (h(), p("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ae(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      n.value ? (h(), p("span", {
        key: 1,
        innerHTML: n.value
      }, null, 8, F0)) : (h(), p("svg", P0, [
        l("path", { d: e.path }, null, 8, D0)
      ]))
    ], 10, L0));
  }
}), bu = /* @__PURE__ */ ot(M0, [["__scopeId", "data-v-aaedb1c3"]]);
z0();
function U0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Fn("csrf-token-update", { token: e, _internal: !0 }));
}
function z0() {
  pb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || U0(e);
  });
}
cb("public").persist().build();
let yr;
function Qh(e, t) {
  return e ? e.getAttribute(t) : null;
}
function j0() {
  if (yr !== void 0)
    return yr;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Qh(e, "data-user");
  return t === null ? (yr = null, yr) : (yr = {
    uid: t,
    displayName: Qh(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, yr);
}
var Et = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(Et || {});
class B0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + Et[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === Et.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case Et.Debug:
          console.debug(this.formatMessage(i, Et.Debug, n), n);
          break;
        case Et.Info:
          console.info(this.formatMessage(i, Et.Info, n), n);
          break;
        case Et.Warn:
          console.warn(this.formatMessage(i, Et.Warn, n), n);
          break;
        case Et.Error:
          console.error(this.formatMessage(i, Et.Error, n), n);
          break;
        case Et.Fatal:
        default:
          console.error(this.formatMessage(i, Et.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(Et.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(Et.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(Et.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(Et.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(Et.Fatal, t, Object.assign({}, this.context, i));
  }
}
function H0(e) {
  return new B0(e);
}
class V0 {
  context;
  factory;
  constructor(t) {
    this.context = {}, this.factory = t;
  }
  /**
   * Set the app name within the logging context
   *
   * @param appId App name
   */
  setApp(t) {
    return this.context.app = t, this;
  }
  /**
   * Set the logging level within the logging context
   *
   * @param level Logging level
   */
  setLogLevel(t) {
    return this.context.level = t, this;
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * Set the user id within the logging context
   * @param uid User ID
   * @see {@link detectUser}
   */
  /* eslint-enable jsdoc/no-undefined-types */
  setUid(t) {
    return this.context.uid = t, this;
  }
  /**
   * Detect the currently logged in user and set the user id within the logging context
   */
  detectUser() {
    const t = j0();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? Et.Warn, window._oc_debug && (t.context.level = Et.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function q0() {
  return new V0(H0);
}
const ir = q0().detectUser().setApp("@nextcloud/vue").build();
function G0(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let kb = "missing-app-name";
try {
  kb = "library";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const K0 = kb;
let W0 = "";
try {
  W0 = "0.3.0-alpha.2";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Sb() {
  return Zt("appName", K0);
}
const Y0 = G0(() => {
  const e = fo("core", "apps", []), t = Sb();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Yc = F_();
Ca(k0);
const Z0 = /* @__PURE__ */ Vt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = cs();
    qe(t, i), xt(() => {
      i(t.value);
    }), Ti(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && Fn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (h(), Pe(u(on), {
      "aria-label": u(Lt)("Go back to the list"),
      class: Ae(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Lt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: we(() => [
        ce(u(bu), {
          directional: "",
          path: u(o0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), X0 = /* @__PURE__ */ ot(Z0, [["__scopeId", "data-v-a28923a1"]]), ep = cb("nextcloud").persist().build(), J0 = j_().theming?.name ?? "Nextcloud", Q0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: X0,
    Pane: s0,
    Splitpanes: l0
  },
  props: {
    /**
     * Allows to disable the control by swipe of the app navigation open state.
     */
    disableSwipe: {
      type: Boolean,
      default: !1
    },
    /**
     * Allows you to set the default width of the resizable list in % on vertical-split
     * or respectively the default height on horizontal-split.
     *
     * Must be between `listMinWidth` and `listMaxWidth`.
     */
    listSize: {
      type: Number,
      default: 20
    },
    /**
     * Allows you to set the minimum width of the list column in % on vertical-split
     * or respectively the minimum height on horizontal-split.
     */
    listMinWidth: {
      type: Number,
      default: 15
    },
    /**
     * Allows you to set the maximum width of the list column in % on vertical-split
     * or respectively the maximum height on horizontal-split.
     */
    listMaxWidth: {
      type: Number,
      default: 40
    },
    /**
     * Specify the config key for the pane config sizes
     * Default is the global var appName if you use the webpack-vue-config
     */
    paneConfigKey: {
      type: String,
      default: ""
    },
    /**
     * When in mobile view, only the list or the details are shown.
     *
     * If you provide a list, you need to provide a variable
     * that will be set to true by the user when an element of
     * the list gets selected. The details will then show a back
     * arrow to return to the list that will update this prop to false.
     */
    showDetails: {
      type: Boolean,
      default: !0
    },
    /**
     * Content layout used when there is a list together with content:
     * - `vertical-split` - a 2-column layout with list and default content separated vertically
     * - `no-split` - a single column layout; List is shown when `showDetails` is `false`, otherwise the default slot content is shown with a back button to return to the list.
     * - 'horizontal-split' - a 2-column layout with list and default content separated horizontally
     * On mobile screen `no-split` layout is forced.
     */
    layout: {
      type: String,
      default: "vertical-split",
      validator(e) {
        return ["no-split", "vertical-split", "horizontal-split"].includes(e);
      }
    },
    /**
     * Specify the `<h1>` page heading
     */
    pageHeading: {
      type: String,
      default: null
    },
    /**
     * Allow setting the page's `<title>`
     *
     * If a page heading is set it defaults to `{pageHeading} - {appName} - {instanceName}` e.g. `Favorites - Files - MyPersonalCloud`.
     * When the page heading and the app name is the same only one is used, e.g. `Files - Files - MyPersonalCloud` is shown as `Files - MyPersonalCloud`.
     * When setting the prop then the following format will be used: `{pageTitle} - {instanceName}`
     */
    pageTitle: {
      type: String,
      default: null
    }
  },
  emits: [
    "update:showDetails",
    "resizeList"
  ],
  setup() {
    return {
      appName: Sb(),
      localizedAppName: Y0(),
      isMobile: cs(),
      isRtl: Yc
    };
  },
  data() {
    return {
      contentHeight: 0,
      swiping: {},
      listPaneSize: this.restorePaneConfig()
    };
  },
  computed: {
    paneConfigID() {
      if (this.paneConfigKey !== "")
        return `pane-list-size-${this.paneConfigKey}`;
      try {
        return `pane-list-size-${this.appName}`;
      } catch {
        return ir.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
      }
    },
    detailsPaneSize() {
      return this.listPaneSize ? 100 - this.listPaneSize : this.paneDefaults.details.size;
    },
    paneDefaults() {
      return {
        list: {
          size: this.listSize,
          min: this.listMinWidth,
          max: this.listMaxWidth
        },
        // set the inverse values of the details column
        // based on the provided (or default) values of the list column
        details: {
          size: 100 - this.listSize,
          min: 100 - this.listMaxWidth,
          max: 100 - this.listMinWidth
        }
      };
    },
    realPageTitle() {
      const e = /* @__PURE__ */ new Set();
      if (this.pageTitle)
        for (const t of this.pageTitle.split(" - "))
          e.add(t);
      else if (this.pageHeading) {
        for (const t of this.pageHeading.split(" - "))
          e.add(t);
        e.size > 0 && e.add(this.localizedAppName);
      } else
        return null;
      return e.add(J0), [...e.values()].join(" - ");
    }
  },
  watch: {
    realPageTitle: {
      immediate: !0,
      handler() {
        this.realPageTitle !== null && (document.title = this.realPageTitle);
      }
    },
    paneConfigKey: {
      immediate: !0,
      handler() {
        this.restorePaneConfig();
      }
    }
  },
  mounted() {
    this.disableSwipe || (this.swiping = r0(this.$el, {
      onSwipeEnd: this.handleSwipe
    })), this.restorePaneConfig();
  },
  methods: {
    /**
     * handle the swipe event
     *
     * @param {TouchEvent} e The touch event
     * @param {import('@vueuse/core').SwipeDirection} direction The swipe direction of the event
     */
    handleSwipe(e, t) {
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? Fn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && Fn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      ep.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ir.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(ep.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ir.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, ew = {
  key: 0,
  class: "hidden-visually"
}, tw = { class: "app-content-wrapper__list" }, iw = {
  key: 1,
  class: "app-content-wrapper"
};
function nw(e, t, i, n, a, r) {
  const s = Ze("NcAppContentDetailsToggle"), c = Ze("Pane"), d = Ze("Splitpanes");
  return h(), p("main", {
    id: "app-content-vue",
    class: Ae(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (h(), p("h1", ew, o(i.pageHeading), 1)) : E("", !0),
    e.$slots.list ? (h(), p(W, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (h(), p("div", {
        key: 0,
        class: Ae(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (h(), Pe(s, {
          key: 0,
          onClick: Se(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : E("", !0),
        be(l("div", tw, [
          Be(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [tr, !i.showDetails]
        ]),
        i.showDetails ? Be(e.$slots, "default", { key: 1 }, void 0, !0) : E("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (h(), p("div", iw, [
        ce(d, {
          horizontal: i.layout === "horizontal-split",
          class: Ae(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: we(() => [
            ce(c, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: we(() => [
                Be(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ce(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: we(() => [
                Be(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : E("", !0)
    ], 64)) : E("", !0),
    e.$slots.list ? E("", !0) : Be(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const aw = /* @__PURE__ */ ot(Q0, [["render", nw], ["__scopeId", "data-v-51427d61"]]);
var Cb = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], bo = /* @__PURE__ */ Cb.join(","), Tb = typeof Element > "u", nr = Tb ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, go = !Tb && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, mo = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", s = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : mo(t.parentNode));
  return s;
}, rw = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Ab = function(t, i, n) {
  if (mo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(bo));
  return i && nr.call(t, bo) && a.unshift(t), a = a.filter(n), a;
}, yo = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!mo(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), d = c.length ? c : s.children, y = yo(d, !0, n);
        n.flatten ? a.push.apply(a, y) : a.push({
          scopeParent: s,
          candidates: y
        });
      } else {
        var v = nr.call(s, bo);
        v && n.filter(s) && (i || !t.includes(s)) && a.push(s);
        var g = s.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(s), m = !mo(g, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
        if (g && m) {
          var k = yo(g === !0 ? s.children : g.children, !0, n);
          n.flatten ? a.push.apply(a, k) : a.push({
            scopeParent: s,
            candidates: k
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Eb = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Za = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || rw(t)) && !Eb(t) ? 0 : t.tabIndex;
}, lw = function(t, i) {
  var n = Za(t);
  return n < 0 && i && !Eb(t) ? 0 : n;
}, sw = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, $b = function(t) {
  return t.tagName === "INPUT";
}, ow = function(t) {
  return $b(t) && t.type === "hidden";
}, uw = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, cw = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, dw = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || go(t), n = function(c) {
    return i.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var r = cw(a, t.form);
  return !r || r === t;
}, fw = function(t) {
  return $b(t) && t.type === "radio";
}, hw = function(t) {
  return fw(t) && !dw(t);
}, pw = function(t) {
  var i, n = t && go(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var s, c, d;
    for (r = !!((s = a) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && a; ) {
      var y, v, g;
      n = go(a), a = (y = n) === null || y === void 0 ? void 0 : y.host, r = !!((v = a) !== null && v !== void 0 && (g = v.ownerDocument) !== null && g !== void 0 && g.contains(a));
    }
  }
  return r;
}, tp = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, vw = function(t, i) {
  var n = i.displayCheck, a = i.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in t) {
    var r = t.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !r;
  }
  var s = getComputedStyle(t), c = s.visibility;
  if (c === "hidden" || c === "collapse")
    return !0;
  var d = nr.call(t, "details>summary:first-of-type"), y = d ? t.parentElement : t;
  if (nr.call(y, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var v = t; t; ) {
        var g = t.parentElement, m = go(t);
        if (g && !g.shadowRoot && a(g) === !0)
          return tp(t);
        t.assignedSlot ? t = t.assignedSlot : !g && m !== t.ownerDocument ? t = m.host : t = g;
      }
      t = v;
    }
    if (pw(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return tp(t);
  return !1;
}, bw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return nr.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, _o = function(t, i) {
  return !(i.disabled || ow(i) || vw(i, t) || // For a details element with a summary, the summary element gets the focus
  uw(i) || bw(i));
}, Zc = function(t, i) {
  return !(hw(i) || Za(i) < 0 || !_o(t, i));
}, gw = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, xb = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, c = s ? a.scopeParent : a, d = lw(c, s), y = s ? xb(a.candidates) : c;
    d === 0 ? s ? i.push.apply(i, y) : i.push(c) : n.push({
      documentOrder: r,
      tabIndex: d,
      item: a,
      isScope: s,
      content: y
    });
  }), n.sort(sw).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, mw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = yo([t], i.includeContainer, {
    filter: Zc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: gw
  }) : n = Ab(t, i.includeContainer, Zc.bind(null, i)), xb(n);
}, yw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = yo([t], i.includeContainer, {
    filter: _o.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Ab(t, i.includeContainer, _o.bind(null, i)), n;
}, _r = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return nr.call(t, bo) === !1 ? !1 : Zc(i, t);
}, _w = /* @__PURE__ */ Cb.concat("iframe:not([inert]):not([inert] *)").join(","), Sc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return nr.call(t, _w) === !1 ? !1 : _o(i, t);
};
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function ww(e) {
  if (Array.isArray(e)) return Xc(e);
}
function ip(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = Ob(e)) || t) {
      i && (e = i);
      var n = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(d) {
          throw d;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, s = !0, c = !1;
  return {
    s: function() {
      i = i.call(e);
    },
    n: function() {
      var d = i.next();
      return s = d.done, d;
    },
    e: function(d) {
      c = !0, r = d;
    },
    f: function() {
      try {
        s || i.return == null || i.return();
      } finally {
        if (c) throw r;
      }
    }
  };
}
function kw(e, t, i) {
  return (t = Ew(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function Sw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Cw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function np(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function ap(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? np(Object(i), !0).forEach(function(n) {
      kw(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : np(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Tw(e) {
  return ww(e) || Sw(e) || Ob(e) || Cw();
}
function Aw(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ew(e) {
  var t = Aw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ob(e, t) {
  if (e) {
    if (typeof e == "string") return Xc(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Xc(e, t) : void 0;
  }
}
var In = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = In.getActiveTrap(t);
    i !== n && In.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), In.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = In.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = In.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, $w = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, xw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, El = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Ow = function(t) {
  return El(t) && !t.shiftKey;
}, Nw = function(t) {
  return El(t) && t.shiftKey;
}, rp = function(t) {
  return setTimeout(t, 0);
}, pl = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, js = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Rw = [], Md = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || Rw, r = ap({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Ow,
    isKeyBackward: Nw
  }, i), s = {
    // containers given to createFocusTrap()
    /** @type {Array<HTMLElement>} */
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    // references to nodes that are siblings to the ancestors of this trap's containers.
    /** @type {Set<HTMLElement>} */
    adjacentElements: /* @__PURE__ */ new Set(),
    // references to nodes that were inert or aria-hidden before the trap was activated.
    /** @type {Set<HTMLElement>} */
    alreadySilent: /* @__PURE__ */ new Set(),
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, c, d = function(x, P, Z) {
    return x && x[P] !== void 0 ? x[P] : r[Z || P];
  }, y = function(x, P) {
    var Z = typeof P?.composedPath == "function" ? P.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var X = ae.container, ve = ae.tabbableNodes;
      return X.contains(x) || Z?.includes(X) || ve.find(function(Ce) {
        return Ce === x;
      });
    });
  }, v = function(x) {
    var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Z = P.hasFallback, ae = Z === void 0 ? !1 : Z, X = P.params, ve = X === void 0 ? [] : X, Ce = r[x];
    if (typeof Ce == "function" && (Ce = Ce.apply(void 0, Tw(ve))), Ce === !0 && (Ce = void 0), !Ce) {
      if (Ce === void 0 || Ce === !1)
        return Ce;
      throw new Error("`".concat(x, "` was specified but was not a node, or did not return a node"));
    }
    var Le = Ce;
    if (typeof Ce == "string") {
      try {
        Le = n.querySelector(Ce);
      } catch (Oe) {
        throw new Error("`".concat(x, '` appears to be an invalid selector; error="').concat(Oe.message, '"'));
      }
      if (!Le && !ae)
        throw new Error("`".concat(x, "` as selector refers to no known node"));
    }
    return Le;
  }, g = function(x) {
    var P = x.activeElement;
    return P ? P.shadowRoot && P.shadowRoot.activeElement !== null ? g(P.shadowRoot) : P : null;
  }, m = function() {
    var x = v("initialFocus", {
      hasFallback: !0
    });
    if (x === !1)
      return !1;
    if (x === void 0 || x && !Sc(x, r.tabbableOptions)) {
      var P = g(n);
      if (y(P) >= 0)
        x = P;
      else {
        var Z = s.tabbableGroups[0], ae = Z && Z.firstTabbableNode;
        x = ae || v("fallbackFocus");
      }
    } else x === null && (x = v("fallbackFocus"));
    if (!x)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return x;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(x) {
      var P = mw(x, r.tabbableOptions), Z = yw(x, r.tabbableOptions), ae = P.length > 0 ? P[0] : void 0, X = P.length > 0 ? P[P.length - 1] : void 0, ve = Z.find(function(Oe) {
        return _r(Oe);
      }), Ce = Z.slice().reverse().find(function(Oe) {
        return _r(Oe);
      }), Le = !!P.find(function(Oe) {
        return Za(Oe) > 0;
      });
      return {
        container: x,
        tabbableNodes: P,
        focusableNodes: Z,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Le,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: X,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: ve,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: Ce,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Me) {
          var Xe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ht = P.indexOf(Me);
          return ht < 0 ? Xe ? Z.slice(Z.indexOf(Me) + 1).find(function(ye) {
            return _r(ye);
          }) : Z.slice(0, Z.indexOf(Me)).reverse().find(function(ye) {
            return _r(ye);
          }) : P[ht + (Xe ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(x) {
      return x.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(x) {
      return x.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, T = function(x) {
    if (x !== !1 && x !== g(document)) {
      if (!x || !x.focus) {
        T(m());
        return;
      }
      x.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = x, $w(x) && x.select();
    }
  }, C = function(x) {
    var P = v("setReturnFocus", {
      params: [x]
    });
    return P || (P === !1 ? !1 : x);
  }, O = function(x) {
    var P = x.target, Z = x.event, ae = x.isBackward, X = ae === void 0 ? !1 : ae;
    P = P || js(Z), k();
    var ve = null;
    if (s.tabbableGroups.length > 0) {
      var Ce = y(P, Z), Le = Ce >= 0 ? s.containerGroups[Ce] : void 0;
      if (Ce < 0)
        X ? ve = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ve = s.tabbableGroups[0].firstTabbableNode;
      else if (X) {
        var Oe = s.tabbableGroups.findIndex(function(me) {
          var De = me.firstTabbableNode;
          return P === De;
        });
        if (Oe < 0 && (Le.container === P || Sc(P, r.tabbableOptions) && !_r(P, r.tabbableOptions) && !Le.nextTabbableNode(P, !1)) && (Oe = Ce), Oe >= 0) {
          var Me = Oe === 0 ? s.tabbableGroups.length - 1 : Oe - 1, Xe = s.tabbableGroups[Me];
          ve = Za(P) >= 0 ? Xe.lastTabbableNode : Xe.lastDomTabbableNode;
        } else El(Z) || (ve = Le.nextTabbableNode(P, !1));
      } else {
        var ht = s.tabbableGroups.findIndex(function(me) {
          var De = me.lastTabbableNode;
          return P === De;
        });
        if (ht < 0 && (Le.container === P || Sc(P, r.tabbableOptions) && !_r(P, r.tabbableOptions) && !Le.nextTabbableNode(P)) && (ht = Ce), ht >= 0) {
          var ye = ht === s.tabbableGroups.length - 1 ? 0 : ht + 1, Re = s.tabbableGroups[ye];
          ve = Za(P) >= 0 ? Re.firstTabbableNode : Re.firstDomTabbableNode;
        } else El(Z) || (ve = Le.nextTabbableNode(P));
      }
    } else
      ve = v("fallbackFocus");
    return ve;
  }, I = function(x) {
    var P = js(x);
    if (!(y(P, x) >= 0)) {
      if (pl(r.clickOutsideDeactivates, x)) {
        c.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: r.returnFocusOnDeactivate
        });
        return;
      }
      pl(r.allowOutsideClick, x) || x.preventDefault();
    }
  }, L = function(x) {
    var P = js(x), Z = y(P, x) >= 0;
    if (Z || P instanceof Document)
      Z && (s.mostRecentlyFocusedNode = P);
    else {
      x.stopImmediatePropagation();
      var ae, X = !0;
      if (s.mostRecentlyFocusedNode)
        if (Za(s.mostRecentlyFocusedNode) > 0) {
          var ve = y(s.mostRecentlyFocusedNode), Ce = s.containerGroups[ve].tabbableNodes;
          if (Ce.length > 0) {
            var Le = Ce.findIndex(function(Oe) {
              return Oe === s.mostRecentlyFocusedNode;
            });
            Le >= 0 && (r.isKeyForward(s.recentNavEvent) ? Le + 1 < Ce.length && (ae = Ce[Le + 1], X = !1) : Le - 1 >= 0 && (ae = Ce[Le - 1], X = !1));
          }
        } else
          s.containerGroups.some(function(Oe) {
            return Oe.tabbableNodes.some(function(Me) {
              return Za(Me) > 0;
            });
          }) || (X = !1);
      else
        X = !1;
      X && (ae = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), T(ae || s.mostRecentlyFocusedNode || m());
    }
    s.recentNavEvent = void 0;
  }, D = function(x) {
    var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = x;
    var Z = O({
      event: x,
      isBackward: P
    });
    Z && (El(x) && x.preventDefault(), T(Z));
  }, R = function(x) {
    (r.isKeyForward(x) || r.isKeyBackward(x)) && D(x, r.isKeyBackward(x));
  }, pe = function(x) {
    xw(x) && pl(r.escapeDeactivates, x) !== !1 && (x.preventDefault(), c.deactivate());
  }, Q = function(x) {
    var P = js(x);
    y(P, x) >= 0 || pl(r.clickOutsideDeactivates, x) || pl(r.allowOutsideClick, x) || (x.preventDefault(), x.stopImmediatePropagation());
  }, $ = function() {
    if (s.active) {
      In.activateTrap(a, c);
      var x;
      return r.delayInitialFocus ? x = new Promise(function(P) {
        s.delayInitialFocusTimer = rp(function() {
          T(m()), P();
        });
      }) : T(m()), n.addEventListener("focusin", L, !0), n.addEventListener("mousedown", I, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", I, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", R, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", pe), x;
    }
  }, q = function(x) {
    s.active && !s.paused && c._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var P = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), ae = ip(x), X;
    try {
      for (ae.s(); !(X = ae.n()).done; ) {
        var ve = X.value;
        P.add(ve);
        for (var Ce = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot, Le = ve; Le; ) {
          P.add(Le);
          var Oe = Le.parentElement, Me = [];
          Oe ? Me = Oe.children : !Oe && Ce && (Me = Le.getRootNode().children, Oe = Le.getRootNode().host, Ce = typeof ShadowRoot < "u" && Oe.getRootNode() instanceof ShadowRoot);
          var Xe = ip(Me), ht;
          try {
            for (Xe.s(); !(ht = Xe.n()).done; ) {
              var ye = ht.value;
              Z.add(ye);
            }
          } catch (Re) {
            Xe.e(Re);
          } finally {
            Xe.f();
          }
          Le = Oe;
        }
      }
    } catch (Re) {
      ae.e(Re);
    } finally {
      ae.f();
    }
    P.forEach(function(Re) {
      Z.delete(Re);
    }), s.adjacentElements = Z;
  }, K = function() {
    if (s.active)
      return n.removeEventListener("focusin", L, !0), n.removeEventListener("mousedown", I, !0), n.removeEventListener("touchstart", I, !0), n.removeEventListener("click", Q, !0), n.removeEventListener("keydown", R, !0), n.removeEventListener("keydown", pe), c;
  }, Y = function(x) {
    var P = s.mostRecentlyFocusedNode;
    if (P) {
      var Z = x.some(function(X) {
        var ve = Array.from(X.removedNodes);
        return ve.some(function(Ce) {
          return Ce === P || typeof Ce.contains == "function" && Ce.contains(P);
        });
      });
      if (Z && s.containers.some(function(X) {
        return X?.isConnected;
      })) {
        k();
        var ae = m();
        T(ae);
      }
    }
  }, ne = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Y) : void 0, B = function() {
    ne && (ne.disconnect(), s.active && !s.paused && s.containers.map(function(x) {
      ne.observe(x, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(x) {
      if (s.active)
        return this;
      var P = d(x, "onActivate"), Z = d(x, "onPostActivate"), ae = d(x, "checkCanFocusTrap"), X = In.getActiveTrap(a), ve = !1;
      if (X && !X.paused) {
        var Ce;
        (Ce = X._setSubtreeIsolation) === null || Ce === void 0 || Ce.call(X, !1), ve = !0;
      }
      try {
        ae || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = g(n), P?.({
          trap: c
        });
        var Le = function() {
          ae && k();
          var Xe = function() {
            c._setSubtreeIsolation(!0), B(), Z?.({
              trap: c
            });
          }, ht = $();
          ht ? ht.then(Xe) : Xe();
        };
        if (ae)
          return ae(s.containers.concat()).then(Le, Le), this;
        Le();
      } catch (Me) {
        if (X === In.getActiveTrap(a) && ve) {
          var Oe;
          (Oe = X._setSubtreeIsolation) === null || Oe === void 0 || Oe.call(X, !0);
        }
        throw Me;
      }
      return this;
    },
    deactivate: function(x) {
      if (!s.active)
        return this;
      var P = ap({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, x);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || c._setSubtreeIsolation(!1), s.alreadySilent.clear(), K(), s.active = !1, s.paused = !1, B(), In.deactivateTrap(a, c);
      var Z = d(P, "onDeactivate"), ae = d(P, "onPostDeactivate"), X = d(P, "checkCanReturnFocus"), ve = d(P, "delayReturnFocus"), Ce = d(P, "returnFocus", "returnFocusOnDeactivate");
      Z?.({
        trap: c
      });
      var Le = function() {
        Ce && T(C(s.nodeFocusedBeforeActivation)), ae?.({
          trap: c
        });
      }, Oe = function() {
        ve && Ce ? rp(Le) : Le();
      };
      return Ce && X ? (X(C(s.nodeFocusedBeforeActivation)).then(Oe, Oe), this) : (Oe(), this);
    },
    pause: function(x) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, x)) : this;
    },
    unpause: function(x) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, x)) : this;
    },
    updateContainerElements: function(x) {
      var P = [].concat(x).filter(Boolean);
      return s.containers = P.map(function(Z) {
        return typeof Z == "string" ? n.querySelector(Z) : Z;
      }), r.isolateSubtrees && q(s.containers), s.active && (k(), s.paused || c._setSubtreeIsolation(!0)), B(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(x, P) {
        if (s.paused === x)
          return this;
        if (s.paused = x, x) {
          var Z = d(P, "onPause"), ae = d(P, "onPostPause");
          Z?.({
            trap: c
          }), K(), c._setSubtreeIsolation(!1), B(), ae?.({
            trap: c
          });
        } else {
          var X = d(P, "onUnpause"), ve = d(P, "onPostUnpause");
          X?.({
            trap: c
          });
          var Ce = function() {
            k();
            var Oe = function() {
              c._setSubtreeIsolation(!0), B(), ve?.({
                trap: c
              });
            }, Me = $();
            Me ? Me.then(Oe) : Oe();
          };
          Ce();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(x) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(P) {
          var Z;
          x ? r.isolateSubtrees === "aria-hidden" ? ((P.ariaHidden === "true" || ((Z = P.getAttribute("aria-hidden")) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === "true") && s.alreadySilent.add(P), P.setAttribute("aria-hidden", "true")) : ((P.inert || P.hasAttribute("inert")) && s.alreadySilent.add(P), P.setAttribute("inert", !0)) : s.alreadySilent.has(P) || (r.isolateSubtrees === "aria-hidden" ? P.removeAttribute("aria-hidden") : P.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Nb = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Iw = /* @__PURE__ */ Vt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Nb]: {
        show: this.show,
        hide: this.hide
      }
    };
  },
  data() {
    return {
      /** Entry the highlight is on, as reported by that entry itself */
      entry: null,
      /** Whether the highlight is shown */
      visible: !1,
      /** Whether position changes should transition (slide) or snap */
      animated: !1,
      /** Whether the highlight sits on the active entry (turns transparent) */
      overActive: !1,
      /** Vertical offset of the highlight inside the scrollable content */
      top: 0,
      /** Height of the highlight */
      height: 0,
      /** Pending animation frame for re-measuring while scrolling */
      scrollFrame: 0
    };
  },
  computed: {
    highlightStyle() {
      return {
        transform: `translateY(${this.top}px)`,
        height: `${this.height}px`
      };
    }
  },
  beforeUnmount() {
    this.scrollFrame && cancelAnimationFrame(this.scrollFrame);
  },
  methods: {
    /**
     * Move the highlight onto an entry. It slides there if already visible,
     * otherwise it snaps into place so it does not slide in from the entry
     * that was hovered before. Over the active entry it turns transparent so
     * that entry keeps its own static highlight.
     *
     * @param entry the entry element asking for the highlight
     */
    show(e) {
      if (this.entry = e, this.overActive = e.classList.contains("active"), this.visible) {
        this.animated = !0, this.measure();
        return;
      }
      this.animated = !1, this.measure(), this.visible = !0, this.$nextTick(() => requestAnimationFrame(() => {
        this.animated = !0;
      }));
    },
    /**
     * Hide the highlight if it is on the given entry, e.g. because that entry
     * is being removed. While the pointer only moves between entries the
     * highlight stays visible, so it can slide on to the next one.
     *
     * @param entry the entry element that no longer wants the highlight
     */
    hide(e) {
      this.entry === e && this.hideNow();
    },
    /** Hide the highlight, as the pointer or focus left the list */
    hideNow() {
      this.visible = !1;
    },
    /**
     * Hide the highlight once focus leaves the list entirely
     *
     * @param event the focusout event
     */
    onFocusOut(e) {
      this.$refs.list.contains(e.relatedTarget) || this.hideNow();
    },
    /** Read the current entry's geometry relative to the list content */
    measure() {
      const e = this.$refs.list;
      if (!e || !this.entry)
        return;
      const t = this.entry.getBoundingClientRect(), i = e.getBoundingClientRect();
      this.top = t.top - i.top + e.scrollTop, this.height = t.height;
    },
    /**
     * Keep the highlight on its entry while scrolling. Needed because a
     * virtual scroller repositions its entries as the list scrolls.
     */
    onScroll() {
      !this.visible || this.scrollFrame || (this.scrollFrame = requestAnimationFrame(() => {
        this.scrollFrame = 0, this.measure();
      }));
    }
  }
});
function Lw(e, t, i, n, a, r) {
  return h(), p("ul", {
    ref: "list",
    class: Ae(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    l("div", {
      class: Ae(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: hi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Be(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Rb = /* @__PURE__ */ ot(Iw, [["render", Lw], ["__scopeId", "data-v-3e73e246"]]);
function Zl() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Pw() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Zl()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Zl().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Ib = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Lb = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ca(y0);
const Dw = { class: "app-navigation-toggle-wrapper" }, Fw = /* @__PURE__ */ Vt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Ov(e, "open"), i = H(() => t.value ? Lt("Close navigation") : Lt("Open navigation"));
    return (n, a) => (h(), p("div", Dw, [
      ce(u(on), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: we(() => [
          ce(bu, {
            path: u(d0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Mw = /* @__PURE__ */ ot(Fw, [["__scopeId", "data-v-e8177cc7"]]), Uw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], zw = { class: "app-navigation__search" }, jw = /* @__PURE__ */ Vt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Zt(
      Ib,
      () => m1(),
      !1
    ), a = Cy("appNavigationContainer"), r = cs(), s = /* @__PURE__ */ G(!r.value), c = H(() => r.value && s.value);
    py(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      s.value = !r.value;
    }), qe(c, () => {
      v();
    }), xt(() => {
      n(!0), pb("toggle-navigation", y), Fn("navigation-toggled", {
        open: s.value
      }), i = Md(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Zl(),
        escapeDeactivates: !1
      }), v();
    }), ls(() => {
      n(!1), Q_("toggle-navigation", y), i.deactivate();
    });
    function d(m) {
      if (s.value === m) {
        Fn("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = m === void 0 ? !s.value : m;
      const k = getComputedStyle(document.body), T = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Fn("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * T);
    }
    function y({ open: m }) {
      return d(m);
    }
    function v() {
      c.value ? i.activate() : i.deactivate();
    }
    function g() {
      r.value && d(!1);
    }
    return (m, k) => (h(), p("div", {
      ref: "appNavigationContainer",
      class: Ae(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": u(Ta)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: ft(g, ["esc"])
      }, [
        l("div", zw, [
          Be(m.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ae(["app-navigation__body", { "app-navigation__body--no-list": !m.$slots.list }])
        }, [
          Be(m.$slots, "default", {}, void 0, !0)
        ], 2),
        m.$slots.list ? (h(), Pe(Rb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: we(() => [
            Be(m.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : E("", !0),
        Be(m.$slots, "footer", {}, void 0, !0)
      ], 40, Uw),
      ce(Mw, {
        open: s.value,
        "onUpdate:open": d
      }, null, 8, ["open"])
    ], 2));
  }
}), Bw = /* @__PURE__ */ ot(jw, [["__scopeId", "data-v-37908cd4"]]), Hw = {
  name: "ChevronDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, Vw = ["aria-hidden", "aria-label"], qw = ["fill", "width", "height"], Gw = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Kw = { key: 0 };
function Ww(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Gw, [
        i.title ? (h(), p("title", Kw, o(i.title), 1)) : E("", !0)
      ])
    ], 8, qw))
  ], 16, Vw);
}
const Yw = /* @__PURE__ */ ot(Hw, [["render", Ww]]), Zw = {
  name: "ChevronUpIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, Xw = ["aria-hidden", "aria-label"], Jw = ["fill", "width", "height"], Qw = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ek = { key: 0 };
function tk(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Qw, [
        i.title ? (h(), p("title", ek, o(i.title), 1)) : E("", !0)
      ])
    ], 8, Jw))
  ], 16, Xw);
}
const ik = /* @__PURE__ */ ot(Zw, [["render", tk]]), nk = {
  name: "ArrowRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, ak = ["aria-hidden", "aria-label"], rk = ["fill", "width", "height"], lk = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, sk = { key: 0 };
function ok(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", lk, [
        i.title ? (h(), p("title", sk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, rk))
  ], 16, ak);
}
const Pb = /* @__PURE__ */ ot(nk, [["render", ok]]), uk = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, ck = ["aria-hidden", "aria-label"], dk = ["fill", "width", "height"], fk = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, hk = { key: 0 };
function pk(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", fk, [
        i.title ? (h(), p("title", hk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, dk))
  ], 16, ck);
}
const Db = /* @__PURE__ */ ot(uk, [["render", pk]]);
Ca(g0);
const vk = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Pb,
    IconClose: Db,
    NcButton: on
  },
  props: {
    /**
     * If this element is used on a primary element set to true for primary styling.
     */
    primary: {
      default: !1,
      type: Boolean
    },
    /**
     * Placeholder of the edit field
     */
    placeholder: {
      default: "",
      type: String
    },
    /**
     * The current name (model value)
     */
    modelValue: {
      default: "",
      type: String
    }
  },
  emits: [
    "cancel",
    "confirm",
    "update:modelValue"
  ],
  setup() {
    return { isLegacy34: Ta };
  },
  data() {
    return {
      labelConfirm: Lt("Confirm changes"),
      labelCancel: Lt("Cancel changes")
    };
  },
  computed: {
    valueModel: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
    focusInput() {
      this.$refs.input.focus();
    }
  }
}, bk = ["placeholder"];
function gk(e, t, i, n, a, r) {
  const s = Ze("IconArrowRight"), c = Ze("NcButton"), d = Ze("IconClose");
  return h(), p("div", {
    class: Ae(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Se((...y) => r.confirm && r.confirm(...y), ["prevent"])),
      onKeydown: t[2] || (t[2] = ft(Se((...y) => r.cancel && r.cancel(...y), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Se(() => {
      }, ["stop", "prevent"]))
    }, [
      be(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (y) => r.valueModel = y),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, bk), [
        [je, r.valueModel]
      ]),
      ce(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Se(r.confirm, ["stop", "prevent"])
      }, {
        icon: we(() => [
          ce(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ce(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Se(r.cancel, ["stop", "prevent"])
      }, {
        icon: we(() => [
          ce(d, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const mk = /* @__PURE__ */ ot(vk, [["render", gk], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function gu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Ud = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Fb = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), yk = {
  beforeUpdate() {
    this.text = this.getText();
  },
  data() {
    return {
      // $slots are not reactive.
      // We need to update  the content manually
      text: this.getText()
    };
  },
  computed: {
    isLongText() {
      return this.text && this.text.trim().length > 20;
    }
  },
  methods: {
    getText() {
      return this.$slots.default?.()[0].children?.trim?.() || "";
    }
  }
}, Mb = {
  mixins: [yk],
  props: {
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Whether we close the Actions menu after the click
     */
    closeAfterClick: {
      type: Boolean,
      default: !1
    },
    /**
     * Aria label for the button. Not needed if the button has text.
     */
    ariaLabel: {
      type: String,
      default: null
    }
  },
  inject: {
    closeMenu: {
      from: Fb
    }
  },
  emits: [
    "click"
  ],
  created() {
    "ariaHidden" in this.$attrs;
  },
  computed: {
    /**
     * Check if icon prop is an URL
     *
     * @return {boolean} Whether the icon prop is an URL
     */
    isIconUrl() {
      try {
        return !!new URL(this.icon, this.icon.startsWith("/") ? window.location.origin : void 0);
      } catch {
        return !1;
      }
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e), this.closeAfterClick && this.closeMenu(!1);
    }
  }
}, _k = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: bu
  },
  mixins: [Mb],
  inject: {
    isInSemanticMenu: {
      from: Ud,
      default: !1
    }
  },
  props: {
    /**
     * disabled state of the action button
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * If this is a menu, a chevron icon will
     * be added at the end of the line
     */
    isMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * The button's behavior, by default the button acts like a normal button with optional toggle button behavior if `modelValue` is `true` or `false`.
     * But you can also set to checkbox button behavior with tri-state or radio button like behavior.
     * This extends the native HTML button type attribute.
     */
    type: {
      type: String,
      default: "button",
      validator: (e) => ["button", "checkbox", "radio", "reset", "submit"].includes(e)
    },
    /**
     * The buttons state if `type` is 'checkbox' or 'radio' (meaning if it is pressed / selected).
     * For checkbox and toggle button behavior - boolean value.
     * For radio button behavior - could be a boolean checked or a string with the value of the button.
     * Note: Unlike native radio buttons, NcActionButton are not grouped by name, so you need to connect them by bind correct modelValue.
     *
     *  **This is not availabe for `type='submit'` or `type='reset'`**
     *
     * If using `type='checkbox'` a `model-value` of `true` means checked, `false` means unchecked and `null` means indeterminate (tri-state)
     * For `type='radio'` `null` is equal to `false`
     */
    modelValue: {
      type: [Boolean, String],
      default: null
    },
    /**
     * The value used for the `modelValue` when this component is used with radio behavior
     * Similar to the `value` attribute of `<input type="radio">`
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Small underlying text content of the entry
     */
    description: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      mdiCheck: u0,
      mdiChevronRight: c0
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * The current "checked" or "pressed" state for the model behavior
     */
    isChecked() {
      return this.type === "radio" && typeof this.modelValue != "boolean" ? this.modelValue === this.value : this.modelValue;
    },
    /**
     * The native HTML type to set on the button
     */
    nativeType() {
      return this.type === "submit" || this.type === "reset" ? this.type : "button";
    },
    /**
     * HTML attributes to bind to the <button>
     */
    buttonAttributes() {
      const e = {};
      return this.isInSemanticMenu ? (e.role = "menuitem", this.type === "radio" ? (e.role = "menuitemradio", e["aria-checked"] = this.isChecked ? "true" : "false") : (this.type === "checkbox" || this.nativeType === "button" && this.modelValue !== null) && (e.role = "menuitemcheckbox", e["aria-checked"] = this.modelValue === null ? "mixed" : this.modelValue ? "true" : "false")) : this.modelValue !== null && this.nativeType === "button" && (e["aria-pressed"] = this.modelValue ? "true" : "false"), e;
    }
  },
  methods: {
    /**
     * Forward click event, let mixin handle the close-after-click and emit new modelValue if needed
     *
     * @param {MouseEvent} event - The click event
     */
    handleClick(e) {
      this.onClick(e), (this.modelValue !== null || this.type !== "button") && (this.type === "radio" ? typeof this.modelValue != "boolean" ? this.isChecked || this.$emit("update:modelValue", this.value) : this.$emit("update:modelValue", !this.isChecked) : this.$emit("update:modelValue", !this.isChecked));
    }
  }
}, wk = ["role"], kk = ["aria-label", "disabled", "title", "type"], Sk = { class: "action-button__longtext-wrapper" }, Ck = {
  key: 0,
  class: "action-button__name"
}, Tk = ["textContent"], Ak = {
  key: 2,
  class: "action-button__text"
}, Ek = ["textContent"], $k = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function xk(e, t, i, n, a, r) {
  const s = Ze("NcIconSvgWrapper");
  return h(), p("li", {
    class: Ae(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", ei({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: i.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...c) => r.handleClick && r.handleClick(...c))
    }), [
      Be(e.$slots, "icon", {}, () => [
        l("span", {
          class: Ae([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Sk, [
        e.name ? (h(), p("strong", Ck, o(e.name), 1)) : E("", !0),
        e.isLongText ? (h(), p("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, Tk)) : (h(), p("span", Ak, o(e.text), 1)),
        i.description ? (h(), p("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, Ek)) : E("", !0)
      ]),
      i.isMenu ? (h(), Pe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: n.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (h(), Pe(s, {
        key: 1,
        path: n.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (h(), p("span", $k)) : E("", !0),
      E("", !0)
    ], 16, kk)
  ], 10, wk);
}
const Ok = /* @__PURE__ */ ot(_k, [["render", xk], ["__scopeId", "data-v-6c2daf4e"]]);
function Nk(e, t = {}) {
  const i = Pw();
  qe(e, () => {
    Pn(t.disabled) || (Pn(e) ? i.pause() : i.unpause());
  }), ls(() => {
    i.unpause();
  });
}
const Rk = ["top", "right", "bottom", "left"], lp = ["start", "end"], sp = /* @__PURE__ */ Rk.reduce((e, t) => e.concat(t, t + "-" + lp[0], t + "-" + lp[1]), []), Xl = Math.min, Jc = Math.max, Ik = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ub(e, t, i) {
  return Jc(e, Xl(t, i));
}
function ar(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function Gi(e) {
  return e.split("-")[1];
}
function zb(e) {
  return e === "x" ? "y" : "x";
}
function zd(e) {
  return e === "y" ? "height" : "width";
}
function Ln(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function jd(e) {
  return zb(Ln(e));
}
function jb(e, t, i) {
  i === void 0 && (i = !1);
  const n = Gi(e), a = jd(e), r = zd(a);
  let s = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ko(s)), [s, ko(s)];
}
function Lk(e) {
  const t = ko(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const op = ["left", "right"], up = ["right", "left"], Pk = ["top", "bottom"], Dk = ["bottom", "top"];
function Fk(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? up : op : t ? op : up;
    case "left":
    case "right":
      return t ? Pk : Dk;
    default:
      return [];
  }
}
function Mk(e, t, i, n) {
  const a = Gi(e);
  let r = Fk(Vn(e), i === "start", n);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(wo)))), r;
}
function ko(e) {
  const t = Vn(e);
  return Ik[t] + e.slice(t.length);
}
function Uk(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Bb(e) {
  return typeof e != "number" ? Uk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $l(e) {
  const {
    x: t,
    y: i,
    width: n,
    height: a
  } = e;
  return {
    width: n,
    height: a,
    top: i,
    left: t,
    right: t + n,
    bottom: i + a,
    x: t,
    y: i
  };
}
function cp(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = Ln(t), s = jd(t), c = zd(s), d = Vn(t), y = r === "y", v = n.x + n.width / 2 - a.width / 2, g = n.y + n.height / 2 - a.height / 2, m = n[c] / 2 - a[c] / 2;
  let k;
  switch (d) {
    case "top":
      k = {
        x: v,
        y: n.y - a.height
      };
      break;
    case "bottom":
      k = {
        x: v,
        y: n.y + n.height
      };
      break;
    case "right":
      k = {
        x: n.x + n.width,
        y: g
      };
      break;
    case "left":
      k = {
        x: n.x - a.width,
        y: g
      };
      break;
    default:
      k = {
        x: n.x,
        y: n.y
      };
  }
  const T = Gi(t);
  return T && (k[s] += m * (T === "end" ? 1 : -1) * (i && y ? -1 : 1)), k;
}
async function zk(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: s,
    elements: c,
    strategy: d
  } = e, {
    boundary: y = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: g = "floating",
    altBoundary: m = !1,
    padding: k = 0
  } = ar(t, e), T = Bb(k), O = c[m ? g === "floating" ? "reference" : "floating" : g], I = $l(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(O))) == null || i ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: y,
    rootBoundary: v,
    strategy: d
  })), L = g === "floating" ? {
    x: n,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, D = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), R = await (r.isElement == null ? void 0 : r.isElement(D)) && await (r.getScale == null ? void 0 : r.getScale(D)) || {
    x: 1,
    y: 1
  }, pe = $l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: L,
    offsetParent: D,
    strategy: d
  }) : L);
  return {
    top: (I.top - pe.top + T.top) / R.y,
    bottom: (pe.bottom - I.bottom + T.bottom) / R.y,
    left: (I.left - pe.left + T.left) / R.x,
    right: (pe.right - I.right + T.right) / R.x
  };
}
const jk = 50, Bk = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = i, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: zk
  }, d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let y = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: v,
    y: g
  } = cp(y, n, d), m = n, k = 0;
  const T = {};
  for (let C = 0; C < r.length; C++) {
    const O = r[C];
    if (!O)
      continue;
    const {
      name: I,
      fn: L
    } = O, {
      x: D,
      y: R,
      data: pe,
      reset: Q
    } = await L({
      x: v,
      y: g,
      initialPlacement: n,
      placement: m,
      strategy: a,
      middlewareData: T,
      rects: y,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = D ?? v, g = R ?? g, T[I] = {
      ...T[I],
      ...pe
    }, Q && k < jk && (k++, typeof Q == "object" && (Q.placement && (m = Q.placement), Q.rects && (y = Q.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : Q.rects), {
      x: v,
      y: g
    } = cp(y, m, d)), C = -1);
  }
  return {
    x: v,
    y: g,
    placement: m,
    strategy: a,
    middlewareData: T
  };
}, Hk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: n,
      placement: a,
      rects: r,
      platform: s,
      elements: c,
      middlewareData: d
    } = t, {
      element: y,
      padding: v = 0
    } = ar(e, t) || {};
    if (y == null)
      return {};
    const g = Bb(v), m = {
      x: i,
      y: n
    }, k = jd(a), T = zd(k), C = await s.getDimensions(y), O = k === "y", I = O ? "top" : "left", L = O ? "bottom" : "right", D = O ? "clientHeight" : "clientWidth", R = r.reference[T] + r.reference[k] - m[k] - r.floating[T], pe = m[k] - r.reference[k], Q = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(y));
    let $ = Q ? Q[D] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(Q))) && ($ = c.floating[D] || r.floating[T]);
    const q = R / 2 - pe / 2, K = $ / 2 - C[T] / 2 - 1, Y = Xl(g[I], K), ne = Xl(g[L], K), B = $ - C[T] - ne, z = $ / 2 - C[T] / 2 + q, x = Ub(Y, z, B), P = !d.arrow && Gi(a) != null && z !== x && r.reference[T] / 2 - (z < Y ? Y : ne) - C[T] / 2 < 0, Z = P ? z < Y ? z - Y : z - B : 0;
    return {
      [k]: m[k] + Z,
      data: {
        [k]: x,
        centerOffset: z - x - Z,
        ...P && {
          alignmentOffset: Z
        }
      },
      reset: P
    };
  }
});
function Vk(e, t, i) {
  return (e ? [...i.filter((a) => Gi(a) === e), ...i.filter((a) => Gi(a) !== e)] : i.filter((a) => Vn(a) === a)).filter((a) => e ? Gi(a) === e || (t ? wo(a) !== a : !1) : !0);
}
const qk = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, n, a;
      const {
        rects: r,
        middlewareData: s,
        placement: c,
        platform: d,
        elements: y
      } = t, {
        crossAxis: v = !1,
        alignment: g,
        allowedPlacements: m = sp,
        autoAlignment: k = !0,
        ...T
      } = ar(e, t), C = g !== void 0 || m === sp ? Vk(g || null, k, m) : m, O = ((i = s.autoPlacement) == null ? void 0 : i.index) || 0, I = C[O];
      if (I == null)
        return {};
      if (c !== I)
        return {
          reset: {
            placement: C[0]
          }
        };
      const L = await d.detectOverflow(t, T), D = jb(I, r, await (d.isRTL == null ? void 0 : d.isRTL(y.floating))), R = [L[Vn(I)], L[D[0]], L[D[1]]], pe = [...((n = s.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: I,
        overflows: R
      }], Q = C[O + 1];
      if (Q)
        return {
          data: {
            index: O + 1,
            overflows: pe
          },
          reset: {
            placement: Q
          }
        };
      const $ = pe.map((Y) => {
        const ne = Gi(Y.placement);
        return [Y.placement, ne && v ? (
          // Check along the mainAxis and main crossAxis side.
          Y.overflows.slice(0, 2).reduce((B, z) => B + z, 0)
        ) : (
          // Check only the mainAxis.
          Y.overflows[0]
        ), Y.overflows];
      }).sort((Y, ne) => Y[1] - ne[1]), K = ((a = $.filter((Y) => Y[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Gi(Y[0]) ? 2 : 3
      ).every((ne) => ne <= 0))[0]) == null ? void 0 : a[0]) || $[0][0];
      return K !== c ? {
        data: {
          index: O + 1,
          overflows: pe
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
}, Gk = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: a,
        middlewareData: r,
        rects: s,
        initialPlacement: c,
        platform: d,
        elements: y
      } = t, {
        mainAxis: v = !0,
        crossAxis: g = !0,
        fallbackPlacements: m,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: C = !0,
        ...O
      } = ar(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const I = Vn(a), L = Ln(c), D = Vn(c) === c, R = await (d.isRTL == null ? void 0 : d.isRTL(y.floating)), pe = m || (D || !C ? [ko(c)] : Lk(c)), Q = T !== "none";
      !m && Q && pe.push(...Mk(c, C, T, R));
      const $ = [c, ...pe], q = await d.detectOverflow(t, O), K = [];
      let Y = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (v && K.push(q[I]), g) {
        const x = jb(a, s, R);
        K.push(q[x[0]], q[x[1]]);
      }
      if (Y = [...Y, {
        placement: a,
        overflows: K
      }], !K.every((x) => x <= 0)) {
        var ne, B;
        const x = (((ne = r.flip) == null ? void 0 : ne.index) || 0) + 1, P = $[x];
        if (P && (!(g === "alignment" ? L !== Ln(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((X) => Ln(X.placement) === L ? X.overflows[0] > 0 : !0)))
          return {
            data: {
              index: x,
              overflows: Y
            },
            reset: {
              placement: P
            }
          };
        let Z = (B = Y.filter((ae) => ae.overflows[0] <= 0).sort((ae, X) => ae.overflows[1] - X.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!Z)
          switch (k) {
            case "bestFit": {
              var z;
              const ae = (z = Y.filter((X) => {
                if (Q) {
                  const ve = Ln(X.placement);
                  return ve === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((ve) => ve > 0).reduce((ve, Ce) => ve + Ce, 0)]).sort((X, ve) => X[1] - ve[1])[0]) == null ? void 0 : z[0];
              ae && (Z = ae);
              break;
            }
            case "initialPlacement":
              Z = c;
              break;
          }
        if (a !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
}, Kk = /* @__PURE__ */ new Set(["left", "top"]);
async function Wk(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = Vn(i), c = Gi(i), d = Ln(i) === "y", y = Kk.has(s) ? -1 : 1, v = r && d ? -1 : 1, g = ar(t, e);
  let {
    mainAxis: m,
    crossAxis: k,
    alignmentAxis: T
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return c && typeof T == "number" && (k = c === "end" ? T * -1 : T), d ? {
    x: k * v,
    y: m * y
  } : {
    x: m * y,
    y: k * v
  };
}
const Yk = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: a,
        y: r,
        placement: s,
        middlewareData: c
      } = t, d = await Wk(t, e);
      return s === ((i = c.offset) == null ? void 0 : i.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: a + d.x,
        y: r + d.y,
        data: {
          ...d,
          placement: s
        }
      };
    }
  };
}, Zk = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: i,
        y: n,
        placement: a,
        platform: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: d = {
          fn: (L) => {
            let {
              x: D,
              y: R
            } = L;
            return {
              x: D,
              y: R
            };
          }
        },
        ...y
      } = ar(e, t), v = {
        x: i,
        y: n
      }, g = await r.detectOverflow(t, y), m = Ln(a), k = zb(m);
      let T = v[k], C = v[m];
      const O = (L, D) => Ub(D + g[L === "y" ? "top" : "left"], D, D - g[L === "y" ? "bottom" : "right"]);
      s && (T = O(k, T)), c && (C = O(m, C));
      const I = d.fn({
        ...t,
        [k]: T,
        [m]: C
      });
      return {
        ...I,
        data: {
          x: I.x - i,
          y: I.y - n,
          enabled: {
            [k]: s,
            [m]: c
          }
        }
      };
    }
  };
}, Xk = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: i,
        rects: n,
        platform: a,
        elements: r
      } = t, {
        apply: s = () => {
        },
        ...c
      } = ar(e, t), d = await a.detectOverflow(t, c), y = Vn(i), v = Gi(i), g = Ln(i) === "y", {
        width: m,
        height: k
      } = n.floating;
      let T, C;
      y === "top" || y === "bottom" ? (T = y, C = v === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = y, T = v === "end" ? "top" : "bottom");
      const O = k - d.top - d.bottom, I = m - d.left - d.right, L = Xl(k - d[T], O), D = Xl(m - d[C], I), R = t.middlewareData.shift, pe = !R;
      let Q = L, $ = D;
      R != null && R.enabled.x && ($ = I), R != null && R.enabled.y && (Q = O), pe && !v && (g ? $ = m - 2 * Jc(d.left, d.right) : Q = k - 2 * Jc(d.top, d.bottom)), await s({
        ...t,
        availableWidth: $,
        availableHeight: Q
      });
      const q = await a.getDimensions(r.floating);
      return m !== q.width || k !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pi(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function un(e) {
  return Pi(e).getComputedStyle(e);
}
const dp = Math.min, xl = Math.max, So = Math.round;
function Hb(e) {
  const t = un(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = So(i) !== a || So(n) !== r;
  return s && (i = a, n = r), { width: i, height: n, fallback: s };
}
function ka(e) {
  return qb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Bs;
function Vb() {
  if (Bs) return Bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Bs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Bs) : navigator.userAgent;
}
function cn(e) {
  return e instanceof Pi(e).HTMLElement;
}
function ma(e) {
  return e instanceof Pi(e).Element;
}
function qb(e) {
  return e instanceof Pi(e).Node;
}
function fp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Pi(e).ShadowRoot || e instanceof ShadowRoot;
}
function mu(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Jk(e) {
  return ["table", "td", "th"].includes(ka(e));
}
function Qc(e) {
  const t = /firefox/i.test(Vb()), i = un(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function Gb() {
  return !/^((?!chrome|android).)*safari/i.test(Vb());
}
function Bd(e) {
  return ["html", "body", "#document"].includes(ka(e));
}
function Kb(e) {
  return ma(e) ? e : e.contextElement;
}
const Wb = { x: 1, y: 1 };
function Nr(e) {
  const t = Kb(e);
  if (!cn(t)) return Wb;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Hb(t);
  let s = (r ? So(i.width) : i.width) / n, c = (r ? So(i.height) : i.height) / a;
  return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), { x: s, y: c };
}
function Jl(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(), c = Kb(e);
  let d = Wb;
  t && (n ? ma(n) && (d = Nr(n)) : d = Nr(e));
  const y = c ? Pi(c) : window, v = !Gb() && i;
  let g = (s.left + (v && ((a = y.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / d.x, m = (s.top + (v && ((r = y.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, k = s.width / d.x, T = s.height / d.y;
  if (c) {
    const C = Pi(c), O = n && ma(n) ? Pi(n) : n;
    let I = C.frameElement;
    for (; I && n && O !== C; ) {
      const L = Nr(I), D = I.getBoundingClientRect(), R = getComputedStyle(I);
      D.x += (I.clientLeft + parseFloat(R.paddingLeft)) * L.x, D.y += (I.clientTop + parseFloat(R.paddingTop)) * L.y, g *= L.x, m *= L.y, k *= L.x, T *= L.y, g += D.x, m += D.y, I = Pi(I).frameElement;
    }
  }
  return { width: k, height: T, top: m, right: g + k, bottom: m + T, left: g, x: g, y: m };
}
function ya(e) {
  return ((qb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yu(e) {
  return ma(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Yb(e) {
  return Jl(ya(e)).left + yu(e).scrollLeft;
}
function Ql(e) {
  if (ka(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || fp(e) && e.host || ya(e);
  return fp(t) ? t.host : t;
}
function Zb(e) {
  const t = Ql(e);
  return Bd(t) ? t.ownerDocument.body : cn(t) && mu(t) ? t : Zb(t);
}
function Co(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = Zb(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Pi(n);
  return a ? t.concat(r, r.visualViewport || [], mu(n) ? n : []) : t.concat(n, Co(n));
}
function hp(e, t, i) {
  return t === "viewport" ? $l((function(n, a) {
    const r = Pi(n), s = ya(n), c = r.visualViewport;
    let d = s.clientWidth, y = s.clientHeight, v = 0, g = 0;
    if (c) {
      d = c.width, y = c.height;
      const m = Gb();
      (m || !m && a === "fixed") && (v = c.offsetLeft, g = c.offsetTop);
    }
    return { width: d, height: y, x: v, y: g };
  })(e, i)) : ma(t) ? $l((function(n, a) {
    const r = Jl(n, !0, a === "fixed"), s = r.top + n.clientTop, c = r.left + n.clientLeft, d = cn(n) ? Nr(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * d.x, height: n.clientHeight * d.y, x: c * d.x, y: s * d.y };
  })(t, i)) : $l((function(n) {
    const a = ya(n), r = yu(n), s = n.ownerDocument.body, c = xl(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), d = xl(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let y = -r.scrollLeft + Yb(n);
    const v = -r.scrollTop;
    return un(s).direction === "rtl" && (y += xl(a.clientWidth, s.clientWidth) - c), { width: c, height: d, x: y, y: v };
  })(ya(e)));
}
function pp(e) {
  return cn(e) && un(e).position !== "fixed" ? e.offsetParent : null;
}
function vp(e) {
  const t = Pi(e);
  let i = pp(e);
  for (; i && Jk(i) && un(i).position === "static"; ) i = pp(i);
  return i && (ka(i) === "html" || ka(i) === "body" && un(i).position === "static" && !Qc(i)) ? t : i || (function(n) {
    let a = Ql(n);
    for (; cn(a) && !Bd(a); ) {
      if (Qc(a)) return a;
      a = Ql(a);
    }
    return null;
  })(e) || t;
}
function Qk(e, t, i) {
  const n = cn(t), a = ya(t), r = Jl(e, !0, i === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((ka(t) !== "body" || mu(a)) && (s = yu(t)), cn(t)) {
    const d = Jl(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else a && (c.x = Yb(a));
  return { x: r.left + s.scrollLeft - c.x, y: r.top + s.scrollTop - c.y, width: r.width, height: r.height };
}
const eS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(y, v) {
    const g = v.get(y);
    if (g) return g;
    let m = Co(y).filter(((O) => ma(O) && ka(O) !== "body")), k = null;
    const T = un(y).position === "fixed";
    let C = T ? Ql(y) : y;
    for (; ma(C) && !Bd(C); ) {
      const O = un(C), I = Qc(C);
      (T ? I || k : I || O.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = O : m = m.filter(((L) => L !== C)), C = Ql(C);
    }
    return v.set(y, m), m;
  })(t, this._c) : [].concat(i), s = [...r, n], c = s[0], d = s.reduce(((y, v) => {
    const g = hp(t, v, a);
    return y.top = xl(g.top, y.top), y.right = dp(g.right, y.right), y.bottom = dp(g.bottom, y.bottom), y.left = xl(g.left, y.left), y;
  }), hp(t, c, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = cn(i), r = ya(i);
  if (i === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((ka(i) !== "body" || mu(r)) && (s = yu(i)), cn(i))) {
    const y = Jl(i);
    c = Nr(i), d.x = y.x + i.clientLeft, d.y = y.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - s.scrollLeft * c.x + d.x, y: t.y * c.y - s.scrollTop * c.y + d.y };
}, isElement: ma, getDimensions: function(e) {
  return cn(e) ? Hb(e) : e.getBoundingClientRect();
}, getOffsetParent: vp, getDocumentElement: ya, getScale: Nr, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || vp, r = this.getDimensions;
  return { reference: Qk(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => un(e).direction === "rtl" }, tS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: eS, ...i }, r = { ...a.platform, _c: n };
  return Bk(e, t, { ...a, platform: r });
}, _a = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function ed(e, t) {
  let i = _a.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = _a.themes[i.$extend] || {} : (i = null, n = _a[t]) : i = null;
  while (i);
  return n;
}
function iS(e) {
  const t = [e];
  let i = _a.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = _a.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function bp(e) {
  const t = [e];
  let i = _a.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = _a.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let es = !1;
if (typeof window < "u") {
  es = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        es = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Xb = !1;
typeof window < "u" && typeof navigator < "u" && (Xb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const nS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), gp = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, mp = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function yp(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Cc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Vi = [];
let Va = null;
const _p = {};
function wp(e) {
  let t = _p[e];
  return t || (t = _p[e] = []), t;
}
let td = function() {
};
typeof window < "u" && (td = window.Element);
function Je(e) {
  return function(t) {
    return ed(t.theme, e);
  };
}
const Tc = "__floating-vue__popper", Jb = () => /* @__PURE__ */ Vt({
  name: "VPopper",
  provide() {
    return {
      [Tc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Tc]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: Je("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Je("positioningDisabled")
    },
    placement: {
      type: String,
      default: Je("placement"),
      validator: (e) => nS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Je("delay")
    },
    distance: {
      type: [Number, String],
      default: Je("distance")
    },
    skidding: {
      type: [Number, String],
      default: Je("skidding")
    },
    triggers: {
      type: Array,
      default: Je("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Je("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Je("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Je("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Je("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Je("popperHideTriggers")
    },
    container: {
      type: [String, Object, td, Boolean],
      default: Je("container")
    },
    boundary: {
      type: [String, td],
      default: Je("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Je("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Je("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Je("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Je("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Je("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Je("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Je("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Je("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Je("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Je("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Je("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Je("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Je("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Je("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Je("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Je("flip")
    },
    shift: {
      type: Boolean,
      default: Je("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Je("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Je("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Je("disposeTimeout")
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Tc]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: i = !1 } = {}) {
      var n, a;
      (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (i || !this.disabled) && (((a = this.parentPopper) == null ? void 0 : a.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var i;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(Yk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(qk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Zk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Gk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Hk({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: a, middlewareData: r }) => {
          let s;
          const { centerOffset: c } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? s = Math.abs(c) > a.reference.width / 2 : s = Math.abs(c) > a.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: s }) => {
            var c;
            if ((c = s.autoSize) != null && c.skip)
              return {};
            let d, y;
            return r.startsWith("top") || r.startsWith("bottom") ? d = a.reference.width : y = a.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = y != null ? `${y}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Xk({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await tS(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: i.x,
        y: i.y,
        placement: i.placement,
        strategy: i.strategy,
        arrow: {
          ...i.middlewareData.arrow,
          ...i.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Va && this.instantMove && Va.instantMove && Va !== this.parentPopper) {
        Va.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Va = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Cc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Co(this.$_referenceNode),
        ...Co(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), i = this.$_popperNode.querySelector(".v-popper__wrapper"), n = i.parentNode.getBoundingClientRect(), a = t.x + t.width / 2 - (n.left + i.offsetLeft), r = t.y + t.height / 2 - (n.top + i.offsetTop);
        this.result.transformOrigin = `${a}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let i = 0; i < Vi.length; i++)
          t = Vi[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Vi.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of bp(this.theme))
        wp(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Cc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, yp(Vi, this), Vi.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of bp(this.theme)) {
        const n = wp(i);
        yp(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      Va === this && (Va = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Cc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (i) => {
        this.isShown && !this.$_hideInProgress || (i.usedByTooltip = !0, !this.$_preventShow && this.show({ event: i }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, gp, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], gp, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, mp, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], mp, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, es ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, n, a) {
      let r = i;
      n != null && (r = typeof n == "function" ? n(r) : n), r.forEach((s) => {
        const c = t[s];
        c && this.$_registerEventListeners(e, c, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: n, eventType: a, handler: r } = i;
        !e || e === a ? n.forEach((s) => s.removeEventListener(a, r)) : t.push(i);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const i of this.$_targetNodes) {
        const n = i.getAttribute(e);
        n && (i.removeAttribute(e), i.setAttribute(t, n));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const i in e) {
          const n = e[i];
          n == null ? t.removeAttribute(i) : t.setAttribute(i, n);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (Ol >= e.left && Ol <= e.right && Nl >= e.top && Nl <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = Ol - da, n = Nl - fa, a = t.left + t.width / 2 - da + (t.top + t.height / 2) - fa + t.width + t.height, r = da + i * a, s = fa + n * a;
        return Hs(da, fa, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Hs(da, fa, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Hs(da, fa, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Hs(da, fa, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Xb) {
    const e = es ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => kp(t), e), document.addEventListener("touchend", (t) => Sp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => kp(e), !0), window.addEventListener("click", (e) => Sp(e, !1), !0);
  window.addEventListener("resize", lS);
}
function kp(e, t) {
  for (let i = 0; i < Vi.length; i++) {
    const n = Vi[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Sp(e, t) {
  aS(e, t);
}
function aS(e, t) {
  const i = {};
  for (let n = Vi.length - 1; n >= 0; n--) {
    const a = Vi[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && Cp(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Cp(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Cp(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || rS(e, i) && !t;
}
function rS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function lS() {
  for (let e = 0; e < Vi.length; e++)
    Vi[e].$_computePosition();
}
let da = 0, fa = 0, Ol = 0, Nl = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  da = Ol, fa = Nl, Ol = e.clientX, Nl = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function Hs(e, t, i, n, a, r, s, c) {
  const d = ((s - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (i - e) - (s - a) * (n - t)), y = ((i - e) * (t - r) - (n - t) * (e - a)) / ((c - r) * (i - e) - (s - a) * (n - t));
  return d >= 0 && d <= 1 && y >= 0 && y <= 1;
}
const sS = {
  extends: Jb()
}, Hd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function oS(e, t, i, n, a, r) {
  return h(), p("div", {
    ref: "reference",
    class: Ae(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Be(e.$slots, "default", Js(ql(e.slotData)))
  ], 2);
}
const uS = /* @__PURE__ */ Hd(sS, [["render", oS]]);
function cS() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var a = e.indexOf("Edge/");
  return a > 0 ? parseInt(e.substring(a + 5, e.indexOf(".", a)), 10) : -1;
}
let Zs;
function id() {
  id.init || (id.init = !0, Zs = cS() !== -1);
}
var _u = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    id(), Rt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Zs && this.$el.appendChild(e), e.data = "about:blank", Zs || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Zs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const dS = /* @__PURE__ */ dy();
uy("data-v-b329ee4c");
const fS = {
  class: "resize-observer",
  tabindex: "-1"
};
cy();
const hS = /* @__PURE__ */ dS((e, t, i, n, a, r) => (h(), Pe("div", fS)));
_u.render = hS;
_u.__scopeId = "data-v-b329ee4c";
_u.__file = "src/components/ResizeObserver.vue";
const Qb = (e = "theme") => ({
  computed: {
    themeClass() {
      return iS(this[e]);
    }
  }
}), pS = /* @__PURE__ */ Vt({
  name: "VPopperContent",
  components: {
    ResizeObserver: _u
  },
  mixins: [
    Qb()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), vS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], bS = {
  ref: "inner",
  class: "v-popper__inner"
}, gS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), mS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), yS = [
  gS,
  mS
];
function _S(e, t, i, n, a, r) {
  const s = Ze("ResizeObserver");
  return h(), p("div", {
    id: e.popperId,
    ref: "popover",
    class: Ae(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: hi(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = ft((c) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: hi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", bS, [
        e.mounted ? (h(), p(W, { key: 0 }, [
          l("div", null, [
            Be(e.$slots, "default")
          ]),
          e.handleResize ? (h(), Pe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : E("", !0)
        ], 64)) : E("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: hi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, yS, 4)
    ], 4)
  ], 46, vS);
}
const eg = /* @__PURE__ */ Hd(pS, [["render", _S]]), tg = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let nd = function() {
};
typeof window < "u" && (nd = window.Element);
const wS = /* @__PURE__ */ Vt({
  name: "VPopperWrapper",
  components: {
    Popper: uS,
    PopperContent: eg
  },
  mixins: [
    tg,
    Qb("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, nd, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, nd],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function kS(e, t, i, n, a, r) {
  const s = Ze("PopperContent"), c = Ze("Popper");
  return h(), Pe(c, ei({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (d) => e.$emit("update:shown", d)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: we(({
      popperId: d,
      isShown: y,
      shouldMountContent: v,
      skipTransition: g,
      autoHide: m,
      show: k,
      hide: T,
      handleResize: C,
      onResize: O,
      classes: I,
      result: L
    }) => [
      Be(e.$slots, "default", {
        shown: y,
        show: k,
        hide: T
      }),
      ce(s, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: y,
        mounted: v,
        "skip-transition": g,
        "auto-hide": m,
        "handle-resize": C,
        classes: I,
        result: L,
        onHide: T,
        onResize: O
      }, {
        default: we(() => [
          Be(e.$slots, "popper", {
            shown: y,
            hide: T
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Vd = /* @__PURE__ */ Hd(wS, [["render", kS]]), SS = {
  ...Vd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Vd
});
({
  ...Vd
});
Jb();
const Tp = _a, CS = SS, TS = /* @__PURE__ */ Vt({
  name: "NcPopoverTriggerProvider",
  provide() {
    return {
      "NcPopover:trigger:shown": () => this.shown,
      "NcPopover:trigger:attrs": () => this.triggerAttrs
    };
  },
  props: {
    /**
     * Is the popover currently shown
     */
    shown: {
      type: Boolean,
      required: !0
    },
    /**
     * ARIA Role of the popup
     */
    popupRole: {
      type: String,
      default: void 0
    }
  },
  computed: {
    triggerAttrs() {
      return {
        "aria-haspopup": this.popupRole,
        "aria-expanded": this.shown.toString()
      };
    }
  },
  render() {
    return this.$slots.default?.({
      attrs: this.triggerAttrs
    });
  }
}), AS = "_ncPopover_qgtYg", ES = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: AS
}, ig = "nc-popover-9";
Tp.themes[ig] = structuredClone(Tp.themes.dropdown);
const $S = {
  name: "NcPopover",
  components: {
    Dropdown: CS,
    NcPopoverTriggerProvider: TS
  },
  props: {
    /**
     * Element to use for calculating the popper boundary (size and position).
     * Either a query string or the actual HTMLElement.
     */
    boundary: {
      type: [String, Object],
      default: ""
    },
    /**
     * Automatically hide the popover on click outside.
     *
     * @deprecated Use `no-close-on-click-outside` instead (inverted value)
     */
    closeOnClickOutside: {
      type: Boolean,
      // eslint-disable-next-line vue/no-boolean-default
      default: !0
    },
    /**
     * Disable the automatic popover hide on click outside.
     */
    noCloseOnClickOutside: {
      type: Boolean,
      default: !1
    },
    /**
     * Container where to mount the popover.
     * Either a select query or `false` to mount to the parent node.
     */
    container: {
      type: [Boolean, String],
      default: "body"
    },
    /**
     * Delay for showing or hiding the popover.
     *
     * Can either be a number or an object to configure different delays (`{ show: number, hide: number }`).
     */
    delay: {
      type: [Number, Object],
      default: 0
    },
    /**
     * Disable the popover focus trap.
     */
    noFocusTrap: {
      type: Boolean,
      default: !1
    },
    /**
     * Where to place the popover.
     *
     * This consists of the vertical placement and the horizontal placement.
     * E.g. `bottom` will place the popover on the bottom of the trigger (horizontally centered),
     * while `buttom-start` will horizontally align the popover on the logical start (e.g. for LTR layout on the left.).
     * The `start` or `end` placement will align the popover on the left or right side or the trigger element.
     *
     * @type {'auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'start'|'end'}
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * Class to be applied to the popover base
     */
    popoverBaseClass: {
      type: String,
      default: ""
    },
    /**
     * Events that trigger the popover on the popover container itself.
     * This is useful if you set `triggers` to `hover` and also want the popover to stay open while hovering the popover itself.
     *
     * It is possible to also pass an object to define different triggers for hide and show `{ show: ['hover'], hide: ['click'] }`.
     */
    popoverTriggers: {
      type: [Array, Object],
      default: null
    },
    /**
     * Popup role
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#values
     */
    popupRole: {
      type: String,
      default: void 0,
      validator: (e) => ["menu", "listbox", "tree", "grid", "dialog", "true"].includes(e)
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {SetReturnFocus}
     */
    setReturnFocus: {
      default: void 0,
      type: [Boolean, HTMLElement, SVGElement, String, Function]
    },
    /**
     * Show or hide the popper
     */
    shown: {
      type: Boolean,
      default: !1
    },
    /**
     * Events that trigger the popover.
     *
     * If you pass an empty array then only the `shown` prop can control the popover state.
     * Following events are available:
     * - `'hover'`
     * - `'click'`
     * - `'focus'`
     * - `'touch'`
     *
     * It is also possible to pass an object to have different events for show and hide:
     * `{ hide: ['click'], show: ['click', 'hover'] }`
     */
    triggers: {
      type: [Array, Object],
      default: () => ["click"]
    }
  },
  emits: [
    "afterShow",
    "afterHide",
    "update:shown"
  ],
  setup() {
    return {
      theme: ig
    };
  },
  data() {
    return {
      internalShown: this.shown
    };
  },
  computed: {
    popperTriggers() {
      if (this.popoverTriggers && Array.isArray(this.popoverTriggers))
        return this.popoverTriggers;
    },
    popperHideTriggers() {
      if (this.popoverTriggers && typeof this.popoverTriggers == "object")
        return this.popoverTriggers.hide;
    },
    popperShowTriggers() {
      if (this.popoverTriggers && typeof this.popoverTriggers == "object")
        return this.popoverTriggers.show;
    },
    internalTriggers() {
      if (this.triggers && Array.isArray(this.triggers))
        return this.triggers;
    },
    hideTriggers() {
      if (this.triggers && typeof this.triggers == "object")
        return this.triggers.hide;
    },
    showTriggers() {
      if (this.triggers && typeof this.triggers == "object")
        return this.triggers.show;
    },
    internalPlacement() {
      return this.placement === "start" ? Yc ? "right" : "left" : this.placement === "end" ? Yc ? "left" : "right" : this.placement;
    }
  },
  watch: {
    shown(e) {
      this.internalShown = e;
    },
    internalShown(e) {
      this.$emit("update:shown", e);
    }
  },
  mounted() {
    this.checkTriggerA11y();
  },
  beforeUnmount() {
    this.clearFocusTrap(), this.clearEscapeStopPropagation();
  },
  methods: {
    /**
     * Check if the trigger has all required a11y attributes.
     * Important to check custom trigger button.
     */
    checkTriggerA11y() {
      window.OC?.debug && this.getPopoverTriggerContainerElement().querySelector("[aria-expanded]");
    },
    /**
     * Remove incorrect aria-describedby attribute from the trigger.
     *
     * @see https://github.com/Akryum/floating-vue/blob/8d4f7125aae0e3ea00ba4093d6d2001ab15058f1/packages/floating-vue/src/components/Popper.ts#L734
     */
    removeFloatingVueAriaDescribedBy() {
      const t = this.getPopoverTriggerContainerElement().querySelectorAll("[data-popper-shown]");
      for (const i of t)
        i.removeAttribute("aria-describedby");
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverContentElement() {
      return this.$refs.popover?.$refs.popperContent?.$el;
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverTriggerContainerElement() {
      return this.$refs.popover?.$refs.popper?.$refs.reference;
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      if (await this.$nextTick(), this.noFocusTrap)
        return;
      const e = this.getPopoverContentElement();
      e.tabIndex = -1, e && (this.$focusTrap = Md(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Zl(),
        fallBackFocus: e
      }), this.$focusTrap.activate());
    },
    /**
     * Remove focus trap
     *
     * @param {object} options The configuration options for focusTrap
     */
    clearFocusTrap(e = {}) {
      try {
        this.$focusTrap?.deactivate(e), this.$focusTrap = null;
      } catch (t) {
        ir.warn("[NcPopover] Failed to clear focus trap", { error: t });
      }
    },
    /**
     * Add stopPropagation for Escape.
     * It prevents global Escape handling after closing popover.
     *
     * Manual event handling is used here instead of v-on because there is no direct access to the node.
     * Alternative - wrap <template #popover> in a div wrapper.
     */
    addEscapeStopPropagation() {
      this.getPopoverContentElement()?.addEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * Remove stop Escape handler
     */
    clearEscapeStopPropagation() {
      this.getPopoverContentElement()?.removeEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * @param {KeyboardEvent} event - native keydown event
     */
    stopKeydownEscapeHandler(e) {
      e.type === "keydown" && e.key === "Escape" && e.stopPropagation();
    },
    async afterShow() {
      this.getPopoverContentElement().addEventListener("transitionend", () => {
        this.$emit("afterShow");
      }, { once: !0, passive: !0 }), this.removeFloatingVueAriaDescribedBy(), await this.$nextTick(), await this.useFocusTrap(), this.addEscapeStopPropagation();
    },
    afterHide() {
      this.getPopoverContentElement()?.addEventListener("transitionend", () => {
        this.$emit("afterHide");
      }, { once: !0, passive: !0 }), this.clearFocusTrap(), this.clearEscapeStopPropagation();
    }
  }
};
function xS(e, t, i, n, a, r) {
  const s = Ze("NcPopoverTriggerProvider"), c = Ze("Dropdown");
  return h(), Pe(c, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (d) => a.internalShown = d),
      t[1] || (t[1] = (d) => a.internalShown = d)
    ],
    autoHide: !i.noCloseOnClickOutside && i.closeOnClickOutside,
    boundary: i.boundary || void 0,
    container: i.container,
    delay: i.delay,
    distance: 4,
    handleResize: "",
    noAutoFocus: !0,
    placement: r.internalPlacement,
    popperClass: [e.$style.ncPopover, i.popoverBaseClass],
    popperTriggers: r.popperTriggers,
    popperHideTriggers: r.popperHideTriggers,
    popperShowTriggers: r.popperShowTriggers,
    theme: n.theme,
    triggers: r.internalTriggers,
    hideTriggers: r.hideTriggers,
    showTriggers: r.showTriggers,
    onApplyShow: r.afterShow,
    onApplyHide: r.afterHide
  }, {
    popper: we((d) => [
      Be(e.$slots, "default", Js(ql(d)))
    ]),
    default: we(() => [
      ce(s, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: we((d) => [
          Be(e.$slots, "trigger", Js(ql(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const OS = {
  $style: ES
}, Ap = /* @__PURE__ */ ot($S, [["render", xS], ["__cssModules", OS]]), NS = {
  name: "DotsHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, RS = ["aria-hidden", "aria-label"], IS = ["fill", "width", "height"], LS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, PS = { key: 0 };
function DS(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", LS, [
        i.title ? (h(), p("title", PS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, IS))
  ], 16, RS);
}
const FS = /* @__PURE__ */ ot(NS, [["render", DS]]);
Ca(b0);
function qd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === jt)
        return !1;
      if (i.type === W && !qd(i.children))
        return !1;
      if (i.type === ss && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const MS = ".focusable", US = {
  name: "NcActions",
  components: {
    NcButton: on,
    NcPopover: Ap
  },
  provide() {
    return {
      /**
       * NcActions can be used as:
       * - Application menu (has menu role)
       * - Navigation (has no specific role, should be used an element with navigation role)
       * - Popover with plain text or text inputs (has no specific role)
       * Depending on the usage (used items), the menu and its items should have different roles for a11y.
       * Provide the role for NcAction* components in the NcActions content.
       *
       * @type {import('vue').ComputedRef<boolean>}
       */
      [Ud]: H(() => this.actionsMenuSemanticType === "menu"),
      [Fb]: this.closeMenu
    };
  },
  props: {
    /**
     * Specify the open state of the popover menu
     */
    open: {
      type: Boolean,
      default: !1
    },
    /**
     * This disables the internal open management,
     * so the actions menu only respects the `open` prop.
     * This is e.g. necessary for the NcAvatar component
     * to only open the actions menu after loading it's entries has finished.
     */
    manualOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the name to show for single actions
     */
    forceName: {
      type: Boolean,
      default: !1
    },
    /**
     * Specify the menu name
     */
    menuName: {
      type: String,
      default: null
    },
    /**
     * Apply primary styling for this menu
     */
    primary: {
      type: Boolean,
      default: !1
    },
    /**
     * Icon to show for the toggle menu button
     * when more than one action is inside the actions component.
     * Only replace the default three-dot icon if really necessary.
     */
    defaultIcon: {
      type: String,
      default: ""
    },
    /**
     * Aria label for the actions menu.
     *
     * If `menuName` is defined this will not be used to prevent
     * any accessible name conflicts. This ensures that the
     * element can be activated via voice input.
     */
    ariaLabel: {
      type: String,
      default: Lt("Actions")
    },
    /**
     * Wanted direction of the menu
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * DOM element for the actions' popover boundaries
     */
    boundariesElement: {
      type: Element,
      default: () => document.getElementById("content-vue") ?? document.querySelector("body")
    },
    /**
     * Selector for the actions' popover container
     */
    container: {
      type: [Boolean, String, Object, Element],
      default: "body"
    },
    /**
     * Disabled state of the main button (single action or menu toggle)
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Display x items inline out of the dropdown menu
     * Will be ignored if `forceMenu` is set
     */
    inline: {
      type: Number,
      default: 0
    },
    /**
     * Specifies the button variant used for trigger and single actions buttons.
     *
     * If left empty, the default button style will be applied.
     *
     * @since 8.23.0
     */
    variant: {
      type: String,
      validator(e) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(e);
      },
      default: null
    },
    /**
     * Specifies whether the button should span all the available width.
     */
    wide: {
      type: Boolean,
      default: !1
    },
    /**
     * Specify the size used for trigger and single actions buttons.
     *
     * If left empty, the default button size will be applied.
     */
    size: {
      type: String,
      default: "normal",
      validator(e) {
        return ["small", "normal", "large"].includes(e);
      }
    }
  },
  emits: [
    "click",
    "blur",
    "focus",
    "close",
    "closed",
    "open",
    "opened",
    "update:open"
  ],
  setup() {
    return {
      randomId: gu()
    };
  },
  data() {
    return {
      opened: this.open,
      focusIndex: 0,
      /**
       * @type {'menu'|'navigation'|'dialog'|'tooltip'|'unknown'}
       */
      actionsMenuSemanticType: "unknown"
    };
  },
  computed: {
    triggerButtonVariant() {
      return this.variant || (this.primary ? "primary" : this.menuName ? "secondary" : "tertiary");
    },
    /**
     * A11y roles and keyboard navigation configuration depending on the semantic type
     */
    config() {
      return {
        menu: {
          popupRole: "menu",
          withArrowNavigation: !0,
          withTabNavigation: !1,
          withFocusTrap: !1
        },
        navigation: {
          popupRole: void 0,
          withArrowNavigation: !1,
          withTabNavigation: !0,
          withFocusTrap: !1
        },
        dialog: {
          popupRole: "dialog",
          withArrowNavigation: !1,
          withTabNavigation: !0,
          withFocusTrap: !0
        },
        tooltip: {
          popupRole: void 0,
          withArrowNavigation: !1,
          withTabNavigation: !1,
          withFocusTrap: !1
        },
        // Due to Vue limitations, we sometimes cannot determine the true type
        // As a fallback use both arrow navigation and focus trap
        unknown: {
          popupRole: void 0,
          role: void 0,
          withArrowNavigation: !0,
          withTabNavigation: !1,
          withFocusTrap: !0
        }
      }[this.actionsMenuSemanticType];
    },
    withFocusTrap() {
      return this.config.withFocusTrap;
    }
  },
  watch: {
    // Watch parent prop
    open(e) {
      e !== this.opened && (this.opened = e);
    },
    opened() {
      this.opened ? document.body.addEventListener("keydown", this.handleEscapePressed) : document.body.removeEventListener("keydown", this.handleEscapePressed);
    }
  },
  created() {
    Nk(() => this.opened, {
      disabled: () => this.config.withFocusTrap
    }), "ariaHidden" in this.$attrs;
  },
  methods: {
    /**
     * Get the name of the action component
     *
     * @param {import('vue').VNode} action - a vnode with a NcAction* component instance
     * @return {string} the name of the action component
     */
    getActionName(e) {
      return e?.type?.name;
    },
    /**
     * Do we have exactly one Action and
     * is it allowed as a standalone element?
     *
     * @param {import('vue').VNode} action The action to check
     * @return {boolean}
     */
    isValidSingleAction(e) {
      return ["NcActionButton", "NcActionLink", "NcActionRouter"].includes(this.getActionName(e));
    },
    isAction(e) {
      return this.getActionName(e)?.startsWith?.("NcAction");
    },
    /**
     * Check whether a icon prop value is an URL or not
     *
     * @param {string} url The icon prop value
     */
    isIconUrl(e) {
      try {
        return !!new URL(e, e.startsWith("/") ? window.location.origin : void 0);
      } catch {
        return !1;
      }
    },
    // MENU STATE MANAGEMENT
    toggleMenu(e) {
      e ? this.openMenu() : this.closeMenu();
    },
    openMenu() {
      this.opened || (this.opened = !0, this.$emit("update:open", !0), this.$emit("open"));
    },
    async closeMenu(e = !0) {
      this.opened && (await this.$nextTick(), this.opened = !1, this.$refs.popover?.clearFocusTrap({ returnFocus: e }), this.$emit("update:open", !1), this.$emit("close"), this.focusIndex = 0, e && this.$refs.triggerButton?.$el.focus());
    },
    /**
     * Called when popover is shown after the show delay
     */
    onOpened() {
      this.$nextTick(() => {
        this.focusFirstAction(null), this.$emit("opened");
      });
    },
    onClosed() {
      this.$emit("closed");
    },
    // MENU KEYS & FOCUS MANAGEMENT
    /**
     * @return {HTMLElement|null}
     */
    getCurrentActiveMenuItemElement() {
      return this.$refs.menu.querySelector("li.active");
    },
    /**
     * @return {NodeList<HTMLElement>}
     */
    getFocusableMenuItemElements() {
      return this.$refs.menu.querySelectorAll(MS);
    },
    /**
     * Dispatches the keydown listener to different handlers
     *
     * @param {object} event The keydown event
     */
    onKeydown(e) {
      if (e.key === "Tab") {
        if (this.config.withFocusTrap)
          return;
        if (!this.config.withTabNavigation) {
          this.closeMenu(!0);
          return;
        }
        e.preventDefault();
        const t = this.getFocusableMenuItemElements(), i = [...t].indexOf(document.activeElement);
        if (i === -1)
          return;
        const n = e.shiftKey ? i - 1 : i + 1;
        (n < 0 || n === t.length) && this.closeMenu(!0), this.focusIndex = n, this.focusAction();
        return;
      }
      this.config.withArrowNavigation && (e.key === "ArrowUp" && this.focusPreviousAction(e), e.key === "ArrowDown" && this.focusNextAction(e), e.key === "PageUp" && this.focusFirstAction(e), e.key === "PageDown" && this.focusLastAction(e)), this.handleEscapePressed(e);
    },
    onTriggerKeydown(e) {
      e.key === "Escape" && this.actionsMenuSemanticType === "tooltip" && this.closeMenu();
    },
    handleEscapePressed(e) {
      e.key === "Escape" && (this.closeMenu(), e.preventDefault());
    },
    removeCurrentActive() {
      const e = this.$refs.menu.querySelector("li.active");
      e && e.classList.remove("active");
    },
    focusAction() {
      const e = this.getFocusableMenuItemElements()[this.focusIndex];
      if (e) {
        this.removeCurrentActive();
        const t = e.closest("li.action");
        e.focus(), t && t.classList.add("active");
      }
    },
    focusPreviousAction(e) {
      this.opened && (this.focusIndex === 0 ? this.focusLastAction(e) : (this.preventIfEvent(e), this.focusIndex = this.focusIndex - 1), this.focusAction());
    },
    focusNextAction(e) {
      if (this.opened) {
        const t = this.getFocusableMenuItemElements().length - 1;
        this.focusIndex === t ? this.focusFirstAction(e) : (this.preventIfEvent(e), this.focusIndex = this.focusIndex + 1), this.focusAction();
      }
    },
    focusFirstAction(e) {
      if (this.opened) {
        this.preventIfEvent(e);
        const t = [...this.getFocusableMenuItemElements()].findIndex((i) => i.getAttribute("aria-checked") === "true" && i.getAttribute("role") === "menuitemradio");
        this.focusIndex = t > -1 ? t : 0, this.focusAction();
      }
    },
    focusLastAction(e) {
      this.opened && (this.preventIfEvent(e), this.focusIndex = this.getFocusableMenuItemElements().length - 1, this.focusAction());
    },
    preventIfEvent(e) {
      e && (e.preventDefault(), e.stopPropagation());
    },
    onFocus(e) {
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.$emit("blur", e), this.actionsMenuSemanticType === "tooltip" && this.$refs.menu && this.getFocusableMenuItemElements().length === 0 && this.closeMenu(!1);
    },
    onClick(e) {
      this.$emit("click", e);
    }
  },
  /**
   * The render function to display the component
   *
   * @return {object|undefined} The created VNode
   */
  render() {
    const e = [], t = (k, T) => {
      k.forEach((C) => {
        if (this.isAction(C)) {
          T.push(C);
          return;
        }
        C.type === W && t(C.children, T);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const n = i.slice(0, this.inline), a = e.filter((k) => !n.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = a.some((k) => s.includes(this.getActionName(k))), y = a.some((k) => r.includes(this.getActionName(k))), v = a.some((k) => c.includes(this.getActionName(k)));
    d ? this.actionsMenuSemanticType = "dialog" : y ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((T) => this.getActionName(T).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const g = (k) => {
      const T = k?.props?.icon, C = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(T) ? di("img", { class: "action-item__menutoggle__icon", src: T, alt: "" }) : di("span", { class: ["icon", T] })), O = k?.children?.default?.()?.[0]?.children?.trim(), I = this.forceName ? O : "";
      let L = k?.props?.title;
      this.forceName || L || (L = O);
      const D = { ...k?.props ?? {} }, R = ["submit", "reset"].includes(D.type) ? D.modelValue : "button";
      return delete D.modelValue, delete D.type, di(
        on,
        ei(
          D,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || O,
            title: L,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: R,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (I ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => I,
          icon: () => C
        }
      );
    }, m = (k) => {
      const T = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? di("span", { class: ["icon", this.defaultIcon] }) : di(FS, { size: 20 }), C = `${this.randomId}-trigger`;
      return di(
        Ap,
        {
          ref: "popover",
          delay: 0,
          shown: this.opened,
          placement: this.placement,
          boundary: this.boundariesElement,
          autoBoundaryMaxSize: !0,
          container: this.container,
          ...this.manualOpen && {
            triggers: []
          },
          noCloseOnClickOutside: this.manualOpen,
          popoverBaseClass: "action-item__popper",
          popupRole: this.config.popupRole,
          setReturnFocus: this.config.withFocusTrap ? this.$refs.triggerButton?.$el : void 0,
          noFocusTrap: !this.config.withFocusTrap,
          "onUpdate:shown": this.toggleMenu,
          onAfterShow: this.onOpened,
          onAfterHide: this.onClosed
        },
        {
          trigger: () => di(on, {
            id: C,
            class: "action-item__menutoggle",
            disabled: this.disabled,
            size: this.size,
            variant: this.triggerButtonVariant,
            wide: this.wide,
            ref: "triggerButton",
            "aria-label": this.menuName ? null : this.ariaLabel,
            // 'aria-controls' should only present together with a valid aria-haspopup
            "aria-controls": this.opened && this.config.popupRole ? this.randomId : null,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onKeydown: this.onTriggerKeydown
          }, {
            icon: () => T,
            default: () => this.menuName
          }),
          default: () => di("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            di("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": C,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              k
            ])
          ])
        }
      );
    };
    return e.length === 1 && i.length === 1 && !this.forceMenu ? g(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), n.length > 0 && this.inline > 0 ? di(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...n.map(g),
        // render the rest within the popover menu
        a.length > 0 ? di(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [m(a)]
        ) : null
      ]
    ) : di(
      "div",
      {
        class: [
          "action-item action-item--default-popover",
          `action-item--${this.triggerButtonVariant}`,
          {
            "action-item--open": this.opened,
            "action-item--wide": this.wide
          }
        ]
      },
      [
        m(e)
      ]
    ));
  }
}, Gd = /* @__PURE__ */ ot(US, [["__scopeId", "data-v-7206c1f1"]]), zS = ["aria-label"], jS = ["width", "height"], BS = ["fill"], HS = ["fill"], VS = { key: 0 }, qS = /* @__PURE__ */ Vt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, i = H(() => {
      const n = ["#777", "#CCC"];
      return t.appearance === "light" ? n : t.appearance === "dark" ? n.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (n, a) => (h(), p("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (h(), p("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: i.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, BS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (h(), p("title", VS, o(e.name), 1)) : E("", !0)
        ], 8, HS)
      ], 8, jS))
    ], 8, zS));
  }
}), ng = /* @__PURE__ */ ot(qS, [["__scopeId", "data-v-cf399190"]]), ad = /* @__PURE__ */ Vt({
  name: "NcVNodes",
  props: {
    /**
     * The vnodes to render
     */
    vnodes: {
      type: [Array, Object],
      default: null
    }
  },
  /**
   * The render function to display the component
   */
  render() {
    return this.vnodes || this.$slots?.default?.({});
  }
}), GS = {
  name: "PencilIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, KS = ["aria-hidden", "aria-label"], WS = ["fill", "width", "height"], YS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, ZS = { key: 0 };
function XS(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", YS, [
        i.title ? (h(), p("title", ZS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, WS))
  ], 16, KS);
}
const JS = /* @__PURE__ */ ot(GS, [["render", XS]]), QS = {
  name: "UndoIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, eC = ["aria-hidden", "aria-label"], tC = ["fill", "width", "height"], iC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, nC = { key: 0 };
function aC(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", iC, [
        i.title ? (h(), p("title", nC, o(i.title), 1)) : E("", !0)
      ])
    ], 8, tC))
  ], 16, eC);
}
const rC = /* @__PURE__ */ ot(QS, [["render", aC]]);
Ca(_0);
const lC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: on,
    ChevronDown: Yw,
    ChevronUp: ik
  },
  props: {
    /**
     * Is the list currently open (or collapsed)
     */
    open: {
      type: Boolean,
      required: !0
    },
    /**
     * Is the navigation item currently active.
     */
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["click"],
  setup() {
    return { isLegacy34: Ta };
  },
  computed: {
    labelButton() {
      return this.open ? Lt("Collapse menu") : Lt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function sC(e, t, i, n, a, r) {
  const s = Ze("ChevronUp"), c = Ze("ChevronDown"), d = Ze("NcButton");
  return h(), Pe(d, {
    class: Ae(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: we(() => [
      i.open ? (h(), Pe(s, {
        key: 0,
        size: 20
      })) : (h(), Pe(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const oC = /* @__PURE__ */ ot(lC, [["render", sC], ["__scopeId", "data-v-cfbd3794"]]);
Ca(w0, C0);
const uC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Gd,
    NcActionButton: Ok,
    NcAppNavigationIconCollapsible: oC,
    NcInputConfirmCancel: mk,
    NcLoadingIcon: ng,
    NcVNodes: ad,
    Pencil: JS,
    Undo: rC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Nb, default: null }
  },
  props: {
    /**
     * If you are not using vue-router you can use the property to set this item as the active navigation entry.
     * When using vue-router and the `to` property this is set automatically.
     */
    active: {
      type: Boolean,
      default: !1
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: null
    },
    /**
     * id attribute of the list item element
     */
    id: {
      type: String,
      default: () => gu(),
      validator: (e) => e.trim() !== ""
    },
    /**
     * Refers to the icon on the left, this prop accepts a class
     * like 'icon-category-enabled'.
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Displays a loading animated icon on the left of the element
     * instead of the icon.
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Passing in a route will make the root element of this
     * component a `<router-link />` that points to that route.
     * By leaving this blank, the root element will be a `<li>`.
     */
    to: {
      type: [String, Object],
      default: null
    },
    /**
     * A direct link. This will be used as the `href` attribute.
     * This will ignore any `to` prop being defined.
     */
    href: {
      type: String,
      default: null
    },
    /**
     * Gives the possibility to collapse the children elements into the
     * parent element (true) or expands the children elements (false).
     */
    allowCollapse: {
      type: Boolean,
      default: !1
    },
    /**
     * Makes the name of the item editable by providing an `ActionButton`
     * component that toggles a form
     */
    editable: {
      type: Boolean,
      default: !1
    },
    /**
     * Only for 'editable' items, sets label for the edit action button.
     */
    editLabel: {
      type: String,
      default: ""
    },
    /**
     * Only for items in 'editable' mode, sets the placeholder text for the editing form.
     */
    editPlaceholder: {
      type: String,
      default: ""
    },
    /**
     * Pins the item to the bottom left area, above the settings. Do not
     * place 'non-pinned' `AppnavigationItem` components below `pinned`
     * ones.
     */
    pinned: {
      type: Boolean,
      default: !1
    },
    /**
     * Puts the item in the 'undo' state.
     */
    undo: {
      type: Boolean,
      default: !1
    },
    /**
     * The navigation collapsible state (synced)
     */
    open: {
      type: Boolean,
      default: !1
    },
    /**
     * The actions menu open state (synced)
     */
    menuOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * The action's menu default icon
     */
    menuIcon: {
      type: String,
      default: void 0
    },
    /**
     * The action's menu direction
     */
    menuPlacement: {
      type: String,
      default: "bottom"
    },
    /**
     * Entry aria details
     */
    ariaDescription: {
      type: String,
      default: null
    },
    /**
     * To be used only when the elements in the actions menu are very important
     */
    forceDisplayActions: {
      type: Boolean,
      default: !1
    },
    /**
     * Number of action items outside the menu
     */
    inlineActions: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "update:menuOpen",
    "update:open",
    "update:name",
    "click",
    "undo"
  ],
  setup() {
    return {
      isMobile: cs(),
      isLegacy34: Ta
    };
  },
  data() {
    return {
      actionsBoundariesElement: void 0,
      editingValue: "",
      opened: this.open,
      // Collapsible state
      editingActive: !1,
      /**
       * Tracks the open state of the actions menu
       */
      menuOpenLocalValue: !1,
      focused: !1
    };
  },
  computed: {
    isRouterLink() {
      return this.to && !this.href;
    },
    // Checks if the component is already a children of another
    // instance of AppNavigationItem
    canHaveChildren() {
      return this.$parent.$options._componentTag !== "AppNavigationItem";
    },
    editButtonAriaLabel() {
      return this.editLabel ? this.editLabel : Lt("Edit item");
    },
    undoButtonAriaLabel() {
      return Lt("Undo changes");
    }
  },
  watch: {
    open(e) {
      this.opened = e;
    }
  },
  mounted() {
    this.actionsBoundariesElement = document.querySelector("#content-vue") || void 0;
  },
  beforeUnmount() {
    this.releaseHighlight();
  },
  methods: {
    /** Ask the parent list to move its highlight onto this entry */
    requestHighlight() {
      this.editingActive || this.highlight?.show(this.$refs.entry);
    },
    /** Tell the parent list this entry no longer wants the highlight */
    releaseHighlight() {
      this.highlight?.hide(this.$refs.entry);
    },
    // sync opened menu state with prop
    onMenuToggle(e) {
      this.$emit("update:menuOpen", e), this.menuOpenLocalValue = e;
    },
    // toggle the collapsible state
    toggleCollapse() {
      this.opened = !this.opened, this.$emit("update:open", this.opened);
    },
    /**
     * Handle link click
     *
     * @param {PointerEvent} event - Native click event
     * @param {(event: PointerEvent) => void} [navigate] - VueRouter link's navigate if any
     * @param {string} [routerLinkHref] - VueRouter link's href
     */
    onClick(e, t, i) {
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && Fn("toggle-navigation", { open: !1 }));
    },
    // Edition methods
    handleEdit() {
      this.editingValue = this.name, this.editingActive = !0, this.onMenuToggle(!1), this.$nextTick(() => {
        this.$refs.editingInput.focusInput();
      });
    },
    cancelEditing() {
      this.editingActive = !1;
    },
    handleEditingDone() {
      this.$emit("update:name", this.editingValue), this.editingValue = "", this.editingActive = !1;
    },
    // Undo methods
    handleUndo() {
      this.$emit("undo");
    },
    /**
     * Show actions upon focus
     */
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.focused = !1;
    },
    /**
     * This method checks if the root element of the component is focused and
     * if that's the case it focuses the actions button if available
     *
     * @param {Event} e the keydown event
     */
    handleTab(e) {
      if (this.editingActive)
        return;
      const t = this.$el?.querySelector(".app-navigation-entry__utils");
      if (!t)
        return;
      const i = t.querySelector("button");
      this.focused && i && (e.preventDefault(), i.focus(), this.focused = !1);
    },
    /**
     * Is this an external link
     *
     * @param {string} href The link to check
     * @return {boolean} Whether it is external or not
     */
    isExternal(e) {
      return e && e.match(/[a-z]+:\/\//i);
    }
  }
}, cC = ["id"], dC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], fC = {
  key: 0,
  class: "editingContainer"
}, hC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, pC = { class: "app-navigation-entry__deleted-description" }, vC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, bC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function gC(e, t, i, n, a, r) {
  const s = Ze("NcLoadingIcon"), c = Ze("NcInputConfirmCancel"), d = Ze("Pencil"), y = Ze("NcActionButton"), v = Ze("Undo"), g = Ze("NcActions"), m = Ze("NcAppNavigationIconCollapsible");
  return h(), p("li", {
    id: i.id,
    class: Ae([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (h(), Pe(xd(r.isRouterLink ? "router-link" : "NcVNodes"), Js(ql({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: we(({ href: k, navigate: T, isActive: C }) => [
        l("div", {
          ref: "entry",
          class: Ae(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": n.isLegacy34,
            active: i.to && C || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          i.undo ? E("", !0) : (h(), p("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && C ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: i.href || k || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, T, k),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = ft(Se((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ae(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (h(), Pe(s, { key: 0 })) : Be(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && C
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ae(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, o(i.name), 3),
            a.editingActive ? (h(), p("div", fC, [
              ce(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && C || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : E("", !0)
          ], 40, dC)),
          i.undo ? (h(), p("div", hC, [
            l("div", pC, o(i.name), 1)
          ])) : E("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (h(), p("div", {
            key: 2,
            class: Ae(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (h(), p("div", vC, [
              Be(e.$slots, "counter", {}, void 0, !0)
            ])) : E("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (h(), Pe(g, {
              key: 1,
              ref: "actions",
              class: "app-navigation-entry__actions",
              container: "#app-navigation-vue",
              boundariesElement: a.actionsBoundariesElement,
              inline: i.inlineActions,
              placement: i.menuPlacement,
              open: i.menuOpen,
              forceMenu: i.forceMenu,
              defaultIcon: i.menuIcon,
              variant: "tertiary",
              "onUpdate:open": r.onMenuToggle
            }, {
              icon: we(() => [
                Be(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: we(() => [
                i.editable && !a.editingActive ? (h(), Pe(y, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: we(() => [
                    ce(d, { size: 20 })
                  ]),
                  default: we(() => [
                    ie(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                i.undo ? (h(), Pe(y, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: we(() => [
                    ce(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                Be(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : E("", !0)
          ], 2)) : E("", !0),
          i.allowCollapse && e.$slots.default ? (h(), Pe(m, {
            key: 3,
            active: i.to && C || i.active,
            open: a.opened,
            onClick: Se(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : E("", !0),
          Be(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (h(), p("ul", bC, [
      Be(e.$slots, "default", {}, void 0, !0)
    ])) : E("", !0)
  ], 10, cC);
}
const Tn = /* @__PURE__ */ ot(uC, [["render", gC], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), mC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = Jh(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = Jh(e, a, Object.assign({ capture: i }, r));
    }
    Ac.set(e, n);
  },
  unmounted(e) {
    const t = Ac.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ac.delete(e);
  }
}, yC = {
  mounted(e) {
    e.focus();
  }
}, _C = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", wC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", rd = "numeric", ld = "ascii", sd = "alpha", Rl = "asciinumeric", _l = "alphanumeric", od = "domain", ag = "emoji", kC = "scheme", SC = "slashscheme", Ec = "whitespace";
function CC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Xa(e, t, i) {
  t[rd] && (t[Rl] = !0, t[_l] = !0), t[ld] && (t[Rl] = !0, t[sd] = !0), t[Rl] && (t[_l] = !0), t[sd] && (t[_l] = !0), t[_l] && (t[od] = !0), t[ag] && (t[od] = !0);
  for (const n in t) {
    const a = CC(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function TC(e, t) {
  const i = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (i[n] = !0);
  return i;
}
function ki(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
ki.groups = {};
ki.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(e) {
    const t = this, i = t.j[e];
    if (i)
      return i;
    for (let n = 0; n < t.jr.length; n++) {
      const a = t.jr[n][0], r = t.jr[n][1];
      if (r && a.test(e))
        return r;
    }
    return t.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(e, t = !1) {
    return t ? e in this.j : !!this.go(e);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(e, t, i, n) {
    for (let a = 0; a < e.length; a++)
      this.tt(e[a], t, i, n);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(e, t, i, n) {
    n = n || ki.groups;
    let a;
    return t && t.j ? a = t : (a = new ki(t), i && n && Xa(t, i, n)), this.jr.push([e, a]), a;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(e, t, i, n) {
    let a = this;
    const r = e.length;
    if (!r)
      return a;
    for (let s = 0; s < r - 1; s++)
      a = a.tt(e[s]);
    return a.tt(e[r - 1], t, i, n);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(e, t, i, n) {
    n = n || ki.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, c = a.go(e);
    if (c ? (s = new ki(), Object.assign(s.j, c.j), s.jr.push.apply(s.jr, c.jr), s.jd = c.jd, s.t = c.t) : s = new ki(), r) {
      if (n)
        if (s.t && typeof s.t == "string") {
          const d = Object.assign(TC(s.t, n), i);
          Xa(r, d, n);
        } else i && Xa(r, i, n);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ke = (e, t, i, n, a) => e.ta(t, i, n, a), St = (e, t, i, n, a) => e.tr(t, i, n, a), Ep = (e, t, i, n, a) => e.ts(t, i, n, a), ge = (e, t, i, n, a) => e.tt(t, i, n, a), $n = "WORD", ud = "UWORD", rg = "ASCIINUMERICAL", lg = "ALPHANUMERICAL", ts = "LOCALHOST", cd = "TLD", dd = "UTLD", Xs = "SCHEME", Cr = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Il = "OPENBRACE", Ll = "CLOSEBRACE", To = "OPENBRACKET", Ao = "CLOSEBRACKET", Eo = "OPENPAREN", $o = "CLOSEPAREN", xo = "OPENANGLEBRACKET", Oo = "CLOSEANGLEBRACKET", No = "FULLWIDTHLEFTPAREN", Ro = "FULLWIDTHRIGHTPAREN", Io = "LEFTCORNERBRACKET", Lo = "RIGHTCORNERBRACKET", Po = "LEFTWHITECORNERBRACKET", Do = "RIGHTWHITECORNERBRACKET", Fo = "FULLWIDTHLESSTHAN", Mo = "FULLWIDTHGREATERTHAN", Uo = "AMPERSAND", zo = "APOSTROPHE", jo = "ASTERISK", pa = "AT", Bo = "BACKSLASH", Ho = "BACKTICK", Vo = "CARET", Ja = "COLON", Yd = "COMMA", qo = "DOLLAR", nn = "DOT", Go = "EQUALS", Zd = "EXCLAMATION", Ri = "HYPHEN", Pl = "PERCENT", Ko = "PIPE", Wo = "PLUS", Yo = "POUND", Dl = "QUERY", Xd = "QUOTE", sg = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", an = "SLASH", Fl = "TILDE", Zo = "UNDERSCORE", og = "EMOJI", Xo = "SYM";
var ug = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: lg,
  AMPERSAND: Uo,
  APOSTROPHE: zo,
  ASCIINUMERICAL: rg,
  ASTERISK: jo,
  AT: pa,
  BACKSLASH: Bo,
  BACKTICK: Ho,
  CARET: Vo,
  CLOSEANGLEBRACKET: Oo,
  CLOSEBRACE: Ll,
  CLOSEBRACKET: Ao,
  CLOSEPAREN: $o,
  COLON: Ja,
  COMMA: Yd,
  DOLLAR: qo,
  DOT: nn,
  EMOJI: og,
  EQUALS: Go,
  EXCLAMATION: Zd,
  FULLWIDTHGREATERTHAN: Mo,
  FULLWIDTHLEFTPAREN: No,
  FULLWIDTHLESSTHAN: Fo,
  FULLWIDTHMIDDLEDOT: sg,
  FULLWIDTHRIGHTPAREN: Ro,
  HYPHEN: Ri,
  LEFTCORNERBRACKET: Io,
  LEFTWHITECORNERBRACKET: Po,
  LOCALHOST: ts,
  NL: Wd,
  NUM: Kd,
  OPENANGLEBRACKET: xo,
  OPENBRACE: Il,
  OPENBRACKET: To,
  OPENPAREN: Eo,
  PERCENT: Pl,
  PIPE: Ko,
  PLUS: Wo,
  POUND: Yo,
  QUERY: Dl,
  QUOTE: Xd,
  RIGHTCORNERBRACKET: Lo,
  RIGHTWHITECORNERBRACKET: Do,
  SCHEME: Xs,
  SEMI: Jd,
  SLASH: an,
  SLASH_SCHEME: Cr,
  SYM: Xo,
  TILDE: Fl,
  TLD: cd,
  UNDERSCORE: Zo,
  UTLD: dd,
  UWORD: ud,
  WORD: $n,
  WS: fd
});
const An = /[a-z]/, vl = new RegExp("\\p{L}", "u"), $c = new RegExp("\\p{Emoji}", "u"), En = /\d/, xc = /\s/, $p = "\r", Oc = `
`, AC = "️", EC = "‍", Nc = "￼";
let Vs = null, qs = null;
function $C(e = []) {
  const t = {};
  ki.groups = t;
  const i = new ki();
  Vs == null && (Vs = xp(_C)), qs == null && (qs = xp(wC)), ge(i, "'", zo), ge(i, "{", Il), ge(i, "}", Ll), ge(i, "[", To), ge(i, "]", Ao), ge(i, "(", Eo), ge(i, ")", $o), ge(i, "<", xo), ge(i, ">", Oo), ge(i, "（", No), ge(i, "）", Ro), ge(i, "「", Io), ge(i, "」", Lo), ge(i, "『", Po), ge(i, "』", Do), ge(i, "＜", Fo), ge(i, "＞", Mo), ge(i, "&", Uo), ge(i, "*", jo), ge(i, "@", pa), ge(i, "`", Ho), ge(i, "^", Vo), ge(i, ":", Ja), ge(i, ",", Yd), ge(i, "$", qo), ge(i, ".", nn), ge(i, "=", Go), ge(i, "!", Zd), ge(i, "-", Ri), ge(i, "%", Pl), ge(i, "|", Ko), ge(i, "+", Wo), ge(i, "#", Yo), ge(i, "?", Dl), ge(i, '"', Xd), ge(i, "/", an), ge(i, ";", Jd), ge(i, "~", Fl), ge(i, "_", Zo), ge(i, "\\", Bo), ge(i, "・", sg);
  const n = St(i, En, Kd, {
    [rd]: !0
  });
  St(n, En, n);
  const a = St(n, An, rg, {
    [Rl]: !0
  }), r = St(n, vl, lg, {
    [_l]: !0
  }), s = St(i, An, $n, {
    [ld]: !0
  });
  St(s, En, a), St(s, An, s), St(a, En, a), St(a, An, a);
  const c = St(i, vl, ud, {
    [sd]: !0
  });
  St(c, An), St(c, En, r), St(c, vl, c), St(r, En, r), St(r, An), St(r, vl, r);
  const d = ge(i, Oc, Wd, {
    [Ec]: !0
  }), y = ge(i, $p, fd, {
    [Ec]: !0
  }), v = St(i, xc, fd, {
    [Ec]: !0
  });
  ge(i, Nc, v), ge(y, Oc, d), ge(y, Nc, v), St(y, xc, v), ge(v, $p), ge(v, Oc), St(v, xc, v), ge(v, Nc, v);
  const g = St(i, $c, og, {
    [ag]: !0
  });
  ge(g, "#"), St(g, $c, g), ge(g, AC, g);
  const m = ge(g, EC);
  ge(m, "#"), St(m, $c, g);
  const k = [[An, s], [En, a]], T = [[An, null], [vl, c], [En, r]];
  for (let C = 0; C < Vs.length; C++)
    oa(i, Vs[C], cd, $n, k);
  for (let C = 0; C < qs.length; C++)
    oa(i, qs[C], dd, ud, T);
  Xa(cd, {
    tld: !0,
    ascii: !0
  }, t), Xa(dd, {
    utld: !0,
    alpha: !0
  }, t), oa(i, "file", Xs, $n, k), oa(i, "mailto", Xs, $n, k), oa(i, "http", Cr, $n, k), oa(i, "https", Cr, $n, k), oa(i, "ftp", Cr, $n, k), oa(i, "ftps", Cr, $n, k), Xa(Xs, {
    scheme: !0,
    ascii: !0
  }, t), Xa(Cr, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((C, O) => C[0] > O[0] ? 1 : -1);
  for (let C = 0; C < e.length; C++) {
    const O = e[C][0], L = e[C][1] ? {
      [kC]: !0
    } : {
      [SC]: !0
    };
    O.indexOf("-") >= 0 ? L[od] = !0 : An.test(O) ? En.test(O) ? L[Rl] = !0 : L[ld] = !0 : L[rd] = !0, Ep(i, O, O, L);
  }
  return Ep(i, "localhost", ts, {
    ascii: !0
  }), i.jd = new ki(Xo), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, ug)
  };
}
function cg(e, t) {
  const i = xC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), n = i.length, a = [];
  let r = 0, s = 0;
  for (; s < n; ) {
    let c = e, d = null, y = 0, v = null, g = -1, m = -1;
    for (; s < n && (d = c.go(i[s])); )
      c = d, c.accepts() ? (g = 0, m = 0, v = c) : g >= 0 && (g += i[s].length, m++), y += i[s].length, r += i[s].length, s++;
    r -= g, s -= m, y -= g, a.push({
      t: v.t,
      // token type/name
      v: t.slice(r - y, r),
      // string value
      s: r - y,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function xC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, s = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(s), n += s.length;
  }
  return t;
}
function oa(e, t, i, n, a) {
  let r;
  const s = t.length;
  for (let c = 0; c < s - 1; c++) {
    const d = t[c];
    e.j[d] ? r = e.j[d] : (r = new ki(n), r.jr = a.slice(), e.j[d] = r), e = r;
  }
  return r = new ki(i), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function xp(e) {
  const t = [], i = [];
  let n = 0, a = "0123456789";
  for (; n < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[n + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(i.join(""));
      for (let s = parseInt(e.substring(n, n + r), 10); s > 0; s--)
        i.pop();
      n += r;
    } else
      i.push(e[n]), n++;
  }
  return t;
}
const is = {
  defaultProtocol: "http",
  events: null,
  format: Op,
  formatHref: Op,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Qd(e, t = null) {
  let i = Object.assign({}, is);
  e && (i = Object.assign(i, e instanceof Qd ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
Qd.prototype = {
  o: is,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(e) {
    return e;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(e) {
    return this.get("validate", e.toString(), e);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(e, t, i) {
    const n = t != null;
    let a = this.o[e];
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : is[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, i) {
    let n = this.o[e];
    return typeof n == "function" && t != null && (n = n(t, i.t, i)), n;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(e) {
    const t = e.render(this);
    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
  }
};
function Op(e) {
  return e;
}
function dg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
dg.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(e) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(e) {
    const t = this.toString(), i = e.get("truncate", t, this), n = e.get("format", t, this);
    return i && n.length > i ? n.substring(0, i) + "…" : n;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(e) {
    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
	Returns an object  of relevant values for this token, which includes keys
	* type - Kind of token ('url', 'email', etc.)
	* value - Original text
	* href - The value that should be added to the anchor tag's href
		attribute
		@method toObject
	@param {string} [protocol] `'http'` by default
  */
  toObject(e = is.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(e) {
    return e.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(e) {
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), s = {}, c = e.get("className", i, t), d = e.get("target", i, t), y = e.get("rel", i, t), v = e.getObj("attributes", i, t), g = e.getObj("events", i, t);
    return s.href = n, c && (s.class = c), d && (s.target = d), y && (s.rel = y), v && Object.assign(s, v), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: g
    };
  }
};
function wu(e, t) {
  class i extends dg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const OC = wu("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Np = wu("text"), NC = wu("nl"), Gs = wu("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = is.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ts && e[1].t === Ja;
  }
}), Oi = (e) => new ki(e);
function RC({
  groups: e
}) {
  const t = e.domain.concat([Uo, jo, pa, Bo, Ho, Vo, qo, Go, Ri, Kd, Pl, Ko, Wo, Yo, an, Xo, Fl, Zo]), i = [zo, Ja, Yd, nn, Zd, Pl, Dl, Xd, Jd, xo, Oo, Il, Ll, Ao, To, Eo, $o, No, Ro, Io, Lo, Po, Do, Fo, Mo], n = [Uo, zo, jo, Bo, Ho, Vo, qo, Go, Ri, Il, Ll, Pl, Ko, Wo, Yo, Dl, an, Xo, Fl, Zo], a = Oi(), r = ge(a, Fl);
  Ke(r, n, r), Ke(r, e.domain, r);
  const s = Oi(), c = Oi(), d = Oi();
  Ke(a, e.domain, s), Ke(a, e.scheme, c), Ke(a, e.slashscheme, d), Ke(s, n, r), Ke(s, e.domain, s);
  const y = ge(s, pa);
  ge(r, pa, y), ge(c, pa, y), ge(d, pa, y);
  const v = ge(r, nn);
  Ke(v, n, r), Ke(v, e.domain, r);
  const g = Oi();
  Ke(y, e.domain, g), Ke(g, e.domain, g);
  const m = ge(g, nn);
  Ke(m, e.domain, g);
  const k = Oi(OC);
  Ke(m, e.tld, k), Ke(m, e.utld, k), ge(y, ts, k);
  const T = ge(g, Ri);
  ge(T, Ri, T), Ke(T, e.domain, g), Ke(k, e.domain, g), ge(k, nn, m), ge(k, Ri, T);
  const C = ge(s, Ri), O = ge(s, nn);
  ge(C, Ri, C), Ke(C, e.domain, s), Ke(O, n, r), Ke(O, e.domain, s);
  const I = Oi(Gs);
  Ke(O, e.tld, I), Ke(O, e.utld, I), Ke(I, e.domain, s), Ke(I, n, r), ge(I, nn, O), ge(I, Ri, C), ge(I, pa, y);
  const L = ge(I, Ja), D = Oi(Gs);
  Ke(L, e.numeric, D);
  const R = Oi(Gs), pe = Oi();
  Ke(R, t, R), Ke(R, i, pe), Ke(pe, t, R), Ke(pe, i, pe), ge(I, an, R), ge(D, an, R);
  const Q = ge(c, Ja), $ = ge(d, Ja), q = ge($, an), K = ge(q, an);
  Ke(c, e.domain, s), ge(c, nn, O), ge(c, Ri, C), Ke(d, e.domain, s), ge(d, nn, O), ge(d, Ri, C), Ke(Q, e.domain, R), ge(Q, an, R), ge(Q, Dl, R), Ke(K, e.domain, R), Ke(K, t, R), ge(K, an, R);
  const Y = [
    [Il, Ll],
    // {}
    [To, Ao],
    // []
    [Eo, $o],
    // ()
    [xo, Oo],
    // <>
    [No, Ro],
    // （）
    [Io, Lo],
    // 「」
    [Po, Do],
    // 『』
    [Fo, Mo]
    // ＜＞
  ];
  for (let ne = 0; ne < Y.length; ne++) {
    const [B, z] = Y[ne], x = ge(R, B);
    ge(pe, B, x);
    const P = Oi(Gs);
    Ke(x, t, P);
    const Z = Oi();
    Ke(x, i, Z), ge(x, z, R), Ke(P, t, P), Ke(P, i, Z), Ke(Z, t, P), Ke(Z, i, Z), ge(P, z, R), ge(Z, z, R);
  }
  return ge(a, ts, I), ge(a, Wd, NC), {
    start: a,
    tokens: ug
  };
}
function IC(e, t, i) {
  let n = i.length, a = 0, r = [], s = [];
  for (; a < n; ) {
    let c = e, d = null, y = null, v = 0, g = null, m = -1;
    for (; a < n && !(d = c.go(i[a].t)); )
      s.push(i[a++]);
    for (; a < n && (y = d || c.go(i[a].t)); )
      d = null, c = y, c.accepts() ? (m = 0, g = c) : m >= 0 && m++, a++, v++;
    if (m < 0)
      a -= v, a < n && (s.push(i[a]), a++);
    else {
      s.length > 0 && (r.push(Rc(Np, t, s)), s = []), a -= m, v -= m;
      const k = g.t, T = i.slice(a - v, a);
      r.push(Rc(k, t, T));
    }
  }
  return s.length > 0 && r.push(Rc(Np, t, s)), r;
}
function Rc(e, t, i) {
  const n = i[0].s, a = i[i.length - 1].e, r = t.slice(n, a);
  return new e(r, i);
}
const Wt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function LC() {
  Wt.scanner = $C(Wt.customSchemes);
  for (let e = 0; e < Wt.tokenQueue.length; e++)
    Wt.tokenQueue[e][1]({
      scanner: Wt.scanner
    });
  Wt.parser = RC(Wt.scanner.tokens);
  for (let e = 0; e < Wt.pluginQueue.length; e++)
    Wt.pluginQueue[e][1]({
      scanner: Wt.scanner,
      parser: Wt.parser
    });
  return Wt.initialized = !0, Wt;
}
function fg(e) {
  return Wt.initialized || LC(), IC(Wt.parser.start, e, cg(Wt.scanner.start, e));
}
fg.scan = cg;
function PC(e) {
  const t = new Qd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, MC), i = fg(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(ho(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function DC(e) {
  return e.replace(/"/g, "&quot;");
}
function FC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${DC(n)}"`);
  }
  return t.join(" ");
}
function MC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${FC(t)}>${ho(i)}</${e}>`;
}
const UC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = PC(t.text));
}, zC = ["title"], jC = /* @__PURE__ */ Vt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Zt("NcAppSidebar:header:ref");
    return (i, n) => be((h(), p("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ie(o(e.name), 1)
    ], 8, zC)), [
      [u(UC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), BC = ["aria-labelledby"], HC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, VC = ["id"], qC = {
  key: 2,
  class: "empty-content__description"
}, GC = {
  key: 3,
  class: "empty-content__action"
}, KC = /* @__PURE__ */ Vt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = gu();
    return (i, n) => (h(), p("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (h(), p("div", HC, [
        Be(i.$slots, "icon", {}, void 0, !0)
      ])) : E("", !0),
      e.name !== "" || i.$slots.name ? (h(), p("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        Be(i.$slots, "name", {}, () => [
          ie(o(e.name), 1)
        ], !0)
      ], 8, VC)) : E("", !0),
      e.description !== "" || i.$slots.description ? (h(), p("p", qC, [
        Be(i.$slots, "description", {}, () => [
          ie(o(e.description), 1)
        ], !0)
      ])) : E("", !0),
      i.$slots.action ? (h(), p("div", GC, [
        Be(i.$slots, "action", {}, void 0, !0)
      ])) : E("", !0)
    ], 8, BC));
  }
}), WC = /* @__PURE__ */ ot(KC, [["__scopeId", "data-v-8609a4c1"]]), YC = {
  name: "DockRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, ZC = ["aria-hidden", "aria-label"], XC = ["fill", "width", "height"], JC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, QC = { key: 0 };
function e2(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", JC, [
        i.title ? (h(), p("title", QC, o(i.title), 1)) : E("", !0)
      ])
    ], 8, XC))
  ], 16, ZC);
}
const t2 = /* @__PURE__ */ ot(YC, [["render", e2]]), i2 = {
  name: "StarIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, n2 = ["aria-hidden", "aria-label"], a2 = ["fill", "width", "height"], r2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, l2 = { key: 0 };
function s2(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", r2, [
        i.title ? (h(), p("title", l2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, a2))
  ], 16, n2);
}
const o2 = /* @__PURE__ */ ot(i2, [["render", s2]]), u2 = {
  name: "StarOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, c2 = ["aria-hidden", "aria-label"], d2 = ["fill", "width", "height"], f2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, h2 = { key: 0 };
function p2(e, t, i, n, a, r) {
  return h(), p("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (h(), p("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", f2, [
        i.title ? (h(), p("title", h2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, d2))
  ], 16, c2);
}
const v2 = /* @__PURE__ */ ot(u2, [["render", p2]]), b2 = ["aria-selected", "tabindex"], g2 = /* @__PURE__ */ Vt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Fy({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Ov(e, "selected"), i = /* @__PURE__ */ G(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (h(), p("button", {
      class: Ae(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: u(Ta),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      l("span", {
        class: Ae([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (s) => i.value = !1)
      }, [
        l("span", {
          class: Ae([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ce(ad, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: we(() => [
              l("span", {
                class: Ae([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Ae([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ce(ad, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: we(() => [
              l("span", {
                class: Ae([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Ae(a.$style.sidebarTabsButton__name)
      }, o(e.tab.name), 3)
    ], 10, b2));
  }
}), m2 = "_sidebarTabsButton_q3kBA", y2 = "_sidebarTabsButton_legacy_KQ4d1", _2 = "_sidebarTabsButton_selected_Pjayf", w2 = "_sidebarTabsButton_animatedHighlight_uvp-0", k2 = "_sidebarTabsButton__name_rlQsL", S2 = "_sidebarTabsButton__icon_QzZg4", C2 = "_sidebarTabsButton__iconLayer_ZkZan", T2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", A2 = "_sidebarTabsButton__icon_pop_IA0By", E2 = "_sidebarTabsButton__legacyIcon_QhcNW", $2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: m2,
  sidebarTabsButton_legacy: y2,
  sidebarTabsButton_selected: _2,
  sidebarTabsButton_animatedHighlight: w2,
  sidebarTabsButton__name: k2,
  sidebarTabsButton__icon: S2,
  sidebarTabsButton__iconLayer: C2,
  sidebarTabsButton__iconLayer_hidden: T2,
  sidebarTabsButton__icon_pop: A2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: E2
}, x2 = {
  $style: $2
}, O2 = /* @__PURE__ */ ot(g2, [["__cssModules", x2]]), N2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: O2
  },
  provide() {
    return {
      registerTab: this.registerTab,
      unregisterTab: this.unregisterTab,
      // Getter as an alternative to Vue 2.7 computed(() => this.activeTab)
      getActiveTab: () => this.activeTab,
      // Used to check whether the tab header is shown so the tabs can reference the tab header for `aria-labelledby` or not
      isTablistShown: () => this.hasMultipleTabs
    };
  },
  props: {
    /**
     * Id of the tab to activate
     */
    active: {
      type: String,
      default: ""
    },
    /**
     * Force the tab navigation to display even if there is only one tab
     */
    forceTabs: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:active"],
  data(e) {
    return {
      /**
       * Tab descriptions from the passed NcSidebarTab components' props to build the tab navbar from.
       */
      tabs: [],
      /**
       * Local active (open) tab's ID. It allows to use component without v-model:active
       */
      activeTab: e.active,
      isLegacy34: Ta,
      /** Whether the sliding highlight runs (JS mounted, non-legacy design) */
      highlightEnabled: !1,
      /** Whether the highlight is currently shown */
      highlightVisible: !1,
      /** Whether position changes should transition (slide) or snap */
      highlightAnimated: !1,
      /** Whether the highlight sits on the active tab (turns transparent) */
      highlightOverActive: !1,
      /** Highlight geometry inside the tablist, in pixels */
      highlightLeft: 0,
      highlightTop: 0,
      highlightWidth: 0,
      highlightHeight: 0
    };
  },
  computed: {
    /**
     * Has multiple tabs. If only one tab - its content is shown without navigation
     *
     * @return {boolean}
     */
    hasMultipleTabs() {
      return this.tabs.length > 1;
    },
    showForSingleTab() {
      return this.forceTabs && this.tabs.length === 1;
    },
    currentTabIndex() {
      return this.tabs.findIndex((e) => e.id === this.activeTab);
    },
    highlightStyle() {
      return {
        transform: `translate(${this.highlightLeft}px, ${this.highlightTop}px)`,
        width: `${this.highlightWidth}px`,
        height: `${this.highlightHeight}px`
      };
    }
  },
  watch: {
    tabs() {
      this.active && this.updateActive();
    },
    active(e) {
      e !== this.activeTab && this.updateActive();
    }
  },
  mounted() {
    this.highlightedButton = null, this.highlightEnabled = !this.isLegacy34;
  },
  methods: {
    /**
     * Set the current active tab
     *
     * @param {string} id the id of the tab
     */
    setActive(e) {
      this.activeTab = e, this.$emit("update:active", this.activeTab);
    },
    /**
     * Focus the previous tab
     * and emit to the parent component
     */
    focusPreviousTab() {
      this.currentTabIndex > 0 && this.setActive(this.tabs[this.currentTabIndex - 1].id), this.focusActiveTab();
    },
    /**
     * Focus the next tab
     * and emit to the parent component
     */
    focusNextTab() {
      this.currentTabIndex < this.tabs.length - 1 && this.setActive(this.tabs[this.currentTabIndex + 1].id), this.focusActiveTab();
    },
    /**
     * Focus the first tab
     * and emit to the parent component
     */
    focusFirstTab() {
      this.setActive(this.tabs[0].id), this.focusActiveTab();
    },
    /**
     * Focus the last tab
     * and emit to the parent component
     */
    focusLastTab() {
      this.setActive(this.tabs[this.tabs.length - 1].id), this.focusActiveTab();
    },
    /**
     * Focus the current active tab
     */
    focusActiveTab() {
      this.$el.querySelector(`#tab-button-${this.activeTab}`).focus();
    },
    /**
     * Focus the content on tab
     * see aria accessibility guidelines
     */
    focusActiveTabContent() {
      this.$el.querySelector("#tab-" + this.activeTab).focus();
    },
    /**
     * Update the current active tab
     */
    updateActive() {
      this.activeTab = this.active && this.tabs.some(({ id: e }) => e === this.active) ? this.active : this.tabs[0]?.id ?? "";
    },
    /**
     * Register child tab in the tabs
     *
     * @param {object} tab child tab passed to slot
     */
    registerTab(e) {
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [D_()]) : t.order - i.order), this.updateActive();
    },
    /**
     * Unregister child tab from the tabs
     *
     * @param {string} id tab's id
     */
    unregisterTab(e) {
      const t = this.tabs.findIndex((i) => i.id === e);
      t !== -1 && this.tabs.splice(t, 1), this.activeTab === e && this.updateActive();
    },
    /**
     * Move the sliding highlight onto a tab button. It slides there if
     * already visible, otherwise it snaps into place so it does not slide in
     * from a previously hovered tab. Over the active tab it turns transparent
     * so the active tab keeps its own static background.
     *
     * @param {HTMLElement} button the tab button element to cover
     */
    showHighlightOn(e) {
      const t = e.getBoundingClientRect(), i = this.$refs.nav.getBoundingClientRect(), n = this.highlightVisible;
      this.highlightAnimated = n, this.highlightOverActive = e.getAttribute("aria-selected") === "true", this.highlightLeft = t.left - i.left, this.highlightTop = t.top - i.top, this.highlightWidth = t.width, this.highlightHeight = t.height, n || (this.highlightVisible = !0, this.$nextTick(() => requestAnimationFrame(() => {
        this.highlightAnimated = !0;
      })));
    },
    /** Hide the sliding highlight */
    hideHighlight() {
      this.highlightVisible = !1, this.highlightedButton = null;
    },
    /**
     * Move the highlight to the tab button under the pointer or focus
     *
     * @param {Event} event the pointer or focus event
     */
    handleHighlight(e) {
      if (!this.highlightEnabled)
        return;
      const t = e.target?.closest?.(".app-sidebar-tabs__tab");
      !t || t === this.highlightedButton || !this.$refs.nav.contains(t) || (this.highlightedButton = t, this.showHighlightOn(t));
    },
    /**
     * Hide the highlight once focus leaves the tablist entirely
     *
     * @param {FocusEvent} event the focusout event
     */
    onHighlightFocusOut(e) {
      this.highlightEnabled && !this.$refs.nav.contains(e.relatedTarget) && this.hideHighlight();
    }
  }
}, R2 = { class: "app-sidebar-tabs" };
function I2(e, t, i, n, a, r) {
  const s = Ze("NcAppSidebarTabsButton");
  return h(), p("div", R2, [
    r.hasMultipleTabs || r.showForSingleTab ? (h(), p("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ae(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ft(Se((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ft(Se((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ft(Se((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ft(Se((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ft(Se((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ft(Se((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ft(Se((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (h(), p("div", {
        key: 0,
        class: Ae(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: hi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : E("", !0),
      (h(!0), p(W, null, ue(a.tabs, (c) => (h(), Pe(s, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (d) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : E("", !0),
    l("div", {
      class: Ae(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Be(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const L2 = /* @__PURE__ */ ot(N2, [["render", I2], ["__scopeId", "data-v-74190d2a"]]);
Ca(m0);
const P2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: Gd,
    NcAppSidebarHeader: jC,
    NcAppSidebarTabs: L2,
    NcButton: on,
    NcLoadingIcon: ng,
    NcEmptyContent: WC,
    IconArrowRight: Pb,
    IconClose: Db,
    IconDockRight: t2,
    IconStar: o2,
    IconStarOutline: v2
  },
  directives: {
    Focus: yC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: mC
  },
  inject: {
    ncContentSelector: {
      from: Lb,
      default: void 0
    }
  },
  props: {
    /**
     * The active tab
     */
    active: {
      type: String,
      default: ""
    },
    /**
     * Main text of the sidebar
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * Allow to edit the sidebar name.
     */
    nameEditable: {
      type: Boolean,
      default: !1
    },
    /**
     * Placeholder in the edit field if the name is editable.
     */
    namePlaceholder: {
      type: String,
      default: ""
    },
    /**
     * Secondary name of the sidebar (subline)
     */
    subname: {
      type: String,
      default: ""
    },
    /**
     * Title to display for the subname.
     */
    subtitle: {
      type: String,
      default: ""
    },
    /**
     * Url to the top header background image
     * Applied with css
     */
    background: {
      type: String,
      default: ""
    },
    /**
     * Enable the favourite icon if not null
     * See fired events
     */
    starred: {
      type: Boolean,
      default: null
    },
    /**
     * Show loading spinner instead of the star icon
     */
    starLoading: {
      type: Boolean,
      default: !1
    },
    /**
     * Show loading spinner instead of tabs
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Display the sidebar in compact mode
     */
    compact: {
      type: Boolean,
      default: !1
    },
    /**
     * Only display close button and default slot content.
     * Don't display other header content and primary and secondary actions.
     * Useful when showing the EmptyContent component as content.
     */
    empty: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the tab navigation to display even if there is only one tab
     */
    forceTabs: {
      type: Boolean,
      default: !1
    },
    /**
     * Linkify the name
     */
    linkifyName: {
      type: Boolean,
      default: !1
    },
    /**
     * Title to display for the name.
     * Can be set to the same text in case it's too long.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Allow to conditionally show the sidebar
     * You can also use `v-if` on the sidebar, but using the open prop allow to keep
     * the sidebar inside the DOM for performance if it is opened and closed multiple times.
     *
     * When using the `open` property to close the sidebar a built-in toggle button will be shown to reopen it,
     * similar to the app navigation. You can remove this button with the `no-toggle` prop.
     */
    open: {
      type: Boolean,
      default: !0
    },
    /**
     * Custom classes to assign to the sidebar toggle button.
     * If needed this can be used to assign styles to the button using `:deep()` selector.
     */
    toggleClasses: {
      type: [String, Array, Object],
      default: ""
    },
    /**
     * Custom attrs to assign to the sidebar toggle button.
     */
    toggleAttrs: {
      type: Object,
      default: void 0
    },
    /**
     * Do not add the built-in toggle button with `open` prop.
     */
    noToggle: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "close",
    "closed",
    "opened",
    // 'figureClick', not emitted on purpose to make "hasFigureClickListener" work
    "update:active",
    "update:name",
    "update:nameEditable",
    "update:open",
    "update:starred",
    "submitName",
    "dismissEditing"
  ],
  setup() {
    const e = /* @__PURE__ */ G(null);
    return Ii("NcAppSidebar:header:ref", e), {
      uid: gu(),
      isMobile: f0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Lt("Change name"),
      closeTranslated: Lt("Close sidebar"),
      favoriteTranslated: Lt("Favorite"),
      isStarred: this.starred,
      focusTrap: null,
      elementToReturnFocus: null
    };
  },
  computed: {
    canStar() {
      return this.isStarred !== null;
    },
    hasFigureClickListener() {
      return !!this.$attrs.onFigureClick;
    }
  },
  watch: {
    starred() {
      this.isStarred = this.starred;
    },
    isMobile() {
      this.toggleFocusTrap();
    },
    open() {
      this.checkToggleButtonContainerAvailability();
    }
  },
  created() {
    this.preserveElementToReturnFocus(), this.checkToggleButtonContainerAvailability();
  },
  beforeUnmount() {
    this.$emit("closed"), this.focusTrap?.deactivate();
  },
  methods: {
    isSlotPopulated: qd,
    t: Lt,
    preserveElementToReturnFocus() {
      if (document.activeElement && document.activeElement !== document.body && (this.elementToReturnFocus = document.activeElement, this.elementToReturnFocus.getAttribute("role") === "menuitem")) {
        const e = this.elementToReturnFocus.closest('[role="menu"]');
        if (e) {
          const t = document.querySelector(`[aria-controls="${e.id}"]`);
          this.elementToReturnFocus = t;
        }
      }
    },
    initFocusTrap() {
      this.focusTrap || (this.focusTrap = Md([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Zl(),
        escapeDeactivates: !1
      }));
    },
    /**
     * Activate focus trap if it is currently needed, otherwise deactivate
     */
    toggleFocusTrap() {
      this.open && this.isMobile ? (this.initFocusTrap(), this.focusTrap.activate()) : this.focusTrap?.deactivate();
    },
    /**
     * Close the sidebar on pressing the escape key on mobile
     *
     * @param {KeyboardEvent} event key down event
     */
    onKeydownEsc(e) {
      this.isMobile && (e.stopPropagation(), this.closeSidebar());
    },
    onAfterEnter(e) {
      this.elementToReturnFocus && this.focus(), this.toggleFocusTrap(), this.$emit("opened", e);
    },
    onAfterLeave(e) {
      this.$emit("closed", e), this.toggleFocusTrap(), this.elementToReturnFocus?.focus({ focusVisible: !0 }), this.elementToReturnFocus = null;
    },
    /**
     * Used to tell parent component the user asked to close the sidebar
     *
     * @param {Event} e close icon click event
     */
    closeSidebar(e) {
      this.$emit("close", e), this.$emit("update:open", !1);
    },
    /**
     * Emit figure click event to parent component
     *
     * @param {Event} e click event
     */
    onFigureClick(e) {
      this.$emit("figureClick", e);
    },
    /**
     * Toggle the favourite state
     * and emit to the parent component
     */
    toggleStarred() {
      this.isStarred = !this.isStarred, this.$emit("update:starred", this.isStarred);
    },
    async editName() {
      this.$emit("update:nameEditable", !0), this.nameEditable && (await this.$nextTick(), this.$refs.nameInput.focus());
    },
    /**
     * Focus the sidebar
     *
     * @public
     */
    focus() {
      if (!this.open && !this.noToggle) {
        this.$refs.toggle.$el.focus();
        return;
      }
      try {
        this.headerRef.focus();
      } catch {
      }
    },
    /**
     * Focus the active tab
     *
     * @public
     */
    focusActiveTabContent() {
      this.preserveElementToReturnFocus(), this.$refs.tabs.focusActiveTabContent();
    },
    /**
     * Check if the toggle button container is available
     */
    checkToggleButtonContainerAvailability() {
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ir.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
    },
    /**
     * Emit name change event to parent component
     *
     * @param {Event} event input event
     */
    onNameInput(e) {
      this.$emit("update:name", e.target.value);
    },
    /**
     * Emit when the name form edit confirm button is pressed in order
     * to change the name.
     *
     * @param {Event} event submit event
     */
    onSubmitName(e) {
      this.$emit("update:nameEditable", !1), this.$emit("submitName", e);
    },
    onDismissEditing() {
      this.$emit("update:nameEditable", !1), this.$emit("dismissEditing");
    },
    onUpdateActive(e) {
      this.$emit("update:active", e);
    }
  }
}, D2 = ["aria-labelledby"], F2 = { class: "app-sidebar-header__info" }, M2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, U2 = { class: "app-sidebar-header__name-container" }, z2 = { class: "app-sidebar-header__mainname-container" }, j2 = ["placeholder", "value"], B2 = ["title"], H2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function V2(e, t, i, n, a, r) {
  const s = Ze("IconDockRight"), c = Ze("NcButton"), d = Ze("NcLoadingIcon"), y = Ze("IconStar"), v = Ze("IconStarOutline"), g = Ze("NcAppSidebarHeader"), m = Ze("IconArrowRight"), k = Ze("NcActions"), T = Ze("IconClose"), C = Ze("NcAppSidebarTabs"), O = Ze("NcEmptyContent"), I = Yf("focus"), L = Yf("click-outside");
  return h(), Pe(C1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: we(() => [
      be(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = ft((...D) => r.onKeydownEsc && r.onKeydownEsc(...D), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (h(), Pe(Ed, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ce(c, ei({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (D) => e.$emit("update:open", !0))
          }), {
            icon: we(() => [
              Be(e.$slots, "toggle-icon", {}, () => [
                ce(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : E("", !0),
        l("header", {
          class: Ae(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (h(), Pe(g, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Be(e.$slots, "info", { key: 0 }, () => [
            l("div", F2, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (h(), p("div", {
                key: 0,
                class: Ae(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: hi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...D) => r.onFigureClick && r.onFigureClick(...D)),
                onKeydown: t[2] || (t[2] = ft((...D) => r.onFigureClick && r.onFigureClick(...D), ["enter"]))
              }, [
                Be(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : E("", !0),
              l("div", {
                class: Ae(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (h(), p("div", M2, [
                  Be(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (h(), Pe(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Se(r.toggleStarred, ["prevent"])
                    }, {
                      icon: we(() => [
                        i.starLoading ? (h(), Pe(d, { key: 0 })) : a.isStarred ? (h(), Pe(y, {
                          key: 1,
                          size: 20
                        })) : (h(), Pe(v, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : E("", !0)
                  ], !0)
                ])) : E("", !0),
                l("div", U2, [
                  l("div", z2, [
                    be(ce(g, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: Se(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [tr, !i.nameEditable]
                    ]),
                    i.nameEditable ? be((h(), p("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Se((...D) => r.onSubmitName && r.onSubmitName(...D), ["prevent"]))
                    }, [
                      be(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = ft(Se((...D) => r.onDismissEditing && r.onDismissEditing(...D), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...D) => r.onNameInput && r.onNameInput(...D))
                      }, null, 40, j2), [
                        [I]
                      ]),
                      ce(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: we(() => [
                          ce(m, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [L, () => r.onSubmitName()]
                    ]) : E("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (h(), Pe(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: we(() => [
                        Be(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : E("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (h(), p("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Be(e.$slots, "subname", {}, () => [
                      ie(o(i.subname), 1)
                    ], !0)
                  ], 8, B2)) : E("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ce(c, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Se(r.closeSidebar, ["prevent"])
          }, {
            icon: we(() => [
              ce(T, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (h(), p("div", H2, [
            Be(e.$slots, "description", {}, void 0, !0)
          ])) : E("", !0)
        ], 2),
        be(ce(C, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: we(() => [
            Be(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [tr, !i.loading]
        ]),
        i.loading ? (h(), Pe(O, { key: 1 }, {
          icon: we(() => [
            ce(d, { size: 64 })
          ]),
          _: 1
        })) : E("", !0)
      ], 40, D2), [
        [tr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const q2 = /* @__PURE__ */ ot(P2, [["render", V2], ["__scopeId", "data-v-c2c6820b"]]), G2 = {
  name: "NcActionLink",
  mixins: [Mb],
  inject: {
    isInSemanticMenu: {
      from: Ud,
      default: !1
    }
  },
  props: {
    /**
     * destionation to link to
     */
    href: {
      type: String,
      required: !0,
      validator: (e) => {
        try {
          return new URL(e);
        } catch {
          return e.startsWith("#") || e.startsWith("/");
        }
      }
    },
    /**
     * download the link instead of opening
     */
    download: {
      type: String,
      default: null
    },
    /**
     * target to open the link
     */
    target: {
      type: String,
      default: "_self",
      validator: (e) => e && (!e.startsWith("_") || ["_blank", "_self", "_parent", "_top"].indexOf(e) > -1)
    },
    /**
     * Declares a native tooltip when not null
     */
    title: {
      type: String,
      default: null
    }
  }
}, K2 = ["role"], W2 = ["download", "href", "aria-label", "target", "title", "role"], Y2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, Z2 = { class: "action-link__name" }, X2 = ["textContent"], J2 = ["textContent"], Q2 = {
  key: 2,
  class: "action-link__text"
};
function eT(e, t, i, n, a, r) {
  return h(), p("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("a", {
      download: i.download,
      href: i.href,
      "aria-label": e.ariaLabel,
      target: i.target,
      title: i.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
    }, [
      Be(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: Ae(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (h(), p("span", Y2, [
        l("strong", Z2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, X2)
      ])) : e.isLongText ? (h(), p("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, J2)) : (h(), p("span", Q2, o(e.text), 1)),
      E("", !0)
    ], 8, W2)
  ], 8, K2);
}
const Ic = /* @__PURE__ */ ot(G2, [["render", eT], ["__scopeId", "data-v-32f01b7a"]]);
Ca(S0);
const tT = `<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<svg width="395" height="314" viewBox="0 0 395 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="395" height="314" rx="11" fill="#439DCD"/>
<rect x="13" y="51" width="366" height="248" rx="8" fill="white"/>
<rect x="22" y="111" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="127" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="63" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="191" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="143" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="79" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="159" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="95" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="175" width="92" height="12" rx="6" fill="#DEDEDE"/>
<path d="M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z" fill="#DEDEDE"/>
<path d="M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z" fill="white"/>
<rect x="79" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="99" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="119" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="139" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="159" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="179" y="20" width="8" height="8" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z" fill="black" fill-opacity="0.35"/>
</svg>
`, iT = `<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<svg width="395" height="314" viewBox="0 0 395 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="395" height="314" rx="11" fill="#439DCD"/>
<rect x="13" y="51" width="366" height="248" rx="8" fill="white"/>
<rect x="22" y="111" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="127" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="63" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="191" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="143" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="79" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="159" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="95" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="175" width="92" height="12" rx="6" fill="#DEDEDE"/>
<path d="M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z" fill="#DEDEDE"/>
<path d="M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z" fill="white"/>
<rect x="79" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="99" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="119" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="139" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="159" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="179" y="20" width="8" height="8" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z" fill="black" fill-opacity="0.35"/>
</svg>
`, nT = { class: "vue-skip-actions__container" }, aT = { class: "vue-skip-actions__headline" }, rT = { class: "vue-skip-actions__buttons" }, lT = /* @__PURE__ */ Vt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Ii(Ib, c), Ii(Lb, "#content-vue"), Ii("appName", H(() => t.appName));
    const i = cs(), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(), r = H(() => a.value === "navigation" ? iT : tT);
    kv(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function s() {
      Fn("toggle-navigation", { open: !0 }), Rt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(d) {
      n.value = d, a.value || (a.value = "navigation");
    }
    return (d, y) => (h(), p("div", {
      id: "content-vue",
      class: Ae(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(Ta) }]])
    }, [
      (h(), Pe(Ed, { to: "#skip-actions" }, [
        l("div", nT, [
          l("div", aT, o(u(Lt)("Keyboard navigation help")), 1),
          l("div", rT, [
            be(ce(on, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Se(s, ["prevent"]),
              onFocusin: y[0] || (y[0] = (v) => a.value = "navigation"),
              onMouseover: y[1] || (y[1] = (v) => a.value = "navigation")
            }, {
              default: we(() => [
                ie(o(u(Lt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [tr, n.value]
            ]),
            ce(on, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: y[2] || (y[2] = (v) => a.value = "content"),
              onMouseover: y[3] || (y[3] = (v) => a.value = "content")
            }, {
              default: we(() => [
                ie(o(u(Lt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          be(ce(bu, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [tr, !u(i)]
          ])
        ])
      ])),
      Be(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), sT = /* @__PURE__ */ ot(lT, [["__scopeId", "data-v-d13dcb98"]]), oT = { class: "library-shelf-tree-node" }, uT = ["aria-expanded", "aria-label"], cT = ["href"], dT = { class: "library-shelf-summary-title" }, fT = { dir: "auto" }, hT = { class: "library-muted" }, pT = { dir: "auto" }, vT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, bT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, gT = {
  key: 3,
  class: "library-shelf-tree"
}, mT = ["disabled"], yT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(!1), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(!1), s = /* @__PURE__ */ G([]), c = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(0);
    async function y() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await v();
    }
    async function v() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const g = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), m = await fetch(`${t.childrenUrl}?${g}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!m.ok) throw new Error("Shelf children request failed");
          const k = await m.json(), T = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...T), c.value = k?.hasMore === !0, d.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, n.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (g, m) => {
      const k = Ze("ShelfTreeNode", !0);
      return h(), p("li", oT, [
        e.node.hasChildren ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(w)("library", "Collapse {folder}", { folder: e.node.label }) : u(w)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: y
        }, o(i.value ? "−" : "+"), 9, uT)) : E("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", dT, [
            l("strong", null, [
              l("bdi", fT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(Ut)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", hT, [
            l("bdi", pT, o(e.node.path), 1)
          ])
        ], 8, cT),
        a.value ? (h(), p("small", vT, o(u(w)("library", "Loading folders…")), 1)) : r.value ? (h(), p("small", bT, o(u(w)("library", "Could not load folders.")), 1)) : E("", !0),
        i.value && s.value.length ? (h(), p("ul", gT, [
          (h(!0), p(W, null, ue(s.value, (T) => (h(), Pe(k, {
            key: T.id,
            node: T,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : E("", !0),
        i.value && c.value ? (h(), p("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: v
        }, o(u(w)("library", "Load more folders")), 9, mT)) : E("", !0)
      ]);
    };
  }
}, _T = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, wT = ["src"], kT = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, ST = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(typeof IntersectionObserver > "u"), a = /* @__PURE__ */ G("loading");
    let r;
    return qe(() => t.src, () => {
      a.value = "loading";
    }), xt(() => {
      n.value || (r = new IntersectionObserver((s) => {
        s.some((c) => c.isIntersecting) && (n.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), Ti(() => r?.disconnect()), (s, c) => (h(), p("span", {
      ref_key: "frame",
      ref: i,
      class: Ae(["library-cover-frame", { "library-cover-frame--error": a.value === "error" }])
    }, [
      a.value === "loading" ? (h(), p("span", _T)) : E("", !0),
      (h(), p("img", {
        key: e.src,
        class: Ae(["library-cover-image", { "library-cover-image--loaded": a.value === "loaded" }]),
        src: n.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: c[0] || (c[0] = (d) => a.value = "loaded"),
        onError: c[1] || (c[1] = (d) => a.value = "error")
      }, null, 42, wT)),
      a.value === "error" ? (h(), p("span", kT, o(u(w)("library", "Cover unavailable")), 1)) : E("", !0)
    ], 2));
  }
};
async function Rp(e = "", t = "", i = null) {
  const n = await fetch(`${Ci("/apps/library/api/lists")}${e}`, {
    method: i === null ? "GET" : "POST",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "application/json", ...i === null ? {} : { "Content-Type": "application/json", requesttoken: t } },
    ...i === null ? {} : { body: JSON.stringify(i) }
  });
  if (!n.ok) {
    const a = n.status === 409 ? w("library", "This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.") : n.status === 404 ? w("library", "This list or entry is no longer available.") : n.status === 422 ? w("library", "Check the name, text length and selected books, then try again.") : w("library", "Could not save or load the list. Check your connection and reload before retrying."), r = new Error(a);
    throw r.status = n.status, r;
  }
  return n.json();
}
const qa = /* @__PURE__ */ new Map();
function ba(e = "", t = "", i = null) {
  if (i !== null)
    return qa.clear(), Rp(e, t, i).finally(() => qa.clear());
  if (qa.has(e)) return qa.get(e);
  const n = Rp(e, t).finally(() => {
    qa.get(e) === n && qa.delete(e);
  });
  return qa.set(e, n), n;
}
const CT = ["aria-busy"], TT = { class: "library-list-inline-actions" }, AT = ["disabled", "aria-label"], ET = ["value"], $T = ["disabled"], xT = ["href"], OT = ["href"], NT = {
  key: 0,
  role: "status"
}, RT = {
  key: 1,
  role: "alert"
}, IT = ["disabled"], LT = {
  key: 3,
  role: "status"
}, hd = {
  __name: "AddToList",
  props: { preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: !0 }, requestToken: { type: String, default: "" }, listsUrl: { type: String, required: !0 } },
  emits: ["added"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(""), d = /* @__PURE__ */ G("");
    async function y() {
      s.value = !0, c.value = "";
      try {
        const g = await ba(i.itemIds.length === 1 ? `?itemId=${i.itemIds[0]}` : "");
        a.value = g.lists;
        const m = Number(r.value) || i.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(a.value.find((k) => k.id === m)?.id || a.value[0]?.id || "");
      } catch (g) {
        c.value = g.message;
      } finally {
        s.value = !1;
      }
    }
    async function v() {
      const g = a.value.find((k) => k.id === Number(r.value));
      if (s.value || !g || i.itemIds.length === 0) return;
      const m = [...i.itemIds];
      s.value = !0, c.value = "", d.value = "";
      try {
        const k = await ba(`/${g.id}/actions`, i.requestToken, { action: "add", revision: g.revision, itemIds: m });
        g.revision = k.revision, d.value = w("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), m.length === 1 && k.skipped === 0 && (g.containsItem = !0), n("added", k);
      } catch (k) {
        c.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return qe(() => i.itemIds.join(","), () => {
      d.value = "";
    }), xt(y), (g, m) => (h(), p("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", TT, [
        a.value.length ? be((h(), p("select", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(w)("library", "Choose a list"),
          onChange: m[1] || (m[1] = (k) => d.value = "")
        }, [
          (h(!0), p(W, null, ue(a.value, (k) => (h(), p("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, ET))), 128))
        ], 40, AT)), [
          [at, r.value]
        ]) : E("", !0),
        a.value.length ? (h(), p("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(w)("library", "Add to list")), 9, $T)) : E("", !0),
        !s.value && !a.value.length && !c.value ? (h(), p("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(w)("library", "Create a new list")), 9, xT)) : E("", !0),
        d.value && r.value ? (h(), p("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(w)("library", "Back to list")), 9, OT)) : E("", !0)
      ]),
      s.value ? (h(), p("p", NT, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      c.value ? (h(), p("p", RT, o(c.value), 1)) : E("", !0),
      c.value ? (h(), p("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: y
      }, o(u(w)("library", "Reload list")), 9, IT)) : E("", !0),
      d.value ? (h(), p("p", LT, o(d.value), 1)) : E("", !0)
    ], 8, CT));
  }
}, PT = ["onKeydown"], DT = ["aria-label", "aria-describedby"], FT = ["id"], We = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Sy(), i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(null), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G({});
    let s;
    const c = `${t}-label`;
    xt(() => {
      const O = i.value?.closest("label"), I = O?.querySelector("input, select, textarea"), L = i.value?.closest("h1, h2, h3, h4");
      O && I && !O.htmlFor && (I.id ||= `${t}-control`, O.htmlFor = I.id);
      for (const D of [I, L])
        D && !D.hasAttribute("aria-label") && !D.hasAttribute("aria-labelledby") && D.setAttribute("aria-labelledby", c);
    });
    async function d() {
      clearTimeout(s), a.value = !0, await Rt(), y();
    }
    function y() {
      if (!i.value || !n.value) return;
      const O = i.value.getBoundingClientRect(), I = n.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min(O.left, window.innerWidth - 336))}px`, top: `${Math.max(8, O.bottom + I + 12 < window.innerHeight ? O.bottom + 8 : O.top - I - 8)}px` };
    }
    function v() {
      clearTimeout(s);
    }
    function g() {
      clearTimeout(s), a.value = !1;
    }
    function m() {
      s = setTimeout(() => {
        i.value?.contains(document.activeElement) || g();
      }, 150);
    }
    function k(O) {
      !i.value?.contains(O.target) && !n.value?.contains(O.target) && g();
    }
    function T(O) {
      O.key === "Escape" && g();
    }
    function C(O) {
      a.value && (!(O.target instanceof Node) || !n.value?.contains(O.target)) && y();
    }
    return document.addEventListener("keydown", T), document.addEventListener("pointerdown", k), window.addEventListener("scroll", C, !0), Ti(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", C, !0), document.removeEventListener("keydown", T);
    }), (O, I) => (h(), p("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: I[0] || (I[0] = (L) => L.pointerType !== "touch" && d()),
      onPointerleave: m,
      onKeydown: ft(Se(g, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: c }, [
        Be(O.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(w)("library", "Help"),
        "aria-describedby": a.value ? u(t) : void 0,
        onFocus: d,
        onBlur: m,
        onClick: Se(d, ["stop", "prevent"])
      }, "?", 40, DT),
      (h(), Pe(Ed, { to: "body" }, [
        a.value ? (h(), p("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: n,
          class: "library-label-help-popup",
          role: "tooltip",
          style: hi(r.value),
          onPointerenter: v,
          onPointerleave: m
        }, o(e.text), 45, FT)) : E("", !0)
      ]))
    ], 40, PT));
  }
}, MT = ["aria-label", "aria-busy"], UT = { class: "library-lists-heading" }, zT = ["href"], jT = ["disabled"], BT = {
  key: 0,
  role: "alert"
}, HT = ["disabled"], VT = {
  key: 2,
  role: "status"
}, qT = {
  key: 3,
  role: "status"
}, GT = ["disabled"], KT = ["disabled"], WT = { class: "library-list-actions" }, YT = ["disabled"], ZT = ["disabled"], XT = {
  key: 0,
  class: "library-list-description",
  dir: "auto"
}, JT = {
  key: 1,
  class: "library-list-actions"
}, QT = ["href"], eA = ["disabled"], tA = ["disabled"], iA = ["aria-label"], nA = ["disabled"], aA = ["disabled"], rA = {
  key: 3,
  class: "library-lists-empty"
}, lA = ["start"], sA = ["id", "onDrop"], oA = { class: "library-list-entry-heading" }, uA = ["draggable", "title", "onDragstart"], cA = ["src"], dA = { class: "library-list-book" }, fA = { key: 0 }, hA = ["href"], pA = { key: 1 }, vA = {
  key: 2,
  dir: "auto"
}, bA = { key: 3 }, gA = ["href"], mA = {
  key: 0,
  class: "library-list-note",
  dir: "auto"
}, yA = ["onSubmit"], _A = ["disabled"], wA = { class: "library-list-actions" }, kA = ["disabled"], SA = ["disabled"], CA = {
  key: 2,
  class: "library-list-actions"
}, TA = ["disabled", "onClick"], AA = ["disabled", "onClick"], EA = ["disabled", "onClick"], $A = ["disabled", "onClick"], xA = {
  key: 3,
  class: "library-list-confirm"
}, OA = ["disabled", "onClick"], NA = ["disabled"], RA = ["aria-label"], IA = ["disabled"], LA = ["disabled"], PA = {
  key: 1,
  class: "library-lists-empty"
}, DA = { class: "library-list-cards" }, FA = ["href"], MA = { dir: "auto" }, UA = {
  key: 0,
  dir: "auto"
}, zA = {
  __name: "PersonalLists",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 }, listsUrl: { type: String, required: !0 } },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(""), d = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ Nt({ name: "", description: "" }), g = /* @__PURE__ */ G(null), m = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(!1), T = /* @__PURE__ */ G(null), C = /* @__PURE__ */ G(null), O = /* @__PURE__ */ G(null), I = /* @__PURE__ */ G(Number(new URLSearchParams(window.location.search).get("listId")) || null), L = Number(new URLSearchParams(window.location.search).get("addItem")) || null, D = H(() => !s.value && g.value === null);
    async function R(B = 1, z = y.value) {
      s.value = !0, c.value = "";
      try {
        I.value ? r.value = await ba(`/${I.value}?page=${B}`) : a.value = (await ba()).lists, z || (g.value = null, y.value = !1);
      } catch (x) {
        c.value = x.message;
      } finally {
        s.value = !1;
      }
    }
    function pe() {
      v.name = r.value?.list.name || "", v.description = r.value?.list.description || "", y.value = !0, k.value = !1, c.value = "";
    }
    async function Q() {
      s.value = !0, c.value = "", d.value = "";
      try {
        if (r.value)
          await ba(`/${r.value.list.id}/actions`, i.requestToken, { action: "update", revision: r.value.list.revision, ...v });
        else {
          I.value = (await ba("", i.requestToken, v)).list.id;
          const B = new URL(window.location.href);
          B.searchParams.set("listId", I.value), window.history.replaceState({}, "", B);
        }
        y.value = !1, await R(1, !0), n("changed"), d.value = w("library", "List saved."), await Rt(), O.value?.focus();
      } catch (B) {
        c.value = B.message;
      } finally {
        s.value = !1;
      }
    }
    async function $(B, z) {
      s.value = !0, c.value = "", d.value = "";
      try {
        const x = await ba(`/${r.value.list.id}/actions`, i.requestToken, { ...B, revision: r.value.list.revision });
        if (B.action === "delete") {
          r.value = null, I.value = null, k.value = !1;
          const P = new URL(window.location.href);
          P.searchParams.delete("listId"), window.history.replaceState({}, "", P);
        }
        if (g.value = null, T.value = null, B.action === "note") {
          const P = r.value.entries.find((Z) => Z.id === B.entryId);
          P && (P.note = B.note.trim()), r.value.list.revision = x.revision;
        } else await R(r.value?.page || 1);
        B.action === "delete" && n("changed"), d.value = z, await Rt(), B.action === "move" ? document.getElementById(`library-list-entry-${B.entryId}`)?.focus() : O.value?.focus();
      } catch (x) {
        c.value = x.message;
      } finally {
        s.value = !1;
      }
    }
    function q(B) {
      g.value = B.id, m.value = B.note, T.value = null;
    }
    function K(B, z) {
      return $({ action: "move", entryId: B.id, direction: z }, w("library", "Reading order saved."));
    }
    function Y(B, z) {
      C.value = z.id, B.dataTransfer.setData("text/plain", String(z.id));
    }
    function ne(B) {
      if (C.value === null || !D.value) return;
      const z = C.value;
      return C.value = null, $({ action: "move", entryId: z, beforeId: B }, w("library", "Reading order saved."));
    }
    return xt(async () => {
      await R(), !I.value && new URLSearchParams(window.location.search).get("new") === "1" && pe();
    }), (B, z) => (h(), p("section", {
      class: "library-personal-lists",
      "aria-label": u(w)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", UT, [
        l("div", null, [
          I.value ? (h(), p("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(w)("library", "All lists")), 9, zT)) : E("", !0),
          l("h1", {
            ref_key: "heading",
            ref: O,
            tabindex: "-1"
          }, [
            ce(We, {
              text: u(w)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: we(() => [
                ie(o(r.value?.list.name || u(w)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !I.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || y.value,
          onClick: pe
        }, o(u(w)("library", "New list")), 9, jT)) : E("", !0)
      ]),
      c.value ? (h(), p("p", BT, o(c.value), 1)) : E("", !0),
      c.value ? (h(), p("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: z[0] || (z[0] = (x) => R(r.value?.page || 1, !0))
      }, o(u(w)("library", "Reload list")), 9, HT)) : E("", !0),
      d.value ? (h(), p("p", VT, o(d.value), 1)) : E("", !0),
      s.value ? (h(), p("p", qT, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      y.value ? (h(), p("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Se(Q, ["prevent"])
      }, [
        l("label", null, [
          ie(o(u(w)("library", "List name")), 1),
          be(l("input", {
            "onUpdate:modelValue": z[1] || (z[1] = (x) => v.name = x),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, GT), [
            [je, v.name]
          ])
        ]),
        l("label", null, [
          ie(o(u(w)("library", "Description / list note")), 1),
          be(l("textarea", {
            "onUpdate:modelValue": z[2] || (z[2] = (x) => v.description = x),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, KT), [
            [je, v.description]
          ])
        ]),
        l("div", WT, [
          l("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !v.name.trim()
          }, o(u(w)("library", "Save list")), 9, YT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: z[3] || (z[3] = (x) => y.value = !1)
          }, o(u(w)("library", "Cancel")), 9, ZT)
        ])
      ], 32)) : E("", !0),
      r.value ? (h(), p(W, { key: 5 }, [
        r.value.list.description && !y.value ? (h(), p("p", XT, o(r.value.list.description), 1)) : E("", !0),
        y.value ? E("", !0) : (h(), p("div", JT, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(w)("library", "Add books from catalogue")), 9, QT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !D.value,
            onClick: pe
          }, o(u(w)("library", "Edit list")), 9, eA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !D.value,
            onClick: z[4] || (z[4] = (x) => k.value = !k.value)
          }, o(u(w)("library", "Delete list")), 9, tA)
        ])),
        k.value ? (h(), p("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(w)("library", "Confirm list deletion")
        }, [
          l("p", null, o(u(w)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          l("button", {
            class: "button",
            type: "button",
            disabled: !D.value,
            onClick: z[5] || (z[5] = (x) => $({ action: "delete" }, u(w)("library", "List deleted.")))
          }, o(u(w)("library", "Delete list and notes")), 9, nA),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: z[6] || (z[6] = (x) => k.value = !1)
          }, o(u(w)("library", "Cancel")), 9, aA)
        ], 8, iA)) : E("", !0),
        r.value.total === 0 && !s.value ? (h(), p("p", rA, o(u(w)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : E("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (h(!0), p(W, null, ue(r.value.entries, (x) => (h(), p("li", {
            id: `library-list-entry-${x.id}`,
            key: x.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: z[11] || (z[11] = Se(() => {
            }, ["prevent"])),
            onDrop: Se((P) => ne(x.id), ["prevent"])
          }, [
            l("div", oA, [
              l("span", {
                class: "library-list-drag",
                draggable: D.value,
                title: u(w)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (P) => Y(P, x),
                onDragend: z[7] || (z[7] = (P) => C.value = null)
              }, "⠿", 40, uA),
              x.book ? (h(), p("img", {
                key: 0,
                src: x.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, cA)) : E("", !0),
              l("div", dA, [
                x.book ? (h(), p("h2", fA, [
                  l("a", {
                    href: x.book.detailsUrl,
                    dir: "auto"
                  }, o(x.book.title), 9, hA)
                ])) : (h(), p("h2", pA, o(u(w)("library", "Unavailable book")), 1)),
                x.book?.creators ? (h(), p("p", vA, o(x.book.creators), 1)) : E("", !0),
                x.book ? E("", !0) : (h(), p("p", bA, o(u(w)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              x.book ? (h(), p("a", {
                key: 1,
                class: "button secondary",
                href: x.book.openUrl
              }, o(u(w)("library", "Open")), 9, gA)) : E("", !0)
            ]),
            x.note && g.value !== x.id ? (h(), p("p", mA, o(x.note), 1)) : E("", !0),
            g.value === x.id ? (h(), p("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Se((P) => $({ action: "note", entryId: x.id, note: m.value }, u(w)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                ie(o(u(w)("library", "Your note for this book in this list")), 1),
                be(l("textarea", {
                  "onUpdate:modelValue": z[8] || (z[8] = (P) => m.value = P),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, _A), [
                  [je, m.value]
                ])
              ]),
              l("div", wA, [
                l("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(w)("library", "Save note")), 9, kA),
                l("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: z[9] || (z[9] = (P) => g.value = null)
                }, o(u(w)("library", "Cancel")), 9, SA)
              ])
            ], 40, yA)) : (h(), p("div", CA, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !D.value,
                onClick: (P) => q(x)
              }, o(x.note ? u(w)("library", "Edit note") : u(w)("library", "Add note")), 9, TA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !D.value || x.number === 1,
                onClick: (P) => K(x, "up")
              }, o(u(w)("library", "Move up")), 9, AA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !D.value || x.number === r.value.total,
                onClick: (P) => K(x, "down")
              }, o(u(w)("library", "Move down")), 9, EA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !D.value,
                onClick: (P) => T.value = x.id
              }, o(u(w)("library", "Remove from list")), 9, $A)
            ])),
            T.value === x.id ? (h(), p("div", xA, [
              l("p", null, o(u(w)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !D.value,
                onClick: (P) => $({ action: "remove", entryId: x.id }, u(w)("library", "Book removed from list."))
              }, o(u(w)("library", "Remove entry and note")), 9, OA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: z[10] || (z[10] = (P) => T.value = null)
              }, o(u(w)("library", "Cancel")), 9, NA)
            ])) : E("", !0)
          ], 40, sA))), 128))
        ], 8, lA),
        r.value.pages > 1 ? (h(), p("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(w)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !D.value || r.value.page === 1,
            onClick: z[12] || (z[12] = (x) => R(r.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, IA),
          l("span", null, o(u(w)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !D.value || r.value.page === r.value.pages,
            onClick: z[13] || (z[13] = (x) => R(r.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, LA)
        ], 8, RA)) : E("", !0)
      ], 64)) : I.value ? E("", !0) : (h(), p(W, { key: 6 }, [
        u(L) ? (h(), Pe(hd, {
          key: 0,
          "item-ids": [u(L)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: z[14] || (z[14] = (x) => R())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : E("", !0),
        !a.value.length && !s.value && !y.value ? (h(), p("p", PA, o(u(w)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : E("", !0),
        l("ul", DA, [
          (h(!0), p(W, null, ue(a.value, (x) => (h(), p("li", {
            key: x.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${x.id}`
            }, [
              l("h2", MA, o(x.name), 1),
              l("p", null, o(u(w)("library", "Books: {count}", { count: x.count })), 1),
              x.description ? (h(), p("p", UA, o(x.description), 1)) : E("", !0)
            ], 8, FA)
          ]))), 128))
        ])
      ], 64))
    ], 8, MT));
  }
}, jA = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, BA = ["aria-busy"], HA = ["href"], VA = { id: "authors-heading" }, qA = {
  key: 1,
  role: "alert"
}, GA = ["disabled"], KA = {
  key: 2,
  role: "status"
}, WA = {
  key: 3,
  role: "status"
}, YA = { for: "author-search" }, ZA = ["disabled"], XA = {
  key: 0,
  role: "status"
}, JA = ["disabled"], QA = {
  key: 1,
  class: "author-directory"
}, eE = ["href"], tE = { dir: "auto" }, iE = { key: 2 }, nE = { key: 0 }, aE = ["href"], rE = {
  key: 1,
  role: "status"
}, lE = ["disabled"], sE = ["disabled"], oE = { for: "author-display" }, uE = ["disabled"], cE = { for: "author-sort" }, dE = ["disabled"], fE = { for: "author-given" }, hE = ["disabled"], pE = { for: "author-family" }, vE = ["disabled"], bE = ["disabled"], gE = ["disabled"], mE = ["disabled"], yE = ["aria-label"], _E = { role: "status" }, wE = { for: "target-search" }, kE = ["disabled"], SE = ["disabled"], CE = ["disabled"], TE = { for: "target-author" }, AE = ["disabled"], EE = { value: "" }, $E = ["value"], xE = ["disabled"], OE = ["disabled"], NE = ["aria-label"], RE = ["disabled"], IE = { class: "author-books" }, LE = { class: "author-book-title" }, PE = ["value", "aria-label", "disabled"], DE = ["href"], FE = { dir: "auto" }, ME = {
  key: 6,
  class: "author-history"
}, UE = ["data-operation-id"], zE = { key: 0 }, jE = ["disabled", "onClick"], BE = ["aria-label"], HE = ["disabled"], VE = ["disabled"], qE = {
  __name: "Authors",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(""), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G([]), v = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(null), m = /* @__PURE__ */ G(!1), k = /* @__PURE__ */ G([]), T = /* @__PURE__ */ G(""), C = /* @__PURE__ */ G(!1), O = /* @__PURE__ */ G(1), I = /* @__PURE__ */ G(Number(new URLSearchParams(location.search).get("authorId")) || null), L = /* @__PURE__ */ Nt({ display_name: "", sort_name: "", given_name: "", family_name: "" });
    async function D(z, x = null) {
      const P = await fetch(Ci("/apps/library/api/authors") + z, {
        credentials: "same-origin",
        cache: "no-store",
        method: x === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...x === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...x === null ? {} : { body: JSON.stringify(x) }
      });
      if (!P.ok) throw new Error(P.status === 413 ? w("library", "This change is too large. Select fewer books to reassign.") : P.status === 503 ? w("library", "Author migration must finish before editing. Refresh to check progress.") : P.status === 409 ? w("library", "The author or affected books changed. Reload and review again. Your draft is preserved.") : w("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return P.json();
    }
    async function R(z = 1) {
      n.value = !0, a.value = "";
      try {
        i.value = await D(I.value ? `/${I.value}?page=${z}` : `?page=${z}&search=${encodeURIComponent(T.value.trim())}&unused=${C.value ? 1 : 0}`), O.value = z, g.value = null, c.value = [], k.value = await D("/history");
      } catch (x) {
        a.value = x.message;
      } finally {
        n.value = !1;
      }
    }
    function pe() {
      for (const z of Object.keys(L)) L[z] = i.value.author[z] || "";
      s.value = !0, r.value = "";
    }
    async function Q() {
      n.value = !0, a.value = "";
      try {
        i.value = await D(`/${I.value}`, { ...L, revision: Number(i.value.author.revision) }), s.value = !1, O.value = 1, r.value = w("library", "Author saved. Original book credits are preserved.");
      } catch (z) {
        a.value = z.message;
      } finally {
        n.value = !1;
      }
    }
    function $() {
      m.value = !1, g.value = null, c.value = [];
    }
    async function q() {
      n.value = !0, a.value = "", g.value = null;
      try {
        y.value = (await D(`?search=${encodeURIComponent(d.value.trim())}`)).authors.filter((z) => Number(z.id) !== I.value), v.value = "";
      } catch (z) {
        a.value = z.message;
      } finally {
        n.value = !1;
      }
    }
    async function K() {
      n.value = !0, a.value = "", g.value = null;
      try {
        const z = await D("", { name: d.value.trim() });
        y.value = [z], v.value = String(z.id);
      } catch (z) {
        a.value = z.message;
      } finally {
        n.value = !1;
      }
    }
    async function Y() {
      n.value = !0, a.value = "", g.value = null;
      try {
        g.value = await D(`/${I.value}/preview`, { target: Number(v.value), items: c.value });
      } catch (z) {
        a.value = z.message;
      } finally {
        n.value = !1;
      }
    }
    async function ne() {
      n.value = !0, a.value = "";
      try {
        await D(`/${I.value}/assign`, { target: Number(v.value), items: c.value, token: g.value.token }), r.value = w("library", "Author assignments saved. Original credits are preserved. Undo is available in Recent changes."), m.value = !1, g.value = null, await R(O.value);
      } catch (z) {
        a.value = z.message;
      } finally {
        n.value = !1;
      }
    }
    async function B(z) {
      n.value = !0, a.value = "";
      try {
        await D(`/history/${z.id}/undo`, {}), r.value = w("library", "Author change undone."), await R(O.value);
      } catch (x) {
        a.value = x.message;
      } finally {
        n.value = !1;
      }
    }
    return xt(() => R()), (z, x) => (h(), p("section", {
      class: "library-authors",
      "aria-busy": n.value,
      "aria-labelledby": "authors-heading"
    }, [
      I.value ? (h(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(w)("library", "All authors")), 9, HA)) : E("", !0),
      l("h1", VA, o(i.value?.author?.display_name || u(w)("library", "Authors")), 1),
      a.value ? (h(), p("p", qA, [
        ie(o(a.value) + " ", 1),
        l("button", {
          disabled: n.value,
          onClick: x[0] || (x[0] = (P) => R(O.value))
        }, o(u(w)("library", "Reload")), 9, GA)
      ])) : E("", !0),
      r.value ? (h(), p("p", KA, o(r.value), 1)) : E("", !0),
      n.value ? (h(), p("p", WA, o(u(w)("library", "Loading")), 1)) : E("", !0),
      I.value ? i.value?.author ? (h(), p(W, { key: 5 }, [
        l("p", null, o(u(Ut)("library", "%n book", "%n books", i.value.bookCount)), 1),
        i.value.author.merged_into ? (h(), p("p", nE, [
          l("a", {
            href: `${e.catalogueUrl}?authors=1&authorId=${i.value.author.merged_into}`
          }, o(u(w)("library", "Open merged author")), 9, aE)
        ])) : E("", !0),
        !i.value.canEdit && !i.value.author.merged_into ? (h(), p("p", rE, [
          ie(o(u(w)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          l("button", {
            disabled: n.value,
            onClick: x[5] || (x[5] = (P) => R(O.value))
          }, o(u(w)("library", "Refresh")), 9, lE)
        ])) : E("", !0),
        !s.value && !m.value ? (h(), p("button", {
          key: 2,
          disabled: n.value || !i.value.canEdit,
          onClick: pe
        }, o(u(w)("library", "Edit author")), 9, sE)) : E("", !0),
        s.value ? (h(), p("form", {
          key: 3,
          class: "author-editor",
          onSubmit: Se(Q, ["prevent"])
        }, [
          l("p", null, o(u(w)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          l("label", oE, o(u(w)("library", "Preferred name")), 1),
          be(l("input", {
            id: "author-display",
            "onUpdate:modelValue": x[6] || (x[6] = (P) => L.display_name = P),
            maxlength: "255",
            required: "",
            disabled: n.value
          }, null, 8, uE), [
            [je, L.display_name]
          ]),
          l("label", cE, [
            ie(o(u(w)("library", "Sort name")) + " ", 1),
            ce(We, {
              text: u(w)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "author-sort",
            "onUpdate:modelValue": x[7] || (x[7] = (P) => L.sort_name = P),
            maxlength: "255",
            required: "",
            disabled: n.value
          }, null, 8, dE), [
            [je, L.sort_name]
          ]),
          l("label", fE, [
            ie(o(u(w)("library", "Given name")) + " ", 1),
            ce(We, {
              text: u(w)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "author-given",
            "onUpdate:modelValue": x[8] || (x[8] = (P) => L.given_name = P),
            maxlength: "255",
            disabled: n.value
          }, null, 8, hE), [
            [je, L.given_name]
          ]),
          l("label", pE, o(u(w)("library", "Family name")), 1),
          be(l("input", {
            id: "author-family",
            "onUpdate:modelValue": x[9] || (x[9] = (P) => L.family_name = P),
            maxlength: "255",
            disabled: n.value
          }, null, 8, vE), [
            [je, L.family_name]
          ]),
          l("div", null, [
            l("button", {
              class: "primary",
              disabled: n.value,
              type: "submit"
            }, o(u(w)("library", "Save author")), 9, bE),
            x[19] || (x[19] = ie()),
            l("button", {
              disabled: n.value,
              type: "button",
              onClick: x[10] || (x[10] = (P) => s.value = !1)
            }, o(u(w)("library", "Cancel")), 9, gE)
          ])
        ], 32)) : E("", !0),
        !s.value && !m.value ? (h(), p("button", {
          key: 4,
          disabled: n.value || !i.value.canEdit,
          onClick: x[11] || (x[11] = (P) => m.value = !0)
        }, o(u(w)("library", "Merge or reassign")), 9, mE)) : E("", !0),
        m.value ? (h(), p("section", {
          key: 5,
          class: "author-assignment",
          "aria-label": u(w)("library", "Merge or reassign")
        }, [
          l("label", null, [
            ie(o(u(w)("library", "Books to change")) + " ", 1),
            ce(We, {
              text: u(w)("library", "Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.")
            }, null, 8, ["text"])
          ]),
          l("p", _E, o(c.value.length ? u(Ut)("library", "%n selected book", "%n selected books", c.value.length) : u(w)("library", "Merge all books into the chosen author")), 1),
          l("form", {
            class: "author-search",
            onSubmit: Se(q, ["prevent"])
          }, [
            l("label", wE, o(u(w)("library", "Find destination author")), 1),
            be(l("input", {
              id: "target-search",
              "onUpdate:modelValue": x[12] || (x[12] = (P) => d.value = P),
              type: "search",
              maxlength: "255",
              disabled: n.value
            }, null, 8, kE), [
              [je, d.value]
            ]),
            l("button", { disabled: n.value }, o(u(w)("library", "Search")), 9, SE)
          ], 32),
          l("div", null, [
            l("button", {
              disabled: n.value || !d.value.trim(),
              onClick: K
            }, o(u(w)("library", "Create separate author")), 9, CE),
            x[20] || (x[20] = ie()),
            ce(We, {
              text: u(w)("library", "Creates a new person using the entered name, even if someone with that name already exists.")
            }, null, 8, ["text"])
          ]),
          l("label", TE, o(u(w)("library", "Destination author")), 1),
          be(l("select", {
            id: "target-author",
            "onUpdate:modelValue": x[13] || (x[13] = (P) => v.value = P),
            disabled: n.value,
            onChange: x[14] || (x[14] = (P) => g.value = null)
          }, [
            l("option", EE, o(u(w)("library", "Choose an author")), 1),
            (h(!0), p(W, null, ue(y.value, (P) => (h(), p("option", {
              key: P.id,
              value: P.id
            }, o(P.display_name) + " — " + o(P.sort_name) + " (#" + o(P.id) + ")", 9, $E))), 128))
          ], 40, AE), [
            [at, v.value]
          ]),
          l("div", null, [
            l("button", {
              disabled: n.value || !v.value,
              onClick: Y
            }, o(u(w)("library", "Review change")), 9, xE),
            x[21] || (x[21] = ie()),
            l("button", {
              disabled: n.value,
              onClick: $
            }, o(u(w)("library", "Cancel")), 9, OE)
          ]),
          g.value ? (h(), p("section", {
            key: 0,
            class: "author-review",
            "aria-label": u(w)("library", "Review change")
          }, [
            l("h2", null, o(g.value.source) + " → " + o(g.value.target), 1),
            l("p", null, o(g.value.merge ? u(w)("library", "Merge these authors. Future imports of the old name will use the destination author.") : u(w)("library", "Reassign these books. Both author records remain available.")), 1),
            l("p", null, o(u(Ut)("library", "%n book", "%n books", g.value.books.length)), 1),
            l("ul", null, [
              (h(!0), p(W, null, ue(g.value.books, (P) => (h(), p("li", {
                key: P.id
              }, o(P.title) + " — " + o(u(w)("library", "Original credit: {credit}", { credit: P.credit || "—" })), 1))), 128))
            ]),
            l("button", {
              class: "primary",
              disabled: n.value,
              onClick: ne
            }, o(u(w)("library", "Confirm author change")), 9, RE)
          ], 8, NE)) : E("", !0)
        ], 8, yE)) : E("", !0),
        l("ul", IE, [
          (h(!0), p(W, null, ue(i.value.books, (P) => (h(), p("li", {
            key: P.id
          }, [
            l("div", LE, [
              m.value ? be((h(), p("input", {
                key: 0,
                "onUpdate:modelValue": x[15] || (x[15] = (Z) => c.value = Z),
                type: "checkbox",
                value: Number(P.id),
                "aria-label": u(w)("library", "Select {title}", { title: P.title }),
                disabled: n.value,
                onChange: x[16] || (x[16] = (Z) => g.value = null)
              }, null, 40, PE)), [
                [Hn, c.value]
              ]) : E("", !0),
              l("a", {
                href: u(Ci)("/apps/library/items/{id}", { id: P.id }),
                dir: "auto"
              }, o(P.title), 9, DE)
            ]),
            l("span", FE, o(u(w)("library", "Original credit: {credit}", { credit: P.creators || "—" })), 1)
          ]))), 128))
        ])
      ], 64)) : E("", !0) : (h(), p(W, { key: 4 }, [
        l("form", {
          class: "author-search",
          onSubmit: x[3] || (x[3] = Se((P) => R(1), ["prevent"]))
        }, [
          l("label", YA, [
            ie(o(u(w)("library", "Search authors")) + " ", 1),
            ce(We, {
              text: u(w)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          be(l("input", {
            id: "author-search",
            "onUpdate:modelValue": x[1] || (x[1] = (P) => T.value = P),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [je, T.value]
          ]),
          l("label", null, [
            be(l("input", {
              "onUpdate:modelValue": x[2] || (x[2] = (P) => C.value = P),
              type: "checkbox"
            }, null, 512), [
              [Hn, C.value]
            ]),
            ie(" " + o(u(w)("library", "Unused authors")), 1)
          ]),
          l("button", {
            disabled: n.value,
            type: "submit"
          }, o(u(w)("library", "Search")), 9, ZA)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed || i.value.migration.conflict) ? (h(), p("p", XA, [
          ie(o(u(w)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", i.value.migration)) + " ", 1),
          l("button", {
            disabled: n.value,
            onClick: x[4] || (x[4] = (P) => R(O.value))
          }, o(u(w)("library", "Refresh")), 9, JA)
        ])) : E("", !0),
        i.value ? (h(), p("ul", QA, [
          (h(!0), p(W, null, ue(i.value.authors, (P) => (h(), p("li", {
            key: P.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${P.id}`,
              dir: "auto"
            }, o(P.display_name), 9, eE),
            l("span", tE, o(P.sort_name), 1),
            l("span", null, o(u(Ut)("library", "%n book", "%n books", Number(P.book_count))), 1)
          ]))), 128))
        ])) : E("", !0),
        i.value && !i.value.authors.length ? (h(), p("p", iE, o(u(w)("library", "No authors found.")), 1)) : E("", !0)
      ], 64)),
      k.value.length ? (h(), p("details", ME, [
        l("summary", null, o(u(w)("library", "Recent changes")), 1),
        l("ul", null, [
          (h(!0), p(W, null, ue(k.value, (P) => (h(), p("li", {
            key: P.id,
            "data-operation-id": P.id
          }, [
            l("span", null, o(P.source) + " → " + o(P.target) + " · " + o(u(Ut)("library", "%n book", "%n books", Number(P.books))), 1),
            Number(P.undone) ? (h(), p("span", zE, o(u(w)("library", "Undone")), 1)) : (h(), p("button", {
              key: 1,
              disabled: n.value,
              onClick: (Z) => B(P)
            }, o(u(w)("library", "Undo")), 9, jE))
          ], 8, UE))), 128))
        ])
      ])) : E("", !0),
      i.value ? (h(), p("nav", {
        key: 7,
        class: "author-pagination",
        "aria-label": u(w)("library", "Author pages")
      }, [
        l("button", {
          disabled: n.value || s.value || O.value === 1,
          onClick: x[17] || (x[17] = (P) => R(O.value - 1))
        }, o(u(w)("library", "Previous")), 9, HE),
        l("span", null, o(u(w)("library", "Page {page}", { page: O.value })), 1),
        l("button", {
          disabled: n.value || s.value || !i.value.hasNext,
          onClick: x[18] || (x[18] = (P) => R(O.value + 1))
        }, o(u(w)("library", "Next")), 9, VE)
      ], 8, BE)) : E("", !0)
    ], 8, BA));
  }
}, GE = /* @__PURE__ */ jA(qE, [["__scopeId", "data-v-fc79dd0c"]]);
function hg(e, t, i) {
  const n = /* @__PURE__ */ G({}), a = /* @__PURE__ */ G("idle");
  let r, s, c = 0;
  return qe([e, t], () => {
    clearTimeout(r), s?.abort();
    const d = ++c;
    n.value = {}, a.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const y = await fetch(Ci("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!y.ok) throw new Error("lookup_failed");
        const v = await y.json();
        if (d !== c) return;
        n.value = v.items || {}, a.value = v.enabled ? v.status : "disabled";
      } catch (y) {
        d === c && y.name !== "AbortError" && (a.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), Ti(() => {
    c++, clearTimeout(r), s?.abort();
  }), { results: n, status: a };
}
const KE = ["aria-label", "aria-busy"], WE = {
  key: 0,
  role: "status"
}, YE = {
  key: 1,
  role: "alert"
}, ZE = {
  key: 2,
  role: "status"
}, XE = { key: 3 }, JE = { key: 4 }, QE = {
  key: 5,
  role: "status"
}, e$ = {
  key: 6,
  class: "library-suggestion-list"
}, t$ = ["href"], i$ = ["disabled", "onClick"], n$ = {
  key: 0,
  role: "status"
}, a$ = { class: "library-suggestion-list" }, r$ = { class: "library-suggestion-comparison" }, l$ = ["src"], s$ = { class: "library-duplicate-actions" }, o$ = ["href"], u$ = ["href"], c$ = ["disabled", "onClick"], d$ = { class: "library-duplicate-actions" }, f$ = ["disabled"], h$ = ["disabled"], p$ = ["disabled"], pg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(0), n = H(() => (i.value, t.itemId ? [t.itemId] : [])), a = H(() => t.enabled), r = H(() => t.requestToken), { results: s, status: c } = hg(n, a, r), d = H(() => s.value[t.itemId]), y = /* @__PURE__ */ G(null), v = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(!1), k = { formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") };
    let T = 0;
    async function C(L, D) {
      const R = await fetch(Ci("/apps/library/api/duplicate-suggestions" + L), { credentials: "same-origin", cache: "no-store", method: D ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...D ? { body: JSON.stringify(D) } : {} });
      if (!R.ok) throw new Error(R.status === 409 ? w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : w("library", "Could not complete the duplicate review. Please try again."));
      return R.json();
    }
    async function O(L) {
      const D = ++T;
      v.value = !0, g.value = "", m.value = !1;
      try {
        const R = await C(`/compare/${t.itemId}/${L}`);
        D === T && (y.value = R);
      } catch (R) {
        D === T && (g.value = R.message);
      } finally {
        D === T && (v.value = !1);
      }
    }
    async function I(L, D = 0) {
      v.value = !0, g.value = "";
      try {
        await C(`/compare/${y.value.books[0].id}/${y.value.books[1].id}`, { signature: y.value.signature, decision: L, preferredId: D }), m.value = !0, i.value++, y.value = null;
      } catch (R) {
        g.value = R.message;
      } finally {
        v.value = !1;
      }
    }
    return qe(() => [t.itemId, t.compareId], () => {
      T++, y.value = null, t.full && t.compareId && O(t.compareId);
    }, { immediate: !0 }), (L, D) => (h(), p("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("h3", null, o(u(w)("library", "Possible duplicates")), 1),
      u(c) === "pending" ? (h(), p("p", WE, o(u(w)("library", "Checking possible duplicates")), 1)) : E("", !0),
      u(c) === "error" || g.value ? (h(), p("p", YE, o(g.value || u(w)("library", "Could not complete the duplicate review. Please try again.")), 1)) : E("", !0),
      u(c) === "building" || d.value?.status === "partial" ? (h(), p("p", ZE, o(u(w)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
      d.value?.status === "unavailable" ? (h(), p("p", XE, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : E("", !0),
      d.value?.status === "checked" && !d.value.count ? (h(), p("p", JE, o(u(w)("library", "No unreviewed suggestions found.")), 1)) : E("", !0),
      m.value ? (h(), p("p", QE, o(u(w)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : E("", !0),
      d.value?.count && !y.value ? (h(), p("ul", e$, [
        (h(!0), p(W, null, ue(d.value.matches, (R) => (h(), p("li", {
          key: R.id
        }, [
          e.full ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (pe) => O(R.id)
          }, [
            l("bdi", null, o(R.title), 1),
            ie(" · " + o(R.format.toUpperCase()), 1)
          ], 8, i$)) : (h(), p("a", {
            key: 0,
            href: R.url
          }, [
            l("bdi", null, o(R.title), 1),
            ie(" · " + o(R.format.toUpperCase()), 1)
          ], 8, t$))
        ]))), 128))
      ])) : E("", !0),
      y.value ? (h(), p(W, { key: 7 }, [
        y.value.reasons.length ? E("", !0) : (h(), p("p", n$, o(u(w)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", a$, [
          (h(!0), p(W, null, ue(y.value.flags, (R) => (h(), p("li", { key: R }, o(k[R]), 1))), 128))
        ]),
        l("div", r$, [
          (h(!0), p(W, null, ue(y.value.books, (R) => (h(), p("article", {
            key: R.id
          }, [
            l("img", {
              src: R.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, l$),
            l("h3", null, [
              l("bdi", null, o(R.title), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(R.authors.join("; ")), 1)
            ]),
            l("p", null, o(R.format.toUpperCase()) + " · " + o(R.language || "—") + " · " + o(R.publicationDate || "—"), 1),
            l("p", null, [
              l("bdi", null, o(R.publisher), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(R.path), 1)
            ]),
            l("div", s$, [
              l("a", {
                class: "button secondary",
                href: R.detailsUrl
              }, o(u(w)("library", "Details")), 9, o$),
              l("a", {
                class: "button secondary",
                href: R.openUrl
              }, o(u(w)("library", "Open")), 9, u$),
              l("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (pe) => I("preferred", R.id)
              }, o(u(w)("library", "Prefer this copy")), 9, c$)
            ])
          ]))), 128))
        ]),
        l("div", d$, [
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: D[0] || (D[0] = (R) => I("keep"))
          }, o(u(w)("library", "Keep both")), 9, f$),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: D[1] || (D[1] = (R) => I("dismissed"))
          }, o(u(w)("library", "Dismiss match")), 9, h$),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: D[2] || (D[2] = (R) => I("unreviewed"))
          }, o(u(w)("library", "Reset review decision")), 9, p$)
        ])
      ], 64)) : E("", !0)
    ], 8, KE));
  }
}, v$ = ["aria-busy"], b$ = ["checked", "disabled"], g$ = {
  key: 0,
  role: "alert"
}, m$ = {
  key: 1,
  role: "status"
}, y$ = {
  key: 2,
  role: "alert"
}, _$ = {
  key: 3,
  role: "status"
}, w$ = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G({ enabled: !1, status: "disabled" }), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G("");
    let r = !0, s;
    async function c() {
      try {
        const y = await fetch(Ci("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!y.ok) throw new Error();
        const v = await y.json();
        r && (i.value = v, v.status === "building" && (s = setTimeout(c, 5e3)));
      } catch {
        r && (a.value = w("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function d(y) {
      n.value = !0, a.value = "", clearTimeout(s);
      try {
        const v = await fetch(Ci("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: y.target.checked }) });
        if (!v.ok) throw new Error();
        i.value = await v.json(), i.value.status === "building" && (s = setTimeout(c, 2e3));
      } catch {
        a.value = w("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        n.value = !1;
      }
    }
    return xt(c), Ti(() => {
      r = !1, clearTimeout(s);
    }), (y, v) => (h(), p("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("label", null, [
        l("input", {
          type: "checkbox",
          checked: i.value.enabled,
          disabled: n.value,
          onChange: d
        }, null, 40, b$),
        ce(We, {
          text: u(w)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      a.value ? (h(), p("p", g$, o(a.value), 1)) : E("", !0),
      i.value.status === "building" ? (h(), p("p", m$, o(u(w)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : E("", !0),
      i.value.status === "failed" ? (h(), p("p", y$, o(u(w)("library", "Duplicate scan failed")), 1)) : E("", !0),
      i.value.status === "ready" ? (h(), p("p", _$, o(u(w)("library", "Automatic duplicate suggestions are ready.")), 1)) : E("", !0)
    ], 8, v$));
  }
}, k$ = ["aria-label", "aria-busy"], S$ = ["href"], C$ = {
  key: 1,
  role: "alert"
}, T$ = {
  key: 2,
  role: "status"
}, A$ = ["disabled"], E$ = { value: "0" }, $$ = ["value"], x$ = { class: "library-duplicate-checkbox" }, O$ = ["disabled"], N$ = ["disabled"], R$ = ["value", "disabled"], I$ = { value: "" }, L$ = ["value"], P$ = ["aria-label"], D$ = { role: "status" }, F$ = ["value", "max", "aria-label"], M$ = {
  key: 1,
  role: "status"
}, U$ = {
  key: 2,
  role: "alert"
}, z$ = {
  key: 3,
  role: "alert"
}, j$ = { class: "library-duplicate-actions" }, B$ = ["disabled"], H$ = ["disabled"], V$ = ["disabled"], q$ = ["disabled"], G$ = { value: "all" }, K$ = ["value"], W$ = {
  key: 0,
  role: "status"
}, Y$ = ["data-pair-id"], Z$ = {
  key: 0,
  role: "status"
}, X$ = { class: "library-duplicate-decision" }, J$ = ["aria-label"], Q$ = ["aria-label"], ex = {
  key: 1,
  role: "alert"
}, tx = { class: "library-duplicate-books" }, ix = { class: "library-duplicate-book-heading" }, nx = ["src"], ax = { dir: "auto" }, rx = { dir: "auto" }, lx = { key: 0 }, sx = { dir: "auto" }, ox = { dir: "ltr" }, ux = { dir: "auto" }, cx = { class: "library-duplicate-actions" }, dx = ["href"], fx = ["href"], hx = ["disabled", "onClick"], px = { class: "library-duplicate-actions" }, vx = ["disabled", "onClick"], bx = ["disabled", "onClick"], gx = ["disabled", "onClick"], mx = ["aria-label"], yx = ["disabled"], _x = ["disabled"], wx = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, n = e, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G("0"), c = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(null), y = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G("unreviewed");
    let k, T = !0, C = 0;
    const O = H(() => d.value?.status === "running"), I = H(() => ({ running: w("library", "Finding possible duplicates"), completed: w("library", "Duplicate scan complete"), cancelled: w("library", "Duplicate scan cancelled"), failed: w("library", "Duplicate scan failed"), limited: w("library", "Duplicate scan reached its limit") })), L = H(() => ({ unreviewed: w("library", "To review"), preferred: w("library", "Preferred copy selected"), keep: w("library", "Keep both"), dismissed: w("library", "Dismissed") })), D = H(() => ({ identical: w("library", "Identical file contents"), isbn: w("library", "Same ISBN"), title_author: w("library", "Same normalized title and authors"), similar_title_author: w("library", "Similar title and matching authors") })), R = H(() => ({ formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") })), pe = (Z) => Z < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: Z < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(Z < 1e3 ? Z : Z / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(Z / 1048576) + " " + w("library", "MiB");
    async function Q(Z = "", ae) {
      const X = await fetch(Ci(`/apps/library/api/duplicates${Z}`), { credentials: "same-origin", cache: "no-store", method: ae === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: n.requestToken }, ...ae === void 0 ? {} : { body: JSON.stringify(ae) } }), ve = await X.json().catch(() => ({}));
      if (!X.ok)
        throw X.status === 409 ? new Error(w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : ve.error === "decision_limit" ? new Error(w("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : ve.error === "history_limit" ? new Error(w("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : ve.error === "scope_limit" ? new Error(w("library", "This scope is too large. Choose a smaller library root.")) : X.status === 404 ? new Error(w("library", "This scan or these books are no longer available.")) : new Error(w("library", "Could not complete the duplicate review. Please try again."));
      return ve;
    }
    async function $() {
      const Z = await Q();
      T && (a.value = Z.roots, r.value = Z.scans);
    }
    async function q(Z) {
      y.value = !0, v.value = "";
      try {
        await Z();
      } catch (ae) {
        T && (v.value = ae.message);
      } finally {
        T && (y.value = !1);
      }
    }
    function K() {
      if (clearTimeout(k), !T || !O.value) return;
      const Z = C, ae = d.value.id;
      k = setTimeout(async () => {
        try {
          if (await Q(`/${ae}/advance`, {}), !T || Z !== C) return;
          const X = await Q(`/${ae}?page=${d.value.page}&filter=${m.value}`);
          if (!T || Z !== C) return;
          d.value = X, O.value || await $(), K();
        } catch (X) {
          T && Z === C && (v.value = X.message);
        }
      }, 1500);
    }
    async function Y() {
      await q(async () => {
        d.value = await Q("", { rootId: Number(s.value), contents: c.value }), C++, m.value = "unreviewed", g.value = "", await $(), K();
      });
    }
    async function ne(Z, ae = 1) {
      const X = ++C;
      clearTimeout(k), await q(async () => {
        const ve = await Q(`/${Z}?page=${ae}&filter=${m.value}`);
        T && X === C && (d.value = ve, s.value = String(ve.rootId), c.value = !!ve.contents, K());
      });
    }
    function B(Z) {
      m.value = "unreviewed", g.value = "", Z.target.value && ne(Z.target.value);
    }
    async function z() {
      C++, clearTimeout(k), await q(async () => {
        await Q(`/${d.value.id}/cancel`, {}), d.value = await Q(`/${d.value.id}?filter=${m.value}`), await $();
      });
    }
    async function x() {
      C++, clearTimeout(k), await q(async () => {
        await Q(`/${d.value.id}/discard`, {}), d.value = null, await $();
      });
    }
    async function P(Z, ae, X = 0) {
      C++, clearTimeout(k), await q(async () => {
        await Q(`/${d.value.id}/pairs/${Z.id}`, { signature: Z.signature, decision: ae, preferredId: X }), g.value = w("library", "Review saved. Your files and catalogue metadata were not changed."), d.value = await Q(`/${d.value.id}?page=${d.value.page}&filter=${m.value}`), K();
      });
    }
    return xt(() => q($)), Ti(() => {
      T = !1, C++, clearTimeout(k);
    }), (Z, ae) => (h(), p("section", {
      class: "library-duplicates",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": y.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(w)("library", "Review")), 9, S$),
      l("h1", null, [
        ce(We, {
          text: u(w)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      ce(w$, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (h(), Pe(pg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : E("", !0),
      v.value ? (h(), p("p", C$, o(v.value), 1)) : E("", !0),
      g.value ? (h(), p("p", T$, o(g.value), 1)) : E("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Se(Y, ["prevent"])
      }, [
        l("label", null, [
          ie(o(u(w)("library", "Library root")), 1),
          be(l("select", {
            "onUpdate:modelValue": ae[0] || (ae[0] = (X) => s.value = X),
            disabled: y.value || O.value
          }, [
            l("option", E$, o(u(w)("library", "All library roots")), 1),
            (h(!0), p(W, null, ue(a.value, (X) => (h(), p("option", {
              key: X.id,
              value: String(X.id)
            }, o(X.label), 9, $$))), 128))
          ], 8, A$), [
            [at, s.value]
          ])
        ]),
        l("label", x$, [
          be(l("input", {
            "onUpdate:modelValue": ae[1] || (ae[1] = (X) => c.value = X),
            type: "checkbox",
            disabled: y.value || O.value
          }, null, 8, O$), [
            [Hn, c.value]
          ]),
          ce(We, {
            text: u(w)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: y.value || O.value || !a.value.length
        }, o(u(w)("library", "Find possible duplicates")), 9, N$)
      ], 32),
      l("label", null, [
        ce(We, {
          text: u(w)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: d.value?.id || "",
          disabled: y.value,
          onChange: B
        }, [
          l("option", I$, o(u(w)("library", "Choose a scan")), 1),
          (h(!0), p(W, null, ue(r.value, (X) => (h(), p("option", {
            key: X.id,
            value: X.id
          }, o(new Date(Number(X.created_at) * 1e3).toLocaleString()) + " · " + o(I.value[X.status]), 9, L$))), 128))
        ], 40, R$)
      ]),
      d.value ? (h(), p(W, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(w)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(d.value.rootId ? d.value.label : u(w)("library", "All library roots")), 1),
          l("p", D$, [
            ie(o(I.value[d.value.status]), 1),
            O.value ? (h(), p(W, { key: 0 }, [
              ie(" · " + o(d.value.phase === "index" ? u(w)("library", "Indexing metadata") : u(w)("library", "Comparing candidates")), 1)
            ], 64)) : E("", !0),
            ie(" · " + o(d.value.processed) + "/" + o(d.value.total), 1)
          ]),
          O.value ? (h(), p("progress", {
            key: 0,
            value: d.value.phase === "index" ? d.value.processed : void 0,
            max: Math.max(d.value.total, 1),
            "aria-label": u(w)("library", "Duplicate scan progress")
          }, null, 8, F$)) : E("", !0),
          l("p", null, o(u(w)("library", "Possible matches")) + ": " + o(d.value.matches) + " · " + o(u(w)("library", "Comparisons checked")) + ": " + o(d.value.examined), 1),
          d.value.hashSkipped || d.value.unavailable ? (h(), p("p", M$, o(u(w)("library", "Content checks skipped")) + ": " + o(d.value.hashSkipped) + " · " + o(u(w)("library", "Unavailable books")) + ": " + o(d.value.unavailable), 1)) : E("", !0),
          d.value.status === "limited" ? (h(), p("p", U$, o(u(w)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : E("", !0),
          d.value.status === "failed" ? (h(), p("p", z$, o(u(w)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : E("", !0),
          l("div", j$, [
            O.value ? (h(), p("button", {
              key: 0,
              class: "button secondary",
              disabled: y.value,
              onClick: z
            }, o(u(w)("library", "Cancel scan")), 9, B$)) : E("", !0),
            l("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: ae[2] || (ae[2] = (X) => ne(d.value.id, d.value.page))
            }, o(u(w)("library", "Refresh results")), 9, H$),
            l("button", {
              class: "button secondary",
              disabled: y.value || O.value,
              onClick: x
            }, o(u(w)("library", "Discard scan")), 9, V$)
          ])
        ], 8, P$),
        l("label", null, [
          ie(o(u(w)("library", "Show comparisons")), 1),
          be(l("select", {
            "onUpdate:modelValue": ae[3] || (ae[3] = (X) => m.value = X),
            disabled: y.value,
            onChange: ae[4] || (ae[4] = (X) => ne(d.value.id))
          }, [
            l("option", G$, o(u(w)("library", "All")) + " (" + o(d.value.matches) + ")", 1),
            (h(!0), p(W, null, ue(L.value, (X, ve) => (h(), p("option", {
              key: ve,
              value: ve
            }, o(X) + " (" + o(d.value.counts[ve] || 0) + ")", 9, K$))), 128))
          ], 40, q$), [
            [at, m.value]
          ])
        ]),
        !d.value.pairs.length && !O.value ? (h(), p("p", W$, o(u(w)("library", "No comparisons in this view.")), 1)) : E("", !0),
        (h(!0), p(W, null, ue(d.value.pairs, (X) => (h(), p("article", {
          key: X.id,
          class: "library-duplicate-pair",
          "data-pair-id": X.id
        }, [
          X.unavailable ? (h(), p("p", Z$, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : (h(), p(W, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(X.reasons.includes("identical") ? u(w)("library", "Identical file contents") : u(w)("library", "Possible duplicates")), 1),
              l("span", X$, o(L.value[X.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(w)("library", "Why these books match")
            }, [
              (h(!0), p(W, null, ue(X.reasons, (ve) => (h(), p("li", { key: ve }, o(D.value[ve]), 1))), 128))
            ], 8, J$),
            X.flags.length ? (h(), p("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(w)("library", "Differences to review")
            }, [
              (h(!0), p(W, null, ue(X.flags, (ve) => (h(), p("li", { key: ve }, o(R.value[ve]), 1))), 128))
            ], 8, Q$)) : E("", !0),
            X.stale ? (h(), p("p", ex, o(u(w)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : E("", !0),
            l("div", tx, [
              (h(!0), p(W, null, ue(X.books, (ve) => (h(), p("section", {
                key: ve.id,
                class: Ae(["library-duplicate-book", { "library-duplicate-preferred": X.preferredId === ve.id }])
              }, [
                l("div", ix, [
                  l("img", {
                    src: ve.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, nx),
                  l("div", null, [
                    l("h3", ax, o(ve.title), 1),
                    l("p", rx, o(ve.authors.join("; ") || "—"), 1),
                    X.preferredId === ve.id ? (h(), p("strong", lx, o(u(w)("library", "Preferred copy")), 1)) : E("", !0)
                  ])
                ]),
                l("dl", null, [
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Format")), 1),
                    l("dd", null, o(ve.format.toUpperCase()) + " · " + o(pe(ve.size)), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Language")), 1),
                    l("dd", null, o(ve.language || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Publication date")), 1),
                    l("dd", null, o(ve.publicationDate || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Publisher")), 1),
                    l("dd", sx, o(ve.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "ISBN")), 1),
                    l("dd", ox, o(ve.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Location")), 1),
                    l("dd", ux, o(ve.path), 1)
                  ])
                ]),
                l("div", cx, [
                  l("a", {
                    class: "button secondary",
                    href: ve.openUrl
                  }, o(u(w)("library", "Open")), 9, dx),
                  l("a", {
                    class: "button secondary",
                    href: ve.detailsUrl
                  }, o(u(w)("library", "Details")), 9, fx),
                  l("button", {
                    class: "button primary",
                    disabled: y.value || O.value || X.stale,
                    onClick: (Ce) => P(X, "preferred", ve.id)
                  }, o(u(w)("library", "Prefer this copy")), 9, hx)
                ])
              ], 2))), 128))
            ]),
            l("div", px, [
              l("button", {
                class: "button secondary",
                disabled: y.value || O.value || X.stale,
                onClick: (ve) => P(X, "keep")
              }, o(u(w)("library", "Keep both")), 9, vx),
              l("button", {
                class: "button secondary",
                disabled: y.value || O.value || X.stale,
                onClick: (ve) => P(X, "dismissed")
              }, o(u(w)("library", "Dismiss match")), 9, bx),
              X.decision !== "unreviewed" ? (h(), p("button", {
                key: 0,
                class: "button secondary",
                disabled: y.value || O.value || X.stale,
                onClick: (ve) => P(X, "unreviewed")
              }, o(u(w)("library", "Reset review decision")), 9, gx)) : E("", !0)
            ])
          ], 64))
        ], 8, Y$))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(w)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: y.value || d.value.page === 1,
            onClick: ae[5] || (ae[5] = (X) => ne(d.value.id, d.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, yx),
          l("span", null, o(d.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: y.value || !d.value.hasNext,
            onClick: ae[6] || (ae[6] = (X) => ne(d.value.id, d.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, _x)
        ], 8, mx)
      ], 64)) : E("", !0)
    ], 8, k$));
  }
}, ef = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], kx = /* @__PURE__ */ new Set([...ef, "ignore", "folder", "folders", "extension"]);
function vg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const n = (g) => g === "%folders%/" ? "folders" : g.slice(1, -1), a = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (a.some((g) => g.includes("%") && !kx.has(n(g))) || a.filter((g) => g.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let r = 0, s = !1;
  const c = [];
  function d(g, m, k) {
    if (++r > 5e3) {
      s = !0;
      return;
    }
    if (c.length > 1) return;
    if (g === a.length) {
      m === e.length && c.push(k);
      return;
    }
    const T = a[g];
    if (!T.startsWith("%")) {
      e.startsWith(T, m) && d(g + 1, m + T.length, k);
      return;
    }
    const C = n(T);
    if (C === "folders") {
      d(g + 1, m, k);
      for (let L = m; L < e.length && !s && c.length < 2; L++) e[L] === "/" && d(g + 1, L + 1, k);
      return;
    }
    const O = e.indexOf("/", m), I = O < 0 ? e.length : O;
    for (let L = m + 1; L <= I && !s && c.length < 2; L++) {
      const D = e.slice(m, L);
      C === "folder" && L !== I || C === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(D) || d(g + 1, L, [...k, { key: C, raw: D }]);
    }
  }
  if (d(0, 0, []), s || c.length > 1) return { status: "ambiguous", changes: [] };
  if (!c.length) return { status: "unmatched", changes: [] };
  const y = /* @__PURE__ */ new Map(), v = [];
  for (const { key: g, raw: m } of c[0]) {
    if (!ef.includes(g)) continue;
    let k = m.trim();
    if (y.has(g) && y.get(g) !== k) return { status: "ambiguous", changes: [] };
    if (y.has(g)) continue;
    if (y.set(g, k), g === "year" && !/^\d{4}$/.test(k)) return { status: "invalid", reason: "year", changes: [] };
    if (g === "language" && (k = bg(k)), g === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (g === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!gg(g, k)) return { status: "invalid", changes: [] };
    const T = String(i[g] || ""), C = g === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : T === k;
    v.push({ field: g, raw: m, value: k, ...g === "author" ? { values: [k] } : {}, before: T, previewOnly: !1, status: C ? "unchanged" : T.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((g) => g.status === "conflict") ? "conflict" : v.some((g) => g.status === "ready") ? "ready" : "unchanged", changes: v };
}
function bg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, n, a) => `${n}-${a.toUpperCase()}`);
}
function gg(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const Sx = [...ef];
function ns(e) {
  const t = e.split("/"), i = t.pop() || "", n = i.lastIndexOf(".");
  return [...t, n > 0 ? i.slice(0, n) : i];
}
function ku(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function pd(e, t, i) {
  if (!t) return [e];
  if (i === "every") return e.split(t);
  const n = i === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return n < 0 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}
function Jo(e) {
  return { version: 1, combineAuthors: !1, parts: ns(e).map((t, i, n) => ku(i === n.length - 1 ? "title" : "ignore")) };
}
function Qo(e, t, i = {}) {
  const n = (g) => ({ status: g, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return n("invalid");
  const a = ns(e);
  if (a.length !== t.parts.length) return n("unmatched");
  const r = /* @__PURE__ */ new Map();
  let s = 0, c = "";
  function d(g, m, k = 0) {
    if (c) return;
    if (++s > 128 || k > 6 || !m) {
      c = "invalid";
      return;
    }
    if (m.split) {
      const { delimiter: I, occurrence: L, children: D } = m.split;
      if (typeof I != "string" || !I || I.length > 100 || !["first", "last", "every"].includes(L) || !Array.isArray(D)) {
        c = "invalid";
        return;
      }
      const R = pd(g, I, L);
      if (R.length !== D.length || R.length < 2) {
        c = "unmatched";
        return;
      }
      R.forEach((pe, Q) => d(pe, D[Q], k + 1));
      return;
    }
    if (m.field === "ignore") return;
    if (!Sx.includes(m.field)) {
      c = "invalid";
      return;
    }
    let T = g.trim();
    if (m.prefix) {
      if (!T.startsWith(m.prefix)) {
        c = "unmatched";
        return;
      }
      T = T.slice(m.prefix.length);
    }
    if (m.suffix) {
      if (!T.endsWith(m.suffix)) {
        c = "unmatched";
        return;
      }
      T = T.slice(0, -m.suffix.length);
    }
    if (m.underscores && (T = T.replaceAll("_", " ")), T = T.trim(), m.mapFrom && T === m.mapFrom && (T = m.mapTo.trim()), m.field === "language" && (T = bg(T)), !T || m.field === "year" && !/^\d{4}$/.test(T) || m.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(T)) {
      c = "invalid";
      return;
    }
    if (!gg(m.field, T)) {
      c = "invalid";
      return;
    }
    let C = [T];
    if (m.field === "author") {
      if (C = (m.authorSeparator ? T.split(m.authorSeparator) : C).map((I) => I.trim()), m.reverseName && (C = C.map((I) => {
        const L = I.split(",").map((D) => D.trim());
        return L.length !== 2 || L.some((D) => !D) ? (c = "invalid", I) : `${L[1]} ${L[0]}`;
      }), c))
        return;
      if (C.some((I) => !I || [...I].length > 255)) {
        c = "invalid";
        return;
      }
    }
    const O = r.get(m.field);
    O ? m.field === "author" && t.combineAuthors ? (O.values = [.../* @__PURE__ */ new Set([...O.values, ...C])], O.raw.push(g)) : JSON.stringify(O.values) !== JSON.stringify(C) && (c = "ambiguous") : r.set(m.field, { raw: [g], values: [...new Set(C)] });
  }
  if (a.forEach((g, m) => d(g, t.parts[m])), c) return n(c);
  const y = r.get("author")?.values;
  if (y && (y.length > 32 || [...y.join("; ")].length > 1024)) return n("invalid");
  const v = [...r].map(([g, m]) => {
    const k = m.values.join("; "), T = String(i[g] || ""), C = g === "author" && Array.isArray(i.authors) ? JSON.stringify(m.values) === JSON.stringify(i.authors) : T === k;
    return {
      field: g,
      raw: m.raw.join(" / "),
      value: k,
      values: m.values,
      before: T,
      previewOnly: !1,
      status: C ? "unchanged" : T.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((g) => g.status === "conflict") ? "conflict" : v.some((g) => g.status === "ready") ? "ready" : "unchanged", changes: v };
}
const Cx = ["aria-label", "aria-busy"], Tx = {
  key: 0,
  role: "alert"
}, Ax = ["disabled"], Ex = {
  key: 2,
  role: "status"
}, $x = ["disabled"], xx = { class: "library-inference-presets" }, Ox = ["disabled"], Nx = ["disabled"], Rx = ["disabled"], Ix = ["aria-label"], Lx = ["value", "aria-label"], Px = { class: "library-inference-before-after" }, Dx = { key: 0 }, Fx = ["aria-label"], Mx = ["aria-label"], Ux = { class: "library-inference-path" }, zx = { class: "library-inference-presets" }, jx = ["disabled"], Bx = ["disabled"], Hx = ["disabled"], Vx = ["disabled"], qx = ["disabled"], Gx = { class: "library-inference-history" }, Kx = ["disabled", "onClick"], mg = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G([]), c = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(""), g = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), m = H(() => i.results.filter((ne) => ["ready", "conflict"].includes(ne.status) && ne.revision).map((ne) => ({ ...ne, changes: ne.changes.filter((B) => g.has(B.field) && ["ready", "conflict"].includes(B.status)) })).filter((ne) => ne.changes.length)), k = (ne, B) => `${ne.id}:${B.field}`, T = H(() => m.value.map((ne) => ({ id: ne.id, revision: ne.revision, changes: Object.fromEntries(ne.changes.filter((B) => a.value.includes(k(ne, B))).map((B) => [B.field, B.field === "author" ? B.values || [B.value] : B.value])) })).filter((ne) => Object.keys(ne.changes).length)), C = H(() => ({ prepared: w("library", "Awaiting approval"), applied: w("library", "Applied"), undone: w("library", "Undone") }));
    let O = 0;
    qe(() => JSON.stringify([i.results, i.context]), () => {
      a.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", O++;
    }), qe(() => JSON.stringify(a.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", O++;
    });
    function I() {
      a.value = m.value.flatMap((ne) => ne.changes.filter((B) => B.status === "ready").map((B) => k(ne, B)));
    }
    async function L(ne = "", B) {
      const z = await fetch(Ci(`/apps/library/api/inference/batches${ne}`), { credentials: "same-origin", cache: "no-store", method: B === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...B === void 0 ? {} : { body: JSON.stringify(B) } }), x = await z.json();
      if (!z.ok)
        throw z.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(w("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : x.error === "history_limit" ? new Error(w("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : z.status === 404 ? new Error(w("library", "The batch or one of its books is no longer available.")) : new Error(w("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return x;
    }
    async function D() {
      s.value = (await L()).batches;
    }
    async function R(ne) {
      c.value = !0, d.value = "", y.value = "";
      try {
        await ne();
      } catch (B) {
        d.value = B.message;
      } finally {
        c.value = !1;
      }
    }
    function pe() {
      r.value = null, d.value = "", v.value = "", n("changed");
    }
    async function Q() {
      const ne = O;
      await R(async () => {
        const B = await L("", { proposals: T.value, context: i.context });
        ne === O && (r.value = B), await D();
      });
    }
    async function $(ne) {
      await R(async () => {
        r.value = await L(`/${ne}`), v.value = "";
      });
    }
    async function q() {
      if (!r.value || i.disabled) return;
      const ne = r.value, B = ne.id;
      await R(async () => {
        const z = await L(`/${B}/apply`, {});
        r.value = { ...ne, ...z }, y.value = w("library", "Selected metadata changes were applied. Source files were not changed."), a.value = [], await D(), n("changed");
      });
    }
    async function K() {
      const ne = r.value, B = ne.id;
      await R(async () => {
        const z = await L(`/${B}/undo`, {});
        r.value = { ...ne, ...z }, v.value = "", y.value = w("library", "The batch was undone. Previous metadata and provenance were restored."), await D(), n("changed");
      });
    }
    async function Y() {
      await R(async () => {
        await L(`/${r.value.id}/discard`, {}), r.value = null, await D();
      });
    }
    return xt(() => R(D)), (ne, B) => (h(), p("section", {
      class: "library-inference-apply",
      "aria-label": u(w)("library", "Review and apply metadata"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h2", null, [
        ce(We, {
          text: e.wholeFolder ? u(w)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(w)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: we(() => [
            ie(o(e.wholeFolder ? u(w)("library", "Review and apply metadata") : u(w)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      d.value ? (h(), p("p", Tx, o(d.value), 1)) : E("", !0),
      r.value?.blocked ? (h(), p("button", {
        key: 1,
        class: "button secondary",
        disabled: c.value,
        onClick: pe
      }, o(u(w)("library", "Load sample")), 9, Ax)) : E("", !0),
      y.value ? (h(), p("p", Ex, o(y.value), 1)) : E("", !0),
      l("fieldset", {
        disabled: c.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", xx, [
          l("button", {
            class: "button secondary",
            disabled: !m.value.length,
            onClick: I
          }, o(u(w)("library", "Select empty fields")), 9, Ox),
          l("button", {
            class: "button secondary",
            disabled: !a.value.length,
            onClick: B[0] || (B[0] = (z) => a.value = [])
          }, o(u(w)("library", "Clear selection")), 9, Nx),
          l("button", {
            class: "button primary",
            disabled: !T.value.length || r.value?.status === "prepared",
            onClick: Q
          }, o(u(w)("library", "Review selected changes")) + " (" + o(a.value.length) + ")", 9, Rx)
        ]),
        l("div", {
          class: Ae(["library-inference-approval-candidates", { "library-inference-approval-scroll": m.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Select metadata fields")
        }, [
          (h(!0), p(W, null, ue(m.value, (z) => (h(), p("details", {
            key: z.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(z.path), 1),
            (h(!0), p(W, null, ue(z.changes, (x) => (h(), p("label", {
              key: x.field,
              class: "library-inference-approval-field"
            }, [
              be(l("input", {
                "onUpdate:modelValue": B[1] || (B[1] = (P) => a.value = P),
                type: "checkbox",
                value: k(z, x),
                "aria-label": `${e.labels[x.field]}: ${z.path}`
              }, null, 8, Lx), [
                [Hn, a.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[x.field]), 1),
                l("span", Px, [
                  l("span", null, o(x.before || "—"), 1),
                  B[4] || (B[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(x.value), 1)
                ]),
                x.status === "conflict" ? (h(), p("small", Dx, o(u(w)("library", "Replaces an existing value")), 1)) : E("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, Ix)
      ], 8, $x),
      r.value ? (h(), p("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(w)("library", "Confirmed change review")
      }, [
        l("h3", null, o(C.value[r.value.status]), 1),
        l("p", null, [
          ce(We, {
            text: u(w)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ie(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: Ae(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Reviewed metadata changes")
        }, [
          (h(!0), p(W, null, ue(r.value.entries, (z) => (h(), p("article", {
            key: z.id
          }, [
            l("h4", Ux, o(z.path), 1),
            l("dl", null, [
              (h(!0), p(W, null, ue(z.changes, (x) => (h(), p("div", {
                key: x.field
              }, [
                l("dt", null, o(e.labels[x.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(w)("library", "Before")) + ": " + o(x.before || "—"), 1),
                  l("strong", null, o(u(w)("library", "After")) + ": " + o(x.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, Mx),
        l("div", zx, [
          r.value.status === "prepared" ? (h(), p("button", {
            key: 0,
            class: "button primary",
            disabled: c.value || e.disabled || r.value.blocked,
            onClick: q
          }, o(u(w)("library", "Apply reviewed changes")), 9, jx)) : E("", !0),
          r.value.status !== "applied" ? (h(), p("button", {
            key: 1,
            class: "button secondary",
            disabled: c.value,
            onClick: Y
          }, o(u(w)("library", "Discard review")), 9, Bx)) : E("", !0),
          r.value.status === "applied" && !v.value ? (h(), p("button", {
            key: 2,
            class: "button secondary",
            disabled: c.value || r.value.blocked,
            onClick: B[2] || (B[2] = (z) => v.value = r.value.id)
          }, o(u(w)("library", "Undo this batch")), 9, Hx)) : E("", !0),
          v.value ? (h(), p(W, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: c.value || r.value.blocked,
              onClick: K
            }, o(u(w)("library", "Confirm undo")), 9, Vx),
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: B[3] || (B[3] = (z) => v.value = "")
            }, o(u(w)("library", "Cancel")), 9, qx)
          ], 64)) : E("", !0)
        ])
      ], 8, Fx)) : E("", !0),
      l("details", Gx, [
        l("summary", null, o(u(w)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (h(!0), p(W, null, ue(s.value, (z) => (h(), p("li", {
            key: z.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: (x) => $(z.id)
            }, o(new Date(Number(z.created_at) * 1e3).toLocaleString()) + " · " + o(C.value[z.status]), 9, Kx)
          ]))), 128))
        ])
      ])
    ], 8, Cx));
  }
}, Wx = { class: "library-inference-rule-trace" }, Yx = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (h(), p("div", Wx, [
      (h(!0), p(W, null, ue(e.result.conflicts || [], (n) => (h(), p("div", {
        key: n.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(w)("library", "Conflicting rules")) + ": " + o(e.labels[n.field]), 1),
        l("ul", null, [
          (h(!0), p(W, null, ue(n.proposals, (a, r) => (h(), p("li", { key: r }, [
            l("bdi", null, o(a.value), 1),
            l("small", null, o(a.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (h(), p("details", Yx, [
        l("summary", null, [
          ce(We, {
            text: u(w)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (h(!0), p(W, null, ue(e.result.attempts, (n) => (h(), p("li", {
            key: n.id
          }, [
            l("strong", null, o(n.name), 1),
            l("bdi", null, o(n.folder || "/"), 1),
            l("small", null, o(e.statuses[n.status]), 1)
          ]))), 128))
        ])
      ])) : E("", !0)
    ]));
  }
}, Zx = ["aria-label", "aria-busy"], Xx = {
  key: 0,
  role: "alert"
}, Jx = { class: "library-inference-presets" }, Qx = ["disabled"], e3 = ["value", "disabled"], t3 = { value: "" }, i3 = ["value"], n3 = { class: "library-inference-path" }, a3 = { role: "status" }, r3 = ["value", "max", "aria-label"], l3 = { class: "library-inference-presets" }, s3 = ["disabled"], o3 = ["disabled"], u3 = ["disabled"], c3 = {
  key: 1,
  role: "alert"
}, d3 = {
  key: 2,
  role: "alert"
}, f3 = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, h3 = { key: 1 }, p3 = { key: 2 }, v3 = ["disabled"], b3 = { value: "all" }, g3 = ["value"], m3 = ["aria-label"], y3 = { class: "library-inference-path" }, _3 = ["aria-label"], w3 = ["disabled"], k3 = ["disabled"], S3 = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G([]), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G("all");
    let c, d = 0, y = !0;
    const v = H(() => i.value?.status === "running"), g = H(() => ({ running: w("library", "Analysing"), completed: w("library", "Analysis complete"), cancelled: w("library", "Analysis cancelled"), failed: w("library", "Analysis failed"), limited: w("library", "Analysis limit reached") })), m = H(() => ({ ...t.statuses, unavailable: w("library", "Changed or unavailable books") }));
    async function k(Q = "", $) {
      const q = await fetch(Ci(`/apps/library/api/inference/analyses${Q}`), { credentials: "same-origin", cache: "no-store", method: $ === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...$ === void 0 ? {} : { body: JSON.stringify($) } }), K = await q.json();
      if (!q.ok)
        throw K.error === "analysis_history_limit" ? new Error(w("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : K.error === "analysis_limit" ? new Error(w("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : q.status === 404 ? new Error(w("library", "This analysis or its folder is no longer available.")) : new Error(w("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return K;
    }
    async function T() {
      const Q = await k();
      y && (n.value = Q.jobs);
    }
    async function C(Q) {
      a.value = !0, r.value = "";
      try {
        await Q();
      } catch ($) {
        y && (r.value = $.message);
      } finally {
        y && (a.value = !1);
      }
    }
    function O() {
      if (clearTimeout(c), !y || !v.value) return;
      const Q = i.value.id, $ = d;
      c = setTimeout(async () => {
        try {
          if (await k(`/${Q}/advance`, {}), !y || d !== $) return;
          const q = await k(`/${Q}?page=${i.value.page}&filter=${s.value}`);
          if (!y || d !== $) return;
          i.value = q, v.value || await T(), O();
        } catch (q) {
          y && d === $ && (r.value = q.message);
        }
      }, 1500);
    }
    async function I() {
      await C(async () => {
        const Q = await k("", { definition: t.definition });
        d++, s.value = "all", i.value = Q, await T(), O();
      });
    }
    async function L(Q, $ = 1) {
      const q = ++d;
      clearTimeout(c), await C(async () => {
        const K = await k(`/${Q}?page=${$}&filter=${s.value}`);
        y && q === d && (i.value = K, O());
      });
    }
    function D(Q) {
      s.value = "all", Q.target.value && L(Q.target.value);
    }
    async function R() {
      const Q = i.value.id;
      d++, clearTimeout(c), await C(async () => {
        await k(`/${Q}/cancel`, {}), i.value = await k(`/${Q}?filter=${s.value}`), await T();
      });
    }
    async function pe() {
      const Q = i.value.id;
      d++, clearTimeout(c), await C(async () => {
        await k(`/${Q}/discard`, {}), i.value = null, await T();
      });
    }
    return xt(() => C(T)), Ti(() => {
      y = !1, d++, clearTimeout(c);
    }), (Q, $) => (h(), p("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(w)("library", "Whole-folder analysis"),
      "aria-busy": a.value ? "true" : "false"
    }, [
      l("h2", null, [
        ce(We, {
          text: u(w)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (h(), p("p", Xx, o(r.value), 1)) : E("", !0),
      l("div", Jx, [
        l("button", {
          class: "button primary",
          disabled: a.value || e.disabled || v.value,
          onClick: I
        }, o(u(w)("library", "Analyse whole folder")), 9, Qx),
        l("label", null, [
          ce(We, {
            text: u(w)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: i.value?.id || "",
            disabled: a.value,
            onChange: D
          }, [
            l("option", t3, o(u(w)("library", "Choose an analysis")), 1),
            (h(!0), p(W, null, ue(n.value, (q) => (h(), p("option", {
              key: q.id,
              value: q.id
            }, o(new Date(Number(q.created_at) * 1e3).toLocaleString()) + " · " + o(g.value[q.status]) + " · " + o(q.processed) + "/" + o(q.total), 9, i3))), 128))
          ], 40, e3)
        ])
      ]),
      i.value ? (h(), p(W, { key: 1 }, [
        l("p", n3, o(i.value.scope), 1),
        l("p", a3, o(g.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        v.value ? (h(), p("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(w)("library", "Analysis progress")
        }, null, 8, r3)) : E("", !0),
        l("div", l3, [
          v.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: a.value,
            onClick: R
          }, o(u(w)("library", "Cancel analysis")), 9, s3)) : E("", !0),
          l("button", {
            class: "button secondary",
            disabled: a.value,
            onClick: $[0] || ($[0] = (q) => L(i.value.id, i.value.page))
          }, o(u(w)("library", "Refresh results")), 9, o3),
          l("button", {
            class: "button secondary",
            disabled: a.value || v.value,
            onClick: pe
          }, o(u(w)("library", "Discard analysis")), 9, u3)
        ]),
        i.value.status === "limited" ? (h(), p("p", c3, o(u(w)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : E("", !0),
        i.value.status === "failed" ? (h(), p("p", d3, o(u(w)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : E("", !0),
        l("details", null, [
          l("summary", null, o(u(w)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (h(), p("code", f3, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (h(), p("ul", h3, [
            (h(!0), p(W, null, ue(i.value.definition.assignments, (q) => (h(), p("li", {
              key: q.id
            }, o(q.folder || "/") + " · " + o(q.definition.name), 1))), 128))
          ])) : (h(), p("ul", p3, [
            (h(!0), p(W, null, ue(i.value.definition.rule.parts, (q, K) => (h(), p("li", { key: K }, o(K + 1) + " · " + o(e.labels[q.field] || u(w)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          ie(o(u(w)("library", "Show results")), 1),
          be(l("select", {
            "onUpdate:modelValue": $[1] || ($[1] = (q) => s.value = q),
            disabled: a.value,
            onChange: $[2] || ($[2] = (q) => L(i.value.id))
          }, [
            l("option", b3, o(u(w)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((q, K) => q + K, 0)) + ")", 1),
            (h(!0), p(W, null, ue(m.value, (q, K) => (h(), p("option", {
              key: K,
              value: K
            }, o(q) + " (" + o(i.value.counts[K] || 0) + ")", 9, g3))), 128))
          ], 40, v3), [
            [at, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Analysis results")
        }, [
          (h(!0), p(W, null, ue(i.value.items, (q) => (h(), p("details", {
            key: q.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", y3, o(q.path || "—"), 1),
              l("strong", null, o(m.value[q.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (h(), Pe(vd, {
              key: 0,
              result: q,
              labels: e.labels,
              statuses: m.value
            }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
            (h(!0), p(W, null, ue(q.changes, (K) => (h(), p("dl", {
              key: K.field
            }, [
              l("dt", null, o(e.labels[K.field]), 1),
              l("dd", null, o(K.before || "—") + " → " + o(K.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, m3),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: a.value || i.value.page === 1,
            onClick: $[3] || ($[3] = (q) => L(i.value.id, i.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, w3),
          l("span", null, o(i.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: a.value || !i.value.hasNext,
            onClick: $[4] || ($[4] = (q) => L(i.value.id, i.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, k3)
        ], 8, _3),
        ce(mg, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: a.value || v.value,
          onChanged: $[5] || ($[5] = (q) => L(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : E("", !0)
    ], 8, Zx));
  }
}, C3 = { class: "library-inference-part" }, T3 = { class: "library-inference-part-source" }, A3 = { class: "library-inference-part-options" }, E3 = { value: "first" }, $3 = { value: "last" }, x3 = { value: "every" }, O3 = {
  key: 0,
  role: "status"
}, N3 = ["aria-label"], R3 = { value: "ignore" }, I3 = ["value"], L3 = { key: 1 }, P3 = { class: "library-inference-part-options" }, D3 = { class: "library-inference-checkbox" }, F3 = {
  key: 2,
  class: "library-inference-part-options"
}, M3 = { value: "none" }, U3 = { value: "semicolon" }, z3 = { value: "and" }, j3 = { value: "custom" }, B3 = { key: 0 }, H3 = ["value"], V3 = { class: "library-inference-checkbox" }, Ip = " and ", q3 = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(t.node.split?.delimiter || " - "), n = /* @__PURE__ */ G(t.node.split?.occurrence || "first"), a = H(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = H({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (d) => {
        t.node.authorSeparatorChoice = d, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Ip, custom: t.node.customAuthorSeparator || "" }[d];
      }
    });
    function s(d) {
      t.node.customAuthorSeparator = d.target.value, t.node.authorSeparator = d.target.value;
    }
    function c() {
      const d = pd(t.value, i.value, n.value).length, y = t.node.split?.children || [];
      t.node.split = {
        delimiter: i.value,
        occurrence: n.value,
        children: Array.from({ length: Math.min(32, Math.max(2, d)) }, (v, g) => y[g] || ku(g === 0 ? t.node.field : "ignore"))
      };
    }
    return (d, y) => {
      const v = Ze("InferencePart", !0);
      return h(), p("div", C3, [
        l("bdi", T3, o(e.value || "—"), 1),
        e.node.split ? (h(), p(W, { key: 0 }, [
          l("div", A3, [
            l("label", null, [
              ie(o(u(w)("library", "Separator")), 1),
              be(l("input", {
                "onUpdate:modelValue": y[0] || (y[0] = (g) => i.value = g),
                maxlength: "100",
                onInput: c
              }, null, 544), [
                [je, i.value]
              ])
            ]),
            l("label", null, [
              ie(o(u(w)("library", "Split at")), 1),
              be(l("select", {
                "onUpdate:modelValue": y[1] || (y[1] = (g) => n.value = g),
                onChange: c
              }, [
                l("option", E3, o(u(w)("library", "First occurrence")), 1),
                l("option", $3, o(u(w)("library", "Last occurrence")), 1),
                l("option", x3, o(u(w)("library", "Every occurrence")), 1)
              ], 544), [
                [at, n.value]
              ])
            ])
          ]),
          a.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (h(), p("p", O3, o(u(w)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : E("", !0),
          l("button", {
            class: "button secondary",
            onClick: y[2] || (y[2] = (g) => e.node.split = null)
          }, o(u(w)("library", "Use whole part")), 1),
          (h(!0), p(W, null, ue(e.node.split.children, (g, m) => (h(), Pe(v, {
            key: m,
            node: g,
            value: a.value[m] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (h(), p(W, { key: 1 }, [
          l("label", null, [
            ie(o(u(w)("library", "Field")), 1),
            be(l("select", {
              "onUpdate:modelValue": y[3] || (y[3] = (g) => e.node.field = g),
              "aria-label": `${u(w)("library", "Field")}: ${e.value}`
            }, [
              l("option", R3, o(u(w)("library", "Ignore this part")), 1),
              (h(!0), p(W, null, ue(e.fields, (g) => (h(), p("option", {
                key: g[0],
                value: g[0]
              }, o(g[1]), 9, I3))), 128))
            ], 8, N3), [
              [at, e.node.field]
            ])
          ]),
          e.depth < 6 ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            onClick: c
          }, o(u(w)("library", "Split this part")), 1)) : E("", !0),
          e.node.field !== "ignore" ? (h(), p("details", L3, [
            l("summary", null, o(u(w)("library", "Transform this value")), 1),
            l("div", P3, [
              l("label", null, [
                ie(o(u(w)("library", "Remove prefix")), 1),
                be(l("input", {
                  "onUpdate:modelValue": y[4] || (y[4] = (g) => e.node.prefix = g),
                  maxlength: "100"
                }, null, 512), [
                  [je, e.node.prefix]
                ])
              ]),
              l("label", null, [
                ie(o(u(w)("library", "Remove suffix")), 1),
                be(l("input", {
                  "onUpdate:modelValue": y[5] || (y[5] = (g) => e.node.suffix = g),
                  maxlength: "100"
                }, null, 512), [
                  [je, e.node.suffix]
                ])
              ]),
              l("label", D3, [
                be(l("input", {
                  "onUpdate:modelValue": y[6] || (y[6] = (g) => e.node.underscores = g),
                  type: "checkbox"
                }, null, 512), [
                  [Hn, e.node.underscores]
                ]),
                ie(o(u(w)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                ce(We, {
                  text: u(w)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: we(() => [
                    ie(o(u(w)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                be(l("input", {
                  "onUpdate:modelValue": y[7] || (y[7] = (g) => e.node.mapFrom = g),
                  maxlength: "200"
                }, null, 512), [
                  [je, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                ie(o(u(w)("library", "Replacement value")), 1),
                be(l("input", {
                  "onUpdate:modelValue": y[8] || (y[8] = (g) => e.node.mapTo = g),
                  maxlength: "200"
                }, null, 512), [
                  [je, e.node.mapTo]
                ])
              ])
            ])
          ])) : E("", !0),
          e.node.field === "author" ? (h(), p("div", F3, [
            l("label", null, [
              ce(We, {
                text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(w)("library", "Spaces around the word are required.") : "")
              }, {
                default: we(() => [
                  ie(o(u(w)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              be(l("select", {
                "onUpdate:modelValue": y[9] || (y[9] = (g) => r.value = g)
              }, [
                l("option", M3, o(u(w)("library", "None (keep one name)")), 1),
                l("option", U3, o(u(w)("library", "Semicolon (;)")), 1),
                y[11] || (y[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", z3, o(u(w)("library", "Word separator")) + ": " + o(Ip.trim()), 1),
                l("option", j3, o(u(w)("library", "Custom separator")), 1)
              ], 512), [
                [at, r.value]
              ])
            ]),
            r.value === "custom" ? (h(), p("label", B3, [
              ie(o(u(w)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, H3)
            ])) : E("", !0),
            l("label", V3, [
              be(l("input", {
                "onUpdate:modelValue": y[10] || (y[10] = (g) => e.node.reverseName = g),
                type: "checkbox"
              }, null, 512), [
                [Hn, e.node.reverseName]
              ]),
              ie(o(u(w)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : E("", !0)
        ], 64))
      ]);
    };
  }
}, G3 = ["aria-busy"], K3 = ["disabled"], W3 = {
  value: "",
  disabled: ""
}, Y3 = ["value"], Z3 = ["disabled"], X3 = ["disabled"], J3 = ["disabled"], Q3 = ["disabled"], e4 = ["disabled"], t4 = {
  key: 0,
  role: "alert"
}, i4 = ["disabled"], n4 = {
  key: 1,
  role: "status"
}, Lp = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = H(() => i.mode === "guided"), r = H(() => a.value ? JSON.stringify(i.rule) : i.pattern), s = (q) => (q.kind || "pattern") === "guided" ? JSON.stringify(q.rule) : q.pattern, c = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), T = /* @__PURE__ */ G([]), C = H(() => [
      { id: "title", name: w("library", "Title from filename"), pattern: "%folders%/%title%.%extension%", example: "Author/Book title.epub" },
      { id: "by", name: w("library", "Title by Author"), pattern: "%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A Magic Deep and Drowning by Hester Fox.epub" },
      { id: "title-author-year", name: w("library", "Title - Author (Year)"), pattern: "%folders%/%title% - %author% (%year%).%extension%", example: "Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "author-title", name: w("library", "Author - Title"), pattern: "%folders%/%author% - %title%.%extension%", example: "Ada Quill - A Quiet Orchard.epub" },
      { id: "author-folder", name: w("library", "Author folder / Title"), pattern: "%folders%/%author%/%title%.%extension%", example: "Ada Quill/A Quiet Orchard.epub" },
      { id: "series", name: w("library", "Series folder / Number. Title - Author (Year)"), pattern: "%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%", example: "Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub" },
      { id: "series-inline", name: w("library", "Series #Number - Title - Author (Year)"), pattern: "%folders%/%series% #%seriesNumber% - %title% - %author% (%year%).%extension%", example: "Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub" },
      { id: "language-subject", name: w("library", "books / Language_Subject / Title - Author (Year)"), pattern: "books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%", example: "books/english_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "language-subject-by", name: w("library", "books / Language_Subject / Title by Author"), pattern: "books/%language%_%subject%/%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A String in Her Tale by Mark Ezra.epub" },
      { id: "series-underscore", name: w("library", "Series folder / Number_Title_Author"), pattern: "%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%", example: "Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub" }
    ]), O = H(() => [...a.value ? [] : C.value.map((q) => ({ ...q, id: `preset-${q.id}` })).filter((q) => !T.value.includes(q.id)), ...c.value.filter((q) => (q.kind || "pattern") === i.mode)].sort((q, K) => q.name.localeCompare(K.name))), I = H(() => O.value.find((q) => q.id === y.value));
    qe([r, O], () => {
      k.value = "", (!I.value || s(I.value) !== r.value) && (y.value = O.value.find((q) => s(q) === r.value)?.id || "");
    }, { immediate: !0 });
    const L = H(() => [w("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), I.value?.example ? `${w("library", "Example path")}: ${I.value.example}` : ""].filter(Boolean).join(`

`));
    function D(q) {
      const K = O.value.find((Y) => Y.id === q.target.value);
      K && (y.value = K.id, a.value ? n("choose-rule", JSON.parse(JSON.stringify(K.rule))) : n("choose", K.pattern), m.value = "", k.value = "");
    }
    async function R(q = "", K = null) {
      const Y = await fetch(`${Ci("/apps/library/api/inference/patterns")}${q}`, {
        method: K === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...K === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...K === null ? {} : { body: JSON.stringify(K) }
      });
      if (!Y.ok) throw new Error(Y.status === 409 ? w("library", "That name already exists. Choose a different name.") : Y.status === 422 ? w("library", "Check the definition and name. You can save up to 100 rules and patterns.") : w("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Y.json();
    }
    async function pe() {
      v.value = !0, g.value = "";
      try {
        const q = await R();
        c.value = q.patterns, T.value = q.hidden || [];
      } catch (q) {
        g.value = q.message;
      } finally {
        v.value = !1;
      }
    }
    async function Q() {
      v.value = !0, g.value = "", m.value = "";
      try {
        const q = await R("", { name: d.value, ...a.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        c.value = [...c.value, q.saved].sort((K, Y) => K.name.localeCompare(Y.name)), y.value = q.saved.id, d.value = "", m.value = a.value ? w("library", "Rule saved to your account.") : w("library", "Pattern saved to your account.");
      } catch (q) {
        g.value = q.message;
      } finally {
        v.value = !1;
      }
    }
    async function $(q) {
      v.value = !0, g.value = "", m.value = "";
      try {
        await R(`/${q}/delete`, {}), c.value = c.value.filter((K) => K.id !== q), T.value = [...T.value, q], y.value = "", k.value = "", m.value = a.value ? w("library", "Saved rule deleted. The current preview is unchanged.") : w("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (K) {
        g.value = K.message;
      } finally {
        v.value = !1;
      }
    }
    return xt(pe), (q, K) => (h(), p("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("label", null, [
        ce(We, {
          text: a.value ? u(w)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : L.value
        }, {
          default: we(() => [
            ie(o(a.value ? u(w)("library", "Saved rule") : u(w)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        be(l("select", {
          "onUpdate:modelValue": K[0] || (K[0] = (Y) => y.value = Y),
          disabled: v.value,
          onChange: D
        }, [
          l("option", W3, o(a.value ? u(w)("library", "Custom rule") : u(w)("library", "Custom pattern")), 1),
          (h(!0), p(W, null, ue(O.value, (Y) => (h(), p("option", {
            key: Y.id,
            value: Y.id
          }, o(Y.name), 9, Y3))), 128))
        ], 40, K3), [
          [at, y.value]
        ])
      ]),
      Be(q.$slots, "default"),
      l("form", {
        onSubmit: Se(Q, ["prevent"])
      }, [
        l("label", null, [
          ce(We, {
            text: u(w)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: we(() => [
              ie(o(a.value ? u(w)("library", "Rule name") : u(w)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(l("input", {
            "onUpdate:modelValue": K[1] || (K[1] = (Y) => d.value = Y),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, Z3), [
            [je, d.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: v.value || !d.value.trim() || (a.value ? !e.rule : !e.pattern.trim())
        }, o(a.value ? u(w)("library", "Save current rule as new") : u(w)("library", "Save current pattern as new")), 9, X3),
        I.value && !k.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: K[2] || (K[2] = (Y) => k.value = I.value.id)
        }, o(a.value ? u(w)("library", "Delete rule") : u(w)("library", "Delete pattern")), 9, J3)) : E("", !0),
        k.value ? (h(), p(W, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: K[3] || (K[3] = (Y) => $(k.value))
          }, o(u(w)("library", "Confirm deletion")), 9, Q3),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: K[4] || (K[4] = (Y) => k.value = "")
          }, o(u(w)("library", "Cancel")), 9, e4)
        ], 64)) : E("", !0)
      ], 32),
      g.value ? (h(), p("p", t4, [
        ie(o(g.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: pe
        }, o(a.value ? u(w)("library", "Reload saved rules") : u(w)("library", "Reload saved patterns")), 9, i4)
      ])) : E("", !0),
      m.value ? (h(), p("p", n4, o(m.value), 1)) : E("", !0)
    ], 8, G3));
  }
}, a4 = ["aria-busy"], r4 = ["disabled"], l4 = {
  value: "",
  disabled: ""
}, s4 = ["value"], o4 = { class: "library-inference-path" }, u4 = { class: "library-inference-checkbox" }, c4 = ["disabled"], d4 = ["disabled"], f4 = {
  key: 0,
  role: "status"
}, h4 = {
  key: 1,
  role: "alert"
}, p4 = ["disabled"], v4 = { key: 2 }, b4 = { class: "library-inference-folder-list" }, g4 = {
  key: 0,
  role: "status"
}, m4 = ["disabled", "onClick"], y4 = ["disabled", "onClick"], _4 = ["disabled"], w4 = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G(!0), d = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), m = H(() => i.disabled || d.value || y.value);
    let k = 0;
    async function T(L, D) {
      const R = await fetch(Ci(`/apps/library/api/inference/${L}`), {
        method: D === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...D === void 0 ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...D === void 0 ? {} : { body: JSON.stringify(D) }
      });
      if (!R.ok) throw new Error(R.status === 409 ? w("library", "This rule is already assigned to this folder.") : R.status === 422 ? w("library", "Check the folder and rule. You can save up to 100 folder assignments.") : R.status === 404 ? w("library", "The folder or saved rule is unavailable. Reload and check your access.") : w("library", "Could not load or save folder rules. Try again."));
      return R.json();
    }
    async function C() {
      const L = ++k, D = i.rootId;
      if (r.value = [], g.value = "", v.value = "", n("loaded", { rootId: D, assignments: [] }), !!D) {
        d.value = !0;
        try {
          const [R, pe] = await Promise.all([T("patterns"), T(`folders?rootId=${encodeURIComponent(D)}`)]);
          if (L !== k) return;
          a.value = R.patterns, r.value = pe.assignments, a.value.some((Q) => Q.id === s.value) || (s.value = ""), n("loaded", { rootId: D, assignments: pe.assignments });
        } catch (R) {
          L === k && (v.value = R.message);
        } finally {
          L === k && (d.value = !1);
        }
      }
    }
    async function O() {
      if (!(m.value || i.scopePending || !s.value)) {
        y.value = !0, v.value = "";
        try {
          await T("folders", { rootId: i.rootId, folder: i.folder, recursive: c.value, definitionId: s.value }), await C();
        } catch (L) {
          v.value = L.message;
        } finally {
          y.value = !1;
        }
      }
    }
    async function I(L) {
      if (!m.value) {
        y.value = !0, v.value = "";
        try {
          await T(`folders/${L}/delete`, {}), await C();
        } catch (D) {
          v.value = D.message;
        } finally {
          y.value = !1;
        }
      }
    }
    return qe(() => i.rootId, C, { immediate: !0 }), Ti(() => {
      k++;
    }), (L, D) => (h(), p("div", {
      class: "library-inference-folder-rules",
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Se(O, ["prevent"])
      }, [
        l("label", null, [
          ce(We, {
            text: u(w)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(l("select", {
            "onUpdate:modelValue": D[0] || (D[0] = (R) => s.value = R),
            disabled: m.value
          }, [
            l("option", l4, o(u(w)("library", "Choose a saved definition")), 1),
            (h(!0), p(W, null, ue(a.value, (R) => (h(), p("option", {
              key: R.id,
              value: R.id
            }, o(R.name), 9, s4))), 128))
          ], 8, r4), [
            [at, s.value]
          ])
        ]),
        l("p", o4, [
          ie(o(u(w)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", u4, [
          be(l("input", {
            "onUpdate:modelValue": D[1] || (D[1] = (R) => c.value = R),
            type: "checkbox",
            disabled: m.value
          }, null, 8, c4), [
            [Hn, c.value]
          ]),
          ie(o(u(w)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || e.scopePending || !s.value || !e.rootId
        }, o(u(w)("library", "Assign to this folder")), 9, d4)
      ], 32),
      e.scopePending ? (h(), p("p", f4, o(u(w)("library", "Load the folder before assigning a rule.")), 1)) : E("", !0),
      v.value ? (h(), p("p", h4, o(v.value), 1)) : E("", !0),
      l("button", {
        class: "button secondary",
        disabled: m.value,
        onClick: C
      }, o(u(w)("library", "Reload folder rules")), 9, p4),
      l("h3", null, [
        ce(We, {
          text: u(w)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !d.value ? (h(), p("p", v4, o(u(w)("library", "No folder rules assigned yet.")), 1)) : E("", !0),
      l("ul", b4, [
        (h(!0), p(W, null, ue(r.value, (R) => (h(), p("li", {
          key: R.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(R.definition.name), 1),
          l("bdi", null, o(R.folder || "/"), 1),
          l("small", null, o(R.recursive ? u(w)("library", "Includes subfolders") : u(w)("library", "Direct children only")), 1),
          R.available ? E("", !0) : (h(), p("p", g4, o(u(w)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          g.value !== R.id ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: m.value,
            onClick: (pe) => g.value = R.id
          }, o(u(w)("library", "Remove assignment")), 9, m4)) : (h(), p(W, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: (pe) => I(R.id)
            }, o(u(w)("library", "Confirm removal")), 9, y4),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: D[2] || (D[2] = (pe) => g.value = "")
            }, o(u(w)("library", "Cancel")), 9, _4)
          ], 64))
        ]))), 128))
      ])
    ], 8, a4));
  }
};
function k4(e, t, i, n = {}) {
  const a = [t, e].filter(Boolean).join("/"), r = i.filter((c) => c.available && (!c.folder || a.startsWith(`${c.folder}/`))).map((c) => ({ ...c, relative: c.folder ? a.slice(c.folder.length + 1) : a, depth: c.folder ? c.folder.split("/").length : 0 })).filter((c) => c.recursive || !c.relative.includes("/")).sort((c, d) => d.depth - c.depth || c.id.localeCompare(d.id)), s = [];
  for (const c of [...new Set(r.map((d) => d.depth))]) {
    const d = [];
    for (const m of r.filter((k) => k.depth === c)) {
      const k = m.definition, T = k.kind === "guided" ? Qo(m.relative, k.rule, n) : vg(m.relative, k.pattern, n), C = { id: m.id, name: k.name, folder: m.folder };
      s.push({ ...C, status: T.status }), ["ready", "conflict", "unchanged"].includes(T.status) && T.changes.length && d.push({ result: T, source: C });
    }
    if (s.some((m) => m.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!d.length) continue;
    const y = /* @__PURE__ */ new Map();
    for (const { result: m, source: k } of d) for (const T of m.changes) {
      const C = y.get(T.field) || /* @__PURE__ */ new Map(), O = JSON.stringify(T.values || [T.value]), I = C.get(O);
      I ? I.sources.push(k) : C.set(O, { ...T, sources: [k] }), y.set(T.field, C);
    }
    const v = [], g = [];
    for (const [m, k] of y)
      k.size > 1 ? g.push({ field: m, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: g.length ? "ambiguous" : v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: g, attempts: s };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: s };
}
const Pp = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), yg = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Dp(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && yg.test(e);
}
function wl(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && yg.test(i)) && e.length <= 120;
}
function wr(e) {
  const t = e.split(",").map((i) => i.trim());
  return (wl(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function li(e, t = {}) {
  return { ...ku(e), ...t };
}
function ua(e, t, ...i) {
  return { ...ku(), split: { delimiter: e, occurrence: t, children: i } };
}
function S4(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || ns(e).length > 64) return [];
  const i = ns(e), n = i.length - 1, a = i[n], r = i.slice(0, -1), s = Jo(e), c = [], d = [];
  let y = a, v = (Y) => Y, g = (Y) => Y, m = "", k = li("title"), T = !1;
  const C = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(y), O = !C && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(y);
  C ? (y = C[1], v = (Y) => ua(" (", "last", Y, li("year", { suffix: ")" })), c.push("year-parentheses")) : O && (y = O[1], v = (Y) => ua(" ", "last", Y, li("year")), c.push("year-trailing"), d.push("year-may-be-title"));
  const I = /^(.*\S) by (.+)$/.exec(y), L = /^(.*\S) - (.+)$/.exec(y), D = I || L, R = !I && L && (wl(L[1]) || Dp(L[1]) && r.some((Y) => wr(Y) === wr(L[1]))), pe = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(y) && y.split(" - ").length === 2;
  R ? (m = L[1], y = L[2], g = (Y) => ua(" - ", "first", li("author"), Y), c.push("author-first"), d.push("author-needs-review")) : D && !pe && (Dp(D[2]) || wl(D[2])) && (m = D[2], y = D[1], g = (Y) => ua(I ? " by " : " - ", "last", Y, li("author")), c.push(I ? "author-by" : "author-dash"), r.some((Y) => wr(Y) === wr(m)) ? c.push("author-folder-agrees") : d.push("author-needs-review"));
  const Q = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(y), $ = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(y);
  if (Q)
    k = ua(" #", "first", li("series"), ua(" - ", "first", li("seriesNumber"), li("title"))), T = !0, c.push("series-inline");
  else if ($ && r.length) {
    const Y = r.at(-1);
    !wl(Y) && !(m && wr(Y) === wr(m)) && !Pp.has(Y.toLowerCase()) && !Y.includes("_") && (k = ua(". ", "first", li("seriesNumber"), li("title")), s.parts[n - 1] = li("series"), T = !0, c.push("series-folder"), d.push("series-needs-review"));
  }
  if (s.parts[n] = v(g(k)), !m) {
    const Y = T ? n - 2 : n - 1;
    Y >= 0 && wl(i[Y]) && (s.parts[Y] = li("author"), c.push("author-comma"), d.push("author-needs-review"));
  }
  for (let Y = r.length - 1; Y >= 0; Y--) {
    if (s.parts[Y].field !== "ignore") continue;
    const ne = r[Y], B = ne.indexOf("_"), z = B < 0 ? ne : ne.slice(0, B);
    if (Pp.has(z.toLowerCase())) {
      s.parts[Y] = B < 0 ? li("language") : ua("_", "first", li("language"), li("genre", { underscores: !0 })), c.push(B < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const q = [], K = (Y, ne, B, z) => {
    const x = Qo(e, ne);
    if (!["ready", "conflict", "unchanged"].includes(x.status)) return;
    const P = t.slice(0, 40).map((ae) => typeof ae == "string" ? ae : ae.path).filter((ae) => typeof ae == "string"), Z = P.filter((ae) => ["ready", "conflict", "unchanged"].includes(Qo(ae, ne).status)).length;
    q.push({ id: Y, rule: ne, clues: B, warnings: [...new Set(z)], preview: x.changes, matched: Z, total: P.length });
  };
  return c.length && K("detected", s, c, d), K("filename", Jo(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(a) ? ["year-may-be-title"] : []), q;
}
const C4 = { class: "library-inference-suggestions" }, T4 = ["disabled"], A4 = {
  value: "",
  disabled: ""
}, E4 = ["value"], $4 = {
  key: 0,
  "aria-live": "polite"
}, x4 = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G(""), r = H(() => S4(i.path, i.sample)), s = H(() => r.value.find((v) => v.id === a.value)), c = H(() => ({
      "year-parentheses": w("library", "Trailing year in parentheses"),
      "year-trailing": w("library", "Possible trailing year"),
      "author-by": w("library", "Title by Author"),
      "author-dash": w("library", "Title - Author"),
      "author-first": w("library", "Author - Title"),
      "author-folder-agrees": w("library", "Author matches a folder name"),
      "author-comma": w("library", "Possible Surname, Given name folder"),
      "series-inline": w("library", "Series #Number - Title"),
      "series-folder": w("library", "Series folder with a numbered title"),
      "language-folder": w("library", "Recognized language folder"),
      "language-genre-folder": w("library", "Language and genre in one folder"),
      "filename-title": w("library", "Title from filename")
    })), d = H(() => ({
      "year-may-be-title": w("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": w("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": w("library", "Check that the parent folder names a series and the number is its position.")
    }));
    qe(() => i.path, () => {
      a.value = "";
    }), qe(() => JSON.stringify(i.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (a.value = "");
    });
    function y(v) {
      a.value = v.target.value, s.value && n("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, g) => (h(), p("div", C4, [
      l("label", null, [
        ce(We, {
          text: u(w)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((m) => c.value[m]).join(`
`) : "")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        be(l("select", {
          "onUpdate:modelValue": g[0] || (g[0] = (m) => a.value = m),
          disabled: !r.value.length,
          onChange: y
        }, [
          l("option", A4, o(u(w)("library", "Choose a suggestion")), 1),
          (h(!0), p(W, null, ue(r.value, (m) => (h(), p("option", {
            key: m.id,
            value: m.id
          }, o(m.id === "filename" ? u(w)("library", "Title from filename") : u(w)("library", "Suggested assignments")), 9, E4))), 128))
        ], 40, T4), [
          [at, a.value]
        ])
      ]),
      s.value ? (h(), p("div", $4, [
        l("p", null, o(u(w)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (h(!0), p(W, null, ue(s.value.warnings, (m) => (h(), p("p", {
          key: m,
          class: "library-inference-suggestion-warning"
        }, o(d.value[m]), 1))), 128))
      ])) : E("", !0)
    ]));
  }
}, O4 = ["aria-label", "aria-busy"], N4 = {
  key: 0,
  role: "alert"
}, R4 = {
  key: 1,
  role: "status"
}, I4 = { class: "library-inference-step" }, L4 = ["disabled"], P4 = ["value"], D4 = ["disabled", "placeholder"], F4 = { class: "library-inference-checkbox" }, M4 = ["disabled"], U4 = ["disabled"], z4 = {
  key: 0,
  class: "library-inference-path"
}, j4 = ["aria-label"], B4 = ["disabled"], H4 = ["disabled", "onClick"], V4 = {
  key: 2,
  class: "library-inference-step"
}, q4 = { class: "library-inference-editor" }, G4 = { class: "library-inference-controls" }, K4 = { class: "library-inference-scope" }, W4 = ["value"], Y4 = ["open"], Z4 = { value: "guided" }, X4 = { value: "pattern" }, J4 = { value: "folders" }, Q4 = {
  key: 0,
  role: "status"
}, eO = { class: "library-inference-checkbox" }, tO = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, iO = ["aria-label"], nO = ["title"], aO = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, rO = { class: "library-inference-live-status" }, lO = { key: 1 }, sO = {
  key: 0,
  class: "library-inference-author-chips"
}, oO = {
  key: 1,
  dir: "auto"
}, uO = { dir: "auto" }, cO = { key: 2 }, dO = { dir: "auto" }, fO = { key: 3 }, hO = { key: 2 }, pO = { key: 1 }, vO = {
  class: "library-inference-path",
  dir: "ltr"
}, bO = { class: "library-inference-step" }, gO = { value: "all" }, mO = ["value"], yO = { key: 0 }, _O = { class: "library-inference-path" }, wO = {
  key: 1,
  class: "library-inference-table-scroll"
}, kO = { key: 2 }, SO = ["aria-label"], CO = ["disabled"], TO = ["disabled"], AO = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ G([]), i = /* @__PURE__ */ G(""), n = /* @__PURE__ */ G(""), a = /* @__PURE__ */ G(!0), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G(1), c = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), T = /* @__PURE__ */ G([]), C = /* @__PURE__ */ G(null), O = /* @__PURE__ */ G("guided"), I = /* @__PURE__ */ G(0), L = /* @__PURE__ */ G("%folders%/%title%.%extension%"), D = /* @__PURE__ */ G("all"), R = /* @__PURE__ */ G(!0);
    let pe = 0;
    const Q = H(() => [
      ["title", w("library", "Title")],
      ["subtitle", w("library", "Subtitle")],
      ["author", w("library", "Creators")],
      ["series", w("library", "Series")],
      ["seriesNumber", w("library", "Part in series")],
      ["language", w("library", "Language")],
      ["genre", w("library", "Genre")],
      ["publisher", w("library", "Publisher")],
      ["subject", w("library", "Subjects")],
      ["year", w("library", "Publication year")]
    ]), $ = H(() => Object.fromEntries(Q.value)), q = H(() => ({
      ready: w("library", "Empty field suggestions"),
      conflict: w("library", "Existing values need review"),
      unmatched: w("library", "Unmatched paths"),
      ambiguous: w("library", "Ambiguous matches"),
      invalid: w("library", "Invalid pattern or value"),
      unchanged: w("library", "No changes")
    })), K = H(() => r.value.map((ye) => ({ ...ye, ...O.value === "folders" ? k4(ye.path, k.value, T.value, ye.current) : O.value === "guided" ? Qo(ye.path, C.value, ye.current) : vg(ye.path, L.value, ye.current) }))), Y = H(() => K.value.find((ye) => ye.path === g.value)), ne = H(() => K.value.filter((ye) => D.value === "all" || ye.status === D.value)), B = H(() => [...new Set(r.value.filter((ye) => ye.path.includes("/")).map((ye) => ye.path.split("/")[0]))]);
    function z(ye) {
      n.value = [n.value.replace(/\/$/, ""), ye].filter(Boolean).join("/"), Me();
    }
    function x() {
      n.value = n.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Me();
    }
    const P = H(() => K.value.reduce((ye, Re) => (ye[Re.status] = (ye[Re.status] || 0) + 1, ye), {})), Z = H(() => i.value !== m.value || n.value.replace(/^\/+|\/+$/g, "") !== k.value), ae = H(() => ns(g.value));
    function X() {
      !C.value && g.value && (C.value = Jo(g.value));
    }
    function ve() {
      C.value = Jo(g.value), I.value++, O.value = "guided";
    }
    function Ce(ye) {
      C.value = ye, I.value++, O.value = "guided";
    }
    function Le(ye) {
      Ce(ye), R.value = !1;
    }
    function Oe(ye) {
      L.value = ye, O.value = "pattern";
    }
    async function Me(ye = 1) {
      const Re = ++pe;
      d.value = !0, y.value = "", r.value = [];
      try {
        const me = new URLSearchParams();
        i.value && (me.set("rootId", i.value), me.set("folder", n.value), me.set("recursive", a.value ? "1" : "0"), me.set("page", String(ye)));
        const De = await fetch(`${Ci("/apps/library/api/inference/sample")}?${me}`, { credentials: "same-origin", cache: "no-store" });
        if (!De.ok) throw new Error(w("library", "Could not load this folder. Check its path and your access."));
        const ut = await De.json();
        if (Re !== pe) return;
        if (t.value = ut.roots, !i.value && (i.value = String(ut.roots[0]?.id || ""), i.value))
          return Me();
        m.value !== i.value && (T.value = []), m.value = i.value;
        const ee = ut.roots.find((S) => String(S.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = ut.scope.slice(ee.length).replace(/^\//, ""), r.value = ut.items || [], s.value = ut.page || 1, c.value = !!ut.hasNext, v.value = ut.scope || "", g.value = r.value[0]?.path || "", X();
      } catch (me) {
        Re === pe && (y.value = me.message);
      } finally {
        Re === pe && (d.value = !1);
      }
    }
    function Xe(ye) {
      ye.rootId === m.value && (T.value = ye.assignments);
    }
    function ht() {
      n.value = "", Me();
    }
    return xt(() => Me()), (ye, Re) => (h(), p("section", {
      class: "library-inference",
      "aria-label": u(w)("library", "Extract metadata from paths"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h1", null, [
        ce(We, {
          text: u(w)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      y.value ? (h(), p("p", N4, o(y.value), 1)) : E("", !0),
      d.value ? (h(), p("p", R4, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      l("section", I4, [
        l("h2", null, o(u(w)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: Re[3] || (Re[3] = Se((me) => Me(), ["prevent"]))
        }, [
          l("label", null, [
            ce(We, {
              text: u(w)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: we(() => [
                ie(o(u(w)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            be(l("select", {
              "onUpdate:modelValue": Re[0] || (Re[0] = (me) => i.value = me),
              disabled: d.value || !t.value.length,
              onChange: ht
            }, [
              (h(!0), p(W, null, ue(t.value, (me) => (h(), p("option", {
                key: me.id,
                value: String(me.id)
              }, o(me.label), 9, P4))), 128))
            ], 40, L4), [
              [at, i.value]
            ])
          ]),
          l("label", null, [
            ie(o(u(w)("library", "Subfolder relative to this root")), 1),
            be(l("input", {
              "onUpdate:modelValue": Re[1] || (Re[1] = (me) => n.value = me),
              type: "text",
              disabled: d.value,
              placeholder: u(w)("library", "Leave empty for the whole root")
            }, null, 8, D4), [
              [je, n.value]
            ])
          ]),
          l("label", F4, [
            be(l("input", {
              "onUpdate:modelValue": Re[2] || (Re[2] = (me) => a.value = me),
              type: "checkbox",
              disabled: d.value
            }, null, 8, M4), [
              [Hn, a.value]
            ]),
            ie(o(u(w)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: d.value || !i.value
          }, o(u(w)("library", "Load sample")), 9, U4)
        ], 32),
        v.value ? (h(), p("p", z4, o(v.value), 1)) : E("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Folders in this sample")
        }, [
          n.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: d.value,
            onClick: x
          }, o(u(w)("library", "Parent folder")), 9, B4)) : E("", !0),
          (h(!0), p(W, null, ue(B.value, (me) => (h(), p("button", {
            key: me,
            class: "button secondary",
            disabled: d.value,
            onClick: (De) => z(me)
          }, o(me) + "/", 9, H4))), 128))
        ], 8, j4)
      ]),
      r.value.length ? (h(), p("section", V4, [
        l("h2", null, o(u(w)("library", "2. Describe the structure")), 1),
        l("div", q4, [
          l("div", G4, [
            l("div", K4, [
              l("label", null, [
                ce(We, {
                  text: u(w)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: we(() => [
                    ie(o(u(w)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                be(l("select", {
                  "onUpdate:modelValue": Re[4] || (Re[4] = (me) => g.value = me),
                  onChange: Re[5] || (Re[5] = (me) => X())
                }, [
                  (h(!0), p(W, null, ue(r.value, (me) => (h(), p("option", {
                    key: me.id,
                    value: me.path
                  }, o(me.path), 9, W4))), 128))
                ], 544), [
                  [at, g.value]
                ])
              ])
            ]),
            ce(x4, {
              path: g.value,
              sample: r.value,
              rule: O.value === "guided" ? C.value : null,
              onChoose: Le
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: R.value,
              onToggle: Re[9] || (Re[9] = (me) => R.value = me.target.open)
            }, [
              l("summary", null, o(u(w)("library", "Edit pattern")), 1),
              l("label", null, [
                ie(o(u(w)("library", "Rule editor")), 1),
                be(l("select", {
                  "onUpdate:modelValue": Re[6] || (Re[6] = (me) => O.value = me)
                }, [
                  l("option", Z4, o(u(w)("library", "Guided assignments")), 1),
                  l("option", X4, o(u(w)("library", "Advanced pattern")), 1),
                  l("option", J4, o(u(w)("library", "Folder rules")), 1)
                ], 512), [
                  [at, O.value]
                ])
              ]),
              O.value === "folders" ? (h(), Pe(w4, {
                key: 0,
                "root-id": m.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: d.value,
                "scope-pending": Z.value,
                onLoaded: Xe
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : E("", !0),
              O.value === "guided" && C.value ? (h(), p(W, { key: 1 }, [
                ce(Lp, {
                  mode: "guided",
                  rule: C.value,
                  "request-token": e.requestToken,
                  onChooseRule: Ce
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: ve
                }, o(u(w)("library", "Reset assignments from this example")), 1),
                ae.value.length !== C.value.parts.length ? (h(), p("p", Q4, o(u(w)("library", "This example has a different folder depth and does not match the rule.")), 1)) : E("", !0),
                (h(!0), p(W, null, ue(C.value.parts, (me, De) => (h(), p("div", {
                  key: `${I.value}-${De}`
                }, [
                  l("h3", null, o(De === C.value.parts.length - 1 ? u(w)("library", "Filename") : u(w)("library", "Folder")) + " " + o(De + 1), 1),
                  ce(q3, {
                    node: me,
                    value: ae.value[De] || "",
                    fields: Q.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", eO, [
                  be(l("input", {
                    "onUpdate:modelValue": Re[7] || (Re[7] = (me) => C.value.combineAuthors = me),
                    type: "checkbox"
                  }, null, 512), [
                    [Hn, C.value.combineAuthors]
                  ]),
                  ce(We, {
                    text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(w)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: we(() => [
                      ie(o(u(w)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : E("", !0),
              O.value === "pattern" ? (h(), p("details", tO, [
                l("summary", null, o(u(w)("library", "Pattern and presets")), 1),
                ce(Lp, {
                  pattern: L.value,
                  "request-token": e.requestToken,
                  onChoose: Oe
                }, {
                  default: we(() => [
                    l("label", null, [
                      ce(We, {
                        text: u(w)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + Q.value.map((me) => `%${me[0]}%`).join(" · ")
                      }, {
                        default: we(() => [
                          ie(o(u(w)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": Re[8] || (Re[8] = (me) => L.value = me),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [je, L.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : E("", !0)
            ], 40, Y4)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(w)("library", "Live preview")
          }, [
            l("h3", null, o(u(w)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: g.value
            }, o(g.value), 9, nO),
            Y.value ? (h(), p("div", aO, [
              l("p", rO, o(q.value[Y.value.status]), 1),
              O.value === "folders" ? (h(), Pe(vd, {
                key: 0,
                result: Y.value,
                labels: $.value,
                statuses: q.value
              }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
              Y.value.changes.length ? (h(), p("dl", lO, [
                (h(!0), p(W, null, ue(Y.value.changes, (me) => (h(), p("div", {
                  key: me.field,
                  class: Ae(["library-inference-live-field", `library-inference-live-field--${me.status}`])
                }, [
                  l("dt", null, o($.value[me.field]), 1),
                  l("dd", null, [
                    me.field === "author" && me.values ? (h(), p("span", sO, [
                      (h(!0), p(W, null, ue(me.values, (De) => (h(), p("strong", {
                        key: De,
                        dir: "auto"
                      }, o(De), 1))), 128))
                    ])) : (h(), p("strong", oO, o(me.value || "—"), 1)),
                    l("small", null, [
                      ie(o(u(w)("library", "Current value")) + ": ", 1),
                      l("span", uO, o(me.before || "—"), 1)
                    ]),
                    me.raw !== me.value ? (h(), p("small", cO, [
                      ie(o(u(w)("library", "Source text")) + ": ", 1),
                      l("span", dO, o(me.raw), 1)
                    ])) : E("", !0),
                    l("small", null, o(q.value[me.status]), 1),
                    me.sources ? (h(), p("small", fO, o(u(w)("library", "Matched rule")) + ": " + o(me.sources.map((De) => De.name).join(", ")), 1)) : E("", !0)
                  ])
                ], 2))), 128))
              ])) : Y.value.conflicts?.length ? E("", !0) : (h(), p("p", hO, o(u(w)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : E("", !0),
            O.value === "pattern" ? (h(), p("details", pO, [
              l("summary", null, o(u(w)("library", "Active pattern")), 1),
              l("code", vO, o(L.value), 1)
            ])) : E("", !0)
          ], 8, iO)
        ])
      ])) : E("", !0),
      l("section", bO, [
        l("h2", null, o(u(w)("library", "3. Review the sample")), 1),
        l("label", null, [
          ce(We, {
            text: u(w)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          be(l("select", {
            "onUpdate:modelValue": Re[10] || (Re[10] = (me) => D.value = me)
          }, [
            l("option", gO, o(u(w)("library", "All")) + " (" + o(K.value.length) + ")", 1),
            (h(!0), p(W, null, ue(q.value, (me, De) => (h(), p("option", {
              key: De,
              value: De
            }, o(me) + " (" + o(P.value[De] || 0) + ")", 9, mO))), 128))
          ], 512), [
            [at, D.value]
          ])
        ]),
        !ne.value.length && !d.value ? (h(), p("p", yO, o(u(w)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : E("", !0),
        (h(!0), p(W, null, ue(ne.value, (me) => (h(), p("details", {
          key: me.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", _O, o(me.path), 1),
            l("strong", null, o(q.value[me.status]), 1)
          ]),
          O.value === "folders" ? (h(), Pe(vd, {
            key: 0,
            result: me,
            labels: $.value,
            statuses: q.value
          }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
          me.changes.length ? (h(), p("div", wO, [
            l("table", null, [
              l("thead", null, [
                l("tr", null, [
                  l("th", null, o(u(w)("library", "Field")), 1),
                  l("th", null, o(u(w)("library", "Current value")), 1),
                  l("th", null, o(u(w)("library", "Proposed value")), 1),
                  l("th", null, o(u(w)("library", "Source text")), 1)
                ])
              ]),
              l("tbody", null, [
                (h(!0), p(W, null, ue(me.changes, (De) => (h(), p("tr", {
                  key: De.field
                }, [
                  l("th", null, o($.value[De.field]), 1),
                  l("td", null, o(De.before || "—"), 1),
                  l("td", null, [
                    ie(o(De.value), 1),
                    l("small", null, o(q.value[De.status]), 1)
                  ]),
                  l("td", null, o(De.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : me.conflicts?.length ? E("", !0) : (h(), p("p", kO, o(u(w)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: d.value || s.value === 1,
            onClick: Re[11] || (Re[11] = (me) => Me(s.value - 1))
          }, o(u(w)("library", "Previous page")), 9, CO),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: d.value || !c.value,
            onClick: Re[12] || (Re[12] = (me) => Me(s.value + 1))
          }, o(u(w)("library", "Next page")), 9, TO)
        ], 8, SO)
      ]),
      ce(mg, {
        class: "library-inference-step",
        results: K.value,
        labels: $.value,
        "request-token": e.requestToken,
        disabled: d.value || Z.value,
        context: JSON.stringify({ mode: O.value, pattern: O.value === "pattern" ? L.value : void 0, rule: O.value === "guided" ? C.value : void 0, folderRules: O.value === "folders" ? T.value : void 0, rootId: m.value, folder: k.value }),
        onChanged: Re[13] || (Re[13] = (me) => Me(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      ce(S3, {
        definition: { mode: O.value, pattern: L.value, rule: C.value, rootId: m.value, folder: k.value, recursive: a.value },
        labels: $.value,
        statuses: q.value,
        "request-token": e.requestToken,
        disabled: d.value || Z.value || !m.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, O4));
  }
}, EO = ["aria-label", "title", "onClick"], $O = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, xO = { id: "library-sidebar-filters-heading" }, OO = ["aria-label"], NO = ["value"], RO = ["name", "value"], IO = ["value"], LO = ["value"], PO = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, DO = ["title"], FO = ["placeholder"], MO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, UO = { value: "" }, zO = ["value"], jO = { class: "library-publisher-filter" }, BO = { for: "library-publisher-search" }, HO = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], VO = ["value"], qO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, GO = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, KO = ["id", "aria-selected"], WO = ["onClick"], YO = { class: "library-publication-filter" }, ZO = { for: "library-publication-search" }, XO = ["placeholder", "aria-expanded"], JO = ["value"], QO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, eN = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, tN = ["onClick"], iN = { class: "library-year-filter" }, nN = { for: "library-year-search" }, aN = ["placeholder", "aria-expanded"], rN = ["value"], lN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, sN = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, oN = ["onClick"], uN = { class: "library-creator-filter" }, cN = { for: "library-creator-search" }, dN = ["placeholder", "title", "aria-expanded"], fN = ["value"], hN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, pN = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, vN = ["onClick"], bN = { class: "library-tag-filter" }, gN = { for: "library-tag-search" }, mN = ["placeholder", "aria-expanded"], yN = ["value"], _N = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, wN = ["onClick"], kN = { value: "" }, SN = ["value"], CN = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, TN = { value: "" }, AN = ["value"], EN = { class: "library-folder-filter" }, $N = { for: "library-folder-search" }, xN = ["placeholder", "title", "aria-expanded"], ON = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, NN = ["onClick"], RN = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, IN = { value: "" }, LN = ["value"], PN = { value: "" }, DN = ["value"], FN = { class: "library-subject-filter" }, MN = { for: "library-subject-search" }, UN = ["placeholder", "title", "aria-expanded"], zN = ["value"], jN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, BN = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, HN = ["onClick"], VN = { class: "library-classification-filter" }, qN = { for: "library-classification-search" }, GN = ["placeholder", "title", "aria-expanded"], KN = ["value"], WN = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, YN = ["onClick"], ZN = { value: "" }, XN = { value: "1" }, JN = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, QN = {
  type: "submit",
  class: "button primary"
}, eR = ["href"], tR = ["lang", "dir"], iR = ["aria-label"], nR = ["href", "aria-label", "title", "onClick"], aR = ["title"], rR = ["href"], lR = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, sR = { class: "library-review-header" }, oR = { class: "library-muted library-catalogue-eyebrow" }, uR = { id: "library-review-heading" }, cR = ["aria-label"], dR = ["href", "aria-current", "onClick"], fR = ["aria-label"], hR = ["name", "value"], pR = {
  type: "submit",
  class: "button secondary"
}, vR = ["aria-busy"], bR = { key: 0 }, gR = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, mR = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, yR = { class: "library-metadata-review-workbench-copy" }, _R = { class: "library-muted library-catalogue-eyebrow" }, wR = ["title"], kR = {
  key: 0,
  class: "library-metadata-review-card"
}, SR = {
  class: "library-bidi-human",
  dir: "auto"
}, CR = { class: "library-muted" }, TR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, AR = { class: "library-metadata-review-fields" }, ER = {
  class: "library-bidi-human",
  dir: "auto"
}, $R = {
  class: "library-bidi-human",
  dir: "auto"
}, xR = {
  class: "library-bidi-human",
  dir: "auto"
}, OR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, NR = {
  class: "library-bidi-human",
  dir: "auto"
}, RR = {
  class: "library-bidi-human",
  dir: "auto"
}, IR = ["action"], LR = ["value"], PR = ["value"], DR = ["disabled", "title"], FR = { class: "library-metadata-review-actions" }, MR = ["href"], UR = ["href"], zR = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, jR = ["href"], BR = ["aria-label"], HR = ["onClick"], VR = {
  class: "library-bidi-human",
  dir: "auto"
}, qR = {
  key: 0,
  class: "library-muted"
}, GR = {
  class: "library-bidi-human",
  dir: "auto"
}, KR = {
  key: 1,
  class: "library-scan-error"
}, WR = {
  class: "library-bidi-human",
  dir: "auto"
}, YR = ["onClick"], ZR = ["href", "onClick"], XR = ["aria-label"], JR = ["href"], QR = {
  key: 1,
  class: "library-muted"
}, eI = { key: 0 }, tI = ["href"], iI = {
  key: 3,
  class: "library-muted"
}, nI = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, aI = { class: "library-home-header" }, rI = { class: "library-muted library-catalogue-eyebrow" }, lI = { id: "library-home-heading" }, sI = ["aria-label"], oI = ["aria-label"], uI = ["href", "aria-label", "onClick"], cI = ["title"], dI = { class: "library-empty-actions" }, fI = ["href"], hI = ["href"], pI = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, vI = { id: "library-continue-heading" }, bI = ["href"], gI = {
  key: 0,
  class: "library-home-card-row"
}, mI = ["aria-label", "onClick"], yI = { class: "library-cover-frame" }, _I = ["src"], wI = { class: "library-cover-summary" }, kI = ["onClick"], SI = { dir: "auto" }, CI = {
  key: 0,
  class: "library-cover-creator"
}, TI = { dir: "auto" }, AI = ["href", "onClick"], EI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, $I = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, xI = { id: "library-recent-heading" }, OI = ["href"], NI = {
  key: 0,
  class: "library-home-card-row"
}, RI = ["aria-label", "onClick"], II = { class: "library-cover-frame" }, LI = ["src"], PI = { class: "library-cover-summary" }, DI = ["onClick"], FI = { dir: "auto" }, MI = {
  key: 0,
  class: "library-cover-creator"
}, UI = { dir: "auto" }, zI = ["href", "onClick"], jI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, BI = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, HI = { id: "library-home-shelves-heading" }, VI = ["href"], qI = ["aria-label"], GI = ["href"], KI = { dir: "auto" }, WI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, YI = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, ZI = { id: "library-home-attention-heading" }, XI = { class: "library-muted" }, JI = ["href"], QI = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, eL = { class: "library-home-header" }, tL = { class: "library-muted library-catalogue-eyebrow" }, iL = { id: "library-shelves-landing-heading" }, nL = ["aria-label"], aL = ["aria-label"], rL = ["href", "aria-label", "onClick"], lL = ["title"], sL = { class: "library-empty-actions" }, oL = ["href"], uL = ["href"], cL = ["aria-label"], dL = { class: "library-shelf-tree" }, fL = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, hL = { class: "library-muted" }, pL = { class: "library-empty-actions" }, vL = ["href"], bL = ["href"], gL = ["aria-busy"], mL = { class: "library-catalogue-header" }, yL = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, _L = ["aria-label"], wL = { class: "library-mobile-filter-count" }, kL = ["aria-label"], SL = ["value"], CL = ["name", "value"], TL = { class: "library-mobile-filter-group" }, AL = { class: "library-quick-filter-search" }, EL = ["placeholder"], $L = { value: "" }, xL = ["value"], OL = { class: "library-publisher-filter" }, NL = { for: "library-mobile-publisher-search" }, RL = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], IL = ["value"], LL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, PL = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, DL = ["id", "aria-selected"], FL = ["onClick"], ML = { class: "library-publication-filter" }, UL = { for: "library-mobile-publication-search" }, zL = ["placeholder", "aria-expanded"], jL = ["value"], BL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, HL = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, VL = ["onClick"], qL = { class: "library-year-filter" }, GL = { for: "library-mobile-year-search" }, KL = ["placeholder", "aria-expanded"], WL = ["value"], YL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, ZL = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, XL = ["onClick"], JL = { class: "library-creator-filter" }, QL = { for: "library-mobile-creator-search" }, eP = ["placeholder", "title", "aria-expanded"], tP = ["value"], iP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, nP = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, aP = ["onClick"], rP = { value: "" }, lP = ["value"], sP = { class: "library-subject-filter" }, oP = { for: "library-mobile-subject-search" }, uP = ["placeholder", "title", "aria-expanded"], cP = ["value"], dP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, fP = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, hP = ["onClick"], pP = { class: "library-classification-filter" }, vP = { for: "library-mobile-classification-search" }, bP = ["placeholder", "title", "aria-expanded"], gP = ["value"], mP = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, yP = ["onClick"], _P = { class: "library-mobile-filter-group" }, wP = { value: "" }, kP = ["value"], SP = { class: "library-folder-filter" }, CP = { for: "library-mobile-folder-search" }, TP = ["placeholder", "title", "aria-expanded"], AP = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, EP = ["onClick"], $P = { class: "library-mobile-filter-group" }, xP = { value: "" }, OP = ["value"], NP = { value: "" }, RP = ["value"], IP = { value: "" }, LP = { value: "1" }, PP = { class: "library-mobile-filter-group" }, DP = { class: "library-tag-filter" }, FP = { for: "library-tag-search" }, MP = ["placeholder", "aria-expanded"], UP = ["value"], zP = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, jP = ["onClick"], BP = { value: "title" }, HP = { value: "recent" }, VP = { value: "publicationDate" }, qP = { value: "publication" }, GP = { value: "lastOpened" }, KP = { value: "format" }, WP = { value: "compact" }, YP = { value: "list" }, ZP = { class: "library-mobile-filter-actions" }, XP = ["href"], JP = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, QP = ["aria-label"], e8 = { class: "library-catalogue-control-band" }, t8 = {
  id: "library-collections",
  class: "library-saved-collections"
}, i8 = ["title"], n8 = ["action", "title"], a8 = ["value"], r8 = ["value"], l8 = { class: "library-control-label" }, s8 = ["placeholder", "disabled"], o8 = ["disabled", "title"], u8 = ["aria-label"], c8 = ["name", "value"], d8 = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, f8 = { value: "title" }, h8 = { value: "recent" }, p8 = { value: "publicationDate" }, v8 = { value: "publication" }, b8 = { value: "lastOpened" }, g8 = { value: "format" }, m8 = ["aria-label"], y8 = ["aria-pressed"], _8 = ["aria-pressed"], w8 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, k8 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, S8 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, C8 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, T8 = { key: 0 }, A8 = { key: 1 }, E8 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, $8 = { class: "library-muted library-catalogue-eyebrow" }, x8 = ["title"], O8 = ["aria-label"], N8 = { key: 0 }, R8 = { key: 1 }, I8 = { key: 2 }, L8 = ["aria-label"], P8 = { key: 0 }, D8 = { key: 1 }, F8 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, M8 = { class: "library-muted library-catalogue-eyebrow" }, U8 = ["title"], z8 = ["aria-label"], j8 = ["href"], B8 = {
  key: 0,
  class: "library-notice"
}, H8 = { class: "library-publication-issue-label" }, V8 = ["href"], q8 = { class: "library-muted" }, G8 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, K8 = ["title"], W8 = ["href"], Y8 = { class: "library-catalogue-status-row" }, Z8 = { class: "library-muted library-filter-result-summary" }, X8 = ["aria-label"], J8 = { class: "library-pagination-range" }, Q8 = { key: 0 }, e5 = ["href"], t5 = {
  key: 1,
  class: "library-muted"
}, i5 = ["href"], n5 = {
  key: 3,
  class: "library-muted"
}, a5 = ["title"], r5 = { class: "library-empty-actions" }, l5 = ["href"], s5 = { class: "library-muted" }, o5 = ["title"], u5 = { class: "library-empty-actions" }, c5 = ["href"], d5 = ["title"], f5 = ["aria-label"], h5 = ["href", "aria-label", "onClick"], p5 = ["title"], v5 = {
  key: 1,
  class: "library-muted"
}, b5 = { class: "library-empty-actions" }, g5 = ["href"], m5 = ["title"], y5 = { class: "library-empty-actions" }, _5 = ["href"], w5 = ["aria-label"], k5 = { class: "library-list-selection-actions" }, S5 = { class: "library-select-visible" }, C5 = ["checked"], T5 = ["title"], A5 = {
  key: 0,
  "aria-live": "polite"
}, E5 = ["aria-label"], $5 = { value: "" }, x5 = { value: "tag" }, O5 = { value: "untag" }, N5 = { value: "edit" }, R5 = { value: "covers" }, I5 = { value: "reset" }, L5 = ["action"], P5 = ["value"], D5 = ["placeholder"], F5 = ["title"], M5 = ["action"], U5 = ["value"], z5 = ["placeholder"], j5 = ["title"], B5 = ["action"], H5 = ["value"], V5 = ["name", "value"], q5 = ["title"], G5 = ["action"], K5 = ["value"], W5 = ["name", "value"], Y5 = { name: "bulkEditField" }, Z5 = { value: "publicationType" }, X5 = { value: "subtitle" }, J5 = { value: "creators" }, Q5 = { value: "publication" }, eD = { value: "series" }, tD = { value: "seriesNumber" }, iD = { value: "genre" }, nD = { value: "publicationDate" }, aD = { value: "language" }, rD = { value: "publisher" }, lD = { value: "subjects" }, sD = { value: "classifications" }, oD = ["placeholder"], uD = ["title"], cD = ["action"], dD = ["value"], fD = ["name", "value"], hD = ["title"], pD = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, vD = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, bD = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, gD = { class: "hidden-visually" }, mD = { class: "library-catalogue-list-selection" }, yD = { class: "hidden-visually" }, _D = { class: "library-catalogue-list-cover-heading" }, wD = { class: "hidden-visually" }, kD = { scope: "col" }, SD = { scope: "col" }, CD = { scope: "col" }, TD = { scope: "col" }, AD = { scope: "col" }, ED = { scope: "col" }, $D = { scope: "col" }, xD = { class: "library-catalogue-list-selection" }, OD = { class: "library-item-selection" }, ND = ["checked", "aria-label", "onChange"], RD = { class: "library-catalogue-list-cover-cell" }, ID = ["aria-label", "onClick"], LD = ["src"], PD = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, DD = ["onClick"], FD = {
  class: "library-bidi-human",
  dir: "auto"
}, MD = ["href"], UD = { class: "library-catalogue-list-creators" }, zD = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, jD = ["aria-label"], BD = ["datetime"], HD = ["aria-label"], VD = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, qD = ["aria-label"], GD = ["dir"], KD = ["aria-label"], WD = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, YD = ["aria-label"], ZD = { class: "library-catalogue-list-actions" }, XD = ["href", "onClick"], JD = ["onClick"], QD = { class: "library-item-selection" }, eF = ["checked", "aria-label", "onChange"], tF = ["aria-labelledby", "aria-expanded", "onClick"], iF = ["id"], nF = ["action", "onSubmit"], aF = ["value"], rF = ["value"], lF = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], sF = ["data-library-star-error"], oF = { class: "library-cover-summary" }, uF = { class: "library-cover-primary" }, cF = ["href"], dF = ["id"], fF = ["onClick"], hF = {
  class: "library-bidi-human",
  dir: "auto"
}, pF = {
  key: 1,
  class: "library-cover-creator"
}, vF = {
  class: "library-bidi-human",
  dir: "auto"
}, bF = {
  key: 2,
  class: "library-cover-context"
}, gF = {
  class: "library-bidi-human",
  dir: "auto"
}, mF = ["aria-label"], yF = { class: "library-pagination-range" }, _F = { key: 0 }, wF = ["href"], kF = {
  key: 1,
  class: "library-muted"
}, SF = ["href"], CF = {
  key: 3,
  class: "library-muted"
}, TF = { class: "library-sidebar-content" }, AF = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, EF = ["role"], $F = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, xF = { class: "library-sidebar-publication-header" }, OF = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, NF = ["src"], RF = { class: "library-sidebar-publication-summary" }, IF = { class: "library-muted library-catalogue-eyebrow" }, LF = {
  class: "library-bidi-human",
  dir: "auto"
}, PF = { key: 0 }, DF = {
  class: "library-bidi-machine",
  dir: "ltr"
}, FF = { class: "library-detail-drawer-actions" }, MF = ["href"], UF = ["aria-label"], zF = ["aria-current", "onClick"], jF = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, BF = { id: "library-sidebar-overview-heading" }, HF = {
  key: 0,
  class: "library-sidebar-description"
}, VF = {
  class: "library-bidi-human",
  dir: "auto"
}, qF = { class: "library-detail-drawer-facts" }, GF = { key: 0 }, KF = ["href", "title"], WF = {
  class: "library-bidi-human",
  dir: "auto"
}, YF = { key: 1 }, ZF = ["href", "title"], XF = { key: 1 }, JF = { key: 2 }, QF = { key: 2 }, eM = ["href", "title"], tM = {
  class: "library-bidi-human",
  dir: "auto"
}, iM = { key: 3 }, nM = { class: "library-detail-facet-list" }, aM = ["href", "title", "onClick"], rM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, lM = { key: 4 }, sM = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, oM = { id: "library-sidebar-metadata-heading" }, uM = ["placeholder"], cM = ["onUpdate:modelValue", "aria-label", "placeholder"], dM = ["onUpdate:modelValue", "aria-label"], fM = ["onClick"], hM = {
  key: 0,
  role: "alert"
}, pM = {
  key: 1,
  role: "status"
}, vM = ["disabled"], bM = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, gM = { id: "library-sidebar-suggestions-heading" }, mM = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, yM = { id: "library-sidebar-activity-heading" }, _M = { class: "library-detail-drawer-facts" }, wM = { key: 0 }, kM = { key: 1 }, SM = { key: 2 }, CM = { class: "library-detail-drawer-file" }, TM = ["href"], AM = { dir: "ltr" }, EM = {
  key: 1,
  dir: "ltr"
}, $M = ["aria-label"], xM = ["href"], OM = { dir: "auto" }, NM = ["aria-label"], RM = ["href"], IM = { dir: "auto" }, LM = ["aria-label"], PM = ["disabled"], DM = ["disabled"], FM = 20, MM = "/apps/library", UM = 2147483647, zM = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = U_(w, () => `${us()}:${ob()}`), i = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], a = Object.freeze([
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Suggested updates" },
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs details" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "File problems" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Cover problems" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Imported changes" }
    ]), r = Object.freeze({
      needsMetadata: "1",
      scannerConflicts: "1",
      status: "metadata_error",
      coverReview: "placeholder",
      noCreator: "1",
      noPublication: "1",
      noDate: "1",
      titleFromFilename: "1",
      weakMetadata: "filename",
      noDescription: "1",
      unsupportedContainer: "1",
      unreviewedImports: "1"
    });
    function s(_, b) {
      return Object.prototype.hasOwnProperty.call(r, _) && String(b ?? "").trim() === r[_];
    }
    function c(_) {
      const b = new URLSearchParams(_);
      for (const f of Object.keys(r)) {
        const M = [...new Set([...b.keys()].filter((Ee) => Ee === f || Ee.startsWith(`${f}[`)))], de = M.reduce((Ee, ze) => Ee + b.getAll(ze).length, 0);
        if (de > 1 || M.some((Ee) => Ee !== f)) {
          for (const Ee of M) b.delete(Ee);
          continue;
        }
        f !== "status" && de === 1 && !s(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function d(_) {
      return Object.keys(r).some((b) => _.getAll(b).length === 1 && s(b, _.get(b)));
    }
    function y(_) {
      return Object.fromEntries(Object.entries(_ || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || s(b, f)));
    }
    const v = Object.freeze(["compact", "list"]);
    function g(_) {
      return v.includes(_) ? _ : "compact";
    }
    const m = /* @__PURE__ */ Nt({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Nt((m.items || []).map((_) => ({ ..._ }))), T = H(() => k), C = H(() => m.shelves || []), O = H(() => m.formats || []), I = H(() => m.publicationTypes?.length ? m.publicationTypes : n), L = H(() => m.publications || []), D = H(() => m.publicationIssueContext || null), R = H(() => m.scanStatuses || []), pe = H(() => m.workflowStatuses || []), Q = H(() => m.cataloguePagination || {
      page: 1,
      limit: 100,
      total: T.value.length,
      visible: T.value.length,
      from: T.value.length > 0 ? 1 : 0,
      to: T.value.length,
      previousUrl: "",
      nextUrl: ""
    }), $ = /* @__PURE__ */ Nt({
      q: m.activeFilters?.q || "",
      view: g(m.activeFilters?.view),
      type: m.activeFilters?.type || "",
      publisher: m.activeFilters?.publisher || "",
      publication: m.activeFilters?.publication || "",
      year: m.activeFilters?.year || "",
      language: m.activeFilters?.language || "",
      creator: m.activeFilters?.creator || "",
      format: m.activeFilters?.format || "",
      tag: m.activeFilters?.tag || "",
      shelf: m.activeFilters?.shelf || "",
      folder: m.activeFilters?.folder || "",
      status: m.activeFilters?.status || "",
      workflowStatus: m.activeFilters?.workflowStatus || "",
      subject: m.activeFilters?.subject || "",
      classification: m.activeFilters?.classification || "",
      scannerConflicts: m.activeFilters?.scannerConflicts || "",
      starred: m.activeFilters?.starred || "",
      recentlyOpened: m.activeFilters?.recentlyOpened || "",
      needsMetadata: m.activeFilters?.needsMetadata || "",
      coverReview: m.activeFilters?.coverReview || "",
      noCreator: m.activeFilters?.noCreator || "",
      noPublication: m.activeFilters?.noPublication || "",
      noDate: m.activeFilters?.noDate || "",
      titleFromFilename: m.activeFilters?.titleFromFilename || "",
      noDescription: m.activeFilters?.noDescription || "",
      unsupportedContainer: m.activeFilters?.unsupportedContainer || "",
      weakMetadata: m.activeFilters?.weakMetadata || "",
      unreviewedImports: m.activeFilters?.unreviewedImports || "",
      sort: m.activeFilters?.sort || "title"
    });
    for (const _ of Object.keys(r))
      _ !== "status" && (s(_, $[_]) || ($[_] = ""));
    const q = /* @__PURE__ */ G($.publication), K = /* @__PURE__ */ G($.q), Y = /* @__PURE__ */ G(!1), ne = /* @__PURE__ */ G(null), B = H(() => {
      const _ = q.value.trim().toLocaleLowerCase();
      return (_ !== "" && ne.value !== null ? ne.value : L.value).filter((f) => _ === "" || f.toLocaleLowerCase().includes(_)).slice(0, FM);
    });
    qe(() => $.publication, (_) => {
      q.value = _ || "";
    }), qe(() => $.q, (_) => {
      K.value = _ || "";
    });
    let z = null, x = null, P = 0;
    qe(q, (_) => {
      window.clearTimeout(z), x?.abort(), x = null, ne.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++P;
      z = window.setTimeout(() => {
        Yg(b, f);
      }, 200);
    });
    const Z = /* @__PURE__ */ G($.publisher), ae = /* @__PURE__ */ G(!1), X = /* @__PURE__ */ G(null), ve = H(() => X.value || []);
    qe(() => $.publisher, (_) => {
      Z.value = _ || "";
    });
    let Ce = null, Le = null, Oe = 0;
    qe(Z, (_) => {
      window.clearTimeout(Ce), Le?.abort(), Le = null, X.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++Oe;
      Ce = window.setTimeout(() => {
        Hg(b, f);
      }, 200);
    });
    const Me = /* @__PURE__ */ G($.creator), Xe = /* @__PURE__ */ G(!1), ht = /* @__PURE__ */ G(null), ye = H(() => ht.value || []);
    qe(() => $.creator, (_) => {
      Me.value = _ || "";
    });
    let Re = null, me = null, De = 0;
    qe(Me, (_) => {
      window.clearTimeout(Re), me?.abort(), me = null, ht.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++De;
      Re = window.setTimeout(() => {
        Bg(b, f);
      }, 200);
    });
    const ut = /* @__PURE__ */ G($.folder), ee = /* @__PURE__ */ G(!1), S = /* @__PURE__ */ G(null), N = H(() => S.value || []);
    qe(() => $.folder, (_) => {
      ut.value = _ || "";
    });
    let F = null, V = null, j = 0;
    qe(ut, (_) => {
      window.clearTimeout(F), V?.abort(), V = null, S.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++j;
      F = window.setTimeout(() => {
        Kg(b, f);
      }, 200);
    });
    const J = /* @__PURE__ */ G($.subject), te = /* @__PURE__ */ G(!1), le = /* @__PURE__ */ G(null), he = H(() => le.value || []);
    qe(() => $.subject, (_) => {
      J.value = _ || "";
    });
    let se = null, $e = null, _e = 0;
    qe(J, (_) => {
      window.clearTimeout(se), $e?.abort(), $e = null, le.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++_e;
      se = window.setTimeout(() => {
        Vg(b, f);
      }, 200);
    });
    const Te = /* @__PURE__ */ G($.classification), xe = /* @__PURE__ */ G(!1), He = /* @__PURE__ */ G(null), Ye = H(() => He.value || []);
    qe(() => $.classification, (_) => {
      Te.value = _ || "";
    });
    let Ve = null, it = null, ct = 0;
    qe(Te, (_) => {
      window.clearTimeout(Ve), it?.abort(), it = null, He.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++ct;
      Ve = window.setTimeout(() => {
        qg(b, f);
      }, 200);
    });
    const _t = /* @__PURE__ */ G($.tag), bt = /* @__PURE__ */ G(!1), ti = /* @__PURE__ */ G(null), pi = H(() => ti.value || []);
    qe(() => $.tag, (_) => {
      _t.value = _ || "";
    });
    let kt = null, Ot = null, Ui = 0;
    qe(_t, (_) => {
      window.clearTimeout(kt), Ot?.abort(), Ot = null, ti.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Ui;
      kt = window.setTimeout(() => {
        Gg(b, f);
      }, 200);
    });
    const qt = /* @__PURE__ */ G($.year), vi = /* @__PURE__ */ G(!1), Aa = /* @__PURE__ */ G(null), Yi = H(() => Aa.value || []);
    qe(() => $.year, (_) => {
      qt.value = _ || "";
    });
    let Ea = null, Ai = null, Zi = 0;
    qe(qt, (_) => {
      window.clearTimeout(Ea), Ai?.abort(), Ai = null, Aa.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Zi;
      Ea = window.setTimeout(() => {
        Wg(b, f);
      }, 200);
    });
    const Xi = Object.fromEntries(Object.keys($).map((_) => [_, _ === "sort" ? "title" : _ === "view" ? "compact" : ""])), Lr = window.location.pathname.indexOf(MM), dn = Lr >= 0 ? window.location.pathname.slice(0, Lr) : "", Kn = {
      catalogue: `${dn}/apps/library/`,
      review: `${dn}/apps/library/?scannerConflicts=1`,
      settings: `${dn}/settings/user/library`
    };
    function Wn(_, b) {
      if (typeof _ != "string" || _ === "") return b;
      try {
        const f = dn ? `${dn}/` : "/";
        let M = _;
        for (let de = 0; de < 5; de += 1) {
          if (!M.startsWith("/") || M.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(M)) return b;
          const Ee = new URL(M, window.location.origin);
          if (Ee.origin !== window.location.origin || !Ee.pathname.startsWith(f)) return b;
          const ze = M.split(/[?#]/, 1)[0];
          for (const _i of ze.split("/")) {
            let Ji = _i;
            for (let br = 0; br < 5; br += 1) {
              const Qi = decodeURIComponent(Ji);
              if (/[\\/\u0000-\u001f\u007f]/.test(Qi) || Qi === "." || Qi === "..") return b;
              if (Qi === Ji) break;
              if (Ji = Qi, br === 4) return b;
            }
          }
          const Qe = decodeURI(M);
          if (Qe === M) return _;
          M = Qe;
        }
        return b;
      } catch {
        return b;
      }
    }
    const Yn = H(() => Wn(m.settingsUrl, Kn.settings)), dt = H(() => Wn(m.catalogueRootUrl, Kn.catalogue)), rr = H(() => Wn(m.homeUrl, `${Kn.catalogue}?home=1`)), bi = H(() => Wn(m.shelvesUrl, `${Kn.catalogue}?shelves=1`)), fn = H(() => Wn(m.reviewUrl || m.scannerConflictReviewUrl, Kn.review)), Zn = H(() => Object.entries(r).some(([_, b]) => $[_] === b)), lr = H(() => a.reduce((_, b) => _ + Number(Vu.value[b.countKey] || 0), 0)), $a = H(() => m.surface === "home"), Xn = H(() => m.surface === "shelves"), hn = H(() => m.surface === "duplicates"), Jn = H(() => m.surface === "inference"), pn = H(() => m.surface === "authors"), xa = H(() => m.surface === "lists"), Ei = H(() => `${dt.value}?lists=1`), Su = Number(new URLSearchParams(window.location.search).get("addToList")) || null, ds = /* @__PURE__ */ G([]), nt = /* @__PURE__ */ G("");
    async function vn() {
      try {
        ds.value = (await ba()).lists;
      } catch {
      }
    }
    xt(vn);
    const Cu = H(() => !pn.value && !hn.value && !Jn.value && !xa.value && !$a.value && !Xn.value && !Zn.value && !$.starred && $.recentlyOpened !== "1" && !$.shelf), fs = H(() => [
      { key: "home", name: t("library", "Home"), href: rr.value, active: $a.value },
      { key: "all", name: t("library", "All publications"), href: dt.value, active: Cu.value },
      { key: "starred", name: t("library", "Starred"), href: `${dt.value}?starred=1`, active: $.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${dt.value}?recentlyOpened=1&sort=lastOpened`, active: $.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: bi.value, active: Xn.value || !!$.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${dt.value}#library-collections`, active: !1 }
    ]), Pr = H(() => Vr.value.map((_) => ({
      key: `collection-${_.id}`,
      rawName: _.name,
      id: _.id,
      name: _.countPending ? _.name : `${_.name} (${Ut("library", "%n item", "%n items", Number(_.count || 0))})`,
      href: cm(_.filters),
      active: dm(_.filters)
    }))), gt = H(() => m.requestToken || ""), sr = H(() => !!m.duplicateSuggestions), Tu = H(() => JSON.stringify(T.value.map((_) => [_.id, _.title, _.creators, _.publicationDate]))), Au = H(() => JSON.parse(Tu.value).map((_) => Number(_[0]))), { results: bn, status: Eu } = hg(Au, sr, gt);
    function ii(_, b) {
      const f = String(_?.recordOpenUrl || "");
      if (!f || !gt.value) return;
      const M = new URLSearchParams({ requesttoken: gt.value });
      try {
        if (navigator.sendBeacon) {
          const de = new Blob([M.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(f, de);
          return;
        }
      } catch {
      }
      fetch(f, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: gt.value },
        body: M,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const or = H(() => m.catalogueEndpointUrl || "/apps/library/catalogue"), Dr = H(() => m.shelfChildrenUrl || "/apps/library/shelves/children"), Qn = H(() => m.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), hs = H(() => m.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Fr = H(() => m.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Mr = H(() => m.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ur = H(() => m.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), $u = H(() => m.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), ps = H(() => m.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), xu = H(() => m.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ou = H(() => m.itemSidebarUrlTemplate || `${dn}/apps/library/items/__ITEM_ID__/sidebar`), Nu = H(() => m.batchTagUrl || "/apps/library/bulk/tags"), Ru = H(() => m.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), vs = H(() => m.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Iu = H(() => m.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), bs = H(() => m.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ur = H(() => m.scannerConflictReviewUrl || "?scannerConflicts=1");
    m.importHealthSummary, m.importHealthSummary && Object.keys(m.importHealthSummary).length > 0;
    const ea = H(() => m.discoveryPage === "publication"), Oa = H(() => m.discoveryPage === "year"), cr = H(() => m.discoveryPage === "creator"), ta = H(() => ea.value || Oa.value || cr.value), zi = H(() => m.discoveryTitle || $.publication || $.year || $.creator || ""), Na = H(() => ta.value ? zi.value : t("library", "Library")), ci = H(() => cr.value ? t("library", "Creator") : Oa.value ? t("library", "Publication year") : t("library", "Publication / series")), gs = H(() => Number(m.rootCount || 0)), dr = H(() => Number(m.enabledRootCount || 0)), zr = H(() => gs.value === 0), fr = H(() => gs.value > 0 && dr.value === 0), gn = H(() => mt.value.length > 0), gi = /* @__PURE__ */ G(!1), jr = /* @__PURE__ */ G(null), ms = /* @__PURE__ */ G(null), Br = {
      q: "Search",
      sort: "Sort",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
      publication: "Series / periodical",
      year: "Publication year",
      language: "Language",
      creator: "Creator",
      format: "Format",
      tag: "Nextcloud tag",
      shelf: "Shelf",
      folder: "Folder",
      status: "Scan status",
      workflowStatus: "Workflow status",
      subject: "Subject",
      classification: "Classification",
      scannerConflicts: "Suggested updates",
      starred: "Starred",
      recentlyOpened: "Recently opened",
      needsMetadata: "Needs details",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Filename-derived metadata",
      unreviewedImports: "Unreviewed imports"
    }, Lu = {
      scannerConflicts: "1",
      starred: "1",
      recentlyOpened: "1",
      needsMetadata: "1",
      noCreator: "1",
      noPublication: "1",
      noDate: "1",
      titleFromFilename: "1",
      noDescription: "1",
      unsupportedContainer: "1",
      unreviewedImports: "1",
      weakMetadata: "filename",
      coverReview: "placeholder"
    }, Pu = {
      sort: {
        title: "Title",
        recent: "Date added",
        publicationDate: "Publication date",
        publication: "Series",
        lastOpened: "Recently opened",
        format: "Format"
      },
      view: {
        compact: "Compact",
        list: "List"
      },
      status: {
        indexed: "Indexed",
        metadata_error: "Metadata error",
        missing: "Missing"
      },
      workflowStatus: {
        "to-read": "To read",
        reading: "Reading",
        finished: "Finished",
        reference: "Reference",
        paused: "Paused",
        abandoned: "Abandoned",
        "needs-action": "Needs action"
      }
    }, Hr = H(() => {
      if (typeof window > "u") return "";
      const _ = new URLSearchParams(window.location.search);
      if (_.get("batchMetadataApplyResult") !== "1") return "";
      const b = _.get("batchMetadataField") || "field", f = _.get("batchMetadataApplied") || "0", M = _.get("batchMetadataUnchanged") || "0", de = _.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: M, skipped: de });
    }), hr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ia = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Vr = H(() => m.savedCollections || []), fe = H(() => m.savedCollectionSaveUrl || "/apps/library/collections"), A = H(() => m.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), U = v, re = H(() => U.includes($.view) ? $.view : "compact"), oe = H(() => ({
      "library-cover-gallery--compact": re.value === "compact"
    }));
    function Ne(_) {
      const b = String(_ || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function Fe(_, b) {
      const f = String(b || "").trim();
      if (f === "" || Lu[_] === f) return "";
      if (_ === "format") return f.toUpperCase();
      if (_ === "folder") return Ne(f);
      const M = Pu[_]?.[f];
      return M ? t("library", M) : f;
    }
    function Ge(_, b) {
      const f = String($[_] || "").trim(), M = Fe(_, f), de = t("library", b);
      return {
        key: _,
        label: de,
        value: f,
        displayValue: M,
        title: M ? `${de}: ${f}` : de
      };
    }
    const mt = H(() => Object.entries(Br).map(([_, b]) => Ge(_, b)).filter((_) => _.value !== "" && !(_.key === "sort" && _.value === "title") && !(_.key === "view" && _.value === "compact"))), Ct = H(() => mt.value.filter((_) => !["sort", "view"].includes(_.key))), Tt = H(() => mt.value.length), Pt = H(() => {
      const _ = new URLSearchParams();
      for (const f of Ct.value) _.set(f.key, f.value);
      const b = _.toString();
      return `${dt.value}${b ? `?${b}` : ""}`;
    }), $i = H(() => Ct.value[0] || null), Gt = H(() => K.value.trim() !== String($.q || "").trim()), ys = H(() => String($.q || "").trim() !== "" || Gt.value);
    function mi(_) {
      return ({
        q: K,
        publisher: Z,
        publication: q,
        creator: Me,
        subject: J,
        year: qt,
        folder: ut,
        classification: Te,
        tag: _t
      }[_]?.value ?? "").trim() !== String($[_] || "").trim();
    }
    function ji(_) {
      return mi(_) ? _ === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function mn(_) {
      return { "library-filter-apply--pending": mi(_) };
    }
    const _g = H(() => Tt.value > 0 ? t("library", "Filters ({count})", { count: Tt.value }) : t("library", "Filters")), wg = H(() => Tt.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: Tt.value }) : t("library", "Open filters panel")), kg = H(() => Ut("library", "Show %n item", "Show %n items", Number(Q.value.total || 0)));
    function Sg(_) {
      gi.value = _.currentTarget?.open === !0, gi.value && Rt(() => {
        jr.value?.focus?.();
      });
    }
    const Cg = /* @__PURE__ */ new Set([
      "q",
      "sort",
      "view",
      "type",
      "publisher",
      "publication",
      "year",
      "creator",
      "tag",
      "format",
      "shelf",
      "folder",
      "status",
      "workflowStatus",
      "subject",
      "classification",
      "scannerConflicts"
    ]), tf = H(() => Object.entries(y($)).filter(([_, b]) => !Cg.has(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Tg = H(() => Object.entries($).filter(([_, b]) => !["q", "sort", "starred"].includes(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), _s = H(() => Object.entries(y($)).filter(([_, b]) => String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Ag = H(() => _s.value.filter(({ key: _, value: b }) => _ !== "q" && !(_ === "sort" && b === "title"))), ws = H(() => m.homeRows || { continueReading: [], recentlyAdded: [] }), nf = H(() => m.homeShelves || []), af = H(() => m.shelfTree || []), Du = H(() => m.needsAttention || { count: 0, url: `${dt.value}?needsMetadata=1` }), ni = /* @__PURE__ */ G([]), ks = H(() => new Set(ni.value));
    function rf(_, b) {
      const f = new Set(ni.value);
      b ? f.add(Number(_)) : f.delete(Number(_)), ni.value = [...f];
    }
    function Eg(_) {
      ni.value = _.currentTarget.checked ? T.value.map((b) => Number(b.id)) : [];
    }
    function $g() {
      const _ = new Set(T.value.map((b) => Number(b.id)));
      ni.value = ni.value.filter((b) => _.has(b));
    }
    function xg(_) {
      const b = _.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ni.value) {
          const M = document.createElement("input");
          M.type = "hidden", M.name = "itemIds[]", M.value = String(f), M.dataset.librarySelectedId = "1", b.appendChild(M);
        }
      }
    }
    const ke = /* @__PURE__ */ G(null), Ra = /* @__PURE__ */ G(null), ai = /* @__PURE__ */ Nt({ loading: !1, error: "", missing: !1 }), Ia = /* @__PURE__ */ G("overview"), Bi = /* @__PURE__ */ Nt({ saving: !1, saved: !1, error: "" }), yt = /* @__PURE__ */ Nt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), lf = /* @__PURE__ */ G(null), La = /* @__PURE__ */ G(null), Pa = /* @__PURE__ */ G(!1);
    let Fu = null, yn = null, Ss = null, Mu = !1, qr = null, Uu = 0;
    const na = H(() => Ra.value !== null), Gr = H(() => ke.value ? T.value.findIndex((_) => _.id === ke.value.id) : -1), Cs = H(() => Gr.value > 0 ? T.value[Gr.value - 1] : null), Ts = H(() => Gr.value >= 0 && Gr.value < T.value.length - 1 ? T.value[Gr.value + 1] : null), sf = H(() => Pg(ke.value?.description || "")), Da = H(() => Rg(ke.value?.publicationDate || "")), of = H(() => Ig(ke.value?.language || "")), Og = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Ng = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Kr(_) {
      const b = String(_ ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Rg(_) {
      const f = Kr(_).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Ig(_) {
      return String(_ ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function uf(_, b) {
      const f = new URLSearchParams();
      for (const [M, de] of Object.entries($)) {
        const Ee = String(de || "").trim();
        Ee !== "" && !(M === "sort" && Ee === "title") && !(M === "view" && Ee === "compact") && f.set(M, Ee);
      }
      return f.set(_, String(b || "").trim()), f.delete("page"), c(f);
    }
    function As(_, b) {
      const M = uf(_, b).toString();
      return `${dt.value}${M ? `?${M}` : ""}`;
    }
    function Es(_, b, f) {
      const M = String(f || "").trim();
      if (M === "") return;
      _?.preventDefault?.();
      const de = uf(b, M);
      Yr({ historyMode: "none" }), Kt(null, {
        params: de,
        generation: ++ri,
        historyMode: "push"
      });
    }
    function Lg(_) {
      return String(_ ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Pg(_) {
      let b = String(_ ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const M = Lg(b);
        if (M === b) break;
        b = M;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function cf(_) {
      return { ..._, publicationDate: Kr(_?.publicationDate) };
    }
    function df(_) {
      for (const b of ["series", "seriesNumber", "genre"]) yt[b] = String(_?.[b] || "");
      yt.title = String(_?.title || ""), yt.publicationDate = Kr(_?.publicationDate), yt.identifiers = Array.isArray(_?.identifiers) ? _.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(Bi, { saving: !1, saved: !1, error: "" });
    }
    function Dg() {
      yt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Fg(_) {
      yt.identifiers.splice(_, 1);
    }
    async function Mg() {
      const _ = ke.value;
      if (!_?.updateUrl || Bi.saving) return;
      Object.assign(Bi, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", gt.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const M = _[f];
        b.set(f, Array.isArray(M) ? M.join(", ") : String(M ?? ""));
      }
      for (const f of ["series", "seriesNumber", "genre"]) b.set(f, yt[f]);
      b.set("title", yt.title), b.set("publicationDate", Kr(yt.publicationDate)), yt.identifiers.forEach((f, M) => {
        b.set(`identifiers[${M}][scheme]`, f.scheme), b.set(`identifiers[${M}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(_.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), M = await f.json().catch(() => ({}));
        if (!f.ok || M.saved !== !0) throw new Error(M.error || t("library", "Metadata could not be saved."));
        for (const Ee of ["series", "seriesNumber", "genre"]) _[Ee] = yt[Ee].trim();
        _.title = yt.title.trim(), _.publicationDate = Kr(yt.publicationDate), _.identifiers = yt.identifiers.filter((Ee) => Ee.scheme.trim() || Ee.displayValue.trim()).map((Ee) => ({ ...Ee }));
        const de = T.value.find((Ee) => Number(Ee.id) === Number(_.id));
        de && (de.title = _.title, de.publicationDate = _.publicationDate), Bi.saved = !0;
      } catch (f) {
        Bi.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        Bi.saving = !1;
      }
    }
    const aa = H(() => {
      const _ = s("scannerConflicts", $.scannerConflicts) || s("weakMetadata", $.weakMetadata), b = _ ? T.value.find((f) => $s(f).length > 0) : null;
      return {
        enabled: _,
        item: b,
        fields: b ? $s(b) : [],
        reviewNextUrl: ur.value,
        skipUrl: Q.value.nextUrl || ur.value
      };
    }), Ug = H(() => a.map((_) => ({
      ..._,
      label: t("library", _.label),
      href: `${dt.value}?${encodeURIComponent(_.key)}=${encodeURIComponent(_.value)}`,
      active: String($[_.key] || "") === _.value
    })));
    function zu(_) {
      return Array.isArray(_) ? JSON.stringify(_) : _ == null ? "" : String(_);
    }
    function $s(_) {
      const b = _.fieldValues || {};
      let f = [];
      try {
        f = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(f) || (f = []);
      const M = _.fieldSources || {};
      return Og.filter((de) => Object.prototype.hasOwnProperty.call(b, de)).map((de) => {
        const Ee = zu(_[de]), ze = zu(b[de]), Qe = zu(M[de] || _.metadataSource || "scanner"), _i = Qe.includes("filename") || Qe.includes("path") ? ze : "", Ji = Qe.includes("sidecar") ? ze : "";
        return { field: de, currentValue: Ee, scannerCandidate: ze, pathTemplateCandidate: _i, sidecarValue: Ji, sourceProvenance: Qe, rejected: f.includes(de), differs: Ee !== ze };
      }).filter((de) => de.differs);
    }
    let Fa = 0, Ma = null;
    function ff() {
      const _ = new URLSearchParams(window.location.search).getAll("item");
      if (_.length !== 1 || !/^[1-9][0-9]*$/.test(_[0])) return null;
      const b = Number(_[0]);
      return Number.isSafeInteger(b) && b <= UM ? b : null;
    }
    function hf(_, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), _ !== null && f.searchParams.set("item", String(_)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Wr(_, { historyMode: b = "push", seed: f = null } = {}) {
      Ma?.abort();
      const M = ++Fa, de = new AbortController();
      Ma = de, Ra.value = _, Ia.value = "overview", ke.value = f && Number(f.id) === _ ? cf(f) : null, ke.value && df(ke.value), Object.assign(ai, { loading: !0, error: "", missing: !1 }), b !== "none" && hf(_, b);
      try {
        const Ee = Ou.value.replace("__ITEM_ID__", encodeURIComponent(String(_))), ze = await fetch(Ee, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: de.signal });
        if (M !== Fa) return;
        if (!ze.ok) {
          ke.value = null, ai.missing = ze.status === 404, ai.error = ze.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Qe = await ze.json();
        if (M !== Fa) return;
        if (typeof Qe?.item?.id != "number" || !Number.isSafeInteger(Qe.item.id) || Qe.item.id !== _) {
          ke.value = null, ai.missing = !1, ai.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        ke.value = cf(Qe.item), df(ke.value), await Rt();
      } catch (Ee) {
        M === Fa && Ee?.name !== "AbortError" && (ke.value = null, ai.missing = !1, ai.error = t("library", "Could not load publication details. Try again."));
      } finally {
        M === Fa && (ai.loading = !1, Ma = null);
      }
    }
    function Hi(_, b) {
      ju(), Fu = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Wr(Number(_.id), { seed: _ });
    }
    function Yr({ historyMode: _ = "push", restoreFocus: b = !0 } = {}) {
      Ss = b ? Fu : null, Fu = null, Ma?.abort(), Ma = null, Fa += 1, Ra.value = null, ke.value = null, Ia.value = "overview", Object.assign(ai, { loading: !1, error: "", missing: !1 }), _ !== "none" && hf(null, _);
    }
    function pf() {
      Pa.value ? (La.value?.$refs?.sidebar || La.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : lf.value?.focus();
    }
    function zg() {
      const _ = Ss;
      if (Ss = null, ju(), Mu || !_?.isConnected) return;
      const b = Uu;
      qr = window.requestAnimationFrame(() => {
        qr = null, !(b !== Uu || Mu || na.value || !_.isConnected) && _.focus();
      });
    }
    function ju() {
      Uu += 1, qr !== null && (window.cancelAnimationFrame(qr), qr = null);
    }
    function Zr(_ = yn) {
      Pa.value = !!_?.matches, na.value && Rt(pf);
    }
    function xs(_) {
      _ && Wr(Number(_.id), { seed: _ });
    }
    const Xr = /* @__PURE__ */ G(null);
    let ri = 0, pr = null, vr = null, Jr = null, vf = !1, Qr = null;
    const Dt = /* @__PURE__ */ Nt({ loading: !1, error: "", completed: !1 });
    function jg(_) {
      const b = c(new FormData(_));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Ua(_, b, f) {
      const M = new URLSearchParams();
      for (const [ze, Qe] of Object.entries($)) {
        const _i = String(Qe || "").trim();
        ze !== _ && _i !== "" && !(ze === "sort" && _i === "title") && !(ze === "view" && _i === "compact") && M.set(ze, _i);
      }
      M.set(`${_}Search`, b);
      const de = new AbortController();
      _ === "creator" ? me = de : _ === "publisher" ? Le = de : _ === "subject" ? $e = de : _ === "classification" ? it = de : _ === "tag" ? Ot = de : _ === "folder" ? V = de : Ai = de;
      const Ee = _ === "creator" ? hs.value : _ === "publisher" ? Fr.value : _ === "subject" ? Mr.value : _ === "classification" ? Ur.value : _ === "tag" ? $u.value : _ === "folder" ? ps.value : xu.value;
      try {
        const ze = await fetch(`${Ee}?${M}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: de.signal });
        if (!ze.ok) throw new Error(`${_} suggestions request failed: ${ze.status}`);
        const Qe = await ze.json(), _i = _ === "creator" ? De : _ === "publisher" ? Oe : _ === "subject" ? _e : _ === "classification" ? ct : _ === "tag" ? Ui : _ === "folder" ? j : Zi, Ji = _ === "creator" ? Me.value : _ === "publisher" ? Z.value : _ === "subject" ? J.value : _ === "classification" ? Te.value : _ === "tag" ? _t.value : _ === "folder" ? ut.value : qt.value;
        f === _i && Ji.trim() === b && (_ === "creator" ? ht.value = Array.isArray(Qe.creators) ? Qe.creators : [] : _ === "publisher" ? X.value = Array.isArray(Qe.publishers) ? Qe.publishers : [] : _ === "subject" ? le.value = Array.isArray(Qe.subjects) ? Qe.subjects : [] : _ === "classification" ? He.value = Array.isArray(Qe.classifications) ? Qe.classifications : [] : _ === "tag" ? ti.value = Array.isArray(Qe.tags) ? Qe.tags : [] : _ === "folder" ? S.value = Array.isArray(Qe.folders) ? Qe.folders : [] : Aa.value = Array.isArray(Qe.years) ? Qe.years : []);
      } catch (ze) {
        ze?.name !== "AbortError" && (_ === "creator" && f === De && (ht.value = null), _ === "publisher" && f === Oe && (X.value = null), _ === "subject" && f === _e && (le.value = null), _ === "classification" && f === ct && (He.value = null), _ === "tag" && f === Ui && (ti.value = null), _ === "folder" && f === j && (S.value = null), _ === "year" && f === Zi && (Aa.value = null));
      }
    }
    function Bg(_, b) {
      return Ua("creator", _, b);
    }
    function Hg(_, b) {
      return Ua("publisher", _, b);
    }
    function Vg(_, b) {
      return Ua("subject", _, b);
    }
    function qg(_, b) {
      return Ua("classification", _, b);
    }
    function Gg(_, b) {
      return Ua("tag", _, b);
    }
    function Kg(_, b) {
      return Ua("folder", _, b);
    }
    function Wg(_, b) {
      return Ua("year", _, b);
    }
    async function Yg(_, b) {
      const f = new URLSearchParams();
      for (const [de, Ee] of Object.entries($)) {
        const ze = String(Ee || "").trim();
        de !== "publication" && ze !== "" && !(de === "sort" && ze === "title") && !(de === "view" && ze === "compact") && f.set(de, ze);
      }
      f.set("publicationSearch", _);
      const M = new AbortController();
      x = M;
      try {
        const de = await fetch(`${Qn.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: M.signal
        });
        if (!de.ok) throw new Error(`Publication suggestions request failed: ${de.status}`);
        const Ee = await de.json();
        b === P && q.value.trim() === _ && (ne.value = Array.isArray(Ee.publications) ? Ee.publications : []);
      } catch (de) {
        de?.name !== "AbortError" && b === P && (ne.value = null);
      } finally {
        b === P && (x = null);
      }
    }
    function Zg(_) {
      k.splice(0, k.length, ...(_.items || []).map((f) => ({ ...f }))), $g();
      const b = new Set(_.facetsDeferred ? [
        "shelves",
        "formats",
        "publicationTypes",
        "publishers",
        "publications",
        "publicationSummaries",
        "publicationIssueContext",
        "publicationYears",
        "publicationYearLandingUrls",
        "creators",
        "creatorLandingUrls",
        "scanStatuses",
        "workflowStatuses",
        "subjects",
        "classifications",
        "smartViewCounts",
        "smartViewCountsPending",
        "savedCollections"
      ] : []);
      for (const f of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "classificationSuggestionsUrl", "tagSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !b.has(f) && Object.prototype.hasOwnProperty.call(_, f) && (m[f] = _[f]);
      Object.assign($, Xi, _.activeFilters || {}), $.view = g($.view);
    }
    async function Xg() {
      if (m.surface !== "index") return;
      const _ = ri, b = JSON.stringify({ ...$ }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [de, Ee] of Object.entries($)) {
        const ze = String(Ee || "").trim();
        ze !== "" && !(de === "sort" && ze === "title") && !(de === "view" && ze === "compact") && f.set(de, ze);
      }
      const M = new AbortController();
      vr = M;
      try {
        const de = await fetch(`${or.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: M.signal
        });
        if (!de.ok) return;
        const Ee = await de.json();
        if (_ !== ri || b !== JSON.stringify({ ...$ })) return;
        for (const ze of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ee, ze) && (m[ze] = Ee[ze]);
      } catch (de) {
        if (de?.name !== "AbortError") return;
      } finally {
        vr === M && (vr = null), M.signal.aborted || bf();
      }
    }
    async function bf() {
      if (!Zn.value || vf || Jr) return;
      const _ = new AbortController();
      Jr = _;
      try {
        const b = await fetch(`${or.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: _.signal });
        if (!b.ok || _.signal.aborted) return;
        const f = await b.json();
        f.smartViewCounts && (m.smartViewCounts = f.smartViewCounts), f.smartViewCountsPending && (m.smartViewCountsPending = f.smartViewCountsPending), vf = !0;
      } catch {
      } finally {
        Jr === _ && (Jr = null);
      }
    }
    function Jg() {
      vr?.abort(), vr = null;
    }
    async function Kt(_, b = null) {
      const f = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!f && !b?.params) return;
      const M = c(b?.params ?? jg(f));
      if ($a.value || Xn.value) {
        el(M, dt.value);
        return;
      }
      const de = M.toString(), Ee = de ? `?${de}` : "", ze = b?.generation ?? ++ri, Qe = d(M), _i = b?.historyMode ?? (Qe ? "push" : "replace"), Ji = b?.historyTraversal === !0;
      if (ze !== ri) return;
      Jg(), b === null && pr?.abort();
      const br = new AbortController();
      pr = br, Dt.loading = !0, Dt.error = "", Dt.completed = !1;
      try {
        const Qi = await fetch(or.value + Ee, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: br.signal
        });
        if (ze !== ri) return;
        if (!Qi.ok) {
          Ji ? el(M) : Qe ? Dt.error = t("library", "Could not load this review queue. Try again.") : el(M);
          return;
        }
        const mm = await Qi.json();
        if (ze !== ri) return;
        Zg(mm), bf(), Dt.completed = !0, _i !== "none" && (history[_i === "push" ? "pushState" : "replaceState"]({}, "", de ? `?${de}` : window.location.pathname), na.value && Yr({ historyMode: "none" }));
      } catch (Qi) {
        ze === ri && Qi?.name !== "AbortError" && (Ji ? el(M) : Qe ? Dt.error = t("library", "Could not load this review queue. Try again.") : el(M));
      } finally {
        ze === ri && (pr = null, Dt.loading = !1);
      }
    }
    function gf() {
      pr?.abort();
      const _ = new URLSearchParams(window.location.search), b = ff();
      _.has("item") && b === null && (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)), b === null ? Yr({ historyMode: "none" }) : Wr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), _.delete("item"), Kt(null, {
        params: c(_),
        generation: ++ri,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function el(_, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [M, de] of _.entries()) {
        const Ee = document.createElement("input");
        Ee.type = "hidden", Ee.name = M, Ee.value = de, f.appendChild(Ee);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function yi(_, b = null, f = null) {
      if (b === null) {
        Kt(_);
        return;
      }
      Kt({ currentTarget: _ }, { params: b, generation: f });
    }
    async function Qg(_, b = q.value) {
      $.publication = String(b || "").trim(), q.value = $.publication, Y.value = !1, await Rt(), Kt({ currentTarget: _ });
    }
    function mf(_, b) {
      Qg(b.currentTarget.form, _);
    }
    async function em(_) {
      $.q = String(K.value || "").trim(), $.publication = String(q.value || "").trim(), $.publisher = String(Z.value || "").trim(), $.creator = String(Me.value || "").trim(), $.subject = String(J.value || "").trim(), $.folder = String(ut.value || "").trim(), $.year = String(qt.value || "").trim(), Y.value = !1, ae.value = !1, Xe.value = !1, te.value = !1, ee.value = !1, vi.value = !1, await Rt(), Kt({ currentTarget: _ });
    }
    async function ra(_, b, f) {
      $[b] = String(f || "").trim(), b === "creator" ? (Me.value = $.creator, Xe.value = !1) : b === "publisher" ? (Z.value = $.publisher, ae.value = !1) : b === "subject" ? (J.value = $.subject, te.value = !1) : b === "folder" ? (ut.value = $.folder, ee.value = !1) : b === "classification" ? (Te.value = $.classification, xe.value = !1) : b === "tag" ? (_t.value = $.tag, bt.value = !1) : (qt.value = $.year, vi.value = !1), _n[b] = -1, await Rt(), Kt({ currentTarget: _ });
    }
    function yf(_) {
      em(_.currentTarget);
    }
    function _f(_, b) {
      ra(b.currentTarget.form, "creator", _);
    }
    function wf(_, b) {
      ra(b.currentTarget.form, "publisher", _);
    }
    function kf(_, b) {
      ra(b.currentTarget.form, "classification", _);
    }
    function Sf(_, b) {
      ra(b.currentTarget.form, "tag", _);
    }
    function Cf(_, b) {
      ra(b.currentTarget.form, "folder", _);
    }
    function Tf(_, b = J.value) {
      window.clearTimeout(se), $e?.abort(), $e = null, ra(_, "subject", b);
    }
    function tm(_) {
      Tf(_.currentTarget.form);
    }
    function Af(_, b) {
      Tf(b.currentTarget.form, _);
    }
    function Ef(_, b) {
      ra(b.currentTarget.form, "year", _);
    }
    const _n = /* @__PURE__ */ Nt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function im(_) {
      return ve.value;
    }
    function Bu(_, b, f) {
      return `library-${_}-${b}-suggestion-${f}`;
    }
    function $f(_, b) {
      const f = _n[b];
      return f >= 0 ? Bu(_, b, f) : void 0;
    }
    function Hu(_, b) {
      ae.value = b, b || (_n[_] = -1);
    }
    function xf(_) {
      _n[_] = -1, Hu(_, !0);
    }
    function nm(_, b, f) {
      ra(f, _, b);
    }
    function Of(_, b) {
      const f = im();
      if (_.key === "Escape") {
        Hu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(_.key) || f.length === 0) return;
      if (_.key === "Enter") {
        const Ee = _n[b];
        if (Ee < 0) return;
        _.preventDefault(), nm(b, f[Ee], _.currentTarget.form);
        return;
      }
      _.preventDefault(), Hu(b, !0);
      const M = _n[b], de = _.key === "ArrowDown" ? 1 : -1;
      _n[b] = M < 0 ? de > 0 ? 0 : f.length - 1 : (M + de + f.length) % f.length;
    }
    function Nf(_) {
      const b = new URLSearchParams();
      for (const [f, M] of Object.entries($)) {
        const de = String(M || "").trim();
        de !== "" && f !== _ && !(f === "sort" && de === "title") && !(f === "view" && de === "compact") && b.set(f, de);
      }
      return b;
    }
    function tl(_) {
      const b = Nf(_).toString();
      return `${dt.value}${b ? `?${b}` : ""}`;
    }
    function il(_) {
      const b = Nf(_);
      $[_] = _ === "sort" ? "title" : _ === "view" ? "compact" : "", Kt(null, {
        params: b,
        generation: ++ri
      });
    }
    function Rf() {
      const _ = new URLSearchParams();
      return $.sort && $.sort !== "title" && _.set("sort", $.sort), $.view && $.view !== "compact" && _.set("view", $.view), _;
    }
    function Os() {
      const _ = Rf().toString();
      return `${dt.value}${_ ? `?${_}` : ""}`;
    }
    function Ns() {
      const _ = Rf();
      for (const b of Object.keys($))
        ["sort", "view"].includes(b) || ($[b] = Xi[b]);
      Kt(null, {
        params: _,
        generation: ++ri
      }), !$a.value && !Xn.value && Rt(() => {
        ms.value?.focus?.();
      });
    }
    function am(_) {
      const b = new URL(_.href, window.location.origin).searchParams;
      Kt(null, {
        params: b,
        generation: ++ri
      });
    }
    function rm() {
      return tl("q");
    }
    const Vu = H(() => m.smartViewCounts || {}), lm = H(() => new Set(m.smartViewCountsPending || []));
    function sm(_) {
      return lm.value.has(_) || !Object.prototype.hasOwnProperty.call(Vu.value, _) ? "—" : Number(Vu.value[_] || 0);
    }
    const If = H(() => {
      const _ = {};
      for (const [b, f] of Object.entries($)) {
        const M = String(f || "").trim();
        M !== "" && !(b === "sort" && M === "title") && (_[b] = M);
      }
      return _;
    }), om = H(() => JSON.stringify(If.value)), qu = H(() => Object.keys(If.value).length > 0);
    function Lf(_) {
      if (!U.includes(_)) return;
      $.view = _;
      const b = new URLSearchParams();
      for (const [f, M] of Object.entries(y($))) {
        const de = String(M || "").trim();
        de !== "" && !(f === "sort" && de === "title") && !(f === "view" && de === "compact") && b.set(f, de);
      }
      b.delete("page"), Kt(null, {
        params: b,
        generation: ++ri
      });
    }
    function um(_) {
      const b = c(window.location.search);
      for (const M of Object.keys(Br))
        b.delete(M);
      b.delete("page");
      for (const [M, de] of Object.entries(_)) {
        const Ee = M === "view" ? g(de) : String(de || "").trim();
        Ee !== "" && !(M === "view" && Ee === "compact") && b.set(M, Ee);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function cm(_) {
      return um(_ || {});
    }
    function dm(_) {
      const f = Object.entries(_ && typeof _ == "object" ? _ : {}).filter(([, M]) => String(M ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([M, de]) => String($[M] ?? "") === String(de ?? ""));
    }
    function fm(_) {
      return A.value.replace("__COLLECTION_ID__", encodeURIComponent(String(_ || "0")));
    }
    function hm(_) {
      if (!gt.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = fm(_), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = gt.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function Rs(_) {
      return String(_ || "").toUpperCase();
    }
    function pm(_) {
      return m.creatorLandingUrls?.[_] || `/apps/library/creators/${encodeURIComponent(_)}`;
    }
    function Pf(_) {
      const b = String(_?.publication || "").trim(), f = String(_?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f;
    }
    function Df(_) {
      const b = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function vm(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || Df(_.target) || (_.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function bm(_) {
      _.key !== "Escape" || document.activeElement !== Xr.value || $.q === "" || (_.preventDefault(), K.value = "", $.q = "", await Rt(), yi({ currentTarget: Xr.value }));
    }
    function gm(_) {
      if (!na.value || _.metaKey || _.ctrlKey || _.altKey)
        return !1;
      if (_.key === "Escape")
        return _.preventDefault(), Yr(), !0;
      if (_.key === "Tab" && Pa.value) {
        if (La.value?.focusTrap) return !1;
        const b = La.value?.$refs?.sidebar || La.value?.$el || La.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ee) => !Ee.hidden && Ee.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const M = f[0], de = f[f.length - 1];
        if (_.shiftKey && (document.activeElement === M || !b.contains(document.activeElement)))
          return _.preventDefault(), de.focus(), !0;
        if (!_.shiftKey && (document.activeElement === de || !b.contains(document.activeElement)))
          return _.preventDefault(), M.focus(), !0;
      }
      return Df(_.target) ? !1 : _.key === "ArrowLeft" && Cs.value ? (_.preventDefault(), xs(Cs.value), !0) : _.key === "ArrowRight" && Ts.value ? (_.preventDefault(), xs(Ts.value), !0) : !1;
    }
    function Ff(_) {
      document.querySelector("dialog[open]") || gm(_) || (vm(_), bm(_));
    }
    xt(() => {
      if (pn.value || xa.value || Jn.value || hn.value) return;
      window.addEventListener("keydown", Ff), window.addEventListener("popstate", gf), yn = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), yn?.addEventListener ? yn.addEventListener("change", Zr) : yn?.addListener?.(Zr);
      const _ = new URLSearchParams(window.location.search), b = ff();
      _.has("item") && b === null ? (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)) : b !== null && Wr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, Xg();
      });
    }), Ti(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Ff), window.removeEventListener("popstate", gf), window.clearTimeout(z), window.clearTimeout(Re), window.clearTimeout(se), window.clearTimeout(Ea), x?.abort(), me?.abort(), $e?.abort(), Ai?.abort(), ri += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, vr?.abort(), Jr?.abort(), pr?.abort(), pr = null, Fa += 1, Ma?.abort(), Ma = null, yn?.removeEventListener ? yn.removeEventListener("change", Zr) : yn?.removeListener?.(Zr), yn = null, Ss = null;
    });
    const nl = /* @__PURE__ */ Nt({}), al = /* @__PURE__ */ Nt({});
    async function Mf(_, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !_?.starUrl || nl[_.id]) return;
      const M = !!_.starred;
      nl[_.id] = !0, al[_.id] = "", _.starred = !M;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (_.starred = M, al[_.id] = t("library", "Could not update star. Try again."));
      } catch {
        _.starred = M, al[_.id] = t("library", "Could not update star. Try again.");
      } finally {
        nl[_.id] = !1;
      }
    }
    return (_, b) => (h(), Pe(u(sT), { "app-name": "library" }, {
      default: we(() => [
        ce(u(Bw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: we(() => [
            ce(u(Rb), null, {
              default: we(() => [
                (h(!0), p(W, null, ue(fs.value, (f) => (h(), Pe(u(Tn), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (h(!0), p(W, null, ue(Pr.value, (f) => (h(), p("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  ce(u(Tn), {
                    class: "library-navigation-saved-collection",
                    active: f.active,
                    href: f.href,
                    name: f.name
                  }, null, 8, ["active", "href", "name"]),
                  l("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    style: { background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.42)", color: "#fff" },
                    "aria-label": `${u(t)("library", "Delete collection")}: ${f.rawName}`,
                    title: `${u(t)("library", "Delete collection")}: ${f.rawName}`,
                    onClick: Se((M) => hm(f.id), ["stop", "prevent"])
                  }, "✕", 8, EO)
                ]))), 128)),
                ce(u(Tn), {
                  active: pn.value,
                  href: `${dt.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                ce(u(Tn), {
                  active: xa.value,
                  href: Ei.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                ce(u(Tn), {
                  class: "library-navigation-create-list",
                  href: `${Ei.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (h(!0), p(W, null, ue(ds.value, (f) => (h(), Pe(u(Tn), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Ei.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                ce(u(Tn), {
                  active: Jn.value,
                  href: `${dt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                ce(u(Tn), {
                  active: Zn.value,
                  href: fn.value,
                  name: lr.value > 0 ? `${u(t)("library", "Review")} (${lr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                ce(u(Tn), {
                  class: "library-navigation-personal-list",
                  active: hn.value,
                  href: `${dt.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: we(() => [
            !pn.value && !xa.value && !Jn.value && !hn.value ? (h(), p("section", $O, [
              l("h2", xO, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Se(yf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: $.folder
                }, null, 8, NO),
                (h(!0), p(W, null, ue(tf.value, (f) => (h(), p("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, RO))), 128)),
                $.sort && $.sort !== "title" ? (h(), p("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: $.sort
                }, null, 8, IO)) : E("", !0),
                $.view && $.view !== "compact" ? (h(), p("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: $.view
                }, null, 8, LO)) : E("", !0),
                l("fieldset", PO, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ie(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    be(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => K.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, FO), [
                      [je, K.value]
                    ]),
                    mi("q") ? (h(), p("small", MO, o(ji("q")), 1)) : E("", !0)
                  ], 8, DO),
                  l("label", null, [
                    ie(o(u(t)("library", "Type")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => $.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => yi(f))
                    }, [
                      l("option", UO, o(u(t)("library", "All types")), 1),
                      (h(!0), p(W, null, ue(I.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, zO))), 128))
                    ], 544), [
                      [at, $.type]
                    ])
                  ]),
                  l("div", jO, [
                    l("label", BO, o(u(t)("library", "Publisher")), 1),
                    be(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": b[3] || (b[3] = (f) => Z.value = f),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publishers"),
                      title: u(t)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": $f("desktop", "publisher"),
                      "aria-expanded": ae.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => xf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => Of(f, "publisher"))
                    }, null, 40, HO), [
                      [je, Z.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: $.publisher
                    }, null, 8, VO),
                    mi("publisher") ? (h(), p("small", qO, o(ji("publisher")), 1)) : E("", !0),
                    ae.value && ve.value.length > 0 ? (h(), p("ul", GO, [
                      (h(!0), p(W, null, ue(ve.value, (f, M) => (h(), p("li", {
                        id: Bu("desktop", "publisher", M),
                        key: f,
                        role: "option",
                        "aria-selected": _n.publisher === M ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = Se(() => {
                          }, ["prevent"])),
                          onClick: (de) => wf(f, de)
                        }, o(f), 41, WO)
                      ], 8, KO))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-publisher-apply", mn("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", YO, [
                    l("label", ZO, o(u(t)("library", "Series / periodical")), 1),
                    be(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (f) => q.value = f),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Y.value && B.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (f) => Y.value = !0),
                      onKeydown: b[9] || (b[9] = ft((f) => Y.value = !1, ["escape"]))
                    }, null, 40, XO), [
                      [je, q.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: $.publication
                    }, null, 8, JO),
                    mi("publication") ? (h(), p("small", QO, o(ji("publication")), 1)) : E("", !0),
                    Y.value && B.value.length > 0 ? (h(), p("ul", eN, [
                      (h(!0), p(W, null, ue(B.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => mf(f, M)
                        }, o(f), 41, tN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-publication-apply", mn("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", iN, [
                    l("label", nN, o(u(t)("library", "Publication year")), 1),
                    be(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (f) => qt.value = f),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": vi.value && Yi.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (f) => vi.value = !0),
                      onKeydown: b[13] || (b[13] = ft((f) => vi.value = !1, ["escape"]))
                    }, null, 40, aN), [
                      [je, qt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: $.year
                    }, null, 8, rN),
                    mi("year") ? (h(), p("small", lN, o(ji("year")), 1)) : E("", !0),
                    vi.value && Yi.value.length > 0 ? (h(), p("ul", sN, [
                      (h(!0), p(W, null, ue(Yi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => Ef(f, M)
                        }, o(f), 41, oN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-year-apply", mn("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", uN, [
                    l("label", cN, o(u(t)("library", "Creator")), 1),
                    be(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": b[15] || (b[15] = (f) => Me.value = f),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search creators"),
                      title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Xe.value && ye.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Xe.value = !0),
                      onKeydown: b[17] || (b[17] = ft((f) => Xe.value = !1, ["escape"]))
                    }, null, 40, dN), [
                      [je, Me.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: $.creator
                    }, null, 8, fN),
                    mi("creator") ? (h(), p("small", hN, o(ji("creator")), 1)) : E("", !0),
                    Xe.value && ye.value.length > 0 ? (h(), p("ul", pN, [
                      (h(!0), p(W, null, ue(ye.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => _f(f, M)
                        }, o(f), 41, vN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-creator-apply", mn("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", bN, [
                    l("label", gN, o(u(t)("library", "Nextcloud tag")), 1),
                    be(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (f) => _t.value = f),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": bt.value && pi.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (f) => bt.value = !0),
                      onKeydown: b[21] || (b[21] = ft((f) => bt.value = !1, ["escape"]))
                    }, null, 40, mN), [
                      [je, _t.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: $.tag
                    }, null, 8, yN),
                    bt.value && pi.value.length > 0 ? (h(), p("ul", _N, [
                      (h(!0), p(W, null, ue(pi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => Sf(f, M)
                        }, o(f), 41, wN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-tag-apply", mn("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ie(o(u(t)("library", "Format")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => $.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => yi(f))
                    }, [
                      l("option", kN, o(u(t)("library", "All formats")), 1),
                      (h(!0), p(W, null, ue(O.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(Rs(f)), 9, SN))), 128))
                    ], 544), [
                      [at, $.format]
                    ])
                  ])
                ]),
                l("fieldset", CN, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    ie(o(u(t)("library", "Shelf")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => $.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => yi(f))
                    }, [
                      l("option", TN, o(u(t)("library", "All shelves")), 1),
                      (h(!0), p(W, null, ue(C.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, AN))), 128))
                    ], 544), [
                      [at, $.shelf]
                    ])
                  ]),
                  l("div", EN, [
                    l("label", $N, o(u(t)("library", "Folder")), 1),
                    be(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (f) => ut.value = f),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Type at least 3 path characters"),
                      title: u(t)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ee.value && N.value.length > 0 ? "true" : "false",
                      onFocus: b[28] || (b[28] = (f) => ee.value = !0),
                      onKeydown: b[29] || (b[29] = ft((f) => ee.value = !1, ["escape"]))
                    }, null, 40, xN), [
                      [je, ut.value]
                    ]),
                    ee.value && N.value.length > 0 ? (h(), p("ul", ON, [
                      (h(!0), p(W, null, ue(N.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => Cf(f, M)
                        }, o(f), 41, NN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-folder-apply", mn("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", RN, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    ie(o(u(t)("library", "Scan status")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => $.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => yi(f))
                    }, [
                      l("option", IN, o(u(t)("library", "All scan statuses")), 1),
                      (h(!0), p(W, null, ue(R.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, LN))), 128))
                    ], 544), [
                      [at, $.status]
                    ])
                  ]),
                  l("label", null, [
                    ie(o(u(t)("library", "Workflow status")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => $.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => yi(f))
                    }, [
                      l("option", PN, o(u(t)("library", "All workflow statuses")), 1),
                      (h(!0), p(W, null, ue(pe.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, DN))), 128))
                    ], 544), [
                      [at, $.workflowStatus]
                    ])
                  ]),
                  l("div", FN, [
                    l("label", MN, o(u(t)("library", "Subject")), 1),
                    be(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": b[35] || (b[35] = (f) => J.value = f),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search subjects"),
                      title: u(t)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": te.value && he.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (f) => te.value = !0),
                      onKeydown: b[37] || (b[37] = ft((f) => te.value = !1, ["escape"]))
                    }, null, 40, UN), [
                      [je, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: $.subject
                    }, null, 8, zN),
                    mi("subject") ? (h(), p("small", jN, o(ji("subject")), 1)) : E("", !0),
                    te.value && he.value.length > 0 ? (h(), p("ul", BN, [
                      (h(!0), p(W, null, ue(he.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => Af(f, M)
                        }, o(f), 41, HN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "button",
                      class: Ae(["button secondary library-subject-apply", mn("subject")]),
                      onClick: tm
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", VN, [
                    l("label", qN, o(u(t)("library", "Classification")), 1),
                    be(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": b[39] || (b[39] = (f) => Te.value = f),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": xe.value && Ye.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (f) => xe.value = !0),
                      onKeydown: b[41] || (b[41] = ft((f) => xe.value = !1, ["escape"]))
                    }, null, 40, GN), [
                      [je, Te.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: $.classification
                    }, null, 8, KN),
                    xe.value && Ye.value.length > 0 ? (h(), p("ul", WN, [
                      (h(!0), p(W, null, ue(Ye.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Se(() => {
                          }, ["prevent"])),
                          onClick: (M) => kf(f, M)
                        }, o(f), 41, YN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ae(["button secondary library-classification-apply", mn("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ie(o(u(t)("library", "Suggested updates")), 1),
                    be(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => $.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => yi(f))
                    }, [
                      l("option", ZN, o(u(t)("library", "All metadata")), 1),
                      l("option", XN, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [at, $.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", JN, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", QN, o(u(t)("library", "Apply filters")), 1)
              ], 40, OO)
            ])) : E("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Yn.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, eR)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ce(u(aw), null, {
          default: we(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: m.language || "en",
              dir: m.direction || "ltr",
              tabindex: "-1"
            }, [
              hn.value ? (h(), Pe(wx, {
                key: 0,
                "request-token": gt.value,
                "review-url": fn.value
              }, null, 8, ["request-token", "review-url"])) : Jn.value ? (h(), Pe(AO, {
                key: 1,
                "request-token": gt.value
              }, null, 8, ["request-token"])) : pn.value ? (h(), Pe(GE, {
                key: 2,
                "request-token": gt.value,
                "catalogue-url": dt.value
              }, null, 8, ["request-token", "catalogue-url"])) : xa.value ? (h(), Pe(zA, {
                key: 3,
                onChanged: vn,
                "request-token": gt.value,
                "catalogue-url": dt.value,
                "lists-url": Ei.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (h(), p(W, { key: 4 }, [
                mt.value.length > 0 ? (h(), p("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (h(!0), p(W, null, ue(mt.value, (f) => (h(), p("a", {
                    key: f.key,
                    href: tl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: Se((M) => il(f.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      ie(o(f.label), 1),
                      f.displayValue ? (h(), p(W, { key: 0 }, [
                        ie(":")
                      ], 64)) : E("", !0)
                    ]),
                    f.displayValue ? (h(), p(W, { key: 0 }, [
                      b[114] || (b[114] = ie(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, aR)
                    ], 64)) : E("", !0),
                    b[115] || (b[115] = ie()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, nR))), 128)),
                  Ct.value.length > 0 ? (h(), p("a", {
                    key: 0,
                    href: Os(),
                    class: "library-active-filter-clear-all",
                    onClick: Se(Ns, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, rR)) : E("", !0)
                ], 8, iR)) : E("", !0),
                Zn.value ? (h(), p("section", lR, [
                  l("header", sR, [
                    l("p", oR, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", uR, o(u(t)("library", "Review")), 1),
                    ce(We, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: we(() => [
                        ie(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (h(!0), p(W, null, ue(Ug.value, (f) => (h(), p("a", {
                      key: f.key,
                      class: Ae(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: Se((M) => am(f), ["prevent"])
                    }, [
                      l("span", null, o(f.label), 1),
                      l("b", null, o(sm(f.countKey)), 1)
                    ], 10, dR))), 128))
                  ], 8, cR),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Se(Kt, ["prevent"])
                  }, [
                    (h(!0), p(W, null, ue(Ag.value, (f) => (h(), p("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, hR))), 128)),
                    l("label", null, [
                      ie(o(u(t)("library", "Search within this queue")), 1),
                      be(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => $.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [je, $.q]
                      ])
                    ]),
                    l("button", pR, o(u(t)("library", "Apply")), 1)
                  ], 40, fR),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Dt.loading ? "true" : "false"
                  }, [
                    Dt.loading ? (h(), p("span", bR, o(u(t)("library", "Loading review queue…")), 1)) : E("", !0)
                  ], 8, vR),
                  Dt.error ? (h(), p("p", gR, o(Dt.error), 1)) : E("", !0),
                  aa.value.enabled ? (h(), p("section", mR, [
                    l("div", yR, [
                      l("p", _R, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, wR)
                    ]),
                    aa.value.item ? (h(), p("article", kR, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", SR, o(aa.value.item.title), 1)
                        ]),
                        l("span", CR, [
                          l("bdi", TR, o(aa.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", AR, [
                        (h(!0), p(W, null, ue(aa.value.fields, (f) => (h(), p("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", ER, o(f.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", $R, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", xR, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", OR, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", NR, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", RR, o(f.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          l("form", {
                            method: "post",
                            action: aa.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            l("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: gt.value
                            }, null, 8, LR),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, PR),
                            b[117] || (b[117] = l("input", {
                              type: "hidden",
                              name: "returnTo",
                              value: "catalogue"
                            }, null, -1)),
                            l("button", {
                              type: "submit",
                              class: "button secondary",
                              disabled: f.rejected,
                              title: f.rejected ? u(t)("library", "This source value exceeds field limits. Edit the field instead.") : void 0
                            }, o(u(t)("library", "Use suggested value")), 9, DR)
                          ], 8, IR)
                        ]))), 128))
                      ]),
                      l("footer", FR, [
                        l("a", {
                          class: "button secondary",
                          href: aa.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, MR),
                        l("a", {
                          class: "button secondary",
                          href: aa.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, UR)
                      ])
                    ])) : E("", !0)
                  ])) : E("", !0),
                  T.value.length === 0 && !Dt.loading && !Dt.error ? (h(), p("div", zR, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: dt.value
                    }, o(u(t)("library", "Back to Library")), 9, jR)
                  ])) : (h(), p("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (h(!0), p(W, null, ue(T.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: "library-review-result-card"
                    }, [
                      l("div", null, [
                        l("h3", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (M) => Hi(f, M)
                          }, [
                            l("bdi", VR, o(f.title), 1)
                          ], 8, HR)
                        ]),
                        f.creators ? (h(), p("p", qR, [
                          l("bdi", GR, o(f.displayCreators ?? f.creators), 1)
                        ])) : E("", !0),
                        f.scanError ? (h(), p("p", KR, [
                          l("bdi", WR, o(f.scanError), 1)
                        ])) : E("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (M) => Hi(f, M)
                        }, o(u(t)("library", "Details")), 9, YR),
                        l("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (M) => ii(f, M)
                        }, o(u(t)("library", "Open")), 9, ZR)
                      ])
                    ]))), 128))
                  ], 8, BR)),
                  T.value.length > 0 ? (h(), p("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, JR)) : (h(), p("span", QR, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", eI, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                    ]),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, tI)) : (h(), p("span", iI, o(u(t)("library", "Next")), 1))
                  ], 8, XR)) : E("", !0)
                ])) : $a.value ? (h(), p("main", nI, [
                  l("header", aI, [
                    l("p", rI, o(u(t)("library", "Your library")), 1),
                    l("h2", lI, o(u(t)("library", "Home")), 1)
                  ]),
                  Ct.value.length > 0 ? (h(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (h(!0), p(W, null, ue(Ct.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Se((M) => il(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ie(o(f.label), 1),
                          f.displayValue ? (h(), p(W, { key: 0 }, [
                            ie(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (h(), p(W, { key: 0 }, [
                          b[118] || (b[118] = ie(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, cI)
                        ], 64)) : E("", !0),
                        b[119] || (b[119] = ie()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, uI))), 128))
                    ], 8, oI),
                    l("p", dI, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Pt.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, fI),
                      l("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: Se(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, hI)
                    ])
                  ], 8, sI)) : E("", !0),
                  l("section", pI, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", vI, [
                          ce(We, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${dt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, bI)
                    ]),
                    ws.value.continueReading.length ? (h(), p("div", gI, [
                      (h(!0), p(W, null, ue(ws.value.continueReading, (f) => (h(), p("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (M) => Hi(f, M)
                        }, [
                          l("span", yI, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, _I)
                          ])
                        ], 8, mI),
                        l("div", wI, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (M) => Hi(f, M)
                            }, [
                              l("bdi", SI, o(f.title), 1)
                            ], 8, kI)
                          ]),
                          f.creators ? (h(), p("p", CI, [
                            l("bdi", TI, o(f.displayCreators ?? f.creators), 1)
                          ])) : E("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (M) => ii(f, M)
                          }, o(u(t)("library", "Open")), 9, AI)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", EI, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", $I, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", xI, [
                          ce(We, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${dt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, OI)
                    ]),
                    ws.value.recentlyAdded.length ? (h(), p("div", NI, [
                      (h(!0), p(W, null, ue(ws.value.recentlyAdded, (f) => (h(), p("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (M) => Hi(f, M)
                        }, [
                          l("span", II, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, LI)
                          ])
                        ], 8, RI),
                        l("div", PI, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (M) => Hi(f, M)
                            }, [
                              l("bdi", FI, o(f.title), 1)
                            ], 8, DI)
                          ]),
                          f.creators ? (h(), p("p", MI, [
                            l("bdi", UI, o(f.displayCreators ?? f.creators), 1)
                          ])) : E("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (M) => ii(f, M)
                          }, o(u(t)("library", "Open")), 9, zI)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", jI, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", BI, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", HI, [
                          ce(We, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: bi.value }, o(u(t)("library", "View all")), 9, VI)
                    ]),
                    nf.value.length ? (h(), p("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (h(!0), p(W, null, ue(nf.value, (f) => (h(), p("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        l("strong", null, [
                          l("bdi", KI, o(f.shelf), 1)
                        ]),
                        l("span", null, o(u(Ut)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, GI))), 128))
                    ], 8, qI)) : (h(), p("p", WI, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (h(), p("aside", YI, [
                    l("div", null, [
                      l("h3", ZI, o(u(t)("library", "Needs attention")), 1),
                      l("p", XI, o(u(Ut)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, JI)
                  ])) : E("", !0)
                ])) : Xn.value ? (h(), p("main", QI, [
                  l("header", eL, [
                    l("p", tL, o(u(t)("library", "Your library")), 1),
                    l("h2", iL, [
                      ce(We, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  Ct.value.length > 0 ? (h(), p("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (h(!0), p(W, null, ue(Ct.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Se((M) => il(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ie(o(f.label), 1),
                          f.displayValue ? (h(), p(W, { key: 0 }, [
                            ie(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (h(), p(W, { key: 0 }, [
                          b[121] || (b[121] = ie(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, lL)
                        ], 64)) : E("", !0),
                        b[122] || (b[122] = ie()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, rL))), 128))
                    ], 8, aL),
                    l("p", sL, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Pt.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, oL),
                      l("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: Se(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, uL)
                    ])
                  ], 8, nL)) : E("", !0),
                  af.value.length ? (h(), p("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", dL, [
                      (h(!0), p(W, null, ue(af.value, (f) => (h(), Pe(yT, {
                        key: f.id,
                        node: f,
                        "children-url": Dr.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, cL)) : (h(), p("section", fL, [
                    l("h3", null, [
                      ce(We, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", hL, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", pL, [
                      l("a", {
                        class: "button primary",
                        href: Yn.value
                      }, o(u(t)("library", "Add a Library root")), 9, vL),
                      l("a", {
                        class: "button secondary",
                        href: dt.value
                      }, o(u(t)("library", "All publications")), 9, bL)
                    ])
                  ]))
                ])) : (h(), p("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Ae(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Dt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Dt.loading ? "true" : "false"
                }, [
                  l("header", mL, [
                    ta.value ? (h(), p("p", yL, o(ci.value), 1)) : E("", !0),
                    l("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: ms,
                      tabindex: "-1"
                    }, o(Na.value), 513)
                  ]),
                  l("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: Sg
                  }, [
                    l("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": wg.value
                    }, [
                      l("span", wL, o(u(Ut)("library", "%n item", "%n items", Number(Q.value.total || 0))), 1),
                      l("strong", null, o(_g.value), 1)
                    ], 8, _L),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Se(yf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: $.folder
                      }, null, 8, SL),
                      (h(!0), p(W, null, ue(tf.value, (f) => (h(), p("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, CL))), 128)),
                      l("fieldset", TL, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", AL, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          be(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: jr,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => K.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, EL), [
                            [je, K.value]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Type")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => $.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => yi(f))
                          }, [
                            l("option", $L, o(u(t)("library", "All types")), 1),
                            (h(!0), p(W, null, ue(I.value, (f) => (h(), p("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, xL))), 128))
                          ], 544), [
                            [at, $.type]
                          ])
                        ]),
                        l("div", OL, [
                          l("label", NL, o(u(t)("library", "Publisher")), 1),
                          be(l("input", {
                            id: "library-mobile-publisher-search",
                            "onUpdate:modelValue": b[49] || (b[49] = (f) => Z.value = f),
                            type: "search",
                            name: "publisherSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publishers"),
                            title: u(t)("library", "Exact publisher matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publisher-suggestions",
                            "aria-activedescendant": $f("mobile", "publisher"),
                            "aria-expanded": ae.value && ve.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => xf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => Of(f, "publisher"))
                          }, null, 40, RL), [
                            [je, Z.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: $.publisher
                          }, null, 8, IL),
                          mi("publisher") ? (h(), p("small", LL, o(ji("publisher")), 1)) : E("", !0),
                          gi.value && ae.value && ve.value.length > 0 ? (h(), p("ul", PL, [
                            (h(!0), p(W, null, ue(ve.value, (f, M) => (h(), p("li", {
                              id: Bu("mobile", "publisher", M),
                              key: `mobile-publisher-${f}`,
                              role: "option",
                              "aria-selected": _n.publisher === M ? "true" : "false"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = Se(() => {
                                }, ["prevent"])),
                                onClick: (de) => wf(f, de)
                              }, o(f), 41, FL)
                            ], 8, DL))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", ML, [
                          l("label", UL, o(u(t)("library", "Series / periodical")), 1),
                          be(l("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (f) => q.value = f),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": Y.value && B.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (f) => Y.value = !0),
                            onKeydown: b[55] || (b[55] = ft((f) => Y.value = !1, ["escape"]))
                          }, null, 40, zL), [
                            [je, q.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: $.publication
                          }, null, 8, jL),
                          mi("publication") ? (h(), p("small", BL, o(ji("publication")), 1)) : E("", !0),
                          gi.value && Y.value && B.value.length > 0 ? (h(), p("ul", HL, [
                            (h(!0), p(W, null, ue(B.value, (f) => (h(), p("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => mf(f, M)
                              }, o(f), 41, VL)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", qL, [
                          l("label", GL, o(u(t)("library", "Publication year")), 1),
                          be(l("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (f) => qt.value = f),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": vi.value && Yi.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (f) => vi.value = !0),
                            onKeydown: b[59] || (b[59] = ft((f) => vi.value = !1, ["escape"]))
                          }, null, 40, KL), [
                            [je, qt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: $.year
                          }, null, 8, WL),
                          mi("year") ? (h(), p("small", YL, o(ji("year")), 1)) : E("", !0),
                          gi.value && vi.value && Yi.value.length > 0 ? (h(), p("ul", ZL, [
                            (h(!0), p(W, null, ue(Yi.value, (f) => (h(), p("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => Ef(f, M)
                              }, o(f), 41, XL)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", JL, [
                          l("label", QL, o(u(t)("library", "Creator")), 1),
                          be(l("input", {
                            id: "library-mobile-creator-search",
                            "onUpdate:modelValue": b[61] || (b[61] = (f) => Me.value = f),
                            type: "search",
                            name: "creatorSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search creators"),
                            title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-creator-suggestions",
                            "aria-expanded": Xe.value && ye.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Xe.value = !0),
                            onKeydown: b[63] || (b[63] = ft((f) => Xe.value = !1, ["escape"]))
                          }, null, 40, eP), [
                            [je, Me.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: $.creator
                          }, null, 8, tP),
                          mi("creator") ? (h(), p("small", iP, o(ji("creator")), 1)) : E("", !0),
                          gi.value && Xe.value && ye.value.length > 0 ? (h(), p("ul", nP, [
                            (h(!0), p(W, null, ue(ye.value, (f) => (h(), p("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => _f(f, M)
                              }, o(f), 41, aP)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Format")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => $.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => yi(f))
                          }, [
                            l("option", rP, o(u(t)("library", "All formats")), 1),
                            (h(!0), p(W, null, ue(O.value, (f) => (h(), p("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(Rs(f)), 9, lP))), 128))
                          ], 544), [
                            [at, $.format]
                          ])
                        ]),
                        l("div", sP, [
                          l("label", oP, o(u(t)("library", "Subject")), 1),
                          be(l("input", {
                            id: "library-mobile-subject-search",
                            "onUpdate:modelValue": b[67] || (b[67] = (f) => J.value = f),
                            type: "search",
                            name: "subjectSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search subjects"),
                            title: u(t)("library", "Exact subject matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-subject-suggestions",
                            "aria-expanded": te.value && he.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (f) => te.value = !0),
                            onKeydown: b[69] || (b[69] = ft((f) => te.value = !1, ["escape"]))
                          }, null, 40, uP), [
                            [je, J.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: $.subject
                          }, null, 8, cP),
                          mi("subject") ? (h(), p("small", dP, o(ji("subject")), 1)) : E("", !0),
                          gi.value && te.value && he.value.length > 0 ? (h(), p("ul", fP, [
                            (h(!0), p(W, null, ue(he.value, (f) => (h(), p("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => Af(f, M)
                              }, o(f), 41, hP)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", pP, [
                          l("label", vP, o(u(t)("library", "Classification")), 1),
                          be(l("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": b[71] || (b[71] = (f) => Te.value = f),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": xe.value && Ye.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (f) => xe.value = !0),
                            onKeydown: b[73] || (b[73] = ft((f) => xe.value = !1, ["escape"]))
                          }, null, 40, bP), [
                            [je, Te.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: $.classification
                          }, null, 8, gP),
                          gi.value && xe.value && Ye.value.length > 0 ? (h(), p("ul", mP, [
                            (h(!0), p(W, null, ue(Ye.value, (f) => (h(), p("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => kf(f, M)
                              }, o(f), 41, yP)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      l("fieldset", _P, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          ie(o(u(t)("library", "Shelf")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => $.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => yi(f))
                          }, [
                            l("option", wP, o(u(t)("library", "All shelves")), 1),
                            (h(!0), p(W, null, ue(C.value, (f) => (h(), p("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, kP))), 128))
                          ], 544), [
                            [at, $.shelf]
                          ])
                        ]),
                        l("div", SP, [
                          l("label", CP, o(u(t)("library", "Folder")), 1),
                          be(l("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (f) => ut.value = f),
                            type: "search",
                            name: "folderSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Type at least 3 path characters"),
                            title: u(t)("library", "Select an exact folder path"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-folder-suggestions",
                            "aria-expanded": ee.value && N.value.length > 0 ? "true" : "false",
                            onFocus: b[78] || (b[78] = (f) => ee.value = !0),
                            onKeydown: b[79] || (b[79] = ft((f) => ee.value = !1, ["escape"]))
                          }, null, 40, TP), [
                            [je, ut.value]
                          ]),
                          gi.value && ee.value && N.value.length > 0 ? (h(), p("ul", AP, [
                            (h(!0), p(W, null, ue(N.value, (f) => (h(), p("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => Cf(f, M)
                              }, o(f), 41, EP)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      l("fieldset", $P, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          ie(o(u(t)("library", "Scan status")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => $.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => yi(f))
                          }, [
                            l("option", xP, o(u(t)("library", "All scan statuses")), 1),
                            (h(!0), p(W, null, ue(R.value, (f) => (h(), p("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, OP))), 128))
                          ], 544), [
                            [at, $.status]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Workflow status")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => $.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => yi(f))
                          }, [
                            l("option", NP, o(u(t)("library", "All workflow statuses")), 1),
                            (h(!0), p(W, null, ue(pe.value, (f) => (h(), p("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, RP))), 128))
                          ], 544), [
                            [at, $.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Suggested updates")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => $.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => yi(f))
                          }, [
                            l("option", IP, o(u(t)("library", "All metadata")), 1),
                            l("option", LP, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [at, $.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", PP, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", DP, [
                          l("label", FP, o(u(t)("library", "Nextcloud tag")), 1),
                          be(l("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (f) => _t.value = f),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": bt.value && pi.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (f) => bt.value = !0),
                            onKeydown: b[89] || (b[89] = ft((f) => bt.value = !1, ["escape"]))
                          }, null, 40, MP), [
                            [je, _t.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: $.tag
                          }, null, 8, UP),
                          bt.value && pi.value.length > 0 ? (h(), p("ul", zP, [
                            (h(!0), p(W, null, ue(pi.value, (f) => (h(), p("li", {
                              key: f,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Se(() => {
                                }, ["prevent"])),
                                onClick: (M) => Sf(f, M)
                              }, o(f), 41, jP)
                            ]))), 128))
                          ])) : E("", !0),
                          l("button", {
                            type: "submit",
                            class: Ae(["button secondary library-tag-apply", mn("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "Sort")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => $.sort = f),
                            name: "sort",
                            onChange: Kt
                          }, [
                            l("option", BP, o(u(t)("library", "Title")), 1),
                            l("option", HP, o(u(t)("library", "Date added")), 1),
                            l("option", VP, o(u(t)("library", "Publication date")), 1),
                            l("option", qP, o(u(t)("library", "Series")), 1),
                            l("option", GP, o(u(t)("library", "Recently opened")), 1),
                            l("option", KP, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [at, $.sort]
                          ])
                        ]),
                        l("label", null, [
                          ie(o(u(t)("library", "View")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => $.view = f),
                            name: "view",
                            onChange: Kt
                          }, [
                            l("option", WP, o(u(t)("library", "Compact")), 1),
                            l("option", YP, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [at, $.view]
                          ])
                        ])
                      ]),
                      l("div", ZP, [
                        Ct.value.length > 0 ? (h(), p("a", {
                          key: 0,
                          href: Os(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Se(Ns, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, XP)) : E("", !0),
                        l("button", JP, o(kg.value), 1)
                      ])
                    ], 40, kL)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", e8, [
                      l("section", t8, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, i8),
                        l("form", {
                          method: "post",
                          action: fe.value,
                          class: "library-saved-collection-save-form",
                          title: qu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: gt.value
                          }, null, 8, a8),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: om.value
                          }, null, 8, r8),
                          l("label", null, [
                            l("span", l8, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, s8)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, o8)
                        ], 8, n8)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Se(Kt, ["prevent"])
                      }, [
                        (h(!0), p(W, null, ue(Tg.value, (f) => (h(), p("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, c8))), 128)),
                        l("label", d8, [
                          ie(o(u(t)("library", "Sort")), 1),
                          be(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => $.sort = f),
                            name: "sort",
                            onChange: Kt
                          }, [
                            l("option", f8, o(u(t)("library", "Title")), 1),
                            l("option", h8, o(u(t)("library", "Date added")), 1),
                            l("option", p8, o(u(t)("library", "Publication date")), 1),
                            l("option", v8, o(u(t)("library", "Series")), 1),
                            l("option", b8, o(u(t)("library", "Recently opened")), 1),
                            l("option", g8, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [at, $.sort]
                          ])
                        ]),
                        l("nav", {
                          class: "library-view-mode-toggle",
                          "data-library-control": "view",
                          "aria-label": u(t)("library", "View")
                        }, [
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "compact",
                            class: Ae({ active: re.value === "compact" }),
                            "aria-pressed": re.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => Lf("compact"))
                          }, o(u(t)("library", "Compact")), 11, y8),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Ae({ active: re.value === "list" }),
                            "aria-pressed": re.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => Lf("list"))
                          }, o(u(t)("library", "List")), 11, _8)
                        ], 8, m8)
                      ], 40, u8)
                    ])
                  ], 8, QP),
                  hr.value ? (h(), p("p", w8, o(hr.value), 1)) : E("", !0),
                  ia.value ? (h(), p("p", k8, o(ia.value), 1)) : E("", !0),
                  Hr.value ? (h(), p("p", S8, o(Hr.value), 1)) : E("", !0),
                  l("div", C8, [
                    Dt.loading ? (h(), p("span", T8, o(u(t)("library", "Updating catalogue…")), 1)) : Dt.completed ? (h(), p("span", A8, o(u(Ut)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Q.value.total || 0))), 1)) : E("", !0)
                  ]),
                  ta.value ? (h(), p("section", E8, [
                    l("p", $8, o(ci.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: cr.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : Oa.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(zi.value), 9, x8),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(Ut)("library", "%n item", "%n items", Q.value.total)), 1),
                      D.value?.earliestYear && D.value?.latestYear ? (h(), p("span", N8, o(D.value.earliestYear) + "–" + o(D.value.latestYear), 1)) : E("", !0),
                      D.value?.datedCount ? (h(), p("span", R8, o(D.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : E("", !0),
                      D.value?.undatedCount > 0 ? (h(), p("span", I8, o(D.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : E("", !0)
                    ], 8, O8),
                    ea.value && D.value ? (h(), p("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(Ut)("library", "%n item", "%n items", D.value.itemCount)), 1),
                      D.value.earliestYear && D.value.latestYear ? (h(), p("span", P8, o(D.value.earliestYear) + "–" + o(D.value.latestYear), 1)) : E("", !0),
                      l("span", null, o(D.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      D.value.undatedCount > 0 ? (h(), p("span", D8, o(D.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : E("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, L8)) : E("", !0),
                    ea.value && D.value?.issueGroups?.length ? (h(), p("section", F8, [
                      l("div", null, [
                        l("p", M8, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, U8)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (h(!0), p(W, null, ue(D.value.issueGroups, (f) => (h(), p("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(f.label), 1),
                          l("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(Ut)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, j8))), 128))
                      ], 8, z8),
                      D.value.gapRanges?.length ? (h(), p("p", B8, o(u(t)("library", "Gap")) + ": " + o(D.value.gapRanges.join(", ")), 1)) : E("", !0),
                      (h(!0), p(W, null, ue(D.value.issueGroups, (f) => (h(), p("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(f.label), 1),
                        l("ol", null, [
                          (h(!0), p(W, null, ue(f.items, (M, de) => (h(), p("li", {
                            key: M.itemId
                          }, [
                            l("span", H8, o(M.issueLabel), 1),
                            l("a", {
                              href: M.detailsUrl || "#"
                            }, o(M.title), 9, V8),
                            l("small", null, [
                              ie(o(M.publicationType), 1),
                              M.publicationDate ? (h(), p(W, { key: 0 }, [
                                ie(" · " + o(M.publicationDate), 1)
                              ], 64)) : E("", !0)
                            ]),
                            l("small", q8, [
                              de > 0 ? (h(), p(W, { key: 0 }, [
                                ie(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : E("", !0),
                              de > 0 && de < f.items.length - 1 ? (h(), p(W, { key: 1 }, [
                                ie(" · ")
                              ], 64)) : E("", !0),
                              de < f.items.length - 1 ? (h(), p(W, { key: 2 }, [
                                ie(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : E("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      D.value.unknownIssueItems?.length ? (h(), p("details", G8, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(D.value.unknownIssueItems.length), 9, K8)
                      ])) : E("", !0)
                    ])) : E("", !0),
                    l("p", null, [
                      l("a", {
                        href: dt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, W8)
                    ])
                  ])) : E("", !0),
                  l("div", Y8, [
                    l("p", Z8, o(u(t)("library", "Showing")) + " " + o(Q.value.from) + "–" + o(Q.value.to) + " " + o(u(t)("library", "of")) + " " + o(Q.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", J8, [
                        ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                        Q.value.total > 0 ? (h(), p("span", Q8, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                      ]),
                      Q.value.previousUrl ? (h(), p("a", {
                        key: 0,
                        href: Q.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, e5)) : (h(), p("span", t5, o(u(t)("library", "Previous")), 1)),
                      Q.value.nextUrl ? (h(), p("a", {
                        key: 2,
                        href: Q.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, i5)) : (h(), p("span", n5, o(u(t)("library", "Next")), 1))
                    ], 8, X8)
                  ]),
                  T.value.length === 0 ? (h(), p("div", {
                    key: 4,
                    class: Ae(["library-empty-content", { "library-first-run-guidance": zr.value || fr.value, "library-filter-empty-state": gn.value && !zr.value && !fr.value }]),
                    role: "status"
                  }, [
                    zr.value ? (h(), p(W, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, a5),
                      l("p", r5, [
                        l("a", {
                          href: Yn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, l5),
                        l("span", s5, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : fr.value ? (h(), p(W, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, o5),
                      l("p", u5, [
                        l("a", {
                          href: Yn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, c5)
                      ])
                    ], 64)) : gn.value ? (h(), p(W, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, d5),
                      Ct.value.length > 0 ? (h(), p("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (h(!0), p(W, null, ue(Ct.value, (f) => (h(), p("a", {
                          key: `empty-${f.key}`,
                          href: tl(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: Se((M) => il(f.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            ie(o(f.label), 1),
                            f.displayValue ? (h(), p(W, { key: 0 }, [
                              ie(":")
                            ], 64)) : E("", !0)
                          ]),
                          f.displayValue ? (h(), p(W, { key: 0 }, [
                            b[124] || (b[124] = ie(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, p5)
                          ], 64)) : E("", !0),
                          b[125] || (b[125] = ie()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, h5))), 128))
                      ], 8, f5)) : E("", !0),
                      $i.value ? (h(), p("p", v5, o(u(t)("library", "Try removing {filter}.", { filter: $i.value.displayValue ? `${$i.value.label}: ${$i.value.displayValue}` : $i.value.label })), 1)) : E("", !0),
                      l("p", b5, [
                        ys.value ? (h(), p("a", {
                          key: 0,
                          href: rm(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Se((f) => il("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, g5)) : E("", !0)
                      ])
                    ], 64)) : (h(), p(W, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, m5),
                      l("p", y5, [
                        l("a", {
                          href: Yn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, _5)
                      ])
                    ], 64))
                  ], 2)) : E("", !0),
                  T.value.length > 0 ? (h(), p("section", {
                    key: 5,
                    class: Ae(["library-list-selection", { "library-list-selection--active": ni.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", k5, [
                      l("label", S5, [
                        l("input", {
                          type: "checkbox",
                          checked: ni.value.length === T.value.length,
                          onChange: Eg
                        }, null, 40, C5),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, T5)
                      ]),
                      ni.value.length ? (h(), p("span", A5, o(u(Ut)("library", "%n publication selected", "%n publications selected", ni.value.length)), 1)) : E("", !0),
                      be(ce(hd, {
                        "item-ids": ni.value,
                        "request-token": gt.value,
                        "lists-url": Ei.value,
                        "preferred-list-id": u(Su)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [tr, ni.value.length]
                      ]),
                      ni.value.length ? be((h(), p("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (f) => nt.value = f),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        l("option", $5, o(u(t)("library", "More actions")), 1),
                        l("option", x5, o(u(t)("library", "Add tag")), 1),
                        l("option", O5, o(u(t)("library", "Remove tag")), 1),
                        l("option", N5, o(u(t)("library", "Preview edit")), 1),
                        l("option", R5, o(u(t)("library", "Fresh covers")), 1),
                        l("option", I5, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, E5)), [
                        [at, nt.value]
                      ]) : E("", !0)
                    ]),
                    ni.value.length && nt.value ? (h(), p("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: xg
                    }, [
                      nt.value === "tag" ? (h(), p("form", {
                        key: 0,
                        method: "post",
                        action: Nu.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, P5),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, D5)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, F5)
                      ], 8, L5)) : E("", !0),
                      nt.value === "untag" ? (h(), p("form", {
                        key: 1,
                        method: "post",
                        action: Ru.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, U5),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, z5)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, j5)
                      ], 8, M5)) : E("", !0),
                      nt.value === "reset" ? (h(), p("form", {
                        key: 2,
                        method: "post",
                        action: vs.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, H5),
                        (h(!0), p(W, null, ue(_s.value, (f) => (h(), p("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, V5))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, q5)
                      ], 8, B5)) : E("", !0),
                      nt.value === "edit" ? (h(), p("form", {
                        key: 3,
                        method: "post",
                        action: Iu.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, K5),
                        (h(!0), p(W, null, ue(_s.value, (f) => (h(), p("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, W5))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", Y5, [
                            l("option", Z5, o(u(t)("library", "Publication type")), 1),
                            l("option", X5, o(u(t)("library", "Subtitle")), 1),
                            l("option", J5, o(u(t)("library", "Creators")), 1),
                            l("option", Q5, o(u(t)("library", "Series / periodical")), 1),
                            l("option", eD, o(u(t)("library", "Series")), 1),
                            l("option", tD, o(u(t)("library", "Part in series")), 1),
                            l("option", iD, o(u(t)("library", "Genre")), 1),
                            l("option", nD, o(u(t)("library", "Publication date")), 1),
                            l("option", aD, o(u(t)("library", "Language")), 1),
                            l("option", rD, o(u(t)("library", "Publisher")), 1),
                            l("option", lD, o(u(t)("library", "Subjects")), 1),
                            l("option", sD, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, oD)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, uD)
                      ], 8, G5)) : E("", !0),
                      nt.value === "covers" ? (h(), p("form", {
                        key: 4,
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, dD),
                        (h(!0), p(W, null, ue(_s.value, (f) => (h(), p("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, fD))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, hD)
                      ], 8, cD)) : E("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => nt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : E("", !0)
                  ], 10, w5)) : E("", !0),
                  sr.value && (u(Eu) === "building" || Object.values(u(bn)).some((f) => f.status === "partial")) ? (h(), p("p", pD, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
                  T.value.length > 0 && re.value === "list" ? (h(), p("div", vD, [
                    l("table", bD, [
                      l("caption", gD, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", mD, [
                            l("span", yD, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", _D, [
                            l("span", wD, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", kD, o(u(t)("library", "Title")), 1),
                          l("th", SD, o(u(t)("library", "Creators")), 1),
                          l("th", CD, o(u(t)("library", "Publication date")), 1),
                          l("th", TD, o(u(t)("library", "Series")), 1),
                          l("th", AD, o(u(t)("library", "Format")), 1),
                          l("th", ED, o(u(t)("library", "Shelf")), 1),
                          l("th", $D, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (h(!0), p(W, null, ue(T.value, (f) => (h(), p("tr", {
                          key: f.id,
                          class: Ae(["library-catalogue-list-row", { "library-catalogue-list-row--selected": ks.value.has(Number(f.id)), "library-catalogue-list-row--open": na.value && Number(Ra.value) === Number(f.id) }])
                        }, [
                          l("td", xD, [
                            l("label", OD, [
                              l("input", {
                                type: "checkbox",
                                checked: ks.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (M) => rf(f.id, M.currentTarget.checked)
                              }, null, 40, ND)
                            ])
                          ]),
                          l("td", RD, [
                            l("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                              onClick: (M) => Hi(f, M)
                            }, [
                              l("img", {
                                src: f.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, LD)
                            ], 8, ID)
                          ]),
                          l("th", PD, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (M) => Hi(f, M)
                            }, [
                              l("bdi", FD, o(f.title), 1)
                            ], 8, DD),
                            u(bn)[f.id]?.count ? (h(), p("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${dt.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(bn)[f.id].count) + o(u(bn)[f.id].status === "partial" ? "+" : ""), 9, MD)) : E("", !0)
                          ]),
                          l("td", UD, [
                            f.creators ? (h(), p("bdi", zD, o(f.displayCreators ?? f.creators), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, jD))
                          ]),
                          l("td", null, [
                            f.publicationDate ? (h(), p("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, BD)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, HD))
                          ]),
                          l("td", null, [
                            f.publication ? (h(), p("bdi", VD, o(f.publication), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, qD))
                          ]),
                          l("td", null, [
                            f.extension || f.publicationType ? (h(), p("bdi", {
                              key: 0,
                              class: Ae(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? Rs(f.extension) : f.publicationType), 11, GD)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, KD))
                          ]),
                          l("td", null, [
                            f.shelf ? (h(), p("bdi", WD, o(f.shelf), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, YD))
                          ]),
                          l("td", ZD, [
                            l("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (M) => ii(f, M)
                            }, o(u(t)("library", "Open")), 9, XD),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (M) => Hi(f, M)
                            }, o(u(t)("library", "Details")), 9, JD)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : T.value.length > 0 ? (h(), p("div", {
                    key: 8,
                    class: Ae(["library-cover-gallery", oe.value])
                  }, [
                    (h(!0), p(W, null, ue(T.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: Ae(["library-cover-card", { "library-cover-card--selected": ks.value.has(Number(f.id)), "library-cover-card--open": na.value && Number(Ra.value) === Number(f.id) }])
                    }, [
                      l("label", QD, [
                        l("input", {
                          type: "checkbox",
                          checked: ks.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (M) => rf(f.id, M.currentTarget.checked)
                        }, null, 40, eF)
                      ]),
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                        "aria-expanded": na.value && Number(Ra.value) === Number(f.id) ? "true" : "false",
                        onClick: (M) => Hi(f, M)
                      }, [
                        l("span", {
                          id: `library-details-action-${f.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, iF),
                        ce(ST, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, tF),
                      l("form", {
                        method: "post",
                        action: f.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Se((M) => Mf(f, M), ["prevent"])
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, aF),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, rF),
                        l("button", {
                          type: "submit",
                          class: Ae(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": nl[f.id] ? "true" : void 0,
                          disabled: nl[f.id],
                          onClick: Se((M) => Mf(f, M), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, lF),
                        al[f.id] ? (h(), p("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(al[f.id]), 9, sF)) : E("", !0)
                      ], 40, nF),
                      l("div", oF, [
                        l("div", uF, [
                          u(bn)[f.id]?.count ? (h(), p("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${dt.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(bn)[f.id].count) + o(u(bn)[f.id].status === "partial" ? "+" : ""), 9, cF)) : E("", !0),
                          l("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (M) => Hi(f, M)
                            }, [
                              l("bdi", hF, o(f.title), 1)
                            ], 8, fF)
                          ], 8, dF),
                          f.creators ? (h(), p("p", pF, [
                            l("bdi", vF, o(f.displayCreators ?? f.creators), 1)
                          ])) : E("", !0),
                          Pf(f) ? (h(), p("p", bF, [
                            l("bdi", gF, o(Pf(f)), 1)
                          ])) : E("", !0)
                        ])
                      ])
                    ], 2))), 128))
                  ], 2)) : E("", !0),
                  T.value.length > 0 ? (h(), p("nav", {
                    key: 9,
                    class: "library-pagination library-pagination--bottom",
                    "aria-label": u(t)("library", "Catalogue pagination")
                  }, [
                    l("span", yF, [
                      ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", _F, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                    ]),
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, wF)) : (h(), p("span", kF, o(u(t)("library", "Previous")), 1)),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, SF)) : (h(), p("span", CF, o(u(t)("library", "Next")), 1))
                  ], 8, mF)) : E("", !0)
                ], 10, gL))
              ], 64))
            ], 8, tR)
          ]),
          _: 1
        }),
        ce(u(q2), {
          ref_key: "sidebarComponent",
          ref: La,
          class: "library-native-item-sidebar",
          open: na.value,
          "no-toggle": "",
          loading: ai.loading,
          name: ke.value?.title || u(t)("library", "Publication details"),
          subname: ke.value?.displayCreators ?? ke.value?.creators ?? "",
          role: Pa.value ? "dialog" : void 0,
          "aria-modal": Pa.value ? "true" : void 0,
          "aria-labelledby": Pa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Pa.value && ke.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: pf,
          onClosed: zg,
          onClose: Yr
        }, {
          default: we(() => [
            l("div", TF, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: lf,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(ke.value?.title || u(t)("library", "Publication details")), 513),
              ai.loading && !ke.value ? (h(), p("p", AF, o(u(t)("library", "Loading publication details…")), 1)) : ai.error ? (h(), p("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ai.missing ? "status" : "alert"
              }, [
                l("p", null, o(ai.error), 1),
                ai.missing ? E("", !0) : (h(), p("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Wr(Ra.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, EF)) : ke.value ? (h(), p(W, { key: 2 }, [
                l("p", $F, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", xF, [
                  l("span", OF, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: ke.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, NF),
                  l("div", RF, [
                    l("p", IF, [
                      l("bdi", LF, o(ke.value.publicationType || u(t)("library", "Publication")), 1),
                      ke.value.extension ? (h(), p("span", PF, [
                        b[129] || (b[129] = ie(" · ", -1)),
                        l("bdi", DF, o(Rs(ke.value.extension)), 1)
                      ])) : E("", !0)
                    ]),
                    l("div", FF, [
                      l("a", {
                        class: "button primary",
                        href: ke.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => ii(ke.value, f))
                      }, o(u(t)("library", "Open")), 9, MF),
                      ce(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: we(() => [
                          ce(u(Ic), {
                            href: ke.value.filesUrl
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ce(u(Ic), {
                            href: ke.value.downloadUrl
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ce(u(Ic), {
                            href: ke.value.detailsUrl
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                (h(), Pe(hd, {
                  key: ke.value.id,
                  "item-ids": [Number(ke.value.id)],
                  "request-token": gt.value,
                  "lists-url": Ei.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (h(), p(W, null, ue(Ng, (f) => l("button", {
                    key: f.key,
                    type: "button",
                    class: Ae({ active: Ia.value === f.key }),
                    "aria-current": Ia.value === f.key ? "page" : void 0,
                    onClick: (M) => Ia.value = f.key
                  }, o(u(t)("library", f.label)), 11, zF)), 64))
                ], 8, UF),
                Ia.value === "overview" ? (h(), p("section", jF, [
                  l("h3", BF, o(u(t)("library", "Overview")), 1),
                  sf.value ? (h(), p("p", HF, [
                    l("bdi", VF, o(sf.value), 1)
                  ])) : E("", !0),
                  l("dl", qF, [
                    ke.value.publication ? (h(), p("div", GF, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: As("publication", ke.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => Es(f, "publication", ke.value.publication))
                        }, [
                          l("bdi", WF, o(ke.value.publication), 1)
                        ], 8, KF)
                      ])
                    ])) : E("", !0),
                    ke.value.publicationDate ? (h(), p("div", YF, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        Da.value ? (h(), p("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: As("year", Da.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => Es(f, "year", Da.value))
                        }, o(Da.value), 9, ZF)) : E("", !0),
                        Da.value && ke.value.publicationDate !== Da.value ? (h(), p("span", XF, " · ")) : E("", !0),
                        ke.value.publicationDate !== Da.value ? (h(), p("span", JF, o(ke.value.publicationDate), 1)) : E("", !0)
                      ])
                    ])) : E("", !0),
                    ke.value.publisher ? (h(), p("div", QF, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: As("publisher", ke.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => Es(f, "publisher", ke.value.publisher))
                        }, [
                          l("bdi", tM, o(ke.value.publisher), 1)
                        ], 8, eM)
                      ])
                    ])) : E("", !0),
                    of.value.length ? (h(), p("div", iM, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", nM, [
                        (h(!0), p(W, null, ue(of.value, (f) => (h(), p("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: As("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (M) => Es(M, "language", f)
                        }, [
                          l("bdi", rM, o(f), 1)
                        ], 8, aM))), 128))
                      ])
                    ])) : E("", !0),
                    ke.value.shelf ? (h(), p("div", lM, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(ke.value.shelf), 1)
                    ])) : E("", !0)
                  ])
                ])) : Ia.value === "metadata" ? (h(), p("section", sM, [
                  sr.value ? (h(), Pe(pg, {
                    key: `${ke.value.id}:${ke.value.title}:${ke.value.creators}`,
                    "item-id": Number(ke.value.id),
                    "request-token": gt.value
                  }, null, 8, ["item-id", "request-token"])) : E("", !0),
                  l("h3", oM, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Se(Mg, ["prevent"])
                  }, [
                    l("label", null, [
                      ie(o(u(t)("library", "Title")), 1),
                      be(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => yt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [je, yt.title]
                      ])
                    ]),
                    l("label", null, [
                      ce(We, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => yt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [je, yt.series]
                      ])
                    ]),
                    l("label", null, [
                      ce(We, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => yt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [je, yt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      ce(We, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      be(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => yt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [je, yt.genre]
                      ])
                    ]),
                    l("label", null, [
                      ie(o(u(t)("library", "Publication date")), 1),
                      be(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => yt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, uM), [
                        [je, yt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (h(!0), p(W, null, ue(yt.identifiers, (f, M) => (h(), p("div", {
                        key: M,
                        class: "library-sidebar-identifier"
                      }, [
                        be(l("input", {
                          "onUpdate:modelValue": (de) => f.scheme = de,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, cM), [
                          [je, f.scheme]
                        ]),
                        be(l("input", {
                          "onUpdate:modelValue": (de) => f.displayValue = de,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, dM), [
                          [je, f.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (de) => Fg(M)
                        }, o(u(t)("library", "Remove")), 9, fM)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Dg
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    ce(We, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: we(() => [
                        ie(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    Bi.error ? (h(), p("p", hM, o(Bi.error), 1)) : Bi.saved ? (h(), p("p", pM, o(u(t)("library", "Metadata saved.")), 1)) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Bi.saving
                    }, o(Bi.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, vM)
                  ], 32),
                  $s(ke.value).length ? (h(), p("section", bM, [
                    l("h4", gM, [
                      ce(We, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (h(!0), p(W, null, ue($s(ke.value), (f) => (h(), p("div", {
                        key: f.field
                      }, [
                        l("dt", null, o(f.field) + " · " + o(f.sourceProvenance), 1),
                        l("dd", null, [
                          ie(o(u(t)("library", "Current")) + ": " + o(f.currentValue || "—"), 1),
                          b[130] || (b[130] = l("br", null, null, -1)),
                          ie(o(u(t)("library", "Suggestion")) + ": " + o(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : E("", !0)
                ])) : (h(), p("section", mM, [
                  l("h3", yM, o(u(t)("library", "Activity")), 1),
                  l("dl", _M, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(ke.value.scanStatus || "—"), 1)
                    ]),
                    ke.value.workflowStatus ? (h(), p("div", wM, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(ke.value.workflowStatus), 1)
                    ])) : E("", !0),
                    ke.value.metadataSource ? (h(), p("div", kM, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(ke.value.metadataSource), 1)
                    ])) : E("", !0),
                    ke.value.cachedPath ? (h(), p("div", SM, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", CM, [
                        ke.value.openUrl ? (h(), p("a", {
                          key: 0,
                          href: ke.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => ii(ke.value, f))
                        }, [
                          l("bdi", AM, o(ke.value.cachedPath), 1)
                        ], 8, TM)) : (h(), p("bdi", EM, o(ke.value.cachedPath), 1))
                      ])
                    ])) : E("", !0)
                  ])
                ])),
                ke.value.canonicalAuthors?.length ? (h(), p("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Authors")
                }, [
                  (h(!0), p(W, null, ue(ke.value.canonicalAuthors, (f) => (h(), p("a", {
                    key: f.id,
                    class: "button secondary",
                    href: `${_.generateUrl("/apps/library/")}?authors=1&authorId=${f.id}`
                  }, [
                    l("bdi", OM, o(f.name), 1)
                  ], 8, xM))), 128))
                ], 8, $M)) : ke.value.authors?.length ? (h(), p("nav", {
                  key: 4,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (h(!0), p(W, null, ue(ke.value.authors, (f) => (h(), p("a", {
                    key: f,
                    class: "button secondary",
                    href: pm(f)
                  }, [
                    l("bdi", IM, o(f), 1)
                  ], 8, RM))), 128))
                ], 8, NM)) : E("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Cs.value,
                    onClick: b[110] || (b[110] = (f) => xs(Cs.value))
                  }, o(u(t)("library", "Previous item")), 9, PM),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ts.value,
                    onClick: b[111] || (b[111] = (f) => xs(Ts.value))
                  }, o(u(t)("library", "Next item")), 9, DM)
                ], 8, LM)
              ], 64)) : E("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function jM() {
  window.LibraryStartupWatchdog?.fail();
}
function BM(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = fo("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !BM(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: fo("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Q1(zM, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  jM(), console.error("[library] Vue startup failed", e);
}
