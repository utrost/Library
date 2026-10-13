// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const it = {}, Tr = [], Di = () => {
}, Fp = () => !1, eu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tu = (e) => e.startsWith("onUpdate:"), $t = Object.assign, gd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, _m = Object.prototype.hasOwnProperty, st = (e, t) => _m.call(e, t), Pe = Array.isArray, gn = (e) => ns(e) === "[object Map]", Ma = (e) => ns(e) === "[object Set]", Uf = (e) => ns(e) === "[object Date]", je = (e) => typeof e == "function", vt = (e) => typeof e == "string", Ki = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", Mp = (e) => (ot(e) || je(e)) && je(e.then) && je(e.catch), Up = Object.prototype.toString, ns = (e) => Up.call(e), wm = (e) => ns(e).slice(8, -1), zp = (e) => ns(e) === "[object Object]", md = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kl = /* @__PURE__ */ bd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), iu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, km = /-\w/g, Qt = iu(
  (e) => e.replace(km, (t) => t.slice(1).toUpperCase())
), Sm = /\B([A-Z])/g, Va = iu(
  (e) => e.replace(Sm, "-$1").toLowerCase()
), au = iu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gu = iu(
  (e) => e ? `on${au(e)}` : ""
), zt = (e, t) => !Object.is(e, t), Ks = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, jp = (e, t, i, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: i
  });
}, nu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Cm = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zf;
const ru = () => zf || (zf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pi(e) {
  if (Pe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const a = e[i], n = vt(a) ? $m(a) : pi(a);
      if (n)
        for (const r in n)
          t[r] = n[r];
    }
    return t;
  } else if (vt(e) || ot(e))
    return e;
}
const Tm = /;(?![^(]*\))/g, Am = /:([^]+)/, Em = /\/\*[^]*?\*\//g;
function $m(e) {
  const t = {};
  return e.replace(Em, "").split(Tm).forEach((i) => {
    if (i) {
      const a = i.split(Am);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (vt(e))
    t = e;
  else if (Pe(e))
    for (let i = 0; i < e.length; i++) {
      const a = Ee(e[i]);
      a && (t += a + " ");
    }
  else if (ot(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Js(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !vt(t) && (e.class = Ee(t)), i && (e.style = pi(i)), e;
}
const xm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Om = /* @__PURE__ */ bd(xm);
function Bp(e) {
  return !!e || e === "";
}
function Nm(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let a = 0; i && a < e.length; a++)
    i = Ua(e[a], t[a]);
  return i;
}
function jf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), a = new Uint8Array(i.length);
  for (const n of e) {
    let r = -1;
    for (let s = 0; s < i.length; s++)
      if (!a[s] && Ua(n, i[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    a[r] = 1;
  }
  return !0;
}
function Ua(e, t) {
  if (e === t) return !0;
  let i = Uf(e), a = Uf(t);
  if (i || a)
    return i && a ? e.getTime() === t.getTime() : !1;
  if (i = Ki(e), a = Ki(t), i || a)
    return e === t;
  if (i = Pe(e), a = Pe(t), i || a)
    return i && a ? Nm(e, t) : !1;
  if (i = ot(e), a = ot(t), i || a) {
    if (!i || !a)
      return !1;
    if (i = gn(e), a = gn(t), i || a || (i = Ma(e), a = Ma(t), i || a))
      return i && a ? jf(e, t) : !1;
    const n = Object.keys(e).length, r = Object.keys(t).length;
    if (n !== r)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), d = t.hasOwnProperty(s);
      if (c && !d || !c && d || !Ua(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yd(e, t) {
  return e.findIndex((i) => Ua(i, t));
}
const Hp = (e) => !!(e && e.__v_isRef === !0), o = (e) => vt(e) ? e : e == null ? "" : Pe(e) || ot(e) && (e.toString === Up || !je(e.toString)) ? Hp(e) ? o(e.value) : JSON.stringify(e, Vp, 2) : String(e), Vp = (e, t) => Hp(t) ? Vp(e, t.value) : gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [a, n], r) => (i[Ku(a, r) + " =>"] = n, i),
    {}
  )
} : Ma(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => Ku(i))
} : Ki(t) ? Ku(t) : ot(t) && !Pe(t) && !zp(t) ? String(t) : t, Ku = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ki(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Rm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Ut;
class Im {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ut && (Ut.active ? (this.parent = Ut, this.index = (Ut.scopes || (Ut.scopes = [])).push(
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
        const a = this.scopes.slice();
        for (t = 0, i = a.length; t < i; t++)
          a[t].pause();
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
        const n = this.scopes.slice();
        for (t = 0, i = n.length; t < i; t++)
          n[t].resume();
      }
      const a = this.effects.slice();
      for (t = 0, i = a.length; t < i; t++)
        a[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const i = Ut;
      try {
        return Ut = this, t();
      } finally {
        Ut = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ut, Ut = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ut === this)
        Ut = this.prevScope;
      else {
        let t = Ut;
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
      let i, a;
      for (i = 0, a = this.effects.length; i < a; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, a = this.cleanups.length; i < a; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        const n = this.scopes.slice();
        for (i = 0, a = n.length; i < a; i++)
          n[i].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Lm() {
  return Ut;
}
let pt;
const Wu = /* @__PURE__ */ new WeakSet();
class qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ut && (Ut.active ? Ut.effects.push(this) : this.flags &= -2);
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
        } catch (a) {
          e || (e = a);
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
  let t, i = e.depsTail, a = i;
  for (; a; ) {
    const n = a.prevDep;
    a.version === -1 ? (a === i && (i = n), kd(a), Pm(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = n;
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
  const t = e.dep, i = pt, a = qi;
  pt = e, qi = !0;
  try {
    Wp(e);
    const n = e.fn(e._value);
    (t.version === 0 || zt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    pt = i, qi = a, Yp(e), e.flags &= -3;
  }
}
function kd(e, t = !1) {
  const { dep: i, prevSub: a, nextSub: n } = e;
  if (a && (a.nextSub = n, e.prevSub = void 0), n && (n.prevSub = a, e.nextSub = void 0), i.subs === e && (i.subs = a, !a && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      kd(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Pm(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let qi = !0;
const Xp = [];
function za() {
  Xp.push(qi), qi = !1;
}
function ja() {
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
class Dm {
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
      i = this.activeLink = new Dm(pt, this), pt.deps ? (i.prevDep = pt.depsTail, pt.depsTail.nextDep = i, pt.depsTail = i) : pt.deps = pt.depsTail = i, Jp(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const a = i.nextDep;
      a.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = a), i.prevDep = pt.depsTail, i.nextDep = void 0, pt.depsTail.nextDep = i, pt.depsTail = i, pt.deps === i && (pt.deps = a);
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
      for (let a = t.deps; a; a = a.nextDep)
        Jp(a);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Pc = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ Symbol(
  ""
), Dc = /* @__PURE__ */ Symbol(
  ""
), Ul = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, i) {
  if (qi && pt) {
    let a = Pc.get(e);
    a || Pc.set(e, a = /* @__PURE__ */ new Map());
    let n = a.get(i);
    n || (a.set(i, n = new lu()), n.map = a, n.key = i), n.track();
  }
}
function Na(e, t, i, a, n, r) {
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
    const d = Pe(e), y = d && md(i);
    if (d && i === "length") {
      const v = Number(a);
      s.forEach((g, m) => {
        (m === "length" || m === Ul || !Ki(m) && m >= v) && c(g);
      });
    } else
      switch ((i !== void 0 || s.has(void 0)) && c(s.get(i)), y && c(s.get(Ul)), t) {
        case "add":
          d ? y && c(s.get("length")) : (c(s.get(Qn)), gn(e) && c(s.get(Dc)));
          break;
        case "delete":
          d || (c(s.get(Qn)), gn(e) && c(s.get(Dc)));
          break;
        case "set":
          gn(e) && c(s.get(Qn));
          break;
      }
  }
  wd();
}
function gr(e) {
  const t = /* @__PURE__ */ lt(e);
  return t === e ? t : (Yt(t, "iterate", Ul), /* @__PURE__ */ Fi(e) ? t : t.map(Wi));
}
function su(e) {
  return Yt(e = /* @__PURE__ */ lt(e), "iterate", Ul), e;
}
function na(e, t) {
  return /* @__PURE__ */ Ba(e) ? Rr(/* @__PURE__ */ er(e) ? Wi(t) : t) : Wi(t);
}
const Fm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yu(this, Symbol.iterator, (e) => na(this, e));
  },
  concat(...e) {
    return gr(this).concat(
      ...e.map((t) => Pe(t) ? gr(t) : t)
    );
  },
  entries() {
    return Yu(this, "entries", (e) => (e[1] = na(this, e[1]), e));
  },
  every(e, t) {
    return wa(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wa(
      this,
      "filter",
      e,
      t,
      (i) => i.map((a) => na(this, a)),
      arguments
    );
  },
  find(e, t) {
    return wa(
      this,
      "find",
      e,
      t,
      (i) => na(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return wa(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wa(
      this,
      "findLast",
      e,
      t,
      (i) => na(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wa(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wa(this, "forEach", e, t, void 0, arguments);
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
    return wa(this, "map", e, t, void 0, arguments);
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
    return wa(this, "some", e, t, void 0, arguments);
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
    return Yu(this, "values", (e) => na(this, e));
  }
};
function Yu(e, t, i) {
  const a = su(e), n = a[t]();
  return a !== e && !/* @__PURE__ */ Fi(e) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.done || (r.value = i(r.value)), r;
  }), n;
}
const Mm = Array.prototype;
function wa(e, t, i, a, n, r) {
  const s = su(e), c = s !== e && !/* @__PURE__ */ Fi(e), d = s[t];
  if (d !== Mm[t]) {
    const g = d.apply(e, r);
    return c ? Wi(g) : g;
  }
  let y = i;
  s !== e && (c ? y = function(g, m) {
    return i.call(this, na(e, g), m, e);
  } : i.length > 2 && (y = function(g, m) {
    return i.call(this, g, m, e);
  }));
  const v = d.call(s, y, a);
  return c && n ? n(v) : v;
}
function Hf(e, t, i, a) {
  const n = su(e), r = n !== e && !/* @__PURE__ */ Fi(e);
  let s = i, c = !1;
  n !== e && (r ? (c = a.length === 0, s = function(y, v, g) {
    return c && (c = !1, y = na(e, y)), i.call(this, y, na(e, v), g, e);
  }) : i.length > 3 && (s = function(y, v, g) {
    return i.call(this, y, v, g, e);
  }));
  const d = n[t](s, ...a);
  return c ? na(e, d) : d;
}
function Zu(e, t, i) {
  const a = /* @__PURE__ */ lt(e);
  Yt(a, "iterate", Ul);
  const n = a[t](...i);
  return (n === -1 || n === !1) && /* @__PURE__ */ Td(i[0]) ? (i[0] = /* @__PURE__ */ lt(i[0]), a[t](...i)) : n;
}
function rl(e, t, i = []) {
  za(), _d();
  const a = (/* @__PURE__ */ lt(e))[t].apply(e, i);
  return wd(), ja(), a;
}
const Um = /* @__PURE__ */ bd("__proto__,__v_isRef,__isVue"), Qp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ki)
);
function zm(e) {
  Ki(e) || (e = String(e));
  const t = /* @__PURE__ */ lt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class ev {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._isShallow = i;
  }
  get(t, i, a) {
    if (i === "__v_skip") return t.__v_skip;
    const n = this._isReadonly, r = this._isShallow;
    if (i === "__v_isReactive")
      return !n;
    if (i === "__v_isReadonly")
      return n;
    if (i === "__v_isShallow")
      return r;
    if (i === "__v_raw")
      return a === (n ? r ? Zm : nv : r ? av : iv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const s = Pe(t);
    if (!n) {
      let d;
      if (s && (d = Fm[i]))
        return d;
      if (i === "hasOwnProperty")
        return zm;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ei(t) ? t : a
    );
    if ((Ki(i) ? Qp.has(i) : Um(i)) || (n || Yt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ ei(c)) {
      const d = s && md(i) ? c : c.value;
      return n && ot(d) ? /* @__PURE__ */ zl(d) : d;
    }
    return ot(c) ? n ? /* @__PURE__ */ zl(c) : /* @__PURE__ */ Nt(c) : c;
  }
}
class tv extends ev {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, a, n) {
    let r = t[i];
    const s = Pe(t) && md(i);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ Ba(r);
      if (!/* @__PURE__ */ Fi(a) && !/* @__PURE__ */ Ba(a) && (r = /* @__PURE__ */ lt(r), a = /* @__PURE__ */ lt(a)), !s && /* @__PURE__ */ ei(r) && !/* @__PURE__ */ ei(a))
        return y || (r.value = a), !0;
    }
    const c = s ? Number(i) < t.length : st(t, i), d = Reflect.set(
      t,
      i,
      a,
      /* @__PURE__ */ ei(t) ? t : n
    );
    return t === /* @__PURE__ */ lt(n) && d && (c ? zt(a, r) && Na(t, "set", i, a) : Na(t, "add", i, a)), d;
  }
  deleteProperty(t, i) {
    const a = st(t, i);
    t[i];
    const n = Reflect.deleteProperty(t, i);
    return n && a && Na(t, "delete", i, void 0), n;
  }
  has(t, i) {
    const a = Reflect.has(t, i);
    return (!Ki(i) || !Qp.has(i)) && Yt(t, "has", i), a;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Pe(t) ? "length" : Qn
    ), Reflect.ownKeys(t);
  }
}
class jm extends ev {
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
const Bm = /* @__PURE__ */ new tv(), Hm = /* @__PURE__ */ new jm(), Vm = /* @__PURE__ */ new tv(!0);
const Fc = (e) => e, Is = (e) => Reflect.getPrototypeOf(e);
function qm(e, t, i) {
  return function(...a) {
    const n = this.__v_raw, r = /* @__PURE__ */ lt(n), s = gn(r), c = e === "entries" || e === Symbol.iterator && s, d = e === "keys" && s, y = n[e](...a), v = i ? Fc : t ? Rr : Wi;
    return !t && Yt(
      r,
      "iterate",
      d ? Dc : Qn
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
function Gm(e, t) {
  const i = {
    get(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      e || (zt(n, c) && Yt(s, "get", n), Yt(s, "get", c));
      const { has: d } = Is(s), y = t ? Fc : e ? Rr : Wi;
      if (d.call(s, n))
        return y(r.get(n));
      if (d.call(s, c))
        return y(r.get(c));
      r !== s && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ lt(n), "iterate", Qn), n.size;
    },
    has(n) {
      const r = this.__v_raw, s = /* @__PURE__ */ lt(r), c = /* @__PURE__ */ lt(n);
      return e || (zt(n, c) && Yt(s, "has", n), Yt(s, "has", c)), n === c ? r.has(n) : r.has(n) || r.has(c);
    },
    forEach(n, r) {
      const s = this, c = s.__v_raw, d = /* @__PURE__ */ lt(c), y = t ? Fc : e ? Rr : Wi;
      return !e && Yt(d, "iterate", Qn), c.forEach((v, g) => n.call(r, y(v), y(g), s));
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
      add(n) {
        const r = /* @__PURE__ */ lt(this), s = Is(r), c = /* @__PURE__ */ lt(n), d = !t && !/* @__PURE__ */ Fi(n) && !/* @__PURE__ */ Ba(n) ? c : n;
        return s.has.call(r, d) || zt(n, d) && s.has.call(r, n) || zt(c, d) && s.has.call(r, c) || (r.add(d), Na(r, "add", d, d)), this;
      },
      set(n, r) {
        !t && !/* @__PURE__ */ Fi(r) && !/* @__PURE__ */ Ba(r) && (r = /* @__PURE__ */ lt(r));
        const s = /* @__PURE__ */ lt(this), { has: c, get: d } = Is(s);
        let y = c.call(s, n);
        y || (n = /* @__PURE__ */ lt(n), y = c.call(s, n));
        const v = d.call(s, n);
        return s.set(n, r), y ? zt(r, v) && Na(s, "set", n, r) : Na(s, "add", n, r), this;
      },
      delete(n) {
        const r = /* @__PURE__ */ lt(this), { has: s, get: c } = Is(r);
        let d = s.call(r, n);
        d || (n = /* @__PURE__ */ lt(n), d = s.call(r, n)), c && c.call(r, n);
        const y = r.delete(n);
        return d && Na(r, "delete", n, void 0), y;
      },
      clear() {
        const n = /* @__PURE__ */ lt(this), r = n.size !== 0, s = n.clear();
        return r && Na(
          n,
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
  ].forEach((n) => {
    i[n] = qm(n, e, t);
  }), i;
}
function Sd(e, t) {
  const i = Gm(e, t);
  return (a, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? a : Reflect.get(
    st(i, n) && n in a ? i : a,
    n,
    r
  );
}
const Km = {
  get: /* @__PURE__ */ Sd(!1, !1)
}, Wm = {
  get: /* @__PURE__ */ Sd(!1, !0)
}, Ym = {
  get: /* @__PURE__ */ Sd(!0, !1)
};
const iv = /* @__PURE__ */ new WeakMap(), av = /* @__PURE__ */ new WeakMap(), nv = /* @__PURE__ */ new WeakMap(), Zm = /* @__PURE__ */ new WeakMap();
function Xm(e) {
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
  return /* @__PURE__ */ Ba(e) ? e : Cd(
    e,
    !1,
    Bm,
    Km,
    iv
  );
}
// @__NO_SIDE_EFFECTS__
function Jm(e) {
  return Cd(
    e,
    !1,
    Vm,
    Wm,
    av
  );
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  return Cd(
    e,
    !0,
    Hm,
    Ym,
    nv
  );
}
function Cd(e, t, i, a, n) {
  if (!ot(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = n.get(e);
  if (r)
    return r;
  const s = Xm(wm(e));
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? a : i
  );
  return n.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return /* @__PURE__ */ Ba(e) ? /* @__PURE__ */ er(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ba(e) {
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
function lt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ lt(t) : e;
}
function Qm(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && jp(e, "__v_skip", !0), e;
}
const Wi = (e) => ot(e) ? /* @__PURE__ */ Nt(e) : e, Rr = (e) => ot(e) ? /* @__PURE__ */ zl(e) : e;
// @__NO_SIDE_EFFECTS__
function ei(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function q(e) {
  return lv(e, !1);
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  return lv(e, !0);
}
function lv(e, t) {
  return /* @__PURE__ */ ei(e) ? e : new ey(e, t);
}
class ey {
  constructor(t, i) {
    this.dep = new lu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ lt(t), this._value = i ? t : Wi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ Fi(t) || /* @__PURE__ */ Ba(t);
    t = a ? t : /* @__PURE__ */ lt(t), zt(t, i) && (this._rawValue = t, this._value = a ? t : Wi(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ ei(e) ? e.value : e;
}
function Pa(e) {
  return je(e) ? e() : u(e);
}
const ty = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, a) => {
    const n = e[t];
    return /* @__PURE__ */ ei(n) && !/* @__PURE__ */ ei(i) ? (n.value = i, !0) : Reflect.set(e, t, i, a);
  }
};
function sv(e) {
  return /* @__PURE__ */ er(e) ? e : new Proxy(e, ty);
}
class iy {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new lu(), { get: a, set: n } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = a, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ay(e) {
  return new iy(e);
}
class ny {
  constructor(t, i, a) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new lu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ml - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = a;
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
function ry(e, t, i = !1) {
  let a, n;
  return je(e) ? a = e : (a = e.get, n = e.set), new ny(a, n, i);
}
const Ps = {}, Qs = /* @__PURE__ */ new WeakMap();
let Gn;
function ly(e, t = !1, i = Gn) {
  if (i) {
    let a = Qs.get(i);
    a || Qs.set(i, a = []), a.push(e);
  }
}
function sy(e, t, i = it) {
  const { immediate: a, deep: n, once: r, scheduler: s, augmentJob: c, call: d } = i, y = (N) => n ? N : /* @__PURE__ */ Fi(N) || n === !1 || n === 0 ? Ra(N, 1) : Ra(N);
  let v, g, m, k, T = !1, C = !1;
  if (/* @__PURE__ */ ei(e) ? (g = () => e.value, T = /* @__PURE__ */ Fi(e)) : /* @__PURE__ */ er(e) ? (g = () => y(e), T = !0) : Pe(e) ? (C = !0, T = e.some((N) => /* @__PURE__ */ er(N) || /* @__PURE__ */ Fi(N)), g = () => e.map((N) => {
    if (/* @__PURE__ */ ei(N))
      return N.value;
    if (/* @__PURE__ */ er(N))
      return y(N);
    if (je(N))
      return d ? d(N, 2) : N();
  })) : je(e) ? t ? g = d ? () => d(e, 2) : e : g = () => {
    if (m) {
      za();
      try {
        m();
      } finally {
        ja();
      }
    }
    const N = Gn;
    Gn = v;
    try {
      return d ? d(e, 3, [k]) : e(k);
    } finally {
      Gn = N;
    }
  } : g = Di, t && n) {
    const N = g, pe = n === !0 ? 1 / 0 : n;
    g = () => Ra(N(), pe);
  }
  const x = Lm(), R = () => {
    v.stop(), x && x.active && gd(x.effects, v);
  };
  if (r && t) {
    const N = t;
    t = (...pe) => {
      const Q = N(...pe);
      return R(), Q;
    };
  }
  let L = C ? new Array(e.length).fill(Ps) : Ps;
  const P = (N) => {
    if (!(!(v.flags & 1) || !v.dirty && !N))
      if (t) {
        const pe = v.run();
        if (N || n || T || (C ? pe.some((Q, $) => zt(Q, L[$])) : zt(pe, L))) {
          m && m();
          const Q = Gn;
          Gn = v;
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
            Gn = Q;
          }
        }
      } else
        v.run();
  };
  return c && c(P), v = new qp(g), v.scheduler = s ? () => s(P, !1) : P, k = (N) => ly(N, !1, v), m = v.onStop = () => {
    const N = Qs.get(v);
    if (N) {
      if (d)
        d(N, 4);
      else
        for (const pe of N) pe();
      Qs.delete(v);
    }
  }, t ? a ? P(!0) : L = v.run() : s ? s(P.bind(null, !0), !0) : v.run(), R.pause = v.pause.bind(v), R.resume = v.resume.bind(v), R.stop = R, R;
}
function Ra(e, t = 1 / 0, i) {
  if (t <= 0 || !ot(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ ei(e))
    Ra(e.value, t, i);
  else if (Pe(e))
    for (let a = 0; a < e.length; a++)
      Ra(e[a], t, i);
  else if (Ma(e) || gn(e))
    e.forEach((a) => {
      Ra(a, t, i);
    });
  else if (zp(e)) {
    for (const a in e)
      Ra(e[a], t, i);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ra(e[a], t, i);
  }
  return e;
}
function rs(e, t, i, a) {
  try {
    return a ? e(...a) : e();
  } catch (n) {
    ou(n, t, i);
  }
}
function Mi(e, t, i, a) {
  if (je(e)) {
    const n = rs(e, t, i, a);
    return n && Mp(n) && n.catch((r) => {
      ou(r, t, i);
    }), n;
  }
  if (Pe(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(Mi(e[r], t, i, a));
    return n;
  }
}
function ou(e, t, i, a = !0) {
  const n = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || it;
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
      za(), rs(r, null, 10, [
        e,
        d,
        y
      ]), ja();
      return;
    }
  }
  oy(e, i, n, a, s);
}
function oy(e, t, i, a = !0, n = !1) {
  if (n)
    throw e;
  console.error(e);
}
const ci = [];
let ta = -1;
const Ar = [];
let hn = null, kr = 0;
const ov = /* @__PURE__ */ Promise.resolve();
let eo = null;
function It(e) {
  const t = eo || ov;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function uy(e) {
  let t = ta + 1, i = ci.length;
  for (; t < i; ) {
    const a = t + i >>> 1, n = ci[a], r = jl(n);
    r < e || r === e && n.flags & 2 ? t = a + 1 : i = a;
  }
  return t;
}
function Ad(e) {
  if (!(e.flags & 1)) {
    const t = jl(e), i = ci[ci.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jl(i) ? ci.push(e) : ci.splice(uy(t), 0, e), e.flags |= 1, uv();
  }
}
function uv() {
  eo || (eo = ov.then(fv));
}
function cv(e) {
  if (!Pe(e))
    hn && e.id === -1 ? hn.splice(kr + 1, 0, e) : e.flags & 1 || (Ar.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ar.push(e[t]);
  uv();
}
function Vf(e, t, i = ta + 1) {
  for (; i < ci.length; i++) {
    const a = ci[i];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      ci.splice(i, 1), i--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function dv(e) {
  if (Ar.length) {
    const t = [...new Set(Ar)].sort(
      (i, a) => jl(i) - jl(a)
    );
    if (Ar.length = 0, hn) {
      for (let i = 0; i < t.length; i++)
        hn.push(t[i]);
      return;
    }
    for (hn = t, kr = 0; kr < hn.length; kr++) {
      const i = hn[kr];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    hn = null, kr = 0;
  }
}
const jl = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fv(e) {
  try {
    for (ta = 0; ta < ci.length; ta++) {
      const t = ci[ta];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ta < ci.length; ta++) {
      const t = ci[ta];
      t && (t.flags &= -2);
    }
    ta = -1, ci.length = 0, dv(), eo = null, (ci.length || Ar.length) && fv();
  }
}
let Bt = null, uu = null;
function to(e) {
  const t = Bt;
  return Bt = e, uu = e && e.type.__scopeId || null, t;
}
function cy(e) {
  uu = e;
}
function dy() {
  uu = null;
}
const fy = (e) => ke;
function ke(e, t = Bt, i) {
  if (!t || e._n)
    return e;
  const a = (...n) => {
    a._d && lo(-1);
    const r = to(t), s = Da.length;
    let c;
    try {
      c = e(...n);
    } finally {
      for (let d = Da.length; d > s; d--) Ld();
      to(r), a._d && lo(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function ye(e, t) {
  if (Bt === null)
    return e;
  const i = vu(Bt), a = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, s, c, d = it] = t[n];
    r && (je(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ra(s), a.push({
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
function zn(e, t, i, a) {
  const n = e.dirs, r = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    r && (c.oldValue = r[s].value);
    let d = c.dir[a];
    d && (za(), Mi(d, i, 8, [
      e.el,
      c,
      e,
      t
    ]), ja());
  }
}
function Ii(e, t) {
  if (Xt) {
    let i = Xt.provides;
    const a = Xt.parent && Xt.parent.provides;
    a === i && (i = Xt.provides = Object.create(a)), i[e] = t;
  }
}
function Zt(e, t, i = !1) {
  const a = Sn();
  if (a || $r) {
    let n = $r ? $r._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return i && je(t) ? t.call(a && a.proxy) : t;
  }
}
const hy = /* @__PURE__ */ Symbol.for("v-scx"), py = () => Zt(hy);
function vy(e, t) {
  return cu(e, null, t);
}
function by(e, t) {
  return cu(
    e,
    null,
    { flush: "sync" }
  );
}
function Ge(e, t, i) {
  return cu(e, t, i);
}
function cu(e, t, i = it) {
  const { immediate: a, deep: n, flush: r, once: s } = i, c = $t({}, i), d = t && a || !t && r !== "post";
  let y;
  if (Kl) {
    if (r === "sync") {
      const k = py();
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
    ui(k, v && v.suspense);
  } : r !== "sync" && (g = !0, c.scheduler = (k, T) => {
    T ? k() : Ad(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), g && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const m = sy(e, t, c);
  return Kl && (y ? y.push(m) : d && m()), m;
}
function gy(e, t, i) {
  const a = this.proxy, n = vt(e) ? e.includes(".") ? hv(a, e) : () => a[e] : e.bind(a, a);
  let r;
  je(t) ? r = t : (r = t.handler, i = t);
  const s = os(this), c = cu(n, r.bind(a), i);
  return s(), c;
}
function hv(e, t) {
  const i = t.split(".");
  return () => {
    let a = e;
    for (let n = 0; n < i.length && a; n++)
      a = a[i[n]];
    return a;
  };
}
const cn = /* @__PURE__ */ new WeakMap(), pv = /* @__PURE__ */ Symbol("_vte"), du = (e) => e.__isTeleport, Wn = (e) => e && (e.disabled || e.disabled === ""), my = (e) => e && (e.defer || e.defer === ""), qf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const i = e && e.to;
  return vt(i) ? t ? t(i) : null : i;
}, yy = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, a, n, r, s, c, d, y) {
    const {
      mc: v,
      pc: g,
      pbc: m,
      o: { insert: k, querySelector: T, createText: C, createComment: x, parentNode: R }
    } = y, L = Wn(t.props);
    let { dynamicChildren: P } = t;
    const N = ($, H, G) => {
      $.shapeFlag & 16 && v(
        $.children,
        H,
        G,
        n,
        r,
        s,
        c,
        d
      );
    }, pe = ($ = t) => {
      const H = Wn($.props), G = $.target = Mc($.props, T), J = Uc(G, $, C, k);
      G && (s !== "svg" && qf(G) ? s = "svg" : s !== "mathml" && Gf(G) && (s = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(G), H || (N($, G, J), bl($, !1)));
    }, Q = ($) => {
      const H = () => {
        if (cn.get($) === H) {
          if (cn.delete($), Wn($.props)) {
            const G = R($.el) || i;
            N($, G, $.anchor), bl($, !0);
          }
          pe($);
        }
      };
      cn.set($, H), ui(H, r);
    };
    if (e == null) {
      const $ = t.el = C(""), H = t.anchor = C("");
      if (k($, i, a), k(H, i, a), my(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      L && (N(t, i, H), bl(t, !0)), pe();
    } else {
      t.el = e.el;
      const $ = t.anchor = e.anchor, H = cn.get(e);
      if (H) {
        H.flags |= 8, cn.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const G = t.target = e.target, J = t.targetAnchor = e.targetAnchor, le = Wn(e.props), B = le ? i : G, W = le ? $ : J;
      if (s === "svg" || qf(G) ? s = "svg" : (s === "mathml" || Gf(G)) && (s = "mathml"), P ? (m(
        e.dynamicChildren,
        P,
        B,
        n,
        r,
        s,
        c
      ), Id(e, t, !0)) : d || g(
        e,
        t,
        B,
        W,
        n,
        r,
        s,
        c,
        !1
      ), L)
        le ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ds(
          t,
          i,
          $,
          y,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = Mc(t.props, T);
        I && (t.target = I, Ds(
          t,
          I,
          null,
          y,
          0
        ));
      } else le && Ds(
        t,
        G,
        J,
        y,
        1
      );
      bl(t, L);
    }
  },
  remove(e, t, i, { um: a, o: { remove: n } }, r) {
    const {
      shapeFlag: s,
      children: c,
      anchor: d,
      targetStart: y,
      targetAnchor: v,
      target: g,
      props: m
    } = e, k = Wn(m), T = r || !k, C = cn.get(e);
    if (C && (C.flags |= 8, cn.delete(e)), g && (n(y), n(v)), r && n(d), !C && (k || g) && s & 16)
      for (let x = 0; x < c.length; x++) {
        const R = c[x];
        a(
          R,
          t,
          i,
          T,
          !!R.dynamicChildren
        );
      }
  },
  move: Ds,
  hydrate: _y
};
function Ds(e, t, i, { o: { insert: a }, m: n }, r = 2) {
  r === 0 && a(e.targetAnchor, t, i);
  const { el: s, anchor: c, shapeFlag: d, children: y, props: v } = e, g = r === 2;
  if (g && a(s, t, i), !cn.has(e) && (!g || Wn(v)) && d & 16)
    for (let m = 0; m < y.length; m++)
      n(
        y[m],
        t,
        i,
        2
      );
  g && a(c, t, i);
}
function _y(e, t, i, a, n, r, {
  o: { nextSibling: s, parentNode: c, querySelector: d, insert: y, createText: v }
}, g) {
  function m(x, R) {
    let L = R;
    for (; L; ) {
      if (L && L.nodeType === 8) {
        if (L.data === "teleport start anchor")
          t.targetStart = L;
        else if (L.data === "teleport anchor") {
          t.targetAnchor = L, x._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      L = s(L);
    }
  }
  function k(x, R) {
    R.anchor = g(
      s(x),
      R,
      c(x),
      i,
      a,
      n,
      r
    );
  }
  const T = t.target = Mc(
    t.props,
    d
  ), C = Wn(t.props);
  if (T) {
    const x = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (C ? (k(e, t), m(T, x), t.targetAnchor || Uc(
      T,
      t,
      v,
      y,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === T ? e : null
    )) : (t.anchor = s(e), m(T, x), t.targetAnchor || Uc(T, t, v, y), g(
      x && s(x),
      t,
      T,
      i,
      a,
      n,
      r
    ))), bl(t, C);
  } else C && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ed = yy;
function bl(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let a, n;
    for (t ? (a = e.el, n = e.anchor) : (a = e.targetStart, n = e.targetAnchor); a && a !== n; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", i.uid), a = a.nextSibling;
    i.ut();
  }
}
function Uc(e, t, i, a, n = null) {
  const r = t.targetStart = i(""), s = t.targetAnchor = i("");
  return r[pv] = s, e && (a(r, e, n), a(s, e, n)), s;
}
const Li = /* @__PURE__ */ Symbol("_leaveCb"), ll = /* @__PURE__ */ Symbol("_enterCb");
function wy() {
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
}, ky = {
  name: "BaseTransition",
  props: vv,
  setup(e, { slots: t }) {
    const i = Sn(), a = wy();
    return () => {
      const n = t.default && yv(t.default(), !0), r = n && n.length ? gv(n) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? E() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ lt(e), { mode: c } = s;
      if (a.isLeaving)
        return Xu(r);
      const d = io(r);
      if (!d)
        return Xu(r);
      let y = zc(
        d,
        s,
        a,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (g) => y = g
      );
      d.type !== jt && Bl(d, y);
      let v = i.subTree && io(i.subTree);
      if (v && v.type !== jt && !Yn(v, d) && bv(i).type !== jt) {
        let g = zc(
          v,
          s,
          a,
          i
        );
        if (Bl(v, g), c === "out-in" && d.type !== jt)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, i.job.flags & 8 || i.update(), delete g.afterLeave, v = void 0;
          }, Xu(r);
        c === "in-out" && d.type !== jt ? g.delayLeave = (m, k, T) => {
          const C = mv(
            a,
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
const Sy = ky;
function mv(e, t) {
  const { leavingVNodes: i } = e;
  let a = i.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), i.set(t.type, a)), a;
}
function zc(e, t, i, a, n) {
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
    onBeforeAppear: x,
    onAppear: R,
    onAfterAppear: L,
    onAppearCancelled: P
  } = t, N = String(e.key), pe = mv(i, e), Q = (G, J) => {
    G && Mi(
      G,
      a,
      9,
      J
    );
  }, $ = (G, J) => {
    const le = J[1];
    Q(G, J), Pe(G) ? G.every((B) => B.length <= 1) && le() : G.length <= 1 && le();
  }, H = {
    mode: s,
    persisted: c,
    beforeEnter(G) {
      let J = d;
      if (!i.isMounted)
        if (r)
          J = x || d;
        else
          return;
      G[Li] && G[Li](
        !0
        /* cancelled */
      );
      const le = pe[N];
      le && Yn(e, le) && le.el[Li] && le.el[Li](), Q(J, [G]);
    },
    enter(G) {
      if (pe[N] === e) return;
      let J = y, le = v, B = g;
      if (!i.isMounted)
        if (r)
          J = R || y, le = L || v, B = P || g;
        else
          return;
      let W = !1;
      G[ll] = (j) => {
        W || (W = !0, j ? Q(B, [G]) : Q(le, [G]), H.delayedLeave && H.delayedLeave(), G[ll] = void 0);
      };
      const I = G[ll].bind(null, !1);
      J ? $(J, [G, I]) : I();
    },
    leave(G, J) {
      const le = String(e.key);
      if (G[ll] && G[ll](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return J();
      Q(m, [G]);
      let B = !1;
      G[Li] = (I) => {
        B || (B = !0, J(), I ? Q(C, [G]) : Q(T, [G]), G[Li] = void 0, pe[le] === e && delete pe[le]);
      };
      const W = G[Li].bind(null, !1);
      pe[le] = e, k ? $(k, [G, W]) : W();
    },
    clone(G) {
      const J = zc(
        G,
        t,
        i,
        a,
        n
      );
      return n && n(J), J;
    }
  };
  return H;
}
function Xu(e) {
  if (fu(e))
    return e = wn(e), e.children = null, e;
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
    if (t & 32 && je(i.default))
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
  let a = [], n = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const c = i == null ? s.key : String(i) + String(s.key != null ? s.key : r);
    s.type === Y ? (s.patchFlag & 128 && n++, a = a.concat(
      yv(s.children, t, c)
    )) : (t || s.type !== jt) && a.push(c != null ? wn(s, { key: c }) : s);
  }
  if (n > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Vt(e, t) {
  return je(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $t({ name: e.name }, t, { setup: e })
  ) : e;
}
function Cy() {
  const e = Sn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _v(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ty(e) {
  const t = Sn(), i = /* @__PURE__ */ rv(null);
  if (t) {
    const n = t.refs === it ? t.refs = {} : t.refs;
    Object.defineProperty(n, e, {
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
const ao = /* @__PURE__ */ new WeakMap();
function Tl(e, t, i, a, n = !1) {
  if (Pe(e)) {
    e.forEach(
      (C, x) => Tl(
        C,
        t && (Pe(t) ? t[x] : t),
        i,
        a,
        n
      )
    );
    return;
  }
  if (Er(a) && !n) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Tl(e, t, i, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? vu(a.component) : a.el, s = n ? null : r, { i: c, r: d } = e, y = t && t.r, v = c.refs === it ? c.refs = {} : c.refs, g = c.setupState, m = /* @__PURE__ */ lt(g), k = g === it ? Fp : (C) => Kf(v, C) ? !1 : st(m, C), T = (C, x) => !(x && Kf(v, x));
  if (y != null && y !== d) {
    if (Wf(t), vt(y))
      v[y] = null, k(y) && (g[y] = null);
    else if (/* @__PURE__ */ ei(y)) {
      const C = t;
      T(y, C.k) && (y.value = null), C.k && (v[C.k] = null);
    }
  }
  if (je(d))
    rs(d, c, 12, [s, v]);
  else {
    const C = vt(d), x = /* @__PURE__ */ ei(d);
    if (C || x) {
      const R = () => {
        if (e.f) {
          const L = C ? k(d) ? g[d] : v[d] : T() || !e.k ? d.value : v[e.k];
          if (n)
            Pe(L) && gd(L, r);
          else if (Pe(L))
            L.includes(r) || L.push(r);
          else if (C)
            v[d] = [r], k(d) && (g[d] = v[d]);
          else {
            const P = [r];
            T(d, e.k) && (d.value = P), e.k && (v[e.k] = P);
          }
        } else C ? (v[d] = s, k(d) && (g[d] = s)) : x && (T(d, e.k) && (d.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const L = () => {
          R(), ao.delete(e);
        };
        L.id = -1, ao.set(e, L), ui(L, i);
      } else
        Wf(e), R();
    }
  }
}
function Wf(e) {
  const t = ao.get(e);
  t && (t.flags |= 8, ao.delete(e));
}
ru().requestIdleCallback;
ru().cancelIdleCallback;
const Er = (e) => !!e.type.__asyncLoader, fu = (e) => e.type.__isKeepAlive;
function Ay(e, t) {
  wv(e, "a", t);
}
function Ey(e, t) {
  wv(e, "da", t);
}
function wv(e, t, i = Xt) {
  const a = e.__wdc || (e.__wdc = () => {
    let n = i;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (hu(t, a, i), i) {
    let n = i.parent;
    for (; n && n.parent; )
      fu(n.parent.vnode) && $y(a, t, i, n), n = n.parent;
  }
}
function $y(e, t, i, a) {
  const n = hu(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  ls(() => {
    gd(a[t], n);
  }, i);
}
function hu(e, t, i = Xt, a = !1) {
  if (i) {
    const n = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...s) => {
      za();
      const c = os(i), d = Mi(t, i, e, s);
      return c(), ja(), d;
    });
    return a ? n.unshift(r) : n.push(r), r;
  }
}
const qa = (e) => (t, i = Xt) => {
  (!Kl || e === "sp") && hu(e, (...a) => t(...a), i);
}, kv = qa("bm"), xt = qa("m"), Sv = qa(
  "bu"
), xy = qa("u"), Ti = qa(
  "bum"
), ls = qa("um"), Oy = qa(
  "sp"
), Ny = qa("rtg"), Ry = qa("rtc");
function Iy(e, t = Xt) {
  hu("ec", e, t);
}
const $d = "components", Ly = "directives";
function Je(e, t) {
  return Od($d, e, !0, t) || e;
}
const Cv = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return vt(e) ? Od($d, e, !1) || e : e || Cv;
}
function Yf(e) {
  return Od(Ly, e);
}
function Od(e, t, i = !0, a = !1) {
  const n = Bt || Xt;
  if (n) {
    const r = n.type;
    if (e === $d) {
      const c = b1(
        r,
        !1
      );
      if (c && (c === t || c === Qt(t) || c === au(Qt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zf(n[e] || r[e], t) || // global registration
      Zf(n.appContext[e], t)
    );
    return !s && a ? r : s;
  }
}
function Zf(e, t) {
  return e && (e[t] || e[Qt(t)] || e[au(Qt(t))]);
}
function he(e, t, i, a) {
  let n;
  const r = i, s = Pe(e);
  if (s || vt(e)) {
    const c = s && /* @__PURE__ */ er(e);
    let d = !1, y = !1;
    c && (d = !/* @__PURE__ */ Fi(e), y = /* @__PURE__ */ Ba(e), e = su(e)), n = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      n[v] = t(
        d ? y ? Rr(Wi(e[v])) : Wi(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let c = 0; c < e; c++)
      n[c] = t(c + 1, c, void 0, r);
  } else if (ot(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (c, d) => t(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      n = new Array(c.length);
      for (let d = 0, y = c.length; d < y; d++) {
        const v = c[d];
        n[d] = t(e[v], v, d, r);
      }
    }
  else
    n = [];
  return n;
}
function He(e, t, i, a, n, r) {
  if (i == null && (i = {}), Bt.ce || Bt.parent && Er(Bt.parent) && Bt.parent.ce) {
    const y = i, v = Object.keys(y).length > 0;
    return t !== "default" && (y.name = t), h(), Fe(
      Y,
      null,
      [de("slot", y, a && a())],
      v ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const c = Da.length;
  h();
  let d;
  try {
    const y = s && Tv(s(i)), v = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    y && y.key;
    d = Fe(
      Y,
      {
        key: (v && !Ki(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!y && a ? "_fb" : "")
      },
      y || (a ? a() : []),
      y && e._ === 1 ? 64 : -2
    );
  } catch (y) {
    for (let v = Da.length; v > c; v--) Ld();
    throw y;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !n && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Tv(e) {
  return e.some((t) => Vl(t) ? !(t.type === jt || t.type === Y && !Tv(t.children)) : !0) ? e : null;
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
    $nextTick: (e) => e.n || (e.n = It.bind(e.proxy)),
    $watch: (e) => gy.bind(e)
  })
), Ju = (e, t) => e !== it && !e.__isScriptSetup && st(e, t), Py = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: a, data: n, props: r, accessCache: s, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return a[t];
          case 2:
            return n[t];
          case 4:
            return i[t];
          case 3:
            return r[t];
        }
      else {
        if (Ju(a, t))
          return s[t] = 1, a[t];
        if (n !== it && st(n, t))
          return s[t] = 2, n[t];
        if (st(r, t))
          return s[t] = 3, r[t];
        if (i !== it && st(i, t))
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
    if (i !== it && st(i, t))
      return s[t] = 4, i[t];
    if (
      // global properties
      g = d.config.globalProperties, st(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, i) {
    const { data: a, setupState: n, ctx: r } = e;
    return Ju(n, t) ? (n[t] = i, !0) : a !== it && st(a, t) ? (a[t] = i, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: a, appContext: n, props: r, type: s }
  }, c) {
    let d;
    return !!(i[c] || e !== it && c[0] !== "$" && st(e, c) || Ju(t, c) || st(r, c) || st(a, c) || st(Al, c) || st(n.config.globalProperties, c) || (d = s.__cssModules) && d[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : st(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Dy() {
  return Av().slots;
}
function Fy() {
  return Av().attrs;
}
function Av(e) {
  const t = Sn();
  return t.setupContext || (t.setupContext = Yv(t));
}
function no(e) {
  return Pe(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function My(e, t) {
  return !e || !t ? e || t : Pe(e) && Pe(t) ? e.concat(t) : $t({}, no(e), no(t));
}
let Bc = !0;
function Uy(e) {
  const t = $v(e), i = e.proxy, a = e.ctx;
  Bc = !1, t.beforeCreate && Xf(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
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
    deactivated: x,
    beforeDestroy: R,
    beforeUnmount: L,
    destroyed: P,
    unmounted: N,
    render: pe,
    renderTracked: Q,
    renderTriggered: $,
    errorCaptured: H,
    serverPrefetch: G,
    // public API
    expose: J,
    inheritAttrs: le,
    // assets
    components: B,
    directives: W,
    filters: I
  } = t;
  if (y && zy(y, a, null), s)
    for (const re in s) {
      const X = s[re];
      je(X) && (a[re] = X.bind(i));
    }
  if (n) {
    const re = n.call(i, i);
    ot(re) && (e.data = /* @__PURE__ */ Nt(re));
  }
  if (Bc = !0, r)
    for (const re in r) {
      const X = r[re], be = je(X) ? X.bind(i, i) : je(X.get) ? X.get.bind(i, i) : Di, Te = !je(X) && je(X.set) ? X.set.bind(i) : Di, Le = z({
        get: be,
        set: Te
      });
      Object.defineProperty(a, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Oe) => Le.value = Oe
      });
    }
  if (c)
    for (const re in c)
      Ev(c[re], a, i, re);
  if (d) {
    const re = je(d) ? d.call(i) : d;
    Reflect.ownKeys(re).forEach((X) => {
      Ii(X, re[X]);
    });
  }
  v && Xf(v, e, "c");
  function Z(re, X) {
    Pe(X) ? X.forEach((be) => re(be.bind(i))) : X && re(X.bind(i));
  }
  if (Z(kv, g), Z(xt, m), Z(Sv, k), Z(xy, T), Z(Ay, C), Z(Ey, x), Z(Iy, H), Z(Ry, Q), Z(Ny, $), Z(Ti, L), Z(ls, N), Z(Oy, G), Pe(J))
    if (J.length) {
      const re = e.exposed || (e.exposed = {});
      J.forEach((X) => {
        Object.defineProperty(re, X, {
          get: () => i[X],
          set: (be) => i[X] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  pe && e.render === Di && (e.render = pe), le != null && (e.inheritAttrs = le), B && (e.components = B), W && (e.directives = W), G && _v(e);
}
function zy(e, t, i = Di) {
  Pe(e) && (e = Hc(e));
  for (const a in e) {
    const n = e[a];
    let r;
    ot(n) ? "default" in n ? r = Zt(
      n.from || a,
      n.default,
      !0
    ) : r = Zt(n.from || a) : r = Zt(n), /* @__PURE__ */ ei(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[a] = r;
  }
}
function Xf(e, t, i) {
  Mi(
    Pe(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function Ev(e, t, i, a) {
  let n = a.includes(".") ? hv(i, a) : () => i[a];
  if (vt(e)) {
    const r = t[e];
    je(r) && Ge(n, r);
  } else if (je(e))
    Ge(n, e.bind(i));
  else if (ot(e))
    if (Pe(e))
      e.forEach((r) => Ev(r, t, i, a));
    else {
      const r = je(e.handler) ? e.handler.bind(i) : t[e.handler];
      je(r) && Ge(n, r, e);
    }
}
function $v(e) {
  const t = e.type, { mixins: i, extends: a } = t, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !n.length && !i && !a ? d = t : (d = {}, n.length && n.forEach(
    (y) => ro(d, y, s, !0)
  ), ro(d, t, s)), ot(t) && r.set(t, d), d;
}
function ro(e, t, i, a = !1) {
  const { mixins: n, extends: r } = t;
  r && ro(e, r, i, !0), n && n.forEach(
    (s) => ro(e, s, i, !0)
  );
  for (const s in t)
    if (!(a && s === "expose")) {
      const c = jy[s] || i && i[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const jy = {
  data: Jf,
  props: Qf,
  emits: Qf,
  // objects
  methods: gl,
  computed: gl,
  // lifecycle
  beforeCreate: oi,
  created: oi,
  beforeMount: oi,
  mounted: oi,
  beforeUpdate: oi,
  updated: oi,
  beforeDestroy: oi,
  beforeUnmount: oi,
  destroyed: oi,
  unmounted: oi,
  activated: oi,
  deactivated: oi,
  errorCaptured: oi,
  serverPrefetch: oi,
  // assets
  components: gl,
  directives: gl,
  // watch
  watch: Hy,
  // provide / inject
  provide: Jf,
  inject: By
};
function Jf(e, t) {
  return t ? e ? function() {
    return $t(
      je(e) ? e.call(this, this) : e,
      je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function By(e, t) {
  return gl(Hc(e), Hc(t));
}
function Hc(e) {
  if (Pe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function oi(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gl(e, t) {
  return e ? $t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qf(e, t) {
  return e ? Pe(e) && Pe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $t(
    /* @__PURE__ */ Object.create(null),
    no(e),
    no(t ?? {})
  ) : t;
}
function Hy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = $t(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    i[a] = oi(e[a], t[a]);
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
let Vy = 0;
function qy(e, t) {
  return function(a, n = null) {
    je(a) || (a = $t({}, a)), n != null && !ot(n) && (n = null);
    const r = xv(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const y = r.app = {
      _uid: Vy++,
      _component: a,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: m1,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return s.has(v) || (v && je(v.install) ? (s.add(v), v.install(y, ...g)) : je(v) && (s.add(v), v(y, ...g))), y;
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
          const k = y._ceVNode || de(a, n);
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
function Ov(e, t, i = it) {
  const a = Sn(), n = Qt(t), r = Va(t), s = Nv(e, n), c = ay((d, y) => {
    let v, g = it, m;
    return by(() => {
      const k = e[n];
      zt(v, k) && (v = k, y());
    }), {
      get() {
        return d(), i.get ? i.get(v) : v;
      },
      set(k) {
        const T = i.set ? i.set(k) : k;
        if (!zt(T, v) && !(g !== it && zt(k, g)))
          return;
        const C = a.vnode.props, x = !!(C && // check if parent has passed v-model
        (t in C || n in C || r in C) && (`onUpdate:${t}` in C || `onUpdate:${n}` in C || `onUpdate:${r}` in C));
        x || (v = k, y()), a.emit(`update:${t}`, T), zt(k, g) && (zt(k, T) && !zt(T, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        x && g !== it && !zt(T, v)) && y(), g = k, m = T;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let d = 0;
    return {
      next() {
        return d < 2 ? { value: d++ ? s || it : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Nv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Va(t)}Modifiers`];
function Gy(e, t, ...i) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || it;
  let n = i;
  const r = t.startsWith("update:"), s = r && Nv(a, t.slice(7));
  s && (s.trim && (n = i.map((v) => vt(v) ? v.trim() : v)), s.number && (n = n.map(nu)));
  let c, d = a[c = Gu(t)] || // also try camelCase event handler (#2249)
  a[c = Gu(Qt(t))];
  !d && r && (d = a[c = Gu(Va(t))]), d && Mi(
    d,
    e,
    6,
    n
  );
  const y = a[c + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Mi(
      y,
      e,
      6,
      n
    );
  }
}
const Ky = /* @__PURE__ */ new WeakMap();
function Rv(e, t, i = !1) {
  const a = i ? Ky : t.emitsCache, n = a.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let s = {}, c = !1;
  if (!je(e)) {
    const d = (y) => {
      const v = Rv(y, t, !0);
      v && (c = !0, $t(s, v));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (ot(e) && a.set(e, null), null) : (Pe(r) ? r.forEach((d) => s[d] = null) : $t(s, r), ot(e) && a.set(e, s), s);
}
function pu(e, t) {
  return !e || !eu(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Va(t)) || st(e, t));
}
function eh(e) {
  const {
    type: t,
    vnode: i,
    proxy: a,
    withProxy: n,
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
  } = e, x = to(e);
  let R, L;
  try {
    if (i.shapeFlag & 4) {
      const N = n || a, pe = N;
      R = ra(
        y.call(
          pe,
          N,
          v,
          g,
          k,
          m,
          T
        )
      ), L = c;
    } else {
      const N = t;
      R = ra(
        N.length > 1 ? N(
          g,
          { attrs: c, slots: s, emit: d }
        ) : N(
          g,
          null
        )
      ), L = t.props ? c : Wy(c);
    }
  } catch (N) {
    Da.length = 0, ou(N, e, 1), R = de(jt);
  }
  let P = R;
  if (L && C !== !1) {
    const N = Object.keys(L), { shapeFlag: pe } = P;
    N.length && pe & 7 && (r && N.some(tu) && (L = Yy(
      L,
      r
    )), P = wn(P, L, !1, !0));
  }
  if (i.dirs && (P = wn(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const N = du(P.type) && io(P) || P;
    Bl(N, i.transition);
  }
  return R = P, to(x), R;
}
const Wy = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || eu(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Yy = (e, t) => {
  const i = {};
  for (const a in e)
    (!tu(a) || !(a.slice(9) in t)) && (i[a] = e[a]);
  return i;
};
function Zy(e, t, i) {
  const { props: a, children: n, component: r } = e, { props: s, children: c, patchFlag: d } = t, y = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? th(a, s, y) : !!s;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const m = v[g];
        if (Iv(s, a, m) && !pu(y, m))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : a === s ? !1 : a ? s ? th(a, s, y) : !0 : !!s;
  return !1;
}
function th(e, t, i) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < a.length; n++) {
    const r = a[n];
    if (Iv(t, e, r) && !pu(i, r))
      return !0;
  }
  return !1;
}
function Iv(e, t, i) {
  const a = e[i], n = t[i];
  return i === "style" && ot(a) && ot(n) ? !Ua(a, n) : a !== n;
}
function Xy({ vnode: e, parent: t, suspense: i }, a) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = a, e = n), n === e)
      (e = t.vnode).el = a, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = a);
}
const Lv = {}, Pv = () => Object.create(Lv), Dv = (e) => Object.getPrototypeOf(e) === Lv;
function Jy(e, t, i, a = !1) {
  const n = {}, r = Pv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fv(e, t, n, r);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  i ? e.props = a ? n : /* @__PURE__ */ Jm(n) : e.type.props ? e.props = n : e.props = r, e.attrs = r;
}
function Qy(e, t, i, a) {
  const {
    props: n,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = /* @__PURE__ */ lt(n), [d] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let m = v[g];
        if (pu(e.emitsOptions, m))
          continue;
        const k = t[m];
        if (d)
          if (st(r, m))
            k !== r[m] && (r[m] = k, y = !0);
          else {
            const T = Qt(m);
            n[T] = Vc(
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
    Fv(e, t, n, r) && (y = !0);
    let v;
    for (const g in c)
      (!t || // for camelCase
      !st(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Va(g)) === g || !st(t, v))) && (d ? i && // for camelCase
      (i[g] !== void 0 || // for kebab-case
      i[v] !== void 0) && (n[g] = Vc(
        d,
        c,
        g,
        void 0,
        e,
        !0
      )) : delete n[g]);
    if (r !== c)
      for (const g in r)
        (!t || !st(t, g)) && (delete r[g], y = !0);
  }
  y && Na(e.attrs, "set", "");
}
function Fv(e, t, i, a) {
  const [n, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let d in t) {
      if (kl(d))
        continue;
      const y = t[d];
      let v;
      n && st(n, v = Qt(d)) ? !r || !r.includes(v) ? i[v] = y : (c || (c = {}))[v] = y : pu(e.emitsOptions, d) || (!(d in a) || y !== a[d]) && (a[d] = y, s = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ lt(i), y = c || it;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      i[g] = Vc(
        n,
        d,
        g,
        y[g],
        e,
        !st(y, g)
      );
    }
  }
  return s;
}
function Vc(e, t, i, a, n, r) {
  const s = e[i];
  if (s != null) {
    const c = st(s, "default");
    if (c && a === void 0) {
      const d = s.default;
      if (s.type !== Function && !s.skipFactory && je(d)) {
        const { propsDefaults: y } = n;
        if (i in y)
          a = y[i];
        else {
          const v = os(n);
          a = y[i] = d.call(
            null,
            t
          ), v();
        }
      } else
        a = d;
      n.ce && n.ce._setProp(i, a);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? a = !1 : s[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Va(i)) && (a = !0));
  }
  return a;
}
const e1 = /* @__PURE__ */ new WeakMap();
function Mv(e, t, i = !1) {
  const a = i ? e1 : t.propsCache, n = a.get(e);
  if (n)
    return n;
  const r = e.props, s = {}, c = [];
  let d = !1;
  if (!je(e)) {
    const v = (g) => {
      d = !0;
      const [m, k] = Mv(g, t, !0);
      $t(s, m), k && c.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return ot(e) && a.set(e, Tr), Tr;
  if (Pe(r))
    for (let v = 0; v < r.length; v++) {
      const g = Qt(r[v]);
      ih(g) && (s[g] = it);
    }
  else if (r)
    for (const v in r) {
      const g = Qt(v);
      if (ih(g)) {
        const m = r[v], k = s[g] = Pe(m) || je(m) ? { type: m } : $t({}, m), T = k.type;
        let C = !1, x = !0;
        if (Pe(T))
          for (let R = 0; R < T.length; ++R) {
            const L = T[R], P = je(L) && L.name;
            if (P === "Boolean") {
              C = !0;
              break;
            } else P === "String" && (x = !1);
          }
        else
          C = je(T) && T.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = x, (C || st(k, "default")) && c.push(g);
      }
    }
  const y = [s, c];
  return ot(e) && a.set(e, y), y;
}
function ih(e) {
  return e[0] !== "$" && !kl(e);
}
const Nd = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Pe(e) ? e.map(ra) : [ra(e)], t1 = (e, t, i) => {
  if (t._n)
    return t;
  const a = ke((...n) => Rd(t(...n)), i);
  return a._c = !1, a;
}, Uv = (e, t, i) => {
  const a = e._ctx;
  for (const n in e) {
    if (Nd(n)) continue;
    const r = e[n];
    if (je(r))
      t[n] = t1(n, r, a);
    else if (r != null) {
      const s = Rd(r);
      t[n] = () => s;
    }
  }
}, zv = (e, t) => {
  const i = Rd(t);
  e.slots.default = () => i;
}, jv = (e, t, i) => {
  for (const a in t)
    (i || !Nd(a)) && (e[a] = t[a]);
}, i1 = (e, t, i) => {
  const a = e.slots = Pv();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (jv(a, t, i), i && jp(a, "_", n, !0)) : Uv(t, a);
  } else t && zv(e, t);
}, a1 = (e, t, i) => {
  const { vnode: a, slots: n } = e;
  let r = !0, s = it;
  if (a.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : jv(n, t, i) : (r = !t.$stable, Uv(t, n)), s = t;
  } else t && (zv(e, t), s = { default: 1 });
  if (r)
    for (const c in n)
      !Nd(c) && s[c] == null && delete n[c];
}, ui = o1;
function n1(e) {
  return r1(e);
}
function r1(e, t) {
  const i = ru();
  i.__VUE__ = !0;
  const {
    insert: a,
    remove: n,
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
  } = e, C = (S, O, D, V = null, U = null, ee = null, ne = void 0, oe = null, me = !!O.dynamicChildren) => {
    if (S === O)
      return;
    S && !Yn(S, O) && (V = te(S), Oe(S, U, ee, !0), S = null), O.patchFlag === -2 && (me = !1, O.dynamicChildren = null);
    const { type: ue, ref: Ne, shapeFlag: we } = O;
    switch (ue) {
      case ss:
        x(S, O, D, V);
        break;
      case jt:
        R(S, O, D, V);
        break;
      case Ws:
        S == null && L(O, D, V, ne);
        break;
      case Y:
        B(
          S,
          O,
          D,
          V,
          U,
          ee,
          ne,
          oe,
          me
        );
        break;
      default:
        we & 1 ? pe(
          S,
          O,
          D,
          V,
          U,
          ee,
          ne,
          oe,
          me
        ) : we & 6 ? W(
          S,
          O,
          D,
          V,
          U,
          ee,
          ne,
          oe,
          me
        ) : (we & 64 || we & 128) && ue.process(
          S,
          O,
          D,
          V,
          U,
          ee,
          ne,
          oe,
          me,
          ct
        );
    }
    Ne != null && U ? Tl(Ne, S && S.ref, ee, O || S, !O) : Ne == null && S && S.ref != null && Tl(S.ref, null, ee, S, !0);
  }, x = (S, O, D, V) => {
    if (S == null)
      a(
        O.el = c(O.children),
        D,
        V
      );
    else {
      const U = O.el = S.el;
      O.children !== S.children && y(U, O.children);
    }
  }, R = (S, O, D, V) => {
    S == null ? a(
      O.el = d(O.children || ""),
      D,
      V
    ) : O.el = S.el;
  }, L = (S, O, D, V) => {
    [S.el, S.anchor] = T(
      S.children,
      O,
      D,
      V,
      S.el,
      S.anchor
    );
  }, P = ({ el: S, anchor: O }, D, V) => {
    let U;
    for (; S && S !== O; )
      U = m(S), a(S, D, V), S = U;
    a(O, D, V);
  }, N = ({ el: S, anchor: O }) => {
    let D;
    for (; S && S !== O; )
      D = m(S), n(S), S = D;
    n(O);
  }, pe = (S, O, D, V, U, ee, ne, oe, me) => {
    if (O.type === "svg" ? ne = "svg" : O.type === "math" && (ne = "mathml"), S == null)
      Q(
        O,
        D,
        V,
        U,
        ee,
        ne,
        oe,
        me
      );
    else {
      const ue = S.el && S.el._isVueCE ? S.el : null;
      try {
        ue && ue._beginPatch(), G(
          S,
          O,
          U,
          ee,
          ne,
          oe,
          me
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, Q = (S, O, D, V, U, ee, ne, oe) => {
    let me, ue;
    const { props: Ne, shapeFlag: we, transition: $e, dirs: Re } = S;
    if (me = S.el = s(
      S.type,
      ee,
      Ne && Ne.is,
      Ne
    ), we & 8 ? v(me, S.children) : we & 16 && H(
      S.children,
      me,
      null,
      V,
      U,
      Qu(S, ee),
      ne,
      oe
    ), Re && zn(S, null, V, "created"), $(me, S, S.scopeId, ne, V), Ne) {
      for (const Ze in Ne)
        Ze !== "value" && !kl(Ze) && r(me, Ze, null, Ne[Ze], ee, V);
      "value" in Ne && r(me, "value", null, Ne.value, ee), (ue = Ne.onVnodeBeforeMount) && ea(ue, V, S);
    }
    Re && zn(S, null, V, "beforeMount");
    const Ve = l1(U, $e);
    Ve && $e.beforeEnter(me), a(me, O, D), ((ue = Ne && Ne.onVnodeMounted) || Ve || Re) && ui(() => {
      ue && ea(ue, V, S), Ve && $e.enter(me), Re && zn(S, null, V, "mounted");
    }, U);
  }, $ = (S, O, D, V, U) => {
    if (D && k(S, D), V)
      for (let ee = 0; ee < V.length; ee++)
        k(S, V[ee]);
    if (U) {
      let ee = U.subTree;
      if (O === ee || Vv(ee.type) && (ee.ssContent === O || ee.ssFallback === O)) {
        const ne = U.vnode;
        $(
          S,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          U.parent
        );
      }
    }
  }, H = (S, O, D, V, U, ee, ne, oe, me = 0) => {
    for (let ue = me; ue < S.length; ue++) {
      const Ne = S[ue] = oe ? Oa(S[ue]) : ra(S[ue]);
      C(
        null,
        Ne,
        O,
        D,
        V,
        U,
        ee,
        ne,
        oe
      );
    }
  }, G = (S, O, D, V, U, ee, ne) => {
    const oe = O.el = S.el;
    let { patchFlag: me, dynamicChildren: ue, dirs: Ne } = O;
    me |= S.patchFlag & 16;
    const we = S.props || it, $e = O.props || it;
    let Re;
    if (D && jn(D, !1), (Re = $e.onVnodeBeforeUpdate) && ea(Re, D, O, S), Ne && zn(O, S, D, "beforeUpdate"), D && jn(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    ue && (!S.dynamicChildren || S.dynamicChildren.length !== ue.length) && (me = 0, ne = !1, ue = null), (we.innerHTML && $e.innerHTML == null || we.textContent && $e.textContent == null) && v(oe, ""), ue ? J(
      S.dynamicChildren,
      ue,
      oe,
      D,
      V,
      Qu(O, U),
      ee
    ) : ne || X(
      S,
      O,
      oe,
      null,
      D,
      V,
      Qu(O, U),
      ee,
      !1
    ), me > 0) {
      if (me & 16)
        le(oe, we, $e, D, U);
      else if (me & 2 && we.class !== $e.class && r(oe, "class", null, $e.class, U), me & 4 && r(oe, "style", we.style, $e.style, U), me & 8) {
        const Ve = O.dynamicProps;
        for (let Ze = 0; Ze < Ve.length; Ze++) {
          const qe = Ve[Ze], at = we[qe], dt = $e[qe];
          (dt !== at || qe === "value") && r(oe, qe, at, dt, U, D);
        }
      }
      me & 1 && S.children !== O.children && v(oe, O.children);
    } else !ne && ue == null && le(oe, we, $e, D, U);
    ((Re = $e.onVnodeUpdated) || Ne) && ui(() => {
      Re && ea(Re, D, O, S), Ne && zn(O, S, D, "updated");
    }, V);
  }, J = (S, O, D, V, U, ee, ne) => {
    for (let oe = 0; oe < O.length; oe++) {
      const me = S[oe], ue = O[oe], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (me.type === Y || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yn(me, ue) || // - In the case of a component, it could contain anything.
        me.shapeFlag & 198) ? g(me.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      C(
        me,
        ue,
        Ne,
        null,
        V,
        U,
        ee,
        ne,
        !0
      );
    }
  }, le = (S, O, D, V, U) => {
    if (O !== D) {
      if (O !== it)
        for (const ee in O)
          !kl(ee) && !(ee in D) && r(
            S,
            ee,
            O[ee],
            null,
            U,
            V
          );
      for (const ee in D) {
        if (kl(ee)) continue;
        const ne = D[ee], oe = O[ee];
        ne !== oe && ee !== "value" && r(S, ee, oe, ne, U, V);
      }
      "value" in D && r(S, "value", O.value, D.value, U);
    }
  }, B = (S, O, D, V, U, ee, ne, oe, me) => {
    const ue = O.el = S ? S.el : c(""), Ne = O.anchor = S ? S.anchor : c("");
    let { patchFlag: we, dynamicChildren: $e, slotScopeIds: Re } = O;
    Re && (oe = oe ? oe.concat(Re) : Re), S == null ? (a(ue, D, V), a(Ne, D, V), H(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      D,
      Ne,
      U,
      ee,
      ne,
      oe,
      me
    )) : we > 0 && we & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === $e.length ? (J(
      S.dynamicChildren,
      $e,
      D,
      U,
      ee,
      ne,
      oe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || U && O === U.subTree) && Id(
      S,
      O,
      !0
      /* shallow */
    )) : X(
      S,
      O,
      D,
      Ne,
      U,
      ee,
      ne,
      oe,
      me
    );
  }, W = (S, O, D, V, U, ee, ne, oe, me) => {
    O.slotScopeIds = oe, S == null ? O.shapeFlag & 512 ? U.ctx.activate(
      O,
      D,
      V,
      ne,
      me
    ) : I(
      O,
      D,
      V,
      U,
      ee,
      ne,
      me
    ) : j(S, O, me);
  }, I = (S, O, D, V, U, ee, ne) => {
    const oe = S.component = f1(
      S,
      V,
      U
    );
    if (fu(S) && (oe.ctx.renderer = ct), h1(oe, !1, ne), oe.asyncDep) {
      if (U && U.registerDep(oe, Z, ne), !S.el) {
        const me = oe.subTree = de(jt);
        R(null, me, O, D), S.placeholder = me.el;
      }
    } else
      Z(
        oe,
        S,
        O,
        D,
        U,
        ee,
        ne
      );
  }, j = (S, O, D) => {
    const V = O.component = S.component;
    if (Zy(S, O, D))
      if (V.asyncDep && !V.asyncResolved) {
        re(V, O, D);
        return;
      } else
        V.next = O, V.update();
    else
      O.el = S.el, V.vnode = O;
  }, Z = (S, O, D, V, U, ee, ne) => {
    const oe = () => {
      if (S.isMounted) {
        let { next: we, bu: $e, u: Re, parent: Ve, vnode: Ze } = S;
        {
          const bt = Bv(S);
          if (bt) {
            we && (we.el = Ze.el, re(S, we, ne)), bt.asyncDep.then(() => {
              ui(() => {
                S.isUnmounted || ue();
              }, U);
            });
            return;
          }
        }
        let qe = we, at;
        jn(S, !1), we ? (we.el = Ze.el, re(S, we, ne)) : we = Ze, $e && Ks($e), (at = we.props && we.props.onVnodeBeforeUpdate) && ea(at, Ve, we, Ze), jn(S, !0);
        const dt = eh(S), _t = S.subTree;
        S.subTree = dt, C(
          _t,
          dt,
          // parent may have changed if it's in a teleport
          g(_t.el),
          // anchor may have changed if it's in a fragment
          te(_t),
          S,
          U,
          ee
        ), we.el = dt.el, qe === null && Xy(S, dt.el), Re && ui(Re, U), (at = we.props && we.props.onVnodeUpdated) && ui(
          () => ea(at, Ve, we, Ze),
          U
        );
      } else {
        let we;
        const { el: $e, props: Re } = O, { bm: Ve, m: Ze, parent: qe, root: at, type: dt } = S, _t = Er(O);
        jn(S, !1), Ve && Ks(Ve), !_t && (we = Re && Re.onVnodeBeforeMount) && ea(we, qe, O), jn(S, !0);
        {
          at.ce && at.ce._hasShadowRoot() && at.ce._injectChildStyle(
            dt,
            S.parent ? S.parent.type : void 0
          );
          const bt = S.subTree = eh(S);
          C(
            null,
            bt,
            D,
            V,
            S,
            U,
            ee
          ), O.el = bt.el;
        }
        if (Ze && ui(Ze, U), !_t && (we = Re && Re.onVnodeMounted)) {
          const bt = O;
          ui(
            () => ea(we, qe, bt),
            U
          );
        }
        (O.shapeFlag & 256 || qe && Er(qe.vnode) && qe.vnode.shapeFlag & 256) && S.a && ui(S.a, U), S.isMounted = !0, O = D = V = null;
      }
    };
    S.scope.on();
    const me = S.effect = new qp(oe);
    S.scope.off();
    const ue = S.update = me.run.bind(me), Ne = S.job = me.runIfDirty.bind(me);
    Ne.i = S, Ne.id = S.uid, me.scheduler = () => Ad(Ne), jn(S, !0), ue();
  }, re = (S, O, D) => {
    O.component = S;
    const V = S.vnode.props;
    S.vnode = O, S.next = null, Qy(S, O.props, V, D), a1(S, O.children, D), za(), Vf(S), ja();
  }, X = (S, O, D, V, U, ee, ne, oe, me = !1) => {
    const ue = S && S.children, Ne = S ? S.shapeFlag : 0, we = O.children, { patchFlag: $e, shapeFlag: Re } = O;
    if ($e > 0) {
      if ($e & 128) {
        Te(
          ue,
          we,
          D,
          V,
          U,
          ee,
          ne,
          oe,
          me
        );
        return;
      } else if ($e & 256) {
        be(
          ue,
          we,
          D,
          V,
          U,
          ee,
          ne,
          oe,
          me
        );
        return;
      }
    }
    Re & 8 ? (Ne & 16 && K(ue, U, ee), we !== ue && v(D, we)) : Ne & 16 ? Re & 16 ? Te(
      ue,
      we,
      D,
      V,
      U,
      ee,
      ne,
      oe,
      me
    ) : K(ue, U, ee, !0) : (Ne & 8 && v(D, ""), Re & 16 && H(
      we,
      D,
      V,
      U,
      ee,
      ne,
      oe,
      me
    ));
  }, be = (S, O, D, V, U, ee, ne, oe, me) => {
    S = S || Tr, O = O || Tr;
    const ue = S.length, Ne = O.length, we = Math.min(ue, Ne);
    let $e;
    for ($e = 0; $e < we; $e++) {
      const Re = O[$e] = me ? Oa(O[$e]) : ra(O[$e]);
      C(
        S[$e],
        Re,
        D,
        null,
        U,
        ee,
        ne,
        oe,
        me
      );
    }
    ue > Ne ? K(
      S,
      U,
      ee,
      !0,
      !1,
      we
    ) : H(
      O,
      D,
      V,
      U,
      ee,
      ne,
      oe,
      me,
      we
    );
  }, Te = (S, O, D, V, U, ee, ne, oe, me) => {
    let ue = 0;
    const Ne = O.length;
    let we = S.length - 1, $e = Ne - 1;
    for (; ue <= we && ue <= $e; ) {
      const Re = S[ue], Ve = O[ue] = me ? Oa(O[ue]) : ra(O[ue]);
      if (Yn(Re, Ve))
        C(
          Re,
          Ve,
          D,
          null,
          U,
          ee,
          ne,
          oe,
          me
        );
      else
        break;
      ue++;
    }
    for (; ue <= we && ue <= $e; ) {
      const Re = S[we], Ve = O[$e] = me ? Oa(O[$e]) : ra(O[$e]);
      if (Yn(Re, Ve))
        C(
          Re,
          Ve,
          D,
          null,
          U,
          ee,
          ne,
          oe,
          me
        );
      else
        break;
      we--, $e--;
    }
    if (ue > we) {
      if (ue <= $e) {
        const Re = $e + 1, Ve = Re < Ne ? O[Re].el : V;
        for (; ue <= $e; )
          C(
            null,
            O[ue] = me ? Oa(O[ue]) : ra(O[ue]),
            D,
            Ve,
            U,
            ee,
            ne,
            oe,
            me
          ), ue++;
      }
    } else if (ue > $e)
      for (; ue <= we; )
        Oe(S[ue], U, ee, !0), ue++;
    else {
      const Re = ue, Ve = ue, Ze = /* @__PURE__ */ new Map();
      for (ue = Ve; ue <= $e; ue++) {
        const kt = O[ue] = me ? Oa(O[ue]) : ra(O[ue]);
        kt.key != null && Ze.set(kt.key, ue);
      }
      let qe, at = 0;
      const dt = $e - Ve + 1;
      let _t = !1, bt = 0;
      const ii = new Array(dt);
      for (ue = 0; ue < dt; ue++) ii[ue] = 0;
      for (ue = Re; ue <= we; ue++) {
        const kt = S[ue];
        if (at >= dt) {
          Oe(kt, U, ee, !0);
          continue;
        }
        let Ot;
        if (kt.key != null)
          Ot = Ze.get(kt.key);
        else
          for (qe = Ve; qe <= $e; qe++)
            if (ii[qe - Ve] === 0 && Yn(kt, O[qe])) {
              Ot = qe;
              break;
            }
        Ot === void 0 ? Oe(kt, U, ee, !0) : (ii[Ot - Ve] = ue + 1, Ot >= bt ? bt = Ot : _t = !0, C(
          kt,
          O[Ot],
          D,
          null,
          U,
          ee,
          ne,
          oe,
          me
        ), at++);
      }
      const vi = _t ? s1(ii) : Tr;
      for (qe = vi.length - 1, ue = dt - 1; ue >= 0; ue--) {
        const kt = Ve + ue, Ot = O[kt], Ui = O[kt + 1], qt = kt + 1 < Ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ui.el || Hv(Ui)
        ) : V;
        ii[ue] === 0 ? C(
          null,
          Ot,
          D,
          qt,
          U,
          ee,
          ne,
          oe,
          me
        ) : _t && (qe < 0 || ue !== vi[qe] ? Le(Ot, D, qt, 2) : qe--);
      }
    }
  }, Le = (S, O, D, V, U = null) => {
    const { el: ee, type: ne, transition: oe, children: me, shapeFlag: ue } = S;
    if (ue & 6) {
      Le(S.component.subTree, O, D, V);
      return;
    }
    if (ue & 128) {
      S.suspense.move(O, D, V);
      return;
    }
    if (ue & 64) {
      ne.move(S, O, D, ct);
      return;
    }
    if (ne === Y) {
      a(ee, O, D);
      for (let we = 0; we < me.length; we++)
        Le(me[we], O, D, V);
      a(S.anchor, O, D);
      return;
    }
    if (ne === Ws) {
      P(S, O, D);
      return;
    }
    if (V !== 2 && ue & 1 && oe)
      if (V === 0)
        oe.persisted && !ee[Li] ? a(ee, O, D) : (oe.beforeEnter(ee), a(ee, O, D), ui(() => oe.enter(ee), U));
      else {
        const { leave: we, delayLeave: $e, afterLeave: Re } = oe, Ve = () => {
          S.ctx.isUnmounted ? n(ee) : a(ee, O, D);
        }, Ze = () => {
          const qe = ee._isLeaving || !!ee[Li];
          ee._isLeaving && ee[Li](
            !0
            /* cancelled */
          ), oe.persisted && !qe ? Ve() : we(ee, () => {
            Ve(), Re && Re();
          });
        };
        $e ? $e(ee, Ve, Ze) : Ze();
      }
    else
      a(ee, O, D);
  }, Oe = (S, O, D, V = !1, U = !1) => {
    const {
      type: ee,
      props: ne,
      ref: oe,
      children: me,
      dynamicChildren: ue,
      shapeFlag: Ne,
      patchFlag: we,
      dirs: $e,
      cacheIndex: Re,
      memo: Ve
    } = S;
    if (we === -2 && (U = !1), oe != null && (za(), Tl(oe, null, D, S, !0), ja()), Re != null && (O.renderCache[Re] = void 0), Ne & 256) {
      O.ctx.deactivate(S);
      return;
    }
    const Ze = Ne & 1 && $e, qe = !Er(S);
    let at;
    if (qe && (at = ne && ne.onVnodeBeforeUnmount) && ea(at, O, S), Ne & 6)
      Se(S.component, D, V);
    else {
      if (Ne & 128) {
        S.suspense.unmount(D, V);
        return;
      }
      Ze && zn(S, null, O, "beforeUnmount"), Ne & 64 ? S.type.remove(
        S,
        O,
        D,
        ct,
        V
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ee !== Y || we > 0 && we & 64) ? K(
        ue,
        O,
        D,
        !1,
        !0
      ) : (ee === Y && we & 384 || !U && Ne & 16) && K(me, O, D), V && Ue(S);
    }
    const dt = Ve != null && Re == null;
    (qe && (at = ne && ne.onVnodeUnmounted) || Ze || dt) && ui(() => {
      at && ea(at, O, S), Ze && zn(S, null, O, "unmounted"), dt && (S.el = null);
    }, D);
  }, Ue = (S) => {
    const { type: O, el: D, anchor: V, transition: U } = S;
    if (O === Y) {
      Xe(D, V);
      return;
    }
    if (O === Ws) {
      N(S);
      return;
    }
    const ee = () => {
      n(D), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (S.shapeFlag & 1 && U && !U.persisted) {
      const { leave: ne, delayLeave: oe } = U, me = () => ne(D, ee);
      oe ? oe(S.el, ee, me) : me();
    } else
      ee();
  }, Xe = (S, O) => {
    let D;
    for (; S !== O; )
      D = m(S), n(S), S = D;
    n(O);
  }, Se = (S, O, D) => {
    const { bum: V, scope: U, job: ee, subTree: ne, um: oe, m: me, a: ue } = S;
    ah(me), ah(ue), V && Ks(V), U.stop(), ee && (ee.flags |= 8, Oe(ne, S, O, D)), oe && ui(oe, O), ui(() => {
      S.isUnmounted = !0;
    }, O);
  }, K = (S, O, D, V = !1, U = !1, ee = 0) => {
    for (let ne = ee; ne < S.length; ne++)
      Oe(S[ne], O, D, V, U);
  }, te = (S) => {
    if (S.shapeFlag & 6)
      return te(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const O = m(S.anchor || S.el), D = O && O[pv];
    return D ? m(D) : O;
  };
  let fe = !1;
  const De = (S, O, D) => {
    let V;
    S == null ? O._vnode && (Oe(O._vnode, null, null, !0), V = O._vnode.component) : C(
      O._vnode || null,
      S,
      O,
      null,
      null,
      null,
      D
    ), O._vnode = S, fe || (fe = !0, Vf(V), dv(), fe = !1);
  }, ct = {
    p: C,
    um: Oe,
    m: Le,
    r: Ue,
    mt: I,
    mc: H,
    pc: X,
    pbc: J,
    n: te,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: qy(De)
  };
}
function Qu({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function jn({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function l1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, i = !1) {
  const a = e.children, n = t.children;
  if (Pe(a) && Pe(n))
    for (let r = 0; r < a.length; r++) {
      const s = a[r];
      let c = n[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[r] = Oa(n[r]), c.el = s.el), !i && c.patchFlag !== -2 && Id(s, c)), c.type === ss && (c.patchFlag === -1 && (c = n[r] = Oa(c)), c.el = s.el), c.type === jt && !c.el && (c.el = s.el);
    }
}
function s1(e) {
  const t = e.slice(), i = [0];
  let a, n, r, s, c;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const y = e[a];
    if (y !== 0) {
      if (n = i[i.length - 1], e[n] < y) {
        t[a] = n, i.push(a);
        continue;
      }
      for (r = 0, s = i.length - 1; r < s; )
        c = r + s >> 1, e[i[c]] < y ? r = c + 1 : s = c;
      y < e[i[r]] && (r > 0 && (t[a] = i[r - 1]), i[r] = a);
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
function ah(e) {
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
function o1(e, t) {
  t && t.pendingBranch ? Pe(e) ? t.effects.push(...e) : t.effects.push(e) : cv(e);
}
const Y = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), jt = /* @__PURE__ */ Symbol.for("v-cmt"), Ws = /* @__PURE__ */ Symbol.for("v-stc"), Da = [];
let Ci = null;
function h(e = !1) {
  Da.push(Ci = e ? null : []);
}
function Ld() {
  Da.pop(), Ci = Da[Da.length - 1] || null;
}
let Hl = 1;
function lo(e, t = !1) {
  Hl += e, e < 0 && Ci && t && (Ci.hasOnce = !0);
}
function qv(e) {
  return e.dynamicChildren = Hl > 0 ? Ci || Tr : null, Ld(), Hl > 0 && Ci && Ci.push(e), e;
}
function p(e, t, i, a, n, r) {
  return qv(
    l(
      e,
      t,
      i,
      a,
      n,
      r,
      !0
    )
  );
}
function Fe(e, t, i, a, n) {
  return qv(
    de(
      e,
      t,
      i,
      a,
      n,
      !0
    )
  );
}
function Vl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gv = ({ key: e }) => e ?? null, Ys = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || /* @__PURE__ */ ei(e) || je(e) ? { i: Bt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, a = 0, n = null, r = e === Y ? 0 : 1, s = !1, c = !1) {
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
    patchFlag: a,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  };
  return c ? (so(d, i), r & 128 && e.normalize(d)) : i && (d.shapeFlag |= vt(i) ? 8 : 16), Hl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ci && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Ci.push(d), d;
}
const de = u1;
function u1(e, t = null, i = null, a = 0, n = null, r = !1) {
  if ((!e || e === Cv) && (e = jt), Vl(e)) {
    const c = wn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && so(c, i), Hl > 0 && !r && Ci && (c.shapeFlag & 6 ? Ci[Ci.indexOf(e)] = c : Ci.push(c)), c.patchFlag = -2, c;
  }
  if (g1(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: d } = t;
    c && !vt(c) && (t.class = Ee(c)), ot(d) && (/* @__PURE__ */ Td(d) && !Pe(d) && (d = $t({}, d)), t.style = pi(d));
  }
  const s = vt(e) ? 1 : Vv(e) ? 128 : du(e) ? 64 : ot(e) ? 4 : je(e) ? 2 : 0;
  return l(
    e,
    t,
    i,
    a,
    n,
    s,
    r,
    !0
  );
}
function ql(e) {
  return e ? /* @__PURE__ */ Td(e) || Dv(e) ? $t({}, e) : e : null;
}
function wn(e, t, i = !1, a = !1) {
  const { props: n, ref: r, patchFlag: s, children: c, transition: d } = e, y = t ? ti(n || {}, t) : n, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && Gv(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Pe(r) ? r.concat(Ys(t)) : [r, Ys(t)] : Ys(t)
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
    patchFlag: t && e.type !== Y ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && wn(e.ssContent),
    ssFallback: e.ssFallback && wn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && Bl(
    v,
    d.clone(v)
  ), v;
}
function ae(e = " ", t = 0) {
  return de(ss, null, e, t);
}
function E(e = "", t = !1) {
  return t ? (h(), Fe(jt, null, e)) : de(jt, null, e);
}
function ra(e) {
  return e == null || typeof e == "boolean" ? de(jt) : Pe(e) ? de(
    Y,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vl(e) ? Oa(e) : de(ss, null, String(e));
}
function Oa(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wn(e);
}
function so(e, t) {
  let i = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Pe(t))
    i = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), so(e, n()), n._c && (n._d = !0));
      return;
    } else {
      i = 32;
      const n = t._;
      !n && !Dv(t) ? t._ctx = Bt : n === 3 && Bt && (Bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (je(t)) {
    if (a & 65) {
      so(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Bt }, i = 32;
  } else
    t = String(t), a & 64 ? (i = 16, t = [ae(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function ti(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    for (const n in a)
      if (n === "class")
        t.class !== a.class && (t.class = Ee([t.class, a.class]));
      else if (n === "style")
        t.style = pi([t.style, a.style]);
      else if (eu(n)) {
        const r = t[n], s = a[n];
        s && r !== s && !(Pe(r) && r.includes(s)) ? t[n] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tu(n) && (t[n] = s);
      } else n !== "" && (t[n] = a[n]);
  }
  return t;
}
function ea(e, t, i, a = null) {
  Mi(e, t, 7, [
    i,
    a
  ]);
}
const c1 = xv();
let d1 = 0;
function f1(e, t, i) {
  const a = e.type, n = (t ? t.appContext : e.appContext) || c1, r = {
    uid: d1++,
    vnode: e,
    type: a,
    parent: t,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Im(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Mv(a, n),
    emitsOptions: Rv(a, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: it,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: it,
    data: it,
    props: it,
    attrs: it,
    slots: it,
    refs: it,
    setupState: it,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Gy.bind(null, r), e.ce && e.ce(r), r;
}
let Xt = null;
const Sn = () => Xt || Bt;
let oo, Gl;
{
  const e = ru(), t = (i, a) => {
    let n;
    return (n = e[i]) || (n = e[i] = []), n.push(a), (r) => {
      n.length > 1 ? n.forEach((s) => s(r)) : n[0](r);
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
}, nh = () => {
  Xt && Xt.scope.off(), oo(null);
};
function Kv(e) {
  return e.vnode.shapeFlag & 4;
}
let Kl = !1;
function h1(e, t = !1, i = !1) {
  t && Gl(t);
  const { props: a, children: n } = e.vnode, r = Kv(e);
  Jy(e, a, r, t), i1(e, n, i || t);
  const s = r ? p1(e, t) : void 0;
  return t && Gl(!1), s;
}
function p1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Py);
  const { setup: a } = i;
  if (a) {
    za();
    const n = e.setupContext = a.length > 1 ? Yv(e) : null, r = os(e), s = rs(
      a,
      e,
      0,
      [
        e.props,
        n
      ]
    ), c = Mp(s);
    if (ja(), r(), (c || e.sp) && !Er(e) && _v(e), c) {
      if (s.then(nh, nh), t)
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
  je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ot(t) && (e.setupState = sv(t)), Wv(e);
}
function Wv(e, t, i) {
  const a = e.type;
  e.render || (e.render = a.render || Di);
  {
    const n = os(e);
    za();
    try {
      Uy(e);
    } finally {
      ja(), n();
    }
  }
}
const v1 = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Yv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, v1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sv(Qm(e.exposed)), {
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
function b1(e, t = !0) {
  return je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function g1(e) {
  return je(e) && "__vccOpts" in e;
}
const z = (e, t) => /* @__PURE__ */ ry(e, t, Kl);
function fi(e, t, i) {
  try {
    lo(-1);
    const a = arguments.length;
    return a === 2 ? ot(t) && !Pe(t) ? Vl(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (a > 3 ? i = Array.prototype.slice.call(arguments, 2) : a === 3 && Vl(i) && (i = [i]), de(e, t, i));
  } finally {
    lo(1);
  }
}
const m1 = "3.5.42", y1 = Di;
let qc;
const lh = typeof window < "u" && window.trustedTypes;
if (lh)
  try {
    qc = /* @__PURE__ */ lh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zv = qc ? (e) => qc.createHTML(e) : (e) => e, _1 = "http://www.w3.org/2000/svg", w1 = "http://www.w3.org/1998/Math/MathML", xa = typeof document < "u" ? document : null, sh = xa && /* @__PURE__ */ xa.createElement("template"), k1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, a) => {
    const n = t === "svg" ? xa.createElementNS(_1, e) : t === "mathml" ? xa.createElementNS(w1, e) : i ? xa.createElement(e, { is: i }) : xa.createElement(e);
    return e === "select" && a && a.multiple != null && n.setAttribute("multiple", a.multiple), n;
  },
  createText: (e) => xa.createTextNode(e),
  createComment: (e) => xa.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xa.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, a, n, r) {
    const s = i ? i.previousSibling : t.lastChild;
    if (n && (n === r || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), i), !(n === r || !(n = n.nextSibling)); )
        ;
    else {
      sh.innerHTML = Zv(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = sh.content;
      if (a === "svg" || a === "mathml") {
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
}, ln = "transition", sl = "animation", Wl = /* @__PURE__ */ Symbol("_vtc"), Xv = {
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
}, S1 = /* @__PURE__ */ $t(
  {},
  vv,
  Xv
), C1 = (e) => (e.displayName = "Transition", e.props = S1, e), T1 = /* @__PURE__ */ C1(
  (e, { slots: t }) => fi(Sy, A1(e), t)
), Bn = (e, t = []) => {
  Pe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, oh = (e) => e ? Pe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function A1(e) {
  const t = {};
  for (const B in e)
    B in Xv || (t[B] = e[B]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: a,
    duration: n,
    enterFromClass: r = `${i}-enter-from`,
    enterActiveClass: s = `${i}-enter-active`,
    enterToClass: c = `${i}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: y = s,
    appearToClass: v = c,
    leaveFromClass: g = `${i}-leave-from`,
    leaveActiveClass: m = `${i}-leave-active`,
    leaveToClass: k = `${i}-leave-to`
  } = e, T = E1(n), C = T && T[0], x = T && T[1], {
    onBeforeEnter: R,
    onEnter: L,
    onEnterCancelled: P,
    onLeave: N,
    onLeaveCancelled: pe,
    onBeforeAppear: Q = R,
    onAppear: $ = L,
    onAppearCancelled: H = P
  } = t, G = (B, W, I, j) => {
    B._enterCancelled = j, Hn(B, W ? v : c), Hn(B, W ? y : s), I && I();
  }, J = (B, W) => {
    B._isLeaving = !1, Hn(B, g), Hn(B, k), Hn(B, m), W && W();
  }, le = (B) => (W, I) => {
    const j = B ? $ : L, Z = () => G(W, B, I);
    Bn(j, [W, Z]), uh(() => {
      Hn(W, B ? d : r), ka(W, B ? v : c), oh(j) || ch(W, a, C, Z);
    });
  };
  return $t(t, {
    onBeforeEnter(B) {
      Bn(R, [B]), ka(B, r), ka(B, s);
    },
    onBeforeAppear(B) {
      Bn(Q, [B]), ka(B, d), ka(B, y);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(B, W) {
      B._isLeaving = !0;
      const I = () => J(B, W);
      ka(B, g), B._enterCancelled ? (ka(B, m), hh(B)) : (hh(B), ka(B, m)), uh(() => {
        B._isLeaving && (Hn(B, g), ka(B, k), oh(N) || ch(B, a, x, I));
      }), Bn(N, [B, I]);
    },
    onEnterCancelled(B) {
      G(B, !1, void 0, !0), Bn(P, [B]);
    },
    onAppearCancelled(B) {
      G(B, !0, void 0, !0), Bn(H, [B]);
    },
    onLeaveCancelled(B) {
      J(B), Bn(pe, [B]);
    }
  });
}
function E1(e) {
  if (e == null)
    return null;
  if (ot(e))
    return [ec(e.enter), ec(e.leave)];
  {
    const t = ec(e);
    return [t, t];
  }
}
function ec(e) {
  return Cm(e);
}
function ka(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Wl] || (e[Wl] = /* @__PURE__ */ new Set())).add(t);
}
function Hn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const i = e[Wl];
  i && (i.delete(t), i.size || (e[Wl] = void 0));
}
function uh(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $1 = 0;
function ch(e, t, i, a) {
  const n = e._endId = ++$1, r = () => {
    n === e._endId && a();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: s, timeout: c, propCount: d } = x1(e, t);
  if (!s)
    return a();
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
function x1(e, t) {
  const i = window.getComputedStyle(e), a = (T) => (i[T] || "").split(", "), n = a(`${ln}Delay`), r = a(`${ln}Duration`), s = dh(n, r), c = a(`${sl}Delay`), d = a(`${sl}Duration`), y = dh(c, d);
  let v = null, g = 0, m = 0;
  t === ln ? s > 0 && (v = ln, g = s, m = r.length) : t === sl ? y > 0 && (v = sl, g = y, m = d.length) : (g = Math.max(s, y), v = g > 0 ? s > y ? ln : sl : null, m = v ? v === ln ? r.length : d.length : 0);
  const k = v === ln && /\b(?:transform|all)(?:,|$)/.test(
    a(`${ln}Property`).toString()
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
  return Math.max(...t.map((i, a) => fh(i) + fh(e[a])));
}
function fh(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function hh(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function O1(e, t, i) {
  const a = e[Wl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
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
  updated(e, { value: t, oldValue: i }, { transition: a }) {
    !t != !i && (a ? t ? (a.beforeEnter(e), ol(e, !0), a.enter(e)) : a.leave(e, () => {
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
function N1(e) {
  const t = Sn();
  if (!t)
    return;
  const i = t.ut = (n = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => co(r, n));
  }, a = () => {
    const n = e(t.proxy);
    t.ce ? co(t.ce, n) : Gc(t.subTree, n), i(n);
  };
  Sv(() => {
    cv(a);
  }), xt(() => {
    Ge(a, Di, { flush: "post" });
    const n = new MutationObserver(a);
    n.observe(t.subTree.el.parentNode, { childList: !0 }), ls(() => n.disconnect());
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
  else if (e.type === Y)
    e.children.forEach((i) => Gc(i, t));
  else if (e.type === Ws) {
    let { el: i, anchor: a } = e;
    for (; i && (co(i, t), i !== a); )
      i = i.nextSibling;
  }
}
function co(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let a = "";
    for (const n in t) {
      const r = Rm(t[n]);
      i.setProperty(`--${n}`, r), a += `--${n}: ${r};`;
    }
    i[Qv] = a;
  }
}
const R1 = /(?:^|;)\s*display\s*:/;
function I1(e, t, i) {
  const a = e.style, n = vt(i);
  let r = !1;
  if (i && !n) {
    if (t)
      if (vt(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          i[c] == null && ml(a, c, "");
        }
      else
        for (const s in t)
          i[s] == null && ml(a, s, "");
    for (const s in i) {
      s === "display" && (r = !0);
      const c = i[s];
      c != null ? P1(
        e,
        s,
        !vt(t) && t ? t[s] : void 0,
        c
      ) || ml(a, s, c) : ml(a, s, "");
    }
  } else if (n) {
    if (t !== i) {
      const s = a[Qv];
      s && (i += ";" + s), a.cssText = i, r = R1.test(i);
    }
  } else t && e.removeAttribute("style");
  uo in e && (e[uo] = r ? a.display : "", e[Jv] && (a.display = "none"));
}
const Fs = /\s*!important$/;
function ml(e, t, i) {
  if (Pe(i))
    i.forEach((a) => ml(e, t, a));
  else if (i == null && (i = ""), t.startsWith("--"))
    Fs.test(i) ? e.setProperty(t, i.replace(Fs, ""), "important") : e.setProperty(t, i);
  else {
    const a = L1(e, t);
    Fs.test(i) ? e.setProperty(
      Va(a),
      i.replace(Fs, ""),
      "important"
    ) : e[a] = i;
  }
}
const ph = ["Webkit", "Moz", "ms"], tc = {};
function L1(e, t) {
  const i = tc[t];
  if (i)
    return i;
  let a = Qt(t);
  if (a !== "filter" && a in e)
    return tc[t] = a;
  a = au(a);
  for (let n = 0; n < ph.length; n++) {
    const r = ph[n] + a;
    if (r in e)
      return tc[t] = r;
  }
  return t;
}
function P1(e, t, i, a) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && vt(a) && i === a;
}
const vh = "http://www.w3.org/1999/xlink";
function bh(e, t, i, a, n, r = Om(t)) {
  a && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(vh, t.slice(6, t.length)) : e.setAttributeNS(vh, t, i) : i == null || r && !Bp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ki(i) ? String(i) : i
  );
}
function gh(e, t, i, a, n) {
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
  s && e.removeAttribute(n || t);
}
function vn(e, t, i, a) {
  e.addEventListener(t, i, a);
}
function D1(e, t, i, a) {
  e.removeEventListener(t, i, a);
}
const mh = /* @__PURE__ */ Symbol("_vei");
function F1(e, t, i, a, n = null) {
  const r = e[mh] || (e[mh] = {}), s = r[t];
  if (a && s)
    s.value = a;
  else {
    const [c, d] = z1(t);
    if (a) {
      const y = r[t] = H1(
        a,
        n
      );
      vn(e, c, y, d);
    } else s && (D1(e, c, s, d), r[t] = void 0);
  }
}
const M1 = /(Once|Passive|Capture)$/, U1 = /^on:?(?:Once|Passive|Capture)$/;
function z1(e) {
  let t, i;
  for (; (i = e.match(M1)) && !U1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Va(e.slice(2)), t];
}
let ic = 0;
const j1 = /* @__PURE__ */ Promise.resolve(), B1 = () => ic || (j1.then(() => ic = 0), ic = Date.now());
function H1(e, t) {
  const i = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= i.attached)
      return;
    const n = i.value;
    if (Pe(n)) {
      const r = a.stopImmediatePropagation;
      a.stopImmediatePropagation = () => {
        r.call(a), a._stopped = !0;
      };
      const s = n.slice(), c = [a];
      for (let d = 0; d < s.length && !a._stopped; d++) {
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
        n,
        t,
        5,
        [a]
      );
  };
  return i.value = e, i.attached = B1(), i;
}
const yh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, V1 = (e, t, i, a, n, r) => {
  const s = n === "svg";
  t === "class" ? O1(e, a, s) : t === "style" ? I1(e, i, a) : eu(t) ? tu(t) || F1(e, t, i, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : q1(e, t, a, s)) ? (gh(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bh(e, t, a, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (G1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !vt(a))) ? gh(e, Qt(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), bh(e, t, a, s));
};
function q1(e, t, i, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yh(t) && je(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return yh(t) && vt(i) ? !1 : t in e;
}
function G1(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const a = Qt(t);
  return Array.isArray(i) ? i.some((n) => Qt(n) === a) : Object.keys(i).some((n) => Qt(n) === a);
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Pe(t) ? (i) => Ks(t, i) : t;
};
function K1(e) {
  e.target.composing = !0;
}
function _h(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const la = /* @__PURE__ */ Symbol("_assign"), Ms = /* @__PURE__ */ Symbol("_initialValue");
function ac(e, t, i) {
  return t && (e = e.trim()), i && (e = nu(e)), e;
}
const ze = {
  created(e, { modifiers: { lazy: t, trim: i, number: a } }, n) {
    e.parentNode && (e.type === "text" ? e[Ms] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ms] = e.defaultValue.replace(/\r\n?/g, `
`))), e[la] = Ir(n);
    const r = a || n.props && n.props.type === "number";
    vn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[la](ac(e.value, i, r));
    }), (i || r) && vn(e, "change", () => {
      e.value = ac(e.value, i, r);
    }), t || (vn(e, "compositionstart", K1), vn(e, "compositionend", _h), vn(e, "change", _h));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: a } }) {
    const n = t ?? "", r = e[Ms];
    delete e[Ms], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[la](ac(e.value, i, a)) : e.value = n;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: a, trim: n, number: r } }, s) {
    if (e[la] = Ir(s), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? nu(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const y = e.getRootNode();
    (y instanceof Document || y instanceof ShadowRoot) && y.activeElement === e && e.type !== "range" && (a && t === i || n && e.value.trim() === d) || (e.value = d);
  }
}, sa = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[la] = Ir(i), vn(e, "change", () => {
      const a = e._modelValue, n = Yl(e), r = e.checked, s = e[la];
      if (Pe(a)) {
        const c = yd(a, n), d = c !== -1;
        if (r && !d)
          s(a.concat(n));
        else if (!r && d) {
          const y = [...a];
          y.splice(c, 1), s(y);
        }
      } else if (Ma(a)) {
        const c = new Set(a);
        r ? c.add(n) : c.delete(n), s(c);
      } else
        s(eb(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: wh,
  beforeUpdate(e, t, i) {
    e[la] = Ir(i), wh(e, t, i);
  }
};
function wh(e, { value: t, oldValue: i }, a) {
  e._modelValue = t;
  let n;
  if (Pe(t))
    n = yd(t, a.props.value) > -1;
  else if (Ma(t))
    n = t.has(a.props.value);
  else {
    if (t === i) return;
    n = Ua(t, eb(e, !0));
  }
  e.checked !== n && (e.checked = n);
}
const nt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, a) {
    e._modelValue = t, vn(e, "change", () => {
      const n = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? nu(Yl(d)) : Yl(d)
      ), r = e.multiple, s = r ? Ma(e._modelValue) ? new Set(n) : n : n[0], c = e._pendingValue = [
        r,
        r ? Pe(s) ? n.slice() : n : s
      ];
      try {
        e[la](s);
      } finally {
        It(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[la] = Ir(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    kh(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[la] = Ir(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !W1(t, i[1], i[0])) && kh(e, t);
  }
};
function W1(e, t, i) {
  if (!i || Pe(e)) return Ua(e, t);
  if (Ma(e)) {
    if (e.size !== t.length) return !1;
    for (const a of t)
      if (!e.has(a)) return !1;
    return !0;
  }
  return !1;
}
function kh(e, t) {
  const i = e.multiple, a = Pe(t);
  if (!(i && !a && !Ma(t))) {
    for (let n = 0, r = e.options.length; n < r; n++) {
      const s = e.options[n], c = Yl(s);
      if (i)
        if (a) {
          const d = typeof c;
          d === "string" || d === "number" ? s.selected = t.some((y) => String(y) === String(c)) : s.selected = yd(t, c) > -1;
        } else
          s.selected = t.has(c);
      else if (Ua(Yl(s), t)) {
        e.selectedIndex !== n && (e.selectedIndex = n);
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
const Y1 = ["ctrl", "shift", "alt", "meta"], Z1 = {
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
  exact: (e, t) => Y1.some((i) => e[`${i}Key`] && !t.includes(i))
}, Ce = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), a = t.join(".");
  return i[a] || (i[a] = ((n, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const c = Z1[t[s]];
      if (c && c(n, t)) return;
    }
    return e(n, ...r);
  }));
}, X1 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ht = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return i[a] || (i[a] = ((n) => {
    if (!("key" in n))
      return;
    const r = Va(n.key);
    if (t.some(
      (s) => s === r || X1[s] === r
    ))
      return e(n);
  }));
}, J1 = /* @__PURE__ */ $t({ patchProp: V1 }, k1);
let Sh;
function Q1() {
  return Sh || (Sh = n1(J1));
}
const e_ = ((...e) => {
  const t = Q1().createApp(...e), { mount: i } = t;
  return t.mount = (a) => {
    const n = i_(a);
    if (!n) return;
    const r = t._component;
    !je(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = i(n, !1, t_(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
});
function t_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function i_(e) {
  return vt(e) ? document.querySelector(e) : e;
}
function fo(e, t, i) {
  const a = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(a))
    return window._nc_initial_state.get(a);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const n = document.querySelector(a);
  if (n === null) {
    if (i !== void 0)
      return i;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(n.value));
    return window._nc_initial_state.set(a, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), i !== void 0)
      return i;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
const Ch = (e, t, i) => {
  const a = Object.assign({
    escape: !0
  }, i || {}), n = function(r, s) {
    return s = s || {}, r.replace(
      /{([^{}]*)}/g,
      function(c, d) {
        const y = s[d];
        return a.escape ? encodeURIComponent(typeof y == "string" || typeof y == "number" ? y.toString() : c) : typeof y == "string" || typeof y == "number" ? y.toString() : c;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), n(e, t || {});
}, Jt = (e, t, i) => {
  const a = Object.assign({
    noRewrite: !1
  }, i || {}), n = i?.baseURL ?? a_();
  return window?.OC?.config?.modRewriteWorking === !0 && !a.noRewrite ? n + Ch(e, t, i) : n + "/index.php" + Ch(e, t, i);
};
function a_() {
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
  for (var i = 0, a = Array(t); i < t; i++) a[i] = e[i];
  return a;
}
function n_(e) {
  if (Array.isArray(e)) return e;
}
function r_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var a, n, r, s, c = [], d = !0, y = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(d = (a = r.call(i)).done) && (c.push(a.value), c.length !== t); d = !0) ;
    } catch (v) {
      y = !0, n = v;
    } finally {
      try {
        if (!d && i.return != null && (s = i.return(), Object(s) !== s)) return;
      } finally {
        if (y) throw n;
      }
    }
    return c;
  }
}
function l_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s_(e, t) {
  return n_(e) || r_(e, t) || o_(e, t) || l_();
}
function o_(e, t) {
  if (e) {
    if (typeof e == "string") return Th(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Th(e, t) : void 0;
  }
}
const tb = Object.entries, Ah = Object.setPrototypeOf, u_ = Object.isFrozen, ib = Object.getPrototypeOf, ab = Object.getOwnPropertyDescriptor;
let Lt = Object.freeze, Ht = Object.seal, Sr = Object.create, nb = typeof Reflect < "u" && Reflect, Kc = nb.apply, Wc = nb.construct;
Lt || (Lt = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
Kc || (Kc = function(t, i) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) n[r - 2] = arguments[r];
  return t.apply(i, n);
});
Wc || (Wc = function(t) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n];
  return new t(...a);
});
const Sa = wt(Array.prototype.forEach), c_ = wt(Array.prototype.lastIndexOf), Eh = wt(Array.prototype.pop), ul = wt(Array.prototype.push), d_ = wt(Array.prototype.slice), f_ = wt(Array.prototype.splice), xr = Array.isArray, nc = rb(Set), rc = wt(Set.prototype.add), cl = wt(Set.prototype.has), Kn = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), $h = wt(String.prototype.match), dl = wt(String.prototype.replace), xh = wt(String.prototype.indexOf), h_ = wt(String.prototype.trim), p_ = wt(Number.prototype.toString), v_ = wt(Boolean.prototype.toString), Oh = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Nh = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), hi = wt(Object.prototype.hasOwnProperty), fl = wt(Object.prototype.toString), Mt = wt(RegExp.prototype.test), Ca = rb(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n];
    return Kc(e, t, a);
  };
}
function rb(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
    return Wc(e, i);
  };
}
function tt(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kn;
  if (Ah && Ah(e, null), !xr(t)) return e;
  let a = t.length;
  for (; a--; ) {
    let n = t[a];
    if (typeof n == "string") {
      const r = i(n);
      r !== n && (u_(t) || (t[a] = r), n = r);
    }
    e[n] = !0;
  }
  return e;
}
function b_(e) {
  for (let t = 0; t < e.length; t++) hi(e, t) || (e[t] = null);
  return e;
}
function ki(e) {
  const t = Sr(null);
  for (const a of tb(e)) {
    var i = s_(a, 2);
    const n = i[0], r = i[1];
    hi(e, n) && (xr(r) ? t[n] = b_(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = ki(r) : t[n] = r);
  }
  return t;
}
function g_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return p_(e);
    case "boolean":
      return v_(e);
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
        const a = i(t);
        return typeof a == "string" ? a : fl(a);
      }
      return fl(e);
    }
    default:
      return fl(e);
  }
}
function Ni(e, t) {
  for (; e !== null; ) {
    const a = ab(e, t);
    if (a) {
      if (a.get) return wt(a.get);
      if (typeof a.value == "function") return wt(a.value);
    }
    e = ib(e);
  }
  function i() {
    return null;
  }
  return i;
}
function m_(e, t) {
  for (; e !== null; ) {
    const i = ab(e, t);
    if (i) return i.get ? wt(i.get) : null;
    e = ib(e);
  }
  return null;
}
function y_(e) {
  try {
    return Mt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Rh = Lt([
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
]), sc = Lt([
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
]), oc = Lt([
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
]), __ = Lt([
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
]), uc = Lt([
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
]), w_ = Lt([
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
]), Ih = Lt(["#text"]), Lh = Lt([
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
]), cc = Lt([
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
]), Ph = Lt([
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
]), Us = Lt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), k_ = Ht(/{{[\w\W]*|^[\w\W]*}}/g), S_ = Ht(/<%[\w\W]*|^[\w\W]*%>/g), C_ = Ht(/\${[\w\W]*/g), T_ = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), A_ = Ht(/^aria-[\-\w]+$/), Dh = Ht(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), E_ = Ht(/^(?:\w+script|data):/i), $_ = Ht(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), x_ = Ht(/^html$/i), O_ = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Ht(/<[/\w!]/g), Fh = Ht(/<[/\w]/g), N_ = Ht(/<\/no(script|embed|frames)/i), Mh = Ht(/\/>/i), At = {
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
}, R_ = Lt(tt({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), I_ = function() {
  return typeof window > "u" ? null : window;
}, L_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let a = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (a = i.getAttribute(n));
  const r = "dompurify" + (a ? "#" + a : "");
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
}, sn = function(t, i, a, n) {
  return hi(t, i) && xr(t[i]) ? tt(n.base ? ki(n.base) : {}, t[i], n.transform) : a;
}, fc = function(t, i, a) {
  const n = hi(t, i) ? t[i] : void 0;
  return n && typeof n == "object" ? ki(n) : a();
};
function lb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I_();
  const t = (ge) => lb(ge);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== At.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const a = i, n = a.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, c = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, v = e.trustedTypes, g = c.prototype, m = Ni(g, "cloneNode"), k = Ni(g, "remove"), T = Ni(g, "removeAttributeNode"), C = Ni(g, "nextSibling"), x = Ni(g, "childNodes"), R = Ni(g, "parentNode"), L = Ni(g, "shadowRoot"), P = Ni(g, "attributes"), N = s && s.prototype ? Ni(s.prototype, "nodeType") : null, pe = s && s.prototype ? Ni(s.prototype, "nodeName") : null, Q = s && s.prototype ? Ni(s.prototype, "ownerDocument") : null, $ = function(A) {
    return N ? N(A) : A.nodeType;
  }, H = function(A) {
    return pe ? pe(A) : A.nodeName;
  }, G = m_(g, "namespaceURI"), J = function(A) {
    return G ? G(A) : A.namespaceURI;
  };
  if (typeof r == "function") {
    const ge = i.createElement("template");
    ge.content && ge.content.ownerDocument && (i = ge.content.ownerDocument);
  }
  let le, B = "", W, I = !1, j = 0;
  const Z = function() {
    if (j > 0) throw Ca('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(A) {
    Z(), j++;
    try {
      return le.createHTML(A);
    } finally {
      j--;
    }
  }, X = function(A) {
    Z(), j++;
    try {
      return le.createScriptURL(A);
    } finally {
      j--;
    }
  }, be = function() {
    return I || (W = L_(v, n), I = !0), W;
  }, Te = i, Le = Te.implementation, Oe = Te.createNodeIterator, Ue = Te.createDocumentFragment, Xe = Te.getElementsByTagName, Se = a.importNode;
  let K = Uh();
  t.isSupported = typeof tb == "function" && typeof R == "function" && Le && Le.createHTMLDocument !== void 0;
  const te = k_, fe = S_, De = C_, ct = T_, ie = A_, S = E_, O = $_, D = O_;
  let V = Dh, U = null;
  const ee = tt({}, [
    ...Rh,
    ...sc,
    ...oc,
    ...uc,
    ...Ih
  ]);
  let ne = null;
  const oe = tt({}, [
    ...Lh,
    ...cc,
    ...Ph,
    ...Us
  ]);
  let me = Object.seal(Sr(null, {
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
  })), ue = null, Ne = null;
  const we = Object.seal(Sr(null, {
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
  let $e = !0, Re = !0, Ve = !1, Ze = !0, qe = !1, at = !0, dt = !1, _t = !1, bt = null, ii = null, vi = !1, kt = !1, Ot = !1, Ui = !1, qt = !0, bi = !1;
  const An = "user-content-";
  let Yi = !0, En = !1, Ai = null, Zi = {}, Xi = null;
  const Lr = tt({}, [
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
  let da = null;
  const Ga = tt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ka = null;
  const Wa = tt({}, [
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
  ]), ft = "http://www.w3.org/1998/Math/MathML", rr = "http://www.w3.org/2000/svg", gi = "http://www.w3.org/1999/xhtml";
  let fa = gi, Ya = !1, lr = null;
  const $n = tt({}, [
    ft,
    rr,
    gi
  ], lc), Za = Lt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ha = tt({}, Za);
  const Xa = Lt(["annotation-xml"]);
  let pa = tt({}, Xa);
  const xn = tt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ei = null;
  const Su = ["application/xhtml+xml", "text/html"], ds = "text/html";
  let rt = null, va = null;
  const Cu = i.createElement("form"), fs = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Pr = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (va && va === A) return;
    (!A || typeof A != "object") && (A = {}), A = ki(A), Ei = Su.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? ds : A.PARSER_MEDIA_TYPE, rt = Ei === "application/xhtml+xml" ? lc : Kn, U = sn(A, "ALLOWED_TAGS", ee, { transform: rt }), ne = sn(A, "ALLOWED_ATTR", oe, { transform: rt }), lr = sn(A, "ALLOWED_NAMESPACES", $n, { transform: lc }), Ka = sn(A, "ADD_URI_SAFE_ATTR", Wa, {
      transform: rt,
      base: Wa
    }), da = sn(A, "ADD_DATA_URI_TAGS", Ga, {
      transform: rt,
      base: Ga
    }), Xi = sn(A, "FORBID_CONTENTS", Lr, { transform: rt }), ue = sn(A, "FORBID_TAGS", ki({}), { transform: rt }), Ne = sn(A, "FORBID_ATTR", ki({}), { transform: rt }), Zi = hi(A, "USE_PROFILES") ? A.USE_PROFILES && typeof A.USE_PROFILES == "object" ? ki(A.USE_PROFILES) : A.USE_PROFILES : !1, $e = A.ALLOW_ARIA_ATTR !== !1, Re = A.ALLOW_DATA_ATTR !== !1, Ve = A.ALLOW_UNKNOWN_PROTOCOLS || !1, Ze = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, qe = A.SAFE_FOR_TEMPLATES || !1, at = A.SAFE_FOR_XML !== !1, dt = A.WHOLE_DOCUMENT || !1, kt = A.RETURN_DOM || !1, Ot = A.RETURN_DOM_FRAGMENT || !1, Ui = A.RETURN_TRUSTED_TYPE || !1, vi = A.FORCE_BODY || !1, qt = A.SANITIZE_DOM !== !1, bi = A.SANITIZE_NAMED_PROPS || !1, Yi = A.KEEP_CONTENT !== !1, En = A.IN_PLACE || !1, V = y_(A.ALLOWED_URI_REGEXP) ? A.ALLOWED_URI_REGEXP : Dh, fa = typeof A.NAMESPACE == "string" ? A.NAMESPACE : gi, ha = fc(A, "MATHML_TEXT_INTEGRATION_POINTS", () => tt({}, Za)), pa = fc(A, "HTML_INTEGRATION_POINTS", () => tt({}, Xa));
    const M = fc(A, "CUSTOM_ELEMENT_HANDLING", () => Sr(null));
    if (me = Sr(null), hi(M, "tagNameCheck") && fs(M.tagNameCheck) && (me.tagNameCheck = M.tagNameCheck), hi(M, "attributeNameCheck") && fs(M.attributeNameCheck) && (me.attributeNameCheck = M.attributeNameCheck), hi(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Ht(me), qe && (Re = !1), Ot && (kt = !0), Zi && (U = tt({}, Ih), ne = Sr(null), Zi.html === !0 && (tt(U, Rh), tt(ne, Lh)), Zi.svg === !0 && (tt(U, sc), tt(ne, cc), tt(ne, Us)), Zi.svgFilters === !0 && (tt(U, oc), tt(ne, cc), tt(ne, Us)), Zi.mathMl === !0 && (tt(U, uc), tt(ne, Ph), tt(ne, Us))), we.tagCheck = null, we.attributeCheck = null, hi(A, "ADD_TAGS") && (typeof A.ADD_TAGS == "function" ? we.tagCheck = A.ADD_TAGS : xr(A.ADD_TAGS) && (U === ee && (U = ki(U)), tt(U, A.ADD_TAGS, rt))), hi(A, "ADD_ATTR") && (typeof A.ADD_ATTR == "function" ? we.attributeCheck = A.ADD_ATTR : xr(A.ADD_ATTR) && (ne === oe && (ne = ki(ne)), tt(ne, A.ADD_ATTR, rt))), hi(A, "ADD_FORBID_CONTENTS") && xr(A.ADD_FORBID_CONTENTS) && (Xi === Lr && (Xi = ki(Xi)), tt(Xi, A.ADD_FORBID_CONTENTS, rt)), Yi && (U["#text"] = !0), dt && tt(U, [
      "html",
      "head",
      "body"
    ]), U.table && (tt(U, ["tbody"]), delete ue.tbody), A.TRUSTED_TYPES_POLICY) {
      if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const se = le;
      le = A.TRUSTED_TYPES_POLICY;
      try {
        B = re("");
      } catch (ce) {
        throw le = se, ce;
      }
    } else A.TRUSTED_TYPES_POLICY === null ? (le = void 0, B = "") : (le === void 0 && (le = be()), le && typeof B == "string" && (B = re("")));
    Lt && Lt(A), va = A;
  }, gt = tt({}, [
    ...sc,
    ...oc,
    ...__
  ]), sr = tt({}, [...uc, ...w_]), Tu = function(A, M, se) {
    return M.namespaceURI === gi ? A === "svg" : M.namespaceURI === ft ? A === "svg" && (se === "annotation-xml" || ha[se]) : !!gt[A];
  }, Au = function(A, M, se) {
    return M.namespaceURI === gi ? A === "math" : M.namespaceURI === rr ? A === "math" && pa[se] : !!sr[A];
  }, ba = function(A, M, se) {
    return M.namespaceURI === rr && !pa[se] || M.namespaceURI === ft && !ha[se] ? !1 : !sr[A] && (xn[A] || !gt[A]);
  }, Eu = function(A) {
    const M = J(A), se = Kn(H(A)), ce = R(A);
    let Ie, Me;
    return ce && $(ce) === At.element ? (Ie = { namespaceURI: J(ce) }, Me = Kn(H(ce))) : (Ie = { namespaceURI: fa }, Me = "template"), lr[M] ? M === rr ? Tu(se, Ie, Me) : M === ft ? Au(se, Ie, Me) : M === gi ? ba(se, Ie, Me) : !!(Ei === "application/xhtml+xml" && lr[M]) : !1;
  }, ai = function(A) {
    ul(t.removed, { element: A });
    try {
      R(A).removeChild(A);
    } catch {
      if (k(A), !R(A)) throw Ca("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, or = function(A, M, se) {
    try {
      T(A, M);
    } catch {
      try {
        A.removeAttribute(se);
      } catch {
      }
    }
  }, Dr = function(A) {
    Mr(A);
    const M = x(A);
    M && Sa(d_(M), (ce) => {
      try {
        k(ce);
      } catch {
      }
    });
    const se = $(A) === At.element ? P(A) : null;
    if (se) for (let ce = se.length - 1; ce >= 0; --ce) {
      const Ie = se[ce], Me = Ie && Ie.name;
      typeof Me == "string" && or(A, Ie, Me);
    }
  }, Ja = function(A, M, se) {
    if (!se) try {
      se = M.getAttributeNode(A);
    } catch {
      se = null;
    }
    ul(t.removed, {
      attribute: se || null,
      from: M
    });
    try {
      se ? T(M, se) : M.removeAttribute(A);
    } catch {
      try {
        M.removeAttribute(A);
      } catch {
      }
    }
    if (A === "is")
      if (kt || Ot) try {
        ai(M);
      } catch {
      }
      else try {
        M.setAttribute(A, "");
      } catch {
      }
  }, hs = function(A) {
    const M = P(A);
    if (M)
      for (let se = M.length - 1; se >= 0; --se) {
        const ce = M[se], Ie = ce && ce.name;
        typeof Ie != "string" || ne[rt(Ie)] || or(A, ce, Ie);
      }
  }, Fr = function(A, M) {
    let se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const ce = [A];
    for (; ce.length > 0; ) {
      const Ie = ce.pop();
      if (M(Ie) === !1) continue;
      if (se && $(Ie) === At.element) {
        const We = L(Ie);
        zi(We) && ce.push(We);
      }
      const Me = x(Ie);
      if (Me) for (let We = Me.length - 1; We >= 0; --We) ce.push(Me[We]);
    }
  }, Mr = function(A) {
    Fr(A, (M) => {
      $(M) === At.element && hs(M);
    });
  }, Ur = function(A) {
    const M = [];
    return Fr(A, (se) => {
      M.push(se);
    }, !0), M;
  }, $u = function(A, M) {
    const se = nc();
    Sa(Ur(A), (ce) => {
      $(ce) === At.element && rc(se, ce);
    }), Sa(M, (ce) => {
      $(ce) === At.element && !cl(se, ce) && hs(ce);
    });
  }, ps = function(A, M) {
    let se = !1;
    return Sa(t.removed, (ce) => {
      ce.element && (se = se || ce.element === A, Mr(ce.element));
    }), $u(A, M), se;
  }, xu = 8, Ou = function(A, M) {
    const se = Ai;
    let ce = null;
    const Ie = () => (ce || (ce = nc(), Sa(M, (Me) => {
      rc(ce, Me);
    })), ce);
    for (let Me = 0; ; Me++) {
      const We = Ur(A), mt = [A];
      let Ct = !1;
      if (Sa(We, (Tt) => {
        $(Tt) === At.documentFragment ? ul(mt, Tt) : !Ct && !cl(se, Tt) && (Ct = cl(Ie(), Tt));
      }), !Ct) return;
      if (Me >= xu) throw Ca("the tree kept changing during in-place sanitization; refusing to return it");
      Sa(mt, (Tt, Dt) => {
        Nu(Tt, Dt > 0, A, Ie());
      });
    }
  }, Nu = function(A, M, se, ce) {
    const Ie = ur(A);
    let Me;
    for (; Me = Ie.nextNode(); )
      !cl(ce, Me) || cl(Ai, Me) || (M && di(K.uponSanitizeShadowNode, Me, null), mi(Me, se), hr(Me, se), zi(Me.content) && tn(Me.content));
  }, Ru = function(A) {
    Ai && rc(Ai, A);
  }, vs = function(A, M) {
    return at ? A === "patchsrc" ? !0 : A === "for" && M !== "label" && M !== "output" : !1;
  }, Iu = function(A) {
    at && Fr(A, (M) => {
      const se = $(M);
      if (se === At.processingInstruction || se === At.comment && Mt(Fh, M.data)) {
        try {
          k(M);
        } catch {
        }
        return !1;
      }
      if (se === At.element) {
        const ce = M, Ie = rt(H(M));
        try {
          ce.hasAttribute && ce.hasAttribute("patchsrc") && ce.removeAttribute("patchsrc"), ce.hasAttribute && ce.hasAttribute("for") && vs("for", Ie) && ce.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(A) {
    let M = null, se = null;
    if (vi) A = "<remove></remove>" + A;
    else {
      const Me = $h(A, /^[\r\n\t ]+/);
      se = Me && Me[0];
    }
    Ei === "application/xhtml+xml" && fa === gi && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const ce = le ? re(A) : A;
    if (fa === gi) try {
      M = new y().parseFromString(ce, Ei);
    } catch {
    }
    if (!M || !M.documentElement) {
      M = Le.createDocument(fa, "template", null);
      try {
        M.documentElement.innerHTML = Ya ? B : ce;
      } catch {
      }
    }
    const Ie = M.body || M.documentElement;
    return A && se && Ie.insertBefore(i.createTextNode(se), Ie.childNodes[0] || null), fa === gi ? Xe.call(M, dt ? "html" : "body")[0] : dt ? M.documentElement : Ie;
  }, ur = function(A) {
    const M = Q ? Q(A) : A.ownerDocument;
    return Oe.call(M || A, A, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, Qa = function(A) {
    return A = dl(A, te, " "), A = dl(A, fe, " "), A = dl(A, De, " "), A;
  }, On = function(A) {
    var M;
    cr(A);
    const se = (M = A.querySelectorAll) === null || M === void 0 ? void 0 : M.call(A, "template");
    se && Sa(se, (ce) => {
      zi(ce.content) && On(ce.content);
    });
  }, cr = function(A) {
    A.normalize();
    const M = Q ? Q(A) : A.ownerDocument, se = Oe.call(M || A, A, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let ce = se.nextNode();
    for (; ce; )
      ce.data = Qa(ce.data), ce = se.nextNode();
  }, en = function(A) {
    const M = pe ? pe(A) : null;
    return typeof M != "string" || rt(M) !== "form" ? !1 : typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || A.attributes !== P(A) || typeof A.removeAttribute != "function" || typeof A.removeAttributeNode != "function" || typeof A.getAttributeNode != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function" || A.nodeType !== N(A) || A.childNodes !== x(A);
  }, zi = function(A) {
    if (!N || typeof A != "object" || A === null) return !1;
    try {
      return N(A) === At.documentFragment;
    } catch {
      return !1;
    }
  }, Nn = function(A) {
    if (!N || typeof A != "object" || A === null) return !1;
    try {
      return typeof N(A) == "number";
    } catch {
      return !1;
    }
  };
  function di(ge, A, M) {
    ge.length !== 0 && Sa(ge, (se) => {
      se.call(t, A, M, va);
    });
  }
  const gs = function(A, M) {
    return !!(at && A.hasChildNodes() && !Nn(A.firstElementChild) && Mt(dc, A.textContent) && Mt(dc, A.innerHTML) || at && R_[M] && $(A) === At.element && J(A) === gi && (Nn(A.firstElementChild) || typeof A.textContent == "string" && Mt(dc, A.textContent)) || A.nodeType === At.processingInstruction || at && A.nodeType === At.comment && Mt(Fh, A.data));
  }, dr = function(A, M) {
    if (A instanceof RegExp) return Mt(A, M);
    if (A instanceof Function) {
      for (var se = arguments.length, ce = new Array(se > 2 ? se - 2 : 0), Ie = 2; Ie < se; Ie++) ce[Ie - 2] = arguments[Ie];
      return !!A(M, ...ce);
    }
    return !1;
  }, zr = function(A, M, se) {
    if (!ue[M] && Br(M) && dr(me.tagNameCheck, M)) return !1;
    if (Yi && !Xi[M] && !Xi[Kn(M)]) {
      const ce = R(A), Ie = x(A);
      if (Ie && ce) {
        const Me = Ie.length;
        for (let We = Me - 1; We >= 0; --We) {
          const mt = A === se ? m(Ie[We], !0) : Ie[We];
          ce.insertBefore(mt, C(A));
        }
      }
    }
    return ai(A), !0;
  }, fr = function(A, M, se, ce) {
    return A.length === 0 ? M : M === se || M === ce ? ki(M) : M;
  }, ga = function(A, M) {
    return A === M || R(A) !== null ? !1 : (En && Mr(A), !0);
  }, mi = function(A, M) {
    if (Ru(A), di(K.beforeSanitizeElements, A, null), ga(A, M)) return !0;
    if (en(A))
      return ai(A), !0;
    const se = rt(H(A));
    if (U = fr(K.uponSanitizeElement, U, ee, bt), di(K.uponSanitizeElement, A, {
      tagName: se,
      allowedTags: U
    }), ga(A, M)) return !0;
    if (gs(A, se))
      return ai(A), !0;
    if (ue[se] || !(we.tagCheck instanceof Function && we.tagCheck(se)) && !U[se]) {
      const ce = zr(A, se, M);
      return ce === !1 && (di(K.afterSanitizeElements, A, null), ga(A, M)) ? !0 : ce;
    }
    if ($(A) === At.element && !Eu(A) || (se === "noscript" || se === "noembed" || se === "noframes") && Mt(N_, A.innerHTML))
      return ai(A), !0;
    if (qe && A.nodeType === At.text) {
      const ce = Qa(A.textContent);
      A.textContent !== ce && (ul(t.removed, { element: A.cloneNode() }), A.textContent = ce);
    }
    return di(K.afterSanitizeElements, A, null), ga(A, M);
  }, jr = function(A, M, se) {
    if (Ne[M] || vs(M, A) || qt && (M === "id" || M === "name") && (se in i || se in Cu)) return !1;
    const ce = ne[M] || we.attributeCheck instanceof Function && we.attributeCheck(M, A);
    return Re && Mt(ct, M) || $e && Mt(ie, M) ? !0 : ce ? Ka[M] || Mt(V, dl(se, O, "")) || (M === "src" || M === "xlink:href" || M === "href") && A !== "script" && xh(se, "data:") === 0 && da[A] || Ve && !Mt(S, dl(se, O, "")) ? !0 : !se : Br(A) && dr(me.tagNameCheck, A) && dr(me.attributeNameCheck, M, A) || M === "is" && me.allowCustomizedBuiltInElements && dr(me.tagNameCheck, se);
  }, ms = tt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Br = function(A) {
    return !ms[Kn(A)] && Mt(D, A);
  }, Lu = function(A, M, se, ce) {
    if (le && typeof v == "object" && typeof v.getAttributeType == "function" && !se) switch (v.getAttributeType(A, M)) {
      case "TrustedHTML":
        return re(ce);
      case "TrustedScriptURL":
        return X(ce);
    }
    return ce;
  }, Pu = function(A, M, se, ce) {
    try {
      return se ? A.setAttributeNS(se, M, ce) : A.setAttribute(M, ce), en(A) ? (ai(A), !1) : !0;
    } catch {
      return Ja(M, A), !1;
    }
  }, Hr = function(A, M) {
    return at && Mt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, M) ? !0 : Kn(A) === "attributename" && $h(M, "href") !== null;
  }, hr = function(A, M) {
    if (di(K.beforeSanitizeAttributes, A, null), ga(A, M)) return;
    const se = A.attributes;
    if (!se || en(A)) return;
    ne = fr(K.uponSanitizeAttribute, ne, oe, ii);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ne,
      forceKeepAttr: void 0
    };
    let Ie = se.length;
    const Me = rt(A.nodeName);
    for (; Ie--; ) {
      const We = se[Ie], mt = We.name, Ct = We.namespaceURI, Tt = We.value, Dt = rt(mt), $i = Tt;
      let Gt = mt === "value" ? $i : h_($i), ys = !1;
      if (ce.attrName = Dt, ce.attrValue = Gt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, di(K.uponSanitizeAttribute, A, ce), Gt = ce.attrValue, bi && (Dt === "id" || Dt === "name") && xh(Gt, An) !== 0 && (Ja(mt, A, We), Gt = An + Gt, ys = !0), Hr(mt, Gt)) {
        Ja(mt, A, We);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          Ja(mt, A, We);
          continue;
        }
        if (!Ze && Mt(Mh, Gt)) {
          Ja(mt, A, We);
          continue;
        }
        if (qe && (Gt = Qa(Gt)), !jr(Me, Dt, Gt)) {
          Ja(mt, A, We);
          continue;
        }
        Gt = Lu(Me, Dt, Ct, Gt), Gt !== $i && Pu(A, mt, Ct, Gt) && ys && Eh(t.removed);
      }
    }
    di(K.afterSanitizeAttributes, A, null), ga(A, M);
  }, tn = function(A) {
    let M = null;
    const se = ur(A);
    for (di(K.beforeSanitizeShadowDOM, A, null); M = se.nextNode(); )
      if (di(K.uponSanitizeShadowNode, M, null), mi(M, A), hr(M, A), zi(M.content) && tn(M.content), $(M) === At.element) {
        const ce = L(M);
        zi(ce) && (Vr(ce), tn(ce));
      }
    qe && cr(A), di(K.afterSanitizeShadowDOM, A, null);
  }, Vr = function(A) {
    const M = [{
      node: A,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const se = M.pop();
      if (se.shadow) {
        tn(se.shadow);
        continue;
      }
      const ce = se.node, Ie = $(ce) === At.element, Me = x(ce);
      if (Me) for (let We = Me.length - 1; We >= 0; --We) M.push({
        node: Me[We],
        shadow: null
      });
      if (Ie) {
        const We = pe ? pe(ce) : null;
        if (typeof We == "string" && rt(We) === "template") {
          const mt = ce.content;
          zi(mt) && M.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (Ie) {
        const We = L(ce);
        zi(We) && M.push({
          node: null,
          shadow: We
        }, {
          node: We,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ge) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, se = null, ce = null, Ie = null;
    if (Ya = !ge, Ya && (ge = "<!-->"), typeof ge != "string" && !Nn(ge) && (ge = g_(ge), typeof ge != "string"))
      throw Ca("dirty is not a string, aborting");
    if (!t.isSupported) return ge;
    _t ? (U = bt, ne = ii) : Pr(A), (K.uponSanitizeElement.length > 0 || K.uponSanitizeAttribute.length > 0) && (U = ki(U)), K.uponSanitizeAttribute.length > 0 && (ne = ki(ne)), t.removed = [];
    const Me = En && typeof ge != "string" && Nn(ge);
    let We = [];
    const mt = Ai;
    if (Me) {
      Iu(ge);
      const Dt = H(ge);
      if (typeof Dt == "string") {
        const $i = rt(Dt);
        if (!U[$i] || ue[$i])
          throw Dr(ge), Ca("root node is forbidden and cannot be sanitized in-place");
      }
      if (en(ge))
        throw Dr(ge), Ca("root node is clobbered and cannot be sanitized in-place");
      We = Ur(ge), Ai = nc();
    } else if (Nn(ge))
      M = bs("<!---->"), se = M.ownerDocument.importNode(ge, !0), se.nodeType === At.element && se.nodeName === "BODY" || se.nodeName === "HTML" ? M = se : M.appendChild(se), Vr(M);
    else {
      if (!kt && !qe && !dt && ge.indexOf("<") === -1) return le && Ui ? re(ge) : ge;
      if (M = bs(ge), !M) return kt ? null : Ui ? B : "";
    }
    M && vi && ai(M.firstChild);
    const Ct = Me ? ge : M;
    try {
      Me && Vr(ge);
      const Dt = ur(Ct);
      for (; ce = Dt.nextNode(); )
        mi(ce, Ct), hr(ce, Ct), zi(ce.content) && tn(ce.content);
      Me && Ou(ge, We);
    } catch (Dt) {
      throw Me && (Dr(ge), ps(ge, We)), Dt;
    } finally {
      Ai = mt;
    }
    if (Me) {
      if (ps(ge, We)) throw Ca("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return qe && On(ge), ge;
    }
    if (kt) {
      if (qe && On(M), Ot)
        for (Ie = Ue.call(M.ownerDocument); M.firstChild; ) Ie.appendChild(M.firstChild);
      else Ie = M;
      return (ne.shadowroot || ne.shadowrootmode) && (Ie = Se.call(a, Ie, !0)), Ie;
    }
    let Tt = dt ? M.outerHTML : M.innerHTML;
    return dt && U["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Mt(x_, M.ownerDocument.doctype.name) && (Tt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Tt), qe && (Tt = Qa(Tt)), le && Ui ? re(Tt) : Tt;
  }, t.setConfig = function() {
    let ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pr(ge), _t = !0, bt = U, ii = ne;
  }, t.clearConfig = function() {
    va = null, _t = !1, bt = null, ii = null, le = W, B = "";
  }, t.isValidAttribute = function(ge, A, M) {
    va || Pr({});
    const se = rt(ge), ce = rt(A);
    return typeof M == "string" && (Hr(A, M) || !Ze && Mt(Mh, M)) ? !1 : jr(se, ce, M);
  }, t.addHook = function(ge, A) {
    typeof A == "function" && hi(K, ge) && ul(K[ge], A);
  }, t.removeHook = function(ge, A) {
    if (hi(K, ge)) {
      if (A !== void 0) {
        const M = c_(K[ge], A);
        return M === -1 ? void 0 : f_(K[ge], M, 1)[0];
      }
      return Eh(K[ge]);
    }
  }, t.removeHooks = function(ge) {
    hi(K, ge) && (K[ge] = []);
  }, t.removeAllHooks = function() {
    K = Uh();
  }, t;
}
var sb = lb();
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc, zh;
function P_() {
  if (zh) return hc;
  zh = 1;
  var e = /["'&<>]/;
  hc = t;
  function t(i) {
    var a = "" + i, n = e.exec(a);
    if (!n)
      return a;
    var r, s = "", c = 0, d = 0;
    for (c = n.index; c < a.length; c++) {
      switch (a.charCodeAt(c)) {
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
      d !== c && (s += a.substring(d, c)), d = c + 1, s += r;
    }
    return d !== c ? s + a.substring(d, c) : s;
  }
  return hc;
}
var D_ = P_();
const ho = /* @__PURE__ */ Pd(D_);
function ob() {
  return globalThis._nc_l10n_locale;
}
function F_() {
  return ob().replaceAll(/_/g, "-");
}
function us() {
  return globalThis._nc_l10n_language;
}
function M_(e) {
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
function _(e, t, i, a, n) {
  const r = typeof i == "object" ? i : void 0, s = typeof a == "number" ? a : typeof i == "number" ? i : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof n == "object" ? n : typeof a == "object" ? a : {}
  }, d = (C) => C, y = (c.sanitize ? sb.sanitize : d) || d, v = c.escape ? ho : d, g = (C) => typeof C == "string" || typeof C == "number", m = (C, x, R) => C.replace(/%n/g, "" + R).replace(/{([^{}]*)}/g, (L, P) => {
    if (x === void 0 || !(P in x))
      return v(L);
    const N = x[P];
    return g(N) ? v(`${N}`) : typeof N == "object" && g(N.value) ? (N.escape !== !1 ? ho : d)(`${N.value}`) : v(L);
  });
  let T = (n?.bundle ?? ub(e)).translations[t] || t;
  return T = Array.isArray(T) ? T[0] : T, y(typeof r == "object" || s !== void 0 ? m(
    T,
    r,
    s
  ) : T);
}
function Rt(e, t, i, a, n, r) {
  const s = "_" + t + "_::_" + i + "_", c = r?.bundle ?? ub(e), d = c.translations[s];
  if (typeof d < "u") {
    const y = d;
    if (Array.isArray(y)) {
      const v = c.pluralFunction(a);
      return _(e, y[v], n, a, r);
    }
  }
  return a === 1 ? _(e, t, n, a, r) : _(e, i, n, a, r);
}
function U_(e, t = us()) {
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
function z_(e, t = () => "", i = 256) {
  const a = /* @__PURE__ */ new Map();
  let n;
  return (...r) => {
    if (r.length !== 2 || r.some((y) => typeof y != "string")) return e(...r);
    const s = t();
    s !== n && (a.clear(), n = s);
    const c = JSON.stringify(r);
    if (a.has(c)) return a.get(c);
    const d = e(...r);
    return a.size >= i && a.delete(a.keys().next().value), a.set(c, d), d;
  };
}
class po {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, a) {
    this.scope = `${a ? po.GLOBAL_SCOPE_PERSISTENT : po.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
class j_ {
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
  return new j_(e);
}
function B_() {
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
  9007199254740991, a = 16, n = t - 6;
  return vc = {
    MAX_LENGTH: t,
    MAX_SAFE_COMPONENT_LENGTH: a,
    MAX_SAFE_BUILD_LENGTH: n,
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
function H_() {
  return Hh || (Hh = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: a,
      MAX_LENGTH: n
    } = fb(), r = db();
    t = e.exports = {};
    const s = t.re = [], c = t.safeRe = [], d = t.src = [], y = t.safeSrc = [], v = t.t = {};
    let g = 0;
    const m = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", n],
      [m, a]
    ], T = (x) => {
      for (const [R, L] of k)
        x = x.split(`${R}*`).join(`${R}{0,${L}}`).split(`${R}+`).join(`${R}{1,${L}}`);
      return x;
    }, C = (x, R, L) => {
      const P = T(R), N = g++;
      r(x, N, R), v[x] = N, d[N] = R, y[N] = P, s[N] = new RegExp(R, L ? "g" : void 0), c[N] = new RegExp(P, L ? "g" : void 0);
    };
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"), C("NUMERICIDENTIFIERLOOSE", "\\d+"), C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), C("MAINVERSION", `(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})\\.(${d[v.NUMERICIDENTIFIER]})`), C("MAINVERSIONLOOSE", `(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})\\.(${d[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASEIDENTIFIER", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIER]})`), C("PRERELEASEIDENTIFIERLOOSE", `(?:${d[v.NONNUMERICIDENTIFIER]}|${d[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASE", `(?:-(${d[v.PRERELEASEIDENTIFIER]}(?:\\.${d[v.PRERELEASEIDENTIFIER]})*))`), C("PRERELEASELOOSE", `(?:-?(${d[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[v.PRERELEASEIDENTIFIERLOOSE]})*))`), C("BUILDIDENTIFIER", `${m}+`), C("BUILD", `(?:\\+(${d[v.BUILDIDENTIFIER]}(?:\\.${d[v.BUILDIDENTIFIER]})*))`), C("FULLPLAIN", `v?${d[v.MAINVERSION]}${d[v.PRERELEASE]}?${d[v.BUILD]}?`), C("FULL", `^${d[v.FULLPLAIN]}$`), C("LOOSEPLAIN", `[v=\\s]*${d[v.MAINVERSIONLOOSE]}${d[v.PRERELEASELOOSE]}?${d[v.BUILD]}?`), C("LOOSE", `^${d[v.LOOSEPLAIN]}$`), C("GTLT", "((?:<|>)?=?)"), C("XRANGEIDENTIFIERLOOSE", `${d[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), C("XRANGEIDENTIFIER", `${d[v.NUMERICIDENTIFIER]}|x|X|\\*`), C("XRANGEPLAIN", `[v=\\s]*(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:\\.(${d[v.XRANGEIDENTIFIER]})(?:${d[v.PRERELEASE]})?${d[v.BUILD]}?)?)?`), C("XRANGEPLAINLOOSE", `[v=\\s]*(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[v.XRANGEIDENTIFIERLOOSE]})(?:${d[v.PRERELEASELOOSE]})?${d[v.BUILD]}?)?)?`), C("XRANGE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAIN]}$`), C("XRANGELOOSE", `^${d[v.GTLT]}\\s*${d[v.XRANGEPLAINLOOSE]}$`), C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), C("COERCE", `${d[v.COERCEPLAIN]}(?:$|[^\\d])`), C("COERCEFULL", d[v.COERCEPLAIN] + `(?:${d[v.PRERELEASE]})?(?:${d[v.BUILD]})?(?:$|[^\\d])`), C("COERCERTL", d[v.COERCE], !0), C("COERCERTLFULL", d[v.COERCEFULL], !0), C("LONETILDE", "(?:~>?)"), C("TILDETRIM", `(\\s*)${d[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", C("TILDE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAIN]}$`), C("TILDELOOSE", `^${d[v.LONETILDE]}${d[v.XRANGEPLAINLOOSE]}$`), C("LONECARET", "(?:\\^)"), C("CARETTRIM", `(\\s*)${d[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", C("CARET", `^${d[v.LONECARET]}${d[v.XRANGEPLAIN]}$`), C("CARETLOOSE", `^${d[v.LONECARET]}${d[v.XRANGEPLAINLOOSE]}$`), C("COMPARATORLOOSE", `^${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]})$|^$`), C("COMPARATOR", `^${d[v.GTLT]}\\s*(${d[v.FULLPLAIN]})$|^$`), C("COMPARATORTRIM", `(\\s*)${d[v.GTLT]}\\s*(${d[v.LOOSEPLAIN]}|${d[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", C("HYPHENRANGE", `^\\s*(${d[v.XRANGEPLAIN]})\\s+-\\s+(${d[v.XRANGEPLAIN]})\\s*$`), C("HYPHENRANGELOOSE", `^\\s*(${d[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[v.XRANGEPLAINLOOSE]})\\s*$`), C("STAR", "(<|>)?=?\\s*\\*"), C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(zs, zs.exports)), zs.exports;
}
var bc, Vh;
function V_() {
  if (Vh) return bc;
  Vh = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return bc = (a) => a ? typeof a != "object" ? e : a : t, bc;
}
var gc, qh;
function q_() {
  if (qh) return gc;
  qh = 1;
  const e = /^[0-9]+$/, t = (a, n) => {
    if (typeof a == "number" && typeof n == "number")
      return a === n ? 0 : a < n ? -1 : 1;
    const r = e.test(a), s = e.test(n);
    return r && s && (a = +a, n = +n), a === n ? 0 : r && !s ? -1 : s && !r ? 1 : a < n ? -1 : 1;
  };
  return gc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (a, n) => t(n, a)
  }, gc;
}
var mc, Gh;
function hb() {
  if (Gh) return mc;
  Gh = 1;
  const e = db(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = fb(), { safeRe: a, t: n } = H_(), r = V_(), { compareIdentifiers: s } = q_(), c = (y, v) => {
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
      const m = v.trim().match(g.loose ? a[n.LOOSE] : a[n.FULL]);
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
          const k = `-${g}`.match(this.options.loose ? a[n.PRERELEASELOOSE] : a[n.PRERELEASE]);
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
function G_() {
  if (Kh) return yc;
  Kh = 1;
  const e = hb();
  return yc = (i, a) => new e(i, a).major, yc;
}
var K_ = G_();
const Wh = /* @__PURE__ */ Pd(K_);
var _c, Yh;
function W_() {
  if (Yh) return _c;
  Yh = 1;
  const e = hb();
  return _c = (i, a, n = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, a);
    } catch (r) {
      if (!n)
        return null;
      throw r;
    }
  }, _c;
}
var wc, Zh;
function Y_() {
  if (Zh) return wc;
  Zh = 1;
  const e = W_();
  return wc = (i, a) => {
    const n = e(i, a);
    return n ? n.version : null;
  }, wc;
}
var Z_ = Y_();
const X_ = /* @__PURE__ */ Pd(Z_);
class J_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !X_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Wh(t.getVersion()) !== Wh(this.getVersion()) && console.warn(
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
class Q_ {
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
      (this.handlers.get(t) || []).filter((a) => a !== i)
    );
  }
  emit(t, ...i) {
    (this.handlers.get(t) || []).forEach((n) => {
      try {
        n(i[0]);
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
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? hl = new J_(window._nc_event_bus) : hl = window._nc_event_bus = new Q_(), hl);
}
function pb(e, t) {
  Dd().subscribe(e, t);
}
function e0(e, t) {
  Dd().unsubscribe(e, t);
}
function Fa(e, ...t) {
  Dd().emit(e, ...t);
}
const vb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const t0 = Object.prototype.toString, i0 = (e) => t0.call(e) === "[object Object]", mr = () => {
}, a0 = /* @__PURE__ */ n0();
function n0() {
  var e, t, i;
  return vb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function kc(e) {
  return Array.isArray(e) ? e : [e];
}
function r0(e, t, i) {
  return Ge(e, t, {
    ...i,
    immediate: !0
  });
}
const bb = vb ? window : void 0;
function yl(e) {
  var t;
  const i = Pa(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function Or(...e) {
  const t = (a, n, r, s) => (a.addEventListener(n, r, s), () => a.removeEventListener(n, r, s)), i = z(() => {
    const a = kc(Pa(e[0])).filter((n) => n != null);
    return a.every((n) => typeof n != "string") ? a : void 0;
  });
  return r0(() => {
    var a, n;
    return [
      (a = (n = i.value) === null || n === void 0 ? void 0 : n.map((r) => yl(r))) !== null && a !== void 0 ? a : [bb].filter((r) => r != null),
      kc(Pa(i.value ? e[1] : e[0])),
      kc(u(i.value ? e[2] : e[1])),
      Pa(i.value ? e[3] : e[2])
    ];
  }, ([a, n, r, s], c, d) => {
    if (!a?.length || !n?.length || !r?.length) return;
    const y = i0(s) ? { ...s } : s, v = a.flatMap((g) => n.flatMap((m) => r.map((k) => t(g, m, k, y))));
    d(() => {
      v.forEach((g) => g());
    });
  }, { flush: "post" });
}
let Xh = !1;
function Jh(e, t, i = {}) {
  const { window: a = bb, ignore: n = [], capture: r = !0, detectIframe: s = !1, controls: c = !1 } = i;
  if (!a) return c ? {
    stop: mr,
    cancel: mr,
    trigger: mr
  } : mr;
  if (a0 && !Xh) {
    Xh = !0;
    const x = { passive: !0 };
    Array.from(a.document.body.children).forEach((R) => R.addEventListener("click", mr, x)), a.document.documentElement.addEventListener("click", mr, x);
  }
  let d = !0;
  const y = (x) => Pa(n).some((R) => {
    if (typeof R == "string") return Array.from(a.document.querySelectorAll(R)).some((L) => L === x.target || x.composedPath().includes(L));
    {
      const L = yl(R);
      return L && (x.target === L || x.composedPath().includes(L));
    }
  });
  function v(x) {
    const R = Pa(x);
    return R && R.$.subTree.shapeFlag === 16;
  }
  function g(x, R) {
    const L = Pa(x), P = L.$.subTree && L.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((N) => N.el === R.target || R.composedPath().includes(N.el));
  }
  const m = (x) => {
    const R = yl(e);
    if (x.target != null && !(!(R instanceof Element) && v(e) && g(e, x)) && !(!R || R === x.target || x.composedPath().includes(R))) {
      if ("detail" in x && x.detail === 0 && (d = !y(x)), !d) {
        d = !0;
        return;
      }
      t(x);
    }
  };
  let k = !1;
  const T = [
    Or(a, "click", (x) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), m(x));
    }, {
      passive: !0,
      capture: r
    }),
    Or(a, "pointerdown", (x) => {
      const R = yl(e);
      d = !y(x) && !!(R && !x.composedPath().includes(R));
    }, { passive: !0 }),
    s && Or(a, "blur", (x) => {
      setTimeout(() => {
        const R = yl(e);
        let L = a.document.activeElement;
        for (; L?.shadowRoot; ) L = L.shadowRoot.activeElement;
        L?.tagName === "IFRAME" && !R?.contains(a.document.activeElement) && t(x);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), C = () => T.forEach((x) => x());
  return c ? {
    stop: C,
    cancel: () => {
      d = !1;
    },
    trigger: (x) => {
      d = !0, m(x), d = !1;
    }
  } : C;
}
function l0(e, t = {}) {
  const { threshold: i = 50, onSwipe: a, onSwipeEnd: n, onSwipeStart: r, passive: s = !0 } = t, c = /* @__PURE__ */ Nt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Nt({
    x: 0,
    y: 0
  }), y = z(() => c.x - d.x), v = z(() => c.y - d.y), { max: g, abs: m } = Math, k = z(() => g(m(y.value), m(v.value)) >= i), T = /* @__PURE__ */ rv(!1), C = z(() => k.value ? m(y.value) > m(v.value) ? y.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), x = ($) => [$.touches[0].clientX, $.touches[0].clientY], R = ($, H) => {
    c.x = $, c.y = H;
  }, L = ($, H) => {
    d.x = $, d.y = H;
  }, P = {
    passive: s,
    capture: !s
  }, N = ($) => {
    T.value && n?.($, C.value), T.value = !1;
  }, pe = [
    Or(e, "touchstart", ($) => {
      if ($.touches.length !== 1) return;
      const [H, G] = x($);
      R(H, G), L(H, G), r?.($);
    }, P),
    Or(e, "touchmove", ($) => {
      if ($.touches.length !== 1) return;
      const [H, G] = x($);
      L(H, G), P.capture && !P.passive && Math.abs(y.value) > Math.abs(v.value) && $.preventDefault(), !T.value && k.value && (T.value = !0), T.value && a?.($);
    }, P),
    Or(e, ["touchend", "touchcancel"], N, P)
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
var s0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, a = e, n = Fy(), r = Dy(), s = /* @__PURE__ */ q([]), c = z(() => s.value.reduce((ie, S) => (ie[~~S.id] = S) && ie, {})), d = z(() => s.value.length), y = /* @__PURE__ */ q(null), v = /* @__PURE__ */ q(!1), g = /* @__PURE__ */ q({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), m = /* @__PURE__ */ q({
      splitter: null,
      timeoutId: null
    }), k = z(() => ({
      [`splitpanes splitpanes--${a.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": g.value.dragging,
      "splitpanes--ready": v.value
    })), T = () => {
      document.addEventListener("mousemove", R, { passive: !1 }), document.addEventListener("mouseup", L), "ontouchstart" in window && (document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", L));
    }, C = () => {
      document.removeEventListener("mousemove", R, { passive: !1 }), document.removeEventListener("mouseup", L), "ontouchstart" in window && (document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", L));
    }, x = (ie, S) => {
      let O = ie.target.closest(".splitpanes__splitter");
      if (O) {
        let { left: D, top: V } = O.getBoundingClientRect(), { clientX: U, clientY: ee } = "ontouchstart" in window && ie.touches ? ie.touches[0] : ie;
        g.value.cursorOffset = a.horizontal ? ee - V : U - D;
      }
      T(), g.value.mouseDown = !0, g.value.activeSplitter = S, document.documentElement.style.cursor = a.horizontal ? "row-resize" : "col-resize";
    }, R = (ie) => {
      g.value.mouseDown && (ie.preventDefault(), g.value.dragging || (window.getSelection()?.removeAllRanges(), g.value.dragging = !0), requestAnimationFrame(() => {
        G($(ie)), De("resize", { event: ie }, !0);
      }));
    }, L = (ie) => {
      g.value.dragging && (window.getSelection()?.removeAllRanges(), De("resized", { event: ie }, !0)), g.value.mouseDown = !1, g.value.activeSplitter = null, setTimeout(() => {
        g.value.dragging = !1, C(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ie, S) => {
      "ontouchstart" in window && (ie.preventDefault(), m.value.splitter === S ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, N(ie, S), m.value.splitter = null) : (m.value.splitter = S, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), g.value.dragging || De("splitter-click", {
        event: ie,
        index: S
      }, !0);
    }, N = (ie, S) => {
      if (De("splitter-dblclick", {
        event: ie,
        index: S
      }, !0), a.maximizePanes) {
        let O = 0;
        s.value = s.value.map((D, V) => (D.size = V === S ? D.max : D.min, V !== S && (O += D.min), D)), s.value[S].size -= O, De("pane-maximize", {
          event: ie,
          index: S,
          pane: s.value[S]
        }), De("resized", {
          event: ie,
          index: S
        }, !0);
      }
    }, pe = (ie, S) => {
      if (!a.keyboardStep) return;
      let O = a.horizontal ? ie.key === "ArrowDown" : ie.key === "ArrowRight", D = a.horizontal ? ie.key === "ArrowUp" : ie.key === "ArrowLeft";
      if (!O && !D) return;
      ie.preventDefault(), g.value.activeSplitter = S;
      let V = (O ? 1 : -1) * (a.rtl && !a.horizontal ? -1 : 1), U = B(S) + s.value[S].size;
      J(Math.min(Math.max(U + V * a.keyboardStep, 0), 100)), De("resize", { event: ie }, !0), De("resized", { event: ie }, !0), g.value.activeSplitter = null;
    }, Q = (ie, S) => {
      let O = c.value[S];
      O && De("pane-click", {
        event: ie,
        index: O.index,
        pane: O
      });
    }, $ = (ie) => {
      let S = y.value.getBoundingClientRect(), { clientX: O, clientY: D } = "ontouchstart" in window && ie.touches ? ie.touches[0] : ie;
      return {
        x: O - (a.horizontal ? 0 : g.value.cursorOffset) - S.left,
        y: D - (a.horizontal ? g.value.cursorOffset : 0) - S.top
      };
    }, H = (ie) => {
      ie = ie[a.horizontal ? "y" : "x"];
      let S = y.value[a.horizontal ? "clientHeight" : "clientWidth"];
      return a.rtl && !a.horizontal && (ie = S - ie), ie * 100 / S;
    }, G = (ie) => {
      J(H(ie));
    }, J = (ie) => {
      let S = g.value.activeSplitter;
      if (S === null || S >= s.value.length - 1) return;
      let O = {
        prevPanesSize: B(S),
        nextPanesSize: W(S),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, D = 0 + (a.pushOtherPanes ? 0 : O.prevPanesSize), V = 100 - (a.pushOtherPanes ? 0 : O.nextPanesSize);
      ie = Math.max(Math.min(ie, V), D);
      let U = [S, S + 1], ee = s.value[U[0]] || null, ne = s.value[U[1]] || null, oe = ee !== null && ee.max < 100 && ie >= ee.max + O.prevPanesSize, me = ne !== null && ne.max < 100 && ie <= 100 - (ne.max + W(S + 1));
      if (oe || me) {
        oe ? (ee.size = ee.max, ne.size = Math.min(Math.max(100 - ee.max - O.prevPanesSize - O.nextPanesSize, ne.min), ne.max)) : (ee.size = Math.min(Math.max(100 - ne.max - O.prevPanesSize - W(S + 1), ee.min), ee.max), ne.size = ne.max);
        return;
      }
      if (a.pushOtherPanes) {
        let ue = le(O, ie);
        if (!ue) return;
        ({ sums: O, panesToResize: U } = ue), ee = s.value[U[0]] || null, ne = s.value[U[1]] || null;
      }
      ee !== null && (ee.size = Math.min(Math.max(ie - O.prevPanesSize - O.prevReachedMinPanes, ee.min), ee.max)), ne !== null && (ne.size = Math.min(Math.max(100 - ie - O.nextPanesSize - O.nextReachedMinPanes, ne.min), ne.max));
    }, le = (ie, S) => {
      let O = g.value.activeSplitter, D = [O, O + 1];
      if (S < ie.prevPanesSize + s.value[D[0]].min) {
        if (D[0] = I(O).index, ie.prevReachedMinPanes = 0, D[0] < O && s.value.forEach((V, U) => {
          U > D[0] && U <= O && (V.size = V.min, ie.prevReachedMinPanes += V.min);
        }), D[0] === void 0) return ie.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((V, U) => {
          U > 0 && U <= O && (V.size = V.min, ie.prevReachedMinPanes += V.min);
        }), s.value[D[1]].size = 100 - ie.prevReachedMinPanes - s.value[0].min - ie.prevPanesSize - ie.nextPanesSize, null;
        ie.prevPanesSize = B(D[0]);
      }
      return S > 100 - ie.nextPanesSize - s.value[D[1]].min && (D[1] = j(O).index, ie.nextReachedMinPanes = 0, D[1] > O + 1 && s.value.forEach((V, U) => {
        U > O && U < D[1] && (V.size = V.min, ie.nextReachedMinPanes += V.min);
      }), ie.nextPanesSize = D[1] === void 0 ? 0 : W(D[1] - 1), D[1] === void 0) ? (ie.nextReachedMinPanes = 0, s.value.forEach((V, U) => {
        U >= O + 1 && (V.size = V.min, ie.nextReachedMinPanes += V.min);
      }), D[0] !== void 0 && (s.value[D[0]].size = 100 - ie.prevPanesSize - W(D[0] - 1)), null) : {
        sums: ie,
        panesToResize: D
      };
    }, B = (ie) => s.value.reduce((S, O, D) => S + (D < ie ? O.size : 0), 0), W = (ie) => s.value.reduce((S, O, D) => S + (D > ie + 1 ? O.size : 0), 0), I = (ie) => [...s.value].reverse().find((S) => S.index < ie && S.size > S.min) || {}, j = (ie) => s.value.find((S) => S.index > ie + 1 && S.size > S.min) || {}, Z = () => {
      let ie = Array.from(y.value?.children || []);
      for (let S of ie) {
        let O = S.classList.contains("splitpanes__pane"), D = S.classList.contains("splitpanes__splitter");
        !O && !D && (S.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (ie, S, O = !1) => {
      let D = ie - 1, V = document.createElement("div");
      V.classList.add("splitpanes__splitter"), O || (V.onmousedown = (U) => x(U, D), typeof window < "u" && "ontouchstart" in window && (V.ontouchstart = (U) => x(U, D)), V.onclick = (U) => P(U, D + 1), a.keyboardStep && (V.setAttribute("tabindex", "0"), V.setAttribute("role", "separator"), V.setAttribute("aria-orientation", a.horizontal ? "horizontal" : "vertical"), V.onkeydown = (U) => pe(U, D))), V.ondblclick = (U) => N(U, D + 1), S.parentNode.insertBefore(V, S);
    }, X = (ie) => {
      ie.onmousedown = null, ie.onclick = null, ie.ondblclick = null, ie.onkeydown = null, ie.remove();
    }, be = () => {
      let ie = Array.from(y.value?.children || []);
      for (let O of ie) O.className.includes("splitpanes__splitter") && X(O);
      let S = 0;
      for (let O of ie) O.className.includes("splitpanes__pane") && (!S && a.firstSplitter ? re(S, O, !0) : S && re(S, O), S++);
    }, Te = ({ uid: ie, ...S }) => {
      let O = c.value[ie];
      for (let [D, V] of Object.entries(S)) O[D] = V;
    }, Le = !1, Oe = (ie) => {
      let S = -1;
      Array.from(y.value?.children || []).some((O) => (O.className.includes("splitpanes__pane") && S++, O.isSameNode(ie.el))), s.value.splice(S, 0, {
        ...ie,
        index: S
      }), s.value.forEach((O, D) => O.index = D), v.value && !Le && (Le = !0, It(() => {
        be(), Xe({ addedPane: s.value[S] }), De("pane-add", { pane: s.value[S] }), Le = !1;
      }));
    }, Ue = (ie) => {
      let S = s.value.findIndex((D) => D.id === ie);
      s.value[S].el = null;
      let O = s.value.splice(S, 1)[0];
      s.value.forEach((D, V) => D.index = V), It(() => {
        be(), De("pane-remove", { pane: O }), Xe({ removedPane: {
          ...O
        } });
      });
    }, Xe = (ie = {}) => {
      !ie.addedPane && !ie.removedPane ? K() : s.value.some((S) => S.givenSize !== null || S.min || S.max < 100) ? te(ie) : Se(), v.value && De("resized");
    }, Se = () => {
      let ie = 100 / d.value, S = 100, O = [], D = [];
      for (let V of s.value) V.size = Math.max(Math.min(ie, V.max), V.min), S -= V.size, V.size >= V.max && O.push(V.id), V.size <= V.min && D.push(V.id);
      Math.abs(S) > 0.1 && fe(S, O, D);
    }, K = () => {
      let ie = 100, S = [], O = [], D = 0;
      for (let U of s.value) ie -= U.size, U.givenSize !== null && D++, U.size >= U.max && S.push(U.id), U.size <= U.min && O.push(U.id);
      let V = 100;
      if (ie > 0.1) {
        for (let U of s.value) U.givenSize === null && (U.size = Math.max(Math.min(ie / (d.value - D), U.max), U.min)), V -= U.size;
        V > 0.1 && fe(V, S, O);
      }
    }, te = ({ addedPane: ie, removedPane: S } = {}) => {
      let O = s.value.reduce((oe, me) => oe + (me.givenSize === null ? 0 : me.givenSize), 0), D = s.value.filter((oe) => oe.givenSize === null).length, V = D > 0 ? (100 - O) / D : 0, U = 0, ee = [], ne = [];
      for (let oe of s.value) U -= oe.size, oe.size >= oe.max && ee.push(oe.id), oe.size <= oe.min && ne.push(oe.id);
      if (!(Math.abs(U) < 0.1)) {
        U = 100;
        for (let oe of s.value) oe.givenSize === null && (oe.size = Math.max(Math.min(V, oe.max), oe.min)), U -= oe.size, oe.size >= oe.max && ee.push(oe.id), oe.size <= oe.min && ne.push(oe.id);
        Math.abs(U) > 0.1 && fe(U, ee, ne);
      }
    }, fe = (ie, S, O) => {
      let D;
      D = ie > 0 ? ie / (d.value - S.length) : ie / (d.value - O.length), s.value.forEach((V, U) => {
        if (ie > 0 && !S.includes(V.id)) {
          let ee = Math.max(Math.min(V.size + D, V.max), V.min), ne = ee - V.size;
          ie -= ne, V.size = ee;
        } else if (!O.includes(V.id)) {
          let ee = Math.max(Math.min(V.size + D, V.max), V.min), ne = ee - V.size;
          ie -= ne, V.size = ee;
        }
      }), Math.abs(ie) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, De = (ie, S = void 0, O = !1) => {
      let D = S?.index ?? g.value.activeSplitter ?? null;
      i(ie, {
        ...S,
        ...D !== null && { index: D },
        ...O && D !== null && {
          prevPane: s.value[D - +!!a.firstSplitter],
          nextPane: s.value[D + +!a.firstSplitter]
        },
        panes: s.value.map((V) => ({
          min: V.min,
          max: V.max,
          size: V.size
        }))
      });
    };
    Ge(() => a.firstSplitter, () => be()), Ge(() => a.horizontal, (ie) => It(() => {
      i("direction-changed", {
        horizontal: ie,
        panes: s.value.map((S) => ({
          min: S.min,
          max: S.max,
          size: S.size
        }))
      });
    })), xt(() => {
      Z(), be(), Xe(), De("ready"), v.value = !0;
    }), Ti(() => v.value = !1);
    let ct = () => {
      let { class: ie, ...S } = n;
      return fi("div", {
        ref: y,
        class: [k.value, ie],
        ...S
      }, r.default?.());
    };
    return Ii("panes", s), Ii("indexedPanes", c), Ii("horizontal", z(() => a.horizontal)), Ii("requestUpdate", Te), Ii("onPaneAdd", Oe), Ii("onPaneRemove", Ue), Ii("onPaneClick", Q), (ie, S) => (h(), Fe(xd(ct)));
  }
}), o0 = {
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
    let t = e, i = Zt("requestUpdate"), a = Zt("onPaneAdd"), n = Zt("horizontal"), r = Zt("onPaneRemove"), s = Zt("onPaneClick"), c = Sn()?.uid, d = Zt("indexedPanes"), y = z(() => d.value[c]), v = /* @__PURE__ */ q(null), g = z(() => {
      let C = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(C, k.value), m.value);
    }), m = z(() => {
      let C = parseFloat(t.minSize);
      return isNaN(C) ? 0 : C;
    }), k = z(() => {
      let C = parseFloat(t.maxSize);
      return isNaN(C) ? 100 : C;
    }), T = z(() => {
      let C = y.value?.size ?? (t.size === void 0 ? void 0 : g.value);
      return C === void 0 ? "" : `${n.value ? "height" : "width"}: ${C}%`;
    });
    return Ge(() => g.value, (C) => i({
      uid: c,
      size: C
    })), Ge(() => m.value, (C) => i({
      uid: c,
      min: C
    })), Ge(() => k.value, (C) => i({
      uid: c,
      max: C
    })), xt(() => {
      a({
        id: c,
        el: v.value,
        min: m.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : g.value,
        size: g.value
      });
    }), Ti(() => r(c)), (C, x) => (h(), p("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: x[0] ||= (R) => u(s)(R, C._.uid),
      style: pi(T.value)
    }, [He(C.$slots, "default")], 4));
  }
}, u0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", c0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", d0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", f0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Fd = 1024, gb = Fd / 2, vo = (e) => document.documentElement.clientWidth < e, mb = /* @__PURE__ */ q(vo(Fd)), yb = /* @__PURE__ */ q(vo(gb));
window.addEventListener("resize", () => {
  mb.value = vo(Fd), yb.value = vo(gb);
}, { passive: !0 });
function cs() {
  return /* @__PURE__ */ zl(mb);
}
function h0() {
  return /* @__PURE__ */ zl(yb);
}
class p0 {
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
    const i = Object.values(t.translations[""] ?? {}).map(({ msgid: a, msgid_plural: n, msgstr: r }) => n !== void 0 ? [`_${a}_::_${n}_`, r] : [a, r[0]]);
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
    return _("", t, i, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(t, i, a, n = {}) {
    return Rt("", t, i, a, n, { bundle: this.bundle });
  }
}
class v0 {
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
    const t = new p0((i) => U_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function b0() {
  return new v0();
}
const _b = b0().detectLanguage().build(), Pt = (...e) => _b.gettext(...e);
function Cn(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: a } of t) {
        if (i !== us() || !a)
          continue;
        const n = Object.fromEntries(Object.entries(a).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        _b.addTranslations({
          translations: {
            "": n
          }
        });
      }
      t.registered = !0;
    }
}
const g0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], m0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], y0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], _0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], w0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], k0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], S0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], C0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], T0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const A0 = /* @__PURE__ */ Symbol(""), [E0] = window.OC?.config?.version?.split(".") ?? [], wb = Number.parseInt(E0 ?? "35"), $0 = wb < 32, Tn = wb < 34, x0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function O0() {
  return Zt(x0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const ut = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, N0 = { class: "button-vue__wrapper" }, R0 = { class: "button-vue__icon" }, I0 = { class: "button-vue__text" }, L0 = /* @__PURE__ */ Vt({
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
    const i = e, a = t, { formBoxItemClass: n } = O0(), r = Zt(A0, null) !== null, s = z(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = z(() => s.value === "button" && typeof i.pressed == "boolean"), d = z(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), y = z(() => d.value.startsWith("tertiary")), v = z(() => i.alignment.split("-")[0]), g = z(() => i.alignment.includes("-")), m = Zt("NcPopover:trigger:attrs", () => ({}), !1), k = z(() => m()), T = z(() => {
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
    function C(x) {
      c.value && a("update:pressed", !i.pressed), a("click", x);
    }
    return (x, R) => (h(), Fe(xd(s.value), ti({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": y.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": g.value,
          "button-vue--legacy": u($0),
          "button-vue--legacy34": u(Tn)
        },
        u(n)
      ]],
      "aria-label": e.ariaLabel
    }, T.value, { onClick: C }), {
      default: ke(() => [
        l("span", N0, [
          l("span", R0, [
            He(x.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", I0, [
            He(x.$slots, "default", {}, () => [
              ae(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), oa = /* @__PURE__ */ ut(L0, [["__scopeId", "data-v-47ce59a3"]]), P0 = ["aria-hidden", "aria-label"], D0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, F0 = ["d"], M0 = ["innerHTML"], U0 = /* @__PURE__ */ Vt({
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
    N1((n) => ({
      fb515064: i.value
    }));
    const t = e, i = z(() => typeof t.size == "number" ? `${t.size}px` : t.size), a = z(() => {
      if (!t.svg || t.path)
        return;
      const n = sb.sanitize(t.svg), r = new DOMParser().parseFromString(n, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (n, r) => (h(), p("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      a.value ? (h(), p("span", {
        key: 1,
        innerHTML: a.value
      }, null, 8, M0)) : (h(), p("svg", D0, [
        l("path", { d: e.path }, null, 8, F0)
      ]))
    ], 10, P0));
  }
}), bu = /* @__PURE__ */ ut(U0, [["__scopeId", "data-v-aaedb1c3"]]);
j0();
function z0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Fa("csrf-token-update", { token: e, _internal: !0 }));
}
function j0() {
  pb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || z0(e);
  });
}
cb("public").persist().build();
let yr;
function Qh(e, t) {
  return e ? e.getAttribute(t) : null;
}
function B0() {
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
class H0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, a) {
    let n = "[" + Et[i].toUpperCase() + "] ";
    return a && a.app && (n += a.app + ": "), typeof t == "string" ? n + t : (n += `Unexpected ${t.name}`, t.message && (n += ` "${t.message}"`), i === Et.Debug && t.stack && (n += `

Stack trace:
${t.stack}`), n);
  }
  log(t, i, a) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && a?.error === void 0 && (a.error = i), t) {
        case Et.Debug:
          console.debug(this.formatMessage(i, Et.Debug, a), a);
          break;
        case Et.Info:
          console.info(this.formatMessage(i, Et.Info, a), a);
          break;
        case Et.Warn:
          console.warn(this.formatMessage(i, Et.Warn, a), a);
          break;
        case Et.Error:
          console.error(this.formatMessage(i, Et.Error, a), a);
          break;
        case Et.Fatal:
        default:
          console.error(this.formatMessage(i, Et.Fatal, a), a);
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
function V0(e) {
  return new H0(e);
}
class q0 {
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
    const t = B0();
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
function G0() {
  return new q0(V0);
}
const ir = G0().detectUser().setApp("@nextcloud/vue").build();
function K0(e) {
  let t = !1, i;
  return (...a) => (t || (t = !0, i = e(...a)), i);
}
let kb = "missing-app-name";
try {
  kb = "library";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const W0 = kb;
let Y0 = "";
try {
  Y0 = "0.3.0-alpha.3";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Sb() {
  return Zt("appName", W0);
}
const Z0 = K0(() => {
  const e = fo("core", "apps", []), t = Sb();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Yc = M_();
Cn(S0);
const X0 = /* @__PURE__ */ Vt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = cs();
    Ge(t, i), xt(() => {
      i(t.value);
    }), Ti(() => {
      t.value && i(!1);
    });
    function i(a = !0) {
      const n = document.querySelector(".app-navigation .app-navigation-toggle");
      n && (n.style.display = a ? "none" : "", a === !0 && Fa("toggle-navigation", { open: !1 }));
    }
    return (a, n) => (h(), Fe(u(oa), {
      "aria-label": u(Pt)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Pt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        de(u(bu), {
          directional: "",
          path: u(u0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), J0 = /* @__PURE__ */ ut(X0, [["__scopeId", "data-v-a28923a1"]]), ep = cb("nextcloud").persist().build(), Q0 = B_().theming?.name ?? "Nextcloud", ew = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: J0,
    Pane: o0,
    Splitpanes: s0
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
      localizedAppName: Z0(),
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
      return e.add(Q0), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = l0(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? Fa("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && Fa("toggle-navigation", {
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
}, tw = {
  key: 0,
  class: "hidden-visually"
}, iw = { class: "app-content-wrapper__list" }, aw = {
  key: 1,
  class: "app-content-wrapper"
};
function nw(e, t, i, a, n, r) {
  const s = Je("NcAppContentDetailsToggle"), c = Je("Pane"), d = Je("Splitpanes");
  return h(), p("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (h(), p("h1", tw, o(i.pageHeading), 1)) : E("", !0),
    e.$slots.list ? (h(), p(Y, { key: 1 }, [
      a.isMobile || i.layout === "no-split" ? (h(), p("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": a.isMobile
        }])
      }, [
        i.showDetails ? (h(), Fe(s, {
          key: 0,
          onClick: Ce(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : E("", !0),
        ye(l("div", iw, [
          He(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [tr, !i.showDetails]
        ]),
        i.showDetails ? He(e.$slots, "default", { key: 1 }, void 0, !0) : E("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (h(), p("div", aw, [
        de(d, {
          horizontal: i.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: a.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            de(c, {
              class: "splitpanes__pane-list",
              size: n.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: ke(() => [
                He(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            de(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: ke(() => [
                He(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : E("", !0)
    ], 64)) : E("", !0),
    e.$slots.list ? E("", !0) : He(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const rw = /* @__PURE__ */ ut(ew, [["render", nw], ["__scopeId", "data-v-51427d61"]]);
var Cb = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], bo = /* @__PURE__ */ Cb.join(","), Tb = typeof Element > "u", ar = Tb ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, go = !Tb && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, mo = function(t, i) {
  var a;
  i === void 0 && (i = !0);
  var n = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "inert"), r = n === "" || n === "true", s = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : mo(t.parentNode));
  return s;
}, lw = function(t) {
  var i, a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return a === "" || a === "true";
}, Ab = function(t, i, a) {
  if (mo(t))
    return [];
  var n = Array.prototype.slice.apply(t.querySelectorAll(bo));
  return i && ar.call(t, bo) && n.unshift(t), n = n.filter(a), n;
}, yo = function(t, i, a) {
  for (var n = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!mo(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), d = c.length ? c : s.children, y = yo(d, !0, a);
        a.flatten ? n.push.apply(n, y) : n.push({
          scopeParent: s,
          candidates: y
        });
      } else {
        var v = ar.call(s, bo);
        v && a.filter(s) && (i || !t.includes(s)) && n.push(s);
        var g = s.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(s), m = !mo(g, !1) && (!a.shadowRootFilter || a.shadowRootFilter(s));
        if (g && m) {
          var k = yo(g === !0 ? s.children : g.children, !0, a);
          a.flatten ? n.push.apply(n, k) : n.push({
            scopeParent: s,
            candidates: k
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return n;
}, Eb = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Zn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || lw(t)) && !Eb(t) ? 0 : t.tabIndex;
}, sw = function(t, i) {
  var a = Zn(t);
  return a < 0 && i && !Eb(t) ? 0 : a;
}, ow = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, $b = function(t) {
  return t.tagName === "INPUT";
}, uw = function(t) {
  return $b(t) && t.type === "hidden";
}, cw = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return i;
}, dw = function(t, i) {
  for (var a = 0; a < t.length; a++)
    if (t[a].checked && t[a].form === i)
      return t[a];
}, fw = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || go(t), a = function(c) {
    return i.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, n;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    n = a(window.CSS.escape(t.name));
  else
    try {
      n = a(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var r = dw(n, t.form);
  return !r || r === t;
}, hw = function(t) {
  return $b(t) && t.type === "radio";
}, pw = function(t) {
  return hw(t) && !fw(t);
}, vw = function(t) {
  var i, a = t && go(t), n = (i = a) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (a && a !== t) {
    var s, c, d;
    for (r = !!((s = n) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(n) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && n; ) {
      var y, v, g;
      a = go(n), n = (y = a) === null || y === void 0 ? void 0 : y.host, r = !!((v = n) !== null && v !== void 0 && (g = v.ownerDocument) !== null && g !== void 0 && g.contains(n));
    }
  }
  return r;
}, tp = function(t) {
  var i = t.getBoundingClientRect(), a = i.width, n = i.height;
  return a === 0 && n === 0;
}, bw = function(t, i) {
  var a = i.displayCheck, n = i.getShadowRoot;
  if (a === "full-native" && "checkVisibility" in t) {
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
  var d = ar.call(t, "details>summary:first-of-type"), y = d ? t.parentElement : t;
  if (ar.call(y, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  a === "full-native" || a === "legacy-full") {
    if (typeof n == "function") {
      for (var v = t; t; ) {
        var g = t.parentElement, m = go(t);
        if (g && !g.shadowRoot && n(g) === !0)
          return tp(t);
        t.assignedSlot ? t = t.assignedSlot : !g && m !== t.ownerDocument ? t = m.host : t = g;
      }
      t = v;
    }
    if (vw(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return tp(t);
  return !1;
}, gw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var a = 0; a < i.children.length; a++) {
          var n = i.children.item(a);
          if (n.tagName === "LEGEND")
            return ar.call(i, "fieldset[disabled] *") ? !0 : !n.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, _o = function(t, i) {
  return !(i.disabled || uw(i) || bw(i, t) || // For a details element with a summary, the summary element gets the focus
  cw(i) || gw(i));
}, Zc = function(t, i) {
  return !(pw(i) || Zn(i) < 0 || !_o(t, i));
}, mw = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, xb = function(t) {
  var i = [], a = [];
  return t.forEach(function(n, r) {
    var s = !!n.scopeParent, c = s ? n.scopeParent : n, d = sw(c, s), y = s ? xb(n.candidates) : c;
    d === 0 ? s ? i.push.apply(i, y) : i.push(c) : a.push({
      documentOrder: r,
      tabIndex: d,
      item: n,
      isScope: s,
      content: y
    });
  }), a.sort(ow).reduce(function(n, r) {
    return r.isScope ? n.push.apply(n, r.content) : n.push(r.content), n;
  }, []).concat(i);
}, yw = function(t, i) {
  i = i || {};
  var a;
  return i.getShadowRoot ? a = yo([t], i.includeContainer, {
    filter: Zc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: mw
  }) : a = Ab(t, i.includeContainer, Zc.bind(null, i)), xb(a);
}, _w = function(t, i) {
  i = i || {};
  var a;
  return i.getShadowRoot ? a = yo([t], i.includeContainer, {
    filter: _o.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : a = Ab(t, i.includeContainer, _o.bind(null, i)), a;
}, _r = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return ar.call(t, bo) === !1 ? !1 : Zc(i, t);
}, ww = /* @__PURE__ */ Cb.concat("iframe:not([inert]):not([inert] *)").join(","), Sc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return ar.call(t, ww) === !1 ? !1 : _o(i, t);
};
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, a = Array(t); i < t; i++) a[i] = e[i];
  return a;
}
function kw(e) {
  if (Array.isArray(e)) return Xc(e);
}
function ip(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = Ob(e)) || t) {
      i && (e = i);
      var a = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(d) {
          throw d;
        },
        f: n
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
function Sw(e, t, i) {
  return (t = $w(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function Cw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Tw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ap(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ap(Object(i), !0).forEach(function(a) {
      Sw(e, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ap(Object(i)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return e;
}
function Aw(e) {
  return kw(e) || Cw(e) || Ob(e) || Tw();
}
function Ew(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $w(e) {
  var t = Ew(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ob(e, t) {
  if (e) {
    if (typeof e == "string") return Xc(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Xc(e, t) : void 0;
  }
}
var Ia = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var a = Ia.getActiveTrap(t);
    i !== a && Ia.pauseTrap(t);
    var n = t.indexOf(i);
    n === -1 || t.splice(n, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var a = t.indexOf(i);
    a !== -1 && t.splice(a, 1), Ia.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = Ia.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = Ia.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, xw = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Ow = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, El = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Nw = function(t) {
  return El(t) && !t.shiftKey;
}, Rw = function(t) {
  return El(t) && t.shiftKey;
}, rp = function(t) {
  return setTimeout(t, 0);
}, pl = function(t) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
    a[n - 1] = arguments[n];
  return typeof t == "function" ? t.apply(void 0, a) : t;
}, js = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Iw = [], Md = function(t, i) {
  var a = i?.document || document, n = i?.trapStack || Iw, r = np({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Nw,
    isKeyBackward: Rw
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
  }, c, d = function(I, j, Z) {
    return I && I[j] !== void 0 ? I[j] : r[Z || j];
  }, y = function(I, j) {
    var Z = typeof j?.composedPath == "function" ? j.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var X = re.container, be = re.tabbableNodes;
      return X.contains(I) || Z?.includes(X) || be.find(function(Te) {
        return Te === I;
      });
    });
  }, v = function(I) {
    var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Z = j.hasFallback, re = Z === void 0 ? !1 : Z, X = j.params, be = X === void 0 ? [] : X, Te = r[I];
    if (typeof Te == "function" && (Te = Te.apply(void 0, Aw(be))), Te === !0 && (Te = void 0), !Te) {
      if (Te === void 0 || Te === !1)
        return Te;
      throw new Error("`".concat(I, "` was specified but was not a node, or did not return a node"));
    }
    var Le = Te;
    if (typeof Te == "string") {
      try {
        Le = a.querySelector(Te);
      } catch (Oe) {
        throw new Error("`".concat(I, '` appears to be an invalid selector; error="').concat(Oe.message, '"'));
      }
      if (!Le && !re)
        throw new Error("`".concat(I, "` as selector refers to no known node"));
    }
    return Le;
  }, g = function(I) {
    var j = I.activeElement;
    return j ? j.shadowRoot && j.shadowRoot.activeElement !== null ? g(j.shadowRoot) : j : null;
  }, m = function() {
    var I = v("initialFocus", {
      hasFallback: !0
    });
    if (I === !1)
      return !1;
    if (I === void 0 || I && !Sc(I, r.tabbableOptions)) {
      var j = g(a);
      if (y(j) >= 0)
        I = j;
      else {
        var Z = s.tabbableGroups[0], re = Z && Z.firstTabbableNode;
        I = re || v("fallbackFocus");
      }
    } else I === null && (I = v("fallbackFocus"));
    if (!I)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return I;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(I) {
      var j = yw(I, r.tabbableOptions), Z = _w(I, r.tabbableOptions), re = j.length > 0 ? j[0] : void 0, X = j.length > 0 ? j[j.length - 1] : void 0, be = Z.find(function(Oe) {
        return _r(Oe);
      }), Te = Z.slice().reverse().find(function(Oe) {
        return _r(Oe);
      }), Le = !!j.find(function(Oe) {
        return Zn(Oe) > 0;
      });
      return {
        container: I,
        tabbableNodes: j,
        focusableNodes: Z,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Le,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: re,
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
        firstDomTabbableNode: be,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: Te,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ue) {
          var Xe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Se = j.indexOf(Ue);
          return Se < 0 ? Xe ? Z.slice(Z.indexOf(Ue) + 1).find(function(K) {
            return _r(K);
          }) : Z.slice(0, Z.indexOf(Ue)).reverse().find(function(K) {
            return _r(K);
          }) : j[Se + (Xe ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(I) {
      return I.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(I) {
      return I.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, T = function(I) {
    if (I !== !1 && I !== g(document)) {
      if (!I || !I.focus) {
        T(m());
        return;
      }
      I.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = I, xw(I) && I.select();
    }
  }, C = function(I) {
    var j = v("setReturnFocus", {
      params: [I]
    });
    return j || (j === !1 ? !1 : I);
  }, x = function(I) {
    var j = I.target, Z = I.event, re = I.isBackward, X = re === void 0 ? !1 : re;
    j = j || js(Z), k();
    var be = null;
    if (s.tabbableGroups.length > 0) {
      var Te = y(j, Z), Le = Te >= 0 ? s.containerGroups[Te] : void 0;
      if (Te < 0)
        X ? be = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : be = s.tabbableGroups[0].firstTabbableNode;
      else if (X) {
        var Oe = s.tabbableGroups.findIndex(function(fe) {
          var De = fe.firstTabbableNode;
          return j === De;
        });
        if (Oe < 0 && (Le.container === j || Sc(j, r.tabbableOptions) && !_r(j, r.tabbableOptions) && !Le.nextTabbableNode(j, !1)) && (Oe = Te), Oe >= 0) {
          var Ue = Oe === 0 ? s.tabbableGroups.length - 1 : Oe - 1, Xe = s.tabbableGroups[Ue];
          be = Zn(j) >= 0 ? Xe.lastTabbableNode : Xe.lastDomTabbableNode;
        } else El(Z) || (be = Le.nextTabbableNode(j, !1));
      } else {
        var Se = s.tabbableGroups.findIndex(function(fe) {
          var De = fe.lastTabbableNode;
          return j === De;
        });
        if (Se < 0 && (Le.container === j || Sc(j, r.tabbableOptions) && !_r(j, r.tabbableOptions) && !Le.nextTabbableNode(j)) && (Se = Te), Se >= 0) {
          var K = Se === s.tabbableGroups.length - 1 ? 0 : Se + 1, te = s.tabbableGroups[K];
          be = Zn(j) >= 0 ? te.firstTabbableNode : te.firstDomTabbableNode;
        } else El(Z) || (be = Le.nextTabbableNode(j));
      }
    } else
      be = v("fallbackFocus");
    return be;
  }, R = function(I) {
    var j = js(I);
    if (!(y(j, I) >= 0)) {
      if (pl(r.clickOutsideDeactivates, I)) {
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
      pl(r.allowOutsideClick, I) || I.preventDefault();
    }
  }, L = function(I) {
    var j = js(I), Z = y(j, I) >= 0;
    if (Z || j instanceof Document)
      Z && (s.mostRecentlyFocusedNode = j);
    else {
      I.stopImmediatePropagation();
      var re, X = !0;
      if (s.mostRecentlyFocusedNode)
        if (Zn(s.mostRecentlyFocusedNode) > 0) {
          var be = y(s.mostRecentlyFocusedNode), Te = s.containerGroups[be].tabbableNodes;
          if (Te.length > 0) {
            var Le = Te.findIndex(function(Oe) {
              return Oe === s.mostRecentlyFocusedNode;
            });
            Le >= 0 && (r.isKeyForward(s.recentNavEvent) ? Le + 1 < Te.length && (re = Te[Le + 1], X = !1) : Le - 1 >= 0 && (re = Te[Le - 1], X = !1));
          }
        } else
          s.containerGroups.some(function(Oe) {
            return Oe.tabbableNodes.some(function(Ue) {
              return Zn(Ue) > 0;
            });
          }) || (X = !1);
      else
        X = !1;
      X && (re = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), T(re || s.mostRecentlyFocusedNode || m());
    }
    s.recentNavEvent = void 0;
  }, P = function(I) {
    var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = I;
    var Z = x({
      event: I,
      isBackward: j
    });
    Z && (El(I) && I.preventDefault(), T(Z));
  }, N = function(I) {
    (r.isKeyForward(I) || r.isKeyBackward(I)) && P(I, r.isKeyBackward(I));
  }, pe = function(I) {
    Ow(I) && pl(r.escapeDeactivates, I) !== !1 && (I.preventDefault(), c.deactivate());
  }, Q = function(I) {
    var j = js(I);
    y(j, I) >= 0 || pl(r.clickOutsideDeactivates, I) || pl(r.allowOutsideClick, I) || (I.preventDefault(), I.stopImmediatePropagation());
  }, $ = function() {
    if (s.active) {
      Ia.activateTrap(n, c);
      var I;
      return r.delayInitialFocus ? I = new Promise(function(j) {
        s.delayInitialFocusTimer = rp(function() {
          T(m()), j();
        });
      }) : T(m()), a.addEventListener("focusin", L, !0), a.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", pe), I;
    }
  }, H = function(I) {
    s.active && !s.paused && c._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var j = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), re = ip(I), X;
    try {
      for (re.s(); !(X = re.n()).done; ) {
        var be = X.value;
        j.add(be);
        for (var Te = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot, Le = be; Le; ) {
          j.add(Le);
          var Oe = Le.parentElement, Ue = [];
          Oe ? Ue = Oe.children : !Oe && Te && (Ue = Le.getRootNode().children, Oe = Le.getRootNode().host, Te = typeof ShadowRoot < "u" && Oe.getRootNode() instanceof ShadowRoot);
          var Xe = ip(Ue), Se;
          try {
            for (Xe.s(); !(Se = Xe.n()).done; ) {
              var K = Se.value;
              Z.add(K);
            }
          } catch (te) {
            Xe.e(te);
          } finally {
            Xe.f();
          }
          Le = Oe;
        }
      }
    } catch (te) {
      re.e(te);
    } finally {
      re.f();
    }
    j.forEach(function(te) {
      Z.delete(te);
    }), s.adjacentElements = Z;
  }, G = function() {
    if (s.active)
      return a.removeEventListener("focusin", L, !0), a.removeEventListener("mousedown", R, !0), a.removeEventListener("touchstart", R, !0), a.removeEventListener("click", Q, !0), a.removeEventListener("keydown", N, !0), a.removeEventListener("keydown", pe), c;
  }, J = function(I) {
    var j = s.mostRecentlyFocusedNode;
    if (j) {
      var Z = I.some(function(X) {
        var be = Array.from(X.removedNodes);
        return be.some(function(Te) {
          return Te === j || typeof Te.contains == "function" && Te.contains(j);
        });
      });
      if (Z && s.containers.some(function(X) {
        return X?.isConnected;
      })) {
        k();
        var re = m();
        T(re);
      }
    }
  }, le = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(J) : void 0, B = function() {
    le && (le.disconnect(), s.active && !s.paused && s.containers.map(function(I) {
      le.observe(I, {
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
    activate: function(I) {
      if (s.active)
        return this;
      var j = d(I, "onActivate"), Z = d(I, "onPostActivate"), re = d(I, "checkCanFocusTrap"), X = Ia.getActiveTrap(n), be = !1;
      if (X && !X.paused) {
        var Te;
        (Te = X._setSubtreeIsolation) === null || Te === void 0 || Te.call(X, !1), be = !0;
      }
      try {
        re || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = g(a), j?.({
          trap: c
        });
        var Le = function() {
          re && k();
          var Xe = function() {
            c._setSubtreeIsolation(!0), B(), Z?.({
              trap: c
            });
          }, Se = $();
          Se ? Se.then(Xe) : Xe();
        };
        if (re)
          return re(s.containers.concat()).then(Le, Le), this;
        Le();
      } catch (Ue) {
        if (X === Ia.getActiveTrap(n) && be) {
          var Oe;
          (Oe = X._setSubtreeIsolation) === null || Oe === void 0 || Oe.call(X, !0);
        }
        throw Ue;
      }
      return this;
    },
    deactivate: function(I) {
      if (!s.active)
        return this;
      var j = np({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, I);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || c._setSubtreeIsolation(!1), s.alreadySilent.clear(), G(), s.active = !1, s.paused = !1, B(), Ia.deactivateTrap(n, c);
      var Z = d(j, "onDeactivate"), re = d(j, "onPostDeactivate"), X = d(j, "checkCanReturnFocus"), be = d(j, "delayReturnFocus"), Te = d(j, "returnFocus", "returnFocusOnDeactivate");
      Z?.({
        trap: c
      });
      var Le = function() {
        Te && T(C(s.nodeFocusedBeforeActivation)), re?.({
          trap: c
        });
      }, Oe = function() {
        be && Te ? rp(Le) : Le();
      };
      return Te && X ? (X(C(s.nodeFocusedBeforeActivation)).then(Oe, Oe), this) : (Oe(), this);
    },
    pause: function(I) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, I)) : this;
    },
    unpause: function(I) {
      return s.active ? (s.manuallyPaused = !1, n[n.length - 1] !== this ? this : this._setPausedState(!1, I)) : this;
    },
    updateContainerElements: function(I) {
      var j = [].concat(I).filter(Boolean);
      return s.containers = j.map(function(Z) {
        return typeof Z == "string" ? a.querySelector(Z) : Z;
      }), r.isolateSubtrees && H(s.containers), s.active && (k(), s.paused || c._setSubtreeIsolation(!0)), B(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(I, j) {
        if (s.paused === I)
          return this;
        if (s.paused = I, I) {
          var Z = d(j, "onPause"), re = d(j, "onPostPause");
          Z?.({
            trap: c
          }), G(), c._setSubtreeIsolation(!1), B(), re?.({
            trap: c
          });
        } else {
          var X = d(j, "onUnpause"), be = d(j, "onPostUnpause");
          X?.({
            trap: c
          });
          var Te = function() {
            k();
            var Oe = function() {
              c._setSubtreeIsolation(!0), B(), be?.({
                trap: c
              });
            }, Ue = $();
            Ue ? Ue.then(Oe) : Oe();
          };
          Te();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(I) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(j) {
          var Z;
          I ? r.isolateSubtrees === "aria-hidden" ? ((j.ariaHidden === "true" || ((Z = j.getAttribute("aria-hidden")) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === "true") && s.alreadySilent.add(j), j.setAttribute("aria-hidden", "true")) : ((j.inert || j.hasAttribute("inert")) && s.alreadySilent.add(j), j.setAttribute("inert", !0)) : s.alreadySilent.has(j) || (r.isolateSubtrees === "aria-hidden" ? j.removeAttribute("aria-hidden") : j.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Nb = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Lw = /* @__PURE__ */ Vt({
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
function Pw(e, t, i, a, n, r) {
  return h(), p("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    l("div", {
      class: Ee(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: pi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    He(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Rb = /* @__PURE__ */ ut(Lw, [["render", Pw], ["__scopeId", "data-v-3e73e246"]]);
function Zl() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Dw() {
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
Cn(_0);
const Fw = { class: "app-navigation-toggle-wrapper" }, Mw = /* @__PURE__ */ Vt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Ov(e, "open"), i = z(() => t.value ? Pt("Close navigation") : Pt("Open navigation"));
    return (a, n) => (h(), p("div", Fw, [
      de(u(oa), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: n[0] || (n[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          de(bu, {
            path: u(f0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Uw = /* @__PURE__ */ ut(Mw, [["__scopeId", "data-v-e8177cc7"]]), zw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], jw = { class: "app-navigation__search" }, Bw = /* @__PURE__ */ Vt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const a = Zt(
      Ib,
      () => y1(),
      !1
    ), n = Ty("appNavigationContainer"), r = cs(), s = /* @__PURE__ */ q(!r.value), c = z(() => r.value && s.value);
    vy(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Ge(r, () => {
      s.value = !r.value;
    }), Ge(c, () => {
      v();
    }), xt(() => {
      a(!0), pb("toggle-navigation", y), Fa("navigation-toggled", {
        open: s.value
      }), i = Md(n.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: n.value,
        trapStack: Zl(),
        escapeDeactivates: !1
      }), v();
    }), ls(() => {
      a(!1), e0("toggle-navigation", y), i.deactivate();
    });
    function d(m) {
      if (s.value === m) {
        Fa("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = m === void 0 ? !s.value : m;
      const k = getComputedStyle(document.body), T = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Fa("navigation-toggled", {
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
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": u(Tn)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: ht(g, ["esc"])
      }, [
        l("div", jw, [
          He(m.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !m.$slots.list }])
        }, [
          He(m.$slots, "default", {}, void 0, !0)
        ], 2),
        m.$slots.list ? (h(), Fe(Rb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            He(m.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : E("", !0),
        He(m.$slots, "footer", {}, void 0, !0)
      ], 40, zw),
      de(Uw, {
        open: s.value,
        "onUpdate:open": d
      }, null, 8, ["open"])
    ], 2));
  }
}), Hw = /* @__PURE__ */ ut(Bw, [["__scopeId", "data-v-37908cd4"]]), Vw = {
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
}, qw = ["aria-hidden", "aria-label"], Gw = ["fill", "width", "height"], Kw = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Ww = { key: 0 };
function Yw(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", Kw, [
        i.title ? (h(), p("title", Ww, o(i.title), 1)) : E("", !0)
      ])
    ], 8, Gw))
  ], 16, qw);
}
const Zw = /* @__PURE__ */ ut(Vw, [["render", Yw]]), Xw = {
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
}, Jw = ["aria-hidden", "aria-label"], Qw = ["fill", "width", "height"], ek = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, tk = { key: 0 };
function ik(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", ek, [
        i.title ? (h(), p("title", tk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, Qw))
  ], 16, Jw);
}
const ak = /* @__PURE__ */ ut(Xw, [["render", ik]]), nk = {
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
}, rk = ["aria-hidden", "aria-label"], lk = ["fill", "width", "height"], sk = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, ok = { key: 0 };
function uk(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", sk, [
        i.title ? (h(), p("title", ok, o(i.title), 1)) : E("", !0)
      ])
    ], 8, lk))
  ], 16, rk);
}
const Pb = /* @__PURE__ */ ut(nk, [["render", uk]]), ck = {
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
}, dk = ["aria-hidden", "aria-label"], fk = ["fill", "width", "height"], hk = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, pk = { key: 0 };
function vk(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", hk, [
        i.title ? (h(), p("title", pk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, fk))
  ], 16, dk);
}
const Db = /* @__PURE__ */ ut(ck, [["render", vk]]);
Cn(m0);
const bk = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Pb,
    IconClose: Db,
    NcButton: oa
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
    return { isLegacy34: Tn };
  },
  data() {
    return {
      labelConfirm: Pt("Confirm changes"),
      labelCancel: Pt("Cancel changes")
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
}, gk = ["placeholder"];
function mk(e, t, i, a, n, r) {
  const s = Je("IconArrowRight"), c = Je("NcButton"), d = Je("IconClose");
  return h(), p("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": a.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Ce((...y) => r.confirm && r.confirm(...y), ["prevent"])),
      onKeydown: t[2] || (t[2] = ht(Ce((...y) => r.cancel && r.cancel(...y), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ce(() => {
      }, ["stop", "prevent"]))
    }, [
      ye(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (y) => r.valueModel = y),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, gk), [
        [ze, r.valueModel]
      ]),
      de(c, {
        "aria-label": n.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ce(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          de(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      de(c, {
        "aria-label": n.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Ce(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          de(d, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const yk = /* @__PURE__ */ ut(bk, [["render", mk], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function gu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Ud = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Fb = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), _k = {
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
  mixins: [_k],
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
}, wk = {
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
      mdiCheck: c0,
      mdiChevronRight: d0
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
}, kk = ["role"], Sk = ["aria-label", "disabled", "title", "type"], Ck = { class: "action-button__longtext-wrapper" }, Tk = {
  key: 0,
  class: "action-button__name"
}, Ak = ["textContent"], Ek = {
  key: 2,
  class: "action-button__text"
}, $k = ["textContent"], xk = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Ok(e, t, i, a, n, r) {
  const s = Je("NcIconSvgWrapper");
  return h(), p("li", {
    class: Ee(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", ti({
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
      He(e.$slots, "icon", {}, () => [
        l("span", {
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Ck, [
        e.name ? (h(), p("strong", Tk, o(e.name), 1)) : E("", !0),
        e.isLongText ? (h(), p("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, Ak)) : (h(), p("span", Ek, o(e.text), 1)),
        i.description ? (h(), p("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, $k)) : E("", !0)
      ]),
      i.isMenu ? (h(), Fe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: a.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (h(), Fe(s, {
        key: 1,
        path: a.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (h(), p("span", xk)) : E("", !0),
      E("", !0)
    ], 16, Sk)
  ], 10, kk);
}
const Nk = /* @__PURE__ */ ut(wk, [["render", Ok], ["__scopeId", "data-v-6c2daf4e"]]);
function Rk(e, t = {}) {
  const i = Dw();
  Ge(e, () => {
    Pa(t.disabled) || (Pa(e) ? i.pause() : i.unpause());
  }), ls(() => {
    i.unpause();
  });
}
const Ik = ["top", "right", "bottom", "left"], lp = ["start", "end"], sp = /* @__PURE__ */ Ik.reduce((e, t) => e.concat(t, t + "-" + lp[0], t + "-" + lp[1]), []), Xl = Math.min, Jc = Math.max, Lk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ub(e, t, i) {
  return Jc(e, Xl(t, i));
}
function nr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ha(e) {
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
function La(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function jd(e) {
  return zb(La(e));
}
function jb(e, t, i) {
  i === void 0 && (i = !1);
  const a = Gi(e), n = jd(e), r = zd(n);
  let s = n === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ko(s)), [s, ko(s)];
}
function Pk(e) {
  const t = ko(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const op = ["left", "right"], up = ["right", "left"], Dk = ["top", "bottom"], Fk = ["bottom", "top"];
function Mk(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? up : op : t ? op : up;
    case "left":
    case "right":
      return t ? Dk : Fk;
    default:
      return [];
  }
}
function Uk(e, t, i, a) {
  const n = Gi(e);
  let r = Mk(Ha(e), i === "start", a);
  return n && (r = r.map((s) => s + "-" + n), t && (r = r.concat(r.map(wo)))), r;
}
function ko(e) {
  const t = Ha(e);
  return Lk[t] + e.slice(t.length);
}
function zk(e) {
  var t, i, a, n;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (a = e.bottom) != null ? a : 0,
    left: (n = e.left) != null ? n : 0
  };
}
function Bb(e) {
  return typeof e != "number" ? zk(e) : {
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
    width: a,
    height: n
  } = e;
  return {
    width: a,
    height: n,
    top: i,
    left: t,
    right: t + a,
    bottom: i + n,
    x: t,
    y: i
  };
}
function cp(e, t, i) {
  let {
    reference: a,
    floating: n
  } = e;
  const r = La(t), s = jd(t), c = zd(s), d = Ha(t), y = r === "y", v = a.x + a.width / 2 - n.width / 2, g = a.y + a.height / 2 - n.height / 2, m = a[c] / 2 - n[c] / 2;
  let k;
  switch (d) {
    case "top":
      k = {
        x: v,
        y: a.y - n.height
      };
      break;
    case "bottom":
      k = {
        x: v,
        y: a.y + a.height
      };
      break;
    case "right":
      k = {
        x: a.x + a.width,
        y: g
      };
      break;
    case "left":
      k = {
        x: a.x - n.width,
        y: g
      };
      break;
    default:
      k = {
        x: a.x,
        y: a.y
      };
  }
  const T = Gi(t);
  return T && (k[s] += m * (T === "end" ? 1 : -1) * (i && y ? -1 : 1)), k;
}
async function jk(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: a,
    y: n,
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
  } = nr(t, e), T = Bb(k), x = c[m ? g === "floating" ? "reference" : "floating" : g], R = $l(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(x))) == null || i ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: y,
    rootBoundary: v,
    strategy: d
  })), L = g === "floating" ? {
    x: a,
    y: n,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), N = await (r.isElement == null ? void 0 : r.isElement(P)) && await (r.getScale == null ? void 0 : r.getScale(P)) || {
    x: 1,
    y: 1
  }, pe = $l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: L,
    offsetParent: P,
    strategy: d
  }) : L);
  return {
    top: (R.top - pe.top + T.top) / N.y,
    bottom: (pe.bottom - R.bottom + T.bottom) / N.y,
    left: (R.left - pe.left + T.left) / N.x,
    right: (pe.right - R.right + T.right) / N.x
  };
}
const Bk = 50, Hk = async (e, t, i) => {
  const {
    placement: a = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s
  } = i, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: jk
  }, d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let y = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: v,
    y: g
  } = cp(y, a, d), m = a, k = 0;
  const T = {};
  for (let C = 0; C < r.length; C++) {
    const x = r[C];
    if (!x)
      continue;
    const {
      name: R,
      fn: L
    } = x, {
      x: P,
      y: N,
      data: pe,
      reset: Q
    } = await L({
      x: v,
      y: g,
      initialPlacement: a,
      placement: m,
      strategy: n,
      middlewareData: T,
      rects: y,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = P ?? v, g = N ?? g, T[R] = {
      ...T[R],
      ...pe
    }, Q && k < Bk && (k++, typeof Q == "object" && (Q.placement && (m = Q.placement), Q.rects && (y = Q.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : Q.rects), {
      x: v,
      y: g
    } = cp(y, m, d)), C = -1);
  }
  return {
    x: v,
    y: g,
    placement: m,
    strategy: n,
    middlewareData: T
  };
}, Vk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: a,
      placement: n,
      rects: r,
      platform: s,
      elements: c,
      middlewareData: d
    } = t, {
      element: y,
      padding: v = 0
    } = nr(e, t) || {};
    if (y == null)
      return {};
    const g = Bb(v), m = {
      x: i,
      y: a
    }, k = jd(n), T = zd(k), C = await s.getDimensions(y), x = k === "y", R = x ? "top" : "left", L = x ? "bottom" : "right", P = x ? "clientHeight" : "clientWidth", N = r.reference[T] + r.reference[k] - m[k] - r.floating[T], pe = m[k] - r.reference[k], Q = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(y));
    let $ = Q ? Q[P] : 0;
    (!$ || !await (s.isElement == null ? void 0 : s.isElement(Q))) && ($ = c.floating[P] || r.floating[T]);
    const H = N / 2 - pe / 2, G = $ / 2 - C[T] / 2 - 1, J = Xl(g[R], G), le = Xl(g[L], G), B = $ - C[T] - le, W = $ / 2 - C[T] / 2 + H, I = Ub(J, W, B), j = !d.arrow && Gi(n) != null && W !== I && r.reference[T] / 2 - (W < J ? J : le) - C[T] / 2 < 0, Z = j ? W < J ? W - J : W - B : 0;
    return {
      [k]: m[k] + Z,
      data: {
        [k]: I,
        centerOffset: W - I - Z,
        ...j && {
          alignmentOffset: Z
        }
      },
      reset: j
    };
  }
});
function qk(e, t, i) {
  return (e ? [...i.filter((n) => Gi(n) === e), ...i.filter((n) => Gi(n) !== e)] : i.filter((n) => Ha(n) === n)).filter((n) => e ? Gi(n) === e || (t ? wo(n) !== n : !1) : !0);
}
const Gk = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, a, n;
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
      } = nr(e, t), C = g !== void 0 || m === sp ? qk(g || null, k, m) : m, x = ((i = s.autoPlacement) == null ? void 0 : i.index) || 0, R = C[x];
      if (R == null)
        return {};
      if (c !== R)
        return {
          reset: {
            placement: C[0]
          }
        };
      const L = await d.detectOverflow(t, T), P = jb(R, r, await (d.isRTL == null ? void 0 : d.isRTL(y.floating))), N = [L[Ha(R)], L[P[0]], L[P[1]]], pe = [...((a = s.autoPlacement) == null ? void 0 : a.overflows) || [], {
        placement: R,
        overflows: N
      }], Q = C[x + 1];
      if (Q)
        return {
          data: {
            index: x + 1,
            overflows: pe
          },
          reset: {
            placement: Q
          }
        };
      const $ = pe.map((J) => {
        const le = Gi(J.placement);
        return [J.placement, le && v ? (
          // Check along the mainAxis and main crossAxis side.
          J.overflows.slice(0, 2).reduce((B, W) => B + W, 0)
        ) : (
          // Check only the mainAxis.
          J.overflows[0]
        ), J.overflows];
      }).sort((J, le) => J[1] - le[1]), G = ((n = $.filter((J) => J[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Gi(J[0]) ? 2 : 3
      ).every((le) => le <= 0))[0]) == null ? void 0 : n[0]) || $[0][0];
      return G !== c ? {
        data: {
          index: x + 1,
          overflows: pe
        },
        reset: {
          placement: G
        }
      } : {};
    }
  };
}, Kk = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, a;
      const {
        placement: n,
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
        ...x
      } = nr(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const R = Ha(n), L = La(c), P = Ha(c) === c, N = await (d.isRTL == null ? void 0 : d.isRTL(y.floating)), pe = m || (P || !C ? [ko(c)] : Pk(c)), Q = T !== "none";
      !m && Q && pe.push(...Uk(c, C, T, N));
      const $ = [c, ...pe], H = await d.detectOverflow(t, x), G = [];
      let J = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (v && G.push(H[R]), g) {
        const I = jb(n, s, N);
        G.push(H[I[0]], H[I[1]]);
      }
      if (J = [...J, {
        placement: n,
        overflows: G
      }], !G.every((I) => I <= 0)) {
        var le, B;
        const I = (((le = r.flip) == null ? void 0 : le.index) || 0) + 1, j = $[I];
        if (j && (!(g === "alignment" ? L !== La(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        J.every((X) => La(X.placement) === L ? X.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: J
            },
            reset: {
              placement: j
            }
          };
        let Z = (B = J.filter((re) => re.overflows[0] <= 0).sort((re, X) => re.overflows[1] - X.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!Z)
          switch (k) {
            case "bestFit": {
              var W;
              const re = (W = J.filter((X) => {
                if (Q) {
                  const be = La(X.placement);
                  return be === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  be === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((be) => be > 0).reduce((be, Te) => be + Te, 0)]).sort((X, be) => X[1] - be[1])[0]) == null ? void 0 : W[0];
              re && (Z = re);
              break;
            }
            case "initialPlacement":
              Z = c;
              break;
          }
        if (n !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
}, Wk = /* @__PURE__ */ new Set(["left", "top"]);
async function Yk(e, t) {
  const {
    placement: i,
    platform: a,
    elements: n
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(n.floating)), s = Ha(i), c = Gi(i), d = La(i) === "y", y = Wk.has(s) ? -1 : 1, v = r && d ? -1 : 1, g = nr(t, e);
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
const Zk = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, a;
      const {
        x: n,
        y: r,
        placement: s,
        middlewareData: c
      } = t, d = await Yk(t, e);
      return s === ((i = c.offset) == null ? void 0 : i.placement) && (a = c.arrow) != null && a.alignmentOffset ? {} : {
        x: n + d.x,
        y: r + d.y,
        data: {
          ...d,
          placement: s
        }
      };
    }
  };
}, Xk = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: i,
        y: a,
        placement: n,
        platform: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: d = {
          fn: (L) => {
            let {
              x: P,
              y: N
            } = L;
            return {
              x: P,
              y: N
            };
          }
        },
        ...y
      } = nr(e, t), v = {
        x: i,
        y: a
      }, g = await r.detectOverflow(t, y), m = La(n), k = zb(m);
      let T = v[k], C = v[m];
      const x = (L, P) => Ub(P + g[L === "y" ? "top" : "left"], P, P - g[L === "y" ? "bottom" : "right"]);
      s && (T = x(k, T)), c && (C = x(m, C));
      const R = d.fn({
        ...t,
        [k]: T,
        [m]: C
      });
      return {
        ...R,
        data: {
          x: R.x - i,
          y: R.y - a,
          enabled: {
            [k]: s,
            [m]: c
          }
        }
      };
    }
  };
}, Jk = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: i,
        rects: a,
        platform: n,
        elements: r
      } = t, {
        apply: s = () => {
        },
        ...c
      } = nr(e, t), d = await n.detectOverflow(t, c), y = Ha(i), v = Gi(i), g = La(i) === "y", {
        width: m,
        height: k
      } = a.floating;
      let T, C;
      y === "top" || y === "bottom" ? (T = y, C = v === (await (n.isRTL == null ? void 0 : n.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = y, T = v === "end" ? "top" : "bottom");
      const x = k - d.top - d.bottom, R = m - d.left - d.right, L = Xl(k - d[T], x), P = Xl(m - d[C], R), N = t.middlewareData.shift, pe = !N;
      let Q = L, $ = P;
      N != null && N.enabled.x && ($ = R), N != null && N.enabled.y && (Q = x), pe && !v && (g ? $ = m - 2 * Jc(d.left, d.right) : Q = k - 2 * Jc(d.top, d.bottom)), await s({
        ...t,
        availableWidth: $,
        availableHeight: Q
      });
      const H = await n.getDimensions(r.floating);
      return m !== H.width || k !== H.height ? {
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
function ua(e) {
  return Pi(e).getComputedStyle(e);
}
const dp = Math.min, xl = Math.max, So = Math.round;
function Hb(e) {
  const t = ua(e);
  let i = parseFloat(t.width), a = parseFloat(t.height);
  const n = e.offsetWidth, r = e.offsetHeight, s = So(i) !== n || So(a) !== r;
  return s && (i = n, a = r), { width: i, height: a, fallback: s };
}
function kn(e) {
  return qb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Bs;
function Vb() {
  if (Bs) return Bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Bs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Bs) : navigator.userAgent;
}
function ca(e) {
  return e instanceof Pi(e).HTMLElement;
}
function mn(e) {
  return e instanceof Pi(e).Element;
}
function qb(e) {
  return e instanceof Pi(e).Node;
}
function fp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Pi(e).ShadowRoot || e instanceof ShadowRoot;
}
function mu(e) {
  const { overflow: t, overflowX: i, overflowY: a, display: n } = ua(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + i) && !["inline", "contents"].includes(n);
}
function Qk(e) {
  return ["table", "td", "th"].includes(kn(e));
}
function Qc(e) {
  const t = /firefox/i.test(Vb()), i = ua(e), a = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!a && a !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((n) => i.willChange.includes(n))) || ["paint", "layout", "strict", "content"].some(((n) => {
    const r = i.contain;
    return r != null && r.includes(n);
  }));
}
function Gb() {
  return !/^((?!chrome|android).)*safari/i.test(Vb());
}
function Bd(e) {
  return ["html", "body", "#document"].includes(kn(e));
}
function Kb(e) {
  return mn(e) ? e : e.contextElement;
}
const Wb = { x: 1, y: 1 };
function Nr(e) {
  const t = Kb(e);
  if (!ca(t)) return Wb;
  const i = t.getBoundingClientRect(), { width: a, height: n, fallback: r } = Hb(t);
  let s = (r ? So(i.width) : i.width) / a, c = (r ? So(i.height) : i.height) / n;
  return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), { x: s, y: c };
}
function Jl(e, t, i, a) {
  var n, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(), c = Kb(e);
  let d = Wb;
  t && (a ? mn(a) && (d = Nr(a)) : d = Nr(e));
  const y = c ? Pi(c) : window, v = !Gb() && i;
  let g = (s.left + (v && ((n = y.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / d.x, m = (s.top + (v && ((r = y.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, k = s.width / d.x, T = s.height / d.y;
  if (c) {
    const C = Pi(c), x = a && mn(a) ? Pi(a) : a;
    let R = C.frameElement;
    for (; R && a && x !== C; ) {
      const L = Nr(R), P = R.getBoundingClientRect(), N = getComputedStyle(R);
      P.x += (R.clientLeft + parseFloat(N.paddingLeft)) * L.x, P.y += (R.clientTop + parseFloat(N.paddingTop)) * L.y, g *= L.x, m *= L.y, k *= L.x, T *= L.y, g += P.x, m += P.y, R = Pi(R).frameElement;
    }
  }
  return { width: k, height: T, top: m, right: g + k, bottom: m + T, left: g, x: g, y: m };
}
function yn(e) {
  return ((qb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yu(e) {
  return mn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Yb(e) {
  return Jl(yn(e)).left + yu(e).scrollLeft;
}
function Ql(e) {
  if (kn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || fp(e) && e.host || yn(e);
  return fp(t) ? t.host : t;
}
function Zb(e) {
  const t = Ql(e);
  return Bd(t) ? t.ownerDocument.body : ca(t) && mu(t) ? t : Zb(t);
}
function Co(e, t) {
  var i;
  t === void 0 && (t = []);
  const a = Zb(e), n = a === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Pi(a);
  return n ? t.concat(r, r.visualViewport || [], mu(a) ? a : []) : t.concat(a, Co(a));
}
function hp(e, t, i) {
  return t === "viewport" ? $l((function(a, n) {
    const r = Pi(a), s = yn(a), c = r.visualViewport;
    let d = s.clientWidth, y = s.clientHeight, v = 0, g = 0;
    if (c) {
      d = c.width, y = c.height;
      const m = Gb();
      (m || !m && n === "fixed") && (v = c.offsetLeft, g = c.offsetTop);
    }
    return { width: d, height: y, x: v, y: g };
  })(e, i)) : mn(t) ? $l((function(a, n) {
    const r = Jl(a, !0, n === "fixed"), s = r.top + a.clientTop, c = r.left + a.clientLeft, d = ca(a) ? Nr(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: c * d.x, y: s * d.y };
  })(t, i)) : $l((function(a) {
    const n = yn(a), r = yu(a), s = a.ownerDocument.body, c = xl(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = xl(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
    let y = -r.scrollLeft + Yb(a);
    const v = -r.scrollTop;
    return ua(s).direction === "rtl" && (y += xl(n.clientWidth, s.clientWidth) - c), { width: c, height: d, x: y, y: v };
  })(yn(e)));
}
function pp(e) {
  return ca(e) && ua(e).position !== "fixed" ? e.offsetParent : null;
}
function vp(e) {
  const t = Pi(e);
  let i = pp(e);
  for (; i && Qk(i) && ua(i).position === "static"; ) i = pp(i);
  return i && (kn(i) === "html" || kn(i) === "body" && ua(i).position === "static" && !Qc(i)) ? t : i || (function(a) {
    let n = Ql(a);
    for (; ca(n) && !Bd(n); ) {
      if (Qc(n)) return n;
      n = Ql(n);
    }
    return null;
  })(e) || t;
}
function eS(e, t, i) {
  const a = ca(t), n = yn(t), r = Jl(e, !0, i === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (a || !a && i !== "fixed") if ((kn(t) !== "body" || mu(n)) && (s = yu(t)), ca(t)) {
    const d = Jl(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else n && (c.x = Yb(n));
  return { x: r.left + s.scrollLeft - c.x, y: r.top + s.scrollTop - c.y, width: r.width, height: r.height };
}
const tS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: a, strategy: n } = e;
  const r = i === "clippingAncestors" ? (function(y, v) {
    const g = v.get(y);
    if (g) return g;
    let m = Co(y).filter(((x) => mn(x) && kn(x) !== "body")), k = null;
    const T = ua(y).position === "fixed";
    let C = T ? Ql(y) : y;
    for (; mn(C) && !Bd(C); ) {
      const x = ua(C), R = Qc(C);
      (T ? R || k : R || x.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = x : m = m.filter(((L) => L !== C)), C = Ql(C);
    }
    return v.set(y, m), m;
  })(t, this._c) : [].concat(i), s = [...r, a], c = s[0], d = s.reduce(((y, v) => {
    const g = hp(t, v, n);
    return y.top = xl(g.top, y.top), y.right = dp(g.right, y.right), y.bottom = dp(g.bottom, y.bottom), y.left = xl(g.left, y.left), y;
  }), hp(t, c, n));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: a } = e;
  const n = ca(i), r = yn(i);
  if (i === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((n || !n && a !== "fixed") && ((kn(i) !== "body" || mu(r)) && (s = yu(i)), ca(i))) {
    const y = Jl(i);
    c = Nr(i), d.x = y.x + i.clientLeft, d.y = y.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - s.scrollLeft * c.x + d.x, y: t.y * c.y - s.scrollTop * c.y + d.y };
}, isElement: mn, getDimensions: function(e) {
  return ca(e) ? Hb(e) : e.getBoundingClientRect();
}, getOffsetParent: vp, getDocumentElement: yn, getScale: Nr, async getElementRects(e) {
  let { reference: t, floating: i, strategy: a } = e;
  const n = this.getOffsetParent || vp, r = this.getDimensions;
  return { reference: eS(t, await n(i), a), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ua(e).direction === "rtl" }, iS = (e, t, i) => {
  const a = /* @__PURE__ */ new Map(), n = { platform: tS, ...i }, r = { ...n.platform, _c: a };
  return Hk(e, t, { ...n, platform: r });
}, _n = {
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
  let i = _n.themes[e] || {}, a;
  do
    a = i[t], typeof a > "u" ? i.$extend ? i = _n.themes[i.$extend] || {} : (i = null, a = _n[t]) : i = null;
  while (i);
  return a;
}
function aS(e) {
  const t = [e];
  let i = _n.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = _n.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((a) => `v-popper--theme-${a}`);
}
function bp(e) {
  const t = [e];
  let i = _n.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = _n.themes[i.$extend] || {}) : i = null;
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
let Vn = null;
const _p = {};
function wp(e) {
  let t = _p[e];
  return t || (t = _p[e] = []), t;
}
let td = function() {
};
typeof window < "u" && (td = window.Element);
function Qe(e) {
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
      default: Qe("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Qe("positioningDisabled")
    },
    placement: {
      type: String,
      default: Qe("placement"),
      validator: (e) => nS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Qe("delay")
    },
    distance: {
      type: [Number, String],
      default: Qe("distance")
    },
    skidding: {
      type: [Number, String],
      default: Qe("skidding")
    },
    triggers: {
      type: Array,
      default: Qe("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Qe("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Qe("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Qe("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Qe("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Qe("popperHideTriggers")
    },
    container: {
      type: [String, Object, td, Boolean],
      default: Qe("container")
    },
    boundary: {
      type: [String, td],
      default: Qe("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Qe("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Qe("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Qe("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Qe("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Qe("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Qe("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Qe("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Qe("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Qe("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Qe("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Qe("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Qe("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Qe("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Qe("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Qe("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Qe("flip")
    },
    shift: {
      type: Boolean,
      default: Qe("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Qe("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Qe("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Qe("disposeTimeout")
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
      var a, n;
      (a = this.parentPopper) != null && a.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (i || !this.disabled) && (((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
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
      (this.distance || this.skidding) && e.middleware.push(Zk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Gk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Xk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Kk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Vk({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: a, rects: n, middlewareData: r }) => {
          let s;
          const { centerOffset: c } = r.arrow;
          return a.startsWith("top") || a.startsWith("bottom") ? s = Math.abs(c) > n.reference.width / 2 : s = Math.abs(c) > n.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const a = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: n, placement: r, middlewareData: s }) => {
            var c;
            if ((c = s.autoSize) != null && c.skip)
              return {};
            let d, y;
            return r.startsWith("top") || r.startsWith("bottom") ? d = n.reference.width : y = n.reference.height, this.$_innerNode.style[a === "min" ? "minWidth" : a === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[a === "min" ? "minHeight" : a === "max" ? "maxHeight" : "height"] = y != null ? `${y}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Jk({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: a, availableHeight: n }) => {
          this.$_innerNode.style.maxWidth = a != null ? `${a}px` : null, this.$_innerNode.style.maxHeight = n != null ? `${n}px` : null;
        }
      })));
      const i = await iS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Vn && this.instantMove && Vn.instantMove && Vn !== this.parentPopper) {
        Vn.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Vn = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
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
        const t = this.$_referenceNode.getBoundingClientRect(), i = this.$_popperNode.querySelector(".v-popper__wrapper"), a = i.parentNode.getBoundingClientRect(), n = t.x + t.width / 2 - (a.left + i.offsetLeft), r = t.y + t.height / 2 - (a.top + i.offsetTop);
        this.result.transformOrigin = `${n}px ${r}px`;
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
        const a = wp(i);
        yp(a, this), a.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      Vn === this && (Vn = null), this.isShown = !1, this.$_applyAttrsToTarget({
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
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((a) => a.addEventListener(t, i, es ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, a, n) {
      let r = i;
      a != null && (r = typeof a == "function" ? a(r) : a), r.forEach((s) => {
        const c = t[s];
        c && this.$_registerEventListeners(e, c, n);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: a, eventType: n, handler: r } = i;
        !e || e === n ? a.forEach((s) => s.removeEventListener(n, r)) : t.push(i);
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
        const a = i.getAttribute(e);
        a && (i.removeAttribute(e), i.setAttribute(t, a));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const i in e) {
          const a = e[i];
          a == null ? t.removeAttribute(i) : t.setAttribute(i, a);
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
        const t = this.$_popperNode.getBoundingClientRect(), i = Ol - dn, a = Nl - fn, n = t.left + t.width / 2 - dn + (t.top + t.height / 2) - fn + t.width + t.height, r = dn + i * n, s = fn + a * n;
        return Hs(dn, fn, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Hs(dn, fn, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Hs(dn, fn, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Hs(dn, fn, r, s, t.left, t.bottom, t.right, t.bottom);
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
  window.addEventListener("resize", sS);
}
function kp(e, t) {
  for (let i = 0; i < Vi.length; i++) {
    const a = Vi[i];
    try {
      a.mouseDownContains = a.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Sp(e, t) {
  rS(e, t);
}
function rS(e, t) {
  const i = {};
  for (let a = Vi.length - 1; a >= 0; a--) {
    const n = Vi[a];
    try {
      const r = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = !1, requestAnimationFrame(() => {
        if (n.pendingHide = !1, !i[n.randomId] && Cp(n, r, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = n.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let s = n.parentPopper;
          for (; s && Cp(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Cp(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || lS(e, i) && !t;
}
function lS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function sS() {
  for (let e = 0; e < Vi.length; e++)
    Vi[e].$_computePosition();
}
let dn = 0, fn = 0, Ol = 0, Nl = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  dn = Ol, fn = Nl, Ol = e.clientX, Nl = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function Hs(e, t, i, a, n, r, s, c) {
  const d = ((s - n) * (t - r) - (c - r) * (e - n)) / ((c - r) * (i - e) - (s - n) * (a - t)), y = ((i - e) * (t - r) - (a - t) * (e - n)) / ((c - r) * (i - e) - (s - n) * (a - t));
  return d >= 0 && d <= 1 && y >= 0 && y <= 1;
}
const oS = {
  extends: Jb()
}, Hd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
};
function uS(e, t, i, a, n, r) {
  return h(), p("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    He(e.$slots, "default", Js(ql(e.slotData)))
  ], 2);
}
const cS = /* @__PURE__ */ Hd(oS, [["render", uS]]);
function dS() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var a = e.indexOf("rv:");
    return parseInt(e.substring(a + 3, e.indexOf(".", a)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let Zs;
function id() {
  id.init || (id.init = !0, Zs = dS() !== -1);
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
    id(), It(() => {
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
const fS = /* @__PURE__ */ fy();
cy("data-v-b329ee4c");
const hS = {
  class: "resize-observer",
  tabindex: "-1"
};
dy();
const pS = /* @__PURE__ */ fS((e, t, i, a, n, r) => (h(), Fe("div", hS)));
_u.render = pS;
_u.__scopeId = "data-v-b329ee4c";
_u.__file = "src/components/ResizeObserver.vue";
const Qb = (e = "theme") => ({
  computed: {
    themeClass() {
      return aS(this[e]);
    }
  }
}), vS = /* @__PURE__ */ Vt({
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
}), bS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], gS = {
  ref: "inner",
  class: "v-popper__inner"
}, mS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), yS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), _S = [
  mS,
  yS
];
function wS(e, t, i, a, n, r) {
  const s = Je("ResizeObserver");
  return h(), p("div", {
    id: e.popperId,
    ref: "popover",
    class: Ee(["v-popper__popper", [
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
    style: pi(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = ht((c) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: pi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", gS, [
        e.mounted ? (h(), p(Y, { key: 0 }, [
          l("div", null, [
            He(e.$slots, "default")
          ]),
          e.handleResize ? (h(), Fe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : E("", !0)
        ], 64)) : E("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: pi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, _S, 4)
    ], 4)
  ], 46, bS);
}
const eg = /* @__PURE__ */ Hd(vS, [["render", wS]]), tg = {
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
let ad = function() {
};
typeof window < "u" && (ad = window.Element);
const kS = /* @__PURE__ */ Vt({
  name: "VPopperWrapper",
  components: {
    Popper: cS,
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
      type: [String, Object, ad, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, ad],
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
function SS(e, t, i, a, n, r) {
  const s = Je("PopperContent"), c = Je("Popper");
  return h(), Fe(c, ti({ ref: "popper" }, e.$props, {
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
    default: ke(({
      popperId: d,
      isShown: y,
      shouldMountContent: v,
      skipTransition: g,
      autoHide: m,
      show: k,
      hide: T,
      handleResize: C,
      onResize: x,
      classes: R,
      result: L
    }) => [
      He(e.$slots, "default", {
        shown: y,
        show: k,
        hide: T
      }),
      de(s, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: y,
        mounted: v,
        "skip-transition": g,
        "auto-hide": m,
        "handle-resize": C,
        classes: R,
        result: L,
        onHide: T,
        onResize: x
      }, {
        default: ke(() => [
          He(e.$slots, "popper", {
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
const Vd = /* @__PURE__ */ Hd(kS, [["render", SS]]), CS = {
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
const Tp = _n, TS = CS, AS = /* @__PURE__ */ Vt({
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
}), ES = "_ncPopover_qgtYg", $S = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: ES
}, ig = "nc-popover-9";
Tp.themes[ig] = structuredClone(Tp.themes.dropdown);
const xS = {
  name: "NcPopover",
  components: {
    Dropdown: TS,
    NcPopoverTriggerProvider: AS
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
function OS(e, t, i, a, n, r) {
  const s = Je("NcPopoverTriggerProvider"), c = Je("Dropdown");
  return h(), Fe(c, {
    ref: "popover",
    shown: n.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (d) => n.internalShown = d),
      t[1] || (t[1] = (d) => n.internalShown = d)
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
    theme: a.theme,
    triggers: r.internalTriggers,
    hideTriggers: r.hideTriggers,
    showTriggers: r.showTriggers,
    onApplyShow: r.afterShow,
    onApplyHide: r.afterHide
  }, {
    popper: ke((d) => [
      He(e.$slots, "default", Js(ql(d)))
    ]),
    default: ke(() => [
      de(s, {
        shown: n.internalShown,
        popupRole: i.popupRole
      }, {
        default: ke((d) => [
          He(e.$slots, "trigger", Js(ql(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const NS = {
  $style: $S
}, Ap = /* @__PURE__ */ ut(xS, [["render", OS], ["__cssModules", NS]]), RS = {
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
}, IS = ["aria-hidden", "aria-label"], LS = ["fill", "width", "height"], PS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, DS = { key: 0 };
function FS(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", PS, [
        i.title ? (h(), p("title", DS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, LS))
  ], 16, IS);
}
const MS = /* @__PURE__ */ ut(RS, [["render", FS]]);
Cn(g0);
function qd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === jt)
        return !1;
      if (i.type === Y && !qd(i.children))
        return !1;
      if (i.type === ss && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const US = ".focusable", zS = {
  name: "NcActions",
  components: {
    NcButton: oa,
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
      [Ud]: z(() => this.actionsMenuSemanticType === "menu"),
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
      default: Pt("Actions")
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
    Rk(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(US);
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
        const a = e.shiftKey ? i - 1 : i + 1;
        (a < 0 || a === t.length) && this.closeMenu(!0), this.focusIndex = a, this.focusAction();
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
        C.type === Y && t(C.children, T);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const a = i.slice(0, this.inline), n = e.filter((k) => !a.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = n.some((k) => s.includes(this.getActionName(k))), y = n.some((k) => r.includes(this.getActionName(k))), v = n.some((k) => c.includes(this.getActionName(k)));
    d ? this.actionsMenuSemanticType = "dialog" : y ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((T) => this.getActionName(T).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const g = (k) => {
      const T = k?.props?.icon, C = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(T) ? fi("img", { class: "action-item__menutoggle__icon", src: T, alt: "" }) : fi("span", { class: ["icon", T] })), x = k?.children?.default?.()?.[0]?.children?.trim(), R = this.forceName ? x : "";
      let L = k?.props?.title;
      this.forceName || L || (L = x);
      const P = { ...k?.props ?? {} }, N = ["submit", "reset"].includes(P.type) ? P.modelValue : "button";
      return delete P.modelValue, delete P.type, fi(
        oa,
        ti(
          P,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || x,
            title: L,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: N,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (R ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => R,
          icon: () => C
        }
      );
    }, m = (k) => {
      const T = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? fi("span", { class: ["icon", this.defaultIcon] }) : fi(MS, { size: 20 }), C = `${this.randomId}-trigger`;
      return fi(
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
          trigger: () => fi(oa, {
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
          default: () => fi("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            fi("ul", {
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
    }), a.length > 0 && this.inline > 0 ? fi(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...a.map(g),
        // render the rest within the popover menu
        n.length > 0 ? fi(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [m(n)]
        ) : null
      ]
    ) : fi(
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
}, Gd = /* @__PURE__ */ ut(zS, [["__scopeId", "data-v-7206c1f1"]]), jS = ["aria-label"], BS = ["width", "height"], HS = ["fill"], VS = ["fill"], qS = { key: 0 }, GS = /* @__PURE__ */ Vt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, i = z(() => {
      const a = ["#777", "#CCC"];
      return t.appearance === "light" ? a : t.appearance === "dark" ? a.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (a, n) => (h(), p("span", {
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
        }, null, 8, HS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (h(), p("title", qS, o(e.name), 1)) : E("", !0)
        ], 8, VS)
      ], 8, BS))
    ], 8, jS));
  }
}), ag = /* @__PURE__ */ ut(GS, [["__scopeId", "data-v-cf399190"]]), nd = /* @__PURE__ */ Vt({
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
}), KS = {
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
}, WS = ["aria-hidden", "aria-label"], YS = ["fill", "width", "height"], ZS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, XS = { key: 0 };
function JS(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", ZS, [
        i.title ? (h(), p("title", XS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, YS))
  ], 16, WS);
}
const QS = /* @__PURE__ */ ut(KS, [["render", JS]]), eC = {
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
}, tC = ["aria-hidden", "aria-label"], iC = ["fill", "width", "height"], aC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, nC = { key: 0 };
function rC(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", aC, [
        i.title ? (h(), p("title", nC, o(i.title), 1)) : E("", !0)
      ])
    ], 8, iC))
  ], 16, tC);
}
const lC = /* @__PURE__ */ ut(eC, [["render", rC]]);
Cn(w0);
const sC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: oa,
    ChevronDown: Zw,
    ChevronUp: ak
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
    return { isLegacy34: Tn };
  },
  computed: {
    labelButton() {
      return this.open ? Pt("Collapse menu") : Pt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function oC(e, t, i, a, n, r) {
  const s = Je("ChevronUp"), c = Je("ChevronDown"), d = Je("NcButton");
  return h(), Fe(d, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && a.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      i.open ? (h(), Fe(s, {
        key: 0,
        size: 20
      })) : (h(), Fe(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const uC = /* @__PURE__ */ ut(sC, [["render", oC], ["__scopeId", "data-v-cfbd3794"]]);
Cn(k0, T0);
const cC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Gd,
    NcActionButton: Nk,
    NcAppNavigationIconCollapsible: uC,
    NcInputConfirmCancel: yk,
    NcLoadingIcon: ag,
    NcVNodes: nd,
    Pencil: QS,
    Undo: lC
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
      isLegacy34: Tn
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
      return this.editLabel ? this.editLabel : Pt("Edit item");
    },
    undoButtonAriaLabel() {
      return Pt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && Fa("toggle-navigation", { open: !1 }));
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
}, dC = ["id"], fC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], hC = {
  key: 0,
  class: "editingContainer"
}, pC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, vC = { class: "app-navigation-entry__deleted-description" }, bC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, gC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function mC(e, t, i, a, n, r) {
  const s = Je("NcLoadingIcon"), c = Je("NcInputConfirmCancel"), d = Je("Pencil"), y = Je("NcActionButton"), v = Je("Undo"), g = Je("NcActions"), m = Je("NcAppNavigationIconCollapsible");
  return h(), p("li", {
    id: i.id,
    class: Ee([{
      "app-navigation-entry--opened": n.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (h(), Fe(xd(r.isRouterLink ? "router-link" : "NcVNodes"), Js(ql({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: ke(({ href: k, navigate: T, isActive: C }) => [
        l("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": n.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": a.isLegacy34,
            active: i.to && C || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...x) => r.requestHighlight && r.requestHighlight(...x)),
          onFocusin: t[5] || (t[5] = (...x) => r.requestHighlight && r.requestHighlight(...x))
        }, [
          i.undo ? E("", !0) : (h(), p("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && C ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? n.opened.toString() : void 0,
            href: i.href || k || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...x) => r.handleBlur && r.handleBlur(...x)),
            onClick: (x) => r.onClick(x, T, k),
            onFocus: t[2] || (t[2] = (...x) => r.handleFocus && r.handleFocus(...x)),
            onKeydown: t[3] || (t[3] = ht(Ce((...x) => r.handleTab && r.handleTab(...x), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ee(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (h(), Fe(s, { key: 0 })) : He(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && C
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": n.editingActive }])
            }, o(i.name), 3),
            n.editingActive ? (h(), p("div", hC, [
              de(c, {
                ref: "editingInput",
                modelValue: n.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => n.editingValue = x),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && C || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : E("", !0)
          ], 40, fC)),
          i.undo ? (h(), p("div", pC, [
            l("div", vC, o(i.name), 1)
          ])) : E("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !n.editingActive ? (h(), p("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || n.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (h(), p("div", bC, [
              He(e.$slots, "counter", {}, void 0, !0)
            ])) : E("", !0),
            e.$slots.actions || i.editable && !n.editingActive || i.undo ? (h(), Fe(g, {
              key: 1,
              ref: "actions",
              class: "app-navigation-entry__actions",
              container: "#app-navigation-vue",
              boundariesElement: n.actionsBoundariesElement,
              inline: i.inlineActions,
              placement: i.menuPlacement,
              open: i.menuOpen,
              forceMenu: i.forceMenu,
              defaultIcon: i.menuIcon,
              variant: "tertiary",
              "onUpdate:open": r.onMenuToggle
            }, {
              icon: ke(() => [
                He(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                i.editable && !n.editingActive ? (h(), Fe(y, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    de(d, { size: 20 })
                  ]),
                  default: ke(() => [
                    ae(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                i.undo ? (h(), Fe(y, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    de(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                He(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : E("", !0)
          ], 2)) : E("", !0),
          i.allowCollapse && e.$slots.default ? (h(), Fe(m, {
            key: 3,
            active: i.to && C || i.active,
            open: n.opened,
            onClick: Ce(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : E("", !0),
          He(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (h(), p("ul", gC, [
      He(e.$slots, "default", {}, void 0, !0)
    ])) : E("", !0)
  ], 10, dC);
}
const Ta = /* @__PURE__ */ ut(cC, [["render", mC], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), yC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let a;
    if (typeof t.value == "function") a = Jh(e, t.value, { capture: i });
    else {
      const [n, r] = t.value;
      a = Jh(e, n, Object.assign({ capture: i }, r));
    }
    Ac.set(e, a);
  },
  unmounted(e) {
    const t = Ac.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ac.delete(e);
  }
}, _C = {
  mounted(e) {
    e.focus();
  }
}, wC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", kC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", rd = "numeric", ld = "ascii", sd = "alpha", Rl = "asciinumeric", _l = "alphanumeric", od = "domain", ng = "emoji", SC = "scheme", CC = "slashscheme", Ec = "whitespace";
function TC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Xn(e, t, i) {
  t[rd] && (t[Rl] = !0, t[_l] = !0), t[ld] && (t[Rl] = !0, t[sd] = !0), t[Rl] && (t[_l] = !0), t[sd] && (t[_l] = !0), t[_l] && (t[od] = !0), t[ng] && (t[od] = !0);
  for (const a in t) {
    const n = TC(a, i);
    n.indexOf(e) < 0 && n.push(e);
  }
}
function AC(e, t) {
  const i = {};
  for (const a in t)
    t[a].indexOf(e) >= 0 && (i[a] = !0);
  return i;
}
function Si(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
Si.groups = {};
Si.prototype = {
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
    for (let a = 0; a < t.jr.length; a++) {
      const n = t.jr[a][0], r = t.jr[a][1];
      if (r && n.test(e))
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
  ta(e, t, i, a) {
    for (let n = 0; n < e.length; n++)
      this.tt(e[n], t, i, a);
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
  tr(e, t, i, a) {
    a = a || Si.groups;
    let n;
    return t && t.j ? n = t : (n = new Si(t), i && a && Xn(t, i, a)), this.jr.push([e, n]), n;
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
  ts(e, t, i, a) {
    let n = this;
    const r = e.length;
    if (!r)
      return n;
    for (let s = 0; s < r - 1; s++)
      n = n.tt(e[s]);
    return n.tt(e[r - 1], t, i, a);
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
  tt(e, t, i, a) {
    a = a || Si.groups;
    const n = this;
    if (t && t.j)
      return n.j[e] = t, t;
    const r = t;
    let s, c = n.go(e);
    if (c ? (s = new Si(), Object.assign(s.j, c.j), s.jr.push.apply(s.jr, c.jr), s.jd = c.jd, s.t = c.t) : s = new Si(), r) {
      if (a)
        if (s.t && typeof s.t == "string") {
          const d = Object.assign(AC(s.t, a), i);
          Xn(r, d, a);
        } else i && Xn(r, i, a);
      s.t = r;
    }
    return n.j[e] = s, s;
  }
};
const Ye = (e, t, i, a, n) => e.ta(t, i, a, n), St = (e, t, i, a, n) => e.tr(t, i, a, n), Ep = (e, t, i, a, n) => e.ts(t, i, a, n), _e = (e, t, i, a, n) => e.tt(t, i, a, n), $a = "WORD", ud = "UWORD", rg = "ASCIINUMERICAL", lg = "ALPHANUMERICAL", ts = "LOCALHOST", cd = "TLD", dd = "UTLD", Xs = "SCHEME", Cr = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Il = "OPENBRACE", Ll = "CLOSEBRACE", To = "OPENBRACKET", Ao = "CLOSEBRACKET", Eo = "OPENPAREN", $o = "CLOSEPAREN", xo = "OPENANGLEBRACKET", Oo = "CLOSEANGLEBRACKET", No = "FULLWIDTHLEFTPAREN", Ro = "FULLWIDTHRIGHTPAREN", Io = "LEFTCORNERBRACKET", Lo = "RIGHTCORNERBRACKET", Po = "LEFTWHITECORNERBRACKET", Do = "RIGHTWHITECORNERBRACKET", Fo = "FULLWIDTHLESSTHAN", Mo = "FULLWIDTHGREATERTHAN", Uo = "AMPERSAND", zo = "APOSTROPHE", jo = "ASTERISK", pn = "AT", Bo = "BACKSLASH", Ho = "BACKTICK", Vo = "CARET", Jn = "COLON", Yd = "COMMA", qo = "DOLLAR", ia = "DOT", Go = "EQUALS", Zd = "EXCLAMATION", Ri = "HYPHEN", Pl = "PERCENT", Ko = "PIPE", Wo = "PLUS", Yo = "POUND", Dl = "QUERY", Xd = "QUOTE", sg = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", aa = "SLASH", Fl = "TILDE", Zo = "UNDERSCORE", og = "EMOJI", Xo = "SYM";
var ug = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: lg,
  AMPERSAND: Uo,
  APOSTROPHE: zo,
  ASCIINUMERICAL: rg,
  ASTERISK: jo,
  AT: pn,
  BACKSLASH: Bo,
  BACKTICK: Ho,
  CARET: Vo,
  CLOSEANGLEBRACKET: Oo,
  CLOSEBRACE: Ll,
  CLOSEBRACKET: Ao,
  CLOSEPAREN: $o,
  COLON: Jn,
  COMMA: Yd,
  DOLLAR: qo,
  DOT: ia,
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
  SLASH: aa,
  SLASH_SCHEME: Cr,
  SYM: Xo,
  TILDE: Fl,
  TLD: cd,
  UNDERSCORE: Zo,
  UTLD: dd,
  UWORD: ud,
  WORD: $a,
  WS: fd
});
const Aa = /[a-z]/, vl = new RegExp("\\p{L}", "u"), $c = new RegExp("\\p{Emoji}", "u"), Ea = /\d/, xc = /\s/, $p = "\r", Oc = `
`, EC = "️", $C = "‍", Nc = "￼";
let Vs = null, qs = null;
function xC(e = []) {
  const t = {};
  Si.groups = t;
  const i = new Si();
  Vs == null && (Vs = xp(wC)), qs == null && (qs = xp(kC)), _e(i, "'", zo), _e(i, "{", Il), _e(i, "}", Ll), _e(i, "[", To), _e(i, "]", Ao), _e(i, "(", Eo), _e(i, ")", $o), _e(i, "<", xo), _e(i, ">", Oo), _e(i, "（", No), _e(i, "）", Ro), _e(i, "「", Io), _e(i, "」", Lo), _e(i, "『", Po), _e(i, "』", Do), _e(i, "＜", Fo), _e(i, "＞", Mo), _e(i, "&", Uo), _e(i, "*", jo), _e(i, "@", pn), _e(i, "`", Ho), _e(i, "^", Vo), _e(i, ":", Jn), _e(i, ",", Yd), _e(i, "$", qo), _e(i, ".", ia), _e(i, "=", Go), _e(i, "!", Zd), _e(i, "-", Ri), _e(i, "%", Pl), _e(i, "|", Ko), _e(i, "+", Wo), _e(i, "#", Yo), _e(i, "?", Dl), _e(i, '"', Xd), _e(i, "/", aa), _e(i, ";", Jd), _e(i, "~", Fl), _e(i, "_", Zo), _e(i, "\\", Bo), _e(i, "・", sg);
  const a = St(i, Ea, Kd, {
    [rd]: !0
  });
  St(a, Ea, a);
  const n = St(a, Aa, rg, {
    [Rl]: !0
  }), r = St(a, vl, lg, {
    [_l]: !0
  }), s = St(i, Aa, $a, {
    [ld]: !0
  });
  St(s, Ea, n), St(s, Aa, s), St(n, Ea, n), St(n, Aa, n);
  const c = St(i, vl, ud, {
    [sd]: !0
  });
  St(c, Aa), St(c, Ea, r), St(c, vl, c), St(r, Ea, r), St(r, Aa), St(r, vl, r);
  const d = _e(i, Oc, Wd, {
    [Ec]: !0
  }), y = _e(i, $p, fd, {
    [Ec]: !0
  }), v = St(i, xc, fd, {
    [Ec]: !0
  });
  _e(i, Nc, v), _e(y, Oc, d), _e(y, Nc, v), St(y, xc, v), _e(v, $p), _e(v, Oc), St(v, xc, v), _e(v, Nc, v);
  const g = St(i, $c, og, {
    [ng]: !0
  });
  _e(g, "#"), St(g, $c, g), _e(g, EC, g);
  const m = _e(g, $C);
  _e(m, "#"), St(m, $c, g);
  const k = [[Aa, s], [Ea, n]], T = [[Aa, null], [vl, c], [Ea, r]];
  for (let C = 0; C < Vs.length; C++)
    on(i, Vs[C], cd, $a, k);
  for (let C = 0; C < qs.length; C++)
    on(i, qs[C], dd, ud, T);
  Xn(cd, {
    tld: !0,
    ascii: !0
  }, t), Xn(dd, {
    utld: !0,
    alpha: !0
  }, t), on(i, "file", Xs, $a, k), on(i, "mailto", Xs, $a, k), on(i, "http", Cr, $a, k), on(i, "https", Cr, $a, k), on(i, "ftp", Cr, $a, k), on(i, "ftps", Cr, $a, k), Xn(Xs, {
    scheme: !0,
    ascii: !0
  }, t), Xn(Cr, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((C, x) => C[0] > x[0] ? 1 : -1);
  for (let C = 0; C < e.length; C++) {
    const x = e[C][0], L = e[C][1] ? {
      [SC]: !0
    } : {
      [CC]: !0
    };
    x.indexOf("-") >= 0 ? L[od] = !0 : Aa.test(x) ? Ea.test(x) ? L[Rl] = !0 : L[ld] = !0 : L[rd] = !0, Ep(i, x, x, L);
  }
  return Ep(i, "localhost", ts, {
    ascii: !0
  }), i.jd = new Si(Xo), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, ug)
  };
}
function cg(e, t) {
  const i = OC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), a = i.length, n = [];
  let r = 0, s = 0;
  for (; s < a; ) {
    let c = e, d = null, y = 0, v = null, g = -1, m = -1;
    for (; s < a && (d = c.go(i[s])); )
      c = d, c.accepts() ? (g = 0, m = 0, v = c) : g >= 0 && (g += i[s].length, m++), y += i[s].length, r += i[s].length, s++;
    r -= g, s -= m, y -= g, n.push({
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
  return n;
}
function OC(e) {
  const t = [], i = e.length;
  let a = 0;
  for (; a < i; ) {
    let n = e.charCodeAt(a), r, s = n < 55296 || n > 56319 || a + 1 === i || (r = e.charCodeAt(a + 1)) < 56320 || r > 57343 ? e[a] : e.slice(a, a + 2);
    t.push(s), a += s.length;
  }
  return t;
}
function on(e, t, i, a, n) {
  let r;
  const s = t.length;
  for (let c = 0; c < s - 1; c++) {
    const d = t[c];
    e.j[d] ? r = e.j[d] : (r = new Si(a), r.jr = n.slice(), e.j[d] = r), e = r;
  }
  return r = new Si(i), r.jr = n.slice(), e.j[t[s - 1]] = r, r;
}
function xp(e) {
  const t = [], i = [];
  let a = 0, n = "0123456789";
  for (; a < e.length; ) {
    let r = 0;
    for (; n.indexOf(e[a + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(i.join(""));
      for (let s = parseInt(e.substring(a, a + r), 10); s > 0; s--)
        i.pop();
      a += r;
    } else
      i.push(e[a]), a++;
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
  const a = i.ignoreTags, n = [];
  for (let r = 0; r < a.length; r++)
    n.push(a[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = n;
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
    const a = t != null;
    let n = this.o[e];
    return n && (typeof n == "object" ? (n = i.t in n ? n[i.t] : is[e], typeof n == "function" && a && (n = n(t, i))) : typeof n == "function" && a && (n = n(t, i.t, i)), n);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, i) {
    let a = this.o[e];
    return typeof a == "function" && t != null && (a = a(t, i.t, i)), a;
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
    const t = this.toString(), i = e.get("truncate", t, this), a = e.get("format", t, this);
    return i && a.length > i ? a.substring(0, i) + "…" : a;
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), a = e.get("formatHref", i, this), n = e.get("tagName", i, t), r = this.toFormattedString(e), s = {}, c = e.get("className", i, t), d = e.get("target", i, t), y = e.get("rel", i, t), v = e.getObj("attributes", i, t), g = e.getObj("events", i, t);
    return s.href = a, c && (s.class = c), d && (s.target = d), y && (s.rel = y), v && Object.assign(s, v), {
      tagName: n,
      attributes: s,
      content: r,
      eventListeners: g
    };
  }
};
function wu(e, t) {
  class i extends dg {
    constructor(n, r) {
      super(n, r), this.t = e;
    }
  }
  for (const a in t)
    i.prototype[a] = t[a];
  return i.t = e, i;
}
const NC = wu("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Np = wu("text"), RC = wu("nl"), Gs = wu("url", {
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
    return e.length >= 2 && e[0].t !== ts && e[1].t === Jn;
  }
}), Oi = (e) => new Si(e);
function IC({
  groups: e
}) {
  const t = e.domain.concat([Uo, jo, pn, Bo, Ho, Vo, qo, Go, Ri, Kd, Pl, Ko, Wo, Yo, aa, Xo, Fl, Zo]), i = [zo, Jn, Yd, ia, Zd, Pl, Dl, Xd, Jd, xo, Oo, Il, Ll, Ao, To, Eo, $o, No, Ro, Io, Lo, Po, Do, Fo, Mo], a = [Uo, zo, jo, Bo, Ho, Vo, qo, Go, Ri, Il, Ll, Pl, Ko, Wo, Yo, Dl, aa, Xo, Fl, Zo], n = Oi(), r = _e(n, Fl);
  Ye(r, a, r), Ye(r, e.domain, r);
  const s = Oi(), c = Oi(), d = Oi();
  Ye(n, e.domain, s), Ye(n, e.scheme, c), Ye(n, e.slashscheme, d), Ye(s, a, r), Ye(s, e.domain, s);
  const y = _e(s, pn);
  _e(r, pn, y), _e(c, pn, y), _e(d, pn, y);
  const v = _e(r, ia);
  Ye(v, a, r), Ye(v, e.domain, r);
  const g = Oi();
  Ye(y, e.domain, g), Ye(g, e.domain, g);
  const m = _e(g, ia);
  Ye(m, e.domain, g);
  const k = Oi(NC);
  Ye(m, e.tld, k), Ye(m, e.utld, k), _e(y, ts, k);
  const T = _e(g, Ri);
  _e(T, Ri, T), Ye(T, e.domain, g), Ye(k, e.domain, g), _e(k, ia, m), _e(k, Ri, T);
  const C = _e(s, Ri), x = _e(s, ia);
  _e(C, Ri, C), Ye(C, e.domain, s), Ye(x, a, r), Ye(x, e.domain, s);
  const R = Oi(Gs);
  Ye(x, e.tld, R), Ye(x, e.utld, R), Ye(R, e.domain, s), Ye(R, a, r), _e(R, ia, x), _e(R, Ri, C), _e(R, pn, y);
  const L = _e(R, Jn), P = Oi(Gs);
  Ye(L, e.numeric, P);
  const N = Oi(Gs), pe = Oi();
  Ye(N, t, N), Ye(N, i, pe), Ye(pe, t, N), Ye(pe, i, pe), _e(R, aa, N), _e(P, aa, N);
  const Q = _e(c, Jn), $ = _e(d, Jn), H = _e($, aa), G = _e(H, aa);
  Ye(c, e.domain, s), _e(c, ia, x), _e(c, Ri, C), Ye(d, e.domain, s), _e(d, ia, x), _e(d, Ri, C), Ye(Q, e.domain, N), _e(Q, aa, N), _e(Q, Dl, N), Ye(G, e.domain, N), Ye(G, t, N), _e(G, aa, N);
  const J = [
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
  for (let le = 0; le < J.length; le++) {
    const [B, W] = J[le], I = _e(N, B);
    _e(pe, B, I);
    const j = Oi(Gs);
    Ye(I, t, j);
    const Z = Oi();
    Ye(I, i, Z), _e(I, W, N), Ye(j, t, j), Ye(j, i, Z), Ye(Z, t, j), Ye(Z, i, Z), _e(j, W, N), _e(Z, W, N);
  }
  return _e(n, ts, R), _e(n, Wd, RC), {
    start: n,
    tokens: ug
  };
}
function LC(e, t, i) {
  let a = i.length, n = 0, r = [], s = [];
  for (; n < a; ) {
    let c = e, d = null, y = null, v = 0, g = null, m = -1;
    for (; n < a && !(d = c.go(i[n].t)); )
      s.push(i[n++]);
    for (; n < a && (y = d || c.go(i[n].t)); )
      d = null, c = y, c.accepts() ? (m = 0, g = c) : m >= 0 && m++, n++, v++;
    if (m < 0)
      n -= v, n < a && (s.push(i[n]), n++);
    else {
      s.length > 0 && (r.push(Rc(Np, t, s)), s = []), n -= m, v -= m;
      const k = g.t, T = i.slice(n - v, n);
      r.push(Rc(k, t, T));
    }
  }
  return s.length > 0 && r.push(Rc(Np, t, s)), r;
}
function Rc(e, t, i) {
  const a = i[0].s, n = i[i.length - 1].e, r = t.slice(a, n);
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
function PC() {
  Wt.scanner = xC(Wt.customSchemes);
  for (let e = 0; e < Wt.tokenQueue.length; e++)
    Wt.tokenQueue[e][1]({
      scanner: Wt.scanner
    });
  Wt.parser = IC(Wt.scanner.tokens);
  for (let e = 0; e < Wt.pluginQueue.length; e++)
    Wt.pluginQueue[e][1]({
      scanner: Wt.scanner,
      parser: Wt.parser
    });
  return Wt.initialized = !0, Wt;
}
function fg(e) {
  return Wt.initialized || PC(), LC(Wt.parser.start, e, cg(Wt.scanner.start, e));
}
fg.scan = cg;
function DC(e) {
  const t = new Qd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, UC), i = fg(e), a = [];
  for (const n of i)
    n.t === "nl" && t.get("nl2br") ? a.push(`<br>
`) : !n.isLink || !t.check(n) ? a.push(ho(n.toString())) : a.push(t.render(n));
  return a.join("");
}
function FC(e) {
  return e.replace(/"/g, "&quot;");
}
function MC(e) {
  const t = [];
  for (const i in e) {
    const a = e[i] + "";
    t.push(`${i}="${FC(a)}"`);
  }
  return t.join(" ");
}
function UC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${MC(t)}>${ho(i)}</${e}>`;
}
const zC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = DC(t.text));
}, jC = ["title"], BC = /* @__PURE__ */ Vt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Zt("NcAppSidebar:header:ref");
    return (i, a) => ye((h(), p("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ae(o(e.name), 1)
    ], 8, jC)), [
      [u(zC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), HC = ["aria-labelledby"], VC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, qC = ["id"], GC = {
  key: 2,
  class: "empty-content__description"
}, KC = {
  key: 3,
  class: "empty-content__action"
}, WC = /* @__PURE__ */ Vt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = gu();
    return (i, a) => (h(), p("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (h(), p("div", VC, [
        He(i.$slots, "icon", {}, void 0, !0)
      ])) : E("", !0),
      e.name !== "" || i.$slots.name ? (h(), p("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        He(i.$slots, "name", {}, () => [
          ae(o(e.name), 1)
        ], !0)
      ], 8, qC)) : E("", !0),
      e.description !== "" || i.$slots.description ? (h(), p("p", GC, [
        He(i.$slots, "description", {}, () => [
          ae(o(e.description), 1)
        ], !0)
      ])) : E("", !0),
      i.$slots.action ? (h(), p("div", KC, [
        He(i.$slots, "action", {}, void 0, !0)
      ])) : E("", !0)
    ], 8, HC));
  }
}), YC = /* @__PURE__ */ ut(WC, [["__scopeId", "data-v-8609a4c1"]]), ZC = {
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
}, XC = ["aria-hidden", "aria-label"], JC = ["fill", "width", "height"], QC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, e2 = { key: 0 };
function t2(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", QC, [
        i.title ? (h(), p("title", e2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, JC))
  ], 16, XC);
}
const i2 = /* @__PURE__ */ ut(ZC, [["render", t2]]), a2 = {
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
}, n2 = ["aria-hidden", "aria-label"], r2 = ["fill", "width", "height"], l2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, s2 = { key: 0 };
function o2(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", l2, [
        i.title ? (h(), p("title", s2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, r2))
  ], 16, n2);
}
const u2 = /* @__PURE__ */ ut(a2, [["render", o2]]), c2 = {
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
}, d2 = ["aria-hidden", "aria-label"], f2 = ["fill", "width", "height"], h2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, p2 = { key: 0 };
function v2(e, t, i, a, n, r) {
  return h(), p("span", ti(e.$attrs, {
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
      l("path", h2, [
        i.title ? (h(), p("title", p2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, f2))
  ], 16, d2);
}
const b2 = /* @__PURE__ */ ut(c2, [["render", v2]]), g2 = ["aria-selected", "tabindex"], m2 = /* @__PURE__ */ Vt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ My({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Ov(e, "selected"), i = /* @__PURE__ */ q(!1);
    function a() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (n, r) => (h(), p("button", {
      class: Ee(["button-vue", [n.$style.sidebarTabsButton, {
        [n.$style.sidebarTabsButton_selected]: t.value,
        [n.$style.sidebarTabsButton_legacy]: u(Tn),
        [n.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: a
    }, [
      l("span", {
        class: Ee([n.$style.sidebarTabsButton__icon, { [n.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (s) => i.value = !1)
      }, [
        l("span", {
          class: Ee([n.$style.sidebarTabsButton__iconLayer, { [n.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          de(nd, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              l("span", {
                class: Ee([n.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Ee([n.$style.sidebarTabsButton__iconLayer, { [n.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          de(nd, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              l("span", {
                class: Ee([n.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Ee(n.$style.sidebarTabsButton__name)
      }, o(e.tab.name), 3)
    ], 10, g2));
  }
}), y2 = "_sidebarTabsButton_q3kBA", _2 = "_sidebarTabsButton_legacy_KQ4d1", w2 = "_sidebarTabsButton_selected_Pjayf", k2 = "_sidebarTabsButton_animatedHighlight_uvp-0", S2 = "_sidebarTabsButton__name_rlQsL", C2 = "_sidebarTabsButton__icon_QzZg4", T2 = "_sidebarTabsButton__iconLayer_ZkZan", A2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", E2 = "_sidebarTabsButton__icon_pop_IA0By", $2 = "_sidebarTabsButton__legacyIcon_QhcNW", x2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: y2,
  sidebarTabsButton_legacy: _2,
  sidebarTabsButton_selected: w2,
  sidebarTabsButton_animatedHighlight: k2,
  sidebarTabsButton__name: S2,
  sidebarTabsButton__icon: C2,
  sidebarTabsButton__iconLayer: T2,
  sidebarTabsButton__iconLayer_hidden: A2,
  sidebarTabsButton__icon_pop: E2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: $2
}, O2 = {
  $style: x2
}, N2 = /* @__PURE__ */ ut(m2, [["__cssModules", O2]]), R2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: N2
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
      isLegacy34: Tn,
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [F_()]) : t.order - i.order), this.updateActive();
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
      const t = e.getBoundingClientRect(), i = this.$refs.nav.getBoundingClientRect(), a = this.highlightVisible;
      this.highlightAnimated = a, this.highlightOverActive = e.getAttribute("aria-selected") === "true", this.highlightLeft = t.left - i.left, this.highlightTop = t.top - i.top, this.highlightWidth = t.width, this.highlightHeight = t.height, a || (this.highlightVisible = !0, this.$nextTick(() => requestAnimationFrame(() => {
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
}, I2 = { class: "app-sidebar-tabs" };
function L2(e, t, i, a, n, r) {
  const s = Je("NcAppSidebarTabsButton");
  return h(), p("div", I2, [
    r.hasMultipleTabs || r.showForSingleTab ? (h(), p("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": n.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ht(Ce((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ht(Ce((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ht(Ce((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ht(Ce((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ht(Ce((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ht(Ce((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ht(Ce((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      n.highlightEnabled ? (h(), p("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": n.highlightVisible,
          "app-sidebar-tabs__highlight--animated": n.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": n.highlightOverActive
        }]),
        style: pi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : E("", !0),
      (h(!0), p(Y, null, he(n.tabs, (c) => (h(), Fe(s, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: n.activeTab === c.id,
        animatedHighlight: n.highlightEnabled,
        tab: c,
        "onUpdate:selected": (d) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : E("", !0),
    l("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      He(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const P2 = /* @__PURE__ */ ut(R2, [["render", L2], ["__scopeId", "data-v-74190d2a"]]);
Cn(y0);
const D2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: Gd,
    NcAppSidebarHeader: BC,
    NcAppSidebarTabs: P2,
    NcButton: oa,
    NcLoadingIcon: ag,
    NcEmptyContent: YC,
    IconArrowRight: Pb,
    IconClose: Db,
    IconDockRight: i2,
    IconStar: u2,
    IconStarOutline: b2
  },
  directives: {
    Focus: _C,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: yC
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
    const e = /* @__PURE__ */ q(null);
    return Ii("NcAppSidebar:header:ref", e), {
      uid: gu(),
      isMobile: h0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Pt("Change name"),
      closeTranslated: Pt("Close sidebar"),
      favoriteTranslated: Pt("Favorite"),
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
    t: Pt,
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
}, F2 = ["aria-labelledby"], M2 = { class: "app-sidebar-header__info" }, U2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, z2 = { class: "app-sidebar-header__name-container" }, j2 = { class: "app-sidebar-header__mainname-container" }, B2 = ["placeholder", "value"], H2 = ["title"], V2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function q2(e, t, i, a, n, r) {
  const s = Je("IconDockRight"), c = Je("NcButton"), d = Je("NcLoadingIcon"), y = Je("IconStar"), v = Je("IconStarOutline"), g = Je("NcAppSidebarHeader"), m = Je("IconArrowRight"), k = Je("NcActions"), T = Je("IconClose"), C = Je("NcAppSidebarTabs"), x = Je("NcEmptyContent"), R = Yf("focus"), L = Yf("click-outside");
  return h(), Fe(T1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      ye(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${a.uid}__header`,
        onKeydown: t[6] || (t[6] = ht((...P) => r.onKeydownEsc && r.onKeydownEsc(...P), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (h(), Fe(Ed, {
          key: 0,
          to: r.ncContentSelector
        }, [
          de(c, ti({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              He(e.$slots, "toggle-icon", {}, () => [
                de(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : E("", !0),
        l("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (h(), Fe(g, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : He(e.$slots, "info", { key: 0 }, () => [
            l("div", M2, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (h(), p("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: pi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...P) => r.onFigureClick && r.onFigureClick(...P)),
                onKeydown: t[2] || (t[2] = ht((...P) => r.onFigureClick && r.onFigureClick(...P), ["enter"]))
              }, [
                He(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : E("", !0),
              l("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (h(), p("div", U2, [
                  He(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (h(), Fe(c, {
                      key: 0,
                      "aria-label": n.favoriteTranslated,
                      pressed: n.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ce(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        i.starLoading ? (h(), Fe(d, { key: 0 })) : n.isStarred ? (h(), Fe(y, {
                          key: 1,
                          size: 20
                        })) : (h(), Fe(v, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : E("", !0)
                  ], !0)
                ])) : E("", !0),
                l("div", z2, [
                  l("div", j2, [
                    ye(de(g, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: Ce(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [tr, !i.nameEditable]
                    ]),
                    i.nameEditable ? ye((h(), p("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ce((...P) => r.onSubmitName && r.onSubmitName(...P), ["prevent"]))
                    }, [
                      ye(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = ht(Ce((...P) => r.onDismissEditing && r.onDismissEditing(...P), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...P) => r.onNameInput && r.onNameInput(...P))
                      }, null, 40, B2), [
                        [R]
                      ]),
                      de(c, {
                        "aria-label": n.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          de(m, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [L, () => r.onSubmitName()]
                    ]) : E("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (h(), Fe(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: ke(() => [
                        He(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : E("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (h(), p("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    He(e.$slots, "subname", {}, () => [
                      ae(o(i.subname), 1)
                    ], !0)
                  ], 8, H2)) : E("", !0)
                ])
              ], 2)
            ])
          ], !0),
          de(c, {
            ref: "closeButton",
            "aria-label": n.closeTranslated,
            title: n.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ce(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              de(T, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (h(), p("div", V2, [
            He(e.$slots, "description", {}, void 0, !0)
          ])) : E("", !0)
        ], 2),
        ye(de(C, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            He(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [tr, !i.loading]
        ]),
        i.loading ? (h(), Fe(x, { key: 1 }, {
          icon: ke(() => [
            de(d, { size: 64 })
          ]),
          _: 1
        })) : E("", !0)
      ], 40, F2), [
        [tr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const G2 = /* @__PURE__ */ ut(D2, [["render", q2], ["__scopeId", "data-v-c2c6820b"]]), K2 = {
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
}, W2 = ["role"], Y2 = ["download", "href", "aria-label", "target", "title", "role"], Z2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, X2 = { class: "action-link__name" }, J2 = ["textContent"], Q2 = ["textContent"], eT = {
  key: 2,
  class: "action-link__text"
};
function tT(e, t, i, a, n, r) {
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
      He(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (h(), p("span", Z2, [
        l("strong", X2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, J2)
      ])) : e.isLongText ? (h(), p("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, Q2)) : (h(), p("span", eT, o(e.text), 1)),
      E("", !0)
    ], 8, Y2)
  ], 8, W2);
}
const Ic = /* @__PURE__ */ ut(K2, [["render", tT], ["__scopeId", "data-v-32f01b7a"]]);
Cn(C0);
const iT = `<!--
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
`, aT = `<!--
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
`, nT = { class: "vue-skip-actions__container" }, rT = { class: "vue-skip-actions__headline" }, lT = { class: "vue-skip-actions__buttons" }, sT = /* @__PURE__ */ Vt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Ii(Ib, c), Ii(Lb, "#content-vue"), Ii("appName", z(() => t.appName));
    const i = cs(), a = /* @__PURE__ */ q(!1), n = /* @__PURE__ */ q(), r = z(() => n.value === "navigation" ? aT : iT);
    kv(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function s() {
      Fa("toggle-navigation", { open: !0 }), It(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(d) {
      a.value = d, n.value || (n.value = "navigation");
    }
    return (d, y) => (h(), p("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(Tn) }]])
    }, [
      (h(), Fe(Ed, { to: "#skip-actions" }, [
        l("div", nT, [
          l("div", rT, o(u(Pt)("Keyboard navigation help")), 1),
          l("div", lT, [
            ye(de(oa, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ce(s, ["prevent"]),
              onFocusin: y[0] || (y[0] = (v) => n.value = "navigation"),
              onMouseover: y[1] || (y[1] = (v) => n.value = "navigation")
            }, {
              default: ke(() => [
                ae(o(u(Pt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [tr, a.value]
            ]),
            de(oa, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: y[2] || (y[2] = (v) => n.value = "content"),
              onMouseover: y[3] || (y[3] = (v) => n.value = "content")
            }, {
              default: ke(() => [
                ae(o(u(Pt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ye(de(bu, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [tr, !u(i)]
          ])
        ])
      ])),
      He(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), oT = /* @__PURE__ */ ut(sT, [["__scopeId", "data-v-d13dcb98"]]), uT = { class: "library-shelf-tree-node" }, cT = ["aria-expanded", "aria-label"], dT = ["href"], fT = { class: "library-shelf-summary-title" }, hT = { dir: "auto" }, pT = { class: "library-muted" }, vT = { dir: "auto" }, bT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, gT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, mT = {
  key: 3,
  class: "library-shelf-tree"
}, yT = ["disabled"], _T = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q(!1), a = /* @__PURE__ */ q(!1), n = /* @__PURE__ */ q(!1), r = /* @__PURE__ */ q(!1), s = /* @__PURE__ */ q([]), c = /* @__PURE__ */ q(!1), d = /* @__PURE__ */ q(0);
    async function y() {
      i.value = !i.value, !(!i.value || a.value || n.value) && await v();
    }
    async function v() {
      if (!n.value) {
        n.value = !0, r.value = !1;
        try {
          const g = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), m = await fetch(`${t.childrenUrl}?${g}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!m.ok) throw new Error("Shelf children request failed");
          const k = await m.json(), T = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...T), c.value = k?.hasMore === !0, d.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, a.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          n.value = !1;
        }
      }
    }
    return (g, m) => {
      const k = Je("ShelfTreeNode", !0);
      return h(), p("li", uT, [
        e.node.hasChildren ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(_)("library", "Collapse {folder}", { folder: e.node.label }) : u(_)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: y
        }, o(i.value ? "−" : "+"), 9, cT)) : E("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", fT, [
            l("strong", null, [
              l("bdi", hT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(Rt)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", pT, [
            l("bdi", vT, o(e.node.path), 1)
          ])
        ], 8, dT),
        n.value ? (h(), p("small", bT, o(u(_)("library", "Loading folders…")), 1)) : r.value ? (h(), p("small", gT, o(u(_)("library", "Could not load folders.")), 1)) : E("", !0),
        i.value && s.value.length ? (h(), p("ul", mT, [
          (h(!0), p(Y, null, he(s.value, (T) => (h(), Fe(k, {
            key: T.id,
            node: T,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : E("", !0),
        i.value && c.value ? (h(), p("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: n.value,
          onClick: v
        }, o(u(_)("library", "Load more folders")), 9, yT)) : E("", !0)
      ]);
    };
  }
}, wT = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, kT = ["src"], ST = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, hg = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q(null), a = /* @__PURE__ */ q(typeof IntersectionObserver > "u"), n = /* @__PURE__ */ q("loading");
    let r;
    return Ge(() => t.src, () => {
      n.value = "loading";
    }), xt(() => {
      a.value || (r = new IntersectionObserver((s) => {
        s.some((c) => c.isIntersecting) && (a.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), Ti(() => r?.disconnect()), (s, c) => (h(), p("span", {
      ref_key: "frame",
      ref: i,
      class: Ee(["library-cover-frame", { "library-cover-frame--error": n.value === "error" }])
    }, [
      n.value === "loading" ? (h(), p("span", wT)) : E("", !0),
      (h(), p("img", {
        key: e.src,
        class: Ee(["library-cover-image", { "library-cover-image--loaded": n.value === "loaded" }]),
        src: a.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: c[0] || (c[0] = (d) => n.value = "loaded"),
        onError: c[1] || (c[1] = (d) => n.value = "error")
      }, null, 42, kT)),
      n.value === "error" ? (h(), p("span", ST, o(u(_)("library", "Cover unavailable")), 1)) : E("", !0)
    ], 2));
  }
};
async function Rp(e = "", t = "", i = null) {
  const a = await fetch(`${Jt("/apps/library/api/lists")}${e}`, {
    method: i === null ? "GET" : "POST",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "application/json", ...i === null ? {} : { "Content-Type": "application/json", requesttoken: t } },
    ...i === null ? {} : { body: JSON.stringify(i) }
  });
  if (!a.ok) {
    const n = a.status === 409 ? _("library", "This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.") : a.status === 404 ? _("library", "This list or entry is no longer available.") : a.status === 422 ? _("library", "Check the name, text length and selected books, then try again.") : _("library", "Could not save or load the list. Check your connection and reload before retrying."), r = new Error(n);
    throw r.status = a.status, r;
  }
  return a.json();
}
const qn = /* @__PURE__ */ new Map();
function bn(e = "", t = "", i = null) {
  if (i !== null)
    return qn.clear(), Rp(e, t, i).finally(() => qn.clear());
  if (qn.has(e)) return qn.get(e);
  const a = Rp(e, t).finally(() => {
    qn.get(e) === a && qn.delete(e);
  });
  return qn.set(e, a), a;
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
    const i = e, a = t, n = /* @__PURE__ */ q([]), r = /* @__PURE__ */ q(""), s = /* @__PURE__ */ q(!1), c = /* @__PURE__ */ q(""), d = /* @__PURE__ */ q("");
    async function y() {
      s.value = !0, c.value = "";
      try {
        const g = await bn(i.itemIds.length === 1 ? `?itemId=${i.itemIds[0]}` : "");
        n.value = g.lists;
        const m = Number(r.value) || i.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(n.value.find((k) => k.id === m)?.id || n.value[0]?.id || "");
      } catch (g) {
        c.value = g.message;
      } finally {
        s.value = !1;
      }
    }
    async function v() {
      const g = n.value.find((k) => k.id === Number(r.value));
      if (s.value || !g || i.itemIds.length === 0) return;
      const m = [...i.itemIds];
      s.value = !0, c.value = "", d.value = "";
      try {
        const k = await bn(`/${g.id}/actions`, i.requestToken, { action: "add", revision: g.revision, itemIds: m });
        g.revision = k.revision, d.value = _("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), m.length === 1 && k.skipped === 0 && (g.containsItem = !0), a("added", k);
      } catch (k) {
        c.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return Ge(() => i.itemIds.join(","), () => {
      d.value = "";
    }), xt(y), (g, m) => (h(), p("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", TT, [
        n.value.length ? ye((h(), p("select", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(_)("library", "Choose a list"),
          onChange: m[1] || (m[1] = (k) => d.value = "")
        }, [
          (h(!0), p(Y, null, he(n.value, (k) => (h(), p("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, ET))), 128))
        ], 40, AT)), [
          [nt, r.value]
        ]) : E("", !0),
        n.value.length ? (h(), p("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(_)("library", "Add to list")), 9, $T)) : E("", !0),
        !s.value && !n.value.length && !c.value ? (h(), p("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(_)("library", "Create a new list")), 9, xT)) : E("", !0),
        d.value && r.value ? (h(), p("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(_)("library", "Back to list")), 9, OT)) : E("", !0)
      ]),
      s.value ? (h(), p("p", NT, o(u(_)("library", "Loading or saving…")), 1)) : E("", !0),
      c.value ? (h(), p("p", RT, o(c.value), 1)) : E("", !0),
      c.value ? (h(), p("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: y
      }, o(u(_)("library", "Reload list")), 9, IT)) : E("", !0),
      d.value ? (h(), p("p", LT, o(d.value), 1)) : E("", !0)
    ], 8, CT));
  }
}, PT = ["onKeydown"], DT = ["aria-label", "aria-describedby"], FT = ["id"], Ke = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Cy(), i = /* @__PURE__ */ q(null), a = /* @__PURE__ */ q(null), n = /* @__PURE__ */ q(!1), r = /* @__PURE__ */ q({});
    let s;
    const c = `${t}-label`;
    xt(() => {
      const x = i.value?.closest("label"), R = x?.querySelector("input, select, textarea"), L = i.value?.closest("h1, h2, h3, h4");
      x && R && !x.htmlFor && (R.id ||= `${t}-control`, x.htmlFor = R.id);
      for (const P of [R, L])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", c);
    });
    async function d() {
      clearTimeout(s), n.value = !0, await It(), y();
    }
    function y() {
      if (!i.value || !a.value) return;
      const x = i.value.getBoundingClientRect(), R = a.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min(x.left, window.innerWidth - 336))}px`, top: `${Math.max(8, x.bottom + R + 12 < window.innerHeight ? x.bottom + 8 : x.top - R - 8)}px` };
    }
    function v() {
      clearTimeout(s);
    }
    function g() {
      clearTimeout(s), n.value = !1;
    }
    function m() {
      s = setTimeout(() => {
        i.value?.contains(document.activeElement) || g();
      }, 150);
    }
    function k(x) {
      !i.value?.contains(x.target) && !a.value?.contains(x.target) && g();
    }
    function T(x) {
      x.key === "Escape" && g();
    }
    function C(x) {
      n.value && (!(x.target instanceof Node) || !a.value?.contains(x.target)) && y();
    }
    return document.addEventListener("keydown", T), document.addEventListener("pointerdown", k), window.addEventListener("scroll", C, !0), Ti(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", C, !0), document.removeEventListener("keydown", T);
    }), (x, R) => (h(), p("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: R[0] || (R[0] = (L) => L.pointerType !== "touch" && d()),
      onPointerleave: m,
      onKeydown: ht(Ce(g, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: c }, [
        He(x.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(_)("library", "Help"),
        "aria-describedby": n.value ? u(t) : void 0,
        onFocus: d,
        onBlur: m,
        onClick: Ce(d, ["stop", "prevent"])
      }, "?", 40, DT),
      (h(), Fe(Ed, { to: "body" }, [
        n.value ? (h(), p("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: a,
          class: "library-label-help-popup",
          role: "tooltip",
          style: pi(r.value),
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
}, QT = ["href"], eA = ["disabled"], tA = ["disabled"], iA = ["aria-label"], aA = ["disabled"], nA = ["disabled"], rA = {
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
    const i = e, a = t, n = /* @__PURE__ */ q([]), r = /* @__PURE__ */ q(null), s = /* @__PURE__ */ q(!1), c = /* @__PURE__ */ q(""), d = /* @__PURE__ */ q(""), y = /* @__PURE__ */ q(!1), v = /* @__PURE__ */ Nt({ name: "", description: "" }), g = /* @__PURE__ */ q(null), m = /* @__PURE__ */ q(""), k = /* @__PURE__ */ q(!1), T = /* @__PURE__ */ q(null), C = /* @__PURE__ */ q(null), x = /* @__PURE__ */ q(null), R = /* @__PURE__ */ q(Number(new URLSearchParams(window.location.search).get("listId")) || null), L = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = z(() => !s.value && g.value === null);
    async function N(B = 1, W = y.value) {
      s.value = !0, c.value = "";
      try {
        R.value ? r.value = await bn(`/${R.value}?page=${B}`) : n.value = (await bn()).lists, W || (g.value = null, y.value = !1);
      } catch (I) {
        c.value = I.message;
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
          await bn(`/${r.value.list.id}/actions`, i.requestToken, { action: "update", revision: r.value.list.revision, ...v });
        else {
          R.value = (await bn("", i.requestToken, v)).list.id;
          const B = new URL(window.location.href);
          B.searchParams.set("listId", R.value), window.history.replaceState({}, "", B);
        }
        y.value = !1, await N(1, !0), a("changed"), d.value = _("library", "List saved."), await It(), x.value?.focus();
      } catch (B) {
        c.value = B.message;
      } finally {
        s.value = !1;
      }
    }
    async function $(B, W) {
      s.value = !0, c.value = "", d.value = "";
      try {
        const I = await bn(`/${r.value.list.id}/actions`, i.requestToken, { ...B, revision: r.value.list.revision });
        if (B.action === "delete") {
          r.value = null, R.value = null, k.value = !1;
          const j = new URL(window.location.href);
          j.searchParams.delete("listId"), window.history.replaceState({}, "", j);
        }
        if (g.value = null, T.value = null, B.action === "note") {
          const j = r.value.entries.find((Z) => Z.id === B.entryId);
          j && (j.note = B.note.trim()), r.value.list.revision = I.revision;
        } else await N(r.value?.page || 1);
        B.action === "delete" && a("changed"), d.value = W, await It(), B.action === "move" ? document.getElementById(`library-list-entry-${B.entryId}`)?.focus() : x.value?.focus();
      } catch (I) {
        c.value = I.message;
      } finally {
        s.value = !1;
      }
    }
    function H(B) {
      g.value = B.id, m.value = B.note, T.value = null;
    }
    function G(B, W) {
      return $({ action: "move", entryId: B.id, direction: W }, _("library", "Reading order saved."));
    }
    function J(B, W) {
      C.value = W.id, B.dataTransfer.setData("text/plain", String(W.id));
    }
    function le(B) {
      if (C.value === null || !P.value) return;
      const W = C.value;
      return C.value = null, $({ action: "move", entryId: W, beforeId: B }, _("library", "Reading order saved."));
    }
    return xt(async () => {
      await N(), !R.value && new URLSearchParams(window.location.search).get("new") === "1" && pe();
    }), (B, W) => (h(), p("section", {
      class: "library-personal-lists",
      "aria-label": u(_)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", UT, [
        l("div", null, [
          R.value ? (h(), p("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(_)("library", "All lists")), 9, zT)) : E("", !0),
          l("h1", {
            ref_key: "heading",
            ref: x,
            tabindex: "-1"
          }, [
            de(Ke, {
              text: u(_)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: ke(() => [
                ae(o(r.value?.list.name || u(_)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !R.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || y.value,
          onClick: pe
        }, o(u(_)("library", "New list")), 9, jT)) : E("", !0)
      ]),
      c.value ? (h(), p("p", BT, o(c.value), 1)) : E("", !0),
      c.value ? (h(), p("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: W[0] || (W[0] = (I) => N(r.value?.page || 1, !0))
      }, o(u(_)("library", "Reload list")), 9, HT)) : E("", !0),
      d.value ? (h(), p("p", VT, o(d.value), 1)) : E("", !0),
      s.value ? (h(), p("p", qT, o(u(_)("library", "Loading or saving…")), 1)) : E("", !0),
      y.value ? (h(), p("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Ce(Q, ["prevent"])
      }, [
        l("label", null, [
          ae(o(u(_)("library", "List name")), 1),
          ye(l("input", {
            "onUpdate:modelValue": W[1] || (W[1] = (I) => v.name = I),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, GT), [
            [ze, v.name]
          ])
        ]),
        l("label", null, [
          ae(o(u(_)("library", "Description / list note")), 1),
          ye(l("textarea", {
            "onUpdate:modelValue": W[2] || (W[2] = (I) => v.description = I),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, KT), [
            [ze, v.description]
          ])
        ]),
        l("div", WT, [
          l("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !v.name.trim()
          }, o(u(_)("library", "Save list")), 9, YT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: W[3] || (W[3] = (I) => y.value = !1)
          }, o(u(_)("library", "Cancel")), 9, ZT)
        ])
      ], 32)) : E("", !0),
      r.value ? (h(), p(Y, { key: 5 }, [
        r.value.list.description && !y.value ? (h(), p("p", XT, o(r.value.list.description), 1)) : E("", !0),
        y.value ? E("", !0) : (h(), p("div", JT, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(_)("library", "Add books from catalogue")), 9, QT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: pe
          }, o(u(_)("library", "Edit list")), 9, eA),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: W[4] || (W[4] = (I) => k.value = !k.value)
          }, o(u(_)("library", "Delete list")), 9, tA)
        ])),
        k.value ? (h(), p("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(_)("library", "Confirm list deletion")
        }, [
          l("p", null, o(u(_)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          l("button", {
            class: "button",
            type: "button",
            disabled: !P.value,
            onClick: W[5] || (W[5] = (I) => $({ action: "delete" }, u(_)("library", "List deleted.")))
          }, o(u(_)("library", "Delete list and notes")), 9, aA),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: W[6] || (W[6] = (I) => k.value = !1)
          }, o(u(_)("library", "Cancel")), 9, nA)
        ], 8, iA)) : E("", !0),
        r.value.total === 0 && !s.value ? (h(), p("p", rA, o(u(_)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : E("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (h(!0), p(Y, null, he(r.value.entries, (I) => (h(), p("li", {
            id: `library-list-entry-${I.id}`,
            key: I.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: W[11] || (W[11] = Ce(() => {
            }, ["prevent"])),
            onDrop: Ce((j) => le(I.id), ["prevent"])
          }, [
            l("div", oA, [
              l("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(_)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (j) => J(j, I),
                onDragend: W[7] || (W[7] = (j) => C.value = null)
              }, "⠿", 40, uA),
              I.book ? (h(), p("img", {
                key: 0,
                src: I.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, cA)) : E("", !0),
              l("div", dA, [
                I.book ? (h(), p("h2", fA, [
                  l("a", {
                    href: I.book.detailsUrl,
                    dir: "auto"
                  }, o(I.book.title), 9, hA)
                ])) : (h(), p("h2", pA, o(u(_)("library", "Unavailable book")), 1)),
                I.book?.creators ? (h(), p("p", vA, o(I.book.creators), 1)) : E("", !0),
                I.book ? E("", !0) : (h(), p("p", bA, o(u(_)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              I.book ? (h(), p("a", {
                key: 1,
                class: "button secondary",
                href: I.book.openUrl
              }, o(u(_)("library", "Open")), 9, gA)) : E("", !0)
            ]),
            I.note && g.value !== I.id ? (h(), p("p", mA, o(I.note), 1)) : E("", !0),
            g.value === I.id ? (h(), p("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Ce((j) => $({ action: "note", entryId: I.id, note: m.value }, u(_)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                ae(o(u(_)("library", "Your note for this book in this list")), 1),
                ye(l("textarea", {
                  "onUpdate:modelValue": W[8] || (W[8] = (j) => m.value = j),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, _A), [
                  [ze, m.value]
                ])
              ]),
              l("div", wA, [
                l("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(_)("library", "Save note")), 9, kA),
                l("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: W[9] || (W[9] = (j) => g.value = null)
                }, o(u(_)("library", "Cancel")), 9, SA)
              ])
            ], 40, yA)) : (h(), p("div", CA, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (j) => H(I)
              }, o(I.note ? u(_)("library", "Edit note") : u(_)("library", "Add note")), 9, TA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || I.number === 1,
                onClick: (j) => G(I, "up")
              }, o(u(_)("library", "Move up")), 9, AA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || I.number === r.value.total,
                onClick: (j) => G(I, "down")
              }, o(u(_)("library", "Move down")), 9, EA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (j) => T.value = I.id
              }, o(u(_)("library", "Remove from list")), 9, $A)
            ])),
            T.value === I.id ? (h(), p("div", xA, [
              l("p", null, o(u(_)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (j) => $({ action: "remove", entryId: I.id }, u(_)("library", "Book removed from list."))
              }, o(u(_)("library", "Remove entry and note")), 9, OA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: W[10] || (W[10] = (j) => T.value = null)
              }, o(u(_)("library", "Cancel")), 9, NA)
            ])) : E("", !0)
          ], 40, sA))), 128))
        ], 8, lA),
        r.value.pages > 1 ? (h(), p("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(_)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === 1,
            onClick: W[12] || (W[12] = (I) => N(r.value.page - 1))
          }, o(u(_)("library", "Previous page")), 9, IA),
          l("span", null, o(u(_)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === r.value.pages,
            onClick: W[13] || (W[13] = (I) => N(r.value.page + 1))
          }, o(u(_)("library", "Next page")), 9, LA)
        ], 8, RA)) : E("", !0)
      ], 64)) : R.value ? E("", !0) : (h(), p(Y, { key: 6 }, [
        u(L) ? (h(), Fe(hd, {
          key: 0,
          "item-ids": [u(L)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: W[14] || (W[14] = (I) => N())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : E("", !0),
        !n.value.length && !s.value && !y.value ? (h(), p("p", PA, o(u(_)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : E("", !0),
        l("ul", DA, [
          (h(!0), p(Y, null, he(n.value, (I) => (h(), p("li", {
            key: I.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${I.id}`
            }, [
              l("h2", MA, o(I.name), 1),
              l("p", null, o(u(_)("library", "Books: {count}", { count: I.count })), 1),
              I.description ? (h(), p("p", UA, o(I.description), 1)) : E("", !0)
            ], 8, FA)
          ]))), 128))
        ])
      ], 64))
    ], 8, MT));
  }
}, jA = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, n] of t)
    i[a] = n;
  return i;
}, BA = ["aria-busy"], HA = ["href"], VA = { class: "author-profile-header" }, qA = {
  key: 0,
  class: "author-portrait"
}, GA = ["src", "alt"], KA = {
  key: 1,
  "aria-hidden": "true"
}, WA = { id: "authors-heading" }, YA = {
  key: 1,
  role: "alert"
}, ZA = ["disabled"], XA = {
  key: 2,
  role: "status"
}, JA = {
  key: 3,
  role: "status"
}, QA = { for: "author-search" }, eE = ["disabled"], tE = {
  key: 0,
  role: "status"
}, iE = ["disabled"], aE = {
  key: 1,
  class: "author-directory"
}, nE = ["href"], rE = { dir: "auto" }, lE = { key: 2 }, sE = {
  key: 0,
  class: "author-biography"
}, oE = { dir: "auto" }, uE = ["aria-expanded"], cE = { key: 1 }, dE = ["href"], fE = {
  key: 2,
  role: "status"
}, hE = ["disabled"], pE = ["disabled"], vE = { for: "author-display" }, bE = ["disabled"], gE = { for: "author-sort" }, mE = ["disabled"], yE = { for: "author-given" }, _E = ["disabled"], wE = { for: "author-family" }, kE = ["disabled"], SE = { for: "author-bio" }, CE = ["disabled"], TE = { for: "author-photo" }, AE = ["disabled"], EE = { key: 0 }, $E = ["disabled"], xE = ["disabled"], OE = ["disabled"], NE = {
  key: 5,
  class: "author-actions"
}, RE = ["disabled"], IE = ["aria-label"], LE = { role: "status" }, PE = { for: "target-search" }, DE = ["disabled"], FE = ["disabled"], ME = ["disabled"], UE = { for: "target-author" }, zE = ["disabled"], jE = { value: "" }, BE = ["value"], HE = ["disabled"], VE = ["disabled"], qE = ["aria-label"], GE = ["disabled"], KE = ["aria-label"], WE = { for: "author-book-search" }, YE = ["disabled"], ZE = ["disabled"], XE = { for: "author-book-sort" }, JE = ["disabled"], QE = { value: "title" }, e$ = { value: "newest" }, t$ = { value: "series" }, i$ = { class: "author-view-controls" }, a$ = ["aria-pressed"], n$ = ["aria-pressed"], r$ = { key: 0 }, l$ = { key: 1 }, s$ = { key: 0 }, o$ = ["value", "aria-label", "disabled"], u$ = ["href", "aria-label"], c$ = { class: "author-book-description" }, d$ = ["href"], f$ = {
  key: 0,
  dir: "auto"
}, h$ = { key: 1 }, p$ = { key: 2 }, v$ = {
  key: 3,
  dir: "auto"
}, b$ = {
  key: 6,
  class: "author-history"
}, g$ = ["data-operation-id"], m$ = { key: 0 }, y$ = ["disabled", "onClick"], _$ = ["aria-label"], w$ = ["disabled"], k$ = ["disabled"], S$ = {
  __name: "Authors",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q(null), a = /* @__PURE__ */ q(!1), n = /* @__PURE__ */ q(""), r = /* @__PURE__ */ q(""), s = /* @__PURE__ */ q(!1), c = /* @__PURE__ */ q([]), d = /* @__PURE__ */ q(""), y = /* @__PURE__ */ q([]), v = /* @__PURE__ */ q(""), g = /* @__PURE__ */ q(null), m = /* @__PURE__ */ q(!1), k = /* @__PURE__ */ q([]), T = /* @__PURE__ */ q(""), C = /* @__PURE__ */ q(!1), x = /* @__PURE__ */ q(1), R = /* @__PURE__ */ q(Number(new URLSearchParams(location.search).get("authorId")) || null), L = /* @__PURE__ */ q(""), P = /* @__PURE__ */ q("title"), N = /* @__PURE__ */ q("grid"), pe = /* @__PURE__ */ q(!1), Q = /* @__PURE__ */ q(!1), $ = /* @__PURE__ */ q(null), H = /* @__PURE__ */ q(!1), G = /* @__PURE__ */ Nt({ display_name: "", sort_name: "", given_name: "", family_name: "", biography: "" }), J = z(() => (i.value?.author?.display_name || "").trim().split(/\s+/u).slice(0, 2).map((Se) => Array.from(Se)[0] || "").join("").toLocaleUpperCase()), le = z(() => Jt("/apps/library/api/authors/{id}/photo", { id: R.value }) + "?v=" + encodeURIComponent(i.value?.author?.photo_key || "")), B = z(() => {
      if (P.value !== "series") return [{ name: null, books: i.value?.books || [] }];
      const Se = /* @__PURE__ */ new Map();
      for (const K of i.value?.books || []) {
        const te = K.series_name || "";
        Se.has(te) || Se.set(te, []), Se.get(te).push(K);
      }
      return Array.from(Se, ([K, te]) => ({ name: K, books: te }));
    });
    function W(Se) {
      return Jt("/apps/library/items/{id}/cover", { id: Se.id }) + "?v=" + encodeURIComponent(`${Se.cover_revision || ""}-${Se.etag || ""}`);
    }
    function I(Se) {
      $.value = Se.target.files?.[0] || null, $.value && (H.value = !1);
    }
    async function j(Se, K = null) {
      const te = await fetch(Jt("/apps/library/api/authors") + Se, {
        credentials: "same-origin",
        cache: "no-store",
        method: K === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...K === null ? {} : { ...K instanceof FormData ? {} : { "Content-Type": "application/json" }, requesttoken: t.requestToken } },
        ...K === null ? {} : { body: K instanceof FormData ? K : JSON.stringify(K) }
      });
      if (!te.ok && (await te.clone().json().catch(() => ({}))).error === "invalid_photo") throw new Error(_("library", "Choose a valid JPEG, PNG or WebP image up to 10 MiB."));
      if (!te.ok) throw new Error(te.status === 413 ? _("library", "This change is too large. Select fewer books to reassign.") : te.status === 503 ? _("library", "Author migration must finish before editing. Refresh to check progress.") : te.status === 409 ? _("library", "The author or affected books changed. Reload and review again. Your draft is preserved.") : _("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return te.json();
    }
    async function Z(Se = 1) {
      a.value = !0, n.value = "";
      try {
        i.value = await j(R.value ? `/${R.value}?page=${Se}&search=${encodeURIComponent(L.value.trim())}&sort=${P.value}` : `?page=${Se}&search=${encodeURIComponent(T.value.trim())}&unused=${C.value ? 1 : 0}`), x.value = Se, g.value = null, c.value = [], Q.value = !1, k.value = await j("/history");
      } catch (K) {
        n.value = K.message;
      } finally {
        a.value = !1;
      }
    }
    function re() {
      for (const Se of Object.keys(G)) G[Se] = i.value.author[Se] || "";
      s.value = !0, r.value = "", $.value = null, H.value = !1;
    }
    async function X() {
      a.value = !0, n.value = "";
      try {
        const Se = new FormData();
        for (const [K, te] of Object.entries(G)) Se.set(K, te);
        Se.set("revision", String(i.value.author.revision)), Se.set("remove_photo", H.value ? "1" : "0"), $.value && Se.set("photo", $.value), await j(`/${R.value}`, Se), s.value = !1, Q.value = !1, await Z(1), r.value = _("library", "Author saved. Original book credits are preserved.");
      } catch (Se) {
        n.value = Se.message;
      } finally {
        a.value = !1;
      }
    }
    function be() {
      m.value = !1, g.value = null, c.value = [];
    }
    async function Te() {
      a.value = !0, n.value = "", g.value = null;
      try {
        y.value = (await j(`?search=${encodeURIComponent(d.value.trim())}`)).authors.filter((Se) => Number(Se.id) !== R.value), v.value = "";
      } catch (Se) {
        n.value = Se.message;
      } finally {
        a.value = !1;
      }
    }
    async function Le() {
      a.value = !0, n.value = "", g.value = null;
      try {
        const Se = await j("", { name: d.value.trim() });
        y.value = [Se], v.value = String(Se.id);
      } catch (Se) {
        n.value = Se.message;
      } finally {
        a.value = !1;
      }
    }
    async function Oe() {
      a.value = !0, n.value = "", g.value = null;
      try {
        g.value = await j(`/${R.value}/preview`, { target: Number(v.value), items: c.value });
      } catch (Se) {
        n.value = Se.message;
      } finally {
        a.value = !1;
      }
    }
    async function Ue() {
      a.value = !0, n.value = "";
      try {
        await j(`/${R.value}/assign`, { target: Number(v.value), items: c.value, token: g.value.token }), r.value = _("library", "Author assignments saved. Original credits are preserved. Undo is available in Recent changes."), m.value = !1, g.value = null, await Z(x.value);
      } catch (Se) {
        n.value = Se.message;
      } finally {
        a.value = !1;
      }
    }
    async function Xe(Se) {
      a.value = !0, n.value = "";
      try {
        await j(`/history/${Se.id}/undo`, {}), r.value = _("library", "Author change undone."), await Z(x.value);
      } catch (K) {
        n.value = K.message;
      } finally {
        a.value = !1;
      }
    }
    return xt(() => Z()), (Se, K) => (h(), p("section", {
      class: "library-authors",
      "aria-busy": a.value,
      "aria-labelledby": "authors-heading"
    }, [
      R.value ? (h(), p("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(_)("library", "All authors")), 9, HA)) : E("", !0),
      l("header", VA, [
        R.value && i.value?.author ? (h(), p("div", qA, [
          i.value.author.photo_key && !Q.value ? (h(), p("img", {
            key: i.value.author.photo_key,
            src: le.value,
            alt: u(_)("library", "Portrait of {author}", { author: i.value.author.display_name }),
            onError: K[0] || (K[0] = (te) => Q.value = !0)
          }, null, 40, GA)) : (h(), p("span", KA, o(J.value), 1))
        ])) : E("", !0),
        l("h1", WA, o(i.value?.author?.display_name || u(_)("library", "Authors")), 1)
      ]),
      n.value ? (h(), p("p", YA, [
        ae(o(n.value) + " ", 1),
        l("button", {
          disabled: a.value,
          onClick: K[1] || (K[1] = (te) => Z(x.value))
        }, o(u(_)("library", "Reload")), 9, ZA)
      ])) : E("", !0),
      r.value ? (h(), p("p", XA, o(r.value), 1)) : E("", !0),
      a.value ? (h(), p("p", JA, o(u(_)("library", "Loading")), 1)) : E("", !0),
      R.value ? i.value?.author ? (h(), p(Y, { key: 5 }, [
        l("p", null, o(u(Rt)("library", "%n book", "%n books", i.value.bookCount)), 1),
        i.value.author.biography && !s.value ? (h(), p("section", sE, [
          l("h2", null, o(u(_)("library", "Biography")), 1),
          l("p", oE, o(pe.value || i.value.author.biography.length <= 320 ? i.value.author.biography : i.value.author.biography.slice(0, 280) + "…"), 1),
          i.value.author.biography.length > 320 ? (h(), p("button", {
            key: 0,
            "aria-expanded": pe.value,
            onClick: K[6] || (K[6] = (te) => pe.value = !pe.value)
          }, o(pe.value ? u(_)("library", "Show less") : u(_)("library", "Show more")), 9, uE)) : E("", !0)
        ])) : E("", !0),
        i.value.author.merged_into ? (h(), p("p", cE, [
          l("a", {
            href: `${e.catalogueUrl}?authors=1&authorId=${i.value.author.merged_into}`
          }, o(u(_)("library", "Open merged author")), 9, dE)
        ])) : E("", !0),
        !i.value.canEdit && !i.value.author.merged_into ? (h(), p("p", fE, [
          ae(o(u(_)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          l("button", {
            disabled: a.value,
            onClick: K[7] || (K[7] = (te) => Z(x.value))
          }, o(u(_)("library", "Refresh")), 9, hE)
        ])) : E("", !0),
        !s.value && !m.value ? (h(), p("button", {
          key: 3,
          disabled: a.value || !i.value.canEdit,
          onClick: re
        }, o(u(_)("library", "Edit author")), 9, pE)) : E("", !0),
        s.value ? (h(), p("form", {
          key: 4,
          class: "author-editor",
          onSubmit: Ce(X, ["prevent"])
        }, [
          l("p", null, o(u(_)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          l("label", vE, o(u(_)("library", "Preferred name")), 1),
          ye(l("input", {
            id: "author-display",
            "onUpdate:modelValue": K[8] || (K[8] = (te) => G.display_name = te),
            maxlength: "255",
            required: "",
            disabled: a.value
          }, null, 8, bE), [
            [ze, G.display_name]
          ]),
          l("label", gE, [
            ae(o(u(_)("library", "Sort name")) + " ", 1),
            de(Ke, {
              text: u(_)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-sort",
            "onUpdate:modelValue": K[9] || (K[9] = (te) => G.sort_name = te),
            maxlength: "255",
            required: "",
            disabled: a.value
          }, null, 8, mE), [
            [ze, G.sort_name]
          ]),
          l("label", yE, [
            ae(o(u(_)("library", "Given name")) + " ", 1),
            de(Ke, {
              text: u(_)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-given",
            "onUpdate:modelValue": K[10] || (K[10] = (te) => G.given_name = te),
            maxlength: "255",
            disabled: a.value
          }, null, 8, _E), [
            [ze, G.given_name]
          ]),
          l("label", wE, o(u(_)("library", "Family name")), 1),
          ye(l("input", {
            id: "author-family",
            "onUpdate:modelValue": K[11] || (K[11] = (te) => G.family_name = te),
            maxlength: "255",
            disabled: a.value
          }, null, 8, kE), [
            [ze, G.family_name]
          ]),
          l("label", SE, [
            ae(o(u(_)("library", "Biography")) + " ", 1),
            de(Ke, {
              text: u(_)("library", "Optional plain text, up to 10,000 characters. This profile is private to your account.")
            }, null, 8, ["text"])
          ]),
          ye(l("textarea", {
            id: "author-bio",
            "onUpdate:modelValue": K[12] || (K[12] = (te) => G.biography = te),
            maxlength: "10000",
            rows: "5",
            disabled: a.value
          }, null, 8, CE), [
            [ze, G.biography]
          ]),
          l("label", TE, [
            ae(o(u(_)("library", "Author photo")) + " ", 1),
            de(Ke, {
              text: u(_)("library", "JPEG, PNG or WebP, up to 10 MiB. Saved as a small square portrait; the original upload is discarded.")
            }, null, 8, ["text"])
          ]),
          l("input", {
            id: "author-photo",
            type: "file",
            accept: "image/jpeg,image/png,image/webp",
            disabled: a.value,
            onChange: I
          }, null, 40, AE),
          i.value.author.photo_key ? (h(), p("label", EE, [
            ye(l("input", {
              "onUpdate:modelValue": K[13] || (K[13] = (te) => H.value = te),
              type: "checkbox",
              disabled: a.value || !!$.value
            }, null, 8, $E), [
              [sa, H.value]
            ]),
            ae(" " + o(u(_)("library", "Remove photo")), 1)
          ])) : E("", !0),
          l("div", null, [
            l("button", {
              class: "primary",
              disabled: a.value,
              type: "submit"
            }, o(u(_)("library", "Save author")), 9, xE),
            K[29] || (K[29] = ae()),
            l("button", {
              disabled: a.value,
              type: "button",
              onClick: K[14] || (K[14] = (te) => s.value = !1)
            }, o(u(_)("library", "Cancel")), 9, OE)
          ])
        ], 32)) : E("", !0),
        !s.value && !m.value ? (h(), p("details", NE, [
          l("summary", null, o(u(_)("library", "More actions")), 1),
          l("button", {
            disabled: a.value || !i.value.canEdit,
            onClick: K[15] || (K[15] = (te) => m.value = !0)
          }, o(u(_)("library", "Merge or reassign")), 9, RE)
        ])) : E("", !0),
        m.value ? (h(), p("section", {
          key: 6,
          class: "author-assignment",
          "aria-label": u(_)("library", "Merge or reassign")
        }, [
          l("label", null, [
            ae(o(u(_)("library", "Books to change")) + " ", 1),
            de(Ke, {
              text: u(_)("library", "Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.")
            }, null, 8, ["text"])
          ]),
          l("p", LE, o(c.value.length ? u(Rt)("library", "%n selected book", "%n selected books", c.value.length) : u(_)("library", "Merge all books into the chosen author")), 1),
          l("form", {
            class: "author-search",
            onSubmit: Ce(Te, ["prevent"])
          }, [
            l("label", PE, o(u(_)("library", "Find destination author")), 1),
            ye(l("input", {
              id: "target-search",
              "onUpdate:modelValue": K[16] || (K[16] = (te) => d.value = te),
              type: "search",
              maxlength: "255",
              disabled: a.value
            }, null, 8, DE), [
              [ze, d.value]
            ]),
            l("button", { disabled: a.value }, o(u(_)("library", "Search")), 9, FE)
          ], 32),
          l("div", null, [
            l("button", {
              disabled: a.value || !d.value.trim(),
              onClick: Le
            }, o(u(_)("library", "Create separate author")), 9, ME),
            K[30] || (K[30] = ae()),
            de(Ke, {
              text: u(_)("library", "Creates a new person using the entered name, even if someone with that name already exists.")
            }, null, 8, ["text"])
          ]),
          l("label", UE, o(u(_)("library", "Destination author")), 1),
          ye(l("select", {
            id: "target-author",
            "onUpdate:modelValue": K[17] || (K[17] = (te) => v.value = te),
            disabled: a.value,
            onChange: K[18] || (K[18] = (te) => g.value = null)
          }, [
            l("option", jE, o(u(_)("library", "Choose an author")), 1),
            (h(!0), p(Y, null, he(y.value, (te) => (h(), p("option", {
              key: te.id,
              value: te.id
            }, o(te.display_name) + " — " + o(te.sort_name) + " (#" + o(te.id) + ")", 9, BE))), 128))
          ], 40, zE), [
            [nt, v.value]
          ]),
          l("div", null, [
            l("button", {
              disabled: a.value || !v.value,
              onClick: Oe
            }, o(u(_)("library", "Review change")), 9, HE),
            K[31] || (K[31] = ae()),
            l("button", {
              disabled: a.value,
              onClick: be
            }, o(u(_)("library", "Cancel")), 9, VE)
          ]),
          g.value ? (h(), p("section", {
            key: 0,
            class: "author-review",
            "aria-label": u(_)("library", "Review change")
          }, [
            l("h2", null, o(g.value.source) + " → " + o(g.value.target), 1),
            l("p", null, o(g.value.merge ? u(_)("library", "Merge these authors. Future imports of the old name will use the destination author.") : u(_)("library", "Reassign these books. Both author records remain available.")), 1),
            l("p", null, o(u(Rt)("library", "%n book", "%n books", g.value.books.length)), 1),
            l("ul", null, [
              (h(!0), p(Y, null, he(g.value.books, (te) => (h(), p("li", {
                key: te.id
              }, o(te.title) + " — " + o(u(_)("library", "Original credit: {credit}", { credit: te.credit || "—" })), 1))), 128))
            ]),
            l("button", {
              class: "primary",
              disabled: a.value,
              onClick: Ue
            }, o(u(_)("library", "Confirm author change")), 9, GE)
          ], 8, qE)) : E("", !0)
        ], 8, IE)) : E("", !0),
        l("section", {
          class: "author-catalogue",
          "aria-label": u(_)("library", "Books in your library")
        }, [
          l("h2", null, o(u(_)("library", "Books in your library")), 1),
          l("form", {
            class: "author-book-controls",
            onSubmit: K[24] || (K[24] = Ce((te) => Z(1), ["prevent"]))
          }, [
            l("label", WE, o(u(_)("library", "Search titles")), 1),
            ye(l("input", {
              id: "author-book-search",
              "onUpdate:modelValue": K[19] || (K[19] = (te) => L.value = te),
              type: "search",
              maxlength: "255",
              disabled: a.value || s.value
            }, null, 8, YE), [
              [ze, L.value]
            ]),
            l("button", {
              disabled: a.value || s.value
            }, o(u(_)("library", "Search")), 9, ZE),
            l("label", XE, o(u(_)("library", "Sort")), 1),
            ye(l("select", {
              id: "author-book-sort",
              "onUpdate:modelValue": K[20] || (K[20] = (te) => P.value = te),
              disabled: a.value || s.value,
              onChange: K[21] || (K[21] = (te) => Z(1))
            }, [
              l("option", QE, o(u(_)("library", "Title")), 1),
              l("option", e$, o(u(_)("library", "Publication date, newest first")), 1),
              l("option", t$, o(u(_)("library", "Series, then title")), 1)
            ], 40, JE), [
              [nt, P.value]
            ]),
            l("div", i$, [
              l("button", {
                type: "button",
                "aria-pressed": N.value === "grid",
                onClick: K[22] || (K[22] = (te) => N.value = "grid")
              }, o(u(_)("library", "Covers")), 9, a$),
              K[32] || (K[32] = ae()),
              l("button", {
                type: "button",
                "aria-pressed": N.value === "list",
                onClick: K[23] || (K[23] = (te) => N.value = "list")
              }, o(u(_)("library", "List")), 9, n$)
            ])
          ], 32),
          L.value ? (h(), p("p", r$, o(u(Rt)("library", "%n book", "%n books", i.value.matchingCount)), 1)) : E("", !0),
          i.value.books.length ? E("", !0) : (h(), p("p", l$, o(u(_)("library", "No books match this view.")), 1)),
          (h(!0), p(Y, null, he(B.value, (te) => (h(), p("section", {
            key: te.name ?? "all",
            class: "author-book-group"
          }, [
            te.name !== null ? (h(), p("h3", s$, o(te.name || u(_)("library", "No series recorded")), 1)) : E("", !0),
            l("ul", {
              class: Ee(["author-books", { "author-books-grid": N.value === "grid" }])
            }, [
              (h(!0), p(Y, null, he(te.books, (fe) => (h(), p("li", {
                key: fe.id
              }, [
                m.value ? ye((h(), p("input", {
                  key: 0,
                  "onUpdate:modelValue": K[25] || (K[25] = (De) => c.value = De),
                  type: "checkbox",
                  value: Number(fe.id),
                  "aria-label": u(_)("library", "Select {title}", { title: fe.title }),
                  disabled: a.value,
                  onChange: K[26] || (K[26] = (De) => g.value = null)
                }, null, 40, o$)), [
                  [sa, c.value]
                ]) : E("", !0),
                l("a", {
                  class: "author-book-cover",
                  href: u(Jt)("/apps/library/items/{id}", { id: fe.id }),
                  "aria-label": fe.title
                }, [
                  de(hg, {
                    src: W(fe)
                  }, null, 8, ["src"])
                ], 8, u$),
                l("div", c$, [
                  l("a", {
                    class: "author-book-title",
                    href: u(Jt)("/apps/library/items/{id}", { id: fe.id }),
                    dir: "auto"
                  }, o(fe.title), 9, d$),
                  fe.series_name ? (h(), p("span", f$, [
                    ae(o(fe.series_name), 1),
                    fe.series_number ? (h(), p(Y, { key: 0 }, [
                      ae(" · " + o(fe.series_number), 1)
                    ], 64)) : E("", !0)
                  ])) : E("", !0),
                  fe.publication_date ? (h(), p("span", h$, o(fe.publication_date), 1)) : E("", !0),
                  l("span", null, o(fe.extension?.toUpperCase()), 1),
                  fe.scan_status === "missing" ? (h(), p("span", p$, o(u(_)("library", "File missing")), 1)) : E("", !0),
                  m.value ? (h(), p("span", v$, o(u(_)("library", "Original credit: {credit}", { credit: fe.creators || "—" })), 1)) : E("", !0)
                ])
              ]))), 128))
            ], 2)
          ]))), 128))
        ], 8, KE)
      ], 64)) : E("", !0) : (h(), p(Y, { key: 4 }, [
        l("form", {
          class: "author-search",
          onSubmit: K[4] || (K[4] = Ce((te) => Z(1), ["prevent"]))
        }, [
          l("label", QA, [
            ae(o(u(_)("library", "Search authors")) + " ", 1),
            de(Ke, {
              text: u(_)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          ye(l("input", {
            id: "author-search",
            "onUpdate:modelValue": K[2] || (K[2] = (te) => T.value = te),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [ze, T.value]
          ]),
          l("label", null, [
            ye(l("input", {
              "onUpdate:modelValue": K[3] || (K[3] = (te) => C.value = te),
              type: "checkbox"
            }, null, 512), [
              [sa, C.value]
            ]),
            ae(" " + o(u(_)("library", "Unused authors")), 1)
          ]),
          l("button", {
            disabled: a.value,
            type: "submit"
          }, o(u(_)("library", "Search")), 9, eE)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed || i.value.migration.conflict) ? (h(), p("p", tE, [
          ae(o(u(_)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", i.value.migration)) + " ", 1),
          l("button", {
            disabled: a.value,
            onClick: K[5] || (K[5] = (te) => Z(x.value))
          }, o(u(_)("library", "Refresh")), 9, iE)
        ])) : E("", !0),
        i.value ? (h(), p("ul", aE, [
          (h(!0), p(Y, null, he(i.value.authors, (te) => (h(), p("li", {
            key: te.id
          }, [
            l("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${te.id}`,
              dir: "auto"
            }, o(te.display_name), 9, nE),
            l("span", rE, o(te.sort_name), 1),
            l("span", null, o(u(Rt)("library", "%n book", "%n books", Number(te.book_count))), 1)
          ]))), 128))
        ])) : E("", !0),
        i.value && !i.value.authors.length ? (h(), p("p", lE, o(u(_)("library", "No authors found.")), 1)) : E("", !0)
      ], 64)),
      k.value.length ? (h(), p("details", b$, [
        l("summary", null, o(u(_)("library", "Recent changes")), 1),
        l("ul", null, [
          (h(!0), p(Y, null, he(k.value, (te) => (h(), p("li", {
            key: te.id,
            "data-operation-id": te.id
          }, [
            l("span", null, o(te.source) + " → " + o(te.target) + " · " + o(u(Rt)("library", "%n book", "%n books", Number(te.books))), 1),
            Number(te.undone) ? (h(), p("span", m$, o(u(_)("library", "Undone")), 1)) : (h(), p("button", {
              key: 1,
              disabled: a.value,
              onClick: (fe) => Xe(te)
            }, o(u(_)("library", "Undo")), 9, y$))
          ], 8, g$))), 128))
        ])
      ])) : E("", !0),
      i.value ? (h(), p("nav", {
        key: 7,
        class: "author-pagination",
        "aria-label": u(_)("library", "Author pages")
      }, [
        l("button", {
          disabled: a.value || s.value || x.value === 1,
          onClick: K[27] || (K[27] = (te) => Z(x.value - 1))
        }, o(u(_)("library", "Previous")), 9, w$),
        l("span", null, o(u(_)("library", "Page {page}", { page: x.value })), 1),
        l("button", {
          disabled: a.value || s.value || !i.value.hasNext,
          onClick: K[28] || (K[28] = (te) => Z(x.value + 1))
        }, o(u(_)("library", "Next")), 9, k$)
      ], 8, _$)) : E("", !0)
    ], 8, BA));
  }
}, C$ = /* @__PURE__ */ jA(S$, [["__scopeId", "data-v-17c94573"]]);
function pg(e, t, i) {
  const a = /* @__PURE__ */ q({}), n = /* @__PURE__ */ q("idle");
  let r, s, c = 0;
  return Ge([e, t], () => {
    clearTimeout(r), s?.abort();
    const d = ++c;
    a.value = {}, n.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const y = await fetch(Jt("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!y.ok) throw new Error("lookup_failed");
        const v = await y.json();
        if (d !== c) return;
        a.value = v.items || {}, n.value = v.enabled ? v.status : "disabled";
      } catch (y) {
        d === c && y.name !== "AbortError" && (n.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), Ti(() => {
    c++, clearTimeout(r), s?.abort();
  }), { results: a, status: n };
}
const T$ = ["aria-label", "aria-busy"], A$ = {
  key: 0,
  role: "status"
}, E$ = {
  key: 1,
  role: "alert"
}, $$ = {
  key: 2,
  role: "status"
}, x$ = { key: 3 }, O$ = { key: 4 }, N$ = {
  key: 5,
  role: "status"
}, R$ = {
  key: 6,
  class: "library-suggestion-list"
}, I$ = ["href"], L$ = ["disabled", "onClick"], P$ = {
  key: 0,
  role: "status"
}, D$ = { class: "library-suggestion-list" }, F$ = { class: "library-suggestion-comparison" }, M$ = ["src"], U$ = { class: "library-duplicate-actions" }, z$ = ["href"], j$ = ["href"], B$ = ["disabled", "onClick"], H$ = { class: "library-duplicate-actions" }, V$ = ["disabled"], q$ = ["disabled"], G$ = ["disabled"], vg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q(0), a = z(() => (i.value, t.itemId ? [t.itemId] : [])), n = z(() => t.enabled), r = z(() => t.requestToken), { results: s, status: c } = pg(a, n, r), d = z(() => s.value[t.itemId]), y = /* @__PURE__ */ q(null), v = /* @__PURE__ */ q(!1), g = /* @__PURE__ */ q(""), m = /* @__PURE__ */ q(!1), k = { formats: _("library", "Alternative formats"), languages: _("library", "Different languages"), years: _("library", "Different publication years"), publishers: _("library", "Different publishers"), identifiers: _("library", "Different ISBNs") };
    let T = 0;
    async function C(L, P) {
      const N = await fetch(Jt("/apps/library/api/duplicate-suggestions" + L), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!N.ok) throw new Error(N.status === 409 ? _("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : _("library", "Could not complete the duplicate review. Please try again."));
      return N.json();
    }
    async function x(L) {
      const P = ++T;
      v.value = !0, g.value = "", m.value = !1;
      try {
        const N = await C(`/compare/${t.itemId}/${L}`);
        P === T && (y.value = N);
      } catch (N) {
        P === T && (g.value = N.message);
      } finally {
        P === T && (v.value = !1);
      }
    }
    async function R(L, P = 0) {
      v.value = !0, g.value = "";
      try {
        await C(`/compare/${y.value.books[0].id}/${y.value.books[1].id}`, { signature: y.value.signature, decision: L, preferredId: P }), m.value = !0, i.value++, y.value = null;
      } catch (N) {
        g.value = N.message;
      } finally {
        v.value = !1;
      }
    }
    return Ge(() => [t.itemId, t.compareId], () => {
      T++, y.value = null, t.full && t.compareId && x(t.compareId);
    }, { immediate: !0 }), (L, P) => (h(), p("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(_)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("h3", null, o(u(_)("library", "Possible duplicates")), 1),
      u(c) === "pending" ? (h(), p("p", A$, o(u(_)("library", "Checking possible duplicates")), 1)) : E("", !0),
      u(c) === "error" || g.value ? (h(), p("p", E$, o(g.value || u(_)("library", "Could not complete the duplicate review. Please try again.")), 1)) : E("", !0),
      u(c) === "building" || d.value?.status === "partial" ? (h(), p("p", $$, o(u(_)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
      d.value?.status === "unavailable" ? (h(), p("p", x$, o(u(_)("library", "These books are no longer available. Start a new scan.")), 1)) : E("", !0),
      d.value?.status === "checked" && !d.value.count ? (h(), p("p", O$, o(u(_)("library", "No unreviewed suggestions found.")), 1)) : E("", !0),
      m.value ? (h(), p("p", N$, o(u(_)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : E("", !0),
      d.value?.count && !y.value ? (h(), p("ul", R$, [
        (h(!0), p(Y, null, he(d.value.matches, (N) => (h(), p("li", {
          key: N.id
        }, [
          e.full ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (pe) => x(N.id)
          }, [
            l("bdi", null, o(N.title), 1),
            ae(" · " + o(N.format.toUpperCase()), 1)
          ], 8, L$)) : (h(), p("a", {
            key: 0,
            href: N.url
          }, [
            l("bdi", null, o(N.title), 1),
            ae(" · " + o(N.format.toUpperCase()), 1)
          ], 8, I$))
        ]))), 128))
      ])) : E("", !0),
      y.value ? (h(), p(Y, { key: 7 }, [
        y.value.reasons.length ? E("", !0) : (h(), p("p", P$, o(u(_)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", D$, [
          (h(!0), p(Y, null, he(y.value.flags, (N) => (h(), p("li", { key: N }, o(k[N]), 1))), 128))
        ]),
        l("div", F$, [
          (h(!0), p(Y, null, he(y.value.books, (N) => (h(), p("article", {
            key: N.id
          }, [
            l("img", {
              src: N.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, M$),
            l("h3", null, [
              l("bdi", null, o(N.title), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(N.authors.join("; ")), 1)
            ]),
            l("p", null, o(N.format.toUpperCase()) + " · " + o(N.language || "—") + " · " + o(N.publicationDate || "—"), 1),
            l("p", null, [
              l("bdi", null, o(N.publisher), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(N.path), 1)
            ]),
            l("div", U$, [
              l("a", {
                class: "button secondary",
                href: N.detailsUrl
              }, o(u(_)("library", "Details")), 9, z$),
              l("a", {
                class: "button secondary",
                href: N.openUrl
              }, o(u(_)("library", "Open")), 9, j$),
              l("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (pe) => R("preferred", N.id)
              }, o(u(_)("library", "Prefer this copy")), 9, B$)
            ])
          ]))), 128))
        ]),
        l("div", H$, [
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[0] || (P[0] = (N) => R("keep"))
          }, o(u(_)("library", "Keep both")), 9, V$),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[1] || (P[1] = (N) => R("dismissed"))
          }, o(u(_)("library", "Dismiss match")), 9, q$),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[2] || (P[2] = (N) => R("unreviewed"))
          }, o(u(_)("library", "Reset review decision")), 9, G$)
        ])
      ], 64)) : E("", !0)
    ], 8, T$));
  }
}, K$ = ["aria-busy"], W$ = ["checked", "disabled"], Y$ = {
  key: 0,
  role: "alert"
}, Z$ = {
  key: 1,
  role: "status"
}, X$ = {
  key: 2,
  role: "alert"
}, J$ = {
  key: 3,
  role: "status"
}, Q$ = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q({ enabled: !1, status: "disabled" }), a = /* @__PURE__ */ q(!1), n = /* @__PURE__ */ q("");
    let r = !0, s;
    async function c() {
      try {
        const y = await fetch(Jt("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!y.ok) throw new Error();
        const v = await y.json();
        r && (i.value = v, v.status === "building" && (s = setTimeout(c, 5e3)));
      } catch {
        r && (n.value = _("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function d(y) {
      a.value = !0, n.value = "", clearTimeout(s);
      try {
        const v = await fetch(Jt("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: y.target.checked }) });
        if (!v.ok) throw new Error();
        i.value = await v.json(), i.value.status === "building" && (s = setTimeout(c, 2e3));
      } catch {
        n.value = _("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        a.value = !1;
      }
    }
    return xt(c), Ti(() => {
      r = !1, clearTimeout(s);
    }), (y, v) => (h(), p("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": a.value ? "true" : "false"
    }, [
      l("label", null, [
        l("input", {
          type: "checkbox",
          checked: i.value.enabled,
          disabled: a.value,
          onChange: d
        }, null, 40, W$),
        de(Ke, {
          text: u(_)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      n.value ? (h(), p("p", Y$, o(n.value), 1)) : E("", !0),
      i.value.status === "building" ? (h(), p("p", Z$, o(u(_)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : E("", !0),
      i.value.status === "failed" ? (h(), p("p", X$, o(u(_)("library", "Duplicate scan failed")), 1)) : E("", !0),
      i.value.status === "ready" ? (h(), p("p", J$, o(u(_)("library", "Automatic duplicate suggestions are ready.")), 1)) : E("", !0)
    ], 8, K$));
  }
}, ex = ["aria-label", "aria-busy"], tx = ["href"], ix = {
  key: 1,
  role: "alert"
}, ax = {
  key: 2,
  role: "status"
}, nx = ["disabled"], rx = { value: "0" }, lx = ["value"], sx = { class: "library-duplicate-checkbox" }, ox = ["disabled"], ux = ["disabled"], cx = ["value", "disabled"], dx = { value: "" }, fx = ["value"], hx = ["aria-label"], px = { role: "status" }, vx = ["value", "max", "aria-label"], bx = {
  key: 1,
  role: "status"
}, gx = {
  key: 2,
  role: "alert"
}, mx = {
  key: 3,
  role: "alert"
}, yx = { class: "library-duplicate-actions" }, _x = ["disabled"], wx = ["disabled"], kx = ["disabled"], Sx = ["disabled"], Cx = { value: "all" }, Tx = ["value"], Ax = {
  key: 0,
  role: "status"
}, Ex = ["data-pair-id"], $x = {
  key: 0,
  role: "status"
}, xx = { class: "library-duplicate-decision" }, Ox = ["aria-label"], Nx = ["aria-label"], Rx = {
  key: 1,
  role: "alert"
}, Ix = { class: "library-duplicate-books" }, Lx = { class: "library-duplicate-book-heading" }, Px = ["src"], Dx = { dir: "auto" }, Fx = { dir: "auto" }, Mx = { key: 0 }, Ux = { dir: "auto" }, zx = { dir: "ltr" }, jx = { dir: "auto" }, Bx = { class: "library-duplicate-actions" }, Hx = ["href"], Vx = ["href"], qx = ["disabled", "onClick"], Gx = { class: "library-duplicate-actions" }, Kx = ["disabled", "onClick"], Wx = ["disabled", "onClick"], Yx = ["disabled", "onClick"], Zx = ["aria-label"], Xx = ["disabled"], Jx = ["disabled"], Qx = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, a = e, n = /* @__PURE__ */ q([]), r = /* @__PURE__ */ q([]), s = /* @__PURE__ */ q("0"), c = /* @__PURE__ */ q(!1), d = /* @__PURE__ */ q(null), y = /* @__PURE__ */ q(!1), v = /* @__PURE__ */ q(""), g = /* @__PURE__ */ q(""), m = /* @__PURE__ */ q("unreviewed");
    let k, T = !0, C = 0;
    const x = z(() => d.value?.status === "running"), R = z(() => ({ running: _("library", "Finding possible duplicates"), completed: _("library", "Duplicate scan complete"), cancelled: _("library", "Duplicate scan cancelled"), failed: _("library", "Duplicate scan failed"), limited: _("library", "Duplicate scan reached its limit") })), L = z(() => ({ unreviewed: _("library", "To review"), preferred: _("library", "Preferred copy selected"), keep: _("library", "Keep both"), dismissed: _("library", "Dismissed") })), P = z(() => ({ identical: _("library", "Identical file contents"), isbn: _("library", "Same ISBN"), title_author: _("library", "Same normalized title and authors"), similar_title_author: _("library", "Similar title and matching authors") })), N = z(() => ({ formats: _("library", "Alternative formats"), languages: _("library", "Different languages"), years: _("library", "Different publication years"), publishers: _("library", "Different publishers"), identifiers: _("library", "Different ISBNs") })), pe = (Z) => Z < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: Z < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(Z < 1e3 ? Z : Z / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(Z / 1048576) + " " + _("library", "MiB");
    async function Q(Z = "", re) {
      const X = await fetch(Jt(`/apps/library/api/duplicates${Z}`), { credentials: "same-origin", cache: "no-store", method: re === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: a.requestToken }, ...re === void 0 ? {} : { body: JSON.stringify(re) } }), be = await X.json().catch(() => ({}));
      if (!X.ok)
        throw X.status === 409 ? new Error(_("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : be.error === "decision_limit" ? new Error(_("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : be.error === "history_limit" ? new Error(_("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : be.error === "scope_limit" ? new Error(_("library", "This scope is too large. Choose a smaller library root.")) : X.status === 404 ? new Error(_("library", "This scan or these books are no longer available.")) : new Error(_("library", "Could not complete the duplicate review. Please try again."));
      return be;
    }
    async function $() {
      const Z = await Q();
      T && (n.value = Z.roots, r.value = Z.scans);
    }
    async function H(Z) {
      y.value = !0, v.value = "";
      try {
        await Z();
      } catch (re) {
        T && (v.value = re.message);
      } finally {
        T && (y.value = !1);
      }
    }
    function G() {
      if (clearTimeout(k), !T || !x.value) return;
      const Z = C, re = d.value.id;
      k = setTimeout(async () => {
        try {
          if (await Q(`/${re}/advance`, {}), !T || Z !== C) return;
          const X = await Q(`/${re}?page=${d.value.page}&filter=${m.value}`);
          if (!T || Z !== C) return;
          d.value = X, x.value || await $(), G();
        } catch (X) {
          T && Z === C && (v.value = X.message);
        }
      }, 1500);
    }
    async function J() {
      await H(async () => {
        d.value = await Q("", { rootId: Number(s.value), contents: c.value }), C++, m.value = "unreviewed", g.value = "", await $(), G();
      });
    }
    async function le(Z, re = 1) {
      const X = ++C;
      clearTimeout(k), await H(async () => {
        const be = await Q(`/${Z}?page=${re}&filter=${m.value}`);
        T && X === C && (d.value = be, s.value = String(be.rootId), c.value = !!be.contents, G());
      });
    }
    function B(Z) {
      m.value = "unreviewed", g.value = "", Z.target.value && le(Z.target.value);
    }
    async function W() {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${d.value.id}/cancel`, {}), d.value = await Q(`/${d.value.id}?filter=${m.value}`), await $();
      });
    }
    async function I() {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${d.value.id}/discard`, {}), d.value = null, await $();
      });
    }
    async function j(Z, re, X = 0) {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${d.value.id}/pairs/${Z.id}`, { signature: Z.signature, decision: re, preferredId: X }), g.value = _("library", "Review saved. Your files and catalogue metadata were not changed."), d.value = await Q(`/${d.value.id}?page=${d.value.page}&filter=${m.value}`), G();
      });
    }
    return xt(() => H($)), Ti(() => {
      T = !1, C++, clearTimeout(k);
    }), (Z, re) => (h(), p("section", {
      class: "library-duplicates",
      "aria-label": u(_)("library", "Possible duplicates"),
      "aria-busy": y.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(_)("library", "Review")), 9, tx),
      l("h1", null, [
        de(Ke, {
          text: u(_)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      de(Q$, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (h(), Fe(vg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : E("", !0),
      v.value ? (h(), p("p", ix, o(v.value), 1)) : E("", !0),
      g.value ? (h(), p("p", ax, o(g.value), 1)) : E("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Ce(J, ["prevent"])
      }, [
        l("label", null, [
          ae(o(u(_)("library", "Library root")), 1),
          ye(l("select", {
            "onUpdate:modelValue": re[0] || (re[0] = (X) => s.value = X),
            disabled: y.value || x.value
          }, [
            l("option", rx, o(u(_)("library", "All library roots")), 1),
            (h(!0), p(Y, null, he(n.value, (X) => (h(), p("option", {
              key: X.id,
              value: String(X.id)
            }, o(X.label), 9, lx))), 128))
          ], 8, nx), [
            [nt, s.value]
          ])
        ]),
        l("label", sx, [
          ye(l("input", {
            "onUpdate:modelValue": re[1] || (re[1] = (X) => c.value = X),
            type: "checkbox",
            disabled: y.value || x.value
          }, null, 8, ox), [
            [sa, c.value]
          ]),
          de(Ke, {
            text: u(_)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: ke(() => [
              ae(o(u(_)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: y.value || x.value || !n.value.length
        }, o(u(_)("library", "Find possible duplicates")), 9, ux)
      ], 32),
      l("label", null, [
        de(Ke, {
          text: u(_)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: d.value?.id || "",
          disabled: y.value,
          onChange: B
        }, [
          l("option", dx, o(u(_)("library", "Choose a scan")), 1),
          (h(!0), p(Y, null, he(r.value, (X) => (h(), p("option", {
            key: X.id,
            value: X.id
          }, o(new Date(Number(X.created_at) * 1e3).toLocaleString()) + " · " + o(R.value[X.status]), 9, fx))), 128))
        ], 40, cx)
      ]),
      d.value ? (h(), p(Y, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(_)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(d.value.rootId ? d.value.label : u(_)("library", "All library roots")), 1),
          l("p", px, [
            ae(o(R.value[d.value.status]), 1),
            x.value ? (h(), p(Y, { key: 0 }, [
              ae(" · " + o(d.value.phase === "index" ? u(_)("library", "Indexing metadata") : u(_)("library", "Comparing candidates")), 1)
            ], 64)) : E("", !0),
            ae(" · " + o(d.value.processed) + "/" + o(d.value.total), 1)
          ]),
          x.value ? (h(), p("progress", {
            key: 0,
            value: d.value.phase === "index" ? d.value.processed : void 0,
            max: Math.max(d.value.total, 1),
            "aria-label": u(_)("library", "Duplicate scan progress")
          }, null, 8, vx)) : E("", !0),
          l("p", null, o(u(_)("library", "Possible matches")) + ": " + o(d.value.matches) + " · " + o(u(_)("library", "Comparisons checked")) + ": " + o(d.value.examined), 1),
          d.value.hashSkipped || d.value.unavailable ? (h(), p("p", bx, o(u(_)("library", "Content checks skipped")) + ": " + o(d.value.hashSkipped) + " · " + o(u(_)("library", "Unavailable books")) + ": " + o(d.value.unavailable), 1)) : E("", !0),
          d.value.status === "limited" ? (h(), p("p", gx, o(u(_)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : E("", !0),
          d.value.status === "failed" ? (h(), p("p", mx, o(u(_)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : E("", !0),
          l("div", yx, [
            x.value ? (h(), p("button", {
              key: 0,
              class: "button secondary",
              disabled: y.value,
              onClick: W
            }, o(u(_)("library", "Cancel scan")), 9, _x)) : E("", !0),
            l("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: re[2] || (re[2] = (X) => le(d.value.id, d.value.page))
            }, o(u(_)("library", "Refresh results")), 9, wx),
            l("button", {
              class: "button secondary",
              disabled: y.value || x.value,
              onClick: I
            }, o(u(_)("library", "Discard scan")), 9, kx)
          ])
        ], 8, hx),
        l("label", null, [
          ae(o(u(_)("library", "Show comparisons")), 1),
          ye(l("select", {
            "onUpdate:modelValue": re[3] || (re[3] = (X) => m.value = X),
            disabled: y.value,
            onChange: re[4] || (re[4] = (X) => le(d.value.id))
          }, [
            l("option", Cx, o(u(_)("library", "All")) + " (" + o(d.value.matches) + ")", 1),
            (h(!0), p(Y, null, he(L.value, (X, be) => (h(), p("option", {
              key: be,
              value: be
            }, o(X) + " (" + o(d.value.counts[be] || 0) + ")", 9, Tx))), 128))
          ], 40, Sx), [
            [nt, m.value]
          ])
        ]),
        !d.value.pairs.length && !x.value ? (h(), p("p", Ax, o(u(_)("library", "No comparisons in this view.")), 1)) : E("", !0),
        (h(!0), p(Y, null, he(d.value.pairs, (X) => (h(), p("article", {
          key: X.id,
          class: "library-duplicate-pair",
          "data-pair-id": X.id
        }, [
          X.unavailable ? (h(), p("p", $x, o(u(_)("library", "These books are no longer available. Start a new scan.")), 1)) : (h(), p(Y, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(X.reasons.includes("identical") ? u(_)("library", "Identical file contents") : u(_)("library", "Possible duplicates")), 1),
              l("span", xx, o(L.value[X.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(_)("library", "Why these books match")
            }, [
              (h(!0), p(Y, null, he(X.reasons, (be) => (h(), p("li", { key: be }, o(P.value[be]), 1))), 128))
            ], 8, Ox),
            X.flags.length ? (h(), p("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(_)("library", "Differences to review")
            }, [
              (h(!0), p(Y, null, he(X.flags, (be) => (h(), p("li", { key: be }, o(N.value[be]), 1))), 128))
            ], 8, Nx)) : E("", !0),
            X.stale ? (h(), p("p", Rx, o(u(_)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : E("", !0),
            l("div", Ix, [
              (h(!0), p(Y, null, he(X.books, (be) => (h(), p("section", {
                key: be.id,
                class: Ee(["library-duplicate-book", { "library-duplicate-preferred": X.preferredId === be.id }])
              }, [
                l("div", Lx, [
                  l("img", {
                    src: be.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, Px),
                  l("div", null, [
                    l("h3", Dx, o(be.title), 1),
                    l("p", Fx, o(be.authors.join("; ") || "—"), 1),
                    X.preferredId === be.id ? (h(), p("strong", Mx, o(u(_)("library", "Preferred copy")), 1)) : E("", !0)
                  ])
                ]),
                l("dl", null, [
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "Format")), 1),
                    l("dd", null, o(be.format.toUpperCase()) + " · " + o(pe(be.size)), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "Language")), 1),
                    l("dd", null, o(be.language || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "Publication date")), 1),
                    l("dd", null, o(be.publicationDate || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "Publisher")), 1),
                    l("dd", Ux, o(be.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "ISBN")), 1),
                    l("dd", zx, o(be.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(_)("library", "Location")), 1),
                    l("dd", jx, o(be.path), 1)
                  ])
                ]),
                l("div", Bx, [
                  l("a", {
                    class: "button secondary",
                    href: be.openUrl
                  }, o(u(_)("library", "Open")), 9, Hx),
                  l("a", {
                    class: "button secondary",
                    href: be.detailsUrl
                  }, o(u(_)("library", "Details")), 9, Vx),
                  l("button", {
                    class: "button primary",
                    disabled: y.value || x.value || X.stale,
                    onClick: (Te) => j(X, "preferred", be.id)
                  }, o(u(_)("library", "Prefer this copy")), 9, qx)
                ])
              ], 2))), 128))
            ]),
            l("div", Gx, [
              l("button", {
                class: "button secondary",
                disabled: y.value || x.value || X.stale,
                onClick: (be) => j(X, "keep")
              }, o(u(_)("library", "Keep both")), 9, Kx),
              l("button", {
                class: "button secondary",
                disabled: y.value || x.value || X.stale,
                onClick: (be) => j(X, "dismissed")
              }, o(u(_)("library", "Dismiss match")), 9, Wx),
              X.decision !== "unreviewed" ? (h(), p("button", {
                key: 0,
                class: "button secondary",
                disabled: y.value || x.value || X.stale,
                onClick: (be) => j(X, "unreviewed")
              }, o(u(_)("library", "Reset review decision")), 9, Yx)) : E("", !0)
            ])
          ], 64))
        ], 8, Ex))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(_)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: y.value || d.value.page === 1,
            onClick: re[5] || (re[5] = (X) => le(d.value.id, d.value.page - 1))
          }, o(u(_)("library", "Previous page")), 9, Xx),
          l("span", null, o(d.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: y.value || !d.value.hasNext,
            onClick: re[6] || (re[6] = (X) => le(d.value.id, d.value.page + 1))
          }, o(u(_)("library", "Next page")), 9, Jx)
        ], 8, Zx)
      ], 64)) : E("", !0)
    ], 8, ex));
  }
}, ef = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], e3 = /* @__PURE__ */ new Set([...ef, "ignore", "folder", "folders", "extension"]);
function bg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const a = (g) => g === "%folders%/" ? "folders" : g.slice(1, -1), n = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (n.some((g) => g.includes("%") && !e3.has(a(g))) || n.filter((g) => g.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let r = 0, s = !1;
  const c = [];
  function d(g, m, k) {
    if (++r > 5e3) {
      s = !0;
      return;
    }
    if (c.length > 1) return;
    if (g === n.length) {
      m === e.length && c.push(k);
      return;
    }
    const T = n[g];
    if (!T.startsWith("%")) {
      e.startsWith(T, m) && d(g + 1, m + T.length, k);
      return;
    }
    const C = a(T);
    if (C === "folders") {
      d(g + 1, m, k);
      for (let L = m; L < e.length && !s && c.length < 2; L++) e[L] === "/" && d(g + 1, L + 1, k);
      return;
    }
    const x = e.indexOf("/", m), R = x < 0 ? e.length : x;
    for (let L = m + 1; L <= R && !s && c.length < 2; L++) {
      const P = e.slice(m, L);
      C === "folder" && L !== R || C === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || d(g + 1, L, [...k, { key: C, raw: P }]);
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
    if (g === "language" && (k = gg(k)), g === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (g === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!mg(g, k)) return { status: "invalid", changes: [] };
    const T = String(i[g] || ""), C = g === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : T === k;
    v.push({ field: g, raw: m, value: k, ...g === "author" ? { values: [k] } : {}, before: T, previewOnly: !1, status: C ? "unchanged" : T.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((g) => g.status === "conflict") ? "conflict" : v.some((g) => g.status === "ready") ? "ready" : "unchanged", changes: v };
}
function gg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, a, n) => `${a}-${n.toUpperCase()}`);
}
function mg(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const t3 = [...ef];
function as(e) {
  const t = e.split("/"), i = t.pop() || "", a = i.lastIndexOf(".");
  return [...t, a > 0 ? i.slice(0, a) : i];
}
function ku(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function pd(e, t, i) {
  if (!t) return [e];
  if (i === "every") return e.split(t);
  const a = i === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return a < 0 ? [e] : [e.slice(0, a), e.slice(a + t.length)];
}
function Jo(e) {
  return { version: 1, combineAuthors: !1, parts: as(e).map((t, i, a) => ku(i === a.length - 1 ? "title" : "ignore")) };
}
function Qo(e, t, i = {}) {
  const a = (g) => ({ status: g, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return a("invalid");
  const n = as(e);
  if (n.length !== t.parts.length) return a("unmatched");
  const r = /* @__PURE__ */ new Map();
  let s = 0, c = "";
  function d(g, m, k = 0) {
    if (c) return;
    if (++s > 128 || k > 6 || !m) {
      c = "invalid";
      return;
    }
    if (m.split) {
      const { delimiter: R, occurrence: L, children: P } = m.split;
      if (typeof R != "string" || !R || R.length > 100 || !["first", "last", "every"].includes(L) || !Array.isArray(P)) {
        c = "invalid";
        return;
      }
      const N = pd(g, R, L);
      if (N.length !== P.length || N.length < 2) {
        c = "unmatched";
        return;
      }
      N.forEach((pe, Q) => d(pe, P[Q], k + 1));
      return;
    }
    if (m.field === "ignore") return;
    if (!t3.includes(m.field)) {
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
    if (m.underscores && (T = T.replaceAll("_", " ")), T = T.trim(), m.mapFrom && T === m.mapFrom && (T = m.mapTo.trim()), m.field === "language" && (T = gg(T)), !T || m.field === "year" && !/^\d{4}$/.test(T) || m.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(T)) {
      c = "invalid";
      return;
    }
    if (!mg(m.field, T)) {
      c = "invalid";
      return;
    }
    let C = [T];
    if (m.field === "author") {
      if (C = (m.authorSeparator ? T.split(m.authorSeparator) : C).map((R) => R.trim()), m.reverseName && (C = C.map((R) => {
        const L = R.split(",").map((P) => P.trim());
        return L.length !== 2 || L.some((P) => !P) ? (c = "invalid", R) : `${L[1]} ${L[0]}`;
      }), c))
        return;
      if (C.some((R) => !R || [...R].length > 255)) {
        c = "invalid";
        return;
      }
    }
    const x = r.get(m.field);
    x ? m.field === "author" && t.combineAuthors ? (x.values = [.../* @__PURE__ */ new Set([...x.values, ...C])], x.raw.push(g)) : JSON.stringify(x.values) !== JSON.stringify(C) && (c = "ambiguous") : r.set(m.field, { raw: [g], values: [...new Set(C)] });
  }
  if (n.forEach((g, m) => d(g, t.parts[m])), c) return a(c);
  const y = r.get("author")?.values;
  if (y && (y.length > 32 || [...y.join("; ")].length > 1024)) return a("invalid");
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
const i3 = ["aria-label", "aria-busy"], a3 = {
  key: 0,
  role: "alert"
}, n3 = ["disabled"], r3 = {
  key: 2,
  role: "status"
}, l3 = ["disabled"], s3 = { class: "library-inference-presets" }, o3 = ["disabled"], u3 = ["disabled"], c3 = ["disabled"], d3 = ["aria-label"], f3 = ["value", "aria-label"], h3 = { class: "library-inference-before-after" }, p3 = { key: 0 }, v3 = ["aria-label"], b3 = ["aria-label"], g3 = { class: "library-inference-path" }, m3 = { class: "library-inference-presets" }, y3 = ["disabled"], _3 = ["disabled"], w3 = ["disabled"], k3 = ["disabled"], S3 = ["disabled"], C3 = { class: "library-inference-history" }, T3 = ["disabled", "onClick"], yg = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ q([]), r = /* @__PURE__ */ q(null), s = /* @__PURE__ */ q([]), c = /* @__PURE__ */ q(!1), d = /* @__PURE__ */ q(""), y = /* @__PURE__ */ q(""), v = /* @__PURE__ */ q(""), g = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), m = z(() => i.results.filter((le) => ["ready", "conflict"].includes(le.status) && le.revision).map((le) => ({ ...le, changes: le.changes.filter((B) => g.has(B.field) && ["ready", "conflict"].includes(B.status)) })).filter((le) => le.changes.length)), k = (le, B) => `${le.id}:${B.field}`, T = z(() => m.value.map((le) => ({ id: le.id, revision: le.revision, changes: Object.fromEntries(le.changes.filter((B) => n.value.includes(k(le, B))).map((B) => [B.field, B.field === "author" ? B.values || [B.value] : B.value])) })).filter((le) => Object.keys(le.changes).length)), C = z(() => ({ prepared: _("library", "Awaiting approval"), applied: _("library", "Applied"), undone: _("library", "Undone") }));
    let x = 0;
    Ge(() => JSON.stringify([i.results, i.context]), () => {
      n.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", x++;
    }), Ge(() => JSON.stringify(n.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", x++;
    });
    function R() {
      n.value = m.value.flatMap((le) => le.changes.filter((B) => B.status === "ready").map((B) => k(le, B)));
    }
    async function L(le = "", B) {
      const W = await fetch(Jt(`/apps/library/api/inference/batches${le}`), { credentials: "same-origin", cache: "no-store", method: B === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...B === void 0 ? {} : { body: JSON.stringify(B) } }), I = await W.json();
      if (!W.ok)
        throw W.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(_("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : I.error === "history_limit" ? new Error(_("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : W.status === 404 ? new Error(_("library", "The batch or one of its books is no longer available.")) : new Error(_("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return I;
    }
    async function P() {
      s.value = (await L()).batches;
    }
    async function N(le) {
      c.value = !0, d.value = "", y.value = "";
      try {
        await le();
      } catch (B) {
        d.value = B.message;
      } finally {
        c.value = !1;
      }
    }
    function pe() {
      r.value = null, d.value = "", v.value = "", a("changed");
    }
    async function Q() {
      const le = x;
      await N(async () => {
        const B = await L("", { proposals: T.value, context: i.context });
        le === x && (r.value = B), await P();
      });
    }
    async function $(le) {
      await N(async () => {
        r.value = await L(`/${le}`), v.value = "";
      });
    }
    async function H() {
      if (!r.value || i.disabled) return;
      const le = r.value, B = le.id;
      await N(async () => {
        const W = await L(`/${B}/apply`, {});
        r.value = { ...le, ...W }, y.value = _("library", "Selected metadata changes were applied. Source files were not changed."), n.value = [], await P(), a("changed");
      });
    }
    async function G() {
      const le = r.value, B = le.id;
      await N(async () => {
        const W = await L(`/${B}/undo`, {});
        r.value = { ...le, ...W }, v.value = "", y.value = _("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), a("changed");
      });
    }
    async function J() {
      await N(async () => {
        await L(`/${r.value.id}/discard`, {}), r.value = null, await P();
      });
    }
    return xt(() => N(P)), (le, B) => (h(), p("section", {
      class: "library-inference-apply",
      "aria-label": u(_)("library", "Review and apply metadata"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h2", null, [
        de(Ke, {
          text: e.wholeFolder ? u(_)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(_)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: ke(() => [
            ae(o(e.wholeFolder ? u(_)("library", "Review and apply metadata") : u(_)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      d.value ? (h(), p("p", a3, o(d.value), 1)) : E("", !0),
      r.value?.blocked ? (h(), p("button", {
        key: 1,
        class: "button secondary",
        disabled: c.value,
        onClick: pe
      }, o(u(_)("library", "Load sample")), 9, n3)) : E("", !0),
      y.value ? (h(), p("p", r3, o(y.value), 1)) : E("", !0),
      l("fieldset", {
        disabled: c.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", s3, [
          l("button", {
            class: "button secondary",
            disabled: !m.value.length,
            onClick: R
          }, o(u(_)("library", "Select empty fields")), 9, o3),
          l("button", {
            class: "button secondary",
            disabled: !n.value.length,
            onClick: B[0] || (B[0] = (W) => n.value = [])
          }, o(u(_)("library", "Clear selection")), 9, u3),
          l("button", {
            class: "button primary",
            disabled: !T.value.length || r.value?.status === "prepared",
            onClick: Q
          }, o(u(_)("library", "Review selected changes")) + " (" + o(n.value.length) + ")", 9, c3)
        ]),
        l("div", {
          class: Ee(["library-inference-approval-candidates", { "library-inference-approval-scroll": m.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(_)("library", "Select metadata fields")
        }, [
          (h(!0), p(Y, null, he(m.value, (W) => (h(), p("details", {
            key: W.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(W.path), 1),
            (h(!0), p(Y, null, he(W.changes, (I) => (h(), p("label", {
              key: I.field,
              class: "library-inference-approval-field"
            }, [
              ye(l("input", {
                "onUpdate:modelValue": B[1] || (B[1] = (j) => n.value = j),
                type: "checkbox",
                value: k(W, I),
                "aria-label": `${e.labels[I.field]}: ${W.path}`
              }, null, 8, f3), [
                [sa, n.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[I.field]), 1),
                l("span", h3, [
                  l("span", null, o(I.before || "—"), 1),
                  B[4] || (B[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(I.value), 1)
                ]),
                I.status === "conflict" ? (h(), p("small", p3, o(u(_)("library", "Replaces an existing value")), 1)) : E("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, d3)
      ], 8, l3),
      r.value ? (h(), p("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(_)("library", "Confirmed change review")
      }, [
        l("h3", null, o(C.value[r.value.status]), 1),
        l("p", null, [
          de(Ke, {
            text: u(_)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: ke(() => [
              ae(o(u(_)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ae(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: Ee(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(_)("library", "Reviewed metadata changes")
        }, [
          (h(!0), p(Y, null, he(r.value.entries, (W) => (h(), p("article", {
            key: W.id
          }, [
            l("h4", g3, o(W.path), 1),
            l("dl", null, [
              (h(!0), p(Y, null, he(W.changes, (I) => (h(), p("div", {
                key: I.field
              }, [
                l("dt", null, o(e.labels[I.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(_)("library", "Before")) + ": " + o(I.before || "—"), 1),
                  l("strong", null, o(u(_)("library", "After")) + ": " + o(I.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, b3),
        l("div", m3, [
          r.value.status === "prepared" ? (h(), p("button", {
            key: 0,
            class: "button primary",
            disabled: c.value || e.disabled || r.value.blocked,
            onClick: H
          }, o(u(_)("library", "Apply reviewed changes")), 9, y3)) : E("", !0),
          r.value.status !== "applied" ? (h(), p("button", {
            key: 1,
            class: "button secondary",
            disabled: c.value,
            onClick: J
          }, o(u(_)("library", "Discard review")), 9, _3)) : E("", !0),
          r.value.status === "applied" && !v.value ? (h(), p("button", {
            key: 2,
            class: "button secondary",
            disabled: c.value || r.value.blocked,
            onClick: B[2] || (B[2] = (W) => v.value = r.value.id)
          }, o(u(_)("library", "Undo this batch")), 9, w3)) : E("", !0),
          v.value ? (h(), p(Y, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: c.value || r.value.blocked,
              onClick: G
            }, o(u(_)("library", "Confirm undo")), 9, k3),
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: B[3] || (B[3] = (W) => v.value = "")
            }, o(u(_)("library", "Cancel")), 9, S3)
          ], 64)) : E("", !0)
        ])
      ], 8, v3)) : E("", !0),
      l("details", C3, [
        l("summary", null, o(u(_)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (h(!0), p(Y, null, he(s.value, (W) => (h(), p("li", {
            key: W.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: c.value,
              onClick: (I) => $(W.id)
            }, o(new Date(Number(W.created_at) * 1e3).toLocaleString()) + " · " + o(C.value[W.status]), 9, T3)
          ]))), 128))
        ])
      ])
    ], 8, i3));
  }
}, A3 = { class: "library-inference-rule-trace" }, E3 = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (h(), p("div", A3, [
      (h(!0), p(Y, null, he(e.result.conflicts || [], (a) => (h(), p("div", {
        key: a.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(_)("library", "Conflicting rules")) + ": " + o(e.labels[a.field]), 1),
        l("ul", null, [
          (h(!0), p(Y, null, he(a.proposals, (n, r) => (h(), p("li", { key: r }, [
            l("bdi", null, o(n.value), 1),
            l("small", null, o(n.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (h(), p("details", E3, [
        l("summary", null, [
          de(Ke, {
            text: u(_)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: ke(() => [
              ae(o(u(_)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (h(!0), p(Y, null, he(e.result.attempts, (a) => (h(), p("li", {
            key: a.id
          }, [
            l("strong", null, o(a.name), 1),
            l("bdi", null, o(a.folder || "/"), 1),
            l("small", null, o(e.statuses[a.status]), 1)
          ]))), 128))
        ])
      ])) : E("", !0)
    ]));
  }
}, $3 = ["aria-label", "aria-busy"], x3 = {
  key: 0,
  role: "alert"
}, O3 = { class: "library-inference-presets" }, N3 = ["disabled"], R3 = ["value", "disabled"], I3 = { value: "" }, L3 = ["value"], P3 = { class: "library-inference-path" }, D3 = { role: "status" }, F3 = ["value", "max", "aria-label"], M3 = { class: "library-inference-presets" }, U3 = ["disabled"], z3 = ["disabled"], j3 = ["disabled"], B3 = {
  key: 1,
  role: "alert"
}, H3 = {
  key: 2,
  role: "alert"
}, V3 = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, q3 = { key: 1 }, G3 = { key: 2 }, K3 = ["disabled"], W3 = { value: "all" }, Y3 = ["value"], Z3 = ["aria-label"], X3 = { class: "library-inference-path" }, J3 = ["aria-label"], Q3 = ["disabled"], e4 = ["disabled"], t4 = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q(null), a = /* @__PURE__ */ q([]), n = /* @__PURE__ */ q(!1), r = /* @__PURE__ */ q(""), s = /* @__PURE__ */ q("all");
    let c, d = 0, y = !0;
    const v = z(() => i.value?.status === "running"), g = z(() => ({ running: _("library", "Analysing"), completed: _("library", "Analysis complete"), cancelled: _("library", "Analysis cancelled"), failed: _("library", "Analysis failed"), limited: _("library", "Analysis limit reached") })), m = z(() => ({ ...t.statuses, unavailable: _("library", "Changed or unavailable books") }));
    async function k(Q = "", $) {
      const H = await fetch(Jt(`/apps/library/api/inference/analyses${Q}`), { credentials: "same-origin", cache: "no-store", method: $ === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...$ === void 0 ? {} : { body: JSON.stringify($) } }), G = await H.json();
      if (!H.ok)
        throw G.error === "analysis_history_limit" ? new Error(_("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : G.error === "analysis_limit" ? new Error(_("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : H.status === 404 ? new Error(_("library", "This analysis or its folder is no longer available.")) : new Error(_("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return G;
    }
    async function T() {
      const Q = await k();
      y && (a.value = Q.jobs);
    }
    async function C(Q) {
      n.value = !0, r.value = "";
      try {
        await Q();
      } catch ($) {
        y && (r.value = $.message);
      } finally {
        y && (n.value = !1);
      }
    }
    function x() {
      if (clearTimeout(c), !y || !v.value) return;
      const Q = i.value.id, $ = d;
      c = setTimeout(async () => {
        try {
          if (await k(`/${Q}/advance`, {}), !y || d !== $) return;
          const H = await k(`/${Q}?page=${i.value.page}&filter=${s.value}`);
          if (!y || d !== $) return;
          i.value = H, v.value || await T(), x();
        } catch (H) {
          y && d === $ && (r.value = H.message);
        }
      }, 1500);
    }
    async function R() {
      await C(async () => {
        const Q = await k("", { definition: t.definition });
        d++, s.value = "all", i.value = Q, await T(), x();
      });
    }
    async function L(Q, $ = 1) {
      const H = ++d;
      clearTimeout(c), await C(async () => {
        const G = await k(`/${Q}?page=${$}&filter=${s.value}`);
        y && H === d && (i.value = G, x());
      });
    }
    function P(Q) {
      s.value = "all", Q.target.value && L(Q.target.value);
    }
    async function N() {
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
      "aria-label": u(_)("library", "Whole-folder analysis"),
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("h2", null, [
        de(Ke, {
          text: u(_)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (h(), p("p", x3, o(r.value), 1)) : E("", !0),
      l("div", O3, [
        l("button", {
          class: "button primary",
          disabled: n.value || e.disabled || v.value,
          onClick: R
        }, o(u(_)("library", "Analyse whole folder")), 9, N3),
        l("label", null, [
          de(Ke, {
            text: u(_)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: ke(() => [
              ae(o(u(_)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: i.value?.id || "",
            disabled: n.value,
            onChange: P
          }, [
            l("option", I3, o(u(_)("library", "Choose an analysis")), 1),
            (h(!0), p(Y, null, he(a.value, (H) => (h(), p("option", {
              key: H.id,
              value: H.id
            }, o(new Date(Number(H.created_at) * 1e3).toLocaleString()) + " · " + o(g.value[H.status]) + " · " + o(H.processed) + "/" + o(H.total), 9, L3))), 128))
          ], 40, R3)
        ])
      ]),
      i.value ? (h(), p(Y, { key: 1 }, [
        l("p", P3, o(i.value.scope), 1),
        l("p", D3, o(g.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        v.value ? (h(), p("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(_)("library", "Analysis progress")
        }, null, 8, F3)) : E("", !0),
        l("div", M3, [
          v.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: n.value,
            onClick: N
          }, o(u(_)("library", "Cancel analysis")), 9, U3)) : E("", !0),
          l("button", {
            class: "button secondary",
            disabled: n.value,
            onClick: $[0] || ($[0] = (H) => L(i.value.id, i.value.page))
          }, o(u(_)("library", "Refresh results")), 9, z3),
          l("button", {
            class: "button secondary",
            disabled: n.value || v.value,
            onClick: pe
          }, o(u(_)("library", "Discard analysis")), 9, j3)
        ]),
        i.value.status === "limited" ? (h(), p("p", B3, o(u(_)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : E("", !0),
        i.value.status === "failed" ? (h(), p("p", H3, o(u(_)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : E("", !0),
        l("details", null, [
          l("summary", null, o(u(_)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (h(), p("code", V3, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (h(), p("ul", q3, [
            (h(!0), p(Y, null, he(i.value.definition.assignments, (H) => (h(), p("li", {
              key: H.id
            }, o(H.folder || "/") + " · " + o(H.definition.name), 1))), 128))
          ])) : (h(), p("ul", G3, [
            (h(!0), p(Y, null, he(i.value.definition.rule.parts, (H, G) => (h(), p("li", { key: G }, o(G + 1) + " · " + o(e.labels[H.field] || u(_)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          ae(o(u(_)("library", "Show results")), 1),
          ye(l("select", {
            "onUpdate:modelValue": $[1] || ($[1] = (H) => s.value = H),
            disabled: n.value,
            onChange: $[2] || ($[2] = (H) => L(i.value.id))
          }, [
            l("option", W3, o(u(_)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((H, G) => H + G, 0)) + ")", 1),
            (h(!0), p(Y, null, he(m.value, (H, G) => (h(), p("option", {
              key: G,
              value: G
            }, o(H) + " (" + o(i.value.counts[G] || 0) + ")", 9, Y3))), 128))
          ], 40, K3), [
            [nt, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(_)("library", "Analysis results")
        }, [
          (h(!0), p(Y, null, he(i.value.items, (H) => (h(), p("details", {
            key: H.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", X3, o(H.path || "—"), 1),
              l("strong", null, o(m.value[H.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (h(), Fe(vd, {
              key: 0,
              result: H,
              labels: e.labels,
              statuses: m.value
            }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
            (h(!0), p(Y, null, he(H.changes, (G) => (h(), p("dl", {
              key: G.field
            }, [
              l("dt", null, o(e.labels[G.field]), 1),
              l("dd", null, o(G.before || "—") + " → " + o(G.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, Z3),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(_)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: n.value || i.value.page === 1,
            onClick: $[3] || ($[3] = (H) => L(i.value.id, i.value.page - 1))
          }, o(u(_)("library", "Previous page")), 9, Q3),
          l("span", null, o(i.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: n.value || !i.value.hasNext,
            onClick: $[4] || ($[4] = (H) => L(i.value.id, i.value.page + 1))
          }, o(u(_)("library", "Next page")), 9, e4)
        ], 8, J3),
        de(yg, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: n.value || v.value,
          onChanged: $[5] || ($[5] = (H) => L(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : E("", !0)
    ], 8, $3));
  }
}, i4 = { class: "library-inference-part" }, a4 = { class: "library-inference-part-source" }, n4 = { class: "library-inference-part-options" }, r4 = { value: "first" }, l4 = { value: "last" }, s4 = { value: "every" }, o4 = {
  key: 0,
  role: "status"
}, u4 = ["aria-label"], c4 = { value: "ignore" }, d4 = ["value"], f4 = { key: 1 }, h4 = { class: "library-inference-part-options" }, p4 = { class: "library-inference-checkbox" }, v4 = {
  key: 2,
  class: "library-inference-part-options"
}, b4 = { value: "none" }, g4 = { value: "semicolon" }, m4 = { value: "and" }, y4 = { value: "custom" }, _4 = { key: 0 }, w4 = ["value"], k4 = { class: "library-inference-checkbox" }, Ip = " and ", S4 = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ q(t.node.split?.delimiter || " - "), a = /* @__PURE__ */ q(t.node.split?.occurrence || "first"), n = z(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = z({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (d) => {
        t.node.authorSeparatorChoice = d, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Ip, custom: t.node.customAuthorSeparator || "" }[d];
      }
    });
    function s(d) {
      t.node.customAuthorSeparator = d.target.value, t.node.authorSeparator = d.target.value;
    }
    function c() {
      const d = pd(t.value, i.value, a.value).length, y = t.node.split?.children || [];
      t.node.split = {
        delimiter: i.value,
        occurrence: a.value,
        children: Array.from({ length: Math.min(32, Math.max(2, d)) }, (v, g) => y[g] || ku(g === 0 ? t.node.field : "ignore"))
      };
    }
    return (d, y) => {
      const v = Je("InferencePart", !0);
      return h(), p("div", i4, [
        l("bdi", a4, o(e.value || "—"), 1),
        e.node.split ? (h(), p(Y, { key: 0 }, [
          l("div", n4, [
            l("label", null, [
              ae(o(u(_)("library", "Separator")), 1),
              ye(l("input", {
                "onUpdate:modelValue": y[0] || (y[0] = (g) => i.value = g),
                maxlength: "100",
                onInput: c
              }, null, 544), [
                [ze, i.value]
              ])
            ]),
            l("label", null, [
              ae(o(u(_)("library", "Split at")), 1),
              ye(l("select", {
                "onUpdate:modelValue": y[1] || (y[1] = (g) => a.value = g),
                onChange: c
              }, [
                l("option", r4, o(u(_)("library", "First occurrence")), 1),
                l("option", l4, o(u(_)("library", "Last occurrence")), 1),
                l("option", s4, o(u(_)("library", "Every occurrence")), 1)
              ], 544), [
                [nt, a.value]
              ])
            ])
          ]),
          n.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (h(), p("p", o4, o(u(_)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : E("", !0),
          l("button", {
            class: "button secondary",
            onClick: y[2] || (y[2] = (g) => e.node.split = null)
          }, o(u(_)("library", "Use whole part")), 1),
          (h(!0), p(Y, null, he(e.node.split.children, (g, m) => (h(), Fe(v, {
            key: m,
            node: g,
            value: n.value[m] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (h(), p(Y, { key: 1 }, [
          l("label", null, [
            ae(o(u(_)("library", "Field")), 1),
            ye(l("select", {
              "onUpdate:modelValue": y[3] || (y[3] = (g) => e.node.field = g),
              "aria-label": `${u(_)("library", "Field")}: ${e.value}`
            }, [
              l("option", c4, o(u(_)("library", "Ignore this part")), 1),
              (h(!0), p(Y, null, he(e.fields, (g) => (h(), p("option", {
                key: g[0],
                value: g[0]
              }, o(g[1]), 9, d4))), 128))
            ], 8, u4), [
              [nt, e.node.field]
            ])
          ]),
          e.depth < 6 ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            onClick: c
          }, o(u(_)("library", "Split this part")), 1)) : E("", !0),
          e.node.field !== "ignore" ? (h(), p("details", f4, [
            l("summary", null, o(u(_)("library", "Transform this value")), 1),
            l("div", h4, [
              l("label", null, [
                ae(o(u(_)("library", "Remove prefix")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": y[4] || (y[4] = (g) => e.node.prefix = g),
                  maxlength: "100"
                }, null, 512), [
                  [ze, e.node.prefix]
                ])
              ]),
              l("label", null, [
                ae(o(u(_)("library", "Remove suffix")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": y[5] || (y[5] = (g) => e.node.suffix = g),
                  maxlength: "100"
                }, null, 512), [
                  [ze, e.node.suffix]
                ])
              ]),
              l("label", p4, [
                ye(l("input", {
                  "onUpdate:modelValue": y[6] || (y[6] = (g) => e.node.underscores = g),
                  type: "checkbox"
                }, null, 512), [
                  [sa, e.node.underscores]
                ]),
                ae(o(u(_)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                de(Ke, {
                  text: u(_)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: ke(() => [
                    ae(o(u(_)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ye(l("input", {
                  "onUpdate:modelValue": y[7] || (y[7] = (g) => e.node.mapFrom = g),
                  maxlength: "200"
                }, null, 512), [
                  [ze, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                ae(o(u(_)("library", "Replacement value")), 1),
                ye(l("input", {
                  "onUpdate:modelValue": y[8] || (y[8] = (g) => e.node.mapTo = g),
                  maxlength: "200"
                }, null, 512), [
                  [ze, e.node.mapTo]
                ])
              ])
            ])
          ])) : E("", !0),
          e.node.field === "author" ? (h(), p("div", v4, [
            l("label", null, [
              de(Ke, {
                text: u(_)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(_)("library", "Spaces around the word are required.") : "")
              }, {
                default: ke(() => [
                  ae(o(u(_)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              ye(l("select", {
                "onUpdate:modelValue": y[9] || (y[9] = (g) => r.value = g)
              }, [
                l("option", b4, o(u(_)("library", "None (keep one name)")), 1),
                l("option", g4, o(u(_)("library", "Semicolon (;)")), 1),
                y[11] || (y[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", m4, o(u(_)("library", "Word separator")) + ": " + o(Ip.trim()), 1),
                l("option", y4, o(u(_)("library", "Custom separator")), 1)
              ], 512), [
                [nt, r.value]
              ])
            ]),
            r.value === "custom" ? (h(), p("label", _4, [
              ae(o(u(_)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, w4)
            ])) : E("", !0),
            l("label", k4, [
              ye(l("input", {
                "onUpdate:modelValue": y[10] || (y[10] = (g) => e.node.reverseName = g),
                type: "checkbox"
              }, null, 512), [
                [sa, e.node.reverseName]
              ]),
              ae(o(u(_)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : E("", !0)
        ], 64))
      ]);
    };
  }
}, C4 = ["aria-busy"], T4 = ["disabled"], A4 = {
  value: "",
  disabled: ""
}, E4 = ["value"], $4 = ["disabled"], x4 = ["disabled"], O4 = ["disabled"], N4 = ["disabled"], R4 = ["disabled"], I4 = {
  key: 0,
  role: "alert"
}, L4 = ["disabled"], P4 = {
  key: 1,
  role: "status"
}, Lp = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = z(() => i.mode === "guided"), r = z(() => n.value ? JSON.stringify(i.rule) : i.pattern), s = (H) => (H.kind || "pattern") === "guided" ? JSON.stringify(H.rule) : H.pattern, c = /* @__PURE__ */ q([]), d = /* @__PURE__ */ q(""), y = /* @__PURE__ */ q(""), v = /* @__PURE__ */ q(!1), g = /* @__PURE__ */ q(""), m = /* @__PURE__ */ q(""), k = /* @__PURE__ */ q(""), T = /* @__PURE__ */ q([]), C = z(() => [
      { id: "title", name: _("library", "Title from filename"), pattern: "%folders%/%title%.%extension%", example: "Author/Book title.epub" },
      { id: "by", name: _("library", "Title by Author"), pattern: "%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A Magic Deep and Drowning by Hester Fox.epub" },
      { id: "title-author-year", name: _("library", "Title - Author (Year)"), pattern: "%folders%/%title% - %author% (%year%).%extension%", example: "Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "author-title", name: _("library", "Author - Title"), pattern: "%folders%/%author% - %title%.%extension%", example: "Ada Quill - A Quiet Orchard.epub" },
      { id: "author-folder", name: _("library", "Author folder / Title"), pattern: "%folders%/%author%/%title%.%extension%", example: "Ada Quill/A Quiet Orchard.epub" },
      { id: "series", name: _("library", "Series folder / Number. Title - Author (Year)"), pattern: "%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%", example: "Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub" },
      { id: "series-inline", name: _("library", "Series #Number - Title - Author (Year)"), pattern: "%folders%/%series% #%seriesNumber% - %title% - %author% (%year%).%extension%", example: "Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub" },
      { id: "language-subject", name: _("library", "books / Language_Subject / Title - Author (Year)"), pattern: "books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%", example: "books/english_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "language-subject-by", name: _("library", "books / Language_Subject / Title by Author"), pattern: "books/%language%_%subject%/%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A String in Her Tale by Mark Ezra.epub" },
      { id: "series-underscore", name: _("library", "Series folder / Number_Title_Author"), pattern: "%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%", example: "Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub" }
    ]), x = z(() => [...n.value ? [] : C.value.map((H) => ({ ...H, id: `preset-${H.id}` })).filter((H) => !T.value.includes(H.id)), ...c.value.filter((H) => (H.kind || "pattern") === i.mode)].sort((H, G) => H.name.localeCompare(G.name))), R = z(() => x.value.find((H) => H.id === y.value));
    Ge([r, x], () => {
      k.value = "", (!R.value || s(R.value) !== r.value) && (y.value = x.value.find((H) => s(H) === r.value)?.id || "");
    }, { immediate: !0 });
    const L = z(() => [_("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), R.value?.example ? `${_("library", "Example path")}: ${R.value.example}` : ""].filter(Boolean).join(`

`));
    function P(H) {
      const G = x.value.find((J) => J.id === H.target.value);
      G && (y.value = G.id, n.value ? a("choose-rule", JSON.parse(JSON.stringify(G.rule))) : a("choose", G.pattern), m.value = "", k.value = "");
    }
    async function N(H = "", G = null) {
      const J = await fetch(`${Jt("/apps/library/api/inference/patterns")}${H}`, {
        method: G === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...G === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...G === null ? {} : { body: JSON.stringify(G) }
      });
      if (!J.ok) throw new Error(J.status === 409 ? _("library", "That name already exists. Choose a different name.") : J.status === 422 ? _("library", "Check the definition and name. You can save up to 100 rules and patterns.") : _("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return J.json();
    }
    async function pe() {
      v.value = !0, g.value = "";
      try {
        const H = await N();
        c.value = H.patterns, T.value = H.hidden || [];
      } catch (H) {
        g.value = H.message;
      } finally {
        v.value = !1;
      }
    }
    async function Q() {
      v.value = !0, g.value = "", m.value = "";
      try {
        const H = await N("", { name: d.value, ...n.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        c.value = [...c.value, H.saved].sort((G, J) => G.name.localeCompare(J.name)), y.value = H.saved.id, d.value = "", m.value = n.value ? _("library", "Rule saved to your account.") : _("library", "Pattern saved to your account.");
      } catch (H) {
        g.value = H.message;
      } finally {
        v.value = !1;
      }
    }
    async function $(H) {
      v.value = !0, g.value = "", m.value = "";
      try {
        await N(`/${H}/delete`, {}), c.value = c.value.filter((G) => G.id !== H), T.value = [...T.value, H], y.value = "", k.value = "", m.value = n.value ? _("library", "Saved rule deleted. The current preview is unchanged.") : _("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (G) {
        g.value = G.message;
      } finally {
        v.value = !1;
      }
    }
    return xt(pe), (H, G) => (h(), p("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("label", null, [
        de(Ke, {
          text: n.value ? u(_)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : L.value
        }, {
          default: ke(() => [
            ae(o(n.value ? u(_)("library", "Saved rule") : u(_)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ye(l("select", {
          "onUpdate:modelValue": G[0] || (G[0] = (J) => y.value = J),
          disabled: v.value,
          onChange: P
        }, [
          l("option", A4, o(n.value ? u(_)("library", "Custom rule") : u(_)("library", "Custom pattern")), 1),
          (h(!0), p(Y, null, he(x.value, (J) => (h(), p("option", {
            key: J.id,
            value: J.id
          }, o(J.name), 9, E4))), 128))
        ], 40, T4), [
          [nt, y.value]
        ])
      ]),
      He(H.$slots, "default"),
      l("form", {
        onSubmit: Ce(Q, ["prevent"])
      }, [
        l("label", null, [
          de(Ke, {
            text: u(_)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: ke(() => [
              ae(o(n.value ? u(_)("library", "Rule name") : u(_)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("input", {
            "onUpdate:modelValue": G[1] || (G[1] = (J) => d.value = J),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, $4), [
            [ze, d.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: v.value || !d.value.trim() || (n.value ? !e.rule : !e.pattern.trim())
        }, o(n.value ? u(_)("library", "Save current rule as new") : u(_)("library", "Save current pattern as new")), 9, x4),
        R.value && !k.value ? (h(), p("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: G[2] || (G[2] = (J) => k.value = R.value.id)
        }, o(n.value ? u(_)("library", "Delete rule") : u(_)("library", "Delete pattern")), 9, O4)) : E("", !0),
        k.value ? (h(), p(Y, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: G[3] || (G[3] = (J) => $(k.value))
          }, o(u(_)("library", "Confirm deletion")), 9, N4),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: G[4] || (G[4] = (J) => k.value = "")
          }, o(u(_)("library", "Cancel")), 9, R4)
        ], 64)) : E("", !0)
      ], 32),
      g.value ? (h(), p("p", I4, [
        ae(o(g.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: pe
        }, o(n.value ? u(_)("library", "Reload saved rules") : u(_)("library", "Reload saved patterns")), 9, L4)
      ])) : E("", !0),
      m.value ? (h(), p("p", P4, o(m.value), 1)) : E("", !0)
    ], 8, C4));
  }
}, D4 = ["aria-busy"], F4 = ["disabled"], M4 = {
  value: "",
  disabled: ""
}, U4 = ["value"], z4 = { class: "library-inference-path" }, j4 = { class: "library-inference-checkbox" }, B4 = ["disabled"], H4 = ["disabled"], V4 = {
  key: 0,
  role: "status"
}, q4 = {
  key: 1,
  role: "alert"
}, G4 = ["disabled"], K4 = { key: 2 }, W4 = { class: "library-inference-folder-list" }, Y4 = {
  key: 0,
  role: "status"
}, Z4 = ["disabled", "onClick"], X4 = ["disabled", "onClick"], J4 = ["disabled"], Q4 = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ q([]), r = /* @__PURE__ */ q([]), s = /* @__PURE__ */ q(""), c = /* @__PURE__ */ q(!0), d = /* @__PURE__ */ q(!1), y = /* @__PURE__ */ q(!1), v = /* @__PURE__ */ q(""), g = /* @__PURE__ */ q(""), m = z(() => i.disabled || d.value || y.value);
    let k = 0;
    async function T(L, P) {
      const N = await fetch(Jt(`/apps/library/api/inference/${L}`), {
        method: P === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...P === void 0 ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...P === void 0 ? {} : { body: JSON.stringify(P) }
      });
      if (!N.ok) throw new Error(N.status === 409 ? _("library", "This rule is already assigned to this folder.") : N.status === 422 ? _("library", "Check the folder and rule. You can save up to 100 folder assignments.") : N.status === 404 ? _("library", "The folder or saved rule is unavailable. Reload and check your access.") : _("library", "Could not load or save folder rules. Try again."));
      return N.json();
    }
    async function C() {
      const L = ++k, P = i.rootId;
      if (r.value = [], g.value = "", v.value = "", a("loaded", { rootId: P, assignments: [] }), !!P) {
        d.value = !0;
        try {
          const [N, pe] = await Promise.all([T("patterns"), T(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (L !== k) return;
          n.value = N.patterns, r.value = pe.assignments, n.value.some((Q) => Q.id === s.value) || (s.value = ""), a("loaded", { rootId: P, assignments: pe.assignments });
        } catch (N) {
          L === k && (v.value = N.message);
        } finally {
          L === k && (d.value = !1);
        }
      }
    }
    async function x() {
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
    async function R(L) {
      if (!m.value) {
        y.value = !0, v.value = "";
        try {
          await T(`folders/${L}/delete`, {}), await C();
        } catch (P) {
          v.value = P.message;
        } finally {
          y.value = !1;
        }
      }
    }
    return Ge(() => i.rootId, C, { immediate: !0 }), Ti(() => {
      k++;
    }), (L, P) => (h(), p("div", {
      class: "library-inference-folder-rules",
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Ce(x, ["prevent"])
      }, [
        l("label", null, [
          de(Ke, {
            text: u(_)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: ke(() => [
              ae(o(u(_)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (N) => s.value = N),
            disabled: m.value
          }, [
            l("option", M4, o(u(_)("library", "Choose a saved definition")), 1),
            (h(!0), p(Y, null, he(n.value, (N) => (h(), p("option", {
              key: N.id,
              value: N.id
            }, o(N.name), 9, U4))), 128))
          ], 8, F4), [
            [nt, s.value]
          ])
        ]),
        l("p", z4, [
          ae(o(u(_)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", j4, [
          ye(l("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (N) => c.value = N),
            type: "checkbox",
            disabled: m.value
          }, null, 8, B4), [
            [sa, c.value]
          ]),
          ae(o(u(_)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || e.scopePending || !s.value || !e.rootId
        }, o(u(_)("library", "Assign to this folder")), 9, H4)
      ], 32),
      e.scopePending ? (h(), p("p", V4, o(u(_)("library", "Load the folder before assigning a rule.")), 1)) : E("", !0),
      v.value ? (h(), p("p", q4, o(v.value), 1)) : E("", !0),
      l("button", {
        class: "button secondary",
        disabled: m.value,
        onClick: C
      }, o(u(_)("library", "Reload folder rules")), 9, G4),
      l("h3", null, [
        de(Ke, {
          text: u(_)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !d.value ? (h(), p("p", K4, o(u(_)("library", "No folder rules assigned yet.")), 1)) : E("", !0),
      l("ul", W4, [
        (h(!0), p(Y, null, he(r.value, (N) => (h(), p("li", {
          key: N.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(N.definition.name), 1),
          l("bdi", null, o(N.folder || "/"), 1),
          l("small", null, o(N.recursive ? u(_)("library", "Includes subfolders") : u(_)("library", "Direct children only")), 1),
          N.available ? E("", !0) : (h(), p("p", Y4, o(u(_)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          g.value !== N.id ? (h(), p("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: m.value,
            onClick: (pe) => g.value = N.id
          }, o(u(_)("library", "Remove assignment")), 9, Z4)) : (h(), p(Y, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: (pe) => R(N.id)
            }, o(u(_)("library", "Confirm removal")), 9, X4),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: P[2] || (P[2] = (pe) => g.value = "")
            }, o(u(_)("library", "Cancel")), 9, J4)
          ], 64))
        ]))), 128))
      ])
    ], 8, D4));
  }
};
function eO(e, t, i, a = {}) {
  const n = [t, e].filter(Boolean).join("/"), r = i.filter((c) => c.available && (!c.folder || n.startsWith(`${c.folder}/`))).map((c) => ({ ...c, relative: c.folder ? n.slice(c.folder.length + 1) : n, depth: c.folder ? c.folder.split("/").length : 0 })).filter((c) => c.recursive || !c.relative.includes("/")).sort((c, d) => d.depth - c.depth || c.id.localeCompare(d.id)), s = [];
  for (const c of [...new Set(r.map((d) => d.depth))]) {
    const d = [];
    for (const m of r.filter((k) => k.depth === c)) {
      const k = m.definition, T = k.kind === "guided" ? Qo(m.relative, k.rule, a) : bg(m.relative, k.pattern, a), C = { id: m.id, name: k.name, folder: m.folder };
      s.push({ ...C, status: T.status }), ["ready", "conflict", "unchanged"].includes(T.status) && T.changes.length && d.push({ result: T, source: C });
    }
    if (s.some((m) => m.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!d.length) continue;
    const y = /* @__PURE__ */ new Map();
    for (const { result: m, source: k } of d) for (const T of m.changes) {
      const C = y.get(T.field) || /* @__PURE__ */ new Map(), x = JSON.stringify(T.values || [T.value]), R = C.get(x);
      R ? R.sources.push(k) : C.set(x, { ...T, sources: [k] }), y.set(T.field, C);
    }
    const v = [], g = [];
    for (const [m, k] of y)
      k.size > 1 ? g.push({ field: m, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: g.length ? "ambiguous" : v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: g, attempts: s };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: s };
}
const Pp = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), _g = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Dp(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && _g.test(e);
}
function wl(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && _g.test(i)) && e.length <= 120;
}
function wr(e) {
  const t = e.split(",").map((i) => i.trim());
  return (wl(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function si(e, t = {}) {
  return { ...ku(e), ...t };
}
function un(e, t, ...i) {
  return { ...ku(), split: { delimiter: e, occurrence: t, children: i } };
}
function tO(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || as(e).length > 64) return [];
  const i = as(e), a = i.length - 1, n = i[a], r = i.slice(0, -1), s = Jo(e), c = [], d = [];
  let y = n, v = (J) => J, g = (J) => J, m = "", k = si("title"), T = !1;
  const C = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(y), x = !C && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(y);
  C ? (y = C[1], v = (J) => un(" (", "last", J, si("year", { suffix: ")" })), c.push("year-parentheses")) : x && (y = x[1], v = (J) => un(" ", "last", J, si("year")), c.push("year-trailing"), d.push("year-may-be-title"));
  const R = /^(.*\S) by (.+)$/.exec(y), L = /^(.*\S) - (.+)$/.exec(y), P = R || L, N = !R && L && (wl(L[1]) || Dp(L[1]) && r.some((J) => wr(J) === wr(L[1]))), pe = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(y) && y.split(" - ").length === 2;
  N ? (m = L[1], y = L[2], g = (J) => un(" - ", "first", si("author"), J), c.push("author-first"), d.push("author-needs-review")) : P && !pe && (Dp(P[2]) || wl(P[2])) && (m = P[2], y = P[1], g = (J) => un(R ? " by " : " - ", "last", J, si("author")), c.push(R ? "author-by" : "author-dash"), r.some((J) => wr(J) === wr(m)) ? c.push("author-folder-agrees") : d.push("author-needs-review"));
  const Q = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(y), $ = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(y);
  if (Q)
    k = un(" #", "first", si("series"), un(" - ", "first", si("seriesNumber"), si("title"))), T = !0, c.push("series-inline");
  else if ($ && r.length) {
    const J = r.at(-1);
    !wl(J) && !(m && wr(J) === wr(m)) && !Pp.has(J.toLowerCase()) && !J.includes("_") && (k = un(". ", "first", si("seriesNumber"), si("title")), s.parts[a - 1] = si("series"), T = !0, c.push("series-folder"), d.push("series-needs-review"));
  }
  if (s.parts[a] = v(g(k)), !m) {
    const J = T ? a - 2 : a - 1;
    J >= 0 && wl(i[J]) && (s.parts[J] = si("author"), c.push("author-comma"), d.push("author-needs-review"));
  }
  for (let J = r.length - 1; J >= 0; J--) {
    if (s.parts[J].field !== "ignore") continue;
    const le = r[J], B = le.indexOf("_"), W = B < 0 ? le : le.slice(0, B);
    if (Pp.has(W.toLowerCase())) {
      s.parts[J] = B < 0 ? si("language") : un("_", "first", si("language"), si("genre", { underscores: !0 })), c.push(B < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const H = [], G = (J, le, B, W) => {
    const I = Qo(e, le);
    if (!["ready", "conflict", "unchanged"].includes(I.status)) return;
    const j = t.slice(0, 40).map((re) => typeof re == "string" ? re : re.path).filter((re) => typeof re == "string"), Z = j.filter((re) => ["ready", "conflict", "unchanged"].includes(Qo(re, le).status)).length;
    H.push({ id: J, rule: le, clues: B, warnings: [...new Set(W)], preview: I.changes, matched: Z, total: j.length });
  };
  return c.length && G("detected", s, c, d), G("filename", Jo(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(n) ? ["year-may-be-title"] : []), H;
}
const iO = { class: "library-inference-suggestions" }, aO = ["disabled"], nO = {
  value: "",
  disabled: ""
}, rO = ["value"], lO = {
  key: 0,
  "aria-live": "polite"
}, sO = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, a = t, n = /* @__PURE__ */ q(""), r = z(() => tO(i.path, i.sample)), s = z(() => r.value.find((v) => v.id === n.value)), c = z(() => ({
      "year-parentheses": _("library", "Trailing year in parentheses"),
      "year-trailing": _("library", "Possible trailing year"),
      "author-by": _("library", "Title by Author"),
      "author-dash": _("library", "Title - Author"),
      "author-first": _("library", "Author - Title"),
      "author-folder-agrees": _("library", "Author matches a folder name"),
      "author-comma": _("library", "Possible Surname, Given name folder"),
      "series-inline": _("library", "Series #Number - Title"),
      "series-folder": _("library", "Series folder with a numbered title"),
      "language-folder": _("library", "Recognized language folder"),
      "language-genre-folder": _("library", "Language and genre in one folder"),
      "filename-title": _("library", "Title from filename")
    })), d = z(() => ({
      "year-may-be-title": _("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": _("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": _("library", "Check that the parent folder names a series and the number is its position.")
    }));
    Ge(() => i.path, () => {
      n.value = "";
    }), Ge(() => JSON.stringify(i.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (n.value = "");
    });
    function y(v) {
      n.value = v.target.value, s.value && a("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, g) => (h(), p("div", iO, [
      l("label", null, [
        de(Ke, {
          text: u(_)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((m) => c.value[m]).join(`
`) : "")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ye(l("select", {
          "onUpdate:modelValue": g[0] || (g[0] = (m) => n.value = m),
          disabled: !r.value.length,
          onChange: y
        }, [
          l("option", nO, o(u(_)("library", "Choose a suggestion")), 1),
          (h(!0), p(Y, null, he(r.value, (m) => (h(), p("option", {
            key: m.id,
            value: m.id
          }, o(m.id === "filename" ? u(_)("library", "Title from filename") : u(_)("library", "Suggested assignments")), 9, rO))), 128))
        ], 40, aO), [
          [nt, n.value]
        ])
      ]),
      s.value ? (h(), p("div", lO, [
        l("p", null, o(u(_)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (h(!0), p(Y, null, he(s.value.warnings, (m) => (h(), p("p", {
          key: m,
          class: "library-inference-suggestion-warning"
        }, o(d.value[m]), 1))), 128))
      ])) : E("", !0)
    ]));
  }
}, oO = ["aria-label", "aria-busy"], uO = {
  key: 0,
  role: "alert"
}, cO = {
  key: 1,
  role: "status"
}, dO = { class: "library-inference-step" }, fO = ["disabled"], hO = ["value"], pO = ["disabled", "placeholder"], vO = { class: "library-inference-checkbox" }, bO = ["disabled"], gO = ["disabled"], mO = {
  key: 0,
  class: "library-inference-path"
}, yO = ["aria-label"], _O = ["disabled"], wO = ["disabled", "onClick"], kO = {
  key: 2,
  class: "library-inference-step"
}, SO = { class: "library-inference-editor" }, CO = { class: "library-inference-controls" }, TO = { class: "library-inference-scope" }, AO = ["value"], EO = ["open"], $O = { value: "guided" }, xO = { value: "pattern" }, OO = { value: "folders" }, NO = {
  key: 0,
  role: "status"
}, RO = { class: "library-inference-checkbox" }, IO = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, LO = ["aria-label"], PO = ["title"], DO = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, FO = { class: "library-inference-live-status" }, MO = { key: 1 }, UO = {
  key: 0,
  class: "library-inference-author-chips"
}, zO = {
  key: 1,
  dir: "auto"
}, jO = { dir: "auto" }, BO = { key: 2 }, HO = { dir: "auto" }, VO = { key: 3 }, qO = { key: 2 }, GO = { key: 1 }, KO = {
  class: "library-inference-path",
  dir: "ltr"
}, WO = { class: "library-inference-step" }, YO = { value: "all" }, ZO = ["value"], XO = { key: 0 }, JO = { class: "library-inference-path" }, QO = {
  key: 1,
  class: "library-inference-table-scroll"
}, eN = { key: 2 }, tN = ["aria-label"], iN = ["disabled"], aN = ["disabled"], nN = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ q([]), i = /* @__PURE__ */ q(""), a = /* @__PURE__ */ q(""), n = /* @__PURE__ */ q(!0), r = /* @__PURE__ */ q([]), s = /* @__PURE__ */ q(1), c = /* @__PURE__ */ q(!1), d = /* @__PURE__ */ q(!1), y = /* @__PURE__ */ q(""), v = /* @__PURE__ */ q(""), g = /* @__PURE__ */ q(""), m = /* @__PURE__ */ q(""), k = /* @__PURE__ */ q(""), T = /* @__PURE__ */ q([]), C = /* @__PURE__ */ q(null), x = /* @__PURE__ */ q("guided"), R = /* @__PURE__ */ q(0), L = /* @__PURE__ */ q("%folders%/%title%.%extension%"), P = /* @__PURE__ */ q("all"), N = /* @__PURE__ */ q(!0);
    let pe = 0;
    const Q = z(() => [
      ["title", _("library", "Title")],
      ["subtitle", _("library", "Subtitle")],
      ["author", _("library", "Creators")],
      ["series", _("library", "Series")],
      ["seriesNumber", _("library", "Part in series")],
      ["language", _("library", "Language")],
      ["genre", _("library", "Genre")],
      ["publisher", _("library", "Publisher")],
      ["subject", _("library", "Subjects")],
      ["year", _("library", "Publication year")]
    ]), $ = z(() => Object.fromEntries(Q.value)), H = z(() => ({
      ready: _("library", "Empty field suggestions"),
      conflict: _("library", "Existing values need review"),
      unmatched: _("library", "Unmatched paths"),
      ambiguous: _("library", "Ambiguous matches"),
      invalid: _("library", "Invalid pattern or value"),
      unchanged: _("library", "No changes")
    })), G = z(() => r.value.map((K) => ({ ...K, ...x.value === "folders" ? eO(K.path, k.value, T.value, K.current) : x.value === "guided" ? Qo(K.path, C.value, K.current) : bg(K.path, L.value, K.current) }))), J = z(() => G.value.find((K) => K.path === g.value)), le = z(() => G.value.filter((K) => P.value === "all" || K.status === P.value)), B = z(() => [...new Set(r.value.filter((K) => K.path.includes("/")).map((K) => K.path.split("/")[0]))]);
    function W(K) {
      a.value = [a.value.replace(/\/$/, ""), K].filter(Boolean).join("/"), Ue();
    }
    function I() {
      a.value = a.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Ue();
    }
    const j = z(() => G.value.reduce((K, te) => (K[te.status] = (K[te.status] || 0) + 1, K), {})), Z = z(() => i.value !== m.value || a.value.replace(/^\/+|\/+$/g, "") !== k.value), re = z(() => as(g.value));
    function X() {
      !C.value && g.value && (C.value = Jo(g.value));
    }
    function be() {
      C.value = Jo(g.value), R.value++, x.value = "guided";
    }
    function Te(K) {
      C.value = K, R.value++, x.value = "guided";
    }
    function Le(K) {
      Te(K), N.value = !1;
    }
    function Oe(K) {
      L.value = K, x.value = "pattern";
    }
    async function Ue(K = 1) {
      const te = ++pe;
      d.value = !0, y.value = "", r.value = [];
      try {
        const fe = new URLSearchParams();
        i.value && (fe.set("rootId", i.value), fe.set("folder", a.value), fe.set("recursive", n.value ? "1" : "0"), fe.set("page", String(K)));
        const De = await fetch(`${Jt("/apps/library/api/inference/sample")}?${fe}`, { credentials: "same-origin", cache: "no-store" });
        if (!De.ok) throw new Error(_("library", "Could not load this folder. Check its path and your access."));
        const ct = await De.json();
        if (te !== pe) return;
        if (t.value = ct.roots, !i.value && (i.value = String(ct.roots[0]?.id || ""), i.value))
          return Ue();
        m.value !== i.value && (T.value = []), m.value = i.value;
        const ie = ct.roots.find((S) => String(S.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = ct.scope.slice(ie.length).replace(/^\//, ""), r.value = ct.items || [], s.value = ct.page || 1, c.value = !!ct.hasNext, v.value = ct.scope || "", g.value = r.value[0]?.path || "", X();
      } catch (fe) {
        te === pe && (y.value = fe.message);
      } finally {
        te === pe && (d.value = !1);
      }
    }
    function Xe(K) {
      K.rootId === m.value && (T.value = K.assignments);
    }
    function Se() {
      a.value = "", Ue();
    }
    return xt(() => Ue()), (K, te) => (h(), p("section", {
      class: "library-inference",
      "aria-label": u(_)("library", "Extract metadata from paths"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h1", null, [
        de(Ke, {
          text: u(_)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: ke(() => [
            ae(o(u(_)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      y.value ? (h(), p("p", uO, o(y.value), 1)) : E("", !0),
      d.value ? (h(), p("p", cO, o(u(_)("library", "Loading or saving…")), 1)) : E("", !0),
      l("section", dO, [
        l("h2", null, o(u(_)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: te[3] || (te[3] = Ce((fe) => Ue(), ["prevent"]))
        }, [
          l("label", null, [
            de(Ke, {
              text: u(_)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: ke(() => [
                ae(o(u(_)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            ye(l("select", {
              "onUpdate:modelValue": te[0] || (te[0] = (fe) => i.value = fe),
              disabled: d.value || !t.value.length,
              onChange: Se
            }, [
              (h(!0), p(Y, null, he(t.value, (fe) => (h(), p("option", {
                key: fe.id,
                value: String(fe.id)
              }, o(fe.label), 9, hO))), 128))
            ], 40, fO), [
              [nt, i.value]
            ])
          ]),
          l("label", null, [
            ae(o(u(_)("library", "Subfolder relative to this root")), 1),
            ye(l("input", {
              "onUpdate:modelValue": te[1] || (te[1] = (fe) => a.value = fe),
              type: "text",
              disabled: d.value,
              placeholder: u(_)("library", "Leave empty for the whole root")
            }, null, 8, pO), [
              [ze, a.value]
            ])
          ]),
          l("label", vO, [
            ye(l("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (fe) => n.value = fe),
              type: "checkbox",
              disabled: d.value
            }, null, 8, bO), [
              [sa, n.value]
            ]),
            ae(o(u(_)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: d.value || !i.value
          }, o(u(_)("library", "Load sample")), 9, gO)
        ], 32),
        v.value ? (h(), p("p", mO, o(v.value), 1)) : E("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(_)("library", "Folders in this sample")
        }, [
          a.value ? (h(), p("button", {
            key: 0,
            class: "button secondary",
            disabled: d.value,
            onClick: I
          }, o(u(_)("library", "Parent folder")), 9, _O)) : E("", !0),
          (h(!0), p(Y, null, he(B.value, (fe) => (h(), p("button", {
            key: fe,
            class: "button secondary",
            disabled: d.value,
            onClick: (De) => W(fe)
          }, o(fe) + "/", 9, wO))), 128))
        ], 8, yO)
      ]),
      r.value.length ? (h(), p("section", kO, [
        l("h2", null, o(u(_)("library", "2. Describe the structure")), 1),
        l("div", SO, [
          l("div", CO, [
            l("div", TO, [
              l("label", null, [
                de(Ke, {
                  text: u(_)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: ke(() => [
                    ae(o(u(_)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ye(l("select", {
                  "onUpdate:modelValue": te[4] || (te[4] = (fe) => g.value = fe),
                  onChange: te[5] || (te[5] = (fe) => X())
                }, [
                  (h(!0), p(Y, null, he(r.value, (fe) => (h(), p("option", {
                    key: fe.id,
                    value: fe.path
                  }, o(fe.path), 9, AO))), 128))
                ], 544), [
                  [nt, g.value]
                ])
              ])
            ]),
            de(sO, {
              path: g.value,
              sample: r.value,
              rule: x.value === "guided" ? C.value : null,
              onChoose: Le
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: N.value,
              onToggle: te[9] || (te[9] = (fe) => N.value = fe.target.open)
            }, [
              l("summary", null, o(u(_)("library", "Edit pattern")), 1),
              l("label", null, [
                ae(o(u(_)("library", "Rule editor")), 1),
                ye(l("select", {
                  "onUpdate:modelValue": te[6] || (te[6] = (fe) => x.value = fe)
                }, [
                  l("option", $O, o(u(_)("library", "Guided assignments")), 1),
                  l("option", xO, o(u(_)("library", "Advanced pattern")), 1),
                  l("option", OO, o(u(_)("library", "Folder rules")), 1)
                ], 512), [
                  [nt, x.value]
                ])
              ]),
              x.value === "folders" ? (h(), Fe(Q4, {
                key: 0,
                "root-id": m.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: d.value,
                "scope-pending": Z.value,
                onLoaded: Xe
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : E("", !0),
              x.value === "guided" && C.value ? (h(), p(Y, { key: 1 }, [
                de(Lp, {
                  mode: "guided",
                  rule: C.value,
                  "request-token": e.requestToken,
                  onChooseRule: Te
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: be
                }, o(u(_)("library", "Reset assignments from this example")), 1),
                re.value.length !== C.value.parts.length ? (h(), p("p", NO, o(u(_)("library", "This example has a different folder depth and does not match the rule.")), 1)) : E("", !0),
                (h(!0), p(Y, null, he(C.value.parts, (fe, De) => (h(), p("div", {
                  key: `${R.value}-${De}`
                }, [
                  l("h3", null, o(De === C.value.parts.length - 1 ? u(_)("library", "Filename") : u(_)("library", "Folder")) + " " + o(De + 1), 1),
                  de(S4, {
                    node: fe,
                    value: re.value[De] || "",
                    fields: Q.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", RO, [
                  ye(l("input", {
                    "onUpdate:modelValue": te[7] || (te[7] = (fe) => C.value.combineAuthors = fe),
                    type: "checkbox"
                  }, null, 512), [
                    [sa, C.value.combineAuthors]
                  ]),
                  de(Ke, {
                    text: u(_)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(_)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: ke(() => [
                      ae(o(u(_)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : E("", !0),
              x.value === "pattern" ? (h(), p("details", IO, [
                l("summary", null, o(u(_)("library", "Pattern and presets")), 1),
                de(Lp, {
                  pattern: L.value,
                  "request-token": e.requestToken,
                  onChoose: Oe
                }, {
                  default: ke(() => [
                    l("label", null, [
                      de(Ke, {
                        text: u(_)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + Q.value.map((fe) => `%${fe[0]}%`).join(" · ")
                      }, {
                        default: ke(() => [
                          ae(o(u(_)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": te[8] || (te[8] = (fe) => L.value = fe),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [ze, L.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : E("", !0)
            ], 40, EO)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(_)("library", "Live preview")
          }, [
            l("h3", null, o(u(_)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: g.value
            }, o(g.value), 9, PO),
            J.value ? (h(), p("div", DO, [
              l("p", FO, o(H.value[J.value.status]), 1),
              x.value === "folders" ? (h(), Fe(vd, {
                key: 0,
                result: J.value,
                labels: $.value,
                statuses: H.value
              }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
              J.value.changes.length ? (h(), p("dl", MO, [
                (h(!0), p(Y, null, he(J.value.changes, (fe) => (h(), p("div", {
                  key: fe.field,
                  class: Ee(["library-inference-live-field", `library-inference-live-field--${fe.status}`])
                }, [
                  l("dt", null, o($.value[fe.field]), 1),
                  l("dd", null, [
                    fe.field === "author" && fe.values ? (h(), p("span", UO, [
                      (h(!0), p(Y, null, he(fe.values, (De) => (h(), p("strong", {
                        key: De,
                        dir: "auto"
                      }, o(De), 1))), 128))
                    ])) : (h(), p("strong", zO, o(fe.value || "—"), 1)),
                    l("small", null, [
                      ae(o(u(_)("library", "Current value")) + ": ", 1),
                      l("span", jO, o(fe.before || "—"), 1)
                    ]),
                    fe.raw !== fe.value ? (h(), p("small", BO, [
                      ae(o(u(_)("library", "Source text")) + ": ", 1),
                      l("span", HO, o(fe.raw), 1)
                    ])) : E("", !0),
                    l("small", null, o(H.value[fe.status]), 1),
                    fe.sources ? (h(), p("small", VO, o(u(_)("library", "Matched rule")) + ": " + o(fe.sources.map((De) => De.name).join(", ")), 1)) : E("", !0)
                  ])
                ], 2))), 128))
              ])) : J.value.conflicts?.length ? E("", !0) : (h(), p("p", qO, o(u(_)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : E("", !0),
            x.value === "pattern" ? (h(), p("details", GO, [
              l("summary", null, o(u(_)("library", "Active pattern")), 1),
              l("code", KO, o(L.value), 1)
            ])) : E("", !0)
          ], 8, LO)
        ])
      ])) : E("", !0),
      l("section", WO, [
        l("h2", null, o(u(_)("library", "3. Review the sample")), 1),
        l("label", null, [
          de(Ke, {
            text: u(_)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: ke(() => [
              ae(o(u(_)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ye(l("select", {
            "onUpdate:modelValue": te[10] || (te[10] = (fe) => P.value = fe)
          }, [
            l("option", YO, o(u(_)("library", "All")) + " (" + o(G.value.length) + ")", 1),
            (h(!0), p(Y, null, he(H.value, (fe, De) => (h(), p("option", {
              key: De,
              value: De
            }, o(fe) + " (" + o(j.value[De] || 0) + ")", 9, ZO))), 128))
          ], 512), [
            [nt, P.value]
          ])
        ]),
        !le.value.length && !d.value ? (h(), p("p", XO, o(u(_)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : E("", !0),
        (h(!0), p(Y, null, he(le.value, (fe) => (h(), p("details", {
          key: fe.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", JO, o(fe.path), 1),
            l("strong", null, o(H.value[fe.status]), 1)
          ]),
          x.value === "folders" ? (h(), Fe(vd, {
            key: 0,
            result: fe,
            labels: $.value,
            statuses: H.value
          }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
          fe.changes.length ? (h(), p("div", QO, [
            l("table", null, [
              l("thead", null, [
                l("tr", null, [
                  l("th", null, o(u(_)("library", "Field")), 1),
                  l("th", null, o(u(_)("library", "Current value")), 1),
                  l("th", null, o(u(_)("library", "Proposed value")), 1),
                  l("th", null, o(u(_)("library", "Source text")), 1)
                ])
              ]),
              l("tbody", null, [
                (h(!0), p(Y, null, he(fe.changes, (De) => (h(), p("tr", {
                  key: De.field
                }, [
                  l("th", null, o($.value[De.field]), 1),
                  l("td", null, o(De.before || "—"), 1),
                  l("td", null, [
                    ae(o(De.value), 1),
                    l("small", null, o(H.value[De.status]), 1)
                  ]),
                  l("td", null, o(De.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : fe.conflicts?.length ? E("", !0) : (h(), p("p", eN, o(u(_)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(_)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: d.value || s.value === 1,
            onClick: te[11] || (te[11] = (fe) => Ue(s.value - 1))
          }, o(u(_)("library", "Previous page")), 9, iN),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: d.value || !c.value,
            onClick: te[12] || (te[12] = (fe) => Ue(s.value + 1))
          }, o(u(_)("library", "Next page")), 9, aN)
        ], 8, tN)
      ]),
      de(yg, {
        class: "library-inference-step",
        results: G.value,
        labels: $.value,
        "request-token": e.requestToken,
        disabled: d.value || Z.value,
        context: JSON.stringify({ mode: x.value, pattern: x.value === "pattern" ? L.value : void 0, rule: x.value === "guided" ? C.value : void 0, folderRules: x.value === "folders" ? T.value : void 0, rootId: m.value, folder: k.value }),
        onChanged: te[13] || (te[13] = (fe) => Ue(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      de(t4, {
        definition: { mode: x.value, pattern: L.value, rule: C.value, rootId: m.value, folder: k.value, recursive: n.value },
        labels: $.value,
        statuses: H.value,
        "request-token": e.requestToken,
        disabled: d.value || Z.value || !m.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, oO));
  }
}, rN = ["aria-label", "title", "onClick"], lN = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, sN = { id: "library-sidebar-filters-heading" }, oN = ["aria-label"], uN = ["value"], cN = ["name", "value"], dN = ["value"], fN = ["value"], hN = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, pN = ["title"], vN = ["placeholder"], bN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, gN = { value: "" }, mN = ["value"], yN = { class: "library-publisher-filter" }, _N = { for: "library-publisher-search" }, wN = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], kN = ["value"], SN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, CN = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, TN = ["id", "aria-selected"], AN = ["onClick"], EN = { class: "library-publication-filter" }, $N = { for: "library-publication-search" }, xN = ["placeholder", "aria-expanded"], ON = ["value"], NN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, RN = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, IN = ["onClick"], LN = { class: "library-year-filter" }, PN = { for: "library-year-search" }, DN = ["placeholder", "aria-expanded"], FN = ["value"], MN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, UN = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, zN = ["onClick"], jN = { class: "library-creator-filter" }, BN = { for: "library-creator-search" }, HN = ["placeholder", "title", "aria-expanded"], VN = ["value"], qN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, GN = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, KN = ["onClick"], WN = { class: "library-tag-filter" }, YN = { for: "library-tag-search" }, ZN = ["placeholder", "aria-expanded"], XN = ["value"], JN = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, QN = ["onClick"], eR = { value: "" }, tR = ["value"], iR = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, aR = { value: "" }, nR = ["value"], rR = { class: "library-folder-filter" }, lR = { for: "library-folder-search" }, sR = ["placeholder", "title", "aria-expanded"], oR = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, uR = ["onClick"], cR = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, dR = { value: "" }, fR = ["value"], hR = { value: "" }, pR = ["value"], vR = { class: "library-subject-filter" }, bR = { for: "library-subject-search" }, gR = ["placeholder", "title", "aria-expanded"], mR = ["value"], yR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, _R = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, wR = ["onClick"], kR = { class: "library-classification-filter" }, SR = { for: "library-classification-search" }, CR = ["placeholder", "title", "aria-expanded"], TR = ["value"], AR = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, ER = ["onClick"], $R = { value: "" }, xR = { value: "1" }, OR = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, NR = {
  type: "submit",
  class: "button primary"
}, RR = ["href"], IR = ["lang", "dir"], LR = ["aria-label"], PR = ["href", "aria-label", "title", "onClick"], DR = ["title"], FR = ["href"], MR = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, UR = { class: "library-review-header" }, zR = { class: "library-muted library-catalogue-eyebrow" }, jR = { id: "library-review-heading" }, BR = ["aria-label"], HR = ["href", "aria-current", "onClick"], VR = ["aria-label"], qR = ["name", "value"], GR = {
  type: "submit",
  class: "button secondary"
}, KR = ["aria-busy"], WR = { key: 0 }, YR = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, ZR = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, XR = { class: "library-metadata-review-workbench-copy" }, JR = { class: "library-muted library-catalogue-eyebrow" }, QR = ["title"], eI = {
  key: 0,
  class: "library-metadata-review-card"
}, tI = {
  class: "library-bidi-human",
  dir: "auto"
}, iI = { class: "library-muted" }, aI = {
  class: "library-bidi-machine",
  dir: "ltr"
}, nI = { class: "library-metadata-review-fields" }, rI = {
  class: "library-bidi-human",
  dir: "auto"
}, lI = {
  class: "library-bidi-human",
  dir: "auto"
}, sI = {
  class: "library-bidi-human",
  dir: "auto"
}, oI = {
  class: "library-bidi-machine",
  dir: "ltr"
}, uI = {
  class: "library-bidi-human",
  dir: "auto"
}, cI = {
  class: "library-bidi-human",
  dir: "auto"
}, dI = ["action"], fI = ["value"], hI = ["value"], pI = ["disabled", "title"], vI = { class: "library-metadata-review-actions" }, bI = ["href"], gI = ["href"], mI = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, yI = ["href"], _I = ["aria-label"], wI = ["onClick"], kI = {
  class: "library-bidi-human",
  dir: "auto"
}, SI = {
  key: 0,
  class: "library-muted"
}, CI = {
  class: "library-bidi-human",
  dir: "auto"
}, TI = {
  key: 1,
  class: "library-scan-error"
}, AI = {
  class: "library-bidi-human",
  dir: "auto"
}, EI = ["onClick"], $I = ["href", "onClick"], xI = ["aria-label"], OI = ["href"], NI = {
  key: 1,
  class: "library-muted"
}, RI = { key: 0 }, II = ["href"], LI = {
  key: 3,
  class: "library-muted"
}, PI = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, DI = { class: "library-home-header" }, FI = { class: "library-muted library-catalogue-eyebrow" }, MI = { id: "library-home-heading" }, UI = ["aria-label"], zI = ["aria-label"], jI = ["href", "aria-label", "onClick"], BI = ["title"], HI = { class: "library-empty-actions" }, VI = ["href"], qI = ["href"], GI = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, KI = { id: "library-continue-heading" }, WI = ["href"], YI = {
  key: 0,
  class: "library-home-card-row"
}, ZI = ["aria-label", "onClick"], XI = { class: "library-cover-frame" }, JI = ["src"], QI = { class: "library-cover-summary" }, eL = ["onClick"], tL = { dir: "auto" }, iL = {
  key: 0,
  class: "library-cover-creator"
}, aL = { dir: "auto" }, nL = ["href", "onClick"], rL = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, lL = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, sL = { id: "library-recent-heading" }, oL = ["href"], uL = {
  key: 0,
  class: "library-home-card-row"
}, cL = ["aria-label", "onClick"], dL = { class: "library-cover-frame" }, fL = ["src"], hL = { class: "library-cover-summary" }, pL = ["onClick"], vL = { dir: "auto" }, bL = {
  key: 0,
  class: "library-cover-creator"
}, gL = { dir: "auto" }, mL = ["href", "onClick"], yL = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, _L = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, wL = { id: "library-home-shelves-heading" }, kL = ["href"], SL = ["aria-label"], CL = ["href"], TL = { dir: "auto" }, AL = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, EL = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, $L = { id: "library-home-attention-heading" }, xL = { class: "library-muted" }, OL = ["href"], NL = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, RL = { class: "library-home-header" }, IL = { class: "library-muted library-catalogue-eyebrow" }, LL = { id: "library-shelves-landing-heading" }, PL = ["aria-label"], DL = ["aria-label"], FL = ["href", "aria-label", "onClick"], ML = ["title"], UL = { class: "library-empty-actions" }, zL = ["href"], jL = ["href"], BL = ["aria-label"], HL = { class: "library-shelf-tree" }, VL = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, qL = { class: "library-muted" }, GL = { class: "library-empty-actions" }, KL = ["href"], WL = ["href"], YL = ["aria-busy"], ZL = { class: "library-catalogue-header" }, XL = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, JL = ["aria-label"], QL = { class: "library-mobile-filter-count" }, eP = ["aria-label"], tP = ["value"], iP = ["name", "value"], aP = { class: "library-mobile-filter-group" }, nP = { class: "library-quick-filter-search" }, rP = ["placeholder"], lP = { value: "" }, sP = ["value"], oP = { class: "library-publisher-filter" }, uP = { for: "library-mobile-publisher-search" }, cP = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], dP = ["value"], fP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, hP = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, pP = ["id", "aria-selected"], vP = ["onClick"], bP = { class: "library-publication-filter" }, gP = { for: "library-mobile-publication-search" }, mP = ["placeholder", "aria-expanded"], yP = ["value"], _P = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, wP = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, kP = ["onClick"], SP = { class: "library-year-filter" }, CP = { for: "library-mobile-year-search" }, TP = ["placeholder", "aria-expanded"], AP = ["value"], EP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, $P = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, xP = ["onClick"], OP = { class: "library-creator-filter" }, NP = { for: "library-mobile-creator-search" }, RP = ["placeholder", "title", "aria-expanded"], IP = ["value"], LP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, PP = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, DP = ["onClick"], FP = { value: "" }, MP = ["value"], UP = { class: "library-subject-filter" }, zP = { for: "library-mobile-subject-search" }, jP = ["placeholder", "title", "aria-expanded"], BP = ["value"], HP = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, VP = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, qP = ["onClick"], GP = { class: "library-classification-filter" }, KP = { for: "library-mobile-classification-search" }, WP = ["placeholder", "title", "aria-expanded"], YP = ["value"], ZP = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, XP = ["onClick"], JP = { class: "library-mobile-filter-group" }, QP = { value: "" }, e8 = ["value"], t8 = { class: "library-folder-filter" }, i8 = { for: "library-mobile-folder-search" }, a8 = ["placeholder", "title", "aria-expanded"], n8 = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, r8 = ["onClick"], l8 = { class: "library-mobile-filter-group" }, s8 = { value: "" }, o8 = ["value"], u8 = { value: "" }, c8 = ["value"], d8 = { value: "" }, f8 = { value: "1" }, h8 = { class: "library-mobile-filter-group" }, p8 = { class: "library-tag-filter" }, v8 = { for: "library-tag-search" }, b8 = ["placeholder", "aria-expanded"], g8 = ["value"], m8 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, y8 = ["onClick"], _8 = { value: "title" }, w8 = { value: "recent" }, k8 = { value: "publicationDate" }, S8 = { value: "publication" }, C8 = { value: "lastOpened" }, T8 = { value: "format" }, A8 = { value: "compact" }, E8 = { value: "list" }, $8 = { class: "library-mobile-filter-actions" }, x8 = ["href"], O8 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, N8 = ["aria-label"], R8 = { class: "library-catalogue-control-band" }, I8 = {
  id: "library-collections",
  class: "library-saved-collections"
}, L8 = ["title"], P8 = ["action", "title"], D8 = ["value"], F8 = ["value"], M8 = { class: "library-control-label" }, U8 = ["placeholder", "disabled"], z8 = ["disabled", "title"], j8 = ["aria-label"], B8 = ["name", "value"], H8 = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, V8 = { value: "title" }, q8 = { value: "recent" }, G8 = { value: "publicationDate" }, K8 = { value: "publication" }, W8 = { value: "lastOpened" }, Y8 = { value: "format" }, Z8 = ["aria-label"], X8 = ["aria-pressed"], J8 = ["aria-pressed"], Q8 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, e5 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, t5 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, i5 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, a5 = { key: 0 }, n5 = { key: 1 }, r5 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, l5 = { class: "library-muted library-catalogue-eyebrow" }, s5 = ["title"], o5 = ["aria-label"], u5 = { key: 0 }, c5 = { key: 1 }, d5 = { key: 2 }, f5 = ["aria-label"], h5 = { key: 0 }, p5 = { key: 1 }, v5 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, b5 = { class: "library-muted library-catalogue-eyebrow" }, g5 = ["title"], m5 = ["aria-label"], y5 = ["href"], _5 = {
  key: 0,
  class: "library-notice"
}, w5 = { class: "library-publication-issue-label" }, k5 = ["href"], S5 = { class: "library-muted" }, C5 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, T5 = ["title"], A5 = ["href"], E5 = { class: "library-catalogue-status-row" }, $5 = { class: "library-muted library-filter-result-summary" }, x5 = ["aria-label"], O5 = { class: "library-pagination-range" }, N5 = { key: 0 }, R5 = ["href"], I5 = {
  key: 1,
  class: "library-muted"
}, L5 = ["href"], P5 = {
  key: 3,
  class: "library-muted"
}, D5 = ["title"], F5 = { class: "library-empty-actions" }, M5 = ["href"], U5 = { class: "library-muted" }, z5 = ["title"], j5 = { class: "library-empty-actions" }, B5 = ["href"], H5 = ["title"], V5 = ["aria-label"], q5 = ["href", "aria-label", "onClick"], G5 = ["title"], K5 = {
  key: 1,
  class: "library-muted"
}, W5 = { class: "library-empty-actions" }, Y5 = ["href"], Z5 = ["title"], X5 = { class: "library-empty-actions" }, J5 = ["href"], Q5 = ["aria-label"], eD = { class: "library-list-selection-actions" }, tD = { class: "library-select-visible" }, iD = ["checked"], aD = ["title"], nD = {
  key: 0,
  "aria-live": "polite"
}, rD = ["aria-label"], lD = { value: "" }, sD = { value: "tag" }, oD = { value: "untag" }, uD = { value: "edit" }, cD = { value: "covers" }, dD = { value: "reset" }, fD = ["action"], hD = ["value"], pD = ["placeholder"], vD = ["title"], bD = ["action"], gD = ["value"], mD = ["placeholder"], yD = ["title"], _D = ["action"], wD = ["value"], kD = ["name", "value"], SD = ["title"], CD = ["action"], TD = ["value"], AD = ["name", "value"], ED = { name: "bulkEditField" }, $D = { value: "publicationType" }, xD = { value: "subtitle" }, OD = { value: "creators" }, ND = { value: "publication" }, RD = { value: "series" }, ID = { value: "seriesNumber" }, LD = { value: "genre" }, PD = { value: "publicationDate" }, DD = { value: "language" }, FD = { value: "publisher" }, MD = { value: "subjects" }, UD = { value: "classifications" }, zD = ["placeholder"], jD = ["title"], BD = ["action"], HD = ["value"], VD = ["name", "value"], qD = ["title"], GD = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, KD = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, WD = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, YD = { class: "hidden-visually" }, ZD = { class: "library-catalogue-list-selection" }, XD = { class: "hidden-visually" }, JD = { class: "library-catalogue-list-cover-heading" }, QD = { class: "hidden-visually" }, eF = { scope: "col" }, tF = { scope: "col" }, iF = { scope: "col" }, aF = { scope: "col" }, nF = { scope: "col" }, rF = { scope: "col" }, lF = { scope: "col" }, sF = { class: "library-catalogue-list-selection" }, oF = { class: "library-item-selection" }, uF = ["checked", "aria-label", "onChange"], cF = { class: "library-catalogue-list-cover-cell" }, dF = ["aria-label", "onClick"], fF = ["src"], hF = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, pF = ["onClick"], vF = {
  class: "library-bidi-human",
  dir: "auto"
}, bF = ["href"], gF = { class: "library-catalogue-list-creators" }, mF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, yF = ["aria-label"], _F = ["datetime"], wF = ["aria-label"], kF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, SF = ["aria-label"], CF = ["dir"], TF = ["aria-label"], AF = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, EF = ["aria-label"], $F = { class: "library-catalogue-list-actions" }, xF = ["href", "onClick"], OF = ["onClick"], NF = { class: "library-item-selection" }, RF = ["checked", "aria-label", "onChange"], IF = ["aria-labelledby", "aria-expanded", "onClick"], LF = ["id"], PF = ["action", "onSubmit"], DF = ["value"], FF = ["value"], MF = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], UF = ["data-library-star-error"], zF = { class: "library-cover-summary" }, jF = { class: "library-cover-primary" }, BF = ["href"], HF = ["id"], VF = ["onClick"], qF = {
  class: "library-bidi-human",
  dir: "auto"
}, GF = {
  key: 1,
  class: "library-cover-creator"
}, KF = {
  class: "library-bidi-human",
  dir: "auto"
}, WF = {
  key: 2,
  class: "library-cover-context"
}, YF = {
  class: "library-bidi-human",
  dir: "auto"
}, ZF = ["aria-label"], XF = { class: "library-pagination-range" }, JF = { key: 0 }, QF = ["href"], eM = {
  key: 1,
  class: "library-muted"
}, tM = ["href"], iM = {
  key: 3,
  class: "library-muted"
}, aM = { class: "library-sidebar-content" }, nM = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, rM = ["role"], lM = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, sM = { class: "library-sidebar-publication-header" }, oM = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, uM = ["src"], cM = { class: "library-sidebar-publication-summary" }, dM = { class: "library-muted library-catalogue-eyebrow" }, fM = {
  class: "library-bidi-human",
  dir: "auto"
}, hM = { key: 0 }, pM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, vM = { class: "library-detail-drawer-actions" }, bM = ["href"], gM = ["aria-label"], mM = ["aria-current", "onClick"], yM = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, _M = { id: "library-sidebar-overview-heading" }, wM = {
  key: 0,
  class: "library-sidebar-description"
}, kM = {
  class: "library-bidi-human",
  dir: "auto"
}, SM = { class: "library-detail-drawer-facts" }, CM = { key: 0 }, TM = ["href", "title"], AM = {
  class: "library-bidi-human",
  dir: "auto"
}, EM = { key: 1 }, $M = ["href", "title"], xM = { key: 1 }, OM = { key: 2 }, NM = { key: 2 }, RM = ["href", "title"], IM = {
  class: "library-bidi-human",
  dir: "auto"
}, LM = { key: 3 }, PM = { class: "library-detail-facet-list" }, DM = ["href", "title", "onClick"], FM = {
  class: "library-bidi-machine",
  dir: "ltr"
}, MM = { key: 4 }, UM = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, zM = { id: "library-sidebar-metadata-heading" }, jM = ["placeholder"], BM = ["onUpdate:modelValue", "aria-label", "placeholder"], HM = ["onUpdate:modelValue", "aria-label"], VM = ["onClick"], qM = {
  key: 0,
  role: "alert"
}, GM = {
  key: 1,
  role: "status"
}, KM = ["disabled"], WM = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, YM = { id: "library-sidebar-suggestions-heading" }, ZM = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, XM = { id: "library-sidebar-activity-heading" }, JM = { class: "library-detail-drawer-facts" }, QM = { key: 0 }, e9 = { key: 1 }, t9 = { key: 2 }, i9 = { class: "library-detail-drawer-file" }, a9 = ["href"], n9 = { dir: "ltr" }, r9 = {
  key: 1,
  dir: "ltr"
}, l9 = ["aria-label"], s9 = ["href"], o9 = { dir: "auto" }, u9 = ["aria-label"], c9 = ["href"], d9 = { dir: "auto" }, f9 = ["aria-label"], h9 = ["disabled"], p9 = ["disabled"], v9 = 20, b9 = "/apps/library", g9 = 2147483647, m9 = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = z_(_, () => `${us()}:${ob()}`), i = e, a = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
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
    function s(w, b) {
      return Object.prototype.hasOwnProperty.call(r, w) && String(b ?? "").trim() === r[w];
    }
    function c(w) {
      const b = new URLSearchParams(w);
      for (const f of Object.keys(r)) {
        const F = [...new Set([...b.keys()].filter((xe) => xe === f || xe.startsWith(`${f}[`)))], ve = F.reduce((xe, Be) => xe + b.getAll(Be).length, 0);
        if (ve > 1 || F.some((xe) => xe !== f)) {
          for (const xe of F) b.delete(xe);
          continue;
        }
        f !== "status" && ve === 1 && !s(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function d(w) {
      return Object.keys(r).some((b) => w.getAll(b).length === 1 && s(b, w.get(b)));
    }
    function y(w) {
      return Object.fromEntries(Object.entries(w || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || s(b, f)));
    }
    const v = Object.freeze(["compact", "list"]);
    function g(w) {
      return v.includes(w) ? w : "compact";
    }
    const m = /* @__PURE__ */ Nt({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Nt((m.items || []).map((w) => ({ ...w }))), T = z(() => k), C = z(() => m.shelves || []), x = z(() => m.formats || []), R = z(() => m.publicationTypes?.length ? m.publicationTypes : a), L = z(() => m.publications || []), P = z(() => m.publicationIssueContext || null), N = z(() => m.scanStatuses || []), pe = z(() => m.workflowStatuses || []), Q = z(() => m.cataloguePagination || {
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
    for (const w of Object.keys(r))
      w !== "status" && (s(w, $[w]) || ($[w] = ""));
    const H = /* @__PURE__ */ q($.publication), G = /* @__PURE__ */ q($.q), J = /* @__PURE__ */ q(!1), le = /* @__PURE__ */ q(null), B = z(() => {
      const w = H.value.trim().toLocaleLowerCase();
      return (w !== "" && le.value !== null ? le.value : L.value).filter((f) => w === "" || f.toLocaleLowerCase().includes(w)).slice(0, v9);
    });
    Ge(() => $.publication, (w) => {
      H.value = w || "";
    }), Ge(() => $.q, (w) => {
      G.value = w || "";
    });
    let W = null, I = null, j = 0;
    Ge(H, (w) => {
      window.clearTimeout(W), I?.abort(), I = null, le.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++j;
      W = window.setTimeout(() => {
        Zg(b, f);
      }, 200);
    });
    const Z = /* @__PURE__ */ q($.publisher), re = /* @__PURE__ */ q(!1), X = /* @__PURE__ */ q(null), be = z(() => X.value || []);
    Ge(() => $.publisher, (w) => {
      Z.value = w || "";
    });
    let Te = null, Le = null, Oe = 0;
    Ge(Z, (w) => {
      window.clearTimeout(Te), Le?.abort(), Le = null, X.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++Oe;
      Te = window.setTimeout(() => {
        Vg(b, f);
      }, 200);
    });
    const Ue = /* @__PURE__ */ q($.creator), Xe = /* @__PURE__ */ q(!1), Se = /* @__PURE__ */ q(null), K = z(() => Se.value || []);
    Ge(() => $.creator, (w) => {
      Ue.value = w || "";
    });
    let te = null, fe = null, De = 0;
    Ge(Ue, (w) => {
      window.clearTimeout(te), fe?.abort(), fe = null, Se.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++De;
      te = window.setTimeout(() => {
        Hg(b, f);
      }, 200);
    });
    const ct = /* @__PURE__ */ q($.folder), ie = /* @__PURE__ */ q(!1), S = /* @__PURE__ */ q(null), O = z(() => S.value || []);
    Ge(() => $.folder, (w) => {
      ct.value = w || "";
    });
    let D = null, V = null, U = 0;
    Ge(ct, (w) => {
      window.clearTimeout(D), V?.abort(), V = null, S.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++U;
      D = window.setTimeout(() => {
        Wg(b, f);
      }, 200);
    });
    const ee = /* @__PURE__ */ q($.subject), ne = /* @__PURE__ */ q(!1), oe = /* @__PURE__ */ q(null), me = z(() => oe.value || []);
    Ge(() => $.subject, (w) => {
      ee.value = w || "";
    });
    let ue = null, Ne = null, we = 0;
    Ge(ee, (w) => {
      window.clearTimeout(ue), Ne?.abort(), Ne = null, oe.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++we;
      ue = window.setTimeout(() => {
        qg(b, f);
      }, 200);
    });
    const $e = /* @__PURE__ */ q($.classification), Re = /* @__PURE__ */ q(!1), Ve = /* @__PURE__ */ q(null), Ze = z(() => Ve.value || []);
    Ge(() => $.classification, (w) => {
      $e.value = w || "";
    });
    let qe = null, at = null, dt = 0;
    Ge($e, (w) => {
      window.clearTimeout(qe), at?.abort(), at = null, Ve.value = null;
      const b = String(w || "").trim();
      if (b.length < 3) return;
      const f = ++dt;
      qe = window.setTimeout(() => {
        Gg(b, f);
      }, 200);
    });
    const _t = /* @__PURE__ */ q($.tag), bt = /* @__PURE__ */ q(!1), ii = /* @__PURE__ */ q(null), vi = z(() => ii.value || []);
    Ge(() => $.tag, (w) => {
      _t.value = w || "";
    });
    let kt = null, Ot = null, Ui = 0;
    Ge(_t, (w) => {
      window.clearTimeout(kt), Ot?.abort(), Ot = null, ii.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const f = ++Ui;
      kt = window.setTimeout(() => {
        Kg(b, f);
      }, 200);
    });
    const qt = /* @__PURE__ */ q($.year), bi = /* @__PURE__ */ q(!1), An = /* @__PURE__ */ q(null), Yi = z(() => An.value || []);
    Ge(() => $.year, (w) => {
      qt.value = w || "";
    });
    let En = null, Ai = null, Zi = 0;
    Ge(qt, (w) => {
      window.clearTimeout(En), Ai?.abort(), Ai = null, An.value = null;
      const b = String(w || "").trim();
      if (b.length < 2) return;
      const f = ++Zi;
      En = window.setTimeout(() => {
        Yg(b, f);
      }, 200);
    });
    const Xi = Object.fromEntries(Object.keys($).map((w) => [w, w === "sort" ? "title" : w === "view" ? "compact" : ""])), Lr = window.location.pathname.indexOf(b9), da = Lr >= 0 ? window.location.pathname.slice(0, Lr) : "", Ga = {
      catalogue: `${da}/apps/library/`,
      review: `${da}/apps/library/?scannerConflicts=1`,
      settings: `${da}/settings/user/library`
    };
    function Ka(w, b) {
      if (typeof w != "string" || w === "") return b;
      try {
        const f = da ? `${da}/` : "/";
        let F = w;
        for (let ve = 0; ve < 5; ve += 1) {
          if (!F.startsWith("/") || F.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(F)) return b;
          const xe = new URL(F, window.location.origin);
          if (xe.origin !== window.location.origin || !xe.pathname.startsWith(f)) return b;
          const Be = F.split(/[?#]/, 1)[0];
          for (const wi of Be.split("/")) {
            let Ji = wi;
            for (let br = 0; br < 5; br += 1) {
              const Qi = decodeURIComponent(Ji);
              if (/[\\/\u0000-\u001f\u007f]/.test(Qi) || Qi === "." || Qi === "..") return b;
              if (Qi === Ji) break;
              if (Ji = Qi, br === 4) return b;
            }
          }
          const et = decodeURI(F);
          if (et === F) return w;
          F = et;
        }
        return b;
      } catch {
        return b;
      }
    }
    const Wa = z(() => Ka(m.settingsUrl, Ga.settings)), ft = z(() => Ka(m.catalogueRootUrl, Ga.catalogue)), rr = z(() => Ka(m.homeUrl, `${Ga.catalogue}?home=1`)), gi = z(() => Ka(m.shelvesUrl, `${Ga.catalogue}?shelves=1`)), fa = z(() => Ka(m.reviewUrl || m.scannerConflictReviewUrl, Ga.review)), Ya = z(() => Object.entries(r).some(([w, b]) => $[w] === b)), lr = z(() => n.reduce((w, b) => w + Number(Vu.value[b.countKey] || 0), 0)), $n = z(() => m.surface === "home"), Za = z(() => m.surface === "shelves"), ha = z(() => m.surface === "duplicates"), Xa = z(() => m.surface === "inference"), pa = z(() => m.surface === "authors"), xn = z(() => m.surface === "lists"), Ei = z(() => `${ft.value}?lists=1`), Su = Number(new URLSearchParams(window.location.search).get("addToList")) || null, ds = /* @__PURE__ */ q([]), rt = /* @__PURE__ */ q("");
    async function va() {
      try {
        ds.value = (await bn()).lists;
      } catch {
      }
    }
    xt(va);
    const Cu = z(() => !pa.value && !ha.value && !Xa.value && !xn.value && !$n.value && !Za.value && !Ya.value && !$.starred && $.recentlyOpened !== "1" && !$.shelf), fs = z(() => [
      { key: "home", name: t("library", "Home"), href: rr.value, active: $n.value },
      { key: "all", name: t("library", "All publications"), href: ft.value, active: Cu.value },
      { key: "starred", name: t("library", "Starred"), href: `${ft.value}?starred=1`, active: $.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${ft.value}?recentlyOpened=1&sort=lastOpened`, active: $.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: gi.value, active: Za.value || !!$.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${ft.value}#library-collections`, active: !1 }
    ]), Pr = z(() => Vr.value.map((w) => ({
      key: `collection-${w.id}`,
      rawName: w.name,
      id: w.id,
      name: w.countPending ? w.name : `${w.name} (${Rt("library", "%n item", "%n items", Number(w.count || 0))})`,
      href: dm(w.filters),
      active: fm(w.filters)
    }))), gt = z(() => m.requestToken || ""), sr = z(() => !!m.duplicateSuggestions), Tu = z(() => JSON.stringify(T.value.map((w) => [w.id, w.title, w.creators, w.publicationDate]))), Au = z(() => JSON.parse(Tu.value).map((w) => Number(w[0]))), { results: ba, status: Eu } = pg(Au, sr, gt);
    function ai(w, b) {
      const f = String(w?.recordOpenUrl || "");
      if (!f || !gt.value) return;
      const F = new URLSearchParams({ requesttoken: gt.value });
      try {
        if (navigator.sendBeacon) {
          const ve = new Blob([F.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(f, ve);
          return;
        }
      } catch {
      }
      fetch(f, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: gt.value },
        body: F,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const or = z(() => m.catalogueEndpointUrl || "/apps/library/catalogue"), Dr = z(() => m.shelfChildrenUrl || "/apps/library/shelves/children"), Ja = z(() => m.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), hs = z(() => m.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Fr = z(() => m.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Mr = z(() => m.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ur = z(() => m.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), $u = z(() => m.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), ps = z(() => m.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), xu = z(() => m.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ou = z(() => m.itemSidebarUrlTemplate || `${da}/apps/library/items/__ITEM_ID__/sidebar`), Nu = z(() => m.batchTagUrl || "/apps/library/bulk/tags"), Ru = z(() => m.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), vs = z(() => m.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Iu = z(() => m.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), bs = z(() => m.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ur = z(() => m.scannerConflictReviewUrl || "?scannerConflicts=1");
    m.importHealthSummary, m.importHealthSummary && Object.keys(m.importHealthSummary).length > 0;
    const Qa = z(() => m.discoveryPage === "publication"), On = z(() => m.discoveryPage === "year"), cr = z(() => m.discoveryPage === "creator"), en = z(() => Qa.value || On.value || cr.value), zi = z(() => m.discoveryTitle || $.publication || $.year || $.creator || ""), Nn = z(() => en.value ? zi.value : t("library", "Library")), di = z(() => cr.value ? t("library", "Creator") : On.value ? t("library", "Publication year") : t("library", "Publication / series")), gs = z(() => Number(m.rootCount || 0)), dr = z(() => Number(m.enabledRootCount || 0)), zr = z(() => gs.value === 0), fr = z(() => gs.value > 0 && dr.value === 0), ga = z(() => mt.value.length > 0), mi = /* @__PURE__ */ q(!1), jr = /* @__PURE__ */ q(null), ms = /* @__PURE__ */ q(null), Br = {
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
    }, Hr = z(() => {
      if (typeof window > "u") return "";
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const b = w.get("batchMetadataField") || "field", f = w.get("batchMetadataApplied") || "0", F = w.get("batchMetadataUnchanged") || "0", ve = w.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: F, skipped: ve });
    }), hr = z(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), tn = z(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Vr = z(() => m.savedCollections || []), ge = z(() => m.savedCollectionSaveUrl || "/apps/library/collections"), A = z(() => m.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), M = v, se = z(() => M.includes($.view) ? $.view : "compact"), ce = z(() => ({
      "library-cover-gallery--compact": se.value === "compact"
    }));
    function Ie(w) {
      const b = String(w || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function Me(w, b) {
      const f = String(b || "").trim();
      if (f === "" || Lu[w] === f) return "";
      if (w === "format") return f.toUpperCase();
      if (w === "folder") return Ie(f);
      const F = Pu[w]?.[f];
      return F ? t("library", F) : f;
    }
    function We(w, b) {
      const f = String($[w] || "").trim(), F = Me(w, f), ve = t("library", b);
      return {
        key: w,
        label: ve,
        value: f,
        displayValue: F,
        title: F ? `${ve}: ${f}` : ve
      };
    }
    const mt = z(() => Object.entries(Br).map(([w, b]) => We(w, b)).filter((w) => w.value !== "" && !(w.key === "sort" && w.value === "title") && !(w.key === "view" && w.value === "compact"))), Ct = z(() => mt.value.filter((w) => !["sort", "view"].includes(w.key))), Tt = z(() => mt.value.length), Dt = z(() => {
      const w = new URLSearchParams();
      for (const f of Ct.value) w.set(f.key, f.value);
      const b = w.toString();
      return `${ft.value}${b ? `?${b}` : ""}`;
    }), $i = z(() => Ct.value[0] || null), Gt = z(() => G.value.trim() !== String($.q || "").trim()), ys = z(() => String($.q || "").trim() !== "" || Gt.value);
    function yi(w) {
      return ({
        q: G,
        publisher: Z,
        publication: H,
        creator: Ue,
        subject: ee,
        year: qt,
        folder: ct,
        classification: $e,
        tag: _t
      }[w]?.value ?? "").trim() !== String($[w] || "").trim();
    }
    function ji(w) {
      return yi(w) ? w === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function ma(w) {
      return { "library-filter-apply--pending": yi(w) };
    }
    const wg = z(() => Tt.value > 0 ? t("library", "Filters ({count})", { count: Tt.value }) : t("library", "Filters")), kg = z(() => Tt.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: Tt.value }) : t("library", "Open filters panel")), Sg = z(() => Rt("library", "Show %n item", "Show %n items", Number(Q.value.total || 0)));
    function Cg(w) {
      mi.value = w.currentTarget?.open === !0, mi.value && It(() => {
        jr.value?.focus?.();
      });
    }
    const Tg = /* @__PURE__ */ new Set([
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
    ]), tf = z(() => Object.entries(y($)).filter(([w, b]) => !Tg.has(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), Ag = z(() => Object.entries($).filter(([w, b]) => !["q", "sort", "starred"].includes(w) && String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), _s = z(() => Object.entries(y($)).filter(([w, b]) => String(b || "").trim() !== "").map(([w, b]) => ({ key: w, value: b }))), Eg = z(() => _s.value.filter(({ key: w, value: b }) => w !== "q" && !(w === "sort" && b === "title"))), ws = z(() => m.homeRows || { continueReading: [], recentlyAdded: [] }), af = z(() => m.homeShelves || []), nf = z(() => m.shelfTree || []), Du = z(() => m.needsAttention || { count: 0, url: `${ft.value}?needsMetadata=1` }), ni = /* @__PURE__ */ q([]), ks = z(() => new Set(ni.value));
    function rf(w, b) {
      const f = new Set(ni.value);
      b ? f.add(Number(w)) : f.delete(Number(w)), ni.value = [...f];
    }
    function $g(w) {
      ni.value = w.currentTarget.checked ? T.value.map((b) => Number(b.id)) : [];
    }
    function xg() {
      const w = new Set(T.value.map((b) => Number(b.id)));
      ni.value = ni.value.filter((b) => w.has(b));
    }
    function Og(w) {
      const b = w.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ni.value) {
          const F = document.createElement("input");
          F.type = "hidden", F.name = "itemIds[]", F.value = String(f), F.dataset.librarySelectedId = "1", b.appendChild(F);
        }
      }
    }
    const Ae = /* @__PURE__ */ q(null), Rn = /* @__PURE__ */ q(null), ri = /* @__PURE__ */ Nt({ loading: !1, error: "", missing: !1 }), In = /* @__PURE__ */ q("overview"), Bi = /* @__PURE__ */ Nt({ saving: !1, saved: !1, error: "" }), yt = /* @__PURE__ */ Nt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), lf = /* @__PURE__ */ q(null), Ln = /* @__PURE__ */ q(null), Pn = /* @__PURE__ */ q(!1);
    let Fu = null, ya = null, Ss = null, Mu = !1, qr = null, Uu = 0;
    const an = z(() => Rn.value !== null), Gr = z(() => Ae.value ? T.value.findIndex((w) => w.id === Ae.value.id) : -1), Cs = z(() => Gr.value > 0 ? T.value[Gr.value - 1] : null), Ts = z(() => Gr.value >= 0 && Gr.value < T.value.length - 1 ? T.value[Gr.value + 1] : null), sf = z(() => Dg(Ae.value?.description || "")), Dn = z(() => Ig(Ae.value?.publicationDate || "")), of = z(() => Lg(Ae.value?.language || "")), Ng = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Rg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Kr(w) {
      const b = String(w ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Ig(w) {
      const f = Kr(w).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Lg(w) {
      return String(w ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function uf(w, b) {
      const f = new URLSearchParams();
      for (const [F, ve] of Object.entries($)) {
        const xe = String(ve || "").trim();
        xe !== "" && !(F === "sort" && xe === "title") && !(F === "view" && xe === "compact") && f.set(F, xe);
      }
      return f.set(w, String(b || "").trim()), f.delete("page"), c(f);
    }
    function As(w, b) {
      const F = uf(w, b).toString();
      return `${ft.value}${F ? `?${F}` : ""}`;
    }
    function Es(w, b, f) {
      const F = String(f || "").trim();
      if (F === "") return;
      w?.preventDefault?.();
      const ve = uf(b, F);
      Yr({ historyMode: "none" }), Kt(null, {
        params: ve,
        generation: ++li,
        historyMode: "push"
      });
    }
    function Pg(w) {
      return String(w ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Dg(w) {
      let b = String(w ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const F = Pg(b);
        if (F === b) break;
        b = F;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function cf(w) {
      return { ...w, publicationDate: Kr(w?.publicationDate) };
    }
    function df(w) {
      for (const b of ["series", "seriesNumber", "genre"]) yt[b] = String(w?.[b] || "");
      yt.title = String(w?.title || ""), yt.publicationDate = Kr(w?.publicationDate), yt.identifiers = Array.isArray(w?.identifiers) ? w.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(Bi, { saving: !1, saved: !1, error: "" });
    }
    function Fg() {
      yt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Mg(w) {
      yt.identifiers.splice(w, 1);
    }
    async function Ug() {
      const w = Ae.value;
      if (!w?.updateUrl || Bi.saving) return;
      Object.assign(Bi, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", gt.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const F = w[f];
        b.set(f, Array.isArray(F) ? F.join(", ") : String(F ?? ""));
      }
      for (const f of ["series", "seriesNumber", "genre"]) b.set(f, yt[f]);
      b.set("title", yt.title), b.set("publicationDate", Kr(yt.publicationDate)), yt.identifiers.forEach((f, F) => {
        b.set(`identifiers[${F}][scheme]`, f.scheme), b.set(`identifiers[${F}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(w.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), F = await f.json().catch(() => ({}));
        if (!f.ok || F.saved !== !0) throw new Error(F.error || t("library", "Metadata could not be saved."));
        for (const xe of ["series", "seriesNumber", "genre"]) w[xe] = yt[xe].trim();
        w.title = yt.title.trim(), w.publicationDate = Kr(yt.publicationDate), w.identifiers = yt.identifiers.filter((xe) => xe.scheme.trim() || xe.displayValue.trim()).map((xe) => ({ ...xe }));
        const ve = T.value.find((xe) => Number(xe.id) === Number(w.id));
        ve && (ve.title = w.title, ve.publicationDate = w.publicationDate), Bi.saved = !0;
      } catch (f) {
        Bi.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        Bi.saving = !1;
      }
    }
    const nn = z(() => {
      const w = s("scannerConflicts", $.scannerConflicts) || s("weakMetadata", $.weakMetadata), b = w ? T.value.find((f) => $s(f).length > 0) : null;
      return {
        enabled: w,
        item: b,
        fields: b ? $s(b) : [],
        reviewNextUrl: ur.value,
        skipUrl: Q.value.nextUrl || ur.value
      };
    }), zg = z(() => n.map((w) => ({
      ...w,
      label: t("library", w.label),
      href: `${ft.value}?${encodeURIComponent(w.key)}=${encodeURIComponent(w.value)}`,
      active: String($[w.key] || "") === w.value
    })));
    function zu(w) {
      return Array.isArray(w) ? JSON.stringify(w) : w == null ? "" : String(w);
    }
    function $s(w) {
      const b = w.fieldValues || {};
      let f = [];
      try {
        f = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(f) || (f = []);
      const F = w.fieldSources || {};
      return Ng.filter((ve) => Object.prototype.hasOwnProperty.call(b, ve)).map((ve) => {
        const xe = zu(w[ve]), Be = zu(b[ve]), et = zu(F[ve] || w.metadataSource || "scanner"), wi = et.includes("filename") || et.includes("path") ? Be : "", Ji = et.includes("sidecar") ? Be : "";
        return { field: ve, currentValue: xe, scannerCandidate: Be, pathTemplateCandidate: wi, sidecarValue: Ji, sourceProvenance: et, rejected: f.includes(ve), differs: xe !== Be };
      }).filter((ve) => ve.differs);
    }
    let Fn = 0, Mn = null;
    function ff() {
      const w = new URLSearchParams(window.location.search).getAll("item");
      if (w.length !== 1 || !/^[1-9][0-9]*$/.test(w[0])) return null;
      const b = Number(w[0]);
      return Number.isSafeInteger(b) && b <= g9 ? b : null;
    }
    function hf(w, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), w !== null && f.searchParams.set("item", String(w)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Wr(w, { historyMode: b = "push", seed: f = null } = {}) {
      Mn?.abort();
      const F = ++Fn, ve = new AbortController();
      Mn = ve, Rn.value = w, In.value = "overview", Ae.value = f && Number(f.id) === w ? cf(f) : null, Ae.value && df(Ae.value), Object.assign(ri, { loading: !0, error: "", missing: !1 }), b !== "none" && hf(w, b);
      try {
        const xe = Ou.value.replace("__ITEM_ID__", encodeURIComponent(String(w))), Be = await fetch(xe, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ve.signal });
        if (F !== Fn) return;
        if (!Be.ok) {
          Ae.value = null, ri.missing = Be.status === 404, ri.error = Be.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const et = await Be.json();
        if (F !== Fn) return;
        if (typeof et?.item?.id != "number" || !Number.isSafeInteger(et.item.id) || et.item.id !== w) {
          Ae.value = null, ri.missing = !1, ri.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Ae.value = cf(et.item), df(Ae.value), await It();
      } catch (xe) {
        F === Fn && xe?.name !== "AbortError" && (Ae.value = null, ri.missing = !1, ri.error = t("library", "Could not load publication details. Try again."));
      } finally {
        F === Fn && (ri.loading = !1, Mn = null);
      }
    }
    function Hi(w, b) {
      ju(), Fu = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Wr(Number(w.id), { seed: w });
    }
    function Yr({ historyMode: w = "push", restoreFocus: b = !0 } = {}) {
      Ss = b ? Fu : null, Fu = null, Mn?.abort(), Mn = null, Fn += 1, Rn.value = null, Ae.value = null, In.value = "overview", Object.assign(ri, { loading: !1, error: "", missing: !1 }), w !== "none" && hf(null, w);
    }
    function pf() {
      Pn.value ? (Ln.value?.$refs?.sidebar || Ln.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : lf.value?.focus();
    }
    function jg() {
      const w = Ss;
      if (Ss = null, ju(), Mu || !w?.isConnected) return;
      const b = Uu;
      qr = window.requestAnimationFrame(() => {
        qr = null, !(b !== Uu || Mu || an.value || !w.isConnected) && w.focus();
      });
    }
    function ju() {
      Uu += 1, qr !== null && (window.cancelAnimationFrame(qr), qr = null);
    }
    function Zr(w = ya) {
      Pn.value = !!w?.matches, an.value && It(pf);
    }
    function xs(w) {
      w && Wr(Number(w.id), { seed: w });
    }
    const Xr = /* @__PURE__ */ q(null);
    let li = 0, pr = null, vr = null, Jr = null, vf = !1, Qr = null;
    const Ft = /* @__PURE__ */ Nt({ loading: !1, error: "", completed: !1 });
    function Bg(w) {
      const b = c(new FormData(w));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Un(w, b, f) {
      const F = new URLSearchParams();
      for (const [Be, et] of Object.entries($)) {
        const wi = String(et || "").trim();
        Be !== w && wi !== "" && !(Be === "sort" && wi === "title") && !(Be === "view" && wi === "compact") && F.set(Be, wi);
      }
      F.set(`${w}Search`, b);
      const ve = new AbortController();
      w === "creator" ? fe = ve : w === "publisher" ? Le = ve : w === "subject" ? Ne = ve : w === "classification" ? at = ve : w === "tag" ? Ot = ve : w === "folder" ? V = ve : Ai = ve;
      const xe = w === "creator" ? hs.value : w === "publisher" ? Fr.value : w === "subject" ? Mr.value : w === "classification" ? Ur.value : w === "tag" ? $u.value : w === "folder" ? ps.value : xu.value;
      try {
        const Be = await fetch(`${xe}?${F}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ve.signal });
        if (!Be.ok) throw new Error(`${w} suggestions request failed: ${Be.status}`);
        const et = await Be.json(), wi = w === "creator" ? De : w === "publisher" ? Oe : w === "subject" ? we : w === "classification" ? dt : w === "tag" ? Ui : w === "folder" ? U : Zi, Ji = w === "creator" ? Ue.value : w === "publisher" ? Z.value : w === "subject" ? ee.value : w === "classification" ? $e.value : w === "tag" ? _t.value : w === "folder" ? ct.value : qt.value;
        f === wi && Ji.trim() === b && (w === "creator" ? Se.value = Array.isArray(et.creators) ? et.creators : [] : w === "publisher" ? X.value = Array.isArray(et.publishers) ? et.publishers : [] : w === "subject" ? oe.value = Array.isArray(et.subjects) ? et.subjects : [] : w === "classification" ? Ve.value = Array.isArray(et.classifications) ? et.classifications : [] : w === "tag" ? ii.value = Array.isArray(et.tags) ? et.tags : [] : w === "folder" ? S.value = Array.isArray(et.folders) ? et.folders : [] : An.value = Array.isArray(et.years) ? et.years : []);
      } catch (Be) {
        Be?.name !== "AbortError" && (w === "creator" && f === De && (Se.value = null), w === "publisher" && f === Oe && (X.value = null), w === "subject" && f === we && (oe.value = null), w === "classification" && f === dt && (Ve.value = null), w === "tag" && f === Ui && (ii.value = null), w === "folder" && f === U && (S.value = null), w === "year" && f === Zi && (An.value = null));
      }
    }
    function Hg(w, b) {
      return Un("creator", w, b);
    }
    function Vg(w, b) {
      return Un("publisher", w, b);
    }
    function qg(w, b) {
      return Un("subject", w, b);
    }
    function Gg(w, b) {
      return Un("classification", w, b);
    }
    function Kg(w, b) {
      return Un("tag", w, b);
    }
    function Wg(w, b) {
      return Un("folder", w, b);
    }
    function Yg(w, b) {
      return Un("year", w, b);
    }
    async function Zg(w, b) {
      const f = new URLSearchParams();
      for (const [ve, xe] of Object.entries($)) {
        const Be = String(xe || "").trim();
        ve !== "publication" && Be !== "" && !(ve === "sort" && Be === "title") && !(ve === "view" && Be === "compact") && f.set(ve, Be);
      }
      f.set("publicationSearch", w);
      const F = new AbortController();
      I = F;
      try {
        const ve = await fetch(`${Ja.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ve.ok) throw new Error(`Publication suggestions request failed: ${ve.status}`);
        const xe = await ve.json();
        b === j && H.value.trim() === w && (le.value = Array.isArray(xe.publications) ? xe.publications : []);
      } catch (ve) {
        ve?.name !== "AbortError" && b === j && (le.value = null);
      } finally {
        b === j && (I = null);
      }
    }
    function Xg(w) {
      k.splice(0, k.length, ...(w.items || []).map((f) => ({ ...f }))), xg();
      const b = new Set(w.facetsDeferred ? [
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
        !b.has(f) && Object.prototype.hasOwnProperty.call(w, f) && (m[f] = w[f]);
      Object.assign($, Xi, w.activeFilters || {}), $.view = g($.view);
    }
    async function Jg() {
      if (m.surface !== "index") return;
      const w = li, b = JSON.stringify({ ...$ }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [ve, xe] of Object.entries($)) {
        const Be = String(xe || "").trim();
        Be !== "" && !(ve === "sort" && Be === "title") && !(ve === "view" && Be === "compact") && f.set(ve, Be);
      }
      const F = new AbortController();
      vr = F;
      try {
        const ve = await fetch(`${or.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ve.ok) return;
        const xe = await ve.json();
        if (w !== li || b !== JSON.stringify({ ...$ })) return;
        for (const Be of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(xe, Be) && (m[Be] = xe[Be]);
      } catch (ve) {
        if (ve?.name !== "AbortError") return;
      } finally {
        vr === F && (vr = null), F.signal.aborted || bf();
      }
    }
    async function bf() {
      if (!Ya.value || vf || Jr) return;
      const w = new AbortController();
      Jr = w;
      try {
        const b = await fetch(`${or.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: w.signal });
        if (!b.ok || w.signal.aborted) return;
        const f = await b.json();
        f.smartViewCounts && (m.smartViewCounts = f.smartViewCounts), f.smartViewCountsPending && (m.smartViewCountsPending = f.smartViewCountsPending), vf = !0;
      } catch {
      } finally {
        Jr === w && (Jr = null);
      }
    }
    function Qg() {
      vr?.abort(), vr = null;
    }
    async function Kt(w, b = null) {
      const f = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!f && !b?.params) return;
      const F = c(b?.params ?? Bg(f));
      if ($n.value || Za.value) {
        el(F, ft.value);
        return;
      }
      const ve = F.toString(), xe = ve ? `?${ve}` : "", Be = b?.generation ?? ++li, et = d(F), wi = b?.historyMode ?? (et ? "push" : "replace"), Ji = b?.historyTraversal === !0;
      if (Be !== li) return;
      Qg(), b === null && pr?.abort();
      const br = new AbortController();
      pr = br, Ft.loading = !0, Ft.error = "", Ft.completed = !1;
      try {
        const Qi = await fetch(or.value + xe, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: br.signal
        });
        if (Be !== li) return;
        if (!Qi.ok) {
          Ji ? el(F) : et ? Ft.error = t("library", "Could not load this review queue. Try again.") : el(F);
          return;
        }
        const ym = await Qi.json();
        if (Be !== li) return;
        Xg(ym), bf(), Ft.completed = !0, wi !== "none" && (history[wi === "push" ? "pushState" : "replaceState"]({}, "", ve ? `?${ve}` : window.location.pathname), an.value && Yr({ historyMode: "none" }));
      } catch (Qi) {
        Be === li && Qi?.name !== "AbortError" && (Ji ? el(F) : et ? Ft.error = t("library", "Could not load this review queue. Try again.") : el(F));
      } finally {
        Be === li && (pr = null, Ft.loading = !1);
      }
    }
    function gf() {
      pr?.abort();
      const w = new URLSearchParams(window.location.search), b = ff();
      w.has("item") && b === null && (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)), b === null ? Yr({ historyMode: "none" }) : Wr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), w.delete("item"), Kt(null, {
        params: c(w),
        generation: ++li,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function el(w, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [F, ve] of w.entries()) {
        const xe = document.createElement("input");
        xe.type = "hidden", xe.name = F, xe.value = ve, f.appendChild(xe);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function _i(w, b = null, f = null) {
      if (b === null) {
        Kt(w);
        return;
      }
      Kt({ currentTarget: w }, { params: b, generation: f });
    }
    async function em(w, b = H.value) {
      $.publication = String(b || "").trim(), H.value = $.publication, J.value = !1, await It(), Kt({ currentTarget: w });
    }
    function mf(w, b) {
      em(b.currentTarget.form, w);
    }
    async function tm(w) {
      $.q = String(G.value || "").trim(), $.publication = String(H.value || "").trim(), $.publisher = String(Z.value || "").trim(), $.creator = String(Ue.value || "").trim(), $.subject = String(ee.value || "").trim(), $.folder = String(ct.value || "").trim(), $.year = String(qt.value || "").trim(), J.value = !1, re.value = !1, Xe.value = !1, ne.value = !1, ie.value = !1, bi.value = !1, await It(), Kt({ currentTarget: w });
    }
    async function rn(w, b, f) {
      $[b] = String(f || "").trim(), b === "creator" ? (Ue.value = $.creator, Xe.value = !1) : b === "publisher" ? (Z.value = $.publisher, re.value = !1) : b === "subject" ? (ee.value = $.subject, ne.value = !1) : b === "folder" ? (ct.value = $.folder, ie.value = !1) : b === "classification" ? ($e.value = $.classification, Re.value = !1) : b === "tag" ? (_t.value = $.tag, bt.value = !1) : (qt.value = $.year, bi.value = !1), _a[b] = -1, await It(), Kt({ currentTarget: w });
    }
    function yf(w) {
      tm(w.currentTarget);
    }
    function _f(w, b) {
      rn(b.currentTarget.form, "creator", w);
    }
    function wf(w, b) {
      rn(b.currentTarget.form, "publisher", w);
    }
    function kf(w, b) {
      rn(b.currentTarget.form, "classification", w);
    }
    function Sf(w, b) {
      rn(b.currentTarget.form, "tag", w);
    }
    function Cf(w, b) {
      rn(b.currentTarget.form, "folder", w);
    }
    function Tf(w, b = ee.value) {
      window.clearTimeout(ue), Ne?.abort(), Ne = null, rn(w, "subject", b);
    }
    function im(w) {
      Tf(w.currentTarget.form);
    }
    function Af(w, b) {
      Tf(b.currentTarget.form, w);
    }
    function Ef(w, b) {
      rn(b.currentTarget.form, "year", w);
    }
    const _a = /* @__PURE__ */ Nt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function am(w) {
      return be.value;
    }
    function Bu(w, b, f) {
      return `library-${w}-${b}-suggestion-${f}`;
    }
    function $f(w, b) {
      const f = _a[b];
      return f >= 0 ? Bu(w, b, f) : void 0;
    }
    function Hu(w, b) {
      re.value = b, b || (_a[w] = -1);
    }
    function xf(w) {
      _a[w] = -1, Hu(w, !0);
    }
    function nm(w, b, f) {
      rn(f, w, b);
    }
    function Of(w, b) {
      const f = am();
      if (w.key === "Escape") {
        Hu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(w.key) || f.length === 0) return;
      if (w.key === "Enter") {
        const xe = _a[b];
        if (xe < 0) return;
        w.preventDefault(), nm(b, f[xe], w.currentTarget.form);
        return;
      }
      w.preventDefault(), Hu(b, !0);
      const F = _a[b], ve = w.key === "ArrowDown" ? 1 : -1;
      _a[b] = F < 0 ? ve > 0 ? 0 : f.length - 1 : (F + ve + f.length) % f.length;
    }
    function Nf(w) {
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries($)) {
        const ve = String(F || "").trim();
        ve !== "" && f !== w && !(f === "sort" && ve === "title") && !(f === "view" && ve === "compact") && b.set(f, ve);
      }
      return b;
    }
    function tl(w) {
      const b = Nf(w).toString();
      return `${ft.value}${b ? `?${b}` : ""}`;
    }
    function il(w) {
      const b = Nf(w);
      $[w] = w === "sort" ? "title" : w === "view" ? "compact" : "", Kt(null, {
        params: b,
        generation: ++li
      });
    }
    function Rf() {
      const w = new URLSearchParams();
      return $.sort && $.sort !== "title" && w.set("sort", $.sort), $.view && $.view !== "compact" && w.set("view", $.view), w;
    }
    function Os() {
      const w = Rf().toString();
      return `${ft.value}${w ? `?${w}` : ""}`;
    }
    function Ns() {
      const w = Rf();
      for (const b of Object.keys($))
        ["sort", "view"].includes(b) || ($[b] = Xi[b]);
      Kt(null, {
        params: w,
        generation: ++li
      }), !$n.value && !Za.value && It(() => {
        ms.value?.focus?.();
      });
    }
    function rm(w) {
      const b = new URL(w.href, window.location.origin).searchParams;
      Kt(null, {
        params: b,
        generation: ++li
      });
    }
    function lm() {
      return tl("q");
    }
    const Vu = z(() => m.smartViewCounts || {}), sm = z(() => new Set(m.smartViewCountsPending || []));
    function om(w) {
      return sm.value.has(w) || !Object.prototype.hasOwnProperty.call(Vu.value, w) ? "—" : Number(Vu.value[w] || 0);
    }
    const If = z(() => {
      const w = {};
      for (const [b, f] of Object.entries($)) {
        const F = String(f || "").trim();
        F !== "" && !(b === "sort" && F === "title") && (w[b] = F);
      }
      return w;
    }), um = z(() => JSON.stringify(If.value)), qu = z(() => Object.keys(If.value).length > 0);
    function Lf(w) {
      if (!M.includes(w)) return;
      $.view = w;
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(y($))) {
        const ve = String(F || "").trim();
        ve !== "" && !(f === "sort" && ve === "title") && !(f === "view" && ve === "compact") && b.set(f, ve);
      }
      b.delete("page"), Kt(null, {
        params: b,
        generation: ++li
      });
    }
    function cm(w) {
      const b = c(window.location.search);
      for (const F of Object.keys(Br))
        b.delete(F);
      b.delete("page");
      for (const [F, ve] of Object.entries(w)) {
        const xe = F === "view" ? g(ve) : String(ve || "").trim();
        xe !== "" && !(F === "view" && xe === "compact") && b.set(F, xe);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function dm(w) {
      return cm(w || {});
    }
    function fm(w) {
      const f = Object.entries(w && typeof w == "object" ? w : {}).filter(([, F]) => String(F ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([F, ve]) => String($[F] ?? "") === String(ve ?? ""));
    }
    function hm(w) {
      return A.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function pm(w) {
      if (!gt.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = hm(w), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = gt.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function Rs(w) {
      return String(w || "").toUpperCase();
    }
    function vm(w) {
      return m.creatorLandingUrls?.[w] || `/apps/library/creators/${encodeURIComponent(w)}`;
    }
    function Pf(w) {
      const b = String(w?.publication || "").trim(), f = String(w?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f;
    }
    function Df(w) {
      const b = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function bm(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Df(w.target) || (w.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function gm(w) {
      w.key !== "Escape" || document.activeElement !== Xr.value || $.q === "" || (w.preventDefault(), G.value = "", $.q = "", await It(), _i({ currentTarget: Xr.value }));
    }
    function mm(w) {
      if (!an.value || w.metaKey || w.ctrlKey || w.altKey)
        return !1;
      if (w.key === "Escape")
        return w.preventDefault(), Yr(), !0;
      if (w.key === "Tab" && Pn.value) {
        if (Ln.value?.focusTrap) return !1;
        const b = Ln.value?.$refs?.sidebar || Ln.value?.$el || Ln.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((xe) => !xe.hidden && xe.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const F = f[0], ve = f[f.length - 1];
        if (w.shiftKey && (document.activeElement === F || !b.contains(document.activeElement)))
          return w.preventDefault(), ve.focus(), !0;
        if (!w.shiftKey && (document.activeElement === ve || !b.contains(document.activeElement)))
          return w.preventDefault(), F.focus(), !0;
      }
      return Df(w.target) ? !1 : w.key === "ArrowLeft" && Cs.value ? (w.preventDefault(), xs(Cs.value), !0) : w.key === "ArrowRight" && Ts.value ? (w.preventDefault(), xs(Ts.value), !0) : !1;
    }
    function Ff(w) {
      document.querySelector("dialog[open]") || mm(w) || (bm(w), gm(w));
    }
    xt(() => {
      if (pa.value || xn.value || Xa.value || ha.value) return;
      window.addEventListener("keydown", Ff), window.addEventListener("popstate", gf), ya = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), ya?.addEventListener ? ya.addEventListener("change", Zr) : ya?.addListener?.(Zr);
      const w = new URLSearchParams(window.location.search), b = ff();
      w.has("item") && b === null ? (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)) : b !== null && Wr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, Jg();
      });
    }), Ti(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Ff), window.removeEventListener("popstate", gf), window.clearTimeout(W), window.clearTimeout(te), window.clearTimeout(ue), window.clearTimeout(En), I?.abort(), fe?.abort(), Ne?.abort(), Ai?.abort(), li += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, vr?.abort(), Jr?.abort(), pr?.abort(), pr = null, Fn += 1, Mn?.abort(), Mn = null, ya?.removeEventListener ? ya.removeEventListener("change", Zr) : ya?.removeListener?.(Zr), ya = null, Ss = null;
    });
    const al = /* @__PURE__ */ Nt({}), nl = /* @__PURE__ */ Nt({});
    async function Mf(w, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !w?.starUrl || al[w.id]) return;
      const F = !!w.starred;
      al[w.id] = !0, nl[w.id] = "", w.starred = !F;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (w.starred = F, nl[w.id] = t("library", "Could not update star. Try again."));
      } catch {
        w.starred = F, nl[w.id] = t("library", "Could not update star. Try again.");
      } finally {
        al[w.id] = !1;
      }
    }
    return (w, b) => (h(), Fe(u(oT), { "app-name": "library" }, {
      default: ke(() => [
        de(u(Hw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: ke(() => [
            de(u(Rb), null, {
              default: ke(() => [
                (h(!0), p(Y, null, he(fs.value, (f) => (h(), Fe(u(Ta), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (h(!0), p(Y, null, he(Pr.value, (f) => (h(), p("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  de(u(Ta), {
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
                    onClick: Ce((F) => pm(f.id), ["stop", "prevent"])
                  }, "✕", 8, rN)
                ]))), 128)),
                de(u(Ta), {
                  active: pa.value,
                  href: `${ft.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                de(u(Ta), {
                  active: xn.value,
                  href: Ei.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                de(u(Ta), {
                  class: "library-navigation-create-list",
                  href: `${Ei.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (h(!0), p(Y, null, he(ds.value, (f) => (h(), Fe(u(Ta), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Ei.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                de(u(Ta), {
                  active: Xa.value,
                  href: `${ft.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                de(u(Ta), {
                  active: Ya.value,
                  href: fa.value,
                  name: lr.value > 0 ? `${u(t)("library", "Review")} (${lr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                de(u(Ta), {
                  class: "library-navigation-personal-list",
                  active: ha.value,
                  href: `${ft.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            !pa.value && !xn.value && !Xa.value && !ha.value ? (h(), p("section", lN, [
              l("h2", sN, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Ce(yf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: $.folder
                }, null, 8, uN),
                (h(!0), p(Y, null, he(tf.value, (f) => (h(), p("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, cN))), 128)),
                $.sort && $.sort !== "title" ? (h(), p("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: $.sort
                }, null, 8, dN)) : E("", !0),
                $.view && $.view !== "compact" ? (h(), p("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: $.view
                }, null, 8, fN)) : E("", !0),
                l("fieldset", hN, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ae(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    ye(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => G.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, vN), [
                      [ze, G.value]
                    ]),
                    yi("q") ? (h(), p("small", bN, o(ji("q")), 1)) : E("", !0)
                  ], 8, pN),
                  l("label", null, [
                    ae(o(u(t)("library", "Type")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => $.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => _i(f))
                    }, [
                      l("option", gN, o(u(t)("library", "All types")), 1),
                      (h(!0), p(Y, null, he(R.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, mN))), 128))
                    ], 544), [
                      [nt, $.type]
                    ])
                  ]),
                  l("div", yN, [
                    l("label", _N, o(u(t)("library", "Publisher")), 1),
                    ye(l("input", {
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
                      "aria-expanded": re.value && be.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => xf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => Of(f, "publisher"))
                    }, null, 40, wN), [
                      [ze, Z.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: $.publisher
                    }, null, 8, kN),
                    yi("publisher") ? (h(), p("small", SN, o(ji("publisher")), 1)) : E("", !0),
                    re.value && be.value.length > 0 ? (h(), p("ul", CN, [
                      (h(!0), p(Y, null, he(be.value, (f, F) => (h(), p("li", {
                        id: Bu("desktop", "publisher", F),
                        key: f,
                        role: "option",
                        "aria-selected": _a.publisher === F ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (ve) => wf(f, ve)
                        }, o(f), 41, AN)
                      ], 8, TN))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-publisher-apply", ma("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", EN, [
                    l("label", $N, o(u(t)("library", "Series / periodical")), 1),
                    ye(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (f) => H.value = f),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": J.value && B.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (f) => J.value = !0),
                      onKeydown: b[9] || (b[9] = ht((f) => J.value = !1, ["escape"]))
                    }, null, 40, xN), [
                      [ze, H.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: $.publication
                    }, null, 8, ON),
                    yi("publication") ? (h(), p("small", NN, o(ji("publication")), 1)) : E("", !0),
                    J.value && B.value.length > 0 ? (h(), p("ul", RN, [
                      (h(!0), p(Y, null, he(B.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => mf(f, F)
                        }, o(f), 41, IN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-publication-apply", ma("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", LN, [
                    l("label", PN, o(u(t)("library", "Publication year")), 1),
                    ye(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (f) => qt.value = f),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": bi.value && Yi.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (f) => bi.value = !0),
                      onKeydown: b[13] || (b[13] = ht((f) => bi.value = !1, ["escape"]))
                    }, null, 40, DN), [
                      [ze, qt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: $.year
                    }, null, 8, FN),
                    yi("year") ? (h(), p("small", MN, o(ji("year")), 1)) : E("", !0),
                    bi.value && Yi.value.length > 0 ? (h(), p("ul", UN, [
                      (h(!0), p(Y, null, he(Yi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Ef(f, F)
                        }, o(f), 41, zN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-year-apply", ma("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", jN, [
                    l("label", BN, o(u(t)("library", "Creator")), 1),
                    ye(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": b[15] || (b[15] = (f) => Ue.value = f),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search creators"),
                      title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Xe.value && K.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Xe.value = !0),
                      onKeydown: b[17] || (b[17] = ht((f) => Xe.value = !1, ["escape"]))
                    }, null, 40, HN), [
                      [ze, Ue.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: $.creator
                    }, null, 8, VN),
                    yi("creator") ? (h(), p("small", qN, o(ji("creator")), 1)) : E("", !0),
                    Xe.value && K.value.length > 0 ? (h(), p("ul", GN, [
                      (h(!0), p(Y, null, he(K.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => _f(f, F)
                        }, o(f), 41, KN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-creator-apply", ma("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", WN, [
                    l("label", YN, o(u(t)("library", "Nextcloud tag")), 1),
                    ye(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (f) => _t.value = f),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": bt.value && vi.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (f) => bt.value = !0),
                      onKeydown: b[21] || (b[21] = ht((f) => bt.value = !1, ["escape"]))
                    }, null, 40, ZN), [
                      [ze, _t.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: $.tag
                    }, null, 8, XN),
                    bt.value && vi.value.length > 0 ? (h(), p("ul", JN, [
                      (h(!0), p(Y, null, he(vi.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Sf(f, F)
                        }, o(f), 41, QN)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-tag-apply", ma("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ae(o(u(t)("library", "Format")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => $.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => _i(f))
                    }, [
                      l("option", eR, o(u(t)("library", "All formats")), 1),
                      (h(!0), p(Y, null, he(x.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(Rs(f)), 9, tR))), 128))
                    ], 544), [
                      [nt, $.format]
                    ])
                  ])
                ]),
                l("fieldset", iR, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    ae(o(u(t)("library", "Shelf")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => $.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => _i(f))
                    }, [
                      l("option", aR, o(u(t)("library", "All shelves")), 1),
                      (h(!0), p(Y, null, he(C.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, nR))), 128))
                    ], 544), [
                      [nt, $.shelf]
                    ])
                  ]),
                  l("div", rR, [
                    l("label", lR, o(u(t)("library", "Folder")), 1),
                    ye(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (f) => ct.value = f),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Type at least 3 path characters"),
                      title: u(t)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ie.value && O.value.length > 0 ? "true" : "false",
                      onFocus: b[28] || (b[28] = (f) => ie.value = !0),
                      onKeydown: b[29] || (b[29] = ht((f) => ie.value = !1, ["escape"]))
                    }, null, 40, sR), [
                      [ze, ct.value]
                    ]),
                    ie.value && O.value.length > 0 ? (h(), p("ul", oR, [
                      (h(!0), p(Y, null, he(O.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Cf(f, F)
                        }, o(f), 41, uR)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-folder-apply", ma("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", cR, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    ae(o(u(t)("library", "Scan status")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => $.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => _i(f))
                    }, [
                      l("option", dR, o(u(t)("library", "All scan statuses")), 1),
                      (h(!0), p(Y, null, he(N.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, fR))), 128))
                    ], 544), [
                      [nt, $.status]
                    ])
                  ]),
                  l("label", null, [
                    ae(o(u(t)("library", "Workflow status")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => $.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => _i(f))
                    }, [
                      l("option", hR, o(u(t)("library", "All workflow statuses")), 1),
                      (h(!0), p(Y, null, he(pe.value, (f) => (h(), p("option", {
                        key: f,
                        value: f
                      }, o(f), 9, pR))), 128))
                    ], 544), [
                      [nt, $.workflowStatus]
                    ])
                  ]),
                  l("div", vR, [
                    l("label", bR, o(u(t)("library", "Subject")), 1),
                    ye(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": b[35] || (b[35] = (f) => ee.value = f),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search subjects"),
                      title: u(t)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": ne.value && me.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (f) => ne.value = !0),
                      onKeydown: b[37] || (b[37] = ht((f) => ne.value = !1, ["escape"]))
                    }, null, 40, gR), [
                      [ze, ee.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: $.subject
                    }, null, 8, mR),
                    yi("subject") ? (h(), p("small", yR, o(ji("subject")), 1)) : E("", !0),
                    ne.value && me.value.length > 0 ? (h(), p("ul", _R, [
                      (h(!0), p(Y, null, he(me.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => Af(f, F)
                        }, o(f), 41, wR)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "button",
                      class: Ee(["button secondary library-subject-apply", ma("subject")]),
                      onClick: im
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", kR, [
                    l("label", SR, o(u(t)("library", "Classification")), 1),
                    ye(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": b[39] || (b[39] = (f) => $e.value = f),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": Re.value && Ze.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (f) => Re.value = !0),
                      onKeydown: b[41] || (b[41] = ht((f) => Re.value = !1, ["escape"]))
                    }, null, 40, CR), [
                      [ze, $e.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: $.classification
                    }, null, 8, TR),
                    Re.value && Ze.value.length > 0 ? (h(), p("ul", AR, [
                      (h(!0), p(Y, null, he(Ze.value, (f) => (h(), p("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => kf(f, F)
                        }, o(f), 41, ER)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: Ee(["button secondary library-classification-apply", ma("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ae(o(u(t)("library", "Suggested updates")), 1),
                    ye(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => $.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => _i(f))
                    }, [
                      l("option", $R, o(u(t)("library", "All metadata")), 1),
                      l("option", xR, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [nt, $.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", OR, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", NR, o(u(t)("library", "Apply filters")), 1)
              ], 40, oN)
            ])) : E("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Wa.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, RR)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        de(u(rw), null, {
          default: ke(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: m.language || "en",
              dir: m.direction || "ltr",
              tabindex: "-1"
            }, [
              ha.value ? (h(), Fe(Qx, {
                key: 0,
                "request-token": gt.value,
                "review-url": fa.value
              }, null, 8, ["request-token", "review-url"])) : Xa.value ? (h(), Fe(nN, {
                key: 1,
                "request-token": gt.value
              }, null, 8, ["request-token"])) : pa.value ? (h(), Fe(C$, {
                key: 2,
                "request-token": gt.value,
                "catalogue-url": ft.value
              }, null, 8, ["request-token", "catalogue-url"])) : xn.value ? (h(), Fe(zA, {
                key: 3,
                onChanged: va,
                "request-token": gt.value,
                "catalogue-url": ft.value,
                "lists-url": Ei.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (h(), p(Y, { key: 4 }, [
                mt.value.length > 0 ? (h(), p("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (h(!0), p(Y, null, he(mt.value, (f) => (h(), p("a", {
                    key: f.key,
                    href: tl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: Ce((F) => il(f.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      ae(o(f.label), 1),
                      f.displayValue ? (h(), p(Y, { key: 0 }, [
                        ae(":")
                      ], 64)) : E("", !0)
                    ]),
                    f.displayValue ? (h(), p(Y, { key: 0 }, [
                      b[114] || (b[114] = ae(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, DR)
                    ], 64)) : E("", !0),
                    b[115] || (b[115] = ae()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, PR))), 128)),
                  Ct.value.length > 0 ? (h(), p("a", {
                    key: 0,
                    href: Os(),
                    class: "library-active-filter-clear-all",
                    onClick: Ce(Ns, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, FR)) : E("", !0)
                ], 8, LR)) : E("", !0),
                Ya.value ? (h(), p("section", MR, [
                  l("header", UR, [
                    l("p", zR, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", jR, o(u(t)("library", "Review")), 1),
                    de(Ke, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: ke(() => [
                        ae(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (h(!0), p(Y, null, he(zg.value, (f) => (h(), p("a", {
                      key: f.key,
                      class: Ee(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: Ce((F) => rm(f), ["prevent"])
                    }, [
                      l("span", null, o(f.label), 1),
                      l("b", null, o(om(f.countKey)), 1)
                    ], 10, HR))), 128))
                  ], 8, BR),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Ce(Kt, ["prevent"])
                  }, [
                    (h(!0), p(Y, null, he(Eg.value, (f) => (h(), p("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, qR))), 128)),
                    l("label", null, [
                      ae(o(u(t)("library", "Search within this queue")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => $.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [ze, $.q]
                      ])
                    ]),
                    l("button", GR, o(u(t)("library", "Apply")), 1)
                  ], 40, VR),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Ft.loading ? "true" : "false"
                  }, [
                    Ft.loading ? (h(), p("span", WR, o(u(t)("library", "Loading review queue…")), 1)) : E("", !0)
                  ], 8, KR),
                  Ft.error ? (h(), p("p", YR, o(Ft.error), 1)) : E("", !0),
                  nn.value.enabled ? (h(), p("section", ZR, [
                    l("div", XR, [
                      l("p", JR, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, QR)
                    ]),
                    nn.value.item ? (h(), p("article", eI, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", tI, o(nn.value.item.title), 1)
                        ]),
                        l("span", iI, [
                          l("bdi", aI, o(nn.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", nI, [
                        (h(!0), p(Y, null, he(nn.value.fields, (f) => (h(), p("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", rI, o(f.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", lI, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", sI, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", oI, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", uI, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", cI, o(f.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          l("form", {
                            method: "post",
                            action: nn.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            l("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: gt.value
                            }, null, 8, fI),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, hI),
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
                            }, o(u(t)("library", "Use suggested value")), 9, pI)
                          ], 8, dI)
                        ]))), 128))
                      ]),
                      l("footer", vI, [
                        l("a", {
                          class: "button secondary",
                          href: nn.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, bI),
                        l("a", {
                          class: "button secondary",
                          href: nn.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, gI)
                      ])
                    ])) : E("", !0)
                  ])) : E("", !0),
                  T.value.length === 0 && !Ft.loading && !Ft.error ? (h(), p("div", mI, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: ft.value
                    }, o(u(t)("library", "Back to Library")), 9, yI)
                  ])) : (h(), p("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (h(!0), p(Y, null, he(T.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: "library-review-result-card"
                    }, [
                      l("div", null, [
                        l("h3", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (F) => Hi(f, F)
                          }, [
                            l("bdi", kI, o(f.title), 1)
                          ], 8, wI)
                        ]),
                        f.creators ? (h(), p("p", SI, [
                          l("bdi", CI, o(f.displayCreators ?? f.creators), 1)
                        ])) : E("", !0),
                        f.scanError ? (h(), p("p", TI, [
                          l("bdi", AI, o(f.scanError), 1)
                        ])) : E("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (F) => Hi(f, F)
                        }, o(u(t)("library", "Details")), 9, EI),
                        l("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (F) => ai(f, F)
                        }, o(u(t)("library", "Open")), 9, $I)
                      ])
                    ]))), 128))
                  ], 8, _I)),
                  T.value.length > 0 ? (h(), p("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, OI)) : (h(), p("span", NI, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      ae(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", RI, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                    ]),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, II)) : (h(), p("span", LI, o(u(t)("library", "Next")), 1))
                  ], 8, xI)) : E("", !0)
                ])) : $n.value ? (h(), p("main", PI, [
                  l("header", DI, [
                    l("p", FI, o(u(t)("library", "Your library")), 1),
                    l("h2", MI, o(u(t)("library", "Home")), 1)
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
                      (h(!0), p(Y, null, he(Ct.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => il(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ae(o(f.label), 1),
                          f.displayValue ? (h(), p(Y, { key: 0 }, [
                            ae(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (h(), p(Y, { key: 0 }, [
                          b[118] || (b[118] = ae(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, BI)
                        ], 64)) : E("", !0),
                        b[119] || (b[119] = ae()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, jI))), 128))
                    ], 8, zI),
                    l("p", HI, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Dt.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, VI),
                      l("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: Ce(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, qI)
                    ])
                  ], 8, UI)) : E("", !0),
                  l("section", GI, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", KI, [
                          de(Ke, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: ke(() => [
                              ae(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${ft.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, WI)
                    ]),
                    ws.value.continueReading.length ? (h(), p("div", YI, [
                      (h(!0), p(Y, null, he(ws.value.continueReading, (f) => (h(), p("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Hi(f, F)
                        }, [
                          l("span", XI, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, JI)
                          ])
                        ], 8, ZI),
                        l("div", QI, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", tL, o(f.title), 1)
                            ], 8, eL)
                          ]),
                          f.creators ? (h(), p("p", iL, [
                            l("bdi", aL, o(f.displayCreators ?? f.creators), 1)
                          ])) : E("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ai(f, F)
                          }, o(u(t)("library", "Open")), 9, nL)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", rL, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", lL, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", sL, [
                          de(Ke, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: ke(() => [
                              ae(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${ft.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, oL)
                    ]),
                    ws.value.recentlyAdded.length ? (h(), p("div", uL, [
                      (h(!0), p(Y, null, he(ws.value.recentlyAdded, (f) => (h(), p("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Hi(f, F)
                        }, [
                          l("span", dL, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, fL)
                          ])
                        ], 8, cL),
                        l("div", hL, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", vL, o(f.title), 1)
                            ], 8, pL)
                          ]),
                          f.creators ? (h(), p("p", bL, [
                            l("bdi", gL, o(f.displayCreators ?? f.creators), 1)
                          ])) : E("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ai(f, F)
                          }, o(u(t)("library", "Open")), 9, mL)
                        ])
                      ]))), 128))
                    ])) : (h(), p("p", yL, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", _L, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", wL, [
                          de(Ke, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: ke(() => [
                              ae(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: gi.value }, o(u(t)("library", "View all")), 9, kL)
                    ]),
                    af.value.length ? (h(), p("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (h(!0), p(Y, null, he(af.value, (f) => (h(), p("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        l("strong", null, [
                          l("bdi", TL, o(f.shelf), 1)
                        ]),
                        l("span", null, o(u(Rt)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, CL))), 128))
                    ], 8, SL)) : (h(), p("p", AL, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (h(), p("aside", EL, [
                    l("div", null, [
                      l("h3", $L, o(u(t)("library", "Needs attention")), 1),
                      l("p", xL, o(u(Rt)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, OL)
                  ])) : E("", !0)
                ])) : Za.value ? (h(), p("main", NL, [
                  l("header", RL, [
                    l("p", IL, o(u(t)("library", "Your library")), 1),
                    l("h2", LL, [
                      de(Ke, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          ae(o(u(t)("library", "Shelves")), 1)
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
                      (h(!0), p(Y, null, he(Ct.value, (f) => (h(), p("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => il(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ae(o(f.label), 1),
                          f.displayValue ? (h(), p(Y, { key: 0 }, [
                            ae(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (h(), p(Y, { key: 0 }, [
                          b[121] || (b[121] = ae(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, ML)
                        ], 64)) : E("", !0),
                        b[122] || (b[122] = ae()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, FL))), 128))
                    ], 8, DL),
                    l("p", UL, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Dt.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, zL),
                      l("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: Ce(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, jL)
                    ])
                  ], 8, PL)) : E("", !0),
                  nf.value.length ? (h(), p("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", HL, [
                      (h(!0), p(Y, null, he(nf.value, (f) => (h(), Fe(_T, {
                        key: f.id,
                        node: f,
                        "children-url": Dr.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, BL)) : (h(), p("section", VL, [
                    l("h3", null, [
                      de(Ke, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: ke(() => [
                          ae(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", qL, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", GL, [
                      l("a", {
                        class: "button primary",
                        href: Wa.value
                      }, o(u(t)("library", "Add a Library root")), 9, KL),
                      l("a", {
                        class: "button secondary",
                        href: ft.value
                      }, o(u(t)("library", "All publications")), 9, WL)
                    ])
                  ]))
                ])) : (h(), p("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Ee(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Ft.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Ft.loading ? "true" : "false"
                }, [
                  l("header", ZL, [
                    en.value ? (h(), p("p", XL, o(di.value), 1)) : E("", !0),
                    l("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: ms,
                      tabindex: "-1"
                    }, o(Nn.value), 513)
                  ]),
                  l("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: Cg
                  }, [
                    l("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": kg.value
                    }, [
                      l("span", QL, o(u(Rt)("library", "%n item", "%n items", Number(Q.value.total || 0))), 1),
                      l("strong", null, o(wg.value), 1)
                    ], 8, JL),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Ce(yf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: $.folder
                      }, null, 8, tP),
                      (h(!0), p(Y, null, he(tf.value, (f) => (h(), p("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, iP))), 128)),
                      l("fieldset", aP, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", nP, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          ye(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: jr,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => G.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, rP), [
                            [ze, G.value]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Type")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => $.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => _i(f))
                          }, [
                            l("option", lP, o(u(t)("library", "All types")), 1),
                            (h(!0), p(Y, null, he(R.value, (f) => (h(), p("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, sP))), 128))
                          ], 544), [
                            [nt, $.type]
                          ])
                        ]),
                        l("div", oP, [
                          l("label", uP, o(u(t)("library", "Publisher")), 1),
                          ye(l("input", {
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
                            "aria-expanded": re.value && be.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => xf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => Of(f, "publisher"))
                          }, null, 40, cP), [
                            [ze, Z.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: $.publisher
                          }, null, 8, dP),
                          yi("publisher") ? (h(), p("small", fP, o(ji("publisher")), 1)) : E("", !0),
                          mi.value && re.value && be.value.length > 0 ? (h(), p("ul", hP, [
                            (h(!0), p(Y, null, he(be.value, (f, F) => (h(), p("li", {
                              id: Bu("mobile", "publisher", F),
                              key: `mobile-publisher-${f}`,
                              role: "option",
                              "aria-selected": _a.publisher === F ? "true" : "false"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (ve) => wf(f, ve)
                              }, o(f), 41, vP)
                            ], 8, pP))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", bP, [
                          l("label", gP, o(u(t)("library", "Series / periodical")), 1),
                          ye(l("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (f) => H.value = f),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": J.value && B.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (f) => J.value = !0),
                            onKeydown: b[55] || (b[55] = ht((f) => J.value = !1, ["escape"]))
                          }, null, 40, mP), [
                            [ze, H.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: $.publication
                          }, null, 8, yP),
                          yi("publication") ? (h(), p("small", _P, o(ji("publication")), 1)) : E("", !0),
                          mi.value && J.value && B.value.length > 0 ? (h(), p("ul", wP, [
                            (h(!0), p(Y, null, he(B.value, (f) => (h(), p("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => mf(f, F)
                              }, o(f), 41, kP)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", SP, [
                          l("label", CP, o(u(t)("library", "Publication year")), 1),
                          ye(l("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (f) => qt.value = f),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": bi.value && Yi.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (f) => bi.value = !0),
                            onKeydown: b[59] || (b[59] = ht((f) => bi.value = !1, ["escape"]))
                          }, null, 40, TP), [
                            [ze, qt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: $.year
                          }, null, 8, AP),
                          yi("year") ? (h(), p("small", EP, o(ji("year")), 1)) : E("", !0),
                          mi.value && bi.value && Yi.value.length > 0 ? (h(), p("ul", $P, [
                            (h(!0), p(Y, null, he(Yi.value, (f) => (h(), p("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Ef(f, F)
                              }, o(f), 41, xP)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", OP, [
                          l("label", NP, o(u(t)("library", "Creator")), 1),
                          ye(l("input", {
                            id: "library-mobile-creator-search",
                            "onUpdate:modelValue": b[61] || (b[61] = (f) => Ue.value = f),
                            type: "search",
                            name: "creatorSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search creators"),
                            title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-creator-suggestions",
                            "aria-expanded": Xe.value && K.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Xe.value = !0),
                            onKeydown: b[63] || (b[63] = ht((f) => Xe.value = !1, ["escape"]))
                          }, null, 40, RP), [
                            [ze, Ue.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: $.creator
                          }, null, 8, IP),
                          yi("creator") ? (h(), p("small", LP, o(ji("creator")), 1)) : E("", !0),
                          mi.value && Xe.value && K.value.length > 0 ? (h(), p("ul", PP, [
                            (h(!0), p(Y, null, he(K.value, (f) => (h(), p("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => _f(f, F)
                              }, o(f), 41, DP)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Format")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => $.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => _i(f))
                          }, [
                            l("option", FP, o(u(t)("library", "All formats")), 1),
                            (h(!0), p(Y, null, he(x.value, (f) => (h(), p("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(Rs(f)), 9, MP))), 128))
                          ], 544), [
                            [nt, $.format]
                          ])
                        ]),
                        l("div", UP, [
                          l("label", zP, o(u(t)("library", "Subject")), 1),
                          ye(l("input", {
                            id: "library-mobile-subject-search",
                            "onUpdate:modelValue": b[67] || (b[67] = (f) => ee.value = f),
                            type: "search",
                            name: "subjectSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search subjects"),
                            title: u(t)("library", "Exact subject matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-subject-suggestions",
                            "aria-expanded": ne.value && me.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (f) => ne.value = !0),
                            onKeydown: b[69] || (b[69] = ht((f) => ne.value = !1, ["escape"]))
                          }, null, 40, jP), [
                            [ze, ee.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: $.subject
                          }, null, 8, BP),
                          yi("subject") ? (h(), p("small", HP, o(ji("subject")), 1)) : E("", !0),
                          mi.value && ne.value && me.value.length > 0 ? (h(), p("ul", VP, [
                            (h(!0), p(Y, null, he(me.value, (f) => (h(), p("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Af(f, F)
                              }, o(f), 41, qP)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", GP, [
                          l("label", KP, o(u(t)("library", "Classification")), 1),
                          ye(l("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": b[71] || (b[71] = (f) => $e.value = f),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": Re.value && Ze.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (f) => Re.value = !0),
                            onKeydown: b[73] || (b[73] = ht((f) => Re.value = !1, ["escape"]))
                          }, null, 40, WP), [
                            [ze, $e.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: $.classification
                          }, null, 8, YP),
                          mi.value && Re.value && Ze.value.length > 0 ? (h(), p("ul", ZP, [
                            (h(!0), p(Y, null, he(Ze.value, (f) => (h(), p("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => kf(f, F)
                              }, o(f), 41, XP)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      l("fieldset", JP, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          ae(o(u(t)("library", "Shelf")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => $.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => _i(f))
                          }, [
                            l("option", QP, o(u(t)("library", "All shelves")), 1),
                            (h(!0), p(Y, null, he(C.value, (f) => (h(), p("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, e8))), 128))
                          ], 544), [
                            [nt, $.shelf]
                          ])
                        ]),
                        l("div", t8, [
                          l("label", i8, o(u(t)("library", "Folder")), 1),
                          ye(l("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (f) => ct.value = f),
                            type: "search",
                            name: "folderSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Type at least 3 path characters"),
                            title: u(t)("library", "Select an exact folder path"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-folder-suggestions",
                            "aria-expanded": ie.value && O.value.length > 0 ? "true" : "false",
                            onFocus: b[78] || (b[78] = (f) => ie.value = !0),
                            onKeydown: b[79] || (b[79] = ht((f) => ie.value = !1, ["escape"]))
                          }, null, 40, a8), [
                            [ze, ct.value]
                          ]),
                          mi.value && ie.value && O.value.length > 0 ? (h(), p("ul", n8, [
                            (h(!0), p(Y, null, he(O.value, (f) => (h(), p("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Cf(f, F)
                              }, o(f), 41, r8)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      l("fieldset", l8, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          ae(o(u(t)("library", "Scan status")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => $.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => _i(f))
                          }, [
                            l("option", s8, o(u(t)("library", "All scan statuses")), 1),
                            (h(!0), p(Y, null, he(N.value, (f) => (h(), p("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, o8))), 128))
                          ], 544), [
                            [nt, $.status]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Workflow status")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => $.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => _i(f))
                          }, [
                            l("option", u8, o(u(t)("library", "All workflow statuses")), 1),
                            (h(!0), p(Y, null, he(pe.value, (f) => (h(), p("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, c8))), 128))
                          ], 544), [
                            [nt, $.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Suggested updates")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => $.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => _i(f))
                          }, [
                            l("option", d8, o(u(t)("library", "All metadata")), 1),
                            l("option", f8, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [nt, $.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", h8, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", p8, [
                          l("label", v8, o(u(t)("library", "Nextcloud tag")), 1),
                          ye(l("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (f) => _t.value = f),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": bt.value && vi.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (f) => bt.value = !0),
                            onKeydown: b[89] || (b[89] = ht((f) => bt.value = !1, ["escape"]))
                          }, null, 40, b8), [
                            [ze, _t.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: $.tag
                          }, null, 8, g8),
                          bt.value && vi.value.length > 0 ? (h(), p("ul", m8, [
                            (h(!0), p(Y, null, he(vi.value, (f) => (h(), p("li", {
                              key: f,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => Sf(f, F)
                              }, o(f), 41, y8)
                            ]))), 128))
                          ])) : E("", !0),
                          l("button", {
                            type: "submit",
                            class: Ee(["button secondary library-tag-apply", ma("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Sort")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => $.sort = f),
                            name: "sort",
                            onChange: Kt
                          }, [
                            l("option", _8, o(u(t)("library", "Title")), 1),
                            l("option", w8, o(u(t)("library", "Date added")), 1),
                            l("option", k8, o(u(t)("library", "Publication date")), 1),
                            l("option", S8, o(u(t)("library", "Series")), 1),
                            l("option", C8, o(u(t)("library", "Recently opened")), 1),
                            l("option", T8, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [nt, $.sort]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "View")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => $.view = f),
                            name: "view",
                            onChange: Kt
                          }, [
                            l("option", A8, o(u(t)("library", "Compact")), 1),
                            l("option", E8, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [nt, $.view]
                          ])
                        ])
                      ]),
                      l("div", $8, [
                        Ct.value.length > 0 ? (h(), p("a", {
                          key: 0,
                          href: Os(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Ce(Ns, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, x8)) : E("", !0),
                        l("button", O8, o(Sg.value), 1)
                      ])
                    ], 40, eP)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", R8, [
                      l("section", I8, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, L8),
                        l("form", {
                          method: "post",
                          action: ge.value,
                          class: "library-saved-collection-save-form",
                          title: qu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: gt.value
                          }, null, 8, D8),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: um.value
                          }, null, 8, F8),
                          l("label", null, [
                            l("span", M8, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, U8)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, z8)
                        ], 8, P8)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Ce(Kt, ["prevent"])
                      }, [
                        (h(!0), p(Y, null, he(Ag.value, (f) => (h(), p("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, B8))), 128)),
                        l("label", H8, [
                          ae(o(u(t)("library", "Sort")), 1),
                          ye(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => $.sort = f),
                            name: "sort",
                            onChange: Kt
                          }, [
                            l("option", V8, o(u(t)("library", "Title")), 1),
                            l("option", q8, o(u(t)("library", "Date added")), 1),
                            l("option", G8, o(u(t)("library", "Publication date")), 1),
                            l("option", K8, o(u(t)("library", "Series")), 1),
                            l("option", W8, o(u(t)("library", "Recently opened")), 1),
                            l("option", Y8, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [nt, $.sort]
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
                            class: Ee({ active: se.value === "compact" }),
                            "aria-pressed": se.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => Lf("compact"))
                          }, o(u(t)("library", "Compact")), 11, X8),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Ee({ active: se.value === "list" }),
                            "aria-pressed": se.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => Lf("list"))
                          }, o(u(t)("library", "List")), 11, J8)
                        ], 8, Z8)
                      ], 40, j8)
                    ])
                  ], 8, N8),
                  hr.value ? (h(), p("p", Q8, o(hr.value), 1)) : E("", !0),
                  tn.value ? (h(), p("p", e5, o(tn.value), 1)) : E("", !0),
                  Hr.value ? (h(), p("p", t5, o(Hr.value), 1)) : E("", !0),
                  l("div", i5, [
                    Ft.loading ? (h(), p("span", a5, o(u(t)("library", "Updating catalogue…")), 1)) : Ft.completed ? (h(), p("span", n5, o(u(Rt)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Q.value.total || 0))), 1)) : E("", !0)
                  ]),
                  en.value ? (h(), p("section", r5, [
                    l("p", l5, o(di.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: cr.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : On.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(zi.value), 9, s5),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(Rt)("library", "%n item", "%n items", Q.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (h(), p("span", u5, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : E("", !0),
                      P.value?.datedCount ? (h(), p("span", c5, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : E("", !0),
                      P.value?.undatedCount > 0 ? (h(), p("span", d5, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : E("", !0)
                    ], 8, o5),
                    Qa.value && P.value ? (h(), p("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(Rt)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (h(), p("span", h5, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : E("", !0),
                      l("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (h(), p("span", p5, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : E("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, f5)) : E("", !0),
                    Qa.value && P.value?.issueGroups?.length ? (h(), p("section", v5, [
                      l("div", null, [
                        l("p", b5, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, g5)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (h(!0), p(Y, null, he(P.value.issueGroups, (f) => (h(), p("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(f.label), 1),
                          l("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(Rt)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, y5))), 128))
                      ], 8, m5),
                      P.value.gapRanges?.length ? (h(), p("p", _5, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : E("", !0),
                      (h(!0), p(Y, null, he(P.value.issueGroups, (f) => (h(), p("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(f.label), 1),
                        l("ol", null, [
                          (h(!0), p(Y, null, he(f.items, (F, ve) => (h(), p("li", {
                            key: F.itemId
                          }, [
                            l("span", w5, o(F.issueLabel), 1),
                            l("a", {
                              href: F.detailsUrl || "#"
                            }, o(F.title), 9, k5),
                            l("small", null, [
                              ae(o(F.publicationType), 1),
                              F.publicationDate ? (h(), p(Y, { key: 0 }, [
                                ae(" · " + o(F.publicationDate), 1)
                              ], 64)) : E("", !0)
                            ]),
                            l("small", S5, [
                              ve > 0 ? (h(), p(Y, { key: 0 }, [
                                ae(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : E("", !0),
                              ve > 0 && ve < f.items.length - 1 ? (h(), p(Y, { key: 1 }, [
                                ae(" · ")
                              ], 64)) : E("", !0),
                              ve < f.items.length - 1 ? (h(), p(Y, { key: 2 }, [
                                ae(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : E("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (h(), p("details", C5, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, T5)
                      ])) : E("", !0)
                    ])) : E("", !0),
                    l("p", null, [
                      l("a", {
                        href: ft.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, A5)
                    ])
                  ])) : E("", !0),
                  l("div", E5, [
                    l("p", $5, o(u(t)("library", "Showing")) + " " + o(Q.value.from) + "–" + o(Q.value.to) + " " + o(u(t)("library", "of")) + " " + o(Q.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", O5, [
                        ae(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                        Q.value.total > 0 ? (h(), p("span", N5, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                      ]),
                      Q.value.previousUrl ? (h(), p("a", {
                        key: 0,
                        href: Q.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, R5)) : (h(), p("span", I5, o(u(t)("library", "Previous")), 1)),
                      Q.value.nextUrl ? (h(), p("a", {
                        key: 2,
                        href: Q.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, L5)) : (h(), p("span", P5, o(u(t)("library", "Next")), 1))
                    ], 8, x5)
                  ]),
                  T.value.length === 0 ? (h(), p("div", {
                    key: 4,
                    class: Ee(["library-empty-content", { "library-first-run-guidance": zr.value || fr.value, "library-filter-empty-state": ga.value && !zr.value && !fr.value }]),
                    role: "status"
                  }, [
                    zr.value ? (h(), p(Y, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, D5),
                      l("p", F5, [
                        l("a", {
                          href: Wa.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, M5),
                        l("span", U5, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : fr.value ? (h(), p(Y, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, z5),
                      l("p", j5, [
                        l("a", {
                          href: Wa.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, B5)
                      ])
                    ], 64)) : ga.value ? (h(), p(Y, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, H5),
                      Ct.value.length > 0 ? (h(), p("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (h(!0), p(Y, null, he(Ct.value, (f) => (h(), p("a", {
                          key: `empty-${f.key}`,
                          href: tl(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: Ce((F) => il(f.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            ae(o(f.label), 1),
                            f.displayValue ? (h(), p(Y, { key: 0 }, [
                              ae(":")
                            ], 64)) : E("", !0)
                          ]),
                          f.displayValue ? (h(), p(Y, { key: 0 }, [
                            b[124] || (b[124] = ae(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, G5)
                          ], 64)) : E("", !0),
                          b[125] || (b[125] = ae()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, q5))), 128))
                      ], 8, V5)) : E("", !0),
                      $i.value ? (h(), p("p", K5, o(u(t)("library", "Try removing {filter}.", { filter: $i.value.displayValue ? `${$i.value.label}: ${$i.value.displayValue}` : $i.value.label })), 1)) : E("", !0),
                      l("p", W5, [
                        ys.value ? (h(), p("a", {
                          key: 0,
                          href: lm(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Ce((f) => il("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, Y5)) : E("", !0)
                      ])
                    ], 64)) : (h(), p(Y, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, Z5),
                      l("p", X5, [
                        l("a", {
                          href: Wa.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, J5)
                      ])
                    ], 64))
                  ], 2)) : E("", !0),
                  T.value.length > 0 ? (h(), p("section", {
                    key: 5,
                    class: Ee(["library-list-selection", { "library-list-selection--active": ni.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", eD, [
                      l("label", tD, [
                        l("input", {
                          type: "checkbox",
                          checked: ni.value.length === T.value.length,
                          onChange: $g
                        }, null, 40, iD),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, aD)
                      ]),
                      ni.value.length ? (h(), p("span", nD, o(u(Rt)("library", "%n publication selected", "%n publications selected", ni.value.length)), 1)) : E("", !0),
                      ye(de(hd, {
                        "item-ids": ni.value,
                        "request-token": gt.value,
                        "lists-url": Ei.value,
                        "preferred-list-id": u(Su)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [tr, ni.value.length]
                      ]),
                      ni.value.length ? ye((h(), p("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (f) => rt.value = f),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        l("option", lD, o(u(t)("library", "More actions")), 1),
                        l("option", sD, o(u(t)("library", "Add tag")), 1),
                        l("option", oD, o(u(t)("library", "Remove tag")), 1),
                        l("option", uD, o(u(t)("library", "Preview edit")), 1),
                        l("option", cD, o(u(t)("library", "Fresh covers")), 1),
                        l("option", dD, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, rD)), [
                        [nt, rt.value]
                      ]) : E("", !0)
                    ]),
                    ni.value.length && rt.value ? (h(), p("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: Og
                    }, [
                      rt.value === "tag" ? (h(), p("form", {
                        key: 0,
                        method: "post",
                        action: Nu.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, hD),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, pD)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, vD)
                      ], 8, fD)) : E("", !0),
                      rt.value === "untag" ? (h(), p("form", {
                        key: 1,
                        method: "post",
                        action: Ru.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, gD),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, mD)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, yD)
                      ], 8, bD)) : E("", !0),
                      rt.value === "reset" ? (h(), p("form", {
                        key: 2,
                        method: "post",
                        action: vs.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, wD),
                        (h(!0), p(Y, null, he(_s.value, (f) => (h(), p("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, kD))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, SD)
                      ], 8, _D)) : E("", !0),
                      rt.value === "edit" ? (h(), p("form", {
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
                        }, null, 8, TD),
                        (h(!0), p(Y, null, he(_s.value, (f) => (h(), p("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, AD))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", ED, [
                            l("option", $D, o(u(t)("library", "Publication type")), 1),
                            l("option", xD, o(u(t)("library", "Subtitle")), 1),
                            l("option", OD, o(u(t)("library", "Creators")), 1),
                            l("option", ND, o(u(t)("library", "Series / periodical")), 1),
                            l("option", RD, o(u(t)("library", "Series")), 1),
                            l("option", ID, o(u(t)("library", "Part in series")), 1),
                            l("option", LD, o(u(t)("library", "Genre")), 1),
                            l("option", PD, o(u(t)("library", "Publication date")), 1),
                            l("option", DD, o(u(t)("library", "Language")), 1),
                            l("option", FD, o(u(t)("library", "Publisher")), 1),
                            l("option", MD, o(u(t)("library", "Subjects")), 1),
                            l("option", UD, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, zD)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, jD)
                      ], 8, CD)) : E("", !0),
                      rt.value === "covers" ? (h(), p("form", {
                        key: 4,
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, HD),
                        (h(!0), p(Y, null, he(_s.value, (f) => (h(), p("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, VD))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, qD)
                      ], 8, BD)) : E("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => rt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : E("", !0)
                  ], 10, Q5)) : E("", !0),
                  sr.value && (u(Eu) === "building" || Object.values(u(ba)).some((f) => f.status === "partial")) ? (h(), p("p", GD, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
                  T.value.length > 0 && se.value === "list" ? (h(), p("div", KD, [
                    l("table", WD, [
                      l("caption", YD, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", ZD, [
                            l("span", XD, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", JD, [
                            l("span", QD, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", eF, o(u(t)("library", "Title")), 1),
                          l("th", tF, o(u(t)("library", "Creators")), 1),
                          l("th", iF, o(u(t)("library", "Publication date")), 1),
                          l("th", aF, o(u(t)("library", "Series")), 1),
                          l("th", nF, o(u(t)("library", "Format")), 1),
                          l("th", rF, o(u(t)("library", "Shelf")), 1),
                          l("th", lF, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (h(!0), p(Y, null, he(T.value, (f) => (h(), p("tr", {
                          key: f.id,
                          class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": ks.value.has(Number(f.id)), "library-catalogue-list-row--open": an.value && Number(Rn.value) === Number(f.id) }])
                        }, [
                          l("td", sF, [
                            l("label", oF, [
                              l("input", {
                                type: "checkbox",
                                checked: ks.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (F) => rf(f.id, F.currentTarget.checked)
                              }, null, 40, uF)
                            ])
                          ]),
                          l("td", cF, [
                            l("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("img", {
                                src: f.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, fF)
                            ], 8, dF)
                          ]),
                          l("th", hF, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", vF, o(f.title), 1)
                            ], 8, pF),
                            u(ba)[f.id]?.count ? (h(), p("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${ft.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(ba)[f.id].count) + o(u(ba)[f.id].status === "partial" ? "+" : ""), 9, bF)) : E("", !0)
                          ]),
                          l("td", gF, [
                            f.creators ? (h(), p("bdi", mF, o(f.displayCreators ?? f.creators), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, yF))
                          ]),
                          l("td", null, [
                            f.publicationDate ? (h(), p("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, _F)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, wF))
                          ]),
                          l("td", null, [
                            f.publication ? (h(), p("bdi", kF, o(f.publication), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, SF))
                          ]),
                          l("td", null, [
                            f.extension || f.publicationType ? (h(), p("bdi", {
                              key: 0,
                              class: Ee(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? Rs(f.extension) : f.publicationType), 11, CF)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, TF))
                          ]),
                          l("td", null, [
                            f.shelf ? (h(), p("bdi", AF, o(f.shelf), 1)) : (h(), p("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, EF))
                          ]),
                          l("td", $F, [
                            l("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (F) => ai(f, F)
                            }, o(u(t)("library", "Open")), 9, xF),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (F) => Hi(f, F)
                            }, o(u(t)("library", "Details")), 9, OF)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : T.value.length > 0 ? (h(), p("div", {
                    key: 8,
                    class: Ee(["library-cover-gallery", ce.value])
                  }, [
                    (h(!0), p(Y, null, he(T.value, (f) => (h(), p("article", {
                      key: f.id,
                      class: Ee(["library-cover-card", { "library-cover-card--selected": ks.value.has(Number(f.id)), "library-cover-card--open": an.value && Number(Rn.value) === Number(f.id) }])
                    }, [
                      l("label", NF, [
                        l("input", {
                          type: "checkbox",
                          checked: ks.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (F) => rf(f.id, F.currentTarget.checked)
                        }, null, 40, RF)
                      ]),
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                        "aria-expanded": an.value && Number(Rn.value) === Number(f.id) ? "true" : "false",
                        onClick: (F) => Hi(f, F)
                      }, [
                        l("span", {
                          id: `library-details-action-${f.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, LF),
                        de(hg, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, IF),
                      l("form", {
                        method: "post",
                        action: f.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Ce((F) => Mf(f, F), ["prevent"])
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, DF),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, FF),
                        l("button", {
                          type: "submit",
                          class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": al[f.id] ? "true" : void 0,
                          disabled: al[f.id],
                          onClick: Ce((F) => Mf(f, F), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, MF),
                        nl[f.id] ? (h(), p("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(nl[f.id]), 9, UF)) : E("", !0)
                      ], 40, PF),
                      l("div", zF, [
                        l("div", jF, [
                          u(ba)[f.id]?.count ? (h(), p("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${ft.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(ba)[f.id].count) + o(u(ba)[f.id].status === "partial" ? "+" : ""), 9, BF)) : E("", !0),
                          l("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              l("bdi", qF, o(f.title), 1)
                            ], 8, VF)
                          ], 8, HF),
                          f.creators ? (h(), p("p", GF, [
                            l("bdi", KF, o(f.displayCreators ?? f.creators), 1)
                          ])) : E("", !0),
                          Pf(f) ? (h(), p("p", WF, [
                            l("bdi", YF, o(Pf(f)), 1)
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
                    l("span", XF, [
                      ae(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (h(), p("span", JF, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                    ]),
                    Q.value.previousUrl ? (h(), p("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, QF)) : (h(), p("span", eM, o(u(t)("library", "Previous")), 1)),
                    Q.value.nextUrl ? (h(), p("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, tM)) : (h(), p("span", iM, o(u(t)("library", "Next")), 1))
                  ], 8, ZF)) : E("", !0)
                ], 10, YL))
              ], 64))
            ], 8, IR)
          ]),
          _: 1
        }),
        de(u(G2), {
          ref_key: "sidebarComponent",
          ref: Ln,
          class: "library-native-item-sidebar",
          open: an.value,
          "no-toggle": "",
          loading: ri.loading,
          name: Ae.value?.title || u(t)("library", "Publication details"),
          subname: Ae.value?.displayCreators ?? Ae.value?.creators ?? "",
          role: Pn.value ? "dialog" : void 0,
          "aria-modal": Pn.value ? "true" : void 0,
          "aria-labelledby": Pn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Pn.value && Ae.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: pf,
          onClosed: jg,
          onClose: Yr
        }, {
          default: ke(() => [
            l("div", aM, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: lf,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Ae.value?.title || u(t)("library", "Publication details")), 513),
              ri.loading && !Ae.value ? (h(), p("p", nM, o(u(t)("library", "Loading publication details…")), 1)) : ri.error ? (h(), p("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ri.missing ? "status" : "alert"
              }, [
                l("p", null, o(ri.error), 1),
                ri.missing ? E("", !0) : (h(), p("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Wr(Rn.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, rM)) : Ae.value ? (h(), p(Y, { key: 2 }, [
                l("p", lM, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", sM, [
                  l("span", oM, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ae.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, uM),
                  l("div", cM, [
                    l("p", dM, [
                      l("bdi", fM, o(Ae.value.publicationType || u(t)("library", "Publication")), 1),
                      Ae.value.extension ? (h(), p("span", hM, [
                        b[129] || (b[129] = ae(" · ", -1)),
                        l("bdi", pM, o(Rs(Ae.value.extension)), 1)
                      ])) : E("", !0)
                    ]),
                    l("div", vM, [
                      l("a", {
                        class: "button primary",
                        href: Ae.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => ai(Ae.value, f))
                      }, o(u(t)("library", "Open")), 9, bM),
                      de(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          de(u(Ic), {
                            href: Ae.value.filesUrl
                          }, {
                            default: ke(() => [
                              ae(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          de(u(Ic), {
                            href: Ae.value.downloadUrl
                          }, {
                            default: ke(() => [
                              ae(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          de(u(Ic), {
                            href: Ae.value.detailsUrl
                          }, {
                            default: ke(() => [
                              ae(o(u(t)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                (h(), Fe(hd, {
                  key: Ae.value.id,
                  "item-ids": [Number(Ae.value.id)],
                  "request-token": gt.value,
                  "lists-url": Ei.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (h(), p(Y, null, he(Rg, (f) => l("button", {
                    key: f.key,
                    type: "button",
                    class: Ee({ active: In.value === f.key }),
                    "aria-current": In.value === f.key ? "page" : void 0,
                    onClick: (F) => In.value = f.key
                  }, o(u(t)("library", f.label)), 11, mM)), 64))
                ], 8, gM),
                In.value === "overview" ? (h(), p("section", yM, [
                  l("h3", _M, o(u(t)("library", "Overview")), 1),
                  sf.value ? (h(), p("p", wM, [
                    l("bdi", kM, o(sf.value), 1)
                  ])) : E("", !0),
                  l("dl", SM, [
                    Ae.value.publication ? (h(), p("div", CM, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: As("publication", Ae.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => Es(f, "publication", Ae.value.publication))
                        }, [
                          l("bdi", AM, o(Ae.value.publication), 1)
                        ], 8, TM)
                      ])
                    ])) : E("", !0),
                    Ae.value.publicationDate ? (h(), p("div", EM, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        Dn.value ? (h(), p("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: As("year", Dn.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => Es(f, "year", Dn.value))
                        }, o(Dn.value), 9, $M)) : E("", !0),
                        Dn.value && Ae.value.publicationDate !== Dn.value ? (h(), p("span", xM, " · ")) : E("", !0),
                        Ae.value.publicationDate !== Dn.value ? (h(), p("span", OM, o(Ae.value.publicationDate), 1)) : E("", !0)
                      ])
                    ])) : E("", !0),
                    Ae.value.publisher ? (h(), p("div", NM, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: As("publisher", Ae.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => Es(f, "publisher", Ae.value.publisher))
                        }, [
                          l("bdi", IM, o(Ae.value.publisher), 1)
                        ], 8, RM)
                      ])
                    ])) : E("", !0),
                    of.value.length ? (h(), p("div", LM, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", PM, [
                        (h(!0), p(Y, null, he(of.value, (f) => (h(), p("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: As("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (F) => Es(F, "language", f)
                        }, [
                          l("bdi", FM, o(f), 1)
                        ], 8, DM))), 128))
                      ])
                    ])) : E("", !0),
                    Ae.value.shelf ? (h(), p("div", MM, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(Ae.value.shelf), 1)
                    ])) : E("", !0)
                  ])
                ])) : In.value === "metadata" ? (h(), p("section", UM, [
                  sr.value ? (h(), Fe(vg, {
                    key: `${Ae.value.id}:${Ae.value.title}:${Ae.value.creators}`,
                    "item-id": Number(Ae.value.id),
                    "request-token": gt.value
                  }, null, 8, ["item-id", "request-token"])) : E("", !0),
                  l("h3", zM, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ce(Ug, ["prevent"])
                  }, [
                    l("label", null, [
                      ae(o(u(t)("library", "Title")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => yt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ze, yt.title]
                      ])
                    ]),
                    l("label", null, [
                      de(Ke, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: ke(() => [
                          ae(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => yt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [ze, yt.series]
                      ])
                    ]),
                    l("label", null, [
                      de(Ke, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: ke(() => [
                          ae(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => yt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [ze, yt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      de(Ke, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: ke(() => [
                          ae(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ye(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => yt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [ze, yt.genre]
                      ])
                    ]),
                    l("label", null, [
                      ae(o(u(t)("library", "Publication date")), 1),
                      ye(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => yt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, jM), [
                        [ze, yt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (h(!0), p(Y, null, he(yt.identifiers, (f, F) => (h(), p("div", {
                        key: F,
                        class: "library-sidebar-identifier"
                      }, [
                        ye(l("input", {
                          "onUpdate:modelValue": (ve) => f.scheme = ve,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, BM), [
                          [ze, f.scheme]
                        ]),
                        ye(l("input", {
                          "onUpdate:modelValue": (ve) => f.displayValue = ve,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, HM), [
                          [ze, f.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ve) => Mg(F)
                        }, o(u(t)("library", "Remove")), 9, VM)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Fg
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    de(Ke, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: ke(() => [
                        ae(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    Bi.error ? (h(), p("p", qM, o(Bi.error), 1)) : Bi.saved ? (h(), p("p", GM, o(u(t)("library", "Metadata saved.")), 1)) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Bi.saving
                    }, o(Bi.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, KM)
                  ], 32),
                  $s(Ae.value).length ? (h(), p("section", WM, [
                    l("h4", YM, [
                      de(Ke, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: ke(() => [
                          ae(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (h(!0), p(Y, null, he($s(Ae.value), (f) => (h(), p("div", {
                        key: f.field
                      }, [
                        l("dt", null, o(f.field) + " · " + o(f.sourceProvenance), 1),
                        l("dd", null, [
                          ae(o(u(t)("library", "Current")) + ": " + o(f.currentValue || "—"), 1),
                          b[130] || (b[130] = l("br", null, null, -1)),
                          ae(o(u(t)("library", "Suggestion")) + ": " + o(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : E("", !0)
                ])) : (h(), p("section", ZM, [
                  l("h3", XM, o(u(t)("library", "Activity")), 1),
                  l("dl", JM, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(Ae.value.scanStatus || "—"), 1)
                    ]),
                    Ae.value.workflowStatus ? (h(), p("div", QM, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(Ae.value.workflowStatus), 1)
                    ])) : E("", !0),
                    Ae.value.metadataSource ? (h(), p("div", e9, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(Ae.value.metadataSource), 1)
                    ])) : E("", !0),
                    Ae.value.cachedPath ? (h(), p("div", t9, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", i9, [
                        Ae.value.openUrl ? (h(), p("a", {
                          key: 0,
                          href: Ae.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => ai(Ae.value, f))
                        }, [
                          l("bdi", n9, o(Ae.value.cachedPath), 1)
                        ], 8, a9)) : (h(), p("bdi", r9, o(Ae.value.cachedPath), 1))
                      ])
                    ])) : E("", !0)
                  ])
                ])),
                Ae.value.canonicalAuthors?.length ? (h(), p("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Authors")
                }, [
                  (h(!0), p(Y, null, he(Ae.value.canonicalAuthors, (f) => (h(), p("a", {
                    key: f.id,
                    class: "button secondary",
                    href: `${w.generateUrl("/apps/library/")}?authors=1&authorId=${f.id}`
                  }, [
                    l("bdi", o9, o(f.name), 1)
                  ], 8, s9))), 128))
                ], 8, l9)) : Ae.value.authors?.length ? (h(), p("nav", {
                  key: 4,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (h(!0), p(Y, null, he(Ae.value.authors, (f) => (h(), p("a", {
                    key: f,
                    class: "button secondary",
                    href: vm(f)
                  }, [
                    l("bdi", d9, o(f), 1)
                  ], 8, c9))), 128))
                ], 8, u9)) : E("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Cs.value,
                    onClick: b[110] || (b[110] = (f) => xs(Cs.value))
                  }, o(u(t)("library", "Previous item")), 9, h9),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ts.value,
                    onClick: b[111] || (b[111] = (f) => xs(Ts.value))
                  }, o(u(t)("library", "Next item")), 9, p9)
                ], 8, f9)
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
function y9() {
  window.LibraryStartupWatchdog?.fail();
}
function _9(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = fo("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !_9(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: fo("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  e_(m9, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  y9(), console.error("[library] Vue startup failed", e);
}
